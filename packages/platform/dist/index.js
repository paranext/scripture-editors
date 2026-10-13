import { jsx as P, jsxs as Xe, Fragment as Ii } from "react/jsx-runtime";
import { forwardRef as pi, useState as Ae, useRef as te, useCallback as _e, useEffect as H, useMemo as ut, memo as nS, createContext as my, useContext as yy, Children as rS, isValidElement as iS, cloneElement as sS, useLayoutEffect as js, useImperativeHandle as wc } from "react";
import { assertSafeKey as kt, isValidBookCode as oS, MARKER_OBJECT_PROPS as aS, USJ_VERSION as tr, USJ_TYPE as nr, indexesFromUsjJsonPath as $n, isUsjTextContentLocation as Ir, usjJsonPathFromIndexes as Nt, isUsjPropertyValueLocation as No, isUsjClosingMarkerLocation as ws, isUsjClosingAttributeMarkerLocation as Oo, isUsjAttributeKeyLocation as $o, isUsjAttributeMarkerLocation as Nc, isUsjMarkerLocation as Df, getUsjDocumentLocationTypeName as cS, EMPTY_USJ as by } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as yt, $parseSerializedNode as Lr, createCommand as Kf, DecoratorNode as na, ElementNode as cr, isHTMLElement as Hi, TextNode as it, $isRangeSelection as M, $getEditor as Ut, $getNodeByKey as X, $isTextNode as C, createState as Vs, $getState as de, $getSelection as N, $isNodeSelection as Oc, ParagraphNode as Uf, $isRootNode as Mn, HISTORIC_TAG as $c, $createTextNode as Re, $setState as Ht, $isElementNode as E, $getCommonAncestor as lS, $isLineBreakNode as Gi, NODE_STATE_KEY as qr, $isDecoratorNode as yn, $addUpdateTag as jt, $getRoot as Ee, $createRangeSelection as Dr, $createPoint as Qt, $setSelection as Un, SELECTION_CHANGE_COMMAND as hn, $getCharacterOffsets as Bf, KEY_DOWN_COMMAND as _r, COMMAND_PRIORITY_HIGH as Ge, SELECTION_INSERT_CLIPBOARD_NODES_COMMAND as uS, COMMAND_PRIORITY_CRITICAL as He, $getNearestNodeFromDOMNode as Ji, HISTORY_MERGE_TAG as Ff, CLICK_COMMAND as Rc, COMMAND_PRIORITY_EDITOR as Li, DELETE_CHARACTER_COMMAND as Ic, DELETE_WORD_COMMAND as zf, DELETE_LINE_COMMAND as Va, COMMAND_PRIORITY_NORMAL as kr, CONTROLLED_TEXT_INSERTION_COMMAND as ra, PASTE_COMMAND as Zn, CUT_COMMAND as rr, REMOVE_TEXT_COMMAND as ky, isDOMNode as xy, DROP_COMMAND as jf, COPY_COMMAND as Ns, COMMAND_PRIORITY_LOW as Xt, getDOMSelection as fS, isSelectionWithinEditor as Ty, $createRangeSelectionFromDom as Cy, isDOMTextNode as dS, BLUR_COMMAND as Vf, SKIP_DOM_SELECTION_TAG as Or, CLEAR_HISTORY_COMMAND as pS, INSERT_PARAGRAPH_COMMAND as Ro, INSERT_LINE_BREAK_COMMAND as hS, SELECT_ALL_COMMAND as vy, $selectAll as gS, $isRootOrShadowRoot as Wf, CAN_UNDO_COMMAND as mS, CAN_REDO_COMMAND as yS, DRAGSTART_COMMAND as bS, $createNodeSelection as Sy, $hasUpdateTag as kS, getDOMSelectionFromTarget as xS, $onUpdate as _y, KEY_ENTER_COMMAND as My, LineBreakNode as Ey, $copyNode as TS, FOCUS_COMMAND as CS, createEditor as Hf, isExactShortcutMatch as vS, getDOMTextNode as SS, KEY_ESCAPE_COMMAND as Ay, UNDO_COMMAND as Py, REDO_COMMAND as wy, CLEAR_EDITOR_COMMAND as _S } from "lexical";
import { addClassNamesToElement as yo, removeClassNamesFromElement as Oa, $findMatchingParent as Qe, $dfsIterator as Lc, $dfs as Yi, mergeRegister as et, registerNestedElementResolver as Gf, $unwrapNode as yu, IS_APPLE as Os } from "@lexical/utils";
import { useLexicalNodeSelection as MS } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as yr } from "fast-equals";
import Ts from "quill-delta";
import { useLexicalComposerContext as Ce } from "@lexical/react/LexicalComposerContext";
import { graphemeSegments as ES } from "unicode-segmenter/grapheme";
import { copyToClipboard as AS, $getLexicalContent as PS } from "@lexical/clipboard";
import { TreeView as wS } from "@lexical/react/LexicalTreeView";
import * as NS from "react-dom";
import { createPortal as wi } from "react-dom";
import { LexicalComposer as Ny } from "@lexical/react/LexicalComposer";
import { ContentEditable as Oy } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as $y } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Ry } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Iy } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as OS } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as $S, createDOMRange as RS, createRectsFromDOMRange as IS } from "@lexical/selection";
import { autoUpdate as LS, computePosition as qS, shift as DS, flip as KS } from "@floating-ui/dom";
import { $generateNodesFromDOM as US } from "@lexical/html";
import { AutoFocusPlugin as BS } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as FS } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Ly, LexicalCollaboration as zS } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as jS } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as VS } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as WS, $isRootTextContentEmpty as HS } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as GS } from "@lexical/yjs";
import { Array as Sh, Map as _h, YArrayEvent as JS } from "yjs";
const Nl = (e) => yt(Lr(e)), YS = {
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
function Jf(e) {
  return YS[e];
}
const q = " ", Io = "​", Pt = q, Yf = `${q}|`, Bn = "p", Lo = "+", qy = "-", hi = "immutable-note-caller", Dy = "immutable-verse", Wa = "chapter", bu = "verse", Mh = "invalid", XS = "text-spacing", QS = "formatted-font", ZS = "marker-", ia = "external-usj-mutation", e_ = "selection-change", Oi = "cursor-change", Xf = Kf("APP_PLACED_CARET_COMMAND"), ku = "annotation-change", $a = "typed-mark-wrap", Qf = "delta-change", Ky = "marker-settle", t_ = [
  ia,
  e_,
  Oi,
  ku,
  Qf
], Uy = 2, qi = "zmsc-s", _s = "zmsc-e", n_ = [qi, _s], r_ = [
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
  qi,
  _s
], By = 1, Zf = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], i_ = Zf.filter((e) => e !== "sid" && e !== "eid");
class ir extends na {
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
  constructor(t = "", n, r, i, s, o) {
    super(s), this.__marker = t, this.__sid = n, this.__eid = r, this.__unknownAttributes = i, this.__attributeOrder = o;
  }
  static getType() {
    return "ms";
  }
  static clone(t) {
    const { __marker: n, __sid: r, __eid: i, __unknownAttributes: s, __attributeOrder: o, __key: a } = t;
    return new ir(n, r, i, s, a, o);
  }
  static importJSON(t) {
    return zy().updateFromJSON(t);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (r_.includes(t) || t.startsWith("z") || (n?.includes(t) ?? !1));
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setSid(t.sid).setEid(t.eid).setUnknownAttributes(t.unknownAttributes).setAttributeOrder(t.attributeOrder);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setSid(t) {
    if (this.__sid === t)
      return this;
    const n = this.getWritable();
    return n.__sid = t, n;
  }
  getSid() {
    return this.getLatest().__sid;
  }
  setEid(t) {
    if (this.__eid === t)
      return this;
    const n = this.getWritable();
    return n.__eid = t, n;
  }
  getEid() {
    return this.getLatest().__eid;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  setAttributeOrder(t) {
    const n = this.getWritable();
    return n.__attributeOrder = t, n;
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
      version: By
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Fy(e) {
  return n_.includes(e);
}
function zy(e, t, n, r, i) {
  return yt(new ir(e, t, n, r, void 0, i));
}
function Ke(e) {
  return e instanceof ir;
}
const ed = "f", s_ = [
  // Footnote
  ed,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function va(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const o_ = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], jy = 1;
class tt extends cr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = ed, n, r = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = n ?? (va(t) === "crossref" ? qy : Lo), this.__isCollapsed = r, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: n, __caller: r, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new tt(n, r, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => c_(t) ? {
        conversion: a_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return td().updateFromJSON(t);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (s_.includes(t) || (n?.includes(t) ?? !1));
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setCaller(t.caller).setIsCollapsed(t.isCollapsed).setCategory(t.category).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setCaller(t) {
    if (this.__caller === t)
      return this;
    const n = this.getWritable();
    return n.__caller = t, n;
  }
  getCaller() {
    return this.getLatest().__caller;
  }
  setIsCollapsed(t) {
    if (this.__isCollapsed === t)
      return this;
    const n = this.getWritable();
    return n.__isCollapsed = t, n;
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
    const n = this.getWritable();
    return n.__category = t, n;
  }
  getCategory() {
    return this.getLatest().__category;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement("span");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", va(this.__marker)), t;
  }
  updateDOM(t, n) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (n.setAttribute("data-marker", this.__marker), n.classList.remove(`usfm_${t.__marker}`), n.classList.add(`usfm_${this.__marker}`), n.setAttribute("data-note-kind", va(this.__marker))), t.__caller !== this.__caller && n.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Hi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), n.setAttribute("data-caller", this.getCaller()), n.setAttribute("data-note-kind", va(this.getMarker()))), { element: n };
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
      version: jy
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
function a_(e) {
  const t = e.getAttribute("data-marker") ?? "f", n = e.getAttribute("data-caller") ?? "", r = e.classList.contains("collapsed");
  return { node: td(t, n, r) };
}
function td(e, t, n, r, i) {
  return yt(new tt(e, t, n, r, i));
}
function c_(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return tt.isValidMarker(t) && e.classList.contains(tt.getType());
}
function D(e) {
  return e instanceof tt;
}
var v;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(v || (v = {}));
var T;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(T || (T = {}));
const xu = {
  id: {
    category: v.FileIdentification,
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
    category: v.FileIdentification,
    type: T.Paragraph,
    description: "File markup version information",
    hasEndMarker: !1,
    children: void 0
  },
  ide: {
    category: v.FileIdentification,
    type: T.Paragraph,
    description: "File encoding information",
    hasEndMarker: !1,
    children: {
      Remarks: ["rem", "sts"]
    }
  },
  h: {
    category: v.Headers,
    type: T.Paragraph,
    description: "Running header text for a book (basic)",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h1: {
    category: v.Headers,
    type: T.Paragraph,
    description: "Running header text",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h2: {
    category: v.Headers,
    type: T.Paragraph,
    description: "Running header text, left side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h3: {
    category: v.Headers,
    type: T.Paragraph,
    description: "Running header text, right side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  toc1: {
    category: v.Headers,
    type: T.Paragraph,
    description: "Long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc2: {
    category: v.Headers,
    type: T.Paragraph,
    description: "Short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc3: {
    category: v.Headers,
    type: T.Paragraph,
    description: "Book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  toca1: {
    category: v.Headers,
    type: T.Paragraph,
    description: "Alternative language long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca2: {
    category: v.Headers,
    type: T.Paragraph,
    description: "Alternative language short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca3: {
    category: v.Headers,
    type: T.Paragraph,
    description: "Alternative language book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  rem: {
    category: v.Remarks,
    type: T.Paragraph,
    description: "Comments and remarks",
    hasEndMarker: !1,
    children: void 0
  },
  sts: {
    category: v.Remarks,
    type: T.Paragraph,
    description: "Status of this file",
    hasEndMarker: !1,
    children: void 0
  },
  restore: {
    category: v.Remarks,
    type: T.Paragraph,
    description: "Project restore information",
    hasEndMarker: !1,
    children: void 0
  },
  imt: {
    category: v.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt1: {
    category: v.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt2: {
    category: v.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt3: {
    category: v.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 3",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt4: {
    category: v.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 4 (usually within parenthesis)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte: {
    category: v.Introduction,
    type: T.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte1: {
    category: v.Introduction,
    type: T.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte2: {
    category: v.Introduction,
    type: T.Paragraph,
    description: "Introduction major title at introduction end, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is: {
    category: v.Introduction,
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
    category: v.Introduction,
    type: T.Paragraph,
    description: "Introduction section heading, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is2: {
    category: v.Introduction,
    type: T.Paragraph,
    description: "Introduction section heading, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  iot: {
    category: v.Introduction,
    type: T.Paragraph,
    description: "Introduction outline title (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  io: {
    category: v.Introduction,
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
    category: v.Introduction,
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
    category: v.Introduction,
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
    category: v.Introduction,
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
    category: v.Introduction,
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
    category: v.Introduction,
    type: T.Character,
    description: "Introduction references range for outline entry; for marking references separately",
    hasEndMarker: !0,
    children: void 0
  },
  ip: {
    category: v.Introduction,
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
    category: v.Introduction,
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
    category: v.Introduction,
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
    category: v.Introduction,
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
    category: v.Introduction,
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
    category: v.Introduction,
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
    category: v.Introduction,
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
    category: v.Introduction,
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
    category: v.Introduction,
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
    category: v.Introduction,
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
    category: v.Introduction,
    type: T.Paragraph,
    description: "Introduction blank line",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"]
    }
  },
  iq: {
    category: v.Introduction,
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
    category: v.Introduction,
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
    category: v.Introduction,
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
    category: v.Introduction,
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
    category: v.Introduction,
    type: T.Paragraph,
    description: "Introduction explanatory or bridge text (e.g. explanation of missing book in Short Old Testament)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  iqt: {
    category: v.Introduction,
    type: T.Character,
    description: "For quoted scripture text appearing in the introduction",
    hasEndMarker: !0,
    children: void 0
  },
  ie: {
    category: v.Introduction,
    type: T.Paragraph,
    description: "Introduction ending marker",
    hasEndMarker: !1,
    children: void 0
  },
  c: {
    category: v.DivisionMarks,
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
    category: v.DivisionMarks,
    type: T.Character,
    description: "Second (alternate) chapter number (for coding dual versification; useful for places where different traditions of chapter breaks need to be supported in the same translation)",
    hasEndMarker: !0,
    children: void 0
  },
  cp: {
    category: v.DivisionMarks,
    type: T.Paragraph,
    description: "Published chapter number (chapter string that should appear in the published text)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"]
    }
  },
  cl: {
    category: v.DivisionMarks,
    type: T.Paragraph,
    description: "Chapter label used for translations that add a word such as 'Chapter' before chapter numbers (e.g. Psalms). The subsequent text is the chapter label.",
    hasEndMarker: !1,
    children: void 0
  },
  cd: {
    category: v.DivisionMarks,
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
    category: v.DivisionMarks,
    type: T.Character,
    description: "A verse number (Necessary for normal paratext operation) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  va: {
    category: v.DivisionMarks,
    type: T.Character,
    description: "Second (alternate) verse number (for coding dual numeration in Psalms; see also NRSV Exo 22.1-4)",
    hasEndMarker: !0,
    children: void 0
  },
  vp: {
    category: v.DivisionMarks,
    type: T.Character,
    description: "Published verse marker (verse string that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  p: {
    category: v.Paragraphs,
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
    category: v.Paragraphs,
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
    category: v.Paragraphs,
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
    category: v.Paragraphs,
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
    category: v.Paragraphs,
    type: T.Paragraph,
    description: "Letter Closing",
    hasEndMarker: !1,
    children: {
      SpecialText: ["tl", "sig", "pn", "png", "addpn", "add"]
    }
  },
  pmo: {
    category: v.Paragraphs,
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
    category: v.Paragraphs,
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
    category: v.Paragraphs,
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
    category: v.Paragraphs,
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
    category: v.Paragraphs,
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
    category: v.Paragraphs,
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
    category: v.Paragraphs,
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
    category: v.Paragraphs,
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
    category: v.Paragraphs,
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
    category: v.Paragraphs,
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
    category: v.Paragraphs,
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
    category: v.Poetry,
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
    category: v.Poetry,
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
    category: v.Poetry,
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
    category: v.Poetry,
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
    category: v.Poetry,
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
    category: v.Poetry,
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
    category: v.Poetry,
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
    category: v.Poetry,
    type: T.Character,
    description: "Poetry text, Selah",
    hasEndMarker: !0,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  qa: {
    category: v.Poetry,
    type: T.Paragraph,
    description: "Poetry text, Acrostic marker/heading",
    hasEndMarker: !1,
    children: void 0
  },
  qac: {
    category: v.Poetry,
    type: T.Character,
    description: "Poetry text, Acrostic markup of the first character of a line of acrostic poetry",
    hasEndMarker: !0,
    children: void 0
  },
  qm: {
    category: v.Poetry,
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
    category: v.Poetry,
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
    category: v.Poetry,
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
    category: v.Poetry,
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
    category: v.Poetry,
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
    category: v.Poetry,
    type: T.Paragraph,
    description: "Poetry text stanza break (e.g. stanza break) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  mt: {
    category: v.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book (if single level)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt1: {
    category: v.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book (if multiple levels) (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt2: {
    category: v.TitlesHeadings,
    type: T.Paragraph,
    description: "A secondary title usually occurring before the main title (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt3: {
    category: v.TitlesHeadings,
    type: T.Paragraph,
    description: "A secondary title occurring after the main title",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt4: {
    category: v.TitlesHeadings,
    type: T.Paragraph,
    description: "A small secondary title sometimes occurring within parentheses",
    hasEndMarker: !1,
    children: void 0
  },
  mte: {
    category: v.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  mte1: {
    category: v.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte2"]
    }
  },
  mte2: {
    category: v.TitlesHeadings,
    type: T.Paragraph,
    description: "A secondary title occurring before or after the 'ending' main title",
    hasEndMarker: !1,
    children: void 0
  },
  ms: {
    category: v.TitlesHeadings,
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
    category: v.TitlesHeadings,
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
    category: v.TitlesHeadings,
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
    category: v.TitlesHeadings,
    type: T.Paragraph,
    description: "A major section division heading, level 3",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mr"],
      Footnotes: ["f", "fe"]
    }
  },
  mr: {
    category: v.TitlesHeadings,
    type: T.Paragraph,
    description: "A major section division references range heading (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  s: {
    category: v.TitlesHeadings,
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
    category: v.TitlesHeadings,
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
    category: v.TitlesHeadings,
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
    category: v.TitlesHeadings,
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
    category: v.TitlesHeadings,
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
    category: v.TitlesHeadings,
    type: T.Paragraph,
    description: "A section division references range heading",
    hasEndMarker: !1,
    children: void 0
  },
  r: {
    category: v.TitlesHeadings,
    type: T.Paragraph,
    description: "Parallel reference(s) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  sp: {
    category: v.TitlesHeadings,
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
    category: v.TitlesHeadings,
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
    category: v.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  sd1: {
    category: v.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: void 0
  },
  sd2: {
    category: v.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 2",
    hasEndMarker: !1,
    children: void 0
  },
  sd3: {
    category: v.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 3",
    hasEndMarker: !1,
    children: void 0
  },
  sd4: {
    category: v.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 4",
    hasEndMarker: !1,
    children: void 0
  },
  lh: {
    category: v.Lists,
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
    category: v.Lists,
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
    category: v.Lists,
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
    category: v.Lists,
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
    category: v.Lists,
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
    category: v.Lists,
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
    category: v.Lists,
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
    category: v.Lists,
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
    category: v.Lists,
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
    category: v.Lists,
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
    category: v.Lists,
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
    category: v.Lists,
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
    category: v.Lists,
    type: T.Character,
    description: "List entry total text",
    hasEndMarker: !0,
    children: void 0
  },
  lik: {
    category: v.Lists,
    type: T.Character,
    description: "Structured list entry key text",
    hasEndMarker: !0,
    children: void 0
  },
  liv: {
    category: v.Lists,
    type: T.Character,
    description: "Structured list entry value 1 content (if single value)",
    hasEndMarker: !0,
    children: void 0
  },
  liv1: {
    category: v.Lists,
    type: T.Character,
    description: "Structured list entry value 1 content (if multiple values)",
    hasEndMarker: !0,
    children: void 0
  },
  liv2: {
    category: v.Lists,
    type: T.Character,
    description: "Structured list entry value 2 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv3: {
    category: v.Lists,
    type: T.Character,
    description: "Structured list entry value 3 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv4: {
    category: v.Lists,
    type: T.Character,
    description: "Structured list entry value 4 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv5: {
    category: v.Lists,
    type: T.Character,
    description: "Structured list entry value 5 content",
    hasEndMarker: !0,
    children: void 0
  },
  f: {
    category: v.Footnotes,
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
    category: v.Footnotes,
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
    category: v.Footnotes,
    type: T.Character,
    description: "The origin reference for the footnote (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  ft: {
    category: v.Footnotes,
    type: T.Character,
    description: "Footnote text, Protocanon (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fk: {
    category: v.Footnotes,
    type: T.Character,
    description: "A footnote keyword (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fq: {
    category: v.Footnotes,
    type: T.Character,
    description: "A footnote scripture quote or alternate rendering (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fqa: {
    category: v.Footnotes,
    type: T.Character,
    description: "A footnote alternate rendering for a portion of scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  fl: {
    category: v.Footnotes,
    type: T.Character,
    description: "A footnote label text item, for marking or 'labelling' the type or alternate translation being provided in the note.",
    hasEndMarker: !0,
    children: void 0
  },
  fw: {
    category: v.Footnotes,
    type: T.Character,
    description: "A footnote witness list, for distinguishing a list of sigla representing witnesses in critical editions.",
    hasEndMarker: !0,
    children: void 0
  },
  fp: {
    category: v.Footnotes,
    type: T.Character,
    description: "A Footnote additional paragraph marker",
    hasEndMarker: !0,
    children: void 0
  },
  fv: {
    category: v.Footnotes,
    type: T.Character,
    description: "A verse number within the footnote text",
    hasEndMarker: !0,
    children: void 0
  },
  fdc: {
    category: v.Footnotes,
    type: T.Character,
    description: "Footnote text, applies to Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  fm: {
    category: v.Footnotes,
    type: T.Character,
    description: "An additional footnote marker location for a previous footnote",
    hasEndMarker: !0,
    children: void 0
  },
  x: {
    category: v.CrossReferences,
    type: T.Note,
    description: "A list of cross references (basic)",
    hasEndMarker: !0,
    children: {
      CrossReferences: ["xo", "xop", "xt", "xta", "xk", "xq", "xot", "xnt", "xdc"],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  xo: {
    category: v.CrossReferences,
    type: T.Character,
    description: "The cross reference origin reference (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xop: {
    category: v.CrossReferences,
    type: T.Character,
    description: "Published cross reference origin reference (origin reference that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  xt: {
    category: v.CrossReferences,
    type: T.Character,
    description: "The cross reference target reference(s), protocanon only (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xta: {
    category: v.CrossReferences,
    type: T.Character,
    description: "Cross reference target references added text",
    hasEndMarker: !0,
    children: void 0
  },
  xk: {
    category: v.CrossReferences,
    type: T.Character,
    description: "A cross reference keyword",
    hasEndMarker: !0,
    children: void 0
  },
  xq: {
    category: v.CrossReferences,
    type: T.Character,
    description: "A cross-reference quotation from the scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  xot: {
    category: v.CrossReferences,
    type: T.Character,
    description: "Cross-reference target reference(s), Old Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xnt: {
    category: v.CrossReferences,
    type: T.Character,
    description: "Cross-reference target reference(s), New Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xdc: {
    category: v.CrossReferences,
    type: T.Character,
    description: "Cross-reference target reference(s), Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  rq: {
    category: v.CrossReferences,
    type: T.Character,
    description: "A cross-reference indicating the source text for the preceding quotation.",
    hasEndMarker: !0,
    children: void 0
  },
  qt: {
    category: v.SpecialText,
    type: T.Character,
    description: "For Old Testament quoted text appearing in the New Testament (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  nd: {
    category: v.SpecialText,
    type: T.Character,
    description: "For name of deity (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  tl: {
    category: v.SpecialText,
    type: T.Character,
    description: "For transliterated words",
    hasEndMarker: !0,
    children: void 0
  },
  dc: {
    category: v.SpecialText,
    type: T.Character,
    description: "Deuterocanonical/LXX additions or insertions in the Protocanonical text",
    hasEndMarker: !0,
    children: void 0
  },
  bk: {
    category: v.SpecialText,
    type: T.Character,
    description: "For the quoted name of a book",
    hasEndMarker: !0,
    children: void 0
  },
  sig: {
    category: v.SpecialText,
    type: T.Character,
    description: "For the signature of the author of an Epistle",
    hasEndMarker: !0,
    children: void 0
  },
  pn: {
    category: v.SpecialText,
    type: T.Character,
    description: "For a proper name",
    hasEndMarker: !0,
    children: void 0
  },
  png: {
    category: v.SpecialText,
    type: T.Character,
    description: "For a geographic proper name",
    hasEndMarker: !0,
    children: void 0
  },
  addpn: {
    category: v.SpecialText,
    type: T.Character,
    description: "For chinese words to be dot underline & underline",
    hasEndMarker: !0,
    children: void 0
  },
  wj: {
    category: v.SpecialText,
    type: T.Character,
    description: "For marking the words of Jesus",
    hasEndMarker: !0,
    children: void 0
  },
  k: {
    category: v.SpecialText,
    type: T.Character,
    description: "For a keyword",
    hasEndMarker: !0,
    children: void 0
  },
  sls: {
    category: v.SpecialText,
    type: T.Character,
    description: "To represent where the original text is in a secondary language or from an alternate text source",
    hasEndMarker: !0,
    children: void 0
  },
  ord: {
    category: v.SpecialText,
    type: T.Character,
    description: "For the text portion of an ordinal number",
    hasEndMarker: !0,
    children: void 0
  },
  add: {
    category: v.SpecialText,
    type: T.Character,
    description: "For a translational addition to the text",
    hasEndMarker: !0,
    children: void 0
  },
  lit: {
    category: v.SpecialText,
    type: T.Paragraph,
    description: "For a comment or note inserted for liturgical use",
    hasEndMarker: !1,
    children: void 0
  },
  no: {
    category: v.CharacterStyling,
    type: T.Character,
    description: "A character style, use normal text",
    hasEndMarker: !0,
    children: void 0
  },
  it: {
    category: v.CharacterStyling,
    type: T.Character,
    description: "A character style, use italic text",
    hasEndMarker: !0,
    children: void 0
  },
  bd: {
    category: v.CharacterStyling,
    type: T.Character,
    description: "A character style, use bold text",
    hasEndMarker: !0,
    children: void 0
  },
  bdit: {
    category: v.CharacterStyling,
    type: T.Character,
    description: "A character style, use bold + italic text",
    hasEndMarker: !0,
    children: void 0
  },
  em: {
    category: v.CharacterStyling,
    type: T.Character,
    description: "A character style, use emphasized text style",
    hasEndMarker: !0,
    children: void 0
  },
  sc: {
    category: v.CharacterStyling,
    type: T.Character,
    description: "A character style, for small capitalization text",
    hasEndMarker: !0,
    children: void 0
  },
  sup: {
    category: v.CharacterStyling,
    type: T.Character,
    description: "A character style, for superscript text. Typically for use in critical edition footnotes.",
    hasEndMarker: !0,
    children: void 0
  },
  pb: {
    category: v.Breaks,
    type: T.Paragraph,
    description: "Page Break used for new reader portions and children's bibles where content is controlled by the page",
    hasEndMarker: !1,
    children: void 0
  }
}, Ti = {
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
}, Eh = {
  p: { children: Ti },
  q: { children: Ti },
  q1: { children: Ti },
  q2: { children: Ti },
  q3: { children: Ti },
  q4: { children: Ti },
  b: { children: Ti },
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
    category: v.SpecialFeatures,
    type: T.Character,
    description: "A wordlist/glossary/dictionary entry marker for study/analysis purposes",
    hasEndMarker: !0
  },
  rb: {
    category: v.SpecialFeatures,
    type: T.Character,
    description: "A ruby glossing marker for study/analysis purposes",
    hasEndMarker: !0
  },
  jmp: {
    category: v.SpecialFeatures,
    type: T.Character,
    description: "A hyperlink marker for study/analysis purposes",
    hasEndMarker: !0
  },
  // The generated table has no `fig`, but `usfm.sty` does (and so does the stylesheet data every
  // project supplies). Without an entry here, a document parsed BEFORE its project stylesheet
  // resolves falls back to this table, reads `\fig` as an unknown marker, and breaks the figure
  // into its own paragraph with the closer stranded as unmatched.
  fig: {
    category: v.SpecialFeatures,
    type: T.Character,
    description: "Illustration [Columns to span, height, filename, caption text]",
    hasEndMarker: !0
  }
};
function xr(e) {
  const t = Object.hasOwn(xu, e) ? xu[e] : void 0, n = Object.hasOwn(Eh, e) ? Eh[e] : void 0;
  if (!t)
    return n?.category !== void 0 && n.type !== void 0 && n.description !== void 0 && n.hasEndMarker !== void 0 ? { ...n } : void 0;
  if (!n)
    return t;
  let r = t.children ? { ...t.children } : void 0;
  if (n.children === null && (r = void 0), n.children) {
    r = r || {};
    for (const [i, s] of Object.entries(n.children)) {
      const o = i;
      if (s === null)
        Reflect.deleteProperty(r, o);
      else {
        let a = r[o] || [];
        s.remove && (a = a.filter((c) => !s.remove.includes(c))), s.add && (a = [.../* @__PURE__ */ new Set([...a, ...s.add])]), a.length > 0 ? r[o] = a : Reflect.deleteProperty(r, o);
      }
    }
    Object.keys(r).length === 0 && (r = void 0);
  }
  return {
    ...t,
    ...n,
    children: r
  };
}
const sa = "￼", Vy = "v", Wy = "c", Ci = "fig", Ah = "tr", Tu = "esb", Hy = "esbe", Ph = "periph", wh = "alt", Nh = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, l_ = {
  "": "start",
  c: "center",
  r: "end"
};
function Oh(e) {
  const [, , t, n] = e;
  return n ? /^[1-5]$/.test(t) && /^[2-5]$/.test(n) && Number(n) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function $h(e) {
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
const u_ = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function f_(e) {
  let t = "", n = !1, r = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (n || (i = t.length, t += " "), n = !0) : !n && o === Io && s + 1 < e.length && $h(e[s + 1]) || ($h(o) ? (n || (i = t.length, t += o), n = !0) : u_.test(o) && o === r || (t += o, n = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), r = o;
  }
  return t;
}
function d_(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function p_(e, t) {
  let n = t;
  for (; n < e.length; ) {
    const r = e[n];
    if (r === "\\" || r === "|" || r === sa)
      break;
    if (r === "*") {
      n++;
      break;
    }
    if (/[\s\u200B]/.test(r))
      break;
    n++;
  }
  return { name: e.slice(t, n), next: n };
}
const h_ = /^(?:qt[1-5]?|ts)-[se]$/;
function nd(e) {
  return h_.test(e) || Fy(e);
}
function Ol(e, t) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  const r = n;
  for (; n < e.length && e[n] !== sa && !/[\s\u00A0\u200B\\]/.test(e[n]); )
    n++;
  const i = e.slice(r, n);
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  return { word: i, next: n };
}
function g_(e, t) {
  const n = [];
  let r = 0;
  for (let i = 0; i < e.length; i++) {
    if (e[i] !== sa)
      continue;
    const s = t[r];
    r++, (s === "note" || s === "verse") && n.push(i);
  }
  return n;
}
function m_(e, t, n, r) {
  const i = [];
  let s = 0;
  const o = g_(e, r);
  let a = 0, c;
  const l = (f) => {
    if (!f)
      return;
    const d = i[i.length - 1];
    d?.kind === "text" ? d.text += f : i.push({ kind: "text", text: f });
  }, u = (f) => {
    f.split("//").forEach((p, h) => {
      h > 0 && i.push({ kind: "optbreak" }), l(p);
    });
  };
  for (; s < e.length; ) {
    if (e[s] !== "\\") {
      for (; a < o.length && o[a] < s; )
        a++;
      if (o[a] === s) {
        c = void 0, i.push({ kind: "noteEndingPlaceholder" }), s++;
        continue;
      }
      const k = e.indexOf("\\", s);
      let x = k === -1 ? e.length : k;
      a < o.length && (x = Math.min(x, o[a])), u(f_(e.slice(s, x))), s = x;
      continue;
    }
    const f = s, { name: d, next: p } = p_(e, s + 1);
    if (s = p, d === "") {
      l(e.slice(f, s));
      continue;
    }
    if (d === "*") {
      i.push({ kind: "end", marker: "" });
      continue;
    }
    if (d.endsWith("*")) {
      d.slice(0, -1) === c && (c = void 0), i.push({ kind: "end", marker: d.slice(0, -1) });
      continue;
    }
    const h = () => {
      for (; s < e.length && /[\s\u00A0\u200B]/.test(e[s]); )
        s++;
    };
    if (d === Vy) {
      const { word: k, next: x } = Ol(e, s);
      s = x, i.push({ kind: "verse", number: k });
      continue;
    }
    if (d === Wy) {
      const { word: k, next: x } = Ol(e, s);
      s = x, c = void 0, i.push({ kind: "chapter", number: k });
      continue;
    }
    const g = d.startsWith("+"), m = g ? d.slice(1) : d, y = t(m)?.type;
    if (y === T.Note || y === void 0 && tt.isValidMarker(d)) {
      const { word: k, next: x } = Ol(e, s);
      s = x, c = d, i.push({ kind: "note", marker: d, caller: k });
      continue;
    }
    if (y === T.Milestone || y === void 0 && nd(d)) {
      const k = __(e, f, d, s);
      if (k)
        i.push(k.token), k.ejectedText && l(k.ejectedText), s = k.next;
      else {
        const x = e.indexOf("\\", s), A = x === -1 ? e.length : x;
        l(e.slice(f, A)), s = A;
      }
      continue;
    }
    y === T.Paragraph ? (h(), i.push({ kind: "para", marker: d })) : y === T.Character ? (h(), i.push({ kind: "charOpen", marker: m, isNested: g })) : Ha(m) ? (h(), Ha(m)?.shape === "para" ? i.push({ kind: "para", marker: d }) : i.push({ kind: "charOpen", marker: m, isNested: g })) : (h(), !(n || c !== void 0) || d === Tu || d === Hy ? i.push({ kind: "para", marker: d }) : i.push({ kind: "charOpen", marker: m, isNested: g }));
  }
  return i;
}
const Rh = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
}, y_ = {
  chapter: ["ca", "cp"],
  verse: ["va", "vp"],
  note: ["cat"],
  sidebar: ["cat"]
};
function Ha(e) {
  return Object.hasOwn(Rh, e) ? Rh[e] : void 0;
}
function b_(e) {
  return Ha(e) !== void 0;
}
const k_ = /([-\w]+)\s*=\s*"(.*?)"/g, x_ = /[\s\u200B]*[\n\r][\s\u200B]*/g, Gy = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Ws(e) {
  return Gy[e];
}
const T_ = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function C_(e, t) {
  let n = 0;
  for (const r of t) {
    const i = r.index;
    if (i === void 0 || e.slice(n, i).trim() !== "")
      return !1;
    n = i + r[0].length;
  }
  return e.slice(n).trim() === "";
}
function qo(e, t, n = Gy[t]) {
  const r = e.replace(x_, " "), i = /* @__PURE__ */ Object.create(null), s = [...r.matchAll(k_)];
  if (s.length > 0) {
    if (!C_(r, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      T_.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (r.trim() && n)
    return { [n]: r };
}
function oa(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function v_(e) {
  const t = qc(e)[0], n = typeof t == "object" && "content" in t ? t.content : void 0;
  return n ? n.some((r, i) => typeof r != "object" || r.type !== "ms" || typeof n[i + 1] != "string" ? !1 : n.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function S_(e, t, n) {
  let r = t;
  for (; r < e.length && /[\s\u00A0\u200B]/.test(e[r]); )
    r++;
  if (e[r] !== "|")
    return;
  const i = e.indexOf("\\", r);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = qo(e.slice(r + 1, i), n, oa(n));
  if (s)
    return { attributes: s, next: i + 2 };
}
function __(e, t, n, r) {
  const i = e.indexOf("\\", r);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(r, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = qo(s.slice(o + 1), n, oa(n)), !a && s.slice(o + 1).trim() !== "")) {
    const u = s.slice(0, o);
    return {
      token: { kind: "milestone", marker: n },
      next: r + o,
      ejectedText: u.trim() !== "" ? u.replace(/^[ \u00A0]/, "") : void 0
    };
  }
  const c = o >= 0 ? s.slice(0, o) : s;
  if (c.trim() !== "")
    return {
      token: { kind: "milestone", marker: n, attributes: a },
      next: i,
      ejectedText: c.replace(/^[ \u00A0]/, "")
    };
  const l = S_(e, i + 2, n);
  return l ? {
    token: {
      kind: "milestone",
      marker: n,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: n, attributes: a }, next: i + 2 };
}
function gr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", q);
}
function Jr(e) {
  return e.content || (e.content = []), e.content;
}
function qc(e, t) {
  const n = [], r = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, f;
  const d = () => u ? Jr(u) : f ? Jr(f) : n;
  let p = !1;
  const h = () => {
    if (s)
      return o.length > a ? Jr(o[o.length - 1].object) : Jr(s);
    if (o.length > 0)
      return Jr(o[o.length - 1].object);
    if (!i) {
      if (p && !r)
        return d();
      i = { type: "para", marker: Bn, content: [] }, d().push(i);
    }
    return Jr(i);
  }, g = (he) => {
    const F = h();
    typeof he == "string" && typeof F[F.length - 1] == "string" ? F[F.length - 1] = F[F.length - 1] + he : F.push(he);
  }, m = (he) => {
    for (let F = he; F < o.length; F += 1) {
      const oe = o[F].object;
      oe.closed = "false";
    }
  }, y = () => {
    m(0), o.length = 0;
  }, k = (he) => {
    s && (o.length > a && (m(a), o.length = a), a = 0, he || (s.closed = "false"), s = void 0);
  }, x = () => {
    c = void 0, l = void 0;
  }, A = (he, F, oe) => {
    y();
    const [, ve, We, ct] = oe, bt = {
      type: "table:cell",
      marker: ct ? F.slice(0, F.indexOf("-")) : F,
      align: l_[ve],
      content: []
    };
    ct && (bt.colspan = String(Number(ct) + 1 - Number(We))), Jr(he).push(bt), i = bt;
  }, _ = (he) => {
    u && (he || (u.closed = "false"), u = void 0);
  }, j = () => {
    f = void 0;
  };
  let $, ne = -1;
  const fe = (he) => {
    $ = he, ne = -1;
  };
  let I = "", K;
  const ge = () => {
    I && g(gr(I)), I = "";
  }, re = (he = !1) => {
    $?.type === "sidebar" ? I = "" : he && I.endsWith(`
`) && (I = I.slice(0, -1)), $ = void 0, ge();
  }, Le = () => {
    if (!K)
      return;
    const he = { type: "char", marker: K.marker, content: [] };
    K.value && (he.content = [gr(K.value)]), h().push(he), o.push({ object: he }), K = void 0;
  }, me = (he, F) => {
    p = !1, x(), y(), k(!1), i = { type: "para", marker: he, content: [] }, F && (i.content = [gr(F)]), d().push(i);
  }, nt = () => {
    K && (me(K.marker, K.value), K = void 0);
  };
  let rt;
  const rn = (he) => {
    if (!rt)
      return;
    let { value: F } = rt;
    rt = void 0, he && F.endsWith(`
`) && (F = F.slice(0, -1));
    const oe = F.indexOf("|"), ve = oe >= 0 ? qo(F.slice(oe + 1), Ph) : void 0, We = oe >= 0 ? F.slice(0, oe) : F, ct = oe >= 0 && (!ve || !!We && !!ve[wh]), bt = ct ? void 0 : ve, Tn = ct ? F : We, ee = {
      type: "periph",
      ...Tn ? { [wh]: gr(Tn) } : {},
      ...bt
    };
    ee.content = [], d().push(ee), f = ee, i = void 0;
  };
  let Je;
  const dr = () => {
    if (Je) {
      if (Je.shape === "para")
        me(Ci, Je.value);
      else {
        const he = { type: "char", marker: Ci, content: [] };
        Je.value && (he.content = [gr(Je.value)]), h().push(he), o.push({ object: he });
      }
      Je = void 0;
    }
  }, xn = m_(e, t?.getMarker ?? xr, r, t?.placeholders ?? []);
  for (let he = 0; he < xn.length; he++) {
    const F = xn[he];
    if (K) {
      if (F.kind === "text") {
        K.value += F.text;
        continue;
      }
      if (K.shape === "char" && F.kind === "end" && F.marker.replace(/^\+/, "") === K.marker) {
        if (K.value.trim() === "") {
          h().push({ type: "char", marker: K.marker, content: [] }), K = void 0, re();
          continue;
        }
        Object.assign(K.target, {
          [K.attrName]: gr(K.value.trim())
        });
        const oe = K.marker;
        if (K = void 0, oe === "ca") {
          const ve = xn[he + 1];
          ve?.kind === "text" && /^[\s\u200B]*$/.test(ve.text) && he++;
        }
        continue;
      }
      if (K.shape === "para" && (F.kind === "para" || F.kind === "chapter")) {
        const oe = K.value.replace(/[\s\u200B]+$/, "");
        oe === "" ? (me(K.marker), K = void 0) : (Object.assign(K.target, { [K.attrName]: gr(oe) }), K = void 0);
      } else {
        $ = void 0, (F.kind === "para" || F.kind === "chapter") && K.value.endsWith(`
`) && (K.value = K.value.slice(0, -1)), K.shape === "para" ? nt() : Le(), he--;
        continue;
      }
    }
    if (rt) {
      if (F.kind === "text" || F.kind === "optbreak") {
        rt.value += F.kind === "text" ? F.text : "//";
        continue;
      }
      rn(F.kind === "para" || F.kind === "chapter"), he--;
      continue;
    }
    if (Je) {
      if (F.kind === "text" || F.kind === "optbreak") {
        Je.value += F.kind === "text" ? F.text : "//";
        continue;
      }
      if (F.kind === "end" && F.marker.replace(/^\+/, "") === Ci) {
        const oe = Je.value.indexOf("|"), ve = oe >= 0 ? qo(Je.value.slice(oe + 1), Ci) : void 0;
        if (ve) {
          const We = {};
          for (const [Tn, ee] of Object.entries(ve))
            We[Tn === "src" ? "file" : Tn] = ee;
          const ct = {
            type: "figure",
            marker: Ci,
            ...We
          }, bt = Je.value.slice(0, oe);
          bt && (ct.content = [gr(bt)]), g(ct), Je = void 0;
          continue;
        }
      }
      dr(), he--;
      continue;
    }
    if ($)
      if (F.kind === "text") {
        if (F.text.includes(`
`) && /^[\s\u200B]*$/.test(F.text)) {
          I += F.text;
          continue;
        }
        re();
      } else if (F.kind === "charOpen" || F.kind === "para") {
        const oe = F.kind === "para" || !F.isNested ? Ha(F.marker) : void 0, ve = y_[$.type]?.indexOf(F.marker) ?? -1;
        if (oe && oe.targetTypes.includes($.type) && ve > ne) {
          ne = ve, I = "", K = {
            target: $,
            attrName: oe.attrName,
            marker: F.marker,
            shape: oe.shape,
            value: ""
          };
          continue;
        }
        re(F.kind === "para");
      } else
        re(F.kind === "chapter");
    if (!s && !r && (F.kind === "charOpen" && !F.isNested && F.marker === Ci || F.kind === "para" && F.marker === Ci)) {
      y(), Je = { shape: F.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (F.kind) {
      case "text": {
        let oe = F.text;
        if (!s && oe.endsWith(`
`)) {
          const ve = xn[he + 1];
          (ve === void 0 || ve.kind === "para" || ve.kind === "chapter") && (oe = oe.slice(0, -1));
        }
        oe && g(gr(oe));
        break;
      }
      case "para": {
        const oe = !s && !r;
        if (oe && F.marker === Ah) {
          y(), c || (c = { type: "table", content: [] }, d().push(c)), l = { type: "table:row", marker: Ah, content: [] }, Jr(c).push(l), i = l, p = !1;
          break;
        }
        if (oe && l) {
          const ve = Nh.exec(F.marker);
          if (ve && Oh(ve)) {
            A(l, F.marker, ve);
            break;
          }
        }
        if (x(), !r && F.marker === Tu) {
          y(), k(!1), _(!1);
          const ve = {
            type: "sidebar",
            marker: Tu,
            content: []
          };
          d().push(ve), u = ve, i = void 0, fe(u), p = !1;
          break;
        }
        if (F.marker === Hy && u) {
          y(), k(!1), _(!0), i = void 0;
          break;
        }
        if (!r && F.marker === Ph) {
          y(), k(!1), _(!1), j(), rt = { value: "" }, i = void 0, p = !1;
          break;
        }
        me(F.marker);
        break;
      }
      case "verse": {
        k(!1);
        const oe = { type: "verse", marker: Vy, number: F.number };
        g(oe), fe(oe);
        break;
      }
      case "chapter": {
        y(), k(!1), x(), _(!1), j(), i = void 0;
        const oe = {
          type: "chapter",
          marker: Wy,
          number: F.number
        };
        n.push(oe), fe(oe), p = !0;
        break;
      }
      case "note": {
        k(!1);
        const oe = h();
        s = { type: "note", marker: F.marker, caller: F.caller, content: [] }, a = o.length, oe.push(s), fe(s);
        break;
      }
      case "charOpen": {
        if (!s && !r && l && !F.isNested) {
          const We = Nh.exec(F.marker);
          if (We && Oh(We)) {
            A(l, F.marker, We);
            break;
          }
        }
        if (!F.isNested) {
          const We = s ? a : 0;
          m(We), o.length = We;
        }
        const oe = h(), ve = { type: "char", marker: F.marker, content: [] };
        oe.push(ve), o.push({ object: ve });
        break;
      }
      case "end": {
        const oe = F.marker.replace(/^\+/, ""), ve = s ? a : 0, We = o.findLastIndex((ct, bt) => bt >= ve && ct.object.marker === oe);
        We >= 0 ? (M_(o[We].object), m(We + 1), o.length = We) : s && s.marker === oe ? k(!0) : (m(ve), o.length = ve, g({ type: "unmatched", marker: `${F.marker}*` }));
        break;
      }
      case "milestone":
        g({ type: "ms", marker: F.marker, ...F.attributes });
        break;
      case "optbreak":
        g({ type: "optbreak" });
        break;
      case "noteEndingPlaceholder":
        k(!1), g(sa);
        break;
    }
  }
  if (rt && rn(!0), Je && dr(), K)
    if (K.shape === "para") {
      const he = K.value.replace(/[\s\u200B]+$/, "");
      he === "" ? me(K.marker) : Object.assign(K.target, { [K.attrName]: gr(he) }), K = void 0;
    } else
      K.value.endsWith(`
`) && (K.value = K.value.slice(0, -1)), Le();
  y(), k(!1), _(!1);
  const Pe = (he) => {
    for (const F of he)
      typeof F != "string" && F.content && (Pe(F.content), F.content.length === 0 && delete F.content);
  };
  return Pe(n), n;
}
function M_(e) {
  const t = e.content;
  if (!t || t.length === 0)
    return;
  let n = t.length;
  for (; n > 0; ) {
    const c = t[n - 1];
    if (typeof c != "string" && c.type !== "optbreak")
      break;
    n--;
  }
  const r = t.findIndex((c, l) => l >= n && typeof c == "string" && c.includes("|"));
  if (r < 0)
    return;
  const i = t.slice(r).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = qo(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = r, a && t.push(a), Object.assign(e, o);
}
function Ve(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function st(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Fn(e, t) {
  let n = Ve(e);
  return t && (n += `${q}${t}`), n += " ", n;
}
function vt(e) {
  return " " + e + q;
}
function Ih(e, t) {
  return e === t || (e === " " || e === q) && (t === " " || t === q);
}
function Dc(e, t) {
  const n = vt(t);
  let r = 0;
  for (; r < e.length && r < n.length && Ih(e[r], n[r]); )
    r += 1;
  let i = 0;
  for (; i < e.length - r && i < n.length - r && Ih(e[e.length - 1 - i], n[n.length - 1 - i]); )
    i += 1;
  return { start: r, end: e.length - i, missing: r + i < n.length };
}
function rd(e, t) {
  const { start: n, end: r } = Dc(e, t);
  return e.slice(n, r).replaceAll(q, " ");
}
const E_ = 1;
class Wn extends it {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", n = "opening", r, i = !1) {
    super(Ei(t, n, i), r), this.__marker = t, this.__markerSyntax = n, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new Wn(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return $t().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: n, markerSyntax: r = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || Ei(n, r, i)
    }).getWritable();
    return o.__marker = n, o.__markerSyntax = r, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n.__text = Ei(t, n.__markerSyntax, n.__nested), n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const n = this.getWritable();
    return n.__markerSyntax = t, n.__text = Ei(n.__marker, t, n.__nested), n;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const n = this.getWritable();
    return n.__nested = t, n.__text = Ei(n.__marker, n.__markerSyntax, t), n;
  }
  getNested() {
    return this.getLatest().__nested;
  }
  createDOM(t) {
    const n = super.createDOM(t);
    return n.setAttribute("data-marker", this.__marker), n.classList.add(this.__markerSyntax), n;
  }
  updateDOM(t, n, r) {
    const i = super.updateDOM(t, n, r);
    return t.__marker !== this.__marker && n.setAttribute("data-marker", this.__marker), t.__markerSyntax !== this.__markerSyntax && (n.classList.remove(t.__markerSyntax), n.classList.add(this.__markerSyntax)), i;
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
      version: E_
    };
  }
}
function $t(e, t, n) {
  return yt(new Wn(e, t, void 0, n));
}
function w(e) {
  return e instanceof Wn;
}
function Hs(e) {
  return e?.type === Wn.getType();
}
function lr(e) {
  return e.getTextContent() === Ei(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function A_(e) {
  e.setTextContent(Ei(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Ei(e, t, n = !1) {
  return t === "closing" ? st(e, n) : t === "selfClosing" ? st("") : Ve(e, n);
}
const Vt = "internal-comment", P_ = [Vt], Jy = Object.freeze({}), Cu = Object.freeze({}), vu = Object.freeze({}), Su = Object.freeze({}), _u = Object.freeze({}), w_ = 1, Si = /* @__PURE__ */ new Map(), gs = /* @__PURE__ */ new Map(), _i = /* @__PURE__ */ new Map(), Mi = /* @__PURE__ */ new Map(), Do = /* @__PURE__ */ new WeakMap(), Ko = /* @__PURE__ */ new WeakMap();
function N_(e) {
  return Do.set(e, []), Ko.set(e, /* @__PURE__ */ new Map()), () => {
    Do.delete(e), Ko.delete(e);
  };
}
function O_(e) {
  const t = Do.get(e);
  return t ? (Do.set(e, []), t) : [];
}
const Ga = /* @__PURE__ */ new WeakMap();
function Ra(e, t) {
  return JSON.stringify([e, t]);
}
function Lh(e, t, n, r) {
  let i = Ga.get(e);
  r ? (i || Ga.set(e, i = /* @__PURE__ */ new Set()), i.add(Ra(t, n))) : (i?.delete(Ra(t, n)), Ko.get(e)?.delete(Ra(t, n)));
}
function $_(e) {
  Ga.delete(e), Ko.get(e)?.clear();
}
function Sa(e, t, n, r) {
  const i = e.get(t), s = i?.[n];
  if (!i || !s || !(r in s))
    return;
  const o = mr(s, r), a = Object.keys(o).length > 0 ? { ...i, [n]: o } : mr(i, n);
  Object.keys(a).length > 0 ? e.set(t, a) : e.delete(t);
}
function R_(e, t, n) {
  Sa(Si, e, t, n), Sa(gs, e, t, n), Sa(_i, e, t, n), Sa(Mi, e, t, n);
}
class gt extends cr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Jy, n, r, i, s, o) {
    super(o), this.__typedIDs = _a(t), this.__typedOnClicks = $l(n), this.__typedOnRemoves = Rl(r), this.__typedOnMouseEnters = Il(i), this.__typedOnMouseLeaves = Ll(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const n = _a(t.__typedIDs), r = $l(t.__typedOnClicks), i = Rl(t.__typedOnRemoves), s = Il(t.__typedOnMouseEnters), o = Ll(t.__typedOnMouseLeaves);
    return new gt(n, r, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return P_.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Di().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: w_
    };
  }
  createDOM(t, n) {
    const r = document.createElement("mark");
    yo(r, ...Yy(t.theme, this.__typedIDs));
    const i = this.getOrCreateDOMClickListener(n);
    r.addEventListener("click", i);
    const s = this.getOrCreateDOMMouseEnterListener(n);
    r.addEventListener("mouseenter", s);
    const o = this.getOrCreateDOMMouseLeaveListener(n);
    return r.addEventListener("mouseleave", o), r;
  }
  updateDOM(t, n, r) {
    const i = /* @__PURE__ */ new Set([
      ...Object.keys(t.__typedIDs ?? {}),
      ...Object.keys(this.__typedIDs ?? {})
    ]);
    for (const s of i) {
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = Ni(r.theme.typedMark, s), f = Ni(r.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && yo(n, u) : l === 0 && Oa(n, u), c === 1 ? l === 2 && yo(n, f) : l === 1 && Oa(n, f));
      const d = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || Oa(n, Ni("annotationId", h));
      for (const h of a)
        d.has(h) || yo(n, Ni("annotationId", h));
    }
    return !1;
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTypedIDs(t.typedIDs);
  }
  hasID(t, n) {
    const i = this.getTypedIDs()[t];
    if (!i)
      return !1;
    for (const s of i)
      if (n === s)
        return !0;
    return !1;
  }
  getTypedIDs() {
    const t = this.getLatest();
    return ue(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const n = this.getWritable(), r = _a(n.__typedIDs);
    n.__typedIDs = _a(t), n.dispatchRemovedIDs(r, n.__typedIDs, "removed"), n.pruneTypedOnClicks(), n.pruneTypedOnRemoves(), n.pruneTypedOnMouseEnters(), n.pruneTypedOnMouseLeaves(), n.syncTypedOnClicksToRegistry(), n.syncTypedOnRemovesToRegistry(), n.syncTypedOnMouseEntersToRegistry(), n.syncTypedOnMouseLeavesToRegistry();
    const i = n.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Mu(i), i;
  }
  setTypedOnClicks(t) {
    const n = this.getWritable();
    return n.__typedOnClicks = $l(t), n.pruneTypedOnClicks(), n.syncTypedOnClicksToRegistry(), n;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return ue(t) ? Si.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const n = this.getWritable();
    return n.__typedOnRemoves = Rl(t), n.pruneTypedOnRemoves(), n.syncTypedOnRemovesToRegistry(), n;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return ue(t) ? gs.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const n = this.getWritable();
    return n.__typedOnMouseEnters = Il(t), n.pruneTypedOnMouseEnters(), n.syncTypedOnMouseEntersToRegistry(), n;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return ue(t) ? _i.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const n = this.getWritable();
    return n.__typedOnMouseLeaves = Ll(t), n.pruneTypedOnMouseLeaves(), n.syncTypedOnMouseLeavesToRegistry(), n;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return ue(t) ? Mi.get(t.getKey()) ?? {} : {};
  }
  addID(t, n, r, i, s, o) {
    const a = this.getWritable();
    if (!ue(a))
      return;
    kt(t), kt(n);
    let c = a.__typedIDs[t];
    c || (c = [], a.__typedIDs[t] = c);
    for (const l of c)
      if (n === l) {
        r && a.setOnClickFor(t, n, r), i && a.setOnRemoveFor(t, n, i), s && a.setOnMouseEnterFor(t, n, s), o && a.setOnMouseLeaveFor(t, n, o);
        return;
      }
    c.push(n), r && a.setOnClickFor(t, n, r), i && a.setOnRemoveFor(t, n, i), s && a.setOnMouseEnterFor(t, n, s), o && a.setOnMouseLeaveFor(t, n, o);
  }
  deleteID(t, n) {
    const r = this.getWritable();
    if (!ue(r))
      return;
    const i = r.__typedIDs[t];
    if (!i || i.length === 0)
      return;
    for (let o = 0; o < i.length; o++)
      if (n === i[o]) {
        i.splice(o, 1), r.invokeOnRemove(t, n, "removed");
        break;
      }
    r.removeOnClickFor(t, n), r.removeOnRemoveFor(t, n), r.removeOnMouseEnterFor(t, n), r.removeOnMouseLeaveFor(t, n), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves();
    const s = r.mergeWithAdjacentTypedMarks();
    s.hasNoIDsForEveryType() && s.getParent() !== null && Mu(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, n = !0) {
    const r = Di(this.__typedIDs, this.getTypedOnClicks());
    return this.insertAfter(r, n), r;
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
  extractWithChild(t, n, r) {
    if (!M(n) || r === "html")
      return !1;
    const i = n.anchor, s = n.focus, o = i.getNode(), a = s.getNode(), l = n.isBackward() ? i.offset - s.offset : s.offset - i.offset;
    return this.isParentOf(o) && this.isParentOf(a) && this.getTextContent().length === l;
  }
  excludeFromCopy(t) {
    return t !== "clone";
  }
  remove(t) {
    const n = this.getWritable(), r = this.getTypedIDs();
    n.__suppressOnRemoveCallbacks ? n.__suppressOnRemoveCallbacks = void 0 : n.dispatchOnRemoveForTypedIDs(r, "destroyed"), Si.delete(n.getKey()), gs.delete(n.getKey()), _i.delete(n.getKey()), Mi.delete(n.getKey()), n.__typedOnClicks = void 0, n.__typedOnRemoves = void 0, n.__typedOnMouseEnters = void 0, n.__typedOnMouseLeaves = void 0, super.remove.call(n, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (n) => {
      this.handleDOMClick(n, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, n) {
    const r = Si.get(this.getKey());
    if (!r)
      return;
    const i = [];
    for (const [o, a] of Object.entries(r))
      for (const [c, l] of Object.entries(a))
        l && i.push([l, o, c]);
    if (i.length === 0)
      return;
    const s = n.read(() => this.getTextContent());
    for (const [o, a, c] of i)
      o(t, a, c, s);
  }
  getOrCreateDOMMouseEnterListener(t) {
    return this.__domOnMouseEnterListener || (this.__domOnMouseEnterListener = (n) => {
      this.handleDOMMouseEnter(n, t);
    }), this.__domOnMouseEnterListener;
  }
  handleDOMMouseEnter(t, n) {
    const r = _i.get(this.getKey());
    if (!r)
      return;
    const i = [];
    for (const [o, a] of Object.entries(r))
      for (const [c, l] of Object.entries(a))
        l && i.push([l, o, c]);
    if (i.length === 0)
      return;
    const s = n.read(() => this.getTextContent());
    for (const [o, a, c] of i)
      o(t, a, c, s);
  }
  getOrCreateDOMMouseLeaveListener(t) {
    return this.__domOnMouseLeaveListener || (this.__domOnMouseLeaveListener = (n) => {
      this.handleDOMMouseLeave(n, t);
    }), this.__domOnMouseLeaveListener;
  }
  handleDOMMouseLeave(t, n) {
    const r = Mi.get(this.getKey());
    if (!r)
      return;
    const i = [];
    for (const [o, a] of Object.entries(r))
      for (const [c, l] of Object.entries(a))
        l && i.push([l, o, c]);
    if (i.length === 0)
      return;
    const s = n.read(() => this.getTextContent());
    for (const [o, a, c] of i)
      o(t, a, c, s);
  }
  ensureOnClickMapMutable() {
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Cu) {
      const t = Si.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      Si.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    Si.set(this.getKey(), this.__typedOnClicks);
  }
  setOnClickFor(t, n, r) {
    kt(t), kt(n);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, n) {
    if (!this.__typedOnClicks)
      return;
    const r = this.__typedOnClicks[t];
    if (!r)
      return;
    const i = mr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = mr(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Cu) {
      this.__typedOnClicks = void 0, this.syncTypedOnClicksToRegistry();
      return;
    }
    const t = {};
    for (const [n, r] of Object.entries(this.__typedOnClicks)) {
      const i = this.__typedIDs[n];
      if (!i || i.length === 0)
        continue;
      const s = new Set(i), o = {};
      for (const [a, c] of Object.entries(r))
        s.has(a) && (o[a] = c);
      Object.keys(o).length > 0 && (t[n] = o);
    }
    this.__typedOnClicks = Object.keys(t).length > 0 ? t : void 0, this.syncTypedOnClicksToRegistry();
  }
  ensureOnRemoveMapMutable() {
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === vu) {
      const t = gs.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      gs.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    gs.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, n, r) {
    kt(t), kt(n);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, n) {
    if (!this.__typedOnRemoves)
      return;
    const r = this.__typedOnRemoves[t];
    if (!r)
      return;
    const i = mr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = mr(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === vu) {
      this.__typedOnRemoves = void 0, this.syncTypedOnRemovesToRegistry();
      return;
    }
    const t = {};
    for (const [n, r] of Object.entries(this.__typedOnRemoves)) {
      const i = this.__typedIDs[n];
      if (!i || i.length === 0)
        continue;
      const s = new Set(i), o = {};
      for (const [a, c] of Object.entries(r))
        s.has(a) && (o[a] = c);
      Object.keys(o).length > 0 && (t[n] = o);
    }
    this.__typedOnRemoves = Object.keys(t).length > 0 ? t : void 0, this.syncTypedOnRemovesToRegistry();
  }
  ensureOnMouseEnterMapMutable() {
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Su) {
      const t = _i.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      _i.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    _i.set(this.getKey(), this.__typedOnMouseEnters);
  }
  setOnMouseEnterFor(t, n, r) {
    kt(t), kt(n);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, n) {
    if (!this.__typedOnMouseEnters)
      return;
    const r = this.__typedOnMouseEnters[t];
    if (!r)
      return;
    const i = mr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = mr(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Su) {
      this.__typedOnMouseEnters = void 0, this.syncTypedOnMouseEntersToRegistry();
      return;
    }
    const t = {};
    for (const [n, r] of Object.entries(this.__typedOnMouseEnters)) {
      const i = this.__typedIDs[n];
      if (!i || i.length === 0)
        continue;
      const s = new Set(i), o = {};
      for (const [a, c] of Object.entries(r))
        s.has(a) && (o[a] = c);
      Object.keys(o).length > 0 && (t[n] = o);
    }
    this.__typedOnMouseEnters = Object.keys(t).length > 0 ? t : void 0, this.syncTypedOnMouseEntersToRegistry();
  }
  ensureOnMouseLeaveMapMutable() {
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === _u) {
      const t = Mi.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Mi.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Mi.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, n, r) {
    kt(t), kt(n);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, n) {
    if (!this.__typedOnMouseLeaves)
      return;
    const r = this.__typedOnMouseLeaves[t];
    if (!r)
      return;
    const i = mr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = mr(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === _u) {
      this.__typedOnMouseLeaves = void 0, this.syncTypedOnMouseLeavesToRegistry();
      return;
    }
    const t = {};
    for (const [n, r] of Object.entries(this.__typedOnMouseLeaves)) {
      const i = this.__typedIDs[n];
      if (!i || i.length === 0)
        continue;
      const s = new Set(i), o = {};
      for (const [a, c] of Object.entries(r))
        s.has(a) && (o[a] = c);
      Object.keys(o).length > 0 && (t[n] = o);
    }
    this.__typedOnMouseLeaves = Object.keys(t).length > 0 ? t : void 0, this.syncTypedOnMouseLeavesToRegistry();
  }
  invokeOnRemove(t, n, r) {
    const s = this.getTypedOnRemoves()[t]?.[n];
    if (!s)
      return;
    const o = Ut(), a = Ra(t, n), c = Ko.get(o);
    if (Ga.get(o)?.has(a) || c?.get(a)?.has(this.getKey())) {
      this.removeOnRemoveFor(t, n);
      return;
    }
    if (Do.get(o)?.push([t, n]), c) {
      let l = c.get(a);
      l || c.set(a, l = /* @__PURE__ */ new Set()), l.add(this.getKey());
    }
    try {
      s(t, n, r, this.getTextContent());
    } catch (l) {
      queueMicrotask(() => o._onError(l instanceof Error ? l : new Error(String(l))));
    }
    this.removeOnRemoveFor(t, n);
  }
  dispatchRemovedIDs(t, n, r) {
    const i = I_(t, n);
    if (i.length !== 0)
      for (const [s, o] of i)
        this.invokeOnRemove(s, o, r);
  }
  dispatchOnRemoveForTypedIDs(t, n) {
    for (const [r, i] of Object.entries(t))
      if (i)
        for (const s of i)
          this.invokeOnRemove(r, s, n);
  }
  mergeWithAdjacentTypedMarks() {
    if (this.hasNoIDsForEveryType())
      return this;
    let t = this.getPreviousSibling();
    for (; ue(t) && Dh(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let n = this.getNextSibling();
    for (; ue(n) && Dh(this.getTypedIDs(), n.getTypedIDs()); )
      this.mergeWithNextTypedMark(n), n = this.getNextSibling();
    return this;
  }
  mergeWithPreviousTypedMark(t) {
    this.mergeOnClicksFrom(t.getTypedOnClicks()), this.mergeOnRemovesFrom(t.getTypedOnRemoves()), this.mergeOnMouseEntersFrom(t.getTypedOnMouseEnters()), this.mergeOnMouseLeavesFrom(t.getTypedOnMouseLeaves());
    const n = t.getChildren();
    n.length > 0 && this.splice(0, 0, n), t.getWritable().__suppressOnRemoveCallbacks = !0, t.remove();
  }
  mergeWithNextTypedMark(t) {
    this.mergeOnClicksFrom(t.getTypedOnClicks()), this.mergeOnRemovesFrom(t.getTypedOnRemoves()), this.mergeOnMouseEntersFrom(t.getTypedOnMouseEnters()), this.mergeOnMouseLeavesFrom(t.getTypedOnMouseLeaves());
    const n = t.getChildren();
    n.length > 0 && this.append(...n), t.getWritable().__suppressOnRemoveCallbacks = !0, t.remove();
  }
  mergeOnClicksFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = L_(this.getTypedOnClicks(), t);
    Object.keys(n).length !== 0 && this.setTypedOnClicks(n);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = q_(this.getTypedOnRemoves(), t);
    Object.keys(n).length !== 0 && this.setTypedOnRemoves(n);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = D_(this.getTypedOnMouseEnters(), t);
    Object.keys(n).length !== 0 && this.setTypedOnMouseEnters(n);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = K_(this.getTypedOnMouseLeaves(), t);
    Object.keys(n).length !== 0 && this.setTypedOnMouseLeaves(n);
  }
}
function _a(e = Jy) {
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    if (kt(n), !Array.isArray(r)) {
      t[n] = [];
      continue;
    }
    const i = [];
    for (const s of r)
      kt(s), i.push(s);
    t[n] = i;
  }
  return t;
}
function $l(e) {
  if (!e || e === Cu)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    kt(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      kt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Rl(e) {
  if (!e || e === vu)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    kt(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      kt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Il(e) {
  if (!e || e === Su)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    kt(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      kt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ll(e) {
  if (!e || e === _u)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    kt(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      kt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function mr(e, t) {
  const n = {};
  for (const [r, i] of Object.entries(e))
    r !== t && (n[r] = i);
  return n;
}
function qh(e) {
  const t = {};
  for (const [n, r] of Object.entries(e))
    !r || r.length === 0 || (t[n] = [...r].sort());
  return t;
}
function I_(e, t) {
  const n = [];
  for (const [r, i] of Object.entries(e)) {
    const s = new Set(t[r] ?? []);
    for (const o of i ?? [])
      s.has(o) || n.push([r, o]);
  }
  return n;
}
function Dh(e, t) {
  const n = qh(e), r = qh(t), i = Object.keys(n).sort(), s = Object.keys(r).sort();
  if (i.length !== s.length)
    return !1;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    if (a !== s[o])
      return !1;
    const c = n[a], l = r[a];
    if (!c || !l || c.length !== l.length)
      return !1;
    for (let u = 0; u < c.length; u++)
      if (c[u] !== l[u])
        return !1;
  }
  return !0;
}
function L_(e, t) {
  const n = {}, r = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (const i of r) {
    const s = e[i] ?? {}, o = t[i] ?? {}, a = /* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(o)]), c = {};
    for (const l of a) {
      const u = s[l] ?? o[l];
      u && (c[l] = u);
    }
    Object.keys(c).length > 0 && (n[i] = c);
  }
  return n;
}
function q_(e, t) {
  const n = {}, r = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (const i of r) {
    const s = e[i] ?? {}, o = t[i] ?? {}, a = /* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(o)]), c = {};
    for (const l of a) {
      const u = s[l] ?? o[l];
      u && (c[l] = u);
    }
    Object.keys(c).length > 0 && (n[i] = c);
  }
  return n;
}
function D_(e, t) {
  const n = {}, r = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (const i of r) {
    const s = e[i] ?? {}, o = t[i] ?? {}, a = /* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(o)]), c = {};
    for (const l of a) {
      const u = s[l] ?? o[l];
      u && (c[l] = u);
    }
    Object.keys(c).length > 0 && (n[i] = c);
  }
  return n;
}
function K_(e, t) {
  const n = {}, r = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (const i of r) {
    const s = e[i] ?? {}, o = t[i] ?? {}, a = /* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(o)]), c = {};
    for (const l of a) {
      const u = s[l] ?? o[l];
      u && (c[l] = u);
    }
    Object.keys(c).length > 0 && (n[i] = c);
  }
  return n;
}
function Ni(e, t) {
  return `${e}-${t}`;
}
function Yy(e, t) {
  const n = [];
  for (const [r, i] of Object.entries(t)) {
    n.push(Ni(e.typedMark, r)), i.length > 1 && n.push(Ni(e.typedMarkOverlap, r));
    for (const s of i)
      n.push(Ni("annotationId", s));
  }
  return n;
}
function ql(e) {
  return `external-${e}`;
}
function Di(e, t, n, r, i) {
  return yt(new gt(e, t, n, r, i));
}
function ue(e) {
  return e instanceof gt;
}
function ii(e) {
  return e?.type === gt.getType();
}
function Xy(e, t, n) {
  let r = 0;
  for (const i of n) {
    const s = X(i);
    !ue(s) || !s.hasID(e, t) || (r++, s.deleteID(e, t), s.hasNoIDsForEveryType() && Mu(s));
  }
  return r;
}
function Mu(e) {
  const t = e.getChildren();
  let n = null;
  for (const r of t)
    n === null ? e.insertBefore(r) : n.insertAfter(r), n = r;
  e.remove();
}
function U_(e, t, n) {
  let r = e;
  for (; r !== null; ) {
    if (ue(r))
      return r.getTypedIDs()[t];
    if (C(r) && n === r.getTextContentSize()) {
      const i = r.getNextSibling();
      if (ue(i))
        return i.getTypedIDs()[t];
    }
    r = r.getParent();
  }
}
const Ki = Vs("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), si = Vs("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ke = Vs("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Mr = "marker-trailing-space", Qy = 1, B_ = "attribute-run";
function Dl(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Er extends cr {
  __runKind;
  constructor(t, n) {
    super(n), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: n, __key: r } = t;
    return new Er(n, r);
  }
  static importJSON(t) {
    return Zy(t.runKind).updateFromJSON(t);
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
    const n = this.getWritable();
    return n.__runKind = t, n;
  }
  getRunKind() {
    return this.getLatest().__runKind;
  }
  createDOM() {
    const t = document.createElement("span");
    t.classList.add(B_);
    const n = Dl(this.__runKind);
    return n !== void 0 && t.classList.add(n), t;
  }
  updateDOM(t, n) {
    if (t.__runKind !== this.__runKind) {
      const r = Dl(t.__runKind);
      r !== void 0 && n.classList.remove(r);
      const i = Dl(this.__runKind);
      i !== void 0 && n.classList.add(i);
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
      version: Qy
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
function Zy(e) {
  return yt(new Er(e));
}
function Be(e) {
  return e instanceof Er;
}
const eb = [
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
], tb = [
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
], F_ = [
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
  ...eb,
  ...tb
], nb = 1, z_ = ["type", "marker", "content"];
class ze extends cr {
  __marker;
  __unknownAttributes;
  constructor(t = "", n, r) {
    super(r), this.__marker = t, this.__unknownAttributes = n;
  }
  static getType() {
    return "char";
  }
  static clone(t) {
    const { __marker: n, __unknownAttributes: r, __key: i } = t;
    return new ze(n, r, i);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (F_.includes(t) || (n?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && eb.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && tb.includes(t);
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
    return ze.isValidFootnoteMarker(t) || ze.isValidCrossReferenceMarker(t);
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
    return Kr().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM(t) {
    const n = document.createElement("span");
    return Kh(n, this.__marker, t), n.classList.add(this.__type), n;
  }
  updateDOM(t, n, r) {
    return t.__marker !== this.__marker && (n.classList.remove(`usfm_${t.__marker}`), Kh(n, this.__marker, r)), !1;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Hi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: n };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: nb
    };
  }
  // Mutation
  insertNewAfter(t, n) {
    const r = this.getUnknownAttributes()?.closed === "false", i = Kr(this.getMarker(), r ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, n), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Kh(e, t, n) {
  e.setAttribute("data-marker", t), n.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function j_(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Kr(t) };
}
function Kr(e, t) {
  return yt(new ze(e, t));
}
function V_(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ze.isValidMarker(t) && e.classList.contains(ze.getType());
}
function U(e) {
  return e instanceof ze;
}
function rb(e) {
  return e?.type === ze.getType();
}
const Ja = "v", ib = 1, W_ = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Kt extends it {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n, r, i, s, o, a) {
    super(n ?? t, a), this.__marker = Ja, this.__number = t, this.__sid = r, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: n, __text: r, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Kt(n, r, i, s, o, a, c);
  }
  static importJSON(t) {
    return sb().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setNumber(t.number).setSid(t.sid).setAltnumber(t.altnumber).setPubnumber(t.pubnumber).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setNumber(t) {
    if (this.__number === t)
      return this;
    const n = this.getWritable();
    return n.__number = t, n;
  }
  getNumber() {
    return this.getLatest().__number;
  }
  setSid(t) {
    if (this.__sid === t)
      return this;
    const n = this.getWritable();
    return n.__sid = t, n;
  }
  getSid() {
    return this.getLatest().__sid;
  }
  setAltnumber(t) {
    if (this.__altnumber === t)
      return this;
    const n = this.getWritable();
    return n.__altnumber = t, n;
  }
  getAltnumber() {
    return this.getLatest().__altnumber;
  }
  setPubnumber(t) {
    if (this.__pubnumber === t)
      return this;
    const n = this.getWritable();
    return n.__pubnumber = t, n;
  }
  getPubnumber() {
    return this.getLatest().__pubnumber;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM(t) {
    const n = super.createDOM(t);
    return n.setAttribute("data-marker", this.__marker), n.classList.add(bu, `usfm_${this.__marker}`), n.setAttribute("data-number", this.__number), n;
  }
  updateDOM(t, n, r) {
    const i = super.updateDOM(t, n, r);
    return !i && t.__number !== this.__number && n.setAttribute("data-number", this.__number), i;
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
      version: ib
    };
  }
}
function sb(e, t, n, r, i, s) {
  return yt(new Kt(e, t, n, r, i, s));
}
function Ue(e) {
  return e instanceof Kt;
}
function id(e) {
  return e?.type === Kt.getType();
}
const H_ = /* @__PURE__ */ new Set(["closed"]);
function Xn(e, t) {
  const n = Object.entries(e).filter(([r, i]) => i !== void 0 && !H_.has(r));
  return n.length === 0 ? "" : n.length === 1 && n[0][0] === t && n[0][1] !== "" ? `|${n[0][1]}` : `|${n.map(([r, i]) => `${r}="${i}"`).join(" ")}`;
}
function ob(e, t) {
  if (!t || t.length === 0)
    return e;
  const n = {};
  return t.forEach((r) => {
    Object.hasOwn(e, r) && (n[r] = e[r]);
  }), Object.entries(e).forEach(([r, i]) => {
    Object.hasOwn(n, r) || (n[r] = i);
  }), n;
}
function ab(e) {
  const t = Object.keys(e).filter((r) => !i_.includes(r)), n = [
    ...t.filter((r) => r === "sid"),
    ...t.filter((r) => r === "eid"),
    ...t.filter((r) => r !== "sid" && r !== "eid")
  ];
  return t.every((r, i) => r === n[i]) ? void 0 : t;
}
function cb(e, t, n, r) {
  return ob(
    // Presence, not truthiness: an authored `sid=""` is a byte the document holds, and folding it
    // out here deletes it from the displayed run — which a settle then re-derives node state from,
    // so the empty value would be gone from the file. Matches `orderedAttributes`' own `in` test
    // directly above, which exists for exactly this reason.
    {
      ...e !== void 0 && { sid: e },
      ...t !== void 0 && { eid: t },
      ...n
    },
    r
  );
}
function Co(e) {
  return e.getChildren().find((t) => w(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function G_(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((r) => r !== "closed") ? !1 : Co(e) === void 0 && lb(e) === void 0;
}
function lb(e) {
  return e.getChildren().find((t) => C(t) && de(t, ke) === "attribute");
}
function Uo(e, t) {
  return aa(e.getNextSibling(), t);
}
const J_ = /^[ \u00A0]+$/;
function sd(e) {
  if (lr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Ve(e.getMarker(), e.getNested()), n = e.getTextContent();
  return n.startsWith(t) && J_.test(n.slice(t.length));
}
function aa(e, t) {
  let n, r, i, s;
  return Be(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), w(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  sd(e) && (n = e, e = e.getNextSibling()), C(e) && de(e, ke) === "attribute" && (r = e, e = e.getNextSibling()), w(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && lr(e) && (i = e), { opener: n, value: r, closer: i, wrapper: s };
}
function Y_(e) {
  let t = e;
  for (; ue(t); )
    t = t.getChildren()[0];
  return t;
}
function St(e) {
  const t = e.getChildren();
  let n = 0;
  for (; n < t.length; ) {
    const i = t[n];
    if (!w(i) || i.getMarkerSyntax() !== "opening")
      break;
    n++;
  }
  const r = Y_(t[n]);
  if (!(!C(r) || r.getType() !== it.getType()))
    return r.getTextContent() === vt(e.getCaller()) || r.isUnmergeable() ? r : void 0;
}
function ca(e) {
  const t = St(e);
  return t ? aa(t.getNextSibling(), "cat") : {};
}
function gi(e) {
  const t = e.getFirstChild();
  if (!(!C(t) || w(t)) && de(t, ke) !== "attribute")
    return t;
}
function ub(e) {
  const t = gi(e);
  return t ? aa(t.getNextSibling(), "ca") : {};
}
function fb(e) {
  const t = gi(e);
  if (!t)
    return;
  const n = aa(t.getNextSibling(), "ca");
  return n.wrapper ?? n.closer ?? t;
}
function db(e) {
  const t = fb(e);
  return t ? aa(t.getNextSibling(), "cp") : {};
}
function pb(e) {
  const t = e.getParent();
  if (!U(t))
    return;
  const n = t.getMarker();
  if (!(n !== "va" && n !== "vp"))
    for (let r = t.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (Ue(r))
        return r;
      if (!(w(r) && (r.getMarker() === "va" || r.getMarker() === "vp") || C(r) && de(r, ke) === "attribute" || U(r) && (r.getMarker() === "va" || r.getMarker() === "vp") || Be(r)))
        return;
    }
}
function Kc(e) {
  let t, n, r, i, s = e.getNextSibling();
  return Be(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), w(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  sd(s) && (t = s, s = s.getNextSibling()), C(s) && de(s, ke) === "attribute" && (n = s, s = s.getNextSibling()), w(s) && s.getMarkerSyntax() === "selfClosing" && lr(s) && (r = s), { opening: t, attribute: n, closing: r, wrapper: i };
}
const Ya = "c", hb = 1, X_ = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Rn extends cr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n, r, i, s, o) {
    super(o), this.__marker = Ya, this.__number = t, this.__sid = n, this.__altnumber = r, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: n, __sid: r, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Rn(n, r, i, s, o, a);
  }
  static importJSON(t) {
    return gb().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setNumber(t.number).setSid(t.sid).setAltnumber(t.altnumber).setPubnumber(t.pubnumber).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setNumber(t) {
    if (this.__number === t)
      return this;
    const n = this.getWritable();
    return n.__number = t, n;
  }
  getNumber() {
    return this.getLatest().__number;
  }
  setSid(t) {
    if (this.__sid === t)
      return this;
    const n = this.getWritable();
    return n.__sid = t, n;
  }
  getSid() {
    return this.getLatest().__sid;
  }
  setAltnumber(t) {
    if (this.__altnumber === t)
      return this;
    const n = this.getWritable();
    return n.__altnumber = t, n;
  }
  getAltnumber() {
    return this.getLatest().__altnumber;
  }
  setPubnumber(t) {
    if (this.__pubnumber === t)
      return this;
    const n = this.getWritable();
    return n.__pubnumber = t, n;
  }
  getPubnumber() {
    return this.getLatest().__pubnumber;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement("p");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Wa, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM(t, n) {
    return t.__number !== this.__number && n.setAttribute("data-number", this.__number), !1;
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
      version: hb
    };
  }
}
function gb(e, t, n, r, i) {
  return yt(new Rn(e, t, n, r, i));
}
function $e(e) {
  return e instanceof Rn;
}
function Q_(e) {
  return e?.type === Rn.getType();
}
const Z_ = ["type", "marker", "content"], Eu = "unknown", mb = 1, eM = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class Xi extends cr {
  __tag;
  __marker;
  __unknownAttributes;
  constructor(t = "", n, r, i) {
    super(i), this.__tag = t, this.__marker = n, this.__unknownAttributes = r;
  }
  static getType() {
    return "unknown";
  }
  static clone(t) {
    const { __tag: n, __marker: r, __unknownAttributes: i, __key: s } = t;
    return new Xi(n, r, i, s);
  }
  static importDOM() {
    return {
      [Eu]: (t) => nM(t) ? {
        conversion: tM,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return od().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTag(t.tag).setMarker(t.marker).setUnknownAttributes(t.unknownAttributes);
  }
  setTag(t) {
    if (this.__tag === t)
      return this;
    const n = this.getWritable();
    return n.__tag = t, n;
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
    return eM.has(this.getTag());
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement(Eu);
    return t.setAttribute("data-tag", this.getTag()), t.setAttribute("data-marker", this.getMarker() ?? ""), t.classList.add(this.isInlineTag() ? "unknown-inline" : "unknown-block"), t.contentEditable = "false", t;
  }
  updateDOM(t, n) {
    if (t.__tag !== this.__tag) {
      n.setAttribute("data-tag", this.__tag);
      const r = this.isInlineTag();
      n.classList.toggle("unknown-inline", r), n.classList.toggle("unknown-block", !r);
    }
    return (t.__marker ?? "") !== (this.__marker ?? "") && n.setAttribute("data-marker", this.__marker ?? ""), !1;
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
      version: mb
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
    const n = t ?? N();
    if (!n)
      return !1;
    if (Oc(n) && super.isSelected(n))
      return !0;
    if (n.isCollapsed())
      return !1;
    const r = n.getNodes();
    return this.getChildren().some((i) => r.some((s) => s.is(i)));
  }
}
function tM(e) {
  const t = e.getAttribute("data-tag") ?? "", n = e.getAttribute("data-marker") ?? "";
  return { node: od(t, n) };
}
function od(e, t, n) {
  return yt(new Xi(e, t, n));
}
function nM(e) {
  return e?.tagName.toLowerCase() === Eu;
}
function Ze(e) {
  return e instanceof Xi;
}
const yb = "table", Au = "immutable-table", bb = 1, rM = ["type", "marker", "content"];
class Qi extends cr {
  __unknownAttributes;
  constructor(t, n) {
    super(n), this.__unknownAttributes = t;
  }
  static getType() {
    return Au;
  }
  static clone(t) {
    return new Qi(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return iM().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setUnknownAttributes(t.unknownAttributes);
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
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
      type: Au,
      ...t !== void 0 && { unknownAttributes: t },
      version: bb
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function iM(e) {
  return yt(new Qi(e));
}
function kb(e) {
  return e instanceof Qi;
}
function sM(e) {
  return e?.type === Au;
}
function Pu(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (Ze(t) || kb(t))
      return !0;
  return !1;
}
const xb = 1;
class oi extends Uf {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new oi(t.__key);
  }
  static importJSON(t) {
    return zn().updateFromJSON(t);
  }
  getMarker() {
    return Bn;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: xb
    };
  }
  // Mutation
  insertNewAfter(t, n) {
    const r = zn();
    return r.setTextFormat(t.format), r.setTextStyle(t.style), r.setDirection(this.getDirection()), r.setFormat(this.getFormatType()), r.setStyle(this.getTextStyle()), this.insertAfter(r, n), r;
  }
}
function zn() {
  return yt(new oi());
}
function _t(e) {
  return e instanceof oi;
}
function Uc(e) {
  return e?.type === oi.getType();
}
function Tb(e) {
  return _t(e) && Mn(e.getParent());
}
function ad(e) {
  return ue(e) || Tb(e);
}
function In(e) {
  let t = e.getParent();
  for (; t && ad(t); )
    t = t.getParent();
  return t;
}
function Bc(e) {
  return U(In(e));
}
function cd(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const n = e.getMarker();
  return n === t.getMarker() ? Bc(t) : t.getChildren().some((i) => U(i) && i.getMarker() === n) ? !0 : void 0;
}
function oM(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!w(t))
      return;
    const n = cd(t, e);
    n !== void 0 && t.setNested(n);
  });
}
const $i = /* @__PURE__ */ new WeakMap();
function aM(e, t, n) {
  const r = { owners: t, rederive: n };
  return $i.set(e, r), () => {
    $i.get(e) === r && $i.delete(e);
  };
}
function Cb(e, t, n) {
  const r = $i.get(e);
  !r?.rederive || !n.has($c) || r.derivedFor === t || (r.rederive(t), r.derivedFor = t);
}
function wu(e) {
  return $i.get(e)?.owners;
}
function vb(e) {
  return $i.get(Ut())?.owners.has(e.getKey()) ?? !1;
}
function Sb(e) {
  $i.get(Ut())?.owners.add(e.getKey());
}
function jr(e) {
  return C(e) && e.getType() === it.getType() && de(e, ke) !== "attribute";
}
function Gs(e) {
  if (!jr(e) || !e.getTextContent().startsWith(q))
    return 0;
  let t = e, n = t.getPreviousSibling(), r = t.getParent();
  for (; r && ue(r); )
    t = r, r = t.getParent(), n ??= t.getPreviousSibling();
  if (!U(r))
    return 0;
  for (; ue(n); )
    n = n.getLastChild();
  return !w(n) || n.getMarkerSyntax() !== "opening" ? 0 : fd(n, r) ? 1 : 0;
}
function ld(e) {
  let t = e.getNextSibling();
  for (; ue(t); )
    t = t.getFirstChild();
  return t;
}
function ud(e) {
  const t = e.getPreviousSibling(), n = e.getParent();
  return !w(t) || !U(n) || !fd(t, n) || !jr(e) ? 0 : e.getTextContent().startsWith(q) ? q.length : 0;
}
function fd(e, t) {
  return e.getMarkerSyntax() === "opening" && cd(e, t) !== void 0;
}
function Js(e, t) {
  if (!fd(e, t))
    return;
  const n = e.getNextSibling(), r = ld(e);
  if (!(n === null || r === null))
    return w(r) ? cd(r, t) === !0 ? "spacer" : void 0 : jr(r) ? r.getTextContent().startsWith(q) ? void 0 : r.is(n) ? "prefix" : "spacer" : "spacer";
}
function dd(e) {
  return !jr(ld(e)) || Pu(e) ? !1 : !d_(e.getNextSibling()?.getTextContent() ?? "");
}
function _b(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (w(t) && Js(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function pd(e, t) {
  const n = N();
  if (!M(n) || !n.isCollapsed())
    return !1;
  const r = n.anchor.getNode();
  if (r.is(e) || r.is(t))
    return !0;
  if (n.anchor.offset !== 0)
    return !1;
  for (let i = e.getNextSibling(); i; ) {
    if (r.is(i))
      return !0;
    if (!ue(i))
      return !1;
    i = i.getFirstChild();
  }
  return !1;
}
function Mb(e) {
  if (!e.isAttached() || vb(e))
    return;
  const t = wu(Ut()) !== void 0;
  e.getChildren().forEach((n) => {
    if (!w(n))
      return;
    const r = Js(n, e);
    if (r === void 0 || pd(n, e))
      return;
    if (t && dd(n)) {
      Sb(e);
      return;
    }
    if (r === "spacer") {
      n.insertAfter(Re(q));
      return;
    }
    const i = n.getNextSibling();
    C(i) && (cM(i) || uM(i));
  });
}
function cM(e) {
  const t = N();
  if (!M(t) || !t.isCollapsed())
    return !1;
  const { anchor: n } = t;
  if (n.type !== "text" || n.key !== e.getKey() || n.offset === 0)
    return !1;
  const r = e.getTextContent();
  if (r[n.offset] !== q)
    return !1;
  const i = r.slice(0, n.offset);
  return e.setTextContent(q + i + r.slice(n.offset + 1)), e.select(n.offset + 1, n.offset + 1), !0;
}
function lM(e) {
  if (e.getMarkerSyntax() !== "opening" || !U(e.getParent()))
    return !1;
  const t = N();
  if (!M(t) || !t.isCollapsed())
    return !1;
  const n = e.getTextContent(), { anchor: r } = t;
  if (r.key !== e.getKey() || r.offset !== n.length)
    return !1;
  const i = Ve(e.getMarker(), e.getNested()), s = n.slice(i.length);
  if (!n.startsWith(i) || !/^[|\s]+$/.test(s))
    return !1;
  const o = ld(e);
  if (!jr(o))
    return !1;
  const a = o.getTextContent();
  return a.startsWith(q) ? (e.setTextContent(i), o.setTextContent(q + s + a.slice(q.length)), o.select(q.length + s.length, q.length + s.length), !0) : !1;
}
function Eb(e, t) {
  ue(e.getNextSibling()) && Js(e, t) === "spacer" && e.insertAfter(Re(q));
}
function uM(e) {
  e.setTextContent(q + e.getTextContent());
  const t = N();
  if (M(t))
    for (const n of [t.anchor, t.focus])
      n.type === "text" && n.key === e.getKey() && n.set(n.key, n.offset + 1, "text");
}
function fM(e) {
  return e.isAttached() ? e.getChildren().some((t) => w(t) && Js(t, e) !== void 0 && pd(t, e)) : !1;
}
function hd(e) {
  return e.isAttached() ? e.getChildren().some((t) => w(t) && Js(t, e) !== void 0 && (pd(t, e) || dd(t))) : !1;
}
function gd(e) {
  return e.isAttached() ? e.getChildren().some((t) => w(t) && Js(t, e) !== void 0 && dd(t)) : !1;
}
function dM(e) {
  if (fM(e))
    return !0;
  const t = N();
  if (!M(t) || !t.isCollapsed())
    return !1;
  const n = t.anchor.getNode();
  return (n.is(e) || e.isParentOf(n)) && hd(e);
}
const Ab = 1, pM = "marker", md = Vs("isGutterMarker", {
  parse: (e) => e === !0
});
class Hn extends na {
  __textType;
  __text;
  constructor(t = "", n = "", r) {
    super(r), this.__textType = t, this.__text = n;
  }
  static getType() {
    return "immutable-typed-text";
  }
  static clone(t) {
    const { __textType: n, __text: r, __key: i } = t;
    return new Hn(n, r, i);
  }
  static importDOM() {
    return {
      span: (t) => yM(t) ? {
        conversion: hM,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ur().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTextType(t.textType).setTextContent(t.text);
  }
  setTextType(t) {
    if (this.__textType === t)
      return this;
    const n = this.getWritable();
    return n.__textType = t, n;
  }
  getTextType() {
    return this.getLatest().__textType;
  }
  setTextContent(t) {
    if (this.__text === t)
      return this;
    const n = this.getWritable();
    return n.__text = t, n;
  }
  getTextContent() {
    return this.getLatest().__text;
  }
  /** The text this glyph shows on screen, which {@link createDOM} writes into its element. */
  getRenderedText() {
    return this.getTextContent();
  }
  createDOM() {
    const t = document.createElement("span");
    return t.setAttribute("data-text-type", this.__textType), t.classList.add(this.__textType), t.textContent = this.__text, t;
  }
  updateDOM(t, n) {
    return t.__text !== this.__text && (n.textContent = this.__text), !1;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Hi(n) && n.setAttribute("data-text-type", this.getTextType()), { element: n };
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
      version: Ab
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function hM(e) {
  const t = e.getAttribute("data-text-type") ?? "", n = e.textContent ?? "";
  return { node: Ur(t, n) };
}
function Ur(e, t) {
  return yt(new Hn(e, t));
}
function gM(e) {
  return Ht(Ur(pM, e), md, !0);
}
function mM(e) {
  return Rt(e) && de(e, md);
}
function yM(e) {
  return e?.tagName === "span";
}
function Rt(e) {
  return e instanceof Hn;
}
function Pb(e) {
  return e?.type === Hn.getType();
}
const wb = "file", Nb = "src", bM = "colspan", kM = "category", xM = "alt", TM = "closed", CM = "false";
function vM(e) {
  return e[TM] !== CM;
}
function SM(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => [
    t === wb ? Nb : t,
    n
  ]));
}
function _M(e, t) {
  return e === "figure" && t === Nb ? wb : t;
}
function Ob(e, t) {
  if (e === void 0)
    return;
  const n = Number(t);
  if (!Number.isInteger(n) || n < 2)
    return e;
  let r = e.length;
  for (; r > 0; ) {
    const i = e.charCodeAt(r - 1);
    if (i < 48 || i > 57)
      break;
    r -= 1;
  }
  return r === e.length ? e : `${e}-${Number(e.slice(r)) + n - 1}`;
}
function Fc(e, t, n) {
  const r = n ?? {}, i = vM(r);
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
        opening: `\\${Ob(t, r[bM])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Xn(SM(r), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [kM]: s, ...o } = r;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + Xn(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [xM]: s, ...o } = r;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: Xn(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Xn(r, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const fn = { wantsRun: !1, valueText: void 0 }, Vr = {};
function Kl(e, t) {
  if (t === "va")
    return e;
  const n = Uo(e, "va");
  return n.wrapper ?? n.closer ?? e;
}
function yd(e) {
  const t = N();
  if (!M(t) || !t.isCollapsed())
    return !1;
  const n = t.anchor.getNode();
  if (n.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (E(e)) {
    const i = e.getLastDescendant();
    if (i !== null && n.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const r = e.getNextSibling();
  return r !== null && n.is(r) && t.anchor.offset === 0;
}
function zc(e) {
  const { opener: t, closer: n } = e;
  if (!t)
    return !1;
  const r = N();
  if (!M(r) || !r.isCollapsed())
    return !1;
  const i = r.anchor.getNode(), s = i.is(t) && r.anchor.offset === t.getTextContentSize();
  return n ? s || i.is(n) : s;
}
function MM(e) {
  return Be(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : w(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : C(e) && de(e, ke) === "attribute";
}
function EM(e) {
  if (w(e)) {
    const r = e.getMarker();
    return r === "va" || r === "vp" ? r : void 0;
  }
  if (!C(e) || de(e, ke) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!w(t))
    return;
  const n = t.getMarker();
  return n === "va" || n === "vp" ? n : void 0;
}
function Ul(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ue(t))
      return t;
    if (!MM(t))
      return;
  }
}
function Uh(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Ue(t),
    ownerOf: (t) => {
      if (Be(t))
        return t.getRunKind() === e ? Ul(t) : void 0;
      const n = t.getParent();
      return Be(n) ? n.getRunKind() === e ? Ul(n) : void 0 : EM(t) === e ? Ul(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Ue(t))
        return fn;
      const n = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return n === void 0 ? fn : { wantsRun: !0, valueText: q + n };
    },
    scanPieces: (t) => Ue(t) ? Uo(Kl(t, e), e) : Vr,
    graceSite: (t, n) => Ue(t) ? !n.opener && !n.closer ? yd(Kl(t, e)) : zc(n) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Ue(t) ? Kl(t, e) : void 0
    }
  };
}
const AM = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => U(e),
  ownerOf: () => {
  },
  expectedPieces: () => fn,
  scanPieces: () => Vr,
  graceSite: (e) => U(e) && dM(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, PM = {
  kind: "char",
  ownerPredicate: (e) => U(e),
  ownerOf: (e) => {
    if (!C(e) || de(e, ke) !== "attribute")
      return;
    const t = e.getParent();
    return U(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!U(e) || Co(e) === void 0)
      return fn;
    const t = Xn(e.getUnknownAttributes() ?? {}, Ws(e.getMarker()));
    return t === "" ? fn : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => U(e) ? { value: lb(e) } : Vr,
  graceSite: (e, t) => {
    if (!U(e) || t.value)
      return !1;
    const n = Co(e);
    if (!n)
      return !1;
    const r = N();
    if (!M(r) || !r.isCollapsed())
      return !1;
    const i = r.anchor.getNode();
    if (i.is(n))
      return !0;
    const s = n.getPreviousSibling();
    return s !== null && i.is(s) && r.anchor.offset === s.getTextContentSize();
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "owner-children",
    glyphs: "none",
    insertRunBefore: (e) => U(e) ? Co(e) : void 0
  }
};
function $b(e) {
  if (w(e))
    return e.getMarker() === "cat";
  if (!C(e) || de(e, ke) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return w(t) && t.getMarker() === "cat";
}
function wM(e) {
  const t = e.getParent();
  if (!D(t))
    return;
  const n = St(t);
  if (n)
    for (let r = e.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (r.is(n))
        return t;
      if (!$b(r))
        return;
    }
}
const NM = {
  kind: "cat",
  ownerPredicate: (e) => D(e),
  ownerOf: (e) => {
    if (Be(e))
      return e.getRunKind() === "cat" && D(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Be(t) ? t.getRunKind() === "cat" && D(t.getParent()) ? t.getParent() ?? void 0 : void 0 : $b(e) ? wM(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!D(e) || e.getIsCollapsed() !== !1)
      return fn;
    const t = e.getCategory();
    return t === void 0 ? fn : { wantsRun: !0, valueText: q + t };
  },
  scanPieces: (e) => D(e) ? ca(e) : Vr,
  graceSite: (e, t) => {
    if (!D(e))
      return !1;
    if (!t.opener && !t.closer) {
      const n = St(e);
      return n !== void 0 && yd(n);
    }
    return zc(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => D(e) ? St(e) : void 0
  }
};
function OM(e) {
  return Be(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : w(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : C(e) && de(e, ke) === "attribute";
}
function $M(e) {
  if (w(e)) {
    const r = e.getMarker();
    return r === "ca" || r === "cp" ? r : void 0;
  }
  if (!C(e) || de(e, ke) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!w(t))
    return;
  const n = t.getMarker();
  return n === "ca" || n === "cp" ? n : void 0;
}
function RM(e) {
  const t = e.getParent();
  if (!$e(t))
    return;
  const n = gi(t);
  if (n)
    for (let r = e.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (r.is(n))
        return t;
      if (!OM(r))
        return;
    }
}
function Bh(e) {
  const t = (n) => $e(n) ? e === "ca" ? gi(n) : fb(n) : void 0;
  return {
    kind: e,
    ownerPredicate: (n) => $e(n),
    ownerOf: (n) => {
      if (Be(n))
        return n.getRunKind() === e && $e(n.getParent()) ? n.getParent() ?? void 0 : void 0;
      const r = n.getParent();
      return Be(r) ? r.getRunKind() === e && $e(r.getParent()) ? r.getParent() ?? void 0 : void 0 : $M(n) === e ? RM(n) : void 0;
    },
    expectedPieces: (n) => {
      if (!$e(n))
        return fn;
      const r = e === "ca" ? n.getAltnumber() : n.getPubnumber();
      return r === void 0 ? fn : { wantsRun: !0, valueText: q + r };
    },
    scanPieces: (n) => $e(n) ? e === "ca" ? ub(n) : db(n) : Vr,
    graceSite: (n, r) => {
      if (!$e(n))
        return !1;
      if (!r.opener && !r.closer) {
        const i = t(n);
        return i !== void 0 && yd(i);
      }
      return zc(r);
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
function Rb(e) {
  if (w(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return C(e) && de(e, ke) === "attribute";
}
function IM(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ke(t)) {
      const n = w(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !n || n.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Rb(t))
      return;
  }
}
const LM = {
  kind: "milestone",
  ownerPredicate: (e) => Ke(e),
  ownerOf: (e) => {
    const t = Be(e) ? e.getRunKind() === "milestone" ? e : void 0 : Be(e.getParent()) ? e.getParent() : Rb(e) ? e : void 0;
    if (!t || Be(t) && t.getRunKind() !== "milestone")
      return;
    const n = t.getPreviousSibling();
    return Be(t) ? Ke(n) ? n : void 0 : IM(t);
  },
  expectedPieces: (e) => {
    if (!Ke(e))
      return fn;
    const t = cb(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), n = Xn(t, oa(e.getMarker()));
    return { wantsRun: !0, valueText: n === "" ? void 0 : q + n };
  },
  scanPieces: (e) => {
    if (!Ke(e))
      return Vr;
    const { opening: t, attribute: n, closing: r, wrapper: i } = Kc(e);
    return { opener: t, value: n, closer: r, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Ke(e))
      return !1;
    if (!t.opener && !t.closer) {
      const n = N();
      if (!M(n) || !n.isCollapsed())
        return !1;
      const r = n.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && r.is(i) && n.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && r.is(s) && n.anchor.offset === 0;
    }
    return zc(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => Ke(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, qM = Fc("optbreak", void 0, void 0).opening, DM = {
  kind: "optbreak",
  ownerPredicate: (e) => Ze(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Ze(t) || t.getTag() !== "optbreak"))
      return C(e) || Rt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: qM }),
  scanPieces: (e) => Ze(e) ? { value: e.getFirstChild() ?? void 0 } : Vr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, KM = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => Ze(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => fn,
  scanPieces: () => Vr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, UM = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => U(e),
  ownerOf: () => {
  },
  expectedPieces: () => fn,
  scanPieces: () => Vr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Bo = [
  AM,
  PM,
  Uh("va"),
  Uh("vp"),
  NM,
  Bh("ca"),
  Bh("cp"),
  LM,
  DM,
  KM,
  UM
], BM = new Map(Bo.map((e) => [e.kind, e]));
function Br(e) {
  const t = BM.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Tr(e) {
  for (const t of Bo) {
    const n = t.ownerOf(e);
    if (n)
      return { owner: n, kind: t.kind };
  }
}
function Ib(e) {
  return Tr(e) !== void 0;
}
function FM(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const { type: t, id: n, start: r, end: i, undisplayed: s } = e;
  return typeof t == "string" && typeof n == "string" && Number.isInteger(r) && Number.isInteger(i) && (s === void 0 || typeof s == "boolean");
}
const jc = Vs("displayAnnotations", {
  parse: (e) => {
    if (typeof e != "object" || e === null)
      return;
    const { basis: t, annotations: n } = e;
    if (!(typeof t != "string" || !Array.isArray(n)) && n.every(FM))
      return { basis: t, annotations: n };
  }
});
function zM(e, t) {
  const n = new Array(e.length).fill(void 0);
  let r = 0;
  for (; r < e.length && r < t.length && e[r] === t[r]; )
    n[r] = r, r++;
  let i = 0;
  for (; i < e.length - r && i < t.length - r && e[e.length - 1 - i] === t[t.length - 1 - i]; )
    n[e.length - 1 - i] = t.length - 1 - i, i++;
  const s = e.slice(r, e.length - i), o = t.slice(r, t.length - i), a = Array.from({ length: s.length + 1 }, () => new Array(o.length + 1).fill(0));
  for (let u = s.length - 1; u >= 0; u--)
    for (let f = o.length - 1; f >= 0; f--)
      a[u][f] = s[u] === o[f] ? a[u + 1][f + 1] + 1 : Math.max(a[u + 1][f], a[u][f + 1]);
  let c = 0, l = 0;
  for (; c < s.length && l < o.length; )
    s[c] === o[l] ? (n[r + c] = r + l, c++, l++) : a[c + 1][l] >= a[c][l + 1] ? c++ : l++;
  return n;
}
function jM(e, t, n) {
  let r, i;
  for (let s = t; s < n; s++) {
    const o = e[s];
    o !== void 0 && (r ??= o, i = o);
  }
  return r === void 0 || i === void 0 ? void 0 : [r, i + 1];
}
const Lb = 1, VM = "c", qb = "span";
class Ln extends na {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n = !1, r, i, s, o, a) {
    super(a), this.__marker = VM, this.__number = t, this.__showMarker = n, this.__sid = r, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: n, __showMarker: r, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Ln(n, r, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Db(t) ? {
        conversion: WM,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return bd().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setNumber(t.number).setShowMarker(t.showMarker).setSid(t.sid).setAltnumber(t.altnumber).setPubnumber(t.pubnumber).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setNumber(t) {
    if (this.__number === t)
      return this;
    const n = this.getWritable();
    return n.__number = t, n;
  }
  getNumber() {
    return this.getLatest().__number;
  }
  setShowMarker(t = !1) {
    if (this.__showMarker === t)
      return this;
    const n = this.getWritable();
    return n.__showMarker = t, n;
  }
  getShowMarker() {
    return this.getLatest().__showMarker;
  }
  setSid(t) {
    if (this.__sid === t)
      return this;
    const n = this.getWritable();
    return n.__sid = t, n;
  }
  getSid() {
    return this.getLatest().__sid;
  }
  setAltnumber(t) {
    if (this.__altnumber === t)
      return this;
    const n = this.getWritable();
    return n.__altnumber = t, n;
  }
  getAltnumber() {
    return this.getLatest().__altnumber;
  }
  setPubnumber(t) {
    if (this.__pubnumber === t)
      return this;
    const n = this.getWritable();
    return n.__pubnumber = t, n;
  }
  getPubnumber() {
    return this.getLatest().__pubnumber;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement(qb);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Wa, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Hi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(Wa, `usfm_${this.getMarker()}`), n.setAttribute("data-number", this.getNumber())), { element: n };
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
    return this.getRenderedText();
  }
  /** The text this chapter shows on screen: its whole `\c N` glyph, or only its number. */
  getRenderedText() {
    return this.getShowMarker() ? Fn(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Lb
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
function WM(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: bd(t) };
}
function bd(e, t, n, r, i, s) {
  return yt(new Ln(e, t, n, r, i, s));
}
function Db(e) {
  return e ? e.classList.contains(Wa) && e.tagName.toLowerCase() === qb : !1;
}
function Wr(e) {
  return e instanceof Ln;
}
function HM(e) {
  return e?.type === Ln.getType();
}
const Fo = "id", Kb = 1, GM = [
  "type",
  "marker",
  "code",
  "content"
];
class En extends cr {
  __marker = Fo;
  __code;
  __unknownAttributes;
  constructor(t = "", n, r) {
    super(r), this.__code = t, this.__unknownAttributes = n;
  }
  static getType() {
    return "book";
  }
  static clone(t) {
    const { __code: n, __unknownAttributes: r, __key: i } = t;
    return new En(n, r, i);
  }
  static importJSON(t) {
    const { code: n } = t;
    return Ub(n).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return oS(t);
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
    const n = this.getWritable();
    return n.__code = t, n;
  }
  /**
   * Get the book code (ID).
   * @returns the book code (ID).
   */
  getCode() {
    return this.getLatest().__code;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
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
      version: Kb
    };
  }
}
function Ub(e, t) {
  return yt(new En(e, t));
}
function Ie(e) {
  return e instanceof En;
}
function kd(e) {
  return e?.type === En.getType();
}
const JM = [
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
  Bn,
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
], Bb = 1, YM = ["type", "marker", "content"];
class It extends Uf {
  __marker;
  __unknownAttributes;
  constructor(t = Bn, n, r) {
    super(r), this.__marker = t, this.__unknownAttributes = n;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: n, __unknownAttributes: r, __key: i } = t;
    return new It(n, r, i);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (JM.includes(t) || (n?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: XM,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return $s().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement("p");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`), t;
  }
  updateDOM(t, n, r) {
    const i = super.updateDOM(t, n, r);
    return !i && t.__marker !== this.__marker && (n.setAttribute("data-marker", this.__marker), n.classList.remove(`usfm_${t.__marker}`), n.classList.add(`usfm_${this.__marker}`)), i;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Hi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: n };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Bb
    };
  }
  // Mutation
  insertNewAfter(t, n) {
    const r = $s(this.getMarker());
    return r.setTextFormat(t.format), r.setTextStyle(t.style), r.setDirection(this.getDirection()), r.setFormat(this.getFormatType()), r.setStyle(this.getTextStyle()), this.insertAfter(r, n), r;
  }
}
function XM(e) {
  const t = e.getAttribute("data-marker") ?? void 0, n = $s(t);
  if (e.style) {
    n.setFormat(e.style.textAlign);
    const r = parseInt(e.style.textIndent, 10) / 20;
    r > 0 && n.setIndent(r);
  }
  return { node: n };
}
function $s(e, t) {
  return yt(new It(e, t));
}
function ye(e) {
  return e instanceof It;
}
function xd(e) {
  return e?.type === It.getType();
}
const Fb = /[ \u00A0]{2,}/g;
function QM(e) {
  return [...e.matchAll(Fb)].map((t) => [
    t.index + 1,
    t.index + t[0].length
  ]);
}
function Fh(e) {
  return e.replace(Fb, (t) => t[0]);
}
const ZM = "​", Rs = ZM;
var zh;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(zh || (zh = {}));
var jh;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(jh || (jh = {}));
function e0() {
  return Re(Rs);
}
function t0(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Rs, ""));
}
function Zi(e) {
  return e.length > 0 && e.includes(Rs) && e.replaceAll(Rs, "") === "";
}
function la(e) {
  return C(e) && Zi(e.getTextContent());
}
function zb(e) {
  return Q_(e) || HM(e);
}
function ot(e) {
  return $e(e) || Wr(e);
}
function jb(e, t) {
  return e.find((n) => ot(n) && n.getNumber() === t.toString());
}
function n0(e, t = !1) {
  return e.find((n, r) => (!t || r > 0) && ot(n));
}
function Nu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const n = t.getPreviousSibling();
    if (n)
      return n;
    t = t.getParent();
  }
}
function r0(e) {
  if (!e)
    return;
  if (ot(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !ot(t); )
    t = t.getPreviousSibling();
  if (t && ot(t))
    return t;
}
function An(e) {
  return Qe(e, D) ?? void 0;
}
function i0(e) {
  return Ie(e) || $e(e) || U(e) || Wr(e) || _t(e) || Ke(e) || ye(e) || D(e) || Ue(e) || Ze(e);
}
function Td(e) {
  if (e.anchor.type === "element") {
    const n = e.anchor.getNode(), r = e.anchor.offset;
    if (r < n.getChildrenSize())
      return n.getChildAtIndex(r);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Vb(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const n = e.anchor.getNode();
  return n.getPreviousSibling() ?? n.getParent()?.getPreviousSibling() ?? null;
}
function mt(e) {
  return wt(e) || Ie(e);
}
function wt(e) {
  return ye(e) || _t(e);
}
function s0(e) {
  return xd(e) || Uc(e);
}
function Is(e, t) {
  let n = e.getParent();
  for (; n; ) {
    if (n.getKey() === t)
      return !0;
    n = n.getParent();
  }
  return !1;
}
function Ui(e, t) {
  const n = de(t, Ki), r = !!(e.cid && n), i = !e.cid && !n;
  return e.style === t.getMarker() && (i || r && e.cid === n);
}
function o0(e, t) {
  const n = E(e) ? e : e.getParent(), r = E(t) ? t : t.getParent(), i = n && r ? lS(n, r) : void 0;
  return i ? i.commonAncestor : void 0;
}
function a0(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [n, r] = t, i = e.isBackward() ? n : r;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Fr(e) {
  return e?.type === it.getType();
}
function c0(e, t) {
  if (!t)
    return;
  const n = e.findIndex((r) => r === t);
  n && (e.length = n);
}
function l0(e, t) {
  if (!t)
    return e;
  const n = t.getIndexWithinParent();
  return e.splice(n + 1, e.length - n - 1);
}
function Wb(e, t, n) {
  const r = Ve(e);
  if (t?.startsWith(r)) {
    const i = t.slice(r.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (n = s[1]);
  }
  return n;
}
function u0(e) {
  const t = e[qr];
  if (t && typeof t == "object" && "textType" in t) {
    const n = t.textType;
    if (typeof n == "string")
      return n;
  }
}
function Hb(e) {
  return Jb(e) || Fr(e) && u0(e) === "attribute" ? "" : Fr(e) && e.text !== q ? e.text : rb(e) ? e.children.map((t) => Hb(t)).join("") : "";
}
function f0(e) {
  return e.map((n) => Hb(n)).filter((n) => n.length > 0).join(" ").trim();
}
function Cd(e) {
  const t = [];
  for (const n of e) {
    if (!U(n))
      continue;
    const r = Gb(n);
    r !== Pt && r.length > 0 && t.push(r);
  }
  return t.join(" ").trim();
}
function Gb(e) {
  return w(e) || gn(e) || C(e) && de(e, ke) === "attribute" ? "" : C(e) ? e.getTextContent() : E(e) ? e.getChildren().map((t) => Gb(t)).join("") : "";
}
function gn(e) {
  return Rt(e) && e.getTextType() === "marker";
}
function mn(e) {
  return w(e) || gn(e);
}
function vd(e) {
  if (!e || !mn(e))
    return !1;
  const t = e.getParent();
  return Ie(t) && e.is(t.getFirstChild());
}
function Jb(e) {
  return Hs(e) || Pb(e) && e.textType === "marker";
}
function Vh(e, t) {
  d0(e, t), e.setMarker(t);
}
function d0(e, t) {
  const n = e.getMarker(), r = Ve(n), i = Ve(n, !0), s = st(n), o = st(n, !0), a = ze.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!mn(c))
      return;
    const l = c.getTextContent(), u = l === r || l === i, f = !u && (l === s || l === o);
    if (!(!u && !f)) {
      if (f && a) {
        c.remove();
        return;
      }
      if (w(c))
        c.setMarker(t);
      else if (gn(c)) {
        const d = l.startsWith(Ve("", !0));
        c.setTextContent(u ? Ve(t, d) : st(t, d));
      }
    }
  });
}
function ht(e, t = aS) {
  const n = { ...e };
  return t.forEach((r) => {
    Reflect.deleteProperty(n, r);
  }), Object.keys(n).length === 0 ? void 0 : n;
}
function at(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Yb(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Xb(e) {
  if (!M(e))
    return Wh(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !E(t) || e.anchor.type === "text" && !C(t)))
    return t ?? void 0;
  try {
    return Wh(e) ?? t ?? void 0;
  } catch (r) {
    if (Yb(r))
      return t ?? void 0;
    throw r;
  }
}
function p0(e, t) {
  if (!t)
    return (e + 1).toString();
  const n = t.split("-");
  if (n.length === 2)
    return parseInt(n[1]) ? `${parseInt(n[1]) + 1}` : `${parseInt(n[0]) + 1}`;
  const r = RegExp(/^(\d+)([a-yA-Y]{1,3})$/).exec(t);
  if (!r)
    return (parseInt(t) + 1).toString();
  const i = String.fromCharCode(r[2].charCodeAt(0) + 1);
  return `${r[1]}${i}`;
}
function Sd(e, t) {
  if (!t)
    return !1;
  const n = t.split("-").map((r) => parseInt(r));
  if (n.length < 1 || n.length > 2 || n[0] > n[1])
    throw new Error("isVerseInRange: invalid range");
  return n.length === 1 ? e === n[0] : n.length === 2 && isNaN(n[1]) ? e >= n[0] : (n.length === 2 && isNaN(n[0]) || e >= n[0]) && e <= n[1];
}
function h0(e) {
  return !!e && e.includes("-");
}
function Qb(e) {
  const t = e.split("-"), n = parseInt(t[0], 10), r = t.length > 1 ? parseInt(t[t.length - 1], 10) : n;
  return { start: n, end: r };
}
function Wh(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function _d(e) {
  if (!C(e))
    return;
  const t = In(e);
  if (!D(t) || !St(t)?.is(e))
    return;
  const { start: n, end: r } = Dc(e.getTextContent(), t.getCaller());
  return n < r ? { start: n, end: r } : void 0;
}
function Pn(e) {
  if (!e)
    return !1;
  if (Gi(e) || w(e) || gn(e) || Be(e) || e.getType() === hi || Rt(e) && e.getTextType() === "attribute")
    return !0;
  const t = In(e);
  if ($e(t))
    return !0;
  if (C(e) && D(t) && St(t)?.is(e))
    return !_d(e);
  if (C(e)) {
    const n = de(e, ke);
    if (n === Mr || n === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || Zi(r))
      return !0;
    if (r === q)
      return !Zb(e);
  }
  return !1;
}
function Zb(e) {
  if (e.getTextContent() !== q || de(e, ke) !== void 0 || !(ue(e.getParent()) || ue(e.getPreviousSibling()) || ue(e.getNextSibling())) || Gs(e) > 0)
    return !1;
  const n = In(e);
  return !U(n) || ek(n, e);
}
function ek(e, t) {
  return e.getChildren().some((n) => n.is(t) ? !1 : ue(n) ? ek(n, t) : C(n) ? !w(n) && de(n, ke) === void 0 && n.getTextContent() !== "" && n.getTextContent() !== q && !Zi(n.getTextContent()) : E(n) && !Be(n));
}
function Bi() {
  const e = Re(q);
  return Ht(e, ke, Mr), e.setMode("token"), e;
}
function g0(e) {
  const t = e.getTextContent();
  t.startsWith(q) || e.setTextContent(q + t);
}
function bn(e) {
  return C(e) && de(e, ke) === Mr;
}
function tk(e) {
  const t = e.getFirstChild();
  if (!mn(t) || t === null || bn(t.getNextSibling()))
    return !1;
  const n = N();
  if (!M(n) || !n.isCollapsed())
    return !1;
  const r = n.anchor.getNode();
  if (r.is(t) || r.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && r.is(i) && n.anchor.offset === 0;
}
function nk(e) {
  if ($e(e))
    return [];
  const t = [];
  let n;
  const r = () => {
    n && (t.push({ type: "text", nodes: n }), n = void 0);
  }, i = (s) => {
    if (!Pn(s)) {
      if (ad(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (C(s) && s.getType() === it.getType()) {
        n ??= [], n.push(s);
        return;
      }
      r(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), r(), t;
}
function m0(e, t) {
  const n = [];
  let r = 0;
  for (const i of e) {
    const s = _d(i), o = s ? s.start : Gs(i), a = s ? s.end : i.getTextContentSize(), c = t ? QM(i.getTextContent().slice(o, a)).map(([u, f]) => [u + o, f + o]) : [];
    a < i.getTextContentSize() && c.push([a, i.getTextContentSize()]);
    const l = i.getTextContentSize() - o - c.reduce((u, [f, d]) => u + d - f, 0);
    n.push({ node: i, start: r, lead: o, collapsed: c, length: l }), r += l;
  }
  return { type: "text", segments: n, length: r };
}
function rk(e) {
  return e.lead > 0 ? [[0, e.lead], ...e.collapsed] : e.collapsed;
}
function y0(e, t) {
  let n = t;
  for (const [r, i] of rk(e)) {
    if (t <= r)
      break;
    n -= Math.min(t, i) - r;
  }
  return e.start + n;
}
function Hh(e, t) {
  let n = t;
  for (const [r, i] of rk(e)) {
    if (r > n)
      break;
    n += i - r;
  }
  return n;
}
function en(e, t) {
  return nk(e).map((n) => n.type === "element" ? n : m0(n.nodes, t));
}
function b0(e, t) {
  return nk(e).findIndex((n) => n.type === "element" ? n.node.is(t) : n.nodes.some((r) => r.is(t)));
}
function Ms(e, t, n) {
  const r = In(e);
  if (!r)
    return;
  const i = en(r, n);
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.type !== "text")
      continue;
    const a = o.segments.find((c) => c.node.is(e));
    if (a)
      return { parent: r, index: s, offset: y0(a, t) };
  }
}
function k0(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const r of e.segments)
    if (t >= r.start && t < r.start + r.length)
      return [r.node, Hh(r, t - r.start)];
  const n = e.segments[e.segments.length - 1];
  if (n)
    return [n.node, Hh(n, t - n.start)];
}
function Cs(e, t, n) {
  const r = e.getChildAtIndex(t);
  if (Tb(e)) {
    const s = e.getParentOrThrow();
    return r ? Pn(r) ? Cs(e, t + 1, n) : Ou(s, r, n) : Cs(s, e.getIndexWithinParent() + 1, n);
  }
  const i = en(e, n);
  return r ? Pn(r) || ad(r) && !ik(i, r) ? Cs(e, t + 1, n) : Ou(e, r, n) : { type: "index", index: i.length };
}
function x0(e, t) {
  const n = In(e);
  if (n && ik(en(n, t), e))
    return { parent: n, point: Ou(n, e, t) };
}
function ik(e, t) {
  return e.some((n) => n.type === "element" ? n.node.is(t) || Is(n.node, t.getKey()) : n.segments.some((r) => r.node.is(t) || Is(r.node, t.getKey())));
}
function Ou(e, t, n) {
  const r = en(e, n);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(t) || Is(s.node, t.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(t) || Is(o.node, t.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
const Xa = "unmatched", sk = 2;
function vo(e) {
  return `\\${e}`;
}
class ur extends it {
  __marker;
  constructor(t = "", n) {
    super(vo(t), n), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: n, __key: r } = t;
    return new ur(n, r);
  }
  static importDOM() {
    return {
      [Xa]: (t) => C0(t) ? {
        conversion: T0,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Md().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const n = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? vo(n)
    }).getWritable();
    return i.__marker = n, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n.__text = vo(t), n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const n = super.createDOM(t);
    return n.setAttribute("data-marker", this.__marker), n.classList.add(Mh), n.title = Gh(this.__marker), n;
  }
  updateDOM(t, n, r) {
    const i = super.updateDOM(t, n, r);
    return t.__marker !== this.__marker && (n.setAttribute("data-marker", this.__marker), n.title = Gh(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Xa);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Mh), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: sk
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function ok(e) {
  return e.getTextContent() === vo(e.getMarker());
}
function Gh(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function T0(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Md(t) };
}
function Md(e) {
  return yt(new ur(e));
}
function C0(e) {
  return e?.tagName.toLowerCase() === Xa;
}
function kn(e) {
  return e instanceof ur;
}
function v0(e) {
  return e?.type === ur.getType();
}
const S0 = /* @__PURE__ */ new Set([
  hi,
  Dy,
  Hn.getType(),
  // A chapter in the views without editable markers: the same whole-node treatment as a verse.
  Ln.getType()
]);
function Ed(e) {
  return C(e) && de(e, ke) === "attribute";
}
function ak(e) {
  if (!C(e))
    return !1;
  let t = e.getParent();
  for (; ue(t); )
    t = t.getParent();
  return D(t) ? St(t)?.is(e) ?? !1 : $e(t) ? gi(t)?.is(e) ?? !1 : !1;
}
function ck(e) {
  return yn(e) ? S0.has(e.getType()) : !C(e) || bn(e) ? !1 : w(e) || Ue(e) || Ed(e) || ak(e) || // An unmatched closer (`ImmutableUnmatchedNode`) is a `TextNode` subclass, not a decorator, so
  // the decorator-type set above cannot reach it.
  kn(e);
}
function Ad(e) {
  if (!C(e))
    return [0, 0];
  if (kn(e))
    return [0, e.getTextContentSize()];
  const t = e.getTextContent(), n = t.length - t.trimStart().length;
  return n === t.length ? [n, n] : [n, t.trimEnd().length];
}
function lk(e, t, n) {
  return e.type === t && e.id === n;
}
function uk(e, t) {
  if (e.basis === t)
    return e.annotations;
  const n = zM(e.basis, t);
  return e.annotations.flatMap((r) => {
    if (r.start === r.end)
      return [r];
    const i = jM(n, r.start, r.end);
    return i ? [{ ...r, start: i[0], end: i[1] }] : [];
  });
}
function Qa(e) {
  return yn(e) ? Za(e) : e.getTextContent();
}
function _0(e) {
  return yn(e) ? es(e) : e.getTextContent();
}
function Pd(e) {
  const t = de(e, jc);
  return t ? uk(t, Qa(e)) : [];
}
function M0(e, t) {
  if (t.start === t.end)
    return t;
  let n, r;
  for (let i = t.start; i < t.end; i++) {
    const s = Nd.renderedOffset(e, i);
    if (s === "drawn")
      return { type: t.type, id: t.id, start: 0, end: 0 };
    s !== void 0 && (n = Math.min(n ?? s, s), r = Math.max(r ?? s + 1, s + 1));
  }
  return n === void 0 || r === void 0 ? { ...t, undisplayed: !0 } : { type: t.type, id: t.id, start: n, end: r };
}
function ei(e) {
  const t = Pd(e);
  return yn(e) ? t.map((n) => M0(e, n)) : t;
}
function wd(e, t) {
  const n = [...t].sort((r, i) => r.start - i.start || r.end - i.end);
  Ht(e, jc, n.length > 0 ? { basis: Qa(e), annotations: n } : void 0);
}
function Jh(e) {
  const t = Vc(e).trim();
  if (t)
    return t;
  const n = es(e), [r, i] = Wc(n);
  return n.slice(r, i);
}
const fk = {
  holdableText: Jh,
  renderedOffset: (e, t) => {
    const n = Jh(e);
    if (t >= n.length)
      return;
    const r = es(e), [i] = Wc(r);
    return r.slice(i, i + n.length) === n ? i + t : "drawn";
  }
};
let Nd = fk;
function E0(e) {
  Nd = e ?? fk;
}
function Za(e) {
  return Nd.holdableText(e);
}
function A0(e, t, n, r, i) {
  let s = { type: t, id: n, start: r, end: i };
  const o = [];
  for (const a of Pd(e))
    lk(a, t, n) && a.start <= s.end && s.start <= a.end ? s = {
      ...s,
      start: Math.min(s.start, a.start),
      end: Math.max(s.end, a.end)
    } : o.push(a);
  wd(e, [...o, s]);
}
function dk(e, t, n) {
  const r = Pd(e), i = r.filter((s) => !lk(s, t, n));
  return i.length === r.length ? !1 : (wd(e, i), !0);
}
function Vc(e) {
  if (e.getType() !== hi)
    return e.getTextContent();
  const t = e.getParent();
  return D(t) ? t.getCaller() : "";
}
function P0(e) {
  return "getRenderedText" in e && typeof e.getRenderedText == "function";
}
function es(e) {
  if (!yn(e) || !P0(e))
    return "";
  const t = e.getRenderedText();
  return typeof t == "string" ? t : "";
}
function Yh(e) {
  return e === Io || /\s/u.test(e);
}
function Wc(e) {
  let t = 0;
  for (; t < e.length && Yh(e[t]); )
    t++;
  if (t === e.length)
    return [0, 0];
  let n = e.length;
  for (; n > t && Yh(e[n - 1]); )
    n--;
  return [t, n];
}
function $u(e, t) {
  if (t.undisplayed)
    return Za(e).slice(t.start, t.end);
  if (t.start !== t.end)
    return _0(e).slice(t.start, t.end);
  const n = Za(e);
  if (n)
    return n;
  const r = es(e), [i, s] = Wc(r);
  return r.slice(i, s);
}
function w0(e, t, n) {
  return ei(e).filter((r) => r.type === t && (r.undisplayed || r.start === r.end || r.start <= n && n <= r.end)).map((r) => r.id);
}
function N0(e) {
  const t = de(e, jc);
  !t || t.basis === Qa(e) || wd(e, uk(t, Qa(e)));
}
const ec = /* @__PURE__ */ new WeakMap();
function Od(e, t) {
  return JSON.stringify([e, t]);
}
function O0(e, t, n) {
  const r = Ut();
  let i = ec.get(r);
  i || (i = /* @__PURE__ */ new Map(), ec.set(r, i));
  const s = Od(e, t), o = i.get(s), a = Object.fromEntries(Object.entries(n).filter(([, c]) => c !== void 0));
  i.set(s, { ...o, ...a });
}
function tc(e, t, n) {
  return ec.get(e)?.get(Od(t, n));
}
function pk(e, t, n) {
  ec.get(e)?.delete(Od(t, n));
}
function $0(e, t = []) {
  const r = [
    it,
    Wn,
    Kt,
    Hn,
    Ln,
    ...t
  ].filter((i) => e.hasNodes([i])).map((i) => e.registerNodeTransform(i, N0));
  return () => r.forEach((i) => i());
}
function R0(e) {
  return Ue(e) || Ke(e) || Be(e) || Be(e.getParent()) || ak(e) || kn(e);
}
function $d(e) {
  return C(e) ? e.getTextContentSize() : 1;
}
function Rd(e) {
  let t = e;
  for (; E(t); ) {
    const n = t.getFirstChild();
    if (!n)
      return t;
    t = n;
  }
  return t;
}
function hk(e) {
  let t = e;
  for (; E(t); ) {
    const n = t.getLastChild();
    if (!n)
      return t;
    t = n;
  }
  return t;
}
function Xh(e) {
  const t = e.getNode();
  if (!E(t))
    return { leaf: t, offset: C(t) ? e.offset : Math.min(e.offset, 1) };
  const n = t.getChildAtIndex(e.offset);
  if (n)
    return { leaf: Rd(n), offset: 0 };
  const r = t.getLastChild();
  if (!r)
    return { leaf: t, offset: 0 };
  const i = hk(r);
  return { leaf: i, offset: $d(i) };
}
function Ia(e, t) {
  return e.leaf.is(t.leaf) ? e.offset - t.offset : e.leaf.isBefore(t.leaf) ? -1 : 1;
}
function gk(e, t, n) {
  const r = $d(e);
  let i = r;
  t.leaf.is(e) ? i = t.offset : t.leaf.isBefore(e) && (i = 0);
  let s = 0;
  return n.leaf.is(e) ? s = n.offset : e.isBefore(n.leaf) && (s = r), [i, Math.max(i, s)];
}
function I0(e) {
  for (let t = e; t; t = t.getParent()) {
    const n = t.getNextSibling();
    if (n)
      return Rd(n);
  }
}
function L0(e, t, n) {
  const r = Rd(e), i = hk(e);
  if (Ia(t, { leaf: r, offset: 0 }) > 0 || Ia(n, { leaf: i, offset: $d(i) }) < 0)
    return !1;
  if (bn(i)) {
    const s = I0(e);
    if (!s || Ia(n, { leaf: s, offset: 0 }) <= 0)
      return !1;
  }
  return !0;
}
function q0(e, t, n, r) {
  if (!ck(e))
    return;
  const [i, s] = gk(e, t, n);
  if (s <= i)
    return;
  if (!C(e)) {
    const l = r?.get(e.getKey());
    return l ? [l.start, l.end] : [0, Za(e).length];
  }
  const [o, a] = Ad(e), c = [Math.max(i, o), Math.min(s, a)];
  return c[1] > c[0] ? c : void 0;
}
function Id(e, t, n, r, i, s, o, a = {}) {
  if (e.isCollapsed())
    return;
  const c = e.getNodes(), l = e.isBackward(), [u, f] = l ? [e.focus, e.anchor] : [e.anchor, e.focus], d = Xh(u), p = Xh(f);
  if (Ia(d, p) >= 0)
    return;
  let h = !1;
  const g = (k) => {
    const x = q0(k, d, p, a.decoratorHolds);
    x && (jt($a), A0(k, t, n, x[0], x[1]), h = !0);
  };
  let m, y;
  for (const k of c) {
    if (E(y) && y.isParentOf(k))
      continue;
    if (w(k) || bn(k) || Ed(k) || R0(k)) {
      g(k), m = k.getParent(), y = void 0;
      continue;
    }
    let x = null;
    if (C(k)) {
      const [A, _] = gk(k, d, p), j = Math.max(A, Gs(k));
      if (j >= _)
        continue;
      jt($a), x = k.splitText(j, _)[j > 0 ? 1 : 0];
    } else {
      if (ue(k))
        continue;
      if (E(k) && k.isInline()) {
        if (!L0(k, d, p))
          continue;
        x = k;
      }
    }
    if (x !== null) {
      if (x && x.is(m))
        continue;
      jt($a);
      const A = x.getParent();
      (A == null || !A.is(m)) && (y = void 0), m = A, y === void 0 && (y = Di(), y.addID(t, n, r, i, s, o), x.insertBefore(y)), y.append(x);
    } else
      g(k), m = void 0, y = void 0;
  }
  h && O0(t, n, { onClick: r, onRemove: i, onMouseEnter: s, onMouseLeave: o }), t === Vt && E(y) && (l ? y.selectStart() : y.selectEnd());
}
const mk = "table:row", Qh = "immutable-table-row", yk = 1, Ru = "tr", D0 = ["type", "marker", "content"];
class ts extends cr {
  __marker;
  __unknownAttributes;
  constructor(t = Ru, n, r) {
    super(r), this.__marker = t, this.__unknownAttributes = n;
  }
  static getType() {
    return Qh;
  }
  static clone(t) {
    return new ts(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return K0().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Ru).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
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
      type: Qh,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: yk
    };
  }
}
function K0(e, t) {
  return yt(new ts(e, t));
}
function bk(e) {
  return e instanceof ts;
}
const kk = "table:cell", Zh = "immutable-table-cell", xk = 1, Iu = "tc1", U0 = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function B0(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class ns extends cr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Iu, n, r, i, s) {
    super(s), this.__marker = t, this.__align = n, this.__colspan = r, this.__unknownAttributes = i;
  }
  static getType() {
    return Zh;
  }
  static clone(t) {
    const { __marker: n, __align: r, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new ns(n, r, i, s, o);
  }
  static importJSON(t) {
    return F0().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Iu).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setAlign(t) {
    if (this.__align === t)
      return this;
    const n = this.getWritable();
    return n.__align = t, n;
  }
  getAlign() {
    return this.getLatest().__align;
  }
  setColspan(t) {
    if (this.__colspan === t)
      return this;
    const n = this.getWritable();
    return n.__colspan = t, n;
  }
  getColspan() {
    return this.getLatest().__colspan;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = this.__marker.startsWith("th"), n = document.createElement(t ? "th" : "td");
    n.setAttribute("data-marker", this.__marker), n.classList.add("table-cell", `usfm_${this.__marker}`);
    const r = B0(this.__align);
    return r && (n.style.textAlign = r), this.__colspan && n.setAttribute("colspan", this.__colspan), n;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), n = this.getColspan(), r = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: Zh,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...n !== void 0 && { colspan: n },
      ...r !== void 0 && { unknownAttributes: r },
      version: xk
    };
  }
}
function F0(e, t, n, r) {
  return yt(new ns(e, t, n, r));
}
function z0(e) {
  return e instanceof ns;
}
const Lu = /* @__PURE__ */ new WeakMap();
function eg(e, t) {
  t ? Lu.set(e, t) : Lu.delete(e);
}
function Ld(e) {
  return Lu.get(e);
}
function ua(e, t) {
  const n = e.getChildAtIndex(t);
  return C(n) ? n : void 0;
}
function sr(e, t) {
  const n = ua(e, t);
  n ? n.select(0, 0) : e.select(t, t);
}
function zo(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function j0(e) {
  return e.getChildren().some((t) => w(t) && t.getMarkerSyntax() === "closing");
}
function V0(e) {
  return zo(e) ? void 0 : { closed: "false" };
}
function W0(e, t, n, r) {
  const i = t.getMarker(), s = Bc(t), o = j0(t), a = r ? $t(i, "opening", s) : void 0;
  if (a) {
    e.append(a);
    const [c] = n;
    jr(c) && !c.getTextContent().startsWith(q) && c.setTextContent(q + c.getTextContent());
  }
  e.append(...n), a && Eb(a, e), o && e.append($t(i, "closing", s));
}
function Fi(e) {
  return Qe(e, U) ?? void 0;
}
function H0(e) {
  let t = e.getParent();
  for (; U(t); )
    t = t.getParent();
  return t;
}
function qu(e) {
  const t = Tk(e);
  return e.getChildren().every((n) => w(n) || t && de(n, ke) === "attribute" || C(n) && n.getTextContent().replaceAll(q, "") === "");
}
function Tk(e) {
  return zo(e);
}
function G0(e, t) {
  const n = e.getUnknownAttributes(), r = n ? Xn(n, Ws(e.getMarker())) : "";
  r !== "" && t.insertAfter(Re(r)), e.remove();
}
function J0(e, t) {
  if (zo(e))
    return;
  const n = e.getUnknownAttributes();
  if (n) {
    const r = { ...n };
    delete r.closed, e.setUnknownAttributes(Object.keys(r).length > 0 ? r : void 0);
  }
  t && e.append($t(e.getMarker(), "closing", Bc(e)));
}
function Y0(e, t) {
  return U(e) && !zo(e) && !zo(t);
}
function X0(e, t, n) {
  qu(e) && e.getChildren().forEach((s) => {
    w(s) || s.remove();
  });
  const [r] = t;
  n && jr(r) && !r.getTextContent().startsWith(q) && r.setTextContent(q + r.getTextContent()), e.append(...t);
  const i = e.getFirstChild();
  n && w(i) && i.getMarkerSyntax() === "opening" && Eb(i, e);
}
function Q0(e, t, n) {
  const { renderGlyphs: r, closeImplicitSpans: i = !1 } = n, s = Tk(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), f = w(l) && l.getMarkerSyntax() === "closing", d = s && de(l, ke) === "attribute";
    !f && !d && o.push(l), l = u;
  }
  const a = Y0(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      X0(e, o, r);
    else {
      const l = Kr(t.getMarker(), V0(t));
      W0(l, t, o, r), e.insertAfter(l), qu(l) ? l.remove() : c = l;
    }
  i && !a && J0(t, r), qu(t) && G0(t, c);
}
function Ls(e, t) {
  let n = e.getParent();
  for (; U(n); )
    Q0(e, n, t), n = e.getParent();
}
function Hc(e) {
  if (C(e) && !w(e)) {
    const t = Gs(e);
    e.select(t, t);
    return;
  }
  if (E(e)) {
    const t = e.getChildren().filter((r) => !w(r)), n = t.find((r, i) => i === t.length - 1 || !C(r) || r.getTextContent() !== q);
    if (n) {
      Hc(n);
      return;
    }
    e.selectEnd();
  }
}
function Z0(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Du(e) {
  return !!(e.opener || e.value || e.closer);
}
function tg(e) {
  return /^\s/.test(e);
}
function qd(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !tg(t) || !tg(e))
    return !0;
  const n = t.trim();
  return n === "" || e.trim() !== n;
}
function Gc(e, t, n) {
  return n.wantsRun ? qd(t.value?.getTextContent(), n.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : Z0(t);
}
function eE(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const n = e.expectedPieces(t);
  if (!n.wantsRun)
    return !1;
  const r = e.scanPieces(t);
  return qd(r.value?.getTextContent(), n.valueText) || e.byteFormat.glyphs !== "none" && (!r.opener || e.byteFormat.closerSyntax !== "none" && !r.closer) ? !1 : r.wrapper === void 0;
}
function Ck(e, t) {
  return !Du(e.scanPieces(t));
}
function fa(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const n = e.expectedPieces(t), r = e.scanPieces(t);
  if (!Gc(e, r, n))
    return !1;
  const i = N();
  if (!M(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = r;
  return o && (s.is(o) || Is(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, r);
}
function tE(e, t, n, r) {
  return !n.wantsRun || Du(r) || Ld(Ut()) === "remote" ? !1 : Ut().getEditorState().read(() => {
    const i = X(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Du(e.scanPieces(i));
  });
}
function nE(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function ng(e) {
  const t = Re(e);
  return Ht(t, ke, "attribute"), t;
}
function rE(e, t, n) {
  if (n.wrapper)
    return n.wrapper;
  const { runKind: r, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!r || !s)
    return;
  const o = Zy(r);
  return s.insertAfter(o), n.opener && o.append(n.opener), n.value && o.append(n.value), n.closer && o.append(n.closer), o;
}
function iE(e, t, n, r) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const d = c?.(t);
    if (!d || r.valueText === void 0)
      return;
    C(n.value) ? n.value.setTextContent(r.valueText) : d.insertBefore(ng(r.valueText));
    return;
  }
  const l = rE(e, t, n);
  if (!l || s === "none" || !o || !a)
    return;
  const u = n.opener ?? (() => {
    const d = $t(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(d) : l.append(d), d;
  })();
  let f = n.value;
  r.valueText === void 0 ? (f?.remove(), f = void 0) : C(f) ? qd(f.getTextContent(), r.valueText) && f.setTextContent(r.valueText) : (f = ng(r.valueText), u.insertAfter(f)), a !== "none" && !n.closer && (f ?? u).insertAfter($t(a === "selfClosing" ? "" : o(t), a));
}
function jo(e, t) {
  const { writer: n } = e.byteFormat;
  if (n === "kind-owned" || n === "read-only" || !t.isAttached())
    return;
  const r = e.expectedPieces(t), i = e.scanPieces(t);
  if (Gc(e, i, r) && !vb(t)) {
    if (tE(e, t, r, i)) {
      Sb(t);
      return;
    }
    if (!fa(e, t)) {
      if (!r.wantsRun) {
        nE(i);
        return;
      }
      iE(e, t, i, r);
    }
  }
}
function sE(e, t, n) {
  jo(e, t), t.isAttached() && fa(e, t) && n.add(t.getKey());
}
function da(e) {
  if (!C(e))
    return !1;
  if (w(e) || Ue(e) || kn(e))
    return !0;
  const t = de(e, ke);
  return t === "attribute" || t === Mr;
}
function Dd(e, t) {
  return w(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && lr(e) && U(e.getParent())) : !1;
}
function oE() {
  const e = N();
  return M(e) ? Dd(e.focus.getNode(), e.focus.offset) : !1;
}
function vk(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return C(t) && da(t) ? t : void 0;
}
function aE(e) {
  const t = vk(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function cE(e) {
  const t = vk(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function rg(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function ig(e, t) {
  e.set(t.key, t.offset, t.type);
}
function lE(e, t) {
  let n = cE(e);
  for (; n; ) {
    const r = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (!C(r))
      return;
    if (!da(r))
      return { node: r, offset: t === "next" ? 0 : r.getTextContentSize() };
    n = r;
  }
}
function sg(e, t) {
  const n = lE(e, t);
  return n ? (e.set(n.node.getKey(), n.offset, "text"), !0) : !1;
}
function Kd(e) {
  if (e.isCollapsed()) {
    const a = aE(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), n = t ? e.focus : e.anchor, r = t ? e.anchor : e.focus, i = [rg(n), rg(r)], s = sg(n, "next"), o = sg(r, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (ig(n, i[0]), ig(r, i[1]), !1) : !0;
}
const Sk = Vs("verseBlockSource", {
  parse: (e) => typeof e == "number" ? e : void 0
}), nc = "verse-block", _k = 1, uE = "verse-block";
class Ys extends cr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", n) {
    super(n), this.__number = t;
  }
  static getType() {
    return nc;
  }
  static clone(t) {
    return new Ys(t.__number, t.__key);
  }
  static importJSON(t) {
    return fE().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setNumber(t.number);
  }
  setNumber(t) {
    if (this.__number === t)
      return this;
    const n = this.getWritable();
    return n.__number = t, n;
  }
  getNumber() {
    return this.getLatest().__number;
  }
  /** The first and last verse numbers this block covers. A bridge covers more than one. */
  getRange() {
    return Qb(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(uE), og(t, this.__number), t;
  }
  updateDOM(t, n) {
    return t.__number !== this.__number && og(n, this.__number), !1;
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
      type: nc,
      number: this.getNumber(),
      version: _k
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function og(e, t) {
  const { start: n, end: r } = Qb(t), i = !isNaN(n) && !isNaN(r) && n <= r;
  e.setAttribute("data-verse-number", t), ag(e, "data-verse-start", i ? n : NaN), ag(e, "data-verse-end", i ? r : NaN);
}
function ag(e, t, n) {
  isNaN(n) ? e.removeAttribute(t) : e.setAttribute(t, n.toString());
}
function fE(e) {
  return yt(new Ys(e));
}
function zi(e) {
  return e instanceof Ys;
}
function dE(e) {
  return e?.type === nc;
}
const pE = [
  En,
  Ln,
  Rn,
  Kt,
  ze,
  tt,
  ir,
  Wn,
  Xi,
  Hn,
  ur,
  It,
  oi,
  Qi,
  ts,
  ns,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Er,
  {
    replace: Uf,
    with: () => zn(),
    withKlass: oi
  }
], rc = {
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
}, hE = {
  paragraph: T.Paragraph,
  character: T.Character,
  note: T.Note,
  milestone: T.Milestone
};
function gE(e) {
  if (!e)
    return xr;
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    if (t.has(n))
      return t.get(n);
    const r = Object.hasOwn(e.markers, n) ? e.markers[n] : void 0, i = r ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: xr(n)?.category ?? v.Uncategorized,
      type: hE[r.styleType] ?? T.Unknown,
      description: r.description ?? "",
      hasEndMarker: !!r.endMarker,
      children: xr(n)?.children
    } : void 0;
    return t.set(n, i), i;
  };
}
function cg(e, t, n) {
  const r = {
    type: nr,
    version: tr,
    content: e
  }, i = t.serializeEditorState(r, n);
  return Uc(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Mk = "v", Ek = 1, mE = "verse-selected";
class Gt extends na {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n = !1, r, i, s, o, a) {
    super(a), this.__marker = Mk, this.__number = t, this.__showMarker = n, this.__sid = r, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return Dy;
  }
  static clone(t) {
    const { __number: n, __showMarker: r, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Gt(n, r, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => kE(t) ? {
        conversion: bE,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ud().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setNumber(t.number).setShowMarker(t.showMarker).setSid(t.sid).setAltnumber(t.altnumber).setPubnumber(t.pubnumber).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setNumber(t) {
    if (this.__number === t)
      return this;
    const n = this.getWritable();
    return n.__number = t, n;
  }
  getNumber() {
    return this.getLatest().__number;
  }
  setShowMarker(t = !1) {
    if (this.__showMarker === t)
      return this;
    const n = this.getWritable();
    return n.__showMarker = t, n;
  }
  getShowMarker() {
    return this.getLatest().__showMarker;
  }
  setSid(t) {
    if (this.__sid === t)
      return this;
    const n = this.getWritable();
    return n.__sid = t, n;
  }
  getSid() {
    return this.getLatest().__sid;
  }
  setAltnumber(t) {
    if (this.__altnumber === t)
      return this;
    const n = this.getWritable();
    return n.__altnumber = t, n;
  }
  getAltnumber() {
    return this.getLatest().__altnumber;
  }
  setPubnumber(t) {
    if (this.__pubnumber === t)
      return this;
    const n = this.getWritable();
    return n.__pubnumber = t, n;
  }
  getPubnumber() {
    return this.getLatest().__pubnumber;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement("span");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(bu, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Hi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(bu, `usfm_${this.getMarker()}`), n.setAttribute("data-number", this.getNumber())), { element: n };
  }
  decorate() {
    return P(yE, { nodeKey: this.getKey(), text: this.getRenderedText() });
  }
  /** The text this verse shows on screen: its whole `\v N` glyph, or only its number. */
  getRenderedText() {
    return this.getShowMarker() ? Fn(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Io + this.getNumber() + Io
    );
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
      version: Ek
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (n) {
      if (Yb(n))
        return !1;
      throw n;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function yE({ nodeKey: e, text: t }) {
  const [n] = MS(e);
  return P("span", { className: n ? mE : void 0, children: t });
}
function bE(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Ud(t) };
}
function Ud(e, t, n, r, i, s) {
  return yt(new Gt(e, t, n, r, i, s));
}
function kE(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Mk;
}
function Ar(e) {
  return e instanceof Gt;
}
function xE(e) {
  return e?.type === Gt.getType();
}
function Me(e) {
  return Ue(e) || Ar(e);
}
function Ak(e) {
  return id(e) || xE(e);
}
function TE(e) {
  return CE(e).find((t) => ye(t));
}
function CE(e) {
  return e.some(zi) ? e.flatMap((t) => zi(t) ? t.getChildren() : t) : e;
}
function Jc(e) {
  return E(e) ? zi(e) ? e.getChildren().flatMap(Jc) : e.getChildren() : [];
}
function vE(e, t) {
  return Jc(e).find((i) => Me(i) && Sd(t, i.getNumber()));
}
function SE(e, t) {
  return t === 0 ? TE(e) : e.map((n) => vE(n, t)).filter((n) => n)[0];
}
function ic(e) {
  return Jc(e).find((n) => Me(n));
}
function Pk(e, t) {
  if (!E(e) || t <= 0)
    return;
  const n = e.getChildren();
  for (let r = t - 1; r >= 0; r--) {
    const i = n[r];
    if (Me(i))
      return i;
  }
}
function _E(e) {
  const t = e.getParent();
  if (t && E(t)) {
    const r = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < r.length; i++) {
      const s = r[i];
      if (Me(s))
        return s;
    }
  }
  let n = t?.getNextSibling();
  for (; n && !ot(n); ) {
    const r = ic(n);
    if (r)
      return r;
    n = n.getNextSibling();
  }
}
function sc(e) {
  return Jc(e).findLast((t) => Me(t));
}
function ME(e) {
  if (!Ue(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const n = e.getTextContent().indexOf(t);
  return n < 0 ? 0 : n + t.length;
}
function EE(e, t, n) {
  if (!n)
    return !1;
  const r = t.getParent();
  if (n === r && E(n)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return n.getNextSibling() === t;
}
function AE(e, t) {
  const n = t.anchor.getNode();
  if (n !== e)
    return EE(t, e, n);
  if (C(e)) {
    const r = ME(e);
    return t.anchor.offset < r;
  }
  return !0;
}
function Bl(e) {
  const t = e.getNumber(), n = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: n,
    verse: t != null && n.toString() !== t ? t : void 0
  };
}
function PE(e) {
  const t = Nu(e);
  if (!(!t || ot(t)))
    return Me(t) ? t : sc(t) ?? zd(t);
}
function wE(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!M(t))
    return Bl(e);
  const n = Number.parseInt(e.getNumber() ?? "0", 10), r = n <= 1 ? 0 : n - 1;
  if (AE(e, t)) {
    const i = PE(e);
    return i ? Bl(i) : { verseNum: r };
  }
  return Bl(e);
}
function NE(e) {
  return i0(e) || Ar(e);
}
function Bd(e) {
  if (C(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(q) && e.setTextContent(`${t} `);
  }
}
function wk(e) {
  if (C(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Ku(e, t) {
  return e.getEditorState().read(() => !X(t));
}
function OE(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), n = Fd(t, e);
  let r;
  if (n) {
    const i = n.getParent();
    if (i && E(i) && E(t) && t === i && e.anchor.offset < n.getIndexWithinParent() && (r = n), !r && i && E(i)) {
      const s = i.getChildren(), o = n.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (Me(c)) {
          r = c;
          break;
        }
      }
    }
    if (!r && i) {
      let s = lg(i);
      for (; s && !ot(s); ) {
        const o = ic(s);
        if (o) {
          r = o;
          break;
        }
        s = lg(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = ic(s);
      if (o) {
        r = o;
        break;
      }
      if (s = s.getNextSibling(), s && ot(s))
        break;
    }
  }
  return r ? (r.selectNext(0, 0), !0) : !1;
}
function $E(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), n = Fd(t, e);
  let r;
  if (n) {
    const i = n.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (r = n), !r && i && E(i) && (r = Pk(i, n.getIndexWithinParent())), !r && i) {
      let o = ug(i);
      for (; o && !ot(o); ) {
        const a = sc(o);
        if (a) {
          r = a;
          break;
        }
        o = ug(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !ot(s); ) {
      const o = sc(s);
      if (o) {
        r = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return r ? (r.selectNext(0, 0), !0) : !1;
}
function lg(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const n = e.getTopLevelElement();
  return n && n !== e ? n.getNextSibling() : null;
}
function ug(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const n = e.getTopLevelElement();
  return n && n !== e ? n.getPreviousSibling() : null;
}
function Fd(e, t) {
  if (E(e) && M(t) && t.anchor.key === e.getKey()) {
    const r = e.getChildAtIndex(t.anchor.offset);
    if (r && Me(r))
      return r;
    const i = Pk(e, t.anchor.offset);
    if (i)
      return i;
    const s = ic(e);
    if (s)
      return s;
  }
  return zd(e);
}
function zd(e) {
  if (!e || ot(e))
    return;
  if (Me(e))
    return e;
  let t = Nu(e);
  for (; t; ) {
    if (ot(t))
      return;
    if (Me(t))
      return t;
    const n = sc(t);
    if (n)
      return n;
    t = Nu(t);
  }
}
const RE = ["style"], IE = ["style", "code"], oc = ["style", "cid"], LE = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], qE = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], DE = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], KE = ["style", "caller", "category", "contents"], UE = ["tag", "marker", "contents"], BE = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Vo = `
`;
function FE(e, t) {
  const n = X(e);
  if (!wn(n))
    return;
  const r = jd(n, "apply");
  if (r === void 0)
    return;
  const [i, ...s] = t;
  return [{ retain: r }, ...i ? [i] : [], { delete: 1 }, ...s];
}
function jd(e, t = "delta-doc") {
  if (!e)
    return;
  const n = Lc();
  let r = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of n) {
    const l = c.node;
    for (let f = i.length - 1; f >= 0; f--)
      if (qs(i[f], c)) {
        const d = i[f];
        if (i.splice(f, 1), r += 1, a && d.getKey() === a.getKey())
          return r - 1;
      }
    for (let f = s.length - 1; f >= 0; f--)
      qs(s[f].node, c) && s.splice(f, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (zr(l) || wn(l))
        return r;
      mt(l) && (a = l);
    }
    if (mt(l) && (i.includes(l) || i.push(l)), Nk(l, t)) {
      if (l.getKey() === o)
        return r;
      s.push({ node: l, position: r }), r += 1;
      continue;
    }
    r += Wd(l, t);
  }
  if (a)
    return r;
}
function fg(e, t, n = "delta-doc") {
  if (e.length < 2 || !VE(e[0]) || !jE(e[1]))
    return;
  const r = e[0].retain;
  return t.read(() => zE(r, n)?.getKey());
}
function zE(e, t = "delta-doc") {
  const n = Lc();
  let r = 0;
  const i = [], s = [];
  for (const o of n) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (qs(i[u], o)) {
        const f = i[u];
        if (i.splice(u, 1), r === e)
          return f;
        r += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      qs(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (mt(a) && (i.includes(a) || i.push(a)), Nk(a, t)) {
      if (r === e)
        return a;
      s.push({ node: a, position: r }), r += 1;
      continue;
    }
    const l = Wd(a, t);
    if (zr(a) && l > 0 && e >= r && e < r + l || wn(a) && r === e)
      return a;
    r += l;
  }
  for (const o of i) {
    if (r === e)
      return o;
    r += 1;
  }
}
function qs(e, t) {
  return e ? t ? !Is(t.node, e.getKey()) : !0 : !1;
}
function zr(e) {
  return C(e) && !wn(e);
}
function wn(e) {
  return ot(e) || Me(e) || Ke(e) || D(e) || Ze(e) || kn(e);
}
function Xr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function jE(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && BE.includes(t);
}
function VE(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Nk(e, t) {
  return D(e) || Ze(e) ? !0 : t === "apply" && E(e) && wn(e);
}
function Ok(e) {
  const t = e.getParent();
  return mn(e) && ye(t) && t.getFirstChild() === e;
}
function Uu(e) {
  const t = e.getParent();
  return t !== null && Qe(t, Be) !== null;
}
function WE(e) {
  const t = e.getParent();
  return U(t) && e.getTextContent() === Pt && t.getChildrenSize() === 1;
}
function Vd(e) {
  const t = In(e);
  if (!(!D(t) || !St(t)?.is(e)))
    return rd(e.getTextContent(), t.getCaller());
}
function HE(e) {
  return !Ib(e) && // A caller's typed bytes are respelled as the content they settle into, never sent raw.
  Vd(e) === void 0 && Wd(e, "delta-doc") === e.getTextContentSize();
}
function Wd(e, t) {
  if (wn(e))
    return 1;
  if (C(e)) {
    const n = e.getTextContent();
    if (t === "delta-doc" && // A bare cursor host (EmptyVerseCaretGuardPlugin) is a transient, collab-invisible node:
    // its insertion is never emitted, so it contributes nothing to DOC-DELTA positions or the
    // local doc would drift one position ahead of every peer while a host rests. In `"apply"`
    // coordinates it MUST count, per the rule in the doc comment above: none of
    // `$applyUpdate`'s traversals skip a placeholder (each classifies with `$isOTTextNode`
    // and adds raw `getTextContentSize()`), so excluding it here left a replace-embed retain
    // one short whenever a host rested before the target — a footnote-popover save then
    // deleted the unit BEFORE the note instead of the note itself.
    (la(e) || Ok(e) || de(e, ke) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    de(e, ke) === "attribute" || Uu(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, and the empty-char placeholder. The
    // editable-mode note caller counts only its content bytes, below.
    n.startsWith(Yf) || WE(e)))
      return 0;
    const r = t === "delta-doc" ? Vd(e) : void 0;
    return r !== void 0 ? r.length : e.getTextContentSize();
  }
  return 0;
}
function Bu(e, t) {
  const n = { insert: e.__text }, r = de(e, si);
  if (r && (n.attributes = { segment: r }), t && t.length > 0) {
    const i = $k(t);
    i && (n.attributes = {
      ...n.attributes,
      char: i
    });
  }
  return n;
}
function dg(e) {
  const t = new Ts();
  return e.isEmpty() || e.read(() => {
    const n = Ee();
    if (!n || n.isEmpty())
      return;
    const r = n.getChildren();
    if (r.length === 1 && _t(r[0]) && (!r[0].getChildren() || r[0].getChildrenSize() === 0))
      return;
    const i = GE();
    for (const s of i)
      t.push(s);
  }), t;
}
function Yc(e, t) {
  const n = [], r = Yi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < r.length; c++) {
    const l = r[c].node;
    n.push(...pg(l, c, r, i, s, o, a));
  }
  for (const c of i)
    n.push(...pg(c, r.length, r, i, s, o, a));
  return n;
}
function GE() {
  return Yc();
}
function pg(e, t, n, r, i, s, o) {
  if (!e)
    return [];
  const a = [], c = n[t + 1];
  return JE(e, a, r), YE(e, a, i, s, o), XE(e, t, n, i, o, s, a), ot(e) && a.push(tA(e)), Me(e) && a.push(rA(e)), Ke(e) && a.push(iA(e)), kn(e) && a.push(sA(e)), ZE(e, a, s), QE(e, a, s), lA(c, s), a;
}
function JE(e, t, n) {
  if (!e.isInline()) {
    const r = n.pop();
    Ie(r) ? t.push(eA(r)) : ye(r) ? t.push(nA(r)) : _t(r) && t.push({ insert: Vo });
  }
  mt(e) && (n.includes(e) || n.push(e));
}
function YE(e, t, n, r, i) {
  if (!C(e) || Ue(e) || kn(e))
    return;
  const s = e.getParent();
  if (D(s) && s.getFirstChild() === e)
    return;
  const o = An(e) !== void 0;
  if (w(e) && (o || Ok(e) || Uu(e) || Ib(e)) || de(e, ke) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Zi(a))
    return;
  const c = Vd(e);
  if (c !== void 0) {
    if (!c)
      return;
    a = c;
  }
  const l = e.getPreviousSibling(), u = U(s) ? s : void 0;
  o && u && l === u.getFirstChild() && (a = a.slice(ud(e)));
  const f = a.startsWith(Yf) || de(e, ke) === "attribute" || Uu(e), d = !!u && a === Pt && u.getChildrenSize() === 1, p = Xc(e, r), h = p ? n.filter((y) => p.children.includes(y)) : n, g = Bu(e, h);
  if (g.insert = a, p) {
    if (!a || a === q || f)
      return;
    p.contentsOps?.push(g);
  } else
    d || f || t.push(g);
  const m = a !== "" && !d && !(f && u);
  if (n.length > 0 && m)
    for (const y of n)
      i.add(y);
}
function XE(e, t, n, r, i, s, o) {
  U(e) && !r.includes(e) && r.push(e);
  const a = n[t + 1];
  for (const c of r.toReversed())
    if (qs(c, a)) {
      if (r.pop(), !i.has(c)) {
        const l = aA(c), u = Xc(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function QE(e, t, n) {
  if (!D(e))
    return;
  const r = oA(e), i = Xc(e, n), s = {
    node: e,
    children: Yi(e).map((o) => o.node),
    contentsOps: r.insert.note?.contents?.ops
  };
  n.push(s), i?.contentsOps ? i.contentsOps.push(r) : t.push(r);
}
function ZE(e, t, n) {
  if (!Ze(e))
    return;
  const r = cA(e), i = Xc(e, n), s = {
    node: e,
    children: Yi(e).map((o) => o.node),
    contentsOps: r.insert.unknown?.contents?.ops
  };
  n.push(s), i?.contentsOps ? i.contentsOps.push(r) : t.push(r);
}
function mi(e, t) {
  const n = t.getUnknownAttributes();
  n && Object.assign(e, n);
}
function eA(e) {
  const t = { style: Fo, code: e.__code };
  return mi(t, e), { insert: Vo, attributes: { book: t } };
}
function tA(e) {
  const t = { style: Ya, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), mi(t, e), { insert: { chapter: t } };
}
function nA(e) {
  const t = { style: e.__marker };
  return mi(t, e), { insert: Vo, attributes: { para: t } };
}
function rA(e) {
  const t = { style: Ja, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), mi(t, e), { insert: { verse: t } };
}
function iA(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), mi(t, e), { insert: { milestone: t } };
}
function sA(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function oA(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), mi(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const n = { insert: { note: t } }, r = de(e, si);
  return r && (n.attributes = { segment: r }), n;
}
function aA(e) {
  const t = { insert: "" }, n = $k([e]);
  return n && (t.attributes = { char: n }), t;
}
function cA(e) {
  const t = { tag: e.getTag() }, n = e.getMarker();
  return n && (t.marker = n), mi(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Xc(e, t) {
  for (let n = t.length - 1; n >= 0; n--) {
    const r = t[n];
    if (r.children.includes(e))
      return r;
  }
}
function lA(e, t) {
  for (let n = t.length - 1; n >= 0; n--)
    qs(t[n].node, e) && t.splice(n, 1);
}
function $k(e) {
  if (e.length === 0)
    return;
  const t = e.map(uA);
  return t.length === 1 ? t[0] : t;
}
function uA(e) {
  const t = { style: e.__marker }, n = de(e, Ki);
  return n && (t.cid = n), mi(t, e), t;
}
function Hd(e) {
  let t = 0;
  for (const { node: n } of Lc())
    if (D(n)) {
      if (n.getKey() === e)
        return t;
      t += 1;
    }
}
function fA(e) {
  let t = 0;
  for (const { node: n } of Lc())
    if (D(n)) {
      if (t === e)
        return n;
      t += 1;
    }
}
const Rk = 1;
class _n extends na {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Lo, n = "", r, i) {
    super(i), this.__caller = t, this.__previewText = n, this.__onClick = r ?? (() => {
    });
  }
  static getType() {
    return hi;
  }
  static clone(t) {
    const { __caller: n, __previewText: r, __onClick: i, __key: s } = t;
    return new _n(n, r, i, s);
  }
  static importDOM() {
    return {
      span: (t) => pA(t) ? {
        conversion: dA,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Gd().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setCaller(t.caller).setPreviewText(t.previewText).setOnClick(t.onClick);
  }
  setCaller(t) {
    if (this.__caller === t)
      return this;
    const n = this.getWritable();
    return n.__caller = t, n;
  }
  getCaller() {
    return this.getLatest().__caller;
  }
  setPreviewText(t) {
    if (this.__previewText === t)
      return this;
    const n = this.getWritable();
    return n.__previewText = t, n;
  }
  getPreviewText() {
    return this.getLatest().__previewText;
  }
  setOnClick(t) {
    if (this.__onClick === t)
      return this;
    const n = this.getWritable();
    return n.__onClick = t, n;
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
    const { element: n } = super.exportDOM(t);
    return n && Hi(n) && (n.classList.add(this.getType()), n.setAttribute("data-caller", this.getCaller()), n.setAttribute("data-preview-text", this.getPreviewText())), { element: n };
  }
  decorate(t) {
    const n = this.getParent();
    if (!n)
      return null;
    const r = n.getKey(), i = n.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, r, i, () => hA(t, r), (l) => gA(t, r, s, l), () => mA(t, r), () => yA(t, r)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return P("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.getRenderedText() });
  }
  /** The text this caller shows on screen; empty when CSS generates the caller instead. */
  getRenderedText() {
    const t = this.getLatest(), n = t.getParent(), r = D(n) && n.getIsCollapsed();
    return t.__caller === Lo && r ? "" : t.__caller === qy && r ? "*" : t.__caller;
  }
  exportJSON() {
    return {
      type: this.getType(),
      caller: this.getCaller(),
      previewText: this.getPreviewText(),
      onClick: this.getOnClick(),
      version: Rk
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function dA(e) {
  const t = e.getAttribute("data-caller") ?? "", n = e.getAttribute("data-preview-text") ?? "";
  return { node: Gd(t, n) };
}
function Gd(e, t, n) {
  return yt(new _n(e, t, n));
}
function pA(e) {
  return e ? e.classList.contains(_n.getType()) : !1;
}
function Lt(e) {
  return e instanceof _n;
}
function hA(e, t) {
  return e.getEditorState().read(() => {
    const n = X(t);
    if (!D(n))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return n.getCaller();
  });
}
function gA(e, t, n, r) {
  e.update(() => {
    const i = X(t);
    if (!D(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(r);
    const s = X(n);
    if (!Lt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${n}`);
    s.setCaller(r);
  });
}
function mA(e, t) {
  return e.getEditorState().read(() => {
    const n = X(t);
    if (!D(n))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return Yc(n);
  });
}
function yA(e, t) {
  return e.getEditorState().read(() => Hd(t));
}
const bA = [
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
], kA = ["†"], Jd = "formatted", Ik = "unformatted", Lk = "paragraph-structure", Yd = "standard", qk = "block-verse", xA = {
  [Jd]: "Formatted",
  [Ik]: "Unformatted",
  [Lk]: "Paragraph Structure",
  [Yd]: "Standard",
  [qk]: "Block Verse"
};
function rs(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Xd, Qd;
function TA(e) {
  const t = Zd(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Xd = e, Qd = t;
}
TA(Jd);
const pD = () => Xd, Qc = () => Qd;
function Zd(e) {
  let t;
  switch (e ?? Xd) {
    case Jd:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Ik:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Lk:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Yd:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case qk:
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
function hD(e) {
  if (!e)
    return;
  const t = hg(e);
  return Object.keys(xA).find((n) => yr(hg(Zd(n)), t));
}
const CA = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function hg(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, n]) => n !== void 0));
  return { ...CA, ...t };
}
function Bt(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: n, isFormattedFont: r, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && n && r && !i && !s;
}
function vA(e) {
  if (e)
    return Wo(e) ? Gt : e.markerMode === "editable" ? Kt : Gt;
}
function Wo(e) {
  return e?.verseLayout === "block";
}
function SA(e) {
  const t = [], n = e ?? Qd;
  return n && (t.push(`${ZS}${n.markerMode}`), n.hasSpacing && t.push(XS), n.isFormattedFont && t.push(QS)), t;
}
const _A = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function ac(e) {
  return _A.exec(e)?.[1] ?? e;
}
function So(e, t) {
  const n = e.jsonPath.slice(ac(e.jsonPath).length);
  return { ...e, jsonPath: `${Nt(t)}${n}` };
}
function Dk(e) {
  const t = [];
  let n = 0;
  for (const c of Ee().getChildren())
    if (!Pn(c))
      if (zi(c)) {
        const l = n;
        c.getChildren().filter((u) => !Pn(u)).forEach((u, f) => t.push({ node: u, blockPrefix: [l, f], blockBase: 0 })), n += 1;
      } else _t(c) ? (t.push({ node: c, blockPrefix: [], blockBase: n }), n += en(c, e).length) : (t.push({ node: c, blockPrefix: [n], blockBase: 0 }), n += 1);
  const r = [];
  let i = 0, s = 0, o = 0, a;
  for (const c of t) {
    const l = E(c.node) ? en(c.node, e).length : 0, u = de(c.node, Sk), f = _t(c.node), d = u === void 0 || u !== a;
    d && (r.length > 0 && (r[r.length - 1].isSourceEnd = !0), s = i, o = 0, f || (i += 1)), r.push({
      ...c,
      count: l,
      usjPrefix: f ? [] : [s],
      usjBase: f ? s + o : o,
      isSourceStart: d,
      isSourceEnd: !1
    }), f && (i += l), o += l, a = u;
  }
  return r.length > 0 && (r[r.length - 1].isSourceEnd = !0), r;
}
function Kk(e, t) {
  return e.length >= t.length && t.every((n, r) => e[r] === n);
}
function Uk(e, t, n, r = !0) {
  const i = e.jsonPath.slice(ac(e.jsonPath).length);
  let s = $n(ac(e.jsonPath));
  s.length === 1 && t.some((o) => o.blockPrefix.length === 2 && o.blockPrefix[0] === s[0]) && (s = [s[0], 0]);
  for (const o of t) {
    if (!Kk(s, o.blockPrefix))
      continue;
    const a = s.slice(o.blockPrefix.length);
    if (a.length === 0) {
      if (o.blockPrefix.length === 0)
        continue;
      return r && i === "" && E(o.node) && (!o.isSourceStart || _t(o.node)) ? Uk(n(o.node), t, n, !1) : So(e, o.usjPrefix);
    }
    if (!(a[0] < o.blockBase || a[0] >= o.blockBase + o.count))
      return So(e, [
        ...o.usjPrefix,
        a[0] - o.blockBase + o.usjBase,
        ...a.slice(1)
      ]);
  }
}
function MA(e, t, n) {
  for (const r of t) {
    if (r.usjPrefix.length === 0) {
      if (e < r.usjBase || e >= r.usjBase + r.count)
        continue;
      const o = e - r.usjBase + r.blockBase;
      return r.blockPrefix.length === 0 ? { jsonPath: "$", offset: o } : { jsonPath: Nt(r.blockPrefix), offset: o };
    }
    if (!r.isSourceStart || r.usjPrefix[0] !== e)
      continue;
    const [i, s] = r.blockPrefix;
    return s === void 0 ? { jsonPath: "$", offset: i } : { jsonPath: Nt([i]), offset: s };
  }
  return { jsonPath: "$", offset: en(Ee(), n).length };
}
function gg(e, t, n) {
  const r = $n(ac(e.jsonPath));
  if (r.length === 0)
    return Ir(e) ? MA(e.offset, t, n) : e;
  for (const i of t) {
    if (!Kk(r, i.usjPrefix))
      continue;
    const s = r.slice(i.usjPrefix.length);
    if (s.length === 0) {
      if (i.usjPrefix.length === 0)
        continue;
      if (Ir(e)) {
        const o = e.offset - i.usjBase;
        if (o < 0 || !i.isSourceEnd && o >= i.count)
          continue;
        return {
          ...So(e, i.blockPrefix),
          offset: Math.min(o, i.count) + i.blockBase
        };
      }
      if (!i.isSourceStart)
        continue;
      return So(e, i.blockPrefix);
    }
    if (!(s[0] < i.usjBase || s[0] >= i.usjBase + i.count))
      return So(e, [
        ...i.blockPrefix,
        s[0] - i.usjBase + i.blockBase,
        ...s.slice(1)
      ]);
  }
}
function Zc(e, t, n) {
  let { start: r } = e, i = e.end ?? r;
  if (ex()) {
    const g = Bt(t), m = Dk(g), y = gg(r, m, g), k = i === r ? y : gg(i, m, g);
    if (!y || !k)
      return;
    r = y, i = k;
  }
  const s = !!n?.forAnnotation, o = bg(r, t, s), a = i === r ? o : bg(i, t, s), [c, l] = o.point, [u, f] = a.point;
  if (!c || !u || l === void 0 || f === void 0)
    return;
  let d = kg(c, l), p = kg(u, f);
  if (i !== r && ws(i) && i.closingMarkerOffset === 0 && (p = zA(p[0], p[1], Bt(t))), n?.forAnnotation && i !== r) {
    const g = { edge: d, inside: o.insideDecorator }, m = { edge: p, inside: a.insideDecorator };
    [d, p] = EA(g, m), n.decoratorHolds && AA(g, m, n.decoratorHolds);
  }
  const h = Dr();
  return h.anchor = Qt(d[0].getKey(), d[1], Wu(d[0])), h.focus = Qt(p[0].getKey(), p[1], Wu(p[0])), h;
}
function EA(e, t) {
  const { inside: n } = e, { inside: r } = t;
  if (!n && !r)
    return [e.edge, t.edge];
  const i = !!n && !!r && n.decorator.is(r.decorator), s = n && r && i ? r.before < n.before : Bk(t, e), [o, a] = s ? [t, e] : [e, t], c = o.inside ? Fu(o.inside, o.inside.before >= o.inside.total, o.edge) : o.edge;
  if (i && n.before === r.before)
    return [c, c];
  const l = a.inside ? Fu(a.inside, a.inside.before > 0, a.edge) : a.edge;
  return s ? [l, c] : [c, l];
}
function AA(e, t, n) {
  const { inside: r } = e, { inside: i } = t;
  if (!r && !i)
    return;
  const s = !!r && !!i && r.decorator.is(i.decorator), o = r && i && s ? i.before < r.before : Bk(t, e), [a, c] = o ? [i, r] : [r, i], l = (u, f, d) => {
    d > f && n.set(u.decorator.getKey(), { start: f, end: d });
  };
  a && l(a, a.before, s && c ? c.before : a.total), c && !s && l(c, 0, c.before);
}
function Fu(e, t, n) {
  const [r, i] = Qr(e.decorator, t);
  return r && i !== void 0 ? [r, i] : n;
}
function Bk(e, t) {
  const n = ({ edge: s, inside: o }) => {
    const [a, c] = o ? Fu(o, !1, s) : s;
    return Qt(a.getKey(), c, Wu(a));
  }, r = n(e), i = n(t);
  return r.isBefore(i) ? !0 : i.isBefore(r) ? !1 : !e.inside && !!t.inside;
}
function el(e) {
  const t = N();
  if (!t || !M(t))
    return;
  const n = ex() ? Dk(Bt(e)) : void 0, r = (u, f) => {
    const d = Ot(u, f, e);
    return n ? Uk(d, n, (p) => Ot(p, 0, e)) : d;
  }, i = t.isBackward() ? t.focus.getNode() : t.anchor.getNode(), s = t.isBackward() ? t.focus.offset : t.anchor.offset, o = r(i, s);
  if (!o)
    return;
  if (t.isCollapsed())
    return { start: o };
  const a = t.isBackward() ? t.anchor.getNode() : t.focus.getNode(), c = t.isBackward() ? t.anchor.offset : t.focus.offset, l = r(a, c);
  if (l)
    return { start: o, end: l };
}
const ti = {
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
}, PA = new Map(Object.values(ti).flatMap((e) => e ? [[e.markerName, e.keyName]] : [])), mg = {
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
}, wA = (
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  Object.keys(mg).filter((e) => mg[e])
), NA = /([^\s="|]+)="([^"]*)"/g, OA = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function Fk(e, t) {
  return `${e}['${t}']`;
}
function Ri(e) {
  return [
    { start: 0, base: 0, bytes: { kind: "marker" } },
    { start: e, base: 0, bytes: { kind: "property", property: "marker" } }
  ];
}
function _o(e) {
  return [
    {
      start: 0,
      base: 0,
      bytes: e === void 0 ? { kind: "closingMarker" } : { kind: "closingAttributeMarker", keyName: e }
    }
  ];
}
function ep(e) {
  const t = Tr(e);
  if (!t)
    return;
  const n = Br(t.kind).scanPieces(t.owner);
  if (n.opener?.is(e))
    return { ...t, role: "opener" };
  if (n.value?.is(e))
    return { ...t, role: "value" };
  if (n.closer?.is(e))
    return { ...t, role: "closer" };
}
function tl(e, t, n, r = (i) => i) {
  const i = [];
  for (const s of e.slice(t).matchAll(NA)) {
    const o = s[1], a = r(o);
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
  return i.length > 0 ? i : n === void 0 ? [] : [
    { start: t, base: 0, bytes: { kind: "property", property: n } }
  ];
}
function $A(e, t) {
  const n = OA.exec(e);
  if (!n)
    return [];
  const r = n[1], i = n[0].length - r.length - 2, s = PA.get(r) ?? r, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: n[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${r}*`);
  return a > n[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function tp(e) {
  if (gn(e)) {
    const t = Zk(e), n = e.getTextContent();
    if (Ke(t) && (n === "\\*" || n.startsWith(Ve(t.getMarker()))))
      return t;
  }
  return In(e) ?? e;
}
function RA(e) {
  const t = e.getTextContentSize(), n = ep(e);
  if (n && n.role !== "value") {
    const i = ti[n.kind];
    if (i) {
      const { keyName: s } = i;
      return {
        owner: n.owner,
        length: t,
        spans: n.role === "closer" ? _o(s) : [
          { start: 0, base: 0, bytes: { kind: "attributeMarker", keyName: s } },
          { start: 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }
        ]
      };
    }
    if (n.kind === "milestone")
      return {
        owner: n.owner,
        length: t,
        spans: n.role === "closer" ? _o() : Ri(1)
      };
  }
  const r = e.getMarkerSyntax();
  return {
    owner: tp(e),
    length: t,
    spans: r === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      Ri(e.getNested() ? 2 : 1)
    ) : _o()
  };
}
function IA(e) {
  const t = e.getTextContent(), n = t.length, r = ep(e);
  if (r?.kind === "optbreak")
    return {
      owner: r.owner,
      length: n,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = tp(e);
  if (Ie(i)) {
    const s = Ve(i.getMarker()).length;
    if (t.startsWith(Ve(i.getMarker())))
      return {
        owner: i,
        length: n,
        spans: [
          ...Ri(1),
          { start: s + 1, base: 0, bytes: { kind: "property", property: "code" } }
        ]
      };
  }
  if (Ze(i)) {
    const s = Fc(i.getTag(), i.getMarker(), i.getUnknownAttributes());
    if (s.closing !== "" && t === s.closing)
      return { owner: i, length: n, spans: _o() };
    if (s.opening !== "" && t === s.opening)
      return { owner: i, length: n, spans: Ri(1) };
  }
  return {
    owner: i,
    length: n,
    spans: t.endsWith("*") ? _o() : Ri(t.startsWith("\\+") ? 2 : 1)
  };
}
function LA(e) {
  const t = ep(e);
  if (t?.role !== "value")
    return;
  const { owner: n, kind: r } = t, i = e.getTextContent(), s = i.length, o = ti[r];
  if (o) {
    const { markerName: a, keyName: c } = o;
    return {
      owner: n,
      length: s,
      spans: [
        // The separator before the value is the space after the attribute marker, which counts
        // into that marker name's offset space.
        { start: 0, base: a.length, bytes: { kind: "attributeKey", keyName: c } },
        { start: 1, base: 0, bytes: { kind: "property", property: c } }
      ]
    };
  }
  if (r === "char")
    return {
      owner: n,
      length: s,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        ...tl(i, 1, U(n) ? Ws(n.getMarker()) : void 0)
      ]
    };
  if (r === "milestone" && Ke(n))
    return { owner: n, length: s, spans: zk(n.getMarker(), i) };
}
function zk(e, t) {
  return [
    { start: 0, base: e.length, bytes: { kind: "property", property: "marker" } },
    ...tl(t, 2, oa(e))
  ];
}
function qA(e) {
  const t = e.getTextContent(), n = t.length, r = e.getParent();
  if (!Ze(r)) {
    const s = Zk(e);
    return Ke(s) ? { owner: s, length: n, spans: zk(s.getMarker(), t) } : void 0;
  }
  const i = $A(t, (r.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: r, length: n, spans: i };
  if (t.startsWith("|"))
    return {
      owner: r,
      length: n,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        // The bytes spell an attribute the way USFM names it, which is not always USJ's name for it.
        ...tl(t, 1, void 0, (s) => _M(r.getTag(), s))
      ]
    };
}
function yg(e, t) {
  const n = Ve(e);
  if (t.startsWith(n))
    return [
      ...Ri(1),
      { start: n.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function tn(e) {
  if (w(e))
    return RA(e);
  if (gn(e))
    return IA(e);
  if (Rt(e) && e.getTextType() === "attribute")
    return qA(e);
  if (e.getType() === hi) {
    const r = e.getParent();
    return D(r) ? {
      owner: r,
      length: r.getCaller().length,
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if (Ue(e)) {
    const r = yg(e.getMarker(), e.getTextContent());
    return r ? { owner: e, length: e.getTextContentSize(), spans: r } : void 0;
  }
  if (!C(e))
    return;
  if (kn(e))
    return { owner: e, length: e.getTextContentSize(), spans: Ri(1) };
  if (de(e, ke) === "attribute")
    return LA(e);
  const t = e.getParent();
  if ($e(t) && gi(t)?.is(e)) {
    const r = yg(t.getMarker(), e.getTextContent());
    return r ? { owner: t, length: e.getTextContentSize(), spans: r } : void 0;
  }
  const n = In(e);
  if (D(n) && St(n)?.is(e))
    return {
      owner: n,
      length: e.getTextContentSize(),
      spans: [
        // The caller's leading space is the space after the note's own marker, which counts into
        // that marker name's offset space.
        {
          start: 0,
          base: n.getMarker().length,
          bytes: { kind: "property", property: "marker" }
        },
        { start: 1, base: 0, bytes: { kind: "property", property: "caller" } }
      ]
    };
}
function yi(e) {
  return gn(e) || Rt(e) && e.getTextType() === "attribute" || e.getType() === hi;
}
function nl(e) {
  const t = [];
  if ((Ue(e) || kn(e)) && t.push(e), E(e)) {
    const n = $e(e) ? gi(e) : void 0, r = D(e) ? St(e) : void 0;
    for (const i of e.getChildren())
      r && (r.is(i) || i.isParentOf(r)) ? t.push(r) : (w(i) || gn(i) || Rt(i) && i.getTextType() === "attribute" || i.getType() === hi || n?.is(i)) && t.push(i);
  }
  if (Ke(e))
    for (let n = e.getNextSibling(); n && yi(n); n = n.getNextSibling())
      (!gn(n) || tp(n).is(e)) && t.push(n);
  for (const n of wA) {
    const r = Br(n);
    if (!r.ownerPredicate(e))
      continue;
    const { opener: i, value: s, closer: o } = r.scanPieces(e);
    i && t.push(i), s && t.push(s), o && t.push(o);
  }
  return t;
}
function ji(e, t) {
  return e.kind !== t.kind ? !1 : e.kind === "property" && t.kind === "property" ? e.property === t.property : (e.kind === "attributeKey" || e.kind === "attributeMarker" || e.kind === "closingAttributeMarker") && "keyName" in t ? e.keyName === t.keyName : !0;
}
function zu(e, t, n) {
  const r = tn(e);
  if (!r || r.spans.length === 0)
    return;
  const i = Math.max(0, Math.min(t, r.length));
  let s = r.spans[0];
  for (const c of r.spans) {
    if (c.start > i)
      break;
    s = c;
  }
  const o = s.base + (i - s.start), a = Nt(jn(r.owner));
  switch (s.bytes.kind) {
    case "marker":
      return { jsonPath: a };
    case "closingMarker":
      return { jsonPath: a, closingMarkerOffset: o };
    case "property":
      return {
        jsonPath: Fk(a, s.bytes.property),
        propertyOffset: o
      };
    case "attributeKey":
      return { jsonPath: a, keyName: s.bytes.keyName, keyOffset: o };
    case "attributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName, keyClosingMarkerOffset: o };
    case "precedingText":
      return DA(e, n);
  }
}
function ju(e, t) {
  return C(e) && !tn(e) && !Ms(e, 0, t);
}
function DA(e, t) {
  let n = e;
  for (let o = n.getParent(); !n.getPreviousSibling() && ue(o); )
    n = o, o = n.getParent();
  let r = n.getPreviousSibling();
  for (; r && ju(r, t); )
    r = r.getPreviousSibling();
  if (!r)
    return;
  const i = E(r) ? r.getLastDescendant() : r;
  if (i && (C(i) || yi(i)))
    return ju(i, t) ? void 0 : Qn(i, i.getTextContentSize(), t);
  const s = r.getParent();
  if (s)
    return Qn(s, r.getIndexWithinParent() + 1, t);
}
function us(e, t, n) {
  for (const r of nl(e)) {
    const i = tn(r);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!ji(o.bytes, t))
          continue;
        const a = np(i, s);
        if (!(n < o.base || n > a))
          return [r, o.start + (n - o.base)];
      }
  }
}
function np(e, t) {
  const n = e.spans[t], r = e.spans[t + 1];
  return r ? n.base + (r.start - n.start) - 1 : n.base + (e.length - n.start);
}
function Nn(e, t) {
  const n = Bt(t);
  if (Ir(e)) {
    const r = $n(e.jsonPath);
    let i = Ee();
    for (let s = 0; s < r.length; s++) {
      if (!i || !E(i))
        return [void 0, void 0];
      const o = en(i, n)[r[s]];
      if (!o)
        return [void 0, void 0];
      if (o.type === "text")
        return s !== r.length - 1 ? [void 0, void 0] : k0(o, e.offset) ?? xg(e, n) ?? [void 0, void 0];
      i = o.node;
    }
    return i && E(i) ? Nn(rp(i, r, e.offset, n), t) : [void 0, void 0];
  }
  if (No(e) || ws(e) || Oo(e)) {
    const r = xg(e, n);
    if (r)
      return r;
  }
  if ($o(e) || Nc(e)) {
    const r = Ai(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const { keyName: i } = e, s = $o(e) ? us(r, { kind: "attributeKey", keyName: i }, e.keyOffset) : us(r, { kind: "attributeMarker", keyName: i }, 0);
    if (s)
      return s;
    const o = zl(r, i);
    if (o)
      return o;
    const a = XA(r, i);
    return a || (Ke(r) ? Qr(r, !1) : Fl(r));
  }
  if (Oo(e)) {
    const r = Ai(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const i = us(r, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return i || (zl(r, e.keyName) ?? Fl(r));
  }
  if (Df(e)) {
    const r = Ai(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const i = us(r, { kind: "marker" }, 0);
    if (i)
      return i;
    const s = E(r) ? r.getFirstChild() : null;
    return s && C(s) ? [s, 0] : Qr(r, !1);
  }
  if (ws(e)) {
    const r = Ai(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const i = us(r, { kind: "closingMarker" }, e.closingMarkerOffset);
    if (i)
      return i;
    const s = ip(r);
    if (s !== void 0 && e.closingMarkerOffset >= s)
      return Qr(r, !0);
    if (!E(r))
      return Qr(r, !1);
    const o = r.getLastChild();
    return o && C(o) ? [o, o.getTextContent().length] : [r, r.getChildrenSize()];
  }
  if (No(e)) {
    const r = jk(e.jsonPath), i = Ai(e.jsonPath, n);
    if (!i || r === void 0)
      return [void 0, void 0];
    const s = { kind: "property", property: r }, o = us(i, s, e.propertyOffset);
    if (o)
      return o;
    const a = QA(i, s, e.propertyOffset);
    if (a)
      return a;
    const c = zl(i, r);
    if (c)
      return c;
    if (E(i)) {
      if (!KA.has(r))
        return Fl(i);
      const u = i.getFirstChild();
      return u && C(u) ? [u, 0] : [i, 0];
    }
    const l = ZA(i, r);
    return Qr(i, l !== void 0 && e.propertyOffset >= l.length);
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${cS(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function jk(e) {
  const t = /\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/.exec(e);
  return t?.[1] ?? t?.[2] ?? t?.[3];
}
const KA = /* @__PURE__ */ new Set([
  "marker",
  "code",
  "caller",
  "category"
]);
function Vu(e, t) {
  const n = e.length - e.trimStart().length, r = Math.max(n, e.trimEnd().length);
  return { before: Math.min(Math.max(t, n), r) - n, total: r - n };
}
function bg(e, t, n) {
  const r = Nn(e, t), [i, s] = r;
  if (n && !Ir(e)) {
    const c = Ai(e.jsonPath, Bt(t)), l = c && UA(c, e);
    if (l)
      return l.before > 0 ? { point: r, insideDecorator: l } : { point: r };
  }
  if (i && s !== void 0 && s > 0 && yi(i)) {
    const c = Vc(i);
    return {
      point: r,
      insideDecorator: { decorator: i, ...Vu(c, s) }
    };
  }
  if (Ir(e))
    return { point: r };
  const o = Ai(e.jsonPath, Bt(t));
  if (!Ar(o) && !Wr(o))
    return { point: r };
  const a = BA(o, e);
  return a && a.before > 0 ? { point: r, insideDecorator: a } : { point: r };
}
function Vk(e) {
  const t = e.getFirstChild();
  if (!t || !gn(t))
    return;
  const n = tn(t);
  if (n?.spans[0]?.bytes.kind !== "marker" || !n.owner.is(e) || !e.getChildren().every((c) => yi(c) || C(c) && Pn(c)))
    return;
  const i = Ws(e.getMarker()), s = Xn(e.getUnknownAttributes() ?? {}, i);
  if (!s)
    return;
  const o = tl(s, 1, i);
  if (!nl(e).some((c) => tn(c)?.spans.some((l) => o.some((u) => ji(l.bytes, u.bytes)))))
    return {
      decorator: t,
      pieces: [
        { text: t.getTextContent(), spans: n.spans },
        {
          text: s,
          spans: [{ start: 0, base: 0, bytes: { kind: "precedingText" } }, ...o]
        }
      ]
    };
}
function UA(e, t) {
  const n = U(e) ? Vk(e) : void 0, r = n && Wk(t);
  if (!n || !r)
    return;
  let i = 0, s;
  for (const { text: o, spans: a } of n.pieces) {
    const c = { spans: a, length: o.length };
    if (s === void 0) {
      const l = a.findIndex((u, f) => ji(u.bytes, r.bytes) && r.offset >= u.base && r.offset <= np(c, f));
      if (l >= 0) {
        const u = a[l].start + (r.offset - a[l].base);
        s = i + Vu(o, u).before;
      }
    }
    i += Vu(o, 0).total;
  }
  return s === void 0 ? void 0 : { decorator: n.decorator, before: s, total: i };
}
function BA(e, t) {
  const n = Wk(t);
  if (!n)
    return;
  const r = Hk(e), i = r.findIndex((a) => ji(a.bytes, n.bytes));
  if (i < 0)
    return;
  const s = r.reduce((a, c) => a + c.length, 0), o = r.slice(0, i).reduce((a, c) => a + c.length, 0) + Math.min(Math.max(n.offset, 0), r[i].length);
  return { decorator: e, before: o, total: s };
}
function Wk(e) {
  if ($o(e))
    return {
      bytes: { kind: "attributeKey", keyName: e.keyName },
      offset: e.keyOffset
    };
  if (Nc(e))
    return { bytes: { kind: "attributeMarker", keyName: e.keyName }, offset: 0 };
  if (Oo(e))
    return {
      bytes: { kind: "closingAttributeMarker", keyName: e.keyName },
      offset: e.keyClosingMarkerOffset
    };
  if (Df(e))
    return { bytes: { kind: "marker" }, offset: 0 };
  if (No(e)) {
    const t = jk(e.jsonPath);
    return t === void 0 ? void 0 : { bytes: { kind: "property", property: t }, offset: e.propertyOffset };
  }
}
function Hk(e) {
  const t = (s, o) => ({ bytes: s, text: o, length: o.length }), n = [
    t({ kind: "marker" }, "\\"),
    // The space after the marker name is inside the glyph Standard view spells, so it counts.
    t({ kind: "property", property: "marker" }, `${e.getMarker()} `),
    t({ kind: "property", property: "number" }, e.getNumber())
  ], r = Wr(e), i = r ? [ti.ca, ti.cp] : [ti.va, ti.vp];
  for (const s of i) {
    if (!s)
      continue;
    const { markerName: o, keyName: a } = s, c = a === "altnumber" ? e.getAltnumber() : e.getPubnumber();
    c !== void 0 && (n.push(t({ kind: "attributeMarker", keyName: a }, "\\"), t({ kind: "attributeKey", keyName: a }, o), t({ kind: "property", property: a }, c)), r && a === "pubnumber" || n.push(t({ kind: "closingAttributeMarker", keyName: a }, st(o))));
  }
  return n;
}
function FA(e) {
  if (Ar(e) || Wr(e))
    return Hk(e).map(({ text: r }) => r).join("");
  const t = e.getParent(), n = U(t) ? Vk(t) : void 0;
  return n?.decorator.is(e) ? n.pieces.map(({ text: r }) => r.trim()).join("") : Vc(e).trim();
}
function kg(e, t) {
  if (!yi(e))
    return [e, t];
  const n = e.getParent();
  if (!n || !E(n))
    return [e, t];
  const r = e.getIndexWithinParent();
  if (r < 0)
    return [e, t];
  const i = e.getTextContentSize(), s = t >= i && t > 0 || t === i - 1 && Gk.test(e.getTextContent());
  return [n, s ? r + 1 : r];
}
const Gk = /[ \u00A0]$/;
function zA(e, t, n) {
  let r;
  if (E(e))
    r = t > 0 ? e.getChildAtIndex(t - 1) : null;
  else if (t === 0)
    r = e.getPreviousSibling();
  else
    return [e, t];
  let i = !1;
  for (; C(r) && !tn(r) && !Ms(r, 0, n); )
    r = r.getPreviousSibling(), i = !0;
  if (!i)
    return [e, t];
  const s = r?.getParent();
  if (r && s && yi(r))
    return [s, r.getIndexWithinParent() + 1];
  const o = E(r) ? r.getLastDescendant() : r;
  return C(o) ? [o, o.getTextContentSize()] : [e, t];
}
function Wu(e) {
  return E(e) ? "element" : "text";
}
function Ai(e, t) {
  const n = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = n ? n[1] : e, i = $n(r);
  let s = Ee();
  for (const o of i) {
    if (!s || !E(s))
      return;
    const a = en(s, t)[o];
    s = a?.type === "element" ? a.node : void 0;
  }
  return s;
}
function Ot(e, t, n) {
  return Qn(e, t, Bt(n));
}
function Qn(e, t, n) {
  const r = C(e) ? _d(e) : void 0;
  if (C(e) && r && t > r.start) {
    const s = Ms(e, t, n);
    if (s)
      return {
        jsonPath: Nt([...jn(s.parent), s.index]),
        offset: s.offset
      };
  }
  if (C(e) && t > 0 && t === e.getTextContentSize() && jA(e)) {
    const s = VA(e, n);
    if (s)
      return s;
  }
  const i = zu(e, t, n);
  if (i)
    return i;
  if (ue(e)) {
    const s = e.getChildrenSize(), o = e.getChildAtIndex(Math.min(t, s - 1));
    if (C(o)) {
      const c = t >= s ? o.getTextContentSize() : 0;
      return Qn(o, c, n);
    }
    if (o && t > 0 && t < s) {
      const c = Yk(e, t, n);
      if (c)
        return c;
    }
    const a = e.getParent();
    if (a) {
      const c = e.getIndexWithinParent(), l = t > 0 ? c + 1 : c;
      return Qn(a, l, n);
    }
  }
  if (E(e)) {
    const s = e.getChildAtIndex(t), o = s && Jk(s);
    if (o) {
      const l = zu(o, 0, n);
      if (l)
        return l;
    }
    if (s && yi(s))
      return {
        jsonPath: Nt(jn(e))
      };
    const a = t > 0 ? e.getChildAtIndex(t - 1) : null;
    if (!s && a && Qk(a, e))
      return La(e, !0, n);
    if (ot(e) || Pn(e))
      return La(e, t > 0, n);
    const c = _t(e) && Mn(e.getParent()) ? e.getParentOrThrow() : e;
    return Xk(c, Cs(e, t, n), n);
  }
  if (C(e)) {
    if (t < Gs(e)) {
      const c = e.getPreviousSibling();
      if (w(c))
        return Qn(c, c.getTextContentSize(), n);
    }
    const s = Ms(e, t, n);
    if (s)
      return {
        jsonPath: Nt([
          ...jn(s.parent),
          s.index
        ]),
        offset: s.offset
      };
    const o = t > 0;
    let a = o ? e.getNextSibling() : e.getPreviousSibling();
    for (; ue(a); )
      a = o ? a.getFirstChild() : a.getLastChild();
    if (C(a) && (tn(a) || Ms(a, 0, n)))
      return Qn(a, o ? 0 : a.getTextContentSize(), n);
  }
  return La(e, t > 0, n);
}
function jA(e) {
  if (!Gk.test(e.getTextContent()))
    return !1;
  if (Ue(e))
    return !0;
  const t = In(e);
  return D(t) && !!St(t)?.is(e);
}
function VA(e, t) {
  let n = e;
  for (let s = n.getParent(); !n.getNextSibling() && ue(s); s = n.getParent())
    n = s;
  const r = n.getNextSibling();
  if (!r) {
    const s = n.getParent();
    return !s || WA(n) ? void 0 : Qn(s, s.getChildrenSize(), t);
  }
  const i = E(r) ? r.getFirstDescendant() ?? r : r;
  if (!(ju(i, t) || tn(i)?.spans[0]?.bytes.kind === "precedingText"))
    return Qn(i, 0, t);
}
function WA(e) {
  for (let t = e; t; t = t.getParent())
    if (t.getNextSibling())
      return !1;
  return !0;
}
function Jk(e) {
  if (tn(e))
    return e;
  if (!Be(e))
    return;
  const t = e.getFirstDescendant();
  return t && tn(t) ? t : void 0;
}
function Yk(e, t, n) {
  for (let r = t; r < e.getChildrenSize(); r++) {
    const i = e.getChildAtIndex(r);
    if (!i)
      return;
    const s = Jk(i);
    if (s)
      return zu(s, 0, n);
    if (C(i) && Ms(i, 0, n))
      return Qn(i, 0, n);
    if (C(i) || Pn(i))
      continue;
    const o = x0(i, n);
    if (o)
      return Xk(o.parent, o.point, n);
  }
}
function Xk(e, t, n) {
  const r = jn(e);
  return t.type === "text" ? {
    jsonPath: Nt([...r, t.index]),
    offset: t.offset
  } : rp(e, r, t.index, n);
}
function Qk(e, t) {
  const n = tn(e);
  return !!n && n.owner.is(t) && n.spans[0]?.bytes.kind === "closingMarker";
}
function La(e, t, n) {
  const r = e.getParent();
  if (!r)
    return { jsonPath: Nt(jn(e)) };
  const i = e.getIndexWithinParent() + (t ? 1 : 0);
  if (ue(r)) {
    if (i > 0 && i < r.getChildrenSize()) {
      const s = Yk(r, i, n);
      if (s)
        return s;
    }
    return La(r, i > 0, n);
  }
  return Qn(r, i, n);
}
function rp(e, t, n, r) {
  const i = en(e, r), s = i[n];
  if (!s)
    return HA(e, t, i, r);
  const o = Nt([...t, n]);
  return s.type === "text" ? { jsonPath: o, offset: 0 } : { jsonPath: o };
}
function HA(e, t, n, r) {
  if (Mn(e))
    return cc(e, t, 1, r);
  if (ip(e) !== void 0) {
    const o = n.length - 1, a = n[o];
    return a?.type === "text" ? {
      jsonPath: Nt([...t, o]),
      offset: a.length
    } : {
      jsonPath: Nt(t),
      closingMarkerOffset: 0
    };
  }
  const i = In(e), s = t[t.length - 1];
  return GA(e) || !i || s === void 0 ? cc(e, t, 0, r) : rp(i, t.slice(0, -1), s + 1, r);
}
function cc(e, t, n, r) {
  const i = Nt(t), s = ip(e);
  if (s !== void 0)
    return {
      jsonPath: i,
      closingMarkerOffset: s + n
    };
  if (E(e)) {
    const l = en(e, r), u = l.length - 1, f = l[u], d = [...t, u];
    if (f?.type === "text")
      return { jsonPath: Nt(d), offset: f.length + n };
    if (f)
      return cc(f.node, d, n, r);
  }
  const o = (l, u) => ({
    jsonPath: Fk(i, l),
    propertyOffset: u.length + n
  }), a = (l, u) => ({
    jsonPath: i,
    keyName: l,
    keyClosingMarkerOffset: st(u).length + n
  });
  if (Me(e))
    return e.getPubnumber() !== void 0 ? a("pubnumber", "vp") : e.getAltnumber() !== void 0 ? a("altnumber", "va") : o("number", e.getNumber());
  if (ot(e)) {
    const l = e.getPubnumber();
    return l !== void 0 ? o("pubnumber", l) : e.getAltnumber() !== void 0 ? a("altnumber", "ca") : o("number", e.getNumber());
  }
  if (Ie(e))
    return o("code", e.getCode());
  if (D(e))
    return o("caller", e.getCaller());
  const c = Ze(e) ? e.getMarker() : JA(e);
  return c ? o("marker", c) : { jsonPath: i };
}
function ip(e) {
  if (U(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : st(e.getMarker(), Bc(e)).length;
  if (D(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : st(e.getMarker()).length;
  if (Ke(e))
    return st("").length;
  if (Ze(e)) {
    const { closing: t } = Fc(e.getTag(), e.getMarker(), e.getUnknownAttributes());
    return t === "" ? void 0 : t.length;
  }
}
function GA(e) {
  const t = In(e);
  return ye(e) || _t(e) || Ie(e) || bk(e) || Ze(e) && e.getTag() === "table:row" || Mn(t) || zi(t);
}
function JA(e) {
  if (ye(e) || U(e) || Ke(e) || bk(e) || z0(e))
    return e.getMarker();
}
function Fl(e) {
  if (E(e)) {
    const n = e.getLastChild();
    let r = n;
    for (; r && YA(r, e); )
      r = r.getPreviousSibling();
    if (r !== n)
      return C(r) && !tn(r) ? [
        r,
        Pn(r) ? 0 : r.getTextContentSize()
      ] : [e, r ? r.getIndexWithinParent() + 1 : 0];
    if (n && C(n))
      return [
        n,
        !tn(n) && Pn(n) ? 0 : n.getTextContentSize()
      ];
  }
  const t = e.getNextSibling();
  return t && E(t) ? [t, 0] : Qr(e, !0);
}
function YA(e, t) {
  return Ed(e) || Be(e) || Rt(e) && e.getTextType() === "attribute" || Qk(e, t);
}
function XA(e, t) {
  for (const n of nl(e)) {
    const r = tn(n);
    if (!r?.owner.is(e))
      continue;
    const { spans: i } = r;
    if (i.some((o) => ji(o.bytes, { kind: "attributeKey", keyName: t })))
      return;
    const s = i.find((o) => ji(o.bytes, { kind: "property", property: t }));
    if (s && n.getTextContent()[s.start - 1] === "|")
      return [n, s.start];
  }
}
function QA(e, t, n) {
  for (const r of nl(e)) {
    if (!yi(r))
      continue;
    const i = tn(r);
    if (!i?.owner.is(e))
      continue;
    const s = i.spans.findIndex((o) => ji(o.bytes, t));
    if (!(s < 0))
      return n > np(i, s) ? [r, i.spans[s + 1]?.start ?? i.length] : void 0;
  }
}
function zl(e, t) {
  if (!D(e) || t !== ti.cat?.keyName)
    return;
  const n = e.getChildren().find((s) => s.getType() === hi);
  if (!n)
    return;
  const [r, i] = Qr(n, !0);
  return r && i !== void 0 ? [r, i] : void 0;
}
function Qr(e, t) {
  const n = e.getParent();
  return n ? [n, e.getIndexWithinParent() + (t ? 1 : 0)] : [void 0, void 0];
}
function ZA(e, t) {
  if (Me(e) || ot(e)) {
    if (t === "number")
      return e.getNumber();
    if (t === "altnumber")
      return e.getAltnumber();
    if (t === "pubnumber")
      return e.getPubnumber();
    if (t === "marker")
      return e.getMarker();
  }
  if (Ke(e) && t === "marker")
    return e.getMarker();
}
function xg(e, t) {
  const n = Ee(), r = cc(n, [], 1, t);
  return Tg(r) === Tg(e) ? [n, n.getChildrenSize()] : void 0;
}
function Tg(e) {
  return JSON.stringify(Object.entries(e).sort(([t], [n]) => t.localeCompare(n)));
}
function Zk(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Pn(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function jn(e) {
  const t = [];
  let n = e;
  for (; n; ) {
    const r = In(n);
    if (!r)
      break;
    const i = b0(r, n);
    i >= 0 && t.unshift(i), n = r;
  }
  return t;
}
function ex() {
  for (let e = Ee().getFirstChild(); e; e = e.getNextSibling())
    if (zi(e))
      return !0;
  return !1;
}
function eP(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function tx(e, t, n, r, i, s, o) {
  if (!tt.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = n ? Zc(n, i) : N();
  if (!M(a))
    return;
  const c = rP(a, e, r, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? eP(e, s), u = nx(e, l, c, i, s, void 0, void 0);
  return nP(u, a, i), u;
}
function sp(e) {
  return e !== "expanded";
}
function tP(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const n = t.getNode();
  if (!C(n) || !U(n.getParent()))
    return;
  if (w(n))
    return t.offset === 0 && n.getMarkerSyntax() === "closing" ? n : void 0;
  if (t.offset !== n.getTextContentSize())
    return;
  const r = n.getNextSibling();
  return w(r) && r.getMarkerSyntax() === "closing" ? r : void 0;
}
function nP(e, t, n) {
  const r = sp(n?.noteMode);
  e.setIsCollapsed(r), t.isCollapsed() || a0(t), Kd(t), Un(t);
  const i = tP(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), r || e.getChildren().reverse().find(U)?.selectEnd();
}
function fs(e, t, n) {
  const r = Kr(e);
  r.setUnknownAttributes({ closed: "false" });
  const i = n?.markerMode === "editable";
  i ? r.append($t(e)) : n?.markerMode === "visible" && r.append(Ur("marker", Ve(e)));
  const s = t === "" ? Pt : i ? q + t : t;
  return r.append(Re(s)), r;
}
function rP(e, t, n, r, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = n ?? {}, u = i.chapterVerseSeparator ?? ":", f = i.verseRangeSeparator ?? "-", d = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => f)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (d !== void 0 && o.push(fs("fr", d, r)), !e.isCollapsed()) {
        const p = vg(e);
        p.length > 0 && o.push(fs("fq", p, r));
      }
      o.push(fs("ft", "", r));
      break;
    case "x":
    case "ex":
      if (d !== void 0 && o.push(fs("xo", d, r)), !e.isCollapsed()) {
        const p = vg(e);
        p.length > 0 && o.push(fs("xq", p, r));
      }
      o.push(fs("xt", "", r));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function nx(e, t, n, r, i, s, o) {
  const a = o === "false", c = a ? !1 : sp(r?.noteMode), l = td(e, t, c);
  s && Ht(l, si, () => s);
  const u = r?.isNoteShellEditable === !1;
  let f, d;
  r?.markerMode === "editable" ? (f = $t(e), u && f.setMode("token"), a || (d = $t(e, "closing"), u && d.setMode("token"))) : r?.markerMode === "visible" && (f = Ur("marker", Ve(e) + " "), a || (d = Ur("marker", st(e))));
  let p;
  if (f && l.append(f), r?.markerMode === "editable" && !c)
    p = Re(vt(l.__caller)).toggleUnmergeable(), u && p.setMode("token"), l.append(p, ...n);
  else {
    const h = () => Bi(), g = n.flatMap(fP(h));
    if (t === "")
      l.append(...g);
    else {
      const m = Cd(n);
      let y = () => {
      };
      i?.noteCallerOnClick && (y = i.noteCallerOnClick), p = Gd(l.__caller, m, y), l.append(p, h(), ...g);
    }
  }
  return d && l.append(d), l;
}
function br(e) {
  if (typeof e == "string") {
    const t = X(e);
    return D(t) ? t : void 0;
  }
  return fA(e);
}
function qa(e, t) {
  const n = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(n), n) {
    const r = e.getPreviousSibling();
    if (Ar(r) || !r) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      r.selectEnd();
  } else {
    const r = e.getChildren(), i = r.slice().reverse().find(U);
    if (i)
      iP(i);
    else {
      const s = op(e), o = s === -1 ? r.length : s;
      e.select(o, o);
    }
  }
}
function op(e) {
  const t = e.getChildrenSize() - 1, n = e.getLastChild();
  return w(n) && n.getMarkerSyntax() === "closing" || gn(n) && n.getTextContent() === st(e.getMarker()) ? t : -1;
}
function iP(e) {
  const t = op(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const n = e.getChildAtIndex(t - 1);
  C(n) && !Pn(n) ? n.selectEnd() : e.select(t, t);
}
function rx(e, { isContentChange: t = !1 } = {}) {
  const n = e.getNextSibling();
  if (C(n) && !da(n)) {
    n.select(0, 0);
    return;
  }
  const r = e.getParent();
  if (!r)
    return;
  const i = e.getIndexWithinParent() + 1;
  r.canBeEmpty() ? r.select(i, i) : ap(r, i, { announce: !t });
}
function ap(e, t, { announce: n = !0 } = {}) {
  const r = e.getChildAtIndex(t - 1);
  if (!D(r) || r.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const i = Dr();
  i.anchor.set(e.getKey(), t, "element"), i.focus.set(e.getKey(), t, "element"), Un(i), n && Ut().dispatchCommand(hn, void 0);
}
function Cg(e, t, n) {
  const r = St(e), i = sP(e, r);
  if (n && sx(i, t, n, ix(e, r)))
    return !0;
  let s = Math.max(t, 0), o;
  for (const { node: c, isGlyph: l, dataStart: u } of i) {
    if (l)
      continue;
    const f = c.getTextContentSize() - u;
    if (s < f) {
      const d = u + s;
      return c.select(d, d), !0;
    }
    s -= f, o = c;
  }
  if (!o)
    return !1;
  const a = o.getTextContentSize();
  return o.select(a, a), !0;
}
function sP(e, t) {
  const n = [];
  for (const { node: r } of Yi(e))
    !C(r) || Qe(r, Be) || (cp(r, t) ? n.push({ node: r, isGlyph: !1, dataStart: ud(r) }) : oP(r, e) && n.push({ node: r, isGlyph: !0, dataStart: 0 }));
  return n;
}
function oP(e, t) {
  return kn(e) ? !0 : w(e) && !t.is(e.getParent());
}
function ix(e, t) {
  return (n) => {
    let r = n;
    for (; !r.getPreviousSibling(); ) {
      const o = r.getParent();
      if (!o || o.is(e))
        return;
      r = o;
    }
    const i = r.getPreviousSibling(), s = E(i) ? i.getLastDescendant() : i;
    if (C(s) && (t?.is(s) || cp(s, t)))
      return s;
  };
}
function sx(e, t, n, r) {
  let i = 0, s = 0;
  for (const { node: o, isGlyph: a, dataStart: c } of e) {
    if (!a) {
      const l = o.getTextContentSize() - c;
      if (i += l, l > 0 && (s = 0), i > t)
        return !1;
      continue;
    }
    if (i === t && s === n.index)
      return aP(o, n.offset, r), !0;
    s += 1;
  }
  return !1;
}
function aP(e, t, n) {
  const r = e.getTextContentSize(), i = e.isToken() ? r : Math.min(Math.max(t, 0), r), s = i === 0 ? n(e) : void 0;
  if (s) {
    const o = s.getTextContentSize();
    s.select(o, o);
  } else
    e.select(i, i);
}
function cP(e, t, n) {
  const { opener: r, value: i, closer: s } = ca(e);
  if (!i)
    return !1;
  const o = lP(i);
  if (n) {
    const c = [];
    r && c.push({ node: r, isGlyph: !0, dataStart: 0 }), c.push({ node: i, isGlyph: !1, dataStart: o }), s && c.push({ node: s, isGlyph: !0, dataStart: 0 });
    const l = St(e);
    if (sx(c, t, n, ix(e, l)))
      return !0;
  }
  const a = Math.min(o + Math.max(t, 0), i.getTextContentSize());
  return i.select(a, a), !0;
}
function lP(e) {
  return e.getTextContent().startsWith(q) ? q.length : 0;
}
function cp(e, t) {
  return !C(e) || Pn(e) || da(e) ? !1 : !t || !e.is(t);
}
function uP(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(U))
    return;
  const t = St(e);
  for (const { node: r } of Yi(e))
    if (cp(r, t))
      return;
  const n = op(e);
  return n === -1 ? e.getChildrenSize() : n;
}
function fP(e) {
  return (t) => Rt(t) ? [t] : [t, e()];
}
function dP(e) {
  const t = e.getParent();
  return t !== null && Qe(t, D) !== null;
}
function vg(e) {
  if (!M(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const n = t[0], r = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Bf(e);
  let a = "";
  for (const c of t)
    if (!(D(c) || Lt(c) || dP(c)) && !w(c) && !kn(c) && de(c, ke) !== "attribute") {
      if (Me(c)) {
        a += `\\+fv ${c.getNumber()}\\+fv*`;
        continue;
      }
      if (C(c)) {
        let l = c.getTextContent();
        c === n && c === r ? l = s < o ? l.slice(s, o) : l.slice(o, s) : c === n ? l = i ? l.slice(s) : l.slice(o) : c === r && (l = i ? l.slice(0, o) : l.slice(0, s)), a += l;
      }
    }
  return a.replace(/[ \t\r\n\f\v]+/g, " ").trim();
}
const rl = [
  _n,
  Gt,
  ...pE
], pP = [
  Ys,
  ...rl
], hP = pi((e, t) => {
  const { coords: n, children: r, style: i, ...s } = e, o = n !== void 0;
  return P("div", { ref: t, className: "floating-box", "aria-hidden": !o, style: {
    ...i,
    position: "absolute",
    zIndex: 1e3,
    top: n?.y,
    left: n?.x,
    visibility: o ? "visible" : "hidden",
    opacity: o ? 1 : 0
  }, ...s, children: r });
});
function gP() {
  const [e, t] = Ae(void 0), [n, r] = Ae(), i = te(null), s = _e((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = LS(l, c, () => {
      qS(l, c, {
        placement: "bottom-start",
        middleware: [DS(), KS()]
      }).then((u) => {
        r(u.placement), t((f) => f?.x === u.x && f?.y === u.y ? f : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = _e(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return H(() => o, [o]), { coords: e, placement: n, updatePosition: s, cleanup: o };
}
function mP({ isOpen: e, floatingBoxRef: t }) {
  const { coords: n, updatePosition: r, cleanup: i, placement: s } = gP();
  return H(() => {
    if (!e || !t.current) {
      i();
      return;
    }
    const o = window.getSelection()?.getRangeAt(0);
    if (!o) {
      i();
      return;
    }
    return r(o, t.current), i;
  }, [i, e, t, r]), { coords: n, placement: s };
}
const yP = nS(hP);
function ox({ isOpen: e = !1, children: t }) {
  const n = te(null), { coords: r, placement: i } = mP({ isOpen: e, floatingBoxRef: n }), s = ut(() => r ? typeof t == "function" ? t : () => t : () => null, [t, r]);
  return wi(
    P(yP, { ref: n, coords: r, style: r ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const ax = my(void 0);
function lp() {
  const e = yy(ax);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function bP(e, t) {
  const [n, r] = Ae(0), [i, s] = Ae(-1), o = ut(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: n,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = _e(() => {
    r((f) => {
      const d = o.length;
      return d ? (f - 1 + d) % d : 0;
    });
  }, [o.length]), l = _e(() => {
    r((f) => {
      const d = o.length;
      return d ? (f + 1) % d : 0;
    });
  }, [o.length]), u = _e(() => {
    const f = o.length;
    if (n >= 0 && n < f) {
      const d = o[n];
      t?.(d), s(n);
    }
  }, [n, o, t]);
  return {
    state: a,
    moveUp: c,
    moveDown: l,
    select: u,
    setActiveIndex: r,
    setSelectedIndex: s
  };
}
function kP({ children: e, menuItems: t, onSelectOption: n, ...r }) {
  const i = bP(t, n);
  return P(ax.Provider, { value: i, children: P("div", { ...r, children: e }) });
}
const cx = pi(({ index: e, children: t, onMouseEnter: n, onClick: r, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = lp(), u = _e((d) => {
    l(), c(-1), r?.(d);
  }, [r, l, c]), f = _e((d) => {
    a(e), n?.(d);
  }, [e, a, n]);
  return P("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: f, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function xP({ children: e, autoIndex: t = !0, ...n }) {
  const r = te(null), { state: { activeIndex: i, menuItems: s } } = lp(), o = ut(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = ut(() => {
    const c = o(s);
    return t ? rS.map(c, (l, u) => iS(l) && l.type === cx && l.props.index === void 0 ? sS(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return H(() => {
    if (r.current) {
      const c = r.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), f = l.getBoundingClientRect();
        f.bottom > u.bottom ? c.scrollTop += f.bottom - u.bottom : f.top < u.top && (c.scrollTop -= u.top - f.top);
      }
    }
  }, [i]), P("div", { ref: r, role: "menu", ...n, children: a });
}
const TP = (e, t, n) => Da(e, n).toLowerCase().includes(t.toLowerCase()), Sg = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Da = (e, t) => {
  const n = e[t];
  return typeof n == "string" ? n : String(n);
};
function CP(e) {
  const { query: t, items: n, filterBy: r, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, f;
  i ? (f = i, u = n.length > 0 ? Sg(n[0]) : "") : (u = r || (n.length > 0 ? Sg(n[0]) : ""), f = (h, g) => TP(h, g, u));
  const d = s || u, p = /* @__PURE__ */ new Map();
  return n.filter((h) => {
    try {
      return f(h, t);
    } catch (g) {
      return console.warn("Error filtering item:", h, g), !1;
    }
  }).sort((h, g) => {
    const m = (x) => (p.has(x) || p.set(x, Da(x, d).toLowerCase()), p.get(x) ?? ""), y = a ? Da(h, d) : m(h), k = a ? Da(g, d) : m(g);
    for (const x of c)
      switch (x) {
        case "exact":
          if (y === l && k !== l)
            return -1;
          if (k === l && y !== l)
            return 1;
          break;
        case "startsWith":
          if (y.startsWith(l) && !k.startsWith(l))
            return -1;
          if (k.startsWith(l) && !y.startsWith(l))
            return 1;
          break;
        case "contains": {
          const A = y.indexOf(l), _ = k.indexOf(l);
          if (A !== -1 && _ === -1)
            return -1;
          if (_ !== -1 && A === -1)
            return 1;
          if (A !== -1 && _ !== -1)
            return A - _;
          break;
        }
      }
    return y.localeCompare(k);
  });
}
const jl = {
  Root: kP,
  Options: xP,
  Option: cx
};
function vP(e) {
  const { query: t, items: n, filterBy: r, filter: i, sortBy: s, sortingOptions: o } = e;
  return ut(() => CP({
    query: t,
    items: n,
    filterBy: r,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, n, r, i, s, o]);
}
function SP() {
  const { moveUp: e, moveDown: t, select: n } = lp();
  return ut(() => ({
    moveUp: e,
    moveDown: t,
    select: n
  }), [e, t, n]);
}
const _P = () => {
  const e = SP(), [t] = Ce();
  H(() => {
    const n = (r) => {
      const s = {
        ArrowDown: () => e?.moveDown(),
        ArrowUp: () => e?.moveUp(),
        Enter: () => e?.select(),
        Tab: () => e?.select()
      }[r.key];
      return s ? (s(), r.preventDefault(), r.stopPropagation(), !0) : !1;
    };
    return t.registerCommand(_r, n, Ge);
  }, [t, e]);
};
function MP() {
  return _P(), null;
}
const EP = ["Shift", "Control", "Alt", "Meta"];
function lx(e) {
  const { options: t, onSelectOption: n, onClose: r, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = Ce(), u = s !== void 0, [f, d] = Ae(""), p = u ? s ?? "" : f, h = vP({ query: p, items: t, filterBy: "name" }), g = (m) => {
    r?.(), n ? n(m) : m.action(l);
  };
  return H(() => {
    a?.(p, h);
  }, [a, p, h]), H(() => l.registerCommand(_r, (m) => {
    if (u || c?.includes(m.key) || EP.includes(m.key))
      return !1;
    if ((m.ctrlKey || m.metaKey || m.altKey) && !m.getModifierState("AltGraph"))
      return r?.(), !1;
    const k = {
      Escape: () => r?.(),
      Backspace: () => {
        p.length === 0 ? r?.() : d((x) => x.slice(0, -1));
      }
    }[m.key];
    return k ? (m.stopPropagation(), m.preventDefault(), k(), !0) : m.key.length === 1 ? (m.stopPropagation(), m.preventDefault(), m.key !== o && d((x) => x + m.key), !0) : !1;
  }, Ge), [l, u, p, o, r, c]), Xe(jl.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (m) => g(m), children: [!u && P("input", { value: p, type: "text", disabled: !0 }), P(MP, {}), P(jl.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (m) => m.map((k, x) => Xe(jl.Option, { index: x, children: [P("span", { className: "label", children: k.label ?? k.name }), P("span", { className: "description", children: k.description })] }, k.name)) })] });
}
function AP({ trigger: e, items: t }) {
  const [n] = Ce(), [r, i] = Ae(!1), s = _e((o) => {
    o.key === "Escape" && r ? (i(!1), n.focus()) : o.key === e && !r && (o.preventDefault(), i(!0));
  }, [n, e, r]);
  return H(() => n.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [n, s]), H(() => n.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = N();
      if (M(l))
        return l;
    });
    a.read(() => {
      const l = N();
      !M(l) || c?.is(l) || i(!1);
    });
  }), [n]), t && P(ox, { isOpen: r, children: ({ placement: o }) => P(lx, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function PP({ scriptureReference: e, contextMarker: t, getMarkerAction: n }) {
  return { markersMenuItems: ut(() => {
    if (!t || !e)
      return;
    const i = xr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = xr(o), { action: c } = n(o, a);
        return {
          name: o,
          label: o,
          description: a?.description ?? "",
          action: (l) => {
            c({ editor: l, reference: e });
          }
        };
      }));
  }, [t, n, e]) };
}
function wP(e, t) {
  const n = es(e);
  if (Ar(e) || Wr(e)) {
    const o = 1 + e.getMarker().length + 1, a = e.getNumber();
    if (e.getShowMarker())
      return t < o + a.length ? t : void 0;
    if (t < o || t >= o + a.length)
      return;
    const c = n.indexOf(a);
    return c < 0 ? "drawn" : c + t - o;
  }
  const r = Vc(e), i = r.length - r.trimStart().length, s = r.trim().length;
  if (!(t >= s))
    return r === n ? i + t : "drawn";
}
function NP() {
  return typeof CSS > "u" || typeof Highlight > "u" || !("highlights" in CSS) ? void 0 : { registry: CSS.highlights, create: () => new Highlight() };
}
const _g = /* @__PURE__ */ new Map(), OP = ["background-color", "color", "text-shadow"], $P = [
  "text-decoration-line",
  "text-decoration-style",
  "text-decoration-color",
  "text-decoration-thickness"
], RP = /* @__PURE__ */ new Set(["solid", "double", "dotted", "dashed", "wavy"]);
function IP(e, t) {
  const n = e.ownerDocument.defaultView;
  if (!n)
    return [];
  const r = n.getComputedStyle(e), i = n.getComputedStyle(t), s = (u) => {
    const f = r.getPropertyValue(u);
    return f && f !== i.getPropertyValue(u) ? f : void 0;
  }, o = [];
  for (const u of OP) {
    const f = s(u);
    f && o.push(`${u}: ${f}`);
  }
  const a = r.getPropertyValue("text-decoration-line");
  let c = !1;
  if (a) {
    if (a !== "none" && s("text-decoration-line")) {
      c = !0;
      for (const u of $P) {
        const f = s(u);
        f && o.push(`${u}: ${f}`);
      }
    }
  } else {
    const u = s("text-decoration");
    u && !/^none\b/.test(u) && (c = !0, o.push(`text-decoration: ${u}`));
  }
  const l = s("border-bottom-style");
  if (!c && l && l !== "none") {
    o.push("text-decoration-line: underline", `text-decoration-style: ${RP.has(l) ? l : "solid"}`);
    const u = r.getPropertyValue("border-bottom-color");
    u && o.push(`text-decoration-color: ${u}`);
    const f = r.getPropertyValue("border-bottom-width");
    f && o.push(`text-decoration-thickness: ${f}`);
  }
  return o;
}
const LP = Math.random().toString(36).slice(2, 10);
let qP = 0;
class DP {
  api;
  probeParent;
  prefix = `editor-annotation-${LP}-${qP++}`;
  byClassSet = /* @__PURE__ */ new Map();
  byLeaf = /* @__PURE__ */ new Map();
  nextName = 0;
  style;
  probes;
  observer;
  renderQueued = !1;
  disposed = !1;
  /** Each class set's declarations as last measured; cleared when a stylesheet changes. */
  measured = /* @__PURE__ */ new Map();
  /** What the page's style rules name; cleared when a stylesheet changes. */
  rules;
  /** How many rules each of the page's stylesheets held when `rules` was read. */
  ruleCounts;
  constructor(t, n) {
    this.api = t, this.probeParent = n;
  }
  /** The pieces painted on leaf `key`. */
  leafHighlights(t) {
    return this.byLeaf.get(t) ?? [];
  }
  /** The leaves with painted pieces. */
  leafKeys() {
    return [...this.byLeaf.keys()];
  }
  /**
   * Replace leaf `key`'s painted pieces. The new pieces are added before the old ones are let go,
   * so a class set the leaf keeps using keeps its highlight, name and priority, and the stylesheet
   * is not rewritten.
   */
  setLeaf(t, n) {
    const r = this.byLeaf.get(t) ?? [];
    for (const i of n)
      this.use(i.classNames).highlight.add(i.range);
    n.length > 0 ? this.byLeaf.set(t, n) : this.byLeaf.delete(t), this.release(r, new Set(n.map(({ range: i }) => i)));
  }
  clearLeaf(t) {
    const n = this.byLeaf.get(t) ?? [];
    this.byLeaf.delete(t), this.release(n, /* @__PURE__ */ new Set());
  }
  /** Let go of `pieces`, keeping in their highlights any range in `kept`; a class set no piece
   * uses any more is unregistered. */
  release(t, n) {
    for (const r of t) {
      const i = this.byClassSet.get(Vl(r.classNames));
      i && (n.has(r.range) || i.highlight.delete(r.range), !(--i.uses > 0) && (this.api.registry.delete(i.name), _g.delete(i.name), this.byClassSet.delete(Vl(r.classNames)), this.queueRender()));
    }
  }
  dispose() {
    for (const t of [...this.byLeaf.keys()])
      this.clearLeaf(t);
    this.disposed = !0, this.observer?.disconnect(), this.style?.remove(), this.probes?.remove();
  }
  use(t) {
    const n = Vl(t);
    let r = this.byClassSet.get(n);
    if (!r) {
      const i = `${this.prefix}-${this.nextName++}`, s = this.api.create();
      s.priority = this.nextName, r = { name: i, classNames: t, highlight: s, uses: 0 }, this.byClassSet.set(n, r), this.api.registry.set(i, s), _g.set(i, t), this.queueRender();
    }
    return r.uses++, r;
  }
  queueRender() {
    this.renderQueued || (this.renderQueued = !0, queueMicrotask(() => {
      this.renderQueued = !1, this.render();
    }));
  }
  /** Measure each class set not yet measured and write the stylesheet, when it changed. */
  render() {
    const t = this.probeParent();
    if (!t || this.disposed)
      return;
    const n = t.ownerDocument;
    this.observe(n), (!this.probes?.isConnected || this.probes.parentElement !== t) && (this.probes?.remove(), this.probes = n.createElement("div"), this.probes.setAttribute("aria-hidden", "true"), this.probes.setAttribute("data-editor-annotation-probes", ""), this.probes.style.cssText = "position:absolute;width:0;height:0;overflow:hidden;visibility:hidden;pointer-events:none", t.append(this.probes));
    const r = this.probes;
    r.replaceChildren();
    const i = n.createElement("span");
    r.append(i);
    const s = [];
    for (const [c, { classNames: l }] of this.byClassSet) {
      if (this.measured.has(c))
        continue;
      if (!this.isNamedByRule(n, l)) {
        this.measured.set(c, []);
        continue;
      }
      const u = n.createElement("span");
      u.className = l.join(" "), s.push([c, u]);
    }
    r.append(...s.map(([, c]) => c));
    for (const [c, l] of s)
      this.measured.set(c, IP(l, i));
    const o = [];
    for (const [c, { name: l }] of this.byClassSet) {
      const u = this.measured.get(c) ?? [];
      u.length > 0 && o.push(`::highlight(${l}) { ${u.join("; ")}; }`);
    }
    for (const c of this.measured.keys())
      this.byClassSet.has(c) || this.measured.delete(c);
    r.replaceChildren();
    const a = o.join(`
`);
    this.style?.isConnected || (this.style = n.createElement("style"), this.style.setAttribute(ux, this.prefix), n.head.append(this.style)), this.style.textContent !== a && (this.style.textContent = a);
  }
  /**
   * Whether any style rule's selector names one of `classNames`. Errs toward yes: a substring match
   * counts, and every class set counts while any rule cannot be read.
   */
  isNamedByRule(t, n) {
    this.rules || (this.rules = zP(fx(t)), this.ruleCounts = Mg(t));
    const { selectors: r, unreadable: i } = this.rules;
    return i || n.some((s) => r.includes(s) || r.includes(s.replace(/[^\w-]/g, "\\$&")));
  }
  /**
   * Measure again if a stylesheet's rule count changed since the rules were last read: `insertRule`,
   * `deleteRule` and adopting a stylesheet change no DOM, so no observer sees them. Only each
   * stylesheet's top-level count is compared, which keeps this cheap enough to call on every
   * commit; a rule inserted inside a group rule is seen at the next stylesheet change.
   */
  noticeStylesheetChanges() {
    if (this.disposed || this.ruleCounts === void 0)
      return;
    const t = this.probeParent()?.ownerDocument;
    !t || Mg(t) === this.ruleCounts || this.forgetStyles();
  }
  forgetStyles() {
    this.measured.clear(), this.rules = void 0, this.ruleCounts = void 0, this.queueRender();
  }
  /** Measure again when a stylesheet or the page's theme changes; never for an editor highlight
   * stylesheet (this painter's or another editor's), which only styles highlights. */
  observe(t) {
    if (this.observer)
      return;
    const n = t.defaultView;
    if (!n)
      return;
    this.observer = new n.MutationObserver((i) => {
      const s = (o) => {
        if (Hu(o.target))
          return !0;
        const a = [...o.addedNodes, ...o.removedNodes];
        return a.length > 0 && a.every(Hu);
      };
      i.every(s) || this.forgetStyles();
    }), this.observer.observe(t.head, { childList: !0, characterData: !0, subtree: !0 });
    const r = { attributes: !0, attributeFilter: ["class", "style", "data-theme"] };
    this.observer.observe(t.documentElement, r), t.body && this.observer.observe(t.body, r);
  }
}
const ux = "data-editor-annotation-highlights";
function Hu(e) {
  for (let t = e; t; t = t.parentNode)
    if (KP(t) && t.hasAttribute(ux))
      return !0;
  return !1;
}
function KP(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function fx(e) {
  const t = "adoptedStyleSheets" in e ? e.adoptedStyleSheets : [];
  return [...e.styleSheets, ...t].filter((n) => !n.ownerNode || !Hu(n.ownerNode));
}
function Mg(e) {
  return fx(e).map((t) => {
    try {
      return t.cssRules.length;
    } catch {
      return -1;
    }
  }).join(",");
}
function UP(e) {
  return "cssRules" in e;
}
function BP(e) {
  return "styleSheet" in e;
}
function FP(e) {
  return "selectorText" in e && typeof e.selectorText == "string";
}
function zP(e) {
  const t = [];
  let n = !1;
  const r = (i) => {
    let s;
    try {
      s = i.cssRules;
    } catch {
      n = !0;
      return;
    }
    for (const o of s)
      FP(o) && t.push(o.selectorText), BP(o) && (o.styleSheet ? r(o.styleSheet) : n = !0), UP(o) && r(o);
  };
  for (const i of e)
    r(i);
  return { selectors: t.join(`
`), unreadable: n };
}
function Vl(e) {
  return JSON.stringify([...e].sort());
}
function Eg(e, t, n) {
  const r = e.ownerDocument, i = r.createTreeWalker(e, NodeFilter.SHOW_TEXT), s = r.createRange();
  let o = 0, a = !1;
  for (let c = i.nextNode(); c; c = i.nextNode()) {
    const l = c.textContent?.length ?? 0;
    if (!a && t < o + l && (s.setStart(c, t - o), a = !0), a && n <= o + l)
      return s.setEnd(c, n - o), s;
    o += l;
  }
}
function jP(e, t, n) {
  return "getClientRects" in e ? Array.from(e.getClientRects()).some((r) => t >= r.left && t <= r.right && n >= r.top && n <= r.bottom) : !1;
}
function dx(e) {
  return C(e) ? e.getTextContent() : es(e);
}
function Mo(e) {
  return dx(e).length;
}
function VP(e, t) {
  if (C(e)) {
    if (bn(e))
      return !0;
    if (ck(e)) {
      const [i, s] = Ad(e);
      return t < i || t >= s;
    }
    return t < Gs(e);
  }
  const [n, r] = Wc(es(e));
  return t < n || t >= r;
}
function Wl(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (E(t) && !t.isInline())
      return t.getKey();
}
function WP(e) {
  let t = e;
  for (; E(t); ) {
    const n = t.getFirstChild();
    if (!n)
      return t;
    t = n;
  }
  return t;
}
function Ag(e) {
  for (let t = e; t; t = t.getParent()) {
    const n = t.getNextSibling();
    if (n)
      return WP(n);
  }
}
function px(e) {
  return E(e) ? e.getChildren().flatMap(px) : [e];
}
const HP = 64;
function GP(e, t) {
  const n = /* @__PURE__ */ new Map(), r = (o, a, c) => {
    for (let l = a; l < c; l++)
      if (!VP(o, l))
        return !1;
    return c > a && n.set(o.getKey(), [a, c]), !0;
  };
  if (e.leaf.is(t.leaf))
    return r(e.leaf, e.end, t.start) ? n : void 0;
  const i = Wl(e.leaf);
  if (i !== Wl(t.leaf) || !r(e.leaf, e.end, Mo(e.leaf)))
    return;
  let s = Ag(e.leaf);
  for (let o = 0; s && !s.is(t.leaf); o++, s = Ag(s))
    if (o >= HP || Wl(s) !== i || yn(s) && Mo(s) === 0 || !r(s, 0, Mo(s)))
      return;
  if (s)
    return r(t.leaf, 0, t.start) ? n : void 0;
}
function JP(e) {
  const t = [...e].sort(([r], [i]) => r - i), n = [];
  for (const [r, i] of t) {
    const s = n[n.length - 1];
    s && r <= s[1] ? s[1] = Math.max(s[1], i) : n.push([r, i]);
  }
  return n;
}
function YP(e, t, n, r) {
  const i = [];
  for (const a of n) {
    const c = X(a);
    if (c?.isAttached())
      for (const l of ei(c)) {
        if (l.type !== e || l.id !== t || l.undisplayed)
          continue;
        const u = l.start === l.end;
        i.push({
          leaf: c,
          start: u ? 0 : l.start,
          end: u ? Mo(c) : l.end,
          inMark: !1
        });
      }
  }
  for (const a of r) {
    const c = X(a);
    if (!(!ue(c) || !c.isAttached()))
      for (const l of px(c))
        i.push({ leaf: l, start: 0, end: Mo(l), inMark: !0 });
  }
  i.sort((a, c) => a.leaf.is(c.leaf) ? a.start - c.start : a.leaf.isBefore(c.leaf) ? -1 : 1);
  const s = /* @__PURE__ */ new Map(), o = (a, c, l) => {
    const u = s.get(a) ?? [];
    u.push([c, l]), s.set(a, u);
  };
  i.forEach((a, c) => {
    a.inMark || o(a.leaf.getKey(), a.start, a.end);
    const l = i[c + 1];
    if (l)
      for (const [u, [f, d]] of GP(a, l) ?? [])
        o(u, f, d);
  });
  for (const [a, c] of s)
    s.set(a, JP(c));
  return s;
}
function XP(e, t) {
  const n = [...t.values()];
  if (e === 0 || n.every((o) => o.length === 1 && o[0][0] <= 0 && o[0][1] >= e))
    return { whole: !0 };
  const r = /* @__PURE__ */ new Set();
  for (const o of n)
    for (const [a, c] of o)
      r.add(Math.max(0, Math.min(a, e))), r.add(Math.max(0, Math.min(c, e)));
  const i = [...r].sort((o, a) => o - a), s = [];
  for (let o = 0; o + 1 < i.length; o++) {
    const [a, c] = [i[o], i[o + 1]], l = [...t].filter(([, u]) => u.some(([f, d]) => f <= a && c <= d)).map(([u]) => u);
    l.length > 0 && s.push({ start: a, end: c, annotations: l });
  }
  return { whole: !1, segments: s };
}
const QP = "display-annotation", ZP = [
  it,
  Wn,
  Kt,
  Hn,
  _n,
  Gt,
  Ln,
  ur
], hx = /* @__PURE__ */ new Set();
function qn(e, t) {
  return JSON.stringify([e, t]);
}
function e1(e) {
  return Array.isArray(e) && e.length === 2 && typeof e[0] == "string" && typeof e[1] == "string";
}
function ao(e) {
  const t = JSON.parse(e);
  if (!e1(t))
    throw new Error(`not an annotation index key: ${e}`);
  return t;
}
function gx(e) {
  Ht(e, jc, void 0), E(e) && e.getChildren().forEach(gx);
}
const Hl = /* @__PURE__ */ new WeakMap();
function t1(e) {
  E0({
    holdableText: FA,
    renderedOffset: wP
  });
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
  let c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
  const u = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakSet(), d = new AbortController(), p = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Set();
  let A, _ = !1;
  const j = NP(), $ = j ? new DP(j, () => e.getRootElement()?.parentElement ?? null) : void 0;
  let ne = /* @__PURE__ */ new Set();
  const fe = e._config.theme;
  function I(L) {
    return (t.get(L)?.size ?? 0) + (r.get(L)?.size ?? 0);
  }
  function K(L, V, G) {
    let J = L.get(V);
    J || L.set(V, J = /* @__PURE__ */ new Set()), J.add(G);
  }
  function ge(L, V, G) {
    const J = L.get(V);
    J?.delete(G) && (J.size === 0 && L.delete(V), I(V) === 0 && ne.add(V));
  }
  function re(L) {
    for (const [V, G] of Object.entries(L.getTypedIDs()))
      for (const J of G)
        Le(qn(V, J), V, J);
  }
  function Le(L, V, G) {
    const J = /* @__PURE__ */ new Set([
      ...r.get(L) ?? [],
      ...t.get(L) ?? []
    ]), ae = Array.from(J, (Q) => X(Q)).filter((Q) => Q !== null && Q.isAttached() && // A holder inside another holder is already in that one's text.
    !Q.getParents().some((se) => J.has(se.getKey())));
    if (ae.length === 0)
      return;
    ae.sort((Q, se) => Q.isBefore(se) ? -1 : 1);
    const Z = ae.map((Q) => ue(Q) ? Q.getTextContent() : ei(Q).filter((se) => se.type === V && se.id === G).map((se) => $u(Q, se)).join("")).join("");
    o.set(L, Z);
  }
  function me(L, V, G) {
    return g.get(L)?.has(V) ? y.has(L) ? !0 : ($?.leafHighlights(L) ?? []).some((J) => J.annotations.includes(V) && jP(J.range, G.clientX, G.clientY)) : !1;
  }
  function nt(L, V) {
    const G = /* @__PURE__ */ new Map();
    for (const J of ei(L)) {
      const ae = qn(J.type, J.id);
      G.has(ae) || !me(L.getKey(), ae, V) || G.set(ae, { annotation: J, text: $u(L, J) });
    }
    return G;
  }
  function rt(L, V, G) {
    e.getEditorState().read(() => {
      const J = Ji(L);
      if (!J)
        return;
      const ae = G === "leave" ? /* @__PURE__ */ new Map() : nt(J, V), Z = (se, { annotation: ce, text: qe }) => tc(e, ce.type, ce.id)?.[se]?.(V, ce.type, ce.id, qe);
      if (G === "onClick") {
        ae.forEach((se) => Z("onClick", se));
        return;
      }
      const Q = p.get(L) ?? /* @__PURE__ */ new Map();
      for (const [se, ce] of Q)
        ae.has(se) || Z("onMouseLeave", ce);
      for (const [se, ce] of ae)
        Q.has(se) || Z("onMouseEnter", ce);
      p.set(L, ae);
    }, { editor: e });
  }
  function rn(L) {
    const V = {}, G = /* @__PURE__ */ new Set();
    for (const J of L) {
      const [ae, Z] = ao(J), Q = V[ae] ??= [];
      Q.includes(Z) || Q.push(Z), k.get(J)?.forEach((se) => G.add(se));
    }
    return Object.keys(V).length === 0 ? [] : [
      ...Yy(fe, V),
      QP,
      ...G
    ].flatMap((J) => J.match(/\S+/g) ?? []);
  }
  function Je(L, V) {
    const G = u.get(L) ?? [];
    Oa(L, ...G.filter((J) => !V.includes(J))), yo(L, ...V), u.set(L, V);
  }
  function dr(L) {
    if (f.has(L))
      return;
    f.add(L);
    const { signal: V } = d;
    L.addEventListener("click", (G) => rt(L, G, "onClick"), { signal: V }), L.addEventListener("mouseenter", (G) => rt(L, G, "move"), { signal: V }), L.addEventListener("mousemove", (G) => rt(L, G, "move"), { signal: V }), L.addEventListener("mouseleave", (G) => rt(L, G, "leave"), {
      signal: V
    });
  }
  function xn(L) {
    const V = X(L), G = e.getElementByKey(L), J = g.get(L), ae = m.get(L);
    if (ae && ae !== G && Je(ae, []), x.delete(L), !V || !G || !J || J.size === 0) {
      G && Je(G, []), $?.clearLeaf(L), m.delete(L), y.delete(L);
      return;
    }
    m.set(L, G);
    const Z = new Map([...J].map((Ne) => [
      Ne,
      h.get(Ne)?.get(L) ?? []
    ])), Q = ei(V).length > 0, se = dx(V);
    let ce = XP(se.length, Z);
    if (!ce.whole && !$ && (ce = Q ? { whole: !0 } : { whole: !1, segments: [] }), Q && dr(G), ce.whole) {
      $?.clearLeaf(L), y.add(L), Je(G, rn(J));
      return;
    }
    if (y.delete(L), Je(G, []), !$)
      return;
    const qe = [];
    for (const { start: Ne, end: sn, annotations: Cn } of ce.segments) {
      const wr = Eg(G, Ne, sn);
      wr ? qe.push({
        classNames: rn(Cn),
        annotations: Cn,
        range: wr,
        text: se.slice(Ne, sn)
      }) : x.add(L);
    }
    $.setLeaf(L, qe);
  }
  function Pe(L) {
    if (x.has(L))
      return !0;
    const V = e.getElementByKey(L);
    return ($?.leafHighlights(L) ?? []).some(({ range: G, text: J }) => !V || !V.contains(G.startContainer) || !V.contains(G.endContainer) || G.toString() !== J);
  }
  function he() {
    return [...x, ...$?.leafKeys() ?? []].filter(Pe);
  }
  function F() {
    _ || e.getEditorState().read(() => new Set(he()).forEach(xn), { editor: e });
  }
  function oe(L) {
    A?.disconnect(), A = void 0;
    const V = L?.ownerDocument.defaultView;
    !L || !V || !$ || (A = new V.MutationObserver(F), A.observe(L, { childList: !0, characterData: !0, subtree: !0 }));
  }
  function ve(L) {
    const V = /* @__PURE__ */ new Set();
    for (const J of L)
      g.has(J) && V.add(J);
    const G = /* @__PURE__ */ new Set([...t.keys(), ...h.keys()]);
    for (const [J, ae] of r)
      ae.size >= 2 && G.add(J);
    for (const J of G) {
      const [ae, Z] = ao(J), Q = YP(ae, Z, t.get(J) ?? [], r.get(J) ?? []), se = h.get(J) ?? /* @__PURE__ */ new Map();
      for (const ce of /* @__PURE__ */ new Set([...se.keys(), ...Q.keys()]))
        JSON.stringify(se.get(ce)) !== JSON.stringify(Q.get(ce)) && V.add(ce);
      for (const ce of se.keys()) {
        if (Q.has(ce))
          continue;
        const qe = g.get(ce);
        qe?.delete(J), qe?.size === 0 && g.delete(ce);
      }
      for (const ce of Q.keys()) {
        let qe = g.get(ce);
        qe || g.set(ce, qe = /* @__PURE__ */ new Set()), qe.add(J);
      }
      Q.size > 0 ? h.set(J, Q) : h.delete(J);
    }
    for (const [J, ae] of m)
      e.getElementByKey(J) !== ae && V.add(J);
    for (const J of he())
      V.add(J);
    for (const J of V)
      xn(J);
  }
  function We(L) {
    _ || e.getEditorState().read(() => ve(L), { editor: e });
  }
  function ct(L, V) {
    const G = qn(L, V), J = [], ae = (Z) => {
      const Q = Z.ownerDocument.createRange();
      Q.selectNodeContents(Z), J.push(Q);
    };
    for (const Z of r.get(G) ?? []) {
      const Q = e.getElementByKey(Z);
      Q && ae(Q);
    }
    for (const [Z, Q] of h.get(G) ?? []) {
      const se = e.getElementByKey(Z);
      if (se) {
        if (y.has(Z) || !$) {
          ae(se);
          continue;
        }
        for (const [ce, qe] of Q) {
          const Ne = Eg(se, ce, qe);
          Ne && J.push(Ne);
        }
      }
    }
    return J.sort((Z, Q) => Z.compareBoundaryPoints(Range.START_TO_START, Q));
  }
  function bt(L, V, G, J) {
    const ae = qn(L, V), Z = k.get(ae) ?? /* @__PURE__ */ new Set();
    Z.has(G) !== J && (J ? Z.add(G) : Z.delete(G), Z.size > 0 ? k.set(ae, Z) : k.delete(ae), We(h.get(ae)?.keys() ?? []));
  }
  function Tn(L) {
    e.getEditorState().read(() => {
      const V = /* @__PURE__ */ new Set();
      for (const [G, J] of L) {
        const ae = J === "destroyed" ? null : X(G), Z = ae ? ei(ae) : [], Q = n.get(G) ?? [];
        for (const { type: se, id: ce } of Q) {
          const qe = qn(se, ce);
          V.add(qe), Z.some((Ne) => Ne.type === se && Ne.id === ce) || ge(t, qe, G);
        }
        for (const se of Z) {
          const ce = qn(se.type, se.id);
          V.add(ce), K(t, ce, G);
        }
        Z.length > 0 ? n.set(G, Z) : n.delete(G);
        for (let se = ae?.getParent(); se; se = se.getParent())
          ue(se) && re(se);
      }
      for (const G of V) {
        const [J, ae] = ao(G);
        Le(G, J, ae);
      }
    }, { editor: e });
  }
  function ee(L) {
    e.getEditorState().read(() => {
      for (const [V, G] of L) {
        const J = G === "destroyed" ? null : X(V), ae = ue(J) ? J : void 0, Z = ae ? Object.entries(ae.getTypedIDs()) : [], Q = Z.flatMap(([ce, qe]) => qe.map((Ne) => qn(ce, Ne)));
        for (const ce of i.get(V) ?? [])
          Q.includes(ce) || (ge(r, ce, V), ae || l.set(ce, [...l.get(ce) ?? [], V]));
        for (const ce of Q)
          K(r, ce, V);
        if (Q.length > 0 ? i.set(V, Q) : i.delete(V), !ae)
          continue;
        re(ae);
        const se = ae.getTypedOnRemoves();
        for (const [ce, qe] of Z)
          for (const Ne of qe) {
            const sn = se[ce]?.[Ne];
            sn && s.set(qn(ce, Ne), sn);
          }
      }
    });
  }
  function Te(L, V, G) {
    pk(e, V, G), s.delete(L), o.delete(L);
  }
  function Pr() {
    for (const [L, V] of O_(e))
      we(L, V);
  }
  function we(L, V) {
    const G = qn(L, V);
    a.add(G), c.add(G);
  }
  function pr() {
    a.clear(), $_(e);
    for (const L of /* @__PURE__ */ new Set([...s.keys(), ...o.keys()])) {
      if (I(L) > 0)
        continue;
      const [V, G] = ao(L);
      Te(L, V, G);
    }
  }
  function pe({ tags: L }) {
    Pr();
    const V = ne, G = c, J = l;
    if (ne = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), L.has(ia)) {
      pr();
      return;
    }
    if (L.has($c))
      return;
    const ae = [];
    for (const Z of V) {
      if (I(Z) > 0)
        continue;
      const [Q, se] = ao(Z), ce = tc(e, Q, se)?.onRemove ?? s.get(Z), qe = o.get(Z) ?? "";
      if (Te(Z, Q, se), !(!ce || a.has(Z) || G.has(Z))) {
        a.add(Z), Lh(e, Q, se, !0);
        for (const Ne of J.get(Z) ?? [])
          R_(Ne, Q, se);
        try {
          ce(Q, se, "destroyed", qe);
        } catch (Ne) {
          ae.push(Ne);
        }
      }
    }
    for (const Z of ae)
      queueMicrotask(() => e._onError(Z instanceof Error ? Z : new Error(String(Z))));
  }
  function qt(L, V) {
    Pr();
    const G = qn(L, V);
    a.delete(G), Lh(e, L, V, !1);
  }
  const Jt = et(
    ...ZP.filter((L) => e.hasNodes([L])).map((L) => e.registerMutationListener(L, Tn, { skipInitialization: !1 })),
    e.hasNodes([gt]) ? e.registerMutationListener(gt, ee, {
      skipInitialization: !1
    }) : () => {
    },
    N_(e),
    e.registerUpdateListener(pe),
    $0(e, [Gt, _n]),
    e.registerUpdateListener(({ dirtyLeaves: L, dirtyElements: V }) => {
      $?.noticeStylesheetChanges(), !(L.size === 0 && V.size === 0) && (We([...L, ...V.keys()]), A?.takeRecords());
    }),
    // Also paints what the mutation listeners above found already in the document.
    e.registerRootListener((L) => {
      oe(L), L && We([...g.keys()]);
    }),
    () => {
      _ = !0, d.abort(), $?.dispose(), A?.disconnect();
    },
    e.registerCommand(
      uS,
      ({ nodes: L }) => (L.forEach(gx), !1),
      // Critical, and never handling the command, so a handler that does handle it cannot skip the
      // strip.
      He
    )
  );
  return {
    index: {
      keysFor: (L, V) => t.get(qn(L, V)) ?? hx,
      noteSet: qt,
      noteReported: we,
      hasReported: (L, V) => (Pr(), a.has(qn(L, V))),
      setStateClass: bt,
      rangesFor: ct
    },
    references: 0,
    unregister: Jt
  };
}
function n1(e) {
  let t = Hl.get(e);
  t || (t = t1(e), Hl.set(e, t)), t.references++;
  const n = t;
  let r = !1;
  return {
    index: n.index,
    release: () => {
      r || (r = !0, n.references--, !(n.references > 0) && (n.unregister(), Hl.delete(e)));
    }
  };
}
function mx(e) {
  const t = te(void 0);
  return js(() => {
    const n = n1(e);
    return t.current = n.index, () => {
      t.current = void 0, n.release();
    };
  }, [e]), ut(() => ({
    keysFor: (n, r) => t.current?.keysFor(n, r) ?? hx,
    noteSet: (n, r) => t.current?.noteSet(n, r),
    noteReported: (n, r) => t.current?.noteReported(n, r),
    setStateClass: (n, r, i, s) => t.current?.setStateClass(n, r, i, s),
    rangesFor: (n, r) => t.current?.rangesFor(n, r) ?? [],
    hasReported: (n, r) => t.current?.hasReported(n, r) ?? !1
  }), []);
}
function Eo(e, t) {
  return `${e}:${t}`;
}
function r1(e, t) {
  H(() => {
    if (!e.hasNodes([gt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const n = /* @__PURE__ */ new Map();
    return et(Gf(e, gt, (r) => Di(r.getTypedIDs(), r.getTypedOnClicks(), r.getTypedOnRemoves(), r.getTypedOnMouseEnters(), r.getTypedOnMouseLeaves()), (r, i) => {
      const s = r.getTypedOnClicks(), o = r.getTypedOnRemoves(), a = r.getTypedOnMouseEnters(), c = r.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(r.getTypedIDs()))
        u.forEach((f) => {
          const d = s[l]?.[f], p = o[l]?.[f], h = a[l]?.[f], g = c[l]?.[f];
          i.addID(l, f, d, p, h, g);
        });
      r.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(gt, (r) => {
      e.getEditorState().read(() => {
        for (const [i, s] of r) {
          const o = X(i);
          let a = {};
          s === "destroyed" ? a = n.get(i) ?? {} : ue(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!gt.isReservedType(c))
              for (const u of l) {
                let f = t.get(Eo(c, u));
                a[c] = l, n.set(i, a), s === "destroyed" ? f !== void 0 && (f.delete(i), f.size === 0 && t.delete(Eo(c, u))) : (f === void 0 && (f = /* @__PURE__ */ new Set(), t.set(Eo(c, u), f)), f.has(i) || f.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const i1 = pi(function({ logger: t, viewOptions: n }, r) {
  const [i] = Ce(), s = ut(() => /* @__PURE__ */ new Map(), []);
  r1(i, s);
  const o = mx(i), a = (c, l, u) => {
    const f = Array.from(u ?? s.get(Eo(c, l)) ?? []);
    Xy(c, l, f);
    const d = [];
    for (const h of Array.from(o.keysFor(c, l))) {
      const g = X(h);
      if (!g)
        continue;
      const m = ei(g).filter((y) => y.type === c && y.id === l);
      dk(g, c, l) && d.push(...m.map((y) => $u(g, y)));
    }
    const p = tc(i, c, l);
    pk(i, c, l), d.length > 0 && p && f.length === 0 && !o.hasReported(c, l) && (o.noteReported(c, l), p.onRemove?.(c, l, "removed", d.join("")));
  };
  return wc(r, () => ({
    setAnnotation(c, l, u, f, d, p, h) {
      if (gt.isReservedType(l))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${l}'. Use the appropriate plugin instead.`);
      i.update(() => {
        const g = /* @__PURE__ */ new Map(), m = Zc(c, n, {
          forAnnotation: !0,
          decoratorHolds: g
        });
        if (m === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        a(l, u), o.noteSet(l, u), Id(m, l, u, f, d, p, h, { decoratorHolds: g });
      }, { tag: ku });
    },
    removeAnnotation(c, l) {
      if (gt.isReservedType(c))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${c}'. Use the appropriate plugin instead.`);
      const u = s.get(Eo(c, l));
      (u === void 0 || u.size === 0) && o.keysFor(c, l).size === 0 || i.update(() => {
        a(c, l, u);
      }, { tag: ku });
    },
    getAnnotationRanges(c, l) {
      return o.rangesFor(c, l);
    }
  })), null;
});
function s1({ dirtyElements: e, dirtyLeaves: t, prevEditorState: n, tags: r }, i) {
  return e.size === 0 && t.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
  // stack — its bytes really did change, so it must reach `onChange` like any edit.
  // Without this exemption the cached USJ and the emitted delta both keep showing the
  // pre-settle bytes, and the host saves a document the editor is no longer displaying.
  r.has(Ff) && !r.has(Ky) || i.ignoreTags.some((s) => r.has(s)) || n.isEmpty();
}
function o1(e, { dirtyLeaves: t, prevEditorState: n }) {
  let r = new Ts();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = X(i), o = s !== null && An(s) !== void 0;
    if (t.size === 1 && C(s) && !o && HE(s)) {
      const a = jd(s);
      if (a !== void 0) {
        const c = n.read(() => {
          const f = X(i);
          return new Ts([C(f) ? Bu(f) : { insert: "" }]);
        }), l = new Ts([Bu(s)]), u = new Ts(a > 0 ? [{ retain: a }] : []);
        r = r.concat(u).concat(c.diff(l));
      }
    } else {
      const a = dg(n), c = dg(e.getEditorState());
      r = a.diff(c);
    }
  }), r.ops;
}
function a1(e, t, n, r) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += c1(s, i, t, r);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        r?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      r?.debug(`Delete: ${s.delete}`), u1(i, s.delete, r);
    } else "insert" in s ? typeof s.insert == "string" ? (r?.debug(`Insert: '${s.insert}'`), i += f1(i, s.insert, s.attributes, t, r)) : typeof s.insert == "object" && s.insert !== null ? (r?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), p1(i, s, t, n, r) ? i += 1 : r?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : r?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : r?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function c1(e, t, n, r) {
  return typeof e.retain != "number" || e.retain < 0 ? (r?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (r?.debug(`Retain: ${e.retain}`), e.attributes && (r?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), l1(t, e.retain, e.attributes, n, r)), e.retain);
}
function l1(e, t, n, r, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(n)}`);
  let s = t, o = 0, a = -1;
  const c = Ee();
  function l(u) {
    if (s <= 0)
      return !0;
    if (zr(u)) {
      const f = u.getTextContentSize();
      if (e < o + f && o < e + t) {
        const d = Math.max(0, e - o), p = f - d, h = Math.min(s, p);
        if (h > 0) {
          let g = u;
          const m = d > 0, y = h < f - d;
          if (m && y) {
            const [, k] = u.splitText(d);
            [g] = k.splitText(h);
          } else m ? [, g] = u.splitText(d) : y && ([g] = u.splitText(h));
          if (ai(n)) {
            const k = g.getParent();
            if (U(k)) {
              const x = n.char;
              let A;
              Array.isArray(x) ? a >= 0 && a <= x.length - 1 && (A = x[a]) : a === 0 && (A = x);
              const _ = A ? Ui(A, k) : !1;
              if (_ && Array.isArray(x) && x.length > 1) {
                const j = Re("");
                g.replace(j);
                const $ = typeof n.segment == "string" ? n.segment : void 0, ne = Xs(x.slice(1), r, g, $);
                let fe = j;
                for (const I of ne)
                  fe.insertAfter(I), fe = I;
                j.remove(), Dn(n, g);
              } else if (_)
                Dn(n, g);
              else {
                g.remove();
                const j = Pg(g, n, r, i);
                if (j && j.length > 0) {
                  let $ = k;
                  for (const ne of j)
                    $.insertAfter(ne), $ = ne;
                }
              }
            } else {
              const x = Re("");
              g.replace(x);
              const A = Pg(g, n, r, i);
              if (A && A.length > 0) {
                let _ = x;
                for (const j of A)
                  _.insertAfter(j), _ = j;
                x.remove();
              } else
                x.replace(g);
            }
          } else
            Dn(n, g);
          s -= h;
        }
      }
      o += f;
    } else if (wn(u))
      e <= o && o < e + t && s > 0 && (wg(u, n), s -= 1), o += 1;
    else if (U(u)) {
      a += 1;
      let f = !1;
      if (e <= o && o < e + t && s > 0)
        if (ai(n)) {
          const d = n.char;
          let p;
          if (Array.isArray(d) ? a >= 0 && a <= d.length - 1 && (p = d[a]) : a === 0 && (p = d), p) {
            Gu(u, p.style), typeof p.cid == "string" && Ht(u, Ki, () => p.cid);
            const h = ht(p, oc);
            h && Object.keys(h).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...h
            }) : u.setUnknownAttributes(void 0);
          }
        } else (n.char === !1 || n.char === null || C1(n.char)) && (f = !0);
      if (s > 0) {
        const d = u.getChildren();
        for (const p of d) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return f && yu(u), !0;
        }
      }
      f && yu(u), a -= 1;
    } else if (mt(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const d = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!_t(u))
          wg(u, n);
        else if (up(n)) {
          const p = kx(n.para, r);
          p && u.replace(p, !0);
        }
        s -= d;
      }
      o += d;
    } else if (E(u)) {
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
function Pg(e, t, n, r) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Xs(t.char, n, e, i), o = s.find(U);
  if (!o) {
    r?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Dn(t, e);
    return;
  }
  const a = {};
  vx.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Dn(t, e), s;
}
function yx(e, t) {
  e.setMarker(t);
  const n = e.getFirstChild();
  w(n) ? (n.setMarker(t), n.setTextContent(Ve(t))) : Rt(n) && n.getTextType() === "marker" && n.setTextContent(Ve(t) + q);
}
function Gu(e, t) {
  const n = e.getMarker();
  if (e.setMarker(t), t === n)
    return;
  e.getChildren().forEach((o) => {
    w(o) && o.getMarker() === n && o.setMarker(t);
  });
  const r = U(e.getParent()), i = e.getFirstChild();
  Rt(i) && i.getTextType() === "marker" && i.getTextContent() === Ve(n, r) && i.setTextContent(Ve(t, r));
  const s = e.getLastChild();
  Rt(s) && s.getTextType() === "marker" && s.getTextContent() === st(n, r) && s.setTextContent(st(t, r));
}
function wg(e, t) {
  for (const n of Object.keys(t)) {
    const r = t[n];
    if (n === "char" && U(e) && ai(t)) {
      const i = Ju(r);
      if (Gu(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Ht(e, Ki, () => o);
      }
      const s = ht(i, oc);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof r == "string" && (ot(e) || Me(e) || Ke(e) || D(e) || Ze(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [n]: r
    }) : (Ie(e) || ye(e) || U(e)) && (n === "style" && ye(e) ? yx(e, r) : n === "style" && U(e) ? Gu(e, r) : n === "code" && Ie(e) ? e.setCode(r) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [n]: r
    })), n === "segment" && Ht(e, si, () => r));
  }
}
function u1(e, t, n) {
  if (t <= 0)
    return;
  const r = Ee();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (zr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, f = Math.min(s, u);
        f > 0 && (a.spliceText(l, f, ""), a.getTextContentSize() === 0 && a.remove(), n?.debug(`Deleted ${f} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= f, c -= f);
      }
      i += c;
    } else if (wn(a))
      e <= i && i < e + s ? (a.remove(), n?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (mt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && mt(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), n?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(zn(), !0), n?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && wt(p)) {
            let h = i + 1;
            const g = p.getChildren();
            for (const y of g) {
              if (s <= 0)
                break;
              const k = i;
              if (i = h, o(y)) {
                i = k;
                break;
              }
              zr(y) ? h += y.getTextContentSize() : wn(y) && (h += 1), i = k;
            }
            const m = p.getChildren();
            for (const y of m)
              y.remove(), a.append(y);
            p.remove(), n?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(zn(), !0);
        } else ye(a) ? a.replace(zn(), !0) : a.remove();
      }
      i += 1;
    } else if (E(a)) {
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
  o(r), s > 0 && n?.warn(`Delete operation could not remove all requested characters. Remaining to delete: ${s}. Original targetIndex: ${e}, OT length: ${t}. Final currentIndex: ${i}`);
}
function f1(e, t, n, r, i) {
  if (t === Vo)
    return Ng(e, n, r, i);
  if (t.endsWith(Vo) && !up(n)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (ai(n))
        throw new Error("Text + LF should not have char attributes");
      o += lc(e, s, n, i);
    }
    return o += Ng(e + o, n, r, i), o;
  } else return ai(n) ? d1(e, t, n, r, i) : lc(e, t, n, i);
}
function d1(e, t, n, r, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(n.char)} at index ${e}`);
  const s = Re(t === "" ? Pt : t);
  Dn(n, s);
  let o;
  {
    let m = function(y) {
      if (zr(y)) {
        const k = y.getTextContentSize();
        if (e >= g && e < g + k) {
          const x = y.getParent();
          return U(x) && (o = x), !0;
        }
        g += k;
      } else if (wn(y))
        g += 1;
      else if (U(y)) {
        const k = y.getChildren();
        for (const x of k)
          if (m(x))
            return !0;
      } else if (E(y)) {
        const k = y.getChildren();
        for (const x of k)
          if (m(x))
            return !0;
        mt(y) && (g += 1);
      }
      return !1;
    };
    const h = Ee();
    let g = 0;
    m(h);
  }
  let a = n.char;
  if (Array.isArray(a)) {
    if (o) {
      const h = a[0];
      h && Ui(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Ui(a, o) || (o = void 0));
  const c = typeof n.segment == "string" ? n.segment : void 0, u = Xs(a, r, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const f = u.find(U);
  if (!f)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(n.char)}. Falling back to rich text insertion.`), lc(e, t, void 0, i);
  const d = {};
  for (const [h, g] of Object.entries(n))
    h !== "char" && h !== "segment" && typeof g == "string" && (d[h] = g);
  Object.keys(d).length > 0 && f.setUnknownAttributes(d);
  let p = !0;
  for (const h of u)
    if (!bx(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), lc(e, t, void 0, i));
}
function lc(e, t, n, r) {
  if (t.length <= 0)
    return r?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Ee();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (zr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, f = Re(t);
        if (Dn(n, f), u === 0)
          c.insertBefore(f);
        else if (u === l) {
          const d = c.getParent();
          U(d) && !ai(n) ? d.insertAfter(f) : c.insertAfter(f);
        } else {
          const [, d] = c.splitText(u);
          d.insertBefore(f);
        }
        return r?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (wn(c))
      s += 1;
    else if (U(c)) {
      if (!o && e === s) {
        const f = Re(t);
        Dn(n, f);
        const d = c.getFirstChild();
        return d ? d.insertBefore(f) : c.append(f), r?.debug(`Inserted text "${t}" at beginning of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      const u = c.getChildren();
      for (const f of u) {
        if (a(f))
          return !0;
        if (o)
          break;
      }
      if (!o && e === s) {
        const f = Re(t);
        return Dn(n, f), c.append(f), r?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (mt(c)) {
      if (!o && e === s) {
        const f = Re(t);
        Dn(n, f);
        const d = c.getFirstChild();
        return d ? d.insertBefore(f) : c.append(f), r?.debug(`Inserted text "${t}" at beginning of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      const u = c.getChildren();
      for (const f of u) {
        if (a(f))
          return !0;
        if (o)
          break;
      }
      if (!o && e === s) {
        const f = Re(t);
        return Dn(n, f), c.append(f), r?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (E(c)) {
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
    r?.debug(`Insertion point matches end of document (targetIndex: ${e}, final currentIndex: ${s}). Appending text to new ParaNode.`);
    const c = Re(t);
    Dn(n, c);
    const l = zn().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (r?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function bx(e, t, n) {
  const r = Ee();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === r && e === 0 && !r.getFirstChild())
      return t.isInline() ? (n?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), r.append(zn().append(t))) : (n?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), r.append(t)), s = !0, !0;
    if (!E(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === r && t.isInline())
          if (wt(l)) {
            n?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            n?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(zn().append(t));
        else
          l.insertBefore(t), n?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (zr(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const f = e - i, [d] = l.splitText(f);
          return d.insertAfter(t), n?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${f}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (wn(l))
        i += 1;
      else if (U(l)) {
        if (o(l))
          return !0;
      } else if (mt(l)) {
        const u = l;
        if (o(u))
          return !0;
        const f = i;
        if (_t(u) && mt(t) && // Target is at the ImpliedPara's implicit newline
        e === f && !s)
          return n?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = f + 1, s = !0, !0;
        i += 1;
      } else if (E(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return E(a) && !s && (e === i || a === r && e > i) ? a === r ? (t.isInline() ? (n?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), r.append(zn().append(t))) : (n?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), r.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      wt(a) ? _t(a) && ye(t) && e === i ? (n?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !wt(t) ? (n?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (n?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (U(a) ? (n?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !wt(t) ? (n?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (n?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(r), s || n?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function p1(e, t, n, r, i) {
  let s;
  return Xr("chapter", t) ? s = g1(t.insert.chapter, n) : Xr("verse", t) ? s = m1(t.insert.verse, n) : Xr("ms", t) ? s = y1(t.insert.ms) : Xr("note", t) ? s = xx(t, n, r) : Xr("unknown", t) ? s = Tx(t, n, r, i) : Xr("unmatched", t) && (s = k1(t.insert.unmatched, n)), s ? bx(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Ng(e, t, n, r) {
  let i;
  up(t) ? i = kx(t.para, n) : T1(t) && (i = h1(t.book)), i ??= zn();
  const s = i, o = ye(s), a = _t(s);
  let c = 0, l = !1;
  function u(f) {
    if (l)
      return !0;
    if (zr(f)) {
      const d = f.getTextContentSize();
      if (e >= c && e <= c + d) {
        const p = f.getParent();
        if (ye(p) && (o || a)) {
          r?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const h = e - c, [g] = h > 0 ? f.splitText(h) : [void 0];
          let m, y = g?.getPreviousSibling();
          for (; y; ) {
            const k = y;
            y = y.getPreviousSibling(), m ? m.insertBefore(k) : s.append(k), m = k;
          }
          return g && s.append(g), p.insertBefore(s), l = !0, !0;
        }
      }
      c += d;
    } else if (wn(f))
      c += 1;
    else if (mt(f)) {
      const d = f.getChildren();
      for (const p of d) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (_t(f) && s)
          return r?.debug(`Replacing ImpliedParaNode (key: ${f.getKey()}) with ParaNode at targetIndex ${e}`), f.replace(s, !0), l = !0, !0;
        if (ye(f) && s) {
          const p = f;
          return r?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ye(f) && s)
        return r?.debug(`Creating new block node after existing ParaNode (marker: ${f.getMarker()}) at targetIndex ${e}`), f.insertAfter(s), l = !0, !0;
    } else if (E(f)) {
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
  return u(Ee()), l || r?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function h1(e) {
  const { style: t, code: n } = e;
  if (!t || t !== Fo || !n || !En.isValidBookCode(n))
    return;
  const r = ht(e, IE);
  return Ub(n, r);
}
function kx(e, t) {
  const { style: n } = e;
  if (!n)
    return;
  const r = ht(e, RE), i = $s(n, r);
  if (!rs(t))
    return i;
  if (t.markerMode === "editable")
    i.append($t(n), Bi());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Ve(n) + q;
    i.append(t.hasGutterParaMarkers ? gM(s) : Ur("marker", s));
  }
  return i;
}
function g1(e, t) {
  if (!e)
    return;
  const { number: n, sid: r, altnumber: i, pubnumber: s } = e;
  if (!n)
    return;
  const o = ht(e, LE);
  let a;
  if (t.markerMode === "editable")
    a = gb(n, r, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = bd(n, c, r, i, s, o);
  }
  return a;
}
function m1(e, t) {
  if (!e)
    return;
  const { style: n, number: r, sid: i, altnumber: s, pubnumber: o } = e;
  if (!r)
    return;
  const a = ht(e, qE);
  let c;
  if (t.markerMode === "editable") {
    if (!n)
      return;
    const l = Fn(n, r);
    c = sb(r, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Ud(r, l, i, s, o, a);
  }
  return c;
}
function y1(e) {
  if (!e)
    return;
  const { style: t, sid: n, eid: r, attributeOrder: i } = e;
  if (!t)
    return;
  const s = ht(e, DE);
  return zy(t, n, r, s, i);
}
function xx(e, t, n) {
  const r = e.insert;
  if (!r.note)
    return;
  const { style: i, caller: s, category: o, contents: a } = r.note;
  if (!i || s == null)
    return;
  const c = ht(r.note, KE), l = typeof c?.closed == "string" ? c.closed : void 0, u = e.attributes?.segment;
  let f;
  u && typeof u == "string" && (f = u);
  const d = [];
  for (const h of a?.ops ?? [])
    if (typeof h.insert == "string")
      if (ai(h.attributes)) {
        const g = Xs(h.attributes.char, t, Re(h.insert), void 0, Cx(h.attributes.char, d), !1, t.markerMode === "editable");
        d.push(...g);
      } else
        d.push(Re(h.insert));
  return nx(i, s, d, t, n, f, l).setCategory(o).setUnknownAttributes(c);
}
function Tx(e, t, n, r) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = ht(i, UE), l = od(s, o, c), u = a?.ops ?? [];
  u.length > 0 && b1(u, t, n, r).forEach((p) => l.append(p));
  const f = e.attributes?.segment;
  return typeof f == "string" && Ht(l, si, () => f), l;
}
function b1(e, t, n, r) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (ai(s.attributes)) {
        const o = Re(s.insert), a = Xs(s.attributes.char, t, o, void 0, Cx(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(Re(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Xr("unknown", s)) {
        const o = Tx(s, t, n, r);
        o && i.push(o);
        continue;
      }
      if (Xr("note", s)) {
        const o = xx(s, t, n);
        o && i.push(o);
        continue;
      }
      r?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function k1(e, t) {
  if (!e)
    return;
  const { marker: n } = e;
  if (!n)
    return;
  const r = Md(n);
  return t.markerMode === "editable" && r.setMode("normal"), r;
}
function Cx(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Ju(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Xs(e, t, n, r, i, s = !1, o = !1) {
  C(n) && n.getTextContentSize() === 0 && n.setTextContent(Pt);
  const a = () => {
    o && C(n) && n.getTextContent() !== Pt && n.setTextContent(q + n.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Ju), l = c[0], u = i?.[i.length - 1];
    if (U(u) && Ui(l, u)) {
      if (c.length > 1) {
        const d = Xs(c.slice(1), t, n, void 0, void 0, !0, o);
        Gl(u, d);
      } else
        n && Gl(u, [n]);
      return [];
    }
    a();
    const f = c.reduceRight((d, p, h) => {
      const g = Kr(p.style, ht(p, oc));
      return typeof p.cid == "string" && Ht(g, Ki, () => p.cid), r && h === c.length - 1 && Ht(g, si, () => r), d && (U(d) && (Yl(d.getMarker(), d, t, !0), Jl(d, d, t, !0)), g.append(d)), g;
    }, n);
    return Yl(l.style, f, t, s), Jl(f, f, t, s), [f];
  } else {
    const c = Ju(e), l = i?.[i.length - 1];
    if (U(l) && Ui(c, l))
      return n && Gl(l, [n]), [];
    a();
    const u = Kr(c.style, ht(c, oc));
    return typeof c.cid == "string" && Ht(u, Ki, () => c.cid), r && Ht(u, si, () => r), n && u.append(n), Yl(c.style, u, t, s), Jl(u, u, t, s), [u];
  }
}
function Gl(e, t) {
  const n = e.getLastChild();
  w(n) && n.getMarkerSyntax() === "closing" || Rt(n) && n.getTextType() === "marker" && n.getTextContent() === st(e.getMarker(), U(e.getParent())) ? t.forEach((i) => n.insertBefore(i)) : e.append(...t);
}
function Jl(e, t, n, r = !1) {
  e.getUnknownAttributes()?.closed !== "false" && x1(e.getMarker(), t, n, !1, r);
}
function Yl(e, t, n, r = !1) {
  let i;
  if (n?.markerMode === "editable" ? i = $t(e, "opening", r) : n?.markerMode === "visible" && (i = Ur("marker", Ve(e, r))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function x1(e, t, n, r = !1, i = !1) {
  let s;
  n?.markerMode === "editable" ? r ? s = $t("", "selfClosing") : s = $t(e, "closing", i) : n?.markerMode === "visible" && (s = Ur("marker", r ? st("") : st(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function T1(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function up(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function ai(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function C1(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Dn(e, t) {
  if (e)
    for (const n of Object.keys(e)) {
      if (n === "segment" && typeof e[n] == "string") {
        const r = e[n];
        Ht(t, si, () => r);
        continue;
      }
      if (v1(n)) {
        const r = !!e[n], i = n, s = t.hasFormat(i);
        (r && !s || !r && s) && t.toggleFormat(i);
      }
    }
}
const vx = [
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
function v1(e) {
  return vx.includes(e);
}
function Ds(e) {
  return Rt(e) && Ie(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function Sx(e) {
  const t = ua(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function fp(e) {
  if (e.isCollapsed())
    return !1;
  const t = e.isBackward() ? e.focus : e.anchor, n = t.getNode();
  if (!(Mn(n) && t.offset === 0 || Ie(n.getTopLevelElement())))
    return !1;
  const i = e.getNodes().find(Ds);
  if (!i)
    return !1;
  const s = i.getParent();
  if (!Ie(s))
    return !1;
  const o = Sx(s);
  return t.set(o.key, o.offset, o.type), !0;
}
function Ka(e) {
  const t = N();
  if (!M(t))
    return !1;
  if (t.isCollapsed()) {
    const { anchor: n } = t;
    if (n.type === "text") {
      const i = n.getNode();
      if (!(e ? n.offset === 0 : C(i) && n.offset === i.getTextContentSize()))
        return !1;
    }
    const r = e ? Vb(t) : Td(t);
    return Ds(r);
  }
  return fp(t) && t.isCollapsed();
}
function S1(e) {
  const t = N();
  if (!M(t) || !t.isCollapsed())
    return !1;
  const n = Qe(t.anchor.getNode(), Ie);
  if (!n || !Ds(n.getFirstChild()))
    return !1;
  if (t.modify("extend", e, "lineboundary"), t.isCollapsed())
    return Ka(e) || t.deleteCharacter(e), !0;
  if (t.getNodes().some(Ds)) {
    const r = Sx(n);
    t.focus.set(r.key, r.offset, r.type);
  }
  return t.isCollapsed() || t.removeText(), !0;
}
function Ma() {
  const e = N();
  return M(e) && fp(e), !1;
}
function _1() {
  const e = N();
  if (!M(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const n = t.getNode();
  return !Ie(n) || !Ds(n.getFirstChild()) ? !1 : (sr(n, 1), !0);
}
function M1(e) {
  const t = e.getChildren(), n = `\\${e.getMarker()}`, r = t.findIndex((s) => gn(s) && s.getTextContent().startsWith(n));
  if (r <= 0)
    return;
  let i = t[r];
  for (const s of t.slice(0, r))
    i.insertAfter(s), i = s;
}
function E1() {
  const [e] = Ce();
  return H(() => e.registerCommand(Rc, (t) => (A1(t), !1), Li), [e]), H(() => et(
    e.registerCommand(Ic, Ka, Ge),
    e.registerCommand(zf, Ka, Ge),
    e.registerCommand(Va, Ka, Ge),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(Va, S1, kr),
    // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
    // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
    // too, so this must match the top priority to have any guarantee of running before them —
    // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
    // not control. Always returns `false` (never claims the command), so running before or after
    // another CRITICAL handler that also returns `false` changes nothing either way; it only
    // matters relative to a handler that would itself remove the prefix.
    e.registerCommand(ra, Ma, He),
    e.registerCommand(Zn, Ma, He),
    e.registerCommand(rr, Ma, He),
    // REMOVE_TEXT_COMMAND is how drag-move deletion and composition-driven deletes reach a
    // non-collapsed selection — neither goes through DELETE_CHARACTER_COMMAND — so it needs the
    // same narrowing the other three selection-replacing commands get above.
    e.registerCommand(ky, Ma, He)
  ), [e]), H(() => et(
    // Below `DecoratorBoundarySelectionPlugin` (CRITICAL), which can itself produce `(book, 0)`
    // when it snaps a caret that landed inside the prefix glyph to the glyph's leading edge; above
    // the listeners that report the caret's position (e.g. `OnSelectionChangePlugin`, LOW), so
    // they only ever see the corrected one. Never claims the command.
    e.registerCommand(hn, () => (_1(), !1), Ge),
    e.registerNodeTransform(En, M1)
  ), [e]), null;
}
function A1(e) {
  if (P1(e.target))
    return;
  const t = N();
  M(t) && w1(t);
}
function Qs(e) {
  let t = e.getFirstChild(), n = 0;
  for (; t !== null; )
    if (mn(t))
      n++, t = t.getNextSibling(), C(t) && t.getTextContent() === q && (n++, t = t.getNextSibling());
    else if (Me(t))
      n++, t = t.getNextSibling();
    else
      break;
  return n === 0 ? !1 : (sr(e, n), !0);
}
function P1(e) {
  if (!xy(e))
    return !1;
  const t = Ji(e);
  if (!mM(t))
    return !1;
  const n = t.getParent();
  return n ? wt(n) ? Qs(n) : (sr(n, t.getIndexWithinParent() + 1), !0) : !1;
}
function w1(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const n = X(t.key);
  if (!mt(n))
    return !1;
  const r = n.getFirstChild();
  return !gn(r) && !Ar(r) ? !1 : Qs(n);
}
function N1() {
  const [e] = Ce();
  return H(() => {
    const t = (n) => n instanceof KeyboardEvent && !O1(n) || !il() ? !1 : (n instanceof Event && n.preventDefault(), !0);
    return et(
      e.registerCommand(_r, t, Ge),
      e.registerCommand(ra, t, Ge),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(Zn, t, He),
      e.registerCommand(rr, t, He),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(jf, (n) => {
        if (!(n instanceof Event) || !(n.target instanceof Node))
          return !1;
        const r = Ji(n.target);
        return !r || !ci(r) ? !1 : (n.preventDefault(), !0);
      }, Ge),
      e.registerCommand(Ic, t, Ge),
      e.registerCommand(zf, t, Ge),
      e.registerCommand(Va, t, Ge)
    );
  }, [e]), null;
}
function O1(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function ci(e) {
  return Qe(e, dp) ?? void 0;
}
function dp(e) {
  return Ze(e) || kb(e);
}
function il() {
  const e = N();
  return M(e) ? ci(e.anchor.getNode()) !== void 0 || ci(e.focus.getNode()) !== void 0 : !1;
}
function $1(e, t, n) {
  if (e.height === 0)
    return !1;
  const r = e.height / 4;
  return t.some((i) => n === "down" ? i.top >= e.bottom - r : i.bottom <= e.top + r);
}
function R1(e, t) {
  if (typeof window > "u")
    return !1;
  const n = window.getSelection();
  if (!n || n.rangeCount === 0)
    return !1;
  const r = e.getRootElement();
  if (!r)
    return !1;
  try {
    const i = n.getRangeAt(0);
    if (!r.contains(i.startContainer))
      return !1;
    const s = i.getBoundingClientRect(), o = i.cloneRange();
    o.collapse(!0);
    const a = Array.from(r.querySelectorAll('[data-marker="v"]'));
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(r, r.childNodes.length), $1(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function I1(e, t, n, r) {
  if (!J1(t) || R1(e, n))
    return !1;
  const i = n === "up" ? $E(t) : OE(t);
  return i && r.preventDefault(), i;
}
function L1({ viewOptions: e }) {
  const [t] = Ce();
  return q1(t, e), null;
}
function q1(e, t) {
  H(() => {
    if (!e.hasNodes([Ln, Gt, tt]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const n = (r) => {
      const i = N();
      if (!M(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (r.key === "ArrowLeft" || r.key === "ArrowRight") && r.shiftKey && !r.altKey && !r.ctrlKey && !r.metaKey) {
        const u = Og(o), f = j1(i, $g(u, r.key) ? "next" : "previous");
        return f && r.preventDefault(), f;
      }
      if (!i.isCollapsed())
        return !1;
      if (r.key === "ArrowUp" || r.key === "ArrowDown") {
        if (r.shiftKey || r.altKey || r.ctrlKey || r.metaKey)
          return !1;
        const u = r.key === "ArrowUp" ? "up" : "down";
        return I1(e, i, u, r);
      }
      if (r.key !== "ArrowLeft" && r.key !== "ArrowRight" || !o)
        return !1;
      const a = Og(o), c = r.shiftKey || r.altKey || r.ctrlKey || r.metaKey;
      let l = !1;
      return $g(a, r.key) ? l = !c && Lg(i, "next") || !c && K1(i) || H1(i) || !c && s && Ig(i, "next") : D1(a, r.key) && (l = !c && Lg(i, "previous") || !c && U1(i) || G1(i, t) || !c && s && Ig(i, "previous")), l && r.preventDefault(), l;
    };
    return e.registerCommand(_r, n, Ge);
  }, [e, t]);
}
function Og(e) {
  return e.dir || "ltr";
}
function $g(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function D1(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Yu(e) {
  if (!U(e) || e.getMarker() !== "fp")
    return;
  const t = An(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function K1(e) {
  const t = Yu(Td(e));
  if (!t)
    return !1;
  const n = e.anchor;
  return n.type === "text" && n.offset !== n.getNode().getTextContentSize() ? !1 : (sr(t, 0), !0);
}
function U1(e) {
  const t = e.anchor, n = t.getNode();
  if (t.type === "text") {
    const r = Yu(n.getParent());
    return !r || !n.is(r.getFirstChild()) ? !1 : t.offset === 1 ? (n.select(0, 0), !0) : t.offset !== 0 ? !1 : Rg(r);
  }
  if (t.offset === 0) {
    const r = Yu(n);
    return r ? Rg(r) : !1;
  }
  return !1;
}
function Rg(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (C(t))
    return t.select(), !0;
  if (E(t)) {
    const i = t.getLastDescendant();
    return C(i) ? i.select() : t.selectEnd(), !0;
  }
  const n = e.getParent();
  if (!n)
    return !1;
  const r = e.getIndexWithinParent();
  return n.select(r, r), !0;
}
const uc = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function B1(e) {
  if (uc)
    for (const { segment: n } of uc.segment(e))
      return n.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function F1(e) {
  if (uc) {
    let r = 0;
    for (const { index: i } of uc.segment(e))
      r = i;
    return r;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), n = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (n ? 2 : 1));
}
function _x(e) {
  for (let t = e; t; t = t.getParent())
    if (E(t) && !t.isInline())
      return t;
}
function Mx(e) {
  return !!e && w(e) && ci(e) !== void 0;
}
function Ks(e) {
  return C(e) && !e.isToken() && !Mx(e) && e.getTextContentSize() > 0;
}
function Ex(e) {
  return Gi(e) ? !0 : D(e) ? e.getIsCollapsed() === !0 : C(e) ? (e.isToken() || Mx(e)) && e.getTextContentSize() > 0 : yn(e) ? !Ke(e) : !1;
}
function Us(e, t, n) {
  for (let r = e; r && !r.is(n); ) {
    const i = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (i)
      return i;
    r = r.getParent();
  }
}
function sl(e, t, n) {
  for (let r = e; r; ) {
    if (Ex(r))
      return r;
    if (E(r)) {
      r = (t === "next" ? r.getFirstChild() : r.getLastChild()) ?? Us(r, t, n);
      continue;
    }
    if (Ks(r))
      return r;
    r = Us(r, t, n);
  }
}
function pp(e, t, n, r, i) {
  return n === "element" && E(e) ? e.getChildAtIndex(r === "next" ? t : t - 1) ?? Us(e, r, i) : n === "text" && Ex(e) && (r === "next" ? t < e.getTextContentSize() : t > 0) ? e : Us(e, r, i);
}
function Xl(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const n = pp(e.node, e.offset, e.kind, "previous", t), r = sl(n, "previous", t);
  if (!r)
    return e;
  if (Ks(r))
    return { kind: "text", node: r, offset: r.getTextContentSize() };
  const i = r.getParent();
  return i ? { kind: "element", node: i, offset: r.getIndexWithinParent() + 1 } : e;
}
function z1(e, t) {
  const n = e.getNode(), r = _x(n);
  if (!r)
    return;
  if (e.type === "text" && Ks(n)) {
    if (t === "next" && e.offset < n.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return Xl({ kind: "text", node: n, offset: 0 }, r);
  }
  const i = pp(n, e.offset, e.type, t, r), s = sl(i, t, r);
  if (!s)
    return;
  if (Ks(s)) {
    const c = s.getTextContent(), l = t === "next" ? B1(c) : F1(c);
    return Xl({ kind: "text", node: s, offset: l }, r);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return Xl({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, r);
}
function Ax(e, t, n) {
  const r = n === "collapse" ? e.anchor : e.focus, i = z1(r, t);
  return !i || i.node.is(r.getNode()) && i.offset === r.offset && i.kind === r.type ? !1 : n === "collapse" ? (i.kind === "element" && E(i.node) ? ap(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Ig(e, t) {
  return Ax(e, t, "collapse");
}
function j1(e, t) {
  return Ax(e, t, "extend");
}
function V1(e, t, n) {
  const r = e.getNode();
  if (e.type === "text" && Ks(r) && (t === "next" ? e.offset < r.getTextContentSize() : e.offset > 0))
    return !1;
  const i = pp(r, e.offset, e.type, t, n);
  return sl(i, t, n) === void 0;
}
function W1(e, t) {
  const n = Ee();
  for (let r = e; r; ) {
    const i = Us(r, t, n), s = i && sl(i, t, n);
    if (!s)
      return;
    if (r = ci(s), !r)
      return s;
  }
}
function Lg(e, t) {
  const n = e.anchor, r = n.getNode();
  if (ci(r))
    return !1;
  const i = _x(r);
  if (!i || !V1(n, t, i))
    return !1;
  const s = Us(i, t, Ee()), o = s && ci(s);
  if (!o)
    return !1;
  const a = W1(o, t);
  if (!a)
    return !0;
  if (Ks(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function qg(e) {
  const t = e.getParent();
  if (!t)
    return;
  const n = e.getIndexWithinParent() + 1;
  ap(t, n);
}
function H1(e) {
  const t = e.anchor.getNode(), n = Td(e);
  if (D(n) && !w(n.getFirstChild())) {
    if (mt(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (n.getIsCollapsed()) {
      if (n.is(n.getParent()?.getLastChild())) {
        const i = n.getParent()?.getNextSibling();
        return i && !(wt(i) && Qs(i)) && i.selectStart(), !0;
      }
    } else return Rt(n.getFirstChild()) ? n.select(2, 2) : n.select(1, 1), !0;
  }
  if (mt(t) && D(n) && n.getIsCollapsed()) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : qg(n), !0;
  }
  const r = n?.getParent();
  if (Rt(n) && D(r) && n.is(r?.getLastChild())) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : r.getIsCollapsed() ? qg(r) : r.selectEnd(), !0;
  }
  return !1;
}
function G1(e, t) {
  const n = Vb(e);
  if (Wr(n) && !n.getPreviousSibling())
    return !0;
  const { anchor: r } = e;
  if ((r.type === "element" || r.offset === 0) && Ds(n))
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const s = e.anchor.getNode(), o = s.getParent();
  if (Ie(o) && !n)
    return !0;
  if (D(n) && n.getIsCollapsed()) {
    const c = n.getPreviousSibling();
    if (!Ar(c) && !Ie(n.getParent()))
      return !1;
    const l = n.getParent();
    if (!l)
      return !1;
    const u = n.getIndexWithinParent();
    return l.select(u, u), !0;
  }
  if (mt(n) && t?.noteMode === "collapsed") {
    const c = n.getLastChild();
    if (!c)
      return !1;
    const l = Qe(c, (u) => D(u));
    if (D(l) && l.getIsCollapsed()) {
      const u = l.getParent();
      if (!u)
        return !1;
      const f = l.getIndexWithinParent();
      return u.select(f, f), !0;
    }
  }
  const a = An(s);
  if (!a || a.getIsCollapsed())
    return !1;
  if (Lt(n)) {
    const c = a.getParent();
    if (!c)
      return !1;
    const l = a.getIndexWithinParent();
    return c.select(l, l), !0;
  }
  return !1;
}
function J1(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return Me(t) && yn(t);
}
function Y1() {
  const [e] = Ce();
  return X1(e), null;
}
function X1(e) {
  H(() => {
    if (!e.hasNodes([ze]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return et(
      e.registerNodeTransform(ze, ew),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(ze, oM),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(ze, Mb),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(ze, (t) => jo(Br("char"), t)),
      e.registerNodeTransform(it, tw)
    );
  }, [e]);
}
function Ua(e) {
  return e.getChildren().some(w);
}
function Q1(e, t) {
  const n = t.getFirstChild();
  if (!w(n) || n.getMarkerSyntax() !== "opening")
    return !1;
  const r = n.getNextSibling();
  if (jr(r)) {
    const i = r.getTextContent();
    i.startsWith(q) && (i === q ? r.remove() : r.setTextContent(i.slice(q.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function Z1(e, t) {
  const n = t.getLastChild(), r = e.getChildren();
  w(n) && n.getMarkerSyntax() === "closing" ? r.forEach((i) => n.insertBefore(i)) : t.append(...r), e.remove();
}
function ew(e) {
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
  const n = de(e, Ki), r = e.getUnknownAttributes(), i = e.getNextSibling();
  if (U(i) && Ui({ style: t, cid: n }, i) && yr(r, i.getUnknownAttributes()))
    if (Ua(i)) {
      if (Q1(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  U(s) && Ui({ style: t, cid: n }, s) && yr(r, s.getUnknownAttributes()) && (Ua(s) ? Z1(e, s) : (s.append(...e.getChildren()), e.remove()));
}
const Px = /* @__PURE__ */ new WeakSet();
function tw(e) {
  const t = e.getParent();
  if (!U(t) || Ua(t) || Px.has(e))
    return;
  const n = e.getTextContent();
  if (n.length < 2 || !n.includes(Pt))
    return;
  const r = rw(t.getKey());
  if (r === void 0) {
    t.getChildrenSize() === 1 && n.startsWith(Pt) && Dg(e, 0);
    return;
  }
  if (r !== e.getKey())
    return;
  const i = nw(e, n);
  i !== void 0 && Dg(e, i);
}
function nw(e, t) {
  const n = N();
  if (M(n) && n.isCollapsed() && n.anchor.key === e.getKey()) {
    const { offset: r } = n.anchor;
    if (r === t.length && t.startsWith(Pt))
      return 0;
    if (t[r] === Pt)
      return r;
  }
  if (t.startsWith(Pt))
    return 0;
  if (t.endsWith(Pt))
    return t.length - 1;
}
function Dg(e, t) {
  const n = N(), r = M(n) ? [n.anchor, n.focus].filter((a) => a.type === "text" && a.key === e.getKey()) : [], i = r.map((a) => a.offset), s = e.getTextContent(), o = e.setTextContent(s.slice(0, t) + s.slice(t + 1));
  Px.add(o), r.forEach((a, c) => {
    const l = i[c];
    a.set(o.getKey(), l > t ? l - 1 : l, "text");
  });
}
function rw(e) {
  return Ut().getEditorState().read(() => {
    const t = X(e);
    if (!U(t))
      return;
    const n = t.getChildren().filter((i) => !yn(i)), [r] = n;
    return n.length === 1 && C(r) && r.getTextContent() === Pt ? r.getKey() : null;
  });
}
function wx(e) {
  return e.replaceAll("	", " ");
}
function Nx() {
  const e = N();
  return !!e && !e.isCollapsed();
}
function Ox(e) {
  const t = () => !Nx();
  return et(e.registerCommand(Ns, t, Xt), e.registerCommand(rr, t, Xt));
}
const hp = (e) => {
  e.dispatchCommand(Ns, null);
}, gp = (e) => {
  e.dispatchCommand(rr, null);
}, mp = (e) => {
  navigator.clipboard.read().then(async (t) => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), i = t[0];
    for (const o of i.types) {
      const a = await (await i.getType(o)).text();
      r.setData(o, wx(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(Zn, s);
  });
}, yp = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const n = new DataTransfer(), r = await navigator.clipboard.readText();
    n.setData("text/plain", wx(r));
    const i = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(Zn, i);
  });
};
function iw() {
  const [e] = Ce();
  return H(() => {
    const t = (n) => {
      const { key: r, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = n;
      !(Os ? s : o) || a || (!i && r.toLowerCase() === "c" ? (n.preventDefault(), hp(e)) : !i && r.toLowerCase() === "x" ? (n.preventDefault(), gp(e)) : r.toLowerCase() === "v" && (n.preventDefault(), i ? yp(e) : mp(e)));
    };
    return et(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      Ox(e),
      e.registerRootListener((n, r) => {
        r !== null && r.removeEventListener("keydown", t), n !== null && n.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function sw({ logger: e }) {
  const [t] = Ce();
  return H(() => et(
    // When the backslash or forward slash key is typed.
    t.registerCommand(_r, (n) => n.key !== "\\" && n.key !== "/" ? !1 : (n.preventDefault(), !0), kr),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(Zn, (n) => {
      const r = n.clipboardData?.getData("text/plain");
      return !r || !r.includes("\\") && !r.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), n.preventDefault(), !0);
    }, kr),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(jf, (n) => {
      const r = n.dataTransfer?.getData("text/plain");
      return !r || !r.includes("\\") && !r.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), n.preventDefault(), !0);
    }, kr)
  ), [t, e]), null;
}
const fc = "editor-context-menu";
function Xu(e) {
  return `${fc}-item-${e}`;
}
const ow = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function aw({ index: e, isSelected: t, onClick: n, onMouseMove: r, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), P("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: Xu(e), onMouseMove: r, onClick: i.isDisabled ? void 0 : n, children: P("span", { className: "text", children: i.title }) });
}
function cw({ options: e, selectedItemIndex: t, onOptionClick: n, onOptionMouseMove: r }) {
  return P("div", { className: "typeahead-popover", children: P("ul", { id: fc, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => P(aw, { index: s, isSelected: t === s, onClick: () => n(i, s), onMouseMove: () => r(s), option: i }, `${s}-${i.title}`)) }) });
}
let lw = 0;
class co {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, n) {
    this.key = `context-menu-option-${lw++}`, this.title = t, this.onSelect = n.onSelect.bind(this), this.isDisabled = n.isDisabled || !1;
  }
}
function uw({ options: e } = {}) {
  const [t] = Ce(), [n, r] = Ae(() => !t.isEditable()), [i, s] = Ae({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = Ae(void 0), c = ut(() => {
    const d = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new co("Cut", {
        onSelect: () => {
          gp(t);
        },
        isDisabled: n
      }),
      new co("Copy", {
        onSelect: () => {
          hp(t);
        }
      }),
      new co("Paste", {
        onSelect: () => {
          mp(t);
        },
        isDisabled: n
      }),
      new co("Paste as Plain Text", {
        onSelect: () => {
          yp(t);
        },
        isDisabled: n
      })
    ], p = (e ?? []).map((h) => new co(h.title, { onSelect: h.onSelect, isDisabled: h.isDisabled }));
    return [...d, ...p];
  }, [t, n, e]), l = te(null), u = te(null), f = _e(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  return H(() => Ox(t), [t]), H(() => {
    const d = (p) => {
      const h = p.target;
      t.getRootElement() === h || Db(h) || (p.preventDefault(), u.current = document.activeElement, s({ isOpen: !0, x: p.clientX, y: p.clientY }), a(void 0));
    };
    return t.registerRootListener((p, h) => {
      h?.removeEventListener("contextmenu", d), p && p.addEventListener("contextmenu", d);
    });
  }, [t]), H(() => {
    if (!i.isOpen)
      return;
    const d = (p) => {
      const h = p.target;
      h instanceof Node && l.current?.contains(h) || f();
    };
    return globalThis.addEventListener("scroll", d, !0), () => globalThis.removeEventListener("scroll", d, !0);
  }, [i.isOpen, f]), H(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      f();
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [i.isOpen, f]), H(() => {
    if (!i.isOpen)
      return;
    const d = (p) => {
      if (p.isComposing || p.keyCode === 229)
        return;
      if (p.key === "Escape") {
        p.preventDefault(), f();
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
          }), f());
        } else {
          if (ow.has(p.key))
            return;
          p.preventDefault(), p.stopPropagation();
        }
    };
    return document.addEventListener("keydown", d, !0), () => document.removeEventListener("keydown", d, !0);
  }, [i.isOpen, f, c, o, t]), H(() => {
    if (!i.isOpen)
      return;
    const d = t.getRootElement();
    if (d)
      return d.setAttribute("aria-controls", fc), () => {
        d.removeAttribute("aria-controls"), d.removeAttribute("aria-activedescendant");
      };
  }, [t, i.isOpen]), H(() => {
    if (!i.isOpen)
      return;
    const d = t.getRootElement();
    if (!d)
      return;
    if (o === void 0) {
      d.removeAttribute("aria-activedescendant");
      return;
    }
    d.setAttribute("aria-activedescendant", Xu(o));
    const p = document.getElementById(fc), h = document.getElementById(Xu(o));
    if (!p || !h)
      return;
    const g = p.getBoundingClientRect(), m = h.getBoundingClientRect(), y = m.top - g.top + p.scrollTop, k = m.bottom - g.top + p.scrollTop;
    y < p.scrollTop ? p.scrollTop = y : k > p.scrollTop + p.clientHeight && (p.scrollTop = k - p.clientHeight);
  }, [t, i.isOpen, o]), H(() => t.registerEditableListener((d) => {
    r(!d);
  }), [t]), js(() => {
    const d = l.current;
    if (!d)
      return;
    const { width: p, height: h } = d.getBoundingClientRect(), g = Math.max(0, Math.min(i.x, globalThis.innerWidth - p)), m = Math.max(0, Math.min(i.y, globalThis.innerHeight - h));
    d.style.left = `${g}px`, d.style.top = `${m}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? NS.createPortal(P("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: P(cw, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), f());
  }, onOptionMouseMove: (d) => {
    a((p) => p === d ? p : d);
  } }) }), document.body) : null;
}
function fw(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function dw(e) {
  if (!dS(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function pw(e) {
  return Lt(e);
}
function Ql(e, t, n) {
  const r = Ji(t.node);
  if (!yn(r) || pw(r))
    return;
  const i = e.getElementByKey(r.getKey());
  if (!i || i === t.node || !i.contains(t.node))
    return;
  const s = i.parentNode;
  if (!s)
    return;
  const o = Array.prototype.indexOf.call(s.childNodes, i);
  if (!(o < 0))
    return { node: s, offset: n === "before" ? o : o + 1 };
}
function hw(e, t) {
  if (N())
    return !1;
  const n = e.getRootElement(), r = fS(n?.ownerDocument.defaultView ?? null);
  if (!r || r.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = r;
  if (!i || !o || !Ty(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, f;
  if (r.isCollapsed)
    u = Ql(e, c, dw(c)), f = u;
  else {
    const m = fw(r.getRangeAt(0), c);
    u = Ql(e, c, m ? "before" : "after"), f = Ql(e, l, m ? "after" : "before");
  }
  if (!u && !f)
    return !1;
  const d = u ?? c, p = f ?? l, h = {
    anchorNode: d.node,
    anchorOffset: d.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = Cy(h, e);
  return g ? (Un(g), g.dirty = !t, t) : !1;
}
function gw() {
  const [e] = Ce(), t = te(!1), n = te(!1);
  return H(() => {
    const r = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, n.current && (n.current = !1, e.update(() => {
        const s = N();
        M(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", r, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, n.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", r, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), H(() => e.registerCommand(hn, () => (hw(e, t.current) && (n.current = !0), !1), He), [e]), null;
}
function mw() {
  const [e] = Ce();
  return H(() => e.registerCommand(_r, (t) => {
    const { key: n, shiftKey: r, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Os ? i : s) || o)
      return !1;
    const a = n.toLowerCase();
    return !(a === "z" && !r) && !(a === "y" || a === "z" && r) ? !1 : (t.preventDefault(), !0);
  }, He), [e]), null;
}
function yw({ isEditable: e }) {
  const [t] = Ce();
  return js(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Kg(e) {
  return !!e && la(X(e));
}
function bp(e) {
  const [t] = Ce(), n = te(void 0), r = _e((i) => {
    let s = !1;
    const o = N(), a = M(o) && o.isCollapsed() ? o.anchor.key : void 0, c = n.current, l = Kg(c);
    c && !l && (n.current = void 0);
    let u;
    if (i) {
      const f = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, p = ua(f, d), h = la(p) ? p : void 0;
      if (h)
        n.current = h.getKey(), u = h.getKey();
      else {
        const g = e0();
        i.insertAfter(g), n.current = g.getKey(), u = g.getKey(), s = !0;
      }
      sr(f, d);
    }
    if (c && l && c !== a && c !== u) {
      const f = X(c);
      C(f) && (f.remove(), s = !0), n.current === c && (n.current = void 0);
    }
    return s;
  }, []);
  return H(() => {
    const i = () => {
      const a = e(), c = N(), l = M(c) && c.isCollapsed() ? c.anchor.key : void 0, u = n.current;
      (a || u && u !== l) && r(a) && jt(Oi);
    }, s = (a) => {
      if (a.getKey() !== n.current)
        return;
      const c = a.getTextContent();
      if (Zi(c) || !c.includes(Rs))
        return;
      const l = N(), u = M(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (t0(a), n.current = void 0, u !== void 0) {
        const f = c.slice(0, u).split(Rs).length - 1, d = Math.max(0, u - f);
        a.select(d, d);
      }
    }, o = et(t.registerCommand(hn, () => (i(), !1), Li), t.registerCommand(Vf, () => {
      const a = n.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Kg(a);
      }), c && t.update(() => {
        const l = X(a);
        C(l) && (l.remove(), jt(Oi));
      }), n.current = void 0, !1;
    }, Li), t.registerNodeTransform(it, s));
    return () => {
      o(), n.current = void 0;
    };
  }, [t, e, r]), r;
}
function bw() {
  const e = N();
  if (!M(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, n = t.getNode(), r = D(n) ? n : n.getParent();
  if (!D(r))
    return;
  const i = uP(r);
  if (i === void 0)
    return;
  let s = r.getChildAtIndex(i - 1);
  for (; s && la(s); )
    s = s.getPreviousSibling();
  if (!s || C(s) && s.isSimpleText())
    return;
  const o = s.getIndexWithinParent() + 1;
  if (n.is(r))
    return t.offset >= o && t.offset <= i ? s : void 0;
  if (n.is(s))
    return C(s) && t.offset === s.getTextContentSize() ? s : void 0;
  const a = n.getIndexWithinParent();
  return a >= o && a <= i && t.offset === 0 ? s : void 0;
}
function kw() {
  return bp(bw), null;
}
function $x(e) {
  const t = e.getRootElement();
  return !!t && t.contains(t.ownerDocument.activeElement);
}
function bo(e, ...t) {
  const n = e.registerUpdateListener(({ tags: r }) => {
    n();
    for (const i of t)
      r.delete(i);
  });
  return n;
}
function Zl(e) {
  const t = e.getRootElement(), n = t?.ownerDocument.defaultView?.getSelection();
  if (!t || !n?.anchorNode || !t.contains(n.anchorNode))
    return;
  e.getEditorState().read(() => {
    const i = N();
    if (!M(i))
      return !1;
    const s = Cy(n, e);
    return !!s && i.is(s);
  }, { editor: e }) || n.removeAllRanges();
}
function ms(e, t) {
  let n;
  try {
    n = Ut();
  } catch {
  }
  return n === e ? t() : e.read(t);
}
function xw() {
  const e = N();
  if (!M(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const n = t.getNode();
  if (!E(n))
    return;
  const r = n.getChildren(), i = r[t.offset - 1];
  if (!Me(i) || ua(n, t.offset))
    return;
  const s = r[t.offset];
  if (s === void 0 || Me(s))
    return i;
}
function Tw() {
  return bp(xw), null;
}
function Cw({ scripture: e, scriptureRef: t, nodeOptions: n, editorAdaptor: r, viewOptions: i, logger: s }) {
  const [o] = Ce();
  return H(() => {
    r.initialize?.(n, s);
  }, [r, s, n]), H(() => {
    const a = t?.current ?? e;
    r.reset?.();
    const c = r.serializeEditorState(a, i);
    if (c == null) {
      s?.warn("LoadStatePlugin: serializedEditorState was null or undefined. Skipping editor update.");
      return;
    }
    try {
      const l = o.parseEditorState(c);
      queueMicrotask(() => {
        const u = $x(o);
        o.update(() => {
          u || jt(Or), o.setEditorState(l), o.dispatchCommand(pS, void 0);
        }, { tag: ia });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, r, s, e, t, i]), null;
}
const eu = "caller_highlight", vw = pi(function(t, n) {
  const [r] = Ce(), i = te(void 0), s = te(void 0), o = _e(() => {
    const a = i.current, c = a === void 0 ? void 0 : r.getEditorState().read(() => {
      const u = br(a);
      return u ? (u.getChildren().find(Lt) ?? St(u))?.getKey() : void 0;
    }), l = c ? r.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(eu), l?.classList.add(eu), s.current = l;
  }, [r]);
  return wc(n, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : ms(r, () => br(a)?.getKey()), o();
    }
  }), [r, o]), H(() => et(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    r.registerMutationListener(tt, (a, { prevEditorState: c, updateTags: l }) => {
      const u = i.current;
      if (u === void 0 || a.get(u) !== "destroyed")
        return;
      if (![...a.values()].includes("created")) {
        i.current = void 0;
        return;
      }
      const f = l.has(ia) ? void 0 : c.read(() => Hd(u)), d = f === void 0 ? void 0 : r.getEditorState().read(() => br(f)?.getKey());
      i.current = d !== void 0 && a.get(d) === "created" ? d : void 0;
    }, { skipInitialization: !0 }),
    r.registerUpdateListener(() => o())
  ), [r, o]), H(() => () => s.current?.classList.remove(eu), []), null;
});
function Sw({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: n, logger: r }) {
  const [i] = Ce();
  return _w(t, r), Mw(i, e, n, r), null;
}
function _w(e, t) {
  const n = te(void 0), r = te(void 0), i = e.noteCallers, s = e.crossRefCallers;
  H(() => {
    let o = i;
    (!o || o.length <= 0) && (o = bA), n.current !== o && (n.current = o, Ug("note-callers", o, t));
  }, [t, i]), H(() => {
    let o = s;
    (!o || o.length <= 0) && (o = kA), r.current !== o && (r.current = o, Ug("cross-ref-callers", o, t));
  }, [t, s]);
}
function Mw(e, t, n, r) {
  H(() => {
    if (!e.hasNodes([ze, tt, _n]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => Rw(s));
    return et(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(tt, (s) => Ew(s, n)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(ze, Pw),
      e.registerNodeTransform(it, ww),
      // Ensure a separator after the caller.
      e.registerNodeTransform(_n, Nw),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(_n, (s, { prevEditorState: o }) => Ow(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(hn, () => $w(e, t, n, r), Xt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, r, n]);
}
function Ew(e, t) {
  const n = e.getChildren();
  if (!n.some((i) => Lt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), n.length > 0) {
    const i = n[0];
    C(i) && !w(i) && i.getTextContent() !== vt(e.getCaller()) && e.insertBefore(i);
  }
}
function Rx(e) {
  const t = e.getNextSibling();
  bn(t) || (C(t) && !w(t) && t.getTextContent() === q ? t.replace(Bi()) : e.insertAfter(Bi()));
}
function Aw(e) {
  const t = e.getTextContent(), n = t.indexOf(q), r = n < 0 ? t : t.slice(0, n) + t.slice(n + 1);
  if (e.setTextContent(q), !r) {
    e.selectEnd();
    return;
  }
  const i = Re(r);
  e.insertAfter(i), i.selectEnd();
}
function Pw(e) {
  const t = e.getParentOrThrow(), n = t.getChildren(), r = n.find((s) => Lt(s));
  if (!U(e) || !D(t) || !r)
    return;
  const i = Cd(n);
  r.getPreviewText() !== i && r.setPreviewText(i), Rx(e);
}
function ww(e) {
  const t = An(e), n = t?.getChildren(), r = n?.find((o) => Lt(o));
  if (!C(e) || !D(t) || !r || !n)
    return;
  const i = e.getParent();
  if (D(i) && bn(e) && e.getTextContent() !== q && Aw(e), U(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Pt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Cd(n);
  r.getPreviewText() !== s && r.setPreviewText(s);
}
function Nw(e) {
  Lt(e) && Rx(e);
}
function Ow(e, t) {
  for (const [n, r] of e) {
    if (r !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = X(n), a = o?.getParent();
      return Lt(o) && D(a) && a.getCaller() === Lo;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function $w(e, t, n, r) {
  if (n?.noteMode !== "expandInline")
    return !1;
  const i = N();
  if (!M(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = Qe(o, (c) => D(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = X(t.current);
      c && !c.getIsCollapsed() && (r?.debug("Cursor moved away from NoteNode, collapsing it"), lo(e, t.current, r)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (D(a)) {
      r?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, lo(e, c, r);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (D(a)) {
      r?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, lo(e, c, r);
    } else if (!a) {
      const c = Qe(o, (l) => D(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      mt(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        r?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, lo(e, l, r);
      }
    }
  }
  if (wt(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (Ar(c) && D(a)) {
      r?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, lo(e, l, r);
    }
  }
  return !1;
}
function lo(e, t, n) {
  const r = X(t);
  try {
    r?.toggleIsCollapsed();
  } catch (i) {
    if (i instanceof Error && i.message.includes("read only"))
      n?.warn("Fallback triggered after stabilization - edge case"), setTimeout(() => {
        e.update(() => {
          r?.toggleIsCollapsed();
        });
      }, 0);
    else
      throw i;
  }
}
function Rw(e) {
  const t = N();
  if (!M(t))
    return;
  const n = t.anchor, r = t.focus, i = n.getNode(), s = r.getNode();
  if (D(i) && C(s)) {
    e.preventDefault();
    const o = Dr();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), r.offset, "text"), Un(o);
  }
}
function Ug(e, t, n) {
  for (const r of document.styleSheets)
    try {
      const i = r.cssRules || r.rules;
      for (const s of i)
        if (Iw(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  n?.warn(`Editor: counter style "${e}" not found.`);
}
function Iw(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function er(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const r of e.getChildren()) {
    if (!w(r) || r.getMarkerSyntax() !== "opening")
      break;
    t.push(r);
  }
  const n = St(e);
  return n && t.push(n), t.length > 0 && t.every((r) => C(r) && r.getMode() === "token") ? t : [];
}
function Lw(e) {
  const t = e.getParent();
  if (D(t))
    return er(t).some((n) => n.is(e)) ? t : void 0;
}
function pa(e) {
  const t = er(e), n = t[t.length - 1];
  return n ? n.getIndexWithinParent() + 1 : 0;
}
function ko(e) {
  if (e.getIsCollapsed() !== !1)
    return;
  const t = e.getLastChild();
  return w(t) && t.getMarkerSyntax() === "closing" && t.getMode() === "token" ? t : void 0;
}
function Ix(e) {
  const t = e.getNode();
  if (e.type === "text") {
    const r = t.getParent();
    if (D(r) && ko(r)?.is(t))
      return e.offset > 0 ? r : void 0;
    if (e.offset !== 0)
      return;
    const i = t.getPreviousSibling();
    return D(i) && ko(i) ? i : void 0;
  }
  if (D(t)) {
    const r = ko(t);
    return r && e.offset > r.getIndexWithinParent() ? t : void 0;
  }
  if (!E(t) || e.offset === 0)
    return;
  const n = t.getChildAtIndex(e.offset - 1);
  return D(n) && ko(n) ? n : void 0;
}
function Lx(e) {
  const t = e.getNode(), n = (i) => D(i) && er(i).length > 0;
  if (e.type === "text") {
    if (e.offset !== t.getTextContentSize())
      return;
    const i = t.getNextSibling();
    return n(i) ? i : void 0;
  }
  if (n(t))
    return e.offset < pa(t) ? t : void 0;
  if (!E(t))
    return;
  const r = t.getChildAtIndex(e.offset);
  return n(r) ? r : void 0;
}
function qx(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), n = Lw(t);
  if (n)
    return qw(n, t, e.offset) ? void 0 : n;
}
function qw(e, t, n) {
  const r = er(e), i = r[r.length - 1];
  return i !== void 0 && i.is(t) && n === i.getTextContentSize();
}
function Dw(e) {
  const t = er(e), n = t[t.length - 1];
  C(n) ? n.select(n.getTextContentSize(), n.getTextContentSize()) : sr(e, pa(e));
}
function Kw() {
  const e = N();
  if (!M(e))
    return !1;
  if (!e.isCollapsed())
    return Kx(e);
  const t = Tp(e.anchor) ?? Ix(e.anchor);
  if (t) {
    const r = Uw(t);
    return e.anchor.is(r) ? !1 : (Dx(e, r), !0);
  }
  const n = Lx(e.anchor) ?? qx(e.anchor);
  return n ? (Dw(n), !0) : !1;
}
function kp(e) {
  const t = er(e), n = t[t.length - 1];
  return C(n) ? Qt(n.getKey(), n.getTextContentSize(), "text") : Qt(e.getKey(), pa(e), "element");
}
function dc(e) {
  const t = e.getLastChild();
  return w(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker() ? e.getChildrenSize() - 1 : e.getChildrenSize();
}
function Qu(e) {
  const t = dc(e);
  if (t === e.getChildrenSize())
    return;
  const n = e.getChildAtIndex(t);
  return C(n) ? n : void 0;
}
function xp(e) {
  const t = dc(e);
  if (t > pa(e)) {
    const n = e.getChildAtIndex(t - 1), r = E(n) ? n.getLastDescendant() : n;
    if (C(r))
      return Qt(r.getKey(), r.getTextContentSize(), "text");
  }
  return kp(e);
}
function Uw(e) {
  const t = ko(e);
  return t ? Qt(t.getKey(), 0, "text") : xp(e);
}
function Tp(e) {
  const t = e.getNode(), n = t.getParent();
  if (D(n) && er(n).length > 0 && Qu(n)?.is(t))
    return n;
  if (e.type !== "element")
    return;
  if (D(t) && er(t).length > 0 && Qu(t))
    return e.offset > dc(t) || e.offset === dc(t) && e.offset > pa(t) ? t : void 0;
  if (!E(t))
    return;
  const r = t.getChildAtIndex(e.offset - 1);
  return D(r) && er(r).length > 0 && !r.getNextSibling() ? r : void 0;
}
function Dx(e, t) {
  e.anchor.set(t.key, t.offset, t.type), e.focus.set(t.key, t.offset, t.type);
}
function Zu(e) {
  const t = An(e);
  return t && er(t).length > 0 ? t : void 0;
}
function Bw(e) {
  for (const t of [e.anchor, e.focus]) {
    const n = Zu(t.getNode()) ?? Lx(t) ?? Ix(t) ?? Tp(t);
    if (n)
      return n;
  }
  for (const t of e.getNodes()) {
    const n = Zu(t);
    if (n)
      return n;
  }
}
function Kx(e) {
  const t = Bw(e);
  if (!t)
    return !1;
  const n = kp(t), r = xp(t);
  let i = !1;
  for (const s of [e.anchor, e.focus]) {
    const o = s.isBefore(n) ? n : r.isBefore(s) ? r : void 0;
    !o || s.is(o) || (s.set(o.key, o.offset, o.type), i = !0);
  }
  return i;
}
function Bg(e, t) {
  const n = Dr();
  return n.anchor.set(e.key, e.offset, e.type), n.focus.set(t.key, t.offset, t.type), n.getTextContent();
}
function Fg(e, t) {
  const n = e.getElementByKey(t.key);
  if (!n)
    return;
  const r = n.ownerDocument.createRange(), i = t.type === "text" ? n.firstChild : n;
  if (!i)
    return;
  const s = i.nodeType === 3 ? i.textContent?.length ?? 0 : i.childNodes.length;
  if (r.setStart(i, Math.min(t.offset, s)), r.collapse(!0), typeof r.getClientRects != "function")
    return;
  const [o] = Array.from(r.getClientRects());
  return o?.top;
}
function zg(e, t, n) {
  const r = Fg(e, t), i = Fg(e, n);
  return r !== void 0 && i !== void 0 && Math.abs(r - i) >= 1;
}
function Fw(e) {
  if (e.type === "element") {
    const n = e.getNode();
    return E(n) ? n.getChildAtIndex(e.offset) ?? void 0 : void 0;
  }
  const t = e.getNode();
  return t.getTextContentSize() === e.offset ? t.getNextSibling() ?? void 0 : void 0;
}
function zw(e, t, n, r) {
  const i = t.anchor, s = Tp(i);
  if (s)
    return Dx(t, xp(s)), !0;
  const o = Zu(i.getNode());
  if (!o) {
    if (n)
      return !1;
    const f = Fw(t.focus);
    return D(f) && er(f).length > 0;
  }
  if (qx(i))
    return !0;
  const a = kp(o);
  if (n) {
    if (!(a.isBefore(i) && !a.is(i)))
      return !0;
    const f = Bg(a, i);
    return f === "" ? !0 : r === "character" || r === "word" && /[\p{L}\p{N}]/u.test(f) || r === "line" && zg(e, a, i) ? !1 : (t.anchor.set(a.key, a.offset, a.type), t.removeText(), !0);
  }
  if (i.isBefore(a))
    return !0;
  const c = Qu(o);
  if (!c)
    return !1;
  const l = Qt(c.getKey(), 0, "text"), u = Bg(i, l);
  return u === "" ? !0 : r === "character" || r === "word" && /[\p{L}\p{N}]/u.test(u) || r === "line" && zg(e, i, l) ? !1 : (t.focus.set(l.key, l.offset, l.type), t.removeText(), !0);
}
function jw() {
  const [e] = Ce();
  return H(() => {
    const t = (s) => () => {
      const o = N();
      return !M(o) || o.isCollapsed() || !Kx(o) ? !1 : s && o.isCollapsed();
    }, n = t(!1), r = t(!0), i = (s) => (o) => {
      const a = N();
      return M(a) ? a.isCollapsed() ? zw(e, a, o, s) : r() : !1;
    };
    return et(e.registerCommand(ra, n, He), e.registerCommand(Zn, n, He), e.registerCommand(Ro, n, He), e.registerCommand(hS, n, He), e.registerCommand(Ic, i("character"), He), e.registerCommand(zf, i("word"), He), e.registerCommand(Va, i("line"), He), e.registerCommand(ky, r, He), e.registerCommand(rr, r, He));
  }, [e]), H(() => {
    const t = () => {
      Kw() && e.dispatchCommand(Xf, void 0);
    };
    return et(
      e.registerCommand(hn, () => (t(), !1), Li),
      // Select-all is the rich-text plugin's `$selectAll`, confined in the same update rather than
      // after the selection change it announces, which an edit may come before.
      e.registerCommand(vy, () => (gS(), t(), !0), Ge)
    );
  }, [e]), null;
}
function Vw({ onChange: e, viewOptions: t }) {
  const [n] = Ce();
  return H(() => n.registerCommand(hn, () => {
    const r = el(t);
    return e?.(r), !1;
  }, Xt), [n, e, t]), null;
}
function Ww() {
  const [e] = Ce();
  return Hw(e), null;
}
function Hw(e) {
  H(() => {
    if (!e.hasNodes([It]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(It, (t) => Gw(t, e));
  }, [e]);
}
function Gw(e, t) {
  Ku(t, e.getKey()) && wk(e.getFirstChild()), !(!ye(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = X(e.getKey());
    return ye(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Ux({ onStateChange: e }) {
  const [t] = Ce(), [n, r] = Ae(t), i = te(!1), s = te(!1), o = te(void 0), a = te(void 0), c = _e(() => {
    const l = N();
    let u;
    if (M(l)) {
      const f = l.anchor.getNode(), d = l.focus.getNode();
      let p = f.getKey() === "root" ? f : Qe(f, (y) => {
        const k = y.getParent();
        return k !== null && Wf(k);
      });
      p === null && (p = f.getTopLevelElementOrThrow()), zi(p) && (p = Qe(f, ye) ?? p);
      const h = p.getKey(), g = n.getElementByKey(h), m = o0(f, d);
      if (m && NE(m) && (u = m.getMarker()), g !== null && (ye(p) || Ie(p) || Wr(p))) {
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
  }, [n, e]);
  return H(() => t.registerCommand(hn, (l, u) => (c(), r(u), !1), He), [t, c]), H(() => et(n.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), n.registerCommand(mS, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), He), n.registerCommand(yS, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), He)), [c, n, e]), null;
}
function Bx(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function li(e) {
  return e ? mt(e) ? e : Qe(e, (n) => mt(n)) ?? void 0 : void 0;
}
function Fx(e) {
  if (!M(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const n of e.getNodes()) {
    const r = li(n);
    r && t.add(r.getKey());
  }
  return t.size > 1;
}
function Cp(e) {
  return M(e) && e.isCollapsed() && e.anchor.type === "element" || !M(e) && !Oc(e) ? !1 : e.getNodes().some((t) => Me(t));
}
function zx(e) {
  if (!M(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, n = t.getNode(), r = li(n);
  if (!r || t.offset !== 0)
    return !1;
  let i = n;
  for (; i && i.getKey() !== r.getKey(); ) {
    if (i.getPreviousSibling())
      return !1;
    i = i.getParent();
  }
  return !0;
}
function jx(e) {
  if (!M(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, n = t.getNode(), r = li(n);
  if (!r)
    return !1;
  if (E(n)) {
    if (t.offset !== n.getChildrenSize())
      return !1;
  } else if (t.offset !== n.getTextContentSize())
    return !1;
  let i = n;
  for (; i && i.getKey() !== r.getKey(); ) {
    if (i.getNextSibling())
      return !1;
    i = i.getParent();
  }
  return !0;
}
function jg(e, t) {
  return !!ef(e, t);
}
function ef(e, t) {
  if (!M(e) || !e.isCollapsed())
    return;
  const { anchor: n } = e, r = n.getNode();
  if (n.type === "element" && E(r)) {
    const s = r.getChildren(), o = t === "backward" ? n.offset - 1 : n.offset;
    if (o < 0)
      return;
    const a = s[o];
    return Me(a) ? a : void 0;
  }
  if (t === "backward") {
    if (n.offset !== 0)
      return;
    const s = r.getPreviousSibling();
    return Me(s) ? s : void 0;
  }
  if (n.offset !== r.getTextContentSize())
    return;
  const i = r.getNextSibling();
  return Me(i) ? i : void 0;
}
function pc(e, t) {
  if (!M(e))
    return !1;
  const n = li(e.anchor.getNode());
  return n ? !!(t === "backward" ? n.getPreviousSibling() : n.getNextSibling()) : !1;
}
function Es(e) {
  return Cp(e) || Fx(e);
}
function Vx(e, t) {
  if (Cp(e) || Fx(e))
    return !0;
  if (!M(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return zx(e) && pc(e, "backward") || jg(e, "backward");
    case "deleteForward":
      return jx(e) && pc(e, "forward") || jg(e, "forward");
    case "insertText":
      return !1;
  }
}
function Jw(e, t) {
  if (!(!M(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const n = ef(e, "backward");
      if (n)
        return { kind: "verse", node: n };
      if (zx(e) && pc(e, "backward")) {
        const r = li(e.anchor.getNode());
        if (wt(r))
          return { kind: "para", node: r };
      }
      return;
    }
    if (t === "deleteForward") {
      const n = ef(e, "forward");
      if (n)
        return { kind: "verse", node: n };
      if (jx(e) && pc(e, "forward")) {
        const i = li(e.anchor.getNode())?.getNextSibling();
        if (wt(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Vg(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return Oc(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!M(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!M(e) || e.isCollapsed())
    return !1;
  const n = li(e.anchor.getNode()), r = li(e.focus.getNode());
  return !!n && n.getKey() === t.key && !!r && r.getKey() === t.key;
}
function Wx(e) {
  if (C(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else E(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function Yw(e) {
  const t = e.getPreviousSibling();
  if (!mt(t))
    return;
  const n = t.getLastChild(), r = e.getFirstChild(), i = mn(r), s = e.getChildren().filter((o) => !bn(o) && !(i && o.is(r)));
  t.append(...s), e.remove(), n ? Wx(n) : Qs(t) || t.selectStart();
}
function Hx(e) {
  return Me(e) || ot(e) ? [] : wt(e) ? e.getChildren().flatMap(Hx) : [e];
}
function Xw(e) {
  const t = [];
  for (const n of e) {
    const r = Hx(n);
    r.length !== 0 && (wt(n) && t.length > 0 && t.push(Re(" ")), t.push(...r));
  }
  return t;
}
function Wg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Qw(e) {
  if (Array.isArray(e)) return e;
}
function Zw(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, s, o, a = [], c = !0, l = !1;
    try {
      if (s = (n = n.call(e)).next, t !== 0) for (; !(c = (r = s.call(n)).done) && (a.push(r.value), a.length !== t); c = !0) ;
    } catch (u) {
      l = !0, i = u;
    } finally {
      try {
        if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (l) throw i;
      }
    }
    return a;
  }
}
function eN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tN(e, t) {
  return Qw(e) || Zw(e, t) || nN(e, t) || eN();
}
function nN(e, t) {
  if (e) {
    if (typeof e == "string") return Wg(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Wg(e, t) : void 0;
  }
}
const Gx = Object.entries, Hg = Object.setPrototypeOf, rN = Object.isFrozen, iN = Object.getPrototypeOf, sN = Object.getOwnPropertyDescriptor;
let Dt = Object.freeze, Ft = Object.seal, ys = Object.create, Jx = typeof Reflect < "u" && Reflect, tf = Jx.apply, nf = Jx.construct;
Dt || (Dt = function(t) {
  return t;
});
Ft || (Ft = function(t) {
  return t;
});
tf || (tf = function(t, n) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++)
    i[s - 2] = arguments[s];
  return t.apply(n, i);
});
nf || (nf = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return new t(...r);
});
const ds = Tt(Array.prototype.forEach), oN = Tt(Array.prototype.lastIndexOf), Gg = Tt(Array.prototype.pop), ps = Tt(Array.prototype.push), aN = Tt(Array.prototype.splice), Zr = Array.isArray, xo = Tt(String.prototype.toLowerCase), tu = Tt(String.prototype.toString), Jg = Tt(String.prototype.match), uo = Tt(String.prototype.replace), Yg = Tt(String.prototype.indexOf), cN = Tt(String.prototype.trim), lN = Tt(Number.prototype.toString), uN = Tt(Boolean.prototype.toString), Xg = typeof BigInt > "u" ? null : Tt(BigInt.prototype.toString), Qg = typeof Symbol > "u" ? null : Tt(Symbol.prototype.toString), At = Tt(Object.prototype.hasOwnProperty), fo = Tt(Object.prototype.toString), Et = Tt(RegExp.prototype.test), vi = fN(TypeError);
function Tt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return tf(e, t, r);
  };
}
function fN(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return nf(e, n);
  };
}
function Oe(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : xo;
  if (Hg && Hg(e, null), !Zr(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let i = t[r];
    if (typeof i == "string") {
      const s = n(i);
      s !== i && (rN(t) || (t[r] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function dN(e) {
  for (let t = 0; t < e.length; t++)
    At(e, t) || (e[t] = null);
  return e;
}
function zt(e) {
  const t = ys(null);
  for (const r of Gx(e)) {
    var n = tN(r, 2);
    const i = n[0], s = n[1];
    At(e, i) && (Zr(s) ? t[i] = dN(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = zt(s) : t[i] = s);
  }
  return t;
}
function pN(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return lN(e);
    case "boolean":
      return uN(e);
    case "bigint":
      return Xg ? Xg(e) : "0";
    case "symbol":
      return Qg ? Qg(e) : "Symbol()";
    case "undefined":
      return fo(e);
    case "function":
    case "object": {
      if (e === null)
        return fo(e);
      const t = e, n = Jn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : fo(r);
      }
      return fo(e);
    }
    default:
      return fo(e);
  }
}
function Jn(e, t) {
  for (; e !== null; ) {
    const r = sN(e, t);
    if (r) {
      if (r.get)
        return Tt(r.get);
      if (typeof r.value == "function")
        return Tt(r.value);
    }
    e = iN(e);
  }
  function n() {
    return null;
  }
  return n;
}
function hN(e) {
  try {
    return Et(e, ""), !0;
  } catch {
    return !1;
  }
}
const Zg = Dt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), nu = Dt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ru = Dt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), gN = Dt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), iu = Dt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), mN = Dt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), em = Dt(["#text"]), tm = Dt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), su = Dt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), nm = Dt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ea = Dt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), yN = Ft(/{{[\w\W]*|^[\w\W]*}}/g), bN = Ft(/<%[\w\W]*|^[\w\W]*%>/g), kN = Ft(/\${[\w\W]*/g), xN = Ft(/^data-[\-\w.\u00B7-\uFFFF]+$/), TN = Ft(/^aria-[\-\w]+$/), rm = Ft(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), CN = Ft(/^(?:\w+script|data):/i), vN = Ft(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), SN = Ft(/^html$/i), _N = Ft(/^[a-z][.\w]*(-[.\w]+)+$/i), im = Ft(/<[/\w!]/g), sm = Ft(/<[/\w]/g), MN = Ft(/<\/no(script|embed|frames)/i), EN = Ft(/\/>/i), Sn = {
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
}, AN = function() {
  return typeof window > "u" ? null : window;
}, PN = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const i = "data-tt-policy-suffix";
  n && n.hasAttribute(i) && (r = n.getAttribute(i));
  const s = "dompurify" + (r ? "#" + r : "");
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
}, om = function() {
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
}, Yr = function(t, n, r, i) {
  return At(t, n) && Zr(t[n]) ? Oe(i.base ? zt(i.base) : {}, t[n], i.transform) : r;
};
function Yx() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : AN();
  const t = (W) => Yx(W);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Sn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, i = r.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, f = e.trustedTypes, d = a.prototype, p = Jn(d, "cloneNode"), h = Jn(d, "remove"), g = Jn(d, "nextSibling"), m = Jn(d, "childNodes"), y = Jn(d, "parentNode"), k = Jn(d, "shadowRoot"), x = Jn(d, "attributes"), A = o && o.prototype ? Jn(o.prototype, "nodeType") : null, _ = o && o.prototype ? Jn(o.prototype, "nodeName") : null, j = o && o.prototype ? Jn(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const W = n.createElement("template");
    W.content && W.content.ownerDocument && (n = W.content.ownerDocument);
  }
  let $, ne = "", fe, I = !1, K = 0;
  const ge = function() {
    if (K > 0)
      throw vi('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, re = function(b) {
    ge(), K++;
    try {
      return $.createHTML(b);
    } finally {
      K--;
    }
  }, Le = function(b) {
    ge(), K++;
    try {
      return $.createScriptURL(b);
    } finally {
      K--;
    }
  }, me = function() {
    return I || (fe = PN(f, i), I = !0), fe;
  }, nt = n, rt = nt.implementation, rn = nt.createNodeIterator, Je = nt.createDocumentFragment, dr = nt.getElementsByTagName, xn = r.importNode;
  let Pe = om();
  t.isSupported = typeof Gx == "function" && typeof y == "function" && rt && rt.createHTMLDocument !== void 0;
  const he = yN, F = bN, oe = kN, ve = xN, We = TN, ct = CN, bt = vN, Tn = _N;
  let ee = rm, Te = null;
  const Pr = Oe({}, [...Zg, ...nu, ...ru, ...iu, ...em]);
  let we = null;
  const pr = Oe({}, [...tm, ...su, ...nm, ...Ea]);
  let pe = Object.seal(ys(null, {
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
  })), qt = null, Jt = null;
  const L = Object.seal(ys(null, {
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
  let V = !0, G = !0, J = !1, ae = !0, Z = !1, Q = !0, se = !1, ce = !1, qe = null, Ne = null, sn = !1, Cn = !1, wr = !1, bi = !1, ro = !0, os = !1;
  const ba = "user-content-";
  let as = !0, O = !1, R = {}, B = null;
  const Y = Oe({}, [
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
  let Se = null;
  const Fe = Oe({}, ["audio", "video", "img", "source", "image", "track"]);
  let De = null;
  const je = Oe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Mt = "http://www.w3.org/1998/Math/MathML", ft = "http://www.w3.org/2000/svg", lt = "http://www.w3.org/1999/xhtml";
  let Ct = lt, ki = !1, vn = null;
  const Nr = Oe({}, [Mt, ft, lt], tu), dh = Dt(["mi", "mo", "mn", "ms", "mtext"]);
  let _l = Oe({}, dh);
  const ph = Dt(["annotation-xml"]);
  let Ml = Oe({}, ph);
  const Bv = Oe({}, ["title", "style", "font", "a", "script"]);
  let io = null;
  const Fv = ["application/xhtml+xml", "text/html"], zv = "text/html";
  let dt = null, cs = null;
  const jv = n.createElement("form"), hh = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, El = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (cs && cs === b)
      return;
    (!b || typeof b != "object") && (b = {}), b = zt(b), io = // eslint-disable-next-line unicorn/prefer-includes
    Fv.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? zv : b.PARSER_MEDIA_TYPE, dt = io === "application/xhtml+xml" ? tu : xo, Te = Yr(b, "ALLOWED_TAGS", Pr, {
      transform: dt
    }), we = Yr(b, "ALLOWED_ATTR", pr, {
      transform: dt
    }), vn = Yr(b, "ALLOWED_NAMESPACES", Nr, {
      transform: tu
    }), De = Yr(b, "ADD_URI_SAFE_ATTR", je, {
      transform: dt,
      base: je
    }), Se = Yr(b, "ADD_DATA_URI_TAGS", Fe, {
      transform: dt,
      base: Fe
    }), B = Yr(b, "FORBID_CONTENTS", Y, {
      transform: dt
    }), qt = Yr(b, "FORBID_TAGS", zt({}), {
      transform: dt
    }), Jt = Yr(b, "FORBID_ATTR", zt({}), {
      transform: dt
    }), R = At(b, "USE_PROFILES") ? b.USE_PROFILES && typeof b.USE_PROFILES == "object" ? zt(b.USE_PROFILES) : b.USE_PROFILES : !1, V = b.ALLOW_ARIA_ATTR !== !1, G = b.ALLOW_DATA_ATTR !== !1, J = b.ALLOW_UNKNOWN_PROTOCOLS || !1, ae = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Z = b.SAFE_FOR_TEMPLATES || !1, Q = b.SAFE_FOR_XML !== !1, se = b.WHOLE_DOCUMENT || !1, Cn = b.RETURN_DOM || !1, wr = b.RETURN_DOM_FRAGMENT || !1, bi = b.RETURN_TRUSTED_TYPE || !1, sn = b.FORCE_BODY || !1, ro = b.SANITIZE_DOM !== !1, os = b.SANITIZE_NAMED_PROPS || !1, as = b.KEEP_CONTENT !== !1, O = b.IN_PLACE || !1, ee = hN(b.ALLOWED_URI_REGEXP) ? b.ALLOWED_URI_REGEXP : rm, Ct = typeof b.NAMESPACE == "string" ? b.NAMESPACE : lt, _l = At(b, "MATHML_TEXT_INTEGRATION_POINTS") && b.MATHML_TEXT_INTEGRATION_POINTS && typeof b.MATHML_TEXT_INTEGRATION_POINTS == "object" ? zt(b.MATHML_TEXT_INTEGRATION_POINTS) : Oe({}, dh), Ml = At(b, "HTML_INTEGRATION_POINTS") && b.HTML_INTEGRATION_POINTS && typeof b.HTML_INTEGRATION_POINTS == "object" ? zt(b.HTML_INTEGRATION_POINTS) : Oe({}, ph);
    const S = At(b, "CUSTOM_ELEMENT_HANDLING") && b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING == "object" ? zt(b.CUSTOM_ELEMENT_HANDLING) : ys(null);
    if (pe = ys(null), At(S, "tagNameCheck") && hh(S.tagNameCheck) && (pe.tagNameCheck = S.tagNameCheck), At(S, "attributeNameCheck") && hh(S.attributeNameCheck) && (pe.attributeNameCheck = S.attributeNameCheck), At(S, "allowCustomizedBuiltInElements") && typeof S.allowCustomizedBuiltInElements == "boolean" && (pe.allowCustomizedBuiltInElements = S.allowCustomizedBuiltInElements), Ft(pe), Z && (G = !1), wr && (Cn = !0), R && (Te = Oe({}, em), we = ys(null), R.html === !0 && (Oe(Te, Zg), Oe(we, tm)), R.svg === !0 && (Oe(Te, nu), Oe(we, su), Oe(we, Ea)), R.svgFilters === !0 && (Oe(Te, ru), Oe(we, su), Oe(we, Ea)), R.mathMl === !0 && (Oe(Te, iu), Oe(we, nm), Oe(we, Ea))), L.tagCheck = null, L.attributeCheck = null, At(b, "ADD_TAGS") && (typeof b.ADD_TAGS == "function" ? L.tagCheck = b.ADD_TAGS : Zr(b.ADD_TAGS) && (Te === Pr && (Te = zt(Te)), Oe(Te, b.ADD_TAGS, dt))), At(b, "ADD_ATTR") && (typeof b.ADD_ATTR == "function" ? L.attributeCheck = b.ADD_ATTR : Zr(b.ADD_ATTR) && (we === pr && (we = zt(we)), Oe(we, b.ADD_ATTR, dt))), At(b, "ADD_URI_SAFE_ATTR") && Zr(b.ADD_URI_SAFE_ATTR) && Oe(De, b.ADD_URI_SAFE_ATTR, dt), At(b, "FORBID_CONTENTS") && Zr(b.FORBID_CONTENTS) && (B === Y && (B = zt(B)), Oe(B, b.FORBID_CONTENTS, dt)), At(b, "ADD_FORBID_CONTENTS") && Zr(b.ADD_FORBID_CONTENTS) && (B === Y && (B = zt(B)), Oe(B, b.ADD_FORBID_CONTENTS, dt)), as && (Te["#text"] = !0), se && Oe(Te, ["html", "head", "body"]), Te.table && (Oe(Te, ["tbody"]), delete qt.tbody), b.TRUSTED_TYPES_POLICY) {
      if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw vi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw vi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const z = $;
      $ = b.TRUSTED_TYPES_POLICY;
      try {
        ne = re("");
      } catch (ie) {
        throw $ = z, ie;
      }
    } else b.TRUSTED_TYPES_POLICY === null ? ($ = void 0, ne = "") : ($ === void 0 && ($ = me()), $ && typeof ne == "string" && (ne = re("")));
    Dt && Dt(b), cs = b;
  }, gh = Oe({}, [...nu, ...ru, ...gN]), mh = Oe({}, [...iu, ...mN]), Vv = function(b, S, z) {
    return S.namespaceURI === lt ? b === "svg" : S.namespaceURI === Mt ? b === "svg" && (z === "annotation-xml" || _l[z]) : !!gh[b];
  }, Wv = function(b, S, z) {
    return S.namespaceURI === lt ? b === "math" : S.namespaceURI === ft ? b === "math" && Ml[z] : !!mh[b];
  }, Hv = function(b, S, z) {
    return S.namespaceURI === ft && !Ml[z] || S.namespaceURI === Mt && !_l[z] ? !1 : !mh[b] && (Bv[b] || !gh[b]);
  }, Gv = function(b) {
    let S = y(b);
    (!S || !S.tagName) && (S = {
      namespaceURI: Ct,
      tagName: "template"
    });
    const z = xo(b.tagName), ie = xo(S.tagName);
    return vn[b.namespaceURI] ? b.namespaceURI === ft ? Vv(z, S, ie) : b.namespaceURI === Mt ? Wv(z, S, ie) : b.namespaceURI === lt ? Hv(z, S, ie) : !!(io === "application/xhtml+xml" && vn[b.namespaceURI]) : !1;
  }, Gr = function(b) {
    ps(t.removed, {
      element: b
    });
    try {
      y(b).removeChild(b);
    } catch {
      if (h(b), !y(b))
        throw vi("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ka = function(b) {
    so(b);
    const S = m(b);
    if (S) {
      const ie = [];
      ds(S, (le) => {
        ps(ie, le);
      }), ds(ie, (le) => {
        try {
          h(le);
        } catch {
        }
      });
    }
    const z = x(b);
    if (z)
      for (let ie = z.length - 1; ie >= 0; --ie) {
        const le = z[ie], xe = le && le.name;
        if (typeof xe == "string")
          try {
            b.removeAttribute(xe);
          } catch {
          }
      }
  }, xi = function(b, S) {
    try {
      ps(t.removed, {
        attribute: S.getAttributeNode(b),
        from: S
      });
    } catch {
      ps(t.removed, {
        attribute: null,
        from: S
      });
    }
    if (S.removeAttribute(b), b === "is")
      if (Cn || wr)
        try {
          Gr(S);
        } catch {
        }
      else
        try {
          S.setAttribute(b, "");
        } catch {
        }
  }, Jv = function(b) {
    const S = x(b);
    if (S)
      for (let z = S.length - 1; z >= 0; --z) {
        const ie = S[z], le = ie && ie.name;
        if (!(typeof le != "string" || we[dt(le)]))
          try {
            b.removeAttribute(le);
          } catch {
          }
      }
  }, so = function(b) {
    const S = [b];
    for (; S.length > 0; ) {
      const z = S.pop();
      (A ? A(z) : z.nodeType) === Sn.element && Jv(z);
      const le = m(z);
      if (le)
        for (let xe = le.length - 1; xe >= 0; --xe)
          S.push(le[xe]);
    }
  }, Yv = function(b) {
    if (!Q)
      return;
    const S = [b];
    for (; S.length > 0; ) {
      const z = S.pop(), ie = A ? A(z) : z.nodeType;
      if (ie === Sn.processingInstruction || ie === Sn.comment && Et(sm, z.data)) {
        try {
          h(z);
        } catch {
        }
        continue;
      }
      if (ie === Sn.element) {
        const xe = z, Ye = dt(_ ? _(z) : z.nodeName);
        try {
          xe.hasAttribute && xe.hasAttribute("patchsrc") && xe.removeAttribute("patchsrc"), xe.hasAttribute && xe.hasAttribute("for") && Ye !== "label" && Ye !== "output" && xe.removeAttribute("for");
        } catch {
        }
      }
      const le = m(z);
      if (le)
        for (let xe = le.length - 1; xe >= 0; --xe)
          S.push(le[xe]);
    }
  }, yh = function(b) {
    let S = null, z = null;
    if (sn)
      b = "<remove></remove>" + b;
    else {
      const xe = Jg(b, /^[\r\n\t ]+/);
      z = xe && xe[0];
    }
    io === "application/xhtml+xml" && Ct === lt && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const ie = $ ? re(b) : b;
    if (Ct === lt)
      try {
        S = new u().parseFromString(ie, io);
      } catch {
      }
    if (!S || !S.documentElement) {
      S = rt.createDocument(Ct, "template", null);
      try {
        S.documentElement.innerHTML = ki ? ne : ie;
      } catch {
      }
    }
    const le = S.body || S.documentElement;
    return b && z && le.insertBefore(n.createTextNode(z), le.childNodes[0] || null), Ct === lt ? dr.call(S, se ? "html" : "body")[0] : se ? S.documentElement : le;
  }, bh = function(b) {
    const S = j ? j(b) : b.ownerDocument;
    return rn.call(
      S || b,
      b,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, xa = function(b) {
    return b = uo(b, he, " "), b = uo(b, F, " "), b = uo(b, oe, " "), b;
  }, Al = function(b) {
    var S;
    b.normalize();
    const z = j ? j(b) : b.ownerDocument, ie = rn.call(
      z || b,
      b,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let le = ie.nextNode();
    for (; le; )
      le.data = xa(le.data), le = ie.nextNode();
    const xe = (S = b.querySelectorAll) === null || S === void 0 ? void 0 : S.call(b, "template");
    xe && ds(xe, (Ye) => {
      ls(Ye.content) && Al(Ye.content);
    });
  }, Ta = function(b) {
    const S = _ ? _(b) : null;
    return typeof S != "string" || dt(S) !== "form" ? !1 : typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    b.attributes !== x(b) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    b.nodeType !== A(b) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    b.childNodes !== m(b);
  }, ls = function(b) {
    if (!A || typeof b != "object" || b === null)
      return !1;
    try {
      return A(b) === Sn.documentFragment;
    } catch {
      return !1;
    }
  }, oo = function(b) {
    if (!A || typeof b != "object" || b === null)
      return !1;
    try {
      return typeof A(b) == "number";
    } catch {
      return !1;
    }
  };
  function hr(W, b, S) {
    W.length !== 0 && ds(W, (z) => {
      z.call(t, b, S, cs);
    });
  }
  const Xv = function(b, S) {
    return !!(Q && b.hasChildNodes() && !oo(b.firstElementChild) && Et(im, b.textContent) && Et(im, b.innerHTML) || Q && b.namespaceURI === lt && S === "style" && oo(b.firstElementChild) || b.nodeType === Sn.processingInstruction || Q && b.nodeType === Sn.comment && Et(sm, b.data));
  }, Qv = function(b, S, z) {
    if (!qt[S] && Ch(S) && (pe.tagNameCheck instanceof RegExp && Et(pe.tagNameCheck, S) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(S)))
      return !1;
    if (as && !B[S]) {
      const ie = y(b), le = m(b);
      if (le && ie) {
        const xe = le.length;
        for (let Ye = xe - 1; Ye >= 0; --Ye) {
          const pt = b === z ? p(le[Ye], !0) : le[Ye];
          ie.insertBefore(pt, g(b));
        }
      }
    }
    return Gr(b), !0;
  }, kh = function(b, S, z, ie) {
    return b.length === 0 ? S : S === z || S === ie ? zt(S) : S;
  }, xh = function(b, S) {
    if (hr(Pe.beforeSanitizeElements, b, null), b !== S && y(b) === null)
      return O && so(b), !0;
    if (Ta(b))
      return Gr(b), !0;
    const z = dt(_ ? _(b) : b.nodeName);
    if (Te = kh(Pe.uponSanitizeElement, Te, Pr, qe), hr(Pe.uponSanitizeElement, b, {
      tagName: z,
      allowedTags: Te
    }), b !== S && y(b) === null)
      return O && so(b), !0;
    if (Xv(b, z))
      return Gr(b), !0;
    if (qt[z] || !(L.tagCheck instanceof Function && L.tagCheck(z)) && !Te[z]) {
      const le = Qv(b, z, S);
      return le === !1 && hr(Pe.afterSanitizeElements, b, null), le;
    }
    if ((A ? A(b) : b.nodeType) === Sn.element && !Gv(b) || (z === "noscript" || z === "noembed" || z === "noframes") && Et(MN, b.innerHTML))
      return Gr(b), !0;
    if (Z && b.nodeType === Sn.text) {
      const le = xa(b.textContent);
      b.textContent !== le && (ps(t.removed, {
        element: b.cloneNode()
      }), b.textContent = le);
    }
    return hr(Pe.afterSanitizeElements, b, null), !1;
  }, Th = function(b, S, z) {
    if (Jt[S] || Q && S === "patchsrc" || Q && S === "for" && b !== "label" && b !== "output" || ro && (S === "id" || S === "name") && (z in n || z in jv))
      return !1;
    const ie = we[S] || L.attributeCheck instanceof Function && L.attributeCheck(S, b);
    if (!(G && Et(ve, S))) {
      if (!(V && Et(We, S))) {
        if (ie) {
          if (!De[S]) {
            if (!Et(ee, uo(z, bt, ""))) {
              if (!((S === "src" || S === "xlink:href" || S === "href") && b !== "script" && Yg(z, "data:") === 0 && Se[b])) {
                if (!(J && !Et(ct, uo(z, bt, "")))) {
                  if (z)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Ch(b) && (pe.tagNameCheck instanceof RegExp && Et(pe.tagNameCheck, b) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(b)) && (pe.attributeNameCheck instanceof RegExp && Et(pe.attributeNameCheck, S) || pe.attributeNameCheck instanceof Function && pe.attributeNameCheck(S, b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          S === "is" && pe.allowCustomizedBuiltInElements && (pe.tagNameCheck instanceof RegExp && Et(pe.tagNameCheck, z) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(z)))
        ) return !1;
      }
    }
    return !0;
  }, Zv = Oe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ch = function(b) {
    return !Zv[xo(b)] && Et(Tn, b);
  }, eS = function(b, S, z, ie) {
    if ($ && typeof f == "object" && typeof f.getAttributeType == "function" && !z)
      switch (f.getAttributeType(b, S)) {
        case "TrustedHTML":
          return re(ie);
        case "TrustedScriptURL":
          return Le(ie);
      }
    return ie;
  }, tS = function(b, S, z, ie) {
    try {
      z ? b.setAttributeNS(z, S, ie) : b.setAttribute(S, ie), Ta(b) ? Gr(b) : Gg(t.removed);
    } catch {
      xi(S, b);
    }
  }, vh = function(b) {
    hr(Pe.beforeSanitizeAttributes, b, null);
    const S = b.attributes;
    if (!S || Ta(b))
      return;
    we = kh(Pe.uponSanitizeAttribute, we, pr, Ne);
    const z = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: we,
      forceKeepAttr: void 0
    };
    let ie = S.length;
    const le = dt(b.nodeName);
    for (; ie--; ) {
      const xe = S[ie], Ye = xe.name, pt = xe.namespaceURI, on = xe.value, an = dt(Ye), wl = on;
      let Yt = Ye === "value" ? wl : cN(wl);
      if (z.attrName = an, z.attrValue = Yt, z.keepAttr = !0, z.forceKeepAttr = void 0, hr(Pe.uponSanitizeAttribute, b, z), Yt = z.attrValue, os && (an === "id" || an === "name") && Yg(Yt, ba) !== 0 && (xi(Ye, b), Yt = ba + Yt), Q && Et(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Yt)) {
        xi(Ye, b);
        continue;
      }
      if (an === "attributename" && Jg(Yt, "href")) {
        xi(Ye, b);
        continue;
      }
      if (!z.forceKeepAttr) {
        if (!z.keepAttr) {
          xi(Ye, b);
          continue;
        }
        if (!ae && Et(EN, Yt)) {
          xi(Ye, b);
          continue;
        }
        if (Z && (Yt = xa(Yt)), !Th(le, an, Yt)) {
          xi(Ye, b);
          continue;
        }
        Yt = eS(le, an, pt, Yt), Yt !== wl && tS(b, Ye, pt, Yt);
      }
    }
    hr(Pe.afterSanitizeAttributes, b, null);
  }, Ca = function(b) {
    let S = null;
    const z = bh(b);
    for (hr(Pe.beforeSanitizeShadowDOM, b, null); S = z.nextNode(); )
      if (hr(Pe.uponSanitizeShadowNode, S, null), xh(S, b), vh(S), ls(S.content) && Ca(S.content), (A ? A(S) : S.nodeType) === Sn.element) {
        const le = k(S);
        ls(le) && (Pl(le), Ca(le));
      }
    hr(Pe.afterSanitizeShadowDOM, b, null);
  }, Pl = function(b) {
    const S = [{
      node: b,
      shadow: null
    }];
    for (; S.length > 0; ) {
      const z = S.pop();
      if (z.shadow) {
        Ca(z.shadow);
        continue;
      }
      const ie = z.node, xe = (A ? A(ie) : ie.nodeType) === Sn.element, Ye = m(ie);
      if (Ye)
        for (let pt = Ye.length - 1; pt >= 0; --pt)
          S.push({
            node: Ye[pt],
            shadow: null
          });
      if (xe) {
        const pt = _ ? _(ie) : null;
        if (typeof pt == "string" && dt(pt) === "template") {
          const on = ie.content;
          ls(on) && S.push({
            node: on,
            shadow: null
          });
        }
      }
      if (xe) {
        const pt = k(ie);
        ls(pt) && S.push({
          node: null,
          shadow: pt
        }, {
          node: pt,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(W) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S = null, z = null, ie = null, le = null;
    if (ki = !W, ki && (W = "<!-->"), typeof W != "string" && !oo(W) && (W = pN(W), typeof W != "string"))
      throw vi("dirty is not a string, aborting");
    if (!t.isSupported)
      return W;
    ce ? (Te = qe, we = Ne) : El(b), (Pe.uponSanitizeElement.length > 0 || Pe.uponSanitizeAttribute.length > 0) && (Te = zt(Te)), Pe.uponSanitizeAttribute.length > 0 && (we = zt(we)), t.removed = [];
    const xe = O && typeof W != "string" && oo(W);
    if (xe) {
      Yv(W);
      const on = _ ? _(W) : W.nodeName;
      if (typeof on == "string") {
        const an = dt(on);
        if (!Te[an] || qt[an])
          throw ka(W), vi("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ta(W))
        throw ka(W), vi("root node is clobbered and cannot be sanitized in-place");
      try {
        Pl(W);
      } catch (an) {
        throw ka(W), an;
      }
    } else if (oo(W))
      S = yh("<!---->"), z = S.ownerDocument.importNode(W, !0), z.nodeType === Sn.element && z.nodeName === "BODY" || z.nodeName === "HTML" ? S = z : S.appendChild(z), Pl(z);
    else {
      if (!Cn && !Z && !se && // eslint-disable-next-line unicorn/prefer-includes
      W.indexOf("<") === -1)
        return $ && bi ? re(W) : W;
      if (S = yh(W), !S)
        return Cn ? null : bi ? ne : "";
    }
    S && sn && Gr(S.firstChild);
    const Ye = xe ? W : S;
    try {
      const on = bh(Ye);
      for (; ie = on.nextNode(); )
        xh(ie, Ye), vh(ie), ls(ie.content) && Ca(ie.content);
    } catch (on) {
      throw xe && (ka(W), ds(t.removed, (an) => {
        an.element && so(an.element);
      })), on;
    }
    if (xe)
      return ds(t.removed, (on) => {
        on.element && so(on.element);
      }), Z && Al(W), W;
    if (Cn) {
      if (Z && Al(S), wr)
        for (le = Je.call(S.ownerDocument); S.firstChild; )
          le.appendChild(S.firstChild);
      else
        le = S;
      return (we.shadowroot || we.shadowrootmode) && (le = xn.call(r, le, !0)), le;
    }
    let pt = se ? S.outerHTML : S.innerHTML;
    return se && Te["!doctype"] && S.ownerDocument && S.ownerDocument.doctype && S.ownerDocument.doctype.name && Et(SN, S.ownerDocument.doctype.name) && (pt = "<!DOCTYPE " + S.ownerDocument.doctype.name + `>
` + pt), Z && (pt = xa(pt)), $ && bi ? re(pt) : pt;
  }, t.setConfig = function() {
    let W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    El(W), ce = !0, qe = Te, Ne = we;
  }, t.clearConfig = function() {
    cs = null, ce = !1, qe = null, Ne = null, $ = fe, ne = "";
  }, t.isValidAttribute = function(W, b, S) {
    cs || El({});
    const z = dt(W), ie = dt(b);
    return Th(z, ie, S);
  }, t.addHook = function(W, b) {
    typeof b == "function" && At(Pe, W) && ps(Pe[W], b);
  }, t.removeHook = function(W, b) {
    if (At(Pe, W)) {
      if (b !== void 0) {
        const S = oN(Pe[W], b);
        return S === -1 ? void 0 : aN(Pe[W], S, 1)[0];
      }
      return Gg(Pe[W]);
    }
  }, t.removeHooks = function(W) {
    At(Pe, W) && (Pe[W] = []);
  }, t.removeAllHooks = function() {
    Pe = om();
  }, t;
}
var wN = Yx();
function NN({ structureProtectionMode: e = "off" }) {
  const [t] = Ce(), n = te(void 0), [r, i] = Ae(void 0), s = _e((o) => {
    n.current = o, i(o);
  }, []);
  return H(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = Bx(p);
      if (!h)
        return !1;
      const g = N();
      return e === "protected" ? g && Vx(g, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const g = N(), m = n.current;
      if (m && g && Vg(g, m)) {
        if (s(void 0), h.preventDefault(), p !== m.intent)
          return !0;
        const k = X(m.key) ?? void 0;
        if (m.kind === "verse") {
          if (k) {
            const x = k.getParent(), A = k.getPreviousSibling(), _ = k.getNextSibling();
            k.remove(), A ? Wx(A) : _ && C(_) ? _.select(0, 0) : x?.selectStart();
          }
        } else m.kind === "selection" ? M(g) && (fp(g), g.removeText()) : wt(k) && Yw(k);
        return !0;
      }
      if (!g)
        return !1;
      const y = Jw(g, p);
      if (y) {
        if (y.kind === "verse") {
          const k = Sy();
          k.add(y.node.getKey()), Un(k);
        } else {
          const k = Dr();
          k.anchor.set(y.node.getKey(), 0, "element"), k.focus.set(y.node.getKey(), y.node.getChildrenSize(), "element"), Un(k);
        }
        return s({ key: y.node.getKey(), kind: y.kind, intent: p }), h.preventDefault(), !0;
      }
      if (M(g) && !g.isCollapsed() && Cp(g)) {
        const k = g.getNodes().filter(Me).map((_) => _.getKey()), { anchor: x, focus: A } = g;
        return s({
          kind: "selection",
          intent: p,
          key: k[0],
          anchor: { key: x.key, offset: x.offset, type: x.type },
          focus: { key: A.key, offset: A.offset, type: A.type }
        }), h.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return !h || !Es(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const g = wN.sanitize(p), m = new DOMParser().parseFromString(g, "text/html"), y = Xw(US(t, m)), k = N();
      return M(k) && k.insertNodes(y), h.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return h && Es(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, f = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return h && Es(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, d = () => {
      const p = n.current;
      p && t.getEditorState().read(() => {
        Vg(N(), p) || s(void 0);
      });
    };
    return et(
      t.registerCommand(_r, o, Ge),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(rr, c, He),
      t.registerCommand(Zn, u, Ge),
      t.registerCommand(bS, c, Ge),
      t.registerCommand(jf, f, Ge),
      t.registerCommand(ra, c, Ge),
      t.registerUpdateListener(d)
    );
  }, [t, e, s]), H(() => {
    const o = t.getRootElement();
    if (!o)
      return;
    const a = !!r && r.kind !== "para";
    return o.classList.toggle("verse-delete-armed", !!r), a ? (o.setAttribute("data-verse-delete-intent", r.intent), o.setAttribute("data-verse-delete-kind", r.kind)) : (o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind")), () => {
      o.classList.remove("verse-delete-armed"), o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind");
    };
  }, [t, r]), null;
}
const gD = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function ON({ textDirection: e }) {
  const [t] = Ce();
  return $N(t, e), null;
}
function $N(e, t) {
  H(() => (am(e, t), e.registerUpdateListener(({ dirtyElements: n }) => {
    n.size > 0 && am(e, t);
  })), [e, t]);
}
function am(e, t) {
  if (t === "auto")
    return;
  const n = e.getRootElement();
  n && (n.dir = t);
  const r = e._config.theme.placeholder, i = document.getElementsByClassName(r)[0];
  i && (i.dir = t);
}
function RN() {
  const [e] = Ce();
  return IN(e), null;
}
function IN(e) {
  H(() => {
    if (!e.hasNodes([ze, Gt, tt, it, Kt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return et(
      e.registerNodeTransform(it, LN),
      e.registerNodeTransform(it, (t) => qN(t, e)),
      e.registerNodeTransform(Kt, cm),
      e.registerNodeTransform(Gt, cm),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(Kt, (t) => {
        jo(Br("va"), t), jo(Br("vp"), t);
      })
    );
  }, [e]);
}
function LN(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), n = e.getNextSibling(), r = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || D(n) || U(r) || U(n) || ue(r) || ue(n) || Ze(r) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
  // splits leave runs as multiple nodes, e.g. a segmented composition node that Lexical
  // won't merge). No structural space belongs inside a run — inserting one corrupts the
  // word itself (#513, complex scripts worst). This also protects a space-only node from
  // the placeholder cleanup below: between two text nodes it is real content.
  C(n) || // An optbreak (`//`) — like a ref — is an inline UnknownNode carrying SIGNIFICANT surrounding
  // whitespace (Paratext 9 preserves the spaces around `//` byte-for-byte). Forcing a trailing
  // space onto the text before one — or removing a lone space there — corrupts the authored form
  // and makes the space impossible to delete (the transform re-adds it every keystroke). Text
  // adjacent to an inline unknown is left exactly as authored, the same next-sibling exemption
  // already applied to notes, chars, and typed marks. Block-level unknowns (figures, sidebars)
  // keep the existing spacing behavior.
  Ze(n) && n.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  de(e, ke) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Be(r))
    return;
  if (Me(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  Me(n) && Bd(e);
}
function qN(e, t) {
  const n = e.getParent();
  !Ze(n) || !e.isAttached() || kS($a) || Ku(t, e.getKey()) && !Ku(t, n.getKey()) && n.insertAfter(e);
}
function cm(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; ue(t); )
    t = t.getLastChild();
  (U(t) || C(t) && ue(t.getParent()) && !DN(t)) && e.insertBefore(Re(" "));
}
function DN(e) {
  const t = e.getTextContent();
  return t.endsWith(" ") || t.endsWith(q);
}
function ol(e) {
  if (!D(e) || e.getIsCollapsed() !== !0)
    return;
  let t = e;
  for (; ; ) {
    if (t.getNextSiblings().some((i) => !la(i)))
      return;
    const r = t.getParent();
    if (!r)
      return;
    if (!E(r) || !r.isInline())
      return e;
    t = r;
  }
}
function KN(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (E(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function UN() {
  const e = N();
  if (!(!M(e) || !e.isCollapsed()))
    return ol(KN(e.anchor));
}
function BN(e) {
  const t = N();
  let n;
  return M(t) ? t.isCollapsed() && (n = t.anchor.getNode()) : t || (n = Xx(e.target)), n ? ol(Qe(n, D)) : void 0;
}
function Xx(e) {
  const t = xS(e)?.anchorNode;
  if (xy(t))
    return Ji(t) ?? void 0;
}
function FN(e) {
  if (N())
    return;
  const t = Xx(e);
  return t ? ol(Qe(t, D)) : void 0;
}
function lm(e) {
  const t = Qe(e.getNode(), D);
  return t?.getIsCollapsed() === !0 ? t : void 0;
}
function zN() {
  const e = N();
  if (!M(e) || e.isCollapsed())
    return !1;
  const [t, n] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], r = lm(t), i = lm(n);
  if (r && i && r.is(i))
    return !1;
  let s = !1;
  const o = r?.getParent();
  r && o && (t.set(o.getKey(), r.getIndexWithinParent(), "element"), s = !0);
  const a = i?.getParent();
  return i && a && (n.set(a.getKey(), i.getIndexWithinParent() + 1, "element"), s = !0), s;
}
const jN = 500;
function VN(e) {
  return e.shiftKey || e.altKey ? !1 : e.key === "End" || e.key === "ArrowDown" && e.metaKey;
}
function WN() {
  const e = N();
  if (!M(e) || e.isCollapsed())
    return;
  const [t, n] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
  if (t.type !== "element" || n.type !== "element" || t.key !== n.key || n.offset !== t.offset + 1)
    return;
  const r = t.getNode();
  if (E(r))
    return ol(r.getChildAtIndex(t.offset));
}
function HN() {
  const [e] = Ce(), t = bp(UN), n = te(void 0);
  return H(() => {
    const r = (i) => {
      t(i) && jt(Oi);
    };
    return et(e.registerCommand(
      _r,
      (i) => (n.current = VN(i) ? performance.now() : void 0, !1),
      // Only observes the press, and must see it whether or not a handler further down claims it.
      He
    ), e.registerCommand(hn, () => {
      if (n.current !== void 0 && performance.now() - n.current < jN) {
        const o = WN();
        if (o)
          return r(o), !1;
      }
      if (zN())
        return jt(Oi), bo(e, Oi), !1;
      const s = FN(e.getRootElement());
      return s && r(s), !1;
    }, Li), e.registerCommand(Rc, (i) => {
      const s = BN(i);
      return s && r(s), !1;
    }, Li));
  }, [e, t]), null;
}
function GN({ trigger: e, scriptureReference: t, contextMarker: n, getMarkerAction: r }) {
  const { markersMenuItems: i } = PP({
    scriptureReference: t,
    contextMarker: n,
    getMarkerAction: r
  });
  return P(AP, { trigger: e, items: i });
}
function JN({ trigger: e, scrRef: t, contextMarker: n, getMarkerAction: r, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = ut(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? P(QN, { trigger: e, harness: i }) : P(GN, { trigger: e, scriptureReference: u, contextMarker: n, getMarkerAction: r });
}
const YN = [" ", "*"];
function XN(e, t) {
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
function QN({ trigger: e, harness: t }) {
  const [n] = Ce(), [r, i] = Ae(void 0), s = te({ query: "", options: [] }), o = te(0), a = _e((d, p, h) => {
    const g = p.find((m) => m.kind === "note" && m.marker === d);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    n.update(() => {
      const m = N();
      M(m) && m.insertText(`${e}${d}${h ? " " : ""}`);
    });
  }, [n, t, e]);
  H(() => et(n.registerCommand(_r, (d) => {
    if (r) {
      if ((d.key === "Enter" || d.key === "Tab") && s.current.options.length === 0)
        return d.preventDefault(), d.stopPropagation(), !0;
      if (d.key === "*" && r.trigger === "backslash")
        return d.preventDefault(), d.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (d.key === e && r.trigger === "backslash" && !r.hasTextSelection) {
        d.preventDefault(), d.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, r.items, !1), _y(() => {
          const m = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(m ? {
            trigger: "backslash",
            hasTextSelection: m.hasTextSelection,
            items: t.getItems(m),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), n.update(() => {
          const m = N();
          M(m) && m.insertText(e);
        }), !0);
      }
      if (d.key !== " " || r.trigger !== "backslash")
        return !1;
      d.preventDefault(), d.stopPropagation(), i(void 0);
      const h = s.current.query;
      if (r.hasTextSelection) {
        const g = r.items.find((m) => m.marker === h);
        return g && t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
      }
      return a(h, r.items, !0), !0;
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
  }, Ge), n.registerCommand(My, (d) => {
    if (r || d === null || d.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (d.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, kr)), [n, e, t, r, a]);
  const c = _e(() => i(void 0), []), l = _e((d, p) => {
    s.current = { query: d, options: p };
  }, []), u = _e((d) => {
    const { markerMenuItem: p, applyOpts: h } = d;
    t.apply(p, h);
  }, [t]), f = ut(() => r?.items.map((d) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    XN(d, { trigger: r.trigger, literalPrefixLanded: !1 })
  )), [r]);
  return r && P(ox, { isOpen: !0, children: ({ placement: d }) => P(
    lx,
    { options: f ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: d === "top-start", menuOpenKey: e, passthroughKeys: r.trigger === "backslash" ? YN : void 0 },
    r.session
  ) });
}
function ZN(e) {
  return e.replaceAll(q, "~").replace(/ {2,}/g, (n) => q.repeat(n.length));
}
function um(e) {
  return e.replaceAll(q, " ").replaceAll("~", q);
}
let hc;
function eO(e) {
  e && (hc = e);
}
function ou(e) {
  return Bt(e);
}
function tO(e, t) {
  return e.isEmpty() ? by : Qx(e.toJSON(), t);
}
function Qx(e, t) {
  if (!e.root || !e.root.children) return;
  const n = e.root.children;
  if (n.length === 1 && Uc(n[0]) && (!n[0].children || n[0].children.length === 0))
    return by;
  if (n.some(dE)) {
    hc?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const r = eT(n), i = Yn(r, t);
  return i ? { type: nr, version: tr, content: i } : void 0;
}
function nO(e, t) {
  const { type: n, marker: r, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), at({
    type: n,
    marker: r,
    code: s,
    ...i,
    content: t
  });
}
function rO(e) {
  const { marker: t, number: n, sid: r, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return at({
    type: Rn.getType(),
    marker: t,
    number: n,
    sid: r,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function iO(e, t) {
  const { marker: n, sid: r, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Wb(n, a, c), at({
    type: Rn.getType(),
    marker: n,
    number: c,
    sid: r,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function sO(e) {
  const { marker: t, sid: n, altnumber: r, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Wb(t, o, a), at({
    type: Kt.getType(),
    marker: t,
    number: a,
    sid: n,
    altnumber: r,
    pubnumber: i,
    ...s
  });
}
function oO(e, t) {
  const { type: n, marker: r, unknownAttributes: i } = e;
  return at({
    type: n,
    marker: r === "" ? void 0 : r,
    ...i,
    content: t
  });
}
function aO(e, t) {
  const { type: n, marker: r, unknownAttributes: i } = e;
  return at({
    type: n,
    marker: r,
    ...i,
    content: t
  });
}
function cO(e, t) {
  const { unknownAttributes: n } = e;
  return at({ type: yb, ...n, content: t });
}
function lO(e, t) {
  const { marker: n, unknownAttributes: r } = e;
  return at({ type: mk, marker: n, ...r, content: t });
}
function uO(e, t) {
  const { marker: n, align: r, colspan: i, unknownAttributes: s } = e;
  return at({
    type: kk,
    marker: n,
    align: r,
    colspan: i,
    ...s,
    content: t
  });
}
function fO(e) {
  const t = e?.[0];
  if (!e || typeof t != "string" || !t.startsWith(" ")) return e;
  const n = t.replace(/^ +/, "");
  return n ? [n, ...e.slice(1)] : e.slice(1);
}
function dO(e, t) {
  const { type: n, marker: r, caller: i, category: s, unknownAttributes: o } = e;
  return at({
    type: n,
    marker: r,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function bs(e) {
  const { type: t, marker: n, sid: r, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return at({
    type: t,
    marker: n === "" ? void 0 : n,
    ...ob({ sid: r, eid: i, ...s }, o)
  });
}
function pO(e) {
  return e.text;
}
function hO(e, t) {
  const { tag: n, marker: r, unknownAttributes: i } = e;
  return at({
    type: n,
    marker: r,
    ...i,
    content: t
  });
}
function gO(e) {
  const { marker: t } = e;
  return {
    type: Xa,
    marker: t === "" ? void 0 : t
  };
}
function au(e, t) {
  const n = e[e.length - 1];
  n && typeof n == "string" ? e[e.length - 1] = n + t : e.push(t);
}
function mO(e, t, n, r, i) {
  const s = ir.getType(), o = t.filter((l) => !n.includes(l));
  if (n.filter((l) => !t.includes(l)).forEach((l) => {
    const u = bs({
      type: s,
      marker: _s,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = bs({
      type: s,
      marker: qi,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = bs({
      type: s,
      marker: qi
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = bs({
      type: s,
      marker: _s
    });
    i.push(l);
  }
  (!r || !ii(r)) && t.forEach((l) => {
    const u = bs({
      type: s,
      marker: _s,
      eid: l
    });
    i.push(u);
  });
}
function rf(e, t, n, r) {
  if (!r) return !1;
  let i = t > 0 ? e[t - 1] : n;
  for (; i && ii(i); ) {
    const { children: s } = i;
    i = s.length > 0 ? s[s.length - 1] : void 0;
  }
  return !Hs(i) || i.markerSyntax !== "opening" ? !1 : i.marker === r.marker ? !0 : r.children.some(
    (s) => rb(s) && s.marker === i.marker
  );
}
function yO(e, t, n, r, i) {
  const s = e[t];
  return !Fr(s) || s.text !== q || !(i || ii(e[t - 1]) || ii(e[t + 1])) || s[qr]?.textType !== void 0 || rf(e, t, n, r) ? !1 : !r || Zx(r.children, s);
}
function Zx(e, t) {
  return e.some((n) => n === t ? !1 : ii(n) ? Zx(n.children, t) : Hs(n) ? !1 : Fr(n) ? n[qr]?.textType === void 0 && n.text !== "" && n.text !== q && !Zi(n.text) : "children" in n && n.type !== Er.getType());
}
function bO(e) {
  let t = e;
  for (; ii(t); ) t = t.children[0];
  return t;
}
function kO(e, t) {
  let n = 0;
  for (; n < e.length; ) {
    const s = e[n];
    if (!Hs(s) || s.markerSyntax !== "opening") break;
    n++;
  }
  const r = bO(e[n]);
  return Fr(r) ? r.text === vt(t) ? { node: r, caller: t } : Math.floor(r.detail / Uy) % 2 === 1 ? { node: r, caller: t } : void 0 : void 0;
}
function Yn(e, t, n, r, i, s = !1) {
  const o = [];
  let a, c = [];
  return e.forEach((l, u) => {
    const f = l, d = l, p = l, h = l, g = l, m = l, y = l, k = l;
    switch (l.type) {
      case En.getType():
        o.push(
          nO(
            f,
            Yn(f.children, t)
          )
        );
        break;
      case Ln.getType():
        o.push(rO(l));
        break;
      case Rn.getType():
        o.push(
          iO(
            d,
            Yn(d.children, t)
          )
        );
        break;
      case Gt.getType():
      case Kt.getType():
        o.push(sO(l));
        break;
      case ze.getType():
        o.push(
          oO(
            p,
            Yn(p.children, t, void 0, p)
          )
        );
        break;
      case It.getType():
        o.push(
          aO(
            h,
            Yn(h.children, t)
          )
        );
        break;
      case Qi.getType():
        o.push(
          cO(
            l,
            Yn(l.children, t)
          )
        );
        break;
      case ts.getType():
        o.push(
          lO(
            l,
            Yn(l.children, t)
          )
        );
        break;
      case ns.getType():
        o.push(
          uO(
            l,
            Yn(l.children, t)
          )
        );
        break;
      case tt.getType(): {
        const x = Yn(
          g.children,
          t,
          kO(g.children, g.caller)
        );
        o.push(
          dO(
            g,
            ou(t) && g.category === void 0 ? fO(x) : x
          )
        );
        break;
      }
      case Er.getType():
      case Hn.getType():
      case _n.getType():
      case Ey.getType():
      case Wn.getType():
        break;
      case gt.getType():
        if (a = Yn(
          y.children,
          t,
          n,
          r,
          u > 0 ? e[u - 1] : i,
          !0
        ), a) {
          const x = y.typedIDs[Vt];
          if (x) {
            const A = e[u + 1];
            mO(a, x, c, A, o), c = A && ii(A) ? x : [];
          } else {
            const A = a.shift();
            A && (typeof A == "string" ? au(o, A) : o.push(A)), a.length > 0 && o.push(...a);
          }
        }
        break;
      case ir.getType():
        o.push(bs(l));
        break;
      case it.getType():
        if (n && l === n.node) {
          let x = rd(n.node.text, n.caller);
          ou(t) && (x = um(Fh(x))), x && au(o, x);
          break;
        }
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Zi(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        (m.text !== q || yO(e, u, i, r, s)) && // The untagged NBSP-`|` form of milestone attribute text. Text right after a char span's
        // opening glyph is never that: its NBSP is the span's separator, and a `|…` after it is
        // content the attribute grammar left literal (`\w |lemma="g"grace\w*` — Paratext 9
        // parses attributes only when the whole `|…` tail before the closer matches), so it is
        // kept like any other content text.
        !(m.text.startsWith(Yf) && !rf(e, u, i, r)) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[qr]?.textType !== "attribute") {
          let x = pO(m);
          t?.markerMode === "editable" && rf(e, u, i, r) && x.startsWith(q) && (x = x.slice(1)), ou(t) && (x = um(Fh(x))), au(o, x);
        }
        break;
      case Xi.getType():
        o.push(
          hO(
            k,
            Yn(k.children, t)
          )
        );
        break;
      case ur.getType():
        o.push(gO(l));
        break;
      case Ys.getType():
        hc?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        hc?.error(`Unexpected node type '${l.type}'!`);
    }
  }), o && o.length > 0 ? o : void 0;
}
function eT(e) {
  const t = e.findIndex((n) => Uc(n));
  if (t >= 0) {
    const n = e.slice(0, t), r = e[t].children, i = eT(e.slice(t + 1));
    e = [...n, ...r, ...i];
  }
  return e;
}
const ks = {
  initialize: eO,
  deserializeEditorState: tO
}, xO = /^sd\d*$/, TO = /* @__PURE__ */ new Set([
  ...Object.entries(xu).filter(
    ([e, t]) => t.category === v.TitlesHeadings && t.type === T.Paragraph && !xO.test(e)
  ).map(([e]) => e),
  "qa"
]);
function CO(e, t) {
  const n = [];
  let r;
  for (const [i, s] of e.entries()) {
    if (kd(s) || zb(s)) {
      r = void 0, n.push(s);
      continue;
    }
    if (!s0(s)) {
      t && gc(s) && t.warn(
        `Verses inside a '${s.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), r ? r.children.push(s) : n.push(s);
      continue;
    }
    if (xd(s) && TO.has(s.marker) && !gc(s)) {
      r = void 0, n.push(s);
      continue;
    }
    if (s.children.length === 0) {
      r ? r.children.push(s) : n.push(s);
      continue;
    }
    tT(s.children, t).forEach((o) => {
      const a = vO(s, o.nodes, i);
      if (!o.verse) {
        if (!a) return;
        r ? r.children.push(a) : n.push(a);
        return;
      }
      r = SO(o.verse), n.push(r), a && r.children.push(a);
    });
  }
  return n;
}
function tT(e, t) {
  const n = [{ nodes: [] }], r = (i) => n[n.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (nT(i)) {
      n.push({ verse: i, nodes: [i] });
      return;
    }
    if (ii(i)) {
      const s = tT(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && r(fm(i, o.nodes)), a.forEach((c) => {
        n.push({ verse: c.verse, nodes: [fm(i, c.nodes)] });
      });
      return;
    }
    t && gc(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), r(i);
  }), n;
}
function fm(e, t) {
  return { ...e, children: t };
}
function nT(e) {
  return Ak(e) && e.number !== "";
}
function gc(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((n) => nT(n) || gc(n)) : !1;
}
function vO(e, t, n) {
  if (t.length !== 0)
    return {
      ...e,
      children: t,
      [qr]: { ...e[qr], [Sk.key]: n }
    };
}
function SO(e) {
  return {
    type: nc,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: _k
  };
}
const dm = sT([]), _O = {
  type: Ey.getType(),
  version: 1
};
let vp = [], be, Vi, rT, dn;
function MO(e, t) {
  vp = [], PO(e), wO(t);
}
function EO(e = 0) {
}
function AO(e, t) {
  be = t ?? Qc();
  let n;
  return e ? (e.type !== nr && dn?.warn(`This USJ type '${e.type}' didn't match the expected type '${nr}'.`), e.version !== tr && dn?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${tr}'.`
  ), e.content.length > 0 ? (n = cf($r(e.content)), Wo(be) && (n = CO(n, dn))) : n = [dm]) : n = [dm], rT?.(vp), {
    root: {
      children: n,
      direction: null,
      format: "",
      indent: 0,
      type: "root",
      version: 1
    }
  };
}
function PO(e) {
  e && (Vi = e), e?.addMissingComments && (rT = e.addMissingComments);
}
function wO(e) {
  e && (dn = e);
}
function iT() {
  return Bt(be);
}
function NO(e, t) {
  let { marker: n } = e;
  n !== Fo && dn?.warn(`Unexpected book marker '${n}'!`), n = n ?? Fo;
  const { code: r } = e;
  (!r || !En.isValidBookCode(r)) && dn?.warn(`Unexpected book code '${r}'!`);
  const i = [];
  be?.markerMode === "editable" || be?.markerMode === "visible" ? i.push(
    un("marker", Ve(n) + " " + r + q)
  ) : be?.hasGutterParaMarkers && i.push(un("marker", Ve(n) + q, !0)), i.push(...t);
  const s = ht(e, GM);
  return at({
    type: En.getType(),
    marker: n,
    code: r ?? "",
    unknownAttributes: s,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Kb
  });
}
function OO(e) {
  let { marker: t } = e;
  t !== Ya && dn?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Ya;
  const { number: n, sid: r, altnumber: i, pubnumber: s } = e, o = ht(e, X_);
  let a;
  be?.markerMode === "visible" && (a = !0);
  const c = [
    nn(Fn(t, n) ?? "")
  ];
  return be?.markerMode === "editable" && JO(i, s, c), be?.markerMode === "editable" ? at({
    type: Rn.getType(),
    marker: t,
    number: n ?? "",
    sid: r,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    children: c,
    direction: null,
    format: "",
    indent: 0,
    version: hb
  }) : at({
    type: Ln.getType(),
    marker: t,
    number: n ?? "",
    showMarker: a,
    sid: r,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Lb
  });
}
function $O(e) {
  let { marker: t } = e;
  t !== Ja && dn?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Ja;
  const { number: n, sid: r, altnumber: i, pubnumber: s } = e, a = (vA(be) ?? Gt).getType(), c = be?.markerMode === "editable" ? ib : Ek;
  let l, u;
  be?.markerMode === "editable" ? l = Fn(t, n) : be?.markerMode === "visible" && (u = !0);
  const f = ht(e, W_);
  return at({
    type: a,
    text: l,
    ...l === void 0 ? void 0 : { detail: 0, format: 0, mode: "normal", style: "" },
    marker: t,
    number: n ?? "",
    sid: r,
    altnumber: i,
    pubnumber: s,
    showMarker: u,
    unknownAttributes: f,
    version: c
  });
}
function RO(e, t = [], n = !1) {
  let { marker: r } = e;
  ze.isValidMarker(r, Vi?.extraValidMarkers) || dn?.warn(`Unexpected char marker '${r}'!`), r = r ?? "";
  const i = [];
  if (be?.markerMode === "editable") {
    const [a] = t;
    Fr(a) ? a.text = q + a.text : a && t.unshift(nn(q));
  }
  t.length === 0 && t.push(nn(Pt)), sf(e.marker ?? "", i, n), i.push(...t);
  const s = e.closed === "false", o = ht(e, z_);
  return s || VO(r, o, i), s || of(e.marker ?? "", i, !1, n), at({
    type: ze.getType(),
    marker: r,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: nb
  });
}
function sT(e) {
  return {
    type: oi.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: xb
  };
}
function IO(e, t = []) {
  let { marker: n } = e;
  It.isValidMarker(n, Vi?.extraValidMarkers) || dn?.warn(`Unexpected para marker '${n}'!`), n = n ?? Bn;
  const r = [];
  if (rs(be) && (be?.markerMode === "editable" ? r.push(
    Zt(n),
    nn(q, Mr, "token")
  ) : (be?.markerMode === "visible" || be?.hasGutterParaMarkers) && r.push(
    un(
      "marker",
      Ve(n) + q,
      be?.hasGutterParaMarkers
    )
  )), r.push(...t), iT()) {
    const s = r.find(
      (o) => !Hs(o) && !(Fr(o) && o.text === q)
    );
    Fr(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => q.repeat(o.length)));
  }
  const i = ht(e, YM);
  return at({
    type: It.getType(),
    marker: n,
    unknownAttributes: i,
    children: r,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Bb
  });
}
function Sp() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function LO(e, t = []) {
  const n = ht(e, rM);
  return at({
    ...Sp(),
    type: Qi.getType(),
    unknownAttributes: n,
    children: t,
    version: bb
  });
}
function qO(e, t = []) {
  const n = ht(e, D0), r = e.marker ?? Ru, i = [];
  return be?.markerMode === "editable" ? i.push(
    Zt(r),
    nn(q, Mr, "token")
  ) : (be?.markerMode === "visible" || be?.hasGutterParaMarkers) && i.push(
    un(
      "marker",
      Ve(r) + q,
      be?.hasGutterParaMarkers
    )
  ), i.push(...t), at({
    ...Sp(),
    type: ts.getType(),
    marker: r,
    unknownAttributes: n,
    children: i,
    version: yk
  });
}
function DO(e, t = []) {
  const { marker: n, align: r, colspan: i } = e, s = [], o = n ?? Iu, a = Ob(o, i) ?? o;
  be?.markerMode === "editable" ? s.push(
    Zt(a),
    nn(q, Mr, "token")
  ) : (be?.markerMode === "visible" || be?.hasGutterParaMarkers) && s.push(
    un(
      "marker",
      Ve(a) + q,
      be?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = ht(
    e,
    U0
  );
  return at({
    ...Sp(),
    type: ns.getType(),
    marker: o,
    align: r,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: xk
  });
}
function KO(e, t) {
  const n = f0(t);
  let r = () => {
  };
  return Vi?.noteCallerOnClick && (r = Vi.noteCallerOnClick), at({
    type: _n.getType(),
    caller: e,
    previewText: n,
    onClick: r,
    version: Rk
  });
}
function UO(e, t) {
  let { marker: n } = e;
  tt.isValidMarker(n, Vi?.extraValidMarkers) || dn?.warn(`Unexpected note marker '${n}'!`), n = n ?? ed;
  const { category: r } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : sp(be?.noteMode), a = ht(e, o_), c = be?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  be?.markerMode === "editable" ? (l = Zt(n, "opening", !1, c), s || (u = Zt(n, "closing", !1, c))) : be?.markerMode === "visible" && (l = un("marker", Ve(n) + " "), s || (u = un("marker", st(n))));
  const f = [];
  let d;
  if (l && f.push(l), be?.markerMode === "editable" && !o)
    d = nn(vt(i), void 0, c), d.detail = Uy, f.push(d), GO(r, f), f.push(...t);
  else {
    const p = nn(q, Mr, "token");
    d = KO(i, t), f.push(d, p, ...t.flatMap(BO(p)));
  }
  return u && f.push(u), at({
    type: tt.getType(),
    marker: n,
    caller: i,
    isCollapsed: o,
    category: r,
    unknownAttributes: a,
    children: f,
    direction: null,
    format: "",
    indent: 0,
    version: jy
  });
}
function BO(e) {
  return (t) => Pb(t) ? [t] : [t, e];
}
function FO(e) {
  let { marker: t } = e;
  (!t || !ir.isValidMarker(t, Vi?.extraValidMarkers)) && dn?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: n, eid: r } = e, i = ht(e, Zf), s = ab(e);
  return at({
    type: ir.getType(),
    marker: t,
    sid: n,
    eid: r,
    unknownAttributes: i,
    attributeOrder: s,
    version: By
  });
}
function pm(e, t = []) {
  return {
    type: gt.getType(),
    typedIDs: { [Vt]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function zO(e, t) {
  const { marker: n } = e, r = e.type, i = ht(e, Z_), s = [];
  if (be?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = Fc(
      r,
      n,
      i
    );
    o && s.push(un("marker", o)), a && s.push(un("attribute", a)), s.push(...t), c && s.push(un("attribute", c)), l && s.push(un("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Fr(o) && (o.mode = "token");
  }), at({
    type: Xi.getType(),
    tag: r,
    marker: n,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: mb
  });
}
function jO(e) {
  return {
    type: ur.getType(),
    marker: e,
    text: vo(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: be?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: sk
  };
}
function Zt(e, t = "opening", n = !1, r = "normal") {
  return {
    type: Wn.getType(),
    marker: e,
    markerSyntax: t,
    // Emit the flag only for nested glyphs; absence means non-nested (see MarkerNode.exportJSON).
    ...n ? { nested: !0 } : {},
    text: "",
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
}
function nn(e, t = void 0, n = "normal") {
  const r = {
    type: it.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: n,
    style: "",
    version: 1
  };
  return t !== void 0 && (r[qr] = { textType: t }), r;
}
function un(e, t, n = !1) {
  const r = {
    type: Hn.getType(),
    text: t,
    textType: e,
    version: Ab
  };
  return n && (r[qr] = { [md.key]: !0 }), r;
}
function Ho(e, t) {
  return {
    type: Er.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Qy
  };
}
function sf(e, t, n = !1) {
  be?.markerMode === "editable" ? t.push(Zt(e, "opening", n)) : be?.markerMode === "visible" && t.push(un("marker", Ve(e, n)));
}
function of(e, t, n = !1, r = !1) {
  be?.markerMode === "editable" ? n ? t.push(Zt("", "selfClosing")) : t.push(Zt(e, "closing", r)) : be?.markerMode === "visible" && t.push(
    un(
      "marker",
      n ? st("") : st(e, r)
    )
  );
}
function VO(e, t, n) {
  if (be?.markerMode !== "editable" || !t) return;
  const r = Xn(t, Ws(e));
  r && n.push(nn(r, "attribute"));
}
function hm(e, t) {
  if (e.type !== "ms" || be?.markerMode !== "editable" && be?.markerMode !== "visible") return;
  const { marker: n, sid: r, eid: i } = e, s = ht(e, Zf), o = cb(
    r,
    i,
    s,
    ab(e)
  ), a = Xn(o, oa(n ?? ""));
  if (!a) return;
  const c = q + a;
  be?.markerMode === "editable" ? t.push(nn(c, "attribute")) : t.push(un("attribute", c));
}
function WO(e, t) {
  const n = e.marker ?? "";
  if (be?.markerMode === "editable") {
    const r = [];
    sf(n, r), hm(e, r), of(n, r, !0), t.push(Ho("milestone", r));
  } else
    sf(n, t), hm(e, t), of(n, t, !0);
}
function gm(e, t, n) {
  t !== void 0 && n.push(
    Ho(e, [
      Zt(e, "opening"),
      nn(q + t, "attribute"),
      Zt(e, "closing")
    ])
  );
}
function HO(e, t) {
  be?.markerMode === "editable" && (gm("va", e.altnumber, t), gm("vp", e.pubnumber, t));
}
function GO(e, t) {
  e !== void 0 && t.push(
    Ho("cat", [
      Zt("cat", "opening"),
      nn(q + e, "attribute"),
      Zt("cat", "closing")
    ])
  );
}
function JO(e, t, n) {
  e !== void 0 && n.push(
    Ho("ca", [
      Zt("ca", "opening"),
      nn(q + e, "attribute"),
      Zt("ca", "closing")
    ])
  ), t !== void 0 && n.push(
    Ho("cp", [
      Zt("cp", "opening"),
      nn(q + t, "attribute")
    ])
  );
}
function mm(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((n) => n - t);
}
function YO(e, t) {
  const n = e.indexOf(t, 0);
  n > -1 && e.splice(n, 1);
}
function ym(e, t) {
  t.marker === qi && t.sid !== void 0 && e.push(t.sid), t.marker === _s && t.eid !== void 0 && YO(e, t.eid);
}
function af(e, t, n = !1, r = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = n ? [pm(o, [...r])] : o, c = e[i];
  ym(r, c);
  const l = af(
    e.slice(i + 1, s),
    mm(t, i + 1),
    c.marker === qi,
    r
  ), u = pm(l, [...r]), f = e[s];
  ym(r, f);
  const d = af(
    e.slice(s + 1),
    mm(t, s + 1),
    f.marker === qi,
    r
  );
  return [...a, u, ...d];
}
function $r(e, t = !1) {
  const n = [], r = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && r.push(nn(iT() ? ZN(i) : i));
    else if (!i.type)
      dn?.error("Marker type is missing!");
    else
      switch (i.type) {
        case En.getType():
          r.push(NO(i, $r(i.content)));
          break;
        case Rn.getType():
          r.push(OO(i));
          break;
        case Kt.getType():
          be?.hasSpacing || r.push(_O), r.push($O(i)), HO(i, r);
          break;
        case ze.getType():
          r.push(
            RO(i, $r(i.content, !0), t)
          );
          break;
        case It.getType():
          r.push(IO(i, $r(i.content)));
          break;
        case tt.getType():
          r.push(UO(i, $r(i.content)));
          break;
        case ir.getType():
          Fy(i.marker ?? "") && (n.push(r.length), i.sid !== void 0 && vp?.push(i.sid)), r.push(FO(i)), WO(i, r);
          break;
        case ur.getType():
          r.push(jO(i.marker ?? ""));
          break;
        case yb:
          r.push(LO(i, $r(i.content)));
          break;
        case mk:
          r.push(qO(i, $r(i.content)));
          break;
        case kk:
          r.push(DO(i, $r(i.content)));
          break;
        default:
          dn?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), r.push(zO(i, $r(i.content)));
      }
  }), af(r, n);
}
function cf(e) {
  const t = e.findIndex(
    (r) => kd(r) || zb(r) || xd(r) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    sM(r)
  );
  if (t >= 0) {
    const r = cf(e.slice(0, t)), i = e[t], s = cf(e.slice(t + 1));
    return [...r, i, ...s];
  } else if (e.some((r) => "text" in r && "mode" in r || Ak(r)))
    return [sT(e)];
  return e;
}
const or = {
  initialize: MO,
  reset: EO,
  serializeEditorState: AO
};
function oT(e) {
  if (e && !w(e)) {
    if (C(e)) return e;
    if (E(e))
      for (const t of e.getChildren()) {
        const n = oT(t);
        if (n) return n;
      }
  }
}
function XO() {
  const e = N();
  if (!M(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), n = e.anchor.offset;
    if ((C(t) && !w(t) ? Fi(t) : void 0) && C(t)) {
      const i = Re(" ");
      if (n <= 0) t.insertBefore(i);
      else if (n >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(n);
        o.insertAfter(i);
      }
      Ls(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = oT(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(q) ? q : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return C(t) && t.getTextContent()[n] === " " ? (t.select(n + 1, n + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of aT(e)) {
    if (!Fi(t)) continue;
    Ls(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const n = t.getLatest(), r = n.getTextContent();
    r.startsWith(q) && n.setTextContent(r.slice(q.length));
  }
  return !0;
}
function aT(e) {
  const [t, n] = Bf(e), [r, i] = e.isBackward() ? [n, t] : [t, n], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!C(a) || w(a) || de(a, ke) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? r : 0, f = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= f) return;
    const d = a.splitText(u, f), p = d.length === 3 ? d[1] : f === l ? d[d.length - 1] : d[0];
    p && o.push(p);
  }), o;
}
function cT(e) {
  let t = e;
  for (; U(t) || ue(t); ) t = t.getParent();
  return t;
}
function lT(e) {
  const t = cT(e.getParent());
  return wt(t) ? t : void 0;
}
function QO() {
  const e = N();
  if (!M(e)) return !1;
  const t = e.focus.getNode();
  return Fi(t) ? !!lT(t) : !1;
}
function uT(e) {
  const t = Re(""), n = e.getNode(), r = e.offset;
  if (C(n))
    if (r <= 0) n.insertBefore(t);
    else if (r >= n.getTextContentSize()) n.insertAfter(t);
    else {
      const [, o] = n.splitText(r);
      o.insertBefore(t);
    }
  else {
    const o = e.getNode(), a = E(o) ? o : o.getParent(), c = E(o) ? o.getChildAtIndex(r) : o;
    if (c) c.insertBefore(t);
    else if (a) a.append(t);
    else return { parent: void 0, moving: [] };
  }
  for (let o = t.getParent(); ; o = t.getParent())
    if (U(o)) Ls(t, { renderGlyphs: !0 });
    else if (!ue(o) || !ZO(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function ZO(e, t) {
  const n = e.getNextSiblings();
  if (!e.getPreviousSibling())
    return t.insertBefore(e), !0;
  if (n.length === 0)
    return t.insertAfter(e), !0;
  const r = N();
  if (!M(r)) return !1;
  const i = t.insertNewAfter(r, !1);
  return i ? (i.append(...n), t.insertAfter(e), !0) : !1;
}
function fT(e) {
  const t = e.anchor.getNode();
  if (w(t) && !Dd(t, e.anchor.offset)) {
    const n = t.getParent();
    if (U(n) && t.is(n.getLastChild())) {
      n.selectNext(0, 0);
      const r = N();
      return M(r) && r.isCollapsed() ? r : void 0;
    }
  }
  return e;
}
function dT() {
  const e = N();
  if (!M(e) || !e.isCollapsed()) return !1;
  const t = fT(e);
  if (!t) return !1;
  const n = t.anchor.getNode();
  if (!C(n) || w(n) || !Fi(n)) return !1;
  const r = lT(n);
  if (!r) return !1;
  const { moving: i } = uT(t.anchor), s = r.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; ue(o); ) o = o.getFirstChild() ?? void 0;
  return U(o) ? Hc(o) : s.select(0, 0), !0;
}
const pT = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${jb(Ee().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = N(), t = Xb(e), n = zd(t);
      let r, i = !1;
      if (!n)
        r = "1";
      else {
        const o = n.getNumber();
        r = p0(0, o);
        const a = _E(n);
        if (a) {
          const c = a.getNumber();
          i = r === c || h0(c) && Sd(parseInt(r, 10), c);
        }
      }
      return { content: [{
        type: "verse",
        marker: "v",
        number: r
      }], highlightInserted: i };
    }
  }
};
function lf(e, t) {
  return tt.isValidMarker(e, t) || !!pT[e] || It.isValidMarker(e, t) || ze.isValidMarker(e, t);
}
function e$(e, t) {
  return ze.isNoteContentMarker(e) ? !1 : ze.isValidMarker(e, t);
}
function hT(e, t, n, r, i, s) {
  const o = tx(
    e,
    void 0,
    void 0,
    t,
    r ?? Qc(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (n.current = o.getKey()), o?.getKey();
}
function uf(e, t, n, r, i, s, o) {
  if (tt.isValidMarker(e, r?.extraValidMarkers)) {
    let l;
    return { action: (f) => {
      f.editor.update(() => {
        l = hT(
          e,
          f.reference,
          t,
          n,
          r,
          i
        );
      }, s);
    }, label: void 0, getInsertedNoteKey: () => l };
  }
  const a = o$(e, r?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = N();
      M(u) && (Kd(u), l.noteText = u.getTextContent());
      const { content: f, highlightInserted: d } = a.action(l), p = cg(f, or, n), h = Nl(p);
      if (M(u)) {
        const g = u.anchor.getNode(), m = g.getParent(), y = Fi(g), k = u.anchor.key === u.focus.key;
        if (U(h) && y && k && !cu(h, o))
          r$(
            u,
            h,
            g,
            n?.markerMode === "editable"
          );
        else if (U(h) && !k && !cu(h, o) && i$(u))
          s$(u, h, n?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          a$(
            u,
            () => Nl(p)
          );
        else if (E(h) && !h.isInline()) {
          const x = u.insertParagraph();
          if (x) {
            const A = x.getChildren();
            h.append(...A), x.replace(h), wt(h) && Qs(h) || h.selectStart();
          }
        } else if (U(h) && C(g) && !w(g) && U(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        cu(h, o)) {
          const x = g.getParent();
          if (U(x)) {
            const A = u.anchor.offset;
            if (A === 0) g.insertBefore(h);
            else if (A >= g.getTextContentSize()) g.insertAfter(h);
            else {
              const [j] = g.splitText(A);
              j.insertAfter(h);
            }
            h.getChildren().forEach((j) => {
              w(j) && j.setNested(!0);
            });
            const _ = h.getChildren().find((j) => C(j) && !w(j));
            _ && C(_) ? _.select(
              _.getTextContentSize(),
              _.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (C(g) && !w(g) && u.isCollapsed() && (D(m) || U(m) && D(m.getParent()))) {
          const x = U(m) ? m : void 0, A = x ? t$(g, u.anchor.offset) : [];
          let j = (x ?? g).insertAfter(h);
          if (gn(h)) {
            const $ = {
              ...n || Qc(),
              markerMode: "hidden"
            }, ne = cg(
              f,
              or,
              $
            ), fe = Nl(ne);
            j = j.insertAfter(fe);
          }
          if (A.length > 0 && x) {
            const $ = mc(x).append(...A);
            j.insertAfter($), x.isEmpty() && x.remove();
          } else C(j.getNextSibling()) || j.insertAfter(Bi());
          E(j) && j.selectEnd();
        } else if (u.insertNodes([h]), y$(h), d) {
          const x = Sy();
          x.add(h.getKey()), Un(x);
        } else if (U(h)) {
          const x = h.getChildren().find((A) => C(A) && !w(A));
          x && C(x) ? x.select(
            x.getTextContentSize(),
            x.getTextContentSize()
          ) : h.selectEnd();
        } else {
          const x = h.getNextSibling();
          x ? x.selectStart() : h.selectStart();
        }
      } else
        u?.insertNodes([h]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function t$(e, t) {
  const n = e.getTextContentSize();
  let r;
  return t <= 0 ? r = e : t >= n ? r = e.getNextSibling() : r = e.splitText(t)[1] ?? e.getNextSibling(), r ? [r, ...r.getNextSiblings()] : [];
}
function cu(e, t) {
  return ((t ?? rc).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function n$(e, t) {
  t && e.getChildren().forEach((i) => {
    w(i) && i.setNested(!0);
  }), e.getChildren().some((i) => w(i) && i.getMarkerSyntax() === "closing") || e.append($t(e.getMarker(), "closing", t));
  const r = e.getUnknownAttributes();
  if (r?.closed === "false") {
    const i = { ...r };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function r$(e, t, n, r) {
  let i = t;
  if (e.anchor.type === "element" && U(n)) {
    const o = n.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : n.append(t);
  } else if (e.isCollapsed() || !C(n)) {
    const o = e.anchor.offset;
    if (C(n) && o > 0 && o < n.getTextContentSize()) {
      const [a] = n.splitText(o);
      a.insertAfter(t);
    } else C(n) && o >= n.getTextContentSize() ? n.insertAfter(t) : n.insertBefore(t);
  } else {
    const [o, a] = Bs(e);
    let c = n;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (Ls(i, { renderGlyphs: r }), i !== t) {
    i.insertBefore(t), C(i) && !i.getTextContent().startsWith(q) && i.setTextContent(q + i.getTextContent());
    const o = t.getChildren().find((a) => C(a) && !w(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => C(o) && !w(o));
  C(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function i$(e) {
  let t, n = !1;
  for (const r of e.getNodes()) {
    if (w(r) || U(r)) continue;
    if (!C(r) || r.getType() !== it.getType() || de(r, ke) === "attribute") return !1;
    const i = H0(r);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Fi(r) && (n = !0);
  }
  return n;
}
function s$(e, t, n) {
  const r = aT(e);
  if (r.length === 0) return;
  r.forEach((a) => {
    if (!Fi(a)) return;
    Ls(a, { renderGlyphs: n });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(q) && c.setTextContent(l.slice(q.length));
  });
  const i = r[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(q) || i.setTextContent(q + i.getTextContent());
  const s = t.getChildren().find((a) => C(a) && !w(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  r.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function o$(e, t) {
  let n = pT[e];
  return n || (It.isValidMarker(e, t) ? n = {
    action: () => ({ content: [{ type: It.getType(), marker: e, content: [] }] })
  } : ze.isValidMarker(e, t) && (n = {
    action: () => {
      const r = { type: ze.getType(), marker: e };
      return (ze.isValidFootnoteMarker(e) || ze.isValidCrossReferenceMarker(e)) && (r.closed = "false"), { content: [r] };
    }
  })), n;
}
function a$(e, t) {
  const n = e.getNodes(), [r, i] = Bs(e);
  let s;
  n.forEach((o, a) => {
    if (E(s) && s.isParentOf(o))
      return;
    const c = gT(
      o,
      a === 0,
      a === n.length - 1,
      r,
      i
    );
    if (!c) {
      s = void 0;
      return;
    }
    let l = !1;
    s || (s = t(), c.insertBefore(s), l = !0, U(s) && s.getChildren().some((f) => w(f) && f.getMarkerSyntax() === "opening") && n$(s, U(s.getParent()))), l$(c, s, l);
  }), (C(s) || E(s)) && s.selectEnd();
}
function Bs(e) {
  const t = e.anchor.offset, n = e.focus.offset;
  return e.isBackward() ? [n, t] : [t, n];
}
function _p(e) {
  return ue(e) || D(e) || D(e.getParent());
}
function gT(e, t, n, r, i) {
  if (!_p(e)) {
    if (C(e))
      return c$(e, t, n, r, i);
    if (E(e) && e.isInline())
      return e;
  }
}
function c$(e, t, n, r, i) {
  const s = e.getTextContentSize(), o = t ? r : 0, a = n ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function l$(e, t, n) {
  if (C(t)) {
    const r = ff(e, t);
    t.setTextContent(r), e.remove();
  } else if (E(t)) {
    const r = t.getChildren(), i = r.find(
      (s) => w(s) && s.getMarkerSyntax() !== "opening"
    );
    if (i)
      i.insertBefore(e), n && r.filter((s) => !w(s)).forEach((s) => s.remove());
    else if (n) {
      const s = t.getChildrenSize();
      t.append(e);
      for (let o = 0; o < s; o++) t.getFirstChild()?.remove();
    } else
      t.append(e);
    ff(e, t), n && U(t) && t.getChildren().some((s) => w(s)) && C(e) && !w(e) && !e.getTextContent().startsWith(q) && e.setTextContent(q + e.getTextContent());
  }
}
function ff(e, t) {
  let n = e.getTextContent();
  if (C(e) && t.isInline() && n.startsWith(" ") && n.trimStart() !== "") {
    n = n.trimStart(), e.setTextContent(n);
    const r = t.getPreviousSibling();
    Bd(r), C(r) || t.insertBefore(Re(" "));
  }
  return n;
}
function mT(e, t, n) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), f = e.anchor.offset, d = Wi(u, t);
    if (!d) return !1;
    const p = C(u) ? u.getTextContentSize() : 0;
    if (bm(d, n), C(u) && u.isAttached()) {
      const h = u.getTextContentSize(), g = Math.max(p - h, 0), m = Math.max(0, Math.min(f - g, h)), y = N();
      M(y) && y.setTextNodeRange(u, m, u, m);
    }
    return !0;
  }
  const r = e.getNodes(), i = e.isBackward(), [s, o] = Bs(e);
  if (!Ep(r, t, s, o)) return !1;
  const a = Mp(r, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const f = Wi(u, t);
    if (!f || c.has(f.getKey())) return;
    c.add(f.getKey());
    const d = xT(f, a);
    d && (bm(d, n), l = !0);
  }), TT(a, i), l;
}
function bm(e, t) {
  e.getChildren().forEach((r) => {
    mn(r) && r.remove();
  });
  const n = e.getChildren();
  if (n.length === 0 || e.getTextContent() === Pt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && n.forEach((r) => {
    const i = r.getTextContent();
    C(r) && i.startsWith(q) && r.setTextContent(i.slice(q.length));
  }), yu(e);
}
function Mp(e, t, n) {
  const r = [];
  return e.forEach((i, s) => {
    const o = gT(
      i,
      s === 0,
      s === e.length - 1,
      t,
      n
    );
    C(o) && r.push(o);
  }), r;
}
function Wi(e, t) {
  let n = e, r;
  for (; n && !wt(n); ) {
    if (D(n)) return;
    !r && U(n) && (t === void 0 || n.getMarker() === t) && (r = n), n = n.getParent();
  }
  return r;
}
function yT(e) {
  const t = Qe(
    e,
    (n) => D(n) || wt(n)
  );
  return D(t);
}
function bT(e) {
  return e.filter(
    (t) => !_p(t) && (C(t) || E(t) && t.isInline())
  );
}
function u$(e, t, n) {
  const r = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!C(i) || _p(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? n : o;
    a === 0 && c === o && r.add(i.getKey());
  }), r;
}
function f$(e, t, n) {
  return e.getChildren().some(
    (r) => E(r) && t.some((i) => r.isParentOf(i)) && !kT(r, n)
  );
}
function Ep(e, t, n, r, i) {
  const s = bT(e), o = u$(e, n, r), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Wi(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !f$(l, s, o);
  });
}
function kT(e, t) {
  return e.getAllTextNodes().every((n) => t.has(n.getKey()) || mn(n));
}
function xT(e, t) {
  const n = new Set(t.map((l) => l.getKey())), r = e.getChildren(), i = [];
  for (const [l, u] of r.entries())
    if (n.has(u.getKey()))
      i.push(l);
    else if (E(u) && t.some((f) => u.isParentOf(f))) {
      if (!kT(u, n)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && mn(r[s - 1]) && (s -= 1), o < r.length - 1 && mn(r[o + 1]) && (o += 1), s === 0 && o === r.length - 1) return e;
  const a = r.slice(o + 1);
  a.length > 0 && e.insertAfter(mc(e).append(...a));
  const c = r.slice(0, s);
  return c.length > 0 && e.insertBefore(mc(e).append(...c)), e;
}
function mc(e) {
  return TS(e);
}
function TT(e, t) {
  const n = N(), r = e[0], i = e[e.length - 1];
  if (!M(n) || !r.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? n.setTextNodeRange(i, s, r, 0) : n.setTextNodeRange(r, 0, i, s);
}
function d$(e, t, n) {
  if (e.isCollapsed()) {
    const l = Wi(e.anchor.getNode(), n);
    return !l || l.getMarker() === t ? !1 : (Vh(l, t), !0);
  }
  const r = e.getNodes(), [i, s] = Bs(e);
  if (!Ep(r, n, i, s, t)) return !1;
  const o = Mp(r, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = Wi(l, n);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const f = xT(u, o);
    f && (Vh(f, t), c = !0);
  }), c;
}
function p$(e, t, n, r) {
  if (e.isCollapsed()) return !1;
  const i = n?.filter(
    (m) => m !== t
  ), s = e.getNodes(), [o, a] = Bs(e);
  if (!!!i?.some(
    (m) => Ep(s, m, o, a)
  ) && !h$(s, t)) return !1;
  let l = !1;
  i?.forEach((m) => {
    const y = N();
    M(y) && mT(y, m, r) && (l = !0);
  });
  const u = N();
  if (!M(u)) return l;
  const f = u.isBackward(), [d, p] = Bs(u), h = Mp(
    u.getNodes(),
    d,
    p
  );
  if (h.length === 0) return l;
  const g = h.filter(
    (m) => !yT(m) && !Wi(m, t)
  );
  return g.length > 0 && (g$(g).forEach((m) => m$(m, t)), l = !0), TT(h, f), l;
}
function h$(e, t) {
  return bT(e).some(
    (n) => !yT(n) && !Wi(n, t)
  );
}
function g$(e) {
  const t = [];
  let n;
  return e.forEach((r) => {
    const i = n?.[n.length - 1];
    n && i?.getNextSibling()?.is(r) ? n.push(r) : (n = [r], t.push(n));
  }), t;
}
function m$(e, t) {
  const n = e[0].getPreviousSibling(), r = e[e.length - 1].getNextSibling(), i = [n, r].find(
    (a) => U(a) && a.getMarker() === t
  ), s = i ? mc(i) : Kr(t);
  e[0].insertBefore(s), s.append(...e), i === n || ff(e[0], s);
}
function y$(e) {
  Me(e) && (Bd(e.getPreviousSibling()), wk(e.getNextSibling()));
}
const CT = {
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
}, km = "psc-active-text", Aa = "psc-empty-text";
function b$({ viewOptions: e }) {
  const [t] = Ce(), n = te(void 0), r = e?.hasActiveTextFocusBox ?? !1;
  return H(() => {
    if (!r) return;
    function i(o) {
      n.current && t.getElementByKey(n.current)?.classList.remove(km), n.current = o, o && t.getElementByKey(o)?.classList.add(km);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        Rc,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Aa}`);
          if (!c) return !1;
          const l = Ji(c);
          if (!Me(l)) return !1;
          const u = l.getParent();
          if (!E(u)) return !1;
          const f = l.getIndexWithinParent() + 1;
          return u.select(f, f), !1;
        },
        Xt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const f = lu(), d = k$(), p = [], h = [];
          return Ee().getChildren().forEach((g) => {
            if (!E(g)) return;
            const { emptyKeys: m, nonEmptyKeys: y } = T$(g);
            p.push(...m), h.push(...y);
          }), { newActiveKey: f, activeVerseKey: d, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== n.current && i(a), l.forEach((f) => {
          f === c ? t.getElementByKey(f)?.classList.remove(Aa) : t.getElementByKey(f)?.classList.add(Aa);
        }), u.forEach((f) => t.getElementByKey(f)?.classList.remove(Aa));
      }),
      t.registerCommand(
        Vf,
        () => (i(void 0), !1),
        Xt
      ),
      t.registerCommand(
        CS,
        () => {
          const o = t.getEditorState().read(lu);
          return o !== n.current && i(o), !1;
        },
        Xt
      )
    ];
    return i(t.getEditorState().read(lu)), et(...s);
  }, [t, r]), null;
}
function lu() {
  return x$(N() ?? void 0)?.getKey();
}
function k$() {
  const e = N();
  if (!M(e)) return;
  const t = e.anchor, n = t.getNode(), r = n.getTopLevelElement();
  if (!E(r)) return;
  let i;
  if (n.is(r))
    i = t.offset;
  else {
    let a = n;
    for (; a && !a.getParent()?.is(r); )
      a = a.getParent() ?? void 0;
    if (!a) return;
    i = a.getIndexWithinParent() + 1;
  }
  const s = r.getChildren();
  let o;
  for (let a = 0; a < i && a < s.length; a++)
    Me(s[a]) && (o = s[a].getKey());
  return o;
}
function x$(e) {
  if (M(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function T$(e) {
  const t = e.getChildren(), n = [], r = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!Me(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (Me(c)) break;
      if (!(Rt(c) || w(c)) && c.getTextContent().replaceAll(Io, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? r : n).push(s.getKey());
  }
  return { emptyKeys: n, nonEmptyKeys: r };
}
function df(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function vT(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const n = e.getRootElement()?.ownerDocument.getSelection(), r = n?.anchorNode, i = n?.focusNode;
  return !!r && !!i && !Ty(e, r, i);
}
function ST(e, t) {
  return e.length <= t ? e : e.slice(0, Ap(e, t));
}
function Ap(e, t) {
  if (t >= e.length) return e.length;
  let n = 0;
  for (const { index: r, segment: i } of ES(e)) {
    if (r + i.length > t) break;
    n = r + i.length;
  }
  return n;
}
const C$ = 16;
function v$(e, { $isHidden: t, $measure: n } = {}) {
  const r = (k) => t ? Pp(k, t).length : k.getTextContent().length;
  n ??= r;
  const i = N();
  if (!M(i) || i.isCollapsed() || n(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = yc(s), l = yc(o), u = i.getNodes(), f = new Map(u.map((k) => [k.getKey(), M$(k)])), d = u.length > 0 ? f.get(u[0].getKey()) : void 0, p = d && S$(s, d) ? d : void 0, h = (k) => {
    const x = k > 0 ? _$(u, f, p, c, l, k, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), x ? i.focus.set(x.node.getKey(), x.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!x;
  };
  let g = Math.min(e, r(i));
  if (h(g) && n(i) <= e) return !0;
  let m = 0, y = 0;
  g -= 1;
  for (let k = 0; k < C$ && m <= g; k++) {
    const x = Math.floor((m + g) / 2);
    h(x) && n(i) <= e ? (y = x, m = x + 1) : g = x - 1;
  }
  return h(y), !0;
}
function pf(e) {
  return e.isToken() || da(e) || $e(e.getParent());
}
function S$(e, t) {
  const n = E(t) ? t.getAllTextNodes()[0] : void 0;
  return !!n && Qt(n.getKey(), 0, "text").isBefore(e);
}
function _$(e, t, n, r, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, u, f;
  const d = /* @__PURE__ */ new Map(), p = (g) => {
    const m = t.get(g.getKey());
    return m && n?.is(m) ? void 0 : m;
  }, h = (g) => {
    let m = f ? f.endBefore : g;
    for (; ; ) {
      const y = E$(m, e, r);
      if (!y || !m || y.node.is(m.node)) return y;
      const k = p(y.node);
      if (!k || k.is(p(m.node))) return y;
      m = d.get(k.getKey());
    }
  };
  for (let g = 0; g <= a; g++) {
    const m = e[g], y = p(m);
    if (f && !f.node.is(y) && (u && f.node.isParentOf(u.node) && (u = f.endBefore), f = void 0), y && !f && (f = { node: y, endBefore: u }, d.set(y.getKey(), u)), !o?.(m)) {
      if (E(m) && !m.isInline()) {
        if (!l) {
          if (c + 1 > s) return h(u);
          c += 1;
        }
        l = !m.isEmpty();
        continue;
      }
      if (l = !1, C(m)) {
        const k = g === 0 ? r : 0, x = g === a ? i : m.getTextContentSize(), A = x - k, _ = pf(m);
        if (_ && c + A > s) return h(u);
        if (!_ && c + A >= s) {
          const j = Ap(m.getTextContent(), k + (s - c));
          return h({ node: m, offset: Math.max(k, j) });
        }
        c += A, u = { node: m, offset: x };
      } else if (yn(m) || Gi(m)) {
        const k = m.getTextContentSize();
        if (c + k > s) return h(u);
        c += k;
      }
    }
  }
  return h(u);
}
function M$(e) {
  let t;
  for (let n = e; n; n = n.getParent())
    (D(n) || dp(n)) && (t = n);
  return t;
}
function E$(e, t, n) {
  if (!e) return e;
  const r = Qe(e.node, (m) => E(m) && !m.isInline()), i = E(r) ? r.getAllTextNodes() : [e.node], s = i.findIndex((m) => m.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let m = o; m <= a; m++)
    l.push(c.length), c += i[m].getTextContent();
  const u = l[s - o], f = u + e.offset, d = Ap(c, f);
  if (d === f) return e;
  const p = (m) => t[0]?.is(m) ?? !1;
  if (pf(e.node)) return { ...e, offset: p(e.node) ? n : 0 };
  if (d >= u) {
    const m = d - u;
    return m >= (p(e.node) ? n : 0) ? { ...e, offset: m } : void 0;
  }
  const h = s > o ? i[s - 1] : void 0;
  if (!h || !t.some((m) => m.is(h))) return;
  if (pf(h))
    return { node: h, offset: p(h) ? n : 0 };
  const g = d - l[0];
  return g >= (p(h) ? n : 0) ? { node: h, offset: g } : void 0;
}
function Pp(e, t) {
  const n = e.getNodes(), r = n.length - 1, [i, s] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], o = r === 0 && i.type === "element" && s.type === "element" && i.offset !== s.offset;
  let a = "", c = !0;
  return n.forEach((l, u) => {
    if (!t(l)) {
      if (E(l) && !l.isInline()) {
        c || (a += `
`), c = !l.isEmpty();
        return;
      }
      if (c = !1, C(l)) {
        const f = l.getTextContent();
        o ? a += f : a += f.slice(
          u === 0 ? yc(i) : 0,
          u === r ? yc(s) : f.length
        );
      } else (yn(l) || Gi(l)) && (u !== r || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function hf(e) {
  const t = e.getParent();
  return !!t && Qe(t, (n) => D(n) && !!n.getIsCollapsed()) !== null;
}
function _T(e) {
  const t = /* @__PURE__ */ new Map(), n = (i) => {
    Lt(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (n(i), E(i)) for (const { node: s } of Yi(i)) n(s);
  let r = 0;
  for (const i of t.values()) r += i;
  return r;
}
function A$(e) {
  return e.getNodes().some(
    (t) => yn(t) || D(t) || Me(t) || ot(t) || dp(t)
  );
}
function yc(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return E(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const Gn = String.raw`\w-`, MT = "a-z0-9", P$ = `[a-z][${MT}]*`, ET = new RegExp(
  String.raw`^\\(\+?[${Gn}]+)[ \u00A0]$`
), Zs = new RegExp(String.raw`^\\(\+?[${Gn}]+)$`), w$ = new RegExp(String.raw`^\\\+?[${Gn}]*\*$`), N$ = new RegExp(
  String.raw`^\\(\+?[${Gn}]+)(?:[ \u00A0]|$)`
), O$ = new RegExp(
  String.raw`^\\(\+?)([${Gn}]+)`
), AT = new RegExp(
  String.raw`^(?:[${Gn}]+[*\\]?|[*\\])$`
), $$ = new RegExp(
  String.raw`\\\+?[${Gn}]+(?:\\?\*|[ \u00A0])`
), PT = new RegExp(
  String.raw`\\\+?[${Gn}]*$`
), R$ = new RegExp(
  String.raw`^\\(${P$})( |$)`
), I$ = new RegExp(
  String.raw`\\[${MT}+*]*$`,
  "i"
);
function wT(e) {
  const t = e.getParent();
  if (!D(t) || t.getIsCollapsed() !== !1 || !Jf(t.getMarker())?.includes("caller")) return !1;
  const n = t.getChildren();
  let r = 0;
  for (; r < n.length; ) {
    const i = n[r];
    if (!w(i) || i.getMarkerSyntax() !== "opening") break;
    r++;
  }
  return e.is(n[r]);
}
const bc = "usfm:", NT = "usfmopen", OT = "usfmclosed";
function L$(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const q$ = new RegExp(
  [bc, NT, OT].map(L$).join("|")
), D$ = "\uFEFF", K$ = /^usfm_(.+)$/;
function U$(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function B$(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, n) => String.fromCharCode(Number.parseInt(n, 16))
  );
}
function F$(e) {
  return e.startsWith(bc) ? B$(e.slice(bc.length)).replace(/\r\n?|\n/g, " ") : "";
}
function $T(e) {
  for (const t of e.classList) {
    const n = K$.exec(t);
    if (n) return n[1];
  }
}
function z$(e) {
  const t = $T(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function j$(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let n = t.nextNode(); n; n = t.nextNode())
    if ((n.nodeValue ?? "").startsWith(bc)) return !0;
  for (const n of e.querySelectorAll("*")) {
    const { classList: r } = n;
    if (!(!r.contains(NT) && !r.contains(OT)) && $T(n) !== void 0)
      return !0;
  }
  return !1;
}
function RT(e, t, n) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || n.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    n.push(F$(e.nodeValue ?? ""));
    return;
  }
  if (!U$(e)) return;
  const { classList: r } = e, i = (u) => e.childNodes.forEach((f) => RT(f, u, n));
  if (t) {
    i(!r.contains("include"));
    return;
  }
  if (r.contains("exclude")) {
    i(!0);
    return;
  }
  const s = e.tagName.toLowerCase();
  if (s === "br") {
    n.push(`
`);
    return;
  }
  if (s === "span" && e.getAttribute("class") === "attribute") {
    n.push(e.textContent ?? "");
    return;
  }
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? z$(e) : void 0, c = a !== void 0 && r.contains("usfmopen"), l = a !== void 0 && r.contains("usfmclosed");
  o && n.push(`
`), (c || l) && n.push(`\\${a} `), i(!1), l && n.push(`\\${a}*`), o && n.push(`
`);
}
function V$(e) {
  if (!q$.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((r) => r.remove()), !j$(t)) return;
  const n = [];
  return t.childNodes.forEach((r) => RT(r, !1, n)), n.join("").replaceAll(D$, "").replaceAll(q, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function W$(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const n = de(e, ke);
  if (n === "attribute" || n === Mr || wT(e)) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if ($e(o) || Ze(o)) return;
  const r = t.startsWith(q) && U(e.getParent()), i = r ? t.slice(1) : t, s = (r ? q : "") + i.replace(/ (?=[ \u00A0])/g, q).replace(new RegExp("(?<=\\u00A0) ", "g"), q);
  s !== t && e.setTextContent(s);
}
function H$(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((n) => n.remove()), t.querySelectorAll("br").forEach((n) => n.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((n) => n.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function G$(e, t) {
  if (!e) return !1;
  try {
    const n = JSON.parse(e);
    if (typeof n != "object" || n === null) return !1;
    const { namespace: r, nodes: i } = n;
    return r === t && Array.isArray(i);
  } catch {
    return !1;
  }
}
function gf(e, t) {
  const n = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!n) return;
  const r = (a) => a.replace(/\r\n?/g, `
`), i = r(n.getData("text/plain")), s = n.getData("text/html"), o = s ? V$(s) : void 0;
  return {
    text: o ? r(o) : i || (s ? r(H$(s)) : ""),
    isInternal: G$(
      n.getData("application/x-lexical-editor"),
      t
    )
  };
}
const xm = String.raw`\\(?:\+?[${Gn}]+\*?|\*)`, J$ = new RegExp(
  String.raw`(?<=${xm})\u00A0|\u00A0(?=${xm})`,
  "g"
);
function wp(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(J$, " ").replaceAll(q, "~");
}
const IT = new RegExp(
  String.raw`\\c(?![${Gn}])[ \u00A0]*[^\s\\]*`,
  "g"
), LT = new RegExp(String.raw`\\id(?![${Gn}])[^\n\\]*`, "g"), Y$ = new RegExp(
  String.raw`^(?:${IT.source}|${LT.source})`
);
function Np(e) {
  return e.split(`
`).map((t) => {
    const n = t.replace(IT, "").replace(LT, "");
    return Y$.test(t) && n.trim() === "" && t.trim() !== "" ? void 0 : n;
  }).filter((t) => t !== void 0).join(`
`);
}
function mf(e) {
  if (C(e) && de(e, ke) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Be(t)) return !0;
  return !1;
}
function X$(e) {
  return mf(e.anchor.getNode()) || mf(e.focus.getNode());
}
function Q$(e) {
  const { anchor: t, focus: n } = e;
  return t.key === n.key && mf(t.getNode());
}
function Z$(e, t) {
  const r = Q$(e) ? t : wp(Np(t));
  r && e.insertText(r.replace(/\n/g, " "));
}
function eR(e, t = !1, n = () => {
}) {
  const r = gf(e, Ut()._config.namespace);
  if (!r) return !1;
  const i = N(), s = M(i) && X$(i);
  if (!s && r.isInternal || t && M(i) && Es(i))
    return !1;
  const { text: o } = r;
  if (!o || !M(i)) return !1;
  if (e?.preventDefault(), s)
    return Z$(i, o), !0;
  const a = wp(Np(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  n(), i.isCollapsed() || i.removeText();
  const l = Ut();
  return c.forEach((u, f) => {
    if (f > 0 && l.dispatchCommand(Ro, void 0), u === "") return;
    const d = N();
    M(d) && d.insertText(u);
  }), !0;
}
function tR(e) {
  if (e.getTextContent() !== q) return !1;
  const t = e.getParent();
  return D(t) ? !Lt(e.getPreviousSibling()) : !1;
}
function nR(e, t) {
  if (t || e.getTextContent() !== q) return "";
  const n = e.getParent();
  if (!D(n) || !Lt(e.getPreviousSibling())) return "";
  const r = n.getCategory();
  return r ? `\\cat ${r}\\cat*` : "";
}
function rR(e) {
  const t = e.getParent();
  return (D(t) ? t.getCaller() : void 0) || Lo;
}
function iR(e) {
  const t = e.getParent();
  return !t || ci(t) === void 0;
}
function Op(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const n = t[0], r = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Bf(e);
  let l = "", u = !0;
  for (const f of t) {
    if (E(f) && !f.isInline()) {
      !u && iR(f) && (l += `
`), u = !f.isEmpty();
      continue;
    }
    if (u = !1, Lt(f))
      (f !== r || !e.isCollapsed()) && (l += (f === n ? "" : " ") + rR(f));
    else if (C(f)) {
      let d = f.getTextContent();
      f === n ? f === r ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (d = a < c ? d.slice(a, c) : d.slice(c, a)) : d = o ? d.slice(a) : d.slice(c) : f === r && (d = o ? d.slice(0, c) : d.slice(0, a)), l += tR(f) ? "" : d.replaceAll(q, " ") + nR(f, f === r);
    } else (yn(f) || Gi(f)) && (f !== r || !e.isCollapsed()) && (l += f.getTextContent().replaceAll(q, " "));
  }
  return l;
}
function qT(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function sR(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (n) => Ie(n) || $e(n)
    )
  );
}
function oR(e) {
  const t = N();
  if (!M(t) || t.isCollapsed()) return;
  const n = Op(t), r = {
    "text/plain": n,
    "text/html": qT(n)
  };
  if (il() || sR(t)) return r;
  const i = PS(e);
  return i && (r["application/x-lexical-editor"] = i), r;
}
function Tm(e, t, n, r) {
  const i = N();
  if (!M(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !Nx();
  const s = oR(t);
  return s ? (r !== void 0 && delete s["application/x-lexical-editor"], DT(e, t, i, s, n, r)) : !1;
}
function DT(e, t, n, r, i, s) {
  const o = df(s);
  if (o !== void 0 && vT(t, e)) return !1;
  const a = r["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), yf(e, t, { "text/plain": ST(a, o) })) : yf(
    e,
    t,
    r,
    i && t.isEditable() ? () => n.removeText() : void 0
  );
}
function yf(e, t, n, r) {
  const i = !n["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || AS(t, null, n), r?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(n)) e.clipboardData.setData(s, o);
  return r?.(), !0;
}
function bf(e, t) {
  const n = el(t);
  if (!n?.end) return;
  const r = aR(e, t);
  if (r)
    return r.state.read(
      () => {
        const i = Zc(n, r.standardViewOptions);
        return i ? Op(i) : void 0;
      },
      { editor: r.editor }
    );
}
const uu = /* @__PURE__ */ new WeakMap();
function aR(e, t) {
  const n = e.getEditorState();
  if (uu.has(n)) {
    const i = uu.get(n);
    if (!i || i.viewOptions === t) return i;
  }
  const r = cR(n, t);
  return uu.set(n, r), r;
}
function cR(e, t) {
  const n = Zd(Yd);
  if (!n) return;
  const r = ks.deserializeEditorState(e, t);
  if (!r) return;
  const i = Hf({
    namespace: "markers-view-copy",
    nodes: [gt, ...rl],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    or.serializeEditorState(r, n)
  );
  return { viewOptions: t, standardViewOptions: n, editor: i, state: s };
}
function lR({
  viewOptions: e,
  copyLimit: t
}) {
  const [n] = Ce();
  return H(() => {
    const r = (i, s) => {
      const o = N();
      if (!M(o) || o.isCollapsed()) return !1;
      const a = bf(n, e);
      return a === void 0 ? !1 : DT(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        n,
        o,
        { "text/plain": a, "text/html": qT(a) },
        s,
        t
      );
    };
    return et(
      n.registerCommand(Ns, (i) => r(i, !1), Ge),
      n.registerCommand(rr, (i) => r(i, !0), Ge)
    );
  }, [n, e, t]), null;
}
const Cm = /* @__PURE__ */ new WeakMap();
function uR({
  limit: e,
  viewOptions: t
}) {
  const [n] = Ce(), r = te(df(e)), i = te(t), s = te(!1), o = te(void 0);
  return H(() => {
    r.current = df(e), i.current = t, o.current?.();
  }, [e, t]), H(() => {
    let a, c;
    const l = (y) => {
      const k = r.current;
      if (k === void 0) return;
      const x = Cm.get(y);
      if (y.defaultPrevented && x === void 0) return;
      const A = n.getRootElement();
      if (!A) return;
      const _ = A.ownerDocument.getSelection();
      if (!_ || !pR(_, A)) return;
      y.preventDefault();
      const j = ST(
        x ?? _.toString().replaceAll(q, " "),
        k
      );
      Cm.set(y, j);
      const $ = y.clipboardData;
      if ($) {
        if (!j) {
          x !== void 0 && $.clearData();
          return;
        }
        $.setData("text/plain", j);
      }
    }, u = (y) => {
      r.current !== void 0 && vS(y, "a", { ctrlKey: !Os, metaKey: Os }) && (gR(c?.activeElement, n.getRootElement()) || y.preventDefault());
    }, f = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", u, !0), c = void 0;
    }, d = () => {
      const y = r.current === void 0 ? void 0 : a;
      y !== c && (f(), c = y, c?.addEventListener("copy", l), c?.addEventListener("keydown", u, !0));
    };
    o.current = d;
    const p = (y) => (y?.preventDefault(), !0), h = (y) => {
      const k = r.current;
      if (k === void 0 || (s.current = !1, vT(n, y))) return !1;
      if (k <= 0) return p(y);
      const x = N();
      if (Oc(x))
        return x.getTextContent().length + _T(x.getNodes()) <= k ? !1 : p(y);
      if (!M(x) || x.isCollapsed()) return !1;
      const A = fR(n, i.current);
      return A.$size(x) <= k ? !1 : (v$(k, A.options), x.isCollapsed() ? p(y) : (n.isEditable() || _y(() => dR(n)), s.current = !0, !1));
    }, g = (y, k) => {
      if (r.current === void 0 || !s.current) return !1;
      s.current = !1;
      const x = N();
      if (!M(x) || x.isCollapsed()) return !1;
      const A = k && n.isEditable() && !A$(x);
      return yf(
        y && typeof y == "object" && "clipboardData" in y ? y : null,
        n,
        { "text/plain": Pp(x, hf) },
        A ? () => x.removeText() : void 0
      );
    }, m = et(
      n.registerCommand(Ns, h, He),
      n.registerCommand(rr, h, He),
      n.registerCommand(
        Ns,
        (y) => g(y, !1),
        kr
      ),
      n.registerCommand(
        rr,
        (y) => g(y, !0),
        kr
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      n.registerCommand(
        vy,
        (y) => r.current === void 0 ? !1 : (y?.preventDefault(), !0),
        He
      ),
      n.registerRootListener((y) => {
        a = y?.ownerDocument ?? void 0, d();
      })
    );
    return () => {
      m(), o.current = void 0, f();
    };
  }, [n]), null;
}
function fR(e, t) {
  if (Bt(t)) {
    const r = (i) => Op(i).length;
    return { $size: r, options: { $measure: r } };
  }
  const n = t?.markerMode === "visible" ? t : void 0;
  if (n && bf(e, n) !== void 0) {
    const r = (i) => bf(e, n)?.length ?? Pp(i, hf).length;
    return { $size: r, options: { $measure: r } };
  }
  return {
    $size: (r) => r.getTextContent().length + _T(r.getNodes()),
    options: { $isHidden: hf }
  };
}
function dR(e) {
  e.getEditorState().read(() => {
    const t = N(), n = e.getRootElement()?.ownerDocument.getSelection();
    if (!M(t) || !n) return;
    const r = vm(e, t.anchor), i = vm(e, t.focus);
    r && i && n.setBaseAndExtent(...r, ...i);
  });
}
function vm(e, t) {
  const n = e.getElementByKey(t.key);
  if (!n) return;
  if (t.type === "text") {
    const a = SS(n);
    return a ? [a, t.offset] : void 0;
  }
  const r = t.getNode(), i = E(r) ? r.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [n, n.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function pR(e, t) {
  const n = t.ownerDocument.createRange();
  n.selectNodeContents(t);
  for (let r = 0; r < e.rangeCount; r++) {
    const i = e.getRangeAt(r), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, n) < 0 && s.setStart(n.startContainer, n.startOffset), i.compareBoundaryPoints(i.END_TO_END, n) > 0 && s.setEnd(n.endContainer, n.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const hR = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function gR(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? hR.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const mR = /^\+/;
function $p(e, t) {
  const n = t.replace(mR, "");
  return Object.hasOwn(e.markers, n) ? e.markers[n] : void 0;
}
function KT(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let n = e.length - 1; n >= 0; n--)
    if (t.occursUnder.includes(e[n].marker) && (n === e.length - 1 || t.rank === 0 || e[n + 1].rank <= t.rank))
      return { keep: n + 1, joins: !0 };
}
function UT(e, t) {
  return KT(e, t) !== void 0;
}
function kf(e, t) {
  const n = KT(e, t);
  return n ? (n.joins && (e.length = n.keep, e.push(t)), !0) : !1;
}
function kc(e, t, n) {
  const r = E(e) ? e.getChildren().filter(w) : [];
  if (r.length === 0) {
    n.set(e.getKey(), t);
    return;
  }
  for (const i of r) n.set(i.getKey(), t);
}
function yR(e, t, n, r, i) {
  const s = $p(r, t);
  if (!s) {
    kc(e, "unknown", i);
    return;
  }
  if (n === void 0) return;
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(n) && kc(e, "invalid", i);
}
function As(e, t, n, r, i) {
  for (const s of e.getChildren())
    if (U(s)) {
      const o = s.getMarker();
      i || yR(s, o, t, n, r), As(s, t, n, r, i || o === "xq");
    } else if (Me(s)) {
      if (i) continue;
      const o = $p(n, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && r.set(s.getKey(), "invalid") : r.set(s.getKey(), "unknown");
    } else D(s) ? As(s, s.getMarker(), n, r, i) : Ze(s) || E(s) && As(s, t, n, r, i);
}
function bR(e, t) {
  const n = /* @__PURE__ */ new Map(), r = [], i = (o, a) => {
    const c = $p(e, a);
    if (!c) {
      kc(o, "unknown", n), kf(r, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    kf(r, l) || kc(o, "invalid", n);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Ee().getChildren())
    Ze(o) || (Ie(o) ? (i(o, o.getMarker()), s(o) && As(o, void 0, e, n, !1)) : ot(o) ? i(o, o.getMarker()) : ye(o) ? (i(o, o.getMarker()), s(o) && As(o, o.getMarker(), e, n, !1)) : E(o) && s(o) && As(o, "p", e, n, !1));
  return n;
}
function kR(e) {
  return !!e?.includes("(basic)");
}
function xR(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function BT(e, t) {
  return !e.startsWith("zpa") && e !== "c" && lf(e, t);
}
function Rp(e, t) {
  const n = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (n)
    return { marker: t, rank: n.rank ?? 0, occursUnder: n.occursUnder ?? [] };
}
function FT(e, t) {
  const n = [];
  for (const r of t) {
    const i = Rp(e, r);
    i && kf(n, i);
  }
  return n;
}
function Ba(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: xR(e.description),
    isBasic: kR(e.description)
  };
}
function TR(e, t) {
  const n = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, r = n(e), i = n(t);
  return r.prefix !== i.prefix ? r.prefix < i.prefix ? -1 : 1 : r.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : r.digits - i.digits;
}
function xf(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : TR(e.marker, t.marker);
}
function Tf(e, t, n) {
  if (t.noteMarker) return [];
  const r = FT(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && BT(i.marker, n)
  ).filter((i) => {
    const s = Rp(e, i.marker);
    return s !== void 0 && UT(r, s);
  }).map((i) => Ba(i, "paragraph")).sort(xf);
}
function CR(e, t, n) {
  const { noteMarker: r, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => BT(c.marker, n)
  );
  if (r)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(r)
    ).map((c) => Ba(c, "character")).sort(xf);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Ba(c, "character")),
    ...a.map((c) => Ba(c, "note"))
  ].sort(xf);
}
function vR(e, t) {
  return t.map((n, r) => {
    const i = e.markers[n]?.endMarker ?? `${n}*`;
    return { marker: `${r === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function SR(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function _R(e, t, n) {
  return [
    ...vR(e, t.openCharMarkers),
    ...CR(e, t, n)
  ].sort(SR);
}
function MR(e, t, n) {
  if (t.source === "paragraph") return Tf(e, t, n);
  const r = _R(e, t, n);
  return r.length > 0 ? r : Tf(e, t, n);
}
function ER(e, t, n) {
  const r = Tf(e, t, n), i = FT(e, t.previousParaMarkers), s = Rp(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && UT(i, s) ? "ip" : "p", c = r.findIndex((u) => u.marker === a);
  if (c <= 0) return r;
  const [l] = r.splice(c, 1);
  return [l, ...r];
}
const xc = "￼", Sm = "|", vs = "\\", fu = "+", AR = /([-\w]+)="(.*?)"/g, PR = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]), wR = /* @__PURE__ */ new Map([["file", "src"]]);
class Ip {
  segments = [];
  /** Differing segments are never merged: the boundary between two of them (two adjacent literals)
   * is a position both sides share. */
  push(t, n, r, i, s, o = !1) {
    if (t === n && r === i) return;
    const a = this.segments[this.segments.length - 1];
    s && a?.same && a.liveEnd === t && a.settledEnd === r ? this.segments[this.segments.length - 1] = { ...a, liveEnd: n, settledEnd: i } : this.segments.push({
      liveStart: t,
      liveEnd: n,
      settledStart: r,
      settledEnd: i,
      same: s,
      ...o ? { nesting: o } : {}
    });
  }
  /** Two stretches that differ somewhere: the bytes both begin with, and then the bytes both end
   * with, line up one for one; what is left maps only its ends. */
  pushStretch(t, n, r, i) {
    const s = Math.min(t.length, r.length);
    let o = 0;
    for (; o < s && t[o] === r[o]; ) o += 1;
    let a = 0;
    for (; a < s - o && t[t.length - 1 - a] === r[r.length - 1 - a]; )
      a += 1;
    const c = n + t.length, l = i + r.length;
    this.push(n, n + o, i, i + o, !0), this.push(n + o, c - a, i + o, l - a, !1), this.push(c - a, c, l - a, l, !0);
  }
}
function _m(e, t) {
  const n = [e.indexOf(vs, t + 1), e.indexOf(xc, t + 1)].filter(
    (r) => r >= 0
  );
  return n.length > 0 ? Math.min(...n) : e.length;
}
function Mm(e) {
  const t = e.slice(1), n = [...t.matchAll(AR)];
  return n.length > 0 ? n.map((r) => r[0]).join("") !== t || n.some((r) => r[2] === "") ? void 0 : n.map((r) => {
    const i = 1 + (r.index ?? 0), s = i + r[1].length + 2;
    return {
      name: r[1],
      start: i,
      end: i + r[0].length,
      valueStart: s,
      valueEnd: s + r[2].length,
      value: r[2]
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
function NR(e, t) {
  const n = e.map(
    (o, a) => o.name === void 0 || !PR.has(o.name) && !e.slice(a + 1).some((c) => c.name === o.name)
  ), r = (o, a) => o.value === a.value && (a.name === void 0 || o.name === a.name || o.name !== void 0 && wR.get(o.name) === a.name), i = /* @__PURE__ */ new Set(), s = [];
  return t.forEach((o, a) => {
    const c = e.findIndex(
      (l, u) => n[u] && !i.has(u) && r(l, o)
    );
    c < 0 || (i.add(c), s.push([c, a]));
  }), s;
}
function Em(e, t, n) {
  let r = 0, i = -1;
  for (const s of e) {
    if (!s.same) continue;
    const { end: o, otherEnd: a } = ha(s, n);
    o <= t && o > i && (i = o, r = a);
  }
  return r;
}
function OR(e, t, n, r, i) {
  if (e === t) {
    n.push(r, r + e.length, i, i + t.length, !0);
    return;
  }
  const s = Mm(e), o = Mm(t);
  if (!s || !o) {
    n.push(r, r + 1, i, i + 1, !0), n.pushStretch(e.slice(1), r + 1, t.slice(1), i + 1);
    return;
  }
  const a = new Ip();
  a.push(0, 1, 0, 1, !0);
  const c = NR(s, o);
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
    const h = Em(l, d.start, "live");
    a.push(d.start, d.end, h, h, !1);
  });
  const f = new Set(c.map(([, d]) => d));
  o.forEach((d, p) => {
    if (f.has(p)) return;
    const h = Em(l, d.start, "settled");
    a.push(h, h, d.start, d.end, !1);
  }), a.segments.sort(
    (d, p) => d.settledStart - p.settledStart || d.settledEnd - p.settledEnd || d.liveStart - p.liveStart
  ).forEach(
    (d) => n.push(
      r + d.liveStart,
      r + d.liveEnd,
      i + d.settledStart,
      i + d.settledEnd,
      d.same
    )
  );
}
function zT(e, t, n, r, i) {
  let s = t, o = 0;
  for (; s < e.length && o < n.length; ) {
    const c = n[o] === xc && e[s] !== xc ? i.spellings?.get(o) : void 0;
    if (c !== void 0) {
      const u = new Ip(), f = zT(e, s, c, u, { prefix: !0 });
      i.literals?.set(o, {
        liveStart: s,
        liveEnd: f,
        inner: { segments: IR(u.segments, s) }
      }), r.push(s, f, o, o + 1, !1), s = f, o += 1;
      continue;
    }
    if (e[s] === Sm && n[o] === Sm) {
      const u = _m(e, s), f = _m(n, o);
      OR(e.slice(s, u), n.slice(o, f), r, s, o), s = u, o = f;
      continue;
    }
    const l = n[o] === vs ? $R(e, s, n, o) || RR(e, s, n, o, i.spellings) : 0;
    if (l > 0) {
      r.push(s, s, o, o + l, !1), o += l;
      continue;
    }
    if (e[s] === n[o]) {
      r.push(s, s + 1, o, o + 1, !0), s += 1, o += 1;
      continue;
    }
    if (e[s - 1] === vs && n[o - 1] === vs && e[s] === fu != (n[o] === fu)) {
      e[s] === fu ? (r.push(s, s + 1, o, o, !1, !0), s += 1) : (r.push(s, s, o, o + 1, !1, !0), o += 1);
      continue;
    }
    if (i.prefix) {
      const u = n.lastIndexOf(vs), f = u >= o ? n.slice(u) : void 0, d = f === void 0 ? -1 : e.indexOf(f, s);
      return f === void 0 || d < 0 ? (r.push(s, s, o, n.length, !1), s) : (r.pushStretch(e.slice(s, d), s, n.slice(o, u), o), r.push(d, d + f.length, u, n.length, !0), d + f.length);
    }
    return r.pushStretch(e.slice(s), s, n.slice(o), o), e.length;
  }
  const a = i.prefix ? s : e.length;
  return r.push(s, a, o, n.length, !1), a;
}
const Ss = /\\\+?[\w-]+/y;
function $R(e, t, n, r) {
  Ss.lastIndex = r;
  const i = Ss.exec(n)?.[0];
  return !i || n[r + i.length] !== vs ? 0 : n.startsWith(i, r + i.length) && e.startsWith(i, t) && !e.startsWith(i, t + i.length) ? i.length : 0;
}
function RR(e, t, n, r, i) {
  Ss.lastIndex = r;
  const s = Ss.exec(n)?.[0];
  if (!s || n[r + s.length] !== xc) return 0;
  const o = i?.get(r + s.length);
  if (o === void 0 || e.startsWith(s, t)) return 0;
  Ss.lastIndex = 0;
  const a = Ss.exec(o)?.[0];
  return a !== void 0 && e.startsWith(a, t) ? s.length : 0;
}
function IR(e, t) {
  return e.map((n) => ({
    ...n,
    liveStart: n.liveStart - t,
    liveEnd: n.liveEnd - t
  }));
}
function LR(e, t, n) {
  const r = new Ip(), i = /* @__PURE__ */ new Map();
  return zT(e, 0, t, r, { prefix: !1, spellings: n, literals: i }), { alignment: { segments: r.segments }, literals: i };
}
function ha(e, t) {
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
function jT(e, t, n) {
  return e.segments.find((r) => {
    const { start: i, end: s } = ha(r, n);
    return i <= t && t < s;
  });
}
function VT(e, t) {
  let n = 0, r = 0;
  for (const i of e.segments) {
    const { end: s, otherEnd: o } = ha(i, t);
    n = Math.max(n, s), r = Math.max(r, o);
  }
  return [n, r];
}
function Lp(e, t, n) {
  const r = jT(e, t, n);
  if (r) {
    const { start: o, otherStart: a } = ha(r, n);
    return r.same ? a + (t - o) : void 0;
  }
  const [i, s] = VT(e, n);
  return t === i ? s : void 0;
}
function eo(e, t, n) {
  const r = jT(e, t, n);
  if (r) {
    const { start: i, otherStart: s } = ha(r, n);
    return r.same ? s + (t - i) : s;
  }
  return VT(e, n)[1];
}
function qR(e, t) {
  const n = eo(e, t, "settled"), r = e.segments.find(
    (i) => i.nesting && i.settledStart === t && i.settledEnd === t && i.liveEnd === n
  );
  return r ? r.liveStart : n;
}
const On = /\s/;
function DR(e, t) {
  return `\\${e} ${t}\\${e}*`;
}
function Cf(e) {
  const t = [];
  for (const r of e.spans)
    for (let i = r.start; i < r.end; i += 1) {
      const s = e.text[i];
      t.push({ byte: s, position: i, isWs: On.test(s) });
    }
  const n = e.spans.filter((r) => r.isSentinel).map((r) => r.start);
  return { bytes: t, placeholders: n };
}
function Fa({ bytes: e }, t) {
  return e.filter((n) => n.position < t && !n.isWs).length;
}
function KR({ bytes: e }, t) {
  let n = 0;
  for (const r of e) r.position < t && (n = r.isWs ? n + 1 : 0);
  return n;
}
function vf({ bytes: e }) {
  return e.filter((t) => !t.isWs);
}
const Am = "cat", UR = "category";
function BR(e) {
  return C(e) && e.getTextContent().trim() === "";
}
function FR(e) {
  const t = { text: "", spans: [], sentinels: [] }, n = [], r = (a, c) => {
    t.spans.push({
      key: a.getKey(),
      start: t.text.length,
      end: t.text.length + c.length,
      isSentinel: !1
    }), t.text += c;
  }, i = (a, c) => {
    r(a, DR(Am, c)), n.push({
      ownerKey: a.getKey(),
      markerName: Am,
      keyName: UR,
      valueLength: c.length
    });
  }, s = (a) => {
    const c = ca(a);
    let u = c.opener ?? c.value ?? c.closer ? void 0 : a.getCategory();
    const f = St(a);
    let d = !1;
    for (const p of a.getChildren())
      u !== void 0 && d && !BR(p) && (i(a, u), u = void 0), o(p), (Lt(p) || f && (f.is(p) || p.isParentOf(f))) && (d = !0);
    u !== void 0 && i(a, u);
  }, o = (a) => {
    if (Lt(a)) {
      const c = a.getParent();
      r(a, D(c) ? c.getCaller() : "");
    } else C(a) || Rt(a) ? r(a, a.getTextContent()) : D(a) ? s(a) : E(a) && a.getChildren().forEach(o);
  };
  return e.forEach(o), { spelling: t, foldedAttributes: n };
}
function qp(e) {
  const t = Cf(e);
  return {
    runs: e.sentinels.map((n, r) => {
      const { spelling: i, foldedAttributes: s } = FR(n);
      return {
        memberCount: n.length,
        before: Fa(t, t.placeholders[r] ?? e.text.length),
        spelling: i,
        foldedAttributes: s,
        spelled: vf(Cf(i)).map(({ byte: o }) => o).join("")
      };
    }),
    bytes: vf(t).map(({ byte: n }) => n).join("")
  };
}
function Tc(e, t) {
  return {
    facts: Cf(e),
    carried: e.sentinels.map((n, r) => {
      const i = new Set(t[r]?.map((s) => s.getKey()));
      return n.map((s) => i.has(s.getKey()));
    })
  };
}
function Cc(e, t) {
  const n = e.carried.map(
    (d) => d.map(() => {
    })
  ), r = vf(e.facts), { alignment: i, literals: s } = LR(
    r.map(({ byte: d }) => d).join(""),
    t.bytes,
    new Map(t.runs.map((d) => [d.before, d.spelled]))
  ), o = (d, p) => {
    let h = 0;
    e.carried[d].forEach((g, m) => {
      g && (n[d][m] = { sentinelIndex: p, memberIndex: h }, h += 1);
    });
  }, a = (d) => d.filter(Boolean).length, c = e.carried.reduce((d, p) => d + a(p), 0), l = t.runs.reduce((d, p) => d + p.memberCount, 0);
  if (c === l) {
    const d = t.runs.flatMap(
      (h, g) => Array.from({ length: h.memberCount }, (m, y) => ({ sentinelIndex: g, memberIndex: y }))
    );
    let p = 0;
    return e.carried.forEach(
      (h, g) => h.forEach((m, y) => {
        m && (n[g][y] = d[p++]);
      })
    ), { sentinelMap: n, settledOnlyRuns: [], alignment: i };
  }
  const u = new Map(t.runs.map((d, p) => [d.before, p]));
  e.carried.forEach((d, p) => {
    const h = e.facts.placeholders[p];
    if (h === void 0 || a(d) === 0) return;
    const g = Lp(i, Fa(e.facts, h), "live"), m = g === void 0 ? void 0 : u.get(g);
    m === void 0 || t.runs[m].memberCount !== a(d) || o(p, m);
  });
  const f = [];
  for (const [d, p] of s) {
    const h = u.get(d);
    if (h === void 0) continue;
    const g = t.runs[h], m = r[p.liveStart]?.position ?? Number.POSITIVE_INFINITY, y = p.liveEnd > p.liveStart ? r[p.liveEnd - 1].position + 1 : m, k = Fa(e.facts, m);
    f.push({
      sentinelIndex: h,
      liveBefore: k,
      liveLength: Fa(e.facts, y) - k,
      liveWsBefore: KR(e.facts, m),
      settledBefore: g.before,
      spelling: g.spelling,
      inner: p.inner,
      foldedAttributes: g.foldedAttributes
    });
  }
  return { sentinelMap: n, settledOnlyRuns: f, alignment: i };
}
function ga(e, t, n) {
  return {
    nonWsBefore: eo(
      e,
      t.nonWsBefore,
      n === "toSettled" ? "live" : "settled"
    ),
    wsRun: t.wsRun
  };
}
function WT(e, t, n) {
  return Lp(e.inner, t, n === "toSpelling" ? "live" : "settled");
}
function HT(e, t) {
  return e.find(
    (n) => t.nonWsBefore === n.liveBefore && t.wsRun >= n.liveWsBefore
  );
}
function Dp(e, t) {
  for (const n of e) {
    const r = t.nonWsBefore - n.liveBefore;
    if (r <= 0 || r >= n.liveLength) continue;
    const i = WT(n, r, "toSpelling");
    return {
      run: n,
      count: r,
      within: i === void 0 ? void 0 : { nonWsBefore: i, wsRun: t.wsRun }
    };
  }
}
function Kp(e, t) {
  const n = /* @__PURE__ */ new Map();
  e.sentinels.forEach(
    (r, i) => r.forEach(
      (s, o) => n.set(s.getKey(), { sentinelIndex: i, memberIndex: o, member: s })
    )
  );
  for (let r = t; r; r = r.getParent()) {
    const i = n.get(r.getKey());
    if (i) return i;
  }
}
function Up(e, t) {
  const n = [];
  for (let r = t; r; r = r.getParent()) {
    if (r.is(e)) return n;
    n.unshift(r.getIndexWithinParent());
  }
}
const xt = sa;
function GT(e) {
  return e.length > 1 && e.startsWith(q) && e.charAt(1) !== xt ? e.slice(1) : e;
}
function Pm(e) {
  return Hs(e) ? e.markerSyntax ?? "opening" : void 0;
}
function JT(e, t, n, r) {
  const i = { ...r, noteMode: "expanded" }, s = or.serializeEditorState(
    {
      type: nr,
      version: tr,
      content: [
        {
          ...e.getUnknownAttributes(),
          type: "note",
          marker: e.getMarker(),
          caller: e.getCaller(),
          ...n !== void 0 && { category: n },
          content: t
        }
      ]
    },
    i
  ).root.children, o = s.length === 1 ? s[0] : void 0, a = Array.isArray(o?.children) ? o.children : void 0;
  if (!a) return { failure: "shape" };
  let c = 0;
  for (; Pm(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== vt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Pm(a[u - 1]) === "closing"; )
    u--;
  const f = a.slice(c, u);
  return f.length === 0 ? { failure: "empty" } : { children: f };
}
function YT(e, t) {
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const n = `${e.getMarker()}*`, r = t.findIndex(
    (i) => typeof i == "object" && i.type === "unmatched" && i.marker === n
  );
  if (!(r < 0))
    return { before: t.slice(0, r), after: t.slice(r + 1) };
}
function XT(e, t, n, r, i) {
  const s = Object.fromEntries(
    Object.entries(e.getUnknownAttributes() ?? {}).filter(([u]) => u !== "closed")
  ), o = or.serializeEditorState(
    {
      type: nr,
      version: tr,
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
              ...r !== void 0 && { category: r },
              content: t
            },
            ...n
          ]
        }
      ]
    },
    i
  ).root.children, a = o.length === 1 ? o[0] : void 0, c = Array.isArray(a?.children) ? a.children : void 0, l = c?.findIndex((u) => u.type === tt.getType()) ?? -1;
  if (!(!c || l < 0))
    return c.slice(l);
}
function QT(e, t, n, r) {
  const i = e.getCode(), s = {
    ...e.getUnknownAttributes(),
    type: "book",
    marker: e.getMarker(),
    ...i !== "" && { code: i },
    content: t
  }, [o, ...a] = or.serializeEditorState(
    { type: nr, version: tr, content: [s, ...n] },
    r
  ).root.children;
  if (!kd(o)) return { failure: "shape" };
  const c = Jb(o.children[0]) ? o.children.slice(1) : o.children;
  return c.length === 0 && a.length === 0 ? { failure: "empty" } : { children: c, followingBlocks: a };
}
function po(e, t, n) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + n.length,
    isSentinel: !1
  }), e.text += n;
}
function ho(e, t) {
  const n = PT.exec(e.text)?.[0];
  n !== void 0 && (e.text += n === "\\" ? q : " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += xt;
}
function Wt(e) {
  return e.replaceAll(q, " ");
}
const zR = `\\${q}${xt}`;
function ZT(e) {
  return e.forEach((t, n) => {
    typeof t == "string" ? e[n] = t.replaceAll(zR, `\\${xt}`) : t.content && ZT(t.content);
  }), e;
}
const eC = "\u2028";
function Bp(e) {
  return e.replaceAll(eC, "");
}
function Fp(e) {
  return e ? eC : " ";
}
function jR(e) {
  return D(e[0]) ? "note" : Ue(e[0]) ? "verse" : "other";
}
function is(e, t) {
  return ZT(
    qc(Bp(e.text), {
      ...t,
      placeholders: e.sentinels.map(jR)
    })
  );
}
function VR(e, t, n = !1, r = !1) {
  if (Bt(t)) return Wt(e);
  if (e === q && !r) return " ";
  const i = n && e.startsWith(q), s = i ? e.slice(1) : e, o = n && !i ? WR.exec(s) : null;
  return o ? `${o[0]} ${s.slice(o[0].length + 1).replaceAll(q, "~")}` : (i ? " " : "") + s.replaceAll(q, "~");
}
const WR = /^[^\s\u200B\\|*]+(?=\u00A0)/;
function Ps(e) {
  const t = e.getTextContent();
  return bn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function al(e, t) {
  const n = e[t];
  if (!Ke(n)) return [];
  const { attribute: r, closing: i, wrapper: s } = Kc(n);
  if (s) return [s];
  const o = n.getNextSibling();
  if (!w(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== n.getMarker())
    return [];
  const a = [o];
  return r && a.push(r), i && a.push(i), a;
}
function tC(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function cl(e, t) {
  const n = [];
  let r = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = Uo(r, i);
    if (c)
      n.push(c), r = c;
    else if (s && o && a)
      n.push(s, o, a), r = a;
    else if (s || o || a)
      break;
  }
  return n;
}
function zp(e) {
  return !!e.getUnknownAttributes();
}
function ll(e, t) {
  const n = t(e)?.type;
  return n === T.Milestone || n === void 0 && nd(e);
}
function jp(e) {
  return e.getIsCollapsed() !== !1 || e.getChildren().some((n) => w(n) && n.getMode() === "token") || Object.keys(e.getUnknownAttributes() ?? {}).some((n) => n !== "closed") ? !1 : e.getChildren().some((n) => {
    if (!w(n) || lr(n)) return !1;
    if (n.getMarkerSyntax() !== "opening") return !0;
    const r = n.getTextContent(), i = (Zs.exec(r) ?? ET.exec(r))?.[1];
    return i === void 0 || i.startsWith("+") || !tt.isValidMarker(i) || n.getMarker() !== e.getMarker();
  });
}
function Vp(e, t) {
  return Ke(e) ? !ll(e.getMarker(), t) : D(e) ? !jp(e) : Ze(e) ? !0 : Ue(e) ? zp(e) : U(e) ? nC(e, t) : !1;
}
function nC(e, t) {
  return rC(e, e.getMarker(), t);
}
function rC(e, t, n) {
  return G_(e) ? !0 : b_(t) || n(t) !== void 0 || HR(e) && !GR(e) ? !1 : t !== e.getMarker() || !JR(e);
}
function HR(e) {
  const t = e.getParent();
  return t !== null && An(t) !== void 0;
}
function GR(e) {
  const t = e.getUnknownAttributes();
  return !!t && Object.keys(t).some((n) => n !== "closed");
}
function JR(e) {
  const t = e.getChildren().filter((i) => w(i) && i.getMarker() === e.getMarker()).filter(w);
  if (t.some((i) => !lr(i))) return !0;
  const n = t.some((i) => i.getMarkerSyntax() === "opening"), r = t.some((i) => i.getMarkerSyntax() === "closing");
  return !n && r;
}
function iC(e) {
  let t = e, n = t.getParent();
  for (; !t.getNextSibling() && ue(n); )
    t = n, n = t.getParent();
  let r = t.getNextSibling();
  for (; ue(r); ) r = r.getFirstChild();
  return Ue(r);
}
const cn = "", ln = "";
function wm(e) {
  return e.flatMap((t) => Be(t) ? t.getChildren() : [t]);
}
function xs(e, t, n, r = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Ke(s)) {
      const o = al(e, i);
      ll(s.getMarker(), n) && tC(o) ? (t.push(
        cn,
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
      ), xs(wm(o), t, n), t.push(ln)) : t.push(xt), i += o.length;
    } else if (Ue(s)) {
      const o = cl(e, i);
      zp(s) ? t.push(xt) : (t.push(
        cn,
        "verse",
        Wt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), xs(wm(o), t, n), t.push(ln)), i += o.length;
    } else w(s) ? t.push(cn, "marker", Wt(s.getTextContent()), ln) : kn(s) ? t.push(
      cn,
      "unmatched",
      Wt(s.getTextContent()),
      s.getMarker(),
      ln
    ) : Vp(s, n) ? t.push(xt) : Gi(s) ? t.push(Fp(iC(s))) : C(s) && de(s, ke) === "attribute" ? t.push(
      cn,
      "attribute",
      Wt(Ps(s)),
      ln
    ) : C(s) ? t.push(
      Wt(
        r ? GT(Ps(s)) : Ps(s)
      )
    ) : U(s) ? (t.push(cn, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), xs(s.getChildren(), t, n, !0), t.push(ln)) : ue(s) ? xs(s.getChildren(), t, n, r) : E(s) ? (t.push(cn, s.getType()), xs(s.getChildren(), t, n), t.push(ln)) : t.push(xt);
  }
}
function Cr(e, t) {
  const n = [];
  return xs(e, n, t), n.join("");
}
function vr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Fs(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function YR(e) {
  return e.$?.textType;
}
function Wp(e) {
  return e.type ?? "";
}
function ul(e, t, n) {
  return t === "closing" ? st(e, n) : t === "selfClosing" ? st("") : Ve(e, n);
}
function du(e, t) {
  const n = e[t];
  if (!(!n || Wp(n) !== "attribute-run"))
    return vr(n) ?? [];
}
function Sr(e, t) {
  const n = [];
  return To(e, n, t), n.join("");
}
function To(e, t, n, r = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Wp(s);
    if (o === "ms") {
      const l = s, u = du(e, i + 1);
      u && ll(l.marker ?? "", n) ? (t.push(
        cn,
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
      ), To(u, t, n), t.push(ln), i += 1) : t.push(xt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(xt);
        continue;
      }
      t.push(
        cn,
        "verse",
        Wt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, f = du(e, i + 1 + u);
      for (; f; )
        To(f, t, n), u++, f = du(e, i + 1 + u);
      t.push(ln), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        cn,
        "marker",
        Wt(
          ul(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        ln
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(Fp(id(e[i + 1])));
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(cn, "char", JSON.stringify(l.unknownAttributes ?? null)), To(vr(s) ?? [], t, n, !0), t.push(ln);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(xt);
      continue;
    }
    if (o === "unmatched") {
      const l = v0(s) ? s.marker : "";
      t.push(cn, "unmatched", Wt(Fs(s) ?? ""), l), t.push(ln);
      continue;
    }
    const a = Fs(s);
    if (a !== void 0 && YR(s) === "attribute") {
      t.push(cn, "attribute", Wt(a), ln);
      continue;
    }
    if (a !== void 0) {
      t.push(Wt(r ? GT(a) : a));
      continue;
    }
    const c = vr(s);
    c ? (t.push(cn, o), To(c, t, n), t.push(ln)) : t.push(xt);
  }
}
function ui(e) {
  let t = 0;
  for (const n of e) {
    const r = vr(n);
    if (r) {
      t += ui(r);
      continue;
    }
    const i = Fs(n);
    if (i !== void 0)
      for (const s of i) s === xt && t++;
  }
  return t;
}
function zs(e, t, n, r, i) {
  Vn(e.getChildren(), t, n, r, i);
}
function Vn(e, t, n, r, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (w(a))
      po(t, a, Wt(a.getTextContent()));
    else if (Ke(a)) {
      s();
      const c = al(e, o);
      ll(a.getMarker(), n) && tC(c) ? Vn(c, t, n, r) : ho(t, [a, ...c]), o += c.length;
    } else if (D(a) && jp(a)) {
      s();
      const c = St(a);
      for (const l of a.getChildren())
        c?.is(l) ? po(t, l, Wt(l.getTextContent())) : Vn([l], t, n, r);
    } else if (D(a) || Ze(a))
      s(), ho(t, [a]);
    else if (Ue(a)) {
      s();
      const c = cl(e, o);
      zp(a) ? ho(t, [a, ...c]) : (po(t, a, Wt(Ps(a))), Vn(c, t, n, r)), o += c.length;
    } else if (U(a))
      s(), nC(a, n) ? ho(t, [a]) : zs(a, t, n, r, { pending: !0 });
    else if (Gi(a))
      s(), po(t, a, Fp(iC(a)));
    else if (C(a)) {
      const c = a.getParent(), l = bn(a) || de(a, ke) === "attribute" || $e(c) && !!gi(c)?.is(a), u = s() && !l;
      po(
        t,
        a,
        l ? Wt(Ps(a)) : VR(
          Ps(a),
          r,
          u,
          Zb(a)
        )
      );
    } else E(a) ? zs(a, t, n, r, i) : (s(), ho(t, [a]));
  }
}
function XR(e) {
  if (e.getMarker() !== "") return !1;
  const t = e.getFirstChild();
  return !w(t) || !/\\[^\s\\]/.test(t.getTextContent());
}
function Hp(e, t, n) {
  if (e.getUnknownAttributes() || XR(e)) return;
  const r = t(e.getMarker())?.type;
  if (r !== void 0 && r !== T.Unknown && r !== T.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Ze(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return zs(e, i, t, n), i;
}
function QR(e, t, n) {
  const r = { text: "", spans: [], sentinels: [] };
  return zs(e, r, t, n), r;
}
function Gp(e, t, n) {
  if (e.length === 0 || !e.every(ye)) return;
  const r = { text: "", spans: [], sentinels: [] };
  return Jp(r, e, t, n) ? r : void 0;
}
function Nm(e, t, n) {
  const r = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    if (ye(i)) {
      const s = Hp(i, t, n);
      if (!s) return;
      const o = r.text.length;
      s.spans.forEach(
        (a) => r.spans.push({ ...a, start: a.start + o, end: a.end + o })
      ), r.sentinels.push(...s.sentinels), r.text += s.text;
    } else $e(i) ? Vn(i.getChildren(), r, t, n) : Vn([i], r, t, n);
  return r;
}
function Jp(e, t, n, r) {
  for (const i of t) {
    const s = Hp(i, n, r);
    if (!s) return !1;
    e.text.length > 0 && (e.text += " ");
    const o = e.text.length;
    s.spans.forEach(
      (a) => e.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), e.sentinels.push(...s.sentinels), e.text += s.text;
  }
  return !0;
}
function fl(e, t) {
  let n = 0;
  const r = (i) => {
    if (C(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(xt);
        if (a < 0) break;
        let c = s, l;
        a > 0 && ([, c] = s.splitText(a)), c.getTextContent().length > 1 && ([c, l] = c.splitText(1));
        const u = t[n++];
        if (u && u.length > 0) {
          let f = c;
          for (const d of u)
            f.insertAfter(d), f = d;
        }
        c.remove(), s = l;
      }
    } else E(i) && [...i.getChildren()].forEach(r);
  };
  e.forEach(r);
}
function Go(e, t = []) {
  for (const n of e)
    Ue(n) ? t.push(n) : E(n) && Go(n.getChildren(), t);
  return t;
}
function dl(e) {
  let t = 0;
  const n = (r) => {
    if (C(r))
      for (const i of r.getTextContent()) i === xt && t++;
    else E(r) && r.getChildren().forEach(n);
  };
  return e.forEach(n), t;
}
function Hr(e) {
  let t = 0;
  for (const n of e)
    if (typeof n == "string")
      for (const r of n) r === xt && t++;
    else n.content && (t += Hr(n.content));
  return t;
}
function Yp(e, t, n) {
  const r = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    r.text.length > 0 && (r.text += " "), E(i) && zs(i, r, t, n);
  return r;
}
function ni(e, t, n) {
  let r = 0, i = 0;
  for (const s of e.spans) {
    const o = s.end - s.start, a = s.key === t, c = a ? Math.min(s.isSentinel ? 1 : n, o) : o;
    for (let l = 0; l < c; l++)
      On.test(e.text[s.start + l]) ? i++ : (r++, i = 0);
    if (a) return { nonWsBefore: r, wsRun: i };
  }
}
function Sf(e, t) {
  t.add(e.getKey()), E(e) && e.getChildren().forEach((n) => Sf(n, t));
}
function Xp(e, t, n) {
  return e.spans.find(
    (r) => !r.isSentinel && r.key === t && n <= r.end - r.start
  );
}
function Ao(e, t, n) {
  const r = (f, d) => {
    const p = ni(e, f, d), h = Xp(e, f, d);
    return p && h ? { anchor: p, position: h.start + d } : void 0;
  }, i = (f) => {
    const d = f.end - f.start, p = ni(e, f.key, d);
    return p ? { anchor: p, position: f.start + d } : void 0;
  };
  if (!E(t)) return r(t.getKey(), n);
  const s = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, n).forEach((f) => Sf(f, s));
  const o = [...e.spans].reverse().find((f) => s.has(f.key));
  if (o) return i(o);
  const a = /* @__PURE__ */ new Set();
  Sf(t, a);
  const c = e.spans.find((f) => a.has(f.key));
  if (c && !c.isSentinel) return r(c.key, 0);
  const l = [...e.spans].reverse().find((f) => !a.has(f.key) && X(f.key)?.isBefore(t));
  if (l) return i(l);
  const u = e.spans[0];
  return u && !u.isSentinel ? r(u.key, 0) : void 0;
}
function Po(e) {
  if (e.isSentinel) return !1;
  const t = X(e.key);
  return w(t) && t.getMarkerSyntax() !== "opening";
}
function sC(e) {
  const t = X(e.key);
  if (!w(t)) return;
  const n = t.getParent();
  if (!U(n)) return;
  const r = n.getParent();
  if (r)
    return {
      key: r.getKey(),
      offset: n.getIndexWithinParent() + 1,
      type: "element"
    };
}
function Om(e) {
  const t = X(e.key), n = t?.getParent(), r = n?.getChildren();
  if (!t || !n || !r) return;
  const i = r.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = Ue(t) ? cl(r, i) : Ke(t) ? al(r, i) : [], o = s[s.length - 1] ?? t;
  return { key: n.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" };
}
function pn(e, t, { addressDisplayBytes: n = !1 } = {}) {
  const { text: r, spans: i } = e;
  let s, o, a = t.nonWsBefore, c = t.wsRun, l = !1;
  e: for (const [p, h] of i.entries()) {
    const g = h.end - h.start, m = !h.isSentinel && (n || !Po(h));
    if (l) {
      if (!m) continue;
      s = { key: h.key, offset: 0 };
      break;
    }
    for (let y = 0; y < g; y++) {
      const k = r[h.start + y];
      if (a === 0 && (c === 0 || !On.test(k))) {
        if (m) {
          s = { key: h.key, offset: y };
          break e;
        }
        l = !0;
        continue e;
      }
      a > 0 ? On.test(k) || a-- : c--;
    }
    if (a === 0 && c === 0) {
      const y = i[p + 1]?.isSentinel === !0;
      if (m && (!n || y)) {
        s = { key: h.key, offset: g };
        break;
      }
      if (h.isSentinel && y) {
        const k = Om(h);
        if (k) return k;
      }
      m && (o = { key: h.key, offset: g }), l = !0;
    }
  }
  if (s) return { ...s, type: "text" };
  if (o) return { ...o, type: "text" };
  const u = i[i.length - 1];
  if (n && a === 0 && u && !u.isSentinel && u.end === r.length)
    return { key: u.key, offset: u.end - u.start, type: "text" };
  const f = i[i.length - 1];
  if (f && Po(f)) {
    const p = sC(f);
    if (p) return p;
  }
  if (f?.isSentinel) {
    const p = Om(f);
    if (p) return p;
  }
  const d = [...i].reverse().find((p) => !p.isSentinel && !Po(p));
  if (d) return { key: d.key, offset: d.end - d.start, type: "text" };
}
function oC(e, t = []) {
  for (const n of e)
    ue(n) && t.push(n), E(n) && oC(n.getChildren(), t);
  return t;
}
function aC(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), E(e) && e.getChildren().forEach((n) => aC(n, t)), t;
}
function ZR(e, t, n) {
  const r = ni(e, t.key, n);
  if (r)
    return t.isSentinel ? {
      kind: "preserved",
      anchor: r,
      run: e.spans.filter((i) => i.isSentinel).indexOf(t)
    } : { kind: "byte", anchor: r };
}
function pl(e, t, n = t.sentinels, r) {
  const i = [];
  for (const o of oC(e)) {
    const a = aC(o), c = t.spans.filter((k) => a.has(k.key)), l = c[0], u = c[c.length - 1];
    if (!l || !u) continue;
    const f = ZR(t, l, 0), d = ni(t, u.key, u.end - u.start);
    if (!f || !d) continue;
    const p = o.getTypedOnClicks(), h = o.getTypedOnRemoves(), g = o.getTypedOnMouseEnters(), m = o.getTypedOnMouseLeaves(), y = Object.entries(o.getTypedIDs()).flatMap(
      ([k, x]) => x.map((A) => ({
        type: k,
        id: A,
        onClick: p[k]?.[A],
        onRemove: h[k]?.[A],
        onMouseEnter: g[k]?.[A],
        onMouseLeave: m[k]?.[A]
      }))
    );
    y.length > 0 && i.push({ annotations: y, start: f, end: d });
  }
  const s = (o) => {
    const a = o.getKey();
    for (const c of ei(o)) {
      if (c.start === c.end || !Xp(t, a, c.start)) continue;
      const l = ni(t, a, c.start), u = ni(t, a, c.end);
      if (!l || !u) continue;
      const f = r && tc(r, c.type, c.id);
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
    E(o) && o.getChildren().forEach(s);
  };
  return e.forEach(s), { ranges: i, live: i.length > 0 ? Tc(t, n) : void 0 };
}
function eI(e, t, n) {
  const r = cC(e);
  if (!r) return;
  const i = r[r.length - 1].getNextSibling();
  if (!ue(i) || !i.hasID(t, n)) return;
  const s = i.getFirstChild();
  s && r.forEach((o) => s.insertBefore(o));
}
function tI(e, t) {
  const n = cC(e);
  if (!n) return;
  const r = Di();
  r.addID(
    t.type,
    t.id,
    t.onClick,
    t.onRemove,
    t.onMouseEnter,
    t.onMouseLeave
  ), n[0].insertBefore(r), r.append(...n);
}
function cC(e) {
  const t = X(e), n = t?.getParent()?.getChildren();
  if (!t || !n) return;
  const r = n.findIndex((s) => s.is(t));
  if (r < 0) return;
  const i = Ue(t) ? cl(n, r) : Ke(t) ? al(n, r) : [];
  return [t, ...i];
}
function lC(e, t, n, r) {
  const i = n.settledOnlyRuns, s = { addressDisplayBytes: r }, o = Dp(i, e);
  if (o) {
    if (!o.within) return;
    const u = pn(o.run.spelling, o.within, s);
    return u ? { point: u, at: o.within.nonWsBefore, literalRun: o.run.sentinelIndex } : void 0;
  }
  const a = r && HT(i, e);
  if (a) {
    const u = t.sentinels[a.sentinelIndex]?.[0]?.getKey(), f = {
      nonWsBefore: a.settledBefore + 1,
      wsRun: 0
    }, d = pn(t, f, s);
    return d && u ? { point: d, at: f.nonWsBefore, preservedKey: u } : void 0;
  }
  const c = ga(n.alignment, e, "toSettled"), l = pn(t, c, s);
  return l && { point: l, at: c.nonWsBefore };
}
function nI(e, t, n) {
  if (e.kind === "byte") return lC(e.anchor, t, n, !0);
  const r = n.sentinelMap[e.run]?.find((a) => a !== void 0), i = r && t.sentinels[r.sentinelIndex]?.[0]?.getKey();
  if (!i) return;
  const s = ga(n.alignment, e.anchor, "toSettled"), o = pn(t, s, { addressDisplayBytes: !0 });
  return o && { point: o, at: s.nonWsBefore, preservedKey: i };
}
function $m(e) {
  if (e.type !== "text") return e;
  const t = X(e.key);
  if (C(t)) return e;
  const n = t?.getParent();
  if (!t || !n) return;
  const r = t.getIndexWithinParent() + (e.offset > 0 ? 1 : 0);
  return { key: n.getKey(), offset: r, type: "element" };
}
function hl({ ranges: e, live: t }, n) {
  if (e.length === 0 || !t) return;
  const r = N()?.clone() ?? null;
  for (const i of e)
    for (const s of i.annotations) {
      const o = n();
      if (!o) continue;
      const a = Cc(t, qp(o)), c = nI(i.start, o, a), l = lC(i.end, o, a, !1);
      if (!c || !l || c.literalRun !== l.literalRun) continue;
      const u = i.start.anchor;
      if (c.at === l.at && u.nonWsBefore !== i.end.nonWsBefore && !c.preservedKey)
        continue;
      const { preservedKey: f } = c, d = $m(c.point), p = $m(l.point);
      if (!d || !p) continue;
      if (d.key === p.key && d.offset === p.offset && d.type === p.type) {
        f && tI(f, s);
        continue;
      }
      const h = Dr();
      h.anchor.set(d.key, d.offset, d.type), h.focus.set(p.key, p.offset, p.type), Id(
        h,
        s.type,
        s.id,
        s.onClick,
        s.onRemove,
        s.onMouseEnter,
        s.onMouseLeave
      ), f && eI(f, s.type, s.id);
    }
  Un(r);
}
function Qp(e, t, n) {
  if (n <= t) return e;
  const r = n - t, i = (s) => s <= t ? s : s >= n ? s - r : t;
  return {
    text: e.text.slice(0, t) + e.text.slice(n),
    spans: e.spans.map((s) => ({
      ...s,
      start: i(s.start),
      end: i(s.end)
    })),
    sentinels: e.sentinels
  };
}
function uC(e, t) {
  return e.sentinels.filter((r, i) => r.length > 0 && (t[i]?.length ?? 0) === 0).map((r) => r[0].getKey()).reverse().reduce((r, i) => {
    const s = r.spans.find((o) => o.isSentinel && o.key === i);
    return s ? Qp(r, s.start, s.end) : r;
  }, e);
}
function to(e) {
  const t = e.exportJSON();
  return E(e) && Array.isArray(t.children) && e.getChildren().forEach((n) => t.children?.push(to(n))), t;
}
function Zp(e, t, n, r, i, s, o) {
  const a = pl(
    e,
    uC(t, n),
    n
  );
  if (a.ranges.length === 0) return r;
  const c = Hf({
    nodes: [gt, ...rl],
    onError: (u) => {
      throw u;
    }
  });
  Gf(
    c,
    gt,
    (u) => Di(u.getTypedIDs()),
    (u, f) => Object.entries(u.getTypedIDs()).forEach(
      ([d, p]) => p.forEach((h) => f.addID(d, h))
    )
  );
  let l;
  return c.update(
    () => {
      const u = Ee(), f = i === "noteContent" ? zn() : u;
      f !== u && u.append(f), l = f.getKey(), r.forEach((p) => f.append(Lr(p))), hl(a, () => {
        const p = f.getChildren();
        if (i === "paras") return Yp(p, s, o);
        if (i === "chapter")
          return $e(p[0]) ? Yo(p[0], s, o) : void 0;
        const h = { text: "", spans: [], sentinels: [] };
        return Vn(p, h, s, o), h;
      });
    },
    { discrete: !0 }
  ), c.getEditorState().read(() => {
    const u = l === void 0 ? void 0 : X(l);
    return E(u) ? u.getChildren().map(to) : r;
  });
}
function _f(e) {
  const t = X(e.key);
  if (!t?.isAttached()) return !1;
  if (e.type === "text")
    return C(t) ? (t.select(e.offset, e.offset), !0) : !1;
  if (!E(t)) return !1;
  const n = Dr();
  return n.anchor.set(e.key, e.offset, "element"), n.focus.set(e.key, e.offset, "element"), Un(n), !0;
}
function rI(e, t, n) {
  const r = pn(e, t);
  if (r?.type === "text") {
    if (_f(r)) return;
  } else if (r) {
    const i = X(r.key), s = E(i) ? i.getChildAtIndex(r.offset - 1) : void 0;
    if (s) {
      s.selectNext(0, 0);
      return;
    }
  }
  n.find(E)?.selectStart();
}
function gl(e, t) {
  const n = t.getNode(), r = Kp(e, n), i = r && Up(r.member, n);
  return {
    // An element point (a click past a paragraph's trailing note) has no span of its own, so it
    // is spelled from the child bytes beside it, the same way a settled position spells one.
    anchor: t.type === "element" ? Ao(e, n, t.offset)?.anchor : ni(e, t.key, t.offset),
    inRun: r && i ? {
      sentinelIndex: r.sentinelIndex,
      memberIndex: r.memberIndex,
      path: i,
      offset: t.offset,
      type: t.type
    } : void 0,
    live: Tc(e, e.sentinels)
  };
}
function fC(e, t, n) {
  const r = t && Cc(t.live, qp(e));
  if (t?.inRun && r) {
    const { sentinelIndex: o, memberIndex: a, path: c, offset: l, type: u } = t.inRun, f = r.sentinelMap[o]?.[a];
    let d = f && e.sentinels[f.sentinelIndex]?.[f.memberIndex];
    for (const p of c)
      d = E(d) ? d.getChildAtIndex(p) ?? void 0 : void 0;
    if (d && _f({ key: d.getKey(), offset: l, type: u })) return;
  }
  if (!t?.anchor || !r) {
    n.find(E)?.selectStart();
    return;
  }
  const { anchor: i } = t, s = Dp(r.settledOnlyRuns, i);
  if (s) {
    const o = s.within ?? {
      nonWsBefore: eo(s.run.inner, s.count, "live"),
      wsRun: i.wsRun
    }, a = pn(s.run.spelling, o);
    if (a && _f(a)) return;
  }
  rI(
    e,
    ga(r.alignment, i, "toSettled"),
    n
  );
}
function dC(e, t, n, r, i) {
  n && fC(Yp(e, r, i), t, e);
}
function pC(e, t, n, r, i) {
  if (!n) return;
  if (!t?.anchor && !t?.inRun) {
    iI(e, r);
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  Vn(e, s, r, i), fC(s, t, e);
}
function iI(e, t) {
  const n = e.find(E);
  if (n && Vp(n, t)) {
    const r = n.getParent();
    if (r) {
      const i = n.getIndexWithinParent();
      r.select(i, i);
      return;
    }
  }
  n?.selectStart();
}
function hC(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: n, getMarker: r, logger: i } = t, s = Gp(e, r, n);
  if (!s)
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = N();
  if (M(c)) {
    for (let m = c.anchor.getNode(); m; m = m.getParent())
      if (e.some((y) => y.is(m))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = gl(s, c.anchor));
  }
  const l = pl(e, s, void 0, Ut()), u = is(s, {
    getMarker: r
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Hr(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const f = or.serializeEditorState(
    { type: nr, version: tr, content: u },
    n
  );
  if (Sr(f.root.children, r) === Cr(e, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = f.root.children.map((m) => Lr(m));
  if (dl(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = Go(e).map((m) => ({
    number: m.getNumber(),
    sid: m.getSid()
  })), h = e[0];
  d.forEach((m) => h.insertBefore(m)), fl(d, s.sentinels), e.forEach((m) => m.remove());
  const g = Go(d);
  for (let m = 0; m < p.length && m < g.length; m++)
    g[m].getNumber() === p[m].number && g[m].setSid(p[m].sid);
  return hl(l, () => Yp(d, r, n)), dC(d, o, a, r, n), !0;
}
function sI(e) {
  if (e.getIsCollapsed() !== !1 || !tt.isValidMarker(e.getMarker())) return;
  const t = e.getChildren();
  let n = 0;
  for (; n < t.length; ) {
    const o = t[n];
    if (!w(o) || o.getMarkerSyntax() !== "opening") break;
    n++;
  }
  const r = t[n];
  if (!r || !(Lt(r) || C(r) && r.getTextContent() === vt(e.getCaller()))) return;
  n++;
  let s = t.length;
  for (; s > n; ) {
    const o = t[s - 1];
    if (!w(o) || o.getMarkerSyntax() !== "closing") break;
    s--;
  }
  return t.slice(n, s);
}
function Jo(e, t, n) {
  const r = sI(e);
  if (!r) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Vn(r, i, t, n), { out: i, contentNodes: r };
}
function gC(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const r = t.content[0];
  if (typeof r != "string" || r.includes(xt)) return;
  const i = r.trim();
  if (i !== "")
    return e.shift(), i;
}
function oI(e, t) {
  const { viewOptions: n, getMarker: r, logger: i } = t, s = Jo(e, r, n);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = N();
  if (M(u)) {
    for (let $ = u.anchor.getNode(); $; $ = $.getParent())
      if (e.is($)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = gl(o, u.anchor));
  }
  const f = pl(a, o, void 0, Ut()), d = is(o, {
    getMarker: r,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Hr(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [p] = d;
  if (d.length !== 1 || typeof p != "object" || p.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const h = p.content ?? [], g = gC(h), m = YT(e, h);
  if (m)
    return aI(
      e,
      m,
      g,
      o.sentinels,
      t,
      l
    );
  const y = JT(e, h, g, n);
  if (y.failure !== void 0)
    return y.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      y.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (ui(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const k = e.getCategory() !== g;
  if (k && e.setCategory(g), Sr(y.children, r) === Cr(a, r))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), k;
  const x = y.children.map(($) => Lr($));
  if (dl(x) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), k;
  const A = a[0];
  if (A)
    x.forEach(($) => A.insertBefore($));
  else {
    const $ = e.getChildren().find((ne) => w(ne) && ne.getMarkerSyntax() === "closing");
    x.forEach((ne) => $ ? $.insertBefore(ne) : e.append(ne));
  }
  fl(x, o.sentinels);
  const _ = new Set(o.sentinels.flat().map(($) => $.getKey()));
  a.forEach(($) => {
    _.has($.getKey()) || (ue($) && ($.getWritable().__suppressOnRemoveCallbacks = !0), $.remove());
  });
  const j = () => Jo(e, r, n);
  return hl(f, () => j()?.out), pC(
    j()?.contentNodes ?? x,
    c,
    l,
    r,
    n
  ), !0;
}
function aI(e, { before: t, after: n }, r, i, s, o) {
  const { viewOptions: a, logger: c } = s, l = XT(
    e,
    t,
    n,
    r,
    a
  );
  if (!l || ui(l) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  const u = l.map((h) => Lr(h)), [f] = u;
  if (!D(f) || dl(u) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  let d = e;
  for (const h of u)
    d.insertAfter(h), d = h;
  fl(u, i);
  const p = e.getChildren();
  return e.append(...f.getChildren()), p.forEach((h) => h.remove()), e.setCaller(f.getCaller()).setCategory(f.getCategory()).setUnknownAttributes(f.getUnknownAttributes()).setIsCollapsed(f.getIsCollapsed()), f.remove(), o && (e.getIsCollapsed() !== !0 && a?.isNoteShellEditable === !1 ? qa(e, a) : rx(e, { isContentChange: !0 })), !0;
}
function mC(e) {
  const t = e.getChildren();
  return vd(t[0]) ? t.slice(1) : t;
}
function eh(e, t, n) {
  const r = mC(e), i = { text: "", spans: [], sentinels: [] };
  return Vn(r, i, t, n), { out: i, contentNodes: r };
}
const cI = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${Bn}(?=[\\s\\u200B\\\\|]|$)`
);
function yC(e, t) {
  const n = is(e, { getMarker: t }), [r, ...i] = n;
  return typeof r == "object" && r.type === "para" && r.marker === Bn && !cI.test(e.text) ? { content: n, lineContent: r.content ?? [], followingBlocks: i } : { content: n, lineContent: [], followingBlocks: n };
}
function bC(e, t, n = []) {
  const { viewOptions: r, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = eh(e, i, r);
  if (!Jp(o, n, i, r))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: paragraph excluded by guard rails"), !1;
  const c = [e, ...n];
  let l, u = !1;
  const f = N();
  if (M(f)) {
    for (let $ = f.anchor.getNode(); $; $ = $.getParent())
      if (c.some((ne) => ne.is($))) {
        u = !0;
        break;
      }
    f.isCollapsed() && (l = gl(o, f.anchor));
  }
  const d = yC(o, i);
  if (Hr(d.content) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const p = QT(
    e,
    d.lineContent,
    d.followingBlocks,
    r
  );
  if (p.failure !== void 0)
    return p.failure === "empty" ? s?.debug("[MarkerEdit] Book Tier 2 skipped: no content nodes after unwrap") : s?.warn("[MarkerEdit] Book Tier 2 aborted: unexpected serialized shape"), !1;
  const h = [...p.children, ...p.followingBlocks];
  if (ui(h) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (p.followingBlocks.length === n.length && Sr(p.followingBlocks, i) === Cr(n, i) && Sr(p.children, i) === Cr(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const g = p.children.map(($) => Lr($)), m = p.followingBlocks.map(($) => Lr($)), y = [...g, ...m];
  if (dl(y) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const k = Go([...a, ...n]).map(($) => ({
    number: $.getNumber(),
    sid: $.getSid()
  })), x = a[0];
  x ? g.forEach(($) => x.insertBefore($)) : g.forEach(($) => e.append($)), m.reduce(($, ne) => $.insertAfter(ne), e), fl(y, o.sentinels);
  const A = new Set(o.sentinels.flat().map(($) => $.getKey()));
  a.forEach(($) => {
    A.has($.getKey()) || $.remove();
  }), n.forEach(($) => $.remove());
  const _ = [...mC(e), ...m], j = Go(_);
  for (let $ = 0; $ < k.length && $ < j.length; $++)
    j[$].getNumber() === k[$].number && j[$].setSid(k[$].sid);
  return pC(
    _,
    l,
    u,
    i,
    r
  ), !0;
}
const kC = /* @__PURE__ */ new Set(["ca", "cp"]), th = "cp";
function xC(e) {
  if (!_t(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (zs(e, t, xr, void 0), t.sentinels.length > 0) return !1;
  const n = t.text;
  if (n.trim() === "") return !1;
  const r = qc(Bp(n), {
    getMarker: xr
  }), [i] = r, s = r.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(n) ? i.content ?? [] : r;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === th)
  );
}
function ss(e) {
  const t = [];
  for (let n = e.getNextSibling(); n; n = n.getNextSibling()) {
    if (U(n) && kC.has(n.getMarker()) || xC(n)) {
      t.push(n);
      continue;
    }
    ye(n) && n.getMarker() === th && t.push(n);
    break;
  }
  return t;
}
function lI(e) {
  const t = (r) => U(r) && kC.has(r.getMarker()) || xC(r);
  if (t(e) || ye(e) && e.getMarker() === th)
    for (let r = e.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if ($e(r)) return r;
      if (!t(r)) return;
    }
}
function Yo(e, t, n) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const r = ss(e);
  if (r.some((s) => ye(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Vn(e.getChildren(), i, t, n), Vn(r, i, t, n), !(i.sentinels.length > 0))
    return i;
}
function uI(e, t) {
  const { viewOptions: n, getMarker: r, logger: i } = t, s = [e, ...ss(e)], o = Yo(e, r, n);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = N();
  if (M(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((y) => y.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = gl(o, l.anchor));
  }
  const u = pl(s, o, void 0, Ut()), f = qc(Bp(o.text), {
    getMarker: r
  }), [d] = f;
  if (f.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Hr(f) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const p = or.serializeEditorState(
    { type: nr, version: tr, content: f },
    n
  );
  if (Sr(p.root.children, r) === Cr(s, r)) {
    let m = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), m = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), m = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const h = p.root.children.map((m) => Lr(m));
  if (!$e(h[0]))
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1;
  const g = h[0];
  return h.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), hl(
    u,
    () => Yo(g, r, n)
  ), dC(h, a, c, r, n), !0;
}
function Xo(e) {
  let t, n;
  for (let r = e; r; r = r.getParent()) {
    if (Ze(r)) return;
    !t && (D(r) && !jp(r) || ye(r) || $e(r) || Ie(r)) && (t = r), Mn(r.getParent()) && (n = r);
  }
  return t && !t.is(n) ? t : (n ? lI(n) : void 0) ?? t;
}
function Kn(e, t) {
  const n = Xo(e);
  return n ? D(n) ? oI(n, t) : $e(n) ? uI(n, t) : Ie(n) ? bC(n, t) : hC([n], t) : !1;
}
const fI = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Rm(e, t) {
  const n = Object.entries(e).filter(
    (r) => typeof r[1] == "string" && !fI.has(r[0])
  );
  if (n.length !== 0) {
    t.push("|");
    for (const [r, i] of n) t.push(`${r}="${i}"`);
  }
}
function za(e, t) {
  if (e)
    for (const n of e) {
      if (typeof n == "string") {
        t.push(n);
        continue;
      }
      const r = n.marker ?? "", i = n.closed;
      switch (n.type) {
        case "verse":
          t.push(`\\${r} ${n.number ?? ""}`), n.altnumber !== void 0 && t.push(`\\va ${n.altnumber}\\va*`), n.pubnumber !== void 0 && t.push(`\\vp ${n.pubnumber}\\vp*`);
          break;
        case "chapter":
          t.push(`\\${r} ${n.number ?? ""}`), n.altnumber !== void 0 && t.push(`\\ca ${n.altnumber}\\ca*`), n.pubnumber !== void 0 && t.push(`\\cp ${n.pubnumber}`);
          break;
        case "ms":
          t.push(`\\${r}`), Rm(n, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${r}`);
          break;
        case "char":
          t.push(`\\${r} `), za(n.content, t), Rm(n, t), i !== "false" && t.push(`\\${r}*`);
          break;
        case "note": {
          const s = n.caller, o = n.category;
          t.push(`\\${r} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), za(n.content, t), i !== "false" && t.push(`\\${r}*`);
          break;
        }
        default:
          t.push(`\\${r} `), za(n.content, t);
      }
    }
}
function Im(e, t, n) {
  const r = Xo(e);
  if (!mt(r)) return !1;
  const i = N();
  if (!M(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (r.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Ie(r) ? eh(r, t, n).out : Hp(r, t, n);
  if (!o) return !1;
  const a = is(o, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    On.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  za(a, l);
  for (const u of l.join("").replaceAll(q, "~")) {
    if (On.test(u)) continue;
    const f = c.get(u);
    f !== void 0 && f > 0 && c.set(u, f - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function nh(e, t) {
  return CC(e, t, T.Paragraph);
}
function TC(e, t) {
  return CC(e, t, T.Character);
}
function CC(e, t, n) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const i = t(r)?.type;
  return i !== void 0 && i !== T.Unknown ? i === n : !(tt.isValidMarker(r) || nd(r));
}
function dI(e) {
  return [$t(e), Bi()];
}
function rh(e) {
  sr(e, 2);
}
function pI(e) {
  const t = N();
  if (!M(t) || !t.isCollapsed()) return !1;
  const { anchor: n } = t;
  if (n.type === "element") return n.key === e.getKey() && n.offset === 0;
  const r = e.getFirstChild();
  return r !== null && n.key === r.getKey() && n.offset === 0;
}
function ml(e) {
  const t = pI(e);
  e.splice(0, 0, dI(e.getMarker())), t && rh(e);
}
function vc(e, t) {
  e.setMarker(t), ml(e), rh(e);
}
function hI(e, t) {
  const n = e.getFirstChild();
  if (!n) return;
  const r = n.getNextSibling();
  if (!bn(r)) {
    if (C(r) && !w(r) && /^[ \u00A0]$/.test(r.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      r.setTextContent(q), Ht(r, ke, Mr), r.setMode("token");
      return;
    }
    if (tk(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    n.insertAfter(Bi());
  }
}
function Lm(e, t, n) {
  const r = e.getNode();
  if (r.is(t))
    return n === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? r.getTextContentSize() : E(r) ? r.getChildrenSize() : 0;
  if (n === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = r; !s.is(t); ) {
    if (n === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function wo(e) {
  for (let t = e; t; t = t.getParent())
    if (ye(t)) return t;
}
function gI(e) {
  const t = e.isBackward(), n = t ? e.focus : e.anchor, r = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = wo(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = wo(n.getNode())?.is(s) ?? !1, a = wo(r.getNode())?.is(s) ?? !1;
    return !(o && !Lm(n, s, "start") || a && !Lm(r, s, "end"));
  });
}
function Mf(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const n = N();
  if (!(!M(n) || n.isCollapsed()))
    for (const r of gI(n)) t.add(r.getKey());
}
function mI(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const n = N();
  if (!M(n) || !n.isCollapsed()) return;
  const r = wo(n.focus.getNode());
  r && t.add(r.getKey());
}
function yI(e) {
  const t = N();
  !M(t) || t.isCollapsed() || t.getNodes().some((n) => w(n)) && (Mf(e), t.removeText());
}
const bI = new RegExp(
  String.raw`^\\\+?([${Gn}]+)(?:[ \u00A0]|$)`
);
function kI(e, t) {
  const n = bI.exec(e.getTextContent());
  return !!n && nh(n[1], t);
}
function xI(e, t) {
  if (!rs(t.viewOptions)) return;
  if (mn(e.getFirstChild())) {
    hI(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (kI(e, t.getMarker)) return;
    ml(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const r = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!r && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ye(o) && !o.is(e))) {
      vc(e, Bn), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const n = e.getPreviousSibling();
  if (mt(n)) {
    const r = e.getChildren().filter((a) => !bn(a)), i = N();
    let s = !1;
    if (M(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : wo(a)?.is(e) && (s = !r.some(
        (c) => a.is(c) || E(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = n.getChildrenSize();
    n.append(...r), e.remove(), s && sr(n, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  vc(e, Bn);
}
function TI(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const n = Xn(t, Ws(e.getMarker()));
  return n === "" ? void 0 : n;
}
function vC(e) {
  const t = e.getChildren().filter((s) => !w(s) && de(s, ke) !== "attribute"), n = t[0];
  n && C(n) && n.getTextContent().startsWith(q) && n.setTextContent(n.getTextContent().slice(1));
  const r = TI(e);
  r && t.push(Re(r));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function CI(e) {
  const t = e.getNode();
  let n;
  if (e.type === "element" && E(t) ? n = t.getChildAtIndex(e.offset) : w(t) && e.offset === 0 ? n = t : C(t) && e.offset === t.getTextContentSize() && (n = t.getNextSibling()), U(n) && (n = n.getFirstChild()), !w(n) || n.getMarkerSyntax() !== "opening") return;
  const r = n.getParent();
  if (!(!U(r) || !n.is(r.getFirstChild())))
    return n.getTextContentSize() === 1 ? n : void 0;
}
function vI() {
  const e = N();
  if (!M(e) || !e.isCollapsed()) return !1;
  const t = CI(e.anchor), n = t?.getParent();
  if (!t || !U(n)) return !1;
  const r = t.getNextSibling();
  return t.remove(), jr(r) && r.getTextContent().startsWith(q) && r.setTextContent(` ${r.getTextContent().slice(q.length)}`), vC(n), C(r) && r.isAttached() && r.select(0, 0), !0;
}
function SI(e, t) {
  const n = e.getChildren(), r = n.some((s) => w(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (r) return;
    const s = n[0], o = n[n.length - 1];
    if (C(s) && s.isUnmergeable() && s.getMode() === "token" || w(o) && o.getMarkerSyntax() === "closing" && o.getMode() === "token") {
      const u = $t(e.getMarker());
      u.setMode("token");
      const f = e.getFirstChild();
      f ? f.insertBefore(u) : e.append(u);
      return;
    }
    const a = e.getCaller(), c = n.some(
      (u) => C(u) && !w(u) && u.getTextContent() === vt(a)
    ), l = Yi(e).some(({ node: u }) => w(u));
    if (!c && !l) return;
    n.forEach((u) => {
      w(u) || (C(u) && u.getTextContent() === vt(a) && u.setTextContent(a ? ` ${a} ` : " "), e.insertBefore(u));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = n.some((s) => w(s) && s.getMarkerSyntax() === "closing");
  r !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function _I(e, t) {
  if (e.isEmpty()) return;
  const n = e.getFirstChild();
  if (!(w(n) && n.getMarkerSyntax() === "opening")) {
    vC(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => w(o) && o.getMarkerSyntax() === "closing");
  i && !s && Kn(e, t);
}
function SC(e, t, n) {
  if (!w(e.getFirstChild()) && n?.markerMode === "editable" && rs(n)) {
    vc(e, t);
    return;
  }
  yx(e, t);
}
function _C() {
  const e = N();
  if (!M(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = MC(e);
    return t !== "removed" ? t : (Ef(), "handled");
  }
  return Ef() ? "handled" : "declined";
}
function MI(e, t) {
  if (!t) return e;
  const n = R$.exec(e);
  if (!n) return e;
  const r = n[1];
  return r === "c" || r === "v" || t(r)?.type !== T.Paragraph ? e : e.slice(n[0].length);
}
function qm(e, t) {
  const n = N();
  if (!M(n)) return "declined";
  if (n.isCollapsed()) {
    if (!EC())
      return "declined";
  } else {
    const s = MC(n);
    if (s !== "removed") return s;
  }
  const [r, ...i] = e.map(
    (s) => MI(s, t)
  );
  Dm(r ?? "");
  for (const s of i)
    Ef(), Dm(s);
  return "handled";
}
function EI(e) {
  const t = e.getRootElement(), n = t?.ownerDocument.getSelection(), r = n?.anchorNode;
  if (!t || !n || !r || !t.contains(r)) return !1;
  const i = Ji(r);
  if (!i) return !1;
  const s = An(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !C(i) || w(i)) return !1;
  const o = Math.min(n.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function MC(e) {
  const t = An(e.anchor.getNode()), n = An(e.focus.getNode()), r = t?.getIsCollapsed() === !1, i = n?.getIsCollapsed() === !1;
  return !r && !i ? "declined" : (e.removeText(), AI() ? "removed" : "needs-plain-split");
}
function Dm(e) {
  if (e === "") return;
  const t = N();
  M(t) && t.insertText(e);
}
function AI() {
  const e = N();
  if (!M(e) || !e.isCollapsed()) return !1;
  const t = An(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((n) => w(n) && n.getMarkerSyntax() === "opening");
}
function EC() {
  const e = N();
  if (!M(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), n = An(t);
  if (!(!n || n.getIsCollapsed() !== !1 || n.is(t)))
    return n;
}
function Ef() {
  const e = N();
  if (!M(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), n = EC();
  if (!n) return !1;
  let r = t;
  for (; !n.is(r.getParent()); ) {
    const l = r.getParent();
    if (!l) return !1;
    r = l;
  }
  const i = Kr("fp", { closed: "false" });
  i.append($t("fp"));
  const s = C(t) && !w(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(r);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    Ls(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    r.insertAfter(i);
    const [u] = l;
    u && (g0(u), i.append(u));
  }
  return i.getChildren().every(w) && i.append(Re(Pt)), AC(i), !0;
}
function AC(e) {
  const t = e.getChildren().find((n) => !w(n));
  if (C(t)) {
    const n = ud(t);
    t.select(n, n);
    return;
  }
  if (E(t)) {
    AC(t);
    return;
  }
  e.selectEnd();
}
function PI(e) {
  const t = [];
  let n = e;
  for (; n; )
    U(n) && t.push(n.getMarker()), n = n.getParent();
  return t;
}
function wI(e) {
  const t = e.getTopLevelElement(), n = [];
  for (const r of Ee().getChildren()) {
    if (t && r.is(t)) {
      Ie(r) && n.push(r.getMarker());
      break;
    }
    (Ie(r) || ot(r) || ye(r)) && n.push(r.getMarker());
  }
  return n;
}
function NI(e) {
  let t = e;
  for (; E(t); ) {
    const n = t.getFirstChild();
    if (!n) break;
    t = n;
  }
  return t;
}
function OI(e, t, n) {
  const r = e.getFirstChild();
  if (!r) return !1;
  let i = r;
  if (mn(r)) {
    if (t.is(r)) return !0;
    if (i = r.getNextSibling(), i && bn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(NI(i)) && n === 0 : !1;
}
function $I(e, t, n) {
  const r = e.getFirstChild();
  if (!r || !mn(r)) return !1;
  if (t.is(r)) return !0;
  const i = r.getNextSibling();
  return i !== null && bn(i) && t.is(i) && n === 0;
}
function RI() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: n, y: r, width: i, height: s } = t.getBoundingClientRect();
  return { x: n, y: r, width: i, height: s };
}
function II() {
  const e = N();
  if (!M(e)) return;
  const t = e.focus.getNode(), n = e.focus.offset, r = !e.isCollapsed(), i = Qe(t, ye), s = i ? void 0 : Qe(t, Ie), o = !r && !s && (!i || $I(i, t, n)) ? "paragraph" : "character", a = An(t);
  return {
    source: o,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: i?.getMarker() ?? s?.getMarker(),
    previousParaMarkers: wI(t),
    openCharMarkers: PI(t),
    noteMarker: a?.getMarker(),
    hasTextSelection: r,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Dd(t, n),
    anchorRect: RI()
  };
}
function LI() {
  const e = N();
  if (!M(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!C(t) || w(t)) return;
  const n = e.anchor.offset, r = t.getTextContent().slice(0, n), i = I$.exec(r);
  i && t.spliceText(n - i[0].length, i[0].length, "", !0);
}
function qI(e, t, n) {
  SC(e, t, n), rh(e);
}
function DI(e, t, n) {
  const r = N();
  if (!M(r)) return;
  const i = r.focus.getNode(), s = Qe(i, ye);
  if (t === "backslash" && s && OI(s, i, r.focus.offset)) {
    qI(s, e, n);
    return;
  }
  Af(e, n);
}
function PC(e, t) {
  const n = e.getNode(), r = cT(E(n) ? n : n.getParent());
  return t.is(r);
}
function KI(e, t) {
  const n = e.getNode();
  return !t.is(n) && !t.isParentOf(n) ? !1 : !PC(e, t);
}
function Sc(e, t, n) {
  const r = n.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= r && e.set(t.getKey(), r + 1, "element");
}
function UI(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!w(t) || t.getMarkerSyntax() !== "opening") return e;
  const n = t.getParent();
  if (!U(n)) return e;
  const r = n.getParent();
  return r ? Qt(r.getKey(), n.getIndexWithinParent(), "element") : e;
}
function BI(e, t, n) {
  const r = N();
  if (!M(r)) return !1;
  const i = r.isBackward() ? r.focus : r.anchor;
  if (!PC(i, e)) return !1;
  const s = r.isBackward() ? r.anchor : r.focus;
  if (!r.isCollapsed() && KI(s, e)) return !1;
  const o = vd(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (Sc(r.anchor, e, o), Sc(r.focus, e, o)), r.isCollapsed() || r.removeText();
  const a = N();
  if (!M(a) || !a.isCollapsed()) return !1;
  const c = fT(a);
  if (!c) return !1;
  const { parent: l, moving: u } = uT(
    UI(c.anchor)
  );
  if (!e.is(l)) return !1;
  const f = u.filter((h) => !h.is(o)), d = $s(t);
  e.insertAfter(d), d.append(...f);
  const [p] = f;
  return U(p) ? Hc(p) : d.select(0, 0), rs(n) && ml(d), !0;
}
function FI(e, t) {
  const n = N();
  return !M(n) || !n.isCollapsed() ? !1 : (n.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function wC(e) {
  const t = N();
  return M(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function zI(e) {
  const t = Qe(e.anchor.getNode(), Ie);
  if (!t) return;
  const n = t.getFirstChild();
  !n || !vd(n) || (Sc(e.anchor, t, n), Sc(e.focus, t, n));
}
function jI(e, t, n, r) {
  const i = N();
  if (M(i) ? zI(i) : r.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && LI(), e.kind === "closeTag") {
    wC(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && _C() !== "declined") return;
  if (e.kind === "paragraph" && It.isValidMarker(e.marker, r.nodeOptions?.extraValidMarkers)) {
    DI(e.marker, t.trigger, r.viewOptions);
    return;
  }
  if (tt.isValidMarker(e.marker, r.nodeOptions?.extraValidMarkers))
    return hT(
      e.marker,
      n,
      r.expandedNoteKeyRef,
      r.viewOptions,
      r.nodeOptions,
      r.logger
    );
  uf(
    e.marker,
    r.expandedNoteKeyRef,
    r.viewOptions,
    r.nodeOptions,
    r.logger,
    void 0,
    r.styleInfo
  ).action({ editor: Ut(), reference: n });
}
function Af(e, t) {
  const n = N();
  if (!M(n)) return !1;
  Kd(n);
  const r = (n.isBackward() ? n.focus : n.anchor).getNode();
  if (!Qe(r, ye)) {
    const o = Qe(r, Ie);
    if (o) return BI(o, e, t);
  }
  const i = rs(t);
  if (dT()) {
    const o = N();
    if (!M(o)) return !1;
    const a = Qe(o.anchor.getNode(), ye);
    return a ? (a.setMarker(e), i && ml(a), !0) : !1;
  }
  const s = n.insertParagraph();
  return ye(s) ? (i ? vc(s, e) : s.setMarker(e), !0) : !1;
}
function VI() {
  const [e] = Ce();
  return H(() => e.registerCommand(Ay, () => !0, Xt), [e]), null;
}
function WI(e, t) {
  if (!e.startsWith("\\")) return !0;
  const n = N$.exec(e)?.[1];
  return n === void 0 ? !1 : !nh(n, t);
}
function NC(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !WI(e.getTextContent(), t)) return;
  const n = e.getParent();
  if (!ye(n)) return;
  const r = t(n.getMarker())?.type;
  if (r !== void 0 && r !== T.Unknown || n.getFirstChild()?.is(e) !== !0) return;
  const i = n.getPreviousSibling();
  if (!(!ye(i) && !Ie(i)))
    return [i, n];
}
function OC(e, t) {
  const n = NC(e, t.getMarker);
  if (!n) return !1;
  const [r, i] = n;
  return Ie(r) ? bC(r, t, [i]) : hC([r, i], t);
}
function HI(e, t) {
  const n = N();
  M(n) && [n.anchor, n.focus].forEach((r) => {
    r.key === e.getKey() && r.offset > t && r.set(e.getKey(), t, "text");
  });
}
function $C(e) {
  const t = O$.exec(e);
  if (!t) return;
  const n = 1 + t[1].length;
  return { start: n, end: n + t[2].length };
}
function GI(e) {
  const t = N();
  if (!M(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const n = $C(e.getTextContent());
  if (!n) return;
  const { offset: r } = t.anchor;
  if (!(r < n.start || r > n.end))
    return r - n.start;
}
function JI(e) {
  const t = N();
  if (!M(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const n = e.getNextSibling();
  if (D(e.getParent()) && C(n)) {
    const r = n.getNextSibling();
    if (U(r)) {
      Hc(r);
      return;
    }
  }
  C(n) ? n.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Km(e, t) {
  if (t !== void 0) {
    const n = e.getLatest(), r = $C(n.getTextContent());
    if (r) {
      const i = Math.min(r.start + t, r.end);
      n.select(i, i);
      return;
    }
  }
  JI(e);
}
function Pf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function RC(e, t, n) {
  if (t.startsWith("+") !== e.getNested())
    return Kn(e, n);
  const r = GI(e), i = e.getParent();
  if (ye(i)) {
    if (!nh(t, n.getMarker))
      return OC(e, n) ? (n.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Kn(e, n);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Pf(s, t) && Km(e, r), n.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (U(i) || D(i)) {
    const s = t.replace(/^\+/, "");
    if (!(U(i) ? TC(t, n.getMarker) : tt.isValidMarker(s)) || U(i) && gd(i))
      return Kn(e, n);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Kn(e, n);
    i.setMarker(s);
    const c = i.getChildren().filter(w).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (HI(c, st(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Pf(a, s) && Km(e, r), n.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Kn(e, n);
}
function IC(e, t) {
  if (!w(e) || e.getMarkerSyntax() !== "opening") return;
  const n = e.getParent();
  if (!U(n) || !n.getFirstChild()?.is(e)) return;
  const r = Zs.exec(e.getTextContent());
  if (!r) return;
  const i = r[1];
  if (i.startsWith("+") !== e.getNested() || !TC(i, t)) return;
  const s = e.getMarker();
  if (n.getMarker() !== s) return;
  const o = i.replace(/^\+/, "");
  if (Pf(s, o) && !gd(n))
    return { char: n, glyph: e, closer: YI(n, s), newMarker: o };
}
function YI(e, t) {
  return e.getChildren().filter(w).filter((n) => n.getMarkerSyntax() === "closing" && n.getMarker() === t).at(-1);
}
function XI(e) {
  const t = N();
  if (!M(t)) return !1;
  const n = t.isCollapsed() ? [t.anchor] : [t.anchor, t.focus];
  for (const r of n) {
    const i = r.getNode();
    if (i.is(e)) return !0;
    const s = e.getPreviousSibling();
    if (s !== null && i.is(s) && r.offset === s.getTextContentSize())
      return !0;
    const o = e.getNextSibling();
    if (o !== null && i.is(o) && r.offset === 0) return !0;
    const a = e.getParent();
    if (a !== null && i.is(a)) {
      const c = e.getIndexWithinParent();
      if (r.offset === c || r.offset === c + 1) return !0;
    }
  }
  return !!(!t.isCollapsed() && t.getNodes().some((r) => r.is(e)));
}
function QI(e) {
  const t = e.getTextContent(), n = e.getMarkerSyntax() === "closing", r = (n ? /[ \u00A0]+$/ : /^[ \u00A0]+/).exec(t)?.[0];
  if (!r || r.length === t.length) return !1;
  const i = e.getParent();
  let s = e;
  if (n) {
    if (!D(i) || !i.getLastChild()?.is(e)) return !1;
    s = i;
  } else if (Be(i)) {
    const f = Tr(e)?.owner;
    if (!Ke(f) || !i.getFirstChild()?.is(e)) return !1;
    s = f;
  } else if (i?.getFirstChild()?.is(e)) {
    if (ye(i)) return !1;
    s = i;
  }
  const o = n ? s.getNextSibling() : s.getPreviousSibling();
  if (!C(o)) return !1;
  const a = n ? t.slice(0, t.length - r.length) : t.slice(r.length);
  if (e.setTextContent(a), !lr(e))
    return e.setTextContent(t), !1;
  const c = N(), l = M(c) && c.isCollapsed() && c.anchor.key === e.getKey() ? c.anchor.offset : void 0;
  if (n) {
    if (o.setTextContent(r + o.getTextContent()), l !== void 0 && l > a.length) {
      const f = l - a.length;
      o.select(f, f);
    }
    return !0;
  }
  const u = o.getTextContentSize();
  return o.setTextContent(o.getTextContent() + r), l !== void 0 && (l <= r.length ? o.select(u + l, u + l) : e.select(l - r.length, l - r.length)), !0;
}
function ZI(e, t) {
  const n = e.getTextContent();
  if (lr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Be(e.getParent()) && sd(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !XI(e)) {
    A_(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (QI(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    if (lM(e) || l2(e)) {
      t.pendingKeys.delete(e.getKey());
      return;
    }
    const r = ET.exec(n);
    if (r) {
      t.pendingKeys.delete(e.getKey()), RC(e, r[1], t);
      return;
    }
    if (w$.test(n)) {
      t.pendingKeys.delete(e.getKey()), Kn(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const r = e.getParent(), i = st(e.getMarker(), e.getNested());
    if ((U(r) || D(r)) && !Wf(r.getParent()) && e.getMarker() === r.getMarker() && r.getLastChild()?.is(e) && n.startsWith(i) && n.length > i.length) {
      const s = N(), o = M(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = Re(n.slice(i.length));
      e.setTextContent(i), r.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  if (e2(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function e2(e) {
  if (e.getMarkerSyntax() !== "selfClosing" || !Ke(Tr(e)?.owner)) return !1;
  const t = st(""), n = e.getTextContent();
  if (!n.startsWith(t) || n.length === t.length) return !1;
  const r = e.getParent(), i = Be(r) ? r : e;
  if (Be(r) && !r.getLastChild()?.is(e)) return !1;
  const s = i.getParent();
  if (!s || Wf(s)) return !1;
  const o = N(), a = M(o) && o.isCollapsed() && o.anchor.key === e.getKey() && o.anchor.offset > t.length ? o.anchor.offset - t.length : void 0, c = Re(n.slice(t.length));
  return e.setTextContent(t), i.insertAfter(c), a !== void 0 && c.select(a, a), !0;
}
function t2(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (ok(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function LC(e) {
  if (!Jf(e)?.length)
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
const go = LC("v"), n2 = LC("c"), Um = /^[ \u00A0]*$/;
function Bm(e, t, n) {
  const r = e.getNextSibling();
  if (C(r) && r.getType() === it.getType() && r.getMode() === "normal" && de(r, ke) !== "attribute")
    return r.setTextContent(t + r.getTextContent()), n !== void 0 && r.select(n, n), r;
  const i = Re(t);
  return e.insertAfter(i), n !== void 0 && i.select(n, n), i;
}
function r2(e, t) {
  const n = e.getTextContent(), r = Fn("v", e.getNumber());
  if (n === r) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(n);
  if (i) {
    const c = n.slice(i[0].length);
    if (go.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = go.valueAndRest.exec(c);
    if (l && Um.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (go.midEdit.test(n)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = go.valueAndRest.exec(n);
  if (!s) {
    const c = go.markerRest.exec(n);
    if (c) {
      const [, l, u, f] = c, d = N(), p = M(d) && d.isCollapsed() && d.anchor.key === e.getKey() ? d.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Fn("v", u));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, f.length) : void 0;
      Bm(e, f, h);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Kn(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(n)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), Um.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Fn("v", o)), a && Bm(e, a, a.length);
}
const i2 = /^[ \u00A0]+([^ \u00A0\\]*)[ \u00A0]([\s\S]*)$/;
function s2(e, t) {
  if (!wT(e)) return !1;
  const n = e.getParent();
  if (!D(n)) return !1;
  const r = n.getCaller(), i = e.getTextContent();
  if (i === vt(r))
    return t.pendingKeys.delete(e.getKey()), !0;
  if (!e.isUnmergeable()) return !1;
  t.pendingKeys.delete(e.getKey());
  const s = i2.exec(i);
  return s ? (a2(e, n, s[1], s[2]), !0) : c2(e, r) ? !0 : Dc(i, r).missing && /^[ \u00A0]/.test(i) && !i.includes("\\") && qC(e) ? (t.pendingKeys.add(e.getKey()), !0) : (DC(e, n), !0);
}
function o2(e) {
  if (!bl(e)) return !1;
  const t = e.getTextContent(), n = /^[ \u00A0]+/.exec(t)?.[0];
  if (!n) return !1;
  const r = e.getPreviousSibling(), i = C(r) && r.getMode() === "token" && !!yl(r);
  if (!C(r) || !(Ue(r) || i)) return !1;
  const s = N();
  if (!M(s) || !s.isCollapsed() || s.anchor.key !== e.getKey() || s.anchor.offset > n.length)
    return !1;
  const o = s.anchor.offset, a = t.slice(n.length), c = r.getTextContentSize();
  return r.getMode() === "token" ? r.select(c, c) : (r.setTextContent(r.getTextContent() + n), r.select(c + o, c + o)), a ? e.setTextContent(a) : e.remove(), !0;
}
function a2(e, t, n, r) {
  const i = e.getTextContent(), s = i.length - r.length, o = /^[ \u00A0]*/.exec(i)?.[0].length ?? 0, a = N(), c = M(a) && a.isCollapsed() && a.anchor.key === e.getKey() ? a.anchor.offset : void 0;
  t.getCaller() !== n && t.setCaller(n), e.setTextContent(vt(n));
  const l = r ? UC(t, e, r.replaceAll(q, " ")) : void 0;
  if (c === void 0) return;
  if (c >= s) {
    const f = c - s;
    l ? l.select(f, f) : e.select(e.getTextContentSize(), e.getTextContentSize());
    return;
  }
  const u = 1 + Math.min(Math.max(c - o, 0), n.length);
  e.select(u, u);
}
function c2(e, t) {
  const n = N();
  if (!M(n) || !n.isCollapsed()) return !1;
  const { anchor: r } = n;
  if (r.key !== e.getKey() || r.type !== "text") return !1;
  const i = e.getTextContent(), s = i.slice(0, r.offset);
  if (i.slice(r.offset) !== vt(t) || !AT.test(s) || s.includes("\\")) return !1;
  const o = e.getPreviousSibling();
  if (!w(o) || o.getMarkerSyntax() !== "opening" || !Zs.test(o.getTextContent())) return !1;
  const a = o.getTextContent() + s;
  return e.setTextContent(vt(t)), o.setTextContent(a), o.select(a.length, a.length), !0;
}
function l2(e) {
  const t = e.getParent();
  if (!D(t) || t.getIsCollapsed() !== !1) return !1;
  const n = N();
  if (!M(n) || !n.isCollapsed()) return !1;
  const r = e.getTextContent(), { anchor: i } = n;
  if (i.key !== e.getKey() || i.offset !== r.length) return !1;
  const s = Ve(e.getMarker()), o = r.slice(s.length);
  if (!r.startsWith(s) || !/^[|\\\s]+$/.test(o)) return !1;
  const a = e.getNextSibling();
  return !C(a) || w(a) || !a.isUnmergeable() ? !1 : (e.setTextContent(s), a.setTextContent(o + a.getTextContent()), a.select(o.length, o.length), !0);
}
function qC(e) {
  const t = N();
  if (!M(t) || !t.isCollapsed()) return !1;
  const { anchor: n } = t;
  if (n.key === e.getKey()) return !0;
  const r = e.getNextSibling();
  return n.offset === 0 && r !== null && n.key === r.getKey();
}
function DC(e, t) {
  const n = t.getCaller(), r = e.getTextContent(), { start: i } = Dc(r, n), s = rd(r, n), o = N(), a = M(o) && o.isCollapsed() && o.anchor.key === e.getKey() ? o.anchor.offset : void 0;
  e.setTextContent(vt(n));
  const c = s ? UC(t, e, s) : void 0;
  if (a !== void 0)
    if (c && a >= i) {
      const l = Math.min(a - i, s.length);
      c.select(l, l);
    } else BC(t, e);
}
function yl(e) {
  if (!C(e) || w(e) || !e.isUnmergeable()) return;
  const t = e.getParent();
  if (!D(t) || t.getIsCollapsed() !== !1) return;
  let n = t.getFirstChild();
  for (; w(n) && n.getMarkerSyntax() === "opening"; ) n = n.getNextSibling();
  return e.is(n) ? t : void 0;
}
function u2(e, t, n) {
  const r = yl(e);
  if (!(!r || !C(e)))
    return e.getTextContent() === vt(r.getCaller()) ? !1 : n === "idle" && qC(e) ? (t.pendingKeys.add(e.getKey()), !1) : (DC(e, r), !0);
}
function KC(e, t) {
  const { wrapper: n, closer: r } = ca(e);
  return (n ?? r ?? t).getNextSibling();
}
function bl(e) {
  return C(e) && e.getType() === it.getType() && e.getMode() === "normal" && !e.isUnmergeable() && de(e, ke) !== "attribute";
}
function UC(e, t, n) {
  const r = KC(e, t);
  if (bl(r))
    return r.setTextContent(n + r.getTextContent()), r;
  const i = Re(n);
  return r ? r.insertBefore(i) : e.append(i), i;
}
function BC(e, t) {
  const n = KC(e, t);
  bl(n) ? n.select(0, 0) : n ? e.select(n.getIndexWithinParent(), n.getIndexWithinParent()) : e.select(e.getChildrenSize(), e.getChildrenSize());
}
function f2(e, t) {
  if (!e.isAttached() || e.getIsCollapsed() !== !1) return;
  const n = e.getCaller();
  if (!Jf(e.getMarker())?.includes("caller")) return;
  const r = e.getChildren();
  let i = 0;
  for (; i < r.length; ) {
    const c = r[i];
    if (!w(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (i === 0) return;
  const s = r[i];
  if (C(s) && !w(s) && (s.isUnmergeable() || s.getTextContent() === vt(n)))
    return;
  const o = Re(vt(n)).toggleUnmergeable();
  t.viewOptions?.isNoteShellEditable === !1 && o.setMode("token"), r[i - 1].insertAfter(o);
  const a = N();
  M(a) && a.isCollapsed() && (a.anchor.key === r[i - 1].getKey() || a.anchor.key === e.getKey() && a.anchor.offset === i) && BC(e, o);
}
function d2(e) {
  if (!e.isAttached() || e.getIsCollapsed() !== !1) return;
  const t = e.getChildren(), n = t.find(
    (o) => w(o) && o.getMarkerSyntax() === "opening"
  );
  if (!w(n) || n.getMode() !== "token" || e.getUnknownAttributes()?.closed === "false") return;
  let r = t.find(
    (o) => w(o) && o.getMarkerSyntax() === "closing"
  );
  r || (r = $t(e.getMarker(), "closing"), r.setMode("token"), e.append(r));
  for (let o = r.getNextSibling(); o; o = r.getNextSibling())
    r.insertBefore(o);
  const i = r.getPreviousSibling(), s = i?.getPreviousSibling();
  bl(i) && U(s) && !s.getChildren().some((o) => w(o) && o.getMarkerSyntax() === "closing") && s.append(i);
}
function p2(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!C(t)) return;
  const n = Fn("c", e.getNumber()), r = t.getTextContent();
  if (r === n) return;
  const i = /^[ \u00A0]+/.exec(r), s = i ? r.slice(i[0].length) : r, o = n2.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function FC(e) {
  if (Ke(e)) {
    const { wrapper: t } = Kc(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (D(e)) {
    const { wrapper: t } = ca(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if ($e(e)) {
    const t = [], n = ub(e);
    n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper);
    const r = db(e);
    return r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper), t;
  }
  if (Ue(e)) {
    const t = [], n = Uo(e, "va");
    n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper);
    const r = n.wrapper ?? n.closer ?? e, i = Uo(r, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function h2(e) {
  const t = N();
  if (!M(t) || !t.isCollapsed()) return !1;
  const n = t.anchor.getNode();
  return FC(e).some((r) => n.is(r));
}
function g2(e, t, n = "departure") {
  let r = !1;
  const i = n === "departure";
  if (i && ye(e) && tk(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Bo)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && fa(l, e) && (i || h2(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of FC(e))
    l.remove(), r = !0;
  let s = !1;
  U(e) && _b(e) !== void 0 && !gd(e) && (Mb(e), s = !0, r = !0);
  let o = !1, a = !1, c = !1;
  for (const l of Bo)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (eE(l, e)) {
        jo(l, e), a = !0, r = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Ck(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Gc(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: r } : { handled: o, mutated: r };
}
function Fm(e) {
  return C(e) && e.getType() === it.getType() && e.getMode() === "normal" && de(e, ke) !== "attribute";
}
function m2(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const n = X(e);
  if (!n?.isAttached()) return t;
  for (let r = n.getPreviousSibling(); r && Fm(r); r = r.getPreviousSibling())
    t.add(r.getKey());
  for (let r = n.getNextSibling(); r && Fm(r); r = r.getNextSibling())
    t.add(r.getKey());
  return t;
}
function Pa(e, t, n = "departure") {
  let r = !1;
  if (e.pendingKeys.size === 0) return r;
  const i = m2(t), s = [...e.pendingKeys].filter((l) => !i.has(l)), o = new Set(
    s.filter((l) => {
      const u = X(l);
      return !!u?.isAttached() && !!IC(u, e.getMarker);
    })
  ), a = [
    ...s.filter((l) => o.has(l)),
    ...s.filter((l) => !o.has(l))
  ], c = /* @__PURE__ */ new Set();
  for (const l of a) {
    const u = X(l);
    if (!u?.isAttached()) {
      e.pendingKeys.delete(l);
      continue;
    }
    if (yl(u)) {
      e.pendingKeys.delete(l), r = u2(u, e, n) || r;
      continue;
    }
    if (w(u)) {
      e.pendingKeys.delete(l);
      const g = u.getTextContent();
      if (lr(u)) continue;
      const m = Zs.exec(g);
      u.getMarkerSyntax() === "opening" && m ? r = RC(u, m[1], e) || r : n === "idle" && Im(u, e.getMarker, e.viewOptions) ? e.pendingKeys.add(l) : OC(u, e) ? (r = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : r = Kn(u, e) || r;
      continue;
    }
    const f = Tr(u)?.owner, d = f?.isAttached() ? f : u, p = d.getKey();
    if (c.has(p)) {
      l !== p && e.pendingKeys.delete(l);
      continue;
    }
    if (i.has(p)) {
      e.pendingKeys.delete(l), e.pendingKeys.add(p);
      continue;
    }
    e.pendingKeys.delete(l), l !== p && e.pendingKeys.delete(p), c.add(p);
    const h = g2(d, e, n);
    if (r = h.mutated || r, !h.handled) {
      if (n === "idle" && Im(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(p);
        continue;
      }
      r = Kn(d, e) || r;
    }
  }
  return r;
}
function zC(e) {
  if (kn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (U(t)) return Co(t) !== void 0;
  return !1;
}
function y2(e) {
  const t = Tr(e);
  if (!t) return !1;
  const n = Br(t.kind);
  return !Gc(
    n,
    n.scanPieces(t.owner),
    n.expectedPieces(t.owner)
  );
}
function zm(e) {
  let t = e.getParent();
  for (; ue(t); ) t = t.getParent();
  return U(t) ? t : void 0;
}
function b2(e, t) {
  const n = N();
  if (!M(n) || !n.isCollapsed()) return !1;
  const { anchor: r } = n;
  if (r.key !== e.getKey() || r.type !== "text") return !1;
  const i = t.getFirstChild();
  if (!w(i) || i.getMarkerSyntax() !== "opening") return !1;
  let s = i.getNextSibling();
  for (; ue(s); ) s = s.getFirstChild();
  if (!e.is(s) || !Zs.test(i.getTextContent())) return !1;
  const o = e.getTextContent(), a = o.slice(0, r.offset);
  if (!AT.test(a) || o[r.offset] !== q) return !1;
  const c = i.getTextContent() + a;
  return e.setTextContent(o.slice(a.length)), i.setTextContent(c), i.select(c.length, c.length), !0;
}
function k2(e, t) {
  const n = e.getTextContent(), r = de(e, ke), i = e.getParent();
  if (r !== "attribute" && $e(i)) {
    n.replace(/^[ \u00A0]+/, "") === Fn("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (s2(e, t) || o2(e)) return;
  if (r === "attribute") {
    y2(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  const s = zm(e);
  if (s && b2(e, s)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!n.includes("\\")) {
    n.includes("|") && zC(e) || n.includes("//") && !Pu(e) || pb(e) || $e(Xo(e)) ? t.pendingKeys.add(e.getKey()) : t.pendingKeys.delete(e.getKey());
    const c = zm(e);
    c && hd(c) ? t.pendingKeys.add(c.getKey()) : c && _b(c) !== void 0 && c.markDirty();
    return;
  }
  if (Pu(e)) return;
  const o = N(), a = M(o) && o.isCollapsed() && o.anchor.key === e.getKey() ? n.slice(0, o.anchor.offset) : n;
  if ($$.test(a)) {
    if (v_(n)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(n)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(n), Kn(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function x2(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Ck(e, t);
}
function T2(e) {
  const t = (n) => {
    if (w(n)) {
      lr(n) || e.pendingKeys.add(n.getKey());
      return;
    }
    if (kn(n)) {
      ok(n) || e.pendingKeys.add(n.getKey());
      return;
    }
    for (const r of Bo)
      r.settleScope !== "none" && r.ownerPredicate(n) && (fa(r, n) || x2(r, n)) && e.pendingKeys.add(n.getKey());
    if (Ue(n)) {
      n.getTextContent() !== Fn("v", n.getNumber()) && e.pendingKeys.add(n.getKey());
      return;
    }
    if (C(n)) {
      if (n.getType() !== it.getType() || de(n, ke) === "attribute") return;
      const r = n.getParent();
      if ($e(r)) {
        n.getTextContent() !== Fn("c", r.getNumber()) && e.pendingKeys.add(n.getKey());
        return;
      }
      const i = yl(n);
      if (i) {
        n.getTextContent() !== vt(i.getCaller()) && e.pendingKeys.add(n.getKey());
        return;
      }
      const s = n.getTextContent();
      (s.includes("\\") || s.includes("|") && zC(n) || s.includes("//") || pb(n) !== void 0) && e.pendingKeys.add(n.getKey());
      return;
    }
    if (U(n)) {
      hd(n) && e.pendingKeys.add(n.getKey()), n.getChildren().forEach(t);
      return;
    }
    if (!Ze(n)) {
      if (Be(n) && n.getChildrenSize() === 0) {
        const r = Tr(n)?.owner;
        r && e.pendingKeys.add(r.getKey());
        return;
      }
      E(n) && n.getChildren().forEach(t);
    }
  };
  Ee().getChildren().forEach(t);
}
const jC = Kf(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function pu(e) {
  const t = e();
  return jt(Ff), jt(Ky), t;
}
const jm = 8, C2 = 1e3;
function hs(e, t) {
  const n = Ue(e) ? ["va", "vp"] : Ke(e) ? ["milestone"] : D(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const r of n)
    sE(Br(r), e, t.pendingKeys);
}
function v2(e, t) {
  const n = (r, i) => {
    if (i.updateTags.has($c) || Ld(e) === "remote")
      return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of r) {
        if (a !== "destroyed") continue;
        const c = X(o);
        if (!c) continue;
        const l = Tr(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = X(o.getKey());
        c?.isAttached() && Br(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
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
    e.registerMutationListener(it, n),
    e.registerMutationListener(Wn, n),
    e.registerMutationListener(Hn, n),
    e.registerMutationListener(Er, n)
  );
}
function wf(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const n = N();
  return n ? t ? Vx(n, t) : M(n) && Es(n) : !1;
}
function S2(e, t, n) {
  return et(
    e.registerCommand(
      Zn,
      (r) => {
        if (il() || wf(t)) return !1;
        const i = gf(r, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = n ? wp(Np(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = qm(o, t.getMarker);
          if (a === "declined" && EI(e) && (a = qm(o, t.getMarker)), a === "handled")
            return r?.preventDefault(), !0;
        }
        return !1;
      },
      He
    ),
    e.registerCommand(
      Zn,
      (r) => {
        const i = gf(r, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !QO()) return !1;
        const o = N();
        return t.structureProtectionMode === "protected" && M(o) && Es(o) ? !1 : (r?.preventDefault(), M(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Ro, void 0), a === "") return;
          const l = N();
          M(l) && l.insertText(a);
        }), !0);
      },
      Ge
    ),
    e.registerCommand(
      Zn,
      () => (t.splitExpected.current = !0, !1),
      Xt
    )
  );
}
function _2({
  viewOptions: e,
  getMarker: t,
  logger: n,
  markerSettleDelayMs: r,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = Ce(), a = e?.markerMode === "editable", c = !!e && Bt(e), l = te(void 0), u = te(r), f = te(s);
  return H(() => {
    u.current = r, f.current = s;
    const d = l.current;
    d && (e && (d.viewOptions = e), d.getMarker = t ?? xr, d.logger = n, d.structureProtectionMode = i);
  }, [e, t, n, r, i, s]), H(() => {
    if (!a || !e) return;
    const d = {
      viewOptions: e,
      getMarker: t ?? xr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: n,
      structureProtectionMode: i
    };
    l.current = d;
    const p = aM(
      o,
      d.pendingKeys,
      (I) => {
        d.pendingKeys.clear(), I.read(() => T2(d));
      }
    );
    let h, g = !1, m = !1, y, k = !1, x = !1, A = 0;
    const _ = () => A < jm ? !1 : (d.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${jm} consecutive mutating passes; leaving ${d.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...d.pendingKeys].join(", ")}`
    ), !0), j = (I, K = "departure") => {
      o.update(() => {
        A = pu(
          () => Pa(d, I, K)
        ) ? A + 1 : 0;
      });
    };
    let $;
    const ne = () => {
      if ($ !== void 0 && clearTimeout($), $ = void 0, x || d.pendingKeys.size === 0) return;
      const I = u.current ?? C2;
      I < 0 || ($ = setTimeout(() => {
        $ = void 0, !(x || d.pendingKeys.size === 0) && (g || _() || j(void 0, "idle"));
      }, I));
    }, fe = et(
      o.registerNodeTransform(Wn, (I) => {
        if (o.isComposing()) return;
        ZI(I, d);
        const K = Tr(I);
        K && (Ue(K.owner) || D(K.owner) || $e(K.owner) || Ke(K.owner) && Kc(K.owner).wrapper === void 0) && hs(K.owner, d);
      }),
      o.registerNodeTransform(Kt, (I) => {
        o.isComposing() || (r2(I, d), hs(I, d));
      }),
      o.registerNodeTransform(Rn, (I) => {
        o.isComposing() || (p2(I), I.isAttached() && hs(I, d));
      }),
      o.registerNodeTransform(It, (I) => {
        o.isComposing() || xI(I, d);
      }),
      o.registerNodeTransform(ze, (I) => {
        if (!o.isComposing()) {
          _I(I, d);
          for (const K of ["separator", "char"])
            I.isAttached() && fa(Br(K), I) && d.pendingKeys.add(I.getKey());
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
      o.registerNodeTransform(ir, (I) => {
        o.isComposing() || hs(I, d);
      }),
      o.registerNodeTransform(Er, (I) => {
        if (o.isComposing()) return;
        const K = Tr(I);
        K && (Ke(K.owner) || Ue(K.owner) || D(K.owner) || $e(K.owner)) && hs(K.owner, d);
      }),
      o.registerNodeTransform(tt, (I) => {
        o.isComposing() || (SI(I, d), f2(I, d), d2(I), hs(I, d));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(ur, (I) => {
        o.isComposing() || t2(I, d);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(it, (I) => {
        o.isComposing() || k2(I, d);
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
        it,
        (I) => {
          o.getEditorState().read(() => {
            for (const [K, ge] of I) {
              if (ge === "destroyed") continue;
              const re = X(K);
              !re || de(re, ke) !== "attribute" || Be(re.getParent()) || o.getElementByKey(K)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      v2(o, d),
      ...c ? [
        o.registerNodeTransform(it, (I) => {
          o.isComposing() || W$(I);
        }),
        o.registerCommand(
          Ns,
          (I) => Tm(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            I && typeof I == "object" && "clipboardData" in I ? I : null,
            o,
            !1,
            f.current
          ),
          Ge
        ),
        o.registerCommand(
          rr,
          (I) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            Tm(
              I && typeof I == "object" && "clipboardData" in I ? I : null,
              o,
              !0,
              f.current
            )
          ),
          Ge
        ),
        o.registerCommand(
          Zn,
          (I) => eR(
            // Same jsdom-safe duck-check as COPY above.
            I && typeof I == "object" && "clipboardData" in I ? I : null,
            d.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              d.splitExpected.current = !0;
            }
          ),
          Ge
        )
      ] : [],
      o.registerCommand(
        rr,
        () => (!wf(d) && !il() && Mf(d), !1),
        He
      ),
      o.registerCommand(
        ra,
        () => (o.isComposing() || yI(d), !1),
        kr
      ),
      o.registerCommand(
        Ic,
        (I) => I || o.isComposing() ? !1 : vI(),
        kr
      ),
      o.registerCommand(
        Rc,
        () => (g = !1, A = 0, ne(), !1),
        Xt
      ),
      o.registerCommand(
        _r,
        (I) => (g = !1, A = 0, ne(), (I.key === "Backspace" || I.key === "Delete") && !wf(d, Bx(I)) && (Mf(d), mI(d), queueMicrotask(() => {
          d.wholeParaDeleteExpected?.clear(), d.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !I.ctrlKey || I.altKey || I.shiftKey || I.metaKey || I.key !== " " && I.code !== "Space" || !XO() ? !1 : (I.preventDefault(), !0)),
        Ge
      ),
      o.registerCommand(
        My,
        (I) => {
          const K = _C();
          K === "needs-plain-split" && o.dispatchCommand(Ro, void 0);
          const ge = K !== "declined" || oE();
          return ge && I?.preventDefault(), Pa(d), ge;
        },
        Ge
      ),
      o.registerCommand(
        Ro,
        () => (d.splitExpected.current = !0, dT()),
        Ge
      ),
      S2(o, d, c),
      o.registerCommand(
        jC,
        () => {
          if (g) return !0;
          const I = o.getRootElement(), K = I?.ownerDocument, ge = !!I && !!K && K.hasFocus() && I.contains(K.activeElement);
          let re;
          if (ge) {
            const Le = N();
            re = M(Le) ? Le.focus.key : h;
          }
          return pu(() => Pa(d, re)), !0;
        },
        Xt
      ),
      o.registerCommand(
        Xf,
        () => (m = !0, !1),
        Xt
      ),
      o.registerCommand(
        Vf,
        () => {
          if (g) return !1;
          const I = N(), K = M(I) ? I.focus.key : h;
          return pu(() => Pa(d, K)), !1;
        },
        Xt
      ),
      o.registerUpdateListener(({ editorState: I, tags: K }) => {
        const ge = m || K.has(Oi);
        m = !1, d.splitExpected.current = !1, d.wholeParaDeleteExpected?.clear(), d.collapsedDeleteCaretParas?.clear(), d.rebuildAttempted.clear();
        const re = I.read(() => {
          const me = N();
          return M(me) ? me.focus.key : void 0;
        }), Le = y;
        if (re !== void 0 && (y = re), K.has($c)) {
          Cb(o, I, K), g = !0, re !== void 0 && (h = re);
          return;
        }
        if (ge) {
          re !== void 0 && re !== Le && (g = !0);
          return;
        }
        g || (re !== void 0 && (h = re), ne(), !(k || re === void 0) && [...d.pendingKeys].some((me) => me !== re) && (k = !0, queueMicrotask(() => {
          k = !1, !x && (_() || j(h));
        })));
      })
    );
    return () => {
      x = !0, $ !== void 0 && clearTimeout($), $ = void 0, p(), fe(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const M2 = ["status_unknown", "status_invalid"], VC = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, E2 = Object.values(VC);
function A2(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const n = VC[t];
  e.getAttribute("aria-description") !== n && (e.setAttribute("aria-description", n), e.title = n);
}
function Vm(e) {
  e.classList.remove(...M2), e.removeAttribute("aria-description"), E2.includes(e.title) && e.removeAttribute("title");
}
function P2(e, t, n, r) {
  const i = (a) => a.read(() => Ee().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = X(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of n.keys()) c(l);
      for (const l of r) c(l);
      return a;
    });
}
function w2(e) {
  const t = X(e), n = t?.getTopLevelElement();
  return !t || !n ? !1 : t.getKey() === n.getKey() ? !0 : w(t) && t.getParent()?.getKey() === n.getKey();
}
function N2({
  viewOptions: e,
  styleInfo: t,
  logger: n
}) {
  const [r] = Ce(), i = e?.markerMode === "editable";
  return H(() => {
    if (!i) return;
    const s = t ?? rc;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      r.isComposing() || r.getEditorState().read(() => {
        const u = bR(s, l);
        let f = u;
        if (l) {
          f = new Map(u);
          for (const [d, p] of o) {
            if (f.has(d) || w2(d)) continue;
            const h = X(d)?.getTopLevelElement();
            !h || l.has(h.getKey()) || f.set(d, p);
          }
        }
        for (const [d] of o) {
          if (f.has(d)) continue;
          const p = r.getElementByKey(d);
          p && Vm(p);
        }
        for (const [d, p] of f) {
          const h = r.getElementByKey(d);
          h && A2(h, p);
        }
        o = f, n?.debug(`[MarkerValidation] pass: ${f.size} flagged`);
      });
    };
    a();
    const c = r.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: f, dirtyLeaves: d }) => {
        f.size === 0 && d.size === 0 || a(
          P2(l, u, f, d)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = r.getElementByKey(l);
        u && Vm(u);
      }
    };
  }, [r, i, t, n]), null;
}
function no(e, t, n) {
  const r = Math.min(e.length, t.length);
  for (let i = 0; i < r; i++) {
    const s = e[i], o = t[i];
    n.set(s.getKey(), { node: o, siblings: t });
    const a = vr(o);
    a && E(s) && no(s.getChildren(), a, n);
  }
}
function Qo(e, t, n = 0) {
  let r = n;
  const i = (s) => {
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = vr(a);
      if (c) {
        i(c);
        continue;
      }
      const l = Fs(a);
      if (l === void 0 || !l.includes(xt)) continue;
      const u = l.split(xt), f = [];
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (d > 0 && f.push(...t[r++] ?? []), p.length > 0) {
          const h = {
            ...a,
            text: p
          };
          f.push(h);
        }
      }
      s.splice(o, 1, ...f), o += f.length - 1;
    }
  };
  return i(e), r;
}
function fi(e, t, n) {
  const r = [], i = [];
  for (const s of e.sentinels) {
    const o = [], a = [];
    for (const c of s) {
      if (n.has(c.getKey())) continue;
      const l = t.get(c.getKey());
      if (!l) return;
      o.push(c), a.push(l.node);
    }
    r.push(o), i.push(a);
  }
  return { live: r, serialized: i };
}
function WC(e, t) {
  const n = [];
  for (const r of e)
    Vp(r, t) || ((ye(r) || U(r)) && n.push(r.getMarker()), E(r) && n.push(...WC(r.getChildren(), t)));
  return n;
}
function HC(e) {
  const t = [];
  for (const n of e) {
    const r = Wp(n);
    (r === "para" || r === "char") && t.push(n.marker ?? "");
    const i = vr(n);
    i && t.push(...HC(i));
  }
  return t;
}
function Zo(e, t, n) {
  const r = WC(e, n), i = HC(t);
  return r.length === i.length && r.every((s, o) => s === i[o]);
}
function GC(e, t) {
  if (!e || e.input.run.length === 0) return;
  const n = N();
  let r, i;
  if (M(n)) {
    if (!n.isCollapsed()) return;
    r = n.focus.getNode(), i = n.focus.offset;
  } else if (t)
    r = X(t.key), i = t.offset;
  else
    return;
  if (!(!C(r) || !r.isAttached()) && !(e.nodeKey !== void 0 && r.getKey() !== e.nodeKey) && r.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: r, caretOffset: i, run: e.input.run };
}
function kl(e, t) {
  const n = t && JC(e, t);
  return n ? Qp(e, n.start, n.end) : e;
}
function JC(e, t) {
  const n = t.node.getKey(), r = e.spans.find(
    (o) => !o.isSentinel && o.key === n
  );
  if (!r || r.end - r.start !== t.node.getTextContentSize()) return;
  const i = r.start + t.caretOffset, s = i - t.run.length;
  if (!(s < r.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function YC(e, t, n, r, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = n, l = Gp(e, a, o);
  if (!l) return;
  const u = xl(l, s, n), f = kl(u, i), d = is(f, {
    getMarker: a
  });
  if (d.length === 0) return;
  if (Hr(d) !== u.sentinels.length) {
    c?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const p = or.serializeEditorState(
    { type: nr, version: tr, content: d },
    o
  ).root.children;
  if (ui(p) !== u.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const h = fi(u, t, r);
  if (!h) {
    c?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Sr(p, a) === Cr(e, a) && Zo(e, p, a)) {
    c?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Qo(p, h.serialized);
  const m = XC(e), y = ih(p);
  for (let k = 0; k < m.length && k < y.length; k++)
    m[k].sid !== void 0 && y[k].number === m[k].number && (y[k].sid = m[k].sid);
  return Zp(
    e,
    f,
    h.live,
    p,
    "paras",
    a,
    o
  );
}
function XC(e) {
  const t = [], n = (r) => {
    Ue(r) ? t.push({ number: r.getNumber(), sid: r.getSid() }) : E(r) && r.getChildren().forEach(n);
  };
  return e.forEach(n), t;
}
function ih(e) {
  const t = [];
  for (const n of e) {
    id(n) && t.push(n);
    const r = vr(n);
    r && t.push(...ih(r));
  }
  return t;
}
function O2(e, t, n, r, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = n, l = Jo(e, a, o);
  if (!l) return;
  const { contentNodes: u } = l;
  if (u.length === 0) return;
  const f = xl(l.out, s, n), d = kl(f, i), p = is(d, {
    getMarker: a,
    isNoteContext: !0
  });
  if (p.length === 0) return;
  if (Hr(p) !== f.sentinels.length) {
    c?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [h] = p;
  if (p.length !== 1 || typeof h != "object" || h.type !== "para") {
    c?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const g = h.content ?? [], m = gC(g), y = e.getCategory() !== m, k = YT(e, g);
  if (k) {
    const j = XT(
      e,
      k.before,
      k.after,
      m,
      o
    );
    if (!j || ui(j) !== f.sentinels.length) {
      c?.warn("[MarkerEdit] Settled note USJ skipped: the closed note lost its content");
      return;
    }
    const $ = fi(f, t, r);
    return $ ? (Qo(j, $.serialized), {
      rebuilt: void 0,
      contentNodes: u,
      category: m,
      categoryChanged: !1,
      closedAs: j
    }) : void 0;
  }
  const x = JT(e, g, m, o);
  if (x.failure !== void 0) {
    x.failure === "shape" ? c?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : x.failure === "caller" && c?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const A = x.children;
  if (ui(A) !== f.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const _ = fi(f, t, r);
  if (!_) {
    c?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Sr(A, a) === Cr(u, a) && Zo(u, A, a)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: m, categoryChanged: y };
    c?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Qo(A, _.serialized), {
    // Annotation marks, mirroring `$rebuildNoteContent`'s carry.
    rebuilt: Zp(
      u,
      d,
      _.live,
      A,
      "noteContent",
      a,
      o
    ),
    contentNodes: u,
    category: m,
    categoryChanged: y
  };
}
function Wm(e) {
  return e.$?.textType;
}
function $2(e, t) {
  const n = e, r = t;
  return n.type === "text" && r.type === "text" && n.format === r.format && n.style === r.style && n.mode === r.mode && n.detail === r.detail && Wm(e) === Wm(t);
}
function R2(e) {
  const t = [];
  for (const n of e) {
    const r = X(n);
    r?.isAttached() && Ze(r) && r.getTag() === "optbreak" && r.getChildrenSize() === 0 && t.push(r);
  }
  return t;
}
function I2(e) {
  if (!w(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!D(t)) return;
  const n = e.getTextContent();
  if (lr(e)) return;
  const r = Zs.exec(n);
  if (!r) return;
  const i = r[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function _c(e, t) {
  const n = e;
  n.marker = t, n.text = ul(t, n.markerSyntax, n.nested);
}
function QC(e, t) {
  const { glyph: n, note: r, oldMarker: i, newMarker: s } = e;
  if (!tt.isValidMarker(s)) return;
  const o = t.get(r.getKey());
  o && (o.node.marker = s);
  const a = t.get(n.getKey());
  a && _c(a.node, s);
  const c = r.getChildren().filter(w).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && _c(l.node, s);
}
function ZC(e, t, n, r) {
  const i = r.length - (n - t);
  return {
    text: e.text.slice(0, t) + r + e.text.slice(n),
    spans: e.spans.map((s) => s.end <= t ? s : s.start >= n ? { ...s, start: s.start + i, end: s.end + i } : {
      ...s,
      start: Math.min(s.start, t),
      end: s.end >= n ? s.end + i : t + r.length
    }),
    sentinels: e.sentinels
  };
}
function L2(e, t, n) {
  const r = e.spans.find((i) => i.key === t && !i.isSentinel);
  return r ? ZC(e, r.start, r.end, n) : e;
}
function ev(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), E(e) && e.getChildren().forEach((n) => ev(n, t)), t;
}
function q2(e, t) {
  const n = ev(t), r = e.spans.filter((d) => n.has(d.key));
  if (r.length === 0) return e;
  const i = Math.min(...r.map((d) => d.start)), s = Math.max(...r.map((d) => d.end)), o = e.spans.filter((d) => d.isSentinel && d.start < i).length, a = r.filter((d) => d.isSentinel).length, c = PT.test(e.text.slice(0, i)) ? " " : "", l = ZC(e, i, s, c + xt), u = i + c.length, f = [...e.sentinels];
  return f.splice(o, a, [t]), {
    text: l.text,
    spans: [
      ...l.spans.filter((d) => !n.has(d.key)),
      { key: t.getKey(), start: u, end: u + 1, isSentinel: !0 }
    ].sort((d, p) => d.start - p.start),
    sentinels: f
  };
}
function xl(e, t, n) {
  let r = e;
  for (const { char: i, glyph: s, closer: o, newMarker: a } of t?.values() ?? [])
    if (r.spans.some((c) => c.key === s.getKey())) {
      if (rC(i, a, n.getMarker)) {
        r = q2(r, i);
        continue;
      }
      o && (r = L2(
        r,
        o.getKey(),
        Wt(ul(a, "closing", o.getNested()))
      ));
    }
  return r;
}
function tv(e, t) {
  const { char: n, glyph: r, closer: i, newMarker: s } = e, o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && _c(a.node, s);
  const c = i && t.get(i.getKey());
  c && _c(c.node, s);
}
function D2(e, t, n, r, i, s, o) {
  const { viewOptions: a, getMarker: c, logger: l } = n, u = eh(e, c, a), { contentNodes: f } = u;
  if (f.length === 0 && s.length === 0 || !Jp(u.out, s, c, a)) return;
  const d = xl(u.out, o, n), p = yC(kl(d, i), c);
  if (Hr(p.content) !== d.sentinels.length) {
    l?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const h = QT(
    e,
    p.lineContent,
    p.followingBlocks,
    a
  );
  if (h.failure !== void 0) {
    h.failure === "shape" && l?.warn("[MarkerEdit] Settled book USJ skipped: unexpected serialized shape");
    return;
  }
  const { children: g, followingBlocks: m } = h;
  if (ui([...g, ...m]) !== d.sentinels.length) {
    l?.warn(
      "[MarkerEdit] Settled book USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const y = fi(d, t, r);
  if (!y) {
    l?.warn("[MarkerEdit] Settled book USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (m.length === s.length && Sr(m, c) === Cr(s, c) && Zo(s, m, c) && Sr(g, c) === Cr(f, c) && Zo(f, g, c)) {
    l?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const k = Qo(g, y.serialized);
  Qo(m, y.serialized, k);
  const x = XC([...f, ...s]), A = ih([...g, ...m]);
  for (let _ = 0; _ < x.length && _ < A.length; _++)
    x[_].sid !== void 0 && A[_].number === x[_].number && (A[_].sid = x[_].sid);
  return { rebuilt: g, contentNodes: f, followingBlocks: m };
}
function nv(e, t, n, r) {
  const { viewOptions: i, getMarker: s, logger: o } = t, a = Yo(e, s, i);
  if (!a) return;
  const c = xl(a, r, t), l = kl(c, n), u = is(l, {
    getMarker: s
  }), [f] = u;
  if (u.length === 0 || typeof f != "object" || f.type !== "chapter")
    return;
  if (Hr(u) !== 0) {
    o?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (f.sid = e.getSid());
  const d = or.serializeEditorState(
    { type: nr, version: tr, content: u },
    i
  ).root.children;
  if (d.length === 0) return;
  const p = [e, ...ss(e)];
  if (!(e.getNumber() !== (f.number ?? "") || e.getAltnumber() !== f.altnumber || e.getPubnumber() !== f.pubnumber) && Sr(d, s) === Cr(p, s) && Zo(p, d, s)) {
    o?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Zp(
    p,
    l,
    [],
    d,
    "chapter",
    s,
    i
  );
}
function rv(e, t, n) {
  const r = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), f = (h) => {
    D(h) ? s.set(h.getKey(), h) : $e(h) ? o.set(h.getKey(), h) : Ie(h) ? a.set(h.getKey(), h) : r.set(h.getKey(), [h]);
  };
  for (const h of e) {
    const g = X(h);
    if (!g?.isAttached()) continue;
    const m = IC(g, t.getMarker);
    if (m) {
      u.set(m.char.getKey(), m);
      continue;
    }
    const y = Xo(g);
    if (y) {
      if (f(y), w(g)) {
        const k = NC(g, t.getMarker);
        k && i.push(k);
      }
      if (D(y)) {
        const k = I2(g);
        k && l.set(y.getKey(), k);
      }
    }
  }
  const d = /* @__PURE__ */ new Set();
  for (const [h, g] of i)
    d.has(h.getKey()) || d.has(g.getKey()) || ([h, g].forEach((m) => {
      d.add(m.getKey()), r.delete(m.getKey());
    }), Ie(h) ? (a.set(h.getKey(), h), c.set(h.getKey(), [g])) : r.set(h.getKey(), [h, g]));
  if (n) {
    const h = Xo(n.node);
    h && !d.has(h.getKey()) && f(h);
  }
  const p = R2(e);
  return {
    paraScopes: r,
    noteScopes: s,
    chapterScopes: o,
    bookScopes: a,
    bookTrailingParas: c,
    noteGlyphRenames: l,
    charOpenerRenames: u,
    husks: p,
    huskKeys: new Set(p.map((h) => h.getKey()))
  };
}
function iv(e, t) {
  e.splice(t, 1);
  const n = e[t - 1], r = e[t], i = n && Fs(n), s = r && Fs(r);
  n && r && i !== void 0 && s !== void 0 && $2(n, r) && (n.text = i + s, e.splice(t, 1));
}
function ma(e, t, n, r, i, s) {
  const o = t.get(e.getKey()), a = o ? vr(o.node) : void 0;
  if (!o || !a) return !1;
  const c = O2(e, t, n, r, i, s);
  if (!c) return !1;
  if (c.closedAs) {
    const f = o.siblings.indexOf(o.node);
    if (f < 0) return !1;
    const [d, ...p] = c.closedAs, h = o.node;
    for (const g of Object.keys(h)) Reflect.deleteProperty(h, g);
    return Object.assign(h, d), o.siblings.splice(f + 1, 0, ...p), !0;
  }
  if (c.categoryChanged) {
    const f = o.node;
    c.category === void 0 ? delete f.category : f.category = c.category;
  }
  if (!c.rebuilt) return c.categoryChanged;
  const l = t.get(c.contentNodes[0].getKey());
  if (!l) return c.categoryChanged;
  const u = a.indexOf(l.node);
  return u < 0 ? c.categoryChanged : (a.splice(u, c.contentNodes.length, ...c.rebuilt), !0);
}
function sv(e, t, n, r, i, s, o) {
  const a = n.get(e.getKey()), c = a ? vr(a.node) : void 0;
  if (!a || !c) return !1;
  const l = D2(
    e,
    n,
    r,
    i,
    s,
    t,
    o
  );
  if (!l) return !1;
  const u = l.contentNodes.at(0), f = u ? n.get(u.getKey()) : void 0;
  if (u && !f) return !1;
  const d = f ? c.indexOf(f.node) : c.length, p = a.siblings.indexOf(a.node);
  return d < 0 || p < 0 ? !1 : (c.splice(d, l.contentNodes.length, ...l.rebuilt), a.siblings.splice(p + 1, t.length, ...l.followingBlocks), !0);
}
function K2(e, t, n, r, i) {
  const s = GC(r, i);
  if (t.size === 0 && !s) return;
  const {
    paraScopes: o,
    noteScopes: a,
    chapterScopes: c,
    bookScopes: l,
    bookTrailingParas: u,
    noteGlyphRenames: f,
    charOpenerRenames: d,
    husks: p,
    huskKeys: h
  } = rv(t, n, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && d.size === 0 && l.size === 0 && p.length === 0)
    return;
  const g = /* @__PURE__ */ new Map();
  no(Ee().getChildren(), e.root.children, g);
  for (const m of f.values()) QC(m, g);
  for (const m of d.values()) tv(m, g);
  for (const m of a.values())
    ma(m, g, n, h, s, d);
  for (const m of o.values()) {
    const y = g.get(m[0].getKey());
    if (!y) continue;
    const k = YC(
      m,
      g,
      n,
      h,
      s,
      d
    );
    if (!k) continue;
    const x = y.siblings.indexOf(y.node);
    x < 0 || y.siblings.splice(x, m.length, ...k);
  }
  for (const m of l.values())
    sv(
      m,
      u.get(m.getKey()) ?? [],
      g,
      n,
      h,
      s,
      d
    );
  for (const m of c.values()) {
    const y = g.get(m.getKey());
    if (!y) continue;
    const k = 1 + ss(m).length, x = nv(m, n, s, d);
    if (!x) continue;
    const A = y.siblings.indexOf(y.node);
    A < 0 || y.siblings.splice(A, k, ...x);
  }
  for (const m of p) {
    const y = g.get(m.getKey());
    if (!y) continue;
    const k = y.siblings.indexOf(y.node);
    k < 0 || iv(y.siblings, k);
  }
  return Qx(e, n.viewOptions);
}
function U2({
  viewOptions: e,
  logger: t
}) {
  const [n] = Ce(), r = rs(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return H(() => {
    if (r)
      return n.registerNodeTransform(
        It,
        (i) => B2(i, t)
      );
  }, [n, r, t]), null;
}
function B2(e, t) {
  e.getMarker() !== Bn && (e.isEmpty() || mn(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${Bn}" (key ${e.getKey()})`
  ), e.setMarker(Bn)));
}
function mo(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const F2 = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function fr(e) {
  return F2.exec(e)?.[1] ?? e;
}
function ar(e, t) {
  const n = e.jsonPath.slice(fr(e.jsonPath).length);
  return { ...e, jsonPath: `${Nt(t)}${n}` };
}
function sh(e, t) {
  return e.length === t.length && e.every((n, r) => n === t[r]);
}
function ov(e) {
  if (Df(e) || ws(e)) return !0;
  const t = av(e);
  return t === "marker" || t === "caller";
}
const z2 = /^\['([^']+)'\]$/;
function av(e) {
  if (No(e))
    return z2.exec(
      e.jsonPath.slice(fr(e.jsonPath).length)
    )?.[1];
}
function Nf(e, t) {
  return ov(e) && sh($n(fr(e.jsonPath)), jn(t));
}
function cv(e, t, n) {
  if (!e.isAttached()) return;
  const [r, i] = Nn(
    ar(t, jn(e)),
    n
  );
  if (!(!r || i === void 0))
    return { key: r.getKey(), offset: i, type: E(r) ? "element" : "text" };
}
function oh(e, t) {
  const n = pn(e, t, { addressDisplayBytes: !0 }), r = n && X(n.key);
  return n && n.offset > 0 && w(r) && r.getMarkerSyntax() !== "opening" ? n : void 0;
}
function lv(e, t) {
  const n = pn(e, t, { addressDisplayBytes: !0 });
  if (!n || n.offset !== 0) return;
  const r = e.spans.findIndex((o) => o.key === n.key), i = e.spans[r], s = r > 0 ? e.spans[r - 1] : void 0;
  if (!(!i || !Po(i) || !s || s.end !== i.start || !Po(s)))
    return sC(s);
}
function j2(e, t) {
  const n = oh(e, t);
  if (n) return n;
  const r = lv(e, t);
  if (r) return r;
  const i = pn(e, t);
  return i && V2(e, i);
}
function V2(e, t) {
  if (t.type !== "text") return t;
  const n = e.spans.findIndex((a) => a.key === t.key), r = e.spans[n], i = e.spans[n + 1];
  if (!r || !i || r.end === r.start || t.offset !== r.end - r.start)
    return t;
  const s = e.text[i.start] === "\\", o = On.test(e.text[r.end - 1]);
  return s || o ? { key: i.key, offset: 0, type: "text" } : t;
}
function uv(e) {
  const t = e.markerName.length + 2, n = t + e.valueLength;
  return { valueStart: t, closerStart: n, closerLength: e.markerName.length + 2 };
}
function W2(e, t, n) {
  const { keyName: r } = e, { valueStart: i, closerStart: s } = uv(e);
  return n === 0 ? { jsonPath: t, keyName: r } : n < i ? { jsonPath: t, keyName: r, keyOffset: n - 1 } : n < s ? {
    jsonPath: `${t}['${r}']`,
    propertyOffset: n - i
  } : { jsonPath: t, keyName: r, keyClosingMarkerOffset: n - s };
}
function H2(e, t) {
  const { valueStart: n, closerStart: r, closerLength: i } = uv(e), s = (o, a, c) => o >= 0 && o <= a ? c + o : void 0;
  if ($o(t))
    return s(t.keyOffset, e.markerName.length, 1);
  if (Oo(t))
    return s(t.keyClosingMarkerOffset, i, r);
  if (Nc(t)) return 0;
  if (No(t))
    return s(t.propertyOffset, e.valueLength, n);
}
function G2(e) {
  return $o(e) || Oo(e) || Nc(e) ? e.keyName : av(e);
}
function J2(e, t, n) {
  const r = j2(e.spelling, t), i = r && X(r.key);
  if (!r || !i) return;
  const s = e.foldedAttributes.find((o) => o.ownerKey === r.key);
  return s ? W2(
    s,
    Nt(jn(i)),
    r.offset
  ) : Ot(i, r.offset, n);
}
function Y2(e, t) {
  let n = Ee();
  for (let r = 0; r < t.length; r += 1) {
    if (!E(n)) return;
    const i = en(n, Bt(e.viewOptions))[t[r]];
    if (i?.type !== "element") return;
    n = i.node;
    const s = e.byFirstLiveKey.get(n.getKey());
    if (s?.kind === "note") return { plan: s, depth: r };
  }
}
function Mc(e, t) {
  const n = $n(fr(t.jsonPath));
  if (n.length === 0) {
    if (!Ir(t)) return { kind: "live", location: t };
    const o = e.settledToLiveTopIndex(t.offset);
    if (!o) {
      const a = en(
        Ee(),
        Bt(e.viewOptions)
      ).length;
      return { kind: "live", location: { ...t, offset: a } };
    }
    return o.plan && o.indexWithinScope > 0 ? Mc(e, { jsonPath: Nt([t.offset]) }) : { kind: "live", location: { ...t, offset: o.liveIndex } };
  }
  const r = e.settledToLiveTopIndex(n[0]);
  if (!r) return;
  if (r.plan)
    return {
      kind: "scope",
      plan: r.plan,
      scratchIndexes: [r.indexWithinScope, ...n.slice(1)],
      location: t
    };
  const i = [r.liveIndex, ...n.slice(1)], s = Y2(e, i);
  return s ? {
    kind: "scope",
    plan: s.plan,
    scratchIndexes: [0, ...n.slice(s.depth + 1)],
    location: t
  } : { kind: "live", location: ar(t, i) };
}
function fv(e, t) {
  const n = G2(t);
  if (n === void 0) return;
  const r = $n(fr(t.jsonPath));
  for (const i of e)
    for (const s of i.foldedAttributes) {
      const o = X(s.ownerKey);
      if (s.keyName !== n || !o || !sh(jn(o), r))
        continue;
      const a = H2(s, t), c = i.spelling.spans.find((u) => u.key === s.ownerKey), l = a !== void 0 && c ? ni(i.spelling, s.ownerKey, a) : void 0;
      return a === void 0 || !c || !l ? { resolution: void 0 } : {
        resolution: {
          kind: "literal",
          run: i,
          anchor: l,
          atWordByte: ja(i.spelling, c.start + a)
        }
      };
    }
}
function X2(e, t, n, r) {
  const i = fv(t, n);
  if (i) return i.resolution;
  const [s, o] = Nn(n, r.viewOptions);
  if (!s || o === void 0) return;
  const a = Kp(e, s), c = a && t.find((d) => d.sentinelIndex === a.sentinelIndex);
  if (c) {
    const d = Ao(c.spelling, s, o);
    return d && {
      kind: "literal",
      run: c,
      anchor: d.anchor,
      atWordByte: ja(c.spelling, d.position)
    };
  }
  if (!a) {
    const d = Ao(e, s, o);
    return d ? {
      kind: "anchor",
      anchor: d.anchor,
      atWordByte: ja(e, d.position)
    } : void 0;
  }
  const l = Up(a.member, s);
  if (!l) return;
  const u = D(a.member) ? Jo(a.member, r.getMarker, r.viewOptions)?.out : void 0, f = u && Ao(u, s, o);
  return {
    kind: "preserved",
    sentinelIndex: a.sentinelIndex,
    memberIndex: a.memberIndex,
    path: l,
    offset: o,
    type: E(s) ? "element" : "text",
    noteAnchor: f && {
      anchor: f.anchor,
      atWordByte: ja(u, f.position)
    },
    isNoteOwnBytes: D(a.member) && Nf(n, a.member)
  };
}
function Q2(e, t, n) {
  const r = fv(e, t);
  if (r) return r.resolution !== void 0;
  const [i, s] = Nn(t, n);
  return i !== void 0 && s !== void 0;
}
function ja(e, t) {
  const n = e.text[t];
  return n !== void 0 && !On.test(n);
}
function dv(e, t) {
  if (t.type !== "text") return t;
  const n = Xp(e, t.key, t.offset);
  if (!n) return t;
  const r = n.end - n.start;
  let i = t.offset;
  for (; i < r && On.test(e.text[n.start + i]); ) i += 1;
  return i === t.offset ? t : { ...t, offset: i };
}
function ea(e, t) {
  const n = e.liveCut;
  return !t || !n || t.type !== "text" || t.key !== n.key ? t : t.offset >= n.nodeOffset ? { ...t, offset: t.offset + n.length } : t;
}
function Z2(e, t) {
  for (let n = 0; n < e.length; n += 1) {
    const r = e[n];
    for (let i = 0; i < r.length; i += 1) {
      const s = r[i];
      if (s?.sentinelIndex === t.sentinelIndex && s.memberIndex === t.memberIndex)
        return { sentinelIndex: n, memberIndex: i };
    }
  }
}
function ah(e) {
  const { liveFragment: t, scratchFragment: n, sentinelMap: r, alignment: i } = e;
  return t && n && r && i ? { liveFragment: t, scratchFragment: n, sentinelMap: r, alignment: i } : void 0;
}
function pv(e) {
  const t = e.liveNodes[0];
  if (!t.isAttached()) return;
  if (e.kind !== "note" && E(t))
    return { key: t.getKey(), offset: 0, type: "element" };
  const n = t.getParent();
  return n ? { key: n.getKey(), offset: t.getIndexWithinParent(), type: "element" } : void 0;
}
function ri(e, t) {
  return t?.warn(
    `[positions] A settled location in a pending ${e.kind} scope could not be lined up with its live bytes; it resolves to the front of the scope.`
  ), pv(e);
}
function hu(e, t) {
  return t?.error("settled-position basis out of date — rebuilt"), pv(e);
}
function Hm(e) {
  const t = [];
  let n = 0;
  for (const r of e.spans) {
    r.isSentinel && t.push(r.end > r.start ? n : void 0);
    for (let i = r.start; i < r.end; i += 1)
      On.test(e.text[i]) || (n += 1);
  }
  return t;
}
function eL(e, t, n, r) {
  const { liveFragment: i, scratchFragment: s, alignment: o } = t, a = Hm(s)[n];
  if (a === void 0) return ri(e, r);
  const c = Hm(i).findIndex(
    (d) => d !== void 0 && Lp(o, d, "live") === a
  ), l = c < 0 ? void 0 : i.sentinels[c]?.[0], u = l?.isAttached() ? l.getParent() : void 0;
  if (l && u)
    return { key: u.getKey(), offset: l.getIndexWithinParent(), type: "element" };
  const f = pn(i, {
    nonWsBefore: eo(o, a, "settled"),
    wsRun: 0
  });
  return f ? ea(e, f) : ri(e, r);
}
function hv(e, t, n, r, i, s) {
  const o = ah(e);
  if (!o) return ri(e, s);
  const a = !Ir(r), c = ga(o.alignment, t, "toLive"), l = (f) => {
    const d = oh(o.liveFragment, f);
    if (d) return ea(e, d);
    const p = pn(
      o.liveFragment,
      uh(o.liveFragment, f, a),
      { addressDisplayBytes: a }
    );
    return ea(
      e,
      p && n ? dv(o.liveFragment, p) : p
    );
  }, u = qR(o.alignment, t.nonWsBefore);
  if (u < c.nonWsBefore) {
    const f = l({ ...c, nonWsBefore: u }), d = f && X(f.key);
    if (f && d && yv(d, f.offset, i)) return f;
  }
  return l(c) ?? ri(e, s);
}
function tL(e, t, n, r, i, s) {
  const o = Z2(n.sentinelMap, r);
  if (!o) return eL(t, n, r.sentinelIndex, s);
  const a = n.liveFragment.sentinels[o.sentinelIndex]?.[o.memberIndex];
  if (!a?.isAttached()) return hu(t, s);
  const c = e.byFirstLiveKey.get(a.getKey());
  if (c?.kind === "note" && r.isNoteOwnBytes)
    return cv(a, i, e.viewOptions);
  if (c?.kind === "note")
    return r.noteAnchor ? hv(
      c,
      r.noteAnchor.anchor,
      r.noteAnchor.atWordByte,
      i,
      e.viewOptions,
      s
    ) : ri(c, s);
  let l = a;
  for (const u of r.path) {
    if (!E(l)) return hu(t, s);
    const f = l.getChildAtIndex(u);
    if (!f) return hu(t, s);
    l = f;
  }
  return { key: l.getKey(), offset: r.offset, type: r.type };
}
function nL(e, t, n) {
  if (!e.scratch.getEditorState().read(() => {
    const [o, a] = Nn(t, n);
    return Mn(o) && a !== void 0 && a >= o.getChildrenSize();
  })) return;
  const i = e.liveNodes[e.liveNodes.length - 1], s = i.getParent();
  if (Mn(s))
    return { key: s.getKey(), offset: i.getIndexWithinParent() + 1, type: "element" };
}
function rL(e, t, n) {
  const r = sL(e, t, n);
  if (!r) return r;
  const i = ar(n.location, n.scratchIndexes);
  return n.plan.scratch.getEditorState().read(() => {
    const [o, a] = Nn(i, t.viewOptions);
    return C(o) && a !== void 0 && a > 0 && a === o.getTextContentSize();
  }) ? iL(t, r, n.location) : r;
}
function iL(e, t, n) {
  const r = X(t.key);
  if (t.type !== "text" || !C(r)) return t;
  const i = JSON.stringify(n);
  let s = t, o = { node: r, offset: t.offset };
  for (const a of mv(r, t.offset)) {
    if (a.node.is(o.node) && a.offset === o.offset) continue;
    if (a.node.is(o.node)) {
      const l = a.node.getTextContent()[a.offset];
      if (l === void 0 || !On.test(l)) break;
    } else if (o.offset !== 0) break;
    o = a;
    const c = $f(e, a.node, a.offset);
    JSON.stringify(c) === i && (s = { key: a.node.getKey(), offset: a.offset, type: "text" });
  }
  return s;
}
function sL(e, t, n) {
  const { plan: r } = n, { logger: i, viewOptions: s } = e.tier2;
  if (r.kind === "note" && n.scratchIndexes.length === 1 && ov(n.location))
    return cv(r.liveNodes[0], n.location, t.viewOptions);
  const o = ar(n.location, n.scratchIndexes);
  if (!r.scratch.getEditorState().read(() => Q2(r.settledOnlyRuns, o, s))) return;
  const c = nL(r, o, s);
  if (c) return c;
  const l = ah(r);
  if (!l) return ri(r, i);
  const u = r.scratch.getEditorState().read(
    () => X2(
      l.scratchFragment,
      r.settledOnlyRuns,
      o,
      e.tier2
    )
  );
  if (!u) return ri(r, i);
  if (u.kind === "preserved")
    return tL(t, r, l, u, n.location, i);
  if (u.kind === "literal") {
    const { run: f, anchor: d } = u, p = WT(f, d.nonWsBefore, "toLiteral") ?? eo(f.inner, d.nonWsBefore, "settled"), h = !Ir(n.location), g = uh(
      l.liveFragment,
      {
        nonWsBefore: f.liveBefore + p,
        wsRun: d.nonWsBefore === 0 ? f.liveWsBefore + d.wsRun : d.wsRun
      },
      h
    ), m = pn(l.liveFragment, g, {
      addressDisplayBytes: !0
    }), y = m && X(m.key);
    if (m && w(y) && y.getMarkerSyntax() !== "opening")
      return ea(r, m);
    const k = pn(l.liveFragment, g, {
      addressDisplayBytes: h
    });
    return k ? ea(
      r,
      u.atWordByte ? dv(l.liveFragment, k) : k
    ) : ri(r, i);
  }
  return hv(
    r,
    u.anchor,
    u.atWordByte,
    n.location,
    s,
    i
  );
}
function Gm(e, t, n) {
  const r = Mc(t, n);
  if (!r) return;
  if (r.kind === "live") {
    const o = oL(t, r.location);
    if (o) return o;
    const [a, c] = Nn(r.location, t.viewOptions);
    return a && c !== void 0 ? r.location : void 0;
  }
  const i = rL(e, t, r), s = i && X(i.key);
  return s ? cL(s, i.offset, t.viewOptions, r.plan.liveNodes) : void 0;
}
function Jm(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; ) n += 1;
  return n;
}
function gv(e, t, n) {
  const r = Jm(e, t), i = Math.min(
    Jm([...e].reverse().join(""), [...t].reverse().join("")),
    e.length - r,
    t.length - r
  );
  return n <= r ? n : n >= e.length - i ? n - e.length + t.length : r;
}
function oL(e, t) {
  if (!ws(t)) return;
  const n = $n(fr(t.jsonPath));
  for (const [r, i] of e.renamedClosers) {
    const s = X(r)?.getParent();
    if (!(!s || !sh(jn(s), n)))
      return {
        ...t,
        closingMarkerOffset: gv(
          i.settled,
          i.live,
          Math.min(t.closingMarkerOffset, i.settled.length)
        )
      };
  }
}
function Ym(e) {
  for (let t = e; t; t = t.getParent()) {
    let n = t.getPreviousSibling();
    if (n) {
      for (let r = E(n) ? n.getLastChild() : null; r; )
        n = r, r = E(n) ? n.getLastChild() : null;
      return n;
    }
  }
  return null;
}
function aL(e, t) {
  for (let n = e; n; n = n.getParent())
    if (t.some((r) => r.is(n))) return !0;
  return !1;
}
function* mv(e, t, n) {
  let r = e;
  if (C(e)) for (let i = t; i >= 0; i -= 1) yield { node: e, offset: i };
  else if (E(e)) {
    const i = e.getChildAtIndex(Math.min(t, e.getChildrenSize()));
    if (i) r = i;
    else {
      const s = e.getLastDescendant();
      if (C(s))
        for (let o = s.getTextContentSize(); o >= 0; o -= 1) yield { node: s, offset: o };
      r = s ?? e;
    }
  }
  for (let i = Ym(r); i; i = Ym(i))
    if (C(i)) {
      if (n && !aL(i, n)) return;
      for (let s = i.getTextContentSize(); s >= 0; s -= 1) yield { node: i, offset: s };
    }
}
function cL(e, t, n, r) {
  const i = Ot(e, t, n), s = ta([e, t]);
  if (!s || ta(Nn(i, n))?.is(s)) return i;
  const o = (l, u) => yv(l, u, n), a = ch(e, t), c = a && o(a.node, a.offset);
  if (c) return c;
  for (const l of mv(e, t, r)) {
    if (l.node.is(e) && l.offset === t) continue;
    const u = o(l.node, l.offset);
    if (u) return u;
  }
  return i;
}
function yv(e, t, n) {
  const r = Ot(e, t, n), i = ta(Nn(r, n));
  if (!i) return;
  if (i.is(Qt(e.getKey(), t, "text"))) return r;
  const s = ch(e, t);
  return s && i.is(Qt(s.node.getKey(), s.offset, "text")) ? r : void 0;
}
function ch(e, t) {
  if (!C(e)) return;
  const n = t === e.getTextContentSize();
  if (!n && t !== 0) return;
  let r = e, i = n ? r.getNextSibling() : r.getPreviousSibling();
  for (; !i; ) {
    const s = r.getParent();
    if (!s || Mn(s) || Mn(s.getParent())) return;
    r = s, i = n ? r.getNextSibling() : r.getPreviousSibling();
  }
  for (; E(i); ) {
    const s = n ? i.getFirstChild() : i.getLastChild();
    if (!s) return;
    i = s;
  }
  if (C(i))
    return { node: i, offset: n ? 0 : i.getTextContentSize() };
}
function ta([e, t]) {
  if (!e || t === void 0) return;
  if (C(e)) return Qt(e.getKey(), t, "text");
  if (E(e)) return Qt(e.getKey(), t, "element");
  const n = e.getParent();
  if (!n) return;
  const r = e.getIndexWithinParent() + (t > 0 ? 1 : 0);
  return Qt(n.getKey(), r, "element");
}
function bv(e, t, n) {
  const r = Nn(e, n), i = Nn(t, n), [s, o] = r, [a, c] = i;
  if (s && a && s.is(a))
    return o !== void 0 && c !== void 0 && o > c;
  const l = ta(r), u = ta(i);
  return !!l && !!u && u.isBefore(l);
}
function kv(e, t, n) {
  const r = Mc(e, t), i = Mc(e, n);
  if (!(r?.kind !== "scope" || i?.kind !== "scope" || r.plan !== i.plan))
    return r.plan.scratch.getEditorState().read(
      () => bv(
        ar(r.location, r.scratchIndexes),
        ar(i.location, i.scratchIndexes),
        e.viewOptions
      )
    );
}
function lL(e, t, n) {
  if (t.byFirstLiveKey.size === 0 && t.renamedClosers.size === 0) return n;
  const r = Gm(e, t, n.start);
  if (!r) return;
  if (!n.end) return { ...n, start: r };
  const i = Gm(e, t, n.end);
  if (!i) return;
  const s = kv(t, n.start, n.end);
  return s !== void 0 && bv(r, i, t.viewOptions) !== s ? { ...n, start: i, end: r } : { ...n, start: r, end: i };
}
function Of(e, t) {
  const n = $n(fr(t.jsonPath));
  return n.length === 0 ? t : ar(t, [
    e.liveToSettledTopIndex(n[0]),
    ...n.slice(1)
  ]);
}
function xv(e, t) {
  const n = t.liveNodes[0].getParent(), r = n ? e.planContaining(n) : void 0;
  return r === t ? void 0 : r;
}
function Ec(e, t) {
  const n = t.liveNodes[0], r = xv(e, t);
  if (r) {
    const s = Tl(e, r, n, 0);
    return typeof s == "object" ? $n(fr(s.jsonPath)) : void 0;
  }
  const i = uL(n, e.viewOptions);
  return i.length === 0 ? i : [e.liveToSettledTopIndex(i[0]), ...i.slice(1)];
}
function uL(e, t) {
  return !_t(e) || !Mn(e.getParent()) ? jn(e) : [Cs(e, 0, Bt(t)).index];
}
function lh(e, t, n) {
  if (!t) return;
  const [r, ...i] = n;
  if (r === void 0) return;
  if (e.kind === "note") return r === 0 ? [...t, ...i] : void 0;
  const s = t[0];
  return s === void 0 ? void 0 : [s + r, ...i];
}
function fL(e, t, n) {
  const r = e.liveCut;
  return !r || t.getKey() !== r.key || n <= r.nodeOffset ? n : Math.max(r.nodeOffset, n - r.length);
}
function dL(e, t, n, r, i) {
  let s = e.sentinels[t.sentinelIndex]?.[t.memberIndex];
  if (s) {
    for (const o of n) {
      if (!E(s)) return;
      const a = s.getChildAtIndex(o);
      if (!a) return;
      s = a;
    }
    return Ot(s, r, i);
  }
}
function pL(e, t) {
  const n = HT(e, t);
  if (n)
    return {
      run: n,
      within: { nonWsBefore: 0, wsRun: t.wsRun - n.liveWsBefore }
    };
  const r = Dp(e, t);
  if (r)
    return {
      run: r.run,
      within: r.within ?? {
        nonWsBefore: eo(r.run.inner, r.count, "live"),
        wsRun: t.wsRun
      }
    };
}
function hL(e, t) {
  if (e.isSentinel) return !1;
  if (t) return !0;
  const n = X(e.key);
  return !(w(n) && n.getMarkerSyntax() !== "opening");
}
function uh(e, t, n) {
  let r = 0, i = 0;
  for (const s of e.spans)
    for (let o = s.start; o < s.end; o += 1) {
      const a = On.test(e.text[o]);
      if (r < t.nonWsBefore)
        a || (r += 1);
      else if (a) i += 1;
      else return i >= t.wsRun || hL(s, n) ? t : { ...t, wsRun: i };
    }
  return t;
}
function Tv(e, t, n, r, i, s) {
  const { liveFragment: o, scratchFragment: a, sentinelMap: c, alignment: l } = t, u = Kp(o, n);
  if (u) {
    const g = o.sentinels[u.sentinelIndex];
    if (!c[u.sentinelIndex]?.some((x) => x !== void 0)) {
      const x = g[0].getParent();
      if (x)
        return Tv(
          e,
          t,
          x,
          g[0].getIndexWithinParent(),
          i,
          s
        );
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const m = Up(u.member, n);
    if (!m) {
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const y = c[u.sentinelIndex]?.[u.memberIndex];
    if (!y) return;
    const k = e.scratch.getEditorState().read(
      () => dL(a, y, m, r, i)
    );
    if (k) return k;
    s?.error("settled-position basis out of date — rebuilt");
    return;
  }
  const f = Ao(o, n, fL(e, n, r));
  if (!f) return;
  const d = pL(e.settledOnlyRuns, f.anchor);
  if (d)
    return e.scratch.getEditorState().read(() => J2(d.run, d.within, i));
  const p = gL(
    l,
    o,
    a,
    f.anchor,
    ga(l, f.anchor, "toSettled")
  ), h = !Ir(
    Ot(n, r, i)
  );
  return e.scratch.getEditorState().read(() => {
    const g = oh(a, p), m = g && X(g.key);
    if (m) return Ot(m, g.offset, i);
    const y = lv(a, p), k = y && X(y.key);
    if (k)
      return Ot(k, y.offset, i);
    const x = uh(a, p, h), A = pn(a, x, { addressDisplayBytes: h });
    return A && mL(A, i);
  });
}
function Xm(e, t) {
  let n = 0, r = 0;
  for (const i of e) {
    if (On.test(i)) {
      r += 1;
      continue;
    }
    if (n === t) return r;
    n += 1, r = 0;
  }
  return r;
}
function gL(e, t, n, r, i) {
  if (!e.segments.some(
    (a) => !a.same && a.liveStart === a.liveEnd && a.settledEnd > a.settledStart && a.settledEnd === i.nonWsBefore
  )) return i;
  const o = Xm(t.text, r.nonWsBefore) - r.wsRun;
  return {
    ...i,
    wsRun: Math.max(0, Xm(n.text, i.nonWsBefore) - o)
  };
}
function mL(e, t) {
  const n = X(e.key);
  if (!n) return;
  const r = E(n) && e.offset >= n.getChildrenSize() && (Mn(n) || n.getLastDescendant()?.is(Ee().getLastDescendant())) && n.getLastDescendant();
  return r ? Ot(
    r,
    E(r) ? r.getChildrenSize() : r.getTextContentSize(),
    t
  ) : Ot(n, e.offset, t);
}
function Tl(e, t, n, r) {
  if (t.kind === "note") {
    const a = t.liveNodes[0], c = D(a) && St(a)?.is(n) && r === n.getTextContentSize() ? ch(n, r) : void 0;
    if (c && !Nf(
      Ot(c.node, c.offset, e.viewOptions),
      a
    )) {
      const u = Tl(e, t, c.node, c.offset);
      if (typeof u == "object") return u;
    }
    const l = Ot(n, r, e.viewOptions);
    if (Nf(l, a)) {
      const u = Ec(e, t);
      return u && ar(l, u);
    }
  }
  const i = ah(t);
  if (!i) return;
  const s = Tv(
    t,
    i,
    n,
    r,
    e.viewOptions,
    e.logger
  );
  if (typeof s != "object") return s;
  const o = lh(
    t,
    Ec(e, t),
    $n(fr(s.jsonPath))
  );
  return o && ar(s, o);
}
function yL(e) {
  const t = [], n = (r) => {
    if (E(r))
      r.getChildren().forEach((i, s) => {
        t.push({ node: r, offset: s }), n(i);
      }), t.push({ node: r, offset: r.getChildrenSize() });
    else if (C(r))
      for (let i = 0; i <= r.getTextContentSize(); i += 1)
        t.push({ node: r, offset: i });
  };
  return e.liveNodes.forEach(n), t;
}
function bL(e, t) {
  const n = t.scratch.getEditorState().read(() => Ot(Ee(), 0, e.viewOptions)), r = lh(
    t,
    Ec(e, t),
    $n(fr(n.jsonPath))
  );
  if (r) return ar(n, r);
  const i = t.liveNodes[0], s = i.getParent();
  if (!s) return;
  const o = xv(e, t);
  return o ? vv(e, o, s, i.getIndexWithinParent()) : Of(
    e,
    Ot(s, i.getIndexWithinParent(), e.viewOptions)
  );
}
function Cv(e, t, n) {
  const r = yL(t), i = n ? r.findIndex((s) => s.node.is(n.node) && s.offset === n.offset) : -1;
  for (let s = (i < 0 ? r.length : i) - 1; s >= 0; s -= 1) {
    const { node: o, offset: a } = r[s], c = Tl(e, t, o, a);
    if (typeof c == "object") return c;
  }
  return bL(e, t);
}
function vv(e, t, n, r) {
  return Tl(e, t, n, r) ?? Cv(e, t, { node: n, offset: r });
}
function $f(e, t, n) {
  const r = e.planContaining(t);
  if (r) return vv(e, r, t, n);
  const i = e.renamedClosers.get(t.getKey());
  if (i) {
    const a = Ot(t, n, e.viewOptions);
    return Of(
      e,
      ws(a) ? {
        ...a,
        closingMarkerOffset: gv(
          i.live,
          i.settled,
          a.closingMarkerOffset
        )
      } : a
    );
  }
  const s = Mn(t) && n >= t.getChildrenSize() && t.getLastChild(), o = s ? e.planContaining(s) : void 0;
  return o ? kL(e, o) ?? Cv(e, o, void 0) : Of(e, Ot(t, n, e.viewOptions));
}
function kL(e, t) {
  const n = t.scratch.getEditorState().read(() => {
    const i = Ee();
    return Ot(i, i.getChildrenSize(), e.viewOptions);
  }), r = lh(
    t,
    Ec(e, t),
    $n(fr(n.jsonPath))
  );
  return r && ar(n, r);
}
function xL(e) {
  const t = el(e.viewOptions);
  if (!t || e.byFirstLiveKey.size === 0 && e.renamedClosers.size === 0)
    return t;
  const n = N();
  if (!M(n)) return;
  const r = n.isBackward(), i = r ? n.focus : n.anchor, s = $f(e, i.getNode(), i.offset);
  if (!s) return;
  if (n.isCollapsed()) return { start: s };
  const o = r ? n.anchor : n.focus, a = $f(e, o.getNode(), o.offset);
  if (a)
    return kv(e, s, a) === !0 ? { start: a, end: s } : { start: s, end: a };
}
function TL(e) {
  return e.getKey();
}
function Sv(e, t, n) {
  if (e === "para") {
    const [i] = t;
    return t.length === 1 && _t(i) ? QR(i, n.getMarker, n.viewOptions) : t.every(ye) ? Gp(t, n.getMarker, n.viewOptions) : Nm(t, n.getMarker, n.viewOptions);
  }
  if (e === "chapter") {
    const i = t.find($e);
    if (!i) return;
    const s = new Set([i, ...ss(i)].map(TL));
    return t.every((o) => s.has(o.getKey())) ? Yo(i, n.getMarker, n.viewOptions) : Nm(t, n.getMarker, n.viewOptions);
  }
  const r = t.find(D);
  return r && Jo(r, n.getMarker, n.viewOptions)?.out;
}
function CL(e, t) {
  const n = Hf({
    nodes: [...e],
    onError: (r) => {
      throw r;
    }
  });
  try {
    n.update(
      () => {
        const r = Ee();
        t.forEach((i) => r.append(Lr(i)));
      },
      { discrete: !0 }
    );
  } catch {
    return;
  }
  return n;
}
const Qm = "\0";
function _v(e, t = []) {
  for (const n of e)
    t.push(n.getKey()), E(n) && _v(n.getChildren(), t);
  return t;
}
function vL(e, t, n, r, i) {
  const s = `${r.viewOptions.markerMode}/${r.viewOptions.noteMode}`, o = t.map((l) => l.getTextContent()).join(Qm), a = _v(t).join(" "), c = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, n, o, a, c].join(Qm);
}
function Cl(e, t = []) {
  for (const n of e)
    D(n) && t.push(n), E(n) && Cl(n.getChildren(), t);
  return t;
}
function ya(e, t, n, r, i, s, o) {
  const a = CL(o.nodes, i);
  if (!a) return;
  const { settledCount: c, scratchFragment: l, settledSide: u } = a.getEditorState().read(() => {
    const h = Sv(e, Ee().getChildren(), o.tier2);
    return {
      settledCount: en(
        Ee(),
        Bt(o.tier2.viewOptions)
      ).length,
      scratchFragment: h,
      settledSide: h && qp(h)
    };
  }), f = { kind: e, liveNodes: t, liveCut: r, scratch: a, scratchFragment: l, settledCount: c };
  if ((n?.sentinels.length ?? 0) === 0 && (u?.runs.length ?? 0) === 0) {
    const h = n && u && Cc(Tc(n, []), u).alignment;
    return { ...f, liveFragment: n, sentinelMap: [], settledOnlyRuns: [], alignment: h };
  }
  const d = n && s && uC(n, s.live), p = d && u && Cc(Tc(d, s.live), u);
  return p ? { ...f, liveFragment: d, ...p } : {
    ...f,
    liveFragment: n,
    sentinelMap: void 0,
    settledOnlyRuns: [],
    alignment: void 0
  };
}
function vl(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const n = JC(e, t);
  return n ? {
    liveFragment: Qp(e, n.start, n.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function Sl(e, t) {
  for (const n of e.noteGlyphRenames.values())
    QC(n, t);
  for (const n of e.charOpenerRenames.values())
    tv(n, t);
}
function SL(e, t, n, r, i) {
  const { liveFragment: s, liveCut: o } = vl(t, i), a = to(e), c = /* @__PURE__ */ new Map();
  if (no([e], [a], c), Sl(n, c), !ma(
    e,
    c,
    r.tier2,
    n.huskKeys,
    i,
    n.charOpenerRenames
  ))
    return;
  const l = t && fi(t, c, n.huskKeys);
  return ya("note", [e], s, o, [a], l, r);
}
function _L(e, t, n, r, i) {
  const { liveFragment: s, liveCut: o } = vl(t, i), a = e.map(to), c = /* @__PURE__ */ new Map();
  no(e, a, c), Sl(n, c), Cl(e).filter((f) => n.noteScopes.has(f.getKey())).forEach(
    (f) => ma(
      f,
      c,
      r.tier2,
      n.huskKeys,
      i,
      n.charOpenerRenames
    )
  );
  const l = YC(
    e,
    c,
    r.tier2,
    n.huskKeys,
    i,
    n.charOpenerRenames
  );
  if (!l) return;
  const u = t && fi(t, c, n.huskKeys);
  return ya("para", e, s, o, l, u, r);
}
function ML(e, t, n, r, i, s) {
  const { liveFragment: o, liveCut: a } = vl(n, s), c = [e, ...t], l = c.map(to), u = /* @__PURE__ */ new Map();
  if (no(c, l, u), Sl(r, u), Cl(c).filter((d) => r.noteScopes.has(d.getKey())).forEach(
    (d) => ma(
      d,
      u,
      i.tier2,
      r.huskKeys,
      s,
      r.charOpenerRenames
    )
  ), !sv(
    e,
    t,
    u,
    i.tier2,
    r.huskKeys,
    s,
    r.charOpenerRenames
  ))
    return;
  const f = n && fi(n, u, r.huskKeys);
  return ya("para", c, o, a, l, f, i);
}
function EL(e, t, n, r, i) {
  const { liveFragment: s, liveCut: o } = vl(t, i), a = nv(e, r.tier2, i, n.charOpenerRenames);
  if (!a) return;
  const c = [e, ...ss(e)];
  return ya("chapter", c, s, o, a, void 0, r);
}
function AL(e, t, n, r, i, s) {
  const o = to(e), a = /* @__PURE__ */ new Map();
  no([e], [o], a), Sl(r, a), Cl([e]).filter((u) => r.noteScopes.has(u.getKey())).forEach(
    (u) => ma(
      u,
      a,
      i.tier2,
      r.huskKeys,
      s,
      r.charOpenerRenames
    )
  );
  const c = /* @__PURE__ */ new Set();
  for (const u of n) {
    const f = a.get(u.getKey());
    if (!f) continue;
    const d = f.siblings.indexOf(f.node);
    d < 0 || (iv(f.siblings, d), c.add(u.getKey()));
  }
  if (c.size === 0) return;
  const l = t && fi(t, a, c);
  return ya("para", [e], t, void 0, [o], l, i);
}
function PL(e, t) {
  for (let n = e; n; n = n.getParent())
    if (t.has(n.getKey())) return !0;
  return !1;
}
function Zm(e, t, n = /* @__PURE__ */ new Map()) {
  return {
    renamedClosers: n,
    byFirstLiveKey: /* @__PURE__ */ new Map(),
    liveToSettledTopIndex: (r) => r,
    settledToLiveTopIndex: (r) => ({ liveIndex: r, indexWithinScope: 0 }),
    planContaining: () => {
    },
    viewOptions: e,
    logger: t
  };
}
function wL(e) {
  return e.liveNodes.every((n) => n.isAttached()) ? (e.liveFragment?.spans ?? []).every((n) => X(n.key) !== null) : !1;
}
function ey(e) {
  return (e.type === "element" ? e.node : e.segments[0]?.node)?.getTopLevelElement() ?? null;
}
function NL(e, t) {
  const n = en(Ee(), t), r = [], i = [];
  let s = 0;
  for (let o = 0; o < n.length; ) {
    const a = ey(n[o]), c = a && e.get(a.getKey());
    if (!c) {
      r[o] = s, i.push({ liveIndex: o, indexWithinScope: 0 }), s += 1, o += 1;
      continue;
    }
    const l = new Set(c.liveNodes.map((f) => f.getKey()));
    let u = 0;
    for (; o + u < n.length; ) {
      const f = ey(n[o + u]);
      if (!f || !l.has(f.getKey())) break;
      u += 1;
    }
    for (let f = 0; f < u; f += 1)
      r[o + f] = s;
    for (let f = 0; f < c.settledCount; f += 1)
      i.push({ liveIndex: o, plan: c, indexWithinScope: f });
    s += c.settledCount, o += u;
  }
  return { liveToSettled: r, settledToLive: i };
}
function ty(e) {
  const t = GC(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), Zm(e.tier2.viewOptions, e.tier2.logger);
  e.cache.getMarker !== e.tier2.getMarker && (e.cache.entries.clear(), e.cache.getMarker = e.tier2.getMarker);
  const n = rv(e.pendedKeys, e.tier2, t), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (p, h) => {
    if (!p) return;
    const g = p.liveNodes[0].getKey();
    r.set(g, p), p.liveNodes.forEach((m) => i.set(m.getKey(), p)), h && p.liveNodes.forEach((m) => s.set(m.getKey(), p));
  }, c = (p, h, g, m) => {
    o.add(p);
    const y = Sv(h, g, e.tier2), k = vL(
      h,
      g,
      y?.text ?? "",
      e.tier2,
      t
    ), x = e.cache.entries.get(p);
    if (x?.signature === k && wL(x.plan)) return x.plan;
    const A = m(y);
    return A ? e.cache.entries.set(p, { signature: k, plan: A }) : e.cache.entries.delete(p), A;
  };
  for (const p of n.noteScopes.values())
    a(
      c(
        p.getKey(),
        "note",
        [p],
        (h) => SL(p, h, n, e, t)
      ),
      !1
    );
  for (const p of n.paraScopes.values())
    a(
      c(
        p[0].getKey(),
        "para",
        p,
        (h) => _L(p, h, n, e, t)
      ),
      !0
    );
  for (const p of n.bookScopes.values()) {
    const h = n.bookTrailingParas.get(p.getKey()) ?? [];
    a(
      c(
        p.getKey(),
        "para",
        [p, ...h],
        (g) => ML(p, h, g, n, e, t)
      ),
      !0
    );
  }
  for (const p of n.chapterScopes.values())
    a(
      c(
        p.getKey(),
        "chapter",
        [p, ...ss(p)],
        (h) => EL(p, h, n, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const p of n.husks) {
    const h = p.getTopLevelElement();
    if (!(ye(h) || _t(h)) || PL(p, i)) continue;
    const g = l.get(h.getKey()) ?? { para: h, husks: [] };
    g.husks.push(p), l.set(h.getKey(), g);
  }
  for (const [p, { para: h, husks: g }] of l)
    a(
      c(
        p,
        "para",
        [h],
        (m) => AL(h, m, g, n, e, t)
      ),
      !0
    );
  for (const p of [...e.cache.entries.keys()])
    o.has(p) || e.cache.entries.delete(p);
  const u = /* @__PURE__ */ new Map();
  for (const { closer: p, newMarker: h } of n.charOpenerRenames.values())
    p && u.set(p.getKey(), {
      live: p.getTextContent(),
      settled: ul(h, "closing", p.getNested())
    });
  if (r.size === 0)
    return Zm(e.tier2.viewOptions, e.tier2.logger, u);
  const { liveToSettled: f, settledToLive: d } = NL(
    s,
    Bt(e.tier2.viewOptions)
  );
  return {
    byFirstLiveKey: r,
    renamedClosers: u,
    liveToSettledTopIndex: (p) => f[p] ?? p,
    settledToLiveTopIndex: (p) => d[p],
    planContaining: (p) => {
      for (let h = p; h; h = h.getParent()) {
        const g = i.get(h.getKey());
        if (g) return g;
      }
    },
    viewOptions: e.tier2.viewOptions,
    logger: e.tier2.logger
  };
}
function OL({
  scrRef: e,
  onScrRefChange: t
}) {
  const [n] = Ce(), r = te({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return H(() => {
    const i = r.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, Ac(s, e) || $L(i, n, e);
  }, [n, e, t]), H(
    () => n.registerMutationListener(
      En,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Rf(n);
        ny(r.current, n, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: wa(s) === wa(n.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [n]
  ), H(() => {
    const i = (a) => a.read(
      () => new Set(
        Ee().getChildren().filter(ot).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = n.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), f = i(c), d = [...f].some((p) => !u.has(p));
      d && (Rf(n) || ny(r.current, n, void 0, {
        hasCreated: d,
        hasDestroyed: [...u].some((p) => !f.has(p)),
        isSameDocumentReload: wa(a) === wa(c)
      }));
    };
    return et(
      ...[Rn, Ln].map(
        (a) => n.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [n]), H(
    () => n.registerCommand(
      hn,
      () => {
        const i = r.current;
        return i.phase === "idle" && qL(i, Mv()), !1;
      },
      Xt
    ),
    [n]
  ), H(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => n.dispatchCommand(hn, void 0));
    };
    return et(
      n.registerMutationListener(Gt, i),
      n.registerMutationListener(Kt, i)
    );
  }, [n]), H(() => {
    const i = () => BL(r.current);
    return n.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [n]), null;
}
function $L(e, t, n) {
  if (RL(e, n)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const r = Rf(t);
  (!r || r === n.book) && t.update(() => Ev(t, n.chapterNum, n.verseNum));
}
function RL(e, t) {
  const n = e.pendingEchoes.findIndex((r) => Ac(r, t));
  return n < 0 ? !1 : (e.pendingEchoes.splice(0, n + 1), e.phase = "idle", !0);
}
function Mv() {
  const e = N(), t = Xb(e);
  if (!t) return;
  const n = fh(), r = r0(t);
  if (!r && !n) return;
  const i = r ? parseInt(r.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = Fd(t, e), { verseNum: o, verse: a } = wE(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: n?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Rf(e) {
  return e.getEditorState().read(() => fh()?.getCode() || void 0);
}
function fh() {
  return Ee().getChildren().find(Ie);
}
function ny(e, t, n, r) {
  const i = r.hasCreated && !e.sawDocument;
  if (r.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    r.hasCreated && (!n || n === e.scrRef.book) && gu(e, t);
    return;
  }
  r.hasCreated && r.hasDestroyed ? (r.isSameDocumentReload || gu(e, t), e.phase = "navigating") : i && gu(e, t), n && n !== e.scrRef.book && wv(e, { ...e.scrRef, book: n }) && (e.phase = "navigating");
}
function gu(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Ev(t, e.scrRef.chapterNum, e.scrRef.verseNum)
    );
  });
}
function Ev(e, t, n) {
  const r = N()?.clone();
  IL(t, n);
  const i = N();
  i && !(r && i.is(r)) && e.dispatchCommand(Xf, void 0);
}
function IL(e, t) {
  const n = Mv();
  if (n?.chapterNum === e && (n.verse ? Pv(t, n.verse) : n.verseNum === t))
    return;
  const r = Ee().getChildren(), i = jb(r, e);
  if (!i) return;
  const s = l0(r, i), o = n0(s, !0);
  c0(s, o);
  let a;
  try {
    a = SE(s, t);
  } catch {
    return;
  }
  a && (ye(a) ? !C(a.getFirstChild()) && Qs(a) || sr(a, 0) : LL(a));
}
function LL(e) {
  const t = e.getParent();
  if (!t) return;
  const n = e.getIndexWithinParent() + 1, r = t.getChildAtIndex(n);
  if (!r || Me(r)) {
    C(e) ? e.selectEnd() : sr(t, n);
    return;
  }
  const i = ua(t, n);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (C(e)) {
    e.selectEnd();
    return;
  }
  const s = E(r) && !D(r) ? Av(r) : void 0;
  s ? s.select(0, 0) : sr(t, n);
}
function Av(e) {
  const t = e.getFirstChild();
  if (C(t)) return t;
  if (E(t) && !D(t)) return Av(t);
}
function wa(e) {
  return e.read(() => {
    const t = Ee().getChildren().find(ot);
    return `${fh()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function qL(e, t) {
  e.phase !== "navigating" && t && (DL(t, e.scrRef) || wv(e, KL(t, e.scrRef)));
}
function DL(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Pv(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Pv(e, t) {
  try {
    return Sd(e, t);
  } catch {
    return !1;
  }
}
function KL(e, t) {
  const n = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (n.verse = e.verse), t.versificationStr != null && (n.versificationStr = t.versificationStr), n;
}
const UL = 8;
function wv(e, t) {
  return Ac(t, e.scrRef) || e.pendingEchoes.some((n) => Ac(n, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > UL && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function Ac(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function BL(e) {
  e.phase = "idle";
}
function FL(e) {
  return Ie(e) ? `${e.__code}` : $e(e) ? `${e.__marker} "${e.__number}"` : U(e) ? `${e.__marker}` : Wr(e) ? `${e.__marker} "${e.__number}"` : Lt(e) ? `${e.__caller}` : Ar(e) ? `${e.__marker} "${e.__number}"` : D(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ye(e) ? `${e.__marker}` : C(e) ? `"${e.__text}"${zL(e)}` : ue(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Ue(e) ? `${e.__marker} "${e.__number}"` : "";
}
function zL(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[qr]) : "";
}
function jL() {
  const [e] = Ce();
  return /* @__PURE__ */ P(
    wS,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: FL,
      editor: e
    }
  );
}
const Nv = my(null), ry = 4;
function VL({
  children: e,
  className: t,
  onClick: n,
  title: r
}) {
  const i = te(null), s = yy(Nv);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return H(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ P("button", { className: t, onClick: n, ref: i, title: r, type: "button", children: e });
}
function WL({
  children: e,
  dropDownRef: t,
  onClose: n
}) {
  const [r, i] = Ae(), [s, o] = Ae(), a = _e(
    (u) => {
      i((f) => f ? [...f, u] : [u]);
    },
    [i]
  ), c = (u) => {
    if (!r) return;
    const f = u.key;
    ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(f) && u.preventDefault(), f === "Escape" || f === "Tab" ? n() : f === "ArrowUp" ? o((d) => {
      if (!d) return r[0];
      const p = r.indexOf(d) - 1;
      return r[p === -1 ? r.length - 1 : p];
    }) : f === "ArrowDown" && o((d) => d ? r[r.indexOf(d) + 1] : r[0]);
  }, l = ut(() => ({ registerItem: a }), [a]);
  return H(() => {
    const u = s ?? r?.[0];
    u?.current && u.current.focus();
  }, [r, s]), /* @__PURE__ */ P(Nv.Provider, { value: l, children: /* @__PURE__ */ P("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function HL({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: n,
  buttonClassName: r,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = te(null), c = te(null), [l, u] = Ae(!1), f = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return H(() => {
    const d = c.current, p = a.current;
    if (l && d !== null && p !== null) {
      const { top: h, left: g } = d.getBoundingClientRect();
      p.style.top = `${h + d.offsetHeight + ry}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), H(() => {
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
  }, [a, c, l, o]), H(() => {
    const d = () => {
      if (l) {
        const p = c.current, h = a.current;
        if (p !== null && h !== null) {
          const { top: g } = p.getBoundingClientRect(), m = g + p.offsetHeight + ry;
          m !== h.getBoundingClientRect().top && (h.style.top = `${m}px`);
        }
      }
    };
    return document.addEventListener("scroll", d), () => {
      document.removeEventListener("scroll", d);
    };
  }, [c, a, l]), /* @__PURE__ */ Xe(Ii, { children: [
    /* @__PURE__ */ Xe(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": n || t,
        className: r,
        onClick: () => u(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ P("span", { className: i }),
          t && /* @__PURE__ */ P("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ P("i", { className: "chevron-down" })
        ]
      }
    ),
    l && wi(
      /* @__PURE__ */ P(WL, { dropDownRef: a, onClose: f, children: s }),
      document.body
    )
  ] });
}
const If = {
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
}, Lf = {
  ...If,
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
function GL({
  editorRef: e,
  blockMarker: t,
  disabled: n = !1
}) {
  return /* @__PURE__ */ P(
    HL,
    {
      disabled: n,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + JL(t),
      buttonLabel: YL(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(If).map((r) => /* @__PURE__ */ Xe(
        VL,
        {
          className: "item block-marker " + XL(t === r),
          onClick: () => e.current?.formatPara(r),
          children: [
            /* @__PURE__ */ P("i", { className: "icon block-marker " + r }),
            /* @__PURE__ */ P("span", { className: "text usfm_" + r, children: If[r] })
          ]
        },
        r
      ))
    }
  );
}
function JL(e) {
  return e && e in Lf ? e : "ban";
}
function YL(e) {
  return e && e in Lf ? Lf[e] : "No Style";
}
function XL(e) {
  return e ? "active dropdown-item-active" : "";
}
function iy() {
  return /* @__PURE__ */ P("div", { className: "divider" });
}
const QL = pi(function({ editorRef: t, isReadonly: n = !1, onStateChange: r }, i) {
  const [s] = Ce(), [o, a] = Ae(s), [c, l] = Ae(), [u, f] = Ae(!1), [d, p] = Ae(!1), h = _e(
    ({
      canUndo: g,
      canRedo: m,
      blockMarker: y,
      contextMarker: k
    }) => {
      f(g), p(m), l(y), r?.({
        canUndo: g,
        canRedo: m,
        blockMarker: y,
        contextMarker: k
      });
    },
    [r]
  );
  return H(() => s.registerCommand(
    hn,
    (g, m) => (a(m), !1),
    He
  ), [s]), /* @__PURE__ */ Xe(Ii, { children: [
    /* @__PURE__ */ P(Ux, { onStateChange: h }),
    /* @__PURE__ */ Xe("div", { className: "toolbar", children: [
      /* @__PURE__ */ P(
        "button",
        {
          disabled: !u || n,
          onClick: () => {
            o.dispatchCommand(Py, void 0);
          },
          title: Os ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
          type: "button",
          className: "toolbar-item spaced",
          "aria-label": "Undo",
          children: /* @__PURE__ */ P("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ P(
        "button",
        {
          disabled: !d || n,
          onClick: () => {
            o.dispatchCommand(wy, void 0);
          },
          title: Os ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ P("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ P(iy, {}),
      o === s && /* @__PURE__ */ Xe(Ii, { children: [
        /* @__PURE__ */ P(
          GL,
          {
            editorRef: t,
            blockMarker: c,
            disabled: n
          }
        ),
        /* @__PURE__ */ P(iy, {})
      ] }),
      /* @__PURE__ */ P("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), ZL = Qc(), eq = {}, tq = {}, sy = t_.filter((e) => e !== Qf);
function nq() {
  return /* @__PURE__ */ P("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function oy(e) {
  return e.type === "text" && e.offset !== 0 && e.offset !== e.getNode().getTextContentSize();
}
function ay() {
  const e = N();
  if (!M(e) || !e.isCollapsed()) return;
  const t = e.focus.getNode();
  return C(t) ? { key: t.getKey(), offset: e.focus.offset } : void 0;
}
function rq(e) {
  const t = [], n = (r, i) => r?.forEach((s, o) => {
    if (typeof s != "object") return;
    const a = [...i, o];
    s.type === "note" && t.push(Nt(a)), n(s.content, a);
  });
  return n(e?.content, []), t;
}
function iq(e, t) {
  return e.editorState === t.editorState && e.pendedKeys === t.pendedKeys && e.transientInput === t.transientInput && e.caretKey === t.caretKey && e.caretOffset === t.caretOffset && e.viewOptions === t.viewOptions && e.getMarker === t.getMarker;
}
function sq({
  listener: e
}) {
  const [t] = Ce();
  return js(
    () => t.registerUpdateListener((n) => e(n, t)),
    [t, e]
  ), null;
}
function Na(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
function cy(e) {
  const t = e.getNextSiblings(), n = t.at(0), r = t.at(-1);
  if (!n || !r) return [];
  const i = E(r) ? r.getLastDescendant() ?? r : r;
  return Yc(n, i);
}
function ly(e, t, n) {
  $S(e, () => $s(t));
  const r = N();
  if (!M(r)) return;
  const i = /* @__PURE__ */ new Set();
  r.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    ye(o) && i.add(o);
  }), i.forEach((s) => SC(s, t, n));
}
const Ov = pi(function({
  defaultUsj: t,
  scrRef: n,
  onScrRefChange: r,
  onSelectionChange: i,
  onUsjChange: s,
  onStateChange: o,
  options: a,
  logger: c,
  children: l
}, u) {
  const f = te(null), d = te(null), p = te(null), h = te(null), g = te(t), m = te(!1), y = te(void 0), k = te(void 0), x = te(void 0), A = te({ entries: /* @__PURE__ */ new Map() }), _ = te(void 0), j = te(0), $ = te(!0), ne = te(void 0), [fe, I] = Ae(t), [K, ge] = Ae(0), [re, Le] = Ae(), {
    isReadonly: me = !1,
    structureProtectionMode: nt = "off",
    hasExternalUI: rt = !1,
    hasSpellCheck: rn = !1,
    textDirection: Je = "ltr",
    markerMenuTrigger: dr = "\\",
    view: xn,
    nodes: Pe,
    debug: he = !1,
    contextMenu: F,
    styleInfo: oe,
    markerSettleDelayMs: ve,
    copyLimit: We
  } = a ?? tq, ct = xn ?? ZL, bt = Wo(ct) && (ct.markerMode !== "hidden" || !ct.hasSpacing || ct.hasGutterParaMarkers || ct.hasActiveTextFocusBox) ? {
    ...ct,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : ct, Tn = te(bt);
  yr(Tn.current, bt) || (Tn.current = bt);
  const ee = Tn.current, Te = ut(() => Pe ?? eq, [Pe]), Pr = ut(() => F, [F]), we = ut(
    () => gE(oe ?? rc),
    [oe]
  ), pr = te(c);
  yr(pr.current, c) || (pr.current = c);
  const pe = pr.current, qt = Wo(ee), Jt = me || qt, L = bt !== ct;
  H(() => {
    qt && !me && pe?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), L && pe?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), ee?.markerMode === "visible" && !me && pe?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [qt, me, L, pe, ee?.markerMode]);
  const V = te(null), G = ut(() => {
    if (ee.markerMode !== "editable") return;
    const O = oe ?? rc;
    return {
      getContext: () => V.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (R) => MR(
        O,
        R,
        Te.extraValidMarkers
      ),
      getEnterItems: (R) => ER(
        O,
        R,
        Te.extraValidMarkers
      ),
      apply: (R, B) => {
        const Y = V.current;
        Y && (B.trigger === "enter" ? Y.splitParagraphWithMarker(R.marker) : Y.applyMarkerMenuSelection(R, B));
      },
      commitTypedCloser: (R) => {
        V.current?.commitTypedCloser(R);
      }
    };
  }, [ee, oe, Te.extraValidMarkers]), J = (O) => {
    if (qt)
      throw new Error(
        `Cannot ${O} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, ae = (O) => {
    if (J(O), Jt) throw new Error(`Cannot ${O} in readonly mode`);
  }, Z = ut(
    () => [gt, ...qt ? pP : rl],
    [qt]
  ), Q = () => !!f.current && $x(f.current), se = ut(
    () => ({
      namespace: "platformEditor",
      theme: { ...CT, showCharMarkerTitles: ee.showCharMarkerTitles },
      editable: !Jt,
      editorState: void 0,
      // Handling of errors during update
      onError(O) {
        throw O;
      },
      nodes: Z
    }),
    [Jt, Z, ee.showCharMarkerTitles]
  );
  ks.initialize(pe);
  function ce(O) {
    if (O !== void 0 && !e$(O, Te.extraValidMarkers))
      throw new Error(`Unsupported character marker '${O}'`);
  }
  const qe = _e(() => {
    const O = f.current;
    if (!O) return g.current;
    const R = () => {
      if (!m.current) return;
      const lt = ks.deserializeEditorState(O.getEditorState(), ee);
      lt && (g.current = lt, m.current = !1);
    }, B = wu(O), Y = k.current;
    if ((!B || B.size === 0) && !Y)
      return R(), g.current;
    const Se = O.getEditorState(), Fe = x.current, De = {
      editorState: Se,
      pendedKeys: B ? [...B].sort().join(",") : "",
      transientInput: Y,
      caretKey: Fe?.key,
      caretOffset: Fe?.offset,
      viewOptions: ee,
      getMarker: we
    }, je = _.current;
    if (je && iq(je.key, De)) return je.usj;
    const Mt = Se.toJSON(), ft = Se.read(
      () => K2(
        Mt,
        B ?? /* @__PURE__ */ new Set(),
        { viewOptions: ee, getMarker: we, logger: pe },
        Y,
        Fe
      )
    );
    return ft ? (_.current = { key: De, usj: ft }, ft) : (R(), g.current);
  }, [ee, we, pe]), Ne = _e(() => {
    const O = f.current;
    if (!O) return;
    const R = {
      pendedKeys: wu(O) ?? /* @__PURE__ */ new Set(),
      transientInput: k.current,
      lastKnownCaret: x.current,
      tier2: { viewOptions: ee, getMarker: we, logger: pe },
      nodes: Z,
      cache: A.current
    };
    return mo(R) && R.cache.entries.clear(), R;
  }, [ee, we, pe, Z]), sn = _e(
    (O) => {
      const R = f.current, B = Ne();
      if (!(!R || !B))
        return mo(B) ? O : R.getEditorState().read(() => {
          const Y = ty(B);
          return lL(B, Y, O);
        });
    },
    [Ne]
  );
  H(() => ($.current = !0, () => {
    $.current = !1;
  }), []);
  const Cn = _e(
    (O, R) => O.read(() => {
      const B = Ne(), Y = B && xL(ty(B));
      return !Y && M(N()) && pe?.warn(
        `${R} refused: the selection could not be expressed against the document the host is reading`
      ), Y;
    }),
    [Ne, pe]
  ), wr = _e(
    (O) => {
      if (!i) return;
      const R = f.current, B = Ne();
      j.current += 1;
      const Y = j.current;
      if (!R || !B || mo(B)) {
        i(O);
        return;
      }
      queueMicrotask(() => {
        if (!$.current || Y !== j.current || f.current !== R) return;
        const Se = Cn(R, "onSelectionChange");
        Y === j.current && i(Se);
      });
    },
    [i, Ne, Cn]
  );
  function bi(O, R, B) {
    if (qt && R === "remote") {
      pr.current?.error(
        "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
      );
      return;
    }
    J("apply an update");
    const Y = f.current;
    if (!Y) return;
    const Se = Q(), Fe = Se ? void 0 : bo(Y, Or);
    Y.update(
      () => {
        eg(Y, R), R === "remote" && jt(Qf), Se || jt(Or), B && jt(B), a1(O, ee, Te, pe);
      },
      {
        discrete: !0,
        // Reads the committed state and reports the change from `onUpdate` rather than right
        // after this call, because `editor.update()` does not always run synchronously: a caller
        // reached from inside another commit's own update listener (a host's `onUsjChange`
        // calling back into `takeOpsAfterNote`, say) finds the editor already mid-commit, so
        // Lexical queues this discrete update and applies it only once that outer commit's
        // listeners finish. `onUpdate` fires exactly when THIS update's own commit lands, after
        // its update listeners, whether that is synchronously (the ordinary case, before
        // `editor.update()` even returns) or after such a deferral, so the report is correct
        // either way - and the signal and the unfocused tag release end only once the commit they
        // guard has actually happened, never before.
        onUpdate: () => {
          eg(Y, void 0), Fe?.(), Se || Zl(Y);
          const De = Y.getEditorState(), je = ks.deserializeEditorState(De, ee);
          if (!je) return;
          const Mt = !yr(g.current, je);
          Mt && (g.current = je);
          const ft = qe();
          if (ft && (Mt || !yr(fe, je))) {
            const lt = fg(O, De, "apply");
            ne.current = ft, s?.(ft, O, R, lt);
          }
        }
      }
    );
  }
  const ro = {
    focus() {
      f.current?.focus();
    },
    // Delegates to `holdsDomFocus` (above), the same check every internal caller here uses,
    // rather than comparing `activeElement` to the root directly: a focused decorator inside the
    // editor - a collapsed note's caller button, say - is the user being in THIS editor, and a
    // host gating a keyboard shortcut or a PDP-sync deferral on `isFocused()` needs that answer,
    // not a narrower one that reads such a caret as unfocused.
    isFocused() {
      return Q();
    },
    undo() {
      f.current?.dispatchCommand(Py, void 0);
    },
    redo() {
      f.current?.dispatchCommand(wy, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      ae("cut"), f.current && gp(f.current);
    },
    copy() {
      f.current && hp(f.current);
    },
    paste() {
      ae("paste"), f.current && mp(f.current);
    },
    pastePlainText() {
      ae("paste as plain text"), f.current && yp(f.current);
    },
    getUsj() {
      return qe();
    },
    commitPendingMarkerEdits() {
      const O = f.current;
      if (!O) return;
      const R = !Q(), B = R ? bo(O, Or) : void 0;
      O.update(
        () => {
          R && jt(Or), O.dispatchCommand(jC, void 0);
        },
        { discrete: !0 }
      ), B?.(), R && Zl(O);
    },
    setTransientInput(O) {
      if (!O) {
        k.current = void 0;
        return;
      }
      const R = f.current?.getEditorState().read(() => {
        const B = N();
        return M(B) && B.isCollapsed() ? B.focus.key : void 0;
      });
      k.current = { input: O, nodeKey: R ?? x.current?.key };
    },
    setUsj(O) {
      if (!yr(g.current, O)) {
        g.current = O, k.current = void 0;
        const R = yr(fe, O);
        I(O), R && ge((B) => B + 1);
      }
    },
    applyUpdate(O, R = "remote") {
      bi(O, R);
    },
    replaceEmbedUpdate(O, R) {
      const B = f.current?.read(() => FE(O, R));
      B ? this.applyUpdate(B) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${O}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      const O = f.current;
      if (!O) return;
      O.read(() => {
      });
      const R = Ne();
      return !R || mo(R) ? O.read(() => el(ee)) : Cn(O, "getSelection");
    },
    setSelection(O) {
      const R = sn(O);
      if (!R) {
        pe?.warn(
          "setSelection refused: the position could not be resolved against the document currently being edited"
        );
        return;
      }
      f.current?.update(() => {
        const B = Zc(R, ee);
        B !== void 0 && (Un(B), (!Ut().isEditable() || oy(B.anchor) && oy(B.focus)) && f.current?.dispatchCommand(hn, void 0));
      });
    },
    setAnnotation(O, R, B, Y, Se) {
      let Fe, De, je, Mt;
      typeof Y == "function" || Y === void 0 ? (Fe = Y, De = Se) : (Fe = Y.onClick, De = Y.onRemove, je = Y.onMouseEnter, Mt = Y.onMouseLeave);
      const ft = sn(O);
      if (!ft) {
        pe?.warn(
          `setAnnotation refused for ${R} "${B}": the range could not be resolved against the document currently being edited`
        );
        return;
      }
      d.current?.setAnnotation(
        ft,
        ql(R),
        B,
        Fe,
        De,
        je,
        Mt
      );
    },
    removeAnnotation(O, R) {
      d.current?.removeAnnotation(ql(O), R);
    },
    getAnnotationRanges(O, R) {
      return d.current?.getAnnotationRanges(ql(O), R) ?? [];
    },
    formatPara(O) {
      ae("format a paragraph"), f.current?.update(
        () => {
          const R = N();
          if (!M(R)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${O}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const B = R.isBackward() ? R.focus : R.anchor, Y = Qe(B.getNode(), Ie);
          if (Y) {
            const Se = R.isBackward() ? R.anchor : R.focus, De = !R.isCollapsed() && !Y.is(Se.getNode()) && !Y.isParentOf(Se.getNode()) ? { key: Se.key, offset: Se.offset, type: Se.type } : void 0, je = Dr();
            if (je.anchor.set(B.key, B.offset, B.type), je.focus.set(B.key, B.offset, B.type), Un(je), !Af(O, ee)) {
              c?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${O}"`
              );
              return;
            }
            if (!De) return;
            const Mt = X(De.key);
            if (!Mt?.isAttached()) return;
            const ft = Mt.getTopLevelElement();
            if (!ft) return;
            const lt = Y.getNextSibling();
            if (!ye(lt)) return;
            let Ct = lt.getNextSibling();
            for (; Ct; ) {
              const ki = Ct.is(ft), vn = Ct.getNextSibling();
              if (ye(Ct)) {
                const Nr = Dr();
                Nr.anchor.set(Ct.getKey(), 0, "element"), Nr.focus.set(Ct.getKey(), Ct.getChildrenSize(), "element"), Un(Nr), ly(Nr, O, ee);
              }
              if (ki) break;
              Ct = vn;
            }
            return;
          }
          ly(R, O, ee);
        },
        { discrete: !0 }
      );
    },
    getElementByKey(O) {
      return f.current?.read(
        () => f.current?.getElementByKey(O) ?? void 0
      );
    },
    removeCharacterMarker(O) {
      if (Jt) throw new Error("Cannot remove character marker in readonly mode");
      ce(O);
      let R = !1;
      return f.current?.update(
        () => {
          const B = N();
          M(B) && (R = mT(B, O, ee));
        },
        { discrete: !0 }
      ), R;
    },
    replaceCharacterMarker(O, R) {
      if (Jt) throw new Error("Cannot replace character marker in readonly mode");
      ce(O), ce(R);
      let B = !1;
      return f.current?.update(
        () => {
          const Y = N();
          M(Y) && (B = d$(Y, O, R));
        },
        { discrete: !0 }
      ), B;
    },
    extendCharacterMarker(O, R) {
      if (Jt) throw new Error("Cannot extend character marker in readonly mode");
      ce(O), R?.forEach(
        (Y) => ce(Y)
      );
      let B = !1;
      return f.current?.update(
        () => {
          const Y = N();
          M(Y) && (B = p$(
            Y,
            O,
            R,
            ee
          ));
        },
        { discrete: !0 }
      ), B;
    },
    insertMarker(O) {
      if (Jt) throw new Error("Cannot insert marker in readonly mode");
      if (!n) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!f.current) return;
      if (!lf(O, Te.extraValidMarkers))
        throw new Error(`Unsupported marker '${O}'`);
      const R = uf(
        O,
        y,
        ee,
        Te,
        pe,
        void 0,
        oe
      );
      return R.action({ editor: f.current, reference: n }), R.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!me)
        return f.current?.getEditorState().read(() => II());
    },
    applyMarkerMenuSelection(O, R) {
      if (me) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!n)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!f.current) return;
      if (O.kind !== "closeTag" && !lf(O.marker, Te.extraValidMarkers))
        throw new Error(`Unsupported marker '${O.marker}'`);
      let B;
      return f.current.update(() => {
        B = jI(O, R, n, {
          expandedNoteKeyRef: y,
          viewOptions: ee,
          nodeOptions: Te,
          logger: c,
          styleInfo: oe
        });
      }), B;
    },
    splitParagraphWithMarker(O) {
      if (me) throw new Error("Cannot split paragraph in readonly mode");
      f.current && f.current.update(() => {
        Af(O, ee);
      });
    },
    commitTypedMarker(O, R) {
      if (me) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!f.current) return !1;
      let B = !1;
      return f.current.update(() => {
        B = FI(O, R), B || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), B;
    },
    commitTypedCloser(O) {
      if (me) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!f.current) return !1;
      let R = !1;
      return f.current.update(() => {
        R = wC(O), R || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), R;
    },
    insertNote(O, R, B) {
      ae("insert a note");
      const Y = B && sn(B);
      if (B && !Y) {
        pe?.warn(
          `insertNote refused for \\${O}: the position could not be resolved against the document currently being edited`
        );
        return;
      }
      f.current?.update(
        () => {
          const Se = tx(
            O,
            R,
            Y,
            n,
            ee,
            Te,
            pe
          );
          Na(Se, y);
        },
        { discrete: !0 }
      );
    },
    selectNote(O) {
      const R = f.current;
      if (!R) return;
      const B = Ne();
      if (typeof O == "string" || !B || mo(B)) {
        R.update(() => {
          const Fe = br(O);
          Fe && (qa(Fe, ee), Na(Fe, y));
        });
        return;
      }
      const Y = rq(qe())[O], Se = Y ? sn({ start: { jsonPath: Y } }) : void 0;
      Se && R.update(() => {
        const [Fe, De] = Nn(Se.start, ee);
        if (!Fe || De === void 0) return;
        const je = D(Fe) ? Fe : Qe(Fe, D);
        D(je) ? (qa(je, ee), Na(je, y)) : C(Fe) && Fe.select(De, De);
      });
    },
    selectAfterNote(O) {
      const R = f.current;
      if (!R) return;
      const B = !Q(), Y = B ? bo(R, Or) : void 0;
      if (R.update(
        () => {
          B && jt(Or);
          const Se = br(O);
          Se && rx(Se);
        },
        { discrete: !0 }
      ), Y?.(), B) {
        Zl(R);
        const Se = bo(
          R,
          Or
        );
        R.update(
          () => {
            jt(Or), R.dispatchCommand(hn, void 0);
          },
          { discrete: !0 }
        ), Se();
      }
    },
    selectNoteTextOffset(O, R, B) {
      f.current?.update(() => {
        const Y = br(O);
        if (!Y) return;
        const Se = B?.glyph;
        (B?.field === "category" ? cP(Y, R, Se) || Cg(Y, 0) : Cg(Y, R, Se)) || qa(Y, ee), Na(Y, y);
      });
    },
    getNoteOps(O) {
      const R = f.current;
      return R ? ms(R, () => {
        const B = br(O);
        if (B)
          return Yc(B);
      }) : void 0;
    },
    getOpsAfterNote(O) {
      const R = f.current;
      return R ? ms(R, () => {
        const B = br(O);
        return B ? cy(B) : void 0;
      }) : void 0;
    },
    takeOpsAfterNote(O) {
      const R = f.current, B = R ? ms(R, () => {
        const De = br(O);
        if (!De) return;
        const je = jd(De, "apply");
        return { ops: cy(De), notePosition: je };
      }) : void 0;
      if (!B) return;
      const { ops: Y, notePosition: Se } = B;
      if (Y.length === 0 || Se === void 0) return Y;
      const Fe = Y.reduce(
        (De, je) => De + (typeof je.insert == "string" ? je.insert.length : 1),
        0
      );
      return bi([{ retain: Se + 1 }, { delete: Fe }], "remote", Ff), Y;
    },
    getNoteIndex(O) {
      const R = f.current;
      return R ? ms(R, () => Hd(O)) : void 0;
    },
    getNoteKey(O) {
      const R = f.current;
      return R ? ms(R, () => br(O)?.getKey()) : void 0;
    },
    highlightNote(O) {
      p.current?.setHighlightedNote(O);
    },
    get toolbarEndRef() {
      return h;
    }
  };
  V.current = ro, wc(u, () => ro), H(() => {
    const O = f.current;
    if (O)
      return O.registerUpdateListener(({ editorState: R }) => {
        const B = R.read(ay);
        B && (x.current = B);
      });
  }, []);
  const os = te({ onUsjChange: s, viewOptions: ee, isBlockVerse: qt, readSettledUsj: qe });
  os.current = { onUsjChange: s, viewOptions: ee, isBlockVerse: qt, readSettledUsj: qe };
  const ba = _e((O, R) => {
    const { editorState: B, dirtyElements: Y, dirtyLeaves: Se, tags: Fe } = O;
    if (Y.size === 0 && Se.size === 0) return;
    if (Fe.has(ia)) {
      const vn = os.current, Nr = !vn.isBlockVerse && ks.deserializeEditorState(B, vn.viewOptions);
      Nr && (g.current = Nr), ne.current = g.current;
      return;
    }
    if (Ld(R)) return;
    if (sy.some((vn) => Fe.has(vn))) {
      m.current = !0;
      return;
    }
    const De = os.current;
    if (De.isBlockVerse) return;
    Cb(R, B, Fe);
    const je = B.read(ay);
    je && (x.current = je);
    const Mt = s1(O, {
      ignoreTags: sy
    }), ft = Mt ? [] : new Ts(B.read(() => o1(R, O))).chop().ops;
    if (!Mt) {
      const vn = ks.deserializeEditorState(B, De.viewOptions);
      vn && (g.current = vn);
    }
    if (!De.onUsjChange) return;
    const lt = De.readSettledUsj();
    if (!lt || ft.length === 0 && yr(ne.current, lt)) return;
    if (ne.current = lt, ft.length === 0) {
      De.onUsjChange(lt, void 0, "local", void 0);
      return;
    }
    const Ct = fg(ft, B), ki = Ct && !O.prevEditorState.read(() => X(Ct)) ? Ct : void 0;
    De.onUsjChange(lt, ft, "local", ki);
  }, []), as = _e(
    (O) => {
      Le(O.contextMarker), o?.(O);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Xe(Ny, { initialConfig: se, children: [
      /* @__PURE__ */ P(yw, { isEditable: !Jt }),
      /* @__PURE__ */ Xe("div", { className: "editor-container", children: [
        rt ? /* @__PURE__ */ P(Ux, { onStateChange: as }) : /* @__PURE__ */ P(
          "div",
          {
            className: "editor-toolbar-container" + (Jt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ P(
              QL,
              {
                ref: h,
                editorRef: V,
                isReadonly: Jt,
                onStateChange: as
              }
            )
          }
        ),
        /* @__PURE__ */ Xe("div", { className: "editor-inner", children: [
          /* @__PURE__ */ P($y, { editorRef: f }),
          /* @__PURE__ */ P(
            OS,
            {
              contentEditable: /* @__PURE__ */ P(
                Oy,
                {
                  className: `editor-input usfm ${SA(ee).join(" ")}${ee.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ee.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: rn
                }
              ),
              placeholder: /* @__PURE__ */ P(nq, {}),
              ErrorBoundary: Ry
            }
          ),
          rt && /* @__PURE__ */ P(mw, {}),
          /* @__PURE__ */ P(Iy, {}),
          n && r && /* @__PURE__ */ P(OL, { scrRef: n, onScrRefChange: r }),
          n && !rt && /* @__PURE__ */ P(
            JN,
            {
              trigger: dr,
              scrRef: n,
              contextMarker: re,
              getMarkerAction: (O) => uf(
                O,
                y,
                ee,
                Te,
                pe,
                void 0,
                oe
              ),
              editableHarness: G
            }
          ),
          /* @__PURE__ */ P(
            Cw,
            {
              scripture: fe,
              scriptureRef: g,
              nodeOptions: Te,
              editorAdaptor: or,
              viewOptions: ee,
              logger: pe
            },
            K
          ),
          /* @__PURE__ */ P(Vw, { onChange: wr, viewOptions: ee }),
          /* @__PURE__ */ P(sq, { listener: ba }),
          /* @__PURE__ */ P(b$, { viewOptions: ee }),
          /* @__PURE__ */ P(i1, { ref: d, logger: pe, viewOptions: ee }),
          /* @__PURE__ */ P(L1, { viewOptions: ee }),
          /* @__PURE__ */ P(Y1, {}),
          /* @__PURE__ */ P(iw, {}),
          ee?.markerMode !== "editable" && /* @__PURE__ */ P(sw, { logger: pe }),
          /* @__PURE__ */ P(uw, { options: Pr }),
          /* @__PURE__ */ P(uR, { limit: We, viewOptions: ee }),
          /* @__PURE__ */ P(gw, {}),
          /* @__PURE__ */ P(kw, {}),
          /* @__PURE__ */ P(Tw, {}),
          /* @__PURE__ */ P(VI, {}),
          /* @__PURE__ */ P(
            _2,
            {
              viewOptions: ee,
              getMarker: we,
              logger: pe,
              markerSettleDelayMs: ve,
              structureProtectionMode: nt,
              copyLimit: We
            }
          ),
          ee?.markerMode === "visible" && /* @__PURE__ */ P(lR, { viewOptions: ee, copyLimit: We }),
          /* @__PURE__ */ P(
            N2,
            {
              styleInfo: oe,
              viewOptions: ee,
              logger: pe
            }
          ),
          /* @__PURE__ */ P(vw, { ref: p }),
          /* @__PURE__ */ P(
            Sw,
            {
              expandedNoteKeyRef: y,
              nodeOptions: Te,
              viewOptions: ee,
              logger: pe
            }
          ),
          /* @__PURE__ */ P(jw, {}),
          /* @__PURE__ */ P(N1, {}),
          /* @__PURE__ */ P(E1, {}),
          /* @__PURE__ */ P(U2, { viewOptions: ee, logger: pe }),
          /* @__PURE__ */ P(Ww, {}),
          /* @__PURE__ */ P(NN, { structureProtectionMode: nt }),
          /* @__PURE__ */ P(ON, { textDirection: Je }),
          /* @__PURE__ */ P(RN, {}),
          /* @__PURE__ */ P(HN, {}),
          l
        ] }),
        he && /* @__PURE__ */ P(jL, {})
      ] })
    ] }, ee.verseLayout ?? "inline")
  );
}), mD = pi(function(t, n) {
  const { children: r, ...i } = t;
  return /* @__PURE__ */ P(Ov, { ref: n, ...i });
});
function uy(e, t) {
  const n = C(e) ? U_(e, Vt, t) ?? [] : [], r = w0(e, Vt, t);
  return [.../* @__PURE__ */ new Set([...n, ...r])];
}
function oq(e, t, n) {
  Xy(Vt, e, t);
  for (const r of n) {
    const i = X(r);
    i && dk(i, Vt, e);
  }
}
function aq(e) {
  const t = Array.from(e, (i) => X(i)).filter(
    (i) => i !== null
  );
  t.sort((i, s) => i.isBefore(s) ? -1 : 1);
  const n = t[0];
  if (!n) return;
  if (C(n)) {
    const [i] = Ad(n);
    n.select(i, i);
    return;
  }
  const r = n.getParent();
  r && r.select(n.getIndexWithinParent(), n.getIndexWithinParent());
}
function $v() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function Pc(e, t, n, r, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: n === void 0 ? $v() : n,
    timeStamp: r === void 0 ? performance.timeOrigin + performance.now() : r,
    type: "comment"
  };
}
function Rv(e, t, n) {
  return {
    comments: t,
    id: n === void 0 ? $v() : n,
    quote: e,
    type: "thread"
  };
}
function fy(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function cq(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function mu(e) {
  const t = e._changeListeners;
  for (const n of t)
    n();
}
class lq {
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
  constructor(t, n) {
    this._comments = [], this._editor = t, this.logger = n, this._collabProvider = null, this._changeListeners = /* @__PURE__ */ new Set();
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
    this._comments = t, mu(this);
  }
  /**
   * Adds a comment or thread to the store.
   *
   * @param commentOrThread - The comment or thread to add.
   * @param thread - Optional parent thread to add the comment to.
   * @param offset - Optional offset for insertion.
   */
  addComment(t, n, r) {
    const i = Array.from(this._comments), s = this._getCollabComments();
    if (n !== void 0 && t.type === "comment")
      for (let o = 0; o < i.length; o++) {
        const a = i[o];
        if (a.type === "thread" && a.id === n.id) {
          const c = fy(a);
          i.splice(o, 1, c);
          const l = r !== void 0 ? r : c.comments.length;
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
      const o = r !== void 0 ? r : i.length;
      this.isCollaborative() && s !== null && this._withRemoteTransaction(() => {
        const a = this._createCollabSharedMap(t);
        s.insert(o, [a]);
      }), i.splice(o, 0, t);
    }
    this._comments = i, mu(this);
  }
  /**
   * Deletes a comment or thread from the store.
   *
   * @param commentOrThread - The comment or thread to delete.
   * @param thread - Optional parent thread if deleting a comment within a thread.
   * @returns An object containing the marked comment and its index, or null.
   */
  deleteCommentOrThread(t, n) {
    const r = Array.from(this._comments), i = this._getCollabComments();
    let s = null;
    if (n !== void 0)
      for (let o = 0; o < r.length; o++) {
        const a = r[o];
        if (a.type === "thread" && a.id === n.id) {
          const c = fy(a);
          r.splice(o, 1, c);
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
      s = r.indexOf(t), this.isCollaborative() && i !== null && this._withRemoteTransaction(() => {
        i.delete(s);
      }), r.splice(s, 1);
    return this._comments = r, mu(this), t.type === "comment" ? {
      index: s,
      markedComment: cq(t)
    } : null;
  }
  /**
   * Registers a callback to be called when the comments change.
   *
   * @param onChange - The callback function.
   * @returns A function to unregister the callback.
   */
  registerOnChange(t) {
    const n = this._changeListeners;
    return n.add(t), () => {
      n.delete(t);
    };
  }
  _withRemoteTransaction(t) {
    const n = this._collabProvider;
    n !== null && n.doc.transact(t, this);
  }
  _withLocalTransaction(t) {
    const n = this._collabProvider;
    try {
      this._collabProvider = null, t();
    } finally {
      this._collabProvider = n;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _getCollabComments() {
    const t = this._collabProvider;
    return t !== null ? t.doc.get("comments", Sh) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const n = new _h(), r = t.type, i = t.id;
    if (n.set("type", r), n.set("id", i), r === "comment")
      n.set("author", t.author), n.set("content", t.content), n.set("deleted", t.deleted), n.set("timeStamp", t.timeStamp);
    else {
      n.set("quote", t.quote);
      const s = new Sh();
      t.comments.forEach((o, a) => {
        const c = this._createCollabSharedMap(o);
        s.insert(a, [c]);
      }), n.set("comments", s);
    }
    return n;
  }
  /**
   * Registers collaborative editing support using a Yjs provider.
   *
   * @param provider - The Yjs Provider instance.
   * @returns A function to unregister collaboration and cleanup.
   */
  registerCollaboration(t) {
    this._collabProvider = t;
    const n = this._getCollabComments(), r = () => {
      t.connect();
    }, i = () => {
      try {
        t.disconnect();
      } catch {
      }
    }, s = this._editor.registerCommand(
      GS,
      (a) => (r !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), r()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Xt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof JS) {
            const u = l.target, f = l.delta;
            let d = 0;
            for (const p of f) {
              const h = p.insert, g = p.retain, m = p.delete, y = u.parent, k = u === n ? void 0 : y instanceof _h && this._comments.find((x) => x.id === y.get("id"));
              if (Array.isArray(h)) {
                const x = d;
                h.slice().reverse().forEach((A) => {
                  const _ = A.get("id"), $ = A.get("type") === "thread" ? Rv(
                    A.get("quote"),
                    A.get("comments").toArray().map(
                      (ne) => Pc(
                        ne.get("content"),
                        ne.get("author"),
                        ne.get("id"),
                        ne.get("timeStamp"),
                        ne.get("deleted")
                      )
                    ),
                    _
                  ) : Pc(
                    A.get("content"),
                    A.get("author"),
                    _,
                    A.get("timeStamp"),
                    A.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment($, k, x);
                  });
                });
              } else if (typeof g == "number")
                d += g;
              else if (typeof m == "number")
                for (let x = 0; x < m; x++) {
                  const A = k === void 0 || k === !1 ? this._comments[d] : k.comments[d];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(A, k);
                  }), d++;
                }
            }
          }
      }
    };
    return n === null ? () => null : (n.observeDeep(o), r(), () => {
      n.unobserveDeep(o), s(), this._collabProvider = null;
    });
  }
}
function uq(e) {
  const [t, n] = Ae(e.getComments());
  return H(() => e.registerOnChange(() => {
    n(e.getComments());
  }), [e]), t;
}
function fq({
  onClose: e,
  children: t,
  title: n,
  closeOnClickOutside: r
}) {
  const i = te(null);
  return H(() => {
    i.current !== null && i.current.focus();
  }, []), H(() => {
    let s = null;
    const o = (l) => {
      l.key === "Escape" && e();
    }, a = (l) => {
      const u = l.target;
      i.current !== null && !i.current.contains(u) && r && e();
    }, c = i.current;
    return c !== null && (s = c.parentElement, s !== null && s.addEventListener("click", a)), window.addEventListener("keydown", o), () => {
      window.removeEventListener("keydown", o), s !== null && s?.removeEventListener("click", a);
    };
  }, [r, e]), /* @__PURE__ */ P("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Xe("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
    /* @__PURE__ */ P("h2", { className: "Modal__title", children: n }),
    /* @__PURE__ */ P(
      "button",
      {
        className: "Modal__closeButton",
        "aria-label": "Close modal",
        type: "button",
        onClick: e,
        children: "X"
      }
    ),
    /* @__PURE__ */ P("div", { className: "Modal__content", children: t })
  ] }) });
}
function dq({
  onClose: e,
  children: t,
  title: n,
  closeOnClickOutside: r = !1
}) {
  return wi(
    /* @__PURE__ */ P(fq, { onClose: e, title: n, closeOnClickOutside: r, children: t }),
    document.body
  );
}
function Iv() {
  const [e, t] = Ae(null), n = _e(() => {
    t(null);
  }, []), r = ut(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ P(dq, { onClose: n, title: s, closeOnClickOutside: a, children: o });
  }, [e, n]), i = _e(
    (s, o, a = !1) => {
      t({
        closeOnClickOutside: a,
        content: o(n),
        title: s
      });
    },
    [n]
  );
  return [r, i];
}
const pq = {
  ...CT,
  paragraph: "CommentEditorTheme__paragraph"
};
function hq(...e) {
  return e.filter(Boolean).join(" ");
}
function di({
  "data-test-id": e,
  children: t,
  className: n,
  onClick: r,
  disabled: i,
  small: s,
  title: o
}) {
  return /* @__PURE__ */ P(
    "button",
    {
      disabled: i,
      className: hq(
        "Button__root",
        i && "Button__disabled",
        s && "Button__small",
        n
      ),
      onClick: r,
      title: o,
      "aria-label": o,
      ...e && { "data-test-id": e },
      children: t
    }
  );
}
function gq({
  className: e
}) {
  return /* @__PURE__ */ P(Oy, { className: e || "ContentEditable__root" });
}
function mq({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ P("div", { className: t || "Placeholder__root", children: e });
}
const dy = Kf("INSERT_INLINE_COMMAND");
function yq({
  anchorKey: e,
  editor: t,
  showComments: n,
  onAddComment: r
}) {
  const i = te(null), s = _e(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return H(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), js(() => {
    s();
  }, [e, t, n, s]), /* @__PURE__ */ P("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ P("button", { className: "CommentPlugin_AddCommentBox_button", onClick: r, children: /* @__PURE__ */ P("i", { className: "icon add-comment" }) }) });
}
function bq({ onEscape: e }) {
  const [t] = Ce();
  return H(() => t.registerCommand(
    Ay,
    (n) => e(n),
    kr
  ), [t, e]), null;
}
function Lv({
  className: e,
  autoFocus: t,
  onEscape: n,
  onChange: r,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ P(Ny, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: pq
  }, children: /* @__PURE__ */ Xe("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ P(
      VS,
      {
        contentEditable: /* @__PURE__ */ P(gq, { className: e }),
        placeholder: /* @__PURE__ */ P(mq, { children: s }),
        ErrorBoundary: Ry
      }
    ),
    /* @__PURE__ */ P(jS, { onChange: r }),
    /* @__PURE__ */ P(Iy, {}),
    t !== !1 && /* @__PURE__ */ P(BS, {}),
    /* @__PURE__ */ P(bq, { onEscape: n }),
    /* @__PURE__ */ P(FS, {}),
    i !== void 0 && /* @__PURE__ */ P($y, { editorRef: i })
  ] }) });
}
function qv(e, t) {
  return _e(
    (n, r) => {
      n.read(() => {
        e(WS()), t(!HS(r.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function kq({
  editor: e,
  cancelAddComment: t,
  submitAddComment: n
}) {
  const [r, i] = Ae(""), [s, o] = Ae(!1), a = te(null), c = ut(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = te(null), u = Kv(), f = _e(() => {
    e.getEditorState().read(() => {
      const g = N();
      if (M(g)) {
        l.current = g.clone();
        const m = g.anchor, y = g.focus, k = RS(
          e,
          m.getNode(),
          m.offset,
          y.getNode(),
          y.offset
        ), x = a.current;
        if (k !== null && x !== null) {
          const { left: A, bottom: _, width: j } = k.getBoundingClientRect(), $ = IS(e, k);
          let ne = $.length === 1 ? A + j / 2 - 125 : A - 125;
          ne < 10 && (ne = 10), x.style.left = `${ne}px`, x.style.top = `${_ + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const fe = $.length, { container: I } = c, K = c.elements, ge = K.length;
          for (let re = 0; re < fe; re++) {
            const Le = $[re];
            let me = K[re];
            me === void 0 && (me = document.createElement("span"), K[re] = me, I.appendChild(me));
            const rt = `position:absolute;top:${Le.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${Le.left}px;height:${Le.height}px;width:${Le.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            me.style.cssText = rt;
          }
          for (let re = ge - 1; re >= fe; re--) {
            const Le = K[re];
            I.removeChild(Le), K.pop();
          }
        }
      }
    });
  }, [e, c]);
  js(() => {
    f();
    const g = c.container, m = document.body;
    return m !== null ? (m.appendChild(g), () => {
      m.removeChild(g);
    }) : () => {
    };
  }, [c.container, f]), H(() => (window.addEventListener("resize", f), () => {
    window.removeEventListener("resize", f);
  }), [f]);
  const d = (g) => (g.preventDefault(), t(), !0), p = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const m = l.current;
        return m ? m.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), n(
        Rv(g, [Pc(r, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = qv(i, o);
  return /* @__PURE__ */ Xe("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ P(
      Lv,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: d,
        onChange: h
      }
    ),
    /* @__PURE__ */ Xe("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ P(di, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ P(
        di,
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
function xq({
  submitAddComment: e,
  thread: t,
  placeholder: n
}) {
  const [r, i] = Ae(""), [s, o] = Ae(!1), a = te(null), c = Kv(), l = qv(i, o);
  return /* @__PURE__ */ Xe(Ii, { children: [
    /* @__PURE__ */ P(
      Lv,
      {
        className: "CommentPlugin_CommentsPanel_Editor",
        autoFocus: !1,
        onEscape: () => !0,
        onChange: l,
        editorRef: a,
        placeholder: n
      }
    ),
    /* @__PURE__ */ P(
      di,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(Pc(r, c), !1, t);
            const f = a.current;
            f !== null && f.dispatchCommand(_S, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ P("i", { className: "send" })
      }
    )
  ] });
}
function Dv({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: n,
  thread: r = void 0
}) {
  return /* @__PURE__ */ Xe(Ii, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Xe("div", { className: "Modal__content", children: [
      /* @__PURE__ */ P(
        di,
        {
          onClick: () => {
            t(e, r), n();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ P(
        di,
        {
          onClick: () => {
            n();
          },
          children: "Cancel"
        }
      )
    ] })
  ] });
}
function py({
  comment: e,
  deleteComment: t,
  thread: n,
  rtf: r
}) {
  const [i, s] = Ae(0);
  H(() => {
    const u = () => {
      s(performance.timeOrigin + performance.now());
    };
    u();
    const f = window.setInterval(u, 6e4);
    return () => {
      window.clearInterval(f);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Iv();
  return /* @__PURE__ */ Xe("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Xe("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ P("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Xe("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : r.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ P("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Xe(Ii, { children: [
      /* @__PURE__ */ P(
        di,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ P(
              Dv,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: n,
                onClose: u
              }
            ));
          },
          className: "CommentPlugin_CommentsPanel_List_DeleteButton",
          children: /* @__PURE__ */ P("i", { className: "delete" })
        }
      ),
      c
    ] })
  ] });
}
function Tq({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: n,
  displayIndex: r,
  listRef: i,
  submitAddComment: s,
  markNodeMap: o
}) {
  const [a] = Ce(), [c, l] = Ae(0), [u, f] = Iv(), d = ut(
    () => new Intl.RelativeTimeFormat("en", {
      localeMatcher: "best fit",
      numeric: "auto",
      style: "short"
    }),
    []
  );
  return H(() => {
    const p = setTimeout(() => {
      l(c + 1);
    }, 1e4);
    return () => {
      clearTimeout(p);
    };
  }, [c]), /* @__PURE__ */ P("ul", { className: "CommentPlugin_CommentsPanel_List", ref: i, children: t.map((p) => {
    const h = p.id;
    if (p.type === "thread") {
      const g = e !== null && e.indexOf(h) !== -1;
      return /* @__PURE__ */ Xe(
        "li",
        {
          onClick: () => {
            if (g) return;
            const y = o.get(h), k = document.activeElement;
            if (y !== void 0) {
              a.update(
                () => {
                  const A = Array.from(y)[0], _ = X(A);
                  ue(_) && _.selectStart();
                },
                {
                  onUpdate() {
                    k !== null && k.focus();
                  }
                }
              );
              return;
            }
            const x = r.keysFor(Vt, h);
            x.size !== 0 && a.update(
              () => {
                aq(x);
              },
              {
                onUpdate() {
                  k !== null && k.focus();
                }
              }
            );
          },
          className: `CommentPlugin_CommentsPanel_List_Thread ${o.has(h) || r.keysFor(Vt, h).size > 0 ? "interactive" : ""} ${e.indexOf(h) === -1 ? "" : "active"}`,
          children: [
            /* @__PURE__ */ Xe("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
              /* @__PURE__ */ Xe("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
                "> ",
                /* @__PURE__ */ P("span", { children: p.quote })
              ] }),
              /* @__PURE__ */ P(
                di,
                {
                  onClick: () => {
                    f("Delete Thread", (y) => /* @__PURE__ */ P(
                      Dv,
                      {
                        commentOrThread: p,
                        deleteCommentOrThread: n,
                        onClose: y
                      }
                    ));
                  },
                  className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                  children: /* @__PURE__ */ P("i", { className: "delete" })
                }
              ),
              u
            ] }),
            /* @__PURE__ */ P("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: p.comments.map((y) => /* @__PURE__ */ P(
              py,
              {
                comment: y,
                deleteComment: n,
                thread: p,
                rtf: d
              },
              y.id
            )) }),
            /* @__PURE__ */ P("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ P(
              xq,
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
    return /* @__PURE__ */ P(
      py,
      {
        comment: p,
        deleteComment: n,
        rtf: d
      },
      h
    );
  }) });
}
function Cq({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: n,
  submitAddComment: r,
  markNodeMap: i,
  displayIndex: s
}) {
  const o = te(null), a = n.length === 0;
  return /* @__PURE__ */ Xe("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ P("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    a ? /* @__PURE__ */ P("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ P(
      Tq,
      {
        activeIDs: e,
        comments: n,
        deleteCommentOrThread: t,
        displayIndex: s,
        listRef: o,
        submitAddComment: r,
        markNodeMap: i
      }
    )
  ] });
}
function Kv() {
  const e = Ly(), { yjsDocMap: t, name: n } = e;
  return t.has("comments") ? n : "Scripture User";
}
function vq({
  providerFactory: e,
  setCommentStore: t,
  onChange: n,
  showCommentsContainerRef: r,
  commentContainerRef: i,
  logger: s
}) {
  const o = Ly(), [a] = Ce(), c = ut(() => {
    const fe = new lq(a, s);
    return n && fe.registerOnChange(n), t?.(fe), fe;
  }, [a, s, n, t]), l = uq(c), u = ut(() => /* @__PURE__ */ new Map(), []), f = mx(a), [d, p] = Ae(), [h, g] = Ae([]), [m, y] = Ae(!1), [k, x] = Ae(!1), { yjsDocMap: A } = o;
  H(() => {
    if (e) {
      const fe = e("comments", A);
      return c.registerCollaboration(fe);
    }
    return () => {
    };
  }, [c, e, A]);
  const _ = _e(() => {
    a.update(() => {
      const fe = N();
      fe !== null && (fe.dirty = !0);
    }), y(!1);
  }, [a]), j = _e(
    (fe, I) => {
      if (fe.type === "comment") {
        const K = c.deleteCommentOrThread(fe, I);
        if (!K)
          return;
        const { markedComment: ge, index: re } = K;
        c.addComment(ge, I, re);
      } else {
        c.deleteCommentOrThread(fe);
        const K = I !== void 0 ? I.id : fe.id, ge = u.get(K), re = f.keysFor(Vt, K);
        (ge !== void 0 && ge.size > 0 || re.size > 0) && setTimeout(() => {
          a.update(() => {
            oq(K, ge ?? [], re);
          });
        });
      }
    },
    [c, f, a, u]
  ), $ = _e(
    (fe, I, K, ge) => {
      c.addComment(fe, K), I && (a.update(() => {
        M(ge) && Id(ge, Vt, fe.id);
      }), y(!1));
    },
    [c, a]
  );
  H(() => {
    const fe = [];
    let I;
    const K = () => {
      I = window.setTimeout(() => {
        x(!0);
      }, 0);
    };
    for (const ge of h) {
      const re = u.get(ge) ?? [];
      for (const Le of re) {
        const me = a.getElementByKey(Le);
        me !== null && (me.classList.add("selected"), fe.push(me), K());
      }
      f.keysFor(Vt, ge).size > 0 && (f.setStateClass(Vt, ge, "selected", !0), K());
    }
    return () => {
      I !== void 0 && window.clearTimeout(I);
      for (const ge of fe)
        ge.classList.remove("selected");
      for (const ge of h)
        f.setStateClass(Vt, ge, "selected", !1);
    };
  }, [h, f, a, u]), H(() => {
    if (!a.hasNodes([gt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const fe = /* @__PURE__ */ new Map();
    return et(
      Gf(
        a,
        gt,
        (I) => Di(I.getTypedIDs()),
        (I, K) => {
          for (const [ge, re] of Object.entries(I.getTypedIDs()))
            re.forEach((Le) => {
              K.addID(ge, Le);
            });
        }
      ),
      a.registerMutationListener(
        gt,
        (I) => {
          a.getEditorState().read(() => {
            for (const [K, ge] of I) {
              const re = X(K);
              let Le = [];
              ge === "destroyed" ? Le = fe.get(K) ?? [] : ue(re) && (Le = re.getTypedIDs()[Vt] ?? []);
              for (const me of Le) {
                let nt = u.get(me);
                fe.set(K, Le), ge === "destroyed" ? nt !== void 0 && (nt.delete(K), nt.size === 0 && u.delete(me)) : (nt === void 0 && (nt = /* @__PURE__ */ new Set(), u.set(me, nt)), nt.has(K) || nt.add(K));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: I, tags: K }) => {
        I.read(() => {
          const ge = N();
          let re = !1, Le = !1;
          if (M(ge)) {
            const { anchor: me } = ge, nt = me.getNode();
            if (C(nt)) {
              const rt = uy(nt, me.offset);
              g(rt), re = !0, ge.isCollapsed() || (p(nt.getKey()), Le = !0);
            } else if (me.type === "element" && E(nt)) {
              const rt = nt.getChildren(), rn = /* @__PURE__ */ new Set();
              for (const [Je, dr] of [
                [rt[me.offset - 1], !0],
                [rt[me.offset], !1]
              ]) {
                if (!Je) continue;
                const xn = dr && C(Je) ? Je.getTextContentSize() : 0;
                uy(Je, xn).forEach((Pe) => rn.add(Pe));
              }
              rn.size > 0 && (g([...rn]), re = !0);
            }
          }
          re || g((me) => me.length === 0 ? me : []), Le || p(null), !K.has("collaboration") && M(ge) && y(!1);
        });
      }),
      a.registerCommand(
        dy,
        () => {
          const I = window.getSelection();
          return I !== null && I.removeAllRanges(), y(!0), !0;
        },
        Li
      )
    );
  }, [a, u]);
  const ne = () => {
    a.dispatchCommand(dy, void 0);
  };
  return /* @__PURE__ */ Xe(Ii, { children: [
    m && wi(
      /* @__PURE__ */ P(
        kq,
        {
          editor: a,
          cancelAddComment: _,
          submitAddComment: $
        }
      ),
      document.body
    ),
    d != null && !m && wi(
      /* @__PURE__ */ P(
        yq,
        {
          anchorKey: d,
          editor: a,
          showComments: k,
          onAddComment: ne
        }
      ),
      document.body
    ),
    r !== null && wi(
      /* @__PURE__ */ P(
        di,
        {
          className: `CommentPlugin_ShowCommentsButton ${k ? "active" : ""}`,
          onClick: () => x(!k),
          title: k ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ P("i", { className: "comments" })
        }
      ),
      r?.current ?? document.body
    ),
    k && wi(
      /* @__PURE__ */ P(
        Cq,
        {
          comments: l,
          submitAddComment: $,
          deleteCommentOrThread: j,
          activeIDs: h,
          markNodeMap: u,
          displayIndex: f
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function Sq() {
  const e = te(void 0), t = _e((n) => {
    e.current = n;
  }, []);
  return [e, t];
}
function _q(e, t) {
  const n = t.current?.getComments() ?? [], r = n?.map((s) => s.id), i = e.map((s) => {
    const o = r.findIndex((a) => a === s);
    return o !== void 0 && o >= 0 ? n[o] : {
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
  n.forEach((s) => {
    e.includes(s.id) || i.push(s);
  }), i && t.current?.setComments(i);
}
function Mq(e, t) {
  H(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (n) => {
      _q(n, t);
    };
  }, [t, e]);
}
const yD = pi(function(t, n) {
  const r = te(null), i = te(!0), s = te(null), [o, a] = Ae(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: f, ...d } = t, { logger: p, options: { isReadonly: h, view: g } = {} } = t, m = (h ?? !1) || Wo(g), [y, k] = Sq();
  Mq(d, y), H(() => {
    if (process.env.NODE_ENV !== "production") {
      const _ = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(_), p || console.warn(_);
    }
  }, [p]), wc(n, () => ({
    focus() {
      r.current?.focus();
    },
    isFocused() {
      return r.current?.isFocused() ?? !1;
    },
    undo() {
      r.current?.undo();
    },
    redo() {
      r.current?.redo();
    },
    cut() {
      r.current?.cut();
    },
    copy() {
      r.current?.copy();
    },
    paste() {
      r.current?.paste();
    },
    pastePlainText() {
      r.current?.pastePlainText();
    },
    getUsj() {
      return r.current?.getUsj();
    },
    commitPendingMarkerEdits() {
      r.current?.commitPendingMarkerEdits();
    },
    setTransientInput(_) {
      r.current?.setTransientInput(_);
    },
    setUsj(_) {
      r.current?.setUsj(_);
    },
    applyUpdate(_, j) {
      r.current?.applyUpdate(_, j);
    },
    replaceEmbedUpdate(_, j) {
      return r.current?.replaceEmbedUpdate(_, j);
    },
    getSelection() {
      return r.current?.getSelection();
    },
    setSelection(_) {
      r.current?.setSelection(_);
    },
    setAnnotation(_, j, $, ne, fe) {
      typeof ne == "function" || ne === void 0 ? r.current?.setAnnotation(_, j, $, ne, fe) : r.current?.setAnnotation(_, j, $, ne);
    },
    removeAnnotation(_, j) {
      r.current?.removeAnnotation(_, j);
    },
    getAnnotationRanges(_, j) {
      return r.current?.getAnnotationRanges(_, j) ?? [];
    },
    formatPara(_) {
      r.current?.formatPara(_);
    },
    getElementByKey(_) {
      return r.current?.getElementByKey(_);
    },
    removeCharacterMarker(_) {
      return r.current?.removeCharacterMarker(_) ?? !1;
    },
    replaceCharacterMarker(_, j) {
      return r.current?.replaceCharacterMarker(_, j) ?? !1;
    },
    extendCharacterMarker(_, j) {
      return r.current?.extendCharacterMarker(_, j) ?? !1;
    },
    insertMarker(_) {
      return r.current?.insertMarker(_);
    },
    getMarkerMenuContext() {
      return r.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(_, j) {
      return r.current?.applyMarkerMenuSelection(_, j);
    },
    splitParagraphWithMarker(_) {
      r.current?.splitParagraphWithMarker(_);
    },
    commitTypedMarker(_, j) {
      return r.current?.commitTypedMarker(_, j) ?? !1;
    },
    commitTypedCloser(_) {
      return r.current?.commitTypedCloser(_) ?? !1;
    },
    insertNote(_, j, $) {
      r.current?.insertNote(_, j, $);
    },
    selectNote(_) {
      r.current?.selectNote(_);
    },
    selectAfterNote(_) {
      r.current?.selectAfterNote(_);
    },
    selectNoteTextOffset(_, j, $) {
      r.current?.selectNoteTextOffset(_, j, $);
    },
    getNoteOps(_) {
      return r.current?.getNoteOps(_);
    },
    getOpsAfterNote(_) {
      return r.current?.getOpsAfterNote(_);
    },
    takeOpsAfterNote(_) {
      return r.current?.takeOpsAfterNote(_);
    },
    getNoteIndex(_) {
      return r.current?.getNoteIndex(_);
    },
    getNoteKey(_) {
      return r.current?.getNoteKey(_);
    },
    highlightNote(_) {
      r.current?.highlightNote(_);
    },
    setComments(_) {
      y.current?.setComments(_), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const x = _e(
    (_, j, $, ne) => {
      if (!u) return;
      const fe = y.current?.getComments();
      u(_, fe, j, $, ne);
    },
    [y, u]
  ), A = _e(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const _ = y.current?.getComments();
    l(_);
  }, [y, i, l]);
  return H(() => (a(r.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ P(zS, { children: /* @__PURE__ */ Xe(Ov, { ref: r, onUsjChange: x, ...d, children: [
    /* @__PURE__ */ P(
      vq,
      {
        setCommentStore: k,
        onChange: A,
        showCommentsContainerRef: m ? null : f ?? o,
        commentContainerRef: s,
        logger: d.logger
      }
    ),
    /* @__PURE__ */ P("div", { ref: s, className: "comment-container" })
  ] }) });
});
function Pi(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function Eq(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function Aq(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const Pq = /^[#\w().,%/\s-]+$/;
function Rr(e) {
  return e != null;
}
const wq = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, Nq = {
  left: "right",
  right: "left"
}, Oq = "var(--usj-font-fallback, serif)";
function Uv(e, t) {
  const n = [e];
  return t && t !== e && n.push(t), `font-family: ${n.map((i) => `"${Eq(i)}"`).join(", ")}, ${Oq}`;
}
const qf = ".editor-input.usfm", $q = /^[\w.#[\]="':()>+~*,\s-]+$/;
function Rq(e) {
  return $q.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${qf}".`
  ), qf);
}
function Iq(e, t, n, r, i) {
  const s = [];
  if (t.fontName && s.push(Uv(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (Pq.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Rr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Rr(t.firstLineIndent) && s.push(`text-indent: ${Pi(t.firstLineIndent * 20 * n)}vw`), Rr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${r ? "right" : "left"}: ${Pi(t.leftMargin * 20 * n)}vw`), Rr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${r ? "left" : "right"}: ${Pi(t.rightMargin * 20 * n)}vw`
  ), Rr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${Pi(t.spaceBefore * n)}pt`), Rr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${Pi(t.spaceAfter * n)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = wq[r ? Nq[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const hy = { c: 150, ca: 133, cp: 150 };
function gy(e, t) {
  return e && Rr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function Lq(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Rr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const r = gy(e.markers.c, hy.c);
  return ["ca", "cp"].map((i) => {
    const s = gy(
      e.markers[i],
      hy[i]
    ), o = Pi(s * 100 / r);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function bD(e, t = {}) {
  const { zoom: n = 1, rtl: r = !1, containerSelector: i = qf } = t, s = Rq(i), o = [], a = [];
  e.defaultFont && a.push(Uv(e.defaultFont)), Rr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Pi(e.defaultFontSize * n)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = Iq(c, l, n, r, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${Aq(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...Lq(e, s)), o.join(`
`);
}
export {
  qk as BLOCK_VERSE_VIEW_MODE,
  v as CategoryType,
  mD as Editorial,
  Lo as GENERATOR_NOTE_CALLER,
  qy as HIDDEN_NOTE_CALLER,
  yD as Marginal,
  T as MarkerType,
  Lk as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Yd as STANDARD_VIEW_MODE,
  rc as defaultStyleInfo,
  gD as directionToNames,
  CP as filterAndRankItems,
  bD as generateUsjCss,
  pD as getDefaultViewMode,
  Qc as getDefaultViewOptions,
  ER as getEnterMenuItems,
  MR as getMarkerMenuItems,
  hD as getViewMode,
  Zd as getViewOptions,
  Wo as isBlockVerseLayout,
  Xr as isInsertEmbedOpOfType,
  xA as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
