import { jsx as M, jsxs as we, Fragment as zn } from "react/jsx-runtime";
import { forwardRef as si, useState as me, useRef as Z, useCallback as he, useEffect as j, useMemo as Le, memo as jk, createContext as fh, useContext as ph, Children as Vk, isValidElement as Wk, cloneElement as Hk, useImperativeHandle as Nl, useLayoutEffect as Xs } from "react";
import { assertSafeKey as Ye, isValidBookCode as Gk, MARKER_OBJECT_PROPS as Jk, USJ_VERSION as zr, USJ_TYPE as Br, indexesFromUsjJsonPath as rr, isUsjTextContentLocation as Bn, usjJsonPathFromIndexes as lt, isUsjPropertyValueLocation as Lo, isUsjClosingMarkerLocation as Do, isUsjClosingAttributeMarkerLocation as Uo, isUsjAttributeKeyLocation as Fo, isUsjAttributeMarkerLocation as Rl, isUsjMarkerLocation as hh, getUsjDocumentLocationTypeName as Yk, EMPTY_USJ as gh } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as He, $parseSerializedNode as Hi, createCommand as $l, DecoratorNode as Qs, ElementNode as fr, isHTMLElement as oi, TextNode as Ue, $isRangeSelection as O, $isTextNode as S, createState as Gi, $getState as re, ParagraphNode as ql, $isRootNode as Mr, $createTextNode as ve, $getSelection as $, $setState as ht, $isElementNode as R, $getCommonAncestor as Xk, $isLineBreakNode as xa, NODE_STATE_KEY as jn, $getEditor as Yt, $isDecoratorNode as Il, HISTORIC_TAG as Ta, $getNodeByKey as G, $getRoot as ye, $createRangeSelection as Zs, $createPoint as _s, $setSelection as mn, $getCharacterOffsets as mh, KEY_DOWN_COMMAND as Jr, COMMAND_PRIORITY_HIGH as Be, SELECTION_INSERT_CLIPBOARD_NODES_COMMAND as Qk, COMMAND_PRIORITY_CRITICAL as Cr, $getNearestNodeFromDOMNode as Ji, HISTORY_MERGE_TAG as yh, CLICK_COMMAND as va, COMMAND_PRIORITY_EDITOR as Vn, isDOMNode as bh, CONTROLLED_TEXT_INSERTION_COMMAND as Ll, PASTE_COMMAND as Kr, CUT_COMMAND as Wn, DROP_COMMAND as Dl, DELETE_CHARACTER_COMMAND as Zk, DELETE_WORD_COMMAND as ex, DELETE_LINE_COMMAND as tx, COPY_COMMAND as Ca, COMMAND_PRIORITY_NORMAL as qi, SELECTION_CHANGE_COMMAND as Er, BLUR_COMMAND as Ul, $addUpdateTag as Hn, SKIP_DOM_SELECTION_TAG as rx, CLEAR_HISTORY_COMMAND as nx, COMMAND_PRIORITY_LOW as It, $getPreviousSelection as ix, $isRootOrShadowRoot as sx, CAN_UNDO_COMMAND as ox, CAN_REDO_COMMAND as ax, $isNodeSelection as kh, DRAGSTART_COMMAND as cx, $createNodeSelection as xh, getDOMSelectionFromTarget as lx, $onUpdate as ux, KEY_ENTER_COMMAND as Th, LineBreakNode as vh, $copyNode as dx, FOCUS_COMMAND as fx, createEditor as Ch, KEY_ESCAPE_COMMAND as Sh, INSERT_PARAGRAPH_COMMAND as Ko, UNDO_COMMAND as _h, REDO_COMMAND as Mh, CLEAR_EDITOR_COMMAND as px } from "lexical";
import { addClassNamesToElement as Ts, removeClassNamesFromElement as Po, $findMatchingParent as it, $dfsIterator as Fl, $dfs as Yi, mergeRegister as et, registerNestedElementResolver as Kl, $unwrapNode as Nc, IS_APPLE as zo } from "@lexical/utils";
import { useLexicalNodeSelection as hx } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Tr } from "fast-equals";
import Ri from "quill-delta";
import { useLexicalComposerContext as de } from "@lexical/react/LexicalComposerContext";
import { copyToClipboard as gx, $getHtmlContent as mx, $getLexicalContent as yx } from "@lexical/clipboard";
import { TreeView as bx } from "@lexical/react/LexicalTreeView";
import * as kx from "react-dom";
import { createPortal as Un } from "react-dom";
import { LexicalComposer as Eh } from "@lexical/react/LexicalComposer";
import { ContentEditable as Ah } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Ph } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as wh } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Oh } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as xx } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as Tx, createDOMRange as vx, createRectsFromDOMRange as Cx } from "@lexical/selection";
import { autoUpdate as Sx, computePosition as _x, shift as Mx, flip as Ex } from "@floating-ui/dom";
import { $generateNodesFromDOM as Ax } from "@lexical/html";
import { AutoFocusPlugin as Px } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as wx } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Nh, LexicalCollaboration as Ox } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Nx } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Rx } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as $x, $isRootTextContentEmpty as qx } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Ix } from "@lexical/yjs";
import { Array as Ld, Map as Dd, YArrayEvent as Lx } from "yjs";
const nc = (e) => He(Hi(e)), Dx = {
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
function Rh(e) {
  return Dx[e];
}
const q = " ", Bo = "​", Xt = q, zl = `${q}|`, Sr = "p", jo = "+", $h = "-", Xi = "immutable-note-caller", qh = "immutable-verse", Vo = "chapter", Rc = "verse", Ud = "invalid", Ux = "text-spacing", Fx = "formatted-font", Kx = "marker-", Sa = "external-usj-mutation", zx = "selection-change", Is = "cursor-change", Bl = $l("APP_PLACED_CARET_COMMAND"), $c = "annotation-change", jl = "delta-change", Ih = "marker-settle", Bx = [
  Sa,
  zx,
  Is,
  $c,
  jl
], Gn = "zmsc-s", Ii = "zmsc-e", jx = [Gn, Ii], Vx = [
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
  Ii
], Lh = 1, Vl = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Wx = Vl.filter((e) => e !== "sid" && e !== "eid");
class ar extends Qs {
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
    return new ar(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return Uh().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Vx.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: Lh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Dh(e) {
  return jx.includes(e);
}
function Uh(e, t, r, n, i) {
  return He(new ar(e, t, r, n, void 0, i));
}
function Pe(e) {
  return e instanceof ar;
}
const Wl = "f", Hx = [
  // Footnote
  Wl,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function vs(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const Gx = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Fh = 1;
class $e extends fr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Wl, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (vs(t) === "crossref" ? $h : jo), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => Yx(t) ? {
        conversion: Jx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Hl().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Hx.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", vs(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", vs(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && oi(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", vs(this.getMarker()))), { element: r };
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
      version: Fh
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
function Jx(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Hl(t, r, n) };
}
function Hl(e, t, r, n, i) {
  return He(new $e(e, t, r, n, i));
}
function Yx(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return $e.isValidMarker(t) && e.classList.contains($e.getType());
}
function D(e) {
  return e instanceof $e;
}
var k;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(k || (k = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const qc = {
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
}, Rn = {
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
}, Fd = {
  p: { children: Rn },
  q: { children: Rn },
  q1: { children: Rn },
  q2: { children: Rn },
  q3: { children: Rn },
  q4: { children: Rn },
  b: { children: Rn },
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
function _r(e) {
  const t = Object.hasOwn(qc, e) ? qc[e] : void 0, r = Object.hasOwn(Fd, e) ? Fd[e] : void 0;
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
const Kh = "v", zh = "c", $n = "fig", Kd = "tr", Ic = "esb", Bh = "esbe", Xx = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Qx = {
  "": "start",
  c: "center",
  r: "end"
};
function Zx(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function zd(e) {
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
const eT = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function tT(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Bo && s + 1 < e.length && zd(e[s + 1]) || (zd(o) ? (r || (i = t.length, t += o), r = !0) : eT.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function rT(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function nT(e, t) {
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
const iT = /^(?:qt[1-5]?|ts)-[se]$/;
function _a(e) {
  return iT.test(e) || Dh(e);
}
function ic(e, t) {
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
function sT(e, t, r) {
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
      const g = e.indexOf("\\", i), m = g === -1 ? e.length : g;
      a(tT(e.slice(i, m))), i = m;
      continue;
    }
    const c = i, { name: l, next: u } = nT(e, i + 1);
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
    if (l === Kh) {
      const { word: g, next: m } = ic(e, i);
      i = m, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === zh) {
      const { word: g, next: m } = ic(e, i);
      i = m, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, h = t(p)?.type;
    if (h === b.Note || h === void 0 && $e.isValidMarker(l)) {
      const { word: g, next: m } = ic(e, i);
      i = m, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (h === b.Milestone || h === void 0 && _a(l)) {
      const g = pT(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const m = e.indexOf("\\", i), x = m === -1 ? e.length : m;
        o(e.slice(c, x)), i = x;
      }
      continue;
    }
    h === b.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : h === b.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Wo(p) ? (d(), Wo(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Ic || l === Bh ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const Bd = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Wo(e) {
  return Object.hasOwn(Bd, e) ? Bd[e] : void 0;
}
function oT(e) {
  return Wo(e) !== void 0;
}
const aT = /([-\w]+)\s*=\s*"(.*?)"/g, cT = /[\s\u200B]*[\n\r][\s\u200B]*/g, jh = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function eo(e) {
  return jh[e];
}
const lT = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function uT(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function Ma(e, t, r = jh[t]) {
  const n = e.replace(cT, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(aT)];
  if (s.length > 0) {
    if (!uT(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      lT.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function to(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function dT(e) {
  const t = Yr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function fT(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = Ma(e.slice(n + 1, i), r, to(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function pT(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Ma(s.slice(o + 1), r, to(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = fT(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function Ur(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", q);
}
function qn(e) {
  return e.content || (e.content = []), e.content;
}
function Yr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u;
  const d = () => u ? qn(u) : r;
  let f = !1;
  const p = () => {
    if (s)
      return o.length > a ? qn(o[o.length - 1].object) : qn(s);
    if (o.length > 0)
      return qn(o[o.length - 1].object);
    if (!i) {
      if (f && !n)
        return d();
      i = { type: "para", marker: Sr, content: [] }, d().push(i);
    }
    return qn(i);
  }, h = (te) => {
    const z = p();
    typeof te == "string" && typeof z[z.length - 1] == "string" ? z[z.length - 1] = z[z.length - 1] + te : z.push(te);
  }, g = (te) => {
    for (let z = te; z < o.length; z += 1) {
      const oe = o[z].object;
      oe.closed = "false";
    }
  }, m = () => {
    g(0), o.length = 0;
  }, x = (te) => {
    s && (o.length > a && (g(a), o.length = a), a = 0, te || (s.closed = "false"), s = void 0);
  }, v = () => {
    c = void 0, l = void 0;
  }, _ = (te) => {
    if (!l)
      return !1;
    const z = Xx.exec(te);
    if (!z || !Zx(z))
      return !1;
    m();
    const [, oe, We, Qe] = z, ge = {
      type: "table:cell",
      marker: Qe ? te.slice(0, te.indexOf("-")) : te,
      align: Qx[oe],
      content: []
    };
    return Qe && (ge.colspan = String(Number(Qe) + 1 - Number(We))), qn(l).push(ge), i = ge, !0;
  }, A = (te) => {
    u && (te || (u.closed = "false"), u = void 0);
  };
  let E, P = "", T;
  const B = () => {
    P && h(Ur(P)), P = "";
  }, V = (te = !1) => {
    E?.type === "sidebar" ? P = "" : te && P.endsWith(`
`) && (P = P.slice(0, -1)), E = void 0, B();
  }, W = () => {
    if (!T)
      return;
    const te = { type: "char", marker: T.marker, content: [] };
    T.value && (te.content = [Ur(T.value)]), p().push(te), o.push({ object: te }), T = void 0;
  }, X = (te, z) => {
    f = !1, v(), m(), x(!1), i = { type: "para", marker: te, content: [] }, z && (i.content = [Ur(z)]), d().push(i);
  }, ue = () => {
    T && (X(T.marker, T.value), T = void 0);
  };
  let Y;
  const le = () => {
    if (Y) {
      if (Y.shape === "para")
        X($n, Y.value);
      else {
        const te = { type: "char", marker: $n, content: [] };
        Y.value && (te.content = [Ur(Y.value)]), p().push(te), o.push({ object: te });
      }
      Y = void 0;
    }
  }, qe = sT(e, t?.getMarker ?? _r, n);
  for (let te = 0; te < qe.length; te++) {
    const z = qe[te];
    if (T) {
      if (z.kind === "text") {
        T.value += z.text;
        continue;
      }
      if (T.shape === "char" && z.kind === "end" && z.marker.replace(/^\+/, "") === T.marker) {
        if (T.value.trim() === "") {
          p().push({ type: "char", marker: T.marker, content: [] }), T = void 0, V();
          continue;
        }
        Object.assign(T.target, {
          [T.attrName]: Ur(T.value.trim())
        });
        const oe = T.marker;
        if (T = void 0, oe === "ca") {
          const We = qe[te + 1];
          We?.kind === "text" && /^[\s\u200B]*$/.test(We.text) && te++;
        }
        continue;
      }
      if (T.shape === "para" && (z.kind === "para" || z.kind === "chapter")) {
        const oe = T.value.replace(/[\s\u200B]+$/, "");
        oe === "" ? (X(T.marker), T = void 0) : (Object.assign(T.target, { [T.attrName]: Ur(oe) }), T = void 0);
      } else {
        E = void 0, (z.kind === "para" || z.kind === "chapter") && T.value.endsWith(`
`) && (T.value = T.value.slice(0, -1)), T.shape === "para" ? ue() : W(), te--;
        continue;
      }
    }
    if (Y) {
      if (z.kind === "text" || z.kind === "optbreak") {
        Y.value += z.kind === "text" ? z.text : "//";
        continue;
      }
      if (z.kind === "end" && z.marker.replace(/^\+/, "") === $n) {
        const oe = Y.value.indexOf("|"), We = oe >= 0 ? Ma(Y.value.slice(oe + 1), $n) : void 0;
        if (We) {
          const Qe = {};
          for (const [Rt, ss] of Object.entries(We))
            Qe[Rt === "src" ? "file" : Rt] = ss;
          const ge = {
            type: "figure",
            marker: $n,
            ...Qe
          }, Ir = Y.value.slice(0, oe);
          Ir && (ge.content = [Ur(Ir)]), h(ge), Y = void 0;
          continue;
        }
      }
      le(), te--;
      continue;
    }
    if (E)
      if (z.kind === "text") {
        if (z.text.includes(`
`) && /^[\s\u200B]*$/.test(z.text)) {
          P += z.text;
          continue;
        }
        V();
      } else if (z.kind === "charOpen" || z.kind === "para") {
        const oe = z.kind === "para" || !z.isNested ? Wo(z.marker) : void 0;
        if (oe && oe.targetTypes.includes(E.type)) {
          P = "", T = {
            target: E,
            attrName: oe.attrName,
            marker: z.marker,
            shape: oe.shape,
            value: ""
          };
          continue;
        }
        V(z.kind === "para");
      } else
        V(z.kind === "chapter");
    if (!s && !n && (z.kind === "charOpen" && !z.isNested && z.marker === $n || z.kind === "para" && z.marker === $n)) {
      m(), Y = { shape: z.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (z.kind) {
      case "text": {
        let oe = z.text;
        if (!s && oe.endsWith(`
`)) {
          const We = qe[te + 1];
          (We === void 0 || We.kind === "para" || We.kind === "chapter") && (oe = oe.slice(0, -1));
        }
        oe && h(Ur(oe));
        break;
      }
      case "para": {
        const oe = !s && !n;
        if (oe && z.marker === Kd) {
          m(), c || (c = { type: "table", content: [] }, d().push(c)), l = { type: "table:row", marker: Kd, content: [] }, qn(c).push(l), i = l, f = !1;
          break;
        }
        if (oe && _(z.marker))
          break;
        if (v(), !n && z.marker === Ic) {
          m(), x(!1), A(!1), u = { type: "sidebar", marker: Ic, content: [] }, r.push(u), i = void 0, E = u, f = !1;
          break;
        }
        if (z.marker === Bh && u) {
          m(), x(!1), A(!0), i = void 0;
          break;
        }
        X(z.marker);
        break;
      }
      case "verse": {
        x(!1);
        const oe = { type: "verse", marker: Kh, number: z.number };
        h(oe), E = oe;
        break;
      }
      case "chapter": {
        m(), x(!1), v(), A(!1), i = void 0;
        const oe = {
          type: "chapter",
          marker: zh,
          number: z.number
        };
        r.push(oe), E = oe, f = !0;
        break;
      }
      case "note": {
        x(!1);
        const oe = p();
        s = { type: "note", marker: z.marker, caller: z.caller, content: [] }, a = o.length, oe.push(s), E = s;
        break;
      }
      case "charOpen": {
        if (!z.isNested && !s && !n && _(z.marker))
          break;
        if (!z.isNested) {
          const Qe = s ? a : 0;
          g(Qe), o.length = Qe;
        }
        const oe = p(), We = { type: "char", marker: z.marker, content: [] };
        oe.push(We), o.push({ object: We });
        break;
      }
      case "end": {
        const oe = z.marker.replace(/^\+/, ""), We = s ? a : 0, Qe = o.findLastIndex((ge, Ir) => Ir >= We && ge.object.marker === oe);
        Qe >= 0 ? (hT(o[Qe].object), g(Qe + 1), o.length = Qe) : s && s.marker === oe ? x(!0) : (g(We), o.length = We, h({ type: "unmatched", marker: `${z.marker}*` }));
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
  if (Y && le(), T)
    if (T.shape === "para") {
      const te = T.value.replace(/[\s\u200B]+$/, "");
      te === "" ? X(T.marker) : Object.assign(T.target, { [T.attrName]: Ur(te) }), T = void 0;
    } else
      T.value.endsWith(`
`) && (T.value = T.value.slice(0, -1)), W();
  m(), x(!1), A(!1);
  const Fe = (te) => {
    for (const z of te)
      typeof z != "string" && z.content && (Fe(z.content), z.content.length === 0 && delete z.content);
  };
  return Fe(r), r;
}
function hT(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = Ma(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
function Oe(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function Ge(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Ht(e, t) {
  let r = Oe(e);
  return t && (r += `${q}${t}`), r += " ", r;
}
function Ut(e) {
  return " " + e + q;
}
const gT = 1;
class nr extends Ue {
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
    return new nr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return gt().updateFromJSON(t);
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
      version: gT
    };
  }
}
function gt(e, t, r) {
  return He(new nr(e, t, void 0, r));
}
function w(e) {
  return e instanceof nr;
}
function ro(e) {
  return e?.type === nr.getType();
}
function Mn(e) {
  return e.getTextContent() === Ln(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function mT(e) {
  e.setTextContent(Ln(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Ln(e, t, r = !1) {
  return t === "closing" ? Ge(e, r) : t === "selfClosing" ? Ge("") : Oe(e, r);
}
const Lt = "internal-comment", yT = [Lt], Vh = Object.freeze({}), Lc = Object.freeze({}), Dc = Object.freeze({}), Uc = Object.freeze({}), Fc = Object.freeze({}), bT = 1, vi = /* @__PURE__ */ new Map(), ds = /* @__PURE__ */ new Map(), Ci = /* @__PURE__ */ new Map(), Si = /* @__PURE__ */ new Map();
class Ze extends fr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Vh, r, n, i, s, o) {
    super(o), this.__typedIDs = Co(t), this.__typedOnClicks = sc(r), this.__typedOnRemoves = oc(n), this.__typedOnMouseEnters = ac(i), this.__typedOnMouseLeaves = cc(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Co(t.__typedIDs), n = sc(t.__typedOnClicks), i = oc(t.__typedOnRemoves), s = ac(t.__typedOnMouseEnters), o = cc(t.__typedOnMouseLeaves);
    return new Ze(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return yT.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Jn().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: bT
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    Ts(n, ...Wh(t.theme, this.__typedIDs));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = Fn(n.theme.typedMark, s), d = Fn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && Ts(r, u) : l === 0 && Po(r, u), c === 1 ? l === 2 && Ts(r, d) : l === 1 && Po(r, d));
      const f = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || Po(r, Fn("annotationId", h));
      for (const h of a)
        f.has(h) || Ts(r, Fn("annotationId", h));
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
    return pe(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = Co(r.__typedIDs);
    r.__typedIDs = Co(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Ho(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = sc(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return pe(t) ? vi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = oc(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return pe(t) ? ds.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = ac(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return pe(t) ? Ci.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = cc(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return pe(t) ? Si.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!pe(a))
      return;
    Ye(t), Ye(r);
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
    if (!pe(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Ho(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Jn(this.__typedIDs, this.getTypedOnClicks());
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
    if (!O(r) || n === "html")
      return !1;
    const i = r.anchor, s = r.focus, o = i.getNode(), a = s.getNode(), l = r.isBackward() ? i.offset - s.offset : s.offset - i.offset;
    return this.isParentOf(o) && this.isParentOf(a) && this.getTextContent().length === l;
  }
  excludeFromCopy(t) {
    return t !== "clone";
  }
  remove(t) {
    const r = this.getWritable(), n = this.getTypedIDs();
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), vi.delete(r.getKey()), ds.delete(r.getKey()), Ci.delete(r.getKey()), Si.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
    const n = vi.get(this.getKey());
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
  getOrCreateDOMMouseLeaveListener(t) {
    return this.__domOnMouseLeaveListener || (this.__domOnMouseLeaveListener = (r) => {
      this.handleDOMMouseLeave(r, t);
    }), this.__domOnMouseLeaveListener;
  }
  handleDOMMouseLeave(t, r) {
    const n = Si.get(this.getKey());
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Lc) {
      const t = vi.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      vi.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    vi.set(this.getKey(), this.__typedOnClicks);
  }
  setOnClickFor(t, r, n) {
    Ye(t), Ye(r);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, r) {
    if (!this.__typedOnClicks)
      return;
    const n = this.__typedOnClicks[t];
    if (!n)
      return;
    const i = cn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = cn(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Lc) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Dc) {
      const t = ds.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      ds.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    ds.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, r, n) {
    Ye(t), Ye(r);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, r) {
    if (!this.__typedOnRemoves)
      return;
    const n = this.__typedOnRemoves[t];
    if (!n)
      return;
    const i = cn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = cn(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Dc) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Uc) {
      const t = Ci.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      Ci.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    Ci.set(this.getKey(), this.__typedOnMouseEnters);
  }
  setOnMouseEnterFor(t, r, n) {
    Ye(t), Ye(r);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, r) {
    if (!this.__typedOnMouseEnters)
      return;
    const n = this.__typedOnMouseEnters[t];
    if (!n)
      return;
    const i = cn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = cn(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Uc) {
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
      const t = Si.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Si.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Si.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, r, n) {
    Ye(t), Ye(r);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, r) {
    if (!this.__typedOnMouseLeaves)
      return;
    const n = this.__typedOnMouseLeaves[t];
    if (!n)
      return;
    const i = cn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = cn(this.__typedOnMouseLeaves, t);
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
    const i = kT(t, r);
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
    for (; pe(t) && Vd(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; pe(r) && Vd(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = xT(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = TT(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = vT(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = CT(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Co(e = Vh) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (Ye(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      Ye(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function sc(e) {
  if (!e || e === Lc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ye(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ye(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function oc(e) {
  if (!e || e === Dc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ye(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ye(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function ac(e) {
  if (!e || e === Uc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ye(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ye(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function cc(e) {
  if (!e || e === Fc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ye(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ye(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function cn(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function jd(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function kT(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Vd(e, t) {
  const r = jd(e), n = jd(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function xT(e, t) {
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
function TT(e, t) {
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
function vT(e, t) {
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
function CT(e, t) {
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
function Fn(e, t) {
  return `${e}-${t}`;
}
function Wh(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(t)) {
    r.push(Fn(e.typedMark, n)), i.length > 1 && r.push(Fn(e.typedMarkOverlap, n));
    for (const s of i)
      r.push(Fn("annotationId", s));
  }
  return r;
}
function Wd(e) {
  return `external-${e}`;
}
function Jn(e, t, r, n, i) {
  return He(new Ze(e, t, r, n, i));
}
function pe(e) {
  return e instanceof Ze;
}
function no(e) {
  return e?.type === Ze.getType();
}
function Ho(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function ST(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (pe(n))
      return n.getTypedIDs()[t];
    if (S(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (pe(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Yn = Gi("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), yn = Gi("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ce = Gi("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Nr = "marker-trailing-space", Hh = 1, _T = "attribute-run";
function lc(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Xr extends fr {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new Xr(r, n);
  }
  static importJSON(t) {
    return Gh(t.runKind).updateFromJSON(t);
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
    t.classList.add(_T);
    const r = lc(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = lc(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = lc(this.__runKind);
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
      version: Hh
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
function Gh(e) {
  return He(new Xr(e));
}
function De(e) {
  return e instanceof Xr;
}
const Jh = [
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
], Yh = [
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
], MT = [
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
  ...Jh,
  ...Yh
], Xh = 1, ET = ["type", "marker", "content"];
class _e extends fr {
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
    return new _e(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (MT.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Jh.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Yh.includes(t);
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
    return _e.isValidFootnoteMarker(t) || _e.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => PT(t) ? {
        conversion: AT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return jr().updateFromJSON(t);
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
    return Hd(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Hd(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && oi(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Xh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = jr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Hd(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function AT(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: jr(t) };
}
function jr(e, t) {
  return He(new _e(e, t));
}
function PT(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return _e.isValidMarker(t) && e.classList.contains(_e.getType());
}
function L(e) {
  return e instanceof _e;
}
function wT(e) {
  return e?.type === _e.getType();
}
const Go = "v", Qh = 1, OT = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class ct extends Ue {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = Go, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new ct(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Zh().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Rc, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: Qh
    };
  }
}
function Zh(e, t, r, n, i, s) {
  return He(new ct(e, t, r, n, i, s));
}
function Ee(e) {
  return e instanceof ct;
}
function eg(e) {
  return e?.type === ct.getType();
}
const NT = /* @__PURE__ */ new Set(["closed"]);
function vr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !NT.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function tg(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function rg(e) {
  const t = Object.keys(e).filter((n) => !Wx.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function ng(e, t, r, n) {
  return tg(
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
function Ms(e) {
  return e.getChildren().find((t) => w(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function RT(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Ms(e) === void 0 && ig(e) === void 0;
}
function ig(e) {
  return e.getChildren().find((t) => S(t) && re(t, ce) === "attribute");
}
function Ls(e, t) {
  return io(e.getNextSibling(), t);
}
const $T = /^[ \u00A0]+$/;
function Gl(e) {
  if (Mn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Oe(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && $T.test(r.slice(t.length));
}
function io(e, t) {
  let r, n, i, s;
  return De(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), w(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Gl(e) && (r = e, e = e.getNextSibling()), S(e) && re(e, ce) === "attribute" && (n = e, e = e.getNextSibling()), w(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && Mn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function qT(e) {
  let t = e;
  for (; pe(t); )
    t = t.getChildren()[0];
  return t;
}
function Ar(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!w(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = qT(t[r]);
  if (S(n) && n.getTextContent() === Ut(e.getCaller()))
    return n;
}
function Jl(e) {
  const t = Ar(e);
  return t ? io(t.getNextSibling(), "cat") : {};
}
function ai(e) {
  const t = e.getFirstChild();
  if (!(!S(t) || w(t)) && re(t, ce) !== "attribute")
    return t;
}
function sg(e) {
  const t = ai(e);
  return t ? io(t.getNextSibling(), "ca") : {};
}
function og(e) {
  const t = ai(e);
  if (!t)
    return;
  const r = io(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function ag(e) {
  const t = og(e);
  return t ? io(t.getNextSibling(), "cp") : {};
}
function cg(e) {
  const t = e.getParent();
  if (!L(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ee(n))
        return n;
      if (!(w(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || S(n) && re(n, ce) === "attribute" || L(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || De(n)))
        return;
    }
}
function Ea(e) {
  let t, r, n, i, s = e.getNextSibling();
  return De(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), w(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Gl(s) && (t = s, s = s.getNextSibling()), S(s) && re(s, ce) === "attribute" && (r = s, s = s.getNextSibling()), w(s) && s.getMarkerSyntax() === "selfClosing" && Mn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
const Jo = "c", lg = 1, IT = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Kt extends fr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = Jo, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Kt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return ug().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Vo, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: lg
    };
  }
}
function ug(e, t, r, n, i) {
  return He(new Kt(e, t, r, n, i));
}
function Se(e) {
  return e instanceof Kt;
}
function LT(e) {
  return e?.type === Kt.getType();
}
const dg = 1;
class bn extends ql {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new bn(t.__key);
  }
  static importJSON(t) {
    return Gt().updateFromJSON(t);
  }
  getMarker() {
    return Sr;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: dg
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Gt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Gt() {
  return He(new bn());
}
function tt(e) {
  return e instanceof bn;
}
function Aa(e) {
  return e?.type === bn.getType();
}
function fg(e) {
  return tt(e) && Mr(e.getParent());
}
function Yl(e) {
  return pe(e) || fg(e);
}
function Qr(e) {
  let t = e.getParent();
  for (; t && Yl(t); )
    t = t.getParent();
  return t;
}
function Pa(e) {
  return L(Qr(e));
}
function Yo(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Pa(t) : t.getChildren().some((i) => L(i) && i.getMarker() === r) ? !0 : void 0;
}
function DT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!w(t))
      return;
    const r = Yo(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function so(e) {
  return S(e) && e.getType() === Ue.getType() && re(e, ce) !== "attribute";
}
function pg(e) {
  if (!so(e) || !e.getTextContent().startsWith(q))
    return 0;
  let t = e, r = t.getPreviousSibling(), n = t.getParent();
  for (; n && pe(n); )
    t = n, n = t.getParent(), r ??= t.getPreviousSibling();
  if (!L(n))
    return 0;
  for (; pe(r); )
    r = r.getLastChild();
  return !w(r) || r.getMarkerSyntax() !== "opening" || Yo(r, n) === void 0 ? 0 : 1;
}
function Xl(e, t) {
  if (e.getMarkerSyntax() !== "opening" || Yo(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return w(r) ? Yo(r, t) === !0 ? "spacer" : void 0 : so(r) ? r.getTextContent().startsWith(q) ? void 0 : "prefix" : "spacer";
}
function UT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (w(t) && Xl(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function hg(e, t) {
  const r = $();
  if (!O(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function gg(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!w(t))
      return;
    const r = Xl(t, e);
    if (r !== void 0 && !hg(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        S(n) && n.setTextContent(q + n.getTextContent());
      } else
        t.insertAfter(ve(q));
  });
}
function mg(e) {
  return e.isAttached() ? e.getChildren().some((t) => w(t) && Xl(t, e) !== void 0 && hg(t, e)) : !1;
}
const yg = 1, FT = "marker", Ql = Gi("isGutterMarker", {
  parse: (e) => e === !0
});
class pr extends Qs {
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
    return new pr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => jT(t) ? {
        conversion: KT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Vr().updateFromJSON(t);
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
    return r && oi(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: yg
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function KT(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Vr(t, r) };
}
function Vr(e, t) {
  return He(new pr(e, t));
}
function zT(e) {
  return ht(Vr(FT, e), Ql, !0);
}
function BT(e) {
  return Tt(e) && re(e, Ql);
}
function jT(e) {
  return e?.tagName === "span";
}
function Tt(e) {
  return e instanceof pr;
}
function bg(e) {
  return e?.type === pr.getType();
}
const VT = ["type", "marker", "content"], Kc = "unknown", kg = 1, WT = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class ci extends fr {
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
      [Kc]: (t) => GT(t) ? {
        conversion: HT,
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
    return WT.has(this.getTag());
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
    const t = document.createElement(Kc);
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
      version: kg
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
function HT(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Zl(t, r) };
}
function Zl(e, t, r) {
  return He(new ci(e, t, r));
}
function GT(e) {
  return e?.tagName.toLowerCase() === Kc;
}
function Ne(e) {
  return e instanceof ci;
}
const xg = "file", Tg = "src", JT = "colspan", YT = "category", XT = "alt", QT = "closed", ZT = "false";
function ev(e) {
  return e[QT] !== ZT;
}
function tv(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === xg ? Tg : t,
    r
  ]));
}
function rv(e, t) {
  return e === "figure" && t === Tg ? xg : t;
}
function nv(e, t) {
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
function wa(e, t, r) {
  const n = r ?? {}, i = ev(n);
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
        opening: `\\${nv(t, n[JT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: vr(tv(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [YT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + vr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [XT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: vr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: vr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const wt = { wantsRun: !1, valueText: void 0 }, Zr = {};
function uc(e, t) {
  if (t === "va")
    return e;
  const r = Ls(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function eu(e) {
  const t = $();
  if (!O(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (R(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function Oa(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = $();
  if (!O(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function iv(e) {
  return De(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : w(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : S(e) && re(e, ce) === "attribute";
}
function sv(e) {
  if (w(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!S(e) || re(e, ce) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!w(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function dc(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ee(t))
      return t;
    if (!iv(t))
      return;
  }
}
function Gd(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Ee(t),
    ownerOf: (t) => {
      if (De(t))
        return t.getRunKind() === e ? dc(t) : void 0;
      const r = t.getParent();
      return De(r) ? r.getRunKind() === e ? dc(r) : void 0 : sv(t) === e ? dc(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Ee(t))
        return wt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? wt : { wantsRun: !0, valueText: q + r };
    },
    scanPieces: (t) => Ee(t) ? Ls(uc(t, e), e) : Zr,
    graceSite: (t, r) => Ee(t) ? !r.opener && !r.closer ? eu(uc(t, e)) : Oa(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Ee(t) ? uc(t, e) : void 0
    }
  };
}
const ov = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => L(e),
  ownerOf: () => {
  },
  expectedPieces: () => wt,
  scanPieces: () => Zr,
  graceSite: (e) => L(e) && mg(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, av = {
  kind: "char",
  ownerPredicate: (e) => L(e),
  ownerOf: (e) => {
    if (!S(e) || re(e, ce) !== "attribute")
      return;
    const t = e.getParent();
    return L(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!L(e) || Ms(e) === void 0)
      return wt;
    const t = vr(e.getUnknownAttributes() ?? {}, eo(e.getMarker()));
    return t === "" ? wt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => L(e) ? { value: ig(e) } : Zr,
  graceSite: (e, t) => {
    if (!L(e) || t.value)
      return !1;
    const r = Ms(e);
    if (!r)
      return !1;
    const n = $();
    if (!O(n) || !n.isCollapsed())
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
    insertRunBefore: (e) => L(e) ? Ms(e) : void 0
  }
};
function vg(e) {
  if (w(e))
    return e.getMarker() === "cat";
  if (!S(e) || re(e, ce) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return w(t) && t.getMarker() === "cat";
}
function cv(e) {
  const t = e.getParent();
  if (!D(t))
    return;
  const r = Ar(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!vg(n))
        return;
    }
}
const lv = {
  kind: "cat",
  ownerPredicate: (e) => D(e),
  ownerOf: (e) => {
    if (De(e))
      return e.getRunKind() === "cat" && D(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return De(t) ? t.getRunKind() === "cat" && D(t.getParent()) ? t.getParent() ?? void 0 : void 0 : vg(e) ? cv(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!D(e) || e.getIsCollapsed() !== !1)
      return wt;
    const t = e.getCategory();
    return t === void 0 ? wt : { wantsRun: !0, valueText: q + t };
  },
  scanPieces: (e) => D(e) ? Jl(e) : Zr,
  graceSite: (e, t) => {
    if (!D(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Ar(e);
      return r !== void 0 && eu(r);
    }
    return Oa(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => D(e) ? Ar(e) : void 0
  }
};
function uv(e) {
  return De(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : w(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : S(e) && re(e, ce) === "attribute";
}
function dv(e) {
  if (w(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!S(e) || re(e, ce) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!w(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function fv(e) {
  const t = e.getParent();
  if (!Se(t))
    return;
  const r = ai(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!uv(n))
        return;
    }
}
function Jd(e) {
  const t = (r) => Se(r) ? e === "ca" ? ai(r) : og(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Se(r),
    ownerOf: (r) => {
      if (De(r))
        return r.getRunKind() === e && Se(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return De(n) ? n.getRunKind() === e && Se(n.getParent()) ? n.getParent() ?? void 0 : void 0 : dv(r) === e ? fv(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Se(r))
        return wt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? wt : { wantsRun: !0, valueText: q + n };
    },
    scanPieces: (r) => Se(r) ? e === "ca" ? sg(r) : ag(r) : Zr,
    graceSite: (r, n) => {
      if (!Se(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && eu(i);
      }
      return Oa(n);
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
  if (w(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return S(e) && re(e, ce) === "attribute";
}
function pv(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Pe(t)) {
      const r = w(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Cg(t))
      return;
  }
}
const hv = {
  kind: "milestone",
  ownerPredicate: (e) => Pe(e),
  ownerOf: (e) => {
    const t = De(e) ? e.getRunKind() === "milestone" ? e : void 0 : De(e.getParent()) ? e.getParent() : Cg(e) ? e : void 0;
    if (!t || De(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return De(t) ? Pe(r) ? r : void 0 : pv(t);
  },
  expectedPieces: (e) => {
    if (!Pe(e))
      return wt;
    const t = ng(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = vr(t, to(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : q + r };
  },
  scanPieces: (e) => {
    if (!Pe(e))
      return Zr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Ea(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Pe(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = $();
      if (!O(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return Oa(t);
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
}, gv = wa("optbreak", void 0, void 0).opening, mv = {
  kind: "optbreak",
  ownerPredicate: (e) => Ne(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Ne(t) || t.getTag() !== "optbreak"))
      return S(e) || Tt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: gv }),
  scanPieces: (e) => Ne(e) ? { value: e.getFirstChild() ?? void 0 } : Zr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, yv = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => Ne(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => wt,
  scanPieces: () => Zr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, bv = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => L(e),
  ownerOf: () => {
  },
  expectedPieces: () => wt,
  scanPieces: () => Zr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Ds = [
  ov,
  av,
  Gd("va"),
  Gd("vp"),
  lv,
  Jd("ca"),
  Jd("cp"),
  hv,
  mv,
  yv,
  bv
], kv = new Map(Ds.map((e) => [e.kind, e]));
function Wr(e) {
  const t = kv.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function kn(e) {
  for (const t of Ds) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function Sg(e) {
  return kn(e) !== void 0;
}
function xv(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const { type: t, id: r, start: n, end: i } = e;
  return typeof t == "string" && typeof r == "string" && Number.isInteger(n) && Number.isInteger(i);
}
const Na = Gi("displayAnnotations", {
  parse: (e) => {
    if (typeof e != "object" || e === null)
      return;
    const { basis: t, annotations: r } = e;
    if (!(typeof t != "string" || !Array.isArray(r)) && r.every(xv))
      return { basis: t, annotations: r };
  }
});
function Tv(e, t) {
  const r = new Array(e.length).fill(void 0);
  let n = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; )
    r[n] = n, n++;
  let i = 0;
  for (; i < e.length - n && i < t.length - n && e[e.length - 1 - i] === t[t.length - 1 - i]; )
    r[e.length - 1 - i] = t.length - 1 - i, i++;
  const s = e.slice(n, e.length - i), o = t.slice(n, t.length - i), a = Array.from({ length: s.length + 1 }, () => new Array(o.length + 1).fill(0));
  for (let u = s.length - 1; u >= 0; u--)
    for (let d = o.length - 1; d >= 0; d--)
      a[u][d] = s[u] === o[d] ? a[u + 1][d + 1] + 1 : Math.max(a[u + 1][d], a[u][d + 1]);
  let c = 0, l = 0;
  for (; c < s.length && l < o.length; )
    s[c] === o[l] ? (r[n + c] = n + l, c++, l++) : a[c + 1][l] >= a[c][l + 1] ? c++ : l++;
  return r;
}
function vv(e, t, r) {
  let n, i;
  for (let s = t; s < r; s++) {
    const o = e[s];
    o !== void 0 && (n ??= o, i = o);
  }
  return n === void 0 || i === void 0 ? void 0 : [n, i + 1];
}
const Us = "id", _g = 1, Cv = [
  "type",
  "marker",
  "code",
  "content"
];
class Qt extends fr {
  __marker = Us;
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
    return new Qt(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return Mg(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Gk(t);
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
      version: _g
    };
  }
}
function Mg(e, t) {
  return He(new Qt(e, t));
}
function ut(e) {
  return e instanceof Qt;
}
function Eg(e) {
  return e?.type === Qt.getType();
}
const Ag = 1, Sv = "c", Pg = "span";
class Rr extends Qs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Sv, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Rr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => wg(t) ? {
        conversion: _v,
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
    const t = document.createElement(Pg);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Vo, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && oi(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Vo, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? Ht(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Ag
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
function _v(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: tu(t) };
}
function tu(e, t, r, n, i, s) {
  return He(new Rr(e, t, r, n, i, s));
}
function wg(e) {
  return e ? e.classList.contains(Vo) && e.tagName.toLowerCase() === Pg : !1;
}
function oo(e) {
  return e instanceof Rr;
}
function Mv(e) {
  return e?.type === Rr.getType();
}
const Ev = [
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
  Sr,
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
], Og = 1, Av = ["type", "marker", "content"];
class st extends ql {
  __marker;
  __unknownAttributes;
  constructor(t = Sr, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new st(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Ev.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Pv,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return Fs().updateFromJSON(t);
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
    return r && oi(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Og
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Fs(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Pv(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = Fs(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function Fs(e, t) {
  return He(new st(e, t));
}
function se(e) {
  return e instanceof st;
}
function ru(e) {
  return e?.type === st.getType();
}
const Ng = /[ \u00A0]{2,}/g;
function wv(e) {
  return [...e.matchAll(Ng)].map((t) => [
    t.index + 1,
    t.index + t[0].length
  ]);
}
function Ov(e) {
  return e.replace(Ng, (t) => t[0]);
}
const Nv = "​", Di = Nv;
var Yd;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Yd || (Yd = {}));
var Xd;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Xd || (Xd = {}));
function Rv() {
  return ve(Di);
}
function $v(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Di, ""));
}
function ao(e) {
  return e.length > 0 && e.includes(Di) && e.replaceAll(Di, "") === "";
}
function nu(e) {
  return S(e) && ao(e.getTextContent());
}
function Rg(e) {
  return LT(e) || Mv(e);
}
function je(e) {
  return Se(e) || oo(e);
}
function $g(e, t) {
  return e.find((r) => je(r) && r.getNumber() === t.toString());
}
function qv(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && je(r));
}
function Qd(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function qg(e) {
  if (!e)
    return;
  if (je(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !je(t); )
    t = t.getPreviousSibling();
  if (t && je(t))
    return t;
}
function cr(e) {
  return it(e, D) ?? void 0;
}
function Iv(e) {
  return ut(e) || Se(e) || L(e) || oo(e) || tt(e) || Pe(e) || se(e) || D(e) || Ee(e) || Ne(e);
}
function Ig(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Lv(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Zt(e) {
  return Re(e) || ut(e);
}
function Re(e) {
  return se(e) || tt(e);
}
function Dv(e) {
  return ru(e) || Aa(e);
}
function Ui(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function Xn(e, t) {
  const r = re(t, Yn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function Uv(e, t) {
  const r = R(e) ? e : e.getParent(), n = R(t) ? t : t.getParent(), i = r && n ? Xk(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Fv(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Qn(e) {
  return e?.type === Ue.getType();
}
function Kv(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function zv(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Lg(e, t, r) {
  const n = Oe(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Bv(e) {
  const t = e[jn];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Dg(e) {
  return ro(e) || bg(e) && e.textType === "marker" || Qn(e) && Bv(e) === "attribute" ? "" : Qn(e) && e.text !== q ? e.text : wT(e) ? e.children.map((t) => Dg(t)).join("") : "";
}
function jv(e) {
  return e.map((r) => Dg(r)).filter((r) => r.length > 0).join(" ").trim();
}
function iu(e) {
  const t = [];
  for (const r of e) {
    if (!L(r))
      continue;
    const n = Ug(r);
    n !== Xt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Ug(e) {
  return w(e) || $r(e) || S(e) && re(e, ce) === "attribute" ? "" : S(e) ? e.getTextContent() : R(e) ? e.getChildren().map((t) => Ug(t)).join("") : "";
}
function $r(e) {
  return Tt(e) && e.getTextType() === "marker";
}
function er(e) {
  return w(e) || $r(e);
}
function Zd(e, t) {
  Vv(e, t), e.setMarker(t);
}
function Vv(e, t) {
  const r = e.getMarker(), n = Oe(r), i = Oe(r, !0), s = Ge(r), o = Ge(r, !0), a = _e.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!er(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (w(c))
        c.setMarker(t);
      else if ($r(c)) {
        const f = l.startsWith(Oe("", !0));
        c.setTextContent(u ? Oe(t, f) : Ge(t, f));
      }
    }
  });
}
function Ve(e, t = Jk) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Ie(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Fg(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function su(e) {
  if (!O(e))
    return ef(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !R(t) || e.anchor.type === "text" && !S(t)))
    return t ?? void 0;
  try {
    return ef(e) ?? t ?? void 0;
  } catch (n) {
    if (Fg(n))
      return t ?? void 0;
    throw n;
  }
}
function Wv(e, t) {
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
function ou(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Kg(e) {
  return !!e && e.includes("-");
}
function zg(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function ef(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function xn(e) {
  if (!e)
    return !1;
  if (xa(e) || w(e) || $r(e) || De(e) || e.getType() === Xi || Tt(e) && e.getTextType() === "attribute")
    return !0;
  const t = Qr(e);
  if (Se(t) || S(e) && D(t) && Ar(t)?.is(e))
    return !0;
  if (S(e)) {
    const r = re(e, ce);
    if (r === Nr || r === "attribute")
      return !0;
    const n = e.getTextContent();
    if (n === "" || n === q || ao(n))
      return !0;
  }
  return !1;
}
function Ra() {
  const e = ve(q);
  return ht(e, ce, Nr), e.setMode("token"), e;
}
function Hv(e) {
  const t = e.getTextContent();
  t.startsWith(q) || e.setTextContent(q + t);
}
function en(e) {
  return S(e) && re(e, ce) === Nr;
}
function Bg(e) {
  const t = e.getFirstChild();
  if (!er(t) || t === null || en(t.getNextSibling()))
    return !1;
  const r = $();
  if (!O(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function jg(e) {
  if (Se(e))
    return [];
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", nodes: r }), r = void 0);
  }, i = (s) => {
    if (!xn(s)) {
      if (Yl(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (S(s) && s.getType() === Ue.getType()) {
        r ??= [], r.push(s);
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function Gv(e, t) {
  const r = [];
  let n = 0;
  for (const i of e) {
    const s = pg(i), o = t ? wv(i.getTextContent().slice(s)).map(([c, l]) => [c + s, l + s]) : [], a = i.getTextContentSize() - s - o.reduce((c, [l, u]) => c + u - l, 0);
    r.push({ node: i, start: n, lead: s, collapsed: o, length: a }), n += a;
  }
  return { type: "text", segments: r, length: n };
}
function Vg(e) {
  return e.lead > 0 ? [[0, e.lead], ...e.collapsed] : e.collapsed;
}
function Jv(e, t) {
  let r = t;
  for (const [n, i] of Vg(e)) {
    if (t <= n)
      break;
    r -= Math.min(t, i) - n;
  }
  return e.start + r;
}
function tf(e, t) {
  let r = t;
  for (const [n, i] of Vg(e)) {
    if (n > r)
      break;
    r += i - n;
  }
  return r;
}
function vt(e, t) {
  return jg(e).map((r) => r.type === "element" ? r : Gv(r.nodes, t));
}
function Yv(e, t) {
  return jg(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.nodes.some((n) => n.is(t)));
}
function Ks(e, t, r) {
  const n = Qr(e);
  if (!n)
    return;
  const i = vt(n, r);
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.type !== "text")
      continue;
    const a = o.segments.find((c) => c.node.is(e));
    if (a)
      return { parent: n, index: s, offset: Jv(a, t) };
  }
}
function Xv(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const n of e.segments)
    if (t >= n.start && t < n.start + n.length)
      return [n.node, tf(n, t - n.start)];
  const r = e.segments[e.segments.length - 1];
  if (r)
    return [r.node, tf(r, t - r.start)];
}
function $i(e, t, r) {
  const n = e.getChildAtIndex(t);
  if (fg(e)) {
    const s = e.getParentOrThrow();
    return n ? xn(n) ? $i(e, t + 1, r) : zc(s, n, r) : $i(s, e.getIndexWithinParent() + 1, r);
  }
  const i = vt(e, r);
  return n ? xn(n) || Yl(n) && !Wg(i, n) ? $i(e, t + 1, r) : zc(e, n, r) : { type: "index", index: i.length };
}
function Qv(e, t) {
  const r = Qr(e);
  if (r && Wg(vt(r, t), e))
    return { parent: r, point: zc(r, e, t) };
}
function Wg(e, t) {
  return e.some((r) => r.type === "element" ? r.node.is(t) || Ui(r.node, t.getKey()) : r.segments.some((n) => n.node.is(t) || Ui(n.node, t.getKey())));
}
function zc(e, t, r) {
  const n = vt(e, r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type === "element") {
      if (s.node.is(t) || Ui(s.node, t.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(t) || Ui(o.node, t.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: n.length };
}
const Zv = /* @__PURE__ */ new Set([
  Xi,
  qh,
  pr.getType()
]);
function Hg(e) {
  return S(e) && re(e, ce) === "attribute";
}
function Gg(e) {
  if (!S(e))
    return !1;
  let t = e.getParent();
  for (; pe(t); )
    t = t.getParent();
  return D(t) ? Ar(t)?.is(e) ?? !1 : Se(t) ? ai(t)?.is(e) ?? !1 : !1;
}
function eC(e) {
  return Il(e) ? Zv.has(e.getType()) : !S(e) || en(e) ? !1 : w(e) || Ee(e) || Hg(e) || Gg(e);
}
function Jg(e, t, r) {
  return e.type === t && e.id === r;
}
function Yg(e, t) {
  if (e.basis === t)
    return e.annotations;
  const r = Tv(e.basis, t);
  return e.annotations.flatMap((n) => {
    if (n.start === n.end)
      return [n];
    const i = vv(r, n.start, n.end);
    return i ? [{ ...n, start: i[0], end: i[1] }] : [];
  });
}
function Zn(e) {
  const t = re(e, Na);
  return t ? Yg(t, e.getTextContent()) : [];
}
function au(e, t) {
  ht(e, Na, t.length > 0 ? { basis: e.getTextContent(), annotations: t } : void 0);
}
function tC(e, t, r, n, i) {
  let s = { type: t, id: r, start: n, end: i };
  const o = [];
  for (const a of Zn(e))
    Jg(a, t, r) && a.start <= s.end && s.start <= a.end ? s = {
      ...s,
      start: Math.min(s.start, a.start),
      end: Math.max(s.end, a.end)
    } : o.push(a);
  au(e, [...o, s]);
}
function Xg(e, t, r) {
  const n = Zn(e), i = n.filter((s) => !Jg(s, t, r));
  return i.length === n.length ? !1 : (au(e, i), !0);
}
function Bc(e, t) {
  const r = e.getTextContent();
  return t.start === t.end ? r : r.slice(t.start, t.end);
}
function rC(e, t, r) {
  return Zn(e).filter((n) => n.type === t && (n.start === n.end || n.start <= r && r <= n.end)).map((n) => n.id);
}
function nC(e) {
  const t = re(e, Na);
  !t || t.basis === e.getTextContent() || au(e, Yg(t, e.getTextContent()));
}
const Xo = /* @__PURE__ */ new WeakMap();
function cu(e, t) {
  return `${e}\0${t}`;
}
function Qg(e, t, r, n) {
  const i = Yt();
  let s = Xo.get(i);
  s || (s = /* @__PURE__ */ new Map(), Xo.set(i, s));
  const o = cu(e, t), a = s.get(o), c = Object.fromEntries(Object.entries(r).filter(([, l]) => l !== void 0));
  s.set(o, {
    ...a,
    ...c,
    hadMarks: (a?.hadMarks ?? !1) || n
  });
}
function zs(e, t, r) {
  return Xo.get(e)?.get(cu(t, r));
}
function jc(e, t, r) {
  Xo.get(e)?.delete(cu(t, r));
}
function iC(e) {
  const r = [Ue, nr, ct].filter((n) => e.hasNodes([n])).map((n) => e.registerNodeTransform(n, nC));
  return () => r.forEach((n) => n());
}
function sC(e) {
  return Ee(e) || Pe(e) || De(e) || De(e.getParent()) || Gg(e);
}
function oC(e, t, r) {
  if (!eC(e))
    return;
  if (!S(e))
    return [0, 0];
  const n = t.type === "text" && t.key === e.getKey() ? t.offset : 0, i = r.type === "text" && r.key === e.getKey() ? r.offset : e.getTextContentSize();
  return i > n ? [n, i] : void 0;
}
function lu(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), [f, p] = d ? [e.focus, e.anchor] : [e.anchor, e.focus];
  let h = !1, g = !1;
  const m = (E) => {
    const P = oC(E, f, p);
    P && (tC(E, t, r, P[0], P[1]), g = !0);
  }, x = d ? l : c, v = d ? c : l;
  let _, A;
  for (let E = 0; E < u; E++) {
    const P = a[E];
    if (R(A) && A.isParentOf(P))
      continue;
    if (w(P) || en(P) || Hg(P) || sC(P)) {
      m(P), _ = P.getParent(), A = void 0;
      continue;
    }
    const T = E === 0, B = E === u - 1;
    let V = null;
    if (S(P)) {
      const W = P.getTextContentSize(), X = pg(P), ue = Math.max(T ? x : 0, X), Y = B ? v : W;
      if (ue >= Y)
        continue;
      const le = P.splitText(ue, Y);
      V = le.length > 1 && (le.length === 3 || T && !B || Y === W) ? le[1] : le[0];
    } else {
      if (pe(P))
        continue;
      R(P) && P.isInline() && (V = P);
    }
    if (V !== null) {
      if (V && V.is(_))
        continue;
      const W = V.getParent();
      (W == null || !W.is(_)) && (A = void 0), _ = W, A === void 0 && (A = Jn(), A.addID(t, r, n, i, s, o), V.insertBefore(A), h = !0), A.append(V);
    } else
      m(P), _ = void 0, A = void 0;
  }
  g && Qg(t, r, { onClick: n, onRemove: i, onMouseEnter: s, onMouseLeave: o }, h), t === Lt && R(A) && (d ? A.selectStart() : A.selectEnd());
}
const Qo = "unmatched", Zg = 2;
function Es(e) {
  return `\\${e}`;
}
class tn extends Ue {
  __marker;
  constructor(t = "", r) {
    super(Es(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new tn(r, n);
  }
  static importDOM() {
    return {
      [Qo]: (t) => cC(t) ? {
        conversion: aC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return uu().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? Es(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Es(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Ud), r.title = rf(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = rf(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Qo);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Ud), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: Zg
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function em(e) {
  return e.getTextContent() === Es(e.getMarker());
}
function rf(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function aC(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: uu(t) };
}
function uu(e) {
  return He(new tn(e));
}
function cC(e) {
  return e?.tagName.toLowerCase() === Qo;
}
function En(e) {
  return e instanceof tn;
}
const tm = "table", Vc = "immutable-table", rm = 1, lC = ["type", "marker", "content"];
class li extends fr {
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
    return uC().updateFromJSON(t);
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
      version: rm
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function uC(e) {
  return He(new li(e));
}
function nm(e) {
  return e instanceof li;
}
function dC(e) {
  return e?.type === Vc;
}
const im = "table:row", nf = "immutable-table-row", sm = 1, Wc = "tr", fC = ["type", "marker", "content"];
class ui extends fr {
  __marker;
  __unknownAttributes;
  constructor(t = Wc, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return nf;
  }
  static clone(t) {
    return new ui(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return pC().updateFromJSON(t);
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
      type: nf,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: sm
    };
  }
}
function pC(e, t) {
  return He(new ui(e, t));
}
function om(e) {
  return e instanceof ui;
}
const am = "table:cell", sf = "immutable-table-cell", cm = 1, Hc = "tc1", hC = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function gC(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class di extends fr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Hc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return sf;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new di(r, n, i, s, o);
  }
  static importJSON(t) {
    return mC().updateFromJSON(t);
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
    const n = gC(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: sf,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: cm
    };
  }
}
function mC(e, t, r, n) {
  return He(new di(e, t, r, n));
}
function yC(e) {
  return e instanceof di;
}
const Gc = /* @__PURE__ */ new WeakMap();
function of(e, t) {
  t ? Gc.set(e, t) : Gc.delete(e);
}
function du(e) {
  return Gc.get(e);
}
function $a(e, t) {
  const r = e.getChildAtIndex(t);
  return S(r) ? r : void 0;
}
function lr(e, t) {
  const r = $a(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Bs(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function bC(e) {
  return e.getChildren().some((t) => w(t) && t.getMarkerSyntax() === "closing");
}
function kC(e) {
  return Bs(e) ? void 0 : { closed: "false" };
}
function xC(e, t, r, n) {
  const i = t.getMarker(), s = Pa(t), o = bC(t);
  if (n) {
    e.append(gt(i, "opening", s));
    const [a] = r;
    so(a) && !a.getTextContent().startsWith(q) && a.setTextContent(q + a.getTextContent());
  }
  e.append(...r), o && e.append(gt(i, "closing", s));
}
function ei(e) {
  return it(e, L) ?? void 0;
}
function fu(e) {
  let t = e.getParent();
  for (; L(t); )
    t = t.getParent();
  return t;
}
function Jc(e) {
  const t = lm(e);
  return e.getChildren().every((r) => w(r) || t && re(r, ce) === "attribute" || S(r) && r.getTextContent().replaceAll(q, "") === "");
}
function lm(e) {
  return Bs(e);
}
function TC(e, t) {
  const r = e.getUnknownAttributes(), n = r ? vr(r, eo(e.getMarker())) : "";
  n !== "" && t.insertAfter(ve(n)), e.remove();
}
function vC(e, t) {
  if (Bs(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(gt(e.getMarker(), "closing", Pa(e)));
}
function CC(e, t) {
  return L(e) && !Bs(e) && !Bs(t);
}
function SC(e, t, r) {
  Jc(e) && e.getChildren().forEach((i) => {
    w(i) || i.remove();
  });
  const [n] = t;
  r && so(n) && !n.getTextContent().startsWith(q) && n.setTextContent(q + n.getTextContent()), e.append(...t);
}
function _C(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = lm(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = w(l) && l.getMarkerSyntax() === "closing", f = s && re(l, ce) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = CC(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      SC(e, o, n);
    else {
      const l = jr(t.getMarker(), kC(t));
      xC(l, t, o, n), e.insertAfter(l), Jc(l) ? l.remove() : c = l;
    }
  i && !a && vC(t, n), Jc(t) && TC(t, c);
}
function Fi(e, t) {
  let r = e.getParent();
  for (; L(r); )
    _C(e, r, t), r = e.getParent();
}
function pu(e) {
  if (S(e) && !w(e)) {
    const t = e.getTextContent().startsWith(q) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (R(e)) {
    const t = e.getChildren().find((r) => !w(r));
    if (t) {
      pu(t);
      return;
    }
    e.selectEnd();
  }
}
const Kn = /* @__PURE__ */ new WeakMap();
function MC(e, t, r) {
  const n = { owners: t, rederive: r };
  return Kn.set(e, n), () => {
    Kn.get(e) === n && Kn.delete(e);
  };
}
function um(e, t, r) {
  const n = Kn.get(e);
  !n?.rederive || !r.has(Ta) || n.derivedFor === t || (n.rederive(t), n.derivedFor = t);
}
function af(e) {
  return Kn.get(e)?.owners;
}
function EC(e) {
  return Kn.get(Yt())?.owners.has(e.getKey()) ?? !1;
}
function AC(e) {
  Kn.get(Yt())?.owners.add(e.getKey());
}
function PC(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Yc(e) {
  return !!(e.opener || e.value || e.closer);
}
function cf(e) {
  return /^\s/.test(e);
}
function hu(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !cf(t) || !cf(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function qa(e, t, r) {
  return r.wantsRun ? hu(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : PC(t);
}
function wC(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return hu(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function dm(e, t) {
  return !Yc(e.scanPieces(t));
}
function co(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!qa(e, n, r))
    return !1;
  const i = $();
  if (!O(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Ui(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function OC(e, t, r, n) {
  return !r.wantsRun || Yc(n) || du(Yt()) === "remote" ? !1 : Yt().getEditorState().read(() => {
    const i = G(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Yc(e.scanPieces(i));
  });
}
function NC(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function lf(e) {
  const t = ve(e);
  return ht(t, ce, "attribute"), t;
}
function RC(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Gh(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function $C(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    S(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(lf(n.valueText));
    return;
  }
  const l = RC(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = gt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : S(d) ? hu(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = lf(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(gt(a === "selfClosing" ? "" : o(t), a));
}
function js(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (qa(e, i, n) && !EC(t)) {
    if (OC(e, t, n, i)) {
      AC(t);
      return;
    }
    if (!co(e, t)) {
      if (!n.wantsRun) {
        NC(i);
        return;
      }
      $C(e, t, i, n);
    }
  }
}
function qC(e, t, r) {
  js(e, t), t.isAttached() && co(e, t) && r.add(t.getKey());
}
function fm(e) {
  if (!S(e))
    return !1;
  if (w(e) || Ee(e) || En(e))
    return !0;
  const t = re(e, ce);
  return t === "attribute" || t === Nr;
}
function gu(e, t) {
  return w(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && Mn(e) && L(e.getParent())) : !1;
}
function IC() {
  const e = $();
  return O(e) ? gu(e.focus.getNode(), e.focus.offset) : !1;
}
function pm(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return S(t) && fm(t) ? t : void 0;
}
function LC(e) {
  const t = pm(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function DC(e) {
  const t = pm(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function uf(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function df(e, t) {
  e.set(t.key, t.offset, t.type);
}
function UC(e, t) {
  let r = DC(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!S(n))
      return;
    if (!fm(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function ff(e, t) {
  const r = UC(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function hm(e) {
  if (e.isCollapsed()) {
    const a = LC(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [uf(r), uf(n)], s = ff(r, "next"), o = ff(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (df(r, i[0]), df(n, i[1]), !1) : !0;
}
const gm = Gi("verseBlockSource", {
  parse: (e) => typeof e == "number" ? e : void 0
}), Zo = "verse-block", mm = 1, FC = "verse-block";
class Qi extends fr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Zo;
  }
  static clone(t) {
    return new Qi(t.__number, t.__key);
  }
  static importJSON(t) {
    return KC().updateFromJSON(t);
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
    return zg(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(FC), pf(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && pf(r, this.__number), !1;
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
      type: Zo,
      number: this.getNumber(),
      version: mm
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function pf(e, t) {
  const { start: r, end: n } = zg(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), hf(e, "data-verse-start", i ? r : NaN), hf(e, "data-verse-end", i ? n : NaN);
}
function hf(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function KC(e) {
  return He(new Qi(e));
}
function ti(e) {
  return e instanceof Qi;
}
function zC(e) {
  return e?.type === Zo;
}
const BC = [
  Qt,
  Rr,
  Kt,
  ct,
  _e,
  $e,
  ar,
  nr,
  ci,
  pr,
  tn,
  st,
  bn,
  li,
  ui,
  di,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Xr,
  {
    replace: ql,
    with: () => Gt(),
    withKlass: bn
  }
], ea = {
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
}, jC = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function VC(e) {
  if (!e)
    return _r;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: _r(r)?.category ?? k.Uncategorized,
      type: jC[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: _r(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function gf(e, t, r) {
  const n = {
    type: Br,
    version: zr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return Aa(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const ym = "v", bm = 1, WC = "verse-selected";
class Ct extends Qs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = ym, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return qh;
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Ct(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => JC(t) ? {
        conversion: GC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return mu().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Rc, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && oi(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Rc, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Ht(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Bo + this.getNumber() + Bo
    );
    return M(HC, { nodeKey: this.getKey(), text: t });
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
      version: bm
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Fg(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function HC({ nodeKey: e, text: t }) {
  const [r] = hx(e);
  return M("span", { className: r ? WC : void 0, children: t });
}
function GC(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: mu(t) };
}
function mu(e, t, r, n, i, s) {
  return He(new Ct(e, t, r, n, i, s));
}
function JC(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === ym;
}
function fi(e) {
  return e instanceof Ct;
}
function YC(e) {
  return e?.type === Ct.getType();
}
function ke(e) {
  return Ee(e) || fi(e);
}
function km(e) {
  return eg(e) || YC(e);
}
function XC(e) {
  return QC(e).find((t) => se(t));
}
function QC(e) {
  return e.some(ti) ? e.flatMap((t) => ti(t) ? t.getChildren() : t) : e;
}
function Ia(e) {
  return R(e) ? ti(e) ? e.getChildren().flatMap(Ia) : e.getChildren() : [];
}
function ZC(e, t) {
  return Ia(e).find((i) => ke(i) && ou(t, i.getNumber()));
}
function eS(e, t) {
  return t === 0 ? XC(e) : e.map((r) => ZC(r, t)).filter((r) => r)[0];
}
function ta(e) {
  return Ia(e).find((r) => ke(r));
}
function xm(e, t) {
  if (!R(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ke(i))
      return i;
  }
}
function tS(e) {
  const t = e.getParent();
  if (t && R(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (ke(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !je(r); ) {
    const n = ta(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Xc(e) {
  return Ia(e).findLast((t) => ke(t));
}
function rS(e) {
  if (!Ee(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function nS(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && R(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function iS(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return nS(t, e, r);
  if (S(e)) {
    const n = rS(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function mf(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function sS(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!O(t))
    return mf(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return iS(e, t) ? { verseNum: n } : mf(e);
}
function oS(e) {
  return Iv(e) || fi(e);
}
function yu(e) {
  if (S(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(q) && e.setTextContent(`${t} `);
  }
}
function Tm(e) {
  if (S(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function vm(e, t) {
  return e.getEditorState().read(() => !G(t));
}
function aS(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = bu(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && R(i) && R(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && R(i)) {
      const s = i.getChildren(), o = r.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (ke(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = yf(i);
      for (; s && !je(s); ) {
        const o = ta(s);
        if (o) {
          n = o;
          break;
        }
        s = yf(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = ta(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && je(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function cS(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = bu(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && R(i) && (n = xm(i, r.getIndexWithinParent())), !n && i) {
      let o = bf(i);
      for (; o && !je(o); ) {
        const a = Xc(o);
        if (a) {
          n = a;
          break;
        }
        o = bf(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !je(s); ) {
      const o = Xc(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function yf(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function bf(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function bu(e, t) {
  if (R(e) && O(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && ke(n))
      return n;
    const i = xm(e, t.anchor.offset);
    if (i)
      return i;
    const s = ta(e);
    if (s)
      return s;
  }
  return ku(e);
}
function ku(e) {
  if (!e || je(e))
    return;
  if (ke(e))
    return e;
  let t = Qd(e);
  for (; t; ) {
    if (je(t))
      return;
    if (ke(t))
      return t;
    const r = Xc(t);
    if (r)
      return r;
    t = Qd(t);
  }
}
const lS = ["style"], uS = ["style", "code"], ra = ["style", "cid"], dS = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], fS = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], pS = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], hS = ["style", "caller", "category", "contents"], gS = ["tag", "marker", "contents"], mS = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Vs = `
`;
function yS(e, t) {
  const r = G(e);
  if (!Ft(r))
    return;
  const n = Cm(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function Cm(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Fl();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (Ki(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      Ki(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Hr(l) || Ft(l))
        return n;
      Zt(l) && (a = l);
    }
    if (Zt(l) && (i.includes(l) || i.push(l)), Sm(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += xu(l, t);
  }
  if (a)
    return n;
}
function kf(e, t, r = "delta-doc") {
  if (e.length < 2 || !xS(e[0]) || !kS(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => bS(n, r)?.getKey());
}
function bS(e, t = "delta-doc") {
  const r = Fl();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (Ki(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      Ki(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Zt(a) && (i.includes(a) || i.push(a)), Sm(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = xu(a, t);
    if (Hr(a) && l > 0 && e >= n && e < n + l || Ft(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function Ki(e, t) {
  return e ? t ? !Ui(t.node, e.getKey()) : !0 : !1;
}
function Hr(e) {
  return S(e) && !Ft(e);
}
function Ft(e) {
  return je(e) || ke(e) || Pe(e) || D(e) || Ne(e) || En(e);
}
function dn(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function kS(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && mS.includes(t);
}
function xS(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Sm(e, t) {
  return D(e) || Ne(e) ? !0 : t === "apply" && R(e) && Ft(e);
}
function _m(e) {
  const t = e.getParent();
  return er(e) && se(t) && t.getFirstChild() === e;
}
function Qc(e) {
  const t = e.getParent();
  return t !== null && it(t, De) !== null;
}
function TS(e) {
  const t = e.getParent();
  return L(t) && e.getTextContent() === Xt && t.getChildrenSize() === 1;
}
function vS(e) {
  const t = e.getParent();
  if (!D(t))
    return !1;
  const r = e.getPreviousSibling();
  return w(r) && r === t.getFirstChild() && e.getTextContent() === Ut(t.getCaller());
}
function CS(e) {
  return !Sg(e) && xu(e, "delta-doc") === e.getTextContentSize();
}
function xu(e, t) {
  if (Ft(e))
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
    (nu(e) || _m(e) || re(e, ce) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    re(e, ce) === "attribute" || Qc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(zl) || TS(e) || vS(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Zc(e, t) {
  const r = { insert: e.__text }, n = re(e, yn);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Mm(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function xf(e) {
  const t = new Ri();
  return e.isEmpty() || e.read(() => {
    const r = ye();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && tt(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = SS();
    for (const s of i)
      t.push(s);
  }), t;
}
function Tu(e, t) {
  const r = [], n = Yi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...Tf(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...Tf(c, n.length, n, i, s, o, a));
  return r;
}
function SS() {
  return Tu();
}
function Tf(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return _S(e, a, n), MS(e, a, i, s, o), ES(e, t, r, i, o, s, a), je(e) && a.push(OS(e)), ke(e) && a.push(RS(e)), Pe(e) && a.push($S(e)), En(e) && a.push(qS(e)), PS(e, a, s), AS(e, a, s), US(c, s), a;
}
function _S(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    ut(n) ? t.push(wS(n)) : se(n) ? t.push(NS(n)) : tt(n) && t.push({ insert: Vs });
  }
  Zt(e) && (r.includes(e) || r.push(e));
}
function MS(e, t, r, n, i) {
  if (!S(e) || Ee(e) || En(e))
    return;
  const s = e.getParent();
  if (D(s) && s.getFirstChild() === e)
    return;
  const o = cr(e) !== void 0;
  if (w(e) && (o || _m(e) || Qc(e) || Sg(e)) || re(e, ce) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (ao(a))
    return;
  const c = e.getPreviousSibling();
  if (D(s) && w(c) && c === s.getFirstChild() && a === Ut(s.getCaller()))
    return;
  const l = L(s) ? s : void 0, u = l?.getFirstChild();
  o && l && w(u) && c === u && a.startsWith(q) && (a = a.slice(1));
  const d = a.startsWith(zl) || re(e, ce) === "attribute" || Qc(e), f = !!l && a === Xt && l.getChildrenSize() === 1, p = La(e, n), h = p ? r.filter((x) => p.children.includes(x)) : r, g = Zc(e, h);
  if (g.insert = a, p) {
    if (!a || a === q || d)
      return;
    p.contentsOps?.push(g);
  } else
    f || d || t.push(g);
  const m = a !== "" && !f && !(d && l);
  if (r.length > 0 && m)
    for (const x of r)
      i.add(x);
}
function ES(e, t, r, n, i, s, o) {
  L(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Ki(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = LS(c), u = La(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function AS(e, t, r) {
  if (!D(e))
    return;
  const n = IS(e), i = La(e, r), s = {
    node: e,
    children: Yi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function PS(e, t, r) {
  if (!Ne(e))
    return;
  const n = DS(e), i = La(e, r), s = {
    node: e,
    children: Yi(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function An(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function wS(e) {
  const t = { style: Us, code: e.__code };
  return An(t, e), { insert: Vs, attributes: { book: t } };
}
function OS(e) {
  const t = { style: Jo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), An(t, e), { insert: { chapter: t } };
}
function NS(e) {
  const t = { style: e.__marker };
  return An(t, e), { insert: Vs, attributes: { para: t } };
}
function RS(e) {
  const t = { style: Go, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), An(t, e), { insert: { verse: t } };
}
function $S(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), An(t, e), { insert: { milestone: t } };
}
function qS(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function IS(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), An(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = re(e, yn);
  return n && (r.attributes = { segment: n }), r;
}
function LS(e) {
  const t = { insert: "" }, r = Mm([e]);
  return r && (t.attributes = { char: r }), t;
}
function DS(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), An(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function La(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function US(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Ki(t[r].node, e) && t.splice(r, 1);
}
function Mm(e) {
  if (e.length === 0)
    return;
  const t = e.map(FS);
  return t.length === 1 ? t[0] : t;
}
function FS(e) {
  const t = { style: e.__marker }, r = re(e, Yn);
  return r && (t.cid = r), An(t, e), t;
}
const Em = 1;
class Jt extends Qs {
  __caller;
  __previewText;
  __onClick;
  constructor(t = jo, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return Xi;
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new Jt(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => zS(t) ? {
        conversion: KS,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return vu().updateFromJSON(t);
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
    return r && oi(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => BS(t, n), (l) => jS(t, n, s, l), () => VS(t, n), () => WS(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return M("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === jo && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === $h && i ? (
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
      version: Em
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function KS(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: vu(t, r) };
}
function vu(e, t, r) {
  return He(new Jt(e, t, r));
}
function zS(e) {
  return e ? e.classList.contains(Jt.getType()) : !1;
}
function tr(e) {
  return e instanceof Jt;
}
function BS(e, t) {
  return e.getEditorState().read(() => {
    const r = G(t);
    if (!D(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function jS(e, t, r, n) {
  e.update(() => {
    const i = G(t);
    if (!D(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = G(r);
    if (!tr(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function VS(e, t) {
  return e.getEditorState().read(() => {
    const r = G(t);
    if (!D(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return Tu(r);
  });
}
function WS(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of Yi())
      if (D(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const HS = [
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
], GS = ["†"], Cu = "formatted", Am = "unformatted", Pm = "paragraph-structure", wm = "standard", Om = "block-verse", JS = {
  [Cu]: "Formatted",
  [Am]: "Unformatted",
  [Pm]: "Paragraph Structure",
  [wm]: "Standard",
  [Om]: "Block Verse"
};
function Zi(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Su, _u;
function YS(e) {
  const t = Nm(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Su = e, _u = t;
}
YS(Cu);
const kN = () => Su, Da = () => _u;
function Nm(e) {
  let t;
  switch (e ?? Su) {
    case Cu:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Am:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Pm:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case wm:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Om:
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
function xN(e) {
  if (!e)
    return;
  const t = vf(e);
  return Object.keys(JS).find((r) => Tr(vf(Nm(r)), t));
}
const XS = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function vf(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...XS, ...t };
}
function Nt(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function QS(e) {
  if (e)
    return Ws(e) ? Ct : e.markerMode === "editable" ? ct : Ct;
}
function Ws(e) {
  return e?.verseLayout === "block";
}
function ZS(e) {
  const t = [], r = e ?? _u;
  return r && (t.push(`${Kx}${r.markerMode}`), r.hasSpacing && t.push(Ux), r.isFormattedFont && t.push(Fx)), t;
}
const e_ = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function na(e) {
  return e_.exec(e)?.[1] ?? e;
}
function As(e, t) {
  const r = e.jsonPath.slice(na(e.jsonPath).length);
  return { ...e, jsonPath: `${lt(t)}${r}` };
}
function Rm(e) {
  const t = [];
  let r = 0;
  for (const c of ye().getChildren())
    if (!xn(c))
      if (ti(c)) {
        const l = r;
        c.getChildren().filter((u) => !xn(u)).forEach((u, d) => t.push({ node: u, blockPrefix: [l, d], blockBase: 0 })), r += 1;
      } else tt(c) ? (t.push({ node: c, blockPrefix: [], blockBase: r }), r += vt(c, e).length) : (t.push({ node: c, blockPrefix: [r], blockBase: 0 }), r += 1);
  const n = [];
  let i = 0, s = 0, o = 0, a;
  for (const c of t) {
    const l = R(c.node) ? vt(c.node, e).length : 0, u = re(c.node, gm), d = tt(c.node), f = u === void 0 || u !== a;
    f && (n.length > 0 && (n[n.length - 1].isSourceEnd = !0), s = i, o = 0, d || (i += 1)), n.push({
      ...c,
      count: l,
      usjPrefix: d ? [] : [s],
      usjBase: d ? s + o : o,
      isSourceStart: f,
      isSourceEnd: !1
    }), d && (i += l), o += l, a = u;
  }
  return n.length > 0 && (n[n.length - 1].isSourceEnd = !0), n;
}
function $m(e, t) {
  return e.length >= t.length && t.every((r, n) => e[n] === r);
}
function qm(e, t, r, n = !0) {
  const i = e.jsonPath.slice(na(e.jsonPath).length);
  let s = rr(na(e.jsonPath));
  s.length === 1 && t.some((o) => o.blockPrefix.length === 2 && o.blockPrefix[0] === s[0]) && (s = [s[0], 0]);
  for (const o of t) {
    if (!$m(s, o.blockPrefix))
      continue;
    const a = s.slice(o.blockPrefix.length);
    if (a.length === 0) {
      if (o.blockPrefix.length === 0)
        continue;
      return n && i === "" && R(o.node) && (!o.isSourceStart || tt(o.node)) ? qm(r(o.node), t, r, !1) : As(e, o.usjPrefix);
    }
    if (!(a[0] < o.blockBase || a[0] >= o.blockBase + o.count))
      return As(e, [
        ...o.usjPrefix,
        a[0] - o.blockBase + o.usjBase,
        ...a.slice(1)
      ]);
  }
}
function t_(e, t, r) {
  for (const n of t) {
    if (n.usjPrefix.length === 0) {
      if (e < n.usjBase || e >= n.usjBase + n.count)
        continue;
      const o = e - n.usjBase + n.blockBase;
      return n.blockPrefix.length === 0 ? { jsonPath: "$", offset: o } : { jsonPath: lt(n.blockPrefix), offset: o };
    }
    if (!n.isSourceStart || n.usjPrefix[0] !== e)
      continue;
    const [i, s] = n.blockPrefix;
    return s === void 0 ? { jsonPath: "$", offset: i } : { jsonPath: lt([i]), offset: s };
  }
  return { jsonPath: "$", offset: vt(ye(), r).length };
}
function Cf(e, t, r) {
  const n = rr(na(e.jsonPath));
  if (n.length === 0)
    return Bn(e) ? t_(e.offset, t, r) : e;
  for (const i of t) {
    if (!$m(n, i.usjPrefix))
      continue;
    const s = n.slice(i.usjPrefix.length);
    if (s.length === 0) {
      if (i.usjPrefix.length === 0)
        continue;
      if (Bn(e)) {
        const o = e.offset - i.usjBase;
        if (o < 0 || !i.isSourceEnd && o >= i.count)
          continue;
        return {
          ...As(e, i.blockPrefix),
          offset: Math.min(o, i.count) + i.blockBase
        };
      }
      if (!i.isSourceStart)
        continue;
      return As(e, i.blockPrefix);
    }
    if (!(s[0] < i.usjBase || s[0] >= i.usjBase + i.count))
      return As(e, [
        ...i.blockPrefix,
        s[0] - i.usjBase + i.blockBase,
        ...s.slice(1)
      ]);
  }
}
function Mu(e, t) {
  let { start: r } = e, n = e.end ?? r;
  if (Fm()) {
    const l = Nt(t), u = Rm(l), d = Cf(r, u, l), f = n === r ? d : Cf(n, u, l);
    if (!d || !f)
      return;
    r = d, n = f;
  }
  let [i, s] = ur(r, t), [o, a] = ur(n, t);
  if (!i || !o || s === void 0 || a === void 0)
    return;
  [i, s] = Ef(i, s), [o, a] = Ef(o, a), n !== r && Do(n) && n.closingMarkerOffset === 0 && ([o, a] = g_(o, a, Nt(t)));
  const c = Zs();
  return c.anchor = _s(i.getKey(), s, Af(i)), c.focus = _s(o.getKey(), a, Af(o)), c;
}
function Eu(e) {
  const t = $();
  if (!t || !O(t))
    return;
  const r = Fm() ? Rm(Nt(e)) : void 0, n = (u, d) => {
    const f = kt(u, d, e);
    return r ? qm(f, r, (p) => kt(p, 0, e)) : f;
  }, i = t.isBackward() ? t.focus.getNode() : t.anchor.getNode(), s = t.isBackward() ? t.focus.offset : t.anchor.offset, o = n(i, s);
  if (!o)
    return;
  if (t.isCollapsed())
    return { start: o };
  const a = t.isBackward() ? t.anchor.getNode() : t.focus.getNode(), c = t.isBackward() ? t.anchor.offset : t.focus.offset, l = n(a, c);
  if (l)
    return { start: o, end: l };
}
const Au = {
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
}, r_ = new Map(Object.values(Au).flatMap((e) => e ? [[e.markerName, e.keyName]] : [])), Sf = {
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
}, n_ = (
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  Object.keys(Sf).filter((e) => Sf[e])
), i_ = /([^\s="|]+)="([^"]*)"/g, s_ = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function Im(e, t) {
  return `${e}['${t}']`;
}
function Li(e) {
  return [
    { start: 0, base: 0, bytes: { kind: "marker" } },
    { start: e, base: 0, bytes: { kind: "property", property: "marker" } }
  ];
}
function Ps(e) {
  return [
    {
      start: 0,
      base: 0,
      bytes: e === void 0 ? { kind: "closingMarker" } : { kind: "closingAttributeMarker", keyName: e }
    }
  ];
}
function Pu(e) {
  const t = kn(e);
  if (!t)
    return;
  const r = Wr(t.kind).scanPieces(t.owner);
  if (r.opener?.is(e))
    return { ...t, role: "opener" };
  if (r.value?.is(e))
    return { ...t, role: "value" };
  if (r.closer?.is(e))
    return { ...t, role: "closer" };
}
function el(e, t, r, n = (i) => i) {
  const i = [];
  for (const s of e.slice(t).matchAll(i_)) {
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
function o_(e, t) {
  const r = s_.exec(e);
  if (!r)
    return [];
  const n = r[1], i = r[0].length - n.length - 2, s = r_.get(n) ?? n, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: r[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${n}*`);
  return a > r[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function Lm(e) {
  if ($r(e)) {
    const t = T_(e), r = e.getTextContent();
    if (Pe(t) && (r === "\\*" || r.startsWith(Oe(t.getMarker()))))
      return t;
  }
  return Qr(e) ?? e;
}
function a_(e) {
  const t = e.getTextContentSize(), r = Pu(e);
  if (r && r.role !== "value") {
    const i = Au[r.kind];
    if (i) {
      const { keyName: s } = i;
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? Ps(s) : [
          { start: 0, base: 0, bytes: { kind: "attributeMarker", keyName: s } },
          { start: 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }
        ]
      };
    }
    if (r.kind === "milestone")
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? Ps() : Li(1)
      };
  }
  const n = e.getMarkerSyntax();
  return {
    owner: Lm(e),
    length: t,
    spans: n === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      Li(e.getNested() ? 2 : 1)
    ) : Ps()
  };
}
function c_(e) {
  const t = e.getTextContent(), r = t.length, n = Pu(e);
  if (n?.kind === "optbreak")
    return {
      owner: n.owner,
      length: r,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = Lm(e);
  if (ut(i)) {
    const s = Oe(i.getMarker()).length;
    if (t.startsWith(Oe(i.getMarker())))
      return {
        owner: i,
        length: r,
        spans: [
          ...Li(1),
          { start: s + 1, base: 0, bytes: { kind: "property", property: "code" } }
        ]
      };
  }
  if (Ne(i)) {
    const s = wa(i.getTag(), i.getMarker(), i.getUnknownAttributes());
    if (s.closing !== "" && t === s.closing)
      return { owner: i, length: r, spans: Ps() };
    if (s.opening !== "" && t === s.opening)
      return { owner: i, length: r, spans: Li(1) };
  }
  return {
    owner: i,
    length: r,
    spans: t.endsWith("*") ? Ps() : Li(t.startsWith("\\+") ? 2 : 1)
  };
}
function l_(e) {
  const t = Pu(e);
  if (t?.role !== "value")
    return;
  const { owner: r, kind: n } = t, i = e.getTextContent(), s = i.length, o = Au[n];
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
        ...el(i, 1, L(r) ? eo(r.getMarker()) : void 0)
      ]
    };
  if (n === "milestone" && Pe(r)) {
    const a = r.getMarker().length;
    return {
      owner: r,
      length: s,
      spans: [
        // A milestone has no text content of its own, so the separator and the `|` both keep
        // counting into its marker name's offset space.
        { start: 0, base: a, bytes: { kind: "property", property: "marker" } },
        ...el(i, 2, to(r.getMarker()))
      ]
    };
  }
}
function u_(e) {
  const t = e.getParent();
  if (!Ne(t))
    return;
  const r = e.getTextContent(), n = r.length, i = o_(r, (t.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: t, length: n, spans: i };
  if (r.startsWith("|"))
    return {
      owner: t,
      length: n,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        // The bytes spell an attribute the way USFM names it, which is not always USJ's name for it.
        ...el(r, 1, void 0, (s) => rv(t.getTag(), s))
      ]
    };
}
function _f(e, t) {
  const r = Oe(e);
  if (t.startsWith(r))
    return [
      ...Li(1),
      { start: r.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function Tn(e) {
  if (w(e))
    return a_(e);
  if ($r(e))
    return c_(e);
  if (Tt(e) && e.getTextType() === "attribute")
    return u_(e);
  if (e.getType() === Xi) {
    const n = e.getParent();
    return D(n) ? {
      owner: n,
      length: n.getCaller().length,
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if (Ee(e)) {
    const n = _f(e.getMarker(), e.getTextContent());
    return n ? { owner: e, length: e.getTextContentSize(), spans: n } : void 0;
  }
  if (!S(e))
    return;
  if (re(e, ce) === "attribute")
    return l_(e);
  const t = e.getParent();
  if (Se(t) && ai(t)?.is(e)) {
    const n = _f(t.getMarker(), e.getTextContent());
    return n ? { owner: t, length: e.getTextContentSize(), spans: n } : void 0;
  }
  const r = Qr(e);
  if (D(r) && Ar(r)?.is(e))
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
function wu(e) {
  return $r(e) || Tt(e) && e.getTextType() === "attribute" || e.getType() === Xi;
}
function d_(e) {
  const t = [];
  if (Ee(e) && t.push(e), R(e)) {
    const r = Se(e) ? ai(e) : void 0, n = D(e) ? Ar(e) : void 0;
    for (const i of e.getChildren())
      n && (n.is(i) || i.isParentOf(n)) ? t.push(n) : (w(i) || $r(i) || Tt(i) && i.getTextType() === "attribute" || i.getType() === Xi || r?.is(i)) && t.push(i);
  }
  for (const r of n_) {
    const n = Wr(r);
    if (!n.ownerPredicate(e))
      continue;
    const { opener: i, value: s, closer: o } = n.scanPieces(e);
    i && t.push(i), s && t.push(s), o && t.push(o);
  }
  return t;
}
function f_(e, t) {
  return e.kind !== t.kind ? !1 : e.kind === "property" && t.kind === "property" ? e.property === t.property : (e.kind === "attributeKey" || e.kind === "attributeMarker" || e.kind === "closingAttributeMarker") && "keyName" in t ? e.keyName === t.keyName : !0;
}
function tl(e, t, r) {
  const n = Tn(e);
  if (!n || n.spans.length === 0)
    return;
  const i = Math.max(0, Math.min(t, n.length));
  let s = n.spans[0];
  for (const c of n.spans) {
    if (c.start > i)
      break;
    s = c;
  }
  const o = s.base + (i - s.start), a = lt(Pr(n.owner));
  switch (s.bytes.kind) {
    case "marker":
      return { jsonPath: a };
    case "closingMarker":
      return { jsonPath: a, closingMarkerOffset: o };
    case "property":
      return {
        jsonPath: Im(a, s.bytes.property),
        propertyOffset: o
      };
    case "attributeKey":
      return { jsonPath: a, keyName: s.bytes.keyName, keyOffset: o };
    case "attributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName, keyClosingMarkerOffset: o };
    case "precedingText":
      return p_(e, r);
  }
}
function Mf(e, t) {
  return S(e) && !Tn(e) && !Ks(e, 0, t);
}
function p_(e, t) {
  let r = e;
  for (let o = r.getParent(); !r.getPreviousSibling() && pe(o); )
    r = o, o = r.getParent();
  let n = r.getPreviousSibling();
  for (; n && Mf(n, t); )
    n = n.getPreviousSibling();
  if (!n)
    return;
  const i = R(n) ? n.getLastDescendant() : n;
  if (i && (S(i) || wu(i)))
    return Mf(i, t) ? void 0 : pn(i, i.getTextContentSize(), t);
  const s = n.getParent();
  if (s)
    return pn(s, n.getIndexWithinParent() + 1, t);
}
function _i(e, t, r) {
  for (const n of d_(e)) {
    const i = Tn(n);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!f_(o.bytes, t))
          continue;
        const a = i.spans[s + 1], c = a ? o.base + (a.start - o.start) - 1 : o.base + (i.length - o.start);
        if (!(r < o.base || r > c))
          return [n, o.start + (r - o.base)];
      }
  }
}
function ur(e, t) {
  const r = Nt(t);
  if (Bn(e)) {
    const n = rr(e.jsonPath);
    let i = ye();
    for (let s = 0; s < n.length; s++) {
      if (!i || !R(i))
        return [void 0, void 0];
      const o = vt(i, r)[n[s]];
      if (!o)
        return [void 0, void 0];
      if (o.type === "text")
        return s !== n.length - 1 ? [void 0, void 0] : Xv(o, e.offset) ?? wf(e, r) ?? [void 0, void 0];
      i = o.node;
    }
    return i && R(i) ? ur(Ou(i, n, e.offset, r), t) : [void 0, void 0];
  }
  if (Lo(e) || Do(e) || Uo(e)) {
    const n = wf(e, r);
    if (n)
      return n;
  }
  if (Fo(e) || Rl(e)) {
    const n = fs(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const { keyName: i } = e, s = Fo(e) ? _i(n, { kind: "attributeKey", keyName: i }, e.keyOffset) : _i(n, { kind: "attributeMarker", keyName: i }, 0);
    return s || Pf(n);
  }
  if (Uo(e)) {
    const n = fs(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = _i(n, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return i || Pf(n);
  }
  if (hh(e)) {
    const n = fs(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = _i(n, { kind: "marker" }, 0);
    if (i)
      return i;
    const s = R(n) ? n.getFirstChild() : null;
    return s && S(s) ? [s, 0] : Oo(n, !1);
  }
  if (Do(e)) {
    const n = fs(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = _i(n, { kind: "closingMarker" }, e.closingMarkerOffset);
    if (i)
      return i;
    const s = Nu(n);
    if (s !== void 0 && e.closingMarkerOffset >= s)
      return Oo(n, !0);
    if (!R(n))
      return [void 0, void 0];
    const o = n.getLastChild();
    return o && S(o) ? [o, o.getTextContent().length] : [n, n.getChildrenSize()];
  }
  if (Lo(e)) {
    const n = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), i = n?.[1] ?? n?.[2] ?? n?.[3], s = fs(e.jsonPath, r);
    if (!s || i === void 0)
      return [void 0, void 0];
    const o = _i(s, { kind: "property", property: i }, e.propertyOffset);
    if (o)
      return o;
    if (R(s)) {
      const c = s.getFirstChild();
      return c && S(c) ? [c, 0] : [s, 0];
    }
    const a = x_(s, i);
    return Oo(s, a !== void 0 && e.propertyOffset >= a.length);
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${Yk(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Ef(e, t) {
  if (!wu(e))
    return [e, t];
  const r = e.getParent();
  if (!r || !R(r))
    return [e, t];
  const n = e.getIndexWithinParent();
  if (n < 0)
    return [e, t];
  const i = e.getTextContentSize(), s = t >= i && t > 0 || t === i - 1 && h_.test(e.getTextContent());
  return [r, s ? n + 1 : n];
}
const h_ = /[ \u00A0]$/;
function g_(e, t, r) {
  let n;
  if (R(e))
    n = t > 0 ? e.getChildAtIndex(t - 1) : null;
  else if (t === 0)
    n = e.getPreviousSibling();
  else
    return [e, t];
  let i = !1;
  for (; S(n) && !Tn(n) && !Ks(n, 0, r); )
    n = n.getPreviousSibling(), i = !0;
  if (!i)
    return [e, t];
  const s = R(n) ? n.getLastDescendant() : n;
  return S(s) ? [s, s.getTextContentSize()] : [e, t];
}
function Af(e) {
  return R(e) ? "element" : "text";
}
function fs(e, t) {
  const r = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), n = r ? r[1] : e, i = rr(n);
  let s = ye();
  for (const o of i) {
    if (!s || !R(s))
      return;
    const a = vt(s, t)[o];
    s = a?.type === "element" ? a.node : void 0;
  }
  return s;
}
function kt(e, t, r) {
  return pn(e, t, Nt(r));
}
function pn(e, t, r) {
  const n = tl(e, t, r);
  if (n)
    return n;
  if (pe(e)) {
    const i = e.getChildrenSize(), s = e.getChildAtIndex(Math.min(t, i - 1));
    if (S(s)) {
      const a = t >= i ? s.getTextContentSize() : 0;
      return pn(s, a, r);
    }
    if (s && t > 0 && t < i) {
      const a = Dm(e, t, r);
      if (a)
        return a;
    }
    const o = e.getParent();
    if (o) {
      const a = e.getIndexWithinParent(), c = t > 0 ? a + 1 : a;
      return pn(o, c, r);
    }
  }
  if (R(e)) {
    const i = e.getChildAtIndex(t);
    if (i && Tn(i)) {
      const a = tl(i, 0, r);
      if (a)
        return a;
    }
    if (i && wu(i))
      return {
        jsonPath: lt(Pr(e))
      };
    const s = t > 0 ? e.getChildAtIndex(t - 1) : null;
    if (!i && s && m_(s, e))
      return wo(e, !0, r);
    if (je(e) || xn(e))
      return wo(e, t > 0, r);
    const o = tt(e) && Mr(e.getParent()) ? e.getParentOrThrow() : e;
    return Um(o, $i(e, t, r), r);
  }
  if (S(e)) {
    const i = Ks(e, t, r);
    if (i)
      return {
        jsonPath: lt([
          ...Pr(i.parent),
          i.index
        ]),
        offset: i.offset
      };
    const s = t > 0, o = s ? e.getNextSibling() : e.getPreviousSibling();
    if (S(o) && (Tn(o) || Ks(o, 0, r)))
      return pn(o, s ? 0 : o.getTextContentSize(), r);
  }
  return wo(e, t > 0, r);
}
function Dm(e, t, r) {
  for (let n = t; n < e.getChildrenSize(); n++) {
    const i = e.getChildAtIndex(n);
    if (!i)
      return;
    if (Tn(i))
      return tl(i, 0, r);
    if (S(i) && Ks(i, 0, r))
      return pn(i, 0, r);
    if (S(i) || xn(i))
      continue;
    const s = Qv(i, r);
    if (s)
      return Um(s.parent, s.point, r);
  }
}
function Um(e, t, r) {
  const n = Pr(e);
  return t.type === "text" ? {
    jsonPath: lt([...n, t.index]),
    offset: t.offset
  } : Ou(e, n, t.index, r);
}
function m_(e, t) {
  const r = Tn(e);
  return !!r && r.owner.is(t) && r.spans[0]?.bytes.kind === "closingMarker";
}
function wo(e, t, r) {
  const n = e.getParent();
  if (!n)
    return { jsonPath: lt(Pr(e)) };
  const i = e.getIndexWithinParent() + (t ? 1 : 0);
  if (pe(n)) {
    if (i > 0 && i < n.getChildrenSize()) {
      const s = Dm(n, i, r);
      if (s)
        return s;
    }
    return wo(n, i > 0, r);
  }
  return pn(n, i, r);
}
function Ou(e, t, r, n) {
  const i = vt(e, n), s = i[r];
  if (!s)
    return y_(e, t, i, n);
  const o = lt([...t, r]);
  return s.type === "text" ? { jsonPath: o, offset: 0 } : { jsonPath: o };
}
function y_(e, t, r, n) {
  if (Mr(e))
    return ia(e, t, 1, n);
  if (Nu(e) !== void 0) {
    const o = r.length - 1, a = r[o];
    return a?.type === "text" ? {
      jsonPath: lt([...t, o]),
      offset: a.length
    } : {
      jsonPath: lt(t),
      closingMarkerOffset: 0
    };
  }
  const i = Qr(e), s = t[t.length - 1];
  return b_(e) || !i || s === void 0 ? ia(e, t, 0, n) : Ou(i, t.slice(0, -1), s + 1, n);
}
function ia(e, t, r, n) {
  const i = lt(t), s = Nu(e);
  if (s !== void 0)
    return {
      jsonPath: i,
      closingMarkerOffset: s + r
    };
  if (R(e)) {
    const l = vt(e, n), u = l.length - 1, d = l[u], f = [...t, u];
    if (d?.type === "text")
      return { jsonPath: lt(f), offset: d.length + r };
    if (d)
      return ia(d.node, f, r, n);
  }
  const o = (l, u) => ({
    jsonPath: Im(i, l),
    propertyOffset: u.length + r
  }), a = (l, u) => ({
    jsonPath: i,
    keyName: l,
    keyClosingMarkerOffset: Ge(u).length + r
  });
  if (ke(e))
    return e.getPubnumber() !== void 0 ? a("pubnumber", "vp") : e.getAltnumber() !== void 0 ? a("altnumber", "va") : o("number", e.getNumber());
  if (je(e)) {
    const l = e.getPubnumber();
    return l !== void 0 ? o("pubnumber", l) : e.getAltnumber() !== void 0 ? a("altnumber", "ca") : o("number", e.getNumber());
  }
  if (ut(e))
    return o("code", e.getCode());
  if (D(e))
    return o("caller", e.getCaller());
  const c = Ne(e) ? e.getMarker() : k_(e);
  return c ? o("marker", c) : { jsonPath: i };
}
function Nu(e) {
  if (L(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : Ge(e.getMarker(), Pa(e)).length;
  if (D(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : Ge(e.getMarker()).length;
  if (Pe(e))
    return Ge("").length;
  if (Ne(e)) {
    const { closing: t } = wa(e.getTag(), e.getMarker(), e.getUnknownAttributes());
    return t === "" ? void 0 : t.length;
  }
}
function b_(e) {
  const t = Qr(e);
  return se(e) || tt(e) || ut(e) || om(e) || Ne(e) && e.getTag() === "table:row" || Mr(t) || ti(t);
}
function k_(e) {
  if (se(e) || L(e) || Pe(e) || om(e) || yC(e))
    return e.getMarker();
}
function Pf(e) {
  if (R(e)) {
    const r = e.getLastChild();
    if (r && S(r))
      return [r, r.getTextContent().length];
  }
  const t = e.getNextSibling();
  return t && R(t) ? [t, 0] : Oo(e, !0);
}
function Oo(e, t) {
  const r = e.getParent();
  return r ? [r, e.getIndexWithinParent() + (t ? 1 : 0)] : [void 0, void 0];
}
function x_(e, t) {
  if (ke(e) || je(e)) {
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
function wf(e, t) {
  const r = ye(), n = ia(r, [], 1, t);
  return Of(n) === Of(e) ? [r, r.getChildrenSize()] : void 0;
}
function Of(e) {
  return JSON.stringify(Object.entries(e).sort(([t], [r]) => t.localeCompare(r)));
}
function T_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!xn(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function Pr(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = Qr(r);
    if (!n)
      break;
    const i = Yv(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Fm() {
  for (let e = ye().getFirstChild(); e; e = e.getNextSibling())
    if (ti(e))
      return !0;
  return !1;
}
function Km(e, t, r, n, i, s, o) {
  if (!$e.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Mu(r, i) : $();
  if (!O(a))
    return;
  const c = S_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (vs(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = zm(e, l, c, i, s, void 0, void 0);
  return C_(u, a, i), u;
}
function Ru(e) {
  return e !== "expanded";
}
function v_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!S(r) || !L(r.getParent()))
    return;
  if (w(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return w(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function C_(e, t, r) {
  const n = Ru(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Fv(t), hm(t), mn(t);
  const i = v_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(L)?.selectEnd();
}
function Mi(e, t, r) {
  const n = jr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(gt(e)) : r?.markerMode === "visible" && n.append(Vr("marker", Oe(e)));
  const s = t === "" ? Xt : i ? q + t : t;
  return n.append(ve(s)), n;
}
function S_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Mi("fr", f, n)), !e.isCollapsed()) {
        const p = $f(e);
        p.length > 0 && o.push(Mi("fq", p, n));
      }
      o.push(Mi("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Mi("xo", f, n)), !e.isCollapsed()) {
        const p = $f(e);
        p.length > 0 && o.push(Mi("xq", p, n));
      }
      o.push(Mi("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function zm(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : Ru(n?.noteMode), l = Hl(e, t, c);
  s && ht(l, yn, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = gt(e), u && d.setMode("token"), a || (f = gt(e, "closing"))) : n?.markerMode === "visible" && (d = Vr("marker", Oe(e) + " "), a || (f = Vr("marker", Ge(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = ve(Ut(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const h = () => Ra(), g = r.flatMap(__(h));
    if (t === "")
      l.append(...g);
    else {
      const m = iu(r);
      let x = () => {
      };
      i?.noteCallerOnClick && (x = i.noteCallerOnClick), p = vu(l.__caller, m, x), l.append(p, h(), ...g);
    }
  }
  return f && l.append(f), l;
}
function Nf(e) {
  if (typeof e == "string") {
    const i = G(e);
    return D(i) ? i : void 0;
  }
  const t = Yi();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => D(i.node))[e]?.node;
  if (D(n))
    return n;
}
function Rf(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (fi(n) || !n) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      n.selectEnd();
  } else
    e.getChildren().reverse().find(L)?.selectEnd();
}
function __(e) {
  return (t) => Tt(t) ? [t] : [t, e()];
}
function M_(e) {
  const t = e.getParent();
  return t !== null && it(t, D) !== null;
}
function $f(e) {
  if (!O(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = mh(e);
  let a = "";
  for (const c of t)
    if (!(D(c) || tr(c) || M_(c)) && !w(c) && !En(c) && re(c, ce) !== "attribute") {
      if (ke(c)) {
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
const $u = [
  Jt,
  Ct,
  ...BC
], E_ = [
  Qi,
  ...$u
], A_ = si((e, t) => {
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
function P_() {
  const [e, t] = me(void 0), [r, n] = me(), i = Z(null), s = he((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = Sx(l, c, () => {
      _x(l, c, {
        placement: "bottom-start",
        middleware: [Mx(), Ex()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = he(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return j(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function w_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = P_();
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
const O_ = jk(A_);
function Bm({ isOpen: e = !1, children: t }) {
  const r = Z(null), { coords: n, placement: i } = w_({ isOpen: e, floatingBoxRef: r }), s = Le(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return Un(
    M(O_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const jm = fh(void 0);
function qu() {
  const e = ph(jm);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function N_(e, t) {
  const [r, n] = me(0), [i, s] = me(-1), o = Le(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = he(() => {
    n((d) => {
      const f = o.length;
      return f ? (d - 1 + f) % f : 0;
    });
  }, [o.length]), l = he(() => {
    n((d) => {
      const f = o.length;
      return f ? (d + 1) % f : 0;
    });
  }, [o.length]), u = he(() => {
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
function R_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = N_(t, r);
  return M(jm.Provider, { value: i, children: M("div", { ...n, children: e }) });
}
const Vm = si(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = qu(), u = he((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = he((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return M("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function $_({ children: e, autoIndex: t = !0, ...r }) {
  const n = Z(null), { state: { activeIndex: i, menuItems: s } } = qu(), o = Le(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Le(() => {
    const c = o(s);
    return t ? Vk.map(c, (l, u) => Wk(l) && l.type === Vm && l.props.index === void 0 ? Hk(l, { index: u }) : l) : c;
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
const q_ = (e, t, r) => No(e, r).toLowerCase().includes(t.toLowerCase()), qf = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", No = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function I_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? qf(r[0]) : "") : (u = n || (r.length > 0 ? qf(r[0]) : ""), d = (h, g) => q_(h, g, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((h) => {
    try {
      return d(h, t);
    } catch (g) {
      return console.warn("Error filtering item:", h, g), !1;
    }
  }).sort((h, g) => {
    const m = (_) => (p.has(_) || p.set(_, No(_, f).toLowerCase()), p.get(_) ?? ""), x = a ? No(h, f) : m(h), v = a ? No(g, f) : m(g);
    for (const _ of c)
      switch (_) {
        case "exact":
          if (x === l && v !== l)
            return -1;
          if (v === l && x !== l)
            return 1;
          break;
        case "startsWith":
          if (x.startsWith(l) && !v.startsWith(l))
            return -1;
          if (v.startsWith(l) && !x.startsWith(l))
            return 1;
          break;
        case "contains": {
          const A = x.indexOf(l), E = v.indexOf(l);
          if (A !== -1 && E === -1)
            return -1;
          if (E !== -1 && A === -1)
            return 1;
          if (A !== -1 && E !== -1)
            return A - E;
          break;
        }
      }
    return x.localeCompare(v);
  });
}
const fc = {
  Root: R_,
  Options: $_,
  Option: Vm
};
function L_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Le(() => I_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function D_() {
  const { moveUp: e, moveDown: t, select: r } = qu();
  return Le(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const U_ = () => {
  const e = D_(), [t] = de();
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
    return t.registerCommand(Jr, r, Be);
  }, [t, e]);
};
function F_() {
  return U_(), null;
}
const K_ = ["Shift", "Control", "Alt", "Meta"];
function Wm(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = de(), u = s !== void 0, [d, f] = me(""), p = u ? s ?? "" : d, h = L_({ query: p, items: t, filterBy: "name" }), g = (m) => {
    n?.(), r ? r(m) : m.action(l);
  };
  return j(() => {
    a?.(p, h);
  }, [a, p, h]), j(() => l.registerCommand(Jr, (m) => {
    if (u || c?.includes(m.key) || K_.includes(m.key))
      return !1;
    if ((m.ctrlKey || m.metaKey || m.altKey) && !m.getModifierState("AltGraph"))
      return n?.(), !1;
    const v = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((_) => _.slice(0, -1));
      }
    }[m.key];
    return v ? (m.stopPropagation(), m.preventDefault(), v(), !0) : m.key.length === 1 ? (m.stopPropagation(), m.preventDefault(), m.key !== o && f((_) => _ + m.key), !0) : !1;
  }, Be), [l, u, p, o, n, c]), we(fc.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (m) => g(m), children: [!u && M("input", { value: p, type: "text", disabled: !0 }), M(F_, {}), M(fc.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (m) => m.map((v, _) => we(fc.Option, { index: _, children: [M("span", { className: "label", children: v.label ?? v.name }), M("span", { className: "description", children: v.description })] }, v.name)) })] });
}
function z_({ trigger: e, items: t }) {
  const [r] = de(), [n, i] = me(!1), s = he((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return j(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), j(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = $();
      if (O(l))
        return l;
    });
    a.read(() => {
      const l = $();
      !O(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && M(Bm, { isOpen: n, children: ({ placement: o }) => M(Wm, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function B_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: Le(() => {
    if (!t || !e)
      return;
    const i = _r(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = _r(o), { action: c } = r(o, a);
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
const j_ = "display-annotation", V_ = [
  Ue,
  nr,
  ct,
  pr,
  Jt,
  Ct
], Hm = /* @__PURE__ */ new Set();
function pc(e, t) {
  return `${e}\0${t}`;
}
function W_(e) {
  const t = {};
  for (const { type: r, id: n } of e) {
    const i = t[r] ??= [];
    i.includes(n) || i.push(n);
  }
  return t;
}
function Gm(e) {
  ht(e, Na, void 0), R(e) && e.getChildren().forEach(Gm);
}
const hc = /* @__PURE__ */ new WeakMap();
function H_(e) {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakSet();
  let o = /* @__PURE__ */ new Set();
  const a = e._config.theme;
  function c(p, h, g) {
    e.getEditorState().read(() => {
      const m = Ji(p);
      if (m)
        for (const x of Zn(m)) {
          const v = zs(e, x.type, x.id)?.[g];
          v?.(h, x.type, x.id, Bc(m, x));
        }
    }, { editor: e });
  }
  function l(p, h) {
    const g = e.getElementByKey(p);
    if (!g)
      return;
    const m = h.length > 0 ? [
      ...Wh(a, W_(h)),
      j_
    ].flatMap((v) => v.match(/\S+/g) ?? []) : [], x = i.get(g) ?? [];
    Po(g, ...x.filter((v) => !m.includes(v))), Ts(g, ...m), i.set(g, m), m.length > 0 && !s.has(g) && (s.add(g), g.addEventListener("click", (v) => c(g, v, "onClick")), g.addEventListener("mouseenter", (v) => c(g, v, "onMouseEnter")), g.addEventListener("mouseleave", (v) => c(g, v, "onMouseLeave")));
  }
  function u(p) {
    e.getEditorState().read(() => {
      for (const [h, g] of p) {
        const m = g === "destroyed" ? null : G(h), x = m ? Zn(m) : [], v = r.get(h) ?? [];
        for (const { type: _, id: A } of v) {
          const E = pc(_, A);
          if (x.some((T) => T.type === _ && T.id === A))
            continue;
          const P = t.get(E);
          P?.delete(h), P && P.size === 0 && o.add(E);
        }
        for (const _ of x) {
          const A = pc(_.type, _.id);
          let E = t.get(A);
          E || t.set(A, E = /* @__PURE__ */ new Set()), E.add(h), m && n.set(A, Bc(m, _));
        }
        x.length > 0 ? r.set(h, x) : r.delete(h), m && l(h, x);
      }
    });
  }
  function d({ tags: p }) {
    const h = o;
    o = /* @__PURE__ */ new Set();
    const g = p.has(Sa), m = p.has(Ta);
    for (const x of h) {
      if ((t.get(x)?.size ?? 0) > 0)
        continue;
      t.delete(x);
      const [v, _] = x.split("\0");
      if (m)
        continue;
      if (g) {
        jc(e, v, _);
        continue;
      }
      const A = zs(e, v, _);
      !A || A.hadMarks || e.getEditorState().read(() => {
        for (const { node: P } of Fl())
          if (pe(P) && P.hasID(v, _))
            return !0;
        return !1;
      }) || (jc(e, v, _), A.onRemove?.(v, _, "destroyed", n.get(x) ?? ""));
    }
  }
  const f = et(...V_.filter((p) => e.hasNodes([p])).map((p) => e.registerMutationListener(p, u, { skipInitialization: !1 })), e.registerUpdateListener(d), iC(e), e.registerCommand(
    Qk,
    ({ nodes: p }) => (p.forEach(Gm), !1),
    // Critical, and never handling the command, so a handler that does handle it cannot skip the
    // strip.
    Cr
  ));
  return {
    index: {
      keysFor: (p, h) => t.get(pc(p, h)) ?? Hm
    },
    references: 0,
    unregister: f
  };
}
function G_(e) {
  let t = hc.get(e);
  t || (t = H_(e), hc.set(e, t)), t.references++;
  const r = t;
  let n = !1;
  return {
    index: r.index,
    release: () => {
      n || (n = !0, r.references--, !(r.references > 0) && (r.unregister(), hc.delete(e)));
    }
  };
}
function Jm(e) {
  const t = Z(void 0);
  return j(() => {
    const r = G_(e);
    return t.current = r.index, () => {
      t.current = void 0, r.release();
    };
  }, [e]), Le(() => ({ keysFor: (r, n) => t.current?.keysFor(r, n) ?? Hm }), []);
}
function ws(e, t) {
  return `${e}:${t}`;
}
function J_(e, t) {
  j(() => {
    if (!e.hasNodes([Ze]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return et(Kl(e, Ze, (n) => Jn(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], h = a[l]?.[d], g = c[l]?.[d];
          i.addID(l, d, f, p, h, g);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(Ze, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = G(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : pe(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!Ze.isReservedType(c))
              for (const u of l) {
                let d = t.get(ws(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(ws(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(ws(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const Y_ = si(function({ logger: t, viewOptions: r }, n) {
  const [i] = de(), s = Le(() => /* @__PURE__ */ new Map(), []);
  J_(i, s);
  const o = Jm(i), a = (c, l, u) => {
    const d = Array.from(u ?? s.get(ws(c, l)) ?? []);
    for (const h of d) {
      const g = G(h);
      pe(g) && (g.deleteID(c, l), g.hasNoIDsForEveryType() && Ho(g));
    }
    const f = [];
    for (const h of Array.from(o.keysFor(c, l))) {
      const g = G(h);
      if (!g)
        continue;
      const m = Zn(g).filter((x) => x.type === c && x.id === l);
      Xg(g, c, l) && f.push(...m.map((x) => Bc(g, x)));
    }
    const p = zs(i, c, l);
    jc(i, c, l), f.length > 0 && p && d.length === 0 && p.onRemove?.(c, l, "removed", f.join(""));
  };
  return Nl(n, () => ({
    setAnnotation(c, l, u, d, f, p, h) {
      if (Ze.isReservedType(l))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${l}'. Use the appropriate plugin instead.`);
      i.update(() => {
        const g = Mu(c, r);
        if (g === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        a(l, u), lu(g, l, u, d, f, p, h);
      }, { tag: $c });
    },
    removeAnnotation(c, l) {
      if (Ze.isReservedType(c))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${c}'. Use the appropriate plugin instead.`);
      const u = s.get(ws(c, l));
      (u === void 0 || u.size === 0) && o.keysFor(c, l).size === 0 || i.update(() => {
        a(c, l, u);
      }, { tag: $c });
    }
  })), null;
});
function X_({ dirtyElements: e, dirtyLeaves: t, prevEditorState: r, tags: n }, i) {
  return e.size === 0 && t.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
  // stack — its bytes really did change, so it must reach `onChange` like any edit.
  // Without this exemption the cached USJ and the emitted delta both keep showing the
  // pre-settle bytes, and the host saves a document the editor is no longer displaying.
  n.has(yh) && !n.has(Ih) || i.ignoreTags.some((s) => n.has(s)) || r.isEmpty();
}
function Q_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Ri();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = G(i), o = s !== null && cr(s) !== void 0;
    if (t.size === 1 && S(s) && !o && CS(s)) {
      const a = Cm(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = G(i);
          return new Ri([S(d) ? Zc(d) : { insert: "" }]);
        }), l = new Ri([Zc(s)]), u = new Ri(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = xf(r), c = xf(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
function Z_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += eM(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), rM(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += nM(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), sM(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function eM(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), tM(t, e.retain, e.attributes, r, n)), e.retain);
}
function tM(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = ye();
  function l(u) {
    if (s <= 0)
      return !0;
    if (Hr(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), p = d - f, h = Math.min(s, p);
        if (h > 0) {
          let g = u;
          const m = f > 0, x = h < d - f;
          if (m && x) {
            const [, v] = u.splitText(f);
            [g] = v.splitText(h);
          } else m ? [, g] = u.splitText(f) : x && ([g] = u.splitText(h));
          if (vn(r)) {
            const v = g.getParent();
            if (L(v)) {
              const _ = r.char;
              let A;
              Array.isArray(_) ? a >= 0 && a <= _.length - 1 && (A = _[a]) : a === 0 && (A = _);
              const E = A ? Xn(A, v) : !1;
              if (E && Array.isArray(_) && _.length > 1) {
                const P = ve("");
                g.replace(P);
                const T = typeof r.segment == "string" ? r.segment : void 0, B = es(_.slice(1), n, g, T);
                let V = P;
                for (const W of B)
                  V.insertAfter(W), V = W;
                P.remove(), Bt(r, g);
              } else if (E)
                Bt(r, g);
              else {
                g.remove();
                const P = If(g, r, n, i);
                if (P && P.length > 0) {
                  let T = v;
                  for (const B of P)
                    T.insertAfter(B), T = B;
                }
              }
            } else {
              const _ = ve("");
              g.replace(_);
              const A = If(g, r, n, i);
              if (A && A.length > 0) {
                let E = _;
                for (const P of A)
                  E.insertAfter(P), E = P;
                _.remove();
              } else
                _.replace(g);
            }
          } else
            Bt(r, g);
          s -= h;
        }
      }
      o += d;
    } else if (Ft(u))
      e <= o && o < e + t && s > 0 && (Lf(u, r), s -= 1), o += 1;
    else if (L(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (vn(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            rl(u, p.style), typeof p.cid == "string" && ht(u, Yn, () => p.cid);
            const h = Ve(p, ra);
            h && Object.keys(h).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...h
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || hM(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && Nc(u), !0;
        }
      }
      d && Nc(u), a -= 1;
    } else if (Zt(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!tt(u))
          Lf(u, r);
        else if (Iu(r)) {
          const p = Qm(r.para, n);
          p && u.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if (R(u)) {
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
function If(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = es(t.char, r, e, i), o = s.find(L);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Bt(t, e);
    return;
  }
  const a = {};
  ry.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Bt(t, e), s;
}
function Ym(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  w(r) ? (r.setMarker(t), r.setTextContent(Oe(t))) : Tt(r) && r.getTextType() === "marker" && r.setTextContent(Oe(t) + q);
}
function rl(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    w(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = L(e.getParent()), i = e.getFirstChild();
  Tt(i) && i.getTextType() === "marker" && i.getTextContent() === Oe(r, n) && i.setTextContent(Oe(t, n));
  const s = e.getLastChild();
  Tt(s) && s.getTextType() === "marker" && s.getTextContent() === Ge(r, n) && s.setTextContent(Ge(t, n));
}
function Lf(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && L(e) && vn(t)) {
      const i = nl(n);
      if (rl(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        ht(e, Yn, () => o);
      }
      const s = Ve(i, ra);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (je(e) || ke(e) || Pe(e) || D(e) || Ne(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (ut(e) || se(e) || L(e)) && (r === "style" && se(e) ? Ym(e, n) : r === "style" && L(e) ? rl(e, n) : r === "code" && ut(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && ht(e, yn, () => n));
  }
}
function rM(e, t, r) {
  if (t <= 0)
    return;
  const n = ye();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Hr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (Ft(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Zt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Zt(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Gt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Re(p)) {
            let h = i + 1;
            const g = p.getChildren();
            for (const x of g) {
              if (s <= 0)
                break;
              const v = i;
              if (i = h, o(x)) {
                i = v;
                break;
              }
              Hr(x) ? h += x.getTextContentSize() : Ft(x) && (h += 1), i = v;
            }
            const m = p.getChildren();
            for (const x of m)
              x.remove(), a.append(x);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Gt(), !0);
        } else se(a) ? a.replace(Gt(), !0) : a.remove();
      }
      i += 1;
    } else if (R(a)) {
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
function nM(e, t, r, n, i) {
  if (t === Vs)
    return Df(e, r, n, i);
  if (t.endsWith(Vs) && !Iu(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (vn(r))
        throw new Error("Text + LF should not have char attributes");
      o += sa(e, s, r, i);
    }
    return o += Df(e + o, r, n, i), o;
  } else return vn(r) ? iM(e, t, r, n, i) : sa(e, t, r, i);
}
function iM(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = ve(t === "" ? Xt : t);
  Bt(r, s);
  let o;
  {
    let m = function(x) {
      if (Hr(x)) {
        const v = x.getTextContentSize();
        if (e >= g && e < g + v) {
          const _ = x.getParent();
          return L(_) && (o = _), !0;
        }
        g += v;
      } else if (Ft(x))
        g += 1;
      else if (L(x)) {
        const v = x.getChildren();
        for (const _ of v)
          if (m(_))
            return !0;
      } else if (R(x)) {
        const v = x.getChildren();
        for (const _ of v)
          if (m(_))
            return !0;
        Zt(x) && (g += 1);
      }
      return !1;
    };
    const h = ye();
    let g = 0;
    m(h);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const h = a[0];
      h && Xn(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Xn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = es(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(L);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), sa(e, t, void 0, i);
  const f = {};
  for (const [h, g] of Object.entries(r))
    h !== "char" && h !== "segment" && typeof g == "string" && (f[h] = g);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const h of u)
    if (!Xm(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), sa(e, t, void 0, i));
}
function sa(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = ye();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Hr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = ve(t);
        if (Bt(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          L(f) && !vn(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Ft(c))
      s += 1;
    else if (L(c)) {
      if (!o && e === s) {
        const d = ve(t);
        Bt(r, d);
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
        const d = ve(t);
        return Bt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Zt(c)) {
      if (!o && e === s) {
        const d = ve(t);
        Bt(r, d);
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
        const d = ve(t);
        return Bt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (R(c)) {
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
    const c = ve(t);
    Bt(r, c);
    const l = Gt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Xm(e, t, r) {
  const n = ye();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Gt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!R(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (Re(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Gt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Hr(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (Ft(l))
        i += 1;
      else if (L(l)) {
        if (o(l))
          return !0;
      } else if (Zt(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (tt(u) && Zt(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (R(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return R(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Gt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Re(a) ? tt(a) && se(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Re(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (L(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Re(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function sM(e, t, r, n, i) {
  let s;
  return dn("chapter", t) ? s = aM(t.insert.chapter, r) : dn("verse", t) ? s = cM(t.insert.verse, r) : dn("ms", t) ? s = lM(t.insert.ms) : dn("note", t) ? s = Zm(t, r, n, i) : dn("unknown", t) ? s = ey(t, r, n, i) : dn("unmatched", t) && (s = dM(t.insert.unmatched, r)), s ? Xm(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Df(e, t, r, n) {
  let i;
  Iu(t) ? i = Qm(t.para, r) : pM(t) && (i = oM(t.book)), i ??= Gt();
  const s = i, o = se(s), a = tt(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (Hr(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (se(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const h = e - c, [g] = h > 0 ? d.splitText(h) : [void 0];
          let m, x = g?.getPreviousSibling();
          for (; x; ) {
            const v = x;
            x = x.getPreviousSibling(), m ? m.insertBefore(v) : s.append(v), m = v;
          }
          return g && s.append(g), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Ft(d))
      c += 1;
    else if (Zt(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (tt(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (se(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && se(d) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${d.getMarker()}) at targetIndex ${e}`), d.insertAfter(s), l = !0, !0;
    } else if (R(d)) {
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
  return u(ye()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function oM(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Us || !r || !Qt.isValidBookCode(r))
    return;
  const n = Ve(e, uS);
  return Mg(r, n);
}
function Qm(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Ve(e, lS), i = Fs(r, n);
  if (!Zi(t))
    return i;
  if (t.markerMode === "editable")
    i.append(gt(r), Ra());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Oe(r) + q;
    i.append(t.hasGutterParaMarkers ? zT(s) : Vr("marker", s));
  }
  return i;
}
function aM(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Ve(e, dS);
  let a;
  if (t.markerMode === "editable")
    a = ug(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = tu(r, c, n, i, s, o);
  }
  return a;
}
function cM(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Ve(e, fS);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Ht(r, n);
    c = Zh(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = mu(n, l, i, s, o, a);
  }
  return c;
}
function lM(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Ve(e, pS);
  return Uh(t, r, n, s, i);
}
function Zm(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Ve(i.note, hS), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const g of c?.ops ?? [])
    if (typeof g.insert == "string")
      if (vn(g.attributes)) {
        const m = es(g.attributes.char, t, ve(g.insert), void 0, ty(g.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...m);
      } else
        p.push(ve(g.insert));
  return zm(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function ey(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Ve(i, gS), l = Zl(s, o, c), u = a?.ops ?? [];
  u.length > 0 && uM(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && ht(l, yn, () => d), l;
}
function uM(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (vn(s.attributes)) {
        const o = ve(s.insert), a = es(s.attributes.char, t, o, void 0, ty(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(ve(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (dn("unknown", s)) {
        const o = ey(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (dn("note", s)) {
        const o = Zm(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function dM(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = uu(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function ty(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function nl(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function es(e, t, r, n, i, s = !1, o = !1) {
  S(r) && r.getTextContentSize() === 0 && r.setTextContent(Xt);
  const a = () => {
    o && S(r) && r.getTextContent() !== Xt && r.setTextContent(q + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(nl), l = c[0], u = i?.[i.length - 1];
    if (L(u) && Xn(l, u))
      return c.length > 1 ? es(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, p, h) => {
      const g = jr(p.style, Ve(p, ra));
      if (typeof p.cid == "string" && ht(g, Yn, () => p.cid), n && h === c.length - 1 && ht(g, yn, () => n), f)
        if (L(f)) {
          const m = f.getMarker(), x = [];
          mc(m, x, t, !0), x.forEach((_) => g.append(_)), g.append(f);
          const v = [];
          gc(f, v, t, !0), v.forEach((_) => g.append(_));
        } else
          g.append(f);
      return g;
    }, r);
    return mc(l.style, d, t, s), gc(d, d, t, s), [d];
  } else {
    const c = nl(e), l = i?.[i.length - 1];
    if (L(l) && Xn(c, l))
      return r && l.append(r), [];
    a();
    const u = jr(c.style, Ve(c, ra));
    return typeof c.cid == "string" && ht(u, Yn, () => c.cid), n && ht(u, yn, () => n), r && u.append(r), mc(c.style, u, t, s), gc(u, u, t, s), [u];
  }
}
function gc(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && fM(e.getMarker(), t, r, !1, n);
}
function mc(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = gt(e, "opening", n) : r?.markerMode === "visible" && (i = Vr("marker", Oe(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function fM(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = gt("", "selfClosing") : s = gt(e, "closing", i) : r?.markerMode === "visible" && (s = Vr("marker", n ? Ge("") : Ge(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function pM(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Iu(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function vn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function hM(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Bt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        ht(t, yn, () => n);
        continue;
      }
      if (gM(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const ry = [
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
function gM(e) {
  return ry.includes(e);
}
function mM() {
  const [e] = de();
  return j(() => e.registerCommand(va, (t) => (yM(t), !1), Vn), [e]), null;
}
function yM(e) {
  if (bM(e.target))
    return;
  const t = $();
  O(t) && kM(t);
}
function ts(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (er(t))
      r++, t = t.getNextSibling(), S(t) && t.getTextContent() === q && (r++, t = t.getNextSibling());
    else if (ke(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (lr(e, r), !0);
}
function bM(e) {
  if (!bh(e))
    return !1;
  const t = Ji(e);
  if (!BT(t))
    return !1;
  const r = t.getParent();
  return r ? Re(r) ? ts(r) : (lr(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function kM(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = G(t.key);
  if (!Re(r))
    return !1;
  const n = r.getFirstChild();
  return !$r(n) && !fi(n) ? !1 : ts(r);
}
function xM() {
  const [e] = de();
  return j(() => {
    const t = (r) => r instanceof KeyboardEvent && !TM(r) || !ny() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return et(
      e.registerCommand(Jr, t, Be),
      e.registerCommand(Ll, t, Be),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm records what a cut would cover
      // and claims nothing, so either order of the two is correct: with no removal, nothing it
      // armed can be reaped.
      e.registerCommand(Kr, t, Cr),
      e.registerCommand(Wn, t, Cr),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Dl, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Ji(r.target);
        return !n || !ri(n) ? !1 : (r.preventDefault(), !0);
      }, Be),
      e.registerCommand(Zk, t, Be),
      e.registerCommand(ex, t, Be),
      e.registerCommand(tx, t, Be)
    );
  }, [e]), null;
}
function TM(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function ri(e) {
  return it(e, (t) => Ne(t) || nm(t)) ?? void 0;
}
function ny() {
  const e = $();
  return O(e) ? ri(e.anchor.getNode()) !== void 0 || ri(e.focus.getNode()) !== void 0 : !1;
}
function vM(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function CM(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), vM(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function SM(e, t, r, n) {
  if (!DM(t) || CM(e, r))
    return !1;
  const i = r === "up" ? cS(t) : aS(t);
  return i && n.preventDefault(), i;
}
function _M({ viewOptions: e }) {
  const [t] = de();
  return MM(t, e), null;
}
function MM(e, t) {
  j(() => {
    if (!e.hasNodes([Rr, Ct, $e]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = $();
      if (!O(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = Uf(o), d = RM(i, Ff(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return SM(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = Uf(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Ff(a, n.key) ? l = !c && Bf(i, "next") || !c && AM(i) || IM(i) || !c && s && zf(i, "next") : EM(a, n.key) && (l = !c && Bf(i, "previous") || !c && PM(i) || LM(i, t) || !c && s && zf(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Jr, r, Be);
  }, [e, t]);
}
function Uf(e) {
  return e.dir || "ltr";
}
function Ff(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function EM(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function il(e) {
  if (!L(e) || e.getMarker() !== "fp")
    return;
  const t = cr(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function AM(e) {
  const t = il(Ig(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (lr(t, 0), !0);
}
function PM(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = il(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Kf(n);
  }
  if (t.offset === 0) {
    const n = il(r);
    return n ? Kf(n) : !1;
  }
  return !1;
}
function Kf(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (S(t))
    return t.select(), !0;
  if (R(t)) {
    const i = t.getLastDescendant();
    return S(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const oa = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function wM(e) {
  if (oa)
    for (const { segment: r } of oa.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function OM(e) {
  if (oa) {
    let n = 0;
    for (const { index: i } of oa.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function iy(e) {
  for (let t = e; t; t = t.getParent())
    if (R(t) && !t.isInline())
      return t;
}
function sy(e) {
  return !!e && w(e) && ri(e) !== void 0;
}
function zi(e) {
  return S(e) && !e.isToken() && !sy(e) && e.getTextContentSize() > 0;
}
function oy(e) {
  return xa(e) ? !0 : D(e) ? e.getIsCollapsed() === !0 : S(e) ? (e.isToken() || sy(e)) && e.getTextContentSize() > 0 : Il(e) ? !Pe(e) : !1;
}
function Bi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Ua(e, t, r) {
  for (let n = e; n; ) {
    if (oy(n))
      return n;
    if (R(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? Bi(n, t, r);
      continue;
    }
    if (zi(n))
      return n;
    n = Bi(n, t, r);
  }
}
function Lu(e, t, r, n, i) {
  return r === "element" && R(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? Bi(e, n, i) : r === "text" && oy(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : Bi(e, n, i);
}
function yc(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Lu(e.node, e.offset, e.kind, "previous", t), n = Ua(r, "previous", t);
  if (!n)
    return e;
  if (zi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function NM(e, t) {
  const r = e.getNode(), n = iy(r);
  if (!n)
    return;
  if (e.type === "text" && zi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return yc({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Lu(r, e.offset, e.type, t, n), s = Ua(i, t, n);
  if (!s)
    return;
  if (zi(s)) {
    const c = s.getTextContent(), l = t === "next" ? wM(c) : OM(c);
    return yc({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return yc({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function ay(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = NM(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function zf(e, t) {
  return ay(e, t, "collapse");
}
function RM(e, t) {
  return ay(e, t, "extend");
}
function $M(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && zi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Lu(n, e.offset, e.type, t, r);
  return Ua(i, t, r) === void 0;
}
function qM(e, t) {
  const r = ye();
  for (let n = e; n; ) {
    const i = Bi(n, t, r), s = i && Ua(i, t, r);
    if (!s)
      return;
    if (n = ri(s), !n)
      return s;
  }
}
function Bf(e, t) {
  const r = e.anchor, n = r.getNode();
  if (ri(n))
    return !1;
  const i = iy(n);
  if (!i || !$M(r, t, i))
    return !1;
  const s = Bi(i, t, ye()), o = s && ri(s);
  if (!o)
    return !1;
  const a = qM(o, t);
  if (!a)
    return !0;
  if (zi(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function jf(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function IM(e) {
  const t = e.anchor.getNode(), r = Ig(e);
  if (D(r) && !w(r.getFirstChild())) {
    if (Re(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Re(i) && ts(i)) && i.selectStart(), !0;
      }
    } else return Tt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Re(t) && D(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : jf(r), !0;
  }
  const n = r?.getParent();
  if (Tt(r) && D(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? jf(n) : n.selectEnd(), !0;
  }
  return !1;
}
function LM(e, t) {
  const r = Lv(e);
  if (oo(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (ut(i.getParent()))
    return !0;
  if (D(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!fi(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (Re(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = it(o, (c) => D(c));
    if (D(a) && a.getIsCollapsed()) {
      const c = a.getParent();
      if (!c)
        return !1;
      const l = a.getIndexWithinParent();
      return c.select(l, l), !0;
    }
  }
  const s = cr(i);
  if (!s || s.getIsCollapsed())
    return !1;
  if (tr(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function DM(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return ke(t) && Il(t);
}
function UM() {
  const [e] = de();
  return FM(e), null;
}
function FM(e) {
  j(() => {
    if (!e.hasNodes([_e]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return et(
      e.registerNodeTransform(_e, BM),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(_e, DT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(_e, gg),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(_e, (t) => js(Wr("char"), t)),
      e.registerNodeTransform(Ue, jM)
    );
  }, [e]);
}
function bc(e) {
  return e.getChildren().some(w);
}
function KM(e, t) {
  const r = t.getFirstChild();
  if (!w(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (so(n)) {
    const i = n.getTextContent();
    i.startsWith(q) && (i === q ? n.remove() : n.setTextContent(i.slice(q.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function zM(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  w(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function BM(e) {
  if (!L(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (bc(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = re(e, Yn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (L(i) && Xn({ style: t, cid: r }, i) && Tr(n, i.getUnknownAttributes()))
    if (bc(i)) {
      if (KM(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  L(s) && Xn({ style: t, cid: r }, s) && Tr(n, s.getUnknownAttributes()) && (bc(s) ? zM(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function jM(e) {
  const t = e.getParent();
  if (!L(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(Xt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function cy(e) {
  return e.replaceAll("	", " ");
}
const Du = (e) => {
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
      n.setData(o, cy(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(Kr, s);
  });
}, Uu = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", cy(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(Kr, i);
  });
};
function VM() {
  const [e] = de();
  return j(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(zo ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), e.dispatchCommand(Ca, null)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), e.dispatchCommand(Wn, null)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Uu(e) : Du(e)));
    };
    return e.registerRootListener((r, n) => {
      n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
    });
  }, [e]), null;
}
function WM({ logger: e }) {
  const [t] = de();
  return j(() => et(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Jr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), qi),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(Kr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, qi),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Dl, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, qi)
  ), [t, e]), null;
}
function HM({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), M("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: M("span", { className: "text", children: i.title }) });
}
function GM({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return M("div", { className: "typeahead-popover", children: M("ul", { children: e.map((i, s) => M(HM, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let JM = 0;
class ps {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${JM++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function YM({ options: e } = {}) {
  const [t] = de(), [r, n] = me(() => !t.isEditable()), [i, s] = me({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = me(void 0), c = Le(() => {
    const d = [
      new ps("Cut", {
        onSelect: () => {
          t.dispatchCommand(Wn, null);
        },
        isDisabled: r
      }),
      new ps("Copy", {
        onSelect: () => {
          t.dispatchCommand(Ca, null);
        }
      }),
      new ps("Paste", {
        onSelect: () => {
          Du(t);
        },
        isDisabled: r
      }),
      new ps("Paste as Plain Text", {
        onSelect: () => {
          Uu(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new ps(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...d, ...f];
  }, [t, r, e]), l = he(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  j(() => {
    const d = (f) => {
      const p = f.target;
      t.getRootElement() === p || wg(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
    };
    return t.registerRootListener((f, p) => {
      p?.removeEventListener("contextmenu", d), f && f.addEventListener("contextmenu", d);
    });
  }, [t]), j(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      l();
    };
    return globalThis.addEventListener("scroll", d, !0), () => globalThis.removeEventListener("scroll", d, !0);
  }, [i.isOpen, l]), j(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      l();
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [i.isOpen, l]), j(() => {
    if (!i.isOpen)
      return;
    const d = (f) => {
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
    return document.addEventListener("keydown", d, !0), () => document.removeEventListener("keydown", d, !0);
  }, [i.isOpen, l, c, o, t]), j(() => t.registerEditableListener((d) => {
    n(!d);
  }), [t]);
  const u = Z(null);
  return Xs(() => {
    const d = u.current;
    if (!d)
      return;
    const { width: f, height: p } = d.getBoundingClientRect(), h = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), g = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    d.style.left = `${h}px`, d.style.top = `${g}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? kx.createPortal(M("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: M(GM, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), l());
  }, onOptionMouseEnter: (d) => {
    a(d);
  } }) }), document.body) : null;
}
function XM() {
  const [e] = de();
  return j(() => e.registerCommand(Jr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(zo ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, Cr), [e]), null;
}
function QM({ isEditable: e }) {
  const [t] = de();
  return Xs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Vf(e) {
  return !!e && nu(G(e));
}
function ly(e) {
  const [t] = de(), r = Z(void 0), n = he((i) => {
    let s = !1;
    const o = $(), a = O(o) && o.isCollapsed() ? o.anchor.key : void 0, c = r.current, l = Vf(c);
    c && !l && (r.current = void 0);
    let u;
    if (i) {
      const d = i.getParentOrThrow(), f = i.getIndexWithinParent() + 1, p = $a(d, f);
      if (p)
        r.current = p.getKey(), u = p.getKey();
      else {
        const h = Rv();
        i.insertAfter(h), r.current = h.getKey(), u = h.getKey(), s = !0;
      }
      lr(d, f);
    }
    if (c && l && c !== a && c !== u) {
      const d = G(c);
      S(d) && (d.remove(), s = !0), r.current === c && (r.current = void 0);
    }
    return s;
  }, []);
  return j(() => {
    const i = () => {
      const a = e(), c = $(), l = O(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && n(a) && Hn(Is);
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (ao(c) || !c.includes(Di))
        return;
      const l = $(), u = O(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if ($v(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(Di).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = et(t.registerCommand(Er, () => (i(), !1), Vn), t.registerCommand(Ul, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Vf(a);
      }), c && t.update(() => {
        const l = G(a);
        S(l) && (l.remove(), Hn(Is));
      }), r.current = void 0, !1;
    }, Vn), t.registerNodeTransform(Ue, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function ZM() {
  const e = $();
  if (!O(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!R(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!ke(i) || $a(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ke(s))
    return i;
}
function eE() {
  return ly(ZM), null;
}
function tE({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = de();
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
        const u = o.getRootElement(), d = u?.ownerDocument.activeElement, f = u != null && d != null && (u === d || u.contains(d));
        o.update(() => {
          f || Hn(rx), o.setEditorState(l), o.dispatchCommand(nx, void 0);
        }, { tag: Sa });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function rE({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = de();
  return nE(t, n), iE(i, e, r, n), null;
}
function nE(e, t) {
  const r = Z(void 0), n = Z(void 0), i = e.noteCallers, s = e.crossRefCallers;
  j(() => {
    let o = i;
    (!o || o.length <= 0) && (o = HS), r.current !== o && (r.current = o, Wf("note-callers", o, t));
  }, [t, i]), j(() => {
    let o = s;
    (!o || o.length <= 0) && (o = GS), n.current !== o && (n.current = o, Wf("cross-ref-callers", o, t));
  }, [t, s]);
}
function iE(e, t, r, n) {
  j(() => {
    if (!e.hasNodes([_e, $e, Jt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => dE(s));
    return et(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform($e, (s) => sE(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(_e, oE),
      e.registerNodeTransform(Ue, aE),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Jt, cE),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Jt, (s, { prevEditorState: o }) => lE(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(Er, () => uE(e, t, r, n), It),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function sE(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => tr(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    S(i) && !w(i) && i.getTextContent() !== Ut(e.getCaller()) && e.insertBefore(i);
  }
}
function oE(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => tr(o));
  if (!L(e) || !D(t) || !n)
    return;
  const i = iu(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  S(s) ? s.getTextContent() !== q && s.setTextContent(q) : e.insertAfter(ve(q));
}
function aE(e) {
  const t = cr(e), r = t?.getChildren(), n = r?.find((o) => tr(o));
  if (!S(e) || !D(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!w(e) && D(i) && e.getTextContent() !== q && (e.setTextContent(q), e.selectEnd()), L(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Xt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = iu(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function cE(e) {
  if (!tr(e))
    return;
  const t = e.getNextSibling();
  !S(t) || w(t) ? e.insertAfter(ve(q)) : t.getTextContent() !== q && t.setTextContent(q);
}
function lE(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = G(r), a = o?.getParent();
      return tr(o) && D(a) && a.getCaller() === jo;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function uE(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = $();
  if (!O(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = it(o, (c) => D(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = G(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), hs(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (D(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, hs(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (D(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, hs(e, c, n);
    } else if (!a) {
      const c = it(o, (l) => D(l));
      if (c && c.getIsCollapsed() && Re(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, hs(e, l, n);
      }
    }
  }
  if (Re(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (fi(c) && D(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, hs(e, l, n);
    }
  }
  return !1;
}
function hs(e, t, r) {
  const n = G(t);
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
function dE(e) {
  const t = $();
  if (!O(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (D(i) && S(s)) {
    e.preventDefault();
    const o = Zs();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), mn(o);
  }
}
function Wf(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (fE(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function fE(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Fa(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!w(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Ar(e);
  return r && t.push(r), t.length > 0 && t.every((n) => S(n) && n.getMode() === "token") ? t : [];
}
function pE(e) {
  const t = e.getParent();
  if (D(t))
    return Fa(t).some((r) => r.is(e)) ? t : void 0;
}
function aa(e) {
  const t = Fa(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function hE(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function gE(e) {
  const t = ix();
  if (!O(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= aa(e);
  const i = hE(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= aa(e);
}
function sl(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = pE(t);
  if (r)
    return mE(r, t, e.offset) ? void 0 : r;
}
function mE(e, t, r) {
  const n = Fa(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function yE(e) {
  const t = Fa(e), r = t[t.length - 1];
  S(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : lr(e, aa(e));
}
function bE(e = !1) {
  const t = $();
  if (!O(t))
    return !1;
  if (!t.isCollapsed())
    return kE(t.anchor, t.focus);
  const r = sl(t.anchor);
  if (!r)
    return !1;
  if (!e && gE(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    lr(n, r.getIndexWithinParent());
  } else
    yE(r);
  return !0;
}
function kE(e, t) {
  const r = sl(e), n = sl(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && Hf(e, r, i), n && Hf(t, n, !i), !0;
}
function Hf(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), aa(t), "element");
}
function xE() {
  const [e] = de(), t = Z(!1);
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
  }, [e]), j(() => e.registerCommand(Er, () => (bE(t.current) && e.dispatchCommand(Bl, void 0), !1), Vn), [e]), null;
}
function TE({ onChange: e, viewOptions: t }) {
  const [r] = de();
  return j(() => r.registerCommand(Er, () => {
    const n = Eu(t);
    return e?.(n), !1;
  }, It), [r, e, t]), null;
}
function vE() {
  const [e] = de();
  return CE(e), null;
}
function CE(e) {
  j(() => {
    if (!e.hasNodes([st]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(st, (t) => SE(t, e));
  }, [e]);
}
function SE(e, t) {
  vm(t, e.getKey()) && Tm(e.getFirstChild()), !(!se(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = G(e.getKey());
    return se(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function uy({ onStateChange: e }) {
  const [t] = de(), [r, n] = me(t), i = Z(!1), s = Z(!1), o = Z(void 0), a = Z(void 0), c = he(() => {
    const l = $();
    let u;
    if (O(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : it(d, (x) => {
        const v = x.getParent();
        return v !== null && sx(v);
      });
      p === null && (p = d.getTopLevelElementOrThrow()), ti(p) && (p = it(d, se) ?? p);
      const h = p.getKey(), g = r.getElementByKey(h), m = Uv(d, f);
      if (m && oS(m) && (u = m.getMarker()), g !== null && (se(p) || ut(p) || oo(p))) {
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
  return j(() => t.registerCommand(Er, (l, u) => (c(), n(u), !1), Cr), [t, c]), j(() => et(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(ox, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Cr), r.registerCommand(ax, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Cr)), [c, r, e]), null;
}
function _E(e) {
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
  return e ? Re(e) ? e : it(e, (r) => Re(r)) ?? void 0 : void 0;
}
function dy(e) {
  if (!O(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Cn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Fu(e) {
  return O(e) && e.isCollapsed() && e.anchor.type === "element" || !O(e) && !kh(e) ? !1 : e.getNodes().some((t) => ke(t));
}
function fy(e) {
  if (!O(e) || !e.isCollapsed())
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
function py(e) {
  if (!O(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Cn(r);
  if (!n)
    return !1;
  if (R(r)) {
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
function Gf(e, t) {
  return !!ol(e, t);
}
function ol(e, t) {
  if (!O(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && R(n)) {
    const s = n.getChildren(), o = t === "backward" ? r.offset - 1 : r.offset;
    if (o < 0)
      return;
    const a = s[o];
    return ke(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return ke(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return ke(i) ? i : void 0;
}
function ca(e, t) {
  if (!O(e))
    return !1;
  const r = Cn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function kc(e) {
  return Fu(e) || dy(e);
}
function ME(e, t) {
  if (Fu(e) || dy(e))
    return !0;
  if (!O(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return fy(e) && ca(e, "backward") || Gf(e, "backward");
    case "deleteForward":
      return py(e) && ca(e, "forward") || Gf(e, "forward");
    case "insertText":
      return !1;
  }
}
function EE(e, t) {
  if (!(!O(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = ol(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (fy(e) && ca(e, "backward")) {
        const n = Cn(e.anchor.getNode());
        if (Re(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = ol(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (py(e) && ca(e, "forward")) {
        const i = Cn(e.anchor.getNode())?.getNextSibling();
        if (Re(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Jf(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return kh(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!O(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!O(e) || e.isCollapsed())
    return !1;
  const r = Cn(e.anchor.getNode()), n = Cn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function hy(e) {
  if (S(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else R(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function AE(e) {
  const t = e.getPreviousSibling();
  if (!Re(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? hy(r) : ts(t) || t.selectStart();
}
function gy(e) {
  return ke(e) || je(e) ? [] : Re(e) ? e.getChildren().flatMap(gy) : [e];
}
function PE(e) {
  const t = [];
  for (const r of e) {
    const n = gy(r);
    n.length !== 0 && (Re(r) && t.length > 0 && t.push(ve(" ")), t.push(...n));
  }
  return t;
}
function Yf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function wE(e) {
  if (Array.isArray(e)) return e;
}
function OE(e, t) {
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
function NE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function RE(e, t) {
  return wE(e) || OE(e, t) || $E(e, t) || NE();
}
function $E(e, t) {
  if (e) {
    if (typeof e == "string") return Yf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Yf(e, t) : void 0;
  }
}
const my = Object.entries, Xf = Object.setPrototypeOf, qE = Object.isFrozen, IE = Object.getPrototypeOf, LE = Object.getOwnPropertyDescriptor;
let ot = Object.freeze, dt = Object.seal, wi = Object.create, yy = typeof Reflect < "u" && Reflect, al = yy.apply, cl = yy.construct;
ot || (ot = function(t) {
  return t;
});
dt || (dt = function(t) {
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
const Ei = Xe(Array.prototype.forEach), DE = Xe(Array.prototype.lastIndexOf), Qf = Xe(Array.prototype.pop), Ai = Xe(Array.prototype.push), UE = Xe(Array.prototype.splice), fn = Array.isArray, Cs = Xe(String.prototype.toLowerCase), xc = Xe(String.prototype.toString), Zf = Xe(String.prototype.match), gs = Xe(String.prototype.replace), ep = Xe(String.prototype.indexOf), FE = Xe(String.prototype.trim), KE = Xe(Number.prototype.toString), zE = Xe(Boolean.prototype.toString), tp = typeof BigInt > "u" ? null : Xe(BigInt.prototype.toString), rp = typeof Symbol > "u" ? null : Xe(Symbol.prototype.toString), nt = Xe(Object.prototype.hasOwnProperty), ms = Xe(Object.prototype.toString), rt = Xe(RegExp.prototype.test), In = BE(TypeError);
function Xe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return al(e, t, n);
  };
}
function BE(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return cl(e, r);
  };
}
function be(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Cs;
  if (Xf && Xf(e, null), !fn(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (qE(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function jE(e) {
  for (let t = 0; t < e.length; t++)
    nt(e, t) || (e[t] = null);
  return e;
}
function pt(e) {
  const t = wi(null);
  for (const n of my(e)) {
    var r = RE(n, 2);
    const i = r[0], s = r[1];
    nt(e, i) && (fn(s) ? t[i] = jE(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = pt(s) : t[i] = s);
  }
  return t;
}
function VE(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return KE(e);
    case "boolean":
      return zE(e);
    case "bigint":
      return tp ? tp(e) : "0";
    case "symbol":
      return rp ? rp(e) : "Symbol()";
    case "undefined":
      return ms(e);
    case "function":
    case "object": {
      if (e === null)
        return ms(e);
      const t = e, r = ir(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : ms(n);
      }
      return ms(e);
    }
    default:
      return ms(e);
  }
}
function ir(e, t) {
  for (; e !== null; ) {
    const n = LE(e, t);
    if (n) {
      if (n.get)
        return Xe(n.get);
      if (typeof n.value == "function")
        return Xe(n.value);
    }
    e = IE(e);
  }
  function r() {
    return null;
  }
  return r;
}
function WE(e) {
  try {
    return rt(e, ""), !0;
  } catch {
    return !1;
  }
}
const np = ot(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Tc = ot(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), vc = ot(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), HE = ot(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Cc = ot(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), GE = ot(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ip = ot(["#text"]), sp = ot(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Sc = ot(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), op = ot(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), So = ot(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), JE = dt(/{{[\w\W]*|^[\w\W]*}}/g), YE = dt(/<%[\w\W]*|^[\w\W]*%>/g), XE = dt(/\${[\w\W]*/g), QE = dt(/^data-[\-\w.\u00B7-\uFFFF]+$/), ZE = dt(/^aria-[\-\w]+$/), ap = dt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), e1 = dt(/^(?:\w+script|data):/i), t1 = dt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), r1 = dt(/^html$/i), n1 = dt(/^[a-z][.\w]*(-[.\w]+)+$/i), cp = dt(/<[/\w!]/g), lp = dt(/<[/\w]/g), i1 = dt(/<\/no(script|embed|frames)/i), s1 = dt(/\/>/i), qt = {
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
}, o1 = function() {
  return typeof window > "u" ? null : window;
}, a1 = function(t, r) {
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
}, up = function() {
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
}, ln = function(t, r, n, i) {
  return nt(t, r) && fn(t[r]) ? be(i.base ? pt(i.base) : {}, t[r], i.transform) : n;
};
function by() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : o1();
  const t = (F) => by(F);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== qt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = ir(f, "cloneNode"), h = ir(f, "remove"), g = ir(f, "nextSibling"), m = ir(f, "childNodes"), x = ir(f, "parentNode"), v = ir(f, "shadowRoot"), _ = ir(f, "attributes"), A = o && o.prototype ? ir(o.prototype, "nodeType") : null, E = o && o.prototype ? ir(o.prototype, "nodeName") : null, P = o && o.prototype ? ir(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let T, B = "", V, W = !1, X = 0;
  const ue = function() {
    if (X > 0)
      throw In('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Y = function(y) {
    ue(), X++;
    try {
      return T.createHTML(y);
    } finally {
      X--;
    }
  }, le = function(y) {
    ue(), X++;
    try {
      return T.createScriptURL(y);
    } finally {
      X--;
    }
  }, qe = function() {
    return W || (V = a1(d, i), W = !0), V;
  }, Fe = r, te = Fe.implementation, z = Fe.createNodeIterator, oe = Fe.createDocumentFragment, We = Fe.getElementsByTagName, Qe = n.importNode;
  let ge = up();
  t.isSupported = typeof my == "function" && typeof x == "function" && te && te.createHTMLDocument !== void 0;
  const Ir = JE, Rt = YE, ss = XE, hr = QE, gi = ZE, os = e1, ne = t1, yt = n1;
  let mo = ap, Ce = null;
  const Lr = be({}, [...np, ...Tc, ...vc, ...Cc, ...ip]);
  let ee = null;
  const $t = be({}, [...sp, ...Sc, ...op, ...So]);
  let xe = Object.seal(wi(null, {
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
  })), rn = null, nn = null;
  const gr = Object.seal(wi(null, {
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
  let as = !0, Dr = !0, Pn = !1, yo = !0, St = !1, _t = !0, ft = !1, sn = !1, on = null, mi = null, yi = !1, mr = !1, bi = !1, wn = !1, N = !0, U = !1;
  const K = "user-content-";
  let Q = !0, Me = !1, fe = {}, Te = null;
  const Je = be({}, [
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
  let yr = null;
  const Mt = be({}, ["audio", "video", "img", "source", "image", "track"]);
  let zt = null;
  const br = be({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), On = "http://www.w3.org/1998/Math/MathML", bo = "http://www.w3.org/2000/svg", kr = "http://www.w3.org/1999/xhtml";
  let ki = kr, Ja = !1, Ya = null;
  const Ak = be({}, [On, bo, kr], xc), _d = ot(["mi", "mo", "mn", "ms", "mtext"]);
  let Xa = be({}, _d);
  const Md = ot(["annotation-xml"]);
  let Qa = be({}, Md);
  const Pk = be({}, ["title", "style", "font", "a", "script"]);
  let cs = null;
  const wk = ["application/xhtml+xml", "text/html"], Ok = "text/html";
  let Ke = null, xi = null;
  const Nk = r.createElement("form"), Ed = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, Za = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (xi && xi === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = pt(y), cs = // eslint-disable-next-line unicorn/prefer-includes
    wk.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? Ok : y.PARSER_MEDIA_TYPE, Ke = cs === "application/xhtml+xml" ? xc : Cs, Ce = ln(y, "ALLOWED_TAGS", Lr, {
      transform: Ke
    }), ee = ln(y, "ALLOWED_ATTR", $t, {
      transform: Ke
    }), Ya = ln(y, "ALLOWED_NAMESPACES", Ak, {
      transform: xc
    }), zt = ln(y, "ADD_URI_SAFE_ATTR", br, {
      transform: Ke,
      base: br
    }), yr = ln(y, "ADD_DATA_URI_TAGS", Mt, {
      transform: Ke,
      base: Mt
    }), Te = ln(y, "FORBID_CONTENTS", Je, {
      transform: Ke
    }), rn = ln(y, "FORBID_TAGS", pt({}), {
      transform: Ke
    }), nn = ln(y, "FORBID_ATTR", pt({}), {
      transform: Ke
    }), fe = nt(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? pt(y.USE_PROFILES) : y.USE_PROFILES : !1, as = y.ALLOW_ARIA_ATTR !== !1, Dr = y.ALLOW_DATA_ATTR !== !1, Pn = y.ALLOW_UNKNOWN_PROTOCOLS || !1, yo = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, St = y.SAFE_FOR_TEMPLATES || !1, _t = y.SAFE_FOR_XML !== !1, ft = y.WHOLE_DOCUMENT || !1, mr = y.RETURN_DOM || !1, bi = y.RETURN_DOM_FRAGMENT || !1, wn = y.RETURN_TRUSTED_TYPE || !1, yi = y.FORCE_BODY || !1, N = y.SANITIZE_DOM !== !1, U = y.SANITIZE_NAMED_PROPS || !1, Q = y.KEEP_CONTENT !== !1, Me = y.IN_PLACE || !1, mo = WE(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : ap, ki = typeof y.NAMESPACE == "string" ? y.NAMESPACE : kr, Xa = nt(y, "MATHML_TEXT_INTEGRATION_POINTS") && y.MATHML_TEXT_INTEGRATION_POINTS && typeof y.MATHML_TEXT_INTEGRATION_POINTS == "object" ? pt(y.MATHML_TEXT_INTEGRATION_POINTS) : be({}, _d), Qa = nt(y, "HTML_INTEGRATION_POINTS") && y.HTML_INTEGRATION_POINTS && typeof y.HTML_INTEGRATION_POINTS == "object" ? pt(y.HTML_INTEGRATION_POINTS) : be({}, Md);
    const C = nt(y, "CUSTOM_ELEMENT_HANDLING") && y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING == "object" ? pt(y.CUSTOM_ELEMENT_HANDLING) : wi(null);
    if (xe = wi(null), nt(C, "tagNameCheck") && Ed(C.tagNameCheck) && (xe.tagNameCheck = C.tagNameCheck), nt(C, "attributeNameCheck") && Ed(C.attributeNameCheck) && (xe.attributeNameCheck = C.attributeNameCheck), nt(C, "allowCustomizedBuiltInElements") && typeof C.allowCustomizedBuiltInElements == "boolean" && (xe.allowCustomizedBuiltInElements = C.allowCustomizedBuiltInElements), dt(xe), St && (Dr = !1), bi && (mr = !0), fe && (Ce = be({}, ip), ee = wi(null), fe.html === !0 && (be(Ce, np), be(ee, sp)), fe.svg === !0 && (be(Ce, Tc), be(ee, Sc), be(ee, So)), fe.svgFilters === !0 && (be(Ce, vc), be(ee, Sc), be(ee, So)), fe.mathMl === !0 && (be(Ce, Cc), be(ee, op), be(ee, So))), gr.tagCheck = null, gr.attributeCheck = null, nt(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? gr.tagCheck = y.ADD_TAGS : fn(y.ADD_TAGS) && (Ce === Lr && (Ce = pt(Ce)), be(Ce, y.ADD_TAGS, Ke))), nt(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? gr.attributeCheck = y.ADD_ATTR : fn(y.ADD_ATTR) && (ee === $t && (ee = pt(ee)), be(ee, y.ADD_ATTR, Ke))), nt(y, "ADD_URI_SAFE_ATTR") && fn(y.ADD_URI_SAFE_ATTR) && be(zt, y.ADD_URI_SAFE_ATTR, Ke), nt(y, "FORBID_CONTENTS") && fn(y.FORBID_CONTENTS) && (Te === Je && (Te = pt(Te)), be(Te, y.FORBID_CONTENTS, Ke)), nt(y, "ADD_FORBID_CONTENTS") && fn(y.ADD_FORBID_CONTENTS) && (Te === Je && (Te = pt(Te)), be(Te, y.ADD_FORBID_CONTENTS, Ke)), Q && (Ce["#text"] = !0), ft && be(Ce, ["html", "head", "body"]), Ce.table && (be(Ce, ["tbody"]), delete rn.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw In('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw In('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const I = T;
      T = y.TRUSTED_TYPES_POLICY;
      try {
        B = Y("");
      } catch (H) {
        throw T = I, H;
      }
    } else y.TRUSTED_TYPES_POLICY === null ? (T = void 0, B = "") : (T === void 0 && (T = qe()), T && typeof B == "string" && (B = Y("")));
    ot && ot(y), xi = y;
  }, Ad = be({}, [...Tc, ...vc, ...HE]), Pd = be({}, [...Cc, ...GE]), Rk = function(y, C, I) {
    return C.namespaceURI === kr ? y === "svg" : C.namespaceURI === On ? y === "svg" && (I === "annotation-xml" || Xa[I]) : !!Ad[y];
  }, $k = function(y, C, I) {
    return C.namespaceURI === kr ? y === "math" : C.namespaceURI === bo ? y === "math" && Qa[I] : !!Pd[y];
  }, qk = function(y, C, I) {
    return C.namespaceURI === bo && !Qa[I] || C.namespaceURI === On && !Xa[I] ? !1 : !Pd[y] && (Pk[y] || !Ad[y]);
  }, Ik = function(y) {
    let C = x(y);
    (!C || !C.tagName) && (C = {
      namespaceURI: ki,
      tagName: "template"
    });
    const I = Cs(y.tagName), H = Cs(C.tagName);
    return Ya[y.namespaceURI] ? y.namespaceURI === bo ? Rk(I, C, H) : y.namespaceURI === On ? $k(I, C, H) : y.namespaceURI === kr ? qk(I, C, H) : !!(cs === "application/xhtml+xml" && Ya[y.namespaceURI]) : !1;
  }, an = function(y) {
    Ai(t.removed, {
      element: y
    });
    try {
      x(y).removeChild(y);
    } catch {
      if (h(y), !x(y))
        throw In("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ko = function(y) {
    ls(y);
    const C = m(y);
    if (C) {
      const H = [];
      Ei(C, (J) => {
        Ai(H, J);
      }), Ei(H, (J) => {
        try {
          h(J);
        } catch {
        }
      });
    }
    const I = _(y);
    if (I)
      for (let H = I.length - 1; H >= 0; --H) {
        const J = I[H], ae = J && J.name;
        if (typeof ae == "string")
          try {
            y.removeAttribute(ae);
          } catch {
          }
      }
  }, Nn = function(y, C) {
    try {
      Ai(t.removed, {
        attribute: C.getAttributeNode(y),
        from: C
      });
    } catch {
      Ai(t.removed, {
        attribute: null,
        from: C
      });
    }
    if (C.removeAttribute(y), y === "is")
      if (mr || bi)
        try {
          an(C);
        } catch {
        }
      else
        try {
          C.setAttribute(y, "");
        } catch {
        }
  }, Lk = function(y) {
    const C = _(y);
    if (C)
      for (let I = C.length - 1; I >= 0; --I) {
        const H = C[I], J = H && H.name;
        if (!(typeof J != "string" || ee[Ke(J)]))
          try {
            y.removeAttribute(J);
          } catch {
          }
      }
  }, ls = function(y) {
    const C = [y];
    for (; C.length > 0; ) {
      const I = C.pop();
      (A ? A(I) : I.nodeType) === qt.element && Lk(I);
      const J = m(I);
      if (J)
        for (let ae = J.length - 1; ae >= 0; --ae)
          C.push(J[ae]);
    }
  }, Dk = function(y) {
    if (!_t)
      return;
    const C = [y];
    for (; C.length > 0; ) {
      const I = C.pop(), H = A ? A(I) : I.nodeType;
      if (H === qt.processingInstruction || H === qt.comment && rt(lp, I.data)) {
        try {
          h(I);
        } catch {
        }
        continue;
      }
      if (H === qt.element) {
        const ae = I, Ae = Ke(E ? E(I) : I.nodeName);
        try {
          ae.hasAttribute && ae.hasAttribute("patchsrc") && ae.removeAttribute("patchsrc"), ae.hasAttribute && ae.hasAttribute("for") && Ae !== "label" && Ae !== "output" && ae.removeAttribute("for");
        } catch {
        }
      }
      const J = m(I);
      if (J)
        for (let ae = J.length - 1; ae >= 0; --ae)
          C.push(J[ae]);
    }
  }, wd = function(y) {
    let C = null, I = null;
    if (yi)
      y = "<remove></remove>" + y;
    else {
      const ae = Zf(y, /^[\r\n\t ]+/);
      I = ae && ae[0];
    }
    cs === "application/xhtml+xml" && ki === kr && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const H = T ? Y(y) : y;
    if (ki === kr)
      try {
        C = new u().parseFromString(H, cs);
      } catch {
      }
    if (!C || !C.documentElement) {
      C = te.createDocument(ki, "template", null);
      try {
        C.documentElement.innerHTML = Ja ? B : H;
      } catch {
      }
    }
    const J = C.body || C.documentElement;
    return y && I && J.insertBefore(r.createTextNode(I), J.childNodes[0] || null), ki === kr ? We.call(C, ft ? "html" : "body")[0] : ft ? C.documentElement : J;
  }, Od = function(y) {
    const C = P ? P(y) : y.ownerDocument;
    return z.call(
      C || y,
      y,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, xo = function(y) {
    return y = gs(y, Ir, " "), y = gs(y, Rt, " "), y = gs(y, ss, " "), y;
  }, ec = function(y) {
    var C;
    y.normalize();
    const I = P ? P(y) : y.ownerDocument, H = z.call(
      I || y,
      y,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let J = H.nextNode();
    for (; J; )
      J.data = xo(J.data), J = H.nextNode();
    const ae = (C = y.querySelectorAll) === null || C === void 0 ? void 0 : C.call(y, "template");
    ae && Ei(ae, (Ae) => {
      Ti(Ae.content) && ec(Ae.content);
    });
  }, To = function(y) {
    const C = E ? E(y) : null;
    return typeof C != "string" || Ke(C) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    y.attributes !== _(y) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    y.nodeType !== A(y) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, Ti = function(y) {
    if (!A || typeof y != "object" || y === null)
      return !1;
    try {
      return A(y) === qt.documentFragment;
    } catch {
      return !1;
    }
  }, us = function(y) {
    if (!A || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof A(y) == "number";
    } catch {
      return !1;
    }
  };
  function xr(F, y, C) {
    F.length !== 0 && Ei(F, (I) => {
      I.call(t, y, C, xi);
    });
  }
  const Uk = function(y, C) {
    return !!(_t && y.hasChildNodes() && !us(y.firstElementChild) && rt(cp, y.textContent) && rt(cp, y.innerHTML) || _t && y.namespaceURI === kr && C === "style" && us(y.firstElementChild) || y.nodeType === qt.processingInstruction || _t && y.nodeType === qt.comment && rt(lp, y.data));
  }, Fk = function(y, C, I) {
    if (!rn[C] && qd(C) && (xe.tagNameCheck instanceof RegExp && rt(xe.tagNameCheck, C) || xe.tagNameCheck instanceof Function && xe.tagNameCheck(C)))
      return !1;
    if (Q && !Te[C]) {
      const H = x(y), J = m(y);
      if (J && H) {
        const ae = J.length;
        for (let Ae = ae - 1; Ae >= 0; --Ae) {
          const ze = y === I ? p(J[Ae], !0) : J[Ae];
          H.insertBefore(ze, g(y));
        }
      }
    }
    return an(y), !0;
  }, Nd = function(y, C, I, H) {
    return y.length === 0 ? C : C === I || C === H ? pt(C) : C;
  }, Rd = function(y, C) {
    if (xr(ge.beforeSanitizeElements, y, null), y !== C && x(y) === null)
      return Me && ls(y), !0;
    if (To(y))
      return an(y), !0;
    const I = Ke(E ? E(y) : y.nodeName);
    if (Ce = Nd(ge.uponSanitizeElement, Ce, Lr, on), xr(ge.uponSanitizeElement, y, {
      tagName: I,
      allowedTags: Ce
    }), y !== C && x(y) === null)
      return Me && ls(y), !0;
    if (Uk(y, I))
      return an(y), !0;
    if (rn[I] || !(gr.tagCheck instanceof Function && gr.tagCheck(I)) && !Ce[I]) {
      const J = Fk(y, I, C);
      return J === !1 && xr(ge.afterSanitizeElements, y, null), J;
    }
    if ((A ? A(y) : y.nodeType) === qt.element && !Ik(y) || (I === "noscript" || I === "noembed" || I === "noframes") && rt(i1, y.innerHTML))
      return an(y), !0;
    if (St && y.nodeType === qt.text) {
      const J = xo(y.textContent);
      y.textContent !== J && (Ai(t.removed, {
        element: y.cloneNode()
      }), y.textContent = J);
    }
    return xr(ge.afterSanitizeElements, y, null), !1;
  }, $d = function(y, C, I) {
    if (nn[C] || _t && C === "patchsrc" || _t && C === "for" && y !== "label" && y !== "output" || N && (C === "id" || C === "name") && (I in r || I in Nk))
      return !1;
    const H = ee[C] || gr.attributeCheck instanceof Function && gr.attributeCheck(C, y);
    if (!(Dr && rt(hr, C))) {
      if (!(as && rt(gi, C))) {
        if (H) {
          if (!zt[C]) {
            if (!rt(mo, gs(I, ne, ""))) {
              if (!((C === "src" || C === "xlink:href" || C === "href") && y !== "script" && ep(I, "data:") === 0 && yr[y])) {
                if (!(Pn && !rt(os, gs(I, ne, "")))) {
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
          !(qd(y) && (xe.tagNameCheck instanceof RegExp && rt(xe.tagNameCheck, y) || xe.tagNameCheck instanceof Function && xe.tagNameCheck(y)) && (xe.attributeNameCheck instanceof RegExp && rt(xe.attributeNameCheck, C) || xe.attributeNameCheck instanceof Function && xe.attributeNameCheck(C, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          C === "is" && xe.allowCustomizedBuiltInElements && (xe.tagNameCheck instanceof RegExp && rt(xe.tagNameCheck, I) || xe.tagNameCheck instanceof Function && xe.tagNameCheck(I)))
        ) return !1;
      }
    }
    return !0;
  }, Kk = be({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), qd = function(y) {
    return !Kk[Cs(y)] && rt(yt, y);
  }, zk = function(y, C, I, H) {
    if (T && typeof d == "object" && typeof d.getAttributeType == "function" && !I)
      switch (d.getAttributeType(y, C)) {
        case "TrustedHTML":
          return Y(H);
        case "TrustedScriptURL":
          return le(H);
      }
    return H;
  }, Bk = function(y, C, I, H) {
    try {
      I ? y.setAttributeNS(I, C, H) : y.setAttribute(C, H), To(y) ? an(y) : Qf(t.removed);
    } catch {
      Nn(C, y);
    }
  }, Id = function(y) {
    xr(ge.beforeSanitizeAttributes, y, null);
    const C = y.attributes;
    if (!C || To(y))
      return;
    ee = Nd(ge.uponSanitizeAttribute, ee, $t, mi);
    const I = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ee,
      forceKeepAttr: void 0
    };
    let H = C.length;
    const J = Ke(y.nodeName);
    for (; H--; ) {
      const ae = C[H], Ae = ae.name, ze = ae.namespaceURI, Et = ae.value, At = Ke(Ae), rc = Et;
      let bt = Ae === "value" ? rc : FE(rc);
      if (I.attrName = At, I.attrValue = bt, I.keepAttr = !0, I.forceKeepAttr = void 0, xr(ge.uponSanitizeAttribute, y, I), bt = I.attrValue, U && (At === "id" || At === "name") && ep(bt, K) !== 0 && (Nn(Ae, y), bt = K + bt), _t && rt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, bt)) {
        Nn(Ae, y);
        continue;
      }
      if (At === "attributename" && Zf(bt, "href")) {
        Nn(Ae, y);
        continue;
      }
      if (!I.forceKeepAttr) {
        if (!I.keepAttr) {
          Nn(Ae, y);
          continue;
        }
        if (!yo && rt(s1, bt)) {
          Nn(Ae, y);
          continue;
        }
        if (St && (bt = xo(bt)), !$d(J, At, bt)) {
          Nn(Ae, y);
          continue;
        }
        bt = zk(J, At, ze, bt), bt !== rc && Bk(y, Ae, ze, bt);
      }
    }
    xr(ge.afterSanitizeAttributes, y, null);
  }, vo = function(y) {
    let C = null;
    const I = Od(y);
    for (xr(ge.beforeSanitizeShadowDOM, y, null); C = I.nextNode(); )
      if (xr(ge.uponSanitizeShadowNode, C, null), Rd(C, y), Id(C), Ti(C.content) && vo(C.content), (A ? A(C) : C.nodeType) === qt.element) {
        const J = v(C);
        Ti(J) && (tc(J), vo(J));
      }
    xr(ge.afterSanitizeShadowDOM, y, null);
  }, tc = function(y) {
    const C = [{
      node: y,
      shadow: null
    }];
    for (; C.length > 0; ) {
      const I = C.pop();
      if (I.shadow) {
        vo(I.shadow);
        continue;
      }
      const H = I.node, ae = (A ? A(H) : H.nodeType) === qt.element, Ae = m(H);
      if (Ae)
        for (let ze = Ae.length - 1; ze >= 0; --ze)
          C.push({
            node: Ae[ze],
            shadow: null
          });
      if (ae) {
        const ze = E ? E(H) : null;
        if (typeof ze == "string" && Ke(ze) === "template") {
          const Et = H.content;
          Ti(Et) && C.push({
            node: Et,
            shadow: null
          });
        }
      }
      if (ae) {
        const ze = v(H);
        Ti(ze) && C.push({
          node: null,
          shadow: ze
        }, {
          node: ze,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, I = null, H = null, J = null;
    if (Ja = !F, Ja && (F = "<!-->"), typeof F != "string" && !us(F) && (F = VE(F), typeof F != "string"))
      throw In("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    sn ? (Ce = on, ee = mi) : Za(y), (ge.uponSanitizeElement.length > 0 || ge.uponSanitizeAttribute.length > 0) && (Ce = pt(Ce)), ge.uponSanitizeAttribute.length > 0 && (ee = pt(ee)), t.removed = [];
    const ae = Me && typeof F != "string" && us(F);
    if (ae) {
      Dk(F);
      const Et = E ? E(F) : F.nodeName;
      if (typeof Et == "string") {
        const At = Ke(Et);
        if (!Ce[At] || rn[At])
          throw ko(F), In("root node is forbidden and cannot be sanitized in-place");
      }
      if (To(F))
        throw ko(F), In("root node is clobbered and cannot be sanitized in-place");
      try {
        tc(F);
      } catch (At) {
        throw ko(F), At;
      }
    } else if (us(F))
      C = wd("<!---->"), I = C.ownerDocument.importNode(F, !0), I.nodeType === qt.element && I.nodeName === "BODY" || I.nodeName === "HTML" ? C = I : C.appendChild(I), tc(I);
    else {
      if (!mr && !St && !ft && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return T && wn ? Y(F) : F;
      if (C = wd(F), !C)
        return mr ? null : wn ? B : "";
    }
    C && yi && an(C.firstChild);
    const Ae = ae ? F : C;
    try {
      const Et = Od(Ae);
      for (; H = Et.nextNode(); )
        Rd(H, Ae), Id(H), Ti(H.content) && vo(H.content);
    } catch (Et) {
      throw ae && (ko(F), Ei(t.removed, (At) => {
        At.element && ls(At.element);
      })), Et;
    }
    if (ae)
      return Ei(t.removed, (Et) => {
        Et.element && ls(Et.element);
      }), St && ec(F), F;
    if (mr) {
      if (St && ec(C), bi)
        for (J = oe.call(C.ownerDocument); C.firstChild; )
          J.appendChild(C.firstChild);
      else
        J = C;
      return (ee.shadowroot || ee.shadowrootmode) && (J = Qe.call(n, J, !0)), J;
    }
    let ze = ft ? C.outerHTML : C.innerHTML;
    return ft && Ce["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && rt(r1, C.ownerDocument.doctype.name) && (ze = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + ze), St && (ze = xo(ze)), T && wn ? Y(ze) : ze;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Za(F), sn = !0, on = Ce, mi = ee;
  }, t.clearConfig = function() {
    xi = null, sn = !1, on = null, mi = null, T = V, B = "";
  }, t.isValidAttribute = function(F, y, C) {
    xi || Za({});
    const I = Ke(F), H = Ke(y);
    return $d(I, H, C);
  }, t.addHook = function(F, y) {
    typeof y == "function" && nt(ge, F) && Ai(ge[F], y);
  }, t.removeHook = function(F, y) {
    if (nt(ge, F)) {
      if (y !== void 0) {
        const C = DE(ge[F], y);
        return C === -1 ? void 0 : UE(ge[F], C, 1)[0];
      }
      return Qf(ge[F]);
    }
  }, t.removeHooks = function(F) {
    nt(ge, F) && (ge[F] = []);
  }, t.removeAllHooks = function() {
    ge = up();
  }, t;
}
var c1 = by();
function l1({ structureProtectionMode: e = "off" }) {
  const [t] = de(), r = Z(void 0), [n, i] = me(void 0), s = he((o) => {
    r.current = o, i(o);
  }, []);
  return j(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = _E(p);
      if (!h)
        return !1;
      const g = $();
      return e === "protected" ? g && ME(g, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const g = $(), m = r.current;
      if (m && g && Jf(g, m)) {
        if (s(void 0), h.preventDefault(), p !== m.intent)
          return !0;
        const v = G(m.key) ?? void 0;
        if (m.kind === "verse") {
          if (v) {
            const _ = v.getParent(), A = v.getPreviousSibling(), E = v.getNextSibling();
            v.remove(), A ? hy(A) : E && S(E) ? E.select(0, 0) : _?.selectStart();
          }
        } else m.kind === "selection" ? O(g) && g.removeText() : Re(v) && AE(v);
        return !0;
      }
      if (!g)
        return !1;
      const x = EE(g, p);
      if (x) {
        if (x.kind === "verse") {
          const v = xh();
          v.add(x.node.getKey()), mn(v);
        } else {
          const v = Zs();
          v.anchor.set(x.node.getKey(), 0, "element"), v.focus.set(x.node.getKey(), x.node.getChildrenSize(), "element"), mn(v);
        }
        return s({ key: x.node.getKey(), kind: x.kind, intent: p }), h.preventDefault(), !0;
      }
      if (O(g) && !g.isCollapsed() && Fu(g)) {
        const v = g.getNodes().filter(ke).map((E) => E.getKey()), { anchor: _, focus: A } = g;
        return s({
          kind: "selection",
          intent: p,
          key: v[0],
          anchor: { key: _.key, offset: _.offset, type: _.type },
          focus: { key: A.key, offset: A.offset, type: A.type }
        }), h.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const h = $();
      return !h || !kc(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const g = c1.sanitize(p), m = new DOMParser().parseFromString(g, "text/html"), x = PE(Ax(t, m)), v = $();
      return O(v) && v.insertNodes(x), h.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = $();
      return h && kc(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const h = $();
      return h && kc(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Jf($(), p) || s(void 0);
      });
    };
    return et(t.registerCommand(Jr, o, Be), t.registerCommand(Wn, c, Be), t.registerCommand(Kr, u, Be), t.registerCommand(cx, c, Be), t.registerCommand(Dl, d, Be), t.registerCommand(Ll, c, Be), t.registerUpdateListener(f));
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
const TN = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function u1({ textDirection: e }) {
  const [t] = de();
  return d1(t, e), null;
}
function d1(e, t) {
  j(() => (dp(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && dp(e, t);
  })), [e, t]);
}
function dp(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function f1() {
  const [e] = de();
  return p1(e), null;
}
function p1(e) {
  j(() => {
    if (!e.hasNodes([_e, Ct, $e, Ue, ct]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return et(
      e.registerNodeTransform(Ue, h1),
      e.registerNodeTransform(Ue, (t) => g1(t, e)),
      e.registerNodeTransform(ct, fp),
      e.registerNodeTransform(Ct, fp),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(ct, (t) => {
        js(Wr("va"), t), js(Wr("vp"), t);
      })
    );
  }, [e]);
}
function h1(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || D(r) || L(n) || L(r) || pe(n) || pe(r) || Ne(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  Ne(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  re(e, ce) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  De(n))
    return;
  if (ke(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  ke(r) && yu(e);
}
function g1(e, t) {
  const r = e.getParent();
  !Ne(r) || !e.isAttached() || vm(t, e.getKey()) && r.insertAfter(e);
}
function fp(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; pe(t); )
    t = t.getLastChild();
  (L(t) || S(t) && pe(t.getParent()) && !m1(t)) && e.insertBefore(ve(" "));
}
function m1(e) {
  const t = e.getTextContent();
  return t.endsWith(" ") || t.endsWith(q);
}
function Ku(e) {
  if (!D(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !nu(n)) ? void 0 : e;
}
function y1(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (R(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function b1() {
  const e = $();
  if (!(!O(e) || !e.isCollapsed()))
    return Ku(y1(e.anchor));
}
function k1(e) {
  const t = $();
  let r;
  return O(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = ky(e.target)), r ? Ku(it(r, D)) : void 0;
}
function ky(e) {
  const t = lx(e)?.anchorNode;
  if (bh(t))
    return Ji(t) ?? void 0;
}
function x1(e) {
  if ($())
    return;
  const t = ky(e);
  return t ? Ku(it(t, D)) : void 0;
}
function T1() {
  const [e] = de(), t = ly(b1);
  return j(() => {
    const r = (n) => {
      t(n) && Hn(Is);
    };
    return et(e.registerCommand(Er, () => {
      const n = x1(e.getRootElement());
      return n && r(n), !1;
    }, Vn), e.registerCommand(va, (n) => {
      const i = k1(n);
      return i && r(i), !1;
    }, Vn));
  }, [e, t]), null;
}
function v1({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = B_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return M(z_, { trigger: e, items: i });
}
function C1({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = Le(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? M(M1, { trigger: e, harness: i }) : M(v1, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const S1 = [" ", "*"];
function _1(e, t) {
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
function M1({ trigger: e, harness: t }) {
  const [r] = de(), [n, i] = me(void 0), s = Z({ query: "", options: [] }), o = Z(0), a = he((f, p, h) => {
    const g = p.find((m) => m.kind === "note" && m.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const m = $();
      O(m) && m.insertText(`${e}${f}${h ? " " : ""}`);
    });
  }, [r, t, e]);
  j(() => et(r.registerCommand(Jr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), ux(() => {
          const m = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(m ? {
            trigger: "backslash",
            hasTextSelection: m.hasTextSelection,
            items: t.getItems(m),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const m = $();
          O(m) && m.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const h = s.current.query;
      if (n.hasTextSelection) {
        const g = n.items.find((m) => m.marker === h);
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
  }, Be), r.registerCommand(Th, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, qi)), [r, e, t, n, a]);
  const c = he(() => i(void 0), []), l = he((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = he((f) => {
    const { markerMenuItem: p, applyOpts: h } = f;
    t.apply(p, h);
  }, [t]), d = Le(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    _1(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && M(Bm, { isOpen: !0, children: ({ placement: f }) => M(
    Wm,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? S1 : void 0 },
    n.session
  ) });
}
function xy(e) {
  return e.replaceAll(q, "~").replace(/ {2,}/g, (r) => q.repeat(r.length));
}
function E1(e) {
  return e.replaceAll(q, " ").replaceAll("~", q);
}
let la;
function A1(e) {
  e && (la = e);
}
function Ty(e) {
  return Nt(e);
}
function P1(e, t) {
  return e.isEmpty() ? gh : vy(e.toJSON(), t);
}
function vy(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && Aa(r[0]) && (!r[0].children || r[0].children.length === 0))
    return gh;
  if (r.some(zC)) {
    la?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Cy(r), i = sr(n, t);
  return i ? { type: Br, version: zr, content: i } : void 0;
}
function w1(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), Ie({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function O1(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Ie({
    type: Kt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function N1(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Lg(r, a, c), Ie({
    type: Kt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function R1(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Lg(t, o, a), Ie({
    type: ct.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function $1(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !Ty(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(q) && (t[0] = a.slice(1));
  }
  return Ie({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function q1(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Ie({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function I1(e, t) {
  const { unknownAttributes: r } = e;
  return Ie({ type: tm, ...r, content: t });
}
function L1(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Ie({ type: im, marker: r, ...n, content: t });
}
function D1(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Ie({
    type: am,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function U1(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return Ie({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function Oi(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Ie({
    type: t,
    marker: r === "" ? void 0 : r,
    ...tg({ sid: n, eid: i, ...s }, o)
  });
}
function F1(e) {
  return e.text;
}
function K1(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Ie({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function z1(e) {
  const { marker: t } = e;
  return {
    type: Qo,
    marker: t === "" ? void 0 : t
  };
}
function pp(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function B1(e, t, r, n, i) {
  const s = ar.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = Oi({
      type: s,
      marker: Ii,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = Oi({
      type: s,
      marker: Gn,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = Oi({
      type: s,
      marker: Gn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Oi({
      type: s,
      marker: Ii
    });
    i.push(l);
  }
  (!n || !no(n)) && t.forEach((l) => {
    const u = Oi({
      type: s,
      marker: Ii,
      eid: l
    });
    i.push(u);
  });
}
function j1(e, t, r, n) {
  if (!n) return !1;
  let i = t > 0 ? e[t - 1] : r;
  for (; i && no(i); ) {
    const { children: s } = i;
    i = s.length > 0 ? s[s.length - 1] : void 0;
  }
  return ro(i) && i.markerSyntax === "opening";
}
function V1(e) {
  let t = e;
  for (; no(t); ) t = t.children[0];
  return t;
}
function W1(e, t) {
  let r = 0;
  for (; r < e.length; ) {
    const i = e[r];
    if (!ro(i) || i.markerSyntax !== "opening") break;
    r++;
  }
  const n = V1(e[r]);
  if (Qn(n) && n.text === Ut(t))
    return n;
}
function sr(e, t, r, n = !1, i) {
  const s = [];
  let o, a = [];
  return e.forEach((c, l) => {
    const u = c, d = c, f = c, p = c, h = c, g = c, m = c, x = c;
    switch (c.type) {
      case Qt.getType():
        s.push(
          w1(
            u,
            sr(u.children, t)
          )
        );
        break;
      case Rr.getType():
        s.push(O1(c));
        break;
      case Kt.getType():
        s.push(
          N1(
            d,
            sr(d.children, t)
          )
        );
        break;
      case Ct.getType():
      case ct.getType():
        s.push(R1(c));
        break;
      case _e.getType():
        s.push(
          $1(
            f,
            sr(f.children, t, void 0, !0),
            t
          )
        );
        break;
      case st.getType():
        s.push(
          q1(
            p,
            sr(p.children, t)
          )
        );
        break;
      case li.getType():
        s.push(
          I1(
            c,
            sr(c.children, t)
          )
        );
        break;
      case ui.getType():
        s.push(
          L1(
            c,
            sr(c.children, t)
          )
        );
        break;
      case di.getType():
        s.push(
          D1(
            c,
            sr(c.children, t)
          )
        );
        break;
      case $e.getType():
        s.push(
          U1(
            h,
            sr(
              h.children,
              t,
              W1(h.children, h.caller)
            )
          )
        );
        break;
      case Xr.getType():
      case pr.getType():
      case Jt.getType():
      case vh.getType():
      case nr.getType():
        break;
      case Ze.getType():
        if (o = sr(
          m.children,
          t,
          r,
          n,
          l > 0 ? e[l - 1] : i
        ), o) {
          const v = m.typedIDs[Lt];
          if (v) {
            const _ = e[l + 1];
            B1(o, v, a, _, s), a = _ && no(_) ? v : [];
          } else {
            const _ = o.shift();
            _ && (typeof _ == "string" ? pp(s, _) : s.push(_)), o.length > 0 && s.push(...o);
          }
        }
        break;
      case ar.getType():
        s.push(Oi(c));
        break;
      case Ue.getType():
        if (g.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !ao(g.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        g.text !== q && !g.text.startsWith(zl) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        g[jn]?.textType !== "attribute" && // Identity, not text equality: only the ONE node `noteCallerSlotNode` anchored as the
        // note's caller is excluded, so note content that coincidentally reads the same as the
        // caller (anywhere else in the note) still round-trips as data.
        c !== r) {
          let v = F1(g);
          Ty(t) && (j1(e, l, i, n) && v.startsWith(q) && (v = v.slice(1)), v = E1(Ov(v))), pp(s, v);
        }
        break;
      case ci.getType():
        s.push(
          K1(
            x,
            sr(x.children, t)
          )
        );
        break;
      case tn.getType():
        s.push(z1(c));
        break;
      case Qi.getType():
        la?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        la?.error(`Unexpected node type '${c.type}'!`);
    }
  }), s && s.length > 0 ? s : void 0;
}
function Cy(e) {
  const t = e.findIndex((r) => Aa(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Cy(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const ys = {
  initialize: A1,
  deserializeEditorState: P1
}, H1 = /^sd\d*$/, G1 = /* @__PURE__ */ new Set([
  ...Object.entries(qc).filter(
    ([e, t]) => t.category === k.TitlesHeadings && t.type === b.Paragraph && !H1.test(e)
  ).map(([e]) => e),
  "qa"
]);
function J1(e, t) {
  const r = [];
  let n;
  for (const [i, s] of e.entries()) {
    if (Eg(s) || Rg(s)) {
      n = void 0, r.push(s);
      continue;
    }
    if (!Dv(s)) {
      t && ua(s) && t.warn(
        `Verses inside a '${s.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(s) : r.push(s);
      continue;
    }
    if (ru(s) && G1.has(s.marker) && !ua(s)) {
      n = void 0, r.push(s);
      continue;
    }
    if (s.children.length === 0) {
      n ? n.children.push(s) : r.push(s);
      continue;
    }
    Sy(s.children, t).forEach((o) => {
      const a = Y1(s, o.nodes, i);
      if (!o.verse) {
        if (!a) return;
        n ? n.children.push(a) : r.push(a);
        return;
      }
      n = X1(o.verse), r.push(n), a && n.children.push(a);
    });
  }
  return r;
}
function Sy(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (_y(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (no(i)) {
      const s = Sy(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(hp(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [hp(i, c.nodes)] });
      });
      return;
    }
    t && ua(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function hp(e, t) {
  return { ...e, children: t };
}
function _y(e) {
  return km(e) && e.number !== "";
}
function ua(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => _y(r) || ua(r)) : !1;
}
function Y1(e, t, r) {
  if (t.length !== 0)
    return {
      ...e,
      children: t,
      [jn]: { ...e[jn], [gm.key]: r }
    };
}
function X1(e) {
  return {
    type: Zo,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: mm
  };
}
const gp = Ey([]), Q1 = {
  type: vh.getType(),
  version: 1
};
let zu = [], ie, ni, My, Ot;
function Z1(e, t) {
  zu = [], rA(e), nA(t);
}
function eA(e = 0) {
}
function tA(e, t) {
  ie = t ?? Da();
  let r;
  return e ? (e.type !== Br && Ot?.warn(`This USJ type '${e.type}' didn't match the expected type '${Br}'.`), e.version !== zr && Ot?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${zr}'.`
  ), e.content.length > 0 ? (r = fl(un(e.content)), Ws(ie) && (r = J1(r, Ot))) : r = [gp]) : r = [gp], My?.(zu), {
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
function rA(e) {
  e && (ni = e), e?.addMissingComments && (My = e.addMissingComments);
}
function nA(e) {
  e && (Ot = e);
}
function Bu() {
  return Nt(ie);
}
function iA(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function sA(e) {
  let { marker: t } = e;
  t !== Us && Ot?.warn(`Unexpected book marker '${t}'!`), t = t ?? Us;
  const { code: r } = e;
  (!r || !Qt.isValidBookCode(r)) && Ot?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  ie?.markerMode === "editable" || ie?.markerMode === "visible" ? n.push(
    Pt("marker", Oe(t) + " " + r + q)
  ) : ie?.hasGutterParaMarkers && n.push(Pt("marker", Oe(t) + q, !0));
  const i = iA(e.content);
  i && n.push(mt(Bu() ? xy(i) : i));
  const s = Ve(e, Cv);
  return Ie({
    type: Qt.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: _g
  });
}
function oA(e) {
  let { marker: t } = e;
  t !== Jo && Ot?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Jo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Ve(e, IT);
  let a;
  ie?.markerMode === "visible" && (a = !0);
  const c = [
    mt(Ht(t, r) ?? "")
  ];
  return ie?.markerMode === "editable" && CA(i, s, c), ie?.markerMode === "editable" ? Ie({
    type: Kt.getType(),
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
    version: lg
  }) : Ie({
    type: Rr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Ag
  });
}
function aA(e) {
  let { marker: t } = e;
  t !== Go && Ot?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Go;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (QS(ie) ?? Ct).getType(), c = ie?.markerMode === "editable" ? Qh : bm;
  let l, u;
  ie?.markerMode === "editable" ? l = Ht(t, r) : ie?.markerMode === "visible" && (u = !0);
  const d = Ve(e, OT);
  return Ie({
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
function cA(e, t = [], r = !1) {
  let { marker: n } = e;
  _e.isValidMarker(n, ni?.extraValidMarkers) || Ot?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (ie?.markerMode === "editable") {
    const [a] = t;
    Qn(a) ? a.text = q + a.text : a && t.unshift(mt(q));
  }
  t.length === 0 && t.push(mt(Xt)), ll(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Ve(e, ET);
  return s || kA(n, o, i), s || ul(e.marker ?? "", i, !1, r), Ie({
    type: _e.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Xh
  });
}
function Ey(e) {
  return {
    type: bn.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: dg
  };
}
function lA(e, t = []) {
  let { marker: r } = e;
  st.isValidMarker(r, ni?.extraValidMarkers) || Ot?.warn(`Unexpected para marker '${r}'!`), r = r ?? Sr;
  const n = [];
  if (Zi(ie) && (ie?.markerMode === "editable" ? n.push(
    xt(r),
    mt(q, Nr, "token")
  ) : (ie?.markerMode === "visible" || ie?.hasGutterParaMarkers) && n.push(
    Pt(
      "marker",
      Oe(r) + q,
      ie?.hasGutterParaMarkers
    )
  )), n.push(...t), Bu()) {
    const s = n.find(
      (o) => !ro(o) && !(Qn(o) && o.text === q)
    );
    Qn(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => q.repeat(o.length)));
  }
  const i = Ve(e, Av);
  return Ie({
    type: st.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Og
  });
}
function ju() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function uA(e, t = []) {
  const r = Ve(e, lC);
  return Ie({
    ...ju(),
    type: li.getType(),
    unknownAttributes: r,
    children: t,
    version: rm
  });
}
function dA(e, t = []) {
  const r = Ve(e, fC), n = e.marker ?? Wc, i = [];
  return ie?.markerMode === "editable" ? i.push(
    xt(n),
    mt(q, Nr, "token")
  ) : (ie?.markerMode === "visible" || ie?.hasGutterParaMarkers) && i.push(
    Pt(
      "marker",
      Oe(n) + q,
      ie?.hasGutterParaMarkers
    )
  ), i.push(...t), Ie({
    ...ju(),
    type: ui.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: sm
  });
}
function fA(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Hc;
  ie?.markerMode === "editable" ? s.push(
    xt(o),
    mt(q, Nr, "token")
  ) : (ie?.markerMode === "visible" || ie?.hasGutterParaMarkers) && s.push(
    Pt(
      "marker",
      Oe(o) + q,
      ie?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const a = Ve(
    e,
    hC
  );
  return Ie({
    ...ju(),
    type: di.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: a,
    children: s,
    version: cm
  });
}
function pA(e, t) {
  const r = jv(t);
  let n = () => {
  };
  return ni?.noteCallerOnClick && (n = ni.noteCallerOnClick), Ie({
    type: Jt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Em
  });
}
function hA(e, t) {
  let { marker: r } = e;
  $e.isValidMarker(r, ni?.extraValidMarkers) || Ot?.warn(`Unexpected note marker '${r}'!`), r = r ?? Wl;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : Ru(ie?.noteMode), a = Ve(e, Gx), c = ie?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  ie?.markerMode === "editable" ? (l = xt(r, "opening", !1, c), s || (u = xt(r, "closing"))) : ie?.markerMode === "visible" && (l = Pt("marker", Oe(r) + " "), s || (u = Pt("marker", Ge(r))));
  const d = [];
  let f;
  if (l && d.push(l), ie?.markerMode === "editable" && !o)
    f = mt(Ut(i), void 0, c), d.push(f), vA(n, d), d.push(...t);
  else {
    const p = mt(q, Nr, "token");
    f = pA(i, t), d.push(f, p, ...t.flatMap(gA(p)));
  }
  return u && d.push(u), Ie({
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
    version: Fh
  });
}
function gA(e) {
  return (t) => bg(t) ? [t] : [t, e];
}
function mA(e) {
  let { marker: t } = e;
  (!t || !ar.isValidMarker(t, ni?.extraValidMarkers)) && Ot?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Ve(e, Vl), s = rg(e);
  return Ie({
    type: ar.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: Lh
  });
}
function mp(e, t = []) {
  return {
    type: Ze.getType(),
    typedIDs: { [Lt]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function yA(e, t) {
  const { marker: r } = e, n = e.type, i = Ve(e, VT), s = [];
  if (ie?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = wa(
      n,
      r,
      i
    );
    o && s.push(Pt("marker", o)), a && s.push(Pt("attribute", a)), s.push(...t), c && s.push(Pt("attribute", c)), l && s.push(Pt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Qn(o) && (o.mode = "token");
  }), Ie({
    type: ci.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: kg
  });
}
function bA(e) {
  return {
    type: tn.getType(),
    marker: e,
    text: Es(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: ie?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: Zg
  };
}
function xt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: nr.getType(),
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
function mt(e, t = void 0, r = "normal") {
  const n = {
    type: Ue.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[jn] = { textType: t }), n;
}
function Pt(e, t, r = !1) {
  const n = {
    type: pr.getType(),
    text: t,
    textType: e,
    version: yg
  };
  return r && (n[jn] = { [Ql.key]: !0 }), n;
}
function Hs(e, t) {
  return {
    type: Xr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Hh
  };
}
function ll(e, t, r = !1) {
  ie?.markerMode === "editable" ? t.push(xt(e, "opening", r)) : ie?.markerMode === "visible" && t.push(Pt("marker", Oe(e, r)));
}
function ul(e, t, r = !1, n = !1) {
  ie?.markerMode === "editable" ? r ? t.push(xt("", "selfClosing")) : t.push(xt(e, "closing", n)) : ie?.markerMode === "visible" && t.push(
    Pt(
      "marker",
      r ? Ge("") : Ge(e, n)
    )
  );
}
function kA(e, t, r) {
  if (ie?.markerMode !== "editable" || !t) return;
  const n = vr(t, eo(e));
  n && r.push(mt(n, "attribute"));
}
function yp(e, t) {
  if (e.type !== "ms" || ie?.markerMode !== "editable" && ie?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Ve(e, Vl), o = ng(
    n,
    i,
    s,
    rg(e)
  ), a = vr(o, to(r ?? ""));
  if (!a) return;
  const c = q + a;
  ie?.markerMode === "editable" ? t.push(mt(c, "attribute")) : t.push(Pt("attribute", c));
}
function xA(e, t) {
  const r = e.marker ?? "";
  if (ie?.markerMode === "editable") {
    const n = [];
    ll(r, n), yp(e, n), ul(r, n, !0), t.push(Hs("milestone", n));
  } else
    ll(r, t), yp(e, t), ul(r, t, !0);
}
function bp(e, t, r) {
  t !== void 0 && r.push(
    Hs(e, [
      xt(e, "opening"),
      mt(q + t, "attribute"),
      xt(e, "closing")
    ])
  );
}
function TA(e, t) {
  ie?.markerMode === "editable" && (bp("va", e.altnumber, t), bp("vp", e.pubnumber, t));
}
function vA(e, t) {
  e !== void 0 && t.push(
    Hs("cat", [
      xt("cat", "opening"),
      mt(q + e, "attribute"),
      xt("cat", "closing")
    ])
  );
}
function CA(e, t, r) {
  e !== void 0 && r.push(
    Hs("ca", [
      xt("ca", "opening"),
      mt(q + e, "attribute"),
      xt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    Hs("cp", [
      xt("cp", "opening"),
      mt(q + t, "attribute")
    ])
  );
}
function kp(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function SA(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function xp(e, t) {
  t.marker === Gn && t.sid !== void 0 && e.push(t.sid), t.marker === Ii && t.eid !== void 0 && SA(e, t.eid);
}
function dl(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [mp(o, [...n])] : o, c = e[i];
  xp(n, c);
  const l = dl(
    e.slice(i + 1, s),
    kp(t, i + 1),
    c.marker === Gn,
    n
  ), u = mp(l, [...n]), d = e[s];
  xp(n, d);
  const f = dl(
    e.slice(s + 1),
    kp(t, s + 1),
    d.marker === Gn,
    n
  );
  return [...a, u, ...f];
}
function un(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(mt(Bu() ? xy(i) : i));
    else if (!i.type)
      Ot?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Qt.getType():
          n.push(sA(i));
          break;
        case Kt.getType():
          n.push(oA(i));
          break;
        case ct.getType():
          ie?.hasSpacing || n.push(Q1), n.push(aA(i)), TA(i, n);
          break;
        case _e.getType():
          n.push(
            cA(i, un(i.content, !0), t)
          );
          break;
        case st.getType():
          n.push(lA(i, un(i.content)));
          break;
        case $e.getType():
          n.push(hA(i, un(i.content)));
          break;
        case ar.getType():
          Dh(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && zu?.push(i.sid)), n.push(mA(i)), xA(i, n);
          break;
        case tn.getType():
          n.push(bA(i.marker ?? ""));
          break;
        case tm:
          n.push(uA(i, un(i.content)));
          break;
        case im:
          n.push(dA(i, un(i.content)));
          break;
        case am:
          n.push(fA(i, un(i.content)));
          break;
        default:
          Ot?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(yA(i, un(i.content)));
      }
  }), dl(n, r);
}
function fl(e) {
  const t = e.findIndex(
    (n) => Eg(n) || Rg(n) || ru(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    dC(n)
  );
  if (t >= 0) {
    const n = fl(e.slice(0, t)), i = e[t], s = fl(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || km(n)))
    return [Ey(e)];
  return e;
}
const Sn = {
  initialize: Z1,
  reset: eA,
  serializeEditorState: tA
};
function Ay(e) {
  if (e && !w(e)) {
    if (S(e)) return e;
    if (R(e))
      for (const t of e.getChildren()) {
        const r = Ay(t);
        if (r) return r;
      }
  }
}
function _A() {
  const e = $();
  if (!O(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((S(t) && !w(t) ? ei(t) : void 0) && S(t)) {
      const i = ve(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      Fi(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Ay(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(q) ? q : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return S(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Py(e)) {
    if (!ei(t)) continue;
    Fi(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(q) && r.setTextContent(n.slice(q.length));
  }
  return !0;
}
function Py(e) {
  const [t, r] = mh(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!S(a) || w(a) || re(a, ce) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function MA() {
  const e = $();
  if (!O(e)) return !1;
  const t = e.focus.getNode();
  return ei(t) ? Re(fu(t)) : !1;
}
function wy() {
  let e = $();
  if (!O(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (w(t) && !gu(t, e.anchor.offset)) {
    const c = t.getParent();
    if (L(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = $(), !O(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!S(t) || w(t) || !ei(t)) return !1;
  const r = fu(t);
  if (!Re(r)) return !1;
  const n = ve(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  Fi(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return L(a) ? pu(a) : o.select(0, 0), !0;
}
const Oy = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${$g(ye().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = $(), t = su(e), r = ku(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Wv(0, o);
        const a = tS(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Kg(c) && ou(parseInt(n, 10), c);
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
function pl(e, t) {
  return $e.isValidMarker(e, t) || !!Oy[e] || st.isValidMarker(e, t) || _e.isValidMarker(e, t);
}
function EA(e, t) {
  return _e.isNoteContentMarker(e) ? !1 : _e.isValidMarker(e, t);
}
function Ny(e, t, r, n, i, s) {
  const o = Km(
    e,
    void 0,
    void 0,
    t,
    n ?? Da(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function hl(e, t, r, n, i, s, o) {
  if ($e.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = Ny(
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
  const a = RA(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = $();
      O(u) && (hm(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = gf(d, Sn, r), h = nc(p);
      if (O(u)) {
        const g = u.anchor.getNode(), m = g.getParent(), x = ei(g), v = u.anchor.key === u.focus.key;
        if (L(h) && x && v && !_c(h, o))
          wA(
            u,
            h,
            g,
            r?.markerMode === "editable"
          );
        else if (L(h) && !v && !_c(h, o) && OA(u))
          NA(u, h, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          $A(
            u,
            () => nc(p)
          );
        else if (R(h) && !h.isInline()) {
          const _ = u.insertParagraph();
          if (_) {
            const A = _.getChildren();
            h.append(...A), _.replace(h), Re(h) && ts(h) || h.selectStart();
          }
        } else if (L(h) && S(g) && !w(g) && L(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        _c(h, o)) {
          const _ = g.getParent();
          if (L(_)) {
            const A = u.anchor.offset;
            if (A === 0) g.insertBefore(h);
            else if (A >= g.getTextContentSize()) g.insertAfter(h);
            else {
              const [P] = g.splitText(A);
              P.insertAfter(h);
            }
            h.getChildren().forEach((P) => {
              w(P) && P.setNested(!0);
            });
            const E = h.getChildren().find((P) => S(P) && !w(P));
            E && S(E) ? E.select(
              E.getTextContentSize(),
              E.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (S(g) && !w(g) && u.isCollapsed() && (D(m) || L(m) && D(m.getParent()))) {
          const _ = L(m) ? m : void 0, A = _ ? AA(g, u.anchor.offset) : [];
          let P = (_ ?? g).insertAfter(h);
          if ($r(h)) {
            const T = {
              ...r || Da(),
              markerMode: "hidden"
            }, B = gf(
              d,
              Sn,
              T
            ), V = nc(B);
            P = P.insertAfter(V);
          }
          if (A.length > 0 && _) {
            const T = da(_).append(...A);
            P.insertAfter(T), _.isEmpty() && _.remove();
          } else S(P.getNextSibling()) || P.insertAfter(ve(q));
          R(P) && P.selectEnd();
        } else if (u.insertNodes([h]), jA(h), f) {
          const _ = xh();
          _.add(h.getKey()), mn(_);
        } else if (L(h)) {
          const _ = h.getChildren().find((A) => S(A) && !w(A));
          _ && S(_) ? _.select(
            _.getTextContentSize(),
            _.getTextContentSize()
          ) : h.selectEnd();
        } else {
          const _ = h.getNextSibling();
          _ ? _.selectStart() : h.selectStart();
        }
      } else
        u?.insertNodes([h]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function AA(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function _c(e, t) {
  return ((t ?? ea).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function PA(e, t) {
  t && e.getChildren().forEach((i) => {
    w(i) && i.setNested(!0);
  }), e.getChildren().some((i) => w(i) && i.getMarkerSyntax() === "closing") || e.append(gt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function wA(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && L(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !S(r)) {
    const o = e.anchor.offset;
    if (S(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else S(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = ji(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (Fi(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), S(i) && !i.getTextContent().startsWith(q) && i.setTextContent(q + i.getTextContent());
    const o = t.getChildren().find((a) => S(a) && !w(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => S(o) && !w(o));
  S(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function OA(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (w(n) || L(n)) continue;
    if (!S(n) || n.getType() !== Ue.getType() || re(n, ce) === "attribute") return !1;
    const i = fu(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    ei(n) && (r = !0);
  }
  return r;
}
function NA(e, t, r) {
  const n = Py(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!ei(a)) return;
    Fi(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(q) && c.setTextContent(l.slice(q.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(q) || i.setTextContent(q + i.getTextContent());
  const s = t.getChildren().find((a) => S(a) && !w(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function RA(e, t) {
  let r = Oy[e];
  return r || (st.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: st.getType(), marker: e, content: [] }] })
  } : _e.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: _e.getType(), marker: e };
      return (_e.isValidFootnoteMarker(e) || _e.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function $A(e, t) {
  const r = e.getNodes(), [n, i] = ji(e);
  let s;
  r.forEach((o, a) => {
    if (R(s) && s.isParentOf(o))
      return;
    const c = Ry(
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
    s || (s = t(), c.insertBefore(s), l = !0, L(s) && s.getChildren().some((d) => w(d) && d.getMarkerSyntax() === "opening") && PA(s, L(s.getParent()))), IA(c, s, l);
  }), (S(s) || R(s)) && s.selectEnd();
}
function ji(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Vu(e) {
  return pe(e) || D(e) || D(e.getParent());
}
function Ry(e, t, r, n, i) {
  if (!Vu(e)) {
    if (S(e))
      return qA(e, t, r, n, i);
    if (R(e) && e.isInline())
      return e;
  }
}
function qA(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function IA(e, t, r) {
  if (S(t)) {
    const n = gl(e, t);
    t.setTextContent(n), e.remove();
  } else if (R(t)) {
    const n = t.getChildren(), i = n.find(
      (s) => w(s) && s.getMarkerSyntax() !== "opening"
    );
    if (i)
      i.insertBefore(e), r && n.filter((s) => !w(s)).forEach((s) => s.remove());
    else if (r) {
      const s = t.getChildrenSize();
      t.append(e);
      for (let o = 0; o < s; o++) t.getFirstChild()?.remove();
    } else
      t.append(e);
    gl(e, t), r && L(t) && t.getChildren().some((s) => w(s)) && S(e) && !w(e) && !e.getTextContent().startsWith(q) && e.setTextContent(q + e.getTextContent());
  }
}
function gl(e, t) {
  let r = e.getTextContent();
  if (S(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    yu(n), S(n) || t.insertBefore(ve(" "));
  }
  return r;
}
function $y(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = ii(u, t);
    if (!f) return !1;
    const p = S(u) ? u.getTextContentSize() : 0;
    if (Tp(f, r), S(u) && u.isAttached()) {
      const h = u.getTextContentSize(), g = Math.max(p - h, 0), m = Math.max(0, Math.min(d - g, h)), x = $();
      O(x) && x.setTextNodeRange(u, m, u, m);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = ji(e);
  if (!Hu(n, t, s, o)) return !1;
  const a = Wu(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = ii(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = Dy(d, a);
    f && (Tp(f, r), l = !0);
  }), Uy(a, i), l;
}
function Tp(e, t) {
  e.getChildren().forEach((n) => {
    er(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === Xt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    S(n) && i.startsWith(q) && n.setTextContent(i.slice(q.length));
  }), Nc(e);
}
function Wu(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Ry(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    S(o) && n.push(o);
  }), n;
}
function ii(e, t) {
  let r = e, n;
  for (; r && !Re(r); ) {
    if (D(r)) return;
    !n && L(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function qy(e) {
  const t = it(
    e,
    (r) => D(r) || Re(r)
  );
  return D(t);
}
function Iy(e) {
  return e.filter(
    (t) => !Vu(t) && (S(t) || R(t) && t.isInline())
  );
}
function LA(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!S(i) || Vu(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function DA(e, t, r) {
  return e.getChildren().some(
    (n) => R(n) && t.some((i) => n.isParentOf(i)) && !Ly(n, r)
  );
}
function Hu(e, t, r, n, i) {
  const s = Iy(e), o = LA(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = ii(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !DA(l, s, o);
  });
}
function Ly(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || er(r));
}
function Dy(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (R(u) && t.some((d) => u.isParentOf(d))) {
      if (!Ly(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && er(n[s - 1]) && (s -= 1), o < n.length - 1 && er(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(da(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(da(e).append(...c)), e;
}
function da(e) {
  return dx(e);
}
function Uy(e, t) {
  const r = $(), n = e[0], i = e[e.length - 1];
  if (!O(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function UA(e, t, r) {
  if (e.isCollapsed()) {
    const l = ii(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Zd(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = ji(e);
  if (!Hu(n, r, i, s, t)) return !1;
  const o = Wu(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = ii(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = Dy(u, o);
    d && (Zd(d, t), c = !0);
  }), c;
}
function FA(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (m) => m !== t
  ), s = e.getNodes(), [o, a] = ji(e);
  if (!!!i?.some(
    (m) => Hu(s, m, o, a)
  ) && !KA(s, t)) return !1;
  let l = !1;
  i?.forEach((m) => {
    const x = $();
    O(x) && $y(x, m, n) && (l = !0);
  });
  const u = $();
  if (!O(u)) return l;
  const d = u.isBackward(), [f, p] = ji(u), h = Wu(
    u.getNodes(),
    f,
    p
  );
  if (h.length === 0) return l;
  const g = h.filter(
    (m) => !qy(m) && !ii(m, t)
  );
  return g.length > 0 && (zA(g).forEach((m) => BA(m, t)), l = !0), Uy(h, d), l;
}
function KA(e, t) {
  return Iy(e).some(
    (r) => !qy(r) && !ii(r, t)
  );
}
function zA(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function BA(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => L(a) && a.getMarker() === t
  ), s = i ? da(i) : jr(t);
  e[0].insertBefore(s), s.append(...e), i === r || gl(e[0], s);
}
function jA(e) {
  ke(e) && (yu(e.getPreviousSibling()), Tm(e.getNextSibling()));
}
const Fy = {
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
}, vp = "psc-active-text", _o = "psc-empty-text";
function VA({ viewOptions: e }) {
  const [t] = de(), r = Z(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return j(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(vp), r.current = o, o && t.getElementByKey(o)?.classList.add(vp);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        va,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${_o}`);
          if (!c) return !1;
          const l = Ji(c);
          if (!ke(l)) return !1;
          const u = l.getParent();
          if (!R(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        It
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = Mc(), f = WA(), p = [], h = [];
          return ye().getChildren().forEach((g) => {
            if (!R(g)) return;
            const { emptyKeys: m, nonEmptyKeys: x } = GA(g);
            p.push(...m), h.push(...x);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(_o) : t.getElementByKey(d)?.classList.add(_o);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(_o));
      }),
      t.registerCommand(
        Ul,
        () => (i(void 0), !1),
        It
      ),
      t.registerCommand(
        fx,
        () => {
          const o = t.getEditorState().read(Mc);
          return o !== r.current && i(o), !1;
        },
        It
      )
    ];
    return i(t.getEditorState().read(Mc)), et(...s);
  }, [t, n]), null;
}
function Mc() {
  return HA($() ?? void 0)?.getKey();
}
function WA() {
  const e = $();
  if (!O(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!R(n)) return;
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
    ke(s[a]) && (o = s[a].getKey());
  return o;
}
function HA(e) {
  if (O(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function GA(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ke(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ke(c)) break;
      if (!(Tt(c) || w(c)) && c.getTextContent().replaceAll(Bo, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const JA = /^\+/;
function Gu(e, t) {
  const r = t.replace(JA, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Ky(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function zy(e, t) {
  return Ky(e, t) !== void 0;
}
function ml(e, t) {
  const r = Ky(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function fa(e, t, r) {
  const n = R(e) ? e.getChildren().filter(w) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function YA(e, t, r, n, i) {
  const s = Gu(n, t);
  if (!s) {
    fa(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && fa(e, "invalid", i);
}
function Os(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (L(s)) {
      const o = s.getMarker();
      i || YA(s, o, t, r, n), Os(s, t, r, n, i || o === "xq");
    } else if (ke(s)) {
      if (i) continue;
      const o = Gu(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else D(s) ? Os(s, s.getMarker(), r, n, i) : Ne(s) || R(s) && Os(s, t, r, n, i);
}
function XA(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Gu(e, a);
    if (!c) {
      fa(o, "unknown", r), ml(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    ml(n, l) || fa(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of ye().getChildren())
    Ne(o) || (ut(o) || je(o) ? i(o, o.getMarker()) : se(o) ? (i(o, o.getMarker()), s(o) && Os(o, o.getMarker(), e, r, !1)) : R(o) && s(o) && Os(o, "p", e, r, !1));
  return r;
}
function QA(e) {
  return !!e?.includes("(basic)");
}
function ZA(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function By(e, t) {
  return !e.startsWith("zpa") && e !== "c" && pl(e, t);
}
function Ju(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function jy(e, t) {
  const r = [];
  for (const n of t) {
    const i = Ju(e, n);
    i && ml(r, i);
  }
  return r;
}
function Ro(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: ZA(e.description),
    isBasic: QA(e.description)
  };
}
function eP(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function yl(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : eP(e.marker, t.marker);
}
function bl(e, t, r) {
  if (t.noteMarker) return [];
  const n = jy(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && By(i.marker, r)
  ).filter((i) => {
    const s = Ju(e, i.marker);
    return s !== void 0 && zy(n, s);
  }).map((i) => Ro(i, "paragraph")).sort(yl);
}
function tP(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => By(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Ro(c, "character")).sort(yl);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Ro(c, "character")),
    ...a.map((c) => Ro(c, "note"))
  ].sort(yl);
}
function rP(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function nP(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function iP(e, t, r) {
  return [
    ...rP(e, t.openCharMarkers),
    ...tP(e, t, r)
  ].sort(nP);
}
function sP(e, t, r) {
  if (t.source === "paragraph") return bl(e, t, r);
  const n = iP(e, t, r);
  return n.length > 0 ? n : bl(e, t, r);
}
function oP(e, t, r) {
  const n = bl(e, t, r), i = jy(e, t.previousParaMarkers), s = Ju(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && zy(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const pi = String.raw`\w-`, Vy = "a-z0-9", aP = `[a-z][${Vy}]*`, cP = new RegExp(
  String.raw`^\\(\+?[${pi}]+)[ \u00A0]$`
), Wy = new RegExp(String.raw`^\\(\+?[${pi}]+)$`), lP = new RegExp(String.raw`^\\\+?[${pi}]*\*$`), uP = new RegExp(
  String.raw`^\\(\+?[${pi}]+)(?:[ \u00A0]|$)`
), dP = new RegExp(
  String.raw`^\\(\+?)([${pi}]+)`
), fP = new RegExp(
  String.raw`\\\+?[${pi}]+(?:\\?\*|[ \u00A0])`
), pP = new RegExp(
  String.raw`\\\+?[${pi}]*$`
), hP = new RegExp(
  String.raw`^\\(${aP})( |$)`
), gP = new RegExp(
  String.raw`\\[${Vy}+*]*$`,
  "i"
), kl = "￼", Cp = "|", Hy = "\\", mP = /([-\w]+)="(.*?)"/g, yP = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]), bP = /* @__PURE__ */ new Map([["file", "src"]]);
class Yu {
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
function Sp(e, t) {
  const r = [e.indexOf(Hy, t + 1), e.indexOf(kl, t + 1)].filter(
    (n) => n >= 0
  );
  return r.length > 0 ? Math.min(...r) : e.length;
}
function _p(e) {
  const t = e.slice(1), r = [...t.matchAll(mP)];
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
function kP(e, t) {
  const r = e.map(
    (o, a) => o.name === void 0 || !yP.has(o.name) && !e.slice(a + 1).some((c) => c.name === o.name)
  ), n = (o, a) => o.value === a.value && (a.name === void 0 || o.name === a.name || o.name !== void 0 && bP.get(o.name) === a.name), i = /* @__PURE__ */ new Set(), s = [];
  return t.forEach((o, a) => {
    const c = e.findIndex(
      (l, u) => r[u] && !i.has(u) && n(l, o)
    );
    c < 0 || (i.add(c), s.push([c, a]));
  }), s;
}
function Mp(e, t, r) {
  let n = 0, i = -1;
  for (const s of e) {
    if (!s.same) continue;
    const { end: o, otherEnd: a } = lo(s, r);
    o <= t && o > i && (i = o, n = a);
  }
  return n;
}
function xP(e, t, r, n, i) {
  if (e === t) {
    r.push(n, n + e.length, i, i + t.length, !0);
    return;
  }
  const s = _p(e), o = _p(t);
  if (!s || !o) {
    r.push(n, n + 1, i, i + 1, !0), r.pushStretch(e.slice(1), n + 1, t.slice(1), i + 1);
    return;
  }
  const a = new Yu();
  a.push(0, 1, 0, 1, !0);
  const c = kP(s, o);
  for (const [f, p] of c) {
    const h = s[f], g = o[p];
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
  const l = [...a.segments], u = new Set(c.map(([f]) => f));
  s.forEach((f, p) => {
    if (u.has(p)) return;
    const h = Mp(l, f.start, "live");
    a.push(f.start, f.end, h, h, !1);
  });
  const d = new Set(c.map(([, f]) => f));
  o.forEach((f, p) => {
    if (d.has(p)) return;
    const h = Mp(l, f.start, "settled");
    a.push(h, h, f.start, f.end, !1);
  }), a.segments.sort(
    (f, p) => f.settledStart - p.settledStart || f.settledEnd - p.settledEnd || f.liveStart - p.liveStart
  ).forEach(
    (f) => r.push(
      n + f.liveStart,
      n + f.liveEnd,
      i + f.settledStart,
      i + f.settledEnd,
      f.same
    )
  );
}
function Gy(e, t, r, n, i) {
  let s = t, o = 0;
  for (; s < e.length && o < r.length; ) {
    const c = r[o] === kl && e[s] !== kl ? i.spellings?.get(o) : void 0;
    if (c !== void 0) {
      const l = new Yu(), u = Gy(e, s, c, l, { prefix: !0 });
      i.literals?.set(o, {
        liveStart: s,
        liveEnd: u,
        inner: { segments: TP(l.segments, s) }
      }), n.push(s, u, o, o + 1, !1), s = u, o += 1;
      continue;
    }
    if (e[s] === Cp && r[o] === Cp) {
      const l = Sp(e, s), u = Sp(r, o);
      xP(e.slice(s, l), r.slice(o, u), n, s, o), s = l, o = u;
      continue;
    }
    if (e[s] === r[o]) {
      n.push(s, s + 1, o, o + 1, !0), s += 1, o += 1;
      continue;
    }
    if (i.prefix) {
      const l = r.lastIndexOf(Hy), u = l >= o ? r.slice(l) : void 0, d = u === void 0 ? -1 : e.indexOf(u, s);
      return u === void 0 || d < 0 ? (n.push(s, s, o, r.length, !1), s) : (n.push(s, d, o, l, !1), n.push(d, d + u.length, l, r.length, !0), d + u.length);
    }
    return n.pushStretch(e.slice(s), s, r.slice(o), o), e.length;
  }
  const a = i.prefix ? s : e.length;
  return n.push(s, a, o, r.length, !1), a;
}
function TP(e, t) {
  return e.map((r) => ({
    ...r,
    liveStart: r.liveStart - t,
    liveEnd: r.liveEnd - t
  }));
}
function vP(e, t, r) {
  const n = new Yu(), i = /* @__PURE__ */ new Map();
  return Gy(e, 0, t, n, { prefix: !1, spellings: r, literals: i }), { alignment: { segments: n.segments }, literals: i };
}
function lo(e, t) {
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
function Jy(e, t, r) {
  return e.segments.find((n) => {
    const { start: i, end: s } = lo(n, r);
    return i <= t && t < s;
  });
}
function Yy(e, t) {
  let r = 0, n = 0;
  for (const i of e.segments) {
    const { end: s, otherEnd: o } = lo(i, t);
    r = Math.max(r, s), n = Math.max(n, o);
  }
  return [r, n];
}
function Xu(e, t, r) {
  const n = Jy(e, t, r);
  if (n) {
    const { start: o, otherStart: a } = lo(n, r);
    return n.same ? a + (t - o) : void 0;
  }
  const [i, s] = Yy(e, r);
  return t === i ? s : void 0;
}
function uo(e, t, r) {
  const n = Jy(e, t, r);
  if (n) {
    const { start: i, otherStart: s } = lo(n, r);
    return n.same ? s + (t - i) : s;
  }
  return Yy(e, r)[1];
}
const dr = /\s/;
function CP(e, t) {
  return `\\${e} ${t}\\${e}*`;
}
function xl(e) {
  const t = [];
  for (const n of e.spans)
    for (let i = n.start; i < n.end; i += 1) {
      const s = e.text[i];
      t.push({ byte: s, position: i, isWs: dr.test(s) });
    }
  const r = e.spans.filter((n) => n.isSentinel).map((n) => n.start);
  return { bytes: t, placeholders: r };
}
function $o({ bytes: e }, t) {
  return e.filter((r) => r.position < t && !r.isWs).length;
}
function SP({ bytes: e }, t) {
  let r = 0;
  for (const n of e) n.position < t && (r = n.isWs ? r + 1 : 0);
  return r;
}
function Tl({ bytes: e }) {
  return e.filter((t) => !t.isWs);
}
const Ep = "cat", _P = "category";
function MP(e) {
  return S(e) && e.getTextContent().trim() === "";
}
function EP(e) {
  const t = { text: "", spans: [], sentinels: [] }, r = [], n = (a, c) => {
    t.spans.push({
      key: a.getKey(),
      start: t.text.length,
      end: t.text.length + c.length,
      isSentinel: !1
    }), t.text += c;
  }, i = (a, c) => {
    n(a, CP(Ep, c)), r.push({
      ownerKey: a.getKey(),
      markerName: Ep,
      keyName: _P,
      valueLength: c.length
    });
  }, s = (a) => {
    const c = Jl(a);
    let u = c.opener ?? c.value ?? c.closer ? void 0 : a.getCategory();
    const d = Ar(a);
    let f = !1;
    for (const p of a.getChildren())
      u !== void 0 && f && !MP(p) && (i(a, u), u = void 0), o(p), (tr(p) || d && (d.is(p) || p.isParentOf(d))) && (f = !0);
    u !== void 0 && i(a, u);
  }, o = (a) => {
    if (tr(a)) {
      const c = a.getParent();
      n(a, D(c) ? c.getCaller() : "");
    } else S(a) || Tt(a) ? n(a, a.getTextContent()) : D(a) ? s(a) : R(a) && a.getChildren().forEach(o);
  };
  return e.forEach(o), { spelling: t, foldedAttributes: r };
}
function Qu(e) {
  const t = xl(e);
  return {
    runs: e.sentinels.map((r, n) => {
      const { spelling: i, foldedAttributes: s } = EP(r);
      return {
        memberCount: r.length,
        before: $o(t, t.placeholders[n] ?? e.text.length),
        spelling: i,
        foldedAttributes: s,
        spelled: Tl(xl(i)).map(({ byte: o }) => o).join("")
      };
    }),
    bytes: Tl(t).map(({ byte: r }) => r).join("")
  };
}
function pa(e, t) {
  return {
    facts: xl(e),
    carried: e.sentinels.map((r, n) => {
      const i = new Set(t[n]?.map((s) => s.getKey()));
      return r.map((s) => i.has(s.getKey()));
    })
  };
}
function ha(e, t) {
  const r = e.carried.map(
    (f) => f.map(() => {
    })
  ), n = Tl(e.facts), { alignment: i, literals: s } = vP(
    n.map(({ byte: f }) => f).join(""),
    t.bytes,
    new Map(t.runs.map((f) => [f.before, f.spelled]))
  ), o = (f, p) => {
    let h = 0;
    e.carried[f].forEach((g, m) => {
      g && (r[f][m] = { sentinelIndex: p, memberIndex: h }, h += 1);
    });
  }, a = (f) => f.filter(Boolean).length, c = e.carried.reduce((f, p) => f + a(p), 0), l = t.runs.reduce((f, p) => f + p.memberCount, 0);
  if (c === l) {
    const f = t.runs.flatMap(
      (h, g) => Array.from({ length: h.memberCount }, (m, x) => ({ sentinelIndex: g, memberIndex: x }))
    );
    let p = 0;
    return e.carried.forEach(
      (h, g) => h.forEach((m, x) => {
        m && (r[g][x] = f[p++]);
      })
    ), { sentinelMap: r, settledOnlyRuns: [], alignment: i };
  }
  const u = new Map(t.runs.map((f, p) => [f.before, p]));
  e.carried.forEach((f, p) => {
    const h = e.facts.placeholders[p];
    if (h === void 0 || a(f) === 0) return;
    const g = Xu(i, $o(e.facts, h), "live"), m = g === void 0 ? void 0 : u.get(g);
    m === void 0 || t.runs[m].memberCount !== a(f) || o(p, m);
  });
  const d = [];
  for (const [f, p] of s) {
    const h = u.get(f);
    if (h === void 0) continue;
    const g = t.runs[h], m = n[p.liveStart]?.position ?? Number.POSITIVE_INFINITY, x = p.liveEnd > p.liveStart ? n[p.liveEnd - 1].position + 1 : m, v = $o(e.facts, m);
    d.push({
      sentinelIndex: h,
      liveBefore: v,
      liveLength: $o(e.facts, x) - v,
      liveWsBefore: SP(e.facts, m),
      settledBefore: g.before,
      spelling: g.spelling,
      inner: p.inner,
      foldedAttributes: g.foldedAttributes
    });
  }
  return { sentinelMap: r, settledOnlyRuns: d, alignment: i };
}
function fo(e, t, r) {
  return {
    nonWsBefore: uo(
      e,
      t.nonWsBefore,
      r === "toSettled" ? "live" : "settled"
    ),
    wsRun: t.wsRun
  };
}
function Xy(e, t, r) {
  return Xu(e.inner, t, r === "toSpelling" ? "live" : "settled");
}
function Qy(e, t) {
  return e.find(
    (r) => t.nonWsBefore === r.liveBefore && t.wsRun >= r.liveWsBefore
  );
}
function Zu(e, t) {
  for (const r of e) {
    const n = t.nonWsBefore - r.liveBefore;
    if (n <= 0 || n >= r.liveLength) continue;
    const i = Xy(r, n, "toSpelling");
    return {
      run: r,
      count: n,
      within: i === void 0 ? void 0 : { nonWsBefore: i, wsRun: t.wsRun }
    };
  }
}
function ed(e, t) {
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
function td(e, t) {
  const r = [];
  for (let n = t; n; n = n.getParent()) {
    if (n.is(e)) return r;
    r.unshift(n.getIndexWithinParent());
  }
}
const at = "￼";
function Zy(e) {
  return e.length > 1 && e.startsWith(q) && e.charAt(1) !== at ? e.slice(1) : e;
}
function Ap(e) {
  return ro(e) ? e.markerSyntax ?? "opening" : void 0;
}
function eb(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = Sn.serializeEditorState(
    {
      type: Br,
      version: zr,
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
  for (; Ap(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Ut(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Ap(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function Mo(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function bs(e, t) {
  pP.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += at;
}
function Wt(e) {
  return e.replaceAll(q, " ");
}
function AP(e, t, r = !1) {
  if (Nt(t)) return Wt(e);
  if (e === q) return " ";
  const n = r && e.startsWith(q), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(q, "~");
}
function Ns(e) {
  const t = e.getTextContent();
  return en(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Ka(e, t) {
  const r = e[t];
  if (!Pe(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Ea(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!w(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function tb(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function za(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = Ls(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function rd(e) {
  return !!e.getUnknownAttributes();
}
function Ba(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && _a(e);
}
function rb(e, t) {
  return Pe(e) ? !Ba(e.getMarker(), t) : D(e) || Ne(e) ? !0 : Ee(e) ? rd(e) : L(e) ? nb(e, t) : !1;
}
function nb(e, t) {
  if (RT(e)) return !0;
  const r = e.getMarker();
  return !oT(r) && t(r) === void 0;
}
const jt = "", Vt = "";
function Pp(e) {
  return e.flatMap((t) => De(t) ? t.getChildren() : [t]);
}
function Ni(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Pe(s)) {
      const o = Ka(e, i);
      Ba(s.getMarker(), r) && tb(o) ? (t.push(
        jt,
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
      ), Ni(Pp(o), t, r), t.push(Vt)) : t.push(at), i += o.length;
    } else if (Ee(s)) {
      const o = za(e, i);
      rd(s) ? t.push(at) : (t.push(
        jt,
        "verse",
        Wt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Ni(Pp(o), t, r), t.push(Vt)), i += o.length;
    } else w(s) ? t.push(jt, "marker", Wt(s.getTextContent()), Vt) : En(s) ? t.push(jt, "unmatched", Wt(s.getTextContent()), Vt) : rb(s, r) ? t.push(at) : xa(s) ? t.push(" ") : S(s) ? t.push(
      Wt(
        n ? Zy(Ns(s)) : Ns(s)
      )
    ) : L(s) ? (t.push(jt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Ni(s.getChildren(), t, r, !0), t.push(Vt)) : pe(s) ? Ni(s.getChildren(), t, r, n) : R(s) ? (t.push(jt, s.getType()), Ni(s.getChildren(), t, r), t.push(Vt)) : t.push(at);
  }
}
function rs(e, t) {
  const r = [];
  return Ni(e, r, t), r.join("");
}
function Gr(e) {
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
function ib(e, t, r) {
  return t === "closing" ? Ge(e, r) : t === "selfClosing" ? Ge("") : Oe(e, r);
}
function Ec(e, t) {
  const r = e[t];
  if (!(!r || nd(r) !== "attribute-run"))
    return Gr(r) ?? [];
}
function ns(e, t) {
  const r = [];
  return Ss(e, r, t), r.join("");
}
function Ss(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = nd(s);
    if (o === "ms") {
      const l = s, u = Ec(e, i + 1);
      u && Ba(l.marker ?? "", r) ? (t.push(
        jt,
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
      ), Ss(u, t, r), t.push(Vt), i += 1) : t.push(at);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(at);
        continue;
      }
      t.push(
        jt,
        "verse",
        Wt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = Ec(e, i + 1 + u);
      for (; d; )
        Ss(d, t, r), u++, d = Ec(e, i + 1 + u);
      t.push(Vt), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        jt,
        "marker",
        Wt(
          ib(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        Vt
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(jt, "char", JSON.stringify(l.unknownAttributes ?? null)), Ss(Gr(s) ?? [], t, r, !0), t.push(Vt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(at);
      continue;
    }
    if (o === "unmatched") {
      t.push(jt, "unmatched", Wt(Vi(s) ?? "")), t.push(Vt);
      continue;
    }
    const a = Vi(s);
    if (a !== void 0) {
      t.push(Wt(n ? Zy(a) : a));
      continue;
    }
    const c = Gr(s);
    c ? (t.push(jt, o), Ss(c, t, r), t.push(Vt)) : t.push(at);
  }
}
function ja(e) {
  let t = 0;
  for (const r of e) {
    const n = Gr(r);
    if (n) {
      t += ja(n);
      continue;
    }
    const i = Vi(r);
    if (i !== void 0)
      for (const s of i) s === at && t++;
  }
  return t;
}
function Wi(e, t, r, n, i) {
  wr(e.getChildren(), t, r, n, i);
}
function wr(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (w(a))
      Mo(t, a, Wt(a.getTextContent()));
    else if (Pe(a)) {
      s();
      const c = Ka(e, o);
      Ba(a.getMarker(), r) && tb(c) ? wr(c, t, r, n) : bs(t, [a, ...c]), o += c.length;
    } else if (D(a) || Ne(a))
      s(), bs(t, [a]);
    else if (Ee(a)) {
      s();
      const c = za(e, o);
      rd(a) ? bs(t, [a, ...c]) : (Mo(t, a, Wt(Ns(a))), wr(c, t, r, n)), o += c.length;
    } else if (L(a))
      s(), nb(a, r) ? bs(t, [a]) : Wi(a, t, r, n, { pending: !0 });
    else if (xa(a))
      s(), Mo(t, a, " ");
    else if (S(a)) {
      const c = en(a) || re(a, ce) === "attribute", l = s() && !c;
      Mo(
        t,
        a,
        c ? Wt(Ns(a)) : AP(Ns(a), n, l)
      );
    } else R(a) ? Wi(a, t, r, n, i) : (s(), bs(t, [a]));
  }
}
function id(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Ne(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Wi(e, i, t, r), i;
}
function PP(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  return Wi(e, n, t, r), n;
}
function sd(e, t, r) {
  if (e.length === 0) return;
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e) {
    if (!se(i)) return;
    const s = id(i, t, r);
    if (!s) return;
    n.text.length > 0 && (n.text += " ");
    const o = n.text.length;
    s.spans.forEach(
      (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), n.sentinels.push(...s.sentinels), n.text += s.text;
  }
  return n;
}
function wP(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    if (se(i)) {
      const s = id(i, t, r);
      if (!s) return;
      const o = n.text.length;
      s.spans.forEach(
        (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
      ), n.sentinels.push(...s.sentinels), n.text += s.text;
    } else Se(i) ? wr(i.getChildren(), n, t, r) : wr([i], n, t, r);
  return n;
}
function sb(e, t) {
  let r = 0;
  const n = (i) => {
    if (S(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(at);
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
    } else R(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function vl(e, t = []) {
  for (const r of e)
    Ee(r) ? t.push(r) : R(r) && vl(r.getChildren(), t);
  return t;
}
function ob(e) {
  let t = 0;
  const r = (n) => {
    if (S(n))
      for (const i of n.getTextContent()) i === at && t++;
    else R(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function hi(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === at && t++;
    else r.content && (t += hi(r.content));
  return t;
}
function od(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), R(i) && Wi(i, n, t, r);
  return n;
}
function hn(e, t, r) {
  let n = 0, i = 0;
  for (const s of e.spans) {
    const o = s.end - s.start, a = s.key === t, c = a ? Math.min(s.isSentinel ? 1 : r, o) : o;
    for (let l = 0; l < c; l++)
      dr.test(e.text[s.start + l]) ? i++ : (n++, i = 0);
    if (a) return { nonWsBefore: n, wsRun: i };
  }
}
function Cl(e, t) {
  t.add(e.getKey()), R(e) && e.getChildren().forEach((r) => Cl(r, t));
}
function ad(e, t, r) {
  return e.spans.find(
    (n) => !n.isSentinel && n.key === t && r <= n.end - n.start
  );
}
function Rs(e, t, r) {
  const n = (d, f) => {
    const p = hn(e, d, f), h = ad(e, d, f);
    return p && h ? { anchor: p, position: h.start + f } : void 0;
  }, i = (d) => {
    const f = d.end - d.start, p = hn(e, d.key, f);
    return p ? { anchor: p, position: d.start + f } : void 0;
  };
  if (!R(t)) return n(t.getKey(), r);
  const s = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, r).forEach((d) => Cl(d, s));
  const o = [...e.spans].reverse().find((d) => s.has(d.key));
  if (o) return i(o);
  const a = /* @__PURE__ */ new Set();
  Cl(t, a);
  const c = e.spans.find((d) => a.has(d.key));
  if (c && !c.isSentinel) return n(c.key, 0);
  const l = [...e.spans].reverse().find((d) => !a.has(d.key) && G(d.key)?.isBefore(t));
  if (l) return i(l);
  const u = e.spans[0];
  return u && !u.isSentinel ? n(u.key, 0) : void 0;
}
function $s(e) {
  if (e.isSentinel) return !1;
  const t = G(e.key);
  return w(t) && t.getMarkerSyntax() !== "opening";
}
function ab(e) {
  const t = G(e.key);
  if (!w(t)) return;
  const r = t.getParent();
  if (!L(r)) return;
  const n = r.getParent();
  if (n)
    return {
      key: n.getKey(),
      offset: r.getIndexWithinParent() + 1,
      type: "element"
    };
}
function OP(e) {
  const t = G(e.key), r = t?.getParent(), n = r?.getChildren();
  if (!t || !r || !n) return;
  const i = n.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = Ee(t) ? za(n, i) : Pe(t) ? Ka(n, i) : [], o = s[s.length - 1] ?? t;
  return { key: r.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" };
}
function Dt(e, t, { addressDisplayBytes: r = !1 } = {}) {
  const { text: n, spans: i } = e;
  let s, o = t.nonWsBefore, a = t.wsRun, c = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && (r || !$s(d));
    if (c) {
      if (!p) continue;
      s = { key: d.key, offset: 0 };
      break;
    }
    for (let h = 0; h < f; h++) {
      const g = n[d.start + h];
      if (o === 0 && (a === 0 || !dr.test(g))) {
        if (p) {
          s = { key: d.key, offset: h };
          break e;
        }
        c = !0;
        continue e;
      }
      o > 0 ? dr.test(g) || o-- : a--;
    }
    if (o === 0 && a === 0) {
      if (p && !r) {
        s = { key: d.key, offset: f };
        break;
      }
      c = !0;
    }
  }
  if (s) return { ...s, type: "text" };
  const l = i[i.length - 1];
  if (l && $s(l)) {
    const d = ab(l);
    if (d) return d;
  }
  if (l?.isSentinel) {
    const d = OP(l);
    if (d) return d;
  }
  const u = [...i].reverse().find((d) => !d.isSentinel && !$s(d));
  if (u) return { key: u.key, offset: u.end - u.start, type: "text" };
}
function cb(e, t = []) {
  for (const r of e)
    pe(r) && t.push(r), R(r) && cb(r.getChildren(), t);
  return t;
}
function lb(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), R(e) && e.getChildren().forEach((r) => lb(r, t)), t;
}
function NP(e, t, r) {
  const n = hn(e, t.key, r);
  if (n)
    return t.isSentinel ? {
      kind: "preserved",
      anchor: n,
      run: e.spans.filter((i) => i.isSentinel).indexOf(t)
    } : { kind: "byte", anchor: n };
}
function Va(e, t, r = t.sentinels, n) {
  const i = [];
  for (const o of cb(e)) {
    const a = lb(o), c = t.spans.filter((v) => a.has(v.key)), l = c[0], u = c[c.length - 1];
    if (!l || !u) continue;
    const d = NP(t, l, 0), f = hn(t, u.key, u.end - u.start);
    if (!d || !f) continue;
    const p = o.getTypedOnClicks(), h = o.getTypedOnRemoves(), g = o.getTypedOnMouseEnters(), m = o.getTypedOnMouseLeaves(), x = Object.entries(o.getTypedIDs()).flatMap(
      ([v, _]) => _.map((A) => ({
        type: v,
        id: A,
        onClick: p[v]?.[A],
        onRemove: h[v]?.[A],
        onMouseEnter: g[v]?.[A],
        onMouseLeave: m[v]?.[A],
        fromMark: !0
      }))
    );
    x.length > 0 && i.push({ annotations: x, start: d, end: f });
  }
  const s = (o) => {
    const a = o.getKey();
    for (const c of Zn(o)) {
      if (c.start === c.end || !ad(t, a, c.start)) continue;
      const l = hn(t, a, c.start), u = hn(t, a, c.end);
      if (!l || !u) continue;
      const d = n && zs(n, c.type, c.id);
      i.push({
        annotations: [
          {
            type: c.type,
            id: c.id,
            onClick: d?.onClick,
            onRemove: d?.onRemove,
            onMouseEnter: d?.onMouseEnter,
            onMouseLeave: d?.onMouseLeave
          }
        ],
        start: { kind: "byte", anchor: l },
        end: u
      });
    }
    R(o) && o.getChildren().forEach(s);
  };
  return e.forEach(s), { ranges: i, live: i.length > 0 ? pa(t, r) : void 0 };
}
function RP(e, t, r) {
  const n = ub(e);
  if (!n) return;
  const i = n[n.length - 1].getNextSibling();
  if (!pe(i) || !i.hasID(t, r)) return;
  const s = i.getFirstChild();
  s && n.forEach((o) => s.insertBefore(o));
}
function $P(e, t) {
  const r = ub(e);
  if (!r) return;
  const n = Jn();
  n.addID(
    t.type,
    t.id,
    t.onClick,
    t.onRemove,
    t.onMouseEnter,
    t.onMouseLeave
  ), r[0].insertBefore(n), n.append(...r);
}
function ub(e) {
  const t = G(e), r = t?.getParent()?.getChildren();
  if (!t || !r) return;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return;
  const i = Ee(t) ? za(r, n) : Pe(t) ? Ka(r, n) : [];
  return [t, ...i];
}
function db(e, t, r, n) {
  const i = r.settledOnlyRuns, s = { addressDisplayBytes: n }, o = Zu(i, e);
  if (o) {
    if (!o.within) return;
    const u = Dt(o.run.spelling, o.within, s);
    return u ? { point: u, at: o.within.nonWsBefore, literalRun: o.run.sentinelIndex } : void 0;
  }
  const a = n && Qy(i, e);
  if (a) {
    const u = t.sentinels[a.sentinelIndex]?.[0]?.getKey(), d = {
      nonWsBefore: a.settledBefore + 1,
      wsRun: 0
    }, f = Dt(t, d, s);
    return f && u ? { point: f, at: d.nonWsBefore, preservedKey: u } : void 0;
  }
  const c = fo(r.alignment, e, "toSettled"), l = Dt(t, c, s);
  return l && { point: l, at: c.nonWsBefore };
}
function qP(e, t, r) {
  if (e.kind === "byte") return db(e.anchor, t, r, !0);
  const n = r.sentinelMap[e.run]?.find((a) => a !== void 0), i = n && t.sentinels[n.sentinelIndex]?.[0]?.getKey();
  if (!i) return;
  const s = fo(r.alignment, e.anchor, "toSettled"), o = Dt(t, s, { addressDisplayBytes: !0 });
  return o && { point: o, at: s.nonWsBefore, preservedKey: i };
}
function wp(e) {
  if (e.type !== "text") return e;
  const t = G(e.key);
  if (S(t)) return e;
  const r = t?.getParent();
  if (!t || !r) return;
  const n = t.getIndexWithinParent() + (e.offset > 0 ? 1 : 0);
  return { key: r.getKey(), offset: n, type: "element" };
}
function Wa({ ranges: e, live: t }, r) {
  if (e.length === 0 || !t) return;
  const n = $()?.clone() ?? null;
  for (const i of e)
    for (const s of i.annotations) {
      const o = r();
      if (!o) continue;
      const a = ha(t, Qu(o)), c = qP(i.start, o, a), l = db(i.end, o, a, !1);
      if (!c || !l || c.literalRun !== l.literalRun) continue;
      const u = i.start.anchor;
      if (c.at === l.at && u.nonWsBefore !== i.end.nonWsBefore && !c.preservedKey)
        continue;
      const { preservedKey: d } = c, f = wp(c.point), p = wp(l.point);
      if (!f || !p) continue;
      if (f.key === p.key && f.offset === p.offset && f.type === p.type) {
        d && $P(d, s);
        continue;
      }
      const h = Zs();
      h.anchor.set(f.key, f.offset, f.type), h.focus.set(p.key, p.offset, p.type), lu(
        h,
        s.type,
        s.id,
        s.onClick,
        s.onRemove,
        s.onMouseEnter,
        s.onMouseLeave
      ), s.fromMark && zs(Yt(), s.type, s.id) && Qg(s.type, s.id, {}, !0), d && RP(d, s.type, s.id);
    }
  mn(n);
}
function cd(e, t, r) {
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
function fb(e, t) {
  return e.sentinels.filter((n, i) => n.length > 0 && (t[i]?.length ?? 0) === 0).map((n) => n[0].getKey()).reverse().reduce((n, i) => {
    const s = n.spans.find((o) => o.isSentinel && o.key === i);
    return s ? cd(n, s.start, s.end) : n;
  }, e);
}
function po(e) {
  const t = e.exportJSON();
  return R(e) && Array.isArray(t.children) && e.getChildren().forEach((r) => t.children?.push(po(r))), t;
}
function ld(e, t, r, n, i, s, o) {
  const a = Va(
    e,
    fb(t, r),
    r
  );
  if (a.ranges.length === 0) return n;
  const c = Ch({
    nodes: [Ze, ...$u],
    onError: (u) => {
      throw u;
    }
  });
  Kl(
    c,
    Ze,
    (u) => Jn(u.getTypedIDs()),
    (u, d) => Object.entries(u.getTypedIDs()).forEach(
      ([f, p]) => p.forEach((h) => d.addID(f, h))
    )
  );
  let l;
  return c.update(
    () => {
      const u = ye(), d = i === "noteContent" ? Gt() : u;
      d !== u && u.append(d), l = d.getKey(), n.forEach((p) => d.append(Hi(p))), Wa(a, () => {
        const p = d.getChildren();
        if (i === "paras") return od(p, s, o);
        if (i === "chapter")
          return Se(p[0]) ? Js(p[0], s, o) : void 0;
        const h = { text: "", spans: [], sentinels: [] };
        return wr(p, h, s, o), h;
      });
    },
    { discrete: !0 }
  ), c.getEditorState().read(() => {
    const u = l === void 0 ? void 0 : G(l);
    return R(u) ? u.getChildren().map(po) : n;
  });
}
function Sl(e) {
  const t = G(e.key);
  if (!t?.isAttached()) return !1;
  if (e.type === "text")
    return S(t) ? (t.select(e.offset, e.offset), !0) : !1;
  if (!R(t)) return !1;
  const r = Zs();
  return r.anchor.set(e.key, e.offset, "element"), r.focus.set(e.key, e.offset, "element"), mn(r), !0;
}
function IP(e, t, r) {
  const n = Dt(e, t);
  if (n?.type === "text") {
    if (Sl(n)) return;
  } else if (n) {
    const i = G(n.key), s = R(i) ? i.getChildAtIndex(n.offset - 1) : void 0;
    if (s) {
      s.selectNext(0, 0);
      return;
    }
  }
  r.find(R)?.selectStart();
}
function ud(e, t) {
  const r = t.getNode(), n = ed(e, r), i = n && td(n.member, r);
  return {
    // An element point (a click past a paragraph's trailing note) has no span of its own, so it
    // is spelled from the child bytes beside it, the same way a settled position spells one.
    anchor: t.type === "element" ? Rs(e, r, t.offset)?.anchor : hn(e, t.key, t.offset),
    inRun: n && i ? {
      sentinelIndex: n.sentinelIndex,
      memberIndex: n.memberIndex,
      path: i,
      offset: t.offset,
      type: t.type
    } : void 0,
    live: pa(e, e.sentinels)
  };
}
function pb(e, t, r) {
  const n = t && ha(t.live, Qu(e));
  if (t?.inRun && n) {
    const { sentinelIndex: o, memberIndex: a, path: c, offset: l, type: u } = t.inRun, d = n.sentinelMap[o]?.[a];
    let f = d && e.sentinels[d.sentinelIndex]?.[d.memberIndex];
    for (const p of c)
      f = R(f) ? f.getChildAtIndex(p) ?? void 0 : void 0;
    if (f && Sl({ key: f.getKey(), offset: l, type: u })) return;
  }
  if (!t?.anchor || !n) {
    r.find(R)?.selectStart();
    return;
  }
  const { anchor: i } = t, s = Zu(n.settledOnlyRuns, i);
  if (s) {
    const o = s.within ?? {
      nonWsBefore: uo(s.run.inner, s.count, "live"),
      wsRun: i.wsRun
    }, a = Dt(s.run.spelling, o);
    if (a && Sl(a)) return;
  }
  IP(
    e,
    fo(n.alignment, i, "toSettled"),
    r
  );
}
function hb(e, t, r, n, i) {
  r && pb(od(e, n, i), t, e);
}
function LP(e, t, r, n, i) {
  if (!r) return;
  const s = { text: "", spans: [], sentinels: [] };
  wr(e, s, n, i), pb(s, t, e);
}
function gb(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = sd(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = $();
  if (O(c)) {
    for (let m = c.anchor.getNode(); m; m = m.getParent())
      if (e.some((x) => x.is(m))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = ud(s, c.anchor));
  }
  const l = Va(e, s, void 0, Yt()), u = Yr(s.text, {
    getMarker: n
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (hi(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const d = Sn.serializeEditorState(
    { type: Br, version: zr, content: u },
    r
  );
  if (ns(d.root.children, n) === rs(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const f = d.root.children.map((m) => Hi(m));
  if (ob(f) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = vl(e).map((m) => ({
    number: m.getNumber(),
    sid: m.getSid()
  })), h = e[0];
  f.forEach((m) => h.insertBefore(m)), sb(f, s.sentinels), e.forEach((m) => m.remove());
  const g = vl(f);
  for (let m = 0; m < p.length && m < g.length; m++)
    g[m].getNumber() === p[m].number && g[m].setSid(p[m].sid);
  return Wa(l, () => od(f, n, r)), hb(f, o, a, n, r), !0;
}
function Gs(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !$e.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!w(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(tr(s) || S(s) && s.getTextContent() === Ut(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const u = n[a - 1];
    if (!w(u) || u.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return wr(c, l, t, r), { out: l, contentNodes: c };
}
function mb(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(at)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function DP(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Gs(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = $();
  if (O(u)) {
    for (let P = u.anchor.getNode(); P; P = P.getParent())
      if (e.is(P)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = ud(o, u.anchor));
  }
  const d = Va(a, o, void 0, Yt()), f = Yr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (f.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (hi(f) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const h = p.content ?? [], g = mb(h), m = eb(e, h, g, r);
  if (m.failure !== void 0)
    return m.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      m.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (ja(m.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const x = e.getCategory() !== g;
  if (x && e.setCategory(g), ns(m.children, n) === rs(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), x;
  const v = m.children.map((P) => Hi(P));
  if (ob(v) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), x;
  const _ = a[0];
  if (_)
    v.forEach((P) => _.insertBefore(P));
  else {
    const P = e.getChildren().find((T) => w(T) && T.getMarkerSyntax() === "closing");
    v.forEach((T) => P ? P.insertBefore(T) : e.append(T));
  }
  sb(v, o.sentinels);
  const A = new Set(o.sentinels.flat().map((P) => P.getKey()));
  a.forEach((P) => {
    A.has(P.getKey()) || (pe(P) && (P.getWritable().__suppressOnRemoveCallbacks = !0), P.remove());
  });
  const E = () => Gs(e, n, r);
  return Wa(d, () => E()?.out), LP(
    E()?.contentNodes ?? v,
    c,
    l,
    n,
    r
  ), !0;
}
const yb = /* @__PURE__ */ new Set(["ca", "cp"]), dd = "cp";
function bb(e) {
  if (!tt(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (Wi(e, t, _r, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Yr(r, { getMarker: _r }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === dd)
  );
}
function is(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (L(r) && yb.has(r.getMarker()) || bb(r)) {
      t.push(r);
      continue;
    }
    se(r) && r.getMarker() === dd && t.push(r);
    break;
  }
  return t;
}
function UP(e) {
  const t = (n) => L(n) && yb.has(n.getMarker()) || bb(n);
  if (t(e) || se(e) && e.getMarker() === dd)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Se(n)) return n;
      if (!t(n)) return;
    }
}
function Js(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = is(e);
  if (n.some((s) => se(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (wr(e.getChildren(), i, t, r), wr(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function FP(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...is(e)], o = Js(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = $();
  if (O(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((x) => x.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = ud(o, l.anchor));
  }
  const u = Va(s, o, void 0, Yt()), d = Yr(o.text, { getMarker: n }), [f] = d;
  if (d.length === 0 || typeof f != "object" || f.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (hi(d) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (f.sid = e.getSid());
  const p = Sn.serializeEditorState(
    { type: Br, version: zr, content: d },
    r
  );
  if (ns(p.root.children, n) === rs(s, n)) {
    let m = !1;
    return e.getNumber() !== (f.number ?? "") && (e.setNumber(f.number ?? ""), m = !0), e.getAltnumber() !== f.altnumber && (e.setAltnumber(f.altnumber), m = !0), e.getPubnumber() !== f.pubnumber && (e.setPubnumber(f.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const h = p.root.children.map((m) => Hi(m));
  if (!Se(h[0]))
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1;
  const g = h[0];
  return h.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), Wa(
    u,
    () => Js(g, n, r)
  ), hb(h, a, c, n, r), !0;
}
function Ys(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Ne(n)) return;
    !t && (D(n) || se(n) || Se(n)) && (t = n), Mr(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? UP(r) : void 0) ?? t;
}
function or(e, t) {
  const r = Ys(e);
  return r ? D(r) ? DP(r, t) : Se(r) ? FP(r, t) : gb([r], t) : !1;
}
const KP = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Op(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !KP.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function qo(e, t) {
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
          t.push(`\\${n}`), Op(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), qo(r.content, t), Op(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), qo(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), qo(r.content, t);
      }
    }
}
function Np(e, t, r) {
  const n = Ys(e);
  if (!se(n)) return !1;
  const i = $();
  if (!O(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = id(n, t, r);
  if (!o) return !1;
  const a = Yr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    dr.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  qo(a, l);
  for (const u of l.join("").replaceAll(q, "~")) {
    if (dr.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function zP(e) {
  return [gt(e), Ra()];
}
function fd(e) {
  lr(e, 2);
}
function BP(e) {
  const t = $();
  if (!O(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function pd(e) {
  const t = BP(e);
  e.splice(0, 0, zP(e.getMarker())), t && fd(e);
}
function ga(e, t) {
  e.setMarker(t), pd(e), fd(e);
}
function jP(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!en(n)) {
    if (S(n) && !w(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(q), ht(n, ce, Nr), n.setMode("token");
      return;
    }
    if (Bg(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Ra());
  }
}
function Rp(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : R(n) ? n.getChildrenSize() : 0;
  if (r === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = n; !s.is(t); ) {
    if (r === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function qs(e) {
  for (let t = e; t; t = t.getParent())
    if (se(t)) return t;
}
function VP(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = qs(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = qs(r.getNode())?.is(s) ?? !1, a = qs(n.getNode())?.is(s) ?? !1;
    return !(o && !Rp(r, s, "start") || a && !Rp(n, s, "end"));
  });
}
function _l(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = $();
  if (!(!O(r) || r.isCollapsed()))
    for (const n of VP(r)) t.add(n.getKey());
}
function WP(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = $();
  if (!O(r) || !r.isCollapsed()) return;
  const n = qs(r.focus.getNode());
  n && t.add(n.getKey());
}
function HP(e) {
  const t = $();
  !O(t) || t.isCollapsed() || t.getNodes().some((r) => w(r)) && (_l(e), t.removeText());
}
function GP(e, t) {
  if (!Zi(t.viewOptions)) return;
  if (er(e.getFirstChild())) {
    jP(e, t);
    return;
  }
  if (t.splitExpected.current) {
    pd(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => se(o) && !o.is(e))) {
      ga(e, Sr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (se(r)) {
    const n = e.getChildren().filter((a) => !en(a)), i = $();
    let s = !1;
    if (O(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : qs(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || R(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && lr(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  ga(e, Sr);
}
function JP(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = vr(t, eo(e.getMarker()));
  return r === "" ? void 0 : r;
}
function YP(e) {
  const t = e.getChildren().filter((s) => !w(s) && re(s, ce) !== "attribute"), r = t[0];
  r && S(r) && r.getTextContent().startsWith(q) && r.setTextContent(r.getTextContent().slice(1));
  const n = JP(e);
  n && t.push(ve(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function XP(e, t) {
  const r = e.getChildren(), n = r.some((s) => w(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => S(c) && !w(c) && c.getTextContent() === Ut(s)
    ), a = Yi(e).some(({ node: c }) => w(c));
    if (!o && !a) return;
    r.forEach((c) => {
      w(c) || (S(c) && c.getTextContent() === Ut(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => w(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function QP(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(w(r) && r.getMarkerSyntax() === "opening")) {
    YP(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => w(o) && o.getMarkerSyntax() === "closing");
  i && !s && or(e, t);
}
function kb(e, t, r) {
  if (!w(e.getFirstChild()) && r?.markerMode === "editable" && Zi(r)) {
    ga(e, t);
    return;
  }
  Ym(e, t);
}
function xb() {
  const e = $();
  if (!O(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Tb(e);
    return t !== "removed" ? t : (Ml(), "handled");
  }
  return Ml() ? "handled" : "declined";
}
function ZP(e, t) {
  if (!t) return e;
  const r = hP.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function $p(e, t) {
  const r = $();
  if (!O(r)) return "declined";
  if (r.isCollapsed()) {
    if (!vb())
      return "declined";
  } else {
    const s = Tb(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => ZP(s, t)
  );
  qp(n ?? "");
  for (const s of i)
    Ml(), qp(s);
  return "handled";
}
function e0(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Ji(n);
  if (!i) return !1;
  const s = cr(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !S(i) || w(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Tb(e) {
  const t = cr(e.anchor.getNode()), r = cr(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), t0() ? "removed" : "needs-plain-split");
}
function qp(e) {
  if (e === "") return;
  const t = $();
  O(t) && t.insertText(e);
}
function t0() {
  const e = $();
  if (!O(e) || !e.isCollapsed()) return !1;
  const t = cr(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => w(r) && r.getMarkerSyntax() === "opening");
}
function vb() {
  const e = $();
  if (!O(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = cr(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function Ml() {
  const e = $();
  if (!O(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = vb();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = jr("fp", { closed: "false" });
  i.append(gt("fp"));
  const s = S(t) && !w(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
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
    u && (Hv(u), i.append(u));
  }
  return i.getChildren().every(w) && i.append(ve(Xt)), Cb(i), !0;
}
function Cb(e) {
  const t = e.getChildren().find((r) => !w(r));
  if (S(t)) {
    const r = t.getTextContent().startsWith(q) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (R(t)) {
    Cb(t);
    return;
  }
  e.selectEnd();
}
function r0(e) {
  const t = [];
  let r = e;
  for (; r; )
    L(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function n0(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of ye().getChildren()) {
    if (t && n.is(t)) break;
    (ut(n) || je(n) || se(n)) && r.push(n.getMarker());
  }
  return r;
}
function i0(e) {
  let t = e;
  for (; R(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function s0(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (er(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && en(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(i0(i)) && r === 0 : !1;
}
function o0(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !er(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && en(i) && t.is(i) && r === 0;
}
function a0() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function c0() {
  const e = $();
  if (!O(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = it(t, se), s = !n && (!i || o0(i, t, r)) ? "paragraph" : "character", o = cr(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: n0(t),
    openCharMarkers: r0(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: gu(t, r),
    anchorRect: a0()
  };
}
function l0() {
  const e = $();
  if (!O(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!S(t) || w(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = gP.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function u0(e, t, r) {
  kb(e, t, r), fd(e);
}
function d0(e, t, r) {
  const n = $();
  if (!O(n)) return;
  const i = n.focus.getNode(), s = it(i, se);
  if (t === "backslash" && s && s0(s, i, n.focus.offset)) {
    u0(s, e, r);
    return;
  }
  _b(e, r);
}
function f0(e, t) {
  const r = $();
  return !O(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Sb(e) {
  const t = $();
  return O(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function p0(e, t, r, n) {
  if (O($()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && l0(), e.kind === "closeTag") {
    Sb(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && xb() !== "declined") return;
  if (e.kind === "paragraph" && st.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    d0(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if ($e.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Ny(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  hl(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Yt(), reference: r });
}
function _b(e, t) {
  const r = $();
  if (!O(r)) return;
  const n = Zi(t);
  if (wy()) {
    const s = $();
    if (!O(s)) return;
    const o = it(s.anchor.getNode(), se);
    if (!o) return;
    o.setMarker(e), n && pd(o);
    return;
  }
  const i = r.insertParagraph();
  se(i) && (n ? ga(i, e) : i.setMarker(e));
}
function h0() {
  const [e] = de();
  return j(() => e.registerCommand(Sh, () => !0, It), [e]), null;
}
function Mb(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Paragraph : !($e.isValidMarker(r) || _a(r));
}
function g0(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Character : !($e.isValidMarker(r) || _a(r));
}
function m0(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = uP.exec(e)?.[1];
  return r === void 0 ? !1 : !Mb(r, t);
}
function Eb(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !m0(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!se(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (se(i))
    return [i, r];
}
function Ab(e, t) {
  const r = Eb(e, t.getMarker);
  return r !== void 0 && gb(r, t);
}
function y0(e, t) {
  const r = $();
  O(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function Pb(e) {
  const t = dP.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function b0(e) {
  const t = $();
  if (!O(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = Pb(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function k0(e) {
  const t = $();
  if (!O(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (D(e.getParent()) && S(r)) {
    const n = r.getNextSibling();
    if (L(n)) {
      pu(n);
      return;
    }
  }
  S(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Ip(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = Pb(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  k0(e);
}
function Lp(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function wb(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return or(e, r);
  const n = b0(e), i = e.getParent();
  if (se(i)) {
    if (!Mb(t, r.getMarker))
      return Ab(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : or(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Lp(s, t) && Ip(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (L(i) || D(i)) {
    const s = t.replace(/^\+/, "");
    if (!(L(i) ? g0(t, r.getMarker) : $e.isValidMarker(s)))
      return or(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return or(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(w).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (y0(c, Ge(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Lp(a, s) && Ip(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return or(e, r);
}
function x0(e) {
  const t = $();
  if (!O(t)) return !1;
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
function T0(e, t) {
  const r = e.getTextContent();
  if (Mn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (De(e.getParent()) && Gl(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !x0(e)) {
    mT(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = cP.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), wb(e, n[1], t);
      return;
    }
    if (lP.test(r)) {
      t.pendingKeys.delete(e.getKey()), or(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = Ge(e.getMarker(), e.getNested());
    if (L(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = $(), o = O(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = ve(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function v0(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (em(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Ob(e) {
  if (!Rh(e)?.length)
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
const ks = Ob("v"), C0 = Ob("c"), Dp = /^[ \u00A0]*$/;
function Up(e, t, r) {
  const n = e.getNextSibling();
  if (S(n) && n.getType() === Ue.getType() && n.getMode() === "normal" && re(n, ce) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = ve(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function S0(e, t) {
  const r = e.getTextContent(), n = Ht("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (ks.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = ks.valueAndRest.exec(c);
    if (l && Dp.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (ks.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = ks.valueAndRest.exec(r);
  if (!s) {
    const c = ks.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = $(), p = O(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Ht("v", u));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      Up(e, d, h);
      return;
    }
    t.pendingKeys.delete(e.getKey()), or(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), Dp.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Ht("v", o)), a && Up(e, a, a.length);
}
const _0 = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function M0(e, t) {
  const r = e.getParent();
  if (!D(r) || r.getIsCollapsed() !== !1 || !Rh(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!w(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === Ut(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = _0.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Ut(a)), !0;
}
function E0(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!S(t)) return;
  const r = Ht("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = C0.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Nb(e) {
  if (Pe(e)) {
    const { wrapper: t } = Ea(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (D(e)) {
    const { wrapper: t } = Jl(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Se(e)) {
    const t = [], r = sg(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = ag(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Ee(e)) {
    const t = [], r = Ls(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = Ls(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function A0(e) {
  const t = $();
  if (!O(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Nb(e).some((n) => r.is(n));
}
function P0(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && se(e) && Bg(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Ds)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && co(l, e) && (i || A0(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Nb(e))
    l.remove(), n = !0;
  let s = !1;
  if (L(e)) {
    const l = UT(e);
    l !== void 0 && rT(l) && (gg(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Ds)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (wC(l, e)) {
        js(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && dm(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      qa(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function Fp(e) {
  return S(e) && e.getType() === Ue.getType() && e.getMode() === "normal" && re(e, ce) !== "attribute";
}
function w0(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = G(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && Fp(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && Fp(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Eo(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = w0(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = G(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (w(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (Mn(c)) continue;
      const h = Wy.exec(p);
      c.getMarkerSyntax() === "opening" && h ? n = wb(c, h[1], e) || n : r === "idle" && Np(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Ab(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = or(c, e) || n;
      continue;
    }
    const l = kn(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = P0(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && Np(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = or(u, e) || n;
    }
  }
  return n;
}
function Rb(e) {
  if (En(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (L(t)) return Ms(t) !== void 0;
  return !1;
}
function O0(e) {
  const t = kn(e);
  if (!t) return !1;
  const r = Wr(t.kind);
  return !qa(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Kp(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (ut(t) || Ne(t) || nm(t)) return !0;
  return !1;
}
function N0(e, t) {
  const r = e.getTextContent(), n = re(e, ce), i = e.getParent();
  if (n !== "attribute" && Se(i)) {
    r.replace(/^[ \u00A0]+/, "") === Ht("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (M0(e, t)) return;
  if (n === "attribute") {
    O0(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && Rb(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Kp(e))
      t.pendingKeys.add(e.getKey());
    else if (cg(e)) t.pendingKeys.add(e.getKey());
    else if (Se(Ys(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      L(a) && mg(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Kp(e)) return;
  const s = $(), o = O(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (fP.test(o)) {
    if (dT(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), or(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function R0(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : dm(e, t);
}
function $0(e) {
  const t = (r) => {
    if (w(r)) {
      Mn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (En(r)) {
      em(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Ds)
      n.settleScope !== "none" && n.ownerPredicate(r) && (co(n, r) || R0(n, r)) && e.pendingKeys.add(r.getKey());
    if (Ee(r)) {
      r.getTextContent() !== Ht("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (S(r)) {
      if (r.getType() !== Ue.getType() || re(r, ce) === "attribute") return;
      const n = r.getParent();
      if (Se(n)) {
        r.getTextContent() !== Ht("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && Rb(r) || i.includes("//") || cg(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (L(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Ne(r) && !ut(r)) {
      if (De(r) && r.getChildrenSize() === 0) {
        const n = kn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      R(r) && r.getChildren().forEach(t);
    }
  };
  ye().getChildren().forEach(t);
}
function q0(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = re(e, ce);
  if (r === "attribute" || r === Nr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (ut(o) || Se(o) || Ne(o)) return;
  const n = t.startsWith(q) && L(e.getParent()), i = n ? t.slice(1) : t, s = (n ? q : "") + i.replace(/ (?=[ \u00A0])/g, q).replace(new RegExp("(?<=\\u00A0) ", "g"), q);
  s !== t && e.setTextContent(s);
}
function I0(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function El(e) {
  const t = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!t) return;
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(t.getData("text/plain")), i = t.getData("text/html"), s = i ? r(I0(i)) : "";
  return {
    plainText: n,
    html: i,
    htmlText: s,
    text: n || s,
    isInternal: !!t.getData("application/x-lexical-editor")
  };
}
function L0(e) {
  const t = El(e);
  if (!t || t.isInternal) return !1;
  const { plainText: r, html: n, htmlText: i } = t, s = r.includes(q) ? r : n.includes(q) || i.includes(q) ? i : void 0;
  if (!s) return !1;
  const o = $();
  if (!O(o)) return !1;
  e?.preventDefault();
  const a = s.replaceAll(q, "~"), c = a.split(`
`);
  if (c.length < 2)
    return o.insertText(a), !0;
  o.isCollapsed() || o.removeText();
  const l = Yt();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(Ko, void 0), u === "") return;
    const f = $();
    O(f) && f.insertText(u);
  }), !0;
}
function D0(e) {
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
function U0(e) {
  const t = $();
  if (!O(t) || t.isCollapsed()) return;
  const r = {
    "text/plain": t.getTextContent().replaceAll(q, " ")
  }, n = mx(e), i = yx(e);
  return n && (r["text/html"] = D0(n)), i && (r["application/x-lexical-editor"] = i), r;
}
function zp(e, t, r) {
  const n = $();
  if (!O(n) || n.isCollapsed()) return !1;
  const i = U0(t);
  if (!i) return !1;
  if (!e || !("clipboardData" in e))
    return gx(t, null, i), r && n.removeText(), !0;
  if (e.clipboardData == null) return !1;
  e.preventDefault();
  for (const [s, o] of Object.entries(i)) e.clipboardData.setData(s, o);
  return r && n.removeText(), !0;
}
const $b = $l(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Ac(e) {
  const t = e();
  return Hn(yh), Hn(Ih), t;
}
const Bp = 8, F0 = 1e3;
function Pi(e, t) {
  const r = Ee(e) ? ["va", "vp"] : Pe(e) ? ["milestone"] : D(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    qC(Wr(n), e, t.pendingKeys);
}
function K0(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Ta) || du(e) === "remote")
      return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = G(o);
        if (!c) continue;
        const l = kn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = G(o.getKey());
        c?.isAttached() && Wr(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
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
    e.registerMutationListener(Ue, r),
    e.registerMutationListener(nr, r),
    e.registerMutationListener(pr, r),
    e.registerMutationListener(Xr, r)
  );
}
function z0(e, t, r) {
  return et(
    e.registerCommand(
      Kr,
      (n) => {
        if (ny()) return !1;
        const i = El(n);
        if (!i) return !1;
        const s = i.text;
        if (s.includes(`
`)) {
          const a = (r ? s.replaceAll(q, "~") : s).split(`
`);
          let c = $p(a, t.getMarker);
          if (c === "declined" && e0(e) && (c = $p(a, t.getMarker)), c === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      Cr
    ),
    e.registerCommand(
      Kr,
      (n) => {
        const i = El(n);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !MA()) return !1;
        n?.preventDefault();
        const o = $();
        return O(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Ko, void 0), a === "") return;
          const l = $();
          O(l) && l.insertText(a);
        }), !0;
      },
      Be
    ),
    e.registerCommand(
      Kr,
      () => (t.splitExpected.current = !0, !1),
      It
    )
  );
}
function B0({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n
}) {
  const [i] = de(), s = e?.markerMode === "editable", o = !!e && Nt(e), a = Z(void 0), c = Z(n);
  return j(() => {
    c.current = n;
    const l = a.current;
    l && (e && (l.viewOptions = e), l.getMarker = t ?? _r, l.logger = r);
  }, [e, t, r, n]), j(() => {
    if (!s || !e) return;
    const l = {
      viewOptions: e,
      getMarker: t ?? _r,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r
    };
    a.current = l;
    const u = MC(
      i,
      l.pendingKeys,
      (T) => {
        l.pendingKeys.clear(), T.read(() => $0(l));
      }
    );
    let d, f = !1, p = !1, h, g = !1, m = !1, x = 0;
    const v = () => x < Bp ? !1 : (l.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Bp} consecutive mutating passes; leaving ${l.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...l.pendingKeys].join(", ")}`
    ), !0), _ = (T, B = "departure") => {
      i.update(() => {
        x = Ac(
          () => Eo(l, T, B)
        ) ? x + 1 : 0;
      });
    };
    let A;
    const E = () => {
      if (A !== void 0 && clearTimeout(A), A = void 0, m || l.pendingKeys.size === 0) return;
      const T = c.current ?? F0;
      T < 0 || (A = setTimeout(() => {
        A = void 0, !(m || l.pendingKeys.size === 0) && (f || v() || _(void 0, "idle"));
      }, T));
    }, P = et(
      i.registerNodeTransform(nr, (T) => {
        if (i.isComposing()) return;
        T0(T, l);
        const B = kn(T);
        B && (Ee(B.owner) || D(B.owner) || Se(B.owner) || Pe(B.owner) && Ea(B.owner).wrapper === void 0) && Pi(B.owner, l);
      }),
      i.registerNodeTransform(ct, (T) => {
        i.isComposing() || (S0(T, l), Pi(T, l));
      }),
      i.registerNodeTransform(Kt, (T) => {
        i.isComposing() || (E0(T), T.isAttached() && Pi(T, l));
      }),
      i.registerNodeTransform(st, (T) => {
        i.isComposing() || GP(T, l);
      }),
      i.registerNodeTransform(_e, (T) => {
        if (!i.isComposing()) {
          QP(T, l);
          for (const B of ["separator", "char"])
            T.isAttached() && co(Wr(B), T) && l.pendingKeys.add(T.getKey());
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
      i.registerNodeTransform(ar, (T) => {
        i.isComposing() || Pi(T, l);
      }),
      i.registerNodeTransform(Xr, (T) => {
        if (i.isComposing()) return;
        const B = kn(T);
        B && (Pe(B.owner) || Ee(B.owner) || D(B.owner) || Se(B.owner)) && Pi(B.owner, l);
      }),
      i.registerNodeTransform($e, (T) => {
        i.isComposing() || (XP(T, l), Pi(T, l));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      i.registerNodeTransform(tn, (T) => {
        i.isComposing() || v0(T, l);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      i.registerNodeTransform(Ue, (T) => {
        i.isComposing() || N0(T, l);
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
        Ue,
        (T) => {
          i.getEditorState().read(() => {
            for (const [B, V] of T) {
              if (V === "destroyed") continue;
              const W = G(B);
              !W || re(W, ce) !== "attribute" || De(W.getParent()) || i.getElementByKey(B)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      K0(i, l),
      ...o ? [
        i.registerNodeTransform(Ue, (T) => {
          i.isComposing() || q0(T);
        }),
        i.registerCommand(
          Ca,
          (T) => zp(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            T && typeof T == "object" && "clipboardData" in T ? T : null,
            i,
            !1
          ),
          Be
        ),
        i.registerCommand(
          Wn,
          (T) => zp(
            T && typeof T == "object" && "clipboardData" in T ? T : null,
            i,
            !0
          ),
          Be
        ),
        i.registerCommand(
          Kr,
          (T) => L0(
            // Same jsdom-safe duck-check as COPY above.
            T && typeof T == "object" && "clipboardData" in T ? T : null
          ),
          Be
        )
      ] : [],
      i.registerCommand(
        Wn,
        () => (_l(l), !1),
        Cr
      ),
      i.registerCommand(
        Ll,
        () => (i.isComposing() || HP(l), !1),
        qi
      ),
      i.registerCommand(
        va,
        () => (f = !1, x = 0, E(), !1),
        It
      ),
      i.registerCommand(
        Jr,
        (T) => (f = !1, x = 0, E(), (T.key === "Backspace" || T.key === "Delete") && (_l(l), WP(l)), i.isComposing() || !T.ctrlKey || T.altKey || T.shiftKey || T.metaKey || T.key !== " " && T.code !== "Space" || !_A() ? !1 : (T.preventDefault(), !0)),
        Be
      ),
      i.registerCommand(
        Th,
        (T) => {
          const B = xb();
          B === "needs-plain-split" && i.dispatchCommand(Ko, void 0);
          const V = B !== "declined" || IC();
          return V && T?.preventDefault(), Eo(l), V;
        },
        Be
      ),
      i.registerCommand(
        Ko,
        () => (l.splitExpected.current = !0, wy()),
        Be
      ),
      z0(i, l, o),
      i.registerCommand(
        $b,
        () => {
          if (f) return !0;
          const T = i.getRootElement(), B = T?.ownerDocument, V = !!T && !!B && B.hasFocus() && T.contains(B.activeElement);
          let W;
          if (V) {
            const X = $();
            W = O(X) ? X.focus.key : d;
          }
          return Ac(() => Eo(l, W)), !0;
        },
        It
      ),
      i.registerCommand(
        Bl,
        () => (p = !0, !1),
        It
      ),
      i.registerCommand(
        Ul,
        () => {
          if (f) return !1;
          const T = $(), B = O(T) ? T.focus.key : d;
          return Ac(() => Eo(l, B)), !1;
        },
        It
      ),
      i.registerUpdateListener(({ editorState: T, tags: B }) => {
        const V = p || B.has(Is);
        p = !1, l.splitExpected.current = !1, l.wholeParaDeleteExpected?.clear(), l.collapsedDeleteCaretParas?.clear(), l.rebuildAttempted.clear();
        const W = T.read(() => {
          const ue = $();
          return O(ue) ? ue.focus.key : void 0;
        }), X = h;
        if (W !== void 0 && (h = W), B.has(Ta)) {
          um(i, T, B), f = !0, W !== void 0 && (d = W);
          return;
        }
        if (V) {
          W !== void 0 && W !== X && (f = !0);
          return;
        }
        f || (W !== void 0 && (d = W), E(), !(g || W === void 0) && [...l.pendingKeys].some((ue) => ue !== W) && (g = !0, queueMicrotask(() => {
          g = !1, !m && (v() || _(d));
        })));
      })
    );
    return () => {
      m = !0, A !== void 0 && clearTimeout(A), A = void 0, u(), P(), a.current = void 0;
    };
  }, [i, s, o]), null;
}
const j0 = ["status_unknown", "status_invalid"], qb = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, V0 = Object.values(qb);
function W0(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = qb[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function jp(e) {
  e.classList.remove(...j0), e.removeAttribute("aria-description"), V0.includes(e.title) && e.removeAttribute("title");
}
function H0(e, t, r, n) {
  const i = (a) => a.read(() => ye().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = G(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function G0(e) {
  const t = G(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : w(t) && t.getParent()?.getKey() === r.getKey();
}
function J0({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = de(), i = e?.markerMode === "editable";
  return j(() => {
    if (!i) return;
    const s = t ?? ea;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = XA(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || G0(f)) continue;
            const h = G(f)?.getTopLevelElement();
            !h || l.has(h.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && jp(p);
        }
        for (const [f, p] of d) {
          const h = n.getElementByKey(f);
          h && W0(h, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          H0(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && jp(u);
      }
    };
  }, [n, i, t, r]), null;
}
function ho(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Gr(o);
    a && R(s) && ho(s.getChildren(), a, r);
  }
}
function Ib(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Gr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = Vi(o);
      if (c === void 0 || !c.includes(at)) continue;
      const l = c.split(at), u = [];
      for (let d = 0; d < l.length; d++) {
        const f = l[d];
        if (d > 0 && u.push(...t[r++] ?? []), f.length > 0) {
          const p = {
            ...o,
            text: f
          };
          u.push(p);
        }
      }
      i.splice(s, 1, ...u), s += u.length - 1;
    }
  };
  n(e);
}
function go(e, t, r) {
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
function Lb(e, t) {
  const r = [];
  for (const n of e)
    rb(n, t) || ((se(n) || L(n)) && r.push(n.getMarker()), R(n) && r.push(...Lb(n.getChildren(), t)));
  return r;
}
function Db(e) {
  const t = [];
  for (const r of e) {
    const n = nd(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Gr(r);
    i && t.push(...Db(i));
  }
  return t;
}
function hd(e, t, r) {
  const n = Lb(e, r), i = Db(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function Ub(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = $();
  let n, i;
  if (O(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = G(t.key), i = t.offset;
  else
    return;
  if (!(!S(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function gd(e, t) {
  const r = t && Fb(e, t);
  return r ? cd(e, r.start, r.end) : e;
}
function Fb(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  if (!(s < n.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function Kb(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = sd(e, o, s);
  if (!c) return;
  const l = gd(c, i), u = Yr(l.text, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (hi(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = Sn.serializeEditorState(
    { type: Br, version: zr, content: u },
    s
  ).root.children;
  if (ja(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = go(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (ns(d, o) === rs(e, o) && hd(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Ib(d, f.serialized);
  const h = Y0(e), g = zb(d);
  for (let m = 0; m < h.length && m < g.length; m++)
    h[m].sid !== void 0 && g[m].number === h[m].number && (g[m].sid = h[m].sid);
  return ld(
    e,
    l,
    f.live,
    d,
    "paras",
    o,
    s
  );
}
function Y0(e) {
  const t = [], r = (n) => {
    Ee(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : R(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function zb(e) {
  const t = [];
  for (const r of e) {
    eg(r) && t.push(r);
    const n = Gr(r);
    n && t.push(...zb(n));
  }
  return t;
}
function X0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Gs(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = gd(l, i), f = Yr(d.text, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (hi(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const h = p.content ?? [], g = mb(h), m = e.getCategory() !== g, x = eb(e, h, g, s);
  if (x.failure !== void 0) {
    x.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : x.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const v = x.children;
  if (ja(v) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const _ = go(l, t, n);
  if (!_) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (ns(v, o) === rs(u, o) && hd(u, v, o)) {
    if (m)
      return { rebuilt: void 0, contentNodes: u, category: g, categoryChanged: m };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Ib(v, _.serialized), {
    // Annotation marks, mirroring `$rebuildNoteContent`'s carry.
    rebuilt: ld(
      u,
      d,
      _.live,
      v,
      "noteContent",
      o,
      s
    ),
    contentNodes: u,
    category: g,
    categoryChanged: m
  };
}
function Vp(e) {
  return e.$?.textType;
}
function Q0(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Vp(e) === Vp(t);
}
function Z0(e) {
  const t = [];
  for (const r of e) {
    const n = G(r);
    n?.isAttached() && Ne(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function ew(e) {
  if (!w(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!D(t)) return;
  const r = e.getTextContent();
  if (Mn(e)) return;
  const n = Wy.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Wp(e, t) {
  const r = e;
  r.marker = t, r.text = ib(t, r.markerSyntax, r.nested);
}
function Bb(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!$e.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Wp(a.node, s);
  const c = n.getChildren().filter(w).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Wp(l.node, s);
}
function jb(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Js(e, i, n);
  if (!o) return;
  const a = gd(o, r), c = Yr(a.text, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (hi(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = Sn.serializeEditorState(
    { type: Br, version: zr, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...is(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && ns(u, i) === rs(d, i) && hd(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return ld(
    d,
    a,
    [],
    u,
    "chapter",
    i,
    n
  );
}
function Vb(e, t, r) {
  const n = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = (d) => {
    D(d) ? s.set(d.getKey(), d) : Se(d) ? o.set(d.getKey(), d) : n.set(d.getKey(), [d]);
  };
  for (const d of e) {
    const f = G(d);
    if (!f?.isAttached()) continue;
    const p = Ys(f);
    if (p) {
      if (c(p), w(f)) {
        const h = Eb(f, t.getMarker);
        h && i.push(h);
      }
      if (D(p)) {
        const h = ew(f);
        h && a.set(p.getKey(), h);
      }
    }
  }
  const l = /* @__PURE__ */ new Set();
  for (const d of i)
    d.some((f) => l.has(f.getKey())) || (d.forEach((f) => {
      l.add(f.getKey()), n.delete(f.getKey());
    }), n.set(d[0].getKey(), d));
  if (r) {
    const d = Ys(r.node);
    d && c(d);
  }
  const u = Z0(e);
  return {
    paraScopes: n,
    noteScopes: s,
    chapterScopes: o,
    noteGlyphRenames: a,
    husks: u,
    huskKeys: new Set(u.map((d) => d.getKey()))
  };
}
function Wb(e, t) {
  e.splice(t, 1);
  const r = e[t - 1], n = e[t], i = r && Vi(r), s = n && Vi(n);
  r && n && i !== void 0 && s !== void 0 && Q0(r, n) && (r.text = i + s, e.splice(t, 1));
}
function Ha(e, t, r, n, i) {
  const s = t.get(e.getKey()), o = s ? Gr(s.node) : void 0;
  if (!s || !o) return !1;
  const a = X0(e, t, r, n, i);
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
function tw(e, t, r, n, i) {
  const s = Ub(n, i);
  if (t.size === 0 && !s) return;
  const { paraScopes: o, noteScopes: a, chapterScopes: c, noteGlyphRenames: l, husks: u, huskKeys: d } = Vb(t, r, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && u.length === 0)
    return;
  const f = /* @__PURE__ */ new Map();
  ho(ye().getChildren(), e.root.children, f);
  for (const p of l.values()) Bb(p, f);
  for (const p of a.values())
    Ha(p, f, r, d, s);
  for (const p of o.values()) {
    const h = f.get(p[0].getKey());
    if (!h) continue;
    const g = Kb(p, f, r, d, s);
    if (!g) continue;
    const m = h.siblings.indexOf(h.node);
    m < 0 || h.siblings.splice(m, p.length, ...g);
  }
  for (const p of c.values()) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const g = 1 + is(p).length, m = jb(p, r, s);
    if (!m) continue;
    const x = h.siblings.indexOf(h.node);
    x < 0 || h.siblings.splice(x, g, ...m);
  }
  for (const p of u) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const g = h.siblings.indexOf(h.node);
    g < 0 || Wb(h.siblings, g);
  }
  return vy(e, r.viewOptions);
}
function rw({
  viewOptions: e,
  logger: t
}) {
  const [r] = de(), n = Zi(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return j(() => {
    if (n)
      return r.registerNodeTransform(
        st,
        (i) => nw(i, t)
      );
  }, [r, n, t]), null;
}
function nw(e, t) {
  e.getMarker() !== Sr && (e.isEmpty() || er(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${Sr}" (key ${e.getKey()})`
  ), e.setMarker(Sr)));
}
function xs(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const iw = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function qr(e) {
  return iw.exec(e)?.[1] ?? e;
}
function Or(e, t) {
  const r = e.jsonPath.slice(qr(e.jsonPath).length);
  return { ...e, jsonPath: `${lt(t)}${r}` };
}
function Hb(e, t) {
  return e.length === t.length && e.every((r, n) => r === t[n]);
}
function Gb(e) {
  if (hh(e) || Do(e)) return !0;
  const t = Jb(e);
  return t === "marker" || t === "caller";
}
const sw = /^\['([^']+)'\]$/;
function Jb(e) {
  if (Lo(e))
    return sw.exec(
      e.jsonPath.slice(qr(e.jsonPath).length)
    )?.[1];
}
function Yb(e, t) {
  return Gb(e) && Hb(rr(qr(e.jsonPath)), Pr(t));
}
function Xb(e, t, r) {
  if (!e.isAttached()) return;
  const [n, i] = ur(
    Or(t, Pr(e)),
    r
  );
  if (!(!n || i === void 0))
    return { key: n.getKey(), offset: i, type: R(n) ? "element" : "text" };
}
function Qb(e, t) {
  const r = Dt(e, t, { addressDisplayBytes: !0 }), n = r && G(r.key);
  return r && r.offset > 0 && w(n) && n.getMarkerSyntax() !== "opening" ? r : void 0;
}
function Zb(e, t) {
  const r = Dt(e, t, { addressDisplayBytes: !0 });
  if (!r || r.offset !== 0) return;
  const n = e.spans.findIndex((o) => o.key === r.key), i = e.spans[n], s = n > 0 ? e.spans[n - 1] : void 0;
  if (!(!i || !$s(i) || !s || s.end !== i.start || !$s(s)))
    return ab(s);
}
function ow(e, t) {
  const r = Qb(e, t);
  if (r) return r;
  const n = Zb(e, t);
  if (n) return n;
  const i = Dt(e, t);
  return i && aw(e, i);
}
function aw(e, t) {
  if (t.type !== "text") return t;
  const r = e.spans.findIndex((a) => a.key === t.key), n = e.spans[r], i = e.spans[r + 1];
  if (!n || !i || n.end === n.start || t.offset !== n.end - n.start)
    return t;
  const s = e.text[i.start] === "\\", o = dr.test(e.text[n.end - 1]);
  return s || o ? { key: i.key, offset: 0, type: "text" } : t;
}
function ek(e) {
  const t = e.markerName.length + 2, r = t + e.valueLength;
  return { valueStart: t, closerStart: r, closerLength: e.markerName.length + 2 };
}
function cw(e, t, r) {
  const { keyName: n } = e, { valueStart: i, closerStart: s } = ek(e);
  return r === 0 ? { jsonPath: t, keyName: n } : r < i ? { jsonPath: t, keyName: n, keyOffset: r - 1 } : r < s ? {
    jsonPath: `${t}['${n}']`,
    propertyOffset: r - i
  } : { jsonPath: t, keyName: n, keyClosingMarkerOffset: r - s };
}
function lw(e, t) {
  const { valueStart: r, closerStart: n, closerLength: i } = ek(e), s = (o, a, c) => o >= 0 && o <= a ? c + o : void 0;
  if (Fo(t))
    return s(t.keyOffset, e.markerName.length, 1);
  if (Uo(t))
    return s(t.keyClosingMarkerOffset, i, n);
  if (Rl(t)) return 0;
  if (Lo(t))
    return s(t.propertyOffset, e.valueLength, r);
}
function uw(e) {
  return Fo(e) || Uo(e) || Rl(e) ? e.keyName : Jb(e);
}
function dw(e, t, r) {
  const n = ow(e.spelling, t), i = n && G(n.key);
  if (!n || !i) return;
  const s = e.foldedAttributes.find((o) => o.ownerKey === n.key);
  return s ? cw(
    s,
    lt(Pr(i)),
    n.offset
  ) : kt(i, n.offset, r);
}
function fw(e, t) {
  let r = ye();
  for (let n = 0; n < t.length; n += 1) {
    if (!R(r)) return;
    const i = vt(r, Nt(e.viewOptions))[t[n]];
    if (i?.type !== "element") return;
    r = i.node;
    const s = e.byFirstLiveKey.get(r.getKey());
    if (s?.kind === "note") return { plan: s, depth: n };
  }
}
function ma(e, t) {
  const r = rr(qr(t.jsonPath));
  if (r.length === 0) {
    if (!Bn(t)) return { kind: "live", location: t };
    const o = e.settledToLiveTopIndex(t.offset);
    if (!o) {
      const a = vt(
        ye(),
        Nt(e.viewOptions)
      ).length;
      return { kind: "live", location: { ...t, offset: a } };
    }
    return o.plan && o.indexWithinScope > 0 ? ma(e, { jsonPath: lt([t.offset]) }) : { kind: "live", location: { ...t, offset: o.liveIndex } };
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
  const i = [n.liveIndex, ...r.slice(1)], s = fw(e, i);
  return s ? {
    kind: "scope",
    plan: s.plan,
    scratchIndexes: [0, ...r.slice(s.depth + 1)],
    location: t
  } : { kind: "live", location: Or(t, i) };
}
function tk(e, t) {
  const r = uw(t);
  if (r === void 0) return;
  const n = rr(qr(t.jsonPath));
  for (const i of e)
    for (const s of i.foldedAttributes) {
      const o = G(s.ownerKey);
      if (s.keyName !== r || !o || !Hb(Pr(o), n))
        continue;
      const a = lw(s, t), c = i.spelling.spans.find((u) => u.key === s.ownerKey), l = a !== void 0 && c ? hn(i.spelling, s.ownerKey, a) : void 0;
      return a === void 0 || !c || !l ? { resolution: void 0 } : {
        resolution: {
          kind: "literal",
          run: i,
          anchor: l,
          atWordByte: Io(i.spelling, c.start + a)
        }
      };
    }
}
function pw(e, t, r, n) {
  const i = tk(t, r);
  if (i) return i.resolution;
  const [s, o] = ur(r, n.viewOptions);
  if (!s || o === void 0) return;
  const a = ed(e, s), c = a && t.find((f) => f.sentinelIndex === a.sentinelIndex);
  if (c) {
    const f = Rs(c.spelling, s, o);
    return f && {
      kind: "literal",
      run: c,
      anchor: f.anchor,
      atWordByte: Io(c.spelling, f.position)
    };
  }
  if (!a) {
    const f = Rs(e, s, o);
    return f ? {
      kind: "anchor",
      anchor: f.anchor,
      atWordByte: Io(e, f.position)
    } : void 0;
  }
  const l = td(a.member, s);
  if (!l) return;
  const u = D(a.member) ? Gs(a.member, n.getMarker, n.viewOptions)?.out : void 0, d = u && Rs(u, s, o);
  return {
    kind: "preserved",
    sentinelIndex: a.sentinelIndex,
    memberIndex: a.memberIndex,
    path: l,
    offset: o,
    type: R(s) ? "element" : "text",
    noteAnchor: d && {
      anchor: d.anchor,
      atWordByte: Io(u, d.position)
    },
    isNoteOwnBytes: D(a.member) && Yb(r, a.member)
  };
}
function hw(e, t, r) {
  const n = tk(e, t);
  if (n) return n.resolution !== void 0;
  const [i, s] = ur(t, r);
  return i !== void 0 && s !== void 0;
}
function Io(e, t) {
  const r = e.text[t];
  return r !== void 0 && !dr.test(r);
}
function rk(e, t) {
  if (t.type !== "text") return t;
  const r = ad(e, t.key, t.offset);
  if (!r) return t;
  const n = r.end - r.start;
  let i = t.offset;
  for (; i < n && dr.test(e.text[r.start + i]); ) i += 1;
  return i === t.offset ? t : { ...t, offset: i };
}
function md(e, t) {
  const r = e.liveCut;
  return !t || !r || t.type !== "text" || t.key !== r.key ? t : t.offset >= r.nodeOffset ? { ...t, offset: t.offset + r.length } : t;
}
function gw(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    const n = e[r];
    for (let i = 0; i < n.length; i += 1) {
      const s = n[i];
      if (s?.sentinelIndex === t.sentinelIndex && s.memberIndex === t.memberIndex)
        return { sentinelIndex: r, memberIndex: i };
    }
  }
}
function yd(e) {
  const { liveFragment: t, scratchFragment: r, sentinelMap: n, alignment: i } = e;
  return t && r && n && i ? { liveFragment: t, scratchFragment: r, sentinelMap: n, alignment: i } : void 0;
}
function nk(e) {
  const t = e.liveNodes[0];
  if (!t.isAttached()) return;
  if (e.kind !== "note" && R(t))
    return { key: t.getKey(), offset: 0, type: "element" };
  const r = t.getParent();
  return r ? { key: r.getKey(), offset: t.getIndexWithinParent(), type: "element" } : void 0;
}
function gn(e, t) {
  return t?.warn(
    `[positions] A settled location in a pending ${e.kind} scope could not be lined up with its live bytes; it resolves to the front of the scope.`
  ), nk(e);
}
function Pc(e, t) {
  return t?.error("settled-position basis out of date — rebuilt"), nk(e);
}
function Hp(e) {
  const t = [];
  let r = 0;
  for (const n of e.spans) {
    n.isSentinel && t.push(n.end > n.start ? r : void 0);
    for (let i = n.start; i < n.end; i += 1)
      dr.test(e.text[i]) || (r += 1);
  }
  return t;
}
function mw(e, t, r, n) {
  const { liveFragment: i, scratchFragment: s, alignment: o } = t, a = Hp(s)[r];
  if (a === void 0) return gn(e, n);
  const c = Hp(i).findIndex(
    (f) => f !== void 0 && Xu(o, f, "live") === a
  ), l = c < 0 ? void 0 : i.sentinels[c]?.[0], u = l?.isAttached() ? l.getParent() : void 0;
  if (l && u)
    return { key: u.getKey(), offset: l.getIndexWithinParent(), type: "element" };
  const d = Dt(i, {
    nonWsBefore: uo(o, a, "settled"),
    wsRun: 0
  });
  return d ? md(e, d) : gn(e, n);
}
function ik(e, t, r, n, i) {
  const s = yd(e);
  if (!s) return gn(e, i);
  const o = !Bn(n), a = kd(
    s.liveFragment,
    fo(s.alignment, t, "toLive"),
    o
  ), c = Dt(s.liveFragment, a, {
    addressDisplayBytes: o
  });
  return c ? md(e, r ? rk(s.liveFragment, c) : c) : gn(e, i);
}
function yw(e, t, r, n, i, s) {
  const o = gw(r.sentinelMap, n);
  if (!o) return mw(t, r, n.sentinelIndex, s);
  const a = r.liveFragment.sentinels[o.sentinelIndex]?.[o.memberIndex];
  if (!a?.isAttached()) return Pc(t, s);
  const c = e.byFirstLiveKey.get(a.getKey());
  if (c?.kind === "note" && n.isNoteOwnBytes)
    return Xb(a, i, e.viewOptions);
  if (c?.kind === "note")
    return n.noteAnchor ? ik(
      c,
      n.noteAnchor.anchor,
      n.noteAnchor.atWordByte,
      i,
      s
    ) : gn(c, s);
  let l = a;
  for (const u of n.path) {
    if (!R(l)) return Pc(t, s);
    const d = l.getChildAtIndex(u);
    if (!d) return Pc(t, s);
    l = d;
  }
  return { key: l.getKey(), offset: n.offset, type: n.type };
}
function bw(e, t, r) {
  if (!e.scratch.getEditorState().read(() => {
    const [o, a] = ur(t, r);
    return Mr(o) && a !== void 0 && a >= o.getChildrenSize();
  })) return;
  const i = e.liveNodes[e.liveNodes.length - 1], s = i.getParent();
  if (Mr(s))
    return { key: s.getKey(), offset: i.getIndexWithinParent() + 1, type: "element" };
}
function kw(e, t, r) {
  const { plan: n } = r, { logger: i, viewOptions: s } = e.tier2;
  if (n.kind === "note" && r.scratchIndexes.length === 1 && Gb(r.location))
    return Xb(n.liveNodes[0], r.location, t.viewOptions);
  const o = Or(r.location, r.scratchIndexes);
  if (!n.scratch.getEditorState().read(() => hw(n.settledOnlyRuns, o, s))) return;
  const c = bw(n, o, s);
  if (c) return c;
  const l = yd(n);
  if (!l) return gn(n, i);
  const u = n.scratch.getEditorState().read(
    () => pw(
      l.scratchFragment,
      n.settledOnlyRuns,
      o,
      e.tier2
    )
  );
  if (!u) return gn(n, i);
  if (u.kind === "preserved")
    return yw(t, n, l, u, r.location, i);
  if (u.kind === "literal") {
    const { run: d, anchor: f } = u, p = Xy(d, f.nonWsBefore, "toLiteral") ?? uo(d.inner, f.nonWsBefore, "settled"), h = !Bn(r.location), g = kd(
      l.liveFragment,
      {
        nonWsBefore: d.liveBefore + p,
        wsRun: f.nonWsBefore === 0 ? d.liveWsBefore + f.wsRun : f.wsRun
      },
      h
    ), m = Dt(l.liveFragment, g, {
      addressDisplayBytes: h
    });
    return m ? md(
      n,
      u.atWordByte ? rk(l.liveFragment, m) : m
    ) : gn(n, i);
  }
  return ik(n, u.anchor, u.atWordByte, r.location, i);
}
function Gp(e, t, r) {
  const n = ma(t, r);
  if (!n) return;
  if (n.kind === "live") {
    const [o, a] = ur(n.location, t.viewOptions);
    return o && a !== void 0 ? n.location : void 0;
  }
  const i = kw(e, t, n), s = i && G(i.key);
  return s ? kt(s, i.offset, t.viewOptions) : void 0;
}
function Jp([e, t]) {
  if (!e || t === void 0) return;
  if (S(e)) return _s(e.getKey(), t, "text");
  if (R(e)) return _s(e.getKey(), t, "element");
  const r = e.getParent();
  if (!r) return;
  const n = e.getIndexWithinParent() + (t > 0 ? 1 : 0);
  return _s(r.getKey(), n, "element");
}
function sk(e, t, r) {
  const n = ur(e, r), i = ur(t, r), [s, o] = n, [a, c] = i;
  if (s && a && s.is(a))
    return o !== void 0 && c !== void 0 && o > c;
  const l = Jp(n), u = Jp(i);
  return !!l && !!u && u.isBefore(l);
}
function ok(e, t, r) {
  const n = ma(e, t), i = ma(e, r);
  if (!(n?.kind !== "scope" || i?.kind !== "scope" || n.plan !== i.plan))
    return n.plan.scratch.getEditorState().read(
      () => sk(
        Or(n.location, n.scratchIndexes),
        Or(i.location, i.scratchIndexes),
        e.viewOptions
      )
    );
}
function xw(e, t, r) {
  if (t.byFirstLiveKey.size === 0) return r;
  const n = Gp(e, t, r.start);
  if (!n) return;
  if (!r.end) return { ...r, start: n };
  const i = Gp(e, t, r.end);
  if (!i) return;
  const s = ok(t, r.start, r.end);
  return s !== void 0 && sk(n, i, t.viewOptions) !== s ? { ...r, start: i, end: n } : { ...r, start: n, end: i };
}
function ak(e, t) {
  const r = rr(qr(t.jsonPath));
  return r.length === 0 ? t : Or(t, [
    e.liveToSettledTopIndex(r[0]),
    ...r.slice(1)
  ]);
}
function ck(e, t) {
  const r = t.liveNodes[0].getParent(), n = r ? e.planContaining(r) : void 0;
  return n === t ? void 0 : n;
}
function ya(e, t) {
  const r = t.liveNodes[0], n = ck(e, t);
  if (n) {
    const s = xd(e, n, r, 0);
    return typeof s == "object" ? rr(qr(s.jsonPath)) : void 0;
  }
  const i = Tw(r, e.viewOptions);
  return i.length === 0 ? i : [e.liveToSettledTopIndex(i[0]), ...i.slice(1)];
}
function Tw(e, t) {
  return !tt(e) || !Mr(e.getParent()) ? Pr(e) : [$i(e, 0, Nt(t)).index];
}
function bd(e, t, r) {
  if (!t) return;
  const [n, ...i] = r;
  if (n === void 0) return;
  if (e.kind === "note") return n === 0 ? [...t, ...i] : void 0;
  const s = t[0];
  return s === void 0 ? void 0 : [s + n, ...i];
}
function vw(e, t, r) {
  const n = e.liveCut;
  return !n || t.getKey() !== n.key || r <= n.nodeOffset ? r : Math.max(n.nodeOffset, r - n.length);
}
function Cw(e, t, r, n, i) {
  let s = e.sentinels[t.sentinelIndex]?.[t.memberIndex];
  if (s) {
    for (const o of r) {
      if (!R(s)) return;
      const a = s.getChildAtIndex(o);
      if (!a) return;
      s = a;
    }
    return kt(s, n, i);
  }
}
function Sw(e, t) {
  const r = Qy(e, t);
  if (r)
    return {
      run: r,
      within: { nonWsBefore: 0, wsRun: t.wsRun - r.liveWsBefore }
    };
  const n = Zu(e, t);
  if (n)
    return {
      run: n.run,
      within: n.within ?? {
        nonWsBefore: uo(n.run.inner, n.count, "live"),
        wsRun: t.wsRun
      }
    };
}
function _w(e, t) {
  if (e.isSentinel) return !1;
  if (t) return !0;
  const r = G(e.key);
  return !(w(r) && r.getMarkerSyntax() !== "opening");
}
function kd(e, t, r) {
  let n = 0, i = 0;
  for (const s of e.spans)
    for (let o = s.start; o < s.end; o += 1) {
      const a = dr.test(e.text[o]);
      if (n < t.nonWsBefore)
        a || (n += 1);
      else if (a) i += 1;
      else return i >= t.wsRun || _w(s, r) ? t : { ...t, wsRun: i };
    }
  return t;
}
function lk(e, t, r, n, i, s) {
  const { liveFragment: o, scratchFragment: a, sentinelMap: c, alignment: l } = t, u = ed(o, r);
  if (u) {
    const g = o.sentinels[u.sentinelIndex];
    if (!c[u.sentinelIndex]?.some((_) => _ !== void 0)) {
      const _ = g[0].getParent();
      if (_)
        return lk(
          e,
          t,
          _,
          g[0].getIndexWithinParent(),
          i,
          s
        );
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const m = td(u.member, r);
    if (!m) {
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const x = c[u.sentinelIndex]?.[u.memberIndex];
    if (!x) return;
    const v = e.scratch.getEditorState().read(
      () => Cw(a, x, m, n, i)
    );
    if (v) return v;
    s?.error("settled-position basis out of date — rebuilt");
    return;
  }
  const d = Rs(o, r, vw(e, r, n));
  if (!d) return;
  const f = Sw(e.settledOnlyRuns, d.anchor);
  if (f)
    return e.scratch.getEditorState().read(() => dw(f.run, f.within, i));
  const p = fo(l, d.anchor, "toSettled"), h = !Bn(
    kt(r, n, i)
  );
  return e.scratch.getEditorState().read(() => {
    const g = Qb(a, p), m = g && G(g.key);
    if (m) return kt(m, g.offset, i);
    const x = Zb(a, p), v = x && G(x.key);
    if (v)
      return kt(v, x.offset, i);
    const _ = kd(a, p, h), A = Dt(a, _, { addressDisplayBytes: h });
    return A && Mw(A, i);
  });
}
function Mw(e, t) {
  const r = G(e.key);
  if (!r) return;
  const n = Mr(r) && e.offset >= r.getChildrenSize() && r.getLastDescendant();
  return n ? kt(
    n,
    R(n) ? n.getChildrenSize() : n.getTextContentSize(),
    t
  ) : kt(r, e.offset, t);
}
function xd(e, t, r, n) {
  if (t.kind === "note") {
    const a = kt(r, n, e.viewOptions);
    if (Yb(a, t.liveNodes[0])) {
      const c = ya(e, t);
      return c && Or(a, c);
    }
  }
  const i = yd(t);
  if (!i) return;
  const s = lk(
    t,
    i,
    r,
    n,
    e.viewOptions,
    e.logger
  );
  if (typeof s != "object") return s;
  const o = bd(
    t,
    ya(e, t),
    rr(qr(s.jsonPath))
  );
  return o && Or(s, o);
}
function Ew(e) {
  const t = [], r = (n) => {
    if (R(n))
      n.getChildren().forEach((i, s) => {
        t.push({ node: n, offset: s }), r(i);
      }), t.push({ node: n, offset: n.getChildrenSize() });
    else if (S(n))
      for (let i = 0; i <= n.getTextContentSize(); i += 1)
        t.push({ node: n, offset: i });
  };
  return e.liveNodes.forEach(r), t;
}
function Aw(e, t) {
  const r = t.scratch.getEditorState().read(() => kt(ye(), 0, e.viewOptions)), n = bd(
    t,
    ya(e, t),
    rr(qr(r.jsonPath))
  );
  if (n) return Or(r, n);
  const i = t.liveNodes[0], s = i.getParent();
  if (!s) return;
  const o = ck(e, t);
  return o ? dk(e, o, s, i.getIndexWithinParent()) : ak(
    e,
    kt(s, i.getIndexWithinParent(), e.viewOptions)
  );
}
function uk(e, t, r) {
  const n = Ew(t), i = r ? n.findIndex((s) => s.node.is(r.node) && s.offset === r.offset) : -1;
  for (let s = (i < 0 ? n.length : i) - 1; s >= 0; s -= 1) {
    const { node: o, offset: a } = n[s], c = xd(e, t, o, a);
    if (typeof c == "object") return c;
  }
  return Aw(e, t);
}
function dk(e, t, r, n) {
  return xd(e, t, r, n) ?? uk(e, t, { node: r, offset: n });
}
function Yp(e, t, r) {
  const n = e.planContaining(t);
  if (n) return dk(e, n, t, r);
  const i = Mr(t) && r >= t.getChildrenSize() && t.getLastChild(), s = i ? e.planContaining(i) : void 0;
  return s ? Pw(e, s) ?? uk(e, s, void 0) : ak(e, kt(t, r, e.viewOptions));
}
function Pw(e, t) {
  const r = t.scratch.getEditorState().read(() => {
    const i = ye();
    return kt(i, i.getChildrenSize(), e.viewOptions);
  }), n = bd(
    t,
    ya(e, t),
    rr(qr(r.jsonPath))
  );
  return n && Or(r, n);
}
function ww(e) {
  const t = Eu(e.viewOptions);
  if (!t || e.byFirstLiveKey.size === 0) return t;
  const r = $();
  if (!O(r)) return;
  const n = r.isBackward(), i = n ? r.focus : r.anchor, s = Yp(e, i.getNode(), i.offset);
  if (!s) return;
  if (r.isCollapsed()) return { start: s };
  const o = n ? r.anchor : r.focus, a = Yp(e, o.getNode(), o.offset);
  if (a)
    return ok(e, s, a) === !0 ? { start: a, end: s } : { start: s, end: a };
}
function fk(e, t, r) {
  if (e === "para") {
    const [i] = t;
    return t.length === 1 && tt(i) ? PP(i, r.getMarker, r.viewOptions) : t.every(se) ? sd(t, r.getMarker, r.viewOptions) : wP(t, r.getMarker, r.viewOptions);
  }
  if (e === "chapter") {
    const i = t.find(Se);
    return i && Js(i, r.getMarker, r.viewOptions);
  }
  const n = t.find(D);
  return n && Gs(n, r.getMarker, r.viewOptions)?.out;
}
function Ow(e, t) {
  const r = Ch({
    nodes: [...e],
    onError: (n) => {
      throw n;
    }
  });
  try {
    r.update(
      () => {
        const n = ye();
        t.forEach((i) => n.append(Hi(i)));
      },
      { discrete: !0 }
    );
  } catch {
    return;
  }
  return r;
}
const Xp = "\0";
function pk(e, t = []) {
  for (const r of e)
    t.push(r.getKey()), R(r) && pk(r.getChildren(), t);
  return t;
}
function Nw(e, t, r, n, i) {
  const s = `${n.viewOptions.markerMode}/${n.viewOptions.noteMode}`, o = t.map((l) => l.getTextContent()).join(Xp), a = pk(t).join(" "), c = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, r, o, a, c].join(Xp);
}
function Td(e, t = []) {
  for (const r of e)
    D(r) && t.push(r), R(r) && Td(r.getChildren(), t);
  return t;
}
function Ga(e, t, r, n, i, s, o) {
  const a = Ow(o.nodes, i);
  if (!a) return;
  const { settledCount: c, scratchFragment: l, settledSide: u } = a.getEditorState().read(() => {
    const h = fk(e, ye().getChildren(), o.tier2);
    return {
      settledCount: vt(
        ye(),
        Nt(o.tier2.viewOptions)
      ).length,
      scratchFragment: h,
      settledSide: h && Qu(h)
    };
  }), d = { kind: e, liveNodes: t, liveCut: n, scratch: a, scratchFragment: l, settledCount: c };
  if ((r?.sentinels.length ?? 0) === 0 && (u?.runs.length ?? 0) === 0) {
    const h = r && u && ha(pa(r, []), u).alignment;
    return { ...d, liveFragment: r, sentinelMap: [], settledOnlyRuns: [], alignment: h };
  }
  const f = r && s && fb(r, s.live), p = f && u && ha(pa(f, s.live), u);
  return p ? { ...d, liveFragment: f, ...p } : {
    ...d,
    liveFragment: r,
    sentinelMap: void 0,
    settledOnlyRuns: [],
    alignment: void 0
  };
}
function vd(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const r = Fb(e, t);
  return r ? {
    liveFragment: cd(e, r.start, r.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function Cd(e, t) {
  for (const r of e.noteGlyphRenames.values())
    Bb(r, t);
}
function Rw(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = vd(t, i), a = po(e), c = /* @__PURE__ */ new Map();
  if (ho([e], [a], c), Cd(r, c), !Ha(e, c, n.tier2, r.huskKeys, i))
    return;
  const l = t && go(t, c, r.huskKeys);
  return Ga("note", [e], s, o, [a], l, n);
}
function $w(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = vd(t, i), a = e.map(po), c = /* @__PURE__ */ new Map();
  ho(e, a, c), Cd(r, c), Td(e).filter((d) => r.noteScopes.has(d.getKey())).forEach(
    (d) => Ha(d, c, n.tier2, r.huskKeys, i)
  );
  const l = Kb(e, c, n.tier2, r.huskKeys, i);
  if (!l) return;
  const u = t && go(t, c, r.huskKeys);
  return Ga("para", e, s, o, l, u, n);
}
function qw(e, t, r, n) {
  const { liveFragment: i, liveCut: s } = vd(t, n), o = jb(e, r.tier2, n);
  if (!o) return;
  const a = [e, ...is(e)];
  return Ga("chapter", a, i, s, o, void 0, r);
}
function Iw(e, t, r, n, i, s) {
  const o = po(e), a = /* @__PURE__ */ new Map();
  ho([e], [o], a), Cd(n, a), Td([e]).filter((u) => n.noteScopes.has(u.getKey())).forEach(
    (u) => Ha(u, a, i.tier2, n.huskKeys, s)
  );
  const c = /* @__PURE__ */ new Set();
  for (const u of r) {
    const d = a.get(u.getKey());
    if (!d) continue;
    const f = d.siblings.indexOf(d.node);
    f < 0 || (Wb(d.siblings, f), c.add(u.getKey()));
  }
  if (c.size === 0) return;
  const l = t && go(t, a, c);
  return Ga("para", [e], t, void 0, [o], l, i);
}
function Lw(e, t) {
  for (let r = e; r; r = r.getParent())
    if (t.has(r.getKey())) return !0;
  return !1;
}
function Qp(e, t) {
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
function Dw(e) {
  return e.liveNodes.every((r) => r.isAttached()) ? (e.liveFragment?.spans ?? []).every((r) => G(r.key) !== null) : !1;
}
function Zp(e) {
  return (e.type === "element" ? e.node : e.segments[0]?.node)?.getTopLevelElement() ?? null;
}
function Uw(e, t) {
  const r = vt(ye(), t), n = [], i = [];
  let s = 0;
  for (let o = 0; o < r.length; ) {
    const a = Zp(r[o]), c = a && e.get(a.getKey());
    if (!c) {
      n[o] = s, i.push({ liveIndex: o, indexWithinScope: 0 }), s += 1, o += 1;
      continue;
    }
    const l = new Set(c.liveNodes.map((d) => d.getKey()));
    let u = 0;
    for (; o + u < r.length; ) {
      const d = Zp(r[o + u]);
      if (!d || !l.has(d.getKey())) break;
      u += 1;
    }
    for (let d = 0; d < u; d += 1)
      n[o + d] = s;
    for (let d = 0; d < c.settledCount; d += 1)
      i.push({ liveIndex: o, plan: c, indexWithinScope: d });
    s += c.settledCount, o += u;
  }
  return { liveToSettled: n, settledToLive: i };
}
function eh(e) {
  const t = Ub(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), Qp(e.tier2.viewOptions, e.tier2.logger);
  e.cache.getMarker !== e.tier2.getMarker && (e.cache.entries.clear(), e.cache.getMarker = e.tier2.getMarker);
  const r = Vb(e.pendedKeys, e.tier2, t), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (f, p) => {
    if (!f) return;
    const h = f.liveNodes[0].getKey();
    n.set(h, f), f.liveNodes.forEach((g) => i.set(g.getKey(), f)), p && f.liveNodes.forEach((g) => s.set(g.getKey(), f));
  }, c = (f, p, h, g) => {
    o.add(f);
    const m = fk(p, h, e.tier2), x = Nw(
      p,
      h,
      m?.text ?? "",
      e.tier2,
      t
    ), v = e.cache.entries.get(f);
    if (v?.signature === x && Dw(v.plan)) return v.plan;
    const _ = g(m);
    return _ ? e.cache.entries.set(f, { signature: x, plan: _ }) : e.cache.entries.delete(f), _;
  };
  for (const f of r.noteScopes.values())
    a(
      c(
        f.getKey(),
        "note",
        [f],
        (p) => Rw(f, p, r, e, t)
      ),
      !1
    );
  for (const f of r.paraScopes.values())
    a(
      c(
        f[0].getKey(),
        "para",
        f,
        (p) => $w(f, p, r, e, t)
      ),
      !0
    );
  for (const f of r.chapterScopes.values())
    a(
      c(
        f.getKey(),
        "chapter",
        [f, ...is(f)],
        (p) => qw(f, p, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const f of r.husks) {
    const p = f.getTopLevelElement();
    if (!(se(p) || tt(p)) || Lw(f, i)) continue;
    const h = l.get(p.getKey()) ?? { para: p, husks: [] };
    h.husks.push(f), l.set(p.getKey(), h);
  }
  for (const [f, { para: p, husks: h }] of l)
    a(
      c(
        f,
        "para",
        [p],
        (g) => Iw(p, g, h, r, e, t)
      ),
      !0
    );
  for (const f of [...e.cache.entries.keys()])
    o.has(f) || e.cache.entries.delete(f);
  if (n.size === 0)
    return Qp(e.tier2.viewOptions, e.tier2.logger);
  const { liveToSettled: u, settledToLive: d } = Uw(
    s,
    Nt(e.tier2.viewOptions)
  );
  return {
    byFirstLiveKey: n,
    liveToSettledTopIndex: (f) => u[f] ?? f,
    settledToLiveTopIndex: (f) => d[f],
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
function Fw({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = de(), n = Z({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return j(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, ba(s, e) || Kw(i, r, e);
  }, [r, e, t]), j(
    () => r.registerMutationListener(
      Qt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Al(r);
        th(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Ao(s) === Ao(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), j(() => {
    const i = (a) => a.read(
      () => new Set(
        ye().getChildren().filter(je).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (Al(r) || th(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: Ao(a) === Ao(c)
      }));
    };
    return et(
      ...[Kt, Rr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), j(
    () => r.registerCommand(
      Er,
      () => {
        const i = n.current;
        return i.phase === "idle" && Ww(i, Bw()), !1;
      },
      It
    ),
    [r]
  ), j(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(Er, void 0));
    };
    return et(
      r.registerMutationListener(Ct, i),
      r.registerMutationListener(ct, i)
    );
  }, [r]), j(() => {
    const i = () => Yw(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function Kw(e, t, r) {
  if (zw(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Al(t);
  (!n || n === r.book) && t.update(() => hk(t, r.chapterNum, r.verseNum));
}
function zw(e, t) {
  const r = e.pendingEchoes.findIndex((n) => ba(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function Bw() {
  const e = $(), t = su(e);
  if (!t) return;
  const r = Sd(), n = qg(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = bu(t, e), { verseNum: o, verse: a } = sS(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Al(e) {
  return e.getEditorState().read(() => Sd()?.getCode() || void 0);
}
function Sd() {
  return ye().getChildren().find(ut);
}
function th(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && wc(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || wc(e, t), e.phase = "navigating") : i && wc(e, t), r && r !== e.scrRef.book && yk(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function wc(e, t) {
  queueMicrotask(() => {
    t.update(
      () => hk(t, e.scrRef.chapterNum, e.scrRef.verseNum)
    );
  });
}
function hk(e, t, r) {
  const n = $()?.clone();
  jw(t, r);
  const i = $();
  i && !(n && i.is(n)) && e.dispatchCommand(Bl, void 0);
}
function jw(e, t) {
  const r = su($()), n = ku(r)?.getNumber(), i = qg(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Kg(n) ? mk(t, n) : parseInt(n, 10) === t))
    return;
  const o = ye().getChildren(), a = $g(o, e);
  if (!a) return;
  const c = zv(o, a), l = qv(c, !0);
  Kv(c, l);
  let u;
  try {
    u = eS(c, t);
  } catch {
    return;
  }
  u && (se(u) ? !S(u.getFirstChild()) && ts(u) || lr(u, 0) : Vw(u));
}
function Vw(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ke(n)) {
    lr(t, r);
    return;
  }
  const i = $a(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (S(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = R(n) && !D(n) ? gk(n) : void 0;
  s ? s.select(0, 0) : lr(t, r);
}
function gk(e) {
  const t = e.getFirstChild();
  if (S(t)) return t;
  if (R(t) && !D(t)) return gk(t);
}
function Ao(e) {
  return e.read(() => {
    const t = ye().getChildren().find(je);
    return `${Sd()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function Ww(e, t) {
  e.phase !== "navigating" && t && (Hw(t, e.scrRef) || yk(e, Gw(t, e.scrRef)));
}
function Hw(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? mk(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function mk(e, t) {
  try {
    return ou(e, t);
  } catch {
    return !1;
  }
}
function Gw(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const Jw = 8;
function yk(e, t) {
  return ba(t, e.scrRef) || e.pendingEchoes.some((r) => ba(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > Jw && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function ba(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function Yw(e) {
  e.phase = "idle";
}
function Xw(e) {
  return ut(e) ? `${e.__code}` : Se(e) ? `${e.__marker} "${e.__number}"` : L(e) ? `${e.__marker}` : oo(e) ? `${e.__marker} "${e.__number}"` : tr(e) ? `${e.__caller}` : fi(e) ? `${e.__marker} "${e.__number}"` : D(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : se(e) ? `${e.__marker}` : S(e) ? `"${e.__text}"${Qw(e)}` : pe(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Ee(e) ? `${e.__marker} "${e.__number}"` : "";
}
function Qw(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[jn]) : "";
}
function Zw() {
  const [e] = de();
  return /* @__PURE__ */ M(
    bx,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: Xw,
      editor: e
    }
  );
}
const bk = fh(null), rh = 4;
function eO({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Z(null), s = ph(bk);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return j(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ M("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function tO({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = me(), [s, o] = me(), a = he(
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
  }, l = Le(() => ({ registerItem: a }), [a]);
  return j(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ M(bk.Provider, { value: l, children: /* @__PURE__ */ M("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function rO({
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
  return j(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: h, left: g } = f.getBoundingClientRect();
      p.style.top = `${h + f.offsetHeight + rh}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
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
          const { top: g } = p.getBoundingClientRect(), m = g + p.offsetHeight + rh;
          m !== h.getBoundingClientRect().top && (h.style.top = `${m}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ we(zn, { children: [
    /* @__PURE__ */ we(
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
    l && Un(
      /* @__PURE__ */ M(tO, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const Pl = {
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
}, wl = {
  ...Pl,
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
function nO({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ M(
    rO,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + iO(t),
      buttonLabel: sO(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Pl).map((n) => /* @__PURE__ */ we(
        eO,
        {
          className: "item block-marker " + oO(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ M("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ M("span", { className: "text usfm_" + n, children: Pl[n] })
          ]
        },
        n
      ))
    }
  );
}
function iO(e) {
  return e && e in wl ? e : "ban";
}
function sO(e) {
  return e && e in wl ? wl[e] : "No Style";
}
function oO(e) {
  return e ? "active dropdown-item-active" : "";
}
function nh() {
  return /* @__PURE__ */ M("div", { className: "divider" });
}
const aO = si(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = de(), [o, a] = me(s), [c, l] = me(), [u, d] = me(!1), [f, p] = me(!1), h = he(
    ({
      canUndo: g,
      canRedo: m,
      blockMarker: x,
      contextMarker: v
    }) => {
      d(g), p(m), l(x), n?.({
        canUndo: g,
        canRedo: m,
        blockMarker: x,
        contextMarker: v
      });
    },
    [n]
  );
  return j(() => s.registerCommand(
    Er,
    (g, m) => (a(m), !1),
    Cr
  ), [s]), /* @__PURE__ */ we(zn, { children: [
    /* @__PURE__ */ M(uy, { onStateChange: h }),
    /* @__PURE__ */ we("div", { className: "toolbar", children: [
      /* @__PURE__ */ M(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(_h, void 0);
          },
          title: zo ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(Mh, void 0);
          },
          title: zo ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ M("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ M(nh, {}),
      o === s && /* @__PURE__ */ we(zn, { children: [
        /* @__PURE__ */ M(
          nO,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ M(nh, {})
      ] }),
      /* @__PURE__ */ M("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), cO = Da(), lO = {}, uO = {}, ih = Bx.filter((e) => e !== jl);
function dO() {
  return /* @__PURE__ */ M("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function sh(e) {
  return e.type === "text" && e.offset !== 0 && e.offset !== e.getNode().getTextContentSize();
}
function oh() {
  const e = $();
  if (!O(e) || !e.isCollapsed()) return;
  const t = e.focus.getNode();
  return S(t) ? { key: t.getKey(), offset: e.focus.offset } : void 0;
}
function fO(e) {
  const t = [], r = (n, i) => n?.forEach((s, o) => {
    if (typeof s != "object") return;
    const a = [...i, o];
    s.type === "note" && t.push(lt(a)), r(s.content, a);
  });
  return r(e?.content, []), t;
}
function pO(e, t) {
  return e.editorState === t.editorState && e.pendedKeys === t.pendedKeys && e.transientInput === t.transientInput && e.caretKey === t.caretKey && e.caretOffset === t.caretOffset && e.viewOptions === t.viewOptions && e.getMarker === t.getMarker;
}
function hO({
  listener: e
}) {
  const [t] = de();
  return Xs(
    () => t.registerUpdateListener((r) => e(r, t)),
    [t, e]
  ), null;
}
const kk = si(function({
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
  const d = Z(null), f = Z(null), p = Z(null), h = Z(t), g = Z(!1), m = Z(void 0), x = Z(void 0), v = Z(void 0), _ = Z({ entries: /* @__PURE__ */ new Map() }), A = Z(void 0), E = Z(0), P = Z(!0), T = Z(void 0), [B, V] = me(t), [W, X] = me(0), [ue, Y] = me(), {
    isReadonly: le = !1,
    structureProtectionMode: qe = "off",
    hasExternalUI: Fe = !1,
    hasSpellCheck: te = !1,
    textDirection: z = "ltr",
    markerMenuTrigger: oe = "\\",
    view: We,
    nodes: Qe,
    debug: ge = !1,
    contextMenu: Ir,
    styleInfo: Rt,
    markerSettleDelayMs: ss
  } = a ?? uO, hr = We ?? cO, gi = Ws(hr) && (hr.markerMode !== "hidden" || !hr.hasSpacing || hr.hasGutterParaMarkers || hr.hasActiveTextFocusBox) ? {
    ...hr,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : hr, os = Z(gi);
  Tr(os.current, gi) || (os.current = gi);
  const ne = os.current, yt = Le(() => Qe ?? lO, [Qe]), mo = Le(() => Ir, [Ir]), Ce = Le(
    () => VC(Rt ?? ea),
    [Rt]
  ), Lr = Z(c);
  Tr(Lr.current, c) || (Lr.current = c);
  const ee = Lr.current, $t = Ws(ne), xe = le || $t, rn = gi !== hr;
  j(() => {
    $t && !le && ee?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), rn && ee?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    );
  }, [$t, le, rn, ee]);
  const nn = Z(null), gr = Le(() => {
    if (ne.markerMode !== "editable") return;
    const N = Rt ?? ea;
    return {
      getContext: () => nn.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (U) => sP(
        N,
        U,
        yt.extraValidMarkers
      ),
      getEnterItems: (U) => oP(
        N,
        U,
        yt.extraValidMarkers
      ),
      apply: (U, K) => {
        const Q = nn.current;
        Q && (K.trigger === "enter" ? Q.splitParagraphWithMarker(U.marker) : Q.applyMarkerMenuSelection(U, K));
      },
      commitTypedCloser: (U) => {
        nn.current?.commitTypedCloser(U);
      }
    };
  }, [ne, Rt, yt.extraValidMarkers]), as = (N) => {
    if ($t)
      throw new Error(
        `Cannot ${N} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Dr = (N) => {
    if (as(N), xe) throw new Error(`Cannot ${N} in readonly mode`);
  }, Pn = Le(
    () => [Ze, ...$t ? E_ : $u],
    [$t]
  ), yo = Le(
    () => ({
      namespace: "platformEditor",
      theme: { ...Fy, showCharMarkerTitles: ne.showCharMarkerTitles },
      editable: !xe,
      editorState: void 0,
      // Handling of errors during update
      onError(N) {
        throw N;
      },
      nodes: Pn
    }),
    [xe, Pn, ne.showCharMarkerTitles]
  );
  ys.initialize(ee);
  function St(N) {
    if (N !== void 0 && !EA(N, yt.extraValidMarkers))
      throw new Error(`Unsupported character marker '${N}'`);
  }
  const _t = he(() => {
    const N = d.current;
    if (!N) return h.current;
    const U = () => {
      if (!g.current) return;
      const zt = ys.deserializeEditorState(N.getEditorState(), ne);
      zt && (h.current = zt, g.current = !1);
    }, K = af(N), Q = x.current;
    if ((!K || K.size === 0) && !Q)
      return U(), h.current;
    const Me = N.getEditorState(), fe = v.current, Te = {
      editorState: Me,
      pendedKeys: K ? [...K].sort().join(",") : "",
      transientInput: Q,
      caretKey: fe?.key,
      caretOffset: fe?.offset,
      viewOptions: ne,
      getMarker: Ce
    }, Je = A.current;
    if (Je && pO(Je.key, Te)) return Je.usj;
    const yr = Me.toJSON(), Mt = Me.read(
      () => tw(
        yr,
        K ?? /* @__PURE__ */ new Set(),
        { viewOptions: ne, getMarker: Ce, logger: ee },
        Q,
        fe
      )
    );
    return Mt ? (A.current = { key: Te, usj: Mt }, Mt) : (U(), h.current);
  }, [ne, Ce, ee]), ft = he(() => {
    const N = d.current;
    if (!N) return;
    const U = {
      pendedKeys: af(N) ?? /* @__PURE__ */ new Set(),
      transientInput: x.current,
      lastKnownCaret: v.current,
      tier2: { viewOptions: ne, getMarker: Ce, logger: ee },
      nodes: Pn,
      cache: _.current
    };
    return xs(U) && U.cache.entries.clear(), U;
  }, [ne, Ce, ee, Pn]), sn = he(
    (N) => {
      const U = d.current, K = ft();
      if (!(!U || !K))
        return xs(K) ? N : U.getEditorState().read(() => {
          const Q = eh(K);
          return xw(K, Q, N);
        });
    },
    [ft]
  );
  j(() => (P.current = !0, () => {
    P.current = !1;
  }), []);
  const on = he(
    (N, U) => N.read(() => {
      const K = ft(), Q = K && ww(eh(K));
      return !Q && O($()) && ee?.warn(
        `${U} refused: the selection could not be expressed against the document the host is reading`
      ), Q;
    }),
    [ft, ee]
  ), mi = he(
    (N) => {
      if (!i) return;
      const U = d.current, K = ft();
      E.current += 1;
      const Q = E.current;
      if (!U || !K || xs(K)) {
        i(N);
        return;
      }
      queueMicrotask(() => {
        if (!P.current || Q !== E.current || d.current !== U) return;
        const Me = on(U, "onSelectionChange");
        Q === E.current && i(Me);
      });
    },
    [i, ft, on]
  ), yi = {
    focus() {
      d.current?.focus();
    },
    isFocused() {
      const N = d.current?.getRootElement();
      return !!N && N.ownerDocument.activeElement === N;
    },
    undo() {
      d.current?.dispatchCommand(_h, void 0);
    },
    redo() {
      d.current?.dispatchCommand(Mh, void 0);
    },
    cut() {
      Dr("cut"), d.current?.dispatchCommand(Wn, null);
    },
    copy() {
      d.current?.dispatchCommand(Ca, null);
    },
    paste() {
      Dr("paste"), d.current && Du(d.current);
    },
    pastePlainText() {
      Dr("paste as plain text"), d.current && Uu(d.current);
    },
    getUsj() {
      return _t();
    },
    commitPendingMarkerEdits() {
      d.current?.update(
        () => {
          d.current?.dispatchCommand($b, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(N) {
      if (!N) {
        x.current = void 0;
        return;
      }
      const U = d.current?.getEditorState().read(() => {
        const K = $();
        return O(K) && K.isCollapsed() ? K.focus.key : void 0;
      });
      x.current = { input: N, nodeKey: U ?? v.current?.key };
    },
    setUsj(N) {
      if (!Tr(h.current, N)) {
        h.current = N, x.current = void 0;
        const U = Tr(B, N);
        V(N), U && X((K) => K + 1);
      }
    },
    applyUpdate(N, U = "remote") {
      if ($t && U === "remote") {
        Lr.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      as("apply an update");
      const K = d.current;
      K?._updating && Lr.current?.error(
        "Editor: applyUpdate was called inside an update of this editor; its change will be announced as a local edit without the given ops. Call it outside editor updates, commands, and update listeners."
      ), K && of(K, U);
      try {
        K?.update(
          () => {
            U === "remote" && Hn(jl), Z_(N, ne, yt, ee);
          },
          { discrete: !0 }
        );
      } finally {
        K && of(K, void 0);
      }
      const Q = d.current?.getEditorState();
      if (!Q) return;
      const Me = ys.deserializeEditorState(Q, ne);
      if (Me) {
        const fe = !Tr(h.current, Me);
        fe && (h.current = Me);
        const Te = _t();
        if (Te && (fe || !Tr(B, Me))) {
          const Je = kf(N, Q, "apply");
          T.current = Te, s?.(Te, N, U, Je);
        }
      }
    },
    replaceEmbedUpdate(N, U) {
      const K = d.current?.read(() => yS(N, U));
      K ? this.applyUpdate(K) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${N}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      const N = d.current;
      if (!N) return;
      N.read(() => {
      });
      const U = ft();
      return !U || xs(U) ? N.read(() => Eu(ne)) : on(N, "getSelection");
    },
    setSelection(N) {
      const U = sn(N);
      if (!U) {
        ee?.warn(
          "setSelection refused: the position could not be resolved against the document currently being edited"
        );
        return;
      }
      d.current?.update(() => {
        const K = Mu(U, ne);
        K !== void 0 && (mn(K), (!Yt().isEditable() || sh(K.anchor) && sh(K.focus)) && d.current?.dispatchCommand(Er, void 0));
      });
    },
    setAnnotation(N, U, K, Q, Me) {
      let fe, Te, Je, yr;
      typeof Q == "function" || Q === void 0 ? (fe = Q, Te = Me) : (fe = Q.onClick, Te = Q.onRemove, Je = Q.onMouseEnter, yr = Q.onMouseLeave);
      const Mt = sn(N);
      if (!Mt) {
        ee?.warn(
          `setAnnotation refused for ${U} "${K}": the range could not be resolved against the document currently being edited`
        );
        return;
      }
      f.current?.setAnnotation(
        Mt,
        Wd(U),
        K,
        fe,
        Te,
        Je,
        yr
      );
    },
    removeAnnotation(N, U) {
      f.current?.removeAnnotation(Wd(N), U);
    },
    formatPara(N) {
      Dr("format a paragraph"), d.current?.update(() => {
        const U = $();
        if (!O(U)) {
          c?.warn(
            `formatPara refused: no range selection to retag with "${N}" (restore the caret before applying, as the marker palettes do)`
          );
          return;
        }
        Tx(U, () => Fs(N));
        const K = $();
        if (!O(K)) return;
        const Q = /* @__PURE__ */ new Set();
        K.getNodes().forEach((Me) => {
          const fe = Me.getTopLevelElement();
          se(fe) && Q.add(fe);
        }), Q.forEach((Me) => kb(Me, N, ne));
      });
    },
    getElementByKey(N) {
      return d.current?.read(
        () => d.current?.getElementByKey(N) ?? void 0
      );
    },
    removeCharacterMarker(N) {
      if (xe) throw new Error("Cannot remove character marker in readonly mode");
      St(N);
      let U = !1;
      return d.current?.update(
        () => {
          const K = $();
          O(K) && (U = $y(K, N, ne));
        },
        { discrete: !0 }
      ), U;
    },
    replaceCharacterMarker(N, U) {
      if (xe) throw new Error("Cannot replace character marker in readonly mode");
      St(N), St(U);
      let K = !1;
      return d.current?.update(
        () => {
          const Q = $();
          O(Q) && (K = UA(Q, N, U));
        },
        { discrete: !0 }
      ), K;
    },
    extendCharacterMarker(N, U) {
      if (xe) throw new Error("Cannot extend character marker in readonly mode");
      St(N), U?.forEach(
        (Q) => St(Q)
      );
      let K = !1;
      return d.current?.update(
        () => {
          const Q = $();
          O(Q) && (K = FA(
            Q,
            N,
            U,
            ne
          ));
        },
        { discrete: !0 }
      ), K;
    },
    insertMarker(N) {
      if (xe) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!d.current) return;
      if (!pl(N, yt.extraValidMarkers))
        throw new Error(`Unsupported marker '${N}'`);
      const U = hl(
        N,
        m,
        ne,
        yt,
        ee,
        void 0,
        Rt
      );
      return U.action({ editor: d.current, reference: r }), U.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!le)
        return d.current?.getEditorState().read(() => c0());
    },
    applyMarkerMenuSelection(N, U) {
      if (le) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if (N.kind !== "closeTag" && !pl(N.marker, yt.extraValidMarkers))
        throw new Error(`Unsupported marker '${N.marker}'`);
      let K;
      return d.current.update(() => {
        K = p0(N, U, r, {
          expandedNoteKeyRef: m,
          viewOptions: ne,
          nodeOptions: yt,
          logger: c,
          styleInfo: Rt
        });
      }), K;
    },
    splitParagraphWithMarker(N) {
      if (le) throw new Error("Cannot split paragraph in readonly mode");
      d.current && d.current.update(() => {
        _b(N, ne);
      });
    },
    commitTypedMarker(N, U) {
      if (le) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let K = !1;
      return d.current.update(() => {
        K = f0(N, U), K || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), K;
    },
    commitTypedCloser(N) {
      if (le) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let U = !1;
      return d.current.update(() => {
        U = Sb(N), U || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), U;
    },
    insertNote(N, U, K) {
      Dr("insert a note");
      const Q = K && sn(K);
      if (K && !Q) {
        ee?.warn(
          `insertNote refused for \\${N}: the position could not be resolved against the document currently being edited`
        );
        return;
      }
      d.current?.update(() => {
        const Me = Km(
          N,
          U,
          Q,
          r,
          ne,
          yt,
          ee
        );
        Me && !Me.getIsCollapsed() && (m.current = Me.getKey());
      });
    },
    selectNote(N) {
      const U = d.current;
      if (!U) return;
      const K = ft();
      if (typeof N == "string" || !K || xs(K)) {
        U.update(() => {
          const fe = Nf(N);
          fe && (Rf(fe, ne), fe.getIsCollapsed() || (m.current = fe.getKey()));
        });
        return;
      }
      const Q = fO(_t())[N], Me = Q ? sn({ start: { jsonPath: Q } }) : void 0;
      Me && U.update(() => {
        const [fe, Te] = ur(Me.start, ne);
        if (!fe || Te === void 0) return;
        const Je = D(fe) ? fe : it(fe, D);
        D(Je) ? (Rf(Je, ne), Je.getIsCollapsed() || (m.current = Je.getKey())) : S(fe) && fe.select(Te, Te);
      });
    },
    getNoteOps(N) {
      return d.current?.read(() => {
        const U = Nf(N);
        if (U)
          return Tu(U);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  nn.current = yi, Nl(u, () => yi), j(() => {
    const N = d.current;
    if (N)
      return N.registerUpdateListener(({ editorState: U }) => {
        const K = U.read(oh);
        K && (v.current = K);
      });
  }, []);
  const mr = Z({ onUsjChange: s, viewOptions: ne, isBlockVerse: $t, readSettledUsj: _t });
  mr.current = { onUsjChange: s, viewOptions: ne, isBlockVerse: $t, readSettledUsj: _t };
  const bi = he((N, U) => {
    const { editorState: K, dirtyElements: Q, dirtyLeaves: Me, tags: fe } = N;
    if (Q.size === 0 && Me.size === 0) return;
    if (fe.has(Sa)) {
      const br = mr.current, On = !br.isBlockVerse && ys.deserializeEditorState(K, br.viewOptions);
      On && (h.current = On), T.current = h.current;
      return;
    }
    if (du(U)) return;
    if (ih.some((br) => fe.has(br))) {
      g.current = !0;
      return;
    }
    const Te = mr.current;
    if (Te.isBlockVerse) return;
    um(U, K, fe);
    const Je = K.read(oh);
    Je && (v.current = Je);
    const yr = X_(N, {
      ignoreTags: ih
    }), Mt = yr ? [] : new Ri(K.read(() => Q_(U, N))).chop().ops;
    if (!yr) {
      const br = ys.deserializeEditorState(K, Te.viewOptions);
      br && (h.current = br);
    }
    if (!Te.onUsjChange) return;
    const zt = Te.readSettledUsj();
    zt && (Mt.length === 0 && Tr(T.current, zt) || (T.current = zt, Mt.length === 0 ? Te.onUsjChange(zt, void 0, "local", void 0) : Te.onUsjChange(zt, Mt, "local", kf(Mt, K))));
  }, []), wn = he(
    (N) => {
      Y(N.contextMarker), o?.(N);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ we(Eh, { initialConfig: yo, children: [
      /* @__PURE__ */ M(QM, { isEditable: !xe }),
      /* @__PURE__ */ we("div", { className: "editor-container", children: [
        Fe ? /* @__PURE__ */ M(uy, { onStateChange: wn }) : /* @__PURE__ */ M(
          "div",
          {
            className: "editor-toolbar-container" + (xe ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ M(
              aO,
              {
                ref: p,
                editorRef: nn,
                isReadonly: xe,
                onStateChange: wn
              }
            )
          }
        ),
        /* @__PURE__ */ we("div", { className: "editor-inner", children: [
          /* @__PURE__ */ M(Ph, { editorRef: d }),
          /* @__PURE__ */ M(
            xx,
            {
              contentEditable: /* @__PURE__ */ M(
                Ah,
                {
                  className: `editor-input usfm ${ZS(ne).join(" ")}${ne.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ne.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: te
                }
              ),
              placeholder: /* @__PURE__ */ M(dO, {}),
              ErrorBoundary: wh
            }
          ),
          Fe && /* @__PURE__ */ M(XM, {}),
          /* @__PURE__ */ M(Oh, {}),
          r && n && /* @__PURE__ */ M(Fw, { scrRef: r, onScrRefChange: n }),
          r && !Fe && /* @__PURE__ */ M(
            C1,
            {
              trigger: oe,
              scrRef: r,
              contextMarker: ue,
              getMarkerAction: (N) => hl(
                N,
                m,
                ne,
                yt,
                ee,
                void 0,
                Rt
              ),
              editableHarness: gr
            }
          ),
          /* @__PURE__ */ M(
            tE,
            {
              scripture: B,
              scriptureRef: h,
              nodeOptions: yt,
              editorAdaptor: Sn,
              viewOptions: ne,
              logger: ee
            },
            W
          ),
          /* @__PURE__ */ M(TE, { onChange: mi, viewOptions: ne }),
          /* @__PURE__ */ M(hO, { listener: bi }),
          /* @__PURE__ */ M(VA, { viewOptions: ne }),
          /* @__PURE__ */ M(Y_, { ref: f, logger: ee, viewOptions: ne }),
          /* @__PURE__ */ M(_M, { viewOptions: ne }),
          /* @__PURE__ */ M(UM, {}),
          /* @__PURE__ */ M(VM, {}),
          ne?.markerMode !== "editable" && /* @__PURE__ */ M(WM, { logger: ee }),
          /* @__PURE__ */ M(YM, { options: mo }),
          /* @__PURE__ */ M(eE, {}),
          /* @__PURE__ */ M(h0, {}),
          /* @__PURE__ */ M(
            B0,
            {
              viewOptions: ne,
              getMarker: Ce,
              logger: ee,
              markerSettleDelayMs: ss
            }
          ),
          /* @__PURE__ */ M(
            J0,
            {
              styleInfo: Rt,
              viewOptions: ne,
              logger: ee
            }
          ),
          /* @__PURE__ */ M(
            rE,
            {
              expandedNoteKeyRef: m,
              nodeOptions: yt,
              viewOptions: ne,
              logger: ee
            }
          ),
          /* @__PURE__ */ M(xE, {}),
          /* @__PURE__ */ M(xM, {}),
          /* @__PURE__ */ M(mM, {}),
          /* @__PURE__ */ M(rw, { viewOptions: ne, logger: ee }),
          /* @__PURE__ */ M(vE, {}),
          /* @__PURE__ */ M(l1, { structureProtectionMode: qe }),
          /* @__PURE__ */ M(u1, { textDirection: z }),
          /* @__PURE__ */ M(f1, {}),
          /* @__PURE__ */ M(T1, {}),
          l
        ] }),
        ge && /* @__PURE__ */ M(Zw, {})
      ] })
    ] }, ne.verseLayout ?? "inline")
  );
}), vN = si(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ M(kk, { ref: r, ...i });
});
function gO(e, t) {
  const r = S(e) ? ST(e, Lt, t) ?? [] : [], n = rC(e, Lt, t);
  return [.../* @__PURE__ */ new Set([...r, ...n])];
}
function mO(e, t, r) {
  for (const n of t) {
    const i = G(n);
    pe(i) && (i.deleteID(Lt, e), i.hasNoIDsForEveryType() && Ho(i));
  }
  for (const n of r) {
    const i = G(n);
    i && Xg(i, Lt, e);
  }
}
function xk() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function ka(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? xk() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function Tk(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? xk() : r,
    quote: e,
    type: "thread"
  };
}
function ah(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function yO(e) {
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
class bO {
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
          const c = ah(a);
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
          const c = ah(a);
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
      markedComment: yO(t)
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
    return t !== null ? t.doc.get("comments", Ld) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Dd(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Ld();
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
      Ix,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      It
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Lx) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const h = p.insert, g = p.retain, m = p.delete, x = u.parent, v = u === r ? void 0 : x instanceof Dd && this._comments.find((_) => _.id === x.get("id"));
              if (Array.isArray(h)) {
                const _ = f;
                h.slice().reverse().forEach((A) => {
                  const E = A.get("id"), T = A.get("type") === "thread" ? Tk(
                    A.get("quote"),
                    A.get("comments").toArray().map(
                      (B) => ka(
                        B.get("content"),
                        B.get("author"),
                        B.get("id"),
                        B.get("timeStamp"),
                        B.get("deleted")
                      )
                    ),
                    E
                  ) : ka(
                    A.get("content"),
                    A.get("author"),
                    E,
                    A.get("timeStamp"),
                    A.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(T, v, _);
                  });
                });
              } else if (typeof g == "number")
                f += g;
              else if (typeof m == "number")
                for (let _ = 0; _ < m; _++) {
                  const A = v === void 0 || v === !1 ? this._comments[f] : v.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(A, v);
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
function kO(e) {
  const [t, r] = me(e.getComments());
  return j(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function xO({
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
      const u = l.target;
      i.current !== null && !i.current.contains(u) && n && e();
    }, c = i.current;
    return c !== null && (s = c.parentElement, s !== null && s.addEventListener("click", a)), window.addEventListener("keydown", o), () => {
      window.removeEventListener("keydown", o), s !== null && s?.removeEventListener("click", a);
    };
  }, [n, e]), /* @__PURE__ */ M("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ we("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function TO({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return Un(
    /* @__PURE__ */ M(xO, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function vk() {
  const [e, t] = me(null), r = he(() => {
    t(null);
  }, []), n = Le(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ M(TO, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = he(
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
const vO = {
  ...Fy,
  paragraph: "CommentEditorTheme__paragraph"
};
function CO(...e) {
  return e.filter(Boolean).join(" ");
}
function _n({
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
      className: CO(
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
function SO({
  className: e
}) {
  return /* @__PURE__ */ M(Ah, { className: e || "ContentEditable__root" });
}
function _O({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ M("div", { className: t || "Placeholder__root", children: e });
}
const ch = $l("INSERT_INLINE_COMMAND");
function MO({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Z(null), s = he(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return j(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Xs(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ M("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ M("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ M("i", { className: "icon add-comment" }) }) });
}
function EO({ onEscape: e }) {
  const [t] = de();
  return j(() => t.registerCommand(
    Sh,
    (r) => e(r),
    qi
  ), [t, e]), null;
}
function Ck({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ M(Eh, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: vO
  }, children: /* @__PURE__ */ we("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ M(
      Rx,
      {
        contentEditable: /* @__PURE__ */ M(SO, { className: e }),
        placeholder: /* @__PURE__ */ M(_O, { children: s }),
        ErrorBoundary: wh
      }
    ),
    /* @__PURE__ */ M(Nx, { onChange: n }),
    /* @__PURE__ */ M(Oh, {}),
    t !== !1 && /* @__PURE__ */ M(Px, {}),
    /* @__PURE__ */ M(EO, { onEscape: r }),
    /* @__PURE__ */ M(wx, {}),
    i !== void 0 && /* @__PURE__ */ M(Ph, { editorRef: i })
  ] }) });
}
function Sk(e, t) {
  return he(
    (r, n) => {
      r.read(() => {
        e($x()), t(!qx(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function AO({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = me(""), [s, o] = me(!1), a = Z(null), c = Le(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Z(null), u = Mk(), d = he(() => {
    e.getEditorState().read(() => {
      const g = $();
      if (O(g)) {
        l.current = g.clone();
        const m = g.anchor, x = g.focus, v = vx(
          e,
          m.getNode(),
          m.offset,
          x.getNode(),
          x.offset
        ), _ = a.current;
        if (v !== null && _ !== null) {
          const { left: A, bottom: E, width: P } = v.getBoundingClientRect(), T = Cx(e, v);
          let B = T.length === 1 ? A + P / 2 - 125 : A - 125;
          B < 10 && (B = 10), _.style.left = `${B}px`, _.style.top = `${E + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const V = T.length, { container: W } = c, X = c.elements, ue = X.length;
          for (let Y = 0; Y < V; Y++) {
            const le = T[Y];
            let qe = X[Y];
            qe === void 0 && (qe = document.createElement("span"), X[Y] = qe, W.appendChild(qe));
            const te = `position:absolute;top:${le.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${le.left}px;height:${le.height}px;width:${le.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            qe.style.cssText = te;
          }
          for (let Y = ue - 1; Y >= V; Y--) {
            const le = X[Y];
            W.removeChild(le), X.pop();
          }
        }
      }
    });
  }, [e, c]);
  Xs(() => {
    d();
    const g = c.container, m = document.body;
    return m !== null ? (m.appendChild(g), () => {
      m.removeChild(g);
    }) : () => {
    };
  }, [c.container, d]), j(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (g) => (g.preventDefault(), t(), !0), p = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const m = l.current;
        return m ? m.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), r(
        Tk(g, [ka(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = Sk(i, o);
  return /* @__PURE__ */ we("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ M(
      Ck,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: h
      }
    ),
    /* @__PURE__ */ we("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ M(_n, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ M(
        _n,
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
function PO({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = me(""), [s, o] = me(!1), a = Z(null), c = Mk(), l = Sk(i, o);
  return /* @__PURE__ */ we(zn, { children: [
    /* @__PURE__ */ M(
      Ck,
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
      _n,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(ka(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(px, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ M("i", { className: "send" })
      }
    )
  ] });
}
function _k({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ we(zn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ we("div", { className: "Modal__content", children: [
      /* @__PURE__ */ M(
        _n,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ M(
        _n,
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
function lh({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = me(0);
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = vk();
  return /* @__PURE__ */ we("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ we("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ M("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ we("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ M("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ we(zn, { children: [
      /* @__PURE__ */ M(
        _n,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ M(
              _k,
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
function wO({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  displayIndex: n,
  listRef: i,
  submitAddComment: s,
  markNodeMap: o
}) {
  const [a] = de(), [c, l] = me(0), [u, d] = vk(), f = Le(
    () => new Intl.RelativeTimeFormat("en", {
      localeMatcher: "best fit",
      numeric: "auto",
      style: "short"
    }),
    []
  );
  return j(() => {
    const p = setTimeout(() => {
      l(c + 1);
    }, 1e4);
    return () => {
      clearTimeout(p);
    };
  }, [c]), /* @__PURE__ */ M("ul", { className: "CommentPlugin_CommentsPanel_List", ref: i, children: t.map((p) => {
    const h = p.id;
    return p.type === "thread" ? /* @__PURE__ */ we(
      "li",
      {
        onClick: () => {
          const m = o.get(h);
          if (m !== void 0 && (e === null || e.indexOf(h) === -1)) {
            const x = document.activeElement;
            a.update(
              () => {
                const v = Array.from(m)[0], _ = G(v);
                pe(_) && _.selectStart();
              },
              {
                onUpdate() {
                  x !== null && x.focus();
                }
              }
            );
          }
        },
        className: `CommentPlugin_CommentsPanel_List_Thread ${o.has(h) || n.keysFor(Lt, h).size > 0 ? "interactive" : ""} ${e.indexOf(h) === -1 ? "" : "active"}`,
        children: [
          /* @__PURE__ */ we("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ we("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ M("span", { children: p.quote })
            ] }),
            /* @__PURE__ */ M(
              _n,
              {
                onClick: () => {
                  d("Delete Thread", (m) => /* @__PURE__ */ M(
                    _k,
                    {
                      commentOrThread: p,
                      deleteCommentOrThread: r,
                      onClose: m
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ M("i", { className: "delete" })
              }
            ),
            u
          ] }),
          /* @__PURE__ */ M("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: p.comments.map((m) => /* @__PURE__ */ M(
            lh,
            {
              comment: m,
              deleteComment: r,
              thread: p,
              rtf: f
            },
            m.id
          )) }),
          /* @__PURE__ */ M("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ M(
            PO,
            {
              submitAddComment: s,
              thread: p,
              placeholder: "Reply to comment..."
            }
          ) })
        ]
      },
      h
    ) : /* @__PURE__ */ M(
      lh,
      {
        comment: p,
        deleteComment: r,
        rtf: f
      },
      h
    );
  }) });
}
function OO({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i,
  displayIndex: s
}) {
  const o = Z(null), a = r.length === 0;
  return /* @__PURE__ */ we("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ M("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    a ? /* @__PURE__ */ M("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ M(
      wO,
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
function Mk() {
  const e = Nh(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function NO({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = Nh(), [a] = de(), c = Le(() => {
    const V = new bO(a, s);
    return r && V.registerOnChange(r), t?.(V), V;
  }, [a, s, r, t]), l = kO(c), u = Le(() => /* @__PURE__ */ new Map(), []), d = Jm(a), [f, p] = me(), [h, g] = me([]), [m, x] = me(!1), [v, _] = me(!1), { yjsDocMap: A } = o;
  j(() => {
    if (e) {
      const V = e("comments", A);
      return c.registerCollaboration(V);
    }
    return () => {
    };
  }, [c, e, A]);
  const E = he(() => {
    a.update(() => {
      const V = $();
      V !== null && (V.dirty = !0);
    }), x(!1);
  }, [a]), P = he(
    (V, W) => {
      if (V.type === "comment") {
        const X = c.deleteCommentOrThread(V, W);
        if (!X)
          return;
        const { markedComment: ue, index: Y } = X;
        c.addComment(ue, W, Y);
      } else {
        c.deleteCommentOrThread(V);
        const X = W !== void 0 ? W.id : V.id, ue = u.get(X), Y = d.keysFor(Lt, X);
        (ue !== void 0 && ue.size > 0 || Y.size > 0) && setTimeout(() => {
          a.update(() => {
            mO(X, ue ?? [], Y);
          });
        });
      }
    },
    [c, d, a, u]
  ), T = he(
    (V, W, X, ue) => {
      c.addComment(V, X), W && (a.update(() => {
        O(ue) && lu(ue, Lt, V.id);
      }), x(!1));
    },
    [c, a]
  );
  j(() => {
    const V = [];
    let W;
    for (const X of h) {
      const ue = u.get(X) ?? [];
      for (const Y of [...ue, ...d.keysFor(Lt, X)]) {
        const le = a.getElementByKey(Y);
        le !== null && (le.classList.add("selected"), V.push(le), W = window.setTimeout(() => {
          _(!0);
        }, 0));
      }
    }
    return () => {
      W !== void 0 && window.clearTimeout(W);
      for (const X of V)
        X.classList.remove("selected");
    };
  }, [h, d, a, u]), j(() => {
    if (!a.hasNodes([Ze]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const V = /* @__PURE__ */ new Map();
    return et(
      Kl(
        a,
        Ze,
        (W) => Jn(W.getTypedIDs()),
        (W, X) => {
          for (const [ue, Y] of Object.entries(W.getTypedIDs()))
            Y.forEach((le) => {
              X.addID(ue, le);
            });
        }
      ),
      a.registerMutationListener(
        Ze,
        (W) => {
          a.getEditorState().read(() => {
            for (const [X, ue] of W) {
              const Y = G(X);
              let le = [];
              ue === "destroyed" ? le = V.get(X) ?? [] : pe(Y) && (le = Y.getTypedIDs()[Lt] ?? []);
              for (const qe of le) {
                let Fe = u.get(qe);
                V.set(X, le), ue === "destroyed" ? Fe !== void 0 && (Fe.delete(X), Fe.size === 0 && u.delete(qe)) : (Fe === void 0 && (Fe = /* @__PURE__ */ new Set(), u.set(qe, Fe)), Fe.has(X) || Fe.add(X));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: W, tags: X }) => {
        W.read(() => {
          const ue = $();
          let Y = !1, le = !1;
          if (O(ue)) {
            const qe = ue.anchor.getNode();
            if (S(qe)) {
              const Fe = gO(qe, ue.anchor.offset);
              g(Fe), Y = !0, ue.isCollapsed() || (p(qe.getKey()), le = !0);
            }
          }
          Y || g((qe) => qe.length === 0 ? qe : []), le || p(null), !X.has("collaboration") && O(ue) && x(!1);
        });
      }),
      a.registerCommand(
        ch,
        () => {
          const W = window.getSelection();
          return W !== null && W.removeAllRanges(), x(!0), !0;
        },
        Vn
      )
    );
  }, [a, u]);
  const B = () => {
    a.dispatchCommand(ch, void 0);
  };
  return /* @__PURE__ */ we(zn, { children: [
    m && Un(
      /* @__PURE__ */ M(
        AO,
        {
          editor: a,
          cancelAddComment: E,
          submitAddComment: T
        }
      ),
      document.body
    ),
    f != null && !m && Un(
      /* @__PURE__ */ M(
        MO,
        {
          anchorKey: f,
          editor: a,
          showComments: v,
          onAddComment: B
        }
      ),
      document.body
    ),
    n !== null && Un(
      /* @__PURE__ */ M(
        _n,
        {
          className: `CommentPlugin_ShowCommentsButton ${v ? "active" : ""}`,
          onClick: () => _(!v),
          title: v ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ M("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    v && Un(
      /* @__PURE__ */ M(
        OO,
        {
          comments: l,
          submitAddComment: T,
          deleteCommentOrThread: P,
          activeIDs: h,
          markNodeMap: u,
          displayIndex: d
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function RO() {
  const e = Z(void 0), t = he((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function $O(e, t) {
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
function qO(e, t) {
  j(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      $O(r, t);
    };
  }, [t, e]);
}
const CN = si(function(t, r) {
  const n = Z(null), i = Z(!0), s = Z(null), [o, a] = me(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: h, view: g } = {} } = t, m = (h ?? !1) || Ws(g), [x, v] = RO();
  qO(f, x), j(() => {
    if (process.env.NODE_ENV !== "production") {
      const E = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(E), p || console.warn(E);
    }
  }, [p]), Nl(r, () => ({
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
    applyUpdate(E, P) {
      n.current?.applyUpdate(E, P);
    },
    replaceEmbedUpdate(E, P) {
      return n.current?.replaceEmbedUpdate(E, P);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(E) {
      n.current?.setSelection(E);
    },
    setAnnotation(E, P, T, B, V) {
      typeof B == "function" || B === void 0 ? n.current?.setAnnotation(E, P, T, B, V) : n.current?.setAnnotation(E, P, T, B);
    },
    removeAnnotation(E, P) {
      n.current?.removeAnnotation(E, P);
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
    replaceCharacterMarker(E, P) {
      return n.current?.replaceCharacterMarker(E, P) ?? !1;
    },
    extendCharacterMarker(E, P) {
      return n.current?.extendCharacterMarker(E, P) ?? !1;
    },
    insertMarker(E) {
      return n.current?.insertMarker(E);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(E, P) {
      return n.current?.applyMarkerMenuSelection(E, P);
    },
    splitParagraphWithMarker(E) {
      n.current?.splitParagraphWithMarker(E);
    },
    commitTypedMarker(E, P) {
      return n.current?.commitTypedMarker(E, P) ?? !1;
    },
    commitTypedCloser(E) {
      return n.current?.commitTypedCloser(E) ?? !1;
    },
    insertNote(E, P, T) {
      n.current?.insertNote(E, P, T);
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
  const _ = he(
    (E, P, T, B) => {
      if (!u) return;
      const V = x.current?.getComments();
      u(E, V, P, T, B);
    },
    [x, u]
  ), A = he(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const E = x.current?.getComments();
    l(E);
  }, [x, i, l]);
  return j(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ M(Ox, { children: /* @__PURE__ */ we(kk, { ref: n, onUsjChange: _, ...f, children: [
    /* @__PURE__ */ M(
      NO,
      {
        setCommentStore: v,
        onChange: A,
        showCommentsContainerRef: m ? null : d ?? o,
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
function Ek(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function IO(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const LO = /^[#\w().,%/\s-]+$/;
function Fr(e) {
  return e != null;
}
const DO = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, UO = {
  left: "right",
  right: "left"
}, Ol = ".editor-input.usfm", FO = /^[\w.#[\]="':()>+~*,\s-]+$/;
function KO(e) {
  return FO.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Ol}".`
  ), Ol);
}
function zO(e, t, r, n) {
  const i = [];
  if (t.fontName && i.push(`font-family: "${Ek(t.fontName)}"`), t.bold && i.push("font-weight: bold"), t.italic && i.push("font-style: italic"), t.color && (LO.test(t.color) ? i.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Fr(t.fontSize) && t.fontSize > 0 && i.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Fr(t.firstLineIndent) && i.push(`text-indent: ${Dn(t.firstLineIndent * 20 * r)}vw`), Fr(t.leftMargin) && t.leftMargin >= 0 && i.push(`margin-${n ? "right" : "left"}: ${Dn(t.leftMargin * 20 * r)}vw`), Fr(t.rightMargin) && t.rightMargin >= 0 && i.push(
    `margin-${n ? "left" : "right"}: ${Dn(t.rightMargin * 20 * r)}vw`
  ), Fr(t.spaceBefore) && t.spaceBefore >= 0 && i.push(`margin-top: ${Dn(t.spaceBefore * r)}pt`), Fr(t.spaceAfter) && t.spaceAfter >= 0 && i.push(`margin-bottom: ${Dn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? i.push("line-height: 1.5") : t.lineSpacing === 2 && i.push("line-height: 2"), t.subscript ? i.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && i.push("vertical-align: text-top", "font-size: 66%"), t.underline && i.push("text-decoration: underline"), t.smallCaps && i.push("font-variant: small-caps"), t.justification) {
    const s = DO[n ? UO[t.justification] ?? t.justification : t.justification];
    s && i.push(`text-align: ${s}`);
  }
  return t.textProperties?.includes("verse") && i.push("white-space: nowrap", "unicode-bidi: embed"), i;
}
const uh = { c: 150, ca: 133, cp: 150 };
function dh(e, t) {
  return e && Fr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function BO(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Fr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = dh(e.markers.c, uh.c);
  return ["ca", "cp"].map((i) => {
    const s = dh(
      e.markers[i],
      uh[i]
    ), o = Dn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function SN(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Ol } = t, s = KO(i), o = [], a = [];
  e.defaultFont && a.push(`font-family: "${Ek(e.defaultFont)}"`), Fr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Dn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = zO(c, l, r, n);
    u.length > 0 && o.push(`${s} .usfm_${IO(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...BO(e, s)), o.join(`
`);
}
export {
  Om as BLOCK_VERSE_VIEW_MODE,
  k as CategoryType,
  vN as Editorial,
  jo as GENERATOR_NOTE_CALLER,
  $h as HIDDEN_NOTE_CALLER,
  CN as Marginal,
  b as MarkerType,
  Pm as PARAGRAPH_STRUCTURE_VIEW_MODE,
  wm as STANDARD_VIEW_MODE,
  ea as defaultStyleInfo,
  TN as directionToNames,
  I_ as filterAndRankItems,
  SN as generateUsjCss,
  kN as getDefaultViewMode,
  Da as getDefaultViewOptions,
  oP as getEnterMenuItems,
  sP as getMarkerMenuItems,
  xN as getViewMode,
  Nm as getViewOptions,
  Ws as isBlockVerseLayout,
  dn as isInsertEmbedOpOfType,
  JS as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
