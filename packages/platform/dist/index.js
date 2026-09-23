import { jsx as S, jsxs as Te, Fragment as fn } from "react/jsx-runtime";
import { forwardRef as vn, useState as fe, useRef as Y, useCallback as ye, useEffect as z, useMemo as Fe, memo as Km, createContext as lf, useContext as uf, Children as jm, isValidElement as Bm, cloneElement as Vm, useImperativeHandle as xc, useLayoutEffect as os } from "react";
import { assertSafeKey as We, isValidBookCode as Wm, MARKER_OBJECT_PROPS as Hm, USJ_VERSION as kr, USJ_TYPE as Tr, isUsjTextContentLocation as Gm, indexesFromUsjJsonPath as df, isUsjAttributeKeyLocation as Jm, isUsjAttributeMarkerLocation as Ym, isUsjClosingAttributeMarkerLocation as Xm, isUsjMarkerLocation as Qm, isUsjClosingMarkerLocation as Zm, isUsjPropertyValueLocation as ey, getUsjDocumentLocationTypeName as ty, usjJsonPathFromIndexes as tn, EMPTY_USJ as ff } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as Ke, $parseSerializedNode as ao, DecoratorNode as as, ElementNode as Zt, isHTMLElement as Mn, createState as co, $getState as ie, $setState as Tt, $isRangeSelection as N, $isElementNode as I, $isTextNode as M, ParagraphNode as _c, TextNode as ze, $createTextNode as me, $isNodeSelection as Cc, $getCommonAncestor as ry, $getSelection as O, $createNodeSelection as Sc, $setSelection as Zn, $isLineBreakNode as lo, NODE_STATE_KEY as cs, $getEditor as ls, $hasUpdateTag as ny, $getNodeByKey as se, $getRoot as De, $createRangeSelection as vc, $createPoint as tu, $getCharacterOffsets as pf, KEY_DOWN_COMMAND as lr, COMMAND_PRIORITY_HIGH as $e, HISTORY_MERGE_TAG as hf, CLICK_COMMAND as Bi, COMMAND_PRIORITY_LOW as At, COMMAND_PRIORITY_EDITOR as pn, isDOMNode as Mc, $getNearestNodeFromDOMNode as En, CONTROLLED_TEXT_INSERTION_COMMAND as uo, PASTE_COMMAND as sr, COMMAND_PRIORITY_CRITICAL as rt, CUT_COMMAND as Fr, DROP_COMMAND as fo, DELETE_CHARACTER_COMMAND as iy, DELETE_WORD_COMMAND as sy, DELETE_LINE_COMMAND as oy, $isDecoratorNode as gf, COPY_COMMAND as us, COMMAND_PRIORITY_NORMAL as Yn, SELECTION_CHANGE_COMMAND as xr, BLUR_COMMAND as Ec, $addUpdateTag as zr, SKIP_DOM_SELECTION_TAG as ay, CLEAR_HISTORY_COMMAND as cy, $getPreviousSelection as ly, KEY_ESCAPE_COMMAND as Ac, DRAGSTART_COMMAND as mf, $isRootOrShadowRoot as uy, CAN_UNDO_COMMAND as dy, CAN_REDO_COMMAND as fy, getDOMSelectionFromTarget as py, $onUpdate as hy, KEY_ENTER_COMMAND as yf, LineBreakNode as bf, $copyNode as gy, FOCUS_COMMAND as my, $isRootNode as yy, INSERT_PARAGRAPH_COMMAND as Rs, createCommand as kf, HISTORIC_TAG as Pc, UNDO_COMMAND as Tf, REDO_COMMAND as xf, CLEAR_EDITOR_COMMAND as by } from "lexical";
import { addClassNamesToElement as Fn, removeClassNamesFromElement as Yo, $findMatchingParent as at, $dfsIterator as _f, $dfs as ci, mergeRegister as Ge, registerNestedElementResolver as Cf, $unwrapNode as Aa, IS_APPLE as $s } from "@lexical/utils";
import { useLexicalNodeSelection as ky } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Rt } from "fast-equals";
import qi from "quill-delta";
import { useLexicalComposerContext as ae } from "@lexical/react/LexicalComposerContext";
import { copyToClipboard as Ty, $getHtmlContent as xy, $getLexicalContent as _y } from "@lexical/clipboard";
import { TreeView as Cy } from "@lexical/react/LexicalTreeView";
import * as Sy from "react-dom";
import { createPortal as dn } from "react-dom";
import { LexicalComposer as Sf } from "@lexical/react/LexicalComposer";
import { ContentEditable as vf } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Mf } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Ef } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Af } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as vy } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as ru, createDOMRange as My, createRectsFromDOMRange as Ey } from "@lexical/selection";
import { autoUpdate as Ay, computePosition as Py, shift as Ny, flip as wy } from "@floating-ui/dom";
import { $generateNodesFromDOM as Oy } from "@lexical/html";
import { AutoFocusPlugin as qy } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Ry } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Pf, LexicalCollaboration as $y } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Iy } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Ly } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Dy, $isRootTextContentEmpty as Uy } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Fy } from "@lexical/yjs";
import { Array as nu, Map as iu, YArrayEvent as zy } from "yjs";
const Xo = (e) => Ke(ao(e)), Ky = {
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
function Nf(e) {
  return Ky[e];
}
const q = " ", Is = "​", zt = q, Nc = `${q}|`, or = "p", Ls = "+", wf = "-", Ds = "chapter", Pa = "verse", su = "invalid", jy = "text-spacing", By = "formatted-font", Vy = "marker-", Of = "external-usj-mutation", qf = "selection-change", Kr = "cursor-change", Na = "annotation-change", Vi = "delta-change", Rf = "marker-settle", Wy = [
  Of,
  qf,
  Kr,
  Na,
  Vi
], hn = "zmsc-s", Xn = "zmsc-e", Hy = [hn, Xn], Gy = [
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
  Xn
], $f = 1, wc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Jy = wc.filter((e) => e !== "sid" && e !== "eid");
class Qt extends as {
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
    return new Qt(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return Lf().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Gy.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: $f
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function If(e) {
  return Hy.includes(e);
}
function Lf(e, t, r, n, i) {
  return Ke(new Qt(e, t, r, n, void 0, i));
}
function je(e) {
  return e instanceof Qt;
}
const Oc = "f", Yy = [
  // Footnote
  Oc,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function Ri(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const Xy = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Df = 1;
class Se extends Zt {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Oc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (Ri(t) === "crossref" ? wf : Ls), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Se(r, n, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => Zy(t) ? {
        conversion: Qy,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return qc().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Yy.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", Ri(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", Ri(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Mn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", Ri(this.getMarker()))), { element: r };
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
      version: Df
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
function Qy(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: qc(t, r, n) };
}
function qc(e, t, r, n, i) {
  return Ke(new Se(e, t, r, n, i));
}
function Zy(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Se.isValidMarker(t) && e.classList.contains(Se.getType());
}
function j(e) {
  return e instanceof Se;
}
var T;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(T || (T = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const wa = {
  id: {
    category: T.FileIdentification,
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
    category: T.FileIdentification,
    type: b.Paragraph,
    description: "File markup version information",
    hasEndMarker: !1,
    children: void 0
  },
  ide: {
    category: T.FileIdentification,
    type: b.Paragraph,
    description: "File encoding information",
    hasEndMarker: !1,
    children: {
      Remarks: ["rem", "sts"]
    }
  },
  h: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Running header text for a book (basic)",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h1: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Running header text",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h2: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Running header text, left side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h3: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Running header text, right side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  toc1: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc2: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc3: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  toca1: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Alternative language long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca2: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Alternative language short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca3: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Alternative language book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  rem: {
    category: T.Remarks,
    type: b.Paragraph,
    description: "Comments and remarks",
    hasEndMarker: !1,
    children: void 0
  },
  sts: {
    category: T.Remarks,
    type: b.Paragraph,
    description: "Status of this file",
    hasEndMarker: !1,
    children: void 0
  },
  restore: {
    category: T.Remarks,
    type: b.Paragraph,
    description: "Project restore information",
    hasEndMarker: !1,
    children: void 0
  },
  imt: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt1: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt2: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt3: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 3",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt4: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 4 (usually within parenthesis)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte1: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte2: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction major title at introduction end, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is: {
    category: T.Introduction,
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
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction section heading, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is2: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction section heading, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  iot: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction outline title (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  io: {
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
    type: b.Character,
    description: "Introduction references range for outline entry; for marking references separately",
    hasEndMarker: !0,
    children: void 0
  },
  ip: {
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction blank line",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"]
    }
  },
  iq: {
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction explanatory or bridge text (e.g. explanation of missing book in Short Old Testament)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  iqt: {
    category: T.Introduction,
    type: b.Character,
    description: "For quoted scripture text appearing in the introduction",
    hasEndMarker: !0,
    children: void 0
  },
  ie: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction ending marker",
    hasEndMarker: !1,
    children: void 0
  },
  c: {
    category: T.DivisionMarks,
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
    category: T.DivisionMarks,
    type: b.Character,
    description: "Second (alternate) chapter number (for coding dual versification; useful for places where different traditions of chapter breaks need to be supported in the same translation)",
    hasEndMarker: !0,
    children: void 0
  },
  cp: {
    category: T.DivisionMarks,
    type: b.Paragraph,
    description: "Published chapter number (chapter string that should appear in the published text)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"]
    }
  },
  cl: {
    category: T.DivisionMarks,
    type: b.Paragraph,
    description: "Chapter label used for translations that add a word such as 'Chapter' before chapter numbers (e.g. Psalms). The subsequent text is the chapter label.",
    hasEndMarker: !1,
    children: void 0
  },
  cd: {
    category: T.DivisionMarks,
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
    category: T.DivisionMarks,
    type: b.Character,
    description: "A verse number (Necessary for normal paratext operation) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  va: {
    category: T.DivisionMarks,
    type: b.Character,
    description: "Second (alternate) verse number (for coding dual numeration in Psalms; see also NRSV Exo 22.1-4)",
    hasEndMarker: !0,
    children: void 0
  },
  vp: {
    category: T.DivisionMarks,
    type: b.Character,
    description: "Published verse marker (verse string that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  p: {
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
    type: b.Paragraph,
    description: "Letter Closing",
    hasEndMarker: !1,
    children: {
      SpecialText: ["tl", "sig", "pn", "png", "addpn", "add"]
    }
  },
  pmo: {
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
    type: b.Character,
    description: "Poetry text, Selah",
    hasEndMarker: !0,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  qa: {
    category: T.Poetry,
    type: b.Paragraph,
    description: "Poetry text, Acrostic marker/heading",
    hasEndMarker: !1,
    children: void 0
  },
  qac: {
    category: T.Poetry,
    type: b.Character,
    description: "Poetry text, Acrostic markup of the first character of a line of acrostic poetry",
    hasEndMarker: !0,
    children: void 0
  },
  qm: {
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
    type: b.Paragraph,
    description: "Poetry text stanza break (e.g. stanza break) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  mt: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "The main title of the book (if single level)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt1: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "The main title of the book (if multiple levels) (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt2: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "A secondary title usually occurring before the main title (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt3: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "A secondary title occurring after the main title",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt4: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "A small secondary title sometimes occurring within parentheses",
    hasEndMarker: !1,
    children: void 0
  },
  mte: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  mte1: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte2"]
    }
  },
  mte2: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "A secondary title occurring before or after the 'ending' main title",
    hasEndMarker: !1,
    children: void 0
  },
  ms: {
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "A major section division heading, level 3",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mr"],
      Footnotes: ["f", "fe"]
    }
  },
  mr: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "A major section division references range heading (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  s: {
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "A section division references range heading",
    hasEndMarker: !1,
    children: void 0
  },
  r: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "Parallel reference(s) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  sp: {
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  sd1: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: void 0
  },
  sd2: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 2",
    hasEndMarker: !1,
    children: void 0
  },
  sd3: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 3",
    hasEndMarker: !1,
    children: void 0
  },
  sd4: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 4",
    hasEndMarker: !1,
    children: void 0
  },
  lh: {
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
    type: b.Character,
    description: "List entry total text",
    hasEndMarker: !0,
    children: void 0
  },
  lik: {
    category: T.Lists,
    type: b.Character,
    description: "Structured list entry key text",
    hasEndMarker: !0,
    children: void 0
  },
  liv: {
    category: T.Lists,
    type: b.Character,
    description: "Structured list entry value 1 content (if single value)",
    hasEndMarker: !0,
    children: void 0
  },
  liv1: {
    category: T.Lists,
    type: b.Character,
    description: "Structured list entry value 1 content (if multiple values)",
    hasEndMarker: !0,
    children: void 0
  },
  liv2: {
    category: T.Lists,
    type: b.Character,
    description: "Structured list entry value 2 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv3: {
    category: T.Lists,
    type: b.Character,
    description: "Structured list entry value 3 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv4: {
    category: T.Lists,
    type: b.Character,
    description: "Structured list entry value 4 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv5: {
    category: T.Lists,
    type: b.Character,
    description: "Structured list entry value 5 content",
    hasEndMarker: !0,
    children: void 0
  },
  f: {
    category: T.Footnotes,
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
    category: T.Footnotes,
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
    category: T.Footnotes,
    type: b.Character,
    description: "The origin reference for the footnote (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  ft: {
    category: T.Footnotes,
    type: b.Character,
    description: "Footnote text, Protocanon (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fk: {
    category: T.Footnotes,
    type: b.Character,
    description: "A footnote keyword (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fq: {
    category: T.Footnotes,
    type: b.Character,
    description: "A footnote scripture quote or alternate rendering (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fqa: {
    category: T.Footnotes,
    type: b.Character,
    description: "A footnote alternate rendering for a portion of scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  fl: {
    category: T.Footnotes,
    type: b.Character,
    description: "A footnote label text item, for marking or 'labelling' the type or alternate translation being provided in the note.",
    hasEndMarker: !0,
    children: void 0
  },
  fw: {
    category: T.Footnotes,
    type: b.Character,
    description: "A footnote witness list, for distinguishing a list of sigla representing witnesses in critical editions.",
    hasEndMarker: !0,
    children: void 0
  },
  fp: {
    category: T.Footnotes,
    type: b.Character,
    description: "A Footnote additional paragraph marker",
    hasEndMarker: !0,
    children: void 0
  },
  fv: {
    category: T.Footnotes,
    type: b.Character,
    description: "A verse number within the footnote text",
    hasEndMarker: !0,
    children: void 0
  },
  fdc: {
    category: T.Footnotes,
    type: b.Character,
    description: "Footnote text, applies to Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  fm: {
    category: T.Footnotes,
    type: b.Character,
    description: "An additional footnote marker location for a previous footnote",
    hasEndMarker: !0,
    children: void 0
  },
  x: {
    category: T.CrossReferences,
    type: b.Note,
    description: "A list of cross references (basic)",
    hasEndMarker: !0,
    children: {
      CrossReferences: ["xo", "xop", "xt", "xta", "xk", "xq", "xot", "xnt", "xdc"],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  xo: {
    category: T.CrossReferences,
    type: b.Character,
    description: "The cross reference origin reference (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xop: {
    category: T.CrossReferences,
    type: b.Character,
    description: "Published cross reference origin reference (origin reference that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  xt: {
    category: T.CrossReferences,
    type: b.Character,
    description: "The cross reference target reference(s), protocanon only (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xta: {
    category: T.CrossReferences,
    type: b.Character,
    description: "Cross reference target references added text",
    hasEndMarker: !0,
    children: void 0
  },
  xk: {
    category: T.CrossReferences,
    type: b.Character,
    description: "A cross reference keyword",
    hasEndMarker: !0,
    children: void 0
  },
  xq: {
    category: T.CrossReferences,
    type: b.Character,
    description: "A cross-reference quotation from the scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  xot: {
    category: T.CrossReferences,
    type: b.Character,
    description: "Cross-reference target reference(s), Old Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xnt: {
    category: T.CrossReferences,
    type: b.Character,
    description: "Cross-reference target reference(s), New Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xdc: {
    category: T.CrossReferences,
    type: b.Character,
    description: "Cross-reference target reference(s), Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  rq: {
    category: T.CrossReferences,
    type: b.Character,
    description: "A cross-reference indicating the source text for the preceding quotation.",
    hasEndMarker: !0,
    children: void 0
  },
  qt: {
    category: T.SpecialText,
    type: b.Character,
    description: "For Old Testament quoted text appearing in the New Testament (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  nd: {
    category: T.SpecialText,
    type: b.Character,
    description: "For name of deity (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  tl: {
    category: T.SpecialText,
    type: b.Character,
    description: "For transliterated words",
    hasEndMarker: !0,
    children: void 0
  },
  dc: {
    category: T.SpecialText,
    type: b.Character,
    description: "Deuterocanonical/LXX additions or insertions in the Protocanonical text",
    hasEndMarker: !0,
    children: void 0
  },
  bk: {
    category: T.SpecialText,
    type: b.Character,
    description: "For the quoted name of a book",
    hasEndMarker: !0,
    children: void 0
  },
  sig: {
    category: T.SpecialText,
    type: b.Character,
    description: "For the signature of the author of an Epistle",
    hasEndMarker: !0,
    children: void 0
  },
  pn: {
    category: T.SpecialText,
    type: b.Character,
    description: "For a proper name",
    hasEndMarker: !0,
    children: void 0
  },
  png: {
    category: T.SpecialText,
    type: b.Character,
    description: "For a geographic proper name",
    hasEndMarker: !0,
    children: void 0
  },
  addpn: {
    category: T.SpecialText,
    type: b.Character,
    description: "For chinese words to be dot underline & underline",
    hasEndMarker: !0,
    children: void 0
  },
  wj: {
    category: T.SpecialText,
    type: b.Character,
    description: "For marking the words of Jesus",
    hasEndMarker: !0,
    children: void 0
  },
  k: {
    category: T.SpecialText,
    type: b.Character,
    description: "For a keyword",
    hasEndMarker: !0,
    children: void 0
  },
  sls: {
    category: T.SpecialText,
    type: b.Character,
    description: "To represent where the original text is in a secondary language or from an alternate text source",
    hasEndMarker: !0,
    children: void 0
  },
  ord: {
    category: T.SpecialText,
    type: b.Character,
    description: "For the text portion of an ordinal number",
    hasEndMarker: !0,
    children: void 0
  },
  add: {
    category: T.SpecialText,
    type: b.Character,
    description: "For a translational addition to the text",
    hasEndMarker: !0,
    children: void 0
  },
  lit: {
    category: T.SpecialText,
    type: b.Paragraph,
    description: "For a comment or note inserted for liturgical use",
    hasEndMarker: !1,
    children: void 0
  },
  no: {
    category: T.CharacterStyling,
    type: b.Character,
    description: "A character style, use normal text",
    hasEndMarker: !0,
    children: void 0
  },
  it: {
    category: T.CharacterStyling,
    type: b.Character,
    description: "A character style, use italic text",
    hasEndMarker: !0,
    children: void 0
  },
  bd: {
    category: T.CharacterStyling,
    type: b.Character,
    description: "A character style, use bold text",
    hasEndMarker: !0,
    children: void 0
  },
  bdit: {
    category: T.CharacterStyling,
    type: b.Character,
    description: "A character style, use bold + italic text",
    hasEndMarker: !0,
    children: void 0
  },
  em: {
    category: T.CharacterStyling,
    type: b.Character,
    description: "A character style, use emphasized text style",
    hasEndMarker: !0,
    children: void 0
  },
  sc: {
    category: T.CharacterStyling,
    type: b.Character,
    description: "A character style, for small capitalization text",
    hasEndMarker: !0,
    children: void 0
  },
  sup: {
    category: T.CharacterStyling,
    type: b.Character,
    description: "A character style, for superscript text. Typically for use in critical edition footnotes.",
    hasEndMarker: !0,
    children: void 0
  },
  pb: {
    category: T.Breaks,
    type: b.Paragraph,
    description: "Page Break used for new reader portions and children's bibles where content is controlled by the page",
    hasEndMarker: !1,
    children: void 0
  }
}, rn = {
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
}, ou = {
  p: { children: rn },
  q: { children: rn },
  q1: { children: rn },
  q2: { children: rn },
  q3: { children: rn },
  q4: { children: rn },
  b: { children: rn },
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
    category: T.SpecialFeatures,
    type: b.Character,
    description: "A wordlist/glossary/dictionary entry marker for study/analysis purposes",
    hasEndMarker: !0
  },
  rb: {
    category: T.SpecialFeatures,
    type: b.Character,
    description: "A ruby glossing marker for study/analysis purposes",
    hasEndMarker: !0
  },
  jmp: {
    category: T.SpecialFeatures,
    type: b.Character,
    description: "A hyperlink marker for study/analysis purposes",
    hasEndMarker: !0
  },
  // The generated table has no `fig`, but `usfm.sty` does (and so does the stylesheet data every
  // project supplies). Without an entry here, a document parsed BEFORE its project stylesheet
  // resolves falls back to this table, reads `\fig` as an unknown marker, and breaks the figure
  // into its own paragraph with the closer stranded as unmatched.
  fig: {
    category: T.SpecialFeatures,
    type: b.Character,
    description: "Illustration [Columns to span, height, filename, caption text]",
    hasEndMarker: !0
  }
};
function ar(e) {
  const t = Object.hasOwn(wa, e) ? wa[e] : void 0, r = Object.hasOwn(ou, e) ? ou[e] : void 0;
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
const Uf = "v", Ff = "c", nn = "fig", au = "tr", Oa = "esb", zf = "esbe", eb = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, tb = {
  "": "start",
  c: "center",
  r: "end"
};
function rb(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function cu(e) {
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
const nb = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function ib(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Is && s + 1 < e.length && cu(e[s + 1]) || (cu(o) ? (r || (i = t.length, t += o), r = !0) : nb.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function sb(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function ob(e, t) {
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
const ab = /^(?:qt[1-5]?|ts)-[se]$/;
function po(e) {
  return ab.test(e) || If(e);
}
function Qo(e, t) {
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
function cb(e, t, r) {
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
      const h = e.indexOf("\\", i), y = h === -1 ? e.length : h;
      a(ib(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: u } = ob(e, i + 1);
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
    if (l === Uf) {
      const { word: h, next: y } = Qo(e, i);
      i = y, n.push({ kind: "verse", number: h });
      continue;
    }
    if (l === Ff) {
      const { word: h, next: y } = Qo(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: h });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, m = t(p)?.type;
    if (m === b.Note || m === void 0 && Se.isValidMarker(l)) {
      const { word: h, next: y } = Qo(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: h || "+" });
      continue;
    }
    if (m === b.Milestone || m === void 0 && po(l)) {
      const h = mb(e, c, l, i);
      if (h)
        n.push(h.token), h.ejectedText && o(h.ejectedText), i = h.next;
      else {
        const y = e.indexOf("\\", i), k = y === -1 ? e.length : y;
        o(e.slice(c, k)), i = k;
      }
      continue;
    }
    m === b.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : m === b.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Us(p) ? (d(), Us(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Oa || l === zf ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const lu = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Us(e) {
  return Object.hasOwn(lu, e) ? lu[e] : void 0;
}
function lb(e) {
  return Us(e) !== void 0;
}
const ub = /([-\w]+)\s*=\s*"(.*?)"/g, db = /[\s\u200B]*[\n\r][\s\u200B]*/g, Kf = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function ho(e) {
  return Kf[e];
}
const fb = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function pb(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function go(e, t, r = Kf[t]) {
  const n = e.replace(db, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(ub)];
  if (s.length > 0) {
    if (!pb(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      fb.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function mo(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function hb(e) {
  const t = Mr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function gb(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = go(e.slice(n + 1, i), r, mo(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function mb(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = go(s.slice(o + 1), r, mo(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = gb(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function yr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", q);
}
function sn(e) {
  return e.content || (e.content = []), e.content;
}
function Mr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u;
  const d = () => u ? sn(u) : r;
  let f = !1;
  const p = () => {
    if (s)
      return o.length > a ? sn(o[o.length - 1].object) : sn(s);
    if (o.length > 0)
      return sn(o[o.length - 1].object);
    if (!i) {
      if (f && !n)
        return d();
      i = { type: "para", marker: or, content: [] }, d().push(i);
    }
    return sn(i);
  }, m = (Z) => {
    const U = p();
    typeof Z == "string" && typeof U[U.length - 1] == "string" ? U[U.length - 1] = U[U.length - 1] + Z : U.push(Z);
  }, h = (Z) => {
    for (let U = Z; U < o.length; U += 1) {
      const ee = o[U].object;
      ee.closed = "false";
    }
  }, y = () => {
    h(0), o.length = 0;
  }, k = (Z) => {
    s && (o.length > a && (h(a), o.length = a), a = 0, Z || (s.closed = "false"), s = void 0);
  }, v = () => {
    c = void 0, l = void 0;
  }, C = (Z) => {
    u && (Z || (u.closed = "false"), u = void 0);
  };
  let A, E = "", x;
  const F = () => {
    E && m(yr(E)), E = "";
  }, D = (Z = !1) => {
    A?.type === "sidebar" ? E = "" : Z && E.endsWith(`
`) && (E = E.slice(0, -1)), A = void 0, F();
  }, H = () => {
    if (!x)
      return;
    const Z = { type: "char", marker: x.marker, content: [] };
    x.value && (Z.content = [yr(x.value)]), p().push(Z), o.push({ object: Z }), x = void 0;
  }, J = (Z, U) => {
    f = !1, v(), y(), k(!1), i = { type: "para", marker: Z, content: [] }, U && (i.content = [yr(U)]), d().push(i);
  }, Q = () => {
    x && (J(x.marker, x.value), x = void 0);
  };
  let le;
  const te = () => {
    if (le) {
      if (le.shape === "para")
        J(nn, le.value);
      else {
        const Z = { type: "char", marker: nn, content: [] };
        le.value && (Z.content = [yr(le.value)]), p().push(Z), o.push({ object: Z });
      }
      le = void 0;
    }
  }, Ce = cb(e, t?.getMarker ?? ar, n);
  for (let Z = 0; Z < Ce.length; Z++) {
    const U = Ce[Z];
    if (x) {
      if (U.kind === "text") {
        x.value += U.text;
        continue;
      }
      if (x.shape === "char" && U.kind === "end" && U.marker.replace(/^\+/, "") === x.marker) {
        if (x.value.trim() === "") {
          p().push({ type: "char", marker: x.marker, content: [] }), x = void 0, D();
          continue;
        }
        Object.assign(x.target, {
          [x.attrName]: yr(x.value.trim())
        });
        const ee = x.marker;
        if (x = void 0, ee === "ca") {
          const Ae = Ce[Z + 1];
          Ae?.kind === "text" && /^[\s\u200B]*$/.test(Ae.text) && Z++;
        }
        continue;
      }
      if (x.shape === "para" && (U.kind === "para" || U.kind === "chapter")) {
        const ee = x.value.replace(/[\s\u200B]+$/, "");
        ee === "" ? (J(x.marker), x = void 0) : (Object.assign(x.target, { [x.attrName]: yr(ee) }), x = void 0);
      } else {
        A = void 0, (U.kind === "para" || U.kind === "chapter") && x.value.endsWith(`
`) && (x.value = x.value.slice(0, -1)), x.shape === "para" ? Q() : H(), Z--;
        continue;
      }
    }
    if (le) {
      if (U.kind === "text" || U.kind === "optbreak") {
        le.value += U.kind === "text" ? U.text : "//";
        continue;
      }
      if (U.kind === "end" && U.marker.replace(/^\+/, "") === nn) {
        const ee = le.value.indexOf("|"), Ae = ee >= 0 ? go(le.value.slice(ee + 1), nn) : void 0;
        if (Ae) {
          const Ze = {};
          for (const [tt, Or] of Object.entries(Ae))
            Ze[tt === "src" ? "file" : tt] = Or;
          const et = {
            type: "figure",
            marker: nn,
            ...Ze
          }, ue = le.value.slice(0, ee);
          ue && (et.content = [yr(ue)]), m(et), le = void 0;
          continue;
        }
      }
      te(), Z--;
      continue;
    }
    if (A)
      if (U.kind === "text") {
        if (U.text.includes(`
`) && /^[\s\u200B]*$/.test(U.text)) {
          E += U.text;
          continue;
        }
        D();
      } else if (U.kind === "charOpen" || U.kind === "para") {
        const ee = U.kind === "para" || !U.isNested ? Us(U.marker) : void 0;
        if (ee && ee.targetTypes.includes(A.type)) {
          E = "", x = {
            target: A,
            attrName: ee.attrName,
            marker: U.marker,
            shape: ee.shape,
            value: ""
          };
          continue;
        }
        D(U.kind === "para");
      } else
        D(U.kind === "chapter");
    if (!s && !n && (U.kind === "charOpen" && !U.isNested && U.marker === nn || U.kind === "para" && U.marker === nn)) {
      y(), le = { shape: U.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (U.kind) {
      case "text": {
        let ee = U.text;
        if (!s && ee.endsWith(`
`)) {
          const Ae = Ce[Z + 1];
          (Ae === void 0 || Ae.kind === "para" || Ae.kind === "chapter") && (ee = ee.slice(0, -1));
        }
        ee && m(yr(ee));
        break;
      }
      case "para": {
        const ee = !s && !n;
        if (ee && U.marker === au) {
          y(), c || (c = { type: "table", content: [] }, d().push(c)), l = { type: "table:row", marker: au, content: [] }, sn(c).push(l), i = l, f = !1;
          break;
        }
        if (ee && l) {
          const Ae = eb.exec(U.marker);
          if (Ae && rb(Ae)) {
            y();
            const [, Ze, et, ue] = Ae, tt = {
              type: "table:cell",
              marker: ue ? U.marker.slice(0, U.marker.indexOf("-")) : U.marker,
              align: tb[Ze],
              content: []
            };
            ue && (tt.colspan = String(Number(ue) + 1 - Number(et))), sn(l).push(tt), i = tt;
            break;
          }
        }
        if (v(), !n && U.marker === Oa) {
          y(), k(!1), C(!1), u = { type: "sidebar", marker: Oa, content: [] }, r.push(u), i = void 0, A = u, f = !1;
          break;
        }
        if (U.marker === zf && u) {
          y(), k(!1), C(!0), i = void 0;
          break;
        }
        J(U.marker);
        break;
      }
      case "verse": {
        k(!1);
        const ee = { type: "verse", marker: Uf, number: U.number };
        m(ee), A = ee;
        break;
      }
      case "chapter": {
        y(), k(!1), v(), C(!1), i = void 0;
        const ee = {
          type: "chapter",
          marker: Ff,
          number: U.number
        };
        r.push(ee), A = ee, f = !0;
        break;
      }
      case "note": {
        k(!1);
        const ee = p();
        s = { type: "note", marker: U.marker, caller: U.caller, content: [] }, a = o.length, ee.push(s), A = s;
        break;
      }
      case "charOpen": {
        if (!U.isNested) {
          const Ze = s ? a : 0;
          h(Ze), o.length = Ze;
        }
        const ee = p(), Ae = { type: "char", marker: U.marker, content: [] };
        ee.push(Ae), o.push({ object: Ae });
        break;
      }
      case "end": {
        const ee = U.marker.replace(/^\+/, ""), Ae = s ? a : 0, Ze = o.findLastIndex((et, ue) => ue >= Ae && et.object.marker === ee);
        Ze >= 0 ? (yb(o[Ze].object), h(Ze + 1), o.length = Ze) : s && s.marker === ee ? k(!0) : (h(Ae), o.length = Ae, m({ type: "unmatched", marker: `${U.marker}*` }));
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
  if (le && te(), x)
    if (x.shape === "para") {
      const Z = x.value.replace(/[\s\u200B]+$/, "");
      Z === "" ? J(x.marker) : Object.assign(x.target, { [x.attrName]: yr(Z) }), x = void 0;
    } else
      x.value.endsWith(`
`) && (x.value = x.value.slice(0, -1)), H();
  y(), k(!1), C(!1);
  const Ee = (Z) => {
    for (const U of Z)
      typeof U != "string" && U.content && (Ee(U.content), U.content.length === 0 && delete U.content);
  };
  return Ee(r), r;
}
function yb(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = go(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const gn = co("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), jr = co("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), oe = co("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ur = "marker-trailing-space", jf = 1, bb = "marker", Rc = co("isGutterMarker", {
  parse: (e) => e === !0
});
class Er extends as {
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
    return new Er(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => xb(t) ? {
        conversion: kb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return _r().updateFromJSON(t);
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
    return r && Mn(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: jf
    };
  }
  // Mutation
  /**
   * Stays `false` even though a paragraph's gutter glyph can be selected: keyboard reach to that
   * glyph is owned by `ArrowNavigationPlugin` and `ParaMarkerSelectionPlugin` (shared-react).
   * Returning `true` would also change Lexical's native Backspace-beside-a-decorator behavior at
   * every paragraph start, where `StructureKeyboardPlugin` arms paragraph merges.
   */
  isKeyboardSelectable() {
    return !1;
  }
}
function kb(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: _r(t, r) };
}
function _r(e, t) {
  return Ke(new Er(e, t));
}
function Tb(e) {
  return Tt(_r(bb, e), Rc, !0);
}
function yo(e) {
  return Kt(e) && ie(e, Rc);
}
function xb(e) {
  return e?.tagName === "span";
}
function Kt(e) {
  return e instanceof Er;
}
function Bf(e) {
  return e?.type === Er.getType();
}
const Ur = "internal-comment", _b = [Ur], Vf = Object.freeze({}), qa = Object.freeze({}), Ra = Object.freeze({}), $a = Object.freeze({}), Ia = Object.freeze({}), Cb = 1, zn = /* @__PURE__ */ new Map(), vi = /* @__PURE__ */ new Map(), Kn = /* @__PURE__ */ new Map(), jn = /* @__PURE__ */ new Map();
class nt extends Zt {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Vf, r, n, i, s, o) {
    super(o), this.__typedIDs = vs(t), this.__typedOnClicks = Zo(r), this.__typedOnRemoves = ea(n), this.__typedOnMouseEnters = ta(i), this.__typedOnMouseLeaves = ra(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = vs(t.__typedIDs), n = Zo(t.__typedOnClicks), i = ea(t.__typedOnRemoves), s = ta(t.__typedOnMouseEnters), o = ra(t.__typedOnMouseLeaves);
    return new nt(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return _b.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Wi().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: Cb
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      Fn(n, on(t.theme.typedMark, a)), c.length > 1 && Fn(n, on(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Fn(n, on("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = on(n.theme.typedMark, s), d = on(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && Fn(r, u) : l === 0 && Yo(r, u), c === 1 ? l === 2 && Fn(r, d) : l === 1 && Yo(r, d));
      const f = new Set(o), p = new Set(a);
      for (const m of o)
        p.has(m) || Yo(r, on("annotationId", m));
      for (const m of a)
        f.has(m) || Fn(r, on("annotationId", m));
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
    return _e(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = vs(r.__typedIDs);
    r.__typedIDs = vs(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Fs(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Zo(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return _e(t) ? zn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = ea(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return _e(t) ? vi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = ta(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return _e(t) ? Kn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = ra(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return _e(t) ? jn.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!_e(a))
      return;
    We(t), We(r);
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
    if (!_e(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Fs(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Wi(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), zn.delete(r.getKey()), vi.delete(r.getKey()), Kn.delete(r.getKey()), jn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
    const n = zn.get(this.getKey());
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
    const n = Kn.get(this.getKey());
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
    const n = jn.get(this.getKey());
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === qa) {
      const t = zn.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      zn.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    zn.set(this.getKey(), this.__typedOnClicks);
  }
  setOnClickFor(t, r, n) {
    We(t), We(r);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, r) {
    if (!this.__typedOnClicks)
      return;
    const n = this.__typedOnClicks[t];
    if (!n)
      return;
    const i = Rr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = Rr(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === qa) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Ra) {
      const t = vi.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      vi.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    vi.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, r, n) {
    We(t), We(r);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, r) {
    if (!this.__typedOnRemoves)
      return;
    const n = this.__typedOnRemoves[t];
    if (!n)
      return;
    const i = Rr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = Rr(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Ra) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === $a) {
      const t = Kn.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      Kn.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    Kn.set(this.getKey(), this.__typedOnMouseEnters);
  }
  setOnMouseEnterFor(t, r, n) {
    We(t), We(r);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, r) {
    if (!this.__typedOnMouseEnters)
      return;
    const n = this.__typedOnMouseEnters[t];
    if (!n)
      return;
    const i = Rr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = Rr(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === $a) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Ia) {
      const t = jn.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      jn.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    jn.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, r, n) {
    We(t), We(r);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, r) {
    if (!this.__typedOnMouseLeaves)
      return;
    const n = this.__typedOnMouseLeaves[t];
    if (!n)
      return;
    const i = Rr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = Rr(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Ia) {
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
    const i = Sb(t, r);
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
    for (; _e(t) && du(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; _e(r) && du(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = vb(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Mb(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Eb(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Ab(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function vs(e = Vf) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (We(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      We(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function Zo(e) {
  if (!e || e === qa)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    We(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      We(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function ea(e) {
  if (!e || e === Ra)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    We(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      We(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function ta(e) {
  if (!e || e === $a)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    We(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      We(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function ra(e) {
  if (!e || e === Ia)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    We(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      We(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Rr(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function uu(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function Sb(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function du(e, t) {
  const r = uu(e), n = uu(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function vb(e, t) {
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
function Mb(e, t) {
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
function Eb(e, t) {
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
function Ab(e, t) {
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
function on(e, t) {
  return `${e}-${t}`;
}
function fu(e) {
  return `external-${e}`;
}
function Wi(e, t, r, n, i) {
  return Ke(new nt(e, t, r, n, i));
}
function _e(e) {
  return e instanceof nt;
}
function Wf(e) {
  return e?.type === nt.getType();
}
function Fs(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Hf(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let m, h;
  for (let y = 0; y < u; y++) {
    const k = a[y];
    if (I(h) && h.isParentOf(k))
      continue;
    const v = y === 0, C = y === u - 1;
    let A = null;
    if (M(k)) {
      const E = k.getTextContentSize(), x = v ? f : 0, F = C ? p : E;
      if (x === 0 && F === 0)
        continue;
      const D = k.splitText(x, F);
      A = D.length > 1 && (D.length === 3 || v && !C || F === E) ? D[1] : D[0];
    } else {
      if (_e(k))
        continue;
      I(k) && k.isInline() && (A = k);
    }
    if (A !== null) {
      if (A && A.is(m))
        continue;
      const E = A.getParent();
      (E == null || !E.is(m)) && (h = void 0), m = E, h === void 0 && (h = Wi(), h.addID(t, r, n, i, s, o), A.insertBefore(h)), h.append(A);
    } else
      m = void 0, h = void 0;
  }
  t === Ur && I(h) && (d ? h.selectStart() : h.selectEnd());
}
function Pb(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (_e(n))
      return n.getTypedIDs()[t];
    if (M(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (_e(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Nb = ["type", "marker", "content"], La = "unknown", Gf = 1, wb = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class An extends Zt {
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
    return new An(r, n, i, s);
  }
  static importDOM() {
    return {
      [La]: (t) => qb(t) ? {
        conversion: Ob,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return $c().updateFromJSON(t);
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
    return wb.has(this.getTag());
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
    const t = document.createElement(La);
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
      version: Gf
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
function Ob(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: $c(t, r) };
}
function $c(e, t, r) {
  return Ke(new An(e, t, r));
}
function qb(e) {
  return e?.tagName.toLowerCase() === La;
}
function Ie(e) {
  return e instanceof An;
}
const Hi = "id", Jf = 1, Rb = [
  "type",
  "marker",
  "code",
  "content"
];
class jt extends Zt {
  __marker = Hi;
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
    return Yf(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Wm(t);
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
      version: Jf
    };
  }
}
function Yf(e, t) {
  return Ke(new jt(e, t));
}
function St(e) {
  return e instanceof jt;
}
function Xf(e) {
  return e?.type === jt.getType();
}
const zs = "c", Qf = 1, $b = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class qt extends Zt {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = zs, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new qt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return Zf().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ds, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: Qf
    };
  }
}
function Zf(e, t, r, n, i) {
  return Ke(new qt(e, t, r, n, i));
}
function Re(e) {
  return e instanceof qt;
}
function Ib(e) {
  return e?.type === qt.getType();
}
const ep = [
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
], tp = [
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
], Lb = [
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
  ...ep,
  ...tp
], rp = 1, Db = ["type", "marker", "content"];
class be extends Zt {
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
    return new be(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Lb.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && ep.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && tp.includes(t);
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
    return be.isValidFootnoteMarker(t) || be.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => Fb(t) ? {
        conversion: Ub,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Cr().updateFromJSON(t);
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
    return pu(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), pu(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Mn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: rp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = Cr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function pu(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Ub(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Cr(t) };
}
function Cr(e, t) {
  return Ke(new be(e, t));
}
function Fb(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return be.isValidMarker(t) && e.classList.contains(be.getType());
}
function $(e) {
  return e instanceof be;
}
function zb(e) {
  return e?.type === be.getType();
}
const np = 1, Kb = "c", ip = "span";
class dr extends as {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Kb, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => sp(t) ? {
        conversion: jb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ic().updateFromJSON(t);
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
    const t = document.createElement(ip);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ds, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Mn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Ds, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? Ft(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: np
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
function jb(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Ic(t) };
}
function Ic(e, t, r, n, i, s) {
  return Ke(new dr(e, t, r, n, i, s));
}
function sp(e) {
  return e ? e.classList.contains(Ds) && e.tagName.toLowerCase() === ip : !1;
}
function ds(e) {
  return e instanceof dr;
}
function Bb(e) {
  return e?.type === dr.getType();
}
const op = 1;
class Br extends _c {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Br(t.__key);
  }
  static importJSON(t) {
    return Yt().updateFromJSON(t);
  }
  getMarker() {
    return or;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: op
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Yt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Yt() {
  return Ke(new Br());
}
function cr(e) {
  return e instanceof Br;
}
function bo(e) {
  return e?.type === Br.getType();
}
const Vb = [
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
], ap = 1, Wb = ["type", "marker", "content"];
class Qe extends _c {
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
    return new Qe(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Vb.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Hb,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return ei().updateFromJSON(t);
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
    return r && Mn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: ap
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = ei(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Hb(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = ei(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function ei(e, t) {
  return Ke(new Qe(e, t));
}
function ne(e) {
  return e instanceof Qe;
}
function Lc(e) {
  return e?.type === Qe.getType();
}
const Ks = "v", cp = 1, Gb = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class ht extends ze {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = Ks, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new ht(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return lp().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Pa, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: cp
    };
  }
}
function lp(e, t, r, n, i, s) {
  return Ke(new ht(e, t, r, n, i, s));
}
function Ne(e) {
  return e instanceof ht;
}
function up(e) {
  return e?.type === ht.getType();
}
const Jb = "​", ti = Jb;
var hu;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(hu || (hu = {}));
var gu;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(gu || (gu = {}));
function Yb() {
  return me(ti);
}
function Xb(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(ti, ""));
}
function fs(e) {
  return e.length > 0 && e.includes(ti) && e.replaceAll(ti, "") === "";
}
function Dc(e) {
  return M(e) && fs(e.getTextContent());
}
function dp(e) {
  return Ib(e) || Bb(e);
}
function He(e) {
  return Re(e) || ds(e);
}
function fp(e, t) {
  return e.find((r) => He(r) && r.getNumber() === t.toString());
}
function Qb(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && He(r));
}
function mu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function pp(e) {
  if (!e)
    return;
  if (He(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !He(t); )
    t = t.getPreviousSibling();
  if (t && He(t))
    return t;
}
function Pt(e) {
  return at(e, j) ?? void 0;
}
function Zb(e) {
  return St(e) || Re(e) || $(e) || ds(e) || cr(e) || je(e) || ne(e) || j(e) || Ne(e) || Ie(e);
}
function hp(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function ek(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Nt(e) {
  return he(e) || St(e);
}
function he(e) {
  return ne(e) || cr(e);
}
function tk(e) {
  return Lc(e) || bo(e);
}
function js(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function mn(e, t) {
  const r = ie(t, gn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function rk(e, t) {
  const r = I(e) ? e : e.getParent(), n = I(t) ? t : t.getParent(), i = r && n ? ry(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function nk(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function ri(e) {
  return e?.type === ze.getType();
}
function ik(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function sk(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function we(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function ot(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function gp(e, t, r) {
  const n = we(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Ft(e, t) {
  let r = we(e);
  return t && (r += `${q}${t}`), r += " ", r;
}
function ok(e) {
  const t = e[cs];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function mp(e) {
  return jc(e) || Bf(e) && e.textType === "marker" || ri(e) && ok(e) === "attribute" ? "" : ri(e) && e.text !== q ? e.text : zb(e) ? e.children.map((t) => mp(t)).join("") : "";
}
function ak(e) {
  return e.map((r) => mp(r)).filter((r) => r.length > 0).join(" ").trim();
}
function wt(e) {
  return " " + e + q;
}
function Uc(e) {
  const t = [];
  for (const r of e) {
    if (!$(r))
      continue;
    const n = yp(r);
    n !== zt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function yp(e) {
  return P(e) || Ar(e) || M(e) && ie(e, oe) === "attribute" ? "" : M(e) ? e.getTextContent() : I(e) ? e.getChildren().map((t) => yp(t)).join("") : "";
}
function Ar(e) {
  return Kt(e) && e.getTextType() === "marker";
}
function Bt(e) {
  return P(e) || Ar(e);
}
function Dt(e) {
  if (!Cc(e))
    return;
  const t = e.getNodes();
  if (t.length !== 1)
    return;
  const [r] = t;
  return yo(r) && he(r.getParent()) ? r : void 0;
}
function ko(e) {
  if (!he(e))
    return;
  const t = e.getFirstChild();
  return yo(t) ? t : void 0;
}
function ps(e) {
  const t = Sc();
  t.add(e.getKey()), Zn(t);
}
function yu(e, t) {
  ck(e, t), e.setMarker(t);
}
function ck(e, t) {
  const r = e.getMarker(), n = we(r), i = we(r, !0), s = ot(r), o = ot(r, !0), a = be.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Bt(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (P(c))
        c.setMarker(t);
      else if (Ar(c)) {
        const f = l.startsWith(we("", !0));
        c.setTextContent(u ? we(t, f) : ot(t, f));
      }
    }
  });
}
function Le(e, t = Hm) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Me(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function bp(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Fc(e) {
  if (!N(e))
    return bu(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !I(t) || e.anchor.type === "text" && !M(t)))
    return t ?? void 0;
  try {
    return bu(e) ?? t ?? void 0;
  } catch (n) {
    if (bp(n))
      return t ?? void 0;
    throw n;
  }
}
function lk(e, t) {
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
function zc(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function kp(e) {
  return !!e && e.includes("-");
}
function Tp(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function bu(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Kc(e) {
  if (!e)
    return !1;
  if (lo(e) || P(e) || Ar(e) || Kt(e) && e.getTextType() === "attribute")
    return !0;
  if (M(e)) {
    const t = ie(e, oe);
    if (t === ur || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === q || fs(r))
      return !0;
  }
  return !1;
}
function To() {
  const e = me(q);
  return Tt(e, oe, ur), e.setMode("token"), e;
}
function uk(e) {
  const t = e.getTextContent();
  t.startsWith(q) || e.setTextContent(q + t);
}
function Pn(e) {
  return M(e) && ie(e, oe) === ur;
}
function xp(e) {
  const t = e.getFirstChild();
  if (!Bt(t) || t === null || Pn(t.getNextSibling()))
    return !1;
  const r = O();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function li(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!Kc(s)) {
      if (_e(s)) {
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
function xo(e) {
  let t = e.getParent();
  for (; t && _e(t); )
    t = t.getParent();
  return t;
}
function dk(e, t) {
  return li(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function fk(e, t) {
  const r = xo(e);
  if (!r)
    return;
  const n = li(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function pk(e, t) {
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
function _p(e, t) {
  const r = li(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Kc(n))
    return _p(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || js(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || js(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function hk(e, t) {
  if (t <= 0)
    return 0;
  const r = li(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? gk(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function gk(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const mk = 1;
class fr extends ze {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(ln(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new fr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return ut().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: r, markerSyntax: n = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || ln(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = ln(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = ln(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = ln(r.__marker, r.__markerSyntax, t), r;
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
      version: mk
    };
  }
}
function ut(e, t, r) {
  return Ke(new fr(e, t, void 0, r));
}
function P(e) {
  return e instanceof fr;
}
function jc(e) {
  return e?.type === fr.getType();
}
function Jr(e) {
  return e.getTextContent() === ln(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function yk(e) {
  e.setTextContent(ln(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function ln(e, t, r = !1) {
  return t === "closing" ? ot(e, r) : t === "selfClosing" ? ot("") : we(e, r);
}
const Cp = 1, bk = "attribute-run";
function na(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Pr extends Zt {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new Pr(r, n);
  }
  static importJSON(t) {
    return Sp(t.runKind).updateFromJSON(t);
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
    t.classList.add(bk);
    const r = na(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = na(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = na(this.__runKind);
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
      version: Cp
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
function Sp(e) {
  return Ke(new Pr(e));
}
function Be(e) {
  return e instanceof Pr;
}
const kk = /* @__PURE__ */ new Set(["closed"]);
function ir(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !kk.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function vp(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Mp(e) {
  const t = Object.keys(e).filter((n) => !Jy.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Ep(e, t, r, n) {
  return vp(
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
function Di(e) {
  return e.getChildren().find((t) => P(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function Tk(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Di(e) === void 0 && Ap(e) === void 0;
}
function Ap(e) {
  return e.getChildren().find((t) => M(t) && ie(t, oe) === "attribute");
}
function Gi(e, t) {
  return hs(e.getNextSibling(), t);
}
const xk = /^[ \u00A0]+$/;
function Bc(e) {
  if (Jr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = we(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && xk.test(r.slice(t.length));
}
function hs(e, t) {
  let r, n, i, s;
  return Be(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), P(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Bc(e) && (r = e, e = e.getNextSibling()), M(e) && ie(e, oe) === "attribute" && (n = e, e = e.getNextSibling()), P(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && Jr(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Ji(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!P(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (M(n) && n.getTextContent() === wt(e.getCaller()))
    return n;
}
function Pp(e) {
  const t = Ji(e);
  return t ? hs(t.getNextSibling(), "cat") : {};
}
function _o(e) {
  const t = e.getFirstChild();
  if (!(!M(t) || P(t)) && ie(t, oe) !== "attribute")
    return t;
}
function Np(e) {
  const t = _o(e);
  return t ? hs(t.getNextSibling(), "ca") : {};
}
function wp(e) {
  const t = _o(e);
  if (!t)
    return;
  const r = hs(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Op(e) {
  const t = wp(e);
  return t ? hs(t.getNextSibling(), "cp") : {};
}
function qp(e) {
  const t = e.getParent();
  if (!$(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ne(n))
        return n;
      if (!(P(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || M(n) && ie(n, oe) === "attribute" || $(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Be(n)))
        return;
    }
}
function Co(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Be(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), P(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Bc(s) && (t = s, s = s.getNextSibling()), M(s) && ie(s, oe) === "attribute" && (r = s, s = s.getNextSibling()), P(s) && s.getMarkerSyntax() === "selfClosing" && Jr(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function Vc(e) {
  return $(xo(e));
}
function Da(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Vc(t) : t.getChildren().some((i) => $(i) && i.getMarker() === r) ? !0 : void 0;
}
function _k(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Da(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function So(e) {
  return M(e) && e.getType() === ze.getType() && ie(e, oe) !== "attribute";
}
function Wc(e, t) {
  if (e.getMarkerSyntax() !== "opening" || Da(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return P(r) ? Da(r, t) === !0 ? "spacer" : void 0 : So(r) ? r.getTextContent().startsWith(q) ? void 0 : "prefix" : "spacer";
}
function Ck(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (P(t) && Wc(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Rp(e, t) {
  const r = O();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function $p(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Wc(t, e);
    if (r !== void 0 && !Rp(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        M(n) && n.setTextContent(q + n.getTextContent());
      } else
        t.insertAfter(me(q));
  });
}
function Ip(e) {
  return e.isAttached() ? e.getChildren().some((t) => P(t) && Wc(t, e) !== void 0 && Rp(t, e)) : !1;
}
const Sk = "file", vk = "src", Mk = "colspan", Ek = "category", Ak = "alt", Pk = "closed", Nk = "false";
function wk(e) {
  return e[Pk] !== Nk;
}
function Ok(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === Sk ? vk : t,
    r
  ]));
}
function qk(e, t) {
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
function Lp(e, t, r) {
  const n = r ?? {}, i = wk(n);
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
        opening: `\\${qk(t, n[Mk])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: ir(Ok(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [Ek]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + ir(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [Ak]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: ir(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: ir(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const _t = { wantsRun: !1, valueText: void 0 }, Nr = {};
function ia(e, t) {
  if (t === "va")
    return e;
  const r = Gi(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function Hc(e) {
  const t = O();
  if (!N(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (I(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function vo(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = O();
  if (!N(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function Rk(e) {
  return Be(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : P(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : M(e) && ie(e, oe) === "attribute";
}
function $k(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!M(e) || ie(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function sa(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ne(t))
      return t;
    if (!Rk(t))
      return;
  }
}
function ku(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Ne(t),
    ownerOf: (t) => {
      if (Be(t))
        return t.getRunKind() === e ? sa(t) : void 0;
      const r = t.getParent();
      return Be(r) ? r.getRunKind() === e ? sa(r) : void 0 : $k(t) === e ? sa(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Ne(t))
        return _t;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? _t : { wantsRun: !0, valueText: q + r };
    },
    scanPieces: (t) => Ne(t) ? Gi(ia(t, e), e) : Nr,
    graceSite: (t, r) => Ne(t) ? !r.opener && !r.closer ? Hc(ia(t, e)) : vo(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Ne(t) ? ia(t, e) : void 0
    }
  };
}
const Ik = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => $(e),
  ownerOf: () => {
  },
  expectedPieces: () => _t,
  scanPieces: () => Nr,
  graceSite: (e) => $(e) && Ip(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Lk = {
  kind: "char",
  ownerPredicate: (e) => $(e),
  ownerOf: (e) => {
    if (!M(e) || ie(e, oe) !== "attribute")
      return;
    const t = e.getParent();
    return $(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!$(e) || Di(e) === void 0)
      return _t;
    const t = ir(e.getUnknownAttributes() ?? {}, ho(e.getMarker()));
    return t === "" ? _t : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => $(e) ? { value: Ap(e) } : Nr,
  graceSite: (e, t) => {
    if (!$(e) || t.value)
      return !1;
    const r = Di(e);
    if (!r)
      return !1;
    const n = O();
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
    insertRunBefore: (e) => $(e) ? Di(e) : void 0
  }
};
function Dp(e) {
  if (P(e))
    return e.getMarker() === "cat";
  if (!M(e) || ie(e, oe) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return P(t) && t.getMarker() === "cat";
}
function Dk(e) {
  const t = e.getParent();
  if (!j(t))
    return;
  const r = Ji(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Dp(n))
        return;
    }
}
const Uk = {
  kind: "cat",
  ownerPredicate: (e) => j(e),
  ownerOf: (e) => {
    if (Be(e))
      return e.getRunKind() === "cat" && j(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Be(t) ? t.getRunKind() === "cat" && j(t.getParent()) ? t.getParent() ?? void 0 : void 0 : Dp(e) ? Dk(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!j(e) || e.getIsCollapsed() !== !1)
      return _t;
    const t = e.getCategory();
    return t === void 0 ? _t : { wantsRun: !0, valueText: q + t };
  },
  scanPieces: (e) => j(e) ? Pp(e) : Nr,
  graceSite: (e, t) => {
    if (!j(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Ji(e);
      return r !== void 0 && Hc(r);
    }
    return vo(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => j(e) ? Ji(e) : void 0
  }
};
function Fk(e) {
  return Be(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : P(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : M(e) && ie(e, oe) === "attribute";
}
function zk(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!M(e) || ie(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function Kk(e) {
  const t = e.getParent();
  if (!Re(t))
    return;
  const r = _o(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Fk(n))
        return;
    }
}
function Tu(e) {
  const t = (r) => Re(r) ? e === "ca" ? _o(r) : wp(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Re(r),
    ownerOf: (r) => {
      if (Be(r))
        return r.getRunKind() === e && Re(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Be(n) ? n.getRunKind() === e && Re(n.getParent()) ? n.getParent() ?? void 0 : void 0 : zk(r) === e ? Kk(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Re(r))
        return _t;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? _t : { wantsRun: !0, valueText: q + n };
    },
    scanPieces: (r) => Re(r) ? e === "ca" ? Np(r) : Op(r) : Nr,
    graceSite: (r, n) => {
      if (!Re(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && Hc(i);
      }
      return vo(n);
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
function Up(e) {
  if (P(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return M(e) && ie(e, oe) === "attribute";
}
function jk(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (je(t)) {
      const r = P(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Up(t))
      return;
  }
}
const Bk = {
  kind: "milestone",
  ownerPredicate: (e) => je(e),
  ownerOf: (e) => {
    const t = Be(e) ? e.getRunKind() === "milestone" ? e : void 0 : Be(e.getParent()) ? e.getParent() : Up(e) ? e : void 0;
    if (!t || Be(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Be(t) ? je(r) ? r : void 0 : jk(t);
  },
  expectedPieces: (e) => {
    if (!je(e))
      return _t;
    const t = Ep(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = ir(t, mo(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : q + r };
  },
  scanPieces: (e) => {
    if (!je(e))
      return Nr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Co(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!je(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = O();
      if (!N(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return vo(t);
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
}, Vk = Lp("optbreak", void 0, void 0).opening, Wk = {
  kind: "optbreak",
  ownerPredicate: (e) => Ie(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Ie(t) || t.getTag() !== "optbreak"))
      return M(e) || Kt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: Vk }),
  scanPieces: (e) => Ie(e) ? { value: e.getFirstChild() ?? void 0 } : Nr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, Hk = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => Ie(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => _t,
  scanPieces: () => Nr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, Gk = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => $(e),
  ownerOf: () => {
  },
  expectedPieces: () => _t,
  scanPieces: () => Nr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Yi = [
  Ik,
  Lk,
  ku("va"),
  ku("vp"),
  Uk,
  Tu("ca"),
  Tu("cp"),
  Bk,
  Wk,
  Hk,
  Gk
], Jk = new Map(Yi.map((e) => [e.kind, e]));
function yn(e) {
  const t = Jk.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function bn(e) {
  for (const t of Yi) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function Fp(e) {
  return bn(e) !== void 0;
}
const Bs = "unmatched", zp = 2;
function Ui(e) {
  return `\\${e}`;
}
class wr extends ze {
  __marker;
  constructor(t = "", r) {
    super(Ui(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new wr(r, n);
  }
  static importDOM() {
    return {
      [Bs]: (t) => Xk(t) ? {
        conversion: Yk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Gc().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? Ui(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Ui(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(su), r.title = xu(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = xu(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Bs);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(su), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: zp
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Kp(e) {
  return e.getTextContent() === Ui(e.getMarker());
}
function xu(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function Yk(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Gc(t) };
}
function Gc(e) {
  return Ke(new wr(e));
}
function Xk(e) {
  return e?.tagName.toLowerCase() === Bs;
}
function Yr(e) {
  return e instanceof wr;
}
const jp = "table", Ua = "immutable-table", Bp = 1, Qk = ["type", "marker", "content"];
class Nn extends Zt {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Ua;
  }
  static clone(t) {
    return new Nn(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return Zk().updateFromJSON(t);
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
      type: Ua,
      ...t !== void 0 && { unknownAttributes: t },
      version: Bp
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function Zk(e) {
  return Ke(new Nn(e));
}
function Vp(e) {
  return e instanceof Nn;
}
function eT(e) {
  return e?.type === Ua;
}
const Wp = "table:row", _u = "immutable-table-row", Hp = 1, Fa = "tr", tT = ["type", "marker", "content"];
class ui extends Zt {
  __marker;
  __unknownAttributes;
  constructor(t = Fa, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return _u;
  }
  static clone(t) {
    return new ui(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return rT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Fa).setUnknownAttributes(t.unknownAttributes);
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
      type: _u,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Hp
    };
  }
}
function rT(e, t) {
  return Ke(new ui(e, t));
}
const Gp = "table:cell", Cu = "immutable-table-cell", Jp = 1, za = "tc1", nT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function iT(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class di extends Zt {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = za, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Cu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new di(r, n, i, s, o);
  }
  static importJSON(t) {
    return sT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? za).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = iT(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: Cu,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: Jp
    };
  }
}
function sT(e, t, r, n) {
  return Ke(new di(e, t, r, n));
}
function Mo(e, t) {
  const r = e.getChildAtIndex(t);
  return M(r) ? r : void 0;
}
function Vt(e, t) {
  const r = Mo(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Xi(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function oT(e) {
  return e.getChildren().some((t) => P(t) && t.getMarkerSyntax() === "closing");
}
function aT(e) {
  return Xi(e) ? void 0 : { closed: "false" };
}
function cT(e, t, r, n) {
  const i = t.getMarker(), s = Vc(t), o = oT(t);
  if (n) {
    e.append(ut(i, "opening", s));
    const [a] = r;
    So(a) && !a.getTextContent().startsWith(q) && a.setTextContent(q + a.getTextContent());
  }
  e.append(...r), o && e.append(ut(i, "closing", s));
}
function kn(e) {
  return at(e, $) ?? void 0;
}
function Jc(e) {
  let t = e.getParent();
  for (; $(t); )
    t = t.getParent();
  return t;
}
function Ka(e) {
  const t = Yp(e);
  return e.getChildren().every((r) => P(r) || t && ie(r, oe) === "attribute" || M(r) && r.getTextContent().replaceAll(q, "") === "");
}
function Yp(e) {
  return Xi(e);
}
function lT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? ir(r, ho(e.getMarker())) : "";
  n !== "" && t.insertAfter(me(n)), e.remove();
}
function uT(e, t) {
  if (Xi(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(ut(e.getMarker(), "closing", Vc(e)));
}
function dT(e, t) {
  return $(e) && !Xi(e) && !Xi(t);
}
function fT(e, t, r) {
  Ka(e) && e.getChildren().forEach((i) => {
    P(i) || i.remove();
  });
  const [n] = t;
  r && So(n) && !n.getTextContent().startsWith(q) && n.setTextContent(q + n.getTextContent()), e.append(...t);
}
function pT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Yp(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = P(l) && l.getMarkerSyntax() === "closing", f = s && ie(l, oe) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = dT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      fT(e, o, n);
    else {
      const l = Cr(t.getMarker(), aT(t));
      cT(l, t, o, n), e.insertAfter(l), Ka(l) ? l.remove() : c = l;
    }
  i && !a && uT(t, n), Ka(t) && lT(t, c);
}
function ni(e, t) {
  let r = e.getParent();
  for (; $(r); )
    pT(e, r, t), r = e.getParent();
}
function Yc(e) {
  if (M(e) && !P(e)) {
    const t = e.getTextContent().startsWith(q) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (I(e)) {
    const t = e.getChildren().find((r) => !P(r));
    if (t) {
      Yc(t);
      return;
    }
    e.selectEnd();
  }
}
const Qn = /* @__PURE__ */ new WeakMap();
function hT(e, t) {
  return Qn.set(e, t), () => {
    Qn.get(e) === t && Qn.delete(e);
  };
}
function Su(e) {
  return Qn.get(e);
}
function gT(e) {
  return Qn.get(ls())?.has(e.getKey()) ?? !1;
}
function mT(e) {
  Qn.get(ls())?.add(e.getKey());
}
function yT(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function ja(e) {
  return !!(e.opener || e.value || e.closer);
}
function vu(e) {
  return /^\s/.test(e);
}
function Xc(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !vu(t) || !vu(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Eo(e, t, r) {
  return r.wantsRun ? Xc(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : yT(t);
}
function bT(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return Xc(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Xp(e, t) {
  return !ja(e.scanPieces(t));
}
function gs(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Eo(e, n, r))
    return !1;
  const i = O();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || js(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function kT(e, t, r, n) {
  return !r.wantsRun || ja(n) || ny(Vi) ? !1 : ls().getEditorState().read(() => {
    const i = se(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : ja(e.scanPieces(i));
  });
}
function TT(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Mu(e) {
  const t = me(e);
  return Tt(t, oe, "attribute"), t;
}
function xT(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Sp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function _T(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    M(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Mu(n.valueText));
    return;
  }
  const l = xT(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = ut(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : M(d) ? Xc(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = Mu(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(ut(a === "selfClosing" ? "" : o(t), a));
}
function Qi(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Eo(e, i, n) && !gT(t)) {
    if (kT(e, t, n, i)) {
      mT(t);
      return;
    }
    if (!gs(e, t)) {
      if (!n.wantsRun) {
        TT(i);
        return;
      }
      _T(e, t, i, n);
    }
  }
}
function CT(e, t, r) {
  Qi(e, t), t.isAttached() && gs(e, t) && r.add(t.getKey());
}
function Qp(e) {
  if (!M(e))
    return !1;
  if (P(e) || Ne(e) || Yr(e))
    return !0;
  const t = ie(e, oe);
  return t === "attribute" || t === ur;
}
function Qc(e, t) {
  return P(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && Jr(e) && $(e.getParent())) : !1;
}
function ST() {
  const e = O();
  return N(e) ? Qc(e.focus.getNode(), e.focus.offset) : !1;
}
function Zp(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return M(t) && Qp(t) ? t : void 0;
}
function vT(e) {
  const t = Zp(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function MT(e) {
  const t = Zp(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Eu(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Au(e, t) {
  e.set(t.key, t.offset, t.type);
}
function ET(e, t) {
  let r = MT(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!M(n))
      return;
    if (!Qp(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Pu(e, t) {
  const r = ET(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function eh(e) {
  if (e.isCollapsed()) {
    const a = vT(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Eu(r), Eu(n)], s = Pu(r, "next"), o = Pu(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Au(r, i[0]), Au(n, i[1]), !1) : !0;
}
const Vs = "verse-block", th = 1, AT = "verse-block";
class fi extends Zt {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Vs;
  }
  static clone(t) {
    return new fi(t.__number, t.__key);
  }
  static importJSON(t) {
    return PT().updateFromJSON(t);
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
    return Tp(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(AT), Nu(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Nu(r, this.__number), !1;
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
      type: Vs,
      number: this.getNumber(),
      version: th
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Nu(e, t) {
  const { start: r, end: n } = Tp(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), wu(e, "data-verse-start", i ? r : NaN), wu(e, "data-verse-end", i ? n : NaN);
}
function wu(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function PT(e) {
  return Ke(new fi(e));
}
function Zi(e) {
  return e instanceof fi;
}
function NT(e) {
  return e?.type === Vs;
}
const wT = [
  jt,
  dr,
  qt,
  ht,
  be,
  Se,
  Qt,
  fr,
  An,
  Er,
  wr,
  Qe,
  Br,
  Nn,
  ui,
  di,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Pr,
  {
    replace: _c,
    with: () => Yt(),
    withKlass: Br
  }
], Ws = {
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
}, OT = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function qT(e) {
  if (!e)
    return ar;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: ar(r)?.category ?? T.Uncategorized,
      type: OT[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: ar(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Ou(e, t, r) {
  const n = {
    type: Tr,
    version: kr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return bo(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const rh = "v", nh = 1, RT = "verse-selected";
class vt extends as {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = rh, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-verse";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new vt(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => LT(t) ? {
        conversion: IT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Zc().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Pa, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Mn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Pa, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Ft(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Is + this.getNumber() + Is
    );
    return S($T, { nodeKey: this.getKey(), text: t });
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
      version: nh
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (bp(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function $T({ nodeKey: e, text: t }) {
  const [r] = ky(e);
  return S("span", { className: r ? RT : void 0, children: t });
}
function IT(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Zc(t) };
}
function Zc(e, t, r, n, i, s) {
  return Ke(new vt(e, t, r, n, i, s));
}
function LT(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === rh;
}
function wn(e) {
  return e instanceof vt;
}
function DT(e) {
  return e?.type === vt.getType();
}
function ge(e) {
  return Ne(e) || wn(e);
}
function ih(e) {
  return up(e) || DT(e);
}
function UT(e) {
  return FT(e).find((t) => ne(t));
}
function FT(e) {
  return e.some(Zi) ? e.flatMap((t) => Zi(t) ? t.getChildren() : t) : e;
}
function Ao(e) {
  return I(e) ? Zi(e) ? e.getChildren().flatMap(Ao) : e.getChildren() : [];
}
function zT(e, t) {
  return Ao(e).find((i) => ge(i) && zc(t, i.getNumber()));
}
function KT(e, t) {
  return t === 0 ? UT(e) : e.map((r) => zT(r, t)).filter((r) => r)[0];
}
function Hs(e) {
  return Ao(e).find((r) => ge(r));
}
function sh(e, t) {
  if (!I(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ge(i))
      return i;
  }
}
function jT(e) {
  const t = e.getParent();
  if (t && I(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (ge(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !He(r); ) {
    const n = Hs(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Ba(e) {
  return Ao(e).findLast((t) => ge(t));
}
function BT(e) {
  if (!Ne(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function VT(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && I(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function WT(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return VT(t, e, r);
  if (M(e)) {
    const n = BT(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function qu(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function HT(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!N(t))
    return qu(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return WT(e, t) ? { verseNum: n } : qu(e);
}
function GT(e) {
  return Zb(e) || wn(e);
}
function el(e) {
  if (M(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(q) && e.setTextContent(`${t} `);
  }
}
function oh(e) {
  if (M(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function ah(e, t) {
  return e.getEditorState().read(() => !se(t));
}
function JT(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = tl(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && I(i) && I(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && I(i)) {
      const s = i.getChildren(), o = r.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (ge(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = Ru(i);
      for (; s && !He(s); ) {
        const o = Hs(s);
        if (o) {
          n = o;
          break;
        }
        s = Ru(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = Hs(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && He(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function YT(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = tl(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && I(i) && (n = sh(i, r.getIndexWithinParent())), !n && i) {
      let o = $u(i);
      for (; o && !He(o); ) {
        const a = Ba(o);
        if (a) {
          n = a;
          break;
        }
        o = $u(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !He(s); ) {
      const o = Ba(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function Ru(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function $u(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function tl(e, t) {
  if (I(e) && N(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && ge(n))
      return n;
    const i = sh(e, t.anchor.offset);
    if (i)
      return i;
    const s = Hs(e);
    if (s)
      return s;
  }
  return rl(e);
}
function rl(e) {
  if (!e || He(e))
    return;
  if (ge(e))
    return e;
  let t = mu(e);
  for (; t; ) {
    if (He(t))
      return;
    if (ge(t))
      return t;
    const r = Ba(t);
    if (r)
      return r;
    t = mu(t);
  }
}
const XT = ["style"], QT = ["style", "code"], Gs = ["style", "cid"], ZT = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], ex = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], tx = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], rx = ["style", "caller", "category", "contents"], nx = ["tag", "marker", "contents"], ix = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], es = `
`;
function sx(e, t) {
  const r = se(e);
  if (!Ot(r))
    return;
  const n = ch(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function ch(e, t = "delta-doc") {
  if (!e)
    return;
  const r = _f();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (ii(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      ii(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Sr(l) || Ot(l))
        return n;
      Nt(l) && (a = l);
    }
    if (Nt(l) && (i.includes(l) || i.push(l)), lh(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += nl(l, t);
  }
  if (a)
    return n;
}
function Iu(e, t, r = "delta-doc") {
  if (e.length < 2 || !cx(e[0]) || !ax(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => ox(n, r)?.getKey());
}
function ox(e, t = "delta-doc") {
  const r = _f();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (ii(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      ii(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Nt(a) && (i.includes(a) || i.push(a)), lh(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = nl(a, t);
    if (Sr(a) && l > 0 && e >= n && e < n + l || Ot(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function ii(e, t) {
  return e ? t ? !js(t.node, e.getKey()) : !0 : !1;
}
function Sr(e) {
  return M(e) && !Ot(e);
}
function Ot(e) {
  return He(e) || ge(e) || je(e) || j(e) || Ie(e) || Yr(e);
}
function Lr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function ax(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && ix.includes(t);
}
function cx(e) {
  return e.retain != null && typeof e.retain == "number";
}
function lh(e, t) {
  return j(e) || Ie(e) ? !0 : t === "apply" && I(e) && Ot(e);
}
function uh(e) {
  const t = e.getParent();
  return Bt(e) && ne(t) && t.getFirstChild() === e;
}
function Va(e) {
  const t = e.getParent();
  return t !== null && at(t, Be) !== null;
}
function lx(e) {
  const t = e.getParent();
  return $(t) && e.getTextContent() === zt && t.getChildrenSize() === 1;
}
function ux(e) {
  const t = e.getParent();
  if (!j(t))
    return !1;
  const r = e.getPreviousSibling();
  return P(r) && r === t.getFirstChild() && e.getTextContent() === wt(t.getCaller());
}
function dx(e) {
  return !Fp(e) && nl(e, "delta-doc") === e.getTextContentSize();
}
function nl(e, t) {
  if (Ot(e))
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
    (Dc(e) || uh(e) || ie(e, oe) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ie(e, oe) === "attribute" || Va(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Nc) || lx(e) || ux(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Wa(e, t) {
  const r = { insert: e.__text }, n = ie(e, jr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = dh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function Lu(e) {
  const t = new qi();
  return e.isEmpty() || e.read(() => {
    const r = De();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && cr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = fx();
    for (const s of i)
      t.push(s);
  }), t;
}
function il(e, t) {
  const r = [], n = ci(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...Du(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...Du(c, n.length, n, i, s, o, a));
  return r;
}
function fx() {
  return il();
}
function Du(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return px(e, a, n), hx(e, a, i, s, o), gx(e, t, r, i, o, s, a), He(e) && a.push(kx(e)), ge(e) && a.push(xx(e)), je(e) && a.push(_x(e)), Yr(e) && a.push(Cx(e)), yx(e, a, s), mx(e, a, s), Ex(c, s), a;
}
function px(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    St(n) ? t.push(bx(n)) : ne(n) ? t.push(Tx(n)) : cr(n) && t.push({ insert: es });
  }
  Nt(e) && (r.includes(e) || r.push(e));
}
function hx(e, t, r, n, i) {
  if (!M(e) || Ne(e) || Yr(e))
    return;
  const s = e.getParent();
  if (j(s) && s.getFirstChild() === e)
    return;
  const o = Pt(e) !== void 0;
  if (P(e) && (o || uh(e) || Va(e) || Fp(e)) || ie(e, oe) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (fs(a))
    return;
  const c = e.getPreviousSibling();
  if (j(s) && P(c) && c === s.getFirstChild() && a === wt(s.getCaller()))
    return;
  const l = $(s) ? s : void 0, u = l?.getFirstChild();
  o && l && P(u) && c === u && a.startsWith(q) && (a = a.slice(1));
  const d = a.startsWith(Nc) || ie(e, oe) === "attribute" || Va(e), f = !!l && a === zt && l.getChildrenSize() === 1, p = Po(e, n), m = p ? r.filter((k) => p.children.includes(k)) : r, h = Wa(e, m);
  if (h.insert = a, p) {
    if (!a || a === q || d)
      return;
    p.contentsOps?.push(h);
  } else
    f || d || t.push(h);
  const y = a !== "" && !f && !(d && l);
  if (r.length > 0 && y)
    for (const k of r)
      i.add(k);
}
function gx(e, t, r, n, i, s, o) {
  $(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (ii(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = vx(c), u = Po(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function mx(e, t, r) {
  if (!j(e))
    return;
  const n = Sx(e), i = Po(e, r), s = {
    node: e,
    children: ci(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function yx(e, t, r) {
  if (!Ie(e))
    return;
  const n = Mx(e), i = Po(e, r), s = {
    node: e,
    children: ci(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Xr(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function bx(e) {
  const t = { style: Hi, code: e.__code };
  return Xr(t, e), { insert: es, attributes: { book: t } };
}
function kx(e) {
  const t = { style: zs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Xr(t, e), { insert: { chapter: t } };
}
function Tx(e) {
  const t = { style: e.__marker };
  return Xr(t, e), { insert: es, attributes: { para: t } };
}
function xx(e) {
  const t = { style: Ks, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Xr(t, e), { insert: { verse: t } };
}
function _x(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), Xr(t, e), { insert: { milestone: t } };
}
function Cx(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function Sx(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), Xr(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ie(e, jr);
  return n && (r.attributes = { segment: n }), r;
}
function vx(e) {
  const t = { insert: "" }, r = dh([e]);
  return r && (t.attributes = { char: r }), t;
}
function Mx(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), Xr(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Po(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function Ex(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    ii(t[r].node, e) && t.splice(r, 1);
}
function dh(e) {
  if (e.length === 0)
    return;
  const t = e.map(Ax);
  return t.length === 1 ? t[0] : t;
}
function Ax(e) {
  const t = { style: e.__marker }, r = ie(e, gn);
  return r && (t.cid = r), Xr(t, e), t;
}
const fh = 1;
class Xt extends as {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Ls, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new Xt(r, n, i, s);
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
    return sl().updateFromJSON(t);
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
    return r && Mn(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => wx(t, n), (l) => Ox(t, n, s, l), () => qx(t, n), () => Rx(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return S("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Ls && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === wf && i ? (
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
      version: fh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Px(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: sl(t, r) };
}
function sl(e, t, r) {
  return Ke(new Xt(e, t, r));
}
function Nx(e) {
  return e ? e.classList.contains(Xt.getType()) : !1;
}
function pr(e) {
  return e instanceof Xt;
}
function wx(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!j(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function Ox(e, t, r, n) {
  e.update(() => {
    const i = se(t);
    if (!j(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = se(r);
    if (!pr(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function qx(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!j(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return il(r);
  });
}
function Rx(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of ci())
      if (j(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const $x = [
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
], Ix = ["†"];
function ol(e) {
  if (hh())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = Uu(t), [s, o] = Uu(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = Fu(n, i), [s, o] = Fu(s, o);
  const a = vc();
  return a.anchor = tu(n.getKey(), i, zu(n)), a.focus = tu(s.getKey(), o, zu(s)), a;
}
function ph() {
  if (hh())
    return;
  const e = O();
  if (!e || !N(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Js(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Js(i, s);
  return { start: n, end: o };
}
function Uu(e) {
  if (Gm(e)) {
    const t = df(e.jsonPath);
    let r = De();
    for (let n = 0; n < t.length; n++) {
      if (!r || !I(r))
        return [void 0, void 0];
      const i = li(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : pk(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && I(r) ? [r, hk(r, e.offset)] : [void 0, void 0];
  }
  if (Jm(e) || Ym(e)) {
    const t = Mi(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (I(t)) {
      const n = t.getLastChild();
      if (n && M(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && I(r) ? [r, 0] : [void 0, void 0];
  }
  if (Xm(e)) {
    const t = Mi(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (I(t)) {
      const n = t.getLastChild();
      if (n && M(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && I(r) ? [r, 0] : [void 0, void 0];
  }
  if (Qm(e)) {
    const t = Mi(e.jsonPath);
    if (!t || !I(t))
      return [void 0, void 0];
    const r = oa(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && M(n) ? [n, 0] : [void 0, void 0];
  }
  if (Zm(e)) {
    const t = Mi(e.jsonPath);
    if (!t || !I(t))
      return [void 0, void 0];
    const r = oa(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && M(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (ey(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = Mi(e.jsonPath);
    if (!n || !I(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = oa(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && M(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${ty(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Fu(e, t) {
  if (!Ar(e))
    return [e, t];
  const r = e.getTextContent().length;
  if (t < 0 || t >= r)
    return [e, t];
  const n = e.getParent();
  if (!n || !I(n))
    return [e, t];
  const i = e.getIndexWithinParent();
  return i < 0 ? [e, t] : [n, i];
}
function zu(e) {
  return I(e) ? "element" : "text";
}
function oa(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (P(n) && n.getMarkerSyntax() === t || t === "closing" && P(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (Ar(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function Mi(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = df(r);
  let i = De();
  for (const s of n) {
    if (!i || !I(i))
      return;
    const o = li(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Js(e, t) {
  if (P(e)) {
    const r = e.getMarkerSyntax(), n = Lx(e), i = n ? tn(an(n)) : tn(an(e));
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
  if (_e(e)) {
    const r = e.getChildrenSize(), n = e.getChildAtIndex(Math.min(t, r - 1));
    if (M(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return Js(n, s);
    }
    const i = xo(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return Js(i, o);
    }
  }
  if (I(e)) {
    const r = e.getChildAtIndex(t);
    if (Ar(r))
      return {
        jsonPath: tn(an(e))
      };
    const n = _p(e, t);
    return n.type === "text" ? {
      jsonPath: tn([...an(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: tn(an(e)),
      offset: n.index
    };
  }
  if (M(e)) {
    const r = fk(e, t);
    if (r)
      return {
        jsonPath: tn([
          ...an(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: tn(an(e)), offset: t };
}
function Lx(e) {
  const t = e.getParent();
  if (!t || !I(t))
    return;
  const r = Dx(e);
  return r && !Nt(r) && !M(r) && !_e(r) ? r : t;
}
function Dx(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Kc(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function an(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = xo(r);
    if (!n)
      break;
    const i = dk(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function hh() {
  for (let e = De().getFirstChild(); e; e = e.getNextSibling())
    if (Zi(e))
      return !0;
  return !1;
}
function gh(e, t, r, n, i, s, o) {
  if (!Se.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? ol(r) : O();
  if (!N(a))
    return;
  const c = zx(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (Ri(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = mh(e, l, c, i, s, void 0, void 0);
  return Fx(u, a, i), u;
}
function al(e) {
  return e !== "expanded";
}
function Ux(e) {
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
function Fx(e, t, r) {
  const n = al(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || nk(t), eh(t);
  const i = Ux(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find($)?.selectEnd();
}
function Bn(e, t, r) {
  const n = Cr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(ut(e)) : r?.markerMode === "visible" && n.append(_r("marker", we(e)));
  const s = t === "" ? zt : i ? q + t : t;
  return n.append(me(s)), n;
}
function zx(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Bn("fr", f, n)), !e.isCollapsed()) {
        const p = ju(e);
        p.length > 0 && o.push(Bn("fq", p, n));
      }
      o.push(Bn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Bn("xo", f, n)), !e.isCollapsed()) {
        const p = ju(e);
        p.length > 0 && o.push(Bn("xq", p, n));
      }
      o.push(Bn("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function mh(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : al(n?.noteMode), l = qc(e, t, c);
  s && Tt(l, jr, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = ut(e), u && d.setMode("token"), a || (f = ut(e, "closing"))) : n?.markerMode === "visible" && (d = _r("marker", we(e) + " "), a || (f = _r("marker", ot(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = me(wt(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const m = () => To(), h = r.flatMap(jx(m));
    if (t === "")
      l.append(...h);
    else {
      const y = Uc(r);
      let k = () => {
      };
      i?.noteCallerOnClick && (k = i.noteCallerOnClick), p = sl(l.__caller, y, k), l.append(p, m(), ...h);
    }
  }
  return f && l.append(f), l;
}
function Ku(e) {
  if (typeof e == "string") {
    const i = se(e);
    return j(i) ? i : void 0;
  }
  const t = ci();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => j(i.node))[e]?.node;
  if (j(n))
    return n;
}
function Kx(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (wn(n) || !n) {
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
function jx(e) {
  return (t) => Kt(t) ? [t] : [t, e()];
}
function Bx(e) {
  const t = e.getParent();
  return t !== null && at(t, j) !== null;
}
function ju(e) {
  if (!N(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = pf(e);
  let a = "";
  for (const c of t)
    if (!(j(c) || pr(c) || Bx(c)) && !P(c) && !Yr(c) && ie(c, oe) !== "attribute") {
      if (ge(c)) {
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
const yh = [
  Xt,
  vt,
  ...wT
], Vx = [
  fi,
  ...yh
], Wx = vn((e, t) => {
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
function Hx() {
  const [e, t] = fe(void 0), [r, n] = fe(), i = Y(null), s = ye((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = Ay(l, c, () => {
      Py(l, c, {
        placement: "bottom-start",
        middleware: [Ny(), wy()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = ye(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return z(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function Gx({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = Hx();
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
const Jx = Km(Wx);
function bh({ isOpen: e = !1, children: t }) {
  const r = Y(null), { coords: n, placement: i } = Gx({ isOpen: e, floatingBoxRef: r }), s = Fe(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return dn(
    S(Jx, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const kh = lf(void 0);
function cl() {
  const e = uf(kh);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function Yx(e, t) {
  const [r, n] = fe(0), [i, s] = fe(-1), o = Fe(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = ye(() => {
    n((d) => {
      const f = o.length;
      return f ? (d - 1 + f) % f : 0;
    });
  }, [o.length]), l = ye(() => {
    n((d) => {
      const f = o.length;
      return f ? (d + 1) % f : 0;
    });
  }, [o.length]), u = ye(() => {
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
function Xx({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = Yx(t, r);
  return S(kh.Provider, { value: i, children: S("div", { ...n, children: e }) });
}
const Th = vn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = cl(), u = ye((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = ye((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return S("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function Qx({ children: e, autoIndex: t = !0, ...r }) {
  const n = Y(null), { state: { activeIndex: i, menuItems: s } } = cl(), o = Fe(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Fe(() => {
    const c = o(s);
    return t ? jm.map(c, (l, u) => Bm(l) && l.type === Th && l.props.index === void 0 ? Vm(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return z(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), S("div", { ref: n, role: "menu", ...r, children: a });
}
const Zx = (e, t, r) => ws(e, r).toLowerCase().includes(t.toLowerCase()), Bu = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", ws = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function e_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? Bu(r[0]) : "") : (u = n || (r.length > 0 ? Bu(r[0]) : ""), d = (m, h) => Zx(m, h, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((m) => {
    try {
      return d(m, t);
    } catch (h) {
      return console.warn("Error filtering item:", m, h), !1;
    }
  }).sort((m, h) => {
    const y = (C) => (p.has(C) || p.set(C, ws(C, f).toLowerCase()), p.get(C) ?? ""), k = a ? ws(m, f) : y(m), v = a ? ws(h, f) : y(h);
    for (const C of c)
      switch (C) {
        case "exact":
          if (k === l && v !== l)
            return -1;
          if (v === l && k !== l)
            return 1;
          break;
        case "startsWith":
          if (k.startsWith(l) && !v.startsWith(l))
            return -1;
          if (v.startsWith(l) && !k.startsWith(l))
            return 1;
          break;
        case "contains": {
          const A = k.indexOf(l), E = v.indexOf(l);
          if (A !== -1 && E === -1)
            return -1;
          if (E !== -1 && A === -1)
            return 1;
          if (A !== -1 && E !== -1)
            return A - E;
          break;
        }
      }
    return k.localeCompare(v);
  });
}
const aa = {
  Root: Xx,
  Options: Qx,
  Option: Th
};
function t_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Fe(() => e_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function r_() {
  const { moveUp: e, moveDown: t, select: r } = cl();
  return Fe(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const n_ = () => {
  const e = r_(), [t] = ae();
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
    return t.registerCommand(lr, r, $e);
  }, [t, e]);
};
function i_() {
  return n_(), null;
}
const s_ = ["Shift", "Control", "Alt", "Meta"];
function xh(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ae(), u = s !== void 0, [d, f] = fe(""), p = u ? s ?? "" : d, m = t_({ query: p, items: t, filterBy: "name" }), h = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return z(() => {
    a?.(p, m);
  }, [a, p, m]), z(() => l.registerCommand(lr, (y) => {
    if (u || c?.includes(y.key) || s_.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const v = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((C) => C.slice(0, -1));
      }
    }[y.key];
    return v ? (y.stopPropagation(), y.preventDefault(), v(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((C) => C + y.key), !0) : !1;
  }, $e), [l, u, p, o, n, c]), Te(aa.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: m, onSelectOption: (y) => h(y), children: [!u && S("input", { value: p, type: "text", disabled: !0 }), S(i_, {}), S(aa.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((v, C) => Te(aa.Option, { index: C, children: [S("span", { className: "label", children: v.label ?? v.name }), S("span", { className: "description", children: v.description })] }, v.name)) })] });
}
function o_({ trigger: e, items: t }) {
  const [r] = ae(), [n, i] = fe(!1), s = ye((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return z(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), z(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = O();
      if (N(l))
        return l;
    });
    a.read(() => {
      const l = O();
      !N(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && S(bh, { isOpen: n, children: ({ placement: o }) => S(xh, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function a_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: Fe(() => {
    if (!t || !e)
      return;
    const i = ar(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = ar(o), { action: c } = r(o, a);
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
function Fi(e, t) {
  return `${e}:${t}`;
}
function c_(e, t) {
  z(() => {
    if (!e.hasNodes([nt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Ge(Cf(e, nt, (n) => Wi(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], m = a[l]?.[d], h = c[l]?.[d];
          i.addID(l, d, f, p, m, h);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(nt, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = se(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : _e(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!nt.isReservedType(c))
              for (const u of l) {
                let d = t.get(Fi(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Fi(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Fi(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const l_ = vn(function({ logger: t }, r) {
  const [n] = ae(), i = Fe(() => /* @__PURE__ */ new Map(), []);
  c_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Fi(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = se(u);
        _e(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && Fs(d));
      }
  };
  return xc(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (nt.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = ol(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), Hf(p, a, c, l, u, d, f);
      }, { tag: Na });
    },
    removeAnnotation(o, a) {
      if (nt.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Fi(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Na });
    }
  })), null;
}), u_ = [];
function d_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = u_, onChange: n }) {
  const [i] = ae();
  return os(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(hf) && !u.has(Rf) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = f_(i, s);
        d.length !== 0 && n(o, i, u, d);
      });
  }, [i, e, t, r, n]), null;
}
function f_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new qi();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = se(i), o = s !== null && Pt(s) !== void 0;
    if (t.size === 1 && M(s) && !o && dx(s)) {
      const a = ch(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = se(i);
          return new qi([M(d) ? Wa(d) : { insert: "" }]);
        }), l = new qi([Wa(s)]), u = new qi(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = Lu(r), c = Lu(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const ll = "formatted", _h = "unformatted", Ch = "paragraph-structure", Sh = "standard", vh = "block-verse", p_ = {
  [ll]: "Formatted",
  [_h]: "Unformatted",
  [Ch]: "Paragraph Structure",
  [Sh]: "Standard",
  [vh]: "Block Verse"
};
function pi(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let ul, dl;
function h_(e) {
  const t = Mh(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  ul = e, dl = t;
}
h_(ll);
const Y1 = () => ul, No = () => dl;
function Mh(e) {
  let t;
  switch (e ?? ul) {
    case ll:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case _h:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Ch:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Sh:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case vh:
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
function X1(e) {
  if (!e)
    return;
  const t = Vu(e);
  return Object.keys(p_).find((r) => Rt(Vu(Mh(r)), t));
}
const g_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function Vu(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...g_, ...t };
}
function wo(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function m_(e) {
  if (e)
    return ts(e) ? vt : e.markerMode === "editable" ? ht : vt;
}
function ts(e) {
  return e?.verseLayout === "block";
}
function y_(e) {
  const t = [], r = e ?? dl;
  return r && (t.push(`${Vy}${r.markerMode}`), r.hasSpacing && t.push(jy), r.isFormattedFont && t.push(By)), t;
}
function b_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += k_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), x_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += __(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), S_(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function k_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), T_(t, e.retain, e.attributes, r, n)), e.retain);
}
function T_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = De();
  function l(u) {
    if (s <= 0)
      return !0;
    if (Sr(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), p = d - f, m = Math.min(s, p);
        if (m > 0) {
          let h = u;
          const y = f > 0, k = m < d - f;
          if (y && k) {
            const [, v] = u.splitText(f);
            [h] = v.splitText(m);
          } else y ? [, h] = u.splitText(f) : k && ([h] = u.splitText(m));
          if (Vr(r)) {
            const v = h.getParent();
            if ($(v)) {
              const C = r.char;
              let A;
              Array.isArray(C) ? a >= 0 && a <= C.length - 1 && (A = C[a]) : a === 0 && (A = C);
              const E = A ? mn(A, v) : !1;
              if (E && Array.isArray(C) && C.length > 1) {
                const x = me("");
                h.replace(x);
                const F = typeof r.segment == "string" ? r.segment : void 0, D = hi(C.slice(1), n, h, F);
                let H = x;
                for (const J of D)
                  H.insertAfter(J), H = J;
                x.remove(), $t(r, h);
              } else if (E)
                $t(r, h);
              else {
                h.remove();
                const x = Wu(h, r, n, i);
                if (x && x.length > 0) {
                  let F = v;
                  for (const D of x)
                    F.insertAfter(D), F = D;
                }
              }
            } else {
              const C = me("");
              h.replace(C);
              const A = Wu(h, r, n, i);
              if (A && A.length > 0) {
                let E = C;
                for (const x of A)
                  E.insertAfter(x), E = x;
                C.remove();
              } else
                C.replace(h);
            }
          } else
            $t(r, h);
          s -= m;
        }
      }
      o += d;
    } else if (Ot(u))
      e <= o && o < e + t && s > 0 && (Hu(u, r), s -= 1), o += 1;
    else if ($(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (Vr(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            Ha(u, p.style), typeof p.cid == "string" && Tt(u, gn, () => p.cid);
            const m = Le(p, Gs);
            m && Object.keys(m).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...m
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || q_(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && Aa(u), !0;
        }
      }
      d && Aa(u), a -= 1;
    } else if (Nt(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!cr(u))
          Hu(u, r);
        else if (fl(r)) {
          const p = Ph(r.para, n);
          p && u.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if (I(u)) {
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
function Wu(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = hi(t.char, r, e, i), o = s.find($);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), $t(t, e);
    return;
  }
  const a = {};
  qh.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), $t(t, e), s;
}
function Eh(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  P(r) ? (r.setMarker(t), r.setTextContent(we(t))) : Kt(r) && r.getTextType() === "marker" && r.setTextContent(we(t) + q);
}
function Ha(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    P(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = $(e.getParent()), i = e.getFirstChild();
  Kt(i) && i.getTextType() === "marker" && i.getTextContent() === we(r, n) && i.setTextContent(we(t, n));
  const s = e.getLastChild();
  Kt(s) && s.getTextType() === "marker" && s.getTextContent() === ot(r, n) && s.setTextContent(ot(t, n));
}
function Hu(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && $(e) && Vr(t)) {
      const i = Ga(n);
      if (Ha(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Tt(e, gn, () => o);
      }
      const s = Le(i, Gs);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (He(e) || ge(e) || je(e) || j(e) || Ie(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (St(e) || ne(e) || $(e)) && (r === "style" && ne(e) ? Eh(e, n) : r === "style" && $(e) ? Ha(e, n) : r === "code" && St(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Tt(e, jr, () => n));
  }
}
function x_(e, t, r) {
  if (t <= 0)
    return;
  const n = De();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Sr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (Ot(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Nt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Nt(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Yt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && he(p)) {
            let m = i + 1;
            const h = p.getChildren();
            for (const k of h) {
              if (s <= 0)
                break;
              const v = i;
              if (i = m, o(k)) {
                i = v;
                break;
              }
              Sr(k) ? m += k.getTextContentSize() : Ot(k) && (m += 1), i = v;
            }
            const y = p.getChildren();
            for (const k of y)
              k.remove(), a.append(k);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Yt(), !0);
        } else ne(a) ? a.replace(Yt(), !0) : a.remove();
      }
      i += 1;
    } else if (I(a)) {
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
function __(e, t, r, n, i) {
  if (t === es)
    return Gu(e, r, n, i);
  if (t.endsWith(es) && !fl(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Vr(r))
        throw new Error("Text + LF should not have char attributes");
      o += Ys(e, s, r, i);
    }
    return o += Gu(e + o, r, n, i), o;
  } else return Vr(r) ? C_(e, t, r, n, i) : Ys(e, t, r, i);
}
function C_(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = me(t === "" ? zt : t);
  $t(r, s);
  let o;
  {
    let y = function(k) {
      if (Sr(k)) {
        const v = k.getTextContentSize();
        if (e >= h && e < h + v) {
          const C = k.getParent();
          return $(C) && (o = C), !0;
        }
        h += v;
      } else if (Ot(k))
        h += 1;
      else if ($(k)) {
        const v = k.getChildren();
        for (const C of v)
          if (y(C))
            return !0;
      } else if (I(k)) {
        const v = k.getChildren();
        for (const C of v)
          if (y(C))
            return !0;
        Nt(k) && (h += 1);
      }
      return !1;
    };
    const m = De();
    let h = 0;
    y(m);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const m = a[0];
      m && mn(m, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (mn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = hi(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find($);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Ys(e, t, void 0, i);
  const f = {};
  for (const [m, h] of Object.entries(r))
    m !== "char" && m !== "segment" && typeof h == "string" && (f[m] = h);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const m of u)
    if (!Ah(e, m, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Ys(e, t, void 0, i));
}
function Ys(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = De();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Sr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = me(t);
        if ($t(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          $(f) && !Vr(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Ot(c))
      s += 1;
    else if ($(c)) {
      if (!o && e === s) {
        const d = me(t);
        $t(r, d);
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
        const d = me(t);
        return $t(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Nt(c)) {
      if (!o && e === s) {
        const d = me(t);
        $t(r, d);
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
        const d = me(t);
        return $t(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (I(c)) {
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
    const c = me(t);
    $t(r, c);
    const l = Yt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Ah(e, t, r) {
  const n = De();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Yt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!I(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (he(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Yt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Sr(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (Ot(l))
        i += 1;
      else if ($(l)) {
        if (o(l))
          return !0;
      } else if (Nt(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (cr(u) && Nt(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (I(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return I(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Yt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      he(a) ? cr(a) && ne(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !he(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : ($(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !he(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function S_(e, t, r, n, i) {
  let s;
  return Lr("chapter", t) ? s = M_(t.insert.chapter, r) : Lr("verse", t) ? s = E_(t.insert.verse, r) : Lr("ms", t) ? s = A_(t.insert.ms) : Lr("note", t) ? s = Nh(t, r, n, i) : Lr("unknown", t) ? s = wh(t, r, n, i) : Lr("unmatched", t) && (s = N_(t.insert.unmatched, r)), s ? Ah(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Gu(e, t, r, n) {
  let i;
  fl(t) ? i = Ph(t.para, r) : O_(t) && (i = v_(t.book)), i ??= Yt();
  const s = i, o = ne(s), a = cr(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (Sr(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (ne(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const m = e - c, [h] = m > 0 ? d.splitText(m) : [void 0];
          let y, k = h?.getPreviousSibling();
          for (; k; ) {
            const v = k;
            k = k.getPreviousSibling(), y ? y.insertBefore(v) : s.append(v), y = v;
          }
          return h && s.append(h), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Ot(d))
      c += 1;
    else if (Nt(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (cr(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (ne(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ne(d) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${d.getMarker()}) at targetIndex ${e}`), d.insertAfter(s), l = !0, !0;
    } else if (I(d)) {
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
  return u(De()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function v_(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Hi || !r || !jt.isValidBookCode(r))
    return;
  const n = Le(e, QT);
  return Yf(r, n);
}
function Ph(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Le(e, XT), i = ei(r, n);
  if (!pi(t))
    return i;
  if (t.markerMode === "editable")
    i.append(ut(r), To());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = we(r) + q;
    i.append(t.hasGutterParaMarkers ? Tb(s) : _r("marker", s));
  }
  return i;
}
function M_(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Le(e, ZT);
  let a;
  if (t.markerMode === "editable")
    a = Zf(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Ic(r, c, n, i, s, o);
  }
  return a;
}
function E_(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Le(e, ex);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Ft(r, n);
    c = lp(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Zc(n, l, i, s, o, a);
  }
  return c;
}
function A_(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Le(e, tx);
  return Lf(t, r, n, s, i);
}
function Nh(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Le(i.note, rx), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const h of c?.ops ?? [])
    if (typeof h.insert == "string")
      if (Vr(h.attributes)) {
        const y = hi(h.attributes.char, t, me(h.insert), void 0, Oh(h.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(me(h.insert));
  return mh(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function wh(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Le(i, nx), l = $c(s, o, c), u = a?.ops ?? [];
  u.length > 0 && P_(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && Tt(l, jr, () => d), l;
}
function P_(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Vr(s.attributes)) {
        const o = me(s.insert), a = hi(s.attributes.char, t, o, void 0, Oh(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(me(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Lr("unknown", s)) {
        const o = wh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Lr("note", s)) {
        const o = Nh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function N_(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = Gc(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Oh(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Ga(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function hi(e, t, r, n, i, s = !1, o = !1) {
  M(r) && r.getTextContentSize() === 0 && r.setTextContent(zt);
  const a = () => {
    o && M(r) && r.getTextContent() !== zt && r.setTextContent(q + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Ga), l = c[0], u = i?.[i.length - 1];
    if ($(u) && mn(l, u))
      return c.length > 1 ? hi(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, p, m) => {
      const h = Cr(p.style, Le(p, Gs));
      if (typeof p.cid == "string" && Tt(h, gn, () => p.cid), n && m === c.length - 1 && Tt(h, jr, () => n), f)
        if ($(f)) {
          const y = f.getMarker(), k = [];
          la(y, k, t, !0), k.forEach((C) => h.append(C)), h.append(f);
          const v = [];
          ca(f, v, t, !0), v.forEach((C) => h.append(C));
        } else
          h.append(f);
      return h;
    }, r);
    return la(l.style, d, t, s), ca(d, d, t, s), [d];
  } else {
    const c = Ga(e), l = i?.[i.length - 1];
    if ($(l) && mn(c, l))
      return r && l.append(r), [];
    a();
    const u = Cr(c.style, Le(c, Gs));
    return typeof c.cid == "string" && Tt(u, gn, () => c.cid), n && Tt(u, jr, () => n), r && u.append(r), la(c.style, u, t, s), ca(u, u, t, s), [u];
  }
}
function ca(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && w_(e.getMarker(), t, r, !1, n);
}
function la(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = ut(e, "opening", n) : r?.markerMode === "visible" && (i = _r("marker", we(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function w_(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = ut("", "selfClosing") : s = ut(e, "closing", i) : r?.markerMode === "visible" && (s = _r("marker", n ? ot("") : ot(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function O_(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function fl(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Vr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function q_(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function $t(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Tt(t, jr, () => n);
        continue;
      }
      if (R_(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const qh = [
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
function R_(e) {
  return qh.includes(e);
}
function $_() {
  const [e] = ae();
  return z(() => I_(e), [e]), null;
}
function I_(e) {
  return Ge(e.registerCommand(Bi, L_, At), e.registerCommand(Bi, (t) => (D_(t), !1), pn));
}
function L_(e) {
  return U_(e.target) ? Dt(O()) !== void 0 : !1;
}
function D_(e) {
  const t = e.target;
  if (Mc(t) && yo(En(t)))
    return;
  const r = O();
  N(r) && F_(r);
}
function Rh(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Bt(t))
      r++, t = t.getNextSibling(), M(t) && t.getTextContent() === q && (r++, t = t.getNextSibling());
    else if (ge(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r;
}
function gi(e) {
  const t = Rh(e);
  return t === 0 ? !1 : (Vt(e, t), !0);
}
function U_(e) {
  if (!Mc(e))
    return !1;
  const t = En(e);
  if (!yo(t))
    return !1;
  const r = t.getParent();
  return r ? he(r) ? (ps(t), !0) : (Vt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function F_(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = se(t.key);
  if (!he(r))
    return !1;
  const n = r.getFirstChild();
  return !Ar(n) && !wn(n) ? !1 : gi(r);
}
function z_() {
  const [e] = ae();
  return z(() => {
    const t = (r) => r instanceof KeyboardEvent && !$h(r) || !Ih() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Ge(
      e.registerCommand(lr, t, $e),
      e.registerCommand(uo, t, $e),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm records what a cut would cover
      // and claims nothing, so either order of the two is correct: with no removal, nothing it
      // armed can be reaped.
      e.registerCommand(sr, t, rt),
      e.registerCommand(Fr, t, rt),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(fo, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = En(r.target);
        return !n || !Tn(n) ? !1 : (r.preventDefault(), !0);
      }, $e),
      e.registerCommand(iy, t, $e),
      e.registerCommand(sy, t, $e),
      e.registerCommand(oy, t, $e)
    );
  }, [e]), null;
}
function $h(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Tn(e) {
  return at(e, (t) => Ie(t) || Vp(t)) ?? void 0;
}
function Ih() {
  const e = O();
  return N(e) ? Tn(e.anchor.getNode()) !== void 0 || Tn(e.focus.getNode()) !== void 0 : !1;
}
function K_(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function j_(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), K_(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function B_(e, t, r, n) {
  if (!aC(t) || j_(e, r))
    return !1;
  const i = r === "up" ? YT(t) : JT(t);
  return i && n.preventDefault(), i;
}
function V_({ viewOptions: e }) {
  const [t] = ae();
  return W_(t, e), null;
}
function W_(e, t) {
  z(() => {
    if (!e.hasNodes([dr, vt, Se]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = O();
      if (!N(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = Ja(o), d = Z_(i, Ya(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return B_(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = Ja(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Ya(a, n.key) ? l = !c && nC(i) || !c && Xu(i, "next") || !c && G_(i) || sC(i, !c) || !c && s && Yu(i, "next") : H_(a, n.key) && (l = !c && rC(i) || !c && Xu(i, "previous") || !c && J_(i) || oC(i, t) || !c && s && Yu(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(lr, r, $e);
  }, [e, t]);
}
function Ja(e) {
  return e.dir || "ltr";
}
function Ya(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function H_(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Xa(e) {
  if (!$(e) || e.getMarker() !== "fp")
    return;
  const t = Pt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function G_(e) {
  const t = Xa(hp(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Vt(t, 0), !0);
}
function J_(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Xa(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Ju(n);
  }
  if (t.offset === 0) {
    const n = Xa(r);
    return n ? Ju(n) : !1;
  }
  return !1;
}
function Ju(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (M(t))
    return t.select(), !0;
  if (I(t)) {
    const i = t.getLastDescendant();
    return M(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const Xs = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function Y_(e) {
  if (Xs)
    for (const { segment: r } of Xs.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function X_(e) {
  if (Xs) {
    let n = 0;
    for (const { index: i } of Xs.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function pl(e) {
  for (let t = e; t; t = t.getParent())
    if (I(t) && !t.isInline())
      return t;
}
function Lh(e) {
  return !!e && P(e) && Tn(e) !== void 0;
}
function xn(e) {
  return M(e) && !e.isToken() && !Lh(e) && e.getTextContentSize() > 0;
}
function Dh(e) {
  return lo(e) ? !0 : j(e) ? e.getIsCollapsed() === !0 : M(e) ? (e.isToken() || Lh(e)) && e.getTextContentSize() > 0 : gf(e) ? !je(e) : !1;
}
function si(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function ms(e, t, r) {
  for (let n = e; n; ) {
    if (Dh(n))
      return n;
    if (I(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? si(n, t, r);
      continue;
    }
    if (xn(n))
      return n;
    n = si(n, t, r);
  }
}
function Oo(e, t, r, n, i) {
  return r === "element" && I(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? si(e, n, i) : r === "text" && Dh(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : si(e, n, i);
}
function ua(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Oo(e.node, e.offset, e.kind, "previous", t), n = ms(r, "previous", t);
  if (!n)
    return e;
  if (xn(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function Q_(e, t) {
  const r = e.getNode(), n = pl(r);
  if (!n)
    return;
  if (e.type === "text" && xn(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return ua({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Oo(r, e.offset, e.type, t, n), s = ms(i, t, n);
  if (!s)
    return;
  if (xn(s)) {
    const c = s.getTextContent(), l = t === "next" ? Y_(c) : X_(c);
    return ua({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return ua({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function Uh(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = Q_(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Yu(e, t) {
  return Uh(e, t, "collapse");
}
function Z_(e, t) {
  return Uh(e, t, "extend");
}
function Fh(e) {
  if (Pt(e))
    return;
  const t = pl(e);
  return he(t) ? t : void 0;
}
function eC(e, t) {
  return e.getParent()?.is(t) === !0 && e.getIndexWithinParent() < Rh(t);
}
function tC(e, t) {
  const r = e.getNode();
  if (e.type === "text" && xn(r) && e.offset > 0)
    return !1;
  const n = Oo(r, e.offset, e.type, "previous", t), i = ms(n, "previous", t);
  return i === void 0 || eC(i, t);
}
function rC(e) {
  const t = e.focus, r = Fh(t.getNode()), n = ko(r);
  return !r || !n || !tC(t, r) ? !1 : (ps(n), !0);
}
function nC(e) {
  const t = e.focus, r = Fh(t.getNode());
  if (!r || !zh(t, "next", r))
    return !1;
  const n = ko(r.getNextSibling());
  return n ? (ps(n), !0) : !1;
}
function zh(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && xn(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Oo(n, e.offset, e.type, t, r);
  return ms(i, t, r) === void 0;
}
function iC(e, t) {
  const r = De();
  for (let n = e; n; ) {
    const i = si(n, t, r), s = i && ms(i, t, r);
    if (!s)
      return;
    if (n = Tn(s), !n)
      return s;
  }
}
function Xu(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Tn(n))
    return !1;
  const i = pl(n);
  if (!i || !zh(r, t, i))
    return !1;
  const s = si(i, t, De()), o = s && Tn(s);
  if (!o)
    return !1;
  const a = iC(o, t);
  if (!a)
    return !0;
  if (xn(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Qu(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function sC(e, t) {
  const r = e.anchor.getNode(), n = hp(e);
  if (j(n) && !P(n.getFirstChild())) {
    if (he(r)) {
      if (e.anchor.offset === r.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === r.getTextContentSize()))
      return !1;
    if (n.getIsCollapsed()) {
      if (n.is(n.getParent()?.getLastChild())) {
        const s = n.getParent()?.getNextSibling(), o = t ? ko(s) : void 0;
        return o ? ps(o) : s && !(he(s) && gi(s)) && s.selectStart(), !0;
      }
    } else return Kt(n.getFirstChild()) ? n.select(2, 2) : n.select(1, 1), !0;
  }
  if (he(r) && j(n) && n.getIsCollapsed()) {
    const s = n.getNextSibling();
    return s ? s.selectStart() : Qu(n), !0;
  }
  const i = n?.getParent();
  if (Kt(n) && j(i) && n.is(i?.getLastChild())) {
    const s = i.getNextSibling();
    return s ? s.selectStart() : i.getIsCollapsed() ? Qu(i) : i.selectEnd(), !0;
  }
  return !1;
}
function oC(e, t) {
  const r = ek(e);
  if (ds(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (St(i.getParent()))
    return !0;
  if (j(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!wn(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (he(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = at(o, (c) => j(c));
    if (j(a) && a.getIsCollapsed()) {
      const c = a.getParent();
      if (!c)
        return !1;
      const l = a.getIndexWithinParent();
      return c.select(l, l), !0;
    }
  }
  const s = Pt(i);
  if (!s || s.getIsCollapsed())
    return !1;
  if (pr(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function aC(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return ge(t) && gf(t);
}
function cC() {
  const [e] = ae();
  return lC(e), null;
}
function lC(e) {
  z(() => {
    if (!e.hasNodes([be]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Ge(
      e.registerNodeTransform(be, fC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(be, _k),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(be, $p),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(be, (t) => Qi(yn("char"), t)),
      e.registerNodeTransform(ze, pC)
    );
  }, [e]);
}
function da(e) {
  return e.getChildren().some(P);
}
function uC(e, t) {
  const r = t.getFirstChild();
  if (!P(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (So(n)) {
    const i = n.getTextContent();
    i.startsWith(q) && (i === q ? n.remove() : n.setTextContent(i.slice(q.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function dC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  P(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function fC(e) {
  if (!$(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (da(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ie(e, gn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if ($(i) && mn({ style: t, cid: r }, i) && Rt(n, i.getUnknownAttributes()))
    if (da(i)) {
      if (uC(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  $(s) && mn({ style: t, cid: r }, s) && Rt(n, s.getUnknownAttributes()) && (da(s) ? dC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function pC(e) {
  const t = e.getParent();
  if (!$(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(zt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function Kh(e) {
  return e.replaceAll("	", " ");
}
const hl = (e) => {
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
      n.setData(o, Kh(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(sr, s);
  });
}, gl = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", Kh(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(sr, i);
  });
};
function hC() {
  const [e] = ae();
  return z(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !($s ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), e.dispatchCommand(us, null)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), e.dispatchCommand(Fr, null)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? gl(e) : hl(e)));
    };
    return e.registerRootListener((r, n) => {
      n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
    });
  }, [e]), null;
}
function gC({ logger: e }) {
  const [t] = ae();
  return z(() => Ge(
    // When the backslash or forward slash key is typed.
    t.registerCommand(lr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Yn),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(sr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Yn),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(fo, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Yn)
  ), [t, e]), null;
}
function mC({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), S("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: S("span", { className: "text", children: i.title }) });
}
function yC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return S("div", { className: "typeahead-popover", children: S("ul", { children: e.map((i, s) => S(mC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let bC = 0;
class Ei {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${bC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function kC({ options: e } = {}) {
  const [t] = ae(), [r, n] = fe(() => !t.isEditable()), [i, s] = fe({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = fe(void 0), c = Fe(() => {
    const d = [
      new Ei("Cut", {
        onSelect: () => {
          t.dispatchCommand(Fr, null);
        },
        isDisabled: r
      }),
      new Ei("Copy", {
        onSelect: () => {
          t.dispatchCommand(us, null);
        }
      }),
      new Ei("Paste", {
        onSelect: () => {
          hl(t);
        },
        isDisabled: r
      }),
      new Ei("Paste as Plain Text", {
        onSelect: () => {
          gl(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new Ei(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...d, ...f];
  }, [t, r, e]), l = ye(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  z(() => {
    const d = (f) => {
      const p = f.target;
      t.getRootElement() === p || sp(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
    };
    return t.registerRootListener((f, p) => {
      p?.removeEventListener("contextmenu", d), f && f.addEventListener("contextmenu", d);
    });
  }, [t]), z(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      l();
    };
    return globalThis.addEventListener("scroll", d, !0), () => globalThis.removeEventListener("scroll", d, !0);
  }, [i.isOpen, l]), z(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      l();
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [i.isOpen, l]), z(() => {
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
  }, [i.isOpen, l, c, o, t]), z(() => t.registerEditableListener((d) => {
    n(!d);
  }), [t]);
  const u = Y(null);
  return os(() => {
    const d = u.current;
    if (!d)
      return;
    const { width: f, height: p } = d.getBoundingClientRect(), m = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), h = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    d.style.left = `${m}px`, d.style.top = `${h}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Sy.createPortal(S("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: S(yC, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), l());
  }, onOptionMouseEnter: (d) => {
    a(d);
  } }) }), document.body) : null;
}
function TC() {
  const [e] = ae();
  return z(() => e.registerCommand(lr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!($s ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, rt), [e]), null;
}
function xC({ isEditable: e }) {
  const [t] = ae();
  return os(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Zu(e) {
  return !!e && Dc(se(e));
}
function jh(e) {
  const [t] = ae(), r = Y(void 0), n = ye((i) => {
    const s = O(), o = N(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = Zu(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = Mo(u, d);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const p = Yb();
        i.insertAfter(p), r.current = p.getKey(), l = p.getKey();
      }
      Vt(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = se(a);
      M(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return z(() => {
    const i = () => {
      const a = e(), c = O(), l = N(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (zr(Kr), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (fs(c) || !c.includes(ti))
        return;
      const l = O(), u = N(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (Xb(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(ti).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Ge(t.registerCommand(xr, () => (i(), !1), pn), t.registerCommand(Ec, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Zu(a);
      }), c && t.update(() => {
        const l = se(a);
        M(l) && l.remove();
      }, { tag: Kr }), r.current = void 0, !1;
    }, pn), t.registerNodeTransform(ze, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function _C() {
  const e = O();
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!I(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!ge(i) || Mo(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ge(s))
    return i;
}
function CC() {
  return jh(_C), null;
}
function SC({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = ae();
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
        const u = o.getRootElement(), d = u?.ownerDocument.activeElement, f = u != null && d != null && (u === d || u.contains(d));
        o.update(() => {
          f || zr(ay), o.setEditorState(l), o.dispatchCommand(cy, void 0);
        }, { tag: Of });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function vC({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ae();
  return MC(t, n), EC(i, e, r, n), null;
}
function MC(e, t) {
  const r = Y(void 0), n = Y(void 0), i = e.noteCallers, s = e.crossRefCallers;
  z(() => {
    let o = i;
    (!o || o.length <= 0) && (o = $x), r.current !== o && (r.current = o, ed("note-callers", o, t));
  }, [t, i]), z(() => {
    let o = s;
    (!o || o.length <= 0) && (o = Ix), n.current !== o && (n.current = o, ed("cross-ref-callers", o, t));
  }, [t, s]);
}
function EC(e, t, r, n) {
  z(() => {
    if (!e.hasNodes([be, Se, Xt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => RC(s));
    return Ge(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Se, (s) => AC(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(be, PC),
      e.registerNodeTransform(ze, NC),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Xt, wC),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Xt, (s, { prevEditorState: o }) => OC(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(xr, () => qC(e, t, r, n), At),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function AC(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => pr(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    M(i) && !P(i) && i.getTextContent() !== wt(e.getCaller()) && e.insertBefore(i);
  }
}
function PC(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => pr(o));
  if (!$(e) || !j(t) || !n)
    return;
  const i = Uc(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  M(s) ? s.getTextContent() !== q && s.setTextContent(q) : e.insertAfter(me(q));
}
function NC(e) {
  const t = Pt(e), r = t?.getChildren(), n = r?.find((o) => pr(o));
  if (!M(e) || !j(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!P(e) && j(i) && e.getTextContent() !== q && (e.setTextContent(q), e.selectEnd()), $(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(zt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Uc(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function wC(e) {
  if (!pr(e))
    return;
  const t = e.getNextSibling();
  !M(t) || P(t) ? e.insertAfter(me(q)) : t.getTextContent() !== q && t.setTextContent(q);
}
function OC(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = se(r), a = o?.getParent();
      return pr(o) && j(a) && a.getCaller() === Ls;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function qC(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = O();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = at(o, (c) => j(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = se(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Ai(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (j(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Ai(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (j(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Ai(e, c, n);
    } else if (!a) {
      const c = at(o, (l) => j(l));
      if (c && c.getIsCollapsed() && he(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Ai(e, l, n);
      }
    }
  }
  if (he(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (wn(c) && j(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Ai(e, l, n);
    }
  }
  return !1;
}
function Ai(e, t, r) {
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
function RC(e) {
  const t = O();
  if (!N(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (j(i) && M(s)) {
    e.preventDefault();
    const o = vc();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Zn(o);
  }
}
function ed(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if ($C(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function $C(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function qo(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!P(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Ji(e);
  return r && t.push(r), t.length > 0 && t.every((n) => M(n) && n.getMode() === "token") ? t : [];
}
function IC(e) {
  const t = e.getParent();
  if (j(t))
    return qo(t).some((r) => r.is(e)) ? t : void 0;
}
function Qs(e) {
  const t = qo(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function LC(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function DC(e) {
  const t = ly();
  if (!N(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= Qs(e);
  const i = LC(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= Qs(e);
}
function Qa(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = IC(t);
  if (r)
    return UC(r, t, e.offset) ? void 0 : r;
}
function UC(e, t, r) {
  const n = qo(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function FC(e) {
  const t = qo(e), r = t[t.length - 1];
  M(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Vt(e, Qs(e));
}
function zC(e = !1) {
  const t = O();
  if (!N(t))
    return !1;
  if (!t.isCollapsed())
    return KC(t.anchor, t.focus);
  const r = Qa(t.anchor);
  if (!r)
    return !1;
  if (!e && DC(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Vt(n, r.getIndexWithinParent());
  } else
    FC(r);
  return !0;
}
function KC(e, t) {
  const r = Qa(e), n = Qa(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && td(e, r, i), n && td(t, n, !i), !0;
}
function td(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), Qs(t), "element");
}
function jC() {
  const [e] = ae(), t = Y(!1);
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
  }, [e]), z(() => e.registerCommand(xr, () => (zC(t.current) && zr(Kr), !1), pn), [e]), null;
}
function BC({ onChange: e }) {
  const [t] = ae();
  return z(() => t.registerCommand(xr, () => {
    const r = ph();
    return e?.(r), !1;
  }, At), [t, e]), null;
}
const VC = "psc-para-marker-selected", rd = "psc-para-marker-refused", nd = "data-para-marker-refused-intent", WC = /* @__PURE__ */ new Set(["Process", "Dead", "Unidentified"]);
function HC({ onParaMarkerMenuRequest: e }) {
  const [t] = ae(), r = Y(e);
  return z(() => {
    r.current = e;
  }, [e]), z(() => {
    let n, i;
    const s = () => {
      t.isEditable() && queueMicrotask(() => r.current?.());
    }, o = (p, m) => {
      i = p;
      const h = t.getRootElement();
      h?.classList.add(rd), h?.setAttribute(nd, m);
    }, a = () => {
      i = void 0;
      const p = t.getRootElement();
      p?.classList.remove(rd), p?.removeAttribute(nd);
    }, c = (p) => Dt(O()) ? (p instanceof Event && p.preventDefault(), !0) : !1, l = (p) => {
      if (!(p instanceof Event) || !(p.target instanceof Node))
        return !1;
      const m = Dt(O());
      if (!m)
        return !1;
      const h = En(p.target);
      return !h || h.getKey() !== m.getKey() ? !1 : (p.preventDefault(), !0);
    }, u = (p) => {
      const m = Dt(O()), h = m?.getParent();
      if (!m || !he(h))
        return !1;
      switch (p.key) {
        case "Enter":
          return p.preventDefault(), s(), !0;
        case "ArrowDown":
          return p.preventDefault(), p.altKey ? s() : sd(h, "next"), !0;
        case "ArrowUp":
          return p.preventDefault(), sd(h, "previous"), !0;
        case "ArrowLeft":
        case "ArrowRight": {
          p.preventDefault();
          const y = t.getRootElement(), k = y ? Ja(y) : "ltr";
          return Ya(k, p.key) ? pa(h, m) : QC(h), !0;
        }
        case "Backspace":
        case "Delete":
          return p.preventDefault(), t.isEditable() && o(m.getKey(), p.key === "Backspace" ? "deleteBackward" : "deleteForward"), !0;
        default:
          return ($h(p) || WC.has(p.key)) && pa(h, m), !1;
      }
    }, d = () => {
      const p = Dt(O()), m = p?.getParent();
      return !p || !he(m) ? !1 : (pa(m, p), !0);
    }, f = Ge(t.registerCommand(lr, u, rt), t.registerCommand(Ac, d, rt), t.registerCommand(Fr, c, rt), t.registerCommand(us, c, rt), t.registerCommand(sr, c, rt), t.registerCommand(mf, c, rt), t.registerCommand(fo, l, rt), t.registerCommand(uo, c, rt), t.registerUpdateListener(({ editorState: p }) => {
      const { glyphKey: m, ownerKey: h } = p.read(() => {
        const k = Dt(O());
        return { glyphKey: k?.getKey(), ownerKey: k?.getParent()?.getKey() };
      }), y = n !== h;
      y && fa(t, n, !1), n = h, fa(t, h, !0), i !== void 0 && i !== m && a(), h !== void 0 && JC(t.getRootElement()), y && h !== void 0 && GC(t, h);
    }));
    return () => {
      f(), fa(t, n, !1), a();
    };
  }, [t]), null;
}
function fa(e, t, r) {
  if (t === void 0)
    return;
  const n = e.getElementByKey(t);
  n && (n.classList.toggle(VC, r), r ? n.setAttribute("aria-selected", "true") : n.removeAttribute("aria-selected"));
}
function GC(e, t) {
  const r = e.getElementByKey(t);
  r && typeof r.scrollIntoView == "function" && r.scrollIntoView({ block: "nearest" });
}
function JC(e) {
  if (!e)
    return;
  const t = e.ownerDocument.defaultView?.getSelection();
  !t || t.rangeCount === 0 || t.anchorNode && e.contains(t.anchorNode) && t.removeAllRanges();
}
function id(e, t) {
  return t === "next" ? e.getNextSibling() : e.getPreviousSibling();
}
function YC(e, t) {
  for (let r = id(e, t); r; r = id(r, t)) {
    const n = ko(r);
    if (n)
      return n;
  }
}
function XC(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling())
    if (he(t))
      return t;
}
function sd(e, t) {
  const r = YC(e, t);
  r && ps(r);
}
function pa(e, t) {
  gi(e) || Vt(e, t.getIndexWithinParent() + 1);
}
function QC(e) {
  const t = XC(e);
  t && ZC(t);
}
function ZC(e) {
  const t = e.getLastDescendant();
  if (M(t) && !Pt(t)) {
    const n = t.getTextContentSize();
    t.select(n, n);
    return;
  }
  const r = e.getChildrenSize();
  e.select(r, r);
}
function eS() {
  const [e] = ae();
  return tS(e), null;
}
function tS(e) {
  z(() => {
    if (!e.hasNodes([Qe]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(Qe, (t) => rS(t, e));
  }, [e]);
}
function rS(e, t) {
  ah(t, e.getKey()) && oh(e.getFirstChild()), !(!ne(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = se(e.getKey());
    return ne(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Bh({ onStateChange: e }) {
  const [t] = ae(), [r, n] = fe(t), i = Y(!1), s = Y(!1), o = Y(void 0), a = Y(void 0), c = ye(() => {
    const l = O(), u = Dt(l)?.getParent();
    if (ne(u) && r.getElementByKey(u.getKey()) !== null) {
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
      let m = f.getKey() === "root" ? f : at(f, (v) => {
        const C = v.getParent();
        return C !== null && uy(C);
      });
      m === null && (m = f.getTopLevelElementOrThrow()), Zi(m) && (m = at(f, ne) ?? m);
      const h = m.getKey(), y = r.getElementByKey(h), k = rk(f, p);
      if (k && GT(k) && (d = k.getMarker()), y !== null && (ne(m) || St(m) || ds(m))) {
        o.current = m.getMarker(), a.current = d, e?.({
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
  return z(() => t.registerCommand(xr, (l, u) => (c(), n(u), !1), rt), [t, c]), z(() => Ge(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(dy, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), rt), r.registerCommand(fy, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), rt)), [c, r, e]), null;
}
function nS(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function Wr(e) {
  return e ? he(e) ? e : at(e, (r) => he(r)) ?? void 0 : void 0;
}
function Vh(e) {
  if (!N(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Wr(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function ml(e) {
  return N(e) && e.isCollapsed() && e.anchor.type === "element" || !N(e) && !Cc(e) ? !1 : e.getNodes().some((t) => ge(t));
}
function Wh(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Wr(r);
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
function Hh(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Wr(r);
  if (!n)
    return !1;
  if (I(r)) {
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
function od(e, t) {
  return !!Za(e, t);
}
function Za(e, t) {
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && I(n)) {
    const s = n.getChildren(), o = t === "backward" ? r.offset - 1 : r.offset;
    if (o < 0)
      return;
    const a = s[o];
    return ge(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return ge(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return ge(i) ? i : void 0;
}
function Zs(e, t) {
  if (!N(e))
    return !1;
  const r = Wr(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function ha(e) {
  return ml(e) || Vh(e);
}
function iS(e, t) {
  if (ml(e) || Vh(e))
    return !0;
  if (!N(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Wh(e) && Zs(e, "backward") || od(e, "backward");
    case "deleteForward":
      return Hh(e) && Zs(e, "forward") || od(e, "forward");
    case "insertText":
      return !1;
  }
}
function sS(e, t) {
  if (!(!N(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Za(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (Wh(e) && Zs(e, "backward")) {
        const n = Wr(e.anchor.getNode());
        if (he(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Za(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (Hh(e) && Zs(e, "forward")) {
        const i = Wr(e.anchor.getNode())?.getNextSibling();
        if (he(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function ad(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return Cc(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!N(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!N(e) || e.isCollapsed())
    return !1;
  const r = Wr(e.anchor.getNode()), n = Wr(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function Gh(e) {
  if (M(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else I(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function oS(e) {
  const t = e.getPreviousSibling();
  if (!he(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? Gh(r) : gi(t) || t.selectStart();
}
function Jh(e) {
  return ge(e) || He(e) ? [] : he(e) ? e.getChildren().flatMap(Jh) : [e];
}
function aS(e) {
  const t = [];
  for (const r of e) {
    const n = Jh(r);
    n.length !== 0 && (he(r) && t.length > 0 && t.push(me(" ")), t.push(...n));
  }
  return t;
}
function cd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function cS(e) {
  if (Array.isArray(e)) return e;
}
function lS(e, t) {
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
function uS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dS(e, t) {
  return cS(e) || lS(e, t) || fS(e, t) || uS();
}
function fS(e, t) {
  if (e) {
    if (typeof e == "string") return cd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? cd(e, t) : void 0;
  }
}
const Yh = Object.entries, ld = Object.setPrototypeOf, pS = Object.isFrozen, hS = Object.getPrototypeOf, gS = Object.getOwnPropertyDescriptor;
let it = Object.freeze, ct = Object.seal, Gn = Object.create, Xh = typeof Reflect < "u" && Reflect, ec = Xh.apply, tc = Xh.construct;
it || (it = function(t) {
  return t;
});
ct || (ct = function(t) {
  return t;
});
ec || (ec = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
tc || (tc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Vn = Je(Array.prototype.forEach), mS = Je(Array.prototype.lastIndexOf), ud = Je(Array.prototype.pop), Wn = Je(Array.prototype.push), yS = Je(Array.prototype.splice), Dr = Array.isArray, $i = Je(String.prototype.toLowerCase), ga = Je(String.prototype.toString), dd = Je(String.prototype.match), Pi = Je(String.prototype.replace), fd = Je(String.prototype.indexOf), bS = Je(String.prototype.trim), kS = Je(Number.prototype.toString), TS = Je(Boolean.prototype.toString), pd = typeof BigInt > "u" ? null : Je(BigInt.prototype.toString), hd = typeof Symbol > "u" ? null : Je(Symbol.prototype.toString), Xe = Je(Object.prototype.hasOwnProperty), Ni = Je(Object.prototype.toString), Ye = Je(RegExp.prototype.test), cn = xS(TypeError);
function Je(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return ec(e, t, n);
  };
}
function xS(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return tc(e, r);
  };
}
function pe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $i;
  if (ld && ld(e, null), !Dr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (pS(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function _S(e) {
  for (let t = 0; t < e.length; t++)
    Xe(e, t) || (e[t] = null);
  return e;
}
function lt(e) {
  const t = Gn(null);
  for (const n of Yh(e)) {
    var r = dS(n, 2);
    const i = r[0], s = r[1];
    Xe(e, i) && (Dr(s) ? t[i] = _S(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = lt(s) : t[i] = s);
  }
  return t;
}
function CS(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return kS(e);
    case "boolean":
      return TS(e);
    case "bigint":
      return pd ? pd(e) : "0";
    case "symbol":
      return hd ? hd(e) : "Symbol()";
    case "undefined":
      return Ni(e);
    case "function":
    case "object": {
      if (e === null)
        return Ni(e);
      const t = e, r = Ht(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Ni(n);
      }
      return Ni(e);
    }
    default:
      return Ni(e);
  }
}
function Ht(e, t) {
  for (; e !== null; ) {
    const n = gS(e, t);
    if (n) {
      if (n.get)
        return Je(n.get);
      if (typeof n.value == "function")
        return Je(n.value);
    }
    e = hS(e);
  }
  function r() {
    return null;
  }
  return r;
}
function SS(e) {
  try {
    return Ye(e, ""), !0;
  } catch {
    return !1;
  }
}
const gd = it(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ma = it(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ya = it(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), vS = it(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ba = it(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), MS = it(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), md = it(["#text"]), yd = it(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ka = it(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), bd = it(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ms = it(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ES = ct(/{{[\w\W]*|^[\w\W]*}}/g), AS = ct(/<%[\w\W]*|^[\w\W]*%>/g), PS = ct(/\${[\w\W]*/g), NS = ct(/^data-[\-\w.\u00B7-\uFFFF]+$/), wS = ct(/^aria-[\-\w]+$/), kd = ct(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), OS = ct(/^(?:\w+script|data):/i), qS = ct(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), RS = ct(/^html$/i), $S = ct(/^[a-z][.\w]*(-[.\w]+)+$/i), Td = ct(/<[/\w!]/g), xd = ct(/<[/\w]/g), IS = ct(/<\/no(script|embed|frames)/i), LS = ct(/\/>/i), Et = {
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
}, DS = function() {
  return typeof window > "u" ? null : window;
}, US = function(t, r) {
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
}, _d = function() {
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
}, $r = function(t, r, n, i) {
  return Xe(t, r) && Dr(t[r]) ? pe(i.base ? lt(i.base) : {}, t[r], i.transform) : n;
};
function Qh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DS();
  const t = (L) => Qh(L);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Et.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = Ht(f, "cloneNode"), m = Ht(f, "remove"), h = Ht(f, "nextSibling"), y = Ht(f, "childNodes"), k = Ht(f, "parentNode"), v = Ht(f, "shadowRoot"), C = Ht(f, "attributes"), A = o && o.prototype ? Ht(o.prototype, "nodeType") : null, E = o && o.prototype ? Ht(o.prototype, "nodeName") : null, x = o && o.prototype ? Ht(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const L = r.createElement("template");
    L.content && L.content.ownerDocument && (r = L.content.ownerDocument);
  }
  let F, D = "", H, J = !1, Q = 0;
  const le = function() {
    if (Q > 0)
      throw cn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, te = function(g) {
    le(), Q++;
    try {
      return F.createHTML(g);
    } finally {
      Q--;
    }
  }, Ce = function(g) {
    le(), Q++;
    try {
      return F.createScriptURL(g);
    } finally {
      Q--;
    }
  }, Ee = function() {
    return J || (H = US(d, i), J = !0), H;
  }, Z = r, U = Z.implementation, ee = Z.createNodeIterator, Ae = Z.createDocumentFragment, Ze = Z.getElementsByTagName, et = n.importNode;
  let ue = _d();
  t.isSupported = typeof Yh == "function" && typeof k == "function" && U && U.createHTMLDocument !== void 0;
  const tt = ES, Or = AS, bi = PS, de = NS, ft = wS, Do = OS, Rn = qS, Qr = $S;
  let Ve = kd, ce = null;
  const mt = pe({}, [...gd, ...ma, ...ya, ...ba, ...md]);
  let xe = null;
  const hr = pe({}, [...yd, ...ka, ...bd, ...Ms]);
  let Pe = Object.seal(Gn(null, {
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
  })), gr = null, ki = null;
  const yt = Object.seal(Gn(null, {
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
  let ys = !0, mr = !0, $n = !1, Ti = !0, er = !1, Wt = !0, w = !1, K = !1, V = null, G = null, ve = !1, Ue = !1, Mt = !1, Zr = !1, xi = !0, Dl = !1;
  const Ul = "user-content-";
  let Uo = !0, bs = !1, In = {}, tr = null;
  const Fo = pe({}, [
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
  let Fl = null;
  const zl = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let zo = null;
  const Kl = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ks = "http://www.w3.org/1998/Math/MathML", Ts = "http://www.w3.org/2000/svg", rr = "http://www.w3.org/1999/xhtml";
  let Ln = rr, Ko = !1, jo = null;
  const Mm = pe({}, [ks, Ts, rr], ga), jl = it(["mi", "mo", "mn", "ms", "mtext"]);
  let Bo = pe({}, jl);
  const Bl = it(["annotation-xml"]);
  let Vo = pe({}, Bl);
  const Em = pe({}, ["title", "style", "font", "a", "script"]);
  let _i = null;
  const Am = ["application/xhtml+xml", "text/html"], Pm = "text/html";
  let Oe = null, Dn = null;
  const Nm = r.createElement("form"), Vl = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, Wo = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Dn && Dn === g)
      return;
    (!g || typeof g != "object") && (g = {}), g = lt(g), _i = // eslint-disable-next-line unicorn/prefer-includes
    Am.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? Pm : g.PARSER_MEDIA_TYPE, Oe = _i === "application/xhtml+xml" ? ga : $i, ce = $r(g, "ALLOWED_TAGS", mt, {
      transform: Oe
    }), xe = $r(g, "ALLOWED_ATTR", hr, {
      transform: Oe
    }), jo = $r(g, "ALLOWED_NAMESPACES", Mm, {
      transform: ga
    }), zo = $r(g, "ADD_URI_SAFE_ATTR", Kl, {
      transform: Oe,
      base: Kl
    }), Fl = $r(g, "ADD_DATA_URI_TAGS", zl, {
      transform: Oe,
      base: zl
    }), tr = $r(g, "FORBID_CONTENTS", Fo, {
      transform: Oe
    }), gr = $r(g, "FORBID_TAGS", lt({}), {
      transform: Oe
    }), ki = $r(g, "FORBID_ATTR", lt({}), {
      transform: Oe
    }), In = Xe(g, "USE_PROFILES") ? g.USE_PROFILES && typeof g.USE_PROFILES == "object" ? lt(g.USE_PROFILES) : g.USE_PROFILES : !1, ys = g.ALLOW_ARIA_ATTR !== !1, mr = g.ALLOW_DATA_ATTR !== !1, $n = g.ALLOW_UNKNOWN_PROTOCOLS || !1, Ti = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, er = g.SAFE_FOR_TEMPLATES || !1, Wt = g.SAFE_FOR_XML !== !1, w = g.WHOLE_DOCUMENT || !1, Ue = g.RETURN_DOM || !1, Mt = g.RETURN_DOM_FRAGMENT || !1, Zr = g.RETURN_TRUSTED_TYPE || !1, ve = g.FORCE_BODY || !1, xi = g.SANITIZE_DOM !== !1, Dl = g.SANITIZE_NAMED_PROPS || !1, Uo = g.KEEP_CONTENT !== !1, bs = g.IN_PLACE || !1, Ve = SS(g.ALLOWED_URI_REGEXP) ? g.ALLOWED_URI_REGEXP : kd, Ln = typeof g.NAMESPACE == "string" ? g.NAMESPACE : rr, Bo = Xe(g, "MATHML_TEXT_INTEGRATION_POINTS") && g.MATHML_TEXT_INTEGRATION_POINTS && typeof g.MATHML_TEXT_INTEGRATION_POINTS == "object" ? lt(g.MATHML_TEXT_INTEGRATION_POINTS) : pe({}, jl), Vo = Xe(g, "HTML_INTEGRATION_POINTS") && g.HTML_INTEGRATION_POINTS && typeof g.HTML_INTEGRATION_POINTS == "object" ? lt(g.HTML_INTEGRATION_POINTS) : pe({}, Bl);
    const _ = Xe(g, "CUSTOM_ELEMENT_HANDLING") && g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING == "object" ? lt(g.CUSTOM_ELEMENT_HANDLING) : Gn(null);
    if (Pe = Gn(null), Xe(_, "tagNameCheck") && Vl(_.tagNameCheck) && (Pe.tagNameCheck = _.tagNameCheck), Xe(_, "attributeNameCheck") && Vl(_.attributeNameCheck) && (Pe.attributeNameCheck = _.attributeNameCheck), Xe(_, "allowCustomizedBuiltInElements") && typeof _.allowCustomizedBuiltInElements == "boolean" && (Pe.allowCustomizedBuiltInElements = _.allowCustomizedBuiltInElements), ct(Pe), er && (mr = !1), Mt && (Ue = !0), In && (ce = pe({}, md), xe = Gn(null), In.html === !0 && (pe(ce, gd), pe(xe, yd)), In.svg === !0 && (pe(ce, ma), pe(xe, ka), pe(xe, Ms)), In.svgFilters === !0 && (pe(ce, ya), pe(xe, ka), pe(xe, Ms)), In.mathMl === !0 && (pe(ce, ba), pe(xe, bd), pe(xe, Ms))), yt.tagCheck = null, yt.attributeCheck = null, Xe(g, "ADD_TAGS") && (typeof g.ADD_TAGS == "function" ? yt.tagCheck = g.ADD_TAGS : Dr(g.ADD_TAGS) && (ce === mt && (ce = lt(ce)), pe(ce, g.ADD_TAGS, Oe))), Xe(g, "ADD_ATTR") && (typeof g.ADD_ATTR == "function" ? yt.attributeCheck = g.ADD_ATTR : Dr(g.ADD_ATTR) && (xe === hr && (xe = lt(xe)), pe(xe, g.ADD_ATTR, Oe))), Xe(g, "ADD_URI_SAFE_ATTR") && Dr(g.ADD_URI_SAFE_ATTR) && pe(zo, g.ADD_URI_SAFE_ATTR, Oe), Xe(g, "FORBID_CONTENTS") && Dr(g.FORBID_CONTENTS) && (tr === Fo && (tr = lt(tr)), pe(tr, g.FORBID_CONTENTS, Oe)), Xe(g, "ADD_FORBID_CONTENTS") && Dr(g.ADD_FORBID_CONTENTS) && (tr === Fo && (tr = lt(tr)), pe(tr, g.ADD_FORBID_CONTENTS, Oe)), Uo && (ce["#text"] = !0), w && pe(ce, ["html", "head", "body"]), ce.table && (pe(ce, ["tbody"]), delete gr.tbody), g.TRUSTED_TYPES_POLICY) {
      if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw cn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw cn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const R = F;
      F = g.TRUSTED_TYPES_POLICY;
      try {
        D = te("");
      } catch (B) {
        throw F = R, B;
      }
    } else g.TRUSTED_TYPES_POLICY === null ? (F = void 0, D = "") : (F === void 0 && (F = Ee()), F && typeof D == "string" && (D = te("")));
    it && it(g), Dn = g;
  }, Wl = pe({}, [...ma, ...ya, ...vS]), Hl = pe({}, [...ba, ...MS]), wm = function(g, _, R) {
    return _.namespaceURI === rr ? g === "svg" : _.namespaceURI === ks ? g === "svg" && (R === "annotation-xml" || Bo[R]) : !!Wl[g];
  }, Om = function(g, _, R) {
    return _.namespaceURI === rr ? g === "math" : _.namespaceURI === Ts ? g === "math" && Vo[R] : !!Hl[g];
  }, qm = function(g, _, R) {
    return _.namespaceURI === Ts && !Vo[R] || _.namespaceURI === ks && !Bo[R] ? !1 : !Hl[g] && (Em[g] || !Wl[g]);
  }, Rm = function(g) {
    let _ = k(g);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: Ln,
      tagName: "template"
    });
    const R = $i(g.tagName), B = $i(_.tagName);
    return jo[g.namespaceURI] ? g.namespaceURI === Ts ? wm(R, _, B) : g.namespaceURI === ks ? Om(R, _, B) : g.namespaceURI === rr ? qm(R, _, B) : !!(_i === "application/xhtml+xml" && jo[g.namespaceURI]) : !1;
  }, qr = function(g) {
    Wn(t.removed, {
      element: g
    });
    try {
      k(g).removeChild(g);
    } catch {
      if (m(g), !k(g))
        throw cn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, xs = function(g) {
    Ci(g);
    const _ = y(g);
    if (_) {
      const B = [];
      Vn(_, (W) => {
        Wn(B, W);
      }), Vn(B, (W) => {
        try {
          m(W);
        } catch {
        }
      });
    }
    const R = C(g);
    if (R)
      for (let B = R.length - 1; B >= 0; --B) {
        const W = R[B], re = W && W.name;
        if (typeof re == "string")
          try {
            g.removeAttribute(re);
          } catch {
          }
      }
  }, en = function(g, _) {
    try {
      Wn(t.removed, {
        attribute: _.getAttributeNode(g),
        from: _
      });
    } catch {
      Wn(t.removed, {
        attribute: null,
        from: _
      });
    }
    if (_.removeAttribute(g), g === "is")
      if (Ue || Mt)
        try {
          qr(_);
        } catch {
        }
      else
        try {
          _.setAttribute(g, "");
        } catch {
        }
  }, $m = function(g) {
    const _ = C(g);
    if (_)
      for (let R = _.length - 1; R >= 0; --R) {
        const B = _[R], W = B && B.name;
        if (!(typeof W != "string" || xe[Oe(W)]))
          try {
            g.removeAttribute(W);
          } catch {
          }
      }
  }, Ci = function(g) {
    const _ = [g];
    for (; _.length > 0; ) {
      const R = _.pop();
      (A ? A(R) : R.nodeType) === Et.element && $m(R);
      const W = y(R);
      if (W)
        for (let re = W.length - 1; re >= 0; --re)
          _.push(W[re]);
    }
  }, Im = function(g) {
    if (!Wt)
      return;
    const _ = [g];
    for (; _.length > 0; ) {
      const R = _.pop(), B = A ? A(R) : R.nodeType;
      if (B === Et.processingInstruction || B === Et.comment && Ye(xd, R.data)) {
        try {
          m(R);
        } catch {
        }
        continue;
      }
      if (B === Et.element) {
        const re = R, ke = Oe(E ? E(R) : R.nodeName);
        try {
          re.hasAttribute && re.hasAttribute("patchsrc") && re.removeAttribute("patchsrc"), re.hasAttribute && re.hasAttribute("for") && ke !== "label" && ke !== "output" && re.removeAttribute("for");
        } catch {
        }
      }
      const W = y(R);
      if (W)
        for (let re = W.length - 1; re >= 0; --re)
          _.push(W[re]);
    }
  }, Gl = function(g) {
    let _ = null, R = null;
    if (ve)
      g = "<remove></remove>" + g;
    else {
      const re = dd(g, /^[\r\n\t ]+/);
      R = re && re[0];
    }
    _i === "application/xhtml+xml" && Ln === rr && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const B = F ? te(g) : g;
    if (Ln === rr)
      try {
        _ = new u().parseFromString(B, _i);
      } catch {
      }
    if (!_ || !_.documentElement) {
      _ = U.createDocument(Ln, "template", null);
      try {
        _.documentElement.innerHTML = Ko ? D : B;
      } catch {
      }
    }
    const W = _.body || _.documentElement;
    return g && R && W.insertBefore(r.createTextNode(R), W.childNodes[0] || null), Ln === rr ? Ze.call(_, w ? "html" : "body")[0] : w ? _.documentElement : W;
  }, Jl = function(g) {
    const _ = x ? x(g) : g.ownerDocument;
    return ee.call(
      _ || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, _s = function(g) {
    return g = Pi(g, tt, " "), g = Pi(g, Or, " "), g = Pi(g, bi, " "), g;
  }, Ho = function(g) {
    var _;
    g.normalize();
    const R = x ? x(g) : g.ownerDocument, B = ee.call(
      R || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let W = B.nextNode();
    for (; W; )
      W.data = _s(W.data), W = B.nextNode();
    const re = (_ = g.querySelectorAll) === null || _ === void 0 ? void 0 : _.call(g, "template");
    re && Vn(re, (ke) => {
      Un(ke.content) && Ho(ke.content);
    });
  }, Cs = function(g) {
    const _ = E ? E(g) : null;
    return typeof _ != "string" || Oe(_) !== "form" ? !1 : typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    g.attributes !== C(g) || typeof g.removeAttribute != "function" || typeof g.setAttribute != "function" || typeof g.namespaceURI != "string" || typeof g.insertBefore != "function" || typeof g.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    g.nodeType !== A(g) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    g.childNodes !== y(g);
  }, Un = function(g) {
    if (!A || typeof g != "object" || g === null)
      return !1;
    try {
      return A(g) === Et.documentFragment;
    } catch {
      return !1;
    }
  }, Si = function(g) {
    if (!A || typeof g != "object" || g === null)
      return !1;
    try {
      return typeof A(g) == "number";
    } catch {
      return !1;
    }
  };
  function nr(L, g, _) {
    L.length !== 0 && Vn(L, (R) => {
      R.call(t, g, _, Dn);
    });
  }
  const Lm = function(g, _) {
    return !!(Wt && g.hasChildNodes() && !Si(g.firstElementChild) && Ye(Td, g.textContent) && Ye(Td, g.innerHTML) || Wt && g.namespaceURI === rr && _ === "style" && Si(g.firstElementChild) || g.nodeType === Et.processingInstruction || Wt && g.nodeType === Et.comment && Ye(xd, g.data));
  }, Dm = function(g, _, R) {
    if (!gr[_] && Zl(_) && (Pe.tagNameCheck instanceof RegExp && Ye(Pe.tagNameCheck, _) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(_)))
      return !1;
    if (Uo && !tr[_]) {
      const B = k(g), W = y(g);
      if (W && B) {
        const re = W.length;
        for (let ke = re - 1; ke >= 0; --ke) {
          const qe = g === R ? p(W[ke], !0) : W[ke];
          B.insertBefore(qe, h(g));
        }
      }
    }
    return qr(g), !0;
  }, Yl = function(g, _, R, B) {
    return g.length === 0 ? _ : _ === R || _ === B ? lt(_) : _;
  }, Xl = function(g, _) {
    if (nr(ue.beforeSanitizeElements, g, null), g !== _ && k(g) === null)
      return bs && Ci(g), !0;
    if (Cs(g))
      return qr(g), !0;
    const R = Oe(E ? E(g) : g.nodeName);
    if (ce = Yl(ue.uponSanitizeElement, ce, mt, V), nr(ue.uponSanitizeElement, g, {
      tagName: R,
      allowedTags: ce
    }), g !== _ && k(g) === null)
      return bs && Ci(g), !0;
    if (Lm(g, R))
      return qr(g), !0;
    if (gr[R] || !(yt.tagCheck instanceof Function && yt.tagCheck(R)) && !ce[R]) {
      const W = Dm(g, R, _);
      return W === !1 && nr(ue.afterSanitizeElements, g, null), W;
    }
    if ((A ? A(g) : g.nodeType) === Et.element && !Rm(g) || (R === "noscript" || R === "noembed" || R === "noframes") && Ye(IS, g.innerHTML))
      return qr(g), !0;
    if (er && g.nodeType === Et.text) {
      const W = _s(g.textContent);
      g.textContent !== W && (Wn(t.removed, {
        element: g.cloneNode()
      }), g.textContent = W);
    }
    return nr(ue.afterSanitizeElements, g, null), !1;
  }, Ql = function(g, _, R) {
    if (ki[_] || Wt && _ === "patchsrc" || Wt && _ === "for" && g !== "label" && g !== "output" || xi && (_ === "id" || _ === "name") && (R in r || R in Nm))
      return !1;
    const B = xe[_] || yt.attributeCheck instanceof Function && yt.attributeCheck(_, g);
    if (!(mr && Ye(de, _))) {
      if (!(ys && Ye(ft, _))) {
        if (B) {
          if (!zo[_]) {
            if (!Ye(Ve, Pi(R, Rn, ""))) {
              if (!((_ === "src" || _ === "xlink:href" || _ === "href") && g !== "script" && fd(R, "data:") === 0 && Fl[g])) {
                if (!($n && !Ye(Do, Pi(R, Rn, "")))) {
                  if (R)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Zl(g) && (Pe.tagNameCheck instanceof RegExp && Ye(Pe.tagNameCheck, g) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(g)) && (Pe.attributeNameCheck instanceof RegExp && Ye(Pe.attributeNameCheck, _) || Pe.attributeNameCheck instanceof Function && Pe.attributeNameCheck(_, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          _ === "is" && Pe.allowCustomizedBuiltInElements && (Pe.tagNameCheck instanceof RegExp && Ye(Pe.tagNameCheck, R) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(R)))
        ) return !1;
      }
    }
    return !0;
  }, Um = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Zl = function(g) {
    return !Um[$i(g)] && Ye(Qr, g);
  }, Fm = function(g, _, R, B) {
    if (F && typeof d == "object" && typeof d.getAttributeType == "function" && !R)
      switch (d.getAttributeType(g, _)) {
        case "TrustedHTML":
          return te(B);
        case "TrustedScriptURL":
          return Ce(B);
      }
    return B;
  }, zm = function(g, _, R, B) {
    try {
      R ? g.setAttributeNS(R, _, B) : g.setAttribute(_, B), Cs(g) ? qr(g) : ud(t.removed);
    } catch {
      en(_, g);
    }
  }, eu = function(g) {
    nr(ue.beforeSanitizeAttributes, g, null);
    const _ = g.attributes;
    if (!_ || Cs(g))
      return;
    xe = Yl(ue.uponSanitizeAttribute, xe, hr, G);
    const R = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: xe,
      forceKeepAttr: void 0
    };
    let B = _.length;
    const W = Oe(g.nodeName);
    for (; B--; ) {
      const re = _[B], ke = re.name, qe = re.namespaceURI, bt = re.value, kt = Oe(ke), Jo = bt;
      let pt = ke === "value" ? Jo : bS(Jo);
      if (R.attrName = kt, R.attrValue = pt, R.keepAttr = !0, R.forceKeepAttr = void 0, nr(ue.uponSanitizeAttribute, g, R), pt = R.attrValue, Dl && (kt === "id" || kt === "name") && fd(pt, Ul) !== 0 && (en(ke, g), pt = Ul + pt), Wt && Ye(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, pt)) {
        en(ke, g);
        continue;
      }
      if (kt === "attributename" && dd(pt, "href")) {
        en(ke, g);
        continue;
      }
      if (!R.forceKeepAttr) {
        if (!R.keepAttr) {
          en(ke, g);
          continue;
        }
        if (!Ti && Ye(LS, pt)) {
          en(ke, g);
          continue;
        }
        if (er && (pt = _s(pt)), !Ql(W, kt, pt)) {
          en(ke, g);
          continue;
        }
        pt = Fm(W, kt, qe, pt), pt !== Jo && zm(g, ke, qe, pt);
      }
    }
    nr(ue.afterSanitizeAttributes, g, null);
  }, Ss = function(g) {
    let _ = null;
    const R = Jl(g);
    for (nr(ue.beforeSanitizeShadowDOM, g, null); _ = R.nextNode(); )
      if (nr(ue.uponSanitizeShadowNode, _, null), Xl(_, g), eu(_), Un(_.content) && Ss(_.content), (A ? A(_) : _.nodeType) === Et.element) {
        const W = v(_);
        Un(W) && (Go(W), Ss(W));
      }
    nr(ue.afterSanitizeShadowDOM, g, null);
  }, Go = function(g) {
    const _ = [{
      node: g,
      shadow: null
    }];
    for (; _.length > 0; ) {
      const R = _.pop();
      if (R.shadow) {
        Ss(R.shadow);
        continue;
      }
      const B = R.node, re = (A ? A(B) : B.nodeType) === Et.element, ke = y(B);
      if (ke)
        for (let qe = ke.length - 1; qe >= 0; --qe)
          _.push({
            node: ke[qe],
            shadow: null
          });
      if (re) {
        const qe = E ? E(B) : null;
        if (typeof qe == "string" && Oe(qe) === "template") {
          const bt = B.content;
          Un(bt) && _.push({
            node: bt,
            shadow: null
          });
        }
      }
      if (re) {
        const qe = v(B);
        Un(qe) && _.push({
          node: null,
          shadow: qe
        }, {
          node: qe,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(L) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, R = null, B = null, W = null;
    if (Ko = !L, Ko && (L = "<!-->"), typeof L != "string" && !Si(L) && (L = CS(L), typeof L != "string"))
      throw cn("dirty is not a string, aborting");
    if (!t.isSupported)
      return L;
    K ? (ce = V, xe = G) : Wo(g), (ue.uponSanitizeElement.length > 0 || ue.uponSanitizeAttribute.length > 0) && (ce = lt(ce)), ue.uponSanitizeAttribute.length > 0 && (xe = lt(xe)), t.removed = [];
    const re = bs && typeof L != "string" && Si(L);
    if (re) {
      Im(L);
      const bt = E ? E(L) : L.nodeName;
      if (typeof bt == "string") {
        const kt = Oe(bt);
        if (!ce[kt] || gr[kt])
          throw xs(L), cn("root node is forbidden and cannot be sanitized in-place");
      }
      if (Cs(L))
        throw xs(L), cn("root node is clobbered and cannot be sanitized in-place");
      try {
        Go(L);
      } catch (kt) {
        throw xs(L), kt;
      }
    } else if (Si(L))
      _ = Gl("<!---->"), R = _.ownerDocument.importNode(L, !0), R.nodeType === Et.element && R.nodeName === "BODY" || R.nodeName === "HTML" ? _ = R : _.appendChild(R), Go(R);
    else {
      if (!Ue && !er && !w && // eslint-disable-next-line unicorn/prefer-includes
      L.indexOf("<") === -1)
        return F && Zr ? te(L) : L;
      if (_ = Gl(L), !_)
        return Ue ? null : Zr ? D : "";
    }
    _ && ve && qr(_.firstChild);
    const ke = re ? L : _;
    try {
      const bt = Jl(ke);
      for (; B = bt.nextNode(); )
        Xl(B, ke), eu(B), Un(B.content) && Ss(B.content);
    } catch (bt) {
      throw re && (xs(L), Vn(t.removed, (kt) => {
        kt.element && Ci(kt.element);
      })), bt;
    }
    if (re)
      return Vn(t.removed, (bt) => {
        bt.element && Ci(bt.element);
      }), er && Ho(L), L;
    if (Ue) {
      if (er && Ho(_), Mt)
        for (W = Ae.call(_.ownerDocument); _.firstChild; )
          W.appendChild(_.firstChild);
      else
        W = _;
      return (xe.shadowroot || xe.shadowrootmode) && (W = et.call(n, W, !0)), W;
    }
    let qe = w ? _.outerHTML : _.innerHTML;
    return w && ce["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && Ye(RS, _.ownerDocument.doctype.name) && (qe = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + qe), er && (qe = _s(qe)), F && Zr ? te(qe) : qe;
  }, t.setConfig = function() {
    let L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Wo(L), K = !0, V = ce, G = xe;
  }, t.clearConfig = function() {
    Dn = null, K = !1, V = null, G = null, F = H, D = "";
  }, t.isValidAttribute = function(L, g, _) {
    Dn || Wo({});
    const R = Oe(L), B = Oe(g);
    return Ql(R, B, _);
  }, t.addHook = function(L, g) {
    typeof g == "function" && Xe(ue, L) && Wn(ue[L], g);
  }, t.removeHook = function(L, g) {
    if (Xe(ue, L)) {
      if (g !== void 0) {
        const _ = mS(ue[L], g);
        return _ === -1 ? void 0 : yS(ue[L], _, 1)[0];
      }
      return ud(ue[L]);
    }
  }, t.removeHooks = function(L) {
    Xe(ue, L) && (ue[L] = []);
  }, t.removeAllHooks = function() {
    ue = _d();
  }, t;
}
var FS = Qh();
function zS({ structureProtectionMode: e = "off" }) {
  const [t] = ae(), r = Y(void 0), [n, i] = fe(void 0), s = ye((o) => {
    r.current = o, i(o);
  }, []);
  return z(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const m = nS(p);
      if (!m)
        return !1;
      const h = O();
      return e === "protected" ? h && iS(h, m) ? (p.preventDefault(), !0) : !1 : m !== "deleteBackward" && m !== "deleteForward" ? !1 : a(m, p);
    }, a = (p, m) => {
      const h = O(), y = r.current;
      if (y && h && ad(h, y)) {
        if (s(void 0), m.preventDefault(), p !== y.intent)
          return !0;
        const v = se(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (v) {
            const C = v.getParent(), A = v.getPreviousSibling(), E = v.getNextSibling();
            v.remove(), A ? Gh(A) : E && M(E) ? E.select(0, 0) : C?.selectStart();
          }
        } else y.kind === "selection" ? N(h) && h.removeText() : he(v) && oS(v);
        return !0;
      }
      if (!h)
        return !1;
      const k = sS(h, p);
      if (k) {
        if (k.kind === "verse") {
          const v = Sc();
          v.add(k.node.getKey()), Zn(v);
        } else {
          const v = vc();
          v.anchor.set(k.node.getKey(), 0, "element"), v.focus.set(k.node.getKey(), k.node.getChildrenSize(), "element"), Zn(v);
        }
        return s({ key: k.node.getKey(), kind: k.kind, intent: p }), m.preventDefault(), !0;
      }
      if (N(h) && !h.isCollapsed() && ml(h)) {
        const v = h.getNodes().filter(ge).map((E) => E.getKey()), { anchor: C, focus: A } = h;
        return s({
          kind: "selection",
          intent: p,
          key: v[0],
          anchor: { key: C.key, offset: C.offset, type: C.type },
          focus: { key: A.key, offset: A.offset, type: A.type }
        }), m.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const m = O();
      return !m || !ha(m) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, m) => {
      if (!p)
        return !1;
      const h = FS.sanitize(p), y = new DOMParser().parseFromString(h, "text/html"), k = aS(Oy(t, y)), v = O();
      return N(v) && v.insertNodes(k), m.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const m = O();
      return m && ha(m) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const m = O();
      return m && ha(m) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        ad(O(), p) || s(void 0);
      });
    };
    return Ge(t.registerCommand(lr, o, $e), t.registerCommand(Fr, c, $e), t.registerCommand(sr, u, $e), t.registerCommand(mf, c, $e), t.registerCommand(fo, d, $e), t.registerCommand(uo, c, $e), t.registerUpdateListener(f));
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
const Q1 = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function KS({ textDirection: e }) {
  const [t] = ae();
  return jS(t, e), null;
}
function jS(e, t) {
  z(() => (Cd(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Cd(e, t);
  })), [e, t]);
}
function Cd(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function BS() {
  const [e] = ae();
  return VS(e), null;
}
function VS(e) {
  z(() => {
    if (!e.hasNodes([be, vt, Se, ze, ht]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Ge(
      e.registerNodeTransform(ze, WS),
      e.registerNodeTransform(ze, (t) => HS(t, e)),
      e.registerNodeTransform(ht, Sd),
      e.registerNodeTransform(vt, Sd),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(ht, (t) => {
        Qi(yn("va"), t), Qi(yn("vp"), t);
      })
    );
  }, [e]);
}
function WS(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || j(r) || $(n) || $(r) || _e(n) || _e(r) || Ie(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  Ie(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  ie(e, oe) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Be(n))
    return;
  if (ge(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  ge(r) && el(e);
}
function HS(e, t) {
  const r = e.getParent();
  !Ie(r) || !e.isAttached() || ah(t, e.getKey()) && r.insertAfter(e);
}
function Sd(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; _e(t); )
    t = t.getLastChild();
  ($(t) || M(t) && _e(t.getParent())) && e.insertBefore(me(" "));
}
function yl(e) {
  if (!j(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !Dc(n)) ? void 0 : e;
}
function GS(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (I(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function JS() {
  const e = O();
  if (!(!N(e) || !e.isCollapsed()))
    return yl(GS(e.anchor));
}
function YS(e) {
  const t = O();
  let r;
  return N(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Zh(e.target)), r ? yl(at(r, j)) : void 0;
}
function Zh(e) {
  const t = py(e)?.anchorNode;
  if (Mc(t))
    return En(t) ?? void 0;
}
function XS(e) {
  if (O())
    return;
  const t = Zh(e);
  return t ? yl(at(t, j)) : void 0;
}
function QS() {
  const [e] = ae(), t = jh(JS);
  return z(() => {
    const r = (n) => {
      zr(Kr), t(n);
    };
    return Ge(e.registerCommand(xr, () => {
      const n = XS(e.getRootElement());
      return n && r(n), !1;
    }, pn), e.registerCommand(Bi, (n) => {
      const i = YS(n);
      return i && r(i), !1;
    }, pn));
  }, [e, t]), null;
}
function ZS({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = a_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return S(o_, { trigger: e, items: i });
}
function ev({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = Fe(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? S(nv, { trigger: e, harness: i }) : S(ZS, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const tv = [" ", "*"];
function rv(e, t) {
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
function nv({ trigger: e, harness: t }) {
  const [r] = ae(), [n, i] = fe(void 0), s = Y({ query: "", options: [] }), o = Y(0), a = ye((f, p, m) => {
    const h = p.find((y) => y.kind === "note" && y.marker === f);
    if (h) {
      t.apply(h, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = O();
      N(y) && y.insertText(`${e}${f}${m ? " " : ""}`);
    });
  }, [r, t, e]);
  z(() => Ge(r.registerCommand(lr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const h = s.current.query;
        return h ? (a(h, n.items, !1), hy(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = O();
          N(y) && y.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const m = s.current.query;
      if (n.hasTextSelection) {
        const h = n.items.find((y) => y.marker === m);
        return h && t.apply(h, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
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
  }, $e), r.registerCommand(yf, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, Yn)), [r, e, t, n, a]);
  const c = ye(() => i(void 0), []), l = ye((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = ye((f) => {
    const { markerMenuItem: p, applyOpts: m } = f;
    t.apply(p, m);
  }, [t]), d = Fe(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    rv(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && S(bh, { isOpen: !0, children: ({ placement: f }) => S(
    xh,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? tv : void 0 },
    n.session
  ) });
}
function eg(e) {
  return e.replaceAll(q, "~").replace(/ {2,}/g, (r) => q.repeat(r.length));
}
function iv(e) {
  return e.replaceAll(q, " ").replaceAll("~", q);
}
function sv(e) {
  return e.replace(/ {2,}/g, " ");
}
let eo;
function ov(e) {
  e && (eo = e);
}
function tg(e) {
  return wo(e);
}
function av(e, t) {
  return e.isEmpty() ? ff : rg(e.toJSON(), t);
}
function rg(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && bo(r[0]) && (!r[0].children || r[0].children.length === 0))
    return ff;
  if (r.some(NT)) {
    eo?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = ng(r), i = Gt(n, t);
  return i ? { type: Tr, version: kr, content: i } : void 0;
}
function cv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), Me({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function lv(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Me({
    type: qt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function uv(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = gp(r, a, c), Me({
    type: qt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function dv(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = gp(t, o, a), Me({
    type: ht.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function fv(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !tg(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(q) && (t[0] = a.slice(1));
  }
  return Me({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function pv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Me({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function hv(e, t) {
  const { unknownAttributes: r } = e;
  return Me({ type: jp, ...r, content: t });
}
function gv(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Me({ type: Wp, marker: r, ...n, content: t });
}
function mv(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Me({
    type: Gp,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function yv(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return Me({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function Jn(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Me({
    type: t,
    marker: r === "" ? void 0 : r,
    ...vp({ sid: n, eid: i, ...s }, o)
  });
}
function bv(e) {
  return e.text;
}
function kv(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Me({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function Tv(e) {
  const { marker: t } = e;
  return {
    type: Bs,
    marker: t === "" ? void 0 : t
  };
}
function vd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function xv(e, t, r, n, i) {
  const s = Qt.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = Jn({
      type: s,
      marker: Xn,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = Jn({
      type: s,
      marker: hn,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = Jn({
      type: s,
      marker: hn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Jn({
      type: s,
      marker: Xn
    });
    i.push(l);
  }
  (!n || !Wf(n)) && t.forEach((l) => {
    const u = Jn({
      type: s,
      marker: Xn,
      eid: l
    });
    i.push(u);
  });
}
function Gt(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, p = a, m = a, h = a, y = a;
    switch (a.type) {
      case jt.getType():
        i.push(
          cv(
            l,
            Gt(l.children, t)
          )
        );
        break;
      case dr.getType():
        i.push(lv(a));
        break;
      case qt.getType():
        i.push(
          uv(
            u,
            Gt(u.children, t)
          )
        );
        break;
      case vt.getType():
      case ht.getType():
        i.push(dv(a));
        break;
      case be.getType():
        i.push(
          fv(
            d,
            Gt(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case Qe.getType():
        i.push(
          pv(
            f,
            Gt(f.children, t)
          )
        );
        break;
      case Nn.getType():
        i.push(
          hv(
            a,
            Gt(a.children, t)
          )
        );
        break;
      case ui.getType():
        i.push(
          gv(
            a,
            Gt(a.children, t)
          )
        );
        break;
      case di.getType():
        i.push(
          mv(
            a,
            Gt(a.children, t)
          )
        );
        break;
      case Se.getType():
        i.push(
          yv(
            p,
            Gt(p.children, t, p.caller)
          )
        );
        break;
      case Pr.getType():
      case Er.getType():
      case Xt.getType():
      case bf.getType():
      case fr.getType():
        break;
      case nt.getType():
        if (s = Gt(
          h.children,
          t,
          r,
          n
        ), s) {
          const k = h.typedIDs[Ur];
          if (k)
            xv(s, k, o, e[c + 1], i), o = k;
          else {
            const v = s.shift();
            v && (typeof v == "string" ? vd(i, v) : i.push(v)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Qt.getType():
        i.push(Jn(a));
        break;
      case ze.getType():
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !fs(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        m.text !== q && !m.text.startsWith(Nc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[cs]?.textType !== "attribute" && (!r || m.text !== wt(r))) {
          let k = bv(m);
          tg(t) && (n && k.startsWith(q) && (k = k.slice(1)), k = sv(iv(k))), vd(i, k);
        }
        break;
      case An.getType():
        i.push(
          kv(
            y,
            Gt(y.children, t)
          )
        );
        break;
      case wr.getType():
        i.push(Tv(a));
        break;
      case fi.getType():
        eo?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        eo?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function ng(e) {
  const t = e.findIndex((r) => bo(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = ng(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Ta = {
  initialize: ov,
  deserializeEditorState: av
}, _v = /^sd\d*$/, Cv = /* @__PURE__ */ new Set([
  ...Object.entries(wa).filter(
    ([e, t]) => t.category === T.TitlesHeadings && t.type === b.Paragraph && !_v.test(e)
  ).map(([e]) => e),
  "qa"
]);
function Sv(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Xf(i) || dp(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!tk(i)) {
      t && to(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Lc(i) && Cv.has(i.marker) && !to(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    ig(i.children, t).forEach((s) => {
      const o = vv(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = Mv(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function ig(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (sg(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Wf(i)) {
      const s = ig(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Md(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Md(i, c.nodes)] });
      });
      return;
    }
    t && to(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Md(e, t) {
  return { ...e, children: t };
}
function sg(e) {
  return ih(e) && e.number !== "";
}
function to(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => sg(r) || to(r)) : !1;
}
function vv(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function Mv(e) {
  return {
    type: Vs,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: th
  };
}
const Ed = ag([]), Ev = {
  type: bf.getType(),
  version: 1
};
let bl = [], X, _n, og, Ct;
function Av(e, t) {
  bl = [], wv(e), Ov(t);
}
function Pv(e = 0) {
}
function Nv(e, t) {
  X = t ?? No();
  let r;
  return e ? (e.type !== Tr && Ct?.warn(`This USJ type '${e.type}' didn't match the expected type '${Tr}'.`), e.version !== kr && Ct?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${kr}'.`
  ), e.content.length > 0 ? (r = sc(Ir(e.content)), ts(X) && (r = Sv(r, Ct))) : r = [Ed]) : r = [Ed], og?.(bl), {
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
function wv(e) {
  e && (_n = e), e?.addMissingComments && (og = e.addMissingComments);
}
function Ov(e) {
  e && (Ct = e);
}
function kl() {
  return wo(X);
}
function qv(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function Rv(e) {
  let { marker: t } = e;
  t !== Hi && Ct?.warn(`Unexpected book marker '${t}'!`), t = t ?? Hi;
  const { code: r } = e;
  (!r || !jt.isValidBookCode(r)) && Ct?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  X?.markerMode === "editable" || X?.markerMode === "visible" ? n.push(
    xt("marker", we(t) + " " + r + q)
  ) : X?.hasGutterParaMarkers && n.push(xt("marker", we(t) + q, !0));
  const i = qv(e.content);
  i && n.push(dt(kl() ? eg(i) : i));
  const s = Le(e, Rb);
  return Me({
    type: jt.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: Jf
  });
}
function $v(e) {
  let { marker: t } = e;
  t !== zs && Ct?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? zs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Le(e, $b);
  let a;
  X?.markerMode === "visible" && (a = !0);
  const c = [
    dt(Ft(t, r) ?? "")
  ];
  return X?.markerMode === "editable" && Qv(i, s, c), X?.markerMode === "editable" ? Me({
    type: qt.getType(),
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
    version: Qf
  }) : Me({
    type: dr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: np
  });
}
function Iv(e) {
  let { marker: t } = e;
  t !== Ks && Ct?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Ks;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (m_(X) ?? vt).getType(), c = X?.markerMode === "editable" ? cp : nh;
  let l, u;
  X?.markerMode === "editable" ? l = Ft(t, r) : X?.markerMode === "visible" && (u = !0);
  const d = Le(e, Gb);
  return Me({
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
function Lv(e, t = [], r = !1) {
  let { marker: n } = e;
  be.isValidMarker(n, _n?.extraValidMarkers) || Ct?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (X?.markerMode === "editable") {
    const [a] = t;
    ri(a) ? a.text = q + a.text : a && t.unshift(dt(q));
  }
  t.length === 0 && t.push(dt(zt)), rc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Le(e, Db);
  return s || Gv(n, o, i), s || nc(e.marker ?? "", i, !1, r), Me({
    type: be.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: rp
  });
}
function ag(e) {
  return {
    type: Br.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: op
  };
}
function Dv(e, t = []) {
  let { marker: r } = e;
  Qe.isValidMarker(r, _n?.extraValidMarkers) || Ct?.warn(`Unexpected para marker '${r}'!`), r = r ?? or;
  const n = [];
  if (pi(X) && (X?.markerMode === "editable" ? n.push(
    gt(r),
    dt(q, ur, "token")
  ) : (X?.markerMode === "visible" || X?.hasGutterParaMarkers) && n.push(
    xt(
      "marker",
      we(r) + q,
      X?.hasGutterParaMarkers
    )
  )), n.push(...t), kl()) {
    const s = n.find(
      (o) => !jc(o) && !(ri(o) && o.text === q)
    );
    ri(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => q.repeat(o.length)));
  }
  const i = Le(e, Wb);
  return Me({
    type: Qe.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: ap
  });
}
function Tl() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function Uv(e, t = []) {
  const r = Le(e, Qk);
  return Me({
    ...Tl(),
    type: Nn.getType(),
    unknownAttributes: r,
    children: t,
    version: Bp
  });
}
function Fv(e, t = []) {
  const r = Le(e, tT), n = e.marker ?? Fa, i = [];
  return X?.markerMode === "editable" ? i.push(
    gt(n),
    dt(q, ur, "token")
  ) : (X?.markerMode === "visible" || X?.hasGutterParaMarkers) && i.push(
    xt(
      "marker",
      we(n) + q,
      X?.hasGutterParaMarkers
    )
  ), i.push(...t), Me({
    ...Tl(),
    type: ui.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Hp
  });
}
function zv(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? za;
  X?.markerMode === "editable" ? s.push(
    gt(o),
    dt(q, ur, "token")
  ) : (X?.markerMode === "visible" || X?.hasGutterParaMarkers) && s.push(
    xt(
      "marker",
      we(o) + q,
      X?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const a = Le(
    e,
    nT
  );
  return Me({
    ...Tl(),
    type: di.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: a,
    children: s,
    version: Jp
  });
}
function Kv(e, t) {
  const r = ak(t);
  let n = () => {
  };
  return _n?.noteCallerOnClick && (n = _n.noteCallerOnClick), Me({
    type: Xt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: fh
  });
}
function jv(e, t) {
  let { marker: r } = e;
  Se.isValidMarker(r, _n?.extraValidMarkers) || Ct?.warn(`Unexpected note marker '${r}'!`), r = r ?? Oc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : al(X?.noteMode), a = Le(e, Xy), c = X?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  X?.markerMode === "editable" ? (l = gt(r, "opening", !1, c), s || (u = gt(r, "closing"))) : X?.markerMode === "visible" && (l = xt("marker", we(r) + " "), s || (u = xt("marker", ot(r))));
  const d = [];
  let f;
  if (l && d.push(l), X?.markerMode === "editable" && !o)
    f = dt(wt(i), void 0, c), d.push(f), Xv(n, d), d.push(...t);
  else {
    const p = dt(q, ur, "token");
    f = Kv(i, t), d.push(f, p, ...t.flatMap(Bv(p)));
  }
  return u && d.push(u), Me({
    type: Se.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: d,
    direction: null,
    format: "",
    indent: 0,
    version: Df
  });
}
function Bv(e) {
  return (t) => Bf(t) ? [t] : [t, e];
}
function Vv(e) {
  let { marker: t } = e;
  (!t || !Qt.isValidMarker(t, _n?.extraValidMarkers)) && Ct?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Le(e, wc), s = Mp(e);
  return Me({
    type: Qt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: $f
  });
}
function Ad(e, t = []) {
  return {
    type: nt.getType(),
    typedIDs: { [Ur]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function Wv(e, t) {
  const { marker: r } = e, n = e.type, i = Le(e, Nb), s = [];
  if (X?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = Lp(
      n,
      r,
      i
    );
    o && s.push(xt("marker", o)), a && s.push(xt("attribute", a)), s.push(...t), c && s.push(xt("attribute", c)), l && s.push(xt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    ri(o) && (o.mode = "token");
  }), Me({
    type: An.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: Gf
  });
}
function Hv(e) {
  return {
    type: wr.getType(),
    marker: e,
    text: Ui(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: X?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: zp
  };
}
function gt(e, t = "opening", r = !1, n = "normal") {
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
function dt(e, t = void 0, r = "normal") {
  const n = {
    type: ze.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[cs] = { textType: t }), n;
}
function xt(e, t, r = !1) {
  const n = {
    type: Er.getType(),
    text: t,
    textType: e,
    version: jf
  };
  return r && (n[cs] = { [Rc.key]: !0 }), n;
}
function rs(e, t) {
  return {
    type: Pr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Cp
  };
}
function rc(e, t, r = !1) {
  X?.markerMode === "editable" ? t.push(gt(e, "opening", r)) : X?.markerMode === "visible" && t.push(xt("marker", we(e, r)));
}
function nc(e, t, r = !1, n = !1) {
  X?.markerMode === "editable" ? r ? t.push(gt("", "selfClosing")) : t.push(gt(e, "closing", n)) : X?.markerMode === "visible" && t.push(
    xt(
      "marker",
      r ? ot("") : ot(e, n)
    )
  );
}
function Gv(e, t, r) {
  if (X?.markerMode !== "editable" || !t) return;
  const n = ir(t, ho(e));
  n && r.push(dt(n, "attribute"));
}
function Pd(e, t) {
  if (e.type !== "ms" || X?.markerMode !== "editable" && X?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Le(e, wc), o = Ep(
    n,
    i,
    s,
    Mp(e)
  ), a = ir(o, mo(r ?? ""));
  if (!a) return;
  const c = q + a;
  X?.markerMode === "editable" ? t.push(dt(c, "attribute")) : t.push(xt("attribute", c));
}
function Jv(e, t) {
  const r = e.marker ?? "";
  if (X?.markerMode === "editable") {
    const n = [];
    rc(r, n), Pd(e, n), nc(r, n, !0), t.push(rs("milestone", n));
  } else
    rc(r, t), Pd(e, t), nc(r, t, !0);
}
function Nd(e, t, r) {
  t !== void 0 && r.push(
    rs(e, [
      gt(e, "opening"),
      dt(q + t, "attribute"),
      gt(e, "closing")
    ])
  );
}
function Yv(e, t) {
  X?.markerMode === "editable" && (Nd("va", e.altnumber, t), Nd("vp", e.pubnumber, t));
}
function Xv(e, t) {
  e !== void 0 && t.push(
    rs("cat", [
      gt("cat", "opening"),
      dt(q + e, "attribute"),
      gt("cat", "closing")
    ])
  );
}
function Qv(e, t, r) {
  e !== void 0 && r.push(
    rs("ca", [
      gt("ca", "opening"),
      dt(q + e, "attribute"),
      gt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    rs("cp", [
      gt("cp", "opening"),
      dt(q + t, "attribute")
    ])
  );
}
function wd(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function Zv(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function Od(e, t) {
  t.marker === hn && t.sid !== void 0 && e.push(t.sid), t.marker === Xn && t.eid !== void 0 && Zv(e, t.eid);
}
function ic(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Ad(o, [...n])] : o, c = e[i];
  Od(n, c);
  const l = ic(
    e.slice(i + 1, s),
    wd(t, i + 1),
    c.marker === hn,
    n
  ), u = Ad(l, [...n]), d = e[s];
  Od(n, d);
  const f = ic(
    e.slice(s + 1),
    wd(t, s + 1),
    d.marker === hn,
    n
  );
  return [...a, u, ...f];
}
function Ir(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(dt(kl() ? eg(i) : i));
    else if (!i.type)
      Ct?.error("Marker type is missing!");
    else
      switch (i.type) {
        case jt.getType():
          n.push(Rv(i));
          break;
        case qt.getType():
          n.push($v(i));
          break;
        case ht.getType():
          X?.hasSpacing || n.push(Ev), n.push(Iv(i)), Yv(i, n);
          break;
        case be.getType():
          n.push(
            Lv(i, Ir(i.content, !0), t)
          );
          break;
        case Qe.getType():
          n.push(Dv(i, Ir(i.content)));
          break;
        case Se.getType():
          n.push(jv(i, Ir(i.content)));
          break;
        case Qt.getType():
          If(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && bl?.push(i.sid)), n.push(Vv(i)), Jv(i, n);
          break;
        case wr.getType():
          n.push(Hv(i.marker ?? ""));
          break;
        case jp:
          n.push(Uv(i, Ir(i.content)));
          break;
        case Wp:
          n.push(Fv(i, Ir(i.content)));
          break;
        case Gp:
          n.push(zv(i, Ir(i.content)));
          break;
        default:
          Ct?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(Wv(i, Ir(i.content)));
      }
  }), ic(n, r);
}
function sc(e) {
  const t = e.findIndex(
    (n) => Xf(n) || dp(n) || Lc(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    eT(n)
  );
  if (t >= 0) {
    const n = sc(e.slice(0, t)), i = e[t], s = sc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || ih(n)))
    return [ag(e)];
  return e;
}
const Hr = {
  initialize: Av,
  reset: Pv,
  serializeEditorState: Nv
};
function cg(e) {
  if (e && !P(e)) {
    if (M(e)) return e;
    if (I(e))
      for (const t of e.getChildren()) {
        const r = cg(t);
        if (r) return r;
      }
  }
}
function eM() {
  const e = O();
  if (!N(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((M(t) && !P(t) ? kn(t) : void 0) && M(t)) {
      const i = me(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      ni(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = cg(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(q) ? q : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return M(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of lg(e)) {
    if (!kn(t)) continue;
    ni(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(q) && r.setTextContent(n.slice(q.length));
  }
  return !0;
}
function lg(e) {
  const [t, r] = pf(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!M(a) || P(a) || ie(a, oe) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function tM() {
  const e = O();
  if (!N(e)) return !1;
  const t = e.focus.getNode();
  return kn(t) ? he(Jc(t)) : !1;
}
function ug() {
  let e = O();
  if (!N(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (P(t) && !Qc(t, e.anchor.offset)) {
    const c = t.getParent();
    if ($(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = O(), !N(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!M(t) || P(t) || !kn(t)) return !1;
  const r = Jc(t);
  if (!he(r)) return !1;
  const n = me(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  ni(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return $(a) ? Yc(a) : o.select(0, 0), !0;
}
const dg = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${fp(De().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = O(), t = Fc(e), r = rl(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = lk(0, o);
        const a = jT(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || kp(c) && zc(parseInt(n, 10), c);
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
function oc(e, t) {
  return Se.isValidMarker(e, t) || !!dg[e] || Qe.isValidMarker(e, t) || be.isValidMarker(e, t);
}
function rM(e, t) {
  return be.isNoteContentMarker(e) ? !1 : be.isValidMarker(e, t);
}
function fg(e, t, r, n, i, s) {
  const o = gh(
    e,
    void 0,
    void 0,
    t,
    n ?? No(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function ac(e, t, r, n, i, s, o) {
  if (Se.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = fg(
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
  const a = cM(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = O();
      N(u) && (eh(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = Ou(d, Hr, r), m = Xo(p);
      if (N(u)) {
        const h = u.anchor.getNode(), y = h.getParent(), k = kn(h), v = u.anchor.key === u.focus.key;
        if ($(m) && k && v && !xa(m, o))
          sM(
            u,
            m,
            h,
            r?.markerMode === "editable"
          );
        else if ($(m) && !v && !xa(m, o) && oM(u))
          aM(u, m, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          lM(
            u,
            () => Xo(p)
          );
        else if (I(m) && !m.isInline()) {
          const C = u.insertParagraph();
          if (C) {
            const A = C.getChildren();
            m.append(...A), C.replace(m), he(m) && gi(m) || m.selectStart();
          }
        } else if ($(m) && M(h) && !P(h) && $(h.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        xa(m, o)) {
          const C = h.getParent();
          if ($(C)) {
            const A = u.anchor.offset;
            if (A === 0) h.insertBefore(m);
            else if (A >= h.getTextContentSize()) h.insertAfter(m);
            else {
              const [x] = h.splitText(A);
              x.insertAfter(m);
            }
            m.getChildren().forEach((x) => {
              P(x) && x.setNested(!0);
            });
            const E = m.getChildren().find((x) => M(x) && !P(x));
            E && M(E) ? E.select(
              E.getTextContentSize(),
              E.getTextContentSize()
            ) : m.selectEnd();
          }
        } else if (M(h) && !P(h) && u.isCollapsed() && (j(y) || $(y) && j(y.getParent()))) {
          const C = $(y) ? y : void 0, A = C ? nM(h, u.anchor.offset) : [];
          let x = (C ?? h).insertAfter(m);
          if (Ar(m)) {
            const F = {
              ...r || No(),
              markerMode: "hidden"
            }, D = Ou(
              d,
              Hr,
              F
            ), H = Xo(D);
            x = x.insertAfter(H);
          }
          if (A.length > 0 && C) {
            const F = ro(C).append(...A);
            x.insertAfter(F), C.isEmpty() && C.remove();
          } else M(x.getNextSibling()) || x.insertAfter(me(q));
          I(x) && x.selectEnd();
        } else if (u.insertNodes([m]), kM(m), f) {
          const C = Sc();
          C.add(m.getKey()), Zn(C);
        } else if ($(m)) {
          const C = m.getChildren().find((A) => M(A) && !P(A));
          C && M(C) ? C.select(
            C.getTextContentSize(),
            C.getTextContentSize()
          ) : m.selectEnd();
        } else {
          const C = m.getNextSibling();
          C ? C.selectStart() : m.selectStart();
        }
      } else
        u?.insertNodes([m]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function nM(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function xa(e, t) {
  return ((t ?? Ws).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function iM(e, t) {
  t && e.getChildren().forEach((i) => {
    P(i) && i.setNested(!0);
  }), e.getChildren().some((i) => P(i) && i.getMarkerSyntax() === "closing") || e.append(ut(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function sM(e, t, r, n) {
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
    const [o, a] = oi(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (ni(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), M(i) && !i.getTextContent().startsWith(q) && i.setTextContent(q + i.getTextContent());
    const o = t.getChildren().find((a) => M(a) && !P(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => M(o) && !P(o));
  M(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function oM(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (P(n) || $(n)) continue;
    if (!M(n) || n.getType() !== ze.getType() || ie(n, oe) === "attribute") return !1;
    const i = Jc(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    kn(n) && (r = !0);
  }
  return r;
}
function aM(e, t, r) {
  const n = lg(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!kn(a)) return;
    ni(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(q) && c.setTextContent(l.slice(q.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(q) || i.setTextContent(q + i.getTextContent());
  const s = t.getChildren().find((a) => M(a) && !P(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function cM(e, t) {
  let r = dg[e];
  return r || (Qe.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: Qe.getType(), marker: e, content: [] }] })
  } : be.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: be.getType(), marker: e };
      return (be.isValidFootnoteMarker(e) || be.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function lM(e, t) {
  const r = e.getNodes(), [n, i] = oi(e);
  let s;
  r.forEach((o, a) => {
    if (I(s) && s.isParentOf(o))
      return;
    const c = pg(
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
    s || (s = t(), c.insertBefore(s), l = !0, $(s) && s.getChildren().some((d) => P(d) && d.getMarkerSyntax() === "opening") && iM(s, $(s.getParent()))), dM(c, s, l);
  }), (M(s) || I(s)) && s.selectEnd();
}
function oi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function xl(e) {
  return _e(e) || j(e) || j(e.getParent());
}
function pg(e, t, r, n, i) {
  if (!xl(e)) {
    if (M(e))
      return uM(e, t, r, n, i);
    if (I(e) && e.isInline())
      return e;
  }
}
function uM(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function dM(e, t, r) {
  if (M(t)) {
    const n = cc(e, t);
    t.setTextContent(n), e.remove();
  } else if (I(t)) {
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
    cc(e, t), r && $(t) && t.getChildren().some((s) => P(s)) && M(e) && !P(e) && !e.getTextContent().startsWith(q) && e.setTextContent(q + e.getTextContent());
  }
}
function cc(e, t) {
  let r = e.getTextContent();
  if (M(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    el(n), M(n) || t.insertBefore(me(" "));
  }
  return r;
}
function hg(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = Cn(u, t);
    if (!f) return !1;
    const p = M(u) ? u.getTextContentSize() : 0;
    if (qd(f, r), M(u) && u.isAttached()) {
      const m = u.getTextContentSize(), h = Math.max(p - m, 0), y = Math.max(0, Math.min(d - h, m)), k = O();
      N(k) && k.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = oi(e);
  if (!Cl(n, t, s, o)) return !1;
  const a = _l(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = Cn(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = bg(d, a);
    f && (qd(f, r), l = !0);
  }), kg(a, i), l;
}
function qd(e, t) {
  e.getChildren().forEach((n) => {
    Bt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === zt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    M(n) && i.startsWith(q) && n.setTextContent(i.slice(q.length));
  }), Aa(e);
}
function _l(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = pg(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    M(o) && n.push(o);
  }), n;
}
function Cn(e, t) {
  let r = e, n;
  for (; r && !he(r); ) {
    if (j(r)) return;
    !n && $(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function gg(e) {
  const t = at(
    e,
    (r) => j(r) || he(r)
  );
  return j(t);
}
function mg(e) {
  return e.filter(
    (t) => !xl(t) && (M(t) || I(t) && t.isInline())
  );
}
function fM(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!M(i) || xl(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function pM(e, t, r) {
  return e.getChildren().some(
    (n) => I(n) && t.some((i) => n.isParentOf(i)) && !yg(n, r)
  );
}
function Cl(e, t, r, n, i) {
  const s = mg(e), o = fM(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Cn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !pM(l, s, o);
  });
}
function yg(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Bt(r));
}
function bg(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (I(u) && t.some((d) => u.isParentOf(d))) {
      if (!yg(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Bt(n[s - 1]) && (s -= 1), o < n.length - 1 && Bt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(ro(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(ro(e).append(...c)), e;
}
function ro(e) {
  return gy(e);
}
function kg(e, t) {
  const r = O(), n = e[0], i = e[e.length - 1];
  if (!N(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function hM(e, t, r) {
  if (e.isCollapsed()) {
    const l = Cn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (yu(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = oi(e);
  if (!Cl(n, r, i, s, t)) return !1;
  const o = _l(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = Cn(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = bg(u, o);
    d && (yu(d, t), c = !0);
  }), c;
}
function gM(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = oi(e);
  if (!!!i?.some(
    (y) => Cl(s, y, o, a)
  ) && !mM(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const k = O();
    N(k) && hg(k, y, n) && (l = !0);
  });
  const u = O();
  if (!N(u)) return l;
  const d = u.isBackward(), [f, p] = oi(u), m = _l(
    u.getNodes(),
    f,
    p
  );
  if (m.length === 0) return l;
  const h = m.filter(
    (y) => !gg(y) && !Cn(y, t)
  );
  return h.length > 0 && (yM(h).forEach((y) => bM(y, t)), l = !0), kg(m, d), l;
}
function mM(e, t) {
  return mg(e).some(
    (r) => !gg(r) && !Cn(r, t)
  );
}
function yM(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function bM(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => $(a) && a.getMarker() === t
  ), s = i ? ro(i) : Cr(t);
  e[0].insertBefore(s), s.append(...e), i === r || cc(e[0], s);
}
function kM(e) {
  ge(e) && (el(e.getPreviousSibling()), oh(e.getNextSibling()));
}
const Tg = {
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
}, Rd = "psc-active-text", Es = "psc-empty-text";
function TM({ viewOptions: e }) {
  const [t] = ae(), r = Y(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return z(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(Rd), r.current = o, o && t.getElementByKey(o)?.classList.add(Rd);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        Bi,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Es}`);
          if (!c) return !1;
          const l = En(c);
          if (!ge(l)) return !1;
          const u = l.getParent();
          if (!I(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        At
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = _a(), f = xM(), p = [], m = [];
          return De().getChildren().forEach((h) => {
            if (!I(h)) return;
            const { emptyKeys: y, nonEmptyKeys: k } = CM(h);
            p.push(...y), m.push(...k);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: m };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(Es) : t.getElementByKey(d)?.classList.add(Es);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(Es));
      }),
      t.registerCommand(
        Ec,
        () => (i(void 0), !1),
        At
      ),
      t.registerCommand(
        my,
        () => {
          const o = t.getEditorState().read(_a);
          return o !== r.current && i(o), !1;
        },
        At
      )
    ];
    return i(t.getEditorState().read(_a)), Ge(...s);
  }, [t, n]), null;
}
function _a() {
  return _M(O() ?? void 0)?.getKey();
}
function xM() {
  const e = O(), t = Dt(e);
  if (t) {
    const c = t.getParent();
    if (!I(c)) return;
    let l;
    for (const u of c.getChildren())
      if (ge(u)) l = u.getKey();
      else if (!Kt(u) && !P(u)) break;
    return l;
  }
  if (!N(e)) return;
  const r = e.anchor, n = r.getNode(), i = n.getTopLevelElement();
  if (!I(i)) return;
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
    ge(o[c]) && (a = o[c].getKey());
  return a;
}
function _M(e) {
  const t = Dt(e ?? null);
  if (t) {
    const r = t.getTopLevelElement();
    return I(r) ? r : void 0;
  }
  if (N(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function CM(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ge(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ge(c)) break;
      if (!(Kt(c) || P(c)) && c.getTextContent().replaceAll(Is, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const SM = /^\+/;
function Sl(e, t) {
  const r = t.replace(SM, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function xg(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function _g(e, t) {
  return xg(e, t) !== void 0;
}
function lc(e, t) {
  const r = xg(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function no(e, t, r) {
  const n = I(e) ? e.getChildren().filter(P) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function vM(e, t, r, n, i) {
  const s = Sl(n, t);
  if (!s) {
    no(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && no(e, "invalid", i);
}
function zi(e, t, r, n, i) {
  for (const s of e.getChildren())
    if ($(s)) {
      const o = s.getMarker();
      i || vM(s, o, t, r, n), zi(s, t, r, n, i || o === "xq");
    } else if (ge(s)) {
      if (i) continue;
      const o = Sl(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else j(s) ? zi(s, s.getMarker(), r, n, i) : Ie(s) || I(s) && zi(s, t, r, n, i);
}
function MM(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Sl(e, a);
    if (!c) {
      no(o, "unknown", r), lc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    lc(n, l) || no(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of De().getChildren())
    Ie(o) || (St(o) || He(o) ? i(o, o.getMarker()) : ne(o) ? (i(o, o.getMarker()), s(o) && zi(o, o.getMarker(), e, r, !1)) : I(o) && s(o) && zi(o, "p", e, r, !1));
  return r;
}
function EM(e) {
  return !!e?.includes("(basic)");
}
function AM(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Cg(e, t) {
  return !e.startsWith("zpa") && e !== "c" && oc(e, t);
}
function vl(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Sg(e, t) {
  const r = [];
  for (const n of t) {
    const i = vl(e, n);
    i && lc(r, i);
  }
  return r;
}
function Os(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: AM(e.description),
    isBasic: EM(e.description)
  };
}
function PM(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function uc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : PM(e.marker, t.marker);
}
function dc(e, t, r) {
  if (t.noteMarker) return [];
  const n = Sg(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Cg(i.marker, r)
  ).filter((i) => {
    const s = vl(e, i.marker);
    return s !== void 0 && _g(n, s);
  }).map((i) => Os(i, "paragraph")).sort(uc);
}
function NM(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Cg(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Os(c, "character")).sort(uc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Os(c, "character")),
    ...a.map((c) => Os(c, "note"))
  ].sort(uc);
}
function wM(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function OM(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function qM(e, t, r) {
  return [
    ...wM(e, t.openCharMarkers),
    ...NM(e, t, r)
  ].sort(OM);
}
function RM(e, t, r) {
  if (t.source === "paragraph") return dc(e, t, r);
  const n = qM(e, t, r);
  return n.length > 0 ? n : dc(e, t, r);
}
function $M(e, t, r) {
  const n = dc(e, t, r), i = Sg(e, t.previousParaMarkers), s = vl(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && _g(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const On = String.raw`\w-`, vg = "a-z0-9", IM = `[a-z][${vg}]*`, LM = new RegExp(
  String.raw`^\\(\+?[${On}]+)[ \u00A0]$`
), Mg = new RegExp(String.raw`^\\(\+?[${On}]+)$`), DM = new RegExp(String.raw`^\\\+?[${On}]*\*$`), UM = new RegExp(
  String.raw`^\\(\+?[${On}]+)(?:[ \u00A0]|$)`
), FM = new RegExp(
  String.raw`^\\(\+?)([${On}]+)`
), zM = new RegExp(
  String.raw`\\\+?[${On}]+(?:\\?\*|[ \u00A0])`
), KM = new RegExp(
  String.raw`\\\+?[${On}]*$`
), jM = new RegExp(
  String.raw`^\\(${IM})( |$)`
), BM = new RegExp(
  String.raw`\\[${vg}+*]*$`,
  "i"
), st = "￼";
function Eg(e) {
  return e.length > 1 && e.startsWith(q) && e.charAt(1) !== st ? e.slice(1) : e;
}
function $d(e) {
  return jc(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Ag(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = Hr.serializeEditorState(
    {
      type: Tr,
      version: kr,
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
  for (; $d(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== wt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && $d(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function As(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function wi(e, t) {
  KM.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += st;
}
function Ut(e) {
  return e.replaceAll(q, " ");
}
function VM(e, t, r = !1) {
  if (wo(t)) return Ut(e);
  if (e === q) return " ";
  const n = r && e.startsWith(q), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(q, "~");
}
function Ki(e) {
  const t = e.getTextContent();
  return Pn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Ml(e, t) {
  const r = e[t];
  if (!je(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Co(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!P(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Pg(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function El(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = Gi(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function Al(e) {
  return !!e.getUnknownAttributes();
}
function Ro(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && po(e);
}
function Ng(e, t) {
  return je(e) ? !Ro(e.getMarker(), t) : j(e) || Ie(e) ? !0 : Ne(e) ? Al(e) : $(e) ? wg(e, t) : !1;
}
function wg(e, t) {
  if (Tk(e)) return !0;
  const r = e.getMarker();
  return !lb(r) && t(r) === void 0;
}
const It = "", Lt = "";
function Id(e) {
  return e.flatMap((t) => Be(t) ? t.getChildren() : [t]);
}
function Ii(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (je(s)) {
      const o = Ml(e, i);
      Ro(s.getMarker(), r) && Pg(o) ? (t.push(
        It,
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
      ), Ii(Id(o), t, r), t.push(Lt)) : t.push(st), i += o.length;
    } else if (Ne(s)) {
      const o = El(e, i);
      Al(s) ? t.push(st) : (t.push(
        It,
        "verse",
        Ut(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Ii(Id(o), t, r), t.push(Lt)), i += o.length;
    } else P(s) ? t.push(It, "marker", Ut(s.getTextContent()), Lt) : Yr(s) ? t.push(It, "unmatched", Ut(s.getTextContent()), Lt) : Ng(s, r) ? t.push(st) : lo(s) ? t.push(" ") : M(s) ? t.push(
      Ut(
        n ? Eg(Ki(s)) : Ki(s)
      )
    ) : $(s) ? (t.push(It, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Ii(s.getChildren(), t, r, !0), t.push(Lt)) : I(s) ? (t.push(It, s.getType()), Ii(s.getChildren(), t, r), t.push(Lt)) : t.push(st);
  }
}
function mi(e, t) {
  const r = [];
  return Ii(e, r, t), r.join("");
}
function vr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function ai(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Pl(e) {
  return e.type ?? "";
}
function Og(e, t, r) {
  return t === "closing" ? ot(e, r) : t === "selfClosing" ? ot("") : we(e, r);
}
function Ca(e, t) {
  const r = e[t];
  if (!(!r || Pl(r) !== "attribute-run"))
    return vr(r) ?? [];
}
function yi(e, t) {
  const r = [];
  return Li(e, r, t), r.join("");
}
function Li(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Pl(s);
    if (o === "ms") {
      const l = s, u = Ca(e, i + 1);
      u && Ro(l.marker ?? "", r) ? (t.push(
        It,
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
      ), Li(u, t, r), t.push(Lt), i += 1) : t.push(st);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(st);
        continue;
      }
      t.push(
        It,
        "verse",
        Ut(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = Ca(e, i + 1 + u);
      for (; d; )
        Li(d, t, r), u++, d = Ca(e, i + 1 + u);
      t.push(Lt), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        It,
        "marker",
        Ut(
          Og(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        Lt
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(It, "char", JSON.stringify(l.unknownAttributes ?? null)), Li(vr(s) ?? [], t, r, !0), t.push(Lt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(st);
      continue;
    }
    if (o === "unmatched") {
      t.push(It, "unmatched", Ut(ai(s) ?? "")), t.push(Lt);
      continue;
    }
    const a = ai(s);
    if (a !== void 0) {
      t.push(Ut(n ? Eg(a) : a));
      continue;
    }
    const c = vr(s);
    c ? (t.push(It, o), Li(c, t, r), t.push(Lt)) : t.push(st);
  }
}
function $o(e) {
  let t = 0;
  for (const r of e) {
    const n = vr(r);
    if (n) {
      t += $o(n);
      continue;
    }
    const i = ai(r);
    if (i !== void 0)
      for (const s of i) s === st && t++;
  }
  return t;
}
function ns(e, t, r, n, i) {
  Sn(e.getChildren(), t, r, n, i);
}
function Sn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (P(a))
      As(t, a, Ut(a.getTextContent()));
    else if (je(a)) {
      s();
      const c = Ml(e, o);
      Ro(a.getMarker(), r) && Pg(c) ? Sn(c, t, r, n) : wi(t, [a, ...c]), o += c.length;
    } else if (j(a) || Ie(a))
      s(), wi(t, [a]);
    else if (Ne(a)) {
      s();
      const c = El(e, o);
      Al(a) ? wi(t, [a, ...c]) : (As(t, a, Ut(Ki(a))), Sn(c, t, r, n)), o += c.length;
    } else if ($(a))
      s(), wg(a, r) ? wi(t, [a]) : ns(a, t, r, n, { pending: !0 });
    else if (lo(a))
      s(), As(t, a, " ");
    else if (M(a)) {
      const c = Pn(a) || ie(a, oe) === "attribute", l = s() && !c;
      As(
        t,
        a,
        c ? Ut(Ki(a)) : VM(Ki(a), n, l)
      );
    } else I(a) ? ns(a, t, r, n, i) : (s(), wi(t, [a]));
  }
}
function Nl(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Ie(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return ns(e, i, t, r), i;
}
function qg(e, t) {
  let r = 0;
  const n = (i) => {
    if (M(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(st);
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
    } else I(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function fc(e, t = []) {
  for (const r of e)
    Ne(r) ? t.push(r) : I(r) && fc(r.getChildren(), t);
  return t;
}
function Rg(e) {
  let t = 0;
  const r = (n) => {
    if (M(n))
      for (const i of n.getTextContent()) i === st && t++;
    else I(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function qn(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === st && t++;
    else r.content && (t += qn(r.content));
  return t;
}
function WM(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), I(i) && ns(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const is = /\s/;
function $g(e) {
  return e.filter(Io).length;
}
function Io(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return M(t) && !P(t) && ie(t, oe) === "attribute";
}
function HM(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return P(t) || Io(e);
}
function Ld(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Io(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      is.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function wl(e, t, r) {
  const n = Ld(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !HM(i) ? Ld(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: $g(e.spans) };
}
function Sa(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return P(t) && t.getMarkerSyntax() !== "opening";
}
function GM(e) {
  const t = se(e.key);
  if (!P(t)) return !1;
  const r = t.getParent();
  return $(r) ? (r.selectNext(0, 0), !0) : !1;
}
function JM(e) {
  const t = se(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = Ne(t) ? El(r, n) : je(t) ? Ml(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function Ig(e, t, r) {
  const { text: n, spans: i } = e, s = $g(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && !Sa(d);
    if (!(o && Io(d))) {
      if (u) {
        if (!p) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let m = 0; m < f; m++) {
        const h = n[d.start + m];
        if (c === 0 && (l === 0 || !is.test(h))) {
          if (p) {
            a = { key: d.key, offset: m };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? is.test(h) || c-- : l--;
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
    if (d && Sa(d) && GM(d) || d?.isSentinel && JM(d)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !Sa(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = se(a.key);
    if (d && M(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find(I)?.selectStart();
}
function Lg(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(I)?.selectStart();
      return;
    }
    Ig(WM(e, n, i), t, e);
  }
}
function YM(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(I)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  Sn(e, s, n, i), Ig({ text: s.text, spans: s.spans }, t, e);
}
function Dg(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  for (const h of e) {
    const y = Nl(h, n, r);
    if (!y)
      return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
    s.text.length > 0 && (s.text += " ");
    const k = s.text.length;
    y.spans.forEach(
      (v) => s.spans.push({ ...v, start: v.start + k, end: v.end + k })
    ), s.sentinels.push(...y.sentinels), s.text += y.text;
  }
  let o, a = !1;
  const c = O();
  if (N(c)) {
    for (let h = c.anchor.getNode(); h; h = h.getParent())
      if (e.some((y) => y.is(h))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = wl(s, c.anchor.key, c.anchor.offset));
  }
  const l = Mr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (qn(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = Hr.serializeEditorState(
    { type: Tr, version: kr, content: l },
    r
  );
  if (yi(u.root.children, n) === mi(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((h) => ao(h));
  if (Rg(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = fc(e).map((h) => ({
    number: h.getNumber(),
    sid: h.getSid()
  })), p = e[0];
  d.forEach((h) => p.insertBefore(h)), qg(d, s.sentinels), e.forEach((h) => h.remove());
  const m = fc(d);
  for (let h = 0; h < f.length && h < m.length; h++)
    m[h].getNumber() === f[h].number && m[h].setSid(f[h].sid);
  return Lg(d, o, a, n, r), !0;
}
function Ug(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Se.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!P(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(pr(s) || M(s) && s.getTextContent() === wt(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const u = n[a - 1];
    if (!P(u) || u.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return Sn(c, l, t, r), { out: l, contentNodes: c };
}
function Fg(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(st)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function XM(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Ug(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = O();
  if (N(u)) {
    for (let A = u.anchor.getNode(); A; A = A.getParent())
      if (e.is(A)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = wl(o, u.anchor.key, u.anchor.offset));
  }
  const d = Mr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (qn(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], m = Fg(p), h = Ag(e, p, m, r);
  if (h.failure !== void 0)
    return h.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      h.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if ($o(h.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const y = e.getCategory() !== m;
  if (y && e.setCategory(m), yi(h.children, n) === mi(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  const k = h.children.map((A) => ao(A));
  if (Rg(k) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), y;
  const v = a[0];
  if (v)
    k.forEach((A) => v.insertBefore(A));
  else {
    const A = e.getChildren().find((E) => P(E) && E.getMarkerSyntax() === "closing");
    k.forEach((E) => A ? A.insertBefore(E) : e.append(E));
  }
  qg(k, o.sentinels);
  const C = new Set(o.sentinels.flat().map((A) => A.getKey()));
  return a.forEach((A) => {
    C.has(A.getKey()) || A.remove();
  }), YM(k, c, l, n, r), !0;
}
const zg = /* @__PURE__ */ new Set(["ca", "cp"]), Ol = "cp";
function Kg(e) {
  if (!cr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (ns(e, t, ar, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Mr(r, { getMarker: ar }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Ol)
  );
}
function Lo(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if ($(r) && zg.has(r.getMarker()) || Kg(r)) {
      t.push(r);
      continue;
    }
    ne(r) && r.getMarker() === Ol && t.push(r);
    break;
  }
  return t;
}
function QM(e) {
  const t = (n) => $(n) && zg.has(n.getMarker()) || Kg(n);
  if (t(e) || ne(e) && e.getMarker() === Ol)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Re(n)) return n;
      if (!t(n)) return;
    }
}
function jg(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Lo(e);
  if (n.some((s) => ne(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Sn(e.getChildren(), i, t, r), Sn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function ZM(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Lo(e)], o = jg(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = O();
  if (N(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((h) => h.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = wl(o, l.anchor.key, l.anchor.offset));
  }
  const u = Mr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (qn(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = Hr.serializeEditorState(
    { type: Tr, version: kr, content: u },
    r
  );
  if (yi(f.root.children, n) === mi(s, n)) {
    let m = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), m = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), m = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const p = f.root.children.map((m) => ao(m));
  return Re(p[0]) ? (p.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), Lg(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function ss(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Ie(n)) return;
    !t && (j(n) || ne(n) || Re(n)) && (t = n), yy(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? QM(r) : void 0) ?? t;
}
function Jt(e, t) {
  const r = ss(e);
  return r ? j(r) ? XM(r, t) : Re(r) ? ZM(r, t) : Dg([r], t) : !1;
}
const eE = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Dd(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !eE.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function qs(e, t) {
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
          t.push(`\\${n}`), Dd(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), qs(r.content, t), Dd(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), qs(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), qs(r.content, t);
      }
    }
}
function Ud(e, t, r) {
  const n = ss(e);
  if (!ne(n)) return !1;
  const i = O();
  if (!N(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Nl(n, t, r);
  if (!o) return !1;
  const a = Mr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    is.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  qs(a, l);
  for (const u of l.join("").replaceAll(q, "~")) {
    if (is.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function tE(e) {
  return [ut(e), To()];
}
function ql(e) {
  Vt(e, 2);
}
function rE(e) {
  const t = O();
  if (!N(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Rl(e) {
  const t = rE(e);
  e.splice(0, 0, tE(e.getMarker())), t && ql(e);
}
function io(e, t) {
  e.setMarker(t), Rl(e), ql(e);
}
function nE(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Pn(n)) {
    if (M(n) && !P(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(q), Tt(n, oe, ur), n.setMode("token");
      return;
    }
    if (xp(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(To());
  }
}
function Fd(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : I(n) ? n.getChildrenSize() : 0;
  if (r === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = n; !s.is(t); ) {
    if (r === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function ji(e) {
  for (let t = e; t; t = t.getParent())
    if (ne(t)) return t;
}
function iE(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = ji(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = ji(r.getNode())?.is(s) ?? !1, a = ji(n.getNode())?.is(s) ?? !1;
    return !(o && !Fd(r, s, "start") || a && !Fd(n, s, "end"));
  });
}
function pc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = O();
  if (!(!N(r) || r.isCollapsed()))
    for (const n of iE(r)) t.add(n.getKey());
}
function sE(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = O();
  if (!N(r) || !r.isCollapsed()) return;
  const n = ji(r.focus.getNode());
  n && t.add(n.getKey());
}
function oE(e) {
  const t = O();
  !N(t) || t.isCollapsed() || t.getNodes().some((r) => P(r)) && (pc(e), t.removeText());
}
function aE(e, t) {
  if (!pi(t.viewOptions)) return;
  if (Bt(e.getFirstChild())) {
    nE(e, t);
    return;
  }
  if (t.splitExpected.current) {
    Rl(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ne(o) && !o.is(e))) {
      io(e, or), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (ne(r)) {
    const n = e.getChildren().filter((a) => !Pn(a)), i = O();
    let s = !1;
    if (N(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : ji(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || I(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Vt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  io(e, or);
}
function cE(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = ir(t, ho(e.getMarker()));
  return r === "" ? void 0 : r;
}
function lE(e) {
  const t = e.getChildren().filter((s) => !P(s) && ie(s, oe) !== "attribute"), r = t[0];
  r && M(r) && r.getTextContent().startsWith(q) && r.setTextContent(r.getTextContent().slice(1));
  const n = cE(e);
  n && t.push(me(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function uE(e, t) {
  const r = e.getChildren(), n = r.some((s) => P(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => M(c) && !P(c) && c.getTextContent() === wt(s)
    ), a = ci(e).some(({ node: c }) => P(c));
    if (!o && !a) return;
    r.forEach((c) => {
      P(c) || (M(c) && c.getTextContent() === wt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => P(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function dE(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(P(r) && r.getMarkerSyntax() === "opening")) {
    lE(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => P(o) && o.getMarkerSyntax() === "closing");
  i && !s && Jt(e, t);
}
function hc(e, t, r) {
  if (!P(e.getFirstChild()) && r?.markerMode === "editable" && pi(r)) {
    io(e, t);
    return;
  }
  Eh(e, t);
}
function Bg() {
  const e = O();
  if (!N(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Vg(e);
    return t !== "removed" ? t : (gc(), "handled");
  }
  return gc() ? "handled" : "declined";
}
function fE(e, t) {
  if (!t) return e;
  const r = jM.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function zd(e, t) {
  const r = O();
  if (!N(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Wg())
      return "declined";
  } else {
    const s = Vg(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => fE(s, t)
  );
  Kd(n ?? "");
  for (const s of i)
    gc(), Kd(s);
  return "handled";
}
function pE(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = En(n);
  if (!i) return !1;
  const s = Pt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !M(i) || P(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Vg(e) {
  const t = Pt(e.anchor.getNode()), r = Pt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), hE() ? "removed" : "needs-plain-split");
}
function Kd(e) {
  if (e === "") return;
  const t = O();
  N(t) && t.insertText(e);
}
function hE() {
  const e = O();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = Pt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => P(r) && r.getMarkerSyntax() === "opening");
}
function Wg() {
  const e = O();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Pt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function gc() {
  const e = O();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Wg();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Cr("fp", { closed: "false" });
  i.append(ut("fp"));
  const s = M(t) && !P(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    ni(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (uk(u), i.append(u));
  }
  return i.getChildren().every(P) && i.append(me(zt)), Hg(i), !0;
}
function Hg(e) {
  const t = e.getChildren().find((r) => !P(r));
  if (M(t)) {
    const r = t.getTextContent().startsWith(q) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (I(t)) {
    Hg(t);
    return;
  }
  e.selectEnd();
}
function gE(e) {
  const t = [];
  let r = e;
  for (; r; )
    $(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function mE(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of De().getChildren()) {
    if (t && n.is(t)) break;
    (St(n) || He(n) || ne(n)) && r.push(n.getMarker());
  }
  return r;
}
function yE(e) {
  let t = e;
  for (; I(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function bE(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Bt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Pn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(yE(i)) && r === 0 : !1;
}
function kE(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Bt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Pn(i) && t.is(i) && r === 0;
}
function TE() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function xE() {
  const e = O();
  if (!N(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = at(t, ne), s = !n && (!i || kE(i, t, r)) ? "paragraph" : "character", o = Pt(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: mE(t),
    openCharMarkers: gE(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Qc(t, r),
    anchorRect: TE()
  };
}
function _E() {
  const e = O();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!M(t) || P(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = BM.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function CE(e, t, r) {
  hc(e, t, r), ql(e);
}
function SE(e, t, r) {
  const n = O();
  if (!N(n)) return;
  const i = n.focus.getNode(), s = at(i, ne);
  if (t === "backslash" && s && bE(s, i, n.focus.offset)) {
    CE(s, e, r);
    return;
  }
  Jg(e, r);
}
function vE(e, t) {
  const r = O();
  return !N(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Gg(e) {
  const t = O();
  return N(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function ME(e, t, r, n) {
  if (N(O()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && _E(), e.kind === "closeTag") {
    Gg(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Bg() !== "declined") return;
  if (e.kind === "paragraph" && Qe.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    SE(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Se.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return fg(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  ac(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: ls(), reference: r });
}
function Jg(e, t) {
  const r = O();
  if (!N(r)) return;
  const n = pi(t);
  if (ug()) {
    const s = O();
    if (!N(s)) return;
    const o = at(s.anchor.getNode(), ne);
    if (!o) return;
    o.setMarker(e), n && Rl(o);
    return;
  }
  const i = r.insertParagraph();
  ne(i) && (n ? io(i, e) : i.setMarker(e));
}
function EE() {
  const [e] = ae();
  return z(() => e.registerCommand(Ac, () => !0, At), [e]), null;
}
function Yg(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Paragraph : !(Se.isValidMarker(r) || po(r));
}
function AE(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Character : !(Se.isValidMarker(r) || po(r));
}
function PE(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = UM.exec(e)?.[1];
  return r === void 0 ? !1 : !Yg(r, t);
}
function Xg(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !PE(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ne(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (ne(i))
    return [i, r];
}
function Qg(e, t) {
  const r = Xg(e, t.getMarker);
  return r !== void 0 && Dg(r, t);
}
function NE(e, t) {
  const r = O();
  N(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function Zg(e) {
  const t = FM.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function wE(e) {
  const t = O();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = Zg(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function OE(e) {
  const t = O();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (j(e.getParent()) && M(r)) {
    const n = r.getNextSibling();
    if ($(n)) {
      Yc(n);
      return;
    }
  }
  M(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function jd(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = Zg(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  OE(e);
}
function Bd(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function em(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Jt(e, r);
  const n = wE(e), i = e.getParent();
  if (ne(i)) {
    if (!Yg(t, r.getMarker))
      return Qg(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Jt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Bd(s, t) && jd(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if ($(i) || j(i)) {
    const s = t.replace(/^\+/, "");
    if (!($(i) ? AE(t, r.getMarker) : Se.isValidMarker(s)))
      return Jt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Jt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(P).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (NE(c, ot(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Bd(a, s) && jd(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Jt(e, r);
}
function qE(e) {
  const t = O();
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
function RE(e, t) {
  const r = e.getTextContent();
  if (Jr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Be(e.getParent()) && Bc(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !qE(e)) {
    yk(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = LM.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), em(e, n[1], t);
      return;
    }
    if (DM.test(r)) {
      t.pendingKeys.delete(e.getKey()), Jt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = ot(e.getMarker(), e.getNested());
    if ($(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = O(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = me(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function $E(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (Kp(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function tm(e) {
  if (!Nf(e)?.length)
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
const Oi = tm("v"), IE = tm("c"), Vd = /^[ \u00A0]*$/;
function Wd(e, t, r) {
  const n = e.getNextSibling();
  if (M(n) && n.getType() === ze.getType() && n.getMode() === "normal" && ie(n, oe) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = me(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function LE(e, t) {
  const r = e.getTextContent(), n = Ft("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (Oi.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = Oi.valueAndRest.exec(c);
    if (l && Vd.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (Oi.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Oi.valueAndRest.exec(r);
  if (!s) {
    const c = Oi.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = O(), p = N(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Ft("v", u));
      const m = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      Wd(e, d, m);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Jt(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), Vd.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Ft("v", o)), a && Wd(e, a, a.length);
}
const DE = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function UE(e, t) {
  const r = e.getParent();
  if (!j(r) || r.getIsCollapsed() !== !1 || !Nf(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!P(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === wt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = DE.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(wt(a)), !0;
}
function FE(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!M(t)) return;
  const r = Ft("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = IE.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function rm(e) {
  if (je(e)) {
    const { wrapper: t } = Co(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (j(e)) {
    const { wrapper: t } = Pp(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Re(e)) {
    const t = [], r = Np(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Op(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Ne(e)) {
    const t = [], r = Gi(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = Gi(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function zE(e) {
  const t = O();
  if (!N(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return rm(e).some((n) => r.is(n));
}
function KE(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ne(e) && xp(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Yi)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && gs(l, e) && (i || zE(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of rm(e))
    l.remove(), n = !0;
  let s = !1;
  if ($(e)) {
    const l = Ck(e);
    l !== void 0 && sb(l) && ($p(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Yi)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (bT(l, e)) {
        Qi(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Xp(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Eo(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function Hd(e) {
  return M(e) && e.getType() === ze.getType() && e.getMode() === "normal" && ie(e, oe) !== "attribute";
}
function jE(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = se(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && Hd(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && Hd(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Ps(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = jE(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = se(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (P(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (Jr(c)) continue;
      const m = Mg.exec(p);
      c.getMarkerSyntax() === "opening" && m ? n = em(c, m[1], e) || n : r === "idle" && Ud(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Qg(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Jt(c, e) || n;
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
    const f = KE(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && Ud(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = Jt(u, e) || n;
    }
  }
  return n;
}
function nm(e) {
  if (Yr(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if ($(t)) return Di(t) !== void 0;
  return !1;
}
function BE(e) {
  const t = bn(e);
  if (!t) return !1;
  const r = yn(t.kind);
  return !Eo(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Gd(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (St(t) || Ie(t) || Vp(t)) return !0;
  return !1;
}
function VE(e, t) {
  const r = e.getTextContent(), n = ie(e, oe), i = e.getParent();
  if (n !== "attribute" && Re(i)) {
    r.replace(/^[ \u00A0]+/, "") === Ft("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (UE(e, t)) return;
  if (n === "attribute") {
    BE(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && nm(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Gd(e))
      t.pendingKeys.add(e.getKey());
    else if (qp(e)) t.pendingKeys.add(e.getKey());
    else if (Re(ss(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      $(a) && Ip(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Gd(e)) return;
  const s = O(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (zM.test(o)) {
    if (hb(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), Jt(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function WE(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Xp(e, t);
}
function HE(e) {
  const t = (r) => {
    if (P(r)) {
      Jr(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (Yr(r)) {
      Kp(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Yi)
      n.settleScope !== "none" && n.ownerPredicate(r) && (gs(n, r) || WE(n, r)) && e.pendingKeys.add(r.getKey());
    if (Ne(r)) {
      r.getTextContent() !== Ft("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (M(r)) {
      if (r.getType() !== ze.getType() || ie(r, oe) === "attribute") return;
      const n = r.getParent();
      if (Re(n)) {
        r.getTextContent() !== Ft("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && nm(r) || i.includes("//") || qp(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if ($(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Ie(r) && !St(r)) {
      if (Be(r) && r.getChildrenSize() === 0) {
        const n = bn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      I(r) && r.getChildren().forEach(t);
    }
  };
  De().getChildren().forEach(t);
}
function GE(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ie(e, oe);
  if (r === "attribute" || r === ur) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (St(o) || Re(o) || Ie(o)) return;
  const n = t.startsWith(q) && $(e.getParent()), i = n ? t.slice(1) : t, s = (n ? q : "") + i.replace(/ (?=[ \u00A0])/g, q).replace(new RegExp("(?<=\\u00A0) ", "g"), q);
  s !== t && e.setTextContent(s);
}
function JE(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function mc(e) {
  const t = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!t) return;
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(t.getData("text/plain")), i = t.getData("text/html"), s = i ? r(JE(i)) : "";
  return {
    plainText: n,
    html: i,
    htmlText: s,
    text: n || s,
    isInternal: !!t.getData("application/x-lexical-editor")
  };
}
function YE(e) {
  const t = mc(e);
  if (!t || t.isInternal) return !1;
  const { plainText: r, html: n, htmlText: i } = t, s = r.includes(q) ? r : n.includes(q) || i.includes(q) ? i : void 0;
  if (!s) return !1;
  const o = O();
  if (!N(o)) return !1;
  e?.preventDefault();
  const a = s.replaceAll(q, "~"), c = a.split(`
`);
  if (c.length < 2)
    return o.insertText(a), !0;
  o.isCollapsed() || o.removeText();
  const l = ls();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(Rs, void 0), u === "") return;
    const f = O();
    N(f) && f.insertText(u);
  }), !0;
}
function XE(e) {
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
function QE(e) {
  const t = O();
  if (!N(t) || t.isCollapsed()) return;
  const r = {
    "text/plain": t.getTextContent().replaceAll(q, " ")
  }, n = xy(e), i = _y(e);
  return n && (r["text/html"] = XE(n)), i && (r["application/x-lexical-editor"] = i), r;
}
function Jd(e, t, r) {
  const n = O();
  if (!N(n) || n.isCollapsed()) return !1;
  const i = QE(t);
  if (!i) return !1;
  if (!e || !("clipboardData" in e))
    return Ty(t, null, i), r && n.removeText(), !0;
  if (e.clipboardData == null) return !1;
  e.preventDefault();
  for (const [s, o] of Object.entries(i)) e.clipboardData.setData(s, o);
  return r && n.removeText(), !0;
}
const im = kf(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function va(e) {
  const t = e();
  return zr(hf), zr(Rf), t;
}
const Yd = 8, ZE = 1e3;
function Hn(e, t) {
  const r = Ne(e) ? ["va", "vp"] : je(e) ? ["milestone"] : j(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    CT(yn(n), e, t.pendingKeys);
}
function eA(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Pc) || i.updateTags.has(Vi)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = se(o);
        if (!c) continue;
        const l = bn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = se(o.getKey());
        c?.isAttached() && yn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Ge(
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
    e.registerMutationListener(fr, r),
    e.registerMutationListener(Er, r),
    e.registerMutationListener(Pr, r)
  );
}
function tA(e, t, r) {
  return Ge(
    e.registerCommand(
      sr,
      (n) => {
        if (Ih()) return !1;
        const i = mc(n);
        if (!i) return !1;
        const s = i.text;
        if (s.includes(`
`)) {
          const a = (r ? s.replaceAll(q, "~") : s).split(`
`);
          let c = zd(a, t.getMarker);
          if (c === "declined" && pE(e) && (c = zd(a, t.getMarker)), c === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      rt
    ),
    e.registerCommand(
      sr,
      (n) => {
        const i = mc(n);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !tM()) return !1;
        n?.preventDefault();
        const o = O();
        return N(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Rs, void 0), a === "") return;
          const l = O();
          N(l) && l.insertText(a);
        }), !0;
      },
      $e
    ),
    e.registerCommand(
      sr,
      () => (t.splitExpected.current = !0, !1),
      At
    )
  );
}
function rA({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n
}) {
  const [i] = ae(), s = e?.markerMode === "editable", o = !!e && wo(e), a = Y(void 0), c = Y(n);
  return z(() => {
    c.current = n;
    const l = a.current;
    l && (e && (l.viewOptions = e), l.getMarker = t ?? ar, l.logger = r);
  }, [e, t, r, n]), z(() => {
    if (!s || !e) return;
    const l = {
      viewOptions: e,
      getMarker: t ?? ar,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r
    };
    a.current = l;
    const u = hT(i, l.pendingKeys);
    let d, f = !1, p, m = !1, h = !1, y = 0;
    const k = () => y < Yd ? !1 : (l.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Yd} consecutive mutating passes; leaving ${l.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...l.pendingKeys].join(", ")}`
    ), !0), v = (x, F = "departure") => {
      i.update(() => {
        y = va(
          () => Ps(l, x, F)
        ) ? y + 1 : 0;
      });
    };
    let C;
    const A = () => {
      if (C !== void 0 && clearTimeout(C), C = void 0, h || l.pendingKeys.size === 0) return;
      const x = c.current ?? ZE;
      x < 0 || (C = setTimeout(() => {
        C = void 0, !(h || l.pendingKeys.size === 0) && (f || k() || v(void 0, "idle"));
      }, x));
    }, E = Ge(
      i.registerNodeTransform(fr, (x) => {
        if (i.isComposing()) return;
        RE(x, l);
        const F = bn(x);
        F && (Ne(F.owner) || j(F.owner) || Re(F.owner) || je(F.owner) && Co(F.owner).wrapper === void 0) && Hn(F.owner, l);
      }),
      i.registerNodeTransform(ht, (x) => {
        i.isComposing() || (LE(x, l), Hn(x, l));
      }),
      i.registerNodeTransform(qt, (x) => {
        i.isComposing() || (FE(x), x.isAttached() && Hn(x, l));
      }),
      i.registerNodeTransform(Qe, (x) => {
        i.isComposing() || aE(x, l);
      }),
      i.registerNodeTransform(be, (x) => {
        if (!i.isComposing()) {
          dE(x, l);
          for (const F of ["separator", "char"])
            x.isAttached() && gs(yn(F), x) && l.pendingKeys.add(x.getKey());
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
      i.registerNodeTransform(Qt, (x) => {
        i.isComposing() || Hn(x, l);
      }),
      i.registerNodeTransform(Pr, (x) => {
        if (i.isComposing()) return;
        const F = bn(x);
        F && (je(F.owner) || Ne(F.owner) || j(F.owner) || Re(F.owner)) && Hn(F.owner, l);
      }),
      i.registerNodeTransform(Se, (x) => {
        i.isComposing() || (uE(x, l), Hn(x, l));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      i.registerNodeTransform(wr, (x) => {
        i.isComposing() || $E(x, l);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      i.registerNodeTransform(ze, (x) => {
        i.isComposing() || VE(x, l);
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
            for (const [F, D] of x) {
              if (D === "destroyed") continue;
              const H = se(F);
              !H || ie(H, oe) !== "attribute" || Be(H.getParent()) || i.getElementByKey(F)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      eA(i, l),
      ...o ? [
        i.registerNodeTransform(ze, (x) => {
          i.isComposing() || GE(x);
        }),
        i.registerCommand(
          us,
          (x) => Jd(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            x && typeof x == "object" && "clipboardData" in x ? x : null,
            i,
            !1
          ),
          $e
        ),
        i.registerCommand(
          Fr,
          (x) => Jd(
            x && typeof x == "object" && "clipboardData" in x ? x : null,
            i,
            !0
          ),
          $e
        ),
        i.registerCommand(
          sr,
          (x) => YE(
            // Same jsdom-safe duck-check as COPY above.
            x && typeof x == "object" && "clipboardData" in x ? x : null
          ),
          $e
        )
      ] : [],
      i.registerCommand(
        Fr,
        () => (pc(l), !1),
        rt
      ),
      i.registerCommand(
        uo,
        () => (i.isComposing() || oE(l), !1),
        Yn
      ),
      i.registerCommand(
        Bi,
        () => (f = !1, y = 0, A(), !1),
        At
      ),
      i.registerCommand(
        lr,
        (x) => (f = !1, y = 0, A(), (x.key === "Backspace" || x.key === "Delete") && (pc(l), sE(l)), i.isComposing() || !x.ctrlKey || x.altKey || x.shiftKey || x.metaKey || x.key !== " " && x.code !== "Space" || !eM() ? !1 : (x.preventDefault(), !0)),
        $e
      ),
      i.registerCommand(
        yf,
        (x) => {
          const F = Bg();
          F === "needs-plain-split" && i.dispatchCommand(Rs, void 0);
          const D = F !== "declined" || ST();
          return D && x?.preventDefault(), Ps(l), D;
        },
        $e
      ),
      i.registerCommand(
        Rs,
        () => (l.splitExpected.current = !0, ug()),
        $e
      ),
      tA(i, l, o),
      i.registerCommand(
        im,
        () => {
          if (f) return !0;
          const x = i.getRootElement(), F = x?.ownerDocument, D = !!x && !!F && F.hasFocus() && x.contains(F.activeElement);
          let H;
          if (D) {
            const J = O();
            H = N(J) ? J.focus.key : d;
          }
          return va(() => Ps(l, H)), !0;
        },
        At
      ),
      i.registerCommand(
        Ec,
        () => {
          if (f) return !1;
          const x = O(), F = N(x) ? x.focus.key : d;
          return va(() => Ps(l, F)), !1;
        },
        At
      ),
      i.registerUpdateListener(({ editorState: x, tags: F }) => {
        l.splitExpected.current = !1, l.wholeParaDeleteExpected?.clear(), l.collapsedDeleteCaretParas?.clear(), l.rebuildAttempted.clear();
        const D = x.read(() => {
          const J = O();
          return N(J) ? J.focus.key : void 0;
        }), H = p;
        if (D !== void 0 && (p = D), F.has(Pc)) {
          l.pendingKeys.clear(), x.read(() => HE(l)), f = !0, D !== void 0 && (d = D);
          return;
        }
        if (F.has(Kr)) {
          D !== void 0 && D !== H && (f = !0);
          return;
        }
        f || (D !== void 0 && (d = D), A(), !(m || D === void 0) && [...l.pendingKeys].some((J) => J !== D) && (m = !0, queueMicrotask(() => {
          m = !1, !h && (k() || v(d));
        })));
      })
    );
    return () => {
      h = !0, C !== void 0 && clearTimeout(C), C = void 0, u(), E(), a.current = void 0;
    };
  }, [i, s, o]), null;
}
const nA = ["status_unknown", "status_invalid"], sm = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, iA = Object.values(sm);
function sA(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = sm[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Xd(e) {
  e.classList.remove(...nA), e.removeAttribute("aria-description"), iA.includes(e.title) && e.removeAttribute("title");
}
function oA(e, t, r, n) {
  const i = (a) => a.read(() => De().getChildrenKeys()), s = i(t), o = i(e);
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
function aA(e) {
  const t = se(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : P(t) && t.getParent()?.getKey() === r.getKey();
}
function cA({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ae(), i = e?.markerMode === "editable";
  return z(() => {
    if (!i) return;
    const s = t ?? Ws;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = MM(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || aA(f)) continue;
            const m = se(f)?.getTopLevelElement();
            !m || l.has(m.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && Xd(p);
        }
        for (const [f, p] of d) {
          const m = n.getElementByKey(f);
          m && sA(m, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          oA(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && Xd(u);
      }
    };
  }, [n, i, t, r]), null;
}
function om(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = vr(o);
    a && I(s) && om(s.getChildren(), a, r);
  }
}
function am(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = vr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = ai(o);
      if (c === void 0 || !c.includes(st)) continue;
      const l = c.split(st), u = [];
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
function cm(e, t, r) {
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
function lm(e, t) {
  const r = [];
  for (const n of e)
    Ng(n, t) || ((ne(n) || $(n)) && r.push(n.getMarker()), I(n) && r.push(...lm(n.getChildren(), t)));
  return r;
}
function um(e) {
  const t = [];
  for (const r of e) {
    const n = Pl(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = vr(r);
    i && t.push(...um(i));
  }
  return t;
}
function $l(e, t, r) {
  const n = lm(e, r), i = um(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function lA(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = O();
  let n, i;
  if (N(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = se(t.key), i = t.offset;
  else
    return;
  if (!(!M(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function Il(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function uA(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  for (const y of e) {
    const k = Nl(y, o, s);
    if (!k) return;
    c.text.length > 0 && (c.text += " ");
    const v = c.text.length;
    k.spans.forEach(
      (C) => c.spans.push({ ...C, start: C.start + v, end: C.end + v })
    ), c.sentinels.push(...k.sentinels), c.text += k.text;
  }
  const l = i ? Il(c, i) : c.text, u = Mr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (qn(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = Hr.serializeEditorState(
    { type: Tr, version: kr, content: u },
    s
  ).root.children;
  if ($o(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = cm(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (yi(d, o) === mi(e, o) && $l(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  am(d, f);
  const m = dA(e), h = dm(d);
  for (let y = 0; y < m.length && y < h.length; y++)
    m[y].sid !== void 0 && h[y].number === m[y].number && (h[y].sid = m[y].sid);
  return d;
}
function dA(e) {
  const t = [], r = (n) => {
    Ne(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : I(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function dm(e) {
  const t = [];
  for (const r of e) {
    up(r) && t.push(r);
    const n = vr(r);
    n && t.push(...dm(n));
  }
  return t;
}
function fA(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Ug(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? Il(l, i) : l.text, f = Mr(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (qn(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const m = p.content ?? [], h = Fg(m), y = e.getCategory() !== h, k = Ag(e, m, h, s);
  if (k.failure !== void 0) {
    k.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : k.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const v = k.children;
  if ($o(v) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const C = cm(l, t, n);
  if (!C) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (yi(v, o) === mi(u, o) && $l(u, v, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: h, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return am(v, C), { rebuilt: v, contentNodes: u, category: h, categoryChanged: y };
}
function Qd(e) {
  return e.$?.textType;
}
function pA(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Qd(e) === Qd(t);
}
function hA(e) {
  const t = [];
  for (const r of e) {
    const n = se(r);
    n?.isAttached() && Ie(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function gA(e) {
  if (!P(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!j(t)) return;
  const r = e.getTextContent();
  if (Jr(e)) return;
  const n = Mg.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Zd(e, t) {
  const r = e;
  r.marker = t, r.text = Og(t, r.markerSyntax, r.nested);
}
function mA(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Se.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Zd(a.node, s);
  const c = n.getChildren().filter(P).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Zd(l.node, s);
}
function yA(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = jg(e, i, n);
  if (!o) return;
  const a = r ? Il(o, r) : o.text, c = Mr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (qn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = Hr.serializeEditorState(
    { type: Tr, version: kr, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Lo(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && yi(u, i) === mi(d, i) && $l(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function bA(e, t, r, n, i) {
  const s = lA(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = (y) => {
    j(y) ? c.set(y.getKey(), y) : Re(y) ? l.set(y.getKey(), y) : o.set(y.getKey(), [y]);
  };
  for (const y of t) {
    const k = se(y);
    if (!k?.isAttached()) continue;
    const v = ss(k);
    if (v) {
      if (d(v), P(k)) {
        const C = Xg(k, r.getMarker);
        C && a.push(C);
      }
      if (j(v)) {
        const C = gA(k);
        C && u.set(v.getKey(), C);
      }
    }
  }
  const f = /* @__PURE__ */ new Set();
  for (const y of a)
    y.some((k) => f.has(k.getKey())) || (y.forEach((k) => {
      f.add(k.getKey()), o.delete(k.getKey());
    }), o.set(y[0].getKey(), y));
  if (s) {
    const y = ss(s.node);
    y && d(y);
  }
  const p = hA(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && p.length === 0)
    return;
  const m = new Set(p.map((y) => y.getKey())), h = /* @__PURE__ */ new Map();
  om(De().getChildren(), e.root.children, h);
  for (const y of u.values()) mA(y, h);
  for (const y of c.values()) {
    const k = h.get(y.getKey()), v = k ? vr(k.node) : void 0;
    if (!k || !v) continue;
    const C = fA(y, h, r, m, s);
    if (!C) continue;
    if (C.categoryChanged) {
      const x = k.node;
      C.category === void 0 ? delete x.category : x.category = C.category;
    }
    if (!C.rebuilt) continue;
    const A = h.get(C.contentNodes[0].getKey());
    if (!A) continue;
    const E = v.indexOf(A.node);
    E < 0 || v.splice(E, C.contentNodes.length, ...C.rebuilt);
  }
  for (const y of o.values()) {
    const k = h.get(y[0].getKey());
    if (!k) continue;
    const v = uA(y, h, r, m, s);
    if (!v) continue;
    const C = k.siblings.indexOf(k.node);
    C < 0 || k.siblings.splice(C, y.length, ...v);
  }
  for (const y of l.values()) {
    const k = h.get(y.getKey());
    if (!k) continue;
    const v = 1 + Lo(y).length, C = yA(y, r, s);
    if (!C) continue;
    const A = k.siblings.indexOf(k.node);
    A < 0 || k.siblings.splice(A, v, ...C);
  }
  for (const y of p) {
    const k = h.get(y.getKey());
    if (!k) continue;
    const v = k.siblings.indexOf(k.node);
    if (v < 0) continue;
    k.siblings.splice(v, 1);
    const C = k.siblings[v - 1], A = k.siblings[v], E = C && ai(C), x = A && ai(A);
    C && A && E !== void 0 && x !== void 0 && pA(C, A) && (C.text = E + x, k.siblings.splice(v, 1));
  }
  return rg(e, r.viewOptions);
}
function kA({
  viewOptions: e,
  logger: t
}) {
  const [r] = ae(), n = pi(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return z(() => {
    if (n)
      return r.registerNodeTransform(
        Qe,
        (i) => TA(i, t)
      );
  }, [r, n, t]), null;
}
function TA(e, t) {
  e.getMarker() !== or && (e.isEmpty() || Bt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${or}" (key ${e.getKey()})`
  ), e.setMarker(or)));
}
function xA({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = ae(), n = Y({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return z(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, so(s, e) || _A(i, r, e);
  }, [r, e, t]), z(
    () => r.registerMutationListener(
      jt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = yc(r);
        ef(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Ns(s) === Ns(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), z(() => {
    const i = (a) => a.read(
      () => new Set(
        De().getChildren().filter(He).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (yc(r) || ef(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: Ns(a) === Ns(c)
      }));
    };
    return Ge(
      ...[qt, dr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), z(
    () => r.registerCommand(
      xr,
      () => {
        const i = n.current;
        return i.phase === "idle" && MA(i, SA()), !1;
      },
      At
    ),
    [r]
  ), z(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(xr, void 0));
    };
    return Ge(
      r.registerMutationListener(vt, i),
      r.registerMutationListener(ht, i)
    );
  }, [r]), z(() => {
    const i = () => NA(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function _A(e, t, r) {
  if (CA(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = yc(t);
  (!n || n === r.book) && t.update(() => fm(r.chapterNum, r.verseNum), {
    tag: Kr
  });
}
function CA(e, t) {
  const r = e.pendingEchoes.findIndex((n) => so(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function SA() {
  const e = O();
  if (Dt(e)) return;
  const t = Fc(e);
  if (!t) return;
  const r = Ll(), n = pp(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = tl(t, e), { verseNum: o, verse: a } = HT(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function yc(e) {
  return e.getEditorState().read(() => Ll()?.getCode() || void 0);
}
function Ll() {
  return De().getChildren().find(St);
}
function ef(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Ma(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Ma(e, t), e.phase = "navigating") : i && Ma(e, t), r && r !== e.scrRef.book && gm(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Ma(e, t) {
  queueMicrotask(() => {
    t.update(
      () => fm(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Kr }
    );
  });
}
function fm(e, t) {
  const r = Fc(O()), n = rl(r)?.getNumber(), i = pp(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (kp(n) ? hm(t, n) : parseInt(n, 10) === t))
    return;
  const o = De().getChildren(), a = fp(o, e);
  if (!a) return;
  const c = sk(o, a), l = Qb(c, !0);
  ik(c, l);
  let u;
  try {
    u = KT(c, t);
  } catch {
    return;
  }
  u && (ne(u) ? !M(u.getFirstChild()) && gi(u) || Vt(u, 0) : vA(u));
}
function vA(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ge(n)) {
    Vt(t, r);
    return;
  }
  const i = Mo(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (M(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = I(n) && !j(n) ? pm(n) : void 0;
  s ? s.select(0, 0) : Vt(t, r);
}
function pm(e) {
  const t = e.getFirstChild();
  if (M(t)) return t;
  if (I(t) && !j(t)) return pm(t);
}
function Ns(e) {
  return e.read(() => {
    const t = De().getChildren().find(He);
    return `${Ll()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function MA(e, t) {
  e.phase !== "navigating" && t && (EA(t, e.scrRef) || gm(e, AA(t, e.scrRef)));
}
function EA(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? hm(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function hm(e, t) {
  try {
    return zc(e, t);
  } catch {
    return !1;
  }
}
function AA(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const PA = 8;
function gm(e, t) {
  return so(t, e.scrRef) || e.pendingEchoes.some((r) => so(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > PA && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function so(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function NA(e) {
  e.phase = "idle";
}
function wA(e) {
  return St(e) ? `${e.__code}` : Re(e) ? `${e.__marker} "${e.__number}"` : $(e) ? `${e.__marker}` : ds(e) ? `${e.__marker} "${e.__number}"` : pr(e) ? `${e.__caller}` : wn(e) ? `${e.__marker} "${e.__number}"` : j(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ne(e) ? `${e.__marker}` : M(e) ? `"${e.__text}"${OA(e)}` : _e(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Ne(e) ? `${e.__marker} "${e.__number}"` : "";
}
function OA(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[cs]) : "";
}
function qA() {
  const [e] = ae();
  return /* @__PURE__ */ S(
    Cy,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: wA,
      editor: e
    }
  );
}
const mm = lf(null), tf = 4;
function RA({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Y(null), s = uf(mm);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return z(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ S("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function $A({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = fe(), [s, o] = fe(), a = ye(
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
  return z(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ S(mm.Provider, { value: l, children: /* @__PURE__ */ S("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function IA({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Y(null), c = Y(null), [l, u] = fe(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return z(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: m, left: h } = f.getBoundingClientRect();
      p.style.top = `${m + f.offsetHeight + tf}px`, p.style.left = `${Math.min(h, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), z(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (m) => {
        const h = m.target;
        o && a.current && a.current.contains(h) || f.contains(h) || u(!1);
      };
      return document.addEventListener("click", p), () => {
        document.removeEventListener("click", p);
      };
    }
    return () => {
    };
  }, [a, c, l, o]), z(() => {
    const f = () => {
      if (l) {
        const p = c.current, m = a.current;
        if (p !== null && m !== null) {
          const { top: h } = p.getBoundingClientRect(), y = h + p.offsetHeight + tf;
          y !== m.getBoundingClientRect().top && (m.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Te(fn, { children: [
    /* @__PURE__ */ Te(
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
    l && dn(
      /* @__PURE__ */ S($A, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const bc = {
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
}, kc = {
  ...bc,
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
function LA({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ S(
    IA,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + DA(t),
      buttonLabel: UA(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(bc).map((n) => /* @__PURE__ */ Te(
        RA,
        {
          className: "item block-marker " + FA(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ S("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ S("span", { className: "text usfm_" + n, children: bc[n] })
          ]
        },
        n
      ))
    }
  );
}
function DA(e) {
  return e && e in kc ? e : "ban";
}
function UA(e) {
  return e && e in kc ? kc[e] : "No Style";
}
function FA(e) {
  return e ? "active dropdown-item-active" : "";
}
function rf() {
  return /* @__PURE__ */ S("div", { className: "divider" });
}
const zA = vn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ae(), [o, a] = fe(s), [c, l] = fe(), [u, d] = fe(!1), [f, p] = fe(!1), m = ye(
    ({
      canUndo: h,
      canRedo: y,
      blockMarker: k,
      contextMarker: v
    }) => {
      d(h), p(y), l(k), n?.({
        canUndo: h,
        canRedo: y,
        blockMarker: k,
        contextMarker: v
      });
    },
    [n]
  );
  return z(() => s.registerCommand(
    xr,
    (h, y) => (a(y), !1),
    rt
  ), [s]), /* @__PURE__ */ Te(fn, { children: [
    /* @__PURE__ */ S(Bh, { onStateChange: m }),
    /* @__PURE__ */ Te("div", { className: "toolbar", children: [
      /* @__PURE__ */ S(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(Tf, void 0);
          },
          title: $s ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
          type: "button",
          className: "toolbar-item spaced",
          "aria-label": "Undo",
          children: /* @__PURE__ */ S("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ S(
        "button",
        {
          disabled: !f || r,
          onClick: () => {
            o.dispatchCommand(xf, void 0);
          },
          title: $s ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ S("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ S(rf, {}),
      o === s && /* @__PURE__ */ Te(fn, { children: [
        /* @__PURE__ */ S(
          LA,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ S(rf, {})
      ] }),
      /* @__PURE__ */ S("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), KA = No(), jA = {}, BA = {};
function VA() {
  return /* @__PURE__ */ S("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
const ym = vn(function({
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
  const f = Y(null), p = Y(null), m = Y(null), h = Y(t), y = Y(void 0), k = Y(void 0), v = Y(void 0), C = Y(void 0), A = Y(!1), [E, x] = fe(t), [F, D] = fe(0), [H, J] = fe(), {
    isReadonly: Q = !1,
    structureProtectionMode: le = "off",
    hasExternalUI: te = !1,
    hasSpellCheck: Ce = !1,
    textDirection: Ee = "ltr",
    markerMenuTrigger: Z = "\\",
    view: U,
    nodes: ee,
    debug: Ae = !1,
    contextMenu: Ze,
    styleInfo: et,
    markerSettleDelayMs: ue
  } = c ?? BA, tt = U ?? KA, Or = ts(tt) && (tt.markerMode !== "hidden" || !tt.hasSpacing || tt.hasGutterParaMarkers || tt.hasActiveTextFocusBox) ? {
    ...tt,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : tt, bi = Y(Or);
  Rt(bi.current, Or) || (bi.current = Or);
  const de = bi.current, ft = Fe(() => ee ?? jA, [ee]), Do = Fe(() => Ze, [Ze]), Rn = Fe(
    () => qT(et ?? Ws),
    [et]
  ), Qr = Y(l);
  Rt(Qr.current, l) || (Qr.current = l);
  const Ve = Qr.current, ce = ts(de), mt = Q || ce, xe = Or !== tt;
  z(() => {
    ce && !Q && Ve?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), xe && Ve?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    );
  }, [ce, Q, xe, Ve]);
  const hr = Y(null), Pe = Fe(() => {
    if (de.markerMode !== "editable") return;
    const w = et ?? Ws;
    return {
      getContext: () => hr.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (K) => RM(
        w,
        K,
        ft.extraValidMarkers
      ),
      getEnterItems: (K) => $M(
        w,
        K,
        ft.extraValidMarkers
      ),
      apply: (K, V) => {
        const G = hr.current;
        G && (V.trigger === "enter" ? G.splitParagraphWithMarker(K.marker) : G.applyMarkerMenuSelection(K, V));
      },
      commitTypedCloser: (K) => {
        hr.current?.commitTypedCloser(K);
      }
    };
  }, [de, et, ft.extraValidMarkers]), gr = (w) => {
    A.current || (A.current = !0, Qr.current?.warn(
      `Editor: cannot ${w} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, ki = (w) => {
    if (ce)
      throw new Error(
        `Cannot ${w} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, yt = (w) => {
    if (ki(w), mt) throw new Error(`Cannot ${w} in readonly mode`);
  }, ys = Fe(
    () => ({
      namespace: "platformEditor",
      theme: { ...Tg, showCharMarkerTitles: de.showCharMarkerTitles },
      editable: !mt,
      editorState: void 0,
      // Handling of errors during update
      onError(w) {
        throw w;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [nt, ...ce ? Vx : yh]
    }),
    [mt, ce, de.showCharMarkerTitles]
  );
  Ta.initialize(Ve);
  function mr(w) {
    if (w !== void 0 && !rM(w, ft.extraValidMarkers))
      throw new Error(`Unsupported character marker '${w}'`);
  }
  const $n = ye(() => {
    const w = f.current;
    if (!w) return h.current;
    const K = Su(w), V = k.current;
    if ((!K || K.size === 0) && !V) return h.current;
    const G = w.getEditorState(), ve = G.toJSON();
    return G.read(
      () => bA(
        ve,
        K ?? /* @__PURE__ */ new Set(),
        { viewOptions: de, getMarker: Rn, logger: Ve },
        V,
        v.current
      )
    ) ?? h.current;
  }, [de, Rn, Ve]), Ti = {
    focus() {
      f.current?.focus();
    },
    isFocused() {
      const w = f.current?.getRootElement();
      return !!w && w.ownerDocument.activeElement === w;
    },
    undo() {
      f.current?.dispatchCommand(Tf, void 0);
    },
    redo() {
      f.current?.dispatchCommand(xf, void 0);
    },
    cut() {
      yt("cut"), f.current?.dispatchCommand(Fr, null);
    },
    copy() {
      f.current?.dispatchCommand(us, null);
    },
    paste() {
      yt("paste"), f.current && hl(f.current);
    },
    pastePlainText() {
      yt("paste as plain text"), f.current && gl(f.current);
    },
    getUsj() {
      return $n();
    },
    commitPendingMarkerEdits() {
      f.current?.update(
        () => {
          f.current?.dispatchCommand(im, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(w) {
      if (!w) {
        k.current = void 0;
        return;
      }
      const K = f.current?.getEditorState().read(() => {
        const V = O();
        return N(V) && V.isCollapsed() ? V.focus.key : void 0;
      });
      k.current = { input: w, nodeKey: K ?? v.current?.key };
    },
    setUsj(w) {
      if (!Rt(h.current, w)) {
        h.current = w, k.current = void 0;
        const K = Rt(E, w);
        x(w), K && D((V) => V + 1);
      }
    },
    applyUpdate(w, K = "remote") {
      if (ce && K === "remote") {
        Qr.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      ki("apply an update"), f.current?.update(
        () => {
          K === "remote" && zr(Vi), b_(w, de, ft, Ve);
        },
        { discrete: !0 }
      );
      const V = f.current?.getEditorState();
      if (!V) return;
      const G = Ta.deserializeEditorState(V, de);
      if (G) {
        const ve = !Rt(h.current, G);
        if (ve && (h.current = G), ve || !Rt(E, G)) {
          const Ue = Iu(w, V, "apply");
          C.current = G, s?.(G, w, K, Ue);
        }
      }
    },
    replaceEmbedUpdate(w, K) {
      const V = f.current?.read(() => sx(w, K));
      V ? this.applyUpdate(V) : l?.warn(
        `replaceEmbedUpdate: no embed found for key "${w}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (ce) {
        gr("get the selection");
        return;
      }
      return f.current?.read(ph);
    },
    getSelectedParaMarker() {
      return f.current?.getEditorState().read(() => {
        const w = Dt(O())?.getParent();
        return ne(w) ? w.getMarker() : void 0;
      });
    },
    setSelection(w) {
      if (ce) {
        gr("set the selection");
        return;
      }
      f.current?.update(() => {
        const K = ol(w);
        K !== void 0 && (Zn(K), zr(qf));
      });
    },
    setAnnotation(w, K, V, G, ve) {
      if (ce) {
        gr("set an annotation");
        return;
      }
      let Ue, Mt, Zr, xi;
      typeof G == "function" || G === void 0 ? (Ue = G, Mt = ve) : (Ue = G.onClick, Mt = G.onRemove, Zr = G.onMouseEnter, xi = G.onMouseLeave), p.current?.setAnnotation(
        w,
        fu(K),
        V,
        Ue,
        Mt,
        Zr,
        xi
      );
    },
    removeAnnotation(w, K) {
      p.current?.removeAnnotation(fu(w), K);
    },
    formatPara(w) {
      yt("format a paragraph"), f.current?.update(() => {
        const K = O(), V = Dt(K);
        if (V) {
          ru(K, () => ei(w));
          const Ue = V.getParent();
          ne(Ue) && hc(Ue, w, de);
          return;
        }
        if (!N(K)) {
          l?.warn(
            `formatPara refused: no range selection or selected paragraph marker to retag with "${w}" (restore the caret before applying, as the marker palettes do)`
          );
          return;
        }
        ru(K, () => ei(w));
        const G = O();
        if (!N(G)) return;
        const ve = /* @__PURE__ */ new Set();
        G.getNodes().forEach((Ue) => {
          const Mt = Ue.getTopLevelElement();
          ne(Mt) && ve.add(Mt);
        }), ve.forEach((Ue) => hc(Ue, w, de));
      });
    },
    getElementByKey(w) {
      return f.current?.read(
        () => f.current?.getElementByKey(w) ?? void 0
      );
    },
    removeCharacterMarker(w) {
      if (mt) throw new Error("Cannot remove character marker in readonly mode");
      mr(w);
      let K = !1;
      return f.current?.update(
        () => {
          const V = O();
          N(V) && (K = hg(V, w, de));
        },
        { discrete: !0 }
      ), K;
    },
    replaceCharacterMarker(w, K) {
      if (mt) throw new Error("Cannot replace character marker in readonly mode");
      mr(w), mr(K);
      let V = !1;
      return f.current?.update(
        () => {
          const G = O();
          N(G) && (V = hM(G, w, K));
        },
        { discrete: !0 }
      ), V;
    },
    extendCharacterMarker(w, K) {
      if (mt) throw new Error("Cannot extend character marker in readonly mode");
      mr(w), K?.forEach(
        (G) => mr(G)
      );
      let V = !1;
      return f.current?.update(
        () => {
          const G = O();
          N(G) && (V = gM(
            G,
            w,
            K,
            de
          ));
        },
        { discrete: !0 }
      ), V;
    },
    insertMarker(w) {
      if (mt) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!f.current) return;
      if (!oc(w, ft.extraValidMarkers))
        throw new Error(`Unsupported marker '${w}'`);
      const K = ac(
        w,
        y,
        de,
        ft,
        Ve,
        void 0,
        et
      );
      return K.action({ editor: f.current, reference: r }), K.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!Q)
        return f.current?.getEditorState().read(() => xE());
    },
    applyMarkerMenuSelection(w, K) {
      if (Q) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!f.current) return;
      if (w.kind !== "closeTag" && !oc(w.marker, ft.extraValidMarkers))
        throw new Error(`Unsupported marker '${w.marker}'`);
      let V;
      return f.current.update(() => {
        V = ME(w, K, r, {
          expandedNoteKeyRef: y,
          viewOptions: de,
          nodeOptions: ft,
          logger: l,
          styleInfo: et
        });
      }), V;
    },
    splitParagraphWithMarker(w) {
      if (Q) throw new Error("Cannot split paragraph in readonly mode");
      f.current && f.current.update(() => {
        Jg(w, de);
      });
    },
    commitTypedMarker(w, K) {
      if (Q) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!f.current) return !1;
      let V = !1;
      return f.current.update(() => {
        V = vE(w, K), V || l?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), V;
    },
    commitTypedCloser(w) {
      if (Q) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!f.current) return !1;
      let K = !1;
      return f.current.update(() => {
        K = Gg(w), K || l?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), K;
    },
    insertNote(w, K, V) {
      yt("insert a note"), f.current?.update(() => {
        const G = gh(
          w,
          K,
          V,
          r,
          de,
          ft,
          Ve
        );
        G && !G.getIsCollapsed() && (y.current = G.getKey());
      });
    },
    selectNote(w) {
      f.current?.update(() => {
        const K = Ku(w);
        K && (Kx(K, de), K.getIsCollapsed() || (y.current = K.getKey()));
      });
    },
    getNoteOps(w) {
      return f.current?.read(() => {
        const K = Ku(w);
        if (K)
          return il(K);
      });
    },
    get toolbarEndRef() {
      return m;
    }
  };
  hr.current = Ti, xc(d, () => Ti), z(() => {
    const w = f.current;
    if (w)
      return w.registerUpdateListener(({ editorState: K }) => {
        K.read(() => {
          const V = O();
          if (!N(V) || !V.isCollapsed()) return;
          const G = V.focus.getNode();
          M(G) && (v.current = { key: G.getKey(), offset: V.focus.offset });
        });
      });
  }, []);
  const er = ye(
    (w, K, V, G) => {
      if (ce) return;
      const ve = Ta.deserializeEditorState(w, de);
      if (ve) {
        const Ue = !Rt(h.current, ve);
        if (Ue && (h.current = ve), Ue || !Rt(E, ve)) {
          const Mt = Iu(G, w);
          C.current = ve, s?.(ve, G, "local", Mt);
        }
      }
    },
    [E, s, de, ce]
  );
  z(() => {
    const w = f.current;
    if (!(!w || !s))
      return w.registerUpdateListener(({ tags: K, dirtyElements: V, dirtyLeaves: G }) => {
        !K.has(Pc) && (V.size === 0 && G.size === 0 || K.has(Vi) || !Su(w)?.size) || queueMicrotask(() => {
          const ve = $n();
          !ve || Rt(C.current, ve) || (C.current = ve, s(ve, void 0, "local", void 0));
        });
      });
  }, [s, $n]);
  const Wt = ye(
    (w) => {
      J(w.contextMarker), o?.(w);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Te(Sf, { initialConfig: ys, children: [
      /* @__PURE__ */ S(xC, { isEditable: !mt }),
      /* @__PURE__ */ Te("div", { className: "editor-container", children: [
        te ? /* @__PURE__ */ S(Bh, { onStateChange: Wt }) : /* @__PURE__ */ S(
          "div",
          {
            className: "editor-toolbar-container" + (mt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ S(
              zA,
              {
                ref: m,
                editorRef: hr,
                isReadonly: mt,
                onStateChange: Wt
              }
            )
          }
        ),
        /* @__PURE__ */ Te("div", { className: "editor-inner", children: [
          /* @__PURE__ */ S(Mf, { editorRef: f }),
          /* @__PURE__ */ S(
            vy,
            {
              contentEditable: /* @__PURE__ */ S(
                vf,
                {
                  className: `editor-input usfm ${y_(de).join(" ")}${de.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${de.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: Ce
                }
              ),
              placeholder: /* @__PURE__ */ S(VA, {}),
              ErrorBoundary: Ef
            }
          ),
          te && /* @__PURE__ */ S(TC, {}),
          /* @__PURE__ */ S(Af, {}),
          r && n && /* @__PURE__ */ S(xA, { scrRef: r, onScrRefChange: n }),
          r && !te && /* @__PURE__ */ S(
            ev,
            {
              trigger: Z,
              scrRef: r,
              contextMarker: H,
              getMarkerAction: (w) => ac(
                w,
                y,
                de,
                ft,
                Ve,
                void 0,
                et
              ),
              editableHarness: Pe
            }
          ),
          /* @__PURE__ */ S(
            SC,
            {
              scripture: E,
              scriptureRef: h,
              nodeOptions: ft,
              editorAdaptor: Hr,
              viewOptions: de,
              logger: Ve
            },
            F
          ),
          /* @__PURE__ */ S(BC, { onChange: i }),
          /* @__PURE__ */ S(
            d_,
            {
              onChange: er,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Wy
            }
          ),
          /* @__PURE__ */ S(TM, { viewOptions: de }),
          /* @__PURE__ */ S(l_, { ref: p, logger: Ve }),
          /* @__PURE__ */ S(V_, { viewOptions: de }),
          /* @__PURE__ */ S(cC, {}),
          /* @__PURE__ */ S(hC, {}),
          de?.markerMode !== "editable" && /* @__PURE__ */ S(gC, { logger: Ve }),
          /* @__PURE__ */ S(kC, { options: Do }),
          /* @__PURE__ */ S(CC, {}),
          /* @__PURE__ */ S(EE, {}),
          /* @__PURE__ */ S(
            rA,
            {
              viewOptions: de,
              getMarker: Rn,
              logger: Ve,
              markerSettleDelayMs: ue
            }
          ),
          /* @__PURE__ */ S(
            cA,
            {
              styleInfo: et,
              viewOptions: de,
              logger: Ve
            }
          ),
          /* @__PURE__ */ S(
            vC,
            {
              expandedNoteKeyRef: y,
              nodeOptions: ft,
              viewOptions: de,
              logger: Ve
            }
          ),
          /* @__PURE__ */ S(jC, {}),
          /* @__PURE__ */ S(z_, {}),
          /* @__PURE__ */ S($_, {}),
          /* @__PURE__ */ S(kA, { viewOptions: de, logger: Ve }),
          /* @__PURE__ */ S(HC, { onParaMarkerMenuRequest: a }),
          /* @__PURE__ */ S(eS, {}),
          /* @__PURE__ */ S(zS, { structureProtectionMode: le }),
          /* @__PURE__ */ S(KS, { textDirection: Ee }),
          /* @__PURE__ */ S(BS, {}),
          /* @__PURE__ */ S(QS, {}),
          u
        ] }),
        Ae && /* @__PURE__ */ S(qA, {})
      ] })
    ] }, de.verseLayout ?? "inline")
  );
}), Z1 = vn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ S(ym, { ref: r, ...i });
});
function bm() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function oo(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? bm() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function km(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? bm() : r,
    quote: e,
    type: "thread"
  };
}
function nf(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function WA(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Ea(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class HA {
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
    this._comments = t, Ea(this);
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
          const c = nf(a);
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
    this._comments = i, Ea(this);
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
          const c = nf(a);
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
    return this._comments = n, Ea(this), t.type === "comment" ? {
      index: s,
      markedComment: WA(t)
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
    return t !== null ? t.doc.get("comments", nu) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new iu(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new nu();
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
      Fy,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      At
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof zy) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const m = p.insert, h = p.retain, y = p.delete, k = u.parent, v = u === r ? void 0 : k instanceof iu && this._comments.find((C) => C.id === k.get("id"));
              if (Array.isArray(m)) {
                const C = f;
                m.slice().reverse().forEach((A) => {
                  const E = A.get("id"), F = A.get("type") === "thread" ? km(
                    A.get("quote"),
                    A.get("comments").toArray().map(
                      (D) => oo(
                        D.get("content"),
                        D.get("author"),
                        D.get("id"),
                        D.get("timeStamp"),
                        D.get("deleted")
                      )
                    ),
                    E
                  ) : oo(
                    A.get("content"),
                    A.get("author"),
                    E,
                    A.get("timeStamp"),
                    A.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(F, v, C);
                  });
                });
              } else if (typeof h == "number")
                f += h;
              else if (typeof y == "number")
                for (let C = 0; C < y; C++) {
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
function GA(e) {
  const [t, r] = fe(e.getComments());
  return z(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function JA({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Y(null);
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
  }, [n, e]), /* @__PURE__ */ S("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Te("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function YA({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return dn(
    /* @__PURE__ */ S(JA, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Tm() {
  const [e, t] = fe(null), r = ye(() => {
    t(null);
  }, []), n = Fe(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ S(YA, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = ye(
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
const XA = {
  ...Tg,
  paragraph: "CommentEditorTheme__paragraph"
};
function QA(...e) {
  return e.filter(Boolean).join(" ");
}
function Gr({
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
      className: QA(
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
function ZA({
  className: e
}) {
  return /* @__PURE__ */ S(vf, { className: e || "ContentEditable__root" });
}
function e1({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ S("div", { className: t || "Placeholder__root", children: e });
}
const sf = kf("INSERT_INLINE_COMMAND");
function t1({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Y(null), s = ye(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return z(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), os(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ S("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ S("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ S("i", { className: "icon add-comment" }) }) });
}
function r1({ onEscape: e }) {
  const [t] = ae();
  return z(() => t.registerCommand(
    Ac,
    (r) => e(r),
    Yn
  ), [t, e]), null;
}
function xm({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ S(Sf, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: XA
  }, children: /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ S(
      Ly,
      {
        contentEditable: /* @__PURE__ */ S(ZA, { className: e }),
        placeholder: /* @__PURE__ */ S(e1, { children: s }),
        ErrorBoundary: Ef
      }
    ),
    /* @__PURE__ */ S(Iy, { onChange: n }),
    /* @__PURE__ */ S(Af, {}),
    t !== !1 && /* @__PURE__ */ S(qy, {}),
    /* @__PURE__ */ S(r1, { onEscape: r }),
    /* @__PURE__ */ S(Ry, {}),
    i !== void 0 && /* @__PURE__ */ S(Mf, { editorRef: i })
  ] }) });
}
function _m(e, t) {
  return ye(
    (r, n) => {
      r.read(() => {
        e(Dy()), t(!Uy(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function n1({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = fe(""), [s, o] = fe(!1), a = Y(null), c = Fe(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Y(null), u = Sm(), d = ye(() => {
    e.getEditorState().read(() => {
      const h = O();
      if (N(h)) {
        l.current = h.clone();
        const y = h.anchor, k = h.focus, v = My(
          e,
          y.getNode(),
          y.offset,
          k.getNode(),
          k.offset
        ), C = a.current;
        if (v !== null && C !== null) {
          const { left: A, bottom: E, width: x } = v.getBoundingClientRect(), F = Ey(e, v);
          let D = F.length === 1 ? A + x / 2 - 125 : A - 125;
          D < 10 && (D = 10), C.style.left = `${D}px`, C.style.top = `${E + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const H = F.length, { container: J } = c, Q = c.elements, le = Q.length;
          for (let te = 0; te < H; te++) {
            const Ce = F[te];
            let Ee = Q[te];
            Ee === void 0 && (Ee = document.createElement("span"), Q[te] = Ee, J.appendChild(Ee));
            const U = `position:absolute;top:${Ce.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${Ce.left}px;height:${Ce.height}px;width:${Ce.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            Ee.style.cssText = U;
          }
          for (let te = le - 1; te >= H; te--) {
            const Ce = Q[te];
            J.removeChild(Ce), Q.pop();
          }
        }
      }
    });
  }, [e, c]);
  os(() => {
    d();
    const h = c.container, y = document.body;
    return y !== null ? (y.appendChild(h), () => {
      y.removeChild(h);
    }) : () => {
    };
  }, [c.container, d]), z(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (h) => (h.preventDefault(), t(), !0), p = () => {
    if (s) {
      let h = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      h.length > 100 && (h = h.slice(0, 99) + "…"), r(
        km(h, [oo(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, m = _m(i, o);
  return /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ S(
      xm,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: m
      }
    ),
    /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ S(Gr, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ S(
        Gr,
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
function i1({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = fe(""), [s, o] = fe(!1), a = Y(null), c = Sm(), l = _m(i, o);
  return /* @__PURE__ */ Te(fn, { children: [
    /* @__PURE__ */ S(
      xm,
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
      Gr,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(oo(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(by, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ S("i", { className: "send" })
      }
    )
  ] });
}
function Cm({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Te(fn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Te("div", { className: "Modal__content", children: [
      /* @__PURE__ */ S(
        Gr,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ S(
        Gr,
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
function of({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = fe(0);
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Tm();
  return /* @__PURE__ */ Te("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ S("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Te("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ S("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Te(fn, { children: [
      /* @__PURE__ */ S(
        Gr,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ S(
              Cm,
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
function s1({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ae(), [a, c] = fe(0), [l, u] = Tm(), d = Fe(
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
  }, [a]), /* @__PURE__ */ S("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ Te(
      "li",
      {
        onClick: () => {
          const h = s.get(p);
          if (h !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const k = Array.from(h)[0], v = se(k);
                _e(v) && v.selectStart();
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
          /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ Te("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ S("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ S(
              Gr,
              {
                onClick: () => {
                  u("Delete Thread", (h) => /* @__PURE__ */ S(
                    Cm,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: h
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ S("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ S("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((h) => /* @__PURE__ */ S(
            of,
            {
              comment: h,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            h.id
          )) }),
          /* @__PURE__ */ S("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ S(
            i1,
            {
              submitAddComment: i,
              thread: f,
              placeholder: "Reply to comment..."
            }
          ) })
        ]
      },
      p
    ) : /* @__PURE__ */ S(
      of,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function o1({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Y(null), o = r.length === 0;
  return /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ S("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ S("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ S(
      s1,
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
function Sm() {
  const e = Pf(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function a1({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = Pf(), [a] = ae(), c = Fe(() => {
    const D = new HA(a, s);
    return r && D.registerOnChange(r), t?.(D), D;
  }, [a, s, r, t]), l = GA(c), u = Fe(() => /* @__PURE__ */ new Map(), []), [d, f] = fe(), [p, m] = fe([]), [h, y] = fe(!1), [k, v] = fe(!1), { yjsDocMap: C } = o;
  z(() => {
    if (e) {
      const D = e("comments", C);
      return c.registerCollaboration(D);
    }
    return () => {
    };
  }, [c, e, C]);
  const A = ye(() => {
    a.update(() => {
      const D = O();
      D !== null && (D.dirty = !0);
    }), y(!1);
  }, [a]), E = ye(
    (D, H) => {
      if (D.type === "comment") {
        const J = c.deleteCommentOrThread(D, H);
        if (!J)
          return;
        const { markedComment: Q, index: le } = J;
        c.addComment(Q, H, le);
      } else {
        c.deleteCommentOrThread(D);
        const J = H !== void 0 ? H.id : D.id, Q = u.get(J);
        Q !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const le of Q) {
              const te = se(le);
              _e(te) && (te.deleteID(Ur, J), te.hasNoIDsForEveryType() && Fs(te));
            }
          });
        });
      }
    },
    [c, a, u]
  ), x = ye(
    (D, H, J, Q) => {
      c.addComment(D, J), H && (a.update(() => {
        N(Q) && Hf(Q, Ur, D.id);
      }), y(!1));
    },
    [c, a]
  );
  z(() => {
    const D = [];
    let H;
    for (const J of p) {
      const Q = u.get(J);
      if (Q !== void 0)
        for (const le of Q) {
          const te = a.getElementByKey(le);
          te !== null && (te.classList.add("selected"), D.push(te), H = window.setTimeout(() => {
            v(!0);
          }, 0));
        }
    }
    return () => {
      H !== void 0 && window.clearTimeout(H);
      for (const J of D)
        J.classList.remove("selected");
    };
  }, [p, a, u]), z(() => {
    if (!a.hasNodes([nt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const D = /* @__PURE__ */ new Map();
    return Ge(
      Cf(
        a,
        nt,
        (H) => Wi(H.getTypedIDs()),
        (H, J) => {
          for (const [Q, le] of Object.entries(H.getTypedIDs()))
            le.forEach((te) => {
              J.addID(Q, te);
            });
        }
      ),
      a.registerMutationListener(
        nt,
        (H) => {
          a.getEditorState().read(() => {
            for (const [J, Q] of H) {
              const le = se(J);
              let te = [];
              Q === "destroyed" ? te = D.get(J) ?? [] : _e(le) && (te = le.getTypedIDs()[Ur] ?? []);
              for (const Ce of te) {
                let Ee = u.get(Ce);
                D.set(J, te), Q === "destroyed" ? Ee !== void 0 && (Ee.delete(J), Ee.size === 0 && u.delete(Ce)) : (Ee === void 0 && (Ee = /* @__PURE__ */ new Set(), u.set(Ce, Ee)), Ee.has(J) || Ee.add(J));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: H, tags: J }) => {
        H.read(() => {
          const Q = O();
          let le = !1, te = !1;
          if (N(Q)) {
            const Ce = Q.anchor.getNode();
            if (M(Ce)) {
              const Ee = Pb(Ce, Ur, Q.anchor.offset) ?? [];
              Ee !== null && (m(Ee), le = !0), Q.isCollapsed() || (f(Ce.getKey()), te = !0);
            }
          }
          le || m((Ce) => Ce.length === 0 ? Ce : []), te || f(null), !J.has("collaboration") && N(Q) && y(!1);
        });
      }),
      a.registerCommand(
        sf,
        () => {
          const H = window.getSelection();
          return H !== null && H.removeAllRanges(), y(!0), !0;
        },
        pn
      )
    );
  }, [a, u]);
  const F = () => {
    a.dispatchCommand(sf, void 0);
  };
  return /* @__PURE__ */ Te(fn, { children: [
    h && dn(
      /* @__PURE__ */ S(
        n1,
        {
          editor: a,
          cancelAddComment: A,
          submitAddComment: x
        }
      ),
      document.body
    ),
    d != null && !h && dn(
      /* @__PURE__ */ S(
        t1,
        {
          anchorKey: d,
          editor: a,
          showComments: k,
          onAddComment: F
        }
      ),
      document.body
    ),
    n !== null && dn(
      /* @__PURE__ */ S(
        Gr,
        {
          className: `CommentPlugin_ShowCommentsButton ${k ? "active" : ""}`,
          onClick: () => v(!k),
          title: k ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ S("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    k && dn(
      /* @__PURE__ */ S(
        o1,
        {
          comments: l,
          submitAddComment: x,
          deleteCommentOrThread: E,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function c1() {
  const e = Y(void 0), t = ye((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function l1(e, t) {
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
function u1(e, t) {
  z(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      l1(r, t);
    };
  }, [t, e]);
}
const eP = vn(function(t, r) {
  const n = Y(null), i = Y(!0), s = Y(null), [o, a] = fe(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: m, view: h } = {} } = t, y = (m ?? !1) || ts(h), [k, v] = c1();
  u1(f, k), z(() => {
    if (process.env.NODE_ENV !== "production") {
      const E = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(E), p || console.warn(E);
    }
  }, [p]), xc(r, () => ({
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
    applyUpdate(E, x) {
      n.current?.applyUpdate(E, x);
    },
    replaceEmbedUpdate(E, x) {
      return n.current?.replaceEmbedUpdate(E, x);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    getSelectedParaMarker() {
      return n.current?.getSelectedParaMarker();
    },
    setSelection(E) {
      n.current?.setSelection(E);
    },
    setAnnotation(E, x, F, D, H) {
      typeof D == "function" || D === void 0 ? n.current?.setAnnotation(E, x, F, D, H) : n.current?.setAnnotation(E, x, F, D);
    },
    removeAnnotation(E, x) {
      n.current?.removeAnnotation(E, x);
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
    replaceCharacterMarker(E, x) {
      return n.current?.replaceCharacterMarker(E, x) ?? !1;
    },
    extendCharacterMarker(E, x) {
      return n.current?.extendCharacterMarker(E, x) ?? !1;
    },
    insertMarker(E) {
      return n.current?.insertMarker(E);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(E, x) {
      return n.current?.applyMarkerMenuSelection(E, x);
    },
    splitParagraphWithMarker(E) {
      n.current?.splitParagraphWithMarker(E);
    },
    commitTypedMarker(E, x) {
      return n.current?.commitTypedMarker(E, x) ?? !1;
    },
    commitTypedCloser(E) {
      return n.current?.commitTypedCloser(E) ?? !1;
    },
    insertNote(E, x, F) {
      n.current?.insertNote(E, x, F);
    },
    selectNote(E) {
      n.current?.selectNote(E);
    },
    getNoteOps(E) {
      return n.current?.getNoteOps(E);
    },
    setComments(E) {
      k.current?.setComments(E), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const C = ye(
    (E, x, F, D) => {
      if (!u) return;
      const H = k.current?.getComments();
      u(E, H, x, F, D);
    },
    [k, u]
  ), A = ye(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const E = k.current?.getComments();
    l(E);
  }, [k, i, l]);
  return z(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ S($y, { children: /* @__PURE__ */ Te(ym, { ref: n, onUsjChange: C, ...f, children: [
    /* @__PURE__ */ S(
      a1,
      {
        setCommentStore: v,
        onChange: A,
        showCommentsContainerRef: y ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ S("div", { ref: s, className: "comment-container" })
  ] }) });
});
function un(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function d1(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function f1(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const p1 = /^[#\w().,%/\s-]+$/;
function br(e) {
  return e != null;
}
const h1 = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, g1 = {
  left: "right",
  right: "left"
}, m1 = "var(--usj-font-fallback, serif)";
function vm(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${d1(i)}"`).join(", ")}, ${m1}`;
}
const Tc = ".editor-input.usfm", y1 = /^[\w.#[\]="':()>+~*,\s-]+$/;
function b1(e) {
  return y1.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Tc}".`
  ), Tc);
}
function k1(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(vm(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (p1.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), br(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), br(t.firstLineIndent) && s.push(`text-indent: ${un(t.firstLineIndent * 20 * r)}vw`), br(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${un(t.leftMargin * 20 * r)}vw`), br(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${un(t.rightMargin * 20 * r)}vw`
  ), br(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${un(t.spaceBefore * r)}pt`), br(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${un(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = h1[n ? g1[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const af = { c: 150, ca: 133, cp: 150 };
function cf(e, t) {
  return e && br(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function T1(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && br(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = cf(e.markers.c, af.c);
  return ["ca", "cp"].map((i) => {
    const s = cf(
      e.markers[i],
      af[i]
    ), o = un(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function tP(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Tc } = t, s = b1(i), o = [], a = [];
  e.defaultFont && a.push(vm(e.defaultFont)), br(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${un(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = k1(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${f1(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...T1(e, s)), o.join(`
`);
}
export {
  vh as BLOCK_VERSE_VIEW_MODE,
  T as CategoryType,
  Z1 as Editorial,
  Ls as GENERATOR_NOTE_CALLER,
  wf as HIDDEN_NOTE_CALLER,
  eP as Marginal,
  b as MarkerType,
  Ch as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Sh as STANDARD_VIEW_MODE,
  Ws as defaultStyleInfo,
  Q1 as directionToNames,
  e_ as filterAndRankItems,
  tP as generateUsjCss,
  Y1 as getDefaultViewMode,
  No as getDefaultViewOptions,
  $M as getEnterMenuItems,
  RM as getMarkerMenuItems,
  X1 as getViewMode,
  Mh as getViewOptions,
  ts as isBlockVerseLayout,
  Lr as isInsertEmbedOpOfType,
  p_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
