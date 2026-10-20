import { jsx as P, jsxs as tt, Fragment as Ii } from "react/jsx-runtime";
import { useEffect as G, forwardRef as pi, useState as Re, useRef as re, useCallback as Ae, useMemo as ft, memo as bS, createContext as vy, useContext as Cy, Children as kS, isValidElement as xS, cloneElement as TS, useLayoutEffect as Xs, useImperativeHandle as Uc } from "react";
import { assertSafeKey as vt, isValidBookCode as vS, MARKER_OBJECT_PROPS as CS, USJ_VERSION as ir, USJ_TYPE as sr, indexesFromUsjJsonPath as Ln, isUsjTextContentLocation as Lr, usjJsonPathFromIndexes as Rt, isUsjPropertyValueLocation as Lo, isUsjClosingMarkerLocation as Li, isUsjClosingAttributeMarkerLocation as qo, isUsjAttributeKeyLocation as Do, isUsjAttributeMarkerLocation as Bc, isUsjMarkerLocation as Qf, getUsjDocumentLocationTypeName as SS, EMPTY_USJ as Sy } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as bt, $parseSerializedNode as qr, createCommand as Fc, DecoratorNode as ca, ElementNode as dr, isHTMLElement as Xi, TextNode as ot, $isRangeSelection as E, $getEditor as Lt, $getNodeByKey as Q, $isTextNode as v, createState as Qs, $getState as pe, $getSelection as w, $isNodeSelection as zc, ParagraphNode as Zf, $isRootNode as yn, HISTORIC_TAG as jc, $createTextNode as Ue, $setState as Xt, $isElementNode as A, $getCommonAncestor as _S, $isLineBreakNode as Qi, NODE_STATE_KEY as Dr, $isDecoratorNode as Tn, $addUpdateTag as Ft, $getRoot as _e, $createRangeSelection as Kr, $createPoint as tn, CLICK_COMMAND as Vc, COMMAND_PRIORITY_EDITOR as qi, DELETE_CHARACTER_COMMAND as Wc, COMMAND_PRIORITY_HIGH as Qe, DELETE_WORD_COMMAND as ed, DELETE_LINE_COMMAND as tc, COMMAND_PRIORITY_NORMAL as vr, CONTROLLED_TEXT_INSERTION_COMMAND as la, COMMAND_PRIORITY_CRITICAL as Xe, PASTE_COMMAND as nr, CUT_COMMAND as or, REMOVE_TEXT_COMMAND as _y, SELECTION_CHANGE_COMMAND as bn, isDOMNode as My, $getNearestNodeFromDOMNode as Zi, $setSelection as zn, $getCharacterOffsets as td, KEY_DOWN_COMMAND as Er, SELECTION_INSERT_CLIPBOARD_NODES_COMMAND as MS, HISTORY_MERGE_TAG as nd, DROP_COMMAND as rd, COPY_COMMAND as Ds, COMMAND_PRIORITY_LOW as zt, getDOMSelection as ES, isSelectionWithinEditor as Ey, $createRangeSelectionFromDom as Ay, isDOMTextNode as AS, BLUR_COMMAND as id, SKIP_DOM_SELECTION_TAG as Qn, CLEAR_HISTORY_COMMAND as PS, INSERT_PARAGRAPH_COMMAND as Ko, INSERT_LINE_BREAK_COMMAND as NS, SELECT_ALL_COMMAND as Py, $selectAll as wS, $isRootOrShadowRoot as sd, CAN_UNDO_COMMAND as OS, CAN_REDO_COMMAND as $S, DRAGSTART_COMMAND as RS, $createNodeSelection as Ny, $hasUpdateTag as IS, getDOMSelectionFromTarget as LS, $onUpdate as wy, KEY_ENTER_COMMAND as Oy, LineBreakNode as $y, $copyNode as qS, FOCUS_COMMAND as Ry, createEditor as od, isExactShortcutMatch as DS, getDOMTextNode as KS, KEY_ESCAPE_COMMAND as Iy, UNDO_COMMAND as Ly, REDO_COMMAND as qy, CLEAR_EDITOR_COMMAND as US } from "lexical";
import { addClassNamesToElement as So, removeClassNamesFromElement as Ba, $findMatchingParent as nt, $dfsIterator as Hc, $dfs as es, mergeRegister as it, registerNestedElementResolver as ad, $unwrapNode as Nu, IS_APPLE as Ks } from "@lexical/utils";
import { useLexicalNodeSelection as BS } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Zn } from "fast-equals";
import As from "quill-delta";
import { useLexicalComposerContext as Se } from "@lexical/react/LexicalComposerContext";
import { graphemeSegments as FS } from "unicode-segmenter/grapheme";
import { copyToClipboard as zS, $getLexicalContent as jS } from "@lexical/clipboard";
import { TreeView as VS } from "@lexical/react/LexicalTreeView";
import * as WS from "react-dom";
import { createPortal as Ni } from "react-dom";
import { LexicalComposer as Dy } from "@lexical/react/LexicalComposer";
import { ContentEditable as Ky } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Uy } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as By } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Fy } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as HS } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as GS, createDOMRange as JS, createRectsFromDOMRange as YS } from "@lexical/selection";
import { autoUpdate as XS, computePosition as QS, shift as ZS, flip as e_ } from "@floating-ui/dom";
import { $generateNodesFromDOM as t_ } from "@lexical/html";
import { AutoFocusPlugin as n_ } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as r_ } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as zy, LexicalCollaboration as i_ } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as s_ } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as o_ } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as a_, $isRootTextContentEmpty as c_ } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as l_ } from "@lexical/yjs";
import { Array as Oh, Map as $h, YArrayEvent as u_ } from "yjs";
const Fl = (e) => bt(qr(e)), f_ = {
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
function cd(e) {
  return f_[e];
}
const q = " ", Uo = "​", $t = q, ld = `${q}|`, jn = "p", Bo = "+", jy = "-", hi = "immutable-note-caller", Vy = "immutable-verse", nc = "chapter", wu = "verse", Rh = "invalid", d_ = "text-spacing", p_ = "formatted-font", h_ = "marker-", ua = "external-usj-mutation", g_ = "selection-change", Oi = "cursor-change", ud = Fc("APP_PLACED_CARET_COMMAND"), Ou = "annotation-change", Fa = "typed-mark-wrap", fd = "delta-change", Wy = "marker-settle", m_ = [
  ua,
  g_,
  Oi,
  Ou,
  fd
], Hy = 2, Di = "zmsc-s", $s = "zmsc-e", y_ = [Di, $s], b_ = [
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
  $s
], Gy = 1, dd = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], k_ = dd.filter((e) => e !== "sid" && e !== "eid");
class ar extends ca {
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
    return new ar(n, r, i, s, a, o);
  }
  static importJSON(t) {
    return Yy().updateFromJSON(t);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (b_.includes(t) || t.startsWith("z") || (n?.includes(t) ?? !1));
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
      version: Gy
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Jy(e) {
  return y_.includes(e);
}
function Yy(e, t, n, r, i) {
  return bt(new ar(e, t, n, r, void 0, i));
}
function ze(e) {
  return e instanceof ar;
}
const pd = "f", x_ = [
  // Footnote
  pd,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function wa(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const T_ = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Xy = 1;
class Ze extends dr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = pd, n, r = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = n ?? (wa(t) === "crossref" ? jy : Bo), this.__isCollapsed = r, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: n, __caller: r, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Ze(n, r, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => C_(t) ? {
        conversion: v_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return hd().updateFromJSON(t);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (x_.includes(t) || (n?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", wa(this.__marker)), t;
  }
  updateDOM(t, n) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (n.setAttribute("data-marker", this.__marker), n.classList.remove(`usfm_${t.__marker}`), n.classList.add(`usfm_${this.__marker}`), n.setAttribute("data-note-kind", wa(this.__marker))), t.__caller !== this.__caller && n.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Xi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), n.setAttribute("data-caller", this.getCaller()), n.setAttribute("data-note-kind", wa(this.getMarker()))), { element: n };
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
      version: Xy
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
function v_(e) {
  const t = e.getAttribute("data-marker") ?? "f", n = e.getAttribute("data-caller") ?? "", r = e.classList.contains("collapsed");
  return { node: hd(t, n, r) };
}
function hd(e, t, n, r, i) {
  return bt(new Ze(e, t, n, r, i));
}
function C_(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Ze.isValidMarker(t) && e.classList.contains(Ze.getType());
}
function L(e) {
  return e instanceof Ze;
}
function S_(e) {
  return e?.type === Ze.getType();
}
var C;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(C || (C = {}));
var T;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(T || (T = {}));
const $u = {
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
}, Ih = {
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
function Cr(e) {
  const t = Object.hasOwn($u, e) ? $u[e] : void 0, n = Object.hasOwn(Ih, e) ? Ih[e] : void 0;
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
const fa = "￼", Qy = "v", Zy = "c", vi = "fig", Lh = "tr", Ru = "esb", eb = "esbe", qh = "periph", Dh = "alt", Kh = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, __ = {
  "": "start",
  c: "center",
  r: "end"
};
function Uh(e) {
  const [, , t, n] = e;
  return n ? /^[1-5]$/.test(t) && /^[2-5]$/.test(n) && Number(n) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Bh(e) {
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
const M_ = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function E_(e) {
  let t = "", n = !1, r = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (n || (i = t.length, t += " "), n = !0) : !n && o === Uo && s + 1 < e.length && Bh(e[s + 1]) || (Bh(o) ? (n || (i = t.length, t += o), n = !0) : M_.test(o) && o === r || (t += o, n = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), r = o;
  }
  return t;
}
function A_(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function P_(e, t) {
  let n = t;
  for (; n < e.length; ) {
    const r = e[n];
    if (r === "\\" || r === "|" || r === fa)
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
function N_(e, t, n) {
  if (!n || !/^[\s\u00A0\u200B]*$/.test(e.slice(0, t)))
    return !1;
  const r = e[t + 1];
  return r === void 0 || r === "\\" || /[\s\u00A0\u200B]/.test(r);
}
const w_ = /^(?:qt[1-5]?|ts)-[se]$/;
function gd(e) {
  return w_.test(e) || Jy(e);
}
function zl(e, t) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  const r = n;
  for (; n < e.length && e[n] !== fa && !/[\s\u00A0\u200B\\]/.test(e[n]); )
    n++;
  const i = e.slice(r, n);
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  return { word: i, next: n };
}
function O_(e, t) {
  const n = [];
  let r = 0;
  for (let i = 0; i < e.length; i++) {
    if (e[i] !== fa)
      continue;
    const s = t[r];
    r++, (s === "note" || s === "verse") && n.push(i);
  }
  return n;
}
function $_(e, t, n, r, i) {
  const s = [];
  let o = 0;
  const a = O_(e, r);
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
      c < a.length && (S = Math.min(S, a[c])), f(E_(e.slice(o, S))), o = S;
      continue;
    }
    const d = o, { name: p, next: h } = P_(e, o + 1);
    o = h;
    const g = () => {
      for (; o < e.length && /[\s\u00A0\u200B]/.test(e[o]); )
        o++;
    };
    if (p === "") {
      if (N_(e, d, i)) {
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
    if (p === Qy) {
      const { word: x, next: S } = zl(e, o);
      o = S, s.push({ kind: "verse", number: x });
      continue;
    }
    if (p === Zy) {
      const { word: x, next: S } = zl(e, o);
      o = S, l = void 0, s.push({ kind: "chapter", number: x });
      continue;
    }
    const m = p.startsWith("+"), y = m ? p.slice(1) : p, k = t(y)?.type;
    if (k === T.Note || k === void 0 && Ze.isValidMarker(p)) {
      const { word: x, next: S } = zl(e, o);
      o = S, l = p, s.push({ kind: "note", marker: p, caller: x });
      continue;
    }
    if (k === T.Milestone || k === void 0 && gd(p)) {
      const x = F_(e, d, p, o);
      if (x)
        s.push(x.token), x.ejectedText && u(x.ejectedText), o = x.next;
      else {
        const S = e.indexOf("\\", o), _ = S === -1 ? e.length : S;
        u(e.slice(d, _)), o = _;
      }
      continue;
    }
    k === T.Paragraph ? (g(), s.push({ kind: "para", marker: p })) : k === T.Character ? (g(), s.push({ kind: "charOpen", marker: y, isNested: m })) : rc(y) ? (g(), rc(y)?.shape === "para" ? s.push({ kind: "para", marker: p }) : s.push({ kind: "charOpen", marker: y, isNested: m })) : (g(), !(n || l !== void 0) || p === Ru || p === eb ? s.push({ kind: "para", marker: p }) : s.push({ kind: "charOpen", marker: y, isNested: m }));
  }
  return s;
}
const Fh = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
}, R_ = {
  chapter: ["ca", "cp"],
  verse: ["va", "vp"],
  note: ["cat"],
  sidebar: ["cat"]
};
function rc(e) {
  return Object.hasOwn(Fh, e) ? Fh[e] : void 0;
}
function I_(e) {
  return rc(e) !== void 0;
}
const L_ = /([-\w]+)\s*=\s*"(.*?)"/g, q_ = /[\s\u200B]*[\n\r][\s\u200B]*/g, tb = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Zs(e) {
  return tb[e];
}
const D_ = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function K_(e, t) {
  let n = 0;
  for (const r of t) {
    const i = r.index;
    if (i === void 0 || e.slice(n, i).trim() !== "")
      return !1;
    n = i + r[0].length;
  }
  return e.slice(n).trim() === "";
}
function Fo(e, t, n = tb[t]) {
  const r = e.replace(q_, " "), i = /* @__PURE__ */ Object.create(null), s = [...r.matchAll(L_)];
  if (s.length > 0) {
    if (!K_(r, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      D_.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (r.trim() && n)
    return { [n]: r };
}
function da(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function U_(e) {
  const t = Gc(e)[0], n = typeof t == "object" && "content" in t ? t.content : void 0;
  return n ? n.some((r, i) => typeof r != "object" || r.type !== "ms" || typeof n[i + 1] != "string" ? !1 : n.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function B_(e, t, n) {
  let r = t;
  for (; r < e.length && /[\s\u00A0\u200B]/.test(e[r]); )
    r++;
  if (e[r] !== "|")
    return;
  const i = e.indexOf("\\", r);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = Fo(e.slice(r + 1, i), n, da(n));
  if (s)
    return { attributes: s, next: i + 2 };
}
function F_(e, t, n, r) {
  const i = e.indexOf("\\", r);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(r, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Fo(s.slice(o + 1), n, da(n)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = B_(e, i + 2, n);
  return l ? {
    token: {
      kind: "milestone",
      marker: n,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: n, attributes: a }, next: i + 2 };
}
function kr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", q);
}
function Xr(e) {
  return e.content || (e.content = []), e.content;
}
function Gc(e, t) {
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
      i = { type: "para", marker: jn, content: [] }, d().push(i);
    }
    return Xr(i);
  }, g = (me) => {
    const F = h();
    typeof me == "string" && typeof F[F.length - 1] == "string" ? F[F.length - 1] = F[F.length - 1] + me : F.push(me);
  }, m = (me) => {
    for (let F = me; F < o.length; F += 1) {
      const le = o[F].object;
      le.closed = "false";
    }
  }, y = () => {
    m(0), o.length = 0;
  }, k = (me) => {
    s && (o.length > a && (m(a), o.length = a), a = 0, me || (s.closed = "false"), s = void 0);
  }, x = () => {
    c = void 0, l = void 0;
  }, S = (me, F, le) => {
    y();
    const [, Me, Ye, ut] = le, xt = {
      type: "table:cell",
      marker: ut ? F.slice(0, F.indexOf("-")) : F,
      align: __[Me],
      content: []
    };
    ut && (xt.colspan = String(Number(ut) + 1 - Number(Ye))), Xr(me).push(xt), i = xt;
  }, _ = (me) => {
    u && (me || (u.closed = "false"), u = void 0);
  }, U = () => {
    f = void 0;
  };
  let B, V = -1;
  const ne = (me) => {
    B = me, V = -1;
  };
  let se = "", W;
  const he = () => {
    se && g(kr(se)), se = "";
  }, be = (me = !1) => {
    B?.type === "sidebar" ? se = "" : me && se.endsWith(`
`) && (se = se.slice(0, -1)), B = void 0, he();
  }, He = () => {
    if (!W)
      return;
    const me = { type: "char", marker: W.marker, content: [] };
    W.value && (me.content = [kr(W.value)]), h().push(me), o.push({ object: me }), W = void 0;
  }, $ = (me, F) => {
    p = !1, x(), y(), k(!1), i = { type: "para", marker: me, content: [] }, F && (i.content = [kr(F)]), d().push(i);
  }, Z = () => {
    W && ($(W.marker, W.value), W = void 0);
  };
  let Te;
  const Pe = (me) => {
    if (!Te)
      return;
    let { value: F } = Te;
    Te = void 0, me && F.endsWith(`
`) && (F = F.slice(0, -1));
    const le = F.indexOf("|"), Me = le >= 0 ? Fo(F.slice(le + 1), qh) : void 0, Ye = le >= 0 ? F.slice(0, le) : F, ut = le >= 0 && (!Me || !!Ye && !!Me[Dh]), xt = ut ? void 0 : Me, Sn = ut ? F : Ye, ie = {
      type: "periph",
      ...Sn ? { [Dh]: kr(Sn) } : {},
      ...xt
    };
    ie.content = [], d().push(ie), f = ie, i = void 0;
  };
  let Oe;
  const Gt = () => {
    if (Oe) {
      if (Oe.shape === "para")
        $(vi, Oe.value);
      else {
        const me = { type: "char", marker: vi, content: [] };
        Oe.value && (me.content = [kr(Oe.value)]), h().push(me), o.push({ object: me });
      }
      Oe = void 0;
    }
  }, Cn = $_(e, t?.getMarker ?? Cr, r, t?.placeholders ?? [], !r && t?.opensNamelessParagraph === !0);
  for (let me = 0; me < Cn.length; me++) {
    const F = Cn[me];
    if (W) {
      if (F.kind === "text") {
        W.value += F.text;
        continue;
      }
      if (W.shape === "char" && F.kind === "end" && F.marker.replace(/^\+/, "") === W.marker) {
        if (W.value.trim() === "") {
          h().push({ type: "char", marker: W.marker, content: [] }), W = void 0, be();
          continue;
        }
        Object.assign(W.target, {
          [W.attrName]: kr(W.value.trim())
        });
        const le = W.marker;
        if (W = void 0, le === "ca") {
          const Me = Cn[me + 1];
          Me?.kind === "text" && /^[\s\u200B]*$/.test(Me.text) && me++;
        }
        continue;
      }
      if (W.shape === "para" && (F.kind === "para" || F.kind === "chapter")) {
        const le = W.value.replace(/[\s\u200B]+$/, "");
        le === "" ? ($(W.marker), W = void 0) : (Object.assign(W.target, { [W.attrName]: kr(le) }), W = void 0);
      } else {
        B = void 0, (F.kind === "para" || F.kind === "chapter") && W.value.endsWith(`
`) && (W.value = W.value.slice(0, -1)), W.shape === "para" ? Z() : He(), me--;
        continue;
      }
    }
    if (Te) {
      if (F.kind === "text" || F.kind === "optbreak") {
        Te.value += F.kind === "text" ? F.text : "//";
        continue;
      }
      Pe(F.kind === "para" || F.kind === "chapter"), me--;
      continue;
    }
    if (Oe) {
      if (F.kind === "text" || F.kind === "optbreak") {
        Oe.value += F.kind === "text" ? F.text : "//";
        continue;
      }
      if (F.kind === "end" && F.marker.replace(/^\+/, "") === vi) {
        const le = Oe.value.indexOf("|"), Me = le >= 0 ? Fo(Oe.value.slice(le + 1), vi) : void 0;
        if (Me) {
          const Ye = {};
          for (const [Sn, ie] of Object.entries(Me))
            Ye[Sn === "src" ? "file" : Sn] = ie;
          const ut = {
            type: "figure",
            marker: vi,
            ...Ye
          }, xt = Oe.value.slice(0, le);
          xt && (ut.content = [kr(xt)]), g(ut), Oe = void 0;
          continue;
        }
      }
      Gt(), me--;
      continue;
    }
    if (B)
      if (F.kind === "text") {
        if (F.text.includes(`
`) && /^[\s\u200B]*$/.test(F.text)) {
          se += F.text;
          continue;
        }
        be();
      } else if (F.kind === "charOpen" || F.kind === "para") {
        const le = F.kind === "para" || !F.isNested ? rc(F.marker) : void 0, Me = R_[B.type]?.indexOf(F.marker) ?? -1;
        if (le && le.targetTypes.includes(B.type) && Me > V) {
          V = Me, se = "", W = {
            target: B,
            attrName: le.attrName,
            marker: F.marker,
            shape: le.shape,
            value: ""
          };
          continue;
        }
        be(F.kind === "para");
      } else
        be(F.kind === "chapter");
    if (!s && !r && (F.kind === "charOpen" && !F.isNested && F.marker === vi || F.kind === "para" && F.marker === vi)) {
      y(), Oe = { shape: F.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (F.kind) {
      case "text": {
        let le = F.text;
        if (!s && le.endsWith(`
`)) {
          const Me = Cn[me + 1];
          (Me === void 0 || Me.kind === "para" || Me.kind === "chapter") && (le = le.slice(0, -1));
        }
        le && g(kr(le));
        break;
      }
      case "para": {
        const le = !s && !r;
        if (le && F.marker === Lh) {
          y(), c || (c = { type: "table", content: [] }, d().push(c)), l = { type: "table:row", marker: Lh, content: [] }, Xr(c).push(l), i = l, p = !1;
          break;
        }
        if (le && l) {
          const Me = Kh.exec(F.marker);
          if (Me && Uh(Me)) {
            S(l, F.marker, Me);
            break;
          }
        }
        if (x(), !r && F.marker === Ru) {
          y(), k(!1), _(!1);
          const Me = {
            type: "sidebar",
            marker: Ru,
            content: []
          };
          d().push(Me), u = Me, i = void 0, ne(u), p = !1;
          break;
        }
        if (F.marker === eb && u) {
          y(), k(!1), _(!0), i = void 0;
          break;
        }
        if (!r && F.marker === qh) {
          y(), k(!1), _(!1), U(), Te = { value: "" }, i = void 0, p = !1;
          break;
        }
        $(F.marker);
        break;
      }
      case "verse": {
        k(!1);
        const le = { type: "verse", marker: Qy, number: F.number };
        g(le), ne(le);
        break;
      }
      case "chapter": {
        y(), k(!1), x(), _(!1), U(), i = void 0;
        const le = {
          type: "chapter",
          marker: Zy,
          number: F.number
        };
        n.push(le), ne(le), p = !0;
        break;
      }
      case "note": {
        k(!1);
        const le = h();
        s = { type: "note", marker: F.marker, caller: F.caller, content: [] }, a = o.length, le.push(s), ne(s);
        break;
      }
      case "charOpen": {
        if (!s && !r && l && !F.isNested) {
          const Ye = Kh.exec(F.marker);
          if (Ye && Uh(Ye)) {
            S(l, F.marker, Ye);
            break;
          }
        }
        if (!F.isNested) {
          const Ye = s ? a : 0;
          m(Ye), o.length = Ye;
        }
        const le = h(), Me = { type: "char", marker: F.marker, content: [] };
        le.push(Me), o.push({ object: Me });
        break;
      }
      case "end": {
        const le = F.marker.replace(/^\+/, ""), Me = s ? a : 0, Ye = o.findLastIndex((ut, xt) => xt >= Me && ut.object.marker === le);
        Ye >= 0 ? (z_(o[Ye].object), m(Ye + 1), o.length = Ye) : s && s.marker === le ? k(!0) : (m(Me), o.length = Me, g({ type: "unmatched", marker: `${F.marker}*` }));
        break;
      }
      case "milestone":
        g({ type: "ms", marker: F.marker, ...F.attributes });
        break;
      case "optbreak":
        g({ type: "optbreak" });
        break;
      case "noteEndingPlaceholder":
        k(!1), g(fa);
        break;
    }
  }
  if (Te && Pe(!0), Oe && Gt(), W)
    if (W.shape === "para") {
      const me = W.value.replace(/[\s\u200B]+$/, "");
      me === "" ? $(W.marker) : Object.assign(W.target, { [W.attrName]: kr(me) }), W = void 0;
    } else
      W.value.endsWith(`
`) && (W.value = W.value.slice(0, -1)), He();
  y(), k(!1), _(!1);
  const Le = (me) => {
    for (const F of me)
      typeof F != "string" && F.content && (Le(F.content), F.content.length === 0 && delete F.content);
  };
  return Le(n), n;
}
function z_(e) {
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
function Je(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function at(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Vn(e, t) {
  let n = Je(e);
  return t && (n += `${q}${t}`), n += " ", n;
}
function Et(e) {
  return " " + e + q;
}
function zh(e, t) {
  return e === t || (e === " " || e === q) && (t === " " || t === q);
}
function Jc(e, t) {
  const n = Et(t);
  let r = 0;
  for (; r < e.length && r < n.length && zh(e[r], n[r]); )
    r += 1;
  let i = 0;
  for (; i < e.length - r && i < n.length - r && zh(e[e.length - 1 - i], n[n.length - 1 - i]); )
    i += 1;
  return { start: r, end: e.length - i, missing: r + i < n.length };
}
function md(e, t) {
  const { start: n, end: r } = Jc(e, t);
  return e.slice(n, r).replaceAll(q, " ");
}
const j_ = 1;
class Hn extends ot {
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
    return new Hn(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return qt().updateFromJSON(t);
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
      version: j_
    };
  }
}
function qt(e, t, n) {
  return bt(new Hn(e, t, void 0, n));
}
function N(e) {
  return e instanceof Hn;
}
function eo(e) {
  return e?.type === Hn.getType();
}
function pr(e) {
  return e.getTextContent() === Ei(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function V_(e) {
  e.setTextContent(Ei(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Ei(e, t, n = !1) {
  return t === "closing" ? at(e, n) : t === "selfClosing" ? at("") : Je(e, n);
}
const Ot = "internal-comment", W_ = [Ot], nb = Object.freeze({}), Iu = Object.freeze({}), Lu = Object.freeze({}), qu = Object.freeze({}), Du = Object.freeze({}), H_ = 1, Si = /* @__PURE__ */ new Map(), vs = /* @__PURE__ */ new Map(), _i = /* @__PURE__ */ new Map(), Mi = /* @__PURE__ */ new Map(), zo = /* @__PURE__ */ new WeakMap(), jo = /* @__PURE__ */ new WeakMap();
function G_(e) {
  return zo.set(e, []), jo.set(e, /* @__PURE__ */ new Map()), () => {
    zo.delete(e), jo.delete(e);
  };
}
function J_(e) {
  const t = zo.get(e);
  return t ? (zo.set(e, []), t) : [];
}
const ic = /* @__PURE__ */ new WeakMap();
function za(e, t) {
  return JSON.stringify([e, t]);
}
function jh(e, t, n, r) {
  let i = ic.get(e);
  r ? (i || ic.set(e, i = /* @__PURE__ */ new Set()), i.add(za(t, n))) : (i?.delete(za(t, n)), jo.get(e)?.delete(za(t, n)));
}
function Y_(e) {
  ic.delete(e), jo.get(e)?.clear();
}
function Oa(e, t, n, r) {
  const i = e.get(t), s = i?.[n];
  if (!i || !s || !(r in s))
    return;
  const o = xr(s, r), a = Object.keys(o).length > 0 ? { ...i, [n]: o } : xr(i, n);
  Object.keys(a).length > 0 ? e.set(t, a) : e.delete(t);
}
function X_(e, t, n) {
  Oa(Si, e, t, n), Oa(vs, e, t, n), Oa(_i, e, t, n), Oa(Mi, e, t, n);
}
class mt extends dr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = nb, n, r, i, s, o) {
    super(o), this.__typedIDs = $a(t), this.__typedOnClicks = jl(n), this.__typedOnRemoves = Vl(r), this.__typedOnMouseEnters = Wl(i), this.__typedOnMouseLeaves = Hl(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const n = $a(t.__typedIDs), r = jl(t.__typedOnClicks), i = Vl(t.__typedOnRemoves), s = Wl(t.__typedOnMouseEnters), o = Hl(t.__typedOnMouseLeaves);
    return new mt(n, r, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return W_.includes(t);
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
      version: H_
    };
  }
  createDOM(t, n) {
    const r = document.createElement("mark");
    So(r, ...rb(t.theme, this.__typedIDs));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = wi(r.theme.typedMark, s), f = wi(r.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && So(n, u) : l === 0 && Ba(n, u), c === 1 ? l === 2 && So(n, f) : l === 1 && Ba(n, f));
      const d = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || Ba(n, wi("annotationId", h));
      for (const h of a)
        d.has(h) || So(n, wi("annotationId", h));
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
    return ae(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const n = this.getWritable(), r = $a(n.__typedIDs);
    n.__typedIDs = $a(t), n.dispatchRemovedIDs(r, n.__typedIDs, "removed"), n.pruneTypedOnClicks(), n.pruneTypedOnRemoves(), n.pruneTypedOnMouseEnters(), n.pruneTypedOnMouseLeaves(), n.syncTypedOnClicksToRegistry(), n.syncTypedOnRemovesToRegistry(), n.syncTypedOnMouseEntersToRegistry(), n.syncTypedOnMouseLeavesToRegistry();
    const i = n.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Ku(i), i;
  }
  setTypedOnClicks(t) {
    const n = this.getWritable();
    return n.__typedOnClicks = jl(t), n.pruneTypedOnClicks(), n.syncTypedOnClicksToRegistry(), n;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return ae(t) ? Si.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const n = this.getWritable();
    return n.__typedOnRemoves = Vl(t), n.pruneTypedOnRemoves(), n.syncTypedOnRemovesToRegistry(), n;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return ae(t) ? vs.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const n = this.getWritable();
    return n.__typedOnMouseEnters = Wl(t), n.pruneTypedOnMouseEnters(), n.syncTypedOnMouseEntersToRegistry(), n;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return ae(t) ? _i.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const n = this.getWritable();
    return n.__typedOnMouseLeaves = Hl(t), n.pruneTypedOnMouseLeaves(), n.syncTypedOnMouseLeavesToRegistry(), n;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return ae(t) ? Mi.get(t.getKey()) ?? {} : {};
  }
  addID(t, n, r, i, s, o) {
    const a = this.getWritable();
    if (!ae(a))
      return;
    vt(t), vt(n);
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
    if (!ae(r))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Ku(s);
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
    n.__suppressOnRemoveCallbacks ? n.__suppressOnRemoveCallbacks = void 0 : n.dispatchOnRemoveForTypedIDs(r, "destroyed"), Si.delete(n.getKey()), vs.delete(n.getKey()), _i.delete(n.getKey()), Mi.delete(n.getKey()), n.__typedOnClicks = void 0, n.__typedOnRemoves = void 0, n.__typedOnMouseEnters = void 0, n.__typedOnMouseLeaves = void 0, super.remove.call(n, t);
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Iu) {
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
    vt(t), vt(n);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, n) {
    if (!this.__typedOnClicks)
      return;
    const r = this.__typedOnClicks[t];
    if (!r)
      return;
    const i = xr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = xr(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Iu) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Lu) {
      const t = vs.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      vs.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    vs.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, n, r) {
    vt(t), vt(n);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, n) {
    if (!this.__typedOnRemoves)
      return;
    const r = this.__typedOnRemoves[t];
    if (!r)
      return;
    const i = xr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = xr(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Lu) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === qu) {
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
    vt(t), vt(n);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, n) {
    if (!this.__typedOnMouseEnters)
      return;
    const r = this.__typedOnMouseEnters[t];
    if (!r)
      return;
    const i = xr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = xr(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === qu) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Du) {
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
    vt(t), vt(n);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, n) {
    if (!this.__typedOnMouseLeaves)
      return;
    const r = this.__typedOnMouseLeaves[t];
    if (!r)
      return;
    const i = xr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = xr(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Du) {
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
    const o = Lt(), a = za(t, n), c = jo.get(o);
    if (ic.get(o)?.has(a) || c?.get(a)?.has(this.getKey())) {
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
    const i = Q_(t, n);
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
    for (; ae(t) && Wh(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let n = this.getNextSibling();
    for (; ae(n) && Wh(this.getTypedIDs(), n.getTypedIDs()); )
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
    const n = Z_(this.getTypedOnClicks(), t);
    Object.keys(n).length !== 0 && this.setTypedOnClicks(n);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = e0(this.getTypedOnRemoves(), t);
    Object.keys(n).length !== 0 && this.setTypedOnRemoves(n);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = t0(this.getTypedOnMouseEnters(), t);
    Object.keys(n).length !== 0 && this.setTypedOnMouseEnters(n);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = n0(this.getTypedOnMouseLeaves(), t);
    Object.keys(n).length !== 0 && this.setTypedOnMouseLeaves(n);
  }
}
function $a(e = nb) {
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    if (vt(n), !Array.isArray(r)) {
      t[n] = [];
      continue;
    }
    const i = [];
    for (const s of r)
      vt(s), i.push(s);
    t[n] = i;
  }
  return t;
}
function jl(e) {
  if (!e || e === Iu)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    vt(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      vt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Vl(e) {
  if (!e || e === Lu)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    vt(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      vt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Wl(e) {
  if (!e || e === qu)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    vt(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      vt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Hl(e) {
  if (!e || e === Du)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    vt(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      vt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function xr(e, t) {
  const n = {};
  for (const [r, i] of Object.entries(e))
    r !== t && (n[r] = i);
  return n;
}
function Vh(e) {
  const t = {};
  for (const [n, r] of Object.entries(e))
    !r || r.length === 0 || (t[n] = [...r].sort());
  return t;
}
function Q_(e, t) {
  const n = [];
  for (const [r, i] of Object.entries(e)) {
    const s = new Set(t[r] ?? []);
    for (const o of i ?? [])
      s.has(o) || n.push([r, o]);
  }
  return n;
}
function Wh(e, t) {
  const n = Vh(e), r = Vh(t), i = Object.keys(n).sort(), s = Object.keys(r).sort();
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
function Z_(e, t) {
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
function e0(e, t) {
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
function t0(e, t) {
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
function n0(e, t) {
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
function wi(e, t) {
  return `${e}-${t}`;
}
function rb(e, t) {
  const n = [];
  for (const [r, i] of Object.entries(t)) {
    n.push(wi(e.typedMark, r)), i.length > 1 && n.push(wi(e.typedMarkOverlap, r));
    for (const s of i)
      n.push(wi("annotationId", s));
  }
  return n;
}
function Gl(e) {
  return `external-${e}`;
}
function Ki(e, t, n, r, i) {
  return bt(new mt(e, t, n, r, i));
}
function ae(e) {
  return e instanceof mt;
}
function Ui(e) {
  return e?.type === mt.getType();
}
function ib(e, t, n) {
  let r = 0;
  for (const i of n) {
    const s = Q(i);
    !ae(s) || !s.hasID(e, t) || (r++, s.deleteID(e, t), s.hasNoIDsForEveryType() && Ku(s));
  }
  return r;
}
function Ku(e) {
  const t = e.getChildren();
  let n = null;
  for (const r of t)
    n === null ? e.insertBefore(r) : n.insertAfter(r), n = r;
  e.remove();
}
function r0(e, t, n) {
  let r = e;
  for (; r !== null; ) {
    if (ae(r))
      return r.getTypedIDs()[t];
    if (v(r) && n === r.getTextContentSize()) {
      const i = r.getNextSibling();
      if (ae(i))
        return i.getTypedIDs()[t];
    }
    r = r.getParent();
  }
}
const Bi = Qs("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), oi = Qs("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ke = Qs("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Ar = "marker-trailing-space", sb = 1, i0 = "attribute-run";
function Jl(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Pr extends dr {
  __runKind;
  constructor(t, n) {
    super(n), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: n, __key: r } = t;
    return new Pr(n, r);
  }
  static importJSON(t) {
    return ob(t.runKind).updateFromJSON(t);
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
    t.classList.add(i0);
    const n = Jl(this.__runKind);
    return n !== void 0 && t.classList.add(n), t;
  }
  updateDOM(t, n) {
    if (t.__runKind !== this.__runKind) {
      const r = Jl(t.__runKind);
      r !== void 0 && n.classList.remove(r);
      const i = Jl(this.__runKind);
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
      version: sb
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
function ob(e) {
  return bt(new Pr(e));
}
function je(e) {
  return e instanceof Pr;
}
const ab = [
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
], cb = [
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
], s0 = [
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
  ...ab,
  ...cb
], lb = 1, o0 = ["type", "marker", "content"];
class We extends dr {
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
    return new We(n, r, i);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (s0.includes(t) || (n?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && ab.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && cb.includes(t);
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
    return We.isValidFootnoteMarker(t) || We.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => c0(t) ? {
        conversion: a0,
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
    return Hh(n, this.__marker, t), n.classList.add(this.__type), n;
  }
  updateDOM(t, n, r) {
    return t.__marker !== this.__marker && (n.classList.remove(`usfm_${t.__marker}`), Hh(n, this.__marker, r)), !1;
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
      version: lb
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
function Hh(e, t, n) {
  e.setAttribute("data-marker", t), n.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function a0(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Ur(t) };
}
function Ur(e, t) {
  return bt(new We(e, t));
}
function c0(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return We.isValidMarker(t) && e.classList.contains(We.getType());
}
function D(e) {
  return e instanceof We;
}
function ub(e) {
  return e?.type === We.getType();
}
const sc = "v", fb = 1, l0 = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Vt extends ot {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n, r, i, s, o, a) {
    super(n ?? t, a), this.__marker = sc, this.__number = t, this.__sid = r, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: n, __text: r, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Vt(n, r, i, s, o, a, c);
  }
  static importJSON(t) {
    return db().updateFromJSON(t);
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
    return n.setAttribute("data-marker", this.__marker), n.classList.add(wu, `usfm_${this.__marker}`), n.setAttribute("data-number", this.__number), n;
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
      version: fb
    };
  }
}
function db(e, t, n, r, i, s) {
  return bt(new Vt(e, t, n, r, i, s));
}
function $e(e) {
  return e instanceof Vt;
}
function yd(e) {
  return e?.type === Vt.getType();
}
const u0 = /* @__PURE__ */ new Set(["closed"]);
function er(e, t) {
  const n = Object.entries(e).filter(([r, i]) => i !== void 0 && !u0.has(r));
  return n.length === 0 ? "" : n.length === 1 && n[0][0] === t && n[0][1] !== "" ? `|${n[0][1]}` : `|${n.map(([r, i]) => `${r}="${i}"`).join(" ")}`;
}
function pb(e, t) {
  if (!t || t.length === 0)
    return e;
  const n = {};
  return t.forEach((r) => {
    Object.hasOwn(e, r) && (n[r] = e[r]);
  }), Object.entries(e).forEach(([r, i]) => {
    Object.hasOwn(n, r) || (n[r] = i);
  }), n;
}
function hb(e) {
  const t = Object.keys(e).filter((r) => !k_.includes(r)), n = [
    ...t.filter((r) => r === "sid"),
    ...t.filter((r) => r === "eid"),
    ...t.filter((r) => r !== "sid" && r !== "eid")
  ];
  return t.every((r, i) => r === n[i]) ? void 0 : t;
}
function gb(e, t, n, r) {
  return pb(
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
function Ao(e) {
  return e.getChildren().find((t) => N(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function f0(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((r) => r !== "closed") ? !1 : Ao(e) === void 0 && mb(e) === void 0;
}
function mb(e) {
  return e.getChildren().find((t) => v(t) && pe(t, ke) === "attribute");
}
function Vo(e, t) {
  return pa(e.getNextSibling(), t);
}
const d0 = /^[ \u00A0]+$/;
function bd(e) {
  if (pr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Je(e.getMarker(), e.getNested()), n = e.getTextContent();
  return n.startsWith(t) && d0.test(n.slice(t.length));
}
function pa(e, t) {
  let n, r, i, s;
  return je(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), N(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  bd(e) && (n = e, e = e.getNextSibling()), v(e) && pe(e, ke) === "attribute" && (r = e, e = e.getNextSibling()), N(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && pr(e) && (i = e), { opener: n, value: r, closer: i, wrapper: s };
}
function p0(e) {
  let t = e;
  for (; ae(t); )
    t = t.getChildren()[0];
  return t;
}
function At(e) {
  const t = e.getChildren();
  let n = 0;
  for (; n < t.length; ) {
    const i = t[n];
    if (!N(i) || i.getMarkerSyntax() !== "opening")
      break;
    n++;
  }
  const r = p0(t[n]);
  if (!(!v(r) || r.getType() !== ot.getType()))
    return r.getTextContent() === Et(e.getCaller()) || r.isUnmergeable() ? r : void 0;
}
function ha(e) {
  const t = At(e);
  return t ? pa(t.getNextSibling(), "cat") : {};
}
function gi(e) {
  const t = e.getFirstChild();
  if (!(!v(t) || N(t)) && pe(t, ke) !== "attribute")
    return t;
}
function yb(e) {
  const t = gi(e);
  return t ? pa(t.getNextSibling(), "ca") : {};
}
function bb(e) {
  const t = gi(e);
  if (!t)
    return;
  const n = pa(t.getNextSibling(), "ca");
  return n.wrapper ?? n.closer ?? t;
}
function kb(e) {
  const t = bb(e);
  return t ? pa(t.getNextSibling(), "cp") : {};
}
function xb(e) {
  const t = e.getParent();
  if (!D(t))
    return;
  const n = t.getMarker();
  if (!(n !== "va" && n !== "vp"))
    for (let r = t.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if ($e(r))
        return r;
      if (!(N(r) && (r.getMarker() === "va" || r.getMarker() === "vp") || v(r) && pe(r, ke) === "attribute" || D(r) && (r.getMarker() === "va" || r.getMarker() === "vp") || je(r)))
        return;
    }
}
function Yc(e) {
  let t, n, r, i, s = e.getNextSibling();
  return je(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), N(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  bd(s) && (t = s, s = s.getNextSibling()), v(s) && pe(s, ke) === "attribute" && (n = s, s = s.getNextSibling()), N(s) && s.getMarkerSyntax() === "selfClosing" && pr(s) && (r = s), { opening: t, attribute: n, closing: r, wrapper: i };
}
const oc = "c", Tb = 1, h0 = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class qn extends dr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n, r, i, s, o) {
    super(o), this.__marker = oc, this.__number = t, this.__sid = n, this.__altnumber = r, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: n, __sid: r, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new qn(n, r, i, s, o, a);
  }
  static importJSON(t) {
    return vb().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(nc, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: Tb
    };
  }
}
function vb(e, t, n, r, i) {
  return bt(new qn(e, t, n, r, i));
}
function Ne(e) {
  return e instanceof qn;
}
function g0(e) {
  return e?.type === qn.getType();
}
const m0 = ["type", "marker", "content"], Uu = "unknown", Cb = 1, y0 = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class ts extends dr {
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
      [Uu]: (t) => k0(t) ? {
        conversion: b0,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return kd().updateFromJSON(t);
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
    return y0.has(this.getTag());
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
    const t = document.createElement(Uu);
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
      version: Cb
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
    if (zc(n) && super.isSelected(n))
      return !0;
    if (n.isCollapsed())
      return !1;
    const r = n.getNodes();
    return this.getChildren().some((i) => r.some((s) => s.is(i)));
  }
}
function b0(e) {
  const t = e.getAttribute("data-tag") ?? "", n = e.getAttribute("data-marker") ?? "";
  return { node: kd(t, n) };
}
function kd(e, t, n) {
  return bt(new ts(e, t, n));
}
function k0(e) {
  return e?.tagName.toLowerCase() === Uu;
}
function rt(e) {
  return e instanceof ts;
}
const Sb = "table", Bu = "immutable-table", _b = 1, x0 = ["type", "marker", "content"];
class ns extends dr {
  __unknownAttributes;
  constructor(t, n) {
    super(n), this.__unknownAttributes = t;
  }
  static getType() {
    return Bu;
  }
  static clone(t) {
    return new ns(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return T0().updateFromJSON(t);
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
      type: Bu,
      ...t !== void 0 && { unknownAttributes: t },
      version: _b
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function T0(e) {
  return bt(new ns(e));
}
function Mb(e) {
  return e instanceof ns;
}
function v0(e) {
  return e?.type === Bu;
}
function Fu(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (rt(t) || Mb(t))
      return !0;
  return !1;
}
const Eb = 1;
class ai extends Zf {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new ai(t.__key);
  }
  static importJSON(t) {
    return Wn().updateFromJSON(t);
  }
  getMarker() {
    return jn;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Eb
    };
  }
  // Mutation
  insertNewAfter(t, n) {
    const r = Wn();
    return r.setTextFormat(t.format), r.setTextStyle(t.style), r.setDirection(this.getDirection()), r.setFormat(this.getFormatType()), r.setStyle(this.getTextStyle()), this.insertAfter(r, n), r;
  }
}
function Wn() {
  return bt(new ai());
}
function _t(e) {
  return e instanceof ai;
}
function Xc(e) {
  return e?.type === ai.getType();
}
function Ab(e) {
  return _t(e) && yn(e.getParent());
}
function xd(e) {
  return ae(e) || Ab(e);
}
function Dn(e) {
  let t = e.getParent();
  for (; t && xd(t); )
    t = t.getParent();
  return t;
}
function Qc(e) {
  return D(Dn(e));
}
function Td(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const n = e.getMarker();
  return n === t.getMarker() ? Qc(t) : t.getChildren().some((i) => D(i) && i.getMarker() === n) ? !0 : void 0;
}
function C0(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!N(t))
      return;
    const n = Td(t, e);
    n !== void 0 && t.setNested(n);
  });
}
const $i = /* @__PURE__ */ new WeakMap();
function S0(e, t, n) {
  const r = { owners: t, rederive: n };
  return $i.set(e, r), () => {
    $i.get(e) === r && $i.delete(e);
  };
}
function Pb(e, t, n) {
  const r = $i.get(e);
  !r?.rederive || !n.has(jc) || r.derivedFor === t || (r.rederive(t), r.derivedFor = t);
}
function zu(e) {
  return $i.get(e)?.owners;
}
function Nb(e) {
  return $i.get(Lt())?.owners.has(e.getKey()) ?? !1;
}
function wb(e) {
  $i.get(Lt())?.owners.add(e.getKey());
}
function Wr(e) {
  return v(e) && e.getType() === ot.getType() && pe(e, ke) !== "attribute";
}
function to(e) {
  if (!Wr(e) || !e.getTextContent().startsWith(q))
    return 0;
  let t = e, n = t.getPreviousSibling(), r = t.getParent();
  for (; r && ae(r); )
    t = r, r = t.getParent(), n ??= t.getPreviousSibling();
  if (!D(r))
    return 0;
  for (; ae(n); )
    n = n.getLastChild();
  return !N(n) || n.getMarkerSyntax() !== "opening" ? 0 : Sd(n, r) ? 1 : 0;
}
function vd(e) {
  let t = e.getNextSibling();
  for (; ae(t); )
    t = t.getFirstChild();
  return t;
}
function Cd(e) {
  const t = e.getPreviousSibling(), n = e.getParent();
  return !N(t) || !D(n) || !Sd(t, n) || !Wr(e) ? 0 : e.getTextContent().startsWith(q) ? q.length : 0;
}
function Sd(e, t) {
  return e.getMarkerSyntax() === "opening" && Td(e, t) !== void 0;
}
function no(e, t) {
  if (!Sd(e, t))
    return;
  const n = e.getNextSibling(), r = vd(e);
  if (!(n === null || r === null))
    return N(r) ? Td(r, t) === !0 ? "spacer" : void 0 : Wr(r) ? r.getTextContent().startsWith(q) ? void 0 : r.is(n) ? "prefix" : "spacer" : "spacer";
}
function _d(e) {
  return !Wr(vd(e)) || Fu(e) ? !1 : !A_(e.getNextSibling()?.getTextContent() ?? "");
}
function Ob(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (N(t) && no(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Md(e, t) {
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
    if (!ae(i))
      return !1;
    i = i.getFirstChild();
  }
  return !1;
}
function $b(e) {
  if (!e.isAttached() || Nb(e))
    return;
  const t = zu(Lt()) !== void 0;
  e.getChildren().forEach((n) => {
    if (!N(n))
      return;
    const r = no(n, e);
    if (r === void 0 || Md(n, e))
      return;
    if (t && _d(n)) {
      wb(e);
      return;
    }
    if (r === "spacer") {
      n.insertAfter(Ue(q));
      return;
    }
    const i = n.getNextSibling();
    v(i) && (_0(i) || E0(i));
  });
}
function _0(e) {
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
function M0(e) {
  if (e.getMarkerSyntax() !== "opening" || !D(e.getParent()))
    return !1;
  const t = w();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const n = e.getTextContent(), { anchor: r } = t;
  if (r.key !== e.getKey() || r.offset !== n.length)
    return !1;
  const i = Je(e.getMarker(), e.getNested()), s = n.slice(i.length);
  if (!n.startsWith(i) || !/^[|\s]+$/.test(s))
    return !1;
  const o = vd(e);
  if (!Wr(o))
    return !1;
  const a = o.getTextContent();
  return a.startsWith(q) ? (e.setTextContent(i), o.setTextContent(q + s + a.slice(q.length)), o.select(q.length + s.length, q.length + s.length), !0) : !1;
}
function Rb(e, t) {
  ae(e.getNextSibling()) && no(e, t) === "spacer" && e.insertAfter(Ue(q));
}
function E0(e) {
  e.setTextContent(q + e.getTextContent());
  const t = w();
  if (E(t))
    for (const n of [t.anchor, t.focus])
      n.type === "text" && n.key === e.getKey() && n.set(n.key, n.offset + 1, "text");
}
function A0(e) {
  return e.isAttached() ? e.getChildren().some((t) => N(t) && no(t, e) !== void 0 && Md(t, e)) : !1;
}
function Ed(e) {
  return e.isAttached() ? e.getChildren().some((t) => N(t) && no(t, e) !== void 0 && (Md(t, e) || _d(t))) : !1;
}
function Ad(e) {
  return e.isAttached() ? e.getChildren().some((t) => N(t) && no(t, e) !== void 0 && _d(t)) : !1;
}
function P0(e) {
  if (A0(e))
    return !0;
  const t = w();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const n = t.anchor.getNode();
  return (n.is(e) || e.isParentOf(n)) && Ed(e);
}
const Ib = 1, N0 = "marker", Pd = Qs("isGutterMarker", {
  parse: (e) => e === !0
});
class Gn extends ca {
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
    return new Gn(n, r, i);
  }
  static importDOM() {
    return {
      span: (t) => R0(t) ? {
        conversion: w0,
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
      version: Ib
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function w0(e) {
  const t = e.getAttribute("data-text-type") ?? "", n = e.textContent ?? "";
  return { node: Br(t, n) };
}
function Br(e, t) {
  return bt(new Gn(e, t));
}
function O0(e) {
  return Xt(Br(N0, e), Pd, !0);
}
function $0(e) {
  return Dt(e) && pe(e, Pd);
}
function R0(e) {
  return e?.tagName === "span";
}
function Dt(e) {
  return e instanceof Gn;
}
function Lb(e) {
  return e?.type === Gn.getType();
}
const qb = "file", Db = "src", I0 = "colspan", L0 = "category", q0 = "alt", D0 = "closed", K0 = "false";
function U0(e) {
  return e[D0] !== K0;
}
function B0(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => [
    t === qb ? Db : t,
    n
  ]));
}
function F0(e, t) {
  return e === "figure" && t === Db ? qb : t;
}
function Kb(e, t) {
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
function Zc(e, t, n) {
  const r = n ?? {}, i = U0(r);
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
        opening: `\\${Kb(t, r[I0])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: er(B0(r), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [L0]: s, ...o } = r;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + er(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [q0]: s, ...o } = r;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: er(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: er(r, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const pn = { wantsRun: !1, valueText: void 0 }, Hr = {};
function Yl(e, t) {
  if (t === "va")
    return e;
  const n = Vo(e, "va");
  return n.wrapper ?? n.closer ?? e;
}
function Nd(e) {
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
function el(e) {
  const { opener: t, closer: n } = e;
  if (!t)
    return !1;
  const r = w();
  if (!E(r) || !r.isCollapsed())
    return !1;
  const i = r.anchor.getNode(), s = i.is(t) && r.anchor.offset === t.getTextContentSize();
  return n ? s || i.is(n) : s;
}
function z0(e) {
  return je(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : N(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : v(e) && pe(e, ke) === "attribute";
}
function j0(e) {
  if (N(e)) {
    const r = e.getMarker();
    return r === "va" || r === "vp" ? r : void 0;
  }
  if (!v(e) || pe(e, ke) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!N(t))
    return;
  const n = t.getMarker();
  return n === "va" || n === "vp" ? n : void 0;
}
function Xl(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if ($e(t))
      return t;
    if (!z0(t))
      return;
  }
}
function Gh(e) {
  return {
    kind: e,
    ownerPredicate: (t) => $e(t),
    ownerOf: (t) => {
      if (je(t))
        return t.getRunKind() === e ? Xl(t) : void 0;
      const n = t.getParent();
      return je(n) ? n.getRunKind() === e ? Xl(n) : void 0 : j0(t) === e ? Xl(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!$e(t))
        return pn;
      const n = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return n === void 0 ? pn : { wantsRun: !0, valueText: q + n };
    },
    scanPieces: (t) => $e(t) ? Vo(Yl(t, e), e) : Hr,
    graceSite: (t, n) => $e(t) ? !n.opener && !n.closer ? Nd(Yl(t, e)) : el(n) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => $e(t) ? Yl(t, e) : void 0
    }
  };
}
const V0 = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => pn,
  scanPieces: () => Hr,
  graceSite: (e) => D(e) && P0(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, W0 = {
  kind: "char",
  ownerPredicate: (e) => D(e),
  ownerOf: (e) => {
    if (!v(e) || pe(e, ke) !== "attribute")
      return;
    const t = e.getParent();
    return D(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!D(e) || Ao(e) === void 0)
      return pn;
    const t = er(e.getUnknownAttributes() ?? {}, Zs(e.getMarker()));
    return t === "" ? pn : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => D(e) ? { value: mb(e) } : Hr,
  graceSite: (e, t) => {
    if (!D(e) || t.value)
      return !1;
    const n = Ao(e);
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
    insertRunBefore: (e) => D(e) ? Ao(e) : void 0
  }
};
function Ub(e) {
  if (N(e))
    return e.getMarker() === "cat";
  if (!v(e) || pe(e, ke) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return N(t) && t.getMarker() === "cat";
}
function H0(e) {
  const t = e.getParent();
  if (!L(t))
    return;
  const n = At(t);
  if (n)
    for (let r = e.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (r.is(n))
        return t;
      if (!Ub(r))
        return;
    }
}
const G0 = {
  kind: "cat",
  ownerPredicate: (e) => L(e),
  ownerOf: (e) => {
    if (je(e))
      return e.getRunKind() === "cat" && L(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return je(t) ? t.getRunKind() === "cat" && L(t.getParent()) ? t.getParent() ?? void 0 : void 0 : Ub(e) ? H0(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!L(e) || e.getIsCollapsed() !== !1)
      return pn;
    const t = e.getCategory();
    return t === void 0 ? pn : { wantsRun: !0, valueText: q + t };
  },
  scanPieces: (e) => L(e) ? ha(e) : Hr,
  graceSite: (e, t) => {
    if (!L(e))
      return !1;
    if (!t.opener && !t.closer) {
      const n = At(e);
      return n !== void 0 && Nd(n);
    }
    return el(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => L(e) ? At(e) : void 0
  }
};
function J0(e) {
  return je(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : N(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : v(e) && pe(e, ke) === "attribute";
}
function Y0(e) {
  if (N(e)) {
    const r = e.getMarker();
    return r === "ca" || r === "cp" ? r : void 0;
  }
  if (!v(e) || pe(e, ke) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!N(t))
    return;
  const n = t.getMarker();
  return n === "ca" || n === "cp" ? n : void 0;
}
function X0(e) {
  const t = e.getParent();
  if (!Ne(t))
    return;
  const n = gi(t);
  if (n)
    for (let r = e.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (r.is(n))
        return t;
      if (!J0(r))
        return;
    }
}
function Jh(e) {
  const t = (n) => Ne(n) ? e === "ca" ? gi(n) : bb(n) : void 0;
  return {
    kind: e,
    ownerPredicate: (n) => Ne(n),
    ownerOf: (n) => {
      if (je(n))
        return n.getRunKind() === e && Ne(n.getParent()) ? n.getParent() ?? void 0 : void 0;
      const r = n.getParent();
      return je(r) ? r.getRunKind() === e && Ne(r.getParent()) ? r.getParent() ?? void 0 : void 0 : Y0(n) === e ? X0(n) : void 0;
    },
    expectedPieces: (n) => {
      if (!Ne(n))
        return pn;
      const r = e === "ca" ? n.getAltnumber() : n.getPubnumber();
      return r === void 0 ? pn : { wantsRun: !0, valueText: q + r };
    },
    scanPieces: (n) => Ne(n) ? e === "ca" ? yb(n) : kb(n) : Hr,
    graceSite: (n, r) => {
      if (!Ne(n))
        return !1;
      if (!r.opener && !r.closer) {
        const i = t(n);
        return i !== void 0 && Nd(i);
      }
      return el(r);
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
function Bb(e) {
  if (N(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return v(e) && pe(e, ke) === "attribute";
}
function Q0(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (ze(t)) {
      const n = N(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !n || n.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Bb(t))
      return;
  }
}
const Z0 = {
  kind: "milestone",
  ownerPredicate: (e) => ze(e),
  ownerOf: (e) => {
    const t = je(e) ? e.getRunKind() === "milestone" ? e : void 0 : je(e.getParent()) ? e.getParent() : Bb(e) ? e : void 0;
    if (!t || je(t) && t.getRunKind() !== "milestone")
      return;
    const n = t.getPreviousSibling();
    return je(t) ? ze(n) ? n : void 0 : Q0(t);
  },
  expectedPieces: (e) => {
    if (!ze(e))
      return pn;
    const t = gb(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), n = er(t, da(e.getMarker()));
    return { wantsRun: !0, valueText: n === "" ? void 0 : q + n };
  },
  scanPieces: (e) => {
    if (!ze(e))
      return Hr;
    const { opening: t, attribute: n, closing: r, wrapper: i } = Yc(e);
    return { opener: t, value: n, closer: r, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!ze(e))
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
    return el(t);
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
}, eM = Zc("optbreak", void 0, void 0).opening, tM = {
  kind: "optbreak",
  ownerPredicate: (e) => rt(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!rt(t) || t.getTag() !== "optbreak"))
      return v(e) || Dt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: eM }),
  scanPieces: (e) => rt(e) ? { value: e.getFirstChild() ?? void 0 } : Hr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, nM = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => rt(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => pn,
  scanPieces: () => Hr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, rM = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => pn,
  scanPieces: () => Hr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Wo = [
  V0,
  W0,
  Gh("va"),
  Gh("vp"),
  G0,
  Jh("ca"),
  Jh("cp"),
  Z0,
  tM,
  nM,
  rM
], iM = new Map(Wo.map((e) => [e.kind, e]));
function Fr(e) {
  const t = iM.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Sr(e) {
  for (const t of Wo) {
    const n = t.ownerOf(e);
    if (n)
      return { owner: n, kind: t.kind };
  }
}
function Fb(e) {
  return Sr(e) !== void 0;
}
function sM(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const { type: t, id: n, start: r, end: i, undisplayed: s } = e;
  return typeof t == "string" && typeof n == "string" && Number.isInteger(r) && Number.isInteger(i) && (s === void 0 || typeof s == "boolean");
}
const tl = Qs("displayAnnotations", {
  parse: (e) => {
    if (typeof e != "object" || e === null)
      return;
    const { basis: t, annotations: n } = e;
    if (!(typeof t != "string" || !Array.isArray(n)) && n.every(sM))
      return { basis: t, annotations: n };
  }
});
function oM(e, t) {
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
function aM(e, t, n) {
  let r, i;
  for (let s = t; s < n; s++) {
    const o = e[s];
    o !== void 0 && (r ??= o, i = o);
  }
  return r === void 0 || i === void 0 ? void 0 : [r, i + 1];
}
const zb = 1, cM = "c", jb = "span";
class Kn extends ca {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n = !1, r, i, s, o, a) {
    super(a), this.__marker = cM, this.__number = t, this.__showMarker = n, this.__sid = r, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: n, __showMarker: r, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Kn(n, r, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Vb(t) ? {
        conversion: lM,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return wd().updateFromJSON(t);
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
    const t = document.createElement(jb);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(nc, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Xi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(nc, `usfm_${this.getMarker()}`), n.setAttribute("data-number", this.getNumber())), { element: n };
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
    return this.getShowMarker() ? Vn(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: zb
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
function lM(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: wd(t) };
}
function wd(e, t, n, r, i, s) {
  return bt(new Kn(e, t, n, r, i, s));
}
function Vb(e) {
  return e ? e.classList.contains(nc) && e.tagName.toLowerCase() === jb : !1;
}
function Gr(e) {
  return e instanceof Kn;
}
function uM(e) {
  return e?.type === Kn.getType();
}
const Ho = "id", Wb = 1, fM = [
  "type",
  "marker",
  "code",
  "content"
];
class Nn extends dr {
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
    return new Nn(n, r, i);
  }
  static importJSON(t) {
    const { code: n } = t;
    return Hb(n).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return vS(t);
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
      version: Wb
    };
  }
}
function Hb(e, t) {
  return bt(new Nn(e, t));
}
function Ie(e) {
  return e instanceof Nn;
}
function Od(e) {
  return e?.type === Nn.getType();
}
const dM = [
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
  jn,
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
], Gb = 1, pM = ["type", "marker", "content"];
class Kt extends Zf {
  __marker;
  __unknownAttributes;
  constructor(t = jn, n, r) {
    super(r), this.__marker = t, this.__unknownAttributes = n;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: n, __unknownAttributes: r, __key: i } = t;
    return new Kt(n, r, i);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (dM.includes(t) || (n?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: hM,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return Us().updateFromJSON(t);
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
      version: Gb
    };
  }
  // Mutation
  insertNewAfter(t, n) {
    const r = Us(this.getMarker());
    return r.setTextFormat(t.format), r.setTextStyle(t.style), r.setDirection(this.getDirection()), r.setFormat(this.getFormatType()), r.setStyle(this.getTextStyle()), this.insertAfter(r, n), r;
  }
}
function hM(e) {
  const t = e.getAttribute("data-marker") ?? void 0, n = Us(t);
  if (e.style) {
    n.setFormat(e.style.textAlign);
    const r = parseInt(e.style.textIndent, 10) / 20;
    r > 0 && n.setIndent(r);
  }
  return { node: n };
}
function Us(e, t) {
  return bt(new Kt(e, t));
}
function ye(e) {
  return e instanceof Kt;
}
function $d(e) {
  return e?.type === Kt.getType();
}
const Jb = /[ \u00A0]{2,}/g;
function gM(e) {
  return [...e.matchAll(Jb)].map((t) => [
    t.index + 1,
    t.index + t[0].length
  ]);
}
function Yh(e) {
  return e.replace(Jb, (t) => t[0]);
}
const mM = "​", Bs = mM;
var Xh;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Xh || (Xh = {}));
var Qh;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Qh || (Qh = {}));
function yM() {
  return Ue(Bs);
}
function bM(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Bs, ""));
}
function rs(e) {
  return e.length > 0 && e.includes(Bs) && e.replaceAll(Bs, "") === "";
}
function ga(e) {
  return v(e) && rs(e.getTextContent());
}
function Yb(e) {
  return g0(e) || uM(e);
}
function ct(e) {
  return Ne(e) || Gr(e);
}
function Xb(e, t) {
  return e.find((n) => ct(n) && n.getNumber() === t.toString());
}
function kM(e, t = !1) {
  return e.find((n, r) => (!t || r > 0) && ct(n));
}
function ju(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const n = t.getPreviousSibling();
    if (n)
      return n;
    t = t.getParent();
  }
}
function xM(e) {
  if (!e)
    return;
  if (ct(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !ct(t); )
    t = t.getPreviousSibling();
  if (t && ct(t))
    return t;
}
function wn(e) {
  return nt(e, L) ?? void 0;
}
function TM(e) {
  return Ie(e) || Ne(e) || D(e) || Gr(e) || _t(e) || ze(e) || ye(e) || L(e) || $e(e) || rt(e);
}
function Rd(e) {
  if (e.anchor.type === "element") {
    const n = e.anchor.getNode(), r = e.anchor.offset;
    if (r < n.getChildrenSize())
      return n.getChildAtIndex(r);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Qb(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const n = e.anchor.getNode();
  return n.getPreviousSibling() ?? n.getParent()?.getPreviousSibling() ?? null;
}
function yt(e) {
  return Ct(e) || Ie(e);
}
function Ct(e) {
  return ye(e) || _t(e);
}
function vM(e) {
  return $d(e) || Xc(e);
}
function Fs(e, t) {
  let n = e.getParent();
  for (; n; ) {
    if (n.getKey() === t)
      return !0;
    n = n.getParent();
  }
  return !1;
}
function Fi(e, t) {
  const n = pe(t, Bi), r = !!(e.cid && n), i = !e.cid && !n;
  return e.style === t.getMarker() && (i || r && e.cid === n);
}
function CM(e, t) {
  const n = A(e) ? e : e.getParent(), r = A(t) ? t : t.getParent(), i = n && r ? _S(n, r) : void 0;
  return i ? i.commonAncestor : void 0;
}
function SM(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [n, r] = t, i = e.isBackward() ? n : r;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function zr(e) {
  return e?.type === ot.getType();
}
function _M(e, t) {
  if (!t)
    return;
  const n = e.findIndex((r) => r === t);
  n && (e.length = n);
}
function MM(e, t) {
  if (!t)
    return e;
  const n = t.getIndexWithinParent();
  return e.splice(n + 1, e.length - n - 1);
}
function Zb(e, t, n) {
  const r = Je(e);
  if (t?.startsWith(r)) {
    const i = t.slice(r.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (n = s[1]);
  }
  return n;
}
function EM(e) {
  const t = e[Dr];
  if (t && typeof t == "object" && "textType" in t) {
    const n = t.textType;
    if (typeof n == "string")
      return n;
  }
}
function ek(e) {
  return nk(e) || zr(e) && EM(e) === "attribute" ? "" : zr(e) && e.text !== q ? e.text : ub(e) ? e.children.map((t) => ek(t)).join("") : "";
}
function AM(e) {
  return e.map((n) => ek(n)).filter((n) => n.length > 0).join(" ").trim();
}
function Id(e) {
  const t = [];
  for (const n of e) {
    if (!D(n))
      continue;
    const r = tk(n);
    r !== $t && r.length > 0 && t.push(r);
  }
  return t.join(" ").trim();
}
function tk(e) {
  return N(e) || kn(e) || v(e) && pe(e, ke) === "attribute" ? "" : v(e) ? e.getTextContent() : A(e) ? e.getChildren().map((t) => tk(t)).join("") : "";
}
function kn(e) {
  return Dt(e) && e.getTextType() === "marker";
}
function xn(e) {
  return N(e) || kn(e);
}
function Ld(e) {
  if (!e || !xn(e))
    return !1;
  const t = e.getParent();
  return Ie(t) && e.is(t.getFirstChild());
}
function nk(e) {
  return eo(e) || Lb(e) && e.textType === "marker";
}
function Zh(e, t) {
  PM(e, t), e.setMarker(t);
}
function PM(e, t) {
  const n = e.getMarker(), r = Je(n), i = Je(n, !0), s = at(n), o = at(n, !0), a = We.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!xn(c))
      return;
    const l = c.getTextContent(), u = l === r || l === i, f = !u && (l === s || l === o);
    if (!(!u && !f)) {
      if (f && a) {
        c.remove();
        return;
      }
      if (N(c))
        c.setMarker(t);
      else if (kn(c)) {
        const d = l.startsWith(Je("", !0));
        c.setTextContent(u ? Je(t, d) : at(t, d));
      }
    }
  });
}
function ht(e, t = CS) {
  const n = { ...e };
  return t.forEach((r) => {
    Reflect.deleteProperty(n, r);
  }), Object.keys(n).length === 0 ? void 0 : n;
}
function lt(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function rk(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function ik(e) {
  if (!E(e))
    return eg(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !A(t) || e.anchor.type === "text" && !v(t)))
    return t ?? void 0;
  try {
    return eg(e) ?? t ?? void 0;
  } catch (r) {
    if (rk(r))
      return t ?? void 0;
    throw r;
  }
}
function NM(e, t) {
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
function qd(e, t) {
  if (!t)
    return !1;
  const n = t.split("-").map((r) => parseInt(r));
  if (n.length < 1 || n.length > 2 || n[0] > n[1])
    throw new Error("isVerseInRange: invalid range");
  return n.length === 1 ? e === n[0] : n.length === 2 && isNaN(n[1]) ? e >= n[0] : (n.length === 2 && isNaN(n[0]) || e >= n[0]) && e <= n[1];
}
function wM(e) {
  return !!e && e.includes("-");
}
function sk(e) {
  const t = e.split("-"), n = parseInt(t[0], 10), r = t.length > 1 ? parseInt(t[t.length - 1], 10) : n;
  return { start: n, end: r };
}
function eg(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Dd(e) {
  if (!v(e))
    return;
  const t = Dn(e);
  if (!L(t) || !At(t)?.is(e))
    return;
  const { start: n, end: r } = Jc(e.getTextContent(), t.getCaller());
  return n < r ? { start: n, end: r } : void 0;
}
function On(e) {
  if (!e)
    return !1;
  if (Qi(e) || N(e) || kn(e) || je(e) || e.getType() === hi || Dt(e) && e.getTextType() === "attribute")
    return !0;
  const t = Dn(e);
  if (Ne(t))
    return !0;
  if (v(e) && L(t) && At(t)?.is(e))
    return !Dd(e);
  if (v(e)) {
    const n = pe(e, ke);
    if (n === Ar || n === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || rs(r))
      return !0;
    if (r === q)
      return !ok(e);
  }
  return !1;
}
function ok(e) {
  if (e.getTextContent() !== q || pe(e, ke) !== void 0 || !(ae(e.getParent()) || ae(e.getPreviousSibling()) || ae(e.getNextSibling())) || to(e) > 0)
    return !1;
  const n = Dn(e);
  return !D(n) || ak(n, e);
}
function ak(e, t) {
  return e.getChildren().some((n) => n.is(t) ? !1 : ae(n) ? ak(n, t) : v(n) ? !N(n) && pe(n, ke) === void 0 && n.getTextContent() !== "" && n.getTextContent() !== q && !rs(n.getTextContent()) : A(n) && !je(n));
}
function zi() {
  const e = Ue(q);
  return Xt(e, ke, Ar), e.setMode("token"), e;
}
function OM(e) {
  const t = e.getTextContent();
  t.startsWith(q) || e.setTextContent(q + t);
}
function vn(e) {
  return v(e) && pe(e, ke) === Ar;
}
function ck(e) {
  const t = e.getFirstChild();
  if (!xn(t) || t === null || vn(t.getNextSibling()))
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
function lk(e) {
  if (Ne(e))
    return [];
  const t = [];
  let n;
  const r = () => {
    n && (t.push({ type: "text", nodes: n }), n = void 0);
  }, i = (s) => {
    if (!On(s)) {
      if (xd(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (v(s) && s.getType() === ot.getType()) {
        n ??= [], n.push(s);
        return;
      }
      r(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), r(), t;
}
function $M(e, t) {
  const n = [];
  let r = 0;
  for (const i of e) {
    const s = Dd(i), o = s ? s.start : to(i), a = s ? s.end : i.getTextContentSize(), c = t ? gM(i.getTextContent().slice(o, a)).map(([u, f]) => [u + o, f + o]) : [];
    a < i.getTextContentSize() && c.push([a, i.getTextContentSize()]);
    const l = i.getTextContentSize() - o - c.reduce((u, [f, d]) => u + d - f, 0);
    n.push({ node: i, start: r, lead: o, collapsed: c, length: l }), r += l;
  }
  return { type: "text", segments: n, length: r };
}
function uk(e) {
  return e.lead > 0 ? [[0, e.lead], ...e.collapsed] : e.collapsed;
}
function RM(e, t) {
  let n = t;
  for (const [r, i] of uk(e)) {
    if (t <= r)
      break;
    n -= Math.min(t, i) - r;
  }
  return e.start + n;
}
function tg(e, t) {
  let n = t;
  for (const [r, i] of uk(e)) {
    if (r > n)
      break;
    n += i - r;
  }
  return n;
}
function Wt(e, t) {
  return lk(e).map((n) => n.type === "element" ? n : $M(n.nodes, t));
}
function IM(e, t) {
  return lk(e).findIndex((n) => n.type === "element" ? n.node.is(t) : n.nodes.some((r) => r.is(t)));
}
function Rs(e, t, n) {
  const r = Dn(e);
  if (!r)
    return;
  const i = Wt(r, n);
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.type !== "text")
      continue;
    const a = o.segments.find((c) => c.node.is(e));
    if (a)
      return { parent: r, index: s, offset: RM(a, t) };
  }
}
function LM(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const r of e.segments)
    if (t >= r.start && t < r.start + r.length)
      return [r.node, tg(r, t - r.start)];
  const n = e.segments[e.segments.length - 1];
  if (n)
    return [n.node, tg(n, t - n.start)];
}
function Ps(e, t, n) {
  const r = e.getChildAtIndex(t);
  if (Ab(e)) {
    const s = e.getParentOrThrow();
    return r ? On(r) ? Ps(e, t + 1, n) : Vu(s, r, n) : Ps(s, e.getIndexWithinParent() + 1, n);
  }
  const i = Wt(e, n);
  return r ? On(r) || xd(r) && !fk(i, r) ? Ps(e, t + 1, n) : Vu(e, r, n) : { type: "index", index: i.length };
}
function qM(e, t) {
  const n = Dn(e);
  if (n && fk(Wt(n, t), e))
    return { parent: n, point: Vu(n, e, t) };
}
function fk(e, t) {
  return e.some((n) => n.type === "element" ? n.node.is(t) || Fs(n.node, t.getKey()) : n.segments.some((r) => r.node.is(t) || Fs(r.node, t.getKey())));
}
function Vu(e, t, n) {
  const r = Wt(e, n);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(t) || Fs(s.node, t.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(t) || Fs(o.node, t.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
const ac = "unmatched", dk = 2;
function Po(e) {
  return `\\${e}`;
}
class hr extends ot {
  __marker;
  constructor(t = "", n) {
    super(Po(t), n), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: n, __key: r } = t;
    return new hr(n, r);
  }
  static importDOM() {
    return {
      [ac]: (t) => KM(t) ? {
        conversion: DM,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Kd().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const n = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? Po(n)
    }).getWritable();
    return i.__marker = n, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n.__text = Po(t), n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const n = super.createDOM(t);
    return n.setAttribute("data-marker", this.__marker), n.classList.add(Rh), n.title = ng(this.__marker), n;
  }
  updateDOM(t, n, r) {
    const i = super.updateDOM(t, n, r);
    return t.__marker !== this.__marker && (n.setAttribute("data-marker", this.__marker), n.title = ng(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(ac);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Rh), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: dk
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function pk(e) {
  return e.getTextContent() === Po(e.getMarker());
}
function ng(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function DM(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Kd(t) };
}
function Kd(e) {
  return bt(new hr(e));
}
function KM(e) {
  return e?.tagName.toLowerCase() === ac;
}
function on(e) {
  return e instanceof hr;
}
function UM(e) {
  return e?.type === hr.getType();
}
const BM = /* @__PURE__ */ new Set([
  hi,
  Vy,
  Gn.getType(),
  // A chapter in the views without editable markers: the same whole-node treatment as a verse.
  Kn.getType()
]);
function Ud(e) {
  return v(e) && pe(e, ke) === "attribute";
}
function hk(e) {
  if (!v(e))
    return !1;
  let t = e.getParent();
  for (; ae(t); )
    t = t.getParent();
  return L(t) ? At(t)?.is(e) ?? !1 : Ne(t) ? gi(t)?.is(e) ?? !1 : !1;
}
function gk(e) {
  return Tn(e) ? BM.has(e.getType()) : !v(e) || vn(e) ? !1 : N(e) || $e(e) || Ud(e) || hk(e) || // An unmatched closer (`ImmutableUnmatchedNode`) is a `TextNode` subclass, not a decorator, so
  // the decorator-type set above cannot reach it.
  on(e);
}
function Bd(e) {
  if (!v(e))
    return [0, 0];
  if (on(e))
    return [0, e.getTextContentSize()];
  const t = e.getTextContent(), n = t.length - t.trimStart().length;
  return n === t.length ? [n, n] : [n, t.trimEnd().length];
}
function mk(e, t, n) {
  return e.type === t && e.id === n;
}
function yk(e, t) {
  if (e.basis === t)
    return e.annotations;
  const n = oM(e.basis, t);
  return e.annotations.flatMap((r) => {
    if (r.start === r.end)
      return [r];
    const i = aM(n, r.start, r.end);
    return i ? [{ ...r, start: i[0], end: i[1] }] : [];
  });
}
function cc(e) {
  return Tn(e) ? lc(e) : e.getTextContent();
}
function FM(e) {
  return Tn(e) ? is(e) : e.getTextContent();
}
function Fd(e) {
  const t = pe(e, tl);
  return t ? yk(t, cc(e)) : [];
}
function zM(e, t) {
  if (t.start === t.end)
    return t;
  let n, r;
  for (let i = t.start; i < t.end; i++) {
    const s = jd.renderedOffset(e, i);
    if (s === "drawn")
      return { type: t.type, id: t.id, start: 0, end: 0 };
    s !== void 0 && (n = Math.min(n ?? s, s), r = Math.max(r ?? s + 1, s + 1));
  }
  return n === void 0 || r === void 0 ? { ...t, undisplayed: !0 } : { type: t.type, id: t.id, start: n, end: r };
}
function Ir(e) {
  const t = Fd(e);
  return Tn(e) ? t.map((n) => zM(e, n)) : t;
}
function zd(e, t) {
  const n = [...t].sort((r, i) => r.start - i.start || r.end - i.end);
  Xt(e, tl, n.length > 0 ? { basis: cc(e), annotations: n } : void 0);
}
function rg(e) {
  const t = nl(e).trim();
  if (t)
    return t;
  const n = is(e), [r, i] = rl(n);
  return n.slice(r, i);
}
const bk = {
  holdableText: rg,
  renderedOffset: (e, t) => {
    const n = rg(e);
    if (t >= n.length)
      return;
    const r = is(e), [i] = rl(r);
    return r.slice(i, i + n.length) === n ? i + t : "drawn";
  }
};
let jd = bk;
function jM(e) {
  jd = e ?? bk;
}
function lc(e) {
  return jd.holdableText(e);
}
function VM(e, t, n, r, i) {
  let s = { type: t, id: n, start: r, end: i };
  const o = [];
  for (const a of Fd(e))
    mk(a, t, n) && a.start <= s.end && s.start <= a.end ? s = {
      ...s,
      start: Math.min(s.start, a.start),
      end: Math.max(s.end, a.end)
    } : o.push(a);
  zd(e, [...o, s]);
}
function kk(e, t, n) {
  const r = Fd(e), i = r.filter((s) => !mk(s, t, n));
  return i.length === r.length ? !1 : (zd(e, i), !0);
}
function nl(e) {
  if (e.getType() !== hi)
    return e.getTextContent();
  const t = e.getParent();
  return L(t) ? t.getCaller() : "";
}
function WM(e) {
  return "getRenderedText" in e && typeof e.getRenderedText == "function";
}
function is(e) {
  if (!Tn(e) || !WM(e))
    return "";
  const t = e.getRenderedText();
  return typeof t == "string" ? t : "";
}
function ig(e) {
  return e === Uo || /\s/u.test(e);
}
function rl(e) {
  let t = 0;
  for (; t < e.length && ig(e[t]); )
    t++;
  if (t === e.length)
    return [0, 0];
  let n = e.length;
  for (; n > t && ig(e[n - 1]); )
    n--;
  return [t, n];
}
function Wu(e, t) {
  if (t.undisplayed)
    return lc(e).slice(t.start, t.end);
  if (t.start !== t.end)
    return FM(e).slice(t.start, t.end);
  const n = lc(e);
  if (n)
    return n;
  const r = is(e), [i, s] = rl(r);
  return r.slice(i, s);
}
function HM(e, t, n) {
  return Ir(e).filter((r) => r.type === t && (r.undisplayed || r.start === r.end || r.start <= n && n <= r.end)).map((r) => r.id);
}
function GM(e) {
  const t = pe(e, tl);
  !t || t.basis === cc(e) || zd(e, yk(t, cc(e)));
}
const uc = /* @__PURE__ */ new WeakMap();
function Vd(e, t) {
  return JSON.stringify([e, t]);
}
function JM(e, t, n) {
  const r = Lt();
  let i = uc.get(r);
  i || (i = /* @__PURE__ */ new Map(), uc.set(r, i));
  const s = Vd(e, t), o = i.get(s), a = Object.fromEntries(Object.entries(n).filter(([, c]) => c !== void 0));
  i.set(s, { ...o, ...a });
}
function fc(e, t, n) {
  return uc.get(e)?.get(Vd(t, n));
}
function xk(e, t, n) {
  uc.get(e)?.delete(Vd(t, n));
}
function YM(e, t = []) {
  const r = [
    ot,
    Hn,
    Vt,
    Gn,
    Kn,
    ...t
  ].filter((i) => e.hasNodes([i])).map((i) => e.registerNodeTransform(i, GM));
  return () => r.forEach((i) => i());
}
function XM(e) {
  return $e(e) || ze(e) || je(e) || je(e.getParent()) || hk(e) || on(e);
}
function Wd(e) {
  return v(e) ? e.getTextContentSize() : 1;
}
function Hd(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getFirstChild();
    if (!n)
      return t;
    t = n;
  }
  return t;
}
function Tk(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getLastChild();
    if (!n)
      return t;
    t = n;
  }
  return t;
}
function sg(e) {
  const t = e.getNode();
  if (!A(t))
    return { leaf: t, offset: v(t) ? e.offset : Math.min(e.offset, 1) };
  const n = t.getChildAtIndex(e.offset);
  if (n)
    return { leaf: Hd(n), offset: 0 };
  const r = t.getLastChild();
  if (!r)
    return { leaf: t, offset: 0 };
  const i = Tk(r);
  return { leaf: i, offset: Wd(i) };
}
function ja(e, t) {
  return e.leaf.is(t.leaf) ? e.offset - t.offset : e.leaf.isBefore(t.leaf) ? -1 : 1;
}
function vk(e, t, n) {
  const r = Wd(e);
  let i = r;
  t.leaf.is(e) ? i = t.offset : t.leaf.isBefore(e) && (i = 0);
  let s = 0;
  return n.leaf.is(e) ? s = n.offset : e.isBefore(n.leaf) && (s = r), [i, Math.max(i, s)];
}
function QM(e) {
  for (let t = e; t; t = t.getParent()) {
    const n = t.getNextSibling();
    if (n)
      return Hd(n);
  }
}
function ZM(e, t, n) {
  const r = Hd(e), i = Tk(e);
  if (ja(t, { leaf: r, offset: 0 }) > 0 || ja(n, { leaf: i, offset: Wd(i) }) < 0)
    return !1;
  if (vn(i)) {
    const s = QM(e);
    if (!s || ja(n, { leaf: s, offset: 0 }) <= 0)
      return !1;
  }
  return !0;
}
function eE(e, t, n, r) {
  if (!gk(e))
    return;
  const [i, s] = vk(e, t, n);
  if (s <= i)
    return;
  if (!v(e)) {
    const l = r?.get(e.getKey());
    return l ? [l.start, l.end] : [0, lc(e).length];
  }
  const [o, a] = Bd(e), c = [Math.max(i, o), Math.min(s, a)];
  return c[1] > c[0] ? c : void 0;
}
function Gd(e, t, n, r, i, s, o, a = {}) {
  if (e.isCollapsed())
    return;
  const c = e.getNodes(), l = e.isBackward(), [u, f] = l ? [e.focus, e.anchor] : [e.anchor, e.focus], d = sg(u), p = sg(f);
  if (ja(d, p) >= 0)
    return;
  let h = !1;
  const g = (k) => {
    const x = eE(k, d, p, a.decoratorHolds);
    x && (Ft(Fa), VM(k, t, n, x[0], x[1]), h = !0);
  };
  let m, y;
  for (const k of c) {
    if (A(y) && y.isParentOf(k))
      continue;
    if (N(k) || vn(k) || Ud(k) || XM(k)) {
      g(k), m = k.getParent(), y = void 0;
      continue;
    }
    let x = null;
    if (v(k)) {
      const [S, _] = vk(k, d, p), U = Math.max(S, to(k));
      if (U >= _)
        continue;
      Ft(Fa), x = k.splitText(U, _)[U > 0 ? 1 : 0];
    } else {
      if (ae(k))
        continue;
      if (A(k) && k.isInline()) {
        if (!ZM(k, d, p))
          continue;
        x = k;
      }
    }
    if (x !== null) {
      if (x && x.is(m))
        continue;
      Ft(Fa);
      const S = x.getParent();
      (S == null || !S.is(m)) && (y = void 0), m = S, y === void 0 && (y = Ki(), y.addID(t, n, r, i, s, o), x.insertBefore(y)), y.append(x);
    } else
      g(k), m = void 0, y = void 0;
  }
  h && JM(t, n, { onClick: r, onRemove: i, onMouseEnter: s, onMouseLeave: o }), t === Ot && A(y) && (l ? y.selectStart() : y.selectEnd());
}
const Ck = "table:row", og = "immutable-table-row", Sk = 1, Hu = "tr", tE = ["type", "marker", "content"];
class ss extends dr {
  __marker;
  __unknownAttributes;
  constructor(t = Hu, n, r) {
    super(r), this.__marker = t, this.__unknownAttributes = n;
  }
  static getType() {
    return og;
  }
  static clone(t) {
    return new ss(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return nE().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Hu).setUnknownAttributes(t.unknownAttributes);
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
      type: og,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Sk
    };
  }
}
function nE(e, t) {
  return bt(new ss(e, t));
}
function _k(e) {
  return e instanceof ss;
}
const Mk = "table:cell", ag = "immutable-table-cell", Ek = 1, Gu = "tc1", rE = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function iE(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class os extends dr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Gu, n, r, i, s) {
    super(s), this.__marker = t, this.__align = n, this.__colspan = r, this.__unknownAttributes = i;
  }
  static getType() {
    return ag;
  }
  static clone(t) {
    const { __marker: n, __align: r, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new os(n, r, i, s, o);
  }
  static importJSON(t) {
    return sE().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Gu).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const r = iE(this.__align);
    return r && (n.style.textAlign = r), this.__colspan && n.setAttribute("colspan", this.__colspan), n;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), n = this.getColspan(), r = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: ag,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...n !== void 0 && { colspan: n },
      ...r !== void 0 && { unknownAttributes: r },
      version: Ek
    };
  }
}
function sE(e, t, n, r) {
  return bt(new os(e, t, n, r));
}
function oE(e) {
  return e instanceof os;
}
const Ju = /* @__PURE__ */ new WeakMap();
function Ql(e, t) {
  t ? Ju.set(e, t) : Ju.delete(e);
}
function Jd(e) {
  return Ju.get(e);
}
function ma(e, t) {
  const n = e.getChildAtIndex(t);
  return v(n) ? n : void 0;
}
function cr(e, t) {
  const n = ma(e, t);
  n ? n.select(0, 0) : e.select(t, t);
}
function Go(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function aE(e) {
  return e.getChildren().some((t) => N(t) && t.getMarkerSyntax() === "closing");
}
function cE(e) {
  return Go(e) ? void 0 : { closed: "false" };
}
function lE(e, t, n, r) {
  const i = t.getMarker(), s = Qc(t), o = aE(t), a = r ? qt(i, "opening", s) : void 0;
  if (a) {
    e.append(a);
    const [c] = n;
    Wr(c) && !c.getTextContent().startsWith(q) && c.setTextContent(q + c.getTextContent());
  }
  e.append(...n), a && Rb(a, e), o && e.append(qt(i, "closing", s));
}
function ji(e) {
  return nt(e, D) ?? void 0;
}
function uE(e) {
  let t = e.getParent();
  for (; D(t); )
    t = t.getParent();
  return t;
}
function Yu(e) {
  const t = Ak(e);
  return e.getChildren().every((n) => N(n) || t && pe(n, ke) === "attribute" || v(n) && n.getTextContent().replaceAll(q, "") === "");
}
function Ak(e) {
  return Go(e);
}
function fE(e, t) {
  const n = e.getUnknownAttributes(), r = n ? er(n, Zs(e.getMarker())) : "";
  r !== "" && t.insertAfter(Ue(r)), e.remove();
}
function dE(e, t) {
  if (Go(e))
    return;
  const n = e.getUnknownAttributes();
  if (n) {
    const r = { ...n };
    delete r.closed, e.setUnknownAttributes(Object.keys(r).length > 0 ? r : void 0);
  }
  t && e.append(qt(e.getMarker(), "closing", Qc(e)));
}
function pE(e, t) {
  return D(e) && !Go(e) && !Go(t);
}
function hE(e, t, n) {
  Yu(e) && e.getChildren().forEach((s) => {
    N(s) || s.remove();
  });
  const [r] = t;
  n && Wr(r) && !r.getTextContent().startsWith(q) && r.setTextContent(q + r.getTextContent()), e.append(...t);
  const i = e.getFirstChild();
  n && N(i) && i.getMarkerSyntax() === "opening" && Rb(i, e);
}
function gE(e, t, n) {
  const { renderGlyphs: r, closeImplicitSpans: i = !1 } = n, s = Ak(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), f = N(l) && l.getMarkerSyntax() === "closing", d = s && pe(l, ke) === "attribute";
    !f && !d && o.push(l), l = u;
  }
  const a = pE(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      hE(e, o, r);
    else {
      const l = Ur(t.getMarker(), cE(t));
      lE(l, t, o, r), e.insertAfter(l), Yu(l) ? l.remove() : c = l;
    }
  i && !a && dE(t, r), Yu(t) && fE(t, c);
}
function zs(e, t) {
  let n = e.getParent();
  for (; D(n); )
    gE(e, n, t), n = e.getParent();
}
function il(e) {
  if (v(e) && !N(e)) {
    const t = to(e);
    e.select(t, t);
    return;
  }
  if (A(e)) {
    const t = e.getChildren().filter((r) => !N(r)), n = t.find((r, i) => i === t.length - 1 || !v(r) || r.getTextContent() !== q);
    if (n) {
      il(n);
      return;
    }
    e.selectEnd();
  }
}
function mE(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Xu(e) {
  return !!(e.opener || e.value || e.closer);
}
function cg(e) {
  return /^\s/.test(e);
}
function Yd(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !cg(t) || !cg(e))
    return !0;
  const n = t.trim();
  return n === "" || e.trim() !== n;
}
function sl(e, t, n) {
  return n.wantsRun ? Yd(t.value?.getTextContent(), n.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : mE(t);
}
function yE(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const n = e.expectedPieces(t);
  if (!n.wantsRun)
    return !1;
  const r = e.scanPieces(t);
  return Yd(r.value?.getTextContent(), n.valueText) || e.byteFormat.glyphs !== "none" && (!r.opener || e.byteFormat.closerSyntax !== "none" && !r.closer) ? !1 : r.wrapper === void 0;
}
function Pk(e, t) {
  return !Xu(e.scanPieces(t));
}
function ya(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const n = e.expectedPieces(t), r = e.scanPieces(t);
  if (!sl(e, r, n))
    return !1;
  const i = w();
  if (!E(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = r;
  return o && (s.is(o) || Fs(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, r);
}
function bE(e, t, n, r) {
  return !n.wantsRun || Xu(r) || Jd(Lt()) === "remote" ? !1 : Lt().getEditorState().read(() => {
    const i = Q(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Xu(e.scanPieces(i));
  });
}
function kE(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function lg(e) {
  const t = Ue(e);
  return Xt(t, ke, "attribute"), t;
}
function xE(e, t, n) {
  if (n.wrapper)
    return n.wrapper;
  const { runKind: r, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!r || !s)
    return;
  const o = ob(r);
  return s.insertAfter(o), n.opener && o.append(n.opener), n.value && o.append(n.value), n.closer && o.append(n.closer), o;
}
function TE(e, t, n, r) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const d = c?.(t);
    if (!d || r.valueText === void 0)
      return;
    v(n.value) ? n.value.setTextContent(r.valueText) : d.insertBefore(lg(r.valueText));
    return;
  }
  const l = xE(e, t, n);
  if (!l || s === "none" || !o || !a)
    return;
  const u = n.opener ?? (() => {
    const d = qt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(d) : l.append(d), d;
  })();
  let f = n.value;
  r.valueText === void 0 ? (f?.remove(), f = void 0) : v(f) ? Yd(f.getTextContent(), r.valueText) && f.setTextContent(r.valueText) : (f = lg(r.valueText), u.insertAfter(f)), a !== "none" && !n.closer && (f ?? u).insertAfter(qt(a === "selfClosing" ? "" : o(t), a));
}
function Jo(e, t) {
  const { writer: n } = e.byteFormat;
  if (n === "kind-owned" || n === "read-only" || !t.isAttached())
    return;
  const r = e.expectedPieces(t), i = e.scanPieces(t);
  if (sl(e, i, r) && !Nb(t)) {
    if (bE(e, t, r, i)) {
      wb(t);
      return;
    }
    if (!ya(e, t)) {
      if (!r.wantsRun) {
        kE(i);
        return;
      }
      TE(e, t, i, r);
    }
  }
}
function vE(e, t, n) {
  Jo(e, t), t.isAttached() && ya(e, t) && n.add(t.getKey());
}
function ba(e) {
  if (!v(e))
    return !1;
  if (N(e) || $e(e) || on(e))
    return !0;
  const t = pe(e, ke);
  return t === "attribute" || t === Ar;
}
function Xd(e, t) {
  return N(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && pr(e) && D(e.getParent())) : !1;
}
function CE() {
  const e = w();
  return E(e) ? Xd(e.focus.getNode(), e.focus.offset) : !1;
}
function Nk(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return v(t) && ba(t) ? t : void 0;
}
function SE(e) {
  const t = Nk(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function _E(e) {
  const t = Nk(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function ug(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function fg(e, t) {
  e.set(t.key, t.offset, t.type);
}
function ME(e, t) {
  let n = _E(e);
  for (; n; ) {
    const r = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (!v(r))
      return;
    if (!ba(r))
      return { node: r, offset: t === "next" ? 0 : r.getTextContentSize() };
    n = r;
  }
}
function dg(e, t) {
  const n = ME(e, t);
  return n ? (e.set(n.node.getKey(), n.offset, "text"), !0) : !1;
}
function Qd(e) {
  if (e.isCollapsed()) {
    const a = SE(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), n = t ? e.focus : e.anchor, r = t ? e.anchor : e.focus, i = [ug(n), ug(r)], s = dg(n, "next"), o = dg(r, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (fg(n, i[0]), fg(r, i[1]), !1) : !0;
}
const wk = Qs("verseBlockSource", {
  parse: (e) => typeof e == "number" ? e : void 0
}), dc = "verse-block", Ok = 1, EE = "verse-block";
class ro extends dr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", n) {
    super(n), this.__number = t;
  }
  static getType() {
    return dc;
  }
  static clone(t) {
    return new ro(t.__number, t.__key);
  }
  static importJSON(t) {
    return AE().updateFromJSON(t);
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
    return sk(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(EE), pg(t, this.__number), t;
  }
  updateDOM(t, n) {
    return t.__number !== this.__number && pg(n, this.__number), !1;
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
      type: dc,
      number: this.getNumber(),
      version: Ok
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function pg(e, t) {
  const { start: n, end: r } = sk(t), i = !isNaN(n) && !isNaN(r) && n <= r;
  e.setAttribute("data-verse-number", t), hg(e, "data-verse-start", i ? n : NaN), hg(e, "data-verse-end", i ? r : NaN);
}
function hg(e, t, n) {
  isNaN(n) ? e.removeAttribute(t) : e.setAttribute(t, n.toString());
}
function AE(e) {
  return bt(new ro(e));
}
function Vi(e) {
  return e instanceof ro;
}
function PE(e) {
  return e?.type === dc;
}
const NE = [
  Nn,
  Kn,
  qn,
  Vt,
  We,
  Ze,
  ar,
  Hn,
  ts,
  Gn,
  hr,
  Kt,
  ai,
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
  Pr,
  {
    replace: Zf,
    with: () => Wn(),
    withKlass: ai
  }
], pc = {
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
}, wE = {
  paragraph: T.Paragraph,
  character: T.Character,
  note: T.Note,
  milestone: T.Milestone
};
function OE(e) {
  if (!e)
    return Cr;
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    if (t.has(n))
      return t.get(n);
    const r = Object.hasOwn(e.markers, n) ? e.markers[n] : void 0, i = r ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: Cr(n)?.category ?? C.Uncategorized,
      type: wE[r.styleType] ?? T.Unknown,
      description: r.description ?? "",
      hasEndMarker: !!r.endMarker,
      children: Cr(n)?.children
    } : void 0;
    return t.set(n, i), i;
  };
}
function gg(e, t, n) {
  const r = {
    type: sr,
    version: ir,
    content: e
  }, i = t.serializeEditorState(r, n);
  return Xc(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const $k = "v", Rk = 1, $E = "verse-selected";
class Qt extends ca {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n = !1, r, i, s, o, a) {
    super(a), this.__marker = $k, this.__number = t, this.__showMarker = n, this.__sid = r, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return Vy;
  }
  static clone(t) {
    const { __number: n, __showMarker: r, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Qt(n, r, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => LE(t) ? {
        conversion: IE,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Zd().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(wu, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Xi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(wu, `usfm_${this.getMarker()}`), n.setAttribute("data-number", this.getNumber())), { element: n };
  }
  decorate() {
    return P(RE, { nodeKey: this.getKey(), text: this.getRenderedText() });
  }
  /** The text this verse shows on screen: its whole `\v N` glyph, or only its number. */
  getRenderedText() {
    return this.getShowMarker() ? Vn(this.getMarker(), this.getNumber()) : (
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
      version: Rk
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (n) {
      if (rk(n))
        return !1;
      throw n;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function RE({ nodeKey: e, text: t }) {
  const [n] = BS(e);
  return P("span", { className: n ? $E : void 0, children: t });
}
function IE(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Zd(t) };
}
function Zd(e, t, n, r, i, s) {
  return bt(new Qt(e, t, n, r, i, s));
}
function LE(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === $k;
}
function gr(e) {
  return e instanceof Qt;
}
function qE(e) {
  return e?.type === Qt.getType();
}
function we(e) {
  return $e(e) || gr(e);
}
function Ik(e) {
  return yd(e) || qE(e);
}
function DE(e) {
  return KE(e).find((t) => ye(t));
}
function KE(e) {
  return e.some(Vi) ? e.flatMap((t) => Vi(t) ? t.getChildren() : t) : e;
}
function ol(e) {
  return A(e) ? Vi(e) ? e.getChildren().flatMap(ol) : e.getChildren() : [];
}
function UE(e, t) {
  return ol(e).find((i) => we(i) && qd(t, i.getNumber()));
}
function BE(e, t) {
  return t === 0 ? DE(e) : e.map((n) => UE(n, t)).filter((n) => n)[0];
}
function hc(e) {
  return ol(e).find((n) => we(n));
}
function Lk(e, t) {
  if (!A(e) || t <= 0)
    return;
  const n = e.getChildren();
  for (let r = t - 1; r >= 0; r--) {
    const i = n[r];
    if (we(i))
      return i;
  }
}
function FE(e) {
  const t = e.getParent();
  if (t && A(t)) {
    const r = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < r.length; i++) {
      const s = r[i];
      if (we(s))
        return s;
    }
  }
  let n = t?.getNextSibling();
  for (; n && !ct(n); ) {
    const r = hc(n);
    if (r)
      return r;
    n = n.getNextSibling();
  }
}
function gc(e) {
  return ol(e).findLast((t) => we(t));
}
function zE(e) {
  if (!$e(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const n = e.getTextContent().indexOf(t);
  return n < 0 ? 0 : n + t.length;
}
function jE(e, t, n) {
  if (!n)
    return !1;
  const r = t.getParent();
  if (n === r && A(n)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return n.getNextSibling() === t;
}
function VE(e, t) {
  const n = t.anchor.getNode();
  if (n !== e)
    return jE(t, e, n);
  if (v(e)) {
    const r = zE(e);
    return t.anchor.offset < r;
  }
  return !0;
}
function Zl(e) {
  const t = e.getNumber(), n = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: n,
    verse: t != null && n.toString() !== t ? t : void 0
  };
}
function WE(e) {
  const t = ju(e);
  if (!(!t || ct(t)))
    return we(t) ? t : gc(t) ?? np(t);
}
function HE(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!E(t))
    return Zl(e);
  const n = Number.parseInt(e.getNumber() ?? "0", 10), r = n <= 1 ? 0 : n - 1;
  if (VE(e, t)) {
    const i = WE(e);
    return i ? Zl(i) : { verseNum: r };
  }
  return Zl(e);
}
function GE(e) {
  return TM(e) || gr(e);
}
function ep(e) {
  if (v(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(q) && e.setTextContent(`${t} `);
  }
}
function qk(e) {
  if (v(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Qu(e, t) {
  return e.getEditorState().read(() => !Q(t));
}
function JE(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), n = tp(t, e);
  let r;
  if (n) {
    const i = n.getParent();
    if (i && A(i) && A(t) && t === i && e.anchor.offset < n.getIndexWithinParent() && (r = n), !r && i && A(i)) {
      const s = i.getChildren(), o = n.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (we(c)) {
          r = c;
          break;
        }
      }
    }
    if (!r && i) {
      let s = mg(i);
      for (; s && !ct(s); ) {
        const o = hc(s);
        if (o) {
          r = o;
          break;
        }
        s = mg(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = hc(s);
      if (o) {
        r = o;
        break;
      }
      if (s = s.getNextSibling(), s && ct(s))
        break;
    }
  }
  return r ? (r.selectNext(0, 0), !0) : !1;
}
function YE(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), n = tp(t, e);
  let r;
  if (n) {
    const i = n.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (r = n), !r && i && A(i) && (r = Lk(i, n.getIndexWithinParent())), !r && i) {
      let o = yg(i);
      for (; o && !ct(o); ) {
        const a = gc(o);
        if (a) {
          r = a;
          break;
        }
        o = yg(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !ct(s); ) {
      const o = gc(s);
      if (o) {
        r = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return r ? (r.selectNext(0, 0), !0) : !1;
}
function mg(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const n = e.getTopLevelElement();
  return n && n !== e ? n.getNextSibling() : null;
}
function yg(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const n = e.getTopLevelElement();
  return n && n !== e ? n.getPreviousSibling() : null;
}
function tp(e, t) {
  if (A(e) && E(t) && t.anchor.key === e.getKey()) {
    const r = e.getChildAtIndex(t.anchor.offset);
    if (r && we(r))
      return r;
    const i = Lk(e, t.anchor.offset);
    if (i)
      return i;
    const s = hc(e);
    if (s)
      return s;
  }
  return np(e);
}
function np(e) {
  if (!e || ct(e))
    return;
  if (we(e))
    return e;
  let t = ju(e);
  for (; t; ) {
    if (ct(t))
      return;
    if (we(t))
      return t;
    const n = gc(t);
    if (n)
      return n;
    t = ju(t);
  }
}
const XE = ["style"], QE = ["style", "code"], mc = ["style", "cid"], ZE = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], eA = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], tA = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], nA = ["style", "caller", "category", "contents"], rA = ["tag", "marker", "contents"], iA = [
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
function sA(e, t) {
  const n = Q(e);
  if (!$n(n))
    return;
  const r = rp(n, "apply");
  if (r === void 0)
    return;
  const [i, ...s] = t;
  return [{ retain: r }, ...i ? [i] : [], { delete: 1 }, ...s];
}
function rp(e, t = "delta-doc") {
  if (!e)
    return;
  const n = Hc();
  let r = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of n) {
    const l = c.node;
    for (let f = i.length - 1; f >= 0; f--)
      if (js(i[f], c)) {
        const d = i[f];
        if (i.splice(f, 1), r += 1, a && d.getKey() === a.getKey())
          return r - 1;
      }
    for (let f = s.length - 1; f >= 0; f--)
      js(s[f].node, c) && s.splice(f, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (jr(l) || $n(l))
        return r;
      yt(l) && (a = l);
    }
    if (yt(l) && (i.includes(l) || i.push(l)), Dk(l, t)) {
      if (l.getKey() === o)
        return r;
      s.push({ node: l, position: r }), r += 1;
      continue;
    }
    r += sp(l, t);
  }
  if (a)
    return r;
}
function bg(e, t, n = "delta-doc") {
  if (e.length < 2 || !cA(e[0]) || !aA(e[1]))
    return;
  const r = e[0].retain;
  return t.read(() => oA(r, n)?.getKey());
}
function oA(e, t = "delta-doc") {
  const n = Hc();
  let r = 0;
  const i = [], s = [];
  for (const o of n) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (js(i[u], o)) {
        const f = i[u];
        if (i.splice(u, 1), r === e)
          return f;
        r += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      js(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (yt(a) && (i.includes(a) || i.push(a)), Dk(a, t)) {
      if (r === e)
        return a;
      s.push({ node: a, position: r }), r += 1;
      continue;
    }
    const l = sp(a, t);
    if (jr(a) && l > 0 && e >= r && e < r + l || $n(a) && r === e)
      return a;
    r += l;
  }
  for (const o of i) {
    if (r === e)
      return o;
    r += 1;
  }
}
function js(e, t) {
  return e ? t ? !Fs(t.node, e.getKey()) : !0 : !1;
}
function jr(e) {
  return v(e) && !$n(e);
}
function $n(e) {
  return ct(e) || we(e) || ze(e) || L(e) || rt(e) || on(e);
}
function Zr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function aA(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && iA.includes(t);
}
function cA(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Dk(e, t) {
  return L(e) || rt(e) ? !0 : t === "apply" && A(e) && $n(e);
}
function Kk(e) {
  const t = e.getParent();
  return xn(e) && ye(t) && t.getFirstChild() === e;
}
function Zu(e) {
  const t = e.getParent();
  return t !== null && nt(t, je) !== null;
}
function lA(e) {
  const t = e.getParent();
  return D(t) && e.getTextContent() === $t && t.getChildrenSize() === 1;
}
function ip(e) {
  const t = Dn(e);
  if (!(!L(t) || !At(t)?.is(e)))
    return md(e.getTextContent(), t.getCaller());
}
function uA(e) {
  return !Fb(e) && // A caller's typed bytes are respelled as the content they settle into, never sent raw.
  ip(e) === void 0 && sp(e, "delta-doc") === e.getTextContentSize();
}
function sp(e, t) {
  if ($n(e))
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
    (ga(e) || Kk(e) || pe(e, ke) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    pe(e, ke) === "attribute" || Zu(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, and the empty-char placeholder. The
    // editable-mode note caller counts only its content bytes, below.
    n.startsWith(ld) || lA(e)))
      return 0;
    const r = t === "delta-doc" ? ip(e) : void 0;
    return r !== void 0 ? r.length : e.getTextContentSize();
  }
  return 0;
}
function ef(e, t) {
  const n = { insert: e.__text }, r = pe(e, oi);
  if (r && (n.attributes = { segment: r }), t && t.length > 0) {
    const i = Uk(t);
    i && (n.attributes = {
      ...n.attributes,
      char: i
    });
  }
  return n;
}
function kg(e) {
  const t = new As();
  return e.isEmpty() || e.read(() => {
    const n = _e();
    if (!n || n.isEmpty())
      return;
    const r = n.getChildren();
    if (r.length === 1 && _t(r[0]) && (!r[0].getChildren() || r[0].getChildrenSize() === 0))
      return;
    const i = fA();
    for (const s of i)
      t.push(s);
  }), t;
}
function al(e, t) {
  const n = [], r = es(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < r.length; c++) {
    const l = r[c].node;
    n.push(...xg(l, c, r, i, s, o, a));
  }
  for (const c of i)
    n.push(...xg(c, r.length, r, i, s, o, a));
  return n;
}
function fA() {
  return al();
}
function xg(e, t, n, r, i, s, o) {
  if (!e)
    return [];
  const a = [], c = n[t + 1];
  return dA(e, a, r), pA(e, a, i, s, o), hA(e, t, n, i, o, s, a), ct(e) && a.push(bA(e)), we(e) && a.push(xA(e)), ze(e) && a.push(TA(e)), on(e) && a.push(vA(e)), mA(e, a, s), gA(e, a, s), MA(c, s), a;
}
function dA(e, t, n) {
  if (!e.isInline()) {
    const r = n.pop();
    Ie(r) ? t.push(yA(r)) : ye(r) ? t.push(kA(r)) : _t(r) && t.push({ insert: Yo });
  }
  yt(e) && (n.includes(e) || n.push(e));
}
function pA(e, t, n, r, i) {
  if (!v(e) || $e(e) || on(e))
    return;
  const s = e.getParent();
  if (L(s) && s.getFirstChild() === e)
    return;
  const o = wn(e) !== void 0;
  if (N(e) && (o || Kk(e) || Zu(e) || Fb(e)) || pe(e, ke) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (rs(a))
    return;
  const c = ip(e);
  if (c !== void 0) {
    if (!c)
      return;
    a = c;
  }
  const l = e.getPreviousSibling(), u = D(s) ? s : void 0;
  o && u && l === u.getFirstChild() && (a = a.slice(Cd(e)));
  const f = a.startsWith(ld) || pe(e, ke) === "attribute" || Zu(e), d = !!u && a === $t && u.getChildrenSize() === 1, p = cl(e, r), h = p ? n.filter((y) => p.children.includes(y)) : n, g = ef(e, h);
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
function hA(e, t, n, r, i, s, o) {
  D(e) && !r.includes(e) && r.push(e);
  const a = n[t + 1];
  for (const c of r.toReversed())
    if (js(c, a)) {
      if (r.pop(), !i.has(c)) {
        const l = SA(c), u = cl(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function gA(e, t, n) {
  if (!L(e))
    return;
  const r = CA(e), i = cl(e, n), s = {
    node: e,
    children: es(e).map((o) => o.node),
    contentsOps: r.insert.note?.contents?.ops
  };
  n.push(s), i?.contentsOps ? i.contentsOps.push(r) : t.push(r);
}
function mA(e, t, n) {
  if (!rt(e))
    return;
  const r = _A(e), i = cl(e, n), s = {
    node: e,
    children: es(e).map((o) => o.node),
    contentsOps: r.insert.unknown?.contents?.ops
  };
  n.push(s), i?.contentsOps ? i.contentsOps.push(r) : t.push(r);
}
function mi(e, t) {
  const n = t.getUnknownAttributes();
  n && Object.assign(e, n);
}
function yA(e) {
  const t = { style: Ho, code: e.__code };
  return mi(t, e), { insert: Yo, attributes: { book: t } };
}
function bA(e) {
  const t = { style: oc, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), mi(t, e), { insert: { chapter: t } };
}
function kA(e) {
  const t = { style: e.__marker };
  return mi(t, e), { insert: Yo, attributes: { para: t } };
}
function xA(e) {
  const t = { style: sc, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), mi(t, e), { insert: { verse: t } };
}
function TA(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), mi(t, e), { insert: { milestone: t } };
}
function vA(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function CA(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), mi(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const n = { insert: { note: t } }, r = pe(e, oi);
  return r && (n.attributes = { segment: r }), n;
}
function SA(e) {
  const t = { insert: "" }, n = Uk([e]);
  return n && (t.attributes = { char: n }), t;
}
function _A(e) {
  const t = { tag: e.getTag() }, n = e.getMarker();
  return n && (t.marker = n), mi(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function cl(e, t) {
  for (let n = t.length - 1; n >= 0; n--) {
    const r = t[n];
    if (r.children.includes(e))
      return r;
  }
}
function MA(e, t) {
  for (let n = t.length - 1; n >= 0; n--)
    js(t[n].node, e) && t.splice(n, 1);
}
function Uk(e) {
  if (e.length === 0)
    return;
  const t = e.map(EA);
  return t.length === 1 ? t[0] : t;
}
function EA(e) {
  const t = { style: e.__marker }, n = pe(e, Bi);
  return n && (t.cid = n), mi(t, e), t;
}
function op(e) {
  let t = 0;
  for (const { node: n } of Hc())
    if (L(n)) {
      if (n.getKey() === e)
        return t;
      t += 1;
    }
}
function AA(e) {
  let t = 0;
  for (const { node: n } of Hc())
    if (L(n)) {
      if (t === e)
        return n;
      t += 1;
    }
}
const Bk = 1;
class An extends ca {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Bo, n = "", r, i) {
    super(i), this.__caller = t, this.__previewText = n, this.__onClick = r ?? (() => {
    });
  }
  static getType() {
    return hi;
  }
  static clone(t) {
    const { __caller: n, __previewText: r, __onClick: i, __key: s } = t;
    return new An(n, r, i, s);
  }
  static importDOM() {
    return {
      span: (t) => NA(t) ? {
        conversion: PA,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ap().updateFromJSON(t);
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
    const r = n.getKey(), i = n.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, r, i, () => wA(t, r), (l) => OA(t, r, s, l), () => $A(t, r), () => RA(t, r)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return P("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.getRenderedText() });
  }
  /** The text this caller shows on screen; empty when CSS generates the caller instead. */
  getRenderedText() {
    const t = this.getLatest(), n = t.getParent(), r = L(n) && n.getIsCollapsed();
    return t.__caller === Bo && r ? "" : t.__caller === jy && r ? "*" : t.__caller;
  }
  exportJSON() {
    return {
      type: this.getType(),
      caller: this.getCaller(),
      previewText: this.getPreviewText(),
      onClick: this.getOnClick(),
      version: Bk
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function PA(e) {
  const t = e.getAttribute("data-caller") ?? "", n = e.getAttribute("data-preview-text") ?? "";
  return { node: ap(t, n) };
}
function ap(e, t, n) {
  return bt(new An(e, t, n));
}
function NA(e) {
  return e ? e.classList.contains(An.getType()) : !1;
}
function Pt(e) {
  return e instanceof An;
}
function wA(e, t) {
  return e.getEditorState().read(() => {
    const n = Q(t);
    if (!L(n))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return n.getCaller();
  });
}
function OA(e, t, n, r) {
  e.update(() => {
    const i = Q(t);
    if (!L(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(r);
    const s = Q(n);
    if (!Pt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${n}`);
    s.setCaller(r);
  });
}
function $A(e, t) {
  return e.getEditorState().read(() => {
    const n = Q(t);
    if (!L(n))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return al(n);
  });
}
function RA(e, t) {
  return e.getEditorState().read(() => op(t));
}
const IA = [
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
], LA = ["†"], cp = "formatted", Fk = "unformatted", zk = "paragraph-structure", lp = "standard", jk = "block-verse", qA = {
  [cp]: "Formatted",
  [Fk]: "Unformatted",
  [zk]: "Paragraph Structure",
  [lp]: "Standard",
  [jk]: "Block Verse"
};
function as(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let up, fp;
function DA(e) {
  const t = dp(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  up = e, fp = t;
}
DA(cp);
const KD = () => up, ll = () => fp;
function dp(e) {
  let t;
  switch (e ?? up) {
    case cp:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Fk:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case zk:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case lp:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case jk:
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
function UD(e) {
  if (!e)
    return;
  const t = Tg(e);
  return Object.keys(qA).find((n) => Zn(Tg(dp(n)), t));
}
const KA = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function Tg(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, n]) => n !== void 0));
  return { ...KA, ...t };
}
function Ut(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: n, isFormattedFont: r, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && n && r && !i && !s;
}
function UA(e) {
  if (e)
    return Xo(e) ? Qt : e.markerMode === "editable" ? Vt : Qt;
}
function Xo(e) {
  return e?.verseLayout === "block";
}
function BA(e) {
  const t = [], n = e ?? fp;
  return n && (t.push(`${h_}${n.markerMode}`), n.hasSpacing && t.push(d_), n.isFormattedFont && t.push(p_)), t;
}
const FA = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function yc(e) {
  return FA.exec(e)?.[1] ?? e;
}
function No(e, t) {
  const n = e.jsonPath.slice(yc(e.jsonPath).length);
  return { ...e, jsonPath: `${Rt(t)}${n}` };
}
function Vk(e) {
  const t = [];
  let n = 0;
  for (const c of _e().getChildren())
    if (!On(c))
      if (Vi(c)) {
        const l = n;
        c.getChildren().filter((u) => !On(u)).forEach((u, f) => t.push({ node: u, blockPrefix: [l, f], blockBase: 0 })), n += 1;
      } else _t(c) ? (t.push({ node: c, blockPrefix: [], blockBase: n }), n += Wt(c, e).length) : (t.push({ node: c, blockPrefix: [n], blockBase: 0 }), n += 1);
  const r = [];
  let i = 0, s = 0, o = 0, a;
  for (const c of t) {
    const l = A(c.node) ? Wt(c.node, e).length : 0, u = pe(c.node, wk), f = _t(c.node), d = u === void 0 || u !== a;
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
function Wk(e, t) {
  return e.length >= t.length && t.every((n, r) => e[r] === n);
}
function Hk(e, t, n, r = !0) {
  const i = e.jsonPath.slice(yc(e.jsonPath).length);
  let s = Ln(yc(e.jsonPath));
  s.length === 1 && t.some((o) => o.blockPrefix.length === 2 && o.blockPrefix[0] === s[0]) && (s = [s[0], 0]);
  for (const o of t) {
    if (!Wk(s, o.blockPrefix))
      continue;
    const a = s.slice(o.blockPrefix.length);
    if (a.length === 0) {
      if (o.blockPrefix.length === 0)
        continue;
      return r && i === "" && A(o.node) && (!o.isSourceStart || _t(o.node)) ? Hk(n(o.node), t, n, !1) : No(e, o.usjPrefix);
    }
    if (!(a[0] < o.blockBase || a[0] >= o.blockBase + o.count))
      return No(e, [
        ...o.usjPrefix,
        a[0] - o.blockBase + o.usjBase,
        ...a.slice(1)
      ]);
  }
}
function zA(e, t, n) {
  for (const r of t) {
    if (r.usjPrefix.length === 0) {
      if (e < r.usjBase || e >= r.usjBase + r.count)
        continue;
      const o = e - r.usjBase + r.blockBase;
      return r.blockPrefix.length === 0 ? { jsonPath: "$", offset: o } : { jsonPath: Rt(r.blockPrefix), offset: o };
    }
    if (!r.isSourceStart || r.usjPrefix[0] !== e)
      continue;
    const [i, s] = r.blockPrefix;
    return s === void 0 ? { jsonPath: "$", offset: i } : { jsonPath: Rt([i]), offset: s };
  }
  return { jsonPath: "$", offset: Wt(_e(), n).length };
}
function vg(e, t, n) {
  const r = Ln(yc(e.jsonPath));
  if (r.length === 0)
    return Lr(e) ? zA(e.offset, t, n) : e;
  for (const i of t) {
    if (!Wk(r, i.usjPrefix))
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
          ...No(e, i.blockPrefix),
          offset: Math.min(o, i.count) + i.blockBase
        };
      }
      if (!i.isSourceStart)
        continue;
      return No(e, i.blockPrefix);
    }
    if (!(s[0] < i.usjBase || s[0] >= i.usjBase + i.count))
      return No(e, [
        ...i.blockPrefix,
        s[0] - i.usjBase + i.blockBase,
        ...s.slice(1)
      ]);
  }
}
function Qo(e, t, n) {
  let { start: r } = e, i = e.end ?? r;
  if (lx()) {
    const g = Ut(t), m = Vk(g), y = vg(r, m, g), k = i === r ? y : vg(i, m, g);
    if (!y || !k)
      return;
    r = y, i = k;
  }
  const s = !!n?.forAnnotation, o = _g(r, t, s), a = i === r ? o : _g(i, t, s), [c, l] = o.point, [u, f] = a.point;
  if (!c || !u || l === void 0 || f === void 0)
    return;
  let d = Mg(c, l), p = Mg(u, f);
  if (Li(i) && i.closingMarkerOffset === 0 && !Zn(i, r) && (p = aP(p[0], p[1], Ut(t))), n?.forAnnotation && i !== r) {
    const g = { edge: d, inside: o.insideDecorator }, m = { edge: p, inside: a.insideDecorator };
    [d, p] = jA(g, m), n.decoratorHolds && VA(g, m, n.decoratorHolds);
  }
  const h = Kr();
  return h.anchor = tn(d[0].getKey(), d[1], of(d[0])), h.focus = tn(p[0].getKey(), p[1], of(p[0])), h;
}
function jA(e, t) {
  const { inside: n } = e, { inside: r } = t;
  if (!n && !r)
    return [e.edge, t.edge];
  const { sameDecorator: i, reversed: s } = Gk(e, t), [o, a] = s ? [t, e] : [e, t], c = o.inside ? tf(o.inside, o.inside.before >= o.inside.total, o.edge) : o.edge;
  if (i && n?.before === r?.before)
    return [c, c];
  const l = a.inside ? tf(a.inside, a.inside.before > 0, a.edge) : a.edge;
  return s ? [l, c] : [c, l];
}
function VA(e, t, n) {
  const { inside: r } = e, { inside: i } = t;
  if (!r && !i)
    return;
  const { sameDecorator: s, reversed: o } = Gk(e, t), [a, c] = o ? [i, r] : [r, i], l = (u, f, d) => {
    d > f && n.set(u.decorator.getKey(), { start: f, end: d });
  };
  a && l(a, a.before, s && c ? c.before : a.total), c && !s && l(c, 0, c.before);
}
function Gk(e, t) {
  const { inside: n } = e, { inside: r } = t;
  return n && r && n.decorator.is(r.decorator) ? { sameDecorator: !0, reversed: r.before < n.before } : { sameDecorator: !1, reversed: WA(t, e) };
}
function tf(e, t, n) {
  const [r, i] = ei(e.decorator, t);
  return r && i !== void 0 ? [r, i] : n;
}
function WA(e, t) {
  const n = ({ edge: s, inside: o }) => {
    const [a, c] = o ? tf(o, !1, s) : s;
    return tn(a.getKey(), c, of(a));
  }, r = n(e), i = n(t);
  return r.isBefore(i) ? !0 : i.isBefore(r) ? !1 : !e.inside && !!t.inside;
}
function ul(e) {
  const t = w();
  if (!t || !E(t))
    return;
  const n = lx() ? Vk(Ut(e)) : void 0, r = (u, f) => {
    const d = It(u, f, e);
    return n ? Hk(d, n, (p) => It(p, 0, e)) : d;
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
}, HA = new Map(Object.values(ni).flatMap((e) => e ? [[e.markerName, e.keyName]] : [])), Cg = {
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
}, GA = (
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  Object.keys(Cg).filter((e) => Cg[e])
), JA = /([^\s="|]+)="([^"]*)"/g, YA = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function Jk(e, t) {
  return `${e}['${t}']`;
}
function Ri(e) {
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
function pp(e) {
  const t = Sr(e);
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
function fl(e, t, n, r = (i) => i) {
  const i = [];
  for (const s of e.slice(t).matchAll(JA)) {
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
function XA(e, t) {
  const n = YA.exec(e);
  if (!n)
    return [];
  const r = n[1], i = n[0].length - r.length - 2, s = HA.get(r) ?? r, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: n[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${r}*`);
  return a > n[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function hp(e) {
  if (kn(e)) {
    const t = cx(e), n = e.getTextContent();
    if (ze(t) && (n === "\\*" || n.startsWith(Je(t.getMarker()))))
      return t;
  }
  return Dn(e) ?? e;
}
function QA(e) {
  const t = e.getTextContentSize(), n = pp(e);
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
        spans: n.role === "closer" ? wo() : Ri(1)
      };
  }
  const r = e.getMarkerSyntax();
  return {
    owner: hp(e),
    length: t,
    spans: r === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      Ri(e.getNested() ? 2 : 1)
    ) : wo()
  };
}
function ZA(e) {
  const t = e.getTextContent(), n = t.length, r = pp(e);
  if (r?.kind === "optbreak")
    return {
      owner: r.owner,
      length: n,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = hp(e);
  if (Ie(i)) {
    const s = Je(i.getMarker()).length;
    if (t.startsWith(Je(i.getMarker())))
      return {
        owner: i,
        length: n,
        spans: [
          ...Ri(1),
          { start: s + 1, base: 0, bytes: { kind: "property", property: "code" } }
        ]
      };
  }
  if (rt(i)) {
    const s = Zc(i.getTag(), i.getMarker(), i.getUnknownAttributes());
    if (s.closing !== "" && t === s.closing)
      return { owner: i, length: n, spans: wo() };
    if (s.opening !== "" && t === s.opening)
      return { owner: i, length: n, spans: Ri(1) };
  }
  return {
    owner: i,
    length: n,
    spans: t.endsWith("*") ? wo() : Ri(t.startsWith("\\+") ? 2 : 1)
  };
}
function eP(e) {
  const t = pp(e);
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
        ...fl(i, 1, D(n) ? Zs(n.getMarker()) : void 0)
      ]
    };
  if (r === "milestone" && ze(n))
    return { owner: n, length: s, spans: Yk(n.getMarker(), i) };
}
function Yk(e, t) {
  return [
    { start: 0, base: e.length, bytes: { kind: "property", property: "marker" } },
    ...fl(t, 2, da(e))
  ];
}
function tP(e) {
  const t = e.getTextContent(), n = t.length, r = e.getParent();
  if (!rt(r)) {
    const s = cx(e);
    return ze(s) ? { owner: s, length: n, spans: Yk(s.getMarker(), t) } : void 0;
  }
  const i = XA(t, (r.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: r, length: n, spans: i };
  if (t.startsWith("|"))
    return {
      owner: r,
      length: n,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        // The bytes spell an attribute the way USFM names it, which is not always USJ's name for it.
        ...fl(t, 1, void 0, (s) => F0(r.getTag(), s))
      ]
    };
}
function Sg(e, t) {
  const n = Je(e);
  if (t.startsWith(n))
    return [
      ...Ri(1),
      { start: n.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function rn(e) {
  if (N(e))
    return QA(e);
  if (kn(e))
    return ZA(e);
  if (Dt(e) && e.getTextType() === "attribute")
    return tP(e);
  if (e.getType() === hi) {
    const r = e.getParent();
    return L(r) ? {
      owner: r,
      length: r.getCaller().length,
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if ($e(e)) {
    const r = Sg(e.getMarker(), e.getTextContent());
    return r ? { owner: e, length: e.getTextContentSize(), spans: r } : void 0;
  }
  if (!v(e))
    return;
  if (on(e))
    return { owner: e, length: e.getTextContentSize(), spans: Ri(1) };
  if (pe(e, ke) === "attribute")
    return eP(e);
  const t = e.getParent();
  if (Ne(t) && gi(t)?.is(e)) {
    const r = Sg(t.getMarker(), e.getTextContent());
    return r ? { owner: t, length: e.getTextContentSize(), spans: r } : void 0;
  }
  const n = Dn(e);
  if (L(n) && At(n)?.is(e))
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
  return kn(e) || Dt(e) && e.getTextType() === "attribute" || e.getType() === hi;
}
function dl(e) {
  const t = [];
  if (($e(e) || on(e)) && t.push(e), A(e)) {
    const n = Ne(e) ? gi(e) : void 0, r = L(e) ? At(e) : void 0;
    for (const i of e.getChildren())
      r && (r.is(i) || i.isParentOf(r)) ? t.push(r) : (N(i) || kn(i) || Dt(i) && i.getTextType() === "attribute" || i.getType() === hi || n?.is(i)) && t.push(i);
  }
  if (ze(e))
    for (let n = e.getNextSibling(); n && yi(n); n = n.getNextSibling())
      (!kn(n) || hp(n).is(e)) && t.push(n);
  for (const n of GA) {
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
function nf(e, t, n) {
  const r = rn(e);
  if (!r || r.spans.length === 0)
    return;
  const i = Math.max(0, Math.min(t, r.length));
  let s = r.spans[0];
  for (const c of r.spans) {
    if (c.start > i)
      break;
    s = c;
  }
  const o = s.base + (i - s.start), a = Rt(hn(r.owner));
  switch (s.bytes.kind) {
    case "marker":
      return { jsonPath: a };
    case "closingMarker":
      return { jsonPath: a, closingMarkerOffset: o };
    case "property":
      return {
        jsonPath: Jk(a, s.bytes.property),
        propertyOffset: o
      };
    case "attributeKey":
      return { jsonPath: a, keyName: s.bytes.keyName, keyOffset: o };
    case "attributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName, keyClosingMarkerOffset: o };
    case "precedingText":
      return nP(e, n);
  }
}
function rf(e, t) {
  return v(e) && !rn(e) && !Rs(e, 0, t);
}
function nP(e, t) {
  let n = e;
  for (let o = n.getParent(); !n.getPreviousSibling() && ae(o); )
    n = o, o = n.getParent();
  let r = n.getPreviousSibling();
  for (; r && rf(r, t); )
    r = r.getPreviousSibling();
  if (!r)
    return;
  const i = A(r) ? r.getLastDescendant() : r;
  if (i && (v(i) || yi(i)))
    return rf(i, t) ? void 0 : tr(i, i.getTextContentSize(), t);
  const s = r.getParent();
  if (s)
    return tr(s, r.getIndexWithinParent() + 1, t);
}
function ys(e, t, n) {
  for (const r of dl(e)) {
    const i = rn(r);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!Wi(o.bytes, t))
          continue;
        const a = gp(i, s);
        if (!(n < o.base || n > a))
          return [r, o.start + (n - o.base)];
      }
  }
}
function gp(e, t) {
  const n = e.spans[t], r = e.spans[t + 1];
  return r ? n.base + (r.start - n.start) - 1 : n.base + (e.length - n.start);
}
function Rn(e, t) {
  const n = Ut(t);
  if (Lr(e)) {
    const r = Ln(e.jsonPath);
    let i = _e();
    for (let s = 0; s < r.length; s++) {
      if (!i || !A(i))
        return [void 0, void 0];
      const o = Wt(i, n)[r[s]];
      if (!o)
        return [void 0, void 0];
      if (o.type === "text")
        return s !== r.length - 1 ? [void 0, void 0] : LM(o, e.offset) ?? Eg(e, n) ?? [void 0, void 0];
      i = o.node;
    }
    return i && A(i) ? Rn(mp(i, r, e.offset, n), t) : [void 0, void 0];
  }
  if (Lo(e) || Li(e) || qo(e)) {
    const r = Eg(e, n);
    if (r)
      return r;
  }
  if (Do(e) || Bc(e)) {
    const r = Ai(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const { keyName: i } = e, s = Do(e) ? ys(r, { kind: "attributeKey", keyName: i }, e.keyOffset) : ys(r, { kind: "attributeMarker", keyName: i }, 0);
    if (s)
      return s;
    const o = tu(r, i);
    if (o)
      return o;
    const a = hP(r, i);
    return a || (ze(r) ? ei(r, !1) : eu(r));
  }
  if (qo(e)) {
    const r = Ai(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const i = ys(r, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return i || (tu(r, e.keyName) ?? eu(r));
  }
  if (Qf(e)) {
    const r = Ai(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const i = ys(r, { kind: "marker" }, 0);
    if (i)
      return i;
    const s = A(r) ? r.getFirstChild() : null;
    return s && v(s) ? [s, 0] : ei(r, !1);
  }
  if (Li(e)) {
    const r = Ai(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const i = ys(r, { kind: "closingMarker" }, e.closingMarkerOffset);
    if (i)
      return i;
    const s = yp(r);
    if (s !== void 0 && e.closingMarkerOffset >= s)
      return ei(r, !0);
    if (!A(r))
      return ei(r, !1);
    const o = r.getLastChild();
    return o && v(o) ? [o, o.getTextContent().length] : [r, r.getChildrenSize()];
  }
  if (Lo(e)) {
    const r = Xk(e.jsonPath), i = Ai(e.jsonPath, n);
    if (!i || r === void 0)
      return [void 0, void 0];
    const s = { kind: "property", property: r };
    if (r === "number" && $e(i) && e.propertyOffset === i.getNumber().length && nx(i) && lP(i) && !rx(i))
      return [i, i.getTextContentSize()];
    const o = ys(i, s, e.propertyOffset);
    if (o)
      return o;
    const a = gP(i, s, e.propertyOffset);
    if (a)
      return a;
    const c = tu(i, r);
    if (c)
      return c;
    if (A(i)) {
      if (!rP.has(r))
        return eu(i);
      const u = i.getFirstChild();
      return u && v(u) ? [u, 0] : [i, 0];
    }
    const l = mP(i, r);
    return ei(i, l !== void 0 && e.propertyOffset >= l.length);
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${SS(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Xk(e) {
  const t = /\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/.exec(e);
  return t?.[1] ?? t?.[2] ?? t?.[3];
}
const rP = /* @__PURE__ */ new Set([
  "marker",
  "code",
  "caller",
  "category"
]);
function sf(e, t) {
  const n = e.length - e.trimStart().length, r = Math.max(n, e.trimEnd().length);
  return { before: Math.min(Math.max(t, n), r) - n, total: r - n };
}
function _g(e, t, n) {
  const r = Rn(e, t), [i, s] = r;
  if (n && !Lr(e)) {
    const c = Ai(e.jsonPath, Ut(t)), l = c && iP(c, e);
    if (l)
      return l.before > 0 ? { point: r, insideDecorator: l } : { point: r };
  }
  if (i && s !== void 0 && s > 0 && yi(i)) {
    const c = nl(i);
    return {
      point: r,
      insideDecorator: { decorator: i, ...sf(c, s) }
    };
  }
  if (Lr(e))
    return { point: r };
  const o = Ai(e.jsonPath, Ut(t));
  if (!gr(o) && !Gr(o))
    return { point: r };
  const a = sP(o, e);
  return a && a.before > 0 ? { point: r, insideDecorator: a } : { point: r };
}
function Qk(e) {
  const t = e.getFirstChild();
  if (!t || !kn(t))
    return;
  const n = rn(t);
  if (n?.spans[0]?.bytes.kind !== "marker" || !n.owner.is(e) || !e.getChildren().every((c) => yi(c) || v(c) && On(c)))
    return;
  const i = Zs(e.getMarker()), s = er(e.getUnknownAttributes() ?? {}, i);
  if (!s)
    return;
  const o = fl(s, 1, i);
  if (!dl(e).some((c) => rn(c)?.spans.some((l) => o.some((u) => Wi(l.bytes, u.bytes)))))
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
function iP(e, t) {
  const n = D(e) ? Qk(e) : void 0, r = n && Zk(t);
  if (!n || !r)
    return;
  let i = 0, s;
  for (const { text: o, spans: a } of n.pieces) {
    const c = { spans: a, length: o.length };
    if (s === void 0) {
      const l = a.findIndex((u, f) => Wi(u.bytes, r.bytes) && r.offset >= u.base && r.offset <= gp(c, f));
      if (l >= 0) {
        const u = a[l].start + (r.offset - a[l].base);
        s = i + sf(o, u).before;
      }
    }
    i += sf(o, 0).total;
  }
  return s === void 0 ? void 0 : { decorator: n.decorator, before: s, total: i };
}
function sP(e, t) {
  const n = Zk(t);
  if (!n)
    return;
  const r = ex(e), i = r.findIndex((a) => Wi(a.bytes, n.bytes));
  if (i < 0)
    return;
  const s = r.reduce((a, c) => a + c.length, 0), o = r.slice(0, i).reduce((a, c) => a + c.length, 0) + Math.min(Math.max(n.offset, 0), r[i].length);
  return { decorator: e, before: o, total: s };
}
function Zk(e) {
  if (Do(e))
    return {
      bytes: { kind: "attributeKey", keyName: e.keyName },
      offset: e.keyOffset
    };
  if (Bc(e))
    return { bytes: { kind: "attributeMarker", keyName: e.keyName }, offset: 0 };
  if (qo(e))
    return {
      bytes: { kind: "closingAttributeMarker", keyName: e.keyName },
      offset: e.keyClosingMarkerOffset
    };
  if (Qf(e))
    return { bytes: { kind: "marker" }, offset: 0 };
  if (Lo(e)) {
    const t = Xk(e.jsonPath);
    return t === void 0 ? void 0 : { bytes: { kind: "property", property: t }, offset: e.propertyOffset };
  }
}
function ex(e) {
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
    c !== void 0 && (n.push(t({ kind: "attributeMarker", keyName: a }, "\\"), t({ kind: "attributeKey", keyName: a }, o), t({ kind: "property", property: a }, c)), r && a === "pubnumber" || n.push(t({ kind: "closingAttributeMarker", keyName: a }, at(o))));
  }
  return n;
}
function oP(e) {
  if (gr(e) || Gr(e))
    return ex(e).map(({ text: r }) => r).join("");
  const t = e.getParent(), n = D(t) ? Qk(t) : void 0;
  return n?.decorator.is(e) ? n.pieces.map(({ text: r }) => r.trim()).join("") : nl(e).trim();
}
function Mg(e, t) {
  if (!yi(e))
    return [e, t];
  const n = e.getParent();
  if (!n || !A(n))
    return [e, t];
  const r = e.getIndexWithinParent();
  if (r < 0)
    return [e, t];
  const i = e.getTextContentSize(), s = t >= i && t > 0 || t === i - 1 && tx.test(e.getTextContent());
  return [n, s ? r + 1 : r];
}
const tx = /[ \u00A0]$/;
function aP(e, t, n) {
  let r;
  if (A(e))
    r = t > 0 ? e.getChildAtIndex(t - 1) : null;
  else if (t === 0)
    r = e.getPreviousSibling();
  else
    return [e, t];
  let i = !1;
  for (; v(r) && !rn(r) && !Rs(r, 0, n); )
    r = r.getPreviousSibling(), i = !0;
  if (!i)
    return [e, t];
  const s = r?.getParent();
  if (r && s && yi(r))
    return [s, r.getIndexWithinParent() + 1];
  const o = A(r) ? r.getLastDescendant() : r;
  return v(o) ? [o, o.getTextContentSize()] : [e, t];
}
function of(e) {
  return A(e) ? "element" : "text";
}
function Ai(e, t) {
  const n = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = n ? n[1] : e, i = Ln(r);
  let s = _e();
  for (const o of i) {
    if (!s || !A(s))
      return;
    const a = Wt(s, t)[o];
    s = a?.type === "element" ? a.node : void 0;
  }
  return s;
}
function It(e, t, n) {
  return tr(e, t, Ut(n));
}
function tr(e, t, n) {
  const r = v(e) ? Dd(e) : void 0;
  if (v(e) && r && t > r.start) {
    const s = Rs(e, t, n);
    if (s)
      return {
        jsonPath: Rt([...hn(s.parent), s.index]),
        offset: s.offset
      };
  }
  if (v(e) && t > 0 && t === e.getTextContentSize() && nx(e)) {
    const s = cP(e, n);
    if (s)
      return s;
  }
  const i = nf(e, t, n);
  if (i)
    return i;
  if (ae(e)) {
    const s = e.getChildrenSize(), o = e.getChildAtIndex(Math.min(t, s - 1));
    if (v(o)) {
      const c = t >= s ? o.getTextContentSize() : 0;
      return tr(o, c, n);
    }
    if (o && t > 0 && t < s) {
      const c = sx(e, t, n);
      if (c)
        return c;
    }
    const a = e.getParent();
    if (a) {
      const c = e.getIndexWithinParent(), l = t > 0 ? c + 1 : c;
      return tr(a, l, n);
    }
  }
  if (A(e)) {
    const s = e.getChildAtIndex(t), o = s && ix(s);
    if (o) {
      const l = nf(o, 0, n);
      if (l)
        return l;
    }
    if (s && yi(s))
      return {
        jsonPath: Rt(hn(e))
      };
    const a = t > 0 ? e.getChildAtIndex(t - 1) : null;
    if (!s && a && ax(a, e))
      return Va(e, !0, n);
    if (ct(e) || On(e))
      return Va(e, t > 0, n);
    const c = _t(e) && yn(e.getParent()) ? e.getParentOrThrow() : e;
    return ox(c, Ps(e, t, n), n);
  }
  if (v(e)) {
    if (t < to(e)) {
      const c = e.getPreviousSibling();
      if (N(c))
        return tr(c, c.getTextContentSize(), n);
    }
    const s = Rs(e, t, n);
    if (s)
      return {
        jsonPath: Rt([
          ...hn(s.parent),
          s.index
        ]),
        offset: s.offset
      };
    const o = t > 0;
    let a = o ? e.getNextSibling() : e.getPreviousSibling();
    for (; ae(a); )
      a = o ? a.getFirstChild() : a.getLastChild();
    if (v(a) && (rn(a) || Rs(a, 0, n)))
      return tr(a, o ? 0 : a.getTextContentSize(), n);
  }
  return Va(e, t > 0, n);
}
function nx(e) {
  if (!tx.test(e.getTextContent()))
    return !1;
  if ($e(e))
    return !0;
  const t = Dn(e);
  return L(t) && !!At(t)?.is(e);
}
function cP(e, t) {
  let n = e;
  for (let s = n.getParent(); !n.getNextSibling() && ae(s); s = n.getParent())
    n = s;
  const r = n.getNextSibling();
  if (!r) {
    const s = n.getParent();
    return !s || rx(n) ? void 0 : tr(s, s.getChildrenSize(), t);
  }
  const i = A(r) ? r.getFirstDescendant() ?? r : r;
  if (!(rf(i, t) || rn(i)?.spans[0]?.bytes.kind === "precedingText"))
    return tr(i, 0, t);
}
function lP(e) {
  let t = e;
  for (let n = t.getParent(); !t.getNextSibling() && ae(n); n = t.getParent())
    t = n;
  return !t.getNextSibling();
}
function rx(e) {
  for (let t = e; t; t = t.getParent())
    if (t.getNextSibling())
      return !1;
  return !0;
}
function ix(e) {
  if (rn(e))
    return e;
  if (!je(e))
    return;
  const t = e.getFirstDescendant();
  return t && rn(t) ? t : void 0;
}
function sx(e, t, n) {
  for (let r = t; r < e.getChildrenSize(); r++) {
    const i = e.getChildAtIndex(r);
    if (!i)
      return;
    const s = ix(i);
    if (s)
      return nf(s, 0, n);
    if (v(i) && Rs(i, 0, n))
      return tr(i, 0, n);
    if (v(i) || On(i))
      continue;
    const o = qM(i, n);
    if (o)
      return ox(o.parent, o.point, n);
  }
}
function ox(e, t, n) {
  const r = hn(e);
  return t.type === "text" ? {
    jsonPath: Rt([...r, t.index]),
    offset: t.offset
  } : mp(e, r, t.index, n);
}
function ax(e, t) {
  const n = rn(e);
  return !!n && n.owner.is(t) && n.spans[0]?.bytes.kind === "closingMarker";
}
function Va(e, t, n) {
  const r = e.getParent();
  if (!r)
    return { jsonPath: Rt(hn(e)) };
  const i = e.getIndexWithinParent() + (t ? 1 : 0);
  if (ae(r)) {
    if (i > 0 && i < r.getChildrenSize()) {
      const s = sx(r, i, n);
      if (s)
        return s;
    }
    return Va(r, i > 0, n);
  }
  return tr(r, i, n);
}
function mp(e, t, n, r) {
  const i = Wt(e, r), s = i[n];
  if (!s)
    return uP(e, t, i, r);
  const o = Rt([...t, n]);
  return s.type === "text" ? { jsonPath: o, offset: 0 } : { jsonPath: o };
}
function uP(e, t, n, r) {
  if (yn(e))
    return bc(e, t, 1, r);
  if (yp(e) !== void 0) {
    const o = n.length - 1, a = n[o];
    return a?.type === "text" ? {
      jsonPath: Rt([...t, o]),
      offset: a.length
    } : {
      jsonPath: Rt(t),
      closingMarkerOffset: 0
    };
  }
  const i = Dn(e), s = t[t.length - 1];
  return fP(e) || !i || s === void 0 ? bc(e, t, 0, r) : mp(i, t.slice(0, -1), s + 1, r);
}
function bc(e, t, n, r) {
  const i = Rt(t), s = yp(e);
  if (s !== void 0)
    return {
      jsonPath: i,
      closingMarkerOffset: s + n
    };
  if (A(e)) {
    const l = Wt(e, r), u = l.length - 1, f = l[u], d = [...t, u];
    if (f?.type === "text")
      return { jsonPath: Rt(d), offset: f.length + n };
    if (f)
      return bc(f.node, d, n, r);
  }
  const o = (l, u) => ({
    jsonPath: Jk(i, l),
    propertyOffset: u.length + n
  }), a = (l, u) => ({
    jsonPath: i,
    keyName: l,
    keyClosingMarkerOffset: at(u).length + n
  });
  if (we(e))
    return e.getPubnumber() !== void 0 ? a("pubnumber", "vp") : e.getAltnumber() !== void 0 ? a("altnumber", "va") : o("number", e.getNumber());
  if (ct(e)) {
    const l = e.getPubnumber();
    return l !== void 0 ? o("pubnumber", l) : e.getAltnumber() !== void 0 ? a("altnumber", "ca") : o("number", e.getNumber());
  }
  if (Ie(e))
    return o("code", e.getCode());
  if (L(e))
    return o("caller", e.getCaller());
  const c = rt(e) ? e.getMarker() : dP(e);
  return c === void 0 ? { jsonPath: i } : o("marker", c);
}
function yp(e) {
  if (D(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : at(e.getMarker(), Qc(e)).length;
  if (L(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : at(e.getMarker()).length;
  if (ze(e))
    return at("").length;
  if (rt(e)) {
    const { closing: t } = Zc(e.getTag(), e.getMarker(), e.getUnknownAttributes());
    return t === "" ? void 0 : t.length;
  }
}
function fP(e) {
  const t = Dn(e);
  return ye(e) || _t(e) || Ie(e) || _k(e) || rt(e) && e.getTag() === "table:row" || yn(t) || Vi(t);
}
function dP(e) {
  if (ye(e) || D(e) || ze(e) || _k(e) || oE(e))
    return e.getMarker();
}
function eu(e) {
  if (A(e)) {
    const n = e.getLastChild();
    let r = n;
    for (; r && pP(r, e); )
      r = r.getPreviousSibling();
    if (r !== n)
      return v(r) && !rn(r) ? [
        r,
        On(r) ? 0 : r.getTextContentSize()
      ] : [e, r ? r.getIndexWithinParent() + 1 : 0];
    if (n && v(n))
      return [
        n,
        !rn(n) && On(n) ? 0 : n.getTextContentSize()
      ];
  }
  const t = e.getNextSibling();
  return t && A(t) ? [t, 0] : ei(e, !0);
}
function pP(e, t) {
  return Ud(e) || je(e) || Dt(e) && e.getTextType() === "attribute" || ax(e, t);
}
function hP(e, t) {
  for (const n of dl(e)) {
    const r = rn(n);
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
function gP(e, t, n) {
  for (const r of dl(e)) {
    if (!yi(r))
      continue;
    const i = rn(r);
    if (!i?.owner.is(e))
      continue;
    const s = i.spans.findIndex((o) => Wi(o.bytes, t));
    if (!(s < 0))
      return n > gp(i, s) ? [r, i.spans[s + 1]?.start ?? i.length] : void 0;
  }
}
function tu(e, t) {
  if (!L(e) || t !== ni.cat?.keyName)
    return;
  const n = e.getChildren().find((s) => s.getType() === hi);
  if (!n)
    return;
  const [r, i] = ei(n, !0);
  return r && i !== void 0 ? [r, i] : void 0;
}
function ei(e, t) {
  const n = e.getParent();
  return n ? [n, e.getIndexWithinParent() + (t ? 1 : 0)] : [void 0, void 0];
}
function mP(e, t) {
  if (we(e) || ct(e)) {
    if (t === "number")
      return e.getNumber();
    if (t === "altnumber")
      return e.getAltnumber();
    if (t === "pubnumber")
      return e.getPubnumber();
    if (t === "marker")
      return e.getMarker();
  }
  if (ze(e) && t === "marker")
    return e.getMarker();
}
function Eg(e, t) {
  const n = _e(), r = bc(n, [], 1, t);
  if (Ag(r) !== Ag(e))
    return;
  const i = n.getLastChild();
  if (!A(i))
    return [n, n.getChildrenSize()];
  const s = i.getLastDescendant();
  if (v(s))
    return [s, s.getTextContentSize()];
  if (A(s))
    return [s, s.getChildrenSize()];
  const o = s?.getParent() ?? i;
  return [o, o.getChildrenSize()];
}
function Ag(e) {
  return JSON.stringify(Object.entries(e).sort(([t], [n]) => t.localeCompare(n)));
}
function cx(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!On(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function hn(e) {
  const t = [];
  let n = e;
  for (; n; ) {
    const r = Dn(n);
    if (!r)
      break;
    const i = IM(r, n);
    i >= 0 && t.unshift(i), n = r;
  }
  return t;
}
function lx() {
  for (let e = _e().getFirstChild(); e; e = e.getNextSibling())
    if (Vi(e))
      return !0;
  return !1;
}
function Vs(e) {
  return Dt(e) && Ie(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function ux(e) {
  const t = ma(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function bp(e) {
  if (e.isCollapsed())
    return !1;
  const t = e.isBackward() ? e.focus : e.anchor, n = t.getNode();
  if (!(yn(n) && t.offset === 0 || Ie(n.getTopLevelElement())))
    return !1;
  const i = e.getNodes().find(Vs);
  if (!i)
    return !1;
  const s = i.getParent();
  if (!Ie(s))
    return !1;
  const o = ux(s);
  return t.set(o.key, o.offset, o.type), !0;
}
function Wa(e) {
  const t = w();
  if (!E(t))
    return !1;
  if (t.isCollapsed()) {
    const { anchor: n } = t;
    if (n.type === "text") {
      const i = n.getNode();
      if (!(e ? n.offset === 0 : v(i) && n.offset === i.getTextContentSize()))
        return !1;
    }
    const r = e ? Qb(t) : Rd(t);
    return Vs(r);
  }
  return bp(t) && t.isCollapsed();
}
function yP(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const n = nt(t.anchor.getNode(), Ie);
  if (!n || !Vs(n.getFirstChild()))
    return !1;
  if (t.modify("extend", e, "lineboundary"), t.isCollapsed())
    return Wa(e) || t.deleteCharacter(e), !0;
  if (t.getNodes().some(Vs)) {
    const r = ux(n);
    t.focus.set(r.key, r.offset, r.type);
  }
  return t.isCollapsed() || t.removeText(), !0;
}
function Ra() {
  const e = w();
  return E(e) && bp(e), !1;
}
function bP() {
  const e = w();
  if (!E(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const n = t.getNode();
  return !Ie(n) || !Vs(n.getFirstChild()) ? !1 : (cr(n, 1), !0);
}
function kP(e) {
  const t = e.getChildren(), n = `\\${e.getMarker()}`, r = t.findIndex((s) => kn(s) && s.getTextContent().startsWith(n));
  if (r <= 0)
    return;
  let i = t[r];
  for (const s of t.slice(0, r))
    i.insertAfter(s), i = s;
}
function xP() {
  const [e] = Se();
  return G(() => e.registerCommand(Vc, (t) => (TP(t), !1), qi), [e]), G(() => it(
    e.registerCommand(Wc, Wa, Qe),
    e.registerCommand(ed, Wa, Qe),
    e.registerCommand(tc, Wa, Qe),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(tc, yP, vr),
    // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
    // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
    // too, so this must match the top priority to have any guarantee of running before them —
    // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
    // not control. Always returns `false` (never claims the command), so running before or after
    // another CRITICAL handler that also returns `false` changes nothing either way; it only
    // matters relative to a handler that would itself remove the prefix.
    e.registerCommand(la, Ra, Xe),
    e.registerCommand(nr, Ra, Xe),
    e.registerCommand(or, Ra, Xe),
    // REMOVE_TEXT_COMMAND is how drag-move deletion and composition-driven deletes reach a
    // non-collapsed selection — neither goes through DELETE_CHARACTER_COMMAND — so it needs the
    // same narrowing the other three selection-replacing commands get above.
    e.registerCommand(_y, Ra, Xe)
  ), [e]), G(() => it(
    // Below `DecoratorBoundarySelectionPlugin` (CRITICAL), which can itself produce `(book, 0)`
    // when it snaps a caret that landed inside the prefix glyph to the glyph's leading edge; above
    // the listeners that report the caret's position (e.g. `OnSelectionChangePlugin`, LOW), so
    // they only ever see the corrected one. Never claims the command.
    e.registerCommand(bn, () => (bP(), !1), Qe),
    e.registerNodeTransform(Nn, kP)
  ), [e]), null;
}
function TP(e) {
  if (vP(e.target))
    return;
  const t = w();
  E(t) && CP(t);
}
function cs(e) {
  let t = e.getFirstChild(), n = 0;
  for (; t !== null; )
    if (xn(t))
      n++, t = t.getNextSibling(), v(t) && t.getTextContent() === q && (n++, t = t.getNextSibling());
    else if (we(t))
      n++, t = t.getNextSibling();
    else
      break;
  return n === 0 ? !1 : (cr(e, n), !0);
}
function vP(e) {
  if (!My(e))
    return !1;
  const t = Zi(e);
  if (!$0(t))
    return !1;
  const n = t.getParent();
  return n ? Ct(n) ? cs(n) : (cr(n, t.getIndexWithinParent() + 1), !0) : !1;
}
function CP(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const n = Q(t.key);
  if (!yt(n))
    return !1;
  const r = n.getFirstChild();
  return !kn(r) && !gr(r) ? !1 : cs(n);
}
function SP(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function fx(e, t, n, r, i, s, o) {
  if (!Ze.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = n ? Qo(n, i) : w();
  if (!E(a))
    return;
  if (dx(a)) {
    o?.warn("$insertNote: a note cannot be inserted in a chapter line");
    return;
  }
  const c = AP(a, e, r, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? SP(e, s), u = px(e, l, c, i, s, void 0, void 0);
  return EP(u, a, i), u;
}
function kp(e) {
  return e !== "expanded";
}
function _P(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const n = t.getNode();
  if (!v(n) || !D(n.getParent()))
    return;
  if (N(n))
    return t.offset === 0 && n.getMarkerSyntax() === "closing" ? n : void 0;
  if (t.offset !== n.getTextContentSize())
    return;
  const r = n.getNextSibling();
  return N(r) && r.getMarkerSyntax() === "closing" ? r : void 0;
}
function dx(e) {
  return [e.anchor, e.focus].some((t) => {
    const n = t.getNode();
    return Ne(n) || Ne(n.getParent());
  });
}
function MP(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e, n = t.getNode();
  if (t.type === "text") {
    if (t.offset !== 0 || !N(n))
      return;
    const i = n.getParent();
    return Ct(i) && i.getFirstChild()?.is(n) ? i : void 0;
  }
  if (!yn(n))
    return;
  const r = n.getChildAtIndex(t.offset);
  return Ct(r) ? r : void 0;
}
function EP(e, t, n) {
  if (dx(t))
    return;
  const r = kp(n?.noteMode);
  e.setIsCollapsed(r), t.isCollapsed() || SM(t), Qd(t);
  const i = MP(t);
  if (i && cs(i)) {
    const o = w();
    E(o) && (t = o);
  }
  zn(t);
  const s = _P(t);
  s ? (s.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), r || e.getChildren().reverse().find(D)?.selectEnd();
}
function bs(e, t, n) {
  const r = Ur(e);
  r.setUnknownAttributes({ closed: "false" });
  const i = n?.markerMode === "editable";
  i ? r.append(qt(e)) : n?.markerMode === "visible" && r.append(Br("marker", Je(e)));
  const s = t === "" ? $t : i ? q + t : t;
  return r.append(Ue(s)), r;
}
function AP(e, t, n, r, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = n ?? {}, u = i.chapterVerseSeparator ?? ":", f = i.verseRangeSeparator ?? "-", d = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => f)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (d !== void 0 && o.push(bs("fr", d, r)), !e.isCollapsed()) {
        const p = Ng(e);
        p.length > 0 && o.push(bs("fq", p, r));
      }
      o.push(bs("ft", "", r));
      break;
    case "x":
    case "ex":
      if (d !== void 0 && o.push(bs("xo", d, r)), !e.isCollapsed()) {
        const p = Ng(e);
        p.length > 0 && o.push(bs("xq", p, r));
      }
      o.push(bs("xt", "", r));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function px(e, t, n, r, i, s, o) {
  const a = o === "false", c = a ? !1 : kp(r?.noteMode), l = hd(e, t, c);
  s && Xt(l, oi, () => s);
  const u = r?.isNoteShellEditable === !1;
  let f, d;
  r?.markerMode === "editable" ? (f = qt(e), u && f.setMode("token"), a || (d = qt(e, "closing"), u && d.setMode("token"))) : r?.markerMode === "visible" && (f = Br("marker", Je(e) + " "), a || (d = Br("marker", at(e))));
  let p;
  if (f && l.append(f), r?.markerMode === "editable" && !c)
    p = Ue(Et(l.__caller)).toggleUnmergeable(), u && p.setMode("token"), l.append(p, ...n);
  else {
    const h = () => zi(), g = n.flatMap(LP(h));
    if (t === "")
      l.append(...g);
    else {
      const m = Id(n);
      let y = () => {
      };
      i?.noteCallerOnClick && (y = i.noteCallerOnClick), p = ap(l.__caller, m, y), l.append(p, h(), ...g);
    }
  }
  return d && l.append(d), l;
}
function Tr(e) {
  if (typeof e == "string") {
    const t = Q(e);
    return L(t) ? t : void 0;
  }
  return AA(e);
}
function Ha(e, t) {
  const n = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(n), n) {
    const r = e.getPreviousSibling();
    if (gr(r) || !r) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      r.selectEnd();
  } else {
    const r = e.getChildren(), i = r.slice().reverse().find(D);
    if (i)
      PP(i);
    else {
      const s = xp(e), o = s === -1 ? r.length : s;
      e.select(o, o);
    }
  }
}
function xp(e) {
  const t = e.getChildrenSize() - 1, n = e.getLastChild();
  return N(n) && n.getMarkerSyntax() === "closing" || kn(n) && n.getTextContent() === at(e.getMarker()) ? t : -1;
}
function PP(e) {
  const t = xp(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const n = e.getChildAtIndex(t - 1);
  v(n) && !On(n) ? n.selectEnd() : e.select(t, t);
}
function hx(e, { isContentChange: t = !1 } = {}) {
  const n = e.getNextSibling();
  if (v(n) && !ba(n)) {
    n.select(0, 0);
    return;
  }
  const r = e.getParent();
  if (!r)
    return;
  const i = e.getIndexWithinParent() + 1;
  r.canBeEmpty() ? r.select(i, i) : Tp(r, i, { announce: !t });
}
function Tp(e, t, { announce: n = !0 } = {}) {
  const r = e.getChildAtIndex(t - 1);
  if (!L(r) || r.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const i = Kr();
  i.anchor.set(e.getKey(), t, "element"), i.focus.set(e.getKey(), t, "element"), zn(i), n && Lt().dispatchCommand(bn, void 0);
}
function Pg(e, t, n) {
  const r = At(e), i = NP(e, r);
  if (n && mx(i, t, n, gx(e, r)))
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
function NP(e, t) {
  const n = [];
  for (const { node: r } of es(e))
    !v(r) || nt(r, je) || (vp(r, t) ? n.push({ node: r, isGlyph: !1, dataStart: Cd(r) }) : wP(r, e) && n.push({ node: r, isGlyph: !0, dataStart: 0 }));
  return n;
}
function wP(e, t) {
  return on(e) ? !0 : N(e) && !t.is(e.getParent());
}
function gx(e, t) {
  return (n) => {
    let r = n;
    for (; !r.getPreviousSibling(); ) {
      const o = r.getParent();
      if (!o || o.is(e))
        return;
      r = o;
    }
    const i = r.getPreviousSibling(), s = A(i) ? i.getLastDescendant() : i;
    if (v(s) && (t?.is(s) || vp(s, t)))
      return s;
  };
}
function mx(e, t, n, r) {
  let i = 0, s = 0;
  for (const { node: o, isGlyph: a, dataStart: c } of e) {
    if (!a) {
      const l = o.getTextContentSize() - c;
      if (i += l, l > 0 && (s = 0), i > t)
        return !1;
      continue;
    }
    if (i === t && s === n.index)
      return OP(o, n.offset, r), !0;
    s += 1;
  }
  return !1;
}
function OP(e, t, n) {
  const r = e.getTextContentSize(), i = e.isToken() ? r : Math.min(Math.max(t, 0), r), s = i === 0 ? n(e) : void 0;
  if (s) {
    const o = s.getTextContentSize();
    s.select(o, o);
  } else
    e.select(i, i);
}
function $P(e, t, n) {
  const { opener: r, value: i, closer: s } = ha(e);
  if (!i)
    return !1;
  const o = RP(i);
  if (n) {
    const c = [];
    r && c.push({ node: r, isGlyph: !0, dataStart: 0 }), c.push({ node: i, isGlyph: !1, dataStart: o }), s && c.push({ node: s, isGlyph: !0, dataStart: 0 });
    const l = At(e);
    if (mx(c, t, n, gx(e, l)))
      return !0;
  }
  const a = Math.min(o + Math.max(t, 0), i.getTextContentSize());
  return i.select(a, a), !0;
}
function RP(e) {
  return e.getTextContent().startsWith(q) ? q.length : 0;
}
function vp(e, t) {
  return !v(e) || On(e) || ba(e) ? !1 : !t || !e.is(t);
}
function IP(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(D))
    return;
  const t = At(e);
  for (const { node: r } of es(e))
    if (vp(r, t))
      return;
  const n = xp(e);
  return n === -1 ? e.getChildrenSize() : n;
}
function LP(e) {
  return (t) => Dt(t) ? [t] : [t, e()];
}
function qP(e) {
  const t = e.getParent();
  return t !== null && nt(t, L) !== null;
}
function Ng(e) {
  if (!E(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const n = t[0], r = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = td(e);
  let a = "";
  for (const c of t)
    if (!(L(c) || Pt(c) || qP(c)) && !N(c) && !on(c) && pe(c, ke) !== "attribute") {
      if (we(c)) {
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
const pl = [
  An,
  Qt,
  ...NE
], DP = [
  ro,
  ...pl
], KP = pi((e, t) => {
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
function UP() {
  const [e, t] = Re(void 0), [n, r] = Re(), i = re(null), s = Ae((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = XS(l, c, () => {
      QS(l, c, {
        placement: "bottom-start",
        middleware: [ZS(), e_()]
      }).then((u) => {
        r(u.placement), t((f) => f?.x === u.x && f?.y === u.y ? f : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = Ae(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return G(() => o, [o]), { coords: e, placement: n, updatePosition: s, cleanup: o };
}
function BP({ isOpen: e, floatingBoxRef: t }) {
  const { coords: n, updatePosition: r, cleanup: i, placement: s } = UP();
  return G(() => {
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
const FP = bS(KP);
function yx({ isOpen: e = !1, children: t }) {
  const n = re(null), { coords: r, placement: i } = BP({ isOpen: e, floatingBoxRef: n }), s = ft(() => r ? typeof t == "function" ? t : () => t : () => null, [t, r]);
  return Ni(
    P(FP, { ref: n, coords: r, style: r ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const bx = vy(void 0);
function Cp() {
  const e = Cy(bx);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function zP(e, t) {
  const [n, r] = Re(0), [i, s] = Re(-1), o = ft(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: n,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = Ae(() => {
    r((f) => {
      const d = o.length;
      return d ? (f - 1 + d) % d : 0;
    });
  }, [o.length]), l = Ae(() => {
    r((f) => {
      const d = o.length;
      return d ? (f + 1) % d : 0;
    });
  }, [o.length]), u = Ae(() => {
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
function jP({ children: e, menuItems: t, onSelectOption: n, ...r }) {
  const i = zP(t, n);
  return P(bx.Provider, { value: i, children: P("div", { ...r, children: e }) });
}
const kx = pi(({ index: e, children: t, onMouseEnter: n, onClick: r, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Cp(), u = Ae((d) => {
    l(), c(-1), r?.(d);
  }, [r, l, c]), f = Ae((d) => {
    a(e), n?.(d);
  }, [e, a, n]);
  return P("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: f, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function VP({ children: e, autoIndex: t = !0, ...n }) {
  const r = re(null), { state: { activeIndex: i, menuItems: s } } = Cp(), o = ft(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = ft(() => {
    const c = o(s);
    return t ? kS.map(c, (l, u) => xS(l) && l.type === kx && l.props.index === void 0 ? TS(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return G(() => {
    if (r.current) {
      const c = r.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), f = l.getBoundingClientRect();
        f.bottom > u.bottom ? c.scrollTop += f.bottom - u.bottom : f.top < u.top && (c.scrollTop -= u.top - f.top);
      }
    }
  }, [i]), P("div", { ref: r, role: "menu", ...n, children: a });
}
const WP = (e, t, n) => Ga(e, n).toLowerCase().includes(t.toLowerCase()), wg = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Ga = (e, t) => {
  const n = e[t];
  return typeof n == "string" ? n : String(n);
};
function HP(e) {
  const { query: t, items: n, filterBy: r, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, f;
  i ? (f = i, u = n.length > 0 ? wg(n[0]) : "") : (u = r || (n.length > 0 ? wg(n[0]) : ""), f = (h, g) => WP(h, g, u));
  const d = s || u, p = /* @__PURE__ */ new Map();
  return n.filter((h) => {
    try {
      return f(h, t);
    } catch (g) {
      return console.warn("Error filtering item:", h, g), !1;
    }
  }).sort((h, g) => {
    const m = (x) => (p.has(x) || p.set(x, Ga(x, d).toLowerCase()), p.get(x) ?? ""), y = a ? Ga(h, d) : m(h), k = a ? Ga(g, d) : m(g);
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
const nu = {
  Root: jP,
  Options: VP,
  Option: kx
};
function GP(e) {
  const { query: t, items: n, filterBy: r, filter: i, sortBy: s, sortingOptions: o } = e;
  return ft(() => HP({
    query: t,
    items: n,
    filterBy: r,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, n, r, i, s, o]);
}
function JP() {
  const { moveUp: e, moveDown: t, select: n } = Cp();
  return ft(() => ({
    moveUp: e,
    moveDown: t,
    select: n
  }), [e, t, n]);
}
const YP = () => {
  const e = JP(), [t] = Se();
  G(() => {
    const n = (r) => {
      const s = {
        ArrowDown: () => e?.moveDown(),
        ArrowUp: () => e?.moveUp(),
        Enter: () => e?.select(),
        Tab: () => e?.select()
      }[r.key];
      return s ? (s(), r.preventDefault(), r.stopPropagation(), !0) : !1;
    };
    return t.registerCommand(Er, n, Qe);
  }, [t, e]);
};
function XP() {
  return YP(), null;
}
const QP = ["Shift", "Control", "Alt", "Meta"];
function xx(e) {
  const { options: t, onSelectOption: n, onClose: r, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = Se(), u = s !== void 0, [f, d] = Re(""), p = u ? s ?? "" : f, h = GP({ query: p, items: t, filterBy: "name" }), g = (m) => {
    r?.(), n ? n(m) : m.action(l);
  };
  return G(() => {
    a?.(p, h);
  }, [a, p, h]), G(() => l.registerCommand(Er, (m) => {
    if (u || c?.includes(m.key) || QP.includes(m.key))
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
  }, Qe), [l, u, p, o, r, c]), tt(nu.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (m) => g(m), children: [!u && P("input", { value: p, type: "text", disabled: !0 }), P(XP, {}), P(nu.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (m) => m.map((k, x) => tt(nu.Option, { index: x, children: [P("span", { className: "label", children: k.label ?? k.name }), P("span", { className: "description", children: k.description })] }, k.name)) })] });
}
function ZP({ trigger: e, items: t }) {
  const [n] = Se(), [r, i] = Re(!1), s = Ae((o) => {
    o.key === "Escape" && r ? (i(!1), n.focus()) : o.key === e && !r && (o.preventDefault(), i(!0));
  }, [n, e, r]);
  return G(() => n.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [n, s]), G(() => n.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = w();
      if (E(l))
        return l;
    });
    a.read(() => {
      const l = w();
      !E(l) || c?.is(l) || i(!1);
    });
  }), [n]), t && P(yx, { isOpen: r, children: ({ placement: o }) => P(xx, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function e1({ scriptureReference: e, contextMarker: t, getMarkerAction: n }) {
  return { markersMenuItems: ft(() => {
    if (!t || !e)
      return;
    const i = Cr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = Cr(o), { action: c } = n(o, a);
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
function t1(e, t) {
  const n = is(e);
  if (gr(e) || Gr(e)) {
    const o = 1 + e.getMarker().length + 1, a = e.getNumber();
    if (e.getShowMarker())
      return t < o + a.length ? t : void 0;
    if (t < o || t >= o + a.length)
      return;
    const c = n.indexOf(a);
    return c < 0 ? "drawn" : c + t - o;
  }
  const r = nl(e), i = r.length - r.trimStart().length, s = r.trim().length;
  if (!(t >= s))
    return r === n ? i + t : "drawn";
}
function n1() {
  return typeof CSS > "u" || typeof Highlight > "u" || !("highlights" in CSS) ? void 0 : { registry: CSS.highlights, create: () => new Highlight() };
}
const Og = /* @__PURE__ */ new Map(), r1 = ["background-color", "color", "text-shadow"], i1 = [
  "text-decoration-line",
  "text-decoration-style",
  "text-decoration-color",
  "text-decoration-thickness"
], s1 = /* @__PURE__ */ new Set(["solid", "double", "dotted", "dashed", "wavy"]);
function o1(e, t) {
  const n = e.ownerDocument.defaultView;
  if (!n)
    return [];
  const r = n.getComputedStyle(e), i = n.getComputedStyle(t), s = (u) => {
    const f = r.getPropertyValue(u);
    return f && f !== i.getPropertyValue(u) ? f : void 0;
  }, o = [];
  for (const u of r1) {
    const f = s(u);
    f && o.push(`${u}: ${f}`);
  }
  const a = r.getPropertyValue("text-decoration-line");
  let c = !1;
  if (a) {
    if (a !== "none" && s("text-decoration-line")) {
      c = !0;
      for (const u of i1) {
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
    o.push("text-decoration-line: underline", `text-decoration-style: ${s1.has(l) ? l : "solid"}`);
    const u = r.getPropertyValue("border-bottom-color");
    u && o.push(`text-decoration-color: ${u}`);
    const f = r.getPropertyValue("border-bottom-width");
    f && o.push(`text-decoration-thickness: ${f}`);
  }
  return o;
}
const a1 = Math.random().toString(36).slice(2, 10);
let c1 = 0;
class l1 {
  api;
  probeParent;
  prefix = `editor-annotation-${a1}-${c1++}`;
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
      const i = ru(r.classNames), s = this.byClassSet.get(i);
      !s || (n.some((a) => a.range === r.range && ru(a.classNames) === i) || s.highlight.delete(r.range), --s.uses > 0) || (this.api.registry.delete(s.name), Og.delete(s.name), this.byClassSet.delete(i), this.queueRender());
    }
  }
  dispose() {
    for (const t of [...this.byLeaf.keys()])
      this.clearLeaf(t);
    this.disposed = !0, this.observer?.disconnect(), this.style?.remove(), this.probes?.remove();
  }
  use(t) {
    const n = ru(t);
    let r = this.byClassSet.get(n);
    if (!r) {
      const i = `${this.prefix}-${this.nextName++}`, s = this.api.create();
      s.priority = this.nextName, r = { name: i, classNames: t, highlight: s, uses: 0 }, this.byClassSet.set(n, r), this.api.registry.set(i, s), Og.set(i, t), this.queueRender();
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
      this.measured.set(c, o1(l, i));
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
    this.style?.isConnected || (this.style = n.createElement("style"), this.style.setAttribute(Tx, this.prefix), n.head.append(this.style)), this.style.textContent !== a && (this.style.textContent = a);
  }
  /**
   * Whether any style rule's selector names one of `classNames`. Errs toward yes: a substring match
   * counts, and every class set counts while any rule cannot be read.
   */
  isNamedByRule(t, n) {
    this.rules || (this.rules = h1(vx(t)), this.ruleCounts = $g(t));
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
    !t || $g(t) === this.ruleCounts || this.forgetStyles();
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
        if (af(o.target))
          return !0;
        const a = [...o.addedNodes, ...o.removedNodes];
        return a.length > 0 && a.every(af);
      };
      i.every(s) || this.forgetStyles();
    }), this.observer.observe(t.head, { childList: !0, characterData: !0, subtree: !0 });
    const r = { attributes: !0, attributeFilter: ["class", "style", "data-theme"] };
    this.observer.observe(t.documentElement, r), t.body && this.observer.observe(t.body, r);
  }
}
const Tx = "data-editor-annotation-highlights";
function af(e) {
  for (let t = e; t; t = t.parentNode)
    if (u1(t) && t.hasAttribute(Tx))
      return !0;
  return !1;
}
function u1(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function vx(e) {
  const t = "adoptedStyleSheets" in e ? e.adoptedStyleSheets : [];
  return [...e.styleSheets, ...t].filter((n) => !n.ownerNode || !af(n.ownerNode));
}
function $g(e) {
  return vx(e).map((t) => {
    try {
      return t.cssRules.length;
    } catch {
      return -1;
    }
  }).join(",");
}
function f1(e) {
  return "cssRules" in e;
}
function d1(e) {
  return "styleSheet" in e;
}
function p1(e) {
  return "selectorText" in e && typeof e.selectorText == "string";
}
function h1(e) {
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
      p1(o) && t.push(o.selectorText), d1(o) && (o.styleSheet ? r(o.styleSheet) : n = !0), f1(o) && r(o);
  };
  for (const i of e)
    r(i);
  return { selectors: t.join(`
`), unreadable: n };
}
function ru(e) {
  return JSON.stringify([...e].sort());
}
function Rg(e, t, n) {
  const r = e.ownerDocument, i = r.createTreeWalker(e, NodeFilter.SHOW_TEXT), s = r.createRange();
  let o = 0, a = !1;
  for (let c = i.nextNode(); c; c = i.nextNode()) {
    const l = c.textContent?.length ?? 0;
    if (!a && t < o + l && (s.setStart(c, t - o), a = !0), a && n <= o + l)
      return s.setEnd(c, n - o), s;
    o += l;
  }
}
function g1(e, t, n) {
  return "getClientRects" in e ? Array.from(e.getClientRects()).some((r) => t >= r.left && t <= r.right && n >= r.top && n <= r.bottom) : !1;
}
function Cx(e) {
  return v(e) ? e.getTextContent() : is(e);
}
function Oo(e) {
  return Cx(e).length;
}
function m1(e, t) {
  if (v(e)) {
    if (vn(e))
      return !0;
    if (gk(e)) {
      const [i, s] = Bd(e);
      return t < i || t >= s;
    }
    return t < to(e);
  }
  const [n, r] = rl(is(e));
  return t < n || t >= r;
}
function iu(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (A(t) && !t.isInline())
      return t.getKey();
}
function y1(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getFirstChild();
    if (!n)
      return t;
    t = n;
  }
  return t;
}
function Ig(e) {
  for (let t = e; t; t = t.getParent()) {
    const n = t.getNextSibling();
    if (n)
      return y1(n);
  }
}
function Sx(e) {
  return A(e) ? e.getChildren().flatMap(Sx) : [e];
}
const b1 = 64;
function k1(e, t) {
  const n = /* @__PURE__ */ new Map(), r = (o, a, c) => {
    for (let l = a; l < c; l++)
      if (!m1(o, l))
        return !1;
    return c > a && n.set(o.getKey(), [a, c]), !0;
  };
  if (e.leaf.is(t.leaf))
    return r(e.leaf, e.end, t.start) ? n : void 0;
  const i = iu(e.leaf);
  if (i !== iu(t.leaf) || !r(e.leaf, e.end, Oo(e.leaf)))
    return;
  let s = Ig(e.leaf);
  for (let o = 0; s && !s.is(t.leaf); o++, s = Ig(s))
    if (o >= b1 || iu(s) !== i || Tn(s) && Oo(s) === 0 || !r(s, 0, Oo(s)))
      return;
  if (s)
    return r(t.leaf, 0, t.start) ? n : void 0;
}
function x1(e) {
  const t = [...e].sort(([r], [i]) => r - i), n = [];
  for (const [r, i] of t) {
    const s = n[n.length - 1];
    s && r <= s[1] ? s[1] = Math.max(s[1], i) : n.push([r, i]);
  }
  return n;
}
function T1(e, t, n, r) {
  const i = [];
  for (const a of n) {
    const c = Q(a);
    if (c?.isAttached())
      for (const l of Ir(c)) {
        if (l.type !== e || l.id !== t || l.undisplayed)
          continue;
        const u = l.start === l.end;
        i.push({
          leaf: c,
          start: u ? 0 : l.start,
          end: u ? Oo(c) : l.end,
          inMark: !1
        });
      }
  }
  for (const a of r) {
    const c = Q(a);
    if (!(!ae(c) || !c.isAttached()))
      for (const l of Sx(c))
        i.push({ leaf: l, start: 0, end: Oo(l), inMark: !0 });
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
      for (const [u, [f, d]] of k1(a, l) ?? [])
        o(u, f, d);
  });
  for (const [a, c] of s)
    s.set(a, x1(c));
  return s;
}
function v1(e, t) {
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
const C1 = "display-annotation", S1 = [
  ot,
  Hn,
  Vt,
  Gn,
  An,
  Qt,
  Kn,
  hr
], _x = /* @__PURE__ */ new Set();
function Un(e, t) {
  return JSON.stringify([e, t]);
}
function _1(e) {
  return Array.isArray(e) && e.length === 2 && typeof e[0] == "string" && typeof e[1] == "string";
}
function go(e) {
  const t = JSON.parse(e);
  if (!_1(t))
    throw new Error(`not an annotation index key: ${e}`);
  return t;
}
function Mx(e) {
  Xt(e, tl, void 0), A(e) && e.getChildren().forEach(Mx);
}
const su = /* @__PURE__ */ new WeakMap();
function M1(e) {
  jM({
    holdableText: oP,
    renderedOffset: t1
  });
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
  let c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
  const u = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakSet(), d = new AbortController(), p = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Set();
  let S, _ = !1;
  const U = n1(), B = U ? new l1(U, () => e.getRootElement()?.parentElement ?? null) : void 0;
  let V = /* @__PURE__ */ new Set();
  const ne = e._config.theme;
  function se(I) {
    return (t.get(I)?.size ?? 0) + (r.get(I)?.size ?? 0);
  }
  function W(I, j, J) {
    let Y = I.get(j);
    Y || I.set(j, Y = /* @__PURE__ */ new Set()), Y.add(J);
  }
  function he(I, j, J) {
    const Y = I.get(j);
    Y?.delete(J) && (Y.size === 0 && I.delete(j), se(j) === 0 && V.add(j));
  }
  function be(I) {
    for (const [j, J] of Object.entries(I.getTypedIDs()))
      for (const Y of J)
        He(Un(j, Y), j, Y);
  }
  function He(I, j, J) {
    const Y = /* @__PURE__ */ new Set([
      ...r.get(I) ?? [],
      ...t.get(I) ?? []
    ]), ue = Array.from(Y, (ee) => Q(ee)).filter((ee) => ee !== null && ee.isAttached() && // A holder inside another holder is already in that one's text.
    !ee.getParents().some((ce) => Y.has(ce.getKey())));
    if (ue.length === 0)
      return;
    ue.sort((ee, ce) => ee.isBefore(ce) ? -1 : 1);
    const te = ue.map((ee) => ae(ee) ? ee.getTextContent() : Ir(ee).filter((ce) => ce.type === j && ce.id === J).map((ce) => Wu(ee, ce)).join("")).join("");
    o.set(I, te);
  }
  function $(I, j, J) {
    return g.get(I)?.has(j) ? y.has(I) ? !0 : (B?.leafHighlights(I) ?? []).some((Y) => Y.annotations.includes(j) && g1(Y.range, J.clientX, J.clientY)) : !1;
  }
  function Z(I, j) {
    const J = /* @__PURE__ */ new Map();
    for (const Y of Ir(I)) {
      const ue = Un(Y.type, Y.id);
      J.has(ue) || !$(I.getKey(), ue, j) || J.set(ue, { annotation: Y, text: Wu(I, Y) });
    }
    return J;
  }
  function Te(I, j, J) {
    e.getEditorState().read(() => {
      const Y = Zi(I);
      if (!Y)
        return;
      const ue = J === "leave" ? /* @__PURE__ */ new Map() : Z(Y, j), te = (ce, { annotation: fe, text: Be }) => fc(e, fe.type, fe.id)?.[ce]?.(j, fe.type, fe.id, Be);
      if (J === "onClick") {
        ue.forEach((ce) => te("onClick", ce));
        return;
      }
      const ee = p.get(I) ?? /* @__PURE__ */ new Map();
      for (const [ce, fe] of ee)
        ue.has(ce) || te("onMouseLeave", fe);
      for (const [ce, fe] of ue)
        ee.has(ce) || te("onMouseEnter", fe);
      p.set(I, ue);
    }, { editor: e });
  }
  function Pe(I) {
    const j = {}, J = /* @__PURE__ */ new Set();
    for (const Y of I) {
      const [ue, te] = go(Y), ee = j[ue] ??= [];
      ee.includes(te) || ee.push(te), k.get(Y)?.forEach((ce) => J.add(ce));
    }
    return Object.keys(j).length === 0 ? [] : [
      ...rb(ne, j),
      C1,
      ...J
    ].flatMap((Y) => Y.match(/\S+/g) ?? []);
  }
  function Oe(I, j) {
    const J = u.get(I) ?? [];
    Ba(I, ...J.filter((Y) => !j.includes(Y))), So(I, ...j), u.set(I, j);
  }
  function Gt(I) {
    if (f.has(I))
      return;
    f.add(I);
    const { signal: j } = d;
    I.addEventListener("click", (J) => Te(I, J, "onClick"), { signal: j }), I.addEventListener("mouseenter", (J) => Te(I, J, "move"), { signal: j }), I.addEventListener("mousemove", (J) => Te(I, J, "move"), { signal: j }), I.addEventListener("mouseleave", (J) => Te(I, J, "leave"), {
      signal: j
    });
  }
  function Cn(I) {
    const j = Q(I), J = e.getElementByKey(I), Y = g.get(I), ue = m.get(I);
    if (ue && ue !== J && Oe(ue, []), x.delete(I), !j || !J || !Y || Y.size === 0) {
      J && Oe(J, []), B?.clearLeaf(I), m.delete(I), y.delete(I);
      return;
    }
    m.set(I, J);
    const te = new Map([...Y].map((De) => [
      De,
      h.get(De)?.get(I) ?? []
    ])), ee = Ir(j).length > 0, ce = Cx(j);
    let fe = v1(ce.length, te);
    if (!fe.whole && !B && (fe = ee ? { whole: !0 } : { whole: !1, segments: [] }), ee && Gt(J), fe.whole) {
      B?.clearLeaf(I), y.add(I), Oe(J, Pe(Y));
      return;
    }
    if (y.delete(I), Oe(J, []), !B)
      return;
    const Be = [];
    for (const { start: De, end: an, annotations: _n } of fe.segments) {
      const wr = Rg(J, De, an);
      wr ? Be.push({
        classNames: Pe(_n),
        annotations: _n,
        range: wr,
        text: ce.slice(De, an)
      }) : x.add(I);
    }
    B.setLeaf(I, Be);
  }
  function Le(I) {
    if (x.has(I))
      return !0;
    const j = e.getElementByKey(I);
    return (B?.leafHighlights(I) ?? []).some(({ range: J, text: Y }) => !j || !j.contains(J.startContainer) || !j.contains(J.endContainer) || J.toString() !== Y);
  }
  function me() {
    return [...x, ...B?.leafKeys() ?? []].filter(Le);
  }
  function F() {
    _ || e.getEditorState().read(() => new Set(me()).forEach(Cn), { editor: e });
  }
  function le(I) {
    S?.disconnect(), S = void 0;
    const j = I?.ownerDocument.defaultView;
    !I || !j || !B || (S = new j.MutationObserver(F), S.observe(I, { childList: !0, characterData: !0, subtree: !0 }));
  }
  function Me(I) {
    const j = /* @__PURE__ */ new Set();
    for (const Y of I)
      g.has(Y) && j.add(Y);
    const J = /* @__PURE__ */ new Set([...t.keys(), ...h.keys()]);
    for (const [Y, ue] of r)
      ue.size >= 2 && J.add(Y);
    for (const Y of J) {
      const [ue, te] = go(Y), ee = T1(ue, te, t.get(Y) ?? [], r.get(Y) ?? []), ce = h.get(Y) ?? /* @__PURE__ */ new Map();
      for (const fe of /* @__PURE__ */ new Set([...ce.keys(), ...ee.keys()]))
        JSON.stringify(ce.get(fe)) !== JSON.stringify(ee.get(fe)) && j.add(fe);
      for (const fe of ce.keys()) {
        if (ee.has(fe))
          continue;
        const Be = g.get(fe);
        Be?.delete(Y), Be?.size === 0 && g.delete(fe);
      }
      for (const fe of ee.keys()) {
        let Be = g.get(fe);
        Be || g.set(fe, Be = /* @__PURE__ */ new Set()), Be.add(Y);
      }
      ee.size > 0 ? h.set(Y, ee) : h.delete(Y);
    }
    for (const [Y, ue] of m)
      e.getElementByKey(Y) !== ue && j.add(Y);
    for (const Y of me())
      j.add(Y);
    for (const Y of j)
      Cn(Y);
  }
  function Ye(I) {
    _ || e.getEditorState().read(() => Me(I), { editor: e });
  }
  function ut(I, j) {
    const J = Un(I, j), Y = [], ue = (te) => {
      const ee = te.ownerDocument.createRange();
      ee.selectNodeContents(te), Y.push(ee);
    };
    for (const te of r.get(J) ?? []) {
      const ee = e.getElementByKey(te);
      ee && ue(ee);
    }
    for (const [te, ee] of h.get(J) ?? []) {
      const ce = e.getElementByKey(te);
      if (ce) {
        if (y.has(te) || !B) {
          ue(ce);
          continue;
        }
        for (const [fe, Be] of ee) {
          const De = Rg(ce, fe, Be);
          De && Y.push(De);
        }
      }
    }
    return Y.sort((te, ee) => te.compareBoundaryPoints(Range.START_TO_START, ee));
  }
  function xt(I, j, J, Y) {
    const ue = Un(I, j), te = k.get(ue) ?? /* @__PURE__ */ new Set();
    te.has(J) !== Y && (Y ? te.add(J) : te.delete(J), te.size > 0 ? k.set(ue, te) : k.delete(ue), Ye(h.get(ue)?.keys() ?? []));
  }
  function Sn(I) {
    e.getEditorState().read(() => {
      const j = /* @__PURE__ */ new Set();
      for (const [J, Y] of I) {
        const ue = Y === "destroyed" ? null : Q(J), te = ue ? Ir(ue) : [], ee = n.get(J) ?? [];
        for (const { type: ce, id: fe } of ee) {
          const Be = Un(ce, fe);
          j.add(Be), te.some((De) => De.type === ce && De.id === fe) || he(t, Be, J);
        }
        for (const ce of te) {
          const fe = Un(ce.type, ce.id);
          j.add(fe), W(t, fe, J);
        }
        te.length > 0 ? n.set(J, te) : n.delete(J);
        for (let ce = ue?.getParent(); ce; ce = ce.getParent())
          ae(ce) && be(ce);
      }
      for (const J of j) {
        const [Y, ue] = go(J);
        He(J, Y, ue);
      }
    }, { editor: e });
  }
  function ie(I) {
    e.getEditorState().read(() => {
      for (const [j, J] of I) {
        const Y = J === "destroyed" ? null : Q(j), ue = ae(Y) ? Y : void 0, te = ue ? Object.entries(ue.getTypedIDs()) : [], ee = te.flatMap(([fe, Be]) => Be.map((De) => Un(fe, De)));
        for (const fe of i.get(j) ?? [])
          ee.includes(fe) || (he(r, fe, j), ue || l.set(fe, [...l.get(fe) ?? [], j]));
        for (const fe of ee)
          W(r, fe, j);
        if (ee.length > 0 ? i.set(j, ee) : i.delete(j), !ue)
          continue;
        be(ue);
        const ce = ue.getTypedOnRemoves();
        for (const [fe, Be] of te)
          for (const De of Be) {
            const an = ce[fe]?.[De];
            an && s.set(Un(fe, De), an);
          }
      }
    });
  }
  function Ce(I, j, J) {
    xk(e, j, J), s.delete(I), o.delete(I);
  }
  function Nr() {
    for (const [I, j] of J_(e))
      qe(I, j);
  }
  function qe(I, j) {
    const J = Un(I, j);
    a.add(J), c.add(J);
  }
  function yr() {
    a.clear(), Y_(e);
    for (const I of /* @__PURE__ */ new Set([...s.keys(), ...o.keys()])) {
      if (se(I) > 0)
        continue;
      const [j, J] = go(I);
      Ce(I, j, J);
    }
  }
  function ge({ tags: I }) {
    Nr();
    const j = V, J = c, Y = l;
    if (V = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), I.has(ua)) {
      yr();
      return;
    }
    if (I.has(jc))
      return;
    const ue = [];
    for (const te of j) {
      if (se(te) > 0)
        continue;
      const [ee, ce] = go(te), fe = fc(e, ee, ce)?.onRemove ?? s.get(te), Be = o.get(te) ?? "";
      if (Ce(te, ee, ce), !(!fe || a.has(te) || J.has(te))) {
        a.add(te), jh(e, ee, ce, !0);
        for (const De of Y.get(te) ?? [])
          X_(De, ee, ce);
        try {
          fe(ee, ce, "destroyed", Be);
        } catch (De) {
          ue.push(De);
        }
      }
    }
    for (const te of ue)
      queueMicrotask(() => e._onError(te instanceof Error ? te : new Error(String(te))));
  }
  function Bt(I, j) {
    Nr();
    const J = Un(I, j);
    a.delete(J), jh(e, I, j, !1);
  }
  const Zt = it(
    ...S1.filter((I) => e.hasNodes([I])).map((I) => e.registerMutationListener(I, Sn, { skipInitialization: !1 })),
    e.hasNodes([mt]) ? e.registerMutationListener(mt, ie, {
      skipInitialization: !1
    }) : () => {
    },
    G_(e),
    e.registerUpdateListener(ge),
    YM(e, [Qt, An]),
    e.registerUpdateListener(({ dirtyLeaves: I, dirtyElements: j }) => {
      B?.noticeStylesheetChanges(), !(I.size === 0 && j.size === 0) && (Ye([...I, ...j.keys()]), S?.takeRecords());
    }),
    // Also paints what the mutation listeners above found already in the document.
    e.registerRootListener((I) => {
      le(I), I && Ye([...g.keys()]);
    }),
    () => {
      _ = !0, d.abort(), B?.dispose(), S?.disconnect();
    },
    e.registerCommand(
      MS,
      ({ nodes: I }) => (I.forEach(Mx), !1),
      // Critical, and never handling the command, so a handler that does handle it cannot skip the
      // strip.
      Xe
    )
  );
  return {
    index: {
      keysFor: (I, j) => t.get(Un(I, j)) ?? _x,
      noteSet: Bt,
      noteReported: qe,
      hasReported: (I, j) => (Nr(), a.has(Un(I, j))),
      setStateClass: xt,
      rangesFor: ut
    },
    references: 0,
    unregister: Zt
  };
}
function E1(e) {
  let t = su.get(e);
  t || (t = M1(e), su.set(e, t)), t.references++;
  const n = t;
  let r = !1;
  return {
    index: n.index,
    release: () => {
      r || (r = !0, n.references--, !(n.references > 0) && (n.unregister(), su.delete(e)));
    }
  };
}
function Ex(e) {
  const t = re(void 0);
  return Xs(() => {
    const n = E1(e);
    return t.current = n.index, () => {
      t.current = void 0, n.release();
    };
  }, [e]), ft(() => ({
    keysFor: (n, r) => t.current?.keysFor(n, r) ?? _x,
    noteSet: (n, r) => t.current?.noteSet(n, r),
    noteReported: (n, r) => t.current?.noteReported(n, r),
    setStateClass: (n, r, i, s) => t.current?.setStateClass(n, r, i, s),
    rangesFor: (n, r) => t.current?.rangesFor(n, r) ?? [],
    hasReported: (n, r) => t.current?.hasReported(n, r) ?? !1
  }), []);
}
function $o(e, t) {
  return `${e}:${t}`;
}
function A1(e, t) {
  G(() => {
    if (!e.hasNodes([mt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const n = /* @__PURE__ */ new Map();
    return it(ad(e, mt, (r) => Ki(r.getTypedIDs(), r.getTypedOnClicks(), r.getTypedOnRemoves(), r.getTypedOnMouseEnters(), r.getTypedOnMouseLeaves()), (r, i) => {
      const s = r.getTypedOnClicks(), o = r.getTypedOnRemoves(), a = r.getTypedOnMouseEnters(), c = r.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(r.getTypedIDs()))
        u.forEach((f) => {
          const d = s[l]?.[f], p = o[l]?.[f], h = a[l]?.[f], g = c[l]?.[f];
          i.addID(l, f, d, p, h, g);
        });
      r.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(mt, (r) => {
      e.getEditorState().read(() => {
        for (const [i, s] of r) {
          const o = Q(i);
          let a = {};
          s === "destroyed" ? a = n.get(i) ?? {} : ae(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!mt.isReservedType(c))
              for (const u of l) {
                let f = t.get($o(c, u));
                a[c] = l, n.set(i, a), s === "destroyed" ? f !== void 0 && (f.delete(i), f.size === 0 && t.delete($o(c, u))) : (f === void 0 && (f = /* @__PURE__ */ new Set(), t.set($o(c, u), f)), f.has(i) || f.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const P1 = pi(function({ logger: t, viewOptions: n }, r) {
  const [i] = Se(), s = ft(() => /* @__PURE__ */ new Map(), []);
  A1(i, s);
  const o = Ex(i), a = (c, l, u) => {
    const f = Array.from(u ?? s.get($o(c, l)) ?? []), d = ib(c, l, f), p = [];
    for (const g of Array.from(o.keysFor(c, l))) {
      const m = Q(g);
      if (!m)
        continue;
      const y = Ir(m).filter((k) => k.type === c && k.id === l);
      kk(m, c, l) && p.push(...y.map((k) => Wu(m, k)));
    }
    const h = fc(i, c, l);
    if (xk(i, c, l), p.length > 0 && h && d === 0 && !o.hasReported(c, l)) {
      o.noteReported(c, l);
      try {
        h.onRemove?.(c, l, "removed", p.join(""));
      } catch (g) {
        queueMicrotask(() => i._onError(g instanceof Error ? g : new Error(String(g))));
      }
    }
  };
  return Uc(r, () => ({
    setAnnotation(c, l, u, f, d, p, h) {
      if (mt.isReservedType(l))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${l}'. Use the appropriate plugin instead.`);
      i.update(() => {
        if (Qo(c, n, {
          forAnnotation: !0,
          decoratorHolds: /* @__PURE__ */ new Map()
        }) === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        a(l, u), o.noteSet(l, u);
        const m = /* @__PURE__ */ new Map(), y = Qo(c, n, {
          forAnnotation: !0,
          decoratorHolds: m
        });
        if (y === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        Gd(y, l, u, f, d, p, h, { decoratorHolds: m });
      }, { tag: Ou });
    },
    removeAnnotation(c, l) {
      if (mt.isReservedType(c))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${c}'. Use the appropriate plugin instead.`);
      const u = s.get($o(c, l));
      (u === void 0 || u.size === 0) && o.keysFor(c, l).size === 0 || i.update(() => {
        a(c, l, u);
      }, { tag: Ou });
    },
    getAnnotationRanges(c, l) {
      return o.rangesFor(c, l);
    }
  })), null;
});
function N1({ dirtyElements: e, dirtyLeaves: t, prevEditorState: n, tags: r }, i) {
  return e.size === 0 && t.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
  // stack — its bytes really did change, so it must reach `onChange` like any edit.
  // Without this exemption the cached USJ and the emitted delta both keep showing the
  // pre-settle bytes, and the host saves a document the editor is no longer displaying.
  r.has(nd) && !r.has(Wy) || i.ignoreTags.some((s) => r.has(s)) || n.isEmpty();
}
function w1(e, { dirtyLeaves: t, prevEditorState: n }) {
  let r = new As();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = Q(i), o = s !== null && wn(s) !== void 0;
    if (t.size === 1 && v(s) && !o && uA(s)) {
      const a = rp(s);
      if (a !== void 0) {
        const c = n.read(() => {
          const f = Q(i);
          return new As([v(f) ? ef(f) : { insert: "" }]);
        }), l = new As([ef(s)]), u = new As(a > 0 ? [{ retain: a }] : []);
        r = r.concat(u).concat(c.diff(l));
      }
    } else {
      const a = kg(n), c = kg(e.getEditorState());
      r = a.diff(c);
    }
  }), r.ops;
}
function O1(e, t, n, r) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += $1(s, i, t, r);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        r?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      r?.debug(`Delete: ${s.delete}`), I1(i, s.delete, r);
    } else "insert" in s ? typeof s.insert == "string" ? (r?.debug(`Insert: '${s.insert}'`), i += L1(i, s.insert, s.attributes, t, r)) : typeof s.insert == "object" && s.insert !== null ? (r?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), D1(i, s, t, n, r) ? i += 1 : r?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : r?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : r?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function $1(e, t, n, r) {
  return typeof e.retain != "number" || e.retain < 0 ? (r?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (r?.debug(`Retain: ${e.retain}`), e.attributes && (r?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), R1(t, e.retain, e.attributes, n, r)), e.retain);
}
function R1(e, t, n, r, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(n)}`);
  let s = t, o = 0, a = -1;
  const c = _e();
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
          if (ci(n)) {
            const k = g.getParent();
            if (D(k)) {
              const x = n.char;
              let S;
              Array.isArray(x) ? a >= 0 && a <= x.length - 1 && (S = x[a]) : a === 0 && (S = x);
              const _ = S ? Fi(S, k) : !1;
              if (_ && Array.isArray(x) && x.length > 1) {
                const U = Ue("");
                g.replace(U);
                const B = typeof n.segment == "string" ? n.segment : void 0, V = io(x.slice(1), r, g, B);
                let ne = U;
                for (const se of V)
                  ne.insertAfter(se), ne = se;
                U.remove(), Bn(n, g);
              } else if (_)
                Bn(n, g);
              else {
                g.remove();
                const U = Lg(g, n, r, i);
                if (U && U.length > 0) {
                  let B = k;
                  for (const V of U)
                    B.insertAfter(V), B = V;
                }
              }
            } else {
              const x = Ue("");
              g.replace(x);
              const S = Lg(g, n, r, i);
              if (S && S.length > 0) {
                let _ = x;
                for (const U of S)
                  _.insertAfter(U), _ = U;
                x.remove();
              } else
                x.replace(g);
            }
          } else
            Bn(n, g);
          s -= h;
        }
      }
      o += f;
    } else if ($n(u))
      e <= o && o < e + t && s > 0 && (qg(u, n), s -= 1), o += 1;
    else if (D(u)) {
      a += 1;
      let f = !1;
      if (e <= o && o < e + t && s > 0)
        if (ci(n)) {
          const d = n.char;
          let p;
          if (Array.isArray(d) ? a >= 0 && a <= d.length - 1 && (p = d[a]) : a === 0 && (p = d), p) {
            cf(u, p.style), typeof p.cid == "string" && Xt(u, Bi, () => p.cid);
            const h = ht(p, mc);
            h && Object.keys(h).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...h
            }) : u.setUnknownAttributes(void 0);
          }
        } else (n.char === !1 || n.char === null || H1(n.char)) && (f = !0);
      if (s > 0) {
        const d = u.getChildren();
        for (const p of d) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return f && Nu(u), !0;
        }
      }
      f && Nu(u), a -= 1;
    } else if (yt(u)) {
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
          qg(u, n);
        else if (Sp(n)) {
          const p = Nx(n.para, r);
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
function Lg(e, t, n, r) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = io(t.char, n, e, i), o = s.find(D);
  if (!o) {
    r?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Bn(t, e);
    return;
  }
  const a = {};
  Rx.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Bn(t, e), s;
}
function Ax(e, t) {
  e.setMarker(t);
  const n = e.getFirstChild();
  N(n) ? (n.setMarker(t), n.setTextContent(Je(t))) : Dt(n) && n.getTextType() === "marker" && n.setTextContent(Je(t) + q);
}
function cf(e, t) {
  const n = e.getMarker();
  if (e.setMarker(t), t === n)
    return;
  e.getChildren().forEach((o) => {
    N(o) && o.getMarker() === n && o.setMarker(t);
  });
  const r = D(e.getParent()), i = e.getFirstChild();
  Dt(i) && i.getTextType() === "marker" && i.getTextContent() === Je(n, r) && i.setTextContent(Je(t, r));
  const s = e.getLastChild();
  Dt(s) && s.getTextType() === "marker" && s.getTextContent() === at(n, r) && s.setTextContent(at(t, r));
}
function qg(e, t) {
  for (const n of Object.keys(t)) {
    const r = t[n];
    if (n === "char" && D(e) && ci(t)) {
      const i = lf(r);
      if (cf(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Xt(e, Bi, () => o);
      }
      const s = ht(i, mc);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof r == "string" && (ct(e) || we(e) || ze(e) || L(e) || rt(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [n]: r
    }) : (Ie(e) || ye(e) || D(e)) && (n === "style" && ye(e) ? Ax(e, r) : n === "style" && D(e) ? cf(e, r) : n === "code" && Ie(e) ? e.setCode(r) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [n]: r
    })), n === "segment" && Xt(e, oi, () => r));
  }
}
function I1(e, t, n) {
  if (t <= 0)
    return;
  const r = _e();
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
    } else if ($n(a))
      e <= i && i < e + s ? (a.remove(), n?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (yt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && yt(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), n?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Wn(), !0), n?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Ct(p)) {
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
              jr(y) ? h += y.getTextContentSize() : $n(y) && (h += 1), i = k;
            }
            const m = p.getChildren();
            for (const y of m)
              y.remove(), a.append(y);
            p.remove(), n?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Wn(), !0);
        } else ye(a) ? a.replace(Wn(), !0) : a.remove();
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
function L1(e, t, n, r, i) {
  if (t === Yo)
    return Dg(e, n, r, i);
  if (t.endsWith(Yo) && !Sp(n)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (ci(n))
        throw new Error("Text + LF should not have char attributes");
      o += kc(e, s, n, i);
    }
    return o += Dg(e + o, n, r, i), o;
  } else return ci(n) ? q1(e, t, n, r, i) : kc(e, t, n, i);
}
function q1(e, t, n, r, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(n.char)} at index ${e}`);
  const s = Ue(t === "" ? $t : t);
  Bn(n, s);
  let o;
  {
    let m = function(y) {
      if (jr(y)) {
        const k = y.getTextContentSize();
        if (e >= g && e < g + k) {
          const x = y.getParent();
          return D(x) && (o = x), !0;
        }
        g += k;
      } else if ($n(y))
        g += 1;
      else if (D(y)) {
        const k = y.getChildren();
        for (const x of k)
          if (m(x))
            return !0;
      } else if (A(y)) {
        const k = y.getChildren();
        for (const x of k)
          if (m(x))
            return !0;
        yt(y) && (g += 1);
      }
      return !1;
    };
    const h = _e();
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
  const c = typeof n.segment == "string" ? n.segment : void 0, u = io(a, r, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const f = u.find(D);
  if (!f)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(n.char)}. Falling back to rich text insertion.`), kc(e, t, void 0, i);
  const d = {};
  for (const [h, g] of Object.entries(n))
    h !== "char" && h !== "segment" && typeof g == "string" && (d[h] = g);
  Object.keys(d).length > 0 && f.setUnknownAttributes(d);
  let p = !0;
  for (const h of u)
    if (!Px(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), kc(e, t, void 0, i));
}
function kc(e, t, n, r) {
  if (t.length <= 0)
    return r?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = _e();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (jr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, f = Ue(t);
        if (Bn(n, f), u === 0)
          c.insertBefore(f);
        else if (u === l) {
          const d = c.getParent();
          D(d) && !ci(n) ? d.insertAfter(f) : c.insertAfter(f);
        } else {
          const [, d] = c.splitText(u);
          d.insertBefore(f);
        }
        return r?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if ($n(c))
      s += 1;
    else if (D(c)) {
      if (!o && e === s) {
        const f = Ue(t);
        Bn(n, f);
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
        const f = Ue(t);
        return Bn(n, f), c.append(f), r?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (yt(c)) {
      if (!o && e === s) {
        const f = Ue(t);
        Bn(n, f);
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
        const f = Ue(t);
        return Bn(n, f), c.append(f), r?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
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
    const c = Ue(t);
    Bn(n, c);
    const l = Wn().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (r?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Px(e, t, n) {
  const r = _e();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === r && e === 0 && !r.getFirstChild())
      return t.isInline() ? (n?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), r.append(Wn().append(t))) : (n?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), r.append(t)), s = !0, !0;
    if (!A(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === r && t.isInline())
          if (Ct(l)) {
            n?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            n?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Wn().append(t));
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
      } else if ($n(l))
        i += 1;
      else if (D(l)) {
        if (o(l))
          return !0;
      } else if (yt(l)) {
        const u = l;
        if (o(u))
          return !0;
        const f = i;
        if (_t(u) && yt(t) && // Target is at the ImpliedPara's implicit newline
        e === f && !s)
          return n?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = f + 1, s = !0, !0;
        i += 1;
      } else if (A(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return A(a) && !s && (e === i || a === r && e > i) ? a === r ? (t.isInline() ? (n?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), r.append(Wn().append(t))) : (n?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), r.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Ct(a) ? _t(a) && ye(t) && e === i ? (n?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Ct(t) ? (n?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (n?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (D(a) ? (n?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Ct(t) ? (n?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (n?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(r), s || n?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function D1(e, t, n, r, i) {
  let s;
  return Zr("chapter", t) ? s = U1(t.insert.chapter, n) : Zr("verse", t) ? s = B1(t.insert.verse, n) : Zr("ms", t) ? s = F1(t.insert.ms) : Zr("note", t) ? s = wx(t, n, r) : Zr("unknown", t) ? s = Ox(t, n, r, i) : Zr("unmatched", t) && (s = j1(t.insert.unmatched, n)), s ? Px(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Dg(e, t, n, r) {
  let i;
  Sp(t) ? i = Nx(t.para, n) : W1(t) && (i = K1(t.book)), i ??= Wn();
  const s = i, o = ye(s), a = _t(s);
  let c = 0, l = !1;
  function u(f) {
    if (l)
      return !0;
    if (jr(f)) {
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
    } else if ($n(f))
      c += 1;
    else if (yt(f)) {
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
  return u(_e()), l || r?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function K1(e) {
  const { style: t, code: n } = e;
  if (!t || t !== Ho || !n || !Nn.isValidBookCode(n))
    return;
  const r = ht(e, QE);
  return Hb(n, r);
}
function Nx(e, t) {
  const { style: n } = e;
  if (!n)
    return;
  const r = ht(e, XE), i = Us(n, r);
  if (!as(t))
    return i;
  if (t.markerMode === "editable")
    i.append(qt(n), zi());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Je(n) + q;
    i.append(t.hasGutterParaMarkers ? O0(s) : Br("marker", s));
  }
  return i;
}
function U1(e, t) {
  if (!e)
    return;
  const { number: n, sid: r, altnumber: i, pubnumber: s } = e;
  if (!n)
    return;
  const o = ht(e, ZE);
  let a;
  if (t.markerMode === "editable")
    a = vb(n, r, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = wd(n, c, r, i, s, o);
  }
  return a;
}
function B1(e, t) {
  if (!e)
    return;
  const { style: n, number: r, sid: i, altnumber: s, pubnumber: o } = e;
  if (!r)
    return;
  const a = ht(e, eA);
  let c;
  if (t.markerMode === "editable") {
    if (!n)
      return;
    const l = Vn(n, r);
    c = db(r, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Zd(r, l, i, s, o, a);
  }
  return c;
}
function F1(e) {
  if (!e)
    return;
  const { style: t, sid: n, eid: r, attributeOrder: i } = e;
  if (!t)
    return;
  const s = ht(e, tA);
  return Yy(t, n, r, s, i);
}
function wx(e, t, n) {
  const r = e.insert;
  if (!r.note)
    return;
  const { style: i, caller: s, category: o, contents: a } = r.note;
  if (!i || s == null)
    return;
  const c = ht(r.note, nA), l = typeof c?.closed == "string" ? c.closed : void 0, u = e.attributes?.segment;
  let f;
  u && typeof u == "string" && (f = u);
  const d = [];
  for (const h of a?.ops ?? [])
    if (typeof h.insert == "string")
      if (ci(h.attributes)) {
        const g = io(h.attributes.char, t, Ue(h.insert), void 0, $x(h.attributes.char, d), !1, t.markerMode === "editable");
        d.push(...g);
      } else
        d.push(Ue(h.insert));
  return px(i, s, d, t, n, f, l).setCategory(o).setUnknownAttributes(c);
}
function Ox(e, t, n, r) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = ht(i, rA), l = kd(s, o, c), u = a?.ops ?? [];
  u.length > 0 && z1(u, t, n, r).forEach((p) => l.append(p));
  const f = e.attributes?.segment;
  return typeof f == "string" && Xt(l, oi, () => f), l;
}
function z1(e, t, n, r) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (ci(s.attributes)) {
        const o = Ue(s.insert), a = io(s.attributes.char, t, o, void 0, $x(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(Ue(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Zr("unknown", s)) {
        const o = Ox(s, t, n, r);
        o && i.push(o);
        continue;
      }
      if (Zr("note", s)) {
        const o = wx(s, t, n);
        o && i.push(o);
        continue;
      }
      r?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function j1(e, t) {
  if (!e)
    return;
  const { marker: n } = e;
  if (!n)
    return;
  const r = Kd(n);
  return t.markerMode === "editable" && r.setMode("normal"), r;
}
function $x(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function lf(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function io(e, t, n, r, i, s = !1, o = !1) {
  v(n) && n.getTextContentSize() === 0 && n.setTextContent($t);
  const a = () => {
    o && v(n) && n.getTextContent() !== $t && n.setTextContent(q + n.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(lf), l = c[0], u = i?.[i.length - 1];
    if (D(u) && Fi(l, u)) {
      if (c.length > 1) {
        const d = io(c.slice(1), t, n, void 0, void 0, !0, o);
        ou(u, d);
      } else
        n && ou(u, [n]);
      return [];
    }
    a();
    const f = c.reduceRight((d, p, h) => {
      const g = Ur(p.style, ht(p, mc));
      return typeof p.cid == "string" && Xt(g, Bi, () => p.cid), r && h === c.length - 1 && Xt(g, oi, () => r), d && (D(d) && (cu(d.getMarker(), d, t, !0), au(d, d, t, !0)), g.append(d)), g;
    }, n);
    return cu(l.style, f, t, s), au(f, f, t, s), [f];
  } else {
    const c = lf(e), l = i?.[i.length - 1];
    if (D(l) && Fi(c, l))
      return n && ou(l, [n]), [];
    a();
    const u = Ur(c.style, ht(c, mc));
    return typeof c.cid == "string" && Xt(u, Bi, () => c.cid), r && Xt(u, oi, () => r), n && u.append(n), cu(c.style, u, t, s), au(u, u, t, s), [u];
  }
}
function ou(e, t) {
  const n = e.getLastChild();
  N(n) && n.getMarkerSyntax() === "closing" || Dt(n) && n.getTextType() === "marker" && n.getTextContent() === at(e.getMarker(), D(e.getParent())) ? t.forEach((i) => n.insertBefore(i)) : e.append(...t);
}
function au(e, t, n, r = !1) {
  e.getUnknownAttributes()?.closed !== "false" && V1(e.getMarker(), t, n, !1, r);
}
function cu(e, t, n, r = !1) {
  let i;
  if (n?.markerMode === "editable" ? i = qt(e, "opening", r) : n?.markerMode === "visible" && (i = Br("marker", Je(e, r))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function V1(e, t, n, r = !1, i = !1) {
  let s;
  n?.markerMode === "editable" ? r ? s = qt("", "selfClosing") : s = qt(e, "closing", i) : n?.markerMode === "visible" && (s = Br("marker", r ? at("") : at(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function W1(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Sp(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function ci(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function H1(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Bn(e, t) {
  if (e)
    for (const n of Object.keys(e)) {
      if (n === "segment" && typeof e[n] == "string") {
        const r = e[n];
        Xt(t, oi, () => r);
        continue;
      }
      if (G1(n)) {
        const r = !!e[n], i = n, s = t.hasFormat(i);
        (r && !s || !r && s) && t.toggleFormat(i);
      }
    }
}
const Rx = [
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
function G1(e) {
  return Rx.includes(e);
}
function J1() {
  const [e] = Se();
  return G(() => {
    const t = (n) => n instanceof KeyboardEvent && !Y1(n) || !hl() ? !1 : (n instanceof Event && n.preventDefault(), !0);
    return it(
      e.registerCommand(Er, t, Qe),
      e.registerCommand(la, t, Qe),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(nr, t, Xe),
      e.registerCommand(or, t, Xe),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(rd, (n) => {
        if (!(n instanceof Event) || !(n.target instanceof Node))
          return !1;
        const r = Zi(n.target);
        return !r || !li(r) ? !1 : (n.preventDefault(), !0);
      }, Qe),
      e.registerCommand(Wc, t, Qe),
      e.registerCommand(ed, t, Qe),
      e.registerCommand(tc, t, Qe)
    );
  }, [e]), null;
}
function Y1(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function li(e) {
  return nt(e, _p) ?? void 0;
}
function _p(e) {
  return rt(e) || Mb(e);
}
function hl() {
  const e = w();
  return E(e) ? li(e.anchor.getNode()) !== void 0 || li(e.focus.getNode()) !== void 0 : !1;
}
function X1(e, t, n) {
  if (e.height === 0)
    return !1;
  const r = e.height / 4;
  return t.some((i) => n === "down" ? i.top >= e.bottom - r : i.bottom <= e.top + r);
}
function Q1(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(r, r.childNodes.length), X1(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function Z1(e, t, n, r) {
  if (!pN(t) || Q1(e, n))
    return !1;
  const i = n === "up" ? YE(t) : JE(t);
  return i && r.preventDefault(), i;
}
function eN({ viewOptions: e }) {
  const [t] = Se();
  return tN(t, e), null;
}
function tN(e, t) {
  G(() => {
    if (!e.hasNodes([Kn, Qt, Ze]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const n = (r) => {
      const i = w();
      if (!E(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (r.key === "ArrowLeft" || r.key === "ArrowRight") && r.shiftKey && !r.altKey && !r.ctrlKey && !r.metaKey) {
        const u = Kg(o), f = cN(i, Ug(u, r.key) ? "next" : "previous");
        return f && r.preventDefault(), f;
      }
      if (!i.isCollapsed())
        return !1;
      if (r.key === "ArrowUp" || r.key === "ArrowDown") {
        if (r.shiftKey || r.altKey || r.ctrlKey || r.metaKey)
          return !1;
        const u = r.key === "ArrowUp" ? "up" : "down";
        return Z1(e, i, u, r);
      }
      if (r.key !== "ArrowLeft" && r.key !== "ArrowRight" || !o)
        return !1;
      const a = Kg(o), c = r.shiftKey || r.altKey || r.ctrlKey || r.metaKey;
      let l = !1;
      return Ug(a, r.key) ? l = !c && zg(i, "next") || !c && rN(i) || fN(i) || !c && s && Fg(i, "next") : nN(a, r.key) && (l = !c && zg(i, "previous") || !c && iN(i) || dN(i, t) || !c && s && Fg(i, "previous")), l && r.preventDefault(), l;
    };
    return e.registerCommand(Er, n, Qe);
  }, [e, t]);
}
function Kg(e) {
  return e.dir || "ltr";
}
function Ug(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function nN(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function uf(e) {
  if (!D(e) || e.getMarker() !== "fp")
    return;
  const t = wn(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function rN(e) {
  const t = uf(Rd(e));
  if (!t)
    return !1;
  const n = e.anchor;
  return n.type === "text" && n.offset !== n.getNode().getTextContentSize() ? !1 : (cr(t, 0), !0);
}
function iN(e) {
  const t = e.anchor, n = t.getNode();
  if (t.type === "text") {
    const r = uf(n.getParent());
    return !r || !n.is(r.getFirstChild()) ? !1 : t.offset === 1 ? (n.select(0, 0), !0) : t.offset !== 0 ? !1 : Bg(r);
  }
  if (t.offset === 0) {
    const r = uf(n);
    return r ? Bg(r) : !1;
  }
  return !1;
}
function Bg(e) {
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
const xc = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function sN(e) {
  if (xc)
    for (const { segment: n } of xc.segment(e))
      return n.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function oN(e) {
  if (xc) {
    let r = 0;
    for (const { index: i } of xc.segment(e))
      r = i;
    return r;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), n = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (n ? 2 : 1));
}
function Ix(e) {
  for (let t = e; t; t = t.getParent())
    if (A(t) && !t.isInline())
      return t;
}
function Lx(e) {
  return !!e && N(e) && li(e) !== void 0;
}
function Ws(e) {
  return v(e) && !e.isToken() && !Lx(e) && e.getTextContentSize() > 0;
}
function qx(e) {
  return Qi(e) ? !0 : L(e) ? e.getIsCollapsed() === !0 : v(e) ? (e.isToken() || Lx(e)) && e.getTextContentSize() > 0 : Tn(e) ? !ze(e) : !1;
}
function Hs(e, t, n) {
  for (let r = e; r && !r.is(n); ) {
    const i = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (i)
      return i;
    r = r.getParent();
  }
}
function gl(e, t, n) {
  for (let r = e; r; ) {
    if (qx(r))
      return r;
    if (A(r)) {
      r = (t === "next" ? r.getFirstChild() : r.getLastChild()) ?? Hs(r, t, n);
      continue;
    }
    if (Ws(r))
      return r;
    r = Hs(r, t, n);
  }
}
function Mp(e, t, n, r, i) {
  return n === "element" && A(e) ? e.getChildAtIndex(r === "next" ? t : t - 1) ?? Hs(e, r, i) : n === "text" && qx(e) && (r === "next" ? t < e.getTextContentSize() : t > 0) ? e : Hs(e, r, i);
}
function lu(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const n = Mp(e.node, e.offset, e.kind, "previous", t), r = gl(n, "previous", t);
  if (!r)
    return e;
  if (Ws(r))
    return { kind: "text", node: r, offset: r.getTextContentSize() };
  const i = r.getParent();
  return i ? { kind: "element", node: i, offset: r.getIndexWithinParent() + 1 } : e;
}
function aN(e, t) {
  const n = e.getNode(), r = Ix(n);
  if (!r)
    return;
  if (e.type === "text" && Ws(n)) {
    if (t === "next" && e.offset < n.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return lu({ kind: "text", node: n, offset: 0 }, r);
  }
  const i = Mp(n, e.offset, e.type, t, r), s = gl(i, t, r);
  if (!s)
    return;
  if (Ws(s)) {
    const c = s.getTextContent(), l = t === "next" ? sN(c) : oN(c);
    return lu({ kind: "text", node: s, offset: l }, r);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return lu({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, r);
}
function Dx(e, t, n) {
  const r = n === "collapse" ? e.anchor : e.focus, i = aN(r, t);
  return !i || i.node.is(r.getNode()) && i.offset === r.offset && i.kind === r.type ? !1 : n === "collapse" ? (i.kind === "element" && A(i.node) ? Tp(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Fg(e, t) {
  return Dx(e, t, "collapse");
}
function cN(e, t) {
  return Dx(e, t, "extend");
}
function lN(e, t, n) {
  const r = e.getNode();
  if (e.type === "text" && Ws(r) && (t === "next" ? e.offset < r.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Mp(r, e.offset, e.type, t, n);
  return gl(i, t, n) === void 0;
}
function uN(e, t) {
  const n = _e();
  for (let r = e; r; ) {
    const i = Hs(r, t, n), s = i && gl(i, t, n);
    if (!s)
      return;
    if (r = li(s), !r)
      return s;
  }
}
function zg(e, t) {
  const n = e.anchor, r = n.getNode();
  if (li(r))
    return !1;
  const i = Ix(r);
  if (!i || !lN(n, t, i))
    return !1;
  const s = Hs(i, t, _e()), o = s && li(s);
  if (!o)
    return !1;
  const a = uN(o, t);
  if (!a)
    return !0;
  if (Ws(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function jg(e) {
  const t = e.getParent();
  if (!t)
    return;
  const n = e.getIndexWithinParent() + 1;
  Tp(t, n);
}
function fN(e) {
  const t = e.anchor.getNode(), n = Rd(e);
  if (L(n) && !N(n.getFirstChild())) {
    if (yt(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (n.getIsCollapsed()) {
      if (n.is(n.getParent()?.getLastChild())) {
        const i = n.getParent()?.getNextSibling();
        return i && !(Ct(i) && cs(i)) && i.selectStart(), !0;
      }
    } else return Dt(n.getFirstChild()) ? n.select(2, 2) : n.select(1, 1), !0;
  }
  if (yt(t) && L(n) && n.getIsCollapsed()) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : jg(n), !0;
  }
  const r = n?.getParent();
  if (Dt(n) && L(r) && n.is(r?.getLastChild())) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : r.getIsCollapsed() ? jg(r) : r.selectEnd(), !0;
  }
  return !1;
}
function dN(e, t) {
  const n = Qb(e);
  if (Gr(n) && !n.getPreviousSibling())
    return !0;
  const { anchor: r } = e;
  if ((r.type === "element" || r.offset === 0) && Vs(n))
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const s = e.anchor.getNode(), o = s.getParent();
  if (Ie(o) && !n)
    return !0;
  if (L(n) && n.getIsCollapsed()) {
    const c = n.getPreviousSibling();
    if (!gr(c) && !Ie(n.getParent()))
      return !1;
    const l = n.getParent();
    if (!l)
      return !1;
    const u = n.getIndexWithinParent();
    return l.select(u, u), !0;
  }
  if (yt(n) && t?.noteMode === "collapsed") {
    const c = n.getLastChild();
    if (!c)
      return !1;
    const l = nt(c, (u) => L(u));
    if (L(l) && l.getIsCollapsed()) {
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
  if (Pt(n)) {
    const c = a.getParent();
    if (!c)
      return !1;
    const l = a.getIndexWithinParent();
    return c.select(l, l), !0;
  }
  return !1;
}
function pN(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return we(t) && Tn(t);
}
function hN() {
  const [e] = Se();
  return gN(e), null;
}
function gN(e) {
  G(() => {
    if (!e.hasNodes([We]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return it(
      e.registerNodeTransform(We, bN),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(We, C0),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(We, $b),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(We, (t) => Jo(Fr("char"), t)),
      e.registerNodeTransform(ot, kN)
    );
  }, [e]);
}
function Ja(e) {
  return e.getChildren().some(N);
}
function mN(e, t) {
  const n = t.getFirstChild();
  if (!N(n) || n.getMarkerSyntax() !== "opening")
    return !1;
  const r = n.getNextSibling();
  if (Wr(r)) {
    const i = r.getTextContent();
    i.startsWith(q) && (i === q ? r.remove() : r.setTextContent(i.slice(q.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function yN(e, t) {
  const n = t.getLastChild(), r = e.getChildren();
  N(n) && n.getMarkerSyntax() === "closing" ? r.forEach((i) => n.insertBefore(i)) : t.append(...r), e.remove();
}
function bN(e) {
  if (!D(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (Ja(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const n = pe(e, Bi), r = e.getUnknownAttributes(), i = e.getNextSibling();
  if (D(i) && Fi({ style: t, cid: n }, i) && Zn(r, i.getUnknownAttributes()))
    if (Ja(i)) {
      if (mN(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  D(s) && Fi({ style: t, cid: n }, s) && Zn(r, s.getUnknownAttributes()) && (Ja(s) ? yN(e, s) : (s.append(...e.getChildren()), e.remove()));
}
const Kx = /* @__PURE__ */ new WeakSet();
function kN(e) {
  const t = e.getParent();
  if (!D(t) || Ja(t) || Kx.has(e))
    return;
  const n = e.getTextContent();
  if (n.length < 2 || !n.includes($t))
    return;
  const r = TN(t.getKey());
  if (r === void 0) {
    t.getChildrenSize() === 1 && n.startsWith($t) && Vg(e, 0);
    return;
  }
  if (r !== e.getKey())
    return;
  const i = xN(e, n);
  i !== void 0 && Vg(e, i);
}
function xN(e, t) {
  const n = w();
  if (E(n) && n.isCollapsed() && n.anchor.key === e.getKey()) {
    const { offset: r } = n.anchor;
    if (r === t.length && t.startsWith($t))
      return 0;
    if (t[r] === $t)
      return r;
  }
  if (t.startsWith($t))
    return 0;
  if (t.endsWith($t))
    return t.length - 1;
}
function Vg(e, t) {
  const n = w(), r = E(n) ? [n.anchor, n.focus].filter((a) => a.type === "text" && a.key === e.getKey()) : [], i = r.map((a) => a.offset), s = e.getTextContent(), o = e.setTextContent(s.slice(0, t) + s.slice(t + 1));
  Kx.add(o), r.forEach((a, c) => {
    const l = i[c];
    a.set(o.getKey(), l > t ? l - 1 : l, "text");
  });
}
function TN(e) {
  return Lt().getEditorState().read(() => {
    const t = Q(e);
    if (!D(t))
      return;
    const n = t.getChildren().filter((i) => !Tn(i)), [r] = n;
    return n.length === 1 && v(r) && r.getTextContent() === $t ? r.getKey() : null;
  });
}
function Ux(e) {
  return e.replaceAll("	", " ");
}
function Bx() {
  const e = w();
  return !!e && !e.isCollapsed();
}
function Fx(e) {
  const t = () => !Bx();
  return it(e.registerCommand(Ds, t, zt), e.registerCommand(or, t, zt));
}
const Ep = (e) => {
  e.dispatchCommand(Ds, null);
}, Ap = (e) => {
  e.dispatchCommand(or, null);
}, Pp = (e) => {
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
      r.setData(o, Ux(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(nr, s);
  });
}, Np = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const n = new DataTransfer(), r = await navigator.clipboard.readText();
    n.setData("text/plain", Ux(r));
    const i = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(nr, i);
  });
};
function vN() {
  const [e] = Se();
  return G(() => {
    const t = (n) => {
      const { key: r, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = n;
      !(Ks ? s : o) || a || (!i && r.toLowerCase() === "c" ? (n.preventDefault(), Ep(e)) : !i && r.toLowerCase() === "x" ? (n.preventDefault(), Ap(e)) : r.toLowerCase() === "v" && (n.preventDefault(), i ? Np(e) : Pp(e)));
    };
    return it(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      Fx(e),
      e.registerRootListener((n, r) => {
        r !== null && r.removeEventListener("keydown", t), n !== null && n.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function CN({ logger: e }) {
  const [t] = Se();
  return G(() => it(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Er, (n) => n.key !== "\\" && n.key !== "/" ? !1 : (n.preventDefault(), !0), vr),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(nr, (n) => {
      const r = n.clipboardData?.getData("text/plain");
      return !r || !r.includes("\\") && !r.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), n.preventDefault(), !0);
    }, vr),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(rd, (n) => {
      const r = n.dataTransfer?.getData("text/plain");
      return !r || !r.includes("\\") && !r.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), n.preventDefault(), !0);
    }, vr)
  ), [t, e]), null;
}
const Tc = "editor-context-menu";
function ff(e) {
  return `${Tc}-item-${e}`;
}
const SN = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function _N({ index: e, isSelected: t, onClick: n, onMouseMove: r, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), P("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: ff(e), onMouseMove: r, onClick: i.isDisabled ? void 0 : n, children: P("span", { className: "text", children: i.title }) });
}
function MN({ options: e, selectedItemIndex: t, onOptionClick: n, onOptionMouseMove: r }) {
  return P("div", { className: "typeahead-popover", children: P("ul", { id: Tc, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => P(_N, { index: s, isSelected: t === s, onClick: () => n(i, s), onMouseMove: () => r(s), option: i }, `${s}-${i.title}`)) }) });
}
let EN = 0;
class mo {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, n) {
    this.key = `context-menu-option-${EN++}`, this.title = t, this.onSelect = n.onSelect.bind(this), this.isDisabled = n.isDisabled || !1;
  }
}
function AN({ options: e } = {}) {
  const [t] = Se(), [n, r] = Re(() => !t.isEditable()), [i, s] = Re({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = Re(void 0), c = ft(() => {
    const d = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new mo("Cut", {
        onSelect: () => {
          Ap(t);
        },
        isDisabled: n
      }),
      new mo("Copy", {
        onSelect: () => {
          Ep(t);
        }
      }),
      new mo("Paste", {
        onSelect: () => {
          Pp(t);
        },
        isDisabled: n
      }),
      new mo("Paste as Plain Text", {
        onSelect: () => {
          Np(t);
        },
        isDisabled: n
      })
    ], p = (e ?? []).map((h) => new mo(h.title, { onSelect: h.onSelect, isDisabled: h.isDisabled }));
    return [...d, ...p];
  }, [t, n, e]), l = re(null), u = re(null), f = Ae(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  return G(() => Fx(t), [t]), G(() => {
    const d = (p) => {
      const h = p.target;
      t.getRootElement() === h || Vb(h) || (p.preventDefault(), u.current = document.activeElement, s({ isOpen: !0, x: p.clientX, y: p.clientY }), a(void 0));
    };
    return t.registerRootListener((p, h) => {
      h?.removeEventListener("contextmenu", d), p && p.addEventListener("contextmenu", d);
    });
  }, [t]), G(() => {
    if (!i.isOpen)
      return;
    const d = (p) => {
      const h = p.target;
      h instanceof Node && l.current?.contains(h) || f();
    };
    return globalThis.addEventListener("scroll", d, !0), () => globalThis.removeEventListener("scroll", d, !0);
  }, [i.isOpen, f]), G(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      f();
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [i.isOpen, f]), G(() => {
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
          if (SN.has(p.key))
            return;
          p.preventDefault(), p.stopPropagation();
        }
    };
    return document.addEventListener("keydown", d, !0), () => document.removeEventListener("keydown", d, !0);
  }, [i.isOpen, f, c, o, t]), G(() => {
    if (!i.isOpen)
      return;
    const d = t.getRootElement();
    if (d)
      return d.setAttribute("aria-controls", Tc), () => {
        d.removeAttribute("aria-controls"), d.removeAttribute("aria-activedescendant");
      };
  }, [t, i.isOpen]), G(() => {
    if (!i.isOpen)
      return;
    const d = t.getRootElement();
    if (!d)
      return;
    if (o === void 0) {
      d.removeAttribute("aria-activedescendant");
      return;
    }
    d.setAttribute("aria-activedescendant", ff(o));
    const p = document.getElementById(Tc), h = document.getElementById(ff(o));
    if (!p || !h)
      return;
    const g = p.getBoundingClientRect(), m = h.getBoundingClientRect(), y = m.top - g.top + p.scrollTop, k = m.bottom - g.top + p.scrollTop;
    y < p.scrollTop ? p.scrollTop = y : k > p.scrollTop + p.clientHeight && (p.scrollTop = k - p.clientHeight);
  }, [t, i.isOpen, o]), G(() => t.registerEditableListener((d) => {
    r(!d);
  }), [t]), Xs(() => {
    const d = l.current;
    if (!d)
      return;
    const { width: p, height: h } = d.getBoundingClientRect(), g = Math.max(0, Math.min(i.x, globalThis.innerWidth - p)), m = Math.max(0, Math.min(i.y, globalThis.innerHeight - h));
    d.style.left = `${g}px`, d.style.top = `${m}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? WS.createPortal(P("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: P(MN, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), f());
  }, onOptionMouseMove: (d) => {
    a((p) => p === d ? p : d);
  } }) }), document.body) : null;
}
function PN(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function NN(e) {
  if (!AS(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function wN(e) {
  return Pt(e);
}
function uu(e, t, n) {
  const r = Zi(t.node);
  if (!Tn(r) || wN(r))
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
function ON(e, t) {
  if (w())
    return !1;
  const n = e.getRootElement(), r = ES(n?.ownerDocument.defaultView ?? null);
  if (!r || r.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = r;
  if (!i || !o || !Ey(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, f;
  if (r.isCollapsed)
    u = uu(e, c, NN(c)), f = u;
  else {
    const m = PN(r.getRangeAt(0), c);
    u = uu(e, c, m ? "before" : "after"), f = uu(e, l, m ? "after" : "before");
  }
  if (!u && !f)
    return !1;
  const d = u ?? c, p = f ?? l, h = {
    anchorNode: d.node,
    anchorOffset: d.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = Ay(h, e);
  return g ? (zn(g), g.dirty = !t, t) : !1;
}
function $N() {
  const [e] = Se(), t = re(!1), n = re(!1);
  return G(() => {
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
  }, [e]), G(() => e.registerCommand(bn, () => (ON(e, t.current) && (n.current = !0), !1), Xe), [e]), null;
}
function RN() {
  const [e] = Se();
  return G(() => e.registerCommand(Er, (t) => {
    const { key: n, shiftKey: r, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Ks ? i : s) || o)
      return !1;
    const a = n.toLowerCase();
    return !(a === "z" && !r) && !(a === "y" || a === "z" && r) ? !1 : (t.preventDefault(), !0);
  }, Xe), [e]), null;
}
function IN({ isEditable: e }) {
  const [t] = Se();
  return Xs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Wg(e) {
  return !!e && ga(Q(e));
}
function wp(e) {
  const [t] = Se(), n = re(void 0), r = Ae((i) => {
    let s = !1;
    const o = w(), a = E(o) && o.isCollapsed() ? o.anchor.key : void 0, c = n.current, l = Wg(c);
    c && !l && (n.current = void 0);
    let u;
    if (i) {
      const f = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, p = ma(f, d), h = ga(p) ? p : void 0;
      if (h)
        n.current = h.getKey(), u = h.getKey();
      else {
        const g = yM();
        i.insertAfter(g), n.current = g.getKey(), u = g.getKey(), s = !0;
      }
      cr(f, d);
    }
    if (c && l && c !== a && c !== u) {
      const f = Q(c);
      v(f) && (f.remove(), s = !0), n.current === c && (n.current = void 0);
    }
    return s;
  }, []);
  return G(() => {
    const i = () => {
      const a = e(), c = w(), l = E(c) && c.isCollapsed() ? c.anchor.key : void 0, u = n.current;
      (a || u && u !== l) && r(a) && Ft(Oi);
    }, s = (a) => {
      if (a.getKey() !== n.current)
        return;
      const c = a.getTextContent();
      if (rs(c) || !c.includes(Bs))
        return;
      const l = w(), u = E(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (bM(a), n.current = void 0, u !== void 0) {
        const f = c.slice(0, u).split(Bs).length - 1, d = Math.max(0, u - f);
        a.select(d, d);
      }
    }, o = it(t.registerCommand(bn, () => (i(), !1), qi), t.registerCommand(id, () => {
      const a = n.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Wg(a);
      }), c && t.update(() => {
        const l = Q(a);
        v(l) && (l.remove(), Ft(Oi));
      }), n.current = void 0, !1;
    }, qi), t.registerNodeTransform(ot, s));
    return () => {
      o(), n.current = void 0;
    };
  }, [t, e, r]), r;
}
function LN() {
  const e = w();
  if (!E(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, n = t.getNode(), r = L(n) ? n : n.getParent();
  if (!L(r))
    return;
  const i = IP(r);
  if (i === void 0)
    return;
  let s = r.getChildAtIndex(i - 1);
  for (; s && ga(s); )
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
function qN() {
  return wp(LN), null;
}
function Op(e) {
  const t = e.getRootElement();
  return !!t && t.contains(t.ownerDocument.activeElement);
}
function Ns(e, ...t) {
  const n = e.registerUpdateListener(({ tags: r }) => {
    n();
    for (const i of t)
      r.delete(i);
  });
  return n;
}
function fu(e) {
  const t = e.getRootElement(), n = t?.ownerDocument.defaultView?.getSelection();
  if (!t || !n?.anchorNode || !t.contains(n.anchorNode))
    return;
  e.getEditorState().read(() => {
    const i = w();
    if (!E(i))
      return !1;
    const s = Ay(n, e);
    return !!s && i.is(s);
  }, { editor: e }) || n.removeAllRanges();
}
function Cs(e, t) {
  let n;
  try {
    n = Lt();
  } catch {
  }
  return n === e ? t() : e.read(t);
}
function DN() {
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
  if (!we(i) || ma(n, t.offset))
    return;
  const s = r[t.offset];
  if (s === void 0 || we(s))
    return i;
}
function KN() {
  return wp(DN), null;
}
function UN({ scripture: e, scriptureRef: t, nodeOptions: n, editorAdaptor: r, viewOptions: i, logger: s }) {
  const [o] = Se();
  return G(() => {
    r.initialize?.(n, s);
  }, [r, s, n]), G(() => {
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
        const u = Op(o);
        o.update(() => {
          u || Ft(Qn), o.setEditorState(l), o.dispatchCommand(PS, void 0);
        }, { tag: ua });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, r, s, e, t, i]), null;
}
const du = "caller_highlight", BN = pi(function(t, n) {
  const [r] = Se(), i = re(void 0), s = re(void 0), o = Ae(() => {
    const a = i.current, c = a === void 0 ? void 0 : r.getEditorState().read(() => {
      const u = Tr(a);
      return u ? (u.getChildren().find(Pt) ?? At(u))?.getKey() : void 0;
    }), l = c ? r.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(du), l?.classList.add(du), s.current = l;
  }, [r]);
  return Uc(n, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : Cs(r, () => Tr(a)?.getKey()), o();
    }
  }), [r, o]), G(() => it(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    r.registerMutationListener(Ze, (a, { prevEditorState: c, updateTags: l }) => {
      const u = i.current;
      if (u === void 0 || a.get(u) !== "destroyed")
        return;
      if (![...a.values()].includes("created")) {
        i.current = void 0;
        return;
      }
      const f = l.has(ua) ? void 0 : c.read(() => op(u)), d = f === void 0 ? void 0 : r.getEditorState().read(() => Tr(f)?.getKey());
      i.current = d !== void 0 && a.get(d) === "created" ? d : void 0;
    }, { skipInitialization: !0 }),
    r.registerUpdateListener(() => o())
  ), [r, o]), G(() => () => s.current?.classList.remove(du), []), null;
});
function FN({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: n, logger: r }) {
  const [i] = Se();
  return zN(t, r), jN(i, e, n, r), null;
}
function zN(e, t) {
  const n = re(void 0), r = re(void 0), i = e.noteCallers, s = e.crossRefCallers;
  G(() => {
    let o = i;
    (!o || o.length <= 0) && (o = IA), n.current !== o && (n.current = o, Hg("note-callers", o, t));
  }, [t, i]), G(() => {
    let o = s;
    (!o || o.length <= 0) && (o = LA), r.current !== o && (r.current = o, Hg("cross-ref-callers", o, t));
  }, [t, s]);
}
function jN(e, t, n, r) {
  G(() => {
    if (!e.hasNodes([We, Ze, An]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => QN(s));
    return it(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Ze, (s) => VN(s, n)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(We, HN),
      e.registerNodeTransform(ot, GN),
      // Ensure a separator after the caller.
      e.registerNodeTransform(An, JN),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(An, (s, { prevEditorState: o }) => YN(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(bn, () => XN(e, t, n, r), zt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, r, n]);
}
function VN(e, t) {
  const n = e.getChildren();
  if (!n.some((i) => Pt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), n.length > 0) {
    const i = n[0];
    v(i) && !N(i) && i.getTextContent() !== Et(e.getCaller()) && e.insertBefore(i);
  }
}
function zx(e) {
  const t = e.getNextSibling();
  vn(t) || (v(t) && !N(t) && t.getTextContent() === q ? t.replace(zi()) : e.insertAfter(zi()));
}
function WN(e) {
  const t = e.getTextContent(), n = t.indexOf(q), r = n < 0 ? t : t.slice(0, n) + t.slice(n + 1);
  if (e.setTextContent(q), !r) {
    e.selectEnd();
    return;
  }
  const i = Ue(r);
  e.insertAfter(i), i.selectEnd();
}
function HN(e) {
  const t = e.getParentOrThrow(), n = t.getChildren(), r = n.find((s) => Pt(s));
  if (!D(e) || !L(t) || !r)
    return;
  const i = Id(n);
  r.getPreviewText() !== i && r.setPreviewText(i), zx(e);
}
function GN(e) {
  const t = wn(e), n = t?.getChildren(), r = n?.find((o) => Pt(o));
  if (!v(e) || !L(t) || !r || !n)
    return;
  const i = e.getParent();
  if (L(i) && vn(e) && e.getTextContent() !== q && WN(e), D(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith($t) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Id(n);
  r.getPreviewText() !== s && r.setPreviewText(s);
}
function JN(e) {
  Pt(e) && zx(e);
}
function YN(e, t) {
  for (const [n, r] of e) {
    if (r !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = Q(n), a = o?.getParent();
      return Pt(o) && L(a) && a.getCaller() === Bo;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function XN(e, t, n, r) {
  if (n?.noteMode !== "expandInline")
    return !1;
  const i = w();
  if (!E(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = nt(o, (c) => L(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = Q(t.current);
      c && !c.getIsCollapsed() && (r?.debug("Cursor moved away from NoteNode, collapsing it"), yo(e, t.current, r)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (L(a)) {
      r?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, yo(e, c, r);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (L(a)) {
      r?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, yo(e, c, r);
    } else if (!a) {
      const c = nt(o, (l) => L(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      yt(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        r?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, yo(e, l, r);
      }
    }
  }
  if (Ct(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (gr(c) && L(a)) {
      r?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, yo(e, l, r);
    }
  }
  return !1;
}
function yo(e, t, n) {
  const r = Q(t);
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
function QN(e) {
  const t = w();
  if (!E(t))
    return;
  const n = t.anchor, r = t.focus, i = n.getNode(), s = r.getNode();
  if (L(i) && v(s)) {
    e.preventDefault();
    const o = Kr();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), r.offset, "text"), zn(o);
  }
}
function Hg(e, t, n) {
  for (const r of document.styleSheets)
    try {
      const i = r.cssRules || r.rules;
      for (const s of i)
        if (ZN(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  n?.warn(`Editor: counter style "${e}" not found.`);
}
function ZN(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function rr(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const r of e.getChildren()) {
    if (!N(r) || r.getMarkerSyntax() !== "opening")
      break;
    t.push(r);
  }
  const n = At(e);
  return n && t.push(n), t.length > 0 && t.every((r) => v(r) && r.getMode() === "token") ? t : [];
}
function ew(e) {
  const t = e.getParent();
  if (L(t))
    return rr(t).some((n) => n.is(e)) ? t : void 0;
}
function ka(e) {
  const t = rr(e), n = t[t.length - 1];
  return n ? n.getIndexWithinParent() + 1 : 0;
}
function _o(e) {
  if (e.getIsCollapsed() !== !1)
    return;
  const t = e.getLastChild();
  return N(t) && t.getMarkerSyntax() === "closing" && t.getMode() === "token" ? t : void 0;
}
function jx(e) {
  const t = e.getNode();
  if (e.type === "text") {
    const r = t.getParent();
    if (L(r) && _o(r)?.is(t))
      return e.offset > 0 ? r : void 0;
    if (e.offset !== 0)
      return;
    const i = t.getPreviousSibling();
    return L(i) && _o(i) ? i : void 0;
  }
  if (L(t)) {
    const r = _o(t);
    return r && e.offset > r.getIndexWithinParent() ? t : void 0;
  }
  if (!A(t) || e.offset === 0)
    return;
  const n = t.getChildAtIndex(e.offset - 1);
  return L(n) && _o(n) ? n : void 0;
}
function Vx(e) {
  const t = e.getNode(), n = (i) => L(i) && rr(i).length > 0;
  if (e.type === "text") {
    if (e.offset !== t.getTextContentSize())
      return;
    const i = t.getNextSibling();
    return n(i) ? i : void 0;
  }
  if (n(t))
    return e.offset < ka(t) ? t : void 0;
  if (!A(t))
    return;
  const r = t.getChildAtIndex(e.offset);
  return n(r) ? r : void 0;
}
function Wx(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), n = ew(t);
  if (n)
    return tw(n, t, e.offset) ? void 0 : n;
}
function tw(e, t, n) {
  const r = rr(e), i = r[r.length - 1];
  return i !== void 0 && i.is(t) && n === i.getTextContentSize();
}
function nw(e) {
  const t = rr(e), n = t[t.length - 1];
  v(n) ? n.select(n.getTextContentSize(), n.getTextContentSize()) : cr(e, ka(e));
}
function rw() {
  const e = w();
  if (!E(e))
    return !1;
  if (!e.isCollapsed())
    return Gx(e);
  const t = Cc(e.anchor) ?? jx(e.anchor);
  if (t) {
    const r = iw(t);
    return e.anchor.is(r) ? !1 : (Hx(e, r), !0);
  }
  const n = Vx(e.anchor) ?? Wx(e.anchor);
  return n ? (nw(n), !0) : !1;
}
function $p(e) {
  const t = rr(e), n = t[t.length - 1];
  return v(n) ? tn(n.getKey(), n.getTextContentSize(), "text") : tn(e.getKey(), ka(e), "element");
}
function vc(e) {
  const t = e.getLastChild();
  return N(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker() ? e.getChildrenSize() - 1 : e.getChildrenSize();
}
function df(e) {
  const t = vc(e);
  if (t === e.getChildrenSize())
    return;
  const n = e.getChildAtIndex(t);
  return v(n) ? n : void 0;
}
function Rp(e) {
  const t = vc(e);
  if (t > ka(e)) {
    const n = e.getChildAtIndex(t - 1), r = A(n) ? n.getLastDescendant() : n;
    if (v(r))
      return tn(r.getKey(), r.getTextContentSize(), "text");
  }
  return $p(e);
}
function iw(e) {
  const t = _o(e);
  return t ? tn(t.getKey(), 0, "text") : Rp(e);
}
function Cc(e) {
  const t = e.getNode(), n = t.getParent();
  if (L(n) && rr(n).length > 0 && df(n)?.is(t))
    return n;
  if (e.type !== "element")
    return;
  if (L(t) && rr(t).length > 0 && df(t))
    return e.offset > vc(t) || e.offset === vc(t) && e.offset > ka(t) ? t : void 0;
  if (!A(t))
    return;
  const r = t.getChildAtIndex(e.offset - 1);
  return L(r) && rr(r).length > 0 && !r.getNextSibling() ? r : void 0;
}
function Hx(e, t) {
  e.anchor.set(t.key, t.offset, t.type), e.focus.set(t.key, t.offset, t.type);
}
function pf(e) {
  const t = wn(e);
  return t && rr(t).length > 0 ? t : void 0;
}
function sw(e) {
  for (const t of [e.anchor, e.focus]) {
    const n = pf(t.getNode()) ?? Vx(t) ?? jx(t) ?? Cc(t);
    if (n)
      return n;
  }
  for (const t of e.getNodes()) {
    const n = pf(t);
    if (n)
      return n;
  }
}
function Gx(e) {
  const t = sw(e);
  if (!t)
    return !1;
  const n = $p(t), r = Rp(t);
  let i = !1;
  for (const s of [e.anchor, e.focus]) {
    const o = s.isBefore(n) ? n : r.isBefore(s) ? r : void 0;
    !o || s.is(o) || (s.set(o.key, o.offset, o.type), i = !0);
  }
  return i;
}
function Gg(e, t) {
  const n = Kr();
  return n.anchor.set(e.key, e.offset, e.type), n.focus.set(t.key, t.offset, t.type), n.getTextContent();
}
function Jg(e, t) {
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
function Yg(e, t, n) {
  const r = Jg(e, t), i = Jg(e, n);
  return r !== void 0 && i !== void 0 && Math.abs(r - i) >= 1;
}
function ow(e) {
  if (e.type === "element") {
    const n = e.getNode();
    return A(n) ? n.getChildAtIndex(e.offset) ?? void 0 : void 0;
  }
  const t = e.getNode();
  return t.getTextContentSize() === e.offset ? t.getNextSibling() ?? void 0 : void 0;
}
function Jx(e, t, n, r) {
  const i = t.anchor, s = Cc(i);
  if (s) {
    const f = i.type === "text" && i.offset === 0, d = Rp(s);
    return Hx(t, d), n && f && !Cc(d) ? Jx(e, t, n, r) : !0;
  }
  const o = pf(i.getNode());
  if (!o) {
    if (n)
      return !1;
    const f = ow(t.focus);
    return L(f) && rr(f).length > 0;
  }
  if (Wx(i))
    return !0;
  const a = $p(o);
  if (n) {
    if (!(a.isBefore(i) && !a.is(i)))
      return !0;
    const f = Gg(a, i);
    return f === "" ? !0 : r === "character" || r === "word" && /[\p{L}\p{N}]/u.test(f) || r === "line" && Yg(e, a, i) ? !1 : (t.anchor.set(a.key, a.offset, a.type), t.removeText(), !0);
  }
  if (i.isBefore(a))
    return !0;
  const c = df(o);
  if (!c)
    return !1;
  const l = tn(c.getKey(), 0, "text"), u = Gg(i, l);
  return u === "" ? !0 : r === "character" || r === "word" && /[\p{L}\p{N}]/u.test(u) || r === "line" && Yg(e, i, l) ? !1 : (t.focus.set(l.key, l.offset, l.type), t.removeText(), !0);
}
function aw() {
  const [e] = Se();
  return G(() => {
    const t = (s) => () => {
      const o = w();
      return !E(o) || o.isCollapsed() || !Gx(o) ? !1 : s && o.isCollapsed();
    }, n = t(!1), r = t(!0), i = (s) => (o) => {
      const a = w();
      return E(a) ? a.isCollapsed() ? Jx(e, a, o, s) : r() : !1;
    };
    return it(e.registerCommand(la, n, Xe), e.registerCommand(nr, n, Xe), e.registerCommand(Ko, n, Xe), e.registerCommand(NS, n, Xe), e.registerCommand(Wc, i("character"), Xe), e.registerCommand(ed, i("word"), Xe), e.registerCommand(tc, i("line"), Xe), e.registerCommand(_y, r, Xe), e.registerCommand(or, r, Xe));
  }, [e]), G(() => {
    const t = () => {
      rw() && e.dispatchCommand(ud, void 0);
    };
    return it(
      e.registerCommand(bn, () => (t(), !1), qi),
      // Select-all is the rich-text plugin's `$selectAll`, confined in the same update rather than
      // after the selection change it announces, which an edit may come before.
      e.registerCommand(Py, () => (wS(), t(), !0), Qe)
    );
  }, [e]), null;
}
function cw({ onChange: e, viewOptions: t }) {
  const [n] = Se();
  return G(() => n.registerCommand(bn, () => {
    const r = ul(t);
    return e?.(r), !1;
  }, zt), [n, e, t]), null;
}
function lw() {
  const [e] = Se();
  return uw(e), null;
}
function uw(e) {
  G(() => {
    if (!e.hasNodes([Kt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(Kt, (t) => fw(t, e));
  }, [e]);
}
function fw(e, t) {
  Qu(t, e.getKey()) && qk(e.getFirstChild()), !(!ye(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = Q(e.getKey());
    return ye(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Yx({ onStateChange: e }) {
  const [t] = Se(), [n, r] = Re(t), i = re(!1), s = re(!1), o = re(void 0), a = re(void 0), c = Ae(() => {
    const l = w();
    let u;
    if (E(l)) {
      const f = l.anchor.getNode(), d = l.focus.getNode();
      let p = f.getKey() === "root" ? f : nt(f, (y) => {
        const k = y.getParent();
        return k !== null && sd(k);
      });
      p === null && (p = f.getTopLevelElementOrThrow()), Vi(p) && (p = nt(f, ye) ?? p);
      const h = p.getKey(), g = n.getElementByKey(h), m = CM(f, d);
      if (m && GE(m) && (u = m.getMarker()), g !== null && (ye(p) || Ie(p) || Gr(p))) {
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
  return G(() => t.registerCommand(bn, (l, u) => (c(), r(u), !1), Xe), [t, c]), G(() => it(n.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), n.registerCommand(OS, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Xe), n.registerCommand($S, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Xe)), [c, n, e]), null;
}
function Xx(e) {
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
  return e ? yt(e) ? e : nt(e, (n) => yt(n)) ?? void 0 : void 0;
}
function Qx(e) {
  if (!E(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const n of e.getNodes()) {
    const r = ui(n);
    r && t.add(r.getKey());
  }
  return t.size > 1;
}
function Ip(e) {
  return E(e) && e.isCollapsed() && e.anchor.type === "element" || !E(e) && !zc(e) ? !1 : e.getNodes().some((t) => we(t));
}
function Zx(e) {
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
function eT(e) {
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
function Xg(e, t) {
  return !!hf(e, t);
}
function hf(e, t) {
  if (!E(e) || !e.isCollapsed())
    return;
  const { anchor: n } = e, r = n.getNode();
  if (n.type === "element" && A(r)) {
    const s = r.getChildren(), o = t === "backward" ? n.offset - 1 : n.offset;
    if (o < 0)
      return;
    const a = s[o];
    return we(a) ? a : void 0;
  }
  if (t === "backward") {
    if (n.offset !== 0)
      return;
    const s = r.getPreviousSibling();
    return we(s) ? s : void 0;
  }
  if (n.offset !== r.getTextContentSize())
    return;
  const i = r.getNextSibling();
  return we(i) ? i : void 0;
}
function Sc(e, t) {
  if (!E(e))
    return !1;
  const n = ui(e.anchor.getNode());
  return n ? !!(t === "backward" ? n.getPreviousSibling() : n.getNextSibling()) : !1;
}
function Is(e) {
  return Ip(e) || Qx(e);
}
function tT(e, t) {
  if (Ip(e) || Qx(e))
    return !0;
  if (!E(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Zx(e) && Sc(e, "backward") || Xg(e, "backward");
    case "deleteForward":
      return eT(e) && Sc(e, "forward") || Xg(e, "forward");
    case "insertText":
      return !1;
  }
}
function dw(e, t) {
  if (!(!E(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const n = hf(e, "backward");
      if (n)
        return { kind: "verse", node: n };
      if (Zx(e) && Sc(e, "backward")) {
        const r = ui(e.anchor.getNode());
        if (Ct(r))
          return { kind: "para", node: r };
      }
      return;
    }
    if (t === "deleteForward") {
      const n = hf(e, "forward");
      if (n)
        return { kind: "verse", node: n };
      if (eT(e) && Sc(e, "forward")) {
        const i = ui(e.anchor.getNode())?.getNextSibling();
        if (Ct(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Qg(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return zc(e) && e.has(t.key);
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
function nT(e) {
  if (v(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else A(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function pw(e) {
  const t = e.getPreviousSibling();
  if (!yt(t))
    return;
  const n = t.getLastChild(), r = e.getFirstChild(), i = xn(r), s = e.getChildren().filter((o) => !vn(o) && !(i && o.is(r)));
  t.append(...s), e.remove(), n ? nT(n) : cs(t) || t.selectStart();
}
function rT(e) {
  return we(e) || ct(e) ? [] : Ct(e) ? e.getChildren().flatMap(rT) : [e];
}
function hw(e) {
  const t = [];
  for (const n of e) {
    const r = rT(n);
    r.length !== 0 && (Ct(n) && t.length > 0 && t.push(Ue(" ")), t.push(...r));
  }
  return t;
}
function Zg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function gw(e) {
  if (Array.isArray(e)) return e;
}
function mw(e, t) {
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
function yw() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bw(e, t) {
  return gw(e) || mw(e, t) || kw(e, t) || yw();
}
function kw(e, t) {
  if (e) {
    if (typeof e == "string") return Zg(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Zg(e, t) : void 0;
  }
}
const iT = Object.entries, em = Object.setPrototypeOf, xw = Object.isFrozen, Tw = Object.getPrototypeOf, vw = Object.getOwnPropertyDescriptor;
let jt = Object.freeze, Ht = Object.seal, Ss = Object.create, sT = typeof Reflect < "u" && Reflect, gf = sT.apply, mf = sT.construct;
jt || (jt = function(t) {
  return t;
});
Ht || (Ht = function(t) {
  return t;
});
gf || (gf = function(t, n) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++)
    i[s - 2] = arguments[s];
  return t.apply(n, i);
});
mf || (mf = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return new t(...r);
});
const ks = Mt(Array.prototype.forEach), Cw = Mt(Array.prototype.lastIndexOf), tm = Mt(Array.prototype.pop), xs = Mt(Array.prototype.push), Sw = Mt(Array.prototype.splice), ti = Array.isArray, Mo = Mt(String.prototype.toLowerCase), pu = Mt(String.prototype.toString), nm = Mt(String.prototype.match), bo = Mt(String.prototype.replace), rm = Mt(String.prototype.indexOf), _w = Mt(String.prototype.trim), Mw = Mt(Number.prototype.toString), Ew = Mt(Boolean.prototype.toString), im = typeof BigInt > "u" ? null : Mt(BigInt.prototype.toString), sm = typeof Symbol > "u" ? null : Mt(Symbol.prototype.toString), wt = Mt(Object.prototype.hasOwnProperty), ko = Mt(Object.prototype.toString), Nt = Mt(RegExp.prototype.test), Ci = Aw(TypeError);
function Mt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return gf(e, t, r);
  };
}
function Aw(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return mf(e, n);
  };
}
function Ke(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mo;
  if (em && em(e, null), !ti(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let i = t[r];
    if (typeof i == "string") {
      const s = n(i);
      s !== i && (xw(t) || (t[r] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function Pw(e) {
  for (let t = 0; t < e.length; t++)
    wt(e, t) || (e[t] = null);
  return e;
}
function Jt(e) {
  const t = Ss(null);
  for (const r of iT(e)) {
    var n = bw(r, 2);
    const i = n[0], s = n[1];
    wt(e, i) && (ti(s) ? t[i] = Pw(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = Jt(s) : t[i] = s);
  }
  return t;
}
function Nw(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Mw(e);
    case "boolean":
      return Ew(e);
    case "bigint":
      return im ? im(e) : "0";
    case "symbol":
      return sm ? sm(e) : "Symbol()";
    case "undefined":
      return ko(e);
    case "function":
    case "object": {
      if (e === null)
        return ko(e);
      const t = e, n = Yn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : ko(r);
      }
      return ko(e);
    }
    default:
      return ko(e);
  }
}
function Yn(e, t) {
  for (; e !== null; ) {
    const r = vw(e, t);
    if (r) {
      if (r.get)
        return Mt(r.get);
      if (typeof r.value == "function")
        return Mt(r.value);
    }
    e = Tw(e);
  }
  function n() {
    return null;
  }
  return n;
}
function ww(e) {
  try {
    return Nt(e, ""), !0;
  } catch {
    return !1;
  }
}
const om = jt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), hu = jt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), gu = jt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ow = jt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), mu = jt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), $w = jt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), am = jt(["#text"]), cm = jt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), yu = jt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), lm = jt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ia = jt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Rw = Ht(/{{[\w\W]*|^[\w\W]*}}/g), Iw = Ht(/<%[\w\W]*|^[\w\W]*%>/g), Lw = Ht(/\${[\w\W]*/g), qw = Ht(/^data-[\-\w.\u00B7-\uFFFF]+$/), Dw = Ht(/^aria-[\-\w]+$/), um = Ht(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Kw = Ht(/^(?:\w+script|data):/i), Uw = Ht(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Bw = Ht(/^html$/i), Fw = Ht(/^[a-z][.\w]*(-[.\w]+)+$/i), fm = Ht(/<[/\w!]/g), dm = Ht(/<[/\w]/g), zw = Ht(/<\/no(script|embed|frames)/i), jw = Ht(/\/>/i), En = {
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
}, Vw = function() {
  return typeof window > "u" ? null : window;
}, Ww = function(t, n) {
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
}, pm = function() {
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
  return wt(t, n) && ti(t[n]) ? Ke(i.base ? Jt(i.base) : {}, t[n], i.transform) : r;
};
function oT() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Vw();
  const t = (H) => oT(H);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== En.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, i = r.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, f = e.trustedTypes, d = a.prototype, p = Yn(d, "cloneNode"), h = Yn(d, "remove"), g = Yn(d, "nextSibling"), m = Yn(d, "childNodes"), y = Yn(d, "parentNode"), k = Yn(d, "shadowRoot"), x = Yn(d, "attributes"), S = o && o.prototype ? Yn(o.prototype, "nodeType") : null, _ = o && o.prototype ? Yn(o.prototype, "nodeName") : null, U = o && o.prototype ? Yn(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const H = n.createElement("template");
    H.content && H.content.ownerDocument && (n = H.content.ownerDocument);
  }
  let B, V = "", ne, se = !1, W = 0;
  const he = function() {
    if (W > 0)
      throw Ci('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, be = function(b) {
    he(), W++;
    try {
      return B.createHTML(b);
    } finally {
      W--;
    }
  }, He = function(b) {
    he(), W++;
    try {
      return B.createScriptURL(b);
    } finally {
      W--;
    }
  }, $ = function() {
    return se || (ne = Ww(f, i), se = !0), ne;
  }, Z = n, Te = Z.implementation, Pe = Z.createNodeIterator, Oe = Z.createDocumentFragment, Gt = Z.getElementsByTagName, Cn = r.importNode;
  let Le = pm();
  t.isSupported = typeof iT == "function" && typeof y == "function" && Te && Te.createHTMLDocument !== void 0;
  const me = Rw, F = Iw, le = Lw, Me = qw, Ye = Dw, ut = Kw, xt = Uw, Sn = Fw;
  let ie = um, Ce = null;
  const Nr = Ke({}, [...om, ...hu, ...gu, ...mu, ...am]);
  let qe = null;
  const yr = Ke({}, [...cm, ...yu, ...lm, ...Ia]);
  let ge = Object.seal(Ss(null, {
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
  })), Bt = null, Zt = null;
  const I = Object.seal(Ss(null, {
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
  let j = !0, J = !0, Y = !1, ue = !0, te = !1, ee = !0, ce = !1, fe = !1, Be = null, De = null, an = !1, _n = !1, wr = !1, bi = !1, uo = !0, ps = !1;
  const Ma = "user-content-";
  let hs = !0, O = !1, R = {}, K = null;
  const X = Ke({}, [
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
  let Ee = null;
  const Ve = Ke({}, ["audio", "video", "img", "source", "image", "track"]);
  let Fe = null;
  const Ge = Ke({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Tt = "http://www.w3.org/1998/Math/MathML", gt = "http://www.w3.org/2000/svg", st = "http://www.w3.org/1999/xhtml";
  let kt = st, ki = !1, Mn = null;
  const Or = Ke({}, [Tt, gt, st], pu), xh = jt(["mi", "mo", "mn", "ms", "mtext"]);
  let Ll = Ke({}, xh);
  const Th = jt(["annotation-xml"]);
  let ql = Ke({}, Th);
  const rS = Ke({}, ["title", "style", "font", "a", "script"]);
  let fo = null;
  const iS = ["application/xhtml+xml", "text/html"], sS = "text/html";
  let dt = null, gs = null;
  const oS = n.createElement("form"), vh = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, Dl = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (gs && gs === b)
      return;
    (!b || typeof b != "object") && (b = {}), b = Jt(b), fo = // eslint-disable-next-line unicorn/prefer-includes
    iS.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? sS : b.PARSER_MEDIA_TYPE, dt = fo === "application/xhtml+xml" ? pu : Mo, Ce = Qr(b, "ALLOWED_TAGS", Nr, {
      transform: dt
    }), qe = Qr(b, "ALLOWED_ATTR", yr, {
      transform: dt
    }), Mn = Qr(b, "ALLOWED_NAMESPACES", Or, {
      transform: pu
    }), Fe = Qr(b, "ADD_URI_SAFE_ATTR", Ge, {
      transform: dt,
      base: Ge
    }), Ee = Qr(b, "ADD_DATA_URI_TAGS", Ve, {
      transform: dt,
      base: Ve
    }), K = Qr(b, "FORBID_CONTENTS", X, {
      transform: dt
    }), Bt = Qr(b, "FORBID_TAGS", Jt({}), {
      transform: dt
    }), Zt = Qr(b, "FORBID_ATTR", Jt({}), {
      transform: dt
    }), R = wt(b, "USE_PROFILES") ? b.USE_PROFILES && typeof b.USE_PROFILES == "object" ? Jt(b.USE_PROFILES) : b.USE_PROFILES : !1, j = b.ALLOW_ARIA_ATTR !== !1, J = b.ALLOW_DATA_ATTR !== !1, Y = b.ALLOW_UNKNOWN_PROTOCOLS || !1, ue = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, te = b.SAFE_FOR_TEMPLATES || !1, ee = b.SAFE_FOR_XML !== !1, ce = b.WHOLE_DOCUMENT || !1, _n = b.RETURN_DOM || !1, wr = b.RETURN_DOM_FRAGMENT || !1, bi = b.RETURN_TRUSTED_TYPE || !1, an = b.FORCE_BODY || !1, uo = b.SANITIZE_DOM !== !1, ps = b.SANITIZE_NAMED_PROPS || !1, hs = b.KEEP_CONTENT !== !1, O = b.IN_PLACE || !1, ie = ww(b.ALLOWED_URI_REGEXP) ? b.ALLOWED_URI_REGEXP : um, kt = typeof b.NAMESPACE == "string" ? b.NAMESPACE : st, Ll = wt(b, "MATHML_TEXT_INTEGRATION_POINTS") && b.MATHML_TEXT_INTEGRATION_POINTS && typeof b.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Jt(b.MATHML_TEXT_INTEGRATION_POINTS) : Ke({}, xh), ql = wt(b, "HTML_INTEGRATION_POINTS") && b.HTML_INTEGRATION_POINTS && typeof b.HTML_INTEGRATION_POINTS == "object" ? Jt(b.HTML_INTEGRATION_POINTS) : Ke({}, Th);
    const M = wt(b, "CUSTOM_ELEMENT_HANDLING") && b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING == "object" ? Jt(b.CUSTOM_ELEMENT_HANDLING) : Ss(null);
    if (ge = Ss(null), wt(M, "tagNameCheck") && vh(M.tagNameCheck) && (ge.tagNameCheck = M.tagNameCheck), wt(M, "attributeNameCheck") && vh(M.attributeNameCheck) && (ge.attributeNameCheck = M.attributeNameCheck), wt(M, "allowCustomizedBuiltInElements") && typeof M.allowCustomizedBuiltInElements == "boolean" && (ge.allowCustomizedBuiltInElements = M.allowCustomizedBuiltInElements), Ht(ge), te && (J = !1), wr && (_n = !0), R && (Ce = Ke({}, am), qe = Ss(null), R.html === !0 && (Ke(Ce, om), Ke(qe, cm)), R.svg === !0 && (Ke(Ce, hu), Ke(qe, yu), Ke(qe, Ia)), R.svgFilters === !0 && (Ke(Ce, gu), Ke(qe, yu), Ke(qe, Ia)), R.mathMl === !0 && (Ke(Ce, mu), Ke(qe, lm), Ke(qe, Ia))), I.tagCheck = null, I.attributeCheck = null, wt(b, "ADD_TAGS") && (typeof b.ADD_TAGS == "function" ? I.tagCheck = b.ADD_TAGS : ti(b.ADD_TAGS) && (Ce === Nr && (Ce = Jt(Ce)), Ke(Ce, b.ADD_TAGS, dt))), wt(b, "ADD_ATTR") && (typeof b.ADD_ATTR == "function" ? I.attributeCheck = b.ADD_ATTR : ti(b.ADD_ATTR) && (qe === yr && (qe = Jt(qe)), Ke(qe, b.ADD_ATTR, dt))), wt(b, "ADD_URI_SAFE_ATTR") && ti(b.ADD_URI_SAFE_ATTR) && Ke(Fe, b.ADD_URI_SAFE_ATTR, dt), wt(b, "FORBID_CONTENTS") && ti(b.FORBID_CONTENTS) && (K === X && (K = Jt(K)), Ke(K, b.FORBID_CONTENTS, dt)), wt(b, "ADD_FORBID_CONTENTS") && ti(b.ADD_FORBID_CONTENTS) && (K === X && (K = Jt(K)), Ke(K, b.ADD_FORBID_CONTENTS, dt)), hs && (Ce["#text"] = !0), ce && Ke(Ce, ["html", "head", "body"]), Ce.table && (Ke(Ce, ["tbody"]), delete Bt.tbody), b.TRUSTED_TYPES_POLICY) {
      if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Ci('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Ci('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const z = B;
      B = b.TRUSTED_TYPES_POLICY;
      try {
        V = be("");
      } catch (oe) {
        throw B = z, oe;
      }
    } else b.TRUSTED_TYPES_POLICY === null ? (B = void 0, V = "") : (B === void 0 && (B = $()), B && typeof V == "string" && (V = be("")));
    jt && jt(b), gs = b;
  }, Ch = Ke({}, [...hu, ...gu, ...Ow]), Sh = Ke({}, [...mu, ...$w]), aS = function(b, M, z) {
    return M.namespaceURI === st ? b === "svg" : M.namespaceURI === Tt ? b === "svg" && (z === "annotation-xml" || Ll[z]) : !!Ch[b];
  }, cS = function(b, M, z) {
    return M.namespaceURI === st ? b === "math" : M.namespaceURI === gt ? b === "math" && ql[z] : !!Sh[b];
  }, lS = function(b, M, z) {
    return M.namespaceURI === gt && !ql[z] || M.namespaceURI === Tt && !Ll[z] ? !1 : !Sh[b] && (rS[b] || !Ch[b]);
  }, uS = function(b) {
    let M = y(b);
    (!M || !M.tagName) && (M = {
      namespaceURI: kt,
      tagName: "template"
    });
    const z = Mo(b.tagName), oe = Mo(M.tagName);
    return Mn[b.namespaceURI] ? b.namespaceURI === gt ? aS(z, M, oe) : b.namespaceURI === Tt ? cS(z, M, oe) : b.namespaceURI === st ? lS(z, M, oe) : !!(fo === "application/xhtml+xml" && Mn[b.namespaceURI]) : !1;
  }, Yr = function(b) {
    xs(t.removed, {
      element: b
    });
    try {
      y(b).removeChild(b);
    } catch {
      if (h(b), !y(b))
        throw Ci("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Ea = function(b) {
    po(b);
    const M = m(b);
    if (M) {
      const oe = [];
      ks(M, (de) => {
        xs(oe, de);
      }), ks(oe, (de) => {
        try {
          h(de);
        } catch {
        }
      });
    }
    const z = x(b);
    if (z)
      for (let oe = z.length - 1; oe >= 0; --oe) {
        const de = z[oe], ve = de && de.name;
        if (typeof ve == "string")
          try {
            b.removeAttribute(ve);
          } catch {
          }
      }
  }, xi = function(b, M) {
    try {
      xs(t.removed, {
        attribute: M.getAttributeNode(b),
        from: M
      });
    } catch {
      xs(t.removed, {
        attribute: null,
        from: M
      });
    }
    if (M.removeAttribute(b), b === "is")
      if (_n || wr)
        try {
          Yr(M);
        } catch {
        }
      else
        try {
          M.setAttribute(b, "");
        } catch {
        }
  }, fS = function(b) {
    const M = x(b);
    if (M)
      for (let z = M.length - 1; z >= 0; --z) {
        const oe = M[z], de = oe && oe.name;
        if (!(typeof de != "string" || qe[dt(de)]))
          try {
            b.removeAttribute(de);
          } catch {
          }
      }
  }, po = function(b) {
    const M = [b];
    for (; M.length > 0; ) {
      const z = M.pop();
      (S ? S(z) : z.nodeType) === En.element && fS(z);
      const de = m(z);
      if (de)
        for (let ve = de.length - 1; ve >= 0; --ve)
          M.push(de[ve]);
    }
  }, dS = function(b) {
    if (!ee)
      return;
    const M = [b];
    for (; M.length > 0; ) {
      const z = M.pop(), oe = S ? S(z) : z.nodeType;
      if (oe === En.processingInstruction || oe === En.comment && Nt(dm, z.data)) {
        try {
          h(z);
        } catch {
        }
        continue;
      }
      if (oe === En.element) {
        const ve = z, et = dt(_ ? _(z) : z.nodeName);
        try {
          ve.hasAttribute && ve.hasAttribute("patchsrc") && ve.removeAttribute("patchsrc"), ve.hasAttribute && ve.hasAttribute("for") && et !== "label" && et !== "output" && ve.removeAttribute("for");
        } catch {
        }
      }
      const de = m(z);
      if (de)
        for (let ve = de.length - 1; ve >= 0; --ve)
          M.push(de[ve]);
    }
  }, _h = function(b) {
    let M = null, z = null;
    if (an)
      b = "<remove></remove>" + b;
    else {
      const ve = nm(b, /^[\r\n\t ]+/);
      z = ve && ve[0];
    }
    fo === "application/xhtml+xml" && kt === st && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const oe = B ? be(b) : b;
    if (kt === st)
      try {
        M = new u().parseFromString(oe, fo);
      } catch {
      }
    if (!M || !M.documentElement) {
      M = Te.createDocument(kt, "template", null);
      try {
        M.documentElement.innerHTML = ki ? V : oe;
      } catch {
      }
    }
    const de = M.body || M.documentElement;
    return b && z && de.insertBefore(n.createTextNode(z), de.childNodes[0] || null), kt === st ? Gt.call(M, ce ? "html" : "body")[0] : ce ? M.documentElement : de;
  }, Mh = function(b) {
    const M = U ? U(b) : b.ownerDocument;
    return Pe.call(
      M || b,
      b,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Aa = function(b) {
    return b = bo(b, me, " "), b = bo(b, F, " "), b = bo(b, le, " "), b;
  }, Kl = function(b) {
    var M;
    b.normalize();
    const z = U ? U(b) : b.ownerDocument, oe = Pe.call(
      z || b,
      b,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let de = oe.nextNode();
    for (; de; )
      de.data = Aa(de.data), de = oe.nextNode();
    const ve = (M = b.querySelectorAll) === null || M === void 0 ? void 0 : M.call(b, "template");
    ve && ks(ve, (et) => {
      ms(et.content) && Kl(et.content);
    });
  }, Pa = function(b) {
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
  }, ms = function(b) {
    if (!S || typeof b != "object" || b === null)
      return !1;
    try {
      return S(b) === En.documentFragment;
    } catch {
      return !1;
    }
  }, ho = function(b) {
    if (!S || typeof b != "object" || b === null)
      return !1;
    try {
      return typeof S(b) == "number";
    } catch {
      return !1;
    }
  };
  function br(H, b, M) {
    H.length !== 0 && ks(H, (z) => {
      z.call(t, b, M, gs);
    });
  }
  const pS = function(b, M) {
    return !!(ee && b.hasChildNodes() && !ho(b.firstElementChild) && Nt(fm, b.textContent) && Nt(fm, b.innerHTML) || ee && b.namespaceURI === st && M === "style" && ho(b.firstElementChild) || b.nodeType === En.processingInstruction || ee && b.nodeType === En.comment && Nt(dm, b.data));
  }, hS = function(b, M, z) {
    if (!Bt[M] && Nh(M) && (ge.tagNameCheck instanceof RegExp && Nt(ge.tagNameCheck, M) || ge.tagNameCheck instanceof Function && ge.tagNameCheck(M)))
      return !1;
    if (hs && !K[M]) {
      const oe = y(b), de = m(b);
      if (de && oe) {
        const ve = de.length;
        for (let et = ve - 1; et >= 0; --et) {
          const pt = b === z ? p(de[et], !0) : de[et];
          oe.insertBefore(pt, g(b));
        }
      }
    }
    return Yr(b), !0;
  }, Eh = function(b, M, z, oe) {
    return b.length === 0 ? M : M === z || M === oe ? Jt(M) : M;
  }, Ah = function(b, M) {
    if (br(Le.beforeSanitizeElements, b, null), b !== M && y(b) === null)
      return O && po(b), !0;
    if (Pa(b))
      return Yr(b), !0;
    const z = dt(_ ? _(b) : b.nodeName);
    if (Ce = Eh(Le.uponSanitizeElement, Ce, Nr, Be), br(Le.uponSanitizeElement, b, {
      tagName: z,
      allowedTags: Ce
    }), b !== M && y(b) === null)
      return O && po(b), !0;
    if (pS(b, z))
      return Yr(b), !0;
    if (Bt[z] || !(I.tagCheck instanceof Function && I.tagCheck(z)) && !Ce[z]) {
      const de = hS(b, z, M);
      return de === !1 && br(Le.afterSanitizeElements, b, null), de;
    }
    if ((S ? S(b) : b.nodeType) === En.element && !uS(b) || (z === "noscript" || z === "noembed" || z === "noframes") && Nt(zw, b.innerHTML))
      return Yr(b), !0;
    if (te && b.nodeType === En.text) {
      const de = Aa(b.textContent);
      b.textContent !== de && (xs(t.removed, {
        element: b.cloneNode()
      }), b.textContent = de);
    }
    return br(Le.afterSanitizeElements, b, null), !1;
  }, Ph = function(b, M, z) {
    if (Zt[M] || ee && M === "patchsrc" || ee && M === "for" && b !== "label" && b !== "output" || uo && (M === "id" || M === "name") && (z in n || z in oS))
      return !1;
    const oe = qe[M] || I.attributeCheck instanceof Function && I.attributeCheck(M, b);
    if (!(J && Nt(Me, M))) {
      if (!(j && Nt(Ye, M))) {
        if (oe) {
          if (!Fe[M]) {
            if (!Nt(ie, bo(z, xt, ""))) {
              if (!((M === "src" || M === "xlink:href" || M === "href") && b !== "script" && rm(z, "data:") === 0 && Ee[b])) {
                if (!(Y && !Nt(ut, bo(z, xt, "")))) {
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
          !(Nh(b) && (ge.tagNameCheck instanceof RegExp && Nt(ge.tagNameCheck, b) || ge.tagNameCheck instanceof Function && ge.tagNameCheck(b)) && (ge.attributeNameCheck instanceof RegExp && Nt(ge.attributeNameCheck, M) || ge.attributeNameCheck instanceof Function && ge.attributeNameCheck(M, b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          M === "is" && ge.allowCustomizedBuiltInElements && (ge.tagNameCheck instanceof RegExp && Nt(ge.tagNameCheck, z) || ge.tagNameCheck instanceof Function && ge.tagNameCheck(z)))
        ) return !1;
      }
    }
    return !0;
  }, gS = Ke({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Nh = function(b) {
    return !gS[Mo(b)] && Nt(Sn, b);
  }, mS = function(b, M, z, oe) {
    if (B && typeof f == "object" && typeof f.getAttributeType == "function" && !z)
      switch (f.getAttributeType(b, M)) {
        case "TrustedHTML":
          return be(oe);
        case "TrustedScriptURL":
          return He(oe);
      }
    return oe;
  }, yS = function(b, M, z, oe) {
    try {
      z ? b.setAttributeNS(z, M, oe) : b.setAttribute(M, oe), Pa(b) ? Yr(b) : tm(t.removed);
    } catch {
      xi(M, b);
    }
  }, wh = function(b) {
    br(Le.beforeSanitizeAttributes, b, null);
    const M = b.attributes;
    if (!M || Pa(b))
      return;
    qe = Eh(Le.uponSanitizeAttribute, qe, yr, De);
    const z = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: qe,
      forceKeepAttr: void 0
    };
    let oe = M.length;
    const de = dt(b.nodeName);
    for (; oe--; ) {
      const ve = M[oe], et = ve.name, pt = ve.namespaceURI, cn = ve.value, ln = dt(et), Bl = cn;
      let en = et === "value" ? Bl : _w(Bl);
      if (z.attrName = ln, z.attrValue = en, z.keepAttr = !0, z.forceKeepAttr = void 0, br(Le.uponSanitizeAttribute, b, z), en = z.attrValue, ps && (ln === "id" || ln === "name") && rm(en, Ma) !== 0 && (xi(et, b), en = Ma + en), ee && Nt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, en)) {
        xi(et, b);
        continue;
      }
      if (ln === "attributename" && nm(en, "href")) {
        xi(et, b);
        continue;
      }
      if (!z.forceKeepAttr) {
        if (!z.keepAttr) {
          xi(et, b);
          continue;
        }
        if (!ue && Nt(jw, en)) {
          xi(et, b);
          continue;
        }
        if (te && (en = Aa(en)), !Ph(de, ln, en)) {
          xi(et, b);
          continue;
        }
        en = mS(de, ln, pt, en), en !== Bl && yS(b, et, pt, en);
      }
    }
    br(Le.afterSanitizeAttributes, b, null);
  }, Na = function(b) {
    let M = null;
    const z = Mh(b);
    for (br(Le.beforeSanitizeShadowDOM, b, null); M = z.nextNode(); )
      if (br(Le.uponSanitizeShadowNode, M, null), Ah(M, b), wh(M), ms(M.content) && Na(M.content), (S ? S(M) : M.nodeType) === En.element) {
        const de = k(M);
        ms(de) && (Ul(de), Na(de));
      }
    br(Le.afterSanitizeShadowDOM, b, null);
  }, Ul = function(b) {
    const M = [{
      node: b,
      shadow: null
    }];
    for (; M.length > 0; ) {
      const z = M.pop();
      if (z.shadow) {
        Na(z.shadow);
        continue;
      }
      const oe = z.node, ve = (S ? S(oe) : oe.nodeType) === En.element, et = m(oe);
      if (et)
        for (let pt = et.length - 1; pt >= 0; --pt)
          M.push({
            node: et[pt],
            shadow: null
          });
      if (ve) {
        const pt = _ ? _(oe) : null;
        if (typeof pt == "string" && dt(pt) === "template") {
          const cn = oe.content;
          ms(cn) && M.push({
            node: cn,
            shadow: null
          });
        }
      }
      if (ve) {
        const pt = k(oe);
        ms(pt) && M.push({
          node: null,
          shadow: pt
        }, {
          node: pt,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(H) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, M = null, z = null, oe = null, de = null;
    if (ki = !H, ki && (H = "<!-->"), typeof H != "string" && !ho(H) && (H = Nw(H), typeof H != "string"))
      throw Ci("dirty is not a string, aborting");
    if (!t.isSupported)
      return H;
    fe ? (Ce = Be, qe = De) : Dl(b), (Le.uponSanitizeElement.length > 0 || Le.uponSanitizeAttribute.length > 0) && (Ce = Jt(Ce)), Le.uponSanitizeAttribute.length > 0 && (qe = Jt(qe)), t.removed = [];
    const ve = O && typeof H != "string" && ho(H);
    if (ve) {
      dS(H);
      const cn = _ ? _(H) : H.nodeName;
      if (typeof cn == "string") {
        const ln = dt(cn);
        if (!Ce[ln] || Bt[ln])
          throw Ea(H), Ci("root node is forbidden and cannot be sanitized in-place");
      }
      if (Pa(H))
        throw Ea(H), Ci("root node is clobbered and cannot be sanitized in-place");
      try {
        Ul(H);
      } catch (ln) {
        throw Ea(H), ln;
      }
    } else if (ho(H))
      M = _h("<!---->"), z = M.ownerDocument.importNode(H, !0), z.nodeType === En.element && z.nodeName === "BODY" || z.nodeName === "HTML" ? M = z : M.appendChild(z), Ul(z);
    else {
      if (!_n && !te && !ce && // eslint-disable-next-line unicorn/prefer-includes
      H.indexOf("<") === -1)
        return B && bi ? be(H) : H;
      if (M = _h(H), !M)
        return _n ? null : bi ? V : "";
    }
    M && an && Yr(M.firstChild);
    const et = ve ? H : M;
    try {
      const cn = Mh(et);
      for (; oe = cn.nextNode(); )
        Ah(oe, et), wh(oe), ms(oe.content) && Na(oe.content);
    } catch (cn) {
      throw ve && (Ea(H), ks(t.removed, (ln) => {
        ln.element && po(ln.element);
      })), cn;
    }
    if (ve)
      return ks(t.removed, (cn) => {
        cn.element && po(cn.element);
      }), te && Kl(H), H;
    if (_n) {
      if (te && Kl(M), wr)
        for (de = Oe.call(M.ownerDocument); M.firstChild; )
          de.appendChild(M.firstChild);
      else
        de = M;
      return (qe.shadowroot || qe.shadowrootmode) && (de = Cn.call(r, de, !0)), de;
    }
    let pt = ce ? M.outerHTML : M.innerHTML;
    return ce && Ce["!doctype"] && M.ownerDocument && M.ownerDocument.doctype && M.ownerDocument.doctype.name && Nt(Bw, M.ownerDocument.doctype.name) && (pt = "<!DOCTYPE " + M.ownerDocument.doctype.name + `>
` + pt), te && (pt = Aa(pt)), B && bi ? be(pt) : pt;
  }, t.setConfig = function() {
    let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Dl(H), fe = !0, Be = Ce, De = qe;
  }, t.clearConfig = function() {
    gs = null, fe = !1, Be = null, De = null, B = ne, V = "";
  }, t.isValidAttribute = function(H, b, M) {
    gs || Dl({});
    const z = dt(H), oe = dt(b);
    return Ph(z, oe, M);
  }, t.addHook = function(H, b) {
    typeof b == "function" && wt(Le, H) && xs(Le[H], b);
  }, t.removeHook = function(H, b) {
    if (wt(Le, H)) {
      if (b !== void 0) {
        const M = Cw(Le[H], b);
        return M === -1 ? void 0 : Sw(Le[H], M, 1)[0];
      }
      return tm(Le[H]);
    }
  }, t.removeHooks = function(H) {
    wt(Le, H) && (Le[H] = []);
  }, t.removeAllHooks = function() {
    Le = pm();
  }, t;
}
var Hw = oT();
function Gw({ structureProtectionMode: e = "off" }) {
  const [t] = Se(), n = re(void 0), [r, i] = Re(void 0), s = Ae((o) => {
    n.current = o, i(o);
  }, []);
  return G(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = Xx(p);
      if (!h)
        return !1;
      const g = w();
      return e === "protected" ? g && tT(g, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const g = w(), m = n.current;
      if (m && g && Qg(g, m)) {
        if (s(void 0), h.preventDefault(), p !== m.intent)
          return !0;
        const k = Q(m.key) ?? void 0;
        if (m.kind === "verse") {
          if (k) {
            const x = k.getParent(), S = k.getPreviousSibling(), _ = k.getNextSibling();
            k.remove(), S ? nT(S) : _ && v(_) ? _.select(0, 0) : x?.selectStart();
          }
        } else m.kind === "selection" ? E(g) && (bp(g), g.removeText()) : Ct(k) && pw(k);
        return !0;
      }
      if (!g)
        return !1;
      const y = dw(g, p);
      if (y) {
        if (y.kind === "verse") {
          const k = Ny();
          k.add(y.node.getKey()), zn(k);
        } else {
          const k = Kr();
          k.anchor.set(y.node.getKey(), 0, "element"), k.focus.set(y.node.getKey(), y.node.getChildrenSize(), "element"), zn(k);
        }
        return s({ key: y.node.getKey(), kind: y.kind, intent: p }), h.preventDefault(), !0;
      }
      if (E(g) && !g.isCollapsed() && Ip(g)) {
        const k = g.getNodes().filter(we).map((_) => _.getKey()), { anchor: x, focus: S } = g;
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
      return !h || !Is(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const g = Hw.sanitize(p), m = new DOMParser().parseFromString(g, "text/html"), y = hw(t_(t, m)), k = w();
      return E(k) && k.insertNodes(y), h.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = w();
      return h && Is(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, f = (p) => {
      if (e !== "protected")
        return !1;
      const h = w();
      return h && Is(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, d = () => {
      const p = n.current;
      p && t.getEditorState().read(() => {
        Qg(w(), p) || s(void 0);
      });
    };
    return it(
      t.registerCommand(Er, o, Qe),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(or, c, Xe),
      t.registerCommand(nr, u, Qe),
      t.registerCommand(RS, c, Qe),
      t.registerCommand(rd, f, Qe),
      t.registerCommand(la, c, Qe),
      t.registerUpdateListener(d)
    );
  }, [t, e, s]), G(() => {
    const o = t.getRootElement();
    if (!o)
      return;
    const a = !!r && r.kind !== "para";
    return o.classList.toggle("verse-delete-armed", !!r), a ? (o.setAttribute("data-verse-delete-intent", r.intent), o.setAttribute("data-verse-delete-kind", r.kind)) : (o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind")), () => {
      o.classList.remove("verse-delete-armed"), o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind");
    };
  }, [t, r]), null;
}
const BD = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function Jw({ textDirection: e }) {
  const [t] = Se();
  return Yw(t, e), null;
}
function Yw(e, t) {
  G(() => (hm(e, t), e.registerUpdateListener(({ dirtyElements: n }) => {
    n.size > 0 && hm(e, t);
  })), [e, t]);
}
function hm(e, t) {
  if (t === "auto")
    return;
  const n = e.getRootElement();
  n && (n.dir = t);
  const r = e._config.theme.placeholder, i = document.getElementsByClassName(r)[0];
  i && (i.dir = t);
}
function Xw() {
  const [e] = Se();
  return Qw(e), null;
}
function Qw(e) {
  G(() => {
    if (!e.hasNodes([We, Qt, Ze, ot, Vt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return it(
      e.registerNodeTransform(ot, Zw),
      e.registerNodeTransform(ot, (t) => eO(t, e)),
      e.registerNodeTransform(Vt, gm),
      e.registerNodeTransform(Qt, gm),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(Vt, (t) => {
        Jo(Fr("va"), t), Jo(Fr("vp"), t);
      })
    );
  }, [e]);
}
function Zw(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), n = e.getNextSibling(), r = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || L(n) || D(r) || D(n) || ae(r) || ae(n) || rt(r) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  rt(n) && n.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  pe(e, ke) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  je(r))
    return;
  if (we(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  we(n) && ep(e);
}
function eO(e, t) {
  const n = e.getParent();
  !rt(n) || !e.isAttached() || IS(Fa) || Qu(t, e.getKey()) && !Qu(t, n.getKey()) && n.insertAfter(e);
}
function gm(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; ae(t); )
    t = t.getLastChild();
  (D(t) || gr(e) && v(t) && ae(t.getParent()) && !tO(t)) && e.insertBefore(Ue(" "));
}
function tO(e) {
  const t = e.getTextContent();
  return t.endsWith(" ") || t.endsWith(q);
}
function ml(e) {
  if (!L(e) || e.getIsCollapsed() !== !0)
    return;
  let t = e;
  for (; ; ) {
    if (t.getNextSiblings().some((i) => !ga(i)))
      return;
    const r = t.getParent();
    if (!r)
      return;
    if (!A(r) || !r.isInline())
      return e;
    t = r;
  }
}
function nO(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (A(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function rO() {
  const e = w();
  if (!(!E(e) || !e.isCollapsed()))
    return ml(nO(e.anchor));
}
function iO(e) {
  const t = w();
  let n;
  return E(t) ? t.isCollapsed() && (n = t.anchor.getNode()) : t || (n = aT(e.target)), n ? ml(nt(n, L)) : void 0;
}
function aT(e) {
  const t = LS(e)?.anchorNode;
  if (My(t))
    return Zi(t) ?? void 0;
}
function sO(e) {
  if (w())
    return;
  const t = aT(e);
  return t ? ml(nt(t, L)) : void 0;
}
function mm(e) {
  const t = nt(e.getNode(), L);
  return t?.getIsCollapsed() === !0 ? t : void 0;
}
function oO() {
  const e = w();
  if (!E(e) || e.isCollapsed())
    return !1;
  const [t, n] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], r = mm(t), i = mm(n);
  if (r && i && r.is(i))
    return !1;
  let s = !1;
  const o = r?.getParent();
  r && o && (t.set(o.getKey(), r.getIndexWithinParent(), "element"), s = !0);
  const a = i?.getParent();
  return i && a && (n.set(a.getKey(), i.getIndexWithinParent() + 1, "element"), s = !0), s;
}
const aO = 500;
function cO(e) {
  return e.shiftKey || e.altKey ? !1 : e.key === "End" || e.key === "ArrowDown" && e.metaKey;
}
function lO() {
  const e = w();
  if (!E(e) || e.isCollapsed())
    return;
  const [t, n] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
  if (t.type !== "element" || n.type !== "element" || t.key !== n.key || n.offset !== t.offset + 1)
    return;
  const r = t.getNode();
  if (A(r))
    return ml(r.getChildAtIndex(t.offset));
}
function uO() {
  const [e] = Se(), t = wp(rO), n = re(void 0);
  return G(() => {
    const r = (i) => {
      t(i) && Ft(Oi);
    };
    return it(e.registerCommand(
      Er,
      (i) => (n.current = cO(i) ? performance.now() : void 0, !1),
      // Only observes the press, and must see it whether or not a handler further down claims it.
      Xe
    ), e.registerCommand(bn, () => {
      if (n.current !== void 0 && performance.now() - n.current < aO) {
        const o = lO();
        if (o)
          return r(o), !1;
      }
      if (oO())
        return Ft(Oi), Ns(e, Oi), !1;
      const s = sO(e.getRootElement());
      return s && r(s), !1;
    }, qi), e.registerCommand(Vc, (i) => {
      const s = iO(i);
      return s && r(s), !1;
    }, qi));
  }, [e, t]), null;
}
function fO({ trigger: e, scriptureReference: t, contextMarker: n, getMarkerAction: r }) {
  const { markersMenuItems: i } = e1({
    scriptureReference: t,
    contextMarker: n,
    getMarkerAction: r
  });
  return P(ZP, { trigger: e, items: i });
}
function dO({ trigger: e, scrRef: t, contextMarker: n, getMarkerAction: r, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = ft(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? P(gO, { trigger: e, harness: i }) : P(fO, { trigger: e, scriptureReference: u, contextMarker: n, getMarkerAction: r });
}
const pO = [" ", "*"];
function hO(e, t) {
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
function gO({ trigger: e, harness: t }) {
  const [n] = Se(), [r, i] = Re(void 0), s = re({ query: "", options: [] }), o = re(0), a = Ae((d, p, h) => {
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
  G(() => it(n.registerCommand(Er, (d) => {
    if (r) {
      if ((d.key === "Enter" || d.key === "Tab") && s.current.options.length === 0)
        return d.preventDefault(), d.stopPropagation(), !0;
      if (d.key === "*" && r.trigger === "backslash")
        return d.preventDefault(), d.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (d.key === e && r.trigger === "backslash" && !r.hasTextSelection) {
        d.preventDefault(), d.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, r.items, !1), wy(() => {
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
  }, Qe), n.registerCommand(Oy, (d) => {
    if (r || d === null || d.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (d.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, vr)), [n, e, t, r, a]);
  const c = Ae(() => i(void 0), []), l = Ae((d, p) => {
    s.current = { query: d, options: p };
  }, []), u = Ae((d) => {
    const { markerMenuItem: p, applyOpts: h } = d;
    t.apply(p, h);
  }, [t]), f = ft(() => r?.items.map((d) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    hO(d, { trigger: r.trigger, literalPrefixLanded: !1 })
  )), [r]);
  return r && P(yx, { isOpen: !0, children: ({ placement: d }) => P(
    xx,
    { options: f ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: d === "top-start", menuOpenKey: e, passthroughKeys: r.trigger === "backslash" ? pO : void 0 },
    r.session
  ) });
}
function mO(e) {
  return e.replaceAll(q, "~").replace(/ {2,}/g, (n) => q.repeat(n.length));
}
function ym(e) {
  return e.replaceAll(q, " ").replaceAll("~", q);
}
let _c;
function yO(e) {
  e && (_c = e);
}
function bu(e) {
  return Ut(e);
}
function bO(e, t) {
  return e.isEmpty() ? Sy : cT(e.toJSON(), t);
}
function cT(e, t) {
  if (!e.root || !e.root.children) return;
  const n = e.root.children;
  if (n.length === 1 && Xc(n[0]) && (!n[0].children || n[0].children.length === 0))
    return Sy;
  if (n.some(PE)) {
    _c?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const r = fT(n), i = Xn(r, t);
  return i ? { type: sr, version: ir, content: i } : void 0;
}
function kO(e, t) {
  const { type: n, marker: r, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), lt({
    type: n,
    marker: r,
    code: s,
    ...i,
    content: t
  });
}
function xO(e) {
  const { marker: t, number: n, sid: r, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return lt({
    type: qn.getType(),
    marker: t,
    number: n,
    sid: r,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function TO(e, t) {
  const { marker: n, sid: r, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Zb(n, a, c), lt({
    type: qn.getType(),
    marker: n,
    number: c,
    sid: r,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function vO(e) {
  const { marker: t, sid: n, altnumber: r, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Zb(t, o, a), lt({
    type: Vt.getType(),
    marker: t,
    number: a,
    sid: n,
    altnumber: r,
    pubnumber: i,
    ...s
  });
}
function CO(e, t) {
  const { type: n, marker: r, unknownAttributes: i } = e;
  return lt({
    type: n,
    marker: r === "" ? void 0 : r,
    ...i,
    content: t
  });
}
function SO(e, t) {
  const { type: n, marker: r, unknownAttributes: i } = e;
  return lt({
    type: n,
    marker: r,
    ...i,
    content: t
  });
}
function _O(e, t) {
  const { unknownAttributes: n } = e;
  return lt({ type: Sb, ...n, content: t });
}
function MO(e, t) {
  const { marker: n, unknownAttributes: r } = e;
  return lt({ type: Ck, marker: n, ...r, content: t });
}
function EO(e, t) {
  const { marker: n, align: r, colspan: i, unknownAttributes: s } = e;
  return lt({
    type: Mk,
    marker: n,
    align: r,
    colspan: i,
    ...s,
    content: t
  });
}
function AO(e) {
  const t = e?.[0];
  if (!e || typeof t != "string" || !t.startsWith(" ")) return e;
  const n = t.replace(/^ +/, "");
  return n ? [n, ...e.slice(1)] : e.slice(1);
}
function PO(e, t) {
  const { type: n, marker: r, caller: i, category: s, unknownAttributes: o } = e;
  return lt({
    type: n,
    marker: r,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function _s(e) {
  const { type: t, marker: n, sid: r, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return lt({
    type: t,
    marker: n === "" ? void 0 : n,
    ...pb({ sid: r, eid: i, ...s }, o)
  });
}
function NO(e) {
  return e.text;
}
function wO(e, t) {
  const { tag: n, marker: r, unknownAttributes: i } = e;
  return lt({
    type: n,
    marker: r,
    ...i,
    content: t
  });
}
function OO(e) {
  const { marker: t } = e;
  return {
    type: ac,
    marker: t === "" ? void 0 : t
  };
}
function ku(e, t) {
  const n = e[e.length - 1];
  n && typeof n == "string" ? e[e.length - 1] = n + t : e.push(t);
}
function lT(e) {
  return Ui(e) && e.typedIDs[Ot] !== void 0;
}
function $O(e, t, n, r, i) {
  const s = ar.getType(), o = t.filter((l) => !n.includes(l));
  if (n.filter((l) => !t.includes(l)).forEach((l) => {
    const u = _s({
      type: s,
      marker: $s,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = _s({
      type: s,
      marker: Di,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = _s({
      type: s,
      marker: Di
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = _s({
      type: s,
      marker: $s
    });
    i.push(l);
  }
  !lT(r) && t.forEach((l) => {
    const u = _s({
      type: s,
      marker: $s,
      eid: l
    });
    i.push(u);
  });
}
function yf(e, t, n, r) {
  if (!r) return !1;
  let i = t > 0 ? e[t - 1] : n;
  for (; i && Ui(i); ) {
    const { children: s } = i;
    i = s.length > 0 ? s[s.length - 1] : void 0;
  }
  return !eo(i) || i.markerSyntax !== "opening" ? !1 : i.marker === r.marker ? !0 : r.children.some(
    (s) => ub(s) && s.marker === i.marker
  );
}
function RO(e, t, n, r, i) {
  const s = e[t];
  return !zr(s) || s.text !== q || !(i || Ui(e[t - 1]) || Ui(e[t + 1])) || s[Dr]?.textType !== void 0 || yf(e, t, n, r) ? !1 : !r || uT(r.children, s);
}
function uT(e, t) {
  return e.some((n) => n === t ? !1 : Ui(n) ? uT(n.children, t) : eo(n) ? !1 : zr(n) ? n[Dr]?.textType === void 0 && n.text !== "" && n.text !== q && !rs(n.text) : "children" in n && n.type !== Pr.getType());
}
function IO(e) {
  let t = e;
  for (; Ui(t); ) t = t.children[0];
  return t;
}
function LO(e, t) {
  let n = 0;
  for (; n < e.length; ) {
    const s = e[n];
    if (!eo(s) || s.markerSyntax !== "opening") break;
    n++;
  }
  const r = IO(e[n]);
  return zr(r) ? r.text === Et(t) ? { node: r, caller: t } : Math.floor(r.detail / Hy) % 2 === 1 ? { node: r, caller: t } : void 0 : void 0;
}
function Xn(e, t, n, r, i, s = !1) {
  const o = [];
  let a, c = [];
  return e.forEach((l, u) => {
    const f = l, d = l, p = l, h = l, g = l, m = l, y = l, k = l;
    switch (l.type) {
      case Nn.getType():
        o.push(
          kO(
            f,
            Xn(f.children, t)
          )
        );
        break;
      case Kn.getType():
        o.push(xO(l));
        break;
      case qn.getType():
        o.push(
          TO(
            d,
            Xn(d.children, t)
          )
        );
        break;
      case Qt.getType():
      case Vt.getType():
        o.push(vO(l));
        break;
      case We.getType():
        o.push(
          CO(
            p,
            Xn(p.children, t, void 0, p)
          )
        );
        break;
      case Kt.getType():
        o.push(
          SO(
            h,
            Xn(h.children, t)
          )
        );
        break;
      case ns.getType():
        o.push(
          _O(
            l,
            Xn(l.children, t)
          )
        );
        break;
      case ss.getType():
        o.push(
          MO(
            l,
            Xn(l.children, t)
          )
        );
        break;
      case os.getType():
        o.push(
          EO(
            l,
            Xn(l.children, t)
          )
        );
        break;
      case Ze.getType(): {
        const x = Xn(
          g.children,
          t,
          LO(g.children, g.caller)
        );
        o.push(
          PO(
            g,
            bu(t) && g.category === void 0 ? AO(x) : x
          )
        );
        break;
      }
      case Pr.getType():
      case Gn.getType():
      case An.getType():
      case $y.getType():
      case Hn.getType():
        break;
      case mt.getType():
        if (a = Xn(
          y.children,
          t,
          n,
          r,
          u > 0 ? e[u - 1] : i,
          !0
        ), a) {
          const x = y.typedIDs[Ot];
          if (x) {
            const S = e[u + 1];
            $O(a, x, c, S, o), c = lT(S) ? x : [];
          } else {
            const S = a.shift();
            S && (typeof S == "string" ? ku(o, S) : o.push(S)), a.length > 0 && o.push(...a);
          }
        }
        break;
      case ar.getType():
        o.push(_s(l));
        break;
      case ot.getType():
        if (n && l === n.node) {
          let x = md(n.node.text, n.caller);
          bu(t) && (x = ym(Yh(x))), x && ku(o, x);
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
        (m.text !== q || RO(e, u, i, r, s)) && // The untagged NBSP-`|` form of milestone attribute text. Text right after a char span's
        // opening glyph is never that: its NBSP is the span's separator, and a `|…` after it is
        // content the attribute grammar left literal (`\w |lemma="g"grace\w*` — Paratext 9
        // parses attributes only when the whole `|…` tail before the closer matches), so it is
        // kept like any other content text.
        !(m.text.startsWith(ld) && !yf(e, u, i, r)) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[Dr]?.textType !== "attribute") {
          let x = NO(m);
          t?.markerMode === "editable" && yf(e, u, i, r) && x.startsWith(q) && (x = x.slice(1)), bu(t) && (x = ym(Yh(x))), ku(o, x);
        }
        break;
      case ts.getType():
        o.push(
          wO(
            k,
            Xn(k.children, t)
          )
        );
        break;
      case hr.getType():
        o.push(OO(l));
        break;
      case ro.getType():
        _c?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        _c?.error(`Unexpected node type '${l.type}'!`);
    }
  }), o && o.length > 0 ? o : void 0;
}
function fT(e) {
  const t = e.findIndex((n) => Xc(n));
  if (t >= 0) {
    const n = e.slice(0, t), r = e[t].children, i = fT(e.slice(t + 1));
    e = [...n, ...r, ...i];
  }
  return e;
}
const Ms = {
  initialize: yO,
  deserializeEditorState: bO
}, qO = /^sd\d*$/, DO = /* @__PURE__ */ new Set([
  ...Object.entries($u).filter(
    ([e, t]) => t.category === C.TitlesHeadings && t.type === T.Paragraph && !qO.test(e)
  ).map(([e]) => e),
  "qa"
]);
function KO(e, t) {
  const n = [];
  let r;
  for (const [i, s] of e.entries()) {
    if (Od(s) || Yb(s)) {
      r = void 0, n.push(s);
      continue;
    }
    if (!vM(s)) {
      t && Mc(s) && t.warn(
        `Verses inside a '${s.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), r ? r.children.push(s) : n.push(s);
      continue;
    }
    if ($d(s) && DO.has(s.marker) && !Mc(s)) {
      r = void 0, n.push(s);
      continue;
    }
    if (s.children.length === 0) {
      r ? r.children.push(s) : n.push(s);
      continue;
    }
    dT(s.children, t).forEach((o) => {
      const a = UO(s, o.nodes, i);
      if (!o.verse) {
        if (!a) return;
        r ? r.children.push(a) : n.push(a);
        return;
      }
      r = BO(o.verse), n.push(r), a && r.children.push(a);
    });
  }
  return n;
}
function dT(e, t) {
  const n = [{ nodes: [] }], r = (i) => n[n.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (pT(i)) {
      n.push({ verse: i, nodes: [i] });
      return;
    }
    if (Ui(i)) {
      const s = dT(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && r(bm(i, o.nodes)), a.forEach((c) => {
        n.push({ verse: c.verse, nodes: [bm(i, c.nodes)] });
      });
      return;
    }
    t && Mc(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), r(i);
  }), n;
}
function bm(e, t) {
  return { ...e, children: t };
}
function pT(e) {
  return Ik(e) && e.number !== "";
}
function Mc(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((n) => pT(n) || Mc(n)) : !1;
}
function UO(e, t, n) {
  if (t.length !== 0)
    return {
      ...e,
      children: t,
      [Dr]: { ...e[Dr], [wk.key]: n }
    };
}
function BO(e) {
  return {
    type: dc,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Ok
  };
}
const km = mT([]), FO = {
  type: $y.getType(),
  version: 1
};
let Lp = [], xe, Hi, hT, gn;
function zO(e, t) {
  Lp = [], WO(e), HO(t);
}
function jO(e = 0) {
}
function VO(e, t) {
  xe = t ?? ll();
  let n;
  return e ? (e.type !== sr && gn?.warn(`This USJ type '${e.type}' didn't match the expected type '${sr}'.`), e.version !== ir && gn?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${ir}'.`
  ), e.content.length > 0 ? (n = Tf($r(e.content)), Xo(xe) && (n = KO(n, gn))) : n = [km]) : n = [km], hT?.(Lp), {
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
function WO(e) {
  e && (Hi = e), e?.addMissingComments && (hT = e.addMissingComments);
}
function HO(e) {
  e && (gn = e);
}
function gT() {
  return Ut(xe);
}
function GO(e, t) {
  let { marker: n } = e;
  n !== Ho && gn?.warn(`Unexpected book marker '${n}'!`), n = n ?? Ho;
  const { code: r } = e;
  (!r || !Nn.isValidBookCode(r)) && gn?.warn(`Unexpected book code '${r}'!`);
  const i = [];
  xe?.markerMode === "editable" || xe?.markerMode === "visible" ? i.push(
    dn("marker", Je(n) + " " + r + q)
  ) : xe?.hasGutterParaMarkers && i.push(dn("marker", Je(n) + q, !0)), i.push(...t);
  const s = ht(e, fM);
  return lt({
    type: Nn.getType(),
    marker: n,
    code: r ?? "",
    unknownAttributes: s,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Wb
  });
}
function JO(e) {
  let { marker: t } = e;
  t !== oc && gn?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? oc;
  const { number: n, sid: r, altnumber: i, pubnumber: s } = e, o = ht(e, h0);
  let a;
  xe?.markerMode === "visible" && (a = !0);
  const c = [
    sn(Vn(t, n) ?? "")
  ];
  return xe?.markerMode === "editable" && d$(i, s, c), xe?.markerMode === "editable" ? lt({
    type: qn.getType(),
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
    version: Tb
  }) : lt({
    type: Kn.getType(),
    marker: t,
    number: n ?? "",
    showMarker: a,
    sid: r,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: zb
  });
}
function YO(e) {
  let { marker: t } = e;
  t !== sc && gn?.warn(`Unexpected verse marker '${t}'!`), t = t ?? sc;
  const { number: n, sid: r, altnumber: i, pubnumber: s } = e, a = (UA(xe) ?? Qt).getType(), c = xe?.markerMode === "editable" ? fb : Rk;
  let l, u;
  xe?.markerMode === "editable" ? l = Vn(t, n) : xe?.markerMode === "visible" && (u = !0);
  const f = ht(e, l0);
  return lt({
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
function XO(e, t = [], n = !1) {
  let { marker: r } = e;
  We.isValidMarker(r, Hi?.extraValidMarkers) || gn?.warn(`Unexpected char marker '${r}'!`), r = r ?? "";
  const i = [];
  if (xe?.markerMode === "editable") {
    const [a] = t;
    zr(a) ? a.text = q + a.text : a && t.unshift(sn(q));
  }
  t.length === 0 && t.push(sn($t)), bf(e.marker ?? "", i, n), i.push(...t);
  const s = e.closed === "false", o = ht(e, o0);
  return s || c$(r, o, i), s || kf(e.marker ?? "", i, !1, n), lt({
    type: We.getType(),
    marker: r,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: lb
  });
}
function mT(e) {
  return {
    type: ai.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Eb
  };
}
function QO(e, t = []) {
  let { marker: n } = e;
  Kt.isValidMarker(n, Hi?.extraValidMarkers) || gn?.warn(`Unexpected para marker '${n}'!`), n = n ?? jn;
  const r = [];
  if (as(xe) && (xe?.markerMode === "editable" ? r.push(
    nn(n),
    sn(q, Ar, "token")
  ) : (xe?.markerMode === "visible" || xe?.hasGutterParaMarkers) && r.push(
    dn(
      "marker",
      Je(n) + q,
      xe?.hasGutterParaMarkers
    )
  )), r.push(...t), gT()) {
    const s = r.find(
      (o) => !eo(o) && !(zr(o) && o.text === q)
    );
    zr(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => q.repeat(o.length)));
  }
  const i = ht(e, pM);
  return lt({
    type: Kt.getType(),
    marker: n,
    unknownAttributes: i,
    children: r,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Gb
  });
}
function qp() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function ZO(e, t = []) {
  const n = ht(e, x0);
  return lt({
    ...qp(),
    type: ns.getType(),
    unknownAttributes: n,
    children: t,
    version: _b
  });
}
function e$(e, t = []) {
  const n = ht(e, tE), r = e.marker ?? Hu, i = [];
  return xe?.markerMode === "editable" ? i.push(
    nn(r),
    sn(q, Ar, "token")
  ) : (xe?.markerMode === "visible" || xe?.hasGutterParaMarkers) && i.push(
    dn(
      "marker",
      Je(r) + q,
      xe?.hasGutterParaMarkers
    )
  ), i.push(...t), lt({
    ...qp(),
    type: ss.getType(),
    marker: r,
    unknownAttributes: n,
    children: i,
    version: Sk
  });
}
function t$(e, t = []) {
  const { marker: n, align: r, colspan: i } = e, s = [], o = n ?? Gu, a = Kb(o, i) ?? o;
  xe?.markerMode === "editable" ? s.push(
    nn(a),
    sn(q, Ar, "token")
  ) : (xe?.markerMode === "visible" || xe?.hasGutterParaMarkers) && s.push(
    dn(
      "marker",
      Je(a) + q,
      xe?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = ht(
    e,
    rE
  );
  return lt({
    ...qp(),
    type: os.getType(),
    marker: o,
    align: r,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: Ek
  });
}
function n$(e, t) {
  const n = AM(t);
  let r = () => {
  };
  return Hi?.noteCallerOnClick && (r = Hi.noteCallerOnClick), lt({
    type: An.getType(),
    caller: e,
    previewText: n,
    onClick: r,
    version: Bk
  });
}
function r$(e, t) {
  let { marker: n } = e;
  Ze.isValidMarker(n, Hi?.extraValidMarkers) || gn?.warn(`Unexpected note marker '${n}'!`), n = n ?? pd;
  const { category: r } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : kp(xe?.noteMode), a = ht(e, T_), c = xe?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  xe?.markerMode === "editable" ? (l = nn(n, "opening", !1, c), s || (u = nn(n, "closing", !1, c))) : xe?.markerMode === "visible" && (l = dn("marker", Je(n) + " "), s || (u = dn("marker", at(n))));
  const f = [];
  let d;
  if (l && f.push(l), xe?.markerMode === "editable" && !o)
    d = sn(Et(i), void 0, c), d.detail = Hy, f.push(d), f$(r, f), f.push(...t);
  else {
    const p = sn(q, Ar, "token");
    d = n$(i, t), f.push(d, p, ...t.flatMap(i$(p)));
  }
  return u && f.push(u), lt({
    type: Ze.getType(),
    marker: n,
    caller: i,
    isCollapsed: o,
    category: r,
    unknownAttributes: a,
    children: f,
    direction: null,
    format: "",
    indent: 0,
    version: Xy
  });
}
function i$(e) {
  return (t) => Lb(t) ? [t] : [t, e];
}
function s$(e) {
  let { marker: t } = e;
  (!t || !ar.isValidMarker(t, Hi?.extraValidMarkers)) && gn?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: n, eid: r } = e, i = ht(e, dd), s = hb(e);
  return lt({
    type: ar.getType(),
    marker: t,
    sid: n,
    eid: r,
    unknownAttributes: i,
    attributeOrder: s,
    version: Gy
  });
}
function xm(e, t = []) {
  return {
    type: mt.getType(),
    typedIDs: { [Ot]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function o$(e, t) {
  const { marker: n } = e, r = e.type, i = ht(e, m0), s = [];
  if (xe?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = Zc(
      r,
      n,
      i
    );
    o && s.push(dn("marker", o)), a && s.push(dn("attribute", a)), s.push(...t), c && s.push(dn("attribute", c)), l && s.push(dn("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    zr(o) && (o.mode = "token");
  }), lt({
    type: ts.getType(),
    tag: r,
    marker: n,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: Cb
  });
}
function a$(e) {
  return {
    type: hr.getType(),
    marker: e,
    text: Po(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: xe?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: dk
  };
}
function nn(e, t = "opening", n = !1, r = "normal") {
  return {
    type: Hn.getType(),
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
function sn(e, t = void 0, n = "normal") {
  const r = {
    type: ot.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: n,
    style: "",
    version: 1
  };
  return t !== void 0 && (r[Dr] = { textType: t }), r;
}
function dn(e, t, n = !1) {
  const r = {
    type: Gn.getType(),
    text: t,
    textType: e,
    version: Ib
  };
  return n && (r[Dr] = { [Pd.key]: !0 }), r;
}
function Zo(e, t) {
  return {
    type: Pr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: sb
  };
}
function bf(e, t, n = !1) {
  xe?.markerMode === "editable" ? t.push(nn(e, "opening", n)) : xe?.markerMode === "visible" && t.push(dn("marker", Je(e, n)));
}
function kf(e, t, n = !1, r = !1) {
  xe?.markerMode === "editable" ? n ? t.push(nn("", "selfClosing")) : t.push(nn(e, "closing", r)) : xe?.markerMode === "visible" && t.push(
    dn(
      "marker",
      n ? at("") : at(e, r)
    )
  );
}
function c$(e, t, n) {
  if (xe?.markerMode !== "editable" || !t) return;
  const r = er(t, Zs(e));
  r && n.push(sn(r, "attribute"));
}
function Tm(e, t) {
  if (e.type !== "ms" || xe?.markerMode !== "editable" && xe?.markerMode !== "visible") return;
  const { marker: n, sid: r, eid: i } = e, s = ht(e, dd), o = gb(
    r,
    i,
    s,
    hb(e)
  ), a = er(o, da(n ?? ""));
  if (!a) return;
  const c = q + a;
  xe?.markerMode === "editable" ? t.push(sn(c, "attribute")) : t.push(dn("attribute", c));
}
function l$(e, t) {
  const n = e.marker ?? "";
  if (xe?.markerMode === "editable") {
    const r = [];
    bf(n, r), Tm(e, r), kf(n, r, !0), t.push(Zo("milestone", r));
  } else
    bf(n, t), Tm(e, t), kf(n, t, !0);
}
function vm(e, t, n) {
  t !== void 0 && n.push(
    Zo(e, [
      nn(e, "opening"),
      sn(q + t, "attribute"),
      nn(e, "closing")
    ])
  );
}
function u$(e, t) {
  xe?.markerMode === "editable" && (vm("va", e.altnumber, t), vm("vp", e.pubnumber, t));
}
function f$(e, t) {
  e !== void 0 && t.push(
    Zo("cat", [
      nn("cat", "opening"),
      sn(q + e, "attribute"),
      nn("cat", "closing")
    ])
  );
}
function d$(e, t, n) {
  e !== void 0 && n.push(
    Zo("ca", [
      nn("ca", "opening"),
      sn(q + e, "attribute"),
      nn("ca", "closing")
    ])
  ), t !== void 0 && n.push(
    Zo("cp", [
      nn("cp", "opening"),
      sn(q + t, "attribute")
    ])
  );
}
function Cm(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((n) => n - t);
}
function p$(e, t) {
  const n = e.indexOf(t, 0);
  n > -1 && e.splice(n, 1);
}
function Sm(e, t) {
  t.marker === Di && t.sid !== void 0 && e.push(t.sid), t.marker === $s && t.eid !== void 0 && p$(e, t.eid);
}
function xf(e, t, n = !1, r = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = n ? [xm(o, [...r])] : o, c = e[i];
  Sm(r, c);
  const l = xf(
    e.slice(i + 1, s),
    Cm(t, i + 1),
    c.marker === Di,
    r
  ), u = xm(l, [...r]), f = e[s];
  Sm(r, f);
  const d = xf(
    e.slice(s + 1),
    Cm(t, s + 1),
    f.marker === Di,
    r
  );
  return [...a, u, ...d];
}
function $r(e, t = !1) {
  const n = [], r = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && r.push(sn(gT() ? mO(i) : i));
    else if (!i.type)
      gn?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Nn.getType():
          r.push(GO(i, $r(i.content)));
          break;
        case qn.getType():
          r.push(JO(i));
          break;
        case Vt.getType():
          xe?.hasSpacing || r.push(FO), r.push(YO(i)), u$(i, r);
          break;
        case We.getType():
          r.push(
            XO(i, $r(i.content, !0), t)
          );
          break;
        case Kt.getType():
          r.push(QO(i, $r(i.content)));
          break;
        case Ze.getType():
          r.push(r$(i, $r(i.content)));
          break;
        case ar.getType():
          Jy(i.marker ?? "") && (n.push(r.length), i.sid !== void 0 && Lp?.push(i.sid)), r.push(s$(i)), l$(i, r);
          break;
        case hr.getType():
          r.push(a$(i.marker ?? ""));
          break;
        case Sb:
          r.push(ZO(i, $r(i.content)));
          break;
        case Ck:
          r.push(e$(i, $r(i.content)));
          break;
        case Mk:
          r.push(t$(i, $r(i.content)));
          break;
        default:
          gn?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), r.push(o$(i, $r(i.content)));
      }
  }), xf(r, n);
}
function Tf(e) {
  const t = e.findIndex(
    (r) => Od(r) || Yb(r) || $d(r) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    v0(r)
  );
  if (t >= 0) {
    const r = Tf(e.slice(0, t)), i = e[t], s = Tf(e.slice(t + 1));
    return [...r, i, ...s];
  } else if (e.some((r) => "text" in r && "mode" in r || Ik(r)))
    return [mT(e)];
  return e;
}
const lr = {
  initialize: zO,
  reset: jO,
  serializeEditorState: VO
};
function yT(e) {
  if (e && !N(e)) {
    if (v(e)) return e;
    if (A(e))
      for (const t of e.getChildren()) {
        const n = yT(t);
        if (n) return n;
      }
  }
}
function h$() {
  const e = w();
  if (!E(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), n = e.anchor.offset;
    if ((v(t) && !N(t) ? ji(t) : void 0) && v(t)) {
      const i = Ue(" ");
      if (n <= 0) t.insertBefore(i);
      else if (n >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(n);
        o.insertAfter(i);
      }
      zs(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = yT(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(q) ? q : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return v(t) && t.getTextContent()[n] === " " ? (t.select(n + 1, n + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of bT(e)) {
    if (!ji(t)) continue;
    zs(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const n = t.getLatest(), r = n.getTextContent();
    r.startsWith(q) && n.setTextContent(r.slice(q.length));
  }
  return !0;
}
function bT(e) {
  const [t, n] = td(e), [r, i] = e.isBackward() ? [n, t] : [t, n], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!v(a) || N(a) || pe(a, ke) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? r : 0, f = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= f) return;
    const d = a.splitText(u, f), p = d.length === 3 ? d[1] : f === l ? d[d.length - 1] : d[0];
    p && o.push(p);
  }), o;
}
function kT(e) {
  let t = e;
  for (; D(t) || ae(t); ) t = t.getParent();
  return t;
}
function xT(e) {
  const t = kT(e.getParent());
  return Ct(t) ? t : void 0;
}
function g$() {
  const e = w();
  if (!E(e)) return !1;
  const t = e.focus.getNode();
  return ji(t) ? !!xT(t) : !1;
}
function TT(e) {
  const t = Ue(""), n = e.getNode(), r = e.offset;
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
    if (D(o)) zs(t, { renderGlyphs: !0 });
    else if (!ae(o) || !m$(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function m$(e, t) {
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
function vT(e) {
  const t = e.anchor.getNode();
  if (N(t) && !Xd(t, e.anchor.offset)) {
    const n = t.getParent();
    if (D(n) && t.is(n.getLastChild())) {
      n.selectNext(0, 0);
      const r = w();
      return E(r) && r.isCollapsed() ? r : void 0;
    }
  }
  return e;
}
function CT() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = vT(e);
  if (!t) return !1;
  const n = t.anchor.getNode();
  if (!v(n) || N(n) || !ji(n)) return !1;
  const r = xT(n);
  if (!r) return !1;
  const { moving: i } = TT(t.anchor), s = r.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; ae(o); ) o = o.getFirstChild() ?? void 0;
  return D(o) ? il(o) : s.select(0, 0), !0;
}
const ST = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Xb(_e().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = w(), t = ik(e), n = np(t);
      let r, i = !1;
      if (!n)
        r = "1";
      else {
        const o = n.getNumber();
        r = NM(0, o);
        const a = FE(n);
        if (a) {
          const c = a.getNumber();
          i = r === c || wM(c) && qd(parseInt(r, 10), c);
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
function vf(e, t) {
  return Ze.isValidMarker(e, t) || !!ST[e] || Kt.isValidMarker(e, t) || We.isValidMarker(e, t);
}
function y$(e, t) {
  return We.isNoteContentMarker(e) ? !1 : We.isValidMarker(e, t);
}
function _T(e, t, n, r, i, s) {
  const o = fx(
    e,
    void 0,
    void 0,
    t,
    r ?? ll(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (n.current = o.getKey()), o?.getKey();
}
function Cf(e, t, n, r, i, s, o) {
  if (Ze.isValidMarker(e, r?.extraValidMarkers)) {
    let l;
    return { action: (f) => {
      f.editor.update(() => {
        l = _T(
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
  const a = C$(e, r?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = w();
      E(u) && (Qd(u), l.noteText = u.getTextContent());
      const { content: f, highlightInserted: d } = a.action(l), p = gg(f, lr, n), h = Fl(p);
      if (E(u)) {
        const g = u.anchor.getNode(), m = g.getParent(), y = ji(g), k = u.anchor.key === u.focus.key;
        if (D(h) && y && k && !xu(h, o))
          x$(
            u,
            h,
            g,
            n?.markerMode === "editable"
          );
        else if (D(h) && !k && !xu(h, o) && T$(u))
          v$(u, h, n?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          S$(
            u,
            () => Fl(p)
          );
        else if (A(h) && !h.isInline()) {
          const x = u.insertParagraph();
          if (x) {
            const S = x.getChildren();
            h.append(...S), x.replace(h), Ct(h) && cs(h) || h.selectStart();
          }
        } else if (D(h) && v(g) && !N(g) && D(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        xu(h, o)) {
          const x = g.getParent();
          if (D(x)) {
            const S = u.anchor.offset;
            if (S === 0) g.insertBefore(h);
            else if (S >= g.getTextContentSize()) g.insertAfter(h);
            else {
              const [U] = g.splitText(S);
              U.insertAfter(h);
            }
            h.getChildren().forEach((U) => {
              N(U) && U.setNested(!0);
            });
            const _ = h.getChildren().find((U) => v(U) && !N(U));
            _ && v(_) ? _.select(
              _.getTextContentSize(),
              _.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (v(g) && !N(g) && u.isCollapsed() && (L(m) || D(m) && L(m.getParent()))) {
          const x = D(m) ? m : void 0, S = x ? b$(g, u.anchor.offset) : [];
          let U = (x ?? g).insertAfter(h);
          if (kn(h)) {
            const B = {
              ...n || ll(),
              markerMode: "hidden"
            }, V = gg(
              f,
              lr,
              B
            ), ne = Fl(V);
            U = U.insertAfter(ne);
          }
          if (S.length > 0 && x) {
            const B = Ec(x).append(...S);
            U.insertAfter(B), x.isEmpty() && x.remove();
          } else v(U.getNextSibling()) || U.insertAfter(zi());
          A(U) && U.selectEnd();
        } else if (u.insertNodes([h]), R$(h), d) {
          const x = Ny();
          x.add(h.getKey()), zn(x);
        } else if (D(h)) {
          const x = h.getChildren().find((S) => v(S) && !N(S));
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
function b$(e, t) {
  const n = e.getTextContentSize();
  let r;
  return t <= 0 ? r = e : t >= n ? r = e.getNextSibling() : r = e.splitText(t)[1] ?? e.getNextSibling(), r ? [r, ...r.getNextSiblings()] : [];
}
function xu(e, t) {
  return ((t ?? pc).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function k$(e, t) {
  t && e.getChildren().forEach((i) => {
    N(i) && i.setNested(!0);
  }), e.getChildren().some((i) => N(i) && i.getMarkerSyntax() === "closing") || e.append(qt(e.getMarker(), "closing", t));
  const r = e.getUnknownAttributes();
  if (r?.closed === "false") {
    const i = { ...r };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function x$(e, t, n, r) {
  let i = t;
  if (e.anchor.type === "element" && D(n)) {
    const o = n.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : n.append(t);
  } else if (e.isCollapsed() || !v(n)) {
    const o = e.anchor.offset;
    if (v(n) && o > 0 && o < n.getTextContentSize()) {
      const [a] = n.splitText(o);
      a.insertAfter(t);
    } else v(n) && o >= n.getTextContentSize() ? n.insertAfter(t) : n.insertBefore(t);
  } else {
    const [o, a] = Gs(e);
    let c = n;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (zs(i, { renderGlyphs: r }), i !== t) {
    i.insertBefore(t), v(i) && !i.getTextContent().startsWith(q) && i.setTextContent(q + i.getTextContent());
    const o = t.getChildren().find((a) => v(a) && !N(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => v(o) && !N(o));
  v(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function T$(e) {
  let t, n = !1;
  for (const r of e.getNodes()) {
    if (N(r) || D(r)) continue;
    if (!v(r) || r.getType() !== ot.getType() || pe(r, ke) === "attribute") return !1;
    const i = uE(r);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    ji(r) && (n = !0);
  }
  return n;
}
function v$(e, t, n) {
  const r = bT(e);
  if (r.length === 0) return;
  r.forEach((a) => {
    if (!ji(a)) return;
    zs(a, { renderGlyphs: n });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(q) && c.setTextContent(l.slice(q.length));
  });
  const i = r[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(q) || i.setTextContent(q + i.getTextContent());
  const s = t.getChildren().find((a) => v(a) && !N(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  r.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function C$(e, t) {
  let n = ST[e];
  return n || (Kt.isValidMarker(e, t) ? n = {
    action: () => ({ content: [{ type: Kt.getType(), marker: e, content: [] }] })
  } : We.isValidMarker(e, t) && (n = {
    action: () => {
      const r = { type: We.getType(), marker: e };
      return (We.isValidFootnoteMarker(e) || We.isValidCrossReferenceMarker(e)) && (r.closed = "false"), { content: [r] };
    }
  })), n;
}
function S$(e, t) {
  const n = e.getNodes(), [r, i] = Gs(e);
  let s;
  n.forEach((o, a) => {
    if (A(s) && s.isParentOf(o))
      return;
    const c = MT(
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
    s || (s = t(), c.insertBefore(s), l = !0, D(s) && s.getChildren().some((f) => N(f) && f.getMarkerSyntax() === "opening") && k$(s, D(s.getParent()))), M$(c, s, l);
  }), (v(s) || A(s)) && s.selectEnd();
}
function Gs(e) {
  const t = e.anchor.offset, n = e.focus.offset;
  return e.isBackward() ? [n, t] : [t, n];
}
function Dp(e) {
  return ae(e) || L(e) || L(e.getParent());
}
function MT(e, t, n, r, i) {
  if (!Dp(e)) {
    if (v(e))
      return _$(e, t, n, r, i);
    if (A(e) && e.isInline())
      return e;
  }
}
function _$(e, t, n, r, i) {
  const s = e.getTextContentSize(), o = t ? r : 0, a = n ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function M$(e, t, n) {
  if (v(t)) {
    const r = Sf(e, t);
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
    Sf(e, t), n && D(t) && t.getChildren().some((s) => N(s)) && v(e) && !N(e) && !e.getTextContent().startsWith(q) && e.setTextContent(q + e.getTextContent());
  }
}
function Sf(e, t) {
  let n = e.getTextContent();
  if (v(e) && t.isInline() && n.startsWith(" ") && n.trimStart() !== "") {
    n = n.trimStart(), e.setTextContent(n);
    const r = t.getPreviousSibling();
    ep(r), v(r) || t.insertBefore(Ue(" "));
  }
  return n;
}
function ET(e, t, n) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), f = e.anchor.offset, d = Gi(u, t);
    if (!d) return !1;
    const p = v(u) ? u.getTextContentSize() : 0;
    if (_m(d, n), v(u) && u.isAttached()) {
      const h = u.getTextContentSize(), g = Math.max(p - h, 0), m = Math.max(0, Math.min(f - g, h)), y = w();
      E(y) && y.setTextNodeRange(u, m, u, m);
    }
    return !0;
  }
  const r = e.getNodes(), i = e.isBackward(), [s, o] = Gs(e);
  if (!Up(r, t, s, o)) return !1;
  const a = Kp(r, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const f = Gi(u, t);
    if (!f || c.has(f.getKey())) return;
    c.add(f.getKey());
    const d = wT(f, a);
    d && (_m(d, n), l = !0);
  }), OT(a, i), l;
}
function _m(e, t) {
  e.getChildren().forEach((r) => {
    xn(r) && r.remove();
  });
  const n = e.getChildren();
  if (n.length === 0 || e.getTextContent() === $t) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && n.forEach((r) => {
    const i = r.getTextContent();
    v(r) && i.startsWith(q) && r.setTextContent(i.slice(q.length));
  }), Nu(e);
}
function Kp(e, t, n) {
  const r = [];
  return e.forEach((i, s) => {
    const o = MT(
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
  for (; n && !Ct(n); ) {
    if (L(n)) return;
    !r && D(n) && (t === void 0 || n.getMarker() === t) && (r = n), n = n.getParent();
  }
  return r;
}
function AT(e) {
  const t = nt(
    e,
    (n) => L(n) || Ct(n)
  );
  return L(t);
}
function PT(e) {
  return e.filter(
    (t) => !Dp(t) && (v(t) || A(t) && t.isInline())
  );
}
function E$(e, t, n) {
  const r = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!v(i) || Dp(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? n : o;
    a === 0 && c === o && r.add(i.getKey());
  }), r;
}
function A$(e, t, n) {
  return e.getChildren().some(
    (r) => A(r) && t.some((i) => r.isParentOf(i)) && !NT(r, n)
  );
}
function Up(e, t, n, r, i) {
  const s = PT(e), o = E$(e, n, r), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Gi(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !A$(l, s, o);
  });
}
function NT(e, t) {
  return e.getAllTextNodes().every((n) => t.has(n.getKey()) || xn(n));
}
function wT(e, t) {
  const n = new Set(t.map((l) => l.getKey())), r = e.getChildren(), i = [];
  for (const [l, u] of r.entries())
    if (n.has(u.getKey()))
      i.push(l);
    else if (A(u) && t.some((f) => u.isParentOf(f))) {
      if (!NT(u, n)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && xn(r[s - 1]) && (s -= 1), o < r.length - 1 && xn(r[o + 1]) && (o += 1), s === 0 && o === r.length - 1) return e;
  const a = r.slice(o + 1);
  a.length > 0 && e.insertAfter(Ec(e).append(...a));
  const c = r.slice(0, s);
  return c.length > 0 && e.insertBefore(Ec(e).append(...c)), e;
}
function Ec(e) {
  return qS(e);
}
function OT(e, t) {
  const n = w(), r = e[0], i = e[e.length - 1];
  if (!E(n) || !r.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? n.setTextNodeRange(i, s, r, 0) : n.setTextNodeRange(r, 0, i, s);
}
function P$(e, t, n) {
  if (e.isCollapsed()) {
    const l = Gi(e.anchor.getNode(), n);
    return !l || l.getMarker() === t ? !1 : (Zh(l, t), !0);
  }
  const r = e.getNodes(), [i, s] = Gs(e);
  if (!Up(r, n, i, s, t)) return !1;
  const o = Kp(r, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = Gi(l, n);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const f = wT(u, o);
    f && (Zh(f, t), c = !0);
  }), c;
}
function N$(e, t, n, r) {
  if (e.isCollapsed()) return !1;
  const i = n?.filter(
    (m) => m !== t
  ), s = e.getNodes(), [o, a] = Gs(e);
  if (!!!i?.some(
    (m) => Up(s, m, o, a)
  ) && !w$(s, t)) return !1;
  let l = !1;
  i?.forEach((m) => {
    const y = w();
    E(y) && ET(y, m, r) && (l = !0);
  });
  const u = w();
  if (!E(u)) return l;
  const f = u.isBackward(), [d, p] = Gs(u), h = Kp(
    u.getNodes(),
    d,
    p
  );
  if (h.length === 0) return l;
  const g = h.filter(
    (m) => !AT(m) && !Gi(m, t)
  );
  return g.length > 0 && (O$(g).forEach((m) => $$(m, t)), l = !0), OT(h, f), l;
}
function w$(e, t) {
  return PT(e).some(
    (n) => !AT(n) && !Gi(n, t)
  );
}
function O$(e) {
  const t = [];
  let n;
  return e.forEach((r) => {
    const i = n?.[n.length - 1];
    n && i?.getNextSibling()?.is(r) ? n.push(r) : (n = [r], t.push(n));
  }), t;
}
function $$(e, t) {
  const n = e[0].getPreviousSibling(), r = e[e.length - 1].getNextSibling(), i = [n, r].find(
    (a) => D(a) && a.getMarker() === t
  ), s = i ? Ec(i) : Ur(t);
  e[0].insertBefore(s), s.append(...e), i === n || Sf(e[0], s);
}
function R$(e) {
  we(e) && (ep(e.getPreviousSibling()), qk(e.getNextSibling()));
}
const $T = {
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
}, Mm = "psc-active-text", La = "psc-empty-text";
function I$({ viewOptions: e }) {
  const [t] = Se(), n = re(void 0), r = e?.hasActiveTextFocusBox ?? !1;
  return G(() => {
    if (!r) return;
    function i(o) {
      n.current && t.getElementByKey(n.current)?.classList.remove(Mm), n.current = o, o && t.getElementByKey(o)?.classList.add(Mm);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        Vc,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${La}`);
          if (!c) return !1;
          const l = Zi(c);
          if (!we(l)) return !1;
          const u = l.getParent();
          if (!A(u)) return !1;
          const f = l.getIndexWithinParent() + 1;
          return u.select(f, f), !1;
        },
        zt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const f = Tu(), d = L$(), p = [], h = [];
          return _e().getChildren().forEach((g) => {
            if (!A(g)) return;
            const { emptyKeys: m, nonEmptyKeys: y } = D$(g);
            p.push(...m), h.push(...y);
          }), { newActiveKey: f, activeVerseKey: d, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== n.current && i(a), l.forEach((f) => {
          f === c ? t.getElementByKey(f)?.classList.remove(La) : t.getElementByKey(f)?.classList.add(La);
        }), u.forEach((f) => t.getElementByKey(f)?.classList.remove(La));
      }),
      t.registerCommand(
        id,
        () => (i(void 0), !1),
        zt
      ),
      t.registerCommand(
        Ry,
        () => {
          const o = t.getEditorState().read(Tu);
          return o !== n.current && i(o), !1;
        },
        zt
      )
    ];
    return i(t.getEditorState().read(Tu)), it(...s);
  }, [t, r]), null;
}
function Tu() {
  return q$(w() ?? void 0)?.getKey();
}
function L$() {
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
    we(s[a]) && (o = s[a].getKey());
  return o;
}
function q$(e) {
  if (E(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function D$(e) {
  const t = e.getChildren(), n = [], r = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!we(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (we(c)) break;
      if (!(Dt(c) || N(c)) && c.getTextContent().replaceAll(Uo, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? r : n).push(s.getKey());
  }
  return { emptyKeys: n, nonEmptyKeys: r };
}
function _f(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function RT(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const n = e.getRootElement()?.ownerDocument.getSelection(), r = n?.anchorNode, i = n?.focusNode;
  return !!r && !!i && !Ey(e, r, i);
}
function IT(e, t) {
  return e.length <= t ? e : e.slice(0, Bp(e, t));
}
function Bp(e, t) {
  if (t >= e.length) return e.length;
  let n = 0;
  for (const { index: r, segment: i } of FS(e)) {
    if (r + i.length > t) break;
    n = r + i.length;
  }
  return n;
}
const K$ = 16;
function U$(e, { $isHidden: t, $measure: n } = {}) {
  const r = (k) => t ? Fp(k, t).length : k.getTextContent().length;
  n ??= r;
  const i = w();
  if (!E(i) || i.isCollapsed() || n(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = Ac(s), l = Ac(o), u = i.getNodes(), f = new Map(u.map((k) => [k.getKey(), z$(k)])), d = u.length > 0 ? f.get(u[0].getKey()) : void 0, p = d && B$(s, d) ? d : void 0, h = (k) => {
    const x = k > 0 ? F$(u, f, p, c, l, k, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), x ? i.focus.set(x.node.getKey(), x.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!x;
  };
  let g = Math.min(e, r(i));
  if (h(g) && n(i) <= e) return !0;
  let m = 0, y = 0;
  g -= 1;
  for (let k = 0; k < K$ && m <= g; k++) {
    const x = Math.floor((m + g) / 2);
    h(x) && n(i) <= e ? (y = x, m = x + 1) : g = x - 1;
  }
  return h(y), !0;
}
function Mf(e) {
  return e.isToken() || ba(e) || Ne(e.getParent());
}
function B$(e, t) {
  const n = A(t) ? t.getAllTextNodes()[0] : void 0;
  return !!n && tn(n.getKey(), 0, "text").isBefore(e);
}
function F$(e, t, n, r, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, u, f;
  const d = /* @__PURE__ */ new Map(), p = (g) => {
    const m = t.get(g.getKey());
    return m && n?.is(m) ? void 0 : m;
  }, h = (g) => {
    let m = f ? f.endBefore : g;
    for (; ; ) {
      const y = j$(m, e, r);
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
        const k = g === 0 ? r : 0, x = g === a ? i : m.getTextContentSize(), S = x - k, _ = Mf(m);
        if (_ && c + S > s) return h(u);
        if (!_ && c + S >= s) {
          const U = Bp(m.getTextContent(), k + (s - c));
          return h({ node: m, offset: Math.max(k, U) });
        }
        c += S, u = { node: m, offset: x };
      } else if (Tn(m) || Qi(m)) {
        const k = m.getTextContentSize();
        if (c + k > s) return h(u);
        c += k;
      }
    }
  }
  return h(u);
}
function z$(e) {
  let t;
  for (let n = e; n; n = n.getParent())
    (L(n) || _p(n)) && (t = n);
  return t;
}
function j$(e, t, n) {
  if (!e) return e;
  const r = nt(e.node, (m) => A(m) && !m.isInline()), i = A(r) ? r.getAllTextNodes() : [e.node], s = i.findIndex((m) => m.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let m = o; m <= a; m++)
    l.push(c.length), c += i[m].getTextContent();
  const u = l[s - o], f = u + e.offset, d = Bp(c, f);
  if (d === f) return e;
  const p = (m) => t[0]?.is(m) ?? !1;
  if (Mf(e.node)) return { ...e, offset: p(e.node) ? n : 0 };
  if (d >= u) {
    const m = d - u;
    return m >= (p(e.node) ? n : 0) ? { ...e, offset: m } : void 0;
  }
  const h = s > o ? i[s - 1] : void 0;
  if (!h || !t.some((m) => m.is(h))) return;
  if (Mf(h))
    return { node: h, offset: p(h) ? n : 0 };
  const g = d - l[0];
  return g >= (p(h) ? n : 0) ? { node: h, offset: g } : void 0;
}
function Fp(e, t) {
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
          u === 0 ? Ac(i) : 0,
          u === r ? Ac(s) : f.length
        );
      } else (Tn(l) || Qi(l)) && (u !== r || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function Ef(e) {
  const t = e.getParent();
  return !!t && nt(t, (n) => L(n) && !!n.getIsCollapsed()) !== null;
}
function LT(e) {
  const t = /* @__PURE__ */ new Map(), n = (i) => {
    Pt(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (n(i), A(i)) for (const { node: s } of es(i)) n(s);
  let r = 0;
  for (const i of t.values()) r += i;
  return r;
}
function V$(e) {
  return e.getNodes().some(
    (t) => Tn(t) || L(t) || we(t) || ct(t) || _p(t)
  );
}
function Ac(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return A(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const Jn = String.raw`\w-`, qT = "a-z0-9", W$ = `[a-z][${qT}]*`, DT = new RegExp(
  String.raw`^\\(\+?[${Jn}]+)[ \u00A0]$`
), so = new RegExp(String.raw`^\\(\+?[${Jn}]+)$`), H$ = new RegExp(String.raw`^\\\+?[${Jn}]*\*$`), G$ = new RegExp(
  String.raw`^\\(\+?[${Jn}]+)(?:[ \u00A0]|$)`
), J$ = new RegExp(
  String.raw`^\\(\+?)([${Jn}]+)`
), KT = new RegExp(
  String.raw`^(?:[${Jn}]+[*\\]?|[*\\])$`
), Y$ = new RegExp(
  String.raw`\\\+?[${Jn}]+(?:\\?\*|[ \u00A0])`
), UT = new RegExp(
  String.raw`\\\+?[${Jn}]*$`
), X$ = new RegExp(
  String.raw`^\\(${W$})( |$)`
), Q$ = new RegExp(
  String.raw`\\[${qT}+*]*$`,
  "i"
);
function BT(e) {
  const t = e.getParent();
  if (!L(t) || t.getIsCollapsed() !== !1 || !cd(t.getMarker())?.includes("caller")) return !1;
  const n = t.getChildren();
  let r = 0;
  for (; r < n.length; ) {
    const i = n[r];
    if (!N(i) || i.getMarkerSyntax() !== "opening") break;
    r++;
  }
  return e.is(n[r]);
}
const Pc = "usfm:", FT = "usfmopen", zT = "usfmclosed";
function Z$(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const eR = new RegExp(
  [Pc, FT, zT].map(Z$).join("|")
), tR = "\uFEFF", nR = /^usfm_(.+)$/;
function rR(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function iR(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, n) => String.fromCharCode(Number.parseInt(n, 16))
  );
}
function sR(e) {
  return e.startsWith(Pc) ? iR(e.slice(Pc.length)).replace(/\r\n?|\n/g, " ") : "";
}
function jT(e) {
  for (const t of e.classList) {
    const n = nR.exec(t);
    if (n) return n[1];
  }
}
function oR(e) {
  const t = jT(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function aR(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let n = t.nextNode(); n; n = t.nextNode())
    if ((n.nodeValue ?? "").startsWith(Pc)) return !0;
  for (const n of e.querySelectorAll("*")) {
    const { classList: r } = n;
    if (!(!r.contains(FT) && !r.contains(zT)) && jT(n) !== void 0)
      return !0;
  }
  return !1;
}
function VT(e, t, n) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || n.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    n.push(sR(e.nodeValue ?? ""));
    return;
  }
  if (!rR(e)) return;
  const { classList: r } = e, i = (u) => e.childNodes.forEach((f) => VT(f, u, n));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? oR(e) : void 0, c = a !== void 0 && r.contains("usfmopen"), l = a !== void 0 && r.contains("usfmclosed");
  o && n.push(`
`), (c || l) && n.push(`\\${a} `), i(!1), l && n.push(`\\${a}*`), o && n.push(`
`);
}
function cR(e) {
  if (!eR.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((r) => r.remove()), !aR(t)) return;
  const n = [];
  return t.childNodes.forEach((r) => VT(r, !1, n)), n.join("").replaceAll(tR, "").replaceAll(q, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function lR(e) {
  const t = e.getTextContent(), n = t === q;
  if (!n && !t.includes(" ")) return;
  const r = pe(e, ke);
  if (r === "attribute" || r === Ar || BT(e)) return;
  for (let a = e.getParent(); a; a = a.getParent())
    if (Ne(a) || rt(a)) return;
  if (n) {
    uR(e) && e.setTextContent(" ");
    return;
  }
  const i = t.startsWith(q) && D(e.getParent()), s = i ? t.slice(1) : t, o = (i ? q : "") + s.replace(/ (?=[ \u00A0])/g, q).replace(new RegExp("(?<=\\u00A0) ", "g"), q);
  o !== t && e.setTextContent(o);
}
function uR(e) {
  if (e.getMode() !== "normal" || pe(e, ke) !== void 0) return !1;
  const t = e.getParent();
  if (ae(t) || je(t) || L(t) && t.getChildren().some(Pt)) return !1;
  const n = e.getPreviousSibling();
  if ((D(t) || L(t)) && !n) return !1;
  const r = e.getNextSibling();
  return !N(n) && !ae(n) && !ae(r);
}
function fR(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((n) => n.remove()), t.querySelectorAll("br").forEach((n) => n.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((n) => n.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function dR(e, t) {
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
function Af(e, t) {
  const n = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!n) return;
  const r = (a) => a.replace(/\r\n?/g, `
`), i = r(n.getData("text/plain")), s = n.getData("text/html"), o = s ? cR(s) : void 0;
  return {
    text: o ? r(o) : i || (s ? r(fR(s)) : ""),
    isInternal: dR(
      n.getData("application/x-lexical-editor"),
      t
    )
  };
}
const Em = String.raw`\\(?:\+?[${Jn}]+\*?|\*)`, pR = new RegExp(
  String.raw`(?<=${Em})\u00A0|\u00A0(?=${Em})`,
  "g"
);
function zp(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(pR, " ").replaceAll(q, "~");
}
const WT = new RegExp(
  String.raw`\\c(?![${Jn}])[ \u00A0]*[^\s\\]*`,
  "g"
), HT = new RegExp(String.raw`\\id(?![${Jn}])[^\n\\]*`, "g"), hR = new RegExp(
  String.raw`^(?:${WT.source}|${HT.source})`
);
function jp(e) {
  return e.split(`
`).map((t) => {
    const n = t.replace(WT, "").replace(HT, "");
    return hR.test(t) && n.trim() === "" && t.trim() !== "" ? void 0 : n;
  }).filter((t) => t !== void 0).join(`
`);
}
function Pf(e) {
  if (v(e) && pe(e, ke) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (je(t)) return !0;
  return !1;
}
function gR(e) {
  return Pf(e.anchor.getNode()) || Pf(e.focus.getNode());
}
function mR(e) {
  const { anchor: t, focus: n } = e;
  return t.key === n.key && Pf(t.getNode());
}
function yR(e, t) {
  const r = mR(e) ? t : zp(jp(t));
  r && e.insertText(r.replace(/\n/g, " "));
}
function bR(e, t = !1, n = () => {
}) {
  const r = Af(e, Lt()._config.namespace);
  if (!r) return !1;
  const i = w(), s = E(i) && gR(i);
  if (!s && r.isInternal || t && E(i) && Is(i))
    return !1;
  const { text: o } = r;
  if (!o || !E(i)) return !1;
  if (e?.preventDefault(), s)
    return yR(i, o), !0;
  const a = zp(jp(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  n(), i.isCollapsed() || i.removeText();
  const l = Lt();
  return c.forEach((u, f) => {
    if (f > 0 && l.dispatchCommand(Ko, void 0), u === "") return;
    const d = w();
    E(d) && d.insertText(u);
  }), !0;
}
function kR(e) {
  if (e.getTextContent() !== q) return !1;
  const t = e.getParent();
  return L(t) ? !Pt(e.getPreviousSibling()) : !1;
}
function xR(e, t) {
  if (t || e.getTextContent() !== q) return "";
  const n = e.getParent();
  if (!L(n) || !Pt(e.getPreviousSibling())) return "";
  const r = n.getCategory();
  return r ? `\\cat ${r}\\cat*` : "";
}
function TR(e) {
  const t = e.getParent();
  return (L(t) ? t.getCaller() : void 0) || Bo;
}
function vR(e) {
  const t = e.getParent();
  return !t || li(t) === void 0;
}
function Vp(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const n = t[0], r = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = td(e);
  let l = "", u = !0;
  for (const f of t) {
    if (A(f) && !f.isInline()) {
      !u && vR(f) && (l += `
`), u = !f.isEmpty();
      continue;
    }
    if (u = !1, Pt(f))
      (f !== r || !e.isCollapsed()) && (l += (f === n ? "" : " ") + TR(f));
    else if (v(f)) {
      let d = f.getTextContent();
      f === n ? f === r ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (d = a < c ? d.slice(a, c) : d.slice(c, a)) : d = o ? d.slice(a) : d.slice(c) : f === r && (d = o ? d.slice(0, c) : d.slice(0, a)), l += kR(f) ? "" : d.replaceAll(q, " ") + xR(f, f === r);
    } else (Tn(f) || Qi(f)) && (f !== r || !e.isCollapsed()) && (l += f.getTextContent().replaceAll(q, " "));
  }
  return l;
}
function GT(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function CR(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (n) => Ie(n) || Ne(n)
    )
  );
}
function SR(e) {
  const t = w();
  if (!E(t) || t.isCollapsed()) return;
  const n = Vp(t), r = {
    "text/plain": n,
    "text/html": GT(n)
  };
  if (hl() || CR(t)) return r;
  const i = jS(e);
  return i && (r["application/x-lexical-editor"] = i), r;
}
function Am(e, t, n, r) {
  const i = w();
  if (!E(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !Bx();
  const s = SR(t);
  return s ? (r !== void 0 && delete s["application/x-lexical-editor"], JT(e, t, i, s, n, r)) : !1;
}
function JT(e, t, n, r, i, s) {
  const o = _f(s);
  if (o !== void 0 && RT(t, e)) return !1;
  const a = r["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), Nf(e, t, { "text/plain": IT(a, o) })) : Nf(
    e,
    t,
    r,
    i && t.isEditable() ? () => n.removeText() : void 0
  );
}
function Nf(e, t, n, r) {
  const i = !n["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || zS(t, null, n), r?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(n)) e.clipboardData.setData(s, o);
  return r?.(), !0;
}
function wf(e, t) {
  const n = ul(t);
  if (!n?.end) return;
  const r = _R(e, t);
  if (r)
    return r.state.read(
      () => {
        const i = Qo(n, r.standardViewOptions);
        return i ? Vp(i) : void 0;
      },
      { editor: r.editor }
    );
}
const vu = /* @__PURE__ */ new WeakMap();
function _R(e, t) {
  const n = e.getEditorState();
  if (vu.has(n)) {
    const i = vu.get(n);
    if (!i || i.viewOptions === t) return i;
  }
  const r = MR(n, t);
  return vu.set(n, r), r;
}
function MR(e, t) {
  const n = dp(lp);
  if (!n) return;
  const r = Ms.deserializeEditorState(e, t);
  if (!r) return;
  const i = od({
    namespace: "markers-view-copy",
    nodes: [mt, ...pl],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    lr.serializeEditorState(r, n)
  );
  return { viewOptions: t, standardViewOptions: n, editor: i, state: s };
}
function ER({
  viewOptions: e,
  copyLimit: t
}) {
  const [n] = Se();
  return G(() => {
    const r = (i, s) => {
      const o = w();
      if (!E(o) || o.isCollapsed()) return !1;
      const a = wf(n, e);
      return a === void 0 ? !1 : JT(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        n,
        o,
        { "text/plain": a, "text/html": GT(a) },
        s,
        t
      );
    };
    return it(
      n.registerCommand(Ds, (i) => r(i, !1), Qe),
      n.registerCommand(or, (i) => r(i, !0), Qe)
    );
  }, [n, e, t]), null;
}
const Pm = /* @__PURE__ */ new WeakMap();
function AR({
  limit: e,
  viewOptions: t
}) {
  const [n] = Se(), r = re(_f(e)), i = re(t), s = re(!1), o = re(void 0);
  return G(() => {
    r.current = _f(e), i.current = t, o.current?.();
  }, [e, t]), G(() => {
    let a, c;
    const l = (y) => {
      const k = r.current;
      if (k === void 0) return;
      const x = Pm.get(y);
      if (y.defaultPrevented && x === void 0) return;
      const S = n.getRootElement();
      if (!S) return;
      const _ = S.ownerDocument.getSelection();
      if (!_ || !wR(_, S)) return;
      y.preventDefault();
      const U = IT(
        x ?? _.toString().replaceAll(q, " "),
        k
      );
      Pm.set(y, U);
      const B = y.clipboardData;
      if (B) {
        if (!U) {
          x !== void 0 && B.clearData();
          return;
        }
        B.setData("text/plain", U);
      }
    }, u = (y) => {
      r.current !== void 0 && DS(y, "a", { ctrlKey: !Ks, metaKey: Ks }) && ($R(c?.activeElement, n.getRootElement()) || y.preventDefault());
    }, f = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", u, !0), c = void 0;
    }, d = () => {
      const y = r.current === void 0 ? void 0 : a;
      y !== c && (f(), c = y, c?.addEventListener("copy", l), c?.addEventListener("keydown", u, !0));
    };
    o.current = d;
    const p = (y) => (y?.preventDefault(), !0), h = (y) => {
      const k = r.current;
      if (k === void 0 || (s.current = !1, RT(n, y))) return !1;
      if (k <= 0) return p(y);
      const x = w();
      if (zc(x))
        return x.getTextContent().length + LT(x.getNodes()) <= k ? !1 : p(y);
      if (!E(x) || x.isCollapsed()) return !1;
      const S = PR(n, i.current);
      return S.$size(x) <= k ? !1 : (U$(k, S.options), x.isCollapsed() ? p(y) : (n.isEditable() || wy(() => NR(n)), s.current = !0, !1));
    }, g = (y, k) => {
      if (r.current === void 0 || !s.current) return !1;
      s.current = !1;
      const x = w();
      if (!E(x) || x.isCollapsed()) return !1;
      const S = k && n.isEditable() && !V$(x);
      return Nf(
        y && typeof y == "object" && "clipboardData" in y ? y : null,
        n,
        { "text/plain": Fp(x, Ef) },
        S ? () => x.removeText() : void 0
      );
    }, m = it(
      n.registerCommand(Ds, h, Xe),
      n.registerCommand(or, h, Xe),
      n.registerCommand(
        Ds,
        (y) => g(y, !1),
        vr
      ),
      n.registerCommand(
        or,
        (y) => g(y, !0),
        vr
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      n.registerCommand(
        Py,
        (y) => r.current === void 0 ? !1 : (y?.preventDefault(), !0),
        Xe
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
function PR(e, t) {
  if (Ut(t)) {
    const r = (i) => Vp(i).length;
    return { $size: r, options: { $measure: r } };
  }
  const n = t?.markerMode === "visible" ? t : void 0;
  if (n && wf(e, n) !== void 0) {
    const r = (i) => wf(e, n)?.length ?? Fp(i, Ef).length;
    return { $size: r, options: { $measure: r } };
  }
  return {
    $size: (r) => r.getTextContent().length + LT(r.getNodes()),
    options: { $isHidden: Ef }
  };
}
function NR(e) {
  e.getEditorState().read(() => {
    const t = w(), n = e.getRootElement()?.ownerDocument.getSelection();
    if (!E(t) || !n) return;
    const r = Nm(e, t.anchor), i = Nm(e, t.focus);
    r && i && n.setBaseAndExtent(...r, ...i);
  });
}
function Nm(e, t) {
  const n = e.getElementByKey(t.key);
  if (!n) return;
  if (t.type === "text") {
    const a = KS(n);
    return a ? [a, t.offset] : void 0;
  }
  const r = t.getNode(), i = A(r) ? r.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [n, n.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function wR(e, t) {
  const n = t.ownerDocument.createRange();
  n.selectNodeContents(t);
  for (let r = 0; r < e.rangeCount; r++) {
    const i = e.getRangeAt(r), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, n) < 0 && s.setStart(n.startContainer, n.startOffset), i.compareBoundaryPoints(i.END_TO_END, n) > 0 && s.setEnd(n.endContainer, n.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const OR = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function $R(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? OR.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const RR = /^\+/;
function Wp(e, t) {
  const n = t.replace(RR, "");
  return Object.hasOwn(e.markers, n) ? e.markers[n] : void 0;
}
function YT(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let n = e.length - 1; n >= 0; n--)
    if (t.occursUnder.includes(e[n].marker) && (n === e.length - 1 || t.rank === 0 || e[n + 1].rank <= t.rank))
      return { keep: n + 1, joins: !0 };
}
function XT(e, t) {
  return YT(e, t) !== void 0;
}
function Of(e, t) {
  const n = YT(e, t);
  return n ? (n.joins && (e.length = n.keep, e.push(t)), !0) : !1;
}
function Nc(e, t, n) {
  const r = A(e) ? e.getChildren().filter(N) : [];
  if (r.length === 0) {
    n.set(e.getKey(), t);
    return;
  }
  for (const i of r) n.set(i.getKey(), t);
}
function IR(e, t, n, r, i) {
  const s = Wp(r, t);
  if (!s) {
    Nc(e, "unknown", i);
    return;
  }
  if (n === void 0) return;
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(n) && Nc(e, "invalid", i);
}
function Ls(e, t, n, r, i) {
  for (const s of e.getChildren())
    if (D(s)) {
      const o = s.getMarker();
      i || IR(s, o, t, n, r), Ls(s, t, n, r, i || o === "xq");
    } else if (we(s)) {
      if (i) continue;
      const o = Wp(n, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && r.set(s.getKey(), "invalid") : r.set(s.getKey(), "unknown");
    } else L(s) ? Ls(s, s.getMarker(), n, r, i) : rt(s) || A(s) && Ls(s, t, n, r, i);
}
function LR(e, t) {
  const n = /* @__PURE__ */ new Map(), r = [], i = (o, a) => {
    const c = Wp(e, a);
    if (!c) {
      Nc(o, "unknown", n), Of(r, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    Of(r, l) || Nc(o, "invalid", n);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of _e().getChildren())
    rt(o) || (Ie(o) ? (i(o, o.getMarker()), s(o) && Ls(o, void 0, e, n, !1)) : ct(o) ? i(o, o.getMarker()) : ye(o) ? (i(o, o.getMarker()), s(o) && Ls(o, o.getMarker(), e, n, !1)) : A(o) && s(o) && Ls(o, "p", e, n, !1));
  return n;
}
function qR(e) {
  return !!e?.includes("(basic)");
}
function DR(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function QT(e, t) {
  return !e.startsWith("zpa") && e !== "c" && vf(e, t);
}
function Hp(e, t) {
  const n = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (n)
    return { marker: t, rank: n.rank ?? 0, occursUnder: n.occursUnder ?? [] };
}
function ZT(e, t) {
  const n = [];
  for (const r of t) {
    const i = Hp(e, r);
    i && Of(n, i);
  }
  return n;
}
function Ya(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: DR(e.description),
    isBasic: qR(e.description)
  };
}
function KR(e, t) {
  const n = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, r = n(e), i = n(t);
  return r.prefix !== i.prefix ? r.prefix < i.prefix ? -1 : 1 : r.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : r.digits - i.digits;
}
function $f(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : KR(e.marker, t.marker);
}
function Rf(e, t, n) {
  if (t.noteMarker) return [];
  const r = ZT(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && QT(i.marker, n)
  ).filter((i) => {
    const s = Hp(e, i.marker);
    return s !== void 0 && XT(r, s);
  }).map((i) => Ya(i, "paragraph")).sort($f);
}
function UR(e, t, n) {
  const { noteMarker: r, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => QT(c.marker, n)
  );
  if (r)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(r)
    ).map((c) => Ya(c, "character")).sort($f);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Ya(c, "character")),
    ...a.map((c) => Ya(c, "note"))
  ].sort($f);
}
function BR(e, t) {
  return t.map((n, r) => {
    const i = e.markers[n]?.endMarker ?? `${n}*`;
    return { marker: `${r === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function FR(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function zR(e, t, n) {
  return [
    ...BR(e, t.openCharMarkers),
    ...UR(e, t, n)
  ].sort(FR);
}
function jR(e, t, n) {
  if (t.source === "paragraph") return Rf(e, t, n);
  const r = zR(e, t, n);
  return r.length > 0 ? r : Rf(e, t, n);
}
function VR(e, t, n) {
  const r = Rf(e, t, n), i = ZT(e, t.previousParaMarkers), s = Hp(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && XT(i, s) ? "ip" : "p", c = r.findIndex((u) => u.marker === a);
  if (c <= 0) return r;
  const [l] = r.splice(c, 1);
  return [l, ...r];
}
const wc = "￼", wm = "|", ri = "\\", Cu = "+", WR = /([-\w]+)="(.*?)"/g, HR = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]), GR = /* @__PURE__ */ new Map([["file", "src"]]);
class Gp {
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
function Om(e, t) {
  const n = [e.indexOf(ri, t + 1), e.indexOf(wc, t + 1)].filter(
    (r) => r >= 0
  );
  return n.length > 0 ? Math.min(...n) : e.length;
}
function $m(e) {
  const t = e.slice(1), n = [...t.matchAll(WR)];
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
function JR(e, t) {
  const n = e.map(
    (o, a) => o.name === void 0 || !HR.has(o.name) && !e.slice(a + 1).some((c) => c.name === o.name)
  ), r = (o, a) => o.value === a.value && (a.name === void 0 || o.name === a.name || o.name !== void 0 && GR.get(o.name) === a.name), i = /* @__PURE__ */ new Set(), s = [];
  return t.forEach((o, a) => {
    const c = e.findIndex(
      (l, u) => n[u] && !i.has(u) && r(l, o)
    );
    c < 0 || (i.add(c), s.push([c, a]));
  }), s;
}
function Rm(e, t, n) {
  let r = 0, i = -1;
  for (const s of e) {
    if (!s.same) continue;
    const { end: o, otherEnd: a } = xa(s, n);
    o <= t && o > i && (i = o, r = a);
  }
  return r;
}
function YR(e, t, n, r, i) {
  if (e === t) {
    n.push(r, r + e.length, i, i + t.length, !0);
    return;
  }
  const s = $m(e), o = $m(t);
  if (!s || !o) {
    n.push(r, r + 1, i, i + 1, !0), n.pushStretch(e.slice(1), r + 1, t.slice(1), i + 1);
    return;
  }
  const a = new Gp();
  a.push(0, 1, 0, 1, !0);
  const c = JR(s, o);
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
    const h = Rm(l, d.start, "live");
    a.push(d.start, d.end, h, h, !1);
  });
  const f = new Set(c.map(([, d]) => d));
  o.forEach((d, p) => {
    if (f.has(p)) return;
    const h = Rm(l, d.start, "settled");
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
function ev(e, t, n, r, i) {
  let s = t, o = 0;
  for (; s < e.length && o < n.length; ) {
    const c = n[o] === wc && e[s] !== wc ? i.spellings?.get(o) : void 0;
    if (c !== void 0) {
      const u = new Gp(), f = ev(e, s, c, u, { prefix: !0 });
      i.literals?.set(o, {
        liveStart: s,
        liveEnd: f,
        inner: { segments: eI(u.segments, s) }
      }), r.push(s, f, o, o + 1, !1), s = f, o += 1;
      continue;
    }
    if (e[s] === wm && n[o] === wm) {
      const u = Om(e, s), f = Om(n, o);
      YR(e.slice(s, u), n.slice(o, f), r, s, o), s = u, o = f;
      continue;
    }
    const l = n[o] === ri ? XR(e, s, n, o) || ZR(e, s, n, o, i.spellings) || (!i.prefix && s === 0 && o === 0 ? QR(e, n) : 0) : 0;
    if (l > 0) {
      r.push(s, s, o, o + l, !1), o += l;
      continue;
    }
    if (e[s] === n[o]) {
      r.push(s, s + 1, o, o + 1, !0), s += 1, o += 1;
      continue;
    }
    if (e[s - 1] === ri && n[o - 1] === ri && e[s] === Cu != (n[o] === Cu)) {
      e[s] === Cu ? (r.push(s, s + 1, o, o, !1, !0), s += 1) : (r.push(s, s, o, o + 1, !1, !0), o += 1);
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
const ws = /\\\+?[\w-]+/y;
function XR(e, t, n, r) {
  ws.lastIndex = r;
  const i = ws.exec(n)?.[0];
  return !i || n[r + i.length] !== ri ? 0 : n.startsWith(i, r + i.length) && e.startsWith(i, t) && !e.startsWith(i, t + i.length) ? i.length : 0;
}
const qa = "\\p";
function QR(e, t) {
  return !t.startsWith(qa) || t[qa.length] !== ri ? 0 : e[0] === ri && !e.startsWith(qa) ? qa.length : 0;
}
function ZR(e, t, n, r, i) {
  ws.lastIndex = r;
  const s = ws.exec(n)?.[0];
  if (!s || n[r + s.length] !== wc) return 0;
  const o = i?.get(r + s.length);
  if (o === void 0 || e.startsWith(s, t)) return 0;
  ws.lastIndex = 0;
  const a = ws.exec(o)?.[0];
  return a !== void 0 && e.startsWith(a, t) ? s.length : 0;
}
function eI(e, t) {
  return e.map((n) => ({
    ...n,
    liveStart: n.liveStart - t,
    liveEnd: n.liveEnd - t
  }));
}
function tI(e, t, n) {
  const r = new Gp(), i = /* @__PURE__ */ new Map();
  return ev(e, 0, t, r, { prefix: !1, spellings: n, literals: i }), { alignment: { segments: r.segments }, literals: i };
}
function xa(e, t) {
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
function tv(e, t, n) {
  return e.segments.find((r) => {
    const { start: i, end: s } = xa(r, n);
    return i <= t && t < s;
  });
}
function nv(e, t) {
  let n = 0, r = 0;
  for (const i of e.segments) {
    const { end: s, otherEnd: o } = xa(i, t);
    n = Math.max(n, s), r = Math.max(r, o);
  }
  return [n, r];
}
function Jp(e, t, n) {
  const r = tv(e, t, n);
  if (r) {
    const { start: o, otherStart: a } = xa(r, n);
    return r.same ? a + (t - o) : void 0;
  }
  const [i, s] = nv(e, n);
  return t === i ? s : void 0;
}
function oo(e, t, n) {
  const r = tv(e, t, n);
  if (r) {
    const { start: i, otherStart: s } = xa(r, n);
    return r.same ? s + (t - i) : s;
  }
  return nv(e, n)[1];
}
function nI(e, t) {
  const n = oo(e, t, "settled"), r = e.segments.find(
    (i) => i.nesting && i.settledStart === t && i.settledEnd === t && i.liveEnd === n
  );
  return r ? r.liveStart : n;
}
const In = /\s/;
function rI(e, t) {
  return `\\${e} ${t}\\${e}*`;
}
function If(e) {
  const t = [];
  for (const r of e.spans)
    for (let i = r.start; i < r.end; i += 1) {
      const s = e.text[i];
      t.push({ byte: s, position: i, isWs: In.test(s) });
    }
  const n = e.spans.filter((r) => r.isSentinel).map((r) => r.start);
  return { bytes: t, placeholders: n };
}
function Xa({ bytes: e }, t) {
  return e.filter((n) => n.position < t && !n.isWs).length;
}
function iI({ bytes: e }, t) {
  let n = 0;
  for (const r of e) r.position < t && (n = r.isWs ? n + 1 : 0);
  return n;
}
function Lf({ bytes: e }) {
  return e.filter((t) => !t.isWs);
}
const Im = "cat", sI = "category";
function oI(e) {
  return v(e) && e.getTextContent().trim() === "";
}
function aI(e) {
  const t = { text: "", spans: [], sentinels: [] }, n = [], r = (a, c) => {
    t.spans.push({
      key: a.getKey(),
      start: t.text.length,
      end: t.text.length + c.length,
      isSentinel: !1
    }), t.text += c;
  }, i = (a, c) => {
    r(a, rI(Im, c)), n.push({
      ownerKey: a.getKey(),
      markerName: Im,
      keyName: sI,
      valueLength: c.length
    });
  }, s = (a) => {
    const c = ha(a);
    let u = c.opener ?? c.value ?? c.closer ? void 0 : a.getCategory();
    const f = At(a);
    let d = !1;
    for (const p of a.getChildren())
      u !== void 0 && d && !oI(p) && (i(a, u), u = void 0), o(p), (Pt(p) || f && (f.is(p) || p.isParentOf(f))) && (d = !0);
    u !== void 0 && i(a, u);
  }, o = (a) => {
    if (Pt(a)) {
      const c = a.getParent();
      r(a, L(c) ? c.getCaller() : "");
    } else v(a) || Dt(a) ? r(a, a.getTextContent()) : L(a) ? s(a) : A(a) && a.getChildren().forEach(o);
  };
  return e.forEach(o), { spelling: t, foldedAttributes: n };
}
function Yp(e) {
  const t = If(e);
  return {
    runs: e.sentinels.map((n, r) => {
      const { spelling: i, foldedAttributes: s } = aI(n);
      return {
        memberCount: n.length,
        before: Xa(t, t.placeholders[r] ?? e.text.length),
        spelling: i,
        foldedAttributes: s,
        spelled: Lf(If(i)).map(({ byte: o }) => o).join("")
      };
    }),
    bytes: Lf(t).map(({ byte: n }) => n).join("")
  };
}
function Oc(e, t) {
  return {
    facts: If(e),
    carried: e.sentinels.map((n, r) => {
      const i = new Set(t[r]?.map((s) => s.getKey()));
      return n.map((s) => i.has(s.getKey()));
    })
  };
}
function $c(e, t) {
  const n = e.carried.map(
    (d) => d.map(() => {
    })
  ), r = Lf(e.facts), { alignment: i, literals: s } = tI(
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
    const g = Jp(i, Xa(e.facts, h), "live"), m = g === void 0 ? void 0 : u.get(g);
    m === void 0 || t.runs[m].memberCount !== a(d) || o(p, m);
  });
  const f = [];
  for (const [d, p] of s) {
    const h = u.get(d);
    if (h === void 0) continue;
    const g = t.runs[h], m = r[p.liveStart]?.position ?? Number.POSITIVE_INFINITY, y = p.liveEnd > p.liveStart ? r[p.liveEnd - 1].position + 1 : m, k = Xa(e.facts, m);
    f.push({
      sentinelIndex: h,
      liveBefore: k,
      liveLength: Xa(e.facts, y) - k,
      liveWsBefore: iI(e.facts, m),
      settledBefore: g.before,
      spelling: g.spelling,
      inner: p.inner,
      foldedAttributes: g.foldedAttributes
    });
  }
  return { sentinelMap: n, settledOnlyRuns: f, alignment: i };
}
function Ta(e, t, n) {
  return {
    nonWsBefore: oo(
      e,
      t.nonWsBefore,
      n === "toSettled" ? "live" : "settled"
    ),
    wsRun: t.wsRun
  };
}
function rv(e, t, n) {
  return Jp(e.inner, t, n === "toSpelling" ? "live" : "settled");
}
function iv(e, t) {
  return e.find(
    (n) => t.nonWsBefore === n.liveBefore && t.wsRun >= n.liveWsBefore
  );
}
function Xp(e, t) {
  for (const n of e) {
    const r = t.nonWsBefore - n.liveBefore;
    if (r <= 0 || r >= n.liveLength) continue;
    const i = rv(n, r, "toSpelling");
    return {
      run: n,
      count: r,
      within: i === void 0 ? void 0 : { nonWsBefore: i, wsRun: t.wsRun }
    };
  }
}
function yl(e, t) {
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
function bl(e, t) {
  const n = [];
  for (let r = t; r; r = r.getParent()) {
    if (r.is(e)) return n;
    n.unshift(r.getIndexWithinParent());
  }
}
const St = fa;
function sv(e) {
  return e.length > 1 && e.startsWith(q) && e.charAt(1) !== St ? e.slice(1) : e;
}
function Lm(e) {
  return eo(e) ? e.markerSyntax ?? "opening" : void 0;
}
function ov(e, t, n, r) {
  const i = { ...r, noteMode: "expanded" }, s = lr.serializeEditorState(
    {
      type: sr,
      version: ir,
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
  for (; Lm(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Et(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Lm(a[u - 1]) === "closing"; )
    u--;
  const f = a.slice(c, u);
  return f.length === 0 ? { failure: "empty" } : { children: f };
}
function av(e, t) {
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const n = `${e.getMarker()}*`, r = t.findIndex(
    (i) => typeof i == "object" && i.type === "unmatched" && i.marker === n
  );
  if (!(r < 0))
    return { before: t.slice(0, r), after: t.slice(r + 1) };
}
function cv(e, t, n, r, i) {
  const s = Object.fromEntries(
    Object.entries(e.getUnknownAttributes() ?? {}).filter(([u]) => u !== "closed")
  ), o = lr.serializeEditorState(
    {
      type: sr,
      version: ir,
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
  ).root.children, a = o.length === 1 ? o[0] : void 0, c = Array.isArray(a?.children) ? a.children : void 0, l = c?.findIndex((u) => u.type === Ze.getType()) ?? -1;
  if (!(!c || l < 0))
    return c.slice(l);
}
function lv(e, t, n, r) {
  const i = e.getCode(), s = {
    ...e.getUnknownAttributes(),
    type: "book",
    marker: e.getMarker(),
    ...i !== "" && { code: i },
    content: t
  }, [o, ...a] = lr.serializeEditorState(
    { type: sr, version: ir, content: [s, ...n] },
    r
  ).root.children;
  if (!Od(o)) return { failure: "shape" };
  const c = nk(o.children[0]) ? o.children.slice(1) : o.children;
  return c.length === 0 && a.length === 0 ? { failure: "empty" } : { children: c, followingBlocks: a };
}
function xo(e, t, n) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + n.length,
    isSentinel: !1
  }), e.text += n;
}
function To(e, t) {
  const n = UT.exec(e.text)?.[0];
  n !== void 0 && (e.text += n === "\\" ? q : " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += St;
}
function Yt(e) {
  return e.replaceAll(q, " ");
}
const cI = `\\${q}${St}`;
function uv(e) {
  return e.forEach((t, n) => {
    typeof t == "string" ? e[n] = t.replaceAll(cI, `\\${St}`) : t.content && uv(t.content);
  }), e;
}
const fv = "\u2028";
function Qp(e) {
  return e.replaceAll(fv, "");
}
function Zp(e) {
  return e ? fv : " ";
}
function lI(e) {
  return L(e[0]) ? "note" : $e(e[0]) ? "verse" : "other";
}
function ls(e, t) {
  return uv(
    Gc(Qp(e.text), {
      ...t,
      placeholders: e.sentinels.map(lI)
    })
  );
}
function uI(e, t, n = !1, r = !1) {
  if (Ut(t)) return Yt(e);
  if (e === q && !r) return " ";
  const i = n && e.startsWith(q), s = i ? e.slice(1) : e, o = n && !i ? fI.exec(s) : null;
  return o ? `${o[0]} ${s.slice(o[0].length + 1).replaceAll(q, "~")}` : (i ? " " : "") + s.replaceAll(q, "~");
}
const fI = /^[^\s\u200B\\|*]+(?=\u00A0)/;
function qs(e) {
  const t = e.getTextContent();
  return vn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function kl(e, t) {
  const n = e[t];
  if (!ze(n)) return [];
  const { attribute: r, closing: i, wrapper: s } = Yc(n);
  if (s) return [s];
  const o = n.getNextSibling();
  if (!N(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== n.getMarker())
    return [];
  const a = [o];
  return r && a.push(r), i && a.push(i), a;
}
function dv(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function xl(e, t) {
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
function eh(e) {
  return !!e.getUnknownAttributes();
}
function Tl(e, t) {
  const n = t(e)?.type;
  return n === T.Milestone || n === void 0 && gd(e);
}
function th(e) {
  return e.getIsCollapsed() !== !1 || e.getChildren().some((n) => N(n) && n.getMode() === "token") || Object.keys(e.getUnknownAttributes() ?? {}).some((n) => n !== "closed") ? !1 : e.getChildren().some((n) => {
    if (!N(n) || pr(n)) return !1;
    if (n.getMarkerSyntax() !== "opening") return !0;
    const r = n.getTextContent(), i = (so.exec(r) ?? DT.exec(r))?.[1];
    return i === void 0 || i.startsWith("+") || !Ze.isValidMarker(i) || n.getMarker() !== e.getMarker();
  });
}
function vl(e, t) {
  return ze(e) ? !Tl(e.getMarker(), t) : L(e) ? !th(e) : rt(e) ? !0 : $e(e) ? eh(e) : D(e) ? pv(e, t) : !1;
}
function pv(e, t) {
  return hv(e, e.getMarker(), t);
}
function hv(e, t, n) {
  return f0(e) ? !0 : I_(t) || n(t) !== void 0 || dI(e) && !pI(e) ? !1 : t !== e.getMarker() || !hI(e);
}
function dI(e) {
  const t = e.getParent();
  return t !== null && wn(t) !== void 0;
}
function pI(e) {
  const t = e.getUnknownAttributes();
  return !!t && Object.keys(t).some((n) => n !== "closed");
}
function hI(e) {
  const t = e.getChildren().filter((i) => N(i) && i.getMarker() === e.getMarker()).filter(N);
  if (t.some((i) => !pr(i))) return !0;
  const n = t.some((i) => i.getMarkerSyntax() === "opening"), r = t.some((i) => i.getMarkerSyntax() === "closing");
  return !n && r;
}
function gv(e) {
  let t = e, n = t.getParent();
  for (; !t.getNextSibling() && ae(n); )
    t = n, n = t.getParent();
  let r = t.getNextSibling();
  for (; ae(r); ) r = r.getFirstChild();
  return $e(r);
}
const un = "", fn = "";
function qm(e) {
  return e.flatMap((t) => je(t) ? t.getChildren() : [t]);
}
function gI(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  let r = !1;
  const i = (s) => {
    if (ae(s)) {
      r = !0, s.getChildren().forEach(i), r = !0;
      return;
    }
    r && t.length > 0 && n.add(s), r = !1, t.push(s);
  };
  return e.forEach(i), { nodes: t, splitByMark: n };
}
function mI(e, t) {
  return v(e) && !$e(e) && !N(e) && !on(e) && !vl(e, t) && pe(e, ke) !== "attribute";
}
function Es(e, t, n, r = !1, i) {
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (ze(o)) {
      const a = kl(e, s);
      Tl(o.getMarker(), n) && dv(a) ? (t.push(
        un,
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
          marker: o.getMarker(),
          sid: o.getSid() ?? null,
          eid: o.getEid() ?? null,
          unknownAttributes: o.getUnknownAttributes() ?? null,
          attributeOrder: o.getAttributeOrder() ?? null
        })
      ), Es(qm(a), t, n), t.push(fn)) : t.push(St), s += a.length;
    } else if ($e(o)) {
      const a = xl(e, s);
      eh(o) ? t.push(St) : (t.push(
        un,
        "verse",
        Yt(o.getTextContent()),
        JSON.stringify({
          number: o.getNumber(),
          altnumber: o.getAltnumber() ?? null,
          pubnumber: o.getPubnumber() ?? null
        })
      ), Es(qm(a), t, n), t.push(fn)), s += a.length;
    } else if (N(o))
      t.push(un, "marker", Yt(o.getTextContent()), fn);
    else if (on(o))
      t.push(
        un,
        "unmatched",
        Yt(o.getTextContent()),
        o.getMarker(),
        fn
      );
    else if (vl(o, n))
      t.push(St);
    else if (Qi(o))
      t.push(Zp(gv(o)));
    else if (v(o) && pe(o, ke) === "attribute")
      t.push(
        un,
        "attribute",
        Yt(qs(o)),
        fn
      );
    else if (v(o)) {
      let a = qs(o);
      if (r) {
        let c = e[s + 1];
        for (; i?.has(c) && mI(c, n); )
          a += qs(c), s += 1, c = e[s + 1];
        a = sv(a);
      }
      t.push(Yt(a));
    } else if (D(o)) {
      t.push(un, "char", JSON.stringify(o.getUnknownAttributes() ?? null));
      const { nodes: a, splitByMark: c } = gI(o.getChildren());
      Es(a, t, n, !0, c), t.push(fn);
    } else ae(o) ? Es(o.getChildren(), t, n, r) : A(o) ? (t.push(un, o.getType()), Es(o.getChildren(), t, n), t.push(fn)) : t.push(St);
  }
}
function _r(e, t) {
  const n = [];
  return Es(e, n, t), n.join("");
}
function ur(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Js(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function yI(e) {
  return e.$?.textType;
}
function nh(e) {
  return e.type ?? "";
}
function Cl(e, t, n) {
  return t === "closing" ? at(e, n) : t === "selfClosing" ? at("") : Je(e, n);
}
function Su(e, t) {
  const n = e[t];
  if (!(!n || nh(n) !== "attribute-run"))
    return ur(n) ?? [];
}
function Mr(e, t) {
  const n = [];
  return Eo(e, n, t), n.join("");
}
function Eo(e, t, n, r = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = nh(s);
    if (o === "ms") {
      const l = s, u = Su(e, i + 1);
      u && Tl(l.marker ?? "", n) ? (t.push(
        un,
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
      ), Eo(u, t, n), t.push(fn), i += 1) : t.push(St);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(St);
        continue;
      }
      t.push(
        un,
        "verse",
        Yt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, f = Su(e, i + 1 + u);
      for (; f; )
        Eo(f, t, n), u++, f = Su(e, i + 1 + u);
      t.push(fn), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        un,
        "marker",
        Yt(
          Cl(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        fn
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(Zp(yd(e[i + 1])));
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(un, "char", JSON.stringify(l.unknownAttributes ?? null)), Eo(ur(s) ?? [], t, n, !0), t.push(fn);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(St);
      continue;
    }
    if (o === "unmatched") {
      const l = UM(s) ? s.marker : "";
      t.push(un, "unmatched", Yt(Js(s) ?? ""), l), t.push(fn);
      continue;
    }
    const a = Js(s);
    if (a !== void 0 && yI(s) === "attribute") {
      t.push(un, "attribute", Yt(a), fn);
      continue;
    }
    if (a !== void 0) {
      t.push(Yt(r ? sv(a) : a));
      continue;
    }
    const c = ur(s);
    c ? (t.push(un, o), Eo(c, t, n), t.push(fn)) : t.push(St);
  }
}
function fi(e) {
  let t = 0;
  for (const n of e) {
    const r = ur(n);
    if (r) {
      t += fi(r);
      continue;
    }
    const i = Js(n);
    if (i !== void 0)
      for (const s of i) s === St && t++;
  }
  return t;
}
function Ys(e, t, n, r, i) {
  Pn(e.getChildren(), t, n, r, i);
}
function Pn(e, t, n, r, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (N(a))
      xo(t, a, Yt(a.getTextContent()));
    else if (ze(a)) {
      s();
      const c = kl(e, o);
      Tl(a.getMarker(), n) && dv(c) ? Pn(c, t, n, r) : To(t, [a, ...c]), o += c.length;
    } else if (L(a) && th(a)) {
      s();
      const c = At(a);
      for (const l of a.getChildren())
        c?.is(l) ? xo(t, l, Yt(l.getTextContent())) : Pn([l], t, n, r);
    } else if (L(a) || rt(a))
      s(), To(t, [a]);
    else if ($e(a)) {
      s();
      const c = xl(e, o);
      eh(a) ? To(t, [a, ...c]) : (xo(t, a, Yt(qs(a))), Pn(c, t, n, r)), o += c.length;
    } else if (D(a))
      s(), pv(a, n) ? To(t, [a]) : Ys(a, t, n, r, { pending: !0 });
    else if (Qi(a))
      s(), xo(t, a, Zp(gv(a)));
    else if (v(a)) {
      const c = a.getParent(), l = vn(a) || pe(a, ke) === "attribute" || Ne(c) && !!gi(c)?.is(a), u = s() && !l;
      xo(
        t,
        a,
        l ? Yt(qs(a)) : uI(
          qs(a),
          r,
          u,
          ok(a)
        )
      );
    } else A(a) ? Ys(a, t, n, r, i) : (s(), To(t, [a]));
  }
}
function rh(e) {
  const [t] = e;
  return ye(t) && t.getMarker() === "";
}
function ih(e, t, n) {
  if (e.getUnknownAttributes()) return;
  const r = t(e.getMarker())?.type;
  if (r !== void 0 && r !== T.Unknown && r !== T.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (rt(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Ys(e, i, t, n), i;
}
function bI(e, t, n) {
  const r = { text: "", spans: [], sentinels: [] };
  return Ys(e, r, t, n), r;
}
function sh(e, t, n) {
  if (e.length === 0 || !e.every(ye)) return;
  const r = { text: "", spans: [], sentinels: [] };
  return oh(r, e, t, n) ? r : void 0;
}
function Dm(e, t, n) {
  const r = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    if (ye(i)) {
      const s = ih(i, t, n);
      if (!s) return;
      const o = r.text.length;
      s.spans.forEach(
        (a) => r.spans.push({ ...a, start: a.start + o, end: a.end + o })
      ), r.sentinels.push(...s.sentinels), r.text += s.text;
    } else Ne(i) ? Pn(i.getChildren(), r, t, n) : Pn([i], r, t, n);
  return r;
}
function oh(e, t, n, r) {
  for (const i of t) {
    const s = ih(i, n, r);
    if (!s) return !1;
    e.text.length > 0 && (e.text += " ");
    const o = e.text.length;
    s.spans.forEach(
      (a) => e.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), e.sentinels.push(...s.sentinels), e.text += s.text;
  }
  return !0;
}
function Sl(e, t) {
  let n = 0;
  const r = (i) => {
    if (v(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(St);
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
function ea(e, t = []) {
  for (const n of e)
    $e(n) ? t.push(n) : A(n) && ea(n.getChildren(), t);
  return t;
}
function _l(e) {
  let t = 0;
  const n = (r) => {
    if (v(r))
      for (const i of r.getTextContent()) i === St && t++;
    else A(r) && r.getChildren().forEach(n);
  };
  return e.forEach(n), t;
}
function Jr(e) {
  let t = 0;
  for (const n of e)
    if (typeof n == "string")
      for (const r of n) r === St && t++;
    else n.content && (t += Jr(n.content));
  return t;
}
function Ml(e, t, n, r = { text: "", spans: [], sentinels: [] }) {
  for (const i of e)
    r.text.length > 0 && (r.text += " "), A(i) && Ys(i, r, t, n);
  return r;
}
function mv(e, t, n, r) {
  const { out: i } = Pl(e, n, r);
  return Ml(t, n, r, i);
}
function ii(e, t, n) {
  let r = 0, i = 0;
  for (const s of e.spans) {
    const o = s.end - s.start, a = s.key === t, c = a ? Math.min(s.isSentinel ? 1 : n, o) : o;
    for (let l = 0; l < c; l++)
      In.test(e.text[s.start + l]) ? i++ : (r++, i = 0);
    if (a) return { nonWsBefore: r, wsRun: i };
  }
}
function qf(e, t) {
  t.add(e.getKey()), A(e) && e.getChildren().forEach((n) => qf(n, t));
}
function ah(e, t, n) {
  return e.spans.find(
    (r) => !r.isSentinel && r.key === t && n <= r.end - r.start
  );
}
function Ro(e, t, n) {
  const r = (f, d) => {
    const p = ii(e, f, d), h = ah(e, f, d);
    return p && h ? { anchor: p, position: h.start + d } : void 0;
  }, i = (f) => {
    const d = f.end - f.start, p = ii(e, f.key, d);
    return p ? { anchor: p, position: f.start + d } : void 0;
  };
  if (!A(t)) return r(t.getKey(), n);
  const s = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, n).forEach((f) => qf(f, s));
  const o = [...e.spans].reverse().find((f) => s.has(f.key));
  if (o) return i(o);
  const a = /* @__PURE__ */ new Set();
  qf(t, a);
  const c = e.spans.find((f) => a.has(f.key));
  if (c && !c.isSentinel) return r(c.key, 0);
  const l = [...e.spans].reverse().find((f) => !a.has(f.key) && Q(f.key)?.isBefore(t));
  if (l) return i(l);
  const u = e.spans[0];
  return u && !u.isSentinel ? r(u.key, 0) : void 0;
}
function Os(e) {
  if (e.isSentinel) return !1;
  const t = Q(e.key);
  return N(t) && t.getMarkerSyntax() !== "opening";
}
function Df(e) {
  const t = Q(e.key);
  if (!N(t)) return;
  const n = t.getParent();
  if (!D(n)) return;
  const r = n.getParent();
  if (r)
    return {
      key: r.getKey(),
      offset: n.getIndexWithinParent() + 1,
      type: "element"
    };
}
function _u(e) {
  const t = Q(e.key), n = t?.getParent(), r = n?.getChildren();
  if (!t || !n || !r) return;
  const i = r.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = $e(t) ? xl(r, i) : ze(t) ? kl(r, i) : [], o = s[s.length - 1] ?? t;
  return { key: n.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" };
}
function mn(e, t, {
  addressDisplayBytes: n = !1,
  endAfterSkippedConstruct: r = !1
} = {}) {
  const { text: i, spans: s } = e;
  let o, a, c = t.nonWsBefore, l = t.wsRun, u = !1;
  e: for (const [h, g] of s.entries()) {
    const m = g.end - g.start, y = !g.isSentinel && (n || !Os(g));
    if (u) {
      if (!y) continue;
      o = { key: g.key, offset: 0 };
      break;
    }
    for (let k = 0; k < m; k++) {
      const x = i[g.start + k];
      if (c === 0 && (l === 0 || !In.test(x))) {
        if (y) {
          o = { key: g.key, offset: k };
          break e;
        }
        u = !0;
        continue e;
      }
      c > 0 ? In.test(x) || c-- : l--;
    }
    if (c === 0 && l === 0) {
      const k = s[h + 1]?.isSentinel === !0;
      if (y && (!n || k)) {
        o = { key: g.key, offset: m };
        break;
      }
      const x = s[h + 1];
      if (r && !y && x && (x.isSentinel || Os(x))) {
        const S = g.isSentinel ? _u(g) : Df(g);
        if (S) return S;
      }
      if (g.isSentinel && k) {
        const S = _u(g);
        if (S) return S;
      }
      y && (a = { key: g.key, offset: m }), u = !0;
    }
  }
  if (o) return { ...o, type: "text" };
  if (a) return { ...a, type: "text" };
  const f = s[s.length - 1];
  if (n && c === 0 && f && !f.isSentinel && f.end === i.length)
    return { key: f.key, offset: f.end - f.start, type: "text" };
  const d = s[s.length - 1];
  if (d && Os(d)) {
    const h = Df(d);
    if (h) return h;
  }
  if (d?.isSentinel) {
    const h = _u(d);
    if (h) return h;
  }
  const p = [...s].reverse().find((h) => !h.isSentinel && !Os(h));
  if (p) return { key: p.key, offset: p.end - p.start, type: "text" };
}
function yv(e, t = []) {
  for (const n of e)
    ae(n) && t.push(n), A(n) && yv(n.getChildren(), t);
  return t;
}
function bv(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), A(e) && e.getChildren().forEach((n) => bv(n, t)), t;
}
function kI(e, t, n) {
  const r = ii(e, t.key, n);
  if (r)
    return t.isSentinel ? {
      kind: "preserved",
      anchor: r,
      run: e.spans.filter((i) => i.isSentinel).indexOf(t)
    } : { kind: "byte", anchor: r };
}
function va(e, t, n = t.sentinels, r) {
  const i = [];
  for (const o of yv(e)) {
    const a = bv(o), c = t.spans.filter((k) => a.has(k.key)), l = c[0], u = c[c.length - 1];
    if (!l || !u) continue;
    const f = kI(t, l, 0), d = ii(t, u.key, u.end - u.start);
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
    for (const c of Ir(o)) {
      if (c.start === c.end || !ah(t, a, c.start)) continue;
      const l = ii(t, a, c.start), u = ii(t, a, c.end);
      if (!l || !u) continue;
      const f = r && fc(r, c.type, c.id);
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
  return e.forEach(s), { ranges: i, live: i.length > 0 ? Oc(t, n) : void 0 };
}
function xI(e, t, n) {
  const r = kv(e);
  if (!r) return;
  const i = r[r.length - 1].getNextSibling();
  if (!ae(i) || !i.hasID(t, n)) return;
  const s = i.getFirstChild();
  s && r.forEach((o) => s.insertBefore(o));
}
function TI(e, t) {
  const n = kv(e);
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
function kv(e) {
  const t = Q(e), n = t?.getParent()?.getChildren();
  if (!t || !n) return;
  const r = n.findIndex((s) => s.is(t));
  if (r < 0) return;
  const i = $e(t) ? xl(n, r) : ze(t) ? kl(n, r) : [];
  return [t, ...i];
}
function xv(e, t, n, r) {
  const i = n.settledOnlyRuns, s = { addressDisplayBytes: r, endAfterSkippedConstruct: !r }, o = Xp(i, e);
  if (o) {
    if (!o.within) return;
    const u = mn(o.run.spelling, o.within, s);
    return u ? { point: u, at: o.within.nonWsBefore, literalRun: o.run.sentinelIndex } : void 0;
  }
  const a = r && iv(i, e);
  if (a) {
    const u = t.sentinels[a.sentinelIndex]?.[0]?.getKey(), f = {
      nonWsBefore: a.settledBefore + 1,
      wsRun: 0
    }, d = mn(t, f, s);
    return d && u ? { point: d, at: f.nonWsBefore, preservedKey: u } : void 0;
  }
  const c = Ta(n.alignment, e, "toSettled"), l = mn(t, c, s);
  return l && { point: l, at: c.nonWsBefore };
}
function vI(e, t, n) {
  if (e.kind === "byte") return xv(e.anchor, t, n, !0);
  const r = n.sentinelMap[e.run]?.find((a) => a !== void 0), i = r && t.sentinels[r.sentinelIndex]?.[0]?.getKey();
  if (!i) return;
  const s = Ta(n.alignment, e.anchor, "toSettled"), o = mn(t, s, { addressDisplayBytes: !0 });
  return o && { point: o, at: s.nonWsBefore, preservedKey: i };
}
function Km(e) {
  if (e.type !== "text") return e;
  const t = Q(e.key);
  if (v(t)) return e;
  const n = t?.getParent();
  if (!t || !n) return;
  const r = t.getIndexWithinParent() + (e.offset > 0 ? 1 : 0);
  return { key: n.getKey(), offset: r, type: "element" };
}
function CI(e, t) {
  const n = (s) => {
    if (s.type !== "text") return s;
    const o = Q(s.key), a = o?.getParent();
    return !v(o) || !a ? s : s.offset === 0 ? { key: a.getKey(), offset: o.getIndexWithinParent(), type: "element" } : s.offset === o.getTextContentSize() ? { key: a.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" } : s;
  }, r = n(e), i = n(t);
  return r.key === i.key && r.offset === i.offset && r.type === i.type;
}
function Ca({ ranges: e, live: t }, n) {
  if (e.length === 0 || !t) return;
  const r = w()?.clone() ?? null;
  for (const i of e)
    for (const s of i.annotations) {
      const o = n();
      if (!o) continue;
      const a = $c(t, Yp(o)), c = vI(i.start, o, a), l = xv(i.end, o, a, !1);
      if (!c || !l || c.literalRun !== l.literalRun) continue;
      const u = i.start.anchor;
      if (c.at === l.at && u.nonWsBefore !== i.end.nonWsBefore && !c.preservedKey)
        continue;
      const { preservedKey: f } = c, d = Km(c.point), p = Km(l.point);
      if (!d || !p) continue;
      if (CI(d, p)) {
        f && TI(f, s);
        continue;
      }
      const h = Kr();
      h.anchor.set(d.key, d.offset, d.type), h.focus.set(p.key, p.offset, p.type), Gd(
        h,
        s.type,
        s.id,
        s.onClick,
        s.onRemove,
        s.onMouseEnter,
        s.onMouseLeave
      ), f && xI(f, s.type, s.id);
    }
  zn(r);
}
function ch(e, t, n) {
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
function Tv(e, t) {
  return e.sentinels.filter((r, i) => r.length > 0 && (t[i]?.length ?? 0) === 0).map((r) => r[0].getKey()).reverse().reduce((r, i) => {
    const s = r.spans.find((o) => o.isSentinel && o.key === i);
    return s ? ch(r, s.start, s.end) : r;
  }, e);
}
function us(e) {
  const t = e.exportJSON();
  return A(e) && Array.isArray(t.children) && e.getChildren().forEach((n) => t.children?.push(us(n))), t;
}
function El(e, t, n, r, i, s, o) {
  const a = va(
    e,
    Tv(t, n),
    n
  );
  if (a.ranges.length === 0) return r;
  const c = {
    ...a,
    ranges: a.ranges.map((f) => ({
      ...f,
      annotations: f.annotations.map(({ type: d, id: p }) => ({ type: d, id: p }))
    }))
  }, l = od({
    nodes: [mt, ...pl],
    onError: (f) => {
      throw f;
    }
  });
  ad(
    l,
    mt,
    (f) => Ki(f.getTypedIDs()),
    (f, d) => Object.entries(f.getTypedIDs()).forEach(
      ([p, h]) => h.forEach((g) => d.addID(p, g))
    )
  );
  let u;
  return l.update(
    () => {
      const f = _e(), d = i === "noteContent" ? Wn() : f;
      d !== f && f.append(d), u = d.getKey(), r.forEach((h) => d.append(qr(h))), Ca(c, () => {
        const h = d.getChildren();
        if (i === "paras") return Ml(h, s, o);
        if (i === "chapter")
          return Ne(h[0]) ? ta(h[0], s, o) : void 0;
        if (i === "bookLine") {
          const [m, ...y] = h;
          return Ie(m) ? mv(m, y, s, o) : void 0;
        }
        const g = { text: "", spans: [], sentinels: [] };
        return Pn(h, g, s, o), g;
      });
    },
    { discrete: !0 }
  ), l.getEditorState().read(() => {
    const f = u === void 0 ? void 0 : Q(u);
    return A(f) ? f.getChildren().map(us) : r;
  });
}
function Kf(e) {
  const t = Q(e.key);
  if (!t?.isAttached()) return !1;
  if (e.type === "text")
    return v(t) ? (t.select(e.offset, e.offset), !0) : !1;
  if (!A(t)) return !1;
  const n = Kr();
  return n.anchor.set(e.key, e.offset, "element"), n.focus.set(e.key, e.offset, "element"), zn(n), !0;
}
function SI(e, t, n) {
  const r = mn(e, t);
  if (r?.type === "text") {
    if (Kf(r)) return;
  } else if (r) {
    const i = Q(r.key), s = A(i) ? i.getChildAtIndex(r.offset - 1) : void 0;
    if (s) {
      s.selectNext(0, 0);
      return;
    }
  }
  n.find(A)?.selectStart();
}
function Al(e, t) {
  const n = t.getNode(), r = yl(e, n), i = r && bl(r.member, n);
  return {
    // An element point (a click past a paragraph's trailing note) has no span of its own, so it
    // is spelled from the child bytes beside it, the same way a settled position spells one.
    anchor: t.type === "element" ? Ro(e, n, t.offset)?.anchor : ii(e, t.key, t.offset),
    inRun: r && i ? {
      sentinelIndex: r.sentinelIndex,
      memberIndex: r.memberIndex,
      path: i,
      offset: t.offset,
      type: t.type
    } : void 0,
    live: Oc(e, e.sentinels)
  };
}
function vv(e, t, n) {
  const r = t && $c(t.live, Yp(e));
  if (t?.inRun && r) {
    const { sentinelIndex: o, memberIndex: a, path: c, offset: l, type: u } = t.inRun, f = r.sentinelMap[o]?.[a];
    let d = f && e.sentinels[f.sentinelIndex]?.[f.memberIndex];
    for (const p of c)
      d = A(d) ? d.getChildAtIndex(p) ?? void 0 : void 0;
    if (d && Kf({ key: d.getKey(), offset: l, type: u })) return;
  }
  if (!t?.anchor || !r) {
    n.find(A)?.selectStart();
    return;
  }
  const { anchor: i } = t, s = Xp(r.settledOnlyRuns, i);
  if (s) {
    const o = s.within ?? {
      nonWsBefore: oo(s.run.inner, s.count, "live"),
      wsRun: i.wsRun
    }, a = mn(s.run.spelling, o);
    if (a && Kf(a)) return;
  }
  SI(
    e,
    Ta(r.alignment, i, "toSettled"),
    n
  );
}
function Cv(e, t, n, r, i) {
  n && vv(Ml(e, r, i), t, e);
}
function Sv(e, t, n, r, i) {
  if (!n) return;
  if (!t?.anchor && !t?.inRun) {
    _I(e, r);
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  Pn(e, s, r, i), vv(s, t, e);
}
function _I(e, t) {
  const n = e.find(A);
  if (n && vl(n, t)) {
    const r = n.getParent();
    if (r) {
      const i = n.getIndexWithinParent();
      r.select(i, i);
      return;
    }
  }
  n?.selectStart();
}
function _v(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: n, getMarker: r, logger: i } = t, s = sh(e, r, n);
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
    c.isCollapsed() && (o = Al(s, c.anchor));
  }
  const l = va(e, s, void 0, Lt()), u = ls(s, {
    getMarker: r,
    opensNamelessParagraph: rh(e)
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Jr(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const f = lr.serializeEditorState(
    { type: sr, version: ir, content: u },
    n
  );
  if (Mr(f.root.children, r) === _r(e, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = f.root.children.map((m) => qr(m));
  if (_l(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = ea(e).map((m) => ({
    number: m.getNumber(),
    sid: m.getSid()
  })), h = e[0];
  d.forEach((m) => h.insertBefore(m)), Sl(d, s.sentinels), e.forEach((m) => m.remove());
  const g = ea(d);
  for (let m = 0; m < p.length && m < g.length; m++)
    g[m].getNumber() === p[m].number && g[m].setSid(p[m].sid);
  return Ca(l, () => Ml(d, r, n)), Cv(d, o, a, r, n), !0;
}
function MI(e) {
  if (e.getIsCollapsed() !== !1 || !Ze.isValidMarker(e.getMarker())) return;
  const t = e.getChildren();
  let n = 0;
  for (; n < t.length; ) {
    const o = t[n];
    if (!N(o) || o.getMarkerSyntax() !== "opening") break;
    n++;
  }
  const r = t[n];
  if (!r || !(Pt(r) || v(r) && r.getTextContent() === Et(e.getCaller()))) return;
  n++;
  let s = t.length;
  for (; s > n; ) {
    const o = t[s - 1];
    if (!N(o) || o.getMarkerSyntax() !== "closing") break;
    s--;
  }
  return t.slice(n, s);
}
function Ji(e, t, n) {
  const r = MI(e);
  if (!r) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Pn(r, i, t, n), { out: i, contentNodes: r };
}
function lh(e, t, n) {
  const r = { text: "", spans: [], sentinels: [] };
  return Pn(e, r, t, n), r;
}
function Mv(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const r = t.content[0];
  if (typeof r != "string" || r.includes(St)) return;
  const i = r.trim();
  if (i !== "")
    return e.shift(), i;
}
function EI(e, t) {
  const { viewOptions: n, getMarker: r, logger: i } = t, s = Ji(e, r, n);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = w();
  if (E(u)) {
    for (let B = u.anchor.getNode(); B; B = B.getParent())
      if (e.is(B)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = Al(o, u.anchor));
  }
  const f = va(a, o, void 0, Lt()), d = ls(o, {
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
  const h = p.content ?? [], g = Mv(h), m = av(e, h);
  if (m)
    return AI(
      e,
      m,
      g,
      o.sentinels,
      t,
      l
    );
  const y = ov(e, h, g, n);
  if (y.failure !== void 0)
    return y.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      y.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (fi(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const k = e.getCategory() !== g;
  if (k && e.setCategory(g), Mr(y.children, r) === _r(a, r))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), k;
  const x = y.children.map((B) => qr(B));
  if (_l(x) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), k;
  const S = a[0];
  if (S)
    x.forEach((B) => S.insertBefore(B));
  else {
    const B = e.getChildren().find((V) => N(V) && V.getMarkerSyntax() === "closing");
    x.forEach((V) => B ? B.insertBefore(V) : e.append(V));
  }
  Sl(x, o.sentinels);
  const _ = new Set(o.sentinels.flat().map((B) => B.getKey()));
  a.forEach((B) => {
    _.has(B.getKey()) || (ae(B) && (B.getWritable().__suppressOnRemoveCallbacks = !0), B.remove());
  });
  const U = () => Ji(e, r, n);
  return Ca(f, () => U()?.out), Sv(
    U()?.contentNodes ?? x,
    c,
    l,
    r,
    n
  ), !0;
}
function AI(e, { before: t, after: n }, r, i, s, o) {
  const { viewOptions: a, logger: c } = s, l = cv(
    e,
    t,
    n,
    r,
    a
  );
  if (!l || fi(l) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  const u = l.map((h) => qr(h)), [f] = u;
  if (!L(f) || _l(u) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  let d = e;
  for (const h of u)
    d.insertAfter(h), d = h;
  Sl(u, i);
  const p = e.getChildren();
  return e.append(...f.getChildren()), p.forEach((h) => h.remove()), e.setCaller(f.getCaller()).setCategory(f.getCategory()).setUnknownAttributes(f.getUnknownAttributes()).setIsCollapsed(f.getIsCollapsed()), f.remove(), o && (e.getIsCollapsed() !== !0 && a?.isNoteShellEditable === !1 ? Ha(e, a) : hx(e, { isContentChange: !0 })), !0;
}
function Ev(e) {
  const t = e.getChildren();
  return Ld(t[0]) ? t.slice(1) : t;
}
function Pl(e, t, n) {
  const r = Ev(e), i = { text: "", spans: [], sentinels: [] };
  return Pn(r, i, t, n), { out: i, contentNodes: r };
}
const PI = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${jn}(?=[\\s\\u200B\\\\|]|$)`
);
function Av(e, t) {
  const n = ls(e, { getMarker: t }), [r, ...i] = n;
  return typeof r == "object" && r.type === "para" && r.marker === jn && !PI.test(e.text) ? { content: n, lineContent: r.content ?? [], followingBlocks: i } : { content: n, lineContent: [], followingBlocks: n };
}
function Pv(e, t, n = []) {
  const { viewOptions: r, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = Pl(e, i, r);
  if (!oh(o, n, i, r))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: paragraph excluded by guard rails"), !1;
  const c = [e, ...n];
  let l, u = !1;
  const f = w();
  if (E(f)) {
    for (let V = f.anchor.getNode(); V; V = V.getParent())
      if (c.some((ne) => ne.is(V))) {
        u = !0;
        break;
      }
    f.isCollapsed() && (l = Al(o, f.anchor));
  }
  const d = va(
    [...a, ...n],
    o,
    void 0,
    Lt()
  ), p = Av(o, i);
  if (Jr(p.content) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const h = lv(
    e,
    p.lineContent,
    p.followingBlocks,
    r
  );
  if (h.failure !== void 0)
    return h.failure === "empty" ? s?.debug("[MarkerEdit] Book Tier 2 skipped: no content nodes after unwrap") : s?.warn("[MarkerEdit] Book Tier 2 aborted: unexpected serialized shape"), !1;
  const g = [...h.children, ...h.followingBlocks];
  if (fi(g) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (h.followingBlocks.length === n.length && Mr(h.followingBlocks, i) === _r(n, i) && Mr(h.children, i) === _r(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const m = h.children.map((V) => qr(V)), y = h.followingBlocks.map((V) => qr(V)), k = [...m, ...y];
  if (_l(k) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const x = ea([...a, ...n]).map((V) => ({
    number: V.getNumber(),
    sid: V.getSid()
  })), S = a[0];
  S ? m.forEach((V) => S.insertBefore(V)) : m.forEach((V) => e.append(V)), y.reduce((V, ne) => V.insertAfter(ne), e), Sl(k, o.sentinels);
  const _ = new Set(o.sentinels.flat().map((V) => V.getKey()));
  a.forEach((V) => {
    _.has(V.getKey()) || (ae(V) && (V.getWritable().__suppressOnRemoveCallbacks = !0), V.remove());
  }), n.forEach((V) => V.remove()), Ca(
    d,
    () => mv(e, y, i, r)
  );
  const U = [...Ev(e), ...y], B = ea(U);
  for (let V = 0; V < x.length && V < B.length; V++)
    B[V].getNumber() === x[V].number && B[V].setSid(x[V].sid);
  return Sv(
    U,
    l,
    u,
    i,
    r
  ), !0;
}
const Nv = /* @__PURE__ */ new Set(["ca", "cp"]), uh = "cp";
function wv(e) {
  if (!_t(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (Ys(e, t, Cr, void 0), t.sentinels.length > 0) return !1;
  const n = t.text;
  if (n.trim() === "") return !1;
  const r = Gc(Qp(n), {
    getMarker: Cr
  }), [i] = r, s = r.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(n) ? i.content ?? [] : r;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === uh)
  );
}
function fs(e) {
  const t = [];
  for (let n = e.getNextSibling(); n; n = n.getNextSibling()) {
    if (D(n) && Nv.has(n.getMarker()) || wv(n)) {
      t.push(n);
      continue;
    }
    ye(n) && n.getMarker() === uh && t.push(n);
    break;
  }
  return t;
}
function NI(e) {
  const t = (r) => D(r) && Nv.has(r.getMarker()) || wv(r);
  if (t(e) || ye(e) && e.getMarker() === uh)
    for (let r = e.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (Ne(r)) return r;
      if (!t(r)) return;
    }
}
function ta(e, t, n) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const r = fs(e);
  if (r.some((s) => ye(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Pn(e.getChildren(), i, t, n), Pn(r, i, t, n), !(i.sentinels.length > 0))
    return i;
}
function wI(e, t) {
  const { viewOptions: n, getMarker: r, logger: i } = t, s = [e, ...fs(e)], o = ta(e, r, n);
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
    l.isCollapsed() && (a = Al(o, l.anchor));
  }
  const u = va(s, o, void 0, Lt()), f = Gc(Qp(o.text), {
    getMarker: r
  }), [d] = f;
  if (f.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Jr(f) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const p = lr.serializeEditorState(
    { type: sr, version: ir, content: f },
    n
  );
  if (Mr(p.root.children, r) === _r(s, r)) {
    let m = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), m = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), m = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const h = p.root.children.map((m) => qr(m));
  if (!Ne(h[0]))
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1;
  const g = h[0];
  return h.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), Ca(
    u,
    () => ta(g, r, n)
  ), Cv(h, a, c, r, n), !0;
}
function na(e) {
  let t, n;
  for (let r = e; r; r = r.getParent()) {
    if (rt(r)) return;
    !t && (L(r) && !th(r) || ye(r) || Ne(r) || Ie(r)) && (t = r), yn(r.getParent()) && (n = r);
  }
  return t && !t.is(n) ? t : (n ? NI(n) : void 0) ?? t;
}
function Fn(e, t) {
  const n = na(e);
  return n ? L(n) ? EI(n, t) : Ne(n) ? wI(n, t) : Ie(n) ? Pv(n, t) : _v([n], t) : !1;
}
const OI = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Um(e, t) {
  const n = Object.entries(e).filter(
    (r) => typeof r[1] == "string" && !OI.has(r[0])
  );
  if (n.length !== 0) {
    t.push("|");
    for (const [r, i] of n) t.push(`${r}="${i}"`);
  }
}
function Qa(e, t) {
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
          t.push(`\\${r}`), Um(n, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${r}`);
          break;
        case "char":
          t.push(`\\${r} `), Qa(n.content, t), Um(n, t), i !== "false" && t.push(`\\${r}*`);
          break;
        case "note": {
          const s = n.caller, o = n.category;
          t.push(`\\${r} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Qa(n.content, t), i !== "false" && t.push(`\\${r}*`);
          break;
        }
        default:
          t.push(`\\${r} `), Qa(n.content, t);
      }
    }
}
function Bm(e, t, n) {
  const r = na(e);
  if (!yt(r)) return !1;
  const i = w();
  if (!E(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (r.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Ie(r) ? Pl(r, t, n).out : ih(r, t, n);
  if (!o) return !1;
  const a = ls(o, {
    getMarker: t,
    opensNamelessParagraph: rh([r])
  });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    In.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  Qa(a, l);
  for (const u of l.join("").replaceAll(q, "~")) {
    if (In.test(u)) continue;
    const f = c.get(u);
    f !== void 0 && f > 0 && c.set(u, f - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function fh(e, t) {
  return $v(e, t, T.Paragraph);
}
function Ov(e, t) {
  return $v(e, t, T.Character);
}
function $v(e, t, n) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const i = t(r)?.type;
  return i !== void 0 && i !== T.Unknown ? i === n : !(Ze.isValidMarker(r) || gd(r));
}
function $I(e) {
  return [qt(e), zi()];
}
function dh(e) {
  cr(e, 2);
}
function RI(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed()) return !1;
  const { anchor: n } = t;
  if (n.type === "element") return n.key === e.getKey() && n.offset === 0;
  const r = e.getFirstChild();
  return r !== null && n.key === r.getKey() && n.offset === 0;
}
function Nl(e) {
  const t = RI(e);
  e.splice(0, 0, $I(e.getMarker())), t && dh(e);
}
function Rc(e, t) {
  e.setMarker(t), Nl(e), dh(e);
}
function II(e, t) {
  const n = e.getFirstChild();
  if (!n) return;
  const r = n.getNextSibling();
  if (!vn(r)) {
    if (v(r) && !N(r) && /^[ \u00A0]$/.test(r.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      r.setTextContent(q), Xt(r, ke, Ar), r.setMode("token");
      return;
    }
    if (ck(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    n.insertAfter(zi());
  }
}
function Fm(e, t, n) {
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
    if (ye(t)) return t;
}
function LI(e) {
  const t = e.isBackward(), n = t ? e.focus : e.anchor, r = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Io(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Io(n.getNode())?.is(s) ?? !1, a = Io(r.getNode())?.is(s) ?? !1;
    return !(o && !Fm(n, s, "start") || a && !Fm(r, s, "end"));
  });
}
function Uf(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const n = w();
  if (!(!E(n) || n.isCollapsed()))
    for (const r of LI(n)) t.add(r.getKey());
}
function qI(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const n = w();
  if (!E(n) || !n.isCollapsed()) return;
  const r = Io(n.focus.getNode());
  r && t.add(r.getKey());
}
function DI(e) {
  const t = w();
  !E(t) || t.isCollapsed() || t.getNodes().some((n) => N(n)) && (Uf(e), t.removeText());
}
const KI = new RegExp(
  String.raw`^\\\+?([${Jn}]+)(?:[ \u00A0]|$)`
);
function UI(e, t) {
  const n = KI.exec(e.getTextContent());
  return !!n && fh(n[1], t);
}
function BI(e, t) {
  if (!as(t.viewOptions)) return;
  if (xn(e.getFirstChild())) {
    II(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (UI(e, t.getMarker)) return;
    Nl(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const r = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!r && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ye(o) && !o.is(e))) {
      Rc(e, jn), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const n = e.getPreviousSibling();
  if (yt(n)) {
    const r = e.getChildren().filter((a) => !vn(a)), i = w();
    let s = !1;
    if (E(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Io(a)?.is(e) && (s = !r.some(
        (c) => a.is(c) || A(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = n.getChildrenSize();
    n.append(...r), e.remove(), s && cr(n, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  Rc(e, jn);
}
function FI(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const n = er(t, Zs(e.getMarker()));
  return n === "" ? void 0 : n;
}
function Rv(e) {
  const t = e.getChildren().filter((s) => !N(s) && pe(s, ke) !== "attribute"), n = t[0];
  n && v(n) && n.getTextContent().startsWith(q) && n.setTextContent(n.getTextContent().slice(1));
  const r = FI(e);
  r && t.push(Ue(r));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function zI(e) {
  const t = e.getNode();
  let n;
  if (e.type === "element" && A(t) ? n = t.getChildAtIndex(e.offset) : N(t) && e.offset === 0 ? n = t : v(t) && e.offset === t.getTextContentSize() && (n = t.getNextSibling()), D(n) && (n = n.getFirstChild()), !N(n) || n.getMarkerSyntax() !== "opening") return;
  const r = n.getParent();
  if (!(!D(r) || !n.is(r.getFirstChild())))
    return n.getTextContentSize() === 1 ? n : void 0;
}
function jI() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = zI(e.anchor), n = t?.getParent();
  if (!t || !D(n)) return !1;
  const r = t.getNextSibling();
  return t.remove(), Wr(r) && r.getTextContent().startsWith(q) && r.setTextContent(` ${r.getTextContent().slice(q.length)}`), Rv(n), v(r) && r.isAttached() && r.select(0, 0), !0;
}
function VI(e, t) {
  const n = e.getChildren(), r = n.some((s) => N(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (r) return;
    const s = n[0], o = n[n.length - 1];
    if (v(s) && s.isUnmergeable() && s.getMode() === "token" || N(o) && o.getMarkerSyntax() === "closing" && o.getMode() === "token") {
      const u = qt(e.getMarker());
      u.setMode("token");
      const f = e.getFirstChild();
      f ? f.insertBefore(u) : e.append(u);
      return;
    }
    const a = e.getCaller(), c = n.some(
      (u) => v(u) && !N(u) && u.getTextContent() === Et(a)
    ), l = es(e).some(({ node: u }) => N(u));
    if (!c && !l) return;
    n.forEach((u) => {
      N(u) || (v(u) && u.getTextContent() === Et(a) && u.setTextContent(a ? ` ${a} ` : " "), e.insertBefore(u));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = n.some((s) => N(s) && s.getMarkerSyntax() === "closing");
  r !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function WI(e, t) {
  if (e.isEmpty()) return;
  const n = e.getFirstChild();
  if (!(N(n) && n.getMarkerSyntax() === "opening")) {
    Rv(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => N(o) && o.getMarkerSyntax() === "closing");
  i && !s && Fn(e, t);
}
function Iv(e, t, n) {
  if (!N(e.getFirstChild()) && n?.markerMode === "editable" && as(n)) {
    Rc(e, t);
    return;
  }
  Ax(e, t);
}
function Lv() {
  const e = w();
  if (!E(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = qv(e);
    return t !== "removed" ? t : (Bf(), "handled");
  }
  return Bf() ? "handled" : "declined";
}
function HI(e, t) {
  if (!t) return e;
  const n = X$.exec(e);
  if (!n) return e;
  const r = n[1];
  return r === "c" || r === "v" || t(r)?.type !== T.Paragraph ? e : e.slice(n[0].length);
}
function zm(e, t) {
  const n = w();
  if (!E(n)) return "declined";
  if (n.isCollapsed()) {
    if (!Dv())
      return "declined";
  } else {
    const s = qv(n);
    if (s !== "removed") return s;
  }
  const [r, ...i] = e.map(
    (s) => HI(s, t)
  );
  jm(r ?? "");
  for (const s of i)
    Bf(), jm(s);
  return "handled";
}
function GI(e) {
  const t = e.getRootElement(), n = t?.ownerDocument.getSelection(), r = n?.anchorNode;
  if (!t || !n || !r || !t.contains(r)) return !1;
  const i = Zi(r);
  if (!i) return !1;
  const s = wn(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !v(i) || N(i)) return !1;
  const o = Math.min(n.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function qv(e) {
  const t = wn(e.anchor.getNode()), n = wn(e.focus.getNode()), r = t?.getIsCollapsed() === !1, i = n?.getIsCollapsed() === !1;
  return !r && !i ? "declined" : (e.removeText(), JI() ? "removed" : "needs-plain-split");
}
function jm(e) {
  if (e === "") return;
  const t = w();
  E(t) && t.insertText(e);
}
function JI() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = wn(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((n) => N(n) && n.getMarkerSyntax() === "opening");
}
function Dv() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), n = wn(t);
  if (!(!n || n.getIsCollapsed() !== !1 || n.is(t)))
    return n;
}
function Bf() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), n = Dv();
  if (!n) return !1;
  let r = t;
  for (; !n.is(r.getParent()); ) {
    const l = r.getParent();
    if (!l) return !1;
    r = l;
  }
  const i = Ur("fp", { closed: "false" });
  i.append(qt("fp"));
  const s = v(t) && !N(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(r);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    zs(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    r.insertAfter(i);
    const [u] = l;
    u && (OM(u), i.append(u));
  }
  return i.getChildren().every(N) && i.append(Ue($t)), Kv(i), !0;
}
function Kv(e) {
  const t = e.getChildren().find((n) => !N(n));
  if (v(t)) {
    const n = Cd(t);
    t.select(n, n);
    return;
  }
  if (A(t)) {
    Kv(t);
    return;
  }
  e.selectEnd();
}
function YI(e) {
  const t = [];
  let n = e;
  for (; n; )
    D(n) && t.push(n.getMarker()), n = n.getParent();
  return t;
}
function XI(e) {
  const t = e.getTopLevelElement(), n = [];
  for (const r of _e().getChildren()) {
    if (t && r.is(t)) {
      Ie(r) && n.push(r.getMarker());
      break;
    }
    (Ie(r) || ct(r) || ye(r)) && n.push(r.getMarker());
  }
  return n;
}
function QI(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getFirstChild();
    if (!n) break;
    t = n;
  }
  return t;
}
function ZI(e, t, n) {
  const r = e.getFirstChild();
  if (!r) return !1;
  let i = r;
  if (xn(r)) {
    if (t.is(r)) return !0;
    if (i = r.getNextSibling(), i && vn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(QI(i)) && n === 0 : !1;
}
function e2(e, t, n) {
  const r = e.getFirstChild();
  if (!r || !xn(r)) return !1;
  if (t.is(r)) return !0;
  const i = r.getNextSibling();
  return i !== null && vn(i) && t.is(i) && n === 0;
}
function t2() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: n, y: r, width: i, height: s } = t.getBoundingClientRect();
  return { x: n, y: r, width: i, height: s };
}
function n2() {
  const e = w();
  if (!E(e)) return;
  const t = e.focus.getNode(), n = e.focus.offset, r = !e.isCollapsed(), i = nt(t, ye), s = i ? void 0 : nt(t, Ie), o = !r && !s && (!i || e2(i, t, n)) ? "paragraph" : "character", a = wn(t);
  return {
    source: o,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: i?.getMarker() ?? s?.getMarker(),
    previousParaMarkers: XI(t),
    openCharMarkers: YI(t),
    noteMarker: a?.getMarker(),
    hasTextSelection: r,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Xd(t, n),
    anchorRect: t2()
  };
}
function r2() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!v(t) || N(t)) return;
  const n = e.anchor.offset, r = t.getTextContent().slice(0, n), i = Q$.exec(r);
  i && t.spliceText(n - i[0].length, i[0].length, "", !0);
}
function i2(e, t, n) {
  Iv(e, t, n), dh(e);
}
function s2(e, t, n) {
  const r = w();
  if (!E(r)) return;
  const i = r.focus.getNode(), s = nt(i, ye);
  if (t === "backslash" && s && ZI(s, i, r.focus.offset)) {
    i2(s, e, n);
    return;
  }
  Ff(e, n);
}
function Uv(e, t) {
  const n = e.getNode(), r = kT(A(n) ? n : n.getParent());
  return t.is(r);
}
function o2(e, t) {
  const n = e.getNode();
  return !t.is(n) && !t.isParentOf(n) ? !1 : !Uv(e, t);
}
function Ic(e, t, n) {
  const r = n.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= r && e.set(t.getKey(), r + 1, "element");
}
function a2(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!N(t) || t.getMarkerSyntax() !== "opening") return e;
  const n = t.getParent();
  if (!D(n)) return e;
  const r = n.getParent();
  return r ? tn(r.getKey(), n.getIndexWithinParent(), "element") : e;
}
function c2(e, t, n) {
  const r = w();
  if (!E(r)) return !1;
  const i = r.isBackward() ? r.focus : r.anchor;
  if (!Uv(i, e)) return !1;
  const s = r.isBackward() ? r.anchor : r.focus;
  if (!r.isCollapsed() && o2(s, e)) return !1;
  const o = Ld(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (Ic(r.anchor, e, o), Ic(r.focus, e, o)), r.isCollapsed() || r.removeText();
  const a = w();
  if (!E(a) || !a.isCollapsed()) return !1;
  const c = vT(a);
  if (!c) return !1;
  const { parent: l, moving: u } = TT(
    a2(c.anchor)
  );
  if (!e.is(l)) return !1;
  const f = u.filter((h) => !h.is(o)), d = Us(t);
  e.insertAfter(d), d.append(...f);
  const [p] = f;
  return D(p) ? il(p) : d.select(0, 0), as(n) && Nl(d), !0;
}
function l2(e, t) {
  const n = w();
  return !E(n) || !n.isCollapsed() ? !1 : (n.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Bv(e) {
  const t = w();
  return E(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function u2(e) {
  const t = nt(e.anchor.getNode(), Ie);
  if (!t) return;
  const n = t.getFirstChild();
  !n || !Ld(n) || (Ic(e.anchor, t, n), Ic(e.focus, t, n));
}
function f2(e, t, n, r) {
  const i = w();
  if (E(i) ? u2(i) : r.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && r2(), e.kind === "closeTag") {
    Bv(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Lv() !== "declined") return;
  if (e.kind === "paragraph" && Kt.isValidMarker(e.marker, r.nodeOptions?.extraValidMarkers)) {
    s2(e.marker, t.trigger, r.viewOptions);
    return;
  }
  if (Ze.isValidMarker(e.marker, r.nodeOptions?.extraValidMarkers))
    return _T(
      e.marker,
      n,
      r.expandedNoteKeyRef,
      r.viewOptions,
      r.nodeOptions,
      r.logger
    );
  Cf(
    e.marker,
    r.expandedNoteKeyRef,
    r.viewOptions,
    r.nodeOptions,
    r.logger,
    void 0,
    r.styleInfo
  ).action({ editor: Lt(), reference: n });
}
function Ff(e, t) {
  const n = w();
  if (!E(n)) return !1;
  Qd(n);
  const r = (n.isBackward() ? n.focus : n.anchor).getNode();
  if (!nt(r, ye)) {
    const o = nt(r, Ie);
    if (o) return c2(o, e, t);
  }
  const i = as(t);
  if (CT()) {
    const o = w();
    if (!E(o)) return !1;
    const a = nt(o.anchor.getNode(), ye);
    return a ? (a.setMarker(e), i && Nl(a), !0) : !1;
  }
  const s = n.insertParagraph();
  return ye(s) ? (i ? Rc(s, e) : s.setMarker(e), !0) : !1;
}
function d2() {
  const [e] = Se();
  return G(() => e.registerCommand(Iy, () => !0, zt), [e]), null;
}
function p2(e, t) {
  if (!e.startsWith("\\")) return !0;
  const n = G$.exec(e)?.[1];
  return n === void 0 ? !1 : !fh(n, t);
}
function Fv(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !p2(e.getTextContent(), t)) return;
  const n = e.getParent();
  if (!ye(n)) return;
  const r = t(n.getMarker())?.type;
  if (r !== void 0 && r !== T.Unknown || n.getFirstChild()?.is(e) !== !0) return;
  const i = n.getPreviousSibling();
  if (!(!ye(i) && !Ie(i)))
    return [i, n];
}
function zv(e, t) {
  const n = Fv(e, t.getMarker);
  if (!n) return !1;
  const [r, i] = n;
  return Ie(r) ? Pv(r, t, [i]) : _v([r, i], t);
}
function h2(e, t) {
  const n = w();
  E(n) && [n.anchor, n.focus].forEach((r) => {
    r.key === e.getKey() && r.offset > t && r.set(e.getKey(), t, "text");
  });
}
function jv(e) {
  const t = J$.exec(e);
  if (!t) return;
  const n = 1 + t[1].length;
  return { start: n, end: n + t[2].length };
}
function g2(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const n = jv(e.getTextContent());
  if (!n) return;
  const { offset: r } = t.anchor;
  if (!(r < n.start || r > n.end))
    return r - n.start;
}
function m2(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const n = e.getNextSibling();
  if (L(e.getParent()) && v(n)) {
    const r = n.getNextSibling();
    if (D(r)) {
      il(r);
      return;
    }
  }
  v(n) ? n.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Vm(e, t) {
  if (t !== void 0) {
    const n = e.getLatest(), r = jv(n.getTextContent());
    if (r) {
      const i = Math.min(r.start + t, r.end);
      n.select(i, i);
      return;
    }
  }
  m2(e);
}
function zf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Vv(e, t, n) {
  if (t.startsWith("+") !== e.getNested())
    return Fn(e, n);
  const r = g2(e), i = e.getParent();
  if (ye(i)) {
    if (!fh(t, n.getMarker))
      return zv(e, n) ? (n.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Fn(e, n);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), zf(s, t) && Vm(e, r), n.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (D(i) || L(i)) {
    const s = t.replace(/^\+/, "");
    if (!(D(i) ? Ov(t, n.getMarker) : Ze.isValidMarker(s)) || D(i) && Ad(i))
      return Fn(e, n);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Fn(e, n);
    i.setMarker(s);
    const c = i.getChildren().filter(N).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (h2(c, at(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), zf(a, s) && Vm(e, r), n.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Fn(e, n);
}
function Wv(e, t) {
  if (!N(e) || e.getMarkerSyntax() !== "opening") return;
  const n = e.getParent();
  if (!D(n) || !n.getFirstChild()?.is(e)) return;
  const r = so.exec(e.getTextContent());
  if (!r) return;
  const i = r[1];
  if (i.startsWith("+") !== e.getNested() || !Ov(i, t)) return;
  const s = e.getMarker();
  if (n.getMarker() !== s) return;
  const o = i.replace(/^\+/, "");
  if (zf(s, o) && !Ad(n))
    return { char: n, glyph: e, closer: y2(n, s), newMarker: o };
}
function y2(e, t) {
  return e.getChildren().filter(N).filter((n) => n.getMarkerSyntax() === "closing" && n.getMarker() === t).at(-1);
}
function b2(e) {
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
function k2(e) {
  const t = e.getTextContent(), n = e.getMarkerSyntax() === "closing", r = (n ? /[ \u00A0]+$/ : /^[ \u00A0]+/).exec(t)?.[0];
  if (!r || r.length === t.length) return !1;
  const i = e.getParent();
  let s = e;
  if (n) {
    if (!L(i) || !i.getLastChild()?.is(e)) return !1;
    s = i;
  } else if (je(i)) {
    const f = Sr(e)?.owner;
    if (!ze(f) || !i.getFirstChild()?.is(e)) return !1;
    s = f;
  } else if (i?.getFirstChild()?.is(e)) {
    if (ye(i)) return !1;
    s = i;
  }
  const o = n ? s.getNextSibling() : s.getPreviousSibling();
  if (!v(o)) return !1;
  const a = n ? t.slice(0, t.length - r.length) : t.slice(r.length);
  if (e.setTextContent(a), !pr(e))
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
function x2(e, t) {
  const n = e.getTextContent();
  if (pr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (je(e.getParent()) && bd(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !b2(e)) {
    V_(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (k2(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    if (M0(e) || N2(e)) {
      t.pendingKeys.delete(e.getKey());
      return;
    }
    const r = DT.exec(n);
    if (r) {
      t.pendingKeys.delete(e.getKey()), Vv(e, r[1], t);
      return;
    }
    if (H$.test(n)) {
      t.pendingKeys.delete(e.getKey()), Fn(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const r = e.getParent(), i = at(e.getMarker(), e.getNested());
    if ((D(r) || L(r)) && !sd(r.getParent()) && e.getMarker() === r.getMarker() && r.getLastChild()?.is(e) && n.startsWith(i) && n.length > i.length) {
      const s = w(), o = E(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = Ue(n.slice(i.length));
      e.setTextContent(i), r.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  if (T2(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function T2(e) {
  if (e.getMarkerSyntax() !== "selfClosing" || !ze(Sr(e)?.owner)) return !1;
  const t = at(""), n = e.getTextContent();
  if (!n.startsWith(t) || n.length === t.length) return !1;
  const r = e.getParent(), i = je(r) ? r : e;
  if (je(r) && !r.getLastChild()?.is(e)) return !1;
  const s = i.getParent();
  if (!s || sd(s)) return !1;
  const o = w(), a = E(o) && o.isCollapsed() && o.anchor.key === e.getKey() && o.anchor.offset > t.length ? o.anchor.offset - t.length : void 0, c = Ue(n.slice(t.length));
  return e.setTextContent(t), i.insertAfter(c), a !== void 0 && c.select(a, a), !0;
}
function v2(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (pk(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Hv(e) {
  if (!cd(e)?.length)
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
const vo = Hv("v"), C2 = Hv("c"), Wm = /^[ \u00A0]*$/;
function Hm(e, t, n) {
  const r = e.getNextSibling();
  if (v(r) && r.getType() === ot.getType() && r.getMode() === "normal" && pe(r, ke) !== "attribute")
    return r.setTextContent(t + r.getTextContent()), n !== void 0 && r.select(n, n), r;
  const i = Ue(t);
  return e.insertAfter(i), n !== void 0 && i.select(n, n), i;
}
function S2(e, t) {
  const n = e.getTextContent(), r = Vn("v", e.getNumber());
  if (n === r) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(n);
  if (i) {
    const c = n.slice(i[0].length);
    if (vo.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = vo.valueAndRest.exec(c);
    if (l && Wm.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (vo.midEdit.test(n)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = vo.valueAndRest.exec(n);
  if (!s) {
    const c = vo.markerRest.exec(n);
    if (c) {
      const [, l, u, f] = c, d = w(), p = E(d) && d.isCollapsed() && d.anchor.key === e.getKey() ? d.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Vn("v", u));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, f.length) : void 0;
      Hm(e, f, h);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Fn(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(n)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), Wm.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Vn("v", o)), a && Hm(e, a, a.length);
}
const _2 = /^[ \u00A0]+([^ \u00A0\\]*)[ \u00A0]([\s\S]*)$/;
function M2(e, t) {
  if (!BT(e)) return !1;
  const n = e.getParent();
  if (!L(n)) return !1;
  const r = n.getCaller(), i = e.getTextContent();
  if (i === Et(r))
    return t.pendingKeys.delete(e.getKey()), !0;
  if (!e.isUnmergeable()) return !1;
  t.pendingKeys.delete(e.getKey());
  const s = _2.exec(i);
  return s ? (A2(e, n, s[1], s[2]), !0) : P2(e, r) ? !0 : Jc(i, r).missing && /^[ \u00A0]/.test(i) && !i.includes("\\") && Gv(e) ? (t.pendingKeys.add(e.getKey()), !0) : (Jv(e, n), !0);
}
function E2(e) {
  if (!Ol(e)) return !1;
  const t = e.getTextContent(), n = /^[ \u00A0]+/.exec(t)?.[0];
  if (!n) return !1;
  const r = e.getPreviousSibling(), i = v(r) && r.getMode() === "token" && !!wl(r);
  if (!v(r) || !($e(r) || i)) return !1;
  const s = w();
  if (!E(s) || !s.isCollapsed() || s.anchor.key !== e.getKey() || s.anchor.offset > n.length)
    return !1;
  const o = s.anchor.offset, a = t.slice(n.length), c = r.getTextContentSize();
  return r.getMode() === "token" ? r.select(c, c) : (r.setTextContent(r.getTextContent() + n), r.select(c + o, c + o)), a ? e.setTextContent(a) : e.remove(), !0;
}
function A2(e, t, n, r) {
  const i = e.getTextContent(), s = i.length - r.length, o = /^[ \u00A0]*/.exec(i)?.[0].length ?? 0, a = w(), c = E(a) && a.isCollapsed() && a.anchor.key === e.getKey() ? a.anchor.offset : void 0;
  t.getCaller() !== n && t.setCaller(n), e.setTextContent(Et(n));
  const l = r ? Xv(t, e, r.replaceAll(q, " ")) : void 0;
  if (c === void 0) return;
  if (c >= s) {
    const f = c - s;
    l ? l.select(f, f) : e.select(e.getTextContentSize(), e.getTextContentSize());
    return;
  }
  const u = 1 + Math.min(Math.max(c - o, 0), n.length);
  e.select(u, u);
}
function P2(e, t) {
  const n = w();
  if (!E(n) || !n.isCollapsed()) return !1;
  const { anchor: r } = n;
  if (r.key !== e.getKey() || r.type !== "text") return !1;
  const i = e.getTextContent(), s = i.slice(0, r.offset);
  if (i.slice(r.offset) !== Et(t) || !KT.test(s) || s.includes("\\")) return !1;
  const o = e.getPreviousSibling();
  if (!N(o) || o.getMarkerSyntax() !== "opening" || !so.test(o.getTextContent())) return !1;
  const a = o.getTextContent() + s;
  return e.setTextContent(Et(t)), o.setTextContent(a), o.select(a.length, a.length), !0;
}
function N2(e) {
  const t = e.getParent();
  if (!L(t) || t.getIsCollapsed() !== !1) return !1;
  const n = w();
  if (!E(n) || !n.isCollapsed()) return !1;
  const r = e.getTextContent(), { anchor: i } = n;
  if (i.key !== e.getKey() || i.offset !== r.length) return !1;
  const s = Je(e.getMarker()), o = r.slice(s.length);
  if (!r.startsWith(s) || !/^[|\\\s]+$/.test(o)) return !1;
  const a = e.getNextSibling();
  return !v(a) || N(a) || !a.isUnmergeable() ? !1 : (e.setTextContent(s), a.setTextContent(o + a.getTextContent()), a.select(o.length, o.length), !0);
}
function Gv(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed()) return !1;
  const { anchor: n } = t;
  if (n.key === e.getKey()) return !0;
  const r = e.getNextSibling();
  return n.offset === 0 && r !== null && n.key === r.getKey();
}
function Jv(e, t) {
  const n = t.getCaller(), r = e.getTextContent(), { start: i } = Jc(r, n), s = md(r, n), o = w(), a = E(o) && o.isCollapsed() && o.anchor.key === e.getKey() ? o.anchor.offset : void 0;
  e.setTextContent(Et(n));
  const c = s ? Xv(t, e, s) : void 0;
  if (a !== void 0)
    if (c && a >= i) {
      const l = Math.min(a - i, s.length);
      c.select(l, l);
    } else Qv(t, e);
}
function wl(e) {
  if (!v(e) || N(e) || !e.isUnmergeable()) return;
  const t = e.getParent();
  if (!L(t) || t.getIsCollapsed() !== !1) return;
  let n = t.getFirstChild();
  for (; N(n) && n.getMarkerSyntax() === "opening"; ) n = n.getNextSibling();
  return e.is(n) ? t : void 0;
}
function w2(e, t, n) {
  const r = wl(e);
  if (!(!r || !v(e)))
    return e.getTextContent() === Et(r.getCaller()) ? !1 : n === "idle" && Gv(e) ? (t.pendingKeys.add(e.getKey()), !1) : (Jv(e, r), !0);
}
function Yv(e, t) {
  const { wrapper: n, closer: r } = ha(e);
  return (n ?? r ?? t).getNextSibling();
}
function Ol(e) {
  return v(e) && e.getType() === ot.getType() && e.getMode() === "normal" && !e.isUnmergeable() && pe(e, ke) !== "attribute";
}
function Xv(e, t, n) {
  const r = Yv(e, t);
  if (Ol(r))
    return r.setTextContent(n + r.getTextContent()), r;
  const i = Ue(n);
  return r ? r.insertBefore(i) : e.append(i), i;
}
function Qv(e, t) {
  const n = Yv(e, t);
  Ol(n) ? n.select(0, 0) : n ? e.select(n.getIndexWithinParent(), n.getIndexWithinParent()) : e.select(e.getChildrenSize(), e.getChildrenSize());
}
function O2(e, t) {
  if (!e.isAttached() || e.getIsCollapsed() !== !1) return;
  const n = e.getCaller();
  if (!cd(e.getMarker())?.includes("caller")) return;
  const r = e.getChildren();
  let i = 0;
  for (; i < r.length; ) {
    const c = r[i];
    if (!N(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (i === 0) return;
  const s = r[i];
  if (v(s) && !N(s) && (s.isUnmergeable() || s.getTextContent() === Et(n)))
    return;
  const o = Ue(Et(n)).toggleUnmergeable();
  t.viewOptions?.isNoteShellEditable === !1 && o.setMode("token"), r[i - 1].insertAfter(o);
  const a = w();
  E(a) && a.isCollapsed() && (a.anchor.key === r[i - 1].getKey() || a.anchor.key === e.getKey() && a.anchor.offset === i) && Qv(e, o);
}
function $2(e) {
  if (!e.isAttached() || e.getIsCollapsed() !== !1) return;
  const t = e.getChildren(), n = t.find(
    (o) => N(o) && o.getMarkerSyntax() === "opening"
  );
  if (!N(n) || n.getMode() !== "token" || e.getUnknownAttributes()?.closed === "false") return;
  let r = t.find(
    (o) => N(o) && o.getMarkerSyntax() === "closing"
  );
  r || (r = qt(e.getMarker(), "closing"), r.setMode("token"), e.append(r));
  for (let o = r.getNextSibling(); o; o = r.getNextSibling())
    r.insertBefore(o);
  const i = r.getPreviousSibling(), s = i?.getPreviousSibling();
  Ol(i) && D(s) && !s.getChildren().some((o) => N(o) && o.getMarkerSyntax() === "closing") && s.append(i);
}
function R2(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!v(t)) return;
  const n = Vn("c", e.getNumber()), r = t.getTextContent();
  if (r === n) return;
  const i = /^[ \u00A0]+/.exec(r), s = i ? r.slice(i[0].length) : r, o = C2.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Zv(e) {
  if (ze(e)) {
    const { wrapper: t } = Yc(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (L(e)) {
    const { wrapper: t } = ha(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Ne(e)) {
    const t = [], n = yb(e);
    n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper);
    const r = kb(e);
    return r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper), t;
  }
  if ($e(e)) {
    const t = [], n = Vo(e, "va");
    n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper);
    const r = n.wrapper ?? n.closer ?? e, i = Vo(r, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function I2(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed()) return !1;
  const n = t.anchor.getNode();
  return Zv(e).some((r) => n.is(r));
}
function L2(e, t, n = "departure") {
  let r = !1;
  const i = n === "departure";
  if (i && ye(e) && ck(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Wo)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && ya(l, e) && (i || I2(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Zv(e))
    l.remove(), r = !0;
  let s = !1;
  D(e) && Ob(e) !== void 0 && !Ad(e) && ($b(e), s = !0, r = !0);
  let o = !1, a = !1, c = !1;
  for (const l of Wo)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (yE(l, e)) {
        Jo(l, e), a = !0, r = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Pk(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      sl(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: r } : { handled: o, mutated: r };
}
function Gm(e) {
  return v(e) && e.getType() === ot.getType() && e.getMode() === "normal" && pe(e, ke) !== "attribute";
}
function q2(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const n = Q(e);
  if (!n?.isAttached()) return t;
  for (let r = n.getPreviousSibling(); r && Gm(r); r = r.getPreviousSibling())
    t.add(r.getKey());
  for (let r = n.getNextSibling(); r && Gm(r); r = r.getNextSibling())
    t.add(r.getKey());
  return t;
}
function Da(e, t, n = "departure") {
  let r = !1;
  if (e.pendingKeys.size === 0) return r;
  const i = q2(t), s = [...e.pendingKeys].filter((l) => !i.has(l)), o = new Set(
    s.filter((l) => {
      const u = Q(l);
      return !!u?.isAttached() && !!Wv(u, e.getMarker);
    })
  ), a = [
    ...s.filter((l) => o.has(l)),
    ...s.filter((l) => !o.has(l))
  ], c = /* @__PURE__ */ new Set();
  for (const l of a) {
    const u = Q(l);
    if (!u?.isAttached()) {
      e.pendingKeys.delete(l);
      continue;
    }
    if (wl(u)) {
      e.pendingKeys.delete(l), r = w2(u, e, n) || r;
      continue;
    }
    if (N(u)) {
      e.pendingKeys.delete(l);
      const g = u.getTextContent();
      if (pr(u)) continue;
      const m = so.exec(g);
      u.getMarkerSyntax() === "opening" && m ? r = Vv(u, m[1], e) || r : n === "idle" && Bm(u, e.getMarker, e.viewOptions) ? e.pendingKeys.add(l) : zv(u, e) ? (r = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : r = Fn(u, e) || r;
      continue;
    }
    const f = Sr(u)?.owner, d = f?.isAttached() ? f : u, p = d.getKey();
    if (c.has(p)) {
      l !== p && e.pendingKeys.delete(l);
      continue;
    }
    if (i.has(p)) {
      e.pendingKeys.delete(l), e.pendingKeys.add(p);
      continue;
    }
    e.pendingKeys.delete(l), l !== p && e.pendingKeys.delete(p), c.add(p);
    const h = L2(d, e, n);
    if (r = h.mutated || r, !h.handled) {
      if (n === "idle" && Bm(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(p);
        continue;
      }
      r = Fn(d, e) || r;
    }
  }
  return r;
}
function eC(e) {
  if (on(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (D(t)) return Ao(t) !== void 0;
  return !1;
}
function D2(e) {
  const t = Sr(e);
  if (!t) return !1;
  const n = Fr(t.kind);
  return !sl(
    n,
    n.scanPieces(t.owner),
    n.expectedPieces(t.owner)
  );
}
function Jm(e) {
  let t = e.getParent();
  for (; ae(t); ) t = t.getParent();
  return D(t) ? t : void 0;
}
function K2(e, t) {
  const n = w();
  if (!E(n) || !n.isCollapsed()) return !1;
  const { anchor: r } = n;
  if (r.key !== e.getKey() || r.type !== "text") return !1;
  const i = t.getFirstChild();
  if (!N(i) || i.getMarkerSyntax() !== "opening") return !1;
  let s = i.getNextSibling();
  for (; ae(s); ) s = s.getFirstChild();
  if (!e.is(s) || !so.test(i.getTextContent())) return !1;
  const o = e.getTextContent(), a = o.slice(0, r.offset);
  if (!KT.test(a) || o[r.offset] !== q) return !1;
  const c = i.getTextContent() + a;
  return e.setTextContent(o.slice(a.length)), i.setTextContent(c), i.select(c.length, c.length), !0;
}
function U2(e, t) {
  const n = e.getTextContent(), r = pe(e, ke), i = e.getParent();
  if (r !== "attribute" && Ne(i)) {
    n.replace(/^[ \u00A0]+/, "") === Vn("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (M2(e, t) || E2(e)) return;
  if (r === "attribute") {
    D2(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Jm(e);
  if (s && K2(e, s)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!n.includes("\\")) {
    n.includes("|") && eC(e) || n.includes("//") && !Fu(e) || xb(e) || Ne(na(e)) ? t.pendingKeys.add(e.getKey()) : t.pendingKeys.delete(e.getKey());
    const c = Jm(e);
    c && Ed(c) ? t.pendingKeys.add(c.getKey()) : c && Ob(c) !== void 0 && c.markDirty();
    return;
  }
  if (Fu(e)) return;
  const o = w(), a = E(o) && o.isCollapsed() && o.anchor.key === e.getKey() ? n.slice(0, o.anchor.offset) : n;
  if (Y$.test(a)) {
    if (U_(n)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(n)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(n), Fn(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function B2(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Pk(e, t);
}
function F2(e) {
  const t = (n) => {
    if (N(n)) {
      pr(n) || e.pendingKeys.add(n.getKey());
      return;
    }
    if (on(n)) {
      pk(n) || e.pendingKeys.add(n.getKey());
      return;
    }
    for (const r of Wo)
      r.settleScope !== "none" && r.ownerPredicate(n) && (ya(r, n) || B2(r, n)) && e.pendingKeys.add(n.getKey());
    if ($e(n)) {
      n.getTextContent() !== Vn("v", n.getNumber()) && e.pendingKeys.add(n.getKey());
      return;
    }
    if (v(n)) {
      if (n.getType() !== ot.getType() || pe(n, ke) === "attribute") return;
      const r = n.getParent();
      if (Ne(r)) {
        n.getTextContent() !== Vn("c", r.getNumber()) && e.pendingKeys.add(n.getKey());
        return;
      }
      const i = wl(n);
      if (i) {
        n.getTextContent() !== Et(i.getCaller()) && e.pendingKeys.add(n.getKey());
        return;
      }
      const s = n.getTextContent();
      (s.includes("\\") || s.includes("|") && eC(n) || s.includes("//") || xb(n) !== void 0) && e.pendingKeys.add(n.getKey());
      return;
    }
    if (D(n)) {
      Ed(n) && e.pendingKeys.add(n.getKey()), n.getChildren().forEach(t);
      return;
    }
    if (!rt(n)) {
      if (je(n) && n.getChildrenSize() === 0) {
        const r = Sr(n)?.owner;
        r && e.pendingKeys.add(r.getKey());
        return;
      }
      A(n) && n.getChildren().forEach(t);
    }
  };
  _e().getChildren().forEach(t);
}
const tC = Fc(
  "COMMIT_PENDING_MARKERS_COMMAND"
), nC = Fc(
  "SET_MARKER_SETTLE_SUSPENDED_COMMAND"
);
function Mu(e) {
  const t = e();
  return Ft(nd), Ft(Wy), t;
}
const Ym = 8, Xm = 1e3, z2 = 1e3;
function Ts(e, t) {
  const n = $e(e) ? ["va", "vp"] : ze(e) ? ["milestone"] : L(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const r of n)
    vE(Fr(r), e, t.pendingKeys);
}
function j2(e, t) {
  const n = (r, i) => {
    if (i.updateTags.has(jc) || Jd(e) === "remote")
      return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of r) {
        if (a !== "destroyed") continue;
        const c = Q(o);
        if (!c) continue;
        const l = Sr(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = Q(o.getKey());
        c?.isAttached() && Fr(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return it(
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
    e.registerMutationListener(ot, n),
    e.registerMutationListener(Hn, n),
    e.registerMutationListener(Gn, n),
    e.registerMutationListener(Pr, n)
  );
}
function jf(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const n = w();
  return n ? t ? tT(n, t) : E(n) && Is(n) : !1;
}
function V2(e, t, n) {
  return it(
    e.registerCommand(
      nr,
      (r) => {
        if (hl() || jf(t)) return !1;
        const i = Af(r, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = n ? zp(jp(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = zm(o, t.getMarker);
          if (a === "declined" && GI(e) && (a = zm(o, t.getMarker)), a === "handled")
            return r?.preventDefault(), !0;
        }
        return !1;
      },
      Xe
    ),
    e.registerCommand(
      nr,
      (r) => {
        const i = Af(r, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !g$()) return !1;
        const o = w();
        return t.structureProtectionMode === "protected" && E(o) && Is(o) ? !1 : (r?.preventDefault(), E(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Ko, void 0), a === "") return;
          const l = w();
          E(l) && l.insertText(a);
        }), !0);
      },
      Qe
    ),
    e.registerCommand(
      nr,
      () => (t.splitExpected.current = !0, !1),
      zt
    )
  );
}
function W2({
  viewOptions: e,
  getMarker: t,
  logger: n,
  markerSettleDelayMs: r,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = Se(), a = e?.markerMode === "editable", c = !!e && Ut(e), l = re(void 0), u = re(r), f = re(!1), d = re(s);
  return G(() => {
    u.current = r, d.current = s;
    const p = l.current;
    p && (e && (p.viewOptions = e), p.getMarker = t ?? Cr, p.logger = n, p.structureProtectionMode = i);
  }, [e, t, n, r, i, s]), G(() => {
    if (!a || !e) return;
    const p = {
      viewOptions: e,
      getMarker: t ?? Cr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: n,
      structureProtectionMode: i
    };
    l.current = p;
    const h = S0(
      o,
      p.pendingKeys,
      ($) => {
        p.pendingKeys.clear(), $.read(() => F2(p));
      }
    );
    let g, m = !1, y = !1, k, x = !1, S = !1, _ = 0;
    const U = () => _ < Ym ? !1 : (p.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Ym} consecutive mutating passes; leaving ${p.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...p.pendingKeys].join(", ")}`
    ), !0), B = ($, Z = "departure", Te = !1) => {
      const Pe = Te && !Op(o), Oe = Pe ? Ns(o, Qn) : void 0;
      o.update(
        () => {
          Pe && Ft(Qn), _ = Mu(
            () => Da(p, $, Z)
          ) ? _ + 1 : 0;
        },
        // DISCRETE whenever the tag is in play, the way `commitPendingMarkerEdits` does it:
        // Lexical commits inside the call only for a discrete update (`_flushSync`) and otherwise
        // schedules the commit on a microtask, so the release below would disarm before the commit
        // it exists to catch. A settle that only moves the selection — which an update running
        // outside an event can produce on its own, by re-reading the DOM selection — would then
        // leave the tag pending to ride onto the next commit, where it stops a later `focus()`
        // from focusing the editor.
        Pe ? { discrete: !0 } : void 0
      ), Oe?.();
    };
    let V = !1, ne;
    const se = () => {
      ne !== void 0 && clearTimeout(ne), ne = void 0;
    }, W = ($) => {
      f.current !== $ && (f.current = $, V = !1, se(), $ ? (he !== void 0 && clearTimeout(he), he = void 0) : queueMicrotask(() => {
        S || f.current || (!m && !U() && B(g, "departure", !0), be());
      }));
    };
    let he;
    const be = () => {
      if (he !== void 0 && clearTimeout(he), he = void 0, S || p.pendingKeys.size === 0 || f.current) return;
      const $ = u.current ?? z2;
      $ < 0 || (he = setTimeout(() => {
        he = void 0, !(S || p.pendingKeys.size === 0) && (m || U() || B(void 0, "idle"));
      }, $));
    }, He = it(
      o.registerNodeTransform(Hn, ($) => {
        if (o.isComposing()) return;
        x2($, p);
        const Z = Sr($);
        Z && ($e(Z.owner) || L(Z.owner) || Ne(Z.owner) || ze(Z.owner) && Yc(Z.owner).wrapper === void 0) && Ts(Z.owner, p);
      }),
      o.registerNodeTransform(Vt, ($) => {
        o.isComposing() || (S2($, p), Ts($, p));
      }),
      o.registerNodeTransform(qn, ($) => {
        o.isComposing() || (R2($), $.isAttached() && Ts($, p));
      }),
      o.registerNodeTransform(Kt, ($) => {
        o.isComposing() || BI($, p);
      }),
      o.registerNodeTransform(We, ($) => {
        if (!o.isComposing()) {
          WI($, p);
          for (const Z of ["separator", "char"])
            $.isAttached() && ya(Fr(Z), $) && p.pendingKeys.add($.getKey());
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
      o.registerNodeTransform(ar, ($) => {
        o.isComposing() || Ts($, p);
      }),
      o.registerNodeTransform(Pr, ($) => {
        if (o.isComposing()) return;
        const Z = Sr($);
        Z && (ze(Z.owner) || $e(Z.owner) || L(Z.owner) || Ne(Z.owner)) && Ts(Z.owner, p);
      }),
      o.registerNodeTransform(Ze, ($) => {
        o.isComposing() || (VI($, p), O2($, p), $2($), Ts($, p));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(hr, ($) => {
        o.isComposing() || v2($, p);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(ot, ($) => {
        o.isComposing() || U2($, p);
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
        ot,
        ($) => {
          o.getEditorState().read(() => {
            for (const [Z, Te] of $) {
              if (Te === "destroyed") continue;
              const Pe = Q(Z);
              !Pe || pe(Pe, ke) !== "attribute" || je(Pe.getParent()) || o.getElementByKey(Z)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      j2(o, p),
      ...c ? [
        o.registerNodeTransform(ot, ($) => {
          o.isComposing() || lR($);
        }),
        o.registerCommand(
          Ds,
          ($) => Am(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            $ && typeof $ == "object" && "clipboardData" in $ ? $ : null,
            o,
            !1,
            d.current
          ),
          Qe
        ),
        o.registerCommand(
          or,
          ($) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            Am(
              $ && typeof $ == "object" && "clipboardData" in $ ? $ : null,
              o,
              !0,
              d.current
            )
          ),
          Qe
        ),
        o.registerCommand(
          nr,
          ($) => bR(
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
          Qe
        )
      ] : [],
      o.registerCommand(
        or,
        () => (!jf(p) && !hl() && Uf(p), !1),
        Xe
      ),
      o.registerCommand(
        la,
        () => (o.isComposing() || DI(p), !1),
        vr
      ),
      o.registerCommand(
        Wc,
        ($) => $ || o.isComposing() ? !1 : jI(),
        vr
      ),
      o.registerCommand(
        Vc,
        () => (m = !1, _ = 0, be(), !1),
        zt
      ),
      o.registerCommand(
        Er,
        ($) => (m = !1, _ = 0, be(), ($.key === "Backspace" || $.key === "Delete") && !jf(p, Xx($)) && (Uf(p), qI(p), queueMicrotask(() => {
          p.wholeParaDeleteExpected?.clear(), p.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !$.ctrlKey || $.altKey || $.shiftKey || $.metaKey || $.key !== " " && $.code !== "Space" || !h$() ? !1 : ($.preventDefault(), !0)),
        Qe
      ),
      o.registerCommand(
        Oy,
        ($) => {
          const Z = Lv();
          Z === "needs-plain-split" && o.dispatchCommand(Ko, void 0);
          const Te = Z !== "declined" || CE();
          return Te && $?.preventDefault(), Da(p), Te;
        },
        Qe
      ),
      o.registerCommand(
        Ko,
        () => (p.splitExpected.current = !0, CT()),
        Qe
      ),
      V2(o, p, c),
      o.registerCommand(
        nC,
        ($) => (W($), !0),
        // LOW, matching the sibling host-dispatched `COMMIT_PENDING_MARKERS_COMMAND` below. This
        // command has exactly one handler, so priority decides nothing; CRITICAL is reserved in
        // this file for handlers that must beat Lexical's built-ins on NATIVE commands, and using
        // it here would imply a priority contest that does not exist.
        zt
      ),
      o.registerCommand(
        Ry,
        () => (f.current && V && (se(), ne = setTimeout(() => {
          if (ne = void 0, S || !f.current) return;
          const $ = o.getRootElement(), Z = $?.ownerDocument, Te = Z?.activeElement;
          !$ || !Z?.hasFocus() || !Te || !($ === Te || $.contains(Te)) || (p.logger?.warn(
            `[MarkerEdit] marker settling has been suspended while the editor held focus for ${Xm}ms, so the suspension was lifted and held edits settled. The host did not resume on one of its close paths.`
          ), W(!1));
        }, Xm)), !1),
        zt
      ),
      o.registerCommand(
        tC,
        () => {
          if (m) return !0;
          const $ = o.getRootElement(), Z = $?.ownerDocument, Te = !!$ && !!Z && Z.hasFocus() && $.contains(Z.activeElement);
          let Pe;
          if (Te) {
            const Oe = w();
            Pe = E(Oe) ? Oe.focus.key : g;
          }
          return Mu(() => Da(p, Pe)), !0;
        },
        zt
      ),
      o.registerCommand(
        ud,
        () => (y = !0, !1),
        zt
      ),
      o.registerCommand(
        id,
        () => {
          if (f.current)
            return V = !0, se(), !1;
          if (m) return !1;
          const $ = w(), Z = E($) ? $.focus.key : g;
          return Mu(() => Da(p, Z)), !1;
        },
        zt
      ),
      o.registerUpdateListener(({ editorState: $, tags: Z }) => {
        const Te = y || Z.has(Oi);
        y = !1, p.splitExpected.current = !1, p.wholeParaDeleteExpected?.clear(), p.collapsedDeleteCaretParas?.clear(), p.rebuildAttempted.clear();
        const Pe = $.read(() => {
          const Gt = w();
          return E(Gt) ? Gt.focus.key : void 0;
        }), Oe = k;
        if (Pe !== void 0 && (k = Pe), Z.has(jc)) {
          Pb(o, $, Z), m = !0, Pe !== void 0 && (g = Pe);
          return;
        }
        if (Te) {
          Pe !== void 0 && Pe !== Oe && (m = !0);
          return;
        }
        m || (Pe !== void 0 && (g = Pe), be(), !(x || Pe === void 0) && [...p.pendingKeys].some((Gt) => Gt !== Pe) && (x = !0, queueMicrotask(() => {
          x = !1, !S && (f.current || U() || B(g));
        })));
      })
    );
    return () => {
      S = !0, he !== void 0 && clearTimeout(he), he = void 0, se(), h(), He(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const H2 = ["status_unknown", "status_invalid"], rC = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, G2 = Object.values(rC);
function J2(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const n = rC[t];
  e.getAttribute("aria-description") !== n && (e.setAttribute("aria-description", n), e.title = n);
}
function Qm(e) {
  e.classList.remove(...H2), e.removeAttribute("aria-description"), G2.includes(e.title) && e.removeAttribute("title");
}
function Y2(e, t, n, r) {
  const i = (a) => a.read(() => _e().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = Q(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of n.keys()) c(l);
      for (const l of r) c(l);
      return a;
    });
}
function X2(e) {
  const t = Q(e), n = t?.getTopLevelElement();
  return !t || !n ? !1 : t.getKey() === n.getKey() ? !0 : N(t) && t.getParent()?.getKey() === n.getKey();
}
function Q2({
  viewOptions: e,
  styleInfo: t,
  logger: n
}) {
  const [r] = Se(), i = e?.markerMode === "editable";
  return G(() => {
    if (!i) return;
    const s = t ?? pc;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      r.isComposing() || r.getEditorState().read(() => {
        const u = LR(s, l);
        let f = u;
        if (l) {
          f = new Map(u);
          for (const [d, p] of o) {
            if (f.has(d) || X2(d)) continue;
            const h = Q(d)?.getTopLevelElement();
            !h || l.has(h.getKey()) || f.set(d, p);
          }
        }
        for (const [d] of o) {
          if (f.has(d)) continue;
          const p = r.getElementByKey(d);
          p && Qm(p);
        }
        for (const [d, p] of f) {
          const h = r.getElementByKey(d);
          h && J2(h, p);
        }
        o = f, n?.debug(`[MarkerValidation] pass: ${f.size} flagged`);
      });
    };
    a();
    const c = r.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: f, dirtyLeaves: d }) => {
        f.size === 0 && d.size === 0 || a(
          Y2(l, u, f, d)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = r.getElementByKey(l);
        u && Qm(u);
      }
    };
  }, [r, i, t, n]), null;
}
function ds(e, t, n) {
  const r = Math.min(e.length, t.length);
  for (let i = 0; i < r; i++) {
    const s = e[i], o = t[i];
    n.set(s.getKey(), { node: o, siblings: t });
    const a = ur(o);
    a && A(s) && ds(s.getChildren(), a, n);
  }
}
const iC = /* @__PURE__ */ new WeakMap();
function ra(e, t, n = 0) {
  let r = n;
  const i = (s) => {
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = ur(a);
      if (c) {
        i(c);
        continue;
      }
      const l = Js(a);
      if (l === void 0 || !l.includes(St)) continue;
      const u = l.split(St), f = [];
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (d > 0)
          for (const h of t[r++] ?? [])
            f.push(h, ...iC.get(h) ?? []);
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
function sC(e, t) {
  const n = [];
  for (const r of e)
    vl(r, t) || ((ye(r) || D(r)) && n.push(r.getMarker()), A(r) && n.push(...sC(r.getChildren(), t)));
  return n;
}
function oC(e) {
  const t = [];
  for (const n of e) {
    const r = nh(n);
    (r === "para" || r === "char") && t.push(n.marker ?? "");
    const i = ur(n);
    i && t.push(...oC(i));
  }
  return t;
}
function ia(e, t, n) {
  const r = sC(e, n), i = oC(t);
  return r.length === i.length && r.every((s, o) => s === i[o]);
}
function aC(e, t) {
  if (!e || e.input.run.length === 0) return;
  const n = w();
  let r, i;
  if (E(n)) {
    if (!n.isCollapsed()) return;
    r = n.focus.getNode(), i = n.focus.offset;
  } else if (t)
    r = Q(t.key), i = t.offset;
  else
    return;
  if (!(!v(r) || !r.isAttached()) && !(e.nodeKey !== void 0 && r.getKey() !== e.nodeKey) && r.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: r, caretOffset: i, run: e.input.run };
}
function $l(e, t) {
  const n = t && cC(e, t);
  return n ? ch(e, n.start, n.end) : e;
}
function cC(e, t) {
  const n = t.node.getKey(), r = e.spans.find(
    (o) => !o.isSentinel && o.key === n
  );
  if (!r || r.end - r.start !== t.node.getTextContentSize()) return;
  const i = r.start + t.caretOffset, s = i - t.run.length;
  if (!(s < r.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function lC(e, t, n, r, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = n, l = sh(e, a, o);
  if (!l) return;
  const u = Rl(l, s, n), f = $l(u, i), d = ls(f, {
    getMarker: a,
    opensNamelessParagraph: rh(e)
  });
  if (d.length === 0) return;
  if (Jr(d) !== u.sentinels.length) {
    c?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const p = lr.serializeEditorState(
    { type: sr, version: ir, content: d },
    o
  ).root.children;
  if (fi(p) !== u.sentinels.length) {
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
  if (Mr(p, a) === _r(e, a) && ia(e, p, a)) {
    c?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  ra(p, h.serialized);
  const m = uC(e), y = ph(p);
  for (let k = 0; k < m.length && k < y.length; k++)
    m[k].sid !== void 0 && y[k].number === m[k].number && (y[k].sid = m[k].sid);
  return El(
    e,
    f,
    h.live,
    p,
    "paras",
    a,
    o
  );
}
function uC(e) {
  const t = [], n = (r) => {
    $e(r) ? t.push({ number: r.getNumber(), sid: r.getSid() }) : A(r) && r.getChildren().forEach(n);
  };
  return e.forEach(n), t;
}
function ph(e) {
  const t = [];
  for (const n of e) {
    yd(n) && t.push(n);
    const r = ur(n);
    r && t.push(...ph(r));
  }
  return t;
}
function Z2(e, t, n, r, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = n, l = Ji(e, a, o);
  if (!l) return;
  const { contentNodes: u } = l;
  if (u.length === 0) return;
  const f = Rl(l.out, s, n), d = $l(f, i), p = ls(d, {
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
  const g = h.content ?? [], m = Mv(g), y = e.getCategory() !== m, k = av(e, g);
  if (k) {
    const U = cv(
      e,
      k.before,
      k.after,
      m,
      o
    );
    if (!U || fi(U) !== f.sentinels.length) {
      c?.warn("[MarkerEdit] Settled note USJ skipped: the closed note lost its content");
      return;
    }
    const B = Vr(f, t, r);
    return B ? (ra(U, B.serialized), {
      rebuilt: void 0,
      contentNodes: u,
      category: m,
      categoryChanged: !1,
      closedAs: U
    }) : void 0;
  }
  const x = ov(e, g, m, o);
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
  const _ = Vr(f, t, r);
  if (!_) {
    c?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Mr(S, a) === _r(u, a) && ia(u, S, a)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: m, categoryChanged: y };
    c?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return ra(S, _.serialized), {
    // Annotation marks, mirroring `$rebuildNoteContent`'s carry.
    rebuilt: El(
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
function Zm(e) {
  return e.$?.textType;
}
function eL(e, t) {
  const n = e, r = t;
  return n.type === "text" && r.type === "text" && n.format === r.format && n.style === r.style && n.mode === r.mode && n.detail === r.detail && Zm(e) === Zm(t);
}
function tL(e) {
  const t = [];
  for (const n of e) {
    const r = Q(n);
    r?.isAttached() && rt(r) && r.getTag() === "optbreak" && r.getChildrenSize() === 0 && t.push(r);
  }
  return t;
}
function nL(e) {
  if (!N(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!L(t)) return;
  const n = e.getTextContent();
  if (pr(e)) return;
  const r = so.exec(n);
  if (!r) return;
  const i = r[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Lc(e, t) {
  const n = e;
  n.marker = t, n.text = Cl(t, n.markerSyntax, n.nested);
}
function fC(e, t) {
  const { glyph: n, note: r, oldMarker: i, newMarker: s } = e;
  if (!Ze.isValidMarker(s)) return;
  const o = t.get(r.getKey());
  o && (o.node.marker = s);
  const a = t.get(n.getKey());
  a && Lc(a.node, s);
  const c = r.getChildren().filter(N).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Lc(l.node, s);
}
function dC(e, t, n, r) {
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
function rL(e, t, n) {
  const r = e.spans.find((i) => i.key === t && !i.isSentinel);
  return r ? dC(e, r.start, r.end, n) : e;
}
function pC(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), A(e) && e.getChildren().forEach((n) => pC(n, t)), t;
}
function iL(e, t) {
  const n = pC(t), r = e.spans.filter((d) => n.has(d.key));
  if (r.length === 0) return e;
  const i = Math.min(...r.map((d) => d.start)), s = Math.max(...r.map((d) => d.end)), o = e.spans.filter((d) => d.isSentinel && d.start < i).length, a = r.filter((d) => d.isSentinel).length, c = UT.test(e.text.slice(0, i)) ? " " : "", l = dC(e, i, s, c + St), u = i + c.length, f = [...e.sentinels];
  return f.splice(o, a, [t]), {
    text: l.text,
    spans: [
      ...l.spans.filter((d) => !n.has(d.key)),
      { key: t.getKey(), start: u, end: u + 1, isSentinel: !0 }
    ].sort((d, p) => d.start - p.start),
    sentinels: f
  };
}
function Rl(e, t, n) {
  let r = e;
  for (const { char: i, glyph: s, closer: o, newMarker: a } of t?.values() ?? [])
    if (r.spans.some((c) => c.key === s.getKey())) {
      if (hv(i, a, n.getMarker)) {
        r = iL(r, i);
        continue;
      }
      o && (r = rL(
        r,
        o.getKey(),
        Yt(Cl(a, "closing", o.getNested()))
      ));
    }
  return r;
}
function hC(e, t) {
  const { char: n, glyph: r, closer: i, newMarker: s } = e, o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Lc(a.node, s);
  const c = i && t.get(i.getKey());
  c && Lc(c.node, s);
}
function sL(e, t, n, r, i, s, o) {
  const { viewOptions: a, getMarker: c, logger: l } = n, u = Pl(e, c, a), { contentNodes: f } = u;
  if (f.length === 0 && s.length === 0 || !oh(u.out, s, c, a)) return;
  const d = Rl(u.out, o, n), p = $l(d, i), h = Av(p, c);
  if (Jr(h.content) !== d.sentinels.length) {
    l?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const g = lv(
    e,
    h.lineContent,
    h.followingBlocks,
    a
  );
  if (g.failure !== void 0) {
    g.failure === "shape" && l?.warn("[MarkerEdit] Settled book USJ skipped: unexpected serialized shape");
    return;
  }
  const { children: m, followingBlocks: y } = g;
  if (fi([...m, ...y]) !== d.sentinels.length) {
    l?.warn(
      "[MarkerEdit] Settled book USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const k = Vr(d, t, r);
  if (!k) {
    l?.warn("[MarkerEdit] Settled book USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (y.length === s.length && Mr(y, c) === _r(s, c) && ia(s, y, c) && Mr(m, c) === _r(f, c) && ia(f, m, c)) {
    l?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const x = ra(m, k.serialized);
  ra(y, k.serialized, x);
  const S = uC([...f, ...s]), _ = ph([...m, ...y]);
  for (let se = 0; se < S.length && se < _.length; se++)
    S[se].sid !== void 0 && _[se].number === S[se].number && (_[se].sid = S[se].sid);
  const U = { ...e.exportJSON(), children: m }, [B, ...V] = El(
    [...f, ...s],
    p,
    k.live,
    [U, ...y],
    "bookLine",
    c,
    a
  ), ne = B && ur(B);
  if (ne)
    return { rebuilt: ne, contentNodes: f, followingBlocks: V };
}
function gC(e, t, n, r) {
  const { viewOptions: i, getMarker: s, logger: o } = t, a = ta(e, s, i);
  if (!a) return;
  const c = Rl(a, r, t), l = $l(c, n), u = ls(l, {
    getMarker: s
  }), [f] = u;
  if (u.length === 0 || typeof f != "object" || f.type !== "chapter")
    return;
  if (Jr(u) !== 0) {
    o?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (f.sid = e.getSid());
  const d = lr.serializeEditorState(
    { type: sr, version: ir, content: u },
    i
  ).root.children;
  if (d.length === 0) return;
  const p = [e, ...fs(e)];
  if (!(e.getNumber() !== (f.number ?? "") || e.getAltnumber() !== f.altnumber || e.getPubnumber() !== f.pubnumber) && Mr(d, s) === _r(p, s) && ia(p, d, s)) {
    o?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return El(
    p,
    l,
    [],
    d,
    "chapter",
    s,
    i
  );
}
function mC(e, t, n) {
  const r = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), f = (h) => {
    L(h) ? s.set(h.getKey(), h) : Ne(h) ? o.set(h.getKey(), h) : Ie(h) ? a.set(h.getKey(), h) : r.set(h.getKey(), [h]);
  };
  for (const h of e) {
    const g = Q(h);
    if (!g?.isAttached()) continue;
    const m = Wv(g, t.getMarker);
    if (m) {
      u.set(m.char.getKey(), m);
      continue;
    }
    const y = na(g);
    if (y) {
      if (f(y), N(g)) {
        const k = Fv(g, t.getMarker);
        k && i.push(k);
      }
      if (L(y)) {
        const k = nL(g);
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
    const h = na(n.node);
    h && !d.has(h.getKey()) && f(h);
  }
  const p = tL(e);
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
function yC(e, t) {
  e.splice(t, 1);
  const n = e[t - 1], r = e[t], i = n && Js(n), s = r && Js(r);
  n && r && i !== void 0 && s !== void 0 && eL(n, r) && (n.text = i + s, e.splice(t, 1));
}
function Yi(e, t, n, r, i, s) {
  const o = t.get(e.getKey()), a = o ? ur(o.node) : void 0;
  if (!o || !a) return !1;
  const c = Z2(e, t, n, r, i, s);
  if (!c) return !1;
  if (c.closedAs) {
    const f = o.siblings.indexOf(o.node);
    if (f < 0) return !1;
    const [d, ...p] = c.closedAs, h = o.node;
    for (const g of Object.keys(h)) Reflect.deleteProperty(h, g);
    return Object.assign(h, d), o.siblings.splice(f + 1, 0, ...p), p.length > 0 && iC.set(o.node, p), !0;
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
function bC(e, t, n, r, i, s, o) {
  const a = n.get(e.getKey()), c = a ? ur(a.node) : void 0;
  if (!a || !c) return !1;
  const l = sL(
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
function oL(e, t, n, r, i) {
  const s = aC(r, i);
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
  } = mC(t, n, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && d.size === 0 && l.size === 0 && p.length === 0)
    return;
  const g = /* @__PURE__ */ new Map();
  ds(_e().getChildren(), e.root.children, g);
  for (const m of f.values()) fC(m, g);
  for (const m of d.values()) hC(m, g);
  for (const m of a.values())
    Yi(m, g, n, h, s, d);
  for (const m of o.values()) {
    const y = g.get(m[0].getKey());
    if (!y) continue;
    const k = lC(
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
    bC(
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
    const k = 1 + fs(m).length, x = gC(m, n, s, d);
    if (!x) continue;
    const S = y.siblings.indexOf(y.node);
    S < 0 || y.siblings.splice(S, k, ...x);
  }
  for (const m of p) {
    const y = g.get(m.getKey());
    if (!y) continue;
    const k = y.siblings.indexOf(y.node);
    k < 0 || yC(y.siblings, k);
  }
  return cT(e, n.viewOptions);
}
function aL({
  viewOptions: e,
  logger: t
}) {
  const [n] = Se(), r = as(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return G(() => {
    if (r)
      return n.registerNodeTransform(
        Kt,
        (i) => cL(i, t)
      );
  }, [n, r, t]), null;
}
function cL(e, t) {
  e.getMarker() !== jn && (e.isEmpty() || xn(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${jn}" (key ${e.getKey()})`
  ), e.setMarker(jn)));
}
function Co(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const lL = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function mr(e) {
  return lL.exec(e)?.[1] ?? e;
}
function fr(e, t) {
  const n = e.jsonPath.slice(mr(e.jsonPath).length);
  return { ...e, jsonPath: `${Rt(t)}${n}` };
}
function ao(e, t) {
  return e.length === t.length && e.every((n, r) => n === t[r]);
}
function kC(e) {
  if (Qf(e) || Li(e)) return !0;
  const t = xC(e);
  return t === "marker" || t === "caller";
}
const uL = /^\['([^']+)'\]$/;
function xC(e) {
  if (Lo(e))
    return uL.exec(
      e.jsonPath.slice(mr(e.jsonPath).length)
    )?.[1];
}
function Vf(e, t) {
  return kC(e) && ao(Ln(mr(e.jsonPath)), hn(t));
}
function TC(e, t, n) {
  if (!e.isAttached()) return;
  const [r, i] = Rn(
    fr(t, hn(e)),
    n
  );
  if (!(!r || i === void 0))
    return { key: r.getKey(), offset: i, type: A(r) ? "element" : "text" };
}
function hh(e, t) {
  const n = mn(e, t, { addressDisplayBytes: !0 }), r = n && Q(n.key);
  return n && n.offset > 0 && N(r) && r.getMarkerSyntax() !== "opening" ? n : void 0;
}
function vC(e, t) {
  const n = mn(e, t, { addressDisplayBytes: !0 });
  if (!n || n.offset !== 0) return;
  const r = e.spans.findIndex((o) => o.key === n.key), i = e.spans[r], s = r > 0 ? e.spans[r - 1] : void 0;
  if (!(!i || !Os(i) || !s || s.end !== i.start || !Os(s)))
    return Df(s);
}
function fL(e, t) {
  const n = hh(e, t);
  if (n) return n;
  const r = vC(e, t);
  if (r) return r;
  const i = mn(e, t);
  return i && dL(e, i);
}
function dL(e, t) {
  if (t.type !== "text") return t;
  const n = e.spans.findIndex((a) => a.key === t.key), r = e.spans[n], i = e.spans[n + 1];
  if (!r || !i || r.end === r.start || t.offset !== r.end - r.start)
    return t;
  const s = e.text[i.start] === "\\", o = In.test(e.text[r.end - 1]);
  return s || o ? { key: i.key, offset: 0, type: "text" } : t;
}
function CC(e) {
  const t = e.markerName.length + 2, n = t + e.valueLength;
  return { valueStart: t, closerStart: n, closerLength: e.markerName.length + 2 };
}
function pL(e, t, n) {
  const { keyName: r } = e, { valueStart: i, closerStart: s } = CC(e);
  return n === 0 ? { jsonPath: t, keyName: r } : n < i ? { jsonPath: t, keyName: r, keyOffset: n - 1 } : n < s ? {
    jsonPath: `${t}['${r}']`,
    propertyOffset: n - i
  } : { jsonPath: t, keyName: r, keyClosingMarkerOffset: n - s };
}
function hL(e, t) {
  const { valueStart: n, closerStart: r, closerLength: i } = CC(e), s = (o, a, c) => o >= 0 && o <= a ? c + o : void 0;
  if (Do(t))
    return s(t.keyOffset, e.markerName.length, 1);
  if (qo(t))
    return s(t.keyClosingMarkerOffset, i, r);
  if (Bc(t)) return 0;
  if (Lo(t))
    return s(t.propertyOffset, e.valueLength, n);
}
function gL(e) {
  return Do(e) || qo(e) || Bc(e) ? e.keyName : xC(e);
}
function mL(e, t, n) {
  const r = fL(e.spelling, t), i = r && Q(r.key);
  if (!r || !i) return;
  const s = e.foldedAttributes.find((o) => o.ownerKey === r.key);
  return s ? pL(
    s,
    Rt(hn(i)),
    r.offset
  ) : It(i, r.offset, n);
}
function yL(e, t) {
  let n = _e();
  for (let r = 0; r < t.length; r += 1) {
    if (!A(n)) return;
    const i = Wt(n, Ut(e.viewOptions))[t[r]];
    if (i?.type !== "element") return;
    n = i.node;
    const s = e.byFirstLiveKey.get(n.getKey());
    if (s?.kind === "note" && !s.closedNote)
      return { plan: s, scratchIndexes: [0, ...t.slice(r + 1)] };
  }
}
function bL(e, t) {
  for (const n of e.byFirstLiveKey.values()) {
    const r = n.closedNote;
    if (!r || !n.liveNodes[0].isAttached()) continue;
    const i = aa(e, n), s = (i?.length ?? 0) - 1, o = r.scratchNotePath.length - 1;
    if (!i || s < 0 || o < 0 || t.length <= s || !ao(t.slice(0, s), i.slice(0, s))) continue;
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
function qc(e, t) {
  const n = Ln(mr(t.jsonPath));
  if (n.length === 0) {
    if (!Lr(t)) return { kind: "live", location: t };
    const a = e.settledToLiveTopIndex(t.offset);
    if (!a) {
      const c = Wt(
        _e(),
        Ut(e.viewOptions)
      ).length;
      return { kind: "live", location: { ...t, offset: c } };
    }
    return a.plan && a.indexWithinScope > 0 ? qc(e, { jsonPath: Rt([t.offset]) }) : { kind: "live", location: { ...t, offset: a.liveIndex } };
  }
  const r = bL(e, n);
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
  const s = [i.liveIndex, ...n.slice(1)], o = yL(e, s);
  return o ? { kind: "scope", plan: o.plan, scratchIndexes: o.scratchIndexes, location: t } : { kind: "live", location: fr(t, s) };
}
function SC(e, t) {
  const n = gL(t);
  if (n === void 0) return;
  const r = Ln(mr(t.jsonPath));
  for (const i of e)
    for (const s of i.foldedAttributes) {
      const o = Q(s.ownerKey);
      if (s.keyName !== n || !o || !ao(hn(o), r))
        continue;
      const a = hL(s, t), c = i.spelling.spans.find((u) => u.key === s.ownerKey), l = a !== void 0 && c ? ii(i.spelling, s.ownerKey, a) : void 0;
      return a === void 0 || !c || !l ? { resolution: void 0 } : {
        resolution: {
          kind: "literal",
          run: i,
          anchor: l,
          atWordByte: Za(i.spelling, c.start + a)
        }
      };
    }
}
function kL(e, t, n, r) {
  const i = SC(t, n);
  if (i) return i.resolution;
  const [s, o] = Rn(n, r.viewOptions);
  if (!s || o === void 0) return;
  const a = yl(e, s), c = a && t.find((d) => d.sentinelIndex === a.sentinelIndex);
  if (c) {
    const d = Ro(c.spelling, s, o);
    return d && {
      kind: "literal",
      run: c,
      anchor: d.anchor,
      atWordByte: Za(c.spelling, d.position)
    };
  }
  if (!a) {
    const d = Ro(e, s, o);
    return d ? {
      kind: "anchor",
      anchor: d.anchor,
      atWordByte: Za(e, d.position)
    } : void 0;
  }
  const l = bl(a.member, s);
  if (!l) return;
  const u = L(a.member) ? Ji(a.member, r.getMarker, r.viewOptions)?.out : void 0, f = u && Ro(u, s, o);
  return {
    kind: "preserved",
    sentinelIndex: a.sentinelIndex,
    memberIndex: a.memberIndex,
    path: l,
    offset: o,
    type: A(s) ? "element" : "text",
    noteAnchor: f && {
      anchor: f.anchor,
      atWordByte: Za(u, f.position)
    },
    isNoteOwnBytes: L(a.member) && Vf(n, a.member)
  };
}
function xL(e, t, n) {
  const r = SC(e, t);
  if (r) return r.resolution !== void 0;
  const [i, s] = Rn(t, n);
  return i !== void 0 && s !== void 0;
}
function Za(e, t) {
  const n = e.text[t];
  return n !== void 0 && !In.test(n);
}
function _C(e, t) {
  if (t.type !== "text") return t;
  const n = ah(e, t.key, t.offset);
  if (!n) return t;
  const r = n.end - n.start;
  let i = t.offset;
  for (; i < r && In.test(e.text[n.start + i]); ) i += 1;
  return i === t.offset ? t : { ...t, offset: i };
}
function sa(e, t) {
  const n = e.liveCut;
  return !t || !n || t.type !== "text" || t.key !== n.key ? t : t.offset >= n.nodeOffset ? { ...t, offset: t.offset + n.length } : t;
}
function TL(e, t) {
  for (let n = 0; n < e.length; n += 1) {
    const r = e[n];
    for (let i = 0; i < r.length; i += 1) {
      const s = r[i];
      if (s?.sentinelIndex === t.sentinelIndex && s.memberIndex === t.memberIndex)
        return { sentinelIndex: n, memberIndex: i };
    }
  }
}
function gh(e) {
  const { liveFragment: t, scratchFragment: n, sentinelMap: r, alignment: i } = e;
  return t && n && r && i ? { liveFragment: t, scratchFragment: n, sentinelMap: r, alignment: i } : void 0;
}
function MC(e) {
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
  ), MC(e);
}
function Eu(e, t) {
  return t?.error("settled-position basis out of date — rebuilt"), MC(e);
}
function ey(e) {
  const t = [];
  let n = 0;
  for (const r of e.spans) {
    r.isSentinel && t.push(r.end > r.start ? n : void 0);
    for (let i = r.start; i < r.end; i += 1)
      In.test(e.text[i]) || (n += 1);
  }
  return t;
}
function vL(e, t, n, r) {
  const { liveFragment: i, scratchFragment: s, alignment: o } = t, a = ey(s)[n];
  if (a === void 0) return si(e, r);
  const c = ey(i).findIndex(
    (d) => d !== void 0 && Jp(o, d, "live") === a
  ), l = c < 0 ? void 0 : i.sentinels[c]?.[0], u = l?.isAttached() ? l.getParent() : void 0;
  if (l && u)
    return { key: u.getKey(), offset: l.getIndexWithinParent(), type: "element" };
  const f = mn(i, {
    nonWsBefore: oo(o, a, "settled"),
    wsRun: 0
  });
  return f ? sa(e, f) : si(e, r);
}
function EC(e, t, n, r, i, s) {
  const o = gh(e);
  if (!o) return si(e, s);
  const a = !Lr(r), c = IC(
    o.alignment,
    t.nonWsBefore,
    o.scratchFragment.text,
    t,
    o.liveFragment.text,
    Ta(o.alignment, t, "toLive")
  ), l = (f) => {
    const d = hh(o.liveFragment, f);
    if (d) return sa(e, d);
    const p = mn(
      o.liveFragment,
      bh(o.liveFragment, f, a),
      { addressDisplayBytes: a }
    );
    return sa(
      e,
      p && n ? _C(o.liveFragment, p) : p
    );
  }, u = nI(o.alignment, t.nonWsBefore);
  if (u < c.nonWsBefore) {
    const f = l({ ...c, nonWsBefore: u }), d = f && Q(f.key);
    if (f && d && NC(d, f.offset, i)) return f;
  }
  return l(c) ?? si(e, s);
}
function CL(e, t, n, r, i, s) {
  const o = TL(n.sentinelMap, r);
  if (!o) return vL(t, n, r.sentinelIndex, s);
  const a = n.liveFragment.sentinels[o.sentinelIndex]?.[o.memberIndex];
  if (!a?.isAttached()) return Eu(t, s);
  const c = e.byFirstLiveKey.get(a.getKey());
  if (c?.kind === "note" && r.isNoteOwnBytes)
    return TC(a, i, e.viewOptions);
  if (c?.kind === "note")
    return r.noteAnchor ? EC(
      c,
      r.noteAnchor.anchor,
      r.noteAnchor.atWordByte,
      i,
      e.viewOptions,
      s
    ) : si(c, s);
  let l = a;
  for (const u of r.path) {
    if (!A(l)) return Eu(t, s);
    const f = l.getChildAtIndex(u);
    if (!f) return Eu(t, s);
    l = f;
  }
  return { key: l.getKey(), offset: r.offset, type: r.type };
}
function SL(e, t, n) {
  if (!e.scratch.getEditorState().read(() => {
    const [o, a] = Rn(t, n);
    return yn(o) && a !== void 0 && a >= o.getChildrenSize();
  })) return;
  const i = e.liveNodes[e.liveNodes.length - 1], s = i.getParent();
  if (yn(s))
    return { key: s.getKey(), offset: i.getIndexWithinParent() + 1, type: "element" };
}
function _L(e, t, n) {
  const r = EL(e, t, n);
  if (!r) return r;
  const i = fr(n.location, n.scratchIndexes);
  return n.plan.scratch.getEditorState().read(() => {
    const [o, a] = Rn(i, t.viewOptions);
    return v(o) && a !== void 0 && a > 0 && a === o.getTextContentSize();
  }) ? ML(t, r, n.location) : r;
}
function ML(e, t, n) {
  const r = Q(t.key);
  if (t.type !== "text" || !v(r)) return t;
  const i = JSON.stringify(n);
  let s = t, o = { node: r, offset: t.offset };
  for (const a of PC(r, t.offset)) {
    if (a.node.is(o.node) && a.offset === o.offset) continue;
    if (a.node.is(o.node)) {
      const l = a.node.getTextContent()[a.offset];
      if (l === void 0 || !In.test(l)) break;
    } else if (o.offset !== 0) break;
    o = a;
    const c = Hf(e, a.node, a.offset);
    JSON.stringify(c) === i && (s = { key: a.node.getKey(), offset: a.offset, type: "text" });
  }
  return s;
}
function EL(e, t, n) {
  const { plan: r } = n, { logger: i, viewOptions: s } = e.tier2, o = r.closedNote?.scratchNotePath;
  if (r.kind === "note" && (o ? ao(n.scratchIndexes, o) && !Li(n.location) : n.scratchIndexes.length === 1) && kC(n.location))
    return TC(r.liveNodes[0], n.location, t.viewOptions);
  const a = fr(n.location, n.scratchIndexes);
  if (!r.scratch.getEditorState().read(() => xL(r.settledOnlyRuns, a, s))) return;
  const l = SL(r, a, s);
  if (l) return l;
  const u = gh(r);
  if (!u) return si(r, i);
  const f = r.scratch.getEditorState().read(
    () => kL(
      u.scratchFragment,
      r.settledOnlyRuns,
      a,
      e.tier2
    )
  );
  if (!f) return si(r, i);
  if (f.kind === "preserved")
    return CL(t, r, u, f, n.location, i);
  if (f.kind === "literal") {
    const { run: d, anchor: p } = f, h = rv(d, p.nonWsBefore, "toLiteral") ?? oo(d.inner, p.nonWsBefore, "settled"), g = !Lr(n.location), m = bh(
      u.liveFragment,
      {
        nonWsBefore: d.liveBefore + h,
        wsRun: p.nonWsBefore === 0 ? d.liveWsBefore + p.wsRun : p.wsRun
      },
      g
    ), y = mn(u.liveFragment, m, {
      addressDisplayBytes: !0
    }), k = y && Q(y.key);
    if (y && N(k) && k.getMarkerSyntax() !== "opening")
      return sa(r, y);
    const x = mn(u.liveFragment, m, {
      addressDisplayBytes: g
    });
    return x ? sa(
      r,
      f.atWordByte ? _C(u.liveFragment, x) : x
    ) : si(r, i);
  }
  return EC(
    r,
    f.anchor,
    f.atWordByte,
    n.location,
    s,
    i
  );
}
function ty(e, t, n) {
  const r = qc(t, n);
  if (!r) return;
  if (r.kind === "live") {
    const o = AL(t, r.location);
    if (o) return o;
    const [a, c] = Rn(r.location, t.viewOptions);
    return a && c !== void 0 ? r.location : void 0;
  }
  const i = _L(e, t, r), s = i && Q(i.key);
  return s ? NL(s, i.offset, t.viewOptions, r.plan.liveNodes) : void 0;
}
function ny(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; ) n += 1;
  return n;
}
function AC(e, t, n) {
  const r = ny(e, t), i = Math.min(
    ny([...e].reverse().join(""), [...t].reverse().join("")),
    e.length - r,
    t.length - r
  );
  return n <= r ? n : n >= e.length - i ? n - e.length + t.length : r;
}
function AL(e, t) {
  if (!Li(t)) return;
  const n = Ln(mr(t.jsonPath));
  for (const [r, i] of e.renamedClosers) {
    const s = Q(r)?.getParent();
    if (!(!s || !ao(hn(s), n)))
      return {
        ...t,
        closingMarkerOffset: AC(
          i.settled,
          i.live,
          Math.min(t.closingMarkerOffset, i.settled.length)
        )
      };
  }
}
function ry(e) {
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
function PL(e, t) {
  for (let n = e; n; n = n.getParent())
    if (t.some((r) => r.is(n))) return !0;
  return !1;
}
function* PC(e, t, n) {
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
  for (let i = ry(r); i; i = ry(i))
    if (v(i)) {
      if (n && !PL(i, n)) return;
      for (let s = i.getTextContentSize(); s >= 0; s -= 1) yield { node: i, offset: s };
    }
}
function NL(e, t, n, r) {
  const i = It(e, t, n), s = oa([e, t]);
  if (!s || oa(Rn(i, n))?.is(s)) return i;
  const o = (l, u) => NC(l, u, n), a = mh(e, t), c = a && o(a.node, a.offset);
  if (c) return c;
  for (const l of PC(e, t, r)) {
    if (l.node.is(e) && l.offset === t) continue;
    const u = o(l.node, l.offset);
    if (u) return u;
  }
  return i;
}
function NC(e, t, n) {
  const r = It(e, t, n), i = oa(Rn(r, n));
  if (!i) return;
  if (i.is(tn(e.getKey(), t, "text"))) return r;
  const s = mh(e, t);
  return s && i.is(tn(s.node.getKey(), s.offset, "text")) ? r : void 0;
}
function mh(e, t) {
  if (!v(e)) return;
  const n = t === e.getTextContentSize();
  if (!n && t !== 0) return;
  let r = e, i = n ? r.getNextSibling() : r.getPreviousSibling();
  for (; !i; ) {
    const s = r.getParent();
    if (!s || yn(s) || yn(s.getParent())) return;
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
function oa([e, t]) {
  if (!e || t === void 0) return;
  if (v(e)) return tn(e.getKey(), t, "text");
  if (A(e)) return tn(e.getKey(), t, "element");
  const n = e.getParent();
  if (!n) return;
  const r = e.getIndexWithinParent() + (t > 0 ? 1 : 0);
  return tn(n.getKey(), r, "element");
}
function wC(e, t, n) {
  const r = Rn(e, n), i = Rn(t, n), [s, o] = r, [a, c] = i;
  if (s && a && s.is(a))
    return o !== void 0 && c !== void 0 && o > c;
  const l = oa(r), u = oa(i);
  return !!l && !!u && u.isBefore(l);
}
function OC(e, t, n) {
  const r = qc(e, t), i = qc(e, n);
  if (!(r?.kind !== "scope" || i?.kind !== "scope" || r.plan !== i.plan))
    return r.plan.scratch.getEditorState().read(
      () => wC(
        fr(r.location, r.scratchIndexes),
        fr(i.location, i.scratchIndexes),
        e.viewOptions
      )
    );
}
function wL(e, t, n) {
  if (t.byFirstLiveKey.size === 0 && t.renamedClosers.size === 0) return n;
  const r = ty(e, t, n.start);
  if (!r) return;
  if (!n.end) return { ...n, start: r };
  const i = ty(e, t, n.end);
  if (!i) return;
  const s = OC(t, n.start, n.end);
  return s !== void 0 && wC(r, i, t.viewOptions) !== s ? { ...n, start: i, end: r } : { ...n, start: r, end: i };
}
function Wf(e, t) {
  const n = Ln(mr(t.jsonPath));
  return n.length === 0 ? t : fr(t, [
    e.liveToSettledTopIndex(n[0]),
    ...n.slice(1)
  ]);
}
function $C(e, t) {
  const n = e.closedNoteScopeOver(t.liveNodes[0]);
  if (n && n !== t) return n;
  const r = t.liveNodes[0].getParent(), i = r ? e.planContaining(r) : void 0;
  return i === t ? void 0 : i;
}
function aa(e, t) {
  const n = t.liveNodes[0], r = $C(e, t);
  if (r) {
    const s = Il(e, r, n, 0);
    return typeof s == "object" ? Ln(mr(s.jsonPath)) : void 0;
  }
  const i = OL(n, e.viewOptions);
  return i.length === 0 ? i : [e.liveToSettledTopIndex(i[0]), ...i.slice(1)];
}
function OL(e, t) {
  return !_t(e) || !yn(e.getParent()) ? hn(e) : [Ps(e, 0, Ut(t)).index];
}
function yh(e, t, n) {
  if (!t) return;
  const r = e.closedNote?.scratchNotePath;
  if (r) {
    const a = r.length - 1, c = t.at(-1);
    return c === void 0 || a < 0 || n.length <= a || !ao(n.slice(0, a), r.slice(0, a)) || n[a] < r[a] ? void 0 : [
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
function $L(e, t, n) {
  const r = e.liveCut;
  return !r || t.getKey() !== r.key || n <= r.nodeOffset ? n : Math.max(r.nodeOffset, n - r.length);
}
function RL(e, t, n, r, i) {
  let s = e.sentinels[t.sentinelIndex]?.[t.memberIndex];
  if (s) {
    for (const o of n) {
      if (!A(s)) return;
      const a = s.getChildAtIndex(o);
      if (!a) return;
      s = a;
    }
    return It(s, r, i);
  }
}
function IL(e, t) {
  const n = iv(e, t);
  if (n)
    return {
      run: n,
      within: { nonWsBefore: 0, wsRun: t.wsRun - n.liveWsBefore }
    };
  const r = Xp(e, t);
  if (r)
    return {
      run: r.run,
      within: r.within ?? {
        nonWsBefore: oo(r.run.inner, r.count, "live"),
        wsRun: t.wsRun
      }
    };
}
function LL(e, t) {
  if (e.isSentinel) return !1;
  if (t) return !0;
  const n = Q(e.key);
  return !(N(n) && n.getMarkerSyntax() !== "opening");
}
function bh(e, t, n) {
  let r = 0, i = 0;
  for (const s of e.spans)
    for (let o = s.start; o < s.end; o += 1) {
      const a = In.test(e.text[o]);
      if (r < t.nonWsBefore)
        a || (r += 1);
      else if (a) i += 1;
      else return i >= t.wsRun || LL(s, n) ? t : { ...t, wsRun: i };
    }
  return t;
}
function RC(e, t, n, r, i, s) {
  const { liveFragment: o, scratchFragment: a, sentinelMap: c, alignment: l } = t, u = yl(o, n);
  if (u) {
    const m = o.sentinels[u.sentinelIndex];
    if (!c[u.sentinelIndex]?.some((S) => S !== void 0)) {
      const S = m[0].getParent();
      if (S)
        return RC(
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
    const y = bl(u.member, n);
    if (!y) {
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const k = c[u.sentinelIndex]?.[u.memberIndex];
    if (!k) return;
    const x = e.scratch.getEditorState().read(
      () => RL(a, k, y, r, i)
    );
    if (x) return x;
    s?.error("settled-position basis out of date — rebuilt");
    return;
  }
  const f = Ro(o, n, $L(e, n, r));
  if (!f) return;
  const d = IL(e.settledOnlyRuns, f.anchor);
  if (d)
    return e.scratch.getEditorState().read(() => mL(d.run, d.within, i));
  const p = Ta(l, f.anchor, "toSettled"), h = IC(
    l,
    p.nonWsBefore,
    o.text,
    f.anchor,
    a.text,
    p
  ), g = !Lr(
    It(n, r, i)
  );
  return e.scratch.getEditorState().read(() => {
    const m = hh(a, h), y = m && Q(m.key);
    if (y) return It(y, m.offset, i);
    const k = vC(a, h), x = k && Q(k.key);
    if (x)
      return It(x, k.offset, i);
    const S = bh(a, h, g), _ = mn(a, S, { addressDisplayBytes: g });
    return _ && qL(_, i);
  });
}
function iy(e, t) {
  let n = 0, r = 0;
  for (const i of e) {
    if (In.test(i)) {
      r += 1;
      continue;
    }
    if (n === t) return r;
    n += 1, r = 0;
  }
  return r;
}
function IC(e, t, n, r, i, s) {
  if (!e.segments.some(
    (c) => !c.same && c.liveStart === c.liveEnd && c.settledEnd > c.settledStart && c.settledEnd === t
  )) return s;
  const a = iy(n, r.nonWsBefore) - r.wsRun;
  return {
    ...s,
    wsRun: Math.max(0, iy(i, s.nonWsBefore) - a)
  };
}
function qL(e, t) {
  const n = Q(e.key);
  if (!n) return;
  const r = A(n) && e.offset >= n.getChildrenSize() && (yn(n) || n.getLastDescendant()?.is(_e().getLastDescendant())) && n.getLastDescendant();
  return r ? It(
    r,
    A(r) ? r.getChildrenSize() : r.getTextContentSize(),
    t
  ) : It(n, e.offset, t);
}
function Il(e, t, n, r) {
  if (t.kind === "note") {
    const a = t.liveNodes[0], c = L(a) && At(a)?.is(n) && r === n.getTextContentSize() ? mh(n, r) : void 0;
    if (c && !Vf(
      It(c.node, c.offset, e.viewOptions),
      a
    )) {
      const u = Il(e, t, c.node, c.offset);
      if (typeof u == "object") return u;
    }
    const l = It(n, r, e.viewOptions);
    if (Vf(l, a)) {
      const u = aa(e, t);
      return u && fr(l, u);
    }
  }
  const i = gh(t);
  if (!i) return;
  const s = RC(
    t,
    i,
    n,
    r,
    e.viewOptions,
    e.logger
  );
  if (typeof s != "object") return s;
  const o = yh(
    t,
    aa(e, t),
    Ln(mr(s.jsonPath))
  );
  return o && fr(s, o);
}
function DL(e) {
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
function KL(e, t) {
  const n = t.scratch.getEditorState().read(() => It(_e(), 0, e.viewOptions)), r = yh(
    t,
    aa(e, t),
    Ln(mr(n.jsonPath))
  );
  if (r) return fr(n, r);
  const i = t.liveNodes[0], s = i.getParent();
  if (!s) return;
  const o = $C(e, t);
  return o ? qC(e, o, s, i.getIndexWithinParent()) : Wf(
    e,
    It(s, i.getIndexWithinParent(), e.viewOptions)
  );
}
function LC(e, t, n) {
  const r = DL(t), i = n ? r.findIndex((s) => s.node.is(n.node) && s.offset === n.offset) : -1;
  for (let s = (i < 0 ? r.length : i) - 1; s >= 0; s -= 1) {
    const { node: o, offset: a } = r[s], c = Il(e, t, o, a);
    if (typeof c == "object") return c;
  }
  return KL(e, t);
}
function qC(e, t, n, r) {
  return Il(e, t, n, r) ?? LC(e, t, { node: n, offset: r });
}
function Hf(e, t, n) {
  const r = e.planContaining(t);
  if (r) return qC(e, r, t, n);
  const i = e.renamedClosers.get(t.getKey());
  if (i) {
    const a = It(t, n, e.viewOptions);
    return Wf(
      e,
      Li(a) ? {
        ...a,
        closingMarkerOffset: AC(
          i.live,
          i.settled,
          a.closingMarkerOffset
        )
      } : a
    );
  }
  const s = yn(t) && n >= t.getChildrenSize() && t.getLastChild(), o = s ? e.planContaining(s) : void 0;
  return o ? UL(e, o) ?? LC(e, o, void 0) : Wf(e, It(t, n, e.viewOptions));
}
function UL(e, t) {
  const n = t.scratch.getEditorState().read(() => {
    const i = _e();
    return It(i, i.getChildrenSize(), e.viewOptions);
  }), r = yh(
    t,
    aa(e, t),
    Ln(mr(n.jsonPath))
  );
  return r && fr(n, r);
}
function BL(e) {
  const t = ul(e.viewOptions);
  if (!t || e.byFirstLiveKey.size === 0 && e.renamedClosers.size === 0)
    return t;
  const n = w();
  if (!E(n)) return;
  const r = n.isBackward(), i = r ? n.focus : n.anchor, s = Hf(e, i.getNode(), i.offset);
  if (!s) return;
  if (n.isCollapsed()) return { start: s };
  const o = r ? n.anchor : n.focus, a = Hf(e, o.getNode(), o.offset);
  if (a)
    return OC(e, s, a) === !0 ? { start: a, end: s } : { start: s, end: a };
}
function FL(e) {
  return e.getKey();
}
function DC(e, t, n) {
  if (e === "para") {
    const [i] = t;
    return t.length === 1 && _t(i) ? bI(i, n.getMarker, n.viewOptions) : t.every(ye) ? sh(t, n.getMarker, n.viewOptions) : Dm(t, n.getMarker, n.viewOptions);
  }
  if (e === "chapter") {
    const i = t.find(Ne);
    if (!i) return;
    const s = new Set([i, ...fs(i)].map(FL));
    return t.every((o) => s.has(o.getKey())) ? ta(i, n.getMarker, n.viewOptions) : Dm(t, n.getMarker, n.viewOptions);
  }
  const r = t.find(L);
  return r && Ji(r, n.getMarker, n.viewOptions)?.out;
}
function zL(e, t) {
  const n = od({
    nodes: [...e],
    onError: (r) => {
      throw r;
    }
  });
  try {
    n.update(
      () => {
        const r = _e();
        t.forEach((i) => r.append(qr(i)));
      },
      { discrete: !0 }
    );
  } catch {
    return;
  }
  return n;
}
const sy = "\0";
function KC(e, t = []) {
  for (const n of e)
    t.push(n.getKey()), A(n) && KC(n.getChildren(), t);
  return t;
}
function jL(e, t, n, r, i) {
  const s = `${r.viewOptions.markerMode}/${r.viewOptions.noteMode}`, o = t.map((l) => l.getTextContent()).join(sy), a = KC(t).join(" "), c = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, n, o, a, c].join(sy);
}
function Sa(e, t = []) {
  for (const n of e)
    L(n) && t.push(n), A(n) && Sa(n.getChildren(), t);
  return t;
}
function co(e, t, n, r, i, s, o, a = () => ({
  fragment: DC(e, _e().getChildren(), o.tier2)
})) {
  const c = zL(o.nodes, i);
  if (c)
    return UC(e, t, n, r, c, s, o, a);
}
function UC(e, t, n, r, i, s, o, a) {
  const c = i.getEditorState().read(() => {
    const m = a();
    if (!m) return;
    const { fragment: y } = m;
    return {
      settledCount: Wt(
        _e(),
        Ut(o.tier2.viewOptions)
      ).length,
      scratchFragment: y,
      settledSide: y && Yp(y),
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
    const m = n && f && $c(Oc(n, []), f).alignment;
    return { ...p, liveFragment: n, sentinelMap: [], settledOnlyRuns: [], alignment: m };
  }
  const h = n && s && Tv(n, s.live), g = h && f && $c(Oc(h, s.live), f);
  return g ? { ...p, liveFragment: h, ...g } : {
    ...p,
    liveFragment: n,
    sentinelMap: void 0,
    settledOnlyRuns: [],
    alignment: void 0
  };
}
function lo(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const n = cC(e, t);
  return n ? {
    liveFragment: ch(e, n.start, n.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function _a(e, t) {
  for (const n of e.noteGlyphRenames.values())
    fC(n, t);
  for (const n of e.charOpenerRenames.values())
    hC(n, t);
}
function VL(e, t) {
  const n = e.getKey();
  return t.bookScopes.has(n) || [...t.paraScopes.values(), ...t.bookTrailingParas.values()].some(
    (r) => r.some((i) => i.getKey() === n)
  );
}
function WL(e) {
  const t = e.getChildren();
  let n = 0;
  for (; n < t.length; ) {
    const r = t[n];
    if (!N(r) || r.getMarkerSyntax() !== "opening") break;
    n += 1;
  }
  return n < t.length ? t.slice(n + 1) : void 0;
}
function HL(e, t, n, r) {
  const { getMarker: i, viewOptions: s } = n.tier2;
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const o = e.getTopLevelElement(), a = o && bl(o, e), c = Ji(e, i, s)?.contentNodes;
  if (!o || !a || !c || VL(o, t)) return;
  const l = e.getNextSiblings(), u = lh([...c, ...l], i, s), f = us(o), d = /* @__PURE__ */ new Map();
  if (ds([o], [f], d), _a(t, d), Sa([o]).filter((y) => !y.is(e) && t.noteScopes.has(y.getKey())).forEach(
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
  if (!S_(p) || p.unknownAttributes?.closed === "false")
    return;
  const { liveFragment: h, liveCut: g } = lo(u, r), m = Vr(u, d, t.huskKeys);
  return co(
    "note",
    [e, ...l],
    h,
    g,
    [f],
    m,
    n,
    () => {
      let y = _e().getFirstChild();
      for (const k of a)
        y = A(y) ? y.getChildAtIndex(k) : null;
      return L(y) ? BC(y, n.tier2) : void 0;
    }
  );
}
function BC(e, { getMarker: t, viewOptions: n }) {
  const r = WL(e), i = e.getParent();
  if (!r || !i) return;
  const s = hn(e), o = s.at(-1);
  if (o === void 0) return;
  const a = s.length === 1 ? _e() : i, c = Wt(a, Ut(n));
  return {
    fragment: lh(
      [...r, ...e.getNextSiblings()],
      t,
      n
    ),
    closedNote: { scratchNotePath: s, settledItemsFromNote: c.length - o }
  };
}
function GL(e, t, n, r, i) {
  const { getMarker: s, viewOptions: o } = r.tier2, { liveFragment: a, sentinelMap: c, scratchFragment: l } = e, u = a && yl(a, t), f = u && u.member.is(t) ? c?.[u.sentinelIndex]?.[u.memberIndex] : void 0, d = Ji(t, s, o)?.contentNodes;
  if (!f || !l || !d) return;
  const p = t.getNextSiblings(), h = lh([...d, ...p], s, o), { liveFragment: g, liveCut: m } = lo(h, i), y = {
    live: h.sentinels.map((k) => k.filter((x) => !n.huskKeys.has(x.getKey())))
  };
  return UC(
    "note",
    [t, ...p],
    g,
    m,
    e.scratch,
    y,
    r,
    () => {
      const k = l.sentinels[f.sentinelIndex]?.[f.memberIndex];
      if (!(!L(k) || k.getUnknownAttributes()?.closed === "false"))
        return BC(k, r.tier2);
    }
  );
}
function JL(e, t, n, r, i) {
  const s = HL(e, n, r, i);
  if (s) return s;
  const { liveFragment: o, liveCut: a } = lo(t, i), c = us(e), l = /* @__PURE__ */ new Map();
  if (ds([e], [c], l), _a(n, l), !Yi(
    e,
    l,
    r.tier2,
    n.huskKeys,
    i,
    n.charOpenerRenames
  ))
    return;
  const u = t && Vr(t, l, n.huskKeys);
  return co("note", [e], o, a, [c], u, r);
}
function YL(e, t, n, r, i) {
  const { liveFragment: s, liveCut: o } = lo(t, i), a = e.map(us), c = /* @__PURE__ */ new Map();
  ds(e, a, c), _a(n, c), Sa(e).filter((f) => n.noteScopes.has(f.getKey())).forEach(
    (f) => Yi(
      f,
      c,
      r.tier2,
      n.huskKeys,
      i,
      n.charOpenerRenames
    )
  );
  const l = lC(
    e,
    c,
    r.tier2,
    n.huskKeys,
    i,
    n.charOpenerRenames
  );
  if (!l) return;
  const u = t && Vr(t, c, n.huskKeys);
  return co("para", e, s, o, l, u, r);
}
function XL(e, t, n, r, i, s) {
  const { liveFragment: o, liveCut: a } = lo(n, s), c = [e, ...t], l = c.map(us), u = /* @__PURE__ */ new Map();
  if (ds(c, l, u), _a(r, u), Sa(c).filter((d) => r.noteScopes.has(d.getKey())).forEach(
    (d) => Yi(
      d,
      u,
      i.tier2,
      r.huskKeys,
      s,
      r.charOpenerRenames
    )
  ), !bC(
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
  return co("para", c, o, a, l, f, i);
}
function QL(e, t, n, r, i) {
  const { liveFragment: s, liveCut: o } = lo(t, i), a = gC(e, r.tier2, i, n.charOpenerRenames);
  if (!a) return;
  const c = [e, ...fs(e)];
  return co("chapter", c, s, o, a, void 0, r);
}
function ZL(e, t, n, r, i, s) {
  const o = us(e), a = /* @__PURE__ */ new Map();
  ds([e], [o], a), _a(r, a), Sa([e]).filter((u) => r.noteScopes.has(u.getKey())).forEach(
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
    d < 0 || (yC(f.siblings, d), c.add(u.getKey()));
  }
  if (c.size === 0) return;
  const l = t && Vr(t, a, c);
  return co("para", [e], t, void 0, [o], l, i);
}
function eq(e, t) {
  for (let n = e; n; n = n.getParent())
    if (t.has(n.getKey())) return !0;
  return !1;
}
function oy(e, t, n = /* @__PURE__ */ new Map()) {
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
function tq(e) {
  return e.liveNodes.every((n) => n.isAttached()) ? (e.liveFragment?.spans ?? []).every((n) => Q(n.key) !== null) : !1;
}
function ec(e) {
  return (e.type === "element" ? e.node : e.segments[0]?.node)?.getTopLevelElement() ?? null;
}
function nq(e, t, n = /* @__PURE__ */ new Map()) {
  const r = Wt(_e(), t), i = [], s = [];
  let o = 0;
  for (let a = 0; a < r.length; ) {
    const c = ec(r[a]), l = c && e.get(c.getKey());
    if (!l) {
      i[a] = o, s.push({ liveIndex: a, indexWithinScope: 0 }), o += 1, a += 1;
      const d = r[a] && ec(r[a]), p = c && !d?.is(c) ? n.get(c.getKey()) : 0;
      for (let h = 0; h < (p ?? 0); h += 1)
        s.push({ liveIndex: a, indexWithinScope: 0 }), o += 1;
      continue;
    }
    const u = new Set(l.liveNodes.map((d) => d.getKey()));
    let f = 0;
    for (; a + f < r.length; ) {
      const d = ec(r[a + f]);
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
function rq(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const r of e.values()) {
    const i = r.liveNodes[0], s = r.closedNote?.settledItemsFromNote, o = i.getTopLevelElement();
    if (s === void 0 || !_t(o) || !i.isAttached()) continue;
    const [a, ...c] = hn(i);
    if (a === void 0 || c.length > 0) continue;
    const l = Wt(_e(), t).slice(a).filter((u) => ec(u)?.is(o)).length;
    s > l && n.set(o.getKey(), s - l);
  }
  return n;
}
function ay(e) {
  const t = aC(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), oy(e.tier2.viewOptions, e.tier2.logger);
  e.cache.getMarker !== e.tier2.getMarker && (e.cache.entries.clear(), e.cache.getMarker = e.tier2.getMarker);
  const n = mC(e.pendedKeys, e.tier2, t), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (g, m) => {
    if (!g) return;
    const y = g.liveNodes[0].getKey();
    r.set(y, g), g.liveNodes.forEach((k, x) => {
      (x === 0 || !i.has(k.getKey())) && i.set(k.getKey(), g);
    }), m && g.liveNodes.forEach((k) => s.set(k.getKey(), g));
  }, c = (g, m, y, k) => {
    o.add(g);
    const x = DC(m, y, e.tier2), S = jL(
      m,
      y,
      x?.text ?? "",
      e.tier2,
      t
    ), _ = e.cache.entries.get(g);
    if (_?.signature === S && tq(_.plan)) return _.plan;
    const U = k(x);
    return U ? e.cache.entries.set(g, { signature: S, plan: U }) : e.cache.entries.delete(g), U;
  };
  for (const g of n.noteScopes.values())
    a(
      c(
        g.getKey(),
        "note",
        g.getUnknownAttributes()?.closed === "false" ? [g, ...g.getNextSiblings()] : [g],
        (m) => JL(g, m, n, e, t)
      ),
      !1
    );
  for (const g of n.paraScopes.values())
    a(
      c(
        g[0].getKey(),
        "para",
        g,
        (m) => YL(g, m, n, e, t)
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
        (y) => XL(g, m, y, n, e, t)
      ),
      !0
    );
  }
  for (const g of n.chapterScopes.values())
    a(
      c(
        g.getKey(),
        "chapter",
        [g, ...fs(g)],
        (m) => QL(g, m, n, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const g of n.husks) {
    const m = g.getTopLevelElement();
    if (!(ye(m) || _t(m)) || eq(g, i)) continue;
    const y = l.get(m.getKey()) ?? { para: m, husks: [] };
    y.husks.push(g), l.set(m.getKey(), y);
  }
  for (const [g, { para: m, husks: y }] of l)
    a(
      c(
        g,
        "para",
        [m],
        (k) => ZL(m, k, y, n, e, t)
      ),
      !0
    );
  for (const g of n.noteScopes.values()) {
    if (g.getUnknownAttributes()?.closed !== "false") continue;
    const m = g.getTopLevelElement(), y = m ? s.get(m.getKey()) : void 0, k = y && GL(y, g, n, e, t);
    if (!k) continue;
    const x = r.get(g.getKey());
    r.set(g.getKey(), k), k.liveNodes.forEach((S, _) => {
      const U = i.get(S.getKey());
      (_ === 0 || !U || U === x) && i.set(S.getKey(), k);
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
      settled: Cl(m, "closing", g.getNested())
    });
  if (r.size === 0)
    return oy(e.tier2.viewOptions, e.tier2.logger, f);
  const d = Ut(e.tier2.viewOptions), { liveToSettled: p, settledToLive: h } = nq(
    s,
    d,
    rq(r, d)
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
function iq({
  scrRef: e,
  onScrRefChange: t
}) {
  const [n] = Se(), r = re({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return G(() => {
    const i = r.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, Dc(s, e) || sq(i, n, e);
  }, [n, e, t]), G(
    () => n.registerMutationListener(
      Nn,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Gf(n);
        cy(r.current, n, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Ka(s) === Ka(n.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [n]
  ), G(() => {
    const i = (a) => a.read(
      () => new Set(
        _e().getChildren().filter(ct).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = n.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), f = i(c), d = [...f].some((p) => !u.has(p));
      d && (Gf(n) || cy(r.current, n, void 0, {
        hasCreated: d,
        hasDestroyed: [...u].some((p) => !f.has(p)),
        isSameDocumentReload: Ka(a) === Ka(c)
      }));
    };
    return it(
      ...[qn, Kn].map(
        (a) => n.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [n]), G(
    () => n.registerCommand(
      bn,
      () => {
        const i = r.current;
        return i.phase === "idle" && lq(i, FC()), !1;
      },
      zt
    ),
    [n]
  ), G(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => n.dispatchCommand(bn, void 0));
    };
    return it(
      n.registerMutationListener(Qt, i),
      n.registerMutationListener(Vt, i)
    );
  }, [n]), G(() => {
    const i = () => pq(r.current);
    return n.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [n]), null;
}
function sq(e, t, n) {
  if (oq(e, n)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const r = Gf(t);
  (!r || r === n.book) && t.update(() => zC(t, n.chapterNum, n.verseNum));
}
function oq(e, t) {
  const n = e.pendingEchoes.findIndex((r) => Dc(r, t));
  return n < 0 ? !1 : (e.pendingEchoes.splice(0, n + 1), e.phase = "idle", !0);
}
function FC() {
  const e = w(), t = ik(e);
  if (!t) return;
  const n = kh(), r = xM(t);
  if (!r && !n) return;
  const i = r ? parseInt(r.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = tp(t, e), { verseNum: o, verse: a } = HE(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: n?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Gf(e) {
  return e.getEditorState().read(() => kh()?.getCode() || void 0);
}
function kh() {
  return _e().getChildren().find(Ie);
}
function cy(e, t, n, r) {
  const i = r.hasCreated && !e.sawDocument;
  if (r.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    r.hasCreated && (!n || n === e.scrRef.book) && Au(e, t);
    return;
  }
  r.hasCreated && r.hasDestroyed ? (r.isSameDocumentReload || Au(e, t), e.phase = "navigating") : i && Au(e, t), n && n !== e.scrRef.book && WC(e, { ...e.scrRef, book: n }) && (e.phase = "navigating");
}
function Au(e, t) {
  queueMicrotask(() => {
    t.update(
      () => zC(t, e.scrRef.chapterNum, e.scrRef.verseNum)
    );
  });
}
function zC(e, t, n) {
  const r = w()?.clone();
  aq(t, n);
  const i = w();
  i && !(r && i.is(r)) && e.dispatchCommand(ud, void 0);
}
function aq(e, t) {
  const n = FC();
  if (n?.chapterNum === e && (n.verse ? VC(t, n.verse) : n.verseNum === t))
    return;
  const r = _e().getChildren(), i = Xb(r, e);
  if (!i) return;
  const s = MM(r, i), o = kM(s, !0);
  _M(s, o);
  let a;
  try {
    a = BE(s, t);
  } catch {
    return;
  }
  a && (ye(a) ? !v(a.getFirstChild()) && cs(a) || cr(a, 0) : cq(a));
}
function cq(e) {
  const t = e.getParent();
  if (!t) return;
  const n = e.getIndexWithinParent() + 1, r = t.getChildAtIndex(n);
  if (!r || we(r)) {
    v(e) ? e.selectEnd() : cr(t, n);
    return;
  }
  const i = ma(t, n);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (v(e)) {
    e.selectEnd();
    return;
  }
  const s = A(r) && !L(r) ? jC(r) : void 0;
  s ? s.select(0, 0) : cr(t, n);
}
function jC(e) {
  const t = e.getFirstChild();
  if (v(t)) return t;
  if (A(t) && !L(t)) return jC(t);
}
function Ka(e) {
  return e.read(() => {
    const t = _e().getChildren().find(ct);
    return `${kh()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function lq(e, t) {
  e.phase !== "navigating" && t && (uq(t, e.scrRef) || WC(e, fq(t, e.scrRef)));
}
function uq(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? VC(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function VC(e, t) {
  try {
    return qd(e, t);
  } catch {
    return !1;
  }
}
function fq(e, t) {
  const n = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (n.verse = e.verse), t.versificationStr != null && (n.versificationStr = t.versificationStr), n;
}
const dq = 8;
function WC(e, t) {
  return Dc(t, e.scrRef) || e.pendingEchoes.some((n) => Dc(n, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > dq && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function Dc(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function pq(e) {
  e.phase = "idle";
}
function hq(e) {
  return Ie(e) ? `${e.__code}` : Ne(e) ? `${e.__marker} "${e.__number}"` : D(e) ? `${e.__marker}` : Gr(e) ? `${e.__marker} "${e.__number}"` : Pt(e) ? `${e.__caller}` : gr(e) ? `${e.__marker} "${e.__number}"` : L(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ye(e) ? `${e.__marker}` : v(e) ? `"${e.__text}"${gq(e)}` : ae(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : $e(e) ? `${e.__marker} "${e.__number}"` : "";
}
function gq(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Dr]) : "";
}
function mq() {
  const [e] = Se();
  return /* @__PURE__ */ P(
    VS,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: hq,
      editor: e
    }
  );
}
const HC = vy(null), ly = 4;
function yq({
  children: e,
  className: t,
  onClick: n,
  title: r
}) {
  const i = re(null), s = Cy(HC);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return G(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ P("button", { className: t, onClick: n, ref: i, title: r, type: "button", children: e });
}
function bq({
  children: e,
  dropDownRef: t,
  onClose: n
}) {
  const [r, i] = Re(), [s, o] = Re(), a = Ae(
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
  }, l = ft(() => ({ registerItem: a }), [a]);
  return G(() => {
    const u = s ?? r?.[0];
    u?.current && u.current.focus();
  }, [r, s]), /* @__PURE__ */ P(HC.Provider, { value: l, children: /* @__PURE__ */ P("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function kq({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: n,
  buttonClassName: r,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = re(null), c = re(null), [l, u] = Re(!1), f = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return G(() => {
    const d = c.current, p = a.current;
    if (l && d !== null && p !== null) {
      const { top: h, left: g } = d.getBoundingClientRect();
      p.style.top = `${h + d.offsetHeight + ly}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), G(() => {
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
  }, [a, c, l, o]), G(() => {
    const d = () => {
      if (l) {
        const p = c.current, h = a.current;
        if (p !== null && h !== null) {
          const { top: g } = p.getBoundingClientRect(), m = g + p.offsetHeight + ly;
          m !== h.getBoundingClientRect().top && (h.style.top = `${m}px`);
        }
      }
    };
    return document.addEventListener("scroll", d), () => {
      document.removeEventListener("scroll", d);
    };
  }, [c, a, l]), /* @__PURE__ */ tt(Ii, { children: [
    /* @__PURE__ */ tt(
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
      /* @__PURE__ */ P(bq, { dropDownRef: a, onClose: f, children: s }),
      document.body
    )
  ] });
}
const Jf = {
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
}, Yf = {
  ...Jf,
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
function xq({
  editorRef: e,
  blockMarker: t,
  disabled: n = !1
}) {
  return /* @__PURE__ */ P(
    kq,
    {
      disabled: n,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + Tq(t),
      buttonLabel: vq(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Jf).map((r) => /* @__PURE__ */ tt(
        yq,
        {
          className: "item block-marker " + Cq(t === r),
          onClick: () => e.current?.formatPara(r),
          children: [
            /* @__PURE__ */ P("i", { className: "icon block-marker " + r }),
            /* @__PURE__ */ P("span", { className: "text usfm_" + r, children: Jf[r] })
          ]
        },
        r
      ))
    }
  );
}
function Tq(e) {
  return e && e in Yf ? e : "ban";
}
function vq(e) {
  return e && e in Yf ? Yf[e] : "No Style";
}
function Cq(e) {
  return e ? "active dropdown-item-active" : "";
}
function uy() {
  return /* @__PURE__ */ P("div", { className: "divider" });
}
const Sq = pi(function({ editorRef: t, isReadonly: n = !1, onStateChange: r }, i) {
  const [s] = Se(), [o, a] = Re(s), [c, l] = Re(), [u, f] = Re(!1), [d, p] = Re(!1), h = Ae(
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
  return G(() => s.registerCommand(
    bn,
    (g, m) => (a(m), !1),
    Xe
  ), [s]), /* @__PURE__ */ tt(Ii, { children: [
    /* @__PURE__ */ P(Yx, { onStateChange: h }),
    /* @__PURE__ */ tt("div", { className: "toolbar", children: [
      /* @__PURE__ */ P(
        "button",
        {
          disabled: !u || n,
          onClick: () => {
            o.dispatchCommand(Ly, void 0);
          },
          title: Ks ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(qy, void 0);
          },
          title: Ks ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ P("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ P(uy, {}),
      o === s && /* @__PURE__ */ tt(Ii, { children: [
        /* @__PURE__ */ P(
          xq,
          {
            editorRef: t,
            blockMarker: c,
            disabled: n
          }
        ),
        /* @__PURE__ */ P(uy, {})
      ] }),
      /* @__PURE__ */ P("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), _q = ll(), Mq = {}, Eq = {}, fy = m_.filter((e) => e !== fd);
function Aq() {
  return /* @__PURE__ */ P("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function dy(e) {
  return e.type === "text" && e.offset !== 0 && e.offset !== e.getNode().getTextContentSize();
}
function py() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return;
  const t = e.focus.getNode();
  return v(t) ? { key: t.getKey(), offset: e.focus.offset } : void 0;
}
function Pq(e) {
  const t = [], n = (r, i) => r?.forEach((s, o) => {
    if (typeof s != "object") return;
    const a = [...i, o];
    s.type === "note" && t.push(Rt(a)), n(s.content, a);
  });
  return n(e?.content, []), t;
}
function Nq(e, t) {
  return e.editorState === t.editorState && e.pendedKeys === t.pendedKeys && e.transientInput === t.transientInput && e.caretKey === t.caretKey && e.caretOffset === t.caretOffset && e.viewOptions === t.viewOptions && e.getMarker === t.getMarker;
}
function wq({
  listener: e
}) {
  const [t] = Se();
  return Xs(
    () => t.registerUpdateListener((n) => e(n, t)),
    [t, e]
  ), null;
}
function Ua(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
function hy(e) {
  const t = e.getNextSiblings(), n = t.at(0), r = t.at(-1);
  if (!n || !r) return [];
  const i = A(r) ? r.getLastDescendant() ?? r : r;
  return al(n, i);
}
function gy(e, t, n) {
  GS(e, () => Us(t));
  const r = w();
  if (!E(r)) return;
  const i = /* @__PURE__ */ new Set();
  r.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    ye(o) && i.add(o);
  }), i.forEach((s) => Iv(s, t, n));
}
const GC = pi(function({
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
  const f = re(null), d = re(null), p = re(null), h = re(null), g = re(t), m = re(!1), y = re(void 0), k = re(void 0), x = re(void 0), S = re({ entries: /* @__PURE__ */ new Map() }), _ = re(void 0), U = re(0), B = re(!0), V = re(void 0), [ne, se] = Re(t), [W, he] = Re(0), [be, He] = Re(), {
    isReadonly: $ = !1,
    structureProtectionMode: Z = "off",
    hasExternalUI: Te = !1,
    hasSpellCheck: Pe = !1,
    textDirection: Oe = "ltr",
    markerMenuTrigger: Gt = "\\",
    view: Cn,
    nodes: Le,
    debug: me = !1,
    contextMenu: F,
    styleInfo: le,
    markerSettleDelayMs: Me,
    copyLimit: Ye
  } = a ?? Eq, ut = Cn ?? _q, xt = Xo(ut) && (ut.markerMode !== "hidden" || !ut.hasSpacing || ut.hasGutterParaMarkers || ut.hasActiveTextFocusBox) ? {
    ...ut,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : ut, Sn = re(xt);
  Zn(Sn.current, xt) || (Sn.current = xt);
  const ie = Sn.current, Ce = ft(() => Le ?? Mq, [Le]), Nr = ft(() => F, [F]), qe = ft(
    () => OE(le ?? pc),
    [le]
  ), yr = re(c);
  Zn(yr.current, c) || (yr.current = c);
  const ge = yr.current, Bt = Xo(ie), Zt = $ || Bt, I = xt !== ut;
  G(() => {
    Bt && !$ && ge?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), I && ge?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), ie?.markerMode === "visible" && !$ && ge?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [Bt, $, I, ge, ie?.markerMode]);
  const j = re(null), J = ft(() => {
    if (ie.markerMode !== "editable") return;
    const O = le ?? pc;
    return {
      getContext: () => j.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (R) => jR(
        O,
        R,
        Ce.extraValidMarkers
      ),
      getEnterItems: (R) => VR(
        O,
        R,
        Ce.extraValidMarkers
      ),
      apply: (R, K) => {
        const X = j.current;
        X && (K.trigger === "enter" ? X.splitParagraphWithMarker(R.marker) : X.applyMarkerMenuSelection(R, K));
      },
      commitTypedCloser: (R) => {
        j.current?.commitTypedCloser(R);
      }
    };
  }, [ie, le, Ce.extraValidMarkers]), Y = (O) => {
    if (Bt)
      throw new Error(
        `Cannot ${O} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, ue = (O) => {
    if (Y(O), Zt) throw new Error(`Cannot ${O} in readonly mode`);
  }, te = ft(
    () => [mt, ...Bt ? DP : pl],
    [Bt]
  ), ee = () => !!f.current && Op(f.current), ce = ft(
    () => ({
      namespace: "platformEditor",
      theme: { ...$T, showCharMarkerTitles: ie.showCharMarkerTitles },
      editable: !Zt,
      editorState: void 0,
      // Handling of errors during update
      onError(O) {
        throw O;
      },
      nodes: te
    }),
    [Zt, te, ie.showCharMarkerTitles]
  );
  Ms.initialize(ge);
  function fe(O) {
    if (O !== void 0 && !y$(O, Ce.extraValidMarkers))
      throw new Error(`Unsupported character marker '${O}'`);
  }
  const Be = Ae(() => {
    const O = f.current;
    if (!O) return g.current;
    const R = () => {
      if (!m.current) return;
      const st = Ms.deserializeEditorState(O.getEditorState(), ie);
      st && (g.current = st, m.current = !1);
    }, K = zu(O), X = k.current;
    if ((!K || K.size === 0) && !X)
      return R(), g.current;
    const Ee = O.getEditorState(), Ve = x.current, Fe = {
      editorState: Ee,
      pendedKeys: K ? [...K].sort().join(",") : "",
      transientInput: X,
      caretKey: Ve?.key,
      caretOffset: Ve?.offset,
      viewOptions: ie,
      getMarker: qe
    }, Ge = _.current;
    if (Ge && Nq(Ge.key, Fe)) return Ge.usj;
    const Tt = Ee.toJSON(), gt = Ee.read(
      () => oL(
        Tt,
        K ?? /* @__PURE__ */ new Set(),
        { viewOptions: ie, getMarker: qe, logger: ge },
        X,
        Ve
      )
    );
    return gt ? (_.current = { key: Fe, usj: gt }, gt) : (R(), g.current);
  }, [ie, qe, ge]), De = Ae(() => {
    const O = f.current;
    if (!O) return;
    const R = {
      pendedKeys: zu(O) ?? /* @__PURE__ */ new Set(),
      transientInput: k.current,
      lastKnownCaret: x.current,
      tier2: { viewOptions: ie, getMarker: qe, logger: ge },
      nodes: te,
      cache: S.current
    };
    return Co(R) && R.cache.entries.clear(), R;
  }, [ie, qe, ge, te]), an = Ae(
    (O) => {
      const R = f.current, K = De();
      if (!(!R || !K))
        return Co(K) ? O : R.getEditorState().read(() => {
          const X = ay(K);
          return wL(K, X, O);
        });
    },
    [De]
  );
  G(() => (B.current = !0, () => {
    B.current = !1;
  }), []);
  const _n = Ae(
    (O, R) => O.read(() => {
      const K = De(), X = K && BL(ay(K));
      return !X && E(w()) && ge?.warn(
        `${R} refused: the selection could not be expressed against the document the host is reading`
      ), X;
    }),
    [De, ge]
  ), wr = Ae(
    (O) => {
      if (!i) return;
      const R = f.current, K = De();
      U.current += 1;
      const X = U.current;
      if (!R || !K || Co(K)) {
        i(O);
        return;
      }
      queueMicrotask(() => {
        if (!B.current || X !== U.current || f.current !== R) return;
        const Ee = _n(R, "onSelectionChange");
        X === U.current && i(Ee);
      });
    },
    [i, De, _n]
  );
  function bi(O, R, K) {
    if (Bt && R === "remote") {
      yr.current?.error(
        "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
      );
      return;
    }
    Y("apply an update");
    const X = f.current;
    if (!X) return;
    const Ee = ee(), Ve = Ee ? void 0 : Ns(X, Qn);
    let Fe = !1;
    X.update(
      () => {
        Ql(X, R), R === "remote" && Ft(fd), Ee || Ft(Qn), K && Ft(K);
        try {
          O1(O, ie, Ce, ge);
        } catch (Ge) {
          throw Fe = !0, Ql(X, void 0), Ve?.(), Ge;
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
          if (Fe) return;
          Ql(X, void 0), Ve?.(), Ee || fu(X);
          const Ge = X.getEditorState(), Tt = Ms.deserializeEditorState(Ge, ie);
          if (!Tt) return;
          const gt = !Zn(g.current, Tt);
          gt && (g.current = Tt);
          const st = Be();
          if (st && (gt || !Zn(ne, Tt))) {
            const kt = bg(O, Ge, "apply");
            V.current = st, s?.(st, O, R, kt);
          }
        }
      }
    );
  }
  const uo = {
    focus() {
      f.current?.focus();
    },
    // Delegates to `holdsDomFocus` (above), the same check every internal caller here uses,
    // rather than comparing `activeElement` to the root directly: a focused decorator inside the
    // editor - a collapsed note's caller button, say - is the user being in THIS editor, and a
    // host gating a keyboard shortcut or a PDP-sync deferral on `isFocused()` needs that answer,
    // not a narrower one that reads such a caret as unfocused.
    isFocused() {
      return ee();
    },
    undo() {
      f.current?.dispatchCommand(Ly, void 0);
    },
    redo() {
      f.current?.dispatchCommand(qy, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      ue("cut"), f.current && Ap(f.current);
    },
    copy() {
      f.current && Ep(f.current);
    },
    paste() {
      ue("paste"), f.current && Pp(f.current);
    },
    pastePlainText() {
      ue("paste as plain text"), f.current && Np(f.current);
    },
    getUsj() {
      return Be();
    },
    commitPendingMarkerEdits() {
      const O = f.current;
      if (!O) return;
      const R = !ee(), K = R ? Ns(O, Qn) : void 0;
      O.update(
        () => {
          R && Ft(Qn), O.dispatchCommand(tC, void 0);
        },
        { discrete: !0 }
      ), K?.(), R && fu(O);
    },
    setMarkerSettleSuspended(O) {
      f.current?.dispatchCommand(nC, O);
    },
    setTransientInput(O) {
      if (!O) {
        k.current = void 0;
        return;
      }
      const R = f.current?.getEditorState().read(() => {
        const K = w();
        return E(K) && K.isCollapsed() ? K.focus.key : void 0;
      });
      k.current = { input: O, nodeKey: R ?? x.current?.key };
    },
    setUsj(O) {
      if (!Zn(g.current, O)) {
        g.current = O, m.current = !1, _.current = void 0, k.current = void 0;
        const R = Zn(ne, O);
        se(O), R && he((K) => K + 1);
      }
    },
    applyUpdate(O, R = "remote") {
      bi(O, R);
    },
    replaceEmbedUpdate(O, R) {
      const K = f.current?.read(() => sA(O, R));
      K ? this.applyUpdate(K) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${O}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      const O = f.current;
      if (!O) return;
      O.read(() => {
      });
      const R = De();
      return !R || Co(R) ? O.read(() => ul(ie)) : _n(O, "getSelection");
    },
    setSelection(O) {
      const R = an(O);
      if (!R) {
        ge?.warn(
          "setSelection refused: the position could not be resolved against the document currently being edited"
        );
        return;
      }
      f.current?.update(() => {
        const K = Qo(R, ie);
        K !== void 0 && (zn(K), (!Lt().isEditable() || dy(K.anchor) && dy(K.focus)) && f.current?.dispatchCommand(bn, void 0));
      });
    },
    setAnnotation(O, R, K, X, Ee) {
      let Ve, Fe, Ge, Tt;
      typeof X == "function" || X === void 0 ? (Ve = X, Fe = Ee) : (Ve = X.onClick, Fe = X.onRemove, Ge = X.onMouseEnter, Tt = X.onMouseLeave);
      const gt = an(O);
      if (!gt) {
        ge?.warn(
          `setAnnotation refused for ${R} "${K}": the range could not be resolved against the document currently being edited`
        );
        return;
      }
      d.current?.setAnnotation(
        gt,
        Gl(R),
        K,
        Ve,
        Fe,
        Ge,
        Tt
      );
    },
    removeAnnotation(O, R) {
      d.current?.removeAnnotation(Gl(O), R);
    },
    getAnnotationRanges(O, R) {
      return d.current?.getAnnotationRanges(Gl(O), R) ?? [];
    },
    formatPara(O) {
      ue("format a paragraph"), f.current?.update(
        () => {
          const R = w();
          if (!E(R)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${O}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const K = R.isBackward() ? R.focus : R.anchor, X = nt(K.getNode(), Ie);
          if (X) {
            const Ee = R.isBackward() ? R.anchor : R.focus, Fe = !R.isCollapsed() && !X.is(Ee.getNode()) && !X.isParentOf(Ee.getNode()) ? { key: Ee.key, offset: Ee.offset, type: Ee.type } : void 0, Ge = Kr();
            if (Ge.anchor.set(K.key, K.offset, K.type), Ge.focus.set(K.key, K.offset, K.type), zn(Ge), !Ff(O, ie)) {
              c?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${O}"`
              );
              return;
            }
            if (!Fe) return;
            const Tt = Q(Fe.key);
            if (!Tt?.isAttached()) return;
            const gt = Tt.getTopLevelElement();
            if (!gt) return;
            const st = X.getNextSibling();
            if (!ye(st)) return;
            let kt = st.getNextSibling();
            for (; kt; ) {
              const ki = kt.is(gt), Mn = kt.getNextSibling();
              if (ye(kt)) {
                const Or = Kr();
                Or.anchor.set(kt.getKey(), 0, "element"), Or.focus.set(kt.getKey(), kt.getChildrenSize(), "element"), zn(Or), gy(Or, O, ie);
              }
              if (ki) break;
              kt = Mn;
            }
            return;
          }
          gy(R, O, ie);
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
      if (Zt) throw new Error("Cannot remove character marker in readonly mode");
      fe(O);
      let R = !1;
      return f.current?.update(
        () => {
          const K = w();
          E(K) && (R = ET(K, O, ie));
        },
        { discrete: !0 }
      ), R;
    },
    replaceCharacterMarker(O, R) {
      if (Zt) throw new Error("Cannot replace character marker in readonly mode");
      fe(O), fe(R);
      let K = !1;
      return f.current?.update(
        () => {
          const X = w();
          E(X) && (K = P$(X, O, R));
        },
        { discrete: !0 }
      ), K;
    },
    extendCharacterMarker(O, R) {
      if (Zt) throw new Error("Cannot extend character marker in readonly mode");
      fe(O), R?.forEach(
        (X) => fe(X)
      );
      let K = !1;
      return f.current?.update(
        () => {
          const X = w();
          E(X) && (K = N$(
            X,
            O,
            R,
            ie
          ));
        },
        { discrete: !0 }
      ), K;
    },
    insertMarker(O) {
      if (Zt) throw new Error("Cannot insert marker in readonly mode");
      if (!n) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!f.current) return;
      if (!vf(O, Ce.extraValidMarkers))
        throw new Error(`Unsupported marker '${O}'`);
      const R = Cf(
        O,
        y,
        ie,
        Ce,
        ge,
        void 0,
        le
      );
      return R.action({ editor: f.current, reference: n }), R.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!$)
        return f.current?.getEditorState().read(() => n2());
    },
    applyMarkerMenuSelection(O, R) {
      if ($) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!n)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!f.current) return;
      if (O.kind !== "closeTag" && !vf(O.marker, Ce.extraValidMarkers))
        throw new Error(`Unsupported marker '${O.marker}'`);
      let K;
      return f.current.update(() => {
        K = f2(O, R, n, {
          expandedNoteKeyRef: y,
          viewOptions: ie,
          nodeOptions: Ce,
          logger: c,
          styleInfo: le
        });
      }), K;
    },
    splitParagraphWithMarker(O) {
      if ($) throw new Error("Cannot split paragraph in readonly mode");
      f.current && f.current.update(() => {
        Ff(O, ie);
      });
    },
    commitTypedMarker(O, R) {
      if ($) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!f.current) return !1;
      let K = !1;
      return f.current.update(() => {
        K = l2(O, R), K || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), K;
    },
    commitTypedCloser(O) {
      if ($) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!f.current) return !1;
      let R = !1;
      return f.current.update(() => {
        R = Bv(O), R || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), R;
    },
    insertNote(O, R, K) {
      ue("insert a note");
      const X = K && an(K);
      if (K && !X) {
        ge?.warn(
          `insertNote refused for \\${O}: the position could not be resolved against the document currently being edited`
        );
        return;
      }
      f.current?.update(
        () => {
          const Ee = fx(
            O,
            R,
            X,
            n,
            ie,
            Ce,
            ge
          );
          Ua(Ee, y);
        },
        { discrete: !0 }
      );
    },
    selectNote(O) {
      const R = f.current;
      if (!R) return;
      const K = De();
      if (typeof O == "string" || !K || Co(K)) {
        R.update(() => {
          const Ve = Tr(O);
          Ve && (Ha(Ve, ie), Ua(Ve, y));
        });
        return;
      }
      const X = Pq(Be())[O], Ee = X ? an({ start: { jsonPath: X } }) : void 0;
      Ee && R.update(() => {
        const [Ve, Fe] = Rn(Ee.start, ie);
        if (!Ve || Fe === void 0) return;
        const Ge = L(Ve) ? Ve : nt(Ve, L);
        L(Ge) ? (Ha(Ge, ie), Ua(Ge, y)) : v(Ve) && Ve.select(Fe, Fe);
      });
    },
    selectAfterNote(O) {
      const R = f.current;
      if (!R) return;
      const K = !ee(), X = K ? Ns(R, Qn) : void 0;
      if (R.update(
        () => {
          K && Ft(Qn);
          const Ee = Tr(O);
          Ee && hx(Ee);
        },
        { discrete: !0 }
      ), X?.(), K) {
        fu(R);
        const Ee = Ns(
          R,
          Qn
        );
        R.update(
          () => {
            Ft(Qn), R.dispatchCommand(bn, void 0);
          },
          { discrete: !0 }
        ), Ee();
      }
    },
    selectNoteTextOffset(O, R, K) {
      f.current?.update(() => {
        const X = Tr(O);
        if (!X) return;
        const Ee = K?.glyph;
        (K?.field === "category" ? $P(X, R, Ee) || Pg(X, 0) : Pg(X, R, Ee)) || Ha(X, ie), Ua(X, y);
      });
    },
    getNoteOps(O) {
      const R = f.current;
      return R ? Cs(R, () => {
        const K = Tr(O);
        if (K)
          return al(K);
      }) : void 0;
    },
    getOpsAfterNote(O) {
      const R = f.current;
      return R ? Cs(R, () => {
        const K = Tr(O);
        return K ? hy(K) : void 0;
      }) : void 0;
    },
    takeOpsAfterNote(O) {
      const R = f.current, K = R ? Cs(R, () => {
        const Fe = Tr(O);
        if (!Fe) return;
        const Ge = rp(Fe, "apply");
        return { ops: hy(Fe), notePosition: Ge };
      }) : void 0;
      if (!K) return;
      const { ops: X, notePosition: Ee } = K;
      if (X.length === 0 || Ee === void 0) return X;
      const Ve = X.reduce(
        (Fe, Ge) => Fe + (typeof Ge.insert == "string" ? Ge.insert.length : 1),
        0
      );
      return bi([{ retain: Ee + 1 }, { delete: Ve }], "remote", nd), X;
    },
    getNoteIndex(O) {
      const R = f.current;
      return R ? Cs(R, () => op(O)) : void 0;
    },
    getNoteKey(O) {
      const R = f.current;
      return R ? Cs(R, () => Tr(O)?.getKey()) : void 0;
    },
    highlightNote(O) {
      p.current?.setHighlightedNote(O);
    },
    get toolbarEndRef() {
      return h;
    }
  };
  j.current = uo, Uc(u, () => uo), G(() => {
    const O = f.current;
    if (O)
      return O.registerUpdateListener(({ editorState: R }) => {
        const K = R.read(py);
        K && (x.current = K);
      });
  }, []);
  const ps = re({ onUsjChange: s, viewOptions: ie, isBlockVerse: Bt, readSettledUsj: Be });
  ps.current = { onUsjChange: s, viewOptions: ie, isBlockVerse: Bt, readSettledUsj: Be };
  const Ma = Ae((O, R) => {
    const { editorState: K, dirtyElements: X, dirtyLeaves: Ee, tags: Ve } = O;
    if (X.size === 0 && Ee.size === 0) return;
    if (Ve.has(ua)) {
      const Mn = ps.current, Or = !Mn.isBlockVerse && Ms.deserializeEditorState(K, Mn.viewOptions);
      Or && (g.current = Or), V.current = g.current;
      return;
    }
    if (Jd(R)) return;
    if (fy.some((Mn) => Ve.has(Mn))) {
      m.current = !0;
      return;
    }
    const Fe = ps.current;
    if (Fe.isBlockVerse) return;
    Pb(R, K, Ve);
    const Ge = K.read(py);
    Ge && (x.current = Ge);
    const Tt = N1(O, {
      ignoreTags: fy
    }), gt = Tt ? [] : new As(K.read(() => w1(R, O))).chop().ops;
    if (!Tt) {
      const Mn = Ms.deserializeEditorState(K, Fe.viewOptions);
      Mn && (g.current = Mn);
    }
    if (!Fe.onUsjChange) return;
    const st = Fe.readSettledUsj();
    if (!st || gt.length === 0 && Zn(V.current, st)) return;
    if (V.current = st, gt.length === 0) {
      Fe.onUsjChange(st, void 0, "local", void 0);
      return;
    }
    const kt = bg(gt, K), ki = kt && !O.prevEditorState.read(() => Q(kt)) ? kt : void 0;
    Fe.onUsjChange(st, gt, "local", ki);
  }, []), hs = Ae(
    (O) => {
      He(O.contextMarker), o?.(O);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ tt(Dy, { initialConfig: ce, children: [
      /* @__PURE__ */ P(IN, { isEditable: !Zt }),
      /* @__PURE__ */ tt("div", { className: "editor-container", children: [
        Te ? /* @__PURE__ */ P(Yx, { onStateChange: hs }) : /* @__PURE__ */ P(
          "div",
          {
            className: "editor-toolbar-container" + (Zt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ P(
              Sq,
              {
                ref: h,
                editorRef: j,
                isReadonly: Zt,
                onStateChange: hs
              }
            )
          }
        ),
        /* @__PURE__ */ tt("div", { className: "editor-inner", children: [
          /* @__PURE__ */ P(Uy, { editorRef: f }),
          /* @__PURE__ */ P(
            HS,
            {
              contentEditable: /* @__PURE__ */ P(
                Ky,
                {
                  className: `editor-input usfm ${BA(ie).join(" ")}${ie.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ie.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: Pe
                }
              ),
              placeholder: /* @__PURE__ */ P(Aq, {}),
              ErrorBoundary: By
            }
          ),
          Te && /* @__PURE__ */ P(RN, {}),
          /* @__PURE__ */ P(Fy, {}),
          n && r && /* @__PURE__ */ P(iq, { scrRef: n, onScrRefChange: r }),
          n && !Te && /* @__PURE__ */ P(
            dO,
            {
              trigger: Gt,
              scrRef: n,
              contextMarker: be,
              getMarkerAction: (O) => Cf(
                O,
                y,
                ie,
                Ce,
                ge,
                void 0,
                le
              ),
              editableHarness: J
            }
          ),
          /* @__PURE__ */ P(
            UN,
            {
              scripture: ne,
              scriptureRef: g,
              nodeOptions: Ce,
              editorAdaptor: lr,
              viewOptions: ie,
              logger: ge
            },
            W
          ),
          /* @__PURE__ */ P(cw, { onChange: wr, viewOptions: ie }),
          /* @__PURE__ */ P(wq, { listener: Ma }),
          /* @__PURE__ */ P(I$, { viewOptions: ie }),
          /* @__PURE__ */ P(P1, { ref: d, logger: ge, viewOptions: ie }),
          /* @__PURE__ */ P(eN, { viewOptions: ie }),
          /* @__PURE__ */ P(hN, {}),
          /* @__PURE__ */ P(vN, {}),
          ie?.markerMode !== "editable" && /* @__PURE__ */ P(CN, { logger: ge }),
          /* @__PURE__ */ P(AN, { options: Nr }),
          /* @__PURE__ */ P(AR, { limit: Ye, viewOptions: ie }),
          /* @__PURE__ */ P($N, {}),
          /* @__PURE__ */ P(qN, {}),
          /* @__PURE__ */ P(KN, {}),
          /* @__PURE__ */ P(d2, {}),
          /* @__PURE__ */ P(
            W2,
            {
              viewOptions: ie,
              getMarker: qe,
              logger: ge,
              markerSettleDelayMs: Me,
              structureProtectionMode: Z,
              copyLimit: Ye
            }
          ),
          ie?.markerMode === "visible" && /* @__PURE__ */ P(ER, { viewOptions: ie, copyLimit: Ye }),
          /* @__PURE__ */ P(
            Q2,
            {
              styleInfo: le,
              viewOptions: ie,
              logger: ge
            }
          ),
          /* @__PURE__ */ P(BN, { ref: p }),
          /* @__PURE__ */ P(
            FN,
            {
              expandedNoteKeyRef: y,
              nodeOptions: Ce,
              viewOptions: ie,
              logger: ge
            }
          ),
          /* @__PURE__ */ P(aw, {}),
          /* @__PURE__ */ P(J1, {}),
          /* @__PURE__ */ P(xP, {}),
          /* @__PURE__ */ P(aL, { viewOptions: ie, logger: ge }),
          /* @__PURE__ */ P(lw, {}),
          /* @__PURE__ */ P(Gw, { structureProtectionMode: Z }),
          /* @__PURE__ */ P(Jw, { textDirection: Oe }),
          /* @__PURE__ */ P(Xw, {}),
          /* @__PURE__ */ P(uO, {}),
          l
        ] }),
        me && /* @__PURE__ */ P(mq, {})
      ] })
    ] }, ie.verseLayout ?? "inline")
  );
}), FD = pi(function(t, n) {
  const { children: r, ...i } = t;
  return /* @__PURE__ */ P(GC, { ref: n, ...i });
});
function my(e, t) {
  const n = v(e) ? r0(e, Ot, t) ?? [] : [], r = HM(e, Ot, t);
  return [.../* @__PURE__ */ new Set([...n, ...r])];
}
function Oq(e, t, n) {
  ib(Ot, e, t);
  for (const r of n) {
    const i = Q(r);
    i && kk(i, Ot, e);
  }
}
function $q(e, t) {
  const n = Array.from(t, (s) => Q(s)).filter(
    (s) => s !== null
  );
  n.sort((s, o) => s.isBefore(o) ? -1 : 1);
  const r = n[0];
  if (!r) return;
  if (v(r)) {
    const s = Ir(r).find(
      (a) => a.type === Ot && a.id === e
    ), o = Math.max(Bd(r)[0], s?.start ?? 0);
    r.select(o, o);
    return;
  }
  const i = r.getParent();
  i && i.select(r.getIndexWithinParent(), r.getIndexWithinParent());
}
function JC() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function Kc(e, t, n, r, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: n === void 0 ? JC() : n,
    timeStamp: r === void 0 ? performance.timeOrigin + performance.now() : r,
    type: "comment"
  };
}
function YC(e, t, n) {
  return {
    comments: t,
    id: n === void 0 ? JC() : n,
    quote: e,
    type: "thread"
  };
}
function yy(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function Rq(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Pu(e) {
  const t = e._changeListeners;
  for (const n of t)
    n();
}
class Iq {
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
    this._comments = t, Pu(this);
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
          const c = yy(a);
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
    this._comments = i, Pu(this);
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
          const c = yy(a);
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
    return this._comments = r, Pu(this), t.type === "comment" ? {
      index: s,
      markedComment: Rq(t)
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
    return t !== null ? t.doc.get("comments", Oh) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const n = new $h(), r = t.type, i = t.id;
    if (n.set("type", r), n.set("id", i), r === "comment")
      n.set("author", t.author), n.set("content", t.content), n.set("deleted", t.deleted), n.set("timeStamp", t.timeStamp);
    else {
      n.set("quote", t.quote);
      const s = new Oh();
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
      l_,
      (a) => (r !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), r()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      zt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof u_) {
            const u = l.target, f = l.delta;
            let d = 0;
            for (const p of f) {
              const h = p.insert, g = p.retain, m = p.delete, y = u.parent, k = u === n ? void 0 : y instanceof $h && this._comments.find((x) => x.id === y.get("id"));
              if (Array.isArray(h)) {
                const x = d;
                h.slice().reverse().forEach((S) => {
                  const _ = S.get("id"), B = S.get("type") === "thread" ? YC(
                    S.get("quote"),
                    S.get("comments").toArray().map(
                      (V) => Kc(
                        V.get("content"),
                        V.get("author"),
                        V.get("id"),
                        V.get("timeStamp"),
                        V.get("deleted")
                      )
                    ),
                    _
                  ) : Kc(
                    S.get("content"),
                    S.get("author"),
                    _,
                    S.get("timeStamp"),
                    S.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(B, k, x);
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
function Lq(e) {
  const [t, n] = Re(e.getComments());
  return G(() => e.registerOnChange(() => {
    n(e.getComments());
  }), [e]), t;
}
function qq({
  onClose: e,
  children: t,
  title: n,
  closeOnClickOutside: r
}) {
  const i = re(null);
  return G(() => {
    i.current !== null && i.current.focus();
  }, []), G(() => {
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
  }, [r, e]), /* @__PURE__ */ P("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ tt("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function Dq({
  onClose: e,
  children: t,
  title: n,
  closeOnClickOutside: r = !1
}) {
  return Ni(
    /* @__PURE__ */ P(qq, { onClose: e, title: n, closeOnClickOutside: r, children: t }),
    document.body
  );
}
function XC() {
  const [e, t] = Re(null), n = Ae(() => {
    t(null);
  }, []), r = ft(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ P(Dq, { onClose: n, title: s, closeOnClickOutside: a, children: o });
  }, [e, n]), i = Ae(
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
const Kq = {
  ...$T,
  paragraph: "CommentEditorTheme__paragraph"
};
function Uq(...e) {
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
      className: Uq(
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
function Bq({
  className: e
}) {
  return /* @__PURE__ */ P(Ky, { className: e || "ContentEditable__root" });
}
function Fq({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ P("div", { className: t || "Placeholder__root", children: e });
}
const by = Fc("INSERT_INLINE_COMMAND");
function zq({
  anchorKey: e,
  editor: t,
  showComments: n,
  onAddComment: r
}) {
  const i = re(null), s = Ae(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return G(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Xs(() => {
    s();
  }, [e, t, n, s]), /* @__PURE__ */ P("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ P("button", { className: "CommentPlugin_AddCommentBox_button", onClick: r, children: /* @__PURE__ */ P("i", { className: "icon add-comment" }) }) });
}
function jq({ onEscape: e }) {
  const [t] = Se();
  return G(() => t.registerCommand(
    Iy,
    (n) => e(n),
    vr
  ), [t, e]), null;
}
function QC({
  className: e,
  autoFocus: t,
  onEscape: n,
  onChange: r,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ P(Dy, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: Kq
  }, children: /* @__PURE__ */ tt("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ P(
      o_,
      {
        contentEditable: /* @__PURE__ */ P(Bq, { className: e }),
        placeholder: /* @__PURE__ */ P(Fq, { children: s }),
        ErrorBoundary: By
      }
    ),
    /* @__PURE__ */ P(s_, { onChange: r }),
    /* @__PURE__ */ P(Fy, {}),
    t !== !1 && /* @__PURE__ */ P(n_, {}),
    /* @__PURE__ */ P(jq, { onEscape: n }),
    /* @__PURE__ */ P(r_, {}),
    i !== void 0 && /* @__PURE__ */ P(Uy, { editorRef: i })
  ] }) });
}
function ZC(e, t) {
  return Ae(
    (n, r) => {
      n.read(() => {
        e(a_()), t(!c_(r.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function Vq({
  editor: e,
  cancelAddComment: t,
  submitAddComment: n
}) {
  const [r, i] = Re(""), [s, o] = Re(!1), a = re(null), c = ft(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = re(null), u = tS(), f = Ae(() => {
    e.getEditorState().read(() => {
      const g = w();
      if (E(g)) {
        l.current = g.clone();
        const m = g.anchor, y = g.focus, k = JS(
          e,
          m.getNode(),
          m.offset,
          y.getNode(),
          y.offset
        ), x = a.current;
        if (k !== null && x !== null) {
          const { left: S, bottom: _, width: U } = k.getBoundingClientRect(), B = YS(e, k);
          let V = B.length === 1 ? S + U / 2 - 125 : S - 125;
          V < 10 && (V = 10), x.style.left = `${V}px`, x.style.top = `${_ + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const ne = B.length, { container: se } = c, W = c.elements, he = W.length;
          for (let be = 0; be < ne; be++) {
            const He = B[be];
            let $ = W[be];
            $ === void 0 && ($ = document.createElement("span"), W[be] = $, se.appendChild($));
            const Te = `position:absolute;top:${He.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${He.left}px;height:${He.height}px;width:${He.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            $.style.cssText = Te;
          }
          for (let be = he - 1; be >= ne; be--) {
            const He = W[be];
            se.removeChild(He), W.pop();
          }
        }
      }
    });
  }, [e, c]);
  Xs(() => {
    f();
    const g = c.container, m = document.body;
    return m !== null ? (m.appendChild(g), () => {
      m.removeChild(g);
    }) : () => {
    };
  }, [c.container, f]), G(() => (window.addEventListener("resize", f), () => {
    window.removeEventListener("resize", f);
  }), [f]);
  const d = (g) => (g.preventDefault(), t(), !0), p = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const m = l.current;
        return m ? m.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), n(
        YC(g, [Kc(r, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = ZC(i, o);
  return /* @__PURE__ */ tt("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ P(
      QC,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: d,
        onChange: h
      }
    ),
    /* @__PURE__ */ tt("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
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
function Wq({
  submitAddComment: e,
  thread: t,
  placeholder: n
}) {
  const [r, i] = Re(""), [s, o] = Re(!1), a = re(null), c = tS(), l = ZC(i, o);
  return /* @__PURE__ */ tt(Ii, { children: [
    /* @__PURE__ */ P(
      QC,
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
            e(Kc(r, c), !1, t);
            const f = a.current;
            f !== null && f.dispatchCommand(US, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ P("i", { className: "send" })
      }
    )
  ] });
}
function eS({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: n,
  thread: r = void 0
}) {
  return /* @__PURE__ */ tt(Ii, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ tt("div", { className: "Modal__content", children: [
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
function ky({
  comment: e,
  deleteComment: t,
  thread: n,
  rtf: r
}) {
  const [i, s] = Re(0);
  G(() => {
    const u = () => {
      s(performance.timeOrigin + performance.now());
    };
    u();
    const f = window.setInterval(u, 6e4);
    return () => {
      window.clearInterval(f);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = XC();
  return /* @__PURE__ */ tt("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ tt("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ P("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ tt("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : r.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ P("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ tt(Ii, { children: [
      /* @__PURE__ */ P(
        di,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ P(
              eS,
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
function Hq({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: n,
  displayIndex: r,
  listRef: i,
  submitAddComment: s,
  markNodeMap: o
}) {
  const [a] = Se(), [c, l] = Re(0), [u, f] = XC(), d = ft(
    () => new Intl.RelativeTimeFormat("en", {
      localeMatcher: "best fit",
      numeric: "auto",
      style: "short"
    }),
    []
  );
  return G(() => {
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
      return /* @__PURE__ */ tt(
        "li",
        {
          onClick: () => {
            if (g) return;
            const y = o.get(h), k = document.activeElement;
            if (y !== void 0) {
              a.update(
                () => {
                  const S = Array.from(y)[0], _ = Q(S);
                  ae(_) && _.selectStart();
                },
                {
                  onUpdate() {
                    k !== null && k.focus();
                  }
                }
              );
              return;
            }
            const x = r.keysFor(Ot, h);
            x.size !== 0 && a.update(
              () => {
                $q(h, x);
              },
              {
                onUpdate() {
                  k !== null && k.focus();
                }
              }
            );
          },
          className: `CommentPlugin_CommentsPanel_List_Thread ${o.has(h) || r.keysFor(Ot, h).size > 0 ? "interactive" : ""} ${e.indexOf(h) === -1 ? "" : "active"}`,
          children: [
            /* @__PURE__ */ tt("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
              /* @__PURE__ */ tt("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
                "> ",
                /* @__PURE__ */ P("span", { children: p.quote })
              ] }),
              /* @__PURE__ */ P(
                di,
                {
                  onClick: () => {
                    f("Delete Thread", (y) => /* @__PURE__ */ P(
                      eS,
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
              ky,
              {
                comment: y,
                deleteComment: n,
                thread: p,
                rtf: d
              },
              y.id
            )) }),
            /* @__PURE__ */ P("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ P(
              Wq,
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
      ky,
      {
        comment: p,
        deleteComment: n,
        rtf: d
      },
      h
    );
  }) });
}
function Gq({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: n,
  submitAddComment: r,
  markNodeMap: i,
  displayIndex: s
}) {
  const o = re(null), a = n.length === 0;
  return /* @__PURE__ */ tt("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ P("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    a ? /* @__PURE__ */ P("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ P(
      Hq,
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
function tS() {
  const e = zy(), { yjsDocMap: t, name: n } = e;
  return t.has("comments") ? n : "Scripture User";
}
function Jq({
  providerFactory: e,
  setCommentStore: t,
  onChange: n,
  showCommentsContainerRef: r,
  commentContainerRef: i,
  logger: s
}) {
  const o = zy(), [a] = Se(), c = ft(() => {
    const ne = new Iq(a, s);
    return n && ne.registerOnChange(n), t?.(ne), ne;
  }, [a, s, n, t]), l = Lq(c), u = ft(() => /* @__PURE__ */ new Map(), []), f = Ex(a), [d, p] = Re(), [h, g] = Re([]), [m, y] = Re(!1), [k, x] = Re(!1), { yjsDocMap: S } = o;
  G(() => {
    if (e) {
      const ne = e("comments", S);
      return c.registerCollaboration(ne);
    }
    return () => {
    };
  }, [c, e, S]);
  const _ = Ae(() => {
    a.update(() => {
      const ne = w();
      ne !== null && (ne.dirty = !0);
    }), y(!1);
  }, [a]), U = Ae(
    (ne, se) => {
      if (ne.type === "comment") {
        const W = c.deleteCommentOrThread(ne, se);
        if (!W)
          return;
        const { markedComment: he, index: be } = W;
        c.addComment(he, se, be);
      } else {
        c.deleteCommentOrThread(ne);
        const W = se !== void 0 ? se.id : ne.id, he = u.get(W), be = f.keysFor(Ot, W);
        (he !== void 0 && he.size > 0 || be.size > 0) && setTimeout(() => {
          a.update(() => {
            Oq(W, he ?? [], be);
          });
        });
      }
    },
    [c, f, a, u]
  ), B = Ae(
    (ne, se, W, he) => {
      c.addComment(ne, W), se && (a.update(() => {
        E(he) && Gd(he, Ot, ne.id);
      }), y(!1));
    },
    [c, a]
  );
  G(() => {
    const ne = [];
    let se;
    const W = () => {
      se = window.setTimeout(() => {
        x(!0);
      }, 0);
    };
    for (const he of h) {
      const be = u.get(he) ?? [];
      for (const He of be) {
        const $ = a.getElementByKey(He);
        $ !== null && ($.classList.add("selected"), ne.push($), W());
      }
      f.keysFor(Ot, he).size > 0 && (f.setStateClass(Ot, he, "selected", !0), W());
    }
    return () => {
      se !== void 0 && window.clearTimeout(se);
      for (const he of ne)
        he.classList.remove("selected");
      for (const he of h)
        f.setStateClass(Ot, he, "selected", !1);
    };
  }, [h, f, a, u]), G(() => {
    if (!a.hasNodes([mt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const ne = /* @__PURE__ */ new Map();
    return it(
      ad(
        a,
        mt,
        (se) => Ki(se.getTypedIDs()),
        (se, W) => {
          for (const [he, be] of Object.entries(se.getTypedIDs()))
            be.forEach((He) => {
              W.addID(he, He);
            });
        }
      ),
      a.registerMutationListener(
        mt,
        (se) => {
          a.getEditorState().read(() => {
            for (const [W, he] of se) {
              const be = Q(W);
              let He = [];
              he === "destroyed" ? He = ne.get(W) ?? [] : ae(be) && (He = be.getTypedIDs()[Ot] ?? []);
              for (const $ of He) {
                let Z = u.get($);
                ne.set(W, He), he === "destroyed" ? Z !== void 0 && (Z.delete(W), Z.size === 0 && u.delete($)) : (Z === void 0 && (Z = /* @__PURE__ */ new Set(), u.set($, Z)), Z.has(W) || Z.add(W));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: se, tags: W }) => {
        se.read(() => {
          const he = w();
          let be = !1, He = !1;
          if (E(he)) {
            const { anchor: $ } = he, Z = $.getNode();
            if (v(Z)) {
              const Te = my(Z, $.offset);
              g(Te), be = !0, he.isCollapsed() || (p(Z.getKey()), He = !0);
            } else if ($.type === "element" && A(Z)) {
              const Te = Z.getChildren(), Pe = /* @__PURE__ */ new Set();
              for (const [Oe, Gt] of [
                [Te[$.offset - 1], !0],
                [Te[$.offset], !1]
              ]) {
                if (!Oe) continue;
                const Cn = Gt && v(Oe) ? Oe.getTextContentSize() : 0;
                my(Oe, Cn).forEach((Le) => Pe.add(Le));
              }
              Pe.size > 0 && (g([...Pe]), be = !0);
            }
          }
          be || g(($) => $.length === 0 ? $ : []), He || p(null), !W.has("collaboration") && E(he) && y(!1);
        });
      }),
      a.registerCommand(
        by,
        () => {
          const se = window.getSelection();
          return se !== null && se.removeAllRanges(), y(!0), !0;
        },
        qi
      )
    );
  }, [a, u]);
  const V = () => {
    a.dispatchCommand(by, void 0);
  };
  return /* @__PURE__ */ tt(Ii, { children: [
    m && Ni(
      /* @__PURE__ */ P(
        Vq,
        {
          editor: a,
          cancelAddComment: _,
          submitAddComment: B
        }
      ),
      document.body
    ),
    d != null && !m && Ni(
      /* @__PURE__ */ P(
        zq,
        {
          anchorKey: d,
          editor: a,
          showComments: k,
          onAddComment: V
        }
      ),
      document.body
    ),
    r !== null && Ni(
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
    k && Ni(
      /* @__PURE__ */ P(
        Gq,
        {
          comments: l,
          submitAddComment: B,
          deleteCommentOrThread: U,
          activeIDs: h,
          markNodeMap: u,
          displayIndex: f
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function Yq() {
  const e = re(void 0), t = Ae((n) => {
    e.current = n;
  }, []);
  return [e, t];
}
function Xq(e, t) {
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
function Qq(e, t) {
  G(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (n) => {
      Xq(n, t);
    };
  }, [t, e]);
}
const zD = pi(function(t, n) {
  const r = re(null), i = re(!0), s = re(null), [o, a] = Re(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: f, ...d } = t, { logger: p, options: { isReadonly: h, view: g } = {} } = t, m = (h ?? !1) || Xo(g), [y, k] = Yq();
  Qq(d, y), G(() => {
    if (process.env.NODE_ENV !== "production") {
      const _ = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(_), p || console.warn(_);
    }
  }, [p]), Uc(n, () => ({
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
    setMarkerSettleSuspended(_) {
      r.current?.setMarkerSettleSuspended(_);
    },
    setTransientInput(_) {
      r.current?.setTransientInput(_);
    },
    setUsj(_) {
      r.current?.setUsj(_);
    },
    applyUpdate(_, U) {
      r.current?.applyUpdate(_, U);
    },
    replaceEmbedUpdate(_, U) {
      return r.current?.replaceEmbedUpdate(_, U);
    },
    getSelection() {
      return r.current?.getSelection();
    },
    setSelection(_) {
      r.current?.setSelection(_);
    },
    setAnnotation(_, U, B, V, ne) {
      typeof V == "function" || V === void 0 ? r.current?.setAnnotation(_, U, B, V, ne) : r.current?.setAnnotation(_, U, B, V);
    },
    removeAnnotation(_, U) {
      r.current?.removeAnnotation(_, U);
    },
    getAnnotationRanges(_, U) {
      return r.current?.getAnnotationRanges(_, U) ?? [];
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
    replaceCharacterMarker(_, U) {
      return r.current?.replaceCharacterMarker(_, U) ?? !1;
    },
    extendCharacterMarker(_, U) {
      return r.current?.extendCharacterMarker(_, U) ?? !1;
    },
    insertMarker(_) {
      return r.current?.insertMarker(_);
    },
    getMarkerMenuContext() {
      return r.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(_, U) {
      return r.current?.applyMarkerMenuSelection(_, U);
    },
    splitParagraphWithMarker(_) {
      r.current?.splitParagraphWithMarker(_);
    },
    commitTypedMarker(_, U) {
      return r.current?.commitTypedMarker(_, U) ?? !1;
    },
    commitTypedCloser(_) {
      return r.current?.commitTypedCloser(_) ?? !1;
    },
    insertNote(_, U, B) {
      r.current?.insertNote(_, U, B);
    },
    selectNote(_) {
      r.current?.selectNote(_);
    },
    selectAfterNote(_) {
      r.current?.selectAfterNote(_);
    },
    selectNoteTextOffset(_, U, B) {
      r.current?.selectNoteTextOffset(_, U, B);
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
  const x = Ae(
    (_, U, B, V) => {
      if (!u) return;
      const ne = y.current?.getComments();
      u(_, ne, U, B, V);
    },
    [y, u]
  ), S = Ae(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const _ = y.current?.getComments();
    l(_);
  }, [y, i, l]);
  return G(() => (a(r.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ P(i_, { children: /* @__PURE__ */ tt(GC, { ref: r, onUsjChange: x, ...d, children: [
    /* @__PURE__ */ P(
      Jq,
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
function Pi(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function Zq(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function eD(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const tD = /^[#\w().,%/\s-]+$/;
function Rr(e) {
  return e != null;
}
const nD = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, rD = {
  left: "right",
  right: "left"
}, iD = "var(--usj-font-fallback, serif)";
function nS(e, t) {
  const n = [e];
  return t && t !== e && n.push(t), `font-family: ${n.map((i) => `"${Zq(i)}"`).join(", ")}, ${iD}`;
}
const Xf = ".editor-input.usfm", sD = /^[\w.#[\]="':()>+~*,\s-]+$/;
function oD(e) {
  return sD.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Xf}".`
  ), Xf);
}
function aD(e, t, n, r, i) {
  const s = [];
  if (t.fontName && s.push(nS(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (tD.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Rr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Rr(t.firstLineIndent) && s.push(`text-indent: ${Pi(t.firstLineIndent * 20 * n)}vw`), Rr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${r ? "right" : "left"}: ${Pi(t.leftMargin * 20 * n)}vw`), Rr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${r ? "left" : "right"}: ${Pi(t.rightMargin * 20 * n)}vw`
  ), Rr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${Pi(t.spaceBefore * n)}pt`), Rr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${Pi(t.spaceAfter * n)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = nD[r ? rD[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const xy = { c: 150, ca: 133, cp: 150 };
function Ty(e, t) {
  return e && Rr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function cD(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Rr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const r = Ty(e.markers.c, xy.c);
  return ["ca", "cp"].map((i) => {
    const s = Ty(
      e.markers[i],
      xy[i]
    ), o = Pi(s * 100 / r);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function jD(e, t = {}) {
  const { zoom: n = 1, rtl: r = !1, containerSelector: i = Xf } = t, s = oD(i), o = [], a = [];
  e.defaultFont && a.push(nS(e.defaultFont)), Rr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Pi(e.defaultFontSize * n)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = aD(c, l, n, r, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${eD(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...cD(e, s)), o.join(`
`);
}
export {
  jk as BLOCK_VERSE_VIEW_MODE,
  C as CategoryType,
  FD as Editorial,
  Bo as GENERATOR_NOTE_CALLER,
  jy as HIDDEN_NOTE_CALLER,
  zD as Marginal,
  T as MarkerType,
  zk as PARAGRAPH_STRUCTURE_VIEW_MODE,
  lp as STANDARD_VIEW_MODE,
  pc as defaultStyleInfo,
  BD as directionToNames,
  HP as filterAndRankItems,
  jD as generateUsjCss,
  KD as getDefaultViewMode,
  ll as getDefaultViewOptions,
  VR as getEnterMenuItems,
  jR as getMarkerMenuItems,
  UD as getViewMode,
  dp as getViewOptions,
  Xo as isBlockVerseLayout,
  Zr as isInsertEmbedOpOfType,
  qA as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
