import { jsx as C, jsxs as Te, Fragment as gn } from "react/jsx-runtime";
import { forwardRef as En, useState as de, useRef as Z, useCallback as he, useEffect as z, useMemo as ze, memo as ay, createContext as yf, useContext as bf, Children as cy, isValidElement as ly, cloneElement as uy, useImperativeHandle as bc, useLayoutEffect as ds } from "react";
import { assertSafeKey as He, isValidBookCode as dy, MARKER_OBJECT_PROPS as fy, USJ_VERSION as br, USJ_TYPE as kr, isUsjTextContentLocation as py, indexesFromUsjJsonPath as kf, isUsjAttributeKeyLocation as hy, isUsjAttributeMarkerLocation as gy, isUsjClosingAttributeMarkerLocation as my, isUsjMarkerLocation as yy, isUsjClosingMarkerLocation as by, isUsjPropertyValueLocation as ky, getUsjDocumentLocationTypeName as Ty, usjJsonPathFromIndexes as on, EMPTY_USJ as Tf } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as je, $parseSerializedNode as ho, DecoratorNode as fs, ElementNode as er, isHTMLElement as An, createState as go, $getState as ne, $setState as kt, $isRangeSelection as P, $isElementNode as F, $isTextNode as v, $getSelection as w, $isNodeSelection as kc, ParagraphNode as Tc, TextNode as Ke, $createTextNode as pe, $getCommonAncestor as xy, $isLineBreakNode as ps, NODE_STATE_KEY as hs, $getEditor as ui, $hasUpdateTag as _y, $getNodeByKey as se, $getRoot as Fe, $createRangeSelection as xc, $createPoint as au, $getCharacterOffsets as _c, KEY_DOWN_COMMAND as vr, COMMAND_PRIORITY_HIGH as Ne, HISTORY_MERGE_TAG as xf, CLICK_COMMAND as mo, COMMAND_PRIORITY_EDITOR as mn, isDOMNode as _f, $getNearestNodeFromDOMNode as di, CONTROLLED_TEXT_INSERTION_COMMAND as Us, PASTE_COMMAND as cr, COMMAND_PRIORITY_CRITICAL as xt, CUT_COMMAND as yn, DROP_COMMAND as Cc, DELETE_CHARACTER_COMMAND as Cy, DELETE_WORD_COMMAND as Sy, DELETE_LINE_COMMAND as vy, $isDecoratorNode as yo, COPY_COMMAND as bo, COMMAND_PRIORITY_LOW as dt, COMMAND_PRIORITY_NORMAL as Yn, SELECTION_CHANGE_COMMAND as dr, getDOMSelection as My, isSelectionWithinEditor as Ey, $createRangeSelectionFromDom as Ay, $setSelection as ei, isDOMTextNode as Py, BLUR_COMMAND as Sc, $addUpdateTag as Br, SKIP_DOM_SELECTION_TAG as Ny, CLEAR_HISTORY_COMMAND as Oy, $getPreviousSelection as wy, $isRootOrShadowRoot as qy, CAN_UNDO_COMMAND as Ry, CAN_REDO_COMMAND as $y, DRAGSTART_COMMAND as Ly, $createNodeSelection as Cf, getDOMSelectionFromTarget as Iy, $onUpdate as Dy, KEY_ENTER_COMMAND as Sf, LineBreakNode as vf, $copyNode as Uy, FOCUS_COMMAND as Fy, $isRootNode as zy, INSERT_PARAGRAPH_COMMAND as Ui, KEY_ESCAPE_COMMAND as Mf, createCommand as Ef, INSERT_LINE_BREAK_COMMAND as Ky, HISTORIC_TAG as vc, createEditor as jy, UNDO_COMMAND as Af, REDO_COMMAND as Pf, CLEAR_EDITOR_COMMAND as By } from "lexical";
import { addClassNamesToElement as Fn, removeClassNamesFromElement as Qo, $findMatchingParent as Ze, $dfsIterator as Nf, $dfs as fi, mergeRegister as Ve, registerNestedElementResolver as Of, $unwrapNode as Ea, IS_APPLE as Fs } from "@lexical/utils";
import { useLexicalNodeSelection as Vy } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as qt } from "fast-equals";
import Ri from "quill-delta";
import { useLexicalComposerContext as ce } from "@lexical/react/LexicalComposerContext";
import { $getLexicalContent as Wy, copyToClipboard as Hy } from "@lexical/clipboard";
import { TreeView as Gy } from "@lexical/react/LexicalTreeView";
import * as Jy from "react-dom";
import { createPortal as hn } from "react-dom";
import { LexicalComposer as wf } from "@lexical/react/LexicalComposer";
import { ContentEditable as qf } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Rf } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as $f } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Lf } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Yy } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as Xy, createDOMRange as Qy, createRectsFromDOMRange as Zy } from "@lexical/selection";
import { autoUpdate as eb, computePosition as tb, shift as rb, flip as nb } from "@floating-ui/dom";
import { $generateNodesFromDOM as ib } from "@lexical/html";
import { AutoFocusPlugin as sb } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as ob } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as If, LexicalCollaboration as ab } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as cb } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as lb } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as ub, $isRootTextContentEmpty as db } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as fb } from "@lexical/yjs";
import { Array as cu, Map as lu, YArrayEvent as pb } from "yjs";
const Zo = (e) => je(ho(e)), hb = {
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
function Df(e) {
  return hb[e];
}
const L = " ", zs = "​", Ut = L, Mc = `${L}|`, Ht = "p", Wi = "+", Uf = "-", Ks = "chapter", Aa = "verse", uu = "invalid", gb = "text-spacing", mb = "formatted-font", yb = "marker-", Ff = "external-usj-mutation", zf = "selection-change", Vr = "cursor-change", Pa = "annotation-change", Hi = "delta-change", Kf = "marker-settle", bb = [
  Ff,
  zf,
  Vr,
  Pa,
  Hi
], bn = "zmsc-s", Xn = "zmsc-e", kb = [bn, Xn], Tb = [
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
  bn,
  Xn
], jf = 1, Ec = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], xb = Ec.filter((e) => e !== "sid" && e !== "eid");
class Yt extends fs {
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
    return Vf().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Tb.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: jf
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Bf(e) {
  return kb.includes(e);
}
function Vf(e, t, r, n, i) {
  return je(new Yt(e, t, r, n, void 0, i));
}
function Be(e) {
  return e instanceof Yt;
}
const Ac = "f", _b = [
  // Footnote
  Ac,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function $i(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const Cb = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Wf = 1;
class Ae extends er {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Ac, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? ($i(t) === "crossref" ? Uf : Wi), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Ae(r, n, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => vb(t) ? {
        conversion: Sb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Pc().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (_b.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", $i(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", $i(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && An(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", $i(this.getMarker()))), { element: r };
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
      version: Wf
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
function Sb(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Pc(t, r, n) };
}
function Pc(e, t, r, n, i) {
  return je(new Ae(e, t, r, n, i));
}
function vb(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Ae.isValidMarker(t) && e.classList.contains(Ae.getType());
}
function j(e) {
  return e instanceof Ae;
}
var T;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(T || (T = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const Na = {
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
}, an = {
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
}, du = {
  p: { children: an },
  q: { children: an },
  q1: { children: an },
  q2: { children: an },
  q3: { children: an },
  q4: { children: an },
  b: { children: an },
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
  const t = Object.hasOwn(Na, e) ? Na[e] : void 0, r = Object.hasOwn(du, e) ? du[e] : void 0;
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
const Hf = "v", Gf = "c", cn = "fig", fu = "tr", Oa = "esb", Jf = "esbe", pu = "periph", hu = "alt", gu = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Mb = {
  "": "start",
  c: "center",
  r: "end"
};
function mu(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function yu(e) {
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
const Eb = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Ab(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === zs && s + 1 < e.length && yu(e[s + 1]) || (yu(o) ? (r || (i = t.length, t += o), r = !0) : Eb.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function Pb(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function Nb(e, t) {
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
const Ob = /^(?:qt[1-5]?|ts)-[se]$/;
function Nc(e) {
  return Ob.test(e) || Bf(e);
}
function ea(e, t) {
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
function wb(e, t, r) {
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
      a(Ab(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: u } = Nb(e, i + 1);
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
    if (l === Hf) {
      const { word: g, next: y } = ea(e, i);
      i = y, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === Gf) {
      const { word: g, next: y } = ea(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, m = t(p)?.type;
    if (m === b.Note || m === void 0 && Ae.isValidMarker(l)) {
      const { word: g, next: y } = ea(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (m === b.Milestone || m === void 0 && Nc(l)) {
      const g = Fb(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const y = e.indexOf("\\", i), k = y === -1 ? e.length : y;
        o(e.slice(c, k)), i = k;
      }
      continue;
    }
    m === b.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : m === b.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : js(p) ? (d(), js(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Oa || l === Jf ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const bu = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function js(e) {
  return Object.hasOwn(bu, e) ? bu[e] : void 0;
}
function qb(e) {
  return js(e) !== void 0;
}
const Rb = /([-\w]+)\s*=\s*"(.*?)"/g, $b = /[\s\u200B]*[\n\r][\s\u200B]*/g, Yf = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function ko(e) {
  return Yf[e];
}
const Lb = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Ib(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function Gi(e, t, r = Yf[t]) {
  const n = e.replace($b, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Rb)];
  if (s.length > 0) {
    if (!Ib(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      Lb.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function To(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Db(e) {
  const t = Mr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function Ub(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = Gi(e.slice(n + 1, i), r, To(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Fb(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Gi(s.slice(o + 1), r, To(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = Ub(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function ar(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", L);
}
function Ir(e) {
  return e.content || (e.content = []), e.content;
}
function Mr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, d;
  const f = () => u ? Ir(u) : d ? Ir(d) : r;
  let p = !1;
  const m = () => {
    if (s)
      return o.length > a ? Ir(o[o.length - 1].object) : Ir(s);
    if (o.length > 0)
      return Ir(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return f();
      i = { type: "para", marker: Ht, content: [] }, f().push(i);
    }
    return Ir(i);
  }, g = (te) => {
    const E = m();
    typeof te == "string" && typeof E[E.length - 1] == "string" ? E[E.length - 1] = E[E.length - 1] + te : E.push(te);
  }, y = (te) => {
    for (let E = te; E < o.length; E += 1) {
      const Y = o[E].object;
      Y.closed = "false";
    }
  }, k = () => {
    y(0), o.length = 0;
  }, _ = (te) => {
    s && (o.length > a && (y(a), o.length = a), a = 0, te || (s.closed = "false"), s = void 0);
  }, S = () => {
    c = void 0, l = void 0;
  }, N = (te, E, Y) => {
    k();
    const [, le, W, xe] = Y, gt = {
      type: "table:cell",
      marker: xe ? E.slice(0, E.indexOf("-")) : E,
      align: Mb[le],
      content: []
    };
    xe && (gt.colspan = String(Number(xe) + 1 - Number(W))), Ir(te).push(gt), i = gt;
  }, A = (te) => {
    u && (te || (u.closed = "false"), u = void 0);
  }, B = () => {
    d = void 0;
  };
  let M, q = "", $;
  const J = () => {
    q && g(ar(q)), q = "";
  }, Q = (te = !1) => {
    M?.type === "sidebar" ? q = "" : te && q.endsWith(`
`) && (q = q.slice(0, -1)), M = void 0, J();
  }, Ee = () => {
    if (!$)
      return;
    const te = { type: "char", marker: $.marker, content: [] };
    $.value && (te.content = [ar($.value)]), m().push(te), o.push({ object: te }), $ = void 0;
  }, re = (te, E) => {
    p = !1, S(), k(), _(!1), i = { type: "para", marker: te, content: [] }, E && (i.content = [ar(E)]), f().push(i);
  }, qe = () => {
    $ && (re($.marker, $.value), $ = void 0);
  };
  let be;
  const rr = (te) => {
    if (!be)
      return;
    let { value: E } = be;
    be = void 0, te && E.endsWith(`
`) && (E = E.slice(0, -1));
    const Y = E.indexOf("|"), le = Y >= 0 ? Gi(E.slice(Y + 1), pu) : void 0, W = Y >= 0 ? E.slice(0, Y) : E, xe = Y >= 0 && (!le || !!W && !!le[hu]), gt = xe ? void 0 : le, Kt = xe ? E : W, mt = {
      type: "periph",
      ...Kt ? { [hu]: ar(Kt) } : {},
      ...gt
    };
    mt.content = [], f().push(mt), d = mt, i = void 0;
  };
  let Re;
  const tn = () => {
    if (Re) {
      if (Re.shape === "para")
        re(cn, Re.value);
      else {
        const te = { type: "char", marker: cn, content: [] };
        Re.value && (te.content = [ar(Re.value)]), m().push(te), o.push({ object: te });
      }
      Re = void 0;
    }
  }, mr = wb(e, t?.getMarker ?? ur, n);
  for (let te = 0; te < mr.length; te++) {
    const E = mr[te];
    if ($) {
      if (E.kind === "text") {
        $.value += E.text;
        continue;
      }
      if ($.shape === "char" && E.kind === "end" && E.marker.replace(/^\+/, "") === $.marker) {
        if ($.value.trim() === "") {
          m().push({ type: "char", marker: $.marker, content: [] }), $ = void 0, Q();
          continue;
        }
        Object.assign($.target, {
          [$.attrName]: ar($.value.trim())
        });
        const Y = $.marker;
        if ($ = void 0, Y === "ca") {
          const le = mr[te + 1];
          le?.kind === "text" && /^[\s\u200B]*$/.test(le.text) && te++;
        }
        continue;
      }
      if ($.shape === "para" && (E.kind === "para" || E.kind === "chapter")) {
        const Y = $.value.replace(/[\s\u200B]+$/, "");
        Y === "" ? (re($.marker), $ = void 0) : (Object.assign($.target, { [$.attrName]: ar(Y) }), $ = void 0);
      } else {
        M = void 0, (E.kind === "para" || E.kind === "chapter") && $.value.endsWith(`
`) && ($.value = $.value.slice(0, -1)), $.shape === "para" ? qe() : Ee(), te--;
        continue;
      }
    }
    if (be) {
      if (E.kind === "text" || E.kind === "optbreak") {
        be.value += E.kind === "text" ? E.text : "//";
        continue;
      }
      rr(E.kind === "para" || E.kind === "chapter"), te--;
      continue;
    }
    if (Re) {
      if (E.kind === "text" || E.kind === "optbreak") {
        Re.value += E.kind === "text" ? E.text : "//";
        continue;
      }
      if (E.kind === "end" && E.marker.replace(/^\+/, "") === cn) {
        const Y = Re.value.indexOf("|"), le = Y >= 0 ? Gi(Re.value.slice(Y + 1), cn) : void 0;
        if (le) {
          const W = {};
          for (const [Kt, mt] of Object.entries(le))
            W[Kt === "src" ? "file" : Kt] = mt;
          const xe = {
            type: "figure",
            marker: cn,
            ...W
          }, gt = Re.value.slice(0, Y);
          gt && (xe.content = [ar(gt)]), g(xe), Re = void 0;
          continue;
        }
      }
      tn(), te--;
      continue;
    }
    if (M)
      if (E.kind === "text") {
        if (E.text.includes(`
`) && /^[\s\u200B]*$/.test(E.text)) {
          q += E.text;
          continue;
        }
        Q();
      } else if (E.kind === "charOpen" || E.kind === "para") {
        const Y = E.kind === "para" || !E.isNested ? js(E.marker) : void 0;
        if (Y && Y.targetTypes.includes(M.type)) {
          q = "", $ = {
            target: M,
            attrName: Y.attrName,
            marker: E.marker,
            shape: Y.shape,
            value: ""
          };
          continue;
        }
        Q(E.kind === "para");
      } else
        Q(E.kind === "chapter");
    if (!s && !n && (E.kind === "charOpen" && !E.isNested && E.marker === cn || E.kind === "para" && E.marker === cn)) {
      k(), Re = { shape: E.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (E.kind) {
      case "text": {
        let Y = E.text;
        if (!s && Y.endsWith(`
`)) {
          const le = mr[te + 1];
          (le === void 0 || le.kind === "para" || le.kind === "chapter") && (Y = Y.slice(0, -1));
        }
        Y && g(ar(Y));
        break;
      }
      case "para": {
        const Y = !s && !n;
        if (Y && E.marker === fu) {
          k(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: fu, content: [] }, Ir(c).push(l), i = l, p = !1;
          break;
        }
        if (Y && l) {
          const le = gu.exec(E.marker);
          if (le && mu(le)) {
            N(l, E.marker, le);
            break;
          }
        }
        if (S(), !n && E.marker === Oa) {
          k(), _(!1), A(!1);
          const le = {
            type: "sidebar",
            marker: Oa,
            content: []
          };
          f().push(le), u = le, i = void 0, M = u, p = !1;
          break;
        }
        if (E.marker === Jf && u) {
          k(), _(!1), A(!0), i = void 0;
          break;
        }
        if (!n && E.marker === pu) {
          k(), _(!1), A(!1), B(), be = { value: "" }, i = void 0, p = !1;
          break;
        }
        re(E.marker);
        break;
      }
      case "verse": {
        _(!1);
        const Y = { type: "verse", marker: Hf, number: E.number };
        g(Y), M = Y;
        break;
      }
      case "chapter": {
        k(), _(!1), S(), A(!1), B(), i = void 0;
        const Y = {
          type: "chapter",
          marker: Gf,
          number: E.number
        };
        r.push(Y), M = Y, p = !0;
        break;
      }
      case "note": {
        _(!1);
        const Y = m();
        s = { type: "note", marker: E.marker, caller: E.caller, content: [] }, a = o.length, Y.push(s), M = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !E.isNested) {
          const W = gu.exec(E.marker);
          if (W && mu(W)) {
            N(l, E.marker, W);
            break;
          }
        }
        if (!E.isNested) {
          const W = s ? a : 0;
          y(W), o.length = W;
        }
        const Y = m(), le = { type: "char", marker: E.marker, content: [] };
        Y.push(le), o.push({ object: le });
        break;
      }
      case "end": {
        const Y = E.marker.replace(/^\+/, ""), le = s ? a : 0, W = o.findLastIndex((xe, gt) => gt >= le && xe.object.marker === Y);
        W >= 0 ? (zb(o[W].object), y(W + 1), o.length = W) : s && s.marker === Y ? _(!0) : (y(le), o.length = le, g({ type: "unmatched", marker: `${E.marker}*` }));
        break;
      }
      case "milestone":
        g({ type: "ms", marker: E.marker, ...E.attributes });
        break;
      case "optbreak":
        g({ type: "optbreak" });
        break;
    }
  }
  if (be && rr(!0), Re && tn(), $)
    if ($.shape === "para") {
      const te = $.value.replace(/[\s\u200B]+$/, "");
      te === "" ? re($.marker) : Object.assign($.target, { [$.attrName]: ar(te) }), $ = void 0;
    } else
      $.value.endsWith(`
`) && ($.value = $.value.slice(0, -1)), Ee();
  k(), _(!1), A(!1);
  const Mt = (te) => {
    for (const E of te)
      typeof E != "string" && E.content && (Mt(E.content), E.content.length === 0 && delete E.content);
  };
  return Mt(r), r;
}
function zb(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = Gi(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const kn = go("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Wr = go("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), oe = go("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), pr = "marker-trailing-space", Xf = 1, Kb = "marker", Oc = go("isGutterMarker", {
  parse: (e) => e === !0
});
class Er extends fs {
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
      span: (t) => Wb(t) ? {
        conversion: jb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Tr().updateFromJSON(t);
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
    return r && An(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: Xf
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function jb(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Tr(t, r) };
}
function Tr(e, t) {
  return je(new Er(e, t));
}
function Bb(e) {
  return kt(Tr(Kb, e), Oc, !0);
}
function Vb(e) {
  return Xt(e) && ne(e, Oc);
}
function Wb(e) {
  return e?.tagName === "span";
}
function Xt(e) {
  return e instanceof Er;
}
function Qf(e) {
  return e?.type === Er.getType();
}
const jr = "internal-comment", Hb = [jr], Zf = Object.freeze({}), wa = Object.freeze({}), qa = Object.freeze({}), Ra = Object.freeze({}), $a = Object.freeze({}), Gb = 1, zn = /* @__PURE__ */ new Map(), Mi = /* @__PURE__ */ new Map(), Kn = /* @__PURE__ */ new Map(), jn = /* @__PURE__ */ new Map();
class Qe extends er {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Zf, r, n, i, s, o) {
    super(o), this.__typedIDs = As(t), this.__typedOnClicks = ta(r), this.__typedOnRemoves = ra(n), this.__typedOnMouseEnters = na(i), this.__typedOnMouseLeaves = ia(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = As(t.__typedIDs), n = ta(t.__typedOnClicks), i = ra(t.__typedOnRemoves), s = na(t.__typedOnMouseEnters), o = ia(t.__typedOnMouseLeaves);
    return new Qe(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Hb.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Ji().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: Gb
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      Fn(n, ln(t.theme.typedMark, a)), c.length > 1 && Fn(n, ln(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Fn(n, ln("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = ln(n.theme.typedMark, s), d = ln(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && Fn(r, u) : l === 0 && Qo(r, u), c === 1 ? l === 2 && Fn(r, d) : l === 1 && Qo(r, d));
      const f = new Set(o), p = new Set(a);
      for (const m of o)
        p.has(m) || Qo(r, ln("annotationId", m));
      for (const m of a)
        f.has(m) || Fn(r, ln("annotationId", m));
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
    return Ce(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = As(r.__typedIDs);
    r.__typedIDs = As(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Bs(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = ta(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return Ce(t) ? zn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = ra(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Ce(t) ? Mi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = na(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Ce(t) ? Kn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = ia(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Ce(t) ? jn.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!Ce(a))
      return;
    He(t), He(r);
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
    if (!Ce(n))
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
    const n = Ji(this.__typedIDs, this.getTypedOnClicks());
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
    if (!P(r) || n === "html")
      return !1;
    const i = r.anchor, s = r.focus, o = i.getNode(), a = s.getNode(), l = r.isBackward() ? i.offset - s.offset : s.offset - i.offset;
    return this.isParentOf(o) && this.isParentOf(a) && this.getTextContent().length === l;
  }
  excludeFromCopy(t) {
    return t !== "clone";
  }
  remove(t) {
    const r = this.getWritable(), n = this.getTypedIDs();
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), zn.delete(r.getKey()), Mi.delete(r.getKey()), Kn.delete(r.getKey()), jn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === wa) {
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
    He(t), He(r);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, r) {
    if (!this.__typedOnClicks)
      return;
    const n = this.__typedOnClicks[t];
    if (!n)
      return;
    const i = Dr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = Dr(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === wa) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === qa) {
      const t = Mi.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      Mi.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    Mi.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, r, n) {
    He(t), He(r);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, r) {
    if (!this.__typedOnRemoves)
      return;
    const n = this.__typedOnRemoves[t];
    if (!n)
      return;
    const i = Dr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = Dr(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === qa) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Ra) {
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
    He(t), He(r);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, r) {
    if (!this.__typedOnMouseEnters)
      return;
    const n = this.__typedOnMouseEnters[t];
    if (!n)
      return;
    const i = Dr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = Dr(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Ra) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === $a) {
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
    He(t), He(r);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, r) {
    if (!this.__typedOnMouseLeaves)
      return;
    const n = this.__typedOnMouseLeaves[t];
    if (!n)
      return;
    const i = Dr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = Dr(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === $a) {
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
    const i = Jb(t, r);
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
    for (; Ce(t) && Tu(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; Ce(r) && Tu(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = Yb(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Xb(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Qb(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Zb(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function As(e = Zf) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (He(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      He(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function ta(e) {
  if (!e || e === wa)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    He(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      He(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function ra(e) {
  if (!e || e === qa)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    He(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      He(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function na(e) {
  if (!e || e === Ra)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    He(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      He(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function ia(e) {
  if (!e || e === $a)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    He(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      He(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Dr(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function ku(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function Jb(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Tu(e, t) {
  const r = ku(e), n = ku(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function Yb(e, t) {
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
function ln(e, t) {
  return `${e}-${t}`;
}
function xu(e) {
  return `external-${e}`;
}
function Ji(e, t, r, n, i) {
  return je(new Qe(e, t, r, n, i));
}
function Ce(e) {
  return e instanceof Qe;
}
function ep(e) {
  return e?.type === Qe.getType();
}
function Bs(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function tp(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let m, g;
  for (let y = 0; y < u; y++) {
    const k = a[y];
    if (F(g) && g.isParentOf(k))
      continue;
    const _ = y === 0, S = y === u - 1;
    let N = null;
    if (v(k)) {
      const A = k.getTextContentSize(), B = _ ? f : 0, M = S ? p : A;
      if (B === 0 && M === 0)
        continue;
      const q = k.splitText(B, M);
      N = q.length > 1 && (q.length === 3 || _ && !S || M === A) ? q[1] : q[0];
    } else {
      if (Ce(k))
        continue;
      F(k) && k.isInline() && (N = k);
    }
    if (N !== null) {
      if (N && N.is(m))
        continue;
      const A = N.getParent();
      (A == null || !A.is(m)) && (g = void 0), m = A, g === void 0 && (g = Ji(), g.addID(t, r, n, i, s, o), N.insertBefore(g)), g.append(N);
    } else
      m = void 0, g = void 0;
  }
  t === jr && F(g) && (d ? g.selectStart() : g.selectEnd());
}
function ek(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (Ce(n))
      return n.getTypedIDs()[t];
    if (v(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (Ce(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const tk = ["type", "marker", "content"], La = "unknown", rp = 1, rk = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class Pn extends er {
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
    return new Pn(r, n, i, s);
  }
  static importDOM() {
    return {
      [La]: (t) => ik(t) ? {
        conversion: nk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return wc().updateFromJSON(t);
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
    return rk.has(this.getTag());
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
      version: rp
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
    if (kc(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function nk(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: wc(t, r) };
}
function wc(e, t, r) {
  return je(new Pn(e, t, r));
}
function ik(e) {
  return e?.tagName.toLowerCase() === La;
}
function De(e) {
  return e instanceof Pn;
}
const np = 1, sk = "attribute-run";
function sa(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Ar extends er {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new Ar(r, n);
  }
  static importJSON(t) {
    return ip(t.runKind).updateFromJSON(t);
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
    t.classList.add(sk);
    const r = sa(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = sa(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = sa(this.__runKind);
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
      version: np
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
function ip(e) {
  return je(new Ar(e));
}
function Ie(e) {
  return e instanceof Ar;
}
const Yi = "id", sp = 1, ok = [
  "type",
  "marker",
  "code",
  "content"
];
class Ft extends er {
  __marker = Yi;
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
    return new Ft(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return op(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return dy(t);
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
      version: sp
    };
  }
}
function op(e, t) {
  return je(new Ft(e, t));
}
function ht(e) {
  return e instanceof Ft;
}
function ap(e) {
  return e?.type === Ft.getType();
}
const Vs = "c", cp = 1, ak = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Ot extends er {
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
  /**
   * A chapter holds its own marker bytes and nothing else, and serializes as its number alone, so
   * it must never take in another block's content: whatever landed in it would stay on screen and
   * be dropped on save. Reporting that it cannot be empty is what keeps Lexical from treating it as
   * a block to merge a following paragraph into when a deletion starts on the chapter line, and
   * what removes the chapter once every byte of its marker is deleted. Editors that let the caret
   * into a chapter must handle splits there themselves, since Lexical then has no block to split
   * (see the platform editor's `chapterLine.utils.ts`).
   */
  canBeEmpty() {
    return !1;
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
      version: cp
    };
  }
}
function lp(e, t, r, n, i) {
  return je(new Ot(e, t, r, n, i));
}
function Me(e) {
  return e instanceof Ot;
}
function ck(e) {
  return e?.type === Ot.getType();
}
const up = [
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
], dp = [
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
], lk = [
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
  ...up,
  ...dp
], fp = 1, uk = ["type", "marker", "content"];
class me extends er {
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
    return t !== void 0 && (lk.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && up.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && dp.includes(t);
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
      span: (t) => fk(t) ? {
        conversion: dk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return xr().updateFromJSON(t);
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
    return _u(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), _u(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && An(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: fp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = xr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function _u(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function dk(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: xr(t) };
}
function xr(e, t) {
  return je(new me(e, t));
}
function fk(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return me.isValidMarker(t) && e.classList.contains(me.getType());
}
function D(e) {
  return e instanceof me;
}
function pk(e) {
  return e?.type === me.getType();
}
const pp = 1, hk = "c", hp = "span";
class hr extends fs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = hk, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new hr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => gp(t) ? {
        conversion: gk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return qc().updateFromJSON(t);
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
    const t = document.createElement(hp);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ks, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && An(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Ks, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? Dt(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: pp
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
function gk(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: qc(t) };
}
function qc(e, t, r, n, i, s) {
  return je(new hr(e, t, r, n, i, s));
}
function gp(e) {
  return e ? e.classList.contains(Ks) && e.tagName.toLowerCase() === hp : !1;
}
function gs(e) {
  return e instanceof hr;
}
function mk(e) {
  return e?.type === hr.getType();
}
const mp = 1;
class Hr extends Tc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Hr(t.__key);
  }
  static importJSON(t) {
    return Gt().updateFromJSON(t);
  }
  getMarker() {
    return Ht;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: mp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Gt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Gt() {
  return je(new Hr());
}
function fr(e) {
  return e instanceof Hr;
}
function xo(e) {
  return e?.type === Hr.getType();
}
const yk = [
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
  Ht,
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
], yp = 1, bk = ["type", "marker", "content"];
class et extends Tc {
  __marker;
  __unknownAttributes;
  constructor(t = Ht, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new et(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (yk.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: kk,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return ti().updateFromJSON(t);
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
    return r && An(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: yp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = ti(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function kk(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = ti(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function ti(e, t) {
  return je(new et(e, t));
}
function ae(e) {
  return e instanceof et;
}
function Rc(e) {
  return e?.type === et.getType();
}
const Ws = "v", bp = 1, Tk = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class ft extends Ke {
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
    return new ft(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return kp().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Aa, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: bp
    };
  }
}
function kp(e, t, r, n, i, s) {
  return je(new ft(e, t, r, n, i, s));
}
function Oe(e) {
  return e instanceof ft;
}
function Tp(e) {
  return e?.type === ft.getType();
}
const xk = "​", ri = xk;
var Cu;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Cu || (Cu = {}));
var Su;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Su || (Su = {}));
function _k() {
  return pe(ri);
}
function Ck(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(ri, ""));
}
function ms(e) {
  return e.length > 0 && e.includes(ri) && e.replaceAll(ri, "") === "";
}
function $c(e) {
  return v(e) && ms(e.getTextContent());
}
function xp(e) {
  return ck(e) || mk(e);
}
function Ge(e) {
  return Me(e) || gs(e);
}
function _p(e, t) {
  return e.find((r) => Ge(r) && r.getNumber() === t.toString());
}
function Sk(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Ge(r));
}
function vu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Cp(e) {
  if (!e)
    return;
  if (Ge(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !Ge(t); )
    t = t.getPreviousSibling();
  if (t && Ge(t))
    return t;
}
function Qt(e) {
  return Ze(e, j) ?? void 0;
}
function vk(e) {
  return ht(e) || Me(e) || D(e) || gs(e) || fr(e) || Be(e) || ae(e) || j(e) || Oe(e) || De(e);
}
function Sp(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Mk(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function At(e) {
  return Se(e) || ht(e);
}
function Se(e) {
  return ae(e) || fr(e);
}
function Ek(e) {
  return Rc(e) || xo(e);
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
function Tn(e, t) {
  const r = ne(t, kn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function Ak(e, t) {
  const r = F(e) ? e : e.getParent(), n = F(t) ? t : t.getParent(), i = r && n ? xy(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Pk(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function ni(e) {
  return e?.type === Ke.getType();
}
function Nk(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function Ok(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function we(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function nt(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function vp(e, t, r) {
  const n = we(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Dt(e, t) {
  let r = we(e);
  return t && (r += `${L}${t}`), r += " ", r;
}
function wk(e) {
  const t = e[hs];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Mp(e) {
  return Fc(e) || Qf(e) && e.textType === "marker" || ni(e) && wk(e) === "attribute" ? "" : ni(e) && e.text !== L ? e.text : pk(e) ? e.children.map((t) => Mp(t)).join("") : "";
}
function qk(e) {
  return e.map((r) => Mp(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Pt(e) {
  return " " + e + L;
}
function Lc(e) {
  const t = [];
  for (const r of e) {
    if (!D(r))
      continue;
    const n = Ep(r);
    n !== Ut && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Ep(e) {
  return O(e) || Pr(e) || v(e) && ne(e, oe) === "attribute" ? "" : v(e) ? e.getTextContent() : F(e) ? e.getChildren().map((t) => Ep(t)).join("") : "";
}
function Pr(e) {
  return Xt(e) && e.getTextType() === "marker";
}
function zt(e) {
  return O(e) || Pr(e);
}
function Mu(e, t) {
  Rk(e, t), e.setMarker(t);
}
function Rk(e, t) {
  const r = e.getMarker(), n = we(r), i = we(r, !0), s = nt(r), o = nt(r, !0), a = me.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!zt(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (O(c))
        c.setMarker(t);
      else if (Pr(c)) {
        const f = l.startsWith(we("", !0));
        c.setTextContent(u ? we(t, f) : nt(t, f));
      }
    }
  });
}
function Ue(e, t = fy) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Pe(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Ap(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Ic(e) {
  if (!P(e))
    return Eu(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !F(t) || e.anchor.type === "text" && !v(t)))
    return t ?? void 0;
  try {
    return Eu(e) ?? t ?? void 0;
  } catch (n) {
    if (Ap(n))
      return t ?? void 0;
    throw n;
  }
}
function $k(e, t) {
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
function Dc(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Pp(e) {
  return !!e && e.includes("-");
}
function Np(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Eu(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Uc(e) {
  if (!e)
    return !1;
  if (ps(e) || O(e) || Pr(e) || Ie(e) || Xt(e) && e.getTextType() === "attribute")
    return !0;
  if (v(e)) {
    const t = ne(e, oe);
    if (t === pr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === L || ms(r))
      return !0;
  }
  return !1;
}
function _o() {
  const e = pe(L);
  return kt(e, oe, pr), e.setMode("token"), e;
}
function Lk(e) {
  const t = e.getTextContent();
  t.startsWith(L) || e.setTextContent(L + t);
}
function Nn(e) {
  return v(e) && ne(e, oe) === pr;
}
function Op(e) {
  const t = e.getFirstChild();
  if (!zt(t) || t === null || Nn(t.getNextSibling()))
    return !1;
  const r = w();
  if (!P(r) || !r.isCollapsed())
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
    if (!Uc(s)) {
      if (Ce(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (v(s) && s.getType() === Ke.getType()) {
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length }), r.length += s.getTextContentSize();
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function Co(e) {
  let t = e.getParent();
  for (; t && Ce(t); )
    t = t.getParent();
  return t;
}
function Ik(e, t) {
  return pi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function Dk(e, t) {
  const r = Co(e);
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
function Uk(e, t) {
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
function wp(e, t) {
  const r = pi(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Uc(n))
    return wp(e, t + 1);
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
function Fk(e, t) {
  if (t <= 0)
    return 0;
  const r = pi(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? zk(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function zk(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const Kk = 1;
class gr extends Ke {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(fn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new gr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      text: t.text || fn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = fn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = fn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = fn(r.__marker, r.__markerSyntax, t), r;
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
      version: Kk
    };
  }
}
function ot(e, t, r) {
  return je(new gr(e, t, void 0, r));
}
function O(e) {
  return e instanceof gr;
}
function Fc(e) {
  return e?.type === gr.getType();
}
function Qr(e) {
  return e.getTextContent() === fn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function jk(e) {
  e.setTextContent(fn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function fn(e, t, r = !1) {
  return t === "closing" ? nt(e, r) : t === "selfClosing" ? nt("") : we(e, r);
}
const Bk = /* @__PURE__ */ new Set(["closed"]);
function lr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !Bk.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function qp(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Rp(e) {
  const t = Object.keys(e).filter((n) => !xb.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function $p(e, t, r, n) {
  return qp(
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
function Fi(e) {
  return e.getChildren().find((t) => O(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function Vk(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Fi(e) === void 0 && Lp(e) === void 0;
}
function Lp(e) {
  return e.getChildren().find((t) => v(t) && ne(t, oe) === "attribute");
}
function Xi(e, t) {
  return ys(e.getNextSibling(), t);
}
const Wk = /^[ \u00A0]+$/;
function zc(e) {
  if (Qr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = we(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && Wk.test(r.slice(t.length));
}
function ys(e, t) {
  let r, n, i, s;
  return Ie(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), O(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  zc(e) && (r = e, e = e.getNextSibling()), v(e) && ne(e, oe) === "attribute" && (n = e, e = e.getNextSibling()), O(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && Qr(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Qi(e) {
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
function Ip(e) {
  const t = Qi(e);
  return t ? ys(t.getNextSibling(), "cat") : {};
}
function bs(e) {
  const t = e.getFirstChild();
  if (!(!v(t) || O(t)) && ne(t, oe) !== "attribute")
    return t;
}
function Dp(e) {
  const t = bs(e);
  return t ? ys(t.getNextSibling(), "ca") : {};
}
function Up(e) {
  const t = bs(e);
  if (!t)
    return;
  const r = ys(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Fp(e) {
  const t = Up(e);
  return t ? ys(t.getNextSibling(), "cp") : {};
}
function zp(e) {
  const t = e.getParent();
  if (!D(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Oe(n))
        return n;
      if (!(O(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || v(n) && ne(n, oe) === "attribute" || D(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Ie(n)))
        return;
    }
}
function So(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Ie(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), O(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  zc(s) && (t = s, s = s.getNextSibling()), v(s) && ne(s, oe) === "attribute" && (r = s, s = s.getNextSibling()), O(s) && s.getMarkerSyntax() === "selfClosing" && Qr(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function Kc(e) {
  return D(Co(e));
}
function Ia(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Kc(t) : t.getChildren().some((i) => D(i) && i.getMarker() === r) ? !0 : void 0;
}
function Hk(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = Ia(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function vo(e) {
  return v(e) && e.getType() === Ke.getType() && ne(e, oe) !== "attribute";
}
function jc(e, t) {
  if (e.getMarkerSyntax() !== "opening" || Ia(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return O(r) ? Ia(r, t) === !0 ? "spacer" : void 0 : vo(r) ? r.getTextContent().startsWith(L) ? void 0 : "prefix" : "spacer";
}
function Gk(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (O(t) && jc(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Kp(e, t) {
  const r = w();
  if (!P(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function jp(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = jc(t, e);
    if (r !== void 0 && !Kp(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        v(n) && n.setTextContent(L + n.getTextContent());
      } else
        t.insertAfter(pe(L));
  });
}
function Bp(e) {
  return e.isAttached() ? e.getChildren().some((t) => O(t) && jc(t, e) !== void 0 && Kp(t, e)) : !1;
}
const Jk = "file", Yk = "src", Xk = "colspan", Qk = "category", Zk = "alt", eT = "closed", tT = "false";
function rT(e) {
  return e[eT] !== tT;
}
function nT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === Jk ? Yk : t,
    r
  ]));
}
function Vp(e, t) {
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
function Wp(e, t, r) {
  const n = r ?? {}, i = rT(n);
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
        opening: `\\${Vp(t, n[Xk])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: lr(nT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [Qk]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + lr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [Zk]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: lr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: lr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const _t = { wantsRun: !1, valueText: void 0 }, Nr = {};
function oa(e, t) {
  if (t === "va")
    return e;
  const r = Xi(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function Bc(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (F(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function Mo(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = w();
  if (!P(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function iT(e) {
  return Ie(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : O(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : v(e) && ne(e, oe) === "attribute";
}
function sT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!v(e) || ne(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function aa(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Oe(t))
      return t;
    if (!iT(t))
      return;
  }
}
function Au(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Oe(t),
    ownerOf: (t) => {
      if (Ie(t))
        return t.getRunKind() === e ? aa(t) : void 0;
      const r = t.getParent();
      return Ie(r) ? r.getRunKind() === e ? aa(r) : void 0 : sT(t) === e ? aa(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Oe(t))
        return _t;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? _t : { wantsRun: !0, valueText: L + r };
    },
    scanPieces: (t) => Oe(t) ? Xi(oa(t, e), e) : Nr,
    graceSite: (t, r) => Oe(t) ? !r.opener && !r.closer ? Bc(oa(t, e)) : Mo(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Oe(t) ? oa(t, e) : void 0
    }
  };
}
const oT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => _t,
  scanPieces: () => Nr,
  graceSite: (e) => D(e) && Bp(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, aT = {
  kind: "char",
  ownerPredicate: (e) => D(e),
  ownerOf: (e) => {
    if (!v(e) || ne(e, oe) !== "attribute")
      return;
    const t = e.getParent();
    return D(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!D(e) || Fi(e) === void 0)
      return _t;
    const t = lr(e.getUnknownAttributes() ?? {}, ko(e.getMarker()));
    return t === "" ? _t : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => D(e) ? { value: Lp(e) } : Nr,
  graceSite: (e, t) => {
    if (!D(e) || t.value)
      return !1;
    const r = Fi(e);
    if (!r)
      return !1;
    const n = w();
    if (!P(n) || !n.isCollapsed())
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
    insertRunBefore: (e) => D(e) ? Fi(e) : void 0
  }
};
function Hp(e) {
  if (O(e))
    return e.getMarker() === "cat";
  if (!v(e) || ne(e, oe) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return O(t) && t.getMarker() === "cat";
}
function cT(e) {
  const t = e.getParent();
  if (!j(t))
    return;
  const r = Qi(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Hp(n))
        return;
    }
}
const lT = {
  kind: "cat",
  ownerPredicate: (e) => j(e),
  ownerOf: (e) => {
    if (Ie(e))
      return e.getRunKind() === "cat" && j(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Ie(t) ? t.getRunKind() === "cat" && j(t.getParent()) ? t.getParent() ?? void 0 : void 0 : Hp(e) ? cT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!j(e) || e.getIsCollapsed() !== !1)
      return _t;
    const t = e.getCategory();
    return t === void 0 ? _t : { wantsRun: !0, valueText: L + t };
  },
  scanPieces: (e) => j(e) ? Ip(e) : Nr,
  graceSite: (e, t) => {
    if (!j(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Qi(e);
      return r !== void 0 && Bc(r);
    }
    return Mo(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => j(e) ? Qi(e) : void 0
  }
};
function uT(e) {
  return Ie(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : O(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : v(e) && ne(e, oe) === "attribute";
}
function dT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!v(e) || ne(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function fT(e) {
  const t = e.getParent();
  if (!Me(t))
    return;
  const r = bs(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!uT(n))
        return;
    }
}
function Pu(e) {
  const t = (r) => Me(r) ? e === "ca" ? bs(r) : Up(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Me(r),
    ownerOf: (r) => {
      if (Ie(r))
        return r.getRunKind() === e && Me(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Ie(n) ? n.getRunKind() === e && Me(n.getParent()) ? n.getParent() ?? void 0 : void 0 : dT(r) === e ? fT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Me(r))
        return _t;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? _t : { wantsRun: !0, valueText: L + n };
    },
    scanPieces: (r) => Me(r) ? e === "ca" ? Dp(r) : Fp(r) : Nr,
    graceSite: (r, n) => {
      if (!Me(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && Bc(i);
      }
      return Mo(n);
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
function Gp(e) {
  if (O(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return v(e) && ne(e, oe) === "attribute";
}
function pT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Be(t)) {
      const r = O(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Gp(t))
      return;
  }
}
const hT = {
  kind: "milestone",
  ownerPredicate: (e) => Be(e),
  ownerOf: (e) => {
    const t = Ie(e) ? e.getRunKind() === "milestone" ? e : void 0 : Ie(e.getParent()) ? e.getParent() : Gp(e) ? e : void 0;
    if (!t || Ie(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Ie(t) ? Be(r) ? r : void 0 : pT(t);
  },
  expectedPieces: (e) => {
    if (!Be(e))
      return _t;
    const t = $p(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = lr(t, To(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : L + r };
  },
  scanPieces: (e) => {
    if (!Be(e))
      return Nr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = So(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Be(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = w();
      if (!P(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return Mo(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => Be(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, gT = Wp("optbreak", void 0, void 0).opening, mT = {
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
  expectedPieces: () => ({ wantsRun: !0, valueText: gT }),
  scanPieces: (e) => De(e) ? { value: e.getFirstChild() ?? void 0 } : Nr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, yT = {
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
  scanPieces: () => Nr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, bT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => _t,
  scanPieces: () => Nr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Zi = [
  oT,
  aT,
  Au("va"),
  Au("vp"),
  lT,
  Pu("ca"),
  Pu("cp"),
  hT,
  mT,
  yT,
  bT
], kT = new Map(Zi.map((e) => [e.kind, e]));
function xn(e) {
  const t = kT.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function _n(e) {
  for (const t of Zi) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function Jp(e) {
  return _n(e) !== void 0;
}
const Gs = "unmatched", Yp = 2;
function zi(e) {
  return `\\${e}`;
}
class Or extends Ke {
  __marker;
  constructor(t = "", r) {
    super(zi(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new Or(r, n);
  }
  static importDOM() {
    return {
      [Gs]: (t) => xT(t) ? {
        conversion: TT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Vc().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? zi(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = zi(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(uu), r.title = Nu(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Nu(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Gs);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(uu), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: Yp
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Xp(e) {
  return e.getTextContent() === zi(e.getMarker());
}
function Nu(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function TT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Vc(t) };
}
function Vc(e) {
  return je(new Or(e));
}
function xT(e) {
  return e?.tagName.toLowerCase() === Gs;
}
function Zr(e) {
  return e instanceof Or;
}
const Qp = "table", Da = "immutable-table", Zp = 1, _T = ["type", "marker", "content"];
class On extends er {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Da;
  }
  static clone(t) {
    return new On(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return CT().updateFromJSON(t);
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
      type: Da,
      ...t !== void 0 && { unknownAttributes: t },
      version: Zp
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function CT(e) {
  return je(new On(e));
}
function eh(e) {
  return e instanceof On;
}
function ST(e) {
  return e?.type === Da;
}
const th = "table:row", Ou = "immutable-table-row", rh = 1, Ua = "tr", vT = ["type", "marker", "content"];
class hi extends er {
  __marker;
  __unknownAttributes;
  constructor(t = Ua, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Ou;
  }
  static clone(t) {
    return new hi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return MT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Ua).setUnknownAttributes(t.unknownAttributes);
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
      version: rh
    };
  }
}
function MT(e, t) {
  return je(new hi(e, t));
}
const nh = "table:cell", wu = "immutable-table-cell", ih = 1, Fa = "tc1", ET = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function AT(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class gi extends er {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Fa, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return wu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new gi(r, n, i, s, o);
  }
  static importJSON(t) {
    return PT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Fa).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = AT(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: wu,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: ih
    };
  }
}
function PT(e, t, r, n) {
  return je(new gi(e, t, r, n));
}
function Eo(e, t) {
  const r = e.getChildAtIndex(t);
  return v(r) ? r : void 0;
}
function Zt(e, t) {
  const r = Eo(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function es(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function NT(e) {
  return e.getChildren().some((t) => O(t) && t.getMarkerSyntax() === "closing");
}
function OT(e) {
  return es(e) ? void 0 : { closed: "false" };
}
function wT(e, t, r, n) {
  const i = t.getMarker(), s = Kc(t), o = NT(t);
  if (n) {
    e.append(ot(i, "opening", s));
    const [a] = r;
    vo(a) && !a.getTextContent().startsWith(L) && a.setTextContent(L + a.getTextContent());
  }
  e.append(...r), o && e.append(ot(i, "closing", s));
}
function Cn(e) {
  return Ze(e, D) ?? void 0;
}
function Wc(e) {
  let t = e.getParent();
  for (; D(t); )
    t = t.getParent();
  return t;
}
function za(e) {
  const t = sh(e);
  return e.getChildren().every((r) => O(r) || t && ne(r, oe) === "attribute" || v(r) && r.getTextContent().replaceAll(L, "") === "");
}
function sh(e) {
  return es(e);
}
function qT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? lr(r, ko(e.getMarker())) : "";
  n !== "" && t.insertAfter(pe(n)), e.remove();
}
function RT(e, t) {
  if (es(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(ot(e.getMarker(), "closing", Kc(e)));
}
function $T(e, t) {
  return D(e) && !es(e) && !es(t);
}
function LT(e, t, r) {
  za(e) && e.getChildren().forEach((i) => {
    O(i) || i.remove();
  });
  const [n] = t;
  r && vo(n) && !n.getTextContent().startsWith(L) && n.setTextContent(L + n.getTextContent()), e.append(...t);
}
function IT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = sh(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = O(l) && l.getMarkerSyntax() === "closing", f = s && ne(l, oe) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = $T(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      LT(e, o, n);
    else {
      const l = xr(t.getMarker(), OT(t));
      wT(l, t, o, n), e.insertAfter(l), za(l) ? l.remove() : c = l;
    }
  i && !a && RT(t, n), za(t) && qT(t, c);
}
function ii(e, t) {
  let r = e.getParent();
  for (; D(r); )
    IT(e, r, t), r = e.getParent();
}
function Hc(e) {
  if (v(e) && !O(e)) {
    const t = e.getTextContent().startsWith(L) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (F(e)) {
    const t = e.getChildren().find((r) => !O(r));
    if (t) {
      Hc(t);
      return;
    }
    e.selectEnd();
  }
}
const Qn = /* @__PURE__ */ new WeakMap();
function DT(e, t) {
  return Qn.set(e, t), () => {
    Qn.get(e) === t && Qn.delete(e);
  };
}
function qu(e) {
  return Qn.get(e);
}
function UT(e) {
  return Qn.get(ui())?.has(e.getKey()) ?? !1;
}
function FT(e) {
  Qn.get(ui())?.add(e.getKey());
}
function zT(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Ka(e) {
  return !!(e.opener || e.value || e.closer);
}
function Ru(e) {
  return /^\s/.test(e);
}
function Gc(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Ru(t) || !Ru(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Ao(e, t, r) {
  return r.wantsRun ? Gc(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : zT(t);
}
function KT(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return Gc(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function oh(e, t) {
  return !Ka(e.scanPieces(t));
}
function ks(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Ao(e, n, r))
    return !1;
  const i = w();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Hs(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function jT(e, t, r, n) {
  return !r.wantsRun || Ka(n) || _y(Hi) ? !1 : ui().getEditorState().read(() => {
    const i = se(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Ka(e.scanPieces(i));
  });
}
function BT(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function $u(e) {
  const t = pe(e);
  return kt(t, oe, "attribute"), t;
}
function VT(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = ip(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function WT(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    v(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore($u(n.valueText));
    return;
  }
  const l = VT(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = ot(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : v(d) ? Gc(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = $u(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(ot(a === "selfClosing" ? "" : o(t), a));
}
function ts(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Ao(e, i, n) && !UT(t)) {
    if (jT(e, t, n, i)) {
      FT(t);
      return;
    }
    if (!ks(e, t)) {
      if (!n.wantsRun) {
        BT(i);
        return;
      }
      WT(e, t, i, n);
    }
  }
}
function HT(e, t, r) {
  ts(e, t), t.isAttached() && ks(e, t) && r.add(t.getKey());
}
function ah(e) {
  if (!v(e))
    return !1;
  if (O(e) || Oe(e) || Zr(e))
    return !0;
  const t = ne(e, oe);
  return t === "attribute" || t === pr;
}
function Jc(e, t) {
  return O(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && Qr(e) && D(e.getParent())) : !1;
}
function GT() {
  const e = w();
  return P(e) ? Jc(e.focus.getNode(), e.focus.offset) : !1;
}
function ch(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return v(t) && ah(t) ? t : void 0;
}
function JT(e) {
  const t = ch(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function YT(e) {
  const t = ch(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Lu(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Iu(e, t) {
  e.set(t.key, t.offset, t.type);
}
function XT(e, t) {
  let r = YT(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!v(n))
      return;
    if (!ah(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Du(e, t) {
  const r = XT(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function lh(e) {
  if (e.isCollapsed()) {
    const a = JT(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Lu(r), Lu(n)], s = Du(r, "next"), o = Du(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Iu(r, i[0]), Iu(n, i[1]), !1) : !0;
}
const Js = "verse-block", uh = 1, QT = "verse-block";
class mi extends er {
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
    return ZT().updateFromJSON(t);
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
    return Np(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(QT), Uu(t, this.__number), t;
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
      type: Js,
      number: this.getNumber(),
      version: uh
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Uu(e, t) {
  const { start: r, end: n } = Np(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Fu(e, "data-verse-start", i ? r : NaN), Fu(e, "data-verse-end", i ? n : NaN);
}
function Fu(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function ZT(e) {
  return je(new mi(e));
}
function rs(e) {
  return e instanceof mi;
}
function ex(e) {
  return e?.type === Js;
}
const tx = [
  Ft,
  hr,
  Ot,
  ft,
  me,
  Ae,
  Yt,
  gr,
  Pn,
  Er,
  Or,
  et,
  Hr,
  On,
  hi,
  gi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Ar,
  {
    replace: Tc,
    with: () => Gt(),
    withKlass: Hr
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
}, rx = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function nx(e) {
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
      type: rx[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: ur(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function zu(e, t, r) {
  const n = {
    type: kr,
    version: br,
    content: e
  }, i = t.serializeEditorState(n, r);
  return xo(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const dh = "v", fh = 1, ix = "verse-selected";
class St extends fs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = dh, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => ax(t) ? {
        conversion: ox,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Yc().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Aa, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && An(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Aa, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Dt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      zs + this.getNumber() + zs
    );
    return C(sx, { nodeKey: this.getKey(), text: t });
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
      version: fh
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Ap(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function sx({ nodeKey: e, text: t }) {
  const [r] = Vy(e);
  return C("span", { className: r ? ix : void 0, children: t });
}
function ox(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Yc(t) };
}
function Yc(e, t, r, n, i, s) {
  return je(new St(e, t, r, n, i, s));
}
function ax(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === dh;
}
function wn(e) {
  return e instanceof St;
}
function cx(e) {
  return e?.type === St.getType();
}
function ge(e) {
  return Oe(e) || wn(e);
}
function ph(e) {
  return Tp(e) || cx(e);
}
function lx(e) {
  return ux(e).find((t) => ae(t));
}
function ux(e) {
  return e.some(rs) ? e.flatMap((t) => rs(t) ? t.getChildren() : t) : e;
}
function Po(e) {
  return F(e) ? rs(e) ? e.getChildren().flatMap(Po) : e.getChildren() : [];
}
function dx(e, t) {
  return Po(e).find((i) => ge(i) && Dc(t, i.getNumber()));
}
function fx(e, t) {
  return t === 0 ? lx(e) : e.map((r) => dx(r, t)).filter((r) => r)[0];
}
function Xs(e) {
  return Po(e).find((r) => ge(r));
}
function hh(e, t) {
  if (!F(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ge(i))
      return i;
  }
}
function px(e) {
  const t = e.getParent();
  if (t && F(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (ge(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Ge(r); ) {
    const n = Xs(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function ja(e) {
  return Po(e).findLast((t) => ge(t));
}
function hx(e) {
  if (!Oe(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function gx(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && F(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function mx(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return gx(t, e, r);
  if (v(e)) {
    const n = hx(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function Ku(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function yx(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!P(t))
    return Ku(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return mx(e, t) ? { verseNum: n } : Ku(e);
}
function bx(e) {
  return vk(e) || wn(e);
}
function Xc(e) {
  if (v(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(L) && e.setTextContent(`${t} `);
  }
}
function gh(e) {
  if (v(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Ba(e, t) {
  return e.getEditorState().read(() => !se(t));
}
function kx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Qc(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && F(i) && F(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && F(i)) {
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
      let s = ju(i);
      for (; s && !Ge(s); ) {
        const o = Xs(s);
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
      const o = Xs(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && Ge(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function Tx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Qc(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && F(i) && (n = hh(i, r.getIndexWithinParent())), !n && i) {
      let o = Bu(i);
      for (; o && !Ge(o); ) {
        const a = ja(o);
        if (a) {
          n = a;
          break;
        }
        o = Bu(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Ge(s); ) {
      const o = ja(s);
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
function Qc(e, t) {
  if (F(e) && P(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && ge(n))
      return n;
    const i = hh(e, t.anchor.offset);
    if (i)
      return i;
    const s = Xs(e);
    if (s)
      return s;
  }
  return Zc(e);
}
function Zc(e) {
  if (!e || Ge(e))
    return;
  if (ge(e))
    return e;
  let t = vu(e);
  for (; t; ) {
    if (Ge(t))
      return;
    if (ge(t))
      return t;
    const r = ja(t);
    if (r)
      return r;
    t = vu(t);
  }
}
const xx = ["style"], _x = ["style", "code"], Qs = ["style", "cid"], Cx = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Sx = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], vx = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], Mx = ["style", "caller", "category", "contents"], Ex = ["tag", "marker", "contents"], Ax = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], ns = `
`;
function Px(e, t) {
  const r = se(e);
  if (!Nt(r))
    return;
  const n = mh(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function mh(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Nf();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (si(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      si(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (_r(l) || Nt(l))
        return n;
      At(l) && (a = l);
    }
    if (At(l) && (i.includes(l) || i.push(l)), yh(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += el(l, t);
  }
  if (a)
    return n;
}
function Vu(e, t, r = "delta-doc") {
  if (e.length < 2 || !wx(e[0]) || !Ox(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => Nx(n, r)?.getKey());
}
function Nx(e, t = "delta-doc") {
  const r = Nf();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (si(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      si(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (At(a) && (i.includes(a) || i.push(a)), yh(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = el(a, t);
    if (_r(a) && l > 0 && e >= n && e < n + l || Nt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function si(e, t) {
  return e ? t ? !Hs(t.node, e.getKey()) : !0 : !1;
}
function _r(e) {
  return v(e) && !Nt(e);
}
function Nt(e) {
  return Ge(e) || ge(e) || Be(e) || j(e) || De(e) || Zr(e);
}
function zr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function Ox(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && Ax.includes(t);
}
function wx(e) {
  return e.retain != null && typeof e.retain == "number";
}
function yh(e, t) {
  return j(e) || De(e) ? !0 : t === "apply" && F(e) && Nt(e);
}
function bh(e) {
  const t = e.getParent();
  return zt(e) && ae(t) && t.getFirstChild() === e;
}
function Va(e) {
  const t = e.getParent();
  return t !== null && Ze(t, Ie) !== null;
}
function qx(e) {
  const t = e.getParent();
  return D(t) && e.getTextContent() === Ut && t.getChildrenSize() === 1;
}
function Rx(e) {
  const t = e.getParent();
  if (!j(t))
    return !1;
  const r = e.getPreviousSibling();
  return O(r) && r === t.getFirstChild() && e.getTextContent() === Pt(t.getCaller());
}
function $x(e) {
  return !Jp(e) && el(e, "delta-doc") === e.getTextContentSize();
}
function el(e, t) {
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
    ($c(e) || bh(e) || ne(e, oe) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ne(e, oe) === "attribute" || Va(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Mc) || qx(e) || Rx(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Wa(e, t) {
  const r = { insert: e.__text }, n = ne(e, Wr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = kh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function Wu(e) {
  const t = new Ri();
  return e.isEmpty() || e.read(() => {
    const r = Fe();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && fr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = Lx();
    for (const s of i)
      t.push(s);
  }), t;
}
function tl(e, t) {
  const r = [], n = fi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...Hu(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...Hu(c, n.length, n, i, s, o, a));
  return r;
}
function Lx() {
  return tl();
}
function Hu(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return Ix(e, a, n), Dx(e, a, i, s, o), Ux(e, t, r, i, o, s, a), Ge(e) && a.push(jx(e)), ge(e) && a.push(Vx(e)), Be(e) && a.push(Wx(e)), Zr(e) && a.push(Hx(e)), zx(e, a, s), Fx(e, a, s), Xx(c, s), a;
}
function Ix(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    ht(n) ? t.push(Kx(n)) : ae(n) ? t.push(Bx(n)) : fr(n) && t.push({ insert: ns });
  }
  At(e) && (r.includes(e) || r.push(e));
}
function Dx(e, t, r, n, i) {
  if (!v(e) || Oe(e) || Zr(e))
    return;
  const s = e.getParent();
  if (j(s) && s.getFirstChild() === e)
    return;
  const o = Qt(e) !== void 0;
  if (O(e) && (o || bh(e) || Va(e) || Jp(e)) || ne(e, oe) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (ms(a))
    return;
  const c = e.getPreviousSibling();
  if (j(s) && O(c) && c === s.getFirstChild() && a === Pt(s.getCaller()))
    return;
  const l = D(s) ? s : void 0, u = l?.getFirstChild();
  o && l && O(u) && c === u && a.startsWith(L) && (a = a.slice(1));
  const d = a.startsWith(Mc) || ne(e, oe) === "attribute" || Va(e), f = !!l && a === Ut && l.getChildrenSize() === 1, p = No(e, n), m = p ? r.filter((k) => p.children.includes(k)) : r, g = Wa(e, m);
  if (g.insert = a, p) {
    if (!a || a === L || d)
      return;
    p.contentsOps?.push(g);
  } else
    f || d || t.push(g);
  const y = a !== "" && !f && !(d && l);
  if (r.length > 0 && y)
    for (const k of r)
      i.add(k);
}
function Ux(e, t, r, n, i, s, o) {
  D(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (si(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = Jx(c), u = No(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function Fx(e, t, r) {
  if (!j(e))
    return;
  const n = Gx(e), i = No(e, r), s = {
    node: e,
    children: fi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function zx(e, t, r) {
  if (!De(e))
    return;
  const n = Yx(e), i = No(e, r), s = {
    node: e,
    children: fi(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function en(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function Kx(e) {
  const t = { style: Yi, code: e.__code };
  return en(t, e), { insert: ns, attributes: { book: t } };
}
function jx(e) {
  const t = { style: Vs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), en(t, e), { insert: { chapter: t } };
}
function Bx(e) {
  const t = { style: e.__marker };
  return en(t, e), { insert: ns, attributes: { para: t } };
}
function Vx(e) {
  const t = { style: Ws, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), en(t, e), { insert: { verse: t } };
}
function Wx(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), en(t, e), { insert: { milestone: t } };
}
function Hx(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function Gx(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), en(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ne(e, Wr);
  return n && (r.attributes = { segment: n }), r;
}
function Jx(e) {
  const t = { insert: "" }, r = kh([e]);
  return r && (t.attributes = { char: r }), t;
}
function Yx(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), en(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function No(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function Xx(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    si(t[r].node, e) && t.splice(r, 1);
}
function kh(e) {
  if (e.length === 0)
    return;
  const t = e.map(Qx);
  return t.length === 1 ? t[0] : t;
}
function Qx(e) {
  const t = { style: e.__marker }, r = ne(e, kn);
  return r && (t.cid = r), en(t, e), t;
}
const Th = 1;
class Jt extends fs {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Wi, r = "", n, i) {
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
      span: (t) => e_(t) ? {
        conversion: Zx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return rl().updateFromJSON(t);
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
    return r && An(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => t_(t, n), (l) => r_(t, n, s, l), () => n_(t, n), () => i_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return C("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Wi && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === Uf && i ? (
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
      version: Th
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Zx(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: rl(t, r) };
}
function rl(e, t, r) {
  return je(new Jt(e, t, r));
}
function e_(e) {
  return e ? e.classList.contains(Jt.getType()) : !1;
}
function vt(e) {
  return e instanceof Jt;
}
function t_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!j(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function r_(e, t, r, n) {
  e.update(() => {
    const i = se(t);
    if (!j(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = se(r);
    if (!vt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function n_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!j(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return tl(r);
  });
}
function i_(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of fi())
      if (j(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const s_ = [
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
], o_ = ["†"];
function Oo(e) {
  if (xh())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = Gu(t), [s, o] = Gu(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = Ju(n, i), [s, o] = Ju(s, o);
  const a = xc();
  return a.anchor = au(n.getKey(), i, Yu(n)), a.focus = au(s.getKey(), o, Yu(s)), a;
}
function nl() {
  if (xh())
    return;
  const e = w();
  if (!e || !P(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Zs(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Zs(i, s);
  return { start: n, end: o };
}
function Gu(e) {
  if (py(e)) {
    const t = kf(e.jsonPath);
    let r = Fe();
    for (let n = 0; n < t.length; n++) {
      if (!r || !F(r))
        return [void 0, void 0];
      const i = pi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : Uk(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && F(r) ? [r, Fk(r, e.offset)] : [void 0, void 0];
  }
  if (hy(e) || gy(e)) {
    const t = Ei(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (F(t)) {
      const n = t.getLastChild();
      if (n && v(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && F(r) ? [r, 0] : [void 0, void 0];
  }
  if (my(e)) {
    const t = Ei(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (F(t)) {
      const n = t.getLastChild();
      if (n && v(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && F(r) ? [r, 0] : [void 0, void 0];
  }
  if (yy(e)) {
    const t = Ei(e.jsonPath);
    if (!t || !F(t))
      return [void 0, void 0];
    const r = ca(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && v(n) ? [n, 0] : [void 0, void 0];
  }
  if (by(e)) {
    const t = Ei(e.jsonPath);
    if (!t || !F(t))
      return [void 0, void 0];
    const r = ca(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && v(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (ky(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = Ei(e.jsonPath);
    if (!n || !F(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = ca(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && v(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${Ty(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Ju(e, t) {
  if (!Pr(e))
    return [e, t];
  const r = e.getTextContent().length;
  if (t < 0 || t >= r)
    return [e, t];
  const n = e.getParent();
  if (!n || !F(n))
    return [e, t];
  const i = e.getIndexWithinParent();
  return i < 0 ? [e, t] : [n, i];
}
function Yu(e) {
  return F(e) ? "element" : "text";
}
function ca(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (O(n) && n.getMarkerSyntax() === t || t === "closing" && O(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (Pr(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function Ei(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = kf(r);
  let i = Fe();
  for (const s of n) {
    if (!i || !F(i))
      return;
    const o = pi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Zs(e, t) {
  if (O(e)) {
    const r = e.getMarkerSyntax(), n = a_(e), i = n ? on(un(n)) : on(un(e));
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
  if (Ce(e)) {
    const r = e.getChildrenSize(), n = e.getChildAtIndex(Math.min(t, r - 1));
    if (v(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return Zs(n, s);
    }
    const i = Co(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return Zs(i, o);
    }
  }
  if (F(e)) {
    const r = e.getChildAtIndex(t);
    if (Pr(r)) {
      const i = r.getTextContent().endsWith("*"), s = on(un(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = wp(e, t);
    return n.type === "text" ? {
      jsonPath: on([...un(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: on(un(e)),
      offset: n.index
    };
  }
  if (v(e)) {
    const r = Dk(e, t);
    if (r)
      return {
        jsonPath: on([
          ...un(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: on(un(e)), offset: t };
}
function a_(e) {
  const t = e.getParent();
  if (!t || !F(t))
    return;
  const r = c_(e);
  return r && !At(r) && !v(r) && !Ce(r) ? r : t;
}
function c_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Uc(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function un(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = Co(r);
    if (!n)
      break;
    const i = Ik(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function xh() {
  for (let e = Fe().getFirstChild(); e; e = e.getNextSibling())
    if (rs(e))
      return !0;
  return !1;
}
function _h(e, t, r, n, i, s, o) {
  if (!Ae.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Oo(r) : w();
  if (!P(a))
    return;
  const c = d_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? ($i(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = Ch(e, l, c, i, s, void 0, void 0);
  return u_(u, a, i), u;
}
function il(e) {
  return e !== "expanded";
}
function l_(e) {
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
function u_(e, t, r) {
  const n = il(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Pk(t), lh(t);
  const i = l_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(D)?.selectEnd();
}
function Bn(e, t, r) {
  const n = xr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(ot(e)) : r?.markerMode === "visible" && n.append(Tr("marker", we(e)));
  const s = t === "" ? Ut : i ? L + t : t;
  return n.append(pe(s)), n;
}
function d_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Bn("fr", f, n)), !e.isCollapsed()) {
        const p = Qu(e);
        p.length > 0 && o.push(Bn("fq", p, n));
      }
      o.push(Bn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Bn("xo", f, n)), !e.isCollapsed()) {
        const p = Qu(e);
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
function Ch(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : il(n?.noteMode), l = Pc(e, t, c);
  s && kt(l, Wr, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = ot(e), u && d.setMode("token"), a || (f = ot(e, "closing"))) : n?.markerMode === "visible" && (d = Tr("marker", we(e) + " "), a || (f = Tr("marker", nt(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = pe(Pt(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const m = () => _o(), g = r.flatMap(p_(m));
    if (t === "")
      l.append(...g);
    else {
      const y = Lc(r);
      let k = () => {
      };
      i?.noteCallerOnClick && (k = i.noteCallerOnClick), p = rl(l.__caller, y, k), l.append(p, m(), ...g);
    }
  }
  return f && l.append(f), l;
}
function Xu(e) {
  if (typeof e == "string") {
    const i = se(e);
    return j(i) ? i : void 0;
  }
  const t = fi();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => j(i.node))[e]?.node;
  if (j(n))
    return n;
}
function f_(e, t) {
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
    e.getChildren().reverse().find(D)?.selectEnd();
}
function p_(e) {
  return (t) => Xt(t) ? [t] : [t, e()];
}
function h_(e) {
  const t = e.getParent();
  return t !== null && Ze(t, j) !== null;
}
function Qu(e) {
  if (!P(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = _c(e);
  let a = "";
  for (const c of t)
    if (!(j(c) || vt(c) || h_(c)) && !O(c) && !Zr(c) && ne(c, oe) !== "attribute") {
      if (ge(c)) {
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
const sl = [
  Jt,
  St,
  ...tx
], g_ = [
  mi,
  ...sl
], m_ = En((e, t) => {
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
function y_() {
  const [e, t] = de(void 0), [r, n] = de(), i = Z(null), s = he((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = eb(l, c, () => {
      tb(l, c, {
        placement: "bottom-start",
        middleware: [rb(), nb()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = he(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return z(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function b_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = y_();
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
const k_ = ay(m_);
function Sh({ isOpen: e = !1, children: t }) {
  const r = Z(null), { coords: n, placement: i } = b_({ isOpen: e, floatingBoxRef: r }), s = ze(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return hn(
    C(k_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const vh = yf(void 0);
function ol() {
  const e = bf(vh);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function T_(e, t) {
  const [r, n] = de(0), [i, s] = de(-1), o = ze(() => e ?? [], [e]), a = {
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
function x_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = T_(t, r);
  return C(vh.Provider, { value: i, children: C("div", { ...n, children: e }) });
}
const Mh = En(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = ol(), u = he((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = he((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return C("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function __({ children: e, autoIndex: t = !0, ...r }) {
  const n = Z(null), { state: { activeIndex: i, menuItems: s } } = ol(), o = ze(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = ze(() => {
    const c = o(s);
    return t ? cy.map(c, (l, u) => ly(l) && l.type === Mh && l.props.index === void 0 ? uy(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return z(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), C("div", { ref: n, role: "menu", ...r, children: a });
}
const C_ = (e, t, r) => Rs(e, r).toLowerCase().includes(t.toLowerCase()), Zu = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Rs = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function S_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? Zu(r[0]) : "") : (u = n || (r.length > 0 ? Zu(r[0]) : ""), d = (m, g) => C_(m, g, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((m) => {
    try {
      return d(m, t);
    } catch (g) {
      return console.warn("Error filtering item:", m, g), !1;
    }
  }).sort((m, g) => {
    const y = (S) => (p.has(S) || p.set(S, Rs(S, f).toLowerCase()), p.get(S) ?? ""), k = a ? Rs(m, f) : y(m), _ = a ? Rs(g, f) : y(g);
    for (const S of c)
      switch (S) {
        case "exact":
          if (k === l && _ !== l)
            return -1;
          if (_ === l && k !== l)
            return 1;
          break;
        case "startsWith":
          if (k.startsWith(l) && !_.startsWith(l))
            return -1;
          if (_.startsWith(l) && !k.startsWith(l))
            return 1;
          break;
        case "contains": {
          const N = k.indexOf(l), A = _.indexOf(l);
          if (N !== -1 && A === -1)
            return -1;
          if (A !== -1 && N === -1)
            return 1;
          if (N !== -1 && A !== -1)
            return N - A;
          break;
        }
      }
    return k.localeCompare(_);
  });
}
const la = {
  Root: x_,
  Options: __,
  Option: Mh
};
function v_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return ze(() => S_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function M_() {
  const { moveUp: e, moveDown: t, select: r } = ol();
  return ze(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const E_ = () => {
  const e = M_(), [t] = ce();
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
    return t.registerCommand(vr, r, Ne);
  }, [t, e]);
};
function A_() {
  return E_(), null;
}
const P_ = ["Shift", "Control", "Alt", "Meta"];
function Eh(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ce(), u = s !== void 0, [d, f] = de(""), p = u ? s ?? "" : d, m = v_({ query: p, items: t, filterBy: "name" }), g = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return z(() => {
    a?.(p, m);
  }, [a, p, m]), z(() => l.registerCommand(vr, (y) => {
    if (u || c?.includes(y.key) || P_.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const _ = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((S) => S.slice(0, -1));
      }
    }[y.key];
    return _ ? (y.stopPropagation(), y.preventDefault(), _(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((S) => S + y.key), !0) : !1;
  }, Ne), [l, u, p, o, n, c]), Te(la.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: m, onSelectOption: (y) => g(y), children: [!u && C("input", { value: p, type: "text", disabled: !0 }), C(A_, {}), C(la.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((_, S) => Te(la.Option, { index: S, children: [C("span", { className: "label", children: _.label ?? _.name }), C("span", { className: "description", children: _.description })] }, _.name)) })] });
}
function N_({ trigger: e, items: t }) {
  const [r] = ce(), [n, i] = de(!1), s = he((o) => {
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
      if (P(l))
        return l;
    });
    a.read(() => {
      const l = w();
      !P(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && C(Sh, { isOpen: n, children: ({ placement: o }) => C(Eh, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function O_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: ze(() => {
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
function Ki(e, t) {
  return `${e}:${t}`;
}
function w_(e, t) {
  z(() => {
    if (!e.hasNodes([Qe]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Ve(Of(e, Qe, (n) => Ji(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], m = a[l]?.[d], g = c[l]?.[d];
          i.addID(l, d, f, p, m, g);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(Qe, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = se(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : Ce(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!Qe.isReservedType(c))
              for (const u of l) {
                let d = t.get(Ki(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Ki(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Ki(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const q_ = En(function({ logger: t }, r) {
  const [n] = ce(), i = ze(() => /* @__PURE__ */ new Map(), []);
  w_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Ki(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = se(u);
        Ce(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && Bs(d));
      }
  };
  return bc(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (Qe.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = Oo(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), tp(p, a, c, l, u, d, f);
      }, { tag: Pa });
    },
    removeAnnotation(o, a) {
      if (Qe.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Ki(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Pa });
    }
  })), null;
}), R_ = [];
function $_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = R_, onChange: n }) {
  const [i] = ce();
  return ds(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(xf) && !u.has(Kf) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = L_(i, s);
        d.length !== 0 && n(o, i, u, d);
      });
  }, [i, e, t, r, n]), null;
}
function L_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Ri();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = se(i), o = s !== null && Qt(s) !== void 0;
    if (t.size === 1 && v(s) && !o && $x(s)) {
      const a = mh(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = se(i);
          return new Ri([v(d) ? Wa(d) : { insert: "" }]);
        }), l = new Ri([Wa(s)]), u = new Ri(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = Wu(r), c = Wu(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const al = "formatted", Ah = "unformatted", Ph = "paragraph-structure", cl = "standard", Nh = "block-verse", I_ = {
  [al]: "Formatted",
  [Ah]: "Unformatted",
  [Ph]: "Paragraph Structure",
  [cl]: "Standard",
  [Nh]: "Block Verse"
};
function qn(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let ll, ul;
function D_(e) {
  const t = dl(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  ll = e, ul = t;
}
D_(al);
const LP = () => ll, wo = () => ul;
function dl(e) {
  let t;
  switch (e ?? ll) {
    case al:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Ah:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Ph:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case cl:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Nh:
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
function IP(e) {
  if (!e)
    return;
  const t = ed(e);
  return Object.keys(I_).find((r) => qt(ed(dl(r)), t));
}
const U_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function ed(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...U_, ...t };
}
function qo(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function F_(e) {
  if (e)
    return is(e) ? St : e.markerMode === "editable" ? ft : St;
}
function is(e) {
  return e?.verseLayout === "block";
}
function z_(e) {
  const t = [], r = e ?? ul;
  return r && (t.push(`${yb}${r.markerMode}`), r.hasSpacing && t.push(gb), r.isFormattedFont && t.push(mb)), t;
}
function K_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += j_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), V_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += W_(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), G_(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function j_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), B_(t, e.retain, e.attributes, r, n)), e.retain);
}
function B_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Fe();
  function l(u) {
    if (s <= 0)
      return !0;
    if (_r(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), p = d - f, m = Math.min(s, p);
        if (m > 0) {
          let g = u;
          const y = f > 0, k = m < d - f;
          if (y && k) {
            const [, _] = u.splitText(f);
            [g] = _.splitText(m);
          } else y ? [, g] = u.splitText(f) : k && ([g] = u.splitText(m));
          if (Gr(r)) {
            const _ = g.getParent();
            if (D(_)) {
              const S = r.char;
              let N;
              Array.isArray(S) ? a >= 0 && a <= S.length - 1 && (N = S[a]) : a === 0 && (N = S);
              const A = N ? Tn(N, _) : !1;
              if (A && Array.isArray(S) && S.length > 1) {
                const B = pe("");
                g.replace(B);
                const M = typeof r.segment == "string" ? r.segment : void 0, q = yi(S.slice(1), n, g, M);
                let $ = B;
                for (const J of q)
                  $.insertAfter(J), $ = J;
                B.remove(), Rt(r, g);
              } else if (A)
                Rt(r, g);
              else {
                g.remove();
                const B = td(g, r, n, i);
                if (B && B.length > 0) {
                  let M = _;
                  for (const q of B)
                    M.insertAfter(q), M = q;
                }
              }
            } else {
              const S = pe("");
              g.replace(S);
              const N = td(g, r, n, i);
              if (N && N.length > 0) {
                let A = S;
                for (const B of N)
                  A.insertAfter(B), A = B;
                S.remove();
              } else
                S.replace(g);
            }
          } else
            Rt(r, g);
          s -= m;
        }
      }
      o += d;
    } else if (Nt(u))
      e <= o && o < e + t && s > 0 && (rd(u, r), s -= 1), o += 1;
    else if (D(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (Gr(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            Ha(u, p.style), typeof p.cid == "string" && kt(u, kn, () => p.cid);
            const m = Ue(p, Qs);
            m && Object.keys(m).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...m
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || nC(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && Ea(u), !0;
        }
      }
      d && Ea(u), a -= 1;
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
        if (!fr(u))
          rd(u, r);
        else if (fl(r)) {
          const p = qh(r.para, n);
          p && u.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if (F(u)) {
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
function td(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = yi(t.char, r, e, i), o = s.find(D);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Rt(t, e);
    return;
  }
  const a = {};
  Ih.forEach((u) => {
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
function Oh(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  O(r) ? (r.setMarker(t), r.setTextContent(we(t))) : Xt(r) && r.getTextType() === "marker" && r.setTextContent(we(t) + L);
}
function Ha(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    O(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = D(e.getParent()), i = e.getFirstChild();
  Xt(i) && i.getTextType() === "marker" && i.getTextContent() === we(r, n) && i.setTextContent(we(t, n));
  const s = e.getLastChild();
  Xt(s) && s.getTextType() === "marker" && s.getTextContent() === nt(r, n) && s.setTextContent(nt(t, n));
}
function rd(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && D(e) && Gr(t)) {
      const i = Ga(n);
      if (Ha(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        kt(e, kn, () => o);
      }
      const s = Ue(i, Qs);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Ge(e) || ge(e) || Be(e) || j(e) || De(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (ht(e) || ae(e) || D(e)) && (r === "style" && ae(e) ? Oh(e, n) : r === "style" && D(e) ? Ha(e, n) : r === "code" && ht(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && kt(e, Wr, () => n));
  }
}
function V_(e, t, r) {
  if (t <= 0)
    return;
  const n = Fe();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (_r(a)) {
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
          const p = a.getNextSibling();
          if (p && Se(p)) {
            let m = i + 1;
            const g = p.getChildren();
            for (const k of g) {
              if (s <= 0)
                break;
              const _ = i;
              if (i = m, o(k)) {
                i = _;
                break;
              }
              _r(k) ? m += k.getTextContentSize() : Nt(k) && (m += 1), i = _;
            }
            const y = p.getChildren();
            for (const k of y)
              k.remove(), a.append(k);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Gt(), !0);
        } else ae(a) ? a.replace(Gt(), !0) : a.remove();
      }
      i += 1;
    } else if (F(a)) {
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
  if (t === ns)
    return nd(e, r, n, i);
  if (t.endsWith(ns) && !fl(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Gr(r))
        throw new Error("Text + LF should not have char attributes");
      o += eo(e, s, r, i);
    }
    return o += nd(e + o, r, n, i), o;
  } else return Gr(r) ? H_(e, t, r, n, i) : eo(e, t, r, i);
}
function H_(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = pe(t === "" ? Ut : t);
  Rt(r, s);
  let o;
  {
    let y = function(k) {
      if (_r(k)) {
        const _ = k.getTextContentSize();
        if (e >= g && e < g + _) {
          const S = k.getParent();
          return D(S) && (o = S), !0;
        }
        g += _;
      } else if (Nt(k))
        g += 1;
      else if (D(k)) {
        const _ = k.getChildren();
        for (const S of _)
          if (y(S))
            return !0;
      } else if (F(k)) {
        const _ = k.getChildren();
        for (const S of _)
          if (y(S))
            return !0;
        At(k) && (g += 1);
      }
      return !1;
    };
    const m = Fe();
    let g = 0;
    y(m);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const m = a[0];
      m && Tn(m, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Tn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = yi(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(D);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), eo(e, t, void 0, i);
  const f = {};
  for (const [m, g] of Object.entries(r))
    m !== "char" && m !== "segment" && typeof g == "string" && (f[m] = g);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const m of u)
    if (!wh(e, m, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), eo(e, t, void 0, i));
}
function eo(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Fe();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (_r(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = pe(t);
        if (Rt(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          D(f) && !Gr(r) ? f.insertAfter(d) : c.insertAfter(d);
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
        const d = pe(t);
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
        const d = pe(t);
        return Rt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (At(c)) {
      if (!o && e === s) {
        const d = pe(t);
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
        const d = pe(t);
        return Rt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (F(c)) {
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
    const c = pe(t);
    Rt(r, c);
    const l = Gt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function wh(e, t, r) {
  const n = Fe();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Gt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!F(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (Se(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Gt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (_r(l)) {
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
      } else if (F(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return F(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Gt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Se(a) ? fr(a) && ae(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Se(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (D(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Se(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function G_(e, t, r, n, i) {
  let s;
  return zr("chapter", t) ? s = Y_(t.insert.chapter, r) : zr("verse", t) ? s = X_(t.insert.verse, r) : zr("ms", t) ? s = Q_(t.insert.ms) : zr("note", t) ? s = Rh(t, r, n, i) : zr("unknown", t) ? s = $h(t, r, n, i) : zr("unmatched", t) && (s = eC(t.insert.unmatched, r)), s ? wh(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function nd(e, t, r, n) {
  let i;
  fl(t) ? i = qh(t.para, r) : rC(t) && (i = J_(t.book)), i ??= Gt();
  const s = i, o = ae(s), a = fr(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (_r(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (ae(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const m = e - c, [g] = m > 0 ? d.splitText(m) : [void 0];
          let y, k = g?.getPreviousSibling();
          for (; k; ) {
            const _ = k;
            k = k.getPreviousSibling(), y ? y.insertBefore(_) : s.append(_), y = _;
          }
          return g && s.append(g), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Nt(d))
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
        if (fr(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (ae(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ae(d) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${d.getMarker()}) at targetIndex ${e}`), d.insertAfter(s), l = !0, !0;
    } else if (F(d)) {
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
  return u(Fe()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function J_(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Yi || !r || !Ft.isValidBookCode(r))
    return;
  const n = Ue(e, _x);
  return op(r, n);
}
function qh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Ue(e, xx), i = ti(r, n);
  if (!qn(t))
    return i;
  if (t.markerMode === "editable")
    i.append(ot(r), _o());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = we(r) + L;
    i.append(t.hasGutterParaMarkers ? Bb(s) : Tr("marker", s));
  }
  return i;
}
function Y_(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Ue(e, Cx);
  let a;
  if (t.markerMode === "editable")
    a = lp(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = qc(r, c, n, i, s, o);
  }
  return a;
}
function X_(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Ue(e, Sx);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Dt(r, n);
    c = kp(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Yc(n, l, i, s, o, a);
  }
  return c;
}
function Q_(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Ue(e, vx);
  return Vf(t, r, n, s, i);
}
function Rh(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Ue(i.note, Mx), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const g of c?.ops ?? [])
    if (typeof g.insert == "string")
      if (Gr(g.attributes)) {
        const y = yi(g.attributes.char, t, pe(g.insert), void 0, Lh(g.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(pe(g.insert));
  return Ch(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function $h(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Ue(i, Ex), l = wc(s, o, c), u = a?.ops ?? [];
  u.length > 0 && Z_(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && kt(l, Wr, () => d), l;
}
function Z_(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Gr(s.attributes)) {
        const o = pe(s.insert), a = yi(s.attributes.char, t, o, void 0, Lh(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(pe(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (zr("unknown", s)) {
        const o = $h(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (zr("note", s)) {
        const o = Rh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function eC(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = Vc(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Lh(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Ga(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function yi(e, t, r, n, i, s = !1, o = !1) {
  v(r) && r.getTextContentSize() === 0 && r.setTextContent(Ut);
  const a = () => {
    o && v(r) && r.getTextContent() !== Ut && r.setTextContent(L + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Ga), l = c[0], u = i?.[i.length - 1];
    if (D(u) && Tn(l, u))
      return c.length > 1 ? yi(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, p, m) => {
      const g = xr(p.style, Ue(p, Qs));
      if (typeof p.cid == "string" && kt(g, kn, () => p.cid), n && m === c.length - 1 && kt(g, Wr, () => n), f)
        if (D(f)) {
          const y = f.getMarker(), k = [];
          da(y, k, t, !0), k.forEach((S) => g.append(S)), g.append(f);
          const _ = [];
          ua(f, _, t, !0), _.forEach((S) => g.append(S));
        } else
          g.append(f);
      return g;
    }, r);
    return da(l.style, d, t, s), ua(d, d, t, s), [d];
  } else {
    const c = Ga(e), l = i?.[i.length - 1];
    if (D(l) && Tn(c, l))
      return r && l.append(r), [];
    a();
    const u = xr(c.style, Ue(c, Qs));
    return typeof c.cid == "string" && kt(u, kn, () => c.cid), n && kt(u, Wr, () => n), r && u.append(r), da(c.style, u, t, s), ua(u, u, t, s), [u];
  }
}
function ua(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && tC(e.getMarker(), t, r, !1, n);
}
function da(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = ot(e, "opening", n) : r?.markerMode === "visible" && (i = Tr("marker", we(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function tC(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = ot("", "selfClosing") : s = ot(e, "closing", i) : r?.markerMode === "visible" && (s = Tr("marker", n ? nt("") : nt(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function rC(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function fl(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Gr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function nC(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Rt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        kt(t, Wr, () => n);
        continue;
      }
      if (iC(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const Ih = [
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
function iC(e) {
  return Ih.includes(e);
}
function sC() {
  const [e] = ce();
  return z(() => e.registerCommand(mo, (t) => (oC(t), !1), mn), [e]), null;
}
function oC(e) {
  if (aC(e.target))
    return;
  const t = w();
  P(t) && cC(t);
}
function bi(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (zt(t))
      r++, t = t.getNextSibling(), v(t) && t.getTextContent() === L && (r++, t = t.getNextSibling());
    else if (ge(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Zt(e, r), !0);
}
function aC(e) {
  if (!_f(e))
    return !1;
  const t = di(e);
  if (!Vb(t))
    return !1;
  const r = t.getParent();
  return r ? Se(r) ? bi(r) : (Zt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function cC(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = se(t.key);
  if (!Se(r))
    return !1;
  const n = r.getFirstChild();
  return !Pr(n) && !wn(n) ? !1 : bi(r);
}
function lC() {
  const [e] = ce();
  return z(() => {
    const t = (r) => r instanceof KeyboardEvent && !uC(r) || !ss() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Ve(
      e.registerCommand(vr, t, Ne),
      e.registerCommand(Us, t, Ne),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(cr, t, xt),
      e.registerCommand(yn, t, xt),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Cc, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = di(r.target);
        return !n || !Jr(n) ? !1 : (r.preventDefault(), !0);
      }, Ne),
      e.registerCommand(Cy, t, Ne),
      e.registerCommand(Sy, t, Ne),
      e.registerCommand(vy, t, Ne)
    );
  }, [e]), null;
}
function uC(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Jr(e) {
  return Ze(e, (t) => De(t) || eh(t)) ?? void 0;
}
function ss() {
  const e = w();
  return P(e) ? Jr(e.anchor.getNode()) !== void 0 || Jr(e.focus.getNode()) !== void 0 : !1;
}
function dC(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function fC(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), dC(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function pC(e, t, r, n) {
  if (!EC(t) || fC(e, r))
    return !1;
  const i = r === "up" ? Tx(t) : kx(t);
  return i && n.preventDefault(), i;
}
function hC({ viewOptions: e }) {
  const [t] = ce();
  return gC(t, e), null;
}
function gC(e, t) {
  z(() => {
    if (!e.hasNodes([hr, St, Ae]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = w();
      if (!P(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = id(o), d = _C(i, sd(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return pC(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = id(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return sd(a, n.key) ? l = !c && cd(i, "next") || !c && yC(i) || vC(i) || !c && s && ad(i, "next") : mC(a, n.key) && (l = !c && cd(i, "previous") || !c && bC(i) || MC(i, t) || !c && s && ad(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(vr, r, Ne);
  }, [e, t]);
}
function id(e) {
  return e.dir || "ltr";
}
function sd(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function mC(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Ja(e) {
  if (!D(e) || e.getMarker() !== "fp")
    return;
  const t = Qt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function yC(e) {
  const t = Ja(Sp(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Zt(t, 0), !0);
}
function bC(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Ja(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : od(n);
  }
  if (t.offset === 0) {
    const n = Ja(r);
    return n ? od(n) : !1;
  }
  return !1;
}
function od(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (v(t))
    return t.select(), !0;
  if (F(t)) {
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
function kC(e) {
  if (to)
    for (const { segment: r } of to.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function TC(e) {
  if (to) {
    let n = 0;
    for (const { index: i } of to.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Dh(e) {
  for (let t = e; t; t = t.getParent())
    if (F(t) && !t.isInline())
      return t;
}
function Uh(e) {
  return !!e && O(e) && Jr(e) !== void 0;
}
function oi(e) {
  return v(e) && !e.isToken() && !Uh(e) && e.getTextContentSize() > 0;
}
function Fh(e) {
  return ps(e) ? !0 : j(e) ? e.getIsCollapsed() === !0 : v(e) ? (e.isToken() || Uh(e)) && e.getTextContentSize() > 0 : yo(e) ? !Be(e) : !1;
}
function ai(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Ro(e, t, r) {
  for (let n = e; n; ) {
    if (Fh(n))
      return n;
    if (F(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? ai(n, t, r);
      continue;
    }
    if (oi(n))
      return n;
    n = ai(n, t, r);
  }
}
function pl(e, t, r, n, i) {
  return r === "element" && F(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? ai(e, n, i) : r === "text" && Fh(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : ai(e, n, i);
}
function fa(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = pl(e.node, e.offset, e.kind, "previous", t), n = Ro(r, "previous", t);
  if (!n)
    return e;
  if (oi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function xC(e, t) {
  const r = e.getNode(), n = Dh(r);
  if (!n)
    return;
  if (e.type === "text" && oi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return fa({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = pl(r, e.offset, e.type, t, n), s = Ro(i, t, n);
  if (!s)
    return;
  if (oi(s)) {
    const c = s.getTextContent(), l = t === "next" ? kC(c) : TC(c);
    return fa({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return fa({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function zh(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = xC(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function ad(e, t) {
  return zh(e, t, "collapse");
}
function _C(e, t) {
  return zh(e, t, "extend");
}
function CC(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && oi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = pl(n, e.offset, e.type, t, r);
  return Ro(i, t, r) === void 0;
}
function SC(e, t) {
  const r = Fe();
  for (let n = e; n; ) {
    const i = ai(n, t, r), s = i && Ro(i, t, r);
    if (!s)
      return;
    if (n = Jr(s), !n)
      return s;
  }
}
function cd(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Jr(n))
    return !1;
  const i = Dh(n);
  if (!i || !CC(r, t, i))
    return !1;
  const s = ai(i, t, Fe()), o = s && Jr(s);
  if (!o)
    return !1;
  const a = SC(o, t);
  if (!a)
    return !0;
  if (oi(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function ld(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function vC(e) {
  const t = e.anchor.getNode(), r = Sp(e);
  if (j(r) && !O(r.getFirstChild())) {
    if (Se(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Se(i) && bi(i)) && i.selectStart(), !0;
      }
    } else return Xt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Se(t) && j(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : ld(r), !0;
  }
  const n = r?.getParent();
  if (Xt(r) && j(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? ld(n) : n.selectEnd(), !0;
  }
  return !1;
}
function MC(e, t) {
  const r = Mk(e);
  if (gs(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (ht(i.getParent()))
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
  if (Se(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = Ze(o, (c) => j(c));
    if (j(a) && a.getIsCollapsed()) {
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
function EC(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return ge(t) && yo(t);
}
function AC() {
  const [e] = ce();
  return PC(e), null;
}
function PC(e) {
  z(() => {
    if (!e.hasNodes([me]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Ve(
      e.registerNodeTransform(me, wC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(me, Hk),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(me, jp),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(me, (t) => ts(xn("char"), t)),
      e.registerNodeTransform(Ke, qC)
    );
  }, [e]);
}
function pa(e) {
  return e.getChildren().some(O);
}
function NC(e, t) {
  const r = t.getFirstChild();
  if (!O(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (vo(n)) {
    const i = n.getTextContent();
    i.startsWith(L) && (i === L ? n.remove() : n.setTextContent(i.slice(L.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function OC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  O(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function wC(e) {
  if (!D(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (pa(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ne(e, kn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (D(i) && Tn({ style: t, cid: r }, i) && qt(n, i.getUnknownAttributes()))
    if (pa(i)) {
      if (NC(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  D(s) && Tn({ style: t, cid: r }, s) && qt(n, s.getUnknownAttributes()) && (pa(s) ? OC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function qC(e) {
  const t = e.getParent();
  if (!D(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(Ut) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function Kh(e) {
  return e.replaceAll("	", " ");
}
function jh() {
  const e = w();
  return !!e && !e.isCollapsed();
}
function Bh(e) {
  const t = () => !jh();
  return Ve(e.registerCommand(bo, t, dt), e.registerCommand(yn, t, dt));
}
const hl = (e) => {
  e.dispatchCommand(bo, null);
}, gl = (e) => {
  e.dispatchCommand(yn, null);
}, ml = (e) => {
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
    e.dispatchCommand(cr, s);
  });
}, yl = (e) => {
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
    e.dispatchCommand(cr, i);
  });
};
function RC() {
  const [e] = ce();
  return z(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Fs ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), hl(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), gl(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? yl(e) : ml(e)));
    };
    return Ve(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      Bh(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function $C({ logger: e }) {
  const [t] = ce();
  return z(() => Ve(
    // When the backslash or forward slash key is typed.
    t.registerCommand(vr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Yn),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(cr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Yn),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Cc, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Yn)
  ), [t, e]), null;
}
function LC({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), C("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: C("span", { className: "text", children: i.title }) });
}
function IC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return C("div", { className: "typeahead-popover", children: C("ul", { children: e.map((i, s) => C(LC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let DC = 0;
class Ai {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${DC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function UC({ options: e } = {}) {
  const [t] = ce(), [r, n] = de(() => !t.isEditable()), [i, s] = de({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = de(void 0), c = ze(() => {
    const d = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new Ai("Cut", {
        onSelect: () => {
          gl(t);
        },
        isDisabled: r
      }),
      new Ai("Copy", {
        onSelect: () => {
          hl(t);
        }
      }),
      new Ai("Paste", {
        onSelect: () => {
          ml(t);
        },
        isDisabled: r
      }),
      new Ai("Paste as Plain Text", {
        onSelect: () => {
          yl(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new Ai(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...d, ...f];
  }, [t, r, e]), l = he(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  z(() => Bh(t), [t]), z(() => {
    const d = (f) => {
      const p = f.target;
      t.getRootElement() === p || gp(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
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
  const u = Z(null);
  return ds(() => {
    const d = u.current;
    if (!d)
      return;
    const { width: f, height: p } = d.getBoundingClientRect(), m = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), g = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    d.style.left = `${m}px`, d.style.top = `${g}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Jy.createPortal(C("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: C(IC, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), l());
  }, onOptionMouseEnter: (d) => {
    a(d);
  } }) }), document.body) : null;
}
function FC(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function zC(e) {
  if (!Py(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function KC(e) {
  return vt(e);
}
function ha(e, t, r) {
  const n = di(t.node);
  if (!yo(n) || KC(n))
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
function jC(e, t) {
  if (w())
    return !1;
  const r = e.getRootElement(), n = My(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !Ey(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, d;
  if (n.isCollapsed)
    u = ha(e, c, zC(c)), d = u;
  else {
    const y = FC(n.getRangeAt(0), c);
    u = ha(e, c, y ? "before" : "after"), d = ha(e, l, y ? "after" : "before");
  }
  if (!u && !d)
    return !1;
  const f = u ?? c, p = d ?? l, m = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = Ay(m, e);
  return g ? (ei(g), g.dirty = !t, t) : !1;
}
function BC() {
  const [e] = ce(), t = Z(!1), r = Z(!1);
  return z(() => {
    const n = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, r.current && (r.current = !1, e.update(() => {
        const s = w();
        P(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", n, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, r.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", n, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), z(() => e.registerCommand(dr, () => (jC(e, t.current) && (r.current = !0), !1), xt), [e]), null;
}
function VC() {
  const [e] = ce();
  return z(() => e.registerCommand(vr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Fs ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, xt), [e]), null;
}
function WC({ isEditable: e }) {
  const [t] = ce();
  return ds(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function ud(e) {
  return !!e && $c(se(e));
}
function Vh(e) {
  const [t] = ce(), r = Z(void 0), n = he((i) => {
    const s = w(), o = P(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = ud(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = Eo(u, d);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const p = _k();
        i.insertAfter(p), r.current = p.getKey(), l = p.getKey();
      }
      Zt(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = se(a);
      v(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return z(() => {
    const i = () => {
      const a = e(), c = w(), l = P(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (Br(Vr), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (ms(c) || !c.includes(ri))
        return;
      const l = w(), u = P(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (Ck(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(ri).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Ve(t.registerCommand(dr, () => (i(), !1), mn), t.registerCommand(Sc, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = ud(a);
      }), c && t.update(() => {
        const l = se(a);
        v(l) && l.remove();
      }, { tag: Vr }), r.current = void 0, !1;
    }, mn), t.registerNodeTransform(Ke, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function HC() {
  const e = w();
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!F(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!ge(i) || Eo(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ge(s))
    return i;
}
function GC() {
  return Vh(HC), null;
}
function JC({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
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
          f || Br(Ny), o.setEditorState(l), o.dispatchCommand(Oy, void 0);
        }, { tag: Ff });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function YC({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ce();
  return XC(t, n), QC(i, e, r, n), null;
}
function XC(e, t) {
  const r = Z(void 0), n = Z(void 0), i = e.noteCallers, s = e.crossRefCallers;
  z(() => {
    let o = i;
    (!o || o.length <= 0) && (o = s_), r.current !== o && (r.current = o, dd("note-callers", o, t));
  }, [t, i]), z(() => {
    let o = s;
    (!o || o.length <= 0) && (o = o_), n.current !== o && (n.current = o, dd("cross-ref-callers", o, t));
  }, [t, s]);
}
function QC(e, t, r, n) {
  z(() => {
    if (!e.hasNodes([me, Ae, Jt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => sS(s));
    return Ve(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Ae, (s) => ZC(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(me, eS),
      e.registerNodeTransform(Ke, tS),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Jt, rS),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Jt, (s, { prevEditorState: o }) => nS(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(dr, () => iS(e, t, r, n), dt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function ZC(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => vt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    v(i) && !O(i) && i.getTextContent() !== Pt(e.getCaller()) && e.insertBefore(i);
  }
}
function eS(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => vt(o));
  if (!D(e) || !j(t) || !n)
    return;
  const i = Lc(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  v(s) ? s.getTextContent() !== L && s.setTextContent(L) : e.insertAfter(pe(L));
}
function tS(e) {
  const t = Qt(e), r = t?.getChildren(), n = r?.find((o) => vt(o));
  if (!v(e) || !j(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!O(e) && j(i) && e.getTextContent() !== L && (e.setTextContent(L), e.selectEnd()), D(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Ut) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Lc(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function rS(e) {
  if (!vt(e))
    return;
  const t = e.getNextSibling();
  !v(t) || O(t) ? e.insertAfter(pe(L)) : t.getTextContent() !== L && t.setTextContent(L);
}
function nS(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = se(r), a = o?.getParent();
      return vt(o) && j(a) && a.getCaller() === Wi;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function iS(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = w();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = Ze(o, (c) => j(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = se(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Pi(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (j(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Pi(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (j(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Pi(e, c, n);
    } else if (!a) {
      const c = Ze(o, (l) => j(l));
      if (c && c.getIsCollapsed() && Se(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Pi(e, l, n);
      }
    }
  }
  if (Se(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (wn(c) && j(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Pi(e, l, n);
    }
  }
  return !1;
}
function Pi(e, t, r) {
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
function sS(e) {
  const t = w();
  if (!P(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (j(i) && v(s)) {
    e.preventDefault();
    const o = xc();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), ei(o);
  }
}
function dd(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (oS(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function oS(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function $o(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!O(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Qi(e);
  return r && t.push(r), t.length > 0 && t.every((n) => v(n) && n.getMode() === "token") ? t : [];
}
function aS(e) {
  const t = e.getParent();
  if (j(t))
    return $o(t).some((r) => r.is(e)) ? t : void 0;
}
function ro(e) {
  const t = $o(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function cS(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function lS(e) {
  const t = wy();
  if (!P(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= ro(e);
  const i = cS(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= ro(e);
}
function Ya(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = aS(t);
  if (r)
    return uS(r, t, e.offset) ? void 0 : r;
}
function uS(e, t, r) {
  const n = $o(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function dS(e) {
  const t = $o(e), r = t[t.length - 1];
  v(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Zt(e, ro(e));
}
function fS(e = !1) {
  const t = w();
  if (!P(t))
    return !1;
  if (!t.isCollapsed())
    return pS(t.anchor, t.focus);
  const r = Ya(t.anchor);
  if (!r)
    return !1;
  if (!e && lS(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Zt(n, r.getIndexWithinParent());
  } else
    dS(r);
  return !0;
}
function pS(e, t) {
  const r = Ya(e), n = Ya(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && fd(e, r, i), n && fd(t, n, !i), !0;
}
function fd(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), ro(t), "element");
}
function hS() {
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
  }, [e]), z(() => e.registerCommand(dr, () => (fS(t.current) && Br(Vr), !1), mn), [e]), null;
}
function gS({ onChange: e }) {
  const [t] = ce();
  return z(() => t.registerCommand(dr, () => {
    const r = nl();
    return e?.(r), !1;
  }, dt), [t, e]), null;
}
function mS() {
  const [e] = ce();
  return yS(e), null;
}
function yS(e) {
  z(() => {
    if (!e.hasNodes([et]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(et, (t) => bS(t, e));
  }, [e]);
}
function bS(e, t) {
  Ba(t, e.getKey()) && gh(e.getFirstChild()), !(!ae(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = se(e.getKey());
    return ae(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Wh({ onStateChange: e }) {
  const [t] = ce(), [r, n] = de(t), i = Z(!1), s = Z(!1), o = Z(void 0), a = Z(void 0), c = he(() => {
    const l = w();
    let u;
    if (P(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : Ze(d, (k) => {
        const _ = k.getParent();
        return _ !== null && qy(_);
      });
      p === null && (p = d.getTopLevelElementOrThrow()), rs(p) && (p = Ze(d, ae) ?? p);
      const m = p.getKey(), g = r.getElementByKey(m), y = Ak(d, f);
      if (y && bx(y) && (u = y.getMarker()), g !== null && (ae(p) || ht(p) || gs(p))) {
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
  return z(() => t.registerCommand(dr, (l, u) => (c(), n(u), !1), xt), [t, c]), z(() => Ve(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Ry, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), xt), r.registerCommand($y, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), xt)), [c, r, e]), null;
}
function Hh(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function Yr(e) {
  return e ? Se(e) ? e : Ze(e, (r) => Se(r)) ?? void 0 : void 0;
}
function Gh(e) {
  if (!P(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Yr(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function bl(e) {
  return P(e) && e.isCollapsed() && e.anchor.type === "element" || !P(e) && !kc(e) ? !1 : e.getNodes().some((t) => ge(t));
}
function Jh(e) {
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Yr(r);
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
function Yh(e) {
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Yr(r);
  if (!n)
    return !1;
  if (F(r)) {
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
function pd(e, t) {
  return !!Xa(e, t);
}
function Xa(e, t) {
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && F(n)) {
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
function no(e, t) {
  if (!P(e))
    return !1;
  const r = Yr(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function Zn(e) {
  return bl(e) || Gh(e);
}
function Xh(e, t) {
  if (bl(e) || Gh(e))
    return !0;
  if (!P(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Jh(e) && no(e, "backward") || pd(e, "backward");
    case "deleteForward":
      return Yh(e) && no(e, "forward") || pd(e, "forward");
    case "insertText":
      return !1;
  }
}
function kS(e, t) {
  if (!(!P(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Xa(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (Jh(e) && no(e, "backward")) {
        const n = Yr(e.anchor.getNode());
        if (Se(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Xa(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (Yh(e) && no(e, "forward")) {
        const i = Yr(e.anchor.getNode())?.getNextSibling();
        if (Se(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function hd(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return kc(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!P(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!P(e) || e.isCollapsed())
    return !1;
  const r = Yr(e.anchor.getNode()), n = Yr(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function Qh(e) {
  if (v(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else F(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function TS(e) {
  const t = e.getPreviousSibling();
  if (!Se(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? Qh(r) : bi(t) || t.selectStart();
}
function Zh(e) {
  return ge(e) || Ge(e) ? [] : Se(e) ? e.getChildren().flatMap(Zh) : [e];
}
function xS(e) {
  const t = [];
  for (const r of e) {
    const n = Zh(r);
    n.length !== 0 && (Se(r) && t.length > 0 && t.push(pe(" ")), t.push(...n));
  }
  return t;
}
function gd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function _S(e) {
  if (Array.isArray(e)) return e;
}
function CS(e, t) {
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
function SS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vS(e, t) {
  return _S(e) || CS(e, t) || MS(e, t) || SS();
}
function MS(e, t) {
  if (e) {
    if (typeof e == "string") return gd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? gd(e, t) : void 0;
  }
}
const eg = Object.entries, md = Object.setPrototypeOf, ES = Object.isFrozen, AS = Object.getPrototypeOf, PS = Object.getOwnPropertyDescriptor;
let tt = Object.freeze, it = Object.seal, Gn = Object.create, tg = typeof Reflect < "u" && Reflect, Qa = tg.apply, Za = tg.construct;
tt || (tt = function(t) {
  return t;
});
it || (it = function(t) {
  return t;
});
Qa || (Qa = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Za || (Za = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Vn = Je(Array.prototype.forEach), NS = Je(Array.prototype.lastIndexOf), yd = Je(Array.prototype.pop), Wn = Je(Array.prototype.push), OS = Je(Array.prototype.splice), Kr = Array.isArray, Li = Je(String.prototype.toLowerCase), ga = Je(String.prototype.toString), bd = Je(String.prototype.match), Ni = Je(String.prototype.replace), kd = Je(String.prototype.indexOf), wS = Je(String.prototype.trim), qS = Je(Number.prototype.toString), RS = Je(Boolean.prototype.toString), Td = typeof BigInt > "u" ? null : Je(BigInt.prototype.toString), xd = typeof Symbol > "u" ? null : Je(Symbol.prototype.toString), Xe = Je(Object.prototype.hasOwnProperty), Oi = Je(Object.prototype.toString), Ye = Je(RegExp.prototype.test), dn = $S(TypeError);
function Je(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Qa(e, t, n);
  };
}
function $S(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Za(e, r);
  };
}
function fe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Li;
  if (md && md(e, null), !Kr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (ES(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function LS(e) {
  for (let t = 0; t < e.length; t++)
    Xe(e, t) || (e[t] = null);
  return e;
}
function st(e) {
  const t = Gn(null);
  for (const n of eg(e)) {
    var r = vS(n, 2);
    const i = r[0], s = r[1];
    Xe(e, i) && (Kr(s) ? t[i] = LS(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = st(s) : t[i] = s);
  }
  return t;
}
function IS(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return qS(e);
    case "boolean":
      return RS(e);
    case "bigint":
      return Td ? Td(e) : "0";
    case "symbol":
      return xd ? xd(e) : "Symbol()";
    case "undefined":
      return Oi(e);
    case "function":
    case "object": {
      if (e === null)
        return Oi(e);
      const t = e, r = Bt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Oi(n);
      }
      return Oi(e);
    }
    default:
      return Oi(e);
  }
}
function Bt(e, t) {
  for (; e !== null; ) {
    const n = PS(e, t);
    if (n) {
      if (n.get)
        return Je(n.get);
      if (typeof n.value == "function")
        return Je(n.value);
    }
    e = AS(e);
  }
  function r() {
    return null;
  }
  return r;
}
function DS(e) {
  try {
    return Ye(e, ""), !0;
  } catch {
    return !1;
  }
}
const _d = tt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ma = tt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ya = tt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), US = tt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ba = tt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), FS = tt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Cd = tt(["#text"]), Sd = tt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ka = tt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), vd = tt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ps = tt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), zS = it(/{{[\w\W]*|^[\w\W]*}}/g), KS = it(/<%[\w\W]*|^[\w\W]*%>/g), jS = it(/\${[\w\W]*/g), BS = it(/^data-[\-\w.\u00B7-\uFFFF]+$/), VS = it(/^aria-[\-\w]+$/), Md = it(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), WS = it(/^(?:\w+script|data):/i), HS = it(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), GS = it(/^html$/i), JS = it(/^[a-z][.\w]*(-[.\w]+)+$/i), Ed = it(/<[/\w!]/g), Ad = it(/<[/\w]/g), YS = it(/<\/no(script|embed|frames)/i), XS = it(/\/>/i), Et = {
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
}, QS = function() {
  return typeof window > "u" ? null : window;
}, ZS = function(t, r) {
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
}, Pd = function() {
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
}, Ur = function(t, r, n, i) {
  return Xe(t, r) && Kr(t[r]) ? fe(i.base ? st(i.base) : {}, t[r], i.transform) : n;
};
function rg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : QS();
  const t = (U) => rg(U);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Et.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = Bt(f, "cloneNode"), m = Bt(f, "remove"), g = Bt(f, "nextSibling"), y = Bt(f, "childNodes"), k = Bt(f, "parentNode"), _ = Bt(f, "shadowRoot"), S = Bt(f, "attributes"), N = o && o.prototype ? Bt(o.prototype, "nodeType") : null, A = o && o.prototype ? Bt(o.prototype, "nodeName") : null, B = o && o.prototype ? Bt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const U = r.createElement("template");
    U.content && U.content.ownerDocument && (r = U.content.ownerDocument);
  }
  let M, q = "", $, J = !1, Q = 0;
  const Ee = function() {
    if (Q > 0)
      throw dn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, re = function(h) {
    Ee(), Q++;
    try {
      return M.createHTML(h);
    } finally {
      Q--;
    }
  }, qe = function(h) {
    Ee(), Q++;
    try {
      return M.createScriptURL(h);
    } finally {
      Q--;
    }
  }, be = function() {
    return J || ($ = ZS(d, i), J = !0), $;
  }, rr = r, Re = rr.implementation, tn = rr.createNodeIterator, mr = rr.createDocumentFragment, Mt = rr.getElementsByTagName, te = n.importNode;
  let E = Pd();
  t.isSupported = typeof eg == "function" && typeof k == "function" && Re && Re.createHTMLDocument !== void 0;
  const Y = zS, le = KS, W = jS, xe = BS, gt = VS, Kt = WS, mt = HS, We = JS;
  let ct = Md, ue = null;
  const $n = fe({}, [..._d, ...ma, ...ya, ...ba, ...Cd]);
  let ye = null;
  const xi = fe({}, [...Sd, ...ka, ...vd, ...Ps]);
  let ve = Object.seal(Gn(null, {
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
  })), wr = null, qr = null;
  const nr = Object.seal(Gn(null, {
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
  let Rr = !0, $r = !0, _i = !1, Ts = !0, jt = !1, R = !0, K = !1, G = !1, X = null, _e = null, lt = !1, wt = !1, rn = !1, nn = !1, jl = !0, Bl = !1;
  const Vl = "user-content-";
  let zo = !0, xs = !1, Ln = {}, ir = null;
  const Ko = fe({}, [
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
  let Wl = null;
  const Hl = fe({}, ["audio", "video", "img", "source", "image", "track"]);
  let jo = null;
  const Gl = fe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), _s = "http://www.w3.org/1998/Math/MathML", Cs = "http://www.w3.org/2000/svg", sr = "http://www.w3.org/1999/xhtml";
  let In = sr, Bo = !1, Vo = null;
  const Vm = fe({}, [_s, Cs, sr], ga), Jl = tt(["mi", "mo", "mn", "ms", "mtext"]);
  let Wo = fe({}, Jl);
  const Yl = tt(["annotation-xml"]);
  let Ho = fe({}, Yl);
  const Wm = fe({}, ["title", "style", "font", "a", "script"]);
  let Ci = null;
  const Hm = ["application/xhtml+xml", "text/html"], Gm = "text/html";
  let $e = null, Dn = null;
  const Jm = r.createElement("form"), Xl = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, Go = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Dn && Dn === h)
      return;
    (!h || typeof h != "object") && (h = {}), h = st(h), Ci = // eslint-disable-next-line unicorn/prefer-includes
    Hm.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? Gm : h.PARSER_MEDIA_TYPE, $e = Ci === "application/xhtml+xml" ? ga : Li, ue = Ur(h, "ALLOWED_TAGS", $n, {
      transform: $e
    }), ye = Ur(h, "ALLOWED_ATTR", xi, {
      transform: $e
    }), Vo = Ur(h, "ALLOWED_NAMESPACES", Vm, {
      transform: ga
    }), jo = Ur(h, "ADD_URI_SAFE_ATTR", Gl, {
      transform: $e,
      base: Gl
    }), Wl = Ur(h, "ADD_DATA_URI_TAGS", Hl, {
      transform: $e,
      base: Hl
    }), ir = Ur(h, "FORBID_CONTENTS", Ko, {
      transform: $e
    }), wr = Ur(h, "FORBID_TAGS", st({}), {
      transform: $e
    }), qr = Ur(h, "FORBID_ATTR", st({}), {
      transform: $e
    }), Ln = Xe(h, "USE_PROFILES") ? h.USE_PROFILES && typeof h.USE_PROFILES == "object" ? st(h.USE_PROFILES) : h.USE_PROFILES : !1, Rr = h.ALLOW_ARIA_ATTR !== !1, $r = h.ALLOW_DATA_ATTR !== !1, _i = h.ALLOW_UNKNOWN_PROTOCOLS || !1, Ts = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, jt = h.SAFE_FOR_TEMPLATES || !1, R = h.SAFE_FOR_XML !== !1, K = h.WHOLE_DOCUMENT || !1, wt = h.RETURN_DOM || !1, rn = h.RETURN_DOM_FRAGMENT || !1, nn = h.RETURN_TRUSTED_TYPE || !1, lt = h.FORCE_BODY || !1, jl = h.SANITIZE_DOM !== !1, Bl = h.SANITIZE_NAMED_PROPS || !1, zo = h.KEEP_CONTENT !== !1, xs = h.IN_PLACE || !1, ct = DS(h.ALLOWED_URI_REGEXP) ? h.ALLOWED_URI_REGEXP : Md, In = typeof h.NAMESPACE == "string" ? h.NAMESPACE : sr, Wo = Xe(h, "MATHML_TEXT_INTEGRATION_POINTS") && h.MATHML_TEXT_INTEGRATION_POINTS && typeof h.MATHML_TEXT_INTEGRATION_POINTS == "object" ? st(h.MATHML_TEXT_INTEGRATION_POINTS) : fe({}, Jl), Ho = Xe(h, "HTML_INTEGRATION_POINTS") && h.HTML_INTEGRATION_POINTS && typeof h.HTML_INTEGRATION_POINTS == "object" ? st(h.HTML_INTEGRATION_POINTS) : fe({}, Yl);
    const x = Xe(h, "CUSTOM_ELEMENT_HANDLING") && h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING == "object" ? st(h.CUSTOM_ELEMENT_HANDLING) : Gn(null);
    if (ve = Gn(null), Xe(x, "tagNameCheck") && Xl(x.tagNameCheck) && (ve.tagNameCheck = x.tagNameCheck), Xe(x, "attributeNameCheck") && Xl(x.attributeNameCheck) && (ve.attributeNameCheck = x.attributeNameCheck), Xe(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), it(ve), jt && ($r = !1), rn && (wt = !0), Ln && (ue = fe({}, Cd), ye = Gn(null), Ln.html === !0 && (fe(ue, _d), fe(ye, Sd)), Ln.svg === !0 && (fe(ue, ma), fe(ye, ka), fe(ye, Ps)), Ln.svgFilters === !0 && (fe(ue, ya), fe(ye, ka), fe(ye, Ps)), Ln.mathMl === !0 && (fe(ue, ba), fe(ye, vd), fe(ye, Ps))), nr.tagCheck = null, nr.attributeCheck = null, Xe(h, "ADD_TAGS") && (typeof h.ADD_TAGS == "function" ? nr.tagCheck = h.ADD_TAGS : Kr(h.ADD_TAGS) && (ue === $n && (ue = st(ue)), fe(ue, h.ADD_TAGS, $e))), Xe(h, "ADD_ATTR") && (typeof h.ADD_ATTR == "function" ? nr.attributeCheck = h.ADD_ATTR : Kr(h.ADD_ATTR) && (ye === xi && (ye = st(ye)), fe(ye, h.ADD_ATTR, $e))), Xe(h, "ADD_URI_SAFE_ATTR") && Kr(h.ADD_URI_SAFE_ATTR) && fe(jo, h.ADD_URI_SAFE_ATTR, $e), Xe(h, "FORBID_CONTENTS") && Kr(h.FORBID_CONTENTS) && (ir === Ko && (ir = st(ir)), fe(ir, h.FORBID_CONTENTS, $e)), Xe(h, "ADD_FORBID_CONTENTS") && Kr(h.ADD_FORBID_CONTENTS) && (ir === Ko && (ir = st(ir)), fe(ir, h.ADD_FORBID_CONTENTS, $e)), zo && (ue["#text"] = !0), K && fe(ue, ["html", "head", "body"]), ue.table && (fe(ue, ["tbody"]), delete wr.tbody), h.TRUSTED_TYPES_POLICY) {
      if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw dn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw dn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const I = M;
      M = h.TRUSTED_TYPES_POLICY;
      try {
        q = re("");
      } catch (V) {
        throw M = I, V;
      }
    } else h.TRUSTED_TYPES_POLICY === null ? (M = void 0, q = "") : (M === void 0 && (M = be()), M && typeof q == "string" && (q = re("")));
    tt && tt(h), Dn = h;
  }, Ql = fe({}, [...ma, ...ya, ...US]), Zl = fe({}, [...ba, ...FS]), Ym = function(h, x, I) {
    return x.namespaceURI === sr ? h === "svg" : x.namespaceURI === _s ? h === "svg" && (I === "annotation-xml" || Wo[I]) : !!Ql[h];
  }, Xm = function(h, x, I) {
    return x.namespaceURI === sr ? h === "math" : x.namespaceURI === Cs ? h === "math" && Ho[I] : !!Zl[h];
  }, Qm = function(h, x, I) {
    return x.namespaceURI === Cs && !Ho[I] || x.namespaceURI === _s && !Wo[I] ? !1 : !Zl[h] && (Wm[h] || !Ql[h]);
  }, Zm = function(h) {
    let x = k(h);
    (!x || !x.tagName) && (x = {
      namespaceURI: In,
      tagName: "template"
    });
    const I = Li(h.tagName), V = Li(x.tagName);
    return Vo[h.namespaceURI] ? h.namespaceURI === Cs ? Ym(I, x, V) : h.namespaceURI === _s ? Xm(I, x, V) : h.namespaceURI === sr ? Qm(I, x, V) : !!(Ci === "application/xhtml+xml" && Vo[h.namespaceURI]) : !1;
  }, Lr = function(h) {
    Wn(t.removed, {
      element: h
    });
    try {
      k(h).removeChild(h);
    } catch {
      if (m(h), !k(h))
        throw dn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Ss = function(h) {
    Si(h);
    const x = y(h);
    if (x) {
      const V = [];
      Vn(x, (H) => {
        Wn(V, H);
      }), Vn(V, (H) => {
        try {
          m(H);
        } catch {
        }
      });
    }
    const I = S(h);
    if (I)
      for (let V = I.length - 1; V >= 0; --V) {
        const H = I[V], ie = H && H.name;
        if (typeof ie == "string")
          try {
            h.removeAttribute(ie);
          } catch {
          }
      }
  }, sn = function(h, x) {
    try {
      Wn(t.removed, {
        attribute: x.getAttributeNode(h),
        from: x
      });
    } catch {
      Wn(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(h), h === "is")
      if (wt || rn)
        try {
          Lr(x);
        } catch {
        }
      else
        try {
          x.setAttribute(h, "");
        } catch {
        }
  }, ey = function(h) {
    const x = S(h);
    if (x)
      for (let I = x.length - 1; I >= 0; --I) {
        const V = x[I], H = V && V.name;
        if (!(typeof H != "string" || ye[$e(H)]))
          try {
            h.removeAttribute(H);
          } catch {
          }
      }
  }, Si = function(h) {
    const x = [h];
    for (; x.length > 0; ) {
      const I = x.pop();
      (N ? N(I) : I.nodeType) === Et.element && ey(I);
      const H = y(I);
      if (H)
        for (let ie = H.length - 1; ie >= 0; --ie)
          x.push(H[ie]);
    }
  }, ty = function(h) {
    if (!R)
      return;
    const x = [h];
    for (; x.length > 0; ) {
      const I = x.pop(), V = N ? N(I) : I.nodeType;
      if (V === Et.processingInstruction || V === Et.comment && Ye(Ad, I.data)) {
        try {
          m(I);
        } catch {
        }
        continue;
      }
      if (V === Et.element) {
        const ie = I, ke = $e(A ? A(I) : I.nodeName);
        try {
          ie.hasAttribute && ie.hasAttribute("patchsrc") && ie.removeAttribute("patchsrc"), ie.hasAttribute && ie.hasAttribute("for") && ke !== "label" && ke !== "output" && ie.removeAttribute("for");
        } catch {
        }
      }
      const H = y(I);
      if (H)
        for (let ie = H.length - 1; ie >= 0; --ie)
          x.push(H[ie]);
    }
  }, eu = function(h) {
    let x = null, I = null;
    if (lt)
      h = "<remove></remove>" + h;
    else {
      const ie = bd(h, /^[\r\n\t ]+/);
      I = ie && ie[0];
    }
    Ci === "application/xhtml+xml" && In === sr && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const V = M ? re(h) : h;
    if (In === sr)
      try {
        x = new u().parseFromString(V, Ci);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = Re.createDocument(In, "template", null);
      try {
        x.documentElement.innerHTML = Bo ? q : V;
      } catch {
      }
    }
    const H = x.body || x.documentElement;
    return h && I && H.insertBefore(r.createTextNode(I), H.childNodes[0] || null), In === sr ? Mt.call(x, K ? "html" : "body")[0] : K ? x.documentElement : H;
  }, tu = function(h) {
    const x = B ? B(h) : h.ownerDocument;
    return tn.call(
      x || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, vs = function(h) {
    return h = Ni(h, Y, " "), h = Ni(h, le, " "), h = Ni(h, W, " "), h;
  }, Jo = function(h) {
    var x;
    h.normalize();
    const I = B ? B(h) : h.ownerDocument, V = tn.call(
      I || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let H = V.nextNode();
    for (; H; )
      H.data = vs(H.data), H = V.nextNode();
    const ie = (x = h.querySelectorAll) === null || x === void 0 ? void 0 : x.call(h, "template");
    ie && Vn(ie, (ke) => {
      Un(ke.content) && Jo(ke.content);
    });
  }, Ms = function(h) {
    const x = A ? A(h) : null;
    return typeof x != "string" || $e(x) !== "form" ? !1 : typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    h.attributes !== S(h) || typeof h.removeAttribute != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
    h.childNodes !== y(h);
  }, Un = function(h) {
    if (!N || typeof h != "object" || h === null)
      return !1;
    try {
      return N(h) === Et.documentFragment;
    } catch {
      return !1;
    }
  }, vi = function(h) {
    if (!N || typeof h != "object" || h === null)
      return !1;
    try {
      return typeof N(h) == "number";
    } catch {
      return !1;
    }
  };
  function or(U, h, x) {
    U.length !== 0 && Vn(U, (I) => {
      I.call(t, h, x, Dn);
    });
  }
  const ry = function(h, x) {
    return !!(R && h.hasChildNodes() && !vi(h.firstElementChild) && Ye(Ed, h.textContent) && Ye(Ed, h.innerHTML) || R && h.namespaceURI === sr && x === "style" && vi(h.firstElementChild) || h.nodeType === Et.processingInstruction || R && h.nodeType === Et.comment && Ye(Ad, h.data));
  }, ny = function(h, x, I) {
    if (!wr[x] && su(x) && (ve.tagNameCheck instanceof RegExp && Ye(ve.tagNameCheck, x) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(x)))
      return !1;
    if (zo && !ir[x]) {
      const V = k(h), H = y(h);
      if (H && V) {
        const ie = H.length;
        for (let ke = ie - 1; ke >= 0; --ke) {
          const Le = h === I ? p(H[ke], !0) : H[ke];
          V.insertBefore(Le, g(h));
        }
      }
    }
    return Lr(h), !0;
  }, ru = function(h, x, I, V) {
    return h.length === 0 ? x : x === I || x === V ? st(x) : x;
  }, nu = function(h, x) {
    if (or(E.beforeSanitizeElements, h, null), h !== x && k(h) === null)
      return xs && Si(h), !0;
    if (Ms(h))
      return Lr(h), !0;
    const I = $e(A ? A(h) : h.nodeName);
    if (ue = ru(E.uponSanitizeElement, ue, $n, X), or(E.uponSanitizeElement, h, {
      tagName: I,
      allowedTags: ue
    }), h !== x && k(h) === null)
      return xs && Si(h), !0;
    if (ry(h, I))
      return Lr(h), !0;
    if (wr[I] || !(nr.tagCheck instanceof Function && nr.tagCheck(I)) && !ue[I]) {
      const H = ny(h, I, x);
      return H === !1 && or(E.afterSanitizeElements, h, null), H;
    }
    if ((N ? N(h) : h.nodeType) === Et.element && !Zm(h) || (I === "noscript" || I === "noembed" || I === "noframes") && Ye(YS, h.innerHTML))
      return Lr(h), !0;
    if (jt && h.nodeType === Et.text) {
      const H = vs(h.textContent);
      h.textContent !== H && (Wn(t.removed, {
        element: h.cloneNode()
      }), h.textContent = H);
    }
    return or(E.afterSanitizeElements, h, null), !1;
  }, iu = function(h, x, I) {
    if (qr[x] || R && x === "patchsrc" || R && x === "for" && h !== "label" && h !== "output" || jl && (x === "id" || x === "name") && (I in r || I in Jm))
      return !1;
    const V = ye[x] || nr.attributeCheck instanceof Function && nr.attributeCheck(x, h);
    if (!($r && Ye(xe, x))) {
      if (!(Rr && Ye(gt, x))) {
        if (V) {
          if (!jo[x]) {
            if (!Ye(ct, Ni(I, mt, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && h !== "script" && kd(I, "data:") === 0 && Wl[h])) {
                if (!(_i && !Ye(Kt, Ni(I, mt, "")))) {
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
          !(su(h) && (ve.tagNameCheck instanceof RegExp && Ye(ve.tagNameCheck, h) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(h)) && (ve.attributeNameCheck instanceof RegExp && Ye(ve.attributeNameCheck, x) || ve.attributeNameCheck instanceof Function && ve.attributeNameCheck(x, h)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && ve.allowCustomizedBuiltInElements && (ve.tagNameCheck instanceof RegExp && Ye(ve.tagNameCheck, I) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(I)))
        ) return !1;
      }
    }
    return !0;
  }, iy = fe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), su = function(h) {
    return !iy[Li(h)] && Ye(We, h);
  }, sy = function(h, x, I, V) {
    if (M && typeof d == "object" && typeof d.getAttributeType == "function" && !I)
      switch (d.getAttributeType(h, x)) {
        case "TrustedHTML":
          return re(V);
        case "TrustedScriptURL":
          return qe(V);
      }
    return V;
  }, oy = function(h, x, I, V) {
    try {
      I ? h.setAttributeNS(I, x, V) : h.setAttribute(x, V), Ms(h) ? Lr(h) : yd(t.removed);
    } catch {
      sn(x, h);
    }
  }, ou = function(h) {
    or(E.beforeSanitizeAttributes, h, null);
    const x = h.attributes;
    if (!x || Ms(h))
      return;
    ye = ru(E.uponSanitizeAttribute, ye, xi, _e);
    const I = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ye,
      forceKeepAttr: void 0
    };
    let V = x.length;
    const H = $e(h.nodeName);
    for (; V--; ) {
      const ie = x[V], ke = ie.name, Le = ie.namespaceURI, yt = ie.value, bt = $e(ke), Xo = yt;
      let ut = ke === "value" ? Xo : wS(Xo);
      if (I.attrName = bt, I.attrValue = ut, I.keepAttr = !0, I.forceKeepAttr = void 0, or(E.uponSanitizeAttribute, h, I), ut = I.attrValue, Bl && (bt === "id" || bt === "name") && kd(ut, Vl) !== 0 && (sn(ke, h), ut = Vl + ut), R && Ye(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ut)) {
        sn(ke, h);
        continue;
      }
      if (bt === "attributename" && bd(ut, "href")) {
        sn(ke, h);
        continue;
      }
      if (!I.forceKeepAttr) {
        if (!I.keepAttr) {
          sn(ke, h);
          continue;
        }
        if (!Ts && Ye(XS, ut)) {
          sn(ke, h);
          continue;
        }
        if (jt && (ut = vs(ut)), !iu(H, bt, ut)) {
          sn(ke, h);
          continue;
        }
        ut = sy(H, bt, Le, ut), ut !== Xo && oy(h, ke, Le, ut);
      }
    }
    or(E.afterSanitizeAttributes, h, null);
  }, Es = function(h) {
    let x = null;
    const I = tu(h);
    for (or(E.beforeSanitizeShadowDOM, h, null); x = I.nextNode(); )
      if (or(E.uponSanitizeShadowNode, x, null), nu(x, h), ou(x), Un(x.content) && Es(x.content), (N ? N(x) : x.nodeType) === Et.element) {
        const H = _(x);
        Un(H) && (Yo(H), Es(H));
      }
    or(E.afterSanitizeShadowDOM, h, null);
  }, Yo = function(h) {
    const x = [{
      node: h,
      shadow: null
    }];
    for (; x.length > 0; ) {
      const I = x.pop();
      if (I.shadow) {
        Es(I.shadow);
        continue;
      }
      const V = I.node, ie = (N ? N(V) : V.nodeType) === Et.element, ke = y(V);
      if (ke)
        for (let Le = ke.length - 1; Le >= 0; --Le)
          x.push({
            node: ke[Le],
            shadow: null
          });
      if (ie) {
        const Le = A ? A(V) : null;
        if (typeof Le == "string" && $e(Le) === "template") {
          const yt = V.content;
          Un(yt) && x.push({
            node: yt,
            shadow: null
          });
        }
      }
      if (ie) {
        const Le = _(V);
        Un(Le) && x.push({
          node: null,
          shadow: Le
        }, {
          node: Le,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(U) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, I = null, V = null, H = null;
    if (Bo = !U, Bo && (U = "<!-->"), typeof U != "string" && !vi(U) && (U = IS(U), typeof U != "string"))
      throw dn("dirty is not a string, aborting");
    if (!t.isSupported)
      return U;
    G ? (ue = X, ye = _e) : Go(h), (E.uponSanitizeElement.length > 0 || E.uponSanitizeAttribute.length > 0) && (ue = st(ue)), E.uponSanitizeAttribute.length > 0 && (ye = st(ye)), t.removed = [];
    const ie = xs && typeof U != "string" && vi(U);
    if (ie) {
      ty(U);
      const yt = A ? A(U) : U.nodeName;
      if (typeof yt == "string") {
        const bt = $e(yt);
        if (!ue[bt] || wr[bt])
          throw Ss(U), dn("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ms(U))
        throw Ss(U), dn("root node is clobbered and cannot be sanitized in-place");
      try {
        Yo(U);
      } catch (bt) {
        throw Ss(U), bt;
      }
    } else if (vi(U))
      x = eu("<!---->"), I = x.ownerDocument.importNode(U, !0), I.nodeType === Et.element && I.nodeName === "BODY" || I.nodeName === "HTML" ? x = I : x.appendChild(I), Yo(I);
    else {
      if (!wt && !jt && !K && // eslint-disable-next-line unicorn/prefer-includes
      U.indexOf("<") === -1)
        return M && nn ? re(U) : U;
      if (x = eu(U), !x)
        return wt ? null : nn ? q : "";
    }
    x && lt && Lr(x.firstChild);
    const ke = ie ? U : x;
    try {
      const yt = tu(ke);
      for (; V = yt.nextNode(); )
        nu(V, ke), ou(V), Un(V.content) && Es(V.content);
    } catch (yt) {
      throw ie && (Ss(U), Vn(t.removed, (bt) => {
        bt.element && Si(bt.element);
      })), yt;
    }
    if (ie)
      return Vn(t.removed, (yt) => {
        yt.element && Si(yt.element);
      }), jt && Jo(U), U;
    if (wt) {
      if (jt && Jo(x), rn)
        for (H = mr.call(x.ownerDocument); x.firstChild; )
          H.appendChild(x.firstChild);
      else
        H = x;
      return (ye.shadowroot || ye.shadowrootmode) && (H = te.call(n, H, !0)), H;
    }
    let Le = K ? x.outerHTML : x.innerHTML;
    return K && ue["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && Ye(GS, x.ownerDocument.doctype.name) && (Le = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + Le), jt && (Le = vs(Le)), M && nn ? re(Le) : Le;
  }, t.setConfig = function() {
    let U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Go(U), G = !0, X = ue, _e = ye;
  }, t.clearConfig = function() {
    Dn = null, G = !1, X = null, _e = null, M = $, q = "";
  }, t.isValidAttribute = function(U, h, x) {
    Dn || Go({});
    const I = $e(U), V = $e(h);
    return iu(I, V, x);
  }, t.addHook = function(U, h) {
    typeof h == "function" && Xe(E, U) && Wn(E[U], h);
  }, t.removeHook = function(U, h) {
    if (Xe(E, U)) {
      if (h !== void 0) {
        const x = NS(E[U], h);
        return x === -1 ? void 0 : OS(E[U], x, 1)[0];
      }
      return yd(E[U]);
    }
  }, t.removeHooks = function(U) {
    Xe(E, U) && (E[U] = []);
  }, t.removeAllHooks = function() {
    E = Pd();
  }, t;
}
var ev = rg();
function tv({ structureProtectionMode: e = "off" }) {
  const [t] = ce(), r = Z(void 0), [n, i] = de(void 0), s = he((o) => {
    r.current = o, i(o);
  }, []);
  return z(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const m = Hh(p);
      if (!m)
        return !1;
      const g = w();
      return e === "protected" ? g && Xh(g, m) ? (p.preventDefault(), !0) : !1 : m !== "deleteBackward" && m !== "deleteForward" ? !1 : a(m, p);
    }, a = (p, m) => {
      const g = w(), y = r.current;
      if (y && g && hd(g, y)) {
        if (s(void 0), m.preventDefault(), p !== y.intent)
          return !0;
        const _ = se(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (_) {
            const S = _.getParent(), N = _.getPreviousSibling(), A = _.getNextSibling();
            _.remove(), N ? Qh(N) : A && v(A) ? A.select(0, 0) : S?.selectStart();
          }
        } else y.kind === "selection" ? P(g) && g.removeText() : Se(_) && TS(_);
        return !0;
      }
      if (!g)
        return !1;
      const k = kS(g, p);
      if (k) {
        if (k.kind === "verse") {
          const _ = Cf();
          _.add(k.node.getKey()), ei(_);
        } else {
          const _ = xc();
          _.anchor.set(k.node.getKey(), 0, "element"), _.focus.set(k.node.getKey(), k.node.getChildrenSize(), "element"), ei(_);
        }
        return s({ key: k.node.getKey(), kind: k.kind, intent: p }), m.preventDefault(), !0;
      }
      if (P(g) && !g.isCollapsed() && bl(g)) {
        const _ = g.getNodes().filter(ge).map((A) => A.getKey()), { anchor: S, focus: N } = g;
        return s({
          kind: "selection",
          intent: p,
          key: _[0],
          anchor: { key: S.key, offset: S.offset, type: S.type },
          focus: { key: N.key, offset: N.offset, type: N.type }
        }), m.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const m = w();
      return !m || !Zn(m) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, m) => {
      if (!p)
        return !1;
      const g = ev.sanitize(p), y = new DOMParser().parseFromString(g, "text/html"), k = xS(ib(t, y)), _ = w();
      return P(_) && _.insertNodes(k), m.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const m = w();
      return m && Zn(m) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const m = w();
      return m && Zn(m) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        hd(w(), p) || s(void 0);
      });
    };
    return Ve(
      t.registerCommand(vr, o, Ne),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(yn, c, xt),
      t.registerCommand(cr, u, Ne),
      t.registerCommand(Ly, c, Ne),
      t.registerCommand(Cc, d, Ne),
      t.registerCommand(Us, c, Ne),
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
const DP = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function rv({ textDirection: e }) {
  const [t] = ce();
  return nv(t, e), null;
}
function nv(e, t) {
  z(() => (Nd(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Nd(e, t);
  })), [e, t]);
}
function Nd(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function iv() {
  const [e] = ce();
  return sv(e), null;
}
function sv(e) {
  z(() => {
    if (!e.hasNodes([me, St, Ae, Ke, ft]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Ve(
      e.registerNodeTransform(Ke, ov),
      e.registerNodeTransform(Ke, (t) => av(t, e)),
      e.registerNodeTransform(ft, Od),
      e.registerNodeTransform(St, Od),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(ft, (t) => {
        ts(xn("va"), t), ts(xn("vp"), t);
      })
    );
  }, [e]);
}
function ov(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || j(r) || D(n) || D(r) || Ce(n) || Ce(r) || De(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  ne(e, oe) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Ie(n))
    return;
  if (ge(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  ge(r) && Xc(e);
}
function av(e, t) {
  const r = e.getParent();
  !De(r) || !e.isAttached() || Ba(t, e.getKey()) && !Ba(t, r.getKey()) && r.insertAfter(e);
}
function Od(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Ce(t); )
    t = t.getLastChild();
  (D(t) || v(t) && Ce(t.getParent())) && e.insertBefore(pe(" "));
}
function kl(e) {
  if (!j(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !$c(n)) ? void 0 : e;
}
function cv(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (F(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function lv() {
  const e = w();
  if (!(!P(e) || !e.isCollapsed()))
    return kl(cv(e.anchor));
}
function uv(e) {
  const t = w();
  let r;
  return P(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = ng(e.target)), r ? kl(Ze(r, j)) : void 0;
}
function ng(e) {
  const t = Iy(e)?.anchorNode;
  if (_f(t))
    return di(t) ?? void 0;
}
function dv(e) {
  if (w())
    return;
  const t = ng(e);
  return t ? kl(Ze(t, j)) : void 0;
}
function fv() {
  const [e] = ce(), t = Vh(lv);
  return z(() => {
    const r = (n) => {
      Br(Vr), t(n);
    };
    return Ve(e.registerCommand(dr, () => {
      const n = dv(e.getRootElement());
      return n && r(n), !1;
    }, mn), e.registerCommand(mo, (n) => {
      const i = uv(n);
      return i && r(i), !1;
    }, mn));
  }, [e, t]), null;
}
function pv({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = O_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return C(N_, { trigger: e, items: i });
}
function hv({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = ze(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? C(yv, { trigger: e, harness: i }) : C(pv, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const gv = [" ", "*"];
function mv(e, t) {
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
function yv({ trigger: e, harness: t }) {
  const [r] = ce(), [n, i] = de(void 0), s = Z({ query: "", options: [] }), o = Z(0), a = he((f, p, m) => {
    const g = p.find((y) => y.kind === "note" && y.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = w();
      P(y) && y.insertText(`${e}${f}${m ? " " : ""}`);
    });
  }, [r, t, e]);
  z(() => Ve(r.registerCommand(vr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), Dy(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = w();
          P(y) && y.insertText(e);
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
  }, Ne), r.registerCommand(Sf, (f) => {
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
  const c = he(() => i(void 0), []), l = he((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = he((f) => {
    const { markerMenuItem: p, applyOpts: m } = f;
    t.apply(p, m);
  }, [t]), d = ze(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    mv(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && C(Sh, { isOpen: !0, children: ({ placement: f }) => C(
    Eh,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? gv : void 0 },
    n.session
  ) });
}
function ig(e) {
  return e.replaceAll(L, "~").replace(/ {2,}/g, (r) => L.repeat(r.length));
}
function bv(e) {
  return e.replaceAll(L, " ").replaceAll("~", L);
}
function kv(e) {
  return e.replace(/ {2,}/g, " ");
}
let io;
function Tv(e) {
  e && (io = e);
}
function sg(e) {
  return qo(e);
}
function xv(e, t) {
  return e.isEmpty() ? Tf : og(e.toJSON(), t);
}
function og(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && xo(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Tf;
  if (r.some(ex)) {
    io?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = ag(r), i = Vt(n, t);
  return i ? { type: kr, version: br, content: i } : void 0;
}
function _v(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), Pe({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function Cv(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Pe({
    type: Ot.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function Sv(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = vp(r, a, c), Pe({
    type: Ot.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function vv(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = vp(t, o, a), Pe({
    type: ft.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function Mv(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !sg(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(L) && (t[0] = a.slice(1));
  }
  return Pe({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function Ev(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Pe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function Av(e, t) {
  const { unknownAttributes: r } = e;
  return Pe({ type: Qp, ...r, content: t });
}
function Pv(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Pe({ type: th, marker: r, ...n, content: t });
}
function Nv(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Pe({
    type: nh,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function Ov(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return Pe({
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
  return Pe({
    type: t,
    marker: r === "" ? void 0 : r,
    ...qp({ sid: n, eid: i, ...s }, o)
  });
}
function wv(e) {
  return e.text;
}
function qv(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Pe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function Rv(e) {
  const { marker: t } = e;
  return {
    type: Gs,
    marker: t === "" ? void 0 : t
  };
}
function wd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function $v(e, t, r, n, i) {
  const s = Yt.getType(), o = t.filter((l) => !r.includes(l));
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
      marker: bn,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = Jn({
      type: s,
      marker: bn
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
  (!n || !ep(n)) && t.forEach((l) => {
    const u = Jn({
      type: s,
      marker: Xn,
      eid: l
    });
    i.push(u);
  });
}
function Vt(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, p = a, m = a, g = a, y = a;
    switch (a.type) {
      case Ft.getType():
        i.push(
          _v(
            l,
            Vt(l.children, t)
          )
        );
        break;
      case hr.getType():
        i.push(Cv(a));
        break;
      case Ot.getType():
        i.push(
          Sv(
            u,
            Vt(u.children, t)
          )
        );
        break;
      case St.getType():
      case ft.getType():
        i.push(vv(a));
        break;
      case me.getType():
        i.push(
          Mv(
            d,
            Vt(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case et.getType():
        i.push(
          Ev(
            f,
            Vt(f.children, t)
          )
        );
        break;
      case On.getType():
        i.push(
          Av(
            a,
            Vt(a.children, t)
          )
        );
        break;
      case hi.getType():
        i.push(
          Pv(
            a,
            Vt(a.children, t)
          )
        );
        break;
      case gi.getType():
        i.push(
          Nv(
            a,
            Vt(a.children, t)
          )
        );
        break;
      case Ae.getType():
        i.push(
          Ov(
            p,
            Vt(p.children, t, p.caller)
          )
        );
        break;
      case Ar.getType():
      case Er.getType():
      case Jt.getType():
      case vf.getType():
      case gr.getType():
        break;
      case Qe.getType():
        if (s = Vt(
          g.children,
          t,
          r,
          n
        ), s) {
          const k = g.typedIDs[jr];
          if (k)
            $v(s, k, o, e[c + 1], i), o = k;
          else {
            const _ = s.shift();
            _ && (typeof _ == "string" ? wd(i, _) : i.push(_)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Yt.getType():
        i.push(Jn(a));
        break;
      case Ke.getType():
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !ms(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        m.text !== L && !m.text.startsWith(Mc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[hs]?.textType !== "attribute" && (!r || m.text !== Pt(r))) {
          let k = wv(m);
          sg(t) && (n && k.startsWith(L) && (k = k.slice(1)), k = kv(bv(k))), wd(i, k);
        }
        break;
      case Pn.getType():
        i.push(
          qv(
            y,
            Vt(y.children, t)
          )
        );
        break;
      case Or.getType():
        i.push(Rv(a));
        break;
      case mi.getType():
        io?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        io?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function ag(e) {
  const t = e.findIndex((r) => xo(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = ag(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const $s = {
  initialize: Tv,
  deserializeEditorState: xv
}, Lv = /^sd\d*$/, Iv = /* @__PURE__ */ new Set([
  ...Object.entries(Na).filter(
    ([e, t]) => t.category === T.TitlesHeadings && t.type === b.Paragraph && !Lv.test(e)
  ).map(([e]) => e),
  "qa"
]);
function Dv(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (ap(i) || xp(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!Ek(i)) {
      t && so(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Rc(i) && Iv.has(i.marker) && !so(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    cg(i.children, t).forEach((s) => {
      const o = Uv(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = Fv(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function cg(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (lg(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (ep(i)) {
      const s = cg(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(qd(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [qd(i, c.nodes)] });
      });
      return;
    }
    t && so(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function qd(e, t) {
  return { ...e, children: t };
}
function lg(e) {
  return ph(e) && e.number !== "";
}
function so(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => lg(r) || so(r)) : !1;
}
function Uv(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function Fv(e) {
  return {
    type: Js,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: uh
  };
}
const Rd = dg([]), zv = {
  type: vf.getType(),
  version: 1
};
let Tl = [], ee, Sn, ug, Ct;
function Kv(e, t) {
  Tl = [], Vv(e), Wv(t);
}
function jv(e = 0) {
}
function Bv(e, t) {
  ee = t ?? wo();
  let r;
  return e ? (e.type !== kr && Ct?.warn(`This USJ type '${e.type}' didn't match the expected type '${kr}'.`), e.version !== br && Ct?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${br}'.`
  ), e.content.length > 0 ? (r = nc(Fr(e.content)), is(ee) && (r = Dv(r, Ct))) : r = [Rd]) : r = [Rd], ug?.(Tl), {
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
function Vv(e) {
  e && (Sn = e), e?.addMissingComments && (ug = e.addMissingComments);
}
function Wv(e) {
  e && (Ct = e);
}
function xl() {
  return qo(ee);
}
function Hv(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function Gv(e) {
  let { marker: t } = e;
  t !== Yi && Ct?.warn(`Unexpected book marker '${t}'!`), t = t ?? Yi;
  const { code: r } = e;
  (!r || !Ft.isValidBookCode(r)) && Ct?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  ee?.markerMode === "editable" || ee?.markerMode === "visible" ? n.push(
    Tt("marker", we(t) + " " + r + L)
  ) : ee?.hasGutterParaMarkers && n.push(Tt("marker", we(t) + L, !0));
  const i = Hv(e.content);
  i && n.push(at(xl() ? ig(i) : i));
  const s = Ue(e, ok);
  return Pe({
    type: Ft.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: sp
  });
}
function Jv(e) {
  let { marker: t } = e;
  t !== Vs && Ct?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Vs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Ue(e, ak);
  let a;
  ee?.markerMode === "visible" && (a = !0);
  const c = [
    at(Dt(t, r) ?? "")
  ];
  return ee?.markerMode === "editable" && fM(i, s, c), ee?.markerMode === "editable" ? Pe({
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
    version: cp
  }) : Pe({
    type: hr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: pp
  });
}
function Yv(e) {
  let { marker: t } = e;
  t !== Ws && Ct?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Ws;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (F_(ee) ?? St).getType(), c = ee?.markerMode === "editable" ? bp : fh;
  let l, u;
  ee?.markerMode === "editable" ? l = Dt(t, r) : ee?.markerMode === "visible" && (u = !0);
  const d = Ue(e, Tk);
  return Pe({
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
function Xv(e, t = [], r = !1) {
  let { marker: n } = e;
  me.isValidMarker(n, Sn?.extraValidMarkers) || Ct?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (ee?.markerMode === "editable") {
    const [a] = t;
    ni(a) ? a.text = L + a.text : a && t.unshift(at(L));
  }
  t.length === 0 && t.push(at(Ut)), ec(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Ue(e, uk);
  return s || cM(n, o, i), s || tc(e.marker ?? "", i, !1, r), Pe({
    type: me.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: fp
  });
}
function dg(e) {
  return {
    type: Hr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: mp
  };
}
function Qv(e, t = []) {
  let { marker: r } = e;
  et.isValidMarker(r, Sn?.extraValidMarkers) || Ct?.warn(`Unexpected para marker '${r}'!`), r = r ?? Ht;
  const n = [];
  if (qn(ee) && (ee?.markerMode === "editable" ? n.push(
    pt(r),
    at(L, pr, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && n.push(
    Tt(
      "marker",
      we(r) + L,
      ee?.hasGutterParaMarkers
    )
  )), n.push(...t), xl()) {
    const s = n.find(
      (o) => !Fc(o) && !(ni(o) && o.text === L)
    );
    ni(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => L.repeat(o.length)));
  }
  const i = Ue(e, bk);
  return Pe({
    type: et.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: yp
  });
}
function _l() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function Zv(e, t = []) {
  const r = Ue(e, _T);
  return Pe({
    ..._l(),
    type: On.getType(),
    unknownAttributes: r,
    children: t,
    version: Zp
  });
}
function eM(e, t = []) {
  const r = Ue(e, vT), n = e.marker ?? Ua, i = [];
  return ee?.markerMode === "editable" ? i.push(
    pt(n),
    at(L, pr, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && i.push(
    Tt(
      "marker",
      we(n) + L,
      ee?.hasGutterParaMarkers
    )
  ), i.push(...t), Pe({
    ..._l(),
    type: hi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: rh
  });
}
function tM(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Fa, a = Vp(o, i) ?? o;
  ee?.markerMode === "editable" ? s.push(
    pt(a),
    at(L, pr, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && s.push(
    Tt(
      "marker",
      we(a) + L,
      ee?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = Ue(
    e,
    ET
  );
  return Pe({
    ..._l(),
    type: gi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: ih
  });
}
function rM(e, t) {
  const r = qk(t);
  let n = () => {
  };
  return Sn?.noteCallerOnClick && (n = Sn.noteCallerOnClick), Pe({
    type: Jt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Th
  });
}
function nM(e, t) {
  let { marker: r } = e;
  Ae.isValidMarker(r, Sn?.extraValidMarkers) || Ct?.warn(`Unexpected note marker '${r}'!`), r = r ?? Ac;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : il(ee?.noteMode), a = Ue(e, Cb), c = ee?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  ee?.markerMode === "editable" ? (l = pt(r, "opening", !1, c), s || (u = pt(r, "closing"))) : ee?.markerMode === "visible" && (l = Tt("marker", we(r) + " "), s || (u = Tt("marker", nt(r))));
  const d = [];
  let f;
  if (l && d.push(l), ee?.markerMode === "editable" && !o)
    f = at(Pt(i), void 0, c), d.push(f), dM(n, d), d.push(...t);
  else {
    const p = at(L, pr, "token");
    f = rM(i, t), d.push(f, p, ...t.flatMap(iM(p)));
  }
  return u && d.push(u), Pe({
    type: Ae.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: d,
    direction: null,
    format: "",
    indent: 0,
    version: Wf
  });
}
function iM(e) {
  return (t) => Qf(t) ? [t] : [t, e];
}
function sM(e) {
  let { marker: t } = e;
  (!t || !Yt.isValidMarker(t, Sn?.extraValidMarkers)) && Ct?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Ue(e, Ec), s = Rp(e);
  return Pe({
    type: Yt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: jf
  });
}
function $d(e, t = []) {
  return {
    type: Qe.getType(),
    typedIDs: { [jr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function oM(e, t) {
  const { marker: r } = e, n = e.type, i = Ue(e, tk), s = [];
  if (ee?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = Wp(
      n,
      r,
      i
    );
    o && s.push(Tt("marker", o)), a && s.push(Tt("attribute", a)), s.push(...t), c && s.push(Tt("attribute", c)), l && s.push(Tt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    ni(o) && (o.mode = "token");
  }), Pe({
    type: Pn.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: rp
  });
}
function aM(e) {
  return {
    type: Or.getType(),
    marker: e,
    text: zi(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: ee?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: Yp
  };
}
function pt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: gr.getType(),
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
    type: Ke.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[hs] = { textType: t }), n;
}
function Tt(e, t, r = !1) {
  const n = {
    type: Er.getType(),
    text: t,
    textType: e,
    version: Xf
  };
  return r && (n[hs] = { [Oc.key]: !0 }), n;
}
function os(e, t) {
  return {
    type: Ar.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: np
  };
}
function ec(e, t, r = !1) {
  ee?.markerMode === "editable" ? t.push(pt(e, "opening", r)) : ee?.markerMode === "visible" && t.push(Tt("marker", we(e, r)));
}
function tc(e, t, r = !1, n = !1) {
  ee?.markerMode === "editable" ? r ? t.push(pt("", "selfClosing")) : t.push(pt(e, "closing", n)) : ee?.markerMode === "visible" && t.push(
    Tt(
      "marker",
      r ? nt("") : nt(e, n)
    )
  );
}
function cM(e, t, r) {
  if (ee?.markerMode !== "editable" || !t) return;
  const n = lr(t, ko(e));
  n && r.push(at(n, "attribute"));
}
function Ld(e, t) {
  if (e.type !== "ms" || ee?.markerMode !== "editable" && ee?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Ue(e, Ec), o = $p(
    n,
    i,
    s,
    Rp(e)
  ), a = lr(o, To(r ?? ""));
  if (!a) return;
  const c = L + a;
  ee?.markerMode === "editable" ? t.push(at(c, "attribute")) : t.push(Tt("attribute", c));
}
function lM(e, t) {
  const r = e.marker ?? "";
  if (ee?.markerMode === "editable") {
    const n = [];
    ec(r, n), Ld(e, n), tc(r, n, !0), t.push(os("milestone", n));
  } else
    ec(r, t), Ld(e, t), tc(r, t, !0);
}
function Id(e, t, r) {
  t !== void 0 && r.push(
    os(e, [
      pt(e, "opening"),
      at(L + t, "attribute"),
      pt(e, "closing")
    ])
  );
}
function uM(e, t) {
  ee?.markerMode === "editable" && (Id("va", e.altnumber, t), Id("vp", e.pubnumber, t));
}
function dM(e, t) {
  e !== void 0 && t.push(
    os("cat", [
      pt("cat", "opening"),
      at(L + e, "attribute"),
      pt("cat", "closing")
    ])
  );
}
function fM(e, t, r) {
  e !== void 0 && r.push(
    os("ca", [
      pt("ca", "opening"),
      at(L + e, "attribute"),
      pt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    os("cp", [
      pt("cp", "opening"),
      at(L + t, "attribute")
    ])
  );
}
function Dd(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function pM(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function Ud(e, t) {
  t.marker === bn && t.sid !== void 0 && e.push(t.sid), t.marker === Xn && t.eid !== void 0 && pM(e, t.eid);
}
function rc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [$d(o, [...n])] : o, c = e[i];
  Ud(n, c);
  const l = rc(
    e.slice(i + 1, s),
    Dd(t, i + 1),
    c.marker === bn,
    n
  ), u = $d(l, [...n]), d = e[s];
  Ud(n, d);
  const f = rc(
    e.slice(s + 1),
    Dd(t, s + 1),
    d.marker === bn,
    n
  );
  return [...a, u, ...f];
}
function Fr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(at(xl() ? ig(i) : i));
    else if (!i.type)
      Ct?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Ft.getType():
          n.push(Gv(i));
          break;
        case Ot.getType():
          n.push(Jv(i));
          break;
        case ft.getType():
          ee?.hasSpacing || n.push(zv), n.push(Yv(i)), uM(i, n);
          break;
        case me.getType():
          n.push(
            Xv(i, Fr(i.content, !0), t)
          );
          break;
        case et.getType():
          n.push(Qv(i, Fr(i.content)));
          break;
        case Ae.getType():
          n.push(nM(i, Fr(i.content)));
          break;
        case Yt.getType():
          Bf(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Tl?.push(i.sid)), n.push(sM(i)), lM(i, n);
          break;
        case Or.getType():
          n.push(aM(i.marker ?? ""));
          break;
        case Qp:
          n.push(Zv(i, Fr(i.content)));
          break;
        case th:
          n.push(eM(i, Fr(i.content)));
          break;
        case nh:
          n.push(tM(i, Fr(i.content)));
          break;
        default:
          Ct?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(oM(i, Fr(i.content)));
      }
  }), rc(n, r);
}
function nc(e) {
  const t = e.findIndex(
    (n) => ap(n) || xp(n) || Rc(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    ST(n)
  );
  if (t >= 0) {
    const n = nc(e.slice(0, t)), i = e[t], s = nc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || ph(n)))
    return [dg(e)];
  return e;
}
const Cr = {
  initialize: Kv,
  reset: jv,
  serializeEditorState: Bv
};
function fg(e) {
  if (e && !O(e)) {
    if (v(e)) return e;
    if (F(e))
      for (const t of e.getChildren()) {
        const r = fg(t);
        if (r) return r;
      }
  }
}
function hM() {
  const e = w();
  if (!P(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((v(t) && !O(t) ? Cn(t) : void 0) && v(t)) {
      const i = pe(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      ii(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = fg(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(L) ? L : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return v(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of pg(e)) {
    if (!Cn(t)) continue;
    ii(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(L) && r.setTextContent(n.slice(L.length));
  }
  return !0;
}
function pg(e) {
  const [t, r] = _c(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!v(a) || O(a) || ne(a, oe) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function gM() {
  const e = w();
  if (!P(e)) return !1;
  const t = e.focus.getNode();
  return Cn(t) ? Se(Wc(t)) : !1;
}
function hg() {
  let e = w();
  if (!P(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (O(t) && !Jc(t, e.anchor.offset)) {
    const c = t.getParent();
    if (D(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = w(), !P(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!v(t) || O(t) || !Cn(t)) return !1;
  const r = Wc(t);
  if (!Se(r)) return !1;
  const n = pe(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  ii(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return D(a) ? Hc(a) : o.select(0, 0), !0;
}
const gg = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${_p(Fe().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = w(), t = Ic(e), r = Zc(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = $k(0, o);
        const a = px(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Pp(c) && Dc(parseInt(n, 10), c);
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
function ic(e, t) {
  return Ae.isValidMarker(e, t) || !!gg[e] || et.isValidMarker(e, t) || me.isValidMarker(e, t);
}
function mM(e, t) {
  return me.isNoteContentMarker(e) ? !1 : me.isValidMarker(e, t);
}
function mg(e, t, r, n, i, s) {
  const o = _h(
    e,
    void 0,
    void 0,
    t,
    n ?? wo(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function sc(e, t, r, n, i, s, o) {
  if (Ae.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = mg(
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
  const a = _M(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = w();
      P(u) && (lh(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = zu(d, Cr, r), m = Zo(p);
      if (P(u)) {
        const g = u.anchor.getNode(), y = g.getParent(), k = Cn(g), _ = u.anchor.key === u.focus.key;
        if (D(m) && k && _ && !Ta(m, o))
          kM(
            u,
            m,
            g,
            r?.markerMode === "editable"
          );
        else if (D(m) && !_ && !Ta(m, o) && TM(u))
          xM(u, m, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          CM(
            u,
            () => Zo(p)
          );
        else if (F(m) && !m.isInline()) {
          const S = u.insertParagraph();
          if (S) {
            const N = S.getChildren();
            m.append(...N), S.replace(m), Se(m) && bi(m) || m.selectStart();
          }
        } else if (D(m) && v(g) && !O(g) && D(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        Ta(m, o)) {
          const S = g.getParent();
          if (D(S)) {
            const N = u.anchor.offset;
            if (N === 0) g.insertBefore(m);
            else if (N >= g.getTextContentSize()) g.insertAfter(m);
            else {
              const [B] = g.splitText(N);
              B.insertAfter(m);
            }
            m.getChildren().forEach((B) => {
              O(B) && B.setNested(!0);
            });
            const A = m.getChildren().find((B) => v(B) && !O(B));
            A && v(A) ? A.select(
              A.getTextContentSize(),
              A.getTextContentSize()
            ) : m.selectEnd();
          }
        } else if (v(g) && !O(g) && u.isCollapsed() && (j(y) || D(y) && j(y.getParent()))) {
          const S = D(y) ? y : void 0, N = S ? yM(g, u.anchor.offset) : [];
          let B = (S ?? g).insertAfter(m);
          if (Pr(m)) {
            const M = {
              ...r || wo(),
              markerMode: "hidden"
            }, q = zu(
              d,
              Cr,
              M
            ), $ = Zo(q);
            B = B.insertAfter($);
          }
          if (N.length > 0 && S) {
            const M = oo(S).append(...N);
            B.insertAfter(M), S.isEmpty() && S.remove();
          } else v(B.getNextSibling()) || B.insertAfter(pe(L));
          F(B) && B.selectEnd();
        } else if (u.insertNodes([m]), qM(m), f) {
          const S = Cf();
          S.add(m.getKey()), ei(S);
        } else if (D(m)) {
          const S = m.getChildren().find((N) => v(N) && !O(N));
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
function yM(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function Ta(e, t) {
  return ((t ?? Ys).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function bM(e, t) {
  t && e.getChildren().forEach((i) => {
    O(i) && i.setNested(!0);
  }), e.getChildren().some((i) => O(i) && i.getMarkerSyntax() === "closing") || e.append(ot(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function kM(e, t, r, n) {
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
    const [o, a] = ci(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (ii(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), v(i) && !i.getTextContent().startsWith(L) && i.setTextContent(L + i.getTextContent());
    const o = t.getChildren().find((a) => v(a) && !O(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => v(o) && !O(o));
  v(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function TM(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (O(n) || D(n)) continue;
    if (!v(n) || n.getType() !== Ke.getType() || ne(n, oe) === "attribute") return !1;
    const i = Wc(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Cn(n) && (r = !0);
  }
  return r;
}
function xM(e, t, r) {
  const n = pg(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Cn(a)) return;
    ii(a, { renderGlyphs: r });
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
function _M(e, t) {
  let r = gg[e];
  return r || (et.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: et.getType(), marker: e, content: [] }] })
  } : me.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: me.getType(), marker: e };
      return (me.isValidFootnoteMarker(e) || me.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function CM(e, t) {
  const r = e.getNodes(), [n, i] = ci(e);
  let s;
  r.forEach((o, a) => {
    if (F(s) && s.isParentOf(o))
      return;
    const c = yg(
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
    s || (s = t(), c.insertBefore(s), l = !0, D(s) && s.getChildren().some((d) => O(d) && d.getMarkerSyntax() === "opening") && bM(s, D(s.getParent()))), vM(c, s, l);
  }), (v(s) || F(s)) && s.selectEnd();
}
function ci(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Cl(e) {
  return Ce(e) || j(e) || j(e.getParent());
}
function yg(e, t, r, n, i) {
  if (!Cl(e)) {
    if (v(e))
      return SM(e, t, r, n, i);
    if (F(e) && e.isInline())
      return e;
  }
}
function SM(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function vM(e, t, r) {
  if (v(t)) {
    const n = oc(e, t);
    t.setTextContent(n), e.remove();
  } else if (F(t)) {
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
    oc(e, t), r && D(t) && t.getChildren().some((s) => O(s)) && v(e) && !O(e) && !e.getTextContent().startsWith(L) && e.setTextContent(L + e.getTextContent());
  }
}
function oc(e, t) {
  let r = e.getTextContent();
  if (v(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    Xc(n), v(n) || t.insertBefore(pe(" "));
  }
  return r;
}
function bg(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = vn(u, t);
    if (!f) return !1;
    const p = v(u) ? u.getTextContentSize() : 0;
    if (Fd(f, r), v(u) && u.isAttached()) {
      const m = u.getTextContentSize(), g = Math.max(p - m, 0), y = Math.max(0, Math.min(d - g, m)), k = w();
      P(k) && k.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = ci(e);
  if (!vl(n, t, s, o)) return !1;
  const a = Sl(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = vn(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = _g(d, a);
    f && (Fd(f, r), l = !0);
  }), Cg(a, i), l;
}
function Fd(e, t) {
  e.getChildren().forEach((n) => {
    zt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === Ut) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    v(n) && i.startsWith(L) && n.setTextContent(i.slice(L.length));
  }), Ea(e);
}
function Sl(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = yg(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    v(o) && n.push(o);
  }), n;
}
function vn(e, t) {
  let r = e, n;
  for (; r && !Se(r); ) {
    if (j(r)) return;
    !n && D(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function kg(e) {
  const t = Ze(
    e,
    (r) => j(r) || Se(r)
  );
  return j(t);
}
function Tg(e) {
  return e.filter(
    (t) => !Cl(t) && (v(t) || F(t) && t.isInline())
  );
}
function MM(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!v(i) || Cl(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function EM(e, t, r) {
  return e.getChildren().some(
    (n) => F(n) && t.some((i) => n.isParentOf(i)) && !xg(n, r)
  );
}
function vl(e, t, r, n, i) {
  const s = Tg(e), o = MM(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = vn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !EM(l, s, o);
  });
}
function xg(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || zt(r));
}
function _g(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (F(u) && t.some((d) => u.isParentOf(d))) {
      if (!xg(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && zt(n[s - 1]) && (s -= 1), o < n.length - 1 && zt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(oo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(oo(e).append(...c)), e;
}
function oo(e) {
  return Uy(e);
}
function Cg(e, t) {
  const r = w(), n = e[0], i = e[e.length - 1];
  if (!P(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function AM(e, t, r) {
  if (e.isCollapsed()) {
    const l = vn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Mu(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = ci(e);
  if (!vl(n, r, i, s, t)) return !1;
  const o = Sl(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = vn(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = _g(u, o);
    d && (Mu(d, t), c = !0);
  }), c;
}
function PM(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = ci(e);
  if (!!!i?.some(
    (y) => vl(s, y, o, a)
  ) && !NM(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const k = w();
    P(k) && bg(k, y, n) && (l = !0);
  });
  const u = w();
  if (!P(u)) return l;
  const d = u.isBackward(), [f, p] = ci(u), m = Sl(
    u.getNodes(),
    f,
    p
  );
  if (m.length === 0) return l;
  const g = m.filter(
    (y) => !kg(y) && !vn(y, t)
  );
  return g.length > 0 && (OM(g).forEach((y) => wM(y, t)), l = !0), Cg(m, d), l;
}
function NM(e, t) {
  return Tg(e).some(
    (r) => !kg(r) && !vn(r, t)
  );
}
function OM(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function wM(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => D(a) && a.getMarker() === t
  ), s = i ? oo(i) : xr(t);
  e[0].insertBefore(s), s.append(...e), i === r || oc(e[0], s);
}
function qM(e) {
  ge(e) && (Xc(e.getPreviousSibling()), gh(e.getNextSibling()));
}
const Sg = {
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
}, zd = "psc-active-text", Ns = "psc-empty-text";
function RM({ viewOptions: e }) {
  const [t] = ce(), r = Z(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return z(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(zd), r.current = o, o && t.getElementByKey(o)?.classList.add(zd);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        mo,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Ns}`);
          if (!c) return !1;
          const l = di(c);
          if (!ge(l)) return !1;
          const u = l.getParent();
          if (!F(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        dt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = xa(), f = $M(), p = [], m = [];
          return Fe().getChildren().forEach((g) => {
            if (!F(g)) return;
            const { emptyKeys: y, nonEmptyKeys: k } = IM(g);
            p.push(...y), m.push(...k);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: m };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(Ns) : t.getElementByKey(d)?.classList.add(Ns);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(Ns));
      }),
      t.registerCommand(
        Sc,
        () => (i(void 0), !1),
        dt
      ),
      t.registerCommand(
        Fy,
        () => {
          const o = t.getEditorState().read(xa);
          return o !== r.current && i(o), !1;
        },
        dt
      )
    ];
    return i(t.getEditorState().read(xa)), Ve(...s);
  }, [t, n]), null;
}
function xa() {
  return LM(w() ?? void 0)?.getKey();
}
function $M() {
  const e = w();
  if (!P(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!F(n)) return;
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
    ge(s[a]) && (o = s[a].getKey());
  return o;
}
function LM(e) {
  if (P(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function IM(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ge(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ge(c)) break;
      if (!(Xt(c) || O(c)) && c.getTextContent().replaceAll(zs, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const DM = /^\+/;
function Ml(e, t) {
  const r = t.replace(DM, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function vg(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Mg(e, t) {
  return vg(e, t) !== void 0;
}
function ac(e, t) {
  const r = vg(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function ao(e, t, r) {
  const n = F(e) ? e.getChildren().filter(O) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function UM(e, t, r, n, i) {
  const s = Ml(n, t);
  if (!s) {
    ao(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && ao(e, "invalid", i);
}
function ji(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (D(s)) {
      const o = s.getMarker();
      i || UM(s, o, t, r, n), ji(s, t, r, n, i || o === "xq");
    } else if (ge(s)) {
      if (i) continue;
      const o = Ml(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else j(s) ? ji(s, s.getMarker(), r, n, i) : De(s) || F(s) && ji(s, t, r, n, i);
}
function FM(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Ml(e, a);
    if (!c) {
      ao(o, "unknown", r), ac(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    ac(n, l) || ao(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Fe().getChildren())
    De(o) || (ht(o) || Ge(o) ? i(o, o.getMarker()) : ae(o) ? (i(o, o.getMarker()), s(o) && ji(o, o.getMarker(), e, r, !1)) : F(o) && s(o) && ji(o, "p", e, r, !1));
  return r;
}
function zM(e) {
  return !!e?.includes("(basic)");
}
function KM(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Eg(e, t) {
  return !e.startsWith("zpa") && e !== "c" && ic(e, t);
}
function El(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Ag(e, t) {
  const r = [];
  for (const n of t) {
    const i = El(e, n);
    i && ac(r, i);
  }
  return r;
}
function Ls(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: KM(e.description),
    isBasic: zM(e.description)
  };
}
function jM(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function cc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : jM(e.marker, t.marker);
}
function lc(e, t, r) {
  if (t.noteMarker) return [];
  const n = Ag(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Eg(i.marker, r)
  ).filter((i) => {
    const s = El(e, i.marker);
    return s !== void 0 && Mg(n, s);
  }).map((i) => Ls(i, "paragraph")).sort(cc);
}
function BM(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Eg(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Ls(c, "character")).sort(cc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Ls(c, "character")),
    ...a.map((c) => Ls(c, "note"))
  ].sort(cc);
}
function VM(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function WM(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function HM(e, t, r) {
  return [
    ...VM(e, t.openCharMarkers),
    ...BM(e, t, r)
  ].sort(WM);
}
function GM(e, t, r) {
  if (t.source === "paragraph") return lc(e, t, r);
  const n = HM(e, t, r);
  return n.length > 0 ? n : lc(e, t, r);
}
function JM(e, t, r) {
  const n = lc(e, t, r), i = Ag(e, t.previousParaMarkers), s = El(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Mg(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const tr = String.raw`\w-`, Pg = "a-z0-9", YM = `[a-z][${Pg}]*`, XM = new RegExp(
  String.raw`^\\(\+?[${tr}]+)[ \u00A0]$`
), Ng = new RegExp(String.raw`^\\(\+?[${tr}]+)$`), QM = new RegExp(String.raw`^\\\+?[${tr}]*\*$`), ZM = new RegExp(
  String.raw`^\\(\+?[${tr}]+)(?:[ \u00A0]|$)`
), eE = new RegExp(
  String.raw`^\\(\+?)([${tr}]+)`
), tE = new RegExp(
  String.raw`\\\+?[${tr}]+(?:\\?\*|[ \u00A0])`
), rE = new RegExp(
  String.raw`\\\+?[${tr}]*$`
), nE = new RegExp(
  String.raw`^\\(${YM})( |$)`
), iE = new RegExp(
  String.raw`\\[${Pg}+*]*$`,
  "i"
), rt = "￼";
function Og(e) {
  return e.length > 1 && e.startsWith(L) && e.charAt(1) !== rt ? e.slice(1) : e;
}
function Kd(e) {
  return Fc(e) ? e.markerSyntax ?? "opening" : void 0;
}
function wg(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = Cr.serializeEditorState(
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
  for (; Kd(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Pt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Kd(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function Os(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function wi(e, t) {
  rE.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += rt;
}
function It(e) {
  return e.replaceAll(L, " ");
}
function sE(e, t, r = !1) {
  if (qo(t)) return It(e);
  if (e === L) return " ";
  const n = r && e.startsWith(L), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(L, "~");
}
function Bi(e) {
  const t = e.getTextContent();
  return Nn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Al(e, t) {
  const r = e[t];
  if (!Be(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = So(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!O(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function qg(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Pl(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = Xi(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function Nl(e) {
  return !!e.getUnknownAttributes();
}
function Lo(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && Nc(e);
}
function Rg(e, t) {
  return Be(e) ? !Lo(e.getMarker(), t) : j(e) || De(e) ? !0 : Oe(e) ? Nl(e) : D(e) ? $g(e, t) : !1;
}
function $g(e, t) {
  if (Vk(e)) return !0;
  const r = e.getMarker();
  return !qb(r) && t(r) === void 0;
}
const $t = "", Lt = "";
function jd(e) {
  return e.flatMap((t) => Ie(t) ? t.getChildren() : [t]);
}
function Ii(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Be(s)) {
      const o = Al(e, i);
      Lo(s.getMarker(), r) && qg(o) ? (t.push(
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
      ), Ii(jd(o), t, r), t.push(Lt)) : t.push(rt), i += o.length;
    } else if (Oe(s)) {
      const o = Pl(e, i);
      Nl(s) ? t.push(rt) : (t.push(
        $t,
        "verse",
        It(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Ii(jd(o), t, r), t.push(Lt)), i += o.length;
    } else O(s) ? t.push($t, "marker", It(s.getTextContent()), Lt) : Zr(s) ? t.push($t, "unmatched", It(s.getTextContent()), Lt) : Rg(s, r) ? t.push(rt) : ps(s) ? t.push(" ") : v(s) ? t.push(
      It(
        n ? Og(Bi(s)) : Bi(s)
      )
    ) : D(s) ? (t.push($t, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Ii(s.getChildren(), t, r, !0), t.push(Lt)) : F(s) ? (t.push($t, s.getType()), Ii(s.getChildren(), t, r), t.push(Lt)) : t.push(rt);
  }
}
function ki(e, t) {
  const r = [];
  return Ii(e, r, t), r.join("");
}
function Sr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function li(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Ol(e) {
  return e.type ?? "";
}
function Lg(e, t, r) {
  return t === "closing" ? nt(e, r) : t === "selfClosing" ? nt("") : we(e, r);
}
function _a(e, t) {
  const r = e[t];
  if (!(!r || Ol(r) !== "attribute-run"))
    return Sr(r) ?? [];
}
function Ti(e, t) {
  const r = [];
  return Di(e, r, t), r.join("");
}
function Di(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Ol(s);
    if (o === "ms") {
      const l = s, u = _a(e, i + 1);
      u && Lo(l.marker ?? "", r) ? (t.push(
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
      ), Di(u, t, r), t.push(Lt), i += 1) : t.push(rt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(rt);
        continue;
      }
      t.push(
        $t,
        "verse",
        It(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = _a(e, i + 1 + u);
      for (; d; )
        Di(d, t, r), u++, d = _a(e, i + 1 + u);
      t.push(Lt), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        $t,
        "marker",
        It(
          Lg(l.marker ?? "", l.markerSyntax, l.nested)
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
      t.push($t, "char", JSON.stringify(l.unknownAttributes ?? null)), Di(Sr(s) ?? [], t, r, !0), t.push(Lt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(rt);
      continue;
    }
    if (o === "unmatched") {
      t.push($t, "unmatched", It(li(s) ?? "")), t.push(Lt);
      continue;
    }
    const a = li(s);
    if (a !== void 0) {
      t.push(It(n ? Og(a) : a));
      continue;
    }
    const c = Sr(s);
    c ? (t.push($t, o), Di(c, t, r), t.push(Lt)) : t.push(rt);
  }
}
function Io(e) {
  let t = 0;
  for (const r of e) {
    const n = Sr(r);
    if (n) {
      t += Io(n);
      continue;
    }
    const i = li(r);
    if (i !== void 0)
      for (const s of i) s === rt && t++;
  }
  return t;
}
function as(e, t, r, n, i) {
  Mn(e.getChildren(), t, r, n, i);
}
function Mn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (O(a))
      Os(t, a, It(a.getTextContent()));
    else if (Be(a)) {
      s();
      const c = Al(e, o);
      Lo(a.getMarker(), r) && qg(c) ? Mn(c, t, r, n) : wi(t, [a, ...c]), o += c.length;
    } else if (j(a) || De(a))
      s(), wi(t, [a]);
    else if (Oe(a)) {
      s();
      const c = Pl(e, o);
      Nl(a) ? wi(t, [a, ...c]) : (Os(t, a, It(Bi(a))), Mn(c, t, r, n)), o += c.length;
    } else if (D(a))
      s(), $g(a, r) ? wi(t, [a]) : as(a, t, r, n, { pending: !0 });
    else if (ps(a))
      s(), Os(t, a, " ");
    else if (v(a)) {
      const c = Nn(a) || ne(a, oe) === "attribute", l = s() && !c;
      Os(
        t,
        a,
        c ? It(Bi(a)) : sE(Bi(a), n, l)
      );
    } else F(a) ? as(a, t, r, n, i) : (s(), wi(t, [a]));
  }
}
function wl(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (De(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return as(e, i, t, r), i;
}
function Ig(e, t) {
  let r = 0;
  const n = (i) => {
    if (v(i)) {
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
    } else F(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function uc(e, t = []) {
  for (const r of e)
    Oe(r) ? t.push(r) : F(r) && uc(r.getChildren(), t);
  return t;
}
function Dg(e) {
  let t = 0;
  const r = (n) => {
    if (v(n))
      for (const i of n.getTextContent()) i === rt && t++;
    else F(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Rn(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === rt && t++;
    else r.content && (t += Rn(r.content));
  return t;
}
function oE(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), F(i) && as(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const cs = /\s/;
function Ug(e) {
  return e.filter(Do).length;
}
function Do(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return v(t) && !O(t) && ne(t, oe) === "attribute";
}
function aE(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return O(t) || Do(e);
}
function Bd(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Do(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      cs.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function ql(e, t, r) {
  const n = Bd(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !aE(i) ? Bd(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: Ug(e.spans) };
}
function Ca(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return O(t) && t.getMarkerSyntax() !== "opening";
}
function cE(e) {
  const t = se(e.key);
  if (!O(t)) return !1;
  const r = t.getParent();
  return D(r) ? (r.selectNext(0, 0), !0) : !1;
}
function lE(e) {
  const t = se(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = Oe(t) ? Pl(r, n) : Be(t) ? Al(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function Fg(e, t, r) {
  const { text: n, spans: i } = e, s = Ug(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && !Ca(d);
    if (!(o && Do(d))) {
      if (u) {
        if (!p) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let m = 0; m < f; m++) {
        const g = n[d.start + m];
        if (c === 0 && (l === 0 || !cs.test(g))) {
          if (p) {
            a = { key: d.key, offset: m };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? cs.test(g) || c-- : l--;
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
    if (d && Ca(d) && cE(d) || d?.isSentinel && lE(d)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !Ca(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = se(a.key);
    if (d && v(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find(F)?.selectStart();
}
function zg(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(F)?.selectStart();
      return;
    }
    Fg(oE(e, n, i), t, e);
  }
}
function uE(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(F)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  Mn(e, s, n, i), Fg({ text: s.text, spans: s.spans }, t, e);
}
function Kg(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  for (const g of e) {
    const y = wl(g, n, r);
    if (!y)
      return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
    s.text.length > 0 && (s.text += " ");
    const k = s.text.length;
    y.spans.forEach(
      (_) => s.spans.push({ ..._, start: _.start + k, end: _.end + k })
    ), s.sentinels.push(...y.sentinels), s.text += y.text;
  }
  let o, a = !1;
  const c = w();
  if (P(c)) {
    for (let g = c.anchor.getNode(); g; g = g.getParent())
      if (e.some((y) => y.is(g))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = ql(s, c.anchor.key, c.anchor.offset));
  }
  const l = Mr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Rn(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = Cr.serializeEditorState(
    { type: kr, version: br, content: l },
    r
  );
  if (Ti(u.root.children, n) === ki(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((g) => ho(g));
  if (Dg(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = uc(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), p = e[0];
  d.forEach((g) => p.insertBefore(g)), Ig(d, s.sentinels), e.forEach((g) => g.remove());
  const m = uc(d);
  for (let g = 0; g < f.length && g < m.length; g++)
    m[g].getNumber() === f[g].number && m[g].setSid(f[g].sid);
  return zg(d, o, a, n, r), !0;
}
function jg(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Ae.isValidMarker(e.getMarker())) return;
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
  return Mn(c, l, t, r), { out: l, contentNodes: c };
}
function Bg(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(rt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function dE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = jg(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = w();
  if (P(u)) {
    for (let N = u.anchor.getNode(); N; N = N.getParent())
      if (e.is(N)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = ql(o, u.anchor.key, u.anchor.offset));
  }
  const d = Mr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Rn(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], m = Bg(p), g = wg(e, p, m, r);
  if (g.failure !== void 0)
    return g.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      g.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Io(g.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const y = e.getCategory() !== m;
  if (y && e.setCategory(m), Ti(g.children, n) === ki(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  const k = g.children.map((N) => ho(N));
  if (Dg(k) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), y;
  const _ = a[0];
  if (_)
    k.forEach((N) => _.insertBefore(N));
  else {
    const N = e.getChildren().find((A) => O(A) && A.getMarkerSyntax() === "closing");
    k.forEach((A) => N ? N.insertBefore(A) : e.append(A));
  }
  Ig(k, o.sentinels);
  const S = new Set(o.sentinels.flat().map((N) => N.getKey()));
  return a.forEach((N) => {
    S.has(N.getKey()) || N.remove();
  }), uE(k, c, l, n, r), !0;
}
const Vg = /* @__PURE__ */ new Set(["ca", "cp"]), Rl = "cp";
function Wg(e) {
  if (!fr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (as(e, t, ur, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Mr(r, { getMarker: ur }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Rl)
  );
}
function Uo(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (D(r) && Vg.has(r.getMarker()) || Wg(r)) {
      t.push(r);
      continue;
    }
    ae(r) && r.getMarker() === Rl && t.push(r);
    break;
  }
  return t;
}
function fE(e) {
  const t = (n) => D(n) && Vg.has(n.getMarker()) || Wg(n);
  if (t(e) || ae(e) && e.getMarker() === Rl)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Me(n)) return n;
      if (!t(n)) return;
    }
}
function Hg(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Uo(e);
  if (n.some((s) => ae(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Mn(e.getChildren(), i, t, r), Mn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function pE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Uo(e)], o = Hg(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = w();
  if (P(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((g) => g.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = ql(o, l.anchor.key, l.anchor.offset));
  }
  const u = Mr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Rn(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = Cr.serializeEditorState(
    { type: kr, version: br, content: u },
    r
  );
  if (Ti(f.root.children, n) === ki(s, n)) {
    let m = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), m = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), m = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const p = f.root.children.map((m) => ho(m));
  return Me(p[0]) ? (p.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), zg(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function ls(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (De(n)) return;
    !t && (j(n) || ae(n) || Me(n)) && (t = n), zy(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? fE(r) : void 0) ?? t;
}
function Wt(e, t) {
  const r = ls(e);
  return r ? j(r) ? dE(r, t) : Me(r) ? pE(r, t) : Kg([r], t) : !1;
}
const hE = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Vd(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !hE.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function Is(e, t) {
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
          t.push(`\\${n}`), Vd(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), Is(r.content, t), Vd(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Is(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), Is(r.content, t);
      }
    }
}
function Wd(e, t, r) {
  const n = ls(e);
  if (!ae(n)) return !1;
  const i = w();
  if (!P(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = wl(n, t, r);
  if (!o) return !1;
  const a = Mr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    cs.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  Is(a, l);
  for (const u of l.join("").replaceAll(L, "~")) {
    if (cs.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function $l(e, t) {
  return Gg(e, t, b.Paragraph);
}
function gE(e, t) {
  return Gg(e, t, b.Character);
}
function Gg(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== b.Unknown ? i === r : !(Ae.isValidMarker(n) || Nc(n));
}
function mE(e) {
  return [ot(e), _o()];
}
function Ll(e) {
  Zt(e, 2);
}
function yE(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function co(e) {
  const t = yE(e);
  e.splice(0, 0, mE(e.getMarker())), t && Ll(e);
}
function Fo(e, t) {
  e.setMarker(t), co(e), Ll(e);
}
function bE(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Nn(n)) {
    if (v(n) && !O(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(L), kt(n, oe, pr), n.setMode("token");
      return;
    }
    if (Op(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(_o());
  }
}
function Hd(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : F(n) ? n.getChildrenSize() : 0;
  if (r === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = n; !s.is(t); ) {
    if (r === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function Vi(e) {
  for (let t = e; t; t = t.getParent())
    if (ae(t)) return t;
}
function kE(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Vi(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Vi(r.getNode())?.is(s) ?? !1, a = Vi(n.getNode())?.is(s) ?? !1;
    return !(o && !Hd(r, s, "start") || a && !Hd(n, s, "end"));
  });
}
function dc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = w();
  if (!(!P(r) || r.isCollapsed()))
    for (const n of kE(r)) t.add(n.getKey());
}
function TE(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = w();
  if (!P(r) || !r.isCollapsed()) return;
  const n = Vi(r.focus.getNode());
  n && t.add(n.getKey());
}
function xE(e) {
  const t = w();
  !P(t) || t.isCollapsed() || t.getNodes().some((r) => O(r)) && (dc(e), t.removeText());
}
const _E = new RegExp(
  String.raw`^\\\+?([${tr}]+)(?:[ \u00A0]|$)`
);
function CE(e, t) {
  const r = _E.exec(e.getTextContent());
  return !!r && $l(r[1], t);
}
function SE(e, t) {
  if (!qn(t.viewOptions)) return;
  if (zt(e.getFirstChild())) {
    bE(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (CE(e, t.getMarker)) return;
    co(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ae(o) && !o.is(e))) {
      Fo(e, Ht), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (ae(r)) {
    const n = e.getChildren().filter((a) => !Nn(a)), i = w();
    let s = !1;
    if (P(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Vi(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || F(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Zt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  e.setMarker(Ht), co(e);
}
function vE(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = lr(t, ko(e.getMarker()));
  return r === "" ? void 0 : r;
}
function ME(e) {
  const t = e.getChildren().filter((s) => !O(s) && ne(s, oe) !== "attribute"), r = t[0];
  r && v(r) && r.getTextContent().startsWith(L) && r.setTextContent(r.getTextContent().slice(1));
  const n = vE(e);
  n && t.push(pe(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function EE(e, t) {
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
function AE(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(O(r) && r.getMarkerSyntax() === "opening")) {
    ME(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => O(o) && o.getMarkerSyntax() === "closing");
  i && !s && Wt(e, t);
}
function Jg(e, t, r) {
  if (!O(e.getFirstChild()) && r?.markerMode === "editable" && qn(r)) {
    Fo(e, t);
    return;
  }
  Oh(e, t);
}
const lo = "usfm:", Yg = "usfmopen", Xg = "usfmclosed";
function PE(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const NE = new RegExp(
  [lo, Yg, Xg].map(PE).join("|")
), OE = "\uFEFF", wE = /^usfm_(.+)$/;
function qE(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function RE(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function $E(e) {
  return e.startsWith(lo) ? RE(e.slice(lo.length)).replace(/\r\n?|\n/g, " ") : "";
}
function Qg(e) {
  for (const t of e.classList) {
    const r = wE.exec(t);
    if (r) return r[1];
  }
}
function LE(e) {
  const t = Qg(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function IE(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(lo)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(Yg) && !n.contains(Xg)) && Qg(r) !== void 0)
      return !0;
  }
  return !1;
}
function Zg(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push($E(e.nodeValue ?? ""));
    return;
  }
  if (!qE(e)) return;
  const { classList: n } = e, i = (u) => e.childNodes.forEach((d) => Zg(d, u, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? LE(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function DE(e) {
  if (!NE.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !IE(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => Zg(n, !1, r)), r.join("").replaceAll(OE, "").replaceAll(L, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function UE(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ne(e, oe);
  if (r === "attribute" || r === pr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (ht(o) || Me(o) || De(o)) return;
  const n = t.startsWith(L) && D(e.getParent()), i = n ? t.slice(1) : t, s = (n ? L : "") + i.replace(/ (?=[ \u00A0])/g, L).replace(new RegExp("(?<=\\u00A0) ", "g"), L);
  s !== t && e.setTextContent(s);
}
function FE(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function zE(e, t) {
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
function Ds(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (r)
    return em(r, t);
}
function em(e, t) {
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(e.getData("text/plain")), i = e.getData("text/html"), s = i ? DE(i) : void 0;
  return {
    text: s ? r(s) : n || (i ? r(FE(i)) : ""),
    isInternal: zE(
      e.getData("application/x-lexical-editor"),
      t
    )
  };
}
const Gd = String.raw`\\(?:\+?[${tr}]+\*?|\*)`, KE = new RegExp(
  String.raw`(?<=${Gd})\u00A0|\u00A0(?=${Gd})`,
  "g"
);
function Il(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(KE, " ").replaceAll(L, "~");
}
const tm = new RegExp(
  String.raw`\\c(?![${tr}])[ \u00A0]*[^\s\\]*`,
  "g"
), rm = new RegExp(String.raw`\\id(?![${tr}])[^\n\\]*`, "g"), jE = new RegExp(
  String.raw`^(?:${tm.source}|${rm.source})`
);
function Dl(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(tm, "").replace(rm, "");
    return jE.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function fc(e) {
  if (v(e) && ne(e, oe) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Ie(t)) return !0;
  return !1;
}
function BE(e) {
  return fc(e.anchor.getNode()) || fc(e.focus.getNode());
}
function VE(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && fc(t.getNode());
}
function WE(e, t) {
  const n = VE(e) ? t : Il(Dl(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function HE(e, t = !1, r = () => {
}) {
  const n = Ds(e, ui()._config.namespace);
  if (!n) return !1;
  const i = w(), s = P(i) && BE(i);
  if (!s && n.isInternal || t && P(i) && Zn(i))
    return !1;
  const { text: o } = n;
  return !o || !P(i) ? !1 : (e?.preventDefault(), s ? (WE(i, o), !0) : (nm(i, o, t, r), !0));
}
function nm(e, t, r, n) {
  const i = Il(Dl(t));
  if (!i) return;
  const s = i.split(`
`);
  if (r) {
    e.insertText(s.join(" "));
    return;
  }
  if (s.length < 2) {
    e.insertText(i);
    return;
  }
  n(), e.isCollapsed() || e.removeText();
  const o = ui();
  s.forEach((a, c) => {
    if (c > 0 && o.dispatchCommand(Ui, void 0), a === "") return;
    const l = w();
    P(l) && l.insertText(a);
  });
}
function GE(e) {
  if (e.getTextContent() !== L) return !1;
  const t = e.getParent();
  return j(t) ? !vt(e.getPreviousSibling()) : !1;
}
function JE(e, t) {
  if (t || e.getTextContent() !== L) return "";
  const r = e.getParent();
  if (!j(r) || !vt(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function YE(e) {
  const t = e.getParent();
  return (j(t) ? t.getCaller() : void 0) || Wi;
}
function XE(e) {
  const t = e.getParent();
  return !t || Jr(t) === void 0;
}
function im(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = _c(e);
  let l = "", u = !0;
  for (const d of t) {
    if (F(d) && !d.isInline()) {
      !u && XE(d) && (l += `
`), u = !d.isEmpty();
      continue;
    }
    if (u = !1, vt(d))
      (d !== n || !e.isCollapsed()) && (l += (d === r ? "" : " ") + YE(d));
    else if (v(d)) {
      let f = d.getTextContent();
      d === r ? d === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : d === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += GE(d) ? "" : f.replaceAll(L, " ") + JE(d, d === n);
    } else (yo(d) || ps(d)) && (d !== n || !e.isCollapsed()) && (l += d.getTextContent().replaceAll(L, " "));
  }
  return l;
}
function sm(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function QE(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => ht(r) || Me(r)
    )
  );
}
function ZE(e) {
  const t = w();
  if (!P(t) || t.isCollapsed()) return;
  const r = im(t), n = {
    "text/plain": r,
    "text/html": sm(r)
  };
  if (ss() || QE(t)) return n;
  const i = Wy(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function Jd(e, t, r) {
  const n = w();
  if (!P(n) || n.isCollapsed())
    return (!e || !("clipboardData" in e)) && !jh();
  const i = ZE(t);
  return i ? om(e, t, n, i, r) : !1;
}
function om(e, t, r, n, i) {
  const s = !n["text/plain"], o = i && t.isEditable();
  if (!e || !("clipboardData" in e))
    return s || Hy(t, null, n), o && r.removeText(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !s)
    for (const [a, c] of Object.entries(n)) e.clipboardData.setData(a, c);
  return o && r.removeText(), !0;
}
function us(e) {
  return Ze(e, Me) ?? void 0;
}
function am(e) {
  return [e.anchor.getNode(), e.focus.getNode(), ...e.getNodes()].some(
    (t) => us(t) !== void 0
  );
}
function Ul() {
  const e = w();
  if (!P(e)) return;
  if (!e.isCollapsed()) {
    if (!am(e)) return;
    e.removeText();
  }
  const t = w();
  return P(t) ? us(t.focus.getNode()) : void 0;
}
function cm(e, t) {
  const r = Ul();
  if (!r) return !1;
  const n = ti(e);
  return r.insertAfter(n), qn(t) ? Fo(n, e) : n.selectStart(), !0;
}
function eA() {
  const e = w();
  return P(e) && !e.isCollapsed() && us(e.anchor.getNode())?.is(us(e.focus.getNode())) ? !0 : Ul() !== void 0;
}
function tA(e) {
  if (!am(e)) return !1;
  if (!e.isCollapsed()) return !0;
  const t = e.focus.getNode(), r = us(t), n = r && bs(r);
  return !(n?.is(t) && e.focus.offset === n.getTextContentSize());
}
function lm(e, t, r) {
  const n = w();
  if (t && P(n) && tA(n))
    return !0;
  if (!Ul()) return !1;
  const i = w();
  return e && P(i) && nm(i, e, t, r), !0;
}
function um() {
  const e = w();
  if (!P(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = dm(e);
    return t !== "removed" ? t : (pc(), "handled");
  }
  return pc() ? "handled" : "declined";
}
function rA(e, t) {
  if (!t) return e;
  const r = nE.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function Yd(e, t) {
  const r = w();
  if (!P(r)) return "declined";
  if (r.isCollapsed()) {
    if (!fm())
      return "declined";
  } else {
    const s = dm(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => rA(s, t)
  );
  Xd(n ?? "");
  for (const s of i)
    pc(), Xd(s);
  return "handled";
}
function nA(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = di(n);
  if (!i) return !1;
  const s = Qt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !v(i) || O(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function dm(e) {
  const t = Qt(e.anchor.getNode()), r = Qt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), iA() ? "removed" : "needs-plain-split");
}
function Xd(e) {
  if (e === "") return;
  const t = w();
  P(t) && t.insertText(e);
}
function iA() {
  const e = w();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = Qt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => O(r) && r.getMarkerSyntax() === "opening");
}
function fm() {
  const e = w();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Qt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function pc() {
  const e = w();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = fm();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = xr("fp", { closed: "false" });
  i.append(ot("fp"));
  const s = v(t) && !O(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    ii(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (Lk(u), i.append(u));
  }
  return i.getChildren().every(O) && i.append(pe(Ut)), pm(i), !0;
}
function pm(e) {
  const t = e.getChildren().find((r) => !O(r));
  if (v(t)) {
    const r = t.getTextContent().startsWith(L) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (F(t)) {
    pm(t);
    return;
  }
  e.selectEnd();
}
function sA(e) {
  const t = [];
  let r = e;
  for (; r; )
    D(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function oA(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Fe().getChildren()) {
    if (t && n.is(t)) {
      Me(n) && r.push(n.getMarker());
      break;
    }
    (ht(n) || Ge(n) || ae(n)) && r.push(n.getMarker());
  }
  return r;
}
function aA(e) {
  let t = e;
  for (; F(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function cA(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (zt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Nn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(aA(i)) && r === 0 : !1;
}
function lA(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !zt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Nn(i) && t.is(i) && r === 0;
}
function uA() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function dA() {
  const e = w();
  if (!P(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = Ze(t, ae), s = !n && (!i || lA(i, t, r)) ? "paragraph" : "character", o = Qt(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: oA(t),
    openCharMarkers: sA(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Jc(t, r),
    anchorRect: uA()
  };
}
function fA() {
  const e = w();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!v(t) || O(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = iE.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function pA(e, t, r) {
  Jg(e, t, r), Ll(e);
}
function hA(e, t, r) {
  const n = w();
  if (!P(n)) return;
  const i = n.focus.getNode(), s = Ze(i, ae);
  if (t === "backslash" && s && cA(s, i, n.focus.offset)) {
    pA(s, e, r);
    return;
  }
  gm(e, r);
}
function gA(e, t) {
  const r = w();
  return !P(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function hm(e) {
  const t = w();
  return P(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function mA(e, t, r, n) {
  if (P(w()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && fA(), e.kind === "closeTag") {
    hm(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && um() !== "declined") return;
  if (e.kind === "paragraph" && et.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    hA(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Ae.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return mg(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  sc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: ui(), reference: r });
}
function gm(e, t) {
  if (cm(e, t)) return;
  const r = w();
  if (!P(r)) return;
  const n = qn(t);
  if (hg()) {
    const s = w();
    if (!P(s)) return;
    const o = Ze(s.anchor.getNode(), ae);
    if (!o) return;
    o.setMarker(e), n && co(o);
    return;
  }
  const i = r.insertParagraph();
  ae(i) && (n ? Fo(i, e) : i.setMarker(e));
}
function yA() {
  const [e] = ce();
  return z(() => e.registerCommand(Mf, () => !0, dt), [e]), null;
}
function bA(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = ZM.exec(e)?.[1];
  return r === void 0 ? !1 : !$l(r, t);
}
function mm(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !bA(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ae(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (ae(i))
    return [i, r];
}
function ym(e, t) {
  const r = mm(e, t.getMarker);
  return r !== void 0 && Kg(r, t);
}
function kA(e, t) {
  const r = w();
  P(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function bm(e) {
  const t = eE.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function TA(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = bm(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function xA(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (j(e.getParent()) && v(r)) {
    const n = r.getNextSibling();
    if (D(n)) {
      Hc(n);
      return;
    }
  }
  v(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Qd(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = bm(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  xA(e);
}
function Zd(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function km(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Wt(e, r);
  const n = TA(e), i = e.getParent();
  if (ae(i)) {
    if (!$l(t, r.getMarker))
      return ym(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Wt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Zd(s, t) && Qd(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (D(i) || j(i)) {
    const s = t.replace(/^\+/, "");
    if (!(D(i) ? gE(t, r.getMarker) : Ae.isValidMarker(s)))
      return Wt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Wt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(O).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (kA(c, nt(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Zd(a, s) && Qd(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Wt(e, r);
}
function _A(e) {
  const t = w();
  if (!P(t)) return !1;
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
function CA(e, t) {
  const r = e.getTextContent();
  if (Qr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Ie(e.getParent()) && zc(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !_A(e)) {
    jk(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = XM.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), km(e, n[1], t);
      return;
    }
    if (QM.test(r)) {
      t.pendingKeys.delete(e.getKey()), Wt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = nt(e.getMarker(), e.getNested());
    if (D(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = w(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = pe(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function SA(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (Xp(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Tm(e) {
  if (!Df(e)?.length)
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
const qi = Tm("v"), vA = Tm("c"), ef = /^[ \u00A0]*$/;
function tf(e, t, r) {
  const n = e.getNextSibling();
  if (v(n) && n.getType() === Ke.getType() && n.getMode() === "normal" && ne(n, oe) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = pe(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function MA(e, t) {
  const r = e.getTextContent(), n = Dt("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (qi.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = qi.valueAndRest.exec(c);
    if (l && ef.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (qi.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = qi.valueAndRest.exec(r);
  if (!s) {
    const c = qi.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = w(), p = P(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Dt("v", u));
      const m = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      tf(e, d, m);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Wt(e, t);
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
  e.setNumber(o), e.setTextContent(Dt("v", o)), a && tf(e, a, a.length);
}
const EA = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function AA(e, t) {
  const r = e.getParent();
  if (!j(r) || r.getIsCollapsed() !== !1 || !Df(r.getMarker())?.includes("caller")) return !1;
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
  const o = EA.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Pt(a)), !0;
}
function PA(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!v(t)) return;
  const r = Dt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = vA.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function xm(e) {
  if (Be(e)) {
    const { wrapper: t } = So(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (j(e)) {
    const { wrapper: t } = Ip(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Me(e)) {
    const t = [], r = Dp(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Fp(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Oe(e)) {
    const t = [], r = Xi(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = Xi(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function NA(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return xm(e).some((n) => r.is(n));
}
function OA(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ae(e) && Op(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Zi)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && ks(l, e) && (i || NA(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of xm(e))
    l.remove(), n = !0;
  let s = !1;
  if (D(e)) {
    const l = Gk(e);
    l !== void 0 && Pb(l) && (jp(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Zi)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (KT(l, e)) {
        ts(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && oh(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Ao(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function rf(e) {
  return v(e) && e.getType() === Ke.getType() && e.getMode() === "normal" && ne(e, oe) !== "attribute";
}
function wA(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = se(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && rf(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && rf(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function ws(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = wA(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = se(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (O(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (Qr(c)) continue;
      const m = Ng.exec(p);
      c.getMarkerSyntax() === "opening" && m ? n = km(c, m[1], e) || n : r === "idle" && Wd(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : ym(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Wt(c, e) || n;
      continue;
    }
    const l = _n(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = OA(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && Wd(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = Wt(u, e) || n;
    }
  }
  return n;
}
function _m(e) {
  if (Zr(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (D(t)) return Fi(t) !== void 0;
  return !1;
}
function qA(e) {
  const t = _n(e);
  if (!t) return !1;
  const r = xn(t.kind);
  return !Ao(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function nf(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (ht(t) || De(t) || eh(t)) return !0;
  return !1;
}
function RA(e, t) {
  const r = e.getTextContent(), n = ne(e, oe), i = e.getParent();
  if (n !== "attribute" && Me(i)) {
    r.replace(/^[ \u00A0]+/, "") === Dt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (AA(e, t)) return;
  if (n === "attribute") {
    qA(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && _m(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !nf(e))
      t.pendingKeys.add(e.getKey());
    else if (zp(e)) t.pendingKeys.add(e.getKey());
    else if (Me(ls(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      D(a) && Bp(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (nf(e)) return;
  const s = w(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (tE.test(o)) {
    if (Db(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), Wt(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function $A(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : oh(e, t);
}
function LA(e) {
  const t = (r) => {
    if (O(r)) {
      Qr(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (Zr(r)) {
      Xp(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Zi)
      n.settleScope !== "none" && n.ownerPredicate(r) && (ks(n, r) || $A(n, r)) && e.pendingKeys.add(r.getKey());
    if (Oe(r)) {
      r.getTextContent() !== Dt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (v(r)) {
      if (r.getType() !== Ke.getType() || ne(r, oe) === "attribute") return;
      const n = r.getParent();
      if (Me(n)) {
        r.getTextContent() !== Dt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && _m(r) || i.includes("//") || zp(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (D(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!De(r) && !ht(r)) {
      if (Ie(r) && r.getChildrenSize() === 0) {
        const n = _n(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      F(r) && r.getChildren().forEach(t);
    }
  };
  Fe().getChildren().forEach(t);
}
const Cm = Ef(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Sa(e) {
  const t = e();
  return Br(xf), Br(Kf), t;
}
const sf = 8, IA = 1e3;
function Hn(e, t) {
  const r = Oe(e) ? ["va", "vp"] : Be(e) ? ["milestone"] : j(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    HT(xn(n), e, t.pendingKeys);
}
function DA(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(vc) || i.updateTags.has(Hi)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = se(o);
        if (!c) continue;
        const l = _n(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = se(o.getKey());
        c?.isAttached() && xn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Ve(
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
    e.registerMutationListener(Ke, r),
    e.registerMutationListener(gr, r),
    e.registerMutationListener(Er, r),
    e.registerMutationListener(Ar, r)
  );
}
function uo(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = w();
  return r ? t ? Xh(r, t) : P(r) && Zn(r) : !1;
}
function UA(e, t, r) {
  return Ve(
    e.registerCommand(
      cr,
      (n) => {
        if (ss() || uo(t)) return !1;
        const i = Ds(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? Il(Dl(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = Yd(o, t.getMarker);
          if (a === "declined" && nA(e) && (a = Yd(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      xt
    ),
    e.registerCommand(
      cr,
      (n) => {
        if (ss() || uo(t)) return !1;
        const i = Ds(n, e._config.namespace);
        if (!i) return !1;
        const s = lm(
          i.text,
          t.structureProtectionMode === "protected",
          () => {
            t.splitExpected.current = !0;
          }
        );
        return s && n?.preventDefault(), s;
      },
      xt
    ),
    e.registerCommand(
      cr,
      (n) => {
        const i = Ds(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !gM()) return !1;
        const o = w();
        return t.structureProtectionMode === "protected" && P(o) && Zn(o) ? !1 : (n?.preventDefault(), P(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Ui, void 0), a === "") return;
          const l = w();
          P(l) && l.insertText(a);
        }), !0);
      },
      Ne
    ),
    e.registerCommand(
      cr,
      () => (t.splitExpected.current = !0, !1),
      dt
    )
  );
}
function FA({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off"
}) {
  const [s] = ce(), o = e?.markerMode === "editable", a = !!e && qo(e), c = Z(void 0), l = Z(n);
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
    const d = DT(s, u.pendingKeys);
    let f, p = !1, m, g = !1, y = !1, k = 0;
    const _ = () => k < sf ? !1 : (u.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${sf} consecutive mutating passes; leaving ${u.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...u.pendingKeys].join(", ")}`
    ), !0), S = (M, q = "departure") => {
      s.update(() => {
        k = Sa(
          () => ws(u, M, q)
        ) ? k + 1 : 0;
      });
    };
    let N;
    const A = () => {
      if (N !== void 0 && clearTimeout(N), N = void 0, y || u.pendingKeys.size === 0) return;
      const M = l.current ?? IA;
      M < 0 || (N = setTimeout(() => {
        N = void 0, !(y || u.pendingKeys.size === 0) && (p || _() || S(void 0, "idle"));
      }, M));
    }, B = Ve(
      s.registerNodeTransform(gr, (M) => {
        if (s.isComposing()) return;
        CA(M, u);
        const q = _n(M);
        q && (Oe(q.owner) || j(q.owner) || Me(q.owner) || Be(q.owner) && So(q.owner).wrapper === void 0) && Hn(q.owner, u);
      }),
      s.registerNodeTransform(ft, (M) => {
        s.isComposing() || (MA(M, u), Hn(M, u));
      }),
      s.registerNodeTransform(Ot, (M) => {
        s.isComposing() || (PA(M), M.isAttached() && Hn(M, u));
      }),
      s.registerNodeTransform(et, (M) => {
        s.isComposing() || SE(M, u);
      }),
      s.registerNodeTransform(me, (M) => {
        if (!s.isComposing()) {
          AE(M, u);
          for (const q of ["separator", "char"])
            M.isAttached() && ks(xn(q), M) && u.pendingKeys.add(M.getKey());
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
        s.isComposing() || Hn(M, u);
      }),
      s.registerNodeTransform(Ar, (M) => {
        if (s.isComposing()) return;
        const q = _n(M);
        q && (Be(q.owner) || Oe(q.owner) || j(q.owner) || Me(q.owner)) && Hn(q.owner, u);
      }),
      s.registerNodeTransform(Ae, (M) => {
        s.isComposing() || (EE(M, u), Hn(M, u));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      s.registerNodeTransform(Or, (M) => {
        s.isComposing() || SA(M, u);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      s.registerNodeTransform(Ke, (M) => {
        s.isComposing() || RA(M, u);
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
        Ke,
        (M) => {
          s.getEditorState().read(() => {
            for (const [q, $] of M) {
              if ($ === "destroyed") continue;
              const J = se(q);
              !J || ne(J, oe) !== "attribute" || Ie(J.getParent()) || s.getElementByKey(q)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      DA(s, u),
      ...a ? [
        s.registerNodeTransform(Ke, (M) => {
          s.isComposing() || UE(M);
        }),
        s.registerCommand(
          bo,
          (M) => Jd(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            M && typeof M == "object" && "clipboardData" in M ? M : null,
            s,
            !1
          ),
          Ne
        ),
        s.registerCommand(
          yn,
          (M) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            Jd(
              M && typeof M == "object" && "clipboardData" in M ? M : null,
              s,
              !0
            )
          ),
          Ne
        ),
        s.registerCommand(
          cr,
          (M) => HE(
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
          Ne
        )
      ] : [],
      s.registerCommand(
        yn,
        () => (!uo(u) && !ss() && dc(u), !1),
        xt
      ),
      s.registerCommand(
        Us,
        () => (s.isComposing() || xE(u), !1),
        Yn
      ),
      s.registerCommand(
        mo,
        () => (p = !1, k = 0, A(), !1),
        dt
      ),
      s.registerCommand(
        vr,
        (M) => (p = !1, k = 0, A(), (M.key === "Backspace" || M.key === "Delete") && !uo(u, Hh(M)) && (dc(u), TE(u), queueMicrotask(() => {
          u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear();
        })), s.isComposing() || !M.ctrlKey || M.altKey || M.shiftKey || M.metaKey || M.key !== " " && M.code !== "Space" || !hM() ? !1 : (M.preventDefault(), !0)),
        Ne
      ),
      s.registerCommand(
        Sf,
        (M) => {
          const q = um();
          q === "needs-plain-split" && s.dispatchCommand(Ui, void 0);
          const $ = q !== "declined" || GT();
          return $ && M?.preventDefault(), ws(u), $;
        },
        Ne
      ),
      // A chapter line cannot be split: Enter there starts a `\p` after it and a line break is
      // refused (see chapterLine.utils.ts). CRITICAL so both run ahead of every split, including
      // this plugin's own char-stack split below.
      s.registerCommand(
        Ui,
        () => cm(Ht, u.viewOptions),
        xt
      ),
      s.registerCommand(
        Ky,
        () => eA(),
        xt
      ),
      // A drop inserts through Lexical's clipboard path, which splits at every line break without
      // going through INSERT_PARAGRAPH_COMMAND, so a drop on a chapter line is claimed and goes in
      // as a paste there does. LOW: below structure protection's HIGH block and the NORMAL
      // replace-selection delete, above Lexical's own insertion at EDITOR.
      s.registerCommand(
        Us,
        (M) => {
          if (typeof M == "string" || !M.dataTransfer) return !1;
          const { text: q } = em(M.dataTransfer, s._config.namespace);
          return !!q && lm(q, u.structureProtectionMode === "protected", () => {
            u.splitExpected.current = !0;
          });
        },
        dt
      ),
      s.registerCommand(
        Ui,
        () => (u.splitExpected.current = !0, hg()),
        Ne
      ),
      UA(s, u, a),
      s.registerCommand(
        Cm,
        () => {
          if (p) return !0;
          const M = s.getRootElement(), q = M?.ownerDocument, $ = !!M && !!q && q.hasFocus() && M.contains(q.activeElement);
          let J;
          if ($) {
            const Q = w();
            J = P(Q) ? Q.focus.key : f;
          }
          return Sa(() => ws(u, J)), !0;
        },
        dt
      ),
      s.registerCommand(
        Sc,
        () => {
          if (p) return !1;
          const M = w(), q = P(M) ? M.focus.key : f;
          return Sa(() => ws(u, q)), !1;
        },
        dt
      ),
      s.registerUpdateListener(({ editorState: M, tags: q }) => {
        u.splitExpected.current = !1, u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear(), u.rebuildAttempted.clear();
        const $ = M.read(() => {
          const Q = w();
          return P(Q) ? Q.focus.key : void 0;
        }), J = m;
        if ($ !== void 0 && (m = $), q.has(vc)) {
          u.pendingKeys.clear(), M.read(() => LA(u)), p = !0, $ !== void 0 && (f = $);
          return;
        }
        if (q.has(Vr)) {
          $ !== void 0 && $ !== J && (p = !0);
          return;
        }
        p || ($ !== void 0 && (f = $), A(), !(g || $ === void 0) && [...u.pendingKeys].some((Q) => Q !== $) && (g = !0, queueMicrotask(() => {
          g = !1, !y && (_() || S(f));
        })));
      })
    );
    return () => {
      y = !0, N !== void 0 && clearTimeout(N), N = void 0, d(), B(), c.current = void 0;
    };
  }, [s, o, a]), null;
}
const zA = ["status_unknown", "status_invalid"], Sm = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, KA = Object.values(Sm);
function jA(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Sm[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function of(e) {
  e.classList.remove(...zA), e.removeAttribute("aria-description"), KA.includes(e.title) && e.removeAttribute("title");
}
function BA(e, t, r, n) {
  const i = (a) => a.read(() => Fe().getChildrenKeys()), s = i(t), o = i(e);
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
function VA(e) {
  const t = se(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : O(t) && t.getParent()?.getKey() === r.getKey();
}
function WA({
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
        const u = FM(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || VA(f)) continue;
            const m = se(f)?.getTopLevelElement();
            !m || l.has(m.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && of(p);
        }
        for (const [f, p] of d) {
          const m = n.getElementByKey(f);
          m && jA(m, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          BA(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && of(u);
      }
    };
  }, [n, i, t, r]), null;
}
function HA(e, t) {
  const r = dl(cl), n = nl();
  if (!r || !n?.end) return;
  const i = $s.deserializeEditorState(e.getEditorState(), t);
  if (!i) return;
  const s = jy({
    namespace: "markers-view-copy",
    nodes: [Qe, ...sl],
    onError: (a) => {
      throw a;
    }
  });
  return s.parseEditorState(
    Cr.serializeEditorState(i, r)
  ).read(
    () => {
      const a = Oo(n);
      return a ? im(a) : void 0;
    },
    { editor: s }
  );
}
function GA({ viewOptions: e }) {
  const [t] = ce();
  return z(() => {
    const r = (n, i) => {
      const s = w();
      if (!P(s) || s.isCollapsed()) return !1;
      const o = HA(t, e);
      return o === void 0 ? !1 : om(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        n && typeof n == "object" && "clipboardData" in n ? n : null,
        t,
        s,
        { "text/plain": o, "text/html": sm(o) },
        i
      );
    };
    return Ve(
      t.registerCommand(bo, (n) => r(n, !1), Ne),
      t.registerCommand(yn, (n) => r(n, !0), Ne)
    );
  }, [t, e]), null;
}
function vm(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Sr(o);
    a && F(s) && vm(s.getChildren(), a, r);
  }
}
function Mm(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Sr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = li(o);
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
function Em(e, t, r) {
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
function Am(e, t) {
  const r = [];
  for (const n of e)
    Rg(n, t) || ((ae(n) || D(n)) && r.push(n.getMarker()), F(n) && r.push(...Am(n.getChildren(), t)));
  return r;
}
function Pm(e) {
  const t = [];
  for (const r of e) {
    const n = Ol(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Sr(r);
    i && t.push(...Pm(i));
  }
  return t;
}
function Fl(e, t, r) {
  const n = Am(e, r), i = Pm(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function JA(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = w();
  let n, i;
  if (P(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = se(t.key), i = t.offset;
  else
    return;
  if (!(!v(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function zl(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function YA(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  for (const y of e) {
    const k = wl(y, o, s);
    if (!k) return;
    c.text.length > 0 && (c.text += " ");
    const _ = c.text.length;
    k.spans.forEach(
      (S) => c.spans.push({ ...S, start: S.start + _, end: S.end + _ })
    ), c.sentinels.push(...k.sentinels), c.text += k.text;
  }
  const l = i ? zl(c, i) : c.text, u = Mr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (Rn(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = Cr.serializeEditorState(
    { type: kr, version: br, content: u },
    s
  ).root.children;
  if (Io(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Em(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ti(d, o) === ki(e, o) && Fl(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Mm(d, f);
  const m = XA(e), g = Nm(d);
  for (let y = 0; y < m.length && y < g.length; y++)
    m[y].sid !== void 0 && g[y].number === m[y].number && (g[y].sid = m[y].sid);
  return d;
}
function XA(e) {
  const t = [], r = (n) => {
    Oe(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : F(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Nm(e) {
  const t = [];
  for (const r of e) {
    Tp(r) && t.push(r);
    const n = Sr(r);
    n && t.push(...Nm(n));
  }
  return t;
}
function QA(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = jg(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? zl(l, i) : l.text, f = Mr(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (Rn(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const m = p.content ?? [], g = Bg(m), y = e.getCategory() !== g, k = wg(e, m, g, s);
  if (k.failure !== void 0) {
    k.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : k.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const _ = k.children;
  if (Io(_) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const S = Em(l, t, n);
  if (!S) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ti(_, o) === ki(u, o) && Fl(u, _, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: g, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Mm(_, S), { rebuilt: _, contentNodes: u, category: g, categoryChanged: y };
}
function af(e) {
  return e.$?.textType;
}
function ZA(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && af(e) === af(t);
}
function e1(e) {
  const t = [];
  for (const r of e) {
    const n = se(r);
    n?.isAttached() && De(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function t1(e) {
  if (!O(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!j(t)) return;
  const r = e.getTextContent();
  if (Qr(e)) return;
  const n = Ng.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function cf(e, t) {
  const r = e;
  r.marker = t, r.text = Lg(t, r.markerSyntax, r.nested);
}
function r1(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Ae.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && cf(a.node, s);
  const c = n.getChildren().filter(O).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && cf(l.node, s);
}
function n1(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Hg(e, i, n);
  if (!o) return;
  const a = r ? zl(o, r) : o.text, c = Mr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (Rn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = Cr.serializeEditorState(
    { type: kr, version: br, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Uo(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Ti(u, i) === ki(d, i) && Fl(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function i1(e, t, r, n, i) {
  const s = JA(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = (y) => {
    j(y) ? c.set(y.getKey(), y) : Me(y) ? l.set(y.getKey(), y) : o.set(y.getKey(), [y]);
  };
  for (const y of t) {
    const k = se(y);
    if (!k?.isAttached()) continue;
    const _ = ls(k);
    if (_) {
      if (d(_), O(k)) {
        const S = mm(k, r.getMarker);
        S && a.push(S);
      }
      if (j(_)) {
        const S = t1(k);
        S && u.set(_.getKey(), S);
      }
    }
  }
  const f = /* @__PURE__ */ new Set();
  for (const y of a)
    y.some((k) => f.has(k.getKey())) || (y.forEach((k) => {
      f.add(k.getKey()), o.delete(k.getKey());
    }), o.set(y[0].getKey(), y));
  if (s) {
    const y = ls(s.node);
    y && d(y);
  }
  const p = e1(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && p.length === 0)
    return;
  const m = new Set(p.map((y) => y.getKey())), g = /* @__PURE__ */ new Map();
  vm(Fe().getChildren(), e.root.children, g);
  for (const y of u.values()) r1(y, g);
  for (const y of c.values()) {
    const k = g.get(y.getKey()), _ = k ? Sr(k.node) : void 0;
    if (!k || !_) continue;
    const S = QA(y, g, r, m, s);
    if (!S) continue;
    if (S.categoryChanged) {
      const B = k.node;
      S.category === void 0 ? delete B.category : B.category = S.category;
    }
    if (!S.rebuilt) continue;
    const N = g.get(S.contentNodes[0].getKey());
    if (!N) continue;
    const A = _.indexOf(N.node);
    A < 0 || _.splice(A, S.contentNodes.length, ...S.rebuilt);
  }
  for (const y of o.values()) {
    const k = g.get(y[0].getKey());
    if (!k) continue;
    const _ = YA(y, g, r, m, s);
    if (!_) continue;
    const S = k.siblings.indexOf(k.node);
    S < 0 || k.siblings.splice(S, y.length, ..._);
  }
  for (const y of l.values()) {
    const k = g.get(y.getKey());
    if (!k) continue;
    const _ = 1 + Uo(y).length, S = n1(y, r, s);
    if (!S) continue;
    const N = k.siblings.indexOf(k.node);
    N < 0 || k.siblings.splice(N, _, ...S);
  }
  for (const y of p) {
    const k = g.get(y.getKey());
    if (!k) continue;
    const _ = k.siblings.indexOf(k.node);
    if (_ < 0) continue;
    k.siblings.splice(_, 1);
    const S = k.siblings[_ - 1], N = k.siblings[_], A = S && li(S), B = N && li(N);
    S && N && A !== void 0 && B !== void 0 && ZA(S, N) && (S.text = A + B, k.siblings.splice(_, 1));
  }
  return og(e, r.viewOptions);
}
function s1({
  viewOptions: e,
  logger: t
}) {
  const [r] = ce(), n = qn(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return z(() => {
    if (n)
      return r.registerNodeTransform(
        et,
        (i) => o1(i, t)
      );
  }, [r, n, t]), null;
}
function o1(e, t) {
  e.getMarker() !== Ht && (e.isEmpty() || zt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${Ht}" (key ${e.getKey()})`
  ), e.setMarker(Ht)));
}
function a1({
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
    i.scrRef = e, i.onScrRefChange = t, fo(s, e) || c1(i, r, e);
  }, [r, e, t]), z(
    () => r.registerMutationListener(
      Ft,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = hc(r);
        lf(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: qs(s) === qs(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), z(() => {
    const i = (a) => a.read(
      () => new Set(
        Fe().getChildren().filter(Ge).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (hc(r) || lf(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: qs(a) === qs(c)
      }));
    };
    return Ve(
      ...[Ot, hr].map(
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
        return i.phase === "idle" && f1(i, u1()), !1;
      },
      dt
    ),
    [r]
  ), z(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(dr, void 0));
    };
    return Ve(
      r.registerMutationListener(St, i),
      r.registerMutationListener(ft, i)
    );
  }, [r]), z(() => {
    const i = () => m1(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function c1(e, t, r) {
  if (l1(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = hc(t);
  (!n || n === r.book) && t.update(() => Om(r.chapterNum, r.verseNum), {
    tag: Vr
  });
}
function l1(e, t) {
  const r = e.pendingEchoes.findIndex((n) => fo(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function u1() {
  const e = w(), t = Ic(e);
  if (!t) return;
  const r = Kl(), n = Cp(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = Qc(t, e), { verseNum: o, verse: a } = yx(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function hc(e) {
  return e.getEditorState().read(() => Kl()?.getCode() || void 0);
}
function Kl() {
  return Fe().getChildren().find(ht);
}
function lf(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && va(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || va(e, t), e.phase = "navigating") : i && va(e, t), r && r !== e.scrRef.book && Rm(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function va(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Om(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Vr }
    );
  });
}
function Om(e, t) {
  const r = Ic(w()), n = Zc(r)?.getNumber(), i = Cp(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Pp(n) ? qm(t, n) : parseInt(n, 10) === t))
    return;
  const o = Fe().getChildren(), a = _p(o, e);
  if (!a) return;
  const c = Ok(o, a), l = Sk(c, !0);
  Nk(c, l);
  let u;
  try {
    u = fx(c, t);
  } catch {
    return;
  }
  u && (ae(u) ? !v(u.getFirstChild()) && bi(u) || Zt(u, 0) : d1(u));
}
function d1(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ge(n)) {
    Zt(t, r);
    return;
  }
  const i = Eo(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (v(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = F(n) && !j(n) ? wm(n) : void 0;
  s ? s.select(0, 0) : Zt(t, r);
}
function wm(e) {
  const t = e.getFirstChild();
  if (v(t)) return t;
  if (F(t) && !j(t)) return wm(t);
}
function qs(e) {
  return e.read(() => {
    const t = Fe().getChildren().find(Ge);
    return `${Kl()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function f1(e, t) {
  e.phase !== "navigating" && t && (p1(t, e.scrRef) || Rm(e, h1(t, e.scrRef)));
}
function p1(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? qm(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function qm(e, t) {
  try {
    return Dc(e, t);
  } catch {
    return !1;
  }
}
function h1(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const g1 = 8;
function Rm(e, t) {
  return fo(t, e.scrRef) || e.pendingEchoes.some((r) => fo(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > g1 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function fo(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function m1(e) {
  e.phase = "idle";
}
function y1(e) {
  return ht(e) ? `${e.__code}` : Me(e) ? `${e.__marker} "${e.__number}"` : D(e) ? `${e.__marker}` : gs(e) ? `${e.__marker} "${e.__number}"` : vt(e) ? `${e.__caller}` : wn(e) ? `${e.__marker} "${e.__number}"` : j(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ae(e) ? `${e.__marker}` : v(e) ? `"${e.__text}"${b1(e)}` : Ce(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Oe(e) ? `${e.__marker} "${e.__number}"` : "";
}
function b1(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[hs]) : "";
}
function k1() {
  const [e] = ce();
  return /* @__PURE__ */ C(
    Gy,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: y1,
      editor: e
    }
  );
}
const $m = yf(null), uf = 4;
function T1({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Z(null), s = bf($m);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return z(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ C("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function x1({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = de(), [s, o] = de(), a = he(
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
  }, l = ze(() => ({ registerItem: a }), [a]);
  return z(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ C($m.Provider, { value: l, children: /* @__PURE__ */ C("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function _1({
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
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: m, left: g } = f.getBoundingClientRect();
      p.style.top = `${m + f.offsetHeight + uf}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), z(() => {
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
  }, [a, c, l, o]), z(() => {
    const f = () => {
      if (l) {
        const p = c.current, m = a.current;
        if (p !== null && m !== null) {
          const { top: g } = p.getBoundingClientRect(), y = g + p.offsetHeight + uf;
          y !== m.getBoundingClientRect().top && (m.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Te(gn, { children: [
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
          i && /* @__PURE__ */ C("span", { className: i }),
          t && /* @__PURE__ */ C("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ C("i", { className: "chevron-down" })
        ]
      }
    ),
    l && hn(
      /* @__PURE__ */ C(x1, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const gc = {
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
}, mc = {
  ...gc,
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
function C1({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ C(
    _1,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + S1(t),
      buttonLabel: v1(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(gc).map((n) => /* @__PURE__ */ Te(
        T1,
        {
          className: "item block-marker " + M1(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ C("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ C("span", { className: "text usfm_" + n, children: gc[n] })
          ]
        },
        n
      ))
    }
  );
}
function S1(e) {
  return e && e in mc ? e : "ban";
}
function v1(e) {
  return e && e in mc ? mc[e] : "No Style";
}
function M1(e) {
  return e ? "active dropdown-item-active" : "";
}
function df() {
  return /* @__PURE__ */ C("div", { className: "divider" });
}
const E1 = En(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ce(), [o, a] = de(s), [c, l] = de(), [u, d] = de(!1), [f, p] = de(!1), m = he(
    ({
      canUndo: g,
      canRedo: y,
      blockMarker: k,
      contextMarker: _
    }) => {
      d(g), p(y), l(k), n?.({
        canUndo: g,
        canRedo: y,
        blockMarker: k,
        contextMarker: _
      });
    },
    [n]
  );
  return z(() => s.registerCommand(
    dr,
    (g, y) => (a(y), !1),
    xt
  ), [s]), /* @__PURE__ */ Te(gn, { children: [
    /* @__PURE__ */ C(Wh, { onStateChange: m }),
    /* @__PURE__ */ Te("div", { className: "toolbar", children: [
      /* @__PURE__ */ C(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(Af, void 0);
          },
          title: Fs ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(Pf, void 0);
          },
          title: Fs ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ C("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ C(df, {}),
      o === s && /* @__PURE__ */ Te(gn, { children: [
        /* @__PURE__ */ C(
          C1,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ C(df, {})
      ] }),
      /* @__PURE__ */ C("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), A1 = wo(), P1 = {}, N1 = {};
function O1() {
  return /* @__PURE__ */ C("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
const Lm = En(function({
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
  const d = Z(null), f = Z(null), p = Z(null), m = Z(t), g = Z(void 0), y = Z(void 0), k = Z(void 0), _ = Z(void 0), S = Z(!1), [N, A] = de(t), [B, M] = de(0), [q, $] = de(), {
    isReadonly: J = !1,
    structureProtectionMode: Q = "off",
    hasExternalUI: Ee = !1,
    hasSpellCheck: re = !1,
    textDirection: qe = "ltr",
    markerMenuTrigger: be = "\\",
    view: rr,
    nodes: Re,
    debug: tn = !1,
    contextMenu: mr,
    styleInfo: Mt,
    markerSettleDelayMs: te
  } = a ?? N1, E = rr ?? A1, Y = is(E) && (E.markerMode !== "hidden" || !E.hasSpacing || E.hasGutterParaMarkers || E.hasActiveTextFocusBox) ? {
    ...E,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : E, le = Z(Y);
  qt(le.current, Y) || (le.current = Y);
  const W = le.current, xe = ze(() => Re ?? P1, [Re]), gt = ze(() => mr, [mr]), Kt = ze(
    () => nx(Mt ?? Ys),
    [Mt]
  ), mt = Z(c);
  qt(mt.current, c) || (mt.current = c);
  const We = mt.current, ct = is(W), ue = J || ct, $n = Y !== E;
  z(() => {
    ct && !J && We?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), $n && We?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), W?.markerMode === "visible" && !J && We?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [ct, J, $n, We, W?.markerMode]);
  const ye = Z(null), xi = ze(() => {
    if (W.markerMode !== "editable") return;
    const R = Mt ?? Ys;
    return {
      getContext: () => ye.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (K) => GM(
        R,
        K,
        xe.extraValidMarkers
      ),
      getEnterItems: (K) => JM(
        R,
        K,
        xe.extraValidMarkers
      ),
      apply: (K, G) => {
        const X = ye.current;
        X && (G.trigger === "enter" ? X.splitParagraphWithMarker(K.marker) : X.applyMarkerMenuSelection(K, G));
      },
      commitTypedCloser: (K) => {
        ye.current?.commitTypedCloser(K);
      }
    };
  }, [W, Mt, xe.extraValidMarkers]), ve = (R) => {
    S.current || (S.current = !0, mt.current?.warn(
      `Editor: cannot ${R} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, wr = (R) => {
    if (ct)
      throw new Error(
        `Cannot ${R} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, qr = (R) => {
    if (wr(R), ue) throw new Error(`Cannot ${R} in readonly mode`);
  }, nr = ze(
    () => ({
      namespace: "platformEditor",
      theme: { ...Sg, showCharMarkerTitles: W.showCharMarkerTitles },
      editable: !ue,
      editorState: void 0,
      // Handling of errors during update
      onError(R) {
        throw R;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [Qe, ...ct ? g_ : sl]
    }),
    [ue, ct, W.showCharMarkerTitles]
  );
  $s.initialize(We);
  function Rr(R) {
    if (R !== void 0 && !mM(R, xe.extraValidMarkers))
      throw new Error(`Unsupported character marker '${R}'`);
  }
  const $r = he(() => {
    const R = d.current;
    if (!R) return m.current;
    const K = qu(R), G = y.current;
    if ((!K || K.size === 0) && !G) return m.current;
    const X = R.getEditorState(), _e = X.toJSON();
    return X.read(
      () => i1(
        _e,
        K ?? /* @__PURE__ */ new Set(),
        { viewOptions: W, getMarker: Kt, logger: We },
        G,
        k.current
      )
    ) ?? m.current;
  }, [W, Kt, We]), _i = {
    focus() {
      d.current?.focus();
    },
    isFocused() {
      const R = d.current?.getRootElement();
      return !!R && R.ownerDocument.activeElement === R;
    },
    undo() {
      d.current?.dispatchCommand(Af, void 0);
    },
    redo() {
      d.current?.dispatchCommand(Pf, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      qr("cut"), d.current && gl(d.current);
    },
    copy() {
      d.current && hl(d.current);
    },
    paste() {
      qr("paste"), d.current && ml(d.current);
    },
    pastePlainText() {
      qr("paste as plain text"), d.current && yl(d.current);
    },
    getUsj() {
      return $r();
    },
    commitPendingMarkerEdits() {
      d.current?.update(
        () => {
          d.current?.dispatchCommand(Cm, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(R) {
      if (!R) {
        y.current = void 0;
        return;
      }
      const K = d.current?.getEditorState().read(() => {
        const G = w();
        return P(G) && G.isCollapsed() ? G.focus.key : void 0;
      });
      y.current = { input: R, nodeKey: K ?? k.current?.key };
    },
    setUsj(R) {
      if (!qt($r(), R)) {
        m.current = R, y.current = void 0;
        const K = qt(N, R);
        A(R), K && M((G) => G + 1);
      }
    },
    applyUpdate(R, K = "remote") {
      if (ct && K === "remote") {
        mt.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      wr("apply an update"), d.current?.update(
        () => {
          K === "remote" && Br(Hi), K_(R, W, xe, We);
        },
        { discrete: !0 }
      );
      const G = d.current?.getEditorState();
      if (!G) return;
      const X = $s.deserializeEditorState(G, W);
      if (X) {
        const _e = !qt(m.current, X);
        if (_e && (m.current = X), _e || !qt(N, X)) {
          const lt = Vu(R, G, "apply");
          _.current = X, s?.(X, R, K, lt);
        }
      }
    },
    replaceEmbedUpdate(R, K) {
      const G = d.current?.read(() => Px(R, K));
      G ? this.applyUpdate(G) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${R}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (ct) {
        ve("get the selection");
        return;
      }
      return d.current?.read(nl);
    },
    setSelection(R) {
      if (ct) {
        ve("set the selection");
        return;
      }
      d.current?.update(() => {
        const K = Oo(R);
        K !== void 0 && (ei(K), Br(zf));
      });
    },
    setAnnotation(R, K, G, X, _e) {
      if (ct) {
        ve("set an annotation");
        return;
      }
      let lt, wt, rn, nn;
      typeof X == "function" || X === void 0 ? (lt = X, wt = _e) : (lt = X.onClick, wt = X.onRemove, rn = X.onMouseEnter, nn = X.onMouseLeave), f.current?.setAnnotation(
        R,
        xu(K),
        G,
        lt,
        wt,
        rn,
        nn
      );
    },
    removeAnnotation(R, K) {
      f.current?.removeAnnotation(xu(R), K);
    },
    formatPara(R) {
      qr("format a paragraph"), d.current?.update(
        () => {
          const K = w();
          if (!P(K)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${R}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          Xy(K, () => ti(R));
          const G = w();
          if (!P(G)) return;
          const X = /* @__PURE__ */ new Set();
          G.getNodes().forEach((_e) => {
            const lt = _e.getTopLevelElement();
            ae(lt) && X.add(lt);
          }), X.forEach((_e) => Jg(_e, R, W));
        },
        { discrete: !0 }
      );
    },
    getElementByKey(R) {
      return d.current?.read(
        () => d.current?.getElementByKey(R) ?? void 0
      );
    },
    removeCharacterMarker(R) {
      if (ue) throw new Error("Cannot remove character marker in readonly mode");
      Rr(R);
      let K = !1;
      return d.current?.update(
        () => {
          const G = w();
          P(G) && (K = bg(G, R, W));
        },
        { discrete: !0 }
      ), K;
    },
    replaceCharacterMarker(R, K) {
      if (ue) throw new Error("Cannot replace character marker in readonly mode");
      Rr(R), Rr(K);
      let G = !1;
      return d.current?.update(
        () => {
          const X = w();
          P(X) && (G = AM(X, R, K));
        },
        { discrete: !0 }
      ), G;
    },
    extendCharacterMarker(R, K) {
      if (ue) throw new Error("Cannot extend character marker in readonly mode");
      Rr(R), K?.forEach(
        (X) => Rr(X)
      );
      let G = !1;
      return d.current?.update(
        () => {
          const X = w();
          P(X) && (G = PM(
            X,
            R,
            K,
            W
          ));
        },
        { discrete: !0 }
      ), G;
    },
    insertMarker(R) {
      if (ue) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!d.current) return;
      if (!ic(R, xe.extraValidMarkers))
        throw new Error(`Unsupported marker '${R}'`);
      const K = sc(
        R,
        g,
        W,
        xe,
        We,
        void 0,
        Mt
      );
      return K.action({ editor: d.current, reference: r }), K.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!J)
        return d.current?.getEditorState().read(() => dA());
    },
    applyMarkerMenuSelection(R, K) {
      if (J) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if (R.kind !== "closeTag" && !ic(R.marker, xe.extraValidMarkers))
        throw new Error(`Unsupported marker '${R.marker}'`);
      let G;
      return d.current.update(() => {
        G = mA(R, K, r, {
          expandedNoteKeyRef: g,
          viewOptions: W,
          nodeOptions: xe,
          logger: c,
          styleInfo: Mt
        });
      }), G;
    },
    splitParagraphWithMarker(R) {
      if (J) throw new Error("Cannot split paragraph in readonly mode");
      d.current && d.current.update(() => {
        gm(R, W);
      });
    },
    commitTypedMarker(R, K) {
      if (J) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let G = !1;
      return d.current.update(() => {
        G = gA(R, K), G || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), G;
    },
    commitTypedCloser(R) {
      if (J) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let K = !1;
      return d.current.update(() => {
        K = hm(R), K || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), K;
    },
    insertNote(R, K, G) {
      qr("insert a note"), d.current?.update(
        () => {
          const X = _h(
            R,
            K,
            G,
            r,
            W,
            xe,
            We
          );
          X && !X.getIsCollapsed() && (g.current = X.getKey());
        },
        { discrete: !0 }
      );
    },
    selectNote(R) {
      d.current?.update(() => {
        const K = Xu(R);
        K && (f_(K, W), K.getIsCollapsed() || (g.current = K.getKey()));
      });
    },
    getNoteOps(R) {
      return d.current?.read(() => {
        const K = Xu(R);
        if (K)
          return tl(K);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  ye.current = _i, bc(u, () => _i), z(() => {
    const R = d.current;
    if (R)
      return R.registerUpdateListener(({ editorState: K }) => {
        K.read(() => {
          const G = w();
          if (!P(G) || !G.isCollapsed()) return;
          const X = G.focus.getNode();
          v(X) && (k.current = { key: X.getKey(), offset: G.focus.offset });
        });
      });
  }, []);
  const Ts = he(
    (R, K, G, X) => {
      if (ct) return;
      const _e = $s.deserializeEditorState(R, W);
      if (_e) {
        const lt = !qt(m.current, _e);
        if (lt && (m.current = _e), lt || !qt(N, _e)) {
          const wt = Vu(X, R);
          _.current = _e, s?.(_e, X, "local", wt);
        }
      }
    },
    [N, s, W, ct]
  );
  z(() => {
    const R = d.current;
    if (!(!R || !s))
      return R.registerUpdateListener(({ tags: K, dirtyElements: G, dirtyLeaves: X }) => {
        !K.has(vc) && (G.size === 0 && X.size === 0 || K.has(Hi) || !qu(R)?.size) || queueMicrotask(() => {
          const _e = $r();
          !_e || qt(_.current, _e) || (_.current = _e, s(_e, void 0, "local", void 0));
        });
      });
  }, [s, $r]);
  const jt = he(
    (R) => {
      $(R.contextMarker), o?.(R);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Te(wf, { initialConfig: nr, children: [
      /* @__PURE__ */ C(WC, { isEditable: !ue }),
      /* @__PURE__ */ Te("div", { className: "editor-container", children: [
        Ee ? /* @__PURE__ */ C(Wh, { onStateChange: jt }) : /* @__PURE__ */ C(
          "div",
          {
            className: "editor-toolbar-container" + (ue ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ C(
              E1,
              {
                ref: p,
                editorRef: ye,
                isReadonly: ue,
                onStateChange: jt
              }
            )
          }
        ),
        /* @__PURE__ */ Te("div", { className: "editor-inner", children: [
          /* @__PURE__ */ C(Rf, { editorRef: d }),
          /* @__PURE__ */ C(
            Yy,
            {
              contentEditable: /* @__PURE__ */ C(
                qf,
                {
                  className: `editor-input usfm ${z_(W).join(" ")}${W.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${W.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: re
                }
              ),
              placeholder: /* @__PURE__ */ C(O1, {}),
              ErrorBoundary: $f
            }
          ),
          Ee && /* @__PURE__ */ C(VC, {}),
          /* @__PURE__ */ C(Lf, {}),
          r && n && /* @__PURE__ */ C(a1, { scrRef: r, onScrRefChange: n }),
          r && !Ee && /* @__PURE__ */ C(
            hv,
            {
              trigger: be,
              scrRef: r,
              contextMarker: q,
              getMarkerAction: (R) => sc(
                R,
                g,
                W,
                xe,
                We,
                void 0,
                Mt
              ),
              editableHarness: xi
            }
          ),
          /* @__PURE__ */ C(
            JC,
            {
              scripture: N,
              scriptureRef: m,
              nodeOptions: xe,
              editorAdaptor: Cr,
              viewOptions: W,
              logger: We
            },
            B
          ),
          /* @__PURE__ */ C(gS, { onChange: i }),
          /* @__PURE__ */ C(
            $_,
            {
              onChange: Ts,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: bb
            }
          ),
          /* @__PURE__ */ C(RM, { viewOptions: W }),
          /* @__PURE__ */ C(q_, { ref: f, logger: We }),
          /* @__PURE__ */ C(hC, { viewOptions: W }),
          /* @__PURE__ */ C(AC, {}),
          /* @__PURE__ */ C(RC, {}),
          W?.markerMode !== "editable" && /* @__PURE__ */ C($C, { logger: We }),
          /* @__PURE__ */ C(UC, { options: gt }),
          /* @__PURE__ */ C(BC, {}),
          /* @__PURE__ */ C(GC, {}),
          /* @__PURE__ */ C(yA, {}),
          /* @__PURE__ */ C(
            FA,
            {
              viewOptions: W,
              getMarker: Kt,
              logger: We,
              markerSettleDelayMs: te,
              structureProtectionMode: Q
            }
          ),
          W?.markerMode === "visible" && /* @__PURE__ */ C(GA, { viewOptions: W }),
          /* @__PURE__ */ C(
            WA,
            {
              styleInfo: Mt,
              viewOptions: W,
              logger: We
            }
          ),
          /* @__PURE__ */ C(
            YC,
            {
              expandedNoteKeyRef: g,
              nodeOptions: xe,
              viewOptions: W,
              logger: We
            }
          ),
          /* @__PURE__ */ C(hS, {}),
          /* @__PURE__ */ C(lC, {}),
          /* @__PURE__ */ C(sC, {}),
          /* @__PURE__ */ C(s1, { viewOptions: W, logger: We }),
          /* @__PURE__ */ C(mS, {}),
          /* @__PURE__ */ C(tv, { structureProtectionMode: Q }),
          /* @__PURE__ */ C(rv, { textDirection: qe }),
          /* @__PURE__ */ C(iv, {}),
          /* @__PURE__ */ C(fv, {}),
          l
        ] }),
        tn && /* @__PURE__ */ C(k1, {})
      ] })
    ] }, W.verseLayout ?? "inline")
  );
}), UP = En(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ C(Lm, { ref: r, ...i });
});
function Im() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function po(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? Im() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function Dm(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? Im() : r,
    quote: e,
    type: "thread"
  };
}
function ff(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function w1(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Ma(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class q1 {
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
    this._comments = t, Ma(this);
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
          const c = ff(a);
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
    this._comments = i, Ma(this);
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
          const c = ff(a);
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
    return this._comments = n, Ma(this), t.type === "comment" ? {
      index: s,
      markedComment: w1(t)
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
    return t !== null ? t.doc.get("comments", cu) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new lu(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new cu();
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
      fb,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      dt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof pb) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const m = p.insert, g = p.retain, y = p.delete, k = u.parent, _ = u === r ? void 0 : k instanceof lu && this._comments.find((S) => S.id === k.get("id"));
              if (Array.isArray(m)) {
                const S = f;
                m.slice().reverse().forEach((N) => {
                  const A = N.get("id"), M = N.get("type") === "thread" ? Dm(
                    N.get("quote"),
                    N.get("comments").toArray().map(
                      (q) => po(
                        q.get("content"),
                        q.get("author"),
                        q.get("id"),
                        q.get("timeStamp"),
                        q.get("deleted")
                      )
                    ),
                    A
                  ) : po(
                    N.get("content"),
                    N.get("author"),
                    A,
                    N.get("timeStamp"),
                    N.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(M, _, S);
                  });
                });
              } else if (typeof g == "number")
                f += g;
              else if (typeof y == "number")
                for (let S = 0; S < y; S++) {
                  const N = _ === void 0 || _ === !1 ? this._comments[f] : _.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(N, _);
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
function R1(e) {
  const [t, r] = de(e.getComments());
  return z(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function $1({
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
  }, [n, e]), /* @__PURE__ */ C("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Te("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function L1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return hn(
    /* @__PURE__ */ C($1, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Um() {
  const [e, t] = de(null), r = he(() => {
    t(null);
  }, []), n = ze(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ C(L1, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const I1 = {
  ...Sg,
  paragraph: "CommentEditorTheme__paragraph"
};
function D1(...e) {
  return e.filter(Boolean).join(" ");
}
function Xr({
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
      className: D1(
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
function U1({
  className: e
}) {
  return /* @__PURE__ */ C(qf, { className: e || "ContentEditable__root" });
}
function F1({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ C("div", { className: t || "Placeholder__root", children: e });
}
const pf = Ef("INSERT_INLINE_COMMAND");
function z1({
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
  return z(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), ds(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ C("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ C("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ C("i", { className: "icon add-comment" }) }) });
}
function K1({ onEscape: e }) {
  const [t] = ce();
  return z(() => t.registerCommand(
    Mf,
    (r) => e(r),
    Yn
  ), [t, e]), null;
}
function Fm({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ C(wf, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: I1
  }, children: /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ C(
      lb,
      {
        contentEditable: /* @__PURE__ */ C(U1, { className: e }),
        placeholder: /* @__PURE__ */ C(F1, { children: s }),
        ErrorBoundary: $f
      }
    ),
    /* @__PURE__ */ C(cb, { onChange: n }),
    /* @__PURE__ */ C(Lf, {}),
    t !== !1 && /* @__PURE__ */ C(sb, {}),
    /* @__PURE__ */ C(K1, { onEscape: r }),
    /* @__PURE__ */ C(ob, {}),
    i !== void 0 && /* @__PURE__ */ C(Rf, { editorRef: i })
  ] }) });
}
function zm(e, t) {
  return he(
    (r, n) => {
      r.read(() => {
        e(ub()), t(!db(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function j1({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = Z(null), c = ze(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Z(null), u = jm(), d = he(() => {
    e.getEditorState().read(() => {
      const g = w();
      if (P(g)) {
        l.current = g.clone();
        const y = g.anchor, k = g.focus, _ = Qy(
          e,
          y.getNode(),
          y.offset,
          k.getNode(),
          k.offset
        ), S = a.current;
        if (_ !== null && S !== null) {
          const { left: N, bottom: A, width: B } = _.getBoundingClientRect(), M = Zy(e, _);
          let q = M.length === 1 ? N + B / 2 - 125 : N - 125;
          q < 10 && (q = 10), S.style.left = `${q}px`, S.style.top = `${A + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const $ = M.length, { container: J } = c, Q = c.elements, Ee = Q.length;
          for (let re = 0; re < $; re++) {
            const qe = M[re];
            let be = Q[re];
            be === void 0 && (be = document.createElement("span"), Q[re] = be, J.appendChild(be));
            const Re = `position:absolute;top:${qe.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${qe.left}px;height:${qe.height}px;width:${qe.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            be.style.cssText = Re;
          }
          for (let re = Ee - 1; re >= $; re--) {
            const qe = Q[re];
            J.removeChild(qe), Q.pop();
          }
        }
      }
    });
  }, [e, c]);
  ds(() => {
    d();
    const g = c.container, y = document.body;
    return y !== null ? (y.appendChild(g), () => {
      y.removeChild(g);
    }) : () => {
    };
  }, [c.container, d]), z(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (g) => (g.preventDefault(), t(), !0), p = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), r(
        Dm(g, [po(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, m = zm(i, o);
  return /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ C(
      Fm,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: m
      }
    ),
    /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ C(Xr, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ C(
        Xr,
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
function B1({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = Z(null), c = jm(), l = zm(i, o);
  return /* @__PURE__ */ Te(gn, { children: [
    /* @__PURE__ */ C(
      Fm,
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
      Xr,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(po(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(By, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ C("i", { className: "send" })
      }
    )
  ] });
}
function Km({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Te(gn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Te("div", { className: "Modal__content", children: [
      /* @__PURE__ */ C(
        Xr,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ C(
        Xr,
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
function hf({
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Um();
  return /* @__PURE__ */ Te("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ C("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Te("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ C("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Te(gn, { children: [
      /* @__PURE__ */ C(
        Xr,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ C(
              Km,
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
function V1({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ce(), [a, c] = de(0), [l, u] = Um(), d = ze(
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
  }, [a]), /* @__PURE__ */ C("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ Te(
      "li",
      {
        onClick: () => {
          const g = s.get(p);
          if (g !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const k = Array.from(g)[0], _ = se(k);
                Ce(_) && _.selectStart();
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
              /* @__PURE__ */ C("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ C(
              Xr,
              {
                onClick: () => {
                  u("Delete Thread", (g) => /* @__PURE__ */ C(
                    Km,
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
            hf,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            g.id
          )) }),
          /* @__PURE__ */ C("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ C(
            B1,
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
      hf,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function W1({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Z(null), o = r.length === 0;
  return /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ C("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ C("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ C(
      V1,
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
function jm() {
  const e = If(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function H1({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = If(), [a] = ce(), c = ze(() => {
    const q = new q1(a, s);
    return r && q.registerOnChange(r), t?.(q), q;
  }, [a, s, r, t]), l = R1(c), u = ze(() => /* @__PURE__ */ new Map(), []), [d, f] = de(), [p, m] = de([]), [g, y] = de(!1), [k, _] = de(!1), { yjsDocMap: S } = o;
  z(() => {
    if (e) {
      const q = e("comments", S);
      return c.registerCollaboration(q);
    }
    return () => {
    };
  }, [c, e, S]);
  const N = he(() => {
    a.update(() => {
      const q = w();
      q !== null && (q.dirty = !0);
    }), y(!1);
  }, [a]), A = he(
    (q, $) => {
      if (q.type === "comment") {
        const J = c.deleteCommentOrThread(q, $);
        if (!J)
          return;
        const { markedComment: Q, index: Ee } = J;
        c.addComment(Q, $, Ee);
      } else {
        c.deleteCommentOrThread(q);
        const J = $ !== void 0 ? $.id : q.id, Q = u.get(J);
        Q !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const Ee of Q) {
              const re = se(Ee);
              Ce(re) && (re.deleteID(jr, J), re.hasNoIDsForEveryType() && Bs(re));
            }
          });
        });
      }
    },
    [c, a, u]
  ), B = he(
    (q, $, J, Q) => {
      c.addComment(q, J), $ && (a.update(() => {
        P(Q) && tp(Q, jr, q.id);
      }), y(!1));
    },
    [c, a]
  );
  z(() => {
    const q = [];
    let $;
    for (const J of p) {
      const Q = u.get(J);
      if (Q !== void 0)
        for (const Ee of Q) {
          const re = a.getElementByKey(Ee);
          re !== null && (re.classList.add("selected"), q.push(re), $ = window.setTimeout(() => {
            _(!0);
          }, 0));
        }
    }
    return () => {
      $ !== void 0 && window.clearTimeout($);
      for (const J of q)
        J.classList.remove("selected");
    };
  }, [p, a, u]), z(() => {
    if (!a.hasNodes([Qe]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const q = /* @__PURE__ */ new Map();
    return Ve(
      Of(
        a,
        Qe,
        ($) => Ji($.getTypedIDs()),
        ($, J) => {
          for (const [Q, Ee] of Object.entries($.getTypedIDs()))
            Ee.forEach((re) => {
              J.addID(Q, re);
            });
        }
      ),
      a.registerMutationListener(
        Qe,
        ($) => {
          a.getEditorState().read(() => {
            for (const [J, Q] of $) {
              const Ee = se(J);
              let re = [];
              Q === "destroyed" ? re = q.get(J) ?? [] : Ce(Ee) && (re = Ee.getTypedIDs()[jr] ?? []);
              for (const qe of re) {
                let be = u.get(qe);
                q.set(J, re), Q === "destroyed" ? be !== void 0 && (be.delete(J), be.size === 0 && u.delete(qe)) : (be === void 0 && (be = /* @__PURE__ */ new Set(), u.set(qe, be)), be.has(J) || be.add(J));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: $, tags: J }) => {
        $.read(() => {
          const Q = w();
          let Ee = !1, re = !1;
          if (P(Q)) {
            const qe = Q.anchor.getNode();
            if (v(qe)) {
              const be = ek(qe, jr, Q.anchor.offset) ?? [];
              be !== null && (m(be), Ee = !0), Q.isCollapsed() || (f(qe.getKey()), re = !0);
            }
          }
          Ee || m((qe) => qe.length === 0 ? qe : []), re || f(null), !J.has("collaboration") && P(Q) && y(!1);
        });
      }),
      a.registerCommand(
        pf,
        () => {
          const $ = window.getSelection();
          return $ !== null && $.removeAllRanges(), y(!0), !0;
        },
        mn
      )
    );
  }, [a, u]);
  const M = () => {
    a.dispatchCommand(pf, void 0);
  };
  return /* @__PURE__ */ Te(gn, { children: [
    g && hn(
      /* @__PURE__ */ C(
        j1,
        {
          editor: a,
          cancelAddComment: N,
          submitAddComment: B
        }
      ),
      document.body
    ),
    d != null && !g && hn(
      /* @__PURE__ */ C(
        z1,
        {
          anchorKey: d,
          editor: a,
          showComments: k,
          onAddComment: M
        }
      ),
      document.body
    ),
    n !== null && hn(
      /* @__PURE__ */ C(
        Xr,
        {
          className: `CommentPlugin_ShowCommentsButton ${k ? "active" : ""}`,
          onClick: () => _(!k),
          title: k ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ C("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    k && hn(
      /* @__PURE__ */ C(
        W1,
        {
          comments: l,
          submitAddComment: B,
          deleteCommentOrThread: A,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function G1() {
  const e = Z(void 0), t = he((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function J1(e, t) {
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
function Y1(e, t) {
  z(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      J1(r, t);
    };
  }, [t, e]);
}
const FP = En(function(t, r) {
  const n = Z(null), i = Z(!0), s = Z(null), [o, a] = de(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: m, view: g } = {} } = t, y = (m ?? !1) || is(g), [k, _] = G1();
  Y1(f, k), z(() => {
    if (process.env.NODE_ENV !== "production") {
      const A = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(A), p || console.warn(A);
    }
  }, [p]), bc(r, () => ({
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
    applyUpdate(A, B) {
      n.current?.applyUpdate(A, B);
    },
    replaceEmbedUpdate(A, B) {
      return n.current?.replaceEmbedUpdate(A, B);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(A) {
      n.current?.setSelection(A);
    },
    setAnnotation(A, B, M, q, $) {
      typeof q == "function" || q === void 0 ? n.current?.setAnnotation(A, B, M, q, $) : n.current?.setAnnotation(A, B, M, q);
    },
    removeAnnotation(A, B) {
      n.current?.removeAnnotation(A, B);
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
    replaceCharacterMarker(A, B) {
      return n.current?.replaceCharacterMarker(A, B) ?? !1;
    },
    extendCharacterMarker(A, B) {
      return n.current?.extendCharacterMarker(A, B) ?? !1;
    },
    insertMarker(A) {
      return n.current?.insertMarker(A);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(A, B) {
      return n.current?.applyMarkerMenuSelection(A, B);
    },
    splitParagraphWithMarker(A) {
      n.current?.splitParagraphWithMarker(A);
    },
    commitTypedMarker(A, B) {
      return n.current?.commitTypedMarker(A, B) ?? !1;
    },
    commitTypedCloser(A) {
      return n.current?.commitTypedCloser(A) ?? !1;
    },
    insertNote(A, B, M) {
      n.current?.insertNote(A, B, M);
    },
    selectNote(A) {
      n.current?.selectNote(A);
    },
    getNoteOps(A) {
      return n.current?.getNoteOps(A);
    },
    setComments(A) {
      k.current?.setComments(A), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const S = he(
    (A, B, M, q) => {
      if (!u) return;
      const $ = k.current?.getComments();
      u(A, $, B, M, q);
    },
    [k, u]
  ), N = he(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const A = k.current?.getComments();
    l(A);
  }, [k, i, l]);
  return z(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ C(ab, { children: /* @__PURE__ */ Te(Lm, { ref: n, onUsjChange: S, ...f, children: [
    /* @__PURE__ */ C(
      H1,
      {
        setCommentStore: _,
        onChange: N,
        showCommentsContainerRef: y ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ C("div", { ref: s, className: "comment-container" })
  ] }) });
});
function pn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function X1(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function Q1(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const Z1 = /^[#\w().,%/\s-]+$/;
function yr(e) {
  return e != null;
}
const eP = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, tP = {
  left: "right",
  right: "left"
}, rP = "var(--usj-font-fallback, serif)";
function Bm(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${X1(i)}"`).join(", ")}, ${rP}`;
}
const yc = ".editor-input.usfm", nP = /^[\w.#[\]="':()>+~*,\s-]+$/;
function iP(e) {
  return nP.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${yc}".`
  ), yc);
}
function sP(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(Bm(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (Z1.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), yr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), yr(t.firstLineIndent) && s.push(`text-indent: ${pn(t.firstLineIndent * 20 * r)}vw`), yr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${pn(t.leftMargin * 20 * r)}vw`), yr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${pn(t.rightMargin * 20 * r)}vw`
  ), yr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${pn(t.spaceBefore * r)}pt`), yr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${pn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = eP[n ? tP[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const gf = { c: 150, ca: 133, cp: 150 };
function mf(e, t) {
  return e && yr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function oP(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && yr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = mf(e.markers.c, gf.c);
  return ["ca", "cp"].map((i) => {
    const s = mf(
      e.markers[i],
      gf[i]
    ), o = pn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function zP(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = yc } = t, s = iP(i), o = [], a = [];
  e.defaultFont && a.push(Bm(e.defaultFont)), yr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${pn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = sP(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${Q1(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...oP(e, s)), o.join(`
`);
}
export {
  Nh as BLOCK_VERSE_VIEW_MODE,
  T as CategoryType,
  UP as Editorial,
  Wi as GENERATOR_NOTE_CALLER,
  Uf as HIDDEN_NOTE_CALLER,
  FP as Marginal,
  b as MarkerType,
  Ph as PARAGRAPH_STRUCTURE_VIEW_MODE,
  cl as STANDARD_VIEW_MODE,
  Ys as defaultStyleInfo,
  DP as directionToNames,
  S_ as filterAndRankItems,
  zP as generateUsjCss,
  LP as getDefaultViewMode,
  wo as getDefaultViewOptions,
  JM as getEnterMenuItems,
  GM as getMarkerMenuItems,
  IP as getViewMode,
  dl as getViewOptions,
  is as isBlockVerseLayout,
  zr as isInsertEmbedOpOfType,
  I_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
