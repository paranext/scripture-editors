import { jsx as C, jsxs as xe, Fragment as dn } from "react/jsx-runtime";
import { forwardRef as vn, useState as de, useRef as X, useCallback as ge, useEffect as K, useMemo as Fe, memo as Am, createContext as Hd, useContext as Gd, Children as Pm, isValidElement as Nm, cloneElement as Om, useImperativeHandle as lc, useLayoutEffect as is } from "react";
import { assertSafeKey as Ve, isValidBookCode as wm, MARKER_OBJECT_PROPS as qm, USJ_VERSION as pr, USJ_TYPE as hr, isUsjTextContentLocation as Rm, indexesFromUsjJsonPath as Jd, isUsjAttributeKeyLocation as $m, isUsjAttributeMarkerLocation as Im, isUsjClosingAttributeMarkerLocation as Lm, isUsjMarkerLocation as Dm, isUsjClosingMarkerLocation as Um, isUsjPropertyValueLocation as Fm, getUsjDocumentLocationTypeName as zm, usjJsonPathFromIndexes as en, EMPTY_USJ as Yd } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as Ke, $parseSerializedNode as to, DecoratorNode as ss, ElementNode as Jt, isHTMLElement as Sn, createState as ro, $getState as ne, $setState as mt, $isRangeSelection as N, $isElementNode as D, $isTextNode as M, ParagraphNode as uc, TextNode as ze, $createTextNode as he, $getCommonAncestor as Km, $getSelection as R, $isLineBreakNode as no, NODE_STATE_KEY as os, $getEditor as as, $hasUpdateTag as jm, $getNodeByKey as re, $getRoot as Ue, $createRangeSelection as dc, $createPoint as zl, $getCharacterOffsets as Xd, KEY_DOWN_COMMAND as Tr, COMMAND_PRIORITY_HIGH as Ie, HISTORY_MERGE_TAG as Qd, CLICK_COMMAND as io, COMMAND_PRIORITY_EDITOR as fn, isDOMNode as Zd, $getNearestNodeFromDOMNode as cs, CONTROLLED_TEXT_INSERTION_COMMAND as fc, PASTE_COMMAND as dr, COMMAND_PRIORITY_CRITICAL as fr, CUT_COMMAND as pn, DROP_COMMAND as pc, DELETE_CHARACTER_COMMAND as Bm, DELETE_WORD_COMMAND as Vm, DELETE_LINE_COMMAND as Wm, $isDecoratorNode as ef, COPY_COMMAND as so, COMMAND_PRIORITY_NORMAL as Gn, SELECTION_CHANGE_COMMAND as gr, BLUR_COMMAND as hc, $addUpdateTag as Dr, SKIP_DOM_SELECTION_TAG as Hm, CLEAR_HISTORY_COMMAND as Gm, COMMAND_PRIORITY_LOW as Rt, $setSelection as zi, $getPreviousSelection as Jm, $isRootOrShadowRoot as Ym, CAN_UNDO_COMMAND as Xm, CAN_REDO_COMMAND as Qm, $isNodeSelection as tf, DRAGSTART_COMMAND as Zm, $createNodeSelection as rf, getDOMSelectionFromTarget as ey, $onUpdate as ty, KEY_ENTER_COMMAND as nf, LineBreakNode as sf, $copyNode as ry, FOCUS_COMMAND as ny, $isRootNode as iy, KEY_ESCAPE_COMMAND as of, INSERT_PARAGRAPH_COMMAND as Ps, createCommand as af, HISTORIC_TAG as gc, UNDO_COMMAND as cf, REDO_COMMAND as lf, CLEAR_EDITOR_COMMAND as sy } from "lexical";
import { addClassNamesToElement as Ln, removeClassNamesFromElement as jo, $findMatchingParent as nt, $dfsIterator as uf, $dfs as si, mergeRegister as Xe, registerNestedElementResolver as df, $unwrapNode as ka, IS_APPLE as Ns } from "@lexical/utils";
import { useLexicalNodeSelection as oy } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Pt } from "fast-equals";
import Hn from "quill-delta";
import { useLexicalComposerContext as le } from "@lexical/react/LexicalComposerContext";
import { copyToClipboard as ay, $getHtmlContent as cy, $getLexicalContent as ly } from "@lexical/clipboard";
import { TreeView as uy } from "@lexical/react/LexicalTreeView";
import * as dy from "react-dom";
import { createPortal as un } from "react-dom";
import { LexicalComposer as ff } from "@lexical/react/LexicalComposer";
import { ContentEditable as pf } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as hf } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as gf } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as mf } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as fy } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as py, createDOMRange as hy, createRectsFromDOMRange as gy } from "@lexical/selection";
import { autoUpdate as my, computePosition as yy, shift as by, flip as ky } from "@floating-ui/dom";
import { $generateNodesFromDOM as Ty } from "@lexical/html";
import { AutoFocusPlugin as xy } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as _y } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as yf, LexicalCollaboration as Cy } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as vy } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Sy } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as My, $isRootTextContentEmpty as Ey } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Ay } from "@lexical/yjs";
import { Array as Kl, Map as jl, YArrayEvent as Py } from "yjs";
const Bo = (e) => Ke(to(e)), Ny = {
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
function bf(e) {
  return Ny[e];
}
const w = " ", Os = "​", It = w, mc = `${w}|`, rr = "p", ws = "+", kf = "-", qs = "chapter", Ta = "verse", Bl = "invalid", Oy = "text-spacing", wy = "formatted-font", qy = "marker-", Tf = "external-usj-mutation", xf = "selection-change", Ur = "cursor-change", xa = "annotation-change", Ki = "delta-change", _f = "marker-settle", Ry = [
  Tf,
  xf,
  Ur,
  xa,
  Ki
], hn = "zmsc-s", Jn = "zmsc-e", $y = [hn, Jn], Iy = [
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
  hn,
  Jn
], Cf = 1, yc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Ly = yc.filter((e) => e !== "sid" && e !== "eid");
class Vt extends ss {
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
    return new Vt(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return Sf().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Iy.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: Cf
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function vf(e) {
  return $y.includes(e);
}
function Sf(e, t, r, n, i) {
  return Ke(new Vt(e, t, r, n, void 0, i));
}
function je(e) {
  return e instanceof Vt;
}
const bc = "f", Dy = [
  // Footnote
  bc,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function Ni(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const Uy = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Mf = 1;
class Me extends Jt {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = bc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (Ni(t) === "crossref" ? kf : ws), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Me(r, n, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => zy(t) ? {
        conversion: Fy,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return kc().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Dy.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", Ni(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", Ni(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Sn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", Ni(this.getMarker()))), { element: r };
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
      version: Mf
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
function Fy(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: kc(t, r, n) };
}
function kc(e, t, r, n, i) {
  return Ke(new Me(e, t, r, n, i));
}
function zy(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Me.isValidMarker(t) && e.classList.contains(Me.getType());
}
function j(e) {
  return e instanceof Me;
}
var k;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(k || (k = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const _a = {
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
}, tn = {
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
}, Vl = {
  p: { children: tn },
  q: { children: tn },
  q1: { children: tn },
  q2: { children: tn },
  q3: { children: tn },
  q4: { children: tn },
  b: { children: tn },
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
function nr(e) {
  const t = Object.hasOwn(_a, e) ? _a[e] : void 0, r = Object.hasOwn(Vl, e) ? Vl[e] : void 0;
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
const Ef = "v", Af = "c", rn = "fig", Wl = "tr", Ca = "esb", Pf = "esbe", Ky = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, jy = {
  "": "start",
  c: "center",
  r: "end"
};
function By(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Hl(e) {
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
const Vy = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Wy(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Os && s + 1 < e.length && Hl(e[s + 1]) || (Hl(o) ? (r || (i = t.length, t += o), r = !0) : Vy.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function Hy(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function Gy(e, t) {
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
const Jy = /^(?:qt[1-5]?|ts)-[se]$/;
function oo(e) {
  return Jy.test(e) || vf(e);
}
function Vo(e, t) {
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
function Yy(e, t, r) {
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
      a(Wy(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: u } = Gy(e, i + 1);
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
    if (l === Ef) {
      const { word: g, next: y } = Vo(e, i);
      i = y, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === Af) {
      const { word: g, next: y } = Vo(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, m = t(p)?.type;
    if (m === b.Note || m === void 0 && Me.isValidMarker(l)) {
      const { word: g, next: y } = Vo(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (m === b.Milestone || m === void 0 && oo(l)) {
      const g = ib(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const y = e.indexOf("\\", i), T = y === -1 ? e.length : y;
        o(e.slice(c, T)), i = T;
      }
      continue;
    }
    m === b.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : m === b.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Rs(p) ? (d(), Rs(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Ca || l === Pf ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const Gl = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Rs(e) {
  return Object.hasOwn(Gl, e) ? Gl[e] : void 0;
}
function Xy(e) {
  return Rs(e) !== void 0;
}
const Qy = /([-\w]+)\s*=\s*"(.*?)"/g, Zy = /[\s\u200B]*[\n\r][\s\u200B]*/g, Nf = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function ao(e) {
  return Nf[e];
}
const eb = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function tb(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function co(e, t, r = Nf[t]) {
  const n = e.replace(Zy, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Qy)];
  if (s.length > 0) {
    if (!tb(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      eb.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function lo(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function rb(e) {
  const t = xr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function nb(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = co(e.slice(n + 1, i), r, lo(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function ib(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = co(s.slice(o + 1), r, lo(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = nb(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function lr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", w);
}
function nn(e) {
  return e.content || (e.content = []), e.content;
}
function xr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u;
  const d = () => u ? nn(u) : r;
  let f = !1;
  const p = () => {
    if (s)
      return o.length > a ? nn(o[o.length - 1].object) : nn(s);
    if (o.length > 0)
      return nn(o[o.length - 1].object);
    if (!i) {
      if (f && !n)
        return d();
      i = { type: "para", marker: rr, content: [] }, d().push(i);
    }
    return nn(i);
  }, m = (Q) => {
    const U = p();
    typeof Q == "string" && typeof U[U.length - 1] == "string" ? U[U.length - 1] = U[U.length - 1] + Q : U.push(Q);
  }, g = (Q) => {
    for (let U = Q; U < o.length; U += 1) {
      const Z = o[U].object;
      Z.closed = "false";
    }
  }, y = () => {
    g(0), o.length = 0;
  }, T = (Q) => {
    s && (o.length > a && (g(a), o.length = a), a = 0, Q || (s.closed = "false"), s = void 0);
  }, S = () => {
    c = void 0, l = void 0;
  }, v = (Q) => {
    u && (Q || (u.closed = "false"), u = void 0);
  };
  let E, A = "", x;
  const F = () => {
    A && m(lr(A)), A = "";
  }, L = (Q = !1) => {
    E?.type === "sidebar" ? A = "" : Q && A.endsWith(`
`) && (A = A.slice(0, -1)), E = void 0, F();
  }, G = () => {
    if (!x)
      return;
    const Q = { type: "char", marker: x.marker, content: [] };
    x.value && (Q.content = [lr(x.value)]), p().push(Q), o.push({ object: Q }), x = void 0;
  }, V = (Q, U) => {
    f = !1, S(), y(), T(!1), i = { type: "para", marker: Q, content: [] }, U && (i.content = [lr(U)]), d().push(i);
  }, ae = () => {
    x && (V(x.marker, x.value), x = void 0);
  };
  let ce;
  const ie = () => {
    if (ce) {
      if (ce.shape === "para")
        V(rn, ce.value);
      else {
        const Q = { type: "char", marker: rn, content: [] };
        ce.value && (Q.content = [lr(ce.value)]), p().push(Q), o.push({ object: Q });
      }
      ce = void 0;
    }
  }, ve = Yy(e, t?.getMarker ?? nr, n);
  for (let Q = 0; Q < ve.length; Q++) {
    const U = ve[Q];
    if (x) {
      if (U.kind === "text") {
        x.value += U.text;
        continue;
      }
      if (x.shape === "char" && U.kind === "end" && U.marker.replace(/^\+/, "") === x.marker) {
        if (x.value.trim() === "") {
          p().push({ type: "char", marker: x.marker, content: [] }), x = void 0, L();
          continue;
        }
        Object.assign(x.target, {
          [x.attrName]: lr(x.value.trim())
        });
        const Z = x.marker;
        if (x = void 0, Z === "ca") {
          const Ee = ve[Q + 1];
          Ee?.kind === "text" && /^[\s\u200B]*$/.test(Ee.text) && Q++;
        }
        continue;
      }
      if (x.shape === "para" && (U.kind === "para" || U.kind === "chapter")) {
        const Z = x.value.replace(/[\s\u200B]+$/, "");
        Z === "" ? (V(x.marker), x = void 0) : (Object.assign(x.target, { [x.attrName]: lr(Z) }), x = void 0);
      } else {
        E = void 0, (U.kind === "para" || U.kind === "chapter") && x.value.endsWith(`
`) && (x.value = x.value.slice(0, -1)), x.shape === "para" ? ae() : G(), Q--;
        continue;
      }
    }
    if (ce) {
      if (U.kind === "text" || U.kind === "optbreak") {
        ce.value += U.kind === "text" ? U.text : "//";
        continue;
      }
      if (U.kind === "end" && U.marker.replace(/^\+/, "") === rn) {
        const Z = ce.value.indexOf("|"), Ee = Z >= 0 ? co(ce.value.slice(Z + 1), rn) : void 0;
        if (Ee) {
          const we = {};
          for (const [_t, Jr] of Object.entries(Ee))
            we[_t === "src" ? "file" : _t] = Jr;
          const Yt = {
            type: "figure",
            marker: rn,
            ...we
          }, ee = ce.value.slice(0, Z);
          ee && (Yt.content = [lr(ee)]), m(Yt), ce = void 0;
          continue;
        }
      }
      ie(), Q--;
      continue;
    }
    if (E)
      if (U.kind === "text") {
        if (U.text.includes(`
`) && /^[\s\u200B]*$/.test(U.text)) {
          A += U.text;
          continue;
        }
        L();
      } else if (U.kind === "charOpen" || U.kind === "para") {
        const Z = U.kind === "para" || !U.isNested ? Rs(U.marker) : void 0;
        if (Z && Z.targetTypes.includes(E.type)) {
          A = "", x = {
            target: E,
            attrName: Z.attrName,
            marker: U.marker,
            shape: Z.shape,
            value: ""
          };
          continue;
        }
        L(U.kind === "para");
      } else
        L(U.kind === "chapter");
    if (!s && !n && (U.kind === "charOpen" && !U.isNested && U.marker === rn || U.kind === "para" && U.marker === rn)) {
      y(), ce = { shape: U.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (U.kind) {
      case "text": {
        let Z = U.text;
        if (!s && Z.endsWith(`
`)) {
          const Ee = ve[Q + 1];
          (Ee === void 0 || Ee.kind === "para" || Ee.kind === "chapter") && (Z = Z.slice(0, -1));
        }
        Z && m(lr(Z));
        break;
      }
      case "para": {
        const Z = !s && !n;
        if (Z && U.marker === Wl) {
          y(), c || (c = { type: "table", content: [] }, d().push(c)), l = { type: "table:row", marker: Wl, content: [] }, nn(c).push(l), i = l, f = !1;
          break;
        }
        if (Z && l) {
          const Ee = Ky.exec(U.marker);
          if (Ee && By(Ee)) {
            y();
            const [, we, Yt, ee] = Ee, _t = {
              type: "table:cell",
              marker: ee ? U.marker.slice(0, U.marker.indexOf("-")) : U.marker,
              align: jy[we],
              content: []
            };
            ee && (_t.colspan = String(Number(ee) + 1 - Number(Yt))), nn(l).push(_t), i = _t;
            break;
          }
        }
        if (S(), !n && U.marker === Ca) {
          y(), T(!1), v(!1), u = { type: "sidebar", marker: Ca, content: [] }, r.push(u), i = void 0, E = u, f = !1;
          break;
        }
        if (U.marker === Pf && u) {
          y(), T(!1), v(!0), i = void 0;
          break;
        }
        V(U.marker);
        break;
      }
      case "verse": {
        T(!1);
        const Z = { type: "verse", marker: Ef, number: U.number };
        m(Z), E = Z;
        break;
      }
      case "chapter": {
        y(), T(!1), S(), v(!1), i = void 0;
        const Z = {
          type: "chapter",
          marker: Af,
          number: U.number
        };
        r.push(Z), E = Z, f = !0;
        break;
      }
      case "note": {
        T(!1);
        const Z = p();
        s = { type: "note", marker: U.marker, caller: U.caller, content: [] }, a = o.length, Z.push(s), E = s;
        break;
      }
      case "charOpen": {
        if (!U.isNested) {
          const we = s ? a : 0;
          g(we), o.length = we;
        }
        const Z = p(), Ee = { type: "char", marker: U.marker, content: [] };
        Z.push(Ee), o.push({ object: Ee });
        break;
      }
      case "end": {
        const Z = U.marker.replace(/^\+/, ""), Ee = s ? a : 0, we = o.findLastIndex((Yt, ee) => ee >= Ee && Yt.object.marker === Z);
        we >= 0 ? (sb(o[we].object), g(we + 1), o.length = we) : s && s.marker === Z ? T(!0) : (g(Ee), o.length = Ee, m({ type: "unmatched", marker: `${U.marker}*` }));
        break;
      }
      case "milestone":
        m({ type: "ms", marker: U.marker, ...U.attributes });
        break;
      case "optbreak":
        m({ type: "optbreak" });
        break;
    }
  }
  if (ce && ie(), x)
    if (x.shape === "para") {
      const Q = x.value.replace(/[\s\u200B]+$/, "");
      Q === "" ? V(x.marker) : Object.assign(x.target, { [x.attrName]: lr(Q) }), x = void 0;
    } else
      x.value.endsWith(`
`) && (x.value = x.value.slice(0, -1)), G();
  y(), T(!1), v(!1);
  const Pe = (Q) => {
    for (const U of Q)
      typeof U != "string" && U.content && (Pe(U.content), U.content.length === 0 && delete U.content);
  };
  return Pe(r), r;
}
function sb(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = co(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const gn = ro("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Fr = ro("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), oe = ro("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), sr = "marker-trailing-space", Of = 1, ob = "marker", Tc = ro("isGutterMarker", {
  parse: (e) => e === !0
});
class _r extends ss {
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
    return new _r(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => ub(t) ? {
        conversion: ab,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return mr().updateFromJSON(t);
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
    return r && Sn(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: Of
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function ab(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: mr(t, r) };
}
function mr(e, t) {
  return Ke(new _r(e, t));
}
function cb(e) {
  return mt(mr(ob, e), Tc, !0);
}
function lb(e) {
  return Wt(e) && ne(e, Tc);
}
function ub(e) {
  return e?.tagName === "span";
}
function Wt(e) {
  return e instanceof _r;
}
function wf(e) {
  return e?.type === _r.getType();
}
const Lr = "internal-comment", db = [Lr], qf = Object.freeze({}), va = Object.freeze({}), Sa = Object.freeze({}), Ma = Object.freeze({}), Ea = Object.freeze({}), fb = 1, Dn = /* @__PURE__ */ new Map(), _i = /* @__PURE__ */ new Map(), Un = /* @__PURE__ */ new Map(), Fn = /* @__PURE__ */ new Map();
class Ze extends Jt {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = qf, r, n, i, s, o) {
    super(o), this.__typedIDs = Ts(t), this.__typedOnClicks = Wo(r), this.__typedOnRemoves = Ho(n), this.__typedOnMouseEnters = Go(i), this.__typedOnMouseLeaves = Jo(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Ts(t.__typedIDs), n = Wo(t.__typedOnClicks), i = Ho(t.__typedOnRemoves), s = Go(t.__typedOnMouseEnters), o = Jo(t.__typedOnMouseLeaves);
    return new Ze(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return db.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return ji().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: fb
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      Ln(n, sn(t.theme.typedMark, a)), c.length > 1 && Ln(n, sn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Ln(n, sn("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = sn(n.theme.typedMark, s), d = sn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && Ln(r, u) : l === 0 && jo(r, u), c === 1 ? l === 2 && Ln(r, d) : l === 1 && jo(r, d));
      const f = new Set(o), p = new Set(a);
      for (const m of o)
        p.has(m) || jo(r, sn("annotationId", m));
      for (const m of a)
        f.has(m) || Ln(r, sn("annotationId", m));
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
    return Te(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = Ts(r.__typedIDs);
    r.__typedIDs = Ts(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && $s(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Wo(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return Te(t) ? Dn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Ho(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Te(t) ? _i.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Go(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Te(t) ? Un.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = Jo(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Te(t) ? Fn.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!Te(a))
      return;
    Ve(t), Ve(r);
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
    if (!Te(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && $s(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = ji(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Dn.delete(r.getKey()), _i.delete(r.getKey()), Un.delete(r.getKey()), Fn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
    const n = Dn.get(this.getKey());
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
    const n = Un.get(this.getKey());
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
    const n = Fn.get(this.getKey());
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === va) {
      const t = Dn.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      Dn.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    Dn.set(this.getKey(), this.__typedOnClicks);
  }
  setOnClickFor(t, r, n) {
    Ve(t), Ve(r);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, r) {
    if (!this.__typedOnClicks)
      return;
    const n = this.__typedOnClicks[t];
    if (!n)
      return;
    const i = wr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = wr(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === va) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Sa) {
      const t = _i.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      _i.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    _i.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, r, n) {
    Ve(t), Ve(r);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, r) {
    if (!this.__typedOnRemoves)
      return;
    const n = this.__typedOnRemoves[t];
    if (!n)
      return;
    const i = wr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = wr(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Sa) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Ma) {
      const t = Un.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      Un.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    Un.set(this.getKey(), this.__typedOnMouseEnters);
  }
  setOnMouseEnterFor(t, r, n) {
    Ve(t), Ve(r);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, r) {
    if (!this.__typedOnMouseEnters)
      return;
    const n = this.__typedOnMouseEnters[t];
    if (!n)
      return;
    const i = wr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = wr(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Ma) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Ea) {
      const t = Fn.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Fn.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Fn.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, r, n) {
    Ve(t), Ve(r);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, r) {
    if (!this.__typedOnMouseLeaves)
      return;
    const n = this.__typedOnMouseLeaves[t];
    if (!n)
      return;
    const i = wr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = wr(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Ea) {
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
    const i = pb(t, r);
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
    for (; Te(t) && Yl(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; Te(r) && Yl(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = hb(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = gb(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = mb(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = yb(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Ts(e = qf) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (Ve(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      Ve(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function Wo(e) {
  if (!e || e === va)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ve(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ve(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ho(e) {
  if (!e || e === Sa)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ve(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ve(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Go(e) {
  if (!e || e === Ma)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ve(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ve(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Jo(e) {
  if (!e || e === Ea)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ve(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ve(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function wr(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function Jl(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function pb(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Yl(e, t) {
  const r = Jl(e), n = Jl(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function hb(e, t) {
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
function gb(e, t) {
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
function mb(e, t) {
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
function yb(e, t) {
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
function sn(e, t) {
  return `${e}-${t}`;
}
function Xl(e) {
  return `external-${e}`;
}
function ji(e, t, r, n, i) {
  return Ke(new Ze(e, t, r, n, i));
}
function Te(e) {
  return e instanceof Ze;
}
function Rf(e) {
  return e?.type === Ze.getType();
}
function $s(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function $f(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let m, g;
  for (let y = 0; y < u; y++) {
    const T = a[y];
    if (D(g) && g.isParentOf(T))
      continue;
    const S = y === 0, v = y === u - 1;
    let E = null;
    if (M(T)) {
      const A = T.getTextContentSize(), x = S ? f : 0, F = v ? p : A;
      if (x === 0 && F === 0)
        continue;
      const L = T.splitText(x, F);
      E = L.length > 1 && (L.length === 3 || S && !v || F === A) ? L[1] : L[0];
    } else {
      if (Te(T))
        continue;
      D(T) && T.isInline() && (E = T);
    }
    if (E !== null) {
      if (E && E.is(m))
        continue;
      const A = E.getParent();
      (A == null || !A.is(m)) && (g = void 0), m = A, g === void 0 && (g = ji(), g.addID(t, r, n, i, s, o), E.insertBefore(g)), g.append(E);
    } else
      m = void 0, g = void 0;
  }
  t === Lr && D(g) && (d ? g.selectStart() : g.selectEnd());
}
function bb(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (Te(n))
      return n.getTypedIDs()[t];
    if (M(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (Te(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const kb = ["type", "marker", "content"], Aa = "unknown", If = 1, Tb = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class Mn extends Jt {
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
    return new Mn(r, n, i, s);
  }
  static importDOM() {
    return {
      [Aa]: (t) => _b(t) ? {
        conversion: xb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return xc().updateFromJSON(t);
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
    return Tb.has(this.getTag());
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
    const t = document.createElement(Aa);
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
      version: If
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
function xb(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: xc(t, r) };
}
function xc(e, t, r) {
  return Ke(new Mn(e, t, r));
}
function _b(e) {
  return e?.tagName.toLowerCase() === Aa;
}
function Le(e) {
  return e instanceof Mn;
}
const Bi = "id", Lf = 1, Cb = [
  "type",
  "marker",
  "code",
  "content"
];
class Lt extends Jt {
  __marker = Bi;
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
    return new Lt(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return Df(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return wm(t);
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
      version: Lf
    };
  }
}
function Df(e, t) {
  return Ke(new Lt(e, t));
}
function Tt(e) {
  return e instanceof Lt;
}
function Uf(e) {
  return e?.type === Lt.getType();
}
const Is = "c", Ff = 1, vb = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Et extends Jt {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = Is, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Et(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return zf().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(qs, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: Ff
    };
  }
}
function zf(e, t, r, n, i) {
  return Ke(new Et(e, t, r, n, i));
}
function $e(e) {
  return e instanceof Et;
}
function Sb(e) {
  return e?.type === Et.getType();
}
const Kf = [
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
], jf = [
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
], Mb = [
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
  ...Kf,
  ...jf
], Bf = 1, Eb = ["type", "marker", "content"];
class ye extends Jt {
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
    return new ye(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Mb.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Kf.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && jf.includes(t);
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
    return ye.isValidFootnoteMarker(t) || ye.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => Pb(t) ? {
        conversion: Ab,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return yr().updateFromJSON(t);
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
    return Ql(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Ql(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Sn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Bf
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = yr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Ql(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Ab(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: yr(t) };
}
function yr(e, t) {
  return Ke(new ye(e, t));
}
function Pb(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ye.isValidMarker(t) && e.classList.contains(ye.getType());
}
function $(e) {
  return e instanceof ye;
}
function Nb(e) {
  return e?.type === ye.getType();
}
const Vf = 1, Ob = "c", Wf = "span";
class or extends ss {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Ob, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new or(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Hf(t) ? {
        conversion: wb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return _c().updateFromJSON(t);
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
    const t = document.createElement(Wf);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(qs, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Sn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(qs, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? $t(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Vf
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
function wb(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: _c(t) };
}
function _c(e, t, r, n, i, s) {
  return Ke(new or(e, t, r, n, i, s));
}
function Hf(e) {
  return e ? e.classList.contains(qs) && e.tagName.toLowerCase() === Wf : !1;
}
function ls(e) {
  return e instanceof or;
}
function qb(e) {
  return e?.type === or.getType();
}
const Gf = 1;
class zr extends uc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new zr(t.__key);
  }
  static importJSON(t) {
    return jt().updateFromJSON(t);
  }
  getMarker() {
    return rr;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Gf
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = jt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function jt() {
  return Ke(new zr());
}
function ir(e) {
  return e instanceof zr;
}
function uo(e) {
  return e?.type === zr.getType();
}
const Rb = [
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
  rr,
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
], Jf = 1, $b = ["type", "marker", "content"];
class Qe extends uc {
  __marker;
  __unknownAttributes;
  constructor(t = rr, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new Qe(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Rb.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Ib,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return Vi().updateFromJSON(t);
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
    return r && Sn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Jf
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Vi(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Ib(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = Vi(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function Vi(e, t) {
  return Ke(new Qe(e, t));
}
function se(e) {
  return e instanceof Qe;
}
function Cc(e) {
  return e?.type === Qe.getType();
}
const Ls = "v", Yf = 1, Lb = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class ft extends ze {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = Ls, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new ft(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Xf().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Ta, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: Yf
    };
  }
}
function Xf(e, t, r, n, i, s) {
  return Ke(new ft(e, t, r, n, i, s));
}
function Ne(e) {
  return e instanceof ft;
}
function Qf(e) {
  return e?.type === ft.getType();
}
const Db = "​", Xn = Db;
var Zl;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Zl || (Zl = {}));
var eu;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(eu || (eu = {}));
function Ub() {
  return he(Xn);
}
function Fb(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Xn, ""));
}
function oi(e) {
  return e.length > 0 && e.includes(Xn) && e.replaceAll(Xn, "") === "";
}
function fo(e) {
  return M(e) && oi(e.getTextContent());
}
function Zf(e) {
  return Sb(e) || qb(e);
}
function We(e) {
  return $e(e) || ls(e);
}
function ep(e, t) {
  return e.find((r) => We(r) && r.getNumber() === t.toString());
}
function zb(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && We(r));
}
function tu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function tp(e) {
  if (!e)
    return;
  if (We(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !We(t); )
    t = t.getPreviousSibling();
  if (t && We(t))
    return t;
}
function Ht(e) {
  return nt(e, j) ?? void 0;
}
function Kb(e) {
  return Tt(e) || $e(e) || $(e) || ls(e) || ir(e) || je(e) || se(e) || j(e) || Ne(e) || Le(e);
}
function rp(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function jb(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function vt(e) {
  return Ce(e) || Tt(e);
}
function Ce(e) {
  return se(e) || ir(e);
}
function Bb(e) {
  return Cc(e) || uo(e);
}
function Ds(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function mn(e, t) {
  const r = ne(t, gn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function Vb(e, t) {
  const r = D(e) ? e : e.getParent(), n = D(t) ? t : t.getParent(), i = r && n ? Km(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Wb(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Qn(e) {
  return e?.type === ze.getType();
}
function Hb(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function Gb(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Oe(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function rt(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function np(e, t, r) {
  const n = Oe(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function $t(e, t) {
  let r = Oe(e);
  return t && (r += `${w}${t}`), r += " ", r;
}
function Jb(e) {
  const t = e[os];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function ip(e) {
  return Ac(e) || wf(e) && e.textType === "marker" || Qn(e) && Jb(e) === "attribute" ? "" : Qn(e) && e.text !== w ? e.text : Nb(e) ? e.children.map((t) => ip(t)).join("") : "";
}
function Yb(e) {
  return e.map((r) => ip(r)).filter((r) => r.length > 0).join(" ").trim();
}
function St(e) {
  return " " + e + w;
}
function vc(e) {
  const t = [];
  for (const r of e) {
    if (!$(r))
      continue;
    const n = sp(r);
    n !== It && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function sp(e) {
  return P(e) || Cr(e) || M(e) && ne(e, oe) === "attribute" ? "" : M(e) ? e.getTextContent() : D(e) ? e.getChildren().map((t) => sp(t)).join("") : "";
}
function Cr(e) {
  return Wt(e) && e.getTextType() === "marker";
}
function Dt(e) {
  return P(e) || Cr(e);
}
function ru(e, t) {
  Xb(e, t), e.setMarker(t);
}
function Xb(e, t) {
  const r = e.getMarker(), n = Oe(r), i = Oe(r, !0), s = rt(r), o = rt(r, !0), a = ye.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Dt(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (P(c))
        c.setMarker(t);
      else if (Cr(c)) {
        const f = l.startsWith(Oe("", !0));
        c.setTextContent(u ? Oe(t, f) : rt(t, f));
      }
    }
  });
}
function De(e, t = qm) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Ae(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function op(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Sc(e) {
  if (!N(e))
    return nu(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !D(t) || e.anchor.type === "text" && !M(t)))
    return t ?? void 0;
  try {
    return nu(e) ?? t ?? void 0;
  } catch (n) {
    if (op(n))
      return t ?? void 0;
    throw n;
  }
}
function Qb(e, t) {
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
function Mc(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function ap(e) {
  return !!e && e.includes("-");
}
function cp(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function nu(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Ec(e) {
  if (!e)
    return !1;
  if (no(e) || P(e) || Cr(e) || Wt(e) && e.getTextType() === "attribute")
    return !0;
  if (M(e)) {
    const t = ne(e, oe);
    if (t === sr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === w || oi(r))
      return !0;
  }
  return !1;
}
function po() {
  const e = he(w);
  return mt(e, oe, sr), e.setMode("token"), e;
}
function Zb(e) {
  const t = e.getTextContent();
  t.startsWith(w) || e.setTextContent(w + t);
}
function En(e) {
  return M(e) && ne(e, oe) === sr;
}
function lp(e) {
  const t = e.getFirstChild();
  if (!Dt(t) || t === null || En(t.getNextSibling()))
    return !1;
  const r = R();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function ai(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!Ec(s)) {
      if (Te(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (M(s) && s.getType() === ze.getType()) {
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length }), r.length += s.getTextContentSize();
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function ho(e) {
  let t = e.getParent();
  for (; t && Te(t); )
    t = t.getParent();
  return t;
}
function ek(e, t) {
  return ai(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function tk(e, t) {
  const r = ho(e);
  if (!r)
    return;
  const n = ai(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function rk(e, t) {
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
function up(e, t) {
  const r = ai(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Ec(n))
    return up(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || Ds(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || Ds(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function nk(e, t) {
  if (t <= 0)
    return 0;
  const r = ai(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? ik(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function ik(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const sk = 1;
class ar extends ze {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(cn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new ar(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return ot().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: r, markerSyntax: n = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || cn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = cn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = cn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = cn(r.__marker, r.__markerSyntax, t), r;
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
      version: sk
    };
  }
}
function ot(e, t, r) {
  return Ke(new ar(e, t, void 0, r));
}
function P(e) {
  return e instanceof ar;
}
function Ac(e) {
  return e?.type === ar.getType();
}
function Wr(e) {
  return e.getTextContent() === cn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function ok(e) {
  e.setTextContent(cn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function cn(e, t, r = !1) {
  return t === "closing" ? rt(e, r) : t === "selfClosing" ? rt("") : Oe(e, r);
}
const dp = 1, ak = "attribute-run";
function Yo(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class vr extends Jt {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new vr(r, n);
  }
  static importJSON(t) {
    return fp(t.runKind).updateFromJSON(t);
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
    t.classList.add(ak);
    const r = Yo(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = Yo(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = Yo(this.__runKind);
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
      version: dp
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
function fp(e) {
  return Ke(new vr(e));
}
function Be(e) {
  return e instanceof vr;
}
const ck = /* @__PURE__ */ new Set(["closed"]);
function tr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !ck.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function pp(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function hp(e) {
  const t = Object.keys(e).filter((n) => !Ly.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function gp(e, t, r, n) {
  return pp(
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
function Ri(e) {
  return e.getChildren().find((t) => P(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function lk(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Ri(e) === void 0 && mp(e) === void 0;
}
function mp(e) {
  return e.getChildren().find((t) => M(t) && ne(t, oe) === "attribute");
}
function Wi(e, t) {
  return us(e.getNextSibling(), t);
}
const uk = /^[ \u00A0]+$/;
function Pc(e) {
  if (Wr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Oe(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && uk.test(r.slice(t.length));
}
function us(e, t) {
  let r, n, i, s;
  return Be(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), P(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Pc(e) && (r = e, e = e.getNextSibling()), M(e) && ne(e, oe) === "attribute" && (n = e, e = e.getNextSibling()), P(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && Wr(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Hi(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!P(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (M(n) && n.getTextContent() === St(e.getCaller()))
    return n;
}
function yp(e) {
  const t = Hi(e);
  return t ? us(t.getNextSibling(), "cat") : {};
}
function go(e) {
  const t = e.getFirstChild();
  if (!(!M(t) || P(t)) && ne(t, oe) !== "attribute")
    return t;
}
function bp(e) {
  const t = go(e);
  return t ? us(t.getNextSibling(), "ca") : {};
}
function kp(e) {
  const t = go(e);
  if (!t)
    return;
  const r = us(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Tp(e) {
  const t = kp(e);
  return t ? us(t.getNextSibling(), "cp") : {};
}
function xp(e) {
  const t = e.getParent();
  if (!$(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ne(n))
        return n;
      if (!(P(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || M(n) && ne(n, oe) === "attribute" || $(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Be(n)))
        return;
    }
}
function mo(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Be(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), P(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Pc(s) && (t = s, s = s.getNextSibling()), M(s) && ne(s, oe) === "attribute" && (r = s, s = s.getNextSibling()), P(s) && s.getMarkerSyntax() === "selfClosing" && Wr(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function Nc(e) {
  return $(ho(e));
}
function Pa(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Nc(t) : t.getChildren().some((i) => $(i) && i.getMarker() === r) ? !0 : void 0;
}
function dk(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Pa(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function yo(e) {
  return M(e) && e.getType() === ze.getType() && ne(e, oe) !== "attribute";
}
function Oc(e, t) {
  if (e.getMarkerSyntax() !== "opening" || Pa(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return P(r) ? Pa(r, t) === !0 ? "spacer" : void 0 : yo(r) ? r.getTextContent().startsWith(w) ? void 0 : "prefix" : "spacer";
}
function fk(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (P(t) && Oc(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function _p(e, t) {
  const r = R();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Cp(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Oc(t, e);
    if (r !== void 0 && !_p(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        M(n) && n.setTextContent(w + n.getTextContent());
      } else
        t.insertAfter(he(w));
  });
}
function vp(e) {
  return e.isAttached() ? e.getChildren().some((t) => P(t) && Oc(t, e) !== void 0 && _p(t, e)) : !1;
}
const pk = "file", hk = "src", gk = "colspan", mk = "category", yk = "alt", bk = "closed", kk = "false";
function Tk(e) {
  return e[bk] !== kk;
}
function xk(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === pk ? hk : t,
    r
  ]));
}
function _k(e, t) {
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
function Sp(e, t, r) {
  const n = r ?? {}, i = Tk(n);
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
        opening: `\\${_k(t, n[gk])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: tr(xk(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [mk]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + tr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [yk]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: tr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: tr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const bt = { wantsRun: !1, valueText: void 0 }, Sr = {};
function Xo(e, t) {
  if (t === "va")
    return e;
  const r = Wi(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function wc(e) {
  const t = R();
  if (!N(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (D(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function bo(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = R();
  if (!N(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function Ck(e) {
  return Be(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : P(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : M(e) && ne(e, oe) === "attribute";
}
function vk(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!M(e) || ne(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function Qo(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ne(t))
      return t;
    if (!Ck(t))
      return;
  }
}
function iu(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Ne(t),
    ownerOf: (t) => {
      if (Be(t))
        return t.getRunKind() === e ? Qo(t) : void 0;
      const r = t.getParent();
      return Be(r) ? r.getRunKind() === e ? Qo(r) : void 0 : vk(t) === e ? Qo(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Ne(t))
        return bt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? bt : { wantsRun: !0, valueText: w + r };
    },
    scanPieces: (t) => Ne(t) ? Wi(Xo(t, e), e) : Sr,
    graceSite: (t, r) => Ne(t) ? !r.opener && !r.closer ? wc(Xo(t, e)) : bo(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Ne(t) ? Xo(t, e) : void 0
    }
  };
}
const Sk = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => $(e),
  ownerOf: () => {
  },
  expectedPieces: () => bt,
  scanPieces: () => Sr,
  graceSite: (e) => $(e) && vp(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Mk = {
  kind: "char",
  ownerPredicate: (e) => $(e),
  ownerOf: (e) => {
    if (!M(e) || ne(e, oe) !== "attribute")
      return;
    const t = e.getParent();
    return $(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!$(e) || Ri(e) === void 0)
      return bt;
    const t = tr(e.getUnknownAttributes() ?? {}, ao(e.getMarker()));
    return t === "" ? bt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => $(e) ? { value: mp(e) } : Sr,
  graceSite: (e, t) => {
    if (!$(e) || t.value)
      return !1;
    const r = Ri(e);
    if (!r)
      return !1;
    const n = R();
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
    insertRunBefore: (e) => $(e) ? Ri(e) : void 0
  }
};
function Mp(e) {
  if (P(e))
    return e.getMarker() === "cat";
  if (!M(e) || ne(e, oe) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return P(t) && t.getMarker() === "cat";
}
function Ek(e) {
  const t = e.getParent();
  if (!j(t))
    return;
  const r = Hi(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Mp(n))
        return;
    }
}
const Ak = {
  kind: "cat",
  ownerPredicate: (e) => j(e),
  ownerOf: (e) => {
    if (Be(e))
      return e.getRunKind() === "cat" && j(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Be(t) ? t.getRunKind() === "cat" && j(t.getParent()) ? t.getParent() ?? void 0 : void 0 : Mp(e) ? Ek(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!j(e) || e.getIsCollapsed() !== !1)
      return bt;
    const t = e.getCategory();
    return t === void 0 ? bt : { wantsRun: !0, valueText: w + t };
  },
  scanPieces: (e) => j(e) ? yp(e) : Sr,
  graceSite: (e, t) => {
    if (!j(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Hi(e);
      return r !== void 0 && wc(r);
    }
    return bo(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => j(e) ? Hi(e) : void 0
  }
};
function Pk(e) {
  return Be(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : P(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : M(e) && ne(e, oe) === "attribute";
}
function Nk(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!M(e) || ne(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function Ok(e) {
  const t = e.getParent();
  if (!$e(t))
    return;
  const r = go(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Pk(n))
        return;
    }
}
function su(e) {
  const t = (r) => $e(r) ? e === "ca" ? go(r) : kp(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => $e(r),
    ownerOf: (r) => {
      if (Be(r))
        return r.getRunKind() === e && $e(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Be(n) ? n.getRunKind() === e && $e(n.getParent()) ? n.getParent() ?? void 0 : void 0 : Nk(r) === e ? Ok(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!$e(r))
        return bt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? bt : { wantsRun: !0, valueText: w + n };
    },
    scanPieces: (r) => $e(r) ? e === "ca" ? bp(r) : Tp(r) : Sr,
    graceSite: (r, n) => {
      if (!$e(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && wc(i);
      }
      return bo(n);
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
function Ep(e) {
  if (P(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return M(e) && ne(e, oe) === "attribute";
}
function wk(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (je(t)) {
      const r = P(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Ep(t))
      return;
  }
}
const qk = {
  kind: "milestone",
  ownerPredicate: (e) => je(e),
  ownerOf: (e) => {
    const t = Be(e) ? e.getRunKind() === "milestone" ? e : void 0 : Be(e.getParent()) ? e.getParent() : Ep(e) ? e : void 0;
    if (!t || Be(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Be(t) ? je(r) ? r : void 0 : wk(t);
  },
  expectedPieces: (e) => {
    if (!je(e))
      return bt;
    const t = gp(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = tr(t, lo(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : w + r };
  },
  scanPieces: (e) => {
    if (!je(e))
      return Sr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = mo(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!je(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = R();
      if (!N(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return bo(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => je(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, Rk = Sp("optbreak", void 0, void 0).opening, $k = {
  kind: "optbreak",
  ownerPredicate: (e) => Le(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Le(t) || t.getTag() !== "optbreak"))
      return M(e) || Wt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: Rk }),
  scanPieces: (e) => Le(e) ? { value: e.getFirstChild() ?? void 0 } : Sr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, Ik = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => Le(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => bt,
  scanPieces: () => Sr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, Lk = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => $(e),
  ownerOf: () => {
  },
  expectedPieces: () => bt,
  scanPieces: () => Sr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Gi = [
  Sk,
  Mk,
  iu("va"),
  iu("vp"),
  Ak,
  su("ca"),
  su("cp"),
  qk,
  $k,
  Ik,
  Lk
], Dk = new Map(Gi.map((e) => [e.kind, e]));
function yn(e) {
  const t = Dk.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function bn(e) {
  for (const t of Gi) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function Ap(e) {
  return bn(e) !== void 0;
}
const Us = "unmatched", Pp = 2;
function $i(e) {
  return `\\${e}`;
}
class Mr extends ze {
  __marker;
  constructor(t = "", r) {
    super($i(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new Mr(r, n);
  }
  static importDOM() {
    return {
      [Us]: (t) => Fk(t) ? {
        conversion: Uk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return qc().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? $i(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = $i(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Bl), r.title = ou(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = ou(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Us);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Bl), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: Pp
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Np(e) {
  return e.getTextContent() === $i(e.getMarker());
}
function ou(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function Uk(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: qc(t) };
}
function qc(e) {
  return Ke(new Mr(e));
}
function Fk(e) {
  return e?.tagName.toLowerCase() === Us;
}
function Hr(e) {
  return e instanceof Mr;
}
const Op = "table", Na = "immutable-table", wp = 1, zk = ["type", "marker", "content"];
class An extends Jt {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Na;
  }
  static clone(t) {
    return new An(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return Kk().updateFromJSON(t);
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
      type: Na,
      ...t !== void 0 && { unknownAttributes: t },
      version: wp
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function Kk(e) {
  return Ke(new An(e));
}
function qp(e) {
  return e instanceof An;
}
function jk(e) {
  return e?.type === Na;
}
const Rp = "table:row", au = "immutable-table-row", $p = 1, Oa = "tr", Bk = ["type", "marker", "content"];
class ci extends Jt {
  __marker;
  __unknownAttributes;
  constructor(t = Oa, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return au;
  }
  static clone(t) {
    return new ci(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return Vk().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Oa).setUnknownAttributes(t.unknownAttributes);
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
      type: au,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: $p
    };
  }
}
function Vk(e, t) {
  return Ke(new ci(e, t));
}
const Ip = "table:cell", cu = "immutable-table-cell", Lp = 1, wa = "tc1", Wk = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function Hk(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class li extends Jt {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = wa, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return cu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new li(r, n, i, s, o);
  }
  static importJSON(t) {
    return Gk().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? wa).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = Hk(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: cu,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: Lp
    };
  }
}
function Gk(e, t, r, n) {
  return Ke(new li(e, t, r, n));
}
function ko(e, t) {
  const r = e.getChildAtIndex(t);
  return M(r) ? r : void 0;
}
function Gt(e, t) {
  const r = ko(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Ji(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function Jk(e) {
  return e.getChildren().some((t) => P(t) && t.getMarkerSyntax() === "closing");
}
function Yk(e) {
  return Ji(e) ? void 0 : { closed: "false" };
}
function Xk(e, t, r, n) {
  const i = t.getMarker(), s = Nc(t), o = Jk(t);
  if (n) {
    e.append(ot(i, "opening", s));
    const [a] = r;
    yo(a) && !a.getTextContent().startsWith(w) && a.setTextContent(w + a.getTextContent());
  }
  e.append(...r), o && e.append(ot(i, "closing", s));
}
function kn(e) {
  return nt(e, $) ?? void 0;
}
function Rc(e) {
  let t = e.getParent();
  for (; $(t); )
    t = t.getParent();
  return t;
}
function qa(e) {
  const t = Dp(e);
  return e.getChildren().every((r) => P(r) || t && ne(r, oe) === "attribute" || M(r) && r.getTextContent().replaceAll(w, "") === "");
}
function Dp(e) {
  return Ji(e);
}
function Qk(e, t) {
  const r = e.getUnknownAttributes(), n = r ? tr(r, ao(e.getMarker())) : "";
  n !== "" && t.insertAfter(he(n)), e.remove();
}
function Zk(e, t) {
  if (Ji(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(ot(e.getMarker(), "closing", Nc(e)));
}
function eT(e, t) {
  return $(e) && !Ji(e) && !Ji(t);
}
function tT(e, t, r) {
  qa(e) && e.getChildren().forEach((i) => {
    P(i) || i.remove();
  });
  const [n] = t;
  r && yo(n) && !n.getTextContent().startsWith(w) && n.setTextContent(w + n.getTextContent()), e.append(...t);
}
function rT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Dp(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = P(l) && l.getMarkerSyntax() === "closing", f = s && ne(l, oe) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = eT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      tT(e, o, n);
    else {
      const l = yr(t.getMarker(), Yk(t));
      Xk(l, t, o, n), e.insertAfter(l), qa(l) ? l.remove() : c = l;
    }
  i && !a && Zk(t, n), qa(t) && Qk(t, c);
}
function Zn(e, t) {
  let r = e.getParent();
  for (; $(r); )
    rT(e, r, t), r = e.getParent();
}
function $c(e) {
  if (M(e) && !P(e)) {
    const t = e.getTextContent().startsWith(w) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (D(e)) {
    const t = e.getChildren().find((r) => !P(r));
    if (t) {
      $c(t);
      return;
    }
    e.selectEnd();
  }
}
const Yn = /* @__PURE__ */ new WeakMap();
function nT(e, t) {
  return Yn.set(e, t), () => {
    Yn.get(e) === t && Yn.delete(e);
  };
}
function lu(e) {
  return Yn.get(e);
}
function iT(e) {
  return Yn.get(as())?.has(e.getKey()) ?? !1;
}
function sT(e) {
  Yn.get(as())?.add(e.getKey());
}
function oT(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Ra(e) {
  return !!(e.opener || e.value || e.closer);
}
function uu(e) {
  return /^\s/.test(e);
}
function Ic(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !uu(t) || !uu(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function To(e, t, r) {
  return r.wantsRun ? Ic(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : oT(t);
}
function aT(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return Ic(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Up(e, t) {
  return !Ra(e.scanPieces(t));
}
function ds(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!To(e, n, r))
    return !1;
  const i = R();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Ds(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function cT(e, t, r, n) {
  return !r.wantsRun || Ra(n) || jm(Ki) ? !1 : as().getEditorState().read(() => {
    const i = re(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Ra(e.scanPieces(i));
  });
}
function lT(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function du(e) {
  const t = he(e);
  return mt(t, oe, "attribute"), t;
}
function uT(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = fp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function dT(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    M(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(du(n.valueText));
    return;
  }
  const l = uT(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = ot(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : M(d) ? Ic(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = du(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(ot(a === "selfClosing" ? "" : o(t), a));
}
function Yi(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (To(e, i, n) && !iT(t)) {
    if (cT(e, t, n, i)) {
      sT(t);
      return;
    }
    if (!ds(e, t)) {
      if (!n.wantsRun) {
        lT(i);
        return;
      }
      dT(e, t, i, n);
    }
  }
}
function fT(e, t, r) {
  Yi(e, t), t.isAttached() && ds(e, t) && r.add(t.getKey());
}
function Fp(e) {
  if (!M(e))
    return !1;
  if (P(e) || Ne(e) || Hr(e))
    return !0;
  const t = ne(e, oe);
  return t === "attribute" || t === sr;
}
function Lc(e, t) {
  return P(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && Wr(e) && $(e.getParent())) : !1;
}
function pT() {
  const e = R();
  return N(e) ? Lc(e.focus.getNode(), e.focus.offset) : !1;
}
function zp(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return M(t) && Fp(t) ? t : void 0;
}
function hT(e) {
  const t = zp(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function gT(e) {
  const t = zp(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function fu(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function pu(e, t) {
  e.set(t.key, t.offset, t.type);
}
function mT(e, t) {
  let r = gT(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!M(n))
      return;
    if (!Fp(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function hu(e, t) {
  const r = mT(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Kp(e) {
  if (e.isCollapsed()) {
    const a = hT(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [fu(r), fu(n)], s = hu(r, "next"), o = hu(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (pu(r, i[0]), pu(n, i[1]), !1) : !0;
}
const Fs = "verse-block", jp = 1, yT = "verse-block";
class ui extends Jt {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Fs;
  }
  static clone(t) {
    return new ui(t.__number, t.__key);
  }
  static importJSON(t) {
    return bT().updateFromJSON(t);
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
    return cp(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(yT), gu(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && gu(r, this.__number), !1;
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
      type: Fs,
      number: this.getNumber(),
      version: jp
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function gu(e, t) {
  const { start: r, end: n } = cp(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), mu(e, "data-verse-start", i ? r : NaN), mu(e, "data-verse-end", i ? n : NaN);
}
function mu(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function bT(e) {
  return Ke(new ui(e));
}
function Xi(e) {
  return e instanceof ui;
}
function kT(e) {
  return e?.type === Fs;
}
const TT = [
  Lt,
  or,
  Et,
  ft,
  ye,
  Me,
  Vt,
  ar,
  Mn,
  _r,
  Mr,
  Qe,
  zr,
  An,
  ci,
  li,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  vr,
  {
    replace: uc,
    with: () => jt(),
    withKlass: zr
  }
], zs = {
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
}, xT = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function _T(e) {
  if (!e)
    return nr;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: nr(r)?.category ?? k.Uncategorized,
      type: xT[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: nr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function yu(e, t, r) {
  const n = {
    type: hr,
    version: pr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return uo(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Bp = "v", Vp = 1, CT = "verse-selected";
class xt extends ss {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Bp, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-verse";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new xt(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => MT(t) ? {
        conversion: ST,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Dc().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ta, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Sn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Ta, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? $t(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Os + this.getNumber() + Os
    );
    return C(vT, { nodeKey: this.getKey(), text: t });
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
      version: Vp
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (op(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function vT({ nodeKey: e, text: t }) {
  const [r] = oy(e);
  return C("span", { className: r ? CT : void 0, children: t });
}
function ST(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Dc(t) };
}
function Dc(e, t, r, n, i, s) {
  return Ke(new xt(e, t, r, n, i, s));
}
function MT(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Bp;
}
function Pn(e) {
  return e instanceof xt;
}
function ET(e) {
  return e?.type === xt.getType();
}
function me(e) {
  return Ne(e) || Pn(e);
}
function Wp(e) {
  return Qf(e) || ET(e);
}
function AT(e) {
  return PT(e).find((t) => se(t));
}
function PT(e) {
  return e.some(Xi) ? e.flatMap((t) => Xi(t) ? t.getChildren() : t) : e;
}
function xo(e) {
  return D(e) ? Xi(e) ? e.getChildren().flatMap(xo) : e.getChildren() : [];
}
function NT(e, t) {
  return xo(e).find((i) => me(i) && Mc(t, i.getNumber()));
}
function OT(e, t) {
  return t === 0 ? AT(e) : e.map((r) => NT(r, t)).filter((r) => r)[0];
}
function Ks(e) {
  return xo(e).find((r) => me(r));
}
function Hp(e, t) {
  if (!D(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (me(i))
      return i;
  }
}
function wT(e) {
  const t = e.getParent();
  if (t && D(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (me(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !We(r); ) {
    const n = Ks(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function $a(e) {
  return xo(e).findLast((t) => me(t));
}
function qT(e) {
  if (!Ne(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function RT(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && D(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function $T(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return RT(t, e, r);
  if (M(e)) {
    const n = qT(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function bu(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function IT(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!N(t))
    return bu(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return $T(e, t) ? { verseNum: n } : bu(e);
}
function LT(e) {
  return Kb(e) || Pn(e);
}
function Uc(e) {
  if (M(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(w) && e.setTextContent(`${t} `);
  }
}
function Gp(e) {
  if (M(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Jp(e, t) {
  return e.getEditorState().read(() => !re(t));
}
function DT(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Fc(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && D(i) && D(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && D(i)) {
      const s = i.getChildren(), o = r.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (me(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = ku(i);
      for (; s && !We(s); ) {
        const o = Ks(s);
        if (o) {
          n = o;
          break;
        }
        s = ku(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = Ks(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && We(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function UT(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Fc(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && D(i) && (n = Hp(i, r.getIndexWithinParent())), !n && i) {
      let o = Tu(i);
      for (; o && !We(o); ) {
        const a = $a(o);
        if (a) {
          n = a;
          break;
        }
        o = Tu(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !We(s); ) {
      const o = $a(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function ku(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function Tu(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function Fc(e, t) {
  if (D(e) && N(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && me(n))
      return n;
    const i = Hp(e, t.anchor.offset);
    if (i)
      return i;
    const s = Ks(e);
    if (s)
      return s;
  }
  return zc(e);
}
function zc(e) {
  if (!e || We(e))
    return;
  if (me(e))
    return e;
  let t = tu(e);
  for (; t; ) {
    if (We(t))
      return;
    if (me(t))
      return t;
    const r = $a(t);
    if (r)
      return r;
    t = tu(t);
  }
}
const FT = ["style"], zT = ["style", "code"], js = ["style", "cid"], KT = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], jT = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], BT = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], VT = ["style", "caller", "category", "contents"], WT = ["tag", "marker", "contents"], HT = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Qi = `
`;
function GT(e, t) {
  const r = re(e);
  if (!Mt(r))
    return;
  const n = Yp(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function Yp(e, t = "delta-doc") {
  if (!e)
    return;
  const r = uf();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (ei(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      ei(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (br(l) || Mt(l))
        return n;
      vt(l) && (a = l);
    }
    if (vt(l) && (i.includes(l) || i.push(l)), Xp(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += Kc(l, t);
  }
  if (a)
    return n;
}
function xu(e, t, r = "delta-doc") {
  if (e.length < 2 || !XT(e[0]) || !YT(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => JT(n, r)?.getKey());
}
function JT(e, t = "delta-doc") {
  const r = uf();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (ei(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      ei(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (vt(a) && (i.includes(a) || i.push(a)), Xp(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = Kc(a, t);
    if (br(a) && l > 0 && e >= n && e < n + l || Mt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function ei(e, t) {
  return e ? t ? !Ds(t.node, e.getKey()) : !0 : !1;
}
function br(e) {
  return M(e) && !Mt(e);
}
function Mt(e) {
  return We(e) || me(e) || je(e) || j(e) || Le(e) || Hr(e);
}
function $r(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function YT(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && HT.includes(t);
}
function XT(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Xp(e, t) {
  return j(e) || Le(e) ? !0 : t === "apply" && D(e) && Mt(e);
}
function Qp(e) {
  const t = e.getParent();
  return Dt(e) && se(t) && t.getFirstChild() === e;
}
function Ia(e) {
  const t = e.getParent();
  return t !== null && nt(t, Be) !== null;
}
function QT(e) {
  const t = e.getParent();
  return $(t) && e.getTextContent() === It && t.getChildrenSize() === 1;
}
function ZT(e) {
  const t = e.getParent();
  if (!j(t))
    return !1;
  const r = e.getPreviousSibling();
  return P(r) && r === t.getFirstChild() && e.getTextContent() === St(t.getCaller());
}
function _u(e) {
  return !Ap(e) && Kc(e, "delta-doc") === e.getTextContentSize();
}
function Kc(e, t) {
  if (Mt(e))
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
    (fo(e) || Qp(e) || ne(e, oe) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ne(e, oe) === "attribute" || Ia(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(mc) || QT(e) || ZT(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function La(e, t) {
  const r = { insert: e.__text }, n = ne(e, Fr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Zp(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function Cu(e) {
  const t = new Hn();
  return e.isEmpty() || e.read(() => {
    const r = Ue();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && ir(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = ex();
    for (const s of i)
      t.push(s);
  }), t;
}
function jc(e, t) {
  const r = [], n = si(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...vu(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...vu(c, n.length, n, i, s, o, a));
  return r;
}
function ex() {
  return jc();
}
function vu(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return tx(e, a, n), rx(e, a, i, s, o), nx(e, t, r, i, o, s, a), We(e) && a.push(ax(e)), me(e) && a.push(lx(e)), je(e) && a.push(ux(e)), Hr(e) && a.push(dx(e)), sx(e, a, s), ix(e, a, s), gx(c, s), a;
}
function tx(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    Tt(n) ? t.push(ox(n)) : se(n) ? t.push(cx(n)) : ir(n) && t.push({ insert: Qi });
  }
  vt(e) && (r.includes(e) || r.push(e));
}
function rx(e, t, r, n, i) {
  if (!M(e) || Ne(e) || Hr(e))
    return;
  const s = e.getParent();
  if (j(s) && s.getFirstChild() === e)
    return;
  const o = Ht(e) !== void 0;
  if (P(e) && (o || Qp(e) || Ia(e) || Ap(e)) || ne(e, oe) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (oi(a))
    return;
  const c = e.getPreviousSibling();
  if (j(s) && P(c) && c === s.getFirstChild() && a === St(s.getCaller()))
    return;
  const l = $(s) ? s : void 0, u = l?.getFirstChild();
  o && l && P(u) && c === u && a.startsWith(w) && (a = a.slice(1));
  const d = a.startsWith(mc) || ne(e, oe) === "attribute" || Ia(e), f = !!l && a === It && l.getChildrenSize() === 1, p = _o(e, n), m = p ? r.filter((T) => p.children.includes(T)) : r, g = La(e, m);
  if (g.insert = a, p) {
    if (!a || a === w || d)
      return;
    p.contentsOps?.push(g);
  } else
    f || d || t.push(g);
  const y = a !== "" && !f && !(d && l);
  if (r.length > 0 && y)
    for (const T of r)
      i.add(T);
}
function nx(e, t, r, n, i, s, o) {
  $(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (ei(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = px(c), u = _o(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function ix(e, t, r) {
  if (!j(e))
    return;
  const n = fx(e), i = _o(e, r), s = {
    node: e,
    children: si(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function sx(e, t, r) {
  if (!Le(e))
    return;
  const n = hx(e), i = _o(e, r), s = {
    node: e,
    children: si(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Gr(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function ox(e) {
  const t = { style: Bi, code: e.__code };
  return Gr(t, e), { insert: Qi, attributes: { book: t } };
}
function ax(e) {
  const t = { style: Is, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Gr(t, e), { insert: { chapter: t } };
}
function cx(e) {
  const t = { style: e.__marker };
  return Gr(t, e), { insert: Qi, attributes: { para: t } };
}
function lx(e) {
  const t = { style: Ls, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Gr(t, e), { insert: { verse: t } };
}
function ux(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), Gr(t, e), { insert: { milestone: t } };
}
function dx(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function fx(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), Gr(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ne(e, Fr);
  return n && (r.attributes = { segment: n }), r;
}
function px(e) {
  const t = { insert: "" }, r = Zp([e]);
  return r && (t.attributes = { char: r }), t;
}
function hx(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), Gr(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function _o(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function gx(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    ei(t[r].node, e) && t.splice(r, 1);
}
function Zp(e) {
  if (e.length === 0)
    return;
  const t = e.map(mx);
  return t.length === 1 ? t[0] : t;
}
function mx(e) {
  const t = { style: e.__marker }, r = ne(e, gn);
  return r && (t.cid = r), Gr(t, e), t;
}
const eh = 1;
class Bt extends ss {
  __caller;
  __previewText;
  __onClick;
  constructor(t = ws, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new Bt(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => bx(t) ? {
        conversion: yx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Bc().updateFromJSON(t);
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
    return r && Sn(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => kx(t, n), (l) => Tx(t, n, s, l), () => xx(t, n), () => _x(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return C("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === ws && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === kf && i ? (
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
      version: eh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function yx(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: Bc(t, r) };
}
function Bc(e, t, r) {
  return Ke(new Bt(e, t, r));
}
function bx(e) {
  return e ? e.classList.contains(Bt.getType()) : !1;
}
function cr(e) {
  return e instanceof Bt;
}
function kx(e, t) {
  return e.getEditorState().read(() => {
    const r = re(t);
    if (!j(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function Tx(e, t, r, n) {
  e.update(() => {
    const i = re(t);
    if (!j(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = re(r);
    if (!cr(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function xx(e, t) {
  return e.getEditorState().read(() => {
    const r = re(t);
    if (!j(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return jc(r);
  });
}
function _x(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of si())
      if (j(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const Cx = [
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
], vx = ["†"];
function Vc(e) {
  if (rh())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = Su(t), [s, o] = Su(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = Mu(n, i), [s, o] = Mu(s, o);
  const a = dc();
  return a.anchor = zl(n.getKey(), i, Eu(n)), a.focus = zl(s.getKey(), o, Eu(s)), a;
}
function th() {
  if (rh())
    return;
  const e = R();
  if (!e || !N(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Ii(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Ii(i, s);
  return { start: n, end: o };
}
function Su(e) {
  if (Rm(e)) {
    const t = Jd(e.jsonPath);
    let r = Ue();
    for (let n = 0; n < t.length; n++) {
      if (!r || !D(r))
        return [void 0, void 0];
      const i = ai(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : rk(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && D(r) ? [r, nk(r, e.offset)] : [void 0, void 0];
  }
  if ($m(e) || Im(e)) {
    const t = Ci(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (D(t)) {
      const n = t.getLastChild();
      if (n && M(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && D(r) ? [r, 0] : [void 0, void 0];
  }
  if (Lm(e)) {
    const t = Ci(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (D(t)) {
      const n = t.getLastChild();
      if (n && M(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && D(r) ? [r, 0] : [void 0, void 0];
  }
  if (Dm(e)) {
    const t = Ci(e.jsonPath);
    if (!t || !D(t))
      return [void 0, void 0];
    const r = Zo(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && M(n) ? [n, 0] : [void 0, void 0];
  }
  if (Um(e)) {
    const t = Ci(e.jsonPath);
    if (!t || !D(t))
      return [void 0, void 0];
    const r = Zo(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && M(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (Fm(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = Ci(e.jsonPath);
    if (!n || !D(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = Zo(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && M(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${zm(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Mu(e, t) {
  if (!Cr(e))
    return [e, t];
  const r = e.getTextContent().length;
  if (t < 0 || t >= r)
    return [e, t];
  const n = e.getParent();
  if (!n || !D(n))
    return [e, t];
  const i = e.getIndexWithinParent();
  return i < 0 ? [e, t] : [n, i];
}
function Eu(e) {
  return D(e) ? "element" : "text";
}
function Zo(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (P(n) && n.getMarkerSyntax() === t || t === "closing" && P(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (Cr(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function Ci(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = Jd(r);
  let i = Ue();
  for (const s of n) {
    if (!i || !D(i))
      return;
    const o = ai(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Ii(e, t) {
  if (P(e)) {
    const r = e.getMarkerSyntax(), n = Sx(e), i = n ? en(on(n)) : en(on(e));
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
  if (Te(e)) {
    const r = e.getChildrenSize(), n = e.getChildAtIndex(Math.min(t, r - 1));
    if (M(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return Ii(n, s);
    }
    const i = ho(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return Ii(i, o);
    }
  }
  if (D(e)) {
    const r = e.getChildAtIndex(t);
    if (Cr(r))
      return {
        jsonPath: en(on(e))
      };
    const n = up(e, t);
    return n.type === "text" ? {
      jsonPath: en([...on(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: en(on(e)),
      offset: n.index
    };
  }
  if (fo(e)) {
    let r = e, n = r.getParent();
    for (; Te(n); )
      r = n, n = n.getParent();
    if (n)
      return Ii(n, r.getIndexWithinParent());
  }
  if (M(e)) {
    const r = tk(e, t);
    if (r)
      return {
        jsonPath: en([
          ...on(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: en(on(e)), offset: t };
}
function Sx(e) {
  const t = e.getParent();
  if (!t || !D(t))
    return;
  const r = Mx(e);
  return r && !vt(r) && !M(r) && !Te(r) ? r : t;
}
function Mx(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Ec(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function on(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = ho(r);
    if (!n)
      break;
    const i = ek(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function rh() {
  for (let e = Ue().getFirstChild(); e; e = e.getNextSibling())
    if (Xi(e))
      return !0;
  return !1;
}
function nh(e, t, r, n, i, s, o) {
  if (!Me.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Vc(r) : R();
  if (!N(a))
    return;
  const c = Px(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (Ni(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = ih(e, l, c, i, s, void 0, void 0);
  return Ax(u, a, i), u;
}
function Wc(e) {
  return e !== "expanded";
}
function Ex(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!M(r) || !$(r.getParent()))
    return;
  if (P(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return P(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function Ax(e, t, r) {
  const n = Wc(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Wb(t), Kp(t);
  const i = Ex(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find($)?.selectEnd();
}
function zn(e, t, r) {
  const n = yr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(ot(e)) : r?.markerMode === "visible" && n.append(mr("marker", Oe(e)));
  const s = t === "" ? It : i ? w + t : t;
  return n.append(he(s)), n;
}
function Px(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(zn("fr", f, n)), !e.isCollapsed()) {
        const p = Pu(e);
        p.length > 0 && o.push(zn("fq", p, n));
      }
      o.push(zn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(zn("xo", f, n)), !e.isCollapsed()) {
        const p = Pu(e);
        p.length > 0 && o.push(zn("xq", p, n));
      }
      o.push(zn("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function ih(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : Wc(n?.noteMode), l = kc(e, t, c);
  s && mt(l, Fr, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = ot(e), u && d.setMode("token"), a || (f = ot(e, "closing"))) : n?.markerMode === "visible" && (d = mr("marker", Oe(e) + " "), a || (f = mr("marker", rt(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = he(St(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const m = () => po(), g = r.flatMap(Ox(m));
    if (t === "")
      l.append(...g);
    else {
      const y = vc(r);
      let T = () => {
      };
      i?.noteCallerOnClick && (T = i.noteCallerOnClick), p = Bc(l.__caller, y, T), l.append(p, m(), ...g);
    }
  }
  return f && l.append(f), l;
}
function Au(e) {
  if (typeof e == "string") {
    const i = re(e);
    return j(i) ? i : void 0;
  }
  const t = si();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => j(i.node))[e]?.node;
  if (j(n))
    return n;
}
function Nx(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (Pn(n) || !n) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      n.selectEnd();
  } else
    e.getChildren().reverse().find($)?.selectEnd();
}
function Ox(e) {
  return (t) => Wt(t) ? [t] : [t, e()];
}
function wx(e) {
  const t = e.getParent();
  return t !== null && nt(t, j) !== null;
}
function Pu(e) {
  if (!N(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Xd(e);
  let a = "";
  for (const c of t)
    if (!(j(c) || cr(c) || wx(c)) && !P(c) && !Hr(c) && ne(c, oe) !== "attribute") {
      if (me(c)) {
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
const sh = [
  Bt,
  xt,
  ...TT
], qx = [
  ui,
  ...sh
], Rx = vn((e, t) => {
  const { coords: r, children: n, style: i, ...s } = e, o = r !== void 0;
  return C("div", { ref: t, className: "floating-box", "aria-hidden": !o, style: {
    ...i,
    position: "absolute",
    zIndex: 1e3,
    top: r?.y,
    left: r?.x,
    visibility: o ? "visible" : "hidden",
    opacity: o ? 1 : 0
  }, ...s, children: n });
});
function $x() {
  const [e, t] = de(void 0), [r, n] = de(), i = X(null), s = ge((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = my(l, c, () => {
      yy(l, c, {
        placement: "bottom-start",
        middleware: [by(), ky()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = ge(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return K(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function Ix({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = $x();
  return K(() => {
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
const Lx = Am(Rx);
function oh({ isOpen: e = !1, children: t }) {
  const r = X(null), { coords: n, placement: i } = Ix({ isOpen: e, floatingBoxRef: r }), s = Fe(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return un(
    C(Lx, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const ah = Hd(void 0);
function Hc() {
  const e = Gd(ah);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function Dx(e, t) {
  const [r, n] = de(0), [i, s] = de(-1), o = Fe(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = ge(() => {
    n((d) => {
      const f = o.length;
      return f ? (d - 1 + f) % f : 0;
    });
  }, [o.length]), l = ge(() => {
    n((d) => {
      const f = o.length;
      return f ? (d + 1) % f : 0;
    });
  }, [o.length]), u = ge(() => {
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
function Ux({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = Dx(t, r);
  return C(ah.Provider, { value: i, children: C("div", { ...n, children: e }) });
}
const ch = vn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Hc(), u = ge((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = ge((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return C("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function Fx({ children: e, autoIndex: t = !0, ...r }) {
  const n = X(null), { state: { activeIndex: i, menuItems: s } } = Hc(), o = Fe(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Fe(() => {
    const c = o(s);
    return t ? Pm.map(c, (l, u) => Nm(l) && l.type === ch && l.props.index === void 0 ? Om(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return K(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), C("div", { ref: n, role: "menu", ...r, children: a });
}
const zx = (e, t, r) => Ms(e, r).toLowerCase().includes(t.toLowerCase()), Nu = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Ms = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function Kx(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? Nu(r[0]) : "") : (u = n || (r.length > 0 ? Nu(r[0]) : ""), d = (m, g) => zx(m, g, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((m) => {
    try {
      return d(m, t);
    } catch (g) {
      return console.warn("Error filtering item:", m, g), !1;
    }
  }).sort((m, g) => {
    const y = (v) => (p.has(v) || p.set(v, Ms(v, f).toLowerCase()), p.get(v) ?? ""), T = a ? Ms(m, f) : y(m), S = a ? Ms(g, f) : y(g);
    for (const v of c)
      switch (v) {
        case "exact":
          if (T === l && S !== l)
            return -1;
          if (S === l && T !== l)
            return 1;
          break;
        case "startsWith":
          if (T.startsWith(l) && !S.startsWith(l))
            return -1;
          if (S.startsWith(l) && !T.startsWith(l))
            return 1;
          break;
        case "contains": {
          const E = T.indexOf(l), A = S.indexOf(l);
          if (E !== -1 && A === -1)
            return -1;
          if (A !== -1 && E === -1)
            return 1;
          if (E !== -1 && A !== -1)
            return E - A;
          break;
        }
      }
    return T.localeCompare(S);
  });
}
const ea = {
  Root: Ux,
  Options: Fx,
  Option: ch
};
function jx(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Fe(() => Kx({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function Bx() {
  const { moveUp: e, moveDown: t, select: r } = Hc();
  return Fe(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const Vx = () => {
  const e = Bx(), [t] = le();
  K(() => {
    const r = (n) => {
      const s = {
        ArrowDown: () => e?.moveDown(),
        ArrowUp: () => e?.moveUp(),
        Enter: () => e?.select(),
        Tab: () => e?.select()
      }[n.key];
      return s ? (s(), n.preventDefault(), n.stopPropagation(), !0) : !1;
    };
    return t.registerCommand(Tr, r, Ie);
  }, [t, e]);
};
function Wx() {
  return Vx(), null;
}
const Hx = ["Shift", "Control", "Alt", "Meta"];
function lh(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = le(), u = s !== void 0, [d, f] = de(""), p = u ? s ?? "" : d, m = jx({ query: p, items: t, filterBy: "name" }), g = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return K(() => {
    a?.(p, m);
  }, [a, p, m]), K(() => l.registerCommand(Tr, (y) => {
    if (u || c?.includes(y.key) || Hx.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const S = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((v) => v.slice(0, -1));
      }
    }[y.key];
    return S ? (y.stopPropagation(), y.preventDefault(), S(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((v) => v + y.key), !0) : !1;
  }, Ie), [l, u, p, o, n, c]), xe(ea.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: m, onSelectOption: (y) => g(y), children: [!u && C("input", { value: p, type: "text", disabled: !0 }), C(Wx, {}), C(ea.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((S, v) => xe(ea.Option, { index: v, children: [C("span", { className: "label", children: S.label ?? S.name }), C("span", { className: "description", children: S.description })] }, S.name)) })] });
}
function Gx({ trigger: e, items: t }) {
  const [r] = le(), [n, i] = de(!1), s = ge((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return K(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), K(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = R();
      if (N(l))
        return l;
    });
    a.read(() => {
      const l = R();
      !N(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && C(oh, { isOpen: n, children: ({ placement: o }) => C(lh, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function Jx({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: Fe(() => {
    if (!t || !e)
      return;
    const i = nr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = nr(o), { action: c } = r(o, a);
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
function Li(e, t) {
  return `${e}:${t}`;
}
function Yx(e, t) {
  K(() => {
    if (!e.hasNodes([Ze]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Xe(df(e, Ze, (n) => ji(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], m = a[l]?.[d], g = c[l]?.[d];
          i.addID(l, d, f, p, m, g);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(Ze, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = re(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : Te(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!Ze.isReservedType(c))
              for (const u of l) {
                let d = t.get(Li(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Li(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Li(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const Xx = vn(function({ logger: t }, r) {
  const [n] = le(), i = Fe(() => /* @__PURE__ */ new Map(), []);
  Yx(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Li(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = re(u);
        Te(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && $s(d));
      }
  };
  return lc(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (Ze.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = Vc(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), $f(p, a, c, l, u, d, f);
      }, { tag: xa });
    },
    removeAnnotation(o, a) {
      if (Ze.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Li(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: xa });
    }
  })), null;
}), Qx = [];
function Zx({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = Qx, onChange: n }) {
  const [i] = le();
  return is(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(Qd) && !u.has(_f) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = e_(i, s);
        d.length !== 0 && n(o, i, u, d);
      });
  }, [i, e, t, r, n]), null;
}
function Ou(e) {
  return new Hn(e.ops.filter((t) => t.insert !== ""));
}
function e_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Hn();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = re(i), o = s !== null && Ht(s) !== void 0, a = r.read(() => {
      const c = re(i);
      return c === null || M(c) && _u(c);
    });
    if (t.size === 1 && M(s) && !o && a && _u(s)) {
      const c = Yp(s);
      if (c !== void 0) {
        const l = r.read(() => {
          const f = re(i);
          return new Hn([M(f) ? La(f) : { insert: "" }]);
        }), u = new Hn([La(s)]), d = new Hn(c > 0 ? [{ retain: c }] : []);
        n = n.concat(d).concat(l.diff(u));
      }
    } else {
      const c = Ou(Cu(r)), l = Ou(Cu(e.getEditorState()));
      n = c.diff(l);
    }
  }), n.ops;
}
const Gc = "formatted", uh = "unformatted", dh = "paragraph-structure", fh = "standard", ph = "block-verse", t_ = {
  [Gc]: "Formatted",
  [uh]: "Unformatted",
  [dh]: "Paragraph Structure",
  [fh]: "Standard",
  [ph]: "Block Verse"
};
function di(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Jc, Yc;
function r_(e) {
  const t = hh(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Jc = e, Yc = t;
}
r_(Gc);
const SA = () => Jc, Co = () => Yc;
function hh(e) {
  let t;
  switch (e ?? Jc) {
    case Gc:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case uh:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case dh:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case fh:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case ph:
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
function MA(e) {
  if (!e)
    return;
  const t = wu(e);
  return Object.keys(t_).find((r) => Pt(wu(hh(r)), t));
}
const n_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function wu(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...n_, ...t };
}
function vo(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function i_(e) {
  if (e)
    return Zi(e) ? xt : e.markerMode === "editable" ? ft : xt;
}
function Zi(e) {
  return e?.verseLayout === "block";
}
function s_(e) {
  const t = [], r = e ?? Yc;
  return r && (t.push(`${qy}${r.markerMode}`), r.hasSpacing && t.push(Oy), r.isFormattedFont && t.push(wy)), t;
}
function o_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += a_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), l_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += u_(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), f_(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function a_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), c_(t, e.retain, e.attributes, r, n)), e.retain);
}
function c_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Ue();
  function l(u) {
    if (s <= 0)
      return !0;
    if (br(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), p = d - f, m = Math.min(s, p);
        if (m > 0) {
          let g = u;
          const y = f > 0, T = m < d - f;
          if (y && T) {
            const [, S] = u.splitText(f);
            [g] = S.splitText(m);
          } else y ? [, g] = u.splitText(f) : T && ([g] = u.splitText(m));
          if (Kr(r)) {
            const S = g.getParent();
            if ($(S)) {
              const v = r.char;
              let E;
              Array.isArray(v) ? a >= 0 && a <= v.length - 1 && (E = v[a]) : a === 0 && (E = v);
              const A = E ? mn(E, S) : !1;
              if (A && Array.isArray(v) && v.length > 1) {
                const x = he("");
                g.replace(x);
                const F = typeof r.segment == "string" ? r.segment : void 0, L = fi(v.slice(1), n, g, F);
                let G = x;
                for (const V of L)
                  G.insertAfter(V), G = V;
                x.remove(), Nt(r, g);
              } else if (A)
                Nt(r, g);
              else {
                g.remove();
                const x = qu(g, r, n, i);
                if (x && x.length > 0) {
                  let F = S;
                  for (const L of x)
                    F.insertAfter(L), F = L;
                }
              }
            } else {
              const v = he("");
              g.replace(v);
              const E = qu(g, r, n, i);
              if (E && E.length > 0) {
                let A = v;
                for (const x of E)
                  A.insertAfter(x), A = x;
                v.remove();
              } else
                v.replace(g);
            }
          } else
            Nt(r, g);
          s -= m;
        }
      }
      o += d;
    } else if (Mt(u))
      e <= o && o < e + t && s > 0 && (Ru(u, r), s -= 1), o += 1;
    else if ($(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (Kr(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            Da(u, p.style), typeof p.cid == "string" && mt(u, gn, () => p.cid);
            const m = De(p, js);
            m && Object.keys(m).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...m
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || x_(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && ka(u), !0;
        }
      }
      d && ka(u), a -= 1;
    } else if (vt(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!ir(u))
          Ru(u, r);
        else if (Xc(r)) {
          const p = yh(r.para, n);
          p && u.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if (D(u)) {
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
function qu(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = fi(t.char, r, e, i), o = s.find($);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Nt(t, e);
    return;
  }
  const a = {};
  xh.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Nt(t, e), s;
}
function gh(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  P(r) ? (r.setMarker(t), r.setTextContent(Oe(t))) : Wt(r) && r.getTextType() === "marker" && r.setTextContent(Oe(t) + w);
}
function Da(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    P(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = $(e.getParent()), i = e.getFirstChild();
  Wt(i) && i.getTextType() === "marker" && i.getTextContent() === Oe(r, n) && i.setTextContent(Oe(t, n));
  const s = e.getLastChild();
  Wt(s) && s.getTextType() === "marker" && s.getTextContent() === rt(r, n) && s.setTextContent(rt(t, n));
}
function Ru(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && $(e) && Kr(t)) {
      const i = Ua(n);
      if (Da(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        mt(e, gn, () => o);
      }
      const s = De(i, js);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (We(e) || me(e) || je(e) || j(e) || Le(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (Tt(e) || se(e) || $(e)) && (r === "style" && se(e) ? gh(e, n) : r === "style" && $(e) ? Da(e, n) : r === "code" && Tt(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && mt(e, Fr, () => n));
  }
}
function l_(e, t, r) {
  if (t <= 0)
    return;
  const n = Ue();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (br(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (Mt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (vt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && vt(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(jt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Ce(p)) {
            let m = i + 1;
            const g = p.getChildren();
            for (const T of g) {
              if (s <= 0)
                break;
              const S = i;
              if (i = m, o(T)) {
                i = S;
                break;
              }
              br(T) ? m += T.getTextContentSize() : Mt(T) && (m += 1), i = S;
            }
            const y = p.getChildren();
            for (const T of y)
              T.remove(), a.append(T);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(jt(), !0);
        } else se(a) ? a.replace(jt(), !0) : a.remove();
      }
      i += 1;
    } else if (D(a)) {
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
function u_(e, t, r, n, i) {
  if (t === Qi)
    return $u(e, r, n, i);
  if (t.endsWith(Qi) && !Xc(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Kr(r))
        throw new Error("Text + LF should not have char attributes");
      o += Bs(e, s, r, i);
    }
    return o += $u(e + o, r, n, i), o;
  } else return Kr(r) ? d_(e, t, r, n, i) : Bs(e, t, r, i);
}
function d_(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = he(t === "" ? It : t);
  Nt(r, s);
  let o;
  {
    let y = function(T) {
      if (br(T)) {
        const S = T.getTextContentSize();
        if (e >= g && e < g + S) {
          const v = T.getParent();
          return $(v) && (o = v), !0;
        }
        g += S;
      } else if (Mt(T))
        g += 1;
      else if ($(T)) {
        const S = T.getChildren();
        for (const v of S)
          if (y(v))
            return !0;
      } else if (D(T)) {
        const S = T.getChildren();
        for (const v of S)
          if (y(v))
            return !0;
        vt(T) && (g += 1);
      }
      return !1;
    };
    const m = Ue();
    let g = 0;
    y(m);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const m = a[0];
      m && mn(m, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (mn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = fi(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find($);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Bs(e, t, void 0, i);
  const f = {};
  for (const [m, g] of Object.entries(r))
    m !== "char" && m !== "segment" && typeof g == "string" && (f[m] = g);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const m of u)
    if (!mh(e, m, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Bs(e, t, void 0, i));
}
function Bs(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Ue();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (br(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = he(t);
        if (Nt(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          $(f) && !Kr(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Mt(c))
      s += 1;
    else if ($(c)) {
      if (!o && e === s) {
        const d = he(t);
        Nt(r, d);
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
        const d = he(t);
        return Nt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (vt(c)) {
      if (!o && e === s) {
        const d = he(t);
        Nt(r, d);
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
        const d = he(t);
        return Nt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (D(c)) {
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
    const c = he(t);
    Nt(r, c);
    const l = jt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function mh(e, t, r) {
  const n = Ue();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(jt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!D(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (Ce(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(jt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (br(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (Mt(l))
        i += 1;
      else if ($(l)) {
        if (o(l))
          return !0;
      } else if (vt(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (ir(u) && vt(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (D(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return D(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(jt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Ce(a) ? ir(a) && se(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Ce(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : ($(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Ce(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function f_(e, t, r, n, i) {
  let s;
  return $r("chapter", t) ? s = h_(t.insert.chapter, r) : $r("verse", t) ? s = g_(t.insert.verse, r) : $r("ms", t) ? s = m_(t.insert.ms) : $r("note", t) ? s = bh(t, r, n, i) : $r("unknown", t) ? s = kh(t, r, n, i) : $r("unmatched", t) && (s = b_(t.insert.unmatched, r)), s ? mh(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function $u(e, t, r, n) {
  let i;
  Xc(t) ? i = yh(t.para, r) : T_(t) && (i = p_(t.book)), i ??= jt();
  const s = i, o = se(s), a = ir(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (br(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (se(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const m = e - c, [g] = m > 0 ? d.splitText(m) : [void 0];
          let y, T = g?.getPreviousSibling();
          for (; T; ) {
            const S = T;
            T = T.getPreviousSibling(), y ? y.insertBefore(S) : s.append(S), y = S;
          }
          return g && s.append(g), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Mt(d))
      c += 1;
    else if (vt(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (ir(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (se(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && se(d) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${d.getMarker()}) at targetIndex ${e}`), d.insertAfter(s), l = !0, !0;
    } else if (D(d)) {
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
  return u(Ue()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function p_(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Bi || !r || !Lt.isValidBookCode(r))
    return;
  const n = De(e, zT);
  return Df(r, n);
}
function yh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = De(e, FT), i = Vi(r, n);
  if (!di(t))
    return i;
  if (t.markerMode === "editable")
    i.append(ot(r), po());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Oe(r) + w;
    i.append(t.hasGutterParaMarkers ? cb(s) : mr("marker", s));
  }
  return i;
}
function h_(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = De(e, KT);
  let a;
  if (t.markerMode === "editable")
    a = zf(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = _c(r, c, n, i, s, o);
  }
  return a;
}
function g_(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = De(e, jT);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = $t(r, n);
    c = Xf(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Dc(n, l, i, s, o, a);
  }
  return c;
}
function m_(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = De(e, BT);
  return Sf(t, r, n, s, i);
}
function bh(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = De(i.note, VT), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const g of c?.ops ?? [])
    if (typeof g.insert == "string")
      if (Kr(g.attributes)) {
        const y = fi(g.attributes.char, t, he(g.insert), void 0, Th(g.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(he(g.insert));
  return ih(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function kh(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = De(i, WT), l = xc(s, o, c), u = a?.ops ?? [];
  u.length > 0 && y_(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && mt(l, Fr, () => d), l;
}
function y_(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Kr(s.attributes)) {
        const o = he(s.insert), a = fi(s.attributes.char, t, o, void 0, Th(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(he(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if ($r("unknown", s)) {
        const o = kh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if ($r("note", s)) {
        const o = bh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function b_(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = qc(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Th(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Ua(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function fi(e, t, r, n, i, s = !1, o = !1) {
  M(r) && r.getTextContentSize() === 0 && r.setTextContent(It);
  const a = () => {
    o && M(r) && r.getTextContent() !== It && r.setTextContent(w + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Ua), l = c[0], u = i?.[i.length - 1];
    if ($(u) && mn(l, u))
      return c.length > 1 ? fi(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, p, m) => {
      const g = yr(p.style, De(p, js));
      if (typeof p.cid == "string" && mt(g, gn, () => p.cid), n && m === c.length - 1 && mt(g, Fr, () => n), f)
        if ($(f)) {
          const y = f.getMarker(), T = [];
          ra(y, T, t, !0), T.forEach((v) => g.append(v)), g.append(f);
          const S = [];
          ta(f, S, t, !0), S.forEach((v) => g.append(v));
        } else
          g.append(f);
      return g;
    }, r);
    return ra(l.style, d, t, s), ta(d, d, t, s), [d];
  } else {
    const c = Ua(e), l = i?.[i.length - 1];
    if ($(l) && mn(c, l))
      return r && l.append(r), [];
    a();
    const u = yr(c.style, De(c, js));
    return typeof c.cid == "string" && mt(u, gn, () => c.cid), n && mt(u, Fr, () => n), r && u.append(r), ra(c.style, u, t, s), ta(u, u, t, s), [u];
  }
}
function ta(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && k_(e.getMarker(), t, r, !1, n);
}
function ra(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = ot(e, "opening", n) : r?.markerMode === "visible" && (i = mr("marker", Oe(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function k_(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = ot("", "selfClosing") : s = ot(e, "closing", i) : r?.markerMode === "visible" && (s = mr("marker", n ? rt("") : rt(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function T_(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Xc(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Kr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function x_(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Nt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        mt(t, Fr, () => n);
        continue;
      }
      if (__(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const xh = [
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
function __(e) {
  return xh.includes(e);
}
function C_() {
  const [e] = le();
  return K(() => e.registerCommand(io, (t) => (v_(t), !1), fn), [e]), null;
}
function v_(e) {
  if (S_(e.target))
    return;
  const t = R();
  N(t) && M_(t);
}
function pi(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Dt(t))
      r++, t = t.getNextSibling(), M(t) && t.getTextContent() === w && (r++, t = t.getNextSibling());
    else if (me(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Gt(e, r), !0);
}
function S_(e) {
  if (!Zd(e))
    return !1;
  const t = cs(e);
  if (!lb(t))
    return !1;
  const r = t.getParent();
  return r ? Ce(r) ? pi(r) : (Gt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function M_(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = re(t.key);
  if (!Ce(r))
    return !1;
  const n = r.getFirstChild();
  return !Cr(n) && !Pn(n) ? !1 : pi(r);
}
function E_() {
  const [e] = le();
  return K(() => {
    const t = (r) => r instanceof KeyboardEvent && !A_(r) || !_h() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Xe(
      e.registerCommand(Tr, t, Ie),
      e.registerCommand(fc, t, Ie),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm records what a cut would cover
      // and claims nothing, so either order of the two is correct: with no removal, nothing it
      // armed can be reaped.
      e.registerCommand(dr, t, fr),
      e.registerCommand(pn, t, fr),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(pc, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = cs(r.target);
        return !n || !Tn(n) ? !1 : (r.preventDefault(), !0);
      }, Ie),
      e.registerCommand(Bm, t, Ie),
      e.registerCommand(Vm, t, Ie),
      e.registerCommand(Wm, t, Ie)
    );
  }, [e]), null;
}
function A_(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Tn(e) {
  return nt(e, (t) => Le(t) || qp(t)) ?? void 0;
}
function _h() {
  const e = R();
  return N(e) ? Tn(e.anchor.getNode()) !== void 0 || Tn(e.focus.getNode()) !== void 0 : !1;
}
function P_(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function N_(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), P_(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function O_(e, t, r, n) {
  if (!V_(t) || N_(e, r))
    return !1;
  const i = r === "up" ? UT(t) : DT(t);
  return i && n.preventDefault(), i;
}
function w_({ viewOptions: e }) {
  const [t] = le();
  return q_(t, e), null;
}
function q_(e, t) {
  K(() => {
    if (!e.hasNodes([or, xt, Me]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = R();
      if (!N(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = Iu(o), d = F_(i, Lu(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return O_(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = Iu(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Lu(a, n.key) ? l = !c && Fu(i, "next") || !c && $_(i) || j_(i) || !c && s && Uu(i, "next") : R_(a, n.key) && (l = !c && Fu(i, "previous") || !c && I_(i) || B_(i, t) || !c && s && Uu(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Tr, r, Ie);
  }, [e, t]);
}
function Iu(e) {
  return e.dir || "ltr";
}
function Lu(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function R_(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Fa(e) {
  if (!$(e) || e.getMarker() !== "fp")
    return;
  const t = Ht(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function $_(e) {
  const t = Fa(rp(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Gt(t, 0), !0);
}
function I_(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Fa(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Du(n);
  }
  if (t.offset === 0) {
    const n = Fa(r);
    return n ? Du(n) : !1;
  }
  return !1;
}
function Du(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (M(t))
    return t.select(), !0;
  if (D(t)) {
    const i = t.getLastDescendant();
    return M(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const Vs = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function L_(e) {
  if (Vs)
    for (const { segment: r } of Vs.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function D_(e) {
  if (Vs) {
    let n = 0;
    for (const { index: i } of Vs.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Ch(e) {
  for (let t = e; t; t = t.getParent())
    if (D(t) && !t.isInline())
      return t;
}
function vh(e) {
  return !!e && P(e) && Tn(e) !== void 0;
}
function ti(e) {
  return M(e) && !e.isToken() && !vh(e) && e.getTextContentSize() > 0;
}
function Sh(e) {
  return no(e) ? !0 : j(e) ? e.getIsCollapsed() === !0 : M(e) ? (e.isToken() || vh(e)) && e.getTextContentSize() > 0 : ef(e) ? !je(e) : !1;
}
function ri(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function So(e, t, r) {
  for (let n = e; n; ) {
    if (Sh(n))
      return n;
    if (D(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? ri(n, t, r);
      continue;
    }
    if (ti(n))
      return n;
    n = ri(n, t, r);
  }
}
function Qc(e, t, r, n, i) {
  return r === "element" && D(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? ri(e, n, i) : r === "text" && Sh(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : ri(e, n, i);
}
function na(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Qc(e.node, e.offset, e.kind, "previous", t), n = So(r, "previous", t);
  if (!n)
    return e;
  if (ti(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function U_(e, t) {
  const r = e.getNode(), n = Ch(r);
  if (!n)
    return;
  if (e.type === "text" && ti(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return na({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Qc(r, e.offset, e.type, t, n), s = So(i, t, n);
  if (!s)
    return;
  if (ti(s)) {
    const c = s.getTextContent(), l = t === "next" ? L_(c) : D_(c);
    return na({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return na({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function Mh(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = U_(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Uu(e, t) {
  return Mh(e, t, "collapse");
}
function F_(e, t) {
  return Mh(e, t, "extend");
}
function z_(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && ti(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Qc(n, e.offset, e.type, t, r);
  return So(i, t, r) === void 0;
}
function K_(e, t) {
  const r = Ue();
  for (let n = e; n; ) {
    const i = ri(n, t, r), s = i && So(i, t, r);
    if (!s)
      return;
    if (n = Tn(s), !n)
      return s;
  }
}
function Fu(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Tn(n))
    return !1;
  const i = Ch(n);
  if (!i || !z_(r, t, i))
    return !1;
  const s = ri(i, t, Ue()), o = s && Tn(s);
  if (!o)
    return !1;
  const a = K_(o, t);
  if (!a)
    return !0;
  if (ti(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function zu(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function j_(e) {
  const t = e.anchor.getNode(), r = rp(e);
  if (j(r) && !P(r.getFirstChild())) {
    if (Ce(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Ce(i) && pi(i)) && i.selectStart(), !0;
      }
    } else return Wt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Ce(t) && j(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : zu(r), !0;
  }
  const n = r?.getParent();
  if (Wt(r) && j(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? zu(n) : n.selectEnd(), !0;
  }
  return !1;
}
function B_(e, t) {
  const r = jb(e);
  if (ls(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (Tt(i.getParent()))
    return !0;
  if (j(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!Pn(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (Ce(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = nt(o, (c) => j(c));
    if (j(a) && a.getIsCollapsed()) {
      const c = a.getParent();
      if (!c)
        return !1;
      const l = a.getIndexWithinParent();
      return c.select(l, l), !0;
    }
  }
  const s = Ht(i);
  if (!s || s.getIsCollapsed())
    return !1;
  if (cr(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function V_(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return me(t) && ef(t);
}
function W_() {
  const [e] = le();
  return H_(e), null;
}
function H_(e) {
  K(() => {
    if (!e.hasNodes([ye]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Xe(
      e.registerNodeTransform(ye, Y_),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(ye, dk),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(ye, Cp),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(ye, (t) => Yi(yn("char"), t)),
      e.registerNodeTransform(ze, X_)
    );
  }, [e]);
}
function ia(e) {
  return e.getChildren().some(P);
}
function G_(e, t) {
  const r = t.getFirstChild();
  if (!P(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (yo(n)) {
    const i = n.getTextContent();
    i.startsWith(w) && (i === w ? n.remove() : n.setTextContent(i.slice(w.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function J_(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  P(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function Y_(e) {
  if (!$(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (ia(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ne(e, gn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if ($(i) && mn({ style: t, cid: r }, i) && Pt(n, i.getUnknownAttributes()))
    if (ia(i)) {
      if (G_(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  $(s) && mn({ style: t, cid: r }, s) && Pt(n, s.getUnknownAttributes()) && (ia(s) ? J_(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function X_(e) {
  const t = e.getParent();
  if (!$(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(It) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function Eh(e) {
  return e.replaceAll("	", " ");
}
const Zc = (e) => {
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
      n.setData(o, Eh(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(dr, s);
  });
}, el = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", Eh(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(dr, i);
  });
};
function Q_() {
  const [e] = le();
  return K(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Ns ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), e.dispatchCommand(so, null)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), e.dispatchCommand(pn, null)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? el(e) : Zc(e)));
    };
    return e.registerRootListener((r, n) => {
      n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
    });
  }, [e]), null;
}
function Z_({ logger: e }) {
  const [t] = le();
  return K(() => Xe(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Tr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Gn),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(dr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Gn),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(pc, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Gn)
  ), [t, e]), null;
}
function eC({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), C("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: C("span", { className: "text", children: i.title }) });
}
function tC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return C("div", { className: "typeahead-popover", children: C("ul", { children: e.map((i, s) => C(eC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let rC = 0;
class vi {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${rC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function nC({ options: e } = {}) {
  const [t] = le(), [r, n] = de(() => !t.isEditable()), [i, s] = de({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = de(void 0), c = Fe(() => {
    const d = [
      new vi("Cut", {
        onSelect: () => {
          t.dispatchCommand(pn, null);
        },
        isDisabled: r
      }),
      new vi("Copy", {
        onSelect: () => {
          t.dispatchCommand(so, null);
        }
      }),
      new vi("Paste", {
        onSelect: () => {
          Zc(t);
        },
        isDisabled: r
      }),
      new vi("Paste as Plain Text", {
        onSelect: () => {
          el(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new vi(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...d, ...f];
  }, [t, r, e]), l = ge(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  K(() => {
    const d = (f) => {
      const p = f.target;
      t.getRootElement() === p || Hf(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
    };
    return t.registerRootListener((f, p) => {
      p?.removeEventListener("contextmenu", d), f && f.addEventListener("contextmenu", d);
    });
  }, [t]), K(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      l();
    };
    return globalThis.addEventListener("scroll", d, !0), () => globalThis.removeEventListener("scroll", d, !0);
  }, [i.isOpen, l]), K(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      l();
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [i.isOpen, l]), K(() => {
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
  }, [i.isOpen, l, c, o, t]), K(() => t.registerEditableListener((d) => {
    n(!d);
  }), [t]);
  const u = X(null);
  return is(() => {
    const d = u.current;
    if (!d)
      return;
    const { width: f, height: p } = d.getBoundingClientRect(), m = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), g = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    d.style.left = `${m}px`, d.style.top = `${g}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? dy.createPortal(C("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: C(tC, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), l());
  }, onOptionMouseEnter: (d) => {
    a(d);
  } }) }), document.body) : null;
}
function iC() {
  const [e] = le();
  return K(() => e.registerCommand(Tr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Ns ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, fr), [e]), null;
}
function sC({ isEditable: e }) {
  const [t] = le();
  return is(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Ku(e) {
  return !!e && fo(re(e));
}
function Ah(e) {
  const [t] = le(), r = X(void 0), n = ge((i) => {
    const s = R(), o = N(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = Ku(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = ko(u, d);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const p = Ub();
        i.insertAfter(p), r.current = p.getKey(), l = p.getKey();
      }
      Gt(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = re(a);
      M(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return K(() => {
    const i = () => {
      const a = e(), c = R(), l = N(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (Dr(Ur), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (oi(c) || !c.includes(Xn))
        return;
      const l = R(), u = N(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (Fb(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(Xn).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Xe(t.registerCommand(gr, () => (i(), !1), fn), t.registerCommand(hc, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Ku(a);
      }), c && t.update(() => {
        const l = re(a);
        M(l) && l.remove();
      }, { tag: Ur }), r.current = void 0, !1;
    }, fn), t.registerNodeTransform(ze, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function oC() {
  const e = R();
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!D(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!me(i) || ko(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || me(s))
    return i;
}
function aC() {
  return Ah(oC), null;
}
function cC({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = le();
  return K(() => {
    n.initialize?.(r, s);
  }, [n, s, r]), K(() => {
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
          f || Dr(Hm), o.setEditorState(l), o.dispatchCommand(Gm, void 0);
        }, { tag: Tf });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function lC({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = le();
  return uC(t, n), dC(i, e, r, n), null;
}
function uC(e, t) {
  const r = X(void 0), n = X(void 0), i = e.noteCallers, s = e.crossRefCallers;
  K(() => {
    let o = i;
    (!o || o.length <= 0) && (o = Cx), r.current !== o && (r.current = o, ju("note-callers", o, t));
  }, [t, i]), K(() => {
    let o = s;
    (!o || o.length <= 0) && (o = vx), n.current !== o && (n.current = o, ju("cross-ref-callers", o, t));
  }, [t, s]);
}
function dC(e, t, r, n) {
  K(() => {
    if (!e.hasNodes([ye, Me, Bt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => bC(s));
    return Xe(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Me, (s) => fC(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(ye, pC),
      e.registerNodeTransform(ze, hC),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Bt, gC),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Bt, (s, { prevEditorState: o }) => mC(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(gr, () => yC(e, t, r, n), Rt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function fC(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => cr(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    M(i) && !P(i) && i.getTextContent() !== St(e.getCaller()) && e.insertBefore(i);
  }
}
function pC(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => cr(o));
  if (!$(e) || !j(t) || !n)
    return;
  const i = vc(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  M(s) ? s.getTextContent() !== w && s.setTextContent(w) : e.insertAfter(he(w));
}
function hC(e) {
  const t = Ht(e), r = t?.getChildren(), n = r?.find((o) => cr(o));
  if (!M(e) || !j(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!P(e) && j(i) && e.getTextContent() !== w && (e.setTextContent(w), e.selectEnd()), $(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(It) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = vc(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function gC(e) {
  if (!cr(e))
    return;
  const t = e.getNextSibling();
  !M(t) || P(t) ? e.insertAfter(he(w)) : t.getTextContent() !== w && t.setTextContent(w);
}
function mC(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = re(r), a = o?.getParent();
      return cr(o) && j(a) && a.getCaller() === ws;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function yC(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = R();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = nt(o, (c) => j(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = re(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Si(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (j(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Si(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (j(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Si(e, c, n);
    } else if (!a) {
      const c = nt(o, (l) => j(l));
      if (c && c.getIsCollapsed() && Ce(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Si(e, l, n);
      }
    }
  }
  if (Ce(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (Pn(c) && j(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Si(e, l, n);
    }
  }
  return !1;
}
function Si(e, t, r) {
  const n = re(t);
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
function bC(e) {
  const t = R();
  if (!N(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (j(i) && M(s)) {
    e.preventDefault();
    const o = dc();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), zi(o);
  }
}
function ju(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (kC(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function kC(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Mo(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!P(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Hi(e);
  return r && t.push(r), t.length > 0 && t.every((n) => M(n) && n.getMode() === "token") ? t : [];
}
function TC(e) {
  const t = e.getParent();
  if (j(t))
    return Mo(t).some((r) => r.is(e)) ? t : void 0;
}
function Ws(e) {
  const t = Mo(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function xC(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function _C(e) {
  const t = Jm();
  if (!N(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= Ws(e);
  const i = xC(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= Ws(e);
}
function za(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = TC(t);
  if (r)
    return CC(r, t, e.offset) ? void 0 : r;
}
function CC(e, t, r) {
  const n = Mo(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function vC(e) {
  const t = Mo(e), r = t[t.length - 1];
  M(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Gt(e, Ws(e));
}
function SC(e = !1) {
  const t = R();
  if (!N(t))
    return !1;
  if (!t.isCollapsed())
    return MC(t.anchor, t.focus);
  const r = za(t.anchor);
  if (!r)
    return !1;
  if (!e && _C(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Gt(n, r.getIndexWithinParent());
  } else
    vC(r);
  return !0;
}
function MC(e, t) {
  const r = za(e), n = za(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && Bu(e, r, i), n && Bu(t, n, !i), !0;
}
function Bu(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), Ws(t), "element");
}
function EC() {
  const [e] = le(), t = X(!1);
  return K(() => {
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
  }, [e]), K(() => e.registerCommand(gr, () => (SC(t.current) && Dr(Ur), !1), fn), [e]), null;
}
function AC({ onChange: e }) {
  const [t] = le();
  return K(() => t.registerCommand(gr, () => {
    const r = th();
    return e?.(r), !1;
  }, Rt), [t, e]), null;
}
function PC() {
  const [e] = le();
  return NC(e), null;
}
function NC(e) {
  K(() => {
    if (!e.hasNodes([Qe]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(Qe, (t) => OC(t, e));
  }, [e]);
}
function OC(e, t) {
  Jp(t, e.getKey()) && Gp(e.getFirstChild()), !(!se(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = re(e.getKey());
    return se(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Ph({ onStateChange: e }) {
  const [t] = le(), [r, n] = de(t), i = X(!1), s = X(!1), o = X(void 0), a = X(void 0), c = ge(() => {
    const l = R();
    let u;
    if (N(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : nt(d, (T) => {
        const S = T.getParent();
        return S !== null && Ym(S);
      });
      p === null && (p = d.getTopLevelElementOrThrow()), Xi(p) && (p = nt(d, se) ?? p);
      const m = p.getKey(), g = r.getElementByKey(m), y = Vb(d, f);
      if (y && LT(y) && (u = y.getMarker()), g !== null && (se(p) || Tt(p) || ls(p))) {
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
  return K(() => t.registerCommand(gr, (l, u) => (c(), n(u), !1), fr), [t, c]), K(() => Xe(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Xm, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), fr), r.registerCommand(Qm, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), fr)), [c, r, e]), null;
}
function wC(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function jr(e) {
  return e ? Ce(e) ? e : nt(e, (r) => Ce(r)) ?? void 0 : void 0;
}
function Nh(e) {
  if (!N(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = jr(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function tl(e) {
  return N(e) && e.isCollapsed() && e.anchor.type === "element" || !N(e) && !tf(e) ? !1 : e.getNodes().some((t) => me(t));
}
function Oh(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = jr(r);
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
function wh(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = jr(r);
  if (!n)
    return !1;
  if (D(r)) {
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
function Vu(e, t) {
  return !!Ka(e, t);
}
function Ka(e, t) {
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && D(n)) {
    const s = n.getChildren(), o = t === "backward" ? r.offset - 1 : r.offset;
    if (o < 0)
      return;
    const a = s[o];
    return me(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return me(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return me(i) ? i : void 0;
}
function Hs(e, t) {
  if (!N(e))
    return !1;
  const r = jr(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function sa(e) {
  return tl(e) || Nh(e);
}
function qC(e, t) {
  if (tl(e) || Nh(e))
    return !0;
  if (!N(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Oh(e) && Hs(e, "backward") || Vu(e, "backward");
    case "deleteForward":
      return wh(e) && Hs(e, "forward") || Vu(e, "forward");
    case "insertText":
      return !1;
  }
}
function RC(e, t) {
  if (!(!N(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Ka(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (Oh(e) && Hs(e, "backward")) {
        const n = jr(e.anchor.getNode());
        if (Ce(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Ka(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (wh(e) && Hs(e, "forward")) {
        const i = jr(e.anchor.getNode())?.getNextSibling();
        if (Ce(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Wu(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return tf(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!N(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!N(e) || e.isCollapsed())
    return !1;
  const r = jr(e.anchor.getNode()), n = jr(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function qh(e) {
  if (M(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else D(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function $C(e) {
  const t = e.getPreviousSibling();
  if (!Ce(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? qh(r) : pi(t) || t.selectStart();
}
function Rh(e) {
  return me(e) || We(e) ? [] : Ce(e) ? e.getChildren().flatMap(Rh) : [e];
}
function IC(e) {
  const t = [];
  for (const r of e) {
    const n = Rh(r);
    n.length !== 0 && (Ce(r) && t.length > 0 && t.push(he(" ")), t.push(...n));
  }
  return t;
}
function Hu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function LC(e) {
  if (Array.isArray(e)) return e;
}
function DC(e, t) {
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
function UC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FC(e, t) {
  return LC(e) || DC(e, t) || zC(e, t) || UC();
}
function zC(e, t) {
  if (e) {
    if (typeof e == "string") return Hu(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Hu(e, t) : void 0;
  }
}
const $h = Object.entries, Gu = Object.setPrototypeOf, KC = Object.isFrozen, jC = Object.getPrototypeOf, BC = Object.getOwnPropertyDescriptor;
let et = Object.freeze, it = Object.seal, Vn = Object.create, Ih = typeof Reflect < "u" && Reflect, ja = Ih.apply, Ba = Ih.construct;
et || (et = function(t) {
  return t;
});
it || (it = function(t) {
  return t;
});
ja || (ja = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Ba || (Ba = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Kn = He(Array.prototype.forEach), VC = He(Array.prototype.lastIndexOf), Ju = He(Array.prototype.pop), jn = He(Array.prototype.push), WC = He(Array.prototype.splice), Ir = Array.isArray, Oi = He(String.prototype.toLowerCase), oa = He(String.prototype.toString), Yu = He(String.prototype.match), Mi = He(String.prototype.replace), Xu = He(String.prototype.indexOf), HC = He(String.prototype.trim), GC = He(Number.prototype.toString), JC = He(Boolean.prototype.toString), Qu = typeof BigInt > "u" ? null : He(BigInt.prototype.toString), Zu = typeof Symbol > "u" ? null : He(Symbol.prototype.toString), Ye = He(Object.prototype.hasOwnProperty), Ei = He(Object.prototype.toString), Je = He(RegExp.prototype.test), an = YC(TypeError);
function He(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return ja(e, t, n);
  };
}
function YC(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Ba(e, r);
  };
}
function pe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Oi;
  if (Gu && Gu(e, null), !Ir(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (KC(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function XC(e) {
  for (let t = 0; t < e.length; t++)
    Ye(e, t) || (e[t] = null);
  return e;
}
function st(e) {
  const t = Vn(null);
  for (const n of $h(e)) {
    var r = FC(n, 2);
    const i = r[0], s = r[1];
    Ye(e, i) && (Ir(s) ? t[i] = XC(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = st(s) : t[i] = s);
  }
  return t;
}
function QC(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return GC(e);
    case "boolean":
      return JC(e);
    case "bigint":
      return Qu ? Qu(e) : "0";
    case "symbol":
      return Zu ? Zu(e) : "Symbol()";
    case "undefined":
      return Ei(e);
    case "function":
    case "object": {
      if (e === null)
        return Ei(e);
      const t = e, r = Ft(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Ei(n);
      }
      return Ei(e);
    }
    default:
      return Ei(e);
  }
}
function Ft(e, t) {
  for (; e !== null; ) {
    const n = BC(e, t);
    if (n) {
      if (n.get)
        return He(n.get);
      if (typeof n.value == "function")
        return He(n.value);
    }
    e = jC(e);
  }
  function r() {
    return null;
  }
  return r;
}
function ZC(e) {
  try {
    return Je(e, ""), !0;
  } catch {
    return !1;
  }
}
const ed = et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), aa = et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ca = et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ev = et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), la = et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), tv = et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), td = et(["#text"]), rd = et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ua = et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), nd = et(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), xs = et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), rv = it(/{{[\w\W]*|^[\w\W]*}}/g), nv = it(/<%[\w\W]*|^[\w\W]*%>/g), iv = it(/\${[\w\W]*/g), sv = it(/^data-[\-\w.\u00B7-\uFFFF]+$/), ov = it(/^aria-[\-\w]+$/), id = it(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), av = it(/^(?:\w+script|data):/i), cv = it(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), lv = it(/^html$/i), uv = it(/^[a-z][.\w]*(-[.\w]+)+$/i), sd = it(/<[/\w!]/g), od = it(/<[/\w]/g), dv = it(/<\/no(script|embed|frames)/i), fv = it(/\/>/i), Ct = {
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
}, pv = function() {
  return typeof window > "u" ? null : window;
}, hv = function(t, r) {
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
}, ad = function() {
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
}, qr = function(t, r, n, i) {
  return Ye(t, r) && Ir(t[r]) ? pe(i.base ? st(i.base) : {}, t[r], i.transform) : n;
};
function Lh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : pv();
  const t = (I) => Lh(I);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Ct.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = Ft(f, "cloneNode"), m = Ft(f, "remove"), g = Ft(f, "nextSibling"), y = Ft(f, "childNodes"), T = Ft(f, "parentNode"), S = Ft(f, "shadowRoot"), v = Ft(f, "attributes"), E = o && o.prototype ? Ft(o.prototype, "nodeType") : null, A = o && o.prototype ? Ft(o.prototype, "nodeName") : null, x = o && o.prototype ? Ft(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const I = r.createElement("template");
    I.content && I.content.ownerDocument && (r = I.content.ownerDocument);
  }
  let F, L = "", G, V = !1, ae = 0;
  const ce = function() {
    if (ae > 0)
      throw an('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ie = function(h) {
    ce(), ae++;
    try {
      return F.createHTML(h);
    } finally {
      ae--;
    }
  }, ve = function(h) {
    ce(), ae++;
    try {
      return F.createScriptURL(h);
    } finally {
      ae--;
    }
  }, Pe = function() {
    return V || (G = hv(d, i), V = !0), G;
  }, Q = r, U = Q.implementation, Z = Q.createNodeIterator, Ee = Q.createDocumentFragment, we = Q.getElementsByTagName, Yt = n.importNode;
  let ee = ad();
  t.isSupported = typeof $h == "function" && typeof T == "function" && U && U.createHTMLDocument !== void 0;
  const _t = rv, Jr = nv, fe = iv, ct = sv, Oo = ov, mi = av, Er = cv, Ge = uv;
  let lt = id, ue = null;
  const wn = pe({}, [...ed, ...aa, ...ca, ...la, ...td]);
  let be = null;
  const yi = pe({}, [...rd, ...ua, ...nd, ...xs]);
  let Se = Object.seal(Vn(null, {
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
  })), Ar = null, Pr = null;
  const Xt = Object.seal(Vn(null, {
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
  let Nr = !0, Yr = !0, bi = !1, fs = !0, Ut = !1, O = !0, z = !1, H = !1, J = null, _e = null, ut = !1, At = !1, Xr = !1, Qr = !1, Cl = !0, vl = !1;
  const Sl = "user-content-";
  let wo = !0, ps = !1, qn = {}, Qt = null;
  const qo = pe({}, [
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
  let Ml = null;
  const El = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ro = null;
  const Al = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), hs = "http://www.w3.org/1998/Math/MathML", gs = "http://www.w3.org/2000/svg", Zt = "http://www.w3.org/1999/xhtml";
  let Rn = Zt, $o = !1, Io = null;
  const fm = pe({}, [hs, gs, Zt], oa), Pl = et(["mi", "mo", "mn", "ms", "mtext"]);
  let Lo = pe({}, Pl);
  const Nl = et(["annotation-xml"]);
  let Do = pe({}, Nl);
  const pm = pe({}, ["title", "style", "font", "a", "script"]);
  let ki = null;
  const hm = ["application/xhtml+xml", "text/html"], gm = "text/html";
  let qe = null, $n = null;
  const mm = r.createElement("form"), Ol = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, Uo = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if ($n && $n === h)
      return;
    (!h || typeof h != "object") && (h = {}), h = st(h), ki = // eslint-disable-next-line unicorn/prefer-includes
    hm.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? gm : h.PARSER_MEDIA_TYPE, qe = ki === "application/xhtml+xml" ? oa : Oi, ue = qr(h, "ALLOWED_TAGS", wn, {
      transform: qe
    }), be = qr(h, "ALLOWED_ATTR", yi, {
      transform: qe
    }), Io = qr(h, "ALLOWED_NAMESPACES", fm, {
      transform: oa
    }), Ro = qr(h, "ADD_URI_SAFE_ATTR", Al, {
      transform: qe,
      base: Al
    }), Ml = qr(h, "ADD_DATA_URI_TAGS", El, {
      transform: qe,
      base: El
    }), Qt = qr(h, "FORBID_CONTENTS", qo, {
      transform: qe
    }), Ar = qr(h, "FORBID_TAGS", st({}), {
      transform: qe
    }), Pr = qr(h, "FORBID_ATTR", st({}), {
      transform: qe
    }), qn = Ye(h, "USE_PROFILES") ? h.USE_PROFILES && typeof h.USE_PROFILES == "object" ? st(h.USE_PROFILES) : h.USE_PROFILES : !1, Nr = h.ALLOW_ARIA_ATTR !== !1, Yr = h.ALLOW_DATA_ATTR !== !1, bi = h.ALLOW_UNKNOWN_PROTOCOLS || !1, fs = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ut = h.SAFE_FOR_TEMPLATES || !1, O = h.SAFE_FOR_XML !== !1, z = h.WHOLE_DOCUMENT || !1, At = h.RETURN_DOM || !1, Xr = h.RETURN_DOM_FRAGMENT || !1, Qr = h.RETURN_TRUSTED_TYPE || !1, ut = h.FORCE_BODY || !1, Cl = h.SANITIZE_DOM !== !1, vl = h.SANITIZE_NAMED_PROPS || !1, wo = h.KEEP_CONTENT !== !1, ps = h.IN_PLACE || !1, lt = ZC(h.ALLOWED_URI_REGEXP) ? h.ALLOWED_URI_REGEXP : id, Rn = typeof h.NAMESPACE == "string" ? h.NAMESPACE : Zt, Lo = Ye(h, "MATHML_TEXT_INTEGRATION_POINTS") && h.MATHML_TEXT_INTEGRATION_POINTS && typeof h.MATHML_TEXT_INTEGRATION_POINTS == "object" ? st(h.MATHML_TEXT_INTEGRATION_POINTS) : pe({}, Pl), Do = Ye(h, "HTML_INTEGRATION_POINTS") && h.HTML_INTEGRATION_POINTS && typeof h.HTML_INTEGRATION_POINTS == "object" ? st(h.HTML_INTEGRATION_POINTS) : pe({}, Nl);
    const _ = Ye(h, "CUSTOM_ELEMENT_HANDLING") && h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING == "object" ? st(h.CUSTOM_ELEMENT_HANDLING) : Vn(null);
    if (Se = Vn(null), Ye(_, "tagNameCheck") && Ol(_.tagNameCheck) && (Se.tagNameCheck = _.tagNameCheck), Ye(_, "attributeNameCheck") && Ol(_.attributeNameCheck) && (Se.attributeNameCheck = _.attributeNameCheck), Ye(_, "allowCustomizedBuiltInElements") && typeof _.allowCustomizedBuiltInElements == "boolean" && (Se.allowCustomizedBuiltInElements = _.allowCustomizedBuiltInElements), it(Se), Ut && (Yr = !1), Xr && (At = !0), qn && (ue = pe({}, td), be = Vn(null), qn.html === !0 && (pe(ue, ed), pe(be, rd)), qn.svg === !0 && (pe(ue, aa), pe(be, ua), pe(be, xs)), qn.svgFilters === !0 && (pe(ue, ca), pe(be, ua), pe(be, xs)), qn.mathMl === !0 && (pe(ue, la), pe(be, nd), pe(be, xs))), Xt.tagCheck = null, Xt.attributeCheck = null, Ye(h, "ADD_TAGS") && (typeof h.ADD_TAGS == "function" ? Xt.tagCheck = h.ADD_TAGS : Ir(h.ADD_TAGS) && (ue === wn && (ue = st(ue)), pe(ue, h.ADD_TAGS, qe))), Ye(h, "ADD_ATTR") && (typeof h.ADD_ATTR == "function" ? Xt.attributeCheck = h.ADD_ATTR : Ir(h.ADD_ATTR) && (be === yi && (be = st(be)), pe(be, h.ADD_ATTR, qe))), Ye(h, "ADD_URI_SAFE_ATTR") && Ir(h.ADD_URI_SAFE_ATTR) && pe(Ro, h.ADD_URI_SAFE_ATTR, qe), Ye(h, "FORBID_CONTENTS") && Ir(h.FORBID_CONTENTS) && (Qt === qo && (Qt = st(Qt)), pe(Qt, h.FORBID_CONTENTS, qe)), Ye(h, "ADD_FORBID_CONTENTS") && Ir(h.ADD_FORBID_CONTENTS) && (Qt === qo && (Qt = st(Qt)), pe(Qt, h.ADD_FORBID_CONTENTS, qe)), wo && (ue["#text"] = !0), z && pe(ue, ["html", "head", "body"]), ue.table && (pe(ue, ["tbody"]), delete Ar.tbody), h.TRUSTED_TYPES_POLICY) {
      if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw an('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw an('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const q = F;
      F = h.TRUSTED_TYPES_POLICY;
      try {
        L = ie("");
      } catch (B) {
        throw F = q, B;
      }
    } else h.TRUSTED_TYPES_POLICY === null ? (F = void 0, L = "") : (F === void 0 && (F = Pe()), F && typeof L == "string" && (L = ie("")));
    et && et(h), $n = h;
  }, wl = pe({}, [...aa, ...ca, ...ev]), ql = pe({}, [...la, ...tv]), ym = function(h, _, q) {
    return _.namespaceURI === Zt ? h === "svg" : _.namespaceURI === hs ? h === "svg" && (q === "annotation-xml" || Lo[q]) : !!wl[h];
  }, bm = function(h, _, q) {
    return _.namespaceURI === Zt ? h === "math" : _.namespaceURI === gs ? h === "math" && Do[q] : !!ql[h];
  }, km = function(h, _, q) {
    return _.namespaceURI === gs && !Do[q] || _.namespaceURI === hs && !Lo[q] ? !1 : !ql[h] && (pm[h] || !wl[h]);
  }, Tm = function(h) {
    let _ = T(h);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: Rn,
      tagName: "template"
    });
    const q = Oi(h.tagName), B = Oi(_.tagName);
    return Io[h.namespaceURI] ? h.namespaceURI === gs ? ym(q, _, B) : h.namespaceURI === hs ? bm(q, _, B) : h.namespaceURI === Zt ? km(q, _, B) : !!(ki === "application/xhtml+xml" && Io[h.namespaceURI]) : !1;
  }, Or = function(h) {
    jn(t.removed, {
      element: h
    });
    try {
      T(h).removeChild(h);
    } catch {
      if (m(h), !T(h))
        throw an("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ms = function(h) {
    Ti(h);
    const _ = y(h);
    if (_) {
      const B = [];
      Kn(_, (W) => {
        jn(B, W);
      }), Kn(B, (W) => {
        try {
          m(W);
        } catch {
        }
      });
    }
    const q = v(h);
    if (q)
      for (let B = q.length - 1; B >= 0; --B) {
        const W = q[B], te = W && W.name;
        if (typeof te == "string")
          try {
            h.removeAttribute(te);
          } catch {
          }
      }
  }, Zr = function(h, _) {
    try {
      jn(t.removed, {
        attribute: _.getAttributeNode(h),
        from: _
      });
    } catch {
      jn(t.removed, {
        attribute: null,
        from: _
      });
    }
    if (_.removeAttribute(h), h === "is")
      if (At || Xr)
        try {
          Or(_);
        } catch {
        }
      else
        try {
          _.setAttribute(h, "");
        } catch {
        }
  }, xm = function(h) {
    const _ = v(h);
    if (_)
      for (let q = _.length - 1; q >= 0; --q) {
        const B = _[q], W = B && B.name;
        if (!(typeof W != "string" || be[qe(W)]))
          try {
            h.removeAttribute(W);
          } catch {
          }
      }
  }, Ti = function(h) {
    const _ = [h];
    for (; _.length > 0; ) {
      const q = _.pop();
      (E ? E(q) : q.nodeType) === Ct.element && xm(q);
      const W = y(q);
      if (W)
        for (let te = W.length - 1; te >= 0; --te)
          _.push(W[te]);
    }
  }, _m = function(h) {
    if (!O)
      return;
    const _ = [h];
    for (; _.length > 0; ) {
      const q = _.pop(), B = E ? E(q) : q.nodeType;
      if (B === Ct.processingInstruction || B === Ct.comment && Je(od, q.data)) {
        try {
          m(q);
        } catch {
        }
        continue;
      }
      if (B === Ct.element) {
        const te = q, ke = qe(A ? A(q) : q.nodeName);
        try {
          te.hasAttribute && te.hasAttribute("patchsrc") && te.removeAttribute("patchsrc"), te.hasAttribute && te.hasAttribute("for") && ke !== "label" && ke !== "output" && te.removeAttribute("for");
        } catch {
        }
      }
      const W = y(q);
      if (W)
        for (let te = W.length - 1; te >= 0; --te)
          _.push(W[te]);
    }
  }, Rl = function(h) {
    let _ = null, q = null;
    if (ut)
      h = "<remove></remove>" + h;
    else {
      const te = Yu(h, /^[\r\n\t ]+/);
      q = te && te[0];
    }
    ki === "application/xhtml+xml" && Rn === Zt && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const B = F ? ie(h) : h;
    if (Rn === Zt)
      try {
        _ = new u().parseFromString(B, ki);
      } catch {
      }
    if (!_ || !_.documentElement) {
      _ = U.createDocument(Rn, "template", null);
      try {
        _.documentElement.innerHTML = $o ? L : B;
      } catch {
      }
    }
    const W = _.body || _.documentElement;
    return h && q && W.insertBefore(r.createTextNode(q), W.childNodes[0] || null), Rn === Zt ? we.call(_, z ? "html" : "body")[0] : z ? _.documentElement : W;
  }, $l = function(h) {
    const _ = x ? x(h) : h.ownerDocument;
    return Z.call(
      _ || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, ys = function(h) {
    return h = Mi(h, _t, " "), h = Mi(h, Jr, " "), h = Mi(h, fe, " "), h;
  }, Fo = function(h) {
    var _;
    h.normalize();
    const q = x ? x(h) : h.ownerDocument, B = Z.call(
      q || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let W = B.nextNode();
    for (; W; )
      W.data = ys(W.data), W = B.nextNode();
    const te = (_ = h.querySelectorAll) === null || _ === void 0 ? void 0 : _.call(h, "template");
    te && Kn(te, (ke) => {
      In(ke.content) && Fo(ke.content);
    });
  }, bs = function(h) {
    const _ = A ? A(h) : null;
    return typeof _ != "string" || qe(_) !== "form" ? !1 : typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    h.attributes !== v(h) || typeof h.removeAttribute != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    h.nodeType !== E(h) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    h.childNodes !== y(h);
  }, In = function(h) {
    if (!E || typeof h != "object" || h === null)
      return !1;
    try {
      return E(h) === Ct.documentFragment;
    } catch {
      return !1;
    }
  }, xi = function(h) {
    if (!E || typeof h != "object" || h === null)
      return !1;
    try {
      return typeof E(h) == "number";
    } catch {
      return !1;
    }
  };
  function er(I, h, _) {
    I.length !== 0 && Kn(I, (q) => {
      q.call(t, h, _, $n);
    });
  }
  const Cm = function(h, _) {
    return !!(O && h.hasChildNodes() && !xi(h.firstElementChild) && Je(sd, h.textContent) && Je(sd, h.innerHTML) || O && h.namespaceURI === Zt && _ === "style" && xi(h.firstElementChild) || h.nodeType === Ct.processingInstruction || O && h.nodeType === Ct.comment && Je(od, h.data));
  }, vm = function(h, _, q) {
    if (!Ar[_] && Ul(_) && (Se.tagNameCheck instanceof RegExp && Je(Se.tagNameCheck, _) || Se.tagNameCheck instanceof Function && Se.tagNameCheck(_)))
      return !1;
    if (wo && !Qt[_]) {
      const B = T(h), W = y(h);
      if (W && B) {
        const te = W.length;
        for (let ke = te - 1; ke >= 0; --ke) {
          const Re = h === q ? p(W[ke], !0) : W[ke];
          B.insertBefore(Re, g(h));
        }
      }
    }
    return Or(h), !0;
  }, Il = function(h, _, q, B) {
    return h.length === 0 ? _ : _ === q || _ === B ? st(_) : _;
  }, Ll = function(h, _) {
    if (er(ee.beforeSanitizeElements, h, null), h !== _ && T(h) === null)
      return ps && Ti(h), !0;
    if (bs(h))
      return Or(h), !0;
    const q = qe(A ? A(h) : h.nodeName);
    if (ue = Il(ee.uponSanitizeElement, ue, wn, J), er(ee.uponSanitizeElement, h, {
      tagName: q,
      allowedTags: ue
    }), h !== _ && T(h) === null)
      return ps && Ti(h), !0;
    if (Cm(h, q))
      return Or(h), !0;
    if (Ar[q] || !(Xt.tagCheck instanceof Function && Xt.tagCheck(q)) && !ue[q]) {
      const W = vm(h, q, _);
      return W === !1 && er(ee.afterSanitizeElements, h, null), W;
    }
    if ((E ? E(h) : h.nodeType) === Ct.element && !Tm(h) || (q === "noscript" || q === "noembed" || q === "noframes") && Je(dv, h.innerHTML))
      return Or(h), !0;
    if (Ut && h.nodeType === Ct.text) {
      const W = ys(h.textContent);
      h.textContent !== W && (jn(t.removed, {
        element: h.cloneNode()
      }), h.textContent = W);
    }
    return er(ee.afterSanitizeElements, h, null), !1;
  }, Dl = function(h, _, q) {
    if (Pr[_] || O && _ === "patchsrc" || O && _ === "for" && h !== "label" && h !== "output" || Cl && (_ === "id" || _ === "name") && (q in r || q in mm))
      return !1;
    const B = be[_] || Xt.attributeCheck instanceof Function && Xt.attributeCheck(_, h);
    if (!(Yr && Je(ct, _))) {
      if (!(Nr && Je(Oo, _))) {
        if (B) {
          if (!Ro[_]) {
            if (!Je(lt, Mi(q, Er, ""))) {
              if (!((_ === "src" || _ === "xlink:href" || _ === "href") && h !== "script" && Xu(q, "data:") === 0 && Ml[h])) {
                if (!(bi && !Je(mi, Mi(q, Er, "")))) {
                  if (q)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Ul(h) && (Se.tagNameCheck instanceof RegExp && Je(Se.tagNameCheck, h) || Se.tagNameCheck instanceof Function && Se.tagNameCheck(h)) && (Se.attributeNameCheck instanceof RegExp && Je(Se.attributeNameCheck, _) || Se.attributeNameCheck instanceof Function && Se.attributeNameCheck(_, h)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          _ === "is" && Se.allowCustomizedBuiltInElements && (Se.tagNameCheck instanceof RegExp && Je(Se.tagNameCheck, q) || Se.tagNameCheck instanceof Function && Se.tagNameCheck(q)))
        ) return !1;
      }
    }
    return !0;
  }, Sm = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ul = function(h) {
    return !Sm[Oi(h)] && Je(Ge, h);
  }, Mm = function(h, _, q, B) {
    if (F && typeof d == "object" && typeof d.getAttributeType == "function" && !q)
      switch (d.getAttributeType(h, _)) {
        case "TrustedHTML":
          return ie(B);
        case "TrustedScriptURL":
          return ve(B);
      }
    return B;
  }, Em = function(h, _, q, B) {
    try {
      q ? h.setAttributeNS(q, _, B) : h.setAttribute(_, B), bs(h) ? Or(h) : Ju(t.removed);
    } catch {
      Zr(_, h);
    }
  }, Fl = function(h) {
    er(ee.beforeSanitizeAttributes, h, null);
    const _ = h.attributes;
    if (!_ || bs(h))
      return;
    be = Il(ee.uponSanitizeAttribute, be, yi, _e);
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: be,
      forceKeepAttr: void 0
    };
    let B = _.length;
    const W = qe(h.nodeName);
    for (; B--; ) {
      const te = _[B], ke = te.name, Re = te.namespaceURI, ht = te.value, gt = qe(ke), Ko = ht;
      let dt = ke === "value" ? Ko : HC(Ko);
      if (q.attrName = gt, q.attrValue = dt, q.keepAttr = !0, q.forceKeepAttr = void 0, er(ee.uponSanitizeAttribute, h, q), dt = q.attrValue, vl && (gt === "id" || gt === "name") && Xu(dt, Sl) !== 0 && (Zr(ke, h), dt = Sl + dt), O && Je(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, dt)) {
        Zr(ke, h);
        continue;
      }
      if (gt === "attributename" && Yu(dt, "href")) {
        Zr(ke, h);
        continue;
      }
      if (!q.forceKeepAttr) {
        if (!q.keepAttr) {
          Zr(ke, h);
          continue;
        }
        if (!fs && Je(fv, dt)) {
          Zr(ke, h);
          continue;
        }
        if (Ut && (dt = ys(dt)), !Dl(W, gt, dt)) {
          Zr(ke, h);
          continue;
        }
        dt = Mm(W, gt, Re, dt), dt !== Ko && Em(h, ke, Re, dt);
      }
    }
    er(ee.afterSanitizeAttributes, h, null);
  }, ks = function(h) {
    let _ = null;
    const q = $l(h);
    for (er(ee.beforeSanitizeShadowDOM, h, null); _ = q.nextNode(); )
      if (er(ee.uponSanitizeShadowNode, _, null), Ll(_, h), Fl(_), In(_.content) && ks(_.content), (E ? E(_) : _.nodeType) === Ct.element) {
        const W = S(_);
        In(W) && (zo(W), ks(W));
      }
    er(ee.afterSanitizeShadowDOM, h, null);
  }, zo = function(h) {
    const _ = [{
      node: h,
      shadow: null
    }];
    for (; _.length > 0; ) {
      const q = _.pop();
      if (q.shadow) {
        ks(q.shadow);
        continue;
      }
      const B = q.node, te = (E ? E(B) : B.nodeType) === Ct.element, ke = y(B);
      if (ke)
        for (let Re = ke.length - 1; Re >= 0; --Re)
          _.push({
            node: ke[Re],
            shadow: null
          });
      if (te) {
        const Re = A ? A(B) : null;
        if (typeof Re == "string" && qe(Re) === "template") {
          const ht = B.content;
          In(ht) && _.push({
            node: ht,
            shadow: null
          });
        }
      }
      if (te) {
        const Re = S(B);
        In(Re) && _.push({
          node: null,
          shadow: Re
        }, {
          node: Re,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(I) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, q = null, B = null, W = null;
    if ($o = !I, $o && (I = "<!-->"), typeof I != "string" && !xi(I) && (I = QC(I), typeof I != "string"))
      throw an("dirty is not a string, aborting");
    if (!t.isSupported)
      return I;
    H ? (ue = J, be = _e) : Uo(h), (ee.uponSanitizeElement.length > 0 || ee.uponSanitizeAttribute.length > 0) && (ue = st(ue)), ee.uponSanitizeAttribute.length > 0 && (be = st(be)), t.removed = [];
    const te = ps && typeof I != "string" && xi(I);
    if (te) {
      _m(I);
      const ht = A ? A(I) : I.nodeName;
      if (typeof ht == "string") {
        const gt = qe(ht);
        if (!ue[gt] || Ar[gt])
          throw ms(I), an("root node is forbidden and cannot be sanitized in-place");
      }
      if (bs(I))
        throw ms(I), an("root node is clobbered and cannot be sanitized in-place");
      try {
        zo(I);
      } catch (gt) {
        throw ms(I), gt;
      }
    } else if (xi(I))
      _ = Rl("<!---->"), q = _.ownerDocument.importNode(I, !0), q.nodeType === Ct.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? _ = q : _.appendChild(q), zo(q);
    else {
      if (!At && !Ut && !z && // eslint-disable-next-line unicorn/prefer-includes
      I.indexOf("<") === -1)
        return F && Qr ? ie(I) : I;
      if (_ = Rl(I), !_)
        return At ? null : Qr ? L : "";
    }
    _ && ut && Or(_.firstChild);
    const ke = te ? I : _;
    try {
      const ht = $l(ke);
      for (; B = ht.nextNode(); )
        Ll(B, ke), Fl(B), In(B.content) && ks(B.content);
    } catch (ht) {
      throw te && (ms(I), Kn(t.removed, (gt) => {
        gt.element && Ti(gt.element);
      })), ht;
    }
    if (te)
      return Kn(t.removed, (ht) => {
        ht.element && Ti(ht.element);
      }), Ut && Fo(I), I;
    if (At) {
      if (Ut && Fo(_), Xr)
        for (W = Ee.call(_.ownerDocument); _.firstChild; )
          W.appendChild(_.firstChild);
      else
        W = _;
      return (be.shadowroot || be.shadowrootmode) && (W = Yt.call(n, W, !0)), W;
    }
    let Re = z ? _.outerHTML : _.innerHTML;
    return z && ue["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && Je(lv, _.ownerDocument.doctype.name) && (Re = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + Re), Ut && (Re = ys(Re)), F && Qr ? ie(Re) : Re;
  }, t.setConfig = function() {
    let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Uo(I), H = !0, J = ue, _e = be;
  }, t.clearConfig = function() {
    $n = null, H = !1, J = null, _e = null, F = G, L = "";
  }, t.isValidAttribute = function(I, h, _) {
    $n || Uo({});
    const q = qe(I), B = qe(h);
    return Dl(q, B, _);
  }, t.addHook = function(I, h) {
    typeof h == "function" && Ye(ee, I) && jn(ee[I], h);
  }, t.removeHook = function(I, h) {
    if (Ye(ee, I)) {
      if (h !== void 0) {
        const _ = VC(ee[I], h);
        return _ === -1 ? void 0 : WC(ee[I], _, 1)[0];
      }
      return Ju(ee[I]);
    }
  }, t.removeHooks = function(I) {
    Ye(ee, I) && (ee[I] = []);
  }, t.removeAllHooks = function() {
    ee = ad();
  }, t;
}
var gv = Lh();
function mv({ structureProtectionMode: e = "off" }) {
  const [t] = le(), r = X(void 0), [n, i] = de(void 0), s = ge((o) => {
    r.current = o, i(o);
  }, []);
  return K(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const m = wC(p);
      if (!m)
        return !1;
      const g = R();
      return e === "protected" ? g && qC(g, m) ? (p.preventDefault(), !0) : !1 : m !== "deleteBackward" && m !== "deleteForward" ? !1 : a(m, p);
    }, a = (p, m) => {
      const g = R(), y = r.current;
      if (y && g && Wu(g, y)) {
        if (s(void 0), m.preventDefault(), p !== y.intent)
          return !0;
        const S = re(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (S) {
            const v = S.getParent(), E = S.getPreviousSibling(), A = S.getNextSibling();
            S.remove(), E ? qh(E) : A && M(A) ? A.select(0, 0) : v?.selectStart();
          }
        } else y.kind === "selection" ? N(g) && g.removeText() : Ce(S) && $C(S);
        return !0;
      }
      if (!g)
        return !1;
      const T = RC(g, p);
      if (T) {
        if (T.kind === "verse") {
          const S = rf();
          S.add(T.node.getKey()), zi(S);
        } else {
          const S = dc();
          S.anchor.set(T.node.getKey(), 0, "element"), S.focus.set(T.node.getKey(), T.node.getChildrenSize(), "element"), zi(S);
        }
        return s({ key: T.node.getKey(), kind: T.kind, intent: p }), m.preventDefault(), !0;
      }
      if (N(g) && !g.isCollapsed() && tl(g)) {
        const S = g.getNodes().filter(me).map((A) => A.getKey()), { anchor: v, focus: E } = g;
        return s({
          kind: "selection",
          intent: p,
          key: S[0],
          anchor: { key: v.key, offset: v.offset, type: v.type },
          focus: { key: E.key, offset: E.offset, type: E.type }
        }), m.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const m = R();
      return !m || !sa(m) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, m) => {
      if (!p)
        return !1;
      const g = gv.sanitize(p), y = new DOMParser().parseFromString(g, "text/html"), T = IC(Ty(t, y)), S = R();
      return N(S) && S.insertNodes(T), m.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const m = R();
      return m && sa(m) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const m = R();
      return m && sa(m) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Wu(R(), p) || s(void 0);
      });
    };
    return Xe(t.registerCommand(Tr, o, Ie), t.registerCommand(pn, c, Ie), t.registerCommand(dr, u, Ie), t.registerCommand(Zm, c, Ie), t.registerCommand(pc, d, Ie), t.registerCommand(fc, c, Ie), t.registerUpdateListener(f));
  }, [t, e, s]), K(() => {
    const o = t.getRootElement();
    if (!o)
      return;
    const a = !!n && n.kind !== "para";
    return o.classList.toggle("verse-delete-armed", !!n), a ? (o.setAttribute("data-verse-delete-intent", n.intent), o.setAttribute("data-verse-delete-kind", n.kind)) : (o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind")), () => {
      o.classList.remove("verse-delete-armed"), o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind");
    };
  }, [t, n]), null;
}
const EA = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function yv({ textDirection: e }) {
  const [t] = le();
  return bv(t, e), null;
}
function bv(e, t) {
  K(() => (cd(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && cd(e, t);
  })), [e, t]);
}
function cd(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function kv() {
  const [e] = le();
  return Tv(e), null;
}
function Tv(e) {
  K(() => {
    if (!e.hasNodes([ye, xt, Me, ze, ft]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Xe(
      e.registerNodeTransform(ze, xv),
      e.registerNodeTransform(ze, (t) => _v(t, e)),
      e.registerNodeTransform(ft, ld),
      e.registerNodeTransform(xt, ld),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(ft, (t) => {
        Yi(yn("va"), t), Yi(yn("vp"), t);
      })
    );
  }, [e]);
}
function xv(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || j(r) || $(n) || $(r) || Te(n) || Te(r) || Le(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  Le(r) && r.isInlineTag() || // A transient caret host (a lone zero-width space) must stay bare. Padding it makes the node no
  // longer placeholder-only, so the host's own strip-on-edit transform reads that as typing and
  // removes the space's reason to exist, and the empty-verse clause below clears what is left —
  // stranding the caret on a boundary that renders nothing.
  oi(t) || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  ne(e, oe) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Be(n))
    return;
  if (me(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  me(r) && Uc(e);
}
function _v(e, t) {
  const r = e.getParent();
  !Le(r) || !e.isAttached() || Jp(t, e.getKey()) && r.insertAfter(e);
}
function ld(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Te(t); )
    t = t.getLastChild();
  ($(t) || M(t) && Te(t.getParent())) && e.insertBefore(he(" "));
}
function rl(e) {
  if (!j(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !fo(n)) ? void 0 : e;
}
function Cv(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (D(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function vv() {
  const e = R();
  if (!(!N(e) || !e.isCollapsed()))
    return rl(Cv(e.anchor));
}
function Sv(e) {
  const t = R();
  let r;
  return N(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Dh(e.target)), r ? rl(nt(r, j)) : void 0;
}
function Dh(e) {
  const t = ey(e)?.anchorNode;
  if (Zd(t))
    return cs(t) ?? void 0;
}
function Mv(e) {
  if (R())
    return;
  const t = Dh(e);
  return t ? rl(nt(t, j)) : void 0;
}
function Ev() {
  const [e] = le(), t = Ah(vv);
  return K(() => {
    const r = (n) => {
      Dr(Ur), t(n);
    };
    return Xe(e.registerCommand(gr, () => {
      const n = Mv(e.getRootElement());
      return n && r(n), !1;
    }, fn), e.registerCommand(io, (n) => {
      const i = Sv(n);
      return i && r(i), !1;
    }, fn));
  }, [e, t]), null;
}
function Av({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = Jx({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return C(Gx, { trigger: e, items: i });
}
function Pv({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = Fe(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? C(wv, { trigger: e, harness: i }) : C(Av, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const Nv = [" ", "*"];
function Ov(e, t) {
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
function wv({ trigger: e, harness: t }) {
  const [r] = le(), [n, i] = de(void 0), s = X({ query: "", options: [] }), o = X(0), a = ge((f, p, m) => {
    const g = p.find((y) => y.kind === "note" && y.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = R();
      N(y) && y.insertText(`${e}${f}${m ? " " : ""}`);
    });
  }, [r, t, e]);
  K(() => Xe(r.registerCommand(Tr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), ty(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = R();
          N(y) && y.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const m = s.current.query;
      if (n.hasTextSelection) {
        const g = n.items.find((y) => y.marker === m);
        return g && t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
      }
      return a(m, n.items, !0), !0;
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
  }, Ie), r.registerCommand(nf, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, Gn)), [r, e, t, n, a]);
  const c = ge(() => i(void 0), []), l = ge((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = ge((f) => {
    const { markerMenuItem: p, applyOpts: m } = f;
    t.apply(p, m);
  }, [t]), d = Fe(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    Ov(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && C(oh, { isOpen: !0, children: ({ placement: f }) => C(
    lh,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? Nv : void 0 },
    n.session
  ) });
}
function Uh(e) {
  return e.replaceAll(w, "~").replace(/ {2,}/g, (r) => w.repeat(r.length));
}
function qv(e) {
  return e.replaceAll(w, " ").replaceAll("~", w);
}
function Rv(e) {
  return e.replace(/ {2,}/g, " ");
}
let Gs;
function $v(e) {
  e && (Gs = e);
}
function Fh(e) {
  return vo(e);
}
function Iv(e, t) {
  return e.isEmpty() ? Yd : zh(e.toJSON(), t);
}
function zh(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && uo(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Yd;
  if (r.some(kT)) {
    Gs?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Kh(r), i = zt(n, t);
  return i ? { type: hr, version: pr, content: i } : void 0;
}
function Lv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), Ae({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function Dv(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Ae({
    type: Et.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function Uv(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = np(r, a, c), Ae({
    type: Et.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function Fv(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = np(t, o, a), Ae({
    type: ft.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function zv(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !Fh(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(w) && (t[0] = a.slice(1));
  }
  return Ae({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function Kv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Ae({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function jv(e, t) {
  const { unknownAttributes: r } = e;
  return Ae({ type: Op, ...r, content: t });
}
function Bv(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Ae({ type: Rp, marker: r, ...n, content: t });
}
function Vv(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Ae({
    type: Ip,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function Wv(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return Ae({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function Wn(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Ae({
    type: t,
    marker: r === "" ? void 0 : r,
    ...pp({ sid: n, eid: i, ...s }, o)
  });
}
function Hv(e) {
  return e.text;
}
function Gv(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Ae({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function Jv(e) {
  const { marker: t } = e;
  return {
    type: Us,
    marker: t === "" ? void 0 : t
  };
}
function ud(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function Yv(e, t, r, n, i) {
  const s = Vt.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = Wn({
      type: s,
      marker: Jn,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = Wn({
      type: s,
      marker: hn,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = Wn({
      type: s,
      marker: hn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Wn({
      type: s,
      marker: Jn
    });
    i.push(l);
  }
  (!n || !Rf(n)) && t.forEach((l) => {
    const u = Wn({
      type: s,
      marker: Jn,
      eid: l
    });
    i.push(u);
  });
}
function zt(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, p = a, m = a, g = a, y = a;
    switch (a.type) {
      case Lt.getType():
        i.push(
          Lv(
            l,
            zt(l.children, t)
          )
        );
        break;
      case or.getType():
        i.push(Dv(a));
        break;
      case Et.getType():
        i.push(
          Uv(
            u,
            zt(u.children, t)
          )
        );
        break;
      case xt.getType():
      case ft.getType():
        i.push(Fv(a));
        break;
      case ye.getType():
        i.push(
          zv(
            d,
            zt(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case Qe.getType():
        i.push(
          Kv(
            f,
            zt(f.children, t)
          )
        );
        break;
      case An.getType():
        i.push(
          jv(
            a,
            zt(a.children, t)
          )
        );
        break;
      case ci.getType():
        i.push(
          Bv(
            a,
            zt(a.children, t)
          )
        );
        break;
      case li.getType():
        i.push(
          Vv(
            a,
            zt(a.children, t)
          )
        );
        break;
      case Me.getType():
        i.push(
          Wv(
            p,
            zt(p.children, t, p.caller)
          )
        );
        break;
      case vr.getType():
      case _r.getType():
      case Bt.getType():
      case sf.getType():
      case ar.getType():
        break;
      case Ze.getType():
        if (s = zt(
          g.children,
          t,
          r,
          n
        ), s) {
          const T = g.typedIDs[Lr];
          if (T)
            Yv(s, T, o, e[c + 1], i), o = T;
          else {
            const S = s.shift();
            S && (typeof S == "string" ? ud(i, S) : i.push(S)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Vt.getType():
        i.push(Wn(a));
        break;
      case ze.getType():
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !oi(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        m.text !== w && !m.text.startsWith(mc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[os]?.textType !== "attribute" && (!r || m.text !== St(r))) {
          let T = Hv(m);
          Fh(t) && (n && T.startsWith(w) && (T = T.slice(1)), T = Rv(qv(T))), ud(i, T);
        }
        break;
      case Mn.getType():
        i.push(
          Gv(
            y,
            zt(y.children, t)
          )
        );
        break;
      case Mr.getType():
        i.push(Jv(a));
        break;
      case ui.getType():
        Gs?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Gs?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function Kh(e) {
  const t = e.findIndex((r) => uo(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Kh(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const da = {
  initialize: $v,
  deserializeEditorState: Iv
}, Xv = /^sd\d*$/, Qv = /* @__PURE__ */ new Set([
  ...Object.entries(_a).filter(
    ([e, t]) => t.category === k.TitlesHeadings && t.type === b.Paragraph && !Xv.test(e)
  ).map(([e]) => e),
  "qa"
]);
function Zv(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Uf(i) || Zf(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!Bb(i)) {
      t && Js(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Cc(i) && Qv.has(i.marker) && !Js(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    jh(i.children, t).forEach((s) => {
      const o = eS(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = tS(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function jh(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Bh(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Rf(i)) {
      const s = jh(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(dd(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [dd(i, c.nodes)] });
      });
      return;
    }
    t && Js(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function dd(e, t) {
  return { ...e, children: t };
}
function Bh(e) {
  return Wp(e) && e.number !== "";
}
function Js(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Bh(r) || Js(r)) : !1;
}
function eS(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function tS(e) {
  return {
    type: Fs,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: jp
  };
}
const fd = Wh([]), rS = {
  type: sf.getType(),
  version: 1
};
let nl = [], Y, xn, Vh, kt;
function nS(e, t) {
  nl = [], oS(e), aS(t);
}
function iS(e = 0) {
}
function sS(e, t) {
  Y = t ?? Co();
  let r;
  return e ? (e.type !== hr && kt?.warn(`This USJ type '${e.type}' didn't match the expected type '${hr}'.`), e.version !== pr && kt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${pr}'.`
  ), e.content.length > 0 ? (r = Ga(Rr(e.content)), Zi(Y) && (r = Zv(r, kt))) : r = [fd]) : r = [fd], Vh?.(nl), {
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
function oS(e) {
  e && (xn = e), e?.addMissingComments && (Vh = e.addMissingComments);
}
function aS(e) {
  e && (kt = e);
}
function il() {
  return vo(Y);
}
function cS(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function lS(e) {
  let { marker: t } = e;
  t !== Bi && kt?.warn(`Unexpected book marker '${t}'!`), t = t ?? Bi;
  const { code: r } = e;
  (!r || !Lt.isValidBookCode(r)) && kt?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  Y?.markerMode === "editable" || Y?.markerMode === "visible" ? n.push(
    yt("marker", Oe(t) + " " + r + w)
  ) : Y?.hasGutterParaMarkers && n.push(yt("marker", Oe(t) + w, !0));
  const i = cS(e.content);
  i && n.push(at(il() ? Uh(i) : i));
  const s = De(e, Cb);
  return Ae({
    type: Lt.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: Lf
  });
}
function uS(e) {
  let { marker: t } = e;
  t !== Is && kt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Is;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = De(e, vb);
  let a;
  Y?.markerMode === "visible" && (a = !0);
  const c = [
    at($t(t, r) ?? "")
  ];
  return Y?.markerMode === "editable" && ES(i, s, c), Y?.markerMode === "editable" ? Ae({
    type: Et.getType(),
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
    version: Ff
  }) : Ae({
    type: or.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Vf
  });
}
function dS(e) {
  let { marker: t } = e;
  t !== Ls && kt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Ls;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (i_(Y) ?? xt).getType(), c = Y?.markerMode === "editable" ? Yf : Vp;
  let l, u;
  Y?.markerMode === "editable" ? l = $t(t, r) : Y?.markerMode === "visible" && (u = !0);
  const d = De(e, Lb);
  return Ae({
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
function fS(e, t = [], r = !1) {
  let { marker: n } = e;
  ye.isValidMarker(n, xn?.extraValidMarkers) || kt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (Y?.markerMode === "editable") {
    const [a] = t;
    Qn(a) ? a.text = w + a.text : a && t.unshift(at(w));
  }
  t.length === 0 && t.push(at(It)), Va(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = De(e, Eb);
  return s || CS(n, o, i), s || Wa(e.marker ?? "", i, !1, r), Ae({
    type: ye.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Bf
  });
}
function Wh(e) {
  return {
    type: zr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Gf
  };
}
function pS(e, t = []) {
  let { marker: r } = e;
  Qe.isValidMarker(r, xn?.extraValidMarkers) || kt?.warn(`Unexpected para marker '${r}'!`), r = r ?? rr;
  const n = [];
  if (di(Y) && (Y?.markerMode === "editable" ? n.push(
    pt(r),
    at(w, sr, "token")
  ) : (Y?.markerMode === "visible" || Y?.hasGutterParaMarkers) && n.push(
    yt(
      "marker",
      Oe(r) + w,
      Y?.hasGutterParaMarkers
    )
  )), n.push(...t), il()) {
    const s = n.find(
      (o) => !Ac(o) && !(Qn(o) && o.text === w)
    );
    Qn(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => w.repeat(o.length)));
  }
  const i = De(e, $b);
  return Ae({
    type: Qe.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Jf
  });
}
function sl() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function hS(e, t = []) {
  const r = De(e, zk);
  return Ae({
    ...sl(),
    type: An.getType(),
    unknownAttributes: r,
    children: t,
    version: wp
  });
}
function gS(e, t = []) {
  const r = De(e, Bk), n = e.marker ?? Oa, i = [];
  return Y?.markerMode === "editable" ? i.push(
    pt(n),
    at(w, sr, "token")
  ) : (Y?.markerMode === "visible" || Y?.hasGutterParaMarkers) && i.push(
    yt(
      "marker",
      Oe(n) + w,
      Y?.hasGutterParaMarkers
    )
  ), i.push(...t), Ae({
    ...sl(),
    type: ci.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: $p
  });
}
function mS(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? wa;
  Y?.markerMode === "editable" ? s.push(
    pt(o),
    at(w, sr, "token")
  ) : (Y?.markerMode === "visible" || Y?.hasGutterParaMarkers) && s.push(
    yt(
      "marker",
      Oe(o) + w,
      Y?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const a = De(
    e,
    Wk
  );
  return Ae({
    ...sl(),
    type: li.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: a,
    children: s,
    version: Lp
  });
}
function yS(e, t) {
  const r = Yb(t);
  let n = () => {
  };
  return xn?.noteCallerOnClick && (n = xn.noteCallerOnClick), Ae({
    type: Bt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: eh
  });
}
function bS(e, t) {
  let { marker: r } = e;
  Me.isValidMarker(r, xn?.extraValidMarkers) || kt?.warn(`Unexpected note marker '${r}'!`), r = r ?? bc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : Wc(Y?.noteMode), a = De(e, Uy), c = Y?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  Y?.markerMode === "editable" ? (l = pt(r, "opening", !1, c), s || (u = pt(r, "closing"))) : Y?.markerMode === "visible" && (l = yt("marker", Oe(r) + " "), s || (u = yt("marker", rt(r))));
  const d = [];
  let f;
  if (l && d.push(l), Y?.markerMode === "editable" && !o)
    f = at(St(i), void 0, c), d.push(f), MS(n, d), d.push(...t);
  else {
    const p = at(w, sr, "token");
    f = yS(i, t), d.push(f, p, ...t.flatMap(kS(p)));
  }
  return u && d.push(u), Ae({
    type: Me.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: d,
    direction: null,
    format: "",
    indent: 0,
    version: Mf
  });
}
function kS(e) {
  return (t) => wf(t) ? [t] : [t, e];
}
function TS(e) {
  let { marker: t } = e;
  (!t || !Vt.isValidMarker(t, xn?.extraValidMarkers)) && kt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = De(e, yc), s = hp(e);
  return Ae({
    type: Vt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: Cf
  });
}
function pd(e, t = []) {
  return {
    type: Ze.getType(),
    typedIDs: { [Lr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function xS(e, t) {
  const { marker: r } = e, n = e.type, i = De(e, kb), s = [];
  if (Y?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = Sp(
      n,
      r,
      i
    );
    o && s.push(yt("marker", o)), a && s.push(yt("attribute", a)), s.push(...t), c && s.push(yt("attribute", c)), l && s.push(yt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Qn(o) && (o.mode = "token");
  }), Ae({
    type: Mn.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: If
  });
}
function _S(e) {
  return {
    type: Mr.getType(),
    marker: e,
    text: $i(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: Y?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: Pp
  };
}
function pt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: ar.getType(),
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
function at(e, t = void 0, r = "normal") {
  const n = {
    type: ze.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[os] = { textType: t }), n;
}
function yt(e, t, r = !1) {
  const n = {
    type: _r.getType(),
    text: t,
    textType: e,
    version: Of
  };
  return r && (n[os] = { [Tc.key]: !0 }), n;
}
function es(e, t) {
  return {
    type: vr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: dp
  };
}
function Va(e, t, r = !1) {
  Y?.markerMode === "editable" ? t.push(pt(e, "opening", r)) : Y?.markerMode === "visible" && t.push(yt("marker", Oe(e, r)));
}
function Wa(e, t, r = !1, n = !1) {
  Y?.markerMode === "editable" ? r ? t.push(pt("", "selfClosing")) : t.push(pt(e, "closing", n)) : Y?.markerMode === "visible" && t.push(
    yt(
      "marker",
      r ? rt("") : rt(e, n)
    )
  );
}
function CS(e, t, r) {
  if (Y?.markerMode !== "editable" || !t) return;
  const n = tr(t, ao(e));
  n && r.push(at(n, "attribute"));
}
function hd(e, t) {
  if (e.type !== "ms" || Y?.markerMode !== "editable" && Y?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = De(e, yc), o = gp(
    n,
    i,
    s,
    hp(e)
  ), a = tr(o, lo(r ?? ""));
  if (!a) return;
  const c = w + a;
  Y?.markerMode === "editable" ? t.push(at(c, "attribute")) : t.push(yt("attribute", c));
}
function vS(e, t) {
  const r = e.marker ?? "";
  if (Y?.markerMode === "editable") {
    const n = [];
    Va(r, n), hd(e, n), Wa(r, n, !0), t.push(es("milestone", n));
  } else
    Va(r, t), hd(e, t), Wa(r, t, !0);
}
function gd(e, t, r) {
  t !== void 0 && r.push(
    es(e, [
      pt(e, "opening"),
      at(w + t, "attribute"),
      pt(e, "closing")
    ])
  );
}
function SS(e, t) {
  Y?.markerMode === "editable" && (gd("va", e.altnumber, t), gd("vp", e.pubnumber, t));
}
function MS(e, t) {
  e !== void 0 && t.push(
    es("cat", [
      pt("cat", "opening"),
      at(w + e, "attribute"),
      pt("cat", "closing")
    ])
  );
}
function ES(e, t, r) {
  e !== void 0 && r.push(
    es("ca", [
      pt("ca", "opening"),
      at(w + e, "attribute"),
      pt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    es("cp", [
      pt("cp", "opening"),
      at(w + t, "attribute")
    ])
  );
}
function md(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function AS(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function yd(e, t) {
  t.marker === hn && t.sid !== void 0 && e.push(t.sid), t.marker === Jn && t.eid !== void 0 && AS(e, t.eid);
}
function Ha(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [pd(o, [...n])] : o, c = e[i];
  yd(n, c);
  const l = Ha(
    e.slice(i + 1, s),
    md(t, i + 1),
    c.marker === hn,
    n
  ), u = pd(l, [...n]), d = e[s];
  yd(n, d);
  const f = Ha(
    e.slice(s + 1),
    md(t, s + 1),
    d.marker === hn,
    n
  );
  return [...a, u, ...f];
}
function Rr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(at(il() ? Uh(i) : i));
    else if (!i.type)
      kt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Lt.getType():
          n.push(lS(i));
          break;
        case Et.getType():
          n.push(uS(i));
          break;
        case ft.getType():
          Y?.hasSpacing || n.push(rS), n.push(dS(i)), SS(i, n);
          break;
        case ye.getType():
          n.push(
            fS(i, Rr(i.content, !0), t)
          );
          break;
        case Qe.getType():
          n.push(pS(i, Rr(i.content)));
          break;
        case Me.getType():
          n.push(bS(i, Rr(i.content)));
          break;
        case Vt.getType():
          vf(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && nl?.push(i.sid)), n.push(TS(i)), vS(i, n);
          break;
        case Mr.getType():
          n.push(_S(i.marker ?? ""));
          break;
        case Op:
          n.push(hS(i, Rr(i.content)));
          break;
        case Rp:
          n.push(gS(i, Rr(i.content)));
          break;
        case Ip:
          n.push(mS(i, Rr(i.content)));
          break;
        default:
          kt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(xS(i, Rr(i.content)));
      }
  }), Ha(n, r);
}
function Ga(e) {
  const t = e.findIndex(
    (n) => Uf(n) || Zf(n) || Cc(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    jk(n)
  );
  if (t >= 0) {
    const n = Ga(e.slice(0, t)), i = e[t], s = Ga(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Wp(n)))
    return [Wh(e)];
  return e;
}
const Br = {
  initialize: nS,
  reset: iS,
  serializeEditorState: sS
};
function Hh(e) {
  if (e && !P(e)) {
    if (M(e)) return e;
    if (D(e))
      for (const t of e.getChildren()) {
        const r = Hh(t);
        if (r) return r;
      }
  }
}
function PS() {
  const e = R();
  if (!N(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((M(t) && !P(t) ? kn(t) : void 0) && M(t)) {
      const i = he(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      Zn(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Hh(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(w) ? w : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return M(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Gh(e)) {
    if (!kn(t)) continue;
    Zn(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(w) && r.setTextContent(n.slice(w.length));
  }
  return !0;
}
function Gh(e) {
  const [t, r] = Xd(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!M(a) || P(a) || ne(a, oe) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function NS() {
  const e = R();
  if (!N(e)) return !1;
  const t = e.focus.getNode();
  return kn(t) ? Ce(Rc(t)) : !1;
}
function Jh() {
  let e = R();
  if (!N(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (P(t) && !Lc(t, e.anchor.offset)) {
    const c = t.getParent();
    if ($(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = R(), !N(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!M(t) || P(t) || !kn(t)) return !1;
  const r = Rc(t);
  if (!Ce(r)) return !1;
  const n = he(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  Zn(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return $(a) ? $c(a) : o.select(0, 0), !0;
}
const Yh = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${ep(Ue().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = R(), t = Sc(e), r = zc(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Qb(0, o);
        const a = wT(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || ap(c) && Mc(parseInt(n, 10), c);
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
function Ja(e, t) {
  return Me.isValidMarker(e, t) || !!Yh[e] || Qe.isValidMarker(e, t) || ye.isValidMarker(e, t);
}
function OS(e, t) {
  return ye.isNoteContentMarker(e) ? !1 : ye.isValidMarker(e, t);
}
function Xh(e, t, r, n, i, s) {
  const o = nh(
    e,
    void 0,
    void 0,
    t,
    n ?? Co(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function Ya(e, t, r, n, i, s, o) {
  if (Me.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = Xh(
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
  const a = LS(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = R();
      N(u) && (Kp(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = yu(d, Br, r), m = Bo(p);
      if (N(u)) {
        const g = u.anchor.getNode(), y = g.getParent(), T = kn(g), S = u.anchor.key === u.focus.key;
        if ($(m) && T && S && !fa(m, o))
          RS(
            u,
            m,
            g,
            r?.markerMode === "editable"
          );
        else if ($(m) && !S && !fa(m, o) && $S(u))
          IS(u, m, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          DS(
            u,
            () => Bo(p)
          );
        else if (D(m) && !m.isInline()) {
          const v = u.insertParagraph();
          if (v) {
            const E = v.getChildren();
            m.append(...E), v.replace(m), Ce(m) && pi(m) || m.selectStart();
          }
        } else if ($(m) && M(g) && !P(g) && $(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        fa(m, o)) {
          const v = g.getParent();
          if ($(v)) {
            const E = u.anchor.offset;
            if (E === 0) g.insertBefore(m);
            else if (E >= g.getTextContentSize()) g.insertAfter(m);
            else {
              const [x] = g.splitText(E);
              x.insertAfter(m);
            }
            m.getChildren().forEach((x) => {
              P(x) && x.setNested(!0);
            });
            const A = m.getChildren().find((x) => M(x) && !P(x));
            A && M(A) ? A.select(
              A.getTextContentSize(),
              A.getTextContentSize()
            ) : m.selectEnd();
          }
        } else if (M(g) && !P(g) && u.isCollapsed() && (j(y) || $(y) && j(y.getParent()))) {
          const v = $(y) ? y : void 0, E = v ? wS(g, u.anchor.offset) : [];
          let x = (v ?? g).insertAfter(m);
          if (Cr(m)) {
            const F = {
              ...r || Co(),
              markerMode: "hidden"
            }, L = yu(
              d,
              Br,
              F
            ), G = Bo(L);
            x = x.insertAfter(G);
          }
          if (E.length > 0 && v) {
            const F = Ys(v).append(...E);
            x.insertAfter(F), v.isEmpty() && v.remove();
          } else M(x.getNextSibling()) || x.insertAfter(he(w));
          D(x) && x.selectEnd();
        } else if (u.insertNodes([m]), GS(m), f) {
          const v = rf();
          v.add(m.getKey()), zi(v);
        } else if ($(m)) {
          const v = m.getChildren().find((E) => M(E) && !P(E));
          v && M(v) ? v.select(
            v.getTextContentSize(),
            v.getTextContentSize()
          ) : m.selectEnd();
        } else {
          const v = m.getNextSibling();
          v ? v.selectStart() : m.selectStart();
        }
      } else
        u?.insertNodes([m]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function wS(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function fa(e, t) {
  return ((t ?? zs).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function qS(e, t) {
  t && e.getChildren().forEach((i) => {
    P(i) && i.setNested(!0);
  }), e.getChildren().some((i) => P(i) && i.getMarkerSyntax() === "closing") || e.append(ot(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function RS(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && $(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !M(r)) {
    const o = e.anchor.offset;
    if (M(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else M(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = ni(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (Zn(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), M(i) && !i.getTextContent().startsWith(w) && i.setTextContent(w + i.getTextContent());
    const o = t.getChildren().find((a) => M(a) && !P(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => M(o) && !P(o));
  M(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function $S(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (P(n) || $(n)) continue;
    if (!M(n) || n.getType() !== ze.getType() || ne(n, oe) === "attribute") return !1;
    const i = Rc(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    kn(n) && (r = !0);
  }
  return r;
}
function IS(e, t, r) {
  const n = Gh(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!kn(a)) return;
    Zn(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(w) && c.setTextContent(l.slice(w.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(w) || i.setTextContent(w + i.getTextContent());
  const s = t.getChildren().find((a) => M(a) && !P(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function LS(e, t) {
  let r = Yh[e];
  return r || (Qe.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: Qe.getType(), marker: e, content: [] }] })
  } : ye.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: ye.getType(), marker: e };
      return (ye.isValidFootnoteMarker(e) || ye.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function DS(e, t) {
  const r = e.getNodes(), [n, i] = ni(e);
  let s;
  r.forEach((o, a) => {
    if (D(s) && s.isParentOf(o))
      return;
    const c = Qh(
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
    s || (s = t(), c.insertBefore(s), l = !0, $(s) && s.getChildren().some((d) => P(d) && d.getMarkerSyntax() === "opening") && qS(s, $(s.getParent()))), FS(c, s, l);
  }), (M(s) || D(s)) && s.selectEnd();
}
function ni(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function ol(e) {
  return Te(e) || j(e) || j(e.getParent());
}
function Qh(e, t, r, n, i) {
  if (!ol(e)) {
    if (M(e))
      return US(e, t, r, n, i);
    if (D(e) && e.isInline())
      return e;
  }
}
function US(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function FS(e, t, r) {
  if (M(t)) {
    const n = Xa(e, t);
    t.setTextContent(n), e.remove();
  } else if (D(t)) {
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
    Xa(e, t), r && $(t) && t.getChildren().some((s) => P(s)) && M(e) && !P(e) && !e.getTextContent().startsWith(w) && e.setTextContent(w + e.getTextContent());
  }
}
function Xa(e, t) {
  let r = e.getTextContent();
  if (M(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    Uc(n), M(n) || t.insertBefore(he(" "));
  }
  return r;
}
function Zh(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = _n(u, t);
    if (!f) return !1;
    const p = M(u) ? u.getTextContentSize() : 0;
    if (bd(f, r), M(u) && u.isAttached()) {
      const m = u.getTextContentSize(), g = Math.max(p - m, 0), y = Math.max(0, Math.min(d - g, m)), T = R();
      N(T) && T.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = ni(e);
  if (!cl(n, t, s, o)) return !1;
  const a = al(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = _n(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = ng(d, a);
    f && (bd(f, r), l = !0);
  }), ig(a, i), l;
}
function bd(e, t) {
  e.getChildren().forEach((n) => {
    Dt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === It) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    M(n) && i.startsWith(w) && n.setTextContent(i.slice(w.length));
  }), ka(e);
}
function al(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Qh(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    M(o) && n.push(o);
  }), n;
}
function _n(e, t) {
  let r = e, n;
  for (; r && !Ce(r); ) {
    if (j(r)) return;
    !n && $(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function eg(e) {
  const t = nt(
    e,
    (r) => j(r) || Ce(r)
  );
  return j(t);
}
function tg(e) {
  return e.filter(
    (t) => !ol(t) && (M(t) || D(t) && t.isInline())
  );
}
function zS(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!M(i) || ol(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function KS(e, t, r) {
  return e.getChildren().some(
    (n) => D(n) && t.some((i) => n.isParentOf(i)) && !rg(n, r)
  );
}
function cl(e, t, r, n, i) {
  const s = tg(e), o = zS(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = _n(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !KS(l, s, o);
  });
}
function rg(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Dt(r));
}
function ng(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (D(u) && t.some((d) => u.isParentOf(d))) {
      if (!rg(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Dt(n[s - 1]) && (s -= 1), o < n.length - 1 && Dt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(Ys(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(Ys(e).append(...c)), e;
}
function Ys(e) {
  return ry(e);
}
function ig(e, t) {
  const r = R(), n = e[0], i = e[e.length - 1];
  if (!N(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function jS(e, t, r) {
  if (e.isCollapsed()) {
    const l = _n(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (ru(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = ni(e);
  if (!cl(n, r, i, s, t)) return !1;
  const o = al(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = _n(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = ng(u, o);
    d && (ru(d, t), c = !0);
  }), c;
}
function BS(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = ni(e);
  if (!!!i?.some(
    (y) => cl(s, y, o, a)
  ) && !VS(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const T = R();
    N(T) && Zh(T, y, n) && (l = !0);
  });
  const u = R();
  if (!N(u)) return l;
  const d = u.isBackward(), [f, p] = ni(u), m = al(
    u.getNodes(),
    f,
    p
  );
  if (m.length === 0) return l;
  const g = m.filter(
    (y) => !eg(y) && !_n(y, t)
  );
  return g.length > 0 && (WS(g).forEach((y) => HS(y, t)), l = !0), ig(m, d), l;
}
function VS(e, t) {
  return tg(e).some(
    (r) => !eg(r) && !_n(r, t)
  );
}
function WS(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function HS(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => $(a) && a.getMarker() === t
  ), s = i ? Ys(i) : yr(t);
  e[0].insertBefore(s), s.append(...e), i === r || Xa(e[0], s);
}
function GS(e) {
  me(e) && (Uc(e.getPreviousSibling()), Gp(e.getNextSibling()));
}
const sg = {
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
}, kd = "psc-active-text", _s = "psc-empty-text";
function JS({ viewOptions: e }) {
  const [t] = le(), r = X(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return K(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(kd), r.current = o, o && t.getElementByKey(o)?.classList.add(kd);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        io,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${_s}`);
          if (!c) return !1;
          const l = cs(c);
          if (!me(l)) return !1;
          const u = l.getParent();
          if (!D(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        Rt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = pa(), f = YS(), p = [], m = [];
          return Ue().getChildren().forEach((g) => {
            if (!D(g)) return;
            const { emptyKeys: y, nonEmptyKeys: T } = QS(g);
            p.push(...y), m.push(...T);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: m };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(_s) : t.getElementByKey(d)?.classList.add(_s);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(_s));
      }),
      t.registerCommand(
        hc,
        () => (i(void 0), !1),
        Rt
      ),
      t.registerCommand(
        ny,
        () => {
          const o = t.getEditorState().read(pa);
          return o !== r.current && i(o), !1;
        },
        Rt
      )
    ];
    return i(t.getEditorState().read(pa)), Xe(...s);
  }, [t, n]), null;
}
function pa() {
  return XS(R() ?? void 0)?.getKey();
}
function YS() {
  const e = R();
  if (!N(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!D(n)) return;
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
    me(s[a]) && (o = s[a].getKey());
  return o;
}
function XS(e) {
  if (N(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function QS(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!me(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (me(c)) break;
      if (!(Wt(c) || P(c)) && c.getTextContent().replaceAll(Os, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const ZS = /^\+/;
function ll(e, t) {
  const r = t.replace(ZS, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function og(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function ag(e, t) {
  return og(e, t) !== void 0;
}
function Qa(e, t) {
  const r = og(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function Xs(e, t, r) {
  const n = D(e) ? e.getChildren().filter(P) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function eM(e, t, r, n, i) {
  const s = ll(n, t);
  if (!s) {
    Xs(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && Xs(e, "invalid", i);
}
function Di(e, t, r, n, i) {
  for (const s of e.getChildren())
    if ($(s)) {
      const o = s.getMarker();
      i || eM(s, o, t, r, n), Di(s, t, r, n, i || o === "xq");
    } else if (me(s)) {
      if (i) continue;
      const o = ll(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else j(s) ? Di(s, s.getMarker(), r, n, i) : Le(s) || D(s) && Di(s, t, r, n, i);
}
function tM(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = ll(e, a);
    if (!c) {
      Xs(o, "unknown", r), Qa(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    Qa(n, l) || Xs(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Ue().getChildren())
    Le(o) || (Tt(o) || We(o) ? i(o, o.getMarker()) : se(o) ? (i(o, o.getMarker()), s(o) && Di(o, o.getMarker(), e, r, !1)) : D(o) && s(o) && Di(o, "p", e, r, !1));
  return r;
}
function rM(e) {
  return !!e?.includes("(basic)");
}
function nM(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function cg(e, t) {
  return !e.startsWith("zpa") && e !== "c" && Ja(e, t);
}
function ul(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function lg(e, t) {
  const r = [];
  for (const n of t) {
    const i = ul(e, n);
    i && Qa(r, i);
  }
  return r;
}
function Es(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: nM(e.description),
    isBasic: rM(e.description)
  };
}
function iM(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function Za(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : iM(e.marker, t.marker);
}
function ec(e, t, r) {
  if (t.noteMarker) return [];
  const n = lg(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && cg(i.marker, r)
  ).filter((i) => {
    const s = ul(e, i.marker);
    return s !== void 0 && ag(n, s);
  }).map((i) => Es(i, "paragraph")).sort(Za);
}
function sM(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => cg(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Es(c, "character")).sort(Za);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Es(c, "character")),
    ...a.map((c) => Es(c, "note"))
  ].sort(Za);
}
function oM(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function aM(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function cM(e, t, r) {
  return [
    ...oM(e, t.openCharMarkers),
    ...sM(e, t, r)
  ].sort(aM);
}
function lM(e, t, r) {
  if (t.source === "paragraph") return ec(e, t, r);
  const n = cM(e, t, r);
  return n.length > 0 ? n : ec(e, t, r);
}
function uM(e, t, r) {
  const n = ec(e, t, r), i = lg(e, t.previousParaMarkers), s = ul(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && ag(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const Nn = String.raw`\w-`, ug = "a-z0-9", dM = `[a-z][${ug}]*`, fM = new RegExp(
  String.raw`^\\(\+?[${Nn}]+)[ \u00A0]$`
), dg = new RegExp(String.raw`^\\(\+?[${Nn}]+)$`), pM = new RegExp(String.raw`^\\\+?[${Nn}]*\*$`), hM = new RegExp(
  String.raw`^\\(\+?[${Nn}]+)(?:[ \u00A0]|$)`
), gM = new RegExp(
  String.raw`^\\(\+?)([${Nn}]+)`
), mM = new RegExp(
  String.raw`\\\+?[${Nn}]+(?:\\?\*|[ \u00A0])`
), yM = new RegExp(
  String.raw`\\\+?[${Nn}]*$`
), bM = new RegExp(
  String.raw`^\\(${dM})( |$)`
), kM = new RegExp(
  String.raw`\\[${ug}+*]*$`,
  "i"
), tt = "￼";
function fg(e) {
  return e.length > 1 && e.startsWith(w) && e.charAt(1) !== tt ? e.slice(1) : e;
}
function Td(e) {
  return Ac(e) ? e.markerSyntax ?? "opening" : void 0;
}
function pg(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = Br.serializeEditorState(
    {
      type: hr,
      version: pr,
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
  for (; Td(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== St(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Td(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function Cs(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Ai(e, t) {
  yM.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += tt;
}
function qt(e) {
  return e.replaceAll(w, " ");
}
function TM(e, t, r = !1) {
  if (vo(t)) return qt(e);
  if (e === w) return " ";
  const n = r && e.startsWith(w), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(w, "~");
}
function Ui(e) {
  const t = e.getTextContent();
  return En(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function dl(e, t) {
  const r = e[t];
  if (!je(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = mo(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!P(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function hg(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function fl(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = Wi(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function pl(e) {
  return !!e.getUnknownAttributes();
}
function Eo(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && oo(e);
}
function gg(e, t) {
  return je(e) ? !Eo(e.getMarker(), t) : j(e) || Le(e) ? !0 : Ne(e) ? pl(e) : $(e) ? mg(e, t) : !1;
}
function mg(e, t) {
  if (lk(e)) return !0;
  const r = e.getMarker();
  return !Xy(r) && t(r) === void 0;
}
const Ot = "", wt = "";
function xd(e) {
  return e.flatMap((t) => Be(t) ? t.getChildren() : [t]);
}
function wi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (je(s)) {
      const o = dl(e, i);
      Eo(s.getMarker(), r) && hg(o) ? (t.push(
        Ot,
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
      ), wi(xd(o), t, r), t.push(wt)) : t.push(tt), i += o.length;
    } else if (Ne(s)) {
      const o = fl(e, i);
      pl(s) ? t.push(tt) : (t.push(
        Ot,
        "verse",
        qt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), wi(xd(o), t, r), t.push(wt)), i += o.length;
    } else P(s) ? t.push(Ot, "marker", qt(s.getTextContent()), wt) : Hr(s) ? t.push(Ot, "unmatched", qt(s.getTextContent()), wt) : gg(s, r) ? t.push(tt) : no(s) ? t.push(" ") : M(s) ? t.push(
      qt(
        n ? fg(Ui(s)) : Ui(s)
      )
    ) : $(s) ? (t.push(Ot, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), wi(s.getChildren(), t, r, !0), t.push(wt)) : D(s) ? (t.push(Ot, s.getType()), wi(s.getChildren(), t, r), t.push(wt)) : t.push(tt);
  }
}
function hi(e, t) {
  const r = [];
  return wi(e, r, t), r.join("");
}
function kr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function ii(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function hl(e) {
  return e.type ?? "";
}
function yg(e, t, r) {
  return t === "closing" ? rt(e, r) : t === "selfClosing" ? rt("") : Oe(e, r);
}
function ha(e, t) {
  const r = e[t];
  if (!(!r || hl(r) !== "attribute-run"))
    return kr(r) ?? [];
}
function gi(e, t) {
  const r = [];
  return qi(e, r, t), r.join("");
}
function qi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = hl(s);
    if (o === "ms") {
      const l = s, u = ha(e, i + 1);
      u && Eo(l.marker ?? "", r) ? (t.push(
        Ot,
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
      ), qi(u, t, r), t.push(wt), i += 1) : t.push(tt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(tt);
        continue;
      }
      t.push(
        Ot,
        "verse",
        qt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = ha(e, i + 1 + u);
      for (; d; )
        qi(d, t, r), u++, d = ha(e, i + 1 + u);
      t.push(wt), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Ot,
        "marker",
        qt(
          yg(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        wt
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(Ot, "char", JSON.stringify(l.unknownAttributes ?? null)), qi(kr(s) ?? [], t, r, !0), t.push(wt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(tt);
      continue;
    }
    if (o === "unmatched") {
      t.push(Ot, "unmatched", qt(ii(s) ?? "")), t.push(wt);
      continue;
    }
    const a = ii(s);
    if (a !== void 0) {
      t.push(qt(n ? fg(a) : a));
      continue;
    }
    const c = kr(s);
    c ? (t.push(Ot, o), qi(c, t, r), t.push(wt)) : t.push(tt);
  }
}
function Ao(e) {
  let t = 0;
  for (const r of e) {
    const n = kr(r);
    if (n) {
      t += Ao(n);
      continue;
    }
    const i = ii(r);
    if (i !== void 0)
      for (const s of i) s === tt && t++;
  }
  return t;
}
function ts(e, t, r, n, i) {
  Cn(e.getChildren(), t, r, n, i);
}
function Cn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (P(a))
      Cs(t, a, qt(a.getTextContent()));
    else if (je(a)) {
      s();
      const c = dl(e, o);
      Eo(a.getMarker(), r) && hg(c) ? Cn(c, t, r, n) : Ai(t, [a, ...c]), o += c.length;
    } else if (j(a) || Le(a))
      s(), Ai(t, [a]);
    else if (Ne(a)) {
      s();
      const c = fl(e, o);
      pl(a) ? Ai(t, [a, ...c]) : (Cs(t, a, qt(Ui(a))), Cn(c, t, r, n)), o += c.length;
    } else if ($(a))
      s(), mg(a, r) ? Ai(t, [a]) : ts(a, t, r, n, { pending: !0 });
    else if (no(a))
      s(), Cs(t, a, " ");
    else if (M(a)) {
      const c = En(a) || ne(a, oe) === "attribute", l = s() && !c;
      Cs(
        t,
        a,
        c ? qt(Ui(a)) : TM(Ui(a), n, l)
      );
    } else D(a) ? ts(a, t, r, n, i) : (s(), Ai(t, [a]));
  }
}
function gl(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Le(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return ts(e, i, t, r), i;
}
function bg(e, t) {
  let r = 0;
  const n = (i) => {
    if (M(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(tt);
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
    } else D(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function tc(e, t = []) {
  for (const r of e)
    Ne(r) ? t.push(r) : D(r) && tc(r.getChildren(), t);
  return t;
}
function kg(e) {
  let t = 0;
  const r = (n) => {
    if (M(n))
      for (const i of n.getTextContent()) i === tt && t++;
    else D(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function On(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === tt && t++;
    else r.content && (t += On(r.content));
  return t;
}
function xM(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), D(i) && ts(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const rs = /\s/;
function Tg(e) {
  return e.filter(Po).length;
}
function Po(e) {
  if (e.isSentinel) return !1;
  const t = re(e.key);
  return M(t) && !P(t) && ne(t, oe) === "attribute";
}
function _M(e) {
  if (e.isSentinel) return !1;
  const t = re(e.key);
  return P(t) || Po(e);
}
function _d(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Po(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      rs.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function ml(e, t, r) {
  const n = _d(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !_M(i) ? _d(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: Tg(e.spans) };
}
function ga(e) {
  if (e.isSentinel) return !1;
  const t = re(e.key);
  return P(t) && t.getMarkerSyntax() !== "opening";
}
function CM(e) {
  const t = re(e.key);
  if (!P(t)) return !1;
  const r = t.getParent();
  return $(r) ? (r.selectNext(0, 0), !0) : !1;
}
function vM(e) {
  const t = re(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = Ne(t) ? fl(r, n) : je(t) ? dl(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function xg(e, t, r) {
  const { text: n, spans: i } = e, s = Tg(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && !ga(d);
    if (!(o && Po(d))) {
      if (u) {
        if (!p) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let m = 0; m < f; m++) {
        const g = n[d.start + m];
        if (c === 0 && (l === 0 || !rs.test(g))) {
          if (p) {
            a = { key: d.key, offset: m };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? rs.test(g) || c-- : l--;
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
    if (d && ga(d) && CM(d) || d?.isSentinel && vM(d)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !ga(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = re(a.key);
    if (d && M(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find(D)?.selectStart();
}
function _g(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(D)?.selectStart();
      return;
    }
    xg(xM(e, n, i), t, e);
  }
}
function SM(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(D)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  Cn(e, s, n, i), xg({ text: s.text, spans: s.spans }, t, e);
}
function Cg(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  for (const g of e) {
    const y = gl(g, n, r);
    if (!y)
      return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
    s.text.length > 0 && (s.text += " ");
    const T = s.text.length;
    y.spans.forEach(
      (S) => s.spans.push({ ...S, start: S.start + T, end: S.end + T })
    ), s.sentinels.push(...y.sentinels), s.text += y.text;
  }
  let o, a = !1;
  const c = R();
  if (N(c)) {
    for (let g = c.anchor.getNode(); g; g = g.getParent())
      if (e.some((y) => y.is(g))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = ml(s, c.anchor.key, c.anchor.offset));
  }
  const l = xr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (On(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = Br.serializeEditorState(
    { type: hr, version: pr, content: l },
    r
  );
  if (gi(u.root.children, n) === hi(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((g) => to(g));
  if (kg(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = tc(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), p = e[0];
  d.forEach((g) => p.insertBefore(g)), bg(d, s.sentinels), e.forEach((g) => g.remove());
  const m = tc(d);
  for (let g = 0; g < f.length && g < m.length; g++)
    m[g].getNumber() === f[g].number && m[g].setSid(f[g].sid);
  return _g(d, o, a, n, r), !0;
}
function vg(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Me.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!P(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(cr(s) || M(s) && s.getTextContent() === St(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const u = n[a - 1];
    if (!P(u) || u.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return Cn(c, l, t, r), { out: l, contentNodes: c };
}
function Sg(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(tt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function MM(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = vg(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = R();
  if (N(u)) {
    for (let E = u.anchor.getNode(); E; E = E.getParent())
      if (e.is(E)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = ml(o, u.anchor.key, u.anchor.offset));
  }
  const d = xr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (On(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], m = Sg(p), g = pg(e, p, m, r);
  if (g.failure !== void 0)
    return g.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      g.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Ao(g.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const y = e.getCategory() !== m;
  if (y && e.setCategory(m), gi(g.children, n) === hi(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  const T = g.children.map((E) => to(E));
  if (kg(T) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), y;
  const S = a[0];
  if (S)
    T.forEach((E) => S.insertBefore(E));
  else {
    const E = e.getChildren().find((A) => P(A) && A.getMarkerSyntax() === "closing");
    T.forEach((A) => E ? E.insertBefore(A) : e.append(A));
  }
  bg(T, o.sentinels);
  const v = new Set(o.sentinels.flat().map((E) => E.getKey()));
  return a.forEach((E) => {
    v.has(E.getKey()) || E.remove();
  }), SM(T, c, l, n, r), !0;
}
const Mg = /* @__PURE__ */ new Set(["ca", "cp"]), yl = "cp";
function Eg(e) {
  if (!ir(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (ts(e, t, nr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = xr(r, { getMarker: nr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === yl)
  );
}
function No(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if ($(r) && Mg.has(r.getMarker()) || Eg(r)) {
      t.push(r);
      continue;
    }
    se(r) && r.getMarker() === yl && t.push(r);
    break;
  }
  return t;
}
function EM(e) {
  const t = (n) => $(n) && Mg.has(n.getMarker()) || Eg(n);
  if (t(e) || se(e) && e.getMarker() === yl)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if ($e(n)) return n;
      if (!t(n)) return;
    }
}
function Ag(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = No(e);
  if (n.some((s) => se(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Cn(e.getChildren(), i, t, r), Cn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function AM(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...No(e)], o = Ag(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = R();
  if (N(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((g) => g.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = ml(o, l.anchor.key, l.anchor.offset));
  }
  const u = xr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (On(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = Br.serializeEditorState(
    { type: hr, version: pr, content: u },
    r
  );
  if (gi(f.root.children, n) === hi(s, n)) {
    let m = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), m = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), m = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const p = f.root.children.map((m) => to(m));
  return $e(p[0]) ? (p.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), _g(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function ns(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Le(n)) return;
    !t && (j(n) || se(n) || $e(n)) && (t = n), iy(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? EM(r) : void 0) ?? t;
}
function Kt(e, t) {
  const r = ns(e);
  return r ? j(r) ? MM(r, t) : $e(r) ? AM(r, t) : Cg([r], t) : !1;
}
const PM = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Cd(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !PM.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function As(e, t) {
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
          t.push(`\\${n}`), Cd(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), As(r.content, t), Cd(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), As(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), As(r.content, t);
      }
    }
}
function vd(e, t, r) {
  const n = ns(e);
  if (!se(n)) return !1;
  const i = R();
  if (!N(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = gl(n, t, r);
  if (!o) return !1;
  const a = xr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    rs.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  As(a, l);
  for (const u of l.join("").replaceAll(w, "~")) {
    if (rs.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function NM(e) {
  return [ot(e), po()];
}
function bl(e) {
  Gt(e, 2);
}
function OM(e) {
  const t = R();
  if (!N(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function kl(e) {
  const t = OM(e);
  e.splice(0, 0, NM(e.getMarker())), t && bl(e);
}
function Qs(e, t) {
  e.setMarker(t), kl(e), bl(e);
}
function wM(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!En(n)) {
    if (M(n) && !P(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(w), mt(n, oe, sr), n.setMode("token");
      return;
    }
    if (lp(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(po());
  }
}
function Sd(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : D(n) ? n.getChildrenSize() : 0;
  if (r === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = n; !s.is(t); ) {
    if (r === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function Fi(e) {
  for (let t = e; t; t = t.getParent())
    if (se(t)) return t;
}
function qM(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Fi(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Fi(r.getNode())?.is(s) ?? !1, a = Fi(n.getNode())?.is(s) ?? !1;
    return !(o && !Sd(r, s, "start") || a && !Sd(n, s, "end"));
  });
}
function rc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = R();
  if (!(!N(r) || r.isCollapsed()))
    for (const n of qM(r)) t.add(n.getKey());
}
function RM(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = R();
  if (!N(r) || !r.isCollapsed()) return;
  const n = Fi(r.focus.getNode());
  n && t.add(n.getKey());
}
function $M(e) {
  const t = R();
  !N(t) || t.isCollapsed() || t.getNodes().some((r) => P(r)) && (rc(e), t.removeText());
}
function IM(e, t) {
  if (!di(t.viewOptions)) return;
  if (Dt(e.getFirstChild())) {
    wM(e, t);
    return;
  }
  if (t.splitExpected.current) {
    kl(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => se(o) && !o.is(e))) {
      Qs(e, rr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (se(r)) {
    const n = e.getChildren().filter((a) => !En(a)), i = R();
    let s = !1;
    if (N(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Fi(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || D(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Gt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  Qs(e, rr);
}
function LM(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = tr(t, ao(e.getMarker()));
  return r === "" ? void 0 : r;
}
function DM(e) {
  const t = e.getChildren().filter((s) => !P(s) && ne(s, oe) !== "attribute"), r = t[0];
  r && M(r) && r.getTextContent().startsWith(w) && r.setTextContent(r.getTextContent().slice(1));
  const n = LM(e);
  n && t.push(he(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function UM(e, t) {
  const r = e.getChildren(), n = r.some((s) => P(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => M(c) && !P(c) && c.getTextContent() === St(s)
    ), a = si(e).some(({ node: c }) => P(c));
    if (!o && !a) return;
    r.forEach((c) => {
      P(c) || (M(c) && c.getTextContent() === St(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => P(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function FM(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(P(r) && r.getMarkerSyntax() === "opening")) {
    DM(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => P(o) && o.getMarkerSyntax() === "closing");
  i && !s && Kt(e, t);
}
function Pg(e, t, r) {
  if (!P(e.getFirstChild()) && r?.markerMode === "editable" && di(r)) {
    Qs(e, t);
    return;
  }
  gh(e, t);
}
function Ng() {
  const e = R();
  if (!N(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Og(e);
    return t !== "removed" ? t : (nc(), "handled");
  }
  return nc() ? "handled" : "declined";
}
function zM(e, t) {
  if (!t) return e;
  const r = bM.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function Md(e, t) {
  const r = R();
  if (!N(r)) return "declined";
  if (r.isCollapsed()) {
    if (!wg())
      return "declined";
  } else {
    const s = Og(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => zM(s, t)
  );
  Ed(n ?? "");
  for (const s of i)
    nc(), Ed(s);
  return "handled";
}
function KM(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = cs(n);
  if (!i) return !1;
  const s = Ht(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !M(i) || P(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Og(e) {
  const t = Ht(e.anchor.getNode()), r = Ht(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), jM() ? "removed" : "needs-plain-split");
}
function Ed(e) {
  if (e === "") return;
  const t = R();
  N(t) && t.insertText(e);
}
function jM() {
  const e = R();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = Ht(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => P(r) && r.getMarkerSyntax() === "opening");
}
function wg() {
  const e = R();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Ht(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function nc() {
  const e = R();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = wg();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = yr("fp", { closed: "false" });
  i.append(ot("fp"));
  const s = M(t) && !P(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    Zn(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (Zb(u), i.append(u));
  }
  return i.getChildren().every(P) && i.append(he(It)), qg(i), !0;
}
function qg(e) {
  const t = e.getChildren().find((r) => !P(r));
  if (M(t)) {
    const r = t.getTextContent().startsWith(w) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (D(t)) {
    qg(t);
    return;
  }
  e.selectEnd();
}
function BM(e) {
  const t = [];
  let r = e;
  for (; r; )
    $(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function VM(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Ue().getChildren()) {
    if (t && n.is(t)) break;
    (Tt(n) || We(n) || se(n)) && r.push(n.getMarker());
  }
  return r;
}
function WM(e) {
  let t = e;
  for (; D(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function HM(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Dt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && En(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(WM(i)) && r === 0 : !1;
}
function GM(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Dt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && En(i) && t.is(i) && r === 0;
}
function JM() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function YM() {
  const e = R();
  if (!N(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = nt(t, se), s = !n && (!i || GM(i, t, r)) ? "paragraph" : "character", o = Ht(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: VM(t),
    openCharMarkers: BM(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Lc(t, r),
    anchorRect: JM()
  };
}
function XM() {
  const e = R();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!M(t) || P(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = kM.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function QM(e, t, r) {
  Pg(e, t, r), bl(e);
}
function ZM(e, t, r) {
  const n = R();
  if (!N(n)) return;
  const i = n.focus.getNode(), s = nt(i, se);
  if (t === "backslash" && s && HM(s, i, n.focus.offset)) {
    QM(s, e, r);
    return;
  }
  $g(e, r);
}
function eE(e, t) {
  const r = R();
  return !N(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Rg(e) {
  const t = R();
  return N(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function tE(e, t, r, n) {
  if (N(R()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && XM(), e.kind === "closeTag") {
    Rg(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Ng() !== "declined") return;
  if (e.kind === "paragraph" && Qe.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    ZM(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Me.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Xh(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  Ya(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: as(), reference: r });
}
function $g(e, t) {
  const r = R();
  if (!N(r)) return;
  const n = di(t);
  if (Jh()) {
    const s = R();
    if (!N(s)) return;
    const o = nt(s.anchor.getNode(), se);
    if (!o) return;
    o.setMarker(e), n && kl(o);
    return;
  }
  const i = r.insertParagraph();
  se(i) && (n ? Qs(i, e) : i.setMarker(e));
}
function rE() {
  const [e] = le();
  return K(() => e.registerCommand(of, () => !0, Rt), [e]), null;
}
function Ig(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Paragraph : !(Me.isValidMarker(r) || oo(r));
}
function nE(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Character : !(Me.isValidMarker(r) || oo(r));
}
function iE(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = hM.exec(e)?.[1];
  return r === void 0 ? !1 : !Ig(r, t);
}
function Lg(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !iE(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!se(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (se(i))
    return [i, r];
}
function Dg(e, t) {
  const r = Lg(e, t.getMarker);
  return r !== void 0 && Cg(r, t);
}
function sE(e, t) {
  const r = R();
  N(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function Ug(e) {
  const t = gM.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function oE(e) {
  const t = R();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = Ug(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function aE(e) {
  const t = R();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (j(e.getParent()) && M(r)) {
    const n = r.getNextSibling();
    if ($(n)) {
      $c(n);
      return;
    }
  }
  M(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Ad(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = Ug(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  aE(e);
}
function Pd(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Fg(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Kt(e, r);
  const n = oE(e), i = e.getParent();
  if (se(i)) {
    if (!Ig(t, r.getMarker))
      return Dg(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Kt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Pd(s, t) && Ad(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if ($(i) || j(i)) {
    const s = t.replace(/^\+/, "");
    if (!($(i) ? nE(t, r.getMarker) : Me.isValidMarker(s)))
      return Kt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Kt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(P).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (sE(c, rt(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Pd(a, s) && Ad(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Kt(e, r);
}
function cE(e) {
  const t = R();
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
function lE(e, t) {
  const r = e.getTextContent();
  if (Wr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Be(e.getParent()) && Pc(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !cE(e)) {
    ok(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = fM.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), Fg(e, n[1], t);
      return;
    }
    if (pM.test(r)) {
      t.pendingKeys.delete(e.getKey()), Kt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = rt(e.getMarker(), e.getNested());
    if ($(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = R(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = he(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function uE(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (Np(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function zg(e) {
  if (!bf(e)?.length)
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
const Pi = zg("v"), dE = zg("c"), Nd = /^[ \u00A0]*$/;
function Od(e, t, r) {
  const n = e.getNextSibling();
  if (M(n) && n.getType() === ze.getType() && n.getMode() === "normal" && ne(n, oe) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = he(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function fE(e, t) {
  const r = e.getTextContent(), n = $t("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (Pi.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = Pi.valueAndRest.exec(c);
    if (l && Nd.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (Pi.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Pi.valueAndRest.exec(r);
  if (!s) {
    const c = Pi.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = R(), p = N(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent($t("v", u));
      const m = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      Od(e, d, m);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Kt(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), Nd.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent($t("v", o)), a && Od(e, a, a.length);
}
const pE = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function hE(e, t) {
  const r = e.getParent();
  if (!j(r) || r.getIsCollapsed() !== !1 || !bf(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!P(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === St(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = pE.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(St(a)), !0;
}
function gE(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!M(t)) return;
  const r = $t("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = dE.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Kg(e) {
  if (je(e)) {
    const { wrapper: t } = mo(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (j(e)) {
    const { wrapper: t } = yp(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if ($e(e)) {
    const t = [], r = bp(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Tp(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Ne(e)) {
    const t = [], r = Wi(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = Wi(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function mE(e) {
  const t = R();
  if (!N(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Kg(e).some((n) => r.is(n));
}
function yE(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && se(e) && lp(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Gi)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && ds(l, e) && (i || mE(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Kg(e))
    l.remove(), n = !0;
  let s = !1;
  if ($(e)) {
    const l = fk(e);
    l !== void 0 && Hy(l) && (Cp(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Gi)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (aT(l, e)) {
        Yi(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Up(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      To(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function wd(e) {
  return M(e) && e.getType() === ze.getType() && e.getMode() === "normal" && ne(e, oe) !== "attribute";
}
function bE(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = re(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && wd(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && wd(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function vs(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = bE(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = re(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (P(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (Wr(c)) continue;
      const m = dg.exec(p);
      c.getMarkerSyntax() === "opening" && m ? n = Fg(c, m[1], e) || n : r === "idle" && vd(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Dg(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Kt(c, e) || n;
      continue;
    }
    const l = bn(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = yE(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && vd(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = Kt(u, e) || n;
    }
  }
  return n;
}
function jg(e) {
  if (Hr(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if ($(t)) return Ri(t) !== void 0;
  return !1;
}
function kE(e) {
  const t = bn(e);
  if (!t) return !1;
  const r = yn(t.kind);
  return !To(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function qd(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (Tt(t) || Le(t) || qp(t)) return !0;
  return !1;
}
function TE(e, t) {
  const r = e.getTextContent(), n = ne(e, oe), i = e.getParent();
  if (n !== "attribute" && $e(i)) {
    r.replace(/^[ \u00A0]+/, "") === $t("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (hE(e, t)) return;
  if (n === "attribute") {
    kE(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && jg(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !qd(e))
      t.pendingKeys.add(e.getKey());
    else if (xp(e)) t.pendingKeys.add(e.getKey());
    else if ($e(ns(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      $(a) && vp(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (qd(e)) return;
  const s = R(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (mM.test(o)) {
    if (rb(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), Kt(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function xE(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Up(e, t);
}
function _E(e) {
  const t = (r) => {
    if (P(r)) {
      Wr(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (Hr(r)) {
      Np(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Gi)
      n.settleScope !== "none" && n.ownerPredicate(r) && (ds(n, r) || xE(n, r)) && e.pendingKeys.add(r.getKey());
    if (Ne(r)) {
      r.getTextContent() !== $t("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (M(r)) {
      if (r.getType() !== ze.getType() || ne(r, oe) === "attribute") return;
      const n = r.getParent();
      if ($e(n)) {
        r.getTextContent() !== $t("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && jg(r) || i.includes("//") || xp(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if ($(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Le(r) && !Tt(r)) {
      if (Be(r) && r.getChildrenSize() === 0) {
        const n = bn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      D(r) && r.getChildren().forEach(t);
    }
  };
  Ue().getChildren().forEach(t);
}
function CE(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ne(e, oe);
  if (r === "attribute" || r === sr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (Tt(o) || $e(o) || Le(o)) return;
  const n = t.startsWith(w) && $(e.getParent()), i = n ? t.slice(1) : t, s = (n ? w : "") + i.replace(/ (?=[ \u00A0])/g, w).replace(new RegExp("(?<=\\u00A0) ", "g"), w);
  s !== t && e.setTextContent(s);
}
function vE(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function ic(e) {
  const t = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!t) return;
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(t.getData("text/plain")), i = t.getData("text/html"), s = i ? r(vE(i)) : "";
  return {
    plainText: n,
    html: i,
    htmlText: s,
    text: n || s,
    isInternal: !!t.getData("application/x-lexical-editor")
  };
}
function SE(e) {
  const t = ic(e);
  if (!t || t.isInternal) return !1;
  const { plainText: r, html: n, htmlText: i } = t, s = r.includes(w) ? r : n.includes(w) || i.includes(w) ? i : void 0;
  if (!s) return !1;
  const o = R();
  if (!N(o)) return !1;
  e?.preventDefault();
  const a = s.replaceAll(w, "~"), c = a.split(`
`);
  if (c.length < 2)
    return o.insertText(a), !0;
  o.isCollapsed() || o.removeText();
  const l = as();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(Ps, void 0), u === "") return;
    const f = R();
    N(f) && f.insertText(u);
  }), !0;
}
function ME(e) {
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
function EE(e) {
  const t = R();
  if (!N(t) || t.isCollapsed()) return;
  const r = {
    "text/plain": t.getTextContent().replaceAll(w, " ")
  }, n = cy(e), i = ly(e);
  return n && (r["text/html"] = ME(n)), i && (r["application/x-lexical-editor"] = i), r;
}
function Rd(e, t, r) {
  const n = R();
  if (!N(n) || n.isCollapsed()) return !1;
  const i = EE(t);
  if (!i) return !1;
  if (!e || !("clipboardData" in e))
    return ay(t, null, i), r && n.removeText(), !0;
  if (e.clipboardData == null) return !1;
  e.preventDefault();
  for (const [s, o] of Object.entries(i)) e.clipboardData.setData(s, o);
  return r && n.removeText(), !0;
}
const Bg = af(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function ma(e) {
  const t = e();
  return Dr(Qd), Dr(_f), t;
}
const $d = 8, AE = 1e3;
function Bn(e, t) {
  const r = Ne(e) ? ["va", "vp"] : je(e) ? ["milestone"] : j(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    fT(yn(n), e, t.pendingKeys);
}
function PE(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(gc) || i.updateTags.has(Ki)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = re(o);
        if (!c) continue;
        const l = bn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = re(o.getKey());
        c?.isAttached() && yn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Xe(
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
    e.registerMutationListener(ze, r),
    e.registerMutationListener(ar, r),
    e.registerMutationListener(_r, r),
    e.registerMutationListener(vr, r)
  );
}
function NE(e, t, r) {
  return Xe(
    e.registerCommand(
      dr,
      (n) => {
        if (_h()) return !1;
        const i = ic(n);
        if (!i) return !1;
        const s = i.text;
        if (s.includes(`
`)) {
          const a = (r ? s.replaceAll(w, "~") : s).split(`
`);
          let c = Md(a, t.getMarker);
          if (c === "declined" && KM(e) && (c = Md(a, t.getMarker)), c === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      fr
    ),
    e.registerCommand(
      dr,
      (n) => {
        const i = ic(n);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !NS()) return !1;
        n?.preventDefault();
        const o = R();
        return N(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Ps, void 0), a === "") return;
          const l = R();
          N(l) && l.insertText(a);
        }), !0;
      },
      Ie
    ),
    e.registerCommand(
      dr,
      () => (t.splitExpected.current = !0, !1),
      Rt
    )
  );
}
function OE({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n
}) {
  const [i] = le(), s = e?.markerMode === "editable", o = !!e && vo(e), a = X(void 0), c = X(n);
  return K(() => {
    c.current = n;
    const l = a.current;
    l && (e && (l.viewOptions = e), l.getMarker = t ?? nr, l.logger = r);
  }, [e, t, r, n]), K(() => {
    if (!s || !e) return;
    const l = {
      viewOptions: e,
      getMarker: t ?? nr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r
    };
    a.current = l;
    const u = nT(i, l.pendingKeys);
    let d, f = !1, p, m = !1, g = !1, y = 0;
    const T = () => y < $d ? !1 : (l.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${$d} consecutive mutating passes; leaving ${l.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...l.pendingKeys].join(", ")}`
    ), !0), S = (x, F = "departure") => {
      i.update(() => {
        y = ma(
          () => vs(l, x, F)
        ) ? y + 1 : 0;
      });
    };
    let v;
    const E = () => {
      if (v !== void 0 && clearTimeout(v), v = void 0, g || l.pendingKeys.size === 0) return;
      const x = c.current ?? AE;
      x < 0 || (v = setTimeout(() => {
        v = void 0, !(g || l.pendingKeys.size === 0) && (f || T() || S(void 0, "idle"));
      }, x));
    }, A = Xe(
      i.registerNodeTransform(ar, (x) => {
        if (i.isComposing()) return;
        lE(x, l);
        const F = bn(x);
        F && (Ne(F.owner) || j(F.owner) || $e(F.owner) || je(F.owner) && mo(F.owner).wrapper === void 0) && Bn(F.owner, l);
      }),
      i.registerNodeTransform(ft, (x) => {
        i.isComposing() || (fE(x, l), Bn(x, l));
      }),
      i.registerNodeTransform(Et, (x) => {
        i.isComposing() || (gE(x), x.isAttached() && Bn(x, l));
      }),
      i.registerNodeTransform(Qe, (x) => {
        i.isComposing() || IM(x, l);
      }),
      i.registerNodeTransform(ye, (x) => {
        if (!i.isComposing()) {
          FM(x, l);
          for (const F of ["separator", "char"])
            x.isAttached() && ds(yn(F), x) && l.pendingKeys.add(x.getKey());
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
      i.registerNodeTransform(Vt, (x) => {
        i.isComposing() || Bn(x, l);
      }),
      i.registerNodeTransform(vr, (x) => {
        if (i.isComposing()) return;
        const F = bn(x);
        F && (je(F.owner) || Ne(F.owner) || j(F.owner) || $e(F.owner)) && Bn(F.owner, l);
      }),
      i.registerNodeTransform(Me, (x) => {
        i.isComposing() || (UM(x, l), Bn(x, l));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      i.registerNodeTransform(Mr, (x) => {
        i.isComposing() || uE(x, l);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      i.registerNodeTransform(ze, (x) => {
        i.isComposing() || TE(x, l);
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
        ze,
        (x) => {
          i.getEditorState().read(() => {
            for (const [F, L] of x) {
              if (L === "destroyed") continue;
              const G = re(F);
              !G || ne(G, oe) !== "attribute" || Be(G.getParent()) || i.getElementByKey(F)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      PE(i, l),
      ...o ? [
        i.registerNodeTransform(ze, (x) => {
          i.isComposing() || CE(x);
        }),
        i.registerCommand(
          so,
          (x) => Rd(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            x && typeof x == "object" && "clipboardData" in x ? x : null,
            i,
            !1
          ),
          Ie
        ),
        i.registerCommand(
          pn,
          (x) => Rd(
            x && typeof x == "object" && "clipboardData" in x ? x : null,
            i,
            !0
          ),
          Ie
        ),
        i.registerCommand(
          dr,
          (x) => SE(
            // Same jsdom-safe duck-check as COPY above.
            x && typeof x == "object" && "clipboardData" in x ? x : null
          ),
          Ie
        )
      ] : [],
      i.registerCommand(
        pn,
        () => (rc(l), !1),
        fr
      ),
      i.registerCommand(
        fc,
        () => (i.isComposing() || $M(l), !1),
        Gn
      ),
      i.registerCommand(
        io,
        () => (f = !1, y = 0, E(), !1),
        Rt
      ),
      i.registerCommand(
        Tr,
        (x) => (f = !1, y = 0, E(), (x.key === "Backspace" || x.key === "Delete") && (rc(l), RM(l)), i.isComposing() || !x.ctrlKey || x.altKey || x.shiftKey || x.metaKey || x.key !== " " && x.code !== "Space" || !PS() ? !1 : (x.preventDefault(), !0)),
        Ie
      ),
      i.registerCommand(
        nf,
        (x) => {
          const F = Ng();
          F === "needs-plain-split" && i.dispatchCommand(Ps, void 0);
          const L = F !== "declined" || pT();
          return L && x?.preventDefault(), vs(l), L;
        },
        Ie
      ),
      i.registerCommand(
        Ps,
        () => (l.splitExpected.current = !0, Jh()),
        Ie
      ),
      NE(i, l, o),
      i.registerCommand(
        Bg,
        () => {
          if (f) return !0;
          const x = i.getRootElement(), F = x?.ownerDocument, L = !!x && !!F && F.hasFocus() && x.contains(F.activeElement);
          let G;
          if (L) {
            const V = R();
            G = N(V) ? V.focus.key : d;
          }
          return ma(() => vs(l, G)), !0;
        },
        Rt
      ),
      i.registerCommand(
        hc,
        () => {
          if (f) return !1;
          const x = R(), F = N(x) ? x.focus.key : d;
          return ma(() => vs(l, F)), !1;
        },
        Rt
      ),
      i.registerUpdateListener(({ editorState: x, tags: F }) => {
        l.splitExpected.current = !1, l.wholeParaDeleteExpected?.clear(), l.collapsedDeleteCaretParas?.clear(), l.rebuildAttempted.clear();
        const L = x.read(() => {
          const V = R();
          return N(V) ? V.focus.key : void 0;
        }), G = p;
        if (L !== void 0 && (p = L), F.has(gc)) {
          l.pendingKeys.clear(), x.read(() => _E(l)), f = !0, L !== void 0 && (d = L);
          return;
        }
        if (F.has(Ur)) {
          L !== void 0 && L !== G && (f = !0);
          return;
        }
        f || (L !== void 0 && (d = L), E(), !(m || L === void 0) && [...l.pendingKeys].some((V) => V !== L) && (m = !0, queueMicrotask(() => {
          m = !1, !g && (T() || S(d));
        })));
      })
    );
    return () => {
      g = !0, v !== void 0 && clearTimeout(v), v = void 0, u(), A(), a.current = void 0;
    };
  }, [i, s, o]), null;
}
const wE = ["status_unknown", "status_invalid"], Vg = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, qE = Object.values(Vg);
function RE(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Vg[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Id(e) {
  e.classList.remove(...wE), e.removeAttribute("aria-description"), qE.includes(e.title) && e.removeAttribute("title");
}
function $E(e, t, r, n) {
  const i = (a) => a.read(() => Ue().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = re(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function IE(e) {
  const t = re(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : P(t) && t.getParent()?.getKey() === r.getKey();
}
function LE({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = le(), i = e?.markerMode === "editable";
  return K(() => {
    if (!i) return;
    const s = t ?? zs;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = tM(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || IE(f)) continue;
            const m = re(f)?.getTopLevelElement();
            !m || l.has(m.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && Id(p);
        }
        for (const [f, p] of d) {
          const m = n.getElementByKey(f);
          m && RE(m, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          $E(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && Id(u);
      }
    };
  }, [n, i, t, r]), null;
}
function Wg(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = kr(o);
    a && D(s) && Wg(s.getChildren(), a, r);
  }
}
function Hg(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = kr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = ii(o);
      if (c === void 0 || !c.includes(tt)) continue;
      const l = c.split(tt), u = [];
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
function Gg(e, t, r) {
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
function Jg(e, t) {
  const r = [];
  for (const n of e)
    gg(n, t) || ((se(n) || $(n)) && r.push(n.getMarker()), D(n) && r.push(...Jg(n.getChildren(), t)));
  return r;
}
function Yg(e) {
  const t = [];
  for (const r of e) {
    const n = hl(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = kr(r);
    i && t.push(...Yg(i));
  }
  return t;
}
function Tl(e, t, r) {
  const n = Jg(e, r), i = Yg(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function DE(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = R();
  let n, i;
  if (N(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = re(t.key), i = t.offset;
  else
    return;
  if (!(!M(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function xl(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function UE(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  for (const y of e) {
    const T = gl(y, o, s);
    if (!T) return;
    c.text.length > 0 && (c.text += " ");
    const S = c.text.length;
    T.spans.forEach(
      (v) => c.spans.push({ ...v, start: v.start + S, end: v.end + S })
    ), c.sentinels.push(...T.sentinels), c.text += T.text;
  }
  const l = i ? xl(c, i) : c.text, u = xr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (On(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = Br.serializeEditorState(
    { type: hr, version: pr, content: u },
    s
  ).root.children;
  if (Ao(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Gg(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (gi(d, o) === hi(e, o) && Tl(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Hg(d, f);
  const m = FE(e), g = Xg(d);
  for (let y = 0; y < m.length && y < g.length; y++)
    m[y].sid !== void 0 && g[y].number === m[y].number && (g[y].sid = m[y].sid);
  return d;
}
function FE(e) {
  const t = [], r = (n) => {
    Ne(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : D(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Xg(e) {
  const t = [];
  for (const r of e) {
    Qf(r) && t.push(r);
    const n = kr(r);
    n && t.push(...Xg(n));
  }
  return t;
}
function zE(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = vg(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? xl(l, i) : l.text, f = xr(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (On(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const m = p.content ?? [], g = Sg(m), y = e.getCategory() !== g, T = pg(e, m, g, s);
  if (T.failure !== void 0) {
    T.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : T.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const S = T.children;
  if (Ao(S) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const v = Gg(l, t, n);
  if (!v) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (gi(S, o) === hi(u, o) && Tl(u, S, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: g, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Hg(S, v), { rebuilt: S, contentNodes: u, category: g, categoryChanged: y };
}
function Ld(e) {
  return e.$?.textType;
}
function KE(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Ld(e) === Ld(t);
}
function jE(e) {
  const t = [];
  for (const r of e) {
    const n = re(r);
    n?.isAttached() && Le(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function BE(e) {
  if (!P(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!j(t)) return;
  const r = e.getTextContent();
  if (Wr(e)) return;
  const n = dg.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Dd(e, t) {
  const r = e;
  r.marker = t, r.text = yg(t, r.markerSyntax, r.nested);
}
function VE(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Me.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Dd(a.node, s);
  const c = n.getChildren().filter(P).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Dd(l.node, s);
}
function WE(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Ag(e, i, n);
  if (!o) return;
  const a = r ? xl(o, r) : o.text, c = xr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (On(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = Br.serializeEditorState(
    { type: hr, version: pr, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...No(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && gi(u, i) === hi(d, i) && Tl(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function HE(e, t, r, n, i) {
  const s = DE(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = (y) => {
    j(y) ? c.set(y.getKey(), y) : $e(y) ? l.set(y.getKey(), y) : o.set(y.getKey(), [y]);
  };
  for (const y of t) {
    const T = re(y);
    if (!T?.isAttached()) continue;
    const S = ns(T);
    if (S) {
      if (d(S), P(T)) {
        const v = Lg(T, r.getMarker);
        v && a.push(v);
      }
      if (j(S)) {
        const v = BE(T);
        v && u.set(S.getKey(), v);
      }
    }
  }
  const f = /* @__PURE__ */ new Set();
  for (const y of a)
    y.some((T) => f.has(T.getKey())) || (y.forEach((T) => {
      f.add(T.getKey()), o.delete(T.getKey());
    }), o.set(y[0].getKey(), y));
  if (s) {
    const y = ns(s.node);
    y && d(y);
  }
  const p = jE(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && p.length === 0)
    return;
  const m = new Set(p.map((y) => y.getKey())), g = /* @__PURE__ */ new Map();
  Wg(Ue().getChildren(), e.root.children, g);
  for (const y of u.values()) VE(y, g);
  for (const y of c.values()) {
    const T = g.get(y.getKey()), S = T ? kr(T.node) : void 0;
    if (!T || !S) continue;
    const v = zE(y, g, r, m, s);
    if (!v) continue;
    if (v.categoryChanged) {
      const x = T.node;
      v.category === void 0 ? delete x.category : x.category = v.category;
    }
    if (!v.rebuilt) continue;
    const E = g.get(v.contentNodes[0].getKey());
    if (!E) continue;
    const A = S.indexOf(E.node);
    A < 0 || S.splice(A, v.contentNodes.length, ...v.rebuilt);
  }
  for (const y of o.values()) {
    const T = g.get(y[0].getKey());
    if (!T) continue;
    const S = UE(y, g, r, m, s);
    if (!S) continue;
    const v = T.siblings.indexOf(T.node);
    v < 0 || T.siblings.splice(v, y.length, ...S);
  }
  for (const y of l.values()) {
    const T = g.get(y.getKey());
    if (!T) continue;
    const S = 1 + No(y).length, v = WE(y, r, s);
    if (!v) continue;
    const E = T.siblings.indexOf(T.node);
    E < 0 || T.siblings.splice(E, S, ...v);
  }
  for (const y of p) {
    const T = g.get(y.getKey());
    if (!T) continue;
    const S = T.siblings.indexOf(T.node);
    if (S < 0) continue;
    T.siblings.splice(S, 1);
    const v = T.siblings[S - 1], E = T.siblings[S], A = v && ii(v), x = E && ii(E);
    v && E && A !== void 0 && x !== void 0 && KE(v, E) && (v.text = A + x, T.siblings.splice(S, 1));
  }
  return zh(e, r.viewOptions);
}
function GE({
  viewOptions: e,
  logger: t
}) {
  const [r] = le(), n = di(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return K(() => {
    if (n)
      return r.registerNodeTransform(
        Qe,
        (i) => JE(i, t)
      );
  }, [r, n, t]), null;
}
function JE(e, t) {
  e.getMarker() !== rr && (e.isEmpty() || Dt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${rr}" (key ${e.getKey()})`
  ), e.setMarker(rr)));
}
function YE({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = le(), n = X({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return K(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, Zs(s, e) || XE(i, r, e);
  }, [r, e, t]), K(
    () => r.registerMutationListener(
      Lt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = sc(r);
        Ud(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Ss(s) === Ss(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), K(() => {
    const i = (a) => a.read(
      () => new Set(
        Ue().getChildren().filter(We).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (sc(r) || Ud(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: Ss(a) === Ss(c)
      }));
    };
    return Xe(
      ...[Et, or].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), K(
    () => r.registerCommand(
      gr,
      () => {
        const i = n.current;
        return i.phase === "idle" && t1(i, ZE()), !1;
      },
      Rt
    ),
    [r]
  ), K(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(gr, void 0));
    };
    return Xe(
      r.registerMutationListener(xt, i),
      r.registerMutationListener(ft, i)
    );
  }, [r]), K(() => {
    const i = () => s1(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function XE(e, t, r) {
  if (QE(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = sc(t);
  (!n || n === r.book) && t.update(() => Qg(r.chapterNum, r.verseNum), {
    tag: Ur
  });
}
function QE(e, t) {
  const r = e.pendingEchoes.findIndex((n) => Zs(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function ZE() {
  const e = R(), t = Sc(e);
  if (!t) return;
  const r = _l(), n = tp(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = Fc(t, e), { verseNum: o, verse: a } = IT(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function sc(e) {
  return e.getEditorState().read(() => _l()?.getCode() || void 0);
}
function _l() {
  return Ue().getChildren().find(Tt);
}
function Ud(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && ya(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || ya(e, t), e.phase = "navigating") : i && ya(e, t), r && r !== e.scrRef.book && tm(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function ya(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Qg(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Ur }
    );
  });
}
function Qg(e, t) {
  const r = Sc(R()), n = zc(r)?.getNumber(), i = tp(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (ap(n) ? em(t, n) : parseInt(n, 10) === t))
    return;
  const o = Ue().getChildren(), a = ep(o, e);
  if (!a) return;
  const c = Gb(o, a), l = zb(c, !0);
  Hb(c, l);
  let u;
  try {
    u = OT(c, t);
  } catch {
    return;
  }
  u && (se(u) ? !M(u.getFirstChild()) && pi(u) || Gt(u, 0) : e1(u));
}
function e1(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || me(n)) {
    Gt(t, r);
    return;
  }
  const i = ko(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (M(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = D(n) && !j(n) ? Zg(n) : void 0;
  s ? s.select(0, 0) : Gt(t, r);
}
function Zg(e) {
  const t = e.getFirstChild();
  if (M(t)) return t;
  if (D(t) && !j(t)) return Zg(t);
}
function Ss(e) {
  return e.read(() => {
    const t = Ue().getChildren().find(We);
    return `${_l()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function t1(e, t) {
  e.phase !== "navigating" && t && (r1(t, e.scrRef) || tm(e, n1(t, e.scrRef)));
}
function r1(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? em(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function em(e, t) {
  try {
    return Mc(e, t);
  } catch {
    return !1;
  }
}
function n1(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const i1 = 8;
function tm(e, t) {
  return Zs(t, e.scrRef) || e.pendingEchoes.some((r) => Zs(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > i1 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function Zs(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function s1(e) {
  e.phase = "idle";
}
function o1(e) {
  return Tt(e) ? `${e.__code}` : $e(e) ? `${e.__marker} "${e.__number}"` : $(e) ? `${e.__marker}` : ls(e) ? `${e.__marker} "${e.__number}"` : cr(e) ? `${e.__caller}` : Pn(e) ? `${e.__marker} "${e.__number}"` : j(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : se(e) ? `${e.__marker}` : M(e) ? `"${e.__text}"${a1(e)}` : Te(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Ne(e) ? `${e.__marker} "${e.__number}"` : "";
}
function a1(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[os]) : "";
}
function c1() {
  const [e] = le();
  return /* @__PURE__ */ C(
    uy,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: o1,
      editor: e
    }
  );
}
const rm = Hd(null), Fd = 4;
function l1({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = X(null), s = Gd(rm);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return K(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ C("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function u1({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = de(), [s, o] = de(), a = ge(
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
  }, l = Fe(() => ({ registerItem: a }), [a]);
  return K(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ C(rm.Provider, { value: l, children: /* @__PURE__ */ C("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function d1({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = X(null), c = X(null), [l, u] = de(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return K(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: m, left: g } = f.getBoundingClientRect();
      p.style.top = `${m + f.offsetHeight + Fd}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), K(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (m) => {
        const g = m.target;
        o && a.current && a.current.contains(g) || f.contains(g) || u(!1);
      };
      return document.addEventListener("click", p), () => {
        document.removeEventListener("click", p);
      };
    }
    return () => {
    };
  }, [a, c, l, o]), K(() => {
    const f = () => {
      if (l) {
        const p = c.current, m = a.current;
        if (p !== null && m !== null) {
          const { top: g } = p.getBoundingClientRect(), y = g + p.offsetHeight + Fd;
          y !== m.getBoundingClientRect().top && (m.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ xe(dn, { children: [
    /* @__PURE__ */ xe(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => u(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ C("span", { className: i }),
          t && /* @__PURE__ */ C("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ C("i", { className: "chevron-down" })
        ]
      }
    ),
    l && un(
      /* @__PURE__ */ C(u1, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const oc = {
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
}, ac = {
  ...oc,
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
function f1({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ C(
    d1,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + p1(t),
      buttonLabel: h1(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(oc).map((n) => /* @__PURE__ */ xe(
        l1,
        {
          className: "item block-marker " + g1(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ C("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ C("span", { className: "text usfm_" + n, children: oc[n] })
          ]
        },
        n
      ))
    }
  );
}
function p1(e) {
  return e && e in ac ? e : "ban";
}
function h1(e) {
  return e && e in ac ? ac[e] : "No Style";
}
function g1(e) {
  return e ? "active dropdown-item-active" : "";
}
function zd() {
  return /* @__PURE__ */ C("div", { className: "divider" });
}
const m1 = vn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = le(), [o, a] = de(s), [c, l] = de(), [u, d] = de(!1), [f, p] = de(!1), m = ge(
    ({
      canUndo: g,
      canRedo: y,
      blockMarker: T,
      contextMarker: S
    }) => {
      d(g), p(y), l(T), n?.({
        canUndo: g,
        canRedo: y,
        blockMarker: T,
        contextMarker: S
      });
    },
    [n]
  );
  return K(() => s.registerCommand(
    gr,
    (g, y) => (a(y), !1),
    fr
  ), [s]), /* @__PURE__ */ xe(dn, { children: [
    /* @__PURE__ */ C(Ph, { onStateChange: m }),
    /* @__PURE__ */ xe("div", { className: "toolbar", children: [
      /* @__PURE__ */ C(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(cf, void 0);
          },
          title: Ns ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
          type: "button",
          className: "toolbar-item spaced",
          "aria-label": "Undo",
          children: /* @__PURE__ */ C("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ C(
        "button",
        {
          disabled: !f || r,
          onClick: () => {
            o.dispatchCommand(lf, void 0);
          },
          title: Ns ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ C("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ C(zd, {}),
      o === s && /* @__PURE__ */ xe(dn, { children: [
        /* @__PURE__ */ C(
          f1,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ C(zd, {})
      ] }),
      /* @__PURE__ */ C("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), y1 = Co(), b1 = {}, k1 = {};
function T1() {
  return /* @__PURE__ */ C("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
const nm = vn(function({
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
  const d = X(null), f = X(null), p = X(null), m = X(t), g = X(void 0), y = X(void 0), T = X(void 0), S = X(void 0), v = X(!1), [E, A] = de(t), [x, F] = de(0), [L, G] = de(), {
    isReadonly: V = !1,
    structureProtectionMode: ae = "off",
    hasExternalUI: ce = !1,
    hasSpellCheck: ie = !1,
    textDirection: ve = "ltr",
    markerMenuTrigger: Pe = "\\",
    view: Q,
    nodes: U,
    debug: Z = !1,
    contextMenu: Ee,
    styleInfo: we,
    markerSettleDelayMs: Yt
  } = a ?? k1, ee = Q ?? y1, _t = Zi(ee) && (ee.markerMode !== "hidden" || !ee.hasSpacing || ee.hasGutterParaMarkers || ee.hasActiveTextFocusBox) ? {
    ...ee,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : ee, Jr = X(_t);
  Pt(Jr.current, _t) || (Jr.current = _t);
  const fe = Jr.current, ct = Fe(() => U ?? b1, [U]), Oo = Fe(() => Ee, [Ee]), mi = Fe(
    () => _T(we ?? zs),
    [we]
  ), Er = X(c);
  Pt(Er.current, c) || (Er.current = c);
  const Ge = Er.current, lt = Zi(fe), ue = V || lt, wn = _t !== ee;
  K(() => {
    lt && !V && Ge?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), wn && Ge?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    );
  }, [lt, V, wn, Ge]);
  const be = X(null), yi = Fe(() => {
    if (fe.markerMode !== "editable") return;
    const O = we ?? zs;
    return {
      getContext: () => be.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (z) => lM(
        O,
        z,
        ct.extraValidMarkers
      ),
      getEnterItems: (z) => uM(
        O,
        z,
        ct.extraValidMarkers
      ),
      apply: (z, H) => {
        const J = be.current;
        J && (H.trigger === "enter" ? J.splitParagraphWithMarker(z.marker) : J.applyMarkerMenuSelection(z, H));
      },
      commitTypedCloser: (z) => {
        be.current?.commitTypedCloser(z);
      }
    };
  }, [fe, we, ct.extraValidMarkers]), Se = (O) => {
    v.current || (v.current = !0, Er.current?.warn(
      `Editor: cannot ${O} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Ar = (O) => {
    if (lt)
      throw new Error(
        `Cannot ${O} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Pr = (O) => {
    if (Ar(O), ue) throw new Error(`Cannot ${O} in readonly mode`);
  }, Xt = Fe(
    () => ({
      namespace: "platformEditor",
      theme: { ...sg, showCharMarkerTitles: fe.showCharMarkerTitles },
      editable: !ue,
      editorState: void 0,
      // Handling of errors during update
      onError(O) {
        throw O;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [Ze, ...lt ? qx : sh]
    }),
    [ue, lt, fe.showCharMarkerTitles]
  );
  da.initialize(Ge);
  function Nr(O) {
    if (O !== void 0 && !OS(O, ct.extraValidMarkers))
      throw new Error(`Unsupported character marker '${O}'`);
  }
  const Yr = ge(() => {
    const O = d.current;
    if (!O) return m.current;
    const z = lu(O), H = y.current;
    if ((!z || z.size === 0) && !H) return m.current;
    const J = O.getEditorState(), _e = J.toJSON();
    return J.read(
      () => HE(
        _e,
        z ?? /* @__PURE__ */ new Set(),
        { viewOptions: fe, getMarker: mi, logger: Ge },
        H,
        T.current
      )
    ) ?? m.current;
  }, [fe, mi, Ge]), bi = {
    focus() {
      d.current?.focus();
    },
    isFocused() {
      const O = d.current?.getRootElement();
      return !!O && O.ownerDocument.activeElement === O;
    },
    undo() {
      d.current?.dispatchCommand(cf, void 0);
    },
    redo() {
      d.current?.dispatchCommand(lf, void 0);
    },
    cut() {
      Pr("cut"), d.current?.dispatchCommand(pn, null);
    },
    copy() {
      d.current?.dispatchCommand(so, null);
    },
    paste() {
      Pr("paste"), d.current && Zc(d.current);
    },
    pastePlainText() {
      Pr("paste as plain text"), d.current && el(d.current);
    },
    getUsj() {
      return Yr();
    },
    commitPendingMarkerEdits() {
      d.current?.update(
        () => {
          d.current?.dispatchCommand(Bg, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(O) {
      if (!O) {
        y.current = void 0;
        return;
      }
      const z = d.current?.getEditorState().read(() => {
        const H = R();
        return N(H) && H.isCollapsed() ? H.focus.key : void 0;
      });
      y.current = { input: O, nodeKey: z ?? T.current?.key };
    },
    setUsj(O) {
      if (!Pt(m.current, O)) {
        m.current = O, y.current = void 0;
        const z = Pt(E, O);
        A(O), z && F((H) => H + 1);
      }
    },
    applyUpdate(O, z = "remote") {
      if (lt && z === "remote") {
        Er.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      Ar("apply an update"), d.current?.update(
        () => {
          z === "remote" && Dr(Ki), o_(O, fe, ct, Ge);
        },
        { discrete: !0 }
      );
      const H = d.current?.getEditorState();
      if (!H) return;
      const J = da.deserializeEditorState(H, fe);
      if (J) {
        const _e = !Pt(m.current, J);
        if (_e && (m.current = J), _e || !Pt(E, J)) {
          const ut = xu(O, H, "apply");
          S.current = J, s?.(J, O, z, ut);
        }
      }
    },
    replaceEmbedUpdate(O, z) {
      const H = d.current?.read(() => GT(O, z));
      H ? this.applyUpdate(H) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${O}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (lt) {
        Se("get the selection");
        return;
      }
      return d.current?.read(th);
    },
    setSelection(O) {
      if (lt) {
        Se("set the selection");
        return;
      }
      d.current?.update(() => {
        const z = Vc(O);
        z !== void 0 && (zi(z), Dr(xf));
      });
    },
    setAnnotation(O, z, H, J, _e) {
      if (lt) {
        Se("set an annotation");
        return;
      }
      let ut, At, Xr, Qr;
      typeof J == "function" || J === void 0 ? (ut = J, At = _e) : (ut = J.onClick, At = J.onRemove, Xr = J.onMouseEnter, Qr = J.onMouseLeave), f.current?.setAnnotation(
        O,
        Xl(z),
        H,
        ut,
        At,
        Xr,
        Qr
      );
    },
    removeAnnotation(O, z) {
      f.current?.removeAnnotation(Xl(O), z);
    },
    formatPara(O) {
      Pr("format a paragraph"), d.current?.update(() => {
        const z = R();
        if (!N(z)) {
          c?.warn(
            `formatPara refused: no range selection to retag with "${O}" (restore the caret before applying, as the marker palettes do)`
          );
          return;
        }
        py(z, () => Vi(O));
        const H = R();
        if (!N(H)) return;
        const J = /* @__PURE__ */ new Set();
        H.getNodes().forEach((_e) => {
          const ut = _e.getTopLevelElement();
          se(ut) && J.add(ut);
        }), J.forEach((_e) => Pg(_e, O, fe));
      });
    },
    getElementByKey(O) {
      return d.current?.read(
        () => d.current?.getElementByKey(O) ?? void 0
      );
    },
    removeCharacterMarker(O) {
      if (ue) throw new Error("Cannot remove character marker in readonly mode");
      Nr(O);
      let z = !1;
      return d.current?.update(
        () => {
          const H = R();
          N(H) && (z = Zh(H, O, fe));
        },
        { discrete: !0 }
      ), z;
    },
    replaceCharacterMarker(O, z) {
      if (ue) throw new Error("Cannot replace character marker in readonly mode");
      Nr(O), Nr(z);
      let H = !1;
      return d.current?.update(
        () => {
          const J = R();
          N(J) && (H = jS(J, O, z));
        },
        { discrete: !0 }
      ), H;
    },
    extendCharacterMarker(O, z) {
      if (ue) throw new Error("Cannot extend character marker in readonly mode");
      Nr(O), z?.forEach(
        (J) => Nr(J)
      );
      let H = !1;
      return d.current?.update(
        () => {
          const J = R();
          N(J) && (H = BS(
            J,
            O,
            z,
            fe
          ));
        },
        { discrete: !0 }
      ), H;
    },
    insertMarker(O) {
      if (ue) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!d.current) return;
      if (!Ja(O, ct.extraValidMarkers))
        throw new Error(`Unsupported marker '${O}'`);
      const z = Ya(
        O,
        g,
        fe,
        ct,
        Ge,
        void 0,
        we
      );
      return z.action({ editor: d.current, reference: r }), z.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!V)
        return d.current?.getEditorState().read(() => YM());
    },
    applyMarkerMenuSelection(O, z) {
      if (V) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if (O.kind !== "closeTag" && !Ja(O.marker, ct.extraValidMarkers))
        throw new Error(`Unsupported marker '${O.marker}'`);
      let H;
      return d.current.update(() => {
        H = tE(O, z, r, {
          expandedNoteKeyRef: g,
          viewOptions: fe,
          nodeOptions: ct,
          logger: c,
          styleInfo: we
        });
      }), H;
    },
    splitParagraphWithMarker(O) {
      if (V) throw new Error("Cannot split paragraph in readonly mode");
      d.current && d.current.update(() => {
        $g(O, fe);
      });
    },
    commitTypedMarker(O, z) {
      if (V) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let H = !1;
      return d.current.update(() => {
        H = eE(O, z), H || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), H;
    },
    commitTypedCloser(O) {
      if (V) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let z = !1;
      return d.current.update(() => {
        z = Rg(O), z || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), z;
    },
    insertNote(O, z, H) {
      Pr("insert a note"), d.current?.update(() => {
        const J = nh(
          O,
          z,
          H,
          r,
          fe,
          ct,
          Ge
        );
        J && !J.getIsCollapsed() && (g.current = J.getKey());
      });
    },
    selectNote(O) {
      d.current?.update(() => {
        const z = Au(O);
        z && (Nx(z, fe), z.getIsCollapsed() || (g.current = z.getKey()));
      });
    },
    getNoteOps(O) {
      return d.current?.read(() => {
        const z = Au(O);
        if (z)
          return jc(z);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  be.current = bi, lc(u, () => bi), K(() => {
    const O = d.current;
    if (O)
      return O.registerUpdateListener(({ editorState: z }) => {
        z.read(() => {
          const H = R();
          if (!N(H) || !H.isCollapsed()) return;
          const J = H.focus.getNode();
          M(J) && (T.current = { key: J.getKey(), offset: H.focus.offset });
        });
      });
  }, []);
  const fs = ge(
    (O, z, H, J) => {
      if (lt) return;
      const _e = da.deserializeEditorState(O, fe);
      if (_e) {
        const ut = !Pt(m.current, _e);
        if (ut && (m.current = _e), ut || !Pt(E, _e)) {
          const At = xu(J, O);
          S.current = _e, s?.(_e, J, "local", At);
        }
      }
    },
    [E, s, fe, lt]
  );
  K(() => {
    const O = d.current;
    if (!(!O || !s))
      return O.registerUpdateListener(({ tags: z, dirtyElements: H, dirtyLeaves: J }) => {
        !z.has(gc) && (H.size === 0 && J.size === 0 || z.has(Ki) || !lu(O)?.size) || queueMicrotask(() => {
          const _e = Yr();
          !_e || Pt(S.current, _e) || (S.current = _e, s(_e, void 0, "local", void 0));
        });
      });
  }, [s, Yr]);
  const Ut = ge(
    (O) => {
      G(O.contextMarker), o?.(O);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ xe(ff, { initialConfig: Xt, children: [
      /* @__PURE__ */ C(sC, { isEditable: !ue }),
      /* @__PURE__ */ xe("div", { className: "editor-container", children: [
        ce ? /* @__PURE__ */ C(Ph, { onStateChange: Ut }) : /* @__PURE__ */ C(
          "div",
          {
            className: "editor-toolbar-container" + (ue ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ C(
              m1,
              {
                ref: p,
                editorRef: be,
                isReadonly: ue,
                onStateChange: Ut
              }
            )
          }
        ),
        /* @__PURE__ */ xe("div", { className: "editor-inner", children: [
          /* @__PURE__ */ C(hf, { editorRef: d }),
          /* @__PURE__ */ C(
            fy,
            {
              contentEditable: /* @__PURE__ */ C(
                pf,
                {
                  className: `editor-input usfm ${s_(fe).join(" ")}${fe.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${fe.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: ie
                }
              ),
              placeholder: /* @__PURE__ */ C(T1, {}),
              ErrorBoundary: gf
            }
          ),
          ce && /* @__PURE__ */ C(iC, {}),
          /* @__PURE__ */ C(mf, {}),
          r && n && /* @__PURE__ */ C(YE, { scrRef: r, onScrRefChange: n }),
          r && !ce && /* @__PURE__ */ C(
            Pv,
            {
              trigger: Pe,
              scrRef: r,
              contextMarker: L,
              getMarkerAction: (O) => Ya(
                O,
                g,
                fe,
                ct,
                Ge,
                void 0,
                we
              ),
              editableHarness: yi
            }
          ),
          /* @__PURE__ */ C(
            cC,
            {
              scripture: E,
              scriptureRef: m,
              nodeOptions: ct,
              editorAdaptor: Br,
              viewOptions: fe,
              logger: Ge
            },
            x
          ),
          /* @__PURE__ */ C(AC, { onChange: i }),
          /* @__PURE__ */ C(
            Zx,
            {
              onChange: fs,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Ry
            }
          ),
          /* @__PURE__ */ C(JS, { viewOptions: fe }),
          /* @__PURE__ */ C(Xx, { ref: f, logger: Ge }),
          /* @__PURE__ */ C(w_, { viewOptions: fe }),
          /* @__PURE__ */ C(W_, {}),
          /* @__PURE__ */ C(Q_, {}),
          fe?.markerMode !== "editable" && /* @__PURE__ */ C(Z_, { logger: Ge }),
          /* @__PURE__ */ C(nC, { options: Oo }),
          /* @__PURE__ */ C(aC, {}),
          /* @__PURE__ */ C(rE, {}),
          /* @__PURE__ */ C(
            OE,
            {
              viewOptions: fe,
              getMarker: mi,
              logger: Ge,
              markerSettleDelayMs: Yt
            }
          ),
          /* @__PURE__ */ C(
            LE,
            {
              styleInfo: we,
              viewOptions: fe,
              logger: Ge
            }
          ),
          /* @__PURE__ */ C(
            lC,
            {
              expandedNoteKeyRef: g,
              nodeOptions: ct,
              viewOptions: fe,
              logger: Ge
            }
          ),
          /* @__PURE__ */ C(EC, {}),
          /* @__PURE__ */ C(E_, {}),
          /* @__PURE__ */ C(C_, {}),
          /* @__PURE__ */ C(GE, { viewOptions: fe, logger: Ge }),
          /* @__PURE__ */ C(PC, {}),
          /* @__PURE__ */ C(mv, { structureProtectionMode: ae }),
          /* @__PURE__ */ C(yv, { textDirection: ve }),
          /* @__PURE__ */ C(kv, {}),
          /* @__PURE__ */ C(Ev, {}),
          l
        ] }),
        Z && /* @__PURE__ */ C(c1, {})
      ] })
    ] }, fe.verseLayout ?? "inline")
  );
}), AA = vn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ C(nm, { ref: r, ...i });
});
function im() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function eo(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? im() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function sm(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? im() : r,
    quote: e,
    type: "thread"
  };
}
function Kd(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function x1(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function ba(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class _1 {
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
    this._comments = t, ba(this);
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
          const c = Kd(a);
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
    this._comments = i, ba(this);
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
          const c = Kd(a);
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
    return this._comments = n, ba(this), t.type === "comment" ? {
      index: s,
      markedComment: x1(t)
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
    return t !== null ? t.doc.get("comments", Kl) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new jl(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Kl();
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
      Ay,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Rt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Py) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const m = p.insert, g = p.retain, y = p.delete, T = u.parent, S = u === r ? void 0 : T instanceof jl && this._comments.find((v) => v.id === T.get("id"));
              if (Array.isArray(m)) {
                const v = f;
                m.slice().reverse().forEach((E) => {
                  const A = E.get("id"), F = E.get("type") === "thread" ? sm(
                    E.get("quote"),
                    E.get("comments").toArray().map(
                      (L) => eo(
                        L.get("content"),
                        L.get("author"),
                        L.get("id"),
                        L.get("timeStamp"),
                        L.get("deleted")
                      )
                    ),
                    A
                  ) : eo(
                    E.get("content"),
                    E.get("author"),
                    A,
                    E.get("timeStamp"),
                    E.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(F, S, v);
                  });
                });
              } else if (typeof g == "number")
                f += g;
              else if (typeof y == "number")
                for (let v = 0; v < y; v++) {
                  const E = S === void 0 || S === !1 ? this._comments[f] : S.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(E, S);
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
function C1(e) {
  const [t, r] = de(e.getComments());
  return K(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function v1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = X(null);
  return K(() => {
    i.current !== null && i.current.focus();
  }, []), K(() => {
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
  }, [n, e]), /* @__PURE__ */ C("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ xe("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
    /* @__PURE__ */ C("h2", { className: "Modal__title", children: r }),
    /* @__PURE__ */ C(
      "button",
      {
        className: "Modal__closeButton",
        "aria-label": "Close modal",
        type: "button",
        onClick: e,
        children: "X"
      }
    ),
    /* @__PURE__ */ C("div", { className: "Modal__content", children: t })
  ] }) });
}
function S1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return un(
    /* @__PURE__ */ C(v1, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function om() {
  const [e, t] = de(null), r = ge(() => {
    t(null);
  }, []), n = Fe(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ C(S1, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = ge(
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
const M1 = {
  ...sg,
  paragraph: "CommentEditorTheme__paragraph"
};
function E1(...e) {
  return e.filter(Boolean).join(" ");
}
function Vr({
  "data-test-id": e,
  children: t,
  className: r,
  onClick: n,
  disabled: i,
  small: s,
  title: o
}) {
  return /* @__PURE__ */ C(
    "button",
    {
      disabled: i,
      className: E1(
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
function A1({
  className: e
}) {
  return /* @__PURE__ */ C(pf, { className: e || "ContentEditable__root" });
}
function P1({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ C("div", { className: t || "Placeholder__root", children: e });
}
const jd = af("INSERT_INLINE_COMMAND");
function N1({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = X(null), s = ge(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return K(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), is(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ C("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ C("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ C("i", { className: "icon add-comment" }) }) });
}
function O1({ onEscape: e }) {
  const [t] = le();
  return K(() => t.registerCommand(
    of,
    (r) => e(r),
    Gn
  ), [t, e]), null;
}
function am({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ C(ff, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: M1
  }, children: /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ C(
      Sy,
      {
        contentEditable: /* @__PURE__ */ C(A1, { className: e }),
        placeholder: /* @__PURE__ */ C(P1, { children: s }),
        ErrorBoundary: gf
      }
    ),
    /* @__PURE__ */ C(vy, { onChange: n }),
    /* @__PURE__ */ C(mf, {}),
    t !== !1 && /* @__PURE__ */ C(xy, {}),
    /* @__PURE__ */ C(O1, { onEscape: r }),
    /* @__PURE__ */ C(_y, {}),
    i !== void 0 && /* @__PURE__ */ C(hf, { editorRef: i })
  ] }) });
}
function cm(e, t) {
  return ge(
    (r, n) => {
      r.read(() => {
        e(My()), t(!Ey(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function w1({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = X(null), c = Fe(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = X(null), u = um(), d = ge(() => {
    e.getEditorState().read(() => {
      const g = R();
      if (N(g)) {
        l.current = g.clone();
        const y = g.anchor, T = g.focus, S = hy(
          e,
          y.getNode(),
          y.offset,
          T.getNode(),
          T.offset
        ), v = a.current;
        if (S !== null && v !== null) {
          const { left: E, bottom: A, width: x } = S.getBoundingClientRect(), F = gy(e, S);
          let L = F.length === 1 ? E + x / 2 - 125 : E - 125;
          L < 10 && (L = 10), v.style.left = `${L}px`, v.style.top = `${A + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const G = F.length, { container: V } = c, ae = c.elements, ce = ae.length;
          for (let ie = 0; ie < G; ie++) {
            const ve = F[ie];
            let Pe = ae[ie];
            Pe === void 0 && (Pe = document.createElement("span"), ae[ie] = Pe, V.appendChild(Pe));
            const U = `position:absolute;top:${ve.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${ve.left}px;height:${ve.height}px;width:${ve.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            Pe.style.cssText = U;
          }
          for (let ie = ce - 1; ie >= G; ie--) {
            const ve = ae[ie];
            V.removeChild(ve), ae.pop();
          }
        }
      }
    });
  }, [e, c]);
  is(() => {
    d();
    const g = c.container, y = document.body;
    return y !== null ? (y.appendChild(g), () => {
      y.removeChild(g);
    }) : () => {
    };
  }, [c.container, d]), K(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (g) => (g.preventDefault(), t(), !0), p = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), r(
        sm(g, [eo(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, m = cm(i, o);
  return /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ C(
      am,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: m
      }
    ),
    /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ C(Vr, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ C(
        Vr,
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
function q1({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = X(null), c = um(), l = cm(i, o);
  return /* @__PURE__ */ xe(dn, { children: [
    /* @__PURE__ */ C(
      am,
      {
        className: "CommentPlugin_CommentsPanel_Editor",
        autoFocus: !1,
        onEscape: () => !0,
        onChange: l,
        editorRef: a,
        placeholder: r
      }
    ),
    /* @__PURE__ */ C(
      Vr,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(eo(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(sy, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ C("i", { className: "send" })
      }
    )
  ] });
}
function lm({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ xe(dn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ xe("div", { className: "Modal__content", children: [
      /* @__PURE__ */ C(
        Vr,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ C(
        Vr,
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
function Bd({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = de(0);
  K(() => {
    const u = () => {
      s(performance.timeOrigin + performance.now());
    };
    u();
    const d = window.setInterval(u, 6e4);
    return () => {
      window.clearInterval(d);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = om();
  return /* @__PURE__ */ xe("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ C("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ xe("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ C("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ xe(dn, { children: [
      /* @__PURE__ */ C(
        Vr,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ C(
              lm,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: u
              }
            ));
          },
          className: "CommentPlugin_CommentsPanel_List_DeleteButton",
          children: /* @__PURE__ */ C("i", { className: "delete" })
        }
      ),
      c
    ] })
  ] });
}
function R1({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = le(), [a, c] = de(0), [l, u] = om(), d = Fe(
    () => new Intl.RelativeTimeFormat("en", {
      localeMatcher: "best fit",
      numeric: "auto",
      style: "short"
    }),
    []
  );
  return K(() => {
    const f = setTimeout(() => {
      c(a + 1);
    }, 1e4);
    return () => {
      clearTimeout(f);
    };
  }, [a]), /* @__PURE__ */ C("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ xe(
      "li",
      {
        onClick: () => {
          const g = s.get(p);
          if (g !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const T = Array.from(g)[0], S = re(T);
                Te(S) && S.selectStart();
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
          /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ xe("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ C("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ C(
              Vr,
              {
                onClick: () => {
                  u("Delete Thread", (g) => /* @__PURE__ */ C(
                    lm,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: g
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ C("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ C("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((g) => /* @__PURE__ */ C(
            Bd,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            g.id
          )) }),
          /* @__PURE__ */ C("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ C(
            q1,
            {
              submitAddComment: i,
              thread: f,
              placeholder: "Reply to comment..."
            }
          ) })
        ]
      },
      p
    ) : /* @__PURE__ */ C(
      Bd,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function $1({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = X(null), o = r.length === 0;
  return /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ C("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ C("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ C(
      R1,
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
function um() {
  const e = yf(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function I1({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = yf(), [a] = le(), c = Fe(() => {
    const L = new _1(a, s);
    return r && L.registerOnChange(r), t?.(L), L;
  }, [a, s, r, t]), l = C1(c), u = Fe(() => /* @__PURE__ */ new Map(), []), [d, f] = de(), [p, m] = de([]), [g, y] = de(!1), [T, S] = de(!1), { yjsDocMap: v } = o;
  K(() => {
    if (e) {
      const L = e("comments", v);
      return c.registerCollaboration(L);
    }
    return () => {
    };
  }, [c, e, v]);
  const E = ge(() => {
    a.update(() => {
      const L = R();
      L !== null && (L.dirty = !0);
    }), y(!1);
  }, [a]), A = ge(
    (L, G) => {
      if (L.type === "comment") {
        const V = c.deleteCommentOrThread(L, G);
        if (!V)
          return;
        const { markedComment: ae, index: ce } = V;
        c.addComment(ae, G, ce);
      } else {
        c.deleteCommentOrThread(L);
        const V = G !== void 0 ? G.id : L.id, ae = u.get(V);
        ae !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const ce of ae) {
              const ie = re(ce);
              Te(ie) && (ie.deleteID(Lr, V), ie.hasNoIDsForEveryType() && $s(ie));
            }
          });
        });
      }
    },
    [c, a, u]
  ), x = ge(
    (L, G, V, ae) => {
      c.addComment(L, V), G && (a.update(() => {
        N(ae) && $f(ae, Lr, L.id);
      }), y(!1));
    },
    [c, a]
  );
  K(() => {
    const L = [];
    let G;
    for (const V of p) {
      const ae = u.get(V);
      if (ae !== void 0)
        for (const ce of ae) {
          const ie = a.getElementByKey(ce);
          ie !== null && (ie.classList.add("selected"), L.push(ie), G = window.setTimeout(() => {
            S(!0);
          }, 0));
        }
    }
    return () => {
      G !== void 0 && window.clearTimeout(G);
      for (const V of L)
        V.classList.remove("selected");
    };
  }, [p, a, u]), K(() => {
    if (!a.hasNodes([Ze]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const L = /* @__PURE__ */ new Map();
    return Xe(
      df(
        a,
        Ze,
        (G) => ji(G.getTypedIDs()),
        (G, V) => {
          for (const [ae, ce] of Object.entries(G.getTypedIDs()))
            ce.forEach((ie) => {
              V.addID(ae, ie);
            });
        }
      ),
      a.registerMutationListener(
        Ze,
        (G) => {
          a.getEditorState().read(() => {
            for (const [V, ae] of G) {
              const ce = re(V);
              let ie = [];
              ae === "destroyed" ? ie = L.get(V) ?? [] : Te(ce) && (ie = ce.getTypedIDs()[Lr] ?? []);
              for (const ve of ie) {
                let Pe = u.get(ve);
                L.set(V, ie), ae === "destroyed" ? Pe !== void 0 && (Pe.delete(V), Pe.size === 0 && u.delete(ve)) : (Pe === void 0 && (Pe = /* @__PURE__ */ new Set(), u.set(ve, Pe)), Pe.has(V) || Pe.add(V));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: G, tags: V }) => {
        G.read(() => {
          const ae = R();
          let ce = !1, ie = !1;
          if (N(ae)) {
            const ve = ae.anchor.getNode();
            if (M(ve)) {
              const Pe = bb(ve, Lr, ae.anchor.offset) ?? [];
              Pe !== null && (m(Pe), ce = !0), ae.isCollapsed() || (f(ve.getKey()), ie = !0);
            }
          }
          ce || m((ve) => ve.length === 0 ? ve : []), ie || f(null), !V.has("collaboration") && N(ae) && y(!1);
        });
      }),
      a.registerCommand(
        jd,
        () => {
          const G = window.getSelection();
          return G !== null && G.removeAllRanges(), y(!0), !0;
        },
        fn
      )
    );
  }, [a, u]);
  const F = () => {
    a.dispatchCommand(jd, void 0);
  };
  return /* @__PURE__ */ xe(dn, { children: [
    g && un(
      /* @__PURE__ */ C(
        w1,
        {
          editor: a,
          cancelAddComment: E,
          submitAddComment: x
        }
      ),
      document.body
    ),
    d != null && !g && un(
      /* @__PURE__ */ C(
        N1,
        {
          anchorKey: d,
          editor: a,
          showComments: T,
          onAddComment: F
        }
      ),
      document.body
    ),
    n !== null && un(
      /* @__PURE__ */ C(
        Vr,
        {
          className: `CommentPlugin_ShowCommentsButton ${T ? "active" : ""}`,
          onClick: () => S(!T),
          title: T ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ C("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    T && un(
      /* @__PURE__ */ C(
        $1,
        {
          comments: l,
          submitAddComment: x,
          deleteCommentOrThread: A,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function L1() {
  const e = X(void 0), t = ge((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function D1(e, t) {
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
function U1(e, t) {
  K(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      D1(r, t);
    };
  }, [t, e]);
}
const PA = vn(function(t, r) {
  const n = X(null), i = X(!0), s = X(null), [o, a] = de(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: m, view: g } = {} } = t, y = (m ?? !1) || Zi(g), [T, S] = L1();
  U1(f, T), K(() => {
    if (process.env.NODE_ENV !== "production") {
      const A = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(A), p || console.warn(A);
    }
  }, [p]), lc(r, () => ({
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
    applyUpdate(A, x) {
      n.current?.applyUpdate(A, x);
    },
    replaceEmbedUpdate(A, x) {
      return n.current?.replaceEmbedUpdate(A, x);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(A) {
      n.current?.setSelection(A);
    },
    setAnnotation(A, x, F, L, G) {
      typeof L == "function" || L === void 0 ? n.current?.setAnnotation(A, x, F, L, G) : n.current?.setAnnotation(A, x, F, L);
    },
    removeAnnotation(A, x) {
      n.current?.removeAnnotation(A, x);
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
    replaceCharacterMarker(A, x) {
      return n.current?.replaceCharacterMarker(A, x) ?? !1;
    },
    extendCharacterMarker(A, x) {
      return n.current?.extendCharacterMarker(A, x) ?? !1;
    },
    insertMarker(A) {
      return n.current?.insertMarker(A);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(A, x) {
      return n.current?.applyMarkerMenuSelection(A, x);
    },
    splitParagraphWithMarker(A) {
      n.current?.splitParagraphWithMarker(A);
    },
    commitTypedMarker(A, x) {
      return n.current?.commitTypedMarker(A, x) ?? !1;
    },
    commitTypedCloser(A) {
      return n.current?.commitTypedCloser(A) ?? !1;
    },
    insertNote(A, x, F) {
      n.current?.insertNote(A, x, F);
    },
    selectNote(A) {
      n.current?.selectNote(A);
    },
    getNoteOps(A) {
      return n.current?.getNoteOps(A);
    },
    setComments(A) {
      T.current?.setComments(A), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const v = ge(
    (A, x, F, L) => {
      if (!u) return;
      const G = T.current?.getComments();
      u(A, G, x, F, L);
    },
    [T, u]
  ), E = ge(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const A = T.current?.getComments();
    l(A);
  }, [T, i, l]);
  return K(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ C(Cy, { children: /* @__PURE__ */ xe(nm, { ref: n, onUsjChange: v, ...f, children: [
    /* @__PURE__ */ C(
      I1,
      {
        setCommentStore: S,
        onChange: E,
        showCommentsContainerRef: y ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ C("div", { ref: s, className: "comment-container" })
  ] }) });
});
function ln(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function F1(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function z1(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const K1 = /^[#\w().,%/\s-]+$/;
function ur(e) {
  return e != null;
}
const j1 = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, B1 = {
  left: "right",
  right: "left"
}, V1 = "var(--usj-font-fallback, serif)";
function dm(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${F1(i)}"`).join(", ")}, ${V1}`;
}
const cc = ".editor-input.usfm", W1 = /^[\w.#[\]="':()>+~*,\s-]+$/;
function H1(e) {
  return W1.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${cc}".`
  ), cc);
}
function G1(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(dm(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (K1.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), ur(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), ur(t.firstLineIndent) && s.push(`text-indent: ${ln(t.firstLineIndent * 20 * r)}vw`), ur(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${ln(t.leftMargin * 20 * r)}vw`), ur(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${ln(t.rightMargin * 20 * r)}vw`
  ), ur(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${ln(t.spaceBefore * r)}pt`), ur(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${ln(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = j1[n ? B1[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Vd = { c: 150, ca: 133, cp: 150 };
function Wd(e, t) {
  return e && ur(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function J1(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && ur(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Wd(e.markers.c, Vd.c);
  return ["ca", "cp"].map((i) => {
    const s = Wd(
      e.markers[i],
      Vd[i]
    ), o = ln(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function NA(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = cc } = t, s = H1(i), o = [], a = [];
  e.defaultFont && a.push(dm(e.defaultFont)), ur(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${ln(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = G1(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${z1(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...J1(e, s)), o.join(`
`);
}
export {
  ph as BLOCK_VERSE_VIEW_MODE,
  k as CategoryType,
  AA as Editorial,
  ws as GENERATOR_NOTE_CALLER,
  kf as HIDDEN_NOTE_CALLER,
  PA as Marginal,
  b as MarkerType,
  dh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  fh as STANDARD_VIEW_MODE,
  zs as defaultStyleInfo,
  EA as directionToNames,
  Kx as filterAndRankItems,
  NA as generateUsjCss,
  SA as getDefaultViewMode,
  Co as getDefaultViewOptions,
  uM as getEnterMenuItems,
  lM as getMarkerMenuItems,
  MA as getViewMode,
  hh as getViewOptions,
  Zi as isBlockVerseLayout,
  $r as isInsertEmbedOpOfType,
  t_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
