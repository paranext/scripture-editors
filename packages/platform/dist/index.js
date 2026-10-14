import { jsx as P, jsxs as Qe, Fragment as Li } from "react/jsx-runtime";
import { forwardRef as hi, useState as Ae, useRef as te, useCallback as Me, useEffect as H, useMemo as ut, memo as lS, createContext as ky, useContext as xy, Children as uS, isValidElement as fS, cloneElement as dS, useLayoutEffect as Gs, useImperativeHandle as Lc } from "react";
import { assertSafeKey as Tt, isValidBookCode as pS, MARKER_OBJECT_PROPS as hS, USJ_VERSION as nr, USJ_TYPE as rr, indexesFromUsjJsonPath as In, isUsjTextContentLocation as Lr, usjJsonPathFromIndexes as Nt, isUsjPropertyValueLocation as Lo, isUsjClosingMarkerLocation as qi, isUsjClosingAttributeMarkerLocation as qo, isUsjAttributeKeyLocation as Do, isUsjAttributeMarkerLocation as qc, isUsjMarkerLocation as jf, getUsjDocumentLocationTypeName as gS, EMPTY_USJ as Ty } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as yt, $parseSerializedNode as qr, createCommand as Vf, DecoratorNode as aa, ElementNode as lr, isHTMLElement as Xi, TextNode as st, $isRangeSelection as E, $getEditor as Ft, $getNodeByKey as X, $isTextNode as v, createState as Js, $getState as de, $getSelection as N, $isNodeSelection as Dc, ParagraphNode as Wf, $isRootNode as An, HISTORIC_TAG as Kc, $createTextNode as Re, $setState as Gt, $isElementNode as A, $getCommonAncestor as mS, $isLineBreakNode as Qi, NODE_STATE_KEY as Dr, $isDecoratorNode as bn, $addUpdateTag as Wt, $getRoot as Ce, $createRangeSelection as Kr, $createPoint as Zt, $setSelection as Fn, SELECTION_CHANGE_COMMAND as gn, $getCharacterOffsets as Hf, KEY_DOWN_COMMAND as _r, COMMAND_PRIORITY_HIGH as Ge, SELECTION_INSERT_CLIPBOARD_NODES_COMMAND as yS, COMMAND_PRIORITY_CRITICAL as He, $getNearestNodeFromDOMNode as Zi, HISTORY_MERGE_TAG as Gf, CLICK_COMMAND as Uc, COMMAND_PRIORITY_EDITOR as Di, DELETE_CHARACTER_COMMAND as Bc, DELETE_WORD_COMMAND as Jf, DELETE_LINE_COMMAND as Qa, COMMAND_PRIORITY_NORMAL as kr, CONTROLLED_TEXT_INSERTION_COMMAND as ca, PASTE_COMMAND as er, CUT_COMMAND as ir, REMOVE_TEXT_COMMAND as vy, isDOMNode as Cy, DROP_COMMAND as Yf, COPY_COMMAND as Is, COMMAND_PRIORITY_LOW as Qt, getDOMSelection as bS, isSelectionWithinEditor as Sy, $createRangeSelectionFromDom as _y, isDOMTextNode as kS, BLUR_COMMAND as Xf, SKIP_DOM_SELECTION_TAG as Or, CLEAR_HISTORY_COMMAND as xS, INSERT_PARAGRAPH_COMMAND as Ko, INSERT_LINE_BREAK_COMMAND as TS, SELECT_ALL_COMMAND as My, $selectAll as vS, $isRootOrShadowRoot as Qf, CAN_UNDO_COMMAND as CS, CAN_REDO_COMMAND as SS, DRAGSTART_COMMAND as _S, $createNodeSelection as Ey, $hasUpdateTag as MS, getDOMSelectionFromTarget as ES, $onUpdate as Ay, KEY_ENTER_COMMAND as Py, LineBreakNode as wy, $copyNode as AS, FOCUS_COMMAND as PS, createEditor as Zf, isExactShortcutMatch as wS, getDOMTextNode as NS, KEY_ESCAPE_COMMAND as Ny, UNDO_COMMAND as Oy, REDO_COMMAND as $y, CLEAR_EDITOR_COMMAND as OS } from "lexical";
import { addClassNamesToElement as vo, removeClassNamesFromElement as Da, $findMatchingParent as Ze, $dfsIterator as Fc, $dfs as es, mergeRegister as tt, registerNestedElementResolver as ed, $unwrapNode as Cu, IS_APPLE as Ls } from "@lexical/utils";
import { useLexicalNodeSelection as $S } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Xn } from "fast-equals";
import Es from "quill-delta";
import { useLexicalComposerContext as ve } from "@lexical/react/LexicalComposerContext";
import { graphemeSegments as RS } from "unicode-segmenter/grapheme";
import { copyToClipboard as IS, $getLexicalContent as LS } from "@lexical/clipboard";
import { TreeView as qS } from "@lexical/react/LexicalTreeView";
import * as DS from "react-dom";
import { createPortal as Ni } from "react-dom";
import { LexicalComposer as Ry } from "@lexical/react/LexicalComposer";
import { ContentEditable as Iy } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Ly } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as qy } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Dy } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as KS } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as US, createDOMRange as BS, createRectsFromDOMRange as FS } from "@lexical/selection";
import { autoUpdate as zS, computePosition as jS, shift as VS, flip as WS } from "@floating-ui/dom";
import { $generateNodesFromDOM as HS } from "@lexical/html";
import { AutoFocusPlugin as GS } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as JS } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Ky, LexicalCollaboration as YS } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as XS } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as QS } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as ZS, $isRootTextContentEmpty as e_ } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as t_ } from "@lexical/yjs";
import { Array as Ph, Map as wh, YArrayEvent as n_ } from "yjs";
const Ll = (e) => yt(qr(e)), r_ = {
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
function td(e) {
  return r_[e];
}
const D = " ", Uo = "​", Pt = D, nd = `${D}|`, zn = "p", Bo = "+", Uy = "-", gi = "immutable-note-caller", By = "immutable-verse", Za = "chapter", Su = "verse", Nh = "invalid", i_ = "text-spacing", s_ = "formatted-font", o_ = "marker-", la = "external-usj-mutation", a_ = "selection-change", $i = "cursor-change", rd = Vf("APP_PLACED_CARET_COMMAND"), _u = "annotation-change", Ka = "typed-mark-wrap", id = "delta-change", Fy = "marker-settle", c_ = [
  la,
  a_,
  $i,
  _u,
  id
], zy = 2, Ki = "zmsc-s", ws = "zmsc-e", l_ = [Ki, ws], u_ = [
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
  Ki,
  ws
], jy = 1, sd = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], f_ = sd.filter((e) => e !== "sid" && e !== "eid");
class sr extends aa {
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
    return new sr(n, r, i, s, a, o);
  }
  static importJSON(t) {
    return Wy().updateFromJSON(t);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (u_.includes(t) || t.startsWith("z") || (n?.includes(t) ?? !1));
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
      version: jy
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Vy(e) {
  return l_.includes(e);
}
function Wy(e, t, n, r, i) {
  return yt(new sr(e, t, n, r, void 0, i));
}
function Ke(e) {
  return e instanceof sr;
}
const od = "f", d_ = [
  // Footnote
  od,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function Aa(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const p_ = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Hy = 1;
class Je extends lr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = od, n, r = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = n ?? (Aa(t) === "crossref" ? Uy : Bo), this.__isCollapsed = r, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: n, __caller: r, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Je(n, r, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => g_(t) ? {
        conversion: h_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ad().updateFromJSON(t);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (d_.includes(t) || (n?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", Aa(this.__marker)), t;
  }
  updateDOM(t, n) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (n.setAttribute("data-marker", this.__marker), n.classList.remove(`usfm_${t.__marker}`), n.classList.add(`usfm_${this.__marker}`), n.setAttribute("data-note-kind", Aa(this.__marker))), t.__caller !== this.__caller && n.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Xi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), n.setAttribute("data-caller", this.getCaller()), n.setAttribute("data-note-kind", Aa(this.getMarker()))), { element: n };
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
      version: Hy
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
function h_(e) {
  const t = e.getAttribute("data-marker") ?? "f", n = e.getAttribute("data-caller") ?? "", r = e.classList.contains("collapsed");
  return { node: ad(t, n, r) };
}
function ad(e, t, n, r, i) {
  return yt(new Je(e, t, n, r, i));
}
function g_(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Je.isValidMarker(t) && e.classList.contains(Je.getType());
}
function q(e) {
  return e instanceof Je;
}
function m_(e) {
  return e?.type === Je.getType();
}
var C;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(C || (C = {}));
var T;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(T || (T = {}));
const Mu = {
  id: {
    category: C.FileIdentification,
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
    category: C.FileIdentification,
    type: T.Paragraph,
    description: "File markup version information",
    hasEndMarker: !1,
    children: void 0
  },
  ide: {
    category: C.FileIdentification,
    type: T.Paragraph,
    description: "File encoding information",
    hasEndMarker: !1,
    children: {
      Remarks: ["rem", "sts"]
    }
  },
  h: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Running header text for a book (basic)",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h1: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Running header text",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h2: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Running header text, left side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h3: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Running header text, right side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  toc1: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc2: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc3: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  toca1: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Alternative language long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca2: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Alternative language short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca3: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Alternative language book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  rem: {
    category: C.Remarks,
    type: T.Paragraph,
    description: "Comments and remarks",
    hasEndMarker: !1,
    children: void 0
  },
  sts: {
    category: C.Remarks,
    type: T.Paragraph,
    description: "Status of this file",
    hasEndMarker: !1,
    children: void 0
  },
  restore: {
    category: C.Remarks,
    type: T.Paragraph,
    description: "Project restore information",
    hasEndMarker: !1,
    children: void 0
  },
  imt: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt1: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt2: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt3: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 3",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt4: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 4 (usually within parenthesis)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte1: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte2: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction major title at introduction end, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is: {
    category: C.Introduction,
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
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction section heading, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is2: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction section heading, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  iot: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction outline title (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  io: {
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
    type: T.Character,
    description: "Introduction references range for outline entry; for marking references separately",
    hasEndMarker: !0,
    children: void 0
  },
  ip: {
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction blank line",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"]
    }
  },
  iq: {
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction explanatory or bridge text (e.g. explanation of missing book in Short Old Testament)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  iqt: {
    category: C.Introduction,
    type: T.Character,
    description: "For quoted scripture text appearing in the introduction",
    hasEndMarker: !0,
    children: void 0
  },
  ie: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction ending marker",
    hasEndMarker: !1,
    children: void 0
  },
  c: {
    category: C.DivisionMarks,
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
    category: C.DivisionMarks,
    type: T.Character,
    description: "Second (alternate) chapter number (for coding dual versification; useful for places where different traditions of chapter breaks need to be supported in the same translation)",
    hasEndMarker: !0,
    children: void 0
  },
  cp: {
    category: C.DivisionMarks,
    type: T.Paragraph,
    description: "Published chapter number (chapter string that should appear in the published text)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"]
    }
  },
  cl: {
    category: C.DivisionMarks,
    type: T.Paragraph,
    description: "Chapter label used for translations that add a word such as 'Chapter' before chapter numbers (e.g. Psalms). The subsequent text is the chapter label.",
    hasEndMarker: !1,
    children: void 0
  },
  cd: {
    category: C.DivisionMarks,
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
    category: C.DivisionMarks,
    type: T.Character,
    description: "A verse number (Necessary for normal paratext operation) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  va: {
    category: C.DivisionMarks,
    type: T.Character,
    description: "Second (alternate) verse number (for coding dual numeration in Psalms; see also NRSV Exo 22.1-4)",
    hasEndMarker: !0,
    children: void 0
  },
  vp: {
    category: C.DivisionMarks,
    type: T.Character,
    description: "Published verse marker (verse string that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  p: {
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
    type: T.Paragraph,
    description: "Letter Closing",
    hasEndMarker: !1,
    children: {
      SpecialText: ["tl", "sig", "pn", "png", "addpn", "add"]
    }
  },
  pmo: {
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
    type: T.Character,
    description: "Poetry text, Selah",
    hasEndMarker: !0,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  qa: {
    category: C.Poetry,
    type: T.Paragraph,
    description: "Poetry text, Acrostic marker/heading",
    hasEndMarker: !1,
    children: void 0
  },
  qac: {
    category: C.Poetry,
    type: T.Character,
    description: "Poetry text, Acrostic markup of the first character of a line of acrostic poetry",
    hasEndMarker: !0,
    children: void 0
  },
  qm: {
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
    type: T.Paragraph,
    description: "Poetry text stanza break (e.g. stanza break) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  mt: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book (if single level)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt1: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book (if multiple levels) (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt2: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A secondary title usually occurring before the main title (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt3: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A secondary title occurring after the main title",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt4: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A small secondary title sometimes occurring within parentheses",
    hasEndMarker: !1,
    children: void 0
  },
  mte: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  mte1: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte2"]
    }
  },
  mte2: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A secondary title occurring before or after the 'ending' main title",
    hasEndMarker: !1,
    children: void 0
  },
  ms: {
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A major section division heading, level 3",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mr"],
      Footnotes: ["f", "fe"]
    }
  },
  mr: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A major section division references range heading (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  s: {
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A section division references range heading",
    hasEndMarker: !1,
    children: void 0
  },
  r: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "Parallel reference(s) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  sp: {
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  sd1: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: void 0
  },
  sd2: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 2",
    hasEndMarker: !1,
    children: void 0
  },
  sd3: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 3",
    hasEndMarker: !1,
    children: void 0
  },
  sd4: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 4",
    hasEndMarker: !1,
    children: void 0
  },
  lh: {
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
    type: T.Character,
    description: "List entry total text",
    hasEndMarker: !0,
    children: void 0
  },
  lik: {
    category: C.Lists,
    type: T.Character,
    description: "Structured list entry key text",
    hasEndMarker: !0,
    children: void 0
  },
  liv: {
    category: C.Lists,
    type: T.Character,
    description: "Structured list entry value 1 content (if single value)",
    hasEndMarker: !0,
    children: void 0
  },
  liv1: {
    category: C.Lists,
    type: T.Character,
    description: "Structured list entry value 1 content (if multiple values)",
    hasEndMarker: !0,
    children: void 0
  },
  liv2: {
    category: C.Lists,
    type: T.Character,
    description: "Structured list entry value 2 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv3: {
    category: C.Lists,
    type: T.Character,
    description: "Structured list entry value 3 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv4: {
    category: C.Lists,
    type: T.Character,
    description: "Structured list entry value 4 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv5: {
    category: C.Lists,
    type: T.Character,
    description: "Structured list entry value 5 content",
    hasEndMarker: !0,
    children: void 0
  },
  f: {
    category: C.Footnotes,
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
    category: C.Footnotes,
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
    category: C.Footnotes,
    type: T.Character,
    description: "The origin reference for the footnote (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  ft: {
    category: C.Footnotes,
    type: T.Character,
    description: "Footnote text, Protocanon (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fk: {
    category: C.Footnotes,
    type: T.Character,
    description: "A footnote keyword (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fq: {
    category: C.Footnotes,
    type: T.Character,
    description: "A footnote scripture quote or alternate rendering (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fqa: {
    category: C.Footnotes,
    type: T.Character,
    description: "A footnote alternate rendering for a portion of scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  fl: {
    category: C.Footnotes,
    type: T.Character,
    description: "A footnote label text item, for marking or 'labelling' the type or alternate translation being provided in the note.",
    hasEndMarker: !0,
    children: void 0
  },
  fw: {
    category: C.Footnotes,
    type: T.Character,
    description: "A footnote witness list, for distinguishing a list of sigla representing witnesses in critical editions.",
    hasEndMarker: !0,
    children: void 0
  },
  fp: {
    category: C.Footnotes,
    type: T.Character,
    description: "A Footnote additional paragraph marker",
    hasEndMarker: !0,
    children: void 0
  },
  fv: {
    category: C.Footnotes,
    type: T.Character,
    description: "A verse number within the footnote text",
    hasEndMarker: !0,
    children: void 0
  },
  fdc: {
    category: C.Footnotes,
    type: T.Character,
    description: "Footnote text, applies to Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  fm: {
    category: C.Footnotes,
    type: T.Character,
    description: "An additional footnote marker location for a previous footnote",
    hasEndMarker: !0,
    children: void 0
  },
  x: {
    category: C.CrossReferences,
    type: T.Note,
    description: "A list of cross references (basic)",
    hasEndMarker: !0,
    children: {
      CrossReferences: ["xo", "xop", "xt", "xta", "xk", "xq", "xot", "xnt", "xdc"],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  xo: {
    category: C.CrossReferences,
    type: T.Character,
    description: "The cross reference origin reference (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xop: {
    category: C.CrossReferences,
    type: T.Character,
    description: "Published cross reference origin reference (origin reference that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  xt: {
    category: C.CrossReferences,
    type: T.Character,
    description: "The cross reference target reference(s), protocanon only (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xta: {
    category: C.CrossReferences,
    type: T.Character,
    description: "Cross reference target references added text",
    hasEndMarker: !0,
    children: void 0
  },
  xk: {
    category: C.CrossReferences,
    type: T.Character,
    description: "A cross reference keyword",
    hasEndMarker: !0,
    children: void 0
  },
  xq: {
    category: C.CrossReferences,
    type: T.Character,
    description: "A cross-reference quotation from the scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  xot: {
    category: C.CrossReferences,
    type: T.Character,
    description: "Cross-reference target reference(s), Old Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xnt: {
    category: C.CrossReferences,
    type: T.Character,
    description: "Cross-reference target reference(s), New Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xdc: {
    category: C.CrossReferences,
    type: T.Character,
    description: "Cross-reference target reference(s), Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  rq: {
    category: C.CrossReferences,
    type: T.Character,
    description: "A cross-reference indicating the source text for the preceding quotation.",
    hasEndMarker: !0,
    children: void 0
  },
  qt: {
    category: C.SpecialText,
    type: T.Character,
    description: "For Old Testament quoted text appearing in the New Testament (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  nd: {
    category: C.SpecialText,
    type: T.Character,
    description: "For name of deity (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  tl: {
    category: C.SpecialText,
    type: T.Character,
    description: "For transliterated words",
    hasEndMarker: !0,
    children: void 0
  },
  dc: {
    category: C.SpecialText,
    type: T.Character,
    description: "Deuterocanonical/LXX additions or insertions in the Protocanonical text",
    hasEndMarker: !0,
    children: void 0
  },
  bk: {
    category: C.SpecialText,
    type: T.Character,
    description: "For the quoted name of a book",
    hasEndMarker: !0,
    children: void 0
  },
  sig: {
    category: C.SpecialText,
    type: T.Character,
    description: "For the signature of the author of an Epistle",
    hasEndMarker: !0,
    children: void 0
  },
  pn: {
    category: C.SpecialText,
    type: T.Character,
    description: "For a proper name",
    hasEndMarker: !0,
    children: void 0
  },
  png: {
    category: C.SpecialText,
    type: T.Character,
    description: "For a geographic proper name",
    hasEndMarker: !0,
    children: void 0
  },
  addpn: {
    category: C.SpecialText,
    type: T.Character,
    description: "For chinese words to be dot underline & underline",
    hasEndMarker: !0,
    children: void 0
  },
  wj: {
    category: C.SpecialText,
    type: T.Character,
    description: "For marking the words of Jesus",
    hasEndMarker: !0,
    children: void 0
  },
  k: {
    category: C.SpecialText,
    type: T.Character,
    description: "For a keyword",
    hasEndMarker: !0,
    children: void 0
  },
  sls: {
    category: C.SpecialText,
    type: T.Character,
    description: "To represent where the original text is in a secondary language or from an alternate text source",
    hasEndMarker: !0,
    children: void 0
  },
  ord: {
    category: C.SpecialText,
    type: T.Character,
    description: "For the text portion of an ordinal number",
    hasEndMarker: !0,
    children: void 0
  },
  add: {
    category: C.SpecialText,
    type: T.Character,
    description: "For a translational addition to the text",
    hasEndMarker: !0,
    children: void 0
  },
  lit: {
    category: C.SpecialText,
    type: T.Paragraph,
    description: "For a comment or note inserted for liturgical use",
    hasEndMarker: !1,
    children: void 0
  },
  no: {
    category: C.CharacterStyling,
    type: T.Character,
    description: "A character style, use normal text",
    hasEndMarker: !0,
    children: void 0
  },
  it: {
    category: C.CharacterStyling,
    type: T.Character,
    description: "A character style, use italic text",
    hasEndMarker: !0,
    children: void 0
  },
  bd: {
    category: C.CharacterStyling,
    type: T.Character,
    description: "A character style, use bold text",
    hasEndMarker: !0,
    children: void 0
  },
  bdit: {
    category: C.CharacterStyling,
    type: T.Character,
    description: "A character style, use bold + italic text",
    hasEndMarker: !0,
    children: void 0
  },
  em: {
    category: C.CharacterStyling,
    type: T.Character,
    description: "A character style, use emphasized text style",
    hasEndMarker: !0,
    children: void 0
  },
  sc: {
    category: C.CharacterStyling,
    type: T.Character,
    description: "A character style, for small capitalization text",
    hasEndMarker: !0,
    children: void 0
  },
  sup: {
    category: C.CharacterStyling,
    type: T.Character,
    description: "A character style, for superscript text. Typically for use in critical edition footnotes.",
    hasEndMarker: !0,
    children: void 0
  },
  pb: {
    category: C.Breaks,
    type: T.Paragraph,
    description: "Page Break used for new reader portions and children's bibles where content is controlled by the page",
    hasEndMarker: !1,
    children: void 0
  }
}, vi = {
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
}, Oh = {
  p: { children: vi },
  q: { children: vi },
  q1: { children: vi },
  q2: { children: vi },
  q3: { children: vi },
  q4: { children: vi },
  b: { children: vi },
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
    category: C.SpecialFeatures,
    type: T.Character,
    description: "A wordlist/glossary/dictionary entry marker for study/analysis purposes",
    hasEndMarker: !0
  },
  rb: {
    category: C.SpecialFeatures,
    type: T.Character,
    description: "A ruby glossing marker for study/analysis purposes",
    hasEndMarker: !0
  },
  jmp: {
    category: C.SpecialFeatures,
    type: T.Character,
    description: "A hyperlink marker for study/analysis purposes",
    hasEndMarker: !0
  },
  // The generated table has no `fig`, but `usfm.sty` does (and so does the stylesheet data every
  // project supplies). Without an entry here, a document parsed BEFORE its project stylesheet
  // resolves falls back to this table, reads `\fig` as an unknown marker, and breaks the figure
  // into its own paragraph with the closer stranded as unmatched.
  fig: {
    category: C.SpecialFeatures,
    type: T.Character,
    description: "Illustration [Columns to span, height, filename, caption text]",
    hasEndMarker: !0
  }
};
function xr(e) {
  const t = Object.hasOwn(Mu, e) ? Mu[e] : void 0, n = Object.hasOwn(Oh, e) ? Oh[e] : void 0;
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
const ua = "￼", Gy = "v", Jy = "c", Ci = "fig", $h = "tr", Eu = "esb", Yy = "esbe", Rh = "periph", Ih = "alt", Lh = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, y_ = {
  "": "start",
  c: "center",
  r: "end"
};
function qh(e) {
  const [, , t, n] = e;
  return n ? /^[1-5]$/.test(t) && /^[2-5]$/.test(n) && Number(n) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Dh(e) {
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
const b_ = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function k_(e) {
  let t = "", n = !1, r = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (n || (i = t.length, t += " "), n = !0) : !n && o === Uo && s + 1 < e.length && Dh(e[s + 1]) || (Dh(o) ? (n || (i = t.length, t += o), n = !0) : b_.test(o) && o === r || (t += o, n = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), r = o;
  }
  return t;
}
function x_(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function T_(e, t) {
  let n = t;
  for (; n < e.length; ) {
    const r = e[n];
    if (r === "\\" || r === "|" || r === ua)
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
function v_(e, t, n) {
  if (!n || !/^[\s\u00A0\u200B]*$/.test(e.slice(0, t)))
    return !1;
  const r = e[t + 1];
  return r === void 0 || r === "\\" || /[\s\u00A0\u200B]/.test(r);
}
const C_ = /^(?:qt[1-5]?|ts)-[se]$/;
function cd(e) {
  return C_.test(e) || Vy(e);
}
function ql(e, t) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  const r = n;
  for (; n < e.length && e[n] !== ua && !/[\s\u00A0\u200B\\]/.test(e[n]); )
    n++;
  const i = e.slice(r, n);
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  return { word: i, next: n };
}
function S_(e, t) {
  const n = [];
  let r = 0;
  for (let i = 0; i < e.length; i++) {
    if (e[i] !== ua)
      continue;
    const s = t[r];
    r++, (s === "note" || s === "verse") && n.push(i);
  }
  return n;
}
function __(e, t, n, r, i) {
  const s = [];
  let o = 0;
  const a = S_(e, r);
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
      let _ = x === -1 ? e.length : x;
      c < a.length && (_ = Math.min(_, a[c])), f(k_(e.slice(o, _))), o = _;
      continue;
    }
    const d = o, { name: p, next: h } = T_(e, o + 1);
    o = h;
    const g = () => {
      for (; o < e.length && /[\s\u00A0\u200B]/.test(e[o]); )
        o++;
    };
    if (p === "") {
      if (v_(e, d, i)) {
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
    if (p === Gy) {
      const { word: x, next: _ } = ql(e, o);
      o = _, s.push({ kind: "verse", number: x });
      continue;
    }
    if (p === Jy) {
      const { word: x, next: _ } = ql(e, o);
      o = _, l = void 0, s.push({ kind: "chapter", number: x });
      continue;
    }
    const m = p.startsWith("+"), y = m ? p.slice(1) : p, k = t(y)?.type;
    if (k === T.Note || k === void 0 && Je.isValidMarker(p)) {
      const { word: x, next: _ } = ql(e, o);
      o = _, l = p, s.push({ kind: "note", marker: p, caller: x });
      continue;
    }
    if (k === T.Milestone || k === void 0 && cd(p)) {
      const x = R_(e, d, p, o);
      if (x)
        s.push(x.token), x.ejectedText && u(x.ejectedText), o = x.next;
      else {
        const _ = e.indexOf("\\", o), S = _ === -1 ? e.length : _;
        u(e.slice(d, S)), o = S;
      }
      continue;
    }
    k === T.Paragraph ? (g(), s.push({ kind: "para", marker: p })) : k === T.Character ? (g(), s.push({ kind: "charOpen", marker: y, isNested: m })) : ec(y) ? (g(), ec(y)?.shape === "para" ? s.push({ kind: "para", marker: p }) : s.push({ kind: "charOpen", marker: y, isNested: m })) : (g(), !(n || l !== void 0) || p === Eu || p === Yy ? s.push({ kind: "para", marker: p }) : s.push({ kind: "charOpen", marker: y, isNested: m }));
  }
  return s;
}
const Kh = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
}, M_ = {
  chapter: ["ca", "cp"],
  verse: ["va", "vp"],
  note: ["cat"],
  sidebar: ["cat"]
};
function ec(e) {
  return Object.hasOwn(Kh, e) ? Kh[e] : void 0;
}
function E_(e) {
  return ec(e) !== void 0;
}
const A_ = /([-\w]+)\s*=\s*"(.*?)"/g, P_ = /[\s\u200B]*[\n\r][\s\u200B]*/g, Xy = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Ys(e) {
  return Xy[e];
}
const w_ = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function N_(e, t) {
  let n = 0;
  for (const r of t) {
    const i = r.index;
    if (i === void 0 || e.slice(n, i).trim() !== "")
      return !1;
    n = i + r[0].length;
  }
  return e.slice(n).trim() === "";
}
function Fo(e, t, n = Xy[t]) {
  const r = e.replace(P_, " "), i = /* @__PURE__ */ Object.create(null), s = [...r.matchAll(A_)];
  if (s.length > 0) {
    if (!N_(r, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      w_.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (r.trim() && n)
    return { [n]: r };
}
function fa(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function O_(e) {
  const t = zc(e)[0], n = typeof t == "object" && "content" in t ? t.content : void 0;
  return n ? n.some((r, i) => typeof r != "object" || r.type !== "ms" || typeof n[i + 1] != "string" ? !1 : n.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function $_(e, t, n) {
  let r = t;
  for (; r < e.length && /[\s\u00A0\u200B]/.test(e[r]); )
    r++;
  if (e[r] !== "|")
    return;
  const i = e.indexOf("\\", r);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = Fo(e.slice(r + 1, i), n, fa(n));
  if (s)
    return { attributes: s, next: i + 2 };
}
function R_(e, t, n, r) {
  const i = e.indexOf("\\", r);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(r, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Fo(s.slice(o + 1), n, fa(n)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = $_(e, i + 2, n);
  return l ? {
    token: {
      kind: "milestone",
      marker: n,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: n, attributes: a }, next: i + 2 };
}
function mr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", D);
}
function Xr(e) {
  return e.content || (e.content = []), e.content;
}
function zc(e, t) {
  const n = [], r = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, f;
  const d = () => u ? Xr(u) : f ? Xr(f) : n;
  let p = !1;
  const h = () => {
    if (s)
      return o.length > a ? Xr(o[o.length - 1].object) : Xr(s);
    if (o.length > 0)
      return Xr(o[o.length - 1].object);
    if (!i) {
      if (p && !r)
        return d();
      i = { type: "para", marker: zn, content: [] }, d().push(i);
    }
    return Xr(i);
  }, g = (he) => {
    const z = h();
    typeof he == "string" && typeof z[z.length - 1] == "string" ? z[z.length - 1] = z[z.length - 1] + he : z.push(he);
  }, m = (he) => {
    for (let z = he; z < o.length; z += 1) {
      const oe = o[z].object;
      oe.closed = "false";
    }
  }, y = () => {
    m(0), o.length = 0;
  }, k = (he) => {
    s && (o.length > a && (m(a), o.length = a), a = 0, he || (s.closed = "false"), s = void 0);
  }, x = () => {
    c = void 0, l = void 0;
  }, _ = (he, z, oe) => {
    y();
    const [, Se, We, lt] = oe, kt = {
      type: "table:cell",
      marker: lt ? z.slice(0, z.indexOf("-")) : z,
      align: y_[Se],
      content: []
    };
    lt && (kt.colspan = String(Number(lt) + 1 - Number(We))), Xr(he).push(kt), i = kt;
  }, S = (he) => {
    u && (he || (u.closed = "false"), u = void 0);
  }, F = () => {
    f = void 0;
  };
  let $, ne = -1;
  const fe = (he) => {
    $ = he, ne = -1;
  };
  let I = "", K;
  const ge = () => {
    I && g(mr(I)), I = "";
  }, re = (he = !1) => {
    $?.type === "sidebar" ? I = "" : he && I.endsWith(`
`) && (I = I.slice(0, -1)), $ = void 0, ge();
  }, Le = () => {
    if (!K)
      return;
    const he = { type: "char", marker: K.marker, content: [] };
    K.value && (he.content = [mr(K.value)]), h().push(he), o.push({ object: he }), K = void 0;
  }, ye = (he, z) => {
    p = !1, x(), y(), k(!1), i = { type: "para", marker: he, content: [] }, z && (i.content = [mr(z)]), d().push(i);
  }, nt = () => {
    K && (ye(K.marker, K.value), K = void 0);
  };
  let rt;
  const rn = (he) => {
    if (!rt)
      return;
    let { value: z } = rt;
    rt = void 0, he && z.endsWith(`
`) && (z = z.slice(0, -1));
    const oe = z.indexOf("|"), Se = oe >= 0 ? Fo(z.slice(oe + 1), Rh) : void 0, We = oe >= 0 ? z.slice(0, oe) : z, lt = oe >= 0 && (!Se || !!We && !!Se[Ih]), kt = lt ? void 0 : Se, vn = lt ? z : We, ee = {
      type: "periph",
      ...vn ? { [Ih]: mr(vn) } : {},
      ...kt
    };
    ee.content = [], d().push(ee), f = ee, i = void 0;
  };
  let Ye;
  const pr = () => {
    if (Ye) {
      if (Ye.shape === "para")
        ye(Ci, Ye.value);
      else {
        const he = { type: "char", marker: Ci, content: [] };
        Ye.value && (he.content = [mr(Ye.value)]), h().push(he), o.push({ object: he });
      }
      Ye = void 0;
    }
  }, Tn = __(e, t?.getMarker ?? xr, r, t?.placeholders ?? [], !r && t?.opensNamelessParagraph === !0);
  for (let he = 0; he < Tn.length; he++) {
    const z = Tn[he];
    if (K) {
      if (z.kind === "text") {
        K.value += z.text;
        continue;
      }
      if (K.shape === "char" && z.kind === "end" && z.marker.replace(/^\+/, "") === K.marker) {
        if (K.value.trim() === "") {
          h().push({ type: "char", marker: K.marker, content: [] }), K = void 0, re();
          continue;
        }
        Object.assign(K.target, {
          [K.attrName]: mr(K.value.trim())
        });
        const oe = K.marker;
        if (K = void 0, oe === "ca") {
          const Se = Tn[he + 1];
          Se?.kind === "text" && /^[\s\u200B]*$/.test(Se.text) && he++;
        }
        continue;
      }
      if (K.shape === "para" && (z.kind === "para" || z.kind === "chapter")) {
        const oe = K.value.replace(/[\s\u200B]+$/, "");
        oe === "" ? (ye(K.marker), K = void 0) : (Object.assign(K.target, { [K.attrName]: mr(oe) }), K = void 0);
      } else {
        $ = void 0, (z.kind === "para" || z.kind === "chapter") && K.value.endsWith(`
`) && (K.value = K.value.slice(0, -1)), K.shape === "para" ? nt() : Le(), he--;
        continue;
      }
    }
    if (rt) {
      if (z.kind === "text" || z.kind === "optbreak") {
        rt.value += z.kind === "text" ? z.text : "//";
        continue;
      }
      rn(z.kind === "para" || z.kind === "chapter"), he--;
      continue;
    }
    if (Ye) {
      if (z.kind === "text" || z.kind === "optbreak") {
        Ye.value += z.kind === "text" ? z.text : "//";
        continue;
      }
      if (z.kind === "end" && z.marker.replace(/^\+/, "") === Ci) {
        const oe = Ye.value.indexOf("|"), Se = oe >= 0 ? Fo(Ye.value.slice(oe + 1), Ci) : void 0;
        if (Se) {
          const We = {};
          for (const [vn, ee] of Object.entries(Se))
            We[vn === "src" ? "file" : vn] = ee;
          const lt = {
            type: "figure",
            marker: Ci,
            ...We
          }, kt = Ye.value.slice(0, oe);
          kt && (lt.content = [mr(kt)]), g(lt), Ye = void 0;
          continue;
        }
      }
      pr(), he--;
      continue;
    }
    if ($)
      if (z.kind === "text") {
        if (z.text.includes(`
`) && /^[\s\u200B]*$/.test(z.text)) {
          I += z.text;
          continue;
        }
        re();
      } else if (z.kind === "charOpen" || z.kind === "para") {
        const oe = z.kind === "para" || !z.isNested ? ec(z.marker) : void 0, Se = M_[$.type]?.indexOf(z.marker) ?? -1;
        if (oe && oe.targetTypes.includes($.type) && Se > ne) {
          ne = Se, I = "", K = {
            target: $,
            attrName: oe.attrName,
            marker: z.marker,
            shape: oe.shape,
            value: ""
          };
          continue;
        }
        re(z.kind === "para");
      } else
        re(z.kind === "chapter");
    if (!s && !r && (z.kind === "charOpen" && !z.isNested && z.marker === Ci || z.kind === "para" && z.marker === Ci)) {
      y(), Ye = { shape: z.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (z.kind) {
      case "text": {
        let oe = z.text;
        if (!s && oe.endsWith(`
`)) {
          const Se = Tn[he + 1];
          (Se === void 0 || Se.kind === "para" || Se.kind === "chapter") && (oe = oe.slice(0, -1));
        }
        oe && g(mr(oe));
        break;
      }
      case "para": {
        const oe = !s && !r;
        if (oe && z.marker === $h) {
          y(), c || (c = { type: "table", content: [] }, d().push(c)), l = { type: "table:row", marker: $h, content: [] }, Xr(c).push(l), i = l, p = !1;
          break;
        }
        if (oe && l) {
          const Se = Lh.exec(z.marker);
          if (Se && qh(Se)) {
            _(l, z.marker, Se);
            break;
          }
        }
        if (x(), !r && z.marker === Eu) {
          y(), k(!1), S(!1);
          const Se = {
            type: "sidebar",
            marker: Eu,
            content: []
          };
          d().push(Se), u = Se, i = void 0, fe(u), p = !1;
          break;
        }
        if (z.marker === Yy && u) {
          y(), k(!1), S(!0), i = void 0;
          break;
        }
        if (!r && z.marker === Rh) {
          y(), k(!1), S(!1), F(), rt = { value: "" }, i = void 0, p = !1;
          break;
        }
        ye(z.marker);
        break;
      }
      case "verse": {
        k(!1);
        const oe = { type: "verse", marker: Gy, number: z.number };
        g(oe), fe(oe);
        break;
      }
      case "chapter": {
        y(), k(!1), x(), S(!1), F(), i = void 0;
        const oe = {
          type: "chapter",
          marker: Jy,
          number: z.number
        };
        n.push(oe), fe(oe), p = !0;
        break;
      }
      case "note": {
        k(!1);
        const oe = h();
        s = { type: "note", marker: z.marker, caller: z.caller, content: [] }, a = o.length, oe.push(s), fe(s);
        break;
      }
      case "charOpen": {
        if (!s && !r && l && !z.isNested) {
          const We = Lh.exec(z.marker);
          if (We && qh(We)) {
            _(l, z.marker, We);
            break;
          }
        }
        if (!z.isNested) {
          const We = s ? a : 0;
          m(We), o.length = We;
        }
        const oe = h(), Se = { type: "char", marker: z.marker, content: [] };
        oe.push(Se), o.push({ object: Se });
        break;
      }
      case "end": {
        const oe = z.marker.replace(/^\+/, ""), Se = s ? a : 0, We = o.findLastIndex((lt, kt) => kt >= Se && lt.object.marker === oe);
        We >= 0 ? (I_(o[We].object), m(We + 1), o.length = We) : s && s.marker === oe ? k(!0) : (m(Se), o.length = Se, g({ type: "unmatched", marker: `${z.marker}*` }));
        break;
      }
      case "milestone":
        g({ type: "ms", marker: z.marker, ...z.attributes });
        break;
      case "optbreak":
        g({ type: "optbreak" });
        break;
      case "noteEndingPlaceholder":
        k(!1), g(ua);
        break;
    }
  }
  if (rt && rn(!0), Ye && pr(), K)
    if (K.shape === "para") {
      const he = K.value.replace(/[\s\u200B]+$/, "");
      he === "" ? ye(K.marker) : Object.assign(K.target, { [K.attrName]: mr(he) }), K = void 0;
    } else
      K.value.endsWith(`
`) && (K.value = K.value.slice(0, -1)), Le();
  y(), k(!1), S(!1);
  const Pe = (he) => {
    for (const z of he)
      typeof z != "string" && z.content && (Pe(z.content), z.content.length === 0 && delete z.content);
  };
  return Pe(n), n;
}
function I_(e) {
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
  const i = t.slice(r).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = Fo(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = r, a && t.push(a), Object.assign(e, o);
}
function Ve(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function ot(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function jn(e, t) {
  let n = Ve(e);
  return t && (n += `${D}${t}`), n += " ", n;
}
function _t(e) {
  return " " + e + D;
}
function Uh(e, t) {
  return e === t || (e === " " || e === D) && (t === " " || t === D);
}
function jc(e, t) {
  const n = _t(t);
  let r = 0;
  for (; r < e.length && r < n.length && Uh(e[r], n[r]); )
    r += 1;
  let i = 0;
  for (; i < e.length - r && i < n.length - r && Uh(e[e.length - 1 - i], n[n.length - 1 - i]); )
    i += 1;
  return { start: r, end: e.length - i, missing: r + i < n.length };
}
function ld(e, t) {
  const { start: n, end: r } = jc(e, t);
  return e.slice(n, r).replaceAll(D, " ");
}
const L_ = 1;
class Wn extends st {
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
      version: L_
    };
  }
}
function $t(e, t, n) {
  return yt(new Wn(e, t, void 0, n));
}
function w(e) {
  return e instanceof Wn;
}
function Xs(e) {
  return e?.type === Wn.getType();
}
function ur(e) {
  return e.getTextContent() === Ai(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function q_(e) {
  e.setTextContent(Ai(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Ai(e, t, n = !1) {
  return t === "closing" ? ot(e, n) : t === "selfClosing" ? ot("") : Ve(e, n);
}
const Kt = "internal-comment", D_ = [Kt], Qy = Object.freeze({}), Au = Object.freeze({}), Pu = Object.freeze({}), wu = Object.freeze({}), Nu = Object.freeze({}), K_ = 1, _i = /* @__PURE__ */ new Map(), Ts = /* @__PURE__ */ new Map(), Mi = /* @__PURE__ */ new Map(), Ei = /* @__PURE__ */ new Map(), zo = /* @__PURE__ */ new WeakMap(), jo = /* @__PURE__ */ new WeakMap();
function U_(e) {
  return zo.set(e, []), jo.set(e, /* @__PURE__ */ new Map()), () => {
    zo.delete(e), jo.delete(e);
  };
}
function B_(e) {
  const t = zo.get(e);
  return t ? (zo.set(e, []), t) : [];
}
const tc = /* @__PURE__ */ new WeakMap();
function Ua(e, t) {
  return JSON.stringify([e, t]);
}
function Bh(e, t, n, r) {
  let i = tc.get(e);
  r ? (i || tc.set(e, i = /* @__PURE__ */ new Set()), i.add(Ua(t, n))) : (i?.delete(Ua(t, n)), jo.get(e)?.delete(Ua(t, n)));
}
function F_(e) {
  tc.delete(e), jo.get(e)?.clear();
}
function Pa(e, t, n, r) {
  const i = e.get(t), s = i?.[n];
  if (!i || !s || !(r in s))
    return;
  const o = yr(s, r), a = Object.keys(o).length > 0 ? { ...i, [n]: o } : yr(i, n);
  Object.keys(a).length > 0 ? e.set(t, a) : e.delete(t);
}
function z_(e, t, n) {
  Pa(_i, e, t, n), Pa(Ts, e, t, n), Pa(Mi, e, t, n), Pa(Ei, e, t, n);
}
class gt extends lr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Qy, n, r, i, s, o) {
    super(o), this.__typedIDs = wa(t), this.__typedOnClicks = Dl(n), this.__typedOnRemoves = Kl(r), this.__typedOnMouseEnters = Ul(i), this.__typedOnMouseLeaves = Bl(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const n = wa(t.__typedIDs), r = Dl(t.__typedOnClicks), i = Kl(t.__typedOnRemoves), s = Ul(t.__typedOnMouseEnters), o = Bl(t.__typedOnMouseLeaves);
    return new gt(n, r, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return D_.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Ui().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: K_
    };
  }
  createDOM(t, n) {
    const r = document.createElement("mark");
    vo(r, ...Zy(t.theme, this.__typedIDs));
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
      c !== l && (c === 0 ? l === 1 && vo(n, u) : l === 0 && Da(n, u), c === 1 ? l === 2 && vo(n, f) : l === 1 && Da(n, f));
      const d = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || Da(n, Oi("annotationId", h));
      for (const h of a)
        d.has(h) || vo(n, Oi("annotationId", h));
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
    const n = this.getWritable(), r = wa(n.__typedIDs);
    n.__typedIDs = wa(t), n.dispatchRemovedIDs(r, n.__typedIDs, "removed"), n.pruneTypedOnClicks(), n.pruneTypedOnRemoves(), n.pruneTypedOnMouseEnters(), n.pruneTypedOnMouseLeaves(), n.syncTypedOnClicksToRegistry(), n.syncTypedOnRemovesToRegistry(), n.syncTypedOnMouseEntersToRegistry(), n.syncTypedOnMouseLeavesToRegistry();
    const i = n.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Ou(i), i;
  }
  setTypedOnClicks(t) {
    const n = this.getWritable();
    return n.__typedOnClicks = Dl(t), n.pruneTypedOnClicks(), n.syncTypedOnClicksToRegistry(), n;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return ue(t) ? _i.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const n = this.getWritable();
    return n.__typedOnRemoves = Kl(t), n.pruneTypedOnRemoves(), n.syncTypedOnRemovesToRegistry(), n;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return ue(t) ? Ts.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const n = this.getWritable();
    return n.__typedOnMouseEnters = Ul(t), n.pruneTypedOnMouseEnters(), n.syncTypedOnMouseEntersToRegistry(), n;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return ue(t) ? Mi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const n = this.getWritable();
    return n.__typedOnMouseLeaves = Bl(t), n.pruneTypedOnMouseLeaves(), n.syncTypedOnMouseLeavesToRegistry(), n;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return ue(t) ? Ei.get(t.getKey()) ?? {} : {};
  }
  addID(t, n, r, i, s, o) {
    const a = this.getWritable();
    if (!ue(a))
      return;
    Tt(t), Tt(n);
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Ou(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, n = !0) {
    const r = Ui(this.__typedIDs, this.getTypedOnClicks());
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
    n.__suppressOnRemoveCallbacks ? n.__suppressOnRemoveCallbacks = void 0 : n.dispatchOnRemoveForTypedIDs(r, "destroyed"), _i.delete(n.getKey()), Ts.delete(n.getKey()), Mi.delete(n.getKey()), Ei.delete(n.getKey()), n.__typedOnClicks = void 0, n.__typedOnRemoves = void 0, n.__typedOnMouseEnters = void 0, n.__typedOnMouseLeaves = void 0, super.remove.call(n, t);
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Au) {
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
    Tt(t), Tt(n);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, n) {
    if (!this.__typedOnClicks)
      return;
    const r = this.__typedOnClicks[t];
    if (!r)
      return;
    const i = yr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = yr(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Au) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Pu) {
      const t = Ts.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      Ts.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    Ts.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, n, r) {
    Tt(t), Tt(n);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, n) {
    if (!this.__typedOnRemoves)
      return;
    const r = this.__typedOnRemoves[t];
    if (!r)
      return;
    const i = yr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = yr(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Pu) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === wu) {
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
    Tt(t), Tt(n);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, n) {
    if (!this.__typedOnMouseEnters)
      return;
    const r = this.__typedOnMouseEnters[t];
    if (!r)
      return;
    const i = yr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = yr(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === wu) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Nu) {
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
    Tt(t), Tt(n);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, n) {
    if (!this.__typedOnMouseLeaves)
      return;
    const r = this.__typedOnMouseLeaves[t];
    if (!r)
      return;
    const i = yr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = yr(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Nu) {
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
    const o = Ft(), a = Ua(t, n), c = jo.get(o);
    if (tc.get(o)?.has(a) || c?.get(a)?.has(this.getKey())) {
      this.removeOnRemoveFor(t, n);
      return;
    }
    if (zo.get(o)?.push([t, n]), c) {
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
    const i = j_(t, n);
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
    for (; ue(t) && zh(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let n = this.getNextSibling();
    for (; ue(n) && zh(this.getTypedIDs(), n.getTypedIDs()); )
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
    const n = V_(this.getTypedOnClicks(), t);
    Object.keys(n).length !== 0 && this.setTypedOnClicks(n);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = W_(this.getTypedOnRemoves(), t);
    Object.keys(n).length !== 0 && this.setTypedOnRemoves(n);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = H_(this.getTypedOnMouseEnters(), t);
    Object.keys(n).length !== 0 && this.setTypedOnMouseEnters(n);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = G_(this.getTypedOnMouseLeaves(), t);
    Object.keys(n).length !== 0 && this.setTypedOnMouseLeaves(n);
  }
}
function wa(e = Qy) {
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    if (Tt(n), !Array.isArray(r)) {
      t[n] = [];
      continue;
    }
    const i = [];
    for (const s of r)
      Tt(s), i.push(s);
    t[n] = i;
  }
  return t;
}
function Dl(e) {
  if (!e || e === Au)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    Tt(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      Tt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Kl(e) {
  if (!e || e === Pu)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    Tt(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      Tt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ul(e) {
  if (!e || e === wu)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    Tt(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      Tt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Bl(e) {
  if (!e || e === Nu)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    Tt(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      Tt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function yr(e, t) {
  const n = {};
  for (const [r, i] of Object.entries(e))
    r !== t && (n[r] = i);
  return n;
}
function Fh(e) {
  const t = {};
  for (const [n, r] of Object.entries(e))
    !r || r.length === 0 || (t[n] = [...r].sort());
  return t;
}
function j_(e, t) {
  const n = [];
  for (const [r, i] of Object.entries(e)) {
    const s = new Set(t[r] ?? []);
    for (const o of i ?? [])
      s.has(o) || n.push([r, o]);
  }
  return n;
}
function zh(e, t) {
  const n = Fh(e), r = Fh(t), i = Object.keys(n).sort(), s = Object.keys(r).sort();
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
function V_(e, t) {
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
function W_(e, t) {
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
function H_(e, t) {
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
function G_(e, t) {
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
function Zy(e, t) {
  const n = [];
  for (const [r, i] of Object.entries(t)) {
    n.push(Oi(e.typedMark, r)), i.length > 1 && n.push(Oi(e.typedMarkOverlap, r));
    for (const s of i)
      n.push(Oi("annotationId", s));
  }
  return n;
}
function Fl(e) {
  return `external-${e}`;
}
function Ui(e, t, n, r, i) {
  return yt(new gt(e, t, n, r, i));
}
function ue(e) {
  return e instanceof gt;
}
function oi(e) {
  return e?.type === gt.getType();
}
function eb(e, t, n) {
  let r = 0;
  for (const i of n) {
    const s = X(i);
    !ue(s) || !s.hasID(e, t) || (r++, s.deleteID(e, t), s.hasNoIDsForEveryType() && Ou(s));
  }
  return r;
}
function Ou(e) {
  const t = e.getChildren();
  let n = null;
  for (const r of t)
    n === null ? e.insertBefore(r) : n.insertAfter(r), n = r;
  e.remove();
}
function J_(e, t, n) {
  let r = e;
  for (; r !== null; ) {
    if (ue(r))
      return r.getTypedIDs()[t];
    if (v(r) && n === r.getTextContentSize()) {
      const i = r.getNextSibling();
      if (ue(i))
        return i.getTypedIDs()[t];
    }
    r = r.getParent();
  }
}
const Bi = Js("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ai = Js("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ke = Js("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Mr = "marker-trailing-space", tb = 1, Y_ = "attribute-run";
function zl(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Er extends lr {
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
    return nb(t.runKind).updateFromJSON(t);
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
    t.classList.add(Y_);
    const n = zl(this.__runKind);
    return n !== void 0 && t.classList.add(n), t;
  }
  updateDOM(t, n) {
    if (t.__runKind !== this.__runKind) {
      const r = zl(t.__runKind);
      r !== void 0 && n.classList.remove(r);
      const i = zl(this.__runKind);
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
      version: tb
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
function nb(e) {
  return yt(new Er(e));
}
function Fe(e) {
  return e instanceof Er;
}
const rb = [
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
], ib = [
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
], X_ = [
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
  ...rb,
  ...ib
], sb = 1, Q_ = ["type", "marker", "content"];
class ze extends lr {
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
    return t !== void 0 && (X_.includes(t) || (n?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && rb.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && ib.includes(t);
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
      span: (t) => e0(t) ? {
        conversion: Z_,
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
    return jh(n, this.__marker, t), n.classList.add(this.__type), n;
  }
  updateDOM(t, n, r) {
    return t.__marker !== this.__marker && (n.classList.remove(`usfm_${t.__marker}`), jh(n, this.__marker, r)), !1;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Xi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: n };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: sb
    };
  }
  // Mutation
  insertNewAfter(t, n) {
    const r = this.getUnknownAttributes()?.closed === "false", i = Ur(this.getMarker(), r ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, n), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function jh(e, t, n) {
  e.setAttribute("data-marker", t), n.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Z_(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Ur(t) };
}
function Ur(e, t) {
  return yt(new ze(e, t));
}
function e0(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ze.isValidMarker(t) && e.classList.contains(ze.getType());
}
function U(e) {
  return e instanceof ze;
}
function ob(e) {
  return e?.type === ze.getType();
}
const nc = "v", ab = 1, t0 = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Bt extends st {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n, r, i, s, o, a) {
    super(n ?? t, a), this.__marker = nc, this.__number = t, this.__sid = r, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: n, __text: r, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Bt(n, r, i, s, o, a, c);
  }
  static importJSON(t) {
    return cb().updateFromJSON(t);
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
    return n.setAttribute("data-marker", this.__marker), n.classList.add(Su, `usfm_${this.__marker}`), n.setAttribute("data-number", this.__number), n;
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
      version: ab
    };
  }
}
function cb(e, t, n, r, i, s) {
  return yt(new Bt(e, t, n, r, i, s));
}
function Ue(e) {
  return e instanceof Bt;
}
function ud(e) {
  return e?.type === Bt.getType();
}
const n0 = /* @__PURE__ */ new Set(["closed"]);
function Qn(e, t) {
  const n = Object.entries(e).filter(([r, i]) => i !== void 0 && !n0.has(r));
  return n.length === 0 ? "" : n.length === 1 && n[0][0] === t && n[0][1] !== "" ? `|${n[0][1]}` : `|${n.map(([r, i]) => `${r}="${i}"`).join(" ")}`;
}
function lb(e, t) {
  if (!t || t.length === 0)
    return e;
  const n = {};
  return t.forEach((r) => {
    Object.hasOwn(e, r) && (n[r] = e[r]);
  }), Object.entries(e).forEach(([r, i]) => {
    Object.hasOwn(n, r) || (n[r] = i);
  }), n;
}
function ub(e) {
  const t = Object.keys(e).filter((r) => !f_.includes(r)), n = [
    ...t.filter((r) => r === "sid"),
    ...t.filter((r) => r === "eid"),
    ...t.filter((r) => r !== "sid" && r !== "eid")
  ];
  return t.every((r, i) => r === n[i]) ? void 0 : t;
}
function fb(e, t, n, r) {
  return lb(
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
function Eo(e) {
  return e.getChildren().find((t) => w(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function r0(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((r) => r !== "closed") ? !1 : Eo(e) === void 0 && db(e) === void 0;
}
function db(e) {
  return e.getChildren().find((t) => v(t) && de(t, ke) === "attribute");
}
function Vo(e, t) {
  return da(e.getNextSibling(), t);
}
const i0 = /^[ \u00A0]+$/;
function fd(e) {
  if (ur(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Ve(e.getMarker(), e.getNested()), n = e.getTextContent();
  return n.startsWith(t) && i0.test(n.slice(t.length));
}
function da(e, t) {
  let n, r, i, s;
  return Fe(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), w(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  fd(e) && (n = e, e = e.getNextSibling()), v(e) && de(e, ke) === "attribute" && (r = e, e = e.getNextSibling()), w(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && ur(e) && (i = e), { opener: n, value: r, closer: i, wrapper: s };
}
function s0(e) {
  let t = e;
  for (; ue(t); )
    t = t.getChildren()[0];
  return t;
}
function Mt(e) {
  const t = e.getChildren();
  let n = 0;
  for (; n < t.length; ) {
    const i = t[n];
    if (!w(i) || i.getMarkerSyntax() !== "opening")
      break;
    n++;
  }
  const r = s0(t[n]);
  if (!(!v(r) || r.getType() !== st.getType()))
    return r.getTextContent() === _t(e.getCaller()) || r.isUnmergeable() ? r : void 0;
}
function pa(e) {
  const t = Mt(e);
  return t ? da(t.getNextSibling(), "cat") : {};
}
function mi(e) {
  const t = e.getFirstChild();
  if (!(!v(t) || w(t)) && de(t, ke) !== "attribute")
    return t;
}
function pb(e) {
  const t = mi(e);
  return t ? da(t.getNextSibling(), "ca") : {};
}
function hb(e) {
  const t = mi(e);
  if (!t)
    return;
  const n = da(t.getNextSibling(), "ca");
  return n.wrapper ?? n.closer ?? t;
}
function gb(e) {
  const t = hb(e);
  return t ? da(t.getNextSibling(), "cp") : {};
}
function mb(e) {
  const t = e.getParent();
  if (!U(t))
    return;
  const n = t.getMarker();
  if (!(n !== "va" && n !== "vp"))
    for (let r = t.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (Ue(r))
        return r;
      if (!(w(r) && (r.getMarker() === "va" || r.getMarker() === "vp") || v(r) && de(r, ke) === "attribute" || U(r) && (r.getMarker() === "va" || r.getMarker() === "vp") || Fe(r)))
        return;
    }
}
function Vc(e) {
  let t, n, r, i, s = e.getNextSibling();
  return Fe(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), w(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  fd(s) && (t = s, s = s.getNextSibling()), v(s) && de(s, ke) === "attribute" && (n = s, s = s.getNextSibling()), w(s) && s.getMarkerSyntax() === "selfClosing" && ur(s) && (r = s), { opening: t, attribute: n, closing: r, wrapper: i };
}
const rc = "c", yb = 1, o0 = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Ln extends lr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n, r, i, s, o) {
    super(o), this.__marker = rc, this.__number = t, this.__sid = n, this.__altnumber = r, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: n, __sid: r, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Ln(n, r, i, s, o, a);
  }
  static importJSON(t) {
    return bb().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Za, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: yb
    };
  }
}
function bb(e, t, n, r, i) {
  return yt(new Ln(e, t, n, r, i));
}
function $e(e) {
  return e instanceof Ln;
}
function a0(e) {
  return e?.type === Ln.getType();
}
const c0 = ["type", "marker", "content"], $u = "unknown", kb = 1, l0 = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class ts extends lr {
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
    return new ts(n, r, i, s);
  }
  static importDOM() {
    return {
      [$u]: (t) => f0(t) ? {
        conversion: u0,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return dd().updateFromJSON(t);
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
    return l0.has(this.getTag());
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
    const t = document.createElement($u);
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
      version: kb
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
    if (Dc(n) && super.isSelected(n))
      return !0;
    if (n.isCollapsed())
      return !1;
    const r = n.getNodes();
    return this.getChildren().some((i) => r.some((s) => s.is(i)));
  }
}
function u0(e) {
  const t = e.getAttribute("data-tag") ?? "", n = e.getAttribute("data-marker") ?? "";
  return { node: dd(t, n) };
}
function dd(e, t, n) {
  return yt(new ts(e, t, n));
}
function f0(e) {
  return e?.tagName.toLowerCase() === $u;
}
function et(e) {
  return e instanceof ts;
}
const xb = "table", Ru = "immutable-table", Tb = 1, d0 = ["type", "marker", "content"];
class ns extends lr {
  __unknownAttributes;
  constructor(t, n) {
    super(n), this.__unknownAttributes = t;
  }
  static getType() {
    return Ru;
  }
  static clone(t) {
    return new ns(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return p0().updateFromJSON(t);
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
      type: Ru,
      ...t !== void 0 && { unknownAttributes: t },
      version: Tb
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function p0(e) {
  return yt(new ns(e));
}
function vb(e) {
  return e instanceof ns;
}
function h0(e) {
  return e?.type === Ru;
}
function Iu(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (et(t) || vb(t))
      return !0;
  return !1;
}
const Cb = 1;
class ci extends Wf {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new ci(t.__key);
  }
  static importJSON(t) {
    return Vn().updateFromJSON(t);
  }
  getMarker() {
    return zn;
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
    const r = Vn();
    return r.setTextFormat(t.format), r.setTextStyle(t.style), r.setDirection(this.getDirection()), r.setFormat(this.getFormatType()), r.setStyle(this.getTextStyle()), this.insertAfter(r, n), r;
  }
}
function Vn() {
  return yt(new ci());
}
function Ct(e) {
  return e instanceof ci;
}
function Wc(e) {
  return e?.type === ci.getType();
}
function Sb(e) {
  return Ct(e) && An(e.getParent());
}
function pd(e) {
  return ue(e) || Sb(e);
}
function qn(e) {
  let t = e.getParent();
  for (; t && pd(t); )
    t = t.getParent();
  return t;
}
function Hc(e) {
  return U(qn(e));
}
function hd(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const n = e.getMarker();
  return n === t.getMarker() ? Hc(t) : t.getChildren().some((i) => U(i) && i.getMarker() === n) ? !0 : void 0;
}
function g0(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!w(t))
      return;
    const n = hd(t, e);
    n !== void 0 && t.setNested(n);
  });
}
const Ri = /* @__PURE__ */ new WeakMap();
function m0(e, t, n) {
  const r = { owners: t, rederive: n };
  return Ri.set(e, r), () => {
    Ri.get(e) === r && Ri.delete(e);
  };
}
function _b(e, t, n) {
  const r = Ri.get(e);
  !r?.rederive || !n.has(Kc) || r.derivedFor === t || (r.rederive(t), r.derivedFor = t);
}
function Lu(e) {
  return Ri.get(e)?.owners;
}
function Mb(e) {
  return Ri.get(Ft())?.owners.has(e.getKey()) ?? !1;
}
function Eb(e) {
  Ri.get(Ft())?.owners.add(e.getKey());
}
function Wr(e) {
  return v(e) && e.getType() === st.getType() && de(e, ke) !== "attribute";
}
function Qs(e) {
  if (!Wr(e) || !e.getTextContent().startsWith(D))
    return 0;
  let t = e, n = t.getPreviousSibling(), r = t.getParent();
  for (; r && ue(r); )
    t = r, r = t.getParent(), n ??= t.getPreviousSibling();
  if (!U(r))
    return 0;
  for (; ue(n); )
    n = n.getLastChild();
  return !w(n) || n.getMarkerSyntax() !== "opening" ? 0 : yd(n, r) ? 1 : 0;
}
function gd(e) {
  let t = e.getNextSibling();
  for (; ue(t); )
    t = t.getFirstChild();
  return t;
}
function md(e) {
  const t = e.getPreviousSibling(), n = e.getParent();
  return !w(t) || !U(n) || !yd(t, n) || !Wr(e) ? 0 : e.getTextContent().startsWith(D) ? D.length : 0;
}
function yd(e, t) {
  return e.getMarkerSyntax() === "opening" && hd(e, t) !== void 0;
}
function Zs(e, t) {
  if (!yd(e, t))
    return;
  const n = e.getNextSibling(), r = gd(e);
  if (!(n === null || r === null))
    return w(r) ? hd(r, t) === !0 ? "spacer" : void 0 : Wr(r) ? r.getTextContent().startsWith(D) ? void 0 : r.is(n) ? "prefix" : "spacer" : "spacer";
}
function bd(e) {
  return !Wr(gd(e)) || Iu(e) ? !1 : !x_(e.getNextSibling()?.getTextContent() ?? "");
}
function Ab(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (w(t) && Zs(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function kd(e, t) {
  const n = N();
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
function Pb(e) {
  if (!e.isAttached() || Mb(e))
    return;
  const t = Lu(Ft()) !== void 0;
  e.getChildren().forEach((n) => {
    if (!w(n))
      return;
    const r = Zs(n, e);
    if (r === void 0 || kd(n, e))
      return;
    if (t && bd(n)) {
      Eb(e);
      return;
    }
    if (r === "spacer") {
      n.insertAfter(Re(D));
      return;
    }
    const i = n.getNextSibling();
    v(i) && (y0(i) || k0(i));
  });
}
function y0(e) {
  const t = N();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const { anchor: n } = t;
  if (n.type !== "text" || n.key !== e.getKey() || n.offset === 0)
    return !1;
  const r = e.getTextContent();
  if (r[n.offset] !== D)
    return !1;
  const i = r.slice(0, n.offset);
  return e.setTextContent(D + i + r.slice(n.offset + 1)), e.select(n.offset + 1, n.offset + 1), !0;
}
function b0(e) {
  if (e.getMarkerSyntax() !== "opening" || !U(e.getParent()))
    return !1;
  const t = N();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const n = e.getTextContent(), { anchor: r } = t;
  if (r.key !== e.getKey() || r.offset !== n.length)
    return !1;
  const i = Ve(e.getMarker(), e.getNested()), s = n.slice(i.length);
  if (!n.startsWith(i) || !/^[|\s]+$/.test(s))
    return !1;
  const o = gd(e);
  if (!Wr(o))
    return !1;
  const a = o.getTextContent();
  return a.startsWith(D) ? (e.setTextContent(i), o.setTextContent(D + s + a.slice(D.length)), o.select(D.length + s.length, D.length + s.length), !0) : !1;
}
function wb(e, t) {
  ue(e.getNextSibling()) && Zs(e, t) === "spacer" && e.insertAfter(Re(D));
}
function k0(e) {
  e.setTextContent(D + e.getTextContent());
  const t = N();
  if (E(t))
    for (const n of [t.anchor, t.focus])
      n.type === "text" && n.key === e.getKey() && n.set(n.key, n.offset + 1, "text");
}
function x0(e) {
  return e.isAttached() ? e.getChildren().some((t) => w(t) && Zs(t, e) !== void 0 && kd(t, e)) : !1;
}
function xd(e) {
  return e.isAttached() ? e.getChildren().some((t) => w(t) && Zs(t, e) !== void 0 && (kd(t, e) || bd(t))) : !1;
}
function Td(e) {
  return e.isAttached() ? e.getChildren().some((t) => w(t) && Zs(t, e) !== void 0 && bd(t)) : !1;
}
function T0(e) {
  if (x0(e))
    return !0;
  const t = N();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const n = t.anchor.getNode();
  return (n.is(e) || e.isParentOf(n)) && xd(e);
}
const Nb = 1, v0 = "marker", vd = Js("isGutterMarker", {
  parse: (e) => e === !0
});
class Hn extends aa {
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
      span: (t) => M0(t) ? {
        conversion: C0,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Br().updateFromJSON(t);
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
    return n && Xi(n) && n.setAttribute("data-text-type", this.getTextType()), { element: n };
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
      version: Nb
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function C0(e) {
  const t = e.getAttribute("data-text-type") ?? "", n = e.textContent ?? "";
  return { node: Br(t, n) };
}
function Br(e, t) {
  return yt(new Hn(e, t));
}
function S0(e) {
  return Gt(Br(v0, e), vd, !0);
}
function _0(e) {
  return Rt(e) && de(e, vd);
}
function M0(e) {
  return e?.tagName === "span";
}
function Rt(e) {
  return e instanceof Hn;
}
function Ob(e) {
  return e?.type === Hn.getType();
}
const $b = "file", Rb = "src", E0 = "colspan", A0 = "category", P0 = "alt", w0 = "closed", N0 = "false";
function O0(e) {
  return e[w0] !== N0;
}
function $0(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => [
    t === $b ? Rb : t,
    n
  ]));
}
function R0(e, t) {
  return e === "figure" && t === Rb ? $b : t;
}
function Ib(e, t) {
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
function Gc(e, t, n) {
  const r = n ?? {}, i = O0(r);
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
        opening: `\\${Ib(t, r[E0])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Qn($0(r), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [A0]: s, ...o } = r;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + Qn(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [P0]: s, ...o } = r;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: Qn(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Qn(r, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const fn = { wantsRun: !1, valueText: void 0 }, Hr = {};
function jl(e, t) {
  if (t === "va")
    return e;
  const n = Vo(e, "va");
  return n.wrapper ?? n.closer ?? e;
}
function Cd(e) {
  const t = N();
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
function Jc(e) {
  const { opener: t, closer: n } = e;
  if (!t)
    return !1;
  const r = N();
  if (!E(r) || !r.isCollapsed())
    return !1;
  const i = r.anchor.getNode(), s = i.is(t) && r.anchor.offset === t.getTextContentSize();
  return n ? s || i.is(n) : s;
}
function I0(e) {
  return Fe(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : w(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : v(e) && de(e, ke) === "attribute";
}
function L0(e) {
  if (w(e)) {
    const r = e.getMarker();
    return r === "va" || r === "vp" ? r : void 0;
  }
  if (!v(e) || de(e, ke) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!w(t))
    return;
  const n = t.getMarker();
  return n === "va" || n === "vp" ? n : void 0;
}
function Vl(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ue(t))
      return t;
    if (!I0(t))
      return;
  }
}
function Vh(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Ue(t),
    ownerOf: (t) => {
      if (Fe(t))
        return t.getRunKind() === e ? Vl(t) : void 0;
      const n = t.getParent();
      return Fe(n) ? n.getRunKind() === e ? Vl(n) : void 0 : L0(t) === e ? Vl(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Ue(t))
        return fn;
      const n = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return n === void 0 ? fn : { wantsRun: !0, valueText: D + n };
    },
    scanPieces: (t) => Ue(t) ? Vo(jl(t, e), e) : Hr,
    graceSite: (t, n) => Ue(t) ? !n.opener && !n.closer ? Cd(jl(t, e)) : Jc(n) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Ue(t) ? jl(t, e) : void 0
    }
  };
}
const q0 = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => U(e),
  ownerOf: () => {
  },
  expectedPieces: () => fn,
  scanPieces: () => Hr,
  graceSite: (e) => U(e) && T0(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, D0 = {
  kind: "char",
  ownerPredicate: (e) => U(e),
  ownerOf: (e) => {
    if (!v(e) || de(e, ke) !== "attribute")
      return;
    const t = e.getParent();
    return U(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!U(e) || Eo(e) === void 0)
      return fn;
    const t = Qn(e.getUnknownAttributes() ?? {}, Ys(e.getMarker()));
    return t === "" ? fn : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => U(e) ? { value: db(e) } : Hr,
  graceSite: (e, t) => {
    if (!U(e) || t.value)
      return !1;
    const n = Eo(e);
    if (!n)
      return !1;
    const r = N();
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
    insertRunBefore: (e) => U(e) ? Eo(e) : void 0
  }
};
function Lb(e) {
  if (w(e))
    return e.getMarker() === "cat";
  if (!v(e) || de(e, ke) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return w(t) && t.getMarker() === "cat";
}
function K0(e) {
  const t = e.getParent();
  if (!q(t))
    return;
  const n = Mt(t);
  if (n)
    for (let r = e.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (r.is(n))
        return t;
      if (!Lb(r))
        return;
    }
}
const U0 = {
  kind: "cat",
  ownerPredicate: (e) => q(e),
  ownerOf: (e) => {
    if (Fe(e))
      return e.getRunKind() === "cat" && q(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Fe(t) ? t.getRunKind() === "cat" && q(t.getParent()) ? t.getParent() ?? void 0 : void 0 : Lb(e) ? K0(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!q(e) || e.getIsCollapsed() !== !1)
      return fn;
    const t = e.getCategory();
    return t === void 0 ? fn : { wantsRun: !0, valueText: D + t };
  },
  scanPieces: (e) => q(e) ? pa(e) : Hr,
  graceSite: (e, t) => {
    if (!q(e))
      return !1;
    if (!t.opener && !t.closer) {
      const n = Mt(e);
      return n !== void 0 && Cd(n);
    }
    return Jc(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => q(e) ? Mt(e) : void 0
  }
};
function B0(e) {
  return Fe(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : w(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : v(e) && de(e, ke) === "attribute";
}
function F0(e) {
  if (w(e)) {
    const r = e.getMarker();
    return r === "ca" || r === "cp" ? r : void 0;
  }
  if (!v(e) || de(e, ke) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!w(t))
    return;
  const n = t.getMarker();
  return n === "ca" || n === "cp" ? n : void 0;
}
function z0(e) {
  const t = e.getParent();
  if (!$e(t))
    return;
  const n = mi(t);
  if (n)
    for (let r = e.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (r.is(n))
        return t;
      if (!B0(r))
        return;
    }
}
function Wh(e) {
  const t = (n) => $e(n) ? e === "ca" ? mi(n) : hb(n) : void 0;
  return {
    kind: e,
    ownerPredicate: (n) => $e(n),
    ownerOf: (n) => {
      if (Fe(n))
        return n.getRunKind() === e && $e(n.getParent()) ? n.getParent() ?? void 0 : void 0;
      const r = n.getParent();
      return Fe(r) ? r.getRunKind() === e && $e(r.getParent()) ? r.getParent() ?? void 0 : void 0 : F0(n) === e ? z0(n) : void 0;
    },
    expectedPieces: (n) => {
      if (!$e(n))
        return fn;
      const r = e === "ca" ? n.getAltnumber() : n.getPubnumber();
      return r === void 0 ? fn : { wantsRun: !0, valueText: D + r };
    },
    scanPieces: (n) => $e(n) ? e === "ca" ? pb(n) : gb(n) : Hr,
    graceSite: (n, r) => {
      if (!$e(n))
        return !1;
      if (!r.opener && !r.closer) {
        const i = t(n);
        return i !== void 0 && Cd(i);
      }
      return Jc(r);
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
function qb(e) {
  if (w(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return v(e) && de(e, ke) === "attribute";
}
function j0(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ke(t)) {
      const n = w(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !n || n.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!qb(t))
      return;
  }
}
const V0 = {
  kind: "milestone",
  ownerPredicate: (e) => Ke(e),
  ownerOf: (e) => {
    const t = Fe(e) ? e.getRunKind() === "milestone" ? e : void 0 : Fe(e.getParent()) ? e.getParent() : qb(e) ? e : void 0;
    if (!t || Fe(t) && t.getRunKind() !== "milestone")
      return;
    const n = t.getPreviousSibling();
    return Fe(t) ? Ke(n) ? n : void 0 : j0(t);
  },
  expectedPieces: (e) => {
    if (!Ke(e))
      return fn;
    const t = fb(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), n = Qn(t, fa(e.getMarker()));
    return { wantsRun: !0, valueText: n === "" ? void 0 : D + n };
  },
  scanPieces: (e) => {
    if (!Ke(e))
      return Hr;
    const { opening: t, attribute: n, closing: r, wrapper: i } = Vc(e);
    return { opener: t, value: n, closer: r, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Ke(e))
      return !1;
    if (!t.opener && !t.closer) {
      const n = N();
      if (!E(n) || !n.isCollapsed())
        return !1;
      const r = n.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && r.is(i) && n.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && r.is(s) && n.anchor.offset === 0;
    }
    return Jc(t);
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
}, W0 = Gc("optbreak", void 0, void 0).opening, H0 = {
  kind: "optbreak",
  ownerPredicate: (e) => et(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!et(t) || t.getTag() !== "optbreak"))
      return v(e) || Rt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: W0 }),
  scanPieces: (e) => et(e) ? { value: e.getFirstChild() ?? void 0 } : Hr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, G0 = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => et(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => fn,
  scanPieces: () => Hr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, J0 = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => U(e),
  ownerOf: () => {
  },
  expectedPieces: () => fn,
  scanPieces: () => Hr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Wo = [
  q0,
  D0,
  Vh("va"),
  Vh("vp"),
  U0,
  Wh("ca"),
  Wh("cp"),
  V0,
  H0,
  G0,
  J0
], Y0 = new Map(Wo.map((e) => [e.kind, e]));
function Fr(e) {
  const t = Y0.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Tr(e) {
  for (const t of Wo) {
    const n = t.ownerOf(e);
    if (n)
      return { owner: n, kind: t.kind };
  }
}
function Db(e) {
  return Tr(e) !== void 0;
}
function X0(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const { type: t, id: n, start: r, end: i, undisplayed: s } = e;
  return typeof t == "string" && typeof n == "string" && Number.isInteger(r) && Number.isInteger(i) && (s === void 0 || typeof s == "boolean");
}
const Yc = Js("displayAnnotations", {
  parse: (e) => {
    if (typeof e != "object" || e === null)
      return;
    const { basis: t, annotations: n } = e;
    if (!(typeof t != "string" || !Array.isArray(n)) && n.every(X0))
      return { basis: t, annotations: n };
  }
});
function Q0(e, t) {
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
function Z0(e, t, n) {
  let r, i;
  for (let s = t; s < n; s++) {
    const o = e[s];
    o !== void 0 && (r ??= o, i = o);
  }
  return r === void 0 || i === void 0 ? void 0 : [r, i + 1];
}
const Kb = 1, eM = "c", Ub = "span";
class Dn extends aa {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n = !1, r, i, s, o, a) {
    super(a), this.__marker = eM, this.__number = t, this.__showMarker = n, this.__sid = r, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: n, __showMarker: r, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Dn(n, r, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Bb(t) ? {
        conversion: tM,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Sd().updateFromJSON(t);
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
    const t = document.createElement(Ub);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Za, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Xi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(Za, `usfm_${this.getMarker()}`), n.setAttribute("data-number", this.getNumber())), { element: n };
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
    return this.getShowMarker() ? jn(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Kb
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
function tM(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Sd(t) };
}
function Sd(e, t, n, r, i, s) {
  return yt(new Dn(e, t, n, r, i, s));
}
function Bb(e) {
  return e ? e.classList.contains(Za) && e.tagName.toLowerCase() === Ub : !1;
}
function Gr(e) {
  return e instanceof Dn;
}
function nM(e) {
  return e?.type === Dn.getType();
}
const Ho = "id", Fb = 1, rM = [
  "type",
  "marker",
  "code",
  "content"
];
class Pn extends lr {
  __marker = Ho;
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
    return new Pn(n, r, i);
  }
  static importJSON(t) {
    const { code: n } = t;
    return zb(n).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return pS(t);
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
      version: Fb
    };
  }
}
function zb(e, t) {
  return yt(new Pn(e, t));
}
function Ie(e) {
  return e instanceof Pn;
}
function _d(e) {
  return e?.type === Pn.getType();
}
const iM = [
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
  zn,
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
], jb = 1, sM = ["type", "marker", "content"];
class It extends Wf {
  __marker;
  __unknownAttributes;
  constructor(t = zn, n, r) {
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
    return t !== void 0 && (iM.includes(t) || (n?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: oM,
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
    return n && Xi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: n };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: jb
    };
  }
  // Mutation
  insertNewAfter(t, n) {
    const r = qs(this.getMarker());
    return r.setTextFormat(t.format), r.setTextStyle(t.style), r.setDirection(this.getDirection()), r.setFormat(this.getFormatType()), r.setStyle(this.getTextStyle()), this.insertAfter(r, n), r;
  }
}
function oM(e) {
  const t = e.getAttribute("data-marker") ?? void 0, n = qs(t);
  if (e.style) {
    n.setFormat(e.style.textAlign);
    const r = parseInt(e.style.textIndent, 10) / 20;
    r > 0 && n.setIndent(r);
  }
  return { node: n };
}
function qs(e, t) {
  return yt(new It(e, t));
}
function me(e) {
  return e instanceof It;
}
function Md(e) {
  return e?.type === It.getType();
}
const Vb = /[ \u00A0]{2,}/g;
function aM(e) {
  return [...e.matchAll(Vb)].map((t) => [
    t.index + 1,
    t.index + t[0].length
  ]);
}
function Hh(e) {
  return e.replace(Vb, (t) => t[0]);
}
const cM = "​", Ds = cM;
var Gh;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Gh || (Gh = {}));
var Jh;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Jh || (Jh = {}));
function lM() {
  return Re(Ds);
}
function uM(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Ds, ""));
}
function rs(e) {
  return e.length > 0 && e.includes(Ds) && e.replaceAll(Ds, "") === "";
}
function ha(e) {
  return v(e) && rs(e.getTextContent());
}
function Wb(e) {
  return a0(e) || nM(e);
}
function at(e) {
  return $e(e) || Gr(e);
}
function Hb(e, t) {
  return e.find((n) => at(n) && n.getNumber() === t.toString());
}
function fM(e, t = !1) {
  return e.find((n, r) => (!t || r > 0) && at(n));
}
function qu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const n = t.getPreviousSibling();
    if (n)
      return n;
    t = t.getParent();
  }
}
function dM(e) {
  if (!e)
    return;
  if (at(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !at(t); )
    t = t.getPreviousSibling();
  if (t && at(t))
    return t;
}
function wn(e) {
  return Ze(e, q) ?? void 0;
}
function pM(e) {
  return Ie(e) || $e(e) || U(e) || Gr(e) || Ct(e) || Ke(e) || me(e) || q(e) || Ue(e) || et(e);
}
function Ed(e) {
  if (e.anchor.type === "element") {
    const n = e.anchor.getNode(), r = e.anchor.offset;
    if (r < n.getChildrenSize())
      return n.getChildAtIndex(r);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Gb(e) {
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
  return me(e) || Ct(e);
}
function hM(e) {
  return Md(e) || Wc(e);
}
function Ks(e, t) {
  let n = e.getParent();
  for (; n; ) {
    if (n.getKey() === t)
      return !0;
    n = n.getParent();
  }
  return !1;
}
function Fi(e, t) {
  const n = de(t, Bi), r = !!(e.cid && n), i = !e.cid && !n;
  return e.style === t.getMarker() && (i || r && e.cid === n);
}
function gM(e, t) {
  const n = A(e) ? e : e.getParent(), r = A(t) ? t : t.getParent(), i = n && r ? mS(n, r) : void 0;
  return i ? i.commonAncestor : void 0;
}
function mM(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [n, r] = t, i = e.isBackward() ? n : r;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function zr(e) {
  return e?.type === st.getType();
}
function yM(e, t) {
  if (!t)
    return;
  const n = e.findIndex((r) => r === t);
  n && (e.length = n);
}
function bM(e, t) {
  if (!t)
    return e;
  const n = t.getIndexWithinParent();
  return e.splice(n + 1, e.length - n - 1);
}
function Jb(e, t, n) {
  const r = Ve(e);
  if (t?.startsWith(r)) {
    const i = t.slice(r.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (n = s[1]);
  }
  return n;
}
function kM(e) {
  const t = e[Dr];
  if (t && typeof t == "object" && "textType" in t) {
    const n = t.textType;
    if (typeof n == "string")
      return n;
  }
}
function Yb(e) {
  return Qb(e) || zr(e) && kM(e) === "attribute" ? "" : zr(e) && e.text !== D ? e.text : ob(e) ? e.children.map((t) => Yb(t)).join("") : "";
}
function xM(e) {
  return e.map((n) => Yb(n)).filter((n) => n.length > 0).join(" ").trim();
}
function Ad(e) {
  const t = [];
  for (const n of e) {
    if (!U(n))
      continue;
    const r = Xb(n);
    r !== Pt && r.length > 0 && t.push(r);
  }
  return t.join(" ").trim();
}
function Xb(e) {
  return w(e) || mn(e) || v(e) && de(e, ke) === "attribute" ? "" : v(e) ? e.getTextContent() : A(e) ? e.getChildren().map((t) => Xb(t)).join("") : "";
}
function mn(e) {
  return Rt(e) && e.getTextType() === "marker";
}
function yn(e) {
  return w(e) || mn(e);
}
function Pd(e) {
  if (!e || !yn(e))
    return !1;
  const t = e.getParent();
  return Ie(t) && e.is(t.getFirstChild());
}
function Qb(e) {
  return Xs(e) || Ob(e) && e.textType === "marker";
}
function Yh(e, t) {
  TM(e, t), e.setMarker(t);
}
function TM(e, t) {
  const n = e.getMarker(), r = Ve(n), i = Ve(n, !0), s = ot(n), o = ot(n, !0), a = ze.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!yn(c))
      return;
    const l = c.getTextContent(), u = l === r || l === i, f = !u && (l === s || l === o);
    if (!(!u && !f)) {
      if (f && a) {
        c.remove();
        return;
      }
      if (w(c))
        c.setMarker(t);
      else if (mn(c)) {
        const d = l.startsWith(Ve("", !0));
        c.setTextContent(u ? Ve(t, d) : ot(t, d));
      }
    }
  });
}
function pt(e, t = hS) {
  const n = { ...e };
  return t.forEach((r) => {
    Reflect.deleteProperty(n, r);
  }), Object.keys(n).length === 0 ? void 0 : n;
}
function ct(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Zb(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function ek(e) {
  if (!E(e))
    return Xh(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !A(t) || e.anchor.type === "text" && !v(t)))
    return t ?? void 0;
  try {
    return Xh(e) ?? t ?? void 0;
  } catch (r) {
    if (Zb(r))
      return t ?? void 0;
    throw r;
  }
}
function vM(e, t) {
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
function wd(e, t) {
  if (!t)
    return !1;
  const n = t.split("-").map((r) => parseInt(r));
  if (n.length < 1 || n.length > 2 || n[0] > n[1])
    throw new Error("isVerseInRange: invalid range");
  return n.length === 1 ? e === n[0] : n.length === 2 && isNaN(n[1]) ? e >= n[0] : (n.length === 2 && isNaN(n[0]) || e >= n[0]) && e <= n[1];
}
function CM(e) {
  return !!e && e.includes("-");
}
function tk(e) {
  const t = e.split("-"), n = parseInt(t[0], 10), r = t.length > 1 ? parseInt(t[t.length - 1], 10) : n;
  return { start: n, end: r };
}
function Xh(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Nd(e) {
  if (!v(e))
    return;
  const t = qn(e);
  if (!q(t) || !Mt(t)?.is(e))
    return;
  const { start: n, end: r } = jc(e.getTextContent(), t.getCaller());
  return n < r ? { start: n, end: r } : void 0;
}
function Nn(e) {
  if (!e)
    return !1;
  if (Qi(e) || w(e) || mn(e) || Fe(e) || e.getType() === gi || Rt(e) && e.getTextType() === "attribute")
    return !0;
  const t = qn(e);
  if ($e(t))
    return !0;
  if (v(e) && q(t) && Mt(t)?.is(e))
    return !Nd(e);
  if (v(e)) {
    const n = de(e, ke);
    if (n === Mr || n === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || rs(r))
      return !0;
    if (r === D)
      return !nk(e);
  }
  return !1;
}
function nk(e) {
  if (e.getTextContent() !== D || de(e, ke) !== void 0 || !(ue(e.getParent()) || ue(e.getPreviousSibling()) || ue(e.getNextSibling())) || Qs(e) > 0)
    return !1;
  const n = qn(e);
  return !U(n) || rk(n, e);
}
function rk(e, t) {
  return e.getChildren().some((n) => n.is(t) ? !1 : ue(n) ? rk(n, t) : v(n) ? !w(n) && de(n, ke) === void 0 && n.getTextContent() !== "" && n.getTextContent() !== D && !rs(n.getTextContent()) : A(n) && !Fe(n));
}
function zi() {
  const e = Re(D);
  return Gt(e, ke, Mr), e.setMode("token"), e;
}
function SM(e) {
  const t = e.getTextContent();
  t.startsWith(D) || e.setTextContent(D + t);
}
function kn(e) {
  return v(e) && de(e, ke) === Mr;
}
function ik(e) {
  const t = e.getFirstChild();
  if (!yn(t) || t === null || kn(t.getNextSibling()))
    return !1;
  const n = N();
  if (!E(n) || !n.isCollapsed())
    return !1;
  const r = n.anchor.getNode();
  if (r.is(t) || r.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && r.is(i) && n.anchor.offset === 0;
}
function sk(e) {
  if ($e(e))
    return [];
  const t = [];
  let n;
  const r = () => {
    n && (t.push({ type: "text", nodes: n }), n = void 0);
  }, i = (s) => {
    if (!Nn(s)) {
      if (pd(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (v(s) && s.getType() === st.getType()) {
        n ??= [], n.push(s);
        return;
      }
      r(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), r(), t;
}
function _M(e, t) {
  const n = [];
  let r = 0;
  for (const i of e) {
    const s = Nd(i), o = s ? s.start : Qs(i), a = s ? s.end : i.getTextContentSize(), c = t ? aM(i.getTextContent().slice(o, a)).map(([u, f]) => [u + o, f + o]) : [];
    a < i.getTextContentSize() && c.push([a, i.getTextContentSize()]);
    const l = i.getTextContentSize() - o - c.reduce((u, [f, d]) => u + d - f, 0);
    n.push({ node: i, start: r, lead: o, collapsed: c, length: l }), r += l;
  }
  return { type: "text", segments: n, length: r };
}
function ok(e) {
  return e.lead > 0 ? [[0, e.lead], ...e.collapsed] : e.collapsed;
}
function MM(e, t) {
  let n = t;
  for (const [r, i] of ok(e)) {
    if (t <= r)
      break;
    n -= Math.min(t, i) - r;
  }
  return e.start + n;
}
function Qh(e, t) {
  let n = t;
  for (const [r, i] of ok(e)) {
    if (r > n)
      break;
    n += i - r;
  }
  return n;
}
function zt(e, t) {
  return sk(e).map((n) => n.type === "element" ? n : _M(n.nodes, t));
}
function EM(e, t) {
  return sk(e).findIndex((n) => n.type === "element" ? n.node.is(t) : n.nodes.some((r) => r.is(t)));
}
function Ns(e, t, n) {
  const r = qn(e);
  if (!r)
    return;
  const i = zt(r, n);
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.type !== "text")
      continue;
    const a = o.segments.find((c) => c.node.is(e));
    if (a)
      return { parent: r, index: s, offset: MM(a, t) };
  }
}
function AM(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const r of e.segments)
    if (t >= r.start && t < r.start + r.length)
      return [r.node, Qh(r, t - r.start)];
  const n = e.segments[e.segments.length - 1];
  if (n)
    return [n.node, Qh(n, t - n.start)];
}
function As(e, t, n) {
  const r = e.getChildAtIndex(t);
  if (Sb(e)) {
    const s = e.getParentOrThrow();
    return r ? Nn(r) ? As(e, t + 1, n) : Du(s, r, n) : As(s, e.getIndexWithinParent() + 1, n);
  }
  const i = zt(e, n);
  return r ? Nn(r) || pd(r) && !ak(i, r) ? As(e, t + 1, n) : Du(e, r, n) : { type: "index", index: i.length };
}
function PM(e, t) {
  const n = qn(e);
  if (n && ak(zt(n, t), e))
    return { parent: n, point: Du(n, e, t) };
}
function ak(e, t) {
  return e.some((n) => n.type === "element" ? n.node.is(t) || Ks(n.node, t.getKey()) : n.segments.some((r) => r.node.is(t) || Ks(r.node, t.getKey())));
}
function Du(e, t, n) {
  const r = zt(e, n);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(t) || Ks(s.node, t.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(t) || Ks(o.node, t.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
const ic = "unmatched", ck = 2;
function Ao(e) {
  return `\\${e}`;
}
class fr extends st {
  __marker;
  constructor(t = "", n) {
    super(Ao(t), n), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: n, __key: r } = t;
    return new fr(n, r);
  }
  static importDOM() {
    return {
      [ic]: (t) => NM(t) ? {
        conversion: wM,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Od().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const n = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? Ao(n)
    }).getWritable();
    return i.__marker = n, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n.__text = Ao(t), n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const n = super.createDOM(t);
    return n.setAttribute("data-marker", this.__marker), n.classList.add(Nh), n.title = Zh(this.__marker), n;
  }
  updateDOM(t, n, r) {
    const i = super.updateDOM(t, n, r);
    return t.__marker !== this.__marker && (n.setAttribute("data-marker", this.__marker), n.title = Zh(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(ic);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Nh), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: ck
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function lk(e) {
  return e.getTextContent() === Ao(e.getMarker());
}
function Zh(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function wM(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Od(t) };
}
function Od(e) {
  return yt(new fr(e));
}
function NM(e) {
  return e?.tagName.toLowerCase() === ic;
}
function xn(e) {
  return e instanceof fr;
}
function OM(e) {
  return e?.type === fr.getType();
}
const $M = /* @__PURE__ */ new Set([
  gi,
  By,
  Hn.getType(),
  // A chapter in the views without editable markers: the same whole-node treatment as a verse.
  Dn.getType()
]);
function $d(e) {
  return v(e) && de(e, ke) === "attribute";
}
function uk(e) {
  if (!v(e))
    return !1;
  let t = e.getParent();
  for (; ue(t); )
    t = t.getParent();
  return q(t) ? Mt(t)?.is(e) ?? !1 : $e(t) ? mi(t)?.is(e) ?? !1 : !1;
}
function fk(e) {
  return bn(e) ? $M.has(e.getType()) : !v(e) || kn(e) ? !1 : w(e) || Ue(e) || $d(e) || uk(e) || // An unmatched closer (`ImmutableUnmatchedNode`) is a `TextNode` subclass, not a decorator, so
  // the decorator-type set above cannot reach it.
  xn(e);
}
function Rd(e) {
  if (!v(e))
    return [0, 0];
  if (xn(e))
    return [0, e.getTextContentSize()];
  const t = e.getTextContent(), n = t.length - t.trimStart().length;
  return n === t.length ? [n, n] : [n, t.trimEnd().length];
}
function dk(e, t, n) {
  return e.type === t && e.id === n;
}
function pk(e, t) {
  if (e.basis === t)
    return e.annotations;
  const n = Q0(e.basis, t);
  return e.annotations.flatMap((r) => {
    if (r.start === r.end)
      return [r];
    const i = Z0(n, r.start, r.end);
    return i ? [{ ...r, start: i[0], end: i[1] }] : [];
  });
}
function sc(e) {
  return bn(e) ? oc(e) : e.getTextContent();
}
function RM(e) {
  return bn(e) ? is(e) : e.getTextContent();
}
function Id(e) {
  const t = de(e, Yc);
  return t ? pk(t, sc(e)) : [];
}
function IM(e, t) {
  if (t.start === t.end)
    return t;
  let n, r;
  for (let i = t.start; i < t.end; i++) {
    const s = qd.renderedOffset(e, i);
    if (s === "drawn")
      return { type: t.type, id: t.id, start: 0, end: 0 };
    s !== void 0 && (n = Math.min(n ?? s, s), r = Math.max(r ?? s + 1, s + 1));
  }
  return n === void 0 || r === void 0 ? { ...t, undisplayed: !0 } : { type: t.type, id: t.id, start: n, end: r };
}
function Ir(e) {
  const t = Id(e);
  return bn(e) ? t.map((n) => IM(e, n)) : t;
}
function Ld(e, t) {
  const n = [...t].sort((r, i) => r.start - i.start || r.end - i.end);
  Gt(e, Yc, n.length > 0 ? { basis: sc(e), annotations: n } : void 0);
}
function eg(e) {
  const t = Xc(e).trim();
  if (t)
    return t;
  const n = is(e), [r, i] = Qc(n);
  return n.slice(r, i);
}
const hk = {
  holdableText: eg,
  renderedOffset: (e, t) => {
    const n = eg(e);
    if (t >= n.length)
      return;
    const r = is(e), [i] = Qc(r);
    return r.slice(i, i + n.length) === n ? i + t : "drawn";
  }
};
let qd = hk;
function LM(e) {
  qd = e ?? hk;
}
function oc(e) {
  return qd.holdableText(e);
}
function qM(e, t, n, r, i) {
  let s = { type: t, id: n, start: r, end: i };
  const o = [];
  for (const a of Id(e))
    dk(a, t, n) && a.start <= s.end && s.start <= a.end ? s = {
      ...s,
      start: Math.min(s.start, a.start),
      end: Math.max(s.end, a.end)
    } : o.push(a);
  Ld(e, [...o, s]);
}
function gk(e, t, n) {
  const r = Id(e), i = r.filter((s) => !dk(s, t, n));
  return i.length === r.length ? !1 : (Ld(e, i), !0);
}
function Xc(e) {
  if (e.getType() !== gi)
    return e.getTextContent();
  const t = e.getParent();
  return q(t) ? t.getCaller() : "";
}
function DM(e) {
  return "getRenderedText" in e && typeof e.getRenderedText == "function";
}
function is(e) {
  if (!bn(e) || !DM(e))
    return "";
  const t = e.getRenderedText();
  return typeof t == "string" ? t : "";
}
function tg(e) {
  return e === Uo || /\s/u.test(e);
}
function Qc(e) {
  let t = 0;
  for (; t < e.length && tg(e[t]); )
    t++;
  if (t === e.length)
    return [0, 0];
  let n = e.length;
  for (; n > t && tg(e[n - 1]); )
    n--;
  return [t, n];
}
function Ku(e, t) {
  if (t.undisplayed)
    return oc(e).slice(t.start, t.end);
  if (t.start !== t.end)
    return RM(e).slice(t.start, t.end);
  const n = oc(e);
  if (n)
    return n;
  const r = is(e), [i, s] = Qc(r);
  return r.slice(i, s);
}
function KM(e, t, n) {
  return Ir(e).filter((r) => r.type === t && (r.undisplayed || r.start === r.end || r.start <= n && n <= r.end)).map((r) => r.id);
}
function UM(e) {
  const t = de(e, Yc);
  !t || t.basis === sc(e) || Ld(e, pk(t, sc(e)));
}
const ac = /* @__PURE__ */ new WeakMap();
function Dd(e, t) {
  return JSON.stringify([e, t]);
}
function BM(e, t, n) {
  const r = Ft();
  let i = ac.get(r);
  i || (i = /* @__PURE__ */ new Map(), ac.set(r, i));
  const s = Dd(e, t), o = i.get(s), a = Object.fromEntries(Object.entries(n).filter(([, c]) => c !== void 0));
  i.set(s, { ...o, ...a });
}
function cc(e, t, n) {
  return ac.get(e)?.get(Dd(t, n));
}
function mk(e, t, n) {
  ac.get(e)?.delete(Dd(t, n));
}
function FM(e, t = []) {
  const r = [
    st,
    Wn,
    Bt,
    Hn,
    Dn,
    ...t
  ].filter((i) => e.hasNodes([i])).map((i) => e.registerNodeTransform(i, UM));
  return () => r.forEach((i) => i());
}
function zM(e) {
  return Ue(e) || Ke(e) || Fe(e) || Fe(e.getParent()) || uk(e) || xn(e);
}
function Kd(e) {
  return v(e) ? e.getTextContentSize() : 1;
}
function Ud(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getFirstChild();
    if (!n)
      return t;
    t = n;
  }
  return t;
}
function yk(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getLastChild();
    if (!n)
      return t;
    t = n;
  }
  return t;
}
function ng(e) {
  const t = e.getNode();
  if (!A(t))
    return { leaf: t, offset: v(t) ? e.offset : Math.min(e.offset, 1) };
  const n = t.getChildAtIndex(e.offset);
  if (n)
    return { leaf: Ud(n), offset: 0 };
  const r = t.getLastChild();
  if (!r)
    return { leaf: t, offset: 0 };
  const i = yk(r);
  return { leaf: i, offset: Kd(i) };
}
function Ba(e, t) {
  return e.leaf.is(t.leaf) ? e.offset - t.offset : e.leaf.isBefore(t.leaf) ? -1 : 1;
}
function bk(e, t, n) {
  const r = Kd(e);
  let i = r;
  t.leaf.is(e) ? i = t.offset : t.leaf.isBefore(e) && (i = 0);
  let s = 0;
  return n.leaf.is(e) ? s = n.offset : e.isBefore(n.leaf) && (s = r), [i, Math.max(i, s)];
}
function jM(e) {
  for (let t = e; t; t = t.getParent()) {
    const n = t.getNextSibling();
    if (n)
      return Ud(n);
  }
}
function VM(e, t, n) {
  const r = Ud(e), i = yk(e);
  if (Ba(t, { leaf: r, offset: 0 }) > 0 || Ba(n, { leaf: i, offset: Kd(i) }) < 0)
    return !1;
  if (kn(i)) {
    const s = jM(e);
    if (!s || Ba(n, { leaf: s, offset: 0 }) <= 0)
      return !1;
  }
  return !0;
}
function WM(e, t, n, r) {
  if (!fk(e))
    return;
  const [i, s] = bk(e, t, n);
  if (s <= i)
    return;
  if (!v(e)) {
    const l = r?.get(e.getKey());
    return l ? [l.start, l.end] : [0, oc(e).length];
  }
  const [o, a] = Rd(e), c = [Math.max(i, o), Math.min(s, a)];
  return c[1] > c[0] ? c : void 0;
}
function Bd(e, t, n, r, i, s, o, a = {}) {
  if (e.isCollapsed())
    return;
  const c = e.getNodes(), l = e.isBackward(), [u, f] = l ? [e.focus, e.anchor] : [e.anchor, e.focus], d = ng(u), p = ng(f);
  if (Ba(d, p) >= 0)
    return;
  let h = !1;
  const g = (k) => {
    const x = WM(k, d, p, a.decoratorHolds);
    x && (Wt(Ka), qM(k, t, n, x[0], x[1]), h = !0);
  };
  let m, y;
  for (const k of c) {
    if (A(y) && y.isParentOf(k))
      continue;
    if (w(k) || kn(k) || $d(k) || zM(k)) {
      g(k), m = k.getParent(), y = void 0;
      continue;
    }
    let x = null;
    if (v(k)) {
      const [_, S] = bk(k, d, p), F = Math.max(_, Qs(k));
      if (F >= S)
        continue;
      Wt(Ka), x = k.splitText(F, S)[F > 0 ? 1 : 0];
    } else {
      if (ue(k))
        continue;
      if (A(k) && k.isInline()) {
        if (!VM(k, d, p))
          continue;
        x = k;
      }
    }
    if (x !== null) {
      if (x && x.is(m))
        continue;
      Wt(Ka);
      const _ = x.getParent();
      (_ == null || !_.is(m)) && (y = void 0), m = _, y === void 0 && (y = Ui(), y.addID(t, n, r, i, s, o), x.insertBefore(y)), y.append(x);
    } else
      g(k), m = void 0, y = void 0;
  }
  h && BM(t, n, { onClick: r, onRemove: i, onMouseEnter: s, onMouseLeave: o }), t === Kt && A(y) && (l ? y.selectStart() : y.selectEnd());
}
const kk = "table:row", rg = "immutable-table-row", xk = 1, Uu = "tr", HM = ["type", "marker", "content"];
class ss extends lr {
  __marker;
  __unknownAttributes;
  constructor(t = Uu, n, r) {
    super(r), this.__marker = t, this.__unknownAttributes = n;
  }
  static getType() {
    return rg;
  }
  static clone(t) {
    return new ss(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return GM().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Uu).setUnknownAttributes(t.unknownAttributes);
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
      type: rg,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: xk
    };
  }
}
function GM(e, t) {
  return yt(new ss(e, t));
}
function Tk(e) {
  return e instanceof ss;
}
const vk = "table:cell", ig = "immutable-table-cell", Ck = 1, Bu = "tc1", JM = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function YM(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class os extends lr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Bu, n, r, i, s) {
    super(s), this.__marker = t, this.__align = n, this.__colspan = r, this.__unknownAttributes = i;
  }
  static getType() {
    return ig;
  }
  static clone(t) {
    const { __marker: n, __align: r, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new os(n, r, i, s, o);
  }
  static importJSON(t) {
    return XM().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Bu).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const r = YM(this.__align);
    return r && (n.style.textAlign = r), this.__colspan && n.setAttribute("colspan", this.__colspan), n;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), n = this.getColspan(), r = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: ig,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...n !== void 0 && { colspan: n },
      ...r !== void 0 && { unknownAttributes: r },
      version: Ck
    };
  }
}
function XM(e, t, n, r) {
  return yt(new os(e, t, n, r));
}
function QM(e) {
  return e instanceof os;
}
const Fu = /* @__PURE__ */ new WeakMap();
function Wl(e, t) {
  t ? Fu.set(e, t) : Fu.delete(e);
}
function Fd(e) {
  return Fu.get(e);
}
function ga(e, t) {
  const n = e.getChildAtIndex(t);
  return v(n) ? n : void 0;
}
function or(e, t) {
  const n = ga(e, t);
  n ? n.select(0, 0) : e.select(t, t);
}
function Go(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function ZM(e) {
  return e.getChildren().some((t) => w(t) && t.getMarkerSyntax() === "closing");
}
function eE(e) {
  return Go(e) ? void 0 : { closed: "false" };
}
function tE(e, t, n, r) {
  const i = t.getMarker(), s = Hc(t), o = ZM(t), a = r ? $t(i, "opening", s) : void 0;
  if (a) {
    e.append(a);
    const [c] = n;
    Wr(c) && !c.getTextContent().startsWith(D) && c.setTextContent(D + c.getTextContent());
  }
  e.append(...n), a && wb(a, e), o && e.append($t(i, "closing", s));
}
function ji(e) {
  return Ze(e, U) ?? void 0;
}
function nE(e) {
  let t = e.getParent();
  for (; U(t); )
    t = t.getParent();
  return t;
}
function zu(e) {
  const t = Sk(e);
  return e.getChildren().every((n) => w(n) || t && de(n, ke) === "attribute" || v(n) && n.getTextContent().replaceAll(D, "") === "");
}
function Sk(e) {
  return Go(e);
}
function rE(e, t) {
  const n = e.getUnknownAttributes(), r = n ? Qn(n, Ys(e.getMarker())) : "";
  r !== "" && t.insertAfter(Re(r)), e.remove();
}
function iE(e, t) {
  if (Go(e))
    return;
  const n = e.getUnknownAttributes();
  if (n) {
    const r = { ...n };
    delete r.closed, e.setUnknownAttributes(Object.keys(r).length > 0 ? r : void 0);
  }
  t && e.append($t(e.getMarker(), "closing", Hc(e)));
}
function sE(e, t) {
  return U(e) && !Go(e) && !Go(t);
}
function oE(e, t, n) {
  zu(e) && e.getChildren().forEach((s) => {
    w(s) || s.remove();
  });
  const [r] = t;
  n && Wr(r) && !r.getTextContent().startsWith(D) && r.setTextContent(D + r.getTextContent()), e.append(...t);
  const i = e.getFirstChild();
  n && w(i) && i.getMarkerSyntax() === "opening" && wb(i, e);
}
function aE(e, t, n) {
  const { renderGlyphs: r, closeImplicitSpans: i = !1 } = n, s = Sk(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), f = w(l) && l.getMarkerSyntax() === "closing", d = s && de(l, ke) === "attribute";
    !f && !d && o.push(l), l = u;
  }
  const a = sE(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      oE(e, o, r);
    else {
      const l = Ur(t.getMarker(), eE(t));
      tE(l, t, o, r), e.insertAfter(l), zu(l) ? l.remove() : c = l;
    }
  i && !a && iE(t, r), zu(t) && rE(t, c);
}
function Us(e, t) {
  let n = e.getParent();
  for (; U(n); )
    aE(e, n, t), n = e.getParent();
}
function Zc(e) {
  if (v(e) && !w(e)) {
    const t = Qs(e);
    e.select(t, t);
    return;
  }
  if (A(e)) {
    const t = e.getChildren().filter((r) => !w(r)), n = t.find((r, i) => i === t.length - 1 || !v(r) || r.getTextContent() !== D);
    if (n) {
      Zc(n);
      return;
    }
    e.selectEnd();
  }
}
function cE(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function ju(e) {
  return !!(e.opener || e.value || e.closer);
}
function sg(e) {
  return /^\s/.test(e);
}
function zd(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !sg(t) || !sg(e))
    return !0;
  const n = t.trim();
  return n === "" || e.trim() !== n;
}
function el(e, t, n) {
  return n.wantsRun ? zd(t.value?.getTextContent(), n.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : cE(t);
}
function lE(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const n = e.expectedPieces(t);
  if (!n.wantsRun)
    return !1;
  const r = e.scanPieces(t);
  return zd(r.value?.getTextContent(), n.valueText) || e.byteFormat.glyphs !== "none" && (!r.opener || e.byteFormat.closerSyntax !== "none" && !r.closer) ? !1 : r.wrapper === void 0;
}
function _k(e, t) {
  return !ju(e.scanPieces(t));
}
function ma(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const n = e.expectedPieces(t), r = e.scanPieces(t);
  if (!el(e, r, n))
    return !1;
  const i = N();
  if (!E(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = r;
  return o && (s.is(o) || Ks(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, r);
}
function uE(e, t, n, r) {
  return !n.wantsRun || ju(r) || Fd(Ft()) === "remote" ? !1 : Ft().getEditorState().read(() => {
    const i = X(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : ju(e.scanPieces(i));
  });
}
function fE(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function og(e) {
  const t = Re(e);
  return Gt(t, ke, "attribute"), t;
}
function dE(e, t, n) {
  if (n.wrapper)
    return n.wrapper;
  const { runKind: r, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!r || !s)
    return;
  const o = nb(r);
  return s.insertAfter(o), n.opener && o.append(n.opener), n.value && o.append(n.value), n.closer && o.append(n.closer), o;
}
function pE(e, t, n, r) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const d = c?.(t);
    if (!d || r.valueText === void 0)
      return;
    v(n.value) ? n.value.setTextContent(r.valueText) : d.insertBefore(og(r.valueText));
    return;
  }
  const l = dE(e, t, n);
  if (!l || s === "none" || !o || !a)
    return;
  const u = n.opener ?? (() => {
    const d = $t(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(d) : l.append(d), d;
  })();
  let f = n.value;
  r.valueText === void 0 ? (f?.remove(), f = void 0) : v(f) ? zd(f.getTextContent(), r.valueText) && f.setTextContent(r.valueText) : (f = og(r.valueText), u.insertAfter(f)), a !== "none" && !n.closer && (f ?? u).insertAfter($t(a === "selfClosing" ? "" : o(t), a));
}
function Jo(e, t) {
  const { writer: n } = e.byteFormat;
  if (n === "kind-owned" || n === "read-only" || !t.isAttached())
    return;
  const r = e.expectedPieces(t), i = e.scanPieces(t);
  if (el(e, i, r) && !Mb(t)) {
    if (uE(e, t, r, i)) {
      Eb(t);
      return;
    }
    if (!ma(e, t)) {
      if (!r.wantsRun) {
        fE(i);
        return;
      }
      pE(e, t, i, r);
    }
  }
}
function hE(e, t, n) {
  Jo(e, t), t.isAttached() && ma(e, t) && n.add(t.getKey());
}
function ya(e) {
  if (!v(e))
    return !1;
  if (w(e) || Ue(e) || xn(e))
    return !0;
  const t = de(e, ke);
  return t === "attribute" || t === Mr;
}
function jd(e, t) {
  return w(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && ur(e) && U(e.getParent())) : !1;
}
function gE() {
  const e = N();
  return E(e) ? jd(e.focus.getNode(), e.focus.offset) : !1;
}
function Mk(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return v(t) && ya(t) ? t : void 0;
}
function mE(e) {
  const t = Mk(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function yE(e) {
  const t = Mk(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function ag(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function cg(e, t) {
  e.set(t.key, t.offset, t.type);
}
function bE(e, t) {
  let n = yE(e);
  for (; n; ) {
    const r = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (!v(r))
      return;
    if (!ya(r))
      return { node: r, offset: t === "next" ? 0 : r.getTextContentSize() };
    n = r;
  }
}
function lg(e, t) {
  const n = bE(e, t);
  return n ? (e.set(n.node.getKey(), n.offset, "text"), !0) : !1;
}
function Vd(e) {
  if (e.isCollapsed()) {
    const a = mE(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), n = t ? e.focus : e.anchor, r = t ? e.anchor : e.focus, i = [ag(n), ag(r)], s = lg(n, "next"), o = lg(r, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (cg(n, i[0]), cg(r, i[1]), !1) : !0;
}
const Ek = Js("verseBlockSource", {
  parse: (e) => typeof e == "number" ? e : void 0
}), lc = "verse-block", Ak = 1, kE = "verse-block";
class eo extends lr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", n) {
    super(n), this.__number = t;
  }
  static getType() {
    return lc;
  }
  static clone(t) {
    return new eo(t.__number, t.__key);
  }
  static importJSON(t) {
    return xE().updateFromJSON(t);
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
    return tk(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(kE), ug(t, this.__number), t;
  }
  updateDOM(t, n) {
    return t.__number !== this.__number && ug(n, this.__number), !1;
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
      type: lc,
      number: this.getNumber(),
      version: Ak
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function ug(e, t) {
  const { start: n, end: r } = tk(t), i = !isNaN(n) && !isNaN(r) && n <= r;
  e.setAttribute("data-verse-number", t), fg(e, "data-verse-start", i ? n : NaN), fg(e, "data-verse-end", i ? r : NaN);
}
function fg(e, t, n) {
  isNaN(n) ? e.removeAttribute(t) : e.setAttribute(t, n.toString());
}
function xE(e) {
  return yt(new eo(e));
}
function Vi(e) {
  return e instanceof eo;
}
function TE(e) {
  return e?.type === lc;
}
const vE = [
  Pn,
  Dn,
  Ln,
  Bt,
  ze,
  Je,
  sr,
  Wn,
  ts,
  Hn,
  fr,
  It,
  ci,
  ns,
  ss,
  os,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Er,
  {
    replace: Wf,
    with: () => Vn(),
    withKlass: ci
  }
], uc = {
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
}, CE = {
  paragraph: T.Paragraph,
  character: T.Character,
  note: T.Note,
  milestone: T.Milestone
};
function SE(e) {
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
      category: xr(n)?.category ?? C.Uncategorized,
      type: CE[r.styleType] ?? T.Unknown,
      description: r.description ?? "",
      hasEndMarker: !!r.endMarker,
      children: xr(n)?.children
    } : void 0;
    return t.set(n, i), i;
  };
}
function dg(e, t, n) {
  const r = {
    type: rr,
    version: nr,
    content: e
  }, i = t.serializeEditorState(r, n);
  return Wc(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Pk = "v", wk = 1, _E = "verse-selected";
class Jt extends aa {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n = !1, r, i, s, o, a) {
    super(a), this.__marker = Pk, this.__number = t, this.__showMarker = n, this.__sid = r, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return By;
  }
  static clone(t) {
    const { __number: n, __showMarker: r, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Jt(n, r, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => AE(t) ? {
        conversion: EE,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Wd().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Su, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Xi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(Su, `usfm_${this.getMarker()}`), n.setAttribute("data-number", this.getNumber())), { element: n };
  }
  decorate() {
    return P(ME, { nodeKey: this.getKey(), text: this.getRenderedText() });
  }
  /** The text this verse shows on screen: its whole `\v N` glyph, or only its number. */
  getRenderedText() {
    return this.getShowMarker() ? jn(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Uo + this.getNumber() + Uo
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
      version: wk
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (n) {
      if (Zb(n))
        return !1;
      throw n;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function ME({ nodeKey: e, text: t }) {
  const [n] = $S(e);
  return P("span", { className: n ? _E : void 0, children: t });
}
function EE(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Wd(t) };
}
function Wd(e, t, n, r, i, s) {
  return yt(new Jt(e, t, n, r, i, s));
}
function AE(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Pk;
}
function Ar(e) {
  return e instanceof Jt;
}
function PE(e) {
  return e?.type === Jt.getType();
}
function Ee(e) {
  return Ue(e) || Ar(e);
}
function Nk(e) {
  return ud(e) || PE(e);
}
function wE(e) {
  return NE(e).find((t) => me(t));
}
function NE(e) {
  return e.some(Vi) ? e.flatMap((t) => Vi(t) ? t.getChildren() : t) : e;
}
function tl(e) {
  return A(e) ? Vi(e) ? e.getChildren().flatMap(tl) : e.getChildren() : [];
}
function OE(e, t) {
  return tl(e).find((i) => Ee(i) && wd(t, i.getNumber()));
}
function $E(e, t) {
  return t === 0 ? wE(e) : e.map((n) => OE(n, t)).filter((n) => n)[0];
}
function fc(e) {
  return tl(e).find((n) => Ee(n));
}
function Ok(e, t) {
  if (!A(e) || t <= 0)
    return;
  const n = e.getChildren();
  for (let r = t - 1; r >= 0; r--) {
    const i = n[r];
    if (Ee(i))
      return i;
  }
}
function RE(e) {
  const t = e.getParent();
  if (t && A(t)) {
    const r = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < r.length; i++) {
      const s = r[i];
      if (Ee(s))
        return s;
    }
  }
  let n = t?.getNextSibling();
  for (; n && !at(n); ) {
    const r = fc(n);
    if (r)
      return r;
    n = n.getNextSibling();
  }
}
function dc(e) {
  return tl(e).findLast((t) => Ee(t));
}
function IE(e) {
  if (!Ue(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const n = e.getTextContent().indexOf(t);
  return n < 0 ? 0 : n + t.length;
}
function LE(e, t, n) {
  if (!n)
    return !1;
  const r = t.getParent();
  if (n === r && A(n)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return n.getNextSibling() === t;
}
function qE(e, t) {
  const n = t.anchor.getNode();
  if (n !== e)
    return LE(t, e, n);
  if (v(e)) {
    const r = IE(e);
    return t.anchor.offset < r;
  }
  return !0;
}
function Hl(e) {
  const t = e.getNumber(), n = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: n,
    verse: t != null && n.toString() !== t ? t : void 0
  };
}
function DE(e) {
  const t = qu(e);
  if (!(!t || at(t)))
    return Ee(t) ? t : dc(t) ?? Jd(t);
}
function KE(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!E(t))
    return Hl(e);
  const n = Number.parseInt(e.getNumber() ?? "0", 10), r = n <= 1 ? 0 : n - 1;
  if (qE(e, t)) {
    const i = DE(e);
    return i ? Hl(i) : { verseNum: r };
  }
  return Hl(e);
}
function UE(e) {
  return pM(e) || Ar(e);
}
function Hd(e) {
  if (v(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(D) && e.setTextContent(`${t} `);
  }
}
function $k(e) {
  if (v(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Vu(e, t) {
  return e.getEditorState().read(() => !X(t));
}
function BE(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), n = Gd(t, e);
  let r;
  if (n) {
    const i = n.getParent();
    if (i && A(i) && A(t) && t === i && e.anchor.offset < n.getIndexWithinParent() && (r = n), !r && i && A(i)) {
      const s = i.getChildren(), o = n.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (Ee(c)) {
          r = c;
          break;
        }
      }
    }
    if (!r && i) {
      let s = pg(i);
      for (; s && !at(s); ) {
        const o = fc(s);
        if (o) {
          r = o;
          break;
        }
        s = pg(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = fc(s);
      if (o) {
        r = o;
        break;
      }
      if (s = s.getNextSibling(), s && at(s))
        break;
    }
  }
  return r ? (r.selectNext(0, 0), !0) : !1;
}
function FE(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), n = Gd(t, e);
  let r;
  if (n) {
    const i = n.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (r = n), !r && i && A(i) && (r = Ok(i, n.getIndexWithinParent())), !r && i) {
      let o = hg(i);
      for (; o && !at(o); ) {
        const a = dc(o);
        if (a) {
          r = a;
          break;
        }
        o = hg(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !at(s); ) {
      const o = dc(s);
      if (o) {
        r = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return r ? (r.selectNext(0, 0), !0) : !1;
}
function pg(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const n = e.getTopLevelElement();
  return n && n !== e ? n.getNextSibling() : null;
}
function hg(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const n = e.getTopLevelElement();
  return n && n !== e ? n.getPreviousSibling() : null;
}
function Gd(e, t) {
  if (A(e) && E(t) && t.anchor.key === e.getKey()) {
    const r = e.getChildAtIndex(t.anchor.offset);
    if (r && Ee(r))
      return r;
    const i = Ok(e, t.anchor.offset);
    if (i)
      return i;
    const s = fc(e);
    if (s)
      return s;
  }
  return Jd(e);
}
function Jd(e) {
  if (!e || at(e))
    return;
  if (Ee(e))
    return e;
  let t = qu(e);
  for (; t; ) {
    if (at(t))
      return;
    if (Ee(t))
      return t;
    const n = dc(t);
    if (n)
      return n;
    t = qu(t);
  }
}
const zE = ["style"], jE = ["style", "code"], pc = ["style", "cid"], VE = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], WE = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], HE = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], GE = ["style", "caller", "category", "contents"], JE = ["tag", "marker", "contents"], YE = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Yo = `
`;
function XE(e, t) {
  const n = X(e);
  if (!On(n))
    return;
  const r = Yd(n, "apply");
  if (r === void 0)
    return;
  const [i, ...s] = t;
  return [{ retain: r }, ...i ? [i] : [], { delete: 1 }, ...s];
}
function Yd(e, t = "delta-doc") {
  if (!e)
    return;
  const n = Fc();
  let r = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of n) {
    const l = c.node;
    for (let f = i.length - 1; f >= 0; f--)
      if (Bs(i[f], c)) {
        const d = i[f];
        if (i.splice(f, 1), r += 1, a && d.getKey() === a.getKey())
          return r - 1;
      }
    for (let f = s.length - 1; f >= 0; f--)
      Bs(s[f].node, c) && s.splice(f, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (jr(l) || On(l))
        return r;
      mt(l) && (a = l);
    }
    if (mt(l) && (i.includes(l) || i.push(l)), Rk(l, t)) {
      if (l.getKey() === o)
        return r;
      s.push({ node: l, position: r }), r += 1;
      continue;
    }
    r += Qd(l, t);
  }
  if (a)
    return r;
}
function gg(e, t, n = "delta-doc") {
  if (e.length < 2 || !eA(e[0]) || !ZE(e[1]))
    return;
  const r = e[0].retain;
  return t.read(() => QE(r, n)?.getKey());
}
function QE(e, t = "delta-doc") {
  const n = Fc();
  let r = 0;
  const i = [], s = [];
  for (const o of n) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (Bs(i[u], o)) {
        const f = i[u];
        if (i.splice(u, 1), r === e)
          return f;
        r += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      Bs(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (mt(a) && (i.includes(a) || i.push(a)), Rk(a, t)) {
      if (r === e)
        return a;
      s.push({ node: a, position: r }), r += 1;
      continue;
    }
    const l = Qd(a, t);
    if (jr(a) && l > 0 && e >= r && e < r + l || On(a) && r === e)
      return a;
    r += l;
  }
  for (const o of i) {
    if (r === e)
      return o;
    r += 1;
  }
}
function Bs(e, t) {
  return e ? t ? !Ks(t.node, e.getKey()) : !0 : !1;
}
function jr(e) {
  return v(e) && !On(e);
}
function On(e) {
  return at(e) || Ee(e) || Ke(e) || q(e) || et(e) || xn(e);
}
function Zr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function ZE(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && YE.includes(t);
}
function eA(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Rk(e, t) {
  return q(e) || et(e) ? !0 : t === "apply" && A(e) && On(e);
}
function Ik(e) {
  const t = e.getParent();
  return yn(e) && me(t) && t.getFirstChild() === e;
}
function Wu(e) {
  const t = e.getParent();
  return t !== null && Ze(t, Fe) !== null;
}
function tA(e) {
  const t = e.getParent();
  return U(t) && e.getTextContent() === Pt && t.getChildrenSize() === 1;
}
function Xd(e) {
  const t = qn(e);
  if (!(!q(t) || !Mt(t)?.is(e)))
    return ld(e.getTextContent(), t.getCaller());
}
function nA(e) {
  return !Db(e) && // A caller's typed bytes are respelled as the content they settle into, never sent raw.
  Xd(e) === void 0 && Qd(e, "delta-doc") === e.getTextContentSize();
}
function Qd(e, t) {
  if (On(e))
    return 1;
  if (v(e)) {
    const n = e.getTextContent();
    if (t === "delta-doc" && // A bare cursor host (EmptyVerseCaretGuardPlugin) is a transient, collab-invisible node:
    // its insertion is never emitted, so it contributes nothing to DOC-DELTA positions or the
    // local doc would drift one position ahead of every peer while a host rests. In `"apply"`
    // coordinates it MUST count, per the rule in the doc comment above: none of
    // `$applyUpdate`'s traversals skip a placeholder (each classifies with `$isOTTextNode`
    // and adds raw `getTextContentSize()`), so excluding it here left a replace-embed retain
    // one short whenever a host rested before the target — a footnote-popover save then
    // deleted the unit BEFORE the note instead of the note itself.
    (ha(e) || Ik(e) || de(e, ke) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    de(e, ke) === "attribute" || Wu(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, and the empty-char placeholder. The
    // editable-mode note caller counts only its content bytes, below.
    n.startsWith(nd) || tA(e)))
      return 0;
    const r = t === "delta-doc" ? Xd(e) : void 0;
    return r !== void 0 ? r.length : e.getTextContentSize();
  }
  return 0;
}
function Hu(e, t) {
  const n = { insert: e.__text }, r = de(e, ai);
  if (r && (n.attributes = { segment: r }), t && t.length > 0) {
    const i = Lk(t);
    i && (n.attributes = {
      ...n.attributes,
      char: i
    });
  }
  return n;
}
function mg(e) {
  const t = new Es();
  return e.isEmpty() || e.read(() => {
    const n = Ce();
    if (!n || n.isEmpty())
      return;
    const r = n.getChildren();
    if (r.length === 1 && Ct(r[0]) && (!r[0].getChildren() || r[0].getChildrenSize() === 0))
      return;
    const i = rA();
    for (const s of i)
      t.push(s);
  }), t;
}
function nl(e, t) {
  const n = [], r = es(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < r.length; c++) {
    const l = r[c].node;
    n.push(...yg(l, c, r, i, s, o, a));
  }
  for (const c of i)
    n.push(...yg(c, r.length, r, i, s, o, a));
  return n;
}
function rA() {
  return nl();
}
function yg(e, t, n, r, i, s, o) {
  if (!e)
    return [];
  const a = [], c = n[t + 1];
  return iA(e, a, r), sA(e, a, i, s, o), oA(e, t, n, i, o, s, a), at(e) && a.push(uA(e)), Ee(e) && a.push(dA(e)), Ke(e) && a.push(pA(e)), xn(e) && a.push(hA(e)), cA(e, a, s), aA(e, a, s), bA(c, s), a;
}
function iA(e, t, n) {
  if (!e.isInline()) {
    const r = n.pop();
    Ie(r) ? t.push(lA(r)) : me(r) ? t.push(fA(r)) : Ct(r) && t.push({ insert: Yo });
  }
  mt(e) && (n.includes(e) || n.push(e));
}
function sA(e, t, n, r, i) {
  if (!v(e) || Ue(e) || xn(e))
    return;
  const s = e.getParent();
  if (q(s) && s.getFirstChild() === e)
    return;
  const o = wn(e) !== void 0;
  if (w(e) && (o || Ik(e) || Wu(e) || Db(e)) || de(e, ke) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (rs(a))
    return;
  const c = Xd(e);
  if (c !== void 0) {
    if (!c)
      return;
    a = c;
  }
  const l = e.getPreviousSibling(), u = U(s) ? s : void 0;
  o && u && l === u.getFirstChild() && (a = a.slice(md(e)));
  const f = a.startsWith(nd) || de(e, ke) === "attribute" || Wu(e), d = !!u && a === Pt && u.getChildrenSize() === 1, p = rl(e, r), h = p ? n.filter((y) => p.children.includes(y)) : n, g = Hu(e, h);
  if (g.insert = a, p) {
    if (!a || a === D || f)
      return;
    p.contentsOps?.push(g);
  } else
    d || f || t.push(g);
  const m = a !== "" && !d && !(f && u);
  if (n.length > 0 && m)
    for (const y of n)
      i.add(y);
}
function oA(e, t, n, r, i, s, o) {
  U(e) && !r.includes(e) && r.push(e);
  const a = n[t + 1];
  for (const c of r.toReversed())
    if (Bs(c, a)) {
      if (r.pop(), !i.has(c)) {
        const l = mA(c), u = rl(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function aA(e, t, n) {
  if (!q(e))
    return;
  const r = gA(e), i = rl(e, n), s = {
    node: e,
    children: es(e).map((o) => o.node),
    contentsOps: r.insert.note?.contents?.ops
  };
  n.push(s), i?.contentsOps ? i.contentsOps.push(r) : t.push(r);
}
function cA(e, t, n) {
  if (!et(e))
    return;
  const r = yA(e), i = rl(e, n), s = {
    node: e,
    children: es(e).map((o) => o.node),
    contentsOps: r.insert.unknown?.contents?.ops
  };
  n.push(s), i?.contentsOps ? i.contentsOps.push(r) : t.push(r);
}
function yi(e, t) {
  const n = t.getUnknownAttributes();
  n && Object.assign(e, n);
}
function lA(e) {
  const t = { style: Ho, code: e.__code };
  return yi(t, e), { insert: Yo, attributes: { book: t } };
}
function uA(e) {
  const t = { style: rc, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), yi(t, e), { insert: { chapter: t } };
}
function fA(e) {
  const t = { style: e.__marker };
  return yi(t, e), { insert: Yo, attributes: { para: t } };
}
function dA(e) {
  const t = { style: nc, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), yi(t, e), { insert: { verse: t } };
}
function pA(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), yi(t, e), { insert: { milestone: t } };
}
function hA(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function gA(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), yi(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const n = { insert: { note: t } }, r = de(e, ai);
  return r && (n.attributes = { segment: r }), n;
}
function mA(e) {
  const t = { insert: "" }, n = Lk([e]);
  return n && (t.attributes = { char: n }), t;
}
function yA(e) {
  const t = { tag: e.getTag() }, n = e.getMarker();
  return n && (t.marker = n), yi(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function rl(e, t) {
  for (let n = t.length - 1; n >= 0; n--) {
    const r = t[n];
    if (r.children.includes(e))
      return r;
  }
}
function bA(e, t) {
  for (let n = t.length - 1; n >= 0; n--)
    Bs(t[n].node, e) && t.splice(n, 1);
}
function Lk(e) {
  if (e.length === 0)
    return;
  const t = e.map(kA);
  return t.length === 1 ? t[0] : t;
}
function kA(e) {
  const t = { style: e.__marker }, n = de(e, Bi);
  return n && (t.cid = n), yi(t, e), t;
}
function Zd(e) {
  let t = 0;
  for (const { node: n } of Fc())
    if (q(n)) {
      if (n.getKey() === e)
        return t;
      t += 1;
    }
}
function xA(e) {
  let t = 0;
  for (const { node: n } of Fc())
    if (q(n)) {
      if (t === e)
        return n;
      t += 1;
    }
}
const qk = 1;
class Mn extends aa {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Bo, n = "", r, i) {
    super(i), this.__caller = t, this.__previewText = n, this.__onClick = r ?? (() => {
    });
  }
  static getType() {
    return gi;
  }
  static clone(t) {
    const { __caller: n, __previewText: r, __onClick: i, __key: s } = t;
    return new Mn(n, r, i, s);
  }
  static importDOM() {
    return {
      span: (t) => vA(t) ? {
        conversion: TA,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ep().updateFromJSON(t);
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
    return n && Xi(n) && (n.classList.add(this.getType()), n.setAttribute("data-caller", this.getCaller()), n.setAttribute("data-preview-text", this.getPreviewText())), { element: n };
  }
  decorate(t) {
    const n = this.getParent();
    if (!n)
      return null;
    const r = n.getKey(), i = n.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, r, i, () => CA(t, r), (l) => SA(t, r, s, l), () => _A(t, r), () => MA(t, r)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return P("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.getRenderedText() });
  }
  /** The text this caller shows on screen; empty when CSS generates the caller instead. */
  getRenderedText() {
    const t = this.getLatest(), n = t.getParent(), r = q(n) && n.getIsCollapsed();
    return t.__caller === Bo && r ? "" : t.__caller === Uy && r ? "*" : t.__caller;
  }
  exportJSON() {
    return {
      type: this.getType(),
      caller: this.getCaller(),
      previewText: this.getPreviewText(),
      onClick: this.getOnClick(),
      version: qk
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function TA(e) {
  const t = e.getAttribute("data-caller") ?? "", n = e.getAttribute("data-preview-text") ?? "";
  return { node: ep(t, n) };
}
function ep(e, t, n) {
  return yt(new Mn(e, t, n));
}
function vA(e) {
  return e ? e.classList.contains(Mn.getType()) : !1;
}
function Lt(e) {
  return e instanceof Mn;
}
function CA(e, t) {
  return e.getEditorState().read(() => {
    const n = X(t);
    if (!q(n))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return n.getCaller();
  });
}
function SA(e, t, n, r) {
  e.update(() => {
    const i = X(t);
    if (!q(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(r);
    const s = X(n);
    if (!Lt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${n}`);
    s.setCaller(r);
  });
}
function _A(e, t) {
  return e.getEditorState().read(() => {
    const n = X(t);
    if (!q(n))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return nl(n);
  });
}
function MA(e, t) {
  return e.getEditorState().read(() => Zd(t));
}
const EA = [
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
], AA = ["†"], tp = "formatted", Dk = "unformatted", Kk = "paragraph-structure", np = "standard", Uk = "block-verse", PA = {
  [tp]: "Formatted",
  [Dk]: "Unformatted",
  [Kk]: "Paragraph Structure",
  [np]: "Standard",
  [Uk]: "Block Verse"
};
function as(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let rp, ip;
function wA(e) {
  const t = sp(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  rp = e, ip = t;
}
wA(tp);
const AD = () => rp, il = () => ip;
function sp(e) {
  let t;
  switch (e ?? rp) {
    case tp:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Dk:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Kk:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case np:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Uk:
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
function PD(e) {
  if (!e)
    return;
  const t = bg(e);
  return Object.keys(PA).find((n) => Xn(bg(sp(n)), t));
}
const NA = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function bg(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, n]) => n !== void 0));
  return { ...NA, ...t };
}
function qt(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: n, isFormattedFont: r, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && n && r && !i && !s;
}
function OA(e) {
  if (e)
    return Xo(e) ? Jt : e.markerMode === "editable" ? Bt : Jt;
}
function Xo(e) {
  return e?.verseLayout === "block";
}
function $A(e) {
  const t = [], n = e ?? ip;
  return n && (t.push(`${o_}${n.markerMode}`), n.hasSpacing && t.push(i_), n.isFormattedFont && t.push(s_)), t;
}
const RA = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function hc(e) {
  return RA.exec(e)?.[1] ?? e;
}
function Po(e, t) {
  const n = e.jsonPath.slice(hc(e.jsonPath).length);
  return { ...e, jsonPath: `${Nt(t)}${n}` };
}
function Bk(e) {
  const t = [];
  let n = 0;
  for (const c of Ce().getChildren())
    if (!Nn(c))
      if (Vi(c)) {
        const l = n;
        c.getChildren().filter((u) => !Nn(u)).forEach((u, f) => t.push({ node: u, blockPrefix: [l, f], blockBase: 0 })), n += 1;
      } else Ct(c) ? (t.push({ node: c, blockPrefix: [], blockBase: n }), n += zt(c, e).length) : (t.push({ node: c, blockPrefix: [n], blockBase: 0 }), n += 1);
  const r = [];
  let i = 0, s = 0, o = 0, a;
  for (const c of t) {
    const l = A(c.node) ? zt(c.node, e).length : 0, u = de(c.node, Ek), f = Ct(c.node), d = u === void 0 || u !== a;
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
function Fk(e, t) {
  return e.length >= t.length && t.every((n, r) => e[r] === n);
}
function zk(e, t, n, r = !0) {
  const i = e.jsonPath.slice(hc(e.jsonPath).length);
  let s = In(hc(e.jsonPath));
  s.length === 1 && t.some((o) => o.blockPrefix.length === 2 && o.blockPrefix[0] === s[0]) && (s = [s[0], 0]);
  for (const o of t) {
    if (!Fk(s, o.blockPrefix))
      continue;
    const a = s.slice(o.blockPrefix.length);
    if (a.length === 0) {
      if (o.blockPrefix.length === 0)
        continue;
      return r && i === "" && A(o.node) && (!o.isSourceStart || Ct(o.node)) ? zk(n(o.node), t, n, !1) : Po(e, o.usjPrefix);
    }
    if (!(a[0] < o.blockBase || a[0] >= o.blockBase + o.count))
      return Po(e, [
        ...o.usjPrefix,
        a[0] - o.blockBase + o.usjBase,
        ...a.slice(1)
      ]);
  }
}
function IA(e, t, n) {
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
  return { jsonPath: "$", offset: zt(Ce(), n).length };
}
function kg(e, t, n) {
  const r = In(hc(e.jsonPath));
  if (r.length === 0)
    return Lr(e) ? IA(e.offset, t, n) : e;
  for (const i of t) {
    if (!Fk(r, i.usjPrefix))
      continue;
    const s = r.slice(i.usjPrefix.length);
    if (s.length === 0) {
      if (i.usjPrefix.length === 0)
        continue;
      if (Lr(e)) {
        const o = e.offset - i.usjBase;
        if (o < 0 || !i.isSourceEnd && o >= i.count)
          continue;
        return {
          ...Po(e, i.blockPrefix),
          offset: Math.min(o, i.count) + i.blockBase
        };
      }
      if (!i.isSourceStart)
        continue;
      return Po(e, i.blockPrefix);
    }
    if (!(s[0] < i.usjBase || s[0] >= i.usjBase + i.count))
      return Po(e, [
        ...i.blockPrefix,
        s[0] - i.usjBase + i.blockBase,
        ...s.slice(1)
      ]);
  }
}
function sl(e, t, n) {
  let { start: r } = e, i = e.end ?? r;
  if (rx()) {
    const g = qt(t), m = Bk(g), y = kg(r, m, g), k = i === r ? y : kg(i, m, g);
    if (!y || !k)
      return;
    r = y, i = k;
  }
  const s = !!n?.forAnnotation, o = vg(r, t, s), a = i === r ? o : vg(i, t, s), [c, l] = o.point, [u, f] = a.point;
  if (!c || !u || l === void 0 || f === void 0)
    return;
  let d = Cg(c, l), p = Cg(u, f);
  if (qi(i) && i.closingMarkerOffset === 0 && !Xn(i, r) && (p = ZA(p[0], p[1], qt(t))), n?.forAnnotation && i !== r) {
    const g = { edge: d, inside: o.insideDecorator }, m = { edge: p, inside: a.insideDecorator };
    [d, p] = LA(g, m), n.decoratorHolds && qA(g, m, n.decoratorHolds);
  }
  const h = Kr();
  return h.anchor = Zt(d[0].getKey(), d[1], Qu(d[0])), h.focus = Zt(p[0].getKey(), p[1], Qu(p[0])), h;
}
function LA(e, t) {
  const { inside: n } = e, { inside: r } = t;
  if (!n && !r)
    return [e.edge, t.edge];
  const { sameDecorator: i, reversed: s } = jk(e, t), [o, a] = s ? [t, e] : [e, t], c = o.inside ? Gu(o.inside, o.inside.before >= o.inside.total, o.edge) : o.edge;
  if (i && n?.before === r?.before)
    return [c, c];
  const l = a.inside ? Gu(a.inside, a.inside.before > 0, a.edge) : a.edge;
  return s ? [l, c] : [c, l];
}
function qA(e, t, n) {
  const { inside: r } = e, { inside: i } = t;
  if (!r && !i)
    return;
  const { sameDecorator: s, reversed: o } = jk(e, t), [a, c] = o ? [i, r] : [r, i], l = (u, f, d) => {
    d > f && n.set(u.decorator.getKey(), { start: f, end: d });
  };
  a && l(a, a.before, s && c ? c.before : a.total), c && !s && l(c, 0, c.before);
}
function jk(e, t) {
  const { inside: n } = e, { inside: r } = t;
  return n && r && n.decorator.is(r.decorator) ? { sameDecorator: !0, reversed: r.before < n.before } : { sameDecorator: !1, reversed: DA(t, e) };
}
function Gu(e, t, n) {
  const [r, i] = ei(e.decorator, t);
  return r && i !== void 0 ? [r, i] : n;
}
function DA(e, t) {
  const n = ({ edge: s, inside: o }) => {
    const [a, c] = o ? Gu(o, !1, s) : s;
    return Zt(a.getKey(), c, Qu(a));
  }, r = n(e), i = n(t);
  return r.isBefore(i) ? !0 : i.isBefore(r) ? !1 : !e.inside && !!t.inside;
}
function ol(e) {
  const t = N();
  if (!t || !E(t))
    return;
  const n = rx() ? Bk(qt(e)) : void 0, r = (u, f) => {
    const d = Ot(u, f, e);
    return n ? zk(d, n, (p) => Ot(p, 0, e)) : d;
  }, i = t.isBackward() ? t.focus.getNode() : t.anchor.getNode(), s = t.isBackward() ? t.focus.offset : t.anchor.offset, o = r(i, s);
  if (!o)
    return;
  if (t.isCollapsed())
    return { start: o };
  const a = t.isBackward() ? t.anchor.getNode() : t.focus.getNode(), c = t.isBackward() ? t.anchor.offset : t.focus.offset, l = r(a, c);
  if (l)
    return { start: o, end: l };
}
const ni = {
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
}, KA = new Map(Object.values(ni).flatMap((e) => e ? [[e.markerName, e.keyName]] : [])), xg = {
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
}, UA = (
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  Object.keys(xg).filter((e) => xg[e])
), BA = /([^\s="|]+)="([^"]*)"/g, FA = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function Vk(e, t) {
  return `${e}['${t}']`;
}
function Ii(e) {
  return [
    { start: 0, base: 0, bytes: { kind: "marker" } },
    { start: e, base: 0, bytes: { kind: "property", property: "marker" } }
  ];
}
function wo(e) {
  return [
    {
      start: 0,
      base: 0,
      bytes: e === void 0 ? { kind: "closingMarker" } : { kind: "closingAttributeMarker", keyName: e }
    }
  ];
}
function op(e) {
  const t = Tr(e);
  if (!t)
    return;
  const n = Fr(t.kind).scanPieces(t.owner);
  if (n.opener?.is(e))
    return { ...t, role: "opener" };
  if (n.value?.is(e))
    return { ...t, role: "value" };
  if (n.closer?.is(e))
    return { ...t, role: "closer" };
}
function al(e, t, n, r = (i) => i) {
  const i = [];
  for (const s of e.slice(t).matchAll(BA)) {
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
function zA(e, t) {
  const n = FA.exec(e);
  if (!n)
    return [];
  const r = n[1], i = n[0].length - r.length - 2, s = KA.get(r) ?? r, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: n[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${r}*`);
  return a > n[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function ap(e) {
  if (mn(e)) {
    const t = nx(e), n = e.getTextContent();
    if (Ke(t) && (n === "\\*" || n.startsWith(Ve(t.getMarker()))))
      return t;
  }
  return qn(e) ?? e;
}
function jA(e) {
  const t = e.getTextContentSize(), n = op(e);
  if (n && n.role !== "value") {
    const i = ni[n.kind];
    if (i) {
      const { keyName: s } = i;
      return {
        owner: n.owner,
        length: t,
        spans: n.role === "closer" ? wo(s) : [
          { start: 0, base: 0, bytes: { kind: "attributeMarker", keyName: s } },
          { start: 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }
        ]
      };
    }
    if (n.kind === "milestone")
      return {
        owner: n.owner,
        length: t,
        spans: n.role === "closer" ? wo() : Ii(1)
      };
  }
  const r = e.getMarkerSyntax();
  return {
    owner: ap(e),
    length: t,
    spans: r === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      Ii(e.getNested() ? 2 : 1)
    ) : wo()
  };
}
function VA(e) {
  const t = e.getTextContent(), n = t.length, r = op(e);
  if (r?.kind === "optbreak")
    return {
      owner: r.owner,
      length: n,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = ap(e);
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
  if (et(i)) {
    const s = Gc(i.getTag(), i.getMarker(), i.getUnknownAttributes());
    if (s.closing !== "" && t === s.closing)
      return { owner: i, length: n, spans: wo() };
    if (s.opening !== "" && t === s.opening)
      return { owner: i, length: n, spans: Ii(1) };
  }
  return {
    owner: i,
    length: n,
    spans: t.endsWith("*") ? wo() : Ii(t.startsWith("\\+") ? 2 : 1)
  };
}
function WA(e) {
  const t = op(e);
  if (t?.role !== "value")
    return;
  const { owner: n, kind: r } = t, i = e.getTextContent(), s = i.length, o = ni[r];
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
        ...al(i, 1, U(n) ? Ys(n.getMarker()) : void 0)
      ]
    };
  if (r === "milestone" && Ke(n))
    return { owner: n, length: s, spans: Wk(n.getMarker(), i) };
}
function Wk(e, t) {
  return [
    { start: 0, base: e.length, bytes: { kind: "property", property: "marker" } },
    ...al(t, 2, fa(e))
  ];
}
function HA(e) {
  const t = e.getTextContent(), n = t.length, r = e.getParent();
  if (!et(r)) {
    const s = nx(e);
    return Ke(s) ? { owner: s, length: n, spans: Wk(s.getMarker(), t) } : void 0;
  }
  const i = zA(t, (r.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: r, length: n, spans: i };
  if (t.startsWith("|"))
    return {
      owner: r,
      length: n,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        // The bytes spell an attribute the way USFM names it, which is not always USJ's name for it.
        ...al(t, 1, void 0, (s) => R0(r.getTag(), s))
      ]
    };
}
function Tg(e, t) {
  const n = Ve(e);
  if (t.startsWith(n))
    return [
      ...Ii(1),
      { start: n.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function tn(e) {
  if (w(e))
    return jA(e);
  if (mn(e))
    return VA(e);
  if (Rt(e) && e.getTextType() === "attribute")
    return HA(e);
  if (e.getType() === gi) {
    const r = e.getParent();
    return q(r) ? {
      owner: r,
      length: r.getCaller().length,
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if (Ue(e)) {
    const r = Tg(e.getMarker(), e.getTextContent());
    return r ? { owner: e, length: e.getTextContentSize(), spans: r } : void 0;
  }
  if (!v(e))
    return;
  if (xn(e))
    return { owner: e, length: e.getTextContentSize(), spans: Ii(1) };
  if (de(e, ke) === "attribute")
    return WA(e);
  const t = e.getParent();
  if ($e(t) && mi(t)?.is(e)) {
    const r = Tg(t.getMarker(), e.getTextContent());
    return r ? { owner: t, length: e.getTextContentSize(), spans: r } : void 0;
  }
  const n = qn(e);
  if (q(n) && Mt(n)?.is(e))
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
  return mn(e) || Rt(e) && e.getTextType() === "attribute" || e.getType() === gi;
}
function cl(e) {
  const t = [];
  if ((Ue(e) || xn(e)) && t.push(e), A(e)) {
    const n = $e(e) ? mi(e) : void 0, r = q(e) ? Mt(e) : void 0;
    for (const i of e.getChildren())
      r && (r.is(i) || i.isParentOf(r)) ? t.push(r) : (w(i) || mn(i) || Rt(i) && i.getTextType() === "attribute" || i.getType() === gi || n?.is(i)) && t.push(i);
  }
  if (Ke(e))
    for (let n = e.getNextSibling(); n && bi(n); n = n.getNextSibling())
      (!mn(n) || ap(n).is(e)) && t.push(n);
  for (const n of UA) {
    const r = Fr(n);
    if (!r.ownerPredicate(e))
      continue;
    const { opener: i, value: s, closer: o } = r.scanPieces(e);
    i && t.push(i), s && t.push(s), o && t.push(o);
  }
  return t;
}
function Wi(e, t) {
  return e.kind !== t.kind ? !1 : e.kind === "property" && t.kind === "property" ? e.property === t.property : (e.kind === "attributeKey" || e.kind === "attributeMarker" || e.kind === "closingAttributeMarker") && "keyName" in t ? e.keyName === t.keyName : !0;
}
function Ju(e, t, n) {
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
  const o = s.base + (i - s.start), a = Nt(dn(r.owner));
  switch (s.bytes.kind) {
    case "marker":
      return { jsonPath: a };
    case "closingMarker":
      return { jsonPath: a, closingMarkerOffset: o };
    case "property":
      return {
        jsonPath: Vk(a, s.bytes.property),
        propertyOffset: o
      };
    case "attributeKey":
      return { jsonPath: a, keyName: s.bytes.keyName, keyOffset: o };
    case "attributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName, keyClosingMarkerOffset: o };
    case "precedingText":
      return GA(e, n);
  }
}
function Yu(e, t) {
  return v(e) && !tn(e) && !Ns(e, 0, t);
}
function GA(e, t) {
  let n = e;
  for (let o = n.getParent(); !n.getPreviousSibling() && ue(o); )
    n = o, o = n.getParent();
  let r = n.getPreviousSibling();
  for (; r && Yu(r, t); )
    r = r.getPreviousSibling();
  if (!r)
    return;
  const i = A(r) ? r.getLastDescendant() : r;
  if (i && (v(i) || bi(i)))
    return Yu(i, t) ? void 0 : Zn(i, i.getTextContentSize(), t);
  const s = r.getParent();
  if (s)
    return Zn(s, r.getIndexWithinParent() + 1, t);
}
function ms(e, t, n) {
  for (const r of cl(e)) {
    const i = tn(r);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!Wi(o.bytes, t))
          continue;
        const a = cp(i, s);
        if (!(n < o.base || n > a))
          return [r, o.start + (n - o.base)];
      }
  }
}
function cp(e, t) {
  const n = e.spans[t], r = e.spans[t + 1];
  return r ? n.base + (r.start - n.start) - 1 : n.base + (e.length - n.start);
}
function $n(e, t) {
  const n = qt(t);
  if (Lr(e)) {
    const r = In(e.jsonPath);
    let i = Ce();
    for (let s = 0; s < r.length; s++) {
      if (!i || !A(i))
        return [void 0, void 0];
      const o = zt(i, n)[r[s]];
      if (!o)
        return [void 0, void 0];
      if (o.type === "text")
        return s !== r.length - 1 ? [void 0, void 0] : AM(o, e.offset) ?? Sg(e, n) ?? [void 0, void 0];
      i = o.node;
    }
    return i && A(i) ? $n(lp(i, r, e.offset, n), t) : [void 0, void 0];
  }
  if (Lo(e) || qi(e) || qo(e)) {
    const r = Sg(e, n);
    if (r)
      return r;
  }
  if (Do(e) || qc(e)) {
    const r = Pi(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const { keyName: i } = e, s = Do(e) ? ms(r, { kind: "attributeKey", keyName: i }, e.keyOffset) : ms(r, { kind: "attributeMarker", keyName: i }, 0);
    if (s)
      return s;
    const o = Jl(r, i);
    if (o)
      return o;
    const a = aP(r, i);
    return a || (Ke(r) ? ei(r, !1) : Gl(r));
  }
  if (qo(e)) {
    const r = Pi(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const i = ms(r, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return i || (Jl(r, e.keyName) ?? Gl(r));
  }
  if (jf(e)) {
    const r = Pi(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const i = ms(r, { kind: "marker" }, 0);
    if (i)
      return i;
    const s = A(r) ? r.getFirstChild() : null;
    return s && v(s) ? [s, 0] : ei(r, !1);
  }
  if (qi(e)) {
    const r = Pi(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const i = ms(r, { kind: "closingMarker" }, e.closingMarkerOffset);
    if (i)
      return i;
    const s = up(r);
    if (s !== void 0 && e.closingMarkerOffset >= s)
      return ei(r, !0);
    if (!A(r))
      return ei(r, !1);
    const o = r.getLastChild();
    return o && v(o) ? [o, o.getTextContent().length] : [r, r.getChildrenSize()];
  }
  if (Lo(e)) {
    const r = Hk(e.jsonPath), i = Pi(e.jsonPath, n);
    if (!i || r === void 0)
      return [void 0, void 0];
    const s = { kind: "property", property: r }, o = ms(i, s, e.propertyOffset);
    if (o)
      return o;
    const a = cP(i, s, e.propertyOffset);
    if (a)
      return a;
    const c = Jl(i, r);
    if (c)
      return c;
    if (A(i)) {
      if (!JA.has(r))
        return Gl(i);
      const u = i.getFirstChild();
      return u && v(u) ? [u, 0] : [i, 0];
    }
    const l = lP(i, r);
    return ei(i, l !== void 0 && e.propertyOffset >= l.length);
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${gS(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Hk(e) {
  const t = /\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/.exec(e);
  return t?.[1] ?? t?.[2] ?? t?.[3];
}
const JA = /* @__PURE__ */ new Set([
  "marker",
  "code",
  "caller",
  "category"
]);
function Xu(e, t) {
  const n = e.length - e.trimStart().length, r = Math.max(n, e.trimEnd().length);
  return { before: Math.min(Math.max(t, n), r) - n, total: r - n };
}
function vg(e, t, n) {
  const r = $n(e, t), [i, s] = r;
  if (n && !Lr(e)) {
    const c = Pi(e.jsonPath, qt(t)), l = c && YA(c, e);
    if (l)
      return l.before > 0 ? { point: r, insideDecorator: l } : { point: r };
  }
  if (i && s !== void 0 && s > 0 && bi(i)) {
    const c = Xc(i);
    return {
      point: r,
      insideDecorator: { decorator: i, ...Xu(c, s) }
    };
  }
  if (Lr(e))
    return { point: r };
  const o = Pi(e.jsonPath, qt(t));
  if (!Ar(o) && !Gr(o))
    return { point: r };
  const a = XA(o, e);
  return a && a.before > 0 ? { point: r, insideDecorator: a } : { point: r };
}
function Gk(e) {
  const t = e.getFirstChild();
  if (!t || !mn(t))
    return;
  const n = tn(t);
  if (n?.spans[0]?.bytes.kind !== "marker" || !n.owner.is(e) || !e.getChildren().every((c) => bi(c) || v(c) && Nn(c)))
    return;
  const i = Ys(e.getMarker()), s = Qn(e.getUnknownAttributes() ?? {}, i);
  if (!s)
    return;
  const o = al(s, 1, i);
  if (!cl(e).some((c) => tn(c)?.spans.some((l) => o.some((u) => Wi(l.bytes, u.bytes)))))
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
function YA(e, t) {
  const n = U(e) ? Gk(e) : void 0, r = n && Jk(t);
  if (!n || !r)
    return;
  let i = 0, s;
  for (const { text: o, spans: a } of n.pieces) {
    const c = { spans: a, length: o.length };
    if (s === void 0) {
      const l = a.findIndex((u, f) => Wi(u.bytes, r.bytes) && r.offset >= u.base && r.offset <= cp(c, f));
      if (l >= 0) {
        const u = a[l].start + (r.offset - a[l].base);
        s = i + Xu(o, u).before;
      }
    }
    i += Xu(o, 0).total;
  }
  return s === void 0 ? void 0 : { decorator: n.decorator, before: s, total: i };
}
function XA(e, t) {
  const n = Jk(t);
  if (!n)
    return;
  const r = Yk(e), i = r.findIndex((a) => Wi(a.bytes, n.bytes));
  if (i < 0)
    return;
  const s = r.reduce((a, c) => a + c.length, 0), o = r.slice(0, i).reduce((a, c) => a + c.length, 0) + Math.min(Math.max(n.offset, 0), r[i].length);
  return { decorator: e, before: o, total: s };
}
function Jk(e) {
  if (Do(e))
    return {
      bytes: { kind: "attributeKey", keyName: e.keyName },
      offset: e.keyOffset
    };
  if (qc(e))
    return { bytes: { kind: "attributeMarker", keyName: e.keyName }, offset: 0 };
  if (qo(e))
    return {
      bytes: { kind: "closingAttributeMarker", keyName: e.keyName },
      offset: e.keyClosingMarkerOffset
    };
  if (jf(e))
    return { bytes: { kind: "marker" }, offset: 0 };
  if (Lo(e)) {
    const t = Hk(e.jsonPath);
    return t === void 0 ? void 0 : { bytes: { kind: "property", property: t }, offset: e.propertyOffset };
  }
}
function Yk(e) {
  const t = (s, o) => ({ bytes: s, text: o, length: o.length }), n = [
    t({ kind: "marker" }, "\\"),
    // The space after the marker name is inside the glyph Standard view spells, so it counts.
    t({ kind: "property", property: "marker" }, `${e.getMarker()} `),
    t({ kind: "property", property: "number" }, e.getNumber())
  ], r = Gr(e), i = r ? [ni.ca, ni.cp] : [ni.va, ni.vp];
  for (const s of i) {
    if (!s)
      continue;
    const { markerName: o, keyName: a } = s, c = a === "altnumber" ? e.getAltnumber() : e.getPubnumber();
    c !== void 0 && (n.push(t({ kind: "attributeMarker", keyName: a }, "\\"), t({ kind: "attributeKey", keyName: a }, o), t({ kind: "property", property: a }, c)), r && a === "pubnumber" || n.push(t({ kind: "closingAttributeMarker", keyName: a }, ot(o))));
  }
  return n;
}
function QA(e) {
  if (Ar(e) || Gr(e))
    return Yk(e).map(({ text: r }) => r).join("");
  const t = e.getParent(), n = U(t) ? Gk(t) : void 0;
  return n?.decorator.is(e) ? n.pieces.map(({ text: r }) => r.trim()).join("") : Xc(e).trim();
}
function Cg(e, t) {
  if (!bi(e))
    return [e, t];
  const n = e.getParent();
  if (!n || !A(n))
    return [e, t];
  const r = e.getIndexWithinParent();
  if (r < 0)
    return [e, t];
  const i = e.getTextContentSize(), s = t >= i && t > 0 || t === i - 1 && Xk.test(e.getTextContent());
  return [n, s ? r + 1 : r];
}
const Xk = /[ \u00A0]$/;
function ZA(e, t, n) {
  let r;
  if (A(e))
    r = t > 0 ? e.getChildAtIndex(t - 1) : null;
  else if (t === 0)
    r = e.getPreviousSibling();
  else
    return [e, t];
  let i = !1;
  for (; v(r) && !tn(r) && !Ns(r, 0, n); )
    r = r.getPreviousSibling(), i = !0;
  if (!i)
    return [e, t];
  const s = r?.getParent();
  if (r && s && bi(r))
    return [s, r.getIndexWithinParent() + 1];
  const o = A(r) ? r.getLastDescendant() : r;
  return v(o) ? [o, o.getTextContentSize()] : [e, t];
}
function Qu(e) {
  return A(e) ? "element" : "text";
}
function Pi(e, t) {
  const n = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = n ? n[1] : e, i = In(r);
  let s = Ce();
  for (const o of i) {
    if (!s || !A(s))
      return;
    const a = zt(s, t)[o];
    s = a?.type === "element" ? a.node : void 0;
  }
  return s;
}
function Ot(e, t, n) {
  return Zn(e, t, qt(n));
}
function Zn(e, t, n) {
  const r = v(e) ? Nd(e) : void 0;
  if (v(e) && r && t > r.start) {
    const s = Ns(e, t, n);
    if (s)
      return {
        jsonPath: Nt([...dn(s.parent), s.index]),
        offset: s.offset
      };
  }
  if (v(e) && t > 0 && t === e.getTextContentSize() && eP(e)) {
    const s = tP(e, n);
    if (s)
      return s;
  }
  const i = Ju(e, t, n);
  if (i)
    return i;
  if (ue(e)) {
    const s = e.getChildrenSize(), o = e.getChildAtIndex(Math.min(t, s - 1));
    if (v(o)) {
      const c = t >= s ? o.getTextContentSize() : 0;
      return Zn(o, c, n);
    }
    if (o && t > 0 && t < s) {
      const c = Zk(e, t, n);
      if (c)
        return c;
    }
    const a = e.getParent();
    if (a) {
      const c = e.getIndexWithinParent(), l = t > 0 ? c + 1 : c;
      return Zn(a, l, n);
    }
  }
  if (A(e)) {
    const s = e.getChildAtIndex(t), o = s && Qk(s);
    if (o) {
      const l = Ju(o, 0, n);
      if (l)
        return l;
    }
    if (s && bi(s))
      return {
        jsonPath: Nt(dn(e))
      };
    const a = t > 0 ? e.getChildAtIndex(t - 1) : null;
    if (!s && a && tx(a, e))
      return Fa(e, !0, n);
    if (at(e) || Nn(e))
      return Fa(e, t > 0, n);
    const c = Ct(e) && An(e.getParent()) ? e.getParentOrThrow() : e;
    return ex(c, As(e, t, n), n);
  }
  if (v(e)) {
    if (t < Qs(e)) {
      const c = e.getPreviousSibling();
      if (w(c))
        return Zn(c, c.getTextContentSize(), n);
    }
    const s = Ns(e, t, n);
    if (s)
      return {
        jsonPath: Nt([
          ...dn(s.parent),
          s.index
        ]),
        offset: s.offset
      };
    const o = t > 0;
    let a = o ? e.getNextSibling() : e.getPreviousSibling();
    for (; ue(a); )
      a = o ? a.getFirstChild() : a.getLastChild();
    if (v(a) && (tn(a) || Ns(a, 0, n)))
      return Zn(a, o ? 0 : a.getTextContentSize(), n);
  }
  return Fa(e, t > 0, n);
}
function eP(e) {
  if (!Xk.test(e.getTextContent()))
    return !1;
  if (Ue(e))
    return !0;
  const t = qn(e);
  return q(t) && !!Mt(t)?.is(e);
}
function tP(e, t) {
  let n = e;
  for (let s = n.getParent(); !n.getNextSibling() && ue(s); s = n.getParent())
    n = s;
  const r = n.getNextSibling();
  if (!r) {
    const s = n.getParent();
    return !s || nP(n) ? void 0 : Zn(s, s.getChildrenSize(), t);
  }
  const i = A(r) ? r.getFirstDescendant() ?? r : r;
  if (!(Yu(i, t) || tn(i)?.spans[0]?.bytes.kind === "precedingText"))
    return Zn(i, 0, t);
}
function nP(e) {
  for (let t = e; t; t = t.getParent())
    if (t.getNextSibling())
      return !1;
  return !0;
}
function Qk(e) {
  if (tn(e))
    return e;
  if (!Fe(e))
    return;
  const t = e.getFirstDescendant();
  return t && tn(t) ? t : void 0;
}
function Zk(e, t, n) {
  for (let r = t; r < e.getChildrenSize(); r++) {
    const i = e.getChildAtIndex(r);
    if (!i)
      return;
    const s = Qk(i);
    if (s)
      return Ju(s, 0, n);
    if (v(i) && Ns(i, 0, n))
      return Zn(i, 0, n);
    if (v(i) || Nn(i))
      continue;
    const o = PM(i, n);
    if (o)
      return ex(o.parent, o.point, n);
  }
}
function ex(e, t, n) {
  const r = dn(e);
  return t.type === "text" ? {
    jsonPath: Nt([...r, t.index]),
    offset: t.offset
  } : lp(e, r, t.index, n);
}
function tx(e, t) {
  const n = tn(e);
  return !!n && n.owner.is(t) && n.spans[0]?.bytes.kind === "closingMarker";
}
function Fa(e, t, n) {
  const r = e.getParent();
  if (!r)
    return { jsonPath: Nt(dn(e)) };
  const i = e.getIndexWithinParent() + (t ? 1 : 0);
  if (ue(r)) {
    if (i > 0 && i < r.getChildrenSize()) {
      const s = Zk(r, i, n);
      if (s)
        return s;
    }
    return Fa(r, i > 0, n);
  }
  return Zn(r, i, n);
}
function lp(e, t, n, r) {
  const i = zt(e, r), s = i[n];
  if (!s)
    return rP(e, t, i, r);
  const o = Nt([...t, n]);
  return s.type === "text" ? { jsonPath: o, offset: 0 } : { jsonPath: o };
}
function rP(e, t, n, r) {
  if (An(e))
    return gc(e, t, 1, r);
  if (up(e) !== void 0) {
    const o = n.length - 1, a = n[o];
    return a?.type === "text" ? {
      jsonPath: Nt([...t, o]),
      offset: a.length
    } : {
      jsonPath: Nt(t),
      closingMarkerOffset: 0
    };
  }
  const i = qn(e), s = t[t.length - 1];
  return iP(e) || !i || s === void 0 ? gc(e, t, 0, r) : lp(i, t.slice(0, -1), s + 1, r);
}
function gc(e, t, n, r) {
  const i = Nt(t), s = up(e);
  if (s !== void 0)
    return {
      jsonPath: i,
      closingMarkerOffset: s + n
    };
  if (A(e)) {
    const l = zt(e, r), u = l.length - 1, f = l[u], d = [...t, u];
    if (f?.type === "text")
      return { jsonPath: Nt(d), offset: f.length + n };
    if (f)
      return gc(f.node, d, n, r);
  }
  const o = (l, u) => ({
    jsonPath: Vk(i, l),
    propertyOffset: u.length + n
  }), a = (l, u) => ({
    jsonPath: i,
    keyName: l,
    keyClosingMarkerOffset: ot(u).length + n
  });
  if (Ee(e))
    return e.getPubnumber() !== void 0 ? a("pubnumber", "vp") : e.getAltnumber() !== void 0 ? a("altnumber", "va") : o("number", e.getNumber());
  if (at(e)) {
    const l = e.getPubnumber();
    return l !== void 0 ? o("pubnumber", l) : e.getAltnumber() !== void 0 ? a("altnumber", "ca") : o("number", e.getNumber());
  }
  if (Ie(e))
    return o("code", e.getCode());
  if (q(e))
    return o("caller", e.getCaller());
  const c = et(e) ? e.getMarker() : sP(e);
  return c === void 0 ? { jsonPath: i } : o("marker", c);
}
function up(e) {
  if (U(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : ot(e.getMarker(), Hc(e)).length;
  if (q(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : ot(e.getMarker()).length;
  if (Ke(e))
    return ot("").length;
  if (et(e)) {
    const { closing: t } = Gc(e.getTag(), e.getMarker(), e.getUnknownAttributes());
    return t === "" ? void 0 : t.length;
  }
}
function iP(e) {
  const t = qn(e);
  return me(e) || Ct(e) || Ie(e) || Tk(e) || et(e) && e.getTag() === "table:row" || An(t) || Vi(t);
}
function sP(e) {
  if (me(e) || U(e) || Ke(e) || Tk(e) || QM(e))
    return e.getMarker();
}
function Gl(e) {
  if (A(e)) {
    const n = e.getLastChild();
    let r = n;
    for (; r && oP(r, e); )
      r = r.getPreviousSibling();
    if (r !== n)
      return v(r) && !tn(r) ? [
        r,
        Nn(r) ? 0 : r.getTextContentSize()
      ] : [e, r ? r.getIndexWithinParent() + 1 : 0];
    if (n && v(n))
      return [
        n,
        !tn(n) && Nn(n) ? 0 : n.getTextContentSize()
      ];
  }
  const t = e.getNextSibling();
  return t && A(t) ? [t, 0] : ei(e, !0);
}
function oP(e, t) {
  return $d(e) || Fe(e) || Rt(e) && e.getTextType() === "attribute" || tx(e, t);
}
function aP(e, t) {
  for (const n of cl(e)) {
    const r = tn(n);
    if (!r?.owner.is(e))
      continue;
    const { spans: i } = r;
    if (i.some((o) => Wi(o.bytes, { kind: "attributeKey", keyName: t })))
      return;
    const s = i.find((o) => Wi(o.bytes, { kind: "property", property: t }));
    if (s && n.getTextContent()[s.start - 1] === "|")
      return [n, s.start];
  }
}
function cP(e, t, n) {
  for (const r of cl(e)) {
    if (!bi(r))
      continue;
    const i = tn(r);
    if (!i?.owner.is(e))
      continue;
    const s = i.spans.findIndex((o) => Wi(o.bytes, t));
    if (!(s < 0))
      return n > cp(i, s) ? [r, i.spans[s + 1]?.start ?? i.length] : void 0;
  }
}
function Jl(e, t) {
  if (!q(e) || t !== ni.cat?.keyName)
    return;
  const n = e.getChildren().find((s) => s.getType() === gi);
  if (!n)
    return;
  const [r, i] = ei(n, !0);
  return r && i !== void 0 ? [r, i] : void 0;
}
function ei(e, t) {
  const n = e.getParent();
  return n ? [n, e.getIndexWithinParent() + (t ? 1 : 0)] : [void 0, void 0];
}
function lP(e, t) {
  if (Ee(e) || at(e)) {
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
function Sg(e, t) {
  const n = Ce(), r = gc(n, [], 1, t);
  return _g(r) === _g(e) ? [n, n.getChildrenSize()] : void 0;
}
function _g(e) {
  return JSON.stringify(Object.entries(e).sort(([t], [n]) => t.localeCompare(n)));
}
function nx(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Nn(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function dn(e) {
  const t = [];
  let n = e;
  for (; n; ) {
    const r = qn(n);
    if (!r)
      break;
    const i = EM(r, n);
    i >= 0 && t.unshift(i), n = r;
  }
  return t;
}
function rx() {
  for (let e = Ce().getFirstChild(); e; e = e.getNextSibling())
    if (Vi(e))
      return !0;
  return !1;
}
function uP(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function ix(e, t, n, r, i, s, o) {
  if (!Je.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = n ? sl(n, i) : N();
  if (!E(a))
    return;
  const c = pP(a, e, r, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? uP(e, s), u = sx(e, l, c, i, s, void 0, void 0);
  return dP(u, a, i), u;
}
function fp(e) {
  return e !== "expanded";
}
function fP(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const n = t.getNode();
  if (!v(n) || !U(n.getParent()))
    return;
  if (w(n))
    return t.offset === 0 && n.getMarkerSyntax() === "closing" ? n : void 0;
  if (t.offset !== n.getTextContentSize())
    return;
  const r = n.getNextSibling();
  return w(r) && r.getMarkerSyntax() === "closing" ? r : void 0;
}
function dP(e, t, n) {
  const r = fp(n?.noteMode);
  e.setIsCollapsed(r), t.isCollapsed() || mM(t), Vd(t), Fn(t);
  const i = fP(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), r || e.getChildren().reverse().find(U)?.selectEnd();
}
function ys(e, t, n) {
  const r = Ur(e);
  r.setUnknownAttributes({ closed: "false" });
  const i = n?.markerMode === "editable";
  i ? r.append($t(e)) : n?.markerMode === "visible" && r.append(Br("marker", Ve(e)));
  const s = t === "" ? Pt : i ? D + t : t;
  return r.append(Re(s)), r;
}
function pP(e, t, n, r, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = n ?? {}, u = i.chapterVerseSeparator ?? ":", f = i.verseRangeSeparator ?? "-", d = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => f)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (d !== void 0 && o.push(ys("fr", d, r)), !e.isCollapsed()) {
        const p = Eg(e);
        p.length > 0 && o.push(ys("fq", p, r));
      }
      o.push(ys("ft", "", r));
      break;
    case "x":
    case "ex":
      if (d !== void 0 && o.push(ys("xo", d, r)), !e.isCollapsed()) {
        const p = Eg(e);
        p.length > 0 && o.push(ys("xq", p, r));
      }
      o.push(ys("xt", "", r));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function sx(e, t, n, r, i, s, o) {
  const a = o === "false", c = a ? !1 : fp(r?.noteMode), l = ad(e, t, c);
  s && Gt(l, ai, () => s);
  const u = r?.isNoteShellEditable === !1;
  let f, d;
  r?.markerMode === "editable" ? (f = $t(e), u && f.setMode("token"), a || (d = $t(e, "closing"), u && d.setMode("token"))) : r?.markerMode === "visible" && (f = Br("marker", Ve(e) + " "), a || (d = Br("marker", ot(e))));
  let p;
  if (f && l.append(f), r?.markerMode === "editable" && !c)
    p = Re(_t(l.__caller)).toggleUnmergeable(), u && p.setMode("token"), l.append(p, ...n);
  else {
    const h = () => zi(), g = n.flatMap(TP(h));
    if (t === "")
      l.append(...g);
    else {
      const m = Ad(n);
      let y = () => {
      };
      i?.noteCallerOnClick && (y = i.noteCallerOnClick), p = ep(l.__caller, m, y), l.append(p, h(), ...g);
    }
  }
  return d && l.append(d), l;
}
function br(e) {
  if (typeof e == "string") {
    const t = X(e);
    return q(t) ? t : void 0;
  }
  return xA(e);
}
function za(e, t) {
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
      hP(i);
    else {
      const s = dp(e), o = s === -1 ? r.length : s;
      e.select(o, o);
    }
  }
}
function dp(e) {
  const t = e.getChildrenSize() - 1, n = e.getLastChild();
  return w(n) && n.getMarkerSyntax() === "closing" || mn(n) && n.getTextContent() === ot(e.getMarker()) ? t : -1;
}
function hP(e) {
  const t = dp(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const n = e.getChildAtIndex(t - 1);
  v(n) && !Nn(n) ? n.selectEnd() : e.select(t, t);
}
function ox(e, { isContentChange: t = !1 } = {}) {
  const n = e.getNextSibling();
  if (v(n) && !ya(n)) {
    n.select(0, 0);
    return;
  }
  const r = e.getParent();
  if (!r)
    return;
  const i = e.getIndexWithinParent() + 1;
  r.canBeEmpty() ? r.select(i, i) : pp(r, i, { announce: !t });
}
function pp(e, t, { announce: n = !0 } = {}) {
  const r = e.getChildAtIndex(t - 1);
  if (!q(r) || r.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const i = Kr();
  i.anchor.set(e.getKey(), t, "element"), i.focus.set(e.getKey(), t, "element"), Fn(i), n && Ft().dispatchCommand(gn, void 0);
}
function Mg(e, t, n) {
  const r = Mt(e), i = gP(e, r);
  if (n && cx(i, t, n, ax(e, r)))
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
function gP(e, t) {
  const n = [];
  for (const { node: r } of es(e))
    !v(r) || Ze(r, Fe) || (hp(r, t) ? n.push({ node: r, isGlyph: !1, dataStart: md(r) }) : mP(r, e) && n.push({ node: r, isGlyph: !0, dataStart: 0 }));
  return n;
}
function mP(e, t) {
  return xn(e) ? !0 : w(e) && !t.is(e.getParent());
}
function ax(e, t) {
  return (n) => {
    let r = n;
    for (; !r.getPreviousSibling(); ) {
      const o = r.getParent();
      if (!o || o.is(e))
        return;
      r = o;
    }
    const i = r.getPreviousSibling(), s = A(i) ? i.getLastDescendant() : i;
    if (v(s) && (t?.is(s) || hp(s, t)))
      return s;
  };
}
function cx(e, t, n, r) {
  let i = 0, s = 0;
  for (const { node: o, isGlyph: a, dataStart: c } of e) {
    if (!a) {
      const l = o.getTextContentSize() - c;
      if (i += l, l > 0 && (s = 0), i > t)
        return !1;
      continue;
    }
    if (i === t && s === n.index)
      return yP(o, n.offset, r), !0;
    s += 1;
  }
  return !1;
}
function yP(e, t, n) {
  const r = e.getTextContentSize(), i = e.isToken() ? r : Math.min(Math.max(t, 0), r), s = i === 0 ? n(e) : void 0;
  if (s) {
    const o = s.getTextContentSize();
    s.select(o, o);
  } else
    e.select(i, i);
}
function bP(e, t, n) {
  const { opener: r, value: i, closer: s } = pa(e);
  if (!i)
    return !1;
  const o = kP(i);
  if (n) {
    const c = [];
    r && c.push({ node: r, isGlyph: !0, dataStart: 0 }), c.push({ node: i, isGlyph: !1, dataStart: o }), s && c.push({ node: s, isGlyph: !0, dataStart: 0 });
    const l = Mt(e);
    if (cx(c, t, n, ax(e, l)))
      return !0;
  }
  const a = Math.min(o + Math.max(t, 0), i.getTextContentSize());
  return i.select(a, a), !0;
}
function kP(e) {
  return e.getTextContent().startsWith(D) ? D.length : 0;
}
function hp(e, t) {
  return !v(e) || Nn(e) || ya(e) ? !1 : !t || !e.is(t);
}
function xP(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(U))
    return;
  const t = Mt(e);
  for (const { node: r } of es(e))
    if (hp(r, t))
      return;
  const n = dp(e);
  return n === -1 ? e.getChildrenSize() : n;
}
function TP(e) {
  return (t) => Rt(t) ? [t] : [t, e()];
}
function vP(e) {
  const t = e.getParent();
  return t !== null && Ze(t, q) !== null;
}
function Eg(e) {
  if (!E(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const n = t[0], r = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Hf(e);
  let a = "";
  for (const c of t)
    if (!(q(c) || Lt(c) || vP(c)) && !w(c) && !xn(c) && de(c, ke) !== "attribute") {
      if (Ee(c)) {
        a += `\\+fv ${c.getNumber()}\\+fv*`;
        continue;
      }
      if (v(c)) {
        let l = c.getTextContent();
        c === n && c === r ? l = s < o ? l.slice(s, o) : l.slice(o, s) : c === n ? l = i ? l.slice(s) : l.slice(o) : c === r && (l = i ? l.slice(0, o) : l.slice(0, s)), a += l;
      }
    }
  return a.replace(/[ \t\r\n\f\v]+/g, " ").trim();
}
const ll = [
  Mn,
  Jt,
  ...vE
], CP = [
  eo,
  ...ll
], SP = hi((e, t) => {
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
function _P() {
  const [e, t] = Ae(void 0), [n, r] = Ae(), i = te(null), s = Me((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = zS(l, c, () => {
      jS(l, c, {
        placement: "bottom-start",
        middleware: [VS(), WS()]
      }).then((u) => {
        r(u.placement), t((f) => f?.x === u.x && f?.y === u.y ? f : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = Me(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return H(() => o, [o]), { coords: e, placement: n, updatePosition: s, cleanup: o };
}
function MP({ isOpen: e, floatingBoxRef: t }) {
  const { coords: n, updatePosition: r, cleanup: i, placement: s } = _P();
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
const EP = lS(SP);
function lx({ isOpen: e = !1, children: t }) {
  const n = te(null), { coords: r, placement: i } = MP({ isOpen: e, floatingBoxRef: n }), s = ut(() => r ? typeof t == "function" ? t : () => t : () => null, [t, r]);
  return Ni(
    P(EP, { ref: n, coords: r, style: r ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const ux = ky(void 0);
function gp() {
  const e = xy(ux);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function AP(e, t) {
  const [n, r] = Ae(0), [i, s] = Ae(-1), o = ut(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: n,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = Me(() => {
    r((f) => {
      const d = o.length;
      return d ? (f - 1 + d) % d : 0;
    });
  }, [o.length]), l = Me(() => {
    r((f) => {
      const d = o.length;
      return d ? (f + 1) % d : 0;
    });
  }, [o.length]), u = Me(() => {
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
function PP({ children: e, menuItems: t, onSelectOption: n, ...r }) {
  const i = AP(t, n);
  return P(ux.Provider, { value: i, children: P("div", { ...r, children: e }) });
}
const fx = hi(({ index: e, children: t, onMouseEnter: n, onClick: r, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = gp(), u = Me((d) => {
    l(), c(-1), r?.(d);
  }, [r, l, c]), f = Me((d) => {
    a(e), n?.(d);
  }, [e, a, n]);
  return P("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: f, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function wP({ children: e, autoIndex: t = !0, ...n }) {
  const r = te(null), { state: { activeIndex: i, menuItems: s } } = gp(), o = ut(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = ut(() => {
    const c = o(s);
    return t ? uS.map(c, (l, u) => fS(l) && l.type === fx && l.props.index === void 0 ? dS(l, { index: u }) : l) : c;
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
const NP = (e, t, n) => ja(e, n).toLowerCase().includes(t.toLowerCase()), Ag = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", ja = (e, t) => {
  const n = e[t];
  return typeof n == "string" ? n : String(n);
};
function OP(e) {
  const { query: t, items: n, filterBy: r, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, f;
  i ? (f = i, u = n.length > 0 ? Ag(n[0]) : "") : (u = r || (n.length > 0 ? Ag(n[0]) : ""), f = (h, g) => NP(h, g, u));
  const d = s || u, p = /* @__PURE__ */ new Map();
  return n.filter((h) => {
    try {
      return f(h, t);
    } catch (g) {
      return console.warn("Error filtering item:", h, g), !1;
    }
  }).sort((h, g) => {
    const m = (x) => (p.has(x) || p.set(x, ja(x, d).toLowerCase()), p.get(x) ?? ""), y = a ? ja(h, d) : m(h), k = a ? ja(g, d) : m(g);
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
          const _ = y.indexOf(l), S = k.indexOf(l);
          if (_ !== -1 && S === -1)
            return -1;
          if (S !== -1 && _ === -1)
            return 1;
          if (_ !== -1 && S !== -1)
            return _ - S;
          break;
        }
      }
    return y.localeCompare(k);
  });
}
const Yl = {
  Root: PP,
  Options: wP,
  Option: fx
};
function $P(e) {
  const { query: t, items: n, filterBy: r, filter: i, sortBy: s, sortingOptions: o } = e;
  return ut(() => OP({
    query: t,
    items: n,
    filterBy: r,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, n, r, i, s, o]);
}
function RP() {
  const { moveUp: e, moveDown: t, select: n } = gp();
  return ut(() => ({
    moveUp: e,
    moveDown: t,
    select: n
  }), [e, t, n]);
}
const IP = () => {
  const e = RP(), [t] = ve();
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
function LP() {
  return IP(), null;
}
const qP = ["Shift", "Control", "Alt", "Meta"];
function dx(e) {
  const { options: t, onSelectOption: n, onClose: r, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ve(), u = s !== void 0, [f, d] = Ae(""), p = u ? s ?? "" : f, h = $P({ query: p, items: t, filterBy: "name" }), g = (m) => {
    r?.(), n ? n(m) : m.action(l);
  };
  return H(() => {
    a?.(p, h);
  }, [a, p, h]), H(() => l.registerCommand(_r, (m) => {
    if (u || c?.includes(m.key) || qP.includes(m.key))
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
  }, Ge), [l, u, p, o, r, c]), Qe(Yl.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (m) => g(m), children: [!u && P("input", { value: p, type: "text", disabled: !0 }), P(LP, {}), P(Yl.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (m) => m.map((k, x) => Qe(Yl.Option, { index: x, children: [P("span", { className: "label", children: k.label ?? k.name }), P("span", { className: "description", children: k.description })] }, k.name)) })] });
}
function DP({ trigger: e, items: t }) {
  const [n] = ve(), [r, i] = Ae(!1), s = Me((o) => {
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
      if (E(l))
        return l;
    });
    a.read(() => {
      const l = N();
      !E(l) || c?.is(l) || i(!1);
    });
  }), [n]), t && P(lx, { isOpen: r, children: ({ placement: o }) => P(dx, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function KP({ scriptureReference: e, contextMarker: t, getMarkerAction: n }) {
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
function UP(e, t) {
  const n = is(e);
  if (Ar(e) || Gr(e)) {
    const o = 1 + e.getMarker().length + 1, a = e.getNumber();
    if (e.getShowMarker())
      return t < o + a.length ? t : void 0;
    if (t < o || t >= o + a.length)
      return;
    const c = n.indexOf(a);
    return c < 0 ? "drawn" : c + t - o;
  }
  const r = Xc(e), i = r.length - r.trimStart().length, s = r.trim().length;
  if (!(t >= s))
    return r === n ? i + t : "drawn";
}
function BP() {
  return typeof CSS > "u" || typeof Highlight > "u" || !("highlights" in CSS) ? void 0 : { registry: CSS.highlights, create: () => new Highlight() };
}
const Pg = /* @__PURE__ */ new Map(), FP = ["background-color", "color", "text-shadow"], zP = [
  "text-decoration-line",
  "text-decoration-style",
  "text-decoration-color",
  "text-decoration-thickness"
], jP = /* @__PURE__ */ new Set(["solid", "double", "dotted", "dashed", "wavy"]);
function VP(e, t) {
  const n = e.ownerDocument.defaultView;
  if (!n)
    return [];
  const r = n.getComputedStyle(e), i = n.getComputedStyle(t), s = (u) => {
    const f = r.getPropertyValue(u);
    return f && f !== i.getPropertyValue(u) ? f : void 0;
  }, o = [];
  for (const u of FP) {
    const f = s(u);
    f && o.push(`${u}: ${f}`);
  }
  const a = r.getPropertyValue("text-decoration-line");
  let c = !1;
  if (a) {
    if (a !== "none" && s("text-decoration-line")) {
      c = !0;
      for (const u of zP) {
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
    o.push("text-decoration-line: underline", `text-decoration-style: ${jP.has(l) ? l : "solid"}`);
    const u = r.getPropertyValue("border-bottom-color");
    u && o.push(`text-decoration-color: ${u}`);
    const f = r.getPropertyValue("border-bottom-width");
    f && o.push(`text-decoration-thickness: ${f}`);
  }
  return o;
}
const WP = Math.random().toString(36).slice(2, 10);
let HP = 0;
class GP {
  api;
  probeParent;
  prefix = `editor-annotation-${WP}-${HP++}`;
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
    n.length > 0 ? this.byLeaf.set(t, n) : this.byLeaf.delete(t), this.release(r, n);
  }
  clearLeaf(t) {
    const n = this.byLeaf.get(t) ?? [];
    this.byLeaf.delete(t), this.release(n, []);
  }
  /** Let go of `pieces`, keeping a range in its class set's highlight while one of `kept` still
   * paints it with that class set; a class set no piece uses any more is unregistered. */
  release(t, n) {
    for (const r of t) {
      const i = Xl(r.classNames), s = this.byClassSet.get(i);
      !s || (n.some((a) => a.range === r.range && Xl(a.classNames) === i) || s.highlight.delete(r.range), --s.uses > 0) || (this.api.registry.delete(s.name), Pg.delete(s.name), this.byClassSet.delete(i), this.queueRender());
    }
  }
  dispose() {
    for (const t of [...this.byLeaf.keys()])
      this.clearLeaf(t);
    this.disposed = !0, this.observer?.disconnect(), this.style?.remove(), this.probes?.remove();
  }
  use(t) {
    const n = Xl(t);
    let r = this.byClassSet.get(n);
    if (!r) {
      const i = `${this.prefix}-${this.nextName++}`, s = this.api.create();
      s.priority = this.nextName, r = { name: i, classNames: t, highlight: s, uses: 0 }, this.byClassSet.set(n, r), this.api.registry.set(i, s), Pg.set(i, t), this.queueRender();
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
      this.measured.set(c, VP(l, i));
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
    this.style?.isConnected || (this.style = n.createElement("style"), this.style.setAttribute(px, this.prefix), n.head.append(this.style)), this.style.textContent !== a && (this.style.textContent = a);
  }
  /**
   * Whether any style rule's selector names one of `classNames`. Errs toward yes: a substring match
   * counts, and every class set counts while any rule cannot be read.
   */
  isNamedByRule(t, n) {
    this.rules || (this.rules = ZP(hx(t)), this.ruleCounts = wg(t));
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
    !t || wg(t) === this.ruleCounts || this.forgetStyles();
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
        if (Zu(o.target))
          return !0;
        const a = [...o.addedNodes, ...o.removedNodes];
        return a.length > 0 && a.every(Zu);
      };
      i.every(s) || this.forgetStyles();
    }), this.observer.observe(t.head, { childList: !0, characterData: !0, subtree: !0 });
    const r = { attributes: !0, attributeFilter: ["class", "style", "data-theme"] };
    this.observer.observe(t.documentElement, r), t.body && this.observer.observe(t.body, r);
  }
}
const px = "data-editor-annotation-highlights";
function Zu(e) {
  for (let t = e; t; t = t.parentNode)
    if (JP(t) && t.hasAttribute(px))
      return !0;
  return !1;
}
function JP(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function hx(e) {
  const t = "adoptedStyleSheets" in e ? e.adoptedStyleSheets : [];
  return [...e.styleSheets, ...t].filter((n) => !n.ownerNode || !Zu(n.ownerNode));
}
function wg(e) {
  return hx(e).map((t) => {
    try {
      return t.cssRules.length;
    } catch {
      return -1;
    }
  }).join(",");
}
function YP(e) {
  return "cssRules" in e;
}
function XP(e) {
  return "styleSheet" in e;
}
function QP(e) {
  return "selectorText" in e && typeof e.selectorText == "string";
}
function ZP(e) {
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
      QP(o) && t.push(o.selectorText), XP(o) && (o.styleSheet ? r(o.styleSheet) : n = !0), YP(o) && r(o);
  };
  for (const i of e)
    r(i);
  return { selectors: t.join(`
`), unreadable: n };
}
function Xl(e) {
  return JSON.stringify([...e].sort());
}
function Ng(e, t, n) {
  const r = e.ownerDocument, i = r.createTreeWalker(e, NodeFilter.SHOW_TEXT), s = r.createRange();
  let o = 0, a = !1;
  for (let c = i.nextNode(); c; c = i.nextNode()) {
    const l = c.textContent?.length ?? 0;
    if (!a && t < o + l && (s.setStart(c, t - o), a = !0), a && n <= o + l)
      return s.setEnd(c, n - o), s;
    o += l;
  }
}
function e1(e, t, n) {
  return "getClientRects" in e ? Array.from(e.getClientRects()).some((r) => t >= r.left && t <= r.right && n >= r.top && n <= r.bottom) : !1;
}
function gx(e) {
  return v(e) ? e.getTextContent() : is(e);
}
function No(e) {
  return gx(e).length;
}
function t1(e, t) {
  if (v(e)) {
    if (kn(e))
      return !0;
    if (fk(e)) {
      const [i, s] = Rd(e);
      return t < i || t >= s;
    }
    return t < Qs(e);
  }
  const [n, r] = Qc(is(e));
  return t < n || t >= r;
}
function Ql(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (A(t) && !t.isInline())
      return t.getKey();
}
function n1(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getFirstChild();
    if (!n)
      return t;
    t = n;
  }
  return t;
}
function Og(e) {
  for (let t = e; t; t = t.getParent()) {
    const n = t.getNextSibling();
    if (n)
      return n1(n);
  }
}
function mx(e) {
  return A(e) ? e.getChildren().flatMap(mx) : [e];
}
const r1 = 64;
function i1(e, t) {
  const n = /* @__PURE__ */ new Map(), r = (o, a, c) => {
    for (let l = a; l < c; l++)
      if (!t1(o, l))
        return !1;
    return c > a && n.set(o.getKey(), [a, c]), !0;
  };
  if (e.leaf.is(t.leaf))
    return r(e.leaf, e.end, t.start) ? n : void 0;
  const i = Ql(e.leaf);
  if (i !== Ql(t.leaf) || !r(e.leaf, e.end, No(e.leaf)))
    return;
  let s = Og(e.leaf);
  for (let o = 0; s && !s.is(t.leaf); o++, s = Og(s))
    if (o >= r1 || Ql(s) !== i || bn(s) && No(s) === 0 || !r(s, 0, No(s)))
      return;
  if (s)
    return r(t.leaf, 0, t.start) ? n : void 0;
}
function s1(e) {
  const t = [...e].sort(([r], [i]) => r - i), n = [];
  for (const [r, i] of t) {
    const s = n[n.length - 1];
    s && r <= s[1] ? s[1] = Math.max(s[1], i) : n.push([r, i]);
  }
  return n;
}
function o1(e, t, n, r) {
  const i = [];
  for (const a of n) {
    const c = X(a);
    if (c?.isAttached())
      for (const l of Ir(c)) {
        if (l.type !== e || l.id !== t || l.undisplayed)
          continue;
        const u = l.start === l.end;
        i.push({
          leaf: c,
          start: u ? 0 : l.start,
          end: u ? No(c) : l.end,
          inMark: !1
        });
      }
  }
  for (const a of r) {
    const c = X(a);
    if (!(!ue(c) || !c.isAttached()))
      for (const l of mx(c))
        i.push({ leaf: l, start: 0, end: No(l), inMark: !0 });
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
      for (const [u, [f, d]] of i1(a, l) ?? [])
        o(u, f, d);
  });
  for (const [a, c] of s)
    s.set(a, s1(c));
  return s;
}
function a1(e, t) {
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
const c1 = "display-annotation", l1 = [
  st,
  Wn,
  Bt,
  Hn,
  Mn,
  Jt,
  Dn,
  fr
], yx = /* @__PURE__ */ new Set();
function Kn(e, t) {
  return JSON.stringify([e, t]);
}
function u1(e) {
  return Array.isArray(e) && e.length === 2 && typeof e[0] == "string" && typeof e[1] == "string";
}
function po(e) {
  const t = JSON.parse(e);
  if (!u1(t))
    throw new Error(`not an annotation index key: ${e}`);
  return t;
}
function bx(e) {
  Gt(e, Yc, void 0), A(e) && e.getChildren().forEach(bx);
}
const Zl = /* @__PURE__ */ new WeakMap();
function f1(e) {
  LM({
    holdableText: QA,
    renderedOffset: UP
  });
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
  let c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
  const u = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakSet(), d = new AbortController(), p = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Set();
  let _, S = !1;
  const F = BP(), $ = F ? new GP(F, () => e.getRootElement()?.parentElement ?? null) : void 0;
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
        Le(Kn(V, J), V, J);
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
    const Z = ae.map((Q) => ue(Q) ? Q.getTextContent() : Ir(Q).filter((se) => se.type === V && se.id === G).map((se) => Ku(Q, se)).join("")).join("");
    o.set(L, Z);
  }
  function ye(L, V, G) {
    return g.get(L)?.has(V) ? y.has(L) ? !0 : ($?.leafHighlights(L) ?? []).some((J) => J.annotations.includes(V) && e1(J.range, G.clientX, G.clientY)) : !1;
  }
  function nt(L, V) {
    const G = /* @__PURE__ */ new Map();
    for (const J of Ir(L)) {
      const ae = Kn(J.type, J.id);
      G.has(ae) || !ye(L.getKey(), ae, V) || G.set(ae, { annotation: J, text: Ku(L, J) });
    }
    return G;
  }
  function rt(L, V, G) {
    e.getEditorState().read(() => {
      const J = Zi(L);
      if (!J)
        return;
      const ae = G === "leave" ? /* @__PURE__ */ new Map() : nt(J, V), Z = (se, { annotation: ce, text: qe }) => cc(e, ce.type, ce.id)?.[se]?.(V, ce.type, ce.id, qe);
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
      const [ae, Z] = po(J), Q = V[ae] ??= [];
      Q.includes(Z) || Q.push(Z), k.get(J)?.forEach((se) => G.add(se));
    }
    return Object.keys(V).length === 0 ? [] : [
      ...Zy(fe, V),
      c1,
      ...G
    ].flatMap((J) => J.match(/\S+/g) ?? []);
  }
  function Ye(L, V) {
    const G = u.get(L) ?? [];
    Da(L, ...G.filter((J) => !V.includes(J))), vo(L, ...V), u.set(L, V);
  }
  function pr(L) {
    if (f.has(L))
      return;
    f.add(L);
    const { signal: V } = d;
    L.addEventListener("click", (G) => rt(L, G, "onClick"), { signal: V }), L.addEventListener("mouseenter", (G) => rt(L, G, "move"), { signal: V }), L.addEventListener("mousemove", (G) => rt(L, G, "move"), { signal: V }), L.addEventListener("mouseleave", (G) => rt(L, G, "leave"), {
      signal: V
    });
  }
  function Tn(L) {
    const V = X(L), G = e.getElementByKey(L), J = g.get(L), ae = m.get(L);
    if (ae && ae !== G && Ye(ae, []), x.delete(L), !V || !G || !J || J.size === 0) {
      G && Ye(G, []), $?.clearLeaf(L), m.delete(L), y.delete(L);
      return;
    }
    m.set(L, G);
    const Z = new Map([...J].map((Ne) => [
      Ne,
      h.get(Ne)?.get(L) ?? []
    ])), Q = Ir(V).length > 0, se = gx(V);
    let ce = a1(se.length, Z);
    if (!ce.whole && !$ && (ce = Q ? { whole: !0 } : { whole: !1, segments: [] }), Q && pr(G), ce.whole) {
      $?.clearLeaf(L), y.add(L), Ye(G, rn(J));
      return;
    }
    if (y.delete(L), Ye(G, []), !$)
      return;
    const qe = [];
    for (const { start: Ne, end: sn, annotations: Cn } of ce.segments) {
      const wr = Ng(G, Ne, sn);
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
  function z() {
    S || e.getEditorState().read(() => new Set(he()).forEach(Tn), { editor: e });
  }
  function oe(L) {
    _?.disconnect(), _ = void 0;
    const V = L?.ownerDocument.defaultView;
    !L || !V || !$ || (_ = new V.MutationObserver(z), _.observe(L, { childList: !0, characterData: !0, subtree: !0 }));
  }
  function Se(L) {
    const V = /* @__PURE__ */ new Set();
    for (const J of L)
      g.has(J) && V.add(J);
    const G = /* @__PURE__ */ new Set([...t.keys(), ...h.keys()]);
    for (const [J, ae] of r)
      ae.size >= 2 && G.add(J);
    for (const J of G) {
      const [ae, Z] = po(J), Q = o1(ae, Z, t.get(J) ?? [], r.get(J) ?? []), se = h.get(J) ?? /* @__PURE__ */ new Map();
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
      Tn(J);
  }
  function We(L) {
    S || e.getEditorState().read(() => Se(L), { editor: e });
  }
  function lt(L, V) {
    const G = Kn(L, V), J = [], ae = (Z) => {
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
          const Ne = Ng(se, ce, qe);
          Ne && J.push(Ne);
        }
      }
    }
    return J.sort((Z, Q) => Z.compareBoundaryPoints(Range.START_TO_START, Q));
  }
  function kt(L, V, G, J) {
    const ae = Kn(L, V), Z = k.get(ae) ?? /* @__PURE__ */ new Set();
    Z.has(G) !== J && (J ? Z.add(G) : Z.delete(G), Z.size > 0 ? k.set(ae, Z) : k.delete(ae), We(h.get(ae)?.keys() ?? []));
  }
  function vn(L) {
    e.getEditorState().read(() => {
      const V = /* @__PURE__ */ new Set();
      for (const [G, J] of L) {
        const ae = J === "destroyed" ? null : X(G), Z = ae ? Ir(ae) : [], Q = n.get(G) ?? [];
        for (const { type: se, id: ce } of Q) {
          const qe = Kn(se, ce);
          V.add(qe), Z.some((Ne) => Ne.type === se && Ne.id === ce) || ge(t, qe, G);
        }
        for (const se of Z) {
          const ce = Kn(se.type, se.id);
          V.add(ce), K(t, ce, G);
        }
        Z.length > 0 ? n.set(G, Z) : n.delete(G);
        for (let se = ae?.getParent(); se; se = se.getParent())
          ue(se) && re(se);
      }
      for (const G of V) {
        const [J, ae] = po(G);
        Le(G, J, ae);
      }
    }, { editor: e });
  }
  function ee(L) {
    e.getEditorState().read(() => {
      for (const [V, G] of L) {
        const J = G === "destroyed" ? null : X(V), ae = ue(J) ? J : void 0, Z = ae ? Object.entries(ae.getTypedIDs()) : [], Q = Z.flatMap(([ce, qe]) => qe.map((Ne) => Kn(ce, Ne)));
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
            sn && s.set(Kn(ce, Ne), sn);
          }
      }
    });
  }
  function Te(L, V, G) {
    mk(e, V, G), s.delete(L), o.delete(L);
  }
  function Pr() {
    for (const [L, V] of B_(e))
      we(L, V);
  }
  function we(L, V) {
    const G = Kn(L, V);
    a.add(G), c.add(G);
  }
  function hr() {
    a.clear(), F_(e);
    for (const L of /* @__PURE__ */ new Set([...s.keys(), ...o.keys()])) {
      if (I(L) > 0)
        continue;
      const [V, G] = po(L);
      Te(L, V, G);
    }
  }
  function pe({ tags: L }) {
    Pr();
    const V = ne, G = c, J = l;
    if (ne = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), L.has(la)) {
      hr();
      return;
    }
    if (L.has(Kc))
      return;
    const ae = [];
    for (const Z of V) {
      if (I(Z) > 0)
        continue;
      const [Q, se] = po(Z), ce = cc(e, Q, se)?.onRemove ?? s.get(Z), qe = o.get(Z) ?? "";
      if (Te(Z, Q, se), !(!ce || a.has(Z) || G.has(Z))) {
        a.add(Z), Bh(e, Q, se, !0);
        for (const Ne of J.get(Z) ?? [])
          z_(Ne, Q, se);
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
  function Dt(L, V) {
    Pr();
    const G = Kn(L, V);
    a.delete(G), Bh(e, L, V, !1);
  }
  const Yt = tt(
    ...l1.filter((L) => e.hasNodes([L])).map((L) => e.registerMutationListener(L, vn, { skipInitialization: !1 })),
    e.hasNodes([gt]) ? e.registerMutationListener(gt, ee, {
      skipInitialization: !1
    }) : () => {
    },
    U_(e),
    e.registerUpdateListener(pe),
    FM(e, [Jt, Mn]),
    e.registerUpdateListener(({ dirtyLeaves: L, dirtyElements: V }) => {
      $?.noticeStylesheetChanges(), !(L.size === 0 && V.size === 0) && (We([...L, ...V.keys()]), _?.takeRecords());
    }),
    // Also paints what the mutation listeners above found already in the document.
    e.registerRootListener((L) => {
      oe(L), L && We([...g.keys()]);
    }),
    () => {
      S = !0, d.abort(), $?.dispose(), _?.disconnect();
    },
    e.registerCommand(
      yS,
      ({ nodes: L }) => (L.forEach(bx), !1),
      // Critical, and never handling the command, so a handler that does handle it cannot skip the
      // strip.
      He
    )
  );
  return {
    index: {
      keysFor: (L, V) => t.get(Kn(L, V)) ?? yx,
      noteSet: Dt,
      noteReported: we,
      hasReported: (L, V) => (Pr(), a.has(Kn(L, V))),
      setStateClass: kt,
      rangesFor: lt
    },
    references: 0,
    unregister: Yt
  };
}
function d1(e) {
  let t = Zl.get(e);
  t || (t = f1(e), Zl.set(e, t)), t.references++;
  const n = t;
  let r = !1;
  return {
    index: n.index,
    release: () => {
      r || (r = !0, n.references--, !(n.references > 0) && (n.unregister(), Zl.delete(e)));
    }
  };
}
function kx(e) {
  const t = te(void 0);
  return Gs(() => {
    const n = d1(e);
    return t.current = n.index, () => {
      t.current = void 0, n.release();
    };
  }, [e]), ut(() => ({
    keysFor: (n, r) => t.current?.keysFor(n, r) ?? yx,
    noteSet: (n, r) => t.current?.noteSet(n, r),
    noteReported: (n, r) => t.current?.noteReported(n, r),
    setStateClass: (n, r, i, s) => t.current?.setStateClass(n, r, i, s),
    rangesFor: (n, r) => t.current?.rangesFor(n, r) ?? [],
    hasReported: (n, r) => t.current?.hasReported(n, r) ?? !1
  }), []);
}
function Oo(e, t) {
  return `${e}:${t}`;
}
function p1(e, t) {
  H(() => {
    if (!e.hasNodes([gt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const n = /* @__PURE__ */ new Map();
    return tt(ed(e, gt, (r) => Ui(r.getTypedIDs(), r.getTypedOnClicks(), r.getTypedOnRemoves(), r.getTypedOnMouseEnters(), r.getTypedOnMouseLeaves()), (r, i) => {
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
                let f = t.get(Oo(c, u));
                a[c] = l, n.set(i, a), s === "destroyed" ? f !== void 0 && (f.delete(i), f.size === 0 && t.delete(Oo(c, u))) : (f === void 0 && (f = /* @__PURE__ */ new Set(), t.set(Oo(c, u), f)), f.has(i) || f.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const h1 = hi(function({ logger: t, viewOptions: n }, r) {
  const [i] = ve(), s = ut(() => /* @__PURE__ */ new Map(), []);
  p1(i, s);
  const o = kx(i), a = (c, l, u) => {
    const f = Array.from(u ?? s.get(Oo(c, l)) ?? []), d = eb(c, l, f), p = [];
    for (const g of Array.from(o.keysFor(c, l))) {
      const m = X(g);
      if (!m)
        continue;
      const y = Ir(m).filter((k) => k.type === c && k.id === l);
      gk(m, c, l) && p.push(...y.map((k) => Ku(m, k)));
    }
    const h = cc(i, c, l);
    if (mk(i, c, l), p.length > 0 && h && d === 0 && !o.hasReported(c, l)) {
      o.noteReported(c, l);
      try {
        h.onRemove?.(c, l, "removed", p.join(""));
      } catch (g) {
        queueMicrotask(() => i._onError(g instanceof Error ? g : new Error(String(g))));
      }
    }
  };
  return Lc(r, () => ({
    setAnnotation(c, l, u, f, d, p, h) {
      if (gt.isReservedType(l))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${l}'. Use the appropriate plugin instead.`);
      i.update(() => {
        const g = /* @__PURE__ */ new Map(), m = sl(c, n, {
          forAnnotation: !0,
          decoratorHolds: g
        });
        if (m === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        a(l, u), o.noteSet(l, u), Bd(m, l, u, f, d, p, h, { decoratorHolds: g });
      }, { tag: _u });
    },
    removeAnnotation(c, l) {
      if (gt.isReservedType(c))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${c}'. Use the appropriate plugin instead.`);
      const u = s.get(Oo(c, l));
      (u === void 0 || u.size === 0) && o.keysFor(c, l).size === 0 || i.update(() => {
        a(c, l, u);
      }, { tag: _u });
    },
    getAnnotationRanges(c, l) {
      return o.rangesFor(c, l);
    }
  })), null;
});
function g1({ dirtyElements: e, dirtyLeaves: t, prevEditorState: n, tags: r }, i) {
  return e.size === 0 && t.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
  // stack — its bytes really did change, so it must reach `onChange` like any edit.
  // Without this exemption the cached USJ and the emitted delta both keep showing the
  // pre-settle bytes, and the host saves a document the editor is no longer displaying.
  r.has(Gf) && !r.has(Fy) || i.ignoreTags.some((s) => r.has(s)) || n.isEmpty();
}
function m1(e, { dirtyLeaves: t, prevEditorState: n }) {
  let r = new Es();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = X(i), o = s !== null && wn(s) !== void 0;
    if (t.size === 1 && v(s) && !o && nA(s)) {
      const a = Yd(s);
      if (a !== void 0) {
        const c = n.read(() => {
          const f = X(i);
          return new Es([v(f) ? Hu(f) : { insert: "" }]);
        }), l = new Es([Hu(s)]), u = new Es(a > 0 ? [{ retain: a }] : []);
        r = r.concat(u).concat(c.diff(l));
      }
    } else {
      const a = mg(n), c = mg(e.getEditorState());
      r = a.diff(c);
    }
  }), r.ops;
}
function y1(e, t, n, r) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += b1(s, i, t, r);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        r?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      r?.debug(`Delete: ${s.delete}`), x1(i, s.delete, r);
    } else "insert" in s ? typeof s.insert == "string" ? (r?.debug(`Insert: '${s.insert}'`), i += T1(i, s.insert, s.attributes, t, r)) : typeof s.insert == "object" && s.insert !== null ? (r?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), C1(i, s, t, n, r) ? i += 1 : r?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : r?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : r?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function b1(e, t, n, r) {
  return typeof e.retain != "number" || e.retain < 0 ? (r?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (r?.debug(`Retain: ${e.retain}`), e.attributes && (r?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), k1(t, e.retain, e.attributes, n, r)), e.retain);
}
function k1(e, t, n, r, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(n)}`);
  let s = t, o = 0, a = -1;
  const c = Ce();
  function l(u) {
    if (s <= 0)
      return !0;
    if (jr(u)) {
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
          if (li(n)) {
            const k = g.getParent();
            if (U(k)) {
              const x = n.char;
              let _;
              Array.isArray(x) ? a >= 0 && a <= x.length - 1 && (_ = x[a]) : a === 0 && (_ = x);
              const S = _ ? Fi(_, k) : !1;
              if (S && Array.isArray(x) && x.length > 1) {
                const F = Re("");
                g.replace(F);
                const $ = typeof n.segment == "string" ? n.segment : void 0, ne = to(x.slice(1), r, g, $);
                let fe = F;
                for (const I of ne)
                  fe.insertAfter(I), fe = I;
                F.remove(), Un(n, g);
              } else if (S)
                Un(n, g);
              else {
                g.remove();
                const F = $g(g, n, r, i);
                if (F && F.length > 0) {
                  let $ = k;
                  for (const ne of F)
                    $.insertAfter(ne), $ = ne;
                }
              }
            } else {
              const x = Re("");
              g.replace(x);
              const _ = $g(g, n, r, i);
              if (_ && _.length > 0) {
                let S = x;
                for (const F of _)
                  S.insertAfter(F), S = F;
                x.remove();
              } else
                x.replace(g);
            }
          } else
            Un(n, g);
          s -= h;
        }
      }
      o += f;
    } else if (On(u))
      e <= o && o < e + t && s > 0 && (Rg(u, n), s -= 1), o += 1;
    else if (U(u)) {
      a += 1;
      let f = !1;
      if (e <= o && o < e + t && s > 0)
        if (li(n)) {
          const d = n.char;
          let p;
          if (Array.isArray(d) ? a >= 0 && a <= d.length - 1 && (p = d[a]) : a === 0 && (p = d), p) {
            ef(u, p.style), typeof p.cid == "string" && Gt(u, Bi, () => p.cid);
            const h = pt(p, pc);
            h && Object.keys(h).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...h
            }) : u.setUnknownAttributes(void 0);
          }
        } else (n.char === !1 || n.char === null || O1(n.char)) && (f = !0);
      if (s > 0) {
        const d = u.getChildren();
        for (const p of d) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return f && Cu(u), !0;
        }
      }
      f && Cu(u), a -= 1;
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
        if (!Ct(u))
          Rg(u, n);
        else if (mp(n)) {
          const p = vx(n.para, r);
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
function $g(e, t, n, r) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = to(t.char, n, e, i), o = s.find(U);
  if (!o) {
    r?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Un(t, e);
    return;
  }
  const a = {};
  Mx.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Un(t, e), s;
}
function xx(e, t) {
  e.setMarker(t);
  const n = e.getFirstChild();
  w(n) ? (n.setMarker(t), n.setTextContent(Ve(t))) : Rt(n) && n.getTextType() === "marker" && n.setTextContent(Ve(t) + D);
}
function ef(e, t) {
  const n = e.getMarker();
  if (e.setMarker(t), t === n)
    return;
  e.getChildren().forEach((o) => {
    w(o) && o.getMarker() === n && o.setMarker(t);
  });
  const r = U(e.getParent()), i = e.getFirstChild();
  Rt(i) && i.getTextType() === "marker" && i.getTextContent() === Ve(n, r) && i.setTextContent(Ve(t, r));
  const s = e.getLastChild();
  Rt(s) && s.getTextType() === "marker" && s.getTextContent() === ot(n, r) && s.setTextContent(ot(t, r));
}
function Rg(e, t) {
  for (const n of Object.keys(t)) {
    const r = t[n];
    if (n === "char" && U(e) && li(t)) {
      const i = tf(r);
      if (ef(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Gt(e, Bi, () => o);
      }
      const s = pt(i, pc);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof r == "string" && (at(e) || Ee(e) || Ke(e) || q(e) || et(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [n]: r
    }) : (Ie(e) || me(e) || U(e)) && (n === "style" && me(e) ? xx(e, r) : n === "style" && U(e) ? ef(e, r) : n === "code" && Ie(e) ? e.setCode(r) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [n]: r
    })), n === "segment" && Gt(e, ai, () => r));
  }
}
function x1(e, t, n) {
  if (t <= 0)
    return;
  const r = Ce();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (jr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, f = Math.min(s, u);
        f > 0 && (a.spliceText(l, f, ""), a.getTextContentSize() === 0 && a.remove(), n?.debug(`Deleted ${f} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= f, c -= f);
      }
      i += c;
    } else if (On(a))
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
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), n?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Vn(), !0), n?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
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
              jr(y) ? h += y.getTextContentSize() : On(y) && (h += 1), i = k;
            }
            const m = p.getChildren();
            for (const y of m)
              y.remove(), a.append(y);
            p.remove(), n?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Vn(), !0);
        } else me(a) ? a.replace(Vn(), !0) : a.remove();
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
function T1(e, t, n, r, i) {
  if (t === Yo)
    return Ig(e, n, r, i);
  if (t.endsWith(Yo) && !mp(n)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (li(n))
        throw new Error("Text + LF should not have char attributes");
      o += mc(e, s, n, i);
    }
    return o += Ig(e + o, n, r, i), o;
  } else return li(n) ? v1(e, t, n, r, i) : mc(e, t, n, i);
}
function v1(e, t, n, r, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(n.char)} at index ${e}`);
  const s = Re(t === "" ? Pt : t);
  Un(n, s);
  let o;
  {
    let m = function(y) {
      if (jr(y)) {
        const k = y.getTextContentSize();
        if (e >= g && e < g + k) {
          const x = y.getParent();
          return U(x) && (o = x), !0;
        }
        g += k;
      } else if (On(y))
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
    const h = Ce();
    let g = 0;
    m(h);
  }
  let a = n.char;
  if (Array.isArray(a)) {
    if (o) {
      const h = a[0];
      h && Fi(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Fi(a, o) || (o = void 0));
  const c = typeof n.segment == "string" ? n.segment : void 0, u = to(a, r, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const f = u.find(U);
  if (!f)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(n.char)}. Falling back to rich text insertion.`), mc(e, t, void 0, i);
  const d = {};
  for (const [h, g] of Object.entries(n))
    h !== "char" && h !== "segment" && typeof g == "string" && (d[h] = g);
  Object.keys(d).length > 0 && f.setUnknownAttributes(d);
  let p = !0;
  for (const h of u)
    if (!Tx(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), mc(e, t, void 0, i));
}
function mc(e, t, n, r) {
  if (t.length <= 0)
    return r?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Ce();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (jr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, f = Re(t);
        if (Un(n, f), u === 0)
          c.insertBefore(f);
        else if (u === l) {
          const d = c.getParent();
          U(d) && !li(n) ? d.insertAfter(f) : c.insertAfter(f);
        } else {
          const [, d] = c.splitText(u);
          d.insertBefore(f);
        }
        return r?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (On(c))
      s += 1;
    else if (U(c)) {
      if (!o && e === s) {
        const f = Re(t);
        Un(n, f);
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
        return Un(n, f), c.append(f), r?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (mt(c)) {
      if (!o && e === s) {
        const f = Re(t);
        Un(n, f);
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
        return Un(n, f), c.append(f), r?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
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
    Un(n, c);
    const l = Vn().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (r?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Tx(e, t, n) {
  const r = Ce();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === r && e === 0 && !r.getFirstChild())
      return t.isInline() ? (n?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), r.append(Vn().append(t))) : (n?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), r.append(t)), s = !0, !0;
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
            n?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Vn().append(t));
        else
          l.insertBefore(t), n?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (jr(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const f = e - i, [d] = l.splitText(f);
          return d.insertAfter(t), n?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${f}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (On(l))
        i += 1;
      else if (U(l)) {
        if (o(l))
          return !0;
      } else if (mt(l)) {
        const u = l;
        if (o(u))
          return !0;
        const f = i;
        if (Ct(u) && mt(t) && // Target is at the ImpliedPara's implicit newline
        e === f && !s)
          return n?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = f + 1, s = !0, !0;
        i += 1;
      } else if (A(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return A(a) && !s && (e === i || a === r && e > i) ? a === r ? (t.isInline() ? (n?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), r.append(Vn().append(t))) : (n?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), r.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      wt(a) ? Ct(a) && me(t) && e === i ? (n?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !wt(t) ? (n?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (n?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (U(a) ? (n?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !wt(t) ? (n?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (n?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(r), s || n?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function C1(e, t, n, r, i) {
  let s;
  return Zr("chapter", t) ? s = _1(t.insert.chapter, n) : Zr("verse", t) ? s = M1(t.insert.verse, n) : Zr("ms", t) ? s = E1(t.insert.ms) : Zr("note", t) ? s = Cx(t, n, r) : Zr("unknown", t) ? s = Sx(t, n, r, i) : Zr("unmatched", t) && (s = P1(t.insert.unmatched, n)), s ? Tx(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Ig(e, t, n, r) {
  let i;
  mp(t) ? i = vx(t.para, n) : N1(t) && (i = S1(t.book)), i ??= Vn();
  const s = i, o = me(s), a = Ct(s);
  let c = 0, l = !1;
  function u(f) {
    if (l)
      return !0;
    if (jr(f)) {
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
    } else if (On(f))
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
        if (Ct(f) && s)
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
  return u(Ce()), l || r?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function S1(e) {
  const { style: t, code: n } = e;
  if (!t || t !== Ho || !n || !Pn.isValidBookCode(n))
    return;
  const r = pt(e, jE);
  return zb(n, r);
}
function vx(e, t) {
  const { style: n } = e;
  if (!n)
    return;
  const r = pt(e, zE), i = qs(n, r);
  if (!as(t))
    return i;
  if (t.markerMode === "editable")
    i.append($t(n), zi());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Ve(n) + D;
    i.append(t.hasGutterParaMarkers ? S0(s) : Br("marker", s));
  }
  return i;
}
function _1(e, t) {
  if (!e)
    return;
  const { number: n, sid: r, altnumber: i, pubnumber: s } = e;
  if (!n)
    return;
  const o = pt(e, VE);
  let a;
  if (t.markerMode === "editable")
    a = bb(n, r, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Sd(n, c, r, i, s, o);
  }
  return a;
}
function M1(e, t) {
  if (!e)
    return;
  const { style: n, number: r, sid: i, altnumber: s, pubnumber: o } = e;
  if (!r)
    return;
  const a = pt(e, WE);
  let c;
  if (t.markerMode === "editable") {
    if (!n)
      return;
    const l = jn(n, r);
    c = cb(r, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Wd(r, l, i, s, o, a);
  }
  return c;
}
function E1(e) {
  if (!e)
    return;
  const { style: t, sid: n, eid: r, attributeOrder: i } = e;
  if (!t)
    return;
  const s = pt(e, HE);
  return Wy(t, n, r, s, i);
}
function Cx(e, t, n) {
  const r = e.insert;
  if (!r.note)
    return;
  const { style: i, caller: s, category: o, contents: a } = r.note;
  if (!i || s == null)
    return;
  const c = pt(r.note, GE), l = typeof c?.closed == "string" ? c.closed : void 0, u = e.attributes?.segment;
  let f;
  u && typeof u == "string" && (f = u);
  const d = [];
  for (const h of a?.ops ?? [])
    if (typeof h.insert == "string")
      if (li(h.attributes)) {
        const g = to(h.attributes.char, t, Re(h.insert), void 0, _x(h.attributes.char, d), !1, t.markerMode === "editable");
        d.push(...g);
      } else
        d.push(Re(h.insert));
  return sx(i, s, d, t, n, f, l).setCategory(o).setUnknownAttributes(c);
}
function Sx(e, t, n, r) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = pt(i, JE), l = dd(s, o, c), u = a?.ops ?? [];
  u.length > 0 && A1(u, t, n, r).forEach((p) => l.append(p));
  const f = e.attributes?.segment;
  return typeof f == "string" && Gt(l, ai, () => f), l;
}
function A1(e, t, n, r) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (li(s.attributes)) {
        const o = Re(s.insert), a = to(s.attributes.char, t, o, void 0, _x(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(Re(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Zr("unknown", s)) {
        const o = Sx(s, t, n, r);
        o && i.push(o);
        continue;
      }
      if (Zr("note", s)) {
        const o = Cx(s, t, n);
        o && i.push(o);
        continue;
      }
      r?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function P1(e, t) {
  if (!e)
    return;
  const { marker: n } = e;
  if (!n)
    return;
  const r = Od(n);
  return t.markerMode === "editable" && r.setMode("normal"), r;
}
function _x(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function tf(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function to(e, t, n, r, i, s = !1, o = !1) {
  v(n) && n.getTextContentSize() === 0 && n.setTextContent(Pt);
  const a = () => {
    o && v(n) && n.getTextContent() !== Pt && n.setTextContent(D + n.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(tf), l = c[0], u = i?.[i.length - 1];
    if (U(u) && Fi(l, u)) {
      if (c.length > 1) {
        const d = to(c.slice(1), t, n, void 0, void 0, !0, o);
        eu(u, d);
      } else
        n && eu(u, [n]);
      return [];
    }
    a();
    const f = c.reduceRight((d, p, h) => {
      const g = Ur(p.style, pt(p, pc));
      return typeof p.cid == "string" && Gt(g, Bi, () => p.cid), r && h === c.length - 1 && Gt(g, ai, () => r), d && (U(d) && (nu(d.getMarker(), d, t, !0), tu(d, d, t, !0)), g.append(d)), g;
    }, n);
    return nu(l.style, f, t, s), tu(f, f, t, s), [f];
  } else {
    const c = tf(e), l = i?.[i.length - 1];
    if (U(l) && Fi(c, l))
      return n && eu(l, [n]), [];
    a();
    const u = Ur(c.style, pt(c, pc));
    return typeof c.cid == "string" && Gt(u, Bi, () => c.cid), r && Gt(u, ai, () => r), n && u.append(n), nu(c.style, u, t, s), tu(u, u, t, s), [u];
  }
}
function eu(e, t) {
  const n = e.getLastChild();
  w(n) && n.getMarkerSyntax() === "closing" || Rt(n) && n.getTextType() === "marker" && n.getTextContent() === ot(e.getMarker(), U(e.getParent())) ? t.forEach((i) => n.insertBefore(i)) : e.append(...t);
}
function tu(e, t, n, r = !1) {
  e.getUnknownAttributes()?.closed !== "false" && w1(e.getMarker(), t, n, !1, r);
}
function nu(e, t, n, r = !1) {
  let i;
  if (n?.markerMode === "editable" ? i = $t(e, "opening", r) : n?.markerMode === "visible" && (i = Br("marker", Ve(e, r))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function w1(e, t, n, r = !1, i = !1) {
  let s;
  n?.markerMode === "editable" ? r ? s = $t("", "selfClosing") : s = $t(e, "closing", i) : n?.markerMode === "visible" && (s = Br("marker", r ? ot("") : ot(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function N1(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function mp(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function li(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function O1(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Un(e, t) {
  if (e)
    for (const n of Object.keys(e)) {
      if (n === "segment" && typeof e[n] == "string") {
        const r = e[n];
        Gt(t, ai, () => r);
        continue;
      }
      if ($1(n)) {
        const r = !!e[n], i = n, s = t.hasFormat(i);
        (r && !s || !r && s) && t.toggleFormat(i);
      }
    }
}
const Mx = [
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
function $1(e) {
  return Mx.includes(e);
}
function Fs(e) {
  return Rt(e) && Ie(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function Ex(e) {
  const t = ga(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function yp(e) {
  if (e.isCollapsed())
    return !1;
  const t = e.isBackward() ? e.focus : e.anchor, n = t.getNode();
  if (!(An(n) && t.offset === 0 || Ie(n.getTopLevelElement())))
    return !1;
  const i = e.getNodes().find(Fs);
  if (!i)
    return !1;
  const s = i.getParent();
  if (!Ie(s))
    return !1;
  const o = Ex(s);
  return t.set(o.key, o.offset, o.type), !0;
}
function Va(e) {
  const t = N();
  if (!E(t))
    return !1;
  if (t.isCollapsed()) {
    const { anchor: n } = t;
    if (n.type === "text") {
      const i = n.getNode();
      if (!(e ? n.offset === 0 : v(i) && n.offset === i.getTextContentSize()))
        return !1;
    }
    const r = e ? Gb(t) : Ed(t);
    return Fs(r);
  }
  return yp(t) && t.isCollapsed();
}
function R1(e) {
  const t = N();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const n = Ze(t.anchor.getNode(), Ie);
  if (!n || !Fs(n.getFirstChild()))
    return !1;
  if (t.modify("extend", e, "lineboundary"), t.isCollapsed())
    return Va(e) || t.deleteCharacter(e), !0;
  if (t.getNodes().some(Fs)) {
    const r = Ex(n);
    t.focus.set(r.key, r.offset, r.type);
  }
  return t.isCollapsed() || t.removeText(), !0;
}
function Na() {
  const e = N();
  return E(e) && yp(e), !1;
}
function I1() {
  const e = N();
  if (!E(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const n = t.getNode();
  return !Ie(n) || !Fs(n.getFirstChild()) ? !1 : (or(n, 1), !0);
}
function L1(e) {
  const t = e.getChildren(), n = `\\${e.getMarker()}`, r = t.findIndex((s) => mn(s) && s.getTextContent().startsWith(n));
  if (r <= 0)
    return;
  let i = t[r];
  for (const s of t.slice(0, r))
    i.insertAfter(s), i = s;
}
function q1() {
  const [e] = ve();
  return H(() => e.registerCommand(Uc, (t) => (D1(t), !1), Di), [e]), H(() => tt(
    e.registerCommand(Bc, Va, Ge),
    e.registerCommand(Jf, Va, Ge),
    e.registerCommand(Qa, Va, Ge),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(Qa, R1, kr),
    // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
    // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
    // too, so this must match the top priority to have any guarantee of running before them —
    // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
    // not control. Always returns `false` (never claims the command), so running before or after
    // another CRITICAL handler that also returns `false` changes nothing either way; it only
    // matters relative to a handler that would itself remove the prefix.
    e.registerCommand(ca, Na, He),
    e.registerCommand(er, Na, He),
    e.registerCommand(ir, Na, He),
    // REMOVE_TEXT_COMMAND is how drag-move deletion and composition-driven deletes reach a
    // non-collapsed selection — neither goes through DELETE_CHARACTER_COMMAND — so it needs the
    // same narrowing the other three selection-replacing commands get above.
    e.registerCommand(vy, Na, He)
  ), [e]), H(() => tt(
    // Below `DecoratorBoundarySelectionPlugin` (CRITICAL), which can itself produce `(book, 0)`
    // when it snaps a caret that landed inside the prefix glyph to the glyph's leading edge; above
    // the listeners that report the caret's position (e.g. `OnSelectionChangePlugin`, LOW), so
    // they only ever see the corrected one. Never claims the command.
    e.registerCommand(gn, () => (I1(), !1), Ge),
    e.registerNodeTransform(Pn, L1)
  ), [e]), null;
}
function D1(e) {
  if (K1(e.target))
    return;
  const t = N();
  E(t) && U1(t);
}
function no(e) {
  let t = e.getFirstChild(), n = 0;
  for (; t !== null; )
    if (yn(t))
      n++, t = t.getNextSibling(), v(t) && t.getTextContent() === D && (n++, t = t.getNextSibling());
    else if (Ee(t))
      n++, t = t.getNextSibling();
    else
      break;
  return n === 0 ? !1 : (or(e, n), !0);
}
function K1(e) {
  if (!Cy(e))
    return !1;
  const t = Zi(e);
  if (!_0(t))
    return !1;
  const n = t.getParent();
  return n ? wt(n) ? no(n) : (or(n, t.getIndexWithinParent() + 1), !0) : !1;
}
function U1(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const n = X(t.key);
  if (!mt(n))
    return !1;
  const r = n.getFirstChild();
  return !mn(r) && !Ar(r) ? !1 : no(n);
}
function B1() {
  const [e] = ve();
  return H(() => {
    const t = (n) => n instanceof KeyboardEvent && !F1(n) || !ul() ? !1 : (n instanceof Event && n.preventDefault(), !0);
    return tt(
      e.registerCommand(_r, t, Ge),
      e.registerCommand(ca, t, Ge),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(er, t, He),
      e.registerCommand(ir, t, He),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Yf, (n) => {
        if (!(n instanceof Event) || !(n.target instanceof Node))
          return !1;
        const r = Zi(n.target);
        return !r || !ui(r) ? !1 : (n.preventDefault(), !0);
      }, Ge),
      e.registerCommand(Bc, t, Ge),
      e.registerCommand(Jf, t, Ge),
      e.registerCommand(Qa, t, Ge)
    );
  }, [e]), null;
}
function F1(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function ui(e) {
  return Ze(e, bp) ?? void 0;
}
function bp(e) {
  return et(e) || vb(e);
}
function ul() {
  const e = N();
  return E(e) ? ui(e.anchor.getNode()) !== void 0 || ui(e.focus.getNode()) !== void 0 : !1;
}
function z1(e, t, n) {
  if (e.height === 0)
    return !1;
  const r = e.height / 4;
  return t.some((i) => n === "down" ? i.top >= e.bottom - r : i.bottom <= e.top + r);
}
function j1(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(r, r.childNodes.length), z1(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function V1(e, t, n, r) {
  if (!sw(t) || j1(e, n))
    return !1;
  const i = n === "up" ? FE(t) : BE(t);
  return i && r.preventDefault(), i;
}
function W1({ viewOptions: e }) {
  const [t] = ve();
  return H1(t, e), null;
}
function H1(e, t) {
  H(() => {
    if (!e.hasNodes([Dn, Jt, Je]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const n = (r) => {
      const i = N();
      if (!E(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (r.key === "ArrowLeft" || r.key === "ArrowRight") && r.shiftKey && !r.altKey && !r.ctrlKey && !r.metaKey) {
        const u = Lg(o), f = ew(i, qg(u, r.key) ? "next" : "previous");
        return f && r.preventDefault(), f;
      }
      if (!i.isCollapsed())
        return !1;
      if (r.key === "ArrowUp" || r.key === "ArrowDown") {
        if (r.shiftKey || r.altKey || r.ctrlKey || r.metaKey)
          return !1;
        const u = r.key === "ArrowUp" ? "up" : "down";
        return V1(e, i, u, r);
      }
      if (r.key !== "ArrowLeft" && r.key !== "ArrowRight" || !o)
        return !1;
      const a = Lg(o), c = r.shiftKey || r.altKey || r.ctrlKey || r.metaKey;
      let l = !1;
      return qg(a, r.key) ? l = !c && Ug(i, "next") || !c && J1(i) || rw(i) || !c && s && Kg(i, "next") : G1(a, r.key) && (l = !c && Ug(i, "previous") || !c && Y1(i) || iw(i, t) || !c && s && Kg(i, "previous")), l && r.preventDefault(), l;
    };
    return e.registerCommand(_r, n, Ge);
  }, [e, t]);
}
function Lg(e) {
  return e.dir || "ltr";
}
function qg(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function G1(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function nf(e) {
  if (!U(e) || e.getMarker() !== "fp")
    return;
  const t = wn(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function J1(e) {
  const t = nf(Ed(e));
  if (!t)
    return !1;
  const n = e.anchor;
  return n.type === "text" && n.offset !== n.getNode().getTextContentSize() ? !1 : (or(t, 0), !0);
}
function Y1(e) {
  const t = e.anchor, n = t.getNode();
  if (t.type === "text") {
    const r = nf(n.getParent());
    return !r || !n.is(r.getFirstChild()) ? !1 : t.offset === 1 ? (n.select(0, 0), !0) : t.offset !== 0 ? !1 : Dg(r);
  }
  if (t.offset === 0) {
    const r = nf(n);
    return r ? Dg(r) : !1;
  }
  return !1;
}
function Dg(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (v(t))
    return t.select(), !0;
  if (A(t)) {
    const i = t.getLastDescendant();
    return v(i) ? i.select() : t.selectEnd(), !0;
  }
  const n = e.getParent();
  if (!n)
    return !1;
  const r = e.getIndexWithinParent();
  return n.select(r, r), !0;
}
const yc = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function X1(e) {
  if (yc)
    for (const { segment: n } of yc.segment(e))
      return n.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function Q1(e) {
  if (yc) {
    let r = 0;
    for (const { index: i } of yc.segment(e))
      r = i;
    return r;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), n = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (n ? 2 : 1));
}
function Ax(e) {
  for (let t = e; t; t = t.getParent())
    if (A(t) && !t.isInline())
      return t;
}
function Px(e) {
  return !!e && w(e) && ui(e) !== void 0;
}
function zs(e) {
  return v(e) && !e.isToken() && !Px(e) && e.getTextContentSize() > 0;
}
function wx(e) {
  return Qi(e) ? !0 : q(e) ? e.getIsCollapsed() === !0 : v(e) ? (e.isToken() || Px(e)) && e.getTextContentSize() > 0 : bn(e) ? !Ke(e) : !1;
}
function js(e, t, n) {
  for (let r = e; r && !r.is(n); ) {
    const i = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (i)
      return i;
    r = r.getParent();
  }
}
function fl(e, t, n) {
  for (let r = e; r; ) {
    if (wx(r))
      return r;
    if (A(r)) {
      r = (t === "next" ? r.getFirstChild() : r.getLastChild()) ?? js(r, t, n);
      continue;
    }
    if (zs(r))
      return r;
    r = js(r, t, n);
  }
}
function kp(e, t, n, r, i) {
  return n === "element" && A(e) ? e.getChildAtIndex(r === "next" ? t : t - 1) ?? js(e, r, i) : n === "text" && wx(e) && (r === "next" ? t < e.getTextContentSize() : t > 0) ? e : js(e, r, i);
}
function ru(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const n = kp(e.node, e.offset, e.kind, "previous", t), r = fl(n, "previous", t);
  if (!r)
    return e;
  if (zs(r))
    return { kind: "text", node: r, offset: r.getTextContentSize() };
  const i = r.getParent();
  return i ? { kind: "element", node: i, offset: r.getIndexWithinParent() + 1 } : e;
}
function Z1(e, t) {
  const n = e.getNode(), r = Ax(n);
  if (!r)
    return;
  if (e.type === "text" && zs(n)) {
    if (t === "next" && e.offset < n.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return ru({ kind: "text", node: n, offset: 0 }, r);
  }
  const i = kp(n, e.offset, e.type, t, r), s = fl(i, t, r);
  if (!s)
    return;
  if (zs(s)) {
    const c = s.getTextContent(), l = t === "next" ? X1(c) : Q1(c);
    return ru({ kind: "text", node: s, offset: l }, r);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return ru({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, r);
}
function Nx(e, t, n) {
  const r = n === "collapse" ? e.anchor : e.focus, i = Z1(r, t);
  return !i || i.node.is(r.getNode()) && i.offset === r.offset && i.kind === r.type ? !1 : n === "collapse" ? (i.kind === "element" && A(i.node) ? pp(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Kg(e, t) {
  return Nx(e, t, "collapse");
}
function ew(e, t) {
  return Nx(e, t, "extend");
}
function tw(e, t, n) {
  const r = e.getNode();
  if (e.type === "text" && zs(r) && (t === "next" ? e.offset < r.getTextContentSize() : e.offset > 0))
    return !1;
  const i = kp(r, e.offset, e.type, t, n);
  return fl(i, t, n) === void 0;
}
function nw(e, t) {
  const n = Ce();
  for (let r = e; r; ) {
    const i = js(r, t, n), s = i && fl(i, t, n);
    if (!s)
      return;
    if (r = ui(s), !r)
      return s;
  }
}
function Ug(e, t) {
  const n = e.anchor, r = n.getNode();
  if (ui(r))
    return !1;
  const i = Ax(r);
  if (!i || !tw(n, t, i))
    return !1;
  const s = js(i, t, Ce()), o = s && ui(s);
  if (!o)
    return !1;
  const a = nw(o, t);
  if (!a)
    return !0;
  if (zs(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Bg(e) {
  const t = e.getParent();
  if (!t)
    return;
  const n = e.getIndexWithinParent() + 1;
  pp(t, n);
}
function rw(e) {
  const t = e.anchor.getNode(), n = Ed(e);
  if (q(n) && !w(n.getFirstChild())) {
    if (mt(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (n.getIsCollapsed()) {
      if (n.is(n.getParent()?.getLastChild())) {
        const i = n.getParent()?.getNextSibling();
        return i && !(wt(i) && no(i)) && i.selectStart(), !0;
      }
    } else return Rt(n.getFirstChild()) ? n.select(2, 2) : n.select(1, 1), !0;
  }
  if (mt(t) && q(n) && n.getIsCollapsed()) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : Bg(n), !0;
  }
  const r = n?.getParent();
  if (Rt(n) && q(r) && n.is(r?.getLastChild())) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : r.getIsCollapsed() ? Bg(r) : r.selectEnd(), !0;
  }
  return !1;
}
function iw(e, t) {
  const n = Gb(e);
  if (Gr(n) && !n.getPreviousSibling())
    return !0;
  const { anchor: r } = e;
  if ((r.type === "element" || r.offset === 0) && Fs(n))
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const s = e.anchor.getNode(), o = s.getParent();
  if (Ie(o) && !n)
    return !0;
  if (q(n) && n.getIsCollapsed()) {
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
    const l = Ze(c, (u) => q(u));
    if (q(l) && l.getIsCollapsed()) {
      const u = l.getParent();
      if (!u)
        return !1;
      const f = l.getIndexWithinParent();
      return u.select(f, f), !0;
    }
  }
  const a = wn(s);
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
function sw(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return Ee(t) && bn(t);
}
function ow() {
  const [e] = ve();
  return aw(e), null;
}
function aw(e) {
  H(() => {
    if (!e.hasNodes([ze]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return tt(
      e.registerNodeTransform(ze, uw),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(ze, g0),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(ze, Pb),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(ze, (t) => Jo(Fr("char"), t)),
      e.registerNodeTransform(st, fw)
    );
  }, [e]);
}
function Wa(e) {
  return e.getChildren().some(w);
}
function cw(e, t) {
  const n = t.getFirstChild();
  if (!w(n) || n.getMarkerSyntax() !== "opening")
    return !1;
  const r = n.getNextSibling();
  if (Wr(r)) {
    const i = r.getTextContent();
    i.startsWith(D) && (i === D ? r.remove() : r.setTextContent(i.slice(D.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function lw(e, t) {
  const n = t.getLastChild(), r = e.getChildren();
  w(n) && n.getMarkerSyntax() === "closing" ? r.forEach((i) => n.insertBefore(i)) : t.append(...r), e.remove();
}
function uw(e) {
  if (!U(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (Wa(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const n = de(e, Bi), r = e.getUnknownAttributes(), i = e.getNextSibling();
  if (U(i) && Fi({ style: t, cid: n }, i) && Xn(r, i.getUnknownAttributes()))
    if (Wa(i)) {
      if (cw(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  U(s) && Fi({ style: t, cid: n }, s) && Xn(r, s.getUnknownAttributes()) && (Wa(s) ? lw(e, s) : (s.append(...e.getChildren()), e.remove()));
}
const Ox = /* @__PURE__ */ new WeakSet();
function fw(e) {
  const t = e.getParent();
  if (!U(t) || Wa(t) || Ox.has(e))
    return;
  const n = e.getTextContent();
  if (n.length < 2 || !n.includes(Pt))
    return;
  const r = pw(t.getKey());
  if (r === void 0) {
    t.getChildrenSize() === 1 && n.startsWith(Pt) && Fg(e, 0);
    return;
  }
  if (r !== e.getKey())
    return;
  const i = dw(e, n);
  i !== void 0 && Fg(e, i);
}
function dw(e, t) {
  const n = N();
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
function Fg(e, t) {
  const n = N(), r = E(n) ? [n.anchor, n.focus].filter((a) => a.type === "text" && a.key === e.getKey()) : [], i = r.map((a) => a.offset), s = e.getTextContent(), o = e.setTextContent(s.slice(0, t) + s.slice(t + 1));
  Ox.add(o), r.forEach((a, c) => {
    const l = i[c];
    a.set(o.getKey(), l > t ? l - 1 : l, "text");
  });
}
function pw(e) {
  return Ft().getEditorState().read(() => {
    const t = X(e);
    if (!U(t))
      return;
    const n = t.getChildren().filter((i) => !bn(i)), [r] = n;
    return n.length === 1 && v(r) && r.getTextContent() === Pt ? r.getKey() : null;
  });
}
function $x(e) {
  return e.replaceAll("	", " ");
}
function Rx() {
  const e = N();
  return !!e && !e.isCollapsed();
}
function Ix(e) {
  const t = () => !Rx();
  return tt(e.registerCommand(Is, t, Qt), e.registerCommand(ir, t, Qt));
}
const xp = (e) => {
  e.dispatchCommand(Is, null);
}, Tp = (e) => {
  e.dispatchCommand(ir, null);
}, vp = (e) => {
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
      r.setData(o, $x(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(er, s);
  });
}, Cp = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const n = new DataTransfer(), r = await navigator.clipboard.readText();
    n.setData("text/plain", $x(r));
    const i = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(er, i);
  });
};
function hw() {
  const [e] = ve();
  return H(() => {
    const t = (n) => {
      const { key: r, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = n;
      !(Ls ? s : o) || a || (!i && r.toLowerCase() === "c" ? (n.preventDefault(), xp(e)) : !i && r.toLowerCase() === "x" ? (n.preventDefault(), Tp(e)) : r.toLowerCase() === "v" && (n.preventDefault(), i ? Cp(e) : vp(e)));
    };
    return tt(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      Ix(e),
      e.registerRootListener((n, r) => {
        r !== null && r.removeEventListener("keydown", t), n !== null && n.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function gw({ logger: e }) {
  const [t] = ve();
  return H(() => tt(
    // When the backslash or forward slash key is typed.
    t.registerCommand(_r, (n) => n.key !== "\\" && n.key !== "/" ? !1 : (n.preventDefault(), !0), kr),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(er, (n) => {
      const r = n.clipboardData?.getData("text/plain");
      return !r || !r.includes("\\") && !r.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), n.preventDefault(), !0);
    }, kr),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Yf, (n) => {
      const r = n.dataTransfer?.getData("text/plain");
      return !r || !r.includes("\\") && !r.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), n.preventDefault(), !0);
    }, kr)
  ), [t, e]), null;
}
const bc = "editor-context-menu";
function rf(e) {
  return `${bc}-item-${e}`;
}
const mw = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function yw({ index: e, isSelected: t, onClick: n, onMouseMove: r, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), P("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: rf(e), onMouseMove: r, onClick: i.isDisabled ? void 0 : n, children: P("span", { className: "text", children: i.title }) });
}
function bw({ options: e, selectedItemIndex: t, onOptionClick: n, onOptionMouseMove: r }) {
  return P("div", { className: "typeahead-popover", children: P("ul", { id: bc, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => P(yw, { index: s, isSelected: t === s, onClick: () => n(i, s), onMouseMove: () => r(s), option: i }, `${s}-${i.title}`)) }) });
}
let kw = 0;
class ho {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, n) {
    this.key = `context-menu-option-${kw++}`, this.title = t, this.onSelect = n.onSelect.bind(this), this.isDisabled = n.isDisabled || !1;
  }
}
function xw({ options: e } = {}) {
  const [t] = ve(), [n, r] = Ae(() => !t.isEditable()), [i, s] = Ae({
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
      new ho("Cut", {
        onSelect: () => {
          Tp(t);
        },
        isDisabled: n
      }),
      new ho("Copy", {
        onSelect: () => {
          xp(t);
        }
      }),
      new ho("Paste", {
        onSelect: () => {
          vp(t);
        },
        isDisabled: n
      }),
      new ho("Paste as Plain Text", {
        onSelect: () => {
          Cp(t);
        },
        isDisabled: n
      })
    ], p = (e ?? []).map((h) => new ho(h.title, { onSelect: h.onSelect, isDisabled: h.isDisabled }));
    return [...d, ...p];
  }, [t, n, e]), l = te(null), u = te(null), f = Me(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  return H(() => Ix(t), [t]), H(() => {
    const d = (p) => {
      const h = p.target;
      t.getRootElement() === h || Bb(h) || (p.preventDefault(), u.current = document.activeElement, s({ isOpen: !0, x: p.clientX, y: p.clientY }), a(void 0));
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
          if (mw.has(p.key))
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
      return d.setAttribute("aria-controls", bc), () => {
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
    d.setAttribute("aria-activedescendant", rf(o));
    const p = document.getElementById(bc), h = document.getElementById(rf(o));
    if (!p || !h)
      return;
    const g = p.getBoundingClientRect(), m = h.getBoundingClientRect(), y = m.top - g.top + p.scrollTop, k = m.bottom - g.top + p.scrollTop;
    y < p.scrollTop ? p.scrollTop = y : k > p.scrollTop + p.clientHeight && (p.scrollTop = k - p.clientHeight);
  }, [t, i.isOpen, o]), H(() => t.registerEditableListener((d) => {
    r(!d);
  }), [t]), Gs(() => {
    const d = l.current;
    if (!d)
      return;
    const { width: p, height: h } = d.getBoundingClientRect(), g = Math.max(0, Math.min(i.x, globalThis.innerWidth - p)), m = Math.max(0, Math.min(i.y, globalThis.innerHeight - h));
    d.style.left = `${g}px`, d.style.top = `${m}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? DS.createPortal(P("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: P(bw, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), f());
  }, onOptionMouseMove: (d) => {
    a((p) => p === d ? p : d);
  } }) }), document.body) : null;
}
function Tw(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function vw(e) {
  if (!kS(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function Cw(e) {
  return Lt(e);
}
function iu(e, t, n) {
  const r = Zi(t.node);
  if (!bn(r) || Cw(r))
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
function Sw(e, t) {
  if (N())
    return !1;
  const n = e.getRootElement(), r = bS(n?.ownerDocument.defaultView ?? null);
  if (!r || r.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = r;
  if (!i || !o || !Sy(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, f;
  if (r.isCollapsed)
    u = iu(e, c, vw(c)), f = u;
  else {
    const m = Tw(r.getRangeAt(0), c);
    u = iu(e, c, m ? "before" : "after"), f = iu(e, l, m ? "after" : "before");
  }
  if (!u && !f)
    return !1;
  const d = u ?? c, p = f ?? l, h = {
    anchorNode: d.node,
    anchorOffset: d.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = _y(h, e);
  return g ? (Fn(g), g.dirty = !t, t) : !1;
}
function _w() {
  const [e] = ve(), t = te(!1), n = te(!1);
  return H(() => {
    const r = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, n.current && (n.current = !1, e.update(() => {
        const s = N();
        E(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", r, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, n.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", r, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), H(() => e.registerCommand(gn, () => (Sw(e, t.current) && (n.current = !0), !1), He), [e]), null;
}
function Mw() {
  const [e] = ve();
  return H(() => e.registerCommand(_r, (t) => {
    const { key: n, shiftKey: r, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Ls ? i : s) || o)
      return !1;
    const a = n.toLowerCase();
    return !(a === "z" && !r) && !(a === "y" || a === "z" && r) ? !1 : (t.preventDefault(), !0);
  }, He), [e]), null;
}
function Ew({ isEditable: e }) {
  const [t] = ve();
  return Gs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function zg(e) {
  return !!e && ha(X(e));
}
function Sp(e) {
  const [t] = ve(), n = te(void 0), r = Me((i) => {
    let s = !1;
    const o = N(), a = E(o) && o.isCollapsed() ? o.anchor.key : void 0, c = n.current, l = zg(c);
    c && !l && (n.current = void 0);
    let u;
    if (i) {
      const f = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, p = ga(f, d), h = ha(p) ? p : void 0;
      if (h)
        n.current = h.getKey(), u = h.getKey();
      else {
        const g = lM();
        i.insertAfter(g), n.current = g.getKey(), u = g.getKey(), s = !0;
      }
      or(f, d);
    }
    if (c && l && c !== a && c !== u) {
      const f = X(c);
      v(f) && (f.remove(), s = !0), n.current === c && (n.current = void 0);
    }
    return s;
  }, []);
  return H(() => {
    const i = () => {
      const a = e(), c = N(), l = E(c) && c.isCollapsed() ? c.anchor.key : void 0, u = n.current;
      (a || u && u !== l) && r(a) && Wt($i);
    }, s = (a) => {
      if (a.getKey() !== n.current)
        return;
      const c = a.getTextContent();
      if (rs(c) || !c.includes(Ds))
        return;
      const l = N(), u = E(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (uM(a), n.current = void 0, u !== void 0) {
        const f = c.slice(0, u).split(Ds).length - 1, d = Math.max(0, u - f);
        a.select(d, d);
      }
    }, o = tt(t.registerCommand(gn, () => (i(), !1), Di), t.registerCommand(Xf, () => {
      const a = n.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = zg(a);
      }), c && t.update(() => {
        const l = X(a);
        v(l) && (l.remove(), Wt($i));
      }), n.current = void 0, !1;
    }, Di), t.registerNodeTransform(st, s));
    return () => {
      o(), n.current = void 0;
    };
  }, [t, e, r]), r;
}
function Aw() {
  const e = N();
  if (!E(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, n = t.getNode(), r = q(n) ? n : n.getParent();
  if (!q(r))
    return;
  const i = xP(r);
  if (i === void 0)
    return;
  let s = r.getChildAtIndex(i - 1);
  for (; s && ha(s); )
    s = s.getPreviousSibling();
  if (!s || v(s) && s.isSimpleText())
    return;
  const o = s.getIndexWithinParent() + 1;
  if (n.is(r))
    return t.offset >= o && t.offset <= i ? s : void 0;
  if (n.is(s))
    return v(s) && t.offset === s.getTextContentSize() ? s : void 0;
  const a = n.getIndexWithinParent();
  return a >= o && a <= i && t.offset === 0 ? s : void 0;
}
function Pw() {
  return Sp(Aw), null;
}
function Lx(e) {
  const t = e.getRootElement();
  return !!t && t.contains(t.ownerDocument.activeElement);
}
function Co(e, ...t) {
  const n = e.registerUpdateListener(({ tags: r }) => {
    n();
    for (const i of t)
      r.delete(i);
  });
  return n;
}
function su(e) {
  const t = e.getRootElement(), n = t?.ownerDocument.defaultView?.getSelection();
  if (!t || !n?.anchorNode || !t.contains(n.anchorNode))
    return;
  e.getEditorState().read(() => {
    const i = N();
    if (!E(i))
      return !1;
    const s = _y(n, e);
    return !!s && i.is(s);
  }, { editor: e }) || n.removeAllRanges();
}
function vs(e, t) {
  let n;
  try {
    n = Ft();
  } catch {
  }
  return n === e ? t() : e.read(t);
}
function ww() {
  const e = N();
  if (!E(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const n = t.getNode();
  if (!A(n))
    return;
  const r = n.getChildren(), i = r[t.offset - 1];
  if (!Ee(i) || ga(n, t.offset))
    return;
  const s = r[t.offset];
  if (s === void 0 || Ee(s))
    return i;
}
function Nw() {
  return Sp(ww), null;
}
function Ow({ scripture: e, scriptureRef: t, nodeOptions: n, editorAdaptor: r, viewOptions: i, logger: s }) {
  const [o] = ve();
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
        const u = Lx(o);
        o.update(() => {
          u || Wt(Or), o.setEditorState(l), o.dispatchCommand(xS, void 0);
        }, { tag: la });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, r, s, e, t, i]), null;
}
const ou = "caller_highlight", $w = hi(function(t, n) {
  const [r] = ve(), i = te(void 0), s = te(void 0), o = Me(() => {
    const a = i.current, c = a === void 0 ? void 0 : r.getEditorState().read(() => {
      const u = br(a);
      return u ? (u.getChildren().find(Lt) ?? Mt(u))?.getKey() : void 0;
    }), l = c ? r.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(ou), l?.classList.add(ou), s.current = l;
  }, [r]);
  return Lc(n, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : vs(r, () => br(a)?.getKey()), o();
    }
  }), [r, o]), H(() => tt(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    r.registerMutationListener(Je, (a, { prevEditorState: c, updateTags: l }) => {
      const u = i.current;
      if (u === void 0 || a.get(u) !== "destroyed")
        return;
      if (![...a.values()].includes("created")) {
        i.current = void 0;
        return;
      }
      const f = l.has(la) ? void 0 : c.read(() => Zd(u)), d = f === void 0 ? void 0 : r.getEditorState().read(() => br(f)?.getKey());
      i.current = d !== void 0 && a.get(d) === "created" ? d : void 0;
    }, { skipInitialization: !0 }),
    r.registerUpdateListener(() => o())
  ), [r, o]), H(() => () => s.current?.classList.remove(ou), []), null;
});
function Rw({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: n, logger: r }) {
  const [i] = ve();
  return Iw(t, r), Lw(i, e, n, r), null;
}
function Iw(e, t) {
  const n = te(void 0), r = te(void 0), i = e.noteCallers, s = e.crossRefCallers;
  H(() => {
    let o = i;
    (!o || o.length <= 0) && (o = EA), n.current !== o && (n.current = o, jg("note-callers", o, t));
  }, [t, i]), H(() => {
    let o = s;
    (!o || o.length <= 0) && (o = AA), r.current !== o && (r.current = o, jg("cross-ref-callers", o, t));
  }, [t, s]);
}
function Lw(e, t, n, r) {
  H(() => {
    if (!e.hasNodes([ze, Je, Mn]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => jw(s));
    return tt(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Je, (s) => qw(s, n)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(ze, Kw),
      e.registerNodeTransform(st, Uw),
      // Ensure a separator after the caller.
      e.registerNodeTransform(Mn, Bw),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Mn, (s, { prevEditorState: o }) => Fw(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(gn, () => zw(e, t, n, r), Qt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, r, n]);
}
function qw(e, t) {
  const n = e.getChildren();
  if (!n.some((i) => Lt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), n.length > 0) {
    const i = n[0];
    v(i) && !w(i) && i.getTextContent() !== _t(e.getCaller()) && e.insertBefore(i);
  }
}
function qx(e) {
  const t = e.getNextSibling();
  kn(t) || (v(t) && !w(t) && t.getTextContent() === D ? t.replace(zi()) : e.insertAfter(zi()));
}
function Dw(e) {
  const t = e.getTextContent(), n = t.indexOf(D), r = n < 0 ? t : t.slice(0, n) + t.slice(n + 1);
  if (e.setTextContent(D), !r) {
    e.selectEnd();
    return;
  }
  const i = Re(r);
  e.insertAfter(i), i.selectEnd();
}
function Kw(e) {
  const t = e.getParentOrThrow(), n = t.getChildren(), r = n.find((s) => Lt(s));
  if (!U(e) || !q(t) || !r)
    return;
  const i = Ad(n);
  r.getPreviewText() !== i && r.setPreviewText(i), qx(e);
}
function Uw(e) {
  const t = wn(e), n = t?.getChildren(), r = n?.find((o) => Lt(o));
  if (!v(e) || !q(t) || !r || !n)
    return;
  const i = e.getParent();
  if (q(i) && kn(e) && e.getTextContent() !== D && Dw(e), U(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Pt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Ad(n);
  r.getPreviewText() !== s && r.setPreviewText(s);
}
function Bw(e) {
  Lt(e) && qx(e);
}
function Fw(e, t) {
  for (const [n, r] of e) {
    if (r !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = X(n), a = o?.getParent();
      return Lt(o) && q(a) && a.getCaller() === Bo;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function zw(e, t, n, r) {
  if (n?.noteMode !== "expandInline")
    return !1;
  const i = N();
  if (!E(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = Ze(o, (c) => q(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = X(t.current);
      c && !c.getIsCollapsed() && (r?.debug("Cursor moved away from NoteNode, collapsing it"), go(e, t.current, r)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (q(a)) {
      r?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, go(e, c, r);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (q(a)) {
      r?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, go(e, c, r);
    } else if (!a) {
      const c = Ze(o, (l) => q(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      mt(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        r?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, go(e, l, r);
      }
    }
  }
  if (wt(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (Ar(c) && q(a)) {
      r?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, go(e, l, r);
    }
  }
  return !1;
}
function go(e, t, n) {
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
function jw(e) {
  const t = N();
  if (!E(t))
    return;
  const n = t.anchor, r = t.focus, i = n.getNode(), s = r.getNode();
  if (q(i) && v(s)) {
    e.preventDefault();
    const o = Kr();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), r.offset, "text"), Fn(o);
  }
}
function jg(e, t, n) {
  for (const r of document.styleSheets)
    try {
      const i = r.cssRules || r.rules;
      for (const s of i)
        if (Vw(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  n?.warn(`Editor: counter style "${e}" not found.`);
}
function Vw(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function tr(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const r of e.getChildren()) {
    if (!w(r) || r.getMarkerSyntax() !== "opening")
      break;
    t.push(r);
  }
  const n = Mt(e);
  return n && t.push(n), t.length > 0 && t.every((r) => v(r) && r.getMode() === "token") ? t : [];
}
function Ww(e) {
  const t = e.getParent();
  if (q(t))
    return tr(t).some((n) => n.is(e)) ? t : void 0;
}
function ba(e) {
  const t = tr(e), n = t[t.length - 1];
  return n ? n.getIndexWithinParent() + 1 : 0;
}
function So(e) {
  if (e.getIsCollapsed() !== !1)
    return;
  const t = e.getLastChild();
  return w(t) && t.getMarkerSyntax() === "closing" && t.getMode() === "token" ? t : void 0;
}
function Dx(e) {
  const t = e.getNode();
  if (e.type === "text") {
    const r = t.getParent();
    if (q(r) && So(r)?.is(t))
      return e.offset > 0 ? r : void 0;
    if (e.offset !== 0)
      return;
    const i = t.getPreviousSibling();
    return q(i) && So(i) ? i : void 0;
  }
  if (q(t)) {
    const r = So(t);
    return r && e.offset > r.getIndexWithinParent() ? t : void 0;
  }
  if (!A(t) || e.offset === 0)
    return;
  const n = t.getChildAtIndex(e.offset - 1);
  return q(n) && So(n) ? n : void 0;
}
function Kx(e) {
  const t = e.getNode(), n = (i) => q(i) && tr(i).length > 0;
  if (e.type === "text") {
    if (e.offset !== t.getTextContentSize())
      return;
    const i = t.getNextSibling();
    return n(i) ? i : void 0;
  }
  if (n(t))
    return e.offset < ba(t) ? t : void 0;
  if (!A(t))
    return;
  const r = t.getChildAtIndex(e.offset);
  return n(r) ? r : void 0;
}
function Ux(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), n = Ww(t);
  if (n)
    return Hw(n, t, e.offset) ? void 0 : n;
}
function Hw(e, t, n) {
  const r = tr(e), i = r[r.length - 1];
  return i !== void 0 && i.is(t) && n === i.getTextContentSize();
}
function Gw(e) {
  const t = tr(e), n = t[t.length - 1];
  v(n) ? n.select(n.getTextContentSize(), n.getTextContentSize()) : or(e, ba(e));
}
function Jw() {
  const e = N();
  if (!E(e))
    return !1;
  if (!e.isCollapsed())
    return Fx(e);
  const t = Ep(e.anchor) ?? Dx(e.anchor);
  if (t) {
    const r = Yw(t);
    return e.anchor.is(r) ? !1 : (Bx(e, r), !0);
  }
  const n = Kx(e.anchor) ?? Ux(e.anchor);
  return n ? (Gw(n), !0) : !1;
}
function _p(e) {
  const t = tr(e), n = t[t.length - 1];
  return v(n) ? Zt(n.getKey(), n.getTextContentSize(), "text") : Zt(e.getKey(), ba(e), "element");
}
function kc(e) {
  const t = e.getLastChild();
  return w(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker() ? e.getChildrenSize() - 1 : e.getChildrenSize();
}
function sf(e) {
  const t = kc(e);
  if (t === e.getChildrenSize())
    return;
  const n = e.getChildAtIndex(t);
  return v(n) ? n : void 0;
}
function Mp(e) {
  const t = kc(e);
  if (t > ba(e)) {
    const n = e.getChildAtIndex(t - 1), r = A(n) ? n.getLastDescendant() : n;
    if (v(r))
      return Zt(r.getKey(), r.getTextContentSize(), "text");
  }
  return _p(e);
}
function Yw(e) {
  const t = So(e);
  return t ? Zt(t.getKey(), 0, "text") : Mp(e);
}
function Ep(e) {
  const t = e.getNode(), n = t.getParent();
  if (q(n) && tr(n).length > 0 && sf(n)?.is(t))
    return n;
  if (e.type !== "element")
    return;
  if (q(t) && tr(t).length > 0 && sf(t))
    return e.offset > kc(t) || e.offset === kc(t) && e.offset > ba(t) ? t : void 0;
  if (!A(t))
    return;
  const r = t.getChildAtIndex(e.offset - 1);
  return q(r) && tr(r).length > 0 && !r.getNextSibling() ? r : void 0;
}
function Bx(e, t) {
  e.anchor.set(t.key, t.offset, t.type), e.focus.set(t.key, t.offset, t.type);
}
function of(e) {
  const t = wn(e);
  return t && tr(t).length > 0 ? t : void 0;
}
function Xw(e) {
  for (const t of [e.anchor, e.focus]) {
    const n = of(t.getNode()) ?? Kx(t) ?? Dx(t) ?? Ep(t);
    if (n)
      return n;
  }
  for (const t of e.getNodes()) {
    const n = of(t);
    if (n)
      return n;
  }
}
function Fx(e) {
  const t = Xw(e);
  if (!t)
    return !1;
  const n = _p(t), r = Mp(t);
  let i = !1;
  for (const s of [e.anchor, e.focus]) {
    const o = s.isBefore(n) ? n : r.isBefore(s) ? r : void 0;
    !o || s.is(o) || (s.set(o.key, o.offset, o.type), i = !0);
  }
  return i;
}
function Vg(e, t) {
  const n = Kr();
  return n.anchor.set(e.key, e.offset, e.type), n.focus.set(t.key, t.offset, t.type), n.getTextContent();
}
function Wg(e, t) {
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
function Hg(e, t, n) {
  const r = Wg(e, t), i = Wg(e, n);
  return r !== void 0 && i !== void 0 && Math.abs(r - i) >= 1;
}
function Qw(e) {
  if (e.type === "element") {
    const n = e.getNode();
    return A(n) ? n.getChildAtIndex(e.offset) ?? void 0 : void 0;
  }
  const t = e.getNode();
  return t.getTextContentSize() === e.offset ? t.getNextSibling() ?? void 0 : void 0;
}
function Zw(e, t, n, r) {
  const i = t.anchor, s = Ep(i);
  if (s)
    return Bx(t, Mp(s)), !0;
  const o = of(i.getNode());
  if (!o) {
    if (n)
      return !1;
    const f = Qw(t.focus);
    return q(f) && tr(f).length > 0;
  }
  if (Ux(i))
    return !0;
  const a = _p(o);
  if (n) {
    if (!(a.isBefore(i) && !a.is(i)))
      return !0;
    const f = Vg(a, i);
    return f === "" ? !0 : r === "character" || r === "word" && /[\p{L}\p{N}]/u.test(f) || r === "line" && Hg(e, a, i) ? !1 : (t.anchor.set(a.key, a.offset, a.type), t.removeText(), !0);
  }
  if (i.isBefore(a))
    return !0;
  const c = sf(o);
  if (!c)
    return !1;
  const l = Zt(c.getKey(), 0, "text"), u = Vg(i, l);
  return u === "" ? !0 : r === "character" || r === "word" && /[\p{L}\p{N}]/u.test(u) || r === "line" && Hg(e, i, l) ? !1 : (t.focus.set(l.key, l.offset, l.type), t.removeText(), !0);
}
function eN() {
  const [e] = ve();
  return H(() => {
    const t = (s) => () => {
      const o = N();
      return !E(o) || o.isCollapsed() || !Fx(o) ? !1 : s && o.isCollapsed();
    }, n = t(!1), r = t(!0), i = (s) => (o) => {
      const a = N();
      return E(a) ? a.isCollapsed() ? Zw(e, a, o, s) : r() : !1;
    };
    return tt(e.registerCommand(ca, n, He), e.registerCommand(er, n, He), e.registerCommand(Ko, n, He), e.registerCommand(TS, n, He), e.registerCommand(Bc, i("character"), He), e.registerCommand(Jf, i("word"), He), e.registerCommand(Qa, i("line"), He), e.registerCommand(vy, r, He), e.registerCommand(ir, r, He));
  }, [e]), H(() => {
    const t = () => {
      Jw() && e.dispatchCommand(rd, void 0);
    };
    return tt(
      e.registerCommand(gn, () => (t(), !1), Di),
      // Select-all is the rich-text plugin's `$selectAll`, confined in the same update rather than
      // after the selection change it announces, which an edit may come before.
      e.registerCommand(My, () => (vS(), t(), !0), Ge)
    );
  }, [e]), null;
}
function tN({ onChange: e, viewOptions: t }) {
  const [n] = ve();
  return H(() => n.registerCommand(gn, () => {
    const r = ol(t);
    return e?.(r), !1;
  }, Qt), [n, e, t]), null;
}
function nN() {
  const [e] = ve();
  return rN(e), null;
}
function rN(e) {
  H(() => {
    if (!e.hasNodes([It]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(It, (t) => iN(t, e));
  }, [e]);
}
function iN(e, t) {
  Vu(t, e.getKey()) && $k(e.getFirstChild()), !(!me(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = X(e.getKey());
    return me(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function zx({ onStateChange: e }) {
  const [t] = ve(), [n, r] = Ae(t), i = te(!1), s = te(!1), o = te(void 0), a = te(void 0), c = Me(() => {
    const l = N();
    let u;
    if (E(l)) {
      const f = l.anchor.getNode(), d = l.focus.getNode();
      let p = f.getKey() === "root" ? f : Ze(f, (y) => {
        const k = y.getParent();
        return k !== null && Qf(k);
      });
      p === null && (p = f.getTopLevelElementOrThrow()), Vi(p) && (p = Ze(f, me) ?? p);
      const h = p.getKey(), g = n.getElementByKey(h), m = gM(f, d);
      if (m && UE(m) && (u = m.getMarker()), g !== null && (me(p) || Ie(p) || Gr(p))) {
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
  return H(() => t.registerCommand(gn, (l, u) => (c(), r(u), !1), He), [t, c]), H(() => tt(n.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), n.registerCommand(CS, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), He), n.registerCommand(SS, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), He)), [c, n, e]), null;
}
function jx(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function fi(e) {
  return e ? mt(e) ? e : Ze(e, (n) => mt(n)) ?? void 0 : void 0;
}
function Vx(e) {
  if (!E(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const n of e.getNodes()) {
    const r = fi(n);
    r && t.add(r.getKey());
  }
  return t.size > 1;
}
function Ap(e) {
  return E(e) && e.isCollapsed() && e.anchor.type === "element" || !E(e) && !Dc(e) ? !1 : e.getNodes().some((t) => Ee(t));
}
function Wx(e) {
  if (!E(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, n = t.getNode(), r = fi(n);
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
function Hx(e) {
  if (!E(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, n = t.getNode(), r = fi(n);
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
function Gg(e, t) {
  return !!af(e, t);
}
function af(e, t) {
  if (!E(e) || !e.isCollapsed())
    return;
  const { anchor: n } = e, r = n.getNode();
  if (n.type === "element" && A(r)) {
    const s = r.getChildren(), o = t === "backward" ? n.offset - 1 : n.offset;
    if (o < 0)
      return;
    const a = s[o];
    return Ee(a) ? a : void 0;
  }
  if (t === "backward") {
    if (n.offset !== 0)
      return;
    const s = r.getPreviousSibling();
    return Ee(s) ? s : void 0;
  }
  if (n.offset !== r.getTextContentSize())
    return;
  const i = r.getNextSibling();
  return Ee(i) ? i : void 0;
}
function xc(e, t) {
  if (!E(e))
    return !1;
  const n = fi(e.anchor.getNode());
  return n ? !!(t === "backward" ? n.getPreviousSibling() : n.getNextSibling()) : !1;
}
function Os(e) {
  return Ap(e) || Vx(e);
}
function Gx(e, t) {
  if (Ap(e) || Vx(e))
    return !0;
  if (!E(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Wx(e) && xc(e, "backward") || Gg(e, "backward");
    case "deleteForward":
      return Hx(e) && xc(e, "forward") || Gg(e, "forward");
    case "insertText":
      return !1;
  }
}
function sN(e, t) {
  if (!(!E(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const n = af(e, "backward");
      if (n)
        return { kind: "verse", node: n };
      if (Wx(e) && xc(e, "backward")) {
        const r = fi(e.anchor.getNode());
        if (wt(r))
          return { kind: "para", node: r };
      }
      return;
    }
    if (t === "deleteForward") {
      const n = af(e, "forward");
      if (n)
        return { kind: "verse", node: n };
      if (Hx(e) && xc(e, "forward")) {
        const i = fi(e.anchor.getNode())?.getNextSibling();
        if (wt(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Jg(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return Dc(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!E(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!E(e) || e.isCollapsed())
    return !1;
  const n = fi(e.anchor.getNode()), r = fi(e.focus.getNode());
  return !!n && n.getKey() === t.key && !!r && r.getKey() === t.key;
}
function Jx(e) {
  if (v(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else A(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function oN(e) {
  const t = e.getPreviousSibling();
  if (!mt(t))
    return;
  const n = t.getLastChild(), r = e.getFirstChild(), i = yn(r), s = e.getChildren().filter((o) => !kn(o) && !(i && o.is(r)));
  t.append(...s), e.remove(), n ? Jx(n) : no(t) || t.selectStart();
}
function Yx(e) {
  return Ee(e) || at(e) ? [] : wt(e) ? e.getChildren().flatMap(Yx) : [e];
}
function aN(e) {
  const t = [];
  for (const n of e) {
    const r = Yx(n);
    r.length !== 0 && (wt(n) && t.length > 0 && t.push(Re(" ")), t.push(...r));
  }
  return t;
}
function Yg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function cN(e) {
  if (Array.isArray(e)) return e;
}
function lN(e, t) {
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
function uN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fN(e, t) {
  return cN(e) || lN(e, t) || dN(e, t) || uN();
}
function dN(e, t) {
  if (e) {
    if (typeof e == "string") return Yg(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Yg(e, t) : void 0;
  }
}
const Xx = Object.entries, Xg = Object.setPrototypeOf, pN = Object.isFrozen, hN = Object.getPrototypeOf, gN = Object.getOwnPropertyDescriptor;
let Ut = Object.freeze, jt = Object.seal, Cs = Object.create, Qx = typeof Reflect < "u" && Reflect, cf = Qx.apply, lf = Qx.construct;
Ut || (Ut = function(t) {
  return t;
});
jt || (jt = function(t) {
  return t;
});
cf || (cf = function(t, n) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++)
    i[s - 2] = arguments[s];
  return t.apply(n, i);
});
lf || (lf = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return new t(...r);
});
const bs = St(Array.prototype.forEach), mN = St(Array.prototype.lastIndexOf), Qg = St(Array.prototype.pop), ks = St(Array.prototype.push), yN = St(Array.prototype.splice), ti = Array.isArray, _o = St(String.prototype.toLowerCase), au = St(String.prototype.toString), Zg = St(String.prototype.match), mo = St(String.prototype.replace), em = St(String.prototype.indexOf), bN = St(String.prototype.trim), kN = St(Number.prototype.toString), xN = St(Boolean.prototype.toString), tm = typeof BigInt > "u" ? null : St(BigInt.prototype.toString), nm = typeof Symbol > "u" ? null : St(Symbol.prototype.toString), At = St(Object.prototype.hasOwnProperty), yo = St(Object.prototype.toString), Et = St(RegExp.prototype.test), Si = TN(TypeError);
function St(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return cf(e, t, r);
  };
}
function TN(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return lf(e, n);
  };
}
function Oe(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _o;
  if (Xg && Xg(e, null), !ti(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let i = t[r];
    if (typeof i == "string") {
      const s = n(i);
      s !== i && (pN(t) || (t[r] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function vN(e) {
  for (let t = 0; t < e.length; t++)
    At(e, t) || (e[t] = null);
  return e;
}
function Vt(e) {
  const t = Cs(null);
  for (const r of Xx(e)) {
    var n = fN(r, 2);
    const i = n[0], s = n[1];
    At(e, i) && (ti(s) ? t[i] = vN(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = Vt(s) : t[i] = s);
  }
  return t;
}
function CN(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return kN(e);
    case "boolean":
      return xN(e);
    case "bigint":
      return tm ? tm(e) : "0";
    case "symbol":
      return nm ? nm(e) : "Symbol()";
    case "undefined":
      return yo(e);
    case "function":
    case "object": {
      if (e === null)
        return yo(e);
      const t = e, n = Jn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : yo(r);
      }
      return yo(e);
    }
    default:
      return yo(e);
  }
}
function Jn(e, t) {
  for (; e !== null; ) {
    const r = gN(e, t);
    if (r) {
      if (r.get)
        return St(r.get);
      if (typeof r.value == "function")
        return St(r.value);
    }
    e = hN(e);
  }
  function n() {
    return null;
  }
  return n;
}
function SN(e) {
  try {
    return Et(e, ""), !0;
  } catch {
    return !1;
  }
}
const rm = Ut(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), cu = Ut(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), lu = Ut(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), _N = Ut(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), uu = Ut(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), MN = Ut(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), im = Ut(["#text"]), sm = Ut(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), fu = Ut(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), om = Ut(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Oa = Ut(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), EN = jt(/{{[\w\W]*|^[\w\W]*}}/g), AN = jt(/<%[\w\W]*|^[\w\W]*%>/g), PN = jt(/\${[\w\W]*/g), wN = jt(/^data-[\-\w.\u00B7-\uFFFF]+$/), NN = jt(/^aria-[\-\w]+$/), am = jt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ON = jt(/^(?:\w+script|data):/i), $N = jt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), RN = jt(/^html$/i), IN = jt(/^[a-z][.\w]*(-[.\w]+)+$/i), cm = jt(/<[/\w!]/g), lm = jt(/<[/\w]/g), LN = jt(/<\/no(script|embed|frames)/i), qN = jt(/\/>/i), _n = {
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
}, DN = function() {
  return typeof window > "u" ? null : window;
}, KN = function(t, n) {
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
}, um = function() {
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
}, Qr = function(t, n, r, i) {
  return At(t, n) && ti(t[n]) ? Oe(i.base ? Vt(i.base) : {}, t[n], i.transform) : r;
};
function Zx() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DN();
  const t = (W) => Zx(W);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== _n.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, i = r.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, f = e.trustedTypes, d = a.prototype, p = Jn(d, "cloneNode"), h = Jn(d, "remove"), g = Jn(d, "nextSibling"), m = Jn(d, "childNodes"), y = Jn(d, "parentNode"), k = Jn(d, "shadowRoot"), x = Jn(d, "attributes"), _ = o && o.prototype ? Jn(o.prototype, "nodeType") : null, S = o && o.prototype ? Jn(o.prototype, "nodeName") : null, F = o && o.prototype ? Jn(o.prototype, "ownerDocument") : null;
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
    return I || (fe = KN(f, i), I = !0), fe;
  }, nt = n, rt = nt.implementation, rn = nt.createNodeIterator, Ye = nt.createDocumentFragment, pr = nt.getElementsByTagName, Tn = r.importNode;
  let Pe = um();
  t.isSupported = typeof Xx == "function" && typeof y == "function" && rt && rt.createHTMLDocument !== void 0;
  const he = EN, z = AN, oe = PN, Se = wN, We = NN, lt = ON, kt = $N, vn = IN;
  let ee = am, Te = null;
  const Pr = Oe({}, [...rm, ...cu, ...lu, ...uu, ...im]);
  let we = null;
  const hr = Oe({}, [...sm, ...fu, ...om, ...Oa]);
  let pe = Object.seal(Cs(null, {
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
  })), Dt = null, Yt = null;
  const L = Object.seal(Cs(null, {
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
  let V = !0, G = !0, J = !1, ae = !0, Z = !1, Q = !0, se = !1, ce = !1, qe = null, Ne = null, sn = !1, Cn = !1, wr = !1, ki = !1, co = !0, ds = !1;
  const Ca = "user-content-";
  let ps = !0, O = !1, R = {}, B = null;
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
  let _e = null;
  const Be = Oe({}, ["audio", "video", "img", "source", "image", "track"]);
  let De = null;
  const je = Oe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), xt = "http://www.w3.org/1998/Math/MathML", ht = "http://www.w3.org/2000/svg", it = "http://www.w3.org/1999/xhtml";
  let bt = it, xi = !1, Sn = null;
  const Nr = Oe({}, [xt, ht, it], au), yh = Ut(["mi", "mo", "mn", "ms", "mtext"]);
  let wl = Oe({}, yh);
  const bh = Ut(["annotation-xml"]);
  let Nl = Oe({}, bh);
  const GC = Oe({}, ["title", "style", "font", "a", "script"]);
  let lo = null;
  const JC = ["application/xhtml+xml", "text/html"], YC = "text/html";
  let ft = null, hs = null;
  const XC = n.createElement("form"), kh = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, Ol = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (hs && hs === b)
      return;
    (!b || typeof b != "object") && (b = {}), b = Vt(b), lo = // eslint-disable-next-line unicorn/prefer-includes
    JC.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? YC : b.PARSER_MEDIA_TYPE, ft = lo === "application/xhtml+xml" ? au : _o, Te = Qr(b, "ALLOWED_TAGS", Pr, {
      transform: ft
    }), we = Qr(b, "ALLOWED_ATTR", hr, {
      transform: ft
    }), Sn = Qr(b, "ALLOWED_NAMESPACES", Nr, {
      transform: au
    }), De = Qr(b, "ADD_URI_SAFE_ATTR", je, {
      transform: ft,
      base: je
    }), _e = Qr(b, "ADD_DATA_URI_TAGS", Be, {
      transform: ft,
      base: Be
    }), B = Qr(b, "FORBID_CONTENTS", Y, {
      transform: ft
    }), Dt = Qr(b, "FORBID_TAGS", Vt({}), {
      transform: ft
    }), Yt = Qr(b, "FORBID_ATTR", Vt({}), {
      transform: ft
    }), R = At(b, "USE_PROFILES") ? b.USE_PROFILES && typeof b.USE_PROFILES == "object" ? Vt(b.USE_PROFILES) : b.USE_PROFILES : !1, V = b.ALLOW_ARIA_ATTR !== !1, G = b.ALLOW_DATA_ATTR !== !1, J = b.ALLOW_UNKNOWN_PROTOCOLS || !1, ae = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Z = b.SAFE_FOR_TEMPLATES || !1, Q = b.SAFE_FOR_XML !== !1, se = b.WHOLE_DOCUMENT || !1, Cn = b.RETURN_DOM || !1, wr = b.RETURN_DOM_FRAGMENT || !1, ki = b.RETURN_TRUSTED_TYPE || !1, sn = b.FORCE_BODY || !1, co = b.SANITIZE_DOM !== !1, ds = b.SANITIZE_NAMED_PROPS || !1, ps = b.KEEP_CONTENT !== !1, O = b.IN_PLACE || !1, ee = SN(b.ALLOWED_URI_REGEXP) ? b.ALLOWED_URI_REGEXP : am, bt = typeof b.NAMESPACE == "string" ? b.NAMESPACE : it, wl = At(b, "MATHML_TEXT_INTEGRATION_POINTS") && b.MATHML_TEXT_INTEGRATION_POINTS && typeof b.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Vt(b.MATHML_TEXT_INTEGRATION_POINTS) : Oe({}, yh), Nl = At(b, "HTML_INTEGRATION_POINTS") && b.HTML_INTEGRATION_POINTS && typeof b.HTML_INTEGRATION_POINTS == "object" ? Vt(b.HTML_INTEGRATION_POINTS) : Oe({}, bh);
    const M = At(b, "CUSTOM_ELEMENT_HANDLING") && b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING == "object" ? Vt(b.CUSTOM_ELEMENT_HANDLING) : Cs(null);
    if (pe = Cs(null), At(M, "tagNameCheck") && kh(M.tagNameCheck) && (pe.tagNameCheck = M.tagNameCheck), At(M, "attributeNameCheck") && kh(M.attributeNameCheck) && (pe.attributeNameCheck = M.attributeNameCheck), At(M, "allowCustomizedBuiltInElements") && typeof M.allowCustomizedBuiltInElements == "boolean" && (pe.allowCustomizedBuiltInElements = M.allowCustomizedBuiltInElements), jt(pe), Z && (G = !1), wr && (Cn = !0), R && (Te = Oe({}, im), we = Cs(null), R.html === !0 && (Oe(Te, rm), Oe(we, sm)), R.svg === !0 && (Oe(Te, cu), Oe(we, fu), Oe(we, Oa)), R.svgFilters === !0 && (Oe(Te, lu), Oe(we, fu), Oe(we, Oa)), R.mathMl === !0 && (Oe(Te, uu), Oe(we, om), Oe(we, Oa))), L.tagCheck = null, L.attributeCheck = null, At(b, "ADD_TAGS") && (typeof b.ADD_TAGS == "function" ? L.tagCheck = b.ADD_TAGS : ti(b.ADD_TAGS) && (Te === Pr && (Te = Vt(Te)), Oe(Te, b.ADD_TAGS, ft))), At(b, "ADD_ATTR") && (typeof b.ADD_ATTR == "function" ? L.attributeCheck = b.ADD_ATTR : ti(b.ADD_ATTR) && (we === hr && (we = Vt(we)), Oe(we, b.ADD_ATTR, ft))), At(b, "ADD_URI_SAFE_ATTR") && ti(b.ADD_URI_SAFE_ATTR) && Oe(De, b.ADD_URI_SAFE_ATTR, ft), At(b, "FORBID_CONTENTS") && ti(b.FORBID_CONTENTS) && (B === Y && (B = Vt(B)), Oe(B, b.FORBID_CONTENTS, ft)), At(b, "ADD_FORBID_CONTENTS") && ti(b.ADD_FORBID_CONTENTS) && (B === Y && (B = Vt(B)), Oe(B, b.ADD_FORBID_CONTENTS, ft)), ps && (Te["#text"] = !0), se && Oe(Te, ["html", "head", "body"]), Te.table && (Oe(Te, ["tbody"]), delete Dt.tbody), b.TRUSTED_TYPES_POLICY) {
      if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Si('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Si('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const j = $;
      $ = b.TRUSTED_TYPES_POLICY;
      try {
        ne = re("");
      } catch (ie) {
        throw $ = j, ie;
      }
    } else b.TRUSTED_TYPES_POLICY === null ? ($ = void 0, ne = "") : ($ === void 0 && ($ = ye()), $ && typeof ne == "string" && (ne = re("")));
    Ut && Ut(b), hs = b;
  }, xh = Oe({}, [...cu, ...lu, ..._N]), Th = Oe({}, [...uu, ...MN]), QC = function(b, M, j) {
    return M.namespaceURI === it ? b === "svg" : M.namespaceURI === xt ? b === "svg" && (j === "annotation-xml" || wl[j]) : !!xh[b];
  }, ZC = function(b, M, j) {
    return M.namespaceURI === it ? b === "math" : M.namespaceURI === ht ? b === "math" && Nl[j] : !!Th[b];
  }, eS = function(b, M, j) {
    return M.namespaceURI === ht && !Nl[j] || M.namespaceURI === xt && !wl[j] ? !1 : !Th[b] && (GC[b] || !xh[b]);
  }, tS = function(b) {
    let M = y(b);
    (!M || !M.tagName) && (M = {
      namespaceURI: bt,
      tagName: "template"
    });
    const j = _o(b.tagName), ie = _o(M.tagName);
    return Sn[b.namespaceURI] ? b.namespaceURI === ht ? QC(j, M, ie) : b.namespaceURI === xt ? ZC(j, M, ie) : b.namespaceURI === it ? eS(j, M, ie) : !!(lo === "application/xhtml+xml" && Sn[b.namespaceURI]) : !1;
  }, Yr = function(b) {
    ks(t.removed, {
      element: b
    });
    try {
      y(b).removeChild(b);
    } catch {
      if (h(b), !y(b))
        throw Si("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Sa = function(b) {
    uo(b);
    const M = m(b);
    if (M) {
      const ie = [];
      bs(M, (le) => {
        ks(ie, le);
      }), bs(ie, (le) => {
        try {
          h(le);
        } catch {
        }
      });
    }
    const j = x(b);
    if (j)
      for (let ie = j.length - 1; ie >= 0; --ie) {
        const le = j[ie], xe = le && le.name;
        if (typeof xe == "string")
          try {
            b.removeAttribute(xe);
          } catch {
          }
      }
  }, Ti = function(b, M) {
    try {
      ks(t.removed, {
        attribute: M.getAttributeNode(b),
        from: M
      });
    } catch {
      ks(t.removed, {
        attribute: null,
        from: M
      });
    }
    if (M.removeAttribute(b), b === "is")
      if (Cn || wr)
        try {
          Yr(M);
        } catch {
        }
      else
        try {
          M.setAttribute(b, "");
        } catch {
        }
  }, nS = function(b) {
    const M = x(b);
    if (M)
      for (let j = M.length - 1; j >= 0; --j) {
        const ie = M[j], le = ie && ie.name;
        if (!(typeof le != "string" || we[ft(le)]))
          try {
            b.removeAttribute(le);
          } catch {
          }
      }
  }, uo = function(b) {
    const M = [b];
    for (; M.length > 0; ) {
      const j = M.pop();
      (_ ? _(j) : j.nodeType) === _n.element && nS(j);
      const le = m(j);
      if (le)
        for (let xe = le.length - 1; xe >= 0; --xe)
          M.push(le[xe]);
    }
  }, rS = function(b) {
    if (!Q)
      return;
    const M = [b];
    for (; M.length > 0; ) {
      const j = M.pop(), ie = _ ? _(j) : j.nodeType;
      if (ie === _n.processingInstruction || ie === _n.comment && Et(lm, j.data)) {
        try {
          h(j);
        } catch {
        }
        continue;
      }
      if (ie === _n.element) {
        const xe = j, Xe = ft(S ? S(j) : j.nodeName);
        try {
          xe.hasAttribute && xe.hasAttribute("patchsrc") && xe.removeAttribute("patchsrc"), xe.hasAttribute && xe.hasAttribute("for") && Xe !== "label" && Xe !== "output" && xe.removeAttribute("for");
        } catch {
        }
      }
      const le = m(j);
      if (le)
        for (let xe = le.length - 1; xe >= 0; --xe)
          M.push(le[xe]);
    }
  }, vh = function(b) {
    let M = null, j = null;
    if (sn)
      b = "<remove></remove>" + b;
    else {
      const xe = Zg(b, /^[\r\n\t ]+/);
      j = xe && xe[0];
    }
    lo === "application/xhtml+xml" && bt === it && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const ie = $ ? re(b) : b;
    if (bt === it)
      try {
        M = new u().parseFromString(ie, lo);
      } catch {
      }
    if (!M || !M.documentElement) {
      M = rt.createDocument(bt, "template", null);
      try {
        M.documentElement.innerHTML = xi ? ne : ie;
      } catch {
      }
    }
    const le = M.body || M.documentElement;
    return b && j && le.insertBefore(n.createTextNode(j), le.childNodes[0] || null), bt === it ? pr.call(M, se ? "html" : "body")[0] : se ? M.documentElement : le;
  }, Ch = function(b) {
    const M = F ? F(b) : b.ownerDocument;
    return rn.call(
      M || b,
      b,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, _a = function(b) {
    return b = mo(b, he, " "), b = mo(b, z, " "), b = mo(b, oe, " "), b;
  }, $l = function(b) {
    var M;
    b.normalize();
    const j = F ? F(b) : b.ownerDocument, ie = rn.call(
      j || b,
      b,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let le = ie.nextNode();
    for (; le; )
      le.data = _a(le.data), le = ie.nextNode();
    const xe = (M = b.querySelectorAll) === null || M === void 0 ? void 0 : M.call(b, "template");
    xe && bs(xe, (Xe) => {
      gs(Xe.content) && $l(Xe.content);
    });
  }, Ma = function(b) {
    const M = S ? S(b) : null;
    return typeof M != "string" || ft(M) !== "form" ? !1 : typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    b.nodeType !== _(b) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, gs = function(b) {
    if (!_ || typeof b != "object" || b === null)
      return !1;
    try {
      return _(b) === _n.documentFragment;
    } catch {
      return !1;
    }
  }, fo = function(b) {
    if (!_ || typeof b != "object" || b === null)
      return !1;
    try {
      return typeof _(b) == "number";
    } catch {
      return !1;
    }
  };
  function gr(W, b, M) {
    W.length !== 0 && bs(W, (j) => {
      j.call(t, b, M, hs);
    });
  }
  const iS = function(b, M) {
    return !!(Q && b.hasChildNodes() && !fo(b.firstElementChild) && Et(cm, b.textContent) && Et(cm, b.innerHTML) || Q && b.namespaceURI === it && M === "style" && fo(b.firstElementChild) || b.nodeType === _n.processingInstruction || Q && b.nodeType === _n.comment && Et(lm, b.data));
  }, sS = function(b, M, j) {
    if (!Dt[M] && Eh(M) && (pe.tagNameCheck instanceof RegExp && Et(pe.tagNameCheck, M) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(M)))
      return !1;
    if (ps && !B[M]) {
      const ie = y(b), le = m(b);
      if (le && ie) {
        const xe = le.length;
        for (let Xe = xe - 1; Xe >= 0; --Xe) {
          const dt = b === j ? p(le[Xe], !0) : le[Xe];
          ie.insertBefore(dt, g(b));
        }
      }
    }
    return Yr(b), !0;
  }, Sh = function(b, M, j, ie) {
    return b.length === 0 ? M : M === j || M === ie ? Vt(M) : M;
  }, _h = function(b, M) {
    if (gr(Pe.beforeSanitizeElements, b, null), b !== M && y(b) === null)
      return O && uo(b), !0;
    if (Ma(b))
      return Yr(b), !0;
    const j = ft(S ? S(b) : b.nodeName);
    if (Te = Sh(Pe.uponSanitizeElement, Te, Pr, qe), gr(Pe.uponSanitizeElement, b, {
      tagName: j,
      allowedTags: Te
    }), b !== M && y(b) === null)
      return O && uo(b), !0;
    if (iS(b, j))
      return Yr(b), !0;
    if (Dt[j] || !(L.tagCheck instanceof Function && L.tagCheck(j)) && !Te[j]) {
      const le = sS(b, j, M);
      return le === !1 && gr(Pe.afterSanitizeElements, b, null), le;
    }
    if ((_ ? _(b) : b.nodeType) === _n.element && !tS(b) || (j === "noscript" || j === "noembed" || j === "noframes") && Et(LN, b.innerHTML))
      return Yr(b), !0;
    if (Z && b.nodeType === _n.text) {
      const le = _a(b.textContent);
      b.textContent !== le && (ks(t.removed, {
        element: b.cloneNode()
      }), b.textContent = le);
    }
    return gr(Pe.afterSanitizeElements, b, null), !1;
  }, Mh = function(b, M, j) {
    if (Yt[M] || Q && M === "patchsrc" || Q && M === "for" && b !== "label" && b !== "output" || co && (M === "id" || M === "name") && (j in n || j in XC))
      return !1;
    const ie = we[M] || L.attributeCheck instanceof Function && L.attributeCheck(M, b);
    if (!(G && Et(Se, M))) {
      if (!(V && Et(We, M))) {
        if (ie) {
          if (!De[M]) {
            if (!Et(ee, mo(j, kt, ""))) {
              if (!((M === "src" || M === "xlink:href" || M === "href") && b !== "script" && em(j, "data:") === 0 && _e[b])) {
                if (!(J && !Et(lt, mo(j, kt, "")))) {
                  if (j)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Eh(b) && (pe.tagNameCheck instanceof RegExp && Et(pe.tagNameCheck, b) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(b)) && (pe.attributeNameCheck instanceof RegExp && Et(pe.attributeNameCheck, M) || pe.attributeNameCheck instanceof Function && pe.attributeNameCheck(M, b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          M === "is" && pe.allowCustomizedBuiltInElements && (pe.tagNameCheck instanceof RegExp && Et(pe.tagNameCheck, j) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(j)))
        ) return !1;
      }
    }
    return !0;
  }, oS = Oe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Eh = function(b) {
    return !oS[_o(b)] && Et(vn, b);
  }, aS = function(b, M, j, ie) {
    if ($ && typeof f == "object" && typeof f.getAttributeType == "function" && !j)
      switch (f.getAttributeType(b, M)) {
        case "TrustedHTML":
          return re(ie);
        case "TrustedScriptURL":
          return Le(ie);
      }
    return ie;
  }, cS = function(b, M, j, ie) {
    try {
      j ? b.setAttributeNS(j, M, ie) : b.setAttribute(M, ie), Ma(b) ? Yr(b) : Qg(t.removed);
    } catch {
      Ti(M, b);
    }
  }, Ah = function(b) {
    gr(Pe.beforeSanitizeAttributes, b, null);
    const M = b.attributes;
    if (!M || Ma(b))
      return;
    we = Sh(Pe.uponSanitizeAttribute, we, hr, Ne);
    const j = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: we,
      forceKeepAttr: void 0
    };
    let ie = M.length;
    const le = ft(b.nodeName);
    for (; ie--; ) {
      const xe = M[ie], Xe = xe.name, dt = xe.namespaceURI, on = xe.value, an = ft(Xe), Il = on;
      let Xt = Xe === "value" ? Il : bN(Il);
      if (j.attrName = an, j.attrValue = Xt, j.keepAttr = !0, j.forceKeepAttr = void 0, gr(Pe.uponSanitizeAttribute, b, j), Xt = j.attrValue, ds && (an === "id" || an === "name") && em(Xt, Ca) !== 0 && (Ti(Xe, b), Xt = Ca + Xt), Q && Et(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Xt)) {
        Ti(Xe, b);
        continue;
      }
      if (an === "attributename" && Zg(Xt, "href")) {
        Ti(Xe, b);
        continue;
      }
      if (!j.forceKeepAttr) {
        if (!j.keepAttr) {
          Ti(Xe, b);
          continue;
        }
        if (!ae && Et(qN, Xt)) {
          Ti(Xe, b);
          continue;
        }
        if (Z && (Xt = _a(Xt)), !Mh(le, an, Xt)) {
          Ti(Xe, b);
          continue;
        }
        Xt = aS(le, an, dt, Xt), Xt !== Il && cS(b, Xe, dt, Xt);
      }
    }
    gr(Pe.afterSanitizeAttributes, b, null);
  }, Ea = function(b) {
    let M = null;
    const j = Ch(b);
    for (gr(Pe.beforeSanitizeShadowDOM, b, null); M = j.nextNode(); )
      if (gr(Pe.uponSanitizeShadowNode, M, null), _h(M, b), Ah(M), gs(M.content) && Ea(M.content), (_ ? _(M) : M.nodeType) === _n.element) {
        const le = k(M);
        gs(le) && (Rl(le), Ea(le));
      }
    gr(Pe.afterSanitizeShadowDOM, b, null);
  }, Rl = function(b) {
    const M = [{
      node: b,
      shadow: null
    }];
    for (; M.length > 0; ) {
      const j = M.pop();
      if (j.shadow) {
        Ea(j.shadow);
        continue;
      }
      const ie = j.node, xe = (_ ? _(ie) : ie.nodeType) === _n.element, Xe = m(ie);
      if (Xe)
        for (let dt = Xe.length - 1; dt >= 0; --dt)
          M.push({
            node: Xe[dt],
            shadow: null
          });
      if (xe) {
        const dt = S ? S(ie) : null;
        if (typeof dt == "string" && ft(dt) === "template") {
          const on = ie.content;
          gs(on) && M.push({
            node: on,
            shadow: null
          });
        }
      }
      if (xe) {
        const dt = k(ie);
        gs(dt) && M.push({
          node: null,
          shadow: dt
        }, {
          node: dt,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(W) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, M = null, j = null, ie = null, le = null;
    if (xi = !W, xi && (W = "<!-->"), typeof W != "string" && !fo(W) && (W = CN(W), typeof W != "string"))
      throw Si("dirty is not a string, aborting");
    if (!t.isSupported)
      return W;
    ce ? (Te = qe, we = Ne) : Ol(b), (Pe.uponSanitizeElement.length > 0 || Pe.uponSanitizeAttribute.length > 0) && (Te = Vt(Te)), Pe.uponSanitizeAttribute.length > 0 && (we = Vt(we)), t.removed = [];
    const xe = O && typeof W != "string" && fo(W);
    if (xe) {
      rS(W);
      const on = S ? S(W) : W.nodeName;
      if (typeof on == "string") {
        const an = ft(on);
        if (!Te[an] || Dt[an])
          throw Sa(W), Si("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ma(W))
        throw Sa(W), Si("root node is clobbered and cannot be sanitized in-place");
      try {
        Rl(W);
      } catch (an) {
        throw Sa(W), an;
      }
    } else if (fo(W))
      M = vh("<!---->"), j = M.ownerDocument.importNode(W, !0), j.nodeType === _n.element && j.nodeName === "BODY" || j.nodeName === "HTML" ? M = j : M.appendChild(j), Rl(j);
    else {
      if (!Cn && !Z && !se && // eslint-disable-next-line unicorn/prefer-includes
      W.indexOf("<") === -1)
        return $ && ki ? re(W) : W;
      if (M = vh(W), !M)
        return Cn ? null : ki ? ne : "";
    }
    M && sn && Yr(M.firstChild);
    const Xe = xe ? W : M;
    try {
      const on = Ch(Xe);
      for (; ie = on.nextNode(); )
        _h(ie, Xe), Ah(ie), gs(ie.content) && Ea(ie.content);
    } catch (on) {
      throw xe && (Sa(W), bs(t.removed, (an) => {
        an.element && uo(an.element);
      })), on;
    }
    if (xe)
      return bs(t.removed, (on) => {
        on.element && uo(on.element);
      }), Z && $l(W), W;
    if (Cn) {
      if (Z && $l(M), wr)
        for (le = Ye.call(M.ownerDocument); M.firstChild; )
          le.appendChild(M.firstChild);
      else
        le = M;
      return (we.shadowroot || we.shadowrootmode) && (le = Tn.call(r, le, !0)), le;
    }
    let dt = se ? M.outerHTML : M.innerHTML;
    return se && Te["!doctype"] && M.ownerDocument && M.ownerDocument.doctype && M.ownerDocument.doctype.name && Et(RN, M.ownerDocument.doctype.name) && (dt = "<!DOCTYPE " + M.ownerDocument.doctype.name + `>
` + dt), Z && (dt = _a(dt)), $ && ki ? re(dt) : dt;
  }, t.setConfig = function() {
    let W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ol(W), ce = !0, qe = Te, Ne = we;
  }, t.clearConfig = function() {
    hs = null, ce = !1, qe = null, Ne = null, $ = fe, ne = "";
  }, t.isValidAttribute = function(W, b, M) {
    hs || Ol({});
    const j = ft(W), ie = ft(b);
    return Mh(j, ie, M);
  }, t.addHook = function(W, b) {
    typeof b == "function" && At(Pe, W) && ks(Pe[W], b);
  }, t.removeHook = function(W, b) {
    if (At(Pe, W)) {
      if (b !== void 0) {
        const M = mN(Pe[W], b);
        return M === -1 ? void 0 : yN(Pe[W], M, 1)[0];
      }
      return Qg(Pe[W]);
    }
  }, t.removeHooks = function(W) {
    At(Pe, W) && (Pe[W] = []);
  }, t.removeAllHooks = function() {
    Pe = um();
  }, t;
}
var UN = Zx();
function BN({ structureProtectionMode: e = "off" }) {
  const [t] = ve(), n = te(void 0), [r, i] = Ae(void 0), s = Me((o) => {
    n.current = o, i(o);
  }, []);
  return H(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = jx(p);
      if (!h)
        return !1;
      const g = N();
      return e === "protected" ? g && Gx(g, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const g = N(), m = n.current;
      if (m && g && Jg(g, m)) {
        if (s(void 0), h.preventDefault(), p !== m.intent)
          return !0;
        const k = X(m.key) ?? void 0;
        if (m.kind === "verse") {
          if (k) {
            const x = k.getParent(), _ = k.getPreviousSibling(), S = k.getNextSibling();
            k.remove(), _ ? Jx(_) : S && v(S) ? S.select(0, 0) : x?.selectStart();
          }
        } else m.kind === "selection" ? E(g) && (yp(g), g.removeText()) : wt(k) && oN(k);
        return !0;
      }
      if (!g)
        return !1;
      const y = sN(g, p);
      if (y) {
        if (y.kind === "verse") {
          const k = Ey();
          k.add(y.node.getKey()), Fn(k);
        } else {
          const k = Kr();
          k.anchor.set(y.node.getKey(), 0, "element"), k.focus.set(y.node.getKey(), y.node.getChildrenSize(), "element"), Fn(k);
        }
        return s({ key: y.node.getKey(), kind: y.kind, intent: p }), h.preventDefault(), !0;
      }
      if (E(g) && !g.isCollapsed() && Ap(g)) {
        const k = g.getNodes().filter(Ee).map((S) => S.getKey()), { anchor: x, focus: _ } = g;
        return s({
          kind: "selection",
          intent: p,
          key: k[0],
          anchor: { key: x.key, offset: x.offset, type: x.type },
          focus: { key: _.key, offset: _.offset, type: _.type }
        }), h.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return !h || !Os(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const g = UN.sanitize(p), m = new DOMParser().parseFromString(g, "text/html"), y = aN(HS(t, m)), k = N();
      return E(k) && k.insertNodes(y), h.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return h && Os(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, f = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return h && Os(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, d = () => {
      const p = n.current;
      p && t.getEditorState().read(() => {
        Jg(N(), p) || s(void 0);
      });
    };
    return tt(
      t.registerCommand(_r, o, Ge),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(ir, c, He),
      t.registerCommand(er, u, Ge),
      t.registerCommand(_S, c, Ge),
      t.registerCommand(Yf, f, Ge),
      t.registerCommand(ca, c, Ge),
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
const wD = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function FN({ textDirection: e }) {
  const [t] = ve();
  return zN(t, e), null;
}
function zN(e, t) {
  H(() => (fm(e, t), e.registerUpdateListener(({ dirtyElements: n }) => {
    n.size > 0 && fm(e, t);
  })), [e, t]);
}
function fm(e, t) {
  if (t === "auto")
    return;
  const n = e.getRootElement();
  n && (n.dir = t);
  const r = e._config.theme.placeholder, i = document.getElementsByClassName(r)[0];
  i && (i.dir = t);
}
function jN() {
  const [e] = ve();
  return VN(e), null;
}
function VN(e) {
  H(() => {
    if (!e.hasNodes([ze, Jt, Je, st, Bt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return tt(
      e.registerNodeTransform(st, WN),
      e.registerNodeTransform(st, (t) => HN(t, e)),
      e.registerNodeTransform(Bt, dm),
      e.registerNodeTransform(Jt, dm),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(Bt, (t) => {
        Jo(Fr("va"), t), Jo(Fr("vp"), t);
      })
    );
  }, [e]);
}
function WN(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), n = e.getNextSibling(), r = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || q(n) || U(r) || U(n) || ue(r) || ue(n) || et(r) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
  // splits leave runs as multiple nodes, e.g. a segmented composition node that Lexical
  // won't merge). No structural space belongs inside a run — inserting one corrupts the
  // word itself (#513, complex scripts worst). This also protects a space-only node from
  // the placeholder cleanup below: between two text nodes it is real content.
  v(n) || // An optbreak (`//`) — like a ref — is an inline UnknownNode carrying SIGNIFICANT surrounding
  // whitespace (Paratext 9 preserves the spaces around `//` byte-for-byte). Forcing a trailing
  // space onto the text before one — or removing a lone space there — corrupts the authored form
  // and makes the space impossible to delete (the transform re-adds it every keystroke). Text
  // adjacent to an inline unknown is left exactly as authored, the same next-sibling exemption
  // already applied to notes, chars, and typed marks. Block-level unknowns (figures, sidebars)
  // keep the existing spacing behavior.
  et(n) && n.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
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
  Fe(r))
    return;
  if (Ee(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  Ee(n) && Hd(e);
}
function HN(e, t) {
  const n = e.getParent();
  !et(n) || !e.isAttached() || MS(Ka) || Vu(t, e.getKey()) && !Vu(t, n.getKey()) && n.insertAfter(e);
}
function dm(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; ue(t); )
    t = t.getLastChild();
  (U(t) || v(t) && ue(t.getParent()) && !GN(t)) && e.insertBefore(Re(" "));
}
function GN(e) {
  const t = e.getTextContent();
  return t.endsWith(" ") || t.endsWith(D);
}
function dl(e) {
  if (!q(e) || e.getIsCollapsed() !== !0)
    return;
  let t = e;
  for (; ; ) {
    if (t.getNextSiblings().some((i) => !ha(i)))
      return;
    const r = t.getParent();
    if (!r)
      return;
    if (!A(r) || !r.isInline())
      return e;
    t = r;
  }
}
function JN(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (A(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function YN() {
  const e = N();
  if (!(!E(e) || !e.isCollapsed()))
    return dl(JN(e.anchor));
}
function XN(e) {
  const t = N();
  let n;
  return E(t) ? t.isCollapsed() && (n = t.anchor.getNode()) : t || (n = eT(e.target)), n ? dl(Ze(n, q)) : void 0;
}
function eT(e) {
  const t = ES(e)?.anchorNode;
  if (Cy(t))
    return Zi(t) ?? void 0;
}
function QN(e) {
  if (N())
    return;
  const t = eT(e);
  return t ? dl(Ze(t, q)) : void 0;
}
function pm(e) {
  const t = Ze(e.getNode(), q);
  return t?.getIsCollapsed() === !0 ? t : void 0;
}
function ZN() {
  const e = N();
  if (!E(e) || e.isCollapsed())
    return !1;
  const [t, n] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], r = pm(t), i = pm(n);
  if (r && i && r.is(i))
    return !1;
  let s = !1;
  const o = r?.getParent();
  r && o && (t.set(o.getKey(), r.getIndexWithinParent(), "element"), s = !0);
  const a = i?.getParent();
  return i && a && (n.set(a.getKey(), i.getIndexWithinParent() + 1, "element"), s = !0), s;
}
const eO = 500;
function tO(e) {
  return e.shiftKey || e.altKey ? !1 : e.key === "End" || e.key === "ArrowDown" && e.metaKey;
}
function nO() {
  const e = N();
  if (!E(e) || e.isCollapsed())
    return;
  const [t, n] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
  if (t.type !== "element" || n.type !== "element" || t.key !== n.key || n.offset !== t.offset + 1)
    return;
  const r = t.getNode();
  if (A(r))
    return dl(r.getChildAtIndex(t.offset));
}
function rO() {
  const [e] = ve(), t = Sp(YN), n = te(void 0);
  return H(() => {
    const r = (i) => {
      t(i) && Wt($i);
    };
    return tt(e.registerCommand(
      _r,
      (i) => (n.current = tO(i) ? performance.now() : void 0, !1),
      // Only observes the press, and must see it whether or not a handler further down claims it.
      He
    ), e.registerCommand(gn, () => {
      if (n.current !== void 0 && performance.now() - n.current < eO) {
        const o = nO();
        if (o)
          return r(o), !1;
      }
      if (ZN())
        return Wt($i), Co(e, $i), !1;
      const s = QN(e.getRootElement());
      return s && r(s), !1;
    }, Di), e.registerCommand(Uc, (i) => {
      const s = XN(i);
      return s && r(s), !1;
    }, Di));
  }, [e, t]), null;
}
function iO({ trigger: e, scriptureReference: t, contextMarker: n, getMarkerAction: r }) {
  const { markersMenuItems: i } = KP({
    scriptureReference: t,
    contextMarker: n,
    getMarkerAction: r
  });
  return P(DP, { trigger: e, items: i });
}
function sO({ trigger: e, scrRef: t, contextMarker: n, getMarkerAction: r, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = ut(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? P(cO, { trigger: e, harness: i }) : P(iO, { trigger: e, scriptureReference: u, contextMarker: n, getMarkerAction: r });
}
const oO = [" ", "*"];
function aO(e, t) {
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
function cO({ trigger: e, harness: t }) {
  const [n] = ve(), [r, i] = Ae(void 0), s = te({ query: "", options: [] }), o = te(0), a = Me((d, p, h) => {
    const g = p.find((m) => m.kind === "note" && m.marker === d);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    n.update(() => {
      const m = N();
      E(m) && m.insertText(`${e}${d}${h ? " " : ""}`);
    });
  }, [n, t, e]);
  H(() => tt(n.registerCommand(_r, (d) => {
    if (r) {
      if ((d.key === "Enter" || d.key === "Tab") && s.current.options.length === 0)
        return d.preventDefault(), d.stopPropagation(), !0;
      if (d.key === "*" && r.trigger === "backslash")
        return d.preventDefault(), d.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (d.key === e && r.trigger === "backslash" && !r.hasTextSelection) {
        d.preventDefault(), d.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, r.items, !1), Ay(() => {
          const m = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(m ? {
            trigger: "backslash",
            hasTextSelection: m.hasTextSelection,
            items: t.getItems(m),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), n.update(() => {
          const m = N();
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
  }, Ge), n.registerCommand(Py, (d) => {
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
  const c = Me(() => i(void 0), []), l = Me((d, p) => {
    s.current = { query: d, options: p };
  }, []), u = Me((d) => {
    const { markerMenuItem: p, applyOpts: h } = d;
    t.apply(p, h);
  }, [t]), f = ut(() => r?.items.map((d) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    aO(d, { trigger: r.trigger, literalPrefixLanded: !1 })
  )), [r]);
  return r && P(lx, { isOpen: !0, children: ({ placement: d }) => P(
    dx,
    { options: f ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: d === "top-start", menuOpenKey: e, passthroughKeys: r.trigger === "backslash" ? oO : void 0 },
    r.session
  ) });
}
function lO(e) {
  return e.replaceAll(D, "~").replace(/ {2,}/g, (n) => D.repeat(n.length));
}
function hm(e) {
  return e.replaceAll(D, " ").replaceAll("~", D);
}
let Tc;
function uO(e) {
  e && (Tc = e);
}
function du(e) {
  return qt(e);
}
function fO(e, t) {
  return e.isEmpty() ? Ty : tT(e.toJSON(), t);
}
function tT(e, t) {
  if (!e.root || !e.root.children) return;
  const n = e.root.children;
  if (n.length === 1 && Wc(n[0]) && (!n[0].children || n[0].children.length === 0))
    return Ty;
  if (n.some(TE)) {
    Tc?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const r = rT(n), i = Yn(r, t);
  return i ? { type: rr, version: nr, content: i } : void 0;
}
function dO(e, t) {
  const { type: n, marker: r, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), ct({
    type: n,
    marker: r,
    code: s,
    ...i,
    content: t
  });
}
function pO(e) {
  const { marker: t, number: n, sid: r, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return ct({
    type: Ln.getType(),
    marker: t,
    number: n,
    sid: r,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function hO(e, t) {
  const { marker: n, sid: r, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Jb(n, a, c), ct({
    type: Ln.getType(),
    marker: n,
    number: c,
    sid: r,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function gO(e) {
  const { marker: t, sid: n, altnumber: r, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Jb(t, o, a), ct({
    type: Bt.getType(),
    marker: t,
    number: a,
    sid: n,
    altnumber: r,
    pubnumber: i,
    ...s
  });
}
function mO(e, t) {
  const { type: n, marker: r, unknownAttributes: i } = e;
  return ct({
    type: n,
    marker: r === "" ? void 0 : r,
    ...i,
    content: t
  });
}
function yO(e, t) {
  const { type: n, marker: r, unknownAttributes: i } = e;
  return ct({
    type: n,
    marker: r,
    ...i,
    content: t
  });
}
function bO(e, t) {
  const { unknownAttributes: n } = e;
  return ct({ type: xb, ...n, content: t });
}
function kO(e, t) {
  const { marker: n, unknownAttributes: r } = e;
  return ct({ type: kk, marker: n, ...r, content: t });
}
function xO(e, t) {
  const { marker: n, align: r, colspan: i, unknownAttributes: s } = e;
  return ct({
    type: vk,
    marker: n,
    align: r,
    colspan: i,
    ...s,
    content: t
  });
}
function TO(e) {
  const t = e?.[0];
  if (!e || typeof t != "string" || !t.startsWith(" ")) return e;
  const n = t.replace(/^ +/, "");
  return n ? [n, ...e.slice(1)] : e.slice(1);
}
function vO(e, t) {
  const { type: n, marker: r, caller: i, category: s, unknownAttributes: o } = e;
  return ct({
    type: n,
    marker: r,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function Ss(e) {
  const { type: t, marker: n, sid: r, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return ct({
    type: t,
    marker: n === "" ? void 0 : n,
    ...lb({ sid: r, eid: i, ...s }, o)
  });
}
function CO(e) {
  return e.text;
}
function SO(e, t) {
  const { tag: n, marker: r, unknownAttributes: i } = e;
  return ct({
    type: n,
    marker: r,
    ...i,
    content: t
  });
}
function _O(e) {
  const { marker: t } = e;
  return {
    type: ic,
    marker: t === "" ? void 0 : t
  };
}
function pu(e, t) {
  const n = e[e.length - 1];
  n && typeof n == "string" ? e[e.length - 1] = n + t : e.push(t);
}
function MO(e, t, n, r, i) {
  const s = sr.getType(), o = t.filter((l) => !n.includes(l));
  if (n.filter((l) => !t.includes(l)).forEach((l) => {
    const u = Ss({
      type: s,
      marker: ws,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = Ss({
      type: s,
      marker: Ki,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = Ss({
      type: s,
      marker: Ki
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Ss({
      type: s,
      marker: ws
    });
    i.push(l);
  }
  (!r || !oi(r)) && t.forEach((l) => {
    const u = Ss({
      type: s,
      marker: ws,
      eid: l
    });
    i.push(u);
  });
}
function uf(e, t, n, r) {
  if (!r) return !1;
  let i = t > 0 ? e[t - 1] : n;
  for (; i && oi(i); ) {
    const { children: s } = i;
    i = s.length > 0 ? s[s.length - 1] : void 0;
  }
  return !Xs(i) || i.markerSyntax !== "opening" ? !1 : i.marker === r.marker ? !0 : r.children.some(
    (s) => ob(s) && s.marker === i.marker
  );
}
function EO(e, t, n, r, i) {
  const s = e[t];
  return !zr(s) || s.text !== D || !(i || oi(e[t - 1]) || oi(e[t + 1])) || s[Dr]?.textType !== void 0 || uf(e, t, n, r) ? !1 : !r || nT(r.children, s);
}
function nT(e, t) {
  return e.some((n) => n === t ? !1 : oi(n) ? nT(n.children, t) : Xs(n) ? !1 : zr(n) ? n[Dr]?.textType === void 0 && n.text !== "" && n.text !== D && !rs(n.text) : "children" in n && n.type !== Er.getType());
}
function AO(e) {
  let t = e;
  for (; oi(t); ) t = t.children[0];
  return t;
}
function PO(e, t) {
  let n = 0;
  for (; n < e.length; ) {
    const s = e[n];
    if (!Xs(s) || s.markerSyntax !== "opening") break;
    n++;
  }
  const r = AO(e[n]);
  return zr(r) ? r.text === _t(t) ? { node: r, caller: t } : Math.floor(r.detail / zy) % 2 === 1 ? { node: r, caller: t } : void 0 : void 0;
}
function Yn(e, t, n, r, i, s = !1) {
  const o = [];
  let a, c = [];
  return e.forEach((l, u) => {
    const f = l, d = l, p = l, h = l, g = l, m = l, y = l, k = l;
    switch (l.type) {
      case Pn.getType():
        o.push(
          dO(
            f,
            Yn(f.children, t)
          )
        );
        break;
      case Dn.getType():
        o.push(pO(l));
        break;
      case Ln.getType():
        o.push(
          hO(
            d,
            Yn(d.children, t)
          )
        );
        break;
      case Jt.getType():
      case Bt.getType():
        o.push(gO(l));
        break;
      case ze.getType():
        o.push(
          mO(
            p,
            Yn(p.children, t, void 0, p)
          )
        );
        break;
      case It.getType():
        o.push(
          yO(
            h,
            Yn(h.children, t)
          )
        );
        break;
      case ns.getType():
        o.push(
          bO(
            l,
            Yn(l.children, t)
          )
        );
        break;
      case ss.getType():
        o.push(
          kO(
            l,
            Yn(l.children, t)
          )
        );
        break;
      case os.getType():
        o.push(
          xO(
            l,
            Yn(l.children, t)
          )
        );
        break;
      case Je.getType(): {
        const x = Yn(
          g.children,
          t,
          PO(g.children, g.caller)
        );
        o.push(
          vO(
            g,
            du(t) && g.category === void 0 ? TO(x) : x
          )
        );
        break;
      }
      case Er.getType():
      case Hn.getType():
      case Mn.getType():
      case wy.getType():
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
          const x = y.typedIDs[Kt];
          if (x) {
            const _ = e[u + 1];
            MO(a, x, c, _, o), c = _ && oi(_) ? x : [];
          } else {
            const _ = a.shift();
            _ && (typeof _ == "string" ? pu(o, _) : o.push(_)), a.length > 0 && o.push(...a);
          }
        }
        break;
      case sr.getType():
        o.push(Ss(l));
        break;
      case st.getType():
        if (n && l === n.node) {
          let x = ld(n.node.text, n.caller);
          du(t) && (x = hm(Hh(x))), x && pu(o, x);
          break;
        }
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !rs(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        (m.text !== D || EO(e, u, i, r, s)) && // The untagged NBSP-`|` form of milestone attribute text. Text right after a char span's
        // opening glyph is never that: its NBSP is the span's separator, and a `|…` after it is
        // content the attribute grammar left literal (`\w |lemma="g"grace\w*` — Paratext 9
        // parses attributes only when the whole `|…` tail before the closer matches), so it is
        // kept like any other content text.
        !(m.text.startsWith(nd) && !uf(e, u, i, r)) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[Dr]?.textType !== "attribute") {
          let x = CO(m);
          t?.markerMode === "editable" && uf(e, u, i, r) && x.startsWith(D) && (x = x.slice(1)), du(t) && (x = hm(Hh(x))), pu(o, x);
        }
        break;
      case ts.getType():
        o.push(
          SO(
            k,
            Yn(k.children, t)
          )
        );
        break;
      case fr.getType():
        o.push(_O(l));
        break;
      case eo.getType():
        Tc?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Tc?.error(`Unexpected node type '${l.type}'!`);
    }
  }), o && o.length > 0 ? o : void 0;
}
function rT(e) {
  const t = e.findIndex((n) => Wc(n));
  if (t >= 0) {
    const n = e.slice(0, t), r = e[t].children, i = rT(e.slice(t + 1));
    e = [...n, ...r, ...i];
  }
  return e;
}
const _s = {
  initialize: uO,
  deserializeEditorState: fO
}, wO = /^sd\d*$/, NO = /* @__PURE__ */ new Set([
  ...Object.entries(Mu).filter(
    ([e, t]) => t.category === C.TitlesHeadings && t.type === T.Paragraph && !wO.test(e)
  ).map(([e]) => e),
  "qa"
]);
function OO(e, t) {
  const n = [];
  let r;
  for (const [i, s] of e.entries()) {
    if (_d(s) || Wb(s)) {
      r = void 0, n.push(s);
      continue;
    }
    if (!hM(s)) {
      t && vc(s) && t.warn(
        `Verses inside a '${s.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), r ? r.children.push(s) : n.push(s);
      continue;
    }
    if (Md(s) && NO.has(s.marker) && !vc(s)) {
      r = void 0, n.push(s);
      continue;
    }
    if (s.children.length === 0) {
      r ? r.children.push(s) : n.push(s);
      continue;
    }
    iT(s.children, t).forEach((o) => {
      const a = $O(s, o.nodes, i);
      if (!o.verse) {
        if (!a) return;
        r ? r.children.push(a) : n.push(a);
        return;
      }
      r = RO(o.verse), n.push(r), a && r.children.push(a);
    });
  }
  return n;
}
function iT(e, t) {
  const n = [{ nodes: [] }], r = (i) => n[n.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (sT(i)) {
      n.push({ verse: i, nodes: [i] });
      return;
    }
    if (oi(i)) {
      const s = iT(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && r(gm(i, o.nodes)), a.forEach((c) => {
        n.push({ verse: c.verse, nodes: [gm(i, c.nodes)] });
      });
      return;
    }
    t && vc(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), r(i);
  }), n;
}
function gm(e, t) {
  return { ...e, children: t };
}
function sT(e) {
  return Nk(e) && e.number !== "";
}
function vc(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((n) => sT(n) || vc(n)) : !1;
}
function $O(e, t, n) {
  if (t.length !== 0)
    return {
      ...e,
      children: t,
      [Dr]: { ...e[Dr], [Ek.key]: n }
    };
}
function RO(e) {
  return {
    type: lc,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Ak
  };
}
const mm = cT([]), IO = {
  type: wy.getType(),
  version: 1
};
let Pp = [], be, Hi, oT, pn;
function LO(e, t) {
  Pp = [], KO(e), UO(t);
}
function qO(e = 0) {
}
function DO(e, t) {
  be = t ?? il();
  let n;
  return e ? (e.type !== rr && pn?.warn(`This USJ type '${e.type}' didn't match the expected type '${rr}'.`), e.version !== nr && pn?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${nr}'.`
  ), e.content.length > 0 ? (n = hf($r(e.content)), Xo(be) && (n = OO(n, pn))) : n = [mm]) : n = [mm], oT?.(Pp), {
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
function KO(e) {
  e && (Hi = e), e?.addMissingComments && (oT = e.addMissingComments);
}
function UO(e) {
  e && (pn = e);
}
function aT() {
  return qt(be);
}
function BO(e, t) {
  let { marker: n } = e;
  n !== Ho && pn?.warn(`Unexpected book marker '${n}'!`), n = n ?? Ho;
  const { code: r } = e;
  (!r || !Pn.isValidBookCode(r)) && pn?.warn(`Unexpected book code '${r}'!`);
  const i = [];
  be?.markerMode === "editable" || be?.markerMode === "visible" ? i.push(
    un("marker", Ve(n) + " " + r + D)
  ) : be?.hasGutterParaMarkers && i.push(un("marker", Ve(n) + D, !0)), i.push(...t);
  const s = pt(e, rM);
  return ct({
    type: Pn.getType(),
    marker: n,
    code: r ?? "",
    unknownAttributes: s,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Fb
  });
}
function FO(e) {
  let { marker: t } = e;
  t !== rc && pn?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? rc;
  const { number: n, sid: r, altnumber: i, pubnumber: s } = e, o = pt(e, o0);
  let a;
  be?.markerMode === "visible" && (a = !0);
  const c = [
    nn(jn(t, n) ?? "")
  ];
  return be?.markerMode === "editable" && s$(i, s, c), be?.markerMode === "editable" ? ct({
    type: Ln.getType(),
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
    version: yb
  }) : ct({
    type: Dn.getType(),
    marker: t,
    number: n ?? "",
    showMarker: a,
    sid: r,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Kb
  });
}
function zO(e) {
  let { marker: t } = e;
  t !== nc && pn?.warn(`Unexpected verse marker '${t}'!`), t = t ?? nc;
  const { number: n, sid: r, altnumber: i, pubnumber: s } = e, a = (OA(be) ?? Jt).getType(), c = be?.markerMode === "editable" ? ab : wk;
  let l, u;
  be?.markerMode === "editable" ? l = jn(t, n) : be?.markerMode === "visible" && (u = !0);
  const f = pt(e, t0);
  return ct({
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
function jO(e, t = [], n = !1) {
  let { marker: r } = e;
  ze.isValidMarker(r, Hi?.extraValidMarkers) || pn?.warn(`Unexpected char marker '${r}'!`), r = r ?? "";
  const i = [];
  if (be?.markerMode === "editable") {
    const [a] = t;
    zr(a) ? a.text = D + a.text : a && t.unshift(nn(D));
  }
  t.length === 0 && t.push(nn(Pt)), ff(e.marker ?? "", i, n), i.push(...t);
  const s = e.closed === "false", o = pt(e, Q_);
  return s || t$(r, o, i), s || df(e.marker ?? "", i, !1, n), ct({
    type: ze.getType(),
    marker: r,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: sb
  });
}
function cT(e) {
  return {
    type: ci.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Cb
  };
}
function VO(e, t = []) {
  let { marker: n } = e;
  It.isValidMarker(n, Hi?.extraValidMarkers) || pn?.warn(`Unexpected para marker '${n}'!`), n = n ?? zn;
  const r = [];
  if (as(be) && (be?.markerMode === "editable" ? r.push(
    en(n),
    nn(D, Mr, "token")
  ) : (be?.markerMode === "visible" || be?.hasGutterParaMarkers) && r.push(
    un(
      "marker",
      Ve(n) + D,
      be?.hasGutterParaMarkers
    )
  )), r.push(...t), aT()) {
    const s = r.find(
      (o) => !Xs(o) && !(zr(o) && o.text === D)
    );
    zr(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => D.repeat(o.length)));
  }
  const i = pt(e, sM);
  return ct({
    type: It.getType(),
    marker: n,
    unknownAttributes: i,
    children: r,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: jb
  });
}
function wp() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function WO(e, t = []) {
  const n = pt(e, d0);
  return ct({
    ...wp(),
    type: ns.getType(),
    unknownAttributes: n,
    children: t,
    version: Tb
  });
}
function HO(e, t = []) {
  const n = pt(e, HM), r = e.marker ?? Uu, i = [];
  return be?.markerMode === "editable" ? i.push(
    en(r),
    nn(D, Mr, "token")
  ) : (be?.markerMode === "visible" || be?.hasGutterParaMarkers) && i.push(
    un(
      "marker",
      Ve(r) + D,
      be?.hasGutterParaMarkers
    )
  ), i.push(...t), ct({
    ...wp(),
    type: ss.getType(),
    marker: r,
    unknownAttributes: n,
    children: i,
    version: xk
  });
}
function GO(e, t = []) {
  const { marker: n, align: r, colspan: i } = e, s = [], o = n ?? Bu, a = Ib(o, i) ?? o;
  be?.markerMode === "editable" ? s.push(
    en(a),
    nn(D, Mr, "token")
  ) : (be?.markerMode === "visible" || be?.hasGutterParaMarkers) && s.push(
    un(
      "marker",
      Ve(a) + D,
      be?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = pt(
    e,
    JM
  );
  return ct({
    ...wp(),
    type: os.getType(),
    marker: o,
    align: r,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: Ck
  });
}
function JO(e, t) {
  const n = xM(t);
  let r = () => {
  };
  return Hi?.noteCallerOnClick && (r = Hi.noteCallerOnClick), ct({
    type: Mn.getType(),
    caller: e,
    previewText: n,
    onClick: r,
    version: qk
  });
}
function YO(e, t) {
  let { marker: n } = e;
  Je.isValidMarker(n, Hi?.extraValidMarkers) || pn?.warn(`Unexpected note marker '${n}'!`), n = n ?? od;
  const { category: r } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : fp(be?.noteMode), a = pt(e, p_), c = be?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  be?.markerMode === "editable" ? (l = en(n, "opening", !1, c), s || (u = en(n, "closing", !1, c))) : be?.markerMode === "visible" && (l = un("marker", Ve(n) + " "), s || (u = un("marker", ot(n))));
  const f = [];
  let d;
  if (l && f.push(l), be?.markerMode === "editable" && !o)
    d = nn(_t(i), void 0, c), d.detail = zy, f.push(d), i$(r, f), f.push(...t);
  else {
    const p = nn(D, Mr, "token");
    d = JO(i, t), f.push(d, p, ...t.flatMap(XO(p)));
  }
  return u && f.push(u), ct({
    type: Je.getType(),
    marker: n,
    caller: i,
    isCollapsed: o,
    category: r,
    unknownAttributes: a,
    children: f,
    direction: null,
    format: "",
    indent: 0,
    version: Hy
  });
}
function XO(e) {
  return (t) => Ob(t) ? [t] : [t, e];
}
function QO(e) {
  let { marker: t } = e;
  (!t || !sr.isValidMarker(t, Hi?.extraValidMarkers)) && pn?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: n, eid: r } = e, i = pt(e, sd), s = ub(e);
  return ct({
    type: sr.getType(),
    marker: t,
    sid: n,
    eid: r,
    unknownAttributes: i,
    attributeOrder: s,
    version: jy
  });
}
function ym(e, t = []) {
  return {
    type: gt.getType(),
    typedIDs: { [Kt]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function ZO(e, t) {
  const { marker: n } = e, r = e.type, i = pt(e, c0), s = [];
  if (be?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = Gc(
      r,
      n,
      i
    );
    o && s.push(un("marker", o)), a && s.push(un("attribute", a)), s.push(...t), c && s.push(un("attribute", c)), l && s.push(un("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    zr(o) && (o.mode = "token");
  }), ct({
    type: ts.getType(),
    tag: r,
    marker: n,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: kb
  });
}
function e$(e) {
  return {
    type: fr.getType(),
    marker: e,
    text: Ao(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: be?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: ck
  };
}
function en(e, t = "opening", n = !1, r = "normal") {
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
    type: st.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: n,
    style: "",
    version: 1
  };
  return t !== void 0 && (r[Dr] = { textType: t }), r;
}
function un(e, t, n = !1) {
  const r = {
    type: Hn.getType(),
    text: t,
    textType: e,
    version: Nb
  };
  return n && (r[Dr] = { [vd.key]: !0 }), r;
}
function Qo(e, t) {
  return {
    type: Er.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: tb
  };
}
function ff(e, t, n = !1) {
  be?.markerMode === "editable" ? t.push(en(e, "opening", n)) : be?.markerMode === "visible" && t.push(un("marker", Ve(e, n)));
}
function df(e, t, n = !1, r = !1) {
  be?.markerMode === "editable" ? n ? t.push(en("", "selfClosing")) : t.push(en(e, "closing", r)) : be?.markerMode === "visible" && t.push(
    un(
      "marker",
      n ? ot("") : ot(e, r)
    )
  );
}
function t$(e, t, n) {
  if (be?.markerMode !== "editable" || !t) return;
  const r = Qn(t, Ys(e));
  r && n.push(nn(r, "attribute"));
}
function bm(e, t) {
  if (e.type !== "ms" || be?.markerMode !== "editable" && be?.markerMode !== "visible") return;
  const { marker: n, sid: r, eid: i } = e, s = pt(e, sd), o = fb(
    r,
    i,
    s,
    ub(e)
  ), a = Qn(o, fa(n ?? ""));
  if (!a) return;
  const c = D + a;
  be?.markerMode === "editable" ? t.push(nn(c, "attribute")) : t.push(un("attribute", c));
}
function n$(e, t) {
  const n = e.marker ?? "";
  if (be?.markerMode === "editable") {
    const r = [];
    ff(n, r), bm(e, r), df(n, r, !0), t.push(Qo("milestone", r));
  } else
    ff(n, t), bm(e, t), df(n, t, !0);
}
function km(e, t, n) {
  t !== void 0 && n.push(
    Qo(e, [
      en(e, "opening"),
      nn(D + t, "attribute"),
      en(e, "closing")
    ])
  );
}
function r$(e, t) {
  be?.markerMode === "editable" && (km("va", e.altnumber, t), km("vp", e.pubnumber, t));
}
function i$(e, t) {
  e !== void 0 && t.push(
    Qo("cat", [
      en("cat", "opening"),
      nn(D + e, "attribute"),
      en("cat", "closing")
    ])
  );
}
function s$(e, t, n) {
  e !== void 0 && n.push(
    Qo("ca", [
      en("ca", "opening"),
      nn(D + e, "attribute"),
      en("ca", "closing")
    ])
  ), t !== void 0 && n.push(
    Qo("cp", [
      en("cp", "opening"),
      nn(D + t, "attribute")
    ])
  );
}
function xm(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((n) => n - t);
}
function o$(e, t) {
  const n = e.indexOf(t, 0);
  n > -1 && e.splice(n, 1);
}
function Tm(e, t) {
  t.marker === Ki && t.sid !== void 0 && e.push(t.sid), t.marker === ws && t.eid !== void 0 && o$(e, t.eid);
}
function pf(e, t, n = !1, r = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = n ? [ym(o, [...r])] : o, c = e[i];
  Tm(r, c);
  const l = pf(
    e.slice(i + 1, s),
    xm(t, i + 1),
    c.marker === Ki,
    r
  ), u = ym(l, [...r]), f = e[s];
  Tm(r, f);
  const d = pf(
    e.slice(s + 1),
    xm(t, s + 1),
    f.marker === Ki,
    r
  );
  return [...a, u, ...d];
}
function $r(e, t = !1) {
  const n = [], r = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && r.push(nn(aT() ? lO(i) : i));
    else if (!i.type)
      pn?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Pn.getType():
          r.push(BO(i, $r(i.content)));
          break;
        case Ln.getType():
          r.push(FO(i));
          break;
        case Bt.getType():
          be?.hasSpacing || r.push(IO), r.push(zO(i)), r$(i, r);
          break;
        case ze.getType():
          r.push(
            jO(i, $r(i.content, !0), t)
          );
          break;
        case It.getType():
          r.push(VO(i, $r(i.content)));
          break;
        case Je.getType():
          r.push(YO(i, $r(i.content)));
          break;
        case sr.getType():
          Vy(i.marker ?? "") && (n.push(r.length), i.sid !== void 0 && Pp?.push(i.sid)), r.push(QO(i)), n$(i, r);
          break;
        case fr.getType():
          r.push(e$(i.marker ?? ""));
          break;
        case xb:
          r.push(WO(i, $r(i.content)));
          break;
        case kk:
          r.push(HO(i, $r(i.content)));
          break;
        case vk:
          r.push(GO(i, $r(i.content)));
          break;
        default:
          pn?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), r.push(ZO(i, $r(i.content)));
      }
  }), pf(r, n);
}
function hf(e) {
  const t = e.findIndex(
    (r) => _d(r) || Wb(r) || Md(r) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    h0(r)
  );
  if (t >= 0) {
    const r = hf(e.slice(0, t)), i = e[t], s = hf(e.slice(t + 1));
    return [...r, i, ...s];
  } else if (e.some((r) => "text" in r && "mode" in r || Nk(r)))
    return [cT(e)];
  return e;
}
const ar = {
  initialize: LO,
  reset: qO,
  serializeEditorState: DO
};
function lT(e) {
  if (e && !w(e)) {
    if (v(e)) return e;
    if (A(e))
      for (const t of e.getChildren()) {
        const n = lT(t);
        if (n) return n;
      }
  }
}
function a$() {
  const e = N();
  if (!E(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), n = e.anchor.offset;
    if ((v(t) && !w(t) ? ji(t) : void 0) && v(t)) {
      const i = Re(" ");
      if (n <= 0) t.insertBefore(i);
      else if (n >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(n);
        o.insertAfter(i);
      }
      Us(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = lT(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(D) ? D : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return v(t) && t.getTextContent()[n] === " " ? (t.select(n + 1, n + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of uT(e)) {
    if (!ji(t)) continue;
    Us(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const n = t.getLatest(), r = n.getTextContent();
    r.startsWith(D) && n.setTextContent(r.slice(D.length));
  }
  return !0;
}
function uT(e) {
  const [t, n] = Hf(e), [r, i] = e.isBackward() ? [n, t] : [t, n], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!v(a) || w(a) || de(a, ke) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? r : 0, f = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= f) return;
    const d = a.splitText(u, f), p = d.length === 3 ? d[1] : f === l ? d[d.length - 1] : d[0];
    p && o.push(p);
  }), o;
}
function fT(e) {
  let t = e;
  for (; U(t) || ue(t); ) t = t.getParent();
  return t;
}
function dT(e) {
  const t = fT(e.getParent());
  return wt(t) ? t : void 0;
}
function c$() {
  const e = N();
  if (!E(e)) return !1;
  const t = e.focus.getNode();
  return ji(t) ? !!dT(t) : !1;
}
function pT(e) {
  const t = Re(""), n = e.getNode(), r = e.offset;
  if (v(n))
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
    if (U(o)) Us(t, { renderGlyphs: !0 });
    else if (!ue(o) || !l$(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function l$(e, t) {
  const n = e.getNextSiblings();
  if (!e.getPreviousSibling())
    return t.insertBefore(e), !0;
  if (n.length === 0)
    return t.insertAfter(e), !0;
  const r = N();
  if (!E(r)) return !1;
  const i = t.insertNewAfter(r, !1);
  return i ? (i.append(...n), t.insertAfter(e), !0) : !1;
}
function hT(e) {
  const t = e.anchor.getNode();
  if (w(t) && !jd(t, e.anchor.offset)) {
    const n = t.getParent();
    if (U(n) && t.is(n.getLastChild())) {
      n.selectNext(0, 0);
      const r = N();
      return E(r) && r.isCollapsed() ? r : void 0;
    }
  }
  return e;
}
function gT() {
  const e = N();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = hT(e);
  if (!t) return !1;
  const n = t.anchor.getNode();
  if (!v(n) || w(n) || !ji(n)) return !1;
  const r = dT(n);
  if (!r) return !1;
  const { moving: i } = pT(t.anchor), s = r.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; ue(o); ) o = o.getFirstChild() ?? void 0;
  return U(o) ? Zc(o) : s.select(0, 0), !0;
}
const mT = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Hb(Ce().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = N(), t = ek(e), n = Jd(t);
      let r, i = !1;
      if (!n)
        r = "1";
      else {
        const o = n.getNumber();
        r = vM(0, o);
        const a = RE(n);
        if (a) {
          const c = a.getNumber();
          i = r === c || CM(c) && wd(parseInt(r, 10), c);
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
function gf(e, t) {
  return Je.isValidMarker(e, t) || !!mT[e] || It.isValidMarker(e, t) || ze.isValidMarker(e, t);
}
function u$(e, t) {
  return ze.isNoteContentMarker(e) ? !1 : ze.isValidMarker(e, t);
}
function yT(e, t, n, r, i, s) {
  const o = ix(
    e,
    void 0,
    void 0,
    t,
    r ?? il(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (n.current = o.getKey()), o?.getKey();
}
function mf(e, t, n, r, i, s, o) {
  if (Je.isValidMarker(e, r?.extraValidMarkers)) {
    let l;
    return { action: (f) => {
      f.editor.update(() => {
        l = yT(
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
  const a = m$(e, r?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = N();
      E(u) && (Vd(u), l.noteText = u.getTextContent());
      const { content: f, highlightInserted: d } = a.action(l), p = dg(f, ar, n), h = Ll(p);
      if (E(u)) {
        const g = u.anchor.getNode(), m = g.getParent(), y = ji(g), k = u.anchor.key === u.focus.key;
        if (U(h) && y && k && !hu(h, o))
          p$(
            u,
            h,
            g,
            n?.markerMode === "editable"
          );
        else if (U(h) && !k && !hu(h, o) && h$(u))
          g$(u, h, n?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          y$(
            u,
            () => Ll(p)
          );
        else if (A(h) && !h.isInline()) {
          const x = u.insertParagraph();
          if (x) {
            const _ = x.getChildren();
            h.append(..._), x.replace(h), wt(h) && no(h) || h.selectStart();
          }
        } else if (U(h) && v(g) && !w(g) && U(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        hu(h, o)) {
          const x = g.getParent();
          if (U(x)) {
            const _ = u.anchor.offset;
            if (_ === 0) g.insertBefore(h);
            else if (_ >= g.getTextContentSize()) g.insertAfter(h);
            else {
              const [F] = g.splitText(_);
              F.insertAfter(h);
            }
            h.getChildren().forEach((F) => {
              w(F) && F.setNested(!0);
            });
            const S = h.getChildren().find((F) => v(F) && !w(F));
            S && v(S) ? S.select(
              S.getTextContentSize(),
              S.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (v(g) && !w(g) && u.isCollapsed() && (q(m) || U(m) && q(m.getParent()))) {
          const x = U(m) ? m : void 0, _ = x ? f$(g, u.anchor.offset) : [];
          let F = (x ?? g).insertAfter(h);
          if (mn(h)) {
            const $ = {
              ...n || il(),
              markerMode: "hidden"
            }, ne = dg(
              f,
              ar,
              $
            ), fe = Ll(ne);
            F = F.insertAfter(fe);
          }
          if (_.length > 0 && x) {
            const $ = Cc(x).append(..._);
            F.insertAfter($), x.isEmpty() && x.remove();
          } else v(F.getNextSibling()) || F.insertAfter(zi());
          A(F) && F.selectEnd();
        } else if (u.insertNodes([h]), E$(h), d) {
          const x = Ey();
          x.add(h.getKey()), Fn(x);
        } else if (U(h)) {
          const x = h.getChildren().find((_) => v(_) && !w(_));
          x && v(x) ? x.select(
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
function f$(e, t) {
  const n = e.getTextContentSize();
  let r;
  return t <= 0 ? r = e : t >= n ? r = e.getNextSibling() : r = e.splitText(t)[1] ?? e.getNextSibling(), r ? [r, ...r.getNextSiblings()] : [];
}
function hu(e, t) {
  return ((t ?? uc).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function d$(e, t) {
  t && e.getChildren().forEach((i) => {
    w(i) && i.setNested(!0);
  }), e.getChildren().some((i) => w(i) && i.getMarkerSyntax() === "closing") || e.append($t(e.getMarker(), "closing", t));
  const r = e.getUnknownAttributes();
  if (r?.closed === "false") {
    const i = { ...r };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function p$(e, t, n, r) {
  let i = t;
  if (e.anchor.type === "element" && U(n)) {
    const o = n.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : n.append(t);
  } else if (e.isCollapsed() || !v(n)) {
    const o = e.anchor.offset;
    if (v(n) && o > 0 && o < n.getTextContentSize()) {
      const [a] = n.splitText(o);
      a.insertAfter(t);
    } else v(n) && o >= n.getTextContentSize() ? n.insertAfter(t) : n.insertBefore(t);
  } else {
    const [o, a] = Vs(e);
    let c = n;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (Us(i, { renderGlyphs: r }), i !== t) {
    i.insertBefore(t), v(i) && !i.getTextContent().startsWith(D) && i.setTextContent(D + i.getTextContent());
    const o = t.getChildren().find((a) => v(a) && !w(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => v(o) && !w(o));
  v(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function h$(e) {
  let t, n = !1;
  for (const r of e.getNodes()) {
    if (w(r) || U(r)) continue;
    if (!v(r) || r.getType() !== st.getType() || de(r, ke) === "attribute") return !1;
    const i = nE(r);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    ji(r) && (n = !0);
  }
  return n;
}
function g$(e, t, n) {
  const r = uT(e);
  if (r.length === 0) return;
  r.forEach((a) => {
    if (!ji(a)) return;
    Us(a, { renderGlyphs: n });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(D) && c.setTextContent(l.slice(D.length));
  });
  const i = r[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(D) || i.setTextContent(D + i.getTextContent());
  const s = t.getChildren().find((a) => v(a) && !w(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  r.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function m$(e, t) {
  let n = mT[e];
  return n || (It.isValidMarker(e, t) ? n = {
    action: () => ({ content: [{ type: It.getType(), marker: e, content: [] }] })
  } : ze.isValidMarker(e, t) && (n = {
    action: () => {
      const r = { type: ze.getType(), marker: e };
      return (ze.isValidFootnoteMarker(e) || ze.isValidCrossReferenceMarker(e)) && (r.closed = "false"), { content: [r] };
    }
  })), n;
}
function y$(e, t) {
  const n = e.getNodes(), [r, i] = Vs(e);
  let s;
  n.forEach((o, a) => {
    if (A(s) && s.isParentOf(o))
      return;
    const c = bT(
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
    s || (s = t(), c.insertBefore(s), l = !0, U(s) && s.getChildren().some((f) => w(f) && f.getMarkerSyntax() === "opening") && d$(s, U(s.getParent()))), k$(c, s, l);
  }), (v(s) || A(s)) && s.selectEnd();
}
function Vs(e) {
  const t = e.anchor.offset, n = e.focus.offset;
  return e.isBackward() ? [n, t] : [t, n];
}
function Np(e) {
  return ue(e) || q(e) || q(e.getParent());
}
function bT(e, t, n, r, i) {
  if (!Np(e)) {
    if (v(e))
      return b$(e, t, n, r, i);
    if (A(e) && e.isInline())
      return e;
  }
}
function b$(e, t, n, r, i) {
  const s = e.getTextContentSize(), o = t ? r : 0, a = n ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function k$(e, t, n) {
  if (v(t)) {
    const r = yf(e, t);
    t.setTextContent(r), e.remove();
  } else if (A(t)) {
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
    yf(e, t), n && U(t) && t.getChildren().some((s) => w(s)) && v(e) && !w(e) && !e.getTextContent().startsWith(D) && e.setTextContent(D + e.getTextContent());
  }
}
function yf(e, t) {
  let n = e.getTextContent();
  if (v(e) && t.isInline() && n.startsWith(" ") && n.trimStart() !== "") {
    n = n.trimStart(), e.setTextContent(n);
    const r = t.getPreviousSibling();
    Hd(r), v(r) || t.insertBefore(Re(" "));
  }
  return n;
}
function kT(e, t, n) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), f = e.anchor.offset, d = Gi(u, t);
    if (!d) return !1;
    const p = v(u) ? u.getTextContentSize() : 0;
    if (vm(d, n), v(u) && u.isAttached()) {
      const h = u.getTextContentSize(), g = Math.max(p - h, 0), m = Math.max(0, Math.min(f - g, h)), y = N();
      E(y) && y.setTextNodeRange(u, m, u, m);
    }
    return !0;
  }
  const r = e.getNodes(), i = e.isBackward(), [s, o] = Vs(e);
  if (!$p(r, t, s, o)) return !1;
  const a = Op(r, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const f = Gi(u, t);
    if (!f || c.has(f.getKey())) return;
    c.add(f.getKey());
    const d = CT(f, a);
    d && (vm(d, n), l = !0);
  }), ST(a, i), l;
}
function vm(e, t) {
  e.getChildren().forEach((r) => {
    yn(r) && r.remove();
  });
  const n = e.getChildren();
  if (n.length === 0 || e.getTextContent() === Pt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && n.forEach((r) => {
    const i = r.getTextContent();
    v(r) && i.startsWith(D) && r.setTextContent(i.slice(D.length));
  }), Cu(e);
}
function Op(e, t, n) {
  const r = [];
  return e.forEach((i, s) => {
    const o = bT(
      i,
      s === 0,
      s === e.length - 1,
      t,
      n
    );
    v(o) && r.push(o);
  }), r;
}
function Gi(e, t) {
  let n = e, r;
  for (; n && !wt(n); ) {
    if (q(n)) return;
    !r && U(n) && (t === void 0 || n.getMarker() === t) && (r = n), n = n.getParent();
  }
  return r;
}
function xT(e) {
  const t = Ze(
    e,
    (n) => q(n) || wt(n)
  );
  return q(t);
}
function TT(e) {
  return e.filter(
    (t) => !Np(t) && (v(t) || A(t) && t.isInline())
  );
}
function x$(e, t, n) {
  const r = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!v(i) || Np(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? n : o;
    a === 0 && c === o && r.add(i.getKey());
  }), r;
}
function T$(e, t, n) {
  return e.getChildren().some(
    (r) => A(r) && t.some((i) => r.isParentOf(i)) && !vT(r, n)
  );
}
function $p(e, t, n, r, i) {
  const s = TT(e), o = x$(e, n, r), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Gi(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !T$(l, s, o);
  });
}
function vT(e, t) {
  return e.getAllTextNodes().every((n) => t.has(n.getKey()) || yn(n));
}
function CT(e, t) {
  const n = new Set(t.map((l) => l.getKey())), r = e.getChildren(), i = [];
  for (const [l, u] of r.entries())
    if (n.has(u.getKey()))
      i.push(l);
    else if (A(u) && t.some((f) => u.isParentOf(f))) {
      if (!vT(u, n)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && yn(r[s - 1]) && (s -= 1), o < r.length - 1 && yn(r[o + 1]) && (o += 1), s === 0 && o === r.length - 1) return e;
  const a = r.slice(o + 1);
  a.length > 0 && e.insertAfter(Cc(e).append(...a));
  const c = r.slice(0, s);
  return c.length > 0 && e.insertBefore(Cc(e).append(...c)), e;
}
function Cc(e) {
  return AS(e);
}
function ST(e, t) {
  const n = N(), r = e[0], i = e[e.length - 1];
  if (!E(n) || !r.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? n.setTextNodeRange(i, s, r, 0) : n.setTextNodeRange(r, 0, i, s);
}
function v$(e, t, n) {
  if (e.isCollapsed()) {
    const l = Gi(e.anchor.getNode(), n);
    return !l || l.getMarker() === t ? !1 : (Yh(l, t), !0);
  }
  const r = e.getNodes(), [i, s] = Vs(e);
  if (!$p(r, n, i, s, t)) return !1;
  const o = Op(r, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = Gi(l, n);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const f = CT(u, o);
    f && (Yh(f, t), c = !0);
  }), c;
}
function C$(e, t, n, r) {
  if (e.isCollapsed()) return !1;
  const i = n?.filter(
    (m) => m !== t
  ), s = e.getNodes(), [o, a] = Vs(e);
  if (!!!i?.some(
    (m) => $p(s, m, o, a)
  ) && !S$(s, t)) return !1;
  let l = !1;
  i?.forEach((m) => {
    const y = N();
    E(y) && kT(y, m, r) && (l = !0);
  });
  const u = N();
  if (!E(u)) return l;
  const f = u.isBackward(), [d, p] = Vs(u), h = Op(
    u.getNodes(),
    d,
    p
  );
  if (h.length === 0) return l;
  const g = h.filter(
    (m) => !xT(m) && !Gi(m, t)
  );
  return g.length > 0 && (_$(g).forEach((m) => M$(m, t)), l = !0), ST(h, f), l;
}
function S$(e, t) {
  return TT(e).some(
    (n) => !xT(n) && !Gi(n, t)
  );
}
function _$(e) {
  const t = [];
  let n;
  return e.forEach((r) => {
    const i = n?.[n.length - 1];
    n && i?.getNextSibling()?.is(r) ? n.push(r) : (n = [r], t.push(n));
  }), t;
}
function M$(e, t) {
  const n = e[0].getPreviousSibling(), r = e[e.length - 1].getNextSibling(), i = [n, r].find(
    (a) => U(a) && a.getMarker() === t
  ), s = i ? Cc(i) : Ur(t);
  e[0].insertBefore(s), s.append(...e), i === n || yf(e[0], s);
}
function E$(e) {
  Ee(e) && (Hd(e.getPreviousSibling()), $k(e.getNextSibling()));
}
const _T = {
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
}, Cm = "psc-active-text", $a = "psc-empty-text";
function A$({ viewOptions: e }) {
  const [t] = ve(), n = te(void 0), r = e?.hasActiveTextFocusBox ?? !1;
  return H(() => {
    if (!r) return;
    function i(o) {
      n.current && t.getElementByKey(n.current)?.classList.remove(Cm), n.current = o, o && t.getElementByKey(o)?.classList.add(Cm);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        Uc,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${$a}`);
          if (!c) return !1;
          const l = Zi(c);
          if (!Ee(l)) return !1;
          const u = l.getParent();
          if (!A(u)) return !1;
          const f = l.getIndexWithinParent() + 1;
          return u.select(f, f), !1;
        },
        Qt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const f = gu(), d = P$(), p = [], h = [];
          return Ce().getChildren().forEach((g) => {
            if (!A(g)) return;
            const { emptyKeys: m, nonEmptyKeys: y } = N$(g);
            p.push(...m), h.push(...y);
          }), { newActiveKey: f, activeVerseKey: d, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== n.current && i(a), l.forEach((f) => {
          f === c ? t.getElementByKey(f)?.classList.remove($a) : t.getElementByKey(f)?.classList.add($a);
        }), u.forEach((f) => t.getElementByKey(f)?.classList.remove($a));
      }),
      t.registerCommand(
        Xf,
        () => (i(void 0), !1),
        Qt
      ),
      t.registerCommand(
        PS,
        () => {
          const o = t.getEditorState().read(gu);
          return o !== n.current && i(o), !1;
        },
        Qt
      )
    ];
    return i(t.getEditorState().read(gu)), tt(...s);
  }, [t, r]), null;
}
function gu() {
  return w$(N() ?? void 0)?.getKey();
}
function P$() {
  const e = N();
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
    Ee(s[a]) && (o = s[a].getKey());
  return o;
}
function w$(e) {
  if (E(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function N$(e) {
  const t = e.getChildren(), n = [], r = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!Ee(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (Ee(c)) break;
      if (!(Rt(c) || w(c)) && c.getTextContent().replaceAll(Uo, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? r : n).push(s.getKey());
  }
  return { emptyKeys: n, nonEmptyKeys: r };
}
function bf(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function MT(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const n = e.getRootElement()?.ownerDocument.getSelection(), r = n?.anchorNode, i = n?.focusNode;
  return !!r && !!i && !Sy(e, r, i);
}
function ET(e, t) {
  return e.length <= t ? e : e.slice(0, Rp(e, t));
}
function Rp(e, t) {
  if (t >= e.length) return e.length;
  let n = 0;
  for (const { index: r, segment: i } of RS(e)) {
    if (r + i.length > t) break;
    n = r + i.length;
  }
  return n;
}
const O$ = 16;
function $$(e, { $isHidden: t, $measure: n } = {}) {
  const r = (k) => t ? Ip(k, t).length : k.getTextContent().length;
  n ??= r;
  const i = N();
  if (!E(i) || i.isCollapsed() || n(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = Sc(s), l = Sc(o), u = i.getNodes(), f = new Map(u.map((k) => [k.getKey(), L$(k)])), d = u.length > 0 ? f.get(u[0].getKey()) : void 0, p = d && R$(s, d) ? d : void 0, h = (k) => {
    const x = k > 0 ? I$(u, f, p, c, l, k, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), x ? i.focus.set(x.node.getKey(), x.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!x;
  };
  let g = Math.min(e, r(i));
  if (h(g) && n(i) <= e) return !0;
  let m = 0, y = 0;
  g -= 1;
  for (let k = 0; k < O$ && m <= g; k++) {
    const x = Math.floor((m + g) / 2);
    h(x) && n(i) <= e ? (y = x, m = x + 1) : g = x - 1;
  }
  return h(y), !0;
}
function kf(e) {
  return e.isToken() || ya(e) || $e(e.getParent());
}
function R$(e, t) {
  const n = A(t) ? t.getAllTextNodes()[0] : void 0;
  return !!n && Zt(n.getKey(), 0, "text").isBefore(e);
}
function I$(e, t, n, r, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, u, f;
  const d = /* @__PURE__ */ new Map(), p = (g) => {
    const m = t.get(g.getKey());
    return m && n?.is(m) ? void 0 : m;
  }, h = (g) => {
    let m = f ? f.endBefore : g;
    for (; ; ) {
      const y = q$(m, e, r);
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
      if (l = !1, v(m)) {
        const k = g === 0 ? r : 0, x = g === a ? i : m.getTextContentSize(), _ = x - k, S = kf(m);
        if (S && c + _ > s) return h(u);
        if (!S && c + _ >= s) {
          const F = Rp(m.getTextContent(), k + (s - c));
          return h({ node: m, offset: Math.max(k, F) });
        }
        c += _, u = { node: m, offset: x };
      } else if (bn(m) || Qi(m)) {
        const k = m.getTextContentSize();
        if (c + k > s) return h(u);
        c += k;
      }
    }
  }
  return h(u);
}
function L$(e) {
  let t;
  for (let n = e; n; n = n.getParent())
    (q(n) || bp(n)) && (t = n);
  return t;
}
function q$(e, t, n) {
  if (!e) return e;
  const r = Ze(e.node, (m) => A(m) && !m.isInline()), i = A(r) ? r.getAllTextNodes() : [e.node], s = i.findIndex((m) => m.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let m = o; m <= a; m++)
    l.push(c.length), c += i[m].getTextContent();
  const u = l[s - o], f = u + e.offset, d = Rp(c, f);
  if (d === f) return e;
  const p = (m) => t[0]?.is(m) ?? !1;
  if (kf(e.node)) return { ...e, offset: p(e.node) ? n : 0 };
  if (d >= u) {
    const m = d - u;
    return m >= (p(e.node) ? n : 0) ? { ...e, offset: m } : void 0;
  }
  const h = s > o ? i[s - 1] : void 0;
  if (!h || !t.some((m) => m.is(h))) return;
  if (kf(h))
    return { node: h, offset: p(h) ? n : 0 };
  const g = d - l[0];
  return g >= (p(h) ? n : 0) ? { node: h, offset: g } : void 0;
}
function Ip(e, t) {
  const n = e.getNodes(), r = n.length - 1, [i, s] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], o = r === 0 && i.type === "element" && s.type === "element" && i.offset !== s.offset;
  let a = "", c = !0;
  return n.forEach((l, u) => {
    if (!t(l)) {
      if (A(l) && !l.isInline()) {
        c || (a += `
`), c = !l.isEmpty();
        return;
      }
      if (c = !1, v(l)) {
        const f = l.getTextContent();
        o ? a += f : a += f.slice(
          u === 0 ? Sc(i) : 0,
          u === r ? Sc(s) : f.length
        );
      } else (bn(l) || Qi(l)) && (u !== r || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function xf(e) {
  const t = e.getParent();
  return !!t && Ze(t, (n) => q(n) && !!n.getIsCollapsed()) !== null;
}
function AT(e) {
  const t = /* @__PURE__ */ new Map(), n = (i) => {
    Lt(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (n(i), A(i)) for (const { node: s } of es(i)) n(s);
  let r = 0;
  for (const i of t.values()) r += i;
  return r;
}
function D$(e) {
  return e.getNodes().some(
    (t) => bn(t) || q(t) || Ee(t) || at(t) || bp(t)
  );
}
function Sc(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return A(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const Gn = String.raw`\w-`, PT = "a-z0-9", K$ = `[a-z][${PT}]*`, wT = new RegExp(
  String.raw`^\\(\+?[${Gn}]+)[ \u00A0]$`
), ro = new RegExp(String.raw`^\\(\+?[${Gn}]+)$`), U$ = new RegExp(String.raw`^\\\+?[${Gn}]*\*$`), B$ = new RegExp(
  String.raw`^\\(\+?[${Gn}]+)(?:[ \u00A0]|$)`
), F$ = new RegExp(
  String.raw`^\\(\+?)([${Gn}]+)`
), NT = new RegExp(
  String.raw`^(?:[${Gn}]+[*\\]?|[*\\])$`
), z$ = new RegExp(
  String.raw`\\\+?[${Gn}]+(?:\\?\*|[ \u00A0])`
), OT = new RegExp(
  String.raw`\\\+?[${Gn}]*$`
), j$ = new RegExp(
  String.raw`^\\(${K$})( |$)`
), V$ = new RegExp(
  String.raw`\\[${PT}+*]*$`,
  "i"
);
function $T(e) {
  const t = e.getParent();
  if (!q(t) || t.getIsCollapsed() !== !1 || !td(t.getMarker())?.includes("caller")) return !1;
  const n = t.getChildren();
  let r = 0;
  for (; r < n.length; ) {
    const i = n[r];
    if (!w(i) || i.getMarkerSyntax() !== "opening") break;
    r++;
  }
  return e.is(n[r]);
}
const _c = "usfm:", RT = "usfmopen", IT = "usfmclosed";
function W$(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const H$ = new RegExp(
  [_c, RT, IT].map(W$).join("|")
), G$ = "\uFEFF", J$ = /^usfm_(.+)$/;
function Y$(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function X$(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, n) => String.fromCharCode(Number.parseInt(n, 16))
  );
}
function Q$(e) {
  return e.startsWith(_c) ? X$(e.slice(_c.length)).replace(/\r\n?|\n/g, " ") : "";
}
function LT(e) {
  for (const t of e.classList) {
    const n = J$.exec(t);
    if (n) return n[1];
  }
}
function Z$(e) {
  const t = LT(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function eR(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let n = t.nextNode(); n; n = t.nextNode())
    if ((n.nodeValue ?? "").startsWith(_c)) return !0;
  for (const n of e.querySelectorAll("*")) {
    const { classList: r } = n;
    if (!(!r.contains(RT) && !r.contains(IT)) && LT(n) !== void 0)
      return !0;
  }
  return !1;
}
function qT(e, t, n) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || n.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    n.push(Q$(e.nodeValue ?? ""));
    return;
  }
  if (!Y$(e)) return;
  const { classList: r } = e, i = (u) => e.childNodes.forEach((f) => qT(f, u, n));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? Z$(e) : void 0, c = a !== void 0 && r.contains("usfmopen"), l = a !== void 0 && r.contains("usfmclosed");
  o && n.push(`
`), (c || l) && n.push(`\\${a} `), i(!1), l && n.push(`\\${a}*`), o && n.push(`
`);
}
function tR(e) {
  if (!H$.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((r) => r.remove()), !eR(t)) return;
  const n = [];
  return t.childNodes.forEach((r) => qT(r, !1, n)), n.join("").replaceAll(G$, "").replaceAll(D, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function nR(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const n = de(e, ke);
  if (n === "attribute" || n === Mr || $T(e)) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if ($e(o) || et(o)) return;
  const r = t.startsWith(D) && U(e.getParent()), i = r ? t.slice(1) : t, s = (r ? D : "") + i.replace(/ (?=[ \u00A0])/g, D).replace(new RegExp("(?<=\\u00A0) ", "g"), D);
  s !== t && e.setTextContent(s);
}
function rR(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((n) => n.remove()), t.querySelectorAll("br").forEach((n) => n.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((n) => n.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function iR(e, t) {
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
function Tf(e, t) {
  const n = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!n) return;
  const r = (a) => a.replace(/\r\n?/g, `
`), i = r(n.getData("text/plain")), s = n.getData("text/html"), o = s ? tR(s) : void 0;
  return {
    text: o ? r(o) : i || (s ? r(rR(s)) : ""),
    isInternal: iR(
      n.getData("application/x-lexical-editor"),
      t
    )
  };
}
const Sm = String.raw`\\(?:\+?[${Gn}]+\*?|\*)`, sR = new RegExp(
  String.raw`(?<=${Sm})\u00A0|\u00A0(?=${Sm})`,
  "g"
);
function Lp(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(sR, " ").replaceAll(D, "~");
}
const DT = new RegExp(
  String.raw`\\c(?![${Gn}])[ \u00A0]*[^\s\\]*`,
  "g"
), KT = new RegExp(String.raw`\\id(?![${Gn}])[^\n\\]*`, "g"), oR = new RegExp(
  String.raw`^(?:${DT.source}|${KT.source})`
);
function qp(e) {
  return e.split(`
`).map((t) => {
    const n = t.replace(DT, "").replace(KT, "");
    return oR.test(t) && n.trim() === "" && t.trim() !== "" ? void 0 : n;
  }).filter((t) => t !== void 0).join(`
`);
}
function vf(e) {
  if (v(e) && de(e, ke) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Fe(t)) return !0;
  return !1;
}
function aR(e) {
  return vf(e.anchor.getNode()) || vf(e.focus.getNode());
}
function cR(e) {
  const { anchor: t, focus: n } = e;
  return t.key === n.key && vf(t.getNode());
}
function lR(e, t) {
  const r = cR(e) ? t : Lp(qp(t));
  r && e.insertText(r.replace(/\n/g, " "));
}
function uR(e, t = !1, n = () => {
}) {
  const r = Tf(e, Ft()._config.namespace);
  if (!r) return !1;
  const i = N(), s = E(i) && aR(i);
  if (!s && r.isInternal || t && E(i) && Os(i))
    return !1;
  const { text: o } = r;
  if (!o || !E(i)) return !1;
  if (e?.preventDefault(), s)
    return lR(i, o), !0;
  const a = Lp(qp(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  n(), i.isCollapsed() || i.removeText();
  const l = Ft();
  return c.forEach((u, f) => {
    if (f > 0 && l.dispatchCommand(Ko, void 0), u === "") return;
    const d = N();
    E(d) && d.insertText(u);
  }), !0;
}
function fR(e) {
  if (e.getTextContent() !== D) return !1;
  const t = e.getParent();
  return q(t) ? !Lt(e.getPreviousSibling()) : !1;
}
function dR(e, t) {
  if (t || e.getTextContent() !== D) return "";
  const n = e.getParent();
  if (!q(n) || !Lt(e.getPreviousSibling())) return "";
  const r = n.getCategory();
  return r ? `\\cat ${r}\\cat*` : "";
}
function pR(e) {
  const t = e.getParent();
  return (q(t) ? t.getCaller() : void 0) || Bo;
}
function hR(e) {
  const t = e.getParent();
  return !t || ui(t) === void 0;
}
function Dp(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const n = t[0], r = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Hf(e);
  let l = "", u = !0;
  for (const f of t) {
    if (A(f) && !f.isInline()) {
      !u && hR(f) && (l += `
`), u = !f.isEmpty();
      continue;
    }
    if (u = !1, Lt(f))
      (f !== r || !e.isCollapsed()) && (l += (f === n ? "" : " ") + pR(f));
    else if (v(f)) {
      let d = f.getTextContent();
      f === n ? f === r ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (d = a < c ? d.slice(a, c) : d.slice(c, a)) : d = o ? d.slice(a) : d.slice(c) : f === r && (d = o ? d.slice(0, c) : d.slice(0, a)), l += fR(f) ? "" : d.replaceAll(D, " ") + dR(f, f === r);
    } else (bn(f) || Qi(f)) && (f !== r || !e.isCollapsed()) && (l += f.getTextContent().replaceAll(D, " "));
  }
  return l;
}
function UT(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function gR(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (n) => Ie(n) || $e(n)
    )
  );
}
function mR(e) {
  const t = N();
  if (!E(t) || t.isCollapsed()) return;
  const n = Dp(t), r = {
    "text/plain": n,
    "text/html": UT(n)
  };
  if (ul() || gR(t)) return r;
  const i = LS(e);
  return i && (r["application/x-lexical-editor"] = i), r;
}
function _m(e, t, n, r) {
  const i = N();
  if (!E(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !Rx();
  const s = mR(t);
  return s ? (r !== void 0 && delete s["application/x-lexical-editor"], BT(e, t, i, s, n, r)) : !1;
}
function BT(e, t, n, r, i, s) {
  const o = bf(s);
  if (o !== void 0 && MT(t, e)) return !1;
  const a = r["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), Cf(e, t, { "text/plain": ET(a, o) })) : Cf(
    e,
    t,
    r,
    i && t.isEditable() ? () => n.removeText() : void 0
  );
}
function Cf(e, t, n, r) {
  const i = !n["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || IS(t, null, n), r?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(n)) e.clipboardData.setData(s, o);
  return r?.(), !0;
}
function Sf(e, t) {
  const n = ol(t);
  if (!n?.end) return;
  const r = yR(e, t);
  if (r)
    return r.state.read(
      () => {
        const i = sl(n, r.standardViewOptions);
        return i ? Dp(i) : void 0;
      },
      { editor: r.editor }
    );
}
const mu = /* @__PURE__ */ new WeakMap();
function yR(e, t) {
  const n = e.getEditorState();
  if (mu.has(n)) {
    const i = mu.get(n);
    if (!i || i.viewOptions === t) return i;
  }
  const r = bR(n, t);
  return mu.set(n, r), r;
}
function bR(e, t) {
  const n = sp(np);
  if (!n) return;
  const r = _s.deserializeEditorState(e, t);
  if (!r) return;
  const i = Zf({
    namespace: "markers-view-copy",
    nodes: [gt, ...ll],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    ar.serializeEditorState(r, n)
  );
  return { viewOptions: t, standardViewOptions: n, editor: i, state: s };
}
function kR({
  viewOptions: e,
  copyLimit: t
}) {
  const [n] = ve();
  return H(() => {
    const r = (i, s) => {
      const o = N();
      if (!E(o) || o.isCollapsed()) return !1;
      const a = Sf(n, e);
      return a === void 0 ? !1 : BT(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        n,
        o,
        { "text/plain": a, "text/html": UT(a) },
        s,
        t
      );
    };
    return tt(
      n.registerCommand(Is, (i) => r(i, !1), Ge),
      n.registerCommand(ir, (i) => r(i, !0), Ge)
    );
  }, [n, e, t]), null;
}
const Mm = /* @__PURE__ */ new WeakMap();
function xR({
  limit: e,
  viewOptions: t
}) {
  const [n] = ve(), r = te(bf(e)), i = te(t), s = te(!1), o = te(void 0);
  return H(() => {
    r.current = bf(e), i.current = t, o.current?.();
  }, [e, t]), H(() => {
    let a, c;
    const l = (y) => {
      const k = r.current;
      if (k === void 0) return;
      const x = Mm.get(y);
      if (y.defaultPrevented && x === void 0) return;
      const _ = n.getRootElement();
      if (!_) return;
      const S = _.ownerDocument.getSelection();
      if (!S || !CR(S, _)) return;
      y.preventDefault();
      const F = ET(
        x ?? S.toString().replaceAll(D, " "),
        k
      );
      Mm.set(y, F);
      const $ = y.clipboardData;
      if ($) {
        if (!F) {
          x !== void 0 && $.clearData();
          return;
        }
        $.setData("text/plain", F);
      }
    }, u = (y) => {
      r.current !== void 0 && wS(y, "a", { ctrlKey: !Ls, metaKey: Ls }) && (_R(c?.activeElement, n.getRootElement()) || y.preventDefault());
    }, f = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", u, !0), c = void 0;
    }, d = () => {
      const y = r.current === void 0 ? void 0 : a;
      y !== c && (f(), c = y, c?.addEventListener("copy", l), c?.addEventListener("keydown", u, !0));
    };
    o.current = d;
    const p = (y) => (y?.preventDefault(), !0), h = (y) => {
      const k = r.current;
      if (k === void 0 || (s.current = !1, MT(n, y))) return !1;
      if (k <= 0) return p(y);
      const x = N();
      if (Dc(x))
        return x.getTextContent().length + AT(x.getNodes()) <= k ? !1 : p(y);
      if (!E(x) || x.isCollapsed()) return !1;
      const _ = TR(n, i.current);
      return _.$size(x) <= k ? !1 : ($$(k, _.options), x.isCollapsed() ? p(y) : (n.isEditable() || Ay(() => vR(n)), s.current = !0, !1));
    }, g = (y, k) => {
      if (r.current === void 0 || !s.current) return !1;
      s.current = !1;
      const x = N();
      if (!E(x) || x.isCollapsed()) return !1;
      const _ = k && n.isEditable() && !D$(x);
      return Cf(
        y && typeof y == "object" && "clipboardData" in y ? y : null,
        n,
        { "text/plain": Ip(x, xf) },
        _ ? () => x.removeText() : void 0
      );
    }, m = tt(
      n.registerCommand(Is, h, He),
      n.registerCommand(ir, h, He),
      n.registerCommand(
        Is,
        (y) => g(y, !1),
        kr
      ),
      n.registerCommand(
        ir,
        (y) => g(y, !0),
        kr
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      n.registerCommand(
        My,
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
function TR(e, t) {
  if (qt(t)) {
    const r = (i) => Dp(i).length;
    return { $size: r, options: { $measure: r } };
  }
  const n = t?.markerMode === "visible" ? t : void 0;
  if (n && Sf(e, n) !== void 0) {
    const r = (i) => Sf(e, n)?.length ?? Ip(i, xf).length;
    return { $size: r, options: { $measure: r } };
  }
  return {
    $size: (r) => r.getTextContent().length + AT(r.getNodes()),
    options: { $isHidden: xf }
  };
}
function vR(e) {
  e.getEditorState().read(() => {
    const t = N(), n = e.getRootElement()?.ownerDocument.getSelection();
    if (!E(t) || !n) return;
    const r = Em(e, t.anchor), i = Em(e, t.focus);
    r && i && n.setBaseAndExtent(...r, ...i);
  });
}
function Em(e, t) {
  const n = e.getElementByKey(t.key);
  if (!n) return;
  if (t.type === "text") {
    const a = NS(n);
    return a ? [a, t.offset] : void 0;
  }
  const r = t.getNode(), i = A(r) ? r.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [n, n.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function CR(e, t) {
  const n = t.ownerDocument.createRange();
  n.selectNodeContents(t);
  for (let r = 0; r < e.rangeCount; r++) {
    const i = e.getRangeAt(r), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, n) < 0 && s.setStart(n.startContainer, n.startOffset), i.compareBoundaryPoints(i.END_TO_END, n) > 0 && s.setEnd(n.endContainer, n.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const SR = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function _R(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? SR.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const MR = /^\+/;
function Kp(e, t) {
  const n = t.replace(MR, "");
  return Object.hasOwn(e.markers, n) ? e.markers[n] : void 0;
}
function FT(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let n = e.length - 1; n >= 0; n--)
    if (t.occursUnder.includes(e[n].marker) && (n === e.length - 1 || t.rank === 0 || e[n + 1].rank <= t.rank))
      return { keep: n + 1, joins: !0 };
}
function zT(e, t) {
  return FT(e, t) !== void 0;
}
function _f(e, t) {
  const n = FT(e, t);
  return n ? (n.joins && (e.length = n.keep, e.push(t)), !0) : !1;
}
function Mc(e, t, n) {
  const r = A(e) ? e.getChildren().filter(w) : [];
  if (r.length === 0) {
    n.set(e.getKey(), t);
    return;
  }
  for (const i of r) n.set(i.getKey(), t);
}
function ER(e, t, n, r, i) {
  const s = Kp(r, t);
  if (!s) {
    Mc(e, "unknown", i);
    return;
  }
  if (n === void 0) return;
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(n) && Mc(e, "invalid", i);
}
function $s(e, t, n, r, i) {
  for (const s of e.getChildren())
    if (U(s)) {
      const o = s.getMarker();
      i || ER(s, o, t, n, r), $s(s, t, n, r, i || o === "xq");
    } else if (Ee(s)) {
      if (i) continue;
      const o = Kp(n, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && r.set(s.getKey(), "invalid") : r.set(s.getKey(), "unknown");
    } else q(s) ? $s(s, s.getMarker(), n, r, i) : et(s) || A(s) && $s(s, t, n, r, i);
}
function AR(e, t) {
  const n = /* @__PURE__ */ new Map(), r = [], i = (o, a) => {
    const c = Kp(e, a);
    if (!c) {
      Mc(o, "unknown", n), _f(r, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    _f(r, l) || Mc(o, "invalid", n);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Ce().getChildren())
    et(o) || (Ie(o) ? (i(o, o.getMarker()), s(o) && $s(o, void 0, e, n, !1)) : at(o) ? i(o, o.getMarker()) : me(o) ? (i(o, o.getMarker()), s(o) && $s(o, o.getMarker(), e, n, !1)) : A(o) && s(o) && $s(o, "p", e, n, !1));
  return n;
}
function PR(e) {
  return !!e?.includes("(basic)");
}
function wR(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function jT(e, t) {
  return !e.startsWith("zpa") && e !== "c" && gf(e, t);
}
function Up(e, t) {
  const n = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (n)
    return { marker: t, rank: n.rank ?? 0, occursUnder: n.occursUnder ?? [] };
}
function VT(e, t) {
  const n = [];
  for (const r of t) {
    const i = Up(e, r);
    i && _f(n, i);
  }
  return n;
}
function Ha(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: wR(e.description),
    isBasic: PR(e.description)
  };
}
function NR(e, t) {
  const n = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, r = n(e), i = n(t);
  return r.prefix !== i.prefix ? r.prefix < i.prefix ? -1 : 1 : r.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : r.digits - i.digits;
}
function Mf(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : NR(e.marker, t.marker);
}
function Ef(e, t, n) {
  if (t.noteMarker) return [];
  const r = VT(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && jT(i.marker, n)
  ).filter((i) => {
    const s = Up(e, i.marker);
    return s !== void 0 && zT(r, s);
  }).map((i) => Ha(i, "paragraph")).sort(Mf);
}
function OR(e, t, n) {
  const { noteMarker: r, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => jT(c.marker, n)
  );
  if (r)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(r)
    ).map((c) => Ha(c, "character")).sort(Mf);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Ha(c, "character")),
    ...a.map((c) => Ha(c, "note"))
  ].sort(Mf);
}
function $R(e, t) {
  return t.map((n, r) => {
    const i = e.markers[n]?.endMarker ?? `${n}*`;
    return { marker: `${r === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function RR(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function IR(e, t, n) {
  return [
    ...$R(e, t.openCharMarkers),
    ...OR(e, t, n)
  ].sort(RR);
}
function LR(e, t, n) {
  if (t.source === "paragraph") return Ef(e, t, n);
  const r = IR(e, t, n);
  return r.length > 0 ? r : Ef(e, t, n);
}
function qR(e, t, n) {
  const r = Ef(e, t, n), i = VT(e, t.previousParaMarkers), s = Up(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && zT(i, s) ? "ip" : "p", c = r.findIndex((u) => u.marker === a);
  if (c <= 0) return r;
  const [l] = r.splice(c, 1);
  return [l, ...r];
}
const Ec = "￼", Am = "|", ri = "\\", yu = "+", DR = /([-\w]+)="(.*?)"/g, KR = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]), UR = /* @__PURE__ */ new Map([["file", "src"]]);
class Bp {
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
function Pm(e, t) {
  const n = [e.indexOf(ri, t + 1), e.indexOf(Ec, t + 1)].filter(
    (r) => r >= 0
  );
  return n.length > 0 ? Math.min(...n) : e.length;
}
function wm(e) {
  const t = e.slice(1), n = [...t.matchAll(DR)];
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
function BR(e, t) {
  const n = e.map(
    (o, a) => o.name === void 0 || !KR.has(o.name) && !e.slice(a + 1).some((c) => c.name === o.name)
  ), r = (o, a) => o.value === a.value && (a.name === void 0 || o.name === a.name || o.name !== void 0 && UR.get(o.name) === a.name), i = /* @__PURE__ */ new Set(), s = [];
  return t.forEach((o, a) => {
    const c = e.findIndex(
      (l, u) => n[u] && !i.has(u) && r(l, o)
    );
    c < 0 || (i.add(c), s.push([c, a]));
  }), s;
}
function Nm(e, t, n) {
  let r = 0, i = -1;
  for (const s of e) {
    if (!s.same) continue;
    const { end: o, otherEnd: a } = ka(s, n);
    o <= t && o > i && (i = o, r = a);
  }
  return r;
}
function FR(e, t, n, r, i) {
  if (e === t) {
    n.push(r, r + e.length, i, i + t.length, !0);
    return;
  }
  const s = wm(e), o = wm(t);
  if (!s || !o) {
    n.push(r, r + 1, i, i + 1, !0), n.pushStretch(e.slice(1), r + 1, t.slice(1), i + 1);
    return;
  }
  const a = new Bp();
  a.push(0, 1, 0, 1, !0);
  const c = BR(s, o);
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
    const h = Nm(l, d.start, "live");
    a.push(d.start, d.end, h, h, !1);
  });
  const f = new Set(c.map(([, d]) => d));
  o.forEach((d, p) => {
    if (f.has(p)) return;
    const h = Nm(l, d.start, "settled");
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
function WT(e, t, n, r, i) {
  let s = t, o = 0;
  for (; s < e.length && o < n.length; ) {
    const c = n[o] === Ec && e[s] !== Ec ? i.spellings?.get(o) : void 0;
    if (c !== void 0) {
      const u = new Bp(), f = WT(e, s, c, u, { prefix: !0 });
      i.literals?.set(o, {
        liveStart: s,
        liveEnd: f,
        inner: { segments: WR(u.segments, s) }
      }), r.push(s, f, o, o + 1, !1), s = f, o += 1;
      continue;
    }
    if (e[s] === Am && n[o] === Am) {
      const u = Pm(e, s), f = Pm(n, o);
      FR(e.slice(s, u), n.slice(o, f), r, s, o), s = u, o = f;
      continue;
    }
    const l = n[o] === ri ? zR(e, s, n, o) || VR(e, s, n, o, i.spellings) || (!i.prefix && s === 0 && o === 0 ? jR(e, n) : 0) : 0;
    if (l > 0) {
      r.push(s, s, o, o + l, !1), o += l;
      continue;
    }
    if (e[s] === n[o]) {
      r.push(s, s + 1, o, o + 1, !0), s += 1, o += 1;
      continue;
    }
    if (e[s - 1] === ri && n[o - 1] === ri && e[s] === yu != (n[o] === yu)) {
      e[s] === yu ? (r.push(s, s + 1, o, o, !1, !0), s += 1) : (r.push(s, s, o, o + 1, !1, !0), o += 1);
      continue;
    }
    if (i.prefix) {
      const u = n.lastIndexOf(ri), f = u >= o ? n.slice(u) : void 0, d = f === void 0 ? -1 : e.indexOf(f, s);
      return f === void 0 || d < 0 ? (r.push(s, s, o, n.length, !1), s) : (r.pushStretch(e.slice(s, d), s, n.slice(o, u), o), r.push(d, d + f.length, u, n.length, !0), d + f.length);
    }
    return r.pushStretch(e.slice(s), s, n.slice(o), o), e.length;
  }
  const a = i.prefix ? s : e.length;
  return r.push(s, a, o, n.length, !1), a;
}
const Ps = /\\\+?[\w-]+/y;
function zR(e, t, n, r) {
  Ps.lastIndex = r;
  const i = Ps.exec(n)?.[0];
  return !i || n[r + i.length] !== ri ? 0 : n.startsWith(i, r + i.length) && e.startsWith(i, t) && !e.startsWith(i, t + i.length) ? i.length : 0;
}
const Ra = "\\p";
function jR(e, t) {
  return !t.startsWith(Ra) || t[Ra.length] !== ri ? 0 : e[0] === ri && !e.startsWith(Ra) ? Ra.length : 0;
}
function VR(e, t, n, r, i) {
  Ps.lastIndex = r;
  const s = Ps.exec(n)?.[0];
  if (!s || n[r + s.length] !== Ec) return 0;
  const o = i?.get(r + s.length);
  if (o === void 0 || e.startsWith(s, t)) return 0;
  Ps.lastIndex = 0;
  const a = Ps.exec(o)?.[0];
  return a !== void 0 && e.startsWith(a, t) ? s.length : 0;
}
function WR(e, t) {
  return e.map((n) => ({
    ...n,
    liveStart: n.liveStart - t,
    liveEnd: n.liveEnd - t
  }));
}
function HR(e, t, n) {
  const r = new Bp(), i = /* @__PURE__ */ new Map();
  return WT(e, 0, t, r, { prefix: !1, spellings: n, literals: i }), { alignment: { segments: r.segments }, literals: i };
}
function ka(e, t) {
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
function HT(e, t, n) {
  return e.segments.find((r) => {
    const { start: i, end: s } = ka(r, n);
    return i <= t && t < s;
  });
}
function GT(e, t) {
  let n = 0, r = 0;
  for (const i of e.segments) {
    const { end: s, otherEnd: o } = ka(i, t);
    n = Math.max(n, s), r = Math.max(r, o);
  }
  return [n, r];
}
function Fp(e, t, n) {
  const r = HT(e, t, n);
  if (r) {
    const { start: o, otherStart: a } = ka(r, n);
    return r.same ? a + (t - o) : void 0;
  }
  const [i, s] = GT(e, n);
  return t === i ? s : void 0;
}
function io(e, t, n) {
  const r = HT(e, t, n);
  if (r) {
    const { start: i, otherStart: s } = ka(r, n);
    return r.same ? s + (t - i) : s;
  }
  return GT(e, n)[1];
}
function GR(e, t) {
  const n = io(e, t, "settled"), r = e.segments.find(
    (i) => i.nesting && i.settledStart === t && i.settledEnd === t && i.liveEnd === n
  );
  return r ? r.liveStart : n;
}
const Rn = /\s/;
function JR(e, t) {
  return `\\${e} ${t}\\${e}*`;
}
function Af(e) {
  const t = [];
  for (const r of e.spans)
    for (let i = r.start; i < r.end; i += 1) {
      const s = e.text[i];
      t.push({ byte: s, position: i, isWs: Rn.test(s) });
    }
  const n = e.spans.filter((r) => r.isSentinel).map((r) => r.start);
  return { bytes: t, placeholders: n };
}
function Ga({ bytes: e }, t) {
  return e.filter((n) => n.position < t && !n.isWs).length;
}
function YR({ bytes: e }, t) {
  let n = 0;
  for (const r of e) r.position < t && (n = r.isWs ? n + 1 : 0);
  return n;
}
function Pf({ bytes: e }) {
  return e.filter((t) => !t.isWs);
}
const Om = "cat", XR = "category";
function QR(e) {
  return v(e) && e.getTextContent().trim() === "";
}
function ZR(e) {
  const t = { text: "", spans: [], sentinels: [] }, n = [], r = (a, c) => {
    t.spans.push({
      key: a.getKey(),
      start: t.text.length,
      end: t.text.length + c.length,
      isSentinel: !1
    }), t.text += c;
  }, i = (a, c) => {
    r(a, JR(Om, c)), n.push({
      ownerKey: a.getKey(),
      markerName: Om,
      keyName: XR,
      valueLength: c.length
    });
  }, s = (a) => {
    const c = pa(a);
    let u = c.opener ?? c.value ?? c.closer ? void 0 : a.getCategory();
    const f = Mt(a);
    let d = !1;
    for (const p of a.getChildren())
      u !== void 0 && d && !QR(p) && (i(a, u), u = void 0), o(p), (Lt(p) || f && (f.is(p) || p.isParentOf(f))) && (d = !0);
    u !== void 0 && i(a, u);
  }, o = (a) => {
    if (Lt(a)) {
      const c = a.getParent();
      r(a, q(c) ? c.getCaller() : "");
    } else v(a) || Rt(a) ? r(a, a.getTextContent()) : q(a) ? s(a) : A(a) && a.getChildren().forEach(o);
  };
  return e.forEach(o), { spelling: t, foldedAttributes: n };
}
function zp(e) {
  const t = Af(e);
  return {
    runs: e.sentinels.map((n, r) => {
      const { spelling: i, foldedAttributes: s } = ZR(n);
      return {
        memberCount: n.length,
        before: Ga(t, t.placeholders[r] ?? e.text.length),
        spelling: i,
        foldedAttributes: s,
        spelled: Pf(Af(i)).map(({ byte: o }) => o).join("")
      };
    }),
    bytes: Pf(t).map(({ byte: n }) => n).join("")
  };
}
function Ac(e, t) {
  return {
    facts: Af(e),
    carried: e.sentinels.map((n, r) => {
      const i = new Set(t[r]?.map((s) => s.getKey()));
      return n.map((s) => i.has(s.getKey()));
    })
  };
}
function Pc(e, t) {
  const n = e.carried.map(
    (d) => d.map(() => {
    })
  ), r = Pf(e.facts), { alignment: i, literals: s } = HR(
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
    const g = Fp(i, Ga(e.facts, h), "live"), m = g === void 0 ? void 0 : u.get(g);
    m === void 0 || t.runs[m].memberCount !== a(d) || o(p, m);
  });
  const f = [];
  for (const [d, p] of s) {
    const h = u.get(d);
    if (h === void 0) continue;
    const g = t.runs[h], m = r[p.liveStart]?.position ?? Number.POSITIVE_INFINITY, y = p.liveEnd > p.liveStart ? r[p.liveEnd - 1].position + 1 : m, k = Ga(e.facts, m);
    f.push({
      sentinelIndex: h,
      liveBefore: k,
      liveLength: Ga(e.facts, y) - k,
      liveWsBefore: YR(e.facts, m),
      settledBefore: g.before,
      spelling: g.spelling,
      inner: p.inner,
      foldedAttributes: g.foldedAttributes
    });
  }
  return { sentinelMap: n, settledOnlyRuns: f, alignment: i };
}
function xa(e, t, n) {
  return {
    nonWsBefore: io(
      e,
      t.nonWsBefore,
      n === "toSettled" ? "live" : "settled"
    ),
    wsRun: t.wsRun
  };
}
function JT(e, t, n) {
  return Fp(e.inner, t, n === "toSpelling" ? "live" : "settled");
}
function YT(e, t) {
  return e.find(
    (n) => t.nonWsBefore === n.liveBefore && t.wsRun >= n.liveWsBefore
  );
}
function jp(e, t) {
  for (const n of e) {
    const r = t.nonWsBefore - n.liveBefore;
    if (r <= 0 || r >= n.liveLength) continue;
    const i = JT(n, r, "toSpelling");
    return {
      run: n,
      count: r,
      within: i === void 0 ? void 0 : { nonWsBefore: i, wsRun: t.wsRun }
    };
  }
}
function pl(e, t) {
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
function hl(e, t) {
  const n = [];
  for (let r = t; r; r = r.getParent()) {
    if (r.is(e)) return n;
    n.unshift(r.getIndexWithinParent());
  }
}
const vt = ua;
function XT(e) {
  return e.length > 1 && e.startsWith(D) && e.charAt(1) !== vt ? e.slice(1) : e;
}
function $m(e) {
  return Xs(e) ? e.markerSyntax ?? "opening" : void 0;
}
function QT(e, t, n, r) {
  const i = { ...r, noteMode: "expanded" }, s = ar.serializeEditorState(
    {
      type: rr,
      version: nr,
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
  for (; $m(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== _t(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && $m(a[u - 1]) === "closing"; )
    u--;
  const f = a.slice(c, u);
  return f.length === 0 ? { failure: "empty" } : { children: f };
}
function ZT(e, t) {
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const n = `${e.getMarker()}*`, r = t.findIndex(
    (i) => typeof i == "object" && i.type === "unmatched" && i.marker === n
  );
  if (!(r < 0))
    return { before: t.slice(0, r), after: t.slice(r + 1) };
}
function ev(e, t, n, r, i) {
  const s = Object.fromEntries(
    Object.entries(e.getUnknownAttributes() ?? {}).filter(([u]) => u !== "closed")
  ), o = ar.serializeEditorState(
    {
      type: rr,
      version: nr,
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
  ).root.children, a = o.length === 1 ? o[0] : void 0, c = Array.isArray(a?.children) ? a.children : void 0, l = c?.findIndex((u) => u.type === Je.getType()) ?? -1;
  if (!(!c || l < 0))
    return c.slice(l);
}
function tv(e, t, n, r) {
  const i = e.getCode(), s = {
    ...e.getUnknownAttributes(),
    type: "book",
    marker: e.getMarker(),
    ...i !== "" && { code: i },
    content: t
  }, [o, ...a] = ar.serializeEditorState(
    { type: rr, version: nr, content: [s, ...n] },
    r
  ).root.children;
  if (!_d(o)) return { failure: "shape" };
  const c = Qb(o.children[0]) ? o.children.slice(1) : o.children;
  return c.length === 0 && a.length === 0 ? { failure: "empty" } : { children: c, followingBlocks: a };
}
function bo(e, t, n) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + n.length,
    isSentinel: !1
  }), e.text += n;
}
function ko(e, t) {
  const n = OT.exec(e.text)?.[0];
  n !== void 0 && (e.text += n === "\\" ? D : " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += vt;
}
function Ht(e) {
  return e.replaceAll(D, " ");
}
const eI = `\\${D}${vt}`;
function nv(e) {
  return e.forEach((t, n) => {
    typeof t == "string" ? e[n] = t.replaceAll(eI, `\\${vt}`) : t.content && nv(t.content);
  }), e;
}
const rv = "\u2028";
function Vp(e) {
  return e.replaceAll(rv, "");
}
function Wp(e) {
  return e ? rv : " ";
}
function tI(e) {
  return q(e[0]) ? "note" : Ue(e[0]) ? "verse" : "other";
}
function cs(e, t) {
  return nv(
    zc(Vp(e.text), {
      ...t,
      placeholders: e.sentinels.map(tI)
    })
  );
}
function nI(e, t, n = !1, r = !1) {
  if (qt(t)) return Ht(e);
  if (e === D && !r) return " ";
  const i = n && e.startsWith(D), s = i ? e.slice(1) : e, o = n && !i ? rI.exec(s) : null;
  return o ? `${o[0]} ${s.slice(o[0].length + 1).replaceAll(D, "~")}` : (i ? " " : "") + s.replaceAll(D, "~");
}
const rI = /^[^\s\u200B\\|*]+(?=\u00A0)/;
function Rs(e) {
  const t = e.getTextContent();
  return kn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function gl(e, t) {
  const n = e[t];
  if (!Ke(n)) return [];
  const { attribute: r, closing: i, wrapper: s } = Vc(n);
  if (s) return [s];
  const o = n.getNextSibling();
  if (!w(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== n.getMarker())
    return [];
  const a = [o];
  return r && a.push(r), i && a.push(i), a;
}
function iv(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function ml(e, t) {
  const n = [];
  let r = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = Vo(r, i);
    if (c)
      n.push(c), r = c;
    else if (s && o && a)
      n.push(s, o, a), r = a;
    else if (s || o || a)
      break;
  }
  return n;
}
function Hp(e) {
  return !!e.getUnknownAttributes();
}
function yl(e, t) {
  const n = t(e)?.type;
  return n === T.Milestone || n === void 0 && cd(e);
}
function Gp(e) {
  return e.getIsCollapsed() !== !1 || e.getChildren().some((n) => w(n) && n.getMode() === "token") || Object.keys(e.getUnknownAttributes() ?? {}).some((n) => n !== "closed") ? !1 : e.getChildren().some((n) => {
    if (!w(n) || ur(n)) return !1;
    if (n.getMarkerSyntax() !== "opening") return !0;
    const r = n.getTextContent(), i = (ro.exec(r) ?? wT.exec(r))?.[1];
    return i === void 0 || i.startsWith("+") || !Je.isValidMarker(i) || n.getMarker() !== e.getMarker();
  });
}
function Jp(e, t) {
  return Ke(e) ? !yl(e.getMarker(), t) : q(e) ? !Gp(e) : et(e) ? !0 : Ue(e) ? Hp(e) : U(e) ? sv(e, t) : !1;
}
function sv(e, t) {
  return ov(e, e.getMarker(), t);
}
function ov(e, t, n) {
  return r0(e) ? !0 : E_(t) || n(t) !== void 0 || iI(e) && !sI(e) ? !1 : t !== e.getMarker() || !oI(e);
}
function iI(e) {
  const t = e.getParent();
  return t !== null && wn(t) !== void 0;
}
function sI(e) {
  const t = e.getUnknownAttributes();
  return !!t && Object.keys(t).some((n) => n !== "closed");
}
function oI(e) {
  const t = e.getChildren().filter((i) => w(i) && i.getMarker() === e.getMarker()).filter(w);
  if (t.some((i) => !ur(i))) return !0;
  const n = t.some((i) => i.getMarkerSyntax() === "opening"), r = t.some((i) => i.getMarkerSyntax() === "closing");
  return !n && r;
}
function av(e) {
  let t = e, n = t.getParent();
  for (; !t.getNextSibling() && ue(n); )
    t = n, n = t.getParent();
  let r = t.getNextSibling();
  for (; ue(r); ) r = r.getFirstChild();
  return Ue(r);
}
const cn = "", ln = "";
function Rm(e) {
  return e.flatMap((t) => Fe(t) ? t.getChildren() : [t]);
}
function Ms(e, t, n, r = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Ke(s)) {
      const o = gl(e, i);
      yl(s.getMarker(), n) && iv(o) ? (t.push(
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
      ), Ms(Rm(o), t, n), t.push(ln)) : t.push(vt), i += o.length;
    } else if (Ue(s)) {
      const o = ml(e, i);
      Hp(s) ? t.push(vt) : (t.push(
        cn,
        "verse",
        Ht(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Ms(Rm(o), t, n), t.push(ln)), i += o.length;
    } else w(s) ? t.push(cn, "marker", Ht(s.getTextContent()), ln) : xn(s) ? t.push(
      cn,
      "unmatched",
      Ht(s.getTextContent()),
      s.getMarker(),
      ln
    ) : Jp(s, n) ? t.push(vt) : Qi(s) ? t.push(Wp(av(s))) : v(s) && de(s, ke) === "attribute" ? t.push(
      cn,
      "attribute",
      Ht(Rs(s)),
      ln
    ) : v(s) ? t.push(
      Ht(
        r ? XT(Rs(s)) : Rs(s)
      )
    ) : U(s) ? (t.push(cn, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Ms(s.getChildren(), t, n, !0), t.push(ln)) : ue(s) ? Ms(s.getChildren(), t, n, r) : A(s) ? (t.push(cn, s.getType()), Ms(s.getChildren(), t, n), t.push(ln)) : t.push(vt);
  }
}
function vr(e, t) {
  const n = [];
  return Ms(e, n, t), n.join("");
}
function Cr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Ws(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function aI(e) {
  return e.$?.textType;
}
function Yp(e) {
  return e.type ?? "";
}
function bl(e, t, n) {
  return t === "closing" ? ot(e, n) : t === "selfClosing" ? ot("") : Ve(e, n);
}
function bu(e, t) {
  const n = e[t];
  if (!(!n || Yp(n) !== "attribute-run"))
    return Cr(n) ?? [];
}
function Sr(e, t) {
  const n = [];
  return Mo(e, n, t), n.join("");
}
function Mo(e, t, n, r = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Yp(s);
    if (o === "ms") {
      const l = s, u = bu(e, i + 1);
      u && yl(l.marker ?? "", n) ? (t.push(
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
      ), Mo(u, t, n), t.push(ln), i += 1) : t.push(vt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(vt);
        continue;
      }
      t.push(
        cn,
        "verse",
        Ht(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, f = bu(e, i + 1 + u);
      for (; f; )
        Mo(f, t, n), u++, f = bu(e, i + 1 + u);
      t.push(ln), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        cn,
        "marker",
        Ht(
          bl(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        ln
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(Wp(ud(e[i + 1])));
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(cn, "char", JSON.stringify(l.unknownAttributes ?? null)), Mo(Cr(s) ?? [], t, n, !0), t.push(ln);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(vt);
      continue;
    }
    if (o === "unmatched") {
      const l = OM(s) ? s.marker : "";
      t.push(cn, "unmatched", Ht(Ws(s) ?? ""), l), t.push(ln);
      continue;
    }
    const a = Ws(s);
    if (a !== void 0 && aI(s) === "attribute") {
      t.push(cn, "attribute", Ht(a), ln);
      continue;
    }
    if (a !== void 0) {
      t.push(Ht(r ? XT(a) : a));
      continue;
    }
    const c = Cr(s);
    c ? (t.push(cn, o), Mo(c, t, n), t.push(ln)) : t.push(vt);
  }
}
function di(e) {
  let t = 0;
  for (const n of e) {
    const r = Cr(n);
    if (r) {
      t += di(r);
      continue;
    }
    const i = Ws(n);
    if (i !== void 0)
      for (const s of i) s === vt && t++;
  }
  return t;
}
function Hs(e, t, n, r, i) {
  En(e.getChildren(), t, n, r, i);
}
function En(e, t, n, r, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (w(a))
      bo(t, a, Ht(a.getTextContent()));
    else if (Ke(a)) {
      s();
      const c = gl(e, o);
      yl(a.getMarker(), n) && iv(c) ? En(c, t, n, r) : ko(t, [a, ...c]), o += c.length;
    } else if (q(a) && Gp(a)) {
      s();
      const c = Mt(a);
      for (const l of a.getChildren())
        c?.is(l) ? bo(t, l, Ht(l.getTextContent())) : En([l], t, n, r);
    } else if (q(a) || et(a))
      s(), ko(t, [a]);
    else if (Ue(a)) {
      s();
      const c = ml(e, o);
      Hp(a) ? ko(t, [a, ...c]) : (bo(t, a, Ht(Rs(a))), En(c, t, n, r)), o += c.length;
    } else if (U(a))
      s(), sv(a, n) ? ko(t, [a]) : Hs(a, t, n, r, { pending: !0 });
    else if (Qi(a))
      s(), bo(t, a, Wp(av(a)));
    else if (v(a)) {
      const c = a.getParent(), l = kn(a) || de(a, ke) === "attribute" || $e(c) && !!mi(c)?.is(a), u = s() && !l;
      bo(
        t,
        a,
        l ? Ht(Rs(a)) : nI(
          Rs(a),
          r,
          u,
          nk(a)
        )
      );
    } else A(a) ? Hs(a, t, n, r, i) : (s(), ko(t, [a]));
  }
}
function Xp(e) {
  const [t] = e;
  return me(t) && t.getMarker() === "";
}
function Qp(e, t, n) {
  if (e.getUnknownAttributes()) return;
  const r = t(e.getMarker())?.type;
  if (r !== void 0 && r !== T.Unknown && r !== T.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (et(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Hs(e, i, t, n), i;
}
function cI(e, t, n) {
  const r = { text: "", spans: [], sentinels: [] };
  return Hs(e, r, t, n), r;
}
function Zp(e, t, n) {
  if (e.length === 0 || !e.every(me)) return;
  const r = { text: "", spans: [], sentinels: [] };
  return eh(r, e, t, n) ? r : void 0;
}
function Im(e, t, n) {
  const r = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    if (me(i)) {
      const s = Qp(i, t, n);
      if (!s) return;
      const o = r.text.length;
      s.spans.forEach(
        (a) => r.spans.push({ ...a, start: a.start + o, end: a.end + o })
      ), r.sentinels.push(...s.sentinels), r.text += s.text;
    } else $e(i) ? En(i.getChildren(), r, t, n) : En([i], r, t, n);
  return r;
}
function eh(e, t, n, r) {
  for (const i of t) {
    const s = Qp(i, n, r);
    if (!s) return !1;
    e.text.length > 0 && (e.text += " ");
    const o = e.text.length;
    s.spans.forEach(
      (a) => e.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), e.sentinels.push(...s.sentinels), e.text += s.text;
  }
  return !0;
}
function kl(e, t) {
  let n = 0;
  const r = (i) => {
    if (v(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(vt);
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
function Zo(e, t = []) {
  for (const n of e)
    Ue(n) ? t.push(n) : A(n) && Zo(n.getChildren(), t);
  return t;
}
function xl(e) {
  let t = 0;
  const n = (r) => {
    if (v(r))
      for (const i of r.getTextContent()) i === vt && t++;
    else A(r) && r.getChildren().forEach(n);
  };
  return e.forEach(n), t;
}
function Jr(e) {
  let t = 0;
  for (const n of e)
    if (typeof n == "string")
      for (const r of n) r === vt && t++;
    else n.content && (t += Jr(n.content));
  return t;
}
function th(e, t, n) {
  const r = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    r.text.length > 0 && (r.text += " "), A(i) && Hs(i, r, t, n);
  return r;
}
function ii(e, t, n) {
  let r = 0, i = 0;
  for (const s of e.spans) {
    const o = s.end - s.start, a = s.key === t, c = a ? Math.min(s.isSentinel ? 1 : n, o) : o;
    for (let l = 0; l < c; l++)
      Rn.test(e.text[s.start + l]) ? i++ : (r++, i = 0);
    if (a) return { nonWsBefore: r, wsRun: i };
  }
}
function wf(e, t) {
  t.add(e.getKey()), A(e) && e.getChildren().forEach((n) => wf(n, t));
}
function nh(e, t, n) {
  return e.spans.find(
    (r) => !r.isSentinel && r.key === t && n <= r.end - r.start
  );
}
function $o(e, t, n) {
  const r = (f, d) => {
    const p = ii(e, f, d), h = nh(e, f, d);
    return p && h ? { anchor: p, position: h.start + d } : void 0;
  }, i = (f) => {
    const d = f.end - f.start, p = ii(e, f.key, d);
    return p ? { anchor: p, position: f.start + d } : void 0;
  };
  if (!A(t)) return r(t.getKey(), n);
  const s = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, n).forEach((f) => wf(f, s));
  const o = [...e.spans].reverse().find((f) => s.has(f.key));
  if (o) return i(o);
  const a = /* @__PURE__ */ new Set();
  wf(t, a);
  const c = e.spans.find((f) => a.has(f.key));
  if (c && !c.isSentinel) return r(c.key, 0);
  const l = [...e.spans].reverse().find((f) => !a.has(f.key) && X(f.key)?.isBefore(t));
  if (l) return i(l);
  const u = e.spans[0];
  return u && !u.isSentinel ? r(u.key, 0) : void 0;
}
function Ro(e) {
  if (e.isSentinel) return !1;
  const t = X(e.key);
  return w(t) && t.getMarkerSyntax() !== "opening";
}
function cv(e) {
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
function Lm(e) {
  const t = X(e.key), n = t?.getParent(), r = n?.getChildren();
  if (!t || !n || !r) return;
  const i = r.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = Ue(t) ? ml(r, i) : Ke(t) ? gl(r, i) : [], o = s[s.length - 1] ?? t;
  return { key: n.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" };
}
function hn(e, t, { addressDisplayBytes: n = !1 } = {}) {
  const { text: r, spans: i } = e;
  let s, o, a = t.nonWsBefore, c = t.wsRun, l = !1;
  e: for (const [p, h] of i.entries()) {
    const g = h.end - h.start, m = !h.isSentinel && (n || !Ro(h));
    if (l) {
      if (!m) continue;
      s = { key: h.key, offset: 0 };
      break;
    }
    for (let y = 0; y < g; y++) {
      const k = r[h.start + y];
      if (a === 0 && (c === 0 || !Rn.test(k))) {
        if (m) {
          s = { key: h.key, offset: y };
          break e;
        }
        l = !0;
        continue e;
      }
      a > 0 ? Rn.test(k) || a-- : c--;
    }
    if (a === 0 && c === 0) {
      const y = i[p + 1]?.isSentinel === !0;
      if (m && (!n || y)) {
        s = { key: h.key, offset: g };
        break;
      }
      if (h.isSentinel && y) {
        const k = Lm(h);
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
  if (f && Ro(f)) {
    const p = cv(f);
    if (p) return p;
  }
  if (f?.isSentinel) {
    const p = Lm(f);
    if (p) return p;
  }
  const d = [...i].reverse().find((p) => !p.isSentinel && !Ro(p));
  if (d) return { key: d.key, offset: d.end - d.start, type: "text" };
}
function lv(e, t = []) {
  for (const n of e)
    ue(n) && t.push(n), A(n) && lv(n.getChildren(), t);
  return t;
}
function uv(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), A(e) && e.getChildren().forEach((n) => uv(n, t)), t;
}
function lI(e, t, n) {
  const r = ii(e, t.key, n);
  if (r)
    return t.isSentinel ? {
      kind: "preserved",
      anchor: r,
      run: e.spans.filter((i) => i.isSentinel).indexOf(t)
    } : { kind: "byte", anchor: r };
}
function Tl(e, t, n = t.sentinels, r) {
  const i = [];
  for (const o of lv(e)) {
    const a = uv(o), c = t.spans.filter((k) => a.has(k.key)), l = c[0], u = c[c.length - 1];
    if (!l || !u) continue;
    const f = lI(t, l, 0), d = ii(t, u.key, u.end - u.start);
    if (!f || !d) continue;
    const p = o.getTypedOnClicks(), h = o.getTypedOnRemoves(), g = o.getTypedOnMouseEnters(), m = o.getTypedOnMouseLeaves(), y = Object.entries(o.getTypedIDs()).flatMap(
      ([k, x]) => x.map((_) => ({
        type: k,
        id: _,
        onClick: p[k]?.[_],
        onRemove: h[k]?.[_],
        onMouseEnter: g[k]?.[_],
        onMouseLeave: m[k]?.[_]
      }))
    );
    y.length > 0 && i.push({ annotations: y, start: f, end: d });
  }
  const s = (o) => {
    const a = o.getKey();
    for (const c of Ir(o)) {
      if (c.start === c.end || !nh(t, a, c.start)) continue;
      const l = ii(t, a, c.start), u = ii(t, a, c.end);
      if (!l || !u) continue;
      const f = r && cc(r, c.type, c.id);
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
  return e.forEach(s), { ranges: i, live: i.length > 0 ? Ac(t, n) : void 0 };
}
function uI(e, t, n) {
  const r = fv(e);
  if (!r) return;
  const i = r[r.length - 1].getNextSibling();
  if (!ue(i) || !i.hasID(t, n)) return;
  const s = i.getFirstChild();
  s && r.forEach((o) => s.insertBefore(o));
}
function fI(e, t) {
  const n = fv(e);
  if (!n) return;
  const r = Ui();
  r.addID(
    t.type,
    t.id,
    t.onClick,
    t.onRemove,
    t.onMouseEnter,
    t.onMouseLeave
  ), n[0].insertBefore(r), r.append(...n);
}
function fv(e) {
  const t = X(e), n = t?.getParent()?.getChildren();
  if (!t || !n) return;
  const r = n.findIndex((s) => s.is(t));
  if (r < 0) return;
  const i = Ue(t) ? ml(n, r) : Ke(t) ? gl(n, r) : [];
  return [t, ...i];
}
function dv(e, t, n, r) {
  const i = n.settledOnlyRuns, s = { addressDisplayBytes: r }, o = jp(i, e);
  if (o) {
    if (!o.within) return;
    const u = hn(o.run.spelling, o.within, s);
    return u ? { point: u, at: o.within.nonWsBefore, literalRun: o.run.sentinelIndex } : void 0;
  }
  const a = r && YT(i, e);
  if (a) {
    const u = t.sentinels[a.sentinelIndex]?.[0]?.getKey(), f = {
      nonWsBefore: a.settledBefore + 1,
      wsRun: 0
    }, d = hn(t, f, s);
    return d && u ? { point: d, at: f.nonWsBefore, preservedKey: u } : void 0;
  }
  const c = xa(n.alignment, e, "toSettled"), l = hn(t, c, s);
  return l && { point: l, at: c.nonWsBefore };
}
function dI(e, t, n) {
  if (e.kind === "byte") return dv(e.anchor, t, n, !0);
  const r = n.sentinelMap[e.run]?.find((a) => a !== void 0), i = r && t.sentinels[r.sentinelIndex]?.[0]?.getKey();
  if (!i) return;
  const s = xa(n.alignment, e.anchor, "toSettled"), o = hn(t, s, { addressDisplayBytes: !0 });
  return o && { point: o, at: s.nonWsBefore, preservedKey: i };
}
function qm(e) {
  if (e.type !== "text") return e;
  const t = X(e.key);
  if (v(t)) return e;
  const n = t?.getParent();
  if (!t || !n) return;
  const r = t.getIndexWithinParent() + (e.offset > 0 ? 1 : 0);
  return { key: n.getKey(), offset: r, type: "element" };
}
function vl({ ranges: e, live: t }, n) {
  if (e.length === 0 || !t) return;
  const r = N()?.clone() ?? null;
  for (const i of e)
    for (const s of i.annotations) {
      const o = n();
      if (!o) continue;
      const a = Pc(t, zp(o)), c = dI(i.start, o, a), l = dv(i.end, o, a, !1);
      if (!c || !l || c.literalRun !== l.literalRun) continue;
      const u = i.start.anchor;
      if (c.at === l.at && u.nonWsBefore !== i.end.nonWsBefore && !c.preservedKey)
        continue;
      const { preservedKey: f } = c, d = qm(c.point), p = qm(l.point);
      if (!d || !p) continue;
      if (d.key === p.key && d.offset === p.offset && d.type === p.type) {
        f && fI(f, s);
        continue;
      }
      const h = Kr();
      h.anchor.set(d.key, d.offset, d.type), h.focus.set(p.key, p.offset, p.type), Bd(
        h,
        s.type,
        s.id,
        s.onClick,
        s.onRemove,
        s.onMouseEnter,
        s.onMouseLeave
      ), f && uI(f, s.type, s.id);
    }
  Fn(r);
}
function rh(e, t, n) {
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
function pv(e, t) {
  return e.sentinels.filter((r, i) => r.length > 0 && (t[i]?.length ?? 0) === 0).map((r) => r[0].getKey()).reverse().reduce((r, i) => {
    const s = r.spans.find((o) => o.isSentinel && o.key === i);
    return s ? rh(r, s.start, s.end) : r;
  }, e);
}
function ls(e) {
  const t = e.exportJSON();
  return A(e) && Array.isArray(t.children) && e.getChildren().forEach((n) => t.children?.push(ls(n))), t;
}
function ih(e, t, n, r, i, s, o) {
  const a = Tl(
    e,
    pv(t, n),
    n
  );
  if (a.ranges.length === 0) return r;
  const c = Zf({
    nodes: [gt, ...ll],
    onError: (u) => {
      throw u;
    }
  });
  ed(
    c,
    gt,
    (u) => Ui(u.getTypedIDs()),
    (u, f) => Object.entries(u.getTypedIDs()).forEach(
      ([d, p]) => p.forEach((h) => f.addID(d, h))
    )
  );
  let l;
  return c.update(
    () => {
      const u = Ce(), f = i === "noteContent" ? Vn() : u;
      f !== u && u.append(f), l = f.getKey(), r.forEach((p) => f.append(qr(p))), vl(a, () => {
        const p = f.getChildren();
        if (i === "paras") return th(p, s, o);
        if (i === "chapter")
          return $e(p[0]) ? ea(p[0], s, o) : void 0;
        const h = { text: "", spans: [], sentinels: [] };
        return En(p, h, s, o), h;
      });
    },
    { discrete: !0 }
  ), c.getEditorState().read(() => {
    const u = l === void 0 ? void 0 : X(l);
    return A(u) ? u.getChildren().map(ls) : r;
  });
}
function Nf(e) {
  const t = X(e.key);
  if (!t?.isAttached()) return !1;
  if (e.type === "text")
    return v(t) ? (t.select(e.offset, e.offset), !0) : !1;
  if (!A(t)) return !1;
  const n = Kr();
  return n.anchor.set(e.key, e.offset, "element"), n.focus.set(e.key, e.offset, "element"), Fn(n), !0;
}
function pI(e, t, n) {
  const r = hn(e, t);
  if (r?.type === "text") {
    if (Nf(r)) return;
  } else if (r) {
    const i = X(r.key), s = A(i) ? i.getChildAtIndex(r.offset - 1) : void 0;
    if (s) {
      s.selectNext(0, 0);
      return;
    }
  }
  n.find(A)?.selectStart();
}
function Cl(e, t) {
  const n = t.getNode(), r = pl(e, n), i = r && hl(r.member, n);
  return {
    // An element point (a click past a paragraph's trailing note) has no span of its own, so it
    // is spelled from the child bytes beside it, the same way a settled position spells one.
    anchor: t.type === "element" ? $o(e, n, t.offset)?.anchor : ii(e, t.key, t.offset),
    inRun: r && i ? {
      sentinelIndex: r.sentinelIndex,
      memberIndex: r.memberIndex,
      path: i,
      offset: t.offset,
      type: t.type
    } : void 0,
    live: Ac(e, e.sentinels)
  };
}
function hv(e, t, n) {
  const r = t && Pc(t.live, zp(e));
  if (t?.inRun && r) {
    const { sentinelIndex: o, memberIndex: a, path: c, offset: l, type: u } = t.inRun, f = r.sentinelMap[o]?.[a];
    let d = f && e.sentinels[f.sentinelIndex]?.[f.memberIndex];
    for (const p of c)
      d = A(d) ? d.getChildAtIndex(p) ?? void 0 : void 0;
    if (d && Nf({ key: d.getKey(), offset: l, type: u })) return;
  }
  if (!t?.anchor || !r) {
    n.find(A)?.selectStart();
    return;
  }
  const { anchor: i } = t, s = jp(r.settledOnlyRuns, i);
  if (s) {
    const o = s.within ?? {
      nonWsBefore: io(s.run.inner, s.count, "live"),
      wsRun: i.wsRun
    }, a = hn(s.run.spelling, o);
    if (a && Nf(a)) return;
  }
  pI(
    e,
    xa(r.alignment, i, "toSettled"),
    n
  );
}
function gv(e, t, n, r, i) {
  n && hv(th(e, r, i), t, e);
}
function mv(e, t, n, r, i) {
  if (!n) return;
  if (!t?.anchor && !t?.inRun) {
    hI(e, r);
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  En(e, s, r, i), hv(s, t, e);
}
function hI(e, t) {
  const n = e.find(A);
  if (n && Jp(n, t)) {
    const r = n.getParent();
    if (r) {
      const i = n.getIndexWithinParent();
      r.select(i, i);
      return;
    }
  }
  n?.selectStart();
}
function yv(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: n, getMarker: r, logger: i } = t, s = Zp(e, r, n);
  if (!s)
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = N();
  if (E(c)) {
    for (let m = c.anchor.getNode(); m; m = m.getParent())
      if (e.some((y) => y.is(m))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Cl(s, c.anchor));
  }
  const l = Tl(e, s, void 0, Ft()), u = cs(s, {
    getMarker: r,
    opensNamelessParagraph: Xp(e)
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Jr(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const f = ar.serializeEditorState(
    { type: rr, version: nr, content: u },
    n
  );
  if (Sr(f.root.children, r) === vr(e, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = f.root.children.map((m) => qr(m));
  if (xl(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = Zo(e).map((m) => ({
    number: m.getNumber(),
    sid: m.getSid()
  })), h = e[0];
  d.forEach((m) => h.insertBefore(m)), kl(d, s.sentinels), e.forEach((m) => m.remove());
  const g = Zo(d);
  for (let m = 0; m < p.length && m < g.length; m++)
    g[m].getNumber() === p[m].number && g[m].setSid(p[m].sid);
  return vl(l, () => th(d, r, n)), gv(d, o, a, r, n), !0;
}
function gI(e) {
  if (e.getIsCollapsed() !== !1 || !Je.isValidMarker(e.getMarker())) return;
  const t = e.getChildren();
  let n = 0;
  for (; n < t.length; ) {
    const o = t[n];
    if (!w(o) || o.getMarkerSyntax() !== "opening") break;
    n++;
  }
  const r = t[n];
  if (!r || !(Lt(r) || v(r) && r.getTextContent() === _t(e.getCaller()))) return;
  n++;
  let s = t.length;
  for (; s > n; ) {
    const o = t[s - 1];
    if (!w(o) || o.getMarkerSyntax() !== "closing") break;
    s--;
  }
  return t.slice(n, s);
}
function Ji(e, t, n) {
  const r = gI(e);
  if (!r) return;
  const i = { text: "", spans: [], sentinels: [] };
  return En(r, i, t, n), { out: i, contentNodes: r };
}
function sh(e, t, n) {
  const r = { text: "", spans: [], sentinels: [] };
  return En(e, r, t, n), r;
}
function bv(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const r = t.content[0];
  if (typeof r != "string" || r.includes(vt)) return;
  const i = r.trim();
  if (i !== "")
    return e.shift(), i;
}
function mI(e, t) {
  const { viewOptions: n, getMarker: r, logger: i } = t, s = Ji(e, r, n);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = N();
  if (E(u)) {
    for (let $ = u.anchor.getNode(); $; $ = $.getParent())
      if (e.is($)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = Cl(o, u.anchor));
  }
  const f = Tl(a, o, void 0, Ft()), d = cs(o, {
    getMarker: r,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Jr(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [p] = d;
  if (d.length !== 1 || typeof p != "object" || p.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const h = p.content ?? [], g = bv(h), m = ZT(e, h);
  if (m)
    return yI(
      e,
      m,
      g,
      o.sentinels,
      t,
      l
    );
  const y = QT(e, h, g, n);
  if (y.failure !== void 0)
    return y.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      y.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (di(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const k = e.getCategory() !== g;
  if (k && e.setCategory(g), Sr(y.children, r) === vr(a, r))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), k;
  const x = y.children.map(($) => qr($));
  if (xl(x) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), k;
  const _ = a[0];
  if (_)
    x.forEach(($) => _.insertBefore($));
  else {
    const $ = e.getChildren().find((ne) => w(ne) && ne.getMarkerSyntax() === "closing");
    x.forEach((ne) => $ ? $.insertBefore(ne) : e.append(ne));
  }
  kl(x, o.sentinels);
  const S = new Set(o.sentinels.flat().map(($) => $.getKey()));
  a.forEach(($) => {
    S.has($.getKey()) || (ue($) && ($.getWritable().__suppressOnRemoveCallbacks = !0), $.remove());
  });
  const F = () => Ji(e, r, n);
  return vl(f, () => F()?.out), mv(
    F()?.contentNodes ?? x,
    c,
    l,
    r,
    n
  ), !0;
}
function yI(e, { before: t, after: n }, r, i, s, o) {
  const { viewOptions: a, logger: c } = s, l = ev(
    e,
    t,
    n,
    r,
    a
  );
  if (!l || di(l) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  const u = l.map((h) => qr(h)), [f] = u;
  if (!q(f) || xl(u) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  let d = e;
  for (const h of u)
    d.insertAfter(h), d = h;
  kl(u, i);
  const p = e.getChildren();
  return e.append(...f.getChildren()), p.forEach((h) => h.remove()), e.setCaller(f.getCaller()).setCategory(f.getCategory()).setUnknownAttributes(f.getUnknownAttributes()).setIsCollapsed(f.getIsCollapsed()), f.remove(), o && (e.getIsCollapsed() !== !0 && a?.isNoteShellEditable === !1 ? za(e, a) : ox(e, { isContentChange: !0 })), !0;
}
function kv(e) {
  const t = e.getChildren();
  return Pd(t[0]) ? t.slice(1) : t;
}
function oh(e, t, n) {
  const r = kv(e), i = { text: "", spans: [], sentinels: [] };
  return En(r, i, t, n), { out: i, contentNodes: r };
}
const bI = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${zn}(?=[\\s\\u200B\\\\|]|$)`
);
function xv(e, t) {
  const n = cs(e, { getMarker: t }), [r, ...i] = n;
  return typeof r == "object" && r.type === "para" && r.marker === zn && !bI.test(e.text) ? { content: n, lineContent: r.content ?? [], followingBlocks: i } : { content: n, lineContent: [], followingBlocks: n };
}
function Tv(e, t, n = []) {
  const { viewOptions: r, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = oh(e, i, r);
  if (!eh(o, n, i, r))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: paragraph excluded by guard rails"), !1;
  const c = [e, ...n];
  let l, u = !1;
  const f = N();
  if (E(f)) {
    for (let $ = f.anchor.getNode(); $; $ = $.getParent())
      if (c.some((ne) => ne.is($))) {
        u = !0;
        break;
      }
    f.isCollapsed() && (l = Cl(o, f.anchor));
  }
  const d = xv(o, i);
  if (Jr(d.content) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const p = tv(
    e,
    d.lineContent,
    d.followingBlocks,
    r
  );
  if (p.failure !== void 0)
    return p.failure === "empty" ? s?.debug("[MarkerEdit] Book Tier 2 skipped: no content nodes after unwrap") : s?.warn("[MarkerEdit] Book Tier 2 aborted: unexpected serialized shape"), !1;
  const h = [...p.children, ...p.followingBlocks];
  if (di(h) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (p.followingBlocks.length === n.length && Sr(p.followingBlocks, i) === vr(n, i) && Sr(p.children, i) === vr(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const g = p.children.map(($) => qr($)), m = p.followingBlocks.map(($) => qr($)), y = [...g, ...m];
  if (xl(y) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const k = Zo([...a, ...n]).map(($) => ({
    number: $.getNumber(),
    sid: $.getSid()
  })), x = a[0];
  x ? g.forEach(($) => x.insertBefore($)) : g.forEach(($) => e.append($)), m.reduce(($, ne) => $.insertAfter(ne), e), kl(y, o.sentinels);
  const _ = new Set(o.sentinels.flat().map(($) => $.getKey()));
  a.forEach(($) => {
    _.has($.getKey()) || $.remove();
  }), n.forEach(($) => $.remove());
  const S = [...kv(e), ...m], F = Zo(S);
  for (let $ = 0; $ < k.length && $ < F.length; $++)
    F[$].getNumber() === k[$].number && F[$].setSid(k[$].sid);
  return mv(
    S,
    l,
    u,
    i,
    r
  ), !0;
}
const vv = /* @__PURE__ */ new Set(["ca", "cp"]), ah = "cp";
function Cv(e) {
  if (!Ct(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (Hs(e, t, xr, void 0), t.sentinels.length > 0) return !1;
  const n = t.text;
  if (n.trim() === "") return !1;
  const r = zc(Vp(n), {
    getMarker: xr
  }), [i] = r, s = r.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(n) ? i.content ?? [] : r;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === ah)
  );
}
function us(e) {
  const t = [];
  for (let n = e.getNextSibling(); n; n = n.getNextSibling()) {
    if (U(n) && vv.has(n.getMarker()) || Cv(n)) {
      t.push(n);
      continue;
    }
    me(n) && n.getMarker() === ah && t.push(n);
    break;
  }
  return t;
}
function kI(e) {
  const t = (r) => U(r) && vv.has(r.getMarker()) || Cv(r);
  if (t(e) || me(e) && e.getMarker() === ah)
    for (let r = e.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if ($e(r)) return r;
      if (!t(r)) return;
    }
}
function ea(e, t, n) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const r = us(e);
  if (r.some((s) => me(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (En(e.getChildren(), i, t, n), En(r, i, t, n), !(i.sentinels.length > 0))
    return i;
}
function xI(e, t) {
  const { viewOptions: n, getMarker: r, logger: i } = t, s = [e, ...us(e)], o = ea(e, r, n);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = N();
  if (E(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((y) => y.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Cl(o, l.anchor));
  }
  const u = Tl(s, o, void 0, Ft()), f = zc(Vp(o.text), {
    getMarker: r
  }), [d] = f;
  if (f.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Jr(f) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const p = ar.serializeEditorState(
    { type: rr, version: nr, content: f },
    n
  );
  if (Sr(p.root.children, r) === vr(s, r)) {
    let m = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), m = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), m = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const h = p.root.children.map((m) => qr(m));
  if (!$e(h[0]))
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1;
  const g = h[0];
  return h.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), vl(
    u,
    () => ea(g, r, n)
  ), gv(h, a, c, r, n), !0;
}
function ta(e) {
  let t, n;
  for (let r = e; r; r = r.getParent()) {
    if (et(r)) return;
    !t && (q(r) && !Gp(r) || me(r) || $e(r) || Ie(r)) && (t = r), An(r.getParent()) && (n = r);
  }
  return t && !t.is(n) ? t : (n ? kI(n) : void 0) ?? t;
}
function Bn(e, t) {
  const n = ta(e);
  return n ? q(n) ? mI(n, t) : $e(n) ? xI(n, t) : Ie(n) ? Tv(n, t) : yv([n], t) : !1;
}
const TI = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Dm(e, t) {
  const n = Object.entries(e).filter(
    (r) => typeof r[1] == "string" && !TI.has(r[0])
  );
  if (n.length !== 0) {
    t.push("|");
    for (const [r, i] of n) t.push(`${r}="${i}"`);
  }
}
function Ja(e, t) {
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
          t.push(`\\${r}`), Dm(n, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${r}`);
          break;
        case "char":
          t.push(`\\${r} `), Ja(n.content, t), Dm(n, t), i !== "false" && t.push(`\\${r}*`);
          break;
        case "note": {
          const s = n.caller, o = n.category;
          t.push(`\\${r} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Ja(n.content, t), i !== "false" && t.push(`\\${r}*`);
          break;
        }
        default:
          t.push(`\\${r} `), Ja(n.content, t);
      }
    }
}
function Km(e, t, n) {
  const r = ta(e);
  if (!mt(r)) return !1;
  const i = N();
  if (!E(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (r.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Ie(r) ? oh(r, t, n).out : Qp(r, t, n);
  if (!o) return !1;
  const a = cs(o, {
    getMarker: t,
    opensNamelessParagraph: Xp([r])
  });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    Rn.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  Ja(a, l);
  for (const u of l.join("").replaceAll(D, "~")) {
    if (Rn.test(u)) continue;
    const f = c.get(u);
    f !== void 0 && f > 0 && c.set(u, f - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function ch(e, t) {
  return _v(e, t, T.Paragraph);
}
function Sv(e, t) {
  return _v(e, t, T.Character);
}
function _v(e, t, n) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const i = t(r)?.type;
  return i !== void 0 && i !== T.Unknown ? i === n : !(Je.isValidMarker(r) || cd(r));
}
function vI(e) {
  return [$t(e), zi()];
}
function lh(e) {
  or(e, 2);
}
function CI(e) {
  const t = N();
  if (!E(t) || !t.isCollapsed()) return !1;
  const { anchor: n } = t;
  if (n.type === "element") return n.key === e.getKey() && n.offset === 0;
  const r = e.getFirstChild();
  return r !== null && n.key === r.getKey() && n.offset === 0;
}
function Sl(e) {
  const t = CI(e);
  e.splice(0, 0, vI(e.getMarker())), t && lh(e);
}
function wc(e, t) {
  e.setMarker(t), Sl(e), lh(e);
}
function SI(e, t) {
  const n = e.getFirstChild();
  if (!n) return;
  const r = n.getNextSibling();
  if (!kn(r)) {
    if (v(r) && !w(r) && /^[ \u00A0]$/.test(r.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      r.setTextContent(D), Gt(r, ke, Mr), r.setMode("token");
      return;
    }
    if (ik(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    n.insertAfter(zi());
  }
}
function Um(e, t, n) {
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
function Io(e) {
  for (let t = e; t; t = t.getParent())
    if (me(t)) return t;
}
function _I(e) {
  const t = e.isBackward(), n = t ? e.focus : e.anchor, r = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Io(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Io(n.getNode())?.is(s) ?? !1, a = Io(r.getNode())?.is(s) ?? !1;
    return !(o && !Um(n, s, "start") || a && !Um(r, s, "end"));
  });
}
function Of(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const n = N();
  if (!(!E(n) || n.isCollapsed()))
    for (const r of _I(n)) t.add(r.getKey());
}
function MI(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const n = N();
  if (!E(n) || !n.isCollapsed()) return;
  const r = Io(n.focus.getNode());
  r && t.add(r.getKey());
}
function EI(e) {
  const t = N();
  !E(t) || t.isCollapsed() || t.getNodes().some((n) => w(n)) && (Of(e), t.removeText());
}
const AI = new RegExp(
  String.raw`^\\\+?([${Gn}]+)(?:[ \u00A0]|$)`
);
function PI(e, t) {
  const n = AI.exec(e.getTextContent());
  return !!n && ch(n[1], t);
}
function wI(e, t) {
  if (!as(t.viewOptions)) return;
  if (yn(e.getFirstChild())) {
    SI(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (PI(e, t.getMarker)) return;
    Sl(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const r = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!r && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => me(o) && !o.is(e))) {
      wc(e, zn), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const n = e.getPreviousSibling();
  if (mt(n)) {
    const r = e.getChildren().filter((a) => !kn(a)), i = N();
    let s = !1;
    if (E(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Io(a)?.is(e) && (s = !r.some(
        (c) => a.is(c) || A(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = n.getChildrenSize();
    n.append(...r), e.remove(), s && or(n, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  wc(e, zn);
}
function NI(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const n = Qn(t, Ys(e.getMarker()));
  return n === "" ? void 0 : n;
}
function Mv(e) {
  const t = e.getChildren().filter((s) => !w(s) && de(s, ke) !== "attribute"), n = t[0];
  n && v(n) && n.getTextContent().startsWith(D) && n.setTextContent(n.getTextContent().slice(1));
  const r = NI(e);
  r && t.push(Re(r));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function OI(e) {
  const t = e.getNode();
  let n;
  if (e.type === "element" && A(t) ? n = t.getChildAtIndex(e.offset) : w(t) && e.offset === 0 ? n = t : v(t) && e.offset === t.getTextContentSize() && (n = t.getNextSibling()), U(n) && (n = n.getFirstChild()), !w(n) || n.getMarkerSyntax() !== "opening") return;
  const r = n.getParent();
  if (!(!U(r) || !n.is(r.getFirstChild())))
    return n.getTextContentSize() === 1 ? n : void 0;
}
function $I() {
  const e = N();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = OI(e.anchor), n = t?.getParent();
  if (!t || !U(n)) return !1;
  const r = t.getNextSibling();
  return t.remove(), Wr(r) && r.getTextContent().startsWith(D) && r.setTextContent(` ${r.getTextContent().slice(D.length)}`), Mv(n), v(r) && r.isAttached() && r.select(0, 0), !0;
}
function RI(e, t) {
  const n = e.getChildren(), r = n.some((s) => w(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (r) return;
    const s = n[0], o = n[n.length - 1];
    if (v(s) && s.isUnmergeable() && s.getMode() === "token" || w(o) && o.getMarkerSyntax() === "closing" && o.getMode() === "token") {
      const u = $t(e.getMarker());
      u.setMode("token");
      const f = e.getFirstChild();
      f ? f.insertBefore(u) : e.append(u);
      return;
    }
    const a = e.getCaller(), c = n.some(
      (u) => v(u) && !w(u) && u.getTextContent() === _t(a)
    ), l = es(e).some(({ node: u }) => w(u));
    if (!c && !l) return;
    n.forEach((u) => {
      w(u) || (v(u) && u.getTextContent() === _t(a) && u.setTextContent(a ? ` ${a} ` : " "), e.insertBefore(u));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = n.some((s) => w(s) && s.getMarkerSyntax() === "closing");
  r !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function II(e, t) {
  if (e.isEmpty()) return;
  const n = e.getFirstChild();
  if (!(w(n) && n.getMarkerSyntax() === "opening")) {
    Mv(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => w(o) && o.getMarkerSyntax() === "closing");
  i && !s && Bn(e, t);
}
function Ev(e, t, n) {
  if (!w(e.getFirstChild()) && n?.markerMode === "editable" && as(n)) {
    wc(e, t);
    return;
  }
  xx(e, t);
}
function Av() {
  const e = N();
  if (!E(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Pv(e);
    return t !== "removed" ? t : ($f(), "handled");
  }
  return $f() ? "handled" : "declined";
}
function LI(e, t) {
  if (!t) return e;
  const n = j$.exec(e);
  if (!n) return e;
  const r = n[1];
  return r === "c" || r === "v" || t(r)?.type !== T.Paragraph ? e : e.slice(n[0].length);
}
function Bm(e, t) {
  const n = N();
  if (!E(n)) return "declined";
  if (n.isCollapsed()) {
    if (!wv())
      return "declined";
  } else {
    const s = Pv(n);
    if (s !== "removed") return s;
  }
  const [r, ...i] = e.map(
    (s) => LI(s, t)
  );
  Fm(r ?? "");
  for (const s of i)
    $f(), Fm(s);
  return "handled";
}
function qI(e) {
  const t = e.getRootElement(), n = t?.ownerDocument.getSelection(), r = n?.anchorNode;
  if (!t || !n || !r || !t.contains(r)) return !1;
  const i = Zi(r);
  if (!i) return !1;
  const s = wn(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !v(i) || w(i)) return !1;
  const o = Math.min(n.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Pv(e) {
  const t = wn(e.anchor.getNode()), n = wn(e.focus.getNode()), r = t?.getIsCollapsed() === !1, i = n?.getIsCollapsed() === !1;
  return !r && !i ? "declined" : (e.removeText(), DI() ? "removed" : "needs-plain-split");
}
function Fm(e) {
  if (e === "") return;
  const t = N();
  E(t) && t.insertText(e);
}
function DI() {
  const e = N();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = wn(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((n) => w(n) && n.getMarkerSyntax() === "opening");
}
function wv() {
  const e = N();
  if (!E(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), n = wn(t);
  if (!(!n || n.getIsCollapsed() !== !1 || n.is(t)))
    return n;
}
function $f() {
  const e = N();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), n = wv();
  if (!n) return !1;
  let r = t;
  for (; !n.is(r.getParent()); ) {
    const l = r.getParent();
    if (!l) return !1;
    r = l;
  }
  const i = Ur("fp", { closed: "false" });
  i.append($t("fp"));
  const s = v(t) && !w(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(r);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    Us(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    r.insertAfter(i);
    const [u] = l;
    u && (SM(u), i.append(u));
  }
  return i.getChildren().every(w) && i.append(Re(Pt)), Nv(i), !0;
}
function Nv(e) {
  const t = e.getChildren().find((n) => !w(n));
  if (v(t)) {
    const n = md(t);
    t.select(n, n);
    return;
  }
  if (A(t)) {
    Nv(t);
    return;
  }
  e.selectEnd();
}
function KI(e) {
  const t = [];
  let n = e;
  for (; n; )
    U(n) && t.push(n.getMarker()), n = n.getParent();
  return t;
}
function UI(e) {
  const t = e.getTopLevelElement(), n = [];
  for (const r of Ce().getChildren()) {
    if (t && r.is(t)) {
      Ie(r) && n.push(r.getMarker());
      break;
    }
    (Ie(r) || at(r) || me(r)) && n.push(r.getMarker());
  }
  return n;
}
function BI(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getFirstChild();
    if (!n) break;
    t = n;
  }
  return t;
}
function FI(e, t, n) {
  const r = e.getFirstChild();
  if (!r) return !1;
  let i = r;
  if (yn(r)) {
    if (t.is(r)) return !0;
    if (i = r.getNextSibling(), i && kn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(BI(i)) && n === 0 : !1;
}
function zI(e, t, n) {
  const r = e.getFirstChild();
  if (!r || !yn(r)) return !1;
  if (t.is(r)) return !0;
  const i = r.getNextSibling();
  return i !== null && kn(i) && t.is(i) && n === 0;
}
function jI() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: n, y: r, width: i, height: s } = t.getBoundingClientRect();
  return { x: n, y: r, width: i, height: s };
}
function VI() {
  const e = N();
  if (!E(e)) return;
  const t = e.focus.getNode(), n = e.focus.offset, r = !e.isCollapsed(), i = Ze(t, me), s = i ? void 0 : Ze(t, Ie), o = !r && !s && (!i || zI(i, t, n)) ? "paragraph" : "character", a = wn(t);
  return {
    source: o,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: i?.getMarker() ?? s?.getMarker(),
    previousParaMarkers: UI(t),
    openCharMarkers: KI(t),
    noteMarker: a?.getMarker(),
    hasTextSelection: r,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: jd(t, n),
    anchorRect: jI()
  };
}
function WI() {
  const e = N();
  if (!E(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!v(t) || w(t)) return;
  const n = e.anchor.offset, r = t.getTextContent().slice(0, n), i = V$.exec(r);
  i && t.spliceText(n - i[0].length, i[0].length, "", !0);
}
function HI(e, t, n) {
  Ev(e, t, n), lh(e);
}
function GI(e, t, n) {
  const r = N();
  if (!E(r)) return;
  const i = r.focus.getNode(), s = Ze(i, me);
  if (t === "backslash" && s && FI(s, i, r.focus.offset)) {
    HI(s, e, n);
    return;
  }
  Rf(e, n);
}
function Ov(e, t) {
  const n = e.getNode(), r = fT(A(n) ? n : n.getParent());
  return t.is(r);
}
function JI(e, t) {
  const n = e.getNode();
  return !t.is(n) && !t.isParentOf(n) ? !1 : !Ov(e, t);
}
function Nc(e, t, n) {
  const r = n.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= r && e.set(t.getKey(), r + 1, "element");
}
function YI(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!w(t) || t.getMarkerSyntax() !== "opening") return e;
  const n = t.getParent();
  if (!U(n)) return e;
  const r = n.getParent();
  return r ? Zt(r.getKey(), n.getIndexWithinParent(), "element") : e;
}
function XI(e, t, n) {
  const r = N();
  if (!E(r)) return !1;
  const i = r.isBackward() ? r.focus : r.anchor;
  if (!Ov(i, e)) return !1;
  const s = r.isBackward() ? r.anchor : r.focus;
  if (!r.isCollapsed() && JI(s, e)) return !1;
  const o = Pd(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (Nc(r.anchor, e, o), Nc(r.focus, e, o)), r.isCollapsed() || r.removeText();
  const a = N();
  if (!E(a) || !a.isCollapsed()) return !1;
  const c = hT(a);
  if (!c) return !1;
  const { parent: l, moving: u } = pT(
    YI(c.anchor)
  );
  if (!e.is(l)) return !1;
  const f = u.filter((h) => !h.is(o)), d = qs(t);
  e.insertAfter(d), d.append(...f);
  const [p] = f;
  return U(p) ? Zc(p) : d.select(0, 0), as(n) && Sl(d), !0;
}
function QI(e, t) {
  const n = N();
  return !E(n) || !n.isCollapsed() ? !1 : (n.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function $v(e) {
  const t = N();
  return E(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function ZI(e) {
  const t = Ze(e.anchor.getNode(), Ie);
  if (!t) return;
  const n = t.getFirstChild();
  !n || !Pd(n) || (Nc(e.anchor, t, n), Nc(e.focus, t, n));
}
function e2(e, t, n, r) {
  const i = N();
  if (E(i) ? ZI(i) : r.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && WI(), e.kind === "closeTag") {
    $v(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Av() !== "declined") return;
  if (e.kind === "paragraph" && It.isValidMarker(e.marker, r.nodeOptions?.extraValidMarkers)) {
    GI(e.marker, t.trigger, r.viewOptions);
    return;
  }
  if (Je.isValidMarker(e.marker, r.nodeOptions?.extraValidMarkers))
    return yT(
      e.marker,
      n,
      r.expandedNoteKeyRef,
      r.viewOptions,
      r.nodeOptions,
      r.logger
    );
  mf(
    e.marker,
    r.expandedNoteKeyRef,
    r.viewOptions,
    r.nodeOptions,
    r.logger,
    void 0,
    r.styleInfo
  ).action({ editor: Ft(), reference: n });
}
function Rf(e, t) {
  const n = N();
  if (!E(n)) return !1;
  Vd(n);
  const r = (n.isBackward() ? n.focus : n.anchor).getNode();
  if (!Ze(r, me)) {
    const o = Ze(r, Ie);
    if (o) return XI(o, e, t);
  }
  const i = as(t);
  if (gT()) {
    const o = N();
    if (!E(o)) return !1;
    const a = Ze(o.anchor.getNode(), me);
    return a ? (a.setMarker(e), i && Sl(a), !0) : !1;
  }
  const s = n.insertParagraph();
  return me(s) ? (i ? wc(s, e) : s.setMarker(e), !0) : !1;
}
function t2() {
  const [e] = ve();
  return H(() => e.registerCommand(Ny, () => !0, Qt), [e]), null;
}
function n2(e, t) {
  if (!e.startsWith("\\")) return !0;
  const n = B$.exec(e)?.[1];
  return n === void 0 ? !1 : !ch(n, t);
}
function Rv(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !n2(e.getTextContent(), t)) return;
  const n = e.getParent();
  if (!me(n)) return;
  const r = t(n.getMarker())?.type;
  if (r !== void 0 && r !== T.Unknown || n.getFirstChild()?.is(e) !== !0) return;
  const i = n.getPreviousSibling();
  if (!(!me(i) && !Ie(i)))
    return [i, n];
}
function Iv(e, t) {
  const n = Rv(e, t.getMarker);
  if (!n) return !1;
  const [r, i] = n;
  return Ie(r) ? Tv(r, t, [i]) : yv([r, i], t);
}
function r2(e, t) {
  const n = N();
  E(n) && [n.anchor, n.focus].forEach((r) => {
    r.key === e.getKey() && r.offset > t && r.set(e.getKey(), t, "text");
  });
}
function Lv(e) {
  const t = F$.exec(e);
  if (!t) return;
  const n = 1 + t[1].length;
  return { start: n, end: n + t[2].length };
}
function i2(e) {
  const t = N();
  if (!E(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const n = Lv(e.getTextContent());
  if (!n) return;
  const { offset: r } = t.anchor;
  if (!(r < n.start || r > n.end))
    return r - n.start;
}
function s2(e) {
  const t = N();
  if (!E(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const n = e.getNextSibling();
  if (q(e.getParent()) && v(n)) {
    const r = n.getNextSibling();
    if (U(r)) {
      Zc(r);
      return;
    }
  }
  v(n) ? n.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function zm(e, t) {
  if (t !== void 0) {
    const n = e.getLatest(), r = Lv(n.getTextContent());
    if (r) {
      const i = Math.min(r.start + t, r.end);
      n.select(i, i);
      return;
    }
  }
  s2(e);
}
function If(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function qv(e, t, n) {
  if (t.startsWith("+") !== e.getNested())
    return Bn(e, n);
  const r = i2(e), i = e.getParent();
  if (me(i)) {
    if (!ch(t, n.getMarker))
      return Iv(e, n) ? (n.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Bn(e, n);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), If(s, t) && zm(e, r), n.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (U(i) || q(i)) {
    const s = t.replace(/^\+/, "");
    if (!(U(i) ? Sv(t, n.getMarker) : Je.isValidMarker(s)) || U(i) && Td(i))
      return Bn(e, n);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Bn(e, n);
    i.setMarker(s);
    const c = i.getChildren().filter(w).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (r2(c, ot(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), If(a, s) && zm(e, r), n.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Bn(e, n);
}
function Dv(e, t) {
  if (!w(e) || e.getMarkerSyntax() !== "opening") return;
  const n = e.getParent();
  if (!U(n) || !n.getFirstChild()?.is(e)) return;
  const r = ro.exec(e.getTextContent());
  if (!r) return;
  const i = r[1];
  if (i.startsWith("+") !== e.getNested() || !Sv(i, t)) return;
  const s = e.getMarker();
  if (n.getMarker() !== s) return;
  const o = i.replace(/^\+/, "");
  if (If(s, o) && !Td(n))
    return { char: n, glyph: e, closer: o2(n, s), newMarker: o };
}
function o2(e, t) {
  return e.getChildren().filter(w).filter((n) => n.getMarkerSyntax() === "closing" && n.getMarker() === t).at(-1);
}
function a2(e) {
  const t = N();
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
function c2(e) {
  const t = e.getTextContent(), n = e.getMarkerSyntax() === "closing", r = (n ? /[ \u00A0]+$/ : /^[ \u00A0]+/).exec(t)?.[0];
  if (!r || r.length === t.length) return !1;
  const i = e.getParent();
  let s = e;
  if (n) {
    if (!q(i) || !i.getLastChild()?.is(e)) return !1;
    s = i;
  } else if (Fe(i)) {
    const f = Tr(e)?.owner;
    if (!Ke(f) || !i.getFirstChild()?.is(e)) return !1;
    s = f;
  } else if (i?.getFirstChild()?.is(e)) {
    if (me(i)) return !1;
    s = i;
  }
  const o = n ? s.getNextSibling() : s.getPreviousSibling();
  if (!v(o)) return !1;
  const a = n ? t.slice(0, t.length - r.length) : t.slice(r.length);
  if (e.setTextContent(a), !ur(e))
    return e.setTextContent(t), !1;
  const c = N(), l = E(c) && c.isCollapsed() && c.anchor.key === e.getKey() ? c.anchor.offset : void 0;
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
function l2(e, t) {
  const n = e.getTextContent();
  if (ur(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Fe(e.getParent()) && fd(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !a2(e)) {
    q_(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (c2(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    if (b0(e) || k2(e)) {
      t.pendingKeys.delete(e.getKey());
      return;
    }
    const r = wT.exec(n);
    if (r) {
      t.pendingKeys.delete(e.getKey()), qv(e, r[1], t);
      return;
    }
    if (U$.test(n)) {
      t.pendingKeys.delete(e.getKey()), Bn(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const r = e.getParent(), i = ot(e.getMarker(), e.getNested());
    if ((U(r) || q(r)) && !Qf(r.getParent()) && e.getMarker() === r.getMarker() && r.getLastChild()?.is(e) && n.startsWith(i) && n.length > i.length) {
      const s = N(), o = E(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = Re(n.slice(i.length));
      e.setTextContent(i), r.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  if (u2(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function u2(e) {
  if (e.getMarkerSyntax() !== "selfClosing" || !Ke(Tr(e)?.owner)) return !1;
  const t = ot(""), n = e.getTextContent();
  if (!n.startsWith(t) || n.length === t.length) return !1;
  const r = e.getParent(), i = Fe(r) ? r : e;
  if (Fe(r) && !r.getLastChild()?.is(e)) return !1;
  const s = i.getParent();
  if (!s || Qf(s)) return !1;
  const o = N(), a = E(o) && o.isCollapsed() && o.anchor.key === e.getKey() && o.anchor.offset > t.length ? o.anchor.offset - t.length : void 0, c = Re(n.slice(t.length));
  return e.setTextContent(t), i.insertAfter(c), a !== void 0 && c.select(a, a), !0;
}
function f2(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (lk(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Kv(e) {
  if (!td(e)?.length)
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
const xo = Kv("v"), d2 = Kv("c"), jm = /^[ \u00A0]*$/;
function Vm(e, t, n) {
  const r = e.getNextSibling();
  if (v(r) && r.getType() === st.getType() && r.getMode() === "normal" && de(r, ke) !== "attribute")
    return r.setTextContent(t + r.getTextContent()), n !== void 0 && r.select(n, n), r;
  const i = Re(t);
  return e.insertAfter(i), n !== void 0 && i.select(n, n), i;
}
function p2(e, t) {
  const n = e.getTextContent(), r = jn("v", e.getNumber());
  if (n === r) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(n);
  if (i) {
    const c = n.slice(i[0].length);
    if (xo.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = xo.valueAndRest.exec(c);
    if (l && jm.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (xo.midEdit.test(n)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = xo.valueAndRest.exec(n);
  if (!s) {
    const c = xo.markerRest.exec(n);
    if (c) {
      const [, l, u, f] = c, d = N(), p = E(d) && d.isCollapsed() && d.anchor.key === e.getKey() ? d.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(jn("v", u));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, f.length) : void 0;
      Vm(e, f, h);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Bn(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(n)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), jm.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(jn("v", o)), a && Vm(e, a, a.length);
}
const h2 = /^[ \u00A0]+([^ \u00A0\\]*)[ \u00A0]([\s\S]*)$/;
function g2(e, t) {
  if (!$T(e)) return !1;
  const n = e.getParent();
  if (!q(n)) return !1;
  const r = n.getCaller(), i = e.getTextContent();
  if (i === _t(r))
    return t.pendingKeys.delete(e.getKey()), !0;
  if (!e.isUnmergeable()) return !1;
  t.pendingKeys.delete(e.getKey());
  const s = h2.exec(i);
  return s ? (y2(e, n, s[1], s[2]), !0) : b2(e, r) ? !0 : jc(i, r).missing && /^[ \u00A0]/.test(i) && !i.includes("\\") && Uv(e) ? (t.pendingKeys.add(e.getKey()), !0) : (Bv(e, n), !0);
}
function m2(e) {
  if (!Ml(e)) return !1;
  const t = e.getTextContent(), n = /^[ \u00A0]+/.exec(t)?.[0];
  if (!n) return !1;
  const r = e.getPreviousSibling(), i = v(r) && r.getMode() === "token" && !!_l(r);
  if (!v(r) || !(Ue(r) || i)) return !1;
  const s = N();
  if (!E(s) || !s.isCollapsed() || s.anchor.key !== e.getKey() || s.anchor.offset > n.length)
    return !1;
  const o = s.anchor.offset, a = t.slice(n.length), c = r.getTextContentSize();
  return r.getMode() === "token" ? r.select(c, c) : (r.setTextContent(r.getTextContent() + n), r.select(c + o, c + o)), a ? e.setTextContent(a) : e.remove(), !0;
}
function y2(e, t, n, r) {
  const i = e.getTextContent(), s = i.length - r.length, o = /^[ \u00A0]*/.exec(i)?.[0].length ?? 0, a = N(), c = E(a) && a.isCollapsed() && a.anchor.key === e.getKey() ? a.anchor.offset : void 0;
  t.getCaller() !== n && t.setCaller(n), e.setTextContent(_t(n));
  const l = r ? zv(t, e, r.replaceAll(D, " ")) : void 0;
  if (c === void 0) return;
  if (c >= s) {
    const f = c - s;
    l ? l.select(f, f) : e.select(e.getTextContentSize(), e.getTextContentSize());
    return;
  }
  const u = 1 + Math.min(Math.max(c - o, 0), n.length);
  e.select(u, u);
}
function b2(e, t) {
  const n = N();
  if (!E(n) || !n.isCollapsed()) return !1;
  const { anchor: r } = n;
  if (r.key !== e.getKey() || r.type !== "text") return !1;
  const i = e.getTextContent(), s = i.slice(0, r.offset);
  if (i.slice(r.offset) !== _t(t) || !NT.test(s) || s.includes("\\")) return !1;
  const o = e.getPreviousSibling();
  if (!w(o) || o.getMarkerSyntax() !== "opening" || !ro.test(o.getTextContent())) return !1;
  const a = o.getTextContent() + s;
  return e.setTextContent(_t(t)), o.setTextContent(a), o.select(a.length, a.length), !0;
}
function k2(e) {
  const t = e.getParent();
  if (!q(t) || t.getIsCollapsed() !== !1) return !1;
  const n = N();
  if (!E(n) || !n.isCollapsed()) return !1;
  const r = e.getTextContent(), { anchor: i } = n;
  if (i.key !== e.getKey() || i.offset !== r.length) return !1;
  const s = Ve(e.getMarker()), o = r.slice(s.length);
  if (!r.startsWith(s) || !/^[|\\\s]+$/.test(o)) return !1;
  const a = e.getNextSibling();
  return !v(a) || w(a) || !a.isUnmergeable() ? !1 : (e.setTextContent(s), a.setTextContent(o + a.getTextContent()), a.select(o.length, o.length), !0);
}
function Uv(e) {
  const t = N();
  if (!E(t) || !t.isCollapsed()) return !1;
  const { anchor: n } = t;
  if (n.key === e.getKey()) return !0;
  const r = e.getNextSibling();
  return n.offset === 0 && r !== null && n.key === r.getKey();
}
function Bv(e, t) {
  const n = t.getCaller(), r = e.getTextContent(), { start: i } = jc(r, n), s = ld(r, n), o = N(), a = E(o) && o.isCollapsed() && o.anchor.key === e.getKey() ? o.anchor.offset : void 0;
  e.setTextContent(_t(n));
  const c = s ? zv(t, e, s) : void 0;
  if (a !== void 0)
    if (c && a >= i) {
      const l = Math.min(a - i, s.length);
      c.select(l, l);
    } else jv(t, e);
}
function _l(e) {
  if (!v(e) || w(e) || !e.isUnmergeable()) return;
  const t = e.getParent();
  if (!q(t) || t.getIsCollapsed() !== !1) return;
  let n = t.getFirstChild();
  for (; w(n) && n.getMarkerSyntax() === "opening"; ) n = n.getNextSibling();
  return e.is(n) ? t : void 0;
}
function x2(e, t, n) {
  const r = _l(e);
  if (!(!r || !v(e)))
    return e.getTextContent() === _t(r.getCaller()) ? !1 : n === "idle" && Uv(e) ? (t.pendingKeys.add(e.getKey()), !1) : (Bv(e, r), !0);
}
function Fv(e, t) {
  const { wrapper: n, closer: r } = pa(e);
  return (n ?? r ?? t).getNextSibling();
}
function Ml(e) {
  return v(e) && e.getType() === st.getType() && e.getMode() === "normal" && !e.isUnmergeable() && de(e, ke) !== "attribute";
}
function zv(e, t, n) {
  const r = Fv(e, t);
  if (Ml(r))
    return r.setTextContent(n + r.getTextContent()), r;
  const i = Re(n);
  return r ? r.insertBefore(i) : e.append(i), i;
}
function jv(e, t) {
  const n = Fv(e, t);
  Ml(n) ? n.select(0, 0) : n ? e.select(n.getIndexWithinParent(), n.getIndexWithinParent()) : e.select(e.getChildrenSize(), e.getChildrenSize());
}
function T2(e, t) {
  if (!e.isAttached() || e.getIsCollapsed() !== !1) return;
  const n = e.getCaller();
  if (!td(e.getMarker())?.includes("caller")) return;
  const r = e.getChildren();
  let i = 0;
  for (; i < r.length; ) {
    const c = r[i];
    if (!w(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (i === 0) return;
  const s = r[i];
  if (v(s) && !w(s) && (s.isUnmergeable() || s.getTextContent() === _t(n)))
    return;
  const o = Re(_t(n)).toggleUnmergeable();
  t.viewOptions?.isNoteShellEditable === !1 && o.setMode("token"), r[i - 1].insertAfter(o);
  const a = N();
  E(a) && a.isCollapsed() && (a.anchor.key === r[i - 1].getKey() || a.anchor.key === e.getKey() && a.anchor.offset === i) && jv(e, o);
}
function v2(e) {
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
  Ml(i) && U(s) && !s.getChildren().some((o) => w(o) && o.getMarkerSyntax() === "closing") && s.append(i);
}
function C2(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!v(t)) return;
  const n = jn("c", e.getNumber()), r = t.getTextContent();
  if (r === n) return;
  const i = /^[ \u00A0]+/.exec(r), s = i ? r.slice(i[0].length) : r, o = d2.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Vv(e) {
  if (Ke(e)) {
    const { wrapper: t } = Vc(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (q(e)) {
    const { wrapper: t } = pa(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if ($e(e)) {
    const t = [], n = pb(e);
    n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper);
    const r = gb(e);
    return r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper), t;
  }
  if (Ue(e)) {
    const t = [], n = Vo(e, "va");
    n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper);
    const r = n.wrapper ?? n.closer ?? e, i = Vo(r, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function S2(e) {
  const t = N();
  if (!E(t) || !t.isCollapsed()) return !1;
  const n = t.anchor.getNode();
  return Vv(e).some((r) => n.is(r));
}
function _2(e, t, n = "departure") {
  let r = !1;
  const i = n === "departure";
  if (i && me(e) && ik(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Wo)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && ma(l, e) && (i || S2(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Vv(e))
    l.remove(), r = !0;
  let s = !1;
  U(e) && Ab(e) !== void 0 && !Td(e) && (Pb(e), s = !0, r = !0);
  let o = !1, a = !1, c = !1;
  for (const l of Wo)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (lE(l, e)) {
        Jo(l, e), a = !0, r = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && _k(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      el(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: r } : { handled: o, mutated: r };
}
function Wm(e) {
  return v(e) && e.getType() === st.getType() && e.getMode() === "normal" && de(e, ke) !== "attribute";
}
function M2(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const n = X(e);
  if (!n?.isAttached()) return t;
  for (let r = n.getPreviousSibling(); r && Wm(r); r = r.getPreviousSibling())
    t.add(r.getKey());
  for (let r = n.getNextSibling(); r && Wm(r); r = r.getNextSibling())
    t.add(r.getKey());
  return t;
}
function Ia(e, t, n = "departure") {
  let r = !1;
  if (e.pendingKeys.size === 0) return r;
  const i = M2(t), s = [...e.pendingKeys].filter((l) => !i.has(l)), o = new Set(
    s.filter((l) => {
      const u = X(l);
      return !!u?.isAttached() && !!Dv(u, e.getMarker);
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
    if (_l(u)) {
      e.pendingKeys.delete(l), r = x2(u, e, n) || r;
      continue;
    }
    if (w(u)) {
      e.pendingKeys.delete(l);
      const g = u.getTextContent();
      if (ur(u)) continue;
      const m = ro.exec(g);
      u.getMarkerSyntax() === "opening" && m ? r = qv(u, m[1], e) || r : n === "idle" && Km(u, e.getMarker, e.viewOptions) ? e.pendingKeys.add(l) : Iv(u, e) ? (r = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : r = Bn(u, e) || r;
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
    const h = _2(d, e, n);
    if (r = h.mutated || r, !h.handled) {
      if (n === "idle" && Km(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(p);
        continue;
      }
      r = Bn(d, e) || r;
    }
  }
  return r;
}
function Wv(e) {
  if (xn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (U(t)) return Eo(t) !== void 0;
  return !1;
}
function E2(e) {
  const t = Tr(e);
  if (!t) return !1;
  const n = Fr(t.kind);
  return !el(
    n,
    n.scanPieces(t.owner),
    n.expectedPieces(t.owner)
  );
}
function Hm(e) {
  let t = e.getParent();
  for (; ue(t); ) t = t.getParent();
  return U(t) ? t : void 0;
}
function A2(e, t) {
  const n = N();
  if (!E(n) || !n.isCollapsed()) return !1;
  const { anchor: r } = n;
  if (r.key !== e.getKey() || r.type !== "text") return !1;
  const i = t.getFirstChild();
  if (!w(i) || i.getMarkerSyntax() !== "opening") return !1;
  let s = i.getNextSibling();
  for (; ue(s); ) s = s.getFirstChild();
  if (!e.is(s) || !ro.test(i.getTextContent())) return !1;
  const o = e.getTextContent(), a = o.slice(0, r.offset);
  if (!NT.test(a) || o[r.offset] !== D) return !1;
  const c = i.getTextContent() + a;
  return e.setTextContent(o.slice(a.length)), i.setTextContent(c), i.select(c.length, c.length), !0;
}
function P2(e, t) {
  const n = e.getTextContent(), r = de(e, ke), i = e.getParent();
  if (r !== "attribute" && $e(i)) {
    n.replace(/^[ \u00A0]+/, "") === jn("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (g2(e, t) || m2(e)) return;
  if (r === "attribute") {
    E2(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Hm(e);
  if (s && A2(e, s)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!n.includes("\\")) {
    n.includes("|") && Wv(e) || n.includes("//") && !Iu(e) || mb(e) || $e(ta(e)) ? t.pendingKeys.add(e.getKey()) : t.pendingKeys.delete(e.getKey());
    const c = Hm(e);
    c && xd(c) ? t.pendingKeys.add(c.getKey()) : c && Ab(c) !== void 0 && c.markDirty();
    return;
  }
  if (Iu(e)) return;
  const o = N(), a = E(o) && o.isCollapsed() && o.anchor.key === e.getKey() ? n.slice(0, o.anchor.offset) : n;
  if (z$.test(a)) {
    if (O_(n)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(n)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(n), Bn(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function w2(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : _k(e, t);
}
function N2(e) {
  const t = (n) => {
    if (w(n)) {
      ur(n) || e.pendingKeys.add(n.getKey());
      return;
    }
    if (xn(n)) {
      lk(n) || e.pendingKeys.add(n.getKey());
      return;
    }
    for (const r of Wo)
      r.settleScope !== "none" && r.ownerPredicate(n) && (ma(r, n) || w2(r, n)) && e.pendingKeys.add(n.getKey());
    if (Ue(n)) {
      n.getTextContent() !== jn("v", n.getNumber()) && e.pendingKeys.add(n.getKey());
      return;
    }
    if (v(n)) {
      if (n.getType() !== st.getType() || de(n, ke) === "attribute") return;
      const r = n.getParent();
      if ($e(r)) {
        n.getTextContent() !== jn("c", r.getNumber()) && e.pendingKeys.add(n.getKey());
        return;
      }
      const i = _l(n);
      if (i) {
        n.getTextContent() !== _t(i.getCaller()) && e.pendingKeys.add(n.getKey());
        return;
      }
      const s = n.getTextContent();
      (s.includes("\\") || s.includes("|") && Wv(n) || s.includes("//") || mb(n) !== void 0) && e.pendingKeys.add(n.getKey());
      return;
    }
    if (U(n)) {
      xd(n) && e.pendingKeys.add(n.getKey()), n.getChildren().forEach(t);
      return;
    }
    if (!et(n)) {
      if (Fe(n) && n.getChildrenSize() === 0) {
        const r = Tr(n)?.owner;
        r && e.pendingKeys.add(r.getKey());
        return;
      }
      A(n) && n.getChildren().forEach(t);
    }
  };
  Ce().getChildren().forEach(t);
}
const Hv = Vf(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function ku(e) {
  const t = e();
  return Wt(Gf), Wt(Fy), t;
}
const Gm = 8, O2 = 1e3;
function xs(e, t) {
  const n = Ue(e) ? ["va", "vp"] : Ke(e) ? ["milestone"] : q(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const r of n)
    hE(Fr(r), e, t.pendingKeys);
}
function $2(e, t) {
  const n = (r, i) => {
    if (i.updateTags.has(Kc) || Fd(e) === "remote")
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
        c?.isAttached() && Fr(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return tt(
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
    e.registerMutationListener(st, n),
    e.registerMutationListener(Wn, n),
    e.registerMutationListener(Hn, n),
    e.registerMutationListener(Er, n)
  );
}
function Lf(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const n = N();
  return n ? t ? Gx(n, t) : E(n) && Os(n) : !1;
}
function R2(e, t, n) {
  return tt(
    e.registerCommand(
      er,
      (r) => {
        if (ul() || Lf(t)) return !1;
        const i = Tf(r, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = n ? Lp(qp(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = Bm(o, t.getMarker);
          if (a === "declined" && qI(e) && (a = Bm(o, t.getMarker)), a === "handled")
            return r?.preventDefault(), !0;
        }
        return !1;
      },
      He
    ),
    e.registerCommand(
      er,
      (r) => {
        const i = Tf(r, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !c$()) return !1;
        const o = N();
        return t.structureProtectionMode === "protected" && E(o) && Os(o) ? !1 : (r?.preventDefault(), E(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Ko, void 0), a === "") return;
          const l = N();
          E(l) && l.insertText(a);
        }), !0);
      },
      Ge
    ),
    e.registerCommand(
      er,
      () => (t.splitExpected.current = !0, !1),
      Qt
    )
  );
}
function I2({
  viewOptions: e,
  getMarker: t,
  logger: n,
  markerSettleDelayMs: r,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = ve(), a = e?.markerMode === "editable", c = !!e && qt(e), l = te(void 0), u = te(r), f = te(s);
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
    const p = m0(
      o,
      d.pendingKeys,
      (I) => {
        d.pendingKeys.clear(), I.read(() => N2(d));
      }
    );
    let h, g = !1, m = !1, y, k = !1, x = !1, _ = 0;
    const S = () => _ < Gm ? !1 : (d.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Gm} consecutive mutating passes; leaving ${d.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...d.pendingKeys].join(", ")}`
    ), !0), F = (I, K = "departure") => {
      o.update(() => {
        _ = ku(
          () => Ia(d, I, K)
        ) ? _ + 1 : 0;
      });
    };
    let $;
    const ne = () => {
      if ($ !== void 0 && clearTimeout($), $ = void 0, x || d.pendingKeys.size === 0) return;
      const I = u.current ?? O2;
      I < 0 || ($ = setTimeout(() => {
        $ = void 0, !(x || d.pendingKeys.size === 0) && (g || S() || F(void 0, "idle"));
      }, I));
    }, fe = tt(
      o.registerNodeTransform(Wn, (I) => {
        if (o.isComposing()) return;
        l2(I, d);
        const K = Tr(I);
        K && (Ue(K.owner) || q(K.owner) || $e(K.owner) || Ke(K.owner) && Vc(K.owner).wrapper === void 0) && xs(K.owner, d);
      }),
      o.registerNodeTransform(Bt, (I) => {
        o.isComposing() || (p2(I, d), xs(I, d));
      }),
      o.registerNodeTransform(Ln, (I) => {
        o.isComposing() || (C2(I), I.isAttached() && xs(I, d));
      }),
      o.registerNodeTransform(It, (I) => {
        o.isComposing() || wI(I, d);
      }),
      o.registerNodeTransform(ze, (I) => {
        if (!o.isComposing()) {
          II(I, d);
          for (const K of ["separator", "char"])
            I.isAttached() && ma(Fr(K), I) && d.pendingKeys.add(I.getKey());
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
      o.registerNodeTransform(sr, (I) => {
        o.isComposing() || xs(I, d);
      }),
      o.registerNodeTransform(Er, (I) => {
        if (o.isComposing()) return;
        const K = Tr(I);
        K && (Ke(K.owner) || Ue(K.owner) || q(K.owner) || $e(K.owner)) && xs(K.owner, d);
      }),
      o.registerNodeTransform(Je, (I) => {
        o.isComposing() || (RI(I, d), T2(I, d), v2(I), xs(I, d));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(fr, (I) => {
        o.isComposing() || f2(I, d);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(st, (I) => {
        o.isComposing() || P2(I, d);
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
        st,
        (I) => {
          o.getEditorState().read(() => {
            for (const [K, ge] of I) {
              if (ge === "destroyed") continue;
              const re = X(K);
              !re || de(re, ke) !== "attribute" || Fe(re.getParent()) || o.getElementByKey(K)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      $2(o, d),
      ...c ? [
        o.registerNodeTransform(st, (I) => {
          o.isComposing() || nR(I);
        }),
        o.registerCommand(
          Is,
          (I) => _m(
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
          ir,
          (I) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            _m(
              I && typeof I == "object" && "clipboardData" in I ? I : null,
              o,
              !0,
              f.current
            )
          ),
          Ge
        ),
        o.registerCommand(
          er,
          (I) => uR(
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
        ir,
        () => (!Lf(d) && !ul() && Of(d), !1),
        He
      ),
      o.registerCommand(
        ca,
        () => (o.isComposing() || EI(d), !1),
        kr
      ),
      o.registerCommand(
        Bc,
        (I) => I || o.isComposing() ? !1 : $I(),
        kr
      ),
      o.registerCommand(
        Uc,
        () => (g = !1, _ = 0, ne(), !1),
        Qt
      ),
      o.registerCommand(
        _r,
        (I) => (g = !1, _ = 0, ne(), (I.key === "Backspace" || I.key === "Delete") && !Lf(d, jx(I)) && (Of(d), MI(d), queueMicrotask(() => {
          d.wholeParaDeleteExpected?.clear(), d.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !I.ctrlKey || I.altKey || I.shiftKey || I.metaKey || I.key !== " " && I.code !== "Space" || !a$() ? !1 : (I.preventDefault(), !0)),
        Ge
      ),
      o.registerCommand(
        Py,
        (I) => {
          const K = Av();
          K === "needs-plain-split" && o.dispatchCommand(Ko, void 0);
          const ge = K !== "declined" || gE();
          return ge && I?.preventDefault(), Ia(d), ge;
        },
        Ge
      ),
      o.registerCommand(
        Ko,
        () => (d.splitExpected.current = !0, gT()),
        Ge
      ),
      R2(o, d, c),
      o.registerCommand(
        Hv,
        () => {
          if (g) return !0;
          const I = o.getRootElement(), K = I?.ownerDocument, ge = !!I && !!K && K.hasFocus() && I.contains(K.activeElement);
          let re;
          if (ge) {
            const Le = N();
            re = E(Le) ? Le.focus.key : h;
          }
          return ku(() => Ia(d, re)), !0;
        },
        Qt
      ),
      o.registerCommand(
        rd,
        () => (m = !0, !1),
        Qt
      ),
      o.registerCommand(
        Xf,
        () => {
          if (g) return !1;
          const I = N(), K = E(I) ? I.focus.key : h;
          return ku(() => Ia(d, K)), !1;
        },
        Qt
      ),
      o.registerUpdateListener(({ editorState: I, tags: K }) => {
        const ge = m || K.has($i);
        m = !1, d.splitExpected.current = !1, d.wholeParaDeleteExpected?.clear(), d.collapsedDeleteCaretParas?.clear(), d.rebuildAttempted.clear();
        const re = I.read(() => {
          const ye = N();
          return E(ye) ? ye.focus.key : void 0;
        }), Le = y;
        if (re !== void 0 && (y = re), K.has(Kc)) {
          _b(o, I, K), g = !0, re !== void 0 && (h = re);
          return;
        }
        if (ge) {
          re !== void 0 && re !== Le && (g = !0);
          return;
        }
        g || (re !== void 0 && (h = re), ne(), !(k || re === void 0) && [...d.pendingKeys].some((ye) => ye !== re) && (k = !0, queueMicrotask(() => {
          k = !1, !x && (S() || F(h));
        })));
      })
    );
    return () => {
      x = !0, $ !== void 0 && clearTimeout($), $ = void 0, p(), fe(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const L2 = ["status_unknown", "status_invalid"], Gv = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, q2 = Object.values(Gv);
function D2(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const n = Gv[t];
  e.getAttribute("aria-description") !== n && (e.setAttribute("aria-description", n), e.title = n);
}
function Jm(e) {
  e.classList.remove(...L2), e.removeAttribute("aria-description"), q2.includes(e.title) && e.removeAttribute("title");
}
function K2(e, t, n, r) {
  const i = (a) => a.read(() => Ce().getChildrenKeys()), s = i(t), o = i(e);
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
function U2(e) {
  const t = X(e), n = t?.getTopLevelElement();
  return !t || !n ? !1 : t.getKey() === n.getKey() ? !0 : w(t) && t.getParent()?.getKey() === n.getKey();
}
function B2({
  viewOptions: e,
  styleInfo: t,
  logger: n
}) {
  const [r] = ve(), i = e?.markerMode === "editable";
  return H(() => {
    if (!i) return;
    const s = t ?? uc;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      r.isComposing() || r.getEditorState().read(() => {
        const u = AR(s, l);
        let f = u;
        if (l) {
          f = new Map(u);
          for (const [d, p] of o) {
            if (f.has(d) || U2(d)) continue;
            const h = X(d)?.getTopLevelElement();
            !h || l.has(h.getKey()) || f.set(d, p);
          }
        }
        for (const [d] of o) {
          if (f.has(d)) continue;
          const p = r.getElementByKey(d);
          p && Jm(p);
        }
        for (const [d, p] of f) {
          const h = r.getElementByKey(d);
          h && D2(h, p);
        }
        o = f, n?.debug(`[MarkerValidation] pass: ${f.size} flagged`);
      });
    };
    a();
    const c = r.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: f, dirtyLeaves: d }) => {
        f.size === 0 && d.size === 0 || a(
          K2(l, u, f, d)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = r.getElementByKey(l);
        u && Jm(u);
      }
    };
  }, [r, i, t, n]), null;
}
function fs(e, t, n) {
  const r = Math.min(e.length, t.length);
  for (let i = 0; i < r; i++) {
    const s = e[i], o = t[i];
    n.set(s.getKey(), { node: o, siblings: t });
    const a = Cr(o);
    a && A(s) && fs(s.getChildren(), a, n);
  }
}
const Jv = /* @__PURE__ */ new WeakMap();
function na(e, t, n = 0) {
  let r = n;
  const i = (s) => {
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = Cr(a);
      if (c) {
        i(c);
        continue;
      }
      const l = Ws(a);
      if (l === void 0 || !l.includes(vt)) continue;
      const u = l.split(vt), f = [];
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (d > 0)
          for (const h of t[r++] ?? [])
            f.push(h, ...Jv.get(h) ?? []);
        if (p.length > 0) {
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
function Vr(e, t, n) {
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
function Yv(e, t) {
  const n = [];
  for (const r of e)
    Jp(r, t) || ((me(r) || U(r)) && n.push(r.getMarker()), A(r) && n.push(...Yv(r.getChildren(), t)));
  return n;
}
function Xv(e) {
  const t = [];
  for (const n of e) {
    const r = Yp(n);
    (r === "para" || r === "char") && t.push(n.marker ?? "");
    const i = Cr(n);
    i && t.push(...Xv(i));
  }
  return t;
}
function ra(e, t, n) {
  const r = Yv(e, n), i = Xv(t);
  return r.length === i.length && r.every((s, o) => s === i[o]);
}
function Qv(e, t) {
  if (!e || e.input.run.length === 0) return;
  const n = N();
  let r, i;
  if (E(n)) {
    if (!n.isCollapsed()) return;
    r = n.focus.getNode(), i = n.focus.offset;
  } else if (t)
    r = X(t.key), i = t.offset;
  else
    return;
  if (!(!v(r) || !r.isAttached()) && !(e.nodeKey !== void 0 && r.getKey() !== e.nodeKey) && r.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: r, caretOffset: i, run: e.input.run };
}
function El(e, t) {
  const n = t && Zv(e, t);
  return n ? rh(e, n.start, n.end) : e;
}
function Zv(e, t) {
  const n = t.node.getKey(), r = e.spans.find(
    (o) => !o.isSentinel && o.key === n
  );
  if (!r || r.end - r.start !== t.node.getTextContentSize()) return;
  const i = r.start + t.caretOffset, s = i - t.run.length;
  if (!(s < r.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function eC(e, t, n, r, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = n, l = Zp(e, a, o);
  if (!l) return;
  const u = Al(l, s, n), f = El(u, i), d = cs(f, {
    getMarker: a,
    opensNamelessParagraph: Xp(e)
  });
  if (d.length === 0) return;
  if (Jr(d) !== u.sentinels.length) {
    c?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const p = ar.serializeEditorState(
    { type: rr, version: nr, content: d },
    o
  ).root.children;
  if (di(p) !== u.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const h = Vr(u, t, r);
  if (!h) {
    c?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Sr(p, a) === vr(e, a) && ra(e, p, a)) {
    c?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  na(p, h.serialized);
  const m = tC(e), y = uh(p);
  for (let k = 0; k < m.length && k < y.length; k++)
    m[k].sid !== void 0 && y[k].number === m[k].number && (y[k].sid = m[k].sid);
  return ih(
    e,
    f,
    h.live,
    p,
    "paras",
    a,
    o
  );
}
function tC(e) {
  const t = [], n = (r) => {
    Ue(r) ? t.push({ number: r.getNumber(), sid: r.getSid() }) : A(r) && r.getChildren().forEach(n);
  };
  return e.forEach(n), t;
}
function uh(e) {
  const t = [];
  for (const n of e) {
    ud(n) && t.push(n);
    const r = Cr(n);
    r && t.push(...uh(r));
  }
  return t;
}
function F2(e, t, n, r, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = n, l = Ji(e, a, o);
  if (!l) return;
  const { contentNodes: u } = l;
  if (u.length === 0) return;
  const f = Al(l.out, s, n), d = El(f, i), p = cs(d, {
    getMarker: a,
    isNoteContext: !0
  });
  if (p.length === 0) return;
  if (Jr(p) !== f.sentinels.length) {
    c?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [h] = p;
  if (p.length !== 1 || typeof h != "object" || h.type !== "para") {
    c?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const g = h.content ?? [], m = bv(g), y = e.getCategory() !== m, k = ZT(e, g);
  if (k) {
    const F = ev(
      e,
      k.before,
      k.after,
      m,
      o
    );
    if (!F || di(F) !== f.sentinels.length) {
      c?.warn("[MarkerEdit] Settled note USJ skipped: the closed note lost its content");
      return;
    }
    const $ = Vr(f, t, r);
    return $ ? (na(F, $.serialized), {
      rebuilt: void 0,
      contentNodes: u,
      category: m,
      categoryChanged: !1,
      closedAs: F
    }) : void 0;
  }
  const x = QT(e, g, m, o);
  if (x.failure !== void 0) {
    x.failure === "shape" ? c?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : x.failure === "caller" && c?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const _ = x.children;
  if (di(_) !== f.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const S = Vr(f, t, r);
  if (!S) {
    c?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Sr(_, a) === vr(u, a) && ra(u, _, a)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: m, categoryChanged: y };
    c?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return na(_, S.serialized), {
    // Annotation marks, mirroring `$rebuildNoteContent`'s carry.
    rebuilt: ih(
      u,
      d,
      S.live,
      _,
      "noteContent",
      a,
      o
    ),
    contentNodes: u,
    category: m,
    categoryChanged: y
  };
}
function Ym(e) {
  return e.$?.textType;
}
function z2(e, t) {
  const n = e, r = t;
  return n.type === "text" && r.type === "text" && n.format === r.format && n.style === r.style && n.mode === r.mode && n.detail === r.detail && Ym(e) === Ym(t);
}
function j2(e) {
  const t = [];
  for (const n of e) {
    const r = X(n);
    r?.isAttached() && et(r) && r.getTag() === "optbreak" && r.getChildrenSize() === 0 && t.push(r);
  }
  return t;
}
function V2(e) {
  if (!w(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!q(t)) return;
  const n = e.getTextContent();
  if (ur(e)) return;
  const r = ro.exec(n);
  if (!r) return;
  const i = r[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Oc(e, t) {
  const n = e;
  n.marker = t, n.text = bl(t, n.markerSyntax, n.nested);
}
function nC(e, t) {
  const { glyph: n, note: r, oldMarker: i, newMarker: s } = e;
  if (!Je.isValidMarker(s)) return;
  const o = t.get(r.getKey());
  o && (o.node.marker = s);
  const a = t.get(n.getKey());
  a && Oc(a.node, s);
  const c = r.getChildren().filter(w).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Oc(l.node, s);
}
function rC(e, t, n, r) {
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
function W2(e, t, n) {
  const r = e.spans.find((i) => i.key === t && !i.isSentinel);
  return r ? rC(e, r.start, r.end, n) : e;
}
function iC(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), A(e) && e.getChildren().forEach((n) => iC(n, t)), t;
}
function H2(e, t) {
  const n = iC(t), r = e.spans.filter((d) => n.has(d.key));
  if (r.length === 0) return e;
  const i = Math.min(...r.map((d) => d.start)), s = Math.max(...r.map((d) => d.end)), o = e.spans.filter((d) => d.isSentinel && d.start < i).length, a = r.filter((d) => d.isSentinel).length, c = OT.test(e.text.slice(0, i)) ? " " : "", l = rC(e, i, s, c + vt), u = i + c.length, f = [...e.sentinels];
  return f.splice(o, a, [t]), {
    text: l.text,
    spans: [
      ...l.spans.filter((d) => !n.has(d.key)),
      { key: t.getKey(), start: u, end: u + 1, isSentinel: !0 }
    ].sort((d, p) => d.start - p.start),
    sentinels: f
  };
}
function Al(e, t, n) {
  let r = e;
  for (const { char: i, glyph: s, closer: o, newMarker: a } of t?.values() ?? [])
    if (r.spans.some((c) => c.key === s.getKey())) {
      if (ov(i, a, n.getMarker)) {
        r = H2(r, i);
        continue;
      }
      o && (r = W2(
        r,
        o.getKey(),
        Ht(bl(a, "closing", o.getNested()))
      ));
    }
  return r;
}
function sC(e, t) {
  const { char: n, glyph: r, closer: i, newMarker: s } = e, o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Oc(a.node, s);
  const c = i && t.get(i.getKey());
  c && Oc(c.node, s);
}
function G2(e, t, n, r, i, s, o) {
  const { viewOptions: a, getMarker: c, logger: l } = n, u = oh(e, c, a), { contentNodes: f } = u;
  if (f.length === 0 && s.length === 0 || !eh(u.out, s, c, a)) return;
  const d = Al(u.out, o, n), p = xv(El(d, i), c);
  if (Jr(p.content) !== d.sentinels.length) {
    l?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const h = tv(
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
  if (di([...g, ...m]) !== d.sentinels.length) {
    l?.warn(
      "[MarkerEdit] Settled book USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const y = Vr(d, t, r);
  if (!y) {
    l?.warn("[MarkerEdit] Settled book USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (m.length === s.length && Sr(m, c) === vr(s, c) && ra(s, m, c) && Sr(g, c) === vr(f, c) && ra(f, g, c)) {
    l?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const k = na(g, y.serialized);
  na(m, y.serialized, k);
  const x = tC([...f, ...s]), _ = uh([...g, ...m]);
  for (let S = 0; S < x.length && S < _.length; S++)
    x[S].sid !== void 0 && _[S].number === x[S].number && (_[S].sid = x[S].sid);
  return { rebuilt: g, contentNodes: f, followingBlocks: m };
}
function oC(e, t, n, r) {
  const { viewOptions: i, getMarker: s, logger: o } = t, a = ea(e, s, i);
  if (!a) return;
  const c = Al(a, r, t), l = El(c, n), u = cs(l, {
    getMarker: s
  }), [f] = u;
  if (u.length === 0 || typeof f != "object" || f.type !== "chapter")
    return;
  if (Jr(u) !== 0) {
    o?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (f.sid = e.getSid());
  const d = ar.serializeEditorState(
    { type: rr, version: nr, content: u },
    i
  ).root.children;
  if (d.length === 0) return;
  const p = [e, ...us(e)];
  if (!(e.getNumber() !== (f.number ?? "") || e.getAltnumber() !== f.altnumber || e.getPubnumber() !== f.pubnumber) && Sr(d, s) === vr(p, s) && ra(p, d, s)) {
    o?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return ih(
    p,
    l,
    [],
    d,
    "chapter",
    s,
    i
  );
}
function aC(e, t, n) {
  const r = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), f = (h) => {
    q(h) ? s.set(h.getKey(), h) : $e(h) ? o.set(h.getKey(), h) : Ie(h) ? a.set(h.getKey(), h) : r.set(h.getKey(), [h]);
  };
  for (const h of e) {
    const g = X(h);
    if (!g?.isAttached()) continue;
    const m = Dv(g, t.getMarker);
    if (m) {
      u.set(m.char.getKey(), m);
      continue;
    }
    const y = ta(g);
    if (y) {
      if (f(y), w(g)) {
        const k = Rv(g, t.getMarker);
        k && i.push(k);
      }
      if (q(y)) {
        const k = V2(g);
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
    const h = ta(n.node);
    h && !d.has(h.getKey()) && f(h);
  }
  const p = j2(e);
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
function cC(e, t) {
  e.splice(t, 1);
  const n = e[t - 1], r = e[t], i = n && Ws(n), s = r && Ws(r);
  n && r && i !== void 0 && s !== void 0 && z2(n, r) && (n.text = i + s, e.splice(t, 1));
}
function Yi(e, t, n, r, i, s) {
  const o = t.get(e.getKey()), a = o ? Cr(o.node) : void 0;
  if (!o || !a) return !1;
  const c = F2(e, t, n, r, i, s);
  if (!c) return !1;
  if (c.closedAs) {
    const f = o.siblings.indexOf(o.node);
    if (f < 0) return !1;
    const [d, ...p] = c.closedAs, h = o.node;
    for (const g of Object.keys(h)) Reflect.deleteProperty(h, g);
    return Object.assign(h, d), o.siblings.splice(f + 1, 0, ...p), p.length > 0 && Jv.set(o.node, p), !0;
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
function lC(e, t, n, r, i, s, o) {
  const a = n.get(e.getKey()), c = a ? Cr(a.node) : void 0;
  if (!a || !c) return !1;
  const l = G2(
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
function J2(e, t, n, r, i) {
  const s = Qv(r, i);
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
  } = aC(t, n, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && d.size === 0 && l.size === 0 && p.length === 0)
    return;
  const g = /* @__PURE__ */ new Map();
  fs(Ce().getChildren(), e.root.children, g);
  for (const m of f.values()) nC(m, g);
  for (const m of d.values()) sC(m, g);
  for (const m of a.values())
    Yi(m, g, n, h, s, d);
  for (const m of o.values()) {
    const y = g.get(m[0].getKey());
    if (!y) continue;
    const k = eC(
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
    lC(
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
    const k = 1 + us(m).length, x = oC(m, n, s, d);
    if (!x) continue;
    const _ = y.siblings.indexOf(y.node);
    _ < 0 || y.siblings.splice(_, k, ...x);
  }
  for (const m of p) {
    const y = g.get(m.getKey());
    if (!y) continue;
    const k = y.siblings.indexOf(y.node);
    k < 0 || cC(y.siblings, k);
  }
  return tT(e, n.viewOptions);
}
function Y2({
  viewOptions: e,
  logger: t
}) {
  const [n] = ve(), r = as(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return H(() => {
    if (r)
      return n.registerNodeTransform(
        It,
        (i) => X2(i, t)
      );
  }, [n, r, t]), null;
}
function X2(e, t) {
  e.getMarker() !== zn && (e.isEmpty() || yn(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${zn}" (key ${e.getKey()})`
  ), e.setMarker(zn)));
}
function To(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const Q2 = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function dr(e) {
  return Q2.exec(e)?.[1] ?? e;
}
function cr(e, t) {
  const n = e.jsonPath.slice(dr(e.jsonPath).length);
  return { ...e, jsonPath: `${Nt(t)}${n}` };
}
function so(e, t) {
  return e.length === t.length && e.every((n, r) => n === t[r]);
}
function uC(e) {
  if (jf(e) || qi(e)) return !0;
  const t = fC(e);
  return t === "marker" || t === "caller";
}
const Z2 = /^\['([^']+)'\]$/;
function fC(e) {
  if (Lo(e))
    return Z2.exec(
      e.jsonPath.slice(dr(e.jsonPath).length)
    )?.[1];
}
function qf(e, t) {
  return uC(e) && so(In(dr(e.jsonPath)), dn(t));
}
function dC(e, t, n) {
  if (!e.isAttached()) return;
  const [r, i] = $n(
    cr(t, dn(e)),
    n
  );
  if (!(!r || i === void 0))
    return { key: r.getKey(), offset: i, type: A(r) ? "element" : "text" };
}
function fh(e, t) {
  const n = hn(e, t, { addressDisplayBytes: !0 }), r = n && X(n.key);
  return n && n.offset > 0 && w(r) && r.getMarkerSyntax() !== "opening" ? n : void 0;
}
function pC(e, t) {
  const n = hn(e, t, { addressDisplayBytes: !0 });
  if (!n || n.offset !== 0) return;
  const r = e.spans.findIndex((o) => o.key === n.key), i = e.spans[r], s = r > 0 ? e.spans[r - 1] : void 0;
  if (!(!i || !Ro(i) || !s || s.end !== i.start || !Ro(s)))
    return cv(s);
}
function eL(e, t) {
  const n = fh(e, t);
  if (n) return n;
  const r = pC(e, t);
  if (r) return r;
  const i = hn(e, t);
  return i && tL(e, i);
}
function tL(e, t) {
  if (t.type !== "text") return t;
  const n = e.spans.findIndex((a) => a.key === t.key), r = e.spans[n], i = e.spans[n + 1];
  if (!r || !i || r.end === r.start || t.offset !== r.end - r.start)
    return t;
  const s = e.text[i.start] === "\\", o = Rn.test(e.text[r.end - 1]);
  return s || o ? { key: i.key, offset: 0, type: "text" } : t;
}
function hC(e) {
  const t = e.markerName.length + 2, n = t + e.valueLength;
  return { valueStart: t, closerStart: n, closerLength: e.markerName.length + 2 };
}
function nL(e, t, n) {
  const { keyName: r } = e, { valueStart: i, closerStart: s } = hC(e);
  return n === 0 ? { jsonPath: t, keyName: r } : n < i ? { jsonPath: t, keyName: r, keyOffset: n - 1 } : n < s ? {
    jsonPath: `${t}['${r}']`,
    propertyOffset: n - i
  } : { jsonPath: t, keyName: r, keyClosingMarkerOffset: n - s };
}
function rL(e, t) {
  const { valueStart: n, closerStart: r, closerLength: i } = hC(e), s = (o, a, c) => o >= 0 && o <= a ? c + o : void 0;
  if (Do(t))
    return s(t.keyOffset, e.markerName.length, 1);
  if (qo(t))
    return s(t.keyClosingMarkerOffset, i, r);
  if (qc(t)) return 0;
  if (Lo(t))
    return s(t.propertyOffset, e.valueLength, n);
}
function iL(e) {
  return Do(e) || qo(e) || qc(e) ? e.keyName : fC(e);
}
function sL(e, t, n) {
  const r = eL(e.spelling, t), i = r && X(r.key);
  if (!r || !i) return;
  const s = e.foldedAttributes.find((o) => o.ownerKey === r.key);
  return s ? nL(
    s,
    Nt(dn(i)),
    r.offset
  ) : Ot(i, r.offset, n);
}
function oL(e, t) {
  let n = Ce();
  for (let r = 0; r < t.length; r += 1) {
    if (!A(n)) return;
    const i = zt(n, qt(e.viewOptions))[t[r]];
    if (i?.type !== "element") return;
    n = i.node;
    const s = e.byFirstLiveKey.get(n.getKey());
    if (s?.kind === "note" && !s.closedNote)
      return { plan: s, scratchIndexes: [0, ...t.slice(r + 1)] };
  }
}
function aL(e, t) {
  for (const n of e.byFirstLiveKey.values()) {
    const r = n.closedNote;
    if (!r || !n.liveNodes[0].isAttached()) continue;
    const i = oa(e, n), s = (i?.length ?? 0) - 1, o = r.scratchNotePath.length - 1;
    if (!i || s < 0 || o < 0 || t.length <= s || !so(t.slice(0, s), i.slice(0, s))) continue;
    const a = t[s] - i[s];
    if (!(a < 0 || a >= r.settledItemsFromNote))
      return {
        plan: n,
        scratchIndexes: [
          ...r.scratchNotePath.slice(0, o),
          r.scratchNotePath[o] + a,
          ...t.slice(s + 1)
        ]
      };
  }
}
function $c(e, t) {
  const n = In(dr(t.jsonPath));
  if (n.length === 0) {
    if (!Lr(t)) return { kind: "live", location: t };
    const a = e.settledToLiveTopIndex(t.offset);
    if (!a) {
      const c = zt(
        Ce(),
        qt(e.viewOptions)
      ).length;
      return { kind: "live", location: { ...t, offset: c } };
    }
    return a.plan && a.indexWithinScope > 0 ? $c(e, { jsonPath: Nt([t.offset]) }) : { kind: "live", location: { ...t, offset: a.liveIndex } };
  }
  const r = aL(e, n);
  if (r) return { kind: "scope", ...r, location: t };
  const i = e.settledToLiveTopIndex(n[0]);
  if (!i) return;
  if (i.plan)
    return {
      kind: "scope",
      plan: i.plan,
      scratchIndexes: [i.indexWithinScope, ...n.slice(1)],
      location: t
    };
  const s = [i.liveIndex, ...n.slice(1)], o = oL(e, s);
  return o ? { kind: "scope", plan: o.plan, scratchIndexes: o.scratchIndexes, location: t } : { kind: "live", location: cr(t, s) };
}
function gC(e, t) {
  const n = iL(t);
  if (n === void 0) return;
  const r = In(dr(t.jsonPath));
  for (const i of e)
    for (const s of i.foldedAttributes) {
      const o = X(s.ownerKey);
      if (s.keyName !== n || !o || !so(dn(o), r))
        continue;
      const a = rL(s, t), c = i.spelling.spans.find((u) => u.key === s.ownerKey), l = a !== void 0 && c ? ii(i.spelling, s.ownerKey, a) : void 0;
      return a === void 0 || !c || !l ? { resolution: void 0 } : {
        resolution: {
          kind: "literal",
          run: i,
          anchor: l,
          atWordByte: Ya(i.spelling, c.start + a)
        }
      };
    }
}
function cL(e, t, n, r) {
  const i = gC(t, n);
  if (i) return i.resolution;
  const [s, o] = $n(n, r.viewOptions);
  if (!s || o === void 0) return;
  const a = pl(e, s), c = a && t.find((d) => d.sentinelIndex === a.sentinelIndex);
  if (c) {
    const d = $o(c.spelling, s, o);
    return d && {
      kind: "literal",
      run: c,
      anchor: d.anchor,
      atWordByte: Ya(c.spelling, d.position)
    };
  }
  if (!a) {
    const d = $o(e, s, o);
    return d ? {
      kind: "anchor",
      anchor: d.anchor,
      atWordByte: Ya(e, d.position)
    } : void 0;
  }
  const l = hl(a.member, s);
  if (!l) return;
  const u = q(a.member) ? Ji(a.member, r.getMarker, r.viewOptions)?.out : void 0, f = u && $o(u, s, o);
  return {
    kind: "preserved",
    sentinelIndex: a.sentinelIndex,
    memberIndex: a.memberIndex,
    path: l,
    offset: o,
    type: A(s) ? "element" : "text",
    noteAnchor: f && {
      anchor: f.anchor,
      atWordByte: Ya(u, f.position)
    },
    isNoteOwnBytes: q(a.member) && qf(n, a.member)
  };
}
function lL(e, t, n) {
  const r = gC(e, t);
  if (r) return r.resolution !== void 0;
  const [i, s] = $n(t, n);
  return i !== void 0 && s !== void 0;
}
function Ya(e, t) {
  const n = e.text[t];
  return n !== void 0 && !Rn.test(n);
}
function mC(e, t) {
  if (t.type !== "text") return t;
  const n = nh(e, t.key, t.offset);
  if (!n) return t;
  const r = n.end - n.start;
  let i = t.offset;
  for (; i < r && Rn.test(e.text[n.start + i]); ) i += 1;
  return i === t.offset ? t : { ...t, offset: i };
}
function ia(e, t) {
  const n = e.liveCut;
  return !t || !n || t.type !== "text" || t.key !== n.key ? t : t.offset >= n.nodeOffset ? { ...t, offset: t.offset + n.length } : t;
}
function uL(e, t) {
  for (let n = 0; n < e.length; n += 1) {
    const r = e[n];
    for (let i = 0; i < r.length; i += 1) {
      const s = r[i];
      if (s?.sentinelIndex === t.sentinelIndex && s.memberIndex === t.memberIndex)
        return { sentinelIndex: n, memberIndex: i };
    }
  }
}
function dh(e) {
  const { liveFragment: t, scratchFragment: n, sentinelMap: r, alignment: i } = e;
  return t && n && r && i ? { liveFragment: t, scratchFragment: n, sentinelMap: r, alignment: i } : void 0;
}
function yC(e) {
  const t = e.liveNodes[0];
  if (!t.isAttached()) return;
  if (e.kind !== "note" && A(t))
    return { key: t.getKey(), offset: 0, type: "element" };
  const n = t.getParent();
  return n ? { key: n.getKey(), offset: t.getIndexWithinParent(), type: "element" } : void 0;
}
function si(e, t) {
  return t?.warn(
    `[positions] A settled location in a pending ${e.kind} scope could not be lined up with its live bytes; it resolves to the front of the scope.`
  ), yC(e);
}
function xu(e, t) {
  return t?.error("settled-position basis out of date — rebuilt"), yC(e);
}
function Xm(e) {
  const t = [];
  let n = 0;
  for (const r of e.spans) {
    r.isSentinel && t.push(r.end > r.start ? n : void 0);
    for (let i = r.start; i < r.end; i += 1)
      Rn.test(e.text[i]) || (n += 1);
  }
  return t;
}
function fL(e, t, n, r) {
  const { liveFragment: i, scratchFragment: s, alignment: o } = t, a = Xm(s)[n];
  if (a === void 0) return si(e, r);
  const c = Xm(i).findIndex(
    (d) => d !== void 0 && Fp(o, d, "live") === a
  ), l = c < 0 ? void 0 : i.sentinels[c]?.[0], u = l?.isAttached() ? l.getParent() : void 0;
  if (l && u)
    return { key: u.getKey(), offset: l.getIndexWithinParent(), type: "element" };
  const f = hn(i, {
    nonWsBefore: io(o, a, "settled"),
    wsRun: 0
  });
  return f ? ia(e, f) : si(e, r);
}
function bC(e, t, n, r, i, s) {
  const o = dh(e);
  if (!o) return si(e, s);
  const a = !Lr(r), c = MC(
    o.alignment,
    t.nonWsBefore,
    o.scratchFragment.text,
    t,
    o.liveFragment.text,
    xa(o.alignment, t, "toLive")
  ), l = (f) => {
    const d = fh(o.liveFragment, f);
    if (d) return ia(e, d);
    const p = hn(
      o.liveFragment,
      gh(o.liveFragment, f, a),
      { addressDisplayBytes: a }
    );
    return ia(
      e,
      p && n ? mC(o.liveFragment, p) : p
    );
  }, u = GR(o.alignment, t.nonWsBefore);
  if (u < c.nonWsBefore) {
    const f = l({ ...c, nonWsBefore: u }), d = f && X(f.key);
    if (f && d && TC(d, f.offset, i)) return f;
  }
  return l(c) ?? si(e, s);
}
function dL(e, t, n, r, i, s) {
  const o = uL(n.sentinelMap, r);
  if (!o) return fL(t, n, r.sentinelIndex, s);
  const a = n.liveFragment.sentinels[o.sentinelIndex]?.[o.memberIndex];
  if (!a?.isAttached()) return xu(t, s);
  const c = e.byFirstLiveKey.get(a.getKey());
  if (c?.kind === "note" && r.isNoteOwnBytes)
    return dC(a, i, e.viewOptions);
  if (c?.kind === "note")
    return r.noteAnchor ? bC(
      c,
      r.noteAnchor.anchor,
      r.noteAnchor.atWordByte,
      i,
      e.viewOptions,
      s
    ) : si(c, s);
  let l = a;
  for (const u of r.path) {
    if (!A(l)) return xu(t, s);
    const f = l.getChildAtIndex(u);
    if (!f) return xu(t, s);
    l = f;
  }
  return { key: l.getKey(), offset: r.offset, type: r.type };
}
function pL(e, t, n) {
  if (!e.scratch.getEditorState().read(() => {
    const [o, a] = $n(t, n);
    return An(o) && a !== void 0 && a >= o.getChildrenSize();
  })) return;
  const i = e.liveNodes[e.liveNodes.length - 1], s = i.getParent();
  if (An(s))
    return { key: s.getKey(), offset: i.getIndexWithinParent() + 1, type: "element" };
}
function hL(e, t, n) {
  const r = mL(e, t, n);
  if (!r) return r;
  const i = cr(n.location, n.scratchIndexes);
  return n.plan.scratch.getEditorState().read(() => {
    const [o, a] = $n(i, t.viewOptions);
    return v(o) && a !== void 0 && a > 0 && a === o.getTextContentSize();
  }) ? gL(t, r, n.location) : r;
}
function gL(e, t, n) {
  const r = X(t.key);
  if (t.type !== "text" || !v(r)) return t;
  const i = JSON.stringify(n);
  let s = t, o = { node: r, offset: t.offset };
  for (const a of xC(r, t.offset)) {
    if (a.node.is(o.node) && a.offset === o.offset) continue;
    if (a.node.is(o.node)) {
      const l = a.node.getTextContent()[a.offset];
      if (l === void 0 || !Rn.test(l)) break;
    } else if (o.offset !== 0) break;
    o = a;
    const c = Kf(e, a.node, a.offset);
    JSON.stringify(c) === i && (s = { key: a.node.getKey(), offset: a.offset, type: "text" });
  }
  return s;
}
function mL(e, t, n) {
  const { plan: r } = n, { logger: i, viewOptions: s } = e.tier2, o = r.closedNote?.scratchNotePath;
  if (r.kind === "note" && (o ? so(n.scratchIndexes, o) && !qi(n.location) : n.scratchIndexes.length === 1) && uC(n.location))
    return dC(r.liveNodes[0], n.location, t.viewOptions);
  const a = cr(n.location, n.scratchIndexes);
  if (!r.scratch.getEditorState().read(() => lL(r.settledOnlyRuns, a, s))) return;
  const l = pL(r, a, s);
  if (l) return l;
  const u = dh(r);
  if (!u) return si(r, i);
  const f = r.scratch.getEditorState().read(
    () => cL(
      u.scratchFragment,
      r.settledOnlyRuns,
      a,
      e.tier2
    )
  );
  if (!f) return si(r, i);
  if (f.kind === "preserved")
    return dL(t, r, u, f, n.location, i);
  if (f.kind === "literal") {
    const { run: d, anchor: p } = f, h = JT(d, p.nonWsBefore, "toLiteral") ?? io(d.inner, p.nonWsBefore, "settled"), g = !Lr(n.location), m = gh(
      u.liveFragment,
      {
        nonWsBefore: d.liveBefore + h,
        wsRun: p.nonWsBefore === 0 ? d.liveWsBefore + p.wsRun : p.wsRun
      },
      g
    ), y = hn(u.liveFragment, m, {
      addressDisplayBytes: !0
    }), k = y && X(y.key);
    if (y && w(k) && k.getMarkerSyntax() !== "opening")
      return ia(r, y);
    const x = hn(u.liveFragment, m, {
      addressDisplayBytes: g
    });
    return x ? ia(
      r,
      f.atWordByte ? mC(u.liveFragment, x) : x
    ) : si(r, i);
  }
  return bC(
    r,
    f.anchor,
    f.atWordByte,
    n.location,
    s,
    i
  );
}
function Qm(e, t, n) {
  const r = $c(t, n);
  if (!r) return;
  if (r.kind === "live") {
    const o = yL(t, r.location);
    if (o) return o;
    const [a, c] = $n(r.location, t.viewOptions);
    return a && c !== void 0 ? r.location : void 0;
  }
  const i = hL(e, t, r), s = i && X(i.key);
  return s ? kL(s, i.offset, t.viewOptions, r.plan.liveNodes) : void 0;
}
function Zm(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; ) n += 1;
  return n;
}
function kC(e, t, n) {
  const r = Zm(e, t), i = Math.min(
    Zm([...e].reverse().join(""), [...t].reverse().join("")),
    e.length - r,
    t.length - r
  );
  return n <= r ? n : n >= e.length - i ? n - e.length + t.length : r;
}
function yL(e, t) {
  if (!qi(t)) return;
  const n = In(dr(t.jsonPath));
  for (const [r, i] of e.renamedClosers) {
    const s = X(r)?.getParent();
    if (!(!s || !so(dn(s), n)))
      return {
        ...t,
        closingMarkerOffset: kC(
          i.settled,
          i.live,
          Math.min(t.closingMarkerOffset, i.settled.length)
        )
      };
  }
}
function ey(e) {
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
function bL(e, t) {
  for (let n = e; n; n = n.getParent())
    if (t.some((r) => r.is(n))) return !0;
  return !1;
}
function* xC(e, t, n) {
  let r = e;
  if (v(e)) for (let i = t; i >= 0; i -= 1) yield { node: e, offset: i };
  else if (A(e)) {
    const i = e.getChildAtIndex(Math.min(t, e.getChildrenSize()));
    if (i) r = i;
    else {
      const s = e.getLastDescendant();
      if (v(s))
        for (let o = s.getTextContentSize(); o >= 0; o -= 1) yield { node: s, offset: o };
      r = s ?? e;
    }
  }
  for (let i = ey(r); i; i = ey(i))
    if (v(i)) {
      if (n && !bL(i, n)) return;
      for (let s = i.getTextContentSize(); s >= 0; s -= 1) yield { node: i, offset: s };
    }
}
function kL(e, t, n, r) {
  const i = Ot(e, t, n), s = sa([e, t]);
  if (!s || sa($n(i, n))?.is(s)) return i;
  const o = (l, u) => TC(l, u, n), a = ph(e, t), c = a && o(a.node, a.offset);
  if (c) return c;
  for (const l of xC(e, t, r)) {
    if (l.node.is(e) && l.offset === t) continue;
    const u = o(l.node, l.offset);
    if (u) return u;
  }
  return i;
}
function TC(e, t, n) {
  const r = Ot(e, t, n), i = sa($n(r, n));
  if (!i) return;
  if (i.is(Zt(e.getKey(), t, "text"))) return r;
  const s = ph(e, t);
  return s && i.is(Zt(s.node.getKey(), s.offset, "text")) ? r : void 0;
}
function ph(e, t) {
  if (!v(e)) return;
  const n = t === e.getTextContentSize();
  if (!n && t !== 0) return;
  let r = e, i = n ? r.getNextSibling() : r.getPreviousSibling();
  for (; !i; ) {
    const s = r.getParent();
    if (!s || An(s) || An(s.getParent())) return;
    r = s, i = n ? r.getNextSibling() : r.getPreviousSibling();
  }
  for (; A(i); ) {
    const s = n ? i.getFirstChild() : i.getLastChild();
    if (!s) return;
    i = s;
  }
  if (v(i))
    return { node: i, offset: n ? 0 : i.getTextContentSize() };
}
function sa([e, t]) {
  if (!e || t === void 0) return;
  if (v(e)) return Zt(e.getKey(), t, "text");
  if (A(e)) return Zt(e.getKey(), t, "element");
  const n = e.getParent();
  if (!n) return;
  const r = e.getIndexWithinParent() + (t > 0 ? 1 : 0);
  return Zt(n.getKey(), r, "element");
}
function vC(e, t, n) {
  const r = $n(e, n), i = $n(t, n), [s, o] = r, [a, c] = i;
  if (s && a && s.is(a))
    return o !== void 0 && c !== void 0 && o > c;
  const l = sa(r), u = sa(i);
  return !!l && !!u && u.isBefore(l);
}
function CC(e, t, n) {
  const r = $c(e, t), i = $c(e, n);
  if (!(r?.kind !== "scope" || i?.kind !== "scope" || r.plan !== i.plan))
    return r.plan.scratch.getEditorState().read(
      () => vC(
        cr(r.location, r.scratchIndexes),
        cr(i.location, i.scratchIndexes),
        e.viewOptions
      )
    );
}
function xL(e, t, n) {
  if (t.byFirstLiveKey.size === 0 && t.renamedClosers.size === 0) return n;
  const r = Qm(e, t, n.start);
  if (!r) return;
  if (!n.end) return { ...n, start: r };
  const i = Qm(e, t, n.end);
  if (!i) return;
  const s = CC(t, n.start, n.end);
  return s !== void 0 && vC(r, i, t.viewOptions) !== s ? { ...n, start: i, end: r } : { ...n, start: r, end: i };
}
function Df(e, t) {
  const n = In(dr(t.jsonPath));
  return n.length === 0 ? t : cr(t, [
    e.liveToSettledTopIndex(n[0]),
    ...n.slice(1)
  ]);
}
function SC(e, t) {
  const n = e.closedNoteScopeOver(t.liveNodes[0]);
  if (n && n !== t) return n;
  const r = t.liveNodes[0].getParent(), i = r ? e.planContaining(r) : void 0;
  return i === t ? void 0 : i;
}
function oa(e, t) {
  const n = t.liveNodes[0], r = SC(e, t);
  if (r) {
    const s = Pl(e, r, n, 0);
    return typeof s == "object" ? In(dr(s.jsonPath)) : void 0;
  }
  const i = TL(n, e.viewOptions);
  return i.length === 0 ? i : [e.liveToSettledTopIndex(i[0]), ...i.slice(1)];
}
function TL(e, t) {
  return !Ct(e) || !An(e.getParent()) ? dn(e) : [As(e, 0, qt(t)).index];
}
function hh(e, t, n) {
  if (!t) return;
  const r = e.closedNote?.scratchNotePath;
  if (r) {
    const a = r.length - 1, c = t.at(-1);
    return c === void 0 || a < 0 || n.length <= a || !so(n.slice(0, a), r.slice(0, a)) || n[a] < r[a] ? void 0 : [
      ...t.slice(0, -1),
      c + n[a] - r[a],
      ...n.slice(a + 1)
    ];
  }
  const [i, ...s] = n;
  if (i === void 0) return;
  if (e.kind === "note") return i === 0 ? [...t, ...s] : void 0;
  const o = t[0];
  return o === void 0 ? void 0 : [o + i, ...s];
}
function vL(e, t, n) {
  const r = e.liveCut;
  return !r || t.getKey() !== r.key || n <= r.nodeOffset ? n : Math.max(r.nodeOffset, n - r.length);
}
function CL(e, t, n, r, i) {
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
function SL(e, t) {
  const n = YT(e, t);
  if (n)
    return {
      run: n,
      within: { nonWsBefore: 0, wsRun: t.wsRun - n.liveWsBefore }
    };
  const r = jp(e, t);
  if (r)
    return {
      run: r.run,
      within: r.within ?? {
        nonWsBefore: io(r.run.inner, r.count, "live"),
        wsRun: t.wsRun
      }
    };
}
function _L(e, t) {
  if (e.isSentinel) return !1;
  if (t) return !0;
  const n = X(e.key);
  return !(w(n) && n.getMarkerSyntax() !== "opening");
}
function gh(e, t, n) {
  let r = 0, i = 0;
  for (const s of e.spans)
    for (let o = s.start; o < s.end; o += 1) {
      const a = Rn.test(e.text[o]);
      if (r < t.nonWsBefore)
        a || (r += 1);
      else if (a) i += 1;
      else return i >= t.wsRun || _L(s, n) ? t : { ...t, wsRun: i };
    }
  return t;
}
function _C(e, t, n, r, i, s) {
  const { liveFragment: o, scratchFragment: a, sentinelMap: c, alignment: l } = t, u = pl(o, n);
  if (u) {
    const m = o.sentinels[u.sentinelIndex];
    if (!c[u.sentinelIndex]?.some((_) => _ !== void 0)) {
      const _ = m[0].getParent();
      if (_)
        return _C(
          e,
          t,
          _,
          m[0].getIndexWithinParent(),
          i,
          s
        );
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const y = hl(u.member, n);
    if (!y) {
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const k = c[u.sentinelIndex]?.[u.memberIndex];
    if (!k) return;
    const x = e.scratch.getEditorState().read(
      () => CL(a, k, y, r, i)
    );
    if (x) return x;
    s?.error("settled-position basis out of date — rebuilt");
    return;
  }
  const f = $o(o, n, vL(e, n, r));
  if (!f) return;
  const d = SL(e.settledOnlyRuns, f.anchor);
  if (d)
    return e.scratch.getEditorState().read(() => sL(d.run, d.within, i));
  const p = xa(l, f.anchor, "toSettled"), h = MC(
    l,
    p.nonWsBefore,
    o.text,
    f.anchor,
    a.text,
    p
  ), g = !Lr(
    Ot(n, r, i)
  );
  return e.scratch.getEditorState().read(() => {
    const m = fh(a, h), y = m && X(m.key);
    if (y) return Ot(y, m.offset, i);
    const k = pC(a, h), x = k && X(k.key);
    if (x)
      return Ot(x, k.offset, i);
    const _ = gh(a, h, g), S = hn(a, _, { addressDisplayBytes: g });
    return S && ML(S, i);
  });
}
function ty(e, t) {
  let n = 0, r = 0;
  for (const i of e) {
    if (Rn.test(i)) {
      r += 1;
      continue;
    }
    if (n === t) return r;
    n += 1, r = 0;
  }
  return r;
}
function MC(e, t, n, r, i, s) {
  if (!e.segments.some(
    (c) => !c.same && c.liveStart === c.liveEnd && c.settledEnd > c.settledStart && c.settledEnd === t
  )) return s;
  const a = ty(n, r.nonWsBefore) - r.wsRun;
  return {
    ...s,
    wsRun: Math.max(0, ty(i, s.nonWsBefore) - a)
  };
}
function ML(e, t) {
  const n = X(e.key);
  if (!n) return;
  const r = A(n) && e.offset >= n.getChildrenSize() && (An(n) || n.getLastDescendant()?.is(Ce().getLastDescendant())) && n.getLastDescendant();
  return r ? Ot(
    r,
    A(r) ? r.getChildrenSize() : r.getTextContentSize(),
    t
  ) : Ot(n, e.offset, t);
}
function Pl(e, t, n, r) {
  if (t.kind === "note") {
    const a = t.liveNodes[0], c = q(a) && Mt(a)?.is(n) && r === n.getTextContentSize() ? ph(n, r) : void 0;
    if (c && !qf(
      Ot(c.node, c.offset, e.viewOptions),
      a
    )) {
      const u = Pl(e, t, c.node, c.offset);
      if (typeof u == "object") return u;
    }
    const l = Ot(n, r, e.viewOptions);
    if (qf(l, a)) {
      const u = oa(e, t);
      return u && cr(l, u);
    }
  }
  const i = dh(t);
  if (!i) return;
  const s = _C(
    t,
    i,
    n,
    r,
    e.viewOptions,
    e.logger
  );
  if (typeof s != "object") return s;
  const o = hh(
    t,
    oa(e, t),
    In(dr(s.jsonPath))
  );
  return o && cr(s, o);
}
function EL(e) {
  const t = [], n = (r) => {
    if (A(r))
      r.getChildren().forEach((i, s) => {
        t.push({ node: r, offset: s }), n(i);
      }), t.push({ node: r, offset: r.getChildrenSize() });
    else if (v(r))
      for (let i = 0; i <= r.getTextContentSize(); i += 1)
        t.push({ node: r, offset: i });
  };
  return e.liveNodes.forEach(n), t;
}
function AL(e, t) {
  const n = t.scratch.getEditorState().read(() => Ot(Ce(), 0, e.viewOptions)), r = hh(
    t,
    oa(e, t),
    In(dr(n.jsonPath))
  );
  if (r) return cr(n, r);
  const i = t.liveNodes[0], s = i.getParent();
  if (!s) return;
  const o = SC(e, t);
  return o ? AC(e, o, s, i.getIndexWithinParent()) : Df(
    e,
    Ot(s, i.getIndexWithinParent(), e.viewOptions)
  );
}
function EC(e, t, n) {
  const r = EL(t), i = n ? r.findIndex((s) => s.node.is(n.node) && s.offset === n.offset) : -1;
  for (let s = (i < 0 ? r.length : i) - 1; s >= 0; s -= 1) {
    const { node: o, offset: a } = r[s], c = Pl(e, t, o, a);
    if (typeof c == "object") return c;
  }
  return AL(e, t);
}
function AC(e, t, n, r) {
  return Pl(e, t, n, r) ?? EC(e, t, { node: n, offset: r });
}
function Kf(e, t, n) {
  const r = e.planContaining(t);
  if (r) return AC(e, r, t, n);
  const i = e.renamedClosers.get(t.getKey());
  if (i) {
    const a = Ot(t, n, e.viewOptions);
    return Df(
      e,
      qi(a) ? {
        ...a,
        closingMarkerOffset: kC(
          i.live,
          i.settled,
          a.closingMarkerOffset
        )
      } : a
    );
  }
  const s = An(t) && n >= t.getChildrenSize() && t.getLastChild(), o = s ? e.planContaining(s) : void 0;
  return o ? PL(e, o) ?? EC(e, o, void 0) : Df(e, Ot(t, n, e.viewOptions));
}
function PL(e, t) {
  const n = t.scratch.getEditorState().read(() => {
    const i = Ce();
    return Ot(i, i.getChildrenSize(), e.viewOptions);
  }), r = hh(
    t,
    oa(e, t),
    In(dr(n.jsonPath))
  );
  return r && cr(n, r);
}
function wL(e) {
  const t = ol(e.viewOptions);
  if (!t || e.byFirstLiveKey.size === 0 && e.renamedClosers.size === 0)
    return t;
  const n = N();
  if (!E(n)) return;
  const r = n.isBackward(), i = r ? n.focus : n.anchor, s = Kf(e, i.getNode(), i.offset);
  if (!s) return;
  if (n.isCollapsed()) return { start: s };
  const o = r ? n.anchor : n.focus, a = Kf(e, o.getNode(), o.offset);
  if (a)
    return CC(e, s, a) === !0 ? { start: a, end: s } : { start: s, end: a };
}
function NL(e) {
  return e.getKey();
}
function PC(e, t, n) {
  if (e === "para") {
    const [i] = t;
    return t.length === 1 && Ct(i) ? cI(i, n.getMarker, n.viewOptions) : t.every(me) ? Zp(t, n.getMarker, n.viewOptions) : Im(t, n.getMarker, n.viewOptions);
  }
  if (e === "chapter") {
    const i = t.find($e);
    if (!i) return;
    const s = new Set([i, ...us(i)].map(NL));
    return t.every((o) => s.has(o.getKey())) ? ea(i, n.getMarker, n.viewOptions) : Im(t, n.getMarker, n.viewOptions);
  }
  const r = t.find(q);
  return r && Ji(r, n.getMarker, n.viewOptions)?.out;
}
function OL(e, t) {
  const n = Zf({
    nodes: [...e],
    onError: (r) => {
      throw r;
    }
  });
  try {
    n.update(
      () => {
        const r = Ce();
        t.forEach((i) => r.append(qr(i)));
      },
      { discrete: !0 }
    );
  } catch {
    return;
  }
  return n;
}
const ny = "\0";
function wC(e, t = []) {
  for (const n of e)
    t.push(n.getKey()), A(n) && wC(n.getChildren(), t);
  return t;
}
function $L(e, t, n, r, i) {
  const s = `${r.viewOptions.markerMode}/${r.viewOptions.noteMode}`, o = t.map((l) => l.getTextContent()).join(ny), a = wC(t).join(" "), c = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, n, o, a, c].join(ny);
}
function Ta(e, t = []) {
  for (const n of e)
    q(n) && t.push(n), A(n) && Ta(n.getChildren(), t);
  return t;
}
function oo(e, t, n, r, i, s, o, a = () => ({
  fragment: PC(e, Ce().getChildren(), o.tier2)
})) {
  const c = OL(o.nodes, i);
  if (c)
    return NC(e, t, n, r, c, s, o, a);
}
function NC(e, t, n, r, i, s, o, a) {
  const c = i.getEditorState().read(() => {
    const m = a();
    if (!m) return;
    const { fragment: y } = m;
    return {
      settledCount: zt(
        Ce(),
        qt(o.tier2.viewOptions)
      ).length,
      scratchFragment: y,
      settledSide: y && zp(y),
      closedNote: m.closedNote
    };
  });
  if (!c) return;
  const { settledCount: l, scratchFragment: u, settledSide: f, closedNote: d } = c, p = {
    kind: e,
    liveNodes: t,
    liveCut: r,
    scratch: i,
    scratchFragment: u,
    settledCount: l,
    ...d && { closedNote: d }
  };
  if ((n?.sentinels.length ?? 0) === 0 && (f?.runs.length ?? 0) === 0) {
    const m = n && f && Pc(Ac(n, []), f).alignment;
    return { ...p, liveFragment: n, sentinelMap: [], settledOnlyRuns: [], alignment: m };
  }
  const h = n && s && pv(n, s.live), g = h && f && Pc(Ac(h, s.live), f);
  return g ? { ...p, liveFragment: h, ...g } : {
    ...p,
    liveFragment: n,
    sentinelMap: void 0,
    settledOnlyRuns: [],
    alignment: void 0
  };
}
function ao(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const n = Zv(e, t);
  return n ? {
    liveFragment: rh(e, n.start, n.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function va(e, t) {
  for (const n of e.noteGlyphRenames.values())
    nC(n, t);
  for (const n of e.charOpenerRenames.values())
    sC(n, t);
}
function RL(e, t) {
  const n = e.getKey();
  return t.bookScopes.has(n) || [...t.paraScopes.values(), ...t.bookTrailingParas.values()].some(
    (r) => r.some((i) => i.getKey() === n)
  );
}
function IL(e) {
  const t = e.getChildren();
  let n = 0;
  for (; n < t.length; ) {
    const r = t[n];
    if (!w(r) || r.getMarkerSyntax() !== "opening") break;
    n += 1;
  }
  return n < t.length ? t.slice(n + 1) : void 0;
}
function LL(e, t, n, r) {
  const { getMarker: i, viewOptions: s } = n.tier2;
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const o = e.getTopLevelElement(), a = o && hl(o, e), c = Ji(e, i, s)?.contentNodes;
  if (!o || !a || !c || RL(o, t)) return;
  const l = e.getNextSiblings(), u = sh([...c, ...l], i, s), f = ls(o), d = /* @__PURE__ */ new Map();
  if (fs([o], [f], d), va(t, d), Ta([o]).filter((y) => !y.is(e) && t.noteScopes.has(y.getKey())).forEach(
    (y) => Yi(
      y,
      d,
      n.tier2,
      t.huskKeys,
      r,
      t.charOpenerRenames
    )
  ), !Yi(
    e,
    d,
    n.tier2,
    t.huskKeys,
    r,
    t.charOpenerRenames
  ))
    return;
  const p = d.get(e.getKey())?.node;
  if (!m_(p) || p.unknownAttributes?.closed === "false")
    return;
  const { liveFragment: h, liveCut: g } = ao(u, r), m = Vr(u, d, t.huskKeys);
  return oo(
    "note",
    [e, ...l],
    h,
    g,
    [f],
    m,
    n,
    () => {
      let y = Ce().getFirstChild();
      for (const k of a)
        y = A(y) ? y.getChildAtIndex(k) : null;
      return q(y) ? OC(y, n.tier2) : void 0;
    }
  );
}
function OC(e, { getMarker: t, viewOptions: n }) {
  const r = IL(e), i = e.getParent();
  if (!r || !i) return;
  const s = dn(e), o = s.at(-1);
  if (o === void 0) return;
  const a = s.length === 1 ? Ce() : i, c = zt(a, qt(n));
  return {
    fragment: sh(
      [...r, ...e.getNextSiblings()],
      t,
      n
    ),
    closedNote: { scratchNotePath: s, settledItemsFromNote: c.length - o }
  };
}
function qL(e, t, n, r, i) {
  const { getMarker: s, viewOptions: o } = r.tier2, { liveFragment: a, sentinelMap: c, scratchFragment: l } = e, u = a && pl(a, t), f = u && u.member.is(t) ? c?.[u.sentinelIndex]?.[u.memberIndex] : void 0, d = Ji(t, s, o)?.contentNodes;
  if (!f || !l || !d) return;
  const p = t.getNextSiblings(), h = sh([...d, ...p], s, o), { liveFragment: g, liveCut: m } = ao(h, i), y = {
    live: h.sentinels.map((k) => k.filter((x) => !n.huskKeys.has(x.getKey())))
  };
  return NC(
    "note",
    [t, ...p],
    g,
    m,
    e.scratch,
    y,
    r,
    () => {
      const k = l.sentinels[f.sentinelIndex]?.[f.memberIndex];
      if (!(!q(k) || k.getUnknownAttributes()?.closed === "false"))
        return OC(k, r.tier2);
    }
  );
}
function DL(e, t, n, r, i) {
  const s = LL(e, n, r, i);
  if (s) return s;
  const { liveFragment: o, liveCut: a } = ao(t, i), c = ls(e), l = /* @__PURE__ */ new Map();
  if (fs([e], [c], l), va(n, l), !Yi(
    e,
    l,
    r.tier2,
    n.huskKeys,
    i,
    n.charOpenerRenames
  ))
    return;
  const u = t && Vr(t, l, n.huskKeys);
  return oo("note", [e], o, a, [c], u, r);
}
function KL(e, t, n, r, i) {
  const { liveFragment: s, liveCut: o } = ao(t, i), a = e.map(ls), c = /* @__PURE__ */ new Map();
  fs(e, a, c), va(n, c), Ta(e).filter((f) => n.noteScopes.has(f.getKey())).forEach(
    (f) => Yi(
      f,
      c,
      r.tier2,
      n.huskKeys,
      i,
      n.charOpenerRenames
    )
  );
  const l = eC(
    e,
    c,
    r.tier2,
    n.huskKeys,
    i,
    n.charOpenerRenames
  );
  if (!l) return;
  const u = t && Vr(t, c, n.huskKeys);
  return oo("para", e, s, o, l, u, r);
}
function UL(e, t, n, r, i, s) {
  const { liveFragment: o, liveCut: a } = ao(n, s), c = [e, ...t], l = c.map(ls), u = /* @__PURE__ */ new Map();
  if (fs(c, l, u), va(r, u), Ta(c).filter((d) => r.noteScopes.has(d.getKey())).forEach(
    (d) => Yi(
      d,
      u,
      i.tier2,
      r.huskKeys,
      s,
      r.charOpenerRenames
    )
  ), !lC(
    e,
    t,
    u,
    i.tier2,
    r.huskKeys,
    s,
    r.charOpenerRenames
  ))
    return;
  const f = n && Vr(n, u, r.huskKeys);
  return oo("para", c, o, a, l, f, i);
}
function BL(e, t, n, r, i) {
  const { liveFragment: s, liveCut: o } = ao(t, i), a = oC(e, r.tier2, i, n.charOpenerRenames);
  if (!a) return;
  const c = [e, ...us(e)];
  return oo("chapter", c, s, o, a, void 0, r);
}
function FL(e, t, n, r, i, s) {
  const o = ls(e), a = /* @__PURE__ */ new Map();
  fs([e], [o], a), va(r, a), Ta([e]).filter((u) => r.noteScopes.has(u.getKey())).forEach(
    (u) => Yi(
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
    d < 0 || (cC(f.siblings, d), c.add(u.getKey()));
  }
  if (c.size === 0) return;
  const l = t && Vr(t, a, c);
  return oo("para", [e], t, void 0, [o], l, i);
}
function zL(e, t) {
  for (let n = e; n; n = n.getParent())
    if (t.has(n.getKey())) return !0;
  return !1;
}
function ry(e, t, n = /* @__PURE__ */ new Map()) {
  return {
    renamedClosers: n,
    closedNoteScopeOver: () => {
    },
    byFirstLiveKey: /* @__PURE__ */ new Map(),
    liveToSettledTopIndex: (r) => r,
    settledToLiveTopIndex: (r) => ({ liveIndex: r, indexWithinScope: 0 }),
    planContaining: () => {
    },
    viewOptions: e,
    logger: t
  };
}
function jL(e) {
  return e.liveNodes.every((n) => n.isAttached()) ? (e.liveFragment?.spans ?? []).every((n) => X(n.key) !== null) : !1;
}
function Xa(e) {
  return (e.type === "element" ? e.node : e.segments[0]?.node)?.getTopLevelElement() ?? null;
}
function VL(e, t, n = /* @__PURE__ */ new Map()) {
  const r = zt(Ce(), t), i = [], s = [];
  let o = 0;
  for (let a = 0; a < r.length; ) {
    const c = Xa(r[a]), l = c && e.get(c.getKey());
    if (!l) {
      i[a] = o, s.push({ liveIndex: a, indexWithinScope: 0 }), o += 1, a += 1;
      const d = r[a] && Xa(r[a]), p = c && !d?.is(c) ? n.get(c.getKey()) : 0;
      for (let h = 0; h < (p ?? 0); h += 1)
        s.push({ liveIndex: a, indexWithinScope: 0 }), o += 1;
      continue;
    }
    const u = new Set(l.liveNodes.map((d) => d.getKey()));
    let f = 0;
    for (; a + f < r.length; ) {
      const d = Xa(r[a + f]);
      if (!d || !u.has(d.getKey())) break;
      f += 1;
    }
    for (let d = 0; d < f; d += 1)
      i[a + d] = o;
    for (let d = 0; d < l.settledCount; d += 1)
      s.push({ liveIndex: a, plan: l, indexWithinScope: d });
    o += l.settledCount, a += f;
  }
  return { liveToSettled: i, settledToLive: s };
}
function WL(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const r of e.values()) {
    const i = r.liveNodes[0], s = r.closedNote?.settledItemsFromNote, o = i.getTopLevelElement();
    if (s === void 0 || !Ct(o) || !i.isAttached()) continue;
    const [a, ...c] = dn(i);
    if (a === void 0 || c.length > 0) continue;
    const l = zt(Ce(), t).slice(a).filter((u) => Xa(u)?.is(o)).length;
    s > l && n.set(o.getKey(), s - l);
  }
  return n;
}
function iy(e) {
  const t = Qv(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), ry(e.tier2.viewOptions, e.tier2.logger);
  e.cache.getMarker !== e.tier2.getMarker && (e.cache.entries.clear(), e.cache.getMarker = e.tier2.getMarker);
  const n = aC(e.pendedKeys, e.tier2, t), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (g, m) => {
    if (!g) return;
    const y = g.liveNodes[0].getKey();
    r.set(y, g), g.liveNodes.forEach((k, x) => {
      (x === 0 || !i.has(k.getKey())) && i.set(k.getKey(), g);
    }), m && g.liveNodes.forEach((k) => s.set(k.getKey(), g));
  }, c = (g, m, y, k) => {
    o.add(g);
    const x = PC(m, y, e.tier2), _ = $L(
      m,
      y,
      x?.text ?? "",
      e.tier2,
      t
    ), S = e.cache.entries.get(g);
    if (S?.signature === _ && jL(S.plan)) return S.plan;
    const F = k(x);
    return F ? e.cache.entries.set(g, { signature: _, plan: F }) : e.cache.entries.delete(g), F;
  };
  for (const g of n.noteScopes.values())
    a(
      c(
        g.getKey(),
        "note",
        g.getUnknownAttributes()?.closed === "false" ? [g, ...g.getNextSiblings()] : [g],
        (m) => DL(g, m, n, e, t)
      ),
      !1
    );
  for (const g of n.paraScopes.values())
    a(
      c(
        g[0].getKey(),
        "para",
        g,
        (m) => KL(g, m, n, e, t)
      ),
      !0
    );
  for (const g of n.bookScopes.values()) {
    const m = n.bookTrailingParas.get(g.getKey()) ?? [];
    a(
      c(
        g.getKey(),
        "para",
        [g, ...m],
        (y) => UL(g, m, y, n, e, t)
      ),
      !0
    );
  }
  for (const g of n.chapterScopes.values())
    a(
      c(
        g.getKey(),
        "chapter",
        [g, ...us(g)],
        (m) => BL(g, m, n, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const g of n.husks) {
    const m = g.getTopLevelElement();
    if (!(me(m) || Ct(m)) || zL(g, i)) continue;
    const y = l.get(m.getKey()) ?? { para: m, husks: [] };
    y.husks.push(g), l.set(m.getKey(), y);
  }
  for (const [g, { para: m, husks: y }] of l)
    a(
      c(
        g,
        "para",
        [m],
        (k) => FL(m, k, y, n, e, t)
      ),
      !0
    );
  for (const g of n.noteScopes.values()) {
    if (g.getUnknownAttributes()?.closed !== "false") continue;
    const m = g.getTopLevelElement(), y = m ? s.get(m.getKey()) : void 0, k = y && qL(y, g, n, e, t);
    if (!k) continue;
    const x = r.get(g.getKey());
    r.set(g.getKey(), k), k.liveNodes.forEach((_, S) => {
      const F = i.get(_.getKey());
      (S === 0 || !F || F === x) && i.set(_.getKey(), k);
    });
  }
  const u = /* @__PURE__ */ new Map();
  for (const g of r.values())
    g.closedNote && g.liveNodes.slice(1).forEach((m) => u.set(m.getKey(), g));
  for (const g of [...e.cache.entries.keys()])
    o.has(g) || e.cache.entries.delete(g);
  const f = /* @__PURE__ */ new Map();
  for (const { closer: g, newMarker: m } of n.charOpenerRenames.values())
    g && f.set(g.getKey(), {
      live: g.getTextContent(),
      settled: bl(m, "closing", g.getNested())
    });
  if (r.size === 0)
    return ry(e.tier2.viewOptions, e.tier2.logger, f);
  const d = qt(e.tier2.viewOptions), { liveToSettled: p, settledToLive: h } = VL(
    s,
    d,
    WL(r, d)
  );
  return {
    byFirstLiveKey: r,
    renamedClosers: f,
    closedNoteScopeOver: (g) => u.get(g.getKey()),
    liveToSettledTopIndex: (g) => p[g] ?? g,
    settledToLiveTopIndex: (g) => h[g],
    planContaining: (g) => {
      for (let m = g; m; m = m.getParent()) {
        const y = i.get(m.getKey());
        if (y) return y;
      }
    },
    viewOptions: e.tier2.viewOptions,
    logger: e.tier2.logger
  };
}
function HL({
  scrRef: e,
  onScrRefChange: t
}) {
  const [n] = ve(), r = te({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return H(() => {
    const i = r.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, Rc(s, e) || GL(i, n, e);
  }, [n, e, t]), H(
    () => n.registerMutationListener(
      Pn,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Uf(n);
        sy(r.current, n, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: La(s) === La(n.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [n]
  ), H(() => {
    const i = (a) => a.read(
      () => new Set(
        Ce().getChildren().filter(at).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = n.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), f = i(c), d = [...f].some((p) => !u.has(p));
      d && (Uf(n) || sy(r.current, n, void 0, {
        hasCreated: d,
        hasDestroyed: [...u].some((p) => !f.has(p)),
        isSameDocumentReload: La(a) === La(c)
      }));
    };
    return tt(
      ...[Ln, Dn].map(
        (a) => n.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [n]), H(
    () => n.registerCommand(
      gn,
      () => {
        const i = r.current;
        return i.phase === "idle" && QL(i, $C()), !1;
      },
      Qt
    ),
    [n]
  ), H(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => n.dispatchCommand(gn, void 0));
    };
    return tt(
      n.registerMutationListener(Jt, i),
      n.registerMutationListener(Bt, i)
    );
  }, [n]), H(() => {
    const i = () => nq(r.current);
    return n.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [n]), null;
}
function GL(e, t, n) {
  if (JL(e, n)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const r = Uf(t);
  (!r || r === n.book) && t.update(() => RC(t, n.chapterNum, n.verseNum));
}
function JL(e, t) {
  const n = e.pendingEchoes.findIndex((r) => Rc(r, t));
  return n < 0 ? !1 : (e.pendingEchoes.splice(0, n + 1), e.phase = "idle", !0);
}
function $C() {
  const e = N(), t = ek(e);
  if (!t) return;
  const n = mh(), r = dM(t);
  if (!r && !n) return;
  const i = r ? parseInt(r.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = Gd(t, e), { verseNum: o, verse: a } = KE(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: n?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Uf(e) {
  return e.getEditorState().read(() => mh()?.getCode() || void 0);
}
function mh() {
  return Ce().getChildren().find(Ie);
}
function sy(e, t, n, r) {
  const i = r.hasCreated && !e.sawDocument;
  if (r.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    r.hasCreated && (!n || n === e.scrRef.book) && Tu(e, t);
    return;
  }
  r.hasCreated && r.hasDestroyed ? (r.isSameDocumentReload || Tu(e, t), e.phase = "navigating") : i && Tu(e, t), n && n !== e.scrRef.book && qC(e, { ...e.scrRef, book: n }) && (e.phase = "navigating");
}
function Tu(e, t) {
  queueMicrotask(() => {
    t.update(
      () => RC(t, e.scrRef.chapterNum, e.scrRef.verseNum)
    );
  });
}
function RC(e, t, n) {
  const r = N()?.clone();
  YL(t, n);
  const i = N();
  i && !(r && i.is(r)) && e.dispatchCommand(rd, void 0);
}
function YL(e, t) {
  const n = $C();
  if (n?.chapterNum === e && (n.verse ? LC(t, n.verse) : n.verseNum === t))
    return;
  const r = Ce().getChildren(), i = Hb(r, e);
  if (!i) return;
  const s = bM(r, i), o = fM(s, !0);
  yM(s, o);
  let a;
  try {
    a = $E(s, t);
  } catch {
    return;
  }
  a && (me(a) ? !v(a.getFirstChild()) && no(a) || or(a, 0) : XL(a));
}
function XL(e) {
  const t = e.getParent();
  if (!t) return;
  const n = e.getIndexWithinParent() + 1, r = t.getChildAtIndex(n);
  if (!r || Ee(r)) {
    v(e) ? e.selectEnd() : or(t, n);
    return;
  }
  const i = ga(t, n);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (v(e)) {
    e.selectEnd();
    return;
  }
  const s = A(r) && !q(r) ? IC(r) : void 0;
  s ? s.select(0, 0) : or(t, n);
}
function IC(e) {
  const t = e.getFirstChild();
  if (v(t)) return t;
  if (A(t) && !q(t)) return IC(t);
}
function La(e) {
  return e.read(() => {
    const t = Ce().getChildren().find(at);
    return `${mh()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function QL(e, t) {
  e.phase !== "navigating" && t && (ZL(t, e.scrRef) || qC(e, eq(t, e.scrRef)));
}
function ZL(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? LC(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function LC(e, t) {
  try {
    return wd(e, t);
  } catch {
    return !1;
  }
}
function eq(e, t) {
  const n = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (n.verse = e.verse), t.versificationStr != null && (n.versificationStr = t.versificationStr), n;
}
const tq = 8;
function qC(e, t) {
  return Rc(t, e.scrRef) || e.pendingEchoes.some((n) => Rc(n, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > tq && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function Rc(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function nq(e) {
  e.phase = "idle";
}
function rq(e) {
  return Ie(e) ? `${e.__code}` : $e(e) ? `${e.__marker} "${e.__number}"` : U(e) ? `${e.__marker}` : Gr(e) ? `${e.__marker} "${e.__number}"` : Lt(e) ? `${e.__caller}` : Ar(e) ? `${e.__marker} "${e.__number}"` : q(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : me(e) ? `${e.__marker}` : v(e) ? `"${e.__text}"${iq(e)}` : ue(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Ue(e) ? `${e.__marker} "${e.__number}"` : "";
}
function iq(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Dr]) : "";
}
function sq() {
  const [e] = ve();
  return /* @__PURE__ */ P(
    qS,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: rq,
      editor: e
    }
  );
}
const DC = ky(null), oy = 4;
function oq({
  children: e,
  className: t,
  onClick: n,
  title: r
}) {
  const i = te(null), s = xy(DC);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return H(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ P("button", { className: t, onClick: n, ref: i, title: r, type: "button", children: e });
}
function aq({
  children: e,
  dropDownRef: t,
  onClose: n
}) {
  const [r, i] = Ae(), [s, o] = Ae(), a = Me(
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
  }, [r, s]), /* @__PURE__ */ P(DC.Provider, { value: l, children: /* @__PURE__ */ P("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function cq({
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
      p.style.top = `${h + d.offsetHeight + oy}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
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
          const { top: g } = p.getBoundingClientRect(), m = g + p.offsetHeight + oy;
          m !== h.getBoundingClientRect().top && (h.style.top = `${m}px`);
        }
      }
    };
    return document.addEventListener("scroll", d), () => {
      document.removeEventListener("scroll", d);
    };
  }, [c, a, l]), /* @__PURE__ */ Qe(Li, { children: [
    /* @__PURE__ */ Qe(
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
      /* @__PURE__ */ P(aq, { dropDownRef: a, onClose: f, children: s }),
      document.body
    )
  ] });
}
const Bf = {
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
}, Ff = {
  ...Bf,
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
function lq({
  editorRef: e,
  blockMarker: t,
  disabled: n = !1
}) {
  return /* @__PURE__ */ P(
    cq,
    {
      disabled: n,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + uq(t),
      buttonLabel: fq(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Bf).map((r) => /* @__PURE__ */ Qe(
        oq,
        {
          className: "item block-marker " + dq(t === r),
          onClick: () => e.current?.formatPara(r),
          children: [
            /* @__PURE__ */ P("i", { className: "icon block-marker " + r }),
            /* @__PURE__ */ P("span", { className: "text usfm_" + r, children: Bf[r] })
          ]
        },
        r
      ))
    }
  );
}
function uq(e) {
  return e && e in Ff ? e : "ban";
}
function fq(e) {
  return e && e in Ff ? Ff[e] : "No Style";
}
function dq(e) {
  return e ? "active dropdown-item-active" : "";
}
function ay() {
  return /* @__PURE__ */ P("div", { className: "divider" });
}
const pq = hi(function({ editorRef: t, isReadonly: n = !1, onStateChange: r }, i) {
  const [s] = ve(), [o, a] = Ae(s), [c, l] = Ae(), [u, f] = Ae(!1), [d, p] = Ae(!1), h = Me(
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
    gn,
    (g, m) => (a(m), !1),
    He
  ), [s]), /* @__PURE__ */ Qe(Li, { children: [
    /* @__PURE__ */ P(zx, { onStateChange: h }),
    /* @__PURE__ */ Qe("div", { className: "toolbar", children: [
      /* @__PURE__ */ P(
        "button",
        {
          disabled: !u || n,
          onClick: () => {
            o.dispatchCommand(Oy, void 0);
          },
          title: Ls ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand($y, void 0);
          },
          title: Ls ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ P("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ P(ay, {}),
      o === s && /* @__PURE__ */ Qe(Li, { children: [
        /* @__PURE__ */ P(
          lq,
          {
            editorRef: t,
            blockMarker: c,
            disabled: n
          }
        ),
        /* @__PURE__ */ P(ay, {})
      ] }),
      /* @__PURE__ */ P("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), hq = il(), gq = {}, mq = {}, cy = c_.filter((e) => e !== id);
function yq() {
  return /* @__PURE__ */ P("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function ly(e) {
  return e.type === "text" && e.offset !== 0 && e.offset !== e.getNode().getTextContentSize();
}
function uy() {
  const e = N();
  if (!E(e) || !e.isCollapsed()) return;
  const t = e.focus.getNode();
  return v(t) ? { key: t.getKey(), offset: e.focus.offset } : void 0;
}
function bq(e) {
  const t = [], n = (r, i) => r?.forEach((s, o) => {
    if (typeof s != "object") return;
    const a = [...i, o];
    s.type === "note" && t.push(Nt(a)), n(s.content, a);
  });
  return n(e?.content, []), t;
}
function kq(e, t) {
  return e.editorState === t.editorState && e.pendedKeys === t.pendedKeys && e.transientInput === t.transientInput && e.caretKey === t.caretKey && e.caretOffset === t.caretOffset && e.viewOptions === t.viewOptions && e.getMarker === t.getMarker;
}
function xq({
  listener: e
}) {
  const [t] = ve();
  return Gs(
    () => t.registerUpdateListener((n) => e(n, t)),
    [t, e]
  ), null;
}
function qa(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
function fy(e) {
  const t = e.getNextSiblings(), n = t.at(0), r = t.at(-1);
  if (!n || !r) return [];
  const i = A(r) ? r.getLastDescendant() ?? r : r;
  return nl(n, i);
}
function dy(e, t, n) {
  US(e, () => qs(t));
  const r = N();
  if (!E(r)) return;
  const i = /* @__PURE__ */ new Set();
  r.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    me(o) && i.add(o);
  }), i.forEach((s) => Ev(s, t, n));
}
const KC = hi(function({
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
  const f = te(null), d = te(null), p = te(null), h = te(null), g = te(t), m = te(!1), y = te(void 0), k = te(void 0), x = te(void 0), _ = te({ entries: /* @__PURE__ */ new Map() }), S = te(void 0), F = te(0), $ = te(!0), ne = te(void 0), [fe, I] = Ae(t), [K, ge] = Ae(0), [re, Le] = Ae(), {
    isReadonly: ye = !1,
    structureProtectionMode: nt = "off",
    hasExternalUI: rt = !1,
    hasSpellCheck: rn = !1,
    textDirection: Ye = "ltr",
    markerMenuTrigger: pr = "\\",
    view: Tn,
    nodes: Pe,
    debug: he = !1,
    contextMenu: z,
    styleInfo: oe,
    markerSettleDelayMs: Se,
    copyLimit: We
  } = a ?? mq, lt = Tn ?? hq, kt = Xo(lt) && (lt.markerMode !== "hidden" || !lt.hasSpacing || lt.hasGutterParaMarkers || lt.hasActiveTextFocusBox) ? {
    ...lt,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : lt, vn = te(kt);
  Xn(vn.current, kt) || (vn.current = kt);
  const ee = vn.current, Te = ut(() => Pe ?? gq, [Pe]), Pr = ut(() => z, [z]), we = ut(
    () => SE(oe ?? uc),
    [oe]
  ), hr = te(c);
  Xn(hr.current, c) || (hr.current = c);
  const pe = hr.current, Dt = Xo(ee), Yt = ye || Dt, L = kt !== lt;
  H(() => {
    Dt && !ye && pe?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), L && pe?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), ee?.markerMode === "visible" && !ye && pe?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [Dt, ye, L, pe, ee?.markerMode]);
  const V = te(null), G = ut(() => {
    if (ee.markerMode !== "editable") return;
    const O = oe ?? uc;
    return {
      getContext: () => V.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (R) => LR(
        O,
        R,
        Te.extraValidMarkers
      ),
      getEnterItems: (R) => qR(
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
    if (Dt)
      throw new Error(
        `Cannot ${O} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, ae = (O) => {
    if (J(O), Yt) throw new Error(`Cannot ${O} in readonly mode`);
  }, Z = ut(
    () => [gt, ...Dt ? CP : ll],
    [Dt]
  ), Q = () => !!f.current && Lx(f.current), se = ut(
    () => ({
      namespace: "platformEditor",
      theme: { ..._T, showCharMarkerTitles: ee.showCharMarkerTitles },
      editable: !Yt,
      editorState: void 0,
      // Handling of errors during update
      onError(O) {
        throw O;
      },
      nodes: Z
    }),
    [Yt, Z, ee.showCharMarkerTitles]
  );
  _s.initialize(pe);
  function ce(O) {
    if (O !== void 0 && !u$(O, Te.extraValidMarkers))
      throw new Error(`Unsupported character marker '${O}'`);
  }
  const qe = Me(() => {
    const O = f.current;
    if (!O) return g.current;
    const R = () => {
      if (!m.current) return;
      const it = _s.deserializeEditorState(O.getEditorState(), ee);
      it && (g.current = it, m.current = !1);
    }, B = Lu(O), Y = k.current;
    if ((!B || B.size === 0) && !Y)
      return R(), g.current;
    const _e = O.getEditorState(), Be = x.current, De = {
      editorState: _e,
      pendedKeys: B ? [...B].sort().join(",") : "",
      transientInput: Y,
      caretKey: Be?.key,
      caretOffset: Be?.offset,
      viewOptions: ee,
      getMarker: we
    }, je = S.current;
    if (je && kq(je.key, De)) return je.usj;
    const xt = _e.toJSON(), ht = _e.read(
      () => J2(
        xt,
        B ?? /* @__PURE__ */ new Set(),
        { viewOptions: ee, getMarker: we, logger: pe },
        Y,
        Be
      )
    );
    return ht ? (S.current = { key: De, usj: ht }, ht) : (R(), g.current);
  }, [ee, we, pe]), Ne = Me(() => {
    const O = f.current;
    if (!O) return;
    const R = {
      pendedKeys: Lu(O) ?? /* @__PURE__ */ new Set(),
      transientInput: k.current,
      lastKnownCaret: x.current,
      tier2: { viewOptions: ee, getMarker: we, logger: pe },
      nodes: Z,
      cache: _.current
    };
    return To(R) && R.cache.entries.clear(), R;
  }, [ee, we, pe, Z]), sn = Me(
    (O) => {
      const R = f.current, B = Ne();
      if (!(!R || !B))
        return To(B) ? O : R.getEditorState().read(() => {
          const Y = iy(B);
          return xL(B, Y, O);
        });
    },
    [Ne]
  );
  H(() => ($.current = !0, () => {
    $.current = !1;
  }), []);
  const Cn = Me(
    (O, R) => O.read(() => {
      const B = Ne(), Y = B && wL(iy(B));
      return !Y && E(N()) && pe?.warn(
        `${R} refused: the selection could not be expressed against the document the host is reading`
      ), Y;
    }),
    [Ne, pe]
  ), wr = Me(
    (O) => {
      if (!i) return;
      const R = f.current, B = Ne();
      F.current += 1;
      const Y = F.current;
      if (!R || !B || To(B)) {
        i(O);
        return;
      }
      queueMicrotask(() => {
        if (!$.current || Y !== F.current || f.current !== R) return;
        const _e = Cn(R, "onSelectionChange");
        Y === F.current && i(_e);
      });
    },
    [i, Ne, Cn]
  );
  function ki(O, R, B) {
    if (Dt && R === "remote") {
      hr.current?.error(
        "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
      );
      return;
    }
    J("apply an update");
    const Y = f.current;
    if (!Y) return;
    const _e = Q(), Be = _e ? void 0 : Co(Y, Or);
    let De = !1;
    Y.update(
      () => {
        Wl(Y, R), R === "remote" && Wt(id), _e || Wt(Or), B && Wt(B);
        try {
          y1(O, ee, Te, pe);
        } catch (je) {
          throw De = !0, Wl(Y, void 0), Be?.(), je;
        }
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
          if (De) return;
          Wl(Y, void 0), Be?.(), _e || su(Y);
          const je = Y.getEditorState(), xt = _s.deserializeEditorState(je, ee);
          if (!xt) return;
          const ht = !Xn(g.current, xt);
          ht && (g.current = xt);
          const it = qe();
          if (it && (ht || !Xn(fe, xt))) {
            const bt = gg(O, je, "apply");
            ne.current = it, s?.(it, O, R, bt);
          }
        }
      }
    );
  }
  const co = {
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
      f.current?.dispatchCommand(Oy, void 0);
    },
    redo() {
      f.current?.dispatchCommand($y, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      ae("cut"), f.current && Tp(f.current);
    },
    copy() {
      f.current && xp(f.current);
    },
    paste() {
      ae("paste"), f.current && vp(f.current);
    },
    pastePlainText() {
      ae("paste as plain text"), f.current && Cp(f.current);
    },
    getUsj() {
      return qe();
    },
    commitPendingMarkerEdits() {
      const O = f.current;
      if (!O) return;
      const R = !Q(), B = R ? Co(O, Or) : void 0;
      O.update(
        () => {
          R && Wt(Or), O.dispatchCommand(Hv, void 0);
        },
        { discrete: !0 }
      ), B?.(), R && su(O);
    },
    setTransientInput(O) {
      if (!O) {
        k.current = void 0;
        return;
      }
      const R = f.current?.getEditorState().read(() => {
        const B = N();
        return E(B) && B.isCollapsed() ? B.focus.key : void 0;
      });
      k.current = { input: O, nodeKey: R ?? x.current?.key };
    },
    setUsj(O) {
      if (!Xn(g.current, O)) {
        g.current = O, k.current = void 0;
        const R = Xn(fe, O);
        I(O), R && ge((B) => B + 1);
      }
    },
    applyUpdate(O, R = "remote") {
      ki(O, R);
    },
    replaceEmbedUpdate(O, R) {
      const B = f.current?.read(() => XE(O, R));
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
      return !R || To(R) ? O.read(() => ol(ee)) : Cn(O, "getSelection");
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
        const B = sl(R, ee);
        B !== void 0 && (Fn(B), (!Ft().isEditable() || ly(B.anchor) && ly(B.focus)) && f.current?.dispatchCommand(gn, void 0));
      });
    },
    setAnnotation(O, R, B, Y, _e) {
      let Be, De, je, xt;
      typeof Y == "function" || Y === void 0 ? (Be = Y, De = _e) : (Be = Y.onClick, De = Y.onRemove, je = Y.onMouseEnter, xt = Y.onMouseLeave);
      const ht = sn(O);
      if (!ht) {
        pe?.warn(
          `setAnnotation refused for ${R} "${B}": the range could not be resolved against the document currently being edited`
        );
        return;
      }
      d.current?.setAnnotation(
        ht,
        Fl(R),
        B,
        Be,
        De,
        je,
        xt
      );
    },
    removeAnnotation(O, R) {
      d.current?.removeAnnotation(Fl(O), R);
    },
    getAnnotationRanges(O, R) {
      return d.current?.getAnnotationRanges(Fl(O), R) ?? [];
    },
    formatPara(O) {
      ae("format a paragraph"), f.current?.update(
        () => {
          const R = N();
          if (!E(R)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${O}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const B = R.isBackward() ? R.focus : R.anchor, Y = Ze(B.getNode(), Ie);
          if (Y) {
            const _e = R.isBackward() ? R.anchor : R.focus, De = !R.isCollapsed() && !Y.is(_e.getNode()) && !Y.isParentOf(_e.getNode()) ? { key: _e.key, offset: _e.offset, type: _e.type } : void 0, je = Kr();
            if (je.anchor.set(B.key, B.offset, B.type), je.focus.set(B.key, B.offset, B.type), Fn(je), !Rf(O, ee)) {
              c?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${O}"`
              );
              return;
            }
            if (!De) return;
            const xt = X(De.key);
            if (!xt?.isAttached()) return;
            const ht = xt.getTopLevelElement();
            if (!ht) return;
            const it = Y.getNextSibling();
            if (!me(it)) return;
            let bt = it.getNextSibling();
            for (; bt; ) {
              const xi = bt.is(ht), Sn = bt.getNextSibling();
              if (me(bt)) {
                const Nr = Kr();
                Nr.anchor.set(bt.getKey(), 0, "element"), Nr.focus.set(bt.getKey(), bt.getChildrenSize(), "element"), Fn(Nr), dy(Nr, O, ee);
              }
              if (xi) break;
              bt = Sn;
            }
            return;
          }
          dy(R, O, ee);
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
      if (Yt) throw new Error("Cannot remove character marker in readonly mode");
      ce(O);
      let R = !1;
      return f.current?.update(
        () => {
          const B = N();
          E(B) && (R = kT(B, O, ee));
        },
        { discrete: !0 }
      ), R;
    },
    replaceCharacterMarker(O, R) {
      if (Yt) throw new Error("Cannot replace character marker in readonly mode");
      ce(O), ce(R);
      let B = !1;
      return f.current?.update(
        () => {
          const Y = N();
          E(Y) && (B = v$(Y, O, R));
        },
        { discrete: !0 }
      ), B;
    },
    extendCharacterMarker(O, R) {
      if (Yt) throw new Error("Cannot extend character marker in readonly mode");
      ce(O), R?.forEach(
        (Y) => ce(Y)
      );
      let B = !1;
      return f.current?.update(
        () => {
          const Y = N();
          E(Y) && (B = C$(
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
      if (Yt) throw new Error("Cannot insert marker in readonly mode");
      if (!n) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!f.current) return;
      if (!gf(O, Te.extraValidMarkers))
        throw new Error(`Unsupported marker '${O}'`);
      const R = mf(
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
        return f.current?.getEditorState().read(() => VI());
    },
    applyMarkerMenuSelection(O, R) {
      if (ye) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!n)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!f.current) return;
      if (O.kind !== "closeTag" && !gf(O.marker, Te.extraValidMarkers))
        throw new Error(`Unsupported marker '${O.marker}'`);
      let B;
      return f.current.update(() => {
        B = e2(O, R, n, {
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
        Rf(O, ee);
      });
    },
    commitTypedMarker(O, R) {
      if (ye) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!f.current) return !1;
      let B = !1;
      return f.current.update(() => {
        B = QI(O, R), B || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), B;
    },
    commitTypedCloser(O) {
      if (ye) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!f.current) return !1;
      let R = !1;
      return f.current.update(() => {
        R = $v(O), R || c?.warn(
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
          const _e = ix(
            O,
            R,
            Y,
            n,
            ee,
            Te,
            pe
          );
          qa(_e, y);
        },
        { discrete: !0 }
      );
    },
    selectNote(O) {
      const R = f.current;
      if (!R) return;
      const B = Ne();
      if (typeof O == "string" || !B || To(B)) {
        R.update(() => {
          const Be = br(O);
          Be && (za(Be, ee), qa(Be, y));
        });
        return;
      }
      const Y = bq(qe())[O], _e = Y ? sn({ start: { jsonPath: Y } }) : void 0;
      _e && R.update(() => {
        const [Be, De] = $n(_e.start, ee);
        if (!Be || De === void 0) return;
        const je = q(Be) ? Be : Ze(Be, q);
        q(je) ? (za(je, ee), qa(je, y)) : v(Be) && Be.select(De, De);
      });
    },
    selectAfterNote(O) {
      const R = f.current;
      if (!R) return;
      const B = !Q(), Y = B ? Co(R, Or) : void 0;
      if (R.update(
        () => {
          B && Wt(Or);
          const _e = br(O);
          _e && ox(_e);
        },
        { discrete: !0 }
      ), Y?.(), B) {
        su(R);
        const _e = Co(
          R,
          Or
        );
        R.update(
          () => {
            Wt(Or), R.dispatchCommand(gn, void 0);
          },
          { discrete: !0 }
        ), _e();
      }
    },
    selectNoteTextOffset(O, R, B) {
      f.current?.update(() => {
        const Y = br(O);
        if (!Y) return;
        const _e = B?.glyph;
        (B?.field === "category" ? bP(Y, R, _e) || Mg(Y, 0) : Mg(Y, R, _e)) || za(Y, ee), qa(Y, y);
      });
    },
    getNoteOps(O) {
      const R = f.current;
      return R ? vs(R, () => {
        const B = br(O);
        if (B)
          return nl(B);
      }) : void 0;
    },
    getOpsAfterNote(O) {
      const R = f.current;
      return R ? vs(R, () => {
        const B = br(O);
        return B ? fy(B) : void 0;
      }) : void 0;
    },
    takeOpsAfterNote(O) {
      const R = f.current, B = R ? vs(R, () => {
        const De = br(O);
        if (!De) return;
        const je = Yd(De, "apply");
        return { ops: fy(De), notePosition: je };
      }) : void 0;
      if (!B) return;
      const { ops: Y, notePosition: _e } = B;
      if (Y.length === 0 || _e === void 0) return Y;
      const Be = Y.reduce(
        (De, je) => De + (typeof je.insert == "string" ? je.insert.length : 1),
        0
      );
      return ki([{ retain: _e + 1 }, { delete: Be }], "remote", Gf), Y;
    },
    getNoteIndex(O) {
      const R = f.current;
      return R ? vs(R, () => Zd(O)) : void 0;
    },
    getNoteKey(O) {
      const R = f.current;
      return R ? vs(R, () => br(O)?.getKey()) : void 0;
    },
    highlightNote(O) {
      p.current?.setHighlightedNote(O);
    },
    get toolbarEndRef() {
      return h;
    }
  };
  V.current = co, Lc(u, () => co), H(() => {
    const O = f.current;
    if (O)
      return O.registerUpdateListener(({ editorState: R }) => {
        const B = R.read(uy);
        B && (x.current = B);
      });
  }, []);
  const ds = te({ onUsjChange: s, viewOptions: ee, isBlockVerse: Dt, readSettledUsj: qe });
  ds.current = { onUsjChange: s, viewOptions: ee, isBlockVerse: Dt, readSettledUsj: qe };
  const Ca = Me((O, R) => {
    const { editorState: B, dirtyElements: Y, dirtyLeaves: _e, tags: Be } = O;
    if (Y.size === 0 && _e.size === 0) return;
    if (Be.has(la)) {
      const Sn = ds.current, Nr = !Sn.isBlockVerse && _s.deserializeEditorState(B, Sn.viewOptions);
      Nr && (g.current = Nr), ne.current = g.current;
      return;
    }
    if (Fd(R)) return;
    if (cy.some((Sn) => Be.has(Sn))) {
      m.current = !0;
      return;
    }
    const De = ds.current;
    if (De.isBlockVerse) return;
    _b(R, B, Be);
    const je = B.read(uy);
    je && (x.current = je);
    const xt = g1(O, {
      ignoreTags: cy
    }), ht = xt ? [] : new Es(B.read(() => m1(R, O))).chop().ops;
    if (!xt) {
      const Sn = _s.deserializeEditorState(B, De.viewOptions);
      Sn && (g.current = Sn);
    }
    if (!De.onUsjChange) return;
    const it = De.readSettledUsj();
    if (!it || ht.length === 0 && Xn(ne.current, it)) return;
    if (ne.current = it, ht.length === 0) {
      De.onUsjChange(it, void 0, "local", void 0);
      return;
    }
    const bt = gg(ht, B), xi = bt && !O.prevEditorState.read(() => X(bt)) ? bt : void 0;
    De.onUsjChange(it, ht, "local", xi);
  }, []), ps = Me(
    (O) => {
      Le(O.contextMarker), o?.(O);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Qe(Ry, { initialConfig: se, children: [
      /* @__PURE__ */ P(Ew, { isEditable: !Yt }),
      /* @__PURE__ */ Qe("div", { className: "editor-container", children: [
        rt ? /* @__PURE__ */ P(zx, { onStateChange: ps }) : /* @__PURE__ */ P(
          "div",
          {
            className: "editor-toolbar-container" + (Yt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ P(
              pq,
              {
                ref: h,
                editorRef: V,
                isReadonly: Yt,
                onStateChange: ps
              }
            )
          }
        ),
        /* @__PURE__ */ Qe("div", { className: "editor-inner", children: [
          /* @__PURE__ */ P(Ly, { editorRef: f }),
          /* @__PURE__ */ P(
            KS,
            {
              contentEditable: /* @__PURE__ */ P(
                Iy,
                {
                  className: `editor-input usfm ${$A(ee).join(" ")}${ee.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ee.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: rn
                }
              ),
              placeholder: /* @__PURE__ */ P(yq, {}),
              ErrorBoundary: qy
            }
          ),
          rt && /* @__PURE__ */ P(Mw, {}),
          /* @__PURE__ */ P(Dy, {}),
          n && r && /* @__PURE__ */ P(HL, { scrRef: n, onScrRefChange: r }),
          n && !rt && /* @__PURE__ */ P(
            sO,
            {
              trigger: pr,
              scrRef: n,
              contextMarker: re,
              getMarkerAction: (O) => mf(
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
            Ow,
            {
              scripture: fe,
              scriptureRef: g,
              nodeOptions: Te,
              editorAdaptor: ar,
              viewOptions: ee,
              logger: pe
            },
            K
          ),
          /* @__PURE__ */ P(tN, { onChange: wr, viewOptions: ee }),
          /* @__PURE__ */ P(xq, { listener: Ca }),
          /* @__PURE__ */ P(A$, { viewOptions: ee }),
          /* @__PURE__ */ P(h1, { ref: d, logger: pe, viewOptions: ee }),
          /* @__PURE__ */ P(W1, { viewOptions: ee }),
          /* @__PURE__ */ P(ow, {}),
          /* @__PURE__ */ P(hw, {}),
          ee?.markerMode !== "editable" && /* @__PURE__ */ P(gw, { logger: pe }),
          /* @__PURE__ */ P(xw, { options: Pr }),
          /* @__PURE__ */ P(xR, { limit: We, viewOptions: ee }),
          /* @__PURE__ */ P(_w, {}),
          /* @__PURE__ */ P(Pw, {}),
          /* @__PURE__ */ P(Nw, {}),
          /* @__PURE__ */ P(t2, {}),
          /* @__PURE__ */ P(
            I2,
            {
              viewOptions: ee,
              getMarker: we,
              logger: pe,
              markerSettleDelayMs: Se,
              structureProtectionMode: nt,
              copyLimit: We
            }
          ),
          ee?.markerMode === "visible" && /* @__PURE__ */ P(kR, { viewOptions: ee, copyLimit: We }),
          /* @__PURE__ */ P(
            B2,
            {
              styleInfo: oe,
              viewOptions: ee,
              logger: pe
            }
          ),
          /* @__PURE__ */ P($w, { ref: p }),
          /* @__PURE__ */ P(
            Rw,
            {
              expandedNoteKeyRef: y,
              nodeOptions: Te,
              viewOptions: ee,
              logger: pe
            }
          ),
          /* @__PURE__ */ P(eN, {}),
          /* @__PURE__ */ P(B1, {}),
          /* @__PURE__ */ P(q1, {}),
          /* @__PURE__ */ P(Y2, { viewOptions: ee, logger: pe }),
          /* @__PURE__ */ P(nN, {}),
          /* @__PURE__ */ P(BN, { structureProtectionMode: nt }),
          /* @__PURE__ */ P(FN, { textDirection: Ye }),
          /* @__PURE__ */ P(jN, {}),
          /* @__PURE__ */ P(rO, {}),
          l
        ] }),
        he && /* @__PURE__ */ P(sq, {})
      ] })
    ] }, ee.verseLayout ?? "inline")
  );
}), ND = hi(function(t, n) {
  const { children: r, ...i } = t;
  return /* @__PURE__ */ P(KC, { ref: n, ...i });
});
function py(e, t) {
  const n = v(e) ? J_(e, Kt, t) ?? [] : [], r = KM(e, Kt, t);
  return [.../* @__PURE__ */ new Set([...n, ...r])];
}
function Tq(e, t, n) {
  eb(Kt, e, t);
  for (const r of n) {
    const i = X(r);
    i && gk(i, Kt, e);
  }
}
function vq(e, t) {
  const n = Array.from(t, (s) => X(s)).filter(
    (s) => s !== null
  );
  n.sort((s, o) => s.isBefore(o) ? -1 : 1);
  const r = n[0];
  if (!r) return;
  if (v(r)) {
    const s = Ir(r).find(
      (a) => a.type === Kt && a.id === e
    ), o = Math.max(Rd(r)[0], s?.start ?? 0);
    r.select(o, o);
    return;
  }
  const i = r.getParent();
  i && i.select(r.getIndexWithinParent(), r.getIndexWithinParent());
}
function UC() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function Ic(e, t, n, r, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: n === void 0 ? UC() : n,
    timeStamp: r === void 0 ? performance.timeOrigin + performance.now() : r,
    type: "comment"
  };
}
function BC(e, t, n) {
  return {
    comments: t,
    id: n === void 0 ? UC() : n,
    quote: e,
    type: "thread"
  };
}
function hy(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function Cq(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function vu(e) {
  const t = e._changeListeners;
  for (const n of t)
    n();
}
class Sq {
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
    this._comments = t, vu(this);
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
          const c = hy(a);
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
    this._comments = i, vu(this);
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
          const c = hy(a);
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
    return this._comments = r, vu(this), t.type === "comment" ? {
      index: s,
      markedComment: Cq(t)
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
    return t !== null ? t.doc.get("comments", Ph) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const n = new wh(), r = t.type, i = t.id;
    if (n.set("type", r), n.set("id", i), r === "comment")
      n.set("author", t.author), n.set("content", t.content), n.set("deleted", t.deleted), n.set("timeStamp", t.timeStamp);
    else {
      n.set("quote", t.quote);
      const s = new Ph();
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
      t_,
      (a) => (r !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), r()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Qt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof n_) {
            const u = l.target, f = l.delta;
            let d = 0;
            for (const p of f) {
              const h = p.insert, g = p.retain, m = p.delete, y = u.parent, k = u === n ? void 0 : y instanceof wh && this._comments.find((x) => x.id === y.get("id"));
              if (Array.isArray(h)) {
                const x = d;
                h.slice().reverse().forEach((_) => {
                  const S = _.get("id"), $ = _.get("type") === "thread" ? BC(
                    _.get("quote"),
                    _.get("comments").toArray().map(
                      (ne) => Ic(
                        ne.get("content"),
                        ne.get("author"),
                        ne.get("id"),
                        ne.get("timeStamp"),
                        ne.get("deleted")
                      )
                    ),
                    S
                  ) : Ic(
                    _.get("content"),
                    _.get("author"),
                    S,
                    _.get("timeStamp"),
                    _.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment($, k, x);
                  });
                });
              } else if (typeof g == "number")
                d += g;
              else if (typeof m == "number")
                for (let x = 0; x < m; x++) {
                  const _ = k === void 0 || k === !1 ? this._comments[d] : k.comments[d];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(_, k);
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
function _q(e) {
  const [t, n] = Ae(e.getComments());
  return H(() => e.registerOnChange(() => {
    n(e.getComments());
  }), [e]), t;
}
function Mq({
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
  }, [r, e]), /* @__PURE__ */ P("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Qe("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function Eq({
  onClose: e,
  children: t,
  title: n,
  closeOnClickOutside: r = !1
}) {
  return Ni(
    /* @__PURE__ */ P(Mq, { onClose: e, title: n, closeOnClickOutside: r, children: t }),
    document.body
  );
}
function FC() {
  const [e, t] = Ae(null), n = Me(() => {
    t(null);
  }, []), r = ut(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ P(Eq, { onClose: n, title: s, closeOnClickOutside: a, children: o });
  }, [e, n]), i = Me(
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
const Aq = {
  ..._T,
  paragraph: "CommentEditorTheme__paragraph"
};
function Pq(...e) {
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
      className: Pq(
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
function wq({
  className: e
}) {
  return /* @__PURE__ */ P(Iy, { className: e || "ContentEditable__root" });
}
function Nq({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ P("div", { className: t || "Placeholder__root", children: e });
}
const gy = Vf("INSERT_INLINE_COMMAND");
function Oq({
  anchorKey: e,
  editor: t,
  showComments: n,
  onAddComment: r
}) {
  const i = te(null), s = Me(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return H(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Gs(() => {
    s();
  }, [e, t, n, s]), /* @__PURE__ */ P("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ P("button", { className: "CommentPlugin_AddCommentBox_button", onClick: r, children: /* @__PURE__ */ P("i", { className: "icon add-comment" }) }) });
}
function $q({ onEscape: e }) {
  const [t] = ve();
  return H(() => t.registerCommand(
    Ny,
    (n) => e(n),
    kr
  ), [t, e]), null;
}
function zC({
  className: e,
  autoFocus: t,
  onEscape: n,
  onChange: r,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ P(Ry, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: Aq
  }, children: /* @__PURE__ */ Qe("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ P(
      QS,
      {
        contentEditable: /* @__PURE__ */ P(wq, { className: e }),
        placeholder: /* @__PURE__ */ P(Nq, { children: s }),
        ErrorBoundary: qy
      }
    ),
    /* @__PURE__ */ P(XS, { onChange: r }),
    /* @__PURE__ */ P(Dy, {}),
    t !== !1 && /* @__PURE__ */ P(GS, {}),
    /* @__PURE__ */ P($q, { onEscape: n }),
    /* @__PURE__ */ P(JS, {}),
    i !== void 0 && /* @__PURE__ */ P(Ly, { editorRef: i })
  ] }) });
}
function jC(e, t) {
  return Me(
    (n, r) => {
      n.read(() => {
        e(ZS()), t(!e_(r.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function Rq({
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
  ), l = te(null), u = WC(), f = Me(() => {
    e.getEditorState().read(() => {
      const g = N();
      if (E(g)) {
        l.current = g.clone();
        const m = g.anchor, y = g.focus, k = BS(
          e,
          m.getNode(),
          m.offset,
          y.getNode(),
          y.offset
        ), x = a.current;
        if (k !== null && x !== null) {
          const { left: _, bottom: S, width: F } = k.getBoundingClientRect(), $ = FS(e, k);
          let ne = $.length === 1 ? _ + F / 2 - 125 : _ - 125;
          ne < 10 && (ne = 10), x.style.left = `${ne}px`, x.style.top = `${S + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
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
  Gs(() => {
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
        BC(g, [Ic(r, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = jC(i, o);
  return /* @__PURE__ */ Qe("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ P(
      zC,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: d,
        onChange: h
      }
    ),
    /* @__PURE__ */ Qe("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
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
function Iq({
  submitAddComment: e,
  thread: t,
  placeholder: n
}) {
  const [r, i] = Ae(""), [s, o] = Ae(!1), a = te(null), c = WC(), l = jC(i, o);
  return /* @__PURE__ */ Qe(Li, { children: [
    /* @__PURE__ */ P(
      zC,
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
            e(Ic(r, c), !1, t);
            const f = a.current;
            f !== null && f.dispatchCommand(OS, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ P("i", { className: "send" })
      }
    )
  ] });
}
function VC({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: n,
  thread: r = void 0
}) {
  return /* @__PURE__ */ Qe(Li, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Qe("div", { className: "Modal__content", children: [
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
function my({
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = FC();
  return /* @__PURE__ */ Qe("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Qe("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ P("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Qe("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : r.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ P("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Qe(Li, { children: [
      /* @__PURE__ */ P(
        pi,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ P(
              VC,
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
function Lq({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: n,
  displayIndex: r,
  listRef: i,
  submitAddComment: s,
  markNodeMap: o
}) {
  const [a] = ve(), [c, l] = Ae(0), [u, f] = FC(), d = ut(
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
      return /* @__PURE__ */ Qe(
        "li",
        {
          onClick: () => {
            if (g) return;
            const y = o.get(h), k = document.activeElement;
            if (y !== void 0) {
              a.update(
                () => {
                  const _ = Array.from(y)[0], S = X(_);
                  ue(S) && S.selectStart();
                },
                {
                  onUpdate() {
                    k !== null && k.focus();
                  }
                }
              );
              return;
            }
            const x = r.keysFor(Kt, h);
            x.size !== 0 && a.update(
              () => {
                vq(h, x);
              },
              {
                onUpdate() {
                  k !== null && k.focus();
                }
              }
            );
          },
          className: `CommentPlugin_CommentsPanel_List_Thread ${o.has(h) || r.keysFor(Kt, h).size > 0 ? "interactive" : ""} ${e.indexOf(h) === -1 ? "" : "active"}`,
          children: [
            /* @__PURE__ */ Qe("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
              /* @__PURE__ */ Qe("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
                "> ",
                /* @__PURE__ */ P("span", { children: p.quote })
              ] }),
              /* @__PURE__ */ P(
                pi,
                {
                  onClick: () => {
                    f("Delete Thread", (y) => /* @__PURE__ */ P(
                      VC,
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
              my,
              {
                comment: y,
                deleteComment: n,
                thread: p,
                rtf: d
              },
              y.id
            )) }),
            /* @__PURE__ */ P("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ P(
              Iq,
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
      my,
      {
        comment: p,
        deleteComment: n,
        rtf: d
      },
      h
    );
  }) });
}
function qq({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: n,
  submitAddComment: r,
  markNodeMap: i,
  displayIndex: s
}) {
  const o = te(null), a = n.length === 0;
  return /* @__PURE__ */ Qe("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ P("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    a ? /* @__PURE__ */ P("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ P(
      Lq,
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
function WC() {
  const e = Ky(), { yjsDocMap: t, name: n } = e;
  return t.has("comments") ? n : "Scripture User";
}
function Dq({
  providerFactory: e,
  setCommentStore: t,
  onChange: n,
  showCommentsContainerRef: r,
  commentContainerRef: i,
  logger: s
}) {
  const o = Ky(), [a] = ve(), c = ut(() => {
    const fe = new Sq(a, s);
    return n && fe.registerOnChange(n), t?.(fe), fe;
  }, [a, s, n, t]), l = _q(c), u = ut(() => /* @__PURE__ */ new Map(), []), f = kx(a), [d, p] = Ae(), [h, g] = Ae([]), [m, y] = Ae(!1), [k, x] = Ae(!1), { yjsDocMap: _ } = o;
  H(() => {
    if (e) {
      const fe = e("comments", _);
      return c.registerCollaboration(fe);
    }
    return () => {
    };
  }, [c, e, _]);
  const S = Me(() => {
    a.update(() => {
      const fe = N();
      fe !== null && (fe.dirty = !0);
    }), y(!1);
  }, [a]), F = Me(
    (fe, I) => {
      if (fe.type === "comment") {
        const K = c.deleteCommentOrThread(fe, I);
        if (!K)
          return;
        const { markedComment: ge, index: re } = K;
        c.addComment(ge, I, re);
      } else {
        c.deleteCommentOrThread(fe);
        const K = I !== void 0 ? I.id : fe.id, ge = u.get(K), re = f.keysFor(Kt, K);
        (ge !== void 0 && ge.size > 0 || re.size > 0) && setTimeout(() => {
          a.update(() => {
            Tq(K, ge ?? [], re);
          });
        });
      }
    },
    [c, f, a, u]
  ), $ = Me(
    (fe, I, K, ge) => {
      c.addComment(fe, K), I && (a.update(() => {
        E(ge) && Bd(ge, Kt, fe.id);
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
      f.keysFor(Kt, ge).size > 0 && (f.setStateClass(Kt, ge, "selected", !0), K());
    }
    return () => {
      I !== void 0 && window.clearTimeout(I);
      for (const ge of fe)
        ge.classList.remove("selected");
      for (const ge of h)
        f.setStateClass(Kt, ge, "selected", !1);
    };
  }, [h, f, a, u]), H(() => {
    if (!a.hasNodes([gt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const fe = /* @__PURE__ */ new Map();
    return tt(
      ed(
        a,
        gt,
        (I) => Ui(I.getTypedIDs()),
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
              ge === "destroyed" ? Le = fe.get(K) ?? [] : ue(re) && (Le = re.getTypedIDs()[Kt] ?? []);
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
          const ge = N();
          let re = !1, Le = !1;
          if (E(ge)) {
            const { anchor: ye } = ge, nt = ye.getNode();
            if (v(nt)) {
              const rt = py(nt, ye.offset);
              g(rt), re = !0, ge.isCollapsed() || (p(nt.getKey()), Le = !0);
            } else if (ye.type === "element" && A(nt)) {
              const rt = nt.getChildren(), rn = /* @__PURE__ */ new Set();
              for (const [Ye, pr] of [
                [rt[ye.offset - 1], !0],
                [rt[ye.offset], !1]
              ]) {
                if (!Ye) continue;
                const Tn = pr && v(Ye) ? Ye.getTextContentSize() : 0;
                py(Ye, Tn).forEach((Pe) => rn.add(Pe));
              }
              rn.size > 0 && (g([...rn]), re = !0);
            }
          }
          re || g((ye) => ye.length === 0 ? ye : []), Le || p(null), !K.has("collaboration") && E(ge) && y(!1);
        });
      }),
      a.registerCommand(
        gy,
        () => {
          const I = window.getSelection();
          return I !== null && I.removeAllRanges(), y(!0), !0;
        },
        Di
      )
    );
  }, [a, u]);
  const ne = () => {
    a.dispatchCommand(gy, void 0);
  };
  return /* @__PURE__ */ Qe(Li, { children: [
    m && Ni(
      /* @__PURE__ */ P(
        Rq,
        {
          editor: a,
          cancelAddComment: S,
          submitAddComment: $
        }
      ),
      document.body
    ),
    d != null && !m && Ni(
      /* @__PURE__ */ P(
        Oq,
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
        qq,
        {
          comments: l,
          submitAddComment: $,
          deleteCommentOrThread: F,
          activeIDs: h,
          markNodeMap: u,
          displayIndex: f
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function Kq() {
  const e = te(void 0), t = Me((n) => {
    e.current = n;
  }, []);
  return [e, t];
}
function Uq(e, t) {
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
function Bq(e, t) {
  H(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (n) => {
      Uq(n, t);
    };
  }, [t, e]);
}
const OD = hi(function(t, n) {
  const r = te(null), i = te(!0), s = te(null), [o, a] = Ae(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: f, ...d } = t, { logger: p, options: { isReadonly: h, view: g } = {} } = t, m = (h ?? !1) || Xo(g), [y, k] = Kq();
  Bq(d, y), H(() => {
    if (process.env.NODE_ENV !== "production") {
      const S = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(S), p || console.warn(S);
    }
  }, [p]), Lc(n, () => ({
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
    setTransientInput(S) {
      r.current?.setTransientInput(S);
    },
    setUsj(S) {
      r.current?.setUsj(S);
    },
    applyUpdate(S, F) {
      r.current?.applyUpdate(S, F);
    },
    replaceEmbedUpdate(S, F) {
      return r.current?.replaceEmbedUpdate(S, F);
    },
    getSelection() {
      return r.current?.getSelection();
    },
    setSelection(S) {
      r.current?.setSelection(S);
    },
    setAnnotation(S, F, $, ne, fe) {
      typeof ne == "function" || ne === void 0 ? r.current?.setAnnotation(S, F, $, ne, fe) : r.current?.setAnnotation(S, F, $, ne);
    },
    removeAnnotation(S, F) {
      r.current?.removeAnnotation(S, F);
    },
    getAnnotationRanges(S, F) {
      return r.current?.getAnnotationRanges(S, F) ?? [];
    },
    formatPara(S) {
      r.current?.formatPara(S);
    },
    getElementByKey(S) {
      return r.current?.getElementByKey(S);
    },
    removeCharacterMarker(S) {
      return r.current?.removeCharacterMarker(S) ?? !1;
    },
    replaceCharacterMarker(S, F) {
      return r.current?.replaceCharacterMarker(S, F) ?? !1;
    },
    extendCharacterMarker(S, F) {
      return r.current?.extendCharacterMarker(S, F) ?? !1;
    },
    insertMarker(S) {
      return r.current?.insertMarker(S);
    },
    getMarkerMenuContext() {
      return r.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(S, F) {
      return r.current?.applyMarkerMenuSelection(S, F);
    },
    splitParagraphWithMarker(S) {
      r.current?.splitParagraphWithMarker(S);
    },
    commitTypedMarker(S, F) {
      return r.current?.commitTypedMarker(S, F) ?? !1;
    },
    commitTypedCloser(S) {
      return r.current?.commitTypedCloser(S) ?? !1;
    },
    insertNote(S, F, $) {
      r.current?.insertNote(S, F, $);
    },
    selectNote(S) {
      r.current?.selectNote(S);
    },
    selectAfterNote(S) {
      r.current?.selectAfterNote(S);
    },
    selectNoteTextOffset(S, F, $) {
      r.current?.selectNoteTextOffset(S, F, $);
    },
    getNoteOps(S) {
      return r.current?.getNoteOps(S);
    },
    getOpsAfterNote(S) {
      return r.current?.getOpsAfterNote(S);
    },
    takeOpsAfterNote(S) {
      return r.current?.takeOpsAfterNote(S);
    },
    getNoteIndex(S) {
      return r.current?.getNoteIndex(S);
    },
    getNoteKey(S) {
      return r.current?.getNoteKey(S);
    },
    highlightNote(S) {
      r.current?.highlightNote(S);
    },
    setComments(S) {
      y.current?.setComments(S), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const x = Me(
    (S, F, $, ne) => {
      if (!u) return;
      const fe = y.current?.getComments();
      u(S, fe, F, $, ne);
    },
    [y, u]
  ), _ = Me(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const S = y.current?.getComments();
    l(S);
  }, [y, i, l]);
  return H(() => (a(r.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ P(YS, { children: /* @__PURE__ */ Qe(KC, { ref: r, onUsjChange: x, ...d, children: [
    /* @__PURE__ */ P(
      Dq,
      {
        setCommentStore: k,
        onChange: _,
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
function Fq(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function zq(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const jq = /^[#\w().,%/\s-]+$/;
function Rr(e) {
  return e != null;
}
const Vq = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, Wq = {
  left: "right",
  right: "left"
}, Hq = "var(--usj-font-fallback, serif)";
function HC(e, t) {
  const n = [e];
  return t && t !== e && n.push(t), `font-family: ${n.map((i) => `"${Fq(i)}"`).join(", ")}, ${Hq}`;
}
const zf = ".editor-input.usfm", Gq = /^[\w.#[\]="':()>+~*,\s-]+$/;
function Jq(e) {
  return Gq.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${zf}".`
  ), zf);
}
function Yq(e, t, n, r, i) {
  const s = [];
  if (t.fontName && s.push(HC(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (jq.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Rr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Rr(t.firstLineIndent) && s.push(`text-indent: ${wi(t.firstLineIndent * 20 * n)}vw`), Rr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${r ? "right" : "left"}: ${wi(t.leftMargin * 20 * n)}vw`), Rr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${r ? "left" : "right"}: ${wi(t.rightMargin * 20 * n)}vw`
  ), Rr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${wi(t.spaceBefore * n)}pt`), Rr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${wi(t.spaceAfter * n)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = Vq[r ? Wq[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const yy = { c: 150, ca: 133, cp: 150 };
function by(e, t) {
  return e && Rr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function Xq(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Rr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const r = by(e.markers.c, yy.c);
  return ["ca", "cp"].map((i) => {
    const s = by(
      e.markers[i],
      yy[i]
    ), o = wi(s * 100 / r);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function $D(e, t = {}) {
  const { zoom: n = 1, rtl: r = !1, containerSelector: i = zf } = t, s = Jq(i), o = [], a = [];
  e.defaultFont && a.push(HC(e.defaultFont)), Rr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${wi(e.defaultFontSize * n)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = Yq(c, l, n, r, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${zq(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...Xq(e, s)), o.join(`
`);
}
export {
  Uk as BLOCK_VERSE_VIEW_MODE,
  C as CategoryType,
  ND as Editorial,
  Bo as GENERATOR_NOTE_CALLER,
  Uy as HIDDEN_NOTE_CALLER,
  OD as Marginal,
  T as MarkerType,
  Kk as PARAGRAPH_STRUCTURE_VIEW_MODE,
  np as STANDARD_VIEW_MODE,
  uc as defaultStyleInfo,
  wD as directionToNames,
  OP as filterAndRankItems,
  $D as generateUsjCss,
  AD as getDefaultViewMode,
  il as getDefaultViewOptions,
  qR as getEnterMenuItems,
  LR as getMarkerMenuItems,
  PD as getViewMode,
  sp as getViewOptions,
  Xo as isBlockVerseLayout,
  Zr as isInsertEmbedOpOfType,
  PA as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
