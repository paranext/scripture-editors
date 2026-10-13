import { jsx as P, jsxs as Xe, Fragment as Li } from "react/jsx-runtime";
import { forwardRef as hi, useState as Ae, useRef as te, useCallback as _e, useEffect as H, useMemo as ut, memo as sS, createContext as by, useContext as ky, Children as oS, isValidElement as aS, cloneElement as cS, useLayoutEffect as js, useImperativeHandle as Nc } from "react";
import { assertSafeKey as kt, isValidBookCode as lS, MARKER_OBJECT_PROPS as uS, USJ_VERSION as tr, USJ_TYPE as nr, indexesFromUsjJsonPath as $n, isUsjTextContentLocation as Ir, usjJsonPathFromIndexes as Nt, isUsjPropertyValueLocation as No, isUsjClosingMarkerLocation as ws, isUsjClosingAttributeMarkerLocation as Oo, isUsjAttributeKeyLocation as $o, isUsjAttributeMarkerLocation as Oc, isUsjMarkerLocation as Kf, getUsjDocumentLocationTypeName as fS, EMPTY_USJ as xy } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as yt, $parseSerializedNode as Lr, createCommand as Uf, DecoratorNode as na, ElementNode as cr, isHTMLElement as Gi, TextNode as it, $isRangeSelection as E, $getEditor as Ut, $getNodeByKey as X, $isTextNode as C, createState as Vs, $getState as de, $getSelection as w, $isNodeSelection as $c, ParagraphNode as Bf, $isRootNode as Mn, HISTORIC_TAG as Rc, $createTextNode as Re, $setState as Ht, $isElementNode as A, $getCommonAncestor as dS, $isLineBreakNode as Ji, NODE_STATE_KEY as qr, $isDecoratorNode as yn, $addUpdateTag as jt, $getRoot as Ee, $createRangeSelection as Dr, $createPoint as Qt, $setSelection as Un, SELECTION_CHANGE_COMMAND as hn, $getCharacterOffsets as Ff, KEY_DOWN_COMMAND as _r, COMMAND_PRIORITY_HIGH as Ge, SELECTION_INSERT_CLIPBOARD_NODES_COMMAND as pS, COMMAND_PRIORITY_CRITICAL as He, $getNearestNodeFromDOMNode as Yi, HISTORY_MERGE_TAG as zf, CLICK_COMMAND as Ic, COMMAND_PRIORITY_EDITOR as qi, DELETE_CHARACTER_COMMAND as Lc, DELETE_WORD_COMMAND as jf, DELETE_LINE_COMMAND as Wa, COMMAND_PRIORITY_NORMAL as kr, CONTROLLED_TEXT_INSERTION_COMMAND as ra, PASTE_COMMAND as Zn, CUT_COMMAND as rr, REMOVE_TEXT_COMMAND as Ty, isDOMNode as Cy, DROP_COMMAND as Vf, COPY_COMMAND as Ns, COMMAND_PRIORITY_LOW as Xt, getDOMSelection as hS, isSelectionWithinEditor as vy, $createRangeSelectionFromDom as Sy, isDOMTextNode as gS, BLUR_COMMAND as Wf, SKIP_DOM_SELECTION_TAG as Or, CLEAR_HISTORY_COMMAND as mS, INSERT_PARAGRAPH_COMMAND as Ro, INSERT_LINE_BREAK_COMMAND as yS, SELECT_ALL_COMMAND as _y, $selectAll as bS, $isRootOrShadowRoot as Hf, CAN_UNDO_COMMAND as kS, CAN_REDO_COMMAND as xS, DRAGSTART_COMMAND as TS, $createNodeSelection as My, $hasUpdateTag as CS, getDOMSelectionFromTarget as vS, $onUpdate as Ey, KEY_ENTER_COMMAND as Ay, LineBreakNode as Py, $copyNode as SS, FOCUS_COMMAND as _S, createEditor as Gf, isExactShortcutMatch as MS, getDOMTextNode as ES, KEY_ESCAPE_COMMAND as wy, UNDO_COMMAND as Ny, REDO_COMMAND as Oy, CLEAR_EDITOR_COMMAND as AS } from "lexical";
import { addClassNamesToElement as yo, removeClassNamesFromElement as $a, $findMatchingParent as Qe, $dfsIterator as qc, $dfs as Xi, mergeRegister as et, registerNestedElementResolver as Jf, $unwrapNode as bu, IS_APPLE as Os } from "@lexical/utils";
import { useLexicalNodeSelection as PS } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as yr } from "fast-equals";
import Cs from "quill-delta";
import { useLexicalComposerContext as Ce } from "@lexical/react/LexicalComposerContext";
import { graphemeSegments as wS } from "unicode-segmenter/grapheme";
import { copyToClipboard as NS, $getLexicalContent as OS } from "@lexical/clipboard";
import { TreeView as $S } from "@lexical/react/LexicalTreeView";
import * as RS from "react-dom";
import { createPortal as Ni } from "react-dom";
import { LexicalComposer as $y } from "@lexical/react/LexicalComposer";
import { ContentEditable as Ry } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Iy } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Ly } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as qy } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as IS } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as LS, createDOMRange as qS, createRectsFromDOMRange as DS } from "@lexical/selection";
import { autoUpdate as KS, computePosition as US, shift as BS, flip as FS } from "@floating-ui/dom";
import { $generateNodesFromDOM as zS } from "@lexical/html";
import { AutoFocusPlugin as jS } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as VS } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Dy, LexicalCollaboration as WS } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as HS } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as GS } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as JS, $isRootTextContentEmpty as YS } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as XS } from "@lexical/yjs";
import { Array as Mh, Map as Eh, YArrayEvent as QS } from "yjs";
const Ol = (e) => yt(Lr(e)), ZS = {
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
function Yf(e) {
  return ZS[e];
}
const q = " ", Io = "​", Pt = q, Xf = `${q}|`, Bn = "p", Lo = "+", Ky = "-", gi = "immutable-note-caller", Uy = "immutable-verse", Ha = "chapter", ku = "verse", Ah = "invalid", e_ = "text-spacing", t_ = "formatted-font", n_ = "marker-", ia = "external-usj-mutation", r_ = "selection-change", $i = "cursor-change", Qf = Uf("APP_PLACED_CARET_COMMAND"), xu = "annotation-change", Ra = "typed-mark-wrap", Zf = "delta-change", By = "marker-settle", i_ = [
  ia,
  r_,
  $i,
  xu,
  Zf
], Fy = 2, Di = "zmsc-s", _s = "zmsc-e", s_ = [Di, _s], o_ = [
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
  Di,
  _s
], zy = 1, ed = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], a_ = ed.filter((e) => e !== "sid" && e !== "eid");
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
    return Vy().updateFromJSON(t);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (o_.includes(t) || t.startsWith("z") || (n?.includes(t) ?? !1));
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
      version: zy
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function jy(e) {
  return s_.includes(e);
}
function Vy(e, t, n, r, i) {
  return yt(new ir(e, t, n, r, void 0, i));
}
function Ke(e) {
  return e instanceof ir;
}
const td = "f", c_ = [
  // Footnote
  td,
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
const l_ = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Wy = 1;
class tt extends cr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = td, n, r = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = n ?? (va(t) === "crossref" ? Ky : Lo), this.__isCollapsed = r, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => f_(t) ? {
        conversion: u_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return nd().updateFromJSON(t);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (c_.includes(t) || (n?.includes(t) ?? !1));
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
    return n && Gi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), n.setAttribute("data-caller", this.getCaller()), n.setAttribute("data-note-kind", va(this.getMarker()))), { element: n };
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
      version: Wy
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
function u_(e) {
  const t = e.getAttribute("data-marker") ?? "f", n = e.getAttribute("data-caller") ?? "", r = e.classList.contains("collapsed");
  return { node: nd(t, n, r) };
}
function nd(e, t, n, r, i) {
  return yt(new tt(e, t, n, r, i));
}
function f_(e) {
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
const Tu = {
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
}, Ci = {
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
}, Ph = {
  p: { children: Ci },
  q: { children: Ci },
  q1: { children: Ci },
  q2: { children: Ci },
  q3: { children: Ci },
  q4: { children: Ci },
  b: { children: Ci },
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
  const t = Object.hasOwn(Tu, e) ? Tu[e] : void 0, n = Object.hasOwn(Ph, e) ? Ph[e] : void 0;
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
const sa = "￼", Hy = "v", Gy = "c", vi = "fig", wh = "tr", Cu = "esb", Jy = "esbe", Nh = "periph", Oh = "alt", $h = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, d_ = {
  "": "start",
  c: "center",
  r: "end"
};
function Rh(e) {
  const [, , t, n] = e;
  return n ? /^[1-5]$/.test(t) && /^[2-5]$/.test(n) && Number(n) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Ih(e) {
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
const p_ = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function h_(e) {
  let t = "", n = !1, r = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (n || (i = t.length, t += " "), n = !0) : !n && o === Io && s + 1 < e.length && Ih(e[s + 1]) || (Ih(o) ? (n || (i = t.length, t += o), n = !0) : p_.test(o) && o === r || (t += o, n = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), r = o;
  }
  return t;
}
function g_(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function m_(e, t) {
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
function y_(e, t, n) {
  if (!n || !/^[\s\u00A0\u200B]*$/.test(e.slice(0, t)))
    return !1;
  const r = e[t + 1];
  return r === void 0 || r === "\\" || /[\s\u00A0\u200B]/.test(r);
}
const b_ = /^(?:qt[1-5]?|ts)-[se]$/;
function rd(e) {
  return b_.test(e) || jy(e);
}
function $l(e, t) {
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
function k_(e, t) {
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
function x_(e, t, n, r, i) {
  const s = [];
  let o = 0;
  const a = k_(e, r);
  let c = 0, l;
  const u = (d) => {
    if (!d)
      return;
    const p = s[s.length - 1];
    p?.kind === "text" ? p.text += d : s.push({ kind: "text", text: d });
  }, f = (d) => {
    d.split("//").forEach((h, g) => {
      g > 0 && s.push({ kind: "optbreak" }), u(h);
    });
  };
  for (; o < e.length; ) {
    if (e[o] !== "\\") {
      for (; c < a.length && a[c] < o; )
        c++;
      if (a[c] === o) {
        l = void 0, s.push({ kind: "noteEndingPlaceholder" }), o++;
        continue;
      }
      const x = e.indexOf("\\", o);
      let S = x === -1 ? e.length : x;
      c < a.length && (S = Math.min(S, a[c])), f(h_(e.slice(o, S))), o = S;
      continue;
    }
    const d = o, { name: p, next: h } = m_(e, o + 1);
    o = h;
    const g = () => {
      for (; o < e.length && /[\s\u00A0\u200B]/.test(e[o]); )
        o++;
    };
    if (p === "") {
      if (y_(e, d, i)) {
        g(), s.push({ kind: "para", marker: "" });
        continue;
      }
      u(e.slice(d, o));
      continue;
    }
    if (p === "*") {
      s.push({ kind: "end", marker: "" });
      continue;
    }
    if (p.endsWith("*")) {
      p.slice(0, -1) === l && (l = void 0), s.push({ kind: "end", marker: p.slice(0, -1) });
      continue;
    }
    if (p === Hy) {
      const { word: x, next: S } = $l(e, o);
      o = S, s.push({ kind: "verse", number: x });
      continue;
    }
    if (p === Gy) {
      const { word: x, next: S } = $l(e, o);
      o = S, l = void 0, s.push({ kind: "chapter", number: x });
      continue;
    }
    const m = p.startsWith("+"), y = m ? p.slice(1) : p, k = t(y)?.type;
    if (k === T.Note || k === void 0 && tt.isValidMarker(p)) {
      const { word: x, next: S } = $l(e, o);
      o = S, l = p, s.push({ kind: "note", marker: p, caller: x });
      continue;
    }
    if (k === T.Milestone || k === void 0 && rd(p)) {
      const x = P_(e, d, p, o);
      if (x)
        s.push(x.token), x.ejectedText && u(x.ejectedText), o = x.next;
      else {
        const S = e.indexOf("\\", o), _ = S === -1 ? e.length : S;
        u(e.slice(d, _)), o = _;
      }
      continue;
    }
    k === T.Paragraph ? (g(), s.push({ kind: "para", marker: p })) : k === T.Character ? (g(), s.push({ kind: "charOpen", marker: y, isNested: m })) : Ga(y) ? (g(), Ga(y)?.shape === "para" ? s.push({ kind: "para", marker: p }) : s.push({ kind: "charOpen", marker: y, isNested: m })) : (g(), !(n || l !== void 0) || p === Cu || p === Jy ? s.push({ kind: "para", marker: p }) : s.push({ kind: "charOpen", marker: y, isNested: m }));
  }
  return s;
}
const Lh = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
}, T_ = {
  chapter: ["ca", "cp"],
  verse: ["va", "vp"],
  note: ["cat"],
  sidebar: ["cat"]
};
function Ga(e) {
  return Object.hasOwn(Lh, e) ? Lh[e] : void 0;
}
function C_(e) {
  return Ga(e) !== void 0;
}
const v_ = /([-\w]+)\s*=\s*"(.*?)"/g, S_ = /[\s\u200B]*[\n\r][\s\u200B]*/g, Yy = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Ws(e) {
  return Yy[e];
}
const __ = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function M_(e, t) {
  let n = 0;
  for (const r of t) {
    const i = r.index;
    if (i === void 0 || e.slice(n, i).trim() !== "")
      return !1;
    n = i + r[0].length;
  }
  return e.slice(n).trim() === "";
}
function qo(e, t, n = Yy[t]) {
  const r = e.replace(S_, " "), i = /* @__PURE__ */ Object.create(null), s = [...r.matchAll(v_)];
  if (s.length > 0) {
    if (!M_(r, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      __.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (r.trim() && n)
    return { [n]: r };
}
function oa(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function E_(e) {
  const t = Dc(e)[0], n = typeof t == "object" && "content" in t ? t.content : void 0;
  return n ? n.some((r, i) => typeof r != "object" || r.type !== "ms" || typeof n[i + 1] != "string" ? !1 : n.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function A_(e, t, n) {
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
function P_(e, t, n, r) {
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
  const l = A_(e, i + 2, n);
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
function Dc(e, t) {
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
  }, S = (he, F, oe) => {
    y();
    const [, ve, We, ct] = oe, bt = {
      type: "table:cell",
      marker: ct ? F.slice(0, F.indexOf("-")) : F,
      align: d_[ve],
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
  }, ye = (he, F) => {
    p = !1, x(), y(), k(!1), i = { type: "para", marker: he, content: [] }, F && (i.content = [gr(F)]), d().push(i);
  }, nt = () => {
    K && (ye(K.marker, K.value), K = void 0);
  };
  let rt;
  const rn = (he) => {
    if (!rt)
      return;
    let { value: F } = rt;
    rt = void 0, he && F.endsWith(`
`) && (F = F.slice(0, -1));
    const oe = F.indexOf("|"), ve = oe >= 0 ? qo(F.slice(oe + 1), Nh) : void 0, We = oe >= 0 ? F.slice(0, oe) : F, ct = oe >= 0 && (!ve || !!We && !!ve[Oh]), bt = ct ? void 0 : ve, Tn = ct ? F : We, ee = {
      type: "periph",
      ...Tn ? { [Oh]: gr(Tn) } : {},
      ...bt
    };
    ee.content = [], d().push(ee), f = ee, i = void 0;
  };
  let Je;
  const dr = () => {
    if (Je) {
      if (Je.shape === "para")
        ye(vi, Je.value);
      else {
        const he = { type: "char", marker: vi, content: [] };
        Je.value && (he.content = [gr(Je.value)]), h().push(he), o.push({ object: he });
      }
      Je = void 0;
    }
  }, xn = x_(e, t?.getMarker ?? xr, r, t?.placeholders ?? [], !r && t?.opensNamelessParagraph === !0);
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
        oe === "" ? (ye(K.marker), K = void 0) : (Object.assign(K.target, { [K.attrName]: gr(oe) }), K = void 0);
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
      if (F.kind === "end" && F.marker.replace(/^\+/, "") === vi) {
        const oe = Je.value.indexOf("|"), ve = oe >= 0 ? qo(Je.value.slice(oe + 1), vi) : void 0;
        if (ve) {
          const We = {};
          for (const [Tn, ee] of Object.entries(ve))
            We[Tn === "src" ? "file" : Tn] = ee;
          const ct = {
            type: "figure",
            marker: vi,
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
        const oe = F.kind === "para" || !F.isNested ? Ga(F.marker) : void 0, ve = T_[$.type]?.indexOf(F.marker) ?? -1;
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
    if (!s && !r && (F.kind === "charOpen" && !F.isNested && F.marker === vi || F.kind === "para" && F.marker === vi)) {
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
        if (oe && F.marker === wh) {
          y(), c || (c = { type: "table", content: [] }, d().push(c)), l = { type: "table:row", marker: wh, content: [] }, Jr(c).push(l), i = l, p = !1;
          break;
        }
        if (oe && l) {
          const ve = $h.exec(F.marker);
          if (ve && Rh(ve)) {
            S(l, F.marker, ve);
            break;
          }
        }
        if (x(), !r && F.marker === Cu) {
          y(), k(!1), _(!1);
          const ve = {
            type: "sidebar",
            marker: Cu,
            content: []
          };
          d().push(ve), u = ve, i = void 0, fe(u), p = !1;
          break;
        }
        if (F.marker === Jy && u) {
          y(), k(!1), _(!0), i = void 0;
          break;
        }
        if (!r && F.marker === Nh) {
          y(), k(!1), _(!1), j(), rt = { value: "" }, i = void 0, p = !1;
          break;
        }
        ye(F.marker);
        break;
      }
      case "verse": {
        k(!1);
        const oe = { type: "verse", marker: Hy, number: F.number };
        g(oe), fe(oe);
        break;
      }
      case "chapter": {
        y(), k(!1), x(), _(!1), j(), i = void 0;
        const oe = {
          type: "chapter",
          marker: Gy,
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
          const We = $h.exec(F.marker);
          if (We && Rh(We)) {
            S(l, F.marker, We);
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
        We >= 0 ? (w_(o[We].object), m(We + 1), o.length = We) : s && s.marker === oe ? k(!0) : (m(ve), o.length = ve, g({ type: "unmatched", marker: `${F.marker}*` }));
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
      he === "" ? ye(K.marker) : Object.assign(K.target, { [K.attrName]: gr(he) }), K = void 0;
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
function w_(e) {
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
function qh(e, t) {
  return e === t || (e === " " || e === q) && (t === " " || t === q);
}
function Kc(e, t) {
  const n = vt(t);
  let r = 0;
  for (; r < e.length && r < n.length && qh(e[r], n[r]); )
    r += 1;
  let i = 0;
  for (; i < e.length - r && i < n.length - r && qh(e[e.length - 1 - i], n[n.length - 1 - i]); )
    i += 1;
  return { start: r, end: e.length - i, missing: r + i < n.length };
}
function id(e, t) {
  const { start: n, end: r } = Kc(e, t);
  return e.slice(n, r).replaceAll(q, " ");
}
const N_ = 1;
class Wn extends it {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", n = "opening", r, i = !1) {
    super(Ai(t, n, i), r), this.__marker = t, this.__markerSyntax = n, this.__nested = i;
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
      text: t.text || Ai(n, r, i)
    }).getWritable();
    return o.__marker = n, o.__markerSyntax = r, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n.__text = Ai(t, n.__markerSyntax, n.__nested), n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const n = this.getWritable();
    return n.__markerSyntax = t, n.__text = Ai(n.__marker, t, n.__nested), n;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const n = this.getWritable();
    return n.__nested = t, n.__text = Ai(n.__marker, n.__markerSyntax, t), n;
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
      version: N_
    };
  }
}
function $t(e, t, n) {
  return yt(new Wn(e, t, void 0, n));
}
function N(e) {
  return e instanceof Wn;
}
function Hs(e) {
  return e?.type === Wn.getType();
}
function lr(e) {
  return e.getTextContent() === Ai(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function O_(e) {
  e.setTextContent(Ai(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Ai(e, t, n = !1) {
  return t === "closing" ? st(e, n) : t === "selfClosing" ? st("") : Ve(e, n);
}
const Vt = "internal-comment", $_ = [Vt], Xy = Object.freeze({}), vu = Object.freeze({}), Su = Object.freeze({}), _u = Object.freeze({}), Mu = Object.freeze({}), R_ = 1, _i = /* @__PURE__ */ new Map(), ms = /* @__PURE__ */ new Map(), Mi = /* @__PURE__ */ new Map(), Ei = /* @__PURE__ */ new Map(), Do = /* @__PURE__ */ new WeakMap(), Ko = /* @__PURE__ */ new WeakMap();
function I_(e) {
  return Do.set(e, []), Ko.set(e, /* @__PURE__ */ new Map()), () => {
    Do.delete(e), Ko.delete(e);
  };
}
function L_(e) {
  const t = Do.get(e);
  return t ? (Do.set(e, []), t) : [];
}
const Ja = /* @__PURE__ */ new WeakMap();
function Ia(e, t) {
  return JSON.stringify([e, t]);
}
function Dh(e, t, n, r) {
  let i = Ja.get(e);
  r ? (i || Ja.set(e, i = /* @__PURE__ */ new Set()), i.add(Ia(t, n))) : (i?.delete(Ia(t, n)), Ko.get(e)?.delete(Ia(t, n)));
}
function q_(e) {
  Ja.delete(e), Ko.get(e)?.clear();
}
function Sa(e, t, n, r) {
  const i = e.get(t), s = i?.[n];
  if (!i || !s || !(r in s))
    return;
  const o = mr(s, r), a = Object.keys(o).length > 0 ? { ...i, [n]: o } : mr(i, n);
  Object.keys(a).length > 0 ? e.set(t, a) : e.delete(t);
}
function D_(e, t, n) {
  Sa(_i, e, t, n), Sa(ms, e, t, n), Sa(Mi, e, t, n), Sa(Ei, e, t, n);
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
  constructor(t = Xy, n, r, i, s, o) {
    super(o), this.__typedIDs = _a(t), this.__typedOnClicks = Rl(n), this.__typedOnRemoves = Il(r), this.__typedOnMouseEnters = Ll(i), this.__typedOnMouseLeaves = ql(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const n = _a(t.__typedIDs), r = Rl(t.__typedOnClicks), i = Il(t.__typedOnRemoves), s = Ll(t.__typedOnMouseEnters), o = ql(t.__typedOnMouseLeaves);
    return new gt(n, r, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return $_.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Ki().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: R_
    };
  }
  createDOM(t, n) {
    const r = document.createElement("mark");
    yo(r, ...Qy(t.theme, this.__typedIDs));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = Oi(r.theme.typedMark, s), f = Oi(r.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && yo(n, u) : l === 0 && $a(n, u), c === 1 ? l === 2 && yo(n, f) : l === 1 && $a(n, f));
      const d = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || $a(n, Oi("annotationId", h));
      for (const h of a)
        d.has(h) || yo(n, Oi("annotationId", h));
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
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Eu(i), i;
  }
  setTypedOnClicks(t) {
    const n = this.getWritable();
    return n.__typedOnClicks = Rl(t), n.pruneTypedOnClicks(), n.syncTypedOnClicksToRegistry(), n;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return ue(t) ? _i.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const n = this.getWritable();
    return n.__typedOnRemoves = Il(t), n.pruneTypedOnRemoves(), n.syncTypedOnRemovesToRegistry(), n;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return ue(t) ? ms.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const n = this.getWritable();
    return n.__typedOnMouseEnters = Ll(t), n.pruneTypedOnMouseEnters(), n.syncTypedOnMouseEntersToRegistry(), n;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return ue(t) ? Mi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const n = this.getWritable();
    return n.__typedOnMouseLeaves = ql(t), n.pruneTypedOnMouseLeaves(), n.syncTypedOnMouseLeavesToRegistry(), n;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return ue(t) ? Ei.get(t.getKey()) ?? {} : {};
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Eu(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, n = !0) {
    const r = Ki(this.__typedIDs, this.getTypedOnClicks());
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
    if (!E(n) || r === "html")
      return !1;
    const i = n.anchor, s = n.focus, o = i.getNode(), a = s.getNode(), l = n.isBackward() ? i.offset - s.offset : s.offset - i.offset;
    return this.isParentOf(o) && this.isParentOf(a) && this.getTextContent().length === l;
  }
  excludeFromCopy(t) {
    return t !== "clone";
  }
  remove(t) {
    const n = this.getWritable(), r = this.getTypedIDs();
    n.__suppressOnRemoveCallbacks ? n.__suppressOnRemoveCallbacks = void 0 : n.dispatchOnRemoveForTypedIDs(r, "destroyed"), _i.delete(n.getKey()), ms.delete(n.getKey()), Mi.delete(n.getKey()), Ei.delete(n.getKey()), n.__typedOnClicks = void 0, n.__typedOnRemoves = void 0, n.__typedOnMouseEnters = void 0, n.__typedOnMouseLeaves = void 0, super.remove.call(n, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (n) => {
      this.handleDOMClick(n, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, n) {
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
  getOrCreateDOMMouseEnterListener(t) {
    return this.__domOnMouseEnterListener || (this.__domOnMouseEnterListener = (n) => {
      this.handleDOMMouseEnter(n, t);
    }), this.__domOnMouseEnterListener;
  }
  handleDOMMouseEnter(t, n) {
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
  getOrCreateDOMMouseLeaveListener(t) {
    return this.__domOnMouseLeaveListener || (this.__domOnMouseLeaveListener = (n) => {
      this.handleDOMMouseLeave(n, t);
    }), this.__domOnMouseLeaveListener;
  }
  handleDOMMouseLeave(t, n) {
    const r = Ei.get(this.getKey());
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === vu) {
      const t = _i.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      _i.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    _i.set(this.getKey(), this.__typedOnClicks);
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
    if (!this.__typedOnClicks || this.__typedOnClicks === vu) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Su) {
      const t = ms.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      ms.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    ms.set(this.getKey(), this.__typedOnRemoves);
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
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Su) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === _u) {
      const t = Mi.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      Mi.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    Mi.set(this.getKey(), this.__typedOnMouseEnters);
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
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === _u) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Mu) {
      const t = Ei.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Ei.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Ei.set(this.getKey(), this.__typedOnMouseLeaves);
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
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Mu) {
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
    const o = Ut(), a = Ia(t, n), c = Ko.get(o);
    if (Ja.get(o)?.has(a) || c?.get(a)?.has(this.getKey())) {
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
    const i = K_(t, n);
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
    for (; ue(t) && Uh(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let n = this.getNextSibling();
    for (; ue(n) && Uh(this.getTypedIDs(), n.getTypedIDs()); )
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
    const n = U_(this.getTypedOnClicks(), t);
    Object.keys(n).length !== 0 && this.setTypedOnClicks(n);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = B_(this.getTypedOnRemoves(), t);
    Object.keys(n).length !== 0 && this.setTypedOnRemoves(n);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = F_(this.getTypedOnMouseEnters(), t);
    Object.keys(n).length !== 0 && this.setTypedOnMouseEnters(n);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = z_(this.getTypedOnMouseLeaves(), t);
    Object.keys(n).length !== 0 && this.setTypedOnMouseLeaves(n);
  }
}
function _a(e = Xy) {
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
function ql(e) {
  if (!e || e === Mu)
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
function Kh(e) {
  const t = {};
  for (const [n, r] of Object.entries(e))
    !r || r.length === 0 || (t[n] = [...r].sort());
  return t;
}
function K_(e, t) {
  const n = [];
  for (const [r, i] of Object.entries(e)) {
    const s = new Set(t[r] ?? []);
    for (const o of i ?? [])
      s.has(o) || n.push([r, o]);
  }
  return n;
}
function Uh(e, t) {
  const n = Kh(e), r = Kh(t), i = Object.keys(n).sort(), s = Object.keys(r).sort();
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
function U_(e, t) {
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
function B_(e, t) {
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
function F_(e, t) {
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
function z_(e, t) {
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
function Oi(e, t) {
  return `${e}-${t}`;
}
function Qy(e, t) {
  const n = [];
  for (const [r, i] of Object.entries(t)) {
    n.push(Oi(e.typedMark, r)), i.length > 1 && n.push(Oi(e.typedMarkOverlap, r));
    for (const s of i)
      n.push(Oi("annotationId", s));
  }
  return n;
}
function Dl(e) {
  return `external-${e}`;
}
function Ki(e, t, n, r, i) {
  return yt(new gt(e, t, n, r, i));
}
function ue(e) {
  return e instanceof gt;
}
function si(e) {
  return e?.type === gt.getType();
}
function Zy(e, t, n) {
  let r = 0;
  for (const i of n) {
    const s = X(i);
    !ue(s) || !s.hasID(e, t) || (r++, s.deleteID(e, t), s.hasNoIDsForEveryType() && Eu(s));
  }
  return r;
}
function Eu(e) {
  const t = e.getChildren();
  let n = null;
  for (const r of t)
    n === null ? e.insertBefore(r) : n.insertAfter(r), n = r;
  e.remove();
}
function j_(e, t, n) {
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
const Ui = Vs("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), oi = Vs("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ke = Vs("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Mr = "marker-trailing-space", eb = 1, V_ = "attribute-run";
function Kl(e) {
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
    return tb(t.runKind).updateFromJSON(t);
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
    t.classList.add(V_);
    const n = Kl(this.__runKind);
    return n !== void 0 && t.classList.add(n), t;
  }
  updateDOM(t, n) {
    if (t.__runKind !== this.__runKind) {
      const r = Kl(t.__runKind);
      r !== void 0 && n.classList.remove(r);
      const i = Kl(this.__runKind);
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
      version: eb
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
function tb(e) {
  return yt(new Er(e));
}
function Be(e) {
  return e instanceof Er;
}
const nb = [
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
], rb = [
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
], W_ = [
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
  ...nb,
  ...rb
], ib = 1, H_ = ["type", "marker", "content"];
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
    return t !== void 0 && (W_.includes(t) || (n?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && nb.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && rb.includes(t);
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
      span: (t) => J_(t) ? {
        conversion: G_,
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
    return Bh(n, this.__marker, t), n.classList.add(this.__type), n;
  }
  updateDOM(t, n, r) {
    return t.__marker !== this.__marker && (n.classList.remove(`usfm_${t.__marker}`), Bh(n, this.__marker, r)), !1;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Gi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: n };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: ib
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
function Bh(e, t, n) {
  e.setAttribute("data-marker", t), n.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function G_(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Kr(t) };
}
function Kr(e, t) {
  return yt(new ze(e, t));
}
function J_(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ze.isValidMarker(t) && e.classList.contains(ze.getType());
}
function U(e) {
  return e instanceof ze;
}
function sb(e) {
  return e?.type === ze.getType();
}
const Ya = "v", ob = 1, Y_ = [
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
    super(n ?? t, a), this.__marker = Ya, this.__number = t, this.__sid = r, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: n, __text: r, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Kt(n, r, i, s, o, a, c);
  }
  static importJSON(t) {
    return ab().updateFromJSON(t);
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
    return n.setAttribute("data-marker", this.__marker), n.classList.add(ku, `usfm_${this.__marker}`), n.setAttribute("data-number", this.__number), n;
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
      version: ob
    };
  }
}
function ab(e, t, n, r, i, s) {
  return yt(new Kt(e, t, n, r, i, s));
}
function Ue(e) {
  return e instanceof Kt;
}
function sd(e) {
  return e?.type === Kt.getType();
}
const X_ = /* @__PURE__ */ new Set(["closed"]);
function Xn(e, t) {
  const n = Object.entries(e).filter(([r, i]) => i !== void 0 && !X_.has(r));
  return n.length === 0 ? "" : n.length === 1 && n[0][0] === t && n[0][1] !== "" ? `|${n[0][1]}` : `|${n.map(([r, i]) => `${r}="${i}"`).join(" ")}`;
}
function cb(e, t) {
  if (!t || t.length === 0)
    return e;
  const n = {};
  return t.forEach((r) => {
    Object.hasOwn(e, r) && (n[r] = e[r]);
  }), Object.entries(e).forEach(([r, i]) => {
    Object.hasOwn(n, r) || (n[r] = i);
  }), n;
}
function lb(e) {
  const t = Object.keys(e).filter((r) => !a_.includes(r)), n = [
    ...t.filter((r) => r === "sid"),
    ...t.filter((r) => r === "eid"),
    ...t.filter((r) => r !== "sid" && r !== "eid")
  ];
  return t.every((r, i) => r === n[i]) ? void 0 : t;
}
function ub(e, t, n, r) {
  return cb(
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
  return e.getChildren().find((t) => N(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function Q_(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((r) => r !== "closed") ? !1 : Co(e) === void 0 && fb(e) === void 0;
}
function fb(e) {
  return e.getChildren().find((t) => C(t) && de(t, ke) === "attribute");
}
function Uo(e, t) {
  return aa(e.getNextSibling(), t);
}
const Z_ = /^[ \u00A0]+$/;
function od(e) {
  if (lr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Ve(e.getMarker(), e.getNested()), n = e.getTextContent();
  return n.startsWith(t) && Z_.test(n.slice(t.length));
}
function aa(e, t) {
  let n, r, i, s;
  return Be(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), N(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  od(e) && (n = e, e = e.getNextSibling()), C(e) && de(e, ke) === "attribute" && (r = e, e = e.getNextSibling()), N(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && lr(e) && (i = e), { opener: n, value: r, closer: i, wrapper: s };
}
function eM(e) {
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
    if (!N(i) || i.getMarkerSyntax() !== "opening")
      break;
    n++;
  }
  const r = eM(t[n]);
  if (!(!C(r) || r.getType() !== it.getType()))
    return r.getTextContent() === vt(e.getCaller()) || r.isUnmergeable() ? r : void 0;
}
function ca(e) {
  const t = St(e);
  return t ? aa(t.getNextSibling(), "cat") : {};
}
function mi(e) {
  const t = e.getFirstChild();
  if (!(!C(t) || N(t)) && de(t, ke) !== "attribute")
    return t;
}
function db(e) {
  const t = mi(e);
  return t ? aa(t.getNextSibling(), "ca") : {};
}
function pb(e) {
  const t = mi(e);
  if (!t)
    return;
  const n = aa(t.getNextSibling(), "ca");
  return n.wrapper ?? n.closer ?? t;
}
function hb(e) {
  const t = pb(e);
  return t ? aa(t.getNextSibling(), "cp") : {};
}
function gb(e) {
  const t = e.getParent();
  if (!U(t))
    return;
  const n = t.getMarker();
  if (!(n !== "va" && n !== "vp"))
    for (let r = t.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (Ue(r))
        return r;
      if (!(N(r) && (r.getMarker() === "va" || r.getMarker() === "vp") || C(r) && de(r, ke) === "attribute" || U(r) && (r.getMarker() === "va" || r.getMarker() === "vp") || Be(r)))
        return;
    }
}
function Uc(e) {
  let t, n, r, i, s = e.getNextSibling();
  return Be(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), N(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  od(s) && (t = s, s = s.getNextSibling()), C(s) && de(s, ke) === "attribute" && (n = s, s = s.getNextSibling()), N(s) && s.getMarkerSyntax() === "selfClosing" && lr(s) && (r = s), { opening: t, attribute: n, closing: r, wrapper: i };
}
const Xa = "c", mb = 1, tM = [
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
    super(o), this.__marker = Xa, this.__number = t, this.__sid = n, this.__altnumber = r, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: n, __sid: r, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Rn(n, r, i, s, o, a);
  }
  static importJSON(t) {
    return yb().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ha, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: mb
    };
  }
}
function yb(e, t, n, r, i) {
  return yt(new Rn(e, t, n, r, i));
}
function $e(e) {
  return e instanceof Rn;
}
function nM(e) {
  return e?.type === Rn.getType();
}
const rM = ["type", "marker", "content"], Au = "unknown", bb = 1, iM = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class Qi extends cr {
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
    return new Qi(n, r, i, s);
  }
  static importDOM() {
    return {
      [Au]: (t) => oM(t) ? {
        conversion: sM,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ad().updateFromJSON(t);
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
    return iM.has(this.getTag());
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
    const t = document.createElement(Au);
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
      version: bb
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
    const n = t ?? w();
    if (!n)
      return !1;
    if ($c(n) && super.isSelected(n))
      return !0;
    if (n.isCollapsed())
      return !1;
    const r = n.getNodes();
    return this.getChildren().some((i) => r.some((s) => s.is(i)));
  }
}
function sM(e) {
  const t = e.getAttribute("data-tag") ?? "", n = e.getAttribute("data-marker") ?? "";
  return { node: ad(t, n) };
}
function ad(e, t, n) {
  return yt(new Qi(e, t, n));
}
function oM(e) {
  return e?.tagName.toLowerCase() === Au;
}
function Ze(e) {
  return e instanceof Qi;
}
const kb = "table", Pu = "immutable-table", xb = 1, aM = ["type", "marker", "content"];
class Zi extends cr {
  __unknownAttributes;
  constructor(t, n) {
    super(n), this.__unknownAttributes = t;
  }
  static getType() {
    return Pu;
  }
  static clone(t) {
    return new Zi(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return cM().updateFromJSON(t);
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
      type: Pu,
      ...t !== void 0 && { unknownAttributes: t },
      version: xb
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function cM(e) {
  return yt(new Zi(e));
}
function Tb(e) {
  return e instanceof Zi;
}
function lM(e) {
  return e?.type === Pu;
}
function wu(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (Ze(t) || Tb(t))
      return !0;
  return !1;
}
const Cb = 1;
class ai extends Bf {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new ai(t.__key);
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
      version: Cb
    };
  }
  // Mutation
  insertNewAfter(t, n) {
    const r = zn();
    return r.setTextFormat(t.format), r.setTextStyle(t.style), r.setDirection(this.getDirection()), r.setFormat(this.getFormatType()), r.setStyle(this.getTextStyle()), this.insertAfter(r, n), r;
  }
}
function zn() {
  return yt(new ai());
}
function _t(e) {
  return e instanceof ai;
}
function Bc(e) {
  return e?.type === ai.getType();
}
function vb(e) {
  return _t(e) && Mn(e.getParent());
}
function cd(e) {
  return ue(e) || vb(e);
}
function In(e) {
  let t = e.getParent();
  for (; t && cd(t); )
    t = t.getParent();
  return t;
}
function Fc(e) {
  return U(In(e));
}
function ld(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const n = e.getMarker();
  return n === t.getMarker() ? Fc(t) : t.getChildren().some((i) => U(i) && i.getMarker() === n) ? !0 : void 0;
}
function uM(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!N(t))
      return;
    const n = ld(t, e);
    n !== void 0 && t.setNested(n);
  });
}
const Ri = /* @__PURE__ */ new WeakMap();
function fM(e, t, n) {
  const r = { owners: t, rederive: n };
  return Ri.set(e, r), () => {
    Ri.get(e) === r && Ri.delete(e);
  };
}
function Sb(e, t, n) {
  const r = Ri.get(e);
  !r?.rederive || !n.has(Rc) || r.derivedFor === t || (r.rederive(t), r.derivedFor = t);
}
function Nu(e) {
  return Ri.get(e)?.owners;
}
function _b(e) {
  return Ri.get(Ut())?.owners.has(e.getKey()) ?? !1;
}
function Mb(e) {
  Ri.get(Ut())?.owners.add(e.getKey());
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
  return !N(n) || n.getMarkerSyntax() !== "opening" ? 0 : dd(n, r) ? 1 : 0;
}
function ud(e) {
  let t = e.getNextSibling();
  for (; ue(t); )
    t = t.getFirstChild();
  return t;
}
function fd(e) {
  const t = e.getPreviousSibling(), n = e.getParent();
  return !N(t) || !U(n) || !dd(t, n) || !jr(e) ? 0 : e.getTextContent().startsWith(q) ? q.length : 0;
}
function dd(e, t) {
  return e.getMarkerSyntax() === "opening" && ld(e, t) !== void 0;
}
function Js(e, t) {
  if (!dd(e, t))
    return;
  const n = e.getNextSibling(), r = ud(e);
  if (!(n === null || r === null))
    return N(r) ? ld(r, t) === !0 ? "spacer" : void 0 : jr(r) ? r.getTextContent().startsWith(q) ? void 0 : r.is(n) ? "prefix" : "spacer" : "spacer";
}
function pd(e) {
  return !jr(ud(e)) || wu(e) ? !1 : !g_(e.getNextSibling()?.getTextContent() ?? "");
}
function Eb(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (N(t) && Js(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function hd(e, t) {
  const n = w();
  if (!E(n) || !n.isCollapsed())
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
function Ab(e) {
  if (!e.isAttached() || _b(e))
    return;
  const t = Nu(Ut()) !== void 0;
  e.getChildren().forEach((n) => {
    if (!N(n))
      return;
    const r = Js(n, e);
    if (r === void 0 || hd(n, e))
      return;
    if (t && pd(n)) {
      Mb(e);
      return;
    }
    if (r === "spacer") {
      n.insertAfter(Re(q));
      return;
    }
    const i = n.getNextSibling();
    C(i) && (dM(i) || hM(i));
  });
}
function dM(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed())
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
function pM(e) {
  if (e.getMarkerSyntax() !== "opening" || !U(e.getParent()))
    return !1;
  const t = w();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const n = e.getTextContent(), { anchor: r } = t;
  if (r.key !== e.getKey() || r.offset !== n.length)
    return !1;
  const i = Ve(e.getMarker(), e.getNested()), s = n.slice(i.length);
  if (!n.startsWith(i) || !/^[|\s]+$/.test(s))
    return !1;
  const o = ud(e);
  if (!jr(o))
    return !1;
  const a = o.getTextContent();
  return a.startsWith(q) ? (e.setTextContent(i), o.setTextContent(q + s + a.slice(q.length)), o.select(q.length + s.length, q.length + s.length), !0) : !1;
}
function Pb(e, t) {
  ue(e.getNextSibling()) && Js(e, t) === "spacer" && e.insertAfter(Re(q));
}
function hM(e) {
  e.setTextContent(q + e.getTextContent());
  const t = w();
  if (E(t))
    for (const n of [t.anchor, t.focus])
      n.type === "text" && n.key === e.getKey() && n.set(n.key, n.offset + 1, "text");
}
function gM(e) {
  return e.isAttached() ? e.getChildren().some((t) => N(t) && Js(t, e) !== void 0 && hd(t, e)) : !1;
}
function gd(e) {
  return e.isAttached() ? e.getChildren().some((t) => N(t) && Js(t, e) !== void 0 && (hd(t, e) || pd(t))) : !1;
}
function md(e) {
  return e.isAttached() ? e.getChildren().some((t) => N(t) && Js(t, e) !== void 0 && pd(t)) : !1;
}
function mM(e) {
  if (gM(e))
    return !0;
  const t = w();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const n = t.anchor.getNode();
  return (n.is(e) || e.isParentOf(n)) && gd(e);
}
const wb = 1, yM = "marker", yd = Vs("isGutterMarker", {
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
      span: (t) => TM(t) ? {
        conversion: bM,
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
    return n && Gi(n) && n.setAttribute("data-text-type", this.getTextType()), { element: n };
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
      version: wb
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function bM(e) {
  const t = e.getAttribute("data-text-type") ?? "", n = e.textContent ?? "";
  return { node: Ur(t, n) };
}
function Ur(e, t) {
  return yt(new Hn(e, t));
}
function kM(e) {
  return Ht(Ur(yM, e), yd, !0);
}
function xM(e) {
  return Rt(e) && de(e, yd);
}
function TM(e) {
  return e?.tagName === "span";
}
function Rt(e) {
  return e instanceof Hn;
}
function Nb(e) {
  return e?.type === Hn.getType();
}
const Ob = "file", $b = "src", CM = "colspan", vM = "category", SM = "alt", _M = "closed", MM = "false";
function EM(e) {
  return e[_M] !== MM;
}
function AM(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => [
    t === Ob ? $b : t,
    n
  ]));
}
function PM(e, t) {
  return e === "figure" && t === $b ? Ob : t;
}
function Rb(e, t) {
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
function zc(e, t, n) {
  const r = n ?? {}, i = EM(r);
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
        opening: `\\${Rb(t, r[CM])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Xn(AM(r), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [vM]: s, ...o } = r;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + Xn(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [SM]: s, ...o } = r;
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
function Ul(e, t) {
  if (t === "va")
    return e;
  const n = Uo(e, "va");
  return n.wrapper ?? n.closer ?? e;
}
function bd(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const n = t.anchor.getNode();
  if (n.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (A(e)) {
    const i = e.getLastDescendant();
    if (i !== null && n.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const r = e.getNextSibling();
  return r !== null && n.is(r) && t.anchor.offset === 0;
}
function jc(e) {
  const { opener: t, closer: n } = e;
  if (!t)
    return !1;
  const r = w();
  if (!E(r) || !r.isCollapsed())
    return !1;
  const i = r.anchor.getNode(), s = i.is(t) && r.anchor.offset === t.getTextContentSize();
  return n ? s || i.is(n) : s;
}
function wM(e) {
  return Be(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : N(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : C(e) && de(e, ke) === "attribute";
}
function NM(e) {
  if (N(e)) {
    const r = e.getMarker();
    return r === "va" || r === "vp" ? r : void 0;
  }
  if (!C(e) || de(e, ke) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!N(t))
    return;
  const n = t.getMarker();
  return n === "va" || n === "vp" ? n : void 0;
}
function Bl(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ue(t))
      return t;
    if (!wM(t))
      return;
  }
}
function Fh(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Ue(t),
    ownerOf: (t) => {
      if (Be(t))
        return t.getRunKind() === e ? Bl(t) : void 0;
      const n = t.getParent();
      return Be(n) ? n.getRunKind() === e ? Bl(n) : void 0 : NM(t) === e ? Bl(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Ue(t))
        return fn;
      const n = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return n === void 0 ? fn : { wantsRun: !0, valueText: q + n };
    },
    scanPieces: (t) => Ue(t) ? Uo(Ul(t, e), e) : Vr,
    graceSite: (t, n) => Ue(t) ? !n.opener && !n.closer ? bd(Ul(t, e)) : jc(n) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Ue(t) ? Ul(t, e) : void 0
    }
  };
}
const OM = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => U(e),
  ownerOf: () => {
  },
  expectedPieces: () => fn,
  scanPieces: () => Vr,
  graceSite: (e) => U(e) && mM(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, $M = {
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
  scanPieces: (e) => U(e) ? { value: fb(e) } : Vr,
  graceSite: (e, t) => {
    if (!U(e) || t.value)
      return !1;
    const n = Co(e);
    if (!n)
      return !1;
    const r = w();
    if (!E(r) || !r.isCollapsed())
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
function Ib(e) {
  if (N(e))
    return e.getMarker() === "cat";
  if (!C(e) || de(e, ke) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return N(t) && t.getMarker() === "cat";
}
function RM(e) {
  const t = e.getParent();
  if (!D(t))
    return;
  const n = St(t);
  if (n)
    for (let r = e.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (r.is(n))
        return t;
      if (!Ib(r))
        return;
    }
}
const IM = {
  kind: "cat",
  ownerPredicate: (e) => D(e),
  ownerOf: (e) => {
    if (Be(e))
      return e.getRunKind() === "cat" && D(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Be(t) ? t.getRunKind() === "cat" && D(t.getParent()) ? t.getParent() ?? void 0 : void 0 : Ib(e) ? RM(e) : void 0;
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
      return n !== void 0 && bd(n);
    }
    return jc(t);
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
function LM(e) {
  return Be(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : N(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : C(e) && de(e, ke) === "attribute";
}
function qM(e) {
  if (N(e)) {
    const r = e.getMarker();
    return r === "ca" || r === "cp" ? r : void 0;
  }
  if (!C(e) || de(e, ke) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!N(t))
    return;
  const n = t.getMarker();
  return n === "ca" || n === "cp" ? n : void 0;
}
function DM(e) {
  const t = e.getParent();
  if (!$e(t))
    return;
  const n = mi(t);
  if (n)
    for (let r = e.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (r.is(n))
        return t;
      if (!LM(r))
        return;
    }
}
function zh(e) {
  const t = (n) => $e(n) ? e === "ca" ? mi(n) : pb(n) : void 0;
  return {
    kind: e,
    ownerPredicate: (n) => $e(n),
    ownerOf: (n) => {
      if (Be(n))
        return n.getRunKind() === e && $e(n.getParent()) ? n.getParent() ?? void 0 : void 0;
      const r = n.getParent();
      return Be(r) ? r.getRunKind() === e && $e(r.getParent()) ? r.getParent() ?? void 0 : void 0 : qM(n) === e ? DM(n) : void 0;
    },
    expectedPieces: (n) => {
      if (!$e(n))
        return fn;
      const r = e === "ca" ? n.getAltnumber() : n.getPubnumber();
      return r === void 0 ? fn : { wantsRun: !0, valueText: q + r };
    },
    scanPieces: (n) => $e(n) ? e === "ca" ? db(n) : hb(n) : Vr,
    graceSite: (n, r) => {
      if (!$e(n))
        return !1;
      if (!r.opener && !r.closer) {
        const i = t(n);
        return i !== void 0 && bd(i);
      }
      return jc(r);
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
function Lb(e) {
  if (N(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return C(e) && de(e, ke) === "attribute";
}
function KM(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ke(t)) {
      const n = N(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !n || n.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Lb(t))
      return;
  }
}
const UM = {
  kind: "milestone",
  ownerPredicate: (e) => Ke(e),
  ownerOf: (e) => {
    const t = Be(e) ? e.getRunKind() === "milestone" ? e : void 0 : Be(e.getParent()) ? e.getParent() : Lb(e) ? e : void 0;
    if (!t || Be(t) && t.getRunKind() !== "milestone")
      return;
    const n = t.getPreviousSibling();
    return Be(t) ? Ke(n) ? n : void 0 : KM(t);
  },
  expectedPieces: (e) => {
    if (!Ke(e))
      return fn;
    const t = ub(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), n = Xn(t, oa(e.getMarker()));
    return { wantsRun: !0, valueText: n === "" ? void 0 : q + n };
  },
  scanPieces: (e) => {
    if (!Ke(e))
      return Vr;
    const { opening: t, attribute: n, closing: r, wrapper: i } = Uc(e);
    return { opener: t, value: n, closer: r, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Ke(e))
      return !1;
    if (!t.opener && !t.closer) {
      const n = w();
      if (!E(n) || !n.isCollapsed())
        return !1;
      const r = n.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && r.is(i) && n.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && r.is(s) && n.anchor.offset === 0;
    }
    return jc(t);
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
}, BM = zc("optbreak", void 0, void 0).opening, FM = {
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
  expectedPieces: () => ({ wantsRun: !0, valueText: BM }),
  scanPieces: (e) => Ze(e) ? { value: e.getFirstChild() ?? void 0 } : Vr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, zM = {
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
}, jM = {
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
  OM,
  $M,
  Fh("va"),
  Fh("vp"),
  IM,
  zh("ca"),
  zh("cp"),
  UM,
  FM,
  zM,
  jM
], VM = new Map(Bo.map((e) => [e.kind, e]));
function Br(e) {
  const t = VM.get(e);
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
function qb(e) {
  return Tr(e) !== void 0;
}
function WM(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const { type: t, id: n, start: r, end: i, undisplayed: s } = e;
  return typeof t == "string" && typeof n == "string" && Number.isInteger(r) && Number.isInteger(i) && (s === void 0 || typeof s == "boolean");
}
const Vc = Vs("displayAnnotations", {
  parse: (e) => {
    if (typeof e != "object" || e === null)
      return;
    const { basis: t, annotations: n } = e;
    if (!(typeof t != "string" || !Array.isArray(n)) && n.every(WM))
      return { basis: t, annotations: n };
  }
});
function HM(e, t) {
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
function GM(e, t, n) {
  let r, i;
  for (let s = t; s < n; s++) {
    const o = e[s];
    o !== void 0 && (r ??= o, i = o);
  }
  return r === void 0 || i === void 0 ? void 0 : [r, i + 1];
}
const Db = 1, JM = "c", Kb = "span";
class Ln extends na {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n = !1, r, i, s, o, a) {
    super(a), this.__marker = JM, this.__number = t, this.__showMarker = n, this.__sid = r, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => Ub(t) ? {
        conversion: YM,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return kd().updateFromJSON(t);
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
    const t = document.createElement(Kb);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ha, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Gi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(Ha, `usfm_${this.getMarker()}`), n.setAttribute("data-number", this.getNumber())), { element: n };
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
      version: Db
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
function YM(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: kd(t) };
}
function kd(e, t, n, r, i, s) {
  return yt(new Ln(e, t, n, r, i, s));
}
function Ub(e) {
  return e ? e.classList.contains(Ha) && e.tagName.toLowerCase() === Kb : !1;
}
function Wr(e) {
  return e instanceof Ln;
}
function XM(e) {
  return e?.type === Ln.getType();
}
const Fo = "id", Bb = 1, QM = [
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
    return Fb(n).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return lS(t);
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
      version: Bb
    };
  }
}
function Fb(e, t) {
  return yt(new En(e, t));
}
function Ie(e) {
  return e instanceof En;
}
function xd(e) {
  return e?.type === En.getType();
}
const ZM = [
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
], zb = 1, e0 = ["type", "marker", "content"];
class It extends Bf {
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
    return t !== void 0 && (ZM.includes(t) || (n?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: t0,
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
    return n && Gi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: n };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: zb
    };
  }
  // Mutation
  insertNewAfter(t, n) {
    const r = $s(this.getMarker());
    return r.setTextFormat(t.format), r.setTextStyle(t.style), r.setDirection(this.getDirection()), r.setFormat(this.getFormatType()), r.setStyle(this.getTextStyle()), this.insertAfter(r, n), r;
  }
}
function t0(e) {
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
function me(e) {
  return e instanceof It;
}
function Td(e) {
  return e?.type === It.getType();
}
const jb = /[ \u00A0]{2,}/g;
function n0(e) {
  return [...e.matchAll(jb)].map((t) => [
    t.index + 1,
    t.index + t[0].length
  ]);
}
function jh(e) {
  return e.replace(jb, (t) => t[0]);
}
const r0 = "​", Rs = r0;
var Vh;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Vh || (Vh = {}));
var Wh;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Wh || (Wh = {}));
function i0() {
  return Re(Rs);
}
function s0(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Rs, ""));
}
function es(e) {
  return e.length > 0 && e.includes(Rs) && e.replaceAll(Rs, "") === "";
}
function la(e) {
  return C(e) && es(e.getTextContent());
}
function Vb(e) {
  return nM(e) || XM(e);
}
function ot(e) {
  return $e(e) || Wr(e);
}
function Wb(e, t) {
  return e.find((n) => ot(n) && n.getNumber() === t.toString());
}
function o0(e, t = !1) {
  return e.find((n, r) => (!t || r > 0) && ot(n));
}
function Ou(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const n = t.getPreviousSibling();
    if (n)
      return n;
    t = t.getParent();
  }
}
function a0(e) {
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
function c0(e) {
  return Ie(e) || $e(e) || U(e) || Wr(e) || _t(e) || Ke(e) || me(e) || D(e) || Ue(e) || Ze(e);
}
function Cd(e) {
  if (e.anchor.type === "element") {
    const n = e.anchor.getNode(), r = e.anchor.offset;
    if (r < n.getChildrenSize())
      return n.getChildAtIndex(r);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Hb(e) {
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
  return me(e) || _t(e);
}
function l0(e) {
  return Td(e) || Bc(e);
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
function Bi(e, t) {
  const n = de(t, Ui), r = !!(e.cid && n), i = !e.cid && !n;
  return e.style === t.getMarker() && (i || r && e.cid === n);
}
function u0(e, t) {
  const n = A(e) ? e : e.getParent(), r = A(t) ? t : t.getParent(), i = n && r ? dS(n, r) : void 0;
  return i ? i.commonAncestor : void 0;
}
function f0(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [n, r] = t, i = e.isBackward() ? n : r;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Fr(e) {
  return e?.type === it.getType();
}
function d0(e, t) {
  if (!t)
    return;
  const n = e.findIndex((r) => r === t);
  n && (e.length = n);
}
function p0(e, t) {
  if (!t)
    return e;
  const n = t.getIndexWithinParent();
  return e.splice(n + 1, e.length - n - 1);
}
function Gb(e, t, n) {
  const r = Ve(e);
  if (t?.startsWith(r)) {
    const i = t.slice(r.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (n = s[1]);
  }
  return n;
}
function h0(e) {
  const t = e[qr];
  if (t && typeof t == "object" && "textType" in t) {
    const n = t.textType;
    if (typeof n == "string")
      return n;
  }
}
function Jb(e) {
  return Xb(e) || Fr(e) && h0(e) === "attribute" ? "" : Fr(e) && e.text !== q ? e.text : sb(e) ? e.children.map((t) => Jb(t)).join("") : "";
}
function g0(e) {
  return e.map((n) => Jb(n)).filter((n) => n.length > 0).join(" ").trim();
}
function vd(e) {
  const t = [];
  for (const n of e) {
    if (!U(n))
      continue;
    const r = Yb(n);
    r !== Pt && r.length > 0 && t.push(r);
  }
  return t.join(" ").trim();
}
function Yb(e) {
  return N(e) || gn(e) || C(e) && de(e, ke) === "attribute" ? "" : C(e) ? e.getTextContent() : A(e) ? e.getChildren().map((t) => Yb(t)).join("") : "";
}
function gn(e) {
  return Rt(e) && e.getTextType() === "marker";
}
function mn(e) {
  return N(e) || gn(e);
}
function Sd(e) {
  if (!e || !mn(e))
    return !1;
  const t = e.getParent();
  return Ie(t) && e.is(t.getFirstChild());
}
function Xb(e) {
  return Hs(e) || Nb(e) && e.textType === "marker";
}
function Hh(e, t) {
  m0(e, t), e.setMarker(t);
}
function m0(e, t) {
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
      if (N(c))
        c.setMarker(t);
      else if (gn(c)) {
        const d = l.startsWith(Ve("", !0));
        c.setTextContent(u ? Ve(t, d) : st(t, d));
      }
    }
  });
}
function ht(e, t = uS) {
  const n = { ...e };
  return t.forEach((r) => {
    Reflect.deleteProperty(n, r);
  }), Object.keys(n).length === 0 ? void 0 : n;
}
function at(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Qb(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Zb(e) {
  if (!E(e))
    return Gh(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !A(t) || e.anchor.type === "text" && !C(t)))
    return t ?? void 0;
  try {
    return Gh(e) ?? t ?? void 0;
  } catch (r) {
    if (Qb(r))
      return t ?? void 0;
    throw r;
  }
}
function y0(e, t) {
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
function _d(e, t) {
  if (!t)
    return !1;
  const n = t.split("-").map((r) => parseInt(r));
  if (n.length < 1 || n.length > 2 || n[0] > n[1])
    throw new Error("isVerseInRange: invalid range");
  return n.length === 1 ? e === n[0] : n.length === 2 && isNaN(n[1]) ? e >= n[0] : (n.length === 2 && isNaN(n[0]) || e >= n[0]) && e <= n[1];
}
function b0(e) {
  return !!e && e.includes("-");
}
function ek(e) {
  const t = e.split("-"), n = parseInt(t[0], 10), r = t.length > 1 ? parseInt(t[t.length - 1], 10) : n;
  return { start: n, end: r };
}
function Gh(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Md(e) {
  if (!C(e))
    return;
  const t = In(e);
  if (!D(t) || !St(t)?.is(e))
    return;
  const { start: n, end: r } = Kc(e.getTextContent(), t.getCaller());
  return n < r ? { start: n, end: r } : void 0;
}
function Pn(e) {
  if (!e)
    return !1;
  if (Ji(e) || N(e) || gn(e) || Be(e) || e.getType() === gi || Rt(e) && e.getTextType() === "attribute")
    return !0;
  const t = In(e);
  if ($e(t))
    return !0;
  if (C(e) && D(t) && St(t)?.is(e))
    return !Md(e);
  if (C(e)) {
    const n = de(e, ke);
    if (n === Mr || n === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || es(r))
      return !0;
    if (r === q)
      return !tk(e);
  }
  return !1;
}
function tk(e) {
  if (e.getTextContent() !== q || de(e, ke) !== void 0 || !(ue(e.getParent()) || ue(e.getPreviousSibling()) || ue(e.getNextSibling())) || Gs(e) > 0)
    return !1;
  const n = In(e);
  return !U(n) || nk(n, e);
}
function nk(e, t) {
  return e.getChildren().some((n) => n.is(t) ? !1 : ue(n) ? nk(n, t) : C(n) ? !N(n) && de(n, ke) === void 0 && n.getTextContent() !== "" && n.getTextContent() !== q && !es(n.getTextContent()) : A(n) && !Be(n));
}
function Fi() {
  const e = Re(q);
  return Ht(e, ke, Mr), e.setMode("token"), e;
}
function k0(e) {
  const t = e.getTextContent();
  t.startsWith(q) || e.setTextContent(q + t);
}
function bn(e) {
  return C(e) && de(e, ke) === Mr;
}
function rk(e) {
  const t = e.getFirstChild();
  if (!mn(t) || t === null || bn(t.getNextSibling()))
    return !1;
  const n = w();
  if (!E(n) || !n.isCollapsed())
    return !1;
  const r = n.anchor.getNode();
  if (r.is(t) || r.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && r.is(i) && n.anchor.offset === 0;
}
function ik(e) {
  if ($e(e))
    return [];
  const t = [];
  let n;
  const r = () => {
    n && (t.push({ type: "text", nodes: n }), n = void 0);
  }, i = (s) => {
    if (!Pn(s)) {
      if (cd(s)) {
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
function x0(e, t) {
  const n = [];
  let r = 0;
  for (const i of e) {
    const s = Md(i), o = s ? s.start : Gs(i), a = s ? s.end : i.getTextContentSize(), c = t ? n0(i.getTextContent().slice(o, a)).map(([u, f]) => [u + o, f + o]) : [];
    a < i.getTextContentSize() && c.push([a, i.getTextContentSize()]);
    const l = i.getTextContentSize() - o - c.reduce((u, [f, d]) => u + d - f, 0);
    n.push({ node: i, start: r, lead: o, collapsed: c, length: l }), r += l;
  }
  return { type: "text", segments: n, length: r };
}
function sk(e) {
  return e.lead > 0 ? [[0, e.lead], ...e.collapsed] : e.collapsed;
}
function T0(e, t) {
  let n = t;
  for (const [r, i] of sk(e)) {
    if (t <= r)
      break;
    n -= Math.min(t, i) - r;
  }
  return e.start + n;
}
function Jh(e, t) {
  let n = t;
  for (const [r, i] of sk(e)) {
    if (r > n)
      break;
    n += i - r;
  }
  return n;
}
function en(e, t) {
  return ik(e).map((n) => n.type === "element" ? n : x0(n.nodes, t));
}
function C0(e, t) {
  return ik(e).findIndex((n) => n.type === "element" ? n.node.is(t) : n.nodes.some((r) => r.is(t)));
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
      return { parent: r, index: s, offset: T0(a, t) };
  }
}
function v0(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const r of e.segments)
    if (t >= r.start && t < r.start + r.length)
      return [r.node, Jh(r, t - r.start)];
  const n = e.segments[e.segments.length - 1];
  if (n)
    return [n.node, Jh(n, t - n.start)];
}
function vs(e, t, n) {
  const r = e.getChildAtIndex(t);
  if (vb(e)) {
    const s = e.getParentOrThrow();
    return r ? Pn(r) ? vs(e, t + 1, n) : $u(s, r, n) : vs(s, e.getIndexWithinParent() + 1, n);
  }
  const i = en(e, n);
  return r ? Pn(r) || cd(r) && !ok(i, r) ? vs(e, t + 1, n) : $u(e, r, n) : { type: "index", index: i.length };
}
function S0(e, t) {
  const n = In(e);
  if (n && ok(en(n, t), e))
    return { parent: n, point: $u(n, e, t) };
}
function ok(e, t) {
  return e.some((n) => n.type === "element" ? n.node.is(t) || Is(n.node, t.getKey()) : n.segments.some((r) => r.node.is(t) || Is(r.node, t.getKey())));
}
function $u(e, t, n) {
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
const Qa = "unmatched", ak = 2;
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
      [Qa]: (t) => M0(t) ? {
        conversion: _0,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ed().updateFromJSON(t);
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
    return n.setAttribute("data-marker", this.__marker), n.classList.add(Ah), n.title = Yh(this.__marker), n;
  }
  updateDOM(t, n, r) {
    const i = super.updateDOM(t, n, r);
    return t.__marker !== this.__marker && (n.setAttribute("data-marker", this.__marker), n.title = Yh(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Qa);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Ah), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: ak
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function ck(e) {
  return e.getTextContent() === vo(e.getMarker());
}
function Yh(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function _0(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Ed(t) };
}
function Ed(e) {
  return yt(new ur(e));
}
function M0(e) {
  return e?.tagName.toLowerCase() === Qa;
}
function kn(e) {
  return e instanceof ur;
}
function E0(e) {
  return e?.type === ur.getType();
}
const A0 = /* @__PURE__ */ new Set([
  gi,
  Uy,
  Hn.getType(),
  // A chapter in the views without editable markers: the same whole-node treatment as a verse.
  Ln.getType()
]);
function Ad(e) {
  return C(e) && de(e, ke) === "attribute";
}
function lk(e) {
  if (!C(e))
    return !1;
  let t = e.getParent();
  for (; ue(t); )
    t = t.getParent();
  return D(t) ? St(t)?.is(e) ?? !1 : $e(t) ? mi(t)?.is(e) ?? !1 : !1;
}
function uk(e) {
  return yn(e) ? A0.has(e.getType()) : !C(e) || bn(e) ? !1 : N(e) || Ue(e) || Ad(e) || lk(e) || // An unmatched closer (`ImmutableUnmatchedNode`) is a `TextNode` subclass, not a decorator, so
  // the decorator-type set above cannot reach it.
  kn(e);
}
function Pd(e) {
  if (!C(e))
    return [0, 0];
  if (kn(e))
    return [0, e.getTextContentSize()];
  const t = e.getTextContent(), n = t.length - t.trimStart().length;
  return n === t.length ? [n, n] : [n, t.trimEnd().length];
}
function fk(e, t, n) {
  return e.type === t && e.id === n;
}
function dk(e, t) {
  if (e.basis === t)
    return e.annotations;
  const n = HM(e.basis, t);
  return e.annotations.flatMap((r) => {
    if (r.start === r.end)
      return [r];
    const i = GM(n, r.start, r.end);
    return i ? [{ ...r, start: i[0], end: i[1] }] : [];
  });
}
function Za(e) {
  return yn(e) ? ec(e) : e.getTextContent();
}
function P0(e) {
  return yn(e) ? ts(e) : e.getTextContent();
}
function wd(e) {
  const t = de(e, Vc);
  return t ? dk(t, Za(e)) : [];
}
function w0(e, t) {
  if (t.start === t.end)
    return t;
  let n, r;
  for (let i = t.start; i < t.end; i++) {
    const s = Od.renderedOffset(e, i);
    if (s === "drawn")
      return { type: t.type, id: t.id, start: 0, end: 0 };
    s !== void 0 && (n = Math.min(n ?? s, s), r = Math.max(r ?? s + 1, s + 1));
  }
  return n === void 0 || r === void 0 ? { ...t, undisplayed: !0 } : { type: t.type, id: t.id, start: n, end: r };
}
function ei(e) {
  const t = wd(e);
  return yn(e) ? t.map((n) => w0(e, n)) : t;
}
function Nd(e, t) {
  const n = [...t].sort((r, i) => r.start - i.start || r.end - i.end);
  Ht(e, Vc, n.length > 0 ? { basis: Za(e), annotations: n } : void 0);
}
function Xh(e) {
  const t = Wc(e).trim();
  if (t)
    return t;
  const n = ts(e), [r, i] = Hc(n);
  return n.slice(r, i);
}
const pk = {
  holdableText: Xh,
  renderedOffset: (e, t) => {
    const n = Xh(e);
    if (t >= n.length)
      return;
    const r = ts(e), [i] = Hc(r);
    return r.slice(i, i + n.length) === n ? i + t : "drawn";
  }
};
let Od = pk;
function N0(e) {
  Od = e ?? pk;
}
function ec(e) {
  return Od.holdableText(e);
}
function O0(e, t, n, r, i) {
  let s = { type: t, id: n, start: r, end: i };
  const o = [];
  for (const a of wd(e))
    fk(a, t, n) && a.start <= s.end && s.start <= a.end ? s = {
      ...s,
      start: Math.min(s.start, a.start),
      end: Math.max(s.end, a.end)
    } : o.push(a);
  Nd(e, [...o, s]);
}
function hk(e, t, n) {
  const r = wd(e), i = r.filter((s) => !fk(s, t, n));
  return i.length === r.length ? !1 : (Nd(e, i), !0);
}
function Wc(e) {
  if (e.getType() !== gi)
    return e.getTextContent();
  const t = e.getParent();
  return D(t) ? t.getCaller() : "";
}
function $0(e) {
  return "getRenderedText" in e && typeof e.getRenderedText == "function";
}
function ts(e) {
  if (!yn(e) || !$0(e))
    return "";
  const t = e.getRenderedText();
  return typeof t == "string" ? t : "";
}
function Qh(e) {
  return e === Io || /\s/u.test(e);
}
function Hc(e) {
  let t = 0;
  for (; t < e.length && Qh(e[t]); )
    t++;
  if (t === e.length)
    return [0, 0];
  let n = e.length;
  for (; n > t && Qh(e[n - 1]); )
    n--;
  return [t, n];
}
function Ru(e, t) {
  if (t.undisplayed)
    return ec(e).slice(t.start, t.end);
  if (t.start !== t.end)
    return P0(e).slice(t.start, t.end);
  const n = ec(e);
  if (n)
    return n;
  const r = ts(e), [i, s] = Hc(r);
  return r.slice(i, s);
}
function R0(e, t, n) {
  return ei(e).filter((r) => r.type === t && (r.undisplayed || r.start === r.end || r.start <= n && n <= r.end)).map((r) => r.id);
}
function I0(e) {
  const t = de(e, Vc);
  !t || t.basis === Za(e) || Nd(e, dk(t, Za(e)));
}
const tc = /* @__PURE__ */ new WeakMap();
function $d(e, t) {
  return JSON.stringify([e, t]);
}
function L0(e, t, n) {
  const r = Ut();
  let i = tc.get(r);
  i || (i = /* @__PURE__ */ new Map(), tc.set(r, i));
  const s = $d(e, t), o = i.get(s), a = Object.fromEntries(Object.entries(n).filter(([, c]) => c !== void 0));
  i.set(s, { ...o, ...a });
}
function nc(e, t, n) {
  return tc.get(e)?.get($d(t, n));
}
function gk(e, t, n) {
  tc.get(e)?.delete($d(t, n));
}
function q0(e, t = []) {
  const r = [
    it,
    Wn,
    Kt,
    Hn,
    Ln,
    ...t
  ].filter((i) => e.hasNodes([i])).map((i) => e.registerNodeTransform(i, I0));
  return () => r.forEach((i) => i());
}
function D0(e) {
  return Ue(e) || Ke(e) || Be(e) || Be(e.getParent()) || lk(e) || kn(e);
}
function Rd(e) {
  return C(e) ? e.getTextContentSize() : 1;
}
function Id(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getFirstChild();
    if (!n)
      return t;
    t = n;
  }
  return t;
}
function mk(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getLastChild();
    if (!n)
      return t;
    t = n;
  }
  return t;
}
function Zh(e) {
  const t = e.getNode();
  if (!A(t))
    return { leaf: t, offset: C(t) ? e.offset : Math.min(e.offset, 1) };
  const n = t.getChildAtIndex(e.offset);
  if (n)
    return { leaf: Id(n), offset: 0 };
  const r = t.getLastChild();
  if (!r)
    return { leaf: t, offset: 0 };
  const i = mk(r);
  return { leaf: i, offset: Rd(i) };
}
function La(e, t) {
  return e.leaf.is(t.leaf) ? e.offset - t.offset : e.leaf.isBefore(t.leaf) ? -1 : 1;
}
function yk(e, t, n) {
  const r = Rd(e);
  let i = r;
  t.leaf.is(e) ? i = t.offset : t.leaf.isBefore(e) && (i = 0);
  let s = 0;
  return n.leaf.is(e) ? s = n.offset : e.isBefore(n.leaf) && (s = r), [i, Math.max(i, s)];
}
function K0(e) {
  for (let t = e; t; t = t.getParent()) {
    const n = t.getNextSibling();
    if (n)
      return Id(n);
  }
}
function U0(e, t, n) {
  const r = Id(e), i = mk(e);
  if (La(t, { leaf: r, offset: 0 }) > 0 || La(n, { leaf: i, offset: Rd(i) }) < 0)
    return !1;
  if (bn(i)) {
    const s = K0(e);
    if (!s || La(n, { leaf: s, offset: 0 }) <= 0)
      return !1;
  }
  return !0;
}
function B0(e, t, n, r) {
  if (!uk(e))
    return;
  const [i, s] = yk(e, t, n);
  if (s <= i)
    return;
  if (!C(e)) {
    const l = r?.get(e.getKey());
    return l ? [l.start, l.end] : [0, ec(e).length];
  }
  const [o, a] = Pd(e), c = [Math.max(i, o), Math.min(s, a)];
  return c[1] > c[0] ? c : void 0;
}
function Ld(e, t, n, r, i, s, o, a = {}) {
  if (e.isCollapsed())
    return;
  const c = e.getNodes(), l = e.isBackward(), [u, f] = l ? [e.focus, e.anchor] : [e.anchor, e.focus], d = Zh(u), p = Zh(f);
  if (La(d, p) >= 0)
    return;
  let h = !1;
  const g = (k) => {
    const x = B0(k, d, p, a.decoratorHolds);
    x && (jt(Ra), O0(k, t, n, x[0], x[1]), h = !0);
  };
  let m, y;
  for (const k of c) {
    if (A(y) && y.isParentOf(k))
      continue;
    if (N(k) || bn(k) || Ad(k) || D0(k)) {
      g(k), m = k.getParent(), y = void 0;
      continue;
    }
    let x = null;
    if (C(k)) {
      const [S, _] = yk(k, d, p), j = Math.max(S, Gs(k));
      if (j >= _)
        continue;
      jt(Ra), x = k.splitText(j, _)[j > 0 ? 1 : 0];
    } else {
      if (ue(k))
        continue;
      if (A(k) && k.isInline()) {
        if (!U0(k, d, p))
          continue;
        x = k;
      }
    }
    if (x !== null) {
      if (x && x.is(m))
        continue;
      jt(Ra);
      const S = x.getParent();
      (S == null || !S.is(m)) && (y = void 0), m = S, y === void 0 && (y = Ki(), y.addID(t, n, r, i, s, o), x.insertBefore(y)), y.append(x);
    } else
      g(k), m = void 0, y = void 0;
  }
  h && L0(t, n, { onClick: r, onRemove: i, onMouseEnter: s, onMouseLeave: o }), t === Vt && A(y) && (l ? y.selectStart() : y.selectEnd());
}
const bk = "table:row", eg = "immutable-table-row", kk = 1, Iu = "tr", F0 = ["type", "marker", "content"];
class ns extends cr {
  __marker;
  __unknownAttributes;
  constructor(t = Iu, n, r) {
    super(r), this.__marker = t, this.__unknownAttributes = n;
  }
  static getType() {
    return eg;
  }
  static clone(t) {
    return new ns(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return z0().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Iu).setUnknownAttributes(t.unknownAttributes);
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
      type: eg,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: kk
    };
  }
}
function z0(e, t) {
  return yt(new ns(e, t));
}
function xk(e) {
  return e instanceof ns;
}
const Tk = "table:cell", tg = "immutable-table-cell", Ck = 1, Lu = "tc1", j0 = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function V0(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class rs extends cr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Lu, n, r, i, s) {
    super(s), this.__marker = t, this.__align = n, this.__colspan = r, this.__unknownAttributes = i;
  }
  static getType() {
    return tg;
  }
  static clone(t) {
    const { __marker: n, __align: r, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new rs(n, r, i, s, o);
  }
  static importJSON(t) {
    return W0().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Lu).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const r = V0(this.__align);
    return r && (n.style.textAlign = r), this.__colspan && n.setAttribute("colspan", this.__colspan), n;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), n = this.getColspan(), r = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: tg,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...n !== void 0 && { colspan: n },
      ...r !== void 0 && { unknownAttributes: r },
      version: Ck
    };
  }
}
function W0(e, t, n, r) {
  return yt(new rs(e, t, n, r));
}
function H0(e) {
  return e instanceof rs;
}
const qu = /* @__PURE__ */ new WeakMap();
function ng(e, t) {
  t ? qu.set(e, t) : qu.delete(e);
}
function qd(e) {
  return qu.get(e);
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
function G0(e) {
  return e.getChildren().some((t) => N(t) && t.getMarkerSyntax() === "closing");
}
function J0(e) {
  return zo(e) ? void 0 : { closed: "false" };
}
function Y0(e, t, n, r) {
  const i = t.getMarker(), s = Fc(t), o = G0(t), a = r ? $t(i, "opening", s) : void 0;
  if (a) {
    e.append(a);
    const [c] = n;
    jr(c) && !c.getTextContent().startsWith(q) && c.setTextContent(q + c.getTextContent());
  }
  e.append(...n), a && Pb(a, e), o && e.append($t(i, "closing", s));
}
function zi(e) {
  return Qe(e, U) ?? void 0;
}
function X0(e) {
  let t = e.getParent();
  for (; U(t); )
    t = t.getParent();
  return t;
}
function Du(e) {
  const t = vk(e);
  return e.getChildren().every((n) => N(n) || t && de(n, ke) === "attribute" || C(n) && n.getTextContent().replaceAll(q, "") === "");
}
function vk(e) {
  return zo(e);
}
function Q0(e, t) {
  const n = e.getUnknownAttributes(), r = n ? Xn(n, Ws(e.getMarker())) : "";
  r !== "" && t.insertAfter(Re(r)), e.remove();
}
function Z0(e, t) {
  if (zo(e))
    return;
  const n = e.getUnknownAttributes();
  if (n) {
    const r = { ...n };
    delete r.closed, e.setUnknownAttributes(Object.keys(r).length > 0 ? r : void 0);
  }
  t && e.append($t(e.getMarker(), "closing", Fc(e)));
}
function eE(e, t) {
  return U(e) && !zo(e) && !zo(t);
}
function tE(e, t, n) {
  Du(e) && e.getChildren().forEach((s) => {
    N(s) || s.remove();
  });
  const [r] = t;
  n && jr(r) && !r.getTextContent().startsWith(q) && r.setTextContent(q + r.getTextContent()), e.append(...t);
  const i = e.getFirstChild();
  n && N(i) && i.getMarkerSyntax() === "opening" && Pb(i, e);
}
function nE(e, t, n) {
  const { renderGlyphs: r, closeImplicitSpans: i = !1 } = n, s = vk(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), f = N(l) && l.getMarkerSyntax() === "closing", d = s && de(l, ke) === "attribute";
    !f && !d && o.push(l), l = u;
  }
  const a = eE(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      tE(e, o, r);
    else {
      const l = Kr(t.getMarker(), J0(t));
      Y0(l, t, o, r), e.insertAfter(l), Du(l) ? l.remove() : c = l;
    }
  i && !a && Z0(t, r), Du(t) && Q0(t, c);
}
function Ls(e, t) {
  let n = e.getParent();
  for (; U(n); )
    nE(e, n, t), n = e.getParent();
}
function Gc(e) {
  if (C(e) && !N(e)) {
    const t = Gs(e);
    e.select(t, t);
    return;
  }
  if (A(e)) {
    const t = e.getChildren().filter((r) => !N(r)), n = t.find((r, i) => i === t.length - 1 || !C(r) || r.getTextContent() !== q);
    if (n) {
      Gc(n);
      return;
    }
    e.selectEnd();
  }
}
function rE(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Ku(e) {
  return !!(e.opener || e.value || e.closer);
}
function rg(e) {
  return /^\s/.test(e);
}
function Dd(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !rg(t) || !rg(e))
    return !0;
  const n = t.trim();
  return n === "" || e.trim() !== n;
}
function Jc(e, t, n) {
  return n.wantsRun ? Dd(t.value?.getTextContent(), n.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : rE(t);
}
function iE(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const n = e.expectedPieces(t);
  if (!n.wantsRun)
    return !1;
  const r = e.scanPieces(t);
  return Dd(r.value?.getTextContent(), n.valueText) || e.byteFormat.glyphs !== "none" && (!r.opener || e.byteFormat.closerSyntax !== "none" && !r.closer) ? !1 : r.wrapper === void 0;
}
function Sk(e, t) {
  return !Ku(e.scanPieces(t));
}
function fa(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const n = e.expectedPieces(t), r = e.scanPieces(t);
  if (!Jc(e, r, n))
    return !1;
  const i = w();
  if (!E(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = r;
  return o && (s.is(o) || Is(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, r);
}
function sE(e, t, n, r) {
  return !n.wantsRun || Ku(r) || qd(Ut()) === "remote" ? !1 : Ut().getEditorState().read(() => {
    const i = X(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Ku(e.scanPieces(i));
  });
}
function oE(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function ig(e) {
  const t = Re(e);
  return Ht(t, ke, "attribute"), t;
}
function aE(e, t, n) {
  if (n.wrapper)
    return n.wrapper;
  const { runKind: r, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!r || !s)
    return;
  const o = tb(r);
  return s.insertAfter(o), n.opener && o.append(n.opener), n.value && o.append(n.value), n.closer && o.append(n.closer), o;
}
function cE(e, t, n, r) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const d = c?.(t);
    if (!d || r.valueText === void 0)
      return;
    C(n.value) ? n.value.setTextContent(r.valueText) : d.insertBefore(ig(r.valueText));
    return;
  }
  const l = aE(e, t, n);
  if (!l || s === "none" || !o || !a)
    return;
  const u = n.opener ?? (() => {
    const d = $t(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(d) : l.append(d), d;
  })();
  let f = n.value;
  r.valueText === void 0 ? (f?.remove(), f = void 0) : C(f) ? Dd(f.getTextContent(), r.valueText) && f.setTextContent(r.valueText) : (f = ig(r.valueText), u.insertAfter(f)), a !== "none" && !n.closer && (f ?? u).insertAfter($t(a === "selfClosing" ? "" : o(t), a));
}
function jo(e, t) {
  const { writer: n } = e.byteFormat;
  if (n === "kind-owned" || n === "read-only" || !t.isAttached())
    return;
  const r = e.expectedPieces(t), i = e.scanPieces(t);
  if (Jc(e, i, r) && !_b(t)) {
    if (sE(e, t, r, i)) {
      Mb(t);
      return;
    }
    if (!fa(e, t)) {
      if (!r.wantsRun) {
        oE(i);
        return;
      }
      cE(e, t, i, r);
    }
  }
}
function lE(e, t, n) {
  jo(e, t), t.isAttached() && fa(e, t) && n.add(t.getKey());
}
function da(e) {
  if (!C(e))
    return !1;
  if (N(e) || Ue(e) || kn(e))
    return !0;
  const t = de(e, ke);
  return t === "attribute" || t === Mr;
}
function Kd(e, t) {
  return N(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && lr(e) && U(e.getParent())) : !1;
}
function uE() {
  const e = w();
  return E(e) ? Kd(e.focus.getNode(), e.focus.offset) : !1;
}
function _k(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return C(t) && da(t) ? t : void 0;
}
function fE(e) {
  const t = _k(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function dE(e) {
  const t = _k(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function sg(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function og(e, t) {
  e.set(t.key, t.offset, t.type);
}
function pE(e, t) {
  let n = dE(e);
  for (; n; ) {
    const r = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (!C(r))
      return;
    if (!da(r))
      return { node: r, offset: t === "next" ? 0 : r.getTextContentSize() };
    n = r;
  }
}
function ag(e, t) {
  const n = pE(e, t);
  return n ? (e.set(n.node.getKey(), n.offset, "text"), !0) : !1;
}
function Ud(e) {
  if (e.isCollapsed()) {
    const a = fE(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), n = t ? e.focus : e.anchor, r = t ? e.anchor : e.focus, i = [sg(n), sg(r)], s = ag(n, "next"), o = ag(r, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (og(n, i[0]), og(r, i[1]), !1) : !0;
}
const Mk = Vs("verseBlockSource", {
  parse: (e) => typeof e == "number" ? e : void 0
}), rc = "verse-block", Ek = 1, hE = "verse-block";
class Ys extends cr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", n) {
    super(n), this.__number = t;
  }
  static getType() {
    return rc;
  }
  static clone(t) {
    return new Ys(t.__number, t.__key);
  }
  static importJSON(t) {
    return gE().updateFromJSON(t);
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
    return ek(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(hE), cg(t, this.__number), t;
  }
  updateDOM(t, n) {
    return t.__number !== this.__number && cg(n, this.__number), !1;
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
      type: rc,
      number: this.getNumber(),
      version: Ek
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function cg(e, t) {
  const { start: n, end: r } = ek(t), i = !isNaN(n) && !isNaN(r) && n <= r;
  e.setAttribute("data-verse-number", t), lg(e, "data-verse-start", i ? n : NaN), lg(e, "data-verse-end", i ? r : NaN);
}
function lg(e, t, n) {
  isNaN(n) ? e.removeAttribute(t) : e.setAttribute(t, n.toString());
}
function gE(e) {
  return yt(new Ys(e));
}
function ji(e) {
  return e instanceof Ys;
}
function mE(e) {
  return e?.type === rc;
}
const yE = [
  En,
  Ln,
  Rn,
  Kt,
  ze,
  tt,
  ir,
  Wn,
  Qi,
  Hn,
  ur,
  It,
  ai,
  Zi,
  ns,
  rs,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Er,
  {
    replace: Bf,
    with: () => zn(),
    withKlass: ai
  }
], ic = {
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
}, bE = {
  paragraph: T.Paragraph,
  character: T.Character,
  note: T.Note,
  milestone: T.Milestone
};
function kE(e) {
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
      type: bE[r.styleType] ?? T.Unknown,
      description: r.description ?? "",
      hasEndMarker: !!r.endMarker,
      children: xr(n)?.children
    } : void 0;
    return t.set(n, i), i;
  };
}
function ug(e, t, n) {
  const r = {
    type: nr,
    version: tr,
    content: e
  }, i = t.serializeEditorState(r, n);
  return Bc(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Ak = "v", Pk = 1, xE = "verse-selected";
class Gt extends na {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n = !1, r, i, s, o, a) {
    super(a), this.__marker = Ak, this.__number = t, this.__showMarker = n, this.__sid = r, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return Uy;
  }
  static clone(t) {
    const { __number: n, __showMarker: r, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Gt(n, r, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => vE(t) ? {
        conversion: CE,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Bd().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(ku, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Gi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(ku, `usfm_${this.getMarker()}`), n.setAttribute("data-number", this.getNumber())), { element: n };
  }
  decorate() {
    return P(TE, { nodeKey: this.getKey(), text: this.getRenderedText() });
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
      version: Pk
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (n) {
      if (Qb(n))
        return !1;
      throw n;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function TE({ nodeKey: e, text: t }) {
  const [n] = PS(e);
  return P("span", { className: n ? xE : void 0, children: t });
}
function CE(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Bd(t) };
}
function Bd(e, t, n, r, i, s) {
  return yt(new Gt(e, t, n, r, i, s));
}
function vE(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Ak;
}
function Ar(e) {
  return e instanceof Gt;
}
function SE(e) {
  return e?.type === Gt.getType();
}
function Me(e) {
  return Ue(e) || Ar(e);
}
function wk(e) {
  return sd(e) || SE(e);
}
function _E(e) {
  return ME(e).find((t) => me(t));
}
function ME(e) {
  return e.some(ji) ? e.flatMap((t) => ji(t) ? t.getChildren() : t) : e;
}
function Yc(e) {
  return A(e) ? ji(e) ? e.getChildren().flatMap(Yc) : e.getChildren() : [];
}
function EE(e, t) {
  return Yc(e).find((i) => Me(i) && _d(t, i.getNumber()));
}
function AE(e, t) {
  return t === 0 ? _E(e) : e.map((n) => EE(n, t)).filter((n) => n)[0];
}
function sc(e) {
  return Yc(e).find((n) => Me(n));
}
function Nk(e, t) {
  if (!A(e) || t <= 0)
    return;
  const n = e.getChildren();
  for (let r = t - 1; r >= 0; r--) {
    const i = n[r];
    if (Me(i))
      return i;
  }
}
function PE(e) {
  const t = e.getParent();
  if (t && A(t)) {
    const r = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < r.length; i++) {
      const s = r[i];
      if (Me(s))
        return s;
    }
  }
  let n = t?.getNextSibling();
  for (; n && !ot(n); ) {
    const r = sc(n);
    if (r)
      return r;
    n = n.getNextSibling();
  }
}
function oc(e) {
  return Yc(e).findLast((t) => Me(t));
}
function wE(e) {
  if (!Ue(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const n = e.getTextContent().indexOf(t);
  return n < 0 ? 0 : n + t.length;
}
function NE(e, t, n) {
  if (!n)
    return !1;
  const r = t.getParent();
  if (n === r && A(n)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return n.getNextSibling() === t;
}
function OE(e, t) {
  const n = t.anchor.getNode();
  if (n !== e)
    return NE(t, e, n);
  if (C(e)) {
    const r = wE(e);
    return t.anchor.offset < r;
  }
  return !0;
}
function Fl(e) {
  const t = e.getNumber(), n = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: n,
    verse: t != null && n.toString() !== t ? t : void 0
  };
}
function $E(e) {
  const t = Ou(e);
  if (!(!t || ot(t)))
    return Me(t) ? t : oc(t) ?? jd(t);
}
function RE(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!E(t))
    return Fl(e);
  const n = Number.parseInt(e.getNumber() ?? "0", 10), r = n <= 1 ? 0 : n - 1;
  if (OE(e, t)) {
    const i = $E(e);
    return i ? Fl(i) : { verseNum: r };
  }
  return Fl(e);
}
function IE(e) {
  return c0(e) || Ar(e);
}
function Fd(e) {
  if (C(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(q) && e.setTextContent(`${t} `);
  }
}
function Ok(e) {
  if (C(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Uu(e, t) {
  return e.getEditorState().read(() => !X(t));
}
function LE(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), n = zd(t, e);
  let r;
  if (n) {
    const i = n.getParent();
    if (i && A(i) && A(t) && t === i && e.anchor.offset < n.getIndexWithinParent() && (r = n), !r && i && A(i)) {
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
      let s = fg(i);
      for (; s && !ot(s); ) {
        const o = sc(s);
        if (o) {
          r = o;
          break;
        }
        s = fg(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = sc(s);
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
function qE(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), n = zd(t, e);
  let r;
  if (n) {
    const i = n.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (r = n), !r && i && A(i) && (r = Nk(i, n.getIndexWithinParent())), !r && i) {
      let o = dg(i);
      for (; o && !ot(o); ) {
        const a = oc(o);
        if (a) {
          r = a;
          break;
        }
        o = dg(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !ot(s); ) {
      const o = oc(s);
      if (o) {
        r = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return r ? (r.selectNext(0, 0), !0) : !1;
}
function fg(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const n = e.getTopLevelElement();
  return n && n !== e ? n.getNextSibling() : null;
}
function dg(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const n = e.getTopLevelElement();
  return n && n !== e ? n.getPreviousSibling() : null;
}
function zd(e, t) {
  if (A(e) && E(t) && t.anchor.key === e.getKey()) {
    const r = e.getChildAtIndex(t.anchor.offset);
    if (r && Me(r))
      return r;
    const i = Nk(e, t.anchor.offset);
    if (i)
      return i;
    const s = sc(e);
    if (s)
      return s;
  }
  return jd(e);
}
function jd(e) {
  if (!e || ot(e))
    return;
  if (Me(e))
    return e;
  let t = Ou(e);
  for (; t; ) {
    if (ot(t))
      return;
    if (Me(t))
      return t;
    const n = oc(t);
    if (n)
      return n;
    t = Ou(t);
  }
}
const DE = ["style"], KE = ["style", "code"], ac = ["style", "cid"], UE = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], BE = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], FE = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], zE = ["style", "caller", "category", "contents"], jE = ["tag", "marker", "contents"], VE = [
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
function WE(e, t) {
  const n = X(e);
  if (!wn(n))
    return;
  const r = Vd(n, "apply");
  if (r === void 0)
    return;
  const [i, ...s] = t;
  return [{ retain: r }, ...i ? [i] : [], { delete: 1 }, ...s];
}
function Vd(e, t = "delta-doc") {
  if (!e)
    return;
  const n = qc();
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
    if (mt(l) && (i.includes(l) || i.push(l)), $k(l, t)) {
      if (l.getKey() === o)
        return r;
      s.push({ node: l, position: r }), r += 1;
      continue;
    }
    r += Hd(l, t);
  }
  if (a)
    return r;
}
function pg(e, t, n = "delta-doc") {
  if (e.length < 2 || !JE(e[0]) || !GE(e[1]))
    return;
  const r = e[0].retain;
  return t.read(() => HE(r, n)?.getKey());
}
function HE(e, t = "delta-doc") {
  const n = qc();
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
    if (mt(a) && (i.includes(a) || i.push(a)), $k(a, t)) {
      if (r === e)
        return a;
      s.push({ node: a, position: r }), r += 1;
      continue;
    }
    const l = Hd(a, t);
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
function GE(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && VE.includes(t);
}
function JE(e) {
  return e.retain != null && typeof e.retain == "number";
}
function $k(e, t) {
  return D(e) || Ze(e) ? !0 : t === "apply" && A(e) && wn(e);
}
function Rk(e) {
  const t = e.getParent();
  return mn(e) && me(t) && t.getFirstChild() === e;
}
function Bu(e) {
  const t = e.getParent();
  return t !== null && Qe(t, Be) !== null;
}
function YE(e) {
  const t = e.getParent();
  return U(t) && e.getTextContent() === Pt && t.getChildrenSize() === 1;
}
function Wd(e) {
  const t = In(e);
  if (!(!D(t) || !St(t)?.is(e)))
    return id(e.getTextContent(), t.getCaller());
}
function XE(e) {
  return !qb(e) && // A caller's typed bytes are respelled as the content they settle into, never sent raw.
  Wd(e) === void 0 && Hd(e, "delta-doc") === e.getTextContentSize();
}
function Hd(e, t) {
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
    (la(e) || Rk(e) || de(e, ke) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    de(e, ke) === "attribute" || Bu(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, and the empty-char placeholder. The
    // editable-mode note caller counts only its content bytes, below.
    n.startsWith(Xf) || YE(e)))
      return 0;
    const r = t === "delta-doc" ? Wd(e) : void 0;
    return r !== void 0 ? r.length : e.getTextContentSize();
  }
  return 0;
}
function Fu(e, t) {
  const n = { insert: e.__text }, r = de(e, oi);
  if (r && (n.attributes = { segment: r }), t && t.length > 0) {
    const i = Ik(t);
    i && (n.attributes = {
      ...n.attributes,
      char: i
    });
  }
  return n;
}
function hg(e) {
  const t = new Cs();
  return e.isEmpty() || e.read(() => {
    const n = Ee();
    if (!n || n.isEmpty())
      return;
    const r = n.getChildren();
    if (r.length === 1 && _t(r[0]) && (!r[0].getChildren() || r[0].getChildrenSize() === 0))
      return;
    const i = QE();
    for (const s of i)
      t.push(s);
  }), t;
}
function Xc(e, t) {
  const n = [], r = Xi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < r.length; c++) {
    const l = r[c].node;
    n.push(...gg(l, c, r, i, s, o, a));
  }
  for (const c of i)
    n.push(...gg(c, r.length, r, i, s, o, a));
  return n;
}
function QE() {
  return Xc();
}
function gg(e, t, n, r, i, s, o) {
  if (!e)
    return [];
  const a = [], c = n[t + 1];
  return ZE(e, a, r), eA(e, a, i, s, o), tA(e, t, n, i, o, s, a), ot(e) && a.push(sA(e)), Me(e) && a.push(aA(e)), Ke(e) && a.push(cA(e)), kn(e) && a.push(lA(e)), rA(e, a, s), nA(e, a, s), pA(c, s), a;
}
function ZE(e, t, n) {
  if (!e.isInline()) {
    const r = n.pop();
    Ie(r) ? t.push(iA(r)) : me(r) ? t.push(oA(r)) : _t(r) && t.push({ insert: Vo });
  }
  mt(e) && (n.includes(e) || n.push(e));
}
function eA(e, t, n, r, i) {
  if (!C(e) || Ue(e) || kn(e))
    return;
  const s = e.getParent();
  if (D(s) && s.getFirstChild() === e)
    return;
  const o = An(e) !== void 0;
  if (N(e) && (o || Rk(e) || Bu(e) || qb(e)) || de(e, ke) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (es(a))
    return;
  const c = Wd(e);
  if (c !== void 0) {
    if (!c)
      return;
    a = c;
  }
  const l = e.getPreviousSibling(), u = U(s) ? s : void 0;
  o && u && l === u.getFirstChild() && (a = a.slice(fd(e)));
  const f = a.startsWith(Xf) || de(e, ke) === "attribute" || Bu(e), d = !!u && a === Pt && u.getChildrenSize() === 1, p = Qc(e, r), h = p ? n.filter((y) => p.children.includes(y)) : n, g = Fu(e, h);
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
function tA(e, t, n, r, i, s, o) {
  U(e) && !r.includes(e) && r.push(e);
  const a = n[t + 1];
  for (const c of r.toReversed())
    if (qs(c, a)) {
      if (r.pop(), !i.has(c)) {
        const l = fA(c), u = Qc(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function nA(e, t, n) {
  if (!D(e))
    return;
  const r = uA(e), i = Qc(e, n), s = {
    node: e,
    children: Xi(e).map((o) => o.node),
    contentsOps: r.insert.note?.contents?.ops
  };
  n.push(s), i?.contentsOps ? i.contentsOps.push(r) : t.push(r);
}
function rA(e, t, n) {
  if (!Ze(e))
    return;
  const r = dA(e), i = Qc(e, n), s = {
    node: e,
    children: Xi(e).map((o) => o.node),
    contentsOps: r.insert.unknown?.contents?.ops
  };
  n.push(s), i?.contentsOps ? i.contentsOps.push(r) : t.push(r);
}
function yi(e, t) {
  const n = t.getUnknownAttributes();
  n && Object.assign(e, n);
}
function iA(e) {
  const t = { style: Fo, code: e.__code };
  return yi(t, e), { insert: Vo, attributes: { book: t } };
}
function sA(e) {
  const t = { style: Xa, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), yi(t, e), { insert: { chapter: t } };
}
function oA(e) {
  const t = { style: e.__marker };
  return yi(t, e), { insert: Vo, attributes: { para: t } };
}
function aA(e) {
  const t = { style: Ya, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), yi(t, e), { insert: { verse: t } };
}
function cA(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), yi(t, e), { insert: { milestone: t } };
}
function lA(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function uA(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), yi(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const n = { insert: { note: t } }, r = de(e, oi);
  return r && (n.attributes = { segment: r }), n;
}
function fA(e) {
  const t = { insert: "" }, n = Ik([e]);
  return n && (t.attributes = { char: n }), t;
}
function dA(e) {
  const t = { tag: e.getTag() }, n = e.getMarker();
  return n && (t.marker = n), yi(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Qc(e, t) {
  for (let n = t.length - 1; n >= 0; n--) {
    const r = t[n];
    if (r.children.includes(e))
      return r;
  }
}
function pA(e, t) {
  for (let n = t.length - 1; n >= 0; n--)
    qs(t[n].node, e) && t.splice(n, 1);
}
function Ik(e) {
  if (e.length === 0)
    return;
  const t = e.map(hA);
  return t.length === 1 ? t[0] : t;
}
function hA(e) {
  const t = { style: e.__marker }, n = de(e, Ui);
  return n && (t.cid = n), yi(t, e), t;
}
function Gd(e) {
  let t = 0;
  for (const { node: n } of qc())
    if (D(n)) {
      if (n.getKey() === e)
        return t;
      t += 1;
    }
}
function gA(e) {
  let t = 0;
  for (const { node: n } of qc())
    if (D(n)) {
      if (t === e)
        return n;
      t += 1;
    }
}
const Lk = 1;
class _n extends na {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Lo, n = "", r, i) {
    super(i), this.__caller = t, this.__previewText = n, this.__onClick = r ?? (() => {
    });
  }
  static getType() {
    return gi;
  }
  static clone(t) {
    const { __caller: n, __previewText: r, __onClick: i, __key: s } = t;
    return new _n(n, r, i, s);
  }
  static importDOM() {
    return {
      span: (t) => yA(t) ? {
        conversion: mA,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Jd().updateFromJSON(t);
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
    return n && Gi(n) && (n.classList.add(this.getType()), n.setAttribute("data-caller", this.getCaller()), n.setAttribute("data-preview-text", this.getPreviewText())), { element: n };
  }
  decorate(t) {
    const n = this.getParent();
    if (!n)
      return null;
    const r = n.getKey(), i = n.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, r, i, () => bA(t, r), (l) => kA(t, r, s, l), () => xA(t, r), () => TA(t, r)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return P("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.getRenderedText() });
  }
  /** The text this caller shows on screen; empty when CSS generates the caller instead. */
  getRenderedText() {
    const t = this.getLatest(), n = t.getParent(), r = D(n) && n.getIsCollapsed();
    return t.__caller === Lo && r ? "" : t.__caller === Ky && r ? "*" : t.__caller;
  }
  exportJSON() {
    return {
      type: this.getType(),
      caller: this.getCaller(),
      previewText: this.getPreviewText(),
      onClick: this.getOnClick(),
      version: Lk
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function mA(e) {
  const t = e.getAttribute("data-caller") ?? "", n = e.getAttribute("data-preview-text") ?? "";
  return { node: Jd(t, n) };
}
function Jd(e, t, n) {
  return yt(new _n(e, t, n));
}
function yA(e) {
  return e ? e.classList.contains(_n.getType()) : !1;
}
function Lt(e) {
  return e instanceof _n;
}
function bA(e, t) {
  return e.getEditorState().read(() => {
    const n = X(t);
    if (!D(n))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return n.getCaller();
  });
}
function kA(e, t, n, r) {
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
function xA(e, t) {
  return e.getEditorState().read(() => {
    const n = X(t);
    if (!D(n))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return Xc(n);
  });
}
function TA(e, t) {
  return e.getEditorState().read(() => Gd(t));
}
const CA = [
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
], vA = ["†"], Yd = "formatted", qk = "unformatted", Dk = "paragraph-structure", Xd = "standard", Kk = "block-verse", SA = {
  [Yd]: "Formatted",
  [qk]: "Unformatted",
  [Dk]: "Paragraph Structure",
  [Xd]: "Standard",
  [Kk]: "Block Verse"
};
function is(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Qd, Zd;
function _A(e) {
  const t = ep(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Qd = e, Zd = t;
}
_A(Yd);
const mD = () => Qd, Zc = () => Zd;
function ep(e) {
  let t;
  switch (e ?? Qd) {
    case Yd:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case qk:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Dk:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Xd:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Kk:
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
function yD(e) {
  if (!e)
    return;
  const t = mg(e);
  return Object.keys(SA).find((n) => yr(mg(ep(n)), t));
}
const MA = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function mg(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, n]) => n !== void 0));
  return { ...MA, ...t };
}
function Bt(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: n, isFormattedFont: r, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && n && r && !i && !s;
}
function EA(e) {
  if (e)
    return Wo(e) ? Gt : e.markerMode === "editable" ? Kt : Gt;
}
function Wo(e) {
  return e?.verseLayout === "block";
}
function AA(e) {
  const t = [], n = e ?? Zd;
  return n && (t.push(`${n_}${n.markerMode}`), n.hasSpacing && t.push(e_), n.isFormattedFont && t.push(t_)), t;
}
const PA = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function cc(e) {
  return PA.exec(e)?.[1] ?? e;
}
function So(e, t) {
  const n = e.jsonPath.slice(cc(e.jsonPath).length);
  return { ...e, jsonPath: `${Nt(t)}${n}` };
}
function Uk(e) {
  const t = [];
  let n = 0;
  for (const c of Ee().getChildren())
    if (!Pn(c))
      if (ji(c)) {
        const l = n;
        c.getChildren().filter((u) => !Pn(u)).forEach((u, f) => t.push({ node: u, blockPrefix: [l, f], blockBase: 0 })), n += 1;
      } else _t(c) ? (t.push({ node: c, blockPrefix: [], blockBase: n }), n += en(c, e).length) : (t.push({ node: c, blockPrefix: [n], blockBase: 0 }), n += 1);
  const r = [];
  let i = 0, s = 0, o = 0, a;
  for (const c of t) {
    const l = A(c.node) ? en(c.node, e).length : 0, u = de(c.node, Mk), f = _t(c.node), d = u === void 0 || u !== a;
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
function Bk(e, t) {
  return e.length >= t.length && t.every((n, r) => e[r] === n);
}
function Fk(e, t, n, r = !0) {
  const i = e.jsonPath.slice(cc(e.jsonPath).length);
  let s = $n(cc(e.jsonPath));
  s.length === 1 && t.some((o) => o.blockPrefix.length === 2 && o.blockPrefix[0] === s[0]) && (s = [s[0], 0]);
  for (const o of t) {
    if (!Bk(s, o.blockPrefix))
      continue;
    const a = s.slice(o.blockPrefix.length);
    if (a.length === 0) {
      if (o.blockPrefix.length === 0)
        continue;
      return r && i === "" && A(o.node) && (!o.isSourceStart || _t(o.node)) ? Fk(n(o.node), t, n, !1) : So(e, o.usjPrefix);
    }
    if (!(a[0] < o.blockBase || a[0] >= o.blockBase + o.count))
      return So(e, [
        ...o.usjPrefix,
        a[0] - o.blockBase + o.usjBase,
        ...a.slice(1)
      ]);
  }
}
function wA(e, t, n) {
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
function yg(e, t, n) {
  const r = $n(cc(e.jsonPath));
  if (r.length === 0)
    return Ir(e) ? wA(e.offset, t, n) : e;
  for (const i of t) {
    if (!Bk(r, i.usjPrefix))
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
function el(e, t, n) {
  let { start: r } = e, i = e.end ?? r;
  if (nx()) {
    const g = Bt(t), m = Uk(g), y = yg(r, m, g), k = i === r ? y : yg(i, m, g);
    if (!y || !k)
      return;
    r = y, i = k;
  }
  const s = !!n?.forAnnotation, o = xg(r, t, s), a = i === r ? o : xg(i, t, s), [c, l] = o.point, [u, f] = a.point;
  if (!c || !u || l === void 0 || f === void 0)
    return;
  let d = Tg(c, l), p = Tg(u, f);
  if (i !== r && ws(i) && i.closingMarkerOffset === 0 && (p = HA(p[0], p[1], Bt(t))), n?.forAnnotation && i !== r) {
    const g = { edge: d, inside: o.insideDecorator }, m = { edge: p, inside: a.insideDecorator };
    [d, p] = NA(g, m), n.decoratorHolds && OA(g, m, n.decoratorHolds);
  }
  const h = Dr();
  return h.anchor = Qt(d[0].getKey(), d[1], Hu(d[0])), h.focus = Qt(p[0].getKey(), p[1], Hu(p[0])), h;
}
function NA(e, t) {
  const { inside: n } = e, { inside: r } = t;
  if (!n && !r)
    return [e.edge, t.edge];
  const i = !!n && !!r && n.decorator.is(r.decorator), s = n && r && i ? r.before < n.before : zk(t, e), [o, a] = s ? [t, e] : [e, t], c = o.inside ? zu(o.inside, o.inside.before >= o.inside.total, o.edge) : o.edge;
  if (i && n.before === r.before)
    return [c, c];
  const l = a.inside ? zu(a.inside, a.inside.before > 0, a.edge) : a.edge;
  return s ? [l, c] : [c, l];
}
function OA(e, t, n) {
  const { inside: r } = e, { inside: i } = t;
  if (!r && !i)
    return;
  const s = !!r && !!i && r.decorator.is(i.decorator), o = r && i && s ? i.before < r.before : zk(t, e), [a, c] = o ? [i, r] : [r, i], l = (u, f, d) => {
    d > f && n.set(u.decorator.getKey(), { start: f, end: d });
  };
  a && l(a, a.before, s && c ? c.before : a.total), c && !s && l(c, 0, c.before);
}
function zu(e, t, n) {
  const [r, i] = Qr(e.decorator, t);
  return r && i !== void 0 ? [r, i] : n;
}
function zk(e, t) {
  const n = ({ edge: s, inside: o }) => {
    const [a, c] = o ? zu(o, !1, s) : s;
    return Qt(a.getKey(), c, Hu(a));
  }, r = n(e), i = n(t);
  return r.isBefore(i) ? !0 : i.isBefore(r) ? !1 : !e.inside && !!t.inside;
}
function tl(e) {
  const t = w();
  if (!t || !E(t))
    return;
  const n = nx() ? Uk(Bt(e)) : void 0, r = (u, f) => {
    const d = Ot(u, f, e);
    return n ? Fk(d, n, (p) => Ot(p, 0, e)) : d;
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
}, $A = new Map(Object.values(ti).flatMap((e) => e ? [[e.markerName, e.keyName]] : [])), bg = {
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
}, RA = (
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  Object.keys(bg).filter((e) => bg[e])
), IA = /([^\s="|]+)="([^"]*)"/g, LA = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function jk(e, t) {
  return `${e}['${t}']`;
}
function Ii(e) {
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
function tp(e) {
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
function nl(e, t, n, r = (i) => i) {
  const i = [];
  for (const s of e.slice(t).matchAll(IA)) {
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
function qA(e, t) {
  const n = LA.exec(e);
  if (!n)
    return [];
  const r = n[1], i = n[0].length - r.length - 2, s = $A.get(r) ?? r, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: n[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${r}*`);
  return a > n[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function np(e) {
  if (gn(e)) {
    const t = tx(e), n = e.getTextContent();
    if (Ke(t) && (n === "\\*" || n.startsWith(Ve(t.getMarker()))))
      return t;
  }
  return In(e) ?? e;
}
function DA(e) {
  const t = e.getTextContentSize(), n = tp(e);
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
        spans: n.role === "closer" ? _o() : Ii(1)
      };
  }
  const r = e.getMarkerSyntax();
  return {
    owner: np(e),
    length: t,
    spans: r === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      Ii(e.getNested() ? 2 : 1)
    ) : _o()
  };
}
function KA(e) {
  const t = e.getTextContent(), n = t.length, r = tp(e);
  if (r?.kind === "optbreak")
    return {
      owner: r.owner,
      length: n,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = np(e);
  if (Ie(i)) {
    const s = Ve(i.getMarker()).length;
    if (t.startsWith(Ve(i.getMarker())))
      return {
        owner: i,
        length: n,
        spans: [
          ...Ii(1),
          { start: s + 1, base: 0, bytes: { kind: "property", property: "code" } }
        ]
      };
  }
  if (Ze(i)) {
    const s = zc(i.getTag(), i.getMarker(), i.getUnknownAttributes());
    if (s.closing !== "" && t === s.closing)
      return { owner: i, length: n, spans: _o() };
    if (s.opening !== "" && t === s.opening)
      return { owner: i, length: n, spans: Ii(1) };
  }
  return {
    owner: i,
    length: n,
    spans: t.endsWith("*") ? _o() : Ii(t.startsWith("\\+") ? 2 : 1)
  };
}
function UA(e) {
  const t = tp(e);
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
        ...nl(i, 1, U(n) ? Ws(n.getMarker()) : void 0)
      ]
    };
  if (r === "milestone" && Ke(n))
    return { owner: n, length: s, spans: Vk(n.getMarker(), i) };
}
function Vk(e, t) {
  return [
    { start: 0, base: e.length, bytes: { kind: "property", property: "marker" } },
    ...nl(t, 2, oa(e))
  ];
}
function BA(e) {
  const t = e.getTextContent(), n = t.length, r = e.getParent();
  if (!Ze(r)) {
    const s = tx(e);
    return Ke(s) ? { owner: s, length: n, spans: Vk(s.getMarker(), t) } : void 0;
  }
  const i = qA(t, (r.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: r, length: n, spans: i };
  if (t.startsWith("|"))
    return {
      owner: r,
      length: n,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        // The bytes spell an attribute the way USFM names it, which is not always USJ's name for it.
        ...nl(t, 1, void 0, (s) => PM(r.getTag(), s))
      ]
    };
}
function kg(e, t) {
  const n = Ve(e);
  if (t.startsWith(n))
    return [
      ...Ii(1),
      { start: n.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function tn(e) {
  if (N(e))
    return DA(e);
  if (gn(e))
    return KA(e);
  if (Rt(e) && e.getTextType() === "attribute")
    return BA(e);
  if (e.getType() === gi) {
    const r = e.getParent();
    return D(r) ? {
      owner: r,
      length: r.getCaller().length,
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if (Ue(e)) {
    const r = kg(e.getMarker(), e.getTextContent());
    return r ? { owner: e, length: e.getTextContentSize(), spans: r } : void 0;
  }
  if (!C(e))
    return;
  if (kn(e))
    return { owner: e, length: e.getTextContentSize(), spans: Ii(1) };
  if (de(e, ke) === "attribute")
    return UA(e);
  const t = e.getParent();
  if ($e(t) && mi(t)?.is(e)) {
    const r = kg(t.getMarker(), e.getTextContent());
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
function bi(e) {
  return gn(e) || Rt(e) && e.getTextType() === "attribute" || e.getType() === gi;
}
function rl(e) {
  const t = [];
  if ((Ue(e) || kn(e)) && t.push(e), A(e)) {
    const n = $e(e) ? mi(e) : void 0, r = D(e) ? St(e) : void 0;
    for (const i of e.getChildren())
      r && (r.is(i) || i.isParentOf(r)) ? t.push(r) : (N(i) || gn(i) || Rt(i) && i.getTextType() === "attribute" || i.getType() === gi || n?.is(i)) && t.push(i);
  }
  if (Ke(e))
    for (let n = e.getNextSibling(); n && bi(n); n = n.getNextSibling())
      (!gn(n) || np(n).is(e)) && t.push(n);
  for (const n of RA) {
    const r = Br(n);
    if (!r.ownerPredicate(e))
      continue;
    const { opener: i, value: s, closer: o } = r.scanPieces(e);
    i && t.push(i), s && t.push(s), o && t.push(o);
  }
  return t;
}
function Vi(e, t) {
  return e.kind !== t.kind ? !1 : e.kind === "property" && t.kind === "property" ? e.property === t.property : (e.kind === "attributeKey" || e.kind === "attributeMarker" || e.kind === "closingAttributeMarker") && "keyName" in t ? e.keyName === t.keyName : !0;
}
function ju(e, t, n) {
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
        jsonPath: jk(a, s.bytes.property),
        propertyOffset: o
      };
    case "attributeKey":
      return { jsonPath: a, keyName: s.bytes.keyName, keyOffset: o };
    case "attributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName, keyClosingMarkerOffset: o };
    case "precedingText":
      return FA(e, n);
  }
}
function Vu(e, t) {
  return C(e) && !tn(e) && !Ms(e, 0, t);
}
function FA(e, t) {
  let n = e;
  for (let o = n.getParent(); !n.getPreviousSibling() && ue(o); )
    n = o, o = n.getParent();
  let r = n.getPreviousSibling();
  for (; r && Vu(r, t); )
    r = r.getPreviousSibling();
  if (!r)
    return;
  const i = A(r) ? r.getLastDescendant() : r;
  if (i && (C(i) || bi(i)))
    return Vu(i, t) ? void 0 : Qn(i, i.getTextContentSize(), t);
  const s = r.getParent();
  if (s)
    return Qn(s, r.getIndexWithinParent() + 1, t);
}
function fs(e, t, n) {
  for (const r of rl(e)) {
    const i = tn(r);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!Vi(o.bytes, t))
          continue;
        const a = rp(i, s);
        if (!(n < o.base || n > a))
          return [r, o.start + (n - o.base)];
      }
  }
}
function rp(e, t) {
  const n = e.spans[t], r = e.spans[t + 1];
  return r ? n.base + (r.start - n.start) - 1 : n.base + (e.length - n.start);
}
function Nn(e, t) {
  const n = Bt(t);
  if (Ir(e)) {
    const r = $n(e.jsonPath);
    let i = Ee();
    for (let s = 0; s < r.length; s++) {
      if (!i || !A(i))
        return [void 0, void 0];
      const o = en(i, n)[r[s]];
      if (!o)
        return [void 0, void 0];
      if (o.type === "text")
        return s !== r.length - 1 ? [void 0, void 0] : v0(o, e.offset) ?? Cg(e, n) ?? [void 0, void 0];
      i = o.node;
    }
    return i && A(i) ? Nn(ip(i, r, e.offset, n), t) : [void 0, void 0];
  }
  if (No(e) || ws(e) || Oo(e)) {
    const r = Cg(e, n);
    if (r)
      return r;
  }
  if ($o(e) || Oc(e)) {
    const r = Pi(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const { keyName: i } = e, s = $o(e) ? fs(r, { kind: "attributeKey", keyName: i }, e.keyOffset) : fs(r, { kind: "attributeMarker", keyName: i }, 0);
    if (s)
      return s;
    const o = jl(r, i);
    if (o)
      return o;
    const a = tP(r, i);
    return a || (Ke(r) ? Qr(r, !1) : zl(r));
  }
  if (Oo(e)) {
    const r = Pi(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const i = fs(r, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return i || (jl(r, e.keyName) ?? zl(r));
  }
  if (Kf(e)) {
    const r = Pi(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const i = fs(r, { kind: "marker" }, 0);
    if (i)
      return i;
    const s = A(r) ? r.getFirstChild() : null;
    return s && C(s) ? [s, 0] : Qr(r, !1);
  }
  if (ws(e)) {
    const r = Pi(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const i = fs(r, { kind: "closingMarker" }, e.closingMarkerOffset);
    if (i)
      return i;
    const s = sp(r);
    if (s !== void 0 && e.closingMarkerOffset >= s)
      return Qr(r, !0);
    if (!A(r))
      return Qr(r, !1);
    const o = r.getLastChild();
    return o && C(o) ? [o, o.getTextContent().length] : [r, r.getChildrenSize()];
  }
  if (No(e)) {
    const r = Wk(e.jsonPath), i = Pi(e.jsonPath, n);
    if (!i || r === void 0)
      return [void 0, void 0];
    const s = { kind: "property", property: r }, o = fs(i, s, e.propertyOffset);
    if (o)
      return o;
    const a = nP(i, s, e.propertyOffset);
    if (a)
      return a;
    const c = jl(i, r);
    if (c)
      return c;
    if (A(i)) {
      if (!zA.has(r))
        return zl(i);
      const u = i.getFirstChild();
      return u && C(u) ? [u, 0] : [i, 0];
    }
    const l = rP(i, r);
    return Qr(i, l !== void 0 && e.propertyOffset >= l.length);
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${fS(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Wk(e) {
  const t = /\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/.exec(e);
  return t?.[1] ?? t?.[2] ?? t?.[3];
}
const zA = /* @__PURE__ */ new Set([
  "marker",
  "code",
  "caller",
  "category"
]);
function Wu(e, t) {
  const n = e.length - e.trimStart().length, r = Math.max(n, e.trimEnd().length);
  return { before: Math.min(Math.max(t, n), r) - n, total: r - n };
}
function xg(e, t, n) {
  const r = Nn(e, t), [i, s] = r;
  if (n && !Ir(e)) {
    const c = Pi(e.jsonPath, Bt(t)), l = c && jA(c, e);
    if (l)
      return l.before > 0 ? { point: r, insideDecorator: l } : { point: r };
  }
  if (i && s !== void 0 && s > 0 && bi(i)) {
    const c = Wc(i);
    return {
      point: r,
      insideDecorator: { decorator: i, ...Wu(c, s) }
    };
  }
  if (Ir(e))
    return { point: r };
  const o = Pi(e.jsonPath, Bt(t));
  if (!Ar(o) && !Wr(o))
    return { point: r };
  const a = VA(o, e);
  return a && a.before > 0 ? { point: r, insideDecorator: a } : { point: r };
}
function Hk(e) {
  const t = e.getFirstChild();
  if (!t || !gn(t))
    return;
  const n = tn(t);
  if (n?.spans[0]?.bytes.kind !== "marker" || !n.owner.is(e) || !e.getChildren().every((c) => bi(c) || C(c) && Pn(c)))
    return;
  const i = Ws(e.getMarker()), s = Xn(e.getUnknownAttributes() ?? {}, i);
  if (!s)
    return;
  const o = nl(s, 1, i);
  if (!rl(e).some((c) => tn(c)?.spans.some((l) => o.some((u) => Vi(l.bytes, u.bytes)))))
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
function jA(e, t) {
  const n = U(e) ? Hk(e) : void 0, r = n && Gk(t);
  if (!n || !r)
    return;
  let i = 0, s;
  for (const { text: o, spans: a } of n.pieces) {
    const c = { spans: a, length: o.length };
    if (s === void 0) {
      const l = a.findIndex((u, f) => Vi(u.bytes, r.bytes) && r.offset >= u.base && r.offset <= rp(c, f));
      if (l >= 0) {
        const u = a[l].start + (r.offset - a[l].base);
        s = i + Wu(o, u).before;
      }
    }
    i += Wu(o, 0).total;
  }
  return s === void 0 ? void 0 : { decorator: n.decorator, before: s, total: i };
}
function VA(e, t) {
  const n = Gk(t);
  if (!n)
    return;
  const r = Jk(e), i = r.findIndex((a) => Vi(a.bytes, n.bytes));
  if (i < 0)
    return;
  const s = r.reduce((a, c) => a + c.length, 0), o = r.slice(0, i).reduce((a, c) => a + c.length, 0) + Math.min(Math.max(n.offset, 0), r[i].length);
  return { decorator: e, before: o, total: s };
}
function Gk(e) {
  if ($o(e))
    return {
      bytes: { kind: "attributeKey", keyName: e.keyName },
      offset: e.keyOffset
    };
  if (Oc(e))
    return { bytes: { kind: "attributeMarker", keyName: e.keyName }, offset: 0 };
  if (Oo(e))
    return {
      bytes: { kind: "closingAttributeMarker", keyName: e.keyName },
      offset: e.keyClosingMarkerOffset
    };
  if (Kf(e))
    return { bytes: { kind: "marker" }, offset: 0 };
  if (No(e)) {
    const t = Wk(e.jsonPath);
    return t === void 0 ? void 0 : { bytes: { kind: "property", property: t }, offset: e.propertyOffset };
  }
}
function Jk(e) {
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
function WA(e) {
  if (Ar(e) || Wr(e))
    return Jk(e).map(({ text: r }) => r).join("");
  const t = e.getParent(), n = U(t) ? Hk(t) : void 0;
  return n?.decorator.is(e) ? n.pieces.map(({ text: r }) => r.trim()).join("") : Wc(e).trim();
}
function Tg(e, t) {
  if (!bi(e))
    return [e, t];
  const n = e.getParent();
  if (!n || !A(n))
    return [e, t];
  const r = e.getIndexWithinParent();
  if (r < 0)
    return [e, t];
  const i = e.getTextContentSize(), s = t >= i && t > 0 || t === i - 1 && Yk.test(e.getTextContent());
  return [n, s ? r + 1 : r];
}
const Yk = /[ \u00A0]$/;
function HA(e, t, n) {
  let r;
  if (A(e))
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
  if (r && s && bi(r))
    return [s, r.getIndexWithinParent() + 1];
  const o = A(r) ? r.getLastDescendant() : r;
  return C(o) ? [o, o.getTextContentSize()] : [e, t];
}
function Hu(e) {
  return A(e) ? "element" : "text";
}
function Pi(e, t) {
  const n = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = n ? n[1] : e, i = $n(r);
  let s = Ee();
  for (const o of i) {
    if (!s || !A(s))
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
  const r = C(e) ? Md(e) : void 0;
  if (C(e) && r && t > r.start) {
    const s = Ms(e, t, n);
    if (s)
      return {
        jsonPath: Nt([...jn(s.parent), s.index]),
        offset: s.offset
      };
  }
  if (C(e) && t > 0 && t === e.getTextContentSize() && GA(e)) {
    const s = JA(e, n);
    if (s)
      return s;
  }
  const i = ju(e, t, n);
  if (i)
    return i;
  if (ue(e)) {
    const s = e.getChildrenSize(), o = e.getChildAtIndex(Math.min(t, s - 1));
    if (C(o)) {
      const c = t >= s ? o.getTextContentSize() : 0;
      return Qn(o, c, n);
    }
    if (o && t > 0 && t < s) {
      const c = Qk(e, t, n);
      if (c)
        return c;
    }
    const a = e.getParent();
    if (a) {
      const c = e.getIndexWithinParent(), l = t > 0 ? c + 1 : c;
      return Qn(a, l, n);
    }
  }
  if (A(e)) {
    const s = e.getChildAtIndex(t), o = s && Xk(s);
    if (o) {
      const l = ju(o, 0, n);
      if (l)
        return l;
    }
    if (s && bi(s))
      return {
        jsonPath: Nt(jn(e))
      };
    const a = t > 0 ? e.getChildAtIndex(t - 1) : null;
    if (!s && a && ex(a, e))
      return qa(e, !0, n);
    if (ot(e) || Pn(e))
      return qa(e, t > 0, n);
    const c = _t(e) && Mn(e.getParent()) ? e.getParentOrThrow() : e;
    return Zk(c, vs(e, t, n), n);
  }
  if (C(e)) {
    if (t < Gs(e)) {
      const c = e.getPreviousSibling();
      if (N(c))
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
  return qa(e, t > 0, n);
}
function GA(e) {
  if (!Yk.test(e.getTextContent()))
    return !1;
  if (Ue(e))
    return !0;
  const t = In(e);
  return D(t) && !!St(t)?.is(e);
}
function JA(e, t) {
  let n = e;
  for (let s = n.getParent(); !n.getNextSibling() && ue(s); s = n.getParent())
    n = s;
  const r = n.getNextSibling();
  if (!r) {
    const s = n.getParent();
    return !s || YA(n) ? void 0 : Qn(s, s.getChildrenSize(), t);
  }
  const i = A(r) ? r.getFirstDescendant() ?? r : r;
  if (!(Vu(i, t) || tn(i)?.spans[0]?.bytes.kind === "precedingText"))
    return Qn(i, 0, t);
}
function YA(e) {
  for (let t = e; t; t = t.getParent())
    if (t.getNextSibling())
      return !1;
  return !0;
}
function Xk(e) {
  if (tn(e))
    return e;
  if (!Be(e))
    return;
  const t = e.getFirstDescendant();
  return t && tn(t) ? t : void 0;
}
function Qk(e, t, n) {
  for (let r = t; r < e.getChildrenSize(); r++) {
    const i = e.getChildAtIndex(r);
    if (!i)
      return;
    const s = Xk(i);
    if (s)
      return ju(s, 0, n);
    if (C(i) && Ms(i, 0, n))
      return Qn(i, 0, n);
    if (C(i) || Pn(i))
      continue;
    const o = S0(i, n);
    if (o)
      return Zk(o.parent, o.point, n);
  }
}
function Zk(e, t, n) {
  const r = jn(e);
  return t.type === "text" ? {
    jsonPath: Nt([...r, t.index]),
    offset: t.offset
  } : ip(e, r, t.index, n);
}
function ex(e, t) {
  const n = tn(e);
  return !!n && n.owner.is(t) && n.spans[0]?.bytes.kind === "closingMarker";
}
function qa(e, t, n) {
  const r = e.getParent();
  if (!r)
    return { jsonPath: Nt(jn(e)) };
  const i = e.getIndexWithinParent() + (t ? 1 : 0);
  if (ue(r)) {
    if (i > 0 && i < r.getChildrenSize()) {
      const s = Qk(r, i, n);
      if (s)
        return s;
    }
    return qa(r, i > 0, n);
  }
  return Qn(r, i, n);
}
function ip(e, t, n, r) {
  const i = en(e, r), s = i[n];
  if (!s)
    return XA(e, t, i, r);
  const o = Nt([...t, n]);
  return s.type === "text" ? { jsonPath: o, offset: 0 } : { jsonPath: o };
}
function XA(e, t, n, r) {
  if (Mn(e))
    return lc(e, t, 1, r);
  if (sp(e) !== void 0) {
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
  return QA(e) || !i || s === void 0 ? lc(e, t, 0, r) : ip(i, t.slice(0, -1), s + 1, r);
}
function lc(e, t, n, r) {
  const i = Nt(t), s = sp(e);
  if (s !== void 0)
    return {
      jsonPath: i,
      closingMarkerOffset: s + n
    };
  if (A(e)) {
    const l = en(e, r), u = l.length - 1, f = l[u], d = [...t, u];
    if (f?.type === "text")
      return { jsonPath: Nt(d), offset: f.length + n };
    if (f)
      return lc(f.node, d, n, r);
  }
  const o = (l, u) => ({
    jsonPath: jk(i, l),
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
  const c = Ze(e) ? e.getMarker() : ZA(e);
  return c === void 0 ? { jsonPath: i } : o("marker", c);
}
function sp(e) {
  if (U(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : st(e.getMarker(), Fc(e)).length;
  if (D(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : st(e.getMarker()).length;
  if (Ke(e))
    return st("").length;
  if (Ze(e)) {
    const { closing: t } = zc(e.getTag(), e.getMarker(), e.getUnknownAttributes());
    return t === "" ? void 0 : t.length;
  }
}
function QA(e) {
  const t = In(e);
  return me(e) || _t(e) || Ie(e) || xk(e) || Ze(e) && e.getTag() === "table:row" || Mn(t) || ji(t);
}
function ZA(e) {
  if (me(e) || U(e) || Ke(e) || xk(e) || H0(e))
    return e.getMarker();
}
function zl(e) {
  if (A(e)) {
    const n = e.getLastChild();
    let r = n;
    for (; r && eP(r, e); )
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
  return t && A(t) ? [t, 0] : Qr(e, !0);
}
function eP(e, t) {
  return Ad(e) || Be(e) || Rt(e) && e.getTextType() === "attribute" || ex(e, t);
}
function tP(e, t) {
  for (const n of rl(e)) {
    const r = tn(n);
    if (!r?.owner.is(e))
      continue;
    const { spans: i } = r;
    if (i.some((o) => Vi(o.bytes, { kind: "attributeKey", keyName: t })))
      return;
    const s = i.find((o) => Vi(o.bytes, { kind: "property", property: t }));
    if (s && n.getTextContent()[s.start - 1] === "|")
      return [n, s.start];
  }
}
function nP(e, t, n) {
  for (const r of rl(e)) {
    if (!bi(r))
      continue;
    const i = tn(r);
    if (!i?.owner.is(e))
      continue;
    const s = i.spans.findIndex((o) => Vi(o.bytes, t));
    if (!(s < 0))
      return n > rp(i, s) ? [r, i.spans[s + 1]?.start ?? i.length] : void 0;
  }
}
function jl(e, t) {
  if (!D(e) || t !== ti.cat?.keyName)
    return;
  const n = e.getChildren().find((s) => s.getType() === gi);
  if (!n)
    return;
  const [r, i] = Qr(n, !0);
  return r && i !== void 0 ? [r, i] : void 0;
}
function Qr(e, t) {
  const n = e.getParent();
  return n ? [n, e.getIndexWithinParent() + (t ? 1 : 0)] : [void 0, void 0];
}
function rP(e, t) {
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
function Cg(e, t) {
  const n = Ee(), r = lc(n, [], 1, t);
  return vg(r) === vg(e) ? [n, n.getChildrenSize()] : void 0;
}
function vg(e) {
  return JSON.stringify(Object.entries(e).sort(([t], [n]) => t.localeCompare(n)));
}
function tx(e) {
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
    const i = C0(r, n);
    i >= 0 && t.unshift(i), n = r;
  }
  return t;
}
function nx() {
  for (let e = Ee().getFirstChild(); e; e = e.getNextSibling())
    if (ji(e))
      return !0;
  return !1;
}
function iP(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function rx(e, t, n, r, i, s, o) {
  if (!tt.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = n ? el(n, i) : w();
  if (!E(a))
    return;
  const c = aP(a, e, r, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? iP(e, s), u = ix(e, l, c, i, s, void 0, void 0);
  return oP(u, a, i), u;
}
function op(e) {
  return e !== "expanded";
}
function sP(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const n = t.getNode();
  if (!C(n) || !U(n.getParent()))
    return;
  if (N(n))
    return t.offset === 0 && n.getMarkerSyntax() === "closing" ? n : void 0;
  if (t.offset !== n.getTextContentSize())
    return;
  const r = n.getNextSibling();
  return N(r) && r.getMarkerSyntax() === "closing" ? r : void 0;
}
function oP(e, t, n) {
  const r = op(n?.noteMode);
  e.setIsCollapsed(r), t.isCollapsed() || f0(t), Ud(t), Un(t);
  const i = sP(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), r || e.getChildren().reverse().find(U)?.selectEnd();
}
function ds(e, t, n) {
  const r = Kr(e);
  r.setUnknownAttributes({ closed: "false" });
  const i = n?.markerMode === "editable";
  i ? r.append($t(e)) : n?.markerMode === "visible" && r.append(Ur("marker", Ve(e)));
  const s = t === "" ? Pt : i ? q + t : t;
  return r.append(Re(s)), r;
}
function aP(e, t, n, r, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = n ?? {}, u = i.chapterVerseSeparator ?? ":", f = i.verseRangeSeparator ?? "-", d = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => f)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (d !== void 0 && o.push(ds("fr", d, r)), !e.isCollapsed()) {
        const p = _g(e);
        p.length > 0 && o.push(ds("fq", p, r));
      }
      o.push(ds("ft", "", r));
      break;
    case "x":
    case "ex":
      if (d !== void 0 && o.push(ds("xo", d, r)), !e.isCollapsed()) {
        const p = _g(e);
        p.length > 0 && o.push(ds("xq", p, r));
      }
      o.push(ds("xt", "", r));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function ix(e, t, n, r, i, s, o) {
  const a = o === "false", c = a ? !1 : op(r?.noteMode), l = nd(e, t, c);
  s && Ht(l, oi, () => s);
  const u = r?.isNoteShellEditable === !1;
  let f, d;
  r?.markerMode === "editable" ? (f = $t(e), u && f.setMode("token"), a || (d = $t(e, "closing"), u && d.setMode("token"))) : r?.markerMode === "visible" && (f = Ur("marker", Ve(e) + " "), a || (d = Ur("marker", st(e))));
  let p;
  if (f && l.append(f), r?.markerMode === "editable" && !c)
    p = Re(vt(l.__caller)).toggleUnmergeable(), u && p.setMode("token"), l.append(p, ...n);
  else {
    const h = () => Fi(), g = n.flatMap(gP(h));
    if (t === "")
      l.append(...g);
    else {
      const m = vd(n);
      let y = () => {
      };
      i?.noteCallerOnClick && (y = i.noteCallerOnClick), p = Jd(l.__caller, m, y), l.append(p, h(), ...g);
    }
  }
  return d && l.append(d), l;
}
function br(e) {
  if (typeof e == "string") {
    const t = X(e);
    return D(t) ? t : void 0;
  }
  return gA(e);
}
function Da(e, t) {
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
      cP(i);
    else {
      const s = ap(e), o = s === -1 ? r.length : s;
      e.select(o, o);
    }
  }
}
function ap(e) {
  const t = e.getChildrenSize() - 1, n = e.getLastChild();
  return N(n) && n.getMarkerSyntax() === "closing" || gn(n) && n.getTextContent() === st(e.getMarker()) ? t : -1;
}
function cP(e) {
  const t = ap(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const n = e.getChildAtIndex(t - 1);
  C(n) && !Pn(n) ? n.selectEnd() : e.select(t, t);
}
function sx(e, { isContentChange: t = !1 } = {}) {
  const n = e.getNextSibling();
  if (C(n) && !da(n)) {
    n.select(0, 0);
    return;
  }
  const r = e.getParent();
  if (!r)
    return;
  const i = e.getIndexWithinParent() + 1;
  r.canBeEmpty() ? r.select(i, i) : cp(r, i, { announce: !t });
}
function cp(e, t, { announce: n = !0 } = {}) {
  const r = e.getChildAtIndex(t - 1);
  if (!D(r) || r.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const i = Dr();
  i.anchor.set(e.getKey(), t, "element"), i.focus.set(e.getKey(), t, "element"), Un(i), n && Ut().dispatchCommand(hn, void 0);
}
function Sg(e, t, n) {
  const r = St(e), i = lP(e, r);
  if (n && ax(i, t, n, ox(e, r)))
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
function lP(e, t) {
  const n = [];
  for (const { node: r } of Xi(e))
    !C(r) || Qe(r, Be) || (lp(r, t) ? n.push({ node: r, isGlyph: !1, dataStart: fd(r) }) : uP(r, e) && n.push({ node: r, isGlyph: !0, dataStart: 0 }));
  return n;
}
function uP(e, t) {
  return kn(e) ? !0 : N(e) && !t.is(e.getParent());
}
function ox(e, t) {
  return (n) => {
    let r = n;
    for (; !r.getPreviousSibling(); ) {
      const o = r.getParent();
      if (!o || o.is(e))
        return;
      r = o;
    }
    const i = r.getPreviousSibling(), s = A(i) ? i.getLastDescendant() : i;
    if (C(s) && (t?.is(s) || lp(s, t)))
      return s;
  };
}
function ax(e, t, n, r) {
  let i = 0, s = 0;
  for (const { node: o, isGlyph: a, dataStart: c } of e) {
    if (!a) {
      const l = o.getTextContentSize() - c;
      if (i += l, l > 0 && (s = 0), i > t)
        return !1;
      continue;
    }
    if (i === t && s === n.index)
      return fP(o, n.offset, r), !0;
    s += 1;
  }
  return !1;
}
function fP(e, t, n) {
  const r = e.getTextContentSize(), i = e.isToken() ? r : Math.min(Math.max(t, 0), r), s = i === 0 ? n(e) : void 0;
  if (s) {
    const o = s.getTextContentSize();
    s.select(o, o);
  } else
    e.select(i, i);
}
function dP(e, t, n) {
  const { opener: r, value: i, closer: s } = ca(e);
  if (!i)
    return !1;
  const o = pP(i);
  if (n) {
    const c = [];
    r && c.push({ node: r, isGlyph: !0, dataStart: 0 }), c.push({ node: i, isGlyph: !1, dataStart: o }), s && c.push({ node: s, isGlyph: !0, dataStart: 0 });
    const l = St(e);
    if (ax(c, t, n, ox(e, l)))
      return !0;
  }
  const a = Math.min(o + Math.max(t, 0), i.getTextContentSize());
  return i.select(a, a), !0;
}
function pP(e) {
  return e.getTextContent().startsWith(q) ? q.length : 0;
}
function lp(e, t) {
  return !C(e) || Pn(e) || da(e) ? !1 : !t || !e.is(t);
}
function hP(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(U))
    return;
  const t = St(e);
  for (const { node: r } of Xi(e))
    if (lp(r, t))
      return;
  const n = ap(e);
  return n === -1 ? e.getChildrenSize() : n;
}
function gP(e) {
  return (t) => Rt(t) ? [t] : [t, e()];
}
function mP(e) {
  const t = e.getParent();
  return t !== null && Qe(t, D) !== null;
}
function _g(e) {
  if (!E(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const n = t[0], r = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Ff(e);
  let a = "";
  for (const c of t)
    if (!(D(c) || Lt(c) || mP(c)) && !N(c) && !kn(c) && de(c, ke) !== "attribute") {
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
const il = [
  _n,
  Gt,
  ...yE
], yP = [
  Ys,
  ...il
], bP = hi((e, t) => {
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
function kP() {
  const [e, t] = Ae(void 0), [n, r] = Ae(), i = te(null), s = _e((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = KS(l, c, () => {
      US(l, c, {
        placement: "bottom-start",
        middleware: [BS(), FS()]
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
function xP({ isOpen: e, floatingBoxRef: t }) {
  const { coords: n, updatePosition: r, cleanup: i, placement: s } = kP();
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
const TP = sS(bP);
function cx({ isOpen: e = !1, children: t }) {
  const n = te(null), { coords: r, placement: i } = xP({ isOpen: e, floatingBoxRef: n }), s = ut(() => r ? typeof t == "function" ? t : () => t : () => null, [t, r]);
  return Ni(
    P(TP, { ref: n, coords: r, style: r ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const lx = by(void 0);
function up() {
  const e = ky(lx);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function CP(e, t) {
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
function vP({ children: e, menuItems: t, onSelectOption: n, ...r }) {
  const i = CP(t, n);
  return P(lx.Provider, { value: i, children: P("div", { ...r, children: e }) });
}
const ux = hi(({ index: e, children: t, onMouseEnter: n, onClick: r, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = up(), u = _e((d) => {
    l(), c(-1), r?.(d);
  }, [r, l, c]), f = _e((d) => {
    a(e), n?.(d);
  }, [e, a, n]);
  return P("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: f, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function SP({ children: e, autoIndex: t = !0, ...n }) {
  const r = te(null), { state: { activeIndex: i, menuItems: s } } = up(), o = ut(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = ut(() => {
    const c = o(s);
    return t ? oS.map(c, (l, u) => aS(l) && l.type === ux && l.props.index === void 0 ? cS(l, { index: u }) : l) : c;
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
const _P = (e, t, n) => Ka(e, n).toLowerCase().includes(t.toLowerCase()), Mg = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Ka = (e, t) => {
  const n = e[t];
  return typeof n == "string" ? n : String(n);
};
function MP(e) {
  const { query: t, items: n, filterBy: r, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, f;
  i ? (f = i, u = n.length > 0 ? Mg(n[0]) : "") : (u = r || (n.length > 0 ? Mg(n[0]) : ""), f = (h, g) => _P(h, g, u));
  const d = s || u, p = /* @__PURE__ */ new Map();
  return n.filter((h) => {
    try {
      return f(h, t);
    } catch (g) {
      return console.warn("Error filtering item:", h, g), !1;
    }
  }).sort((h, g) => {
    const m = (x) => (p.has(x) || p.set(x, Ka(x, d).toLowerCase()), p.get(x) ?? ""), y = a ? Ka(h, d) : m(h), k = a ? Ka(g, d) : m(g);
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
          const S = y.indexOf(l), _ = k.indexOf(l);
          if (S !== -1 && _ === -1)
            return -1;
          if (_ !== -1 && S === -1)
            return 1;
          if (S !== -1 && _ !== -1)
            return S - _;
          break;
        }
      }
    return y.localeCompare(k);
  });
}
const Vl = {
  Root: vP,
  Options: SP,
  Option: ux
};
function EP(e) {
  const { query: t, items: n, filterBy: r, filter: i, sortBy: s, sortingOptions: o } = e;
  return ut(() => MP({
    query: t,
    items: n,
    filterBy: r,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, n, r, i, s, o]);
}
function AP() {
  const { moveUp: e, moveDown: t, select: n } = up();
  return ut(() => ({
    moveUp: e,
    moveDown: t,
    select: n
  }), [e, t, n]);
}
const PP = () => {
  const e = AP(), [t] = Ce();
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
function wP() {
  return PP(), null;
}
const NP = ["Shift", "Control", "Alt", "Meta"];
function fx(e) {
  const { options: t, onSelectOption: n, onClose: r, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = Ce(), u = s !== void 0, [f, d] = Ae(""), p = u ? s ?? "" : f, h = EP({ query: p, items: t, filterBy: "name" }), g = (m) => {
    r?.(), n ? n(m) : m.action(l);
  };
  return H(() => {
    a?.(p, h);
  }, [a, p, h]), H(() => l.registerCommand(_r, (m) => {
    if (u || c?.includes(m.key) || NP.includes(m.key))
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
  }, Ge), [l, u, p, o, r, c]), Xe(Vl.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (m) => g(m), children: [!u && P("input", { value: p, type: "text", disabled: !0 }), P(wP, {}), P(Vl.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (m) => m.map((k, x) => Xe(Vl.Option, { index: x, children: [P("span", { className: "label", children: k.label ?? k.name }), P("span", { className: "description", children: k.description })] }, k.name)) })] });
}
function OP({ trigger: e, items: t }) {
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
      const l = w();
      if (E(l))
        return l;
    });
    a.read(() => {
      const l = w();
      !E(l) || c?.is(l) || i(!1);
    });
  }), [n]), t && P(cx, { isOpen: r, children: ({ placement: o }) => P(fx, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function $P({ scriptureReference: e, contextMarker: t, getMarkerAction: n }) {
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
function RP(e, t) {
  const n = ts(e);
  if (Ar(e) || Wr(e)) {
    const o = 1 + e.getMarker().length + 1, a = e.getNumber();
    if (e.getShowMarker())
      return t < o + a.length ? t : void 0;
    if (t < o || t >= o + a.length)
      return;
    const c = n.indexOf(a);
    return c < 0 ? "drawn" : c + t - o;
  }
  const r = Wc(e), i = r.length - r.trimStart().length, s = r.trim().length;
  if (!(t >= s))
    return r === n ? i + t : "drawn";
}
function IP() {
  return typeof CSS > "u" || typeof Highlight > "u" || !("highlights" in CSS) ? void 0 : { registry: CSS.highlights, create: () => new Highlight() };
}
const Eg = /* @__PURE__ */ new Map(), LP = ["background-color", "color", "text-shadow"], qP = [
  "text-decoration-line",
  "text-decoration-style",
  "text-decoration-color",
  "text-decoration-thickness"
], DP = /* @__PURE__ */ new Set(["solid", "double", "dotted", "dashed", "wavy"]);
function KP(e, t) {
  const n = e.ownerDocument.defaultView;
  if (!n)
    return [];
  const r = n.getComputedStyle(e), i = n.getComputedStyle(t), s = (u) => {
    const f = r.getPropertyValue(u);
    return f && f !== i.getPropertyValue(u) ? f : void 0;
  }, o = [];
  for (const u of LP) {
    const f = s(u);
    f && o.push(`${u}: ${f}`);
  }
  const a = r.getPropertyValue("text-decoration-line");
  let c = !1;
  if (a) {
    if (a !== "none" && s("text-decoration-line")) {
      c = !0;
      for (const u of qP) {
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
    o.push("text-decoration-line: underline", `text-decoration-style: ${DP.has(l) ? l : "solid"}`);
    const u = r.getPropertyValue("border-bottom-color");
    u && o.push(`text-decoration-color: ${u}`);
    const f = r.getPropertyValue("border-bottom-width");
    f && o.push(`text-decoration-thickness: ${f}`);
  }
  return o;
}
const UP = Math.random().toString(36).slice(2, 10);
let BP = 0;
class FP {
  api;
  probeParent;
  prefix = `editor-annotation-${UP}-${BP++}`;
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
      const i = this.byClassSet.get(Wl(r.classNames));
      i && (n.has(r.range) || i.highlight.delete(r.range), !(--i.uses > 0) && (this.api.registry.delete(i.name), Eg.delete(i.name), this.byClassSet.delete(Wl(r.classNames)), this.queueRender()));
    }
  }
  dispose() {
    for (const t of [...this.byLeaf.keys()])
      this.clearLeaf(t);
    this.disposed = !0, this.observer?.disconnect(), this.style?.remove(), this.probes?.remove();
  }
  use(t) {
    const n = Wl(t);
    let r = this.byClassSet.get(n);
    if (!r) {
      const i = `${this.prefix}-${this.nextName++}`, s = this.api.create();
      s.priority = this.nextName, r = { name: i, classNames: t, highlight: s, uses: 0 }, this.byClassSet.set(n, r), this.api.registry.set(i, s), Eg.set(i, t), this.queueRender();
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
      this.measured.set(c, KP(l, i));
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
    this.style?.isConnected || (this.style = n.createElement("style"), this.style.setAttribute(dx, this.prefix), n.head.append(this.style)), this.style.textContent !== a && (this.style.textContent = a);
  }
  /**
   * Whether any style rule's selector names one of `classNames`. Errs toward yes: a substring match
   * counts, and every class set counts while any rule cannot be read.
   */
  isNamedByRule(t, n) {
    this.rules || (this.rules = HP(px(t)), this.ruleCounts = Ag(t));
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
    !t || Ag(t) === this.ruleCounts || this.forgetStyles();
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
        if (Gu(o.target))
          return !0;
        const a = [...o.addedNodes, ...o.removedNodes];
        return a.length > 0 && a.every(Gu);
      };
      i.every(s) || this.forgetStyles();
    }), this.observer.observe(t.head, { childList: !0, characterData: !0, subtree: !0 });
    const r = { attributes: !0, attributeFilter: ["class", "style", "data-theme"] };
    this.observer.observe(t.documentElement, r), t.body && this.observer.observe(t.body, r);
  }
}
const dx = "data-editor-annotation-highlights";
function Gu(e) {
  for (let t = e; t; t = t.parentNode)
    if (zP(t) && t.hasAttribute(dx))
      return !0;
  return !1;
}
function zP(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function px(e) {
  const t = "adoptedStyleSheets" in e ? e.adoptedStyleSheets : [];
  return [...e.styleSheets, ...t].filter((n) => !n.ownerNode || !Gu(n.ownerNode));
}
function Ag(e) {
  return px(e).map((t) => {
    try {
      return t.cssRules.length;
    } catch {
      return -1;
    }
  }).join(",");
}
function jP(e) {
  return "cssRules" in e;
}
function VP(e) {
  return "styleSheet" in e;
}
function WP(e) {
  return "selectorText" in e && typeof e.selectorText == "string";
}
function HP(e) {
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
      WP(o) && t.push(o.selectorText), VP(o) && (o.styleSheet ? r(o.styleSheet) : n = !0), jP(o) && r(o);
  };
  for (const i of e)
    r(i);
  return { selectors: t.join(`
`), unreadable: n };
}
function Wl(e) {
  return JSON.stringify([...e].sort());
}
function Pg(e, t, n) {
  const r = e.ownerDocument, i = r.createTreeWalker(e, NodeFilter.SHOW_TEXT), s = r.createRange();
  let o = 0, a = !1;
  for (let c = i.nextNode(); c; c = i.nextNode()) {
    const l = c.textContent?.length ?? 0;
    if (!a && t < o + l && (s.setStart(c, t - o), a = !0), a && n <= o + l)
      return s.setEnd(c, n - o), s;
    o += l;
  }
}
function GP(e, t, n) {
  return "getClientRects" in e ? Array.from(e.getClientRects()).some((r) => t >= r.left && t <= r.right && n >= r.top && n <= r.bottom) : !1;
}
function hx(e) {
  return C(e) ? e.getTextContent() : ts(e);
}
function Mo(e) {
  return hx(e).length;
}
function JP(e, t) {
  if (C(e)) {
    if (bn(e))
      return !0;
    if (uk(e)) {
      const [i, s] = Pd(e);
      return t < i || t >= s;
    }
    return t < Gs(e);
  }
  const [n, r] = Hc(ts(e));
  return t < n || t >= r;
}
function Hl(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (A(t) && !t.isInline())
      return t.getKey();
}
function YP(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getFirstChild();
    if (!n)
      return t;
    t = n;
  }
  return t;
}
function wg(e) {
  for (let t = e; t; t = t.getParent()) {
    const n = t.getNextSibling();
    if (n)
      return YP(n);
  }
}
function gx(e) {
  return A(e) ? e.getChildren().flatMap(gx) : [e];
}
const XP = 64;
function QP(e, t) {
  const n = /* @__PURE__ */ new Map(), r = (o, a, c) => {
    for (let l = a; l < c; l++)
      if (!JP(o, l))
        return !1;
    return c > a && n.set(o.getKey(), [a, c]), !0;
  };
  if (e.leaf.is(t.leaf))
    return r(e.leaf, e.end, t.start) ? n : void 0;
  const i = Hl(e.leaf);
  if (i !== Hl(t.leaf) || !r(e.leaf, e.end, Mo(e.leaf)))
    return;
  let s = wg(e.leaf);
  for (let o = 0; s && !s.is(t.leaf); o++, s = wg(s))
    if (o >= XP || Hl(s) !== i || yn(s) && Mo(s) === 0 || !r(s, 0, Mo(s)))
      return;
  if (s)
    return r(t.leaf, 0, t.start) ? n : void 0;
}
function ZP(e) {
  const t = [...e].sort(([r], [i]) => r - i), n = [];
  for (const [r, i] of t) {
    const s = n[n.length - 1];
    s && r <= s[1] ? s[1] = Math.max(s[1], i) : n.push([r, i]);
  }
  return n;
}
function e1(e, t, n, r) {
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
      for (const l of gx(c))
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
      for (const [u, [f, d]] of QP(a, l) ?? [])
        o(u, f, d);
  });
  for (const [a, c] of s)
    s.set(a, ZP(c));
  return s;
}
function t1(e, t) {
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
const n1 = "display-annotation", r1 = [
  it,
  Wn,
  Kt,
  Hn,
  _n,
  Gt,
  Ln,
  ur
], mx = /* @__PURE__ */ new Set();
function qn(e, t) {
  return JSON.stringify([e, t]);
}
function i1(e) {
  return Array.isArray(e) && e.length === 2 && typeof e[0] == "string" && typeof e[1] == "string";
}
function ao(e) {
  const t = JSON.parse(e);
  if (!i1(t))
    throw new Error(`not an annotation index key: ${e}`);
  return t;
}
function yx(e) {
  Ht(e, Vc, void 0), A(e) && e.getChildren().forEach(yx);
}
const Gl = /* @__PURE__ */ new WeakMap();
function s1(e) {
  N0({
    holdableText: WA,
    renderedOffset: RP
  });
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
  let c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
  const u = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakSet(), d = new AbortController(), p = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Set();
  let S, _ = !1;
  const j = IP(), $ = j ? new FP(j, () => e.getRootElement()?.parentElement ?? null) : void 0;
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
    const Z = ae.map((Q) => ue(Q) ? Q.getTextContent() : ei(Q).filter((se) => se.type === V && se.id === G).map((se) => Ru(Q, se)).join("")).join("");
    o.set(L, Z);
  }
  function ye(L, V, G) {
    return g.get(L)?.has(V) ? y.has(L) ? !0 : ($?.leafHighlights(L) ?? []).some((J) => J.annotations.includes(V) && GP(J.range, G.clientX, G.clientY)) : !1;
  }
  function nt(L, V) {
    const G = /* @__PURE__ */ new Map();
    for (const J of ei(L)) {
      const ae = qn(J.type, J.id);
      G.has(ae) || !ye(L.getKey(), ae, V) || G.set(ae, { annotation: J, text: Ru(L, J) });
    }
    return G;
  }
  function rt(L, V, G) {
    e.getEditorState().read(() => {
      const J = Yi(L);
      if (!J)
        return;
      const ae = G === "leave" ? /* @__PURE__ */ new Map() : nt(J, V), Z = (se, { annotation: ce, text: qe }) => nc(e, ce.type, ce.id)?.[se]?.(V, ce.type, ce.id, qe);
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
      ...Qy(fe, V),
      n1,
      ...G
    ].flatMap((J) => J.match(/\S+/g) ?? []);
  }
  function Je(L, V) {
    const G = u.get(L) ?? [];
    $a(L, ...G.filter((J) => !V.includes(J))), yo(L, ...V), u.set(L, V);
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
    ])), Q = ei(V).length > 0, se = hx(V);
    let ce = t1(se.length, Z);
    if (!ce.whole && !$ && (ce = Q ? { whole: !0 } : { whole: !1, segments: [] }), Q && dr(G), ce.whole) {
      $?.clearLeaf(L), y.add(L), Je(G, rn(J));
      return;
    }
    if (y.delete(L), Je(G, []), !$)
      return;
    const qe = [];
    for (const { start: Ne, end: sn, annotations: Cn } of ce.segments) {
      const wr = Pg(G, Ne, sn);
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
    S?.disconnect(), S = void 0;
    const V = L?.ownerDocument.defaultView;
    !L || !V || !$ || (S = new V.MutationObserver(F), S.observe(L, { childList: !0, characterData: !0, subtree: !0 }));
  }
  function ve(L) {
    const V = /* @__PURE__ */ new Set();
    for (const J of L)
      g.has(J) && V.add(J);
    const G = /* @__PURE__ */ new Set([...t.keys(), ...h.keys()]);
    for (const [J, ae] of r)
      ae.size >= 2 && G.add(J);
    for (const J of G) {
      const [ae, Z] = ao(J), Q = e1(ae, Z, t.get(J) ?? [], r.get(J) ?? []), se = h.get(J) ?? /* @__PURE__ */ new Map();
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
          const Ne = Pg(se, ce, qe);
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
    gk(e, V, G), s.delete(L), o.delete(L);
  }
  function Pr() {
    for (const [L, V] of L_(e))
      we(L, V);
  }
  function we(L, V) {
    const G = qn(L, V);
    a.add(G), c.add(G);
  }
  function pr() {
    a.clear(), q_(e);
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
    if (L.has(Rc))
      return;
    const ae = [];
    for (const Z of V) {
      if (I(Z) > 0)
        continue;
      const [Q, se] = ao(Z), ce = nc(e, Q, se)?.onRemove ?? s.get(Z), qe = o.get(Z) ?? "";
      if (Te(Z, Q, se), !(!ce || a.has(Z) || G.has(Z))) {
        a.add(Z), Dh(e, Q, se, !0);
        for (const Ne of J.get(Z) ?? [])
          D_(Ne, Q, se);
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
    a.delete(G), Dh(e, L, V, !1);
  }
  const Jt = et(
    ...r1.filter((L) => e.hasNodes([L])).map((L) => e.registerMutationListener(L, Tn, { skipInitialization: !1 })),
    e.hasNodes([gt]) ? e.registerMutationListener(gt, ee, {
      skipInitialization: !1
    }) : () => {
    },
    I_(e),
    e.registerUpdateListener(pe),
    q0(e, [Gt, _n]),
    e.registerUpdateListener(({ dirtyLeaves: L, dirtyElements: V }) => {
      $?.noticeStylesheetChanges(), !(L.size === 0 && V.size === 0) && (We([...L, ...V.keys()]), S?.takeRecords());
    }),
    // Also paints what the mutation listeners above found already in the document.
    e.registerRootListener((L) => {
      oe(L), L && We([...g.keys()]);
    }),
    () => {
      _ = !0, d.abort(), $?.dispose(), S?.disconnect();
    },
    e.registerCommand(
      pS,
      ({ nodes: L }) => (L.forEach(yx), !1),
      // Critical, and never handling the command, so a handler that does handle it cannot skip the
      // strip.
      He
    )
  );
  return {
    index: {
      keysFor: (L, V) => t.get(qn(L, V)) ?? mx,
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
function o1(e) {
  let t = Gl.get(e);
  t || (t = s1(e), Gl.set(e, t)), t.references++;
  const n = t;
  let r = !1;
  return {
    index: n.index,
    release: () => {
      r || (r = !0, n.references--, !(n.references > 0) && (n.unregister(), Gl.delete(e)));
    }
  };
}
function bx(e) {
  const t = te(void 0);
  return js(() => {
    const n = o1(e);
    return t.current = n.index, () => {
      t.current = void 0, n.release();
    };
  }, [e]), ut(() => ({
    keysFor: (n, r) => t.current?.keysFor(n, r) ?? mx,
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
function a1(e, t) {
  H(() => {
    if (!e.hasNodes([gt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const n = /* @__PURE__ */ new Map();
    return et(Jf(e, gt, (r) => Ki(r.getTypedIDs(), r.getTypedOnClicks(), r.getTypedOnRemoves(), r.getTypedOnMouseEnters(), r.getTypedOnMouseLeaves()), (r, i) => {
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
const c1 = hi(function({ logger: t, viewOptions: n }, r) {
  const [i] = Ce(), s = ut(() => /* @__PURE__ */ new Map(), []);
  a1(i, s);
  const o = bx(i), a = (c, l, u) => {
    const f = Array.from(u ?? s.get(Eo(c, l)) ?? []);
    Zy(c, l, f);
    const d = [];
    for (const h of Array.from(o.keysFor(c, l))) {
      const g = X(h);
      if (!g)
        continue;
      const m = ei(g).filter((y) => y.type === c && y.id === l);
      hk(g, c, l) && d.push(...m.map((y) => Ru(g, y)));
    }
    const p = nc(i, c, l);
    gk(i, c, l), d.length > 0 && p && f.length === 0 && !o.hasReported(c, l) && (o.noteReported(c, l), p.onRemove?.(c, l, "removed", d.join("")));
  };
  return Nc(r, () => ({
    setAnnotation(c, l, u, f, d, p, h) {
      if (gt.isReservedType(l))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${l}'. Use the appropriate plugin instead.`);
      i.update(() => {
        const g = /* @__PURE__ */ new Map(), m = el(c, n, {
          forAnnotation: !0,
          decoratorHolds: g
        });
        if (m === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        a(l, u), o.noteSet(l, u), Ld(m, l, u, f, d, p, h, { decoratorHolds: g });
      }, { tag: xu });
    },
    removeAnnotation(c, l) {
      if (gt.isReservedType(c))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${c}'. Use the appropriate plugin instead.`);
      const u = s.get(Eo(c, l));
      (u === void 0 || u.size === 0) && o.keysFor(c, l).size === 0 || i.update(() => {
        a(c, l, u);
      }, { tag: xu });
    },
    getAnnotationRanges(c, l) {
      return o.rangesFor(c, l);
    }
  })), null;
});
function l1({ dirtyElements: e, dirtyLeaves: t, prevEditorState: n, tags: r }, i) {
  return e.size === 0 && t.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
  // stack — its bytes really did change, so it must reach `onChange` like any edit.
  // Without this exemption the cached USJ and the emitted delta both keep showing the
  // pre-settle bytes, and the host saves a document the editor is no longer displaying.
  r.has(zf) && !r.has(By) || i.ignoreTags.some((s) => r.has(s)) || n.isEmpty();
}
function u1(e, { dirtyLeaves: t, prevEditorState: n }) {
  let r = new Cs();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = X(i), o = s !== null && An(s) !== void 0;
    if (t.size === 1 && C(s) && !o && XE(s)) {
      const a = Vd(s);
      if (a !== void 0) {
        const c = n.read(() => {
          const f = X(i);
          return new Cs([C(f) ? Fu(f) : { insert: "" }]);
        }), l = new Cs([Fu(s)]), u = new Cs(a > 0 ? [{ retain: a }] : []);
        r = r.concat(u).concat(c.diff(l));
      }
    } else {
      const a = hg(n), c = hg(e.getEditorState());
      r = a.diff(c);
    }
  }), r.ops;
}
function f1(e, t, n, r) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += d1(s, i, t, r);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        r?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      r?.debug(`Delete: ${s.delete}`), h1(i, s.delete, r);
    } else "insert" in s ? typeof s.insert == "string" ? (r?.debug(`Insert: '${s.insert}'`), i += g1(i, s.insert, s.attributes, t, r)) : typeof s.insert == "object" && s.insert !== null ? (r?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), y1(i, s, t, n, r) ? i += 1 : r?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : r?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : r?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function d1(e, t, n, r) {
  return typeof e.retain != "number" || e.retain < 0 ? (r?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (r?.debug(`Retain: ${e.retain}`), e.attributes && (r?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), p1(t, e.retain, e.attributes, n, r)), e.retain);
}
function p1(e, t, n, r, i) {
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
          if (ci(n)) {
            const k = g.getParent();
            if (U(k)) {
              const x = n.char;
              let S;
              Array.isArray(x) ? a >= 0 && a <= x.length - 1 && (S = x[a]) : a === 0 && (S = x);
              const _ = S ? Bi(S, k) : !1;
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
                const j = Ng(g, n, r, i);
                if (j && j.length > 0) {
                  let $ = k;
                  for (const ne of j)
                    $.insertAfter(ne), $ = ne;
                }
              }
            } else {
              const x = Re("");
              g.replace(x);
              const S = Ng(g, n, r, i);
              if (S && S.length > 0) {
                let _ = x;
                for (const j of S)
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
      e <= o && o < e + t && s > 0 && (Og(u, n), s -= 1), o += 1;
    else if (U(u)) {
      a += 1;
      let f = !1;
      if (e <= o && o < e + t && s > 0)
        if (ci(n)) {
          const d = n.char;
          let p;
          if (Array.isArray(d) ? a >= 0 && a <= d.length - 1 && (p = d[a]) : a === 0 && (p = d), p) {
            Ju(u, p.style), typeof p.cid == "string" && Ht(u, Ui, () => p.cid);
            const h = ht(p, ac);
            h && Object.keys(h).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...h
            }) : u.setUnknownAttributes(void 0);
          }
        } else (n.char === !1 || n.char === null || M1(n.char)) && (f = !0);
      if (s > 0) {
        const d = u.getChildren();
        for (const p of d) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return f && bu(u), !0;
        }
      }
      f && bu(u), a -= 1;
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
          Og(u, n);
        else if (fp(n)) {
          const p = Tx(n.para, r);
          p && u.replace(p, !0);
        }
        s -= d;
      }
      o += d;
    } else if (A(u)) {
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
function Ng(e, t, n, r) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Xs(t.char, n, e, i), o = s.find(U);
  if (!o) {
    r?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Dn(t, e);
    return;
  }
  const a = {};
  _x.forEach((u) => {
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
function kx(e, t) {
  e.setMarker(t);
  const n = e.getFirstChild();
  N(n) ? (n.setMarker(t), n.setTextContent(Ve(t))) : Rt(n) && n.getTextType() === "marker" && n.setTextContent(Ve(t) + q);
}
function Ju(e, t) {
  const n = e.getMarker();
  if (e.setMarker(t), t === n)
    return;
  e.getChildren().forEach((o) => {
    N(o) && o.getMarker() === n && o.setMarker(t);
  });
  const r = U(e.getParent()), i = e.getFirstChild();
  Rt(i) && i.getTextType() === "marker" && i.getTextContent() === Ve(n, r) && i.setTextContent(Ve(t, r));
  const s = e.getLastChild();
  Rt(s) && s.getTextType() === "marker" && s.getTextContent() === st(n, r) && s.setTextContent(st(t, r));
}
function Og(e, t) {
  for (const n of Object.keys(t)) {
    const r = t[n];
    if (n === "char" && U(e) && ci(t)) {
      const i = Yu(r);
      if (Ju(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Ht(e, Ui, () => o);
      }
      const s = ht(i, ac);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof r == "string" && (ot(e) || Me(e) || Ke(e) || D(e) || Ze(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [n]: r
    }) : (Ie(e) || me(e) || U(e)) && (n === "style" && me(e) ? kx(e, r) : n === "style" && U(e) ? Ju(e, r) : n === "code" && Ie(e) ? e.setCode(r) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [n]: r
    })), n === "segment" && Ht(e, oi, () => r));
  }
}
function h1(e, t, n) {
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
        } else me(a) ? a.replace(zn(), !0) : a.remove();
      }
      i += 1;
    } else if (A(a)) {
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
function g1(e, t, n, r, i) {
  if (t === Vo)
    return $g(e, n, r, i);
  if (t.endsWith(Vo) && !fp(n)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (ci(n))
        throw new Error("Text + LF should not have char attributes");
      o += uc(e, s, n, i);
    }
    return o += $g(e + o, n, r, i), o;
  } else return ci(n) ? m1(e, t, n, r, i) : uc(e, t, n, i);
}
function m1(e, t, n, r, i) {
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
      } else if (A(y)) {
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
      h && Bi(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Bi(a, o) || (o = void 0));
  const c = typeof n.segment == "string" ? n.segment : void 0, u = Xs(a, r, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const f = u.find(U);
  if (!f)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(n.char)}. Falling back to rich text insertion.`), uc(e, t, void 0, i);
  const d = {};
  for (const [h, g] of Object.entries(n))
    h !== "char" && h !== "segment" && typeof g == "string" && (d[h] = g);
  Object.keys(d).length > 0 && f.setUnknownAttributes(d);
  let p = !0;
  for (const h of u)
    if (!xx(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), uc(e, t, void 0, i));
}
function uc(e, t, n, r) {
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
          U(d) && !ci(n) ? d.insertAfter(f) : c.insertAfter(f);
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
    } else if (A(c)) {
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
function xx(e, t, n) {
  const r = Ee();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === r && e === 0 && !r.getFirstChild())
      return t.isInline() ? (n?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), r.append(zn().append(t))) : (n?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), r.append(t)), s = !0, !0;
    if (!A(a))
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
      } else if (A(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return A(a) && !s && (e === i || a === r && e > i) ? a === r ? (t.isInline() ? (n?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), r.append(zn().append(t))) : (n?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), r.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      wt(a) ? _t(a) && me(t) && e === i ? (n?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !wt(t) ? (n?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (n?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (U(a) ? (n?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !wt(t) ? (n?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (n?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(r), s || n?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function y1(e, t, n, r, i) {
  let s;
  return Xr("chapter", t) ? s = k1(t.insert.chapter, n) : Xr("verse", t) ? s = x1(t.insert.verse, n) : Xr("ms", t) ? s = T1(t.insert.ms) : Xr("note", t) ? s = Cx(t, n, r) : Xr("unknown", t) ? s = vx(t, n, r, i) : Xr("unmatched", t) && (s = v1(t.insert.unmatched, n)), s ? xx(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function $g(e, t, n, r) {
  let i;
  fp(t) ? i = Tx(t.para, n) : _1(t) && (i = b1(t.book)), i ??= zn();
  const s = i, o = me(s), a = _t(s);
  let c = 0, l = !1;
  function u(f) {
    if (l)
      return !0;
    if (zr(f)) {
      const d = f.getTextContentSize();
      if (e >= c && e <= c + d) {
        const p = f.getParent();
        if (me(p) && (o || a)) {
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
        if (me(f) && s) {
          const p = f;
          return r?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && me(f) && s)
        return r?.debug(`Creating new block node after existing ParaNode (marker: ${f.getMarker()}) at targetIndex ${e}`), f.insertAfter(s), l = !0, !0;
    } else if (A(f)) {
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
function b1(e) {
  const { style: t, code: n } = e;
  if (!t || t !== Fo || !n || !En.isValidBookCode(n))
    return;
  const r = ht(e, KE);
  return Fb(n, r);
}
function Tx(e, t) {
  const { style: n } = e;
  if (!n)
    return;
  const r = ht(e, DE), i = $s(n, r);
  if (!is(t))
    return i;
  if (t.markerMode === "editable")
    i.append($t(n), Fi());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Ve(n) + q;
    i.append(t.hasGutterParaMarkers ? kM(s) : Ur("marker", s));
  }
  return i;
}
function k1(e, t) {
  if (!e)
    return;
  const { number: n, sid: r, altnumber: i, pubnumber: s } = e;
  if (!n)
    return;
  const o = ht(e, UE);
  let a;
  if (t.markerMode === "editable")
    a = yb(n, r, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = kd(n, c, r, i, s, o);
  }
  return a;
}
function x1(e, t) {
  if (!e)
    return;
  const { style: n, number: r, sid: i, altnumber: s, pubnumber: o } = e;
  if (!r)
    return;
  const a = ht(e, BE);
  let c;
  if (t.markerMode === "editable") {
    if (!n)
      return;
    const l = Fn(n, r);
    c = ab(r, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Bd(r, l, i, s, o, a);
  }
  return c;
}
function T1(e) {
  if (!e)
    return;
  const { style: t, sid: n, eid: r, attributeOrder: i } = e;
  if (!t)
    return;
  const s = ht(e, FE);
  return Vy(t, n, r, s, i);
}
function Cx(e, t, n) {
  const r = e.insert;
  if (!r.note)
    return;
  const { style: i, caller: s, category: o, contents: a } = r.note;
  if (!i || s == null)
    return;
  const c = ht(r.note, zE), l = typeof c?.closed == "string" ? c.closed : void 0, u = e.attributes?.segment;
  let f;
  u && typeof u == "string" && (f = u);
  const d = [];
  for (const h of a?.ops ?? [])
    if (typeof h.insert == "string")
      if (ci(h.attributes)) {
        const g = Xs(h.attributes.char, t, Re(h.insert), void 0, Sx(h.attributes.char, d), !1, t.markerMode === "editable");
        d.push(...g);
      } else
        d.push(Re(h.insert));
  return ix(i, s, d, t, n, f, l).setCategory(o).setUnknownAttributes(c);
}
function vx(e, t, n, r) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = ht(i, jE), l = ad(s, o, c), u = a?.ops ?? [];
  u.length > 0 && C1(u, t, n, r).forEach((p) => l.append(p));
  const f = e.attributes?.segment;
  return typeof f == "string" && Ht(l, oi, () => f), l;
}
function C1(e, t, n, r) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (ci(s.attributes)) {
        const o = Re(s.insert), a = Xs(s.attributes.char, t, o, void 0, Sx(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(Re(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Xr("unknown", s)) {
        const o = vx(s, t, n, r);
        o && i.push(o);
        continue;
      }
      if (Xr("note", s)) {
        const o = Cx(s, t, n);
        o && i.push(o);
        continue;
      }
      r?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function v1(e, t) {
  if (!e)
    return;
  const { marker: n } = e;
  if (!n)
    return;
  const r = Ed(n);
  return t.markerMode === "editable" && r.setMode("normal"), r;
}
function Sx(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Yu(e) {
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
    const c = e.map(Yu), l = c[0], u = i?.[i.length - 1];
    if (U(u) && Bi(l, u)) {
      if (c.length > 1) {
        const d = Xs(c.slice(1), t, n, void 0, void 0, !0, o);
        Jl(u, d);
      } else
        n && Jl(u, [n]);
      return [];
    }
    a();
    const f = c.reduceRight((d, p, h) => {
      const g = Kr(p.style, ht(p, ac));
      return typeof p.cid == "string" && Ht(g, Ui, () => p.cid), r && h === c.length - 1 && Ht(g, oi, () => r), d && (U(d) && (Xl(d.getMarker(), d, t, !0), Yl(d, d, t, !0)), g.append(d)), g;
    }, n);
    return Xl(l.style, f, t, s), Yl(f, f, t, s), [f];
  } else {
    const c = Yu(e), l = i?.[i.length - 1];
    if (U(l) && Bi(c, l))
      return n && Jl(l, [n]), [];
    a();
    const u = Kr(c.style, ht(c, ac));
    return typeof c.cid == "string" && Ht(u, Ui, () => c.cid), r && Ht(u, oi, () => r), n && u.append(n), Xl(c.style, u, t, s), Yl(u, u, t, s), [u];
  }
}
function Jl(e, t) {
  const n = e.getLastChild();
  N(n) && n.getMarkerSyntax() === "closing" || Rt(n) && n.getTextType() === "marker" && n.getTextContent() === st(e.getMarker(), U(e.getParent())) ? t.forEach((i) => n.insertBefore(i)) : e.append(...t);
}
function Yl(e, t, n, r = !1) {
  e.getUnknownAttributes()?.closed !== "false" && S1(e.getMarker(), t, n, !1, r);
}
function Xl(e, t, n, r = !1) {
  let i;
  if (n?.markerMode === "editable" ? i = $t(e, "opening", r) : n?.markerMode === "visible" && (i = Ur("marker", Ve(e, r))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function S1(e, t, n, r = !1, i = !1) {
  let s;
  n?.markerMode === "editable" ? r ? s = $t("", "selfClosing") : s = $t(e, "closing", i) : n?.markerMode === "visible" && (s = Ur("marker", r ? st("") : st(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function _1(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function fp(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function ci(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function M1(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Dn(e, t) {
  if (e)
    for (const n of Object.keys(e)) {
      if (n === "segment" && typeof e[n] == "string") {
        const r = e[n];
        Ht(t, oi, () => r);
        continue;
      }
      if (E1(n)) {
        const r = !!e[n], i = n, s = t.hasFormat(i);
        (r && !s || !r && s) && t.toggleFormat(i);
      }
    }
}
const _x = [
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
function E1(e) {
  return _x.includes(e);
}
function Ds(e) {
  return Rt(e) && Ie(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function Mx(e) {
  const t = ua(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function dp(e) {
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
  const o = Mx(s);
  return t.set(o.key, o.offset, o.type), !0;
}
function Ua(e) {
  const t = w();
  if (!E(t))
    return !1;
  if (t.isCollapsed()) {
    const { anchor: n } = t;
    if (n.type === "text") {
      const i = n.getNode();
      if (!(e ? n.offset === 0 : C(i) && n.offset === i.getTextContentSize()))
        return !1;
    }
    const r = e ? Hb(t) : Cd(t);
    return Ds(r);
  }
  return dp(t) && t.isCollapsed();
}
function A1(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const n = Qe(t.anchor.getNode(), Ie);
  if (!n || !Ds(n.getFirstChild()))
    return !1;
  if (t.modify("extend", e, "lineboundary"), t.isCollapsed())
    return Ua(e) || t.deleteCharacter(e), !0;
  if (t.getNodes().some(Ds)) {
    const r = Mx(n);
    t.focus.set(r.key, r.offset, r.type);
  }
  return t.isCollapsed() || t.removeText(), !0;
}
function Ma() {
  const e = w();
  return E(e) && dp(e), !1;
}
function P1() {
  const e = w();
  if (!E(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const n = t.getNode();
  return !Ie(n) || !Ds(n.getFirstChild()) ? !1 : (sr(n, 1), !0);
}
function w1(e) {
  const t = e.getChildren(), n = `\\${e.getMarker()}`, r = t.findIndex((s) => gn(s) && s.getTextContent().startsWith(n));
  if (r <= 0)
    return;
  let i = t[r];
  for (const s of t.slice(0, r))
    i.insertAfter(s), i = s;
}
function N1() {
  const [e] = Ce();
  return H(() => e.registerCommand(Ic, (t) => (O1(t), !1), qi), [e]), H(() => et(
    e.registerCommand(Lc, Ua, Ge),
    e.registerCommand(jf, Ua, Ge),
    e.registerCommand(Wa, Ua, Ge),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(Wa, A1, kr),
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
    e.registerCommand(Ty, Ma, He)
  ), [e]), H(() => et(
    // Below `DecoratorBoundarySelectionPlugin` (CRITICAL), which can itself produce `(book, 0)`
    // when it snaps a caret that landed inside the prefix glyph to the glyph's leading edge; above
    // the listeners that report the caret's position (e.g. `OnSelectionChangePlugin`, LOW), so
    // they only ever see the corrected one. Never claims the command.
    e.registerCommand(hn, () => (P1(), !1), Ge),
    e.registerNodeTransform(En, w1)
  ), [e]), null;
}
function O1(e) {
  if ($1(e.target))
    return;
  const t = w();
  E(t) && R1(t);
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
function $1(e) {
  if (!Cy(e))
    return !1;
  const t = Yi(e);
  if (!xM(t))
    return !1;
  const n = t.getParent();
  return n ? wt(n) ? Qs(n) : (sr(n, t.getIndexWithinParent() + 1), !0) : !1;
}
function R1(e) {
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
function I1() {
  const [e] = Ce();
  return H(() => {
    const t = (n) => n instanceof KeyboardEvent && !L1(n) || !sl() ? !1 : (n instanceof Event && n.preventDefault(), !0);
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
      e.registerCommand(Vf, (n) => {
        if (!(n instanceof Event) || !(n.target instanceof Node))
          return !1;
        const r = Yi(n.target);
        return !r || !li(r) ? !1 : (n.preventDefault(), !0);
      }, Ge),
      e.registerCommand(Lc, t, Ge),
      e.registerCommand(jf, t, Ge),
      e.registerCommand(Wa, t, Ge)
    );
  }, [e]), null;
}
function L1(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function li(e) {
  return Qe(e, pp) ?? void 0;
}
function pp(e) {
  return Ze(e) || Tb(e);
}
function sl() {
  const e = w();
  return E(e) ? li(e.anchor.getNode()) !== void 0 || li(e.focus.getNode()) !== void 0 : !1;
}
function q1(e, t, n) {
  if (e.height === 0)
    return !1;
  const r = e.height / 4;
  return t.some((i) => n === "down" ? i.top >= e.bottom - r : i.bottom <= e.top + r);
}
function D1(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(r, r.childNodes.length), q1(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function K1(e, t, n, r) {
  if (!Z1(t) || D1(e, n))
    return !1;
  const i = n === "up" ? qE(t) : LE(t);
  return i && r.preventDefault(), i;
}
function U1({ viewOptions: e }) {
  const [t] = Ce();
  return B1(t, e), null;
}
function B1(e, t) {
  H(() => {
    if (!e.hasNodes([Ln, Gt, tt]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const n = (r) => {
      const i = w();
      if (!E(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (r.key === "ArrowLeft" || r.key === "ArrowRight") && r.shiftKey && !r.altKey && !r.ctrlKey && !r.metaKey) {
        const u = Rg(o), f = G1(i, Ig(u, r.key) ? "next" : "previous");
        return f && r.preventDefault(), f;
      }
      if (!i.isCollapsed())
        return !1;
      if (r.key === "ArrowUp" || r.key === "ArrowDown") {
        if (r.shiftKey || r.altKey || r.ctrlKey || r.metaKey)
          return !1;
        const u = r.key === "ArrowUp" ? "up" : "down";
        return K1(e, i, u, r);
      }
      if (r.key !== "ArrowLeft" && r.key !== "ArrowRight" || !o)
        return !1;
      const a = Rg(o), c = r.shiftKey || r.altKey || r.ctrlKey || r.metaKey;
      let l = !1;
      return Ig(a, r.key) ? l = !c && Dg(i, "next") || !c && z1(i) || X1(i) || !c && s && qg(i, "next") : F1(a, r.key) && (l = !c && Dg(i, "previous") || !c && j1(i) || Q1(i, t) || !c && s && qg(i, "previous")), l && r.preventDefault(), l;
    };
    return e.registerCommand(_r, n, Ge);
  }, [e, t]);
}
function Rg(e) {
  return e.dir || "ltr";
}
function Ig(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function F1(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Xu(e) {
  if (!U(e) || e.getMarker() !== "fp")
    return;
  const t = An(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function z1(e) {
  const t = Xu(Cd(e));
  if (!t)
    return !1;
  const n = e.anchor;
  return n.type === "text" && n.offset !== n.getNode().getTextContentSize() ? !1 : (sr(t, 0), !0);
}
function j1(e) {
  const t = e.anchor, n = t.getNode();
  if (t.type === "text") {
    const r = Xu(n.getParent());
    return !r || !n.is(r.getFirstChild()) ? !1 : t.offset === 1 ? (n.select(0, 0), !0) : t.offset !== 0 ? !1 : Lg(r);
  }
  if (t.offset === 0) {
    const r = Xu(n);
    return r ? Lg(r) : !1;
  }
  return !1;
}
function Lg(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (C(t))
    return t.select(), !0;
  if (A(t)) {
    const i = t.getLastDescendant();
    return C(i) ? i.select() : t.selectEnd(), !0;
  }
  const n = e.getParent();
  if (!n)
    return !1;
  const r = e.getIndexWithinParent();
  return n.select(r, r), !0;
}
const fc = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function V1(e) {
  if (fc)
    for (const { segment: n } of fc.segment(e))
      return n.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function W1(e) {
  if (fc) {
    let r = 0;
    for (const { index: i } of fc.segment(e))
      r = i;
    return r;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), n = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (n ? 2 : 1));
}
function Ex(e) {
  for (let t = e; t; t = t.getParent())
    if (A(t) && !t.isInline())
      return t;
}
function Ax(e) {
  return !!e && N(e) && li(e) !== void 0;
}
function Ks(e) {
  return C(e) && !e.isToken() && !Ax(e) && e.getTextContentSize() > 0;
}
function Px(e) {
  return Ji(e) ? !0 : D(e) ? e.getIsCollapsed() === !0 : C(e) ? (e.isToken() || Ax(e)) && e.getTextContentSize() > 0 : yn(e) ? !Ke(e) : !1;
}
function Us(e, t, n) {
  for (let r = e; r && !r.is(n); ) {
    const i = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (i)
      return i;
    r = r.getParent();
  }
}
function ol(e, t, n) {
  for (let r = e; r; ) {
    if (Px(r))
      return r;
    if (A(r)) {
      r = (t === "next" ? r.getFirstChild() : r.getLastChild()) ?? Us(r, t, n);
      continue;
    }
    if (Ks(r))
      return r;
    r = Us(r, t, n);
  }
}
function hp(e, t, n, r, i) {
  return n === "element" && A(e) ? e.getChildAtIndex(r === "next" ? t : t - 1) ?? Us(e, r, i) : n === "text" && Px(e) && (r === "next" ? t < e.getTextContentSize() : t > 0) ? e : Us(e, r, i);
}
function Ql(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const n = hp(e.node, e.offset, e.kind, "previous", t), r = ol(n, "previous", t);
  if (!r)
    return e;
  if (Ks(r))
    return { kind: "text", node: r, offset: r.getTextContentSize() };
  const i = r.getParent();
  return i ? { kind: "element", node: i, offset: r.getIndexWithinParent() + 1 } : e;
}
function H1(e, t) {
  const n = e.getNode(), r = Ex(n);
  if (!r)
    return;
  if (e.type === "text" && Ks(n)) {
    if (t === "next" && e.offset < n.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return Ql({ kind: "text", node: n, offset: 0 }, r);
  }
  const i = hp(n, e.offset, e.type, t, r), s = ol(i, t, r);
  if (!s)
    return;
  if (Ks(s)) {
    const c = s.getTextContent(), l = t === "next" ? V1(c) : W1(c);
    return Ql({ kind: "text", node: s, offset: l }, r);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return Ql({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, r);
}
function wx(e, t, n) {
  const r = n === "collapse" ? e.anchor : e.focus, i = H1(r, t);
  return !i || i.node.is(r.getNode()) && i.offset === r.offset && i.kind === r.type ? !1 : n === "collapse" ? (i.kind === "element" && A(i.node) ? cp(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function qg(e, t) {
  return wx(e, t, "collapse");
}
function G1(e, t) {
  return wx(e, t, "extend");
}
function J1(e, t, n) {
  const r = e.getNode();
  if (e.type === "text" && Ks(r) && (t === "next" ? e.offset < r.getTextContentSize() : e.offset > 0))
    return !1;
  const i = hp(r, e.offset, e.type, t, n);
  return ol(i, t, n) === void 0;
}
function Y1(e, t) {
  const n = Ee();
  for (let r = e; r; ) {
    const i = Us(r, t, n), s = i && ol(i, t, n);
    if (!s)
      return;
    if (r = li(s), !r)
      return s;
  }
}
function Dg(e, t) {
  const n = e.anchor, r = n.getNode();
  if (li(r))
    return !1;
  const i = Ex(r);
  if (!i || !J1(n, t, i))
    return !1;
  const s = Us(i, t, Ee()), o = s && li(s);
  if (!o)
    return !1;
  const a = Y1(o, t);
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
function Kg(e) {
  const t = e.getParent();
  if (!t)
    return;
  const n = e.getIndexWithinParent() + 1;
  cp(t, n);
}
function X1(e) {
  const t = e.anchor.getNode(), n = Cd(e);
  if (D(n) && !N(n.getFirstChild())) {
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
    return i ? i.selectStart() : Kg(n), !0;
  }
  const r = n?.getParent();
  if (Rt(n) && D(r) && n.is(r?.getLastChild())) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : r.getIsCollapsed() ? Kg(r) : r.selectEnd(), !0;
  }
  return !1;
}
function Q1(e, t) {
  const n = Hb(e);
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
function Z1(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return Me(t) && yn(t);
}
function ew() {
  const [e] = Ce();
  return tw(e), null;
}
function tw(e) {
  H(() => {
    if (!e.hasNodes([ze]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return et(
      e.registerNodeTransform(ze, iw),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(ze, uM),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(ze, Ab),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(ze, (t) => jo(Br("char"), t)),
      e.registerNodeTransform(it, sw)
    );
  }, [e]);
}
function Ba(e) {
  return e.getChildren().some(N);
}
function nw(e, t) {
  const n = t.getFirstChild();
  if (!N(n) || n.getMarkerSyntax() !== "opening")
    return !1;
  const r = n.getNextSibling();
  if (jr(r)) {
    const i = r.getTextContent();
    i.startsWith(q) && (i === q ? r.remove() : r.setTextContent(i.slice(q.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function rw(e, t) {
  const n = t.getLastChild(), r = e.getChildren();
  N(n) && n.getMarkerSyntax() === "closing" ? r.forEach((i) => n.insertBefore(i)) : t.append(...r), e.remove();
}
function iw(e) {
  if (!U(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (Ba(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const n = de(e, Ui), r = e.getUnknownAttributes(), i = e.getNextSibling();
  if (U(i) && Bi({ style: t, cid: n }, i) && yr(r, i.getUnknownAttributes()))
    if (Ba(i)) {
      if (nw(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  U(s) && Bi({ style: t, cid: n }, s) && yr(r, s.getUnknownAttributes()) && (Ba(s) ? rw(e, s) : (s.append(...e.getChildren()), e.remove()));
}
const Nx = /* @__PURE__ */ new WeakSet();
function sw(e) {
  const t = e.getParent();
  if (!U(t) || Ba(t) || Nx.has(e))
    return;
  const n = e.getTextContent();
  if (n.length < 2 || !n.includes(Pt))
    return;
  const r = aw(t.getKey());
  if (r === void 0) {
    t.getChildrenSize() === 1 && n.startsWith(Pt) && Ug(e, 0);
    return;
  }
  if (r !== e.getKey())
    return;
  const i = ow(e, n);
  i !== void 0 && Ug(e, i);
}
function ow(e, t) {
  const n = w();
  if (E(n) && n.isCollapsed() && n.anchor.key === e.getKey()) {
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
function Ug(e, t) {
  const n = w(), r = E(n) ? [n.anchor, n.focus].filter((a) => a.type === "text" && a.key === e.getKey()) : [], i = r.map((a) => a.offset), s = e.getTextContent(), o = e.setTextContent(s.slice(0, t) + s.slice(t + 1));
  Nx.add(o), r.forEach((a, c) => {
    const l = i[c];
    a.set(o.getKey(), l > t ? l - 1 : l, "text");
  });
}
function aw(e) {
  return Ut().getEditorState().read(() => {
    const t = X(e);
    if (!U(t))
      return;
    const n = t.getChildren().filter((i) => !yn(i)), [r] = n;
    return n.length === 1 && C(r) && r.getTextContent() === Pt ? r.getKey() : null;
  });
}
function Ox(e) {
  return e.replaceAll("	", " ");
}
function $x() {
  const e = w();
  return !!e && !e.isCollapsed();
}
function Rx(e) {
  const t = () => !$x();
  return et(e.registerCommand(Ns, t, Xt), e.registerCommand(rr, t, Xt));
}
const gp = (e) => {
  e.dispatchCommand(Ns, null);
}, mp = (e) => {
  e.dispatchCommand(rr, null);
}, yp = (e) => {
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
      r.setData(o, Ox(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(Zn, s);
  });
}, bp = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const n = new DataTransfer(), r = await navigator.clipboard.readText();
    n.setData("text/plain", Ox(r));
    const i = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(Zn, i);
  });
};
function cw() {
  const [e] = Ce();
  return H(() => {
    const t = (n) => {
      const { key: r, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = n;
      !(Os ? s : o) || a || (!i && r.toLowerCase() === "c" ? (n.preventDefault(), gp(e)) : !i && r.toLowerCase() === "x" ? (n.preventDefault(), mp(e)) : r.toLowerCase() === "v" && (n.preventDefault(), i ? bp(e) : yp(e)));
    };
    return et(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      Rx(e),
      e.registerRootListener((n, r) => {
        r !== null && r.removeEventListener("keydown", t), n !== null && n.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function lw({ logger: e }) {
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
    t.registerCommand(Vf, (n) => {
      const r = n.dataTransfer?.getData("text/plain");
      return !r || !r.includes("\\") && !r.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), n.preventDefault(), !0);
    }, kr)
  ), [t, e]), null;
}
const dc = "editor-context-menu";
function Qu(e) {
  return `${dc}-item-${e}`;
}
const uw = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function fw({ index: e, isSelected: t, onClick: n, onMouseMove: r, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), P("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: Qu(e), onMouseMove: r, onClick: i.isDisabled ? void 0 : n, children: P("span", { className: "text", children: i.title }) });
}
function dw({ options: e, selectedItemIndex: t, onOptionClick: n, onOptionMouseMove: r }) {
  return P("div", { className: "typeahead-popover", children: P("ul", { id: dc, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => P(fw, { index: s, isSelected: t === s, onClick: () => n(i, s), onMouseMove: () => r(s), option: i }, `${s}-${i.title}`)) }) });
}
let pw = 0;
class co {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, n) {
    this.key = `context-menu-option-${pw++}`, this.title = t, this.onSelect = n.onSelect.bind(this), this.isDisabled = n.isDisabled || !1;
  }
}
function hw({ options: e } = {}) {
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
          mp(t);
        },
        isDisabled: n
      }),
      new co("Copy", {
        onSelect: () => {
          gp(t);
        }
      }),
      new co("Paste", {
        onSelect: () => {
          yp(t);
        },
        isDisabled: n
      }),
      new co("Paste as Plain Text", {
        onSelect: () => {
          bp(t);
        },
        isDisabled: n
      })
    ], p = (e ?? []).map((h) => new co(h.title, { onSelect: h.onSelect, isDisabled: h.isDisabled }));
    return [...d, ...p];
  }, [t, n, e]), l = te(null), u = te(null), f = _e(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  return H(() => Rx(t), [t]), H(() => {
    const d = (p) => {
      const h = p.target;
      t.getRootElement() === h || Ub(h) || (p.preventDefault(), u.current = document.activeElement, s({ isOpen: !0, x: p.clientX, y: p.clientY }), a(void 0));
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
          if (uw.has(p.key))
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
      return d.setAttribute("aria-controls", dc), () => {
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
    d.setAttribute("aria-activedescendant", Qu(o));
    const p = document.getElementById(dc), h = document.getElementById(Qu(o));
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
  }, [i.isOpen, i.x, i.y]), i.isOpen ? RS.createPortal(P("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: P(dw, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), f());
  }, onOptionMouseMove: (d) => {
    a((p) => p === d ? p : d);
  } }) }), document.body) : null;
}
function gw(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function mw(e) {
  if (!gS(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function yw(e) {
  return Lt(e);
}
function Zl(e, t, n) {
  const r = Yi(t.node);
  if (!yn(r) || yw(r))
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
function bw(e, t) {
  if (w())
    return !1;
  const n = e.getRootElement(), r = hS(n?.ownerDocument.defaultView ?? null);
  if (!r || r.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = r;
  if (!i || !o || !vy(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, f;
  if (r.isCollapsed)
    u = Zl(e, c, mw(c)), f = u;
  else {
    const m = gw(r.getRangeAt(0), c);
    u = Zl(e, c, m ? "before" : "after"), f = Zl(e, l, m ? "after" : "before");
  }
  if (!u && !f)
    return !1;
  const d = u ?? c, p = f ?? l, h = {
    anchorNode: d.node,
    anchorOffset: d.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = Sy(h, e);
  return g ? (Un(g), g.dirty = !t, t) : !1;
}
function kw() {
  const [e] = Ce(), t = te(!1), n = te(!1);
  return H(() => {
    const r = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, n.current && (n.current = !1, e.update(() => {
        const s = w();
        E(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", r, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, n.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", r, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), H(() => e.registerCommand(hn, () => (bw(e, t.current) && (n.current = !0), !1), He), [e]), null;
}
function xw() {
  const [e] = Ce();
  return H(() => e.registerCommand(_r, (t) => {
    const { key: n, shiftKey: r, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Os ? i : s) || o)
      return !1;
    const a = n.toLowerCase();
    return !(a === "z" && !r) && !(a === "y" || a === "z" && r) ? !1 : (t.preventDefault(), !0);
  }, He), [e]), null;
}
function Tw({ isEditable: e }) {
  const [t] = Ce();
  return js(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Bg(e) {
  return !!e && la(X(e));
}
function kp(e) {
  const [t] = Ce(), n = te(void 0), r = _e((i) => {
    let s = !1;
    const o = w(), a = E(o) && o.isCollapsed() ? o.anchor.key : void 0, c = n.current, l = Bg(c);
    c && !l && (n.current = void 0);
    let u;
    if (i) {
      const f = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, p = ua(f, d), h = la(p) ? p : void 0;
      if (h)
        n.current = h.getKey(), u = h.getKey();
      else {
        const g = i0();
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
      const a = e(), c = w(), l = E(c) && c.isCollapsed() ? c.anchor.key : void 0, u = n.current;
      (a || u && u !== l) && r(a) && jt($i);
    }, s = (a) => {
      if (a.getKey() !== n.current)
        return;
      const c = a.getTextContent();
      if (es(c) || !c.includes(Rs))
        return;
      const l = w(), u = E(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (s0(a), n.current = void 0, u !== void 0) {
        const f = c.slice(0, u).split(Rs).length - 1, d = Math.max(0, u - f);
        a.select(d, d);
      }
    }, o = et(t.registerCommand(hn, () => (i(), !1), qi), t.registerCommand(Wf, () => {
      const a = n.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Bg(a);
      }), c && t.update(() => {
        const l = X(a);
        C(l) && (l.remove(), jt($i));
      }), n.current = void 0, !1;
    }, qi), t.registerNodeTransform(it, s));
    return () => {
      o(), n.current = void 0;
    };
  }, [t, e, r]), r;
}
function Cw() {
  const e = w();
  if (!E(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, n = t.getNode(), r = D(n) ? n : n.getParent();
  if (!D(r))
    return;
  const i = hP(r);
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
function vw() {
  return kp(Cw), null;
}
function Ix(e) {
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
function eu(e) {
  const t = e.getRootElement(), n = t?.ownerDocument.defaultView?.getSelection();
  if (!t || !n?.anchorNode || !t.contains(n.anchorNode))
    return;
  e.getEditorState().read(() => {
    const i = w();
    if (!E(i))
      return !1;
    const s = Sy(n, e);
    return !!s && i.is(s);
  }, { editor: e }) || n.removeAllRanges();
}
function ys(e, t) {
  let n;
  try {
    n = Ut();
  } catch {
  }
  return n === e ? t() : e.read(t);
}
function Sw() {
  const e = w();
  if (!E(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const n = t.getNode();
  if (!A(n))
    return;
  const r = n.getChildren(), i = r[t.offset - 1];
  if (!Me(i) || ua(n, t.offset))
    return;
  const s = r[t.offset];
  if (s === void 0 || Me(s))
    return i;
}
function _w() {
  return kp(Sw), null;
}
function Mw({ scripture: e, scriptureRef: t, nodeOptions: n, editorAdaptor: r, viewOptions: i, logger: s }) {
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
        const u = Ix(o);
        o.update(() => {
          u || jt(Or), o.setEditorState(l), o.dispatchCommand(mS, void 0);
        }, { tag: ia });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, r, s, e, t, i]), null;
}
const tu = "caller_highlight", Ew = hi(function(t, n) {
  const [r] = Ce(), i = te(void 0), s = te(void 0), o = _e(() => {
    const a = i.current, c = a === void 0 ? void 0 : r.getEditorState().read(() => {
      const u = br(a);
      return u ? (u.getChildren().find(Lt) ?? St(u))?.getKey() : void 0;
    }), l = c ? r.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(tu), l?.classList.add(tu), s.current = l;
  }, [r]);
  return Nc(n, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : ys(r, () => br(a)?.getKey()), o();
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
      const f = l.has(ia) ? void 0 : c.read(() => Gd(u)), d = f === void 0 ? void 0 : r.getEditorState().read(() => br(f)?.getKey());
      i.current = d !== void 0 && a.get(d) === "created" ? d : void 0;
    }, { skipInitialization: !0 }),
    r.registerUpdateListener(() => o())
  ), [r, o]), H(() => () => s.current?.classList.remove(tu), []), null;
});
function Aw({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: n, logger: r }) {
  const [i] = Ce();
  return Pw(t, r), ww(i, e, n, r), null;
}
function Pw(e, t) {
  const n = te(void 0), r = te(void 0), i = e.noteCallers, s = e.crossRefCallers;
  H(() => {
    let o = i;
    (!o || o.length <= 0) && (o = CA), n.current !== o && (n.current = o, Fg("note-callers", o, t));
  }, [t, i]), H(() => {
    let o = s;
    (!o || o.length <= 0) && (o = vA), r.current !== o && (r.current = o, Fg("cross-ref-callers", o, t));
  }, [t, s]);
}
function ww(e, t, n, r) {
  H(() => {
    if (!e.hasNodes([ze, tt, _n]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => Dw(s));
    return et(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(tt, (s) => Nw(s, n)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(ze, $w),
      e.registerNodeTransform(it, Rw),
      // Ensure a separator after the caller.
      e.registerNodeTransform(_n, Iw),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(_n, (s, { prevEditorState: o }) => Lw(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(hn, () => qw(e, t, n, r), Xt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, r, n]);
}
function Nw(e, t) {
  const n = e.getChildren();
  if (!n.some((i) => Lt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), n.length > 0) {
    const i = n[0];
    C(i) && !N(i) && i.getTextContent() !== vt(e.getCaller()) && e.insertBefore(i);
  }
}
function Lx(e) {
  const t = e.getNextSibling();
  bn(t) || (C(t) && !N(t) && t.getTextContent() === q ? t.replace(Fi()) : e.insertAfter(Fi()));
}
function Ow(e) {
  const t = e.getTextContent(), n = t.indexOf(q), r = n < 0 ? t : t.slice(0, n) + t.slice(n + 1);
  if (e.setTextContent(q), !r) {
    e.selectEnd();
    return;
  }
  const i = Re(r);
  e.insertAfter(i), i.selectEnd();
}
function $w(e) {
  const t = e.getParentOrThrow(), n = t.getChildren(), r = n.find((s) => Lt(s));
  if (!U(e) || !D(t) || !r)
    return;
  const i = vd(n);
  r.getPreviewText() !== i && r.setPreviewText(i), Lx(e);
}
function Rw(e) {
  const t = An(e), n = t?.getChildren(), r = n?.find((o) => Lt(o));
  if (!C(e) || !D(t) || !r || !n)
    return;
  const i = e.getParent();
  if (D(i) && bn(e) && e.getTextContent() !== q && Ow(e), U(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Pt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = vd(n);
  r.getPreviewText() !== s && r.setPreviewText(s);
}
function Iw(e) {
  Lt(e) && Lx(e);
}
function Lw(e, t) {
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
function qw(e, t, n, r) {
  if (n?.noteMode !== "expandInline")
    return !1;
  const i = w();
  if (!E(i) || !i.isCollapsed())
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
function Dw(e) {
  const t = w();
  if (!E(t))
    return;
  const n = t.anchor, r = t.focus, i = n.getNode(), s = r.getNode();
  if (D(i) && C(s)) {
    e.preventDefault();
    const o = Dr();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), r.offset, "text"), Un(o);
  }
}
function Fg(e, t, n) {
  for (const r of document.styleSheets)
    try {
      const i = r.cssRules || r.rules;
      for (const s of i)
        if (Kw(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  n?.warn(`Editor: counter style "${e}" not found.`);
}
function Kw(e, t) {
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
    if (!N(r) || r.getMarkerSyntax() !== "opening")
      break;
    t.push(r);
  }
  const n = St(e);
  return n && t.push(n), t.length > 0 && t.every((r) => C(r) && r.getMode() === "token") ? t : [];
}
function Uw(e) {
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
  return N(t) && t.getMarkerSyntax() === "closing" && t.getMode() === "token" ? t : void 0;
}
function qx(e) {
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
  if (!A(t) || e.offset === 0)
    return;
  const n = t.getChildAtIndex(e.offset - 1);
  return D(n) && ko(n) ? n : void 0;
}
function Dx(e) {
  const t = e.getNode(), n = (i) => D(i) && er(i).length > 0;
  if (e.type === "text") {
    if (e.offset !== t.getTextContentSize())
      return;
    const i = t.getNextSibling();
    return n(i) ? i : void 0;
  }
  if (n(t))
    return e.offset < pa(t) ? t : void 0;
  if (!A(t))
    return;
  const r = t.getChildAtIndex(e.offset);
  return n(r) ? r : void 0;
}
function Kx(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), n = Uw(t);
  if (n)
    return Bw(n, t, e.offset) ? void 0 : n;
}
function Bw(e, t, n) {
  const r = er(e), i = r[r.length - 1];
  return i !== void 0 && i.is(t) && n === i.getTextContentSize();
}
function Fw(e) {
  const t = er(e), n = t[t.length - 1];
  C(n) ? n.select(n.getTextContentSize(), n.getTextContentSize()) : sr(e, pa(e));
}
function zw() {
  const e = w();
  if (!E(e))
    return !1;
  if (!e.isCollapsed())
    return Bx(e);
  const t = Cp(e.anchor) ?? qx(e.anchor);
  if (t) {
    const r = jw(t);
    return e.anchor.is(r) ? !1 : (Ux(e, r), !0);
  }
  const n = Dx(e.anchor) ?? Kx(e.anchor);
  return n ? (Fw(n), !0) : !1;
}
function xp(e) {
  const t = er(e), n = t[t.length - 1];
  return C(n) ? Qt(n.getKey(), n.getTextContentSize(), "text") : Qt(e.getKey(), pa(e), "element");
}
function pc(e) {
  const t = e.getLastChild();
  return N(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker() ? e.getChildrenSize() - 1 : e.getChildrenSize();
}
function Zu(e) {
  const t = pc(e);
  if (t === e.getChildrenSize())
    return;
  const n = e.getChildAtIndex(t);
  return C(n) ? n : void 0;
}
function Tp(e) {
  const t = pc(e);
  if (t > pa(e)) {
    const n = e.getChildAtIndex(t - 1), r = A(n) ? n.getLastDescendant() : n;
    if (C(r))
      return Qt(r.getKey(), r.getTextContentSize(), "text");
  }
  return xp(e);
}
function jw(e) {
  const t = ko(e);
  return t ? Qt(t.getKey(), 0, "text") : Tp(e);
}
function Cp(e) {
  const t = e.getNode(), n = t.getParent();
  if (D(n) && er(n).length > 0 && Zu(n)?.is(t))
    return n;
  if (e.type !== "element")
    return;
  if (D(t) && er(t).length > 0 && Zu(t))
    return e.offset > pc(t) || e.offset === pc(t) && e.offset > pa(t) ? t : void 0;
  if (!A(t))
    return;
  const r = t.getChildAtIndex(e.offset - 1);
  return D(r) && er(r).length > 0 && !r.getNextSibling() ? r : void 0;
}
function Ux(e, t) {
  e.anchor.set(t.key, t.offset, t.type), e.focus.set(t.key, t.offset, t.type);
}
function ef(e) {
  const t = An(e);
  return t && er(t).length > 0 ? t : void 0;
}
function Vw(e) {
  for (const t of [e.anchor, e.focus]) {
    const n = ef(t.getNode()) ?? Dx(t) ?? qx(t) ?? Cp(t);
    if (n)
      return n;
  }
  for (const t of e.getNodes()) {
    const n = ef(t);
    if (n)
      return n;
  }
}
function Bx(e) {
  const t = Vw(e);
  if (!t)
    return !1;
  const n = xp(t), r = Tp(t);
  let i = !1;
  for (const s of [e.anchor, e.focus]) {
    const o = s.isBefore(n) ? n : r.isBefore(s) ? r : void 0;
    !o || s.is(o) || (s.set(o.key, o.offset, o.type), i = !0);
  }
  return i;
}
function zg(e, t) {
  const n = Dr();
  return n.anchor.set(e.key, e.offset, e.type), n.focus.set(t.key, t.offset, t.type), n.getTextContent();
}
function jg(e, t) {
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
function Vg(e, t, n) {
  const r = jg(e, t), i = jg(e, n);
  return r !== void 0 && i !== void 0 && Math.abs(r - i) >= 1;
}
function Ww(e) {
  if (e.type === "element") {
    const n = e.getNode();
    return A(n) ? n.getChildAtIndex(e.offset) ?? void 0 : void 0;
  }
  const t = e.getNode();
  return t.getTextContentSize() === e.offset ? t.getNextSibling() ?? void 0 : void 0;
}
function Hw(e, t, n, r) {
  const i = t.anchor, s = Cp(i);
  if (s)
    return Ux(t, Tp(s)), !0;
  const o = ef(i.getNode());
  if (!o) {
    if (n)
      return !1;
    const f = Ww(t.focus);
    return D(f) && er(f).length > 0;
  }
  if (Kx(i))
    return !0;
  const a = xp(o);
  if (n) {
    if (!(a.isBefore(i) && !a.is(i)))
      return !0;
    const f = zg(a, i);
    return f === "" ? !0 : r === "character" || r === "word" && /[\p{L}\p{N}]/u.test(f) || r === "line" && Vg(e, a, i) ? !1 : (t.anchor.set(a.key, a.offset, a.type), t.removeText(), !0);
  }
  if (i.isBefore(a))
    return !0;
  const c = Zu(o);
  if (!c)
    return !1;
  const l = Qt(c.getKey(), 0, "text"), u = zg(i, l);
  return u === "" ? !0 : r === "character" || r === "word" && /[\p{L}\p{N}]/u.test(u) || r === "line" && Vg(e, i, l) ? !1 : (t.focus.set(l.key, l.offset, l.type), t.removeText(), !0);
}
function Gw() {
  const [e] = Ce();
  return H(() => {
    const t = (s) => () => {
      const o = w();
      return !E(o) || o.isCollapsed() || !Bx(o) ? !1 : s && o.isCollapsed();
    }, n = t(!1), r = t(!0), i = (s) => (o) => {
      const a = w();
      return E(a) ? a.isCollapsed() ? Hw(e, a, o, s) : r() : !1;
    };
    return et(e.registerCommand(ra, n, He), e.registerCommand(Zn, n, He), e.registerCommand(Ro, n, He), e.registerCommand(yS, n, He), e.registerCommand(Lc, i("character"), He), e.registerCommand(jf, i("word"), He), e.registerCommand(Wa, i("line"), He), e.registerCommand(Ty, r, He), e.registerCommand(rr, r, He));
  }, [e]), H(() => {
    const t = () => {
      zw() && e.dispatchCommand(Qf, void 0);
    };
    return et(
      e.registerCommand(hn, () => (t(), !1), qi),
      // Select-all is the rich-text plugin's `$selectAll`, confined in the same update rather than
      // after the selection change it announces, which an edit may come before.
      e.registerCommand(_y, () => (bS(), t(), !0), Ge)
    );
  }, [e]), null;
}
function Jw({ onChange: e, viewOptions: t }) {
  const [n] = Ce();
  return H(() => n.registerCommand(hn, () => {
    const r = tl(t);
    return e?.(r), !1;
  }, Xt), [n, e, t]), null;
}
function Yw() {
  const [e] = Ce();
  return Xw(e), null;
}
function Xw(e) {
  H(() => {
    if (!e.hasNodes([It]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(It, (t) => Qw(t, e));
  }, [e]);
}
function Qw(e, t) {
  Uu(t, e.getKey()) && Ok(e.getFirstChild()), !(!me(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = X(e.getKey());
    return me(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Fx({ onStateChange: e }) {
  const [t] = Ce(), [n, r] = Ae(t), i = te(!1), s = te(!1), o = te(void 0), a = te(void 0), c = _e(() => {
    const l = w();
    let u;
    if (E(l)) {
      const f = l.anchor.getNode(), d = l.focus.getNode();
      let p = f.getKey() === "root" ? f : Qe(f, (y) => {
        const k = y.getParent();
        return k !== null && Hf(k);
      });
      p === null && (p = f.getTopLevelElementOrThrow()), ji(p) && (p = Qe(f, me) ?? p);
      const h = p.getKey(), g = n.getElementByKey(h), m = u0(f, d);
      if (m && IE(m) && (u = m.getMarker()), g !== null && (me(p) || Ie(p) || Wr(p))) {
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
  }), n.registerCommand(kS, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), He), n.registerCommand(xS, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), He)), [c, n, e]), null;
}
function zx(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function ui(e) {
  return e ? mt(e) ? e : Qe(e, (n) => mt(n)) ?? void 0 : void 0;
}
function jx(e) {
  if (!E(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const n of e.getNodes()) {
    const r = ui(n);
    r && t.add(r.getKey());
  }
  return t.size > 1;
}
function vp(e) {
  return E(e) && e.isCollapsed() && e.anchor.type === "element" || !E(e) && !$c(e) ? !1 : e.getNodes().some((t) => Me(t));
}
function Vx(e) {
  if (!E(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, n = t.getNode(), r = ui(n);
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
function Wx(e) {
  if (!E(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, n = t.getNode(), r = ui(n);
  if (!r)
    return !1;
  if (A(n)) {
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
function Wg(e, t) {
  return !!tf(e, t);
}
function tf(e, t) {
  if (!E(e) || !e.isCollapsed())
    return;
  const { anchor: n } = e, r = n.getNode();
  if (n.type === "element" && A(r)) {
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
function hc(e, t) {
  if (!E(e))
    return !1;
  const n = ui(e.anchor.getNode());
  return n ? !!(t === "backward" ? n.getPreviousSibling() : n.getNextSibling()) : !1;
}
function Es(e) {
  return vp(e) || jx(e);
}
function Hx(e, t) {
  if (vp(e) || jx(e))
    return !0;
  if (!E(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Vx(e) && hc(e, "backward") || Wg(e, "backward");
    case "deleteForward":
      return Wx(e) && hc(e, "forward") || Wg(e, "forward");
    case "insertText":
      return !1;
  }
}
function Zw(e, t) {
  if (!(!E(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const n = tf(e, "backward");
      if (n)
        return { kind: "verse", node: n };
      if (Vx(e) && hc(e, "backward")) {
        const r = ui(e.anchor.getNode());
        if (wt(r))
          return { kind: "para", node: r };
      }
      return;
    }
    if (t === "deleteForward") {
      const n = tf(e, "forward");
      if (n)
        return { kind: "verse", node: n };
      if (Wx(e) && hc(e, "forward")) {
        const i = ui(e.anchor.getNode())?.getNextSibling();
        if (wt(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Hg(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return $c(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!E(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!E(e) || e.isCollapsed())
    return !1;
  const n = ui(e.anchor.getNode()), r = ui(e.focus.getNode());
  return !!n && n.getKey() === t.key && !!r && r.getKey() === t.key;
}
function Gx(e) {
  if (C(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else A(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function eN(e) {
  const t = e.getPreviousSibling();
  if (!mt(t))
    return;
  const n = t.getLastChild(), r = e.getFirstChild(), i = mn(r), s = e.getChildren().filter((o) => !bn(o) && !(i && o.is(r)));
  t.append(...s), e.remove(), n ? Gx(n) : Qs(t) || t.selectStart();
}
function Jx(e) {
  return Me(e) || ot(e) ? [] : wt(e) ? e.getChildren().flatMap(Jx) : [e];
}
function tN(e) {
  const t = [];
  for (const n of e) {
    const r = Jx(n);
    r.length !== 0 && (wt(n) && t.length > 0 && t.push(Re(" ")), t.push(...r));
  }
  return t;
}
function Gg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function nN(e) {
  if (Array.isArray(e)) return e;
}
function rN(e, t) {
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
function iN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sN(e, t) {
  return nN(e) || rN(e, t) || oN(e, t) || iN();
}
function oN(e, t) {
  if (e) {
    if (typeof e == "string") return Gg(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Gg(e, t) : void 0;
  }
}
const Yx = Object.entries, Jg = Object.setPrototypeOf, aN = Object.isFrozen, cN = Object.getPrototypeOf, lN = Object.getOwnPropertyDescriptor;
let Dt = Object.freeze, Ft = Object.seal, bs = Object.create, Xx = typeof Reflect < "u" && Reflect, nf = Xx.apply, rf = Xx.construct;
Dt || (Dt = function(t) {
  return t;
});
Ft || (Ft = function(t) {
  return t;
});
nf || (nf = function(t, n) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++)
    i[s - 2] = arguments[s];
  return t.apply(n, i);
});
rf || (rf = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return new t(...r);
});
const ps = Tt(Array.prototype.forEach), uN = Tt(Array.prototype.lastIndexOf), Yg = Tt(Array.prototype.pop), hs = Tt(Array.prototype.push), fN = Tt(Array.prototype.splice), Zr = Array.isArray, xo = Tt(String.prototype.toLowerCase), nu = Tt(String.prototype.toString), Xg = Tt(String.prototype.match), uo = Tt(String.prototype.replace), Qg = Tt(String.prototype.indexOf), dN = Tt(String.prototype.trim), pN = Tt(Number.prototype.toString), hN = Tt(Boolean.prototype.toString), Zg = typeof BigInt > "u" ? null : Tt(BigInt.prototype.toString), em = typeof Symbol > "u" ? null : Tt(Symbol.prototype.toString), At = Tt(Object.prototype.hasOwnProperty), fo = Tt(Object.prototype.toString), Et = Tt(RegExp.prototype.test), Si = gN(TypeError);
function Tt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return nf(e, t, r);
  };
}
function gN(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return rf(e, n);
  };
}
function Oe(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : xo;
  if (Jg && Jg(e, null), !Zr(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let i = t[r];
    if (typeof i == "string") {
      const s = n(i);
      s !== i && (aN(t) || (t[r] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function mN(e) {
  for (let t = 0; t < e.length; t++)
    At(e, t) || (e[t] = null);
  return e;
}
function zt(e) {
  const t = bs(null);
  for (const r of Yx(e)) {
    var n = sN(r, 2);
    const i = n[0], s = n[1];
    At(e, i) && (Zr(s) ? t[i] = mN(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = zt(s) : t[i] = s);
  }
  return t;
}
function yN(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return pN(e);
    case "boolean":
      return hN(e);
    case "bigint":
      return Zg ? Zg(e) : "0";
    case "symbol":
      return em ? em(e) : "Symbol()";
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
    const r = lN(e, t);
    if (r) {
      if (r.get)
        return Tt(r.get);
      if (typeof r.value == "function")
        return Tt(r.value);
    }
    e = cN(e);
  }
  function n() {
    return null;
  }
  return n;
}
function bN(e) {
  try {
    return Et(e, ""), !0;
  } catch {
    return !1;
  }
}
const tm = Dt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ru = Dt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), iu = Dt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), kN = Dt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), su = Dt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), xN = Dt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), nm = Dt(["#text"]), rm = Dt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ou = Dt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), im = Dt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ea = Dt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), TN = Ft(/{{[\w\W]*|^[\w\W]*}}/g), CN = Ft(/<%[\w\W]*|^[\w\W]*%>/g), vN = Ft(/\${[\w\W]*/g), SN = Ft(/^data-[\-\w.\u00B7-\uFFFF]+$/), _N = Ft(/^aria-[\-\w]+$/), sm = Ft(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), MN = Ft(/^(?:\w+script|data):/i), EN = Ft(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), AN = Ft(/^html$/i), PN = Ft(/^[a-z][.\w]*(-[.\w]+)+$/i), om = Ft(/<[/\w!]/g), am = Ft(/<[/\w]/g), wN = Ft(/<\/no(script|embed|frames)/i), NN = Ft(/\/>/i), Sn = {
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
}, ON = function() {
  return typeof window > "u" ? null : window;
}, $N = function(t, n) {
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
}, cm = function() {
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
function Qx() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ON();
  const t = (W) => Qx(W);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Sn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, i = r.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, f = e.trustedTypes, d = a.prototype, p = Jn(d, "cloneNode"), h = Jn(d, "remove"), g = Jn(d, "nextSibling"), m = Jn(d, "childNodes"), y = Jn(d, "parentNode"), k = Jn(d, "shadowRoot"), x = Jn(d, "attributes"), S = o && o.prototype ? Jn(o.prototype, "nodeType") : null, _ = o && o.prototype ? Jn(o.prototype, "nodeName") : null, j = o && o.prototype ? Jn(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const W = n.createElement("template");
    W.content && W.content.ownerDocument && (n = W.content.ownerDocument);
  }
  let $, ne = "", fe, I = !1, K = 0;
  const ge = function() {
    if (K > 0)
      throw Si('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
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
  }, ye = function() {
    return I || (fe = $N(f, i), I = !0), fe;
  }, nt = n, rt = nt.implementation, rn = nt.createNodeIterator, Je = nt.createDocumentFragment, dr = nt.getElementsByTagName, xn = r.importNode;
  let Pe = cm();
  t.isSupported = typeof Yx == "function" && typeof y == "function" && rt && rt.createHTMLDocument !== void 0;
  const he = TN, F = CN, oe = vN, ve = SN, We = _N, ct = MN, bt = EN, Tn = PN;
  let ee = sm, Te = null;
  const Pr = Oe({}, [...tm, ...ru, ...iu, ...su, ...nm]);
  let we = null;
  const pr = Oe({}, [...rm, ...ou, ...im, ...Ea]);
  let pe = Object.seal(bs(null, {
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
  const L = Object.seal(bs(null, {
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
  let V = !0, G = !0, J = !1, ae = !0, Z = !1, Q = !0, se = !1, ce = !1, qe = null, Ne = null, sn = !1, Cn = !1, wr = !1, ki = !1, ro = !0, as = !1;
  const ba = "user-content-";
  let cs = !0, O = !1, R = {}, B = null;
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
  let Ct = lt, xi = !1, vn = null;
  const Nr = Oe({}, [Mt, ft, lt], nu), hh = Dt(["mi", "mo", "mn", "ms", "mtext"]);
  let Ml = Oe({}, hh);
  const gh = Dt(["annotation-xml"]);
  let El = Oe({}, gh);
  const jv = Oe({}, ["title", "style", "font", "a", "script"]);
  let io = null;
  const Vv = ["application/xhtml+xml", "text/html"], Wv = "text/html";
  let dt = null, ls = null;
  const Hv = n.createElement("form"), mh = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, Al = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ls && ls === b)
      return;
    (!b || typeof b != "object") && (b = {}), b = zt(b), io = // eslint-disable-next-line unicorn/prefer-includes
    Vv.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Wv : b.PARSER_MEDIA_TYPE, dt = io === "application/xhtml+xml" ? nu : xo, Te = Yr(b, "ALLOWED_TAGS", Pr, {
      transform: dt
    }), we = Yr(b, "ALLOWED_ATTR", pr, {
      transform: dt
    }), vn = Yr(b, "ALLOWED_NAMESPACES", Nr, {
      transform: nu
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
    }), R = At(b, "USE_PROFILES") ? b.USE_PROFILES && typeof b.USE_PROFILES == "object" ? zt(b.USE_PROFILES) : b.USE_PROFILES : !1, V = b.ALLOW_ARIA_ATTR !== !1, G = b.ALLOW_DATA_ATTR !== !1, J = b.ALLOW_UNKNOWN_PROTOCOLS || !1, ae = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Z = b.SAFE_FOR_TEMPLATES || !1, Q = b.SAFE_FOR_XML !== !1, se = b.WHOLE_DOCUMENT || !1, Cn = b.RETURN_DOM || !1, wr = b.RETURN_DOM_FRAGMENT || !1, ki = b.RETURN_TRUSTED_TYPE || !1, sn = b.FORCE_BODY || !1, ro = b.SANITIZE_DOM !== !1, as = b.SANITIZE_NAMED_PROPS || !1, cs = b.KEEP_CONTENT !== !1, O = b.IN_PLACE || !1, ee = bN(b.ALLOWED_URI_REGEXP) ? b.ALLOWED_URI_REGEXP : sm, Ct = typeof b.NAMESPACE == "string" ? b.NAMESPACE : lt, Ml = At(b, "MATHML_TEXT_INTEGRATION_POINTS") && b.MATHML_TEXT_INTEGRATION_POINTS && typeof b.MATHML_TEXT_INTEGRATION_POINTS == "object" ? zt(b.MATHML_TEXT_INTEGRATION_POINTS) : Oe({}, hh), El = At(b, "HTML_INTEGRATION_POINTS") && b.HTML_INTEGRATION_POINTS && typeof b.HTML_INTEGRATION_POINTS == "object" ? zt(b.HTML_INTEGRATION_POINTS) : Oe({}, gh);
    const M = At(b, "CUSTOM_ELEMENT_HANDLING") && b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING == "object" ? zt(b.CUSTOM_ELEMENT_HANDLING) : bs(null);
    if (pe = bs(null), At(M, "tagNameCheck") && mh(M.tagNameCheck) && (pe.tagNameCheck = M.tagNameCheck), At(M, "attributeNameCheck") && mh(M.attributeNameCheck) && (pe.attributeNameCheck = M.attributeNameCheck), At(M, "allowCustomizedBuiltInElements") && typeof M.allowCustomizedBuiltInElements == "boolean" && (pe.allowCustomizedBuiltInElements = M.allowCustomizedBuiltInElements), Ft(pe), Z && (G = !1), wr && (Cn = !0), R && (Te = Oe({}, nm), we = bs(null), R.html === !0 && (Oe(Te, tm), Oe(we, rm)), R.svg === !0 && (Oe(Te, ru), Oe(we, ou), Oe(we, Ea)), R.svgFilters === !0 && (Oe(Te, iu), Oe(we, ou), Oe(we, Ea)), R.mathMl === !0 && (Oe(Te, su), Oe(we, im), Oe(we, Ea))), L.tagCheck = null, L.attributeCheck = null, At(b, "ADD_TAGS") && (typeof b.ADD_TAGS == "function" ? L.tagCheck = b.ADD_TAGS : Zr(b.ADD_TAGS) && (Te === Pr && (Te = zt(Te)), Oe(Te, b.ADD_TAGS, dt))), At(b, "ADD_ATTR") && (typeof b.ADD_ATTR == "function" ? L.attributeCheck = b.ADD_ATTR : Zr(b.ADD_ATTR) && (we === pr && (we = zt(we)), Oe(we, b.ADD_ATTR, dt))), At(b, "ADD_URI_SAFE_ATTR") && Zr(b.ADD_URI_SAFE_ATTR) && Oe(De, b.ADD_URI_SAFE_ATTR, dt), At(b, "FORBID_CONTENTS") && Zr(b.FORBID_CONTENTS) && (B === Y && (B = zt(B)), Oe(B, b.FORBID_CONTENTS, dt)), At(b, "ADD_FORBID_CONTENTS") && Zr(b.ADD_FORBID_CONTENTS) && (B === Y && (B = zt(B)), Oe(B, b.ADD_FORBID_CONTENTS, dt)), cs && (Te["#text"] = !0), se && Oe(Te, ["html", "head", "body"]), Te.table && (Oe(Te, ["tbody"]), delete qt.tbody), b.TRUSTED_TYPES_POLICY) {
      if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Si('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Si('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const z = $;
      $ = b.TRUSTED_TYPES_POLICY;
      try {
        ne = re("");
      } catch (ie) {
        throw $ = z, ie;
      }
    } else b.TRUSTED_TYPES_POLICY === null ? ($ = void 0, ne = "") : ($ === void 0 && ($ = ye()), $ && typeof ne == "string" && (ne = re("")));
    Dt && Dt(b), ls = b;
  }, yh = Oe({}, [...ru, ...iu, ...kN]), bh = Oe({}, [...su, ...xN]), Gv = function(b, M, z) {
    return M.namespaceURI === lt ? b === "svg" : M.namespaceURI === Mt ? b === "svg" && (z === "annotation-xml" || Ml[z]) : !!yh[b];
  }, Jv = function(b, M, z) {
    return M.namespaceURI === lt ? b === "math" : M.namespaceURI === ft ? b === "math" && El[z] : !!bh[b];
  }, Yv = function(b, M, z) {
    return M.namespaceURI === ft && !El[z] || M.namespaceURI === Mt && !Ml[z] ? !1 : !bh[b] && (jv[b] || !yh[b]);
  }, Xv = function(b) {
    let M = y(b);
    (!M || !M.tagName) && (M = {
      namespaceURI: Ct,
      tagName: "template"
    });
    const z = xo(b.tagName), ie = xo(M.tagName);
    return vn[b.namespaceURI] ? b.namespaceURI === ft ? Gv(z, M, ie) : b.namespaceURI === Mt ? Jv(z, M, ie) : b.namespaceURI === lt ? Yv(z, M, ie) : !!(io === "application/xhtml+xml" && vn[b.namespaceURI]) : !1;
  }, Gr = function(b) {
    hs(t.removed, {
      element: b
    });
    try {
      y(b).removeChild(b);
    } catch {
      if (h(b), !y(b))
        throw Si("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ka = function(b) {
    so(b);
    const M = m(b);
    if (M) {
      const ie = [];
      ps(M, (le) => {
        hs(ie, le);
      }), ps(ie, (le) => {
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
  }, Ti = function(b, M) {
    try {
      hs(t.removed, {
        attribute: M.getAttributeNode(b),
        from: M
      });
    } catch {
      hs(t.removed, {
        attribute: null,
        from: M
      });
    }
    if (M.removeAttribute(b), b === "is")
      if (Cn || wr)
        try {
          Gr(M);
        } catch {
        }
      else
        try {
          M.setAttribute(b, "");
        } catch {
        }
  }, Qv = function(b) {
    const M = x(b);
    if (M)
      for (let z = M.length - 1; z >= 0; --z) {
        const ie = M[z], le = ie && ie.name;
        if (!(typeof le != "string" || we[dt(le)]))
          try {
            b.removeAttribute(le);
          } catch {
          }
      }
  }, so = function(b) {
    const M = [b];
    for (; M.length > 0; ) {
      const z = M.pop();
      (S ? S(z) : z.nodeType) === Sn.element && Qv(z);
      const le = m(z);
      if (le)
        for (let xe = le.length - 1; xe >= 0; --xe)
          M.push(le[xe]);
    }
  }, Zv = function(b) {
    if (!Q)
      return;
    const M = [b];
    for (; M.length > 0; ) {
      const z = M.pop(), ie = S ? S(z) : z.nodeType;
      if (ie === Sn.processingInstruction || ie === Sn.comment && Et(am, z.data)) {
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
          M.push(le[xe]);
    }
  }, kh = function(b) {
    let M = null, z = null;
    if (sn)
      b = "<remove></remove>" + b;
    else {
      const xe = Xg(b, /^[\r\n\t ]+/);
      z = xe && xe[0];
    }
    io === "application/xhtml+xml" && Ct === lt && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const ie = $ ? re(b) : b;
    if (Ct === lt)
      try {
        M = new u().parseFromString(ie, io);
      } catch {
      }
    if (!M || !M.documentElement) {
      M = rt.createDocument(Ct, "template", null);
      try {
        M.documentElement.innerHTML = xi ? ne : ie;
      } catch {
      }
    }
    const le = M.body || M.documentElement;
    return b && z && le.insertBefore(n.createTextNode(z), le.childNodes[0] || null), Ct === lt ? dr.call(M, se ? "html" : "body")[0] : se ? M.documentElement : le;
  }, xh = function(b) {
    const M = j ? j(b) : b.ownerDocument;
    return rn.call(
      M || b,
      b,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, xa = function(b) {
    return b = uo(b, he, " "), b = uo(b, F, " "), b = uo(b, oe, " "), b;
  }, Pl = function(b) {
    var M;
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
    const xe = (M = b.querySelectorAll) === null || M === void 0 ? void 0 : M.call(b, "template");
    xe && ps(xe, (Ye) => {
      us(Ye.content) && Pl(Ye.content);
    });
  }, Ta = function(b) {
    const M = _ ? _(b) : null;
    return typeof M != "string" || dt(M) !== "form" ? !1 : typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    b.nodeType !== S(b) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, us = function(b) {
    if (!S || typeof b != "object" || b === null)
      return !1;
    try {
      return S(b) === Sn.documentFragment;
    } catch {
      return !1;
    }
  }, oo = function(b) {
    if (!S || typeof b != "object" || b === null)
      return !1;
    try {
      return typeof S(b) == "number";
    } catch {
      return !1;
    }
  };
  function hr(W, b, M) {
    W.length !== 0 && ps(W, (z) => {
      z.call(t, b, M, ls);
    });
  }
  const eS = function(b, M) {
    return !!(Q && b.hasChildNodes() && !oo(b.firstElementChild) && Et(om, b.textContent) && Et(om, b.innerHTML) || Q && b.namespaceURI === lt && M === "style" && oo(b.firstElementChild) || b.nodeType === Sn.processingInstruction || Q && b.nodeType === Sn.comment && Et(am, b.data));
  }, tS = function(b, M, z) {
    if (!qt[M] && Sh(M) && (pe.tagNameCheck instanceof RegExp && Et(pe.tagNameCheck, M) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(M)))
      return !1;
    if (cs && !B[M]) {
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
  }, Th = function(b, M, z, ie) {
    return b.length === 0 ? M : M === z || M === ie ? zt(M) : M;
  }, Ch = function(b, M) {
    if (hr(Pe.beforeSanitizeElements, b, null), b !== M && y(b) === null)
      return O && so(b), !0;
    if (Ta(b))
      return Gr(b), !0;
    const z = dt(_ ? _(b) : b.nodeName);
    if (Te = Th(Pe.uponSanitizeElement, Te, Pr, qe), hr(Pe.uponSanitizeElement, b, {
      tagName: z,
      allowedTags: Te
    }), b !== M && y(b) === null)
      return O && so(b), !0;
    if (eS(b, z))
      return Gr(b), !0;
    if (qt[z] || !(L.tagCheck instanceof Function && L.tagCheck(z)) && !Te[z]) {
      const le = tS(b, z, M);
      return le === !1 && hr(Pe.afterSanitizeElements, b, null), le;
    }
    if ((S ? S(b) : b.nodeType) === Sn.element && !Xv(b) || (z === "noscript" || z === "noembed" || z === "noframes") && Et(wN, b.innerHTML))
      return Gr(b), !0;
    if (Z && b.nodeType === Sn.text) {
      const le = xa(b.textContent);
      b.textContent !== le && (hs(t.removed, {
        element: b.cloneNode()
      }), b.textContent = le);
    }
    return hr(Pe.afterSanitizeElements, b, null), !1;
  }, vh = function(b, M, z) {
    if (Jt[M] || Q && M === "patchsrc" || Q && M === "for" && b !== "label" && b !== "output" || ro && (M === "id" || M === "name") && (z in n || z in Hv))
      return !1;
    const ie = we[M] || L.attributeCheck instanceof Function && L.attributeCheck(M, b);
    if (!(G && Et(ve, M))) {
      if (!(V && Et(We, M))) {
        if (ie) {
          if (!De[M]) {
            if (!Et(ee, uo(z, bt, ""))) {
              if (!((M === "src" || M === "xlink:href" || M === "href") && b !== "script" && Qg(z, "data:") === 0 && Se[b])) {
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
          !(Sh(b) && (pe.tagNameCheck instanceof RegExp && Et(pe.tagNameCheck, b) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(b)) && (pe.attributeNameCheck instanceof RegExp && Et(pe.attributeNameCheck, M) || pe.attributeNameCheck instanceof Function && pe.attributeNameCheck(M, b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          M === "is" && pe.allowCustomizedBuiltInElements && (pe.tagNameCheck instanceof RegExp && Et(pe.tagNameCheck, z) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(z)))
        ) return !1;
      }
    }
    return !0;
  }, nS = Oe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Sh = function(b) {
    return !nS[xo(b)] && Et(Tn, b);
  }, rS = function(b, M, z, ie) {
    if ($ && typeof f == "object" && typeof f.getAttributeType == "function" && !z)
      switch (f.getAttributeType(b, M)) {
        case "TrustedHTML":
          return re(ie);
        case "TrustedScriptURL":
          return Le(ie);
      }
    return ie;
  }, iS = function(b, M, z, ie) {
    try {
      z ? b.setAttributeNS(z, M, ie) : b.setAttribute(M, ie), Ta(b) ? Gr(b) : Yg(t.removed);
    } catch {
      Ti(M, b);
    }
  }, _h = function(b) {
    hr(Pe.beforeSanitizeAttributes, b, null);
    const M = b.attributes;
    if (!M || Ta(b))
      return;
    we = Th(Pe.uponSanitizeAttribute, we, pr, Ne);
    const z = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: we,
      forceKeepAttr: void 0
    };
    let ie = M.length;
    const le = dt(b.nodeName);
    for (; ie--; ) {
      const xe = M[ie], Ye = xe.name, pt = xe.namespaceURI, on = xe.value, an = dt(Ye), Nl = on;
      let Yt = Ye === "value" ? Nl : dN(Nl);
      if (z.attrName = an, z.attrValue = Yt, z.keepAttr = !0, z.forceKeepAttr = void 0, hr(Pe.uponSanitizeAttribute, b, z), Yt = z.attrValue, as && (an === "id" || an === "name") && Qg(Yt, ba) !== 0 && (Ti(Ye, b), Yt = ba + Yt), Q && Et(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Yt)) {
        Ti(Ye, b);
        continue;
      }
      if (an === "attributename" && Xg(Yt, "href")) {
        Ti(Ye, b);
        continue;
      }
      if (!z.forceKeepAttr) {
        if (!z.keepAttr) {
          Ti(Ye, b);
          continue;
        }
        if (!ae && Et(NN, Yt)) {
          Ti(Ye, b);
          continue;
        }
        if (Z && (Yt = xa(Yt)), !vh(le, an, Yt)) {
          Ti(Ye, b);
          continue;
        }
        Yt = rS(le, an, pt, Yt), Yt !== Nl && iS(b, Ye, pt, Yt);
      }
    }
    hr(Pe.afterSanitizeAttributes, b, null);
  }, Ca = function(b) {
    let M = null;
    const z = xh(b);
    for (hr(Pe.beforeSanitizeShadowDOM, b, null); M = z.nextNode(); )
      if (hr(Pe.uponSanitizeShadowNode, M, null), Ch(M, b), _h(M), us(M.content) && Ca(M.content), (S ? S(M) : M.nodeType) === Sn.element) {
        const le = k(M);
        us(le) && (wl(le), Ca(le));
      }
    hr(Pe.afterSanitizeShadowDOM, b, null);
  }, wl = function(b) {
    const M = [{
      node: b,
      shadow: null
    }];
    for (; M.length > 0; ) {
      const z = M.pop();
      if (z.shadow) {
        Ca(z.shadow);
        continue;
      }
      const ie = z.node, xe = (S ? S(ie) : ie.nodeType) === Sn.element, Ye = m(ie);
      if (Ye)
        for (let pt = Ye.length - 1; pt >= 0; --pt)
          M.push({
            node: Ye[pt],
            shadow: null
          });
      if (xe) {
        const pt = _ ? _(ie) : null;
        if (typeof pt == "string" && dt(pt) === "template") {
          const on = ie.content;
          us(on) && M.push({
            node: on,
            shadow: null
          });
        }
      }
      if (xe) {
        const pt = k(ie);
        us(pt) && M.push({
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
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, M = null, z = null, ie = null, le = null;
    if (xi = !W, xi && (W = "<!-->"), typeof W != "string" && !oo(W) && (W = yN(W), typeof W != "string"))
      throw Si("dirty is not a string, aborting");
    if (!t.isSupported)
      return W;
    ce ? (Te = qe, we = Ne) : Al(b), (Pe.uponSanitizeElement.length > 0 || Pe.uponSanitizeAttribute.length > 0) && (Te = zt(Te)), Pe.uponSanitizeAttribute.length > 0 && (we = zt(we)), t.removed = [];
    const xe = O && typeof W != "string" && oo(W);
    if (xe) {
      Zv(W);
      const on = _ ? _(W) : W.nodeName;
      if (typeof on == "string") {
        const an = dt(on);
        if (!Te[an] || qt[an])
          throw ka(W), Si("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ta(W))
        throw ka(W), Si("root node is clobbered and cannot be sanitized in-place");
      try {
        wl(W);
      } catch (an) {
        throw ka(W), an;
      }
    } else if (oo(W))
      M = kh("<!---->"), z = M.ownerDocument.importNode(W, !0), z.nodeType === Sn.element && z.nodeName === "BODY" || z.nodeName === "HTML" ? M = z : M.appendChild(z), wl(z);
    else {
      if (!Cn && !Z && !se && // eslint-disable-next-line unicorn/prefer-includes
      W.indexOf("<") === -1)
        return $ && ki ? re(W) : W;
      if (M = kh(W), !M)
        return Cn ? null : ki ? ne : "";
    }
    M && sn && Gr(M.firstChild);
    const Ye = xe ? W : M;
    try {
      const on = xh(Ye);
      for (; ie = on.nextNode(); )
        Ch(ie, Ye), _h(ie), us(ie.content) && Ca(ie.content);
    } catch (on) {
      throw xe && (ka(W), ps(t.removed, (an) => {
        an.element && so(an.element);
      })), on;
    }
    if (xe)
      return ps(t.removed, (on) => {
        on.element && so(on.element);
      }), Z && Pl(W), W;
    if (Cn) {
      if (Z && Pl(M), wr)
        for (le = Je.call(M.ownerDocument); M.firstChild; )
          le.appendChild(M.firstChild);
      else
        le = M;
      return (we.shadowroot || we.shadowrootmode) && (le = xn.call(r, le, !0)), le;
    }
    let pt = se ? M.outerHTML : M.innerHTML;
    return se && Te["!doctype"] && M.ownerDocument && M.ownerDocument.doctype && M.ownerDocument.doctype.name && Et(AN, M.ownerDocument.doctype.name) && (pt = "<!DOCTYPE " + M.ownerDocument.doctype.name + `>
` + pt), Z && (pt = xa(pt)), $ && ki ? re(pt) : pt;
  }, t.setConfig = function() {
    let W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Al(W), ce = !0, qe = Te, Ne = we;
  }, t.clearConfig = function() {
    ls = null, ce = !1, qe = null, Ne = null, $ = fe, ne = "";
  }, t.isValidAttribute = function(W, b, M) {
    ls || Al({});
    const z = dt(W), ie = dt(b);
    return vh(z, ie, M);
  }, t.addHook = function(W, b) {
    typeof b == "function" && At(Pe, W) && hs(Pe[W], b);
  }, t.removeHook = function(W, b) {
    if (At(Pe, W)) {
      if (b !== void 0) {
        const M = uN(Pe[W], b);
        return M === -1 ? void 0 : fN(Pe[W], M, 1)[0];
      }
      return Yg(Pe[W]);
    }
  }, t.removeHooks = function(W) {
    At(Pe, W) && (Pe[W] = []);
  }, t.removeAllHooks = function() {
    Pe = cm();
  }, t;
}
var RN = Qx();
function IN({ structureProtectionMode: e = "off" }) {
  const [t] = Ce(), n = te(void 0), [r, i] = Ae(void 0), s = _e((o) => {
    n.current = o, i(o);
  }, []);
  return H(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = zx(p);
      if (!h)
        return !1;
      const g = w();
      return e === "protected" ? g && Hx(g, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const g = w(), m = n.current;
      if (m && g && Hg(g, m)) {
        if (s(void 0), h.preventDefault(), p !== m.intent)
          return !0;
        const k = X(m.key) ?? void 0;
        if (m.kind === "verse") {
          if (k) {
            const x = k.getParent(), S = k.getPreviousSibling(), _ = k.getNextSibling();
            k.remove(), S ? Gx(S) : _ && C(_) ? _.select(0, 0) : x?.selectStart();
          }
        } else m.kind === "selection" ? E(g) && (dp(g), g.removeText()) : wt(k) && eN(k);
        return !0;
      }
      if (!g)
        return !1;
      const y = Zw(g, p);
      if (y) {
        if (y.kind === "verse") {
          const k = My();
          k.add(y.node.getKey()), Un(k);
        } else {
          const k = Dr();
          k.anchor.set(y.node.getKey(), 0, "element"), k.focus.set(y.node.getKey(), y.node.getChildrenSize(), "element"), Un(k);
        }
        return s({ key: y.node.getKey(), kind: y.kind, intent: p }), h.preventDefault(), !0;
      }
      if (E(g) && !g.isCollapsed() && vp(g)) {
        const k = g.getNodes().filter(Me).map((_) => _.getKey()), { anchor: x, focus: S } = g;
        return s({
          kind: "selection",
          intent: p,
          key: k[0],
          anchor: { key: x.key, offset: x.offset, type: x.type },
          focus: { key: S.key, offset: S.offset, type: S.type }
        }), h.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const h = w();
      return !h || !Es(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const g = RN.sanitize(p), m = new DOMParser().parseFromString(g, "text/html"), y = tN(zS(t, m)), k = w();
      return E(k) && k.insertNodes(y), h.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = w();
      return h && Es(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, f = (p) => {
      if (e !== "protected")
        return !1;
      const h = w();
      return h && Es(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, d = () => {
      const p = n.current;
      p && t.getEditorState().read(() => {
        Hg(w(), p) || s(void 0);
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
      t.registerCommand(TS, c, Ge),
      t.registerCommand(Vf, f, Ge),
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
const bD = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function LN({ textDirection: e }) {
  const [t] = Ce();
  return qN(t, e), null;
}
function qN(e, t) {
  H(() => (lm(e, t), e.registerUpdateListener(({ dirtyElements: n }) => {
    n.size > 0 && lm(e, t);
  })), [e, t]);
}
function lm(e, t) {
  if (t === "auto")
    return;
  const n = e.getRootElement();
  n && (n.dir = t);
  const r = e._config.theme.placeholder, i = document.getElementsByClassName(r)[0];
  i && (i.dir = t);
}
function DN() {
  const [e] = Ce();
  return KN(e), null;
}
function KN(e) {
  H(() => {
    if (!e.hasNodes([ze, Gt, tt, it, Kt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return et(
      e.registerNodeTransform(it, UN),
      e.registerNodeTransform(it, (t) => BN(t, e)),
      e.registerNodeTransform(Kt, um),
      e.registerNodeTransform(Gt, um),
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
function UN(e) {
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
  Me(n) && Fd(e);
}
function BN(e, t) {
  const n = e.getParent();
  !Ze(n) || !e.isAttached() || CS(Ra) || Uu(t, e.getKey()) && !Uu(t, n.getKey()) && n.insertAfter(e);
}
function um(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; ue(t); )
    t = t.getLastChild();
  (U(t) || C(t) && ue(t.getParent()) && !FN(t)) && e.insertBefore(Re(" "));
}
function FN(e) {
  const t = e.getTextContent();
  return t.endsWith(" ") || t.endsWith(q);
}
function al(e) {
  if (!D(e) || e.getIsCollapsed() !== !0)
    return;
  let t = e;
  for (; ; ) {
    if (t.getNextSiblings().some((i) => !la(i)))
      return;
    const r = t.getParent();
    if (!r)
      return;
    if (!A(r) || !r.isInline())
      return e;
    t = r;
  }
}
function zN(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (A(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function jN() {
  const e = w();
  if (!(!E(e) || !e.isCollapsed()))
    return al(zN(e.anchor));
}
function VN(e) {
  const t = w();
  let n;
  return E(t) ? t.isCollapsed() && (n = t.anchor.getNode()) : t || (n = Zx(e.target)), n ? al(Qe(n, D)) : void 0;
}
function Zx(e) {
  const t = vS(e)?.anchorNode;
  if (Cy(t))
    return Yi(t) ?? void 0;
}
function WN(e) {
  if (w())
    return;
  const t = Zx(e);
  return t ? al(Qe(t, D)) : void 0;
}
function fm(e) {
  const t = Qe(e.getNode(), D);
  return t?.getIsCollapsed() === !0 ? t : void 0;
}
function HN() {
  const e = w();
  if (!E(e) || e.isCollapsed())
    return !1;
  const [t, n] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], r = fm(t), i = fm(n);
  if (r && i && r.is(i))
    return !1;
  let s = !1;
  const o = r?.getParent();
  r && o && (t.set(o.getKey(), r.getIndexWithinParent(), "element"), s = !0);
  const a = i?.getParent();
  return i && a && (n.set(a.getKey(), i.getIndexWithinParent() + 1, "element"), s = !0), s;
}
const GN = 500;
function JN(e) {
  return e.shiftKey || e.altKey ? !1 : e.key === "End" || e.key === "ArrowDown" && e.metaKey;
}
function YN() {
  const e = w();
  if (!E(e) || e.isCollapsed())
    return;
  const [t, n] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
  if (t.type !== "element" || n.type !== "element" || t.key !== n.key || n.offset !== t.offset + 1)
    return;
  const r = t.getNode();
  if (A(r))
    return al(r.getChildAtIndex(t.offset));
}
function XN() {
  const [e] = Ce(), t = kp(jN), n = te(void 0);
  return H(() => {
    const r = (i) => {
      t(i) && jt($i);
    };
    return et(e.registerCommand(
      _r,
      (i) => (n.current = JN(i) ? performance.now() : void 0, !1),
      // Only observes the press, and must see it whether or not a handler further down claims it.
      He
    ), e.registerCommand(hn, () => {
      if (n.current !== void 0 && performance.now() - n.current < GN) {
        const o = YN();
        if (o)
          return r(o), !1;
      }
      if (HN())
        return jt($i), bo(e, $i), !1;
      const s = WN(e.getRootElement());
      return s && r(s), !1;
    }, qi), e.registerCommand(Ic, (i) => {
      const s = VN(i);
      return s && r(s), !1;
    }, qi));
  }, [e, t]), null;
}
function QN({ trigger: e, scriptureReference: t, contextMarker: n, getMarkerAction: r }) {
  const { markersMenuItems: i } = $P({
    scriptureReference: t,
    contextMarker: n,
    getMarkerAction: r
  });
  return P(OP, { trigger: e, items: i });
}
function ZN({ trigger: e, scrRef: t, contextMarker: n, getMarkerAction: r, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = ut(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? P(nO, { trigger: e, harness: i }) : P(QN, { trigger: e, scriptureReference: u, contextMarker: n, getMarkerAction: r });
}
const eO = [" ", "*"];
function tO(e, t) {
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
function nO({ trigger: e, harness: t }) {
  const [n] = Ce(), [r, i] = Ae(void 0), s = te({ query: "", options: [] }), o = te(0), a = _e((d, p, h) => {
    const g = p.find((m) => m.kind === "note" && m.marker === d);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    n.update(() => {
      const m = w();
      E(m) && m.insertText(`${e}${d}${h ? " " : ""}`);
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
        return g ? (a(g, r.items, !1), Ey(() => {
          const m = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(m ? {
            trigger: "backslash",
            hasTextSelection: m.hasTextSelection,
            items: t.getItems(m),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), n.update(() => {
          const m = w();
          E(m) && m.insertText(e);
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
  }, Ge), n.registerCommand(Ay, (d) => {
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
    tO(d, { trigger: r.trigger, literalPrefixLanded: !1 })
  )), [r]);
  return r && P(cx, { isOpen: !0, children: ({ placement: d }) => P(
    fx,
    { options: f ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: d === "top-start", menuOpenKey: e, passthroughKeys: r.trigger === "backslash" ? eO : void 0 },
    r.session
  ) });
}
function rO(e) {
  return e.replaceAll(q, "~").replace(/ {2,}/g, (n) => q.repeat(n.length));
}
function dm(e) {
  return e.replaceAll(q, " ").replaceAll("~", q);
}
let gc;
function iO(e) {
  e && (gc = e);
}
function au(e) {
  return Bt(e);
}
function sO(e, t) {
  return e.isEmpty() ? xy : eT(e.toJSON(), t);
}
function eT(e, t) {
  if (!e.root || !e.root.children) return;
  const n = e.root.children;
  if (n.length === 1 && Bc(n[0]) && (!n[0].children || n[0].children.length === 0))
    return xy;
  if (n.some(mE)) {
    gc?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const r = nT(n), i = Yn(r, t);
  return i ? { type: nr, version: tr, content: i } : void 0;
}
function oO(e, t) {
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
function aO(e) {
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
function cO(e, t) {
  const { marker: n, sid: r, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Gb(n, a, c), at({
    type: Rn.getType(),
    marker: n,
    number: c,
    sid: r,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function lO(e) {
  const { marker: t, sid: n, altnumber: r, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Gb(t, o, a), at({
    type: Kt.getType(),
    marker: t,
    number: a,
    sid: n,
    altnumber: r,
    pubnumber: i,
    ...s
  });
}
function uO(e, t) {
  const { type: n, marker: r, unknownAttributes: i } = e;
  return at({
    type: n,
    marker: r === "" ? void 0 : r,
    ...i,
    content: t
  });
}
function fO(e, t) {
  const { type: n, marker: r, unknownAttributes: i } = e;
  return at({
    type: n,
    marker: r,
    ...i,
    content: t
  });
}
function dO(e, t) {
  const { unknownAttributes: n } = e;
  return at({ type: kb, ...n, content: t });
}
function pO(e, t) {
  const { marker: n, unknownAttributes: r } = e;
  return at({ type: bk, marker: n, ...r, content: t });
}
function hO(e, t) {
  const { marker: n, align: r, colspan: i, unknownAttributes: s } = e;
  return at({
    type: Tk,
    marker: n,
    align: r,
    colspan: i,
    ...s,
    content: t
  });
}
function gO(e) {
  const t = e?.[0];
  if (!e || typeof t != "string" || !t.startsWith(" ")) return e;
  const n = t.replace(/^ +/, "");
  return n ? [n, ...e.slice(1)] : e.slice(1);
}
function mO(e, t) {
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
function ks(e) {
  const { type: t, marker: n, sid: r, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return at({
    type: t,
    marker: n === "" ? void 0 : n,
    ...cb({ sid: r, eid: i, ...s }, o)
  });
}
function yO(e) {
  return e.text;
}
function bO(e, t) {
  const { tag: n, marker: r, unknownAttributes: i } = e;
  return at({
    type: n,
    marker: r,
    ...i,
    content: t
  });
}
function kO(e) {
  const { marker: t } = e;
  return {
    type: Qa,
    marker: t === "" ? void 0 : t
  };
}
function cu(e, t) {
  const n = e[e.length - 1];
  n && typeof n == "string" ? e[e.length - 1] = n + t : e.push(t);
}
function xO(e, t, n, r, i) {
  const s = ir.getType(), o = t.filter((l) => !n.includes(l));
  if (n.filter((l) => !t.includes(l)).forEach((l) => {
    const u = ks({
      type: s,
      marker: _s,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = ks({
      type: s,
      marker: Di,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = ks({
      type: s,
      marker: Di
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = ks({
      type: s,
      marker: _s
    });
    i.push(l);
  }
  (!r || !si(r)) && t.forEach((l) => {
    const u = ks({
      type: s,
      marker: _s,
      eid: l
    });
    i.push(u);
  });
}
function sf(e, t, n, r) {
  if (!r) return !1;
  let i = t > 0 ? e[t - 1] : n;
  for (; i && si(i); ) {
    const { children: s } = i;
    i = s.length > 0 ? s[s.length - 1] : void 0;
  }
  return !Hs(i) || i.markerSyntax !== "opening" ? !1 : i.marker === r.marker ? !0 : r.children.some(
    (s) => sb(s) && s.marker === i.marker
  );
}
function TO(e, t, n, r, i) {
  const s = e[t];
  return !Fr(s) || s.text !== q || !(i || si(e[t - 1]) || si(e[t + 1])) || s[qr]?.textType !== void 0 || sf(e, t, n, r) ? !1 : !r || tT(r.children, s);
}
function tT(e, t) {
  return e.some((n) => n === t ? !1 : si(n) ? tT(n.children, t) : Hs(n) ? !1 : Fr(n) ? n[qr]?.textType === void 0 && n.text !== "" && n.text !== q && !es(n.text) : "children" in n && n.type !== Er.getType());
}
function CO(e) {
  let t = e;
  for (; si(t); ) t = t.children[0];
  return t;
}
function vO(e, t) {
  let n = 0;
  for (; n < e.length; ) {
    const s = e[n];
    if (!Hs(s) || s.markerSyntax !== "opening") break;
    n++;
  }
  const r = CO(e[n]);
  return Fr(r) ? r.text === vt(t) ? { node: r, caller: t } : Math.floor(r.detail / Fy) % 2 === 1 ? { node: r, caller: t } : void 0 : void 0;
}
function Yn(e, t, n, r, i, s = !1) {
  const o = [];
  let a, c = [];
  return e.forEach((l, u) => {
    const f = l, d = l, p = l, h = l, g = l, m = l, y = l, k = l;
    switch (l.type) {
      case En.getType():
        o.push(
          oO(
            f,
            Yn(f.children, t)
          )
        );
        break;
      case Ln.getType():
        o.push(aO(l));
        break;
      case Rn.getType():
        o.push(
          cO(
            d,
            Yn(d.children, t)
          )
        );
        break;
      case Gt.getType():
      case Kt.getType():
        o.push(lO(l));
        break;
      case ze.getType():
        o.push(
          uO(
            p,
            Yn(p.children, t, void 0, p)
          )
        );
        break;
      case It.getType():
        o.push(
          fO(
            h,
            Yn(h.children, t)
          )
        );
        break;
      case Zi.getType():
        o.push(
          dO(
            l,
            Yn(l.children, t)
          )
        );
        break;
      case ns.getType():
        o.push(
          pO(
            l,
            Yn(l.children, t)
          )
        );
        break;
      case rs.getType():
        o.push(
          hO(
            l,
            Yn(l.children, t)
          )
        );
        break;
      case tt.getType(): {
        const x = Yn(
          g.children,
          t,
          vO(g.children, g.caller)
        );
        o.push(
          mO(
            g,
            au(t) && g.category === void 0 ? gO(x) : x
          )
        );
        break;
      }
      case Er.getType():
      case Hn.getType():
      case _n.getType():
      case Py.getType():
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
            const S = e[u + 1];
            xO(a, x, c, S, o), c = S && si(S) ? x : [];
          } else {
            const S = a.shift();
            S && (typeof S == "string" ? cu(o, S) : o.push(S)), a.length > 0 && o.push(...a);
          }
        }
        break;
      case ir.getType():
        o.push(ks(l));
        break;
      case it.getType():
        if (n && l === n.node) {
          let x = id(n.node.text, n.caller);
          au(t) && (x = dm(jh(x))), x && cu(o, x);
          break;
        }
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !es(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        (m.text !== q || TO(e, u, i, r, s)) && // The untagged NBSP-`|` form of milestone attribute text. Text right after a char span's
        // opening glyph is never that: its NBSP is the span's separator, and a `|…` after it is
        // content the attribute grammar left literal (`\w |lemma="g"grace\w*` — Paratext 9
        // parses attributes only when the whole `|…` tail before the closer matches), so it is
        // kept like any other content text.
        !(m.text.startsWith(Xf) && !sf(e, u, i, r)) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[qr]?.textType !== "attribute") {
          let x = yO(m);
          t?.markerMode === "editable" && sf(e, u, i, r) && x.startsWith(q) && (x = x.slice(1)), au(t) && (x = dm(jh(x))), cu(o, x);
        }
        break;
      case Qi.getType():
        o.push(
          bO(
            k,
            Yn(k.children, t)
          )
        );
        break;
      case ur.getType():
        o.push(kO(l));
        break;
      case Ys.getType():
        gc?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        gc?.error(`Unexpected node type '${l.type}'!`);
    }
  }), o && o.length > 0 ? o : void 0;
}
function nT(e) {
  const t = e.findIndex((n) => Bc(n));
  if (t >= 0) {
    const n = e.slice(0, t), r = e[t].children, i = nT(e.slice(t + 1));
    e = [...n, ...r, ...i];
  }
  return e;
}
const xs = {
  initialize: iO,
  deserializeEditorState: sO
}, SO = /^sd\d*$/, _O = /* @__PURE__ */ new Set([
  ...Object.entries(Tu).filter(
    ([e, t]) => t.category === v.TitlesHeadings && t.type === T.Paragraph && !SO.test(e)
  ).map(([e]) => e),
  "qa"
]);
function MO(e, t) {
  const n = [];
  let r;
  for (const [i, s] of e.entries()) {
    if (xd(s) || Vb(s)) {
      r = void 0, n.push(s);
      continue;
    }
    if (!l0(s)) {
      t && mc(s) && t.warn(
        `Verses inside a '${s.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), r ? r.children.push(s) : n.push(s);
      continue;
    }
    if (Td(s) && _O.has(s.marker) && !mc(s)) {
      r = void 0, n.push(s);
      continue;
    }
    if (s.children.length === 0) {
      r ? r.children.push(s) : n.push(s);
      continue;
    }
    rT(s.children, t).forEach((o) => {
      const a = EO(s, o.nodes, i);
      if (!o.verse) {
        if (!a) return;
        r ? r.children.push(a) : n.push(a);
        return;
      }
      r = AO(o.verse), n.push(r), a && r.children.push(a);
    });
  }
  return n;
}
function rT(e, t) {
  const n = [{ nodes: [] }], r = (i) => n[n.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (iT(i)) {
      n.push({ verse: i, nodes: [i] });
      return;
    }
    if (si(i)) {
      const s = rT(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && r(pm(i, o.nodes)), a.forEach((c) => {
        n.push({ verse: c.verse, nodes: [pm(i, c.nodes)] });
      });
      return;
    }
    t && mc(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), r(i);
  }), n;
}
function pm(e, t) {
  return { ...e, children: t };
}
function iT(e) {
  return wk(e) && e.number !== "";
}
function mc(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((n) => iT(n) || mc(n)) : !1;
}
function EO(e, t, n) {
  if (t.length !== 0)
    return {
      ...e,
      children: t,
      [qr]: { ...e[qr], [Mk.key]: n }
    };
}
function AO(e) {
  return {
    type: rc,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Ek
  };
}
const hm = aT([]), PO = {
  type: Py.getType(),
  version: 1
};
let Sp = [], be, Wi, sT, dn;
function wO(e, t) {
  Sp = [], $O(e), RO(t);
}
function NO(e = 0) {
}
function OO(e, t) {
  be = t ?? Zc();
  let n;
  return e ? (e.type !== nr && dn?.warn(`This USJ type '${e.type}' didn't match the expected type '${nr}'.`), e.version !== tr && dn?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${tr}'.`
  ), e.content.length > 0 ? (n = lf($r(e.content)), Wo(be) && (n = MO(n, dn))) : n = [hm]) : n = [hm], sT?.(Sp), {
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
function $O(e) {
  e && (Wi = e), e?.addMissingComments && (sT = e.addMissingComments);
}
function RO(e) {
  e && (dn = e);
}
function oT() {
  return Bt(be);
}
function IO(e, t) {
  let { marker: n } = e;
  n !== Fo && dn?.warn(`Unexpected book marker '${n}'!`), n = n ?? Fo;
  const { code: r } = e;
  (!r || !En.isValidBookCode(r)) && dn?.warn(`Unexpected book code '${r}'!`);
  const i = [];
  be?.markerMode === "editable" || be?.markerMode === "visible" ? i.push(
    un("marker", Ve(n) + " " + r + q)
  ) : be?.hasGutterParaMarkers && i.push(un("marker", Ve(n) + q, !0)), i.push(...t);
  const s = ht(e, QM);
  return at({
    type: En.getType(),
    marker: n,
    code: r ?? "",
    unknownAttributes: s,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Bb
  });
}
function LO(e) {
  let { marker: t } = e;
  t !== Xa && dn?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Xa;
  const { number: n, sid: r, altnumber: i, pubnumber: s } = e, o = ht(e, tM);
  let a;
  be?.markerMode === "visible" && (a = !0);
  const c = [
    nn(Fn(t, n) ?? "")
  ];
  return be?.markerMode === "editable" && ZO(i, s, c), be?.markerMode === "editable" ? at({
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
    version: mb
  }) : at({
    type: Ln.getType(),
    marker: t,
    number: n ?? "",
    showMarker: a,
    sid: r,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Db
  });
}
function qO(e) {
  let { marker: t } = e;
  t !== Ya && dn?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Ya;
  const { number: n, sid: r, altnumber: i, pubnumber: s } = e, a = (EA(be) ?? Gt).getType(), c = be?.markerMode === "editable" ? ob : Pk;
  let l, u;
  be?.markerMode === "editable" ? l = Fn(t, n) : be?.markerMode === "visible" && (u = !0);
  const f = ht(e, Y_);
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
function DO(e, t = [], n = !1) {
  let { marker: r } = e;
  ze.isValidMarker(r, Wi?.extraValidMarkers) || dn?.warn(`Unexpected char marker '${r}'!`), r = r ?? "";
  const i = [];
  if (be?.markerMode === "editable") {
    const [a] = t;
    Fr(a) ? a.text = q + a.text : a && t.unshift(nn(q));
  }
  t.length === 0 && t.push(nn(Pt)), of(e.marker ?? "", i, n), i.push(...t);
  const s = e.closed === "false", o = ht(e, H_);
  return s || JO(r, o, i), s || af(e.marker ?? "", i, !1, n), at({
    type: ze.getType(),
    marker: r,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: ib
  });
}
function aT(e) {
  return {
    type: ai.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Cb
  };
}
function KO(e, t = []) {
  let { marker: n } = e;
  It.isValidMarker(n, Wi?.extraValidMarkers) || dn?.warn(`Unexpected para marker '${n}'!`), n = n ?? Bn;
  const r = [];
  if (is(be) && (be?.markerMode === "editable" ? r.push(
    Zt(n),
    nn(q, Mr, "token")
  ) : (be?.markerMode === "visible" || be?.hasGutterParaMarkers) && r.push(
    un(
      "marker",
      Ve(n) + q,
      be?.hasGutterParaMarkers
    )
  )), r.push(...t), oT()) {
    const s = r.find(
      (o) => !Hs(o) && !(Fr(o) && o.text === q)
    );
    Fr(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => q.repeat(o.length)));
  }
  const i = ht(e, e0);
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
    version: zb
  });
}
function _p() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function UO(e, t = []) {
  const n = ht(e, aM);
  return at({
    ..._p(),
    type: Zi.getType(),
    unknownAttributes: n,
    children: t,
    version: xb
  });
}
function BO(e, t = []) {
  const n = ht(e, F0), r = e.marker ?? Iu, i = [];
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
    ..._p(),
    type: ns.getType(),
    marker: r,
    unknownAttributes: n,
    children: i,
    version: kk
  });
}
function FO(e, t = []) {
  const { marker: n, align: r, colspan: i } = e, s = [], o = n ?? Lu, a = Rb(o, i) ?? o;
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
    j0
  );
  return at({
    ..._p(),
    type: rs.getType(),
    marker: o,
    align: r,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: Ck
  });
}
function zO(e, t) {
  const n = g0(t);
  let r = () => {
  };
  return Wi?.noteCallerOnClick && (r = Wi.noteCallerOnClick), at({
    type: _n.getType(),
    caller: e,
    previewText: n,
    onClick: r,
    version: Lk
  });
}
function jO(e, t) {
  let { marker: n } = e;
  tt.isValidMarker(n, Wi?.extraValidMarkers) || dn?.warn(`Unexpected note marker '${n}'!`), n = n ?? td;
  const { category: r } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : op(be?.noteMode), a = ht(e, l_), c = be?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  be?.markerMode === "editable" ? (l = Zt(n, "opening", !1, c), s || (u = Zt(n, "closing", !1, c))) : be?.markerMode === "visible" && (l = un("marker", Ve(n) + " "), s || (u = un("marker", st(n))));
  const f = [];
  let d;
  if (l && f.push(l), be?.markerMode === "editable" && !o)
    d = nn(vt(i), void 0, c), d.detail = Fy, f.push(d), QO(r, f), f.push(...t);
  else {
    const p = nn(q, Mr, "token");
    d = zO(i, t), f.push(d, p, ...t.flatMap(VO(p)));
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
    version: Wy
  });
}
function VO(e) {
  return (t) => Nb(t) ? [t] : [t, e];
}
function WO(e) {
  let { marker: t } = e;
  (!t || !ir.isValidMarker(t, Wi?.extraValidMarkers)) && dn?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: n, eid: r } = e, i = ht(e, ed), s = lb(e);
  return at({
    type: ir.getType(),
    marker: t,
    sid: n,
    eid: r,
    unknownAttributes: i,
    attributeOrder: s,
    version: zy
  });
}
function gm(e, t = []) {
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
function HO(e, t) {
  const { marker: n } = e, r = e.type, i = ht(e, rM), s = [];
  if (be?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = zc(
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
    type: Qi.getType(),
    tag: r,
    marker: n,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: bb
  });
}
function GO(e) {
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
    version: ak
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
    version: wb
  };
  return n && (r[qr] = { [yd.key]: !0 }), r;
}
function Ho(e, t) {
  return {
    type: Er.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: eb
  };
}
function of(e, t, n = !1) {
  be?.markerMode === "editable" ? t.push(Zt(e, "opening", n)) : be?.markerMode === "visible" && t.push(un("marker", Ve(e, n)));
}
function af(e, t, n = !1, r = !1) {
  be?.markerMode === "editable" ? n ? t.push(Zt("", "selfClosing")) : t.push(Zt(e, "closing", r)) : be?.markerMode === "visible" && t.push(
    un(
      "marker",
      n ? st("") : st(e, r)
    )
  );
}
function JO(e, t, n) {
  if (be?.markerMode !== "editable" || !t) return;
  const r = Xn(t, Ws(e));
  r && n.push(nn(r, "attribute"));
}
function mm(e, t) {
  if (e.type !== "ms" || be?.markerMode !== "editable" && be?.markerMode !== "visible") return;
  const { marker: n, sid: r, eid: i } = e, s = ht(e, ed), o = ub(
    r,
    i,
    s,
    lb(e)
  ), a = Xn(o, oa(n ?? ""));
  if (!a) return;
  const c = q + a;
  be?.markerMode === "editable" ? t.push(nn(c, "attribute")) : t.push(un("attribute", c));
}
function YO(e, t) {
  const n = e.marker ?? "";
  if (be?.markerMode === "editable") {
    const r = [];
    of(n, r), mm(e, r), af(n, r, !0), t.push(Ho("milestone", r));
  } else
    of(n, t), mm(e, t), af(n, t, !0);
}
function ym(e, t, n) {
  t !== void 0 && n.push(
    Ho(e, [
      Zt(e, "opening"),
      nn(q + t, "attribute"),
      Zt(e, "closing")
    ])
  );
}
function XO(e, t) {
  be?.markerMode === "editable" && (ym("va", e.altnumber, t), ym("vp", e.pubnumber, t));
}
function QO(e, t) {
  e !== void 0 && t.push(
    Ho("cat", [
      Zt("cat", "opening"),
      nn(q + e, "attribute"),
      Zt("cat", "closing")
    ])
  );
}
function ZO(e, t, n) {
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
function bm(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((n) => n - t);
}
function e$(e, t) {
  const n = e.indexOf(t, 0);
  n > -1 && e.splice(n, 1);
}
function km(e, t) {
  t.marker === Di && t.sid !== void 0 && e.push(t.sid), t.marker === _s && t.eid !== void 0 && e$(e, t.eid);
}
function cf(e, t, n = !1, r = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = n ? [gm(o, [...r])] : o, c = e[i];
  km(r, c);
  const l = cf(
    e.slice(i + 1, s),
    bm(t, i + 1),
    c.marker === Di,
    r
  ), u = gm(l, [...r]), f = e[s];
  km(r, f);
  const d = cf(
    e.slice(s + 1),
    bm(t, s + 1),
    f.marker === Di,
    r
  );
  return [...a, u, ...d];
}
function $r(e, t = !1) {
  const n = [], r = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && r.push(nn(oT() ? rO(i) : i));
    else if (!i.type)
      dn?.error("Marker type is missing!");
    else
      switch (i.type) {
        case En.getType():
          r.push(IO(i, $r(i.content)));
          break;
        case Rn.getType():
          r.push(LO(i));
          break;
        case Kt.getType():
          be?.hasSpacing || r.push(PO), r.push(qO(i)), XO(i, r);
          break;
        case ze.getType():
          r.push(
            DO(i, $r(i.content, !0), t)
          );
          break;
        case It.getType():
          r.push(KO(i, $r(i.content)));
          break;
        case tt.getType():
          r.push(jO(i, $r(i.content)));
          break;
        case ir.getType():
          jy(i.marker ?? "") && (n.push(r.length), i.sid !== void 0 && Sp?.push(i.sid)), r.push(WO(i)), YO(i, r);
          break;
        case ur.getType():
          r.push(GO(i.marker ?? ""));
          break;
        case kb:
          r.push(UO(i, $r(i.content)));
          break;
        case bk:
          r.push(BO(i, $r(i.content)));
          break;
        case Tk:
          r.push(FO(i, $r(i.content)));
          break;
        default:
          dn?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), r.push(HO(i, $r(i.content)));
      }
  }), cf(r, n);
}
function lf(e) {
  const t = e.findIndex(
    (r) => xd(r) || Vb(r) || Td(r) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    lM(r)
  );
  if (t >= 0) {
    const r = lf(e.slice(0, t)), i = e[t], s = lf(e.slice(t + 1));
    return [...r, i, ...s];
  } else if (e.some((r) => "text" in r && "mode" in r || wk(r)))
    return [aT(e)];
  return e;
}
const or = {
  initialize: wO,
  reset: NO,
  serializeEditorState: OO
};
function cT(e) {
  if (e && !N(e)) {
    if (C(e)) return e;
    if (A(e))
      for (const t of e.getChildren()) {
        const n = cT(t);
        if (n) return n;
      }
  }
}
function t$() {
  const e = w();
  if (!E(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), n = e.anchor.offset;
    if ((C(t) && !N(t) ? zi(t) : void 0) && C(t)) {
      const i = Re(" ");
      if (n <= 0) t.insertBefore(i);
      else if (n >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(n);
        o.insertAfter(i);
      }
      Ls(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = cT(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(q) ? q : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return C(t) && t.getTextContent()[n] === " " ? (t.select(n + 1, n + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of lT(e)) {
    if (!zi(t)) continue;
    Ls(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const n = t.getLatest(), r = n.getTextContent();
    r.startsWith(q) && n.setTextContent(r.slice(q.length));
  }
  return !0;
}
function lT(e) {
  const [t, n] = Ff(e), [r, i] = e.isBackward() ? [n, t] : [t, n], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!C(a) || N(a) || de(a, ke) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? r : 0, f = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= f) return;
    const d = a.splitText(u, f), p = d.length === 3 ? d[1] : f === l ? d[d.length - 1] : d[0];
    p && o.push(p);
  }), o;
}
function uT(e) {
  let t = e;
  for (; U(t) || ue(t); ) t = t.getParent();
  return t;
}
function fT(e) {
  const t = uT(e.getParent());
  return wt(t) ? t : void 0;
}
function n$() {
  const e = w();
  if (!E(e)) return !1;
  const t = e.focus.getNode();
  return zi(t) ? !!fT(t) : !1;
}
function dT(e) {
  const t = Re(""), n = e.getNode(), r = e.offset;
  if (C(n))
    if (r <= 0) n.insertBefore(t);
    else if (r >= n.getTextContentSize()) n.insertAfter(t);
    else {
      const [, o] = n.splitText(r);
      o.insertBefore(t);
    }
  else {
    const o = e.getNode(), a = A(o) ? o : o.getParent(), c = A(o) ? o.getChildAtIndex(r) : o;
    if (c) c.insertBefore(t);
    else if (a) a.append(t);
    else return { parent: void 0, moving: [] };
  }
  for (let o = t.getParent(); ; o = t.getParent())
    if (U(o)) Ls(t, { renderGlyphs: !0 });
    else if (!ue(o) || !r$(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function r$(e, t) {
  const n = e.getNextSiblings();
  if (!e.getPreviousSibling())
    return t.insertBefore(e), !0;
  if (n.length === 0)
    return t.insertAfter(e), !0;
  const r = w();
  if (!E(r)) return !1;
  const i = t.insertNewAfter(r, !1);
  return i ? (i.append(...n), t.insertAfter(e), !0) : !1;
}
function pT(e) {
  const t = e.anchor.getNode();
  if (N(t) && !Kd(t, e.anchor.offset)) {
    const n = t.getParent();
    if (U(n) && t.is(n.getLastChild())) {
      n.selectNext(0, 0);
      const r = w();
      return E(r) && r.isCollapsed() ? r : void 0;
    }
  }
  return e;
}
function hT() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = pT(e);
  if (!t) return !1;
  const n = t.anchor.getNode();
  if (!C(n) || N(n) || !zi(n)) return !1;
  const r = fT(n);
  if (!r) return !1;
  const { moving: i } = dT(t.anchor), s = r.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; ue(o); ) o = o.getFirstChild() ?? void 0;
  return U(o) ? Gc(o) : s.select(0, 0), !0;
}
const gT = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Wb(Ee().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = w(), t = Zb(e), n = jd(t);
      let r, i = !1;
      if (!n)
        r = "1";
      else {
        const o = n.getNumber();
        r = y0(0, o);
        const a = PE(n);
        if (a) {
          const c = a.getNumber();
          i = r === c || b0(c) && _d(parseInt(r, 10), c);
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
function uf(e, t) {
  return tt.isValidMarker(e, t) || !!gT[e] || It.isValidMarker(e, t) || ze.isValidMarker(e, t);
}
function i$(e, t) {
  return ze.isNoteContentMarker(e) ? !1 : ze.isValidMarker(e, t);
}
function mT(e, t, n, r, i, s) {
  const o = rx(
    e,
    void 0,
    void 0,
    t,
    r ?? Zc(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (n.current = o.getKey()), o?.getKey();
}
function ff(e, t, n, r, i, s, o) {
  if (tt.isValidMarker(e, r?.extraValidMarkers)) {
    let l;
    return { action: (f) => {
      f.editor.update(() => {
        l = mT(
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
  const a = u$(e, r?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = w();
      E(u) && (Ud(u), l.noteText = u.getTextContent());
      const { content: f, highlightInserted: d } = a.action(l), p = ug(f, or, n), h = Ol(p);
      if (E(u)) {
        const g = u.anchor.getNode(), m = g.getParent(), y = zi(g), k = u.anchor.key === u.focus.key;
        if (U(h) && y && k && !lu(h, o))
          a$(
            u,
            h,
            g,
            n?.markerMode === "editable"
          );
        else if (U(h) && !k && !lu(h, o) && c$(u))
          l$(u, h, n?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          f$(
            u,
            () => Ol(p)
          );
        else if (A(h) && !h.isInline()) {
          const x = u.insertParagraph();
          if (x) {
            const S = x.getChildren();
            h.append(...S), x.replace(h), wt(h) && Qs(h) || h.selectStart();
          }
        } else if (U(h) && C(g) && !N(g) && U(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        lu(h, o)) {
          const x = g.getParent();
          if (U(x)) {
            const S = u.anchor.offset;
            if (S === 0) g.insertBefore(h);
            else if (S >= g.getTextContentSize()) g.insertAfter(h);
            else {
              const [j] = g.splitText(S);
              j.insertAfter(h);
            }
            h.getChildren().forEach((j) => {
              N(j) && j.setNested(!0);
            });
            const _ = h.getChildren().find((j) => C(j) && !N(j));
            _ && C(_) ? _.select(
              _.getTextContentSize(),
              _.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (C(g) && !N(g) && u.isCollapsed() && (D(m) || U(m) && D(m.getParent()))) {
          const x = U(m) ? m : void 0, S = x ? s$(g, u.anchor.offset) : [];
          let j = (x ?? g).insertAfter(h);
          if (gn(h)) {
            const $ = {
              ...n || Zc(),
              markerMode: "hidden"
            }, ne = ug(
              f,
              or,
              $
            ), fe = Ol(ne);
            j = j.insertAfter(fe);
          }
          if (S.length > 0 && x) {
            const $ = yc(x).append(...S);
            j.insertAfter($), x.isEmpty() && x.remove();
          } else C(j.getNextSibling()) || j.insertAfter(Fi());
          A(j) && j.selectEnd();
        } else if (u.insertNodes([h]), T$(h), d) {
          const x = My();
          x.add(h.getKey()), Un(x);
        } else if (U(h)) {
          const x = h.getChildren().find((S) => C(S) && !N(S));
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
function s$(e, t) {
  const n = e.getTextContentSize();
  let r;
  return t <= 0 ? r = e : t >= n ? r = e.getNextSibling() : r = e.splitText(t)[1] ?? e.getNextSibling(), r ? [r, ...r.getNextSiblings()] : [];
}
function lu(e, t) {
  return ((t ?? ic).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function o$(e, t) {
  t && e.getChildren().forEach((i) => {
    N(i) && i.setNested(!0);
  }), e.getChildren().some((i) => N(i) && i.getMarkerSyntax() === "closing") || e.append($t(e.getMarker(), "closing", t));
  const r = e.getUnknownAttributes();
  if (r?.closed === "false") {
    const i = { ...r };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function a$(e, t, n, r) {
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
    const o = t.getChildren().find((a) => C(a) && !N(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => C(o) && !N(o));
  C(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function c$(e) {
  let t, n = !1;
  for (const r of e.getNodes()) {
    if (N(r) || U(r)) continue;
    if (!C(r) || r.getType() !== it.getType() || de(r, ke) === "attribute") return !1;
    const i = X0(r);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    zi(r) && (n = !0);
  }
  return n;
}
function l$(e, t, n) {
  const r = lT(e);
  if (r.length === 0) return;
  r.forEach((a) => {
    if (!zi(a)) return;
    Ls(a, { renderGlyphs: n });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(q) && c.setTextContent(l.slice(q.length));
  });
  const i = r[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(q) || i.setTextContent(q + i.getTextContent());
  const s = t.getChildren().find((a) => C(a) && !N(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  r.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function u$(e, t) {
  let n = gT[e];
  return n || (It.isValidMarker(e, t) ? n = {
    action: () => ({ content: [{ type: It.getType(), marker: e, content: [] }] })
  } : ze.isValidMarker(e, t) && (n = {
    action: () => {
      const r = { type: ze.getType(), marker: e };
      return (ze.isValidFootnoteMarker(e) || ze.isValidCrossReferenceMarker(e)) && (r.closed = "false"), { content: [r] };
    }
  })), n;
}
function f$(e, t) {
  const n = e.getNodes(), [r, i] = Bs(e);
  let s;
  n.forEach((o, a) => {
    if (A(s) && s.isParentOf(o))
      return;
    const c = yT(
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
    s || (s = t(), c.insertBefore(s), l = !0, U(s) && s.getChildren().some((f) => N(f) && f.getMarkerSyntax() === "opening") && o$(s, U(s.getParent()))), p$(c, s, l);
  }), (C(s) || A(s)) && s.selectEnd();
}
function Bs(e) {
  const t = e.anchor.offset, n = e.focus.offset;
  return e.isBackward() ? [n, t] : [t, n];
}
function Mp(e) {
  return ue(e) || D(e) || D(e.getParent());
}
function yT(e, t, n, r, i) {
  if (!Mp(e)) {
    if (C(e))
      return d$(e, t, n, r, i);
    if (A(e) && e.isInline())
      return e;
  }
}
function d$(e, t, n, r, i) {
  const s = e.getTextContentSize(), o = t ? r : 0, a = n ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function p$(e, t, n) {
  if (C(t)) {
    const r = df(e, t);
    t.setTextContent(r), e.remove();
  } else if (A(t)) {
    const r = t.getChildren(), i = r.find(
      (s) => N(s) && s.getMarkerSyntax() !== "opening"
    );
    if (i)
      i.insertBefore(e), n && r.filter((s) => !N(s)).forEach((s) => s.remove());
    else if (n) {
      const s = t.getChildrenSize();
      t.append(e);
      for (let o = 0; o < s; o++) t.getFirstChild()?.remove();
    } else
      t.append(e);
    df(e, t), n && U(t) && t.getChildren().some((s) => N(s)) && C(e) && !N(e) && !e.getTextContent().startsWith(q) && e.setTextContent(q + e.getTextContent());
  }
}
function df(e, t) {
  let n = e.getTextContent();
  if (C(e) && t.isInline() && n.startsWith(" ") && n.trimStart() !== "") {
    n = n.trimStart(), e.setTextContent(n);
    const r = t.getPreviousSibling();
    Fd(r), C(r) || t.insertBefore(Re(" "));
  }
  return n;
}
function bT(e, t, n) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), f = e.anchor.offset, d = Hi(u, t);
    if (!d) return !1;
    const p = C(u) ? u.getTextContentSize() : 0;
    if (xm(d, n), C(u) && u.isAttached()) {
      const h = u.getTextContentSize(), g = Math.max(p - h, 0), m = Math.max(0, Math.min(f - g, h)), y = w();
      E(y) && y.setTextNodeRange(u, m, u, m);
    }
    return !0;
  }
  const r = e.getNodes(), i = e.isBackward(), [s, o] = Bs(e);
  if (!Ap(r, t, s, o)) return !1;
  const a = Ep(r, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const f = Hi(u, t);
    if (!f || c.has(f.getKey())) return;
    c.add(f.getKey());
    const d = CT(f, a);
    d && (xm(d, n), l = !0);
  }), vT(a, i), l;
}
function xm(e, t) {
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
  }), bu(e);
}
function Ep(e, t, n) {
  const r = [];
  return e.forEach((i, s) => {
    const o = yT(
      i,
      s === 0,
      s === e.length - 1,
      t,
      n
    );
    C(o) && r.push(o);
  }), r;
}
function Hi(e, t) {
  let n = e, r;
  for (; n && !wt(n); ) {
    if (D(n)) return;
    !r && U(n) && (t === void 0 || n.getMarker() === t) && (r = n), n = n.getParent();
  }
  return r;
}
function kT(e) {
  const t = Qe(
    e,
    (n) => D(n) || wt(n)
  );
  return D(t);
}
function xT(e) {
  return e.filter(
    (t) => !Mp(t) && (C(t) || A(t) && t.isInline())
  );
}
function h$(e, t, n) {
  const r = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!C(i) || Mp(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? n : o;
    a === 0 && c === o && r.add(i.getKey());
  }), r;
}
function g$(e, t, n) {
  return e.getChildren().some(
    (r) => A(r) && t.some((i) => r.isParentOf(i)) && !TT(r, n)
  );
}
function Ap(e, t, n, r, i) {
  const s = xT(e), o = h$(e, n, r), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Hi(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !g$(l, s, o);
  });
}
function TT(e, t) {
  return e.getAllTextNodes().every((n) => t.has(n.getKey()) || mn(n));
}
function CT(e, t) {
  const n = new Set(t.map((l) => l.getKey())), r = e.getChildren(), i = [];
  for (const [l, u] of r.entries())
    if (n.has(u.getKey()))
      i.push(l);
    else if (A(u) && t.some((f) => u.isParentOf(f))) {
      if (!TT(u, n)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && mn(r[s - 1]) && (s -= 1), o < r.length - 1 && mn(r[o + 1]) && (o += 1), s === 0 && o === r.length - 1) return e;
  const a = r.slice(o + 1);
  a.length > 0 && e.insertAfter(yc(e).append(...a));
  const c = r.slice(0, s);
  return c.length > 0 && e.insertBefore(yc(e).append(...c)), e;
}
function yc(e) {
  return SS(e);
}
function vT(e, t) {
  const n = w(), r = e[0], i = e[e.length - 1];
  if (!E(n) || !r.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? n.setTextNodeRange(i, s, r, 0) : n.setTextNodeRange(r, 0, i, s);
}
function m$(e, t, n) {
  if (e.isCollapsed()) {
    const l = Hi(e.anchor.getNode(), n);
    return !l || l.getMarker() === t ? !1 : (Hh(l, t), !0);
  }
  const r = e.getNodes(), [i, s] = Bs(e);
  if (!Ap(r, n, i, s, t)) return !1;
  const o = Ep(r, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = Hi(l, n);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const f = CT(u, o);
    f && (Hh(f, t), c = !0);
  }), c;
}
function y$(e, t, n, r) {
  if (e.isCollapsed()) return !1;
  const i = n?.filter(
    (m) => m !== t
  ), s = e.getNodes(), [o, a] = Bs(e);
  if (!!!i?.some(
    (m) => Ap(s, m, o, a)
  ) && !b$(s, t)) return !1;
  let l = !1;
  i?.forEach((m) => {
    const y = w();
    E(y) && bT(y, m, r) && (l = !0);
  });
  const u = w();
  if (!E(u)) return l;
  const f = u.isBackward(), [d, p] = Bs(u), h = Ep(
    u.getNodes(),
    d,
    p
  );
  if (h.length === 0) return l;
  const g = h.filter(
    (m) => !kT(m) && !Hi(m, t)
  );
  return g.length > 0 && (k$(g).forEach((m) => x$(m, t)), l = !0), vT(h, f), l;
}
function b$(e, t) {
  return xT(e).some(
    (n) => !kT(n) && !Hi(n, t)
  );
}
function k$(e) {
  const t = [];
  let n;
  return e.forEach((r) => {
    const i = n?.[n.length - 1];
    n && i?.getNextSibling()?.is(r) ? n.push(r) : (n = [r], t.push(n));
  }), t;
}
function x$(e, t) {
  const n = e[0].getPreviousSibling(), r = e[e.length - 1].getNextSibling(), i = [n, r].find(
    (a) => U(a) && a.getMarker() === t
  ), s = i ? yc(i) : Kr(t);
  e[0].insertBefore(s), s.append(...e), i === n || df(e[0], s);
}
function T$(e) {
  Me(e) && (Fd(e.getPreviousSibling()), Ok(e.getNextSibling()));
}
const ST = {
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
}, Tm = "psc-active-text", Aa = "psc-empty-text";
function C$({ viewOptions: e }) {
  const [t] = Ce(), n = te(void 0), r = e?.hasActiveTextFocusBox ?? !1;
  return H(() => {
    if (!r) return;
    function i(o) {
      n.current && t.getElementByKey(n.current)?.classList.remove(Tm), n.current = o, o && t.getElementByKey(o)?.classList.add(Tm);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        Ic,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Aa}`);
          if (!c) return !1;
          const l = Yi(c);
          if (!Me(l)) return !1;
          const u = l.getParent();
          if (!A(u)) return !1;
          const f = l.getIndexWithinParent() + 1;
          return u.select(f, f), !1;
        },
        Xt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const f = uu(), d = v$(), p = [], h = [];
          return Ee().getChildren().forEach((g) => {
            if (!A(g)) return;
            const { emptyKeys: m, nonEmptyKeys: y } = _$(g);
            p.push(...m), h.push(...y);
          }), { newActiveKey: f, activeVerseKey: d, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== n.current && i(a), l.forEach((f) => {
          f === c ? t.getElementByKey(f)?.classList.remove(Aa) : t.getElementByKey(f)?.classList.add(Aa);
        }), u.forEach((f) => t.getElementByKey(f)?.classList.remove(Aa));
      }),
      t.registerCommand(
        Wf,
        () => (i(void 0), !1),
        Xt
      ),
      t.registerCommand(
        _S,
        () => {
          const o = t.getEditorState().read(uu);
          return o !== n.current && i(o), !1;
        },
        Xt
      )
    ];
    return i(t.getEditorState().read(uu)), et(...s);
  }, [t, r]), null;
}
function uu() {
  return S$(w() ?? void 0)?.getKey();
}
function v$() {
  const e = w();
  if (!E(e)) return;
  const t = e.anchor, n = t.getNode(), r = n.getTopLevelElement();
  if (!A(r)) return;
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
function S$(e) {
  if (E(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function _$(e) {
  const t = e.getChildren(), n = [], r = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!Me(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (Me(c)) break;
      if (!(Rt(c) || N(c)) && c.getTextContent().replaceAll(Io, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? r : n).push(s.getKey());
  }
  return { emptyKeys: n, nonEmptyKeys: r };
}
function pf(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function _T(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const n = e.getRootElement()?.ownerDocument.getSelection(), r = n?.anchorNode, i = n?.focusNode;
  return !!r && !!i && !vy(e, r, i);
}
function MT(e, t) {
  return e.length <= t ? e : e.slice(0, Pp(e, t));
}
function Pp(e, t) {
  if (t >= e.length) return e.length;
  let n = 0;
  for (const { index: r, segment: i } of wS(e)) {
    if (r + i.length > t) break;
    n = r + i.length;
  }
  return n;
}
const M$ = 16;
function E$(e, { $isHidden: t, $measure: n } = {}) {
  const r = (k) => t ? wp(k, t).length : k.getTextContent().length;
  n ??= r;
  const i = w();
  if (!E(i) || i.isCollapsed() || n(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = bc(s), l = bc(o), u = i.getNodes(), f = new Map(u.map((k) => [k.getKey(), w$(k)])), d = u.length > 0 ? f.get(u[0].getKey()) : void 0, p = d && A$(s, d) ? d : void 0, h = (k) => {
    const x = k > 0 ? P$(u, f, p, c, l, k, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), x ? i.focus.set(x.node.getKey(), x.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!x;
  };
  let g = Math.min(e, r(i));
  if (h(g) && n(i) <= e) return !0;
  let m = 0, y = 0;
  g -= 1;
  for (let k = 0; k < M$ && m <= g; k++) {
    const x = Math.floor((m + g) / 2);
    h(x) && n(i) <= e ? (y = x, m = x + 1) : g = x - 1;
  }
  return h(y), !0;
}
function hf(e) {
  return e.isToken() || da(e) || $e(e.getParent());
}
function A$(e, t) {
  const n = A(t) ? t.getAllTextNodes()[0] : void 0;
  return !!n && Qt(n.getKey(), 0, "text").isBefore(e);
}
function P$(e, t, n, r, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, u, f;
  const d = /* @__PURE__ */ new Map(), p = (g) => {
    const m = t.get(g.getKey());
    return m && n?.is(m) ? void 0 : m;
  }, h = (g) => {
    let m = f ? f.endBefore : g;
    for (; ; ) {
      const y = N$(m, e, r);
      if (!y || !m || y.node.is(m.node)) return y;
      const k = p(y.node);
      if (!k || k.is(p(m.node))) return y;
      m = d.get(k.getKey());
    }
  };
  for (let g = 0; g <= a; g++) {
    const m = e[g], y = p(m);
    if (f && !f.node.is(y) && (u && f.node.isParentOf(u.node) && (u = f.endBefore), f = void 0), y && !f && (f = { node: y, endBefore: u }, d.set(y.getKey(), u)), !o?.(m)) {
      if (A(m) && !m.isInline()) {
        if (!l) {
          if (c + 1 > s) return h(u);
          c += 1;
        }
        l = !m.isEmpty();
        continue;
      }
      if (l = !1, C(m)) {
        const k = g === 0 ? r : 0, x = g === a ? i : m.getTextContentSize(), S = x - k, _ = hf(m);
        if (_ && c + S > s) return h(u);
        if (!_ && c + S >= s) {
          const j = Pp(m.getTextContent(), k + (s - c));
          return h({ node: m, offset: Math.max(k, j) });
        }
        c += S, u = { node: m, offset: x };
      } else if (yn(m) || Ji(m)) {
        const k = m.getTextContentSize();
        if (c + k > s) return h(u);
        c += k;
      }
    }
  }
  return h(u);
}
function w$(e) {
  let t;
  for (let n = e; n; n = n.getParent())
    (D(n) || pp(n)) && (t = n);
  return t;
}
function N$(e, t, n) {
  if (!e) return e;
  const r = Qe(e.node, (m) => A(m) && !m.isInline()), i = A(r) ? r.getAllTextNodes() : [e.node], s = i.findIndex((m) => m.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let m = o; m <= a; m++)
    l.push(c.length), c += i[m].getTextContent();
  const u = l[s - o], f = u + e.offset, d = Pp(c, f);
  if (d === f) return e;
  const p = (m) => t[0]?.is(m) ?? !1;
  if (hf(e.node)) return { ...e, offset: p(e.node) ? n : 0 };
  if (d >= u) {
    const m = d - u;
    return m >= (p(e.node) ? n : 0) ? { ...e, offset: m } : void 0;
  }
  const h = s > o ? i[s - 1] : void 0;
  if (!h || !t.some((m) => m.is(h))) return;
  if (hf(h))
    return { node: h, offset: p(h) ? n : 0 };
  const g = d - l[0];
  return g >= (p(h) ? n : 0) ? { node: h, offset: g } : void 0;
}
function wp(e, t) {
  const n = e.getNodes(), r = n.length - 1, [i, s] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], o = r === 0 && i.type === "element" && s.type === "element" && i.offset !== s.offset;
  let a = "", c = !0;
  return n.forEach((l, u) => {
    if (!t(l)) {
      if (A(l) && !l.isInline()) {
        c || (a += `
`), c = !l.isEmpty();
        return;
      }
      if (c = !1, C(l)) {
        const f = l.getTextContent();
        o ? a += f : a += f.slice(
          u === 0 ? bc(i) : 0,
          u === r ? bc(s) : f.length
        );
      } else (yn(l) || Ji(l)) && (u !== r || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function gf(e) {
  const t = e.getParent();
  return !!t && Qe(t, (n) => D(n) && !!n.getIsCollapsed()) !== null;
}
function ET(e) {
  const t = /* @__PURE__ */ new Map(), n = (i) => {
    Lt(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (n(i), A(i)) for (const { node: s } of Xi(i)) n(s);
  let r = 0;
  for (const i of t.values()) r += i;
  return r;
}
function O$(e) {
  return e.getNodes().some(
    (t) => yn(t) || D(t) || Me(t) || ot(t) || pp(t)
  );
}
function bc(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return A(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const Gn = String.raw`\w-`, AT = "a-z0-9", $$ = `[a-z][${AT}]*`, PT = new RegExp(
  String.raw`^\\(\+?[${Gn}]+)[ \u00A0]$`
), Zs = new RegExp(String.raw`^\\(\+?[${Gn}]+)$`), R$ = new RegExp(String.raw`^\\\+?[${Gn}]*\*$`), I$ = new RegExp(
  String.raw`^\\(\+?[${Gn}]+)(?:[ \u00A0]|$)`
), L$ = new RegExp(
  String.raw`^\\(\+?)([${Gn}]+)`
), wT = new RegExp(
  String.raw`^(?:[${Gn}]+[*\\]?|[*\\])$`
), q$ = new RegExp(
  String.raw`\\\+?[${Gn}]+(?:\\?\*|[ \u00A0])`
), NT = new RegExp(
  String.raw`\\\+?[${Gn}]*$`
), D$ = new RegExp(
  String.raw`^\\(${$$})( |$)`
), K$ = new RegExp(
  String.raw`\\[${AT}+*]*$`,
  "i"
);
function OT(e) {
  const t = e.getParent();
  if (!D(t) || t.getIsCollapsed() !== !1 || !Yf(t.getMarker())?.includes("caller")) return !1;
  const n = t.getChildren();
  let r = 0;
  for (; r < n.length; ) {
    const i = n[r];
    if (!N(i) || i.getMarkerSyntax() !== "opening") break;
    r++;
  }
  return e.is(n[r]);
}
const kc = "usfm:", $T = "usfmopen", RT = "usfmclosed";
function U$(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const B$ = new RegExp(
  [kc, $T, RT].map(U$).join("|")
), F$ = "\uFEFF", z$ = /^usfm_(.+)$/;
function j$(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function V$(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, n) => String.fromCharCode(Number.parseInt(n, 16))
  );
}
function W$(e) {
  return e.startsWith(kc) ? V$(e.slice(kc.length)).replace(/\r\n?|\n/g, " ") : "";
}
function IT(e) {
  for (const t of e.classList) {
    const n = z$.exec(t);
    if (n) return n[1];
  }
}
function H$(e) {
  const t = IT(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function G$(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let n = t.nextNode(); n; n = t.nextNode())
    if ((n.nodeValue ?? "").startsWith(kc)) return !0;
  for (const n of e.querySelectorAll("*")) {
    const { classList: r } = n;
    if (!(!r.contains($T) && !r.contains(RT)) && IT(n) !== void 0)
      return !0;
  }
  return !1;
}
function LT(e, t, n) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || n.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    n.push(W$(e.nodeValue ?? ""));
    return;
  }
  if (!j$(e)) return;
  const { classList: r } = e, i = (u) => e.childNodes.forEach((f) => LT(f, u, n));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? H$(e) : void 0, c = a !== void 0 && r.contains("usfmopen"), l = a !== void 0 && r.contains("usfmclosed");
  o && n.push(`
`), (c || l) && n.push(`\\${a} `), i(!1), l && n.push(`\\${a}*`), o && n.push(`
`);
}
function J$(e) {
  if (!B$.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((r) => r.remove()), !G$(t)) return;
  const n = [];
  return t.childNodes.forEach((r) => LT(r, !1, n)), n.join("").replaceAll(F$, "").replaceAll(q, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function Y$(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const n = de(e, ke);
  if (n === "attribute" || n === Mr || OT(e)) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if ($e(o) || Ze(o)) return;
  const r = t.startsWith(q) && U(e.getParent()), i = r ? t.slice(1) : t, s = (r ? q : "") + i.replace(/ (?=[ \u00A0])/g, q).replace(new RegExp("(?<=\\u00A0) ", "g"), q);
  s !== t && e.setTextContent(s);
}
function X$(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((n) => n.remove()), t.querySelectorAll("br").forEach((n) => n.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((n) => n.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function Q$(e, t) {
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
function mf(e, t) {
  const n = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!n) return;
  const r = (a) => a.replace(/\r\n?/g, `
`), i = r(n.getData("text/plain")), s = n.getData("text/html"), o = s ? J$(s) : void 0;
  return {
    text: o ? r(o) : i || (s ? r(X$(s)) : ""),
    isInternal: Q$(
      n.getData("application/x-lexical-editor"),
      t
    )
  };
}
const Cm = String.raw`\\(?:\+?[${Gn}]+\*?|\*)`, Z$ = new RegExp(
  String.raw`(?<=${Cm})\u00A0|\u00A0(?=${Cm})`,
  "g"
);
function Np(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(Z$, " ").replaceAll(q, "~");
}
const qT = new RegExp(
  String.raw`\\c(?![${Gn}])[ \u00A0]*[^\s\\]*`,
  "g"
), DT = new RegExp(String.raw`\\id(?![${Gn}])[^\n\\]*`, "g"), eR = new RegExp(
  String.raw`^(?:${qT.source}|${DT.source})`
);
function Op(e) {
  return e.split(`
`).map((t) => {
    const n = t.replace(qT, "").replace(DT, "");
    return eR.test(t) && n.trim() === "" && t.trim() !== "" ? void 0 : n;
  }).filter((t) => t !== void 0).join(`
`);
}
function yf(e) {
  if (C(e) && de(e, ke) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Be(t)) return !0;
  return !1;
}
function tR(e) {
  return yf(e.anchor.getNode()) || yf(e.focus.getNode());
}
function nR(e) {
  const { anchor: t, focus: n } = e;
  return t.key === n.key && yf(t.getNode());
}
function rR(e, t) {
  const r = nR(e) ? t : Np(Op(t));
  r && e.insertText(r.replace(/\n/g, " "));
}
function iR(e, t = !1, n = () => {
}) {
  const r = mf(e, Ut()._config.namespace);
  if (!r) return !1;
  const i = w(), s = E(i) && tR(i);
  if (!s && r.isInternal || t && E(i) && Es(i))
    return !1;
  const { text: o } = r;
  if (!o || !E(i)) return !1;
  if (e?.preventDefault(), s)
    return rR(i, o), !0;
  const a = Np(Op(o));
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
    const d = w();
    E(d) && d.insertText(u);
  }), !0;
}
function sR(e) {
  if (e.getTextContent() !== q) return !1;
  const t = e.getParent();
  return D(t) ? !Lt(e.getPreviousSibling()) : !1;
}
function oR(e, t) {
  if (t || e.getTextContent() !== q) return "";
  const n = e.getParent();
  if (!D(n) || !Lt(e.getPreviousSibling())) return "";
  const r = n.getCategory();
  return r ? `\\cat ${r}\\cat*` : "";
}
function aR(e) {
  const t = e.getParent();
  return (D(t) ? t.getCaller() : void 0) || Lo;
}
function cR(e) {
  const t = e.getParent();
  return !t || li(t) === void 0;
}
function $p(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const n = t[0], r = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Ff(e);
  let l = "", u = !0;
  for (const f of t) {
    if (A(f) && !f.isInline()) {
      !u && cR(f) && (l += `
`), u = !f.isEmpty();
      continue;
    }
    if (u = !1, Lt(f))
      (f !== r || !e.isCollapsed()) && (l += (f === n ? "" : " ") + aR(f));
    else if (C(f)) {
      let d = f.getTextContent();
      f === n ? f === r ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (d = a < c ? d.slice(a, c) : d.slice(c, a)) : d = o ? d.slice(a) : d.slice(c) : f === r && (d = o ? d.slice(0, c) : d.slice(0, a)), l += sR(f) ? "" : d.replaceAll(q, " ") + oR(f, f === r);
    } else (yn(f) || Ji(f)) && (f !== r || !e.isCollapsed()) && (l += f.getTextContent().replaceAll(q, " "));
  }
  return l;
}
function KT(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function lR(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (n) => Ie(n) || $e(n)
    )
  );
}
function uR(e) {
  const t = w();
  if (!E(t) || t.isCollapsed()) return;
  const n = $p(t), r = {
    "text/plain": n,
    "text/html": KT(n)
  };
  if (sl() || lR(t)) return r;
  const i = OS(e);
  return i && (r["application/x-lexical-editor"] = i), r;
}
function vm(e, t, n, r) {
  const i = w();
  if (!E(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !$x();
  const s = uR(t);
  return s ? (r !== void 0 && delete s["application/x-lexical-editor"], UT(e, t, i, s, n, r)) : !1;
}
function UT(e, t, n, r, i, s) {
  const o = pf(s);
  if (o !== void 0 && _T(t, e)) return !1;
  const a = r["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), bf(e, t, { "text/plain": MT(a, o) })) : bf(
    e,
    t,
    r,
    i && t.isEditable() ? () => n.removeText() : void 0
  );
}
function bf(e, t, n, r) {
  const i = !n["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || NS(t, null, n), r?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(n)) e.clipboardData.setData(s, o);
  return r?.(), !0;
}
function kf(e, t) {
  const n = tl(t);
  if (!n?.end) return;
  const r = fR(e, t);
  if (r)
    return r.state.read(
      () => {
        const i = el(n, r.standardViewOptions);
        return i ? $p(i) : void 0;
      },
      { editor: r.editor }
    );
}
const fu = /* @__PURE__ */ new WeakMap();
function fR(e, t) {
  const n = e.getEditorState();
  if (fu.has(n)) {
    const i = fu.get(n);
    if (!i || i.viewOptions === t) return i;
  }
  const r = dR(n, t);
  return fu.set(n, r), r;
}
function dR(e, t) {
  const n = ep(Xd);
  if (!n) return;
  const r = xs.deserializeEditorState(e, t);
  if (!r) return;
  const i = Gf({
    namespace: "markers-view-copy",
    nodes: [gt, ...il],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    or.serializeEditorState(r, n)
  );
  return { viewOptions: t, standardViewOptions: n, editor: i, state: s };
}
function pR({
  viewOptions: e,
  copyLimit: t
}) {
  const [n] = Ce();
  return H(() => {
    const r = (i, s) => {
      const o = w();
      if (!E(o) || o.isCollapsed()) return !1;
      const a = kf(n, e);
      return a === void 0 ? !1 : UT(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        n,
        o,
        { "text/plain": a, "text/html": KT(a) },
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
const Sm = /* @__PURE__ */ new WeakMap();
function hR({
  limit: e,
  viewOptions: t
}) {
  const [n] = Ce(), r = te(pf(e)), i = te(t), s = te(!1), o = te(void 0);
  return H(() => {
    r.current = pf(e), i.current = t, o.current?.();
  }, [e, t]), H(() => {
    let a, c;
    const l = (y) => {
      const k = r.current;
      if (k === void 0) return;
      const x = Sm.get(y);
      if (y.defaultPrevented && x === void 0) return;
      const S = n.getRootElement();
      if (!S) return;
      const _ = S.ownerDocument.getSelection();
      if (!_ || !yR(_, S)) return;
      y.preventDefault();
      const j = MT(
        x ?? _.toString().replaceAll(q, " "),
        k
      );
      Sm.set(y, j);
      const $ = y.clipboardData;
      if ($) {
        if (!j) {
          x !== void 0 && $.clearData();
          return;
        }
        $.setData("text/plain", j);
      }
    }, u = (y) => {
      r.current !== void 0 && MS(y, "a", { ctrlKey: !Os, metaKey: Os }) && (kR(c?.activeElement, n.getRootElement()) || y.preventDefault());
    }, f = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", u, !0), c = void 0;
    }, d = () => {
      const y = r.current === void 0 ? void 0 : a;
      y !== c && (f(), c = y, c?.addEventListener("copy", l), c?.addEventListener("keydown", u, !0));
    };
    o.current = d;
    const p = (y) => (y?.preventDefault(), !0), h = (y) => {
      const k = r.current;
      if (k === void 0 || (s.current = !1, _T(n, y))) return !1;
      if (k <= 0) return p(y);
      const x = w();
      if ($c(x))
        return x.getTextContent().length + ET(x.getNodes()) <= k ? !1 : p(y);
      if (!E(x) || x.isCollapsed()) return !1;
      const S = gR(n, i.current);
      return S.$size(x) <= k ? !1 : (E$(k, S.options), x.isCollapsed() ? p(y) : (n.isEditable() || Ey(() => mR(n)), s.current = !0, !1));
    }, g = (y, k) => {
      if (r.current === void 0 || !s.current) return !1;
      s.current = !1;
      const x = w();
      if (!E(x) || x.isCollapsed()) return !1;
      const S = k && n.isEditable() && !O$(x);
      return bf(
        y && typeof y == "object" && "clipboardData" in y ? y : null,
        n,
        { "text/plain": wp(x, gf) },
        S ? () => x.removeText() : void 0
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
        _y,
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
function gR(e, t) {
  if (Bt(t)) {
    const r = (i) => $p(i).length;
    return { $size: r, options: { $measure: r } };
  }
  const n = t?.markerMode === "visible" ? t : void 0;
  if (n && kf(e, n) !== void 0) {
    const r = (i) => kf(e, n)?.length ?? wp(i, gf).length;
    return { $size: r, options: { $measure: r } };
  }
  return {
    $size: (r) => r.getTextContent().length + ET(r.getNodes()),
    options: { $isHidden: gf }
  };
}
function mR(e) {
  e.getEditorState().read(() => {
    const t = w(), n = e.getRootElement()?.ownerDocument.getSelection();
    if (!E(t) || !n) return;
    const r = _m(e, t.anchor), i = _m(e, t.focus);
    r && i && n.setBaseAndExtent(...r, ...i);
  });
}
function _m(e, t) {
  const n = e.getElementByKey(t.key);
  if (!n) return;
  if (t.type === "text") {
    const a = ES(n);
    return a ? [a, t.offset] : void 0;
  }
  const r = t.getNode(), i = A(r) ? r.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [n, n.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function yR(e, t) {
  const n = t.ownerDocument.createRange();
  n.selectNodeContents(t);
  for (let r = 0; r < e.rangeCount; r++) {
    const i = e.getRangeAt(r), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, n) < 0 && s.setStart(n.startContainer, n.startOffset), i.compareBoundaryPoints(i.END_TO_END, n) > 0 && s.setEnd(n.endContainer, n.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const bR = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function kR(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? bR.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const xR = /^\+/;
function Rp(e, t) {
  const n = t.replace(xR, "");
  return Object.hasOwn(e.markers, n) ? e.markers[n] : void 0;
}
function BT(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let n = e.length - 1; n >= 0; n--)
    if (t.occursUnder.includes(e[n].marker) && (n === e.length - 1 || t.rank === 0 || e[n + 1].rank <= t.rank))
      return { keep: n + 1, joins: !0 };
}
function FT(e, t) {
  return BT(e, t) !== void 0;
}
function xf(e, t) {
  const n = BT(e, t);
  return n ? (n.joins && (e.length = n.keep, e.push(t)), !0) : !1;
}
function xc(e, t, n) {
  const r = A(e) ? e.getChildren().filter(N) : [];
  if (r.length === 0) {
    n.set(e.getKey(), t);
    return;
  }
  for (const i of r) n.set(i.getKey(), t);
}
function TR(e, t, n, r, i) {
  const s = Rp(r, t);
  if (!s) {
    xc(e, "unknown", i);
    return;
  }
  if (n === void 0) return;
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(n) && xc(e, "invalid", i);
}
function As(e, t, n, r, i) {
  for (const s of e.getChildren())
    if (U(s)) {
      const o = s.getMarker();
      i || TR(s, o, t, n, r), As(s, t, n, r, i || o === "xq");
    } else if (Me(s)) {
      if (i) continue;
      const o = Rp(n, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && r.set(s.getKey(), "invalid") : r.set(s.getKey(), "unknown");
    } else D(s) ? As(s, s.getMarker(), n, r, i) : Ze(s) || A(s) && As(s, t, n, r, i);
}
function CR(e, t) {
  const n = /* @__PURE__ */ new Map(), r = [], i = (o, a) => {
    const c = Rp(e, a);
    if (!c) {
      xc(o, "unknown", n), xf(r, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    xf(r, l) || xc(o, "invalid", n);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Ee().getChildren())
    Ze(o) || (Ie(o) ? (i(o, o.getMarker()), s(o) && As(o, void 0, e, n, !1)) : ot(o) ? i(o, o.getMarker()) : me(o) ? (i(o, o.getMarker()), s(o) && As(o, o.getMarker(), e, n, !1)) : A(o) && s(o) && As(o, "p", e, n, !1));
  return n;
}
function vR(e) {
  return !!e?.includes("(basic)");
}
function SR(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function zT(e, t) {
  return !e.startsWith("zpa") && e !== "c" && uf(e, t);
}
function Ip(e, t) {
  const n = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (n)
    return { marker: t, rank: n.rank ?? 0, occursUnder: n.occursUnder ?? [] };
}
function jT(e, t) {
  const n = [];
  for (const r of t) {
    const i = Ip(e, r);
    i && xf(n, i);
  }
  return n;
}
function Fa(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: SR(e.description),
    isBasic: vR(e.description)
  };
}
function _R(e, t) {
  const n = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, r = n(e), i = n(t);
  return r.prefix !== i.prefix ? r.prefix < i.prefix ? -1 : 1 : r.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : r.digits - i.digits;
}
function Tf(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : _R(e.marker, t.marker);
}
function Cf(e, t, n) {
  if (t.noteMarker) return [];
  const r = jT(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && zT(i.marker, n)
  ).filter((i) => {
    const s = Ip(e, i.marker);
    return s !== void 0 && FT(r, s);
  }).map((i) => Fa(i, "paragraph")).sort(Tf);
}
function MR(e, t, n) {
  const { noteMarker: r, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => zT(c.marker, n)
  );
  if (r)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(r)
    ).map((c) => Fa(c, "character")).sort(Tf);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Fa(c, "character")),
    ...a.map((c) => Fa(c, "note"))
  ].sort(Tf);
}
function ER(e, t) {
  return t.map((n, r) => {
    const i = e.markers[n]?.endMarker ?? `${n}*`;
    return { marker: `${r === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function AR(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function PR(e, t, n) {
  return [
    ...ER(e, t.openCharMarkers),
    ...MR(e, t, n)
  ].sort(AR);
}
function wR(e, t, n) {
  if (t.source === "paragraph") return Cf(e, t, n);
  const r = PR(e, t, n);
  return r.length > 0 ? r : Cf(e, t, n);
}
function NR(e, t, n) {
  const r = Cf(e, t, n), i = jT(e, t.previousParaMarkers), s = Ip(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && FT(i, s) ? "ip" : "p", c = r.findIndex((u) => u.marker === a);
  if (c <= 0) return r;
  const [l] = r.splice(c, 1);
  return [l, ...r];
}
const Tc = "￼", Mm = "|", ni = "\\", du = "+", OR = /([-\w]+)="(.*?)"/g, $R = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]), RR = /* @__PURE__ */ new Map([["file", "src"]]);
class Lp {
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
function Em(e, t) {
  const n = [e.indexOf(ni, t + 1), e.indexOf(Tc, t + 1)].filter(
    (r) => r >= 0
  );
  return n.length > 0 ? Math.min(...n) : e.length;
}
function Am(e) {
  const t = e.slice(1), n = [...t.matchAll(OR)];
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
function IR(e, t) {
  const n = e.map(
    (o, a) => o.name === void 0 || !$R.has(o.name) && !e.slice(a + 1).some((c) => c.name === o.name)
  ), r = (o, a) => o.value === a.value && (a.name === void 0 || o.name === a.name || o.name !== void 0 && RR.get(o.name) === a.name), i = /* @__PURE__ */ new Set(), s = [];
  return t.forEach((o, a) => {
    const c = e.findIndex(
      (l, u) => n[u] && !i.has(u) && r(l, o)
    );
    c < 0 || (i.add(c), s.push([c, a]));
  }), s;
}
function Pm(e, t, n) {
  let r = 0, i = -1;
  for (const s of e) {
    if (!s.same) continue;
    const { end: o, otherEnd: a } = ha(s, n);
    o <= t && o > i && (i = o, r = a);
  }
  return r;
}
function LR(e, t, n, r, i) {
  if (e === t) {
    n.push(r, r + e.length, i, i + t.length, !0);
    return;
  }
  const s = Am(e), o = Am(t);
  if (!s || !o) {
    n.push(r, r + 1, i, i + 1, !0), n.pushStretch(e.slice(1), r + 1, t.slice(1), i + 1);
    return;
  }
  const a = new Lp();
  a.push(0, 1, 0, 1, !0);
  const c = IR(s, o);
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
    const h = Pm(l, d.start, "live");
    a.push(d.start, d.end, h, h, !1);
  });
  const f = new Set(c.map(([, d]) => d));
  o.forEach((d, p) => {
    if (f.has(p)) return;
    const h = Pm(l, d.start, "settled");
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
function VT(e, t, n, r, i) {
  let s = t, o = 0;
  for (; s < e.length && o < n.length; ) {
    const c = n[o] === Tc && e[s] !== Tc ? i.spellings?.get(o) : void 0;
    if (c !== void 0) {
      const u = new Lp(), f = VT(e, s, c, u, { prefix: !0 });
      i.literals?.set(o, {
        liveStart: s,
        liveEnd: f,
        inner: { segments: UR(u.segments, s) }
      }), r.push(s, f, o, o + 1, !1), s = f, o += 1;
      continue;
    }
    if (e[s] === Mm && n[o] === Mm) {
      const u = Em(e, s), f = Em(n, o);
      LR(e.slice(s, u), n.slice(o, f), r, s, o), s = u, o = f;
      continue;
    }
    const l = n[o] === ni ? qR(e, s, n, o) || KR(e, s, n, o, i.spellings) || (!i.prefix && s === 0 && o === 0 ? DR(e, n) : 0) : 0;
    if (l > 0) {
      r.push(s, s, o, o + l, !1), o += l;
      continue;
    }
    if (e[s] === n[o]) {
      r.push(s, s + 1, o, o + 1, !0), s += 1, o += 1;
      continue;
    }
    if (e[s - 1] === ni && n[o - 1] === ni && e[s] === du != (n[o] === du)) {
      e[s] === du ? (r.push(s, s + 1, o, o, !1, !0), s += 1) : (r.push(s, s, o, o + 1, !1, !0), o += 1);
      continue;
    }
    if (i.prefix) {
      const u = n.lastIndexOf(ni), f = u >= o ? n.slice(u) : void 0, d = f === void 0 ? -1 : e.indexOf(f, s);
      return f === void 0 || d < 0 ? (r.push(s, s, o, n.length, !1), s) : (r.pushStretch(e.slice(s, d), s, n.slice(o, u), o), r.push(d, d + f.length, u, n.length, !0), d + f.length);
    }
    return r.pushStretch(e.slice(s), s, n.slice(o), o), e.length;
  }
  const a = i.prefix ? s : e.length;
  return r.push(s, a, o, n.length, !1), a;
}
const Ss = /\\\+?[\w-]+/y;
function qR(e, t, n, r) {
  Ss.lastIndex = r;
  const i = Ss.exec(n)?.[0];
  return !i || n[r + i.length] !== ni ? 0 : n.startsWith(i, r + i.length) && e.startsWith(i, t) && !e.startsWith(i, t + i.length) ? i.length : 0;
}
const Pa = "\\p";
function DR(e, t) {
  return !t.startsWith(Pa) || t[Pa.length] !== ni ? 0 : e[0] === ni && !e.startsWith(Pa) ? Pa.length : 0;
}
function KR(e, t, n, r, i) {
  Ss.lastIndex = r;
  const s = Ss.exec(n)?.[0];
  if (!s || n[r + s.length] !== Tc) return 0;
  const o = i?.get(r + s.length);
  if (o === void 0 || e.startsWith(s, t)) return 0;
  Ss.lastIndex = 0;
  const a = Ss.exec(o)?.[0];
  return a !== void 0 && e.startsWith(a, t) ? s.length : 0;
}
function UR(e, t) {
  return e.map((n) => ({
    ...n,
    liveStart: n.liveStart - t,
    liveEnd: n.liveEnd - t
  }));
}
function BR(e, t, n) {
  const r = new Lp(), i = /* @__PURE__ */ new Map();
  return VT(e, 0, t, r, { prefix: !1, spellings: n, literals: i }), { alignment: { segments: r.segments }, literals: i };
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
function WT(e, t, n) {
  return e.segments.find((r) => {
    const { start: i, end: s } = ha(r, n);
    return i <= t && t < s;
  });
}
function HT(e, t) {
  let n = 0, r = 0;
  for (const i of e.segments) {
    const { end: s, otherEnd: o } = ha(i, t);
    n = Math.max(n, s), r = Math.max(r, o);
  }
  return [n, r];
}
function qp(e, t, n) {
  const r = WT(e, t, n);
  if (r) {
    const { start: o, otherStart: a } = ha(r, n);
    return r.same ? a + (t - o) : void 0;
  }
  const [i, s] = HT(e, n);
  return t === i ? s : void 0;
}
function eo(e, t, n) {
  const r = WT(e, t, n);
  if (r) {
    const { start: i, otherStart: s } = ha(r, n);
    return r.same ? s + (t - i) : s;
  }
  return HT(e, n)[1];
}
function FR(e, t) {
  const n = eo(e, t, "settled"), r = e.segments.find(
    (i) => i.nesting && i.settledStart === t && i.settledEnd === t && i.liveEnd === n
  );
  return r ? r.liveStart : n;
}
const On = /\s/;
function zR(e, t) {
  return `\\${e} ${t}\\${e}*`;
}
function vf(e) {
  const t = [];
  for (const r of e.spans)
    for (let i = r.start; i < r.end; i += 1) {
      const s = e.text[i];
      t.push({ byte: s, position: i, isWs: On.test(s) });
    }
  const n = e.spans.filter((r) => r.isSentinel).map((r) => r.start);
  return { bytes: t, placeholders: n };
}
function za({ bytes: e }, t) {
  return e.filter((n) => n.position < t && !n.isWs).length;
}
function jR({ bytes: e }, t) {
  let n = 0;
  for (const r of e) r.position < t && (n = r.isWs ? n + 1 : 0);
  return n;
}
function Sf({ bytes: e }) {
  return e.filter((t) => !t.isWs);
}
const wm = "cat", VR = "category";
function WR(e) {
  return C(e) && e.getTextContent().trim() === "";
}
function HR(e) {
  const t = { text: "", spans: [], sentinels: [] }, n = [], r = (a, c) => {
    t.spans.push({
      key: a.getKey(),
      start: t.text.length,
      end: t.text.length + c.length,
      isSentinel: !1
    }), t.text += c;
  }, i = (a, c) => {
    r(a, zR(wm, c)), n.push({
      ownerKey: a.getKey(),
      markerName: wm,
      keyName: VR,
      valueLength: c.length
    });
  }, s = (a) => {
    const c = ca(a);
    let u = c.opener ?? c.value ?? c.closer ? void 0 : a.getCategory();
    const f = St(a);
    let d = !1;
    for (const p of a.getChildren())
      u !== void 0 && d && !WR(p) && (i(a, u), u = void 0), o(p), (Lt(p) || f && (f.is(p) || p.isParentOf(f))) && (d = !0);
    u !== void 0 && i(a, u);
  }, o = (a) => {
    if (Lt(a)) {
      const c = a.getParent();
      r(a, D(c) ? c.getCaller() : "");
    } else C(a) || Rt(a) ? r(a, a.getTextContent()) : D(a) ? s(a) : A(a) && a.getChildren().forEach(o);
  };
  return e.forEach(o), { spelling: t, foldedAttributes: n };
}
function Dp(e) {
  const t = vf(e);
  return {
    runs: e.sentinels.map((n, r) => {
      const { spelling: i, foldedAttributes: s } = HR(n);
      return {
        memberCount: n.length,
        before: za(t, t.placeholders[r] ?? e.text.length),
        spelling: i,
        foldedAttributes: s,
        spelled: Sf(vf(i)).map(({ byte: o }) => o).join("")
      };
    }),
    bytes: Sf(t).map(({ byte: n }) => n).join("")
  };
}
function Cc(e, t) {
  return {
    facts: vf(e),
    carried: e.sentinels.map((n, r) => {
      const i = new Set(t[r]?.map((s) => s.getKey()));
      return n.map((s) => i.has(s.getKey()));
    })
  };
}
function vc(e, t) {
  const n = e.carried.map(
    (d) => d.map(() => {
    })
  ), r = Sf(e.facts), { alignment: i, literals: s } = BR(
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
    const g = qp(i, za(e.facts, h), "live"), m = g === void 0 ? void 0 : u.get(g);
    m === void 0 || t.runs[m].memberCount !== a(d) || o(p, m);
  });
  const f = [];
  for (const [d, p] of s) {
    const h = u.get(d);
    if (h === void 0) continue;
    const g = t.runs[h], m = r[p.liveStart]?.position ?? Number.POSITIVE_INFINITY, y = p.liveEnd > p.liveStart ? r[p.liveEnd - 1].position + 1 : m, k = za(e.facts, m);
    f.push({
      sentinelIndex: h,
      liveBefore: k,
      liveLength: za(e.facts, y) - k,
      liveWsBefore: jR(e.facts, m),
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
function GT(e, t, n) {
  return qp(e.inner, t, n === "toSpelling" ? "live" : "settled");
}
function JT(e, t) {
  return e.find(
    (n) => t.nonWsBefore === n.liveBefore && t.wsRun >= n.liveWsBefore
  );
}
function Kp(e, t) {
  for (const n of e) {
    const r = t.nonWsBefore - n.liveBefore;
    if (r <= 0 || r >= n.liveLength) continue;
    const i = GT(n, r, "toSpelling");
    return {
      run: n,
      count: r,
      within: i === void 0 ? void 0 : { nonWsBefore: i, wsRun: t.wsRun }
    };
  }
}
function Up(e, t) {
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
function Bp(e, t) {
  const n = [];
  for (let r = t; r; r = r.getParent()) {
    if (r.is(e)) return n;
    n.unshift(r.getIndexWithinParent());
  }
}
const xt = sa;
function YT(e) {
  return e.length > 1 && e.startsWith(q) && e.charAt(1) !== xt ? e.slice(1) : e;
}
function Nm(e) {
  return Hs(e) ? e.markerSyntax ?? "opening" : void 0;
}
function XT(e, t, n, r) {
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
  for (; Nm(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== vt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Nm(a[u - 1]) === "closing"; )
    u--;
  const f = a.slice(c, u);
  return f.length === 0 ? { failure: "empty" } : { children: f };
}
function QT(e, t) {
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const n = `${e.getMarker()}*`, r = t.findIndex(
    (i) => typeof i == "object" && i.type === "unmatched" && i.marker === n
  );
  if (!(r < 0))
    return { before: t.slice(0, r), after: t.slice(r + 1) };
}
function ZT(e, t, n, r, i) {
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
function eC(e, t, n, r) {
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
  if (!xd(o)) return { failure: "shape" };
  const c = Xb(o.children[0]) ? o.children.slice(1) : o.children;
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
  const n = NT.exec(e.text)?.[0];
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
const GR = `\\${q}${xt}`;
function tC(e) {
  return e.forEach((t, n) => {
    typeof t == "string" ? e[n] = t.replaceAll(GR, `\\${xt}`) : t.content && tC(t.content);
  }), e;
}
const nC = "\u2028";
function Fp(e) {
  return e.replaceAll(nC, "");
}
function zp(e) {
  return e ? nC : " ";
}
function JR(e) {
  return D(e[0]) ? "note" : Ue(e[0]) ? "verse" : "other";
}
function ss(e, t) {
  return tC(
    Dc(Fp(e.text), {
      ...t,
      placeholders: e.sentinels.map(JR)
    })
  );
}
function YR(e, t, n = !1, r = !1) {
  if (Bt(t)) return Wt(e);
  if (e === q && !r) return " ";
  const i = n && e.startsWith(q), s = i ? e.slice(1) : e, o = n && !i ? XR.exec(s) : null;
  return o ? `${o[0]} ${s.slice(o[0].length + 1).replaceAll(q, "~")}` : (i ? " " : "") + s.replaceAll(q, "~");
}
const XR = /^[^\s\u200B\\|*]+(?=\u00A0)/;
function Ps(e) {
  const t = e.getTextContent();
  return bn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function cl(e, t) {
  const n = e[t];
  if (!Ke(n)) return [];
  const { attribute: r, closing: i, wrapper: s } = Uc(n);
  if (s) return [s];
  const o = n.getNextSibling();
  if (!N(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== n.getMarker())
    return [];
  const a = [o];
  return r && a.push(r), i && a.push(i), a;
}
function rC(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function ll(e, t) {
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
function jp(e) {
  return !!e.getUnknownAttributes();
}
function ul(e, t) {
  const n = t(e)?.type;
  return n === T.Milestone || n === void 0 && rd(e);
}
function Vp(e) {
  return e.getIsCollapsed() !== !1 || e.getChildren().some((n) => N(n) && n.getMode() === "token") || Object.keys(e.getUnknownAttributes() ?? {}).some((n) => n !== "closed") ? !1 : e.getChildren().some((n) => {
    if (!N(n) || lr(n)) return !1;
    if (n.getMarkerSyntax() !== "opening") return !0;
    const r = n.getTextContent(), i = (Zs.exec(r) ?? PT.exec(r))?.[1];
    return i === void 0 || i.startsWith("+") || !tt.isValidMarker(i) || n.getMarker() !== e.getMarker();
  });
}
function Wp(e, t) {
  return Ke(e) ? !ul(e.getMarker(), t) : D(e) ? !Vp(e) : Ze(e) ? !0 : Ue(e) ? jp(e) : U(e) ? iC(e, t) : !1;
}
function iC(e, t) {
  return sC(e, e.getMarker(), t);
}
function sC(e, t, n) {
  return Q_(e) ? !0 : C_(t) || n(t) !== void 0 || QR(e) && !ZR(e) ? !1 : t !== e.getMarker() || !eI(e);
}
function QR(e) {
  const t = e.getParent();
  return t !== null && An(t) !== void 0;
}
function ZR(e) {
  const t = e.getUnknownAttributes();
  return !!t && Object.keys(t).some((n) => n !== "closed");
}
function eI(e) {
  const t = e.getChildren().filter((i) => N(i) && i.getMarker() === e.getMarker()).filter(N);
  if (t.some((i) => !lr(i))) return !0;
  const n = t.some((i) => i.getMarkerSyntax() === "opening"), r = t.some((i) => i.getMarkerSyntax() === "closing");
  return !n && r;
}
function oC(e) {
  let t = e, n = t.getParent();
  for (; !t.getNextSibling() && ue(n); )
    t = n, n = t.getParent();
  let r = t.getNextSibling();
  for (; ue(r); ) r = r.getFirstChild();
  return Ue(r);
}
const cn = "", ln = "";
function Om(e) {
  return e.flatMap((t) => Be(t) ? t.getChildren() : [t]);
}
function Ts(e, t, n, r = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Ke(s)) {
      const o = cl(e, i);
      ul(s.getMarker(), n) && rC(o) ? (t.push(
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
      ), Ts(Om(o), t, n), t.push(ln)) : t.push(xt), i += o.length;
    } else if (Ue(s)) {
      const o = ll(e, i);
      jp(s) ? t.push(xt) : (t.push(
        cn,
        "verse",
        Wt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Ts(Om(o), t, n), t.push(ln)), i += o.length;
    } else N(s) ? t.push(cn, "marker", Wt(s.getTextContent()), ln) : kn(s) ? t.push(
      cn,
      "unmatched",
      Wt(s.getTextContent()),
      s.getMarker(),
      ln
    ) : Wp(s, n) ? t.push(xt) : Ji(s) ? t.push(zp(oC(s))) : C(s) && de(s, ke) === "attribute" ? t.push(
      cn,
      "attribute",
      Wt(Ps(s)),
      ln
    ) : C(s) ? t.push(
      Wt(
        r ? YT(Ps(s)) : Ps(s)
      )
    ) : U(s) ? (t.push(cn, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Ts(s.getChildren(), t, n, !0), t.push(ln)) : ue(s) ? Ts(s.getChildren(), t, n, r) : A(s) ? (t.push(cn, s.getType()), Ts(s.getChildren(), t, n), t.push(ln)) : t.push(xt);
  }
}
function Cr(e, t) {
  const n = [];
  return Ts(e, n, t), n.join("");
}
function vr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Fs(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function tI(e) {
  return e.$?.textType;
}
function Hp(e) {
  return e.type ?? "";
}
function fl(e, t, n) {
  return t === "closing" ? st(e, n) : t === "selfClosing" ? st("") : Ve(e, n);
}
function pu(e, t) {
  const n = e[t];
  if (!(!n || Hp(n) !== "attribute-run"))
    return vr(n) ?? [];
}
function Sr(e, t) {
  const n = [];
  return To(e, n, t), n.join("");
}
function To(e, t, n, r = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Hp(s);
    if (o === "ms") {
      const l = s, u = pu(e, i + 1);
      u && ul(l.marker ?? "", n) ? (t.push(
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
      let u = 0, f = pu(e, i + 1 + u);
      for (; f; )
        To(f, t, n), u++, f = pu(e, i + 1 + u);
      t.push(ln), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        cn,
        "marker",
        Wt(
          fl(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        ln
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(zp(sd(e[i + 1])));
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
      const l = E0(s) ? s.marker : "";
      t.push(cn, "unmatched", Wt(Fs(s) ?? ""), l), t.push(ln);
      continue;
    }
    const a = Fs(s);
    if (a !== void 0 && tI(s) === "attribute") {
      t.push(cn, "attribute", Wt(a), ln);
      continue;
    }
    if (a !== void 0) {
      t.push(Wt(r ? YT(a) : a));
      continue;
    }
    const c = vr(s);
    c ? (t.push(cn, o), To(c, t, n), t.push(ln)) : t.push(xt);
  }
}
function fi(e) {
  let t = 0;
  for (const n of e) {
    const r = vr(n);
    if (r) {
      t += fi(r);
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
    if (N(a))
      po(t, a, Wt(a.getTextContent()));
    else if (Ke(a)) {
      s();
      const c = cl(e, o);
      ul(a.getMarker(), n) && rC(c) ? Vn(c, t, n, r) : ho(t, [a, ...c]), o += c.length;
    } else if (D(a) && Vp(a)) {
      s();
      const c = St(a);
      for (const l of a.getChildren())
        c?.is(l) ? po(t, l, Wt(l.getTextContent())) : Vn([l], t, n, r);
    } else if (D(a) || Ze(a))
      s(), ho(t, [a]);
    else if (Ue(a)) {
      s();
      const c = ll(e, o);
      jp(a) ? ho(t, [a, ...c]) : (po(t, a, Wt(Ps(a))), Vn(c, t, n, r)), o += c.length;
    } else if (U(a))
      s(), iC(a, n) ? ho(t, [a]) : zs(a, t, n, r, { pending: !0 });
    else if (Ji(a))
      s(), po(t, a, zp(oC(a)));
    else if (C(a)) {
      const c = a.getParent(), l = bn(a) || de(a, ke) === "attribute" || $e(c) && !!mi(c)?.is(a), u = s() && !l;
      po(
        t,
        a,
        l ? Wt(Ps(a)) : YR(
          Ps(a),
          r,
          u,
          tk(a)
        )
      );
    } else A(a) ? zs(a, t, n, r, i) : (s(), ho(t, [a]));
  }
}
function Gp(e) {
  const [t] = e;
  return me(t) && t.getMarker() === "";
}
function Jp(e, t, n) {
  if (e.getUnknownAttributes()) return;
  const r = t(e.getMarker())?.type;
  if (r !== void 0 && r !== T.Unknown && r !== T.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Ze(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return zs(e, i, t, n), i;
}
function nI(e, t, n) {
  const r = { text: "", spans: [], sentinels: [] };
  return zs(e, r, t, n), r;
}
function Yp(e, t, n) {
  if (e.length === 0 || !e.every(me)) return;
  const r = { text: "", spans: [], sentinels: [] };
  return Xp(r, e, t, n) ? r : void 0;
}
function $m(e, t, n) {
  const r = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    if (me(i)) {
      const s = Jp(i, t, n);
      if (!s) return;
      const o = r.text.length;
      s.spans.forEach(
        (a) => r.spans.push({ ...a, start: a.start + o, end: a.end + o })
      ), r.sentinels.push(...s.sentinels), r.text += s.text;
    } else $e(i) ? Vn(i.getChildren(), r, t, n) : Vn([i], r, t, n);
  return r;
}
function Xp(e, t, n, r) {
  for (const i of t) {
    const s = Jp(i, n, r);
    if (!s) return !1;
    e.text.length > 0 && (e.text += " ");
    const o = e.text.length;
    s.spans.forEach(
      (a) => e.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), e.sentinels.push(...s.sentinels), e.text += s.text;
  }
  return !0;
}
function dl(e, t) {
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
    } else A(i) && [...i.getChildren()].forEach(r);
  };
  e.forEach(r);
}
function Go(e, t = []) {
  for (const n of e)
    Ue(n) ? t.push(n) : A(n) && Go(n.getChildren(), t);
  return t;
}
function pl(e) {
  let t = 0;
  const n = (r) => {
    if (C(r))
      for (const i of r.getTextContent()) i === xt && t++;
    else A(r) && r.getChildren().forEach(n);
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
function Qp(e, t, n) {
  const r = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    r.text.length > 0 && (r.text += " "), A(i) && zs(i, r, t, n);
  return r;
}
function ri(e, t, n) {
  let r = 0, i = 0;
  for (const s of e.spans) {
    const o = s.end - s.start, a = s.key === t, c = a ? Math.min(s.isSentinel ? 1 : n, o) : o;
    for (let l = 0; l < c; l++)
      On.test(e.text[s.start + l]) ? i++ : (r++, i = 0);
    if (a) return { nonWsBefore: r, wsRun: i };
  }
}
function _f(e, t) {
  t.add(e.getKey()), A(e) && e.getChildren().forEach((n) => _f(n, t));
}
function Zp(e, t, n) {
  return e.spans.find(
    (r) => !r.isSentinel && r.key === t && n <= r.end - r.start
  );
}
function Ao(e, t, n) {
  const r = (f, d) => {
    const p = ri(e, f, d), h = Zp(e, f, d);
    return p && h ? { anchor: p, position: h.start + d } : void 0;
  }, i = (f) => {
    const d = f.end - f.start, p = ri(e, f.key, d);
    return p ? { anchor: p, position: f.start + d } : void 0;
  };
  if (!A(t)) return r(t.getKey(), n);
  const s = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, n).forEach((f) => _f(f, s));
  const o = [...e.spans].reverse().find((f) => s.has(f.key));
  if (o) return i(o);
  const a = /* @__PURE__ */ new Set();
  _f(t, a);
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
  return N(t) && t.getMarkerSyntax() !== "opening";
}
function aC(e) {
  const t = X(e.key);
  if (!N(t)) return;
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
function Rm(e) {
  const t = X(e.key), n = t?.getParent(), r = n?.getChildren();
  if (!t || !n || !r) return;
  const i = r.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = Ue(t) ? ll(r, i) : Ke(t) ? cl(r, i) : [], o = s[s.length - 1] ?? t;
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
        const k = Rm(h);
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
    const p = aC(f);
    if (p) return p;
  }
  if (f?.isSentinel) {
    const p = Rm(f);
    if (p) return p;
  }
  const d = [...i].reverse().find((p) => !p.isSentinel && !Po(p));
  if (d) return { key: d.key, offset: d.end - d.start, type: "text" };
}
function cC(e, t = []) {
  for (const n of e)
    ue(n) && t.push(n), A(n) && cC(n.getChildren(), t);
  return t;
}
function lC(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), A(e) && e.getChildren().forEach((n) => lC(n, t)), t;
}
function rI(e, t, n) {
  const r = ri(e, t.key, n);
  if (r)
    return t.isSentinel ? {
      kind: "preserved",
      anchor: r,
      run: e.spans.filter((i) => i.isSentinel).indexOf(t)
    } : { kind: "byte", anchor: r };
}
function hl(e, t, n = t.sentinels, r) {
  const i = [];
  for (const o of cC(e)) {
    const a = lC(o), c = t.spans.filter((k) => a.has(k.key)), l = c[0], u = c[c.length - 1];
    if (!l || !u) continue;
    const f = rI(t, l, 0), d = ri(t, u.key, u.end - u.start);
    if (!f || !d) continue;
    const p = o.getTypedOnClicks(), h = o.getTypedOnRemoves(), g = o.getTypedOnMouseEnters(), m = o.getTypedOnMouseLeaves(), y = Object.entries(o.getTypedIDs()).flatMap(
      ([k, x]) => x.map((S) => ({
        type: k,
        id: S,
        onClick: p[k]?.[S],
        onRemove: h[k]?.[S],
        onMouseEnter: g[k]?.[S],
        onMouseLeave: m[k]?.[S]
      }))
    );
    y.length > 0 && i.push({ annotations: y, start: f, end: d });
  }
  const s = (o) => {
    const a = o.getKey();
    for (const c of ei(o)) {
      if (c.start === c.end || !Zp(t, a, c.start)) continue;
      const l = ri(t, a, c.start), u = ri(t, a, c.end);
      if (!l || !u) continue;
      const f = r && nc(r, c.type, c.id);
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
    A(o) && o.getChildren().forEach(s);
  };
  return e.forEach(s), { ranges: i, live: i.length > 0 ? Cc(t, n) : void 0 };
}
function iI(e, t, n) {
  const r = uC(e);
  if (!r) return;
  const i = r[r.length - 1].getNextSibling();
  if (!ue(i) || !i.hasID(t, n)) return;
  const s = i.getFirstChild();
  s && r.forEach((o) => s.insertBefore(o));
}
function sI(e, t) {
  const n = uC(e);
  if (!n) return;
  const r = Ki();
  r.addID(
    t.type,
    t.id,
    t.onClick,
    t.onRemove,
    t.onMouseEnter,
    t.onMouseLeave
  ), n[0].insertBefore(r), r.append(...n);
}
function uC(e) {
  const t = X(e), n = t?.getParent()?.getChildren();
  if (!t || !n) return;
  const r = n.findIndex((s) => s.is(t));
  if (r < 0) return;
  const i = Ue(t) ? ll(n, r) : Ke(t) ? cl(n, r) : [];
  return [t, ...i];
}
function fC(e, t, n, r) {
  const i = n.settledOnlyRuns, s = { addressDisplayBytes: r }, o = Kp(i, e);
  if (o) {
    if (!o.within) return;
    const u = pn(o.run.spelling, o.within, s);
    return u ? { point: u, at: o.within.nonWsBefore, literalRun: o.run.sentinelIndex } : void 0;
  }
  const a = r && JT(i, e);
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
function oI(e, t, n) {
  if (e.kind === "byte") return fC(e.anchor, t, n, !0);
  const r = n.sentinelMap[e.run]?.find((a) => a !== void 0), i = r && t.sentinels[r.sentinelIndex]?.[0]?.getKey();
  if (!i) return;
  const s = ga(n.alignment, e.anchor, "toSettled"), o = pn(t, s, { addressDisplayBytes: !0 });
  return o && { point: o, at: s.nonWsBefore, preservedKey: i };
}
function Im(e) {
  if (e.type !== "text") return e;
  const t = X(e.key);
  if (C(t)) return e;
  const n = t?.getParent();
  if (!t || !n) return;
  const r = t.getIndexWithinParent() + (e.offset > 0 ? 1 : 0);
  return { key: n.getKey(), offset: r, type: "element" };
}
function gl({ ranges: e, live: t }, n) {
  if (e.length === 0 || !t) return;
  const r = w()?.clone() ?? null;
  for (const i of e)
    for (const s of i.annotations) {
      const o = n();
      if (!o) continue;
      const a = vc(t, Dp(o)), c = oI(i.start, o, a), l = fC(i.end, o, a, !1);
      if (!c || !l || c.literalRun !== l.literalRun) continue;
      const u = i.start.anchor;
      if (c.at === l.at && u.nonWsBefore !== i.end.nonWsBefore && !c.preservedKey)
        continue;
      const { preservedKey: f } = c, d = Im(c.point), p = Im(l.point);
      if (!d || !p) continue;
      if (d.key === p.key && d.offset === p.offset && d.type === p.type) {
        f && sI(f, s);
        continue;
      }
      const h = Dr();
      h.anchor.set(d.key, d.offset, d.type), h.focus.set(p.key, p.offset, p.type), Ld(
        h,
        s.type,
        s.id,
        s.onClick,
        s.onRemove,
        s.onMouseEnter,
        s.onMouseLeave
      ), f && iI(f, s.type, s.id);
    }
  Un(r);
}
function eh(e, t, n) {
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
function dC(e, t) {
  return e.sentinels.filter((r, i) => r.length > 0 && (t[i]?.length ?? 0) === 0).map((r) => r[0].getKey()).reverse().reduce((r, i) => {
    const s = r.spans.find((o) => o.isSentinel && o.key === i);
    return s ? eh(r, s.start, s.end) : r;
  }, e);
}
function to(e) {
  const t = e.exportJSON();
  return A(e) && Array.isArray(t.children) && e.getChildren().forEach((n) => t.children?.push(to(n))), t;
}
function th(e, t, n, r, i, s, o) {
  const a = hl(
    e,
    dC(t, n),
    n
  );
  if (a.ranges.length === 0) return r;
  const c = Gf({
    nodes: [gt, ...il],
    onError: (u) => {
      throw u;
    }
  });
  Jf(
    c,
    gt,
    (u) => Ki(u.getTypedIDs()),
    (u, f) => Object.entries(u.getTypedIDs()).forEach(
      ([d, p]) => p.forEach((h) => f.addID(d, h))
    )
  );
  let l;
  return c.update(
    () => {
      const u = Ee(), f = i === "noteContent" ? zn() : u;
      f !== u && u.append(f), l = f.getKey(), r.forEach((p) => f.append(Lr(p))), gl(a, () => {
        const p = f.getChildren();
        if (i === "paras") return Qp(p, s, o);
        if (i === "chapter")
          return $e(p[0]) ? Yo(p[0], s, o) : void 0;
        const h = { text: "", spans: [], sentinels: [] };
        return Vn(p, h, s, o), h;
      });
    },
    { discrete: !0 }
  ), c.getEditorState().read(() => {
    const u = l === void 0 ? void 0 : X(l);
    return A(u) ? u.getChildren().map(to) : r;
  });
}
function Mf(e) {
  const t = X(e.key);
  if (!t?.isAttached()) return !1;
  if (e.type === "text")
    return C(t) ? (t.select(e.offset, e.offset), !0) : !1;
  if (!A(t)) return !1;
  const n = Dr();
  return n.anchor.set(e.key, e.offset, "element"), n.focus.set(e.key, e.offset, "element"), Un(n), !0;
}
function aI(e, t, n) {
  const r = pn(e, t);
  if (r?.type === "text") {
    if (Mf(r)) return;
  } else if (r) {
    const i = X(r.key), s = A(i) ? i.getChildAtIndex(r.offset - 1) : void 0;
    if (s) {
      s.selectNext(0, 0);
      return;
    }
  }
  n.find(A)?.selectStart();
}
function ml(e, t) {
  const n = t.getNode(), r = Up(e, n), i = r && Bp(r.member, n);
  return {
    // An element point (a click past a paragraph's trailing note) has no span of its own, so it
    // is spelled from the child bytes beside it, the same way a settled position spells one.
    anchor: t.type === "element" ? Ao(e, n, t.offset)?.anchor : ri(e, t.key, t.offset),
    inRun: r && i ? {
      sentinelIndex: r.sentinelIndex,
      memberIndex: r.memberIndex,
      path: i,
      offset: t.offset,
      type: t.type
    } : void 0,
    live: Cc(e, e.sentinels)
  };
}
function pC(e, t, n) {
  const r = t && vc(t.live, Dp(e));
  if (t?.inRun && r) {
    const { sentinelIndex: o, memberIndex: a, path: c, offset: l, type: u } = t.inRun, f = r.sentinelMap[o]?.[a];
    let d = f && e.sentinels[f.sentinelIndex]?.[f.memberIndex];
    for (const p of c)
      d = A(d) ? d.getChildAtIndex(p) ?? void 0 : void 0;
    if (d && Mf({ key: d.getKey(), offset: l, type: u })) return;
  }
  if (!t?.anchor || !r) {
    n.find(A)?.selectStart();
    return;
  }
  const { anchor: i } = t, s = Kp(r.settledOnlyRuns, i);
  if (s) {
    const o = s.within ?? {
      nonWsBefore: eo(s.run.inner, s.count, "live"),
      wsRun: i.wsRun
    }, a = pn(s.run.spelling, o);
    if (a && Mf(a)) return;
  }
  aI(
    e,
    ga(r.alignment, i, "toSettled"),
    n
  );
}
function hC(e, t, n, r, i) {
  n && pC(Qp(e, r, i), t, e);
}
function gC(e, t, n, r, i) {
  if (!n) return;
  if (!t?.anchor && !t?.inRun) {
    cI(e, r);
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  Vn(e, s, r, i), pC(s, t, e);
}
function cI(e, t) {
  const n = e.find(A);
  if (n && Wp(n, t)) {
    const r = n.getParent();
    if (r) {
      const i = n.getIndexWithinParent();
      r.select(i, i);
      return;
    }
  }
  n?.selectStart();
}
function mC(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: n, getMarker: r, logger: i } = t, s = Yp(e, r, n);
  if (!s)
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = w();
  if (E(c)) {
    for (let m = c.anchor.getNode(); m; m = m.getParent())
      if (e.some((y) => y.is(m))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = ml(s, c.anchor));
  }
  const l = hl(e, s, void 0, Ut()), u = ss(s, {
    getMarker: r,
    opensNamelessParagraph: Gp(e)
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
  if (pl(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = Go(e).map((m) => ({
    number: m.getNumber(),
    sid: m.getSid()
  })), h = e[0];
  d.forEach((m) => h.insertBefore(m)), dl(d, s.sentinels), e.forEach((m) => m.remove());
  const g = Go(d);
  for (let m = 0; m < p.length && m < g.length; m++)
    g[m].getNumber() === p[m].number && g[m].setSid(p[m].sid);
  return gl(l, () => Qp(d, r, n)), hC(d, o, a, r, n), !0;
}
function lI(e) {
  if (e.getIsCollapsed() !== !1 || !tt.isValidMarker(e.getMarker())) return;
  const t = e.getChildren();
  let n = 0;
  for (; n < t.length; ) {
    const o = t[n];
    if (!N(o) || o.getMarkerSyntax() !== "opening") break;
    n++;
  }
  const r = t[n];
  if (!r || !(Lt(r) || C(r) && r.getTextContent() === vt(e.getCaller()))) return;
  n++;
  let s = t.length;
  for (; s > n; ) {
    const o = t[s - 1];
    if (!N(o) || o.getMarkerSyntax() !== "closing") break;
    s--;
  }
  return t.slice(n, s);
}
function Jo(e, t, n) {
  const r = lI(e);
  if (!r) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Vn(r, i, t, n), { out: i, contentNodes: r };
}
function yC(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const r = t.content[0];
  if (typeof r != "string" || r.includes(xt)) return;
  const i = r.trim();
  if (i !== "")
    return e.shift(), i;
}
function uI(e, t) {
  const { viewOptions: n, getMarker: r, logger: i } = t, s = Jo(e, r, n);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = w();
  if (E(u)) {
    for (let $ = u.anchor.getNode(); $; $ = $.getParent())
      if (e.is($)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = ml(o, u.anchor));
  }
  const f = hl(a, o, void 0, Ut()), d = ss(o, {
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
  const h = p.content ?? [], g = yC(h), m = QT(e, h);
  if (m)
    return fI(
      e,
      m,
      g,
      o.sentinels,
      t,
      l
    );
  const y = XT(e, h, g, n);
  if (y.failure !== void 0)
    return y.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      y.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (fi(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const k = e.getCategory() !== g;
  if (k && e.setCategory(g), Sr(y.children, r) === Cr(a, r))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), k;
  const x = y.children.map(($) => Lr($));
  if (pl(x) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), k;
  const S = a[0];
  if (S)
    x.forEach(($) => S.insertBefore($));
  else {
    const $ = e.getChildren().find((ne) => N(ne) && ne.getMarkerSyntax() === "closing");
    x.forEach((ne) => $ ? $.insertBefore(ne) : e.append(ne));
  }
  dl(x, o.sentinels);
  const _ = new Set(o.sentinels.flat().map(($) => $.getKey()));
  a.forEach(($) => {
    _.has($.getKey()) || (ue($) && ($.getWritable().__suppressOnRemoveCallbacks = !0), $.remove());
  });
  const j = () => Jo(e, r, n);
  return gl(f, () => j()?.out), gC(
    j()?.contentNodes ?? x,
    c,
    l,
    r,
    n
  ), !0;
}
function fI(e, { before: t, after: n }, r, i, s, o) {
  const { viewOptions: a, logger: c } = s, l = ZT(
    e,
    t,
    n,
    r,
    a
  );
  if (!l || fi(l) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  const u = l.map((h) => Lr(h)), [f] = u;
  if (!D(f) || pl(u) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  let d = e;
  for (const h of u)
    d.insertAfter(h), d = h;
  dl(u, i);
  const p = e.getChildren();
  return e.append(...f.getChildren()), p.forEach((h) => h.remove()), e.setCaller(f.getCaller()).setCategory(f.getCategory()).setUnknownAttributes(f.getUnknownAttributes()).setIsCollapsed(f.getIsCollapsed()), f.remove(), o && (e.getIsCollapsed() !== !0 && a?.isNoteShellEditable === !1 ? Da(e, a) : sx(e, { isContentChange: !0 })), !0;
}
function bC(e) {
  const t = e.getChildren();
  return Sd(t[0]) ? t.slice(1) : t;
}
function nh(e, t, n) {
  const r = bC(e), i = { text: "", spans: [], sentinels: [] };
  return Vn(r, i, t, n), { out: i, contentNodes: r };
}
const dI = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${Bn}(?=[\\s\\u200B\\\\|]|$)`
);
function kC(e, t) {
  const n = ss(e, { getMarker: t }), [r, ...i] = n;
  return typeof r == "object" && r.type === "para" && r.marker === Bn && !dI.test(e.text) ? { content: n, lineContent: r.content ?? [], followingBlocks: i } : { content: n, lineContent: [], followingBlocks: n };
}
function xC(e, t, n = []) {
  const { viewOptions: r, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = nh(e, i, r);
  if (!Xp(o, n, i, r))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: paragraph excluded by guard rails"), !1;
  const c = [e, ...n];
  let l, u = !1;
  const f = w();
  if (E(f)) {
    for (let $ = f.anchor.getNode(); $; $ = $.getParent())
      if (c.some((ne) => ne.is($))) {
        u = !0;
        break;
      }
    f.isCollapsed() && (l = ml(o, f.anchor));
  }
  const d = kC(o, i);
  if (Hr(d.content) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const p = eC(
    e,
    d.lineContent,
    d.followingBlocks,
    r
  );
  if (p.failure !== void 0)
    return p.failure === "empty" ? s?.debug("[MarkerEdit] Book Tier 2 skipped: no content nodes after unwrap") : s?.warn("[MarkerEdit] Book Tier 2 aborted: unexpected serialized shape"), !1;
  const h = [...p.children, ...p.followingBlocks];
  if (fi(h) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (p.followingBlocks.length === n.length && Sr(p.followingBlocks, i) === Cr(n, i) && Sr(p.children, i) === Cr(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const g = p.children.map(($) => Lr($)), m = p.followingBlocks.map(($) => Lr($)), y = [...g, ...m];
  if (pl(y) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const k = Go([...a, ...n]).map(($) => ({
    number: $.getNumber(),
    sid: $.getSid()
  })), x = a[0];
  x ? g.forEach(($) => x.insertBefore($)) : g.forEach(($) => e.append($)), m.reduce(($, ne) => $.insertAfter(ne), e), dl(y, o.sentinels);
  const S = new Set(o.sentinels.flat().map(($) => $.getKey()));
  a.forEach(($) => {
    S.has($.getKey()) || $.remove();
  }), n.forEach(($) => $.remove());
  const _ = [...bC(e), ...m], j = Go(_);
  for (let $ = 0; $ < k.length && $ < j.length; $++)
    j[$].getNumber() === k[$].number && j[$].setSid(k[$].sid);
  return gC(
    _,
    l,
    u,
    i,
    r
  ), !0;
}
const TC = /* @__PURE__ */ new Set(["ca", "cp"]), rh = "cp";
function CC(e) {
  if (!_t(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (zs(e, t, xr, void 0), t.sentinels.length > 0) return !1;
  const n = t.text;
  if (n.trim() === "") return !1;
  const r = Dc(Fp(n), {
    getMarker: xr
  }), [i] = r, s = r.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(n) ? i.content ?? [] : r;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === rh)
  );
}
function os(e) {
  const t = [];
  for (let n = e.getNextSibling(); n; n = n.getNextSibling()) {
    if (U(n) && TC.has(n.getMarker()) || CC(n)) {
      t.push(n);
      continue;
    }
    me(n) && n.getMarker() === rh && t.push(n);
    break;
  }
  return t;
}
function pI(e) {
  const t = (r) => U(r) && TC.has(r.getMarker()) || CC(r);
  if (t(e) || me(e) && e.getMarker() === rh)
    for (let r = e.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if ($e(r)) return r;
      if (!t(r)) return;
    }
}
function Yo(e, t, n) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const r = os(e);
  if (r.some((s) => me(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Vn(e.getChildren(), i, t, n), Vn(r, i, t, n), !(i.sentinels.length > 0))
    return i;
}
function hI(e, t) {
  const { viewOptions: n, getMarker: r, logger: i } = t, s = [e, ...os(e)], o = Yo(e, r, n);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = w();
  if (E(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((y) => y.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = ml(o, l.anchor));
  }
  const u = hl(s, o, void 0, Ut()), f = Dc(Fp(o.text), {
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
  return h.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), gl(
    u,
    () => Yo(g, r, n)
  ), hC(h, a, c, r, n), !0;
}
function Xo(e) {
  let t, n;
  for (let r = e; r; r = r.getParent()) {
    if (Ze(r)) return;
    !t && (D(r) && !Vp(r) || me(r) || $e(r) || Ie(r)) && (t = r), Mn(r.getParent()) && (n = r);
  }
  return t && !t.is(n) ? t : (n ? pI(n) : void 0) ?? t;
}
function Kn(e, t) {
  const n = Xo(e);
  return n ? D(n) ? uI(n, t) : $e(n) ? hI(n, t) : Ie(n) ? xC(n, t) : mC([n], t) : !1;
}
const gI = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Lm(e, t) {
  const n = Object.entries(e).filter(
    (r) => typeof r[1] == "string" && !gI.has(r[0])
  );
  if (n.length !== 0) {
    t.push("|");
    for (const [r, i] of n) t.push(`${r}="${i}"`);
  }
}
function ja(e, t) {
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
          t.push(`\\${r}`), Lm(n, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${r}`);
          break;
        case "char":
          t.push(`\\${r} `), ja(n.content, t), Lm(n, t), i !== "false" && t.push(`\\${r}*`);
          break;
        case "note": {
          const s = n.caller, o = n.category;
          t.push(`\\${r} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), ja(n.content, t), i !== "false" && t.push(`\\${r}*`);
          break;
        }
        default:
          t.push(`\\${r} `), ja(n.content, t);
      }
    }
}
function qm(e, t, n) {
  const r = Xo(e);
  if (!mt(r)) return !1;
  const i = w();
  if (!E(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (r.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Ie(r) ? nh(r, t, n).out : Jp(r, t, n);
  if (!o) return !1;
  const a = ss(o, {
    getMarker: t,
    opensNamelessParagraph: Gp([r])
  });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    On.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  ja(a, l);
  for (const u of l.join("").replaceAll(q, "~")) {
    if (On.test(u)) continue;
    const f = c.get(u);
    f !== void 0 && f > 0 && c.set(u, f - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function ih(e, t) {
  return SC(e, t, T.Paragraph);
}
function vC(e, t) {
  return SC(e, t, T.Character);
}
function SC(e, t, n) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const i = t(r)?.type;
  return i !== void 0 && i !== T.Unknown ? i === n : !(tt.isValidMarker(r) || rd(r));
}
function mI(e) {
  return [$t(e), Fi()];
}
function sh(e) {
  sr(e, 2);
}
function yI(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed()) return !1;
  const { anchor: n } = t;
  if (n.type === "element") return n.key === e.getKey() && n.offset === 0;
  const r = e.getFirstChild();
  return r !== null && n.key === r.getKey() && n.offset === 0;
}
function yl(e) {
  const t = yI(e);
  e.splice(0, 0, mI(e.getMarker())), t && sh(e);
}
function Sc(e, t) {
  e.setMarker(t), yl(e), sh(e);
}
function bI(e, t) {
  const n = e.getFirstChild();
  if (!n) return;
  const r = n.getNextSibling();
  if (!bn(r)) {
    if (C(r) && !N(r) && /^[ \u00A0]$/.test(r.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      r.setTextContent(q), Ht(r, ke, Mr), r.setMode("token");
      return;
    }
    if (rk(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    n.insertAfter(Fi());
  }
}
function Dm(e, t, n) {
  const r = e.getNode();
  if (r.is(t))
    return n === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? r.getTextContentSize() : A(r) ? r.getChildrenSize() : 0;
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
    if (me(t)) return t;
}
function kI(e) {
  const t = e.isBackward(), n = t ? e.focus : e.anchor, r = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = wo(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = wo(n.getNode())?.is(s) ?? !1, a = wo(r.getNode())?.is(s) ?? !1;
    return !(o && !Dm(n, s, "start") || a && !Dm(r, s, "end"));
  });
}
function Ef(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const n = w();
  if (!(!E(n) || n.isCollapsed()))
    for (const r of kI(n)) t.add(r.getKey());
}
function xI(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const n = w();
  if (!E(n) || !n.isCollapsed()) return;
  const r = wo(n.focus.getNode());
  r && t.add(r.getKey());
}
function TI(e) {
  const t = w();
  !E(t) || t.isCollapsed() || t.getNodes().some((n) => N(n)) && (Ef(e), t.removeText());
}
const CI = new RegExp(
  String.raw`^\\\+?([${Gn}]+)(?:[ \u00A0]|$)`
);
function vI(e, t) {
  const n = CI.exec(e.getTextContent());
  return !!n && ih(n[1], t);
}
function SI(e, t) {
  if (!is(t.viewOptions)) return;
  if (mn(e.getFirstChild())) {
    bI(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (vI(e, t.getMarker)) return;
    yl(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const r = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!r && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => me(o) && !o.is(e))) {
      Sc(e, Bn), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const n = e.getPreviousSibling();
  if (mt(n)) {
    const r = e.getChildren().filter((a) => !bn(a)), i = w();
    let s = !1;
    if (E(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : wo(a)?.is(e) && (s = !r.some(
        (c) => a.is(c) || A(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = n.getChildrenSize();
    n.append(...r), e.remove(), s && sr(n, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  Sc(e, Bn);
}
function _I(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const n = Xn(t, Ws(e.getMarker()));
  return n === "" ? void 0 : n;
}
function _C(e) {
  const t = e.getChildren().filter((s) => !N(s) && de(s, ke) !== "attribute"), n = t[0];
  n && C(n) && n.getTextContent().startsWith(q) && n.setTextContent(n.getTextContent().slice(1));
  const r = _I(e);
  r && t.push(Re(r));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function MI(e) {
  const t = e.getNode();
  let n;
  if (e.type === "element" && A(t) ? n = t.getChildAtIndex(e.offset) : N(t) && e.offset === 0 ? n = t : C(t) && e.offset === t.getTextContentSize() && (n = t.getNextSibling()), U(n) && (n = n.getFirstChild()), !N(n) || n.getMarkerSyntax() !== "opening") return;
  const r = n.getParent();
  if (!(!U(r) || !n.is(r.getFirstChild())))
    return n.getTextContentSize() === 1 ? n : void 0;
}
function EI() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = MI(e.anchor), n = t?.getParent();
  if (!t || !U(n)) return !1;
  const r = t.getNextSibling();
  return t.remove(), jr(r) && r.getTextContent().startsWith(q) && r.setTextContent(` ${r.getTextContent().slice(q.length)}`), _C(n), C(r) && r.isAttached() && r.select(0, 0), !0;
}
function AI(e, t) {
  const n = e.getChildren(), r = n.some((s) => N(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (r) return;
    const s = n[0], o = n[n.length - 1];
    if (C(s) && s.isUnmergeable() && s.getMode() === "token" || N(o) && o.getMarkerSyntax() === "closing" && o.getMode() === "token") {
      const u = $t(e.getMarker());
      u.setMode("token");
      const f = e.getFirstChild();
      f ? f.insertBefore(u) : e.append(u);
      return;
    }
    const a = e.getCaller(), c = n.some(
      (u) => C(u) && !N(u) && u.getTextContent() === vt(a)
    ), l = Xi(e).some(({ node: u }) => N(u));
    if (!c && !l) return;
    n.forEach((u) => {
      N(u) || (C(u) && u.getTextContent() === vt(a) && u.setTextContent(a ? ` ${a} ` : " "), e.insertBefore(u));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = n.some((s) => N(s) && s.getMarkerSyntax() === "closing");
  r !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function PI(e, t) {
  if (e.isEmpty()) return;
  const n = e.getFirstChild();
  if (!(N(n) && n.getMarkerSyntax() === "opening")) {
    _C(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => N(o) && o.getMarkerSyntax() === "closing");
  i && !s && Kn(e, t);
}
function MC(e, t, n) {
  if (!N(e.getFirstChild()) && n?.markerMode === "editable" && is(n)) {
    Sc(e, t);
    return;
  }
  kx(e, t);
}
function EC() {
  const e = w();
  if (!E(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = AC(e);
    return t !== "removed" ? t : (Af(), "handled");
  }
  return Af() ? "handled" : "declined";
}
function wI(e, t) {
  if (!t) return e;
  const n = D$.exec(e);
  if (!n) return e;
  const r = n[1];
  return r === "c" || r === "v" || t(r)?.type !== T.Paragraph ? e : e.slice(n[0].length);
}
function Km(e, t) {
  const n = w();
  if (!E(n)) return "declined";
  if (n.isCollapsed()) {
    if (!PC())
      return "declined";
  } else {
    const s = AC(n);
    if (s !== "removed") return s;
  }
  const [r, ...i] = e.map(
    (s) => wI(s, t)
  );
  Um(r ?? "");
  for (const s of i)
    Af(), Um(s);
  return "handled";
}
function NI(e) {
  const t = e.getRootElement(), n = t?.ownerDocument.getSelection(), r = n?.anchorNode;
  if (!t || !n || !r || !t.contains(r)) return !1;
  const i = Yi(r);
  if (!i) return !1;
  const s = An(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !C(i) || N(i)) return !1;
  const o = Math.min(n.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function AC(e) {
  const t = An(e.anchor.getNode()), n = An(e.focus.getNode()), r = t?.getIsCollapsed() === !1, i = n?.getIsCollapsed() === !1;
  return !r && !i ? "declined" : (e.removeText(), OI() ? "removed" : "needs-plain-split");
}
function Um(e) {
  if (e === "") return;
  const t = w();
  E(t) && t.insertText(e);
}
function OI() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = An(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((n) => N(n) && n.getMarkerSyntax() === "opening");
}
function PC() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), n = An(t);
  if (!(!n || n.getIsCollapsed() !== !1 || n.is(t)))
    return n;
}
function Af() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), n = PC();
  if (!n) return !1;
  let r = t;
  for (; !n.is(r.getParent()); ) {
    const l = r.getParent();
    if (!l) return !1;
    r = l;
  }
  const i = Kr("fp", { closed: "false" });
  i.append($t("fp"));
  const s = C(t) && !N(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(r);
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
    u && (k0(u), i.append(u));
  }
  return i.getChildren().every(N) && i.append(Re(Pt)), wC(i), !0;
}
function wC(e) {
  const t = e.getChildren().find((n) => !N(n));
  if (C(t)) {
    const n = fd(t);
    t.select(n, n);
    return;
  }
  if (A(t)) {
    wC(t);
    return;
  }
  e.selectEnd();
}
function $I(e) {
  const t = [];
  let n = e;
  for (; n; )
    U(n) && t.push(n.getMarker()), n = n.getParent();
  return t;
}
function RI(e) {
  const t = e.getTopLevelElement(), n = [];
  for (const r of Ee().getChildren()) {
    if (t && r.is(t)) {
      Ie(r) && n.push(r.getMarker());
      break;
    }
    (Ie(r) || ot(r) || me(r)) && n.push(r.getMarker());
  }
  return n;
}
function II(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getFirstChild();
    if (!n) break;
    t = n;
  }
  return t;
}
function LI(e, t, n) {
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
  return i ? t.is(II(i)) && n === 0 : !1;
}
function qI(e, t, n) {
  const r = e.getFirstChild();
  if (!r || !mn(r)) return !1;
  if (t.is(r)) return !0;
  const i = r.getNextSibling();
  return i !== null && bn(i) && t.is(i) && n === 0;
}
function DI() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: n, y: r, width: i, height: s } = t.getBoundingClientRect();
  return { x: n, y: r, width: i, height: s };
}
function KI() {
  const e = w();
  if (!E(e)) return;
  const t = e.focus.getNode(), n = e.focus.offset, r = !e.isCollapsed(), i = Qe(t, me), s = i ? void 0 : Qe(t, Ie), o = !r && !s && (!i || qI(i, t, n)) ? "paragraph" : "character", a = An(t);
  return {
    source: o,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: i?.getMarker() ?? s?.getMarker(),
    previousParaMarkers: RI(t),
    openCharMarkers: $I(t),
    noteMarker: a?.getMarker(),
    hasTextSelection: r,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Kd(t, n),
    anchorRect: DI()
  };
}
function UI() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!C(t) || N(t)) return;
  const n = e.anchor.offset, r = t.getTextContent().slice(0, n), i = K$.exec(r);
  i && t.spliceText(n - i[0].length, i[0].length, "", !0);
}
function BI(e, t, n) {
  MC(e, t, n), sh(e);
}
function FI(e, t, n) {
  const r = w();
  if (!E(r)) return;
  const i = r.focus.getNode(), s = Qe(i, me);
  if (t === "backslash" && s && LI(s, i, r.focus.offset)) {
    BI(s, e, n);
    return;
  }
  Pf(e, n);
}
function NC(e, t) {
  const n = e.getNode(), r = uT(A(n) ? n : n.getParent());
  return t.is(r);
}
function zI(e, t) {
  const n = e.getNode();
  return !t.is(n) && !t.isParentOf(n) ? !1 : !NC(e, t);
}
function _c(e, t, n) {
  const r = n.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= r && e.set(t.getKey(), r + 1, "element");
}
function jI(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!N(t) || t.getMarkerSyntax() !== "opening") return e;
  const n = t.getParent();
  if (!U(n)) return e;
  const r = n.getParent();
  return r ? Qt(r.getKey(), n.getIndexWithinParent(), "element") : e;
}
function VI(e, t, n) {
  const r = w();
  if (!E(r)) return !1;
  const i = r.isBackward() ? r.focus : r.anchor;
  if (!NC(i, e)) return !1;
  const s = r.isBackward() ? r.anchor : r.focus;
  if (!r.isCollapsed() && zI(s, e)) return !1;
  const o = Sd(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (_c(r.anchor, e, o), _c(r.focus, e, o)), r.isCollapsed() || r.removeText();
  const a = w();
  if (!E(a) || !a.isCollapsed()) return !1;
  const c = pT(a);
  if (!c) return !1;
  const { parent: l, moving: u } = dT(
    jI(c.anchor)
  );
  if (!e.is(l)) return !1;
  const f = u.filter((h) => !h.is(o)), d = $s(t);
  e.insertAfter(d), d.append(...f);
  const [p] = f;
  return U(p) ? Gc(p) : d.select(0, 0), is(n) && yl(d), !0;
}
function WI(e, t) {
  const n = w();
  return !E(n) || !n.isCollapsed() ? !1 : (n.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function OC(e) {
  const t = w();
  return E(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function HI(e) {
  const t = Qe(e.anchor.getNode(), Ie);
  if (!t) return;
  const n = t.getFirstChild();
  !n || !Sd(n) || (_c(e.anchor, t, n), _c(e.focus, t, n));
}
function GI(e, t, n, r) {
  const i = w();
  if (E(i) ? HI(i) : r.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && UI(), e.kind === "closeTag") {
    OC(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && EC() !== "declined") return;
  if (e.kind === "paragraph" && It.isValidMarker(e.marker, r.nodeOptions?.extraValidMarkers)) {
    FI(e.marker, t.trigger, r.viewOptions);
    return;
  }
  if (tt.isValidMarker(e.marker, r.nodeOptions?.extraValidMarkers))
    return mT(
      e.marker,
      n,
      r.expandedNoteKeyRef,
      r.viewOptions,
      r.nodeOptions,
      r.logger
    );
  ff(
    e.marker,
    r.expandedNoteKeyRef,
    r.viewOptions,
    r.nodeOptions,
    r.logger,
    void 0,
    r.styleInfo
  ).action({ editor: Ut(), reference: n });
}
function Pf(e, t) {
  const n = w();
  if (!E(n)) return !1;
  Ud(n);
  const r = (n.isBackward() ? n.focus : n.anchor).getNode();
  if (!Qe(r, me)) {
    const o = Qe(r, Ie);
    if (o) return VI(o, e, t);
  }
  const i = is(t);
  if (hT()) {
    const o = w();
    if (!E(o)) return !1;
    const a = Qe(o.anchor.getNode(), me);
    return a ? (a.setMarker(e), i && yl(a), !0) : !1;
  }
  const s = n.insertParagraph();
  return me(s) ? (i ? Sc(s, e) : s.setMarker(e), !0) : !1;
}
function JI() {
  const [e] = Ce();
  return H(() => e.registerCommand(wy, () => !0, Xt), [e]), null;
}
function YI(e, t) {
  if (!e.startsWith("\\")) return !0;
  const n = I$.exec(e)?.[1];
  return n === void 0 ? !1 : !ih(n, t);
}
function $C(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !YI(e.getTextContent(), t)) return;
  const n = e.getParent();
  if (!me(n)) return;
  const r = t(n.getMarker())?.type;
  if (r !== void 0 && r !== T.Unknown || n.getFirstChild()?.is(e) !== !0) return;
  const i = n.getPreviousSibling();
  if (!(!me(i) && !Ie(i)))
    return [i, n];
}
function RC(e, t) {
  const n = $C(e, t.getMarker);
  if (!n) return !1;
  const [r, i] = n;
  return Ie(r) ? xC(r, t, [i]) : mC([r, i], t);
}
function XI(e, t) {
  const n = w();
  E(n) && [n.anchor, n.focus].forEach((r) => {
    r.key === e.getKey() && r.offset > t && r.set(e.getKey(), t, "text");
  });
}
function IC(e) {
  const t = L$.exec(e);
  if (!t) return;
  const n = 1 + t[1].length;
  return { start: n, end: n + t[2].length };
}
function QI(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const n = IC(e.getTextContent());
  if (!n) return;
  const { offset: r } = t.anchor;
  if (!(r < n.start || r > n.end))
    return r - n.start;
}
function ZI(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const n = e.getNextSibling();
  if (D(e.getParent()) && C(n)) {
    const r = n.getNextSibling();
    if (U(r)) {
      Gc(r);
      return;
    }
  }
  C(n) ? n.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Bm(e, t) {
  if (t !== void 0) {
    const n = e.getLatest(), r = IC(n.getTextContent());
    if (r) {
      const i = Math.min(r.start + t, r.end);
      n.select(i, i);
      return;
    }
  }
  ZI(e);
}
function wf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function LC(e, t, n) {
  if (t.startsWith("+") !== e.getNested())
    return Kn(e, n);
  const r = QI(e), i = e.getParent();
  if (me(i)) {
    if (!ih(t, n.getMarker))
      return RC(e, n) ? (n.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Kn(e, n);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), wf(s, t) && Bm(e, r), n.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (U(i) || D(i)) {
    const s = t.replace(/^\+/, "");
    if (!(U(i) ? vC(t, n.getMarker) : tt.isValidMarker(s)) || U(i) && md(i))
      return Kn(e, n);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Kn(e, n);
    i.setMarker(s);
    const c = i.getChildren().filter(N).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (XI(c, st(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), wf(a, s) && Bm(e, r), n.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Kn(e, n);
}
function qC(e, t) {
  if (!N(e) || e.getMarkerSyntax() !== "opening") return;
  const n = e.getParent();
  if (!U(n) || !n.getFirstChild()?.is(e)) return;
  const r = Zs.exec(e.getTextContent());
  if (!r) return;
  const i = r[1];
  if (i.startsWith("+") !== e.getNested() || !vC(i, t)) return;
  const s = e.getMarker();
  if (n.getMarker() !== s) return;
  const o = i.replace(/^\+/, "");
  if (wf(s, o) && !md(n))
    return { char: n, glyph: e, closer: e2(n, s), newMarker: o };
}
function e2(e, t) {
  return e.getChildren().filter(N).filter((n) => n.getMarkerSyntax() === "closing" && n.getMarker() === t).at(-1);
}
function t2(e) {
  const t = w();
  if (!E(t)) return !1;
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
function n2(e) {
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
    if (me(i)) return !1;
    s = i;
  }
  const o = n ? s.getNextSibling() : s.getPreviousSibling();
  if (!C(o)) return !1;
  const a = n ? t.slice(0, t.length - r.length) : t.slice(r.length);
  if (e.setTextContent(a), !lr(e))
    return e.setTextContent(t), !1;
  const c = w(), l = E(c) && c.isCollapsed() && c.anchor.key === e.getKey() ? c.anchor.offset : void 0;
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
function r2(e, t) {
  const n = e.getTextContent();
  if (lr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Be(e.getParent()) && od(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !t2(e)) {
    O_(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (n2(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    if (pM(e) || p2(e)) {
      t.pendingKeys.delete(e.getKey());
      return;
    }
    const r = PT.exec(n);
    if (r) {
      t.pendingKeys.delete(e.getKey()), LC(e, r[1], t);
      return;
    }
    if (R$.test(n)) {
      t.pendingKeys.delete(e.getKey()), Kn(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const r = e.getParent(), i = st(e.getMarker(), e.getNested());
    if ((U(r) || D(r)) && !Hf(r.getParent()) && e.getMarker() === r.getMarker() && r.getLastChild()?.is(e) && n.startsWith(i) && n.length > i.length) {
      const s = w(), o = E(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = Re(n.slice(i.length));
      e.setTextContent(i), r.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  if (i2(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function i2(e) {
  if (e.getMarkerSyntax() !== "selfClosing" || !Ke(Tr(e)?.owner)) return !1;
  const t = st(""), n = e.getTextContent();
  if (!n.startsWith(t) || n.length === t.length) return !1;
  const r = e.getParent(), i = Be(r) ? r : e;
  if (Be(r) && !r.getLastChild()?.is(e)) return !1;
  const s = i.getParent();
  if (!s || Hf(s)) return !1;
  const o = w(), a = E(o) && o.isCollapsed() && o.anchor.key === e.getKey() && o.anchor.offset > t.length ? o.anchor.offset - t.length : void 0, c = Re(n.slice(t.length));
  return e.setTextContent(t), i.insertAfter(c), a !== void 0 && c.select(a, a), !0;
}
function s2(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (ck(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function DC(e) {
  if (!Yf(e)?.length)
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
const go = DC("v"), o2 = DC("c"), Fm = /^[ \u00A0]*$/;
function zm(e, t, n) {
  const r = e.getNextSibling();
  if (C(r) && r.getType() === it.getType() && r.getMode() === "normal" && de(r, ke) !== "attribute")
    return r.setTextContent(t + r.getTextContent()), n !== void 0 && r.select(n, n), r;
  const i = Re(t);
  return e.insertAfter(i), n !== void 0 && i.select(n, n), i;
}
function a2(e, t) {
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
    if (l && Fm.test(l[2] ?? "")) {
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
      const [, l, u, f] = c, d = w(), p = E(d) && d.isCollapsed() && d.anchor.key === e.getKey() ? d.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Fn("v", u));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, f.length) : void 0;
      zm(e, f, h);
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
  if (t.pendingKeys.delete(e.getKey()), Fm.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Fn("v", o)), a && zm(e, a, a.length);
}
const c2 = /^[ \u00A0]+([^ \u00A0\\]*)[ \u00A0]([\s\S]*)$/;
function l2(e, t) {
  if (!OT(e)) return !1;
  const n = e.getParent();
  if (!D(n)) return !1;
  const r = n.getCaller(), i = e.getTextContent();
  if (i === vt(r))
    return t.pendingKeys.delete(e.getKey()), !0;
  if (!e.isUnmergeable()) return !1;
  t.pendingKeys.delete(e.getKey());
  const s = c2.exec(i);
  return s ? (f2(e, n, s[1], s[2]), !0) : d2(e, r) ? !0 : Kc(i, r).missing && /^[ \u00A0]/.test(i) && !i.includes("\\") && KC(e) ? (t.pendingKeys.add(e.getKey()), !0) : (UC(e, n), !0);
}
function u2(e) {
  if (!kl(e)) return !1;
  const t = e.getTextContent(), n = /^[ \u00A0]+/.exec(t)?.[0];
  if (!n) return !1;
  const r = e.getPreviousSibling(), i = C(r) && r.getMode() === "token" && !!bl(r);
  if (!C(r) || !(Ue(r) || i)) return !1;
  const s = w();
  if (!E(s) || !s.isCollapsed() || s.anchor.key !== e.getKey() || s.anchor.offset > n.length)
    return !1;
  const o = s.anchor.offset, a = t.slice(n.length), c = r.getTextContentSize();
  return r.getMode() === "token" ? r.select(c, c) : (r.setTextContent(r.getTextContent() + n), r.select(c + o, c + o)), a ? e.setTextContent(a) : e.remove(), !0;
}
function f2(e, t, n, r) {
  const i = e.getTextContent(), s = i.length - r.length, o = /^[ \u00A0]*/.exec(i)?.[0].length ?? 0, a = w(), c = E(a) && a.isCollapsed() && a.anchor.key === e.getKey() ? a.anchor.offset : void 0;
  t.getCaller() !== n && t.setCaller(n), e.setTextContent(vt(n));
  const l = r ? FC(t, e, r.replaceAll(q, " ")) : void 0;
  if (c === void 0) return;
  if (c >= s) {
    const f = c - s;
    l ? l.select(f, f) : e.select(e.getTextContentSize(), e.getTextContentSize());
    return;
  }
  const u = 1 + Math.min(Math.max(c - o, 0), n.length);
  e.select(u, u);
}
function d2(e, t) {
  const n = w();
  if (!E(n) || !n.isCollapsed()) return !1;
  const { anchor: r } = n;
  if (r.key !== e.getKey() || r.type !== "text") return !1;
  const i = e.getTextContent(), s = i.slice(0, r.offset);
  if (i.slice(r.offset) !== vt(t) || !wT.test(s) || s.includes("\\")) return !1;
  const o = e.getPreviousSibling();
  if (!N(o) || o.getMarkerSyntax() !== "opening" || !Zs.test(o.getTextContent())) return !1;
  const a = o.getTextContent() + s;
  return e.setTextContent(vt(t)), o.setTextContent(a), o.select(a.length, a.length), !0;
}
function p2(e) {
  const t = e.getParent();
  if (!D(t) || t.getIsCollapsed() !== !1) return !1;
  const n = w();
  if (!E(n) || !n.isCollapsed()) return !1;
  const r = e.getTextContent(), { anchor: i } = n;
  if (i.key !== e.getKey() || i.offset !== r.length) return !1;
  const s = Ve(e.getMarker()), o = r.slice(s.length);
  if (!r.startsWith(s) || !/^[|\\\s]+$/.test(o)) return !1;
  const a = e.getNextSibling();
  return !C(a) || N(a) || !a.isUnmergeable() ? !1 : (e.setTextContent(s), a.setTextContent(o + a.getTextContent()), a.select(o.length, o.length), !0);
}
function KC(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed()) return !1;
  const { anchor: n } = t;
  if (n.key === e.getKey()) return !0;
  const r = e.getNextSibling();
  return n.offset === 0 && r !== null && n.key === r.getKey();
}
function UC(e, t) {
  const n = t.getCaller(), r = e.getTextContent(), { start: i } = Kc(r, n), s = id(r, n), o = w(), a = E(o) && o.isCollapsed() && o.anchor.key === e.getKey() ? o.anchor.offset : void 0;
  e.setTextContent(vt(n));
  const c = s ? FC(t, e, s) : void 0;
  if (a !== void 0)
    if (c && a >= i) {
      const l = Math.min(a - i, s.length);
      c.select(l, l);
    } else zC(t, e);
}
function bl(e) {
  if (!C(e) || N(e) || !e.isUnmergeable()) return;
  const t = e.getParent();
  if (!D(t) || t.getIsCollapsed() !== !1) return;
  let n = t.getFirstChild();
  for (; N(n) && n.getMarkerSyntax() === "opening"; ) n = n.getNextSibling();
  return e.is(n) ? t : void 0;
}
function h2(e, t, n) {
  const r = bl(e);
  if (!(!r || !C(e)))
    return e.getTextContent() === vt(r.getCaller()) ? !1 : n === "idle" && KC(e) ? (t.pendingKeys.add(e.getKey()), !1) : (UC(e, r), !0);
}
function BC(e, t) {
  const { wrapper: n, closer: r } = ca(e);
  return (n ?? r ?? t).getNextSibling();
}
function kl(e) {
  return C(e) && e.getType() === it.getType() && e.getMode() === "normal" && !e.isUnmergeable() && de(e, ke) !== "attribute";
}
function FC(e, t, n) {
  const r = BC(e, t);
  if (kl(r))
    return r.setTextContent(n + r.getTextContent()), r;
  const i = Re(n);
  return r ? r.insertBefore(i) : e.append(i), i;
}
function zC(e, t) {
  const n = BC(e, t);
  kl(n) ? n.select(0, 0) : n ? e.select(n.getIndexWithinParent(), n.getIndexWithinParent()) : e.select(e.getChildrenSize(), e.getChildrenSize());
}
function g2(e, t) {
  if (!e.isAttached() || e.getIsCollapsed() !== !1) return;
  const n = e.getCaller();
  if (!Yf(e.getMarker())?.includes("caller")) return;
  const r = e.getChildren();
  let i = 0;
  for (; i < r.length; ) {
    const c = r[i];
    if (!N(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (i === 0) return;
  const s = r[i];
  if (C(s) && !N(s) && (s.isUnmergeable() || s.getTextContent() === vt(n)))
    return;
  const o = Re(vt(n)).toggleUnmergeable();
  t.viewOptions?.isNoteShellEditable === !1 && o.setMode("token"), r[i - 1].insertAfter(o);
  const a = w();
  E(a) && a.isCollapsed() && (a.anchor.key === r[i - 1].getKey() || a.anchor.key === e.getKey() && a.anchor.offset === i) && zC(e, o);
}
function m2(e) {
  if (!e.isAttached() || e.getIsCollapsed() !== !1) return;
  const t = e.getChildren(), n = t.find(
    (o) => N(o) && o.getMarkerSyntax() === "opening"
  );
  if (!N(n) || n.getMode() !== "token" || e.getUnknownAttributes()?.closed === "false") return;
  let r = t.find(
    (o) => N(o) && o.getMarkerSyntax() === "closing"
  );
  r || (r = $t(e.getMarker(), "closing"), r.setMode("token"), e.append(r));
  for (let o = r.getNextSibling(); o; o = r.getNextSibling())
    r.insertBefore(o);
  const i = r.getPreviousSibling(), s = i?.getPreviousSibling();
  kl(i) && U(s) && !s.getChildren().some((o) => N(o) && o.getMarkerSyntax() === "closing") && s.append(i);
}
function y2(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!C(t)) return;
  const n = Fn("c", e.getNumber()), r = t.getTextContent();
  if (r === n) return;
  const i = /^[ \u00A0]+/.exec(r), s = i ? r.slice(i[0].length) : r, o = o2.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function jC(e) {
  if (Ke(e)) {
    const { wrapper: t } = Uc(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (D(e)) {
    const { wrapper: t } = ca(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if ($e(e)) {
    const t = [], n = db(e);
    n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper);
    const r = hb(e);
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
function b2(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed()) return !1;
  const n = t.anchor.getNode();
  return jC(e).some((r) => n.is(r));
}
function k2(e, t, n = "departure") {
  let r = !1;
  const i = n === "departure";
  if (i && me(e) && rk(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Bo)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && fa(l, e) && (i || b2(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of jC(e))
    l.remove(), r = !0;
  let s = !1;
  U(e) && Eb(e) !== void 0 && !md(e) && (Ab(e), s = !0, r = !0);
  let o = !1, a = !1, c = !1;
  for (const l of Bo)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (iE(l, e)) {
        jo(l, e), a = !0, r = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Sk(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Jc(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: r } : { handled: o, mutated: r };
}
function jm(e) {
  return C(e) && e.getType() === it.getType() && e.getMode() === "normal" && de(e, ke) !== "attribute";
}
function x2(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const n = X(e);
  if (!n?.isAttached()) return t;
  for (let r = n.getPreviousSibling(); r && jm(r); r = r.getPreviousSibling())
    t.add(r.getKey());
  for (let r = n.getNextSibling(); r && jm(r); r = r.getNextSibling())
    t.add(r.getKey());
  return t;
}
function wa(e, t, n = "departure") {
  let r = !1;
  if (e.pendingKeys.size === 0) return r;
  const i = x2(t), s = [...e.pendingKeys].filter((l) => !i.has(l)), o = new Set(
    s.filter((l) => {
      const u = X(l);
      return !!u?.isAttached() && !!qC(u, e.getMarker);
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
    if (bl(u)) {
      e.pendingKeys.delete(l), r = h2(u, e, n) || r;
      continue;
    }
    if (N(u)) {
      e.pendingKeys.delete(l);
      const g = u.getTextContent();
      if (lr(u)) continue;
      const m = Zs.exec(g);
      u.getMarkerSyntax() === "opening" && m ? r = LC(u, m[1], e) || r : n === "idle" && qm(u, e.getMarker, e.viewOptions) ? e.pendingKeys.add(l) : RC(u, e) ? (r = !0, e.logger?.debug(
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
    const h = k2(d, e, n);
    if (r = h.mutated || r, !h.handled) {
      if (n === "idle" && qm(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(p);
        continue;
      }
      r = Kn(d, e) || r;
    }
  }
  return r;
}
function VC(e) {
  if (kn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (U(t)) return Co(t) !== void 0;
  return !1;
}
function T2(e) {
  const t = Tr(e);
  if (!t) return !1;
  const n = Br(t.kind);
  return !Jc(
    n,
    n.scanPieces(t.owner),
    n.expectedPieces(t.owner)
  );
}
function Vm(e) {
  let t = e.getParent();
  for (; ue(t); ) t = t.getParent();
  return U(t) ? t : void 0;
}
function C2(e, t) {
  const n = w();
  if (!E(n) || !n.isCollapsed()) return !1;
  const { anchor: r } = n;
  if (r.key !== e.getKey() || r.type !== "text") return !1;
  const i = t.getFirstChild();
  if (!N(i) || i.getMarkerSyntax() !== "opening") return !1;
  let s = i.getNextSibling();
  for (; ue(s); ) s = s.getFirstChild();
  if (!e.is(s) || !Zs.test(i.getTextContent())) return !1;
  const o = e.getTextContent(), a = o.slice(0, r.offset);
  if (!wT.test(a) || o[r.offset] !== q) return !1;
  const c = i.getTextContent() + a;
  return e.setTextContent(o.slice(a.length)), i.setTextContent(c), i.select(c.length, c.length), !0;
}
function v2(e, t) {
  const n = e.getTextContent(), r = de(e, ke), i = e.getParent();
  if (r !== "attribute" && $e(i)) {
    n.replace(/^[ \u00A0]+/, "") === Fn("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (l2(e, t) || u2(e)) return;
  if (r === "attribute") {
    T2(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Vm(e);
  if (s && C2(e, s)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!n.includes("\\")) {
    n.includes("|") && VC(e) || n.includes("//") && !wu(e) || gb(e) || $e(Xo(e)) ? t.pendingKeys.add(e.getKey()) : t.pendingKeys.delete(e.getKey());
    const c = Vm(e);
    c && gd(c) ? t.pendingKeys.add(c.getKey()) : c && Eb(c) !== void 0 && c.markDirty();
    return;
  }
  if (wu(e)) return;
  const o = w(), a = E(o) && o.isCollapsed() && o.anchor.key === e.getKey() ? n.slice(0, o.anchor.offset) : n;
  if (q$.test(a)) {
    if (E_(n)) {
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
function S2(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Sk(e, t);
}
function _2(e) {
  const t = (n) => {
    if (N(n)) {
      lr(n) || e.pendingKeys.add(n.getKey());
      return;
    }
    if (kn(n)) {
      ck(n) || e.pendingKeys.add(n.getKey());
      return;
    }
    for (const r of Bo)
      r.settleScope !== "none" && r.ownerPredicate(n) && (fa(r, n) || S2(r, n)) && e.pendingKeys.add(n.getKey());
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
      const i = bl(n);
      if (i) {
        n.getTextContent() !== vt(i.getCaller()) && e.pendingKeys.add(n.getKey());
        return;
      }
      const s = n.getTextContent();
      (s.includes("\\") || s.includes("|") && VC(n) || s.includes("//") || gb(n) !== void 0) && e.pendingKeys.add(n.getKey());
      return;
    }
    if (U(n)) {
      gd(n) && e.pendingKeys.add(n.getKey()), n.getChildren().forEach(t);
      return;
    }
    if (!Ze(n)) {
      if (Be(n) && n.getChildrenSize() === 0) {
        const r = Tr(n)?.owner;
        r && e.pendingKeys.add(r.getKey());
        return;
      }
      A(n) && n.getChildren().forEach(t);
    }
  };
  Ee().getChildren().forEach(t);
}
const WC = Uf(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function hu(e) {
  const t = e();
  return jt(zf), jt(By), t;
}
const Wm = 8, M2 = 1e3;
function gs(e, t) {
  const n = Ue(e) ? ["va", "vp"] : Ke(e) ? ["milestone"] : D(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const r of n)
    lE(Br(r), e, t.pendingKeys);
}
function E2(e, t) {
  const n = (r, i) => {
    if (i.updateTags.has(Rc) || qd(e) === "remote")
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
function Nf(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const n = w();
  return n ? t ? Hx(n, t) : E(n) && Es(n) : !1;
}
function A2(e, t, n) {
  return et(
    e.registerCommand(
      Zn,
      (r) => {
        if (sl() || Nf(t)) return !1;
        const i = mf(r, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = n ? Np(Op(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = Km(o, t.getMarker);
          if (a === "declined" && NI(e) && (a = Km(o, t.getMarker)), a === "handled")
            return r?.preventDefault(), !0;
        }
        return !1;
      },
      He
    ),
    e.registerCommand(
      Zn,
      (r) => {
        const i = mf(r, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !n$()) return !1;
        const o = w();
        return t.structureProtectionMode === "protected" && E(o) && Es(o) ? !1 : (r?.preventDefault(), E(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Ro, void 0), a === "") return;
          const l = w();
          E(l) && l.insertText(a);
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
function P2({
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
    const p = fM(
      o,
      d.pendingKeys,
      (I) => {
        d.pendingKeys.clear(), I.read(() => _2(d));
      }
    );
    let h, g = !1, m = !1, y, k = !1, x = !1, S = 0;
    const _ = () => S < Wm ? !1 : (d.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Wm} consecutive mutating passes; leaving ${d.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...d.pendingKeys].join(", ")}`
    ), !0), j = (I, K = "departure") => {
      o.update(() => {
        S = hu(
          () => wa(d, I, K)
        ) ? S + 1 : 0;
      });
    };
    let $;
    const ne = () => {
      if ($ !== void 0 && clearTimeout($), $ = void 0, x || d.pendingKeys.size === 0) return;
      const I = u.current ?? M2;
      I < 0 || ($ = setTimeout(() => {
        $ = void 0, !(x || d.pendingKeys.size === 0) && (g || _() || j(void 0, "idle"));
      }, I));
    }, fe = et(
      o.registerNodeTransform(Wn, (I) => {
        if (o.isComposing()) return;
        r2(I, d);
        const K = Tr(I);
        K && (Ue(K.owner) || D(K.owner) || $e(K.owner) || Ke(K.owner) && Uc(K.owner).wrapper === void 0) && gs(K.owner, d);
      }),
      o.registerNodeTransform(Kt, (I) => {
        o.isComposing() || (a2(I, d), gs(I, d));
      }),
      o.registerNodeTransform(Rn, (I) => {
        o.isComposing() || (y2(I), I.isAttached() && gs(I, d));
      }),
      o.registerNodeTransform(It, (I) => {
        o.isComposing() || SI(I, d);
      }),
      o.registerNodeTransform(ze, (I) => {
        if (!o.isComposing()) {
          PI(I, d);
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
        o.isComposing() || gs(I, d);
      }),
      o.registerNodeTransform(Er, (I) => {
        if (o.isComposing()) return;
        const K = Tr(I);
        K && (Ke(K.owner) || Ue(K.owner) || D(K.owner) || $e(K.owner)) && gs(K.owner, d);
      }),
      o.registerNodeTransform(tt, (I) => {
        o.isComposing() || (AI(I, d), g2(I, d), m2(I), gs(I, d));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(ur, (I) => {
        o.isComposing() || s2(I, d);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(it, (I) => {
        o.isComposing() || v2(I, d);
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
      E2(o, d),
      ...c ? [
        o.registerNodeTransform(it, (I) => {
          o.isComposing() || Y$(I);
        }),
        o.registerCommand(
          Ns,
          (I) => vm(
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
            vm(
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
          (I) => iR(
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
        () => (!Nf(d) && !sl() && Ef(d), !1),
        He
      ),
      o.registerCommand(
        ra,
        () => (o.isComposing() || TI(d), !1),
        kr
      ),
      o.registerCommand(
        Lc,
        (I) => I || o.isComposing() ? !1 : EI(),
        kr
      ),
      o.registerCommand(
        Ic,
        () => (g = !1, S = 0, ne(), !1),
        Xt
      ),
      o.registerCommand(
        _r,
        (I) => (g = !1, S = 0, ne(), (I.key === "Backspace" || I.key === "Delete") && !Nf(d, zx(I)) && (Ef(d), xI(d), queueMicrotask(() => {
          d.wholeParaDeleteExpected?.clear(), d.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !I.ctrlKey || I.altKey || I.shiftKey || I.metaKey || I.key !== " " && I.code !== "Space" || !t$() ? !1 : (I.preventDefault(), !0)),
        Ge
      ),
      o.registerCommand(
        Ay,
        (I) => {
          const K = EC();
          K === "needs-plain-split" && o.dispatchCommand(Ro, void 0);
          const ge = K !== "declined" || uE();
          return ge && I?.preventDefault(), wa(d), ge;
        },
        Ge
      ),
      o.registerCommand(
        Ro,
        () => (d.splitExpected.current = !0, hT()),
        Ge
      ),
      A2(o, d, c),
      o.registerCommand(
        WC,
        () => {
          if (g) return !0;
          const I = o.getRootElement(), K = I?.ownerDocument, ge = !!I && !!K && K.hasFocus() && I.contains(K.activeElement);
          let re;
          if (ge) {
            const Le = w();
            re = E(Le) ? Le.focus.key : h;
          }
          return hu(() => wa(d, re)), !0;
        },
        Xt
      ),
      o.registerCommand(
        Qf,
        () => (m = !0, !1),
        Xt
      ),
      o.registerCommand(
        Wf,
        () => {
          if (g) return !1;
          const I = w(), K = E(I) ? I.focus.key : h;
          return hu(() => wa(d, K)), !1;
        },
        Xt
      ),
      o.registerUpdateListener(({ editorState: I, tags: K }) => {
        const ge = m || K.has($i);
        m = !1, d.splitExpected.current = !1, d.wholeParaDeleteExpected?.clear(), d.collapsedDeleteCaretParas?.clear(), d.rebuildAttempted.clear();
        const re = I.read(() => {
          const ye = w();
          return E(ye) ? ye.focus.key : void 0;
        }), Le = y;
        if (re !== void 0 && (y = re), K.has(Rc)) {
          Sb(o, I, K), g = !0, re !== void 0 && (h = re);
          return;
        }
        if (ge) {
          re !== void 0 && re !== Le && (g = !0);
          return;
        }
        g || (re !== void 0 && (h = re), ne(), !(k || re === void 0) && [...d.pendingKeys].some((ye) => ye !== re) && (k = !0, queueMicrotask(() => {
          k = !1, !x && (_() || j(h));
        })));
      })
    );
    return () => {
      x = !0, $ !== void 0 && clearTimeout($), $ = void 0, p(), fe(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const w2 = ["status_unknown", "status_invalid"], HC = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, N2 = Object.values(HC);
function O2(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const n = HC[t];
  e.getAttribute("aria-description") !== n && (e.setAttribute("aria-description", n), e.title = n);
}
function Hm(e) {
  e.classList.remove(...w2), e.removeAttribute("aria-description"), N2.includes(e.title) && e.removeAttribute("title");
}
function $2(e, t, n, r) {
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
function R2(e) {
  const t = X(e), n = t?.getTopLevelElement();
  return !t || !n ? !1 : t.getKey() === n.getKey() ? !0 : N(t) && t.getParent()?.getKey() === n.getKey();
}
function I2({
  viewOptions: e,
  styleInfo: t,
  logger: n
}) {
  const [r] = Ce(), i = e?.markerMode === "editable";
  return H(() => {
    if (!i) return;
    const s = t ?? ic;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      r.isComposing() || r.getEditorState().read(() => {
        const u = CR(s, l);
        let f = u;
        if (l) {
          f = new Map(u);
          for (const [d, p] of o) {
            if (f.has(d) || R2(d)) continue;
            const h = X(d)?.getTopLevelElement();
            !h || l.has(h.getKey()) || f.set(d, p);
          }
        }
        for (const [d] of o) {
          if (f.has(d)) continue;
          const p = r.getElementByKey(d);
          p && Hm(p);
        }
        for (const [d, p] of f) {
          const h = r.getElementByKey(d);
          h && O2(h, p);
        }
        o = f, n?.debug(`[MarkerValidation] pass: ${f.size} flagged`);
      });
    };
    a();
    const c = r.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: f, dirtyLeaves: d }) => {
        f.size === 0 && d.size === 0 || a(
          $2(l, u, f, d)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = r.getElementByKey(l);
        u && Hm(u);
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
    a && A(s) && no(s.getChildren(), a, n);
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
function di(e, t, n) {
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
function GC(e, t) {
  const n = [];
  for (const r of e)
    Wp(r, t) || ((me(r) || U(r)) && n.push(r.getMarker()), A(r) && n.push(...GC(r.getChildren(), t)));
  return n;
}
function JC(e) {
  const t = [];
  for (const n of e) {
    const r = Hp(n);
    (r === "para" || r === "char") && t.push(n.marker ?? "");
    const i = vr(n);
    i && t.push(...JC(i));
  }
  return t;
}
function Zo(e, t, n) {
  const r = GC(e, n), i = JC(t);
  return r.length === i.length && r.every((s, o) => s === i[o]);
}
function YC(e, t) {
  if (!e || e.input.run.length === 0) return;
  const n = w();
  let r, i;
  if (E(n)) {
    if (!n.isCollapsed()) return;
    r = n.focus.getNode(), i = n.focus.offset;
  } else if (t)
    r = X(t.key), i = t.offset;
  else
    return;
  if (!(!C(r) || !r.isAttached()) && !(e.nodeKey !== void 0 && r.getKey() !== e.nodeKey) && r.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: r, caretOffset: i, run: e.input.run };
}
function xl(e, t) {
  const n = t && XC(e, t);
  return n ? eh(e, n.start, n.end) : e;
}
function XC(e, t) {
  const n = t.node.getKey(), r = e.spans.find(
    (o) => !o.isSentinel && o.key === n
  );
  if (!r || r.end - r.start !== t.node.getTextContentSize()) return;
  const i = r.start + t.caretOffset, s = i - t.run.length;
  if (!(s < r.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function QC(e, t, n, r, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = n, l = Yp(e, a, o);
  if (!l) return;
  const u = Tl(l, s, n), f = xl(u, i), d = ss(f, {
    getMarker: a,
    opensNamelessParagraph: Gp(e)
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
  if (fi(p) !== u.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const h = di(u, t, r);
  if (!h) {
    c?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Sr(p, a) === Cr(e, a) && Zo(e, p, a)) {
    c?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Qo(p, h.serialized);
  const m = ZC(e), y = oh(p);
  for (let k = 0; k < m.length && k < y.length; k++)
    m[k].sid !== void 0 && y[k].number === m[k].number && (y[k].sid = m[k].sid);
  return th(
    e,
    f,
    h.live,
    p,
    "paras",
    a,
    o
  );
}
function ZC(e) {
  const t = [], n = (r) => {
    Ue(r) ? t.push({ number: r.getNumber(), sid: r.getSid() }) : A(r) && r.getChildren().forEach(n);
  };
  return e.forEach(n), t;
}
function oh(e) {
  const t = [];
  for (const n of e) {
    sd(n) && t.push(n);
    const r = vr(n);
    r && t.push(...oh(r));
  }
  return t;
}
function L2(e, t, n, r, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = n, l = Jo(e, a, o);
  if (!l) return;
  const { contentNodes: u } = l;
  if (u.length === 0) return;
  const f = Tl(l.out, s, n), d = xl(f, i), p = ss(d, {
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
  const g = h.content ?? [], m = yC(g), y = e.getCategory() !== m, k = QT(e, g);
  if (k) {
    const j = ZT(
      e,
      k.before,
      k.after,
      m,
      o
    );
    if (!j || fi(j) !== f.sentinels.length) {
      c?.warn("[MarkerEdit] Settled note USJ skipped: the closed note lost its content");
      return;
    }
    const $ = di(f, t, r);
    return $ ? (Qo(j, $.serialized), {
      rebuilt: void 0,
      contentNodes: u,
      category: m,
      categoryChanged: !1,
      closedAs: j
    }) : void 0;
  }
  const x = XT(e, g, m, o);
  if (x.failure !== void 0) {
    x.failure === "shape" ? c?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : x.failure === "caller" && c?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const S = x.children;
  if (fi(S) !== f.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const _ = di(f, t, r);
  if (!_) {
    c?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Sr(S, a) === Cr(u, a) && Zo(u, S, a)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: m, categoryChanged: y };
    c?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Qo(S, _.serialized), {
    // Annotation marks, mirroring `$rebuildNoteContent`'s carry.
    rebuilt: th(
      u,
      d,
      _.live,
      S,
      "noteContent",
      a,
      o
    ),
    contentNodes: u,
    category: m,
    categoryChanged: y
  };
}
function Gm(e) {
  return e.$?.textType;
}
function q2(e, t) {
  const n = e, r = t;
  return n.type === "text" && r.type === "text" && n.format === r.format && n.style === r.style && n.mode === r.mode && n.detail === r.detail && Gm(e) === Gm(t);
}
function D2(e) {
  const t = [];
  for (const n of e) {
    const r = X(n);
    r?.isAttached() && Ze(r) && r.getTag() === "optbreak" && r.getChildrenSize() === 0 && t.push(r);
  }
  return t;
}
function K2(e) {
  if (!N(e) || e.getMarkerSyntax() !== "opening") return;
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
function Mc(e, t) {
  const n = e;
  n.marker = t, n.text = fl(t, n.markerSyntax, n.nested);
}
function ev(e, t) {
  const { glyph: n, note: r, oldMarker: i, newMarker: s } = e;
  if (!tt.isValidMarker(s)) return;
  const o = t.get(r.getKey());
  o && (o.node.marker = s);
  const a = t.get(n.getKey());
  a && Mc(a.node, s);
  const c = r.getChildren().filter(N).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Mc(l.node, s);
}
function tv(e, t, n, r) {
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
function U2(e, t, n) {
  const r = e.spans.find((i) => i.key === t && !i.isSentinel);
  return r ? tv(e, r.start, r.end, n) : e;
}
function nv(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), A(e) && e.getChildren().forEach((n) => nv(n, t)), t;
}
function B2(e, t) {
  const n = nv(t), r = e.spans.filter((d) => n.has(d.key));
  if (r.length === 0) return e;
  const i = Math.min(...r.map((d) => d.start)), s = Math.max(...r.map((d) => d.end)), o = e.spans.filter((d) => d.isSentinel && d.start < i).length, a = r.filter((d) => d.isSentinel).length, c = NT.test(e.text.slice(0, i)) ? " " : "", l = tv(e, i, s, c + xt), u = i + c.length, f = [...e.sentinels];
  return f.splice(o, a, [t]), {
    text: l.text,
    spans: [
      ...l.spans.filter((d) => !n.has(d.key)),
      { key: t.getKey(), start: u, end: u + 1, isSentinel: !0 }
    ].sort((d, p) => d.start - p.start),
    sentinels: f
  };
}
function Tl(e, t, n) {
  let r = e;
  for (const { char: i, glyph: s, closer: o, newMarker: a } of t?.values() ?? [])
    if (r.spans.some((c) => c.key === s.getKey())) {
      if (sC(i, a, n.getMarker)) {
        r = B2(r, i);
        continue;
      }
      o && (r = U2(
        r,
        o.getKey(),
        Wt(fl(a, "closing", o.getNested()))
      ));
    }
  return r;
}
function rv(e, t) {
  const { char: n, glyph: r, closer: i, newMarker: s } = e, o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Mc(a.node, s);
  const c = i && t.get(i.getKey());
  c && Mc(c.node, s);
}
function F2(e, t, n, r, i, s, o) {
  const { viewOptions: a, getMarker: c, logger: l } = n, u = nh(e, c, a), { contentNodes: f } = u;
  if (f.length === 0 && s.length === 0 || !Xp(u.out, s, c, a)) return;
  const d = Tl(u.out, o, n), p = kC(xl(d, i), c);
  if (Hr(p.content) !== d.sentinels.length) {
    l?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const h = eC(
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
  if (fi([...g, ...m]) !== d.sentinels.length) {
    l?.warn(
      "[MarkerEdit] Settled book USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const y = di(d, t, r);
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
  const x = ZC([...f, ...s]), S = oh([...g, ...m]);
  for (let _ = 0; _ < x.length && _ < S.length; _++)
    x[_].sid !== void 0 && S[_].number === x[_].number && (S[_].sid = x[_].sid);
  return { rebuilt: g, contentNodes: f, followingBlocks: m };
}
function iv(e, t, n, r) {
  const { viewOptions: i, getMarker: s, logger: o } = t, a = Yo(e, s, i);
  if (!a) return;
  const c = Tl(a, r, t), l = xl(c, n), u = ss(l, {
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
  const p = [e, ...os(e)];
  if (!(e.getNumber() !== (f.number ?? "") || e.getAltnumber() !== f.altnumber || e.getPubnumber() !== f.pubnumber) && Sr(d, s) === Cr(p, s) && Zo(p, d, s)) {
    o?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return th(
    p,
    l,
    [],
    d,
    "chapter",
    s,
    i
  );
}
function sv(e, t, n) {
  const r = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), f = (h) => {
    D(h) ? s.set(h.getKey(), h) : $e(h) ? o.set(h.getKey(), h) : Ie(h) ? a.set(h.getKey(), h) : r.set(h.getKey(), [h]);
  };
  for (const h of e) {
    const g = X(h);
    if (!g?.isAttached()) continue;
    const m = qC(g, t.getMarker);
    if (m) {
      u.set(m.char.getKey(), m);
      continue;
    }
    const y = Xo(g);
    if (y) {
      if (f(y), N(g)) {
        const k = $C(g, t.getMarker);
        k && i.push(k);
      }
      if (D(y)) {
        const k = K2(g);
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
  const p = D2(e);
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
function ov(e, t) {
  e.splice(t, 1);
  const n = e[t - 1], r = e[t], i = n && Fs(n), s = r && Fs(r);
  n && r && i !== void 0 && s !== void 0 && q2(n, r) && (n.text = i + s, e.splice(t, 1));
}
function ma(e, t, n, r, i, s) {
  const o = t.get(e.getKey()), a = o ? vr(o.node) : void 0;
  if (!o || !a) return !1;
  const c = L2(e, t, n, r, i, s);
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
function av(e, t, n, r, i, s, o) {
  const a = n.get(e.getKey()), c = a ? vr(a.node) : void 0;
  if (!a || !c) return !1;
  const l = F2(
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
function z2(e, t, n, r, i) {
  const s = YC(r, i);
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
  } = sv(t, n, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && d.size === 0 && l.size === 0 && p.length === 0)
    return;
  const g = /* @__PURE__ */ new Map();
  no(Ee().getChildren(), e.root.children, g);
  for (const m of f.values()) ev(m, g);
  for (const m of d.values()) rv(m, g);
  for (const m of a.values())
    ma(m, g, n, h, s, d);
  for (const m of o.values()) {
    const y = g.get(m[0].getKey());
    if (!y) continue;
    const k = QC(
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
    av(
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
    const k = 1 + os(m).length, x = iv(m, n, s, d);
    if (!x) continue;
    const S = y.siblings.indexOf(y.node);
    S < 0 || y.siblings.splice(S, k, ...x);
  }
  for (const m of p) {
    const y = g.get(m.getKey());
    if (!y) continue;
    const k = y.siblings.indexOf(y.node);
    k < 0 || ov(y.siblings, k);
  }
  return eT(e, n.viewOptions);
}
function j2({
  viewOptions: e,
  logger: t
}) {
  const [n] = Ce(), r = is(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return H(() => {
    if (r)
      return n.registerNodeTransform(
        It,
        (i) => V2(i, t)
      );
  }, [n, r, t]), null;
}
function V2(e, t) {
  e.getMarker() !== Bn && (e.isEmpty() || mn(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${Bn}" (key ${e.getKey()})`
  ), e.setMarker(Bn)));
}
function mo(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const W2 = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function fr(e) {
  return W2.exec(e)?.[1] ?? e;
}
function ar(e, t) {
  const n = e.jsonPath.slice(fr(e.jsonPath).length);
  return { ...e, jsonPath: `${Nt(t)}${n}` };
}
function ah(e, t) {
  return e.length === t.length && e.every((n, r) => n === t[r]);
}
function cv(e) {
  if (Kf(e) || ws(e)) return !0;
  const t = lv(e);
  return t === "marker" || t === "caller";
}
const H2 = /^\['([^']+)'\]$/;
function lv(e) {
  if (No(e))
    return H2.exec(
      e.jsonPath.slice(fr(e.jsonPath).length)
    )?.[1];
}
function Of(e, t) {
  return cv(e) && ah($n(fr(e.jsonPath)), jn(t));
}
function uv(e, t, n) {
  if (!e.isAttached()) return;
  const [r, i] = Nn(
    ar(t, jn(e)),
    n
  );
  if (!(!r || i === void 0))
    return { key: r.getKey(), offset: i, type: A(r) ? "element" : "text" };
}
function ch(e, t) {
  const n = pn(e, t, { addressDisplayBytes: !0 }), r = n && X(n.key);
  return n && n.offset > 0 && N(r) && r.getMarkerSyntax() !== "opening" ? n : void 0;
}
function fv(e, t) {
  const n = pn(e, t, { addressDisplayBytes: !0 });
  if (!n || n.offset !== 0) return;
  const r = e.spans.findIndex((o) => o.key === n.key), i = e.spans[r], s = r > 0 ? e.spans[r - 1] : void 0;
  if (!(!i || !Po(i) || !s || s.end !== i.start || !Po(s)))
    return aC(s);
}
function G2(e, t) {
  const n = ch(e, t);
  if (n) return n;
  const r = fv(e, t);
  if (r) return r;
  const i = pn(e, t);
  return i && J2(e, i);
}
function J2(e, t) {
  if (t.type !== "text") return t;
  const n = e.spans.findIndex((a) => a.key === t.key), r = e.spans[n], i = e.spans[n + 1];
  if (!r || !i || r.end === r.start || t.offset !== r.end - r.start)
    return t;
  const s = e.text[i.start] === "\\", o = On.test(e.text[r.end - 1]);
  return s || o ? { key: i.key, offset: 0, type: "text" } : t;
}
function dv(e) {
  const t = e.markerName.length + 2, n = t + e.valueLength;
  return { valueStart: t, closerStart: n, closerLength: e.markerName.length + 2 };
}
function Y2(e, t, n) {
  const { keyName: r } = e, { valueStart: i, closerStart: s } = dv(e);
  return n === 0 ? { jsonPath: t, keyName: r } : n < i ? { jsonPath: t, keyName: r, keyOffset: n - 1 } : n < s ? {
    jsonPath: `${t}['${r}']`,
    propertyOffset: n - i
  } : { jsonPath: t, keyName: r, keyClosingMarkerOffset: n - s };
}
function X2(e, t) {
  const { valueStart: n, closerStart: r, closerLength: i } = dv(e), s = (o, a, c) => o >= 0 && o <= a ? c + o : void 0;
  if ($o(t))
    return s(t.keyOffset, e.markerName.length, 1);
  if (Oo(t))
    return s(t.keyClosingMarkerOffset, i, r);
  if (Oc(t)) return 0;
  if (No(t))
    return s(t.propertyOffset, e.valueLength, n);
}
function Q2(e) {
  return $o(e) || Oo(e) || Oc(e) ? e.keyName : lv(e);
}
function Z2(e, t, n) {
  const r = G2(e.spelling, t), i = r && X(r.key);
  if (!r || !i) return;
  const s = e.foldedAttributes.find((o) => o.ownerKey === r.key);
  return s ? Y2(
    s,
    Nt(jn(i)),
    r.offset
  ) : Ot(i, r.offset, n);
}
function eL(e, t) {
  let n = Ee();
  for (let r = 0; r < t.length; r += 1) {
    if (!A(n)) return;
    const i = en(n, Bt(e.viewOptions))[t[r]];
    if (i?.type !== "element") return;
    n = i.node;
    const s = e.byFirstLiveKey.get(n.getKey());
    if (s?.kind === "note") return { plan: s, depth: r };
  }
}
function Ec(e, t) {
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
    return o.plan && o.indexWithinScope > 0 ? Ec(e, { jsonPath: Nt([t.offset]) }) : { kind: "live", location: { ...t, offset: o.liveIndex } };
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
  const i = [r.liveIndex, ...n.slice(1)], s = eL(e, i);
  return s ? {
    kind: "scope",
    plan: s.plan,
    scratchIndexes: [0, ...n.slice(s.depth + 1)],
    location: t
  } : { kind: "live", location: ar(t, i) };
}
function pv(e, t) {
  const n = Q2(t);
  if (n === void 0) return;
  const r = $n(fr(t.jsonPath));
  for (const i of e)
    for (const s of i.foldedAttributes) {
      const o = X(s.ownerKey);
      if (s.keyName !== n || !o || !ah(jn(o), r))
        continue;
      const a = X2(s, t), c = i.spelling.spans.find((u) => u.key === s.ownerKey), l = a !== void 0 && c ? ri(i.spelling, s.ownerKey, a) : void 0;
      return a === void 0 || !c || !l ? { resolution: void 0 } : {
        resolution: {
          kind: "literal",
          run: i,
          anchor: l,
          atWordByte: Va(i.spelling, c.start + a)
        }
      };
    }
}
function tL(e, t, n, r) {
  const i = pv(t, n);
  if (i) return i.resolution;
  const [s, o] = Nn(n, r.viewOptions);
  if (!s || o === void 0) return;
  const a = Up(e, s), c = a && t.find((d) => d.sentinelIndex === a.sentinelIndex);
  if (c) {
    const d = Ao(c.spelling, s, o);
    return d && {
      kind: "literal",
      run: c,
      anchor: d.anchor,
      atWordByte: Va(c.spelling, d.position)
    };
  }
  if (!a) {
    const d = Ao(e, s, o);
    return d ? {
      kind: "anchor",
      anchor: d.anchor,
      atWordByte: Va(e, d.position)
    } : void 0;
  }
  const l = Bp(a.member, s);
  if (!l) return;
  const u = D(a.member) ? Jo(a.member, r.getMarker, r.viewOptions)?.out : void 0, f = u && Ao(u, s, o);
  return {
    kind: "preserved",
    sentinelIndex: a.sentinelIndex,
    memberIndex: a.memberIndex,
    path: l,
    offset: o,
    type: A(s) ? "element" : "text",
    noteAnchor: f && {
      anchor: f.anchor,
      atWordByte: Va(u, f.position)
    },
    isNoteOwnBytes: D(a.member) && Of(n, a.member)
  };
}
function nL(e, t, n) {
  const r = pv(e, t);
  if (r) return r.resolution !== void 0;
  const [i, s] = Nn(t, n);
  return i !== void 0 && s !== void 0;
}
function Va(e, t) {
  const n = e.text[t];
  return n !== void 0 && !On.test(n);
}
function hv(e, t) {
  if (t.type !== "text") return t;
  const n = Zp(e, t.key, t.offset);
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
function rL(e, t) {
  for (let n = 0; n < e.length; n += 1) {
    const r = e[n];
    for (let i = 0; i < r.length; i += 1) {
      const s = r[i];
      if (s?.sentinelIndex === t.sentinelIndex && s.memberIndex === t.memberIndex)
        return { sentinelIndex: n, memberIndex: i };
    }
  }
}
function lh(e) {
  const { liveFragment: t, scratchFragment: n, sentinelMap: r, alignment: i } = e;
  return t && n && r && i ? { liveFragment: t, scratchFragment: n, sentinelMap: r, alignment: i } : void 0;
}
function gv(e) {
  const t = e.liveNodes[0];
  if (!t.isAttached()) return;
  if (e.kind !== "note" && A(t))
    return { key: t.getKey(), offset: 0, type: "element" };
  const n = t.getParent();
  return n ? { key: n.getKey(), offset: t.getIndexWithinParent(), type: "element" } : void 0;
}
function ii(e, t) {
  return t?.warn(
    `[positions] A settled location in a pending ${e.kind} scope could not be lined up with its live bytes; it resolves to the front of the scope.`
  ), gv(e);
}
function gu(e, t) {
  return t?.error("settled-position basis out of date — rebuilt"), gv(e);
}
function Jm(e) {
  const t = [];
  let n = 0;
  for (const r of e.spans) {
    r.isSentinel && t.push(r.end > r.start ? n : void 0);
    for (let i = r.start; i < r.end; i += 1)
      On.test(e.text[i]) || (n += 1);
  }
  return t;
}
function iL(e, t, n, r) {
  const { liveFragment: i, scratchFragment: s, alignment: o } = t, a = Jm(s)[n];
  if (a === void 0) return ii(e, r);
  const c = Jm(i).findIndex(
    (d) => d !== void 0 && qp(o, d, "live") === a
  ), l = c < 0 ? void 0 : i.sentinels[c]?.[0], u = l?.isAttached() ? l.getParent() : void 0;
  if (l && u)
    return { key: u.getKey(), offset: l.getIndexWithinParent(), type: "element" };
  const f = pn(i, {
    nonWsBefore: eo(o, a, "settled"),
    wsRun: 0
  });
  return f ? ea(e, f) : ii(e, r);
}
function mv(e, t, n, r, i, s) {
  const o = lh(e);
  if (!o) return ii(e, s);
  const a = !Ir(r), c = Sv(
    o.alignment,
    t.nonWsBefore,
    o.scratchFragment.text,
    t,
    o.liveFragment.text,
    ga(o.alignment, t, "toLive")
  ), l = (f) => {
    const d = ch(o.liveFragment, f);
    if (d) return ea(e, d);
    const p = pn(
      o.liveFragment,
      dh(o.liveFragment, f, a),
      { addressDisplayBytes: a }
    );
    return ea(
      e,
      p && n ? hv(o.liveFragment, p) : p
    );
  }, u = FR(o.alignment, t.nonWsBefore);
  if (u < c.nonWsBefore) {
    const f = l({ ...c, nonWsBefore: u }), d = f && X(f.key);
    if (f && d && kv(d, f.offset, i)) return f;
  }
  return l(c) ?? ii(e, s);
}
function sL(e, t, n, r, i, s) {
  const o = rL(n.sentinelMap, r);
  if (!o) return iL(t, n, r.sentinelIndex, s);
  const a = n.liveFragment.sentinels[o.sentinelIndex]?.[o.memberIndex];
  if (!a?.isAttached()) return gu(t, s);
  const c = e.byFirstLiveKey.get(a.getKey());
  if (c?.kind === "note" && r.isNoteOwnBytes)
    return uv(a, i, e.viewOptions);
  if (c?.kind === "note")
    return r.noteAnchor ? mv(
      c,
      r.noteAnchor.anchor,
      r.noteAnchor.atWordByte,
      i,
      e.viewOptions,
      s
    ) : ii(c, s);
  let l = a;
  for (const u of r.path) {
    if (!A(l)) return gu(t, s);
    const f = l.getChildAtIndex(u);
    if (!f) return gu(t, s);
    l = f;
  }
  return { key: l.getKey(), offset: r.offset, type: r.type };
}
function oL(e, t, n) {
  if (!e.scratch.getEditorState().read(() => {
    const [o, a] = Nn(t, n);
    return Mn(o) && a !== void 0 && a >= o.getChildrenSize();
  })) return;
  const i = e.liveNodes[e.liveNodes.length - 1], s = i.getParent();
  if (Mn(s))
    return { key: s.getKey(), offset: i.getIndexWithinParent() + 1, type: "element" };
}
function aL(e, t, n) {
  const r = lL(e, t, n);
  if (!r) return r;
  const i = ar(n.location, n.scratchIndexes);
  return n.plan.scratch.getEditorState().read(() => {
    const [o, a] = Nn(i, t.viewOptions);
    return C(o) && a !== void 0 && a > 0 && a === o.getTextContentSize();
  }) ? cL(t, r, n.location) : r;
}
function cL(e, t, n) {
  const r = X(t.key);
  if (t.type !== "text" || !C(r)) return t;
  const i = JSON.stringify(n);
  let s = t, o = { node: r, offset: t.offset };
  for (const a of bv(r, t.offset)) {
    if (a.node.is(o.node) && a.offset === o.offset) continue;
    if (a.node.is(o.node)) {
      const l = a.node.getTextContent()[a.offset];
      if (l === void 0 || !On.test(l)) break;
    } else if (o.offset !== 0) break;
    o = a;
    const c = Rf(e, a.node, a.offset);
    JSON.stringify(c) === i && (s = { key: a.node.getKey(), offset: a.offset, type: "text" });
  }
  return s;
}
function lL(e, t, n) {
  const { plan: r } = n, { logger: i, viewOptions: s } = e.tier2;
  if (r.kind === "note" && n.scratchIndexes.length === 1 && cv(n.location))
    return uv(r.liveNodes[0], n.location, t.viewOptions);
  const o = ar(n.location, n.scratchIndexes);
  if (!r.scratch.getEditorState().read(() => nL(r.settledOnlyRuns, o, s))) return;
  const c = oL(r, o, s);
  if (c) return c;
  const l = lh(r);
  if (!l) return ii(r, i);
  const u = r.scratch.getEditorState().read(
    () => tL(
      l.scratchFragment,
      r.settledOnlyRuns,
      o,
      e.tier2
    )
  );
  if (!u) return ii(r, i);
  if (u.kind === "preserved")
    return sL(t, r, l, u, n.location, i);
  if (u.kind === "literal") {
    const { run: f, anchor: d } = u, p = GT(f, d.nonWsBefore, "toLiteral") ?? eo(f.inner, d.nonWsBefore, "settled"), h = !Ir(n.location), g = dh(
      l.liveFragment,
      {
        nonWsBefore: f.liveBefore + p,
        wsRun: d.nonWsBefore === 0 ? f.liveWsBefore + d.wsRun : d.wsRun
      },
      h
    ), m = pn(l.liveFragment, g, {
      addressDisplayBytes: !0
    }), y = m && X(m.key);
    if (m && N(y) && y.getMarkerSyntax() !== "opening")
      return ea(r, m);
    const k = pn(l.liveFragment, g, {
      addressDisplayBytes: h
    });
    return k ? ea(
      r,
      u.atWordByte ? hv(l.liveFragment, k) : k
    ) : ii(r, i);
  }
  return mv(
    r,
    u.anchor,
    u.atWordByte,
    n.location,
    s,
    i
  );
}
function Ym(e, t, n) {
  const r = Ec(t, n);
  if (!r) return;
  if (r.kind === "live") {
    const o = uL(t, r.location);
    if (o) return o;
    const [a, c] = Nn(r.location, t.viewOptions);
    return a && c !== void 0 ? r.location : void 0;
  }
  const i = aL(e, t, r), s = i && X(i.key);
  return s ? dL(s, i.offset, t.viewOptions, r.plan.liveNodes) : void 0;
}
function Xm(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; ) n += 1;
  return n;
}
function yv(e, t, n) {
  const r = Xm(e, t), i = Math.min(
    Xm([...e].reverse().join(""), [...t].reverse().join("")),
    e.length - r,
    t.length - r
  );
  return n <= r ? n : n >= e.length - i ? n - e.length + t.length : r;
}
function uL(e, t) {
  if (!ws(t)) return;
  const n = $n(fr(t.jsonPath));
  for (const [r, i] of e.renamedClosers) {
    const s = X(r)?.getParent();
    if (!(!s || !ah(jn(s), n)))
      return {
        ...t,
        closingMarkerOffset: yv(
          i.settled,
          i.live,
          Math.min(t.closingMarkerOffset, i.settled.length)
        )
      };
  }
}
function Qm(e) {
  for (let t = e; t; t = t.getParent()) {
    let n = t.getPreviousSibling();
    if (n) {
      for (let r = A(n) ? n.getLastChild() : null; r; )
        n = r, r = A(n) ? n.getLastChild() : null;
      return n;
    }
  }
  return null;
}
function fL(e, t) {
  for (let n = e; n; n = n.getParent())
    if (t.some((r) => r.is(n))) return !0;
  return !1;
}
function* bv(e, t, n) {
  let r = e;
  if (C(e)) for (let i = t; i >= 0; i -= 1) yield { node: e, offset: i };
  else if (A(e)) {
    const i = e.getChildAtIndex(Math.min(t, e.getChildrenSize()));
    if (i) r = i;
    else {
      const s = e.getLastDescendant();
      if (C(s))
        for (let o = s.getTextContentSize(); o >= 0; o -= 1) yield { node: s, offset: o };
      r = s ?? e;
    }
  }
  for (let i = Qm(r); i; i = Qm(i))
    if (C(i)) {
      if (n && !fL(i, n)) return;
      for (let s = i.getTextContentSize(); s >= 0; s -= 1) yield { node: i, offset: s };
    }
}
function dL(e, t, n, r) {
  const i = Ot(e, t, n), s = ta([e, t]);
  if (!s || ta(Nn(i, n))?.is(s)) return i;
  const o = (l, u) => kv(l, u, n), a = uh(e, t), c = a && o(a.node, a.offset);
  if (c) return c;
  for (const l of bv(e, t, r)) {
    if (l.node.is(e) && l.offset === t) continue;
    const u = o(l.node, l.offset);
    if (u) return u;
  }
  return i;
}
function kv(e, t, n) {
  const r = Ot(e, t, n), i = ta(Nn(r, n));
  if (!i) return;
  if (i.is(Qt(e.getKey(), t, "text"))) return r;
  const s = uh(e, t);
  return s && i.is(Qt(s.node.getKey(), s.offset, "text")) ? r : void 0;
}
function uh(e, t) {
  if (!C(e)) return;
  const n = t === e.getTextContentSize();
  if (!n && t !== 0) return;
  let r = e, i = n ? r.getNextSibling() : r.getPreviousSibling();
  for (; !i; ) {
    const s = r.getParent();
    if (!s || Mn(s) || Mn(s.getParent())) return;
    r = s, i = n ? r.getNextSibling() : r.getPreviousSibling();
  }
  for (; A(i); ) {
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
  if (A(e)) return Qt(e.getKey(), t, "element");
  const n = e.getParent();
  if (!n) return;
  const r = e.getIndexWithinParent() + (t > 0 ? 1 : 0);
  return Qt(n.getKey(), r, "element");
}
function xv(e, t, n) {
  const r = Nn(e, n), i = Nn(t, n), [s, o] = r, [a, c] = i;
  if (s && a && s.is(a))
    return o !== void 0 && c !== void 0 && o > c;
  const l = ta(r), u = ta(i);
  return !!l && !!u && u.isBefore(l);
}
function Tv(e, t, n) {
  const r = Ec(e, t), i = Ec(e, n);
  if (!(r?.kind !== "scope" || i?.kind !== "scope" || r.plan !== i.plan))
    return r.plan.scratch.getEditorState().read(
      () => xv(
        ar(r.location, r.scratchIndexes),
        ar(i.location, i.scratchIndexes),
        e.viewOptions
      )
    );
}
function pL(e, t, n) {
  if (t.byFirstLiveKey.size === 0 && t.renamedClosers.size === 0) return n;
  const r = Ym(e, t, n.start);
  if (!r) return;
  if (!n.end) return { ...n, start: r };
  const i = Ym(e, t, n.end);
  if (!i) return;
  const s = Tv(t, n.start, n.end);
  return s !== void 0 && xv(r, i, t.viewOptions) !== s ? { ...n, start: i, end: r } : { ...n, start: r, end: i };
}
function $f(e, t) {
  const n = $n(fr(t.jsonPath));
  return n.length === 0 ? t : ar(t, [
    e.liveToSettledTopIndex(n[0]),
    ...n.slice(1)
  ]);
}
function Cv(e, t) {
  const n = t.liveNodes[0].getParent(), r = n ? e.planContaining(n) : void 0;
  return r === t ? void 0 : r;
}
function Ac(e, t) {
  const n = t.liveNodes[0], r = Cv(e, t);
  if (r) {
    const s = Cl(e, r, n, 0);
    return typeof s == "object" ? $n(fr(s.jsonPath)) : void 0;
  }
  const i = hL(n, e.viewOptions);
  return i.length === 0 ? i : [e.liveToSettledTopIndex(i[0]), ...i.slice(1)];
}
function hL(e, t) {
  return !_t(e) || !Mn(e.getParent()) ? jn(e) : [vs(e, 0, Bt(t)).index];
}
function fh(e, t, n) {
  if (!t) return;
  const [r, ...i] = n;
  if (r === void 0) return;
  if (e.kind === "note") return r === 0 ? [...t, ...i] : void 0;
  const s = t[0];
  return s === void 0 ? void 0 : [s + r, ...i];
}
function gL(e, t, n) {
  const r = e.liveCut;
  return !r || t.getKey() !== r.key || n <= r.nodeOffset ? n : Math.max(r.nodeOffset, n - r.length);
}
function mL(e, t, n, r, i) {
  let s = e.sentinels[t.sentinelIndex]?.[t.memberIndex];
  if (s) {
    for (const o of n) {
      if (!A(s)) return;
      const a = s.getChildAtIndex(o);
      if (!a) return;
      s = a;
    }
    return Ot(s, r, i);
  }
}
function yL(e, t) {
  const n = JT(e, t);
  if (n)
    return {
      run: n,
      within: { nonWsBefore: 0, wsRun: t.wsRun - n.liveWsBefore }
    };
  const r = Kp(e, t);
  if (r)
    return {
      run: r.run,
      within: r.within ?? {
        nonWsBefore: eo(r.run.inner, r.count, "live"),
        wsRun: t.wsRun
      }
    };
}
function bL(e, t) {
  if (e.isSentinel) return !1;
  if (t) return !0;
  const n = X(e.key);
  return !(N(n) && n.getMarkerSyntax() !== "opening");
}
function dh(e, t, n) {
  let r = 0, i = 0;
  for (const s of e.spans)
    for (let o = s.start; o < s.end; o += 1) {
      const a = On.test(e.text[o]);
      if (r < t.nonWsBefore)
        a || (r += 1);
      else if (a) i += 1;
      else return i >= t.wsRun || bL(s, n) ? t : { ...t, wsRun: i };
    }
  return t;
}
function vv(e, t, n, r, i, s) {
  const { liveFragment: o, scratchFragment: a, sentinelMap: c, alignment: l } = t, u = Up(o, n);
  if (u) {
    const m = o.sentinels[u.sentinelIndex];
    if (!c[u.sentinelIndex]?.some((S) => S !== void 0)) {
      const S = m[0].getParent();
      if (S)
        return vv(
          e,
          t,
          S,
          m[0].getIndexWithinParent(),
          i,
          s
        );
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const y = Bp(u.member, n);
    if (!y) {
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const k = c[u.sentinelIndex]?.[u.memberIndex];
    if (!k) return;
    const x = e.scratch.getEditorState().read(
      () => mL(a, k, y, r, i)
    );
    if (x) return x;
    s?.error("settled-position basis out of date — rebuilt");
    return;
  }
  const f = Ao(o, n, gL(e, n, r));
  if (!f) return;
  const d = yL(e.settledOnlyRuns, f.anchor);
  if (d)
    return e.scratch.getEditorState().read(() => Z2(d.run, d.within, i));
  const p = ga(l, f.anchor, "toSettled"), h = Sv(
    l,
    p.nonWsBefore,
    o.text,
    f.anchor,
    a.text,
    p
  ), g = !Ir(
    Ot(n, r, i)
  );
  return e.scratch.getEditorState().read(() => {
    const m = ch(a, h), y = m && X(m.key);
    if (y) return Ot(y, m.offset, i);
    const k = fv(a, h), x = k && X(k.key);
    if (x)
      return Ot(x, k.offset, i);
    const S = dh(a, h, g), _ = pn(a, S, { addressDisplayBytes: g });
    return _ && kL(_, i);
  });
}
function Zm(e, t) {
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
function Sv(e, t, n, r, i, s) {
  if (!e.segments.some(
    (c) => !c.same && c.liveStart === c.liveEnd && c.settledEnd > c.settledStart && c.settledEnd === t
  )) return s;
  const a = Zm(n, r.nonWsBefore) - r.wsRun;
  return {
    ...s,
    wsRun: Math.max(0, Zm(i, s.nonWsBefore) - a)
  };
}
function kL(e, t) {
  const n = X(e.key);
  if (!n) return;
  const r = A(n) && e.offset >= n.getChildrenSize() && (Mn(n) || n.getLastDescendant()?.is(Ee().getLastDescendant())) && n.getLastDescendant();
  return r ? Ot(
    r,
    A(r) ? r.getChildrenSize() : r.getTextContentSize(),
    t
  ) : Ot(n, e.offset, t);
}
function Cl(e, t, n, r) {
  if (t.kind === "note") {
    const a = t.liveNodes[0], c = D(a) && St(a)?.is(n) && r === n.getTextContentSize() ? uh(n, r) : void 0;
    if (c && !Of(
      Ot(c.node, c.offset, e.viewOptions),
      a
    )) {
      const u = Cl(e, t, c.node, c.offset);
      if (typeof u == "object") return u;
    }
    const l = Ot(n, r, e.viewOptions);
    if (Of(l, a)) {
      const u = Ac(e, t);
      return u && ar(l, u);
    }
  }
  const i = lh(t);
  if (!i) return;
  const s = vv(
    t,
    i,
    n,
    r,
    e.viewOptions,
    e.logger
  );
  if (typeof s != "object") return s;
  const o = fh(
    t,
    Ac(e, t),
    $n(fr(s.jsonPath))
  );
  return o && ar(s, o);
}
function xL(e) {
  const t = [], n = (r) => {
    if (A(r))
      r.getChildren().forEach((i, s) => {
        t.push({ node: r, offset: s }), n(i);
      }), t.push({ node: r, offset: r.getChildrenSize() });
    else if (C(r))
      for (let i = 0; i <= r.getTextContentSize(); i += 1)
        t.push({ node: r, offset: i });
  };
  return e.liveNodes.forEach(n), t;
}
function TL(e, t) {
  const n = t.scratch.getEditorState().read(() => Ot(Ee(), 0, e.viewOptions)), r = fh(
    t,
    Ac(e, t),
    $n(fr(n.jsonPath))
  );
  if (r) return ar(n, r);
  const i = t.liveNodes[0], s = i.getParent();
  if (!s) return;
  const o = Cv(e, t);
  return o ? Mv(e, o, s, i.getIndexWithinParent()) : $f(
    e,
    Ot(s, i.getIndexWithinParent(), e.viewOptions)
  );
}
function _v(e, t, n) {
  const r = xL(t), i = n ? r.findIndex((s) => s.node.is(n.node) && s.offset === n.offset) : -1;
  for (let s = (i < 0 ? r.length : i) - 1; s >= 0; s -= 1) {
    const { node: o, offset: a } = r[s], c = Cl(e, t, o, a);
    if (typeof c == "object") return c;
  }
  return TL(e, t);
}
function Mv(e, t, n, r) {
  return Cl(e, t, n, r) ?? _v(e, t, { node: n, offset: r });
}
function Rf(e, t, n) {
  const r = e.planContaining(t);
  if (r) return Mv(e, r, t, n);
  const i = e.renamedClosers.get(t.getKey());
  if (i) {
    const a = Ot(t, n, e.viewOptions);
    return $f(
      e,
      ws(a) ? {
        ...a,
        closingMarkerOffset: yv(
          i.live,
          i.settled,
          a.closingMarkerOffset
        )
      } : a
    );
  }
  const s = Mn(t) && n >= t.getChildrenSize() && t.getLastChild(), o = s ? e.planContaining(s) : void 0;
  return o ? CL(e, o) ?? _v(e, o, void 0) : $f(e, Ot(t, n, e.viewOptions));
}
function CL(e, t) {
  const n = t.scratch.getEditorState().read(() => {
    const i = Ee();
    return Ot(i, i.getChildrenSize(), e.viewOptions);
  }), r = fh(
    t,
    Ac(e, t),
    $n(fr(n.jsonPath))
  );
  return r && ar(n, r);
}
function vL(e) {
  const t = tl(e.viewOptions);
  if (!t || e.byFirstLiveKey.size === 0 && e.renamedClosers.size === 0)
    return t;
  const n = w();
  if (!E(n)) return;
  const r = n.isBackward(), i = r ? n.focus : n.anchor, s = Rf(e, i.getNode(), i.offset);
  if (!s) return;
  if (n.isCollapsed()) return { start: s };
  const o = r ? n.anchor : n.focus, a = Rf(e, o.getNode(), o.offset);
  if (a)
    return Tv(e, s, a) === !0 ? { start: a, end: s } : { start: s, end: a };
}
function SL(e) {
  return e.getKey();
}
function Ev(e, t, n) {
  if (e === "para") {
    const [i] = t;
    return t.length === 1 && _t(i) ? nI(i, n.getMarker, n.viewOptions) : t.every(me) ? Yp(t, n.getMarker, n.viewOptions) : $m(t, n.getMarker, n.viewOptions);
  }
  if (e === "chapter") {
    const i = t.find($e);
    if (!i) return;
    const s = new Set([i, ...os(i)].map(SL));
    return t.every((o) => s.has(o.getKey())) ? Yo(i, n.getMarker, n.viewOptions) : $m(t, n.getMarker, n.viewOptions);
  }
  const r = t.find(D);
  return r && Jo(r, n.getMarker, n.viewOptions)?.out;
}
function _L(e, t) {
  const n = Gf({
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
const ey = "\0";
function Av(e, t = []) {
  for (const n of e)
    t.push(n.getKey()), A(n) && Av(n.getChildren(), t);
  return t;
}
function ML(e, t, n, r, i) {
  const s = `${r.viewOptions.markerMode}/${r.viewOptions.noteMode}`, o = t.map((l) => l.getTextContent()).join(ey), a = Av(t).join(" "), c = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, n, o, a, c].join(ey);
}
function vl(e, t = []) {
  for (const n of e)
    D(n) && t.push(n), A(n) && vl(n.getChildren(), t);
  return t;
}
function ya(e, t, n, r, i, s, o) {
  const a = _L(o.nodes, i);
  if (!a) return;
  const { settledCount: c, scratchFragment: l, settledSide: u } = a.getEditorState().read(() => {
    const h = Ev(e, Ee().getChildren(), o.tier2);
    return {
      settledCount: en(
        Ee(),
        Bt(o.tier2.viewOptions)
      ).length,
      scratchFragment: h,
      settledSide: h && Dp(h)
    };
  }), f = { kind: e, liveNodes: t, liveCut: r, scratch: a, scratchFragment: l, settledCount: c };
  if ((n?.sentinels.length ?? 0) === 0 && (u?.runs.length ?? 0) === 0) {
    const h = n && u && vc(Cc(n, []), u).alignment;
    return { ...f, liveFragment: n, sentinelMap: [], settledOnlyRuns: [], alignment: h };
  }
  const d = n && s && dC(n, s.live), p = d && u && vc(Cc(d, s.live), u);
  return p ? { ...f, liveFragment: d, ...p } : {
    ...f,
    liveFragment: n,
    sentinelMap: void 0,
    settledOnlyRuns: [],
    alignment: void 0
  };
}
function Sl(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const n = XC(e, t);
  return n ? {
    liveFragment: eh(e, n.start, n.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function _l(e, t) {
  for (const n of e.noteGlyphRenames.values())
    ev(n, t);
  for (const n of e.charOpenerRenames.values())
    rv(n, t);
}
function EL(e, t, n, r, i) {
  const { liveFragment: s, liveCut: o } = Sl(t, i), a = to(e), c = /* @__PURE__ */ new Map();
  if (no([e], [a], c), _l(n, c), !ma(
    e,
    c,
    r.tier2,
    n.huskKeys,
    i,
    n.charOpenerRenames
  ))
    return;
  const l = t && di(t, c, n.huskKeys);
  return ya("note", [e], s, o, [a], l, r);
}
function AL(e, t, n, r, i) {
  const { liveFragment: s, liveCut: o } = Sl(t, i), a = e.map(to), c = /* @__PURE__ */ new Map();
  no(e, a, c), _l(n, c), vl(e).filter((f) => n.noteScopes.has(f.getKey())).forEach(
    (f) => ma(
      f,
      c,
      r.tier2,
      n.huskKeys,
      i,
      n.charOpenerRenames
    )
  );
  const l = QC(
    e,
    c,
    r.tier2,
    n.huskKeys,
    i,
    n.charOpenerRenames
  );
  if (!l) return;
  const u = t && di(t, c, n.huskKeys);
  return ya("para", e, s, o, l, u, r);
}
function PL(e, t, n, r, i, s) {
  const { liveFragment: o, liveCut: a } = Sl(n, s), c = [e, ...t], l = c.map(to), u = /* @__PURE__ */ new Map();
  if (no(c, l, u), _l(r, u), vl(c).filter((d) => r.noteScopes.has(d.getKey())).forEach(
    (d) => ma(
      d,
      u,
      i.tier2,
      r.huskKeys,
      s,
      r.charOpenerRenames
    )
  ), !av(
    e,
    t,
    u,
    i.tier2,
    r.huskKeys,
    s,
    r.charOpenerRenames
  ))
    return;
  const f = n && di(n, u, r.huskKeys);
  return ya("para", c, o, a, l, f, i);
}
function wL(e, t, n, r, i) {
  const { liveFragment: s, liveCut: o } = Sl(t, i), a = iv(e, r.tier2, i, n.charOpenerRenames);
  if (!a) return;
  const c = [e, ...os(e)];
  return ya("chapter", c, s, o, a, void 0, r);
}
function NL(e, t, n, r, i, s) {
  const o = to(e), a = /* @__PURE__ */ new Map();
  no([e], [o], a), _l(r, a), vl([e]).filter((u) => r.noteScopes.has(u.getKey())).forEach(
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
    d < 0 || (ov(f.siblings, d), c.add(u.getKey()));
  }
  if (c.size === 0) return;
  const l = t && di(t, a, c);
  return ya("para", [e], t, void 0, [o], l, i);
}
function OL(e, t) {
  for (let n = e; n; n = n.getParent())
    if (t.has(n.getKey())) return !0;
  return !1;
}
function ty(e, t, n = /* @__PURE__ */ new Map()) {
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
function $L(e) {
  return e.liveNodes.every((n) => n.isAttached()) ? (e.liveFragment?.spans ?? []).every((n) => X(n.key) !== null) : !1;
}
function ny(e) {
  return (e.type === "element" ? e.node : e.segments[0]?.node)?.getTopLevelElement() ?? null;
}
function RL(e, t) {
  const n = en(Ee(), t), r = [], i = [];
  let s = 0;
  for (let o = 0; o < n.length; ) {
    const a = ny(n[o]), c = a && e.get(a.getKey());
    if (!c) {
      r[o] = s, i.push({ liveIndex: o, indexWithinScope: 0 }), s += 1, o += 1;
      continue;
    }
    const l = new Set(c.liveNodes.map((f) => f.getKey()));
    let u = 0;
    for (; o + u < n.length; ) {
      const f = ny(n[o + u]);
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
function ry(e) {
  const t = YC(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), ty(e.tier2.viewOptions, e.tier2.logger);
  e.cache.getMarker !== e.tier2.getMarker && (e.cache.entries.clear(), e.cache.getMarker = e.tier2.getMarker);
  const n = sv(e.pendedKeys, e.tier2, t), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (p, h) => {
    if (!p) return;
    const g = p.liveNodes[0].getKey();
    r.set(g, p), p.liveNodes.forEach((m) => i.set(m.getKey(), p)), h && p.liveNodes.forEach((m) => s.set(m.getKey(), p));
  }, c = (p, h, g, m) => {
    o.add(p);
    const y = Ev(h, g, e.tier2), k = ML(
      h,
      g,
      y?.text ?? "",
      e.tier2,
      t
    ), x = e.cache.entries.get(p);
    if (x?.signature === k && $L(x.plan)) return x.plan;
    const S = m(y);
    return S ? e.cache.entries.set(p, { signature: k, plan: S }) : e.cache.entries.delete(p), S;
  };
  for (const p of n.noteScopes.values())
    a(
      c(
        p.getKey(),
        "note",
        [p],
        (h) => EL(p, h, n, e, t)
      ),
      !1
    );
  for (const p of n.paraScopes.values())
    a(
      c(
        p[0].getKey(),
        "para",
        p,
        (h) => AL(p, h, n, e, t)
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
        (g) => PL(p, h, g, n, e, t)
      ),
      !0
    );
  }
  for (const p of n.chapterScopes.values())
    a(
      c(
        p.getKey(),
        "chapter",
        [p, ...os(p)],
        (h) => wL(p, h, n, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const p of n.husks) {
    const h = p.getTopLevelElement();
    if (!(me(h) || _t(h)) || OL(p, i)) continue;
    const g = l.get(h.getKey()) ?? { para: h, husks: [] };
    g.husks.push(p), l.set(h.getKey(), g);
  }
  for (const [p, { para: h, husks: g }] of l)
    a(
      c(
        p,
        "para",
        [h],
        (m) => NL(h, m, g, n, e, t)
      ),
      !0
    );
  for (const p of [...e.cache.entries.keys()])
    o.has(p) || e.cache.entries.delete(p);
  const u = /* @__PURE__ */ new Map();
  for (const { closer: p, newMarker: h } of n.charOpenerRenames.values())
    p && u.set(p.getKey(), {
      live: p.getTextContent(),
      settled: fl(h, "closing", p.getNested())
    });
  if (r.size === 0)
    return ty(e.tier2.viewOptions, e.tier2.logger, u);
  const { liveToSettled: f, settledToLive: d } = RL(
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
function IL({
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
    i.scrRef = e, i.onScrRefChange = t, Pc(s, e) || LL(i, n, e);
  }, [n, e, t]), H(
    () => n.registerMutationListener(
      En,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = If(n);
        iy(r.current, n, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Na(s) === Na(n.getEditorState())
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
      d && (If(n) || iy(r.current, n, void 0, {
        hasCreated: d,
        hasDestroyed: [...u].some((p) => !f.has(p)),
        isSameDocumentReload: Na(a) === Na(c)
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
        return i.phase === "idle" && UL(i, Pv()), !1;
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
    const i = () => jL(r.current);
    return n.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [n]), null;
}
function LL(e, t, n) {
  if (qL(e, n)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const r = If(t);
  (!r || r === n.book) && t.update(() => wv(t, n.chapterNum, n.verseNum));
}
function qL(e, t) {
  const n = e.pendingEchoes.findIndex((r) => Pc(r, t));
  return n < 0 ? !1 : (e.pendingEchoes.splice(0, n + 1), e.phase = "idle", !0);
}
function Pv() {
  const e = w(), t = Zb(e);
  if (!t) return;
  const n = ph(), r = a0(t);
  if (!r && !n) return;
  const i = r ? parseInt(r.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = zd(t, e), { verseNum: o, verse: a } = RE(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: n?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function If(e) {
  return e.getEditorState().read(() => ph()?.getCode() || void 0);
}
function ph() {
  return Ee().getChildren().find(Ie);
}
function iy(e, t, n, r) {
  const i = r.hasCreated && !e.sawDocument;
  if (r.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    r.hasCreated && (!n || n === e.scrRef.book) && mu(e, t);
    return;
  }
  r.hasCreated && r.hasDestroyed ? (r.isSameDocumentReload || mu(e, t), e.phase = "navigating") : i && mu(e, t), n && n !== e.scrRef.book && $v(e, { ...e.scrRef, book: n }) && (e.phase = "navigating");
}
function mu(e, t) {
  queueMicrotask(() => {
    t.update(
      () => wv(t, e.scrRef.chapterNum, e.scrRef.verseNum)
    );
  });
}
function wv(e, t, n) {
  const r = w()?.clone();
  DL(t, n);
  const i = w();
  i && !(r && i.is(r)) && e.dispatchCommand(Qf, void 0);
}
function DL(e, t) {
  const n = Pv();
  if (n?.chapterNum === e && (n.verse ? Ov(t, n.verse) : n.verseNum === t))
    return;
  const r = Ee().getChildren(), i = Wb(r, e);
  if (!i) return;
  const s = p0(r, i), o = o0(s, !0);
  d0(s, o);
  let a;
  try {
    a = AE(s, t);
  } catch {
    return;
  }
  a && (me(a) ? !C(a.getFirstChild()) && Qs(a) || sr(a, 0) : KL(a));
}
function KL(e) {
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
  const s = A(r) && !D(r) ? Nv(r) : void 0;
  s ? s.select(0, 0) : sr(t, n);
}
function Nv(e) {
  const t = e.getFirstChild();
  if (C(t)) return t;
  if (A(t) && !D(t)) return Nv(t);
}
function Na(e) {
  return e.read(() => {
    const t = Ee().getChildren().find(ot);
    return `${ph()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function UL(e, t) {
  e.phase !== "navigating" && t && (BL(t, e.scrRef) || $v(e, FL(t, e.scrRef)));
}
function BL(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Ov(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Ov(e, t) {
  try {
    return _d(e, t);
  } catch {
    return !1;
  }
}
function FL(e, t) {
  const n = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (n.verse = e.verse), t.versificationStr != null && (n.versificationStr = t.versificationStr), n;
}
const zL = 8;
function $v(e, t) {
  return Pc(t, e.scrRef) || e.pendingEchoes.some((n) => Pc(n, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > zL && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function Pc(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function jL(e) {
  e.phase = "idle";
}
function VL(e) {
  return Ie(e) ? `${e.__code}` : $e(e) ? `${e.__marker} "${e.__number}"` : U(e) ? `${e.__marker}` : Wr(e) ? `${e.__marker} "${e.__number}"` : Lt(e) ? `${e.__caller}` : Ar(e) ? `${e.__marker} "${e.__number}"` : D(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : me(e) ? `${e.__marker}` : C(e) ? `"${e.__text}"${WL(e)}` : ue(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Ue(e) ? `${e.__marker} "${e.__number}"` : "";
}
function WL(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[qr]) : "";
}
function HL() {
  const [e] = Ce();
  return /* @__PURE__ */ P(
    $S,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: VL,
      editor: e
    }
  );
}
const Rv = by(null), sy = 4;
function GL({
  children: e,
  className: t,
  onClick: n,
  title: r
}) {
  const i = te(null), s = ky(Rv);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return H(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ P("button", { className: t, onClick: n, ref: i, title: r, type: "button", children: e });
}
function JL({
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
  }, [r, s]), /* @__PURE__ */ P(Rv.Provider, { value: l, children: /* @__PURE__ */ P("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function YL({
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
      p.style.top = `${h + d.offsetHeight + sy}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
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
          const { top: g } = p.getBoundingClientRect(), m = g + p.offsetHeight + sy;
          m !== h.getBoundingClientRect().top && (h.style.top = `${m}px`);
        }
      }
    };
    return document.addEventListener("scroll", d), () => {
      document.removeEventListener("scroll", d);
    };
  }, [c, a, l]), /* @__PURE__ */ Xe(Li, { children: [
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
    l && Ni(
      /* @__PURE__ */ P(JL, { dropDownRef: a, onClose: f, children: s }),
      document.body
    )
  ] });
}
const Lf = {
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
}, qf = {
  ...Lf,
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
function XL({
  editorRef: e,
  blockMarker: t,
  disabled: n = !1
}) {
  return /* @__PURE__ */ P(
    YL,
    {
      disabled: n,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + QL(t),
      buttonLabel: ZL(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Lf).map((r) => /* @__PURE__ */ Xe(
        GL,
        {
          className: "item block-marker " + eq(t === r),
          onClick: () => e.current?.formatPara(r),
          children: [
            /* @__PURE__ */ P("i", { className: "icon block-marker " + r }),
            /* @__PURE__ */ P("span", { className: "text usfm_" + r, children: Lf[r] })
          ]
        },
        r
      ))
    }
  );
}
function QL(e) {
  return e && e in qf ? e : "ban";
}
function ZL(e) {
  return e && e in qf ? qf[e] : "No Style";
}
function eq(e) {
  return e ? "active dropdown-item-active" : "";
}
function oy() {
  return /* @__PURE__ */ P("div", { className: "divider" });
}
const tq = hi(function({ editorRef: t, isReadonly: n = !1, onStateChange: r }, i) {
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
  ), [s]), /* @__PURE__ */ Xe(Li, { children: [
    /* @__PURE__ */ P(Fx, { onStateChange: h }),
    /* @__PURE__ */ Xe("div", { className: "toolbar", children: [
      /* @__PURE__ */ P(
        "button",
        {
          disabled: !u || n,
          onClick: () => {
            o.dispatchCommand(Ny, void 0);
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
            o.dispatchCommand(Oy, void 0);
          },
          title: Os ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ P("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ P(oy, {}),
      o === s && /* @__PURE__ */ Xe(Li, { children: [
        /* @__PURE__ */ P(
          XL,
          {
            editorRef: t,
            blockMarker: c,
            disabled: n
          }
        ),
        /* @__PURE__ */ P(oy, {})
      ] }),
      /* @__PURE__ */ P("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), nq = Zc(), rq = {}, iq = {}, ay = i_.filter((e) => e !== Zf);
function sq() {
  return /* @__PURE__ */ P("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function cy(e) {
  return e.type === "text" && e.offset !== 0 && e.offset !== e.getNode().getTextContentSize();
}
function ly() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return;
  const t = e.focus.getNode();
  return C(t) ? { key: t.getKey(), offset: e.focus.offset } : void 0;
}
function oq(e) {
  const t = [], n = (r, i) => r?.forEach((s, o) => {
    if (typeof s != "object") return;
    const a = [...i, o];
    s.type === "note" && t.push(Nt(a)), n(s.content, a);
  });
  return n(e?.content, []), t;
}
function aq(e, t) {
  return e.editorState === t.editorState && e.pendedKeys === t.pendedKeys && e.transientInput === t.transientInput && e.caretKey === t.caretKey && e.caretOffset === t.caretOffset && e.viewOptions === t.viewOptions && e.getMarker === t.getMarker;
}
function cq({
  listener: e
}) {
  const [t] = Ce();
  return js(
    () => t.registerUpdateListener((n) => e(n, t)),
    [t, e]
  ), null;
}
function Oa(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
function uy(e) {
  const t = e.getNextSiblings(), n = t.at(0), r = t.at(-1);
  if (!n || !r) return [];
  const i = A(r) ? r.getLastDescendant() ?? r : r;
  return Xc(n, i);
}
function fy(e, t, n) {
  LS(e, () => $s(t));
  const r = w();
  if (!E(r)) return;
  const i = /* @__PURE__ */ new Set();
  r.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    me(o) && i.add(o);
  }), i.forEach((s) => MC(s, t, n));
}
const Iv = hi(function({
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
  const f = te(null), d = te(null), p = te(null), h = te(null), g = te(t), m = te(!1), y = te(void 0), k = te(void 0), x = te(void 0), S = te({ entries: /* @__PURE__ */ new Map() }), _ = te(void 0), j = te(0), $ = te(!0), ne = te(void 0), [fe, I] = Ae(t), [K, ge] = Ae(0), [re, Le] = Ae(), {
    isReadonly: ye = !1,
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
  } = a ?? iq, ct = xn ?? nq, bt = Wo(ct) && (ct.markerMode !== "hidden" || !ct.hasSpacing || ct.hasGutterParaMarkers || ct.hasActiveTextFocusBox) ? {
    ...ct,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : ct, Tn = te(bt);
  yr(Tn.current, bt) || (Tn.current = bt);
  const ee = Tn.current, Te = ut(() => Pe ?? rq, [Pe]), Pr = ut(() => F, [F]), we = ut(
    () => kE(oe ?? ic),
    [oe]
  ), pr = te(c);
  yr(pr.current, c) || (pr.current = c);
  const pe = pr.current, qt = Wo(ee), Jt = ye || qt, L = bt !== ct;
  H(() => {
    qt && !ye && pe?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), L && pe?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), ee?.markerMode === "visible" && !ye && pe?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [qt, ye, L, pe, ee?.markerMode]);
  const V = te(null), G = ut(() => {
    if (ee.markerMode !== "editable") return;
    const O = oe ?? ic;
    return {
      getContext: () => V.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (R) => wR(
        O,
        R,
        Te.extraValidMarkers
      ),
      getEnterItems: (R) => NR(
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
    () => [gt, ...qt ? yP : il],
    [qt]
  ), Q = () => !!f.current && Ix(f.current), se = ut(
    () => ({
      namespace: "platformEditor",
      theme: { ...ST, showCharMarkerTitles: ee.showCharMarkerTitles },
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
  xs.initialize(pe);
  function ce(O) {
    if (O !== void 0 && !i$(O, Te.extraValidMarkers))
      throw new Error(`Unsupported character marker '${O}'`);
  }
  const qe = _e(() => {
    const O = f.current;
    if (!O) return g.current;
    const R = () => {
      if (!m.current) return;
      const lt = xs.deserializeEditorState(O.getEditorState(), ee);
      lt && (g.current = lt, m.current = !1);
    }, B = Nu(O), Y = k.current;
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
    if (je && aq(je.key, De)) return je.usj;
    const Mt = Se.toJSON(), ft = Se.read(
      () => z2(
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
      pendedKeys: Nu(O) ?? /* @__PURE__ */ new Set(),
      transientInput: k.current,
      lastKnownCaret: x.current,
      tier2: { viewOptions: ee, getMarker: we, logger: pe },
      nodes: Z,
      cache: S.current
    };
    return mo(R) && R.cache.entries.clear(), R;
  }, [ee, we, pe, Z]), sn = _e(
    (O) => {
      const R = f.current, B = Ne();
      if (!(!R || !B))
        return mo(B) ? O : R.getEditorState().read(() => {
          const Y = ry(B);
          return pL(B, Y, O);
        });
    },
    [Ne]
  );
  H(() => ($.current = !0, () => {
    $.current = !1;
  }), []);
  const Cn = _e(
    (O, R) => O.read(() => {
      const B = Ne(), Y = B && vL(ry(B));
      return !Y && E(w()) && pe?.warn(
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
  function ki(O, R, B) {
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
        ng(Y, R), R === "remote" && jt(Zf), Se || jt(Or), B && jt(B), f1(O, ee, Te, pe);
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
          ng(Y, void 0), Fe?.(), Se || eu(Y);
          const De = Y.getEditorState(), je = xs.deserializeEditorState(De, ee);
          if (!je) return;
          const Mt = !yr(g.current, je);
          Mt && (g.current = je);
          const ft = qe();
          if (ft && (Mt || !yr(fe, je))) {
            const lt = pg(O, De, "apply");
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
      f.current?.dispatchCommand(Ny, void 0);
    },
    redo() {
      f.current?.dispatchCommand(Oy, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      ae("cut"), f.current && mp(f.current);
    },
    copy() {
      f.current && gp(f.current);
    },
    paste() {
      ae("paste"), f.current && yp(f.current);
    },
    pastePlainText() {
      ae("paste as plain text"), f.current && bp(f.current);
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
          R && jt(Or), O.dispatchCommand(WC, void 0);
        },
        { discrete: !0 }
      ), B?.(), R && eu(O);
    },
    setTransientInput(O) {
      if (!O) {
        k.current = void 0;
        return;
      }
      const R = f.current?.getEditorState().read(() => {
        const B = w();
        return E(B) && B.isCollapsed() ? B.focus.key : void 0;
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
      ki(O, R);
    },
    replaceEmbedUpdate(O, R) {
      const B = f.current?.read(() => WE(O, R));
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
      return !R || mo(R) ? O.read(() => tl(ee)) : Cn(O, "getSelection");
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
        const B = el(R, ee);
        B !== void 0 && (Un(B), (!Ut().isEditable() || cy(B.anchor) && cy(B.focus)) && f.current?.dispatchCommand(hn, void 0));
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
        Dl(R),
        B,
        Fe,
        De,
        je,
        Mt
      );
    },
    removeAnnotation(O, R) {
      d.current?.removeAnnotation(Dl(O), R);
    },
    getAnnotationRanges(O, R) {
      return d.current?.getAnnotationRanges(Dl(O), R) ?? [];
    },
    formatPara(O) {
      ae("format a paragraph"), f.current?.update(
        () => {
          const R = w();
          if (!E(R)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${O}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const B = R.isBackward() ? R.focus : R.anchor, Y = Qe(B.getNode(), Ie);
          if (Y) {
            const Se = R.isBackward() ? R.anchor : R.focus, De = !R.isCollapsed() && !Y.is(Se.getNode()) && !Y.isParentOf(Se.getNode()) ? { key: Se.key, offset: Se.offset, type: Se.type } : void 0, je = Dr();
            if (je.anchor.set(B.key, B.offset, B.type), je.focus.set(B.key, B.offset, B.type), Un(je), !Pf(O, ee)) {
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
            if (!me(lt)) return;
            let Ct = lt.getNextSibling();
            for (; Ct; ) {
              const xi = Ct.is(ft), vn = Ct.getNextSibling();
              if (me(Ct)) {
                const Nr = Dr();
                Nr.anchor.set(Ct.getKey(), 0, "element"), Nr.focus.set(Ct.getKey(), Ct.getChildrenSize(), "element"), Un(Nr), fy(Nr, O, ee);
              }
              if (xi) break;
              Ct = vn;
            }
            return;
          }
          fy(R, O, ee);
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
          const B = w();
          E(B) && (R = bT(B, O, ee));
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
          const Y = w();
          E(Y) && (B = m$(Y, O, R));
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
          const Y = w();
          E(Y) && (B = y$(
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
      if (!uf(O, Te.extraValidMarkers))
        throw new Error(`Unsupported marker '${O}'`);
      const R = ff(
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
      if (!ye)
        return f.current?.getEditorState().read(() => KI());
    },
    applyMarkerMenuSelection(O, R) {
      if (ye) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!n)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!f.current) return;
      if (O.kind !== "closeTag" && !uf(O.marker, Te.extraValidMarkers))
        throw new Error(`Unsupported marker '${O.marker}'`);
      let B;
      return f.current.update(() => {
        B = GI(O, R, n, {
          expandedNoteKeyRef: y,
          viewOptions: ee,
          nodeOptions: Te,
          logger: c,
          styleInfo: oe
        });
      }), B;
    },
    splitParagraphWithMarker(O) {
      if (ye) throw new Error("Cannot split paragraph in readonly mode");
      f.current && f.current.update(() => {
        Pf(O, ee);
      });
    },
    commitTypedMarker(O, R) {
      if (ye) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!f.current) return !1;
      let B = !1;
      return f.current.update(() => {
        B = WI(O, R), B || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), B;
    },
    commitTypedCloser(O) {
      if (ye) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!f.current) return !1;
      let R = !1;
      return f.current.update(() => {
        R = OC(O), R || c?.warn(
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
          const Se = rx(
            O,
            R,
            Y,
            n,
            ee,
            Te,
            pe
          );
          Oa(Se, y);
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
          Fe && (Da(Fe, ee), Oa(Fe, y));
        });
        return;
      }
      const Y = oq(qe())[O], Se = Y ? sn({ start: { jsonPath: Y } }) : void 0;
      Se && R.update(() => {
        const [Fe, De] = Nn(Se.start, ee);
        if (!Fe || De === void 0) return;
        const je = D(Fe) ? Fe : Qe(Fe, D);
        D(je) ? (Da(je, ee), Oa(je, y)) : C(Fe) && Fe.select(De, De);
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
          Se && sx(Se);
        },
        { discrete: !0 }
      ), Y?.(), B) {
        eu(R);
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
        (B?.field === "category" ? dP(Y, R, Se) || Sg(Y, 0) : Sg(Y, R, Se)) || Da(Y, ee), Oa(Y, y);
      });
    },
    getNoteOps(O) {
      const R = f.current;
      return R ? ys(R, () => {
        const B = br(O);
        if (B)
          return Xc(B);
      }) : void 0;
    },
    getOpsAfterNote(O) {
      const R = f.current;
      return R ? ys(R, () => {
        const B = br(O);
        return B ? uy(B) : void 0;
      }) : void 0;
    },
    takeOpsAfterNote(O) {
      const R = f.current, B = R ? ys(R, () => {
        const De = br(O);
        if (!De) return;
        const je = Vd(De, "apply");
        return { ops: uy(De), notePosition: je };
      }) : void 0;
      if (!B) return;
      const { ops: Y, notePosition: Se } = B;
      if (Y.length === 0 || Se === void 0) return Y;
      const Fe = Y.reduce(
        (De, je) => De + (typeof je.insert == "string" ? je.insert.length : 1),
        0
      );
      return ki([{ retain: Se + 1 }, { delete: Fe }], "remote", zf), Y;
    },
    getNoteIndex(O) {
      const R = f.current;
      return R ? ys(R, () => Gd(O)) : void 0;
    },
    getNoteKey(O) {
      const R = f.current;
      return R ? ys(R, () => br(O)?.getKey()) : void 0;
    },
    highlightNote(O) {
      p.current?.setHighlightedNote(O);
    },
    get toolbarEndRef() {
      return h;
    }
  };
  V.current = ro, Nc(u, () => ro), H(() => {
    const O = f.current;
    if (O)
      return O.registerUpdateListener(({ editorState: R }) => {
        const B = R.read(ly);
        B && (x.current = B);
      });
  }, []);
  const as = te({ onUsjChange: s, viewOptions: ee, isBlockVerse: qt, readSettledUsj: qe });
  as.current = { onUsjChange: s, viewOptions: ee, isBlockVerse: qt, readSettledUsj: qe };
  const ba = _e((O, R) => {
    const { editorState: B, dirtyElements: Y, dirtyLeaves: Se, tags: Fe } = O;
    if (Y.size === 0 && Se.size === 0) return;
    if (Fe.has(ia)) {
      const vn = as.current, Nr = !vn.isBlockVerse && xs.deserializeEditorState(B, vn.viewOptions);
      Nr && (g.current = Nr), ne.current = g.current;
      return;
    }
    if (qd(R)) return;
    if (ay.some((vn) => Fe.has(vn))) {
      m.current = !0;
      return;
    }
    const De = as.current;
    if (De.isBlockVerse) return;
    Sb(R, B, Fe);
    const je = B.read(ly);
    je && (x.current = je);
    const Mt = l1(O, {
      ignoreTags: ay
    }), ft = Mt ? [] : new Cs(B.read(() => u1(R, O))).chop().ops;
    if (!Mt) {
      const vn = xs.deserializeEditorState(B, De.viewOptions);
      vn && (g.current = vn);
    }
    if (!De.onUsjChange) return;
    const lt = De.readSettledUsj();
    if (!lt || ft.length === 0 && yr(ne.current, lt)) return;
    if (ne.current = lt, ft.length === 0) {
      De.onUsjChange(lt, void 0, "local", void 0);
      return;
    }
    const Ct = pg(ft, B), xi = Ct && !O.prevEditorState.read(() => X(Ct)) ? Ct : void 0;
    De.onUsjChange(lt, ft, "local", xi);
  }, []), cs = _e(
    (O) => {
      Le(O.contextMarker), o?.(O);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Xe($y, { initialConfig: se, children: [
      /* @__PURE__ */ P(Tw, { isEditable: !Jt }),
      /* @__PURE__ */ Xe("div", { className: "editor-container", children: [
        rt ? /* @__PURE__ */ P(Fx, { onStateChange: cs }) : /* @__PURE__ */ P(
          "div",
          {
            className: "editor-toolbar-container" + (Jt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ P(
              tq,
              {
                ref: h,
                editorRef: V,
                isReadonly: Jt,
                onStateChange: cs
              }
            )
          }
        ),
        /* @__PURE__ */ Xe("div", { className: "editor-inner", children: [
          /* @__PURE__ */ P(Iy, { editorRef: f }),
          /* @__PURE__ */ P(
            IS,
            {
              contentEditable: /* @__PURE__ */ P(
                Ry,
                {
                  className: `editor-input usfm ${AA(ee).join(" ")}${ee.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ee.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: rn
                }
              ),
              placeholder: /* @__PURE__ */ P(sq, {}),
              ErrorBoundary: Ly
            }
          ),
          rt && /* @__PURE__ */ P(xw, {}),
          /* @__PURE__ */ P(qy, {}),
          n && r && /* @__PURE__ */ P(IL, { scrRef: n, onScrRefChange: r }),
          n && !rt && /* @__PURE__ */ P(
            ZN,
            {
              trigger: dr,
              scrRef: n,
              contextMarker: re,
              getMarkerAction: (O) => ff(
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
            Mw,
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
          /* @__PURE__ */ P(Jw, { onChange: wr, viewOptions: ee }),
          /* @__PURE__ */ P(cq, { listener: ba }),
          /* @__PURE__ */ P(C$, { viewOptions: ee }),
          /* @__PURE__ */ P(c1, { ref: d, logger: pe, viewOptions: ee }),
          /* @__PURE__ */ P(U1, { viewOptions: ee }),
          /* @__PURE__ */ P(ew, {}),
          /* @__PURE__ */ P(cw, {}),
          ee?.markerMode !== "editable" && /* @__PURE__ */ P(lw, { logger: pe }),
          /* @__PURE__ */ P(hw, { options: Pr }),
          /* @__PURE__ */ P(hR, { limit: We, viewOptions: ee }),
          /* @__PURE__ */ P(kw, {}),
          /* @__PURE__ */ P(vw, {}),
          /* @__PURE__ */ P(_w, {}),
          /* @__PURE__ */ P(JI, {}),
          /* @__PURE__ */ P(
            P2,
            {
              viewOptions: ee,
              getMarker: we,
              logger: pe,
              markerSettleDelayMs: ve,
              structureProtectionMode: nt,
              copyLimit: We
            }
          ),
          ee?.markerMode === "visible" && /* @__PURE__ */ P(pR, { viewOptions: ee, copyLimit: We }),
          /* @__PURE__ */ P(
            I2,
            {
              styleInfo: oe,
              viewOptions: ee,
              logger: pe
            }
          ),
          /* @__PURE__ */ P(Ew, { ref: p }),
          /* @__PURE__ */ P(
            Aw,
            {
              expandedNoteKeyRef: y,
              nodeOptions: Te,
              viewOptions: ee,
              logger: pe
            }
          ),
          /* @__PURE__ */ P(Gw, {}),
          /* @__PURE__ */ P(I1, {}),
          /* @__PURE__ */ P(N1, {}),
          /* @__PURE__ */ P(j2, { viewOptions: ee, logger: pe }),
          /* @__PURE__ */ P(Yw, {}),
          /* @__PURE__ */ P(IN, { structureProtectionMode: nt }),
          /* @__PURE__ */ P(LN, { textDirection: Je }),
          /* @__PURE__ */ P(DN, {}),
          /* @__PURE__ */ P(XN, {}),
          l
        ] }),
        he && /* @__PURE__ */ P(HL, {})
      ] })
    ] }, ee.verseLayout ?? "inline")
  );
}), kD = hi(function(t, n) {
  const { children: r, ...i } = t;
  return /* @__PURE__ */ P(Iv, { ref: n, ...i });
});
function dy(e, t) {
  const n = C(e) ? j_(e, Vt, t) ?? [] : [], r = R0(e, Vt, t);
  return [.../* @__PURE__ */ new Set([...n, ...r])];
}
function lq(e, t, n) {
  Zy(Vt, e, t);
  for (const r of n) {
    const i = X(r);
    i && hk(i, Vt, e);
  }
}
function uq(e) {
  const t = Array.from(e, (i) => X(i)).filter(
    (i) => i !== null
  );
  t.sort((i, s) => i.isBefore(s) ? -1 : 1);
  const n = t[0];
  if (!n) return;
  if (C(n)) {
    const [i] = Pd(n);
    n.select(i, i);
    return;
  }
  const r = n.getParent();
  r && r.select(n.getIndexWithinParent(), n.getIndexWithinParent());
}
function Lv() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function wc(e, t, n, r, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: n === void 0 ? Lv() : n,
    timeStamp: r === void 0 ? performance.timeOrigin + performance.now() : r,
    type: "comment"
  };
}
function qv(e, t, n) {
  return {
    comments: t,
    id: n === void 0 ? Lv() : n,
    quote: e,
    type: "thread"
  };
}
function py(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function fq(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function yu(e) {
  const t = e._changeListeners;
  for (const n of t)
    n();
}
class dq {
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
    this._comments = t, yu(this);
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
          const c = py(a);
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
    this._comments = i, yu(this);
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
          const c = py(a);
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
    return this._comments = r, yu(this), t.type === "comment" ? {
      index: s,
      markedComment: fq(t)
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
    return t !== null ? t.doc.get("comments", Mh) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const n = new Eh(), r = t.type, i = t.id;
    if (n.set("type", r), n.set("id", i), r === "comment")
      n.set("author", t.author), n.set("content", t.content), n.set("deleted", t.deleted), n.set("timeStamp", t.timeStamp);
    else {
      n.set("quote", t.quote);
      const s = new Mh();
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
      XS,
      (a) => (r !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), r()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Xt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof QS) {
            const u = l.target, f = l.delta;
            let d = 0;
            for (const p of f) {
              const h = p.insert, g = p.retain, m = p.delete, y = u.parent, k = u === n ? void 0 : y instanceof Eh && this._comments.find((x) => x.id === y.get("id"));
              if (Array.isArray(h)) {
                const x = d;
                h.slice().reverse().forEach((S) => {
                  const _ = S.get("id"), $ = S.get("type") === "thread" ? qv(
                    S.get("quote"),
                    S.get("comments").toArray().map(
                      (ne) => wc(
                        ne.get("content"),
                        ne.get("author"),
                        ne.get("id"),
                        ne.get("timeStamp"),
                        ne.get("deleted")
                      )
                    ),
                    _
                  ) : wc(
                    S.get("content"),
                    S.get("author"),
                    _,
                    S.get("timeStamp"),
                    S.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment($, k, x);
                  });
                });
              } else if (typeof g == "number")
                d += g;
              else if (typeof m == "number")
                for (let x = 0; x < m; x++) {
                  const S = k === void 0 || k === !1 ? this._comments[d] : k.comments[d];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(S, k);
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
function pq(e) {
  const [t, n] = Ae(e.getComments());
  return H(() => e.registerOnChange(() => {
    n(e.getComments());
  }), [e]), t;
}
function hq({
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
function gq({
  onClose: e,
  children: t,
  title: n,
  closeOnClickOutside: r = !1
}) {
  return Ni(
    /* @__PURE__ */ P(hq, { onClose: e, title: n, closeOnClickOutside: r, children: t }),
    document.body
  );
}
function Dv() {
  const [e, t] = Ae(null), n = _e(() => {
    t(null);
  }, []), r = ut(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ P(gq, { onClose: n, title: s, closeOnClickOutside: a, children: o });
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
const mq = {
  ...ST,
  paragraph: "CommentEditorTheme__paragraph"
};
function yq(...e) {
  return e.filter(Boolean).join(" ");
}
function pi({
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
      className: yq(
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
function bq({
  className: e
}) {
  return /* @__PURE__ */ P(Ry, { className: e || "ContentEditable__root" });
}
function kq({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ P("div", { className: t || "Placeholder__root", children: e });
}
const hy = Uf("INSERT_INLINE_COMMAND");
function xq({
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
function Tq({ onEscape: e }) {
  const [t] = Ce();
  return H(() => t.registerCommand(
    wy,
    (n) => e(n),
    kr
  ), [t, e]), null;
}
function Kv({
  className: e,
  autoFocus: t,
  onEscape: n,
  onChange: r,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ P($y, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: mq
  }, children: /* @__PURE__ */ Xe("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ P(
      GS,
      {
        contentEditable: /* @__PURE__ */ P(bq, { className: e }),
        placeholder: /* @__PURE__ */ P(kq, { children: s }),
        ErrorBoundary: Ly
      }
    ),
    /* @__PURE__ */ P(HS, { onChange: r }),
    /* @__PURE__ */ P(qy, {}),
    t !== !1 && /* @__PURE__ */ P(jS, {}),
    /* @__PURE__ */ P(Tq, { onEscape: n }),
    /* @__PURE__ */ P(VS, {}),
    i !== void 0 && /* @__PURE__ */ P(Iy, { editorRef: i })
  ] }) });
}
function Uv(e, t) {
  return _e(
    (n, r) => {
      n.read(() => {
        e(JS()), t(!YS(r.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function Cq({
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
  ), l = te(null), u = Fv(), f = _e(() => {
    e.getEditorState().read(() => {
      const g = w();
      if (E(g)) {
        l.current = g.clone();
        const m = g.anchor, y = g.focus, k = qS(
          e,
          m.getNode(),
          m.offset,
          y.getNode(),
          y.offset
        ), x = a.current;
        if (k !== null && x !== null) {
          const { left: S, bottom: _, width: j } = k.getBoundingClientRect(), $ = DS(e, k);
          let ne = $.length === 1 ? S + j / 2 - 125 : S - 125;
          ne < 10 && (ne = 10), x.style.left = `${ne}px`, x.style.top = `${_ + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const fe = $.length, { container: I } = c, K = c.elements, ge = K.length;
          for (let re = 0; re < fe; re++) {
            const Le = $[re];
            let ye = K[re];
            ye === void 0 && (ye = document.createElement("span"), K[re] = ye, I.appendChild(ye));
            const rt = `position:absolute;top:${Le.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${Le.left}px;height:${Le.height}px;width:${Le.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            ye.style.cssText = rt;
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
        qv(g, [wc(r, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = Uv(i, o);
  return /* @__PURE__ */ Xe("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ P(
      Kv,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: d,
        onChange: h
      }
    ),
    /* @__PURE__ */ Xe("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ P(pi, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ P(
        pi,
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
function vq({
  submitAddComment: e,
  thread: t,
  placeholder: n
}) {
  const [r, i] = Ae(""), [s, o] = Ae(!1), a = te(null), c = Fv(), l = Uv(i, o);
  return /* @__PURE__ */ Xe(Li, { children: [
    /* @__PURE__ */ P(
      Kv,
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
      pi,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(wc(r, c), !1, t);
            const f = a.current;
            f !== null && f.dispatchCommand(AS, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ P("i", { className: "send" })
      }
    )
  ] });
}
function Bv({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: n,
  thread: r = void 0
}) {
  return /* @__PURE__ */ Xe(Li, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Xe("div", { className: "Modal__content", children: [
      /* @__PURE__ */ P(
        pi,
        {
          onClick: () => {
            t(e, r), n();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ P(
        pi,
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
function gy({
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Dv();
  return /* @__PURE__ */ Xe("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Xe("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ P("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Xe("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : r.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ P("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Xe(Li, { children: [
      /* @__PURE__ */ P(
        pi,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ P(
              Bv,
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
function Sq({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: n,
  displayIndex: r,
  listRef: i,
  submitAddComment: s,
  markNodeMap: o
}) {
  const [a] = Ce(), [c, l] = Ae(0), [u, f] = Dv(), d = ut(
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
                  const S = Array.from(y)[0], _ = X(S);
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
                uq(x);
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
                pi,
                {
                  onClick: () => {
                    f("Delete Thread", (y) => /* @__PURE__ */ P(
                      Bv,
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
              gy,
              {
                comment: y,
                deleteComment: n,
                thread: p,
                rtf: d
              },
              y.id
            )) }),
            /* @__PURE__ */ P("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ P(
              vq,
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
      gy,
      {
        comment: p,
        deleteComment: n,
        rtf: d
      },
      h
    );
  }) });
}
function _q({
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
      Sq,
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
function Fv() {
  const e = Dy(), { yjsDocMap: t, name: n } = e;
  return t.has("comments") ? n : "Scripture User";
}
function Mq({
  providerFactory: e,
  setCommentStore: t,
  onChange: n,
  showCommentsContainerRef: r,
  commentContainerRef: i,
  logger: s
}) {
  const o = Dy(), [a] = Ce(), c = ut(() => {
    const fe = new dq(a, s);
    return n && fe.registerOnChange(n), t?.(fe), fe;
  }, [a, s, n, t]), l = pq(c), u = ut(() => /* @__PURE__ */ new Map(), []), f = bx(a), [d, p] = Ae(), [h, g] = Ae([]), [m, y] = Ae(!1), [k, x] = Ae(!1), { yjsDocMap: S } = o;
  H(() => {
    if (e) {
      const fe = e("comments", S);
      return c.registerCollaboration(fe);
    }
    return () => {
    };
  }, [c, e, S]);
  const _ = _e(() => {
    a.update(() => {
      const fe = w();
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
            lq(K, ge ?? [], re);
          });
        });
      }
    },
    [c, f, a, u]
  ), $ = _e(
    (fe, I, K, ge) => {
      c.addComment(fe, K), I && (a.update(() => {
        E(ge) && Ld(ge, Vt, fe.id);
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
        const ye = a.getElementByKey(Le);
        ye !== null && (ye.classList.add("selected"), fe.push(ye), K());
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
      Jf(
        a,
        gt,
        (I) => Ki(I.getTypedIDs()),
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
              for (const ye of Le) {
                let nt = u.get(ye);
                fe.set(K, Le), ge === "destroyed" ? nt !== void 0 && (nt.delete(K), nt.size === 0 && u.delete(ye)) : (nt === void 0 && (nt = /* @__PURE__ */ new Set(), u.set(ye, nt)), nt.has(K) || nt.add(K));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: I, tags: K }) => {
        I.read(() => {
          const ge = w();
          let re = !1, Le = !1;
          if (E(ge)) {
            const { anchor: ye } = ge, nt = ye.getNode();
            if (C(nt)) {
              const rt = dy(nt, ye.offset);
              g(rt), re = !0, ge.isCollapsed() || (p(nt.getKey()), Le = !0);
            } else if (ye.type === "element" && A(nt)) {
              const rt = nt.getChildren(), rn = /* @__PURE__ */ new Set();
              for (const [Je, dr] of [
                [rt[ye.offset - 1], !0],
                [rt[ye.offset], !1]
              ]) {
                if (!Je) continue;
                const xn = dr && C(Je) ? Je.getTextContentSize() : 0;
                dy(Je, xn).forEach((Pe) => rn.add(Pe));
              }
              rn.size > 0 && (g([...rn]), re = !0);
            }
          }
          re || g((ye) => ye.length === 0 ? ye : []), Le || p(null), !K.has("collaboration") && E(ge) && y(!1);
        });
      }),
      a.registerCommand(
        hy,
        () => {
          const I = window.getSelection();
          return I !== null && I.removeAllRanges(), y(!0), !0;
        },
        qi
      )
    );
  }, [a, u]);
  const ne = () => {
    a.dispatchCommand(hy, void 0);
  };
  return /* @__PURE__ */ Xe(Li, { children: [
    m && Ni(
      /* @__PURE__ */ P(
        Cq,
        {
          editor: a,
          cancelAddComment: _,
          submitAddComment: $
        }
      ),
      document.body
    ),
    d != null && !m && Ni(
      /* @__PURE__ */ P(
        xq,
        {
          anchorKey: d,
          editor: a,
          showComments: k,
          onAddComment: ne
        }
      ),
      document.body
    ),
    r !== null && Ni(
      /* @__PURE__ */ P(
        pi,
        {
          className: `CommentPlugin_ShowCommentsButton ${k ? "active" : ""}`,
          onClick: () => x(!k),
          title: k ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ P("i", { className: "comments" })
        }
      ),
      r?.current ?? document.body
    ),
    k && Ni(
      /* @__PURE__ */ P(
        _q,
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
function Eq() {
  const e = te(void 0), t = _e((n) => {
    e.current = n;
  }, []);
  return [e, t];
}
function Aq(e, t) {
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
function Pq(e, t) {
  H(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (n) => {
      Aq(n, t);
    };
  }, [t, e]);
}
const xD = hi(function(t, n) {
  const r = te(null), i = te(!0), s = te(null), [o, a] = Ae(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: f, ...d } = t, { logger: p, options: { isReadonly: h, view: g } = {} } = t, m = (h ?? !1) || Wo(g), [y, k] = Eq();
  Pq(d, y), H(() => {
    if (process.env.NODE_ENV !== "production") {
      const _ = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(_), p || console.warn(_);
    }
  }, [p]), Nc(n, () => ({
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
  ), S = _e(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const _ = y.current?.getComments();
    l(_);
  }, [y, i, l]);
  return H(() => (a(r.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ P(WS, { children: /* @__PURE__ */ Xe(Iv, { ref: r, onUsjChange: x, ...d, children: [
    /* @__PURE__ */ P(
      Mq,
      {
        setCommentStore: k,
        onChange: S,
        showCommentsContainerRef: m ? null : f ?? o,
        commentContainerRef: s,
        logger: d.logger
      }
    ),
    /* @__PURE__ */ P("div", { ref: s, className: "comment-container" })
  ] }) });
});
function wi(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function wq(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function Nq(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const Oq = /^[#\w().,%/\s-]+$/;
function Rr(e) {
  return e != null;
}
const $q = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, Rq = {
  left: "right",
  right: "left"
}, Iq = "var(--usj-font-fallback, serif)";
function zv(e, t) {
  const n = [e];
  return t && t !== e && n.push(t), `font-family: ${n.map((i) => `"${wq(i)}"`).join(", ")}, ${Iq}`;
}
const Df = ".editor-input.usfm", Lq = /^[\w.#[\]="':()>+~*,\s-]+$/;
function qq(e) {
  return Lq.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Df}".`
  ), Df);
}
function Dq(e, t, n, r, i) {
  const s = [];
  if (t.fontName && s.push(zv(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (Oq.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Rr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Rr(t.firstLineIndent) && s.push(`text-indent: ${wi(t.firstLineIndent * 20 * n)}vw`), Rr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${r ? "right" : "left"}: ${wi(t.leftMargin * 20 * n)}vw`), Rr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${r ? "left" : "right"}: ${wi(t.rightMargin * 20 * n)}vw`
  ), Rr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${wi(t.spaceBefore * n)}pt`), Rr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${wi(t.spaceAfter * n)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = $q[r ? Rq[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const my = { c: 150, ca: 133, cp: 150 };
function yy(e, t) {
  return e && Rr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function Kq(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Rr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const r = yy(e.markers.c, my.c);
  return ["ca", "cp"].map((i) => {
    const s = yy(
      e.markers[i],
      my[i]
    ), o = wi(s * 100 / r);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function TD(e, t = {}) {
  const { zoom: n = 1, rtl: r = !1, containerSelector: i = Df } = t, s = qq(i), o = [], a = [];
  e.defaultFont && a.push(zv(e.defaultFont)), Rr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${wi(e.defaultFontSize * n)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = Dq(c, l, n, r, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${Nq(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...Kq(e, s)), o.join(`
`);
}
export {
  Kk as BLOCK_VERSE_VIEW_MODE,
  v as CategoryType,
  kD as Editorial,
  Lo as GENERATOR_NOTE_CALLER,
  Ky as HIDDEN_NOTE_CALLER,
  xD as Marginal,
  T as MarkerType,
  Dk as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Xd as STANDARD_VIEW_MODE,
  ic as defaultStyleInfo,
  bD as directionToNames,
  MP as filterAndRankItems,
  TD as generateUsjCss,
  mD as getDefaultViewMode,
  Zc as getDefaultViewOptions,
  NR as getEnterMenuItems,
  wR as getMarkerMenuItems,
  yD as getViewMode,
  ep as getViewOptions,
  Wo as isBlockVerseLayout,
  Xr as isInsertEmbedOpOfType,
  SA as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
