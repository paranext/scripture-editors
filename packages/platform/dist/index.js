import { jsx as v, jsxs as Ce, Fragment as kn } from "react/jsx-runtime";
import { forwardRef as wn, useState as pe, useRef as X, useCallback as de, useEffect as j, useMemo as De, memo as gy, createContext as vf, useContext as Cf, Children as my, isValidElement as yy, cloneElement as by, useImperativeHandle as Pc, useLayoutEffect as gs } from "react";
import { assertSafeKey as Ve, isValidBookCode as ky, MARKER_OBJECT_PROPS as Ty, USJ_VERSION as kr, USJ_TYPE as Tr, usjJsonPathFromIndexes as jr, isUsjTextContentLocation as wc, indexesFromUsjJsonPath as ms, isUsjAttributeKeyLocation as du, isUsjAttributeMarkerLocation as xy, isUsjClosingAttributeMarkerLocation as _y, isUsjMarkerLocation as vy, isUsjClosingMarkerLocation as Cy, isUsjPropertyValueLocation as Sy, getUsjDocumentLocationTypeName as My, EMPTY_USJ as Sf } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as Be, $parseSerializedNode as ys, DecoratorNode as bs, ElementNode as er, isHTMLElement as Nn, createState as vo, $getState as te, $setState as Tt, $isRangeSelection as w, $isElementNode as $, $isTextNode as C, ParagraphNode as Nc, TextNode as je, $createTextNode as me, $getSelection as O, $getCommonAncestor as Ey, $isLineBreakNode as Co, NODE_STATE_KEY as ks, $getEditor as Ts, $hasUpdateTag as Ay, $getNodeByKey as Z, $getRoot as Se, $createRangeSelection as Oc, $createPoint as fu, $getCharacterOffsets as Mf, KEY_DOWN_COMMAND as Ar, COMMAND_PRIORITY_HIGH as Ue, HISTORY_MERGE_TAG as Ef, CLICK_COMMAND as So, COMMAND_PRIORITY_EDITOR as Tn, isDOMNode as Af, $getNearestNodeFromDOMNode as xs, CONTROLLED_TEXT_INSERTION_COMMAND as qc, PASTE_COMMAND as yr, COMMAND_PRIORITY_CRITICAL as br, CUT_COMMAND as xn, DROP_COMMAND as Rc, DELETE_CHARACTER_COMMAND as Py, DELETE_WORD_COMMAND as wy, DELETE_LINE_COMMAND as Ny, $isDecoratorNode as Pf, COPY_COMMAND as Mo, COMMAND_PRIORITY_NORMAL as ri, SELECTION_CHANGE_COMMAND as xr, BLUR_COMMAND as $c, $addUpdateTag as Hr, SKIP_DOM_SELECTION_TAG as Oy, CLEAR_HISTORY_COMMAND as qy, COMMAND_PRIORITY_LOW as Ft, $setSelection as Zi, $getPreviousSelection as Ry, $isRootOrShadowRoot as $y, CAN_UNDO_COMMAND as Iy, CAN_REDO_COMMAND as Ly, $isNodeSelection as wf, DRAGSTART_COMMAND as Dy, $createNodeSelection as Nf, getDOMSelectionFromTarget as Uy, $onUpdate as Fy, KEY_ENTER_COMMAND as Of, LineBreakNode as qf, $copyNode as Ky, FOCUS_COMMAND as zy, $isRootNode as jy, KEY_ESCAPE_COMMAND as Rf, INSERT_PARAGRAPH_COMMAND as Js, createCommand as $f, HISTORIC_TAG as Ic, createEditor as By, UNDO_COMMAND as If, REDO_COMMAND as Lf, CLEAR_EDITOR_COMMAND as Vy } from "lexical";
import { addClassNamesToElement as Vn, removeClassNamesFromElement as aa, $findMatchingParent as it, $dfsIterator as Df, $dfs as hi, mergeRegister as Ye, registerNestedElementResolver as Uf, $unwrapNode as La, IS_APPLE as Ys } from "@lexical/utils";
import { useLexicalNodeSelection as Wy } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as $t } from "fast-equals";
import Ki from "quill-delta";
import { useLexicalComposerContext as ce } from "@lexical/react/LexicalComposerContext";
import { copyToClipboard as Hy, $getHtmlContent as Gy, $getLexicalContent as Jy } from "@lexical/clipboard";
import { TreeView as Yy } from "@lexical/react/LexicalTreeView";
import * as Xy from "react-dom";
import { createPortal as bn } from "react-dom";
import { LexicalComposer as Ff } from "@lexical/react/LexicalComposer";
import { ContentEditable as Kf } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as zf } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as jf } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Bf } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Qy } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as Zy, createDOMRange as eb, createRectsFromDOMRange as tb } from "@lexical/selection";
import { autoUpdate as rb, computePosition as nb, shift as ib, flip as sb } from "@floating-ui/dom";
import { $generateNodesFromDOM as ob } from "@lexical/html";
import { AutoFocusPlugin as ab } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as cb } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Vf, LexicalCollaboration as lb } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as ub } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as db } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as fb, $isRootTextContentEmpty as pb } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as hb } from "@lexical/yjs";
import { Array as pu, Map as hu, YArrayEvent as gb } from "yjs";
const ca = (e) => Be(ys(e)), mb = {
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
function Wf(e) {
  return mb[e];
}
const q = " ", Xs = "​", zt = q, Lc = `${q}|`, or = "p", Qs = "+", Hf = "-", _s = "immutable-note-caller", Zs = "chapter", Da = "verse", gu = "invalid", yb = "text-spacing", bb = "formatted-font", kb = "marker-", Gf = "external-usj-mutation", Jf = "selection-change", Gr = "cursor-change", Ua = "annotation-change", es = "delta-change", Yf = "marker-settle", Tb = [
  Gf,
  Jf,
  Gr,
  Ua,
  es
], _n = "zmsc-s", ni = "zmsc-e", xb = [_n, ni], _b = [
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
  _n,
  ni
], Xf = 1, Dc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], vb = Dc.filter((e) => e !== "sid" && e !== "eid");
class Xt extends bs {
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
    return new Xt(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return Zf().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (_b.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: Xf
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Qf(e) {
  return xb.includes(e);
}
function Zf(e, t, r, n, i) {
  return Be(new Xt(e, t, r, n, void 0, i));
}
function Ke(e) {
  return e instanceof Xt;
}
const Uc = "f", Cb = [
  // Footnote
  Uc,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function zi(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const Sb = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], ep = 1;
class Ne extends er {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Uc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (zi(t) === "crossref" ? Hf : Qs), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Ne(r, n, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => Eb(t) ? {
        conversion: Mb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Fc().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Cb.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", zi(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", zi(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Nn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", zi(this.getMarker()))), { element: r };
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
      version: ep
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
function Mb(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Fc(t, r, n) };
}
function Fc(e, t, r, n, i) {
  return Be(new Ne(e, t, r, n, i));
}
function Eb(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Ne.isValidMarker(t) && e.classList.contains(Ne.getType());
}
function z(e) {
  return e instanceof Ne;
}
var k;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(k || (k = {}));
var y;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(y || (y = {}));
const Fa = {
  id: {
    category: k.FileIdentification,
    type: y.Paragraph,
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
    type: y.Paragraph,
    description: "File markup version information",
    hasEndMarker: !1,
    children: void 0
  },
  ide: {
    category: k.FileIdentification,
    type: y.Paragraph,
    description: "File encoding information",
    hasEndMarker: !1,
    children: {
      Remarks: ["rem", "sts"]
    }
  },
  h: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Running header text for a book (basic)",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h1: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Running header text",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h2: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Running header text, left side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h3: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Running header text, right side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  toc1: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc2: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc3: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  toca1: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Alternative language long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca2: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Alternative language short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca3: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Alternative language book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  rem: {
    category: k.Remarks,
    type: y.Paragraph,
    description: "Comments and remarks",
    hasEndMarker: !1,
    children: void 0
  },
  sts: {
    category: k.Remarks,
    type: y.Paragraph,
    description: "Status of this file",
    hasEndMarker: !1,
    children: void 0
  },
  restore: {
    category: k.Remarks,
    type: y.Paragraph,
    description: "Project restore information",
    hasEndMarker: !1,
    children: void 0
  },
  imt: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction major title, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt1: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction major title, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt2: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction major title, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt3: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction major title, level 3",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt4: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction major title, level 4 (usually within parenthesis)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte1: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte2: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction major title at introduction end, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is: {
    category: k.Introduction,
    type: y.Paragraph,
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
    type: y.Paragraph,
    description: "Introduction section heading, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is2: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction section heading, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  iot: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction outline title (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  io: {
    category: k.Introduction,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Character,
    description: "Introduction references range for outline entry; for marking references separately",
    hasEndMarker: !0,
    children: void 0
  },
  ip: {
    category: k.Introduction,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
    description: "Introduction blank line",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"]
    }
  },
  iq: {
    category: k.Introduction,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
    description: "Introduction explanatory or bridge text (e.g. explanation of missing book in Short Old Testament)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  iqt: {
    category: k.Introduction,
    type: y.Character,
    description: "For quoted scripture text appearing in the introduction",
    hasEndMarker: !0,
    children: void 0
  },
  ie: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction ending marker",
    hasEndMarker: !1,
    children: void 0
  },
  c: {
    category: k.DivisionMarks,
    type: y.Paragraph,
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
    type: y.Character,
    description: "Second (alternate) chapter number (for coding dual versification; useful for places where different traditions of chapter breaks need to be supported in the same translation)",
    hasEndMarker: !0,
    children: void 0
  },
  cp: {
    category: k.DivisionMarks,
    type: y.Paragraph,
    description: "Published chapter number (chapter string that should appear in the published text)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"]
    }
  },
  cl: {
    category: k.DivisionMarks,
    type: y.Paragraph,
    description: "Chapter label used for translations that add a word such as 'Chapter' before chapter numbers (e.g. Psalms). The subsequent text is the chapter label.",
    hasEndMarker: !1,
    children: void 0
  },
  cd: {
    category: k.DivisionMarks,
    type: y.Paragraph,
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
    type: y.Character,
    description: "A verse number (Necessary for normal paratext operation) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  va: {
    category: k.DivisionMarks,
    type: y.Character,
    description: "Second (alternate) verse number (for coding dual numeration in Psalms; see also NRSV Exo 22.1-4)",
    hasEndMarker: !0,
    children: void 0
  },
  vp: {
    category: k.DivisionMarks,
    type: y.Character,
    description: "Published verse marker (verse string that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  p: {
    category: k.Paragraphs,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
    description: "Letter Closing",
    hasEndMarker: !1,
    children: {
      SpecialText: ["tl", "sig", "pn", "png", "addpn", "add"]
    }
  },
  pmo: {
    category: k.Paragraphs,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Character,
    description: "Poetry text, Selah",
    hasEndMarker: !0,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  qa: {
    category: k.Poetry,
    type: y.Paragraph,
    description: "Poetry text, Acrostic marker/heading",
    hasEndMarker: !1,
    children: void 0
  },
  qac: {
    category: k.Poetry,
    type: y.Character,
    description: "Poetry text, Acrostic markup of the first character of a line of acrostic poetry",
    hasEndMarker: !0,
    children: void 0
  },
  qm: {
    category: k.Poetry,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
    description: "Poetry text stanza break (e.g. stanza break) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  mt: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "The main title of the book (if single level)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt1: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "The main title of the book (if multiple levels) (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt2: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "A secondary title usually occurring before the main title (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt3: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "A secondary title occurring after the main title",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt4: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "A small secondary title sometimes occurring within parentheses",
    hasEndMarker: !1,
    children: void 0
  },
  mte: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  mte1: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte2"]
    }
  },
  mte2: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "A secondary title occurring before or after the 'ending' main title",
    hasEndMarker: !1,
    children: void 0
  },
  ms: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
    description: "A major section division heading, level 3",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mr"],
      Footnotes: ["f", "fe"]
    }
  },
  mr: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "A major section division references range heading (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  s: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
    description: "A section division references range heading",
    hasEndMarker: !1,
    children: void 0
  },
  r: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "Parallel reference(s) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  sp: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  sd1: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: void 0
  },
  sd2: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "Vertical space used to divide the text into sections, level 2",
    hasEndMarker: !1,
    children: void 0
  },
  sd3: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "Vertical space used to divide the text into sections, level 3",
    hasEndMarker: !1,
    children: void 0
  },
  sd4: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "Vertical space used to divide the text into sections, level 4",
    hasEndMarker: !1,
    children: void 0
  },
  lh: {
    category: k.Lists,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Character,
    description: "List entry total text",
    hasEndMarker: !0,
    children: void 0
  },
  lik: {
    category: k.Lists,
    type: y.Character,
    description: "Structured list entry key text",
    hasEndMarker: !0,
    children: void 0
  },
  liv: {
    category: k.Lists,
    type: y.Character,
    description: "Structured list entry value 1 content (if single value)",
    hasEndMarker: !0,
    children: void 0
  },
  liv1: {
    category: k.Lists,
    type: y.Character,
    description: "Structured list entry value 1 content (if multiple values)",
    hasEndMarker: !0,
    children: void 0
  },
  liv2: {
    category: k.Lists,
    type: y.Character,
    description: "Structured list entry value 2 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv3: {
    category: k.Lists,
    type: y.Character,
    description: "Structured list entry value 3 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv4: {
    category: k.Lists,
    type: y.Character,
    description: "Structured list entry value 4 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv5: {
    category: k.Lists,
    type: y.Character,
    description: "Structured list entry value 5 content",
    hasEndMarker: !0,
    children: void 0
  },
  f: {
    category: k.Footnotes,
    type: y.Note,
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
    type: y.Note,
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
    type: y.Character,
    description: "The origin reference for the footnote (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  ft: {
    category: k.Footnotes,
    type: y.Character,
    description: "Footnote text, Protocanon (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fk: {
    category: k.Footnotes,
    type: y.Character,
    description: "A footnote keyword (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fq: {
    category: k.Footnotes,
    type: y.Character,
    description: "A footnote scripture quote or alternate rendering (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fqa: {
    category: k.Footnotes,
    type: y.Character,
    description: "A footnote alternate rendering for a portion of scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  fl: {
    category: k.Footnotes,
    type: y.Character,
    description: "A footnote label text item, for marking or 'labelling' the type or alternate translation being provided in the note.",
    hasEndMarker: !0,
    children: void 0
  },
  fw: {
    category: k.Footnotes,
    type: y.Character,
    description: "A footnote witness list, for distinguishing a list of sigla representing witnesses in critical editions.",
    hasEndMarker: !0,
    children: void 0
  },
  fp: {
    category: k.Footnotes,
    type: y.Character,
    description: "A Footnote additional paragraph marker",
    hasEndMarker: !0,
    children: void 0
  },
  fv: {
    category: k.Footnotes,
    type: y.Character,
    description: "A verse number within the footnote text",
    hasEndMarker: !0,
    children: void 0
  },
  fdc: {
    category: k.Footnotes,
    type: y.Character,
    description: "Footnote text, applies to Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  fm: {
    category: k.Footnotes,
    type: y.Character,
    description: "An additional footnote marker location for a previous footnote",
    hasEndMarker: !0,
    children: void 0
  },
  x: {
    category: k.CrossReferences,
    type: y.Note,
    description: "A list of cross references (basic)",
    hasEndMarker: !0,
    children: {
      CrossReferences: ["xo", "xop", "xt", "xta", "xk", "xq", "xot", "xnt", "xdc"],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  xo: {
    category: k.CrossReferences,
    type: y.Character,
    description: "The cross reference origin reference (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xop: {
    category: k.CrossReferences,
    type: y.Character,
    description: "Published cross reference origin reference (origin reference that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  xt: {
    category: k.CrossReferences,
    type: y.Character,
    description: "The cross reference target reference(s), protocanon only (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xta: {
    category: k.CrossReferences,
    type: y.Character,
    description: "Cross reference target references added text",
    hasEndMarker: !0,
    children: void 0
  },
  xk: {
    category: k.CrossReferences,
    type: y.Character,
    description: "A cross reference keyword",
    hasEndMarker: !0,
    children: void 0
  },
  xq: {
    category: k.CrossReferences,
    type: y.Character,
    description: "A cross-reference quotation from the scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  xot: {
    category: k.CrossReferences,
    type: y.Character,
    description: "Cross-reference target reference(s), Old Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xnt: {
    category: k.CrossReferences,
    type: y.Character,
    description: "Cross-reference target reference(s), New Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xdc: {
    category: k.CrossReferences,
    type: y.Character,
    description: "Cross-reference target reference(s), Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  rq: {
    category: k.CrossReferences,
    type: y.Character,
    description: "A cross-reference indicating the source text for the preceding quotation.",
    hasEndMarker: !0,
    children: void 0
  },
  qt: {
    category: k.SpecialText,
    type: y.Character,
    description: "For Old Testament quoted text appearing in the New Testament (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  nd: {
    category: k.SpecialText,
    type: y.Character,
    description: "For name of deity (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  tl: {
    category: k.SpecialText,
    type: y.Character,
    description: "For transliterated words",
    hasEndMarker: !0,
    children: void 0
  },
  dc: {
    category: k.SpecialText,
    type: y.Character,
    description: "Deuterocanonical/LXX additions or insertions in the Protocanonical text",
    hasEndMarker: !0,
    children: void 0
  },
  bk: {
    category: k.SpecialText,
    type: y.Character,
    description: "For the quoted name of a book",
    hasEndMarker: !0,
    children: void 0
  },
  sig: {
    category: k.SpecialText,
    type: y.Character,
    description: "For the signature of the author of an Epistle",
    hasEndMarker: !0,
    children: void 0
  },
  pn: {
    category: k.SpecialText,
    type: y.Character,
    description: "For a proper name",
    hasEndMarker: !0,
    children: void 0
  },
  png: {
    category: k.SpecialText,
    type: y.Character,
    description: "For a geographic proper name",
    hasEndMarker: !0,
    children: void 0
  },
  addpn: {
    category: k.SpecialText,
    type: y.Character,
    description: "For chinese words to be dot underline & underline",
    hasEndMarker: !0,
    children: void 0
  },
  wj: {
    category: k.SpecialText,
    type: y.Character,
    description: "For marking the words of Jesus",
    hasEndMarker: !0,
    children: void 0
  },
  k: {
    category: k.SpecialText,
    type: y.Character,
    description: "For a keyword",
    hasEndMarker: !0,
    children: void 0
  },
  sls: {
    category: k.SpecialText,
    type: y.Character,
    description: "To represent where the original text is in a secondary language or from an alternate text source",
    hasEndMarker: !0,
    children: void 0
  },
  ord: {
    category: k.SpecialText,
    type: y.Character,
    description: "For the text portion of an ordinal number",
    hasEndMarker: !0,
    children: void 0
  },
  add: {
    category: k.SpecialText,
    type: y.Character,
    description: "For a translational addition to the text",
    hasEndMarker: !0,
    children: void 0
  },
  lit: {
    category: k.SpecialText,
    type: y.Paragraph,
    description: "For a comment or note inserted for liturgical use",
    hasEndMarker: !1,
    children: void 0
  },
  no: {
    category: k.CharacterStyling,
    type: y.Character,
    description: "A character style, use normal text",
    hasEndMarker: !0,
    children: void 0
  },
  it: {
    category: k.CharacterStyling,
    type: y.Character,
    description: "A character style, use italic text",
    hasEndMarker: !0,
    children: void 0
  },
  bd: {
    category: k.CharacterStyling,
    type: y.Character,
    description: "A character style, use bold text",
    hasEndMarker: !0,
    children: void 0
  },
  bdit: {
    category: k.CharacterStyling,
    type: y.Character,
    description: "A character style, use bold + italic text",
    hasEndMarker: !0,
    children: void 0
  },
  em: {
    category: k.CharacterStyling,
    type: y.Character,
    description: "A character style, use emphasized text style",
    hasEndMarker: !0,
    children: void 0
  },
  sc: {
    category: k.CharacterStyling,
    type: y.Character,
    description: "A character style, for small capitalization text",
    hasEndMarker: !0,
    children: void 0
  },
  sup: {
    category: k.CharacterStyling,
    type: y.Character,
    description: "A character style, for superscript text. Typically for use in critical edition footnotes.",
    hasEndMarker: !0,
    children: void 0
  },
  pb: {
    category: k.Breaks,
    type: y.Paragraph,
    description: "Page Break used for new reader portions and children's bibles where content is controlled by the page",
    hasEndMarker: !1,
    children: void 0
  }
}, dn = {
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
}, mu = {
  p: { children: dn },
  q: { children: dn },
  q1: { children: dn },
  q2: { children: dn },
  q3: { children: dn },
  q4: { children: dn },
  b: { children: dn },
  qm: {
    children: {
      Paragraphs: { add: ["p"], remove: [] }
    }
  },
  c: {
    type: y.Paragraph,
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
    type: y.Character,
    description: "A wordlist/glossary/dictionary entry marker for study/analysis purposes",
    hasEndMarker: !0
  },
  rb: {
    category: k.SpecialFeatures,
    type: y.Character,
    description: "A ruby glossing marker for study/analysis purposes",
    hasEndMarker: !0
  },
  jmp: {
    category: k.SpecialFeatures,
    type: y.Character,
    description: "A hyperlink marker for study/analysis purposes",
    hasEndMarker: !0
  },
  // The generated table has no `fig`, but `usfm.sty` does (and so does the stylesheet data every
  // project supplies). Without an entry here, a document parsed BEFORE its project stylesheet
  // resolves falls back to this table, reads `\fig` as an unknown marker, and breaks the figure
  // into its own paragraph with the closer stranded as unmatched.
  fig: {
    category: k.SpecialFeatures,
    type: y.Character,
    description: "Illustration [Columns to span, height, filename, caption text]",
    hasEndMarker: !0
  }
};
function ar(e) {
  const t = Object.hasOwn(Fa, e) ? Fa[e] : void 0, r = Object.hasOwn(mu, e) ? mu[e] : void 0;
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
const tp = "v", rp = "c", fn = "fig", yu = "tr", Ka = "esb", np = "esbe", Ab = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Pb = {
  "": "start",
  c: "center",
  r: "end"
};
function wb(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function bu(e) {
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
const Nb = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Ob(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Xs && s + 1 < e.length && bu(e[s + 1]) || (bu(o) ? (r || (i = t.length, t += o), r = !0) : Nb.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function qb(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function Rb(e, t) {
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
const $b = /^(?:qt[1-5]?|ts)-[se]$/;
function Eo(e) {
  return $b.test(e) || Qf(e);
}
function la(e, t) {
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
function Ib(e, t, r) {
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
      const m = e.indexOf("\\", i), b = m === -1 ? e.length : m;
      a(Ob(e.slice(i, b))), i = b;
      continue;
    }
    const c = i, { name: l, next: u } = Rb(e, i + 1);
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
    if (l === tp) {
      const { word: m, next: b } = la(e, i);
      i = b, n.push({ kind: "verse", number: m });
      continue;
    }
    if (l === rp) {
      const { word: m, next: b } = la(e, i);
      i = b, s = void 0, n.push({ kind: "chapter", number: m });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, g = t(p)?.type;
    if (g === y.Note || g === void 0 && Ne.isValidMarker(l)) {
      const { word: m, next: b } = la(e, i);
      i = b, s = l, n.push({ kind: "note", marker: l, caller: m || "+" });
      continue;
    }
    if (g === y.Milestone || g === void 0 && Eo(l)) {
      const m = Bb(e, c, l, i);
      if (m)
        n.push(m.token), m.ejectedText && o(m.ejectedText), i = m.next;
      else {
        const b = e.indexOf("\\", i), _ = b === -1 ? e.length : b;
        o(e.slice(c, _)), i = _;
      }
      continue;
    }
    g === y.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : g === y.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : eo(p) ? (d(), eo(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Ka || l === np ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const ku = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function eo(e) {
  return Object.hasOwn(ku, e) ? ku[e] : void 0;
}
function Lb(e) {
  return eo(e) !== void 0;
}
const Db = /([-\w]+)\s*=\s*"(.*?)"/g, Ub = /[\s\u200B]*[\n\r][\s\u200B]*/g, ip = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function vs(e) {
  return ip[e];
}
const Fb = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Kb(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function Ao(e, t, r = ip[t]) {
  const n = e.replace(Ub, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Db)];
  if (s.length > 0) {
    if (!Kb(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      Fb.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function Cs(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function zb(e) {
  const t = Pr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function jb(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = Ao(e.slice(n + 1, i), r, Cs(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Bb(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Ao(s.slice(o + 1), r, Cs(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = jb(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function gr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", q);
}
function pn(e) {
  return e.content || (e.content = []), e.content;
}
function Pr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u;
  const d = () => u ? pn(u) : r;
  let f = !1;
  const p = () => {
    if (s)
      return o.length > a ? pn(o[o.length - 1].object) : pn(s);
    if (o.length > 0)
      return pn(o[o.length - 1].object);
    if (!i) {
      if (f && !n)
        return d();
      i = { type: "para", marker: or, content: [] }, d().push(i);
    }
    return pn(i);
  }, g = (ee) => {
    const K = p();
    typeof ee == "string" && typeof K[K.length - 1] == "string" ? K[K.length - 1] = K[K.length - 1] + ee : K.push(ee);
  }, m = (ee) => {
    for (let K = ee; K < o.length; K += 1) {
      const re = o[K].object;
      re.closed = "false";
    }
  }, b = () => {
    m(0), o.length = 0;
  }, _ = (ee) => {
    s && (o.length > a && (m(a), o.length = a), a = 0, ee || (s.closed = "false"), s = void 0);
  }, E = () => {
    c = void 0, l = void 0;
  }, M = (ee) => {
    u && (ee || (u.closed = "false"), u = void 0);
  };
  let N, S = "", T;
  const F = () => {
    S && g(gr(S)), S = "";
  }, U = (ee = !1) => {
    N?.type === "sidebar" ? S = "" : ee && S.endsWith(`
`) && (S = S.slice(0, -1)), N = void 0, F();
  }, G = () => {
    if (!T)
      return;
    const ee = { type: "char", marker: T.marker, content: [] };
    T.value && (ee.content = [gr(T.value)]), p().push(ee), o.push({ object: ee }), T = void 0;
  }, J = (ee, K) => {
    f = !1, E(), b(), _(!1), i = { type: "para", marker: ee, content: [] }, K && (i.content = [gr(K)]), d().push(i);
  }, ae = () => {
    T && (J(T.marker, T.value), T = void 0);
  };
  let fe;
  const Y = () => {
    if (fe) {
      if (fe.shape === "para")
        J(fn, fe.value);
      else {
        const ee = { type: "char", marker: fn, content: [] };
        fe.value && (ee.content = [gr(fe.value)]), p().push(ee), o.push({ object: ee });
      }
      fe = void 0;
    }
  }, Ae = Ib(e, t?.getMarker ?? ar, n);
  for (let ee = 0; ee < Ae.length; ee++) {
    const K = Ae[ee];
    if (T) {
      if (K.kind === "text") {
        T.value += K.text;
        continue;
      }
      if (T.shape === "char" && K.kind === "end" && K.marker.replace(/^\+/, "") === T.marker) {
        if (T.value.trim() === "") {
          p().push({ type: "char", marker: T.marker, content: [] }), T = void 0, U();
          continue;
        }
        Object.assign(T.target, {
          [T.attrName]: gr(T.value.trim())
        });
        const re = T.marker;
        if (T = void 0, re === "ca") {
          const $e = Ae[ee + 1];
          $e?.kind === "text" && /^[\s\u200B]*$/.test($e.text) && ee++;
        }
        continue;
      }
      if (T.shape === "para" && (K.kind === "para" || K.kind === "chapter")) {
        const re = T.value.replace(/[\s\u200B]+$/, "");
        re === "" ? (J(T.marker), T = void 0) : (Object.assign(T.target, { [T.attrName]: gr(re) }), T = void 0);
      } else {
        N = void 0, (K.kind === "para" || K.kind === "chapter") && T.value.endsWith(`
`) && (T.value = T.value.slice(0, -1)), T.shape === "para" ? ae() : G(), ee--;
        continue;
      }
    }
    if (fe) {
      if (K.kind === "text" || K.kind === "optbreak") {
        fe.value += K.kind === "text" ? K.text : "//";
        continue;
      }
      if (K.kind === "end" && K.marker.replace(/^\+/, "") === fn) {
        const re = fe.value.indexOf("|"), $e = re >= 0 ? Ao(fe.value.slice(re + 1), fn) : void 0;
        if ($e) {
          const Qe = {};
          for (const [Ze, Mi] of Object.entries($e))
            Qe[Ze === "src" ? "file" : Ze] = Mi;
          const tr = {
            type: "figure",
            marker: fn,
            ...Qe
          }, le = fe.value.slice(0, re);
          le && (tr.content = [gr(le)]), g(tr), fe = void 0;
          continue;
        }
      }
      Y(), ee--;
      continue;
    }
    if (N)
      if (K.kind === "text") {
        if (K.text.includes(`
`) && /^[\s\u200B]*$/.test(K.text)) {
          S += K.text;
          continue;
        }
        U();
      } else if (K.kind === "charOpen" || K.kind === "para") {
        const re = K.kind === "para" || !K.isNested ? eo(K.marker) : void 0;
        if (re && re.targetTypes.includes(N.type)) {
          S = "", T = {
            target: N,
            attrName: re.attrName,
            marker: K.marker,
            shape: re.shape,
            value: ""
          };
          continue;
        }
        U(K.kind === "para");
      } else
        U(K.kind === "chapter");
    if (!s && !n && (K.kind === "charOpen" && !K.isNested && K.marker === fn || K.kind === "para" && K.marker === fn)) {
      b(), fe = { shape: K.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (K.kind) {
      case "text": {
        let re = K.text;
        if (!s && re.endsWith(`
`)) {
          const $e = Ae[ee + 1];
          ($e === void 0 || $e.kind === "para" || $e.kind === "chapter") && (re = re.slice(0, -1));
        }
        re && g(gr(re));
        break;
      }
      case "para": {
        const re = !s && !n;
        if (re && K.marker === yu) {
          b(), c || (c = { type: "table", content: [] }, d().push(c)), l = { type: "table:row", marker: yu, content: [] }, pn(c).push(l), i = l, f = !1;
          break;
        }
        if (re && l) {
          const $e = Ab.exec(K.marker);
          if ($e && wb($e)) {
            b();
            const [, Qe, tr, le] = $e, Ze = {
              type: "table:cell",
              marker: le ? K.marker.slice(0, K.marker.indexOf("-")) : K.marker,
              align: Pb[Qe],
              content: []
            };
            le && (Ze.colspan = String(Number(le) + 1 - Number(tr))), pn(l).push(Ze), i = Ze;
            break;
          }
        }
        if (E(), !n && K.marker === Ka) {
          b(), _(!1), M(!1), u = { type: "sidebar", marker: Ka, content: [] }, r.push(u), i = void 0, N = u, f = !1;
          break;
        }
        if (K.marker === np && u) {
          b(), _(!1), M(!0), i = void 0;
          break;
        }
        J(K.marker);
        break;
      }
      case "verse": {
        _(!1);
        const re = { type: "verse", marker: tp, number: K.number };
        g(re), N = re;
        break;
      }
      case "chapter": {
        b(), _(!1), E(), M(!1), i = void 0;
        const re = {
          type: "chapter",
          marker: rp,
          number: K.number
        };
        r.push(re), N = re, f = !0;
        break;
      }
      case "note": {
        _(!1);
        const re = p();
        s = { type: "note", marker: K.marker, caller: K.caller, content: [] }, a = o.length, re.push(s), N = s;
        break;
      }
      case "charOpen": {
        if (!K.isNested) {
          const Qe = s ? a : 0;
          m(Qe), o.length = Qe;
        }
        const re = p(), $e = { type: "char", marker: K.marker, content: [] };
        re.push($e), o.push({ object: $e });
        break;
      }
      case "end": {
        const re = K.marker.replace(/^\+/, ""), $e = s ? a : 0, Qe = o.findLastIndex((tr, le) => le >= $e && tr.object.marker === re);
        Qe >= 0 ? (Vb(o[Qe].object), m(Qe + 1), o.length = Qe) : s && s.marker === re ? _(!0) : (m($e), o.length = $e, g({ type: "unmatched", marker: `${K.marker}*` }));
        break;
      }
      case "milestone":
        g({ type: "ms", marker: K.marker, ...K.attributes });
        break;
      case "optbreak":
        g({ type: "optbreak" });
        break;
    }
  }
  if (fe && Y(), T)
    if (T.shape === "para") {
      const ee = T.value.replace(/[\s\u200B]+$/, "");
      ee === "" ? J(T.marker) : Object.assign(T.target, { [T.attrName]: gr(ee) }), T = void 0;
    } else
      T.value.endsWith(`
`) && (T.value = T.value.slice(0, -1)), G();
  b(), _(!1), M(!1);
  const Pe = (ee) => {
    for (const K of ee)
      typeof K != "string" && K.content && (Pe(K.content), K.content.length === 0 && delete K.content);
  };
  return Pe(r), r;
}
function Vb(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = Ao(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const vn = vo("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Jr = vo("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), se = vo("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), lr = "marker-trailing-space", sp = 1, Wb = "marker", Kc = vo("isGutterMarker", {
  parse: (e) => e === !0
});
class wr extends bs {
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
    return new wr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => Yb(t) ? {
        conversion: Hb,
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
    return r && Nn(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: sp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Hb(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: _r(t, r) };
}
function _r(e, t) {
  return Be(new wr(e, t));
}
function Gb(e) {
  return Tt(_r(Wb, e), Kc, !0);
}
function Jb(e) {
  return Ct(e) && te(e, Kc);
}
function Yb(e) {
  return e?.tagName === "span";
}
function Ct(e) {
  return e instanceof wr;
}
function op(e) {
  return e?.type === wr.getType();
}
const Wr = "internal-comment", Xb = [Wr], ap = Object.freeze({}), za = Object.freeze({}), ja = Object.freeze({}), Ba = Object.freeze({}), Va = Object.freeze({}), Qb = 1, Wn = /* @__PURE__ */ new Map(), qi = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), Gn = /* @__PURE__ */ new Map();
class et extends er {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = ap, r, n, i, s, o) {
    super(o), this.__typedIDs = Us(t), this.__typedOnClicks = ua(r), this.__typedOnRemoves = da(n), this.__typedOnMouseEnters = fa(i), this.__typedOnMouseLeaves = pa(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Us(t.__typedIDs), n = ua(t.__typedOnClicks), i = da(t.__typedOnRemoves), s = fa(t.__typedOnMouseEnters), o = pa(t.__typedOnMouseLeaves);
    return new et(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Xb.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return ts().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: Qb
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      Vn(n, hn(t.theme.typedMark, a)), c.length > 1 && Vn(n, hn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Vn(n, hn("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = hn(n.theme.typedMark, s), d = hn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && Vn(r, u) : l === 0 && aa(r, u), c === 1 ? l === 2 && Vn(r, d) : l === 1 && aa(r, d));
      const f = new Set(o), p = new Set(a);
      for (const g of o)
        p.has(g) || aa(r, hn("annotationId", g));
      for (const g of a)
        f.has(g) || Vn(r, hn("annotationId", g));
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
    const r = this.getWritable(), n = Us(r.__typedIDs);
    r.__typedIDs = Us(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && to(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = ua(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return Te(t) ? Wn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = da(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Te(t) ? qi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = fa(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Te(t) ? Hn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = pa(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Te(t) ? Gn.get(t.getKey()) ?? {} : {};
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && to(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = ts(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Wn.delete(r.getKey()), qi.delete(r.getKey()), Hn.delete(r.getKey()), Gn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
    const n = Wn.get(this.getKey());
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
    const n = Hn.get(this.getKey());
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
    const n = Gn.get(this.getKey());
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === za) {
      const t = Wn.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      Wn.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    Wn.set(this.getKey(), this.__typedOnClicks);
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
    const i = Ur(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = Ur(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === za) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === ja) {
      const t = qi.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      qi.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    qi.set(this.getKey(), this.__typedOnRemoves);
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
    const i = Ur(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = Ur(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === ja) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Ba) {
      const t = Hn.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      Hn.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    Hn.set(this.getKey(), this.__typedOnMouseEnters);
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
    const i = Ur(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = Ur(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Ba) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Va) {
      const t = Gn.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Gn.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Gn.set(this.getKey(), this.__typedOnMouseLeaves);
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
    const i = Ur(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = Ur(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Va) {
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
    const i = Zb(t, r);
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
    for (; Te(t) && xu(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; Te(r) && xu(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = ek(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = tk(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = rk(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = nk(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Us(e = ap) {
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
function ua(e) {
  if (!e || e === za)
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
function da(e) {
  if (!e || e === ja)
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
function fa(e) {
  if (!e || e === Ba)
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
function pa(e) {
  if (!e || e === Va)
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
function Ur(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function Tu(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function Zb(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function xu(e, t) {
  const r = Tu(e), n = Tu(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function ek(e, t) {
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
function tk(e, t) {
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
function rk(e, t) {
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
function nk(e, t) {
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
function hn(e, t) {
  return `${e}-${t}`;
}
function _u(e) {
  return `external-${e}`;
}
function ts(e, t, r, n, i) {
  return Be(new et(e, t, r, n, i));
}
function Te(e) {
  return e instanceof et;
}
function cp(e) {
  return e?.type === et.getType();
}
function to(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function lp(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let g, m;
  for (let b = 0; b < u; b++) {
    const _ = a[b];
    if ($(m) && m.isParentOf(_))
      continue;
    const E = b === 0, M = b === u - 1;
    let N = null;
    if (C(_)) {
      const S = _.getTextContentSize(), T = E ? f : 0, F = M ? p : S;
      if (T === 0 && F === 0)
        continue;
      const U = _.splitText(T, F);
      N = U.length > 1 && (U.length === 3 || E && !M || F === S) ? U[1] : U[0];
    } else {
      if (Te(_))
        continue;
      $(_) && _.isInline() && (N = _);
    }
    if (N !== null) {
      if (N && N.is(g))
        continue;
      const S = N.getParent();
      (S == null || !S.is(g)) && (m = void 0), g = S, m === void 0 && (m = ts(), m.addID(t, r, n, i, s, o), N.insertBefore(m)), m.append(N);
    } else
      g = void 0, m = void 0;
  }
  t === Wr && $(m) && (d ? m.selectStart() : m.selectEnd());
}
function ik(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (Te(n))
      return n.getTypedIDs()[t];
    if (C(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (Te(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const sk = ["type", "marker", "content"], Wa = "unknown", up = 1, ok = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class On extends er {
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
    return new On(r, n, i, s);
  }
  static importDOM() {
    return {
      [Wa]: (t) => ck(t) ? {
        conversion: ak,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return zc().updateFromJSON(t);
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
    return ok.has(this.getTag());
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
    const t = document.createElement(Wa);
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
      version: up
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
function ak(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: zc(t, r) };
}
function zc(e, t, r) {
  return Be(new On(e, t, r));
}
function ck(e) {
  return e?.tagName.toLowerCase() === Wa;
}
function qe(e) {
  return e instanceof On;
}
const dp = 1, lk = "attribute-run";
function ha(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Nr extends er {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new Nr(r, n);
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
    t.classList.add(lk);
    const r = ha(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = ha(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = ha(this.__runKind);
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
  return Be(new Nr(e));
}
function ze(e) {
  return e instanceof Nr;
}
const rs = "id", pp = 1, uk = [
  "type",
  "marker",
  "code",
  "content"
];
class jt extends er {
  __marker = rs;
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
    return hp(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return ky(t);
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
      version: pp
    };
  }
}
function hp(e, t) {
  return Be(new jt(e, t));
}
function gt(e) {
  return e instanceof jt;
}
function gp(e) {
  return e?.type === jt.getType();
}
const ro = "c", mp = 1, dk = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Nt extends er {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = ro, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Nt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return yp().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Zs, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: mp
    };
  }
}
function yp(e, t, r, n, i) {
  return Be(new Nt(e, t, r, n, i));
}
function ve(e) {
  return e instanceof Nt;
}
function fk(e) {
  return e?.type === Nt.getType();
}
const bp = [
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
], kp = [
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
], pk = [
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
  ...bp,
  ...kp
], Tp = 1, hk = ["type", "marker", "content"];
class be extends er {
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
    return t !== void 0 && (pk.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && bp.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && kp.includes(t);
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
      span: (t) => mk(t) ? {
        conversion: gk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return vr().updateFromJSON(t);
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
    return vu(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), vu(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Nn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Tp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = vr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function vu(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function gk(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: vr(t) };
}
function vr(e, t) {
  return Be(new be(e, t));
}
function mk(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return be.isValidMarker(t) && e.classList.contains(be.getType());
}
function I(e) {
  return e instanceof be;
}
function yk(e) {
  return e?.type === be.getType();
}
const xp = 1, bk = "c", _p = "span";
class ur extends bs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = bk, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new ur(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => vp(t) ? {
        conversion: kk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return jc().updateFromJSON(t);
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
    const t = document.createElement(_p);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Zs, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Nn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Zs, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? Kt(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: xp
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
function kk(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: jc(t) };
}
function jc(e, t, r, n, i, s) {
  return Be(new ur(e, t, r, n, i, s));
}
function vp(e) {
  return e ? e.classList.contains(Zs) && e.tagName.toLowerCase() === _p : !1;
}
function Ss(e) {
  return e instanceof ur;
}
function Tk(e) {
  return e?.type === ur.getType();
}
const Cp = 1;
class Yr extends Nc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Yr(t.__key);
  }
  static importJSON(t) {
    return Jt().updateFromJSON(t);
  }
  getMarker() {
    return or;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Cp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Jt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Jt() {
  return Be(new Yr());
}
function cr(e) {
  return e instanceof Yr;
}
function Po(e) {
  return e?.type === Yr.getType();
}
const xk = [
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
], Sp = 1, _k = ["type", "marker", "content"];
class Xe extends Nc {
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
    return new Xe(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (xk.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: vk,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return ns().updateFromJSON(t);
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
    return r && Nn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Sp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = ns(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function vk(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = ns(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function ns(e, t) {
  return Be(new Xe(e, t));
}
function ie(e) {
  return e instanceof Xe;
}
function Bc(e) {
  return e?.type === Xe.getType();
}
const no = "v", Mp = 1, Ck = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class pt extends je {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = no, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new pt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Ep().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Da, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: Mp
    };
  }
}
function Ep(e, t, r, n, i, s) {
  return Be(new pt(e, t, r, n, i, s));
}
function we(e) {
  return e instanceof pt;
}
function Ap(e) {
  return e?.type === pt.getType();
}
function Vc(e) {
  return I(gi(e));
}
function io(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Vc(t) : t.getChildren().some((i) => I(i) && i.getMarker() === r) ? !0 : void 0;
}
function Sk(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = io(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Ms(e) {
  return C(e) && e.getType() === je.getType() && te(e, se) !== "attribute";
}
function Mk(e) {
  if (!Ms(e) || !e.getTextContent().startsWith(q))
    return 0;
  let t = e, r = t.getPreviousSibling(), n = t.getParent();
  for (; n && Te(n); )
    t = n, n = t.getParent(), r ??= t.getPreviousSibling();
  if (!I(n))
    return 0;
  for (; Te(r); )
    r = r.getLastChild();
  return !P(r) || r.getMarkerSyntax() !== "opening" || io(r, n) === void 0 ? 0 : 1;
}
function Wc(e, t) {
  if (e.getMarkerSyntax() !== "opening" || io(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return P(r) ? io(r, t) === !0 ? "spacer" : void 0 : Ms(r) ? r.getTextContent().startsWith(q) ? void 0 : "prefix" : "spacer";
}
function Ek(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (P(t) && Wc(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Pp(e, t) {
  const r = O();
  if (!w(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function wp(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Wc(t, e);
    if (r !== void 0 && !Pp(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        C(n) && n.setTextContent(q + n.getTextContent());
      } else
        t.insertAfter(me(q));
  });
}
function Np(e) {
  return e.isAttached() ? e.getChildren().some((t) => P(t) && Wc(t, e) !== void 0 && Pp(t, e)) : !1;
}
const Ak = "​", oi = Ak;
var Cu;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Cu || (Cu = {}));
var Su;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Su || (Su = {}));
function Pk() {
  return me(oi);
}
function wk(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(oi, ""));
}
function Es(e) {
  return e.length > 0 && e.includes(oi) && e.replaceAll(oi, "") === "";
}
function Hc(e) {
  return C(e) && Es(e.getTextContent());
}
function Op(e) {
  return fk(e) || Tk(e);
}
function We(e) {
  return ve(e) || Ss(e);
}
function qp(e, t) {
  return e.find((r) => We(r) && r.getNumber() === t.toString());
}
function Nk(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && We(r));
}
function Mu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Rp(e) {
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
function Qt(e) {
  return it(e, z) ?? void 0;
}
function Ok(e) {
  return gt(e) || ve(e) || I(e) || Ss(e) || cr(e) || Ke(e) || ie(e) || z(e) || we(e) || qe(e);
}
function $p(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function qk(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function At(e) {
  return Me(e) || gt(e);
}
function Me(e) {
  return ie(e) || cr(e);
}
function Rk(e) {
  return Bc(e) || Po(e);
}
function so(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function Cn(e, t) {
  const r = te(t, vn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function $k(e, t) {
  const r = $(e) ? e : e.getParent(), n = $(t) ? t : t.getParent(), i = r && n ? Ey(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Ik(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function ai(e) {
  return e?.type === je.getType();
}
function Lk(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function Dk(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Ee(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function nt(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Ip(e, t, r) {
  const n = Ee(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Kt(e, t) {
  let r = Ee(e);
  return t && (r += `${q}${t}`), r += " ", r;
}
function Uk(e) {
  const t = e[ks];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Lp(e) {
  return Qc(e) || op(e) && e.textType === "marker" || ai(e) && Uk(e) === "attribute" ? "" : ai(e) && e.text !== q ? e.text : yk(e) ? e.children.map((t) => Lp(t)).join("") : "";
}
function Fk(e) {
  return e.map((r) => Lp(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Pt(e) {
  return " " + e + q;
}
function Gc(e) {
  const t = [];
  for (const r of e) {
    if (!I(r))
      continue;
    const n = Dp(r);
    n !== zt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Dp(e) {
  return P(e) || Or(e) || C(e) && te(e, se) === "attribute" ? "" : C(e) ? e.getTextContent() : $(e) ? e.getChildren().map((t) => Dp(t)).join("") : "";
}
function Or(e) {
  return Ct(e) && e.getTextType() === "marker";
}
function Bt(e) {
  return P(e) || Or(e);
}
function Eu(e, t) {
  Kk(e, t), e.setMarker(t);
}
function Kk(e, t) {
  const r = e.getMarker(), n = Ee(r), i = Ee(r, !0), s = nt(r), o = nt(r, !0), a = be.isNoteContentMarker(t);
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
      else if (Or(c)) {
        const f = l.startsWith(Ee("", !0));
        c.setTextContent(u ? Ee(t, f) : nt(t, f));
      }
    }
  });
}
function Fe(e, t = Ty) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Re(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Up(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Jc(e) {
  if (!w(e))
    return Au(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !$(t) || e.anchor.type === "text" && !C(t)))
    return t ?? void 0;
  try {
    return Au(e) ?? t ?? void 0;
  } catch (n) {
    if (Up(n))
      return t ?? void 0;
    throw n;
  }
}
function zk(e, t) {
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
function Yc(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Fp(e) {
  return !!e && e.includes("-");
}
function Kp(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Au(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Xc(e) {
  if (!e)
    return !1;
  if (Co(e) || P(e) || Or(e) || ze(e) || e.getType() === _s || Ct(e) && e.getTextType() === "attribute")
    return !0;
  const t = gi(e);
  if (ve(t) || C(e) && z(t) && Xr(t)?.is(e))
    return !0;
  if (C(e)) {
    const r = te(e, se);
    if (r === lr || r === "attribute")
      return !0;
    const n = e.getTextContent();
    if (n === "" || n === q || Es(n))
      return !0;
  }
  return !1;
}
function wo() {
  const e = me(q);
  return Tt(e, se, lr), e.setMode("token"), e;
}
function jk(e) {
  const t = e.getTextContent();
  t.startsWith(q) || e.setTextContent(q + t);
}
function qn(e) {
  return C(e) && te(e, se) === lr;
}
function zp(e) {
  const t = e.getFirstChild();
  if (!Bt(t) || t === null || qn(t.getNextSibling()))
    return !1;
  const r = O();
  if (!w(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function dr(e) {
  if (ve(e))
    return [];
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!Xc(s)) {
      if (Te(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (C(s) && s.getType() === je.getType()) {
        const o = Mk(s);
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length, lead: o }), r.length += s.getTextContentSize() - o;
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function gi(e) {
  let t = e.getParent();
  for (; t && Te(t); )
    t = t.getParent();
  return t;
}
function Bk(e, t) {
  return dr(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function Vk(e, t) {
  const r = gi(e);
  if (!r)
    return;
  const n = dr(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + Math.max(0, t - o.lead) };
  }
}
function Wk(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const n of e.segments) {
    const i = n.node.getTextContentSize() - n.lead;
    if (t >= n.start && t < n.start + i)
      return [n.node, t - n.start + n.lead];
  }
  const r = e.segments[e.segments.length - 1];
  if (r)
    return [r.node, t - r.start + r.lead];
}
function jp(e, t) {
  const r = dr(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Xc(n))
    return jp(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || so(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || so(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function Hk(e, t) {
  if (t <= 0)
    return 0;
  const r = dr(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? Gk(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function Gk(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const Jk = 1;
class fr extends je {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(mn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new fr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return lt().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: r, markerSyntax: n = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || mn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = mn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = mn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = mn(r.__marker, r.__markerSyntax, t), r;
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
      version: Jk
    };
  }
}
function lt(e, t, r) {
  return Be(new fr(e, t, void 0, r));
}
function P(e) {
  return e instanceof fr;
}
function Qc(e) {
  return e?.type === fr.getType();
}
function nn(e) {
  return e.getTextContent() === mn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function Yk(e) {
  e.setTextContent(mn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function mn(e, t, r = !1) {
  return t === "closing" ? nt(e, r) : t === "selfClosing" ? nt("") : Ee(e, r);
}
const Xk = /* @__PURE__ */ new Set(["closed"]);
function sr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !Xk.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Bp(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Vp(e) {
  const t = Object.keys(e).filter((n) => !vb.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Wp(e, t, r, n) {
  return Bp(
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
function Wi(e) {
  return e.getChildren().find((t) => P(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function Qk(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Wi(e) === void 0 && Hp(e) === void 0;
}
function Hp(e) {
  return e.getChildren().find((t) => C(t) && te(t, se) === "attribute");
}
function is(e, t) {
  return As(e.getNextSibling(), t);
}
const Zk = /^[ \u00A0]+$/;
function Zc(e) {
  if (nn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Ee(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && Zk.test(r.slice(t.length));
}
function As(e, t) {
  let r, n, i, s;
  return ze(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), P(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Zc(e) && (r = e, e = e.getNextSibling()), C(e) && te(e, se) === "attribute" && (n = e, e = e.getNextSibling()), P(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && nn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Xr(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!P(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (C(n) && n.getTextContent() === Pt(e.getCaller()))
    return n;
}
function Gp(e) {
  const t = Xr(e);
  return t ? As(t.getNextSibling(), "cat") : {};
}
function mi(e) {
  const t = e.getFirstChild();
  if (!(!C(t) || P(t)) && te(t, se) !== "attribute")
    return t;
}
function Jp(e) {
  const t = mi(e);
  return t ? As(t.getNextSibling(), "ca") : {};
}
function Yp(e) {
  const t = mi(e);
  if (!t)
    return;
  const r = As(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Xp(e) {
  const t = Yp(e);
  return t ? As(t.getNextSibling(), "cp") : {};
}
function Qp(e) {
  const t = e.getParent();
  if (!I(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (we(n))
        return n;
      if (!(P(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || C(n) && te(n, se) === "attribute" || I(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || ze(n)))
        return;
    }
}
function No(e) {
  let t, r, n, i, s = e.getNextSibling();
  return ze(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), P(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Zc(s) && (t = s, s = s.getNextSibling()), C(s) && te(s, se) === "attribute" && (r = s, s = s.getNextSibling()), P(s) && s.getMarkerSyntax() === "selfClosing" && nn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
const eT = "file", tT = "src", rT = "colspan", nT = "category", iT = "alt", sT = "closed", oT = "false";
function aT(e) {
  return e[sT] !== oT;
}
function cT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === eT ? tT : t,
    r
  ]));
}
function lT(e, t) {
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
function el(e, t, r) {
  const n = r ?? {}, i = aT(n);
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
        opening: `\\${lT(t, n[rT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: sr(cT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [nT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + sr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [iT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: sr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: sr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const _t = { wantsRun: !1, valueText: void 0 }, qr = {};
function ga(e, t) {
  if (t === "va")
    return e;
  const r = is(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function tl(e) {
  const t = O();
  if (!w(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if ($(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function Oo(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = O();
  if (!w(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function uT(e) {
  return ze(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : P(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : C(e) && te(e, se) === "attribute";
}
function dT(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!C(e) || te(e, se) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function ma(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (we(t))
      return t;
    if (!uT(t))
      return;
  }
}
function Pu(e) {
  return {
    kind: e,
    ownerPredicate: (t) => we(t),
    ownerOf: (t) => {
      if (ze(t))
        return t.getRunKind() === e ? ma(t) : void 0;
      const r = t.getParent();
      return ze(r) ? r.getRunKind() === e ? ma(r) : void 0 : dT(t) === e ? ma(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!we(t))
        return _t;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? _t : { wantsRun: !0, valueText: q + r };
    },
    scanPieces: (t) => we(t) ? is(ga(t, e), e) : qr,
    graceSite: (t, r) => we(t) ? !r.opener && !r.closer ? tl(ga(t, e)) : Oo(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => we(t) ? ga(t, e) : void 0
    }
  };
}
const fT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => I(e),
  ownerOf: () => {
  },
  expectedPieces: () => _t,
  scanPieces: () => qr,
  graceSite: (e) => I(e) && Np(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, pT = {
  kind: "char",
  ownerPredicate: (e) => I(e),
  ownerOf: (e) => {
    if (!C(e) || te(e, se) !== "attribute")
      return;
    const t = e.getParent();
    return I(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!I(e) || Wi(e) === void 0)
      return _t;
    const t = sr(e.getUnknownAttributes() ?? {}, vs(e.getMarker()));
    return t === "" ? _t : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => I(e) ? { value: Hp(e) } : qr,
  graceSite: (e, t) => {
    if (!I(e) || t.value)
      return !1;
    const r = Wi(e);
    if (!r)
      return !1;
    const n = O();
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
    insertRunBefore: (e) => I(e) ? Wi(e) : void 0
  }
};
function Zp(e) {
  if (P(e))
    return e.getMarker() === "cat";
  if (!C(e) || te(e, se) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return P(t) && t.getMarker() === "cat";
}
function hT(e) {
  const t = e.getParent();
  if (!z(t))
    return;
  const r = Xr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Zp(n))
        return;
    }
}
const gT = {
  kind: "cat",
  ownerPredicate: (e) => z(e),
  ownerOf: (e) => {
    if (ze(e))
      return e.getRunKind() === "cat" && z(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return ze(t) ? t.getRunKind() === "cat" && z(t.getParent()) ? t.getParent() ?? void 0 : void 0 : Zp(e) ? hT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!z(e) || e.getIsCollapsed() !== !1)
      return _t;
    const t = e.getCategory();
    return t === void 0 ? _t : { wantsRun: !0, valueText: q + t };
  },
  scanPieces: (e) => z(e) ? Gp(e) : qr,
  graceSite: (e, t) => {
    if (!z(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Xr(e);
      return r !== void 0 && tl(r);
    }
    return Oo(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => z(e) ? Xr(e) : void 0
  }
};
function mT(e) {
  return ze(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : P(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : C(e) && te(e, se) === "attribute";
}
function yT(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!C(e) || te(e, se) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function bT(e) {
  const t = e.getParent();
  if (!ve(t))
    return;
  const r = mi(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!mT(n))
        return;
    }
}
function wu(e) {
  const t = (r) => ve(r) ? e === "ca" ? mi(r) : Yp(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => ve(r),
    ownerOf: (r) => {
      if (ze(r))
        return r.getRunKind() === e && ve(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return ze(n) ? n.getRunKind() === e && ve(n.getParent()) ? n.getParent() ?? void 0 : void 0 : yT(r) === e ? bT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!ve(r))
        return _t;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? _t : { wantsRun: !0, valueText: q + n };
    },
    scanPieces: (r) => ve(r) ? e === "ca" ? Jp(r) : Xp(r) : qr,
    graceSite: (r, n) => {
      if (!ve(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && tl(i);
      }
      return Oo(n);
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
function eh(e) {
  if (P(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return C(e) && te(e, se) === "attribute";
}
function kT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ke(t)) {
      const r = P(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!eh(t))
      return;
  }
}
const TT = {
  kind: "milestone",
  ownerPredicate: (e) => Ke(e),
  ownerOf: (e) => {
    const t = ze(e) ? e.getRunKind() === "milestone" ? e : void 0 : ze(e.getParent()) ? e.getParent() : eh(e) ? e : void 0;
    if (!t || ze(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return ze(t) ? Ke(r) ? r : void 0 : kT(t);
  },
  expectedPieces: (e) => {
    if (!Ke(e))
      return _t;
    const t = Wp(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = sr(t, Cs(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : q + r };
  },
  scanPieces: (e) => {
    if (!Ke(e))
      return qr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = No(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Ke(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = O();
      if (!w(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return Oo(t);
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
}, xT = el("optbreak", void 0, void 0).opening, _T = {
  kind: "optbreak",
  ownerPredicate: (e) => qe(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!qe(t) || t.getTag() !== "optbreak"))
      return C(e) || Ct(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: xT }),
  scanPieces: (e) => qe(e) ? { value: e.getFirstChild() ?? void 0 } : qr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, vT = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => qe(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => _t,
  scanPieces: () => qr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, CT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => I(e),
  ownerOf: () => {
  },
  expectedPieces: () => _t,
  scanPieces: () => qr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, ss = [
  fT,
  pT,
  Pu("va"),
  Pu("vp"),
  gT,
  wu("ca"),
  wu("cp"),
  TT,
  _T,
  vT,
  CT
], ST = new Map(ss.map((e) => [e.kind, e]));
function Cr(e) {
  const t = ST.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Qr(e) {
  for (const t of ss) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function th(e) {
  return Qr(e) !== void 0;
}
const oo = "unmatched", rh = 2;
function Hi(e) {
  return `\\${e}`;
}
class Rr extends je {
  __marker;
  constructor(t = "", r) {
    super(Hi(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new Rr(r, n);
  }
  static importDOM() {
    return {
      [oo]: (t) => ET(t) ? {
        conversion: MT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return rl().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? Hi(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Hi(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(gu), r.title = Nu(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Nu(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(oo);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(gu), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: rh
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function nh(e) {
  return e.getTextContent() === Hi(e.getMarker());
}
function Nu(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function MT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: rl(t) };
}
function rl(e) {
  return Be(new Rr(e));
}
function ET(e) {
  return e?.tagName.toLowerCase() === oo;
}
function sn(e) {
  return e instanceof Rr;
}
const ih = "table", Ha = "immutable-table", sh = 1, AT = ["type", "marker", "content"];
class Rn extends er {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Ha;
  }
  static clone(t) {
    return new Rn(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return PT().updateFromJSON(t);
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
      type: Ha,
      ...t !== void 0 && { unknownAttributes: t },
      version: sh
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function PT(e) {
  return Be(new Rn(e));
}
function oh(e) {
  return e instanceof Rn;
}
function wT(e) {
  return e?.type === Ha;
}
const ah = "table:row", Ou = "immutable-table-row", ch = 1, Ga = "tr", NT = ["type", "marker", "content"];
class yi extends er {
  __marker;
  __unknownAttributes;
  constructor(t = Ga, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Ou;
  }
  static clone(t) {
    return new yi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return OT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Ga).setUnknownAttributes(t.unknownAttributes);
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
      type: Ou,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: ch
    };
  }
}
function OT(e, t) {
  return Be(new yi(e, t));
}
const lh = "table:cell", qu = "immutable-table-cell", uh = 1, Ja = "tc1", qT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function RT(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class bi extends er {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Ja, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return qu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new bi(r, n, i, s, o);
  }
  static importJSON(t) {
    return $T().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Ja).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = RT(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: qu,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: uh
    };
  }
}
function $T(e, t, r, n) {
  return Be(new bi(e, t, r, n));
}
function qo(e, t) {
  const r = e.getChildAtIndex(t);
  return C(r) ? r : void 0;
}
function Zt(e, t) {
  const r = qo(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function os(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function IT(e) {
  return e.getChildren().some((t) => P(t) && t.getMarkerSyntax() === "closing");
}
function LT(e) {
  return os(e) ? void 0 : { closed: "false" };
}
function DT(e, t, r, n) {
  const i = t.getMarker(), s = Vc(t), o = IT(t);
  if (n) {
    e.append(lt(i, "opening", s));
    const [a] = r;
    Ms(a) && !a.getTextContent().startsWith(q) && a.setTextContent(q + a.getTextContent());
  }
  e.append(...r), o && e.append(lt(i, "closing", s));
}
function Sn(e) {
  return it(e, I) ?? void 0;
}
function nl(e) {
  let t = e.getParent();
  for (; I(t); )
    t = t.getParent();
  return t;
}
function Ya(e) {
  const t = dh(e);
  return e.getChildren().every((r) => P(r) || t && te(r, se) === "attribute" || C(r) && r.getTextContent().replaceAll(q, "") === "");
}
function dh(e) {
  return os(e);
}
function UT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? sr(r, vs(e.getMarker())) : "";
  n !== "" && t.insertAfter(me(n)), e.remove();
}
function FT(e, t) {
  if (os(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(lt(e.getMarker(), "closing", Vc(e)));
}
function KT(e, t) {
  return I(e) && !os(e) && !os(t);
}
function zT(e, t, r) {
  Ya(e) && e.getChildren().forEach((i) => {
    P(i) || i.remove();
  });
  const [n] = t;
  r && Ms(n) && !n.getTextContent().startsWith(q) && n.setTextContent(q + n.getTextContent()), e.append(...t);
}
function jT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = dh(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = P(l) && l.getMarkerSyntax() === "closing", f = s && te(l, se) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = KT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      zT(e, o, n);
    else {
      const l = vr(t.getMarker(), LT(t));
      DT(l, t, o, n), e.insertAfter(l), Ya(l) ? l.remove() : c = l;
    }
  i && !a && FT(t, n), Ya(t) && UT(t, c);
}
function ci(e, t) {
  let r = e.getParent();
  for (; I(r); )
    jT(e, r, t), r = e.getParent();
}
function il(e) {
  if (C(e) && !P(e)) {
    const t = e.getTextContent().startsWith(q) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if ($(e)) {
    const t = e.getChildren().find((r) => !P(r));
    if (t) {
      il(t);
      return;
    }
    e.selectEnd();
  }
}
const ii = /* @__PURE__ */ new WeakMap();
function BT(e, t) {
  return ii.set(e, t), () => {
    ii.get(e) === t && ii.delete(e);
  };
}
function ya(e) {
  return ii.get(e);
}
function VT(e) {
  return ii.get(Ts())?.has(e.getKey()) ?? !1;
}
function WT(e) {
  ii.get(Ts())?.add(e.getKey());
}
function HT(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Xa(e) {
  return !!(e.opener || e.value || e.closer);
}
function Ru(e) {
  return /^\s/.test(e);
}
function sl(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Ru(t) || !Ru(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Ro(e, t, r) {
  return r.wantsRun ? sl(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : HT(t);
}
function GT(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return sl(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function fh(e, t) {
  return !Xa(e.scanPieces(t));
}
function Ps(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Ro(e, n, r))
    return !1;
  const i = O();
  if (!w(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || so(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function JT(e, t, r, n) {
  return !r.wantsRun || Xa(n) || Ay(es) ? !1 : Ts().getEditorState().read(() => {
    const i = Z(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Xa(e.scanPieces(i));
  });
}
function YT(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function $u(e) {
  const t = me(e);
  return Tt(t, se, "attribute"), t;
}
function XT(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = fp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function QT(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    C(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore($u(n.valueText));
    return;
  }
  const l = XT(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = lt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : C(d) ? sl(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = $u(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(lt(a === "selfClosing" ? "" : o(t), a));
}
function as(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Ro(e, i, n) && !VT(t)) {
    if (JT(e, t, n, i)) {
      WT(t);
      return;
    }
    if (!Ps(e, t)) {
      if (!n.wantsRun) {
        YT(i);
        return;
      }
      QT(e, t, i, n);
    }
  }
}
function ZT(e, t, r) {
  as(e, t), t.isAttached() && Ps(e, t) && r.add(t.getKey());
}
function ph(e) {
  if (!C(e))
    return !1;
  if (P(e) || we(e) || sn(e))
    return !0;
  const t = te(e, se);
  return t === "attribute" || t === lr;
}
function ol(e, t) {
  return P(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && nn(e) && I(e.getParent())) : !1;
}
function ex() {
  const e = O();
  return w(e) ? ol(e.focus.getNode(), e.focus.offset) : !1;
}
function hh(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return C(t) && ph(t) ? t : void 0;
}
function tx(e) {
  const t = hh(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function rx(e) {
  const t = hh(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Iu(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Lu(e, t) {
  e.set(t.key, t.offset, t.type);
}
function nx(e, t) {
  let r = rx(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!C(n))
      return;
    if (!ph(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Du(e, t) {
  const r = nx(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function gh(e) {
  if (e.isCollapsed()) {
    const a = tx(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Iu(r), Iu(n)], s = Du(r, "next"), o = Du(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Lu(r, i[0]), Lu(n, i[1]), !1) : !0;
}
const ao = "verse-block", mh = 1, ix = "verse-block";
class ki extends er {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return ao;
  }
  static clone(t) {
    return new ki(t.__number, t.__key);
  }
  static importJSON(t) {
    return sx().updateFromJSON(t);
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
    return Kp(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(ix), Uu(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Uu(r, this.__number), !1;
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
      type: ao,
      number: this.getNumber(),
      version: mh
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Uu(e, t) {
  const { start: r, end: n } = Kp(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Fu(e, "data-verse-start", i ? r : NaN), Fu(e, "data-verse-end", i ? n : NaN);
}
function Fu(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function sx(e) {
  return Be(new ki(e));
}
function cs(e) {
  return e instanceof ki;
}
function ox(e) {
  return e?.type === ao;
}
const ax = [
  jt,
  ur,
  Nt,
  pt,
  be,
  Ne,
  Xt,
  fr,
  On,
  wr,
  Rr,
  Xe,
  Yr,
  Rn,
  yi,
  bi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Nr,
  {
    replace: Nc,
    with: () => Jt(),
    withKlass: Yr
  }
], co = {
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
}, cx = {
  paragraph: y.Paragraph,
  character: y.Character,
  note: y.Note,
  milestone: y.Milestone
};
function lx(e) {
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
      category: ar(r)?.category ?? k.Uncategorized,
      type: cx[n.styleType] ?? y.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: ar(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Ku(e, t, r) {
  const n = {
    type: Tr,
    version: kr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return Po(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const yh = "v", bh = 1, ux = "verse-selected";
class St extends bs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = yh, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-verse";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new St(r, n, i, s, o, a, c);
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
    return al().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Da, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Nn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Da, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Kt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Xs + this.getNumber() + Xs
    );
    return v(dx, { nodeKey: this.getKey(), text: t });
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
      version: bh
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Up(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function dx({ nodeKey: e, text: t }) {
  const [r] = Wy(e);
  return v("span", { className: r ? ux : void 0, children: t });
}
function fx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: al(t) };
}
function al(e, t, r, n, i, s) {
  return Be(new St(e, t, r, n, i, s));
}
function px(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === yh;
}
function $n(e) {
  return e instanceof St;
}
function hx(e) {
  return e?.type === St.getType();
}
function ye(e) {
  return we(e) || $n(e);
}
function kh(e) {
  return Ap(e) || hx(e);
}
function gx(e) {
  return mx(e).find((t) => ie(t));
}
function mx(e) {
  return e.some(cs) ? e.flatMap((t) => cs(t) ? t.getChildren() : t) : e;
}
function $o(e) {
  return $(e) ? cs(e) ? e.getChildren().flatMap($o) : e.getChildren() : [];
}
function yx(e, t) {
  return $o(e).find((i) => ye(i) && Yc(t, i.getNumber()));
}
function bx(e, t) {
  return t === 0 ? gx(e) : e.map((r) => yx(r, t)).filter((r) => r)[0];
}
function lo(e) {
  return $o(e).find((r) => ye(r));
}
function Th(e, t) {
  if (!$(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ye(i))
      return i;
  }
}
function kx(e) {
  const t = e.getParent();
  if (t && $(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (ye(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !We(r); ) {
    const n = lo(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Qa(e) {
  return $o(e).findLast((t) => ye(t));
}
function Tx(e) {
  if (!we(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function xx(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && $(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function _x(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return xx(t, e, r);
  if (C(e)) {
    const n = Tx(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function zu(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function vx(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!w(t))
    return zu(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return _x(e, t) ? { verseNum: n } : zu(e);
}
function Cx(e) {
  return Ok(e) || $n(e);
}
function cl(e) {
  if (C(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(q) && e.setTextContent(`${t} `);
  }
}
function xh(e) {
  if (C(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function _h(e, t) {
  return e.getEditorState().read(() => !Z(t));
}
function Sx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = ll(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && $(i) && $(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && $(i)) {
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
      let s = ju(i);
      for (; s && !We(s); ) {
        const o = lo(s);
        if (o) {
          n = o;
          break;
        }
        s = ju(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = lo(s);
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
function Mx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = ll(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && $(i) && (n = Th(i, r.getIndexWithinParent())), !n && i) {
      let o = Bu(i);
      for (; o && !We(o); ) {
        const a = Qa(o);
        if (a) {
          n = a;
          break;
        }
        o = Bu(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !We(s); ) {
      const o = Qa(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function ju(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function Bu(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function ll(e, t) {
  if ($(e) && w(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && ye(n))
      return n;
    const i = Th(e, t.anchor.offset);
    if (i)
      return i;
    const s = lo(e);
    if (s)
      return s;
  }
  return ul(e);
}
function ul(e) {
  if (!e || We(e))
    return;
  if (ye(e))
    return e;
  let t = Mu(e);
  for (; t; ) {
    if (We(t))
      return;
    if (ye(t))
      return t;
    const r = Qa(t);
    if (r)
      return r;
    t = Mu(t);
  }
}
const Ex = ["style"], Ax = ["style", "code"], uo = ["style", "cid"], Px = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], wx = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Nx = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], Ox = ["style", "caller", "category", "contents"], qx = ["tag", "marker", "contents"], Rx = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], ls = `
`;
function $x(e, t) {
  const r = Z(e);
  if (!wt(r))
    return;
  const n = vh(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function vh(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Df();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (li(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      li(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Sr(l) || wt(l))
        return n;
      At(l) && (a = l);
    }
    if (At(l) && (i.includes(l) || i.push(l)), Ch(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += dl(l, t);
  }
  if (a)
    return n;
}
function Vu(e, t, r = "delta-doc") {
  if (e.length < 2 || !Dx(e[0]) || !Lx(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => Ix(n, r)?.getKey());
}
function Ix(e, t = "delta-doc") {
  const r = Df();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (li(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      li(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (At(a) && (i.includes(a) || i.push(a)), Ch(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = dl(a, t);
    if (Sr(a) && l > 0 && e >= n && e < n + l || wt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function li(e, t) {
  return e ? t ? !so(t.node, e.getKey()) : !0 : !1;
}
function Sr(e) {
  return C(e) && !wt(e);
}
function wt(e) {
  return We(e) || ye(e) || Ke(e) || z(e) || qe(e) || sn(e);
}
function zr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function Lx(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && Rx.includes(t);
}
function Dx(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Ch(e, t) {
  return z(e) || qe(e) ? !0 : t === "apply" && $(e) && wt(e);
}
function Sh(e) {
  const t = e.getParent();
  return Bt(e) && ie(t) && t.getFirstChild() === e;
}
function Za(e) {
  const t = e.getParent();
  return t !== null && it(t, ze) !== null;
}
function Ux(e) {
  const t = e.getParent();
  return I(t) && e.getTextContent() === zt && t.getChildrenSize() === 1;
}
function Fx(e) {
  const t = e.getParent();
  if (!z(t))
    return !1;
  const r = e.getPreviousSibling();
  return P(r) && r === t.getFirstChild() && e.getTextContent() === Pt(t.getCaller());
}
function Kx(e) {
  return !th(e) && dl(e, "delta-doc") === e.getTextContentSize();
}
function dl(e, t) {
  if (wt(e))
    return 1;
  if (C(e)) {
    const r = e.getTextContent();
    return t === "delta-doc" && // A bare cursor host (EmptyVerseCaretGuardPlugin) is a transient, collab-invisible node:
    // its insertion is never emitted, so it contributes nothing to DOC-DELTA positions or the
    // local doc would drift one position ahead of every peer while a host rests. In `"apply"`
    // coordinates it MUST count, per the rule in the doc comment above: none of
    // `$applyUpdate`'s traversals skip a placeholder (each classifies with `$isOTTextNode`
    // and adds raw `getTextContentSize()`), so excluding it here left a replace-embed retain
    // one short whenever a host rested before the target — a footnote-popover save then
    // deleted the unit BEFORE the note instead of the note itself.
    (Hc(e) || Sh(e) || te(e, se) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    te(e, se) === "attribute" || Za(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Lc) || Ux(e) || Fx(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function ec(e, t) {
  const r = { insert: e.__text }, n = te(e, Jr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Mh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function Wu(e) {
  const t = new Ki();
  return e.isEmpty() || e.read(() => {
    const r = Se();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && cr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = zx();
    for (const s of i)
      t.push(s);
  }), t;
}
function fl(e, t) {
  const r = [], n = hi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...Hu(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...Hu(c, n.length, n, i, s, o, a));
  return r;
}
function zx() {
  return fl();
}
function Hu(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return jx(e, a, n), Bx(e, a, i, s, o), Vx(e, t, r, i, o, s, a), We(e) && a.push(Jx(e)), ye(e) && a.push(Xx(e)), Ke(e) && a.push(Qx(e)), sn(e) && a.push(Zx(e)), Hx(e, a, s), Wx(e, a, s), n_(c, s), a;
}
function jx(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    gt(n) ? t.push(Gx(n)) : ie(n) ? t.push(Yx(n)) : cr(n) && t.push({ insert: ls });
  }
  At(e) && (r.includes(e) || r.push(e));
}
function Bx(e, t, r, n, i) {
  if (!C(e) || we(e) || sn(e))
    return;
  const s = e.getParent();
  if (z(s) && s.getFirstChild() === e)
    return;
  const o = Qt(e) !== void 0;
  if (P(e) && (o || Sh(e) || Za(e) || th(e)) || te(e, se) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Es(a))
    return;
  const c = e.getPreviousSibling();
  if (z(s) && P(c) && c === s.getFirstChild() && a === Pt(s.getCaller()))
    return;
  const l = I(s) ? s : void 0, u = l?.getFirstChild();
  o && l && P(u) && c === u && a.startsWith(q) && (a = a.slice(1));
  const d = a.startsWith(Lc) || te(e, se) === "attribute" || Za(e), f = !!l && a === zt && l.getChildrenSize() === 1, p = Io(e, n), g = p ? r.filter((_) => p.children.includes(_)) : r, m = ec(e, g);
  if (m.insert = a, p) {
    if (!a || a === q || d)
      return;
    p.contentsOps?.push(m);
  } else
    f || d || t.push(m);
  const b = a !== "" && !f && !(d && l);
  if (r.length > 0 && b)
    for (const _ of r)
      i.add(_);
}
function Vx(e, t, r, n, i, s, o) {
  I(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (li(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = t_(c), u = Io(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function Wx(e, t, r) {
  if (!z(e))
    return;
  const n = e_(e), i = Io(e, r), s = {
    node: e,
    children: hi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Hx(e, t, r) {
  if (!qe(e))
    return;
  const n = r_(e), i = Io(e, r), s = {
    node: e,
    children: hi(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function on(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function Gx(e) {
  const t = { style: rs, code: e.__code };
  return on(t, e), { insert: ls, attributes: { book: t } };
}
function Jx(e) {
  const t = { style: ro, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), on(t, e), { insert: { chapter: t } };
}
function Yx(e) {
  const t = { style: e.__marker };
  return on(t, e), { insert: ls, attributes: { para: t } };
}
function Xx(e) {
  const t = { style: no, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), on(t, e), { insert: { verse: t } };
}
function Qx(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), on(t, e), { insert: { milestone: t } };
}
function Zx(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function e_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), on(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = te(e, Jr);
  return n && (r.attributes = { segment: n }), r;
}
function t_(e) {
  const t = { insert: "" }, r = Mh([e]);
  return r && (t.attributes = { char: r }), t;
}
function r_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), on(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Io(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function n_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    li(t[r].node, e) && t.splice(r, 1);
}
function Mh(e) {
  if (e.length === 0)
    return;
  const t = e.map(i_);
  return t.length === 1 ? t[0] : t;
}
function i_(e) {
  const t = { style: e.__marker }, r = te(e, vn);
  return r && (t.cid = r), on(t, e), t;
}
const Eh = 1;
class Yt extends bs {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Qs, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return _s;
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new Yt(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => o_(t) ? {
        conversion: s_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return pl().updateFromJSON(t);
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
    return r && Nn(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => a_(t, n), (l) => c_(t, n, s, l), () => l_(t, n), () => u_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return v("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Qs && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === Hf && i ? (
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
      version: Eh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function s_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: pl(t, r) };
}
function pl(e, t, r) {
  return Be(new Yt(e, t, r));
}
function o_(e) {
  return e ? e.classList.contains(Yt.getType()) : !1;
}
function pr(e) {
  return e instanceof Yt;
}
function a_(e, t) {
  return e.getEditorState().read(() => {
    const r = Z(t);
    if (!z(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function c_(e, t, r, n) {
  e.update(() => {
    const i = Z(t);
    if (!z(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = Z(r);
    if (!pr(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function l_(e, t) {
  return e.getEditorState().read(() => {
    const r = Z(t);
    if (!z(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return fl(r);
  });
}
function u_(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of hi())
      if (z(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const d_ = [
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
], f_ = ["†"];
function hl(e) {
  if (Nh())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = rc(t), [s, o] = rc(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = Yu(n, i), [s, o] = Yu(s, o);
  const a = Oc();
  return a.anchor = fu(n.getKey(), i, Xu(n)), a.focus = fu(s.getKey(), o, Xu(s)), a;
}
function gl() {
  if (Nh())
    return;
  const e = O();
  if (!e || !w(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Mr(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Mr(i, s);
  return { start: n, end: o };
}
const ml = {
  va: "altnumber",
  vp: "pubnumber",
  ca: "altnumber",
  cp: "pubnumber",
  cat: "category"
}, p_ = [
  "va",
  "vp",
  "ca",
  "cp",
  "cat",
  "milestone",
  "char",
  "optbreak"
], h_ = /([^\s="|]+)="([^"]*)"/g, g_ = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function m_(e, t) {
  return `${e}['${t}']`;
}
function si(e) {
  return [
    { start: 0, base: 0, bytes: { kind: "marker" } },
    { start: e, base: 0, bytes: { kind: "property", property: "marker" } }
  ];
}
function Gi(e) {
  return [
    {
      start: 0,
      base: 0,
      bytes: e === void 0 ? { kind: "closingMarker" } : { kind: "closingAttributeMarker", keyName: e }
    }
  ];
}
function yl(e) {
  const t = Qr(e);
  if (!t)
    return;
  const r = Cr(t.kind).scanPieces(t.owner);
  if (r.opener?.is(e))
    return { ...t, role: "opener" };
  if (r.value?.is(e))
    return { ...t, role: "value" };
  if (r.closer?.is(e))
    return { ...t, role: "closer" };
}
function tc(e, t, r) {
  const n = [];
  for (const i of e.slice(t).matchAll(h_)) {
    const s = i[1];
    n.push({
      start: t + i.index,
      base: 0,
      bytes: { kind: "attributeKey", keyName: s }
    }), n.push({
      // Past the key, its `=`, and its opening quote.
      start: t + i.index + s.length + 2,
      base: 0,
      bytes: { kind: "property", property: s }
    });
  }
  return n.length > 0 ? n : r === void 0 ? [] : [
    { start: t, base: 0, bytes: { kind: "property", property: r } }
  ];
}
function y_(e, t) {
  const r = g_.exec(e);
  if (!r)
    return [];
  const n = r[1], i = r[0].length - n.length - 2, s = ml[n] ?? n, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: r[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${n}*`);
  return a > r[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function Ah(e) {
  const t = e.getParent();
  if (!t || !$(t))
    return e;
  const r = S_(e);
  return r && !At(r) && !C(r) && !Te(r) ? r : t;
}
function b_(e) {
  const t = e.getTextContentSize(), r = yl(e);
  if (r && r.role !== "value") {
    const i = ml[r.kind];
    if (i !== void 0)
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? Gi(i) : [
          { start: 0, base: 0, bytes: { kind: "attributeMarker", keyName: i } },
          { start: 1, base: 0, bytes: { kind: "attributeKey", keyName: i } }
        ]
      };
    if (r.kind === "milestone")
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? Gi() : si(1)
      };
  }
  const n = e.getMarkerSyntax();
  return {
    owner: Ah(e),
    length: t,
    spans: n === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      si(e.getNested() ? 2 : 1)
    ) : Gi()
  };
}
function k_(e) {
  const t = e.getTextContent(), r = t.length, n = yl(e);
  if (n?.kind === "optbreak")
    return {
      owner: n.owner,
      length: r,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = Ah(e);
  if (gt(i)) {
    const s = Ee(i.getMarker()).length;
    if (t.startsWith(Ee(i.getMarker())))
      return {
        owner: i,
        length: r,
        spans: [
          ...si(1),
          { start: s + 1, base: 0, bytes: { kind: "property", property: "code" } }
        ]
      };
  }
  if (qe(i)) {
    const s = el(i.getTag(), i.getMarker(), i.getUnknownAttributes());
    if (s.closing !== "" && t === s.closing)
      return { owner: i, length: r, spans: Gi() };
    if (s.opening !== "" && t === s.opening)
      return { owner: i, length: r, spans: si(1) };
  }
  return {
    owner: i,
    length: r,
    spans: t.endsWith("*") ? Gi() : si(t.startsWith("\\+") ? 2 : 1)
  };
}
function T_(e) {
  const t = yl(e);
  if (t?.role !== "value")
    return;
  const { owner: r, kind: n } = t, i = e.getTextContent(), s = i.length, o = ml[n];
  if (o !== void 0)
    return {
      owner: r,
      length: s,
      spans: [
        // The separator before the value is the space after the attribute marker, which counts
        // into that marker name's offset space.
        { start: 0, base: n.length, bytes: { kind: "attributeKey", keyName: o } },
        { start: 1, base: 0, bytes: { kind: "property", property: o } }
      ]
    };
  if (n === "char")
    return {
      owner: r,
      length: s,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        ...tc(i, 1, I(r) ? vs(r.getMarker()) : void 0)
      ]
    };
  if (n === "milestone" && Ke(r)) {
    const a = r.getMarker().length;
    return {
      owner: r,
      length: s,
      spans: [
        // A milestone has no text content of its own, so the separator and the `|` both keep
        // counting into its marker name's offset space.
        { start: 0, base: a, bytes: { kind: "property", property: "marker" } },
        ...tc(i, 2, Cs(r.getMarker()))
      ]
    };
  }
}
function x_(e) {
  const t = e.getParent();
  if (!qe(t))
    return;
  const r = e.getTextContent(), n = r.length, i = y_(r, (t.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: t, length: n, spans: i };
  if (r.startsWith("|"))
    return {
      owner: t,
      length: n,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        ...tc(r, 1, void 0)
      ]
    };
}
function Gu(e, t) {
  const r = Ee(e);
  if (t.startsWith(r))
    return [
      ...si(1),
      { start: r.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function Ph(e) {
  if (P(e))
    return b_(e);
  if (Or(e))
    return k_(e);
  if (Ct(e) && e.getTextType() === "attribute")
    return x_(e);
  if (e.getType() === _s) {
    const r = e.getParent();
    return z(r) ? {
      owner: r,
      length: e.getTextContentSize(),
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if (we(e)) {
    const r = Gu(e.getMarker(), e.getTextContent());
    return r ? { owner: e, length: e.getTextContentSize(), spans: r } : void 0;
  }
  if (!C(e))
    return;
  if (te(e, se) === "attribute")
    return T_(e);
  const t = e.getParent();
  if (ve(t) && mi(t)?.is(e)) {
    const r = Gu(t.getMarker(), e.getTextContent());
    return r ? { owner: t, length: e.getTextContentSize(), spans: r } : void 0;
  }
  if (z(t) && Xr(t)?.is(e))
    return {
      owner: t,
      length: e.getTextContentSize(),
      spans: [
        // The caller's leading space is the space after the note's own marker, which counts into
        // that marker name's offset space.
        {
          start: 0,
          base: t.getMarker().length,
          bytes: { kind: "property", property: "marker" }
        },
        { start: 1, base: 0, bytes: { kind: "property", property: "caller" } }
      ]
    };
}
function wh(e) {
  return Or(e) || Ct(e) && e.getTextType() === "attribute" || e.getType() === _s;
}
function __(e) {
  const t = [];
  if (we(e) && t.push(e), $(e)) {
    const r = ve(e) ? mi(e) : void 0, n = z(e) ? Xr(e) : void 0;
    for (const i of e.getChildren())
      (P(i) || Or(i) || Ct(i) && i.getTextType() === "attribute" || i.getType() === _s || r?.is(i) || n?.is(i)) && t.push(i);
  }
  for (const r of p_) {
    const n = Cr(r);
    if (!n.ownerPredicate(e))
      continue;
    const { opener: i, value: s, closer: o } = n.scanPieces(e);
    i && t.push(i), s && t.push(s), o && t.push(o);
  }
  return t;
}
function v_(e, t) {
  return e.kind !== t.kind ? !1 : e.kind === "property" && t.kind === "property" ? e.property === t.property : (e.kind === "attributeKey" || e.kind === "attributeMarker" || e.kind === "closingAttributeMarker") && "keyName" in t ? e.keyName === t.keyName : !0;
}
function Ju(e, t) {
  const r = Ph(e);
  if (!r || r.spans.length === 0)
    return;
  const n = Math.max(0, Math.min(t, r.length));
  let i = r.spans[0];
  for (const a of r.spans) {
    if (a.start > n)
      break;
    i = a;
  }
  const s = i.base + (n - i.start), o = jr(Br(r.owner));
  switch (i.bytes.kind) {
    case "marker":
      return { jsonPath: o };
    case "closingMarker":
      return { jsonPath: o, closingMarkerOffset: s };
    case "property":
      return {
        jsonPath: m_(o, i.bytes.property),
        propertyOffset: s
      };
    case "attributeKey":
      return { jsonPath: o, keyName: i.bytes.keyName, keyOffset: s };
    case "attributeMarker":
      return { jsonPath: o, keyName: i.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: o, keyName: i.bytes.keyName, keyClosingMarkerOffset: s };
    case "precedingText":
      return C_(e);
  }
}
function C_(e) {
  const t = gi(e);
  if (!t)
    return;
  const r = dr(t);
  for (let n = r.length - 1; n >= 0; n--) {
    const i = r[n];
    if (i.type === "text")
      return {
        jsonPath: jr([...Br(t), n]),
        offset: i.length
      };
  }
}
function Jn(e, t, r) {
  for (const n of __(e)) {
    const i = Ph(n);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!v_(o.bytes, t))
          continue;
        const a = i.spans[s + 1], c = a ? o.base + (a.start - o.start) - 1 : o.base + (i.length - o.start);
        if (!(r < o.base || r > c))
          return [n, o.start + (r - o.base)];
      }
  }
}
function rc(e) {
  if (wc(e)) {
    const t = ms(e.jsonPath);
    let r = Se();
    for (let n = 0; n < t.length; n++) {
      if (!r || !$(r))
        return [void 0, void 0];
      const i = dr(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : Wk(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && $(r) ? [r, Hk(r, e.offset)] : [void 0, void 0];
  }
  if (du(e) || xy(e)) {
    const t = Ri(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    const { keyName: r } = e, n = du(e) ? Jn(t, { kind: "attributeKey", keyName: r }, e.keyOffset) : Jn(t, { kind: "attributeMarker", keyName: r }, 0);
    return n || Qu(t);
  }
  if (_y(e)) {
    const t = Ri(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    const r = Jn(t, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return r || Qu(t);
  }
  if (vy(e)) {
    const t = Ri(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    const r = Jn(t, { kind: "marker" }, 0);
    if (r)
      return r;
    if (!$(t))
      return [void 0, void 0];
    const n = t.getFirstChild();
    return n && C(n) ? [n, 0] : [void 0, void 0];
  }
  if (Cy(e)) {
    const t = Ri(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    const r = Jn(t, { kind: "closingMarker" }, e.closingMarkerOffset);
    if (r)
      return r;
    if (!$(t))
      return [void 0, void 0];
    const n = t.getLastChild();
    return n && C(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (Sy(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = Ri(e.jsonPath);
    if (!n || r === void 0)
      return [void 0, void 0];
    const i = Jn(n, { kind: "property", property: r }, e.propertyOffset);
    if (i)
      return i;
    if (!$(n))
      return [void 0, void 0];
    const s = n.getFirstChild();
    return s && C(s) ? [s, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${My(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Yu(e, t) {
  if (!wh(e))
    return [e, t];
  const r = e.getParent();
  if (!r || !$(r))
    return [e, t];
  const n = e.getIndexWithinParent();
  if (n < 0)
    return [e, t];
  const i = t >= e.getTextContentSize() && t > 0;
  return [r, i ? n + 1 : n];
}
function Xu(e) {
  return $(e) ? "element" : "text";
}
function Ri(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = ms(r);
  let i = Se();
  for (const s of n) {
    if (!i || !$(i))
      return;
    const o = dr(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Mr(e, t) {
  const r = Ju(e, t);
  if (r)
    return r;
  if (Te(e)) {
    const n = e.getChildrenSize(), i = e.getChildAtIndex(Math.min(t, n - 1));
    if (C(i)) {
      const o = t >= n ? i.getTextContentSize() : 0;
      return Mr(i, o);
    }
    const s = gi(e);
    if (s?.is(e.getParent())) {
      const o = e.getIndexWithinParent(), a = t >= n ? o + 1 : o;
      return Mr(s, a);
    }
  }
  if ($(e)) {
    const n = e.getChildAtIndex(t);
    if (n && wh(n)) {
      const s = Ju(n, 0);
      return s || {
        jsonPath: jr(Br(e))
      };
    }
    const i = jp(e, t);
    return i.type === "text" ? {
      jsonPath: jr([...Br(e), i.index]),
      offset: i.offset
    } : {
      jsonPath: jr(Br(e)),
      offset: i.index
    };
  }
  if (C(e)) {
    const n = Vk(e, t);
    if (n)
      return {
        jsonPath: jr([
          ...Br(n.parent),
          n.index
        ]),
        offset: n.offset
      };
  }
  return { jsonPath: jr(Br(e)), offset: t };
}
function Qu(e) {
  if ($(e)) {
    const r = e.getLastChild();
    if (r && C(r))
      return [r, r.getTextContent().length];
  }
  const t = e.getNextSibling();
  return t && $(t) ? [t, 0] : [void 0, void 0];
}
function S_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Xc(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function Br(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = gi(r);
    if (!n)
      break;
    const i = Bk(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Nh() {
  for (let e = Se().getFirstChild(); e; e = e.getNextSibling())
    if (cs(e))
      return !0;
  return !1;
}
function Oh(e, t, r, n, i, s, o) {
  if (!Ne.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? hl(r) : O();
  if (!w(a))
    return;
  const c = A_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (zi(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = qh(e, l, c, i, s, void 0, void 0);
  return E_(u, a, i), u;
}
function bl(e) {
  return e !== "expanded";
}
function M_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!C(r) || !I(r.getParent()))
    return;
  if (P(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return P(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function E_(e, t, r) {
  const n = bl(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Ik(t), gh(t);
  const i = M_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(I)?.selectEnd();
}
function Yn(e, t, r) {
  const n = vr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(lt(e)) : r?.markerMode === "visible" && n.append(_r("marker", Ee(e)));
  const s = t === "" ? zt : i ? q + t : t;
  return n.append(me(s)), n;
}
function A_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Yn("fr", f, n)), !e.isCollapsed()) {
        const p = ed(e);
        p.length > 0 && o.push(Yn("fq", p, n));
      }
      o.push(Yn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Yn("xo", f, n)), !e.isCollapsed()) {
        const p = ed(e);
        p.length > 0 && o.push(Yn("xq", p, n));
      }
      o.push(Yn("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function qh(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : bl(n?.noteMode), l = Fc(e, t, c);
  s && Tt(l, Jr, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = lt(e), u && d.setMode("token"), a || (f = lt(e, "closing"))) : n?.markerMode === "visible" && (d = _r("marker", Ee(e) + " "), a || (f = _r("marker", nt(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = me(Pt(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const g = () => wo(), m = r.flatMap(w_(g));
    if (t === "")
      l.append(...m);
    else {
      const b = Gc(r);
      let _ = () => {
      };
      i?.noteCallerOnClick && (_ = i.noteCallerOnClick), p = pl(l.__caller, b, _), l.append(p, g(), ...m);
    }
  }
  return f && l.append(f), l;
}
function Zu(e) {
  if (typeof e == "string") {
    const i = Z(e);
    return z(i) ? i : void 0;
  }
  const t = hi();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => z(i.node))[e]?.node;
  if (z(n))
    return n;
}
function P_(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if ($n(n) || !n) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      n.selectEnd();
  } else
    e.getChildren().reverse().find(I)?.selectEnd();
}
function w_(e) {
  return (t) => Ct(t) ? [t] : [t, e()];
}
function N_(e) {
  const t = e.getParent();
  return t !== null && it(t, z) !== null;
}
function ed(e) {
  if (!w(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Mf(e);
  let a = "";
  for (const c of t)
    if (!(z(c) || pr(c) || N_(c)) && !P(c) && !sn(c) && te(c, se) !== "attribute") {
      if (ye(c)) {
        a += `\\+fv ${c.getNumber()}\\+fv*`;
        continue;
      }
      if (C(c)) {
        let l = c.getTextContent();
        c === r && c === n ? l = s < o ? l.slice(s, o) : l.slice(o, s) : c === r ? l = i ? l.slice(s) : l.slice(o) : c === n && (l = i ? l.slice(0, o) : l.slice(0, s)), a += l;
      }
    }
  return a.replace(/[ \t\r\n\f\v]+/g, " ").trim();
}
const Rh = [
  Yt,
  St,
  ...ax
], O_ = [
  ki,
  ...Rh
], q_ = wn((e, t) => {
  const { coords: r, children: n, style: i, ...s } = e, o = r !== void 0;
  return v("div", { ref: t, className: "floating-box", "aria-hidden": !o, style: {
    ...i,
    position: "absolute",
    zIndex: 1e3,
    top: r?.y,
    left: r?.x,
    visibility: o ? "visible" : "hidden",
    opacity: o ? 1 : 0
  }, ...s, children: n });
});
function R_() {
  const [e, t] = pe(void 0), [r, n] = pe(), i = X(null), s = de((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = rb(l, c, () => {
      nb(l, c, {
        placement: "bottom-start",
        middleware: [ib(), sb()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = de(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return j(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function $_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = R_();
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
const I_ = gy(q_);
function $h({ isOpen: e = !1, children: t }) {
  const r = X(null), { coords: n, placement: i } = $_({ isOpen: e, floatingBoxRef: r }), s = De(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return bn(
    v(I_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Ih = vf(void 0);
function kl() {
  const e = Cf(Ih);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function L_(e, t) {
  const [r, n] = pe(0), [i, s] = pe(-1), o = De(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = de(() => {
    n((d) => {
      const f = o.length;
      return f ? (d - 1 + f) % f : 0;
    });
  }, [o.length]), l = de(() => {
    n((d) => {
      const f = o.length;
      return f ? (d + 1) % f : 0;
    });
  }, [o.length]), u = de(() => {
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
function D_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = L_(t, r);
  return v(Ih.Provider, { value: i, children: v("div", { ...n, children: e }) });
}
const Lh = wn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = kl(), u = de((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = de((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return v("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function U_({ children: e, autoIndex: t = !0, ...r }) {
  const n = X(null), { state: { activeIndex: i, menuItems: s } } = kl(), o = De(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = De(() => {
    const c = o(s);
    return t ? my.map(c, (l, u) => yy(l) && l.type === Lh && l.props.index === void 0 ? by(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return j(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), v("div", { ref: n, role: "menu", ...r, children: a });
}
const F_ = (e, t, r) => Ws(e, r).toLowerCase().includes(t.toLowerCase()), td = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Ws = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function K_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? td(r[0]) : "") : (u = n || (r.length > 0 ? td(r[0]) : ""), d = (g, m) => F_(g, m, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((g) => {
    try {
      return d(g, t);
    } catch (m) {
      return console.warn("Error filtering item:", g, m), !1;
    }
  }).sort((g, m) => {
    const b = (M) => (p.has(M) || p.set(M, Ws(M, f).toLowerCase()), p.get(M) ?? ""), _ = a ? Ws(g, f) : b(g), E = a ? Ws(m, f) : b(m);
    for (const M of c)
      switch (M) {
        case "exact":
          if (_ === l && E !== l)
            return -1;
          if (E === l && _ !== l)
            return 1;
          break;
        case "startsWith":
          if (_.startsWith(l) && !E.startsWith(l))
            return -1;
          if (E.startsWith(l) && !_.startsWith(l))
            return 1;
          break;
        case "contains": {
          const N = _.indexOf(l), S = E.indexOf(l);
          if (N !== -1 && S === -1)
            return -1;
          if (S !== -1 && N === -1)
            return 1;
          if (N !== -1 && S !== -1)
            return N - S;
          break;
        }
      }
    return _.localeCompare(E);
  });
}
const ba = {
  Root: D_,
  Options: U_,
  Option: Lh
};
function z_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return De(() => K_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function j_() {
  const { moveUp: e, moveDown: t, select: r } = kl();
  return De(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const B_ = () => {
  const e = j_(), [t] = ce();
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
    return t.registerCommand(Ar, r, Ue);
  }, [t, e]);
};
function V_() {
  return B_(), null;
}
const W_ = ["Shift", "Control", "Alt", "Meta"];
function Dh(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ce(), u = s !== void 0, [d, f] = pe(""), p = u ? s ?? "" : d, g = z_({ query: p, items: t, filterBy: "name" }), m = (b) => {
    n?.(), r ? r(b) : b.action(l);
  };
  return j(() => {
    a?.(p, g);
  }, [a, p, g]), j(() => l.registerCommand(Ar, (b) => {
    if (u || c?.includes(b.key) || W_.includes(b.key))
      return !1;
    if ((b.ctrlKey || b.metaKey || b.altKey) && !b.getModifierState("AltGraph"))
      return n?.(), !1;
    const E = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((M) => M.slice(0, -1));
      }
    }[b.key];
    return E ? (b.stopPropagation(), b.preventDefault(), E(), !0) : b.key.length === 1 ? (b.stopPropagation(), b.preventDefault(), b.key !== o && f((M) => M + b.key), !0) : !1;
  }, Ue), [l, u, p, o, n, c]), Ce(ba.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: g, onSelectOption: (b) => m(b), children: [!u && v("input", { value: p, type: "text", disabled: !0 }), v(V_, {}), v(ba.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (b) => b.map((E, M) => Ce(ba.Option, { index: M, children: [v("span", { className: "label", children: E.label ?? E.name }), v("span", { className: "description", children: E.description })] }, E.name)) })] });
}
function H_({ trigger: e, items: t }) {
  const [r] = ce(), [n, i] = pe(!1), s = de((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return j(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), j(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = O();
      if (w(l))
        return l;
    });
    a.read(() => {
      const l = O();
      !w(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && v($h, { isOpen: n, children: ({ placement: o }) => v(Dh, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function G_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: De(() => {
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
function Ji(e, t) {
  return `${e}:${t}`;
}
function J_(e, t) {
  j(() => {
    if (!e.hasNodes([et]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Ye(Uf(e, et, (n) => ts(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], g = a[l]?.[d], m = c[l]?.[d];
          i.addID(l, d, f, p, g, m);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(et, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = Z(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : Te(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!et.isReservedType(c))
              for (const u of l) {
                let d = t.get(Ji(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Ji(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Ji(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const Y_ = wn(function({ logger: t }, r) {
  const [n] = ce(), i = De(() => /* @__PURE__ */ new Map(), []);
  J_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Ji(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = Z(u);
        Te(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && to(d));
      }
  };
  return Pc(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (et.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = hl(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), lp(p, a, c, l, u, d, f);
      }, { tag: Ua });
    },
    removeAnnotation(o, a) {
      if (et.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Ji(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Ua });
    }
  })), null;
}), X_ = [];
function Q_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = X_, onChange: n }) {
  const [i] = ce();
  return gs(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(Ef) && !u.has(Yf) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = Z_(i, s);
        d.length !== 0 && n(o, i, u, d);
      });
  }, [i, e, t, r, n]), null;
}
function Z_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Ki();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = Z(i), o = s !== null && Qt(s) !== void 0;
    if (t.size === 1 && C(s) && !o && Kx(s)) {
      const a = vh(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = Z(i);
          return new Ki([C(d) ? ec(d) : { insert: "" }]);
        }), l = new Ki([ec(s)]), u = new Ki(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = Wu(r), c = Wu(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const Tl = "formatted", Uh = "unformatted", Fh = "paragraph-structure", Kh = "standard", zh = "block-verse", ev = {
  [Tl]: "Formatted",
  [Uh]: "Unformatted",
  [Fh]: "Paragraph Structure",
  [Kh]: "Standard",
  [zh]: "Block Verse"
};
function Ti(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let xl, _l;
function tv(e) {
  const t = jh(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  xl = e, _l = t;
}
tv(Tl);
const BP = () => xl, Lo = () => _l;
function jh(e) {
  let t;
  switch (e ?? xl) {
    case Tl:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Uh:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Fh:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Kh:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case zh:
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
function VP(e) {
  if (!e)
    return;
  const t = rd(e);
  return Object.keys(ev).find((r) => $t(rd(jh(r)), t));
}
const rv = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function rd(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...rv, ...t };
}
function Do(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function nv(e) {
  if (e)
    return us(e) ? St : e.markerMode === "editable" ? pt : St;
}
function us(e) {
  return e?.verseLayout === "block";
}
function iv(e) {
  const t = [], r = e ?? _l;
  return r && (t.push(`${kb}${r.markerMode}`), r.hasSpacing && t.push(yb), r.isFormattedFont && t.push(bb)), t;
}
function sv(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += ov(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), cv(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += lv(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), dv(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function ov(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), av(t, e.retain, e.attributes, r, n)), e.retain);
}
function av(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Se();
  function l(u) {
    if (s <= 0)
      return !0;
    if (Sr(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), p = d - f, g = Math.min(s, p);
        if (g > 0) {
          let m = u;
          const b = f > 0, _ = g < d - f;
          if (b && _) {
            const [, E] = u.splitText(f);
            [m] = E.splitText(g);
          } else b ? [, m] = u.splitText(f) : _ && ([m] = u.splitText(g));
          if (Zr(r)) {
            const E = m.getParent();
            if (I(E)) {
              const M = r.char;
              let N;
              Array.isArray(M) ? a >= 0 && a <= M.length - 1 && (N = M[a]) : a === 0 && (N = M);
              const S = N ? Cn(N, E) : !1;
              if (S && Array.isArray(M) && M.length > 1) {
                const T = me("");
                m.replace(T);
                const F = typeof r.segment == "string" ? r.segment : void 0, U = xi(M.slice(1), n, m, F);
                let G = T;
                for (const J of U)
                  G.insertAfter(J), G = J;
                T.remove(), It(r, m);
              } else if (S)
                It(r, m);
              else {
                m.remove();
                const T = nd(m, r, n, i);
                if (T && T.length > 0) {
                  let F = E;
                  for (const U of T)
                    F.insertAfter(U), F = U;
                }
              }
            } else {
              const M = me("");
              m.replace(M);
              const N = nd(m, r, n, i);
              if (N && N.length > 0) {
                let S = M;
                for (const T of N)
                  S.insertAfter(T), S = T;
                M.remove();
              } else
                M.replace(m);
            }
          } else
            It(r, m);
          s -= g;
        }
      }
      o += d;
    } else if (wt(u))
      e <= o && o < e + t && s > 0 && (id(u, r), s -= 1), o += 1;
    else if (I(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (Zr(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            nc(u, p.style), typeof p.cid == "string" && Tt(u, vn, () => p.cid);
            const g = Fe(p, uo);
            g && Object.keys(g).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...g
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || Tv(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && La(u), !0;
        }
      }
      d && La(u), a -= 1;
    } else if (At(u)) {
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
          id(u, r);
        else if (vl(r)) {
          const p = Wh(r.para, n);
          p && u.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if ($(u)) {
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
function nd(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = xi(t.char, r, e, i), o = s.find(I);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), It(t, e);
    return;
  }
  const a = {};
  Yh.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), It(t, e), s;
}
function Bh(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  P(r) ? (r.setMarker(t), r.setTextContent(Ee(t))) : Ct(r) && r.getTextType() === "marker" && r.setTextContent(Ee(t) + q);
}
function nc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    P(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = I(e.getParent()), i = e.getFirstChild();
  Ct(i) && i.getTextType() === "marker" && i.getTextContent() === Ee(r, n) && i.setTextContent(Ee(t, n));
  const s = e.getLastChild();
  Ct(s) && s.getTextType() === "marker" && s.getTextContent() === nt(r, n) && s.setTextContent(nt(t, n));
}
function id(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && I(e) && Zr(t)) {
      const i = ic(n);
      if (nc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Tt(e, vn, () => o);
      }
      const s = Fe(i, uo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (We(e) || ye(e) || Ke(e) || z(e) || qe(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (gt(e) || ie(e) || I(e)) && (r === "style" && ie(e) ? Bh(e, n) : r === "style" && I(e) ? nc(e, n) : r === "code" && gt(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Tt(e, Jr, () => n));
  }
}
function cv(e, t, r) {
  if (t <= 0)
    return;
  const n = Se();
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
    } else if (wt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (At(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && At(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Jt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Me(p)) {
            let g = i + 1;
            const m = p.getChildren();
            for (const _ of m) {
              if (s <= 0)
                break;
              const E = i;
              if (i = g, o(_)) {
                i = E;
                break;
              }
              Sr(_) ? g += _.getTextContentSize() : wt(_) && (g += 1), i = E;
            }
            const b = p.getChildren();
            for (const _ of b)
              _.remove(), a.append(_);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Jt(), !0);
        } else ie(a) ? a.replace(Jt(), !0) : a.remove();
      }
      i += 1;
    } else if ($(a)) {
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
function lv(e, t, r, n, i) {
  if (t === ls)
    return sd(e, r, n, i);
  if (t.endsWith(ls) && !vl(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Zr(r))
        throw new Error("Text + LF should not have char attributes");
      o += fo(e, s, r, i);
    }
    return o += sd(e + o, r, n, i), o;
  } else return Zr(r) ? uv(e, t, r, n, i) : fo(e, t, r, i);
}
function uv(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = me(t === "" ? zt : t);
  It(r, s);
  let o;
  {
    let b = function(_) {
      if (Sr(_)) {
        const E = _.getTextContentSize();
        if (e >= m && e < m + E) {
          const M = _.getParent();
          return I(M) && (o = M), !0;
        }
        m += E;
      } else if (wt(_))
        m += 1;
      else if (I(_)) {
        const E = _.getChildren();
        for (const M of E)
          if (b(M))
            return !0;
      } else if ($(_)) {
        const E = _.getChildren();
        for (const M of E)
          if (b(M))
            return !0;
        At(_) && (m += 1);
      }
      return !1;
    };
    const g = Se();
    let m = 0;
    b(g);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const g = a[0];
      g && Cn(g, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Cn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = xi(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(I);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), fo(e, t, void 0, i);
  const f = {};
  for (const [g, m] of Object.entries(r))
    g !== "char" && g !== "segment" && typeof m == "string" && (f[g] = m);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const g of u)
    if (!Vh(e, g, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), fo(e, t, void 0, i));
}
function fo(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Se();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Sr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = me(t);
        if (It(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          I(f) && !Zr(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (wt(c))
      s += 1;
    else if (I(c)) {
      if (!o && e === s) {
        const d = me(t);
        It(r, d);
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
        return It(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (At(c)) {
      if (!o && e === s) {
        const d = me(t);
        It(r, d);
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
        return It(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if ($(c)) {
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
    It(r, c);
    const l = Jt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Vh(e, t, r) {
  const n = Se();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Jt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!$(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (Me(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Jt().append(t));
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
      } else if (wt(l))
        i += 1;
      else if (I(l)) {
        if (o(l))
          return !0;
      } else if (At(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (cr(u) && At(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if ($(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return $(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Jt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Me(a) ? cr(a) && ie(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Me(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (I(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Me(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function dv(e, t, r, n, i) {
  let s;
  return zr("chapter", t) ? s = pv(t.insert.chapter, r) : zr("verse", t) ? s = hv(t.insert.verse, r) : zr("ms", t) ? s = gv(t.insert.ms) : zr("note", t) ? s = Hh(t, r, n, i) : zr("unknown", t) ? s = Gh(t, r, n, i) : zr("unmatched", t) && (s = yv(t.insert.unmatched, r)), s ? Vh(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function sd(e, t, r, n) {
  let i;
  vl(t) ? i = Wh(t.para, r) : kv(t) && (i = fv(t.book)), i ??= Jt();
  const s = i, o = ie(s), a = cr(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (Sr(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (ie(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const g = e - c, [m] = g > 0 ? d.splitText(g) : [void 0];
          let b, _ = m?.getPreviousSibling();
          for (; _; ) {
            const E = _;
            _ = _.getPreviousSibling(), b ? b.insertBefore(E) : s.append(E), b = E;
          }
          return m && s.append(m), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (wt(d))
      c += 1;
    else if (At(d)) {
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
        if (ie(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ie(d) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${d.getMarker()}) at targetIndex ${e}`), d.insertAfter(s), l = !0, !0;
    } else if ($(d)) {
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
  return u(Se()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function fv(e) {
  const { style: t, code: r } = e;
  if (!t || t !== rs || !r || !jt.isValidBookCode(r))
    return;
  const n = Fe(e, Ax);
  return hp(r, n);
}
function Wh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Fe(e, Ex), i = ns(r, n);
  if (!Ti(t))
    return i;
  if (t.markerMode === "editable")
    i.append(lt(r), wo());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Ee(r) + q;
    i.append(t.hasGutterParaMarkers ? Gb(s) : _r("marker", s));
  }
  return i;
}
function pv(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Fe(e, Px);
  let a;
  if (t.markerMode === "editable")
    a = yp(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = jc(r, c, n, i, s, o);
  }
  return a;
}
function hv(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Fe(e, wx);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Kt(r, n);
    c = Ep(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = al(n, l, i, s, o, a);
  }
  return c;
}
function gv(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Fe(e, Nx);
  return Zf(t, r, n, s, i);
}
function Hh(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Fe(i.note, Ox), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const m of c?.ops ?? [])
    if (typeof m.insert == "string")
      if (Zr(m.attributes)) {
        const b = xi(m.attributes.char, t, me(m.insert), void 0, Jh(m.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...b);
      } else
        p.push(me(m.insert));
  return qh(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function Gh(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Fe(i, qx), l = zc(s, o, c), u = a?.ops ?? [];
  u.length > 0 && mv(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && Tt(l, Jr, () => d), l;
}
function mv(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Zr(s.attributes)) {
        const o = me(s.insert), a = xi(s.attributes.char, t, o, void 0, Jh(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(me(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (zr("unknown", s)) {
        const o = Gh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (zr("note", s)) {
        const o = Hh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function yv(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = rl(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Jh(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function ic(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function xi(e, t, r, n, i, s = !1, o = !1) {
  C(r) && r.getTextContentSize() === 0 && r.setTextContent(zt);
  const a = () => {
    o && C(r) && r.getTextContent() !== zt && r.setTextContent(q + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(ic), l = c[0], u = i?.[i.length - 1];
    if (I(u) && Cn(l, u))
      return c.length > 1 ? xi(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, p, g) => {
      const m = vr(p.style, Fe(p, uo));
      if (typeof p.cid == "string" && Tt(m, vn, () => p.cid), n && g === c.length - 1 && Tt(m, Jr, () => n), f)
        if (I(f)) {
          const b = f.getMarker(), _ = [];
          Ta(b, _, t, !0), _.forEach((M) => m.append(M)), m.append(f);
          const E = [];
          ka(f, E, t, !0), E.forEach((M) => m.append(M));
        } else
          m.append(f);
      return m;
    }, r);
    return Ta(l.style, d, t, s), ka(d, d, t, s), [d];
  } else {
    const c = ic(e), l = i?.[i.length - 1];
    if (I(l) && Cn(c, l))
      return r && l.append(r), [];
    a();
    const u = vr(c.style, Fe(c, uo));
    return typeof c.cid == "string" && Tt(u, vn, () => c.cid), n && Tt(u, Jr, () => n), r && u.append(r), Ta(c.style, u, t, s), ka(u, u, t, s), [u];
  }
}
function ka(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && bv(e.getMarker(), t, r, !1, n);
}
function Ta(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = lt(e, "opening", n) : r?.markerMode === "visible" && (i = _r("marker", Ee(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function bv(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = lt("", "selfClosing") : s = lt(e, "closing", i) : r?.markerMode === "visible" && (s = _r("marker", n ? nt("") : nt(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function kv(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function vl(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Zr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function Tv(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function It(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Tt(t, Jr, () => n);
        continue;
      }
      if (xv(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const Yh = [
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
function xv(e) {
  return Yh.includes(e);
}
function _v() {
  const [e] = ce();
  return j(() => e.registerCommand(So, (t) => (vv(t), !1), Tn), [e]), null;
}
function vv(e) {
  if (Cv(e.target))
    return;
  const t = O();
  w(t) && Sv(t);
}
function _i(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Bt(t))
      r++, t = t.getNextSibling(), C(t) && t.getTextContent() === q && (r++, t = t.getNextSibling());
    else if (ye(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Zt(e, r), !0);
}
function Cv(e) {
  if (!Af(e))
    return !1;
  const t = xs(e);
  if (!Jb(t))
    return !1;
  const r = t.getParent();
  return r ? Me(r) ? _i(r) : (Zt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function Sv(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = Z(t.key);
  if (!Me(r))
    return !1;
  const n = r.getFirstChild();
  return !Or(n) && !$n(n) ? !1 : _i(r);
}
function Mv() {
  const [e] = ce();
  return j(() => {
    const t = (r) => r instanceof KeyboardEvent && !Ev(r) || !Xh() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Ye(
      e.registerCommand(Ar, t, Ue),
      e.registerCommand(qc, t, Ue),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm records what a cut would cover
      // and claims nothing, so either order of the two is correct: with no removal, nothing it
      // armed can be reaped.
      e.registerCommand(yr, t, br),
      e.registerCommand(xn, t, br),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Rc, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = xs(r.target);
        return !n || !Mn(n) ? !1 : (r.preventDefault(), !0);
      }, Ue),
      e.registerCommand(Py, t, Ue),
      e.registerCommand(wy, t, Ue),
      e.registerCommand(Ny, t, Ue)
    );
  }, [e]), null;
}
function Ev(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Mn(e) {
  return it(e, (t) => qe(t) || oh(t)) ?? void 0;
}
function Xh() {
  const e = O();
  return w(e) ? Mn(e.anchor.getNode()) !== void 0 || Mn(e.focus.getNode()) !== void 0 : !1;
}
function Av(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function Pv(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), Av(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function wv(e, t, r, n) {
  if (!Bv(t) || Pv(e, r))
    return !1;
  const i = r === "up" ? Mx(t) : Sx(t);
  return i && n.preventDefault(), i;
}
function Nv({ viewOptions: e }) {
  const [t] = ce();
  return Ov(t, e), null;
}
function Ov(e, t) {
  j(() => {
    if (!e.hasNodes([ur, St, Ne]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = O();
      if (!w(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = od(o), d = Uv(i, ad(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return wv(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = od(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return ad(a, n.key) ? l = !c && ud(i, "next") || !c && Rv(i) || zv(i) || !c && s && ld(i, "next") : qv(a, n.key) && (l = !c && ud(i, "previous") || !c && $v(i) || jv(i, t) || !c && s && ld(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Ar, r, Ue);
  }, [e, t]);
}
function od(e) {
  return e.dir || "ltr";
}
function ad(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function qv(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function sc(e) {
  if (!I(e) || e.getMarker() !== "fp")
    return;
  const t = Qt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function Rv(e) {
  const t = sc($p(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Zt(t, 0), !0);
}
function $v(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = sc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : cd(n);
  }
  if (t.offset === 0) {
    const n = sc(r);
    return n ? cd(n) : !1;
  }
  return !1;
}
function cd(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (C(t))
    return t.select(), !0;
  if ($(t)) {
    const i = t.getLastDescendant();
    return C(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const po = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function Iv(e) {
  if (po)
    for (const { segment: r } of po.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function Lv(e) {
  if (po) {
    let n = 0;
    for (const { index: i } of po.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Qh(e) {
  for (let t = e; t; t = t.getParent())
    if ($(t) && !t.isInline())
      return t;
}
function Zh(e) {
  return !!e && P(e) && Mn(e) !== void 0;
}
function ui(e) {
  return C(e) && !e.isToken() && !Zh(e) && e.getTextContentSize() > 0;
}
function eg(e) {
  return Co(e) ? !0 : z(e) ? e.getIsCollapsed() === !0 : C(e) ? (e.isToken() || Zh(e)) && e.getTextContentSize() > 0 : Pf(e) ? !Ke(e) : !1;
}
function di(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Uo(e, t, r) {
  for (let n = e; n; ) {
    if (eg(n))
      return n;
    if ($(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? di(n, t, r);
      continue;
    }
    if (ui(n))
      return n;
    n = di(n, t, r);
  }
}
function Cl(e, t, r, n, i) {
  return r === "element" && $(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? di(e, n, i) : r === "text" && eg(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : di(e, n, i);
}
function xa(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Cl(e.node, e.offset, e.kind, "previous", t), n = Uo(r, "previous", t);
  if (!n)
    return e;
  if (ui(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function Dv(e, t) {
  const r = e.getNode(), n = Qh(r);
  if (!n)
    return;
  if (e.type === "text" && ui(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return xa({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Cl(r, e.offset, e.type, t, n), s = Uo(i, t, n);
  if (!s)
    return;
  if (ui(s)) {
    const c = s.getTextContent(), l = t === "next" ? Iv(c) : Lv(c);
    return xa({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return xa({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function tg(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = Dv(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function ld(e, t) {
  return tg(e, t, "collapse");
}
function Uv(e, t) {
  return tg(e, t, "extend");
}
function Fv(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && ui(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Cl(n, e.offset, e.type, t, r);
  return Uo(i, t, r) === void 0;
}
function Kv(e, t) {
  const r = Se();
  for (let n = e; n; ) {
    const i = di(n, t, r), s = i && Uo(i, t, r);
    if (!s)
      return;
    if (n = Mn(s), !n)
      return s;
  }
}
function ud(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Mn(n))
    return !1;
  const i = Qh(n);
  if (!i || !Fv(r, t, i))
    return !1;
  const s = di(i, t, Se()), o = s && Mn(s);
  if (!o)
    return !1;
  const a = Kv(o, t);
  if (!a)
    return !0;
  if (ui(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function dd(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function zv(e) {
  const t = e.anchor.getNode(), r = $p(e);
  if (z(r) && !P(r.getFirstChild())) {
    if (Me(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Me(i) && _i(i)) && i.selectStart(), !0;
      }
    } else return Ct(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Me(t) && z(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : dd(r), !0;
  }
  const n = r?.getParent();
  if (Ct(r) && z(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? dd(n) : n.selectEnd(), !0;
  }
  return !1;
}
function jv(e, t) {
  const r = qk(e);
  if (Ss(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (gt(i.getParent()))
    return !0;
  if (z(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!$n(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (Me(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = it(o, (c) => z(c));
    if (z(a) && a.getIsCollapsed()) {
      const c = a.getParent();
      if (!c)
        return !1;
      const l = a.getIndexWithinParent();
      return c.select(l, l), !0;
    }
  }
  const s = Qt(i);
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
function Bv(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return ye(t) && Pf(t);
}
function Vv() {
  const [e] = ce();
  return Wv(e), null;
}
function Wv(e) {
  j(() => {
    if (!e.hasNodes([be]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Ye(
      e.registerNodeTransform(be, Jv),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(be, Sk),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(be, wp),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(be, (t) => as(Cr("char"), t)),
      e.registerNodeTransform(je, Yv)
    );
  }, [e]);
}
function _a(e) {
  return e.getChildren().some(P);
}
function Hv(e, t) {
  const r = t.getFirstChild();
  if (!P(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (Ms(n)) {
    const i = n.getTextContent();
    i.startsWith(q) && (i === q ? n.remove() : n.setTextContent(i.slice(q.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function Gv(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  P(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function Jv(e) {
  if (!I(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (_a(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = te(e, vn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (I(i) && Cn({ style: t, cid: r }, i) && $t(n, i.getUnknownAttributes()))
    if (_a(i)) {
      if (Hv(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  I(s) && Cn({ style: t, cid: r }, s) && $t(n, s.getUnknownAttributes()) && (_a(s) ? Gv(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function Yv(e) {
  const t = e.getParent();
  if (!I(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(zt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function rg(e) {
  return e.replaceAll("	", " ");
}
const Sl = (e) => {
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
      n.setData(o, rg(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(yr, s);
  });
}, Ml = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", rg(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(yr, i);
  });
};
function Xv() {
  const [e] = ce();
  return j(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Ys ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), e.dispatchCommand(Mo, null)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), e.dispatchCommand(xn, null)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Ml(e) : Sl(e)));
    };
    return e.registerRootListener((r, n) => {
      n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
    });
  }, [e]), null;
}
function Qv({ logger: e }) {
  const [t] = ce();
  return j(() => Ye(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Ar, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), ri),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(yr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ri),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Rc, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ri)
  ), [t, e]), null;
}
function Zv({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), v("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: v("span", { className: "text", children: i.title }) });
}
function eC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return v("div", { className: "typeahead-popover", children: v("ul", { children: e.map((i, s) => v(Zv, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let tC = 0;
class $i {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${tC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function rC({ options: e } = {}) {
  const [t] = ce(), [r, n] = pe(() => !t.isEditable()), [i, s] = pe({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = pe(void 0), c = De(() => {
    const d = [
      new $i("Cut", {
        onSelect: () => {
          t.dispatchCommand(xn, null);
        },
        isDisabled: r
      }),
      new $i("Copy", {
        onSelect: () => {
          t.dispatchCommand(Mo, null);
        }
      }),
      new $i("Paste", {
        onSelect: () => {
          Sl(t);
        },
        isDisabled: r
      }),
      new $i("Paste as Plain Text", {
        onSelect: () => {
          Ml(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new $i(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...d, ...f];
  }, [t, r, e]), l = de(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  j(() => {
    const d = (f) => {
      const p = f.target;
      t.getRootElement() === p || vp(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
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
  const u = X(null);
  return gs(() => {
    const d = u.current;
    if (!d)
      return;
    const { width: f, height: p } = d.getBoundingClientRect(), g = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), m = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    d.style.left = `${g}px`, d.style.top = `${m}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Xy.createPortal(v("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: v(eC, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), l());
  }, onOptionMouseEnter: (d) => {
    a(d);
  } }) }), document.body) : null;
}
function nC() {
  const [e] = ce();
  return j(() => e.registerCommand(Ar, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Ys ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, br), [e]), null;
}
function iC({ isEditable: e }) {
  const [t] = ce();
  return gs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function fd(e) {
  return !!e && Hc(Z(e));
}
function ng(e) {
  const [t] = ce(), r = X(void 0), n = de((i) => {
    const s = O(), o = w(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = fd(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = qo(u, d);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const p = Pk();
        i.insertAfter(p), r.current = p.getKey(), l = p.getKey();
      }
      Zt(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = Z(a);
      C(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return j(() => {
    const i = () => {
      const a = e(), c = O(), l = w(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (Hr(Gr), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Es(c) || !c.includes(oi))
        return;
      const l = O(), u = w(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (wk(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(oi).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Ye(t.registerCommand(xr, () => (i(), !1), Tn), t.registerCommand($c, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = fd(a);
      }), c && t.update(() => {
        const l = Z(a);
        C(l) && l.remove();
      }, { tag: Gr }), r.current = void 0, !1;
    }, Tn), t.registerNodeTransform(je, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function sC() {
  const e = O();
  if (!w(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!$(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!ye(i) || qo(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ye(s))
    return i;
}
function oC() {
  return ng(sC), null;
}
function aC({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = ce();
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
          f || Hr(Oy), o.setEditorState(l), o.dispatchCommand(qy, void 0);
        }, { tag: Gf });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function cC({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ce();
  return lC(t, n), uC(i, e, r, n), null;
}
function lC(e, t) {
  const r = X(void 0), n = X(void 0), i = e.noteCallers, s = e.crossRefCallers;
  j(() => {
    let o = i;
    (!o || o.length <= 0) && (o = d_), r.current !== o && (r.current = o, pd("note-callers", o, t));
  }, [t, i]), j(() => {
    let o = s;
    (!o || o.length <= 0) && (o = f_), n.current !== o && (n.current = o, pd("cross-ref-callers", o, t));
  }, [t, s]);
}
function uC(e, t, r, n) {
  j(() => {
    if (!e.hasNodes([be, Ne, Yt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => yC(s));
    return Ye(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Ne, (s) => dC(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(be, fC),
      e.registerNodeTransform(je, pC),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Yt, hC),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Yt, (s, { prevEditorState: o }) => gC(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(xr, () => mC(e, t, r, n), Ft),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function dC(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => pr(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    C(i) && !P(i) && i.getTextContent() !== Pt(e.getCaller()) && e.insertBefore(i);
  }
}
function fC(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => pr(o));
  if (!I(e) || !z(t) || !n)
    return;
  const i = Gc(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  C(s) ? s.getTextContent() !== q && s.setTextContent(q) : e.insertAfter(me(q));
}
function pC(e) {
  const t = Qt(e), r = t?.getChildren(), n = r?.find((o) => pr(o));
  if (!C(e) || !z(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!P(e) && z(i) && e.getTextContent() !== q && (e.setTextContent(q), e.selectEnd()), I(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(zt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Gc(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function hC(e) {
  if (!pr(e))
    return;
  const t = e.getNextSibling();
  !C(t) || P(t) ? e.insertAfter(me(q)) : t.getTextContent() !== q && t.setTextContent(q);
}
function gC(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = Z(r), a = o?.getParent();
      return pr(o) && z(a) && a.getCaller() === Qs;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function mC(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = O();
  if (!w(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = it(o, (c) => z(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = Z(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Ii(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (z(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Ii(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (z(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Ii(e, c, n);
    } else if (!a) {
      const c = it(o, (l) => z(l));
      if (c && c.getIsCollapsed() && Me(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Ii(e, l, n);
      }
    }
  }
  if (Me(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if ($n(c) && z(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Ii(e, l, n);
    }
  }
  return !1;
}
function Ii(e, t, r) {
  const n = Z(t);
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
function yC(e) {
  const t = O();
  if (!w(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (z(i) && C(s)) {
    e.preventDefault();
    const o = Oc();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Zi(o);
  }
}
function pd(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (bC(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function bC(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Fo(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!P(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Xr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => C(n) && n.getMode() === "token") ? t : [];
}
function kC(e) {
  const t = e.getParent();
  if (z(t))
    return Fo(t).some((r) => r.is(e)) ? t : void 0;
}
function ho(e) {
  const t = Fo(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function TC(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function xC(e) {
  const t = Ry();
  if (!w(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= ho(e);
  const i = TC(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= ho(e);
}
function oc(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = kC(t);
  if (r)
    return _C(r, t, e.offset) ? void 0 : r;
}
function _C(e, t, r) {
  const n = Fo(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function vC(e) {
  const t = Fo(e), r = t[t.length - 1];
  C(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Zt(e, ho(e));
}
function CC(e = !1) {
  const t = O();
  if (!w(t))
    return !1;
  if (!t.isCollapsed())
    return SC(t.anchor, t.focus);
  const r = oc(t.anchor);
  if (!r)
    return !1;
  if (!e && xC(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Zt(n, r.getIndexWithinParent());
  } else
    vC(r);
  return !0;
}
function SC(e, t) {
  const r = oc(e), n = oc(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && hd(e, r, i), n && hd(t, n, !i), !0;
}
function hd(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), ho(t), "element");
}
function MC() {
  const [e] = ce(), t = X(!1);
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
  }, [e]), j(() => e.registerCommand(xr, () => (CC(t.current) && Hr(Gr), !1), Tn), [e]), null;
}
function EC({ onChange: e }) {
  const [t] = ce();
  return j(() => t.registerCommand(xr, () => {
    const r = gl();
    return e?.(r), !1;
  }, Ft), [t, e]), null;
}
function AC() {
  const [e] = ce();
  return PC(e), null;
}
function PC(e) {
  j(() => {
    if (!e.hasNodes([Xe]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(Xe, (t) => wC(t, e));
  }, [e]);
}
function wC(e, t) {
  _h(t, e.getKey()) && xh(e.getFirstChild()), !(!ie(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = Z(e.getKey());
    return ie(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function ig({ onStateChange: e }) {
  const [t] = ce(), [r, n] = pe(t), i = X(!1), s = X(!1), o = X(void 0), a = X(void 0), c = de(() => {
    const l = O();
    let u;
    if (w(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : it(d, (_) => {
        const E = _.getParent();
        return E !== null && $y(E);
      });
      p === null && (p = d.getTopLevelElementOrThrow()), cs(p) && (p = it(d, ie) ?? p);
      const g = p.getKey(), m = r.getElementByKey(g), b = $k(d, f);
      if (b && Cx(b) && (u = b.getMarker()), m !== null && (ie(p) || gt(p) || Ss(p))) {
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
  return j(() => t.registerCommand(xr, (l, u) => (c(), n(u), !1), br), [t, c]), j(() => Ye(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Iy, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), br), r.registerCommand(Ly, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), br)), [c, r, e]), null;
}
function NC(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function en(e) {
  return e ? Me(e) ? e : it(e, (r) => Me(r)) ?? void 0 : void 0;
}
function sg(e) {
  if (!w(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = en(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function El(e) {
  return w(e) && e.isCollapsed() && e.anchor.type === "element" || !w(e) && !wf(e) ? !1 : e.getNodes().some((t) => ye(t));
}
function og(e) {
  if (!w(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = en(r);
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
function ag(e) {
  if (!w(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = en(r);
  if (!n)
    return !1;
  if ($(r)) {
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
function gd(e, t) {
  return !!ac(e, t);
}
function ac(e, t) {
  if (!w(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && $(n)) {
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
function go(e, t) {
  if (!w(e))
    return !1;
  const r = en(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function va(e) {
  return El(e) || sg(e);
}
function OC(e, t) {
  if (El(e) || sg(e))
    return !0;
  if (!w(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return og(e) && go(e, "backward") || gd(e, "backward");
    case "deleteForward":
      return ag(e) && go(e, "forward") || gd(e, "forward");
    case "insertText":
      return !1;
  }
}
function qC(e, t) {
  if (!(!w(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = ac(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (og(e) && go(e, "backward")) {
        const n = en(e.anchor.getNode());
        if (Me(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = ac(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (ag(e) && go(e, "forward")) {
        const i = en(e.anchor.getNode())?.getNextSibling();
        if (Me(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function md(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return wf(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!w(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!w(e) || e.isCollapsed())
    return !1;
  const r = en(e.anchor.getNode()), n = en(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function cg(e) {
  if (C(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else $(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function RC(e) {
  const t = e.getPreviousSibling();
  if (!Me(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? cg(r) : _i(t) || t.selectStart();
}
function lg(e) {
  return ye(e) || We(e) ? [] : Me(e) ? e.getChildren().flatMap(lg) : [e];
}
function $C(e) {
  const t = [];
  for (const r of e) {
    const n = lg(r);
    n.length !== 0 && (Me(r) && t.length > 0 && t.push(me(" ")), t.push(...n));
  }
  return t;
}
function yd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function IC(e) {
  if (Array.isArray(e)) return e;
}
function LC(e, t) {
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
function DC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function UC(e, t) {
  return IC(e) || LC(e, t) || FC(e, t) || DC();
}
function FC(e, t) {
  if (e) {
    if (typeof e == "string") return yd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? yd(e, t) : void 0;
  }
}
const ug = Object.entries, bd = Object.setPrototypeOf, KC = Object.isFrozen, zC = Object.getPrototypeOf, jC = Object.getOwnPropertyDescriptor;
let tt = Object.freeze, st = Object.seal, ei = Object.create, dg = typeof Reflect < "u" && Reflect, cc = dg.apply, lc = dg.construct;
tt || (tt = function(t) {
  return t;
});
st || (st = function(t) {
  return t;
});
cc || (cc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
lc || (lc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Xn = He(Array.prototype.forEach), BC = He(Array.prototype.lastIndexOf), kd = He(Array.prototype.pop), Qn = He(Array.prototype.push), VC = He(Array.prototype.splice), Vr = Array.isArray, ji = He(String.prototype.toLowerCase), Ca = He(String.prototype.toString), Td = He(String.prototype.match), Li = He(String.prototype.replace), xd = He(String.prototype.indexOf), WC = He(String.prototype.trim), HC = He(Number.prototype.toString), GC = He(Boolean.prototype.toString), _d = typeof BigInt > "u" ? null : He(BigInt.prototype.toString), vd = typeof Symbol > "u" ? null : He(Symbol.prototype.toString), Je = He(Object.prototype.hasOwnProperty), Di = He(Object.prototype.toString), Ge = He(RegExp.prototype.test), gn = JC(TypeError);
function He(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return cc(e, t, n);
  };
}
function JC(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return lc(e, r);
  };
}
function he(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ji;
  if (bd && bd(e, null), !Vr(t))
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
function YC(e) {
  for (let t = 0; t < e.length; t++)
    Je(e, t) || (e[t] = null);
  return e;
}
function ct(e) {
  const t = ei(null);
  for (const n of ug(e)) {
    var r = UC(n, 2);
    const i = r[0], s = r[1];
    Je(e, i) && (Vr(s) ? t[i] = YC(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ct(s) : t[i] = s);
  }
  return t;
}
function XC(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return HC(e);
    case "boolean":
      return GC(e);
    case "bigint":
      return _d ? _d(e) : "0";
    case "symbol":
      return vd ? vd(e) : "Symbol()";
    case "undefined":
      return Di(e);
    case "function":
    case "object": {
      if (e === null)
        return Di(e);
      const t = e, r = Wt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Di(n);
      }
      return Di(e);
    }
    default:
      return Di(e);
  }
}
function Wt(e, t) {
  for (; e !== null; ) {
    const n = jC(e, t);
    if (n) {
      if (n.get)
        return He(n.get);
      if (typeof n.value == "function")
        return He(n.value);
    }
    e = zC(e);
  }
  function r() {
    return null;
  }
  return r;
}
function QC(e) {
  try {
    return Ge(e, ""), !0;
  } catch {
    return !1;
  }
}
const Cd = tt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Sa = tt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ma = tt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ZC = tt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ea = tt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), eS = tt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Sd = tt(["#text"]), Md = tt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Aa = tt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ed = tt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Fs = tt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), tS = st(/{{[\w\W]*|^[\w\W]*}}/g), rS = st(/<%[\w\W]*|^[\w\W]*%>/g), nS = st(/\${[\w\W]*/g), iS = st(/^data-[\-\w.\u00B7-\uFFFF]+$/), sS = st(/^aria-[\-\w]+$/), Ad = st(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), oS = st(/^(?:\w+script|data):/i), aS = st(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), cS = st(/^html$/i), lS = st(/^[a-z][.\w]*(-[.\w]+)+$/i), Pd = st(/<[/\w!]/g), wd = st(/<[/\w]/g), uS = st(/<\/no(script|embed|frames)/i), dS = st(/\/>/i), Et = {
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
}, fS = function() {
  return typeof window > "u" ? null : window;
}, pS = function(t, r) {
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
}, Nd = function() {
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
}, Fr = function(t, r, n, i) {
  return Je(t, r) && Vr(t[r]) ? he(i.base ? ct(i.base) : {}, t[r], i.transform) : n;
};
function fg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : fS();
  const t = (D) => fg(D);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Et.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = Wt(f, "cloneNode"), g = Wt(f, "remove"), m = Wt(f, "nextSibling"), b = Wt(f, "childNodes"), _ = Wt(f, "parentNode"), E = Wt(f, "shadowRoot"), M = Wt(f, "attributes"), N = o && o.prototype ? Wt(o.prototype, "nodeType") : null, S = o && o.prototype ? Wt(o.prototype, "nodeName") : null, T = o && o.prototype ? Wt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const D = r.createElement("template");
    D.content && D.content.ownerDocument && (r = D.content.ownerDocument);
  }
  let F, U = "", G, J = !1, ae = 0;
  const fe = function() {
    if (ae > 0)
      throw gn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Y = function(h) {
    fe(), ae++;
    try {
      return F.createHTML(h);
    } finally {
      ae--;
    }
  }, Ae = function(h) {
    fe(), ae++;
    try {
      return F.createScriptURL(h);
    } finally {
      ae--;
    }
  }, Pe = function() {
    return J || (G = pS(d, i), J = !0), G;
  }, ee = r, K = ee.implementation, re = ee.createNodeIterator, $e = ee.createDocumentFragment, Qe = ee.getElementsByTagName, tr = n.importNode;
  let le = Nd();
  t.isSupported = typeof ug == "function" && typeof _ == "function" && K && K.createHTMLDocument !== void 0;
  const Ze = tS, Mi = rS, rr = nS, Dn = iS, Ei = sS, ue = oS, ot = aS, Xo = lS;
  let $r = Ad, ke = null;
  const xe = he({}, [...Cd, ...Sa, ...Ma, ...Ea, ...Sd]);
  let oe = null;
  const mt = he({}, [...Md, ...Aa, ...Ed, ...Fs]);
  let Oe = Object.seal(ei(null, {
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
  })), Vt = null, Ns = null;
  const Ot = Object.seal(ei(null, {
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
  let Ai = !0, hr = !0, an = !1, Os = !0, yt = !1, qt = !0, dt = !1, cn = !1, Ir = null, Un = null, Fn = !1, Lr = !1, ln = !1, A = !1, L = !0, B = !1;
  const W = "user-content-";
  let ge = !0, at = !1, Rt = {}, Mt = null;
  const Kn = he({}, [
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
  let Pi = null;
  const Xl = he({}, ["audio", "video", "img", "source", "image", "track"]);
  let Qo = null;
  const Ql = he({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), qs = "http://www.w3.org/1998/Math/MathML", Rs = "http://www.w3.org/2000/svg", nr = "http://www.w3.org/1999/xhtml";
  let zn = nr, Zo = !1, ea = null;
  const Zm = he({}, [qs, Rs, nr], Ca), Zl = tt(["mi", "mo", "mn", "ms", "mtext"]);
  let ta = he({}, Zl);
  const eu = tt(["annotation-xml"]);
  let ra = he({}, eu);
  const ey = he({}, ["title", "style", "font", "a", "script"]);
  let wi = null;
  const ty = ["application/xhtml+xml", "text/html"], ry = "text/html";
  let Ie = null, jn = null;
  const ny = r.createElement("form"), tu = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, na = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (jn && jn === h)
      return;
    (!h || typeof h != "object") && (h = {}), h = ct(h), wi = // eslint-disable-next-line unicorn/prefer-includes
    ty.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? ry : h.PARSER_MEDIA_TYPE, Ie = wi === "application/xhtml+xml" ? Ca : ji, ke = Fr(h, "ALLOWED_TAGS", xe, {
      transform: Ie
    }), oe = Fr(h, "ALLOWED_ATTR", mt, {
      transform: Ie
    }), ea = Fr(h, "ALLOWED_NAMESPACES", Zm, {
      transform: Ca
    }), Qo = Fr(h, "ADD_URI_SAFE_ATTR", Ql, {
      transform: Ie,
      base: Ql
    }), Pi = Fr(h, "ADD_DATA_URI_TAGS", Xl, {
      transform: Ie,
      base: Xl
    }), Mt = Fr(h, "FORBID_CONTENTS", Kn, {
      transform: Ie
    }), Vt = Fr(h, "FORBID_TAGS", ct({}), {
      transform: Ie
    }), Ns = Fr(h, "FORBID_ATTR", ct({}), {
      transform: Ie
    }), Rt = Je(h, "USE_PROFILES") ? h.USE_PROFILES && typeof h.USE_PROFILES == "object" ? ct(h.USE_PROFILES) : h.USE_PROFILES : !1, Ai = h.ALLOW_ARIA_ATTR !== !1, hr = h.ALLOW_DATA_ATTR !== !1, an = h.ALLOW_UNKNOWN_PROTOCOLS || !1, Os = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, yt = h.SAFE_FOR_TEMPLATES || !1, qt = h.SAFE_FOR_XML !== !1, dt = h.WHOLE_DOCUMENT || !1, Lr = h.RETURN_DOM || !1, ln = h.RETURN_DOM_FRAGMENT || !1, A = h.RETURN_TRUSTED_TYPE || !1, Fn = h.FORCE_BODY || !1, L = h.SANITIZE_DOM !== !1, B = h.SANITIZE_NAMED_PROPS || !1, ge = h.KEEP_CONTENT !== !1, at = h.IN_PLACE || !1, $r = QC(h.ALLOWED_URI_REGEXP) ? h.ALLOWED_URI_REGEXP : Ad, zn = typeof h.NAMESPACE == "string" ? h.NAMESPACE : nr, ta = Je(h, "MATHML_TEXT_INTEGRATION_POINTS") && h.MATHML_TEXT_INTEGRATION_POINTS && typeof h.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ct(h.MATHML_TEXT_INTEGRATION_POINTS) : he({}, Zl), ra = Je(h, "HTML_INTEGRATION_POINTS") && h.HTML_INTEGRATION_POINTS && typeof h.HTML_INTEGRATION_POINTS == "object" ? ct(h.HTML_INTEGRATION_POINTS) : he({}, eu);
    const x = Je(h, "CUSTOM_ELEMENT_HANDLING") && h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING == "object" ? ct(h.CUSTOM_ELEMENT_HANDLING) : ei(null);
    if (Oe = ei(null), Je(x, "tagNameCheck") && tu(x.tagNameCheck) && (Oe.tagNameCheck = x.tagNameCheck), Je(x, "attributeNameCheck") && tu(x.attributeNameCheck) && (Oe.attributeNameCheck = x.attributeNameCheck), Je(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && (Oe.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), st(Oe), yt && (hr = !1), ln && (Lr = !0), Rt && (ke = he({}, Sd), oe = ei(null), Rt.html === !0 && (he(ke, Cd), he(oe, Md)), Rt.svg === !0 && (he(ke, Sa), he(oe, Aa), he(oe, Fs)), Rt.svgFilters === !0 && (he(ke, Ma), he(oe, Aa), he(oe, Fs)), Rt.mathMl === !0 && (he(ke, Ea), he(oe, Ed), he(oe, Fs))), Ot.tagCheck = null, Ot.attributeCheck = null, Je(h, "ADD_TAGS") && (typeof h.ADD_TAGS == "function" ? Ot.tagCheck = h.ADD_TAGS : Vr(h.ADD_TAGS) && (ke === xe && (ke = ct(ke)), he(ke, h.ADD_TAGS, Ie))), Je(h, "ADD_ATTR") && (typeof h.ADD_ATTR == "function" ? Ot.attributeCheck = h.ADD_ATTR : Vr(h.ADD_ATTR) && (oe === mt && (oe = ct(oe)), he(oe, h.ADD_ATTR, Ie))), Je(h, "ADD_URI_SAFE_ATTR") && Vr(h.ADD_URI_SAFE_ATTR) && he(Qo, h.ADD_URI_SAFE_ATTR, Ie), Je(h, "FORBID_CONTENTS") && Vr(h.FORBID_CONTENTS) && (Mt === Kn && (Mt = ct(Mt)), he(Mt, h.FORBID_CONTENTS, Ie)), Je(h, "ADD_FORBID_CONTENTS") && Vr(h.ADD_FORBID_CONTENTS) && (Mt === Kn && (Mt = ct(Mt)), he(Mt, h.ADD_FORBID_CONTENTS, Ie)), ge && (ke["#text"] = !0), dt && he(ke, ["html", "head", "body"]), ke.table && (he(ke, ["tbody"]), delete Vt.tbody), h.TRUSTED_TYPES_POLICY) {
      if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw gn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw gn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const R = F;
      F = h.TRUSTED_TYPES_POLICY;
      try {
        U = Y("");
      } catch (V) {
        throw F = R, V;
      }
    } else h.TRUSTED_TYPES_POLICY === null ? (F = void 0, U = "") : (F === void 0 && (F = Pe()), F && typeof U == "string" && (U = Y("")));
    tt && tt(h), jn = h;
  }, ru = he({}, [...Sa, ...Ma, ...ZC]), nu = he({}, [...Ea, ...eS]), iy = function(h, x, R) {
    return x.namespaceURI === nr ? h === "svg" : x.namespaceURI === qs ? h === "svg" && (R === "annotation-xml" || ta[R]) : !!ru[h];
  }, sy = function(h, x, R) {
    return x.namespaceURI === nr ? h === "math" : x.namespaceURI === Rs ? h === "math" && ra[R] : !!nu[h];
  }, oy = function(h, x, R) {
    return x.namespaceURI === Rs && !ra[R] || x.namespaceURI === qs && !ta[R] ? !1 : !nu[h] && (ey[h] || !ru[h]);
  }, ay = function(h) {
    let x = _(h);
    (!x || !x.tagName) && (x = {
      namespaceURI: zn,
      tagName: "template"
    });
    const R = ji(h.tagName), V = ji(x.tagName);
    return ea[h.namespaceURI] ? h.namespaceURI === Rs ? iy(R, x, V) : h.namespaceURI === qs ? sy(R, x, V) : h.namespaceURI === nr ? oy(R, x, V) : !!(wi === "application/xhtml+xml" && ea[h.namespaceURI]) : !1;
  }, Dr = function(h) {
    Qn(t.removed, {
      element: h
    });
    try {
      _(h).removeChild(h);
    } catch {
      if (g(h), !_(h))
        throw gn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, $s = function(h) {
    Ni(h);
    const x = b(h);
    if (x) {
      const V = [];
      Xn(x, (H) => {
        Qn(V, H);
      }), Xn(V, (H) => {
        try {
          g(H);
        } catch {
        }
      });
    }
    const R = M(h);
    if (R)
      for (let V = R.length - 1; V >= 0; --V) {
        const H = R[V], ne = H && H.name;
        if (typeof ne == "string")
          try {
            h.removeAttribute(ne);
          } catch {
          }
      }
  }, un = function(h, x) {
    try {
      Qn(t.removed, {
        attribute: x.getAttributeNode(h),
        from: x
      });
    } catch {
      Qn(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(h), h === "is")
      if (Lr || ln)
        try {
          Dr(x);
        } catch {
        }
      else
        try {
          x.setAttribute(h, "");
        } catch {
        }
  }, cy = function(h) {
    const x = M(h);
    if (x)
      for (let R = x.length - 1; R >= 0; --R) {
        const V = x[R], H = V && V.name;
        if (!(typeof H != "string" || oe[Ie(H)]))
          try {
            h.removeAttribute(H);
          } catch {
          }
      }
  }, Ni = function(h) {
    const x = [h];
    for (; x.length > 0; ) {
      const R = x.pop();
      (N ? N(R) : R.nodeType) === Et.element && cy(R);
      const H = b(R);
      if (H)
        for (let ne = H.length - 1; ne >= 0; --ne)
          x.push(H[ne]);
    }
  }, ly = function(h) {
    if (!qt)
      return;
    const x = [h];
    for (; x.length > 0; ) {
      const R = x.pop(), V = N ? N(R) : R.nodeType;
      if (V === Et.processingInstruction || V === Et.comment && Ge(wd, R.data)) {
        try {
          g(R);
        } catch {
        }
        continue;
      }
      if (V === Et.element) {
        const ne = R, _e = Ie(S ? S(R) : R.nodeName);
        try {
          ne.hasAttribute && ne.hasAttribute("patchsrc") && ne.removeAttribute("patchsrc"), ne.hasAttribute && ne.hasAttribute("for") && _e !== "label" && _e !== "output" && ne.removeAttribute("for");
        } catch {
        }
      }
      const H = b(R);
      if (H)
        for (let ne = H.length - 1; ne >= 0; --ne)
          x.push(H[ne]);
    }
  }, iu = function(h) {
    let x = null, R = null;
    if (Fn)
      h = "<remove></remove>" + h;
    else {
      const ne = Td(h, /^[\r\n\t ]+/);
      R = ne && ne[0];
    }
    wi === "application/xhtml+xml" && zn === nr && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const V = F ? Y(h) : h;
    if (zn === nr)
      try {
        x = new u().parseFromString(V, wi);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = K.createDocument(zn, "template", null);
      try {
        x.documentElement.innerHTML = Zo ? U : V;
      } catch {
      }
    }
    const H = x.body || x.documentElement;
    return h && R && H.insertBefore(r.createTextNode(R), H.childNodes[0] || null), zn === nr ? Qe.call(x, dt ? "html" : "body")[0] : dt ? x.documentElement : H;
  }, su = function(h) {
    const x = T ? T(h) : h.ownerDocument;
    return re.call(
      x || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Is = function(h) {
    return h = Li(h, Ze, " "), h = Li(h, Mi, " "), h = Li(h, rr, " "), h;
  }, ia = function(h) {
    var x;
    h.normalize();
    const R = T ? T(h) : h.ownerDocument, V = re.call(
      R || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let H = V.nextNode();
    for (; H; )
      H.data = Is(H.data), H = V.nextNode();
    const ne = (x = h.querySelectorAll) === null || x === void 0 ? void 0 : x.call(h, "template");
    ne && Xn(ne, (_e) => {
      Bn(_e.content) && ia(_e.content);
    });
  }, Ls = function(h) {
    const x = S ? S(h) : null;
    return typeof x != "string" || Ie(x) !== "form" ? !1 : typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    h.attributes !== M(h) || typeof h.removeAttribute != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    h.nodeType !== N(h) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    h.childNodes !== b(h);
  }, Bn = function(h) {
    if (!N || typeof h != "object" || h === null)
      return !1;
    try {
      return N(h) === Et.documentFragment;
    } catch {
      return !1;
    }
  }, Oi = function(h) {
    if (!N || typeof h != "object" || h === null)
      return !1;
    try {
      return typeof N(h) == "number";
    } catch {
      return !1;
    }
  };
  function ir(D, h, x) {
    D.length !== 0 && Xn(D, (R) => {
      R.call(t, h, x, jn);
    });
  }
  const uy = function(h, x) {
    return !!(qt && h.hasChildNodes() && !Oi(h.firstElementChild) && Ge(Pd, h.textContent) && Ge(Pd, h.innerHTML) || qt && h.namespaceURI === nr && x === "style" && Oi(h.firstElementChild) || h.nodeType === Et.processingInstruction || qt && h.nodeType === Et.comment && Ge(wd, h.data));
  }, dy = function(h, x, R) {
    if (!Vt[x] && lu(x) && (Oe.tagNameCheck instanceof RegExp && Ge(Oe.tagNameCheck, x) || Oe.tagNameCheck instanceof Function && Oe.tagNameCheck(x)))
      return !1;
    if (ge && !Mt[x]) {
      const V = _(h), H = b(h);
      if (H && V) {
        const ne = H.length;
        for (let _e = ne - 1; _e >= 0; --_e) {
          const Le = h === R ? p(H[_e], !0) : H[_e];
          V.insertBefore(Le, m(h));
        }
      }
    }
    return Dr(h), !0;
  }, ou = function(h, x, R, V) {
    return h.length === 0 ? x : x === R || x === V ? ct(x) : x;
  }, au = function(h, x) {
    if (ir(le.beforeSanitizeElements, h, null), h !== x && _(h) === null)
      return at && Ni(h), !0;
    if (Ls(h))
      return Dr(h), !0;
    const R = Ie(S ? S(h) : h.nodeName);
    if (ke = ou(le.uponSanitizeElement, ke, xe, Ir), ir(le.uponSanitizeElement, h, {
      tagName: R,
      allowedTags: ke
    }), h !== x && _(h) === null)
      return at && Ni(h), !0;
    if (uy(h, R))
      return Dr(h), !0;
    if (Vt[R] || !(Ot.tagCheck instanceof Function && Ot.tagCheck(R)) && !ke[R]) {
      const H = dy(h, R, x);
      return H === !1 && ir(le.afterSanitizeElements, h, null), H;
    }
    if ((N ? N(h) : h.nodeType) === Et.element && !ay(h) || (R === "noscript" || R === "noembed" || R === "noframes") && Ge(uS, h.innerHTML))
      return Dr(h), !0;
    if (yt && h.nodeType === Et.text) {
      const H = Is(h.textContent);
      h.textContent !== H && (Qn(t.removed, {
        element: h.cloneNode()
      }), h.textContent = H);
    }
    return ir(le.afterSanitizeElements, h, null), !1;
  }, cu = function(h, x, R) {
    if (Ns[x] || qt && x === "patchsrc" || qt && x === "for" && h !== "label" && h !== "output" || L && (x === "id" || x === "name") && (R in r || R in ny))
      return !1;
    const V = oe[x] || Ot.attributeCheck instanceof Function && Ot.attributeCheck(x, h);
    if (!(hr && Ge(Dn, x))) {
      if (!(Ai && Ge(Ei, x))) {
        if (V) {
          if (!Qo[x]) {
            if (!Ge($r, Li(R, ot, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && h !== "script" && xd(R, "data:") === 0 && Pi[h])) {
                if (!(an && !Ge(ue, Li(R, ot, "")))) {
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
          !(lu(h) && (Oe.tagNameCheck instanceof RegExp && Ge(Oe.tagNameCheck, h) || Oe.tagNameCheck instanceof Function && Oe.tagNameCheck(h)) && (Oe.attributeNameCheck instanceof RegExp && Ge(Oe.attributeNameCheck, x) || Oe.attributeNameCheck instanceof Function && Oe.attributeNameCheck(x, h)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && Oe.allowCustomizedBuiltInElements && (Oe.tagNameCheck instanceof RegExp && Ge(Oe.tagNameCheck, R) || Oe.tagNameCheck instanceof Function && Oe.tagNameCheck(R)))
        ) return !1;
      }
    }
    return !0;
  }, fy = he({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), lu = function(h) {
    return !fy[ji(h)] && Ge(Xo, h);
  }, py = function(h, x, R, V) {
    if (F && typeof d == "object" && typeof d.getAttributeType == "function" && !R)
      switch (d.getAttributeType(h, x)) {
        case "TrustedHTML":
          return Y(V);
        case "TrustedScriptURL":
          return Ae(V);
      }
    return V;
  }, hy = function(h, x, R, V) {
    try {
      R ? h.setAttributeNS(R, x, V) : h.setAttribute(x, V), Ls(h) ? Dr(h) : kd(t.removed);
    } catch {
      un(x, h);
    }
  }, uu = function(h) {
    ir(le.beforeSanitizeAttributes, h, null);
    const x = h.attributes;
    if (!x || Ls(h))
      return;
    oe = ou(le.uponSanitizeAttribute, oe, mt, Un);
    const R = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: oe,
      forceKeepAttr: void 0
    };
    let V = x.length;
    const H = Ie(h.nodeName);
    for (; V--; ) {
      const ne = x[V], _e = ne.name, Le = ne.namespaceURI, bt = ne.value, kt = Ie(_e), oa = bt;
      let ft = _e === "value" ? oa : WC(oa);
      if (R.attrName = kt, R.attrValue = ft, R.keepAttr = !0, R.forceKeepAttr = void 0, ir(le.uponSanitizeAttribute, h, R), ft = R.attrValue, B && (kt === "id" || kt === "name") && xd(ft, W) !== 0 && (un(_e, h), ft = W + ft), qt && Ge(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ft)) {
        un(_e, h);
        continue;
      }
      if (kt === "attributename" && Td(ft, "href")) {
        un(_e, h);
        continue;
      }
      if (!R.forceKeepAttr) {
        if (!R.keepAttr) {
          un(_e, h);
          continue;
        }
        if (!Os && Ge(dS, ft)) {
          un(_e, h);
          continue;
        }
        if (yt && (ft = Is(ft)), !cu(H, kt, ft)) {
          un(_e, h);
          continue;
        }
        ft = py(H, kt, Le, ft), ft !== oa && hy(h, _e, Le, ft);
      }
    }
    ir(le.afterSanitizeAttributes, h, null);
  }, Ds = function(h) {
    let x = null;
    const R = su(h);
    for (ir(le.beforeSanitizeShadowDOM, h, null); x = R.nextNode(); )
      if (ir(le.uponSanitizeShadowNode, x, null), au(x, h), uu(x), Bn(x.content) && Ds(x.content), (N ? N(x) : x.nodeType) === Et.element) {
        const H = E(x);
        Bn(H) && (sa(H), Ds(H));
      }
    ir(le.afterSanitizeShadowDOM, h, null);
  }, sa = function(h) {
    const x = [{
      node: h,
      shadow: null
    }];
    for (; x.length > 0; ) {
      const R = x.pop();
      if (R.shadow) {
        Ds(R.shadow);
        continue;
      }
      const V = R.node, ne = (N ? N(V) : V.nodeType) === Et.element, _e = b(V);
      if (_e)
        for (let Le = _e.length - 1; Le >= 0; --Le)
          x.push({
            node: _e[Le],
            shadow: null
          });
      if (ne) {
        const Le = S ? S(V) : null;
        if (typeof Le == "string" && Ie(Le) === "template") {
          const bt = V.content;
          Bn(bt) && x.push({
            node: bt,
            shadow: null
          });
        }
      }
      if (ne) {
        const Le = E(V);
        Bn(Le) && x.push({
          node: null,
          shadow: Le
        }, {
          node: Le,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(D) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, R = null, V = null, H = null;
    if (Zo = !D, Zo && (D = "<!-->"), typeof D != "string" && !Oi(D) && (D = XC(D), typeof D != "string"))
      throw gn("dirty is not a string, aborting");
    if (!t.isSupported)
      return D;
    cn ? (ke = Ir, oe = Un) : na(h), (le.uponSanitizeElement.length > 0 || le.uponSanitizeAttribute.length > 0) && (ke = ct(ke)), le.uponSanitizeAttribute.length > 0 && (oe = ct(oe)), t.removed = [];
    const ne = at && typeof D != "string" && Oi(D);
    if (ne) {
      ly(D);
      const bt = S ? S(D) : D.nodeName;
      if (typeof bt == "string") {
        const kt = Ie(bt);
        if (!ke[kt] || Vt[kt])
          throw $s(D), gn("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ls(D))
        throw $s(D), gn("root node is clobbered and cannot be sanitized in-place");
      try {
        sa(D);
      } catch (kt) {
        throw $s(D), kt;
      }
    } else if (Oi(D))
      x = iu("<!---->"), R = x.ownerDocument.importNode(D, !0), R.nodeType === Et.element && R.nodeName === "BODY" || R.nodeName === "HTML" ? x = R : x.appendChild(R), sa(R);
    else {
      if (!Lr && !yt && !dt && // eslint-disable-next-line unicorn/prefer-includes
      D.indexOf("<") === -1)
        return F && A ? Y(D) : D;
      if (x = iu(D), !x)
        return Lr ? null : A ? U : "";
    }
    x && Fn && Dr(x.firstChild);
    const _e = ne ? D : x;
    try {
      const bt = su(_e);
      for (; V = bt.nextNode(); )
        au(V, _e), uu(V), Bn(V.content) && Ds(V.content);
    } catch (bt) {
      throw ne && ($s(D), Xn(t.removed, (kt) => {
        kt.element && Ni(kt.element);
      })), bt;
    }
    if (ne)
      return Xn(t.removed, (bt) => {
        bt.element && Ni(bt.element);
      }), yt && ia(D), D;
    if (Lr) {
      if (yt && ia(x), ln)
        for (H = $e.call(x.ownerDocument); x.firstChild; )
          H.appendChild(x.firstChild);
      else
        H = x;
      return (oe.shadowroot || oe.shadowrootmode) && (H = tr.call(n, H, !0)), H;
    }
    let Le = dt ? x.outerHTML : x.innerHTML;
    return dt && ke["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && Ge(cS, x.ownerDocument.doctype.name) && (Le = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + Le), yt && (Le = Is(Le)), F && A ? Y(Le) : Le;
  }, t.setConfig = function() {
    let D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    na(D), cn = !0, Ir = ke, Un = oe;
  }, t.clearConfig = function() {
    jn = null, cn = !1, Ir = null, Un = null, F = G, U = "";
  }, t.isValidAttribute = function(D, h, x) {
    jn || na({});
    const R = Ie(D), V = Ie(h);
    return cu(R, V, x);
  }, t.addHook = function(D, h) {
    typeof h == "function" && Je(le, D) && Qn(le[D], h);
  }, t.removeHook = function(D, h) {
    if (Je(le, D)) {
      if (h !== void 0) {
        const x = BC(le[D], h);
        return x === -1 ? void 0 : VC(le[D], x, 1)[0];
      }
      return kd(le[D]);
    }
  }, t.removeHooks = function(D) {
    Je(le, D) && (le[D] = []);
  }, t.removeAllHooks = function() {
    le = Nd();
  }, t;
}
var hS = fg();
function gS({ structureProtectionMode: e = "off" }) {
  const [t] = ce(), r = X(void 0), [n, i] = pe(void 0), s = de((o) => {
    r.current = o, i(o);
  }, []);
  return j(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const g = NC(p);
      if (!g)
        return !1;
      const m = O();
      return e === "protected" ? m && OC(m, g) ? (p.preventDefault(), !0) : !1 : g !== "deleteBackward" && g !== "deleteForward" ? !1 : a(g, p);
    }, a = (p, g) => {
      const m = O(), b = r.current;
      if (b && m && md(m, b)) {
        if (s(void 0), g.preventDefault(), p !== b.intent)
          return !0;
        const E = Z(b.key) ?? void 0;
        if (b.kind === "verse") {
          if (E) {
            const M = E.getParent(), N = E.getPreviousSibling(), S = E.getNextSibling();
            E.remove(), N ? cg(N) : S && C(S) ? S.select(0, 0) : M?.selectStart();
          }
        } else b.kind === "selection" ? w(m) && m.removeText() : Me(E) && RC(E);
        return !0;
      }
      if (!m)
        return !1;
      const _ = qC(m, p);
      if (_) {
        if (_.kind === "verse") {
          const E = Nf();
          E.add(_.node.getKey()), Zi(E);
        } else {
          const E = Oc();
          E.anchor.set(_.node.getKey(), 0, "element"), E.focus.set(_.node.getKey(), _.node.getChildrenSize(), "element"), Zi(E);
        }
        return s({ key: _.node.getKey(), kind: _.kind, intent: p }), g.preventDefault(), !0;
      }
      if (w(m) && !m.isCollapsed() && El(m)) {
        const E = m.getNodes().filter(ye).map((S) => S.getKey()), { anchor: M, focus: N } = m;
        return s({
          kind: "selection",
          intent: p,
          key: E[0],
          anchor: { key: M.key, offset: M.offset, type: M.type },
          focus: { key: N.key, offset: N.offset, type: N.type }
        }), g.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const g = O();
      return !g || !va(g) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, g) => {
      if (!p)
        return !1;
      const m = hS.sanitize(p), b = new DOMParser().parseFromString(m, "text/html"), _ = $C(ob(t, b)), E = O();
      return w(E) && E.insertNodes(_), g.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const g = O();
      return g && va(g) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const g = O();
      return g && va(g) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        md(O(), p) || s(void 0);
      });
    };
    return Ye(t.registerCommand(Ar, o, Ue), t.registerCommand(xn, c, Ue), t.registerCommand(yr, u, Ue), t.registerCommand(Dy, c, Ue), t.registerCommand(Rc, d, Ue), t.registerCommand(qc, c, Ue), t.registerUpdateListener(f));
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
const WP = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function mS({ textDirection: e }) {
  const [t] = ce();
  return yS(t, e), null;
}
function yS(e, t) {
  j(() => (Od(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Od(e, t);
  })), [e, t]);
}
function Od(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function bS() {
  const [e] = ce();
  return kS(e), null;
}
function kS(e) {
  j(() => {
    if (!e.hasNodes([be, St, Ne, je, pt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Ye(
      e.registerNodeTransform(je, TS),
      e.registerNodeTransform(je, (t) => xS(t, e)),
      e.registerNodeTransform(pt, qd),
      e.registerNodeTransform(St, qd),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(pt, (t) => {
        as(Cr("va"), t), as(Cr("vp"), t);
      })
    );
  }, [e]);
}
function TS(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || z(r) || I(n) || I(r) || Te(n) || Te(r) || qe(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
  // splits leave runs as multiple nodes, e.g. a segmented composition node that Lexical
  // won't merge). No structural space belongs inside a run — inserting one corrupts the
  // word itself (#513, complex scripts worst). This also protects a space-only node from
  // the placeholder cleanup below: between two text nodes it is real content.
  C(r) || // An optbreak (`//`) — like a ref — is an inline UnknownNode carrying SIGNIFICANT surrounding
  // whitespace (Paratext 9 preserves the spaces around `//` byte-for-byte). Forcing a trailing
  // space onto the text before one — or removing a lone space there — corrupts the authored form
  // and makes the space impossible to delete (the transform re-adds it every keystroke). Text
  // adjacent to an inline unknown is left exactly as authored, the same next-sibling exemption
  // already applied to notes, chars, and typed marks. Block-level unknowns (figures, sidebars)
  // keep the existing spacing behavior.
  qe(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  te(e, se) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  ze(n))
    return;
  if (ye(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  ye(r) && cl(e);
}
function xS(e, t) {
  const r = e.getParent();
  !qe(r) || !e.isAttached() || _h(t, e.getKey()) && r.insertAfter(e);
}
function qd(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Te(t); )
    t = t.getLastChild();
  (I(t) || C(t) && Te(t.getParent())) && e.insertBefore(me(" "));
}
function Al(e) {
  if (!z(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !Hc(n)) ? void 0 : e;
}
function _S(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if ($(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function vS() {
  const e = O();
  if (!(!w(e) || !e.isCollapsed()))
    return Al(_S(e.anchor));
}
function CS(e) {
  const t = O();
  let r;
  return w(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = pg(e.target)), r ? Al(it(r, z)) : void 0;
}
function pg(e) {
  const t = Uy(e)?.anchorNode;
  if (Af(t))
    return xs(t) ?? void 0;
}
function SS(e) {
  if (O())
    return;
  const t = pg(e);
  return t ? Al(it(t, z)) : void 0;
}
function MS() {
  const [e] = ce(), t = ng(vS);
  return j(() => {
    const r = (n) => {
      Hr(Gr), t(n);
    };
    return Ye(e.registerCommand(xr, () => {
      const n = SS(e.getRootElement());
      return n && r(n), !1;
    }, Tn), e.registerCommand(So, (n) => {
      const i = CS(n);
      return i && r(i), !1;
    }, Tn));
  }, [e, t]), null;
}
function ES({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = G_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return v(H_, { trigger: e, items: i });
}
function AS({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = De(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? v(NS, { trigger: e, harness: i }) : v(ES, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const PS = [" ", "*"];
function wS(e, t) {
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
function NS({ trigger: e, harness: t }) {
  const [r] = ce(), [n, i] = pe(void 0), s = X({ query: "", options: [] }), o = X(0), a = de((f, p, g) => {
    const m = p.find((b) => b.kind === "note" && b.marker === f);
    if (m) {
      t.apply(m, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const b = O();
      w(b) && b.insertText(`${e}${f}${g ? " " : ""}`);
    });
  }, [r, t, e]);
  j(() => Ye(r.registerCommand(Ar, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const m = s.current.query;
        return m ? (a(m, n.items, !1), Fy(() => {
          const b = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(b ? {
            trigger: "backslash",
            hasTextSelection: b.hasTextSelection,
            items: t.getItems(b),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const b = O();
          w(b) && b.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const g = s.current.query;
      if (n.hasTextSelection) {
        const m = n.items.find((b) => b.marker === g);
        return m && t.apply(m, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
      }
      return a(g, n.items, !0), !0;
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
  }, Ue), r.registerCommand(Of, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, ri)), [r, e, t, n, a]);
  const c = de(() => i(void 0), []), l = de((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = de((f) => {
    const { markerMenuItem: p, applyOpts: g } = f;
    t.apply(p, g);
  }, [t]), d = De(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    wS(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && v($h, { isOpen: !0, children: ({ placement: f }) => v(
    Dh,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? PS : void 0 },
    n.session
  ) });
}
function hg(e) {
  return e.replaceAll(q, "~").replace(/ {2,}/g, (r) => q.repeat(r.length));
}
function OS(e) {
  return e.replaceAll(q, " ").replaceAll("~", q);
}
function qS(e) {
  return e.replace(/ {2,}/g, " ");
}
let mo;
function RS(e) {
  e && (mo = e);
}
function gg(e) {
  return Do(e);
}
function $S(e, t) {
  return e.isEmpty() ? Sf : mg(e.toJSON(), t);
}
function mg(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && Po(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Sf;
  if (r.some(ox)) {
    mo?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = yg(r), i = Ht(n, t);
  return i ? { type: Tr, version: kr, content: i } : void 0;
}
function IS(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), Re({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function LS(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Re({
    type: Nt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function DS(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Ip(r, a, c), Re({
    type: Nt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function US(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Ip(t, o, a), Re({
    type: pt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function FS(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !gg(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(q) && (t[0] = a.slice(1));
  }
  return Re({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function KS(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Re({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function zS(e, t) {
  const { unknownAttributes: r } = e;
  return Re({ type: ih, ...r, content: t });
}
function jS(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Re({ type: ah, marker: r, ...n, content: t });
}
function BS(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Re({
    type: lh,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function VS(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return Re({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function ti(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Re({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Bp({ sid: n, eid: i, ...s }, o)
  });
}
function WS(e) {
  return e.text;
}
function HS(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Re({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function GS(e) {
  const { marker: t } = e;
  return {
    type: oo,
    marker: t === "" ? void 0 : t
  };
}
function Rd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function JS(e, t, r, n, i) {
  const s = Xt.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = ti({
      type: s,
      marker: ni,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = ti({
      type: s,
      marker: _n,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = ti({
      type: s,
      marker: _n
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = ti({
      type: s,
      marker: ni
    });
    i.push(l);
  }
  (!n || !cp(n)) && t.forEach((l) => {
    const u = ti({
      type: s,
      marker: ni,
      eid: l
    });
    i.push(u);
  });
}
function Ht(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, p = a, g = a, m = a, b = a;
    switch (a.type) {
      case jt.getType():
        i.push(
          IS(
            l,
            Ht(l.children, t)
          )
        );
        break;
      case ur.getType():
        i.push(LS(a));
        break;
      case Nt.getType():
        i.push(
          DS(
            u,
            Ht(u.children, t)
          )
        );
        break;
      case St.getType():
      case pt.getType():
        i.push(US(a));
        break;
      case be.getType():
        i.push(
          FS(
            d,
            Ht(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case Xe.getType():
        i.push(
          KS(
            f,
            Ht(f.children, t)
          )
        );
        break;
      case Rn.getType():
        i.push(
          zS(
            a,
            Ht(a.children, t)
          )
        );
        break;
      case yi.getType():
        i.push(
          jS(
            a,
            Ht(a.children, t)
          )
        );
        break;
      case bi.getType():
        i.push(
          BS(
            a,
            Ht(a.children, t)
          )
        );
        break;
      case Ne.getType():
        i.push(
          VS(
            p,
            Ht(p.children, t, p.caller)
          )
        );
        break;
      case Nr.getType():
      case wr.getType():
      case Yt.getType():
      case qf.getType():
      case fr.getType():
        break;
      case et.getType():
        if (s = Ht(
          m.children,
          t,
          r,
          n
        ), s) {
          const _ = m.typedIDs[Wr];
          if (_)
            JS(s, _, o, e[c + 1], i), o = _;
          else {
            const E = s.shift();
            E && (typeof E == "string" ? Rd(i, E) : i.push(E)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Xt.getType():
        i.push(ti(a));
        break;
      case je.getType():
        if (g.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Es(g.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        g.text !== q && !g.text.startsWith(Lc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        g[ks]?.textType !== "attribute" && (!r || g.text !== Pt(r))) {
          let _ = WS(g);
          gg(t) && (n && _.startsWith(q) && (_ = _.slice(1)), _ = qS(OS(_))), Rd(i, _);
        }
        break;
      case On.getType():
        i.push(
          HS(
            b,
            Ht(b.children, t)
          )
        );
        break;
      case Rr.getType():
        i.push(GS(a));
        break;
      case ki.getType():
        mo?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        mo?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function yg(e) {
  const t = e.findIndex((r) => Po(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = yg(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Pa = {
  initialize: RS,
  deserializeEditorState: $S
}, YS = /^sd\d*$/, XS = /* @__PURE__ */ new Set([
  ...Object.entries(Fa).filter(
    ([e, t]) => t.category === k.TitlesHeadings && t.type === y.Paragraph && !YS.test(e)
  ).map(([e]) => e),
  "qa"
]);
function QS(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (gp(i) || Op(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!Rk(i)) {
      t && yo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Bc(i) && XS.has(i.marker) && !yo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    bg(i.children, t).forEach((s) => {
      const o = ZS(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = eM(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function bg(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (kg(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (cp(i)) {
      const s = bg(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n($d(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [$d(i, c.nodes)] });
      });
      return;
    }
    t && yo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function $d(e, t) {
  return { ...e, children: t };
}
function kg(e) {
  return kh(e) && e.number !== "";
}
function yo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => kg(r) || yo(r)) : !1;
}
function ZS(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function eM(e) {
  return {
    type: ao,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: mh
  };
}
const Id = xg([]), tM = {
  type: qf.getType(),
  version: 1
};
let Pl = [], Q, En, Tg, vt;
function rM(e, t) {
  Pl = [], sM(e), oM(t);
}
function nM(e = 0) {
}
function iM(e, t) {
  Q = t ?? Lo();
  let r;
  return e ? (e.type !== Tr && vt?.warn(`This USJ type '${e.type}' didn't match the expected type '${Tr}'.`), e.version !== kr && vt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${kr}'.`
  ), e.content.length > 0 ? (r = pc(Kr(e.content)), us(Q) && (r = QS(r, vt))) : r = [Id]) : r = [Id], Tg?.(Pl), {
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
function sM(e) {
  e && (En = e), e?.addMissingComments && (Tg = e.addMissingComments);
}
function oM(e) {
  e && (vt = e);
}
function wl() {
  return Do(Q);
}
function aM(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function cM(e) {
  let { marker: t } = e;
  t !== rs && vt?.warn(`Unexpected book marker '${t}'!`), t = t ?? rs;
  const { code: r } = e;
  (!r || !jt.isValidBookCode(r)) && vt?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  Q?.markerMode === "editable" || Q?.markerMode === "visible" ? n.push(
    xt("marker", Ee(t) + " " + r + q)
  ) : Q?.hasGutterParaMarkers && n.push(xt("marker", Ee(t) + q, !0));
  const i = aM(e.content);
  i && n.push(ut(wl() ? hg(i) : i));
  const s = Fe(e, uk);
  return Re({
    type: jt.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: pp
  });
}
function lM(e) {
  let { marker: t } = e;
  t !== ro && vt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? ro;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Fe(e, dk);
  let a;
  Q?.markerMode === "visible" && (a = !0);
  const c = [
    ut(Kt(t, r) ?? "")
  ];
  return Q?.markerMode === "editable" && MM(i, s, c), Q?.markerMode === "editable" ? Re({
    type: Nt.getType(),
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
    version: mp
  }) : Re({
    type: ur.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: xp
  });
}
function uM(e) {
  let { marker: t } = e;
  t !== no && vt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? no;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (nv(Q) ?? St).getType(), c = Q?.markerMode === "editable" ? Mp : bh;
  let l, u;
  Q?.markerMode === "editable" ? l = Kt(t, r) : Q?.markerMode === "visible" && (u = !0);
  const d = Fe(e, Ck);
  return Re({
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
function dM(e, t = [], r = !1) {
  let { marker: n } = e;
  be.isValidMarker(n, En?.extraValidMarkers) || vt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (Q?.markerMode === "editable") {
    const [a] = t;
    ai(a) ? a.text = q + a.text : a && t.unshift(ut(q));
  }
  t.length === 0 && t.push(ut(zt)), uc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Fe(e, hk);
  return s || _M(n, o, i), s || dc(e.marker ?? "", i, !1, r), Re({
    type: be.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Tp
  });
}
function xg(e) {
  return {
    type: Yr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Cp
  };
}
function fM(e, t = []) {
  let { marker: r } = e;
  Xe.isValidMarker(r, En?.extraValidMarkers) || vt?.warn(`Unexpected para marker '${r}'!`), r = r ?? or;
  const n = [];
  if (Ti(Q) && (Q?.markerMode === "editable" ? n.push(
    ht(r),
    ut(q, lr, "token")
  ) : (Q?.markerMode === "visible" || Q?.hasGutterParaMarkers) && n.push(
    xt(
      "marker",
      Ee(r) + q,
      Q?.hasGutterParaMarkers
    )
  )), n.push(...t), wl()) {
    const s = n.find(
      (o) => !Qc(o) && !(ai(o) && o.text === q)
    );
    ai(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => q.repeat(o.length)));
  }
  const i = Fe(e, _k);
  return Re({
    type: Xe.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Sp
  });
}
function Nl() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function pM(e, t = []) {
  const r = Fe(e, AT);
  return Re({
    ...Nl(),
    type: Rn.getType(),
    unknownAttributes: r,
    children: t,
    version: sh
  });
}
function hM(e, t = []) {
  const r = Fe(e, NT), n = e.marker ?? Ga, i = [];
  return Q?.markerMode === "editable" ? i.push(
    ht(n),
    ut(q, lr, "token")
  ) : (Q?.markerMode === "visible" || Q?.hasGutterParaMarkers) && i.push(
    xt(
      "marker",
      Ee(n) + q,
      Q?.hasGutterParaMarkers
    )
  ), i.push(...t), Re({
    ...Nl(),
    type: yi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: ch
  });
}
function gM(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Ja;
  Q?.markerMode === "editable" ? s.push(
    ht(o),
    ut(q, lr, "token")
  ) : (Q?.markerMode === "visible" || Q?.hasGutterParaMarkers) && s.push(
    xt(
      "marker",
      Ee(o) + q,
      Q?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const a = Fe(
    e,
    qT
  );
  return Re({
    ...Nl(),
    type: bi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: a,
    children: s,
    version: uh
  });
}
function mM(e, t) {
  const r = Fk(t);
  let n = () => {
  };
  return En?.noteCallerOnClick && (n = En.noteCallerOnClick), Re({
    type: Yt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Eh
  });
}
function yM(e, t) {
  let { marker: r } = e;
  Ne.isValidMarker(r, En?.extraValidMarkers) || vt?.warn(`Unexpected note marker '${r}'!`), r = r ?? Uc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : bl(Q?.noteMode), a = Fe(e, Sb), c = Q?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  Q?.markerMode === "editable" ? (l = ht(r, "opening", !1, c), s || (u = ht(r, "closing"))) : Q?.markerMode === "visible" && (l = xt("marker", Ee(r) + " "), s || (u = xt("marker", nt(r))));
  const d = [];
  let f;
  if (l && d.push(l), Q?.markerMode === "editable" && !o)
    f = ut(Pt(i), void 0, c), d.push(f), SM(n, d), d.push(...t);
  else {
    const p = ut(q, lr, "token");
    f = mM(i, t), d.push(f, p, ...t.flatMap(bM(p)));
  }
  return u && d.push(u), Re({
    type: Ne.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: d,
    direction: null,
    format: "",
    indent: 0,
    version: ep
  });
}
function bM(e) {
  return (t) => op(t) ? [t] : [t, e];
}
function kM(e) {
  let { marker: t } = e;
  (!t || !Xt.isValidMarker(t, En?.extraValidMarkers)) && vt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Fe(e, Dc), s = Vp(e);
  return Re({
    type: Xt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: Xf
  });
}
function Ld(e, t = []) {
  return {
    type: et.getType(),
    typedIDs: { [Wr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function TM(e, t) {
  const { marker: r } = e, n = e.type, i = Fe(e, sk), s = [];
  if (Q?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = el(
      n,
      r,
      i
    );
    o && s.push(xt("marker", o)), a && s.push(xt("attribute", a)), s.push(...t), c && s.push(xt("attribute", c)), l && s.push(xt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    ai(o) && (o.mode = "token");
  }), Re({
    type: On.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: up
  });
}
function xM(e) {
  return {
    type: Rr.getType(),
    marker: e,
    text: Hi(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: Q?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: rh
  };
}
function ht(e, t = "opening", r = !1, n = "normal") {
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
function ut(e, t = void 0, r = "normal") {
  const n = {
    type: je.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[ks] = { textType: t }), n;
}
function xt(e, t, r = !1) {
  const n = {
    type: wr.getType(),
    text: t,
    textType: e,
    version: sp
  };
  return r && (n[ks] = { [Kc.key]: !0 }), n;
}
function ds(e, t) {
  return {
    type: Nr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: dp
  };
}
function uc(e, t, r = !1) {
  Q?.markerMode === "editable" ? t.push(ht(e, "opening", r)) : Q?.markerMode === "visible" && t.push(xt("marker", Ee(e, r)));
}
function dc(e, t, r = !1, n = !1) {
  Q?.markerMode === "editable" ? r ? t.push(ht("", "selfClosing")) : t.push(ht(e, "closing", n)) : Q?.markerMode === "visible" && t.push(
    xt(
      "marker",
      r ? nt("") : nt(e, n)
    )
  );
}
function _M(e, t, r) {
  if (Q?.markerMode !== "editable" || !t) return;
  const n = sr(t, vs(e));
  n && r.push(ut(n, "attribute"));
}
function Dd(e, t) {
  if (e.type !== "ms" || Q?.markerMode !== "editable" && Q?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Fe(e, Dc), o = Wp(
    n,
    i,
    s,
    Vp(e)
  ), a = sr(o, Cs(r ?? ""));
  if (!a) return;
  const c = q + a;
  Q?.markerMode === "editable" ? t.push(ut(c, "attribute")) : t.push(xt("attribute", c));
}
function vM(e, t) {
  const r = e.marker ?? "";
  if (Q?.markerMode === "editable") {
    const n = [];
    uc(r, n), Dd(e, n), dc(r, n, !0), t.push(ds("milestone", n));
  } else
    uc(r, t), Dd(e, t), dc(r, t, !0);
}
function Ud(e, t, r) {
  t !== void 0 && r.push(
    ds(e, [
      ht(e, "opening"),
      ut(q + t, "attribute"),
      ht(e, "closing")
    ])
  );
}
function CM(e, t) {
  Q?.markerMode === "editable" && (Ud("va", e.altnumber, t), Ud("vp", e.pubnumber, t));
}
function SM(e, t) {
  e !== void 0 && t.push(
    ds("cat", [
      ht("cat", "opening"),
      ut(q + e, "attribute"),
      ht("cat", "closing")
    ])
  );
}
function MM(e, t, r) {
  e !== void 0 && r.push(
    ds("ca", [
      ht("ca", "opening"),
      ut(q + e, "attribute"),
      ht("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    ds("cp", [
      ht("cp", "opening"),
      ut(q + t, "attribute")
    ])
  );
}
function Fd(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function EM(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function Kd(e, t) {
  t.marker === _n && t.sid !== void 0 && e.push(t.sid), t.marker === ni && t.eid !== void 0 && EM(e, t.eid);
}
function fc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Ld(o, [...n])] : o, c = e[i];
  Kd(n, c);
  const l = fc(
    e.slice(i + 1, s),
    Fd(t, i + 1),
    c.marker === _n,
    n
  ), u = Ld(l, [...n]), d = e[s];
  Kd(n, d);
  const f = fc(
    e.slice(s + 1),
    Fd(t, s + 1),
    d.marker === _n,
    n
  );
  return [...a, u, ...f];
}
function Kr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(ut(wl() ? hg(i) : i));
    else if (!i.type)
      vt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case jt.getType():
          n.push(cM(i));
          break;
        case Nt.getType():
          n.push(lM(i));
          break;
        case pt.getType():
          Q?.hasSpacing || n.push(tM), n.push(uM(i)), CM(i, n);
          break;
        case be.getType():
          n.push(
            dM(i, Kr(i.content, !0), t)
          );
          break;
        case Xe.getType():
          n.push(fM(i, Kr(i.content)));
          break;
        case Ne.getType():
          n.push(yM(i, Kr(i.content)));
          break;
        case Xt.getType():
          Qf(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Pl?.push(i.sid)), n.push(kM(i)), vM(i, n);
          break;
        case Rr.getType():
          n.push(xM(i.marker ?? ""));
          break;
        case ih:
          n.push(pM(i, Kr(i.content)));
          break;
        case ah:
          n.push(hM(i, Kr(i.content)));
          break;
        case lh:
          n.push(gM(i, Kr(i.content)));
          break;
        default:
          vt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(TM(i, Kr(i.content)));
      }
  }), fc(n, r);
}
function pc(e) {
  const t = e.findIndex(
    (n) => gp(n) || Op(n) || Bc(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    wT(n)
  );
  if (t >= 0) {
    const n = pc(e.slice(0, t)), i = e[t], s = pc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || kh(n)))
    return [xg(e)];
  return e;
}
const tn = {
  initialize: rM,
  reset: nM,
  serializeEditorState: iM
};
function _g(e) {
  if (e && !P(e)) {
    if (C(e)) return e;
    if ($(e))
      for (const t of e.getChildren()) {
        const r = _g(t);
        if (r) return r;
      }
  }
}
function AM() {
  const e = O();
  if (!w(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((C(t) && !P(t) ? Sn(t) : void 0) && C(t)) {
      const i = me(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      ci(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = _g(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(q) ? q : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return C(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of vg(e)) {
    if (!Sn(t)) continue;
    ci(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(q) && r.setTextContent(n.slice(q.length));
  }
  return !0;
}
function vg(e) {
  const [t, r] = Mf(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!C(a) || P(a) || te(a, se) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function PM() {
  const e = O();
  if (!w(e)) return !1;
  const t = e.focus.getNode();
  return Sn(t) ? Me(nl(t)) : !1;
}
function Cg() {
  let e = O();
  if (!w(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (P(t) && !ol(t, e.anchor.offset)) {
    const c = t.getParent();
    if (I(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = O(), !w(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!C(t) || P(t) || !Sn(t)) return !1;
  const r = nl(t);
  if (!Me(r)) return !1;
  const n = me(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  ci(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return I(a) ? il(a) : o.select(0, 0), !0;
}
const Sg = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${qp(Se().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = O(), t = Jc(e), r = ul(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = zk(0, o);
        const a = kx(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Fp(c) && Yc(parseInt(n, 10), c);
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
function hc(e, t) {
  return Ne.isValidMarker(e, t) || !!Sg[e] || Xe.isValidMarker(e, t) || be.isValidMarker(e, t);
}
function wM(e, t) {
  return be.isNoteContentMarker(e) ? !1 : be.isValidMarker(e, t);
}
function Mg(e, t, r, n, i, s) {
  const o = Oh(
    e,
    void 0,
    void 0,
    t,
    n ?? Lo(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function gc(e, t, r, n, i, s, o) {
  if (Ne.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = Mg(
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
  const a = IM(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = O();
      w(u) && (gh(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = Ku(d, tn, r), g = ca(p);
      if (w(u)) {
        const m = u.anchor.getNode(), b = m.getParent(), _ = Sn(m), E = u.anchor.key === u.focus.key;
        if (I(g) && _ && E && !wa(g, o))
          qM(
            u,
            g,
            m,
            r?.markerMode === "editable"
          );
        else if (I(g) && !E && !wa(g, o) && RM(u))
          $M(u, g, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          LM(
            u,
            () => ca(p)
          );
        else if ($(g) && !g.isInline()) {
          const M = u.insertParagraph();
          if (M) {
            const N = M.getChildren();
            g.append(...N), M.replace(g), Me(g) && _i(g) || g.selectStart();
          }
        } else if (I(g) && C(m) && !P(m) && I(m.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        wa(g, o)) {
          const M = m.getParent();
          if (I(M)) {
            const N = u.anchor.offset;
            if (N === 0) m.insertBefore(g);
            else if (N >= m.getTextContentSize()) m.insertAfter(g);
            else {
              const [T] = m.splitText(N);
              T.insertAfter(g);
            }
            g.getChildren().forEach((T) => {
              P(T) && T.setNested(!0);
            });
            const S = g.getChildren().find((T) => C(T) && !P(T));
            S && C(S) ? S.select(
              S.getTextContentSize(),
              S.getTextContentSize()
            ) : g.selectEnd();
          }
        } else if (C(m) && !P(m) && u.isCollapsed() && (z(b) || I(b) && z(b.getParent()))) {
          const M = I(b) ? b : void 0, N = M ? NM(m, u.anchor.offset) : [];
          let T = (M ?? m).insertAfter(g);
          if (Or(g)) {
            const F = {
              ...r || Lo(),
              markerMode: "hidden"
            }, U = Ku(
              d,
              tn,
              F
            ), G = ca(U);
            T = T.insertAfter(G);
          }
          if (N.length > 0 && M) {
            const F = bo(M).append(...N);
            T.insertAfter(F), M.isEmpty() && M.remove();
          } else C(T.getNextSibling()) || T.insertAfter(me(q));
          $(T) && T.selectEnd();
        } else if (u.insertNodes([g]), HM(g), f) {
          const M = Nf();
          M.add(g.getKey()), Zi(M);
        } else if (I(g)) {
          const M = g.getChildren().find((N) => C(N) && !P(N));
          M && C(M) ? M.select(
            M.getTextContentSize(),
            M.getTextContentSize()
          ) : g.selectEnd();
        } else {
          const M = g.getNextSibling();
          M ? M.selectStart() : g.selectStart();
        }
      } else
        u?.insertNodes([g]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function NM(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function wa(e, t) {
  return ((t ?? co).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function OM(e, t) {
  t && e.getChildren().forEach((i) => {
    P(i) && i.setNested(!0);
  }), e.getChildren().some((i) => P(i) && i.getMarkerSyntax() === "closing") || e.append(lt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function qM(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && I(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !C(r)) {
    const o = e.anchor.offset;
    if (C(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else C(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = fi(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (ci(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), C(i) && !i.getTextContent().startsWith(q) && i.setTextContent(q + i.getTextContent());
    const o = t.getChildren().find((a) => C(a) && !P(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => C(o) && !P(o));
  C(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function RM(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (P(n) || I(n)) continue;
    if (!C(n) || n.getType() !== je.getType() || te(n, se) === "attribute") return !1;
    const i = nl(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Sn(n) && (r = !0);
  }
  return r;
}
function $M(e, t, r) {
  const n = vg(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Sn(a)) return;
    ci(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(q) && c.setTextContent(l.slice(q.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(q) || i.setTextContent(q + i.getTextContent());
  const s = t.getChildren().find((a) => C(a) && !P(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function IM(e, t) {
  let r = Sg[e];
  return r || (Xe.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: Xe.getType(), marker: e, content: [] }] })
  } : be.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: be.getType(), marker: e };
      return (be.isValidFootnoteMarker(e) || be.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function LM(e, t) {
  const r = e.getNodes(), [n, i] = fi(e);
  let s;
  r.forEach((o, a) => {
    if ($(s) && s.isParentOf(o))
      return;
    const c = Eg(
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
    s || (s = t(), c.insertBefore(s), l = !0, I(s) && s.getChildren().some((d) => P(d) && d.getMarkerSyntax() === "opening") && OM(s, I(s.getParent()))), UM(c, s, l);
  }), (C(s) || $(s)) && s.selectEnd();
}
function fi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Ol(e) {
  return Te(e) || z(e) || z(e.getParent());
}
function Eg(e, t, r, n, i) {
  if (!Ol(e)) {
    if (C(e))
      return DM(e, t, r, n, i);
    if ($(e) && e.isInline())
      return e;
  }
}
function DM(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function UM(e, t, r) {
  if (C(t)) {
    const n = mc(e, t);
    t.setTextContent(n), e.remove();
  } else if ($(t)) {
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
    mc(e, t), r && I(t) && t.getChildren().some((s) => P(s)) && C(e) && !P(e) && !e.getTextContent().startsWith(q) && e.setTextContent(q + e.getTextContent());
  }
}
function mc(e, t) {
  let r = e.getTextContent();
  if (C(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    cl(n), C(n) || t.insertBefore(me(" "));
  }
  return r;
}
function Ag(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = An(u, t);
    if (!f) return !1;
    const p = C(u) ? u.getTextContentSize() : 0;
    if (zd(f, r), C(u) && u.isAttached()) {
      const g = u.getTextContentSize(), m = Math.max(p - g, 0), b = Math.max(0, Math.min(d - m, g)), _ = O();
      w(_) && _.setTextNodeRange(u, b, u, b);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = fi(e);
  if (!Rl(n, t, s, o)) return !1;
  const a = ql(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = An(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = Og(d, a);
    f && (zd(f, r), l = !0);
  }), qg(a, i), l;
}
function zd(e, t) {
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
    C(n) && i.startsWith(q) && n.setTextContent(i.slice(q.length));
  }), La(e);
}
function ql(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Eg(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    C(o) && n.push(o);
  }), n;
}
function An(e, t) {
  let r = e, n;
  for (; r && !Me(r); ) {
    if (z(r)) return;
    !n && I(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Pg(e) {
  const t = it(
    e,
    (r) => z(r) || Me(r)
  );
  return z(t);
}
function wg(e) {
  return e.filter(
    (t) => !Ol(t) && (C(t) || $(t) && t.isInline())
  );
}
function FM(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!C(i) || Ol(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function KM(e, t, r) {
  return e.getChildren().some(
    (n) => $(n) && t.some((i) => n.isParentOf(i)) && !Ng(n, r)
  );
}
function Rl(e, t, r, n, i) {
  const s = wg(e), o = FM(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = An(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !KM(l, s, o);
  });
}
function Ng(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Bt(r));
}
function Og(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if ($(u) && t.some((d) => u.isParentOf(d))) {
      if (!Ng(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Bt(n[s - 1]) && (s -= 1), o < n.length - 1 && Bt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(bo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(bo(e).append(...c)), e;
}
function bo(e) {
  return Ky(e);
}
function qg(e, t) {
  const r = O(), n = e[0], i = e[e.length - 1];
  if (!w(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function zM(e, t, r) {
  if (e.isCollapsed()) {
    const l = An(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Eu(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = fi(e);
  if (!Rl(n, r, i, s, t)) return !1;
  const o = ql(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = An(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = Og(u, o);
    d && (Eu(d, t), c = !0);
  }), c;
}
function jM(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (b) => b !== t
  ), s = e.getNodes(), [o, a] = fi(e);
  if (!!!i?.some(
    (b) => Rl(s, b, o, a)
  ) && !BM(s, t)) return !1;
  let l = !1;
  i?.forEach((b) => {
    const _ = O();
    w(_) && Ag(_, b, n) && (l = !0);
  });
  const u = O();
  if (!w(u)) return l;
  const d = u.isBackward(), [f, p] = fi(u), g = ql(
    u.getNodes(),
    f,
    p
  );
  if (g.length === 0) return l;
  const m = g.filter(
    (b) => !Pg(b) && !An(b, t)
  );
  return m.length > 0 && (VM(m).forEach((b) => WM(b, t)), l = !0), qg(g, d), l;
}
function BM(e, t) {
  return wg(e).some(
    (r) => !Pg(r) && !An(r, t)
  );
}
function VM(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function WM(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => I(a) && a.getMarker() === t
  ), s = i ? bo(i) : vr(t);
  e[0].insertBefore(s), s.append(...e), i === r || mc(e[0], s);
}
function HM(e) {
  ye(e) && (cl(e.getPreviousSibling()), xh(e.getNextSibling()));
}
const Rg = {
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
}, jd = "psc-active-text", Ks = "psc-empty-text";
function GM({ viewOptions: e }) {
  const [t] = ce(), r = X(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return j(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(jd), r.current = o, o && t.getElementByKey(o)?.classList.add(jd);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        So,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Ks}`);
          if (!c) return !1;
          const l = xs(c);
          if (!ye(l)) return !1;
          const u = l.getParent();
          if (!$(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        Ft
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = Na(), f = JM(), p = [], g = [];
          return Se().getChildren().forEach((m) => {
            if (!$(m)) return;
            const { emptyKeys: b, nonEmptyKeys: _ } = XM(m);
            p.push(...b), g.push(..._);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: g };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(Ks) : t.getElementByKey(d)?.classList.add(Ks);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(Ks));
      }),
      t.registerCommand(
        $c,
        () => (i(void 0), !1),
        Ft
      ),
      t.registerCommand(
        zy,
        () => {
          const o = t.getEditorState().read(Na);
          return o !== r.current && i(o), !1;
        },
        Ft
      )
    ];
    return i(t.getEditorState().read(Na)), Ye(...s);
  }, [t, n]), null;
}
function Na() {
  return YM(O() ?? void 0)?.getKey();
}
function JM() {
  const e = O();
  if (!w(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!$(n)) return;
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
    ye(s[a]) && (o = s[a].getKey());
  return o;
}
function YM(e) {
  if (w(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function XM(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ye(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ye(c)) break;
      if (!(Ct(c) || P(c)) && c.getTextContent().replaceAll(Xs, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const QM = /^\+/;
function $l(e, t) {
  const r = t.replace(QM, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function $g(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Ig(e, t) {
  return $g(e, t) !== void 0;
}
function yc(e, t) {
  const r = $g(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function ko(e, t, r) {
  const n = $(e) ? e.getChildren().filter(P) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function ZM(e, t, r, n, i) {
  const s = $l(n, t);
  if (!s) {
    ko(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && ko(e, "invalid", i);
}
function Yi(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (I(s)) {
      const o = s.getMarker();
      i || ZM(s, o, t, r, n), Yi(s, t, r, n, i || o === "xq");
    } else if (ye(s)) {
      if (i) continue;
      const o = $l(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else z(s) ? Yi(s, s.getMarker(), r, n, i) : qe(s) || $(s) && Yi(s, t, r, n, i);
}
function eE(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = $l(e, a);
    if (!c) {
      ko(o, "unknown", r), yc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    yc(n, l) || ko(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Se().getChildren())
    qe(o) || (gt(o) || We(o) ? i(o, o.getMarker()) : ie(o) ? (i(o, o.getMarker()), s(o) && Yi(o, o.getMarker(), e, r, !1)) : $(o) && s(o) && Yi(o, "p", e, r, !1));
  return r;
}
function tE(e) {
  return !!e?.includes("(basic)");
}
function rE(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Lg(e, t) {
  return !e.startsWith("zpa") && e !== "c" && hc(e, t);
}
function Il(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Dg(e, t) {
  const r = [];
  for (const n of t) {
    const i = Il(e, n);
    i && yc(r, i);
  }
  return r;
}
function Hs(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: rE(e.description),
    isBasic: tE(e.description)
  };
}
function nE(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function bc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : nE(e.marker, t.marker);
}
function kc(e, t, r) {
  if (t.noteMarker) return [];
  const n = Dg(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Lg(i.marker, r)
  ).filter((i) => {
    const s = Il(e, i.marker);
    return s !== void 0 && Ig(n, s);
  }).map((i) => Hs(i, "paragraph")).sort(bc);
}
function iE(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Lg(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Hs(c, "character")).sort(bc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Hs(c, "character")),
    ...a.map((c) => Hs(c, "note"))
  ].sort(bc);
}
function sE(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function oE(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function aE(e, t, r) {
  return [
    ...sE(e, t.openCharMarkers),
    ...iE(e, t, r)
  ].sort(oE);
}
function cE(e, t, r) {
  if (t.source === "paragraph") return kc(e, t, r);
  const n = aE(e, t, r);
  return n.length > 0 ? n : kc(e, t, r);
}
function lE(e, t, r) {
  const n = kc(e, t, r), i = Dg(e, t.previousParaMarkers), s = Il(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Ig(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const In = String.raw`\w-`, Ug = "a-z0-9", uE = `[a-z][${Ug}]*`, dE = new RegExp(
  String.raw`^\\(\+?[${In}]+)[ \u00A0]$`
), Fg = new RegExp(String.raw`^\\(\+?[${In}]+)$`), fE = new RegExp(String.raw`^\\\+?[${In}]*\*$`), pE = new RegExp(
  String.raw`^\\(\+?[${In}]+)(?:[ \u00A0]|$)`
), hE = new RegExp(
  String.raw`^\\(\+?)([${In}]+)`
), gE = new RegExp(
  String.raw`\\\+?[${In}]+(?:\\?\*|[ \u00A0])`
), mE = new RegExp(
  String.raw`\\\+?[${In}]*$`
), yE = new RegExp(
  String.raw`^\\(${uE})( |$)`
), bE = new RegExp(
  String.raw`\\[${Ug}+*]*$`,
  "i"
), rt = "￼";
function Kg(e) {
  return e.length > 1 && e.startsWith(q) && e.charAt(1) !== rt ? e.slice(1) : e;
}
function Bd(e) {
  return Qc(e) ? e.markerSyntax ?? "opening" : void 0;
}
function zg(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = tn.serializeEditorState(
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
  for (; Bd(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Pt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Bd(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function zs(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Ui(e, t) {
  mE.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += rt;
}
function Ut(e) {
  return e.replaceAll(q, " ");
}
function kE(e, t, r = !1) {
  if (Do(t)) return Ut(e);
  if (e === q) return " ";
  const n = r && e.startsWith(q), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(q, "~");
}
function Xi(e) {
  const t = e.getTextContent();
  return qn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Ll(e, t) {
  const r = e[t];
  if (!Ke(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = No(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!P(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function jg(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Dl(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = is(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function Ul(e) {
  return !!e.getUnknownAttributes();
}
function Ko(e, t) {
  const r = t(e)?.type;
  return r === y.Milestone || r === void 0 && Eo(e);
}
function Bg(e, t) {
  return Ke(e) ? !Ko(e.getMarker(), t) : z(e) || qe(e) ? !0 : we(e) ? Ul(e) : I(e) ? Vg(e, t) : !1;
}
function Vg(e, t) {
  if (Qk(e)) return !0;
  const r = e.getMarker();
  return !Lb(r) && t(r) === void 0;
}
const Lt = "", Dt = "";
function Vd(e) {
  return e.flatMap((t) => ze(t) ? t.getChildren() : [t]);
}
function Bi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Ke(s)) {
      const o = Ll(e, i);
      Ko(s.getMarker(), r) && jg(o) ? (t.push(
        Lt,
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
      ), Bi(Vd(o), t, r), t.push(Dt)) : t.push(rt), i += o.length;
    } else if (we(s)) {
      const o = Dl(e, i);
      Ul(s) ? t.push(rt) : (t.push(
        Lt,
        "verse",
        Ut(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Bi(Vd(o), t, r), t.push(Dt)), i += o.length;
    } else P(s) ? t.push(Lt, "marker", Ut(s.getTextContent()), Dt) : sn(s) ? t.push(Lt, "unmatched", Ut(s.getTextContent()), Dt) : Bg(s, r) ? t.push(rt) : Co(s) ? t.push(" ") : C(s) ? t.push(
      Ut(
        n ? Kg(Xi(s)) : Xi(s)
      )
    ) : I(s) ? (t.push(Lt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Bi(s.getChildren(), t, r, !0), t.push(Dt)) : $(s) ? (t.push(Lt, s.getType()), Bi(s.getChildren(), t, r), t.push(Dt)) : t.push(rt);
  }
}
function vi(e, t) {
  const r = [];
  return Bi(e, r, t), r.join("");
}
function Er(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function pi(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Fl(e) {
  return e.type ?? "";
}
function Wg(e, t, r) {
  return t === "closing" ? nt(e, r) : t === "selfClosing" ? nt("") : Ee(e, r);
}
function Oa(e, t) {
  const r = e[t];
  if (!(!r || Fl(r) !== "attribute-run"))
    return Er(r) ?? [];
}
function Ci(e, t) {
  const r = [];
  return Vi(e, r, t), r.join("");
}
function Vi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Fl(s);
    if (o === "ms") {
      const l = s, u = Oa(e, i + 1);
      u && Ko(l.marker ?? "", r) ? (t.push(
        Lt,
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
      ), Vi(u, t, r), t.push(Dt), i += 1) : t.push(rt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(rt);
        continue;
      }
      t.push(
        Lt,
        "verse",
        Ut(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = Oa(e, i + 1 + u);
      for (; d; )
        Vi(d, t, r), u++, d = Oa(e, i + 1 + u);
      t.push(Dt), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Lt,
        "marker",
        Ut(
          Wg(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        Dt
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(Lt, "char", JSON.stringify(l.unknownAttributes ?? null)), Vi(Er(s) ?? [], t, r, !0), t.push(Dt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(rt);
      continue;
    }
    if (o === "unmatched") {
      t.push(Lt, "unmatched", Ut(pi(s) ?? "")), t.push(Dt);
      continue;
    }
    const a = pi(s);
    if (a !== void 0) {
      t.push(Ut(n ? Kg(a) : a));
      continue;
    }
    const c = Er(s);
    c ? (t.push(Lt, o), Vi(c, t, r), t.push(Dt)) : t.push(rt);
  }
}
function zo(e) {
  let t = 0;
  for (const r of e) {
    const n = Er(r);
    if (n) {
      t += zo(n);
      continue;
    }
    const i = pi(r);
    if (i !== void 0)
      for (const s of i) s === rt && t++;
  }
  return t;
}
function fs(e, t, r, n, i) {
  Pn(e.getChildren(), t, r, n, i);
}
function Pn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (P(a))
      zs(t, a, Ut(a.getTextContent()));
    else if (Ke(a)) {
      s();
      const c = Ll(e, o);
      Ko(a.getMarker(), r) && jg(c) ? Pn(c, t, r, n) : Ui(t, [a, ...c]), o += c.length;
    } else if (z(a) || qe(a))
      s(), Ui(t, [a]);
    else if (we(a)) {
      s();
      const c = Dl(e, o);
      Ul(a) ? Ui(t, [a, ...c]) : (zs(t, a, Ut(Xi(a))), Pn(c, t, r, n)), o += c.length;
    } else if (I(a))
      s(), Vg(a, r) ? Ui(t, [a]) : fs(a, t, r, n, { pending: !0 });
    else if (Co(a))
      s(), zs(t, a, " ");
    else if (C(a)) {
      const c = qn(a) || te(a, se) === "attribute", l = s() && !c;
      zs(
        t,
        a,
        c ? Ut(Xi(a)) : kE(Xi(a), n, l)
      );
    } else $(a) ? fs(a, t, r, n, i) : (s(), Ui(t, [a]));
  }
}
function Hg(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== y.Unknown && n !== y.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (qe(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return fs(e, i, t, r), i;
}
function Kl(e, t, r) {
  if (e.length === 0) return;
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e) {
    if (!ie(i)) return;
    const s = Hg(i, t, r);
    if (!s) return;
    n.text.length > 0 && (n.text += " ");
    const o = n.text.length;
    s.spans.forEach(
      (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), n.sentinels.push(...s.sentinels), n.text += s.text;
  }
  return n;
}
function Gg(e, t) {
  let r = 0;
  const n = (i) => {
    if (C(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(rt);
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
    } else $(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function Tc(e, t = []) {
  for (const r of e)
    we(r) ? t.push(r) : $(r) && Tc(r.getChildren(), t);
  return t;
}
function Jg(e) {
  let t = 0;
  const r = (n) => {
    if (C(n))
      for (const i of n.getTextContent()) i === rt && t++;
    else $(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Ln(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === rt && t++;
    else r.content && (t += Ln(r.content));
  return t;
}
function TE(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), $(i) && fs(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const ps = /\s/;
function Yg(e) {
  return e.filter(jo).length;
}
function jo(e) {
  if (e.isSentinel) return !1;
  const t = Z(e.key);
  return C(t) && !P(t) && te(t, se) === "attribute";
}
function xE(e) {
  if (e.isSentinel) return !1;
  const t = Z(e.key);
  return P(t) || jo(e);
}
function Wd(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && jo(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      ps.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function Bo(e, t, r) {
  const n = Wd(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !xE(i) ? Wd(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: Yg(e.spans) };
}
function qa(e) {
  if (e.isSentinel) return !1;
  const t = Z(e.key);
  return P(t) && t.getMarkerSyntax() !== "opening";
}
function _E(e) {
  const t = Z(e.key);
  if (!P(t)) return;
  const r = t.getParent();
  if (!I(r)) return;
  const n = r.getParent();
  if (n)
    return {
      key: n.getKey(),
      offset: r.getIndexWithinParent() + 1,
      type: "element"
    };
}
function vE(e) {
  const t = Z(e.key), r = t?.getParent(), n = r?.getChildren();
  if (!t || !r || !n) return;
  const i = n.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = we(t) ? Dl(n, i) : Ke(t) ? Ll(n, i) : [], o = s[s.length - 1] ?? t;
  return { key: r.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" };
}
function Vo(e, t, { addressDisplayBytes: r = !1 } = {}) {
  const { text: n, spans: i } = e, s = Yg(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const p of i) {
    const g = p.end - p.start, m = !p.isSentinel && (r || !qa(p));
    if (!(o && jo(p))) {
      if (u) {
        if (!m) continue;
        a = { key: p.key, offset: 0 };
        break;
      }
      for (let b = 0; b < g; b++) {
        const _ = n[p.start + b];
        if (c === 0 && (l === 0 || !ps.test(_))) {
          if (m) {
            a = { key: p.key, offset: b };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? ps.test(_) || c-- : l--;
      }
      if (c === 0 && l === 0) {
        if (m && !r) {
          a = { key: p.key, offset: g };
          break;
        }
        u = !0;
      }
    }
  }
  if (a) return { ...a, type: "text" };
  const d = i[i.length - 1];
  if (d && qa(d)) {
    const p = _E(d);
    if (p) return p;
  }
  if (d?.isSentinel) {
    const p = vE(d);
    if (p) return p;
  }
  const f = [...i].reverse().find((p) => !p.isSentinel && !qa(p));
  if (f) return { key: f.key, offset: f.end - f.start, type: "text" };
}
function Xg(e, t, r) {
  const n = Vo(e, t);
  if (n?.type === "text") {
    const i = Z(n.key);
    if (i && C(i)) {
      i.select(n.offset, n.offset);
      return;
    }
  } else if (n) {
    const i = Z(n.key), s = $(i) ? i.getChildAtIndex(n.offset - 1) : void 0;
    if (s) {
      s.selectNext(0, 0);
      return;
    }
  }
  r.find($)?.selectStart();
}
function Qg(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find($)?.selectStart();
      return;
    }
    Xg(TE(e, n, i), t, e);
  }
}
function CE(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find($)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  Pn(e, s, n, i), Xg({ text: s.text, spans: s.spans }, t, e);
}
function Zg(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Kl(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = O();
  if (w(c)) {
    for (let m = c.anchor.getNode(); m; m = m.getParent())
      if (e.some((b) => b.is(m))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Bo(s, c.anchor.key, c.anchor.offset));
  }
  const l = Pr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Ln(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = tn.serializeEditorState(
    { type: Tr, version: kr, content: l },
    r
  );
  if (Ci(u.root.children, n) === vi(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((m) => ys(m));
  if (Jg(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = Tc(e).map((m) => ({
    number: m.getNumber(),
    sid: m.getSid()
  })), p = e[0];
  d.forEach((m) => p.insertBefore(m)), Gg(d, s.sentinels), e.forEach((m) => m.remove());
  const g = Tc(d);
  for (let m = 0; m < f.length && m < g.length; m++)
    g[m].getNumber() === f[m].number && g[m].setSid(f[m].sid);
  return Qg(d, o, a, n, r), !0;
}
function Wo(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Ne.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!P(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(pr(s) || C(s) && s.getTextContent() === Pt(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const u = n[a - 1];
    if (!P(u) || u.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return Pn(c, l, t, r), { out: l, contentNodes: c };
}
function em(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(rt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function SE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Wo(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = O();
  if (w(u)) {
    for (let N = u.anchor.getNode(); N; N = N.getParent())
      if (e.is(N)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = Bo(o, u.anchor.key, u.anchor.offset));
  }
  const d = Pr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Ln(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], g = em(p), m = zg(e, p, g, r);
  if (m.failure !== void 0)
    return m.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      m.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (zo(m.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const b = e.getCategory() !== g;
  if (b && e.setCategory(g), Ci(m.children, n) === vi(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), b;
  const _ = m.children.map((N) => ys(N));
  if (Jg(_) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), b;
  const E = a[0];
  if (E)
    _.forEach((N) => E.insertBefore(N));
  else {
    const N = e.getChildren().find((S) => P(S) && S.getMarkerSyntax() === "closing");
    _.forEach((S) => N ? N.insertBefore(S) : e.append(S));
  }
  Gg(_, o.sentinels);
  const M = new Set(o.sentinels.flat().map((N) => N.getKey()));
  return a.forEach((N) => {
    M.has(N.getKey()) || N.remove();
  }), CE(_, c, l, n, r), !0;
}
const tm = /* @__PURE__ */ new Set(["ca", "cp"]), zl = "cp";
function rm(e) {
  if (!cr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (fs(e, t, ar, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Pr(r, { getMarker: ar }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === zl)
  );
}
function Si(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (I(r) && tm.has(r.getMarker()) || rm(r)) {
      t.push(r);
      continue;
    }
    ie(r) && r.getMarker() === zl && t.push(r);
    break;
  }
  return t;
}
function ME(e) {
  const t = (n) => I(n) && tm.has(n.getMarker()) || rm(n);
  if (t(e) || ie(e) && e.getMarker() === zl)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (ve(n)) return n;
      if (!t(n)) return;
    }
}
function jl(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Si(e);
  if (n.some((s) => ie(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Pn(e.getChildren(), i, t, r), Pn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function EE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Si(e)], o = jl(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = O();
  if (w(l)) {
    for (let g = l.anchor.getNode(); g; g = g.getParent())
      if (s.some((m) => m.is(g))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Bo(o, l.anchor.key, l.anchor.offset));
  }
  const u = Pr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Ln(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = tn.serializeEditorState(
    { type: Tr, version: kr, content: u },
    r
  );
  if (Ci(f.root.children, n) === vi(s, n)) {
    let g = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), g = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), g = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), g = !0), g || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), g;
  }
  const p = f.root.children.map((g) => ys(g));
  return ve(p[0]) ? (p.forEach((g) => e.insertBefore(g)), s.forEach((g) => g.remove()), Qg(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function hs(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (qe(n)) return;
    !t && (z(n) || ie(n) || ve(n)) && (t = n), jy(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? ME(r) : void 0) ?? t;
}
function Gt(e, t) {
  const r = hs(e);
  return r ? z(r) ? SE(r, t) : ve(r) ? EE(r, t) : Zg([r], t) : !1;
}
const AE = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Hd(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !AE.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function Gs(e, t) {
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
          t.push(`\\${n}`), Hd(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), Gs(r.content, t), Hd(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Gs(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), Gs(r.content, t);
      }
    }
}
function Gd(e, t, r) {
  const n = hs(e);
  if (!ie(n)) return !1;
  const i = O();
  if (!w(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Hg(n, t, r);
  if (!o) return !1;
  const a = Pr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    ps.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  Gs(a, l);
  for (const u of l.join("").replaceAll(q, "~")) {
    if (ps.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function PE(e) {
  return [lt(e), wo()];
}
function Bl(e) {
  Zt(e, 2);
}
function wE(e) {
  const t = O();
  if (!w(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Vl(e) {
  const t = wE(e);
  e.splice(0, 0, PE(e.getMarker())), t && Bl(e);
}
function To(e, t) {
  e.setMarker(t), Vl(e), Bl(e);
}
function NE(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!qn(n)) {
    if (C(n) && !P(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(q), Tt(n, se, lr), n.setMode("token");
      return;
    }
    if (zp(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(wo());
  }
}
function Jd(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : $(n) ? n.getChildrenSize() : 0;
  if (r === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = n; !s.is(t); ) {
    if (r === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function Qi(e) {
  for (let t = e; t; t = t.getParent())
    if (ie(t)) return t;
}
function OE(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Qi(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Qi(r.getNode())?.is(s) ?? !1, a = Qi(n.getNode())?.is(s) ?? !1;
    return !(o && !Jd(r, s, "start") || a && !Jd(n, s, "end"));
  });
}
function xc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = O();
  if (!(!w(r) || r.isCollapsed()))
    for (const n of OE(r)) t.add(n.getKey());
}
function qE(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = O();
  if (!w(r) || !r.isCollapsed()) return;
  const n = Qi(r.focus.getNode());
  n && t.add(n.getKey());
}
function RE(e) {
  const t = O();
  !w(t) || t.isCollapsed() || t.getNodes().some((r) => P(r)) && (xc(e), t.removeText());
}
function $E(e, t) {
  if (!Ti(t.viewOptions)) return;
  if (Bt(e.getFirstChild())) {
    NE(e, t);
    return;
  }
  if (t.splitExpected.current) {
    Vl(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ie(o) && !o.is(e))) {
      To(e, or), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (ie(r)) {
    const n = e.getChildren().filter((a) => !qn(a)), i = O();
    let s = !1;
    if (w(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Qi(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || $(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Zt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  To(e, or);
}
function IE(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = sr(t, vs(e.getMarker()));
  return r === "" ? void 0 : r;
}
function LE(e) {
  const t = e.getChildren().filter((s) => !P(s) && te(s, se) !== "attribute"), r = t[0];
  r && C(r) && r.getTextContent().startsWith(q) && r.setTextContent(r.getTextContent().slice(1));
  const n = IE(e);
  n && t.push(me(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function DE(e, t) {
  const r = e.getChildren(), n = r.some((s) => P(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => C(c) && !P(c) && c.getTextContent() === Pt(s)
    ), a = hi(e).some(({ node: c }) => P(c));
    if (!o && !a) return;
    r.forEach((c) => {
      P(c) || (C(c) && c.getTextContent() === Pt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => P(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function UE(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(P(r) && r.getMarkerSyntax() === "opening")) {
    LE(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => P(o) && o.getMarkerSyntax() === "closing");
  i && !s && Gt(e, t);
}
function nm(e, t, r) {
  if (!P(e.getFirstChild()) && r?.markerMode === "editable" && Ti(r)) {
    To(e, t);
    return;
  }
  Bh(e, t);
}
function im() {
  const e = O();
  if (!w(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = sm(e);
    return t !== "removed" ? t : (_c(), "handled");
  }
  return _c() ? "handled" : "declined";
}
function FE(e, t) {
  if (!t) return e;
  const r = yE.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== y.Paragraph ? e : e.slice(r[0].length);
}
function Yd(e, t) {
  const r = O();
  if (!w(r)) return "declined";
  if (r.isCollapsed()) {
    if (!om())
      return "declined";
  } else {
    const s = sm(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => FE(s, t)
  );
  Xd(n ?? "");
  for (const s of i)
    _c(), Xd(s);
  return "handled";
}
function KE(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = xs(n);
  if (!i) return !1;
  const s = Qt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !C(i) || P(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function sm(e) {
  const t = Qt(e.anchor.getNode()), r = Qt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), zE() ? "removed" : "needs-plain-split");
}
function Xd(e) {
  if (e === "") return;
  const t = O();
  w(t) && t.insertText(e);
}
function zE() {
  const e = O();
  if (!w(e) || !e.isCollapsed()) return !1;
  const t = Qt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => P(r) && r.getMarkerSyntax() === "opening");
}
function om() {
  const e = O();
  if (!w(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Qt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function _c() {
  const e = O();
  if (!w(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = om();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = vr("fp", { closed: "false" });
  i.append(lt("fp"));
  const s = C(t) && !P(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    ci(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (jk(u), i.append(u));
  }
  return i.getChildren().every(P) && i.append(me(zt)), am(i), !0;
}
function am(e) {
  const t = e.getChildren().find((r) => !P(r));
  if (C(t)) {
    const r = t.getTextContent().startsWith(q) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if ($(t)) {
    am(t);
    return;
  }
  e.selectEnd();
}
function jE(e) {
  const t = [];
  let r = e;
  for (; r; )
    I(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function BE(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Se().getChildren()) {
    if (t && n.is(t)) break;
    (gt(n) || We(n) || ie(n)) && r.push(n.getMarker());
  }
  return r;
}
function VE(e) {
  let t = e;
  for (; $(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function WE(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Bt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && qn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(VE(i)) && r === 0 : !1;
}
function HE(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Bt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && qn(i) && t.is(i) && r === 0;
}
function GE() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function JE() {
  const e = O();
  if (!w(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = it(t, ie), s = !n && (!i || HE(i, t, r)) ? "paragraph" : "character", o = Qt(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: BE(t),
    openCharMarkers: jE(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: ol(t, r),
    anchorRect: GE()
  };
}
function YE() {
  const e = O();
  if (!w(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!C(t) || P(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = bE.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function XE(e, t, r) {
  nm(e, t, r), Bl(e);
}
function QE(e, t, r) {
  const n = O();
  if (!w(n)) return;
  const i = n.focus.getNode(), s = it(i, ie);
  if (t === "backslash" && s && WE(s, i, n.focus.offset)) {
    XE(s, e, r);
    return;
  }
  lm(e, r);
}
function ZE(e, t) {
  const r = O();
  return !w(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function cm(e) {
  const t = O();
  return w(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function e1(e, t, r, n) {
  if (w(O()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && YE(), e.kind === "closeTag") {
    cm(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && im() !== "declined") return;
  if (e.kind === "paragraph" && Xe.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    QE(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Ne.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Mg(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  gc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Ts(), reference: r });
}
function lm(e, t) {
  const r = O();
  if (!w(r)) return;
  const n = Ti(t);
  if (Cg()) {
    const s = O();
    if (!w(s)) return;
    const o = it(s.anchor.getNode(), ie);
    if (!o) return;
    o.setMarker(e), n && Vl(o);
    return;
  }
  const i = r.insertParagraph();
  ie(i) && (n ? To(i, e) : i.setMarker(e));
}
function t1() {
  const [e] = ce();
  return j(() => e.registerCommand(Rf, () => !0, Ft), [e]), null;
}
function um(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== y.Unknown ? n === y.Paragraph : !(Ne.isValidMarker(r) || Eo(r));
}
function r1(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== y.Unknown ? n === y.Character : !(Ne.isValidMarker(r) || Eo(r));
}
function n1(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = pE.exec(e)?.[1];
  return r === void 0 ? !1 : !um(r, t);
}
function dm(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !n1(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ie(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== y.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (ie(i))
    return [i, r];
}
function fm(e, t) {
  const r = dm(e, t.getMarker);
  return r !== void 0 && Zg(r, t);
}
function i1(e, t) {
  const r = O();
  w(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function pm(e) {
  const t = hE.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function s1(e) {
  const t = O();
  if (!w(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = pm(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function o1(e) {
  const t = O();
  if (!w(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (z(e.getParent()) && C(r)) {
    const n = r.getNextSibling();
    if (I(n)) {
      il(n);
      return;
    }
  }
  C(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Qd(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = pm(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  o1(e);
}
function Zd(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function hm(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Gt(e, r);
  const n = s1(e), i = e.getParent();
  if (ie(i)) {
    if (!um(t, r.getMarker))
      return fm(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Gt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Zd(s, t) && Qd(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (I(i) || z(i)) {
    const s = t.replace(/^\+/, "");
    if (!(I(i) ? r1(t, r.getMarker) : Ne.isValidMarker(s)))
      return Gt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Gt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(P).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (i1(c, nt(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Zd(a, s) && Qd(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Gt(e, r);
}
function a1(e) {
  const t = O();
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
function c1(e, t) {
  const r = e.getTextContent();
  if (nn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (ze(e.getParent()) && Zc(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !a1(e)) {
    Yk(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = dE.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), hm(e, n[1], t);
      return;
    }
    if (fE.test(r)) {
      t.pendingKeys.delete(e.getKey()), Gt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = nt(e.getMarker(), e.getNested());
    if (I(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = O(), o = w(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = me(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function l1(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (nh(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function gm(e) {
  if (!Wf(e)?.length)
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
const Fi = gm("v"), u1 = gm("c"), ef = /^[ \u00A0]*$/;
function tf(e, t, r) {
  const n = e.getNextSibling();
  if (C(n) && n.getType() === je.getType() && n.getMode() === "normal" && te(n, se) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = me(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function d1(e, t) {
  const r = e.getTextContent(), n = Kt("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (Fi.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = Fi.valueAndRest.exec(c);
    if (l && ef.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (Fi.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Fi.valueAndRest.exec(r);
  if (!s) {
    const c = Fi.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = O(), p = w(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Kt("v", u));
      const g = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      tf(e, d, g);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Gt(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), ef.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Kt("v", o)), a && tf(e, a, a.length);
}
const f1 = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function p1(e, t) {
  const r = e.getParent();
  if (!z(r) || r.getIsCollapsed() !== !1 || !Wf(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!P(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === Pt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = f1.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Pt(a)), !0;
}
function h1(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!C(t)) return;
  const r = Kt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = u1.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function mm(e) {
  if (Ke(e)) {
    const { wrapper: t } = No(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (z(e)) {
    const { wrapper: t } = Gp(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (ve(e)) {
    const t = [], r = Jp(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Xp(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (we(e)) {
    const t = [], r = is(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = is(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function g1(e) {
  const t = O();
  if (!w(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return mm(e).some((n) => r.is(n));
}
function m1(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ie(e) && zp(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of ss)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Ps(l, e) && (i || g1(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of mm(e))
    l.remove(), n = !0;
  let s = !1;
  if (I(e)) {
    const l = Ek(e);
    l !== void 0 && qb(l) && (wp(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of ss)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (GT(l, e)) {
        as(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && fh(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Ro(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function rf(e) {
  return C(e) && e.getType() === je.getType() && e.getMode() === "normal" && te(e, se) !== "attribute";
}
function y1(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = Z(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && rf(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && rf(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function js(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = y1(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = Z(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (P(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (nn(c)) continue;
      const g = Fg.exec(p);
      c.getMarkerSyntax() === "opening" && g ? n = hm(c, g[1], e) || n : r === "idle" && Gd(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : fm(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Gt(c, e) || n;
      continue;
    }
    const l = Qr(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = m1(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && Gd(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = Gt(u, e) || n;
    }
  }
  return n;
}
function ym(e) {
  if (sn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (I(t)) return Wi(t) !== void 0;
  return !1;
}
function b1(e) {
  const t = Qr(e);
  if (!t) return !1;
  const r = Cr(t.kind);
  return !Ro(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function nf(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (gt(t) || qe(t) || oh(t)) return !0;
  return !1;
}
function k1(e, t) {
  const r = e.getTextContent(), n = te(e, se), i = e.getParent();
  if (n !== "attribute" && ve(i)) {
    r.replace(/^[ \u00A0]+/, "") === Kt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (p1(e, t)) return;
  if (n === "attribute") {
    b1(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && ym(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !nf(e))
      t.pendingKeys.add(e.getKey());
    else if (Qp(e)) t.pendingKeys.add(e.getKey());
    else if (ve(hs(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      I(a) && Np(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (nf(e)) return;
  const s = O(), o = w(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (gE.test(o)) {
    if (zb(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), Gt(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function T1(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : fh(e, t);
}
function x1(e) {
  const t = (r) => {
    if (P(r)) {
      nn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (sn(r)) {
      nh(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of ss)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Ps(n, r) || T1(n, r)) && e.pendingKeys.add(r.getKey());
    if (we(r)) {
      r.getTextContent() !== Kt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (C(r)) {
      if (r.getType() !== je.getType() || te(r, se) === "attribute") return;
      const n = r.getParent();
      if (ve(n)) {
        r.getTextContent() !== Kt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && ym(r) || i.includes("//") || Qp(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (I(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!qe(r) && !gt(r)) {
      if (ze(r) && r.getChildrenSize() === 0) {
        const n = Qr(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      $(r) && r.getChildren().forEach(t);
    }
  };
  Se().getChildren().forEach(t);
}
function _1(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = te(e, se);
  if (r === "attribute" || r === lr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (gt(o) || ve(o) || qe(o)) return;
  const n = t.startsWith(q) && I(e.getParent()), i = n ? t.slice(1) : t, s = (n ? q : "") + i.replace(/ (?=[ \u00A0])/g, q).replace(new RegExp("(?<=\\u00A0) ", "g"), q);
  s !== t && e.setTextContent(s);
}
function v1(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function vc(e) {
  const t = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!t) return;
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(t.getData("text/plain")), i = t.getData("text/html"), s = i ? r(v1(i)) : "";
  return {
    plainText: n,
    html: i,
    htmlText: s,
    text: n || s,
    isInternal: !!t.getData("application/x-lexical-editor")
  };
}
function C1(e) {
  const t = vc(e);
  if (!t || t.isInternal) return !1;
  const { plainText: r, html: n, htmlText: i } = t, s = r.includes(q) ? r : n.includes(q) || i.includes(q) ? i : void 0;
  if (!s) return !1;
  const o = O();
  if (!w(o)) return !1;
  e?.preventDefault();
  const a = s.replaceAll(q, "~"), c = a.split(`
`);
  if (c.length < 2)
    return o.insertText(a), !0;
  o.isCollapsed() || o.removeText();
  const l = Ts();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(Js, void 0), u === "") return;
    const f = O();
    w(f) && f.insertText(u);
  }), !0;
}
function S1(e) {
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
function M1(e) {
  const t = O();
  if (!w(t) || t.isCollapsed()) return;
  const r = {
    "text/plain": t.getTextContent().replaceAll(q, " ")
  }, n = Gy(e), i = Jy(e);
  return n && (r["text/html"] = S1(n)), i && (r["application/x-lexical-editor"] = i), r;
}
function sf(e, t, r) {
  const n = O();
  if (!w(n) || n.isCollapsed()) return !1;
  const i = M1(t);
  if (!i) return !1;
  if (!e || !("clipboardData" in e))
    return Hy(t, null, i), r && n.removeText(), !0;
  if (e.clipboardData == null) return !1;
  e.preventDefault();
  for (const [s, o] of Object.entries(i)) e.clipboardData.setData(s, o);
  return r && n.removeText(), !0;
}
const bm = $f(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Ra(e) {
  const t = e();
  return Hr(Ef), Hr(Yf), t;
}
const of = 8, E1 = 1e3;
function Zn(e, t) {
  const r = we(e) ? ["va", "vp"] : Ke(e) ? ["milestone"] : z(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    ZT(Cr(n), e, t.pendingKeys);
}
function A1(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Ic) || i.updateTags.has(es)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = Z(o);
        if (!c) continue;
        const l = Qr(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = Z(o.getKey());
        c?.isAttached() && Cr(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Ye(
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
    e.registerMutationListener(je, r),
    e.registerMutationListener(fr, r),
    e.registerMutationListener(wr, r),
    e.registerMutationListener(Nr, r)
  );
}
function P1(e, t, r) {
  return Ye(
    e.registerCommand(
      yr,
      (n) => {
        if (Xh()) return !1;
        const i = vc(n);
        if (!i) return !1;
        const s = i.text;
        if (s.includes(`
`)) {
          const a = (r ? s.replaceAll(q, "~") : s).split(`
`);
          let c = Yd(a, t.getMarker);
          if (c === "declined" && KE(e) && (c = Yd(a, t.getMarker)), c === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      br
    ),
    e.registerCommand(
      yr,
      (n) => {
        const i = vc(n);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !PM()) return !1;
        n?.preventDefault();
        const o = O();
        return w(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Js, void 0), a === "") return;
          const l = O();
          w(l) && l.insertText(a);
        }), !0;
      },
      Ue
    ),
    e.registerCommand(
      yr,
      () => (t.splitExpected.current = !0, !1),
      Ft
    )
  );
}
function w1({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n
}) {
  const [i] = ce(), s = e?.markerMode === "editable", o = !!e && Do(e), a = X(void 0), c = X(n);
  return j(() => {
    c.current = n;
    const l = a.current;
    l && (e && (l.viewOptions = e), l.getMarker = t ?? ar, l.logger = r);
  }, [e, t, r, n]), j(() => {
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
    const u = BT(i, l.pendingKeys);
    let d, f = !1, p, g = !1, m = !1, b = 0;
    const _ = () => b < of ? !1 : (l.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${of} consecutive mutating passes; leaving ${l.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...l.pendingKeys].join(", ")}`
    ), !0), E = (T, F = "departure") => {
      i.update(() => {
        b = Ra(
          () => js(l, T, F)
        ) ? b + 1 : 0;
      });
    };
    let M;
    const N = () => {
      if (M !== void 0 && clearTimeout(M), M = void 0, m || l.pendingKeys.size === 0) return;
      const T = c.current ?? E1;
      T < 0 || (M = setTimeout(() => {
        M = void 0, !(m || l.pendingKeys.size === 0) && (f || _() || E(void 0, "idle"));
      }, T));
    }, S = Ye(
      i.registerNodeTransform(fr, (T) => {
        if (i.isComposing()) return;
        c1(T, l);
        const F = Qr(T);
        F && (we(F.owner) || z(F.owner) || ve(F.owner) || Ke(F.owner) && No(F.owner).wrapper === void 0) && Zn(F.owner, l);
      }),
      i.registerNodeTransform(pt, (T) => {
        i.isComposing() || (d1(T, l), Zn(T, l));
      }),
      i.registerNodeTransform(Nt, (T) => {
        i.isComposing() || (h1(T), T.isAttached() && Zn(T, l));
      }),
      i.registerNodeTransform(Xe, (T) => {
        i.isComposing() || $E(T, l);
      }),
      i.registerNodeTransform(be, (T) => {
        if (!i.isComposing()) {
          UE(T, l);
          for (const F of ["separator", "char"])
            T.isAttached() && Ps(Cr(F), T) && l.pendingKeys.add(T.getKey());
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
      i.registerNodeTransform(Xt, (T) => {
        i.isComposing() || Zn(T, l);
      }),
      i.registerNodeTransform(Nr, (T) => {
        if (i.isComposing()) return;
        const F = Qr(T);
        F && (Ke(F.owner) || we(F.owner) || z(F.owner) || ve(F.owner)) && Zn(F.owner, l);
      }),
      i.registerNodeTransform(Ne, (T) => {
        i.isComposing() || (DE(T, l), Zn(T, l));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      i.registerNodeTransform(Rr, (T) => {
        i.isComposing() || l1(T, l);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      i.registerNodeTransform(je, (T) => {
        i.isComposing() || k1(T, l);
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
        je,
        (T) => {
          i.getEditorState().read(() => {
            for (const [F, U] of T) {
              if (U === "destroyed") continue;
              const G = Z(F);
              !G || te(G, se) !== "attribute" || ze(G.getParent()) || i.getElementByKey(F)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      A1(i, l),
      ...o ? [
        i.registerNodeTransform(je, (T) => {
          i.isComposing() || _1(T);
        }),
        i.registerCommand(
          Mo,
          (T) => sf(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            T && typeof T == "object" && "clipboardData" in T ? T : null,
            i,
            !1
          ),
          Ue
        ),
        i.registerCommand(
          xn,
          (T) => sf(
            T && typeof T == "object" && "clipboardData" in T ? T : null,
            i,
            !0
          ),
          Ue
        ),
        i.registerCommand(
          yr,
          (T) => C1(
            // Same jsdom-safe duck-check as COPY above.
            T && typeof T == "object" && "clipboardData" in T ? T : null
          ),
          Ue
        )
      ] : [],
      i.registerCommand(
        xn,
        () => (xc(l), !1),
        br
      ),
      i.registerCommand(
        qc,
        () => (i.isComposing() || RE(l), !1),
        ri
      ),
      i.registerCommand(
        So,
        () => (f = !1, b = 0, N(), !1),
        Ft
      ),
      i.registerCommand(
        Ar,
        (T) => (f = !1, b = 0, N(), (T.key === "Backspace" || T.key === "Delete") && (xc(l), qE(l)), i.isComposing() || !T.ctrlKey || T.altKey || T.shiftKey || T.metaKey || T.key !== " " && T.code !== "Space" || !AM() ? !1 : (T.preventDefault(), !0)),
        Ue
      ),
      i.registerCommand(
        Of,
        (T) => {
          const F = im();
          F === "needs-plain-split" && i.dispatchCommand(Js, void 0);
          const U = F !== "declined" || ex();
          return U && T?.preventDefault(), js(l), U;
        },
        Ue
      ),
      i.registerCommand(
        Js,
        () => (l.splitExpected.current = !0, Cg()),
        Ue
      ),
      P1(i, l, o),
      i.registerCommand(
        bm,
        () => {
          if (f) return !0;
          const T = i.getRootElement(), F = T?.ownerDocument, U = !!T && !!F && F.hasFocus() && T.contains(F.activeElement);
          let G;
          if (U) {
            const J = O();
            G = w(J) ? J.focus.key : d;
          }
          return Ra(() => js(l, G)), !0;
        },
        Ft
      ),
      i.registerCommand(
        $c,
        () => {
          if (f) return !1;
          const T = O(), F = w(T) ? T.focus.key : d;
          return Ra(() => js(l, F)), !1;
        },
        Ft
      ),
      i.registerUpdateListener(({ editorState: T, tags: F }) => {
        l.splitExpected.current = !1, l.wholeParaDeleteExpected?.clear(), l.collapsedDeleteCaretParas?.clear(), l.rebuildAttempted.clear();
        const U = T.read(() => {
          const J = O();
          return w(J) ? J.focus.key : void 0;
        }), G = p;
        if (U !== void 0 && (p = U), F.has(Ic)) {
          l.pendingKeys.clear(), T.read(() => x1(l)), f = !0, U !== void 0 && (d = U);
          return;
        }
        if (F.has(Gr)) {
          U !== void 0 && U !== G && (f = !0);
          return;
        }
        f || (U !== void 0 && (d = U), N(), !(g || U === void 0) && [...l.pendingKeys].some((J) => J !== U) && (g = !0, queueMicrotask(() => {
          g = !1, !m && (_() || E(d));
        })));
      })
    );
    return () => {
      m = !0, M !== void 0 && clearTimeout(M), M = void 0, u(), S(), a.current = void 0;
    };
  }, [i, s, o]), null;
}
const N1 = ["status_unknown", "status_invalid"], km = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, O1 = Object.values(km);
function q1(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = km[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function af(e) {
  e.classList.remove(...N1), e.removeAttribute("aria-description"), O1.includes(e.title) && e.removeAttribute("title");
}
function R1(e, t, r, n) {
  const i = (a) => a.read(() => Se().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = Z(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function $1(e) {
  const t = Z(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : P(t) && t.getParent()?.getKey() === r.getKey();
}
function I1({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ce(), i = e?.markerMode === "editable";
  return j(() => {
    if (!i) return;
    const s = t ?? co;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = eE(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || $1(f)) continue;
            const g = Z(f)?.getTopLevelElement();
            !g || l.has(g.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && af(p);
        }
        for (const [f, p] of d) {
          const g = n.getElementByKey(f);
          g && q1(g, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          R1(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && af(u);
      }
    };
  }, [n, i, t, r]), null;
}
function ws(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Er(o);
    a && $(s) && ws(s.getChildren(), a, r);
  }
}
function Tm(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Er(o);
      if (a) {
        n(a);
        continue;
      }
      const c = pi(o);
      if (c === void 0 || !c.includes(rt)) continue;
      const l = c.split(rt), u = [];
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
function xm(e, t, r) {
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
function _m(e, t) {
  const r = [];
  for (const n of e)
    Bg(n, t) || ((ie(n) || I(n)) && r.push(n.getMarker()), $(n) && r.push(..._m(n.getChildren(), t)));
  return r;
}
function vm(e) {
  const t = [];
  for (const r of e) {
    const n = Fl(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Er(r);
    i && t.push(...vm(i));
  }
  return t;
}
function Wl(e, t, r) {
  const n = _m(e, r), i = vm(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function Cm(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = O();
  let n, i;
  if (w(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = Z(t.key), i = t.offset;
  else
    return;
  if (!(!C(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function Hl(e, t) {
  const r = Sm(e, t);
  return r ? e.text.slice(0, r.start) + e.text.slice(r.end) : e.text;
}
function Sm(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  if (!(s < n.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function Mm(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Kl(e, o, s);
  if (!c) return;
  const l = i ? Hl(c, i) : c.text, u = Pr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (Ln(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = tn.serializeEditorState(
    { type: Tr, version: kr, content: u },
    s
  ).root.children;
  if (zo(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = xm(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ci(d, o) === vi(e, o) && Wl(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Tm(d, f);
  const g = L1(e), m = Em(d);
  for (let b = 0; b < g.length && b < m.length; b++)
    g[b].sid !== void 0 && m[b].number === g[b].number && (m[b].sid = g[b].sid);
  return d;
}
function L1(e) {
  const t = [], r = (n) => {
    we(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : $(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Em(e) {
  const t = [];
  for (const r of e) {
    Ap(r) && t.push(r);
    const n = Er(r);
    n && t.push(...Em(n));
  }
  return t;
}
function D1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Wo(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? Hl(l, i) : l.text, f = Pr(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (Ln(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const g = p.content ?? [], m = em(g), b = e.getCategory() !== m, _ = zg(e, g, m, s);
  if (_.failure !== void 0) {
    _.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : _.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const E = _.children;
  if (zo(E) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const M = xm(l, t, n);
  if (!M) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ci(E, o) === vi(u, o) && Wl(u, E, o)) {
    if (b)
      return { rebuilt: void 0, contentNodes: u, category: m, categoryChanged: b };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Tm(E, M), { rebuilt: E, contentNodes: u, category: m, categoryChanged: b };
}
function cf(e) {
  return e.$?.textType;
}
function U1(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && cf(e) === cf(t);
}
function F1(e) {
  const t = [];
  for (const r of e) {
    const n = Z(r);
    n?.isAttached() && qe(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function K1(e) {
  if (!P(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!z(t)) return;
  const r = e.getTextContent();
  if (nn(e)) return;
  const n = Fg.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function lf(e, t) {
  const r = e;
  r.marker = t, r.text = Wg(t, r.markerSyntax, r.nested);
}
function z1(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Ne.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && lf(a.node, s);
  const c = n.getChildren().filter(P).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && lf(l.node, s);
}
function Am(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = jl(e, i, n);
  if (!o) return;
  const a = r ? Hl(o, r) : o.text, c = Pr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (Ln(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = tn.serializeEditorState(
    { type: Tr, version: kr, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Si(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Ci(u, i) === vi(d, i) && Wl(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function Pm(e, t, r) {
  const n = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = (d) => {
    z(d) ? s.set(d.getKey(), d) : ve(d) ? o.set(d.getKey(), d) : n.set(d.getKey(), [d]);
  };
  for (const d of e) {
    const f = Z(d);
    if (!f?.isAttached()) continue;
    const p = hs(f);
    if (p) {
      if (c(p), P(f)) {
        const g = dm(f, t.getMarker);
        g && i.push(g);
      }
      if (z(p)) {
        const g = K1(f);
        g && a.set(p.getKey(), g);
      }
    }
  }
  const l = /* @__PURE__ */ new Set();
  for (const d of i)
    d.some((f) => l.has(f.getKey())) || (d.forEach((f) => {
      l.add(f.getKey()), n.delete(f.getKey());
    }), n.set(d[0].getKey(), d));
  if (r) {
    const d = hs(r.node);
    d && c(d);
  }
  const u = F1(e);
  return {
    paraScopes: n,
    noteScopes: s,
    chapterScopes: o,
    noteGlyphRenames: a,
    husks: u,
    huskKeys: new Set(u.map((d) => d.getKey()))
  };
}
function wm(e, t) {
  e.splice(t, 1);
  const r = e[t - 1], n = e[t], i = r && pi(r), s = n && pi(n);
  r && n && i !== void 0 && s !== void 0 && U1(r, n) && (r.text = i + s, e.splice(t, 1));
}
function Gl(e, t, r, n, i) {
  const s = t.get(e.getKey()), o = s ? Er(s.node) : void 0;
  if (!s || !o) return !1;
  const a = D1(e, t, r, n, i);
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
function j1(e, t, r, n, i) {
  const s = Cm(n, i);
  if (t.size === 0 && !s) return;
  const { paraScopes: o, noteScopes: a, chapterScopes: c, noteGlyphRenames: l, husks: u, huskKeys: d } = Pm(t, r, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && u.length === 0)
    return;
  const f = /* @__PURE__ */ new Map();
  ws(Se().getChildren(), e.root.children, f);
  for (const p of l.values()) z1(p, f);
  for (const p of a.values())
    Gl(p, f, r, d, s);
  for (const p of o.values()) {
    const g = f.get(p[0].getKey());
    if (!g) continue;
    const m = Mm(p, f, r, d, s);
    if (!m) continue;
    const b = g.siblings.indexOf(g.node);
    b < 0 || g.siblings.splice(b, p.length, ...m);
  }
  for (const p of c.values()) {
    const g = f.get(p.getKey());
    if (!g) continue;
    const m = 1 + Si(p).length, b = Am(p, r, s);
    if (!b) continue;
    const _ = g.siblings.indexOf(g.node);
    _ < 0 || g.siblings.splice(_, m, ...b);
  }
  for (const p of u) {
    const g = f.get(p.getKey());
    if (!g) continue;
    const m = g.siblings.indexOf(g.node);
    m < 0 || wm(g.siblings, m);
  }
  return mg(e, r.viewOptions);
}
function B1({
  viewOptions: e,
  logger: t
}) {
  const [r] = ce(), n = Ti(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return j(() => {
    if (n)
      return r.registerNodeTransform(
        Xe,
        (i) => V1(i, t)
      );
  }, [r, n, t]), null;
}
function V1(e, t) {
  e.getMarker() !== or && (e.isEmpty() || Bt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${or}" (key ${e.getKey()})`
  ), e.setMarker(or)));
}
function Bs(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const Nm = /\s/, W1 = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function Ho(e) {
  return W1.exec(e)?.[1] ?? e;
}
function Go(e, t) {
  const r = e.jsonPath.slice(Ho(e.jsonPath).length);
  return { ...e, jsonPath: `${jr(t)}${r}` };
}
function H1(e, t) {
  let r = Se();
  for (let n = 0; n < t.length; n += 1) {
    if (!$(r)) return;
    const i = dr(r)[t[n]];
    if (i?.type !== "element") return;
    r = i.node;
    const s = e.byFirstLiveKey.get(r.getKey());
    if (s?.kind === "note") return { plan: s, depth: n };
  }
}
function G1(e, t) {
  const r = ms(Ho(t.jsonPath));
  if (r.length === 0) return { kind: "live", location: t };
  const n = e.settledToLiveTopIndex(r[0]);
  if (n.plan)
    return {
      kind: "scope",
      plan: n.plan,
      scratchIndexes: [n.indexWithinScope, ...r.slice(1)],
      location: t
    };
  const i = [n.liveIndex, ...r.slice(1)], s = H1(e, i);
  return s ? {
    kind: "scope",
    plan: s.plan,
    scratchIndexes: [0, ...r.slice(s.depth + 1)],
    location: t
  } : { kind: "live", location: Go(t, i) };
}
function Om(e, t) {
  t.add(e.getKey()), $(e) && e.getChildren().forEach((r) => Om(r, t));
}
function qm(e, t, r) {
  return e.spans.find(
    (n) => !n.isSentinel && n.key === t && r <= n.end - n.start
  );
}
function Cc(e, t, r) {
  const n = (a, c) => {
    const l = Bo(e, a, c), u = qm(e, a, c);
    return l && u ? { anchor: l, position: u.start + c } : void 0;
  };
  if (!$(t)) return n(t.getKey(), r);
  const i = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, r).forEach((a) => Om(a, i));
  const s = [...e.spans].reverse().find((a) => i.has(a.key));
  if (s) return n(s.key, s.end - s.start);
  const o = e.spans[0];
  return o && !o.isSentinel ? n(o.key, 0) : void 0;
}
function Rm(e, t) {
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
function $m(e, t) {
  const r = [];
  for (let n = t; n; n = n.getParent()) {
    if (n.is(e)) return r;
    r.unshift(n.getIndexWithinParent());
  }
}
function J1(e, t, r) {
  const [n, i] = rc(t);
  if (!n || i === void 0) return;
  const s = Rm(e, n);
  if (!s) {
    const c = Cc(e, n, i);
    if (!c) return;
    const l = e.text[c.position];
    return {
      kind: "anchor",
      anchor: c.anchor,
      atWordByte: l !== void 0 && !Nm.test(l)
    };
  }
  const o = $m(s.member, n);
  if (!o) return;
  const a = z(s.member) ? Wo(s.member, r.getMarker, r.viewOptions)?.out : void 0;
  return {
    kind: "preserved",
    sentinelIndex: s.sentinelIndex,
    memberIndex: s.memberIndex,
    path: o,
    offset: i,
    type: $(n) ? "element" : "text",
    noteAnchor: a && Cc(a, n, i)?.anchor
  };
}
function Y1(e, t) {
  if (t.type !== "text") return t;
  const r = qm(e, t.key, t.offset);
  if (!r) return t;
  const n = r.end - r.start;
  let i = t.offset;
  for (; i < n && Nm.test(e.text[r.start + i]); ) i += 1;
  return i === t.offset ? t : { ...t, offset: i };
}
function Im(e, t) {
  const r = e.liveCut;
  return !t || !r || t.type !== "text" || t.key !== r.key ? t : t.offset >= r.nodeOffset ? { ...t, offset: t.offset + r.length } : t;
}
function X1(e, t, r) {
  const n = t.liveFragment?.sentinels[r.sentinelIndex]?.[r.memberIndex];
  if (!n?.isAttached()) return;
  const i = e.byFirstLiveKey.get(n.getKey());
  if (i?.kind === "note" && r.noteAnchor && i.liveFragment)
    return Im(
      i,
      Vo(i.liveFragment, r.noteAnchor)
    );
  let s = n;
  for (const o of r.path) {
    if (!$(s)) return;
    const a = s.getChildAtIndex(o);
    if (!a) return;
    s = a;
  }
  return { key: s.getKey(), offset: r.offset, type: r.type };
}
function Q1(e, t, r) {
  const { plan: n } = r, { liveFragment: i, scratchFragment: s } = n;
  if (!i || !s) return;
  const o = Go(r.location, r.scratchIndexes), a = n.scratch.getEditorState().read(() => J1(s, o, e.tier2));
  if (!a) return;
  if (a.kind === "preserved") return X1(t, n, a);
  const c = Vo(i, a.anchor, {
    addressDisplayBytes: !wc(r.location)
  });
  if (c)
    return Im(
      n,
      a.atWordByte ? Y1(i, c) : c
    );
}
function uf(e, t, r) {
  const n = G1(t, r);
  if (n.kind === "live") return n.location;
  const i = Q1(e, t, n), s = i && Z(i.key);
  return s ? Mr(s, i.offset) : void 0;
}
function Z1(e, t, r) {
  if (t.byFirstLiveKey.size === 0) return r;
  const n = uf(e, t, r.start);
  if (!n) return;
  if (!r.end) return { ...r, start: n };
  const i = uf(e, t, r.end);
  if (i)
    return { ...r, start: n, end: i };
}
function eA(e, t) {
  const r = ms(Ho(t.jsonPath));
  return r.length === 0 ? t : Go(t, [
    e.liveToSettledTopIndex(r[0]),
    ...r.slice(1)
  ]);
}
function tA(e, t) {
  const r = Br(t.liveNodes[0]);
  return r.length === 0 ? r : [e.liveToSettledTopIndex(r[0]), ...r.slice(1)];
}
function rA(e, t, r) {
  const [n, ...i] = r;
  if (n === void 0) return;
  if (e.kind === "note") return n === 0 ? [...t, ...i] : void 0;
  const s = t[0];
  return s === void 0 ? void 0 : [s + n, ...i];
}
function nA(e, t, r) {
  const n = e.liveCut;
  return !n || t.getKey() !== n.key || r <= n.nodeOffset ? r : Math.max(n.nodeOffset, r - n.length);
}
function iA(e, t, r, n, i) {
  let s = e.sentinels[t]?.[r];
  if (s) {
    for (const o of n) {
      if (!$(s)) return;
      const a = s.getChildAtIndex(o);
      if (!a) return;
      s = a;
    }
    return Mr(s, i);
  }
}
function sA(e, t, r, n, i) {
  const s = Rm(t, n);
  if (s) {
    const l = $m(s.member, n);
    if (!l) return;
    const { sentinelIndex: u, memberIndex: d } = s;
    return e.scratch.getEditorState().read(
      () => iA(r, u, d, l, i)
    );
  }
  const o = Cc(t, n, nA(e, n, i));
  if (!o) return;
  const { anchor: a } = o, c = !wc(Mr(n, i));
  return e.scratch.getEditorState().read(() => {
    const l = Vo(r, a, { addressDisplayBytes: c }), u = l && Z(l.key);
    return u ? Mr(u, l.offset) : void 0;
  });
}
function oA(e, t, r, n) {
  const { liveFragment: i, scratchFragment: s } = t;
  if (!i || !s) return;
  const o = sA(
    t,
    i,
    s,
    r,
    n
  );
  if (!o) return;
  const a = rA(
    t,
    tA(e, t),
    ms(Ho(o.jsonPath))
  );
  return a && Go(o, a);
}
function df(e, t, r) {
  const n = e.planContaining(t);
  return n ? oA(e, n, t, r) : eA(e, Mr(t, r));
}
function aA(e) {
  const t = gl();
  if (!t || e.byFirstLiveKey.size === 0) return t;
  const r = O();
  if (!w(r)) return;
  const n = r.isBackward(), i = n ? r.focus : r.anchor, s = df(e, i.getNode(), i.offset);
  if (!s) return;
  if (r.isCollapsed()) return { start: s };
  const o = n ? r.anchor : r.focus, a = df(e, o.getNode(), o.offset);
  if (a)
    return { start: s, end: a };
}
function cA(e, t, r) {
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
function Lm(e, t, r) {
  if (e === "para") return Kl(t, r.getMarker, r.viewOptions);
  if (e === "chapter") {
    const i = t.find(ve);
    return i && jl(i, r.getMarker, r.viewOptions);
  }
  const n = t.find(z);
  return n && Wo(n, r.getMarker, r.viewOptions)?.out;
}
function Jo(e) {
  const t = e.exportJSON();
  return $(e) && Array.isArray(t.children) && e.getChildren().forEach((r) => t.children?.push(Jo(r))), t;
}
function lA(e, t) {
  const r = By({
    nodes: [...e],
    onError: (n) => {
      throw n;
    }
  });
  try {
    r.update(
      () => {
        const n = Se();
        t.forEach((i) => n.append(ys(i)));
      },
      { discrete: !0 }
    );
  } catch {
    return;
  }
  return r;
}
const ff = "\0";
function uA(e, t, r, n, i) {
  const s = `${n.viewOptions.markerMode}/${n.viewOptions.noteMode}`, o = t.map((c) => c.getTextContent()).join(ff), a = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, r, o, a].join(ff);
}
function Dm(e, t = []) {
  for (const r of e)
    z(r) && t.push(r), $(r) && Dm(r.getChildren(), t);
  return t;
}
function Yo(e, t, r, n, i, s) {
  const o = lA(s.nodes, i);
  if (!o) return;
  const { settledCount: a, scratchFragment: c } = o.getEditorState().read(() => ({
    settledCount: dr(Se()).length,
    scratchFragment: Lm(e, Se().getChildren(), s.tier2)
  }));
  return { kind: e, liveNodes: t, liveFragment: r, liveCut: n, scratch: o, scratchFragment: c, settledCount: a };
}
function Jl(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const r = Sm(e, t);
  return r ? {
    liveFragment: cA(e, r.start, r.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function dA(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = Jl(t, i), a = Jo(e), c = /* @__PURE__ */ new Map();
  if (ws([e], [a], c), !!Gl(e, c, n.tier2, r.huskKeys, i))
    return Yo("note", [e], s, o, [a], n);
}
function fA(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = Jl(t, i), a = e.map(Jo), c = /* @__PURE__ */ new Map();
  ws(e, a, c), Dm(e).filter((u) => r.noteScopes.has(u.getKey())).forEach(
    (u) => Gl(u, c, n.tier2, r.huskKeys, i)
  );
  const l = Mm(e, c, n.tier2, r.huskKeys, i);
  if (l)
    return Yo("para", e, s, o, l, n);
}
function pA(e, t, r, n) {
  const { liveFragment: i, liveCut: s } = Jl(t, n), o = Am(e, r.tier2, n);
  if (!o) return;
  const a = [e, ...Si(e)];
  return Yo("chapter", a, i, s, o, r);
}
function hA(e, t, r, n) {
  const i = Jo(e), s = /* @__PURE__ */ new Map();
  ws([e], [i], s);
  let o = !1;
  for (const a of r) {
    const c = s.get(a.getKey());
    if (!c) continue;
    const l = c.siblings.indexOf(c.node);
    l < 0 || (wm(c.siblings, l), o = !0);
  }
  if (o)
    return Yo("para", [e], t, void 0, [i], n);
}
function gA(e, t) {
  for (let r = e; r; r = r.getParent())
    if (t.has(r.getKey())) return !0;
  return !1;
}
function pf() {
  return {
    byFirstLiveKey: /* @__PURE__ */ new Map(),
    liveToSettledTopIndex: (e) => e,
    settledToLiveTopIndex: (e) => ({ liveIndex: e, indexWithinScope: 0 }),
    planContaining: () => {
    }
  };
}
function mA(e) {
  const t = dr(Se()), r = [], n = [];
  let i = 0;
  for (let s = 0; s < t.length; ) {
    const o = t[s], a = o.type === "element" ? o.node : void 0, c = a && e.get(a.getKey());
    if (!c || !c.liveNodes[0].is(a)) {
      r[s] = i, n.push({ liveIndex: s, indexWithinScope: 0 }), i += 1, s += 1;
      continue;
    }
    const l = new Set(c.liveNodes.map((d) => d.getKey()));
    let u = 0;
    for (; s + u < t.length; ) {
      const d = t[s + u];
      if (d.type !== "element" || !l.has(d.node.getKey())) break;
      u += 1;
    }
    for (let d = 0; d < u; d += 1)
      r[s + d] = i;
    for (let d = 0; d < c.settledCount; d += 1)
      n.push({ liveIndex: s, plan: c, indexWithinScope: d });
    i += c.settledCount, s += u;
  }
  return { liveToSettled: r, settledToLive: n };
}
function hf(e) {
  const t = Cm(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), pf();
  const r = Pm(e.pendedKeys, e.tier2, t), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (f, p) => {
    if (!f) return;
    const g = f.liveNodes[0].getKey();
    n.set(g, f), f.liveNodes.forEach((m) => i.set(m.getKey(), f)), p && f.liveNodes.forEach((m) => s.set(m.getKey(), f));
  }, c = (f, p, g, m) => {
    o.add(f);
    const b = Lm(p, g, e.tier2), _ = uA(
      p,
      g,
      b?.text ?? "",
      e.tier2,
      t
    ), E = e.cache.entries.get(f);
    if (E?.signature === _) return E.plan;
    const M = m(b);
    return M ? e.cache.entries.set(f, { signature: _, plan: M }) : e.cache.entries.delete(f), M;
  };
  for (const f of r.noteScopes.values())
    a(
      c(
        f.getKey(),
        "note",
        [f],
        (p) => dA(f, p, r, e, t)
      ),
      !1
    );
  for (const f of r.paraScopes.values())
    a(
      c(
        f[0].getKey(),
        "para",
        f,
        (p) => fA(f, p, r, e, t)
      ),
      !0
    );
  for (const f of r.chapterScopes.values())
    a(
      c(
        f.getKey(),
        "chapter",
        [f, ...Si(f)],
        (p) => pA(f, p, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const f of r.husks) {
    const p = f.getTopLevelElement();
    if (!ie(p) || gA(f, i)) continue;
    const g = l.get(p.getKey()) ?? { para: p, husks: [] };
    g.husks.push(f), l.set(p.getKey(), g);
  }
  for (const [f, { para: p, husks: g }] of l)
    a(
      c(
        f,
        "para",
        [p],
        (m) => hA(p, m, g, e)
      ),
      !0
    );
  for (const f of [...e.cache.entries.keys()])
    o.has(f) || e.cache.entries.delete(f);
  if (n.size === 0) return pf();
  const { liveToSettled: u, settledToLive: d } = mA(s);
  return {
    byFirstLiveKey: n,
    liveToSettledTopIndex: (f) => u[f] ?? f,
    settledToLiveTopIndex: (f) => d[f] ?? { liveIndex: f, indexWithinScope: 0 },
    planContaining: (f) => {
      for (let p = f; p; p = p.getParent()) {
        const g = i.get(p.getKey());
        if (g) return g;
      }
    }
  };
}
function yA({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = ce(), n = X({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return j(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, xo(s, e) || bA(i, r, e);
  }, [r, e, t]), j(
    () => r.registerMutationListener(
      jt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Sc(r);
        gf(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Vs(s) === Vs(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), j(() => {
    const i = (a) => a.read(
      () => new Set(
        Se().getChildren().filter(We).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (Sc(r) || gf(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: Vs(a) === Vs(c)
      }));
    };
    return Ye(
      ...[Nt, ur].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), j(
    () => r.registerCommand(
      xr,
      () => {
        const i = n.current;
        return i.phase === "idle" && _A(i, TA()), !1;
      },
      Ft
    ),
    [r]
  ), j(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(xr, void 0));
    };
    return Ye(
      r.registerMutationListener(St, i),
      r.registerMutationListener(pt, i)
    );
  }, [r]), j(() => {
    const i = () => MA(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function bA(e, t, r) {
  if (kA(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Sc(t);
  (!n || n === r.book) && t.update(() => Um(r.chapterNum, r.verseNum), {
    tag: Gr
  });
}
function kA(e, t) {
  const r = e.pendingEchoes.findIndex((n) => xo(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function TA() {
  const e = O(), t = Jc(e);
  if (!t) return;
  const r = Yl(), n = Rp(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = ll(t, e), { verseNum: o, verse: a } = vx(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Sc(e) {
  return e.getEditorState().read(() => Yl()?.getCode() || void 0);
}
function Yl() {
  return Se().getChildren().find(gt);
}
function gf(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && $a(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || $a(e, t), e.phase = "navigating") : i && $a(e, t), r && r !== e.scrRef.book && zm(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function $a(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Um(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Gr }
    );
  });
}
function Um(e, t) {
  const r = Jc(O()), n = ul(r)?.getNumber(), i = Rp(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Fp(n) ? Km(t, n) : parseInt(n, 10) === t))
    return;
  const o = Se().getChildren(), a = qp(o, e);
  if (!a) return;
  const c = Dk(o, a), l = Nk(c, !0);
  Lk(c, l);
  let u;
  try {
    u = bx(c, t);
  } catch {
    return;
  }
  u && (ie(u) ? !C(u.getFirstChild()) && _i(u) || Zt(u, 0) : xA(u));
}
function xA(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ye(n)) {
    Zt(t, r);
    return;
  }
  const i = qo(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (C(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = $(n) && !z(n) ? Fm(n) : void 0;
  s ? s.select(0, 0) : Zt(t, r);
}
function Fm(e) {
  const t = e.getFirstChild();
  if (C(t)) return t;
  if ($(t) && !z(t)) return Fm(t);
}
function Vs(e) {
  return e.read(() => {
    const t = Se().getChildren().find(We);
    return `${Yl()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function _A(e, t) {
  e.phase !== "navigating" && t && (vA(t, e.scrRef) || zm(e, CA(t, e.scrRef)));
}
function vA(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Km(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Km(e, t) {
  try {
    return Yc(e, t);
  } catch {
    return !1;
  }
}
function CA(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const SA = 8;
function zm(e, t) {
  return xo(t, e.scrRef) || e.pendingEchoes.some((r) => xo(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > SA && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function xo(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function MA(e) {
  e.phase = "idle";
}
function EA(e) {
  return gt(e) ? `${e.__code}` : ve(e) ? `${e.__marker} "${e.__number}"` : I(e) ? `${e.__marker}` : Ss(e) ? `${e.__marker} "${e.__number}"` : pr(e) ? `${e.__caller}` : $n(e) ? `${e.__marker} "${e.__number}"` : z(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ie(e) ? `${e.__marker}` : C(e) ? `"${e.__text}"${AA(e)}` : Te(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : we(e) ? `${e.__marker} "${e.__number}"` : "";
}
function AA(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[ks]) : "";
}
function PA() {
  const [e] = ce();
  return /* @__PURE__ */ v(
    Yy,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: EA,
      editor: e
    }
  );
}
const jm = vf(null), mf = 4;
function wA({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = X(null), s = Cf(jm);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return j(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ v("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function NA({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = pe(), [s, o] = pe(), a = de(
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
  }, l = De(() => ({ registerItem: a }), [a]);
  return j(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ v(jm.Provider, { value: l, children: /* @__PURE__ */ v("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function OA({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = X(null), c = X(null), [l, u] = pe(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return j(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: g, left: m } = f.getBoundingClientRect();
      p.style.top = `${g + f.offsetHeight + mf}px`, p.style.left = `${Math.min(m, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), j(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (g) => {
        const m = g.target;
        o && a.current && a.current.contains(m) || f.contains(m) || u(!1);
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
        const p = c.current, g = a.current;
        if (p !== null && g !== null) {
          const { top: m } = p.getBoundingClientRect(), b = m + p.offsetHeight + mf;
          b !== g.getBoundingClientRect().top && (g.style.top = `${b}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Ce(kn, { children: [
    /* @__PURE__ */ Ce(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => u(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ v("span", { className: i }),
          t && /* @__PURE__ */ v("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ v("i", { className: "chevron-down" })
        ]
      }
    ),
    l && bn(
      /* @__PURE__ */ v(NA, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const Mc = {
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
}, Ec = {
  ...Mc,
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
function qA({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ v(
    OA,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + RA(t),
      buttonLabel: $A(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Mc).map((n) => /* @__PURE__ */ Ce(
        wA,
        {
          className: "item block-marker " + IA(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ v("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ v("span", { className: "text usfm_" + n, children: Mc[n] })
          ]
        },
        n
      ))
    }
  );
}
function RA(e) {
  return e && e in Ec ? e : "ban";
}
function $A(e) {
  return e && e in Ec ? Ec[e] : "No Style";
}
function IA(e) {
  return e ? "active dropdown-item-active" : "";
}
function yf() {
  return /* @__PURE__ */ v("div", { className: "divider" });
}
const LA = wn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ce(), [o, a] = pe(s), [c, l] = pe(), [u, d] = pe(!1), [f, p] = pe(!1), g = de(
    ({
      canUndo: m,
      canRedo: b,
      blockMarker: _,
      contextMarker: E
    }) => {
      d(m), p(b), l(_), n?.({
        canUndo: m,
        canRedo: b,
        blockMarker: _,
        contextMarker: E
      });
    },
    [n]
  );
  return j(() => s.registerCommand(
    xr,
    (m, b) => (a(b), !1),
    br
  ), [s]), /* @__PURE__ */ Ce(kn, { children: [
    /* @__PURE__ */ v(ig, { onStateChange: g }),
    /* @__PURE__ */ Ce("div", { className: "toolbar", children: [
      /* @__PURE__ */ v(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(If, void 0);
          },
          title: Ys ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
          type: "button",
          className: "toolbar-item spaced",
          "aria-label": "Undo",
          children: /* @__PURE__ */ v("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ v(
        "button",
        {
          disabled: !f || r,
          onClick: () => {
            o.dispatchCommand(Lf, void 0);
          },
          title: Ys ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ v("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ v(yf, {}),
      o === s && /* @__PURE__ */ Ce(kn, { children: [
        /* @__PURE__ */ v(
          qA,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ v(yf, {})
      ] }),
      /* @__PURE__ */ v("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), DA = Lo(), UA = {}, FA = {};
function KA() {
  return /* @__PURE__ */ v("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
const Bm = wn(function({
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
  const d = X(null), f = X(null), p = X(null), g = X(t), m = X(void 0), b = X(void 0), _ = X(void 0), E = X({ entries: /* @__PURE__ */ new Map() }), M = X(0), N = X(!0), S = X(void 0), T = X(!1), [F, U] = pe(t), [G, J] = pe(0), [ae, fe] = pe(), {
    isReadonly: Y = !1,
    structureProtectionMode: Ae = "off",
    hasExternalUI: Pe = !1,
    hasSpellCheck: ee = !1,
    textDirection: K = "ltr",
    markerMenuTrigger: re = "\\",
    view: $e,
    nodes: Qe,
    debug: tr = !1,
    contextMenu: le,
    styleInfo: Ze,
    markerSettleDelayMs: Mi
  } = a ?? FA, rr = $e ?? DA, Dn = us(rr) && (rr.markerMode !== "hidden" || !rr.hasSpacing || rr.hasGutterParaMarkers || rr.hasActiveTextFocusBox) ? {
    ...rr,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : rr, Ei = X(Dn);
  $t(Ei.current, Dn) || (Ei.current = Dn);
  const ue = Ei.current, ot = De(() => Qe ?? UA, [Qe]), Xo = De(() => le, [le]), $r = De(
    () => lx(Ze ?? co),
    [Ze]
  ), ke = X(c);
  $t(ke.current, c) || (ke.current = c);
  const xe = ke.current, oe = us(ue), mt = Y || oe, Oe = Dn !== rr;
  j(() => {
    oe && !Y && xe?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), Oe && xe?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    );
  }, [oe, Y, Oe, xe]);
  const Vt = X(null), Ns = De(() => {
    if (ue.markerMode !== "editable") return;
    const A = Ze ?? co;
    return {
      getContext: () => Vt.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (L) => cE(
        A,
        L,
        ot.extraValidMarkers
      ),
      getEnterItems: (L) => lE(
        A,
        L,
        ot.extraValidMarkers
      ),
      apply: (L, B) => {
        const W = Vt.current;
        W && (B.trigger === "enter" ? W.splitParagraphWithMarker(L.marker) : W.applyMarkerMenuSelection(L, B));
      },
      commitTypedCloser: (L) => {
        Vt.current?.commitTypedCloser(L);
      }
    };
  }, [ue, Ze, ot.extraValidMarkers]), Ot = (A) => {
    T.current || (T.current = !0, ke.current?.warn(
      `Editor: cannot ${A} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Ai = (A) => {
    if (oe)
      throw new Error(
        `Cannot ${A} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, hr = (A) => {
    if (Ai(A), mt) throw new Error(`Cannot ${A} in readonly mode`);
  }, an = De(
    () => [et, ...oe ? O_ : Rh],
    [oe]
  ), Os = De(
    () => ({
      namespace: "platformEditor",
      theme: { ...Rg, showCharMarkerTitles: ue.showCharMarkerTitles },
      editable: !mt,
      editorState: void 0,
      // Handling of errors during update
      onError(A) {
        throw A;
      },
      nodes: an
    }),
    [mt, an, ue.showCharMarkerTitles]
  );
  Pa.initialize(xe);
  function yt(A) {
    if (A !== void 0 && !wM(A, ot.extraValidMarkers))
      throw new Error(`Unsupported character marker '${A}'`);
  }
  const qt = de(() => {
    const A = d.current;
    if (!A) return g.current;
    const L = ya(A), B = b.current;
    if ((!L || L.size === 0) && !B) return g.current;
    const W = A.getEditorState(), ge = W.toJSON();
    return W.read(
      () => j1(
        ge,
        L ?? /* @__PURE__ */ new Set(),
        { viewOptions: ue, getMarker: $r, logger: xe },
        B,
        _.current
      )
    ) ?? g.current;
  }, [ue, $r, xe]), dt = de(() => {
    const A = d.current;
    if (!A) return;
    const L = {
      pendedKeys: ya(A) ?? /* @__PURE__ */ new Set(),
      transientInput: b.current,
      lastKnownCaret: _.current,
      tier2: { viewOptions: ue, getMarker: $r, logger: xe },
      nodes: an,
      cache: E.current
    };
    return Bs(L) && L.cache.entries.clear(), L;
  }, [ue, $r, xe, an]), cn = de(
    (A) => {
      const L = d.current, B = dt();
      if (!(!L || !B))
        return Bs(B) ? A : L.getEditorState().read(() => {
          const W = hf(B);
          return Z1(B, W, A);
        });
    },
    [dt]
  );
  j(() => (N.current = !0, () => {
    N.current = !1;
  }), []);
  const Ir = de(
    (A, L) => A.read(() => {
      const B = dt(), W = B && aA(hf(B));
      return !W && !oe && w(O()) && xe?.warn(
        `${L} refused: the selection could not be expressed against the document the host is reading`
      ), W;
    }),
    [dt, oe, xe]
  ), Un = de(
    (A) => {
      if (!i) return;
      const L = d.current, B = dt();
      if (!L || !B || Bs(B)) {
        i(A);
        return;
      }
      M.current += 1;
      const W = M.current;
      queueMicrotask(() => {
        if (!N.current || W !== M.current || d.current !== L) return;
        const ge = Ir(L, "onSelectionChange");
        W === M.current && i(ge);
      });
    },
    [i, dt, Ir]
  ), Fn = {
    focus() {
      d.current?.focus();
    },
    isFocused() {
      const A = d.current?.getRootElement();
      return !!A && A.ownerDocument.activeElement === A;
    },
    undo() {
      d.current?.dispatchCommand(If, void 0);
    },
    redo() {
      d.current?.dispatchCommand(Lf, void 0);
    },
    cut() {
      hr("cut"), d.current?.dispatchCommand(xn, null);
    },
    copy() {
      d.current?.dispatchCommand(Mo, null);
    },
    paste() {
      hr("paste"), d.current && Sl(d.current);
    },
    pastePlainText() {
      hr("paste as plain text"), d.current && Ml(d.current);
    },
    getUsj() {
      return qt();
    },
    commitPendingMarkerEdits() {
      d.current?.update(
        () => {
          d.current?.dispatchCommand(bm, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(A) {
      if (!A) {
        b.current = void 0;
        return;
      }
      const L = d.current?.getEditorState().read(() => {
        const B = O();
        return w(B) && B.isCollapsed() ? B.focus.key : void 0;
      });
      b.current = { input: A, nodeKey: L ?? _.current?.key };
    },
    setUsj(A) {
      if (!$t(g.current, A)) {
        g.current = A, b.current = void 0;
        const L = $t(F, A);
        U(A), L && J((B) => B + 1);
      }
    },
    applyUpdate(A, L = "remote") {
      if (oe && L === "remote") {
        ke.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      Ai("apply an update"), d.current?.update(
        () => {
          L === "remote" && Hr(es), sv(A, ue, ot, xe);
        },
        { discrete: !0 }
      );
      const B = d.current?.getEditorState();
      if (!B) return;
      const W = Pa.deserializeEditorState(B, ue);
      if (W) {
        const ge = !$t(g.current, W);
        if (ge && (g.current = W), ge || !$t(F, W)) {
          const at = Vu(A, B, "apply");
          S.current = W, s?.(W, A, L, at);
        }
      }
    },
    replaceEmbedUpdate(A, L) {
      const B = d.current?.read(() => $x(A, L));
      B ? this.applyUpdate(B) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${A}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (oe) {
        Ot("get the selection");
        return;
      }
      const A = d.current;
      if (!A) return;
      const L = dt();
      return !L || Bs(L) ? A.read(gl) : Ir(A, "getSelection");
    },
    setSelection(A) {
      if (oe) {
        Ot("set the selection");
        return;
      }
      const L = cn(A);
      if (!L) {
        xe?.warn(
          "setSelection refused: the position could not be resolved against the document currently being edited"
        );
        return;
      }
      d.current?.update(() => {
        const B = hl(L);
        B !== void 0 && (Zi(B), Hr(Jf));
      });
    },
    setAnnotation(A, L, B, W, ge) {
      if (oe) {
        Ot("set an annotation");
        return;
      }
      let at, Rt, Mt, Kn;
      typeof W == "function" || W === void 0 ? (at = W, Rt = ge) : (at = W.onClick, Rt = W.onRemove, Mt = W.onMouseEnter, Kn = W.onMouseLeave);
      const Pi = cn(A);
      if (!Pi) {
        xe?.warn(
          `setAnnotation refused for ${L} "${B}": the range could not be resolved against the document currently being edited`
        );
        return;
      }
      f.current?.setAnnotation(
        Pi,
        _u(L),
        B,
        at,
        Rt,
        Mt,
        Kn
      );
    },
    removeAnnotation(A, L) {
      f.current?.removeAnnotation(_u(A), L);
    },
    formatPara(A) {
      hr("format a paragraph"), d.current?.update(() => {
        const L = O();
        if (!w(L)) {
          c?.warn(
            `formatPara refused: no range selection to retag with "${A}" (restore the caret before applying, as the marker palettes do)`
          );
          return;
        }
        Zy(L, () => ns(A));
        const B = O();
        if (!w(B)) return;
        const W = /* @__PURE__ */ new Set();
        B.getNodes().forEach((ge) => {
          const at = ge.getTopLevelElement();
          ie(at) && W.add(at);
        }), W.forEach((ge) => nm(ge, A, ue));
      });
    },
    getElementByKey(A) {
      return d.current?.read(
        () => d.current?.getElementByKey(A) ?? void 0
      );
    },
    removeCharacterMarker(A) {
      if (mt) throw new Error("Cannot remove character marker in readonly mode");
      yt(A);
      let L = !1;
      return d.current?.update(
        () => {
          const B = O();
          w(B) && (L = Ag(B, A, ue));
        },
        { discrete: !0 }
      ), L;
    },
    replaceCharacterMarker(A, L) {
      if (mt) throw new Error("Cannot replace character marker in readonly mode");
      yt(A), yt(L);
      let B = !1;
      return d.current?.update(
        () => {
          const W = O();
          w(W) && (B = zM(W, A, L));
        },
        { discrete: !0 }
      ), B;
    },
    extendCharacterMarker(A, L) {
      if (mt) throw new Error("Cannot extend character marker in readonly mode");
      yt(A), L?.forEach(
        (W) => yt(W)
      );
      let B = !1;
      return d.current?.update(
        () => {
          const W = O();
          w(W) && (B = jM(
            W,
            A,
            L,
            ue
          ));
        },
        { discrete: !0 }
      ), B;
    },
    insertMarker(A) {
      if (mt) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!d.current) return;
      if (!hc(A, ot.extraValidMarkers))
        throw new Error(`Unsupported marker '${A}'`);
      const L = gc(
        A,
        m,
        ue,
        ot,
        xe,
        void 0,
        Ze
      );
      return L.action({ editor: d.current, reference: r }), L.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!Y)
        return d.current?.getEditorState().read(() => JE());
    },
    applyMarkerMenuSelection(A, L) {
      if (Y) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if (A.kind !== "closeTag" && !hc(A.marker, ot.extraValidMarkers))
        throw new Error(`Unsupported marker '${A.marker}'`);
      let B;
      return d.current.update(() => {
        B = e1(A, L, r, {
          expandedNoteKeyRef: m,
          viewOptions: ue,
          nodeOptions: ot,
          logger: c,
          styleInfo: Ze
        });
      }), B;
    },
    splitParagraphWithMarker(A) {
      if (Y) throw new Error("Cannot split paragraph in readonly mode");
      d.current && d.current.update(() => {
        lm(A, ue);
      });
    },
    commitTypedMarker(A, L) {
      if (Y) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let B = !1;
      return d.current.update(() => {
        B = ZE(A, L), B || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), B;
    },
    commitTypedCloser(A) {
      if (Y) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let L = !1;
      return d.current.update(() => {
        L = cm(A), L || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), L;
    },
    insertNote(A, L, B) {
      hr("insert a note");
      const W = B && cn(B);
      if (B && !W) {
        xe?.warn(
          `insertNote refused for \\${A}: the position could not be resolved against the document currently being edited`
        );
        return;
      }
      d.current?.update(() => {
        const ge = Oh(
          A,
          L,
          W,
          r,
          ue,
          ot,
          xe
        );
        ge && !ge.getIsCollapsed() && (m.current = ge.getKey());
      });
    },
    selectNote(A) {
      d.current?.update(() => {
        const L = Zu(A);
        L && (P_(L, ue), L.getIsCollapsed() || (m.current = L.getKey()));
      });
    },
    getNoteOps(A) {
      return d.current?.read(() => {
        const L = Zu(A);
        if (L)
          return fl(L);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  Vt.current = Fn, Pc(u, () => Fn), j(() => {
    const A = d.current;
    if (A)
      return A.registerUpdateListener(({ editorState: L }) => {
        L.read(() => {
          const B = O();
          if (!w(B) || !B.isCollapsed()) return;
          const W = B.focus.getNode();
          C(W) && (_.current = { key: W.getKey(), offset: B.focus.offset });
        });
      });
  }, []);
  const Lr = de(
    (A, L, B, W) => {
      if (oe) return;
      const ge = Pa.deserializeEditorState(A, ue);
      if (ge) {
        const at = !$t(g.current, ge);
        if (at && (g.current = ge), at || !$t(F, ge)) {
          const Rt = Vu(W, A);
          S.current = ge, s?.(ge, W, "local", Rt);
        }
      }
    },
    [F, s, ue, oe]
  );
  j(() => {
    const A = d.current;
    if (!(!A || !s))
      return A.registerUpdateListener(({ tags: L, dirtyElements: B, dirtyLeaves: W }) => {
        !L.has(Ic) && (B.size === 0 && W.size === 0 || L.has(es) || !ya(A)?.size) || queueMicrotask(() => {
          const ge = qt();
          !ge || $t(S.current, ge) || (S.current = ge, s(ge, void 0, "local", void 0));
        });
      });
  }, [s, qt]);
  const ln = de(
    (A) => {
      fe(A.contextMarker), o?.(A);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Ce(Ff, { initialConfig: Os, children: [
      /* @__PURE__ */ v(iC, { isEditable: !mt }),
      /* @__PURE__ */ Ce("div", { className: "editor-container", children: [
        Pe ? /* @__PURE__ */ v(ig, { onStateChange: ln }) : /* @__PURE__ */ v(
          "div",
          {
            className: "editor-toolbar-container" + (mt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ v(
              LA,
              {
                ref: p,
                editorRef: Vt,
                isReadonly: mt,
                onStateChange: ln
              }
            )
          }
        ),
        /* @__PURE__ */ Ce("div", { className: "editor-inner", children: [
          /* @__PURE__ */ v(zf, { editorRef: d }),
          /* @__PURE__ */ v(
            Qy,
            {
              contentEditable: /* @__PURE__ */ v(
                Kf,
                {
                  className: `editor-input usfm ${iv(ue).join(" ")}${ue.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ue.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: ee
                }
              ),
              placeholder: /* @__PURE__ */ v(KA, {}),
              ErrorBoundary: jf
            }
          ),
          Pe && /* @__PURE__ */ v(nC, {}),
          /* @__PURE__ */ v(Bf, {}),
          r && n && /* @__PURE__ */ v(yA, { scrRef: r, onScrRefChange: n }),
          r && !Pe && /* @__PURE__ */ v(
            AS,
            {
              trigger: re,
              scrRef: r,
              contextMarker: ae,
              getMarkerAction: (A) => gc(
                A,
                m,
                ue,
                ot,
                xe,
                void 0,
                Ze
              ),
              editableHarness: Ns
            }
          ),
          /* @__PURE__ */ v(
            aC,
            {
              scripture: F,
              scriptureRef: g,
              nodeOptions: ot,
              editorAdaptor: tn,
              viewOptions: ue,
              logger: xe
            },
            G
          ),
          /* @__PURE__ */ v(EC, { onChange: Un }),
          /* @__PURE__ */ v(
            Q_,
            {
              onChange: Lr,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Tb
            }
          ),
          /* @__PURE__ */ v(GM, { viewOptions: ue }),
          /* @__PURE__ */ v(Y_, { ref: f, logger: xe }),
          /* @__PURE__ */ v(Nv, { viewOptions: ue }),
          /* @__PURE__ */ v(Vv, {}),
          /* @__PURE__ */ v(Xv, {}),
          ue?.markerMode !== "editable" && /* @__PURE__ */ v(Qv, { logger: xe }),
          /* @__PURE__ */ v(rC, { options: Xo }),
          /* @__PURE__ */ v(oC, {}),
          /* @__PURE__ */ v(t1, {}),
          /* @__PURE__ */ v(
            w1,
            {
              viewOptions: ue,
              getMarker: $r,
              logger: xe,
              markerSettleDelayMs: Mi
            }
          ),
          /* @__PURE__ */ v(
            I1,
            {
              styleInfo: Ze,
              viewOptions: ue,
              logger: xe
            }
          ),
          /* @__PURE__ */ v(
            cC,
            {
              expandedNoteKeyRef: m,
              nodeOptions: ot,
              viewOptions: ue,
              logger: xe
            }
          ),
          /* @__PURE__ */ v(MC, {}),
          /* @__PURE__ */ v(Mv, {}),
          /* @__PURE__ */ v(_v, {}),
          /* @__PURE__ */ v(B1, { viewOptions: ue, logger: xe }),
          /* @__PURE__ */ v(AC, {}),
          /* @__PURE__ */ v(gS, { structureProtectionMode: Ae }),
          /* @__PURE__ */ v(mS, { textDirection: K }),
          /* @__PURE__ */ v(bS, {}),
          /* @__PURE__ */ v(MS, {}),
          l
        ] }),
        tr && /* @__PURE__ */ v(PA, {})
      ] })
    ] }, ue.verseLayout ?? "inline")
  );
}), HP = wn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ v(Bm, { ref: r, ...i });
});
function Vm() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function _o(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? Vm() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function Wm(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? Vm() : r,
    quote: e,
    type: "thread"
  };
}
function bf(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function zA(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Ia(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class jA {
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
    this._comments = t, Ia(this);
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
          const c = bf(a);
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
    this._comments = i, Ia(this);
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
          const c = bf(a);
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
    return this._comments = n, Ia(this), t.type === "comment" ? {
      index: s,
      markedComment: zA(t)
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
    return t !== null ? t.doc.get("comments", pu) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new hu(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new pu();
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
      hb,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Ft
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof gb) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const g = p.insert, m = p.retain, b = p.delete, _ = u.parent, E = u === r ? void 0 : _ instanceof hu && this._comments.find((M) => M.id === _.get("id"));
              if (Array.isArray(g)) {
                const M = f;
                g.slice().reverse().forEach((N) => {
                  const S = N.get("id"), F = N.get("type") === "thread" ? Wm(
                    N.get("quote"),
                    N.get("comments").toArray().map(
                      (U) => _o(
                        U.get("content"),
                        U.get("author"),
                        U.get("id"),
                        U.get("timeStamp"),
                        U.get("deleted")
                      )
                    ),
                    S
                  ) : _o(
                    N.get("content"),
                    N.get("author"),
                    S,
                    N.get("timeStamp"),
                    N.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(F, E, M);
                  });
                });
              } else if (typeof m == "number")
                f += m;
              else if (typeof b == "number")
                for (let M = 0; M < b; M++) {
                  const N = E === void 0 || E === !1 ? this._comments[f] : E.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(N, E);
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
function BA(e) {
  const [t, r] = pe(e.getComments());
  return j(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function VA({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = X(null);
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
  }, [n, e]), /* @__PURE__ */ v("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Ce("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
    /* @__PURE__ */ v("h2", { className: "Modal__title", children: r }),
    /* @__PURE__ */ v(
      "button",
      {
        className: "Modal__closeButton",
        "aria-label": "Close modal",
        type: "button",
        onClick: e,
        children: "X"
      }
    ),
    /* @__PURE__ */ v("div", { className: "Modal__content", children: t })
  ] }) });
}
function WA({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return bn(
    /* @__PURE__ */ v(VA, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Hm() {
  const [e, t] = pe(null), r = de(() => {
    t(null);
  }, []), n = De(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ v(WA, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = de(
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
const HA = {
  ...Rg,
  paragraph: "CommentEditorTheme__paragraph"
};
function GA(...e) {
  return e.filter(Boolean).join(" ");
}
function rn({
  "data-test-id": e,
  children: t,
  className: r,
  onClick: n,
  disabled: i,
  small: s,
  title: o
}) {
  return /* @__PURE__ */ v(
    "button",
    {
      disabled: i,
      className: GA(
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
function JA({
  className: e
}) {
  return /* @__PURE__ */ v(Kf, { className: e || "ContentEditable__root" });
}
function YA({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ v("div", { className: t || "Placeholder__root", children: e });
}
const kf = $f("INSERT_INLINE_COMMAND");
function XA({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = X(null), s = de(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return j(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), gs(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ v("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ v("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ v("i", { className: "icon add-comment" }) }) });
}
function QA({ onEscape: e }) {
  const [t] = ce();
  return j(() => t.registerCommand(
    Rf,
    (r) => e(r),
    ri
  ), [t, e]), null;
}
function Gm({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ v(Ff, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: HA
  }, children: /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ v(
      db,
      {
        contentEditable: /* @__PURE__ */ v(JA, { className: e }),
        placeholder: /* @__PURE__ */ v(YA, { children: s }),
        ErrorBoundary: jf
      }
    ),
    /* @__PURE__ */ v(ub, { onChange: n }),
    /* @__PURE__ */ v(Bf, {}),
    t !== !1 && /* @__PURE__ */ v(ab, {}),
    /* @__PURE__ */ v(QA, { onEscape: r }),
    /* @__PURE__ */ v(cb, {}),
    i !== void 0 && /* @__PURE__ */ v(zf, { editorRef: i })
  ] }) });
}
function Jm(e, t) {
  return de(
    (r, n) => {
      r.read(() => {
        e(fb()), t(!pb(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function ZA({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = pe(""), [s, o] = pe(!1), a = X(null), c = De(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = X(null), u = Xm(), d = de(() => {
    e.getEditorState().read(() => {
      const m = O();
      if (w(m)) {
        l.current = m.clone();
        const b = m.anchor, _ = m.focus, E = eb(
          e,
          b.getNode(),
          b.offset,
          _.getNode(),
          _.offset
        ), M = a.current;
        if (E !== null && M !== null) {
          const { left: N, bottom: S, width: T } = E.getBoundingClientRect(), F = tb(e, E);
          let U = F.length === 1 ? N + T / 2 - 125 : N - 125;
          U < 10 && (U = 10), M.style.left = `${U}px`, M.style.top = `${S + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const G = F.length, { container: J } = c, ae = c.elements, fe = ae.length;
          for (let Y = 0; Y < G; Y++) {
            const Ae = F[Y];
            let Pe = ae[Y];
            Pe === void 0 && (Pe = document.createElement("span"), ae[Y] = Pe, J.appendChild(Pe));
            const K = `position:absolute;top:${Ae.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${Ae.left}px;height:${Ae.height}px;width:${Ae.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            Pe.style.cssText = K;
          }
          for (let Y = fe - 1; Y >= G; Y--) {
            const Ae = ae[Y];
            J.removeChild(Ae), ae.pop();
          }
        }
      }
    });
  }, [e, c]);
  gs(() => {
    d();
    const m = c.container, b = document.body;
    return b !== null ? (b.appendChild(m), () => {
      b.removeChild(m);
    }) : () => {
    };
  }, [c.container, d]), j(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (m) => (m.preventDefault(), t(), !0), p = () => {
    if (s) {
      let m = e.getEditorState().read(() => {
        const b = l.current;
        return b ? b.getTextContent() : "";
      });
      m.length > 100 && (m = m.slice(0, 99) + "…"), r(
        Wm(m, [_o(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, g = Jm(i, o);
  return /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ v(
      Gm,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: g
      }
    ),
    /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ v(rn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ v(
        rn,
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
function eP({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = pe(""), [s, o] = pe(!1), a = X(null), c = Xm(), l = Jm(i, o);
  return /* @__PURE__ */ Ce(kn, { children: [
    /* @__PURE__ */ v(
      Gm,
      {
        className: "CommentPlugin_CommentsPanel_Editor",
        autoFocus: !1,
        onEscape: () => !0,
        onChange: l,
        editorRef: a,
        placeholder: r
      }
    ),
    /* @__PURE__ */ v(
      rn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(_o(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(Vy, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ v("i", { className: "send" })
      }
    )
  ] });
}
function Ym({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Ce(kn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Ce("div", { className: "Modal__content", children: [
      /* @__PURE__ */ v(
        rn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ v(
        rn,
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
function Tf({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = pe(0);
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Hm();
  return /* @__PURE__ */ Ce("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ v("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Ce("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ v("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Ce(kn, { children: [
      /* @__PURE__ */ v(
        rn,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ v(
              Ym,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: u
              }
            ));
          },
          className: "CommentPlugin_CommentsPanel_List_DeleteButton",
          children: /* @__PURE__ */ v("i", { className: "delete" })
        }
      ),
      c
    ] })
  ] });
}
function tP({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ce(), [a, c] = pe(0), [l, u] = Hm(), d = De(
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
  }, [a]), /* @__PURE__ */ v("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ Ce(
      "li",
      {
        onClick: () => {
          const m = s.get(p);
          if (m !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const b = document.activeElement;
            o.update(
              () => {
                const _ = Array.from(m)[0], E = Z(_);
                Te(E) && E.selectStart();
              },
              {
                onUpdate() {
                  b !== null && b.focus();
                }
              }
            );
          }
        },
        className: `CommentPlugin_CommentsPanel_List_Thread ${s.has(p) ? "interactive" : ""} ${e.indexOf(p) === -1 ? "" : "active"}`,
        children: [
          /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ Ce("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ v("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ v(
              rn,
              {
                onClick: () => {
                  u("Delete Thread", (m) => /* @__PURE__ */ v(
                    Ym,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: m
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ v("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ v("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((m) => /* @__PURE__ */ v(
            Tf,
            {
              comment: m,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            m.id
          )) }),
          /* @__PURE__ */ v("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ v(
            eP,
            {
              submitAddComment: i,
              thread: f,
              placeholder: "Reply to comment..."
            }
          ) })
        ]
      },
      p
    ) : /* @__PURE__ */ v(
      Tf,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function rP({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = X(null), o = r.length === 0;
  return /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ v("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ v("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ v(
      tP,
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
function Xm() {
  const e = Vf(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function nP({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = Vf(), [a] = ce(), c = De(() => {
    const U = new jA(a, s);
    return r && U.registerOnChange(r), t?.(U), U;
  }, [a, s, r, t]), l = BA(c), u = De(() => /* @__PURE__ */ new Map(), []), [d, f] = pe(), [p, g] = pe([]), [m, b] = pe(!1), [_, E] = pe(!1), { yjsDocMap: M } = o;
  j(() => {
    if (e) {
      const U = e("comments", M);
      return c.registerCollaboration(U);
    }
    return () => {
    };
  }, [c, e, M]);
  const N = de(() => {
    a.update(() => {
      const U = O();
      U !== null && (U.dirty = !0);
    }), b(!1);
  }, [a]), S = de(
    (U, G) => {
      if (U.type === "comment") {
        const J = c.deleteCommentOrThread(U, G);
        if (!J)
          return;
        const { markedComment: ae, index: fe } = J;
        c.addComment(ae, G, fe);
      } else {
        c.deleteCommentOrThread(U);
        const J = G !== void 0 ? G.id : U.id, ae = u.get(J);
        ae !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const fe of ae) {
              const Y = Z(fe);
              Te(Y) && (Y.deleteID(Wr, J), Y.hasNoIDsForEveryType() && to(Y));
            }
          });
        });
      }
    },
    [c, a, u]
  ), T = de(
    (U, G, J, ae) => {
      c.addComment(U, J), G && (a.update(() => {
        w(ae) && lp(ae, Wr, U.id);
      }), b(!1));
    },
    [c, a]
  );
  j(() => {
    const U = [];
    let G;
    for (const J of p) {
      const ae = u.get(J);
      if (ae !== void 0)
        for (const fe of ae) {
          const Y = a.getElementByKey(fe);
          Y !== null && (Y.classList.add("selected"), U.push(Y), G = window.setTimeout(() => {
            E(!0);
          }, 0));
        }
    }
    return () => {
      G !== void 0 && window.clearTimeout(G);
      for (const J of U)
        J.classList.remove("selected");
    };
  }, [p, a, u]), j(() => {
    if (!a.hasNodes([et]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const U = /* @__PURE__ */ new Map();
    return Ye(
      Uf(
        a,
        et,
        (G) => ts(G.getTypedIDs()),
        (G, J) => {
          for (const [ae, fe] of Object.entries(G.getTypedIDs()))
            fe.forEach((Y) => {
              J.addID(ae, Y);
            });
        }
      ),
      a.registerMutationListener(
        et,
        (G) => {
          a.getEditorState().read(() => {
            for (const [J, ae] of G) {
              const fe = Z(J);
              let Y = [];
              ae === "destroyed" ? Y = U.get(J) ?? [] : Te(fe) && (Y = fe.getTypedIDs()[Wr] ?? []);
              for (const Ae of Y) {
                let Pe = u.get(Ae);
                U.set(J, Y), ae === "destroyed" ? Pe !== void 0 && (Pe.delete(J), Pe.size === 0 && u.delete(Ae)) : (Pe === void 0 && (Pe = /* @__PURE__ */ new Set(), u.set(Ae, Pe)), Pe.has(J) || Pe.add(J));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: G, tags: J }) => {
        G.read(() => {
          const ae = O();
          let fe = !1, Y = !1;
          if (w(ae)) {
            const Ae = ae.anchor.getNode();
            if (C(Ae)) {
              const Pe = ik(Ae, Wr, ae.anchor.offset) ?? [];
              Pe !== null && (g(Pe), fe = !0), ae.isCollapsed() || (f(Ae.getKey()), Y = !0);
            }
          }
          fe || g((Ae) => Ae.length === 0 ? Ae : []), Y || f(null), !J.has("collaboration") && w(ae) && b(!1);
        });
      }),
      a.registerCommand(
        kf,
        () => {
          const G = window.getSelection();
          return G !== null && G.removeAllRanges(), b(!0), !0;
        },
        Tn
      )
    );
  }, [a, u]);
  const F = () => {
    a.dispatchCommand(kf, void 0);
  };
  return /* @__PURE__ */ Ce(kn, { children: [
    m && bn(
      /* @__PURE__ */ v(
        ZA,
        {
          editor: a,
          cancelAddComment: N,
          submitAddComment: T
        }
      ),
      document.body
    ),
    d != null && !m && bn(
      /* @__PURE__ */ v(
        XA,
        {
          anchorKey: d,
          editor: a,
          showComments: _,
          onAddComment: F
        }
      ),
      document.body
    ),
    n !== null && bn(
      /* @__PURE__ */ v(
        rn,
        {
          className: `CommentPlugin_ShowCommentsButton ${_ ? "active" : ""}`,
          onClick: () => E(!_),
          title: _ ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ v("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    _ && bn(
      /* @__PURE__ */ v(
        rP,
        {
          comments: l,
          submitAddComment: T,
          deleteCommentOrThread: S,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function iP() {
  const e = X(void 0), t = de((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function sP(e, t) {
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
function oP(e, t) {
  j(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      sP(r, t);
    };
  }, [t, e]);
}
const GP = wn(function(t, r) {
  const n = X(null), i = X(!0), s = X(null), [o, a] = pe(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: g, view: m } = {} } = t, b = (g ?? !1) || us(m), [_, E] = iP();
  oP(f, _), j(() => {
    if (process.env.NODE_ENV !== "production") {
      const S = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(S), p || console.warn(S);
    }
  }, [p]), Pc(r, () => ({
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
    setTransientInput(S) {
      n.current?.setTransientInput(S);
    },
    setUsj(S) {
      n.current?.setUsj(S);
    },
    applyUpdate(S, T) {
      n.current?.applyUpdate(S, T);
    },
    replaceEmbedUpdate(S, T) {
      return n.current?.replaceEmbedUpdate(S, T);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(S) {
      n.current?.setSelection(S);
    },
    setAnnotation(S, T, F, U, G) {
      typeof U == "function" || U === void 0 ? n.current?.setAnnotation(S, T, F, U, G) : n.current?.setAnnotation(S, T, F, U);
    },
    removeAnnotation(S, T) {
      n.current?.removeAnnotation(S, T);
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
    replaceCharacterMarker(S, T) {
      return n.current?.replaceCharacterMarker(S, T) ?? !1;
    },
    extendCharacterMarker(S, T) {
      return n.current?.extendCharacterMarker(S, T) ?? !1;
    },
    insertMarker(S) {
      return n.current?.insertMarker(S);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(S, T) {
      return n.current?.applyMarkerMenuSelection(S, T);
    },
    splitParagraphWithMarker(S) {
      n.current?.splitParagraphWithMarker(S);
    },
    commitTypedMarker(S, T) {
      return n.current?.commitTypedMarker(S, T) ?? !1;
    },
    commitTypedCloser(S) {
      return n.current?.commitTypedCloser(S) ?? !1;
    },
    insertNote(S, T, F) {
      n.current?.insertNote(S, T, F);
    },
    selectNote(S) {
      n.current?.selectNote(S);
    },
    getNoteOps(S) {
      return n.current?.getNoteOps(S);
    },
    setComments(S) {
      _.current?.setComments(S), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const M = de(
    (S, T, F, U) => {
      if (!u) return;
      const G = _.current?.getComments();
      u(S, G, T, F, U);
    },
    [_, u]
  ), N = de(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const S = _.current?.getComments();
    l(S);
  }, [_, i, l]);
  return j(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ v(lb, { children: /* @__PURE__ */ Ce(Bm, { ref: n, onUsjChange: M, ...f, children: [
    /* @__PURE__ */ v(
      nP,
      {
        setCommentStore: E,
        onChange: N,
        showCommentsContainerRef: b ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ v("div", { ref: s, className: "comment-container" })
  ] }) });
});
function yn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function Qm(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function aP(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const cP = /^[#\w().,%/\s-]+$/;
function mr(e) {
  return e != null;
}
const lP = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, uP = {
  left: "right",
  right: "left"
}, Ac = ".editor-input.usfm", dP = /^[\w.#[\]="':()>+~*,\s-]+$/;
function fP(e) {
  return dP.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Ac}".`
  ), Ac);
}
function pP(e, t, r, n) {
  const i = [];
  if (t.fontName && i.push(`font-family: "${Qm(t.fontName)}"`), t.bold && i.push("font-weight: bold"), t.italic && i.push("font-style: italic"), t.color && (cP.test(t.color) ? i.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), mr(t.fontSize) && t.fontSize > 0 && i.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), mr(t.firstLineIndent) && i.push(`text-indent: ${yn(t.firstLineIndent * 20 * r)}vw`), mr(t.leftMargin) && t.leftMargin >= 0 && i.push(`margin-${n ? "right" : "left"}: ${yn(t.leftMargin * 20 * r)}vw`), mr(t.rightMargin) && t.rightMargin >= 0 && i.push(
    `margin-${n ? "left" : "right"}: ${yn(t.rightMargin * 20 * r)}vw`
  ), mr(t.spaceBefore) && t.spaceBefore >= 0 && i.push(`margin-top: ${yn(t.spaceBefore * r)}pt`), mr(t.spaceAfter) && t.spaceAfter >= 0 && i.push(`margin-bottom: ${yn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? i.push("line-height: 1.5") : t.lineSpacing === 2 && i.push("line-height: 2"), t.subscript ? i.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && i.push("vertical-align: text-top", "font-size: 66%"), t.underline && i.push("text-decoration: underline"), t.smallCaps && i.push("font-variant: small-caps"), t.justification) {
    const s = lP[n ? uP[t.justification] ?? t.justification : t.justification];
    s && i.push(`text-align: ${s}`);
  }
  return t.textProperties?.includes("verse") && i.push("white-space: nowrap", "unicode-bidi: embed"), i;
}
const xf = { c: 150, ca: 133, cp: 150 };
function _f(e, t) {
  return e && mr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function hP(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && mr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = _f(e.markers.c, xf.c);
  return ["ca", "cp"].map((i) => {
    const s = _f(
      e.markers[i],
      xf[i]
    ), o = yn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function JP(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Ac } = t, s = fP(i), o = [], a = [];
  e.defaultFont && a.push(`font-family: "${Qm(e.defaultFont)}"`), mr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${yn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = pP(c, l, r, n);
    u.length > 0 && o.push(`${s} .usfm_${aP(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...hP(e, s)), o.join(`
`);
}
export {
  zh as BLOCK_VERSE_VIEW_MODE,
  k as CategoryType,
  HP as Editorial,
  Qs as GENERATOR_NOTE_CALLER,
  Hf as HIDDEN_NOTE_CALLER,
  GP as Marginal,
  y as MarkerType,
  Fh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Kh as STANDARD_VIEW_MODE,
  co as defaultStyleInfo,
  WP as directionToNames,
  K_ as filterAndRankItems,
  JP as generateUsjCss,
  BP as getDefaultViewMode,
  Lo as getDefaultViewOptions,
  lE as getEnterMenuItems,
  cE as getMarkerMenuItems,
  VP as getViewMode,
  jh as getViewOptions,
  us as isBlockVerseLayout,
  zr as isInsertEmbedOpOfType,
  ev as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
