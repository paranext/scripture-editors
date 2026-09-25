import { jsx as _, jsxs as ke, Fragment as bn } from "react/jsx-runtime";
import { forwardRef as On, useState as de, useRef as Z, useCallback as ge, useEffect as z, useMemo as je, memo as dy, createContext as vf, useContext as Mf, Children as fy, isValidElement as py, cloneElement as hy, useImperativeHandle as vc, useLayoutEffect as fs } from "react";
import { assertSafeKey as Ge, isValidBookCode as gy, MARKER_OBJECT_PROPS as my, USJ_VERSION as _r, USJ_TYPE as Cr, isUsjTextContentLocation as yy, indexesFromUsjJsonPath as Ef, isUsjAttributeKeyLocation as by, isUsjAttributeMarkerLocation as ky, isUsjClosingAttributeMarkerLocation as Ty, isUsjMarkerLocation as xy, isUsjClosingMarkerLocation as _y, isUsjPropertyValueLocation as Cy, getUsjDocumentLocationTypeName as Sy, usjJsonPathFromIndexes as ln, EMPTY_USJ as Af } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as Ve, $parseSerializedNode as po, DecoratorNode as ps, ElementNode as Zt, isHTMLElement as wn, createState as ho, $getState as ie, $setState as Tt, $isRangeSelection as N, $isElementNode as U, $isTextNode as v, $getSelection as w, $isNodeSelection as go, ParagraphNode as Mc, TextNode as Be, $createTextNode as he, $getCommonAncestor as vy, $isLineBreakNode as hs, $createNodeSelection as Ec, $setSelection as kn, NODE_STATE_KEY as gs, $getEditor as Tn, $hasUpdateTag as My, $getNodeByKey as oe, $getRoot as ze, $createRangeSelection as Ac, $createPoint as hu, $getCharacterOffsets as Pc, KEY_DOWN_COMMAND as pr, COMMAND_PRIORITY_HIGH as Oe, HISTORY_MERGE_TAG as Pf, CLICK_COMMAND as Hi, COMMAND_PRIORITY_LOW as ft, COMMAND_PRIORITY_EDITOR as xn, isDOMNode as Nc, $getNearestNodeFromDOMNode as en, CONTROLLED_TEXT_INSERTION_COMMAND as mo, PASTE_COMMAND as cr, COMMAND_PRIORITY_CRITICAL as Qe, CUT_COMMAND as Vr, DROP_COMMAND as yo, DELETE_CHARACTER_COMMAND as Ey, DELETE_WORD_COMMAND as Ay, DELETE_LINE_COMMAND as Py, $isDecoratorNode as bo, COPY_COMMAND as ms, COMMAND_PRIORITY_NORMAL as ei, SELECTION_CHANGE_COMMAND as dr, getDOMSelection as Ny, isSelectionWithinEditor as Oy, $createRangeSelectionFromDom as wy, isDOMTextNode as qy, BLUR_COMMAND as Oc, $addUpdateTag as Wr, SKIP_DOM_SELECTION_TAG as Ry, CLEAR_HISTORY_COMMAND as $y, $getPreviousSelection as Ly, KEY_ESCAPE_COMMAND as wc, DRAGSTART_COMMAND as Nf, $isRootOrShadowRoot as Iy, CAN_UNDO_COMMAND as Dy, CAN_REDO_COMMAND as Uy, getDOMSelectionFromTarget as Fy, $onUpdate as zy, KEY_ENTER_COMMAND as Of, LineBreakNode as wf, $copyNode as Ky, FOCUS_COMMAND as jy, $isRootNode as By, INSERT_PARAGRAPH_COMMAND as Us, createCommand as qf, HISTORIC_TAG as qc, createEditor as Vy, UNDO_COMMAND as Rf, REDO_COMMAND as $f, CLEAR_EDITOR_COMMAND as Wy } from "lexical";
import { addClassNamesToElement as jn, removeClassNamesFromElement as ea, $findMatchingParent as ot, $dfsIterator as Lf, $dfs as fi, mergeRegister as Ue, registerNestedElementResolver as If, $unwrapNode as Oa, IS_APPLE as Fs } from "@lexical/utils";
import { useLexicalNodeSelection as Hy } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as qt } from "fast-equals";
import Li from "quill-delta";
import { useLexicalComposerContext as ce } from "@lexical/react/LexicalComposerContext";
import { $getLexicalContent as Gy, copyToClipboard as Jy } from "@lexical/clipboard";
import { TreeView as Yy } from "@lexical/react/LexicalTreeView";
import * as Xy from "react-dom";
import { createPortal as yn } from "react-dom";
import { LexicalComposer as Df } from "@lexical/react/LexicalComposer";
import { ContentEditable as Uf } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Ff } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as zf } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Kf } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Qy } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as Zy, createDOMRange as eb, createRectsFromDOMRange as tb } from "@lexical/selection";
import { autoUpdate as rb, computePosition as nb, shift as ib, flip as sb } from "@floating-ui/dom";
import { $generateNodesFromDOM as ob } from "@lexical/html";
import { AutoFocusPlugin as ab } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as cb } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as jf, LexicalCollaboration as lb } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as ub } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as db } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as fb, $isRootTextContentEmpty as pb } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as hb } from "@lexical/yjs";
import { Array as gu, Map as mu, YArrayEvent as gb } from "yjs";
const ta = (e) => Ve(po(e)), mb = {
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
function Bf(e) {
  return mb[e];
}
const L = " ", zs = "​", Ft = L, Rc = `${L}|`, lr = "p", Gi = "+", Vf = "-", Ks = "chapter", wa = "verse", yu = "invalid", yb = "text-spacing", bb = "formatted-font", kb = "marker-", Wf = "external-usj-mutation", Hf = "selection-change", Hr = "cursor-change", qa = "annotation-change", Ji = "delta-change", Gf = "marker-settle", Tb = [
  Wf,
  Hf,
  Hr,
  qa,
  Ji
], _n = "zmsc-s", ti = "zmsc-e", xb = [_n, ti], _b = [
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
  ti
], Jf = 1, $c = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Cb = $c.filter((e) => e !== "sid" && e !== "eid");
class Yt extends ps {
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
    return new Yt(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return Xf().updateFromJSON(t);
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
      version: Jf
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Yf(e) {
  return xb.includes(e);
}
function Xf(e, t, r, n, i) {
  return Ve(new Yt(e, t, r, n, void 0, i));
}
function He(e) {
  return e instanceof Yt;
}
const Lc = "f", Sb = [
  // Footnote
  Lc,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function Ii(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const vb = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Qf = 1;
class Ee extends Zt {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Lc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (Ii(t) === "crossref" ? Vf : Gi), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Ee(r, n, i, s, o, a);
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
    return Ic().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Sb.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", Ii(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", Ii(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && wn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", Ii(this.getMarker()))), { element: r };
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
      version: Qf
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
  return { node: Ic(t, r, n) };
}
function Ic(e, t, r, n, i) {
  return Ve(new Ee(e, t, r, n, i));
}
function Eb(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Ee.isValidMarker(t) && e.classList.contains(Ee.getType());
}
function K(e) {
  return e instanceof Ee;
}
var T;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(T || (T = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const Ra = {
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
}, un = {
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
}, bu = {
  p: { children: un },
  q: { children: un },
  q1: { children: un },
  q2: { children: un },
  q3: { children: un },
  q4: { children: un },
  b: { children: un },
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
function ur(e) {
  const t = Object.hasOwn(Ra, e) ? Ra[e] : void 0, r = Object.hasOwn(bu, e) ? bu[e] : void 0;
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
const Zf = "v", ep = "c", dn = "fig", ku = "tr", $a = "esb", tp = "esbe", Tu = "periph", xu = "alt", _u = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Ab = {
  "": "start",
  c: "center",
  r: "end"
};
function Cu(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Su(e) {
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
const Pb = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Nb(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === zs && s + 1 < e.length && Su(e[s + 1]) || (Su(o) ? (r || (i = t.length, t += o), r = !0) : Pb.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function Ob(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function wb(e, t) {
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
const qb = /^(?:qt[1-5]?|ts)-[se]$/;
function Dc(e) {
  return qb.test(e) || Yf(e);
}
function ra(e, t) {
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
function Rb(e, t, r) {
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
      const p = e.indexOf("\\", i), y = p === -1 ? e.length : p;
      a(Nb(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: u } = wb(e, i + 1);
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
    if (l === Zf) {
      const { word: p, next: y } = ra(e, i);
      i = y, n.push({ kind: "verse", number: p });
      continue;
    }
    if (l === ep) {
      const { word: p, next: y } = ra(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: p });
      continue;
    }
    const f = l.startsWith("+"), h = f ? l.slice(1) : l, m = t(h)?.type;
    if (m === b.Note || m === void 0 && Ee.isValidMarker(l)) {
      const { word: p, next: y } = ra(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: p || "+" });
      continue;
    }
    if (m === b.Milestone || m === void 0 && Dc(l)) {
      const p = Kb(e, c, l, i);
      if (p)
        n.push(p.token), p.ejectedText && o(p.ejectedText), i = p.next;
      else {
        const y = e.indexOf("\\", i), k = y === -1 ? e.length : y;
        o(e.slice(c, k)), i = k;
      }
      continue;
    }
    m === b.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : m === b.Character ? (d(), n.push({ kind: "charOpen", marker: h, isNested: f })) : js(h) ? (d(), js(h)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: h, isNested: f })) : (d(), !(r || s !== void 0) || l === $a || l === tp ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: h, isNested: f }));
  }
  return n;
}
const vu = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function js(e) {
  return Object.hasOwn(vu, e) ? vu[e] : void 0;
}
function $b(e) {
  return js(e) !== void 0;
}
const Lb = /([-\w]+)\s*=\s*"(.*?)"/g, Ib = /[\s\u200B]*[\n\r][\s\u200B]*/g, rp = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function ko(e) {
  return rp[e];
}
const Db = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Ub(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function Yi(e, t, r = rp[t]) {
  const n = e.replace(Ib, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Lb)];
  if (s.length > 0) {
    if (!Ub(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      Db.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function To(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Fb(e) {
  const t = Pr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function zb(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = Yi(e.slice(n + 1, i), r, To(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Kb(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Yi(s.slice(o + 1), r, To(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = zb(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function or(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", L);
}
function Dr(e) {
  return e.content || (e.content = []), e.content;
}
function Pr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, d;
  const f = () => u ? Dr(u) : d ? Dr(d) : r;
  let h = !1;
  const m = () => {
    if (s)
      return o.length > a ? Dr(o[o.length - 1].object) : Dr(s);
    if (o.length > 0)
      return Dr(o[o.length - 1].object);
    if (!i) {
      if (h && !n)
        return f();
      i = { type: "para", marker: lr, content: [] }, f().push(i);
    }
    return Dr(i);
  }, p = (Y) => {
    const A = m();
    typeof Y == "string" && typeof A[A.length - 1] == "string" ? A[A.length - 1] = A[A.length - 1] + Y : A.push(Y);
  }, y = (Y) => {
    for (let A = Y; A < o.length; A += 1) {
      const H = o[A].object;
      H.closed = "false";
    }
  }, k = () => {
    y(0), o.length = 0;
  }, C = (Y) => {
    s && (o.length > a && (y(a), o.length = a), a = 0, Y || (s.closed = "false"), s = void 0);
  }, S = () => {
    c = void 0, l = void 0;
  }, P = (Y, A, H) => {
    k();
    const [, ue, ve, X] = H, Ce = {
      type: "table:cell",
      marker: X ? A.slice(0, A.indexOf("-")) : A,
      align: Ab[ue],
      content: []
    };
    X && (Ce.colspan = String(Number(X) + 1 - Number(ve))), Dr(Y).push(Ce), i = Ce;
  }, E = (Y) => {
    u && (Y || (u.closed = "false"), u = void 0);
  }, j = () => {
    d = void 0;
  };
  let M, R = "", $;
  const re = () => {
    R && p(or(R)), R = "";
  }, W = (Y = !1) => {
    M?.type === "sidebar" ? R = "" : Y && R.endsWith(`
`) && (R = R.slice(0, -1)), M = void 0, re();
  }, Se = () => {
    if (!$)
      return;
    const Y = { type: "char", marker: $.marker, content: [] };
    $.value && (Y.content = [or($.value)]), m().push(Y), o.push({ object: Y }), $ = void 0;
  }, ee = (Y, A) => {
    h = !1, S(), k(), C(!1), i = { type: "para", marker: Y, content: [] }, A && (i.content = [or(A)]), f().push(i);
  }, Re = () => {
    $ && (ee($.marker, $.value), $ = void 0);
  };
  let ye;
  const tr = (Y) => {
    if (!ye)
      return;
    let { value: A } = ye;
    ye = void 0, Y && A.endsWith(`
`) && (A = A.slice(0, -1));
    const H = A.indexOf("|"), ue = H >= 0 ? Yi(A.slice(H + 1), Tu) : void 0, ve = H >= 0 ? A.slice(0, H) : A, X = H >= 0 && (!ue || !!ve && !!ue[xu]), Ce = X ? void 0 : ue, yr = X ? A : ve, wt = {
      type: "periph",
      ...yr ? { [xu]: or(yr) } : {},
      ...Ce
    };
    wt.content = [], f().push(wt), d = wt, i = void 0;
  };
  let Ke;
  const $r = () => {
    if (Ke) {
      if (Ke.shape === "para")
        ee(dn, Ke.value);
      else {
        const Y = { type: "char", marker: dn, content: [] };
        Ke.value && (Y.content = [or(Ke.value)]), m().push(Y), o.push({ object: Y });
      }
      Ke = void 0;
    }
  }, Lr = Rb(e, t?.getMarker ?? ur, n);
  for (let Y = 0; Y < Lr.length; Y++) {
    const A = Lr[Y];
    if ($) {
      if (A.kind === "text") {
        $.value += A.text;
        continue;
      }
      if ($.shape === "char" && A.kind === "end" && A.marker.replace(/^\+/, "") === $.marker) {
        if ($.value.trim() === "") {
          m().push({ type: "char", marker: $.marker, content: [] }), $ = void 0, W();
          continue;
        }
        Object.assign($.target, {
          [$.attrName]: or($.value.trim())
        });
        const H = $.marker;
        if ($ = void 0, H === "ca") {
          const ue = Lr[Y + 1];
          ue?.kind === "text" && /^[\s\u200B]*$/.test(ue.text) && Y++;
        }
        continue;
      }
      if ($.shape === "para" && (A.kind === "para" || A.kind === "chapter")) {
        const H = $.value.replace(/[\s\u200B]+$/, "");
        H === "" ? (ee($.marker), $ = void 0) : (Object.assign($.target, { [$.attrName]: or(H) }), $ = void 0);
      } else {
        M = void 0, (A.kind === "para" || A.kind === "chapter") && $.value.endsWith(`
`) && ($.value = $.value.slice(0, -1)), $.shape === "para" ? Re() : Se(), Y--;
        continue;
      }
    }
    if (ye) {
      if (A.kind === "text" || A.kind === "optbreak") {
        ye.value += A.kind === "text" ? A.text : "//";
        continue;
      }
      tr(A.kind === "para" || A.kind === "chapter"), Y--;
      continue;
    }
    if (Ke) {
      if (A.kind === "text" || A.kind === "optbreak") {
        Ke.value += A.kind === "text" ? A.text : "//";
        continue;
      }
      if (A.kind === "end" && A.marker.replace(/^\+/, "") === dn) {
        const H = Ke.value.indexOf("|"), ue = H >= 0 ? Yi(Ke.value.slice(H + 1), dn) : void 0;
        if (ue) {
          const ve = {};
          for (const [yr, wt] of Object.entries(ue))
            ve[yr === "src" ? "file" : yr] = wt;
          const X = {
            type: "figure",
            marker: dn,
            ...ve
          }, Ce = Ke.value.slice(0, H);
          Ce && (X.content = [or(Ce)]), p(X), Ke = void 0;
          continue;
        }
      }
      $r(), Y--;
      continue;
    }
    if (M)
      if (A.kind === "text") {
        if (A.text.includes(`
`) && /^[\s\u200B]*$/.test(A.text)) {
          R += A.text;
          continue;
        }
        W();
      } else if (A.kind === "charOpen" || A.kind === "para") {
        const H = A.kind === "para" || !A.isNested ? js(A.marker) : void 0;
        if (H && H.targetTypes.includes(M.type)) {
          R = "", $ = {
            target: M,
            attrName: H.attrName,
            marker: A.marker,
            shape: H.shape,
            value: ""
          };
          continue;
        }
        W(A.kind === "para");
      } else
        W(A.kind === "chapter");
    if (!s && !n && (A.kind === "charOpen" && !A.isNested && A.marker === dn || A.kind === "para" && A.marker === dn)) {
      k(), Ke = { shape: A.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (A.kind) {
      case "text": {
        let H = A.text;
        if (!s && H.endsWith(`
`)) {
          const ue = Lr[Y + 1];
          (ue === void 0 || ue.kind === "para" || ue.kind === "chapter") && (H = H.slice(0, -1));
        }
        H && p(or(H));
        break;
      }
      case "para": {
        const H = !s && !n;
        if (H && A.marker === ku) {
          k(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: ku, content: [] }, Dr(c).push(l), i = l, h = !1;
          break;
        }
        if (H && l) {
          const ue = _u.exec(A.marker);
          if (ue && Cu(ue)) {
            P(l, A.marker, ue);
            break;
          }
        }
        if (S(), !n && A.marker === $a) {
          k(), C(!1), E(!1);
          const ue = {
            type: "sidebar",
            marker: $a,
            content: []
          };
          f().push(ue), u = ue, i = void 0, M = u, h = !1;
          break;
        }
        if (A.marker === tp && u) {
          k(), C(!1), E(!0), i = void 0;
          break;
        }
        if (!n && A.marker === Tu) {
          k(), C(!1), E(!1), j(), ye = { value: "" }, i = void 0, h = !1;
          break;
        }
        ee(A.marker);
        break;
      }
      case "verse": {
        C(!1);
        const H = { type: "verse", marker: Zf, number: A.number };
        p(H), M = H;
        break;
      }
      case "chapter": {
        k(), C(!1), S(), E(!1), j(), i = void 0;
        const H = {
          type: "chapter",
          marker: ep,
          number: A.number
        };
        r.push(H), M = H, h = !0;
        break;
      }
      case "note": {
        C(!1);
        const H = m();
        s = { type: "note", marker: A.marker, caller: A.caller, content: [] }, a = o.length, H.push(s), M = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !A.isNested) {
          const ve = _u.exec(A.marker);
          if (ve && Cu(ve)) {
            P(l, A.marker, ve);
            break;
          }
        }
        if (!A.isNested) {
          const ve = s ? a : 0;
          y(ve), o.length = ve;
        }
        const H = m(), ue = { type: "char", marker: A.marker, content: [] };
        H.push(ue), o.push({ object: ue });
        break;
      }
      case "end": {
        const H = A.marker.replace(/^\+/, ""), ue = s ? a : 0, ve = o.findLastIndex((X, Ce) => Ce >= ue && X.object.marker === H);
        ve >= 0 ? (jb(o[ve].object), y(ve + 1), o.length = ve) : s && s.marker === H ? C(!0) : (y(ue), o.length = ue, p({ type: "unmatched", marker: `${A.marker}*` }));
        break;
      }
      case "milestone":
        p({ type: "ms", marker: A.marker, ...A.attributes });
        break;
      case "optbreak":
        p({ type: "optbreak" });
        break;
    }
  }
  if (ye && tr(!0), Ke && $r(), $)
    if ($.shape === "para") {
      const Y = $.value.replace(/[\s\u200B]+$/, "");
      Y === "" ? ee($.marker) : Object.assign($.target, { [$.attrName]: or(Y) }), $ = void 0;
    } else
      $.value.endsWith(`
`) && ($.value = $.value.slice(0, -1)), Se();
  k(), C(!1), E(!1);
  const sn = (Y) => {
    for (const A of Y)
      typeof A != "string" && A.content && (sn(A.content), A.content.length === 0 && delete A.content);
  };
  return sn(r), r;
}
function jb(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = Yi(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const Cn = ho("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Gr = ho("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ae = ho("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), hr = "marker-trailing-space", np = 1, Bb = "marker", Uc = ho("isGutterMarker", {
  parse: (e) => e === !0
});
class Nr extends ps {
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
    return new Nr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => Hb(t) ? {
        conversion: Vb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Sr().updateFromJSON(t);
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
    return r && wn(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: np
    };
  }
  // Mutation
  /**
   * Stays `false` even though a paragraph's gutter glyph can be selected: it is selected only by a
   * click (`ParaMarkerPrefixCursorGuardPlugin`, shared-react), and reaching it by keyboard is left to
   * the arrow-navigation work. Returning `true` would also change Lexical's native Backspace-beside-a-decorator behavior at
   * every paragraph start, where `StructureKeyboardPlugin` arms paragraph merges.
   */
  isKeyboardSelectable() {
    return !1;
  }
}
function Vb(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Sr(t, r) };
}
function Sr(e, t) {
  return Ve(new Nr(e, t));
}
function Wb(e) {
  return Tt(Sr(Bb, e), Uc, !0);
}
function xo(e) {
  return Xt(e) && ie(e, Uc);
}
function Hb(e) {
  return e?.tagName === "span";
}
function Xt(e) {
  return e instanceof Nr;
}
function ip(e) {
  return e?.type === Nr.getType();
}
const Br = "internal-comment", Gb = [Br], sp = Object.freeze({}), La = Object.freeze({}), Ia = Object.freeze({}), Da = Object.freeze({}), Ua = Object.freeze({}), Jb = 1, Bn = /* @__PURE__ */ new Map(), Ai = /* @__PURE__ */ new Map(), Vn = /* @__PURE__ */ new Map(), Wn = /* @__PURE__ */ new Map();
class tt extends Zt {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = sp, r, n, i, s, o) {
    super(o), this.__typedIDs = Ps(t), this.__typedOnClicks = na(r), this.__typedOnRemoves = ia(n), this.__typedOnMouseEnters = sa(i), this.__typedOnMouseLeaves = oa(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Ps(t.__typedIDs), n = na(t.__typedOnClicks), i = ia(t.__typedOnRemoves), s = sa(t.__typedOnMouseEnters), o = oa(t.__typedOnMouseLeaves);
    return new tt(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Gb.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Xi().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: Jb
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      jn(n, fn(t.theme.typedMark, a)), c.length > 1 && jn(n, fn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        jn(n, fn("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = fn(n.theme.typedMark, s), d = fn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && jn(r, u) : l === 0 && ea(r, u), c === 1 ? l === 2 && jn(r, d) : l === 1 && ea(r, d));
      const f = new Set(o), h = new Set(a);
      for (const m of o)
        h.has(m) || ea(r, fn("annotationId", m));
      for (const m of a)
        f.has(m) || jn(r, fn("annotationId", m));
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
    const r = this.getWritable(), n = Ps(r.__typedIDs);
    r.__typedIDs = Ps(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Bs(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = na(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return _e(t) ? Bn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = ia(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return _e(t) ? Ai.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = sa(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return _e(t) ? Vn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = oa(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return _e(t) ? Wn.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!_e(a))
      return;
    Ge(t), Ge(r);
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Bs(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Xi(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Bn.delete(r.getKey()), Ai.delete(r.getKey()), Vn.delete(r.getKey()), Wn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
    const n = Bn.get(this.getKey());
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
    const n = Vn.get(this.getKey());
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
  ensureOnClickMapMutable() {
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === La) {
      const t = Bn.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      Bn.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    Bn.set(this.getKey(), this.__typedOnClicks);
  }
  setOnClickFor(t, r, n) {
    Ge(t), Ge(r);
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
    if (!this.__typedOnClicks || this.__typedOnClicks === La) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Ia) {
      const t = Ai.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      Ai.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    Ai.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, r, n) {
    Ge(t), Ge(r);
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
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Ia) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Da) {
      const t = Vn.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      Vn.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    Vn.set(this.getKey(), this.__typedOnMouseEnters);
  }
  setOnMouseEnterFor(t, r, n) {
    Ge(t), Ge(r);
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
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Da) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Ua) {
      const t = Wn.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Wn.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Wn.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, r, n) {
    Ge(t), Ge(r);
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
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Ua) {
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
    const i = Yb(t, r);
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
    for (; _e(t) && Eu(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; _e(r) && Eu(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = Xb(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Qb(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Zb(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = ek(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Ps(e = sp) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (Ge(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      Ge(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function na(e) {
  if (!e || e === La)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ge(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ge(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function ia(e) {
  if (!e || e === Ia)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ge(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ge(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function sa(e) {
  if (!e || e === Da)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ge(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ge(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function oa(e) {
  if (!e || e === Ua)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ge(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ge(s), i[s] = o;
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
function Mu(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function Yb(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Eu(e, t) {
  const r = Mu(e), n = Mu(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function Xb(e, t) {
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
function Qb(e, t) {
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
function Zb(e, t) {
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
function fn(e, t) {
  return `${e}-${t}`;
}
function Au(e) {
  return `external-${e}`;
}
function Xi(e, t, r, n, i) {
  return Ve(new tt(e, t, r, n, i));
}
function _e(e) {
  return e instanceof tt;
}
function op(e) {
  return e?.type === tt.getType();
}
function Bs(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function ap(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, h = d ? c : l;
  let m, p;
  for (let y = 0; y < u; y++) {
    const k = a[y];
    if (U(p) && p.isParentOf(k))
      continue;
    const C = y === 0, S = y === u - 1;
    let P = null;
    if (v(k)) {
      const E = k.getTextContentSize(), j = C ? f : 0, M = S ? h : E;
      if (j === 0 && M === 0)
        continue;
      const R = k.splitText(j, M);
      P = R.length > 1 && (R.length === 3 || C && !S || M === E) ? R[1] : R[0];
    } else {
      if (_e(k))
        continue;
      U(k) && k.isInline() && (P = k);
    }
    if (P !== null) {
      if (P && P.is(m))
        continue;
      const E = P.getParent();
      (E == null || !E.is(m)) && (p = void 0), m = E, p === void 0 && (p = Xi(), p.addID(t, r, n, i, s, o), P.insertBefore(p)), p.append(P);
    } else
      m = void 0, p = void 0;
  }
  t === Br && U(p) && (d ? p.selectStart() : p.selectEnd());
}
function tk(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (_e(n))
      return n.getTypedIDs()[t];
    if (v(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (_e(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const rk = ["type", "marker", "content"], Fa = "unknown", cp = 1, nk = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class qn extends Zt {
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
    return new qn(r, n, i, s);
  }
  static importDOM() {
    return {
      [Fa]: (t) => sk(t) ? {
        conversion: ik,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Fc().updateFromJSON(t);
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
    return nk.has(this.getTag());
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
    const t = document.createElement(Fa);
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
      version: cp
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
    const r = t ?? w();
    if (!r)
      return !1;
    if (go(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function ik(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Fc(t, r) };
}
function Fc(e, t, r) {
  return Ve(new qn(e, t, r));
}
function sk(e) {
  return e?.tagName.toLowerCase() === Fa;
}
function De(e) {
  return e instanceof qn;
}
const lp = 1, ok = "attribute-run";
function aa(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Or extends Zt {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new Or(r, n);
  }
  static importJSON(t) {
    return up(t.runKind).updateFromJSON(t);
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
    t.classList.add(ok);
    const r = aa(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = aa(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = aa(this.__runKind);
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
      version: lp
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
function up(e) {
  return Ve(new Or(e));
}
function Ie(e) {
  return e instanceof Or;
}
const Qi = "id", dp = 1, ak = [
  "type",
  "marker",
  "code",
  "content"
];
class zt extends Zt {
  __marker = Qi;
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
    return new zt(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return fp(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return gy(t);
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
      version: dp
    };
  }
}
function fp(e, t) {
  return Ve(new zt(e, t));
}
function gt(e) {
  return e instanceof zt;
}
function pp(e) {
  return e?.type === zt.getType();
}
const Vs = "c", hp = 1, ck = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Ot extends Zt {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = Vs, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Ot(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return gp().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ks, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: hp
    };
  }
}
function gp(e, t, r, n, i) {
  return Ve(new Ot(e, t, r, n, i));
}
function Ne(e) {
  return e instanceof Ot;
}
function lk(e) {
  return e?.type === Ot.getType();
}
const mp = [
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
], yp = [
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
], uk = [
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
  ...mp,
  ...yp
], bp = 1, dk = ["type", "marker", "content"];
class me extends Zt {
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
    return new me(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (uk.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && mp.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && yp.includes(t);
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
    return me.isValidFootnoteMarker(t) || me.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => pk(t) ? {
        conversion: fk,
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
    return Pu(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Pu(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && wn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: bp
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
function Pu(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function fk(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: vr(t) };
}
function vr(e, t) {
  return Ve(new me(e, t));
}
function pk(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return me.isValidMarker(t) && e.classList.contains(me.getType());
}
function D(e) {
  return e instanceof me;
}
function hk(e) {
  return e?.type === me.getType();
}
const kp = 1, gk = "c", Tp = "span";
class gr extends ps {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = gk, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new gr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => xp(t) ? {
        conversion: mk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return zc().updateFromJSON(t);
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
    const t = document.createElement(Tp);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ks, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && wn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Ks, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? Ut(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: kp
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
function mk(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: zc(t) };
}
function zc(e, t, r, n, i, s) {
  return Ve(new gr(e, t, r, n, i, s));
}
function xp(e) {
  return e ? e.classList.contains(Ks) && e.tagName.toLowerCase() === Tp : !1;
}
function ys(e) {
  return e instanceof gr;
}
function yk(e) {
  return e?.type === gr.getType();
}
const _p = 1;
class Jr extends Mc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Jr(t.__key);
  }
  static importJSON(t) {
    return Gt().updateFromJSON(t);
  }
  getMarker() {
    return lr;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: _p
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Gt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Gt() {
  return Ve(new Jr());
}
function fr(e) {
  return e instanceof Jr;
}
function _o(e) {
  return e?.type === Jr.getType();
}
const bk = [
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
  lr,
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
], Cp = 1, kk = ["type", "marker", "content"];
class rt extends Mc {
  __marker;
  __unknownAttributes;
  constructor(t = lr, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new rt(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (bk.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Tk,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return Zi().updateFromJSON(t);
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
    return r && wn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Cp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Zi(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Tk(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = Zi(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function Zi(e, t) {
  return Ve(new rt(e, t));
}
function ne(e) {
  return e instanceof rt;
}
function Kc(e) {
  return e?.type === rt.getType();
}
const Ws = "v", Sp = 1, xk = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class pt extends Be {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = Ws, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new pt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return vp().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(wa, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: Sp
    };
  }
}
function vp(e, t, r, n, i, s) {
  return Ve(new pt(e, t, r, n, i, s));
}
function we(e) {
  return e instanceof pt;
}
function Mp(e) {
  return e?.type === pt.getType();
}
const _k = "​", ii = _k;
var Nu;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Nu || (Nu = {}));
var Ou;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Ou || (Ou = {}));
function Ck() {
  return he(ii);
}
function Sk(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(ii, ""));
}
function bs(e) {
  return e.length > 0 && e.includes(ii) && e.replaceAll(ii, "") === "";
}
function jc(e) {
  return v(e) && bs(e.getTextContent());
}
function Ep(e) {
  return lk(e) || yk(e);
}
function Je(e) {
  return Ne(e) || ys(e);
}
function Ap(e, t) {
  return e.find((r) => Je(r) && r.getNumber() === t.toString());
}
function vk(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Je(r));
}
function wu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Pp(e) {
  if (!e)
    return;
  if (Je(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !Je(t); )
    t = t.getPreviousSibling();
  if (t && Je(t))
    return t;
}
function Qt(e) {
  return ot(e, K) ?? void 0;
}
function Mk(e) {
  return gt(e) || Ne(e) || D(e) || ys(e) || fr(e) || He(e) || ne(e) || K(e) || we(e) || De(e);
}
function Np(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Ek(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function At(e) {
  return Te(e) || gt(e);
}
function Te(e) {
  return ne(e) || fr(e);
}
function Ak(e) {
  return Kc(e) || _o(e);
}
function Hs(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function Sn(e, t) {
  const r = ie(t, Cn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function Pk(e, t) {
  const r = U(e) ? e : e.getParent(), n = U(t) ? t : t.getParent(), i = r && n ? vy(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Nk(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function si(e) {
  return e?.type === Be.getType();
}
function Ok(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function wk(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function qe(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function st(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Op(e, t, r) {
  const n = qe(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Ut(e, t) {
  let r = qe(e);
  return t && (r += `${L}${t}`), r += " ", r;
}
function qk(e) {
  const t = e[gs];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function wp(e) {
  return Gc(e) || ip(e) && e.textType === "marker" || si(e) && qk(e) === "attribute" ? "" : si(e) && e.text !== L ? e.text : hk(e) ? e.children.map((t) => wp(t)).join("") : "";
}
function Rk(e) {
  return e.map((r) => wp(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Pt(e) {
  return " " + e + L;
}
function Bc(e) {
  const t = [];
  for (const r of e) {
    if (!D(r))
      continue;
    const n = qp(r);
    n !== Ft && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function qp(e) {
  return O(e) || wr(e) || v(e) && ie(e, ae) === "attribute" ? "" : v(e) ? e.getTextContent() : U(e) ? e.getChildren().map((t) => qp(t)).join("") : "";
}
function wr(e) {
  return Xt(e) && e.getTextType() === "marker";
}
function Kt(e) {
  return O(e) || wr(e);
}
function It(e) {
  if (!go(e))
    return;
  const t = e.getNodes();
  if (t.length !== 1)
    return;
  const [r] = t, n = Rp(r.getParent());
  return n?.is(r) ? n : void 0;
}
function Rp(e) {
  if (!ne(e))
    return;
  const t = e.getFirstChild();
  return xo(t) ? t : void 0;
}
function $k(e) {
  const t = Ec();
  t.add(e.getKey()), kn(t);
}
function qu(e, t) {
  Lk(e, t), e.setMarker(t);
}
function Lk(e, t) {
  const r = e.getMarker(), n = qe(r), i = qe(r, !0), s = st(r), o = st(r, !0), a = me.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Kt(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (O(c))
        c.setMarker(t);
      else if (wr(c)) {
        const f = l.startsWith(qe("", !0));
        c.setTextContent(u ? qe(t, f) : st(t, f));
      }
    }
  });
}
function Fe(e, t = my) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Ae(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function $p(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Vc(e) {
  if (!N(e))
    return Ru(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !U(t) || e.anchor.type === "text" && !v(t)))
    return t ?? void 0;
  try {
    return Ru(e) ?? t ?? void 0;
  } catch (n) {
    if ($p(n))
      return t ?? void 0;
    throw n;
  }
}
function Ik(e, t) {
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
function Wc(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Lp(e) {
  return !!e && e.includes("-");
}
function Ip(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Ru(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Hc(e) {
  if (!e)
    return !1;
  if (hs(e) || O(e) || wr(e) || Ie(e) || Xt(e) && e.getTextType() === "attribute")
    return !0;
  if (v(e)) {
    const t = ie(e, ae);
    if (t === hr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === L || bs(r))
      return !0;
  }
  return !1;
}
function Co() {
  const e = he(L);
  return Tt(e, ae, hr), e.setMode("token"), e;
}
function Dk(e) {
  const t = e.getTextContent();
  t.startsWith(L) || e.setTextContent(L + t);
}
function Rn(e) {
  return v(e) && ie(e, ae) === hr;
}
function Dp(e) {
  const t = e.getFirstChild();
  if (!Kt(t) || t === null || Rn(t.getNextSibling()))
    return !1;
  const r = w();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function pi(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!Hc(s)) {
      if (_e(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (v(s) && s.getType() === Be.getType()) {
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length }), r.length += s.getTextContentSize();
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function So(e) {
  let t = e.getParent();
  for (; t && _e(t); )
    t = t.getParent();
  return t;
}
function Uk(e, t) {
  return pi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function Fk(e, t) {
  const r = So(e);
  if (!r)
    return;
  const n = pi(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function zk(e, t) {
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
function Up(e, t) {
  const r = pi(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Hc(n))
    return Up(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || Hs(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || Hs(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function Kk(e, t) {
  if (t <= 0)
    return 0;
  const r = pi(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? jk(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function jk(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const Bk = 1;
class mr extends Be {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(gn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new mr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      text: t.text || gn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = gn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = gn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = gn(r.__marker, r.__markerSyntax, t), r;
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
      version: Bk
    };
  }
}
function lt(e, t, r) {
  return Ve(new mr(e, t, void 0, r));
}
function O(e) {
  return e instanceof mr;
}
function Gc(e) {
  return e?.type === mr.getType();
}
function tn(e) {
  return e.getTextContent() === gn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function Vk(e) {
  e.setTextContent(gn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function gn(e, t, r = !1) {
  return t === "closing" ? st(e, r) : t === "selfClosing" ? st("") : qe(e, r);
}
const Wk = /* @__PURE__ */ new Set(["closed"]);
function ar(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !Wk.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Fp(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function zp(e) {
  const t = Object.keys(e).filter((n) => !Cb.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Kp(e, t, r, n) {
  return Fp(
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
function zi(e) {
  return e.getChildren().find((t) => O(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function Hk(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : zi(e) === void 0 && jp(e) === void 0;
}
function jp(e) {
  return e.getChildren().find((t) => v(t) && ie(t, ae) === "attribute");
}
function es(e, t) {
  return ks(e.getNextSibling(), t);
}
const Gk = /^[ \u00A0]+$/;
function Jc(e) {
  if (tn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = qe(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && Gk.test(r.slice(t.length));
}
function ks(e, t) {
  let r, n, i, s;
  return Ie(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), O(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Jc(e) && (r = e, e = e.getNextSibling()), v(e) && ie(e, ae) === "attribute" && (n = e, e = e.getNextSibling()), O(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && tn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function ts(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!O(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (v(n) && n.getTextContent() === Pt(e.getCaller()))
    return n;
}
function Bp(e) {
  const t = ts(e);
  return t ? ks(t.getNextSibling(), "cat") : {};
}
function vo(e) {
  const t = e.getFirstChild();
  if (!(!v(t) || O(t)) && ie(t, ae) !== "attribute")
    return t;
}
function Vp(e) {
  const t = vo(e);
  return t ? ks(t.getNextSibling(), "ca") : {};
}
function Wp(e) {
  const t = vo(e);
  if (!t)
    return;
  const r = ks(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Hp(e) {
  const t = Wp(e);
  return t ? ks(t.getNextSibling(), "cp") : {};
}
function Gp(e) {
  const t = e.getParent();
  if (!D(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (we(n))
        return n;
      if (!(O(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || v(n) && ie(n, ae) === "attribute" || D(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Ie(n)))
        return;
    }
}
function Mo(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Ie(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), O(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Jc(s) && (t = s, s = s.getNextSibling()), v(s) && ie(s, ae) === "attribute" && (r = s, s = s.getNextSibling()), O(s) && s.getMarkerSyntax() === "selfClosing" && tn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function Yc(e) {
  return D(So(e));
}
function za(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Yc(t) : t.getChildren().some((i) => D(i) && i.getMarker() === r) ? !0 : void 0;
}
function Jk(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = za(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Eo(e) {
  return v(e) && e.getType() === Be.getType() && ie(e, ae) !== "attribute";
}
function Xc(e, t) {
  if (e.getMarkerSyntax() !== "opening" || za(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return O(r) ? za(r, t) === !0 ? "spacer" : void 0 : Eo(r) ? r.getTextContent().startsWith(L) ? void 0 : "prefix" : "spacer";
}
function Yk(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (O(t) && Xc(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Jp(e, t) {
  const r = w();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Yp(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = Xc(t, e);
    if (r !== void 0 && !Jp(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        v(n) && n.setTextContent(L + n.getTextContent());
      } else
        t.insertAfter(he(L));
  });
}
function Xp(e) {
  return e.isAttached() ? e.getChildren().some((t) => O(t) && Xc(t, e) !== void 0 && Jp(t, e)) : !1;
}
const Xk = "file", Qk = "src", Zk = "colspan", eT = "category", tT = "alt", rT = "closed", nT = "false";
function iT(e) {
  return e[rT] !== nT;
}
function sT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === Xk ? Qk : t,
    r
  ]));
}
function Qp(e, t) {
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
function Zp(e, t, r) {
  const n = r ?? {}, i = iT(n);
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
        opening: `\\${Qp(t, n[Zk])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: ar(sT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [eT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + ar(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [tT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: ar(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: ar(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const _t = { wantsRun: !1, valueText: void 0 }, qr = {};
function ca(e, t) {
  if (t === "va")
    return e;
  const r = es(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function Qc(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (U(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function Ao(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = w();
  if (!N(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function oT(e) {
  return Ie(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : O(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : v(e) && ie(e, ae) === "attribute";
}
function aT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!v(e) || ie(e, ae) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function la(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (we(t))
      return t;
    if (!oT(t))
      return;
  }
}
function $u(e) {
  return {
    kind: e,
    ownerPredicate: (t) => we(t),
    ownerOf: (t) => {
      if (Ie(t))
        return t.getRunKind() === e ? la(t) : void 0;
      const r = t.getParent();
      return Ie(r) ? r.getRunKind() === e ? la(r) : void 0 : aT(t) === e ? la(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!we(t))
        return _t;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? _t : { wantsRun: !0, valueText: L + r };
    },
    scanPieces: (t) => we(t) ? es(ca(t, e), e) : qr,
    graceSite: (t, r) => we(t) ? !r.opener && !r.closer ? Qc(ca(t, e)) : Ao(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => we(t) ? ca(t, e) : void 0
    }
  };
}
const cT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => _t,
  scanPieces: () => qr,
  graceSite: (e) => D(e) && Xp(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, lT = {
  kind: "char",
  ownerPredicate: (e) => D(e),
  ownerOf: (e) => {
    if (!v(e) || ie(e, ae) !== "attribute")
      return;
    const t = e.getParent();
    return D(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!D(e) || zi(e) === void 0)
      return _t;
    const t = ar(e.getUnknownAttributes() ?? {}, ko(e.getMarker()));
    return t === "" ? _t : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => D(e) ? { value: jp(e) } : qr,
  graceSite: (e, t) => {
    if (!D(e) || t.value)
      return !1;
    const r = zi(e);
    if (!r)
      return !1;
    const n = w();
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
    insertRunBefore: (e) => D(e) ? zi(e) : void 0
  }
};
function eh(e) {
  if (O(e))
    return e.getMarker() === "cat";
  if (!v(e) || ie(e, ae) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return O(t) && t.getMarker() === "cat";
}
function uT(e) {
  const t = e.getParent();
  if (!K(t))
    return;
  const r = ts(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!eh(n))
        return;
    }
}
const dT = {
  kind: "cat",
  ownerPredicate: (e) => K(e),
  ownerOf: (e) => {
    if (Ie(e))
      return e.getRunKind() === "cat" && K(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Ie(t) ? t.getRunKind() === "cat" && K(t.getParent()) ? t.getParent() ?? void 0 : void 0 : eh(e) ? uT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!K(e) || e.getIsCollapsed() !== !1)
      return _t;
    const t = e.getCategory();
    return t === void 0 ? _t : { wantsRun: !0, valueText: L + t };
  },
  scanPieces: (e) => K(e) ? Bp(e) : qr,
  graceSite: (e, t) => {
    if (!K(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = ts(e);
      return r !== void 0 && Qc(r);
    }
    return Ao(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => K(e) ? ts(e) : void 0
  }
};
function fT(e) {
  return Ie(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : O(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : v(e) && ie(e, ae) === "attribute";
}
function pT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!v(e) || ie(e, ae) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function hT(e) {
  const t = e.getParent();
  if (!Ne(t))
    return;
  const r = vo(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!fT(n))
        return;
    }
}
function Lu(e) {
  const t = (r) => Ne(r) ? e === "ca" ? vo(r) : Wp(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Ne(r),
    ownerOf: (r) => {
      if (Ie(r))
        return r.getRunKind() === e && Ne(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Ie(n) ? n.getRunKind() === e && Ne(n.getParent()) ? n.getParent() ?? void 0 : void 0 : pT(r) === e ? hT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Ne(r))
        return _t;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? _t : { wantsRun: !0, valueText: L + n };
    },
    scanPieces: (r) => Ne(r) ? e === "ca" ? Vp(r) : Hp(r) : qr,
    graceSite: (r, n) => {
      if (!Ne(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && Qc(i);
      }
      return Ao(n);
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
function th(e) {
  if (O(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return v(e) && ie(e, ae) === "attribute";
}
function gT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (He(t)) {
      const r = O(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!th(t))
      return;
  }
}
const mT = {
  kind: "milestone",
  ownerPredicate: (e) => He(e),
  ownerOf: (e) => {
    const t = Ie(e) ? e.getRunKind() === "milestone" ? e : void 0 : Ie(e.getParent()) ? e.getParent() : th(e) ? e : void 0;
    if (!t || Ie(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Ie(t) ? He(r) ? r : void 0 : gT(t);
  },
  expectedPieces: (e) => {
    if (!He(e))
      return _t;
    const t = Kp(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = ar(t, To(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : L + r };
  },
  scanPieces: (e) => {
    if (!He(e))
      return qr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Mo(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!He(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = w();
      if (!N(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return Ao(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => He(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, yT = Zp("optbreak", void 0, void 0).opening, bT = {
  kind: "optbreak",
  ownerPredicate: (e) => De(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!De(t) || t.getTag() !== "optbreak"))
      return v(e) || Xt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: yT }),
  scanPieces: (e) => De(e) ? { value: e.getFirstChild() ?? void 0 } : qr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, kT = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => De(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => _t,
  scanPieces: () => qr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, TT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => _t,
  scanPieces: () => qr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, rs = [
  cT,
  lT,
  $u("va"),
  $u("vp"),
  dT,
  Lu("ca"),
  Lu("cp"),
  mT,
  bT,
  kT,
  TT
], xT = new Map(rs.map((e) => [e.kind, e]));
function vn(e) {
  const t = xT.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Mn(e) {
  for (const t of rs) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function rh(e) {
  return Mn(e) !== void 0;
}
const Gs = "unmatched", nh = 2;
function Ki(e) {
  return `\\${e}`;
}
class Rr extends Be {
  __marker;
  constructor(t = "", r) {
    super(Ki(t), r), this.__marker = t, this.__mode = 1;
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
      [Gs]: (t) => CT(t) ? {
        conversion: _T,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Zc().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? Ki(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Ki(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(yu), r.title = Iu(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Iu(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Gs);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(yu), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: nh
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function ih(e) {
  return e.getTextContent() === Ki(e.getMarker());
}
function Iu(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function _T(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Zc(t) };
}
function Zc(e) {
  return Ve(new Rr(e));
}
function CT(e) {
  return e?.tagName.toLowerCase() === Gs;
}
function rn(e) {
  return e instanceof Rr;
}
const sh = "table", Ka = "immutable-table", oh = 1, ST = ["type", "marker", "content"];
class $n extends Zt {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Ka;
  }
  static clone(t) {
    return new $n(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return vT().updateFromJSON(t);
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
      type: Ka,
      ...t !== void 0 && { unknownAttributes: t },
      version: oh
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function vT(e) {
  return Ve(new $n(e));
}
function ah(e) {
  return e instanceof $n;
}
function MT(e) {
  return e?.type === Ka;
}
const ch = "table:row", Du = "immutable-table-row", lh = 1, ja = "tr", ET = ["type", "marker", "content"];
class hi extends Zt {
  __marker;
  __unknownAttributes;
  constructor(t = ja, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Du;
  }
  static clone(t) {
    return new hi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return AT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? ja).setUnknownAttributes(t.unknownAttributes);
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
      type: Du,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: lh
    };
  }
}
function AT(e, t) {
  return Ve(new hi(e, t));
}
const uh = "table:cell", Uu = "immutable-table-cell", dh = 1, Ba = "tc1", PT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function NT(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class gi extends Zt {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Ba, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Uu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new gi(r, n, i, s, o);
  }
  static importJSON(t) {
    return OT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Ba).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = NT(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: Uu,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: dh
    };
  }
}
function OT(e, t, r, n) {
  return Ve(new gi(e, t, r, n));
}
function Po(e, t) {
  const r = e.getChildAtIndex(t);
  return v(r) ? r : void 0;
}
function jt(e, t) {
  const r = Po(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function ns(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function wT(e) {
  return e.getChildren().some((t) => O(t) && t.getMarkerSyntax() === "closing");
}
function qT(e) {
  return ns(e) ? void 0 : { closed: "false" };
}
function RT(e, t, r, n) {
  const i = t.getMarker(), s = Yc(t), o = wT(t);
  if (n) {
    e.append(lt(i, "opening", s));
    const [a] = r;
    Eo(a) && !a.getTextContent().startsWith(L) && a.setTextContent(L + a.getTextContent());
  }
  e.append(...r), o && e.append(lt(i, "closing", s));
}
function En(e) {
  return ot(e, D) ?? void 0;
}
function el(e) {
  let t = e.getParent();
  for (; D(t); )
    t = t.getParent();
  return t;
}
function Va(e) {
  const t = fh(e);
  return e.getChildren().every((r) => O(r) || t && ie(r, ae) === "attribute" || v(r) && r.getTextContent().replaceAll(L, "") === "");
}
function fh(e) {
  return ns(e);
}
function $T(e, t) {
  const r = e.getUnknownAttributes(), n = r ? ar(r, ko(e.getMarker())) : "";
  n !== "" && t.insertAfter(he(n)), e.remove();
}
function LT(e, t) {
  if (ns(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(lt(e.getMarker(), "closing", Yc(e)));
}
function IT(e, t) {
  return D(e) && !ns(e) && !ns(t);
}
function DT(e, t, r) {
  Va(e) && e.getChildren().forEach((i) => {
    O(i) || i.remove();
  });
  const [n] = t;
  r && Eo(n) && !n.getTextContent().startsWith(L) && n.setTextContent(L + n.getTextContent()), e.append(...t);
}
function UT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = fh(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = O(l) && l.getMarkerSyntax() === "closing", f = s && ie(l, ae) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = IT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      DT(e, o, n);
    else {
      const l = vr(t.getMarker(), qT(t));
      RT(l, t, o, n), e.insertAfter(l), Va(l) ? l.remove() : c = l;
    }
  i && !a && LT(t, n), Va(t) && $T(t, c);
}
function oi(e, t) {
  let r = e.getParent();
  for (; D(r); )
    UT(e, r, t), r = e.getParent();
}
function tl(e) {
  if (v(e) && !O(e)) {
    const t = e.getTextContent().startsWith(L) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (U(e)) {
    const t = e.getChildren().find((r) => !O(r));
    if (t) {
      tl(t);
      return;
    }
    e.selectEnd();
  }
}
const ri = /* @__PURE__ */ new WeakMap();
function FT(e, t) {
  return ri.set(e, t), () => {
    ri.get(e) === t && ri.delete(e);
  };
}
function Fu(e) {
  return ri.get(e);
}
function zT(e) {
  return ri.get(Tn())?.has(e.getKey()) ?? !1;
}
function KT(e) {
  ri.get(Tn())?.add(e.getKey());
}
function jT(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Wa(e) {
  return !!(e.opener || e.value || e.closer);
}
function zu(e) {
  return /^\s/.test(e);
}
function rl(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !zu(t) || !zu(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function No(e, t, r) {
  return r.wantsRun ? rl(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : jT(t);
}
function BT(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return rl(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function ph(e, t) {
  return !Wa(e.scanPieces(t));
}
function Ts(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!No(e, n, r))
    return !1;
  const i = w();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Hs(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function VT(e, t, r, n) {
  return !r.wantsRun || Wa(n) || My(Ji) ? !1 : Tn().getEditorState().read(() => {
    const i = oe(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Wa(e.scanPieces(i));
  });
}
function WT(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Ku(e) {
  const t = he(e);
  return Tt(t, ae, "attribute"), t;
}
function HT(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = up(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function GT(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    v(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Ku(n.valueText));
    return;
  }
  const l = HT(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = lt(o(t), "opening"), h = l.getFirstChild();
    return h ? h.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : v(d) ? rl(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = Ku(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(lt(a === "selfClosing" ? "" : o(t), a));
}
function is(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (No(e, i, n) && !zT(t)) {
    if (VT(e, t, n, i)) {
      KT(t);
      return;
    }
    if (!Ts(e, t)) {
      if (!n.wantsRun) {
        WT(i);
        return;
      }
      GT(e, t, i, n);
    }
  }
}
function JT(e, t, r) {
  is(e, t), t.isAttached() && Ts(e, t) && r.add(t.getKey());
}
function hh(e) {
  if (!v(e))
    return !1;
  if (O(e) || we(e) || rn(e))
    return !0;
  const t = ie(e, ae);
  return t === "attribute" || t === hr;
}
function nl(e, t) {
  return O(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && tn(e) && D(e.getParent())) : !1;
}
function YT() {
  const e = w();
  return N(e) ? nl(e.focus.getNode(), e.focus.offset) : !1;
}
function gh(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return v(t) && hh(t) ? t : void 0;
}
function XT(e) {
  const t = gh(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function QT(e) {
  const t = gh(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function ju(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Bu(e, t) {
  e.set(t.key, t.offset, t.type);
}
function ZT(e, t) {
  let r = QT(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!v(n))
      return;
    if (!hh(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Vu(e, t) {
  const r = ZT(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function mh(e) {
  if (e.isCollapsed()) {
    const a = XT(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [ju(r), ju(n)], s = Vu(r, "next"), o = Vu(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Bu(r, i[0]), Bu(n, i[1]), !1) : !0;
}
const Js = "verse-block", yh = 1, ex = "verse-block";
class mi extends Zt {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Js;
  }
  static clone(t) {
    return new mi(t.__number, t.__key);
  }
  static importJSON(t) {
    return tx().updateFromJSON(t);
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
    return Ip(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(ex), Wu(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Wu(r, this.__number), !1;
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
      type: Js,
      number: this.getNumber(),
      version: yh
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Wu(e, t) {
  const { start: r, end: n } = Ip(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Hu(e, "data-verse-start", i ? r : NaN), Hu(e, "data-verse-end", i ? n : NaN);
}
function Hu(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function tx(e) {
  return Ve(new mi(e));
}
function ss(e) {
  return e instanceof mi;
}
function rx(e) {
  return e?.type === Js;
}
const nx = [
  zt,
  gr,
  Ot,
  pt,
  me,
  Ee,
  Yt,
  mr,
  qn,
  Nr,
  Rr,
  rt,
  Jr,
  $n,
  hi,
  gi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Or,
  {
    replace: Mc,
    with: () => Gt(),
    withKlass: Jr
  }
], Ys = {
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
}, ix = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function sx(e) {
  if (!e)
    return ur;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: ur(r)?.category ?? T.Uncategorized,
      type: ix[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: ur(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Gu(e, t, r) {
  const n = {
    type: Cr,
    version: _r,
    content: e
  }, i = t.serializeEditorState(n, r);
  return _o(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const bh = "v", kh = 1, ox = "verse-selected";
class St extends ps {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = bh, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => lx(t) ? {
        conversion: cx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return il().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(wa, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && wn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(wa, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Ut(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      zs + this.getNumber() + zs
    );
    return _(ax, { nodeKey: this.getKey(), text: t });
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
      version: kh
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if ($p(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function ax({ nodeKey: e, text: t }) {
  const [r] = Hy(e);
  return _("span", { className: r ? ox : void 0, children: t });
}
function cx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: il(t) };
}
function il(e, t, r, n, i, s) {
  return Ve(new St(e, t, r, n, i, s));
}
function lx(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === bh;
}
function Ln(e) {
  return e instanceof St;
}
function ux(e) {
  return e?.type === St.getType();
}
function pe(e) {
  return we(e) || Ln(e);
}
function Th(e) {
  return Mp(e) || ux(e);
}
function dx(e) {
  return fx(e).find((t) => ne(t));
}
function fx(e) {
  return e.some(ss) ? e.flatMap((t) => ss(t) ? t.getChildren() : t) : e;
}
function Oo(e) {
  return U(e) ? ss(e) ? e.getChildren().flatMap(Oo) : e.getChildren() : [];
}
function px(e, t) {
  return Oo(e).find((i) => pe(i) && Wc(t, i.getNumber()));
}
function hx(e, t) {
  return t === 0 ? dx(e) : e.map((r) => px(r, t)).filter((r) => r)[0];
}
function Xs(e) {
  return Oo(e).find((r) => pe(r));
}
function xh(e, t) {
  if (!U(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (pe(i))
      return i;
  }
}
function gx(e) {
  const t = e.getParent();
  if (t && U(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (pe(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Je(r); ) {
    const n = Xs(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Ha(e) {
  return Oo(e).findLast((t) => pe(t));
}
function mx(e) {
  if (!we(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function yx(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && U(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function bx(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return yx(t, e, r);
  if (v(e)) {
    const n = mx(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function Ju(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function kx(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!N(t))
    return Ju(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return bx(e, t) ? { verseNum: n } : Ju(e);
}
function Tx(e) {
  return Mk(e) || Ln(e);
}
function sl(e) {
  if (v(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(L) && e.setTextContent(`${t} `);
  }
}
function _h(e) {
  if (v(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Ga(e, t) {
  return e.getEditorState().read(() => !oe(t));
}
function xx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = ol(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && U(i) && U(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && U(i)) {
      const s = i.getChildren(), o = r.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (pe(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = Yu(i);
      for (; s && !Je(s); ) {
        const o = Xs(s);
        if (o) {
          n = o;
          break;
        }
        s = Yu(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = Xs(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && Je(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function _x(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = ol(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && U(i) && (n = xh(i, r.getIndexWithinParent())), !n && i) {
      let o = Xu(i);
      for (; o && !Je(o); ) {
        const a = Ha(o);
        if (a) {
          n = a;
          break;
        }
        o = Xu(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Je(s); ) {
      const o = Ha(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function Yu(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function Xu(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function ol(e, t) {
  if (U(e) && N(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && pe(n))
      return n;
    const i = xh(e, t.anchor.offset);
    if (i)
      return i;
    const s = Xs(e);
    if (s)
      return s;
  }
  return al(e);
}
function al(e) {
  if (!e || Je(e))
    return;
  if (pe(e))
    return e;
  let t = wu(e);
  for (; t; ) {
    if (Je(t))
      return;
    if (pe(t))
      return t;
    const r = Ha(t);
    if (r)
      return r;
    t = wu(t);
  }
}
const Cx = ["style"], Sx = ["style", "code"], Qs = ["style", "cid"], vx = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Mx = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Ex = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], Ax = ["style", "caller", "category", "contents"], Px = ["tag", "marker", "contents"], Nx = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], os = `
`;
function Ox(e, t) {
  const r = oe(e);
  if (!Nt(r))
    return;
  const n = Ch(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function Ch(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Lf();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (ai(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      ai(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Mr(l) || Nt(l))
        return n;
      At(l) && (a = l);
    }
    if (At(l) && (i.includes(l) || i.push(l)), Sh(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += cl(l, t);
  }
  if (a)
    return n;
}
function Qu(e, t, r = "delta-doc") {
  if (e.length < 2 || !Rx(e[0]) || !qx(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => wx(n, r)?.getKey());
}
function wx(e, t = "delta-doc") {
  const r = Lf();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (ai(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      ai(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (At(a) && (i.includes(a) || i.push(a)), Sh(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = cl(a, t);
    if (Mr(a) && l > 0 && e >= n && e < n + l || Nt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function ai(e, t) {
  return e ? t ? !Hs(t.node, e.getKey()) : !0 : !1;
}
function Mr(e) {
  return v(e) && !Nt(e);
}
function Nt(e) {
  return Je(e) || pe(e) || He(e) || K(e) || De(e) || rn(e);
}
function Kr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function qx(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && Nx.includes(t);
}
function Rx(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Sh(e, t) {
  return K(e) || De(e) ? !0 : t === "apply" && U(e) && Nt(e);
}
function vh(e) {
  const t = e.getParent();
  return Kt(e) && ne(t) && t.getFirstChild() === e;
}
function Ja(e) {
  const t = e.getParent();
  return t !== null && ot(t, Ie) !== null;
}
function $x(e) {
  const t = e.getParent();
  return D(t) && e.getTextContent() === Ft && t.getChildrenSize() === 1;
}
function Lx(e) {
  const t = e.getParent();
  if (!K(t))
    return !1;
  const r = e.getPreviousSibling();
  return O(r) && r === t.getFirstChild() && e.getTextContent() === Pt(t.getCaller());
}
function Ix(e) {
  return !rh(e) && cl(e, "delta-doc") === e.getTextContentSize();
}
function cl(e, t) {
  if (Nt(e))
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
    (jc(e) || vh(e) || ie(e, ae) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ie(e, ae) === "attribute" || Ja(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Rc) || $x(e) || Lx(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Ya(e, t) {
  const r = { insert: e.__text }, n = ie(e, Gr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Mh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function Zu(e) {
  const t = new Li();
  return e.isEmpty() || e.read(() => {
    const r = ze();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && fr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = Dx();
    for (const s of i)
      t.push(s);
  }), t;
}
function ll(e, t) {
  const r = [], n = fi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...ed(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...ed(c, n.length, n, i, s, o, a));
  return r;
}
function Dx() {
  return ll();
}
function ed(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return Ux(e, a, n), Fx(e, a, i, s, o), zx(e, t, r, i, o, s, a), Je(e) && a.push(Vx(e)), pe(e) && a.push(Hx(e)), He(e) && a.push(Gx(e)), rn(e) && a.push(Jx(e)), jx(e, a, s), Kx(e, a, s), Zx(c, s), a;
}
function Ux(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    gt(n) ? t.push(Bx(n)) : ne(n) ? t.push(Wx(n)) : fr(n) && t.push({ insert: os });
  }
  At(e) && (r.includes(e) || r.push(e));
}
function Fx(e, t, r, n, i) {
  if (!v(e) || we(e) || rn(e))
    return;
  const s = e.getParent();
  if (K(s) && s.getFirstChild() === e)
    return;
  const o = Qt(e) !== void 0;
  if (O(e) && (o || vh(e) || Ja(e) || rh(e)) || ie(e, ae) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (bs(a))
    return;
  const c = e.getPreviousSibling();
  if (K(s) && O(c) && c === s.getFirstChild() && a === Pt(s.getCaller()))
    return;
  const l = D(s) ? s : void 0, u = l?.getFirstChild();
  o && l && O(u) && c === u && a.startsWith(L) && (a = a.slice(1));
  const d = a.startsWith(Rc) || ie(e, ae) === "attribute" || Ja(e), f = !!l && a === Ft && l.getChildrenSize() === 1, h = wo(e, n), m = h ? r.filter((k) => h.children.includes(k)) : r, p = Ya(e, m);
  if (p.insert = a, h) {
    if (!a || a === L || d)
      return;
    h.contentsOps?.push(p);
  } else
    f || d || t.push(p);
  const y = a !== "" && !f && !(d && l);
  if (r.length > 0 && y)
    for (const k of r)
      i.add(k);
}
function zx(e, t, r, n, i, s, o) {
  D(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (ai(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = Xx(c), u = wo(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function Kx(e, t, r) {
  if (!K(e))
    return;
  const n = Yx(e), i = wo(e, r), s = {
    node: e,
    children: fi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function jx(e, t, r) {
  if (!De(e))
    return;
  const n = Qx(e), i = wo(e, r), s = {
    node: e,
    children: fi(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function nn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function Bx(e) {
  const t = { style: Qi, code: e.__code };
  return nn(t, e), { insert: os, attributes: { book: t } };
}
function Vx(e) {
  const t = { style: Vs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), nn(t, e), { insert: { chapter: t } };
}
function Wx(e) {
  const t = { style: e.__marker };
  return nn(t, e), { insert: os, attributes: { para: t } };
}
function Hx(e) {
  const t = { style: Ws, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), nn(t, e), { insert: { verse: t } };
}
function Gx(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), nn(t, e), { insert: { milestone: t } };
}
function Jx(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function Yx(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), nn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ie(e, Gr);
  return n && (r.attributes = { segment: n }), r;
}
function Xx(e) {
  const t = { insert: "" }, r = Mh([e]);
  return r && (t.attributes = { char: r }), t;
}
function Qx(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), nn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function wo(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function Zx(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    ai(t[r].node, e) && t.splice(r, 1);
}
function Mh(e) {
  if (e.length === 0)
    return;
  const t = e.map(e_);
  return t.length === 1 ? t[0] : t;
}
function e_(e) {
  const t = { style: e.__marker }, r = ie(e, Cn);
  return r && (t.cid = r), nn(t, e), t;
}
const Eh = 1;
class Jt extends ps {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Gi, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new Jt(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => r_(t) ? {
        conversion: t_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ul().updateFromJSON(t);
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
    return r && wn(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => n_(t, n), (l) => i_(t, n, s, l), () => s_(t, n), () => o_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return _("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Gi && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === Vf && i ? (
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
function t_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: ul(t, r) };
}
function ul(e, t, r) {
  return Ve(new Jt(e, t, r));
}
function r_(e) {
  return e ? e.classList.contains(Jt.getType()) : !1;
}
function vt(e) {
  return e instanceof Jt;
}
function n_(e, t) {
  return e.getEditorState().read(() => {
    const r = oe(t);
    if (!K(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function i_(e, t, r, n) {
  e.update(() => {
    const i = oe(t);
    if (!K(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = oe(r);
    if (!vt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function s_(e, t) {
  return e.getEditorState().read(() => {
    const r = oe(t);
    if (!K(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return ll(r);
  });
}
function o_(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of fi())
      if (K(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const a_ = [
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
], c_ = ["†"];
function qo(e) {
  if (Ah())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = td(t), [s, o] = td(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = rd(n, i), [s, o] = rd(s, o);
  const a = Ac();
  return a.anchor = hu(n.getKey(), i, nd(n)), a.focus = hu(s.getKey(), o, nd(s)), a;
}
function dl() {
  if (Ah())
    return;
  const e = w();
  if (!e || !N(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Zs(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Zs(i, s);
  return { start: n, end: o };
}
function td(e) {
  if (yy(e)) {
    const t = Ef(e.jsonPath);
    let r = ze();
    for (let n = 0; n < t.length; n++) {
      if (!r || !U(r))
        return [void 0, void 0];
      const i = pi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : zk(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && U(r) ? [r, Kk(r, e.offset)] : [void 0, void 0];
  }
  if (by(e) || ky(e)) {
    const t = Pi(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (U(t)) {
      const n = t.getLastChild();
      if (n && v(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && U(r) ? [r, 0] : [void 0, void 0];
  }
  if (Ty(e)) {
    const t = Pi(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (U(t)) {
      const n = t.getLastChild();
      if (n && v(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && U(r) ? [r, 0] : [void 0, void 0];
  }
  if (xy(e)) {
    const t = Pi(e.jsonPath);
    if (!t || !U(t))
      return [void 0, void 0];
    const r = ua(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && v(n) ? [n, 0] : [void 0, void 0];
  }
  if (_y(e)) {
    const t = Pi(e.jsonPath);
    if (!t || !U(t))
      return [void 0, void 0];
    const r = ua(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && v(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (Cy(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = Pi(e.jsonPath);
    if (!n || !U(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = ua(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && v(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${Sy(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function rd(e, t) {
  if (!wr(e))
    return [e, t];
  const r = e.getTextContent().length;
  if (t < 0 || t >= r)
    return [e, t];
  const n = e.getParent();
  if (!n || !U(n))
    return [e, t];
  const i = e.getIndexWithinParent();
  return i < 0 ? [e, t] : [n, i];
}
function nd(e) {
  return U(e) ? "element" : "text";
}
function ua(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (O(n) && n.getMarkerSyntax() === t || t === "closing" && O(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (wr(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function Pi(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = Ef(r);
  let i = ze();
  for (const s of n) {
    if (!i || !U(i))
      return;
    const o = pi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Zs(e, t) {
  if (O(e)) {
    const r = e.getMarkerSyntax(), n = l_(e), i = n ? ln(pn(n)) : ln(pn(e));
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
    if (v(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return Zs(n, s);
    }
    const i = So(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return Zs(i, o);
    }
  }
  if (U(e)) {
    const r = e.getChildAtIndex(t);
    if (wr(r)) {
      const i = r.getTextContent().endsWith("*"), s = ln(pn(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = Up(e, t);
    return n.type === "text" ? {
      jsonPath: ln([...pn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: ln(pn(e)),
      offset: n.index
    };
  }
  if (v(e)) {
    const r = Fk(e, t);
    if (r)
      return {
        jsonPath: ln([
          ...pn(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: ln(pn(e)), offset: t };
}
function l_(e) {
  const t = e.getParent();
  if (!t || !U(t))
    return;
  const r = u_(e);
  return r && !At(r) && !v(r) && !_e(r) ? r : t;
}
function u_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Hc(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function pn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = So(r);
    if (!n)
      break;
    const i = Uk(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Ah() {
  for (let e = ze().getFirstChild(); e; e = e.getNextSibling())
    if (ss(e))
      return !0;
  return !1;
}
function Ph(e, t, r, n, i, s, o) {
  if (!Ee.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? qo(r) : w();
  if (!N(a))
    return;
  const c = p_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (Ii(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = Nh(e, l, c, i, s, void 0, void 0);
  return f_(u, a, i), u;
}
function fl(e) {
  return e !== "expanded";
}
function d_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!v(r) || !D(r.getParent()))
    return;
  if (O(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return O(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function f_(e, t, r) {
  const n = fl(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Nk(t), mh(t);
  const i = d_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(D)?.selectEnd();
}
function Hn(e, t, r) {
  const n = vr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(lt(e)) : r?.markerMode === "visible" && n.append(Sr("marker", qe(e)));
  const s = t === "" ? Ft : i ? L + t : t;
  return n.append(he(s)), n;
}
function p_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Hn("fr", f, n)), !e.isCollapsed()) {
        const h = sd(e);
        h.length > 0 && o.push(Hn("fq", h, n));
      }
      o.push(Hn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Hn("xo", f, n)), !e.isCollapsed()) {
        const h = sd(e);
        h.length > 0 && o.push(Hn("xq", h, n));
      }
      o.push(Hn("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function Nh(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : fl(n?.noteMode), l = Ic(e, t, c);
  s && Tt(l, Gr, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = lt(e), u && d.setMode("token"), a || (f = lt(e, "closing"))) : n?.markerMode === "visible" && (d = Sr("marker", qe(e) + " "), a || (f = Sr("marker", st(e))));
  let h;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (h = he(Pt(l.__caller)), u && h.setMode("token"), l.append(h, ...r));
  else {
    const m = () => Co(), p = r.flatMap(g_(m));
    if (t === "")
      l.append(...p);
    else {
      const y = Bc(r);
      let k = () => {
      };
      i?.noteCallerOnClick && (k = i.noteCallerOnClick), h = ul(l.__caller, y, k), l.append(h, m(), ...p);
    }
  }
  return f && l.append(f), l;
}
function id(e) {
  if (typeof e == "string") {
    const i = oe(e);
    return K(i) ? i : void 0;
  }
  const t = fi();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => K(i.node))[e]?.node;
  if (K(n))
    return n;
}
function h_(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (Ln(n) || !n) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      n.selectEnd();
  } else
    e.getChildren().reverse().find(D)?.selectEnd();
}
function g_(e) {
  return (t) => Xt(t) ? [t] : [t, e()];
}
function m_(e) {
  const t = e.getParent();
  return t !== null && ot(t, K) !== null;
}
function sd(e) {
  if (!N(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Pc(e);
  let a = "";
  for (const c of t)
    if (!(K(c) || vt(c) || m_(c)) && !O(c) && !rn(c) && ie(c, ae) !== "attribute") {
      if (pe(c)) {
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
const pl = [
  Jt,
  St,
  ...nx
], y_ = [
  mi,
  ...pl
], b_ = On((e, t) => {
  const { coords: r, children: n, style: i, ...s } = e, o = r !== void 0;
  return _("div", { ref: t, className: "floating-box", "aria-hidden": !o, style: {
    ...i,
    position: "absolute",
    zIndex: 1e3,
    top: r?.y,
    left: r?.x,
    visibility: o ? "visible" : "hidden",
    opacity: o ? 1 : 0
  }, ...s, children: n });
});
function k_() {
  const [e, t] = de(void 0), [r, n] = de(), i = Z(null), s = ge((a, c) => {
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
  }, []), o = ge(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return z(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function T_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = k_();
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
const x_ = dy(b_);
function Oh({ isOpen: e = !1, children: t }) {
  const r = Z(null), { coords: n, placement: i } = T_({ isOpen: e, floatingBoxRef: r }), s = je(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return yn(
    _(x_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const wh = vf(void 0);
function hl() {
  const e = Mf(wh);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function __(e, t) {
  const [r, n] = de(0), [i, s] = de(-1), o = je(() => e ?? [], [e]), a = {
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
function C_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = __(t, r);
  return _(wh.Provider, { value: i, children: _("div", { ...n, children: e }) });
}
const qh = On(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = hl(), u = ge((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = ge((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return _("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function S_({ children: e, autoIndex: t = !0, ...r }) {
  const n = Z(null), { state: { activeIndex: i, menuItems: s } } = hl(), o = je(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = je(() => {
    const c = o(s);
    return t ? fy.map(c, (l, u) => py(l) && l.type === qh && l.props.index === void 0 ? hy(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return z(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), _("div", { ref: n, role: "menu", ...r, children: a });
}
const v_ = (e, t, r) => $s(e, r).toLowerCase().includes(t.toLowerCase()), od = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", $s = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function M_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? od(r[0]) : "") : (u = n || (r.length > 0 ? od(r[0]) : ""), d = (m, p) => v_(m, p, u));
  const f = s || u, h = /* @__PURE__ */ new Map();
  return r.filter((m) => {
    try {
      return d(m, t);
    } catch (p) {
      return console.warn("Error filtering item:", m, p), !1;
    }
  }).sort((m, p) => {
    const y = (S) => (h.has(S) || h.set(S, $s(S, f).toLowerCase()), h.get(S) ?? ""), k = a ? $s(m, f) : y(m), C = a ? $s(p, f) : y(p);
    for (const S of c)
      switch (S) {
        case "exact":
          if (k === l && C !== l)
            return -1;
          if (C === l && k !== l)
            return 1;
          break;
        case "startsWith":
          if (k.startsWith(l) && !C.startsWith(l))
            return -1;
          if (C.startsWith(l) && !k.startsWith(l))
            return 1;
          break;
        case "contains": {
          const P = k.indexOf(l), E = C.indexOf(l);
          if (P !== -1 && E === -1)
            return -1;
          if (E !== -1 && P === -1)
            return 1;
          if (P !== -1 && E !== -1)
            return P - E;
          break;
        }
      }
    return k.localeCompare(C);
  });
}
const da = {
  Root: C_,
  Options: S_,
  Option: qh
};
function E_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return je(() => M_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function A_() {
  const { moveUp: e, moveDown: t, select: r } = hl();
  return je(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const P_ = () => {
  const e = A_(), [t] = ce();
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
    return t.registerCommand(pr, r, Oe);
  }, [t, e]);
};
function N_() {
  return P_(), null;
}
const O_ = ["Shift", "Control", "Alt", "Meta"];
function Rh(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ce(), u = s !== void 0, [d, f] = de(""), h = u ? s ?? "" : d, m = E_({ query: h, items: t, filterBy: "name" }), p = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return z(() => {
    a?.(h, m);
  }, [a, h, m]), z(() => l.registerCommand(pr, (y) => {
    if (u || c?.includes(y.key) || O_.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const C = {
      Escape: () => n?.(),
      Backspace: () => {
        h.length === 0 ? n?.() : f((S) => S.slice(0, -1));
      }
    }[y.key];
    return C ? (y.stopPropagation(), y.preventDefault(), C(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((S) => S + y.key), !0) : !1;
  }, Oe), [l, u, h, o, n, c]), ke(da.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: m, onSelectOption: (y) => p(y), children: [!u && _("input", { value: h, type: "text", disabled: !0 }), _(N_, {}), _(da.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((C, S) => ke(da.Option, { index: S, children: [_("span", { className: "label", children: C.label ?? C.name }), _("span", { className: "description", children: C.description })] }, C.name)) })] });
}
function w_({ trigger: e, items: t }) {
  const [r] = ce(), [n, i] = de(!1), s = ge((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return z(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), z(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = w();
      if (N(l))
        return l;
    });
    a.read(() => {
      const l = w();
      !N(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && _(Oh, { isOpen: n, children: ({ placement: o }) => _(Rh, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function q_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: je(() => {
    if (!t || !e)
      return;
    const i = ur(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = ur(o), { action: c } = r(o, a);
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
function ji(e, t) {
  return `${e}:${t}`;
}
function R_(e, t) {
  z(() => {
    if (!e.hasNodes([tt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Ue(If(e, tt, (n) => Xi(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], h = o[l]?.[d], m = a[l]?.[d], p = c[l]?.[d];
          i.addID(l, d, f, h, m, p);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(tt, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = oe(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : _e(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!tt.isReservedType(c))
              for (const u of l) {
                let d = t.get(ji(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(ji(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(ji(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const $_ = On(function({ logger: t }, r) {
  const [n] = ce(), i = je(() => /* @__PURE__ */ new Map(), []);
  R_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(ji(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = oe(u);
        _e(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && Bs(d));
      }
  };
  return vc(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (tt.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const h = qo(o);
        if (h === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), ap(h, a, c, l, u, d, f);
      }, { tag: qa });
    },
    removeAnnotation(o, a) {
      if (tt.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(ji(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: qa });
    }
  })), null;
}), L_ = [];
function I_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = L_, onChange: n }) {
  const [i] = ce();
  return fs(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(Pf) && !u.has(Gf) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = D_(i, s);
        d.length !== 0 && n(o, i, u, d);
      });
  }, [i, e, t, r, n]), null;
}
function D_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Li();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = oe(i), o = s !== null && Qt(s) !== void 0;
    if (t.size === 1 && v(s) && !o && Ix(s)) {
      const a = Ch(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = oe(i);
          return new Li([v(d) ? Ya(d) : { insert: "" }]);
        }), l = new Li([Ya(s)]), u = new Li(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = Zu(r), c = Zu(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const gl = "formatted", $h = "unformatted", Lh = "paragraph-structure", ml = "standard", Ih = "block-verse", U_ = {
  [gl]: "Formatted",
  [$h]: "Unformatted",
  [Lh]: "Paragraph Structure",
  [ml]: "Standard",
  [Ih]: "Block Verse"
};
function yi(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let yl, bl;
function F_(e) {
  const t = kl(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  yl = e, bl = t;
}
F_(gl);
const BP = () => yl, Ro = () => bl;
function kl(e) {
  let t;
  switch (e ?? yl) {
    case gl:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case $h:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Lh:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case ml:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Ih:
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
  const t = ad(e);
  return Object.keys(U_).find((r) => qt(ad(kl(r)), t));
}
const z_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function ad(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...z_, ...t };
}
function $o(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function K_(e) {
  if (e)
    return as(e) ? St : e.markerMode === "editable" ? pt : St;
}
function as(e) {
  return e?.verseLayout === "block";
}
function j_(e) {
  const t = [], r = e ?? bl;
  return r && (t.push(`${kb}${r.markerMode}`), r.hasSpacing && t.push(yb), r.isFormattedFont && t.push(bb)), t;
}
function B_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += V_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), H_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += G_(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), Y_(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function V_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), W_(t, e.retain, e.attributes, r, n)), e.retain);
}
function W_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = ze();
  function l(u) {
    if (s <= 0)
      return !0;
    if (Mr(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), h = d - f, m = Math.min(s, h);
        if (m > 0) {
          let p = u;
          const y = f > 0, k = m < d - f;
          if (y && k) {
            const [, C] = u.splitText(f);
            [p] = C.splitText(m);
          } else y ? [, p] = u.splitText(f) : k && ([p] = u.splitText(m));
          if (Yr(r)) {
            const C = p.getParent();
            if (D(C)) {
              const S = r.char;
              let P;
              Array.isArray(S) ? a >= 0 && a <= S.length - 1 && (P = S[a]) : a === 0 && (P = S);
              const E = P ? Sn(P, C) : !1;
              if (E && Array.isArray(S) && S.length > 1) {
                const j = he("");
                p.replace(j);
                const M = typeof r.segment == "string" ? r.segment : void 0, R = bi(S.slice(1), n, p, M);
                let $ = j;
                for (const re of R)
                  $.insertAfter(re), $ = re;
                j.remove(), Rt(r, p);
              } else if (E)
                Rt(r, p);
              else {
                p.remove();
                const j = cd(p, r, n, i);
                if (j && j.length > 0) {
                  let M = C;
                  for (const R of j)
                    M.insertAfter(R), M = R;
                }
              }
            } else {
              const S = he("");
              p.replace(S);
              const P = cd(p, r, n, i);
              if (P && P.length > 0) {
                let E = S;
                for (const j of P)
                  E.insertAfter(j), E = j;
                S.remove();
              } else
                S.replace(p);
            }
          } else
            Rt(r, p);
          s -= m;
        }
      }
      o += d;
    } else if (Nt(u))
      e <= o && o < e + t && s > 0 && (ld(u, r), s -= 1), o += 1;
    else if (D(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (Yr(r)) {
          const f = r.char;
          let h;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (h = f[a]) : a === 0 && (h = f), h) {
            Xa(u, h.style), typeof h.cid == "string" && Tt(u, Cn, () => h.cid);
            const m = Fe(h, Qs);
            m && Object.keys(m).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...m
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || sC(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const h of f) {
          if (s <= 0)
            break;
          if (l(h) && s <= 0)
            return d && Oa(u), !0;
        }
      }
      d && Oa(u), a -= 1;
    } else if (At(u)) {
      const d = u.getChildren();
      for (const h of d) {
        if (s <= 0)
          break;
        if (l(h) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!fr(u))
          ld(u, r);
        else if (Tl(r)) {
          const h = Fh(r.para, n);
          h && u.replace(h, !0);
        }
        s -= f;
      }
      o += f;
    } else if (U(u)) {
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
function cd(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = bi(t.char, r, e, i), o = s.find(D);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Rt(t, e);
    return;
  }
  const a = {};
  Bh.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Rt(t, e), s;
}
function Dh(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  O(r) ? (r.setMarker(t), r.setTextContent(qe(t))) : Xt(r) && r.getTextType() === "marker" && r.setTextContent(qe(t) + L);
}
function Xa(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    O(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = D(e.getParent()), i = e.getFirstChild();
  Xt(i) && i.getTextType() === "marker" && i.getTextContent() === qe(r, n) && i.setTextContent(qe(t, n));
  const s = e.getLastChild();
  Xt(s) && s.getTextType() === "marker" && s.getTextContent() === st(r, n) && s.setTextContent(st(t, n));
}
function ld(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && D(e) && Yr(t)) {
      const i = Qa(n);
      if (Xa(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Tt(e, Cn, () => o);
      }
      const s = Fe(i, Qs);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Je(e) || pe(e) || He(e) || K(e) || De(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (gt(e) || ne(e) || D(e)) && (r === "style" && ne(e) ? Dh(e, n) : r === "style" && D(e) ? Xa(e, n) : r === "code" && gt(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Tt(e, Gr, () => n));
  }
}
function H_(e, t, r) {
  if (t <= 0)
    return;
  const n = ze();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Mr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (Nt(a))
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
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Gt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const h = a.getNextSibling();
          if (h && Te(h)) {
            let m = i + 1;
            const p = h.getChildren();
            for (const k of p) {
              if (s <= 0)
                break;
              const C = i;
              if (i = m, o(k)) {
                i = C;
                break;
              }
              Mr(k) ? m += k.getTextContentSize() : Nt(k) && (m += 1), i = C;
            }
            const y = h.getChildren();
            for (const k of y)
              k.remove(), a.append(k);
            h.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Gt(), !0);
        } else ne(a) ? a.replace(Gt(), !0) : a.remove();
      }
      i += 1;
    } else if (U(a)) {
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
function G_(e, t, r, n, i) {
  if (t === os)
    return ud(e, r, n, i);
  if (t.endsWith(os) && !Tl(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Yr(r))
        throw new Error("Text + LF should not have char attributes");
      o += eo(e, s, r, i);
    }
    return o += ud(e + o, r, n, i), o;
  } else return Yr(r) ? J_(e, t, r, n, i) : eo(e, t, r, i);
}
function J_(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = he(t === "" ? Ft : t);
  Rt(r, s);
  let o;
  {
    let y = function(k) {
      if (Mr(k)) {
        const C = k.getTextContentSize();
        if (e >= p && e < p + C) {
          const S = k.getParent();
          return D(S) && (o = S), !0;
        }
        p += C;
      } else if (Nt(k))
        p += 1;
      else if (D(k)) {
        const C = k.getChildren();
        for (const S of C)
          if (y(S))
            return !0;
      } else if (U(k)) {
        const C = k.getChildren();
        for (const S of C)
          if (y(S))
            return !0;
        At(k) && (p += 1);
      }
      return !1;
    };
    const m = ze();
    let p = 0;
    y(m);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const m = a[0];
      m && Sn(m, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Sn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = bi(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(D);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), eo(e, t, void 0, i);
  const f = {};
  for (const [m, p] of Object.entries(r))
    m !== "char" && m !== "segment" && typeof p == "string" && (f[m] = p);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let h = !0;
  for (const m of u)
    if (!Uh(e, m, i)) {
      h = !1;
      break;
    }
  return h ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), eo(e, t, void 0, i));
}
function eo(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = ze();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Mr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = he(t);
        if (Rt(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          D(f) && !Yr(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Nt(c))
      s += 1;
    else if (D(c)) {
      if (!o && e === s) {
        const d = he(t);
        Rt(r, d);
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
        return Rt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (At(c)) {
      if (!o && e === s) {
        const d = he(t);
        Rt(r, d);
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
        return Rt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (U(c)) {
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
    Rt(r, c);
    const l = Gt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Uh(e, t, r) {
  const n = ze();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Gt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!U(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (Te(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Gt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Mr(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (Nt(l))
        i += 1;
      else if (D(l)) {
        if (o(l))
          return !0;
      } else if (At(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (fr(u) && At(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (U(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return U(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Gt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Te(a) ? fr(a) && ne(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Te(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (D(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Te(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function Y_(e, t, r, n, i) {
  let s;
  return Kr("chapter", t) ? s = Q_(t.insert.chapter, r) : Kr("verse", t) ? s = Z_(t.insert.verse, r) : Kr("ms", t) ? s = eC(t.insert.ms) : Kr("note", t) ? s = zh(t, r, n, i) : Kr("unknown", t) ? s = Kh(t, r, n, i) : Kr("unmatched", t) && (s = rC(t.insert.unmatched, r)), s ? Uh(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function ud(e, t, r, n) {
  let i;
  Tl(t) ? i = Fh(t.para, r) : iC(t) && (i = X_(t.book)), i ??= Gt();
  const s = i, o = ne(s), a = fr(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (Mr(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const h = d.getParent();
        if (ne(h) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${h.getMarker()}) with LF attributes at targetIndex ${e}`);
          const m = e - c, [p] = m > 0 ? d.splitText(m) : [void 0];
          let y, k = p?.getPreviousSibling();
          for (; k; ) {
            const C = k;
            k = k.getPreviousSibling(), y ? y.insertBefore(C) : s.append(C), y = C;
          }
          return p && s.append(p), h.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Nt(d))
      c += 1;
    else if (At(d)) {
      const f = d.getChildren();
      for (const h of f) {
        if (u(h))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (fr(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (ne(d) && s) {
          const h = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${h.getMarker()}) at targetIndex ${e}`), h.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ne(d) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${d.getMarker()}) at targetIndex ${e}`), d.insertAfter(s), l = !0, !0;
    } else if (U(d)) {
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
  return u(ze()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function X_(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Qi || !r || !zt.isValidBookCode(r))
    return;
  const n = Fe(e, Sx);
  return fp(r, n);
}
function Fh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Fe(e, Cx), i = Zi(r, n);
  if (!yi(t))
    return i;
  if (t.markerMode === "editable")
    i.append(lt(r), Co());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = qe(r) + L;
    i.append(t.hasGutterParaMarkers ? Wb(s) : Sr("marker", s));
  }
  return i;
}
function Q_(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Fe(e, vx);
  let a;
  if (t.markerMode === "editable")
    a = gp(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = zc(r, c, n, i, s, o);
  }
  return a;
}
function Z_(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Fe(e, Mx);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Ut(r, n);
    c = vp(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = il(n, l, i, s, o, a);
  }
  return c;
}
function eC(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Fe(e, Ex);
  return Xf(t, r, n, s, i);
}
function zh(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Fe(i.note, Ax), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const h = [];
  for (const p of c?.ops ?? [])
    if (typeof p.insert == "string")
      if (Yr(p.attributes)) {
        const y = bi(p.attributes.char, t, he(p.insert), void 0, jh(p.attributes.char, h), !1, t.markerMode === "editable");
        h.push(...y);
      } else
        h.push(he(p.insert));
  return Nh(s, o, h, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function Kh(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Fe(i, Px), l = Fc(s, o, c), u = a?.ops ?? [];
  u.length > 0 && tC(u, t, r, n).forEach((h) => l.append(h));
  const d = e.attributes?.segment;
  return typeof d == "string" && Tt(l, Gr, () => d), l;
}
function tC(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Yr(s.attributes)) {
        const o = he(s.insert), a = bi(s.attributes.char, t, o, void 0, jh(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(he(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Kr("unknown", s)) {
        const o = Kh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Kr("note", s)) {
        const o = zh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function rC(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = Zc(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function jh(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Qa(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function bi(e, t, r, n, i, s = !1, o = !1) {
  v(r) && r.getTextContentSize() === 0 && r.setTextContent(Ft);
  const a = () => {
    o && v(r) && r.getTextContent() !== Ft && r.setTextContent(L + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Qa), l = c[0], u = i?.[i.length - 1];
    if (D(u) && Sn(l, u))
      return c.length > 1 ? bi(c.slice(1), t, r, void 0, void 0, !0, o).forEach((h) => u.append(h)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, h, m) => {
      const p = vr(h.style, Fe(h, Qs));
      if (typeof h.cid == "string" && Tt(p, Cn, () => h.cid), n && m === c.length - 1 && Tt(p, Gr, () => n), f)
        if (D(f)) {
          const y = f.getMarker(), k = [];
          pa(y, k, t, !0), k.forEach((S) => p.append(S)), p.append(f);
          const C = [];
          fa(f, C, t, !0), C.forEach((S) => p.append(S));
        } else
          p.append(f);
      return p;
    }, r);
    return pa(l.style, d, t, s), fa(d, d, t, s), [d];
  } else {
    const c = Qa(e), l = i?.[i.length - 1];
    if (D(l) && Sn(c, l))
      return r && l.append(r), [];
    a();
    const u = vr(c.style, Fe(c, Qs));
    return typeof c.cid == "string" && Tt(u, Cn, () => c.cid), n && Tt(u, Gr, () => n), r && u.append(r), pa(c.style, u, t, s), fa(u, u, t, s), [u];
  }
}
function fa(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && nC(e.getMarker(), t, r, !1, n);
}
function pa(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = lt(e, "opening", n) : r?.markerMode === "visible" && (i = Sr("marker", qe(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function nC(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = lt("", "selfClosing") : s = lt(e, "closing", i) : r?.markerMode === "visible" && (s = Sr("marker", n ? st("") : st(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function iC(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Tl(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Yr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function sC(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Rt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Tt(t, Gr, () => n);
        continue;
      }
      if (oC(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const Bh = [
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
function oC(e) {
  return Bh.includes(e);
}
const Xn = /* @__PURE__ */ new WeakMap();
function aC(e) {
  return Xn.set(e, (Xn.get(e) ?? 0) + 1), () => {
    const t = (Xn.get(e) ?? 1) - 1;
    t > 0 ? Xn.set(e, t) : Xn.delete(e);
  };
}
function cC() {
  const e = Tn();
  return e.isEditable() && (Xn.get(e) ?? 0) > 0;
}
function lC() {
  const [e] = ce();
  return z(() => uC(e), [e]), null;
}
function uC(e) {
  return Ue(e.registerCommand(Hi, dC, ft), e.registerCommand(Hi, (t) => (fC(t), !1), xn));
}
function dC(e) {
  return pC(e.target) ? It(w()) !== void 0 : !1;
}
function fC(e) {
  const t = e.target;
  if (Nc(t) && xo(en(t)))
    return;
  const r = w();
  N(r) && hC(r);
}
function Vh(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Kt(t))
      r++, t = t.getNextSibling(), v(t) && t.getTextContent() === L && (r++, t = t.getNextSibling());
    else if (pe(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r;
}
function ki(e) {
  const t = Vh(e);
  return t === 0 ? !1 : (jt(e, t), !0);
}
function pC(e) {
  if (!Nc(e))
    return !1;
  const t = en(e);
  if (!xo(t))
    return !1;
  const r = t.getParent();
  return r ? Rp(r)?.is(t) && cC() ? ($k(t), !0) : (jt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function hC(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = oe(t.key);
  if (!Te(r))
    return !1;
  const n = r.getFirstChild();
  return !wr(n) && !Ln(n) ? !1 : ki(r);
}
function gC() {
  const [e] = ce();
  return z(() => {
    const t = (r) => r instanceof KeyboardEvent && !Wh(r) || !Lo() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Ue(
      e.registerCommand(pr, t, Oe),
      e.registerCommand(mo, t, Oe),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(cr, t, Qe),
      e.registerCommand(Vr, t, Qe),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(yo, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = en(r.target);
        return !n || !Xr(n) ? !1 : (r.preventDefault(), !0);
      }, Oe),
      e.registerCommand(Ey, t, Oe),
      e.registerCommand(Ay, t, Oe),
      e.registerCommand(Py, t, Oe)
    );
  }, [e]), null;
}
function Wh(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Xr(e) {
  return ot(e, (t) => De(t) || ah(t)) ?? void 0;
}
function Lo() {
  const e = w();
  return N(e) ? Xr(e.anchor.getNode()) !== void 0 || Xr(e.focus.getNode()) !== void 0 : !1;
}
function mC(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function yC(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), mC(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function bC(e, t, r, n) {
  if (!wC(t) || yC(e, r))
    return !1;
  const i = r === "up" ? _x(t) : xx(t);
  return i && n.preventDefault(), i;
}
function kC({ viewOptions: e }) {
  const [t] = ce();
  return TC(t, e), null;
}
function TC(e, t) {
  z(() => {
    if (!e.hasNodes([gr, St, Ee]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = w();
      if (!N(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = dd(o), d = EC(i, fd(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return bC(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = dd(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return fd(a, n.key) ? l = !c && gd(i, "next") || !c && _C(i) || NC(i) || !c && s && hd(i, "next") : xC(a, n.key) && (l = !c && gd(i, "previous") || !c && CC(i) || OC(i, t) || !c && s && hd(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(pr, r, Oe);
  }, [e, t]);
}
function dd(e) {
  return e.dir || "ltr";
}
function fd(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function xC(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Za(e) {
  if (!D(e) || e.getMarker() !== "fp")
    return;
  const t = Qt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function _C(e) {
  const t = Za(Np(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (jt(t, 0), !0);
}
function CC(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Za(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : pd(n);
  }
  if (t.offset === 0) {
    const n = Za(r);
    return n ? pd(n) : !1;
  }
  return !1;
}
function pd(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (v(t))
    return t.select(), !0;
  if (U(t)) {
    const i = t.getLastDescendant();
    return v(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const to = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function SC(e) {
  if (to)
    for (const { segment: r } of to.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function vC(e) {
  if (to) {
    let n = 0;
    for (const { index: i } of to.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Hh(e) {
  for (let t = e; t; t = t.getParent())
    if (U(t) && !t.isInline())
      return t;
}
function Gh(e) {
  return !!e && O(e) && Xr(e) !== void 0;
}
function ci(e) {
  return v(e) && !e.isToken() && !Gh(e) && e.getTextContentSize() > 0;
}
function Jh(e) {
  return hs(e) ? !0 : K(e) ? e.getIsCollapsed() === !0 : v(e) ? (e.isToken() || Gh(e)) && e.getTextContentSize() > 0 : bo(e) ? !He(e) : !1;
}
function li(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Io(e, t, r) {
  for (let n = e; n; ) {
    if (Jh(n))
      return n;
    if (U(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? li(n, t, r);
      continue;
    }
    if (ci(n))
      return n;
    n = li(n, t, r);
  }
}
function xl(e, t, r, n, i) {
  return r === "element" && U(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? li(e, n, i) : r === "text" && Jh(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : li(e, n, i);
}
function ha(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = xl(e.node, e.offset, e.kind, "previous", t), n = Io(r, "previous", t);
  if (!n)
    return e;
  if (ci(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function MC(e, t) {
  const r = e.getNode(), n = Hh(r);
  if (!n)
    return;
  if (e.type === "text" && ci(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return ha({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = xl(r, e.offset, e.type, t, n), s = Io(i, t, n);
  if (!s)
    return;
  if (ci(s)) {
    const c = s.getTextContent(), l = t === "next" ? SC(c) : vC(c);
    return ha({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return ha({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function Yh(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = MC(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function hd(e, t) {
  return Yh(e, t, "collapse");
}
function EC(e, t) {
  return Yh(e, t, "extend");
}
function AC(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && ci(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = xl(n, e.offset, e.type, t, r);
  return Io(i, t, r) === void 0;
}
function PC(e, t) {
  const r = ze();
  for (let n = e; n; ) {
    const i = li(n, t, r), s = i && Io(i, t, r);
    if (!s)
      return;
    if (n = Xr(s), !n)
      return s;
  }
}
function gd(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Xr(n))
    return !1;
  const i = Hh(n);
  if (!i || !AC(r, t, i))
    return !1;
  const s = li(i, t, ze()), o = s && Xr(s);
  if (!o)
    return !1;
  const a = PC(o, t);
  if (!a)
    return !0;
  if (ci(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function md(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function NC(e) {
  const t = e.anchor.getNode(), r = Np(e);
  if (K(r) && !O(r.getFirstChild())) {
    if (Te(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Te(i) && ki(i)) && i.selectStart(), !0;
      }
    } else return Xt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Te(t) && K(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : md(r), !0;
  }
  const n = r?.getParent();
  if (Xt(r) && K(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? md(n) : n.selectEnd(), !0;
  }
  return !1;
}
function OC(e, t) {
  const r = Ek(e);
  if (ys(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (gt(i.getParent()))
    return !0;
  if (K(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!Ln(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (Te(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = ot(o, (c) => K(c));
    if (K(a) && a.getIsCollapsed()) {
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
  if (vt(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function wC(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return pe(t) && bo(t);
}
function qC() {
  const [e] = ce();
  return RC(e), null;
}
function RC(e) {
  z(() => {
    if (!e.hasNodes([me]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Ue(
      e.registerNodeTransform(me, IC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(me, Jk),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(me, Yp),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(me, (t) => is(vn("char"), t)),
      e.registerNodeTransform(Be, DC)
    );
  }, [e]);
}
function ga(e) {
  return e.getChildren().some(O);
}
function $C(e, t) {
  const r = t.getFirstChild();
  if (!O(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (Eo(n)) {
    const i = n.getTextContent();
    i.startsWith(L) && (i === L ? n.remove() : n.setTextContent(i.slice(L.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function LC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  O(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function IC(e) {
  if (!D(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (ga(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ie(e, Cn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (D(i) && Sn({ style: t, cid: r }, i) && qt(n, i.getUnknownAttributes()))
    if (ga(i)) {
      if ($C(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  D(s) && Sn({ style: t, cid: r }, s) && qt(n, s.getUnknownAttributes()) && (ga(s) ? LC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function DC(e) {
  const t = e.getParent();
  if (!D(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(Ft) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function Xh(e) {
  return e.replaceAll("	", " ");
}
function Qh() {
  const e = w();
  return !!e && !e.isCollapsed();
}
function Zh(e) {
  const t = () => !Qh();
  return Ue(e.registerCommand(ms, t, ft), e.registerCommand(Vr, t, ft));
}
const _l = (e) => {
  e.dispatchCommand(ms, null);
}, Cl = (e) => {
  e.dispatchCommand(Vr, null);
}, Sl = (e) => {
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
      n.setData(o, Xh(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(cr, s);
  });
}, vl = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", Xh(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(cr, i);
  });
};
function UC() {
  const [e] = ce();
  return z(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Fs ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), _l(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), Cl(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? vl(e) : Sl(e)));
    };
    return Ue(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      Zh(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function FC({ logger: e }) {
  const [t] = ce();
  return z(() => Ue(
    // When the backslash or forward slash key is typed.
    t.registerCommand(pr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), ei),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(cr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ei),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(yo, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ei)
  ), [t, e]), null;
}
function zC({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), _("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: _("span", { className: "text", children: i.title }) });
}
function KC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return _("div", { className: "typeahead-popover", children: _("ul", { children: e.map((i, s) => _(zC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let jC = 0;
class Ni {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${jC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function BC({ options: e } = {}) {
  const [t] = ce(), [r, n] = de(() => !t.isEditable()), [i, s] = de({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = de(void 0), c = je(() => {
    const d = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new Ni("Cut", {
        onSelect: () => {
          Cl(t);
        },
        isDisabled: r
      }),
      new Ni("Copy", {
        onSelect: () => {
          _l(t);
        }
      }),
      new Ni("Paste", {
        onSelect: () => {
          Sl(t);
        },
        isDisabled: r
      }),
      new Ni("Paste as Plain Text", {
        onSelect: () => {
          vl(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((h) => new Ni(h.title, { onSelect: h.onSelect, isDisabled: h.isDisabled }));
    return [...d, ...f];
  }, [t, r, e]), l = ge(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  z(() => Zh(t), [t]), z(() => {
    const d = (f) => {
      const h = f.target;
      t.getRootElement() === h || xp(h) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
    };
    return t.registerRootListener((f, h) => {
      h?.removeEventListener("contextmenu", d), f && f.addEventListener("contextmenu", d);
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
        f.preventDefault(), f.stopPropagation(), a((h) => h === void 0 ? 0 : (h + 1) % c.length);
      else if (f.key === "ArrowUp")
        f.preventDefault(), f.stopPropagation(), a((h) => h === void 0 ? c.length - 1 : (h - 1 + c.length) % c.length);
      else if (f.key === "Enter" && o !== void 0) {
        f.preventDefault(), f.stopPropagation();
        const h = c[o];
        h && !h.isDisabled && (t.update(() => {
          h.onSelect();
        }), l());
      }
    };
    return document.addEventListener("keydown", d, !0), () => document.removeEventListener("keydown", d, !0);
  }, [i.isOpen, l, c, o, t]), z(() => t.registerEditableListener((d) => {
    n(!d);
  }), [t]);
  const u = Z(null);
  return fs(() => {
    const d = u.current;
    if (!d)
      return;
    const { width: f, height: h } = d.getBoundingClientRect(), m = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), p = Math.max(0, Math.min(i.y, globalThis.innerHeight - h));
    d.style.left = `${m}px`, d.style.top = `${p}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Xy.createPortal(_("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: _(KC, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), l());
  }, onOptionMouseEnter: (d) => {
    a(d);
  } }) }), document.body) : null;
}
function VC(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function WC(e) {
  if (!qy(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function HC(e) {
  return vt(e);
}
function ma(e, t, r) {
  const n = en(t.node);
  if (!bo(n) || HC(n))
    return;
  const i = e.getElementByKey(n.getKey());
  if (!i || i === t.node || !i.contains(t.node))
    return;
  const s = i.parentNode;
  if (!s)
    return;
  const o = Array.prototype.indexOf.call(s.childNodes, i);
  if (!(o < 0))
    return { node: s, offset: r === "before" ? o : o + 1 };
}
function GC(e, t) {
  if (w())
    return !1;
  const r = e.getRootElement(), n = Ny(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !Oy(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, d;
  if (n.isCollapsed)
    u = ma(e, c, WC(c)), d = u;
  else {
    const y = VC(n.getRangeAt(0), c);
    u = ma(e, c, y ? "before" : "after"), d = ma(e, l, y ? "after" : "before");
  }
  if (!u && !d)
    return !1;
  const f = u ?? c, h = d ?? l, m = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: h.node,
    focusOffset: h.offset
  }, p = wy(m, e);
  return p ? (kn(p), p.dirty = !t, t) : !1;
}
function JC() {
  const [e] = ce(), t = Z(!1), r = Z(!1);
  return z(() => {
    const n = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, r.current && (r.current = !1, e.update(() => {
        const s = w();
        N(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", n, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, r.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", n, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), z(() => e.registerCommand(dr, () => (GC(e, t.current) && (r.current = !0), !1), Qe), [e]), null;
}
function YC() {
  const [e] = ce();
  return z(() => e.registerCommand(pr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Fs ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, Qe), [e]), null;
}
function XC({ isEditable: e }) {
  const [t] = ce();
  return fs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function yd(e) {
  return !!e && jc(oe(e));
}
function eg(e) {
  const [t] = ce(), r = Z(void 0), n = ge((i) => {
    const s = w(), o = N(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = yd(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = Po(u, d);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const h = Ck();
        i.insertAfter(h), r.current = h.getKey(), l = h.getKey();
      }
      jt(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = oe(a);
      v(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return z(() => {
    const i = () => {
      const a = e(), c = w(), l = N(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (Wr(Hr), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (bs(c) || !c.includes(ii))
        return;
      const l = w(), u = N(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (Sk(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(ii).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Ue(t.registerCommand(dr, () => (i(), !1), xn), t.registerCommand(Oc, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = yd(a);
      }), c && t.update(() => {
        const l = oe(a);
        v(l) && l.remove();
      }, { tag: Hr }), r.current = void 0, !1;
    }, xn), t.registerNodeTransform(Be, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function QC() {
  const e = w();
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!U(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!pe(i) || Po(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || pe(s))
    return i;
}
function ZC() {
  return eg(QC), null;
}
function eS({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = ce();
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
          f || Wr(Ry), o.setEditorState(l), o.dispatchCommand($y, void 0);
        }, { tag: Wf });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function tS({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ce();
  return rS(t, n), nS(i, e, r, n), null;
}
function rS(e, t) {
  const r = Z(void 0), n = Z(void 0), i = e.noteCallers, s = e.crossRefCallers;
  z(() => {
    let o = i;
    (!o || o.length <= 0) && (o = a_), r.current !== o && (r.current = o, bd("note-callers", o, t));
  }, [t, i]), z(() => {
    let o = s;
    (!o || o.length <= 0) && (o = c_), n.current !== o && (n.current = o, bd("cross-ref-callers", o, t));
  }, [t, s]);
}
function nS(e, t, r, n) {
  z(() => {
    if (!e.hasNodes([me, Ee, Jt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => uS(s));
    return Ue(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Ee, (s) => iS(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(me, sS),
      e.registerNodeTransform(Be, oS),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Jt, aS),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Jt, (s, { prevEditorState: o }) => cS(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(dr, () => lS(e, t, r, n), ft),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function iS(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => vt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    v(i) && !O(i) && i.getTextContent() !== Pt(e.getCaller()) && e.insertBefore(i);
  }
}
function sS(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => vt(o));
  if (!D(e) || !K(t) || !n)
    return;
  const i = Bc(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  v(s) ? s.getTextContent() !== L && s.setTextContent(L) : e.insertAfter(he(L));
}
function oS(e) {
  const t = Qt(e), r = t?.getChildren(), n = r?.find((o) => vt(o));
  if (!v(e) || !K(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!O(e) && K(i) && e.getTextContent() !== L && (e.setTextContent(L), e.selectEnd()), D(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Ft) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Bc(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function aS(e) {
  if (!vt(e))
    return;
  const t = e.getNextSibling();
  !v(t) || O(t) ? e.insertAfter(he(L)) : t.getTextContent() !== L && t.setTextContent(L);
}
function cS(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = oe(r), a = o?.getParent();
      return vt(o) && K(a) && a.getCaller() === Gi;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function lS(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = w();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = ot(o, (c) => K(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = oe(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Oi(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (K(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Oi(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (K(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Oi(e, c, n);
    } else if (!a) {
      const c = ot(o, (l) => K(l));
      if (c && c.getIsCollapsed() && Te(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Oi(e, l, n);
      }
    }
  }
  if (Te(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (Ln(c) && K(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Oi(e, l, n);
    }
  }
  return !1;
}
function Oi(e, t, r) {
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
function uS(e) {
  const t = w();
  if (!N(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (K(i) && v(s)) {
    e.preventDefault();
    const o = Ac();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), kn(o);
  }
}
function bd(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (dS(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function dS(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Do(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!O(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = ts(e);
  return r && t.push(r), t.length > 0 && t.every((n) => v(n) && n.getMode() === "token") ? t : [];
}
function fS(e) {
  const t = e.getParent();
  if (K(t))
    return Do(t).some((r) => r.is(e)) ? t : void 0;
}
function ro(e) {
  const t = Do(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function pS(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function hS(e) {
  const t = Ly();
  if (!N(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= ro(e);
  const i = pS(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= ro(e);
}
function ec(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = fS(t);
  if (r)
    return gS(r, t, e.offset) ? void 0 : r;
}
function gS(e, t, r) {
  const n = Do(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function mS(e) {
  const t = Do(e), r = t[t.length - 1];
  v(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : jt(e, ro(e));
}
function yS(e = !1) {
  const t = w();
  if (!N(t))
    return !1;
  if (!t.isCollapsed())
    return bS(t.anchor, t.focus);
  const r = ec(t.anchor);
  if (!r)
    return !1;
  if (!e && hS(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    jt(n, r.getIndexWithinParent());
  } else
    mS(r);
  return !0;
}
function bS(e, t) {
  const r = ec(e), n = ec(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && kd(e, r, i), n && kd(t, n, !i), !0;
}
function kd(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), ro(t), "element");
}
function kS() {
  const [e] = ce(), t = Z(!1);
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
  }, [e]), z(() => e.registerCommand(dr, () => (yS(t.current) && Wr(Hr), !1), xn), [e]), null;
}
function TS({ onChange: e }) {
  const [t] = ce();
  return z(() => t.registerCommand(dr, () => {
    const r = dl();
    return e?.(r), !1;
  }, ft), [t, e]), null;
}
function tg(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function Qr(e) {
  return e ? Te(e) ? e : ot(e, (r) => Te(r)) ?? void 0 : void 0;
}
function rg(e) {
  if (!N(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Qr(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Ml(e) {
  return N(e) && e.isCollapsed() && e.anchor.type === "element" || !N(e) && !go(e) ? !1 : e.getNodes().some((t) => pe(t));
}
function ng(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Qr(r);
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
function ig(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Qr(r);
  if (!n)
    return !1;
  if (U(r)) {
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
function Td(e, t) {
  return !!tc(e, t);
}
function tc(e, t) {
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && U(n)) {
    const s = n.getChildren(), o = t === "backward" ? r.offset - 1 : r.offset;
    if (o < 0)
      return;
    const a = s[o];
    return pe(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return pe(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return pe(i) ? i : void 0;
}
function no(e, t) {
  if (!N(e))
    return !1;
  const r = Qr(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function ni(e) {
  return Ml(e) || rg(e);
}
function sg(e, t) {
  if (Ml(e) || rg(e))
    return !0;
  if (!N(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return ng(e) && no(e, "backward") || Td(e, "backward");
    case "deleteForward":
      return ig(e) && no(e, "forward") || Td(e, "forward");
    case "insertText":
      return !1;
  }
}
function xS(e, t) {
  if (!(!N(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = tc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (ng(e) && no(e, "backward")) {
        const n = Qr(e.anchor.getNode());
        if (Te(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = tc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (ig(e) && no(e, "forward")) {
        const i = Qr(e.anchor.getNode())?.getNextSibling();
        if (Te(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function xd(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return go(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!N(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!N(e) || e.isCollapsed())
    return !1;
  const r = Qr(e.anchor.getNode()), n = Qr(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function og(e) {
  if (v(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else U(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function ag(e) {
  const t = e.getPreviousSibling();
  if (!Te(t))
    return;
  const r = t.getLastChild(), n = e.getFirstChild();
  xo(n) && n.remove();
  const i = e.getChildren();
  t.append(...i), e.remove(), r ? og(r) : ki(t) || t.selectStart();
}
function cg(e) {
  return pe(e) || Je(e) ? [] : Te(e) ? e.getChildren().flatMap(cg) : [e];
}
function _S(e) {
  const t = [];
  for (const r of e) {
    const n = cg(r);
    n.length !== 0 && (Te(r) && t.length > 0 && t.push(he(" ")), t.push(...n));
  }
  return t;
}
const CS = "psc-para-marker-selected", SS = /* @__PURE__ */ new Set(["Process", "Dead", "Unidentified"]);
function vS({ onParaMarkerMenuRequest: e, structureProtectionMode: t = "off" }) {
  const [r] = ce(), n = Z(e);
  z(() => {
    n.current = e;
  }, [e]);
  const i = Z(t);
  return z(() => {
    i.current = t;
  }, [t]), z(() => {
    let s;
    const o = () => {
      queueMicrotask(() => n.current?.());
    }, a = (m) => It(w()) ? (m instanceof Event && m.preventDefault(), !0) : !1, c = (m) => {
      if (!(m instanceof Event) || !(m.target instanceof Node))
        return !1;
      const p = It(w());
      if (!p)
        return !1;
      const y = en(m.target);
      return !y || y.getKey() !== p.getKey() ? !1 : (m.preventDefault(), !0);
    }, l = (m) => {
      const p = It(w()), y = p?.getParent();
      if (!p || !Te(y))
        return !1;
      switch (m.key) {
        case "Enter":
          return m.preventDefault(), o(), !0;
        case "ArrowDown":
        case "ArrowUp":
        case "ArrowLeft":
        case "ArrowRight":
          return m.preventDefault(), m.key === "ArrowDown" && m.altKey ? o() : ba(y, p), !0;
        case "Backspace":
        case "Delete":
          return m.preventDefault(), i.current !== "protected" && ag(y), !0;
        default:
          return (Wh(m) || SS.has(m.key)) && ba(y, p), !1;
      }
    }, u = () => {
      const m = It(w()), p = m?.getParent();
      return !m || !Te(p) ? !1 : (ba(p, m), !0);
    }, d = (m, p) => {
      r.isEditable() || (m = p = void 0), s !== p && ya(r, s, !1), s = p, ya(r, p, !0), _d(r, m);
    }, f = (m = r.getEditorState()) => m.read(() => {
      const p = It(w());
      return { glyphKey: p?.getKey(), ownerKey: p?.getParent()?.getKey() };
    }), h = Ue(aC(r), r.registerEditableListener(() => {
      const { glyphKey: m, ownerKey: p } = f();
      d(m, p);
    }), r.registerCommand(pr, l, Qe), r.registerCommand(wc, u, Qe), r.registerCommand(Vr, a, Qe), r.registerCommand(ms, a, Qe), r.registerCommand(cr, a, Qe), r.registerCommand(Nf, a, Qe), r.registerCommand(yo, c, Qe), r.registerCommand(mo, a, Qe), r.registerUpdateListener(({ editorState: m }) => {
      const { glyphKey: p, ownerKey: y } = f(m);
      d(p, y), y !== void 0 && AS(r.getRootElement());
    }));
    return () => {
      h(), ya(r, s, !1), _d(r, void 0);
    };
  }, [r]), null;
}
function ya(e, t, r) {
  if (t === void 0)
    return;
  const n = e.getElementByKey(t);
  n && n.classList.toggle(CS, r);
}
const MS = "psc-para-marker-";
let ES = 0;
function _d(e, t) {
  const r = e.getRootElement();
  if (!r)
    return;
  const n = t === void 0 ? null : e.getElementByKey(t);
  if (!n) {
    r.removeAttribute("aria-activedescendant");
    return;
  }
  n.id || (n.id = `${MS}${ES++}`), r.setAttribute("aria-activedescendant", n.id);
}
function AS(e) {
  if (!e)
    return;
  const t = e.ownerDocument.defaultView?.getSelection();
  !t || t.rangeCount === 0 || t.anchorNode && e.contains(t.anchorNode) && t.removeAllRanges();
}
function ba(e, t) {
  ki(e) || jt(e, t.getIndexWithinParent() + 1);
}
function PS() {
  const [e] = ce();
  return NS(e), null;
}
function NS(e) {
  z(() => {
    if (!e.hasNodes([rt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(rt, (t) => OS(t, e));
  }, [e]);
}
function OS(e, t) {
  Ga(t, e.getKey()) && _h(e.getFirstChild()), !(!ne(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = oe(e.getKey());
    return ne(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function lg({ onStateChange: e }) {
  const [t] = ce(), [r, n] = de(t), i = Z(!1), s = Z(!1), o = Z(void 0), a = Z(void 0), c = ge(() => {
    const l = w(), u = It(l)?.getParent();
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
      const f = l.anchor.getNode(), h = l.focus.getNode();
      let m = f.getKey() === "root" ? f : ot(f, (C) => {
        const S = C.getParent();
        return S !== null && Iy(S);
      });
      m === null && (m = f.getTopLevelElementOrThrow()), ss(m) && (m = ot(f, ne) ?? m);
      const p = m.getKey(), y = r.getElementByKey(p), k = Pk(f, h);
      if (k && Tx(k) && (d = k.getMarker()), y !== null && (ne(m) || gt(m) || ys(m))) {
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
  return z(() => t.registerCommand(dr, (l, u) => (c(), n(u), !1), Qe), [t, c]), z(() => Ue(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Dy, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Qe), r.registerCommand(Uy, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Qe)), [c, r, e]), null;
}
function Cd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function wS(e) {
  if (Array.isArray(e)) return e;
}
function qS(e, t) {
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
function RS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $S(e, t) {
  return wS(e) || qS(e, t) || LS(e, t) || RS();
}
function LS(e, t) {
  if (e) {
    if (typeof e == "string") return Cd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Cd(e, t) : void 0;
  }
}
const ug = Object.entries, Sd = Object.setPrototypeOf, IS = Object.isFrozen, DS = Object.getPrototypeOf, US = Object.getOwnPropertyDescriptor;
let nt = Object.freeze, at = Object.seal, Qn = Object.create, dg = typeof Reflect < "u" && Reflect, rc = dg.apply, nc = dg.construct;
nt || (nt = function(t) {
  return t;
});
at || (at = function(t) {
  return t;
});
rc || (rc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
nc || (nc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Gn = Ye(Array.prototype.forEach), FS = Ye(Array.prototype.lastIndexOf), vd = Ye(Array.prototype.pop), Jn = Ye(Array.prototype.push), zS = Ye(Array.prototype.splice), jr = Array.isArray, Di = Ye(String.prototype.toLowerCase), ka = Ye(String.prototype.toString), Md = Ye(String.prototype.match), wi = Ye(String.prototype.replace), Ed = Ye(String.prototype.indexOf), KS = Ye(String.prototype.trim), jS = Ye(Number.prototype.toString), BS = Ye(Boolean.prototype.toString), Ad = typeof BigInt > "u" ? null : Ye(BigInt.prototype.toString), Pd = typeof Symbol > "u" ? null : Ye(Symbol.prototype.toString), et = Ye(Object.prototype.hasOwnProperty), qi = Ye(Object.prototype.toString), Ze = Ye(RegExp.prototype.test), hn = VS(TypeError);
function Ye(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return rc(e, t, n);
  };
}
function VS(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return nc(e, r);
  };
}
function fe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Di;
  if (Sd && Sd(e, null), !jr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (IS(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function WS(e) {
  for (let t = 0; t < e.length; t++)
    et(e, t) || (e[t] = null);
  return e;
}
function ct(e) {
  const t = Qn(null);
  for (const n of ug(e)) {
    var r = $S(n, 2);
    const i = r[0], s = r[1];
    et(e, i) && (jr(s) ? t[i] = WS(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ct(s) : t[i] = s);
  }
  return t;
}
function HS(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return jS(e);
    case "boolean":
      return BS(e);
    case "bigint":
      return Ad ? Ad(e) : "0";
    case "symbol":
      return Pd ? Pd(e) : "Symbol()";
    case "undefined":
      return qi(e);
    case "function":
    case "object": {
      if (e === null)
        return qi(e);
      const t = e, r = Vt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : qi(n);
      }
      return qi(e);
    }
    default:
      return qi(e);
  }
}
function Vt(e, t) {
  for (; e !== null; ) {
    const n = US(e, t);
    if (n) {
      if (n.get)
        return Ye(n.get);
      if (typeof n.value == "function")
        return Ye(n.value);
    }
    e = DS(e);
  }
  function r() {
    return null;
  }
  return r;
}
function GS(e) {
  try {
    return Ze(e, ""), !0;
  } catch {
    return !1;
  }
}
const Nd = nt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ta = nt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), xa = nt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), JS = nt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), _a = nt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), YS = nt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Od = nt(["#text"]), wd = nt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ca = nt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), qd = nt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ns = nt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), XS = at(/{{[\w\W]*|^[\w\W]*}}/g), QS = at(/<%[\w\W]*|^[\w\W]*%>/g), ZS = at(/\${[\w\W]*/g), ev = at(/^data-[\-\w.\u00B7-\uFFFF]+$/), tv = at(/^aria-[\-\w]+$/), Rd = at(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), rv = at(/^(?:\w+script|data):/i), nv = at(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), iv = at(/^html$/i), sv = at(/^[a-z][.\w]*(-[.\w]+)+$/i), $d = at(/<[/\w!]/g), Ld = at(/<[/\w]/g), ov = at(/<\/no(script|embed|frames)/i), av = at(/\/>/i), Et = {
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
}, cv = function() {
  return typeof window > "u" ? null : window;
}, lv = function(t, r) {
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
}, Id = function() {
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
  return et(t, r) && jr(t[r]) ? fe(i.base ? ct(i.base) : {}, t[r], i.transform) : n;
};
function fg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : cv();
  const t = (F) => fg(F);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Et.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, h = Vt(f, "cloneNode"), m = Vt(f, "remove"), p = Vt(f, "nextSibling"), y = Vt(f, "childNodes"), k = Vt(f, "parentNode"), C = Vt(f, "shadowRoot"), S = Vt(f, "attributes"), P = o && o.prototype ? Vt(o.prototype, "nodeType") : null, E = o && o.prototype ? Vt(o.prototype, "nodeName") : null, j = o && o.prototype ? Vt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let M, R = "", $, re = !1, W = 0;
  const Se = function() {
    if (W > 0)
      throw hn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ee = function(g) {
    Se(), W++;
    try {
      return M.createHTML(g);
    } finally {
      W--;
    }
  }, Re = function(g) {
    Se(), W++;
    try {
      return M.createScriptURL(g);
    } finally {
      W--;
    }
  }, ye = function() {
    return re || ($ = lv(d, i), re = !0), $;
  }, tr = r, Ke = tr.implementation, $r = tr.createNodeIterator, Lr = tr.createDocumentFragment, sn = tr.getElementsByTagName, Y = n.importNode;
  let A = Id();
  t.isSupported = typeof ug == "function" && typeof k == "function" && Ke && Ke.createHTMLDocument !== void 0;
  const H = XS, ue = QS, ve = ZS, X = ev, Ce = tv, yr = rv, wt = nv, on = sv;
  let We = Rd, le = null;
  const mt = fe({}, [...Nd, ...Ta, ...xa, ..._a, ...Od]);
  let xe = null;
  const br = fe({}, [...wd, ...Ca, ...qd, ...Ns]);
  let Pe = Object.seal(Qn(null, {
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
  })), kr = null, _i = null;
  const yt = Object.seal(Qn(null, {
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
  let xs = !0, Tr = !0, Dn = !1, Ci = !0, rr = !1, Bt = !0, q = !1, B = !1, G = null, Q = null, Me = !1, Xe = !1, Mt = !1, an = !1, Si = !0, Xl = !1;
  const Ql = "user-content-";
  let jo = !0, _s = !1, Un = {}, nr = null;
  const Bo = fe({}, [
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
  let Zl = null;
  const eu = fe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Vo = null;
  const tu = fe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Cs = "http://www.w3.org/1998/Math/MathML", Ss = "http://www.w3.org/2000/svg", ir = "http://www.w3.org/1999/xhtml";
  let Fn = ir, Wo = !1, Ho = null;
  const Jm = fe({}, [Cs, Ss, ir], ka), ru = nt(["mi", "mo", "mn", "ms", "mtext"]);
  let Go = fe({}, ru);
  const nu = nt(["annotation-xml"]);
  let Jo = fe({}, nu);
  const Ym = fe({}, ["title", "style", "font", "a", "script"]);
  let vi = null;
  const Xm = ["application/xhtml+xml", "text/html"], Qm = "text/html";
  let $e = null, zn = null;
  const Zm = r.createElement("form"), iu = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, Yo = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (zn && zn === g)
      return;
    (!g || typeof g != "object") && (g = {}), g = ct(g), vi = // eslint-disable-next-line unicorn/prefer-includes
    Xm.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? Qm : g.PARSER_MEDIA_TYPE, $e = vi === "application/xhtml+xml" ? ka : Di, le = Fr(g, "ALLOWED_TAGS", mt, {
      transform: $e
    }), xe = Fr(g, "ALLOWED_ATTR", br, {
      transform: $e
    }), Ho = Fr(g, "ALLOWED_NAMESPACES", Jm, {
      transform: ka
    }), Vo = Fr(g, "ADD_URI_SAFE_ATTR", tu, {
      transform: $e,
      base: tu
    }), Zl = Fr(g, "ADD_DATA_URI_TAGS", eu, {
      transform: $e,
      base: eu
    }), nr = Fr(g, "FORBID_CONTENTS", Bo, {
      transform: $e
    }), kr = Fr(g, "FORBID_TAGS", ct({}), {
      transform: $e
    }), _i = Fr(g, "FORBID_ATTR", ct({}), {
      transform: $e
    }), Un = et(g, "USE_PROFILES") ? g.USE_PROFILES && typeof g.USE_PROFILES == "object" ? ct(g.USE_PROFILES) : g.USE_PROFILES : !1, xs = g.ALLOW_ARIA_ATTR !== !1, Tr = g.ALLOW_DATA_ATTR !== !1, Dn = g.ALLOW_UNKNOWN_PROTOCOLS || !1, Ci = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, rr = g.SAFE_FOR_TEMPLATES || !1, Bt = g.SAFE_FOR_XML !== !1, q = g.WHOLE_DOCUMENT || !1, Xe = g.RETURN_DOM || !1, Mt = g.RETURN_DOM_FRAGMENT || !1, an = g.RETURN_TRUSTED_TYPE || !1, Me = g.FORCE_BODY || !1, Si = g.SANITIZE_DOM !== !1, Xl = g.SANITIZE_NAMED_PROPS || !1, jo = g.KEEP_CONTENT !== !1, _s = g.IN_PLACE || !1, We = GS(g.ALLOWED_URI_REGEXP) ? g.ALLOWED_URI_REGEXP : Rd, Fn = typeof g.NAMESPACE == "string" ? g.NAMESPACE : ir, Go = et(g, "MATHML_TEXT_INTEGRATION_POINTS") && g.MATHML_TEXT_INTEGRATION_POINTS && typeof g.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ct(g.MATHML_TEXT_INTEGRATION_POINTS) : fe({}, ru), Jo = et(g, "HTML_INTEGRATION_POINTS") && g.HTML_INTEGRATION_POINTS && typeof g.HTML_INTEGRATION_POINTS == "object" ? ct(g.HTML_INTEGRATION_POINTS) : fe({}, nu);
    const x = et(g, "CUSTOM_ELEMENT_HANDLING") && g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING == "object" ? ct(g.CUSTOM_ELEMENT_HANDLING) : Qn(null);
    if (Pe = Qn(null), et(x, "tagNameCheck") && iu(x.tagNameCheck) && (Pe.tagNameCheck = x.tagNameCheck), et(x, "attributeNameCheck") && iu(x.attributeNameCheck) && (Pe.attributeNameCheck = x.attributeNameCheck), et(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && (Pe.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), at(Pe), rr && (Tr = !1), Mt && (Xe = !0), Un && (le = fe({}, Od), xe = Qn(null), Un.html === !0 && (fe(le, Nd), fe(xe, wd)), Un.svg === !0 && (fe(le, Ta), fe(xe, Ca), fe(xe, Ns)), Un.svgFilters === !0 && (fe(le, xa), fe(xe, Ca), fe(xe, Ns)), Un.mathMl === !0 && (fe(le, _a), fe(xe, qd), fe(xe, Ns))), yt.tagCheck = null, yt.attributeCheck = null, et(g, "ADD_TAGS") && (typeof g.ADD_TAGS == "function" ? yt.tagCheck = g.ADD_TAGS : jr(g.ADD_TAGS) && (le === mt && (le = ct(le)), fe(le, g.ADD_TAGS, $e))), et(g, "ADD_ATTR") && (typeof g.ADD_ATTR == "function" ? yt.attributeCheck = g.ADD_ATTR : jr(g.ADD_ATTR) && (xe === br && (xe = ct(xe)), fe(xe, g.ADD_ATTR, $e))), et(g, "ADD_URI_SAFE_ATTR") && jr(g.ADD_URI_SAFE_ATTR) && fe(Vo, g.ADD_URI_SAFE_ATTR, $e), et(g, "FORBID_CONTENTS") && jr(g.FORBID_CONTENTS) && (nr === Bo && (nr = ct(nr)), fe(nr, g.FORBID_CONTENTS, $e)), et(g, "ADD_FORBID_CONTENTS") && jr(g.ADD_FORBID_CONTENTS) && (nr === Bo && (nr = ct(nr)), fe(nr, g.ADD_FORBID_CONTENTS, $e)), jo && (le["#text"] = !0), q && fe(le, ["html", "head", "body"]), le.table && (fe(le, ["tbody"]), delete kr.tbody), g.TRUSTED_TYPES_POLICY) {
      if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const I = M;
      M = g.TRUSTED_TYPES_POLICY;
      try {
        R = ee("");
      } catch (V) {
        throw M = I, V;
      }
    } else g.TRUSTED_TYPES_POLICY === null ? (M = void 0, R = "") : (M === void 0 && (M = ye()), M && typeof R == "string" && (R = ee("")));
    nt && nt(g), zn = g;
  }, su = fe({}, [...Ta, ...xa, ...JS]), ou = fe({}, [..._a, ...YS]), ey = function(g, x, I) {
    return x.namespaceURI === ir ? g === "svg" : x.namespaceURI === Cs ? g === "svg" && (I === "annotation-xml" || Go[I]) : !!su[g];
  }, ty = function(g, x, I) {
    return x.namespaceURI === ir ? g === "math" : x.namespaceURI === Ss ? g === "math" && Jo[I] : !!ou[g];
  }, ry = function(g, x, I) {
    return x.namespaceURI === Ss && !Jo[I] || x.namespaceURI === Cs && !Go[I] ? !1 : !ou[g] && (Ym[g] || !su[g]);
  }, ny = function(g) {
    let x = k(g);
    (!x || !x.tagName) && (x = {
      namespaceURI: Fn,
      tagName: "template"
    });
    const I = Di(g.tagName), V = Di(x.tagName);
    return Ho[g.namespaceURI] ? g.namespaceURI === Ss ? ey(I, x, V) : g.namespaceURI === Cs ? ty(I, x, V) : g.namespaceURI === ir ? ry(I, x, V) : !!(vi === "application/xhtml+xml" && Ho[g.namespaceURI]) : !1;
  }, Ir = function(g) {
    Jn(t.removed, {
      element: g
    });
    try {
      k(g).removeChild(g);
    } catch {
      if (m(g), !k(g))
        throw hn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, vs = function(g) {
    Mi(g);
    const x = y(g);
    if (x) {
      const V = [];
      Gn(x, (J) => {
        Jn(V, J);
      }), Gn(V, (J) => {
        try {
          m(J);
        } catch {
        }
      });
    }
    const I = S(g);
    if (I)
      for (let V = I.length - 1; V >= 0; --V) {
        const J = I[V], se = J && J.name;
        if (typeof se == "string")
          try {
            g.removeAttribute(se);
          } catch {
          }
      }
  }, cn = function(g, x) {
    try {
      Jn(t.removed, {
        attribute: x.getAttributeNode(g),
        from: x
      });
    } catch {
      Jn(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(g), g === "is")
      if (Xe || Mt)
        try {
          Ir(x);
        } catch {
        }
      else
        try {
          x.setAttribute(g, "");
        } catch {
        }
  }, iy = function(g) {
    const x = S(g);
    if (x)
      for (let I = x.length - 1; I >= 0; --I) {
        const V = x[I], J = V && V.name;
        if (!(typeof J != "string" || xe[$e(J)]))
          try {
            g.removeAttribute(J);
          } catch {
          }
      }
  }, Mi = function(g) {
    const x = [g];
    for (; x.length > 0; ) {
      const I = x.pop();
      (P ? P(I) : I.nodeType) === Et.element && iy(I);
      const J = y(I);
      if (J)
        for (let se = J.length - 1; se >= 0; --se)
          x.push(J[se]);
    }
  }, sy = function(g) {
    if (!Bt)
      return;
    const x = [g];
    for (; x.length > 0; ) {
      const I = x.pop(), V = P ? P(I) : I.nodeType;
      if (V === Et.processingInstruction || V === Et.comment && Ze(Ld, I.data)) {
        try {
          m(I);
        } catch {
        }
        continue;
      }
      if (V === Et.element) {
        const se = I, be = $e(E ? E(I) : I.nodeName);
        try {
          se.hasAttribute && se.hasAttribute("patchsrc") && se.removeAttribute("patchsrc"), se.hasAttribute && se.hasAttribute("for") && be !== "label" && be !== "output" && se.removeAttribute("for");
        } catch {
        }
      }
      const J = y(I);
      if (J)
        for (let se = J.length - 1; se >= 0; --se)
          x.push(J[se]);
    }
  }, au = function(g) {
    let x = null, I = null;
    if (Me)
      g = "<remove></remove>" + g;
    else {
      const se = Md(g, /^[\r\n\t ]+/);
      I = se && se[0];
    }
    vi === "application/xhtml+xml" && Fn === ir && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const V = M ? ee(g) : g;
    if (Fn === ir)
      try {
        x = new u().parseFromString(V, vi);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = Ke.createDocument(Fn, "template", null);
      try {
        x.documentElement.innerHTML = Wo ? R : V;
      } catch {
      }
    }
    const J = x.body || x.documentElement;
    return g && I && J.insertBefore(r.createTextNode(I), J.childNodes[0] || null), Fn === ir ? sn.call(x, q ? "html" : "body")[0] : q ? x.documentElement : J;
  }, cu = function(g) {
    const x = j ? j(g) : g.ownerDocument;
    return $r.call(
      x || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Ms = function(g) {
    return g = wi(g, H, " "), g = wi(g, ue, " "), g = wi(g, ve, " "), g;
  }, Xo = function(g) {
    var x;
    g.normalize();
    const I = j ? j(g) : g.ownerDocument, V = $r.call(
      I || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let J = V.nextNode();
    for (; J; )
      J.data = Ms(J.data), J = V.nextNode();
    const se = (x = g.querySelectorAll) === null || x === void 0 ? void 0 : x.call(g, "template");
    se && Gn(se, (be) => {
      Kn(be.content) && Xo(be.content);
    });
  }, Es = function(g) {
    const x = E ? E(g) : null;
    return typeof x != "string" || $e(x) !== "form" ? !1 : typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    g.attributes !== S(g) || typeof g.removeAttribute != "function" || typeof g.setAttribute != "function" || typeof g.namespaceURI != "string" || typeof g.insertBefore != "function" || typeof g.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    g.nodeType !== P(g) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, Kn = function(g) {
    if (!P || typeof g != "object" || g === null)
      return !1;
    try {
      return P(g) === Et.documentFragment;
    } catch {
      return !1;
    }
  }, Ei = function(g) {
    if (!P || typeof g != "object" || g === null)
      return !1;
    try {
      return typeof P(g) == "number";
    } catch {
      return !1;
    }
  };
  function sr(F, g, x) {
    F.length !== 0 && Gn(F, (I) => {
      I.call(t, g, x, zn);
    });
  }
  const oy = function(g, x) {
    return !!(Bt && g.hasChildNodes() && !Ei(g.firstElementChild) && Ze($d, g.textContent) && Ze($d, g.innerHTML) || Bt && g.namespaceURI === ir && x === "style" && Ei(g.firstElementChild) || g.nodeType === Et.processingInstruction || Bt && g.nodeType === Et.comment && Ze(Ld, g.data));
  }, ay = function(g, x, I) {
    if (!kr[x] && fu(x) && (Pe.tagNameCheck instanceof RegExp && Ze(Pe.tagNameCheck, x) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(x)))
      return !1;
    if (jo && !nr[x]) {
      const V = k(g), J = y(g);
      if (J && V) {
        const se = J.length;
        for (let be = se - 1; be >= 0; --be) {
          const Le = g === I ? h(J[be], !0) : J[be];
          V.insertBefore(Le, p(g));
        }
      }
    }
    return Ir(g), !0;
  }, lu = function(g, x, I, V) {
    return g.length === 0 ? x : x === I || x === V ? ct(x) : x;
  }, uu = function(g, x) {
    if (sr(A.beforeSanitizeElements, g, null), g !== x && k(g) === null)
      return _s && Mi(g), !0;
    if (Es(g))
      return Ir(g), !0;
    const I = $e(E ? E(g) : g.nodeName);
    if (le = lu(A.uponSanitizeElement, le, mt, G), sr(A.uponSanitizeElement, g, {
      tagName: I,
      allowedTags: le
    }), g !== x && k(g) === null)
      return _s && Mi(g), !0;
    if (oy(g, I))
      return Ir(g), !0;
    if (kr[I] || !(yt.tagCheck instanceof Function && yt.tagCheck(I)) && !le[I]) {
      const J = ay(g, I, x);
      return J === !1 && sr(A.afterSanitizeElements, g, null), J;
    }
    if ((P ? P(g) : g.nodeType) === Et.element && !ny(g) || (I === "noscript" || I === "noembed" || I === "noframes") && Ze(ov, g.innerHTML))
      return Ir(g), !0;
    if (rr && g.nodeType === Et.text) {
      const J = Ms(g.textContent);
      g.textContent !== J && (Jn(t.removed, {
        element: g.cloneNode()
      }), g.textContent = J);
    }
    return sr(A.afterSanitizeElements, g, null), !1;
  }, du = function(g, x, I) {
    if (_i[x] || Bt && x === "patchsrc" || Bt && x === "for" && g !== "label" && g !== "output" || Si && (x === "id" || x === "name") && (I in r || I in Zm))
      return !1;
    const V = xe[x] || yt.attributeCheck instanceof Function && yt.attributeCheck(x, g);
    if (!(Tr && Ze(X, x))) {
      if (!(xs && Ze(Ce, x))) {
        if (V) {
          if (!Vo[x]) {
            if (!Ze(We, wi(I, wt, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && g !== "script" && Ed(I, "data:") === 0 && Zl[g])) {
                if (!(Dn && !Ze(yr, wi(I, wt, "")))) {
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
          !(fu(g) && (Pe.tagNameCheck instanceof RegExp && Ze(Pe.tagNameCheck, g) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(g)) && (Pe.attributeNameCheck instanceof RegExp && Ze(Pe.attributeNameCheck, x) || Pe.attributeNameCheck instanceof Function && Pe.attributeNameCheck(x, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && Pe.allowCustomizedBuiltInElements && (Pe.tagNameCheck instanceof RegExp && Ze(Pe.tagNameCheck, I) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(I)))
        ) return !1;
      }
    }
    return !0;
  }, cy = fe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), fu = function(g) {
    return !cy[Di(g)] && Ze(on, g);
  }, ly = function(g, x, I, V) {
    if (M && typeof d == "object" && typeof d.getAttributeType == "function" && !I)
      switch (d.getAttributeType(g, x)) {
        case "TrustedHTML":
          return ee(V);
        case "TrustedScriptURL":
          return Re(V);
      }
    return V;
  }, uy = function(g, x, I, V) {
    try {
      I ? g.setAttributeNS(I, x, V) : g.setAttribute(x, V), Es(g) ? Ir(g) : vd(t.removed);
    } catch {
      cn(x, g);
    }
  }, pu = function(g) {
    sr(A.beforeSanitizeAttributes, g, null);
    const x = g.attributes;
    if (!x || Es(g))
      return;
    xe = lu(A.uponSanitizeAttribute, xe, br, Q);
    const I = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: xe,
      forceKeepAttr: void 0
    };
    let V = x.length;
    const J = $e(g.nodeName);
    for (; V--; ) {
      const se = x[V], be = se.name, Le = se.namespaceURI, bt = se.value, kt = $e(be), Zo = bt;
      let dt = be === "value" ? Zo : KS(Zo);
      if (I.attrName = kt, I.attrValue = dt, I.keepAttr = !0, I.forceKeepAttr = void 0, sr(A.uponSanitizeAttribute, g, I), dt = I.attrValue, Xl && (kt === "id" || kt === "name") && Ed(dt, Ql) !== 0 && (cn(be, g), dt = Ql + dt), Bt && Ze(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, dt)) {
        cn(be, g);
        continue;
      }
      if (kt === "attributename" && Md(dt, "href")) {
        cn(be, g);
        continue;
      }
      if (!I.forceKeepAttr) {
        if (!I.keepAttr) {
          cn(be, g);
          continue;
        }
        if (!Ci && Ze(av, dt)) {
          cn(be, g);
          continue;
        }
        if (rr && (dt = Ms(dt)), !du(J, kt, dt)) {
          cn(be, g);
          continue;
        }
        dt = ly(J, kt, Le, dt), dt !== Zo && uy(g, be, Le, dt);
      }
    }
    sr(A.afterSanitizeAttributes, g, null);
  }, As = function(g) {
    let x = null;
    const I = cu(g);
    for (sr(A.beforeSanitizeShadowDOM, g, null); x = I.nextNode(); )
      if (sr(A.uponSanitizeShadowNode, x, null), uu(x, g), pu(x), Kn(x.content) && As(x.content), (P ? P(x) : x.nodeType) === Et.element) {
        const J = C(x);
        Kn(J) && (Qo(J), As(J));
      }
    sr(A.afterSanitizeShadowDOM, g, null);
  }, Qo = function(g) {
    const x = [{
      node: g,
      shadow: null
    }];
    for (; x.length > 0; ) {
      const I = x.pop();
      if (I.shadow) {
        As(I.shadow);
        continue;
      }
      const V = I.node, se = (P ? P(V) : V.nodeType) === Et.element, be = y(V);
      if (be)
        for (let Le = be.length - 1; Le >= 0; --Le)
          x.push({
            node: be[Le],
            shadow: null
          });
      if (se) {
        const Le = E ? E(V) : null;
        if (typeof Le == "string" && $e(Le) === "template") {
          const bt = V.content;
          Kn(bt) && x.push({
            node: bt,
            shadow: null
          });
        }
      }
      if (se) {
        const Le = C(V);
        Kn(Le) && x.push({
          node: null,
          shadow: Le
        }, {
          node: Le,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, I = null, V = null, J = null;
    if (Wo = !F, Wo && (F = "<!-->"), typeof F != "string" && !Ei(F) && (F = HS(F), typeof F != "string"))
      throw hn("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    B ? (le = G, xe = Q) : Yo(g), (A.uponSanitizeElement.length > 0 || A.uponSanitizeAttribute.length > 0) && (le = ct(le)), A.uponSanitizeAttribute.length > 0 && (xe = ct(xe)), t.removed = [];
    const se = _s && typeof F != "string" && Ei(F);
    if (se) {
      sy(F);
      const bt = E ? E(F) : F.nodeName;
      if (typeof bt == "string") {
        const kt = $e(bt);
        if (!le[kt] || kr[kt])
          throw vs(F), hn("root node is forbidden and cannot be sanitized in-place");
      }
      if (Es(F))
        throw vs(F), hn("root node is clobbered and cannot be sanitized in-place");
      try {
        Qo(F);
      } catch (kt) {
        throw vs(F), kt;
      }
    } else if (Ei(F))
      x = au("<!---->"), I = x.ownerDocument.importNode(F, !0), I.nodeType === Et.element && I.nodeName === "BODY" || I.nodeName === "HTML" ? x = I : x.appendChild(I), Qo(I);
    else {
      if (!Xe && !rr && !q && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return M && an ? ee(F) : F;
      if (x = au(F), !x)
        return Xe ? null : an ? R : "";
    }
    x && Me && Ir(x.firstChild);
    const be = se ? F : x;
    try {
      const bt = cu(be);
      for (; V = bt.nextNode(); )
        uu(V, be), pu(V), Kn(V.content) && As(V.content);
    } catch (bt) {
      throw se && (vs(F), Gn(t.removed, (kt) => {
        kt.element && Mi(kt.element);
      })), bt;
    }
    if (se)
      return Gn(t.removed, (bt) => {
        bt.element && Mi(bt.element);
      }), rr && Xo(F), F;
    if (Xe) {
      if (rr && Xo(x), Mt)
        for (J = Lr.call(x.ownerDocument); x.firstChild; )
          J.appendChild(x.firstChild);
      else
        J = x;
      return (xe.shadowroot || xe.shadowrootmode) && (J = Y.call(n, J, !0)), J;
    }
    let Le = q ? x.outerHTML : x.innerHTML;
    return q && le["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && Ze(iv, x.ownerDocument.doctype.name) && (Le = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + Le), rr && (Le = Ms(Le)), M && an ? ee(Le) : Le;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Yo(F), B = !0, G = le, Q = xe;
  }, t.clearConfig = function() {
    zn = null, B = !1, G = null, Q = null, M = $, R = "";
  }, t.isValidAttribute = function(F, g, x) {
    zn || Yo({});
    const I = $e(F), V = $e(g);
    return du(I, V, x);
  }, t.addHook = function(F, g) {
    typeof g == "function" && et(A, F) && Jn(A[F], g);
  }, t.removeHook = function(F, g) {
    if (et(A, F)) {
      if (g !== void 0) {
        const x = FS(A[F], g);
        return x === -1 ? void 0 : zS(A[F], x, 1)[0];
      }
      return vd(A[F]);
    }
  }, t.removeHooks = function(F) {
    et(A, F) && (A[F] = []);
  }, t.removeAllHooks = function() {
    A = Id();
  }, t;
}
var uv = fg();
function dv({ structureProtectionMode: e = "off" }) {
  const [t] = ce(), r = Z(void 0), [n, i] = de(void 0), s = ge((o) => {
    r.current = o, i(o);
  }, []);
  return z(() => {
    if (e === "off")
      return;
    const o = (h) => {
      const m = tg(h);
      if (!m)
        return !1;
      const p = w();
      return e === "protected" ? p && sg(p, m) ? (h.preventDefault(), !0) : !1 : m !== "deleteBackward" && m !== "deleteForward" ? !1 : a(m, h);
    }, a = (h, m) => {
      const p = w(), y = r.current;
      if (y && p && xd(p, y)) {
        if (s(void 0), m.preventDefault(), h !== y.intent)
          return !0;
        const C = oe(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (C) {
            const S = C.getParent(), P = C.getPreviousSibling(), E = C.getNextSibling();
            C.remove(), P ? og(P) : E && v(E) ? E.select(0, 0) : S?.selectStart();
          }
        } else y.kind === "selection" ? N(p) && p.removeText() : Te(C) && ag(C);
        return !0;
      }
      if (!p)
        return !1;
      const k = xS(p, h);
      if (k) {
        if (k.kind === "verse") {
          const C = Ec();
          C.add(k.node.getKey()), kn(C);
        } else {
          const C = Ac();
          C.anchor.set(k.node.getKey(), 0, "element"), C.focus.set(k.node.getKey(), k.node.getChildrenSize(), "element"), kn(C);
        }
        return s({ key: k.node.getKey(), kind: k.kind, intent: h }), m.preventDefault(), !0;
      }
      if (N(p) && !p.isCollapsed() && Ml(p)) {
        const C = p.getNodes().filter(pe).map((E) => E.getKey()), { anchor: S, focus: P } = p;
        return s({
          kind: "selection",
          intent: h,
          key: C[0],
          anchor: { key: S.key, offset: S.offset, type: S.type },
          focus: { key: P.key, offset: P.offset, type: P.type }
        }), m.preventDefault(), !0;
      }
      return !1;
    }, c = (h) => {
      if (e !== "protected")
        return !1;
      const m = w();
      return !m || !ni(m) ? !1 : (h instanceof Event && h.preventDefault(), !0);
    }, l = (h, m) => {
      if (!h)
        return !1;
      const p = uv.sanitize(h), y = new DOMParser().parseFromString(p, "text/html"), k = _S(ob(t, y)), C = w();
      return N(C) && C.insertNodes(k), m.preventDefault(), !0;
    }, u = (h) => {
      if (e !== "protected")
        return !1;
      const m = w();
      return m && ni(m) ? (h.preventDefault(), !0) : l(h.clipboardData?.getData("text/html"), h);
    }, d = (h) => {
      if (e !== "protected")
        return !1;
      const m = w();
      return m && ni(m) ? (h.preventDefault(), !0) : l(h.dataTransfer?.getData("text/html"), h);
    }, f = () => {
      const h = r.current;
      h && t.getEditorState().read(() => {
        xd(w(), h) || s(void 0);
      });
    };
    return Ue(
      t.registerCommand(pr, o, Oe),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(Vr, c, Qe),
      t.registerCommand(cr, u, Oe),
      t.registerCommand(Nf, c, Oe),
      t.registerCommand(yo, d, Oe),
      t.registerCommand(mo, c, Oe),
      t.registerUpdateListener(f)
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
const WP = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function fv({ textDirection: e }) {
  const [t] = ce();
  return pv(t, e), null;
}
function pv(e, t) {
  z(() => (Dd(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Dd(e, t);
  })), [e, t]);
}
function Dd(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function hv() {
  const [e] = ce();
  return gv(e), null;
}
function gv(e) {
  z(() => {
    if (!e.hasNodes([me, St, Ee, Be, pt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Ue(
      e.registerNodeTransform(Be, mv),
      e.registerNodeTransform(Be, (t) => yv(t, e)),
      e.registerNodeTransform(pt, Ud),
      e.registerNodeTransform(St, Ud),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(pt, (t) => {
        is(vn("va"), t), is(vn("vp"), t);
      })
    );
  }, [e]);
}
function mv(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || K(r) || D(n) || D(r) || _e(n) || _e(r) || De(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  De(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  ie(e, ae) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Ie(n))
    return;
  if (pe(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  pe(r) && sl(e);
}
function yv(e, t) {
  const r = e.getParent();
  !De(r) || !e.isAttached() || Ga(t, e.getKey()) && !Ga(t, r.getKey()) && r.insertAfter(e);
}
function Ud(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; _e(t); )
    t = t.getLastChild();
  (D(t) || v(t) && _e(t.getParent())) && e.insertBefore(he(" "));
}
function El(e) {
  if (!K(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !jc(n)) ? void 0 : e;
}
function bv(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (U(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function kv() {
  const e = w();
  if (!(!N(e) || !e.isCollapsed()))
    return El(bv(e.anchor));
}
function Tv(e) {
  const t = w();
  let r;
  return N(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = pg(e.target)), r ? El(ot(r, K)) : void 0;
}
function pg(e) {
  const t = Fy(e)?.anchorNode;
  if (Nc(t))
    return en(t) ?? void 0;
}
function xv(e) {
  if (w())
    return;
  const t = pg(e);
  return t ? El(ot(t, K)) : void 0;
}
function _v() {
  const [e] = ce(), t = eg(kv);
  return z(() => {
    const r = (n) => {
      Wr(Hr), t(n);
    };
    return Ue(e.registerCommand(dr, () => {
      const n = xv(e.getRootElement());
      return n && r(n), !1;
    }, xn), e.registerCommand(Hi, (n) => {
      const i = Tv(n);
      return i && r(i), !1;
    }, xn));
  }, [e, t]), null;
}
function Cv({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = q_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return _(w_, { trigger: e, items: i });
}
function Sv({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = je(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? _(Ev, { trigger: e, harness: i }) : _(Cv, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const vv = [" ", "*"];
function Mv(e, t) {
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
function Ev({ trigger: e, harness: t }) {
  const [r] = ce(), [n, i] = de(void 0), s = Z({ query: "", options: [] }), o = Z(0), a = ge((f, h, m) => {
    const p = h.find((y) => y.kind === "note" && y.marker === f);
    if (p) {
      t.apply(p, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = w();
      N(y) && y.insertText(`${e}${f}${m ? " " : ""}`);
    });
  }, [r, t, e]);
  z(() => Ue(r.registerCommand(pr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const p = s.current.query;
        return p ? (a(p, n.items, !1), zy(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = w();
          N(y) && y.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const m = s.current.query;
      if (n.hasTextSelection) {
        const p = n.items.find((y) => y.marker === m);
        return p && t.apply(p, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
      }
      return a(m, n.items, !0), !0;
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
  }, Oe), r.registerCommand(Of, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const h = t.getContext();
    return !h || h.noteMarker || h.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(h),
      session: o.current
    }), !0);
  }, ei)), [r, e, t, n, a]);
  const c = ge(() => i(void 0), []), l = ge((f, h) => {
    s.current = { query: f, options: h };
  }, []), u = ge((f) => {
    const { markerMenuItem: h, applyOpts: m } = f;
    t.apply(h, m);
  }, [t]), d = je(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    Mv(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && _(Oh, { isOpen: !0, children: ({ placement: f }) => _(
    Rh,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? vv : void 0 },
    n.session
  ) });
}
function hg(e) {
  return e.replaceAll(L, "~").replace(/ {2,}/g, (r) => L.repeat(r.length));
}
function Av(e) {
  return e.replaceAll(L, " ").replaceAll("~", L);
}
function Pv(e) {
  return e.replace(/ {2,}/g, " ");
}
let io;
function Nv(e) {
  e && (io = e);
}
function gg(e) {
  return $o(e);
}
function Ov(e, t) {
  return e.isEmpty() ? Af : mg(e.toJSON(), t);
}
function mg(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && _o(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Af;
  if (r.some(rx)) {
    io?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = yg(r), i = Wt(n, t);
  return i ? { type: Cr, version: _r, content: i } : void 0;
}
function wv(e, t) {
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
function qv(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Ae({
    type: Ot.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function Rv(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Op(r, a, c), Ae({
    type: Ot.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function $v(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Op(t, o, a), Ae({
    type: pt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function Lv(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !gg(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(L) && (t[0] = a.slice(1));
  }
  return Ae({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function Iv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Ae({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function Dv(e, t) {
  const { unknownAttributes: r } = e;
  return Ae({ type: sh, ...r, content: t });
}
function Uv(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Ae({ type: ch, marker: r, ...n, content: t });
}
function Fv(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Ae({
    type: uh,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function zv(e, t) {
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
function Zn(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Ae({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Fp({ sid: n, eid: i, ...s }, o)
  });
}
function Kv(e) {
  return e.text;
}
function jv(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Ae({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function Bv(e) {
  const { marker: t } = e;
  return {
    type: Gs,
    marker: t === "" ? void 0 : t
  };
}
function Fd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function Vv(e, t, r, n, i) {
  const s = Yt.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = Zn({
      type: s,
      marker: ti,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = Zn({
      type: s,
      marker: _n,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = Zn({
      type: s,
      marker: _n
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Zn({
      type: s,
      marker: ti
    });
    i.push(l);
  }
  (!n || !op(n)) && t.forEach((l) => {
    const u = Zn({
      type: s,
      marker: ti,
      eid: l
    });
    i.push(u);
  });
}
function Wt(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, h = a, m = a, p = a, y = a;
    switch (a.type) {
      case zt.getType():
        i.push(
          wv(
            l,
            Wt(l.children, t)
          )
        );
        break;
      case gr.getType():
        i.push(qv(a));
        break;
      case Ot.getType():
        i.push(
          Rv(
            u,
            Wt(u.children, t)
          )
        );
        break;
      case St.getType():
      case pt.getType():
        i.push($v(a));
        break;
      case me.getType():
        i.push(
          Lv(
            d,
            Wt(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case rt.getType():
        i.push(
          Iv(
            f,
            Wt(f.children, t)
          )
        );
        break;
      case $n.getType():
        i.push(
          Dv(
            a,
            Wt(a.children, t)
          )
        );
        break;
      case hi.getType():
        i.push(
          Uv(
            a,
            Wt(a.children, t)
          )
        );
        break;
      case gi.getType():
        i.push(
          Fv(
            a,
            Wt(a.children, t)
          )
        );
        break;
      case Ee.getType():
        i.push(
          zv(
            h,
            Wt(h.children, t, h.caller)
          )
        );
        break;
      case Or.getType():
      case Nr.getType():
      case Jt.getType():
      case wf.getType():
      case mr.getType():
        break;
      case tt.getType():
        if (s = Wt(
          p.children,
          t,
          r,
          n
        ), s) {
          const k = p.typedIDs[Br];
          if (k)
            Vv(s, k, o, e[c + 1], i), o = k;
          else {
            const C = s.shift();
            C && (typeof C == "string" ? Fd(i, C) : i.push(C)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Yt.getType():
        i.push(Zn(a));
        break;
      case Be.getType():
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !bs(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        m.text !== L && !m.text.startsWith(Rc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[gs]?.textType !== "attribute" && (!r || m.text !== Pt(r))) {
          let k = Kv(m);
          gg(t) && (n && k.startsWith(L) && (k = k.slice(1)), k = Pv(Av(k))), Fd(i, k);
        }
        break;
      case qn.getType():
        i.push(
          jv(
            y,
            Wt(y.children, t)
          )
        );
        break;
      case Rr.getType():
        i.push(Bv(a));
        break;
      case mi.getType():
        io?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        io?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function yg(e) {
  const t = e.findIndex((r) => _o(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = yg(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Ls = {
  initialize: Nv,
  deserializeEditorState: Ov
}, Wv = /^sd\d*$/, Hv = /* @__PURE__ */ new Set([
  ...Object.entries(Ra).filter(
    ([e, t]) => t.category === T.TitlesHeadings && t.type === b.Paragraph && !Wv.test(e)
  ).map(([e]) => e),
  "qa"
]);
function Gv(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (pp(i) || Ep(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!Ak(i)) {
      t && so(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Kc(i) && Hv.has(i.marker) && !so(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    bg(i.children, t).forEach((s) => {
      const o = Jv(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = Yv(s.verse), r.push(n), o && n.children.push(o);
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
    if (op(i)) {
      const s = bg(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(zd(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [zd(i, c.nodes)] });
      });
      return;
    }
    t && so(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function zd(e, t) {
  return { ...e, children: t };
}
function kg(e) {
  return Th(e) && e.number !== "";
}
function so(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => kg(r) || so(r)) : !1;
}
function Jv(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function Yv(e) {
  return {
    type: Js,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: yh
  };
}
const Kd = xg([]), Xv = {
  type: wf.getType(),
  version: 1
};
let Al = [], te, An, Tg, Ct;
function Qv(e, t) {
  Al = [], tM(e), rM(t);
}
function Zv(e = 0) {
}
function eM(e, t) {
  te = t ?? Ro();
  let r;
  return e ? (e.type !== Cr && Ct?.warn(`This USJ type '${e.type}' didn't match the expected type '${Cr}'.`), e.version !== _r && Ct?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${_r}'.`
  ), e.content.length > 0 ? (r = ac(zr(e.content)), as(te) && (r = Gv(r, Ct))) : r = [Kd]) : r = [Kd], Tg?.(Al), {
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
function tM(e) {
  e && (An = e), e?.addMissingComments && (Tg = e.addMissingComments);
}
function rM(e) {
  e && (Ct = e);
}
function Pl() {
  return $o(te);
}
function nM(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function iM(e) {
  let { marker: t } = e;
  t !== Qi && Ct?.warn(`Unexpected book marker '${t}'!`), t = t ?? Qi;
  const { code: r } = e;
  (!r || !zt.isValidBookCode(r)) && Ct?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  te?.markerMode === "editable" || te?.markerMode === "visible" ? n.push(
    xt("marker", qe(t) + " " + r + L)
  ) : te?.hasGutterParaMarkers && n.push(xt("marker", qe(t) + L, !0));
  const i = nM(e.content);
  i && n.push(ut(Pl() ? hg(i) : i));
  const s = Fe(e, ak);
  return Ae({
    type: zt.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: dp
  });
}
function sM(e) {
  let { marker: t } = e;
  t !== Vs && Ct?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Vs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Fe(e, ck);
  let a;
  te?.markerMode === "visible" && (a = !0);
  const c = [
    ut(Ut(t, r) ?? "")
  ];
  return te?.markerMode === "editable" && _M(i, s, c), te?.markerMode === "editable" ? Ae({
    type: Ot.getType(),
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
    version: hp
  }) : Ae({
    type: gr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: kp
  });
}
function oM(e) {
  let { marker: t } = e;
  t !== Ws && Ct?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Ws;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (K_(te) ?? St).getType(), c = te?.markerMode === "editable" ? Sp : kh;
  let l, u;
  te?.markerMode === "editable" ? l = Ut(t, r) : te?.markerMode === "visible" && (u = !0);
  const d = Fe(e, xk);
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
function aM(e, t = [], r = !1) {
  let { marker: n } = e;
  me.isValidMarker(n, An?.extraValidMarkers) || Ct?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (te?.markerMode === "editable") {
    const [a] = t;
    si(a) ? a.text = L + a.text : a && t.unshift(ut(L));
  }
  t.length === 0 && t.push(ut(Ft)), ic(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Fe(e, dk);
  return s || bM(n, o, i), s || sc(e.marker ?? "", i, !1, r), Ae({
    type: me.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: bp
  });
}
function xg(e) {
  return {
    type: Jr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: _p
  };
}
function cM(e, t = []) {
  let { marker: r } = e;
  rt.isValidMarker(r, An?.extraValidMarkers) || Ct?.warn(`Unexpected para marker '${r}'!`), r = r ?? lr;
  const n = [];
  if (yi(te) && (te?.markerMode === "editable" ? n.push(
    ht(r),
    ut(L, hr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && n.push(
    xt(
      "marker",
      qe(r) + L,
      te?.hasGutterParaMarkers
    )
  )), n.push(...t), Pl()) {
    const s = n.find(
      (o) => !Gc(o) && !(si(o) && o.text === L)
    );
    si(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => L.repeat(o.length)));
  }
  const i = Fe(e, kk);
  return Ae({
    type: rt.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Cp
  });
}
function Nl() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function lM(e, t = []) {
  const r = Fe(e, ST);
  return Ae({
    ...Nl(),
    type: $n.getType(),
    unknownAttributes: r,
    children: t,
    version: oh
  });
}
function uM(e, t = []) {
  const r = Fe(e, ET), n = e.marker ?? ja, i = [];
  return te?.markerMode === "editable" ? i.push(
    ht(n),
    ut(L, hr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && i.push(
    xt(
      "marker",
      qe(n) + L,
      te?.hasGutterParaMarkers
    )
  ), i.push(...t), Ae({
    ...Nl(),
    type: hi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: lh
  });
}
function dM(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Ba, a = Qp(o, i) ?? o;
  te?.markerMode === "editable" ? s.push(
    ht(a),
    ut(L, hr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && s.push(
    xt(
      "marker",
      qe(a) + L,
      te?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = Fe(
    e,
    PT
  );
  return Ae({
    ...Nl(),
    type: gi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: dh
  });
}
function fM(e, t) {
  const r = Rk(t);
  let n = () => {
  };
  return An?.noteCallerOnClick && (n = An.noteCallerOnClick), Ae({
    type: Jt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Eh
  });
}
function pM(e, t) {
  let { marker: r } = e;
  Ee.isValidMarker(r, An?.extraValidMarkers) || Ct?.warn(`Unexpected note marker '${r}'!`), r = r ?? Lc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : fl(te?.noteMode), a = Fe(e, vb), c = te?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  te?.markerMode === "editable" ? (l = ht(r, "opening", !1, c), s || (u = ht(r, "closing"))) : te?.markerMode === "visible" && (l = xt("marker", qe(r) + " "), s || (u = xt("marker", st(r))));
  const d = [];
  let f;
  if (l && d.push(l), te?.markerMode === "editable" && !o)
    f = ut(Pt(i), void 0, c), d.push(f), xM(n, d), d.push(...t);
  else {
    const h = ut(L, hr, "token");
    f = fM(i, t), d.push(f, h, ...t.flatMap(hM(h)));
  }
  return u && d.push(u), Ae({
    type: Ee.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: d,
    direction: null,
    format: "",
    indent: 0,
    version: Qf
  });
}
function hM(e) {
  return (t) => ip(t) ? [t] : [t, e];
}
function gM(e) {
  let { marker: t } = e;
  (!t || !Yt.isValidMarker(t, An?.extraValidMarkers)) && Ct?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Fe(e, $c), s = zp(e);
  return Ae({
    type: Yt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: Jf
  });
}
function jd(e, t = []) {
  return {
    type: tt.getType(),
    typedIDs: { [Br]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function mM(e, t) {
  const { marker: r } = e, n = e.type, i = Fe(e, rk), s = [];
  if (te?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = Zp(
      n,
      r,
      i
    );
    o && s.push(xt("marker", o)), a && s.push(xt("attribute", a)), s.push(...t), c && s.push(xt("attribute", c)), l && s.push(xt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    si(o) && (o.mode = "token");
  }), Ae({
    type: qn.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: cp
  });
}
function yM(e) {
  return {
    type: Rr.getType(),
    marker: e,
    text: Ki(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: te?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: nh
  };
}
function ht(e, t = "opening", r = !1, n = "normal") {
  return {
    type: mr.getType(),
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
    type: Be.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[gs] = { textType: t }), n;
}
function xt(e, t, r = !1) {
  const n = {
    type: Nr.getType(),
    text: t,
    textType: e,
    version: np
  };
  return r && (n[gs] = { [Uc.key]: !0 }), n;
}
function cs(e, t) {
  return {
    type: Or.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: lp
  };
}
function ic(e, t, r = !1) {
  te?.markerMode === "editable" ? t.push(ht(e, "opening", r)) : te?.markerMode === "visible" && t.push(xt("marker", qe(e, r)));
}
function sc(e, t, r = !1, n = !1) {
  te?.markerMode === "editable" ? r ? t.push(ht("", "selfClosing")) : t.push(ht(e, "closing", n)) : te?.markerMode === "visible" && t.push(
    xt(
      "marker",
      r ? st("") : st(e, n)
    )
  );
}
function bM(e, t, r) {
  if (te?.markerMode !== "editable" || !t) return;
  const n = ar(t, ko(e));
  n && r.push(ut(n, "attribute"));
}
function Bd(e, t) {
  if (e.type !== "ms" || te?.markerMode !== "editable" && te?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Fe(e, $c), o = Kp(
    n,
    i,
    s,
    zp(e)
  ), a = ar(o, To(r ?? ""));
  if (!a) return;
  const c = L + a;
  te?.markerMode === "editable" ? t.push(ut(c, "attribute")) : t.push(xt("attribute", c));
}
function kM(e, t) {
  const r = e.marker ?? "";
  if (te?.markerMode === "editable") {
    const n = [];
    ic(r, n), Bd(e, n), sc(r, n, !0), t.push(cs("milestone", n));
  } else
    ic(r, t), Bd(e, t), sc(r, t, !0);
}
function Vd(e, t, r) {
  t !== void 0 && r.push(
    cs(e, [
      ht(e, "opening"),
      ut(L + t, "attribute"),
      ht(e, "closing")
    ])
  );
}
function TM(e, t) {
  te?.markerMode === "editable" && (Vd("va", e.altnumber, t), Vd("vp", e.pubnumber, t));
}
function xM(e, t) {
  e !== void 0 && t.push(
    cs("cat", [
      ht("cat", "opening"),
      ut(L + e, "attribute"),
      ht("cat", "closing")
    ])
  );
}
function _M(e, t, r) {
  e !== void 0 && r.push(
    cs("ca", [
      ht("ca", "opening"),
      ut(L + e, "attribute"),
      ht("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    cs("cp", [
      ht("cp", "opening"),
      ut(L + t, "attribute")
    ])
  );
}
function Wd(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function CM(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function Hd(e, t) {
  t.marker === _n && t.sid !== void 0 && e.push(t.sid), t.marker === ti && t.eid !== void 0 && CM(e, t.eid);
}
function oc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [jd(o, [...n])] : o, c = e[i];
  Hd(n, c);
  const l = oc(
    e.slice(i + 1, s),
    Wd(t, i + 1),
    c.marker === _n,
    n
  ), u = jd(l, [...n]), d = e[s];
  Hd(n, d);
  const f = oc(
    e.slice(s + 1),
    Wd(t, s + 1),
    d.marker === _n,
    n
  );
  return [...a, u, ...f];
}
function zr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(ut(Pl() ? hg(i) : i));
    else if (!i.type)
      Ct?.error("Marker type is missing!");
    else
      switch (i.type) {
        case zt.getType():
          n.push(iM(i));
          break;
        case Ot.getType():
          n.push(sM(i));
          break;
        case pt.getType():
          te?.hasSpacing || n.push(Xv), n.push(oM(i)), TM(i, n);
          break;
        case me.getType():
          n.push(
            aM(i, zr(i.content, !0), t)
          );
          break;
        case rt.getType():
          n.push(cM(i, zr(i.content)));
          break;
        case Ee.getType():
          n.push(pM(i, zr(i.content)));
          break;
        case Yt.getType():
          Yf(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Al?.push(i.sid)), n.push(gM(i)), kM(i, n);
          break;
        case Rr.getType():
          n.push(yM(i.marker ?? ""));
          break;
        case sh:
          n.push(lM(i, zr(i.content)));
          break;
        case ch:
          n.push(uM(i, zr(i.content)));
          break;
        case uh:
          n.push(dM(i, zr(i.content)));
          break;
        default:
          Ct?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(mM(i, zr(i.content)));
      }
  }), oc(n, r);
}
function ac(e) {
  const t = e.findIndex(
    (n) => pp(n) || Ep(n) || Kc(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    MT(n)
  );
  if (t >= 0) {
    const n = ac(e.slice(0, t)), i = e[t], s = ac(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Th(n)))
    return [xg(e)];
  return e;
}
const Er = {
  initialize: Qv,
  reset: Zv,
  serializeEditorState: eM
};
function _g(e) {
  if (e && !O(e)) {
    if (v(e)) return e;
    if (U(e))
      for (const t of e.getChildren()) {
        const r = _g(t);
        if (r) return r;
      }
  }
}
function SM() {
  const e = w();
  if (!N(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((v(t) && !O(t) ? En(t) : void 0) && v(t)) {
      const i = he(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      oi(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = _g(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(L) ? L : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return v(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Cg(e)) {
    if (!En(t)) continue;
    oi(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(L) && r.setTextContent(n.slice(L.length));
  }
  return !0;
}
function Cg(e) {
  const [t, r] = Pc(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!v(a) || O(a) || ie(a, ae) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), h = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    h && o.push(h);
  }), o;
}
function vM() {
  const e = w();
  if (!N(e)) return !1;
  const t = e.focus.getNode();
  return En(t) ? Te(el(t)) : !1;
}
function Sg() {
  let e = w();
  if (!N(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (O(t) && !nl(t, e.anchor.offset)) {
    const c = t.getParent();
    if (D(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = w(), !N(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!v(t) || O(t) || !En(t)) return !1;
  const r = el(t);
  if (!Te(r)) return !1;
  const n = he(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  oi(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return D(a) ? tl(a) : o.select(0, 0), !0;
}
const vg = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Ap(ze().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = w(), t = Vc(e), r = al(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Ik(0, o);
        const a = gx(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Lp(c) && Wc(parseInt(n, 10), c);
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
function cc(e, t) {
  return Ee.isValidMarker(e, t) || !!vg[e] || rt.isValidMarker(e, t) || me.isValidMarker(e, t);
}
function MM(e, t) {
  return me.isNoteContentMarker(e) ? !1 : me.isValidMarker(e, t);
}
function Mg(e, t, r, n, i, s) {
  const o = Ph(
    e,
    void 0,
    void 0,
    t,
    n ?? Ro(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function lc(e, t, r, n, i, s, o) {
  if (Ee.isValidMarker(e, n?.extraValidMarkers)) {
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
  const a = wM(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = w();
      N(u) && (mh(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), h = Gu(d, Er, r), m = ta(h);
      if (N(u)) {
        const p = u.anchor.getNode(), y = p.getParent(), k = En(p), C = u.anchor.key === u.focus.key;
        if (D(m) && k && C && !Sa(m, o))
          PM(
            u,
            m,
            p,
            r?.markerMode === "editable"
          );
        else if (D(m) && !C && !Sa(m, o) && NM(u))
          OM(u, m, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          qM(
            u,
            () => ta(h)
          );
        else if (U(m) && !m.isInline()) {
          const S = u.insertParagraph();
          if (S) {
            const P = S.getChildren();
            m.append(...P), S.replace(m), Te(m) && ki(m) || m.selectStart();
          }
        } else if (D(m) && v(p) && !O(p) && D(p.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        Sa(m, o)) {
          const S = p.getParent();
          if (D(S)) {
            const P = u.anchor.offset;
            if (P === 0) p.insertBefore(m);
            else if (P >= p.getTextContentSize()) p.insertAfter(m);
            else {
              const [j] = p.splitText(P);
              j.insertAfter(m);
            }
            m.getChildren().forEach((j) => {
              O(j) && j.setNested(!0);
            });
            const E = m.getChildren().find((j) => v(j) && !O(j));
            E && v(E) ? E.select(
              E.getTextContentSize(),
              E.getTextContentSize()
            ) : m.selectEnd();
          }
        } else if (v(p) && !O(p) && u.isCollapsed() && (K(y) || D(y) && K(y.getParent()))) {
          const S = D(y) ? y : void 0, P = S ? EM(p, u.anchor.offset) : [];
          let j = (S ?? p).insertAfter(m);
          if (wr(m)) {
            const M = {
              ...r || Ro(),
              markerMode: "hidden"
            }, R = Gu(
              d,
              Er,
              M
            ), $ = ta(R);
            j = j.insertAfter($);
          }
          if (P.length > 0 && S) {
            const M = oo(S).append(...P);
            j.insertAfter(M), S.isEmpty() && S.remove();
          } else v(j.getNextSibling()) || j.insertAfter(he(L));
          U(j) && j.selectEnd();
        } else if (u.insertNodes([m]), jM(m), f) {
          const S = Ec();
          S.add(m.getKey()), kn(S);
        } else if (D(m)) {
          const S = m.getChildren().find((P) => v(P) && !O(P));
          S && v(S) ? S.select(
            S.getTextContentSize(),
            S.getTextContentSize()
          ) : m.selectEnd();
        } else {
          const S = m.getNextSibling();
          S ? S.selectStart() : m.selectStart();
        }
      } else
        u?.insertNodes([m]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function EM(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function Sa(e, t) {
  return ((t ?? Ys).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function AM(e, t) {
  t && e.getChildren().forEach((i) => {
    O(i) && i.setNested(!0);
  }), e.getChildren().some((i) => O(i) && i.getMarkerSyntax() === "closing") || e.append(lt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function PM(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && D(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !v(r)) {
    const o = e.anchor.offset;
    if (v(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else v(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = ui(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (oi(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), v(i) && !i.getTextContent().startsWith(L) && i.setTextContent(L + i.getTextContent());
    const o = t.getChildren().find((a) => v(a) && !O(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => v(o) && !O(o));
  v(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function NM(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (O(n) || D(n)) continue;
    if (!v(n) || n.getType() !== Be.getType() || ie(n, ae) === "attribute") return !1;
    const i = el(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    En(n) && (r = !0);
  }
  return r;
}
function OM(e, t, r) {
  const n = Cg(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!En(a)) return;
    oi(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(L) && c.setTextContent(l.slice(L.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(L) || i.setTextContent(L + i.getTextContent());
  const s = t.getChildren().find((a) => v(a) && !O(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function wM(e, t) {
  let r = vg[e];
  return r || (rt.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: rt.getType(), marker: e, content: [] }] })
  } : me.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: me.getType(), marker: e };
      return (me.isValidFootnoteMarker(e) || me.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function qM(e, t) {
  const r = e.getNodes(), [n, i] = ui(e);
  let s;
  r.forEach((o, a) => {
    if (U(s) && s.isParentOf(o))
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
    s || (s = t(), c.insertBefore(s), l = !0, D(s) && s.getChildren().some((d) => O(d) && d.getMarkerSyntax() === "opening") && AM(s, D(s.getParent()))), $M(c, s, l);
  }), (v(s) || U(s)) && s.selectEnd();
}
function ui(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Ol(e) {
  return _e(e) || K(e) || K(e.getParent());
}
function Eg(e, t, r, n, i) {
  if (!Ol(e)) {
    if (v(e))
      return RM(e, t, r, n, i);
    if (U(e) && e.isInline())
      return e;
  }
}
function RM(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function $M(e, t, r) {
  if (v(t)) {
    const n = uc(e, t);
    t.setTextContent(n), e.remove();
  } else if (U(t)) {
    const n = t.getChildren(), i = n.find(
      (s) => O(s) && s.getMarkerSyntax() !== "opening"
    );
    if (i)
      i.insertBefore(e), r && n.filter((s) => !O(s)).forEach((s) => s.remove());
    else if (r) {
      const s = t.getChildrenSize();
      t.append(e);
      for (let o = 0; o < s; o++) t.getFirstChild()?.remove();
    } else
      t.append(e);
    uc(e, t), r && D(t) && t.getChildren().some((s) => O(s)) && v(e) && !O(e) && !e.getTextContent().startsWith(L) && e.setTextContent(L + e.getTextContent());
  }
}
function uc(e, t) {
  let r = e.getTextContent();
  if (v(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    sl(n), v(n) || t.insertBefore(he(" "));
  }
  return r;
}
function Ag(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = Pn(u, t);
    if (!f) return !1;
    const h = v(u) ? u.getTextContentSize() : 0;
    if (Gd(f, r), v(u) && u.isAttached()) {
      const m = u.getTextContentSize(), p = Math.max(h - m, 0), y = Math.max(0, Math.min(d - p, m)), k = w();
      N(k) && k.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = ui(e);
  if (!ql(n, t, s, o)) return !1;
  const a = wl(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = Pn(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = wg(d, a);
    f && (Gd(f, r), l = !0);
  }), qg(a, i), l;
}
function Gd(e, t) {
  e.getChildren().forEach((n) => {
    Kt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === Ft) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    v(n) && i.startsWith(L) && n.setTextContent(i.slice(L.length));
  }), Oa(e);
}
function wl(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Eg(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    v(o) && n.push(o);
  }), n;
}
function Pn(e, t) {
  let r = e, n;
  for (; r && !Te(r); ) {
    if (K(r)) return;
    !n && D(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Pg(e) {
  const t = ot(
    e,
    (r) => K(r) || Te(r)
  );
  return K(t);
}
function Ng(e) {
  return e.filter(
    (t) => !Ol(t) && (v(t) || U(t) && t.isInline())
  );
}
function LM(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!v(i) || Ol(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function IM(e, t, r) {
  return e.getChildren().some(
    (n) => U(n) && t.some((i) => n.isParentOf(i)) && !Og(n, r)
  );
}
function ql(e, t, r, n, i) {
  const s = Ng(e), o = LM(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Pn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !IM(l, s, o);
  });
}
function Og(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Kt(r));
}
function wg(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (U(u) && t.some((d) => u.isParentOf(d))) {
      if (!Og(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Kt(n[s - 1]) && (s -= 1), o < n.length - 1 && Kt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(oo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(oo(e).append(...c)), e;
}
function oo(e) {
  return Ky(e);
}
function qg(e, t) {
  const r = w(), n = e[0], i = e[e.length - 1];
  if (!N(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function DM(e, t, r) {
  if (e.isCollapsed()) {
    const l = Pn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (qu(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = ui(e);
  if (!ql(n, r, i, s, t)) return !1;
  const o = wl(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = Pn(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = wg(u, o);
    d && (qu(d, t), c = !0);
  }), c;
}
function UM(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = ui(e);
  if (!!!i?.some(
    (y) => ql(s, y, o, a)
  ) && !FM(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const k = w();
    N(k) && Ag(k, y, n) && (l = !0);
  });
  const u = w();
  if (!N(u)) return l;
  const d = u.isBackward(), [f, h] = ui(u), m = wl(
    u.getNodes(),
    f,
    h
  );
  if (m.length === 0) return l;
  const p = m.filter(
    (y) => !Pg(y) && !Pn(y, t)
  );
  return p.length > 0 && (zM(p).forEach((y) => KM(y, t)), l = !0), qg(m, d), l;
}
function FM(e, t) {
  return Ng(e).some(
    (r) => !Pg(r) && !Pn(r, t)
  );
}
function zM(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function KM(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => D(a) && a.getMarker() === t
  ), s = i ? oo(i) : vr(t);
  e[0].insertBefore(s), s.append(...e), i === r || uc(e[0], s);
}
function jM(e) {
  pe(e) && (sl(e.getPreviousSibling()), _h(e.getNextSibling()));
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
}, Jd = "psc-active-text", Os = "psc-empty-text";
function BM({ viewOptions: e }) {
  const [t] = ce(), r = Z(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return z(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(Jd), r.current = o, o && t.getElementByKey(o)?.classList.add(Jd);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        Hi,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Os}`);
          if (!c) return !1;
          const l = en(c);
          if (!pe(l)) return !1;
          const u = l.getParent();
          if (!U(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        ft
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = va(), f = VM(), h = [], m = [];
          return ze().getChildren().forEach((p) => {
            if (!U(p)) return;
            const { emptyKeys: y, nonEmptyKeys: k } = HM(p);
            h.push(...y), m.push(...k);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: h, nonEmptyKeys: m };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(Os) : t.getElementByKey(d)?.classList.add(Os);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(Os));
      }),
      t.registerCommand(
        Oc,
        () => (i(void 0), !1),
        ft
      ),
      t.registerCommand(
        jy,
        () => {
          const o = t.getEditorState().read(va);
          return o !== r.current && i(o), !1;
        },
        ft
      )
    ];
    return i(t.getEditorState().read(va)), Ue(...s);
  }, [t, n]), null;
}
function va() {
  return WM(w() ?? void 0)?.getKey();
}
function VM() {
  const e = w(), t = It(e)?.getParent();
  if (ne(t))
    return t.getChildren().slice(0, Vh(t)).findLast(pe)?.getKey();
  if (!N(e)) return;
  const r = e.anchor, n = r.getNode(), i = n.getTopLevelElement();
  if (!U(i)) return;
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
    pe(o[c]) && (a = o[c].getKey());
  return a;
}
function WM(e) {
  const t = It(e ?? null);
  if (t) {
    const r = t.getTopLevelElement();
    return U(r) ? r : void 0;
  }
  if (N(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function HM(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!pe(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (pe(c)) break;
      if (!(Xt(c) || O(c)) && c.getTextContent().replaceAll(zs, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const GM = /^\+/;
function Rl(e, t) {
  const r = t.replace(GM, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function $g(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Lg(e, t) {
  return $g(e, t) !== void 0;
}
function dc(e, t) {
  const r = $g(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function ao(e, t, r) {
  const n = U(e) ? e.getChildren().filter(O) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function JM(e, t, r, n, i) {
  const s = Rl(n, t);
  if (!s) {
    ao(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && ao(e, "invalid", i);
}
function Bi(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (D(s)) {
      const o = s.getMarker();
      i || JM(s, o, t, r, n), Bi(s, t, r, n, i || o === "xq");
    } else if (pe(s)) {
      if (i) continue;
      const o = Rl(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else K(s) ? Bi(s, s.getMarker(), r, n, i) : De(s) || U(s) && Bi(s, t, r, n, i);
}
function YM(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Rl(e, a);
    if (!c) {
      ao(o, "unknown", r), dc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    dc(n, l) || ao(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of ze().getChildren())
    De(o) || (gt(o) || Je(o) ? i(o, o.getMarker()) : ne(o) ? (i(o, o.getMarker()), s(o) && Bi(o, o.getMarker(), e, r, !1)) : U(o) && s(o) && Bi(o, "p", e, r, !1));
  return r;
}
function XM(e) {
  return !!e?.includes("(basic)");
}
function QM(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Ig(e, t) {
  return !e.startsWith("zpa") && e !== "c" && cc(e, t);
}
function $l(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Dg(e, t) {
  const r = [];
  for (const n of t) {
    const i = $l(e, n);
    i && dc(r, i);
  }
  return r;
}
function Is(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: QM(e.description),
    isBasic: XM(e.description)
  };
}
function ZM(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function fc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : ZM(e.marker, t.marker);
}
function pc(e, t, r) {
  if (t.noteMarker) return [];
  const n = Dg(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Ig(i.marker, r)
  ).filter((i) => {
    const s = $l(e, i.marker);
    return s !== void 0 && Lg(n, s);
  }).map((i) => Is(i, "paragraph")).sort(fc);
}
function eE(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Ig(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Is(c, "character")).sort(fc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Is(c, "character")),
    ...a.map((c) => Is(c, "note"))
  ].sort(fc);
}
function tE(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function rE(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function nE(e, t, r) {
  return [
    ...tE(e, t.openCharMarkers),
    ...eE(e, t, r)
  ].sort(rE);
}
function iE(e, t, r) {
  if (t.source === "paragraph") return pc(e, t, r);
  const n = nE(e, t, r);
  return n.length > 0 ? n : pc(e, t, r);
}
function sE(e, t, r) {
  const n = pc(e, t, r), i = Dg(e, t.previousParaMarkers), s = $l(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Lg(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const er = String.raw`\w-`, Ug = "a-z0-9", oE = `[a-z][${Ug}]*`, aE = new RegExp(
  String.raw`^\\(\+?[${er}]+)[ \u00A0]$`
), Fg = new RegExp(String.raw`^\\(\+?[${er}]+)$`), cE = new RegExp(String.raw`^\\\+?[${er}]*\*$`), lE = new RegExp(
  String.raw`^\\(\+?[${er}]+)(?:[ \u00A0]|$)`
), uE = new RegExp(
  String.raw`^\\(\+?)([${er}]+)`
), dE = new RegExp(
  String.raw`\\\+?[${er}]+(?:\\?\*|[ \u00A0])`
), fE = new RegExp(
  String.raw`\\\+?[${er}]*$`
), pE = new RegExp(
  String.raw`^\\(${oE})( |$)`
), hE = new RegExp(
  String.raw`\\[${Ug}+*]*$`,
  "i"
), it = "￼";
function zg(e) {
  return e.length > 1 && e.startsWith(L) && e.charAt(1) !== it ? e.slice(1) : e;
}
function Yd(e) {
  return Gc(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Kg(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = Er.serializeEditorState(
    {
      type: Cr,
      version: _r,
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
  for (; Yd(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Pt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Yd(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function ws(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Ri(e, t) {
  fE.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += it;
}
function Dt(e) {
  return e.replaceAll(L, " ");
}
function gE(e, t, r = !1) {
  if ($o(t)) return Dt(e);
  if (e === L) return " ";
  const n = r && e.startsWith(L), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(L, "~");
}
function Vi(e) {
  const t = e.getTextContent();
  return Rn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Ll(e, t) {
  const r = e[t];
  if (!He(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Mo(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!O(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function jg(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Il(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = es(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function Dl(e) {
  return !!e.getUnknownAttributes();
}
function Uo(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && Dc(e);
}
function Bg(e, t) {
  return He(e) ? !Uo(e.getMarker(), t) : K(e) || De(e) ? !0 : we(e) ? Dl(e) : D(e) ? Vg(e, t) : !1;
}
function Vg(e, t) {
  if (Hk(e)) return !0;
  const r = e.getMarker();
  return !$b(r) && t(r) === void 0;
}
const $t = "", Lt = "";
function Xd(e) {
  return e.flatMap((t) => Ie(t) ? t.getChildren() : [t]);
}
function Ui(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (He(s)) {
      const o = Ll(e, i);
      Uo(s.getMarker(), r) && jg(o) ? (t.push(
        $t,
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
      ), Ui(Xd(o), t, r), t.push(Lt)) : t.push(it), i += o.length;
    } else if (we(s)) {
      const o = Il(e, i);
      Dl(s) ? t.push(it) : (t.push(
        $t,
        "verse",
        Dt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Ui(Xd(o), t, r), t.push(Lt)), i += o.length;
    } else O(s) ? t.push($t, "marker", Dt(s.getTextContent()), Lt) : rn(s) ? t.push($t, "unmatched", Dt(s.getTextContent()), Lt) : Bg(s, r) ? t.push(it) : hs(s) ? t.push(" ") : v(s) ? t.push(
      Dt(
        n ? zg(Vi(s)) : Vi(s)
      )
    ) : D(s) ? (t.push($t, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Ui(s.getChildren(), t, r, !0), t.push(Lt)) : U(s) ? (t.push($t, s.getType()), Ui(s.getChildren(), t, r), t.push(Lt)) : t.push(it);
  }
}
function Ti(e, t) {
  const r = [];
  return Ui(e, r, t), r.join("");
}
function Ar(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function di(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Ul(e) {
  return e.type ?? "";
}
function Wg(e, t, r) {
  return t === "closing" ? st(e, r) : t === "selfClosing" ? st("") : qe(e, r);
}
function Ma(e, t) {
  const r = e[t];
  if (!(!r || Ul(r) !== "attribute-run"))
    return Ar(r) ?? [];
}
function xi(e, t) {
  const r = [];
  return Fi(e, r, t), r.join("");
}
function Fi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Ul(s);
    if (o === "ms") {
      const l = s, u = Ma(e, i + 1);
      u && Uo(l.marker ?? "", r) ? (t.push(
        $t,
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
      ), Fi(u, t, r), t.push(Lt), i += 1) : t.push(it);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(it);
        continue;
      }
      t.push(
        $t,
        "verse",
        Dt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = Ma(e, i + 1 + u);
      for (; d; )
        Fi(d, t, r), u++, d = Ma(e, i + 1 + u);
      t.push(Lt), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        $t,
        "marker",
        Dt(
          Wg(l.marker ?? "", l.markerSyntax, l.nested)
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
      t.push($t, "char", JSON.stringify(l.unknownAttributes ?? null)), Fi(Ar(s) ?? [], t, r, !0), t.push(Lt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(it);
      continue;
    }
    if (o === "unmatched") {
      t.push($t, "unmatched", Dt(di(s) ?? "")), t.push(Lt);
      continue;
    }
    const a = di(s);
    if (a !== void 0) {
      t.push(Dt(n ? zg(a) : a));
      continue;
    }
    const c = Ar(s);
    c ? (t.push($t, o), Fi(c, t, r), t.push(Lt)) : t.push(it);
  }
}
function Fo(e) {
  let t = 0;
  for (const r of e) {
    const n = Ar(r);
    if (n) {
      t += Fo(n);
      continue;
    }
    const i = di(r);
    if (i !== void 0)
      for (const s of i) s === it && t++;
  }
  return t;
}
function ls(e, t, r, n, i) {
  Nn(e.getChildren(), t, r, n, i);
}
function Nn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (O(a))
      ws(t, a, Dt(a.getTextContent()));
    else if (He(a)) {
      s();
      const c = Ll(e, o);
      Uo(a.getMarker(), r) && jg(c) ? Nn(c, t, r, n) : Ri(t, [a, ...c]), o += c.length;
    } else if (K(a) || De(a))
      s(), Ri(t, [a]);
    else if (we(a)) {
      s();
      const c = Il(e, o);
      Dl(a) ? Ri(t, [a, ...c]) : (ws(t, a, Dt(Vi(a))), Nn(c, t, r, n)), o += c.length;
    } else if (D(a))
      s(), Vg(a, r) ? Ri(t, [a]) : ls(a, t, r, n, { pending: !0 });
    else if (hs(a))
      s(), ws(t, a, " ");
    else if (v(a)) {
      const c = Rn(a) || ie(a, ae) === "attribute", l = s() && !c;
      ws(
        t,
        a,
        c ? Dt(Vi(a)) : gE(Vi(a), n, l)
      );
    } else U(a) ? ls(a, t, r, n, i) : (s(), Ri(t, [a]));
  }
}
function Fl(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (De(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return ls(e, i, t, r), i;
}
function Hg(e, t) {
  let r = 0;
  const n = (i) => {
    if (v(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(it);
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
    } else U(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function hc(e, t = []) {
  for (const r of e)
    we(r) ? t.push(r) : U(r) && hc(r.getChildren(), t);
  return t;
}
function Gg(e) {
  let t = 0;
  const r = (n) => {
    if (v(n))
      for (const i of n.getTextContent()) i === it && t++;
    else U(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function In(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === it && t++;
    else r.content && (t += In(r.content));
  return t;
}
function mE(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), U(i) && ls(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const us = /\s/;
function Jg(e) {
  return e.filter(zo).length;
}
function zo(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return v(t) && !O(t) && ie(t, ae) === "attribute";
}
function yE(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return O(t) || zo(e);
}
function Qd(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && zo(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      us.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function zl(e, t, r) {
  const n = Qd(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !yE(i) ? Qd(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: Jg(e.spans) };
}
function Ea(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return O(t) && t.getMarkerSyntax() !== "opening";
}
function bE(e) {
  const t = oe(e.key);
  if (!O(t)) return !1;
  const r = t.getParent();
  return D(r) ? (r.selectNext(0, 0), !0) : !1;
}
function kE(e) {
  const t = oe(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = we(t) ? Il(r, n) : He(t) ? Ll(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function Yg(e, t, r) {
  const { text: n, spans: i } = e, s = Jg(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, h = !d.isSentinel && !Ea(d);
    if (!(o && zo(d))) {
      if (u) {
        if (!h) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let m = 0; m < f; m++) {
        const p = n[d.start + m];
        if (c === 0 && (l === 0 || !us.test(p))) {
          if (h) {
            a = { key: d.key, offset: m };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? us.test(p) || c-- : l--;
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
    if (d && Ea(d) && bE(d) || d?.isSentinel && kE(d)) return;
    const f = [...i].reverse().find((h) => !h.isSentinel && !Ea(h));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = oe(a.key);
    if (d && v(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find(U)?.selectStart();
}
function Xg(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(U)?.selectStart();
      return;
    }
    Yg(mE(e, n, i), t, e);
  }
}
function TE(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(U)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  Nn(e, s, n, i), Yg({ text: s.text, spans: s.spans }, t, e);
}
function Qg(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  for (const p of e) {
    const y = Fl(p, n, r);
    if (!y)
      return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
    s.text.length > 0 && (s.text += " ");
    const k = s.text.length;
    y.spans.forEach(
      (C) => s.spans.push({ ...C, start: C.start + k, end: C.end + k })
    ), s.sentinels.push(...y.sentinels), s.text += y.text;
  }
  let o, a = !1;
  const c = w();
  if (N(c)) {
    for (let p = c.anchor.getNode(); p; p = p.getParent())
      if (e.some((y) => y.is(p))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = zl(s, c.anchor.key, c.anchor.offset));
  }
  const l = Pr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (In(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = Er.serializeEditorState(
    { type: Cr, version: _r, content: l },
    r
  );
  if (xi(u.root.children, n) === Ti(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((p) => po(p));
  if (Gg(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = hc(e).map((p) => ({
    number: p.getNumber(),
    sid: p.getSid()
  })), h = e[0];
  d.forEach((p) => h.insertBefore(p)), Hg(d, s.sentinels), e.forEach((p) => p.remove());
  const m = hc(d);
  for (let p = 0; p < f.length && p < m.length; p++)
    m[p].getNumber() === f[p].number && m[p].setSid(f[p].sid);
  return Xg(d, o, a, n, r), !0;
}
function Zg(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Ee.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!O(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(vt(s) || v(s) && s.getTextContent() === Pt(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const u = n[a - 1];
    if (!O(u) || u.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return Nn(c, l, t, r), { out: l, contentNodes: c };
}
function em(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(it)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function xE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Zg(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = w();
  if (N(u)) {
    for (let P = u.anchor.getNode(); P; P = P.getParent())
      if (e.is(P)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = zl(o, u.anchor.key, u.anchor.offset));
  }
  const d = Pr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (In(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const h = f.content ?? [], m = em(h), p = Kg(e, h, m, r);
  if (p.failure !== void 0)
    return p.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      p.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Fo(p.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const y = e.getCategory() !== m;
  if (y && e.setCategory(m), xi(p.children, n) === Ti(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  const k = p.children.map((P) => po(P));
  if (Gg(k) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), y;
  const C = a[0];
  if (C)
    k.forEach((P) => C.insertBefore(P));
  else {
    const P = e.getChildren().find((E) => O(E) && E.getMarkerSyntax() === "closing");
    k.forEach((E) => P ? P.insertBefore(E) : e.append(E));
  }
  Hg(k, o.sentinels);
  const S = new Set(o.sentinels.flat().map((P) => P.getKey()));
  return a.forEach((P) => {
    S.has(P.getKey()) || P.remove();
  }), TE(k, c, l, n, r), !0;
}
const tm = /* @__PURE__ */ new Set(["ca", "cp"]), Kl = "cp";
function rm(e) {
  if (!fr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (ls(e, t, ur, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Pr(r, { getMarker: ur }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Kl)
  );
}
function Ko(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (D(r) && tm.has(r.getMarker()) || rm(r)) {
      t.push(r);
      continue;
    }
    ne(r) && r.getMarker() === Kl && t.push(r);
    break;
  }
  return t;
}
function _E(e) {
  const t = (n) => D(n) && tm.has(n.getMarker()) || rm(n);
  if (t(e) || ne(e) && e.getMarker() === Kl)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ne(n)) return n;
      if (!t(n)) return;
    }
}
function nm(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Ko(e);
  if (n.some((s) => ne(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Nn(e.getChildren(), i, t, r), Nn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function CE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Ko(e)], o = nm(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = w();
  if (N(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((p) => p.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = zl(o, l.anchor.key, l.anchor.offset));
  }
  const u = Pr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (In(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = Er.serializeEditorState(
    { type: Cr, version: _r, content: u },
    r
  );
  if (xi(f.root.children, n) === Ti(s, n)) {
    let m = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), m = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), m = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const h = f.root.children.map((m) => po(m));
  return Ne(h[0]) ? (h.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), Xg(h, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function ds(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (De(n)) return;
    !t && (K(n) || ne(n) || Ne(n)) && (t = n), By(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? _E(r) : void 0) ?? t;
}
function Ht(e, t) {
  const r = ds(e);
  return r ? K(r) ? xE(r, t) : Ne(r) ? CE(r, t) : Qg([r], t) : !1;
}
const SE = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Zd(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !SE.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function Ds(e, t) {
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
          t.push(`\\${n}`), Zd(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), Ds(r.content, t), Zd(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Ds(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), Ds(r.content, t);
      }
    }
}
function ef(e, t, r) {
  const n = ds(e);
  if (!ne(n)) return !1;
  const i = w();
  if (!N(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Fl(n, t, r);
  if (!o) return !1;
  const a = Pr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    us.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  Ds(a, l);
  for (const u of l.join("").replaceAll(L, "~")) {
    if (us.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function jl(e, t) {
  return im(e, t, b.Paragraph);
}
function vE(e, t) {
  return im(e, t, b.Character);
}
function im(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== b.Unknown ? i === r : !(Ee.isValidMarker(n) || Dc(n));
}
function ME(e) {
  return [lt(e), Co()];
}
function Bl(e) {
  jt(e, 2);
}
function EE(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Vl(e) {
  const t = EE(e);
  e.splice(0, 0, ME(e.getMarker())), t && Bl(e);
}
function co(e, t) {
  e.setMarker(t), Vl(e), Bl(e);
}
function AE(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Rn(n)) {
    if (v(n) && !O(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(L), Tt(n, ae, hr), n.setMode("token");
      return;
    }
    if (Dp(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Co());
  }
}
function tf(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : U(n) ? n.getChildrenSize() : 0;
  if (r === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = n; !s.is(t); ) {
    if (r === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function Wi(e) {
  for (let t = e; t; t = t.getParent())
    if (ne(t)) return t;
}
function PE(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Wi(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Wi(r.getNode())?.is(s) ?? !1, a = Wi(n.getNode())?.is(s) ?? !1;
    return !(o && !tf(r, s, "start") || a && !tf(n, s, "end"));
  });
}
function gc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = w();
  if (!(!N(r) || r.isCollapsed()))
    for (const n of PE(r)) t.add(n.getKey());
}
function NE(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = w();
  if (!N(r) || !r.isCollapsed()) return;
  const n = Wi(r.focus.getNode());
  n && t.add(n.getKey());
}
function OE(e) {
  const t = w();
  !N(t) || t.isCollapsed() || t.getNodes().some((r) => O(r)) && (gc(e), t.removeText());
}
const wE = new RegExp(
  String.raw`^\\\+?([${er}]+)(?:[ \u00A0]|$)`
);
function qE(e, t) {
  const r = wE.exec(e.getTextContent());
  return !!r && jl(r[1], t);
}
function RE(e, t) {
  if (!yi(t.viewOptions)) return;
  if (Kt(e.getFirstChild())) {
    AE(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (qE(e, t.getMarker)) return;
    Vl(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ne(o) && !o.is(e))) {
      co(e, lr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (ne(r)) {
    const n = e.getChildren().filter((a) => !Rn(a)), i = w();
    let s = !1;
    if (N(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Wi(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || U(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && jt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  co(e, lr);
}
function $E(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = ar(t, ko(e.getMarker()));
  return r === "" ? void 0 : r;
}
function LE(e) {
  const t = e.getChildren().filter((s) => !O(s) && ie(s, ae) !== "attribute"), r = t[0];
  r && v(r) && r.getTextContent().startsWith(L) && r.setTextContent(r.getTextContent().slice(1));
  const n = $E(e);
  n && t.push(he(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function IE(e, t) {
  const r = e.getChildren(), n = r.some((s) => O(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => v(c) && !O(c) && c.getTextContent() === Pt(s)
    ), a = fi(e).some(({ node: c }) => O(c));
    if (!o && !a) return;
    r.forEach((c) => {
      O(c) || (v(c) && c.getTextContent() === Pt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => O(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function DE(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(O(r) && r.getMarkerSyntax() === "opening")) {
    LE(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => O(o) && o.getMarkerSyntax() === "closing");
  i && !s && Ht(e, t);
}
function mc(e, t, r) {
  if (!O(e.getFirstChild()) && r?.markerMode === "editable" && yi(r)) {
    co(e, t);
    return;
  }
  Dh(e, t);
}
function sm() {
  const e = w();
  if (!N(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = om(e);
    return t !== "removed" ? t : (yc(), "handled");
  }
  return yc() ? "handled" : "declined";
}
function UE(e, t) {
  if (!t) return e;
  const r = pE.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function rf(e, t) {
  const r = w();
  if (!N(r)) return "declined";
  if (r.isCollapsed()) {
    if (!am())
      return "declined";
  } else {
    const s = om(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => UE(s, t)
  );
  nf(n ?? "");
  for (const s of i)
    yc(), nf(s);
  return "handled";
}
function FE(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = en(n);
  if (!i) return !1;
  const s = Qt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !v(i) || O(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function om(e) {
  const t = Qt(e.anchor.getNode()), r = Qt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), zE() ? "removed" : "needs-plain-split");
}
function nf(e) {
  if (e === "") return;
  const t = w();
  N(t) && t.insertText(e);
}
function zE() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = Qt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => O(r) && r.getMarkerSyntax() === "opening");
}
function am() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Qt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function yc() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = am();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = vr("fp", { closed: "false" });
  i.append(lt("fp"));
  const s = v(t) && !O(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    oi(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (Dk(u), i.append(u));
  }
  return i.getChildren().every(O) && i.append(he(Ft)), cm(i), !0;
}
function cm(e) {
  const t = e.getChildren().find((r) => !O(r));
  if (v(t)) {
    const r = t.getTextContent().startsWith(L) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (U(t)) {
    cm(t);
    return;
  }
  e.selectEnd();
}
function KE(e) {
  const t = [];
  let r = e;
  for (; r; )
    D(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function jE(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of ze().getChildren()) {
    if (t && n.is(t)) break;
    (gt(n) || Je(n) || ne(n)) && r.push(n.getMarker());
  }
  return r;
}
function BE(e) {
  let t = e;
  for (; U(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function VE(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Kt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Rn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(BE(i)) && r === 0 : !1;
}
function WE(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Kt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Rn(i) && t.is(i) && r === 0;
}
function HE() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function GE() {
  const e = w();
  if (!N(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = ot(t, ne), s = !n && (!i || WE(i, t, r)) ? "paragraph" : "character", o = Qt(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: jE(t),
    openCharMarkers: KE(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: nl(t, r),
    anchorRect: HE()
  };
}
function JE() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!v(t) || O(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = hE.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function YE(e, t, r) {
  mc(e, t, r), Bl(e);
}
function XE(e, t, r) {
  const n = w();
  if (!N(n)) return;
  const i = n.focus.getNode(), s = ot(i, ne);
  if (t === "backslash" && s && VE(s, i, n.focus.offset)) {
    YE(s, e, r);
    return;
  }
  um(e, r);
}
function QE(e, t) {
  const r = w();
  return !N(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function lm(e) {
  const t = w();
  return N(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function ZE(e, t, r, n) {
  if (N(w()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && JE(), e.kind === "closeTag") {
    lm(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && sm() !== "declined") return;
  if (e.kind === "paragraph" && rt.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    XE(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Ee.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Mg(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  lc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Tn(), reference: r });
}
function um(e, t) {
  const r = w();
  if (!N(r)) return;
  const n = yi(t);
  if (Sg()) {
    const s = w();
    if (!N(s)) return;
    const o = ot(s.anchor.getNode(), ne);
    if (!o) return;
    o.setMarker(e), n && Vl(o);
    return;
  }
  const i = r.insertParagraph();
  ne(i) && (n ? co(i, e) : i.setMarker(e));
}
function eA() {
  const [e] = ce();
  return z(() => e.registerCommand(wc, () => !0, ft), [e]), null;
}
function tA(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = lE.exec(e)?.[1];
  return r === void 0 ? !1 : !jl(r, t);
}
function dm(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !tA(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ne(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (ne(i))
    return [i, r];
}
function fm(e, t) {
  const r = dm(e, t.getMarker);
  return r !== void 0 && Qg(r, t);
}
function rA(e, t) {
  const r = w();
  N(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function pm(e) {
  const t = uE.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function nA(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = pm(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function iA(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (K(e.getParent()) && v(r)) {
    const n = r.getNextSibling();
    if (D(n)) {
      tl(n);
      return;
    }
  }
  v(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function sf(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = pm(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  iA(e);
}
function of(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function hm(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Ht(e, r);
  const n = nA(e), i = e.getParent();
  if (ne(i)) {
    if (!jl(t, r.getMarker))
      return fm(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Ht(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), of(s, t) && sf(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (D(i) || K(i)) {
    const s = t.replace(/^\+/, "");
    if (!(D(i) ? vE(t, r.getMarker) : Ee.isValidMarker(s)))
      return Ht(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Ht(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(O).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (rA(c, st(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), of(a, s) && sf(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Ht(e, r);
}
function sA(e) {
  const t = w();
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
function oA(e, t) {
  const r = e.getTextContent();
  if (tn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Ie(e.getParent()) && Jc(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !sA(e)) {
    Vk(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = aE.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), hm(e, n[1], t);
      return;
    }
    if (cE.test(r)) {
      t.pendingKeys.delete(e.getKey()), Ht(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = st(e.getMarker(), e.getNested());
    if (D(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = w(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = he(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function aA(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (ih(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function gm(e) {
  if (!Bf(e)?.length)
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
const $i = gm("v"), cA = gm("c"), af = /^[ \u00A0]*$/;
function cf(e, t, r) {
  const n = e.getNextSibling();
  if (v(n) && n.getType() === Be.getType() && n.getMode() === "normal" && ie(n, ae) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = he(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function lA(e, t) {
  const r = e.getTextContent(), n = Ut("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if ($i.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = $i.valueAndRest.exec(c);
    if (l && af.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if ($i.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = $i.valueAndRest.exec(r);
  if (!s) {
    const c = $i.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = w(), h = N(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Ut("v", u));
      const m = h !== void 0 && h >= l.length ? Math.min(h - l.length, d.length) : void 0;
      cf(e, d, m);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Ht(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), af.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Ut("v", o)), a && cf(e, a, a.length);
}
const uA = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function dA(e, t) {
  const r = e.getParent();
  if (!K(r) || r.getIsCollapsed() !== !1 || !Bf(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!O(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === Pt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = uA.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Pt(a)), !0;
}
function fA(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!v(t)) return;
  const r = Ut("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = cA.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function mm(e) {
  if (He(e)) {
    const { wrapper: t } = Mo(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (K(e)) {
    const { wrapper: t } = Bp(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Ne(e)) {
    const t = [], r = Vp(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Hp(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (we(e)) {
    const t = [], r = es(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = es(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function pA(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return mm(e).some((n) => r.is(n));
}
function hA(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ne(e) && Dp(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of rs)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Ts(l, e) && (i || pA(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of mm(e))
    l.remove(), n = !0;
  let s = !1;
  if (D(e)) {
    const l = Yk(e);
    l !== void 0 && Ob(l) && (Yp(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of rs)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (BT(l, e)) {
        is(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && ph(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      No(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function lf(e) {
  return v(e) && e.getType() === Be.getType() && e.getMode() === "normal" && ie(e, ae) !== "attribute";
}
function gA(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = oe(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && lf(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && lf(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function qs(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = gA(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = oe(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (O(c)) {
      e.pendingKeys.delete(a);
      const h = c.getTextContent();
      if (tn(c)) continue;
      const m = Fg.exec(h);
      c.getMarkerSyntax() === "opening" && m ? n = hm(c, m[1], e) || n : r === "idle" && ef(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : fm(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Ht(c, e) || n;
      continue;
    }
    const l = Mn(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = hA(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && ef(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = Ht(u, e) || n;
    }
  }
  return n;
}
function ym(e) {
  if (rn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (D(t)) return zi(t) !== void 0;
  return !1;
}
function mA(e) {
  const t = Mn(e);
  if (!t) return !1;
  const r = vn(t.kind);
  return !No(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function uf(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (gt(t) || De(t) || ah(t)) return !0;
  return !1;
}
function yA(e, t) {
  const r = e.getTextContent(), n = ie(e, ae), i = e.getParent();
  if (n !== "attribute" && Ne(i)) {
    r.replace(/^[ \u00A0]+/, "") === Ut("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (dA(e, t)) return;
  if (n === "attribute") {
    mA(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && ym(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !uf(e))
      t.pendingKeys.add(e.getKey());
    else if (Gp(e)) t.pendingKeys.add(e.getKey());
    else if (Ne(ds(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      D(a) && Xp(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (uf(e)) return;
  const s = w(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (dE.test(o)) {
    if (Fb(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), Ht(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function bA(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : ph(e, t);
}
function kA(e) {
  const t = (r) => {
    if (O(r)) {
      tn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (rn(r)) {
      ih(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of rs)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Ts(n, r) || bA(n, r)) && e.pendingKeys.add(r.getKey());
    if (we(r)) {
      r.getTextContent() !== Ut("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (v(r)) {
      if (r.getType() !== Be.getType() || ie(r, ae) === "attribute") return;
      const n = r.getParent();
      if (Ne(n)) {
        r.getTextContent() !== Ut("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && ym(r) || i.includes("//") || Gp(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (D(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!De(r) && !gt(r)) {
      if (Ie(r) && r.getChildrenSize() === 0) {
        const n = Mn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      U(r) && r.getChildren().forEach(t);
    }
  };
  ze().getChildren().forEach(t);
}
const lo = "usfm:", bm = "usfmopen", km = "usfmclosed";
function TA(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const xA = new RegExp(
  [lo, bm, km].map(TA).join("|")
), _A = "\uFEFF", CA = /^usfm_(.+)$/;
function SA(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function vA(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function MA(e) {
  return e.startsWith(lo) ? vA(e.slice(lo.length)).replace(/\r\n?|\n/g, " ") : "";
}
function Tm(e) {
  for (const t of e.classList) {
    const r = CA.exec(t);
    if (r) return r[1];
  }
}
function EA(e) {
  const t = Tm(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function AA(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(lo)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(bm) && !n.contains(km)) && Tm(r) !== void 0)
      return !0;
  }
  return !1;
}
function xm(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(MA(e.nodeValue ?? ""));
    return;
  }
  if (!SA(e)) return;
  const { classList: n } = e, i = (u) => e.childNodes.forEach((d) => xm(d, u, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? EA(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function PA(e) {
  if (!xA.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !AA(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => xm(n, !1, r)), r.join("").replaceAll(_A, "").replaceAll(L, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function NA(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ie(e, ae);
  if (r === "attribute" || r === hr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (gt(o) || Ne(o) || De(o)) return;
  const n = t.startsWith(L) && D(e.getParent()), i = n ? t.slice(1) : t, s = (n ? L : "") + i.replace(/ (?=[ \u00A0])/g, L).replace(new RegExp("(?<=\\u00A0) ", "g"), L);
  s !== t && e.setTextContent(s);
}
function OA(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function wA(e, t) {
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
function bc(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? PA(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(OA(s)) : ""),
    isInternal: wA(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const df = String.raw`\\(?:\+?[${er}]+\*?|\*)`, qA = new RegExp(
  String.raw`(?<=${df})\u00A0|\u00A0(?=${df})`,
  "g"
);
function Wl(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(qA, " ").replaceAll(L, "~");
}
const _m = new RegExp(
  String.raw`\\c(?![${er}])[ \u00A0]*[^\s\\]*`,
  "g"
), Cm = new RegExp(String.raw`\\id(?![${er}])[^\n\\]*`, "g"), RA = new RegExp(
  String.raw`^(?:${_m.source}|${Cm.source})`
);
function Hl(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(_m, "").replace(Cm, "");
    return RA.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function kc(e) {
  if (v(e) && ie(e, ae) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Ie(t)) return !0;
  return !1;
}
function $A(e) {
  return kc(e.anchor.getNode()) || kc(e.focus.getNode());
}
function LA(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && kc(t.getNode());
}
function IA(e, t) {
  const n = LA(e) ? t : Wl(Hl(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function DA(e, t = !1, r = () => {
}) {
  const n = bc(e, Tn()._config.namespace);
  if (!n) return !1;
  const i = w(), s = N(i) && $A(i);
  if (!s && n.isInternal || t && N(i) && ni(i))
    return !1;
  const { text: o } = n;
  if (!o || !N(i)) return !1;
  if (e?.preventDefault(), s)
    return IA(i, o), !0;
  const a = Wl(Hl(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = Tn();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(Us, void 0), u === "") return;
    const f = w();
    N(f) && f.insertText(u);
  }), !0;
}
function UA(e) {
  if (e.getTextContent() !== L) return !1;
  const t = e.getParent();
  return K(t) ? !vt(e.getPreviousSibling()) : !1;
}
function FA(e, t) {
  if (t || e.getTextContent() !== L) return "";
  const r = e.getParent();
  if (!K(r) || !vt(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function zA(e) {
  const t = e.getParent();
  return (K(t) ? t.getCaller() : void 0) || Gi;
}
function KA(e) {
  const t = e.getParent();
  return !t || Xr(t) === void 0;
}
function Sm(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Pc(e);
  let l = "", u = !0;
  for (const d of t) {
    if (U(d) && !d.isInline()) {
      !u && KA(d) && (l += `
`), u = !d.isEmpty();
      continue;
    }
    if (u = !1, vt(d))
      (d !== n || !e.isCollapsed()) && (l += (d === r ? "" : " ") + zA(d));
    else if (v(d)) {
      let f = d.getTextContent();
      d === r ? d === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : d === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += UA(d) ? "" : f.replaceAll(L, " ") + FA(d, d === n);
    } else (bo(d) || hs(d)) && (d !== n || !e.isCollapsed()) && (l += d.getTextContent().replaceAll(L, " "));
  }
  return l;
}
function vm(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function jA(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => gt(r) || Ne(r)
    )
  );
}
function BA(e) {
  const t = w();
  if (!N(t) || t.isCollapsed()) return;
  const r = Sm(t), n = {
    "text/plain": r,
    "text/html": vm(r)
  };
  if (Lo() || jA(t)) return n;
  const i = Gy(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function ff(e, t, r) {
  const n = w();
  if (!N(n) || n.isCollapsed())
    return (!e || !("clipboardData" in e)) && !Qh();
  const i = BA(t);
  return i ? Mm(e, t, n, i, r) : !1;
}
function Mm(e, t, r, n, i) {
  const s = !n["text/plain"], o = i && t.isEditable();
  if (!e || !("clipboardData" in e))
    return s || Jy(t, null, n), o && r.removeText(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !s)
    for (const [a, c] of Object.entries(n)) e.clipboardData.setData(a, c);
  return o && r.removeText(), !0;
}
const Em = qf(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Aa(e) {
  const t = e();
  return Wr(Pf), Wr(Gf), t;
}
const pf = 8, VA = 1e3;
function Yn(e, t) {
  const r = we(e) ? ["va", "vp"] : He(e) ? ["milestone"] : K(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    JT(vn(n), e, t.pendingKeys);
}
function WA(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(qc) || i.updateTags.has(Ji)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = oe(o);
        if (!c) continue;
        const l = Mn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = oe(o.getKey());
        c?.isAttached() && vn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Ue(
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
    e.registerMutationListener(Be, r),
    e.registerMutationListener(mr, r),
    e.registerMutationListener(Nr, r),
    e.registerMutationListener(Or, r)
  );
}
function Tc(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = w();
  return r ? t ? sg(r, t) : N(r) && ni(r) : !1;
}
function HA(e, t, r) {
  return Ue(
    e.registerCommand(
      cr,
      (n) => {
        if (Lo() || Tc(t)) return !1;
        const i = bc(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? Wl(Hl(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = rf(o, t.getMarker);
          if (a === "declined" && FE(e) && (a = rf(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      Qe
    ),
    e.registerCommand(
      cr,
      (n) => {
        const i = bc(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !vM()) return !1;
        const o = w();
        return t.structureProtectionMode === "protected" && N(o) && ni(o) ? !1 : (n?.preventDefault(), N(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Us, void 0), a === "") return;
          const l = w();
          N(l) && l.insertText(a);
        }), !0);
      },
      Oe
    ),
    e.registerCommand(
      cr,
      () => (t.splitExpected.current = !0, !1),
      ft
    )
  );
}
function GA({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off"
}) {
  const [s] = ce(), o = e?.markerMode === "editable", a = !!e && $o(e), c = Z(void 0), l = Z(n);
  return z(() => {
    l.current = n;
    const u = c.current;
    u && (e && (u.viewOptions = e), u.getMarker = t ?? ur, u.logger = r, u.structureProtectionMode = i);
  }, [e, t, r, n, i]), z(() => {
    if (!o || !e) return;
    const u = {
      viewOptions: e,
      getMarker: t ?? ur,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r,
      structureProtectionMode: i
    };
    c.current = u;
    const d = FT(s, u.pendingKeys);
    let f, h = !1, m, p = !1, y = !1, k = 0;
    const C = () => k < pf ? !1 : (u.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${pf} consecutive mutating passes; leaving ${u.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...u.pendingKeys].join(", ")}`
    ), !0), S = (M, R = "departure") => {
      s.update(() => {
        k = Aa(
          () => qs(u, M, R)
        ) ? k + 1 : 0;
      });
    };
    let P;
    const E = () => {
      if (P !== void 0 && clearTimeout(P), P = void 0, y || u.pendingKeys.size === 0) return;
      const M = l.current ?? VA;
      M < 0 || (P = setTimeout(() => {
        P = void 0, !(y || u.pendingKeys.size === 0) && (h || C() || S(void 0, "idle"));
      }, M));
    }, j = Ue(
      s.registerNodeTransform(mr, (M) => {
        if (s.isComposing()) return;
        oA(M, u);
        const R = Mn(M);
        R && (we(R.owner) || K(R.owner) || Ne(R.owner) || He(R.owner) && Mo(R.owner).wrapper === void 0) && Yn(R.owner, u);
      }),
      s.registerNodeTransform(pt, (M) => {
        s.isComposing() || (lA(M, u), Yn(M, u));
      }),
      s.registerNodeTransform(Ot, (M) => {
        s.isComposing() || (fA(M), M.isAttached() && Yn(M, u));
      }),
      s.registerNodeTransform(rt, (M) => {
        s.isComposing() || RE(M, u);
      }),
      s.registerNodeTransform(me, (M) => {
        if (!s.isComposing()) {
          DE(M, u);
          for (const R of ["separator", "char"])
            M.isAttached() && Ts(vn(R), M) && u.pendingKeys.add(M.getKey());
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
      s.registerNodeTransform(Yt, (M) => {
        s.isComposing() || Yn(M, u);
      }),
      s.registerNodeTransform(Or, (M) => {
        if (s.isComposing()) return;
        const R = Mn(M);
        R && (He(R.owner) || we(R.owner) || K(R.owner) || Ne(R.owner)) && Yn(R.owner, u);
      }),
      s.registerNodeTransform(Ee, (M) => {
        s.isComposing() || (IE(M, u), Yn(M, u));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      s.registerNodeTransform(Rr, (M) => {
        s.isComposing() || aA(M, u);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      s.registerNodeTransform(Be, (M) => {
        s.isComposing() || yA(M, u);
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
      s.registerMutationListener(
        Be,
        (M) => {
          s.getEditorState().read(() => {
            for (const [R, $] of M) {
              if ($ === "destroyed") continue;
              const re = oe(R);
              !re || ie(re, ae) !== "attribute" || Ie(re.getParent()) || s.getElementByKey(R)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      WA(s, u),
      ...a ? [
        s.registerNodeTransform(Be, (M) => {
          s.isComposing() || NA(M);
        }),
        s.registerCommand(
          ms,
          (M) => ff(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            M && typeof M == "object" && "clipboardData" in M ? M : null,
            s,
            !1
          ),
          Oe
        ),
        s.registerCommand(
          Vr,
          (M) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            ff(
              M && typeof M == "object" && "clipboardData" in M ? M : null,
              s,
              !0
            )
          ),
          Oe
        ),
        s.registerCommand(
          cr,
          (M) => DA(
            // Same jsdom-safe duck-check as COPY above.
            M && typeof M == "object" && "clipboardData" in M ? M : null,
            u.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              u.splitExpected.current = !0;
            }
          ),
          Oe
        )
      ] : [],
      s.registerCommand(
        Vr,
        () => (!Tc(u) && !Lo() && gc(u), !1),
        Qe
      ),
      s.registerCommand(
        mo,
        () => (s.isComposing() || OE(u), !1),
        ei
      ),
      s.registerCommand(
        Hi,
        () => (h = !1, k = 0, E(), !1),
        ft
      ),
      s.registerCommand(
        pr,
        (M) => (h = !1, k = 0, E(), (M.key === "Backspace" || M.key === "Delete") && !Tc(u, tg(M)) && (gc(u), NE(u), queueMicrotask(() => {
          u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear();
        })), s.isComposing() || !M.ctrlKey || M.altKey || M.shiftKey || M.metaKey || M.key !== " " && M.code !== "Space" || !SM() ? !1 : (M.preventDefault(), !0)),
        Oe
      ),
      s.registerCommand(
        Of,
        (M) => {
          const R = sm();
          R === "needs-plain-split" && s.dispatchCommand(Us, void 0);
          const $ = R !== "declined" || YT();
          return $ && M?.preventDefault(), qs(u), $;
        },
        Oe
      ),
      s.registerCommand(
        Us,
        () => (u.splitExpected.current = !0, Sg()),
        Oe
      ),
      HA(s, u, a),
      s.registerCommand(
        Em,
        () => {
          if (h) return !0;
          const M = s.getRootElement(), R = M?.ownerDocument, $ = !!M && !!R && R.hasFocus() && M.contains(R.activeElement);
          let re;
          if ($) {
            const W = w();
            re = N(W) ? W.focus.key : f;
          }
          return Aa(() => qs(u, re)), !0;
        },
        ft
      ),
      s.registerCommand(
        Oc,
        () => {
          if (h) return !1;
          const M = w(), R = N(M) ? M.focus.key : f;
          return Aa(() => qs(u, R)), !1;
        },
        ft
      ),
      s.registerUpdateListener(({ editorState: M, tags: R }) => {
        u.splitExpected.current = !1, u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear(), u.rebuildAttempted.clear();
        const $ = M.read(() => {
          const W = w();
          return N(W) ? W.focus.key : void 0;
        }), re = m;
        if ($ !== void 0 && (m = $), R.has(qc)) {
          u.pendingKeys.clear(), M.read(() => kA(u)), h = !0, $ !== void 0 && (f = $);
          return;
        }
        if (R.has(Hr)) {
          $ !== void 0 && $ !== re && (h = !0);
          return;
        }
        h || ($ !== void 0 && (f = $), E(), !(p || $ === void 0) && [...u.pendingKeys].some((W) => W !== $) && (p = !0, queueMicrotask(() => {
          p = !1, !y && (C() || S(f));
        })));
      })
    );
    return () => {
      y = !0, P !== void 0 && clearTimeout(P), P = void 0, d(), j(), c.current = void 0;
    };
  }, [s, o, a]), null;
}
const JA = ["status_unknown", "status_invalid"], Am = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, YA = Object.values(Am);
function XA(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Am[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function hf(e) {
  e.classList.remove(...JA), e.removeAttribute("aria-description"), YA.includes(e.title) && e.removeAttribute("title");
}
function QA(e, t, r, n) {
  const i = (a) => a.read(() => ze().getChildrenKeys()), s = i(t), o = i(e);
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
function ZA(e) {
  const t = oe(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : O(t) && t.getParent()?.getKey() === r.getKey();
}
function e1({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ce(), i = e?.markerMode === "editable";
  return z(() => {
    if (!i) return;
    const s = t ?? Ys;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = YM(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, h] of o) {
            if (d.has(f) || ZA(f)) continue;
            const m = oe(f)?.getTopLevelElement();
            !m || l.has(m.getKey()) || d.set(f, h);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const h = n.getElementByKey(f);
          h && hf(h);
        }
        for (const [f, h] of d) {
          const m = n.getElementByKey(f);
          m && XA(m, h);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          QA(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && hf(u);
      }
    };
  }, [n, i, t, r]), null;
}
function t1(e, t) {
  const r = kl(ml), n = dl();
  if (!r || !n?.end) return;
  const i = Ls.deserializeEditorState(e.getEditorState(), t);
  if (!i) return;
  const s = Vy({
    namespace: "markers-view-copy",
    nodes: [tt, ...pl],
    onError: (a) => {
      throw a;
    }
  });
  return s.parseEditorState(
    Er.serializeEditorState(i, r)
  ).read(
    () => {
      const a = qo(n);
      return a ? Sm(a) : void 0;
    },
    { editor: s }
  );
}
function r1({ viewOptions: e }) {
  const [t] = ce();
  return z(() => {
    const r = (n, i) => {
      const s = w();
      if (!N(s) || s.isCollapsed()) return !1;
      const o = t1(t, e);
      return o === void 0 ? !1 : Mm(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        n && typeof n == "object" && "clipboardData" in n ? n : null,
        t,
        s,
        { "text/plain": o, "text/html": vm(o) },
        i
      );
    };
    return Ue(
      t.registerCommand(ms, (n) => r(n, !1), Oe),
      t.registerCommand(Vr, (n) => r(n, !0), Oe)
    );
  }, [t, e]), null;
}
function Pm(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Ar(o);
    a && U(s) && Pm(s.getChildren(), a, r);
  }
}
function Nm(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Ar(o);
      if (a) {
        n(a);
        continue;
      }
      const c = di(o);
      if (c === void 0 || !c.includes(it)) continue;
      const l = c.split(it), u = [];
      for (let d = 0; d < l.length; d++) {
        const f = l[d];
        if (d > 0 && u.push(...t[r++] ?? []), f.length > 0) {
          const h = {
            ...o,
            text: f
          };
          u.push(h);
        }
      }
      i.splice(s, 1, ...u), s += u.length - 1;
    }
  };
  n(e);
}
function Om(e, t, r) {
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
function wm(e, t) {
  const r = [];
  for (const n of e)
    Bg(n, t) || ((ne(n) || D(n)) && r.push(n.getMarker()), U(n) && r.push(...wm(n.getChildren(), t)));
  return r;
}
function qm(e) {
  const t = [];
  for (const r of e) {
    const n = Ul(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Ar(r);
    i && t.push(...qm(i));
  }
  return t;
}
function Gl(e, t, r) {
  const n = wm(e, r), i = qm(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function n1(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = w();
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
function Jl(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function i1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  for (const y of e) {
    const k = Fl(y, o, s);
    if (!k) return;
    c.text.length > 0 && (c.text += " ");
    const C = c.text.length;
    k.spans.forEach(
      (S) => c.spans.push({ ...S, start: S.start + C, end: S.end + C })
    ), c.sentinels.push(...k.sentinels), c.text += k.text;
  }
  const l = i ? Jl(c, i) : c.text, u = Pr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (In(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = Er.serializeEditorState(
    { type: Cr, version: _r, content: u },
    s
  ).root.children;
  if (Fo(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Om(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (xi(d, o) === Ti(e, o) && Gl(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Nm(d, f);
  const m = s1(e), p = Rm(d);
  for (let y = 0; y < m.length && y < p.length; y++)
    m[y].sid !== void 0 && p[y].number === m[y].number && (p[y].sid = m[y].sid);
  return d;
}
function s1(e) {
  const t = [], r = (n) => {
    we(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : U(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Rm(e) {
  const t = [];
  for (const r of e) {
    Mp(r) && t.push(r);
    const n = Ar(r);
    n && t.push(...Rm(n));
  }
  return t;
}
function o1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Zg(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? Jl(l, i) : l.text, f = Pr(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (In(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [h] = f;
  if (f.length !== 1 || typeof h != "object" || h.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const m = h.content ?? [], p = em(m), y = e.getCategory() !== p, k = Kg(e, m, p, s);
  if (k.failure !== void 0) {
    k.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : k.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const C = k.children;
  if (Fo(C) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const S = Om(l, t, n);
  if (!S) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (xi(C, o) === Ti(u, o) && Gl(u, C, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: p, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Nm(C, S), { rebuilt: C, contentNodes: u, category: p, categoryChanged: y };
}
function gf(e) {
  return e.$?.textType;
}
function a1(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && gf(e) === gf(t);
}
function c1(e) {
  const t = [];
  for (const r of e) {
    const n = oe(r);
    n?.isAttached() && De(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function l1(e) {
  if (!O(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!K(t)) return;
  const r = e.getTextContent();
  if (tn(e)) return;
  const n = Fg.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function mf(e, t) {
  const r = e;
  r.marker = t, r.text = Wg(t, r.markerSyntax, r.nested);
}
function u1(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Ee.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && mf(a.node, s);
  const c = n.getChildren().filter(O).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && mf(l.node, s);
}
function d1(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = nm(e, i, n);
  if (!o) return;
  const a = r ? Jl(o, r) : o.text, c = Pr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (In(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = Er.serializeEditorState(
    { type: Cr, version: _r, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Ko(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && xi(u, i) === Ti(d, i) && Gl(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function f1(e, t, r, n, i) {
  const s = n1(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = (y) => {
    K(y) ? c.set(y.getKey(), y) : Ne(y) ? l.set(y.getKey(), y) : o.set(y.getKey(), [y]);
  };
  for (const y of t) {
    const k = oe(y);
    if (!k?.isAttached()) continue;
    const C = ds(k);
    if (C) {
      if (d(C), O(k)) {
        const S = dm(k, r.getMarker);
        S && a.push(S);
      }
      if (K(C)) {
        const S = l1(k);
        S && u.set(C.getKey(), S);
      }
    }
  }
  const f = /* @__PURE__ */ new Set();
  for (const y of a)
    y.some((k) => f.has(k.getKey())) || (y.forEach((k) => {
      f.add(k.getKey()), o.delete(k.getKey());
    }), o.set(y[0].getKey(), y));
  if (s) {
    const y = ds(s.node);
    y && d(y);
  }
  const h = c1(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && h.length === 0)
    return;
  const m = new Set(h.map((y) => y.getKey())), p = /* @__PURE__ */ new Map();
  Pm(ze().getChildren(), e.root.children, p);
  for (const y of u.values()) u1(y, p);
  for (const y of c.values()) {
    const k = p.get(y.getKey()), C = k ? Ar(k.node) : void 0;
    if (!k || !C) continue;
    const S = o1(y, p, r, m, s);
    if (!S) continue;
    if (S.categoryChanged) {
      const j = k.node;
      S.category === void 0 ? delete j.category : j.category = S.category;
    }
    if (!S.rebuilt) continue;
    const P = p.get(S.contentNodes[0].getKey());
    if (!P) continue;
    const E = C.indexOf(P.node);
    E < 0 || C.splice(E, S.contentNodes.length, ...S.rebuilt);
  }
  for (const y of o.values()) {
    const k = p.get(y[0].getKey());
    if (!k) continue;
    const C = i1(y, p, r, m, s);
    if (!C) continue;
    const S = k.siblings.indexOf(k.node);
    S < 0 || k.siblings.splice(S, y.length, ...C);
  }
  for (const y of l.values()) {
    const k = p.get(y.getKey());
    if (!k) continue;
    const C = 1 + Ko(y).length, S = d1(y, r, s);
    if (!S) continue;
    const P = k.siblings.indexOf(k.node);
    P < 0 || k.siblings.splice(P, C, ...S);
  }
  for (const y of h) {
    const k = p.get(y.getKey());
    if (!k) continue;
    const C = k.siblings.indexOf(k.node);
    if (C < 0) continue;
    k.siblings.splice(C, 1);
    const S = k.siblings[C - 1], P = k.siblings[C], E = S && di(S), j = P && di(P);
    S && P && E !== void 0 && j !== void 0 && a1(S, P) && (S.text = E + j, k.siblings.splice(C, 1));
  }
  return mg(e, r.viewOptions);
}
function p1({
  viewOptions: e,
  logger: t
}) {
  const [r] = ce(), n = yi(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return z(() => {
    if (n)
      return r.registerNodeTransform(
        rt,
        (i) => h1(i, t)
      );
  }, [r, n, t]), null;
}
function h1(e, t) {
  e.getMarker() !== lr && (e.isEmpty() || Kt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${lr}" (key ${e.getKey()})`
  ), e.setMarker(lr)));
}
function g1({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = ce(), n = Z({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return z(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, uo(s, e) || m1(i, r, e);
  }, [r, e, t]), z(
    () => r.registerMutationListener(
      zt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = xc(r);
        yf(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Rs(s) === Rs(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), z(() => {
    const i = (a) => a.read(
      () => new Set(
        ze().getChildren().filter(Je).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((h) => !u.has(h));
      f && (xc(r) || yf(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((h) => !d.has(h)),
        isSameDocumentReload: Rs(a) === Rs(c)
      }));
    };
    return Ue(
      ...[Ot, gr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), z(
    () => r.registerCommand(
      dr,
      () => {
        const i = n.current;
        return i.phase === "idle" && T1(i, b1()), !1;
      },
      ft
    ),
    [r]
  ), z(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(dr, void 0));
    };
    return Ue(
      r.registerMutationListener(St, i),
      r.registerMutationListener(pt, i)
    );
  }, [r]), z(() => {
    const i = () => S1(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function m1(e, t, r) {
  if (y1(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = xc(t);
  (!n || n === r.book) && t.update(() => $m(r.chapterNum, r.verseNum), {
    tag: Hr
  });
}
function y1(e, t) {
  const r = e.pendingEchoes.findIndex((n) => uo(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function b1() {
  const e = w();
  if (It(e)) return;
  const t = Vc(e);
  if (!t) return;
  const r = Yl(), n = Pp(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = ol(t, e), { verseNum: o, verse: a } = kx(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function xc(e) {
  return e.getEditorState().read(() => Yl()?.getCode() || void 0);
}
function Yl() {
  return ze().getChildren().find(gt);
}
function yf(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Pa(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Pa(e, t), e.phase = "navigating") : i && Pa(e, t), r && r !== e.scrRef.book && Dm(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Pa(e, t) {
  queueMicrotask(() => {
    t.update(
      () => $m(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Hr }
    );
  });
}
function $m(e, t) {
  const r = Vc(w()), n = al(r)?.getNumber(), i = Pp(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Lp(n) ? Im(t, n) : parseInt(n, 10) === t))
    return;
  const o = ze().getChildren(), a = Ap(o, e);
  if (!a) return;
  const c = wk(o, a), l = vk(c, !0);
  Ok(c, l);
  let u;
  try {
    u = hx(c, t);
  } catch {
    return;
  }
  u && (ne(u) ? !v(u.getFirstChild()) && ki(u) || jt(u, 0) : k1(u));
}
function k1(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || pe(n)) {
    jt(t, r);
    return;
  }
  const i = Po(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (v(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = U(n) && !K(n) ? Lm(n) : void 0;
  s ? s.select(0, 0) : jt(t, r);
}
function Lm(e) {
  const t = e.getFirstChild();
  if (v(t)) return t;
  if (U(t) && !K(t)) return Lm(t);
}
function Rs(e) {
  return e.read(() => {
    const t = ze().getChildren().find(Je);
    return `${Yl()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function T1(e, t) {
  e.phase !== "navigating" && t && (x1(t, e.scrRef) || Dm(e, _1(t, e.scrRef)));
}
function x1(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Im(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Im(e, t) {
  try {
    return Wc(e, t);
  } catch {
    return !1;
  }
}
function _1(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const C1 = 8;
function Dm(e, t) {
  return uo(t, e.scrRef) || e.pendingEchoes.some((r) => uo(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > C1 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function uo(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function S1(e) {
  e.phase = "idle";
}
function v1(e) {
  return gt(e) ? `${e.__code}` : Ne(e) ? `${e.__marker} "${e.__number}"` : D(e) ? `${e.__marker}` : ys(e) ? `${e.__marker} "${e.__number}"` : vt(e) ? `${e.__caller}` : Ln(e) ? `${e.__marker} "${e.__number}"` : K(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ne(e) ? `${e.__marker}` : v(e) ? `"${e.__text}"${M1(e)}` : _e(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : we(e) ? `${e.__marker} "${e.__number}"` : "";
}
function M1(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[gs]) : "";
}
function E1() {
  const [e] = ce();
  return /* @__PURE__ */ _(
    Yy,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: v1,
      editor: e
    }
  );
}
const Um = vf(null), bf = 4;
function A1({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Z(null), s = Mf(Um);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return z(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ _("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function P1({
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
      const h = n.indexOf(f) - 1;
      return n[h === -1 ? n.length - 1 : h];
    }) : d === "ArrowDown" && o((f) => f ? n[n.indexOf(f) + 1] : n[0]);
  }, l = je(() => ({ registerItem: a }), [a]);
  return z(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ _(Um.Provider, { value: l, children: /* @__PURE__ */ _("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function N1({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Z(null), c = Z(null), [l, u] = de(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return z(() => {
    const f = c.current, h = a.current;
    if (l && f !== null && h !== null) {
      const { top: m, left: p } = f.getBoundingClientRect();
      h.style.top = `${m + f.offsetHeight + bf}px`, h.style.left = `${Math.min(p, window.innerWidth - h.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), z(() => {
    const f = c.current;
    if (f !== null && l) {
      const h = (m) => {
        const p = m.target;
        o && a.current && a.current.contains(p) || f.contains(p) || u(!1);
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
        const h = c.current, m = a.current;
        if (h !== null && m !== null) {
          const { top: p } = h.getBoundingClientRect(), y = p + h.offsetHeight + bf;
          y !== m.getBoundingClientRect().top && (m.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ ke(bn, { children: [
    /* @__PURE__ */ ke(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => u(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ _("span", { className: i }),
          t && /* @__PURE__ */ _("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ _("i", { className: "chevron-down" })
        ]
      }
    ),
    l && yn(
      /* @__PURE__ */ _(P1, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const _c = {
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
}, Cc = {
  ..._c,
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
function O1({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ _(
    N1,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + w1(t),
      buttonLabel: q1(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(_c).map((n) => /* @__PURE__ */ ke(
        A1,
        {
          className: "item block-marker " + R1(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ _("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ _("span", { className: "text usfm_" + n, children: _c[n] })
          ]
        },
        n
      ))
    }
  );
}
function w1(e) {
  return e && e in Cc ? e : "ban";
}
function q1(e) {
  return e && e in Cc ? Cc[e] : "No Style";
}
function R1(e) {
  return e ? "active dropdown-item-active" : "";
}
function kf() {
  return /* @__PURE__ */ _("div", { className: "divider" });
}
const $1 = On(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ce(), [o, a] = de(s), [c, l] = de(), [u, d] = de(!1), [f, h] = de(!1), m = ge(
    ({
      canUndo: p,
      canRedo: y,
      blockMarker: k,
      contextMarker: C
    }) => {
      d(p), h(y), l(k), n?.({
        canUndo: p,
        canRedo: y,
        blockMarker: k,
        contextMarker: C
      });
    },
    [n]
  );
  return z(() => s.registerCommand(
    dr,
    (p, y) => (a(y), !1),
    Qe
  ), [s]), /* @__PURE__ */ ke(bn, { children: [
    /* @__PURE__ */ _(lg, { onStateChange: m }),
    /* @__PURE__ */ ke("div", { className: "toolbar", children: [
      /* @__PURE__ */ _(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(Rf, void 0);
          },
          title: Fs ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
          type: "button",
          className: "toolbar-item spaced",
          "aria-label": "Undo",
          children: /* @__PURE__ */ _("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ _(
        "button",
        {
          disabled: !f || r,
          onClick: () => {
            o.dispatchCommand($f, void 0);
          },
          title: Fs ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ _("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ _(kf, {}),
      o === s && /* @__PURE__ */ ke(bn, { children: [
        /* @__PURE__ */ _(
          O1,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ _(kf, {})
      ] }),
      /* @__PURE__ */ _("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), L1 = Ro(), I1 = {}, D1 = {};
function U1() {
  return /* @__PURE__ */ _("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
const Fm = On(function({
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
  const f = Z(null), h = Z(null), m = Z(null), p = Z(t), y = Z(void 0), k = Z(void 0), C = Z(void 0), S = Z(void 0), P = Z(!1), [E, j] = de(t), [M, R] = de(0), [$, re] = de(), {
    isReadonly: W = !1,
    structureProtectionMode: Se = "off",
    hasExternalUI: ee = !1,
    hasSpellCheck: Re = !1,
    textDirection: ye = "ltr",
    markerMenuTrigger: tr = "\\",
    view: Ke,
    nodes: $r,
    debug: Lr = !1,
    contextMenu: sn,
    styleInfo: Y,
    markerSettleDelayMs: A
  } = c ?? D1, H = Ke ?? L1, ue = as(H) && (H.markerMode !== "hidden" || !H.hasSpacing || H.hasGutterParaMarkers || H.hasActiveTextFocusBox) ? {
    ...H,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : H, ve = Z(ue);
  qt(ve.current, ue) || (ve.current = ue);
  const X = ve.current, Ce = je(() => $r ?? I1, [$r]), yr = je(() => sn, [sn]), wt = je(
    () => sx(Y ?? Ys),
    [Y]
  ), on = Z(l);
  qt(on.current, l) || (on.current = l);
  const We = on.current, le = as(X), mt = W || le, xe = ue !== H;
  z(() => {
    le && !W && We?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), xe && We?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), X?.markerMode === "visible" && !W && We?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [le, W, xe, We, X?.markerMode]);
  const br = Z(null), Pe = je(() => {
    if (X.markerMode !== "editable") return;
    const q = Y ?? Ys;
    return {
      getContext: () => br.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (B) => iE(
        q,
        B,
        Ce.extraValidMarkers
      ),
      getEnterItems: (B) => sE(
        q,
        B,
        Ce.extraValidMarkers
      ),
      apply: (B, G) => {
        const Q = br.current;
        Q && (G.trigger === "enter" ? Q.splitParagraphWithMarker(B.marker) : Q.applyMarkerMenuSelection(B, G));
      },
      commitTypedCloser: (B) => {
        br.current?.commitTypedCloser(B);
      }
    };
  }, [X, Y, Ce.extraValidMarkers]), kr = (q) => {
    P.current || (P.current = !0, on.current?.warn(
      `Editor: cannot ${q} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, _i = (q) => {
    if (le)
      throw new Error(
        `Cannot ${q} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, yt = (q) => {
    if (_i(q), mt) throw new Error(`Cannot ${q} in readonly mode`);
  }, xs = je(
    () => ({
      namespace: "platformEditor",
      theme: { ...Rg, showCharMarkerTitles: X.showCharMarkerTitles },
      editable: !mt,
      editorState: void 0,
      // Handling of errors during update
      onError(q) {
        throw q;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [tt, ...le ? y_ : pl]
    }),
    [mt, le, X.showCharMarkerTitles]
  );
  Ls.initialize(We);
  function Tr(q) {
    if (q !== void 0 && !MM(q, Ce.extraValidMarkers))
      throw new Error(`Unsupported character marker '${q}'`);
  }
  const Dn = ge(() => {
    const q = f.current;
    if (!q) return p.current;
    const B = Fu(q), G = k.current;
    if ((!B || B.size === 0) && !G) return p.current;
    const Q = q.getEditorState(), Me = Q.toJSON();
    return Q.read(
      () => f1(
        Me,
        B ?? /* @__PURE__ */ new Set(),
        { viewOptions: X, getMarker: wt, logger: We },
        G,
        C.current
      )
    ) ?? p.current;
  }, [X, wt, We]), Ci = {
    focus() {
      f.current?.focus();
    },
    isFocused() {
      const q = f.current?.getRootElement();
      return !!q && q.ownerDocument.activeElement === q;
    },
    undo() {
      f.current?.dispatchCommand(Rf, void 0);
    },
    redo() {
      f.current?.dispatchCommand($f, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      yt("cut"), f.current && Cl(f.current);
    },
    copy() {
      f.current && _l(f.current);
    },
    paste() {
      yt("paste"), f.current && Sl(f.current);
    },
    pastePlainText() {
      yt("paste as plain text"), f.current && vl(f.current);
    },
    getUsj() {
      return Dn();
    },
    commitPendingMarkerEdits() {
      f.current?.update(
        () => {
          f.current?.dispatchCommand(Em, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(q) {
      if (!q) {
        k.current = void 0;
        return;
      }
      const B = f.current?.getEditorState().read(() => {
        const G = w();
        return N(G) && G.isCollapsed() ? G.focus.key : void 0;
      });
      k.current = { input: q, nodeKey: B ?? C.current?.key };
    },
    setUsj(q) {
      if (!qt(p.current, q)) {
        p.current = q, k.current = void 0;
        const B = qt(E, q);
        j(q), B && R((G) => G + 1);
      }
    },
    applyUpdate(q, B = "remote") {
      if (le && B === "remote") {
        on.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      _i("apply an update"), f.current?.update(
        () => {
          B === "remote" && Wr(Ji), B_(q, X, Ce, We);
        },
        { discrete: !0 }
      );
      const G = f.current?.getEditorState();
      if (!G) return;
      const Q = Ls.deserializeEditorState(G, X);
      if (Q) {
        const Me = !qt(p.current, Q);
        if (Me && (p.current = Q), Me || !qt(E, Q)) {
          const Xe = Qu(q, G, "apply");
          S.current = Q, s?.(Q, q, B, Xe);
        }
      }
    },
    replaceEmbedUpdate(q, B) {
      const G = f.current?.read(() => Ox(q, B));
      G ? this.applyUpdate(G) : l?.warn(
        `replaceEmbedUpdate: no embed found for key "${q}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (le) {
        kr("get the selection");
        return;
      }
      return f.current?.read(dl);
    },
    getSelectedParaMarker() {
      return f.current?.getEditorState().read(() => {
        const q = It(w())?.getParent();
        return ne(q) ? q.getMarker() : void 0;
      });
    },
    setSelection(q) {
      if (le) {
        kr("set the selection");
        return;
      }
      f.current?.update(() => {
        const B = qo(q);
        B !== void 0 && (kn(B), Wr(Hf));
      });
    },
    setAnnotation(q, B, G, Q, Me) {
      if (le) {
        kr("set an annotation");
        return;
      }
      let Xe, Mt, an, Si;
      typeof Q == "function" || Q === void 0 ? (Xe = Q, Mt = Me) : (Xe = Q.onClick, Mt = Q.onRemove, an = Q.onMouseEnter, Si = Q.onMouseLeave), h.current?.setAnnotation(
        q,
        Au(B),
        G,
        Xe,
        Mt,
        an,
        Si
      );
    },
    removeAnnotation(q, B) {
      h.current?.removeAnnotation(Au(q), B);
    },
    formatPara(q) {
      yt("format a paragraph"), f.current?.update(
        () => {
          const B = w(), G = It(B)?.getParent();
          if (ne(G)) {
            mc(G, q, X);
            return;
          }
          if (!N(B)) {
            l?.warn(
              `formatPara refused: no range selection or selected paragraph marker to retag with "${q}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          Zy(B, () => Zi(q));
          const Q = w();
          if (!N(Q)) return;
          const Me = /* @__PURE__ */ new Set();
          Q.getNodes().forEach((Xe) => {
            const Mt = Xe.getTopLevelElement();
            ne(Mt) && Me.add(Mt);
          }), Me.forEach((Xe) => mc(Xe, q, X));
        },
        { discrete: !0 }
      );
    },
    getElementByKey(q) {
      return f.current?.read(
        () => f.current?.getElementByKey(q) ?? void 0
      );
    },
    removeCharacterMarker(q) {
      if (mt) throw new Error("Cannot remove character marker in readonly mode");
      Tr(q);
      let B = !1;
      return f.current?.update(
        () => {
          const G = w();
          N(G) && (B = Ag(G, q, X));
        },
        { discrete: !0 }
      ), B;
    },
    replaceCharacterMarker(q, B) {
      if (mt) throw new Error("Cannot replace character marker in readonly mode");
      Tr(q), Tr(B);
      let G = !1;
      return f.current?.update(
        () => {
          const Q = w();
          N(Q) && (G = DM(Q, q, B));
        },
        { discrete: !0 }
      ), G;
    },
    extendCharacterMarker(q, B) {
      if (mt) throw new Error("Cannot extend character marker in readonly mode");
      Tr(q), B?.forEach(
        (Q) => Tr(Q)
      );
      let G = !1;
      return f.current?.update(
        () => {
          const Q = w();
          N(Q) && (G = UM(
            Q,
            q,
            B,
            X
          ));
        },
        { discrete: !0 }
      ), G;
    },
    insertMarker(q) {
      if (mt) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!f.current) return;
      if (!cc(q, Ce.extraValidMarkers))
        throw new Error(`Unsupported marker '${q}'`);
      const B = lc(
        q,
        y,
        X,
        Ce,
        We,
        void 0,
        Y
      );
      return B.action({ editor: f.current, reference: r }), B.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!W)
        return f.current?.getEditorState().read(() => GE());
    },
    applyMarkerMenuSelection(q, B) {
      if (W) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!f.current) return;
      if (q.kind !== "closeTag" && !cc(q.marker, Ce.extraValidMarkers))
        throw new Error(`Unsupported marker '${q.marker}'`);
      let G;
      return f.current.update(() => {
        G = ZE(q, B, r, {
          expandedNoteKeyRef: y,
          viewOptions: X,
          nodeOptions: Ce,
          logger: l,
          styleInfo: Y
        });
      }), G;
    },
    splitParagraphWithMarker(q) {
      if (W) throw new Error("Cannot split paragraph in readonly mode");
      f.current && f.current.update(() => {
        um(q, X);
      });
    },
    commitTypedMarker(q, B) {
      if (W) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!f.current) return !1;
      let G = !1;
      return f.current.update(() => {
        G = QE(q, B), G || l?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), G;
    },
    commitTypedCloser(q) {
      if (W) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!f.current) return !1;
      let B = !1;
      return f.current.update(() => {
        B = lm(q), B || l?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), B;
    },
    insertNote(q, B, G) {
      yt("insert a note"), f.current?.update(
        () => {
          const Q = Ph(
            q,
            B,
            G,
            r,
            X,
            Ce,
            We
          );
          Q && !Q.getIsCollapsed() && (y.current = Q.getKey());
        },
        { discrete: !0 }
      );
    },
    selectNote(q) {
      f.current?.update(() => {
        const B = id(q);
        B && (h_(B, X), B.getIsCollapsed() || (y.current = B.getKey()));
      });
    },
    getNoteOps(q) {
      return f.current?.read(() => {
        const B = id(q);
        if (B)
          return ll(B);
      });
    },
    get toolbarEndRef() {
      return m;
    }
  };
  br.current = Ci, vc(d, () => Ci), z(() => {
    const q = f.current;
    if (q)
      return q.registerUpdateListener(({ editorState: B }) => {
        B.read(() => {
          const G = w();
          if (!N(G) || !G.isCollapsed()) return;
          const Q = G.focus.getNode();
          v(Q) && (C.current = { key: Q.getKey(), offset: G.focus.offset });
        });
      });
  }, []);
  const rr = ge(
    (q, B, G, Q) => {
      if (le) return;
      const Me = Ls.deserializeEditorState(q, X);
      if (Me) {
        const Xe = !qt(p.current, Me);
        if (Xe && (p.current = Me), Xe || !qt(E, Me)) {
          const Mt = Qu(Q, q);
          S.current = Me, s?.(Me, Q, "local", Mt);
        }
      }
    },
    [E, s, X, le]
  );
  z(() => {
    const q = f.current;
    if (!(!q || !s))
      return q.registerUpdateListener(({ tags: B, dirtyElements: G, dirtyLeaves: Q }) => {
        !B.has(qc) && (G.size === 0 && Q.size === 0 || B.has(Ji) || !Fu(q)?.size) || queueMicrotask(() => {
          const Me = Dn();
          !Me || qt(S.current, Me) || (S.current = Me, s(Me, void 0, "local", void 0));
        });
      });
  }, [s, Dn]);
  const Bt = ge(
    (q) => {
      re(q.contextMarker), o?.(q);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ ke(Df, { initialConfig: xs, children: [
      /* @__PURE__ */ _(XC, { isEditable: !mt }),
      /* @__PURE__ */ ke("div", { className: "editor-container", children: [
        ee ? /* @__PURE__ */ _(lg, { onStateChange: Bt }) : /* @__PURE__ */ _(
          "div",
          {
            className: "editor-toolbar-container" + (mt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ _(
              $1,
              {
                ref: m,
                editorRef: br,
                isReadonly: mt,
                onStateChange: Bt
              }
            )
          }
        ),
        /* @__PURE__ */ ke("div", { className: "editor-inner", children: [
          /* @__PURE__ */ _(Ff, { editorRef: f }),
          /* @__PURE__ */ _(
            Qy,
            {
              contentEditable: /* @__PURE__ */ _(
                Uf,
                {
                  className: `editor-input usfm ${j_(X).join(" ")}${X.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${X.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: Re
                }
              ),
              placeholder: /* @__PURE__ */ _(U1, {}),
              ErrorBoundary: zf
            }
          ),
          ee && /* @__PURE__ */ _(YC, {}),
          /* @__PURE__ */ _(Kf, {}),
          r && n && /* @__PURE__ */ _(g1, { scrRef: r, onScrRefChange: n }),
          r && !ee && /* @__PURE__ */ _(
            Sv,
            {
              trigger: tr,
              scrRef: r,
              contextMarker: $,
              getMarkerAction: (q) => lc(
                q,
                y,
                X,
                Ce,
                We,
                void 0,
                Y
              ),
              editableHarness: Pe
            }
          ),
          /* @__PURE__ */ _(
            eS,
            {
              scripture: E,
              scriptureRef: p,
              nodeOptions: Ce,
              editorAdaptor: Er,
              viewOptions: X,
              logger: We
            },
            M
          ),
          /* @__PURE__ */ _(TS, { onChange: i }),
          /* @__PURE__ */ _(
            I_,
            {
              onChange: rr,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Tb
            }
          ),
          /* @__PURE__ */ _(BM, { viewOptions: X }),
          /* @__PURE__ */ _($_, { ref: h, logger: We }),
          /* @__PURE__ */ _(kC, { viewOptions: X }),
          /* @__PURE__ */ _(qC, {}),
          /* @__PURE__ */ _(UC, {}),
          X?.markerMode !== "editable" && /* @__PURE__ */ _(FC, { logger: We }),
          /* @__PURE__ */ _(BC, { options: yr }),
          /* @__PURE__ */ _(JC, {}),
          /* @__PURE__ */ _(ZC, {}),
          /* @__PURE__ */ _(eA, {}),
          /* @__PURE__ */ _(
            GA,
            {
              viewOptions: X,
              getMarker: wt,
              logger: We,
              markerSettleDelayMs: A,
              structureProtectionMode: Se
            }
          ),
          X?.markerMode === "visible" && /* @__PURE__ */ _(r1, { viewOptions: X }),
          /* @__PURE__ */ _(
            e1,
            {
              styleInfo: Y,
              viewOptions: X,
              logger: We
            }
          ),
          /* @__PURE__ */ _(
            tS,
            {
              expandedNoteKeyRef: y,
              nodeOptions: Ce,
              viewOptions: X,
              logger: We
            }
          ),
          /* @__PURE__ */ _(kS, {}),
          /* @__PURE__ */ _(gC, {}),
          /* @__PURE__ */ _(lC, {}),
          /* @__PURE__ */ _(p1, { viewOptions: X, logger: We }),
          /* @__PURE__ */ _(
            vS,
            {
              onParaMarkerMenuRequest: a,
              structureProtectionMode: Se
            }
          ),
          /* @__PURE__ */ _(PS, {}),
          /* @__PURE__ */ _(dv, { structureProtectionMode: Se }),
          /* @__PURE__ */ _(fv, { textDirection: ye }),
          /* @__PURE__ */ _(hv, {}),
          /* @__PURE__ */ _(_v, {}),
          u
        ] }),
        Lr && /* @__PURE__ */ _(E1, {})
      ] })
    ] }, X.verseLayout ?? "inline")
  );
}), HP = On(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ _(Fm, { ref: r, ...i });
});
function zm() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function fo(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? zm() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function Km(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? zm() : r,
    quote: e,
    type: "thread"
  };
}
function Tf(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function F1(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Na(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class z1 {
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
    this._comments = t, Na(this);
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
          const c = Tf(a);
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
    this._comments = i, Na(this);
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
          const c = Tf(a);
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
    return this._comments = n, Na(this), t.type === "comment" ? {
      index: s,
      markedComment: F1(t)
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
    return t !== null ? t.doc.get("comments", gu) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new mu(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new gu();
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
      ft
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof gb) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const h of d) {
              const m = h.insert, p = h.retain, y = h.delete, k = u.parent, C = u === r ? void 0 : k instanceof mu && this._comments.find((S) => S.id === k.get("id"));
              if (Array.isArray(m)) {
                const S = f;
                m.slice().reverse().forEach((P) => {
                  const E = P.get("id"), M = P.get("type") === "thread" ? Km(
                    P.get("quote"),
                    P.get("comments").toArray().map(
                      (R) => fo(
                        R.get("content"),
                        R.get("author"),
                        R.get("id"),
                        R.get("timeStamp"),
                        R.get("deleted")
                      )
                    ),
                    E
                  ) : fo(
                    P.get("content"),
                    P.get("author"),
                    E,
                    P.get("timeStamp"),
                    P.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(M, C, S);
                  });
                });
              } else if (typeof p == "number")
                f += p;
              else if (typeof y == "number")
                for (let S = 0; S < y; S++) {
                  const P = C === void 0 || C === !1 ? this._comments[f] : C.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(P, C);
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
function K1(e) {
  const [t, r] = de(e.getComments());
  return z(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function j1({
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
  }, [n, e]), /* @__PURE__ */ _("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ ke("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
    /* @__PURE__ */ _("h2", { className: "Modal__title", children: r }),
    /* @__PURE__ */ _(
      "button",
      {
        className: "Modal__closeButton",
        "aria-label": "Close modal",
        type: "button",
        onClick: e,
        children: "X"
      }
    ),
    /* @__PURE__ */ _("div", { className: "Modal__content", children: t })
  ] }) });
}
function B1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return yn(
    /* @__PURE__ */ _(j1, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function jm() {
  const [e, t] = de(null), r = ge(() => {
    t(null);
  }, []), n = je(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ _(B1, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const V1 = {
  ...Rg,
  paragraph: "CommentEditorTheme__paragraph"
};
function W1(...e) {
  return e.filter(Boolean).join(" ");
}
function Zr({
  "data-test-id": e,
  children: t,
  className: r,
  onClick: n,
  disabled: i,
  small: s,
  title: o
}) {
  return /* @__PURE__ */ _(
    "button",
    {
      disabled: i,
      className: W1(
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
function H1({
  className: e
}) {
  return /* @__PURE__ */ _(Uf, { className: e || "ContentEditable__root" });
}
function G1({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ _("div", { className: t || "Placeholder__root", children: e });
}
const xf = qf("INSERT_INLINE_COMMAND");
function J1({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Z(null), s = ge(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return z(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), fs(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ _("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ _("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ _("i", { className: "icon add-comment" }) }) });
}
function Y1({ onEscape: e }) {
  const [t] = ce();
  return z(() => t.registerCommand(
    wc,
    (r) => e(r),
    ei
  ), [t, e]), null;
}
function Bm({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ _(Df, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: V1
  }, children: /* @__PURE__ */ ke("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ _(
      db,
      {
        contentEditable: /* @__PURE__ */ _(H1, { className: e }),
        placeholder: /* @__PURE__ */ _(G1, { children: s }),
        ErrorBoundary: zf
      }
    ),
    /* @__PURE__ */ _(ub, { onChange: n }),
    /* @__PURE__ */ _(Kf, {}),
    t !== !1 && /* @__PURE__ */ _(ab, {}),
    /* @__PURE__ */ _(Y1, { onEscape: r }),
    /* @__PURE__ */ _(cb, {}),
    i !== void 0 && /* @__PURE__ */ _(Ff, { editorRef: i })
  ] }) });
}
function Vm(e, t) {
  return ge(
    (r, n) => {
      r.read(() => {
        e(fb()), t(!pb(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function X1({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = Z(null), c = je(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Z(null), u = Hm(), d = ge(() => {
    e.getEditorState().read(() => {
      const p = w();
      if (N(p)) {
        l.current = p.clone();
        const y = p.anchor, k = p.focus, C = eb(
          e,
          y.getNode(),
          y.offset,
          k.getNode(),
          k.offset
        ), S = a.current;
        if (C !== null && S !== null) {
          const { left: P, bottom: E, width: j } = C.getBoundingClientRect(), M = tb(e, C);
          let R = M.length === 1 ? P + j / 2 - 125 : P - 125;
          R < 10 && (R = 10), S.style.left = `${R}px`, S.style.top = `${E + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const $ = M.length, { container: re } = c, W = c.elements, Se = W.length;
          for (let ee = 0; ee < $; ee++) {
            const Re = M[ee];
            let ye = W[ee];
            ye === void 0 && (ye = document.createElement("span"), W[ee] = ye, re.appendChild(ye));
            const Ke = `position:absolute;top:${Re.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${Re.left}px;height:${Re.height}px;width:${Re.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            ye.style.cssText = Ke;
          }
          for (let ee = Se - 1; ee >= $; ee--) {
            const Re = W[ee];
            re.removeChild(Re), W.pop();
          }
        }
      }
    });
  }, [e, c]);
  fs(() => {
    d();
    const p = c.container, y = document.body;
    return y !== null ? (y.appendChild(p), () => {
      y.removeChild(p);
    }) : () => {
    };
  }, [c.container, d]), z(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (p) => (p.preventDefault(), t(), !0), h = () => {
    if (s) {
      let p = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      p.length > 100 && (p = p.slice(0, 99) + "…"), r(
        Km(p, [fo(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, m = Vm(i, o);
  return /* @__PURE__ */ ke("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ _(
      Bm,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: m
      }
    ),
    /* @__PURE__ */ ke("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ _(Zr, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ _(
        Zr,
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
function Q1({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = Z(null), c = Hm(), l = Vm(i, o);
  return /* @__PURE__ */ ke(bn, { children: [
    /* @__PURE__ */ _(
      Bm,
      {
        className: "CommentPlugin_CommentsPanel_Editor",
        autoFocus: !1,
        onEscape: () => !0,
        onChange: l,
        editorRef: a,
        placeholder: r
      }
    ),
    /* @__PURE__ */ _(
      Zr,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(fo(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(Wy, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ _("i", { className: "send" })
      }
    )
  ] });
}
function Wm({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ ke(bn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ ke("div", { className: "Modal__content", children: [
      /* @__PURE__ */ _(
        Zr,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ _(
        Zr,
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
function _f({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = de(0);
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = jm();
  return /* @__PURE__ */ ke("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ ke("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ _("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ ke("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ _("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ ke(bn, { children: [
      /* @__PURE__ */ _(
        Zr,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ _(
              Wm,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: u
              }
            ));
          },
          className: "CommentPlugin_CommentsPanel_List_DeleteButton",
          children: /* @__PURE__ */ _("i", { className: "delete" })
        }
      ),
      c
    ] })
  ] });
}
function Z1({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ce(), [a, c] = de(0), [l, u] = jm(), d = je(
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
  }, [a]), /* @__PURE__ */ _("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const h = f.id;
    return f.type === "thread" ? /* @__PURE__ */ ke(
      "li",
      {
        onClick: () => {
          const p = s.get(h);
          if (p !== void 0 && (e === null || e.indexOf(h) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const k = Array.from(p)[0], C = oe(k);
                _e(C) && C.selectStart();
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
          /* @__PURE__ */ ke("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ ke("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ _("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ _(
              Zr,
              {
                onClick: () => {
                  u("Delete Thread", (p) => /* @__PURE__ */ _(
                    Wm,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: p
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ _("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ _("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((p) => /* @__PURE__ */ _(
            _f,
            {
              comment: p,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            p.id
          )) }),
          /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ _(
            Q1,
            {
              submitAddComment: i,
              thread: f,
              placeholder: "Reply to comment..."
            }
          ) })
        ]
      },
      h
    ) : /* @__PURE__ */ _(
      _f,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      h
    );
  }) });
}
function eP({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Z(null), o = r.length === 0;
  return /* @__PURE__ */ ke("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ _("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ _(
      Z1,
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
function Hm() {
  const e = jf(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function tP({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = jf(), [a] = ce(), c = je(() => {
    const R = new z1(a, s);
    return r && R.registerOnChange(r), t?.(R), R;
  }, [a, s, r, t]), l = K1(c), u = je(() => /* @__PURE__ */ new Map(), []), [d, f] = de(), [h, m] = de([]), [p, y] = de(!1), [k, C] = de(!1), { yjsDocMap: S } = o;
  z(() => {
    if (e) {
      const R = e("comments", S);
      return c.registerCollaboration(R);
    }
    return () => {
    };
  }, [c, e, S]);
  const P = ge(() => {
    a.update(() => {
      const R = w();
      R !== null && (R.dirty = !0);
    }), y(!1);
  }, [a]), E = ge(
    (R, $) => {
      if (R.type === "comment") {
        const re = c.deleteCommentOrThread(R, $);
        if (!re)
          return;
        const { markedComment: W, index: Se } = re;
        c.addComment(W, $, Se);
      } else {
        c.deleteCommentOrThread(R);
        const re = $ !== void 0 ? $.id : R.id, W = u.get(re);
        W !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const Se of W) {
              const ee = oe(Se);
              _e(ee) && (ee.deleteID(Br, re), ee.hasNoIDsForEveryType() && Bs(ee));
            }
          });
        });
      }
    },
    [c, a, u]
  ), j = ge(
    (R, $, re, W) => {
      c.addComment(R, re), $ && (a.update(() => {
        N(W) && ap(W, Br, R.id);
      }), y(!1));
    },
    [c, a]
  );
  z(() => {
    const R = [];
    let $;
    for (const re of h) {
      const W = u.get(re);
      if (W !== void 0)
        for (const Se of W) {
          const ee = a.getElementByKey(Se);
          ee !== null && (ee.classList.add("selected"), R.push(ee), $ = window.setTimeout(() => {
            C(!0);
          }, 0));
        }
    }
    return () => {
      $ !== void 0 && window.clearTimeout($);
      for (const re of R)
        re.classList.remove("selected");
    };
  }, [h, a, u]), z(() => {
    if (!a.hasNodes([tt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const R = /* @__PURE__ */ new Map();
    return Ue(
      If(
        a,
        tt,
        ($) => Xi($.getTypedIDs()),
        ($, re) => {
          for (const [W, Se] of Object.entries($.getTypedIDs()))
            Se.forEach((ee) => {
              re.addID(W, ee);
            });
        }
      ),
      a.registerMutationListener(
        tt,
        ($) => {
          a.getEditorState().read(() => {
            for (const [re, W] of $) {
              const Se = oe(re);
              let ee = [];
              W === "destroyed" ? ee = R.get(re) ?? [] : _e(Se) && (ee = Se.getTypedIDs()[Br] ?? []);
              for (const Re of ee) {
                let ye = u.get(Re);
                R.set(re, ee), W === "destroyed" ? ye !== void 0 && (ye.delete(re), ye.size === 0 && u.delete(Re)) : (ye === void 0 && (ye = /* @__PURE__ */ new Set(), u.set(Re, ye)), ye.has(re) || ye.add(re));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: $, tags: re }) => {
        $.read(() => {
          const W = w();
          let Se = !1, ee = !1;
          if (N(W)) {
            const Re = W.anchor.getNode();
            if (v(Re)) {
              const ye = tk(Re, Br, W.anchor.offset) ?? [];
              ye !== null && (m(ye), Se = !0), W.isCollapsed() || (f(Re.getKey()), ee = !0);
            }
          }
          Se || m((Re) => Re.length === 0 ? Re : []), ee || f(null), !re.has("collaboration") && N(W) && y(!1);
        });
      }),
      a.registerCommand(
        xf,
        () => {
          const $ = window.getSelection();
          return $ !== null && $.removeAllRanges(), y(!0), !0;
        },
        xn
      )
    );
  }, [a, u]);
  const M = () => {
    a.dispatchCommand(xf, void 0);
  };
  return /* @__PURE__ */ ke(bn, { children: [
    p && yn(
      /* @__PURE__ */ _(
        X1,
        {
          editor: a,
          cancelAddComment: P,
          submitAddComment: j
        }
      ),
      document.body
    ),
    d != null && !p && yn(
      /* @__PURE__ */ _(
        J1,
        {
          anchorKey: d,
          editor: a,
          showComments: k,
          onAddComment: M
        }
      ),
      document.body
    ),
    n !== null && yn(
      /* @__PURE__ */ _(
        Zr,
        {
          className: `CommentPlugin_ShowCommentsButton ${k ? "active" : ""}`,
          onClick: () => C(!k),
          title: k ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ _("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    k && yn(
      /* @__PURE__ */ _(
        eP,
        {
          comments: l,
          submitAddComment: j,
          deleteCommentOrThread: E,
          activeIDs: h,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function rP() {
  const e = Z(void 0), t = ge((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function nP(e, t) {
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
function iP(e, t) {
  z(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      nP(r, t);
    };
  }, [t, e]);
}
const GP = On(function(t, r) {
  const n = Z(null), i = Z(!0), s = Z(null), [o, a] = de(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: h, options: { isReadonly: m, view: p } = {} } = t, y = (m ?? !1) || as(p), [k, C] = rP();
  iP(f, k), z(() => {
    if (process.env.NODE_ENV !== "production") {
      const E = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      h?.warn(E), h || console.warn(E);
    }
  }, [h]), vc(r, () => ({
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
    applyUpdate(E, j) {
      n.current?.applyUpdate(E, j);
    },
    replaceEmbedUpdate(E, j) {
      return n.current?.replaceEmbedUpdate(E, j);
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
    setAnnotation(E, j, M, R, $) {
      typeof R == "function" || R === void 0 ? n.current?.setAnnotation(E, j, M, R, $) : n.current?.setAnnotation(E, j, M, R);
    },
    removeAnnotation(E, j) {
      n.current?.removeAnnotation(E, j);
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
    replaceCharacterMarker(E, j) {
      return n.current?.replaceCharacterMarker(E, j) ?? !1;
    },
    extendCharacterMarker(E, j) {
      return n.current?.extendCharacterMarker(E, j) ?? !1;
    },
    insertMarker(E) {
      return n.current?.insertMarker(E);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(E, j) {
      return n.current?.applyMarkerMenuSelection(E, j);
    },
    splitParagraphWithMarker(E) {
      n.current?.splitParagraphWithMarker(E);
    },
    commitTypedMarker(E, j) {
      return n.current?.commitTypedMarker(E, j) ?? !1;
    },
    commitTypedCloser(E) {
      return n.current?.commitTypedCloser(E) ?? !1;
    },
    insertNote(E, j, M) {
      n.current?.insertNote(E, j, M);
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
  const S = ge(
    (E, j, M, R) => {
      if (!u) return;
      const $ = k.current?.getComments();
      u(E, $, j, M, R);
    },
    [k, u]
  ), P = ge(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const E = k.current?.getComments();
    l(E);
  }, [k, i, l]);
  return z(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ _(lb, { children: /* @__PURE__ */ ke(Fm, { ref: n, onUsjChange: S, ...f, children: [
    /* @__PURE__ */ _(
      tP,
      {
        setCommentStore: C,
        onChange: P,
        showCommentsContainerRef: y ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ _("div", { ref: s, className: "comment-container" })
  ] }) });
});
function mn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function sP(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function oP(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const aP = /^[#\w().,%/\s-]+$/;
function xr(e) {
  return e != null;
}
const cP = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, lP = {
  left: "right",
  right: "left"
}, uP = "var(--usj-font-fallback, serif)";
function Gm(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${sP(i)}"`).join(", ")}, ${uP}`;
}
const Sc = ".editor-input.usfm", dP = /^[\w.#[\]="':()>+~*,\s-]+$/;
function fP(e) {
  return dP.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Sc}".`
  ), Sc);
}
function pP(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(Gm(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (aP.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), xr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), xr(t.firstLineIndent) && s.push(`text-indent: ${mn(t.firstLineIndent * 20 * r)}vw`), xr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${mn(t.leftMargin * 20 * r)}vw`), xr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${mn(t.rightMargin * 20 * r)}vw`
  ), xr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${mn(t.spaceBefore * r)}pt`), xr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${mn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = cP[n ? lP[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Cf = { c: 150, ca: 133, cp: 150 };
function Sf(e, t) {
  return e && xr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function hP(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && xr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Sf(e.markers.c, Cf.c);
  return ["ca", "cp"].map((i) => {
    const s = Sf(
      e.markers[i],
      Cf[i]
    ), o = mn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function JP(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Sc } = t, s = fP(i), o = [], a = [];
  e.defaultFont && a.push(Gm(e.defaultFont)), xr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${mn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = pP(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${oP(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...hP(e, s)), o.join(`
`);
}
export {
  Ih as BLOCK_VERSE_VIEW_MODE,
  T as CategoryType,
  HP as Editorial,
  Gi as GENERATOR_NOTE_CALLER,
  Vf as HIDDEN_NOTE_CALLER,
  GP as Marginal,
  b as MarkerType,
  Lh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  ml as STANDARD_VIEW_MODE,
  Ys as defaultStyleInfo,
  WP as directionToNames,
  M_ as filterAndRankItems,
  JP as generateUsjCss,
  BP as getDefaultViewMode,
  Ro as getDefaultViewOptions,
  sE as getEnterMenuItems,
  iE as getMarkerMenuItems,
  VP as getViewMode,
  kl as getViewOptions,
  as as isBlockVerseLayout,
  Kr as isInsertEmbedOpOfType,
  U_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
