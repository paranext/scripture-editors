import { jsx as S, jsxs as Te, Fragment as fn } from "react/jsx-runtime";
import { forwardRef as Jr, useState as fe, useRef as J, useCallback as ge, useEffect as K, useMemo as Ue, memo as Nm, createContext as Xd, useContext as Qd, Children as Om, isValidElement as wm, cloneElement as qm, useImperativeHandle as so, useLayoutEffect as os } from "react";
import { assertSafeKey as Ve, isValidBookCode as Rm, MARKER_OBJECT_PROPS as $m, USJ_VERSION as br, USJ_TYPE as kr, isUsjTextContentLocation as Im, indexesFromUsjJsonPath as Zd, isUsjAttributeKeyLocation as Lm, isUsjAttributeMarkerLocation as Dm, isUsjClosingAttributeMarkerLocation as Um, isUsjMarkerLocation as Fm, isUsjClosingMarkerLocation as zm, isUsjPropertyValueLocation as Km, getUsjDocumentLocationTypeName as jm, usjJsonPathFromIndexes as tn, EMPTY_USJ as ef } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as ze, $parseSerializedNode as oo, DecoratorNode as as, ElementNode as Xt, isHTMLElement as vn, createState as ao, $getState as ne, $setState as kt, $isRangeSelection as O, $isElementNode as D, $isTextNode as E, ParagraphNode as gc, TextNode as Fe, $createTextNode as me, $getCommonAncestor as Bm, $isLineBreakNode as co, $getSelection as R, NODE_STATE_KEY as cs, $getEditor as ls, $hasUpdateTag as Vm, $getNodeByKey as ie, $getRoot as De, $createRangeSelection as mc, $createPoint as Hl, $getCharacterOffsets as tf, KEY_DOWN_COMMAND as vr, COMMAND_PRIORITY_HIGH as $e, HISTORY_MERGE_TAG as rf, CLICK_COMMAND as lo, COMMAND_PRIORITY_EDITOR as pn, isDOMNode as nf, $getNearestNodeFromDOMNode as us, CONTROLLED_TEXT_INSERTION_COMMAND as yc, PASTE_COMMAND as mr, COMMAND_PRIORITY_CRITICAL as yr, CUT_COMMAND as hn, DROP_COMMAND as bc, DELETE_CHARACTER_COMMAND as Wm, DELETE_WORD_COMMAND as Hm, DELETE_LINE_COMMAND as Gm, $isDecoratorNode as sf, COPY_COMMAND as uo, COMMAND_PRIORITY_NORMAL as Jn, SELECTION_CHANGE_COMMAND as Tr, BLUR_COMMAND as kc, $addUpdateTag as ir, SKIP_DOM_SELECTION_TAG as Sa, CLEAR_HISTORY_COMMAND as Jm, COMMAND_PRIORITY_LOW as It, $setSelection as ji, $getPreviousSelection as Ym, $isRootOrShadowRoot as Xm, CAN_UNDO_COMMAND as Qm, CAN_REDO_COMMAND as Zm, $isNodeSelection as of, DRAGSTART_COMMAND as ey, $createNodeSelection as af, getDOMSelectionFromTarget as ty, $onUpdate as ry, KEY_ENTER_COMMAND as cf, LineBreakNode as lf, $copyNode as ny, FOCUS_COMMAND as iy, $isRootNode as sy, KEY_ESCAPE_COMMAND as uf, INSERT_PARAGRAPH_COMMAND as ws, createCommand as df, HISTORIC_TAG as Tc, UNDO_COMMAND as ff, REDO_COMMAND as pf, CLEAR_EDITOR_COMMAND as oy } from "lexical";
import { addClassNamesToElement as Un, removeClassNamesFromElement as Ho, $findMatchingParent as Xe, $dfsIterator as hf, $dfs as Mn, mergeRegister as Ge, registerNestedElementResolver as gf, $unwrapNode as va, IS_APPLE as qs } from "@lexical/utils";
import { useLexicalNodeSelection as ay } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Ot } from "fast-equals";
import wi from "quill-delta";
import { useLexicalComposerContext as ae } from "@lexical/react/LexicalComposerContext";
import { copyToClipboard as cy, $getHtmlContent as ly, $getLexicalContent as uy } from "@lexical/clipboard";
import { TreeView as dy } from "@lexical/react/LexicalTreeView";
import * as fy from "react-dom";
import { createPortal as dn } from "react-dom";
import { LexicalComposer as mf } from "@lexical/react/LexicalComposer";
import { ContentEditable as yf } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as bf } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as kf } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Tf } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as py } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as hy, createDOMRange as gy, createRectsFromDOMRange as my } from "@lexical/selection";
import { autoUpdate as yy, computePosition as by, shift as ky, flip as Ty } from "@floating-ui/dom";
import { $generateNodesFromDOM as xy } from "@lexical/html";
import { AutoFocusPlugin as _y } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Cy } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as xf, LexicalCollaboration as Sy } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as vy } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as My } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Ey, $isRootTextContentEmpty as Ay } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Py } from "@lexical/yjs";
import { Array as Gl, Map as Jl, YArrayEvent as Ny } from "yjs";
const Go = (e) => ze(oo(e)), Oy = {
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
function _f(e) {
  return Oy[e];
}
const w = " ", Rs = "​", Dt = w, xc = `${w}|`, or = "p", $s = "+", Cf = "-", Is = "chapter", Ma = "verse", Yl = "invalid", wy = "text-spacing", qy = "formatted-font", Ry = "marker-", _c = "external-usj-mutation", Sf = "selection-change", Kr = "cursor-change", Ea = "annotation-change", Bi = "delta-change", vf = "marker-settle", $y = [
  _c,
  Sf,
  Kr,
  Ea,
  Bi
], gn = "zmsc-s", Yn = "zmsc-e", Iy = [gn, Yn], Ly = [
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
  gn,
  Yn
], Mf = 1, Cc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Dy = Cc.filter((e) => e !== "sid" && e !== "eid");
class Ht extends as {
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
    return new Ht(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return Af().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Ly.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: Mf
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Ef(e) {
  return Iy.includes(e);
}
function Af(e, t, r, n, i) {
  return ze(new Ht(e, t, r, n, void 0, i));
}
function Ke(e) {
  return e instanceof Ht;
}
const Sc = "f", Uy = [
  // Footnote
  Sc,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function qi(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const Fy = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Pf = 1;
class Se extends Xt {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Sc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (qi(t) === "crossref" ? Cf : $s), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => Ky(t) ? {
        conversion: zy,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return vc().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Uy.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", qi(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", qi(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && vn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", qi(this.getMarker()))), { element: r };
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
      version: Pf
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
function zy(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: vc(t, r, n) };
}
function vc(e, t, r, n, i) {
  return ze(new Se(e, t, r, n, i));
}
function Ky(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Se.isValidMarker(t) && e.classList.contains(Se.getType());
}
function j(e) {
  return e instanceof Se;
}
var k;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(k || (k = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const Aa = {
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
}, Xl = {
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
function ar(e) {
  const t = Object.hasOwn(Aa, e) ? Aa[e] : void 0, r = Object.hasOwn(Xl, e) ? Xl[e] : void 0;
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
const Nf = "v", Of = "c", nn = "fig", Ql = "tr", Pa = "esb", wf = "esbe", jy = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, By = {
  "": "start",
  c: "center",
  r: "end"
};
function Vy(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Zl(e) {
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
const Wy = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Hy(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Rs && s + 1 < e.length && Zl(e[s + 1]) || (Zl(o) ? (r || (i = t.length, t += o), r = !0) : Wy.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function Gy(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function Jy(e, t) {
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
const Yy = /^(?:qt[1-5]?|ts)-[se]$/;
function fo(e) {
  return Yy.test(e) || Ef(e);
}
function Jo(e, t) {
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
function Xy(e, t, r) {
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
      a(Hy(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: u } = Jy(e, i + 1);
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
    if (l === Nf) {
      const { word: g, next: y } = Jo(e, i);
      i = y, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === Of) {
      const { word: g, next: y } = Jo(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, m = t(p)?.type;
    if (m === b.Note || m === void 0 && Se.isValidMarker(l)) {
      const { word: g, next: y } = Jo(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (m === b.Milestone || m === void 0 && fo(l)) {
      const g = sb(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const y = e.indexOf("\\", i), T = y === -1 ? e.length : y;
        o(e.slice(c, T)), i = T;
      }
      continue;
    }
    m === b.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : m === b.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Ls(p) ? (d(), Ls(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Pa || l === wf ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const eu = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Ls(e) {
  return Object.hasOwn(eu, e) ? eu[e] : void 0;
}
function Qy(e) {
  return Ls(e) !== void 0;
}
const Zy = /([-\w]+)\s*=\s*"(.*?)"/g, eb = /[\s\u200B]*[\n\r][\s\u200B]*/g, qf = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function po(e) {
  return qf[e];
}
const tb = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function rb(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function ho(e, t, r = qf[t]) {
  const n = e.replace(eb, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Zy)];
  if (s.length > 0) {
    if (!rb(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      tb.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function go(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function nb(e) {
  const t = Mr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function ib(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = ho(e.slice(n + 1, i), r, go(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function sb(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = ho(s.slice(o + 1), r, go(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = ib(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function hr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", w);
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
  }, g = (Z) => {
    for (let U = Z; U < o.length; U += 1) {
      const ee = o[U].object;
      ee.closed = "false";
    }
  }, y = () => {
    g(0), o.length = 0;
  }, T = (Z) => {
    s && (o.length > a && (g(a), o.length = a), a = 0, Z || (s.closed = "false"), s = void 0);
  }, v = () => {
    c = void 0, l = void 0;
  }, C = (Z) => {
    u && (Z || (u.closed = "false"), u = void 0);
  };
  let A, M = "", x;
  const F = () => {
    M && m(hr(M)), M = "";
  }, L = (Z = !1) => {
    A?.type === "sidebar" ? M = "" : Z && M.endsWith(`
`) && (M = M.slice(0, -1)), A = void 0, F();
  }, H = () => {
    if (!x)
      return;
    const Z = { type: "char", marker: x.marker, content: [] };
    x.value && (Z.content = [hr(x.value)]), p().push(Z), o.push({ object: Z }), x = void 0;
  }, G = (Z, U) => {
    f = !1, v(), y(), T(!1), i = { type: "para", marker: Z, content: [] }, U && (i.content = [hr(U)]), d().push(i);
  }, Q = () => {
    x && (G(x.marker, x.value), x = void 0);
  };
  let le;
  const te = () => {
    if (le) {
      if (le.shape === "para")
        G(nn, le.value);
      else {
        const Z = { type: "char", marker: nn, content: [] };
        le.value && (Z.content = [hr(le.value)]), p().push(Z), o.push({ object: Z });
      }
      le = void 0;
    }
  }, ve = Xy(e, t?.getMarker ?? ar, n);
  for (let Z = 0; Z < ve.length; Z++) {
    const U = ve[Z];
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
          [x.attrName]: hr(x.value.trim())
        });
        const ee = x.marker;
        if (x = void 0, ee === "ca") {
          const Ae = ve[Z + 1];
          Ae?.kind === "text" && /^[\s\u200B]*$/.test(Ae.text) && Z++;
        }
        continue;
      }
      if (x.shape === "para" && (U.kind === "para" || U.kind === "chapter")) {
        const ee = x.value.replace(/[\s\u200B]+$/, "");
        ee === "" ? (G(x.marker), x = void 0) : (Object.assign(x.target, { [x.attrName]: hr(ee) }), x = void 0);
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
        const ee = le.value.indexOf("|"), Ae = ee >= 0 ? ho(le.value.slice(ee + 1), nn) : void 0;
        if (Ae) {
          const Ze = {};
          for (const [tt, wr] of Object.entries(Ae))
            Ze[tt === "src" ? "file" : tt] = wr;
          const et = {
            type: "figure",
            marker: nn,
            ...Ze
          }, ue = le.value.slice(0, ee);
          ue && (et.content = [hr(ue)]), m(et), le = void 0;
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
          M += U.text;
          continue;
        }
        L();
      } else if (U.kind === "charOpen" || U.kind === "para") {
        const ee = U.kind === "para" || !U.isNested ? Ls(U.marker) : void 0;
        if (ee && ee.targetTypes.includes(A.type)) {
          M = "", x = {
            target: A,
            attrName: ee.attrName,
            marker: U.marker,
            shape: ee.shape,
            value: ""
          };
          continue;
        }
        L(U.kind === "para");
      } else
        L(U.kind === "chapter");
    if (!s && !n && (U.kind === "charOpen" && !U.isNested && U.marker === nn || U.kind === "para" && U.marker === nn)) {
      y(), le = { shape: U.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (U.kind) {
      case "text": {
        let ee = U.text;
        if (!s && ee.endsWith(`
`)) {
          const Ae = ve[Z + 1];
          (Ae === void 0 || Ae.kind === "para" || Ae.kind === "chapter") && (ee = ee.slice(0, -1));
        }
        ee && m(hr(ee));
        break;
      }
      case "para": {
        const ee = !s && !n;
        if (ee && U.marker === Ql) {
          y(), c || (c = { type: "table", content: [] }, d().push(c)), l = { type: "table:row", marker: Ql, content: [] }, sn(c).push(l), i = l, f = !1;
          break;
        }
        if (ee && l) {
          const Ae = jy.exec(U.marker);
          if (Ae && Vy(Ae)) {
            y();
            const [, Ze, et, ue] = Ae, tt = {
              type: "table:cell",
              marker: ue ? U.marker.slice(0, U.marker.indexOf("-")) : U.marker,
              align: By[Ze],
              content: []
            };
            ue && (tt.colspan = String(Number(ue) + 1 - Number(et))), sn(l).push(tt), i = tt;
            break;
          }
        }
        if (v(), !n && U.marker === Pa) {
          y(), T(!1), C(!1), u = { type: "sidebar", marker: Pa, content: [] }, r.push(u), i = void 0, A = u, f = !1;
          break;
        }
        if (U.marker === wf && u) {
          y(), T(!1), C(!0), i = void 0;
          break;
        }
        G(U.marker);
        break;
      }
      case "verse": {
        T(!1);
        const ee = { type: "verse", marker: Nf, number: U.number };
        m(ee), A = ee;
        break;
      }
      case "chapter": {
        y(), T(!1), v(), C(!1), i = void 0;
        const ee = {
          type: "chapter",
          marker: Of,
          number: U.number
        };
        r.push(ee), A = ee, f = !0;
        break;
      }
      case "note": {
        T(!1);
        const ee = p();
        s = { type: "note", marker: U.marker, caller: U.caller, content: [] }, a = o.length, ee.push(s), A = s;
        break;
      }
      case "charOpen": {
        if (!U.isNested) {
          const Ze = s ? a : 0;
          g(Ze), o.length = Ze;
        }
        const ee = p(), Ae = { type: "char", marker: U.marker, content: [] };
        ee.push(Ae), o.push({ object: Ae });
        break;
      }
      case "end": {
        const ee = U.marker.replace(/^\+/, ""), Ae = s ? a : 0, Ze = o.findLastIndex((et, ue) => ue >= Ae && et.object.marker === ee);
        Ze >= 0 ? (ob(o[Ze].object), g(Ze + 1), o.length = Ze) : s && s.marker === ee ? T(!0) : (g(Ae), o.length = Ae, m({ type: "unmatched", marker: `${U.marker}*` }));
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
      Z === "" ? G(x.marker) : Object.assign(x.target, { [x.attrName]: hr(Z) }), x = void 0;
    } else
      x.value.endsWith(`
`) && (x.value = x.value.slice(0, -1)), H();
  y(), T(!1), C(!1);
  const Ee = (Z) => {
    for (const U of Z)
      typeof U != "string" && U.content && (Ee(U.content), U.content.length === 0 && delete U.content);
  };
  return Ee(r), r;
}
function ob(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = ho(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const mn = ao("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), jr = ao("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), oe = ao("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), lr = "marker-trailing-space", Rf = 1, ab = "marker", Mc = ao("isGutterMarker", {
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
      span: (t) => db(t) ? {
        conversion: cb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return xr().updateFromJSON(t);
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
    return r && vn(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: Rf
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function cb(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: xr(t, r) };
}
function xr(e, t) {
  return ze(new Er(e, t));
}
function lb(e) {
  return kt(xr(ab, e), Mc, !0);
}
function ub(e) {
  return Gt(e) && ne(e, Mc);
}
function db(e) {
  return e?.tagName === "span";
}
function Gt(e) {
  return e instanceof Er;
}
function $f(e) {
  return e?.type === Er.getType();
}
const zr = "internal-comment", fb = [zr], If = Object.freeze({}), Na = Object.freeze({}), Oa = Object.freeze({}), wa = Object.freeze({}), qa = Object.freeze({}), pb = 1, Fn = /* @__PURE__ */ new Map(), Si = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Map(), Kn = /* @__PURE__ */ new Map();
class nt extends Xt {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = If, r, n, i, s, o) {
    super(o), this.__typedIDs = Cs(t), this.__typedOnClicks = Yo(r), this.__typedOnRemoves = Xo(n), this.__typedOnMouseEnters = Qo(i), this.__typedOnMouseLeaves = Zo(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Cs(t.__typedIDs), n = Yo(t.__typedOnClicks), i = Xo(t.__typedOnRemoves), s = Qo(t.__typedOnMouseEnters), o = Zo(t.__typedOnMouseLeaves);
    return new nt(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return fb.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Vi().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: pb
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      Un(n, on(t.theme.typedMark, a)), c.length > 1 && Un(n, on(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Un(n, on("annotationId", l));
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
      c !== l && (c === 0 ? l === 1 && Un(r, u) : l === 0 && Ho(r, u), c === 1 ? l === 2 && Un(r, d) : l === 1 && Ho(r, d));
      const f = new Set(o), p = new Set(a);
      for (const m of o)
        p.has(m) || Ho(r, on("annotationId", m));
      for (const m of a)
        f.has(m) || Un(r, on("annotationId", m));
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
    const r = this.getWritable(), n = Cs(r.__typedIDs);
    r.__typedIDs = Cs(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Ds(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Yo(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return _e(t) ? Fn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Xo(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return _e(t) ? Si.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Qo(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return _e(t) ? zn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = Zo(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return _e(t) ? Kn.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!_e(a))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Ds(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Vi(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Fn.delete(r.getKey()), Si.delete(r.getKey()), zn.delete(r.getKey()), Kn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
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
  getOrCreateDOMMouseEnterListener(t) {
    return this.__domOnMouseEnterListener || (this.__domOnMouseEnterListener = (r) => {
      this.handleDOMMouseEnter(r, t);
    }), this.__domOnMouseEnterListener;
  }
  handleDOMMouseEnter(t, r) {
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
  getOrCreateDOMMouseLeaveListener(t) {
    return this.__domOnMouseLeaveListener || (this.__domOnMouseLeaveListener = (r) => {
      this.handleDOMMouseLeave(r, t);
    }), this.__domOnMouseLeaveListener;
  }
  handleDOMMouseLeave(t, r) {
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
  ensureOnClickMapMutable() {
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Na) {
      const t = Fn.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      Fn.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    Fn.set(this.getKey(), this.__typedOnClicks);
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
    const i = $r(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = $r(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Na) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Oa) {
      const t = Si.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      Si.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    Si.set(this.getKey(), this.__typedOnRemoves);
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
    const i = $r(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = $r(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Oa) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === wa) {
      const t = zn.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      zn.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    zn.set(this.getKey(), this.__typedOnMouseEnters);
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
    const i = $r(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = $r(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === wa) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === qa) {
      const t = Kn.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Kn.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Kn.set(this.getKey(), this.__typedOnMouseLeaves);
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
    const i = $r(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = $r(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === qa) {
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
    const i = hb(t, r);
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
    for (; _e(t) && ru(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; _e(r) && ru(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = gb(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = mb(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = yb(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = bb(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Cs(e = If) {
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
function Yo(e) {
  if (!e || e === Na)
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
function Xo(e) {
  if (!e || e === Oa)
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
function Qo(e) {
  if (!e || e === wa)
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
function Zo(e) {
  if (!e || e === qa)
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
function $r(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function tu(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function hb(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function ru(e, t) {
  const r = tu(e), n = tu(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function bb(e, t) {
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
function nu(e) {
  return `external-${e}`;
}
function Vi(e, t, r, n, i) {
  return ze(new nt(e, t, r, n, i));
}
function _e(e) {
  return e instanceof nt;
}
function Lf(e) {
  return e?.type === nt.getType();
}
function Ds(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Df(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let m, g;
  for (let y = 0; y < u; y++) {
    const T = a[y];
    if (D(g) && g.isParentOf(T))
      continue;
    const v = y === 0, C = y === u - 1;
    let A = null;
    if (E(T)) {
      const M = T.getTextContentSize(), x = v ? f : 0, F = C ? p : M;
      if (x === 0 && F === 0)
        continue;
      const L = T.splitText(x, F);
      A = L.length > 1 && (L.length === 3 || v && !C || F === M) ? L[1] : L[0];
    } else {
      if (_e(T))
        continue;
      D(T) && T.isInline() && (A = T);
    }
    if (A !== null) {
      if (A && A.is(m))
        continue;
      const M = A.getParent();
      (M == null || !M.is(m)) && (g = void 0), m = M, g === void 0 && (g = Vi(), g.addID(t, r, n, i, s, o), A.insertBefore(g)), g.append(A);
    } else
      m = void 0, g = void 0;
  }
  t === zr && D(g) && (d ? g.selectStart() : g.selectEnd());
}
function kb(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (_e(n))
      return n.getTypedIDs()[t];
    if (E(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (_e(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Tb = ["type", "marker", "content"], Ra = "unknown", Uf = 1, xb = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class En extends Xt {
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
    return new En(r, n, i, s);
  }
  static importDOM() {
    return {
      [Ra]: (t) => Cb(t) ? {
        conversion: _b,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ec().updateFromJSON(t);
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
    return xb.has(this.getTag());
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
    const t = document.createElement(Ra);
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
      version: Uf
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
function _b(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Ec(t, r) };
}
function Ec(e, t, r) {
  return ze(new En(e, t, r));
}
function Cb(e) {
  return e?.tagName.toLowerCase() === Ra;
}
function Ie(e) {
  return e instanceof En;
}
const Wi = "id", Ff = 1, Sb = [
  "type",
  "marker",
  "code",
  "content"
];
class Ut extends Xt {
  __marker = Wi;
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
    return new Ut(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return zf(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Rm(t);
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
      version: Ff
    };
  }
}
function zf(e, t) {
  return ze(new Ut(e, t));
}
function Ct(e) {
  return e instanceof Ut;
}
function Kf(e) {
  return e?.type === Ut.getType();
}
const Us = "c", jf = 1, vb = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Pt extends Xt {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = Us, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Pt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return Bf().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Is, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: jf
    };
  }
}
function Bf(e, t, r, n, i) {
  return ze(new Pt(e, t, r, n, i));
}
function Re(e) {
  return e instanceof Pt;
}
function Mb(e) {
  return e?.type === Pt.getType();
}
const Vf = [
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
], Wf = [
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
], Eb = [
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
  ...Vf,
  ...Wf
], Hf = 1, Ab = ["type", "marker", "content"];
class be extends Xt {
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
    return t !== void 0 && (Eb.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Vf.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Wf.includes(t);
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
      span: (t) => Nb(t) ? {
        conversion: Pb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return _r().updateFromJSON(t);
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
    return iu(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), iu(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && vn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Hf
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = _r(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function iu(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Pb(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: _r(t) };
}
function _r(e, t) {
  return ze(new be(e, t));
}
function Nb(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return be.isValidMarker(t) && e.classList.contains(be.getType());
}
function $(e) {
  return e instanceof be;
}
function Ob(e) {
  return e?.type === be.getType();
}
const Gf = 1, wb = "c", Jf = "span";
class ur extends as {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = wb, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => Yf(t) ? {
        conversion: qb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ac().updateFromJSON(t);
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
    const t = document.createElement(Jf);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Is, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && vn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Is, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? Lt(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Gf
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
function qb(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Ac(t) };
}
function Ac(e, t, r, n, i, s) {
  return ze(new ur(e, t, r, n, i, s));
}
function Yf(e) {
  return e ? e.classList.contains(Is) && e.tagName.toLowerCase() === Jf : !1;
}
function ds(e) {
  return e instanceof ur;
}
function Rb(e) {
  return e?.type === ur.getType();
}
const Xf = 1;
class Br extends gc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Br(t.__key);
  }
  static importJSON(t) {
    return Vt().updateFromJSON(t);
  }
  getMarker() {
    return or;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Xf
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Vt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Vt() {
  return ze(new Br());
}
function cr(e) {
  return e instanceof Br;
}
function mo(e) {
  return e?.type === Br.getType();
}
const $b = [
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
], Qf = 1, Ib = ["type", "marker", "content"];
class Qe extends gc {
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
    return t !== void 0 && ($b.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Lb,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return Hi().updateFromJSON(t);
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
    return r && vn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Qf
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Hi(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Lb(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = Hi(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function Hi(e, t) {
  return ze(new Qe(e, t));
}
function se(e) {
  return e instanceof Qe;
}
function Pc(e) {
  return e?.type === Qe.getType();
}
const Fs = "v", Zf = 1, Db = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class pt extends Fe {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = Fs, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new pt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return ep().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Ma, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: Zf
    };
  }
}
function ep(e, t, r, n, i, s) {
  return ze(new pt(e, t, r, n, i, s));
}
function Ne(e) {
  return e instanceof pt;
}
function tp(e) {
  return e?.type === pt.getType();
}
const Ub = "​", Qn = Ub;
var su;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(su || (su = {}));
var ou;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(ou || (ou = {}));
function Fb() {
  return me(Qn);
}
function zb(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Qn, ""));
}
function fs(e) {
  return e.length > 0 && e.includes(Qn) && e.replaceAll(Qn, "") === "";
}
function Nc(e) {
  return E(e) && fs(e.getTextContent());
}
function rp(e) {
  return Mb(e) || Rb(e);
}
function We(e) {
  return Re(e) || ds(e);
}
function np(e, t) {
  return e.find((r) => We(r) && r.getNumber() === t.toString());
}
function Kb(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && We(r));
}
function au(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function ip(e) {
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
function Jt(e) {
  return Xe(e, j) ?? void 0;
}
function jb(e) {
  return Ct(e) || Re(e) || $(e) || ds(e) || cr(e) || Ke(e) || se(e) || j(e) || Ne(e) || Ie(e);
}
function sp(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Bb(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Mt(e) {
  return Ce(e) || Ct(e);
}
function Ce(e) {
  return se(e) || cr(e);
}
function Vb(e) {
  return Pc(e) || mo(e);
}
function zs(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function yn(e, t) {
  const r = ne(t, mn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function Wb(e, t) {
  const r = D(e) ? e : e.getParent(), n = D(t) ? t : t.getParent(), i = r && n ? Bm(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Hb(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Zn(e) {
  return e?.type === Fe.getType();
}
function Gb(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function Jb(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Oe(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function ot(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function op(e, t, r) {
  const n = Oe(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Lt(e, t) {
  let r = Oe(e);
  return t && (r += `${w}${t}`), r += " ", r;
}
function Yb(e) {
  const t = e[cs];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function ap(e) {
  return Rc(e) || $f(e) && e.textType === "marker" || Zn(e) && Yb(e) === "attribute" ? "" : Zn(e) && e.text !== w ? e.text : Ob(e) ? e.children.map((t) => ap(t)).join("") : "";
}
function Xb(e) {
  return e.map((r) => ap(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Et(e) {
  return " " + e + w;
}
function Oc(e) {
  const t = [];
  for (const r of e) {
    if (!$(r))
      continue;
    const n = cp(r);
    n !== Dt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function cp(e) {
  return P(e) || Ar(e) || E(e) && ne(e, oe) === "attribute" ? "" : E(e) ? e.getTextContent() : D(e) ? e.getChildren().map((t) => cp(t)).join("") : "";
}
function Ar(e) {
  return Gt(e) && e.getTextType() === "marker";
}
function Ft(e) {
  return P(e) || Ar(e);
}
function cu(e, t) {
  Qb(e, t), e.setMarker(t);
}
function Qb(e, t) {
  const r = e.getMarker(), n = Oe(r), i = Oe(r, !0), s = ot(r), o = ot(r, !0), a = be.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Ft(c))
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
        const f = l.startsWith(Oe("", !0));
        c.setTextContent(u ? Oe(t, f) : ot(t, f));
      }
    }
  });
}
function Le(e, t = $m) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Me(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function lp(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function wc(e) {
  if (!O(e))
    return lu(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !D(t) || e.anchor.type === "text" && !E(t)))
    return t ?? void 0;
  try {
    return lu(e) ?? t ?? void 0;
  } catch (n) {
    if (lp(n))
      return t ?? void 0;
    throw n;
  }
}
function Zb(e, t) {
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
function qc(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function up(e) {
  return !!e && e.includes("-");
}
function dp(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function lu(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function yo(e) {
  if (!e)
    return !1;
  if (co(e) || P(e) || Ar(e) || Gt(e) && e.getTextType() === "attribute")
    return !0;
  if (E(e)) {
    const t = ne(e, oe);
    if (t === lr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === w || fs(r))
      return !0;
  }
  return !1;
}
function bo() {
  const e = me(w);
  return kt(e, oe, lr), e.setMode("token"), e;
}
function ek(e) {
  const t = e.getTextContent();
  t.startsWith(w) || e.setTextContent(w + t);
}
function An(e) {
  return E(e) && ne(e, oe) === lr;
}
function fp(e) {
  const t = e.getFirstChild();
  if (!Ft(t) || t === null || An(t.getNextSibling()))
    return !1;
  const r = R();
  if (!O(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function oi(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!yo(s)) {
      if (_e(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (E(s) && s.getType() === Fe.getType()) {
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length }), r.length += s.getTextContentSize();
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function ko(e) {
  let t = e.getParent();
  for (; t && _e(t); )
    t = t.getParent();
  return t;
}
function tk(e, t) {
  return oi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function rk(e, t) {
  const r = ko(e);
  if (!r)
    return;
  const n = oi(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function nk(e, t) {
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
function pp(e, t) {
  const r = oi(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (yo(n))
    return pp(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || zs(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || zs(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function ik(e, t) {
  if (t <= 0)
    return 0;
  const r = oi(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? sk(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function sk(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const ok = 1;
class dr extends Fe {
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
    return new dr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      version: ok
    };
  }
}
function lt(e, t, r) {
  return ze(new dr(e, t, void 0, r));
}
function P(e) {
  return e instanceof dr;
}
function Rc(e) {
  return e?.type === dr.getType();
}
function Yr(e) {
  return e.getTextContent() === ln(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function ak(e) {
  e.setTextContent(ln(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function ln(e, t, r = !1) {
  return t === "closing" ? ot(e, r) : t === "selfClosing" ? ot("") : Oe(e, r);
}
const hp = 1, ck = "attribute-run";
function ea(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Pr extends Xt {
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
    return gp(t.runKind).updateFromJSON(t);
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
    t.classList.add(ck);
    const r = ea(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = ea(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = ea(this.__runKind);
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
      version: hp
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
function gp(e) {
  return ze(new Pr(e));
}
function je(e) {
  return e instanceof Pr;
}
const lk = /* @__PURE__ */ new Set(["closed"]);
function sr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !lk.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function mp(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function yp(e) {
  const t = Object.keys(e).filter((n) => !Dy.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function bp(e, t, r, n) {
  return mp(
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
function Li(e) {
  return e.getChildren().find((t) => P(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function uk(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Li(e) === void 0 && kp(e) === void 0;
}
function kp(e) {
  return e.getChildren().find((t) => E(t) && ne(t, oe) === "attribute");
}
function Gi(e, t) {
  return ps(e.getNextSibling(), t);
}
const dk = /^[ \u00A0]+$/;
function $c(e) {
  if (Yr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Oe(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && dk.test(r.slice(t.length));
}
function ps(e, t) {
  let r, n, i, s;
  return je(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), P(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  $c(e) && (r = e, e = e.getNextSibling()), E(e) && ne(e, oe) === "attribute" && (n = e, e = e.getNextSibling()), P(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && Yr(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
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
  if (E(n) && n.getTextContent() === Et(e.getCaller()))
    return n;
}
function Tp(e) {
  const t = Ji(e);
  return t ? ps(t.getNextSibling(), "cat") : {};
}
function To(e) {
  const t = e.getFirstChild();
  if (!(!E(t) || P(t)) && ne(t, oe) !== "attribute")
    return t;
}
function xp(e) {
  const t = To(e);
  return t ? ps(t.getNextSibling(), "ca") : {};
}
function _p(e) {
  const t = To(e);
  if (!t)
    return;
  const r = ps(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Cp(e) {
  const t = _p(e);
  return t ? ps(t.getNextSibling(), "cp") : {};
}
function Sp(e) {
  const t = e.getParent();
  if (!$(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ne(n))
        return n;
      if (!(P(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || E(n) && ne(n, oe) === "attribute" || $(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || je(n)))
        return;
    }
}
function xo(e) {
  let t, r, n, i, s = e.getNextSibling();
  return je(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), P(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  $c(s) && (t = s, s = s.getNextSibling()), E(s) && ne(s, oe) === "attribute" && (r = s, s = s.getNextSibling()), P(s) && s.getMarkerSyntax() === "selfClosing" && Yr(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function Ic(e) {
  return $(ko(e));
}
function $a(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Ic(t) : t.getChildren().some((i) => $(i) && i.getMarker() === r) ? !0 : void 0;
}
function fk(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = $a(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function hs(e) {
  return E(e) && e.getType() === Fe.getType() && ne(e, oe) !== "attribute";
}
function Lc(e, t) {
  if (e.getMarkerSyntax() !== "opening" || $a(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return P(r) ? $a(r, t) === !0 ? "spacer" : void 0 : hs(r) ? r.getTextContent().startsWith(w) ? void 0 : "prefix" : "spacer";
}
function pk(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (P(t) && Lc(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function vp(e, t) {
  const r = R();
  if (!O(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Mp(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Lc(t, e);
    if (r !== void 0 && !vp(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        E(n) && n.setTextContent(w + n.getTextContent());
      } else
        t.insertAfter(me(w));
  });
}
function Ep(e) {
  return e.isAttached() ? e.getChildren().some((t) => P(t) && Lc(t, e) !== void 0 && vp(t, e)) : !1;
}
const hk = "file", gk = "src", mk = "colspan", yk = "category", bk = "alt", kk = "closed", Tk = "false";
function xk(e) {
  return e[kk] !== Tk;
}
function _k(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === hk ? gk : t,
    r
  ]));
}
function Ck(e, t) {
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
function Ap(e, t, r) {
  const n = r ?? {}, i = xk(n);
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
        opening: `\\${Ck(t, n[mk])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: sr(_k(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [yk]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + sr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [bk]: s, ...o } = n;
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
const xt = { wantsRun: !1, valueText: void 0 }, Nr = {};
function ta(e, t) {
  if (t === "va")
    return e;
  const r = Gi(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function Dc(e) {
  const t = R();
  if (!O(t) || !t.isCollapsed())
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
function _o(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = R();
  if (!O(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function Sk(e) {
  return je(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : P(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : E(e) && ne(e, oe) === "attribute";
}
function vk(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!E(e) || ne(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function ra(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ne(t))
      return t;
    if (!Sk(t))
      return;
  }
}
function uu(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Ne(t),
    ownerOf: (t) => {
      if (je(t))
        return t.getRunKind() === e ? ra(t) : void 0;
      const r = t.getParent();
      return je(r) ? r.getRunKind() === e ? ra(r) : void 0 : vk(t) === e ? ra(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Ne(t))
        return xt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? xt : { wantsRun: !0, valueText: w + r };
    },
    scanPieces: (t) => Ne(t) ? Gi(ta(t, e), e) : Nr,
    graceSite: (t, r) => Ne(t) ? !r.opener && !r.closer ? Dc(ta(t, e)) : _o(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Ne(t) ? ta(t, e) : void 0
    }
  };
}
const Mk = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => $(e),
  ownerOf: () => {
  },
  expectedPieces: () => xt,
  scanPieces: () => Nr,
  graceSite: (e) => $(e) && Ep(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Ek = {
  kind: "char",
  ownerPredicate: (e) => $(e),
  ownerOf: (e) => {
    if (!E(e) || ne(e, oe) !== "attribute")
      return;
    const t = e.getParent();
    return $(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!$(e) || Li(e) === void 0)
      return xt;
    const t = sr(e.getUnknownAttributes() ?? {}, po(e.getMarker()));
    return t === "" ? xt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => $(e) ? { value: kp(e) } : Nr,
  graceSite: (e, t) => {
    if (!$(e) || t.value)
      return !1;
    const r = Li(e);
    if (!r)
      return !1;
    const n = R();
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
    insertRunBefore: (e) => $(e) ? Li(e) : void 0
  }
};
function Pp(e) {
  if (P(e))
    return e.getMarker() === "cat";
  if (!E(e) || ne(e, oe) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return P(t) && t.getMarker() === "cat";
}
function Ak(e) {
  const t = e.getParent();
  if (!j(t))
    return;
  const r = Ji(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Pp(n))
        return;
    }
}
const Pk = {
  kind: "cat",
  ownerPredicate: (e) => j(e),
  ownerOf: (e) => {
    if (je(e))
      return e.getRunKind() === "cat" && j(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return je(t) ? t.getRunKind() === "cat" && j(t.getParent()) ? t.getParent() ?? void 0 : void 0 : Pp(e) ? Ak(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!j(e) || e.getIsCollapsed() !== !1)
      return xt;
    const t = e.getCategory();
    return t === void 0 ? xt : { wantsRun: !0, valueText: w + t };
  },
  scanPieces: (e) => j(e) ? Tp(e) : Nr,
  graceSite: (e, t) => {
    if (!j(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Ji(e);
      return r !== void 0 && Dc(r);
    }
    return _o(t);
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
function Nk(e) {
  return je(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : P(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : E(e) && ne(e, oe) === "attribute";
}
function Ok(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!E(e) || ne(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function wk(e) {
  const t = e.getParent();
  if (!Re(t))
    return;
  const r = To(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Nk(n))
        return;
    }
}
function du(e) {
  const t = (r) => Re(r) ? e === "ca" ? To(r) : _p(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Re(r),
    ownerOf: (r) => {
      if (je(r))
        return r.getRunKind() === e && Re(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return je(n) ? n.getRunKind() === e && Re(n.getParent()) ? n.getParent() ?? void 0 : void 0 : Ok(r) === e ? wk(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Re(r))
        return xt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? xt : { wantsRun: !0, valueText: w + n };
    },
    scanPieces: (r) => Re(r) ? e === "ca" ? xp(r) : Cp(r) : Nr,
    graceSite: (r, n) => {
      if (!Re(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && Dc(i);
      }
      return _o(n);
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
function Np(e) {
  if (P(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return E(e) && ne(e, oe) === "attribute";
}
function qk(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ke(t)) {
      const r = P(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Np(t))
      return;
  }
}
const Rk = {
  kind: "milestone",
  ownerPredicate: (e) => Ke(e),
  ownerOf: (e) => {
    const t = je(e) ? e.getRunKind() === "milestone" ? e : void 0 : je(e.getParent()) ? e.getParent() : Np(e) ? e : void 0;
    if (!t || je(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return je(t) ? Ke(r) ? r : void 0 : qk(t);
  },
  expectedPieces: (e) => {
    if (!Ke(e))
      return xt;
    const t = bp(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = sr(t, go(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : w + r };
  },
  scanPieces: (e) => {
    if (!Ke(e))
      return Nr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = xo(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Ke(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = R();
      if (!O(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return _o(t);
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
}, $k = Ap("optbreak", void 0, void 0).opening, Ik = {
  kind: "optbreak",
  ownerPredicate: (e) => Ie(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Ie(t) || t.getTag() !== "optbreak"))
      return E(e) || Gt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: $k }),
  scanPieces: (e) => Ie(e) ? { value: e.getFirstChild() ?? void 0 } : Nr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, Lk = {
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
  expectedPieces: () => xt,
  scanPieces: () => Nr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, Dk = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => $(e),
  ownerOf: () => {
  },
  expectedPieces: () => xt,
  scanPieces: () => Nr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Yi = [
  Mk,
  Ek,
  uu("va"),
  uu("vp"),
  Pk,
  du("ca"),
  du("cp"),
  Rk,
  Ik,
  Lk,
  Dk
], Uk = new Map(Yi.map((e) => [e.kind, e]));
function bn(e) {
  const t = Uk.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function kn(e) {
  for (const t of Yi) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function Op(e) {
  return kn(e) !== void 0;
}
const Ks = "unmatched", wp = 2;
function Di(e) {
  return `\\${e}`;
}
class Or extends Fe {
  __marker;
  constructor(t = "", r) {
    super(Di(t), r), this.__marker = t, this.__mode = 1;
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
      [Ks]: (t) => zk(t) ? {
        conversion: Fk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Uc().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? Di(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Di(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Yl), r.title = fu(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = fu(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Ks);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Yl), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: wp
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function qp(e) {
  return e.getTextContent() === Di(e.getMarker());
}
function fu(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function Fk(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Uc(t) };
}
function Uc(e) {
  return ze(new Or(e));
}
function zk(e) {
  return e?.tagName.toLowerCase() === Ks;
}
function Xr(e) {
  return e instanceof Or;
}
const Rp = "table", Ia = "immutable-table", $p = 1, Kk = ["type", "marker", "content"];
class Pn extends Xt {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Ia;
  }
  static clone(t) {
    return new Pn(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return jk().updateFromJSON(t);
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
      type: Ia,
      ...t !== void 0 && { unknownAttributes: t },
      version: $p
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function jk(e) {
  return ze(new Pn(e));
}
function Ip(e) {
  return e instanceof Pn;
}
function Bk(e) {
  return e?.type === Ia;
}
const Lp = "table:row", pu = "immutable-table-row", Dp = 1, La = "tr", Vk = ["type", "marker", "content"];
class ai extends Xt {
  __marker;
  __unknownAttributes;
  constructor(t = La, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return pu;
  }
  static clone(t) {
    return new ai(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return Wk().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? La).setUnknownAttributes(t.unknownAttributes);
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
      type: pu,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Dp
    };
  }
}
function Wk(e, t) {
  return ze(new ai(e, t));
}
const Up = "table:cell", hu = "immutable-table-cell", Fp = 1, Da = "tc1", Hk = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function Gk(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class ci extends Xt {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Da, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return hu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new ci(r, n, i, s, o);
  }
  static importJSON(t) {
    return Jk().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Da).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = Gk(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: hu,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: Fp
    };
  }
}
function Jk(e, t, r, n) {
  return ze(new ci(e, t, r, n));
}
function Co(e, t) {
  const r = e.getChildAtIndex(t);
  return E(r) ? r : void 0;
}
function Yt(e, t) {
  const r = Co(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Xi(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function Yk(e) {
  return e.getChildren().some((t) => P(t) && t.getMarkerSyntax() === "closing");
}
function Xk(e) {
  return Xi(e) ? void 0 : { closed: "false" };
}
function Qk(e, t, r, n) {
  const i = t.getMarker(), s = Ic(t), o = Yk(t);
  if (n) {
    e.append(lt(i, "opening", s));
    const [a] = r;
    hs(a) && !a.getTextContent().startsWith(w) && a.setTextContent(w + a.getTextContent());
  }
  e.append(...r), o && e.append(lt(i, "closing", s));
}
function Tn(e) {
  return Xe(e, $) ?? void 0;
}
function Fc(e) {
  let t = e.getParent();
  for (; $(t); )
    t = t.getParent();
  return t;
}
function Ua(e) {
  const t = zp(e);
  return e.getChildren().every((r) => P(r) || t && ne(r, oe) === "attribute" || E(r) && r.getTextContent().replaceAll(w, "") === "");
}
function zp(e) {
  return Xi(e);
}
function Zk(e, t) {
  const r = e.getUnknownAttributes(), n = r ? sr(r, po(e.getMarker())) : "";
  n !== "" && t.insertAfter(me(n)), e.remove();
}
function eT(e, t) {
  if (Xi(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(lt(e.getMarker(), "closing", Ic(e)));
}
function tT(e, t) {
  return $(e) && !Xi(e) && !Xi(t);
}
function rT(e, t, r) {
  Ua(e) && e.getChildren().forEach((i) => {
    P(i) || i.remove();
  });
  const [n] = t;
  r && hs(n) && !n.getTextContent().startsWith(w) && n.setTextContent(w + n.getTextContent()), e.append(...t);
}
function nT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = zp(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = P(l) && l.getMarkerSyntax() === "closing", f = s && ne(l, oe) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = tT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      rT(e, o, n);
    else {
      const l = _r(t.getMarker(), Xk(t));
      Qk(l, t, o, n), e.insertAfter(l), Ua(l) ? l.remove() : c = l;
    }
  i && !a && eT(t, n), Ua(t) && Zk(t, c);
}
function ei(e, t) {
  let r = e.getParent();
  for (; $(r); )
    nT(e, r, t), r = e.getParent();
}
function zc(e) {
  if (E(e) && !P(e)) {
    const t = e.getTextContent().startsWith(w) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (D(e)) {
    const t = e.getChildren().find((r) => !P(r));
    if (t) {
      zc(t);
      return;
    }
    e.selectEnd();
  }
}
const Xn = /* @__PURE__ */ new WeakMap();
function iT(e, t) {
  return Xn.set(e, t), () => {
    Xn.get(e) === t && Xn.delete(e);
  };
}
function gu(e) {
  return Xn.get(e);
}
function sT(e) {
  return Xn.get(ls())?.has(e.getKey()) ?? !1;
}
function oT(e) {
  Xn.get(ls())?.add(e.getKey());
}
function aT(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Fa(e) {
  return !!(e.opener || e.value || e.closer);
}
function mu(e) {
  return /^\s/.test(e);
}
function Kc(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !mu(t) || !mu(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function So(e, t, r) {
  return r.wantsRun ? Kc(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : aT(t);
}
function cT(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return Kc(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Kp(e, t) {
  return !Fa(e.scanPieces(t));
}
function gs(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!So(e, n, r))
    return !1;
  const i = R();
  if (!O(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || zs(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function lT(e, t, r, n) {
  return !r.wantsRun || Fa(n) || Vm(Bi) ? !1 : ls().getEditorState().read(() => {
    const i = ie(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Fa(e.scanPieces(i));
  });
}
function uT(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function yu(e) {
  const t = me(e);
  return kt(t, oe, "attribute"), t;
}
function dT(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = gp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function fT(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    E(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(yu(n.valueText));
    return;
  }
  const l = dT(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = lt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : E(d) ? Kc(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = yu(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(lt(a === "selfClosing" ? "" : o(t), a));
}
function Qi(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (So(e, i, n) && !sT(t)) {
    if (lT(e, t, n, i)) {
      oT(t);
      return;
    }
    if (!gs(e, t)) {
      if (!n.wantsRun) {
        uT(i);
        return;
      }
      fT(e, t, i, n);
    }
  }
}
function pT(e, t, r) {
  Qi(e, t), t.isAttached() && gs(e, t) && r.add(t.getKey());
}
function jc(e) {
  if (!E(e))
    return !1;
  if (P(e) || Ne(e) || Xr(e))
    return !0;
  const t = ne(e, oe);
  return t === "attribute" || t === lr;
}
function Bc(e, t) {
  return P(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && Yr(e) && $(e.getParent())) : !1;
}
function hT() {
  const e = R();
  return O(e) ? Bc(e.focus.getNode(), e.focus.offset) : !1;
}
function jp(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return E(t) && jc(t) ? t : void 0;
}
function gT(e) {
  const t = jp(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function mT(e) {
  const t = jp(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function bu(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function ku(e, t) {
  e.set(t.key, t.offset, t.type);
}
function yT(e, t) {
  let r = mT(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!E(n))
      return;
    if (!jc(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Tu(e, t) {
  const r = yT(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Bp(e) {
  if (e.isCollapsed()) {
    const a = gT(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [bu(r), bu(n)], s = Tu(r, "next"), o = Tu(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (ku(r, i[0]), ku(n, i[1]), !1) : !0;
}
const js = "verse-block", Vp = 1, bT = "verse-block";
class li extends Xt {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return js;
  }
  static clone(t) {
    return new li(t.__number, t.__key);
  }
  static importJSON(t) {
    return kT().updateFromJSON(t);
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
    return dp(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(bT), xu(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && xu(r, this.__number), !1;
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
      type: js,
      number: this.getNumber(),
      version: Vp
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function xu(e, t) {
  const { start: r, end: n } = dp(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), _u(e, "data-verse-start", i ? r : NaN), _u(e, "data-verse-end", i ? n : NaN);
}
function _u(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function kT(e) {
  return ze(new li(e));
}
function Zi(e) {
  return e instanceof li;
}
function TT(e) {
  return e?.type === js;
}
const xT = [
  Ut,
  ur,
  Pt,
  pt,
  be,
  Se,
  Ht,
  dr,
  En,
  Er,
  Or,
  Qe,
  Br,
  Pn,
  ai,
  ci,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Pr,
  {
    replace: gc,
    with: () => Vt(),
    withKlass: Br
  }
], Bs = {
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
}, _T = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function CT(e) {
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
      type: _T[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: ar(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Cu(e, t, r) {
  const n = {
    type: kr,
    version: br,
    content: e
  }, i = t.serializeEditorState(n, r);
  return mo(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Wp = "v", Hp = 1, ST = "verse-selected";
class St extends as {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Wp, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => ET(t) ? {
        conversion: MT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Vc().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ma, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && vn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Ma, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Lt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Rs + this.getNumber() + Rs
    );
    return S(vT, { nodeKey: this.getKey(), text: t });
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
      version: Hp
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (lp(r))
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
  const [r] = ay(e);
  return S("span", { className: r ? ST : void 0, children: t });
}
function MT(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Vc(t) };
}
function Vc(e, t, r, n, i, s) {
  return ze(new St(e, t, r, n, i, s));
}
function ET(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Wp;
}
function Nn(e) {
  return e instanceof St;
}
function AT(e) {
  return e?.type === St.getType();
}
function ye(e) {
  return Ne(e) || Nn(e);
}
function Gp(e) {
  return tp(e) || AT(e);
}
function PT(e) {
  return NT(e).find((t) => se(t));
}
function NT(e) {
  return e.some(Zi) ? e.flatMap((t) => Zi(t) ? t.getChildren() : t) : e;
}
function vo(e) {
  return D(e) ? Zi(e) ? e.getChildren().flatMap(vo) : e.getChildren() : [];
}
function OT(e, t) {
  return vo(e).find((i) => ye(i) && qc(t, i.getNumber()));
}
function wT(e, t) {
  return t === 0 ? PT(e) : e.map((r) => OT(r, t)).filter((r) => r)[0];
}
function Vs(e) {
  return vo(e).find((r) => ye(r));
}
function Jp(e, t) {
  if (!D(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ye(i))
      return i;
  }
}
function qT(e) {
  const t = e.getParent();
  if (t && D(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (ye(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !We(r); ) {
    const n = Vs(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function za(e) {
  return vo(e).findLast((t) => ye(t));
}
function RT(e) {
  if (!Ne(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function $T(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && D(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function IT(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return $T(t, e, r);
  if (E(e)) {
    const n = RT(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function Su(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function LT(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!O(t))
    return Su(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return IT(e, t) ? { verseNum: n } : Su(e);
}
function DT(e) {
  return jb(e) || Nn(e);
}
function Wc(e) {
  if (E(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(w) && e.setTextContent(`${t} `);
  }
}
function Yp(e) {
  if (E(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Xp(e, t) {
  return e.getEditorState().read(() => !ie(t));
}
function UT(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Hc(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && D(i) && D(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && D(i)) {
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
      let s = vu(i);
      for (; s && !We(s); ) {
        const o = Vs(s);
        if (o) {
          n = o;
          break;
        }
        s = vu(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = Vs(s);
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
function FT(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Hc(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && D(i) && (n = Jp(i, r.getIndexWithinParent())), !n && i) {
      let o = Mu(i);
      for (; o && !We(o); ) {
        const a = za(o);
        if (a) {
          n = a;
          break;
        }
        o = Mu(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !We(s); ) {
      const o = za(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function vu(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function Mu(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function Hc(e, t) {
  if (D(e) && O(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && ye(n))
      return n;
    const i = Jp(e, t.anchor.offset);
    if (i)
      return i;
    const s = Vs(e);
    if (s)
      return s;
  }
  return Gc(e);
}
function Gc(e) {
  if (!e || We(e))
    return;
  if (ye(e))
    return e;
  let t = au(e);
  for (; t; ) {
    if (We(t))
      return;
    if (ye(t))
      return t;
    const r = za(t);
    if (r)
      return r;
    t = au(t);
  }
}
const zT = ["style"], KT = ["style", "code"], Ws = ["style", "cid"], jT = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], BT = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], VT = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], WT = ["style", "caller", "category", "contents"], HT = ["tag", "marker", "contents"], GT = [
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
function JT(e, t) {
  const r = ie(e);
  if (!At(r))
    return;
  const n = Qp(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function Qp(e, t = "delta-doc") {
  if (!e)
    return;
  const r = hf();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (ti(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      ti(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Cr(l) || At(l))
        return n;
      Mt(l) && (a = l);
    }
    if (Mt(l) && (i.includes(l) || i.push(l)), Zp(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += Jc(l, t);
  }
  if (a)
    return n;
}
function Eu(e, t, r = "delta-doc") {
  if (e.length < 2 || !QT(e[0]) || !XT(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => YT(n, r)?.getKey());
}
function YT(e, t = "delta-doc") {
  const r = hf();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (ti(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      ti(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Mt(a) && (i.includes(a) || i.push(a)), Zp(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = Jc(a, t);
    if (Cr(a) && l > 0 && e >= n && e < n + l || At(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function ti(e, t) {
  return e ? t ? !zs(t.node, e.getKey()) : !0 : !1;
}
function Cr(e) {
  return E(e) && !At(e);
}
function At(e) {
  return We(e) || ye(e) || Ke(e) || j(e) || Ie(e) || Xr(e);
}
function Dr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function XT(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && GT.includes(t);
}
function QT(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Zp(e, t) {
  return j(e) || Ie(e) ? !0 : t === "apply" && D(e) && At(e);
}
function eh(e) {
  const t = e.getParent();
  return Ft(e) && se(t) && t.getFirstChild() === e;
}
function Ka(e) {
  const t = e.getParent();
  return t !== null && Xe(t, je) !== null;
}
function ZT(e) {
  const t = e.getParent();
  return $(t) && e.getTextContent() === Dt && t.getChildrenSize() === 1;
}
function ex(e) {
  const t = e.getParent();
  if (!j(t))
    return !1;
  const r = e.getPreviousSibling();
  return P(r) && r === t.getFirstChild() && e.getTextContent() === Et(t.getCaller());
}
function tx(e) {
  return !Op(e) && Jc(e, "delta-doc") === e.getTextContentSize();
}
function Jc(e, t) {
  if (At(e))
    return 1;
  if (E(e)) {
    const r = e.getTextContent();
    return t === "delta-doc" && // A bare cursor host (EmptyVerseCaretGuardPlugin) is a transient, collab-invisible node:
    // its insertion is never emitted, so it contributes nothing to DOC-DELTA positions or the
    // local doc would drift one position ahead of every peer while a host rests. In `"apply"`
    // coordinates it MUST count, per the rule in the doc comment above: none of
    // `$applyUpdate`'s traversals skip a placeholder (each classifies with `$isOTTextNode`
    // and adds raw `getTextContentSize()`), so excluding it here left a replace-embed retain
    // one short whenever a host rested before the target — a footnote-popover save then
    // deleted the unit BEFORE the note instead of the note itself.
    (Nc(e) || eh(e) || ne(e, oe) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ne(e, oe) === "attribute" || Ka(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(xc) || ZT(e) || ex(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function ja(e, t) {
  const r = { insert: e.__text }, n = ne(e, jr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = th(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function Au(e) {
  const t = new wi();
  return e.isEmpty() || e.read(() => {
    const r = De();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && cr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = rx();
    for (const s of i)
      t.push(s);
  }), t;
}
function Yc(e, t) {
  const r = [], n = Mn(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...Pu(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...Pu(c, n.length, n, i, s, o, a));
  return r;
}
function rx() {
  return Yc();
}
function Pu(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return nx(e, a, n), ix(e, a, i, s, o), sx(e, t, r, i, o, s, a), We(e) && a.push(lx(e)), ye(e) && a.push(dx(e)), Ke(e) && a.push(fx(e)), Xr(e) && a.push(px(e)), ax(e, a, s), ox(e, a, s), yx(c, s), a;
}
function nx(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    Ct(n) ? t.push(cx(n)) : se(n) ? t.push(ux(n)) : cr(n) && t.push({ insert: es });
  }
  Mt(e) && (r.includes(e) || r.push(e));
}
function ix(e, t, r, n, i) {
  if (!E(e) || Ne(e) || Xr(e))
    return;
  const s = e.getParent();
  if (j(s) && s.getFirstChild() === e)
    return;
  const o = Jt(e) !== void 0;
  if (P(e) && (o || eh(e) || Ka(e) || Op(e)) || ne(e, oe) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (fs(a))
    return;
  const c = e.getPreviousSibling();
  if (j(s) && P(c) && c === s.getFirstChild() && a === Et(s.getCaller()))
    return;
  const l = $(s) ? s : void 0, u = l?.getFirstChild();
  o && l && P(u) && c === u && a.startsWith(w) && (a = a.slice(1));
  const d = a.startsWith(xc) || ne(e, oe) === "attribute" || Ka(e), f = !!l && a === Dt && l.getChildrenSize() === 1, p = Mo(e, n), m = p ? r.filter((T) => p.children.includes(T)) : r, g = ja(e, m);
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
function sx(e, t, r, n, i, s, o) {
  $(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (ti(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = gx(c), u = Mo(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function ox(e, t, r) {
  if (!j(e))
    return;
  const n = hx(e), i = Mo(e, r), s = {
    node: e,
    children: Mn(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function ax(e, t, r) {
  if (!Ie(e))
    return;
  const n = mx(e), i = Mo(e, r), s = {
    node: e,
    children: Mn(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Qr(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function cx(e) {
  const t = { style: Wi, code: e.__code };
  return Qr(t, e), { insert: es, attributes: { book: t } };
}
function lx(e) {
  const t = { style: Us, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Qr(t, e), { insert: { chapter: t } };
}
function ux(e) {
  const t = { style: e.__marker };
  return Qr(t, e), { insert: es, attributes: { para: t } };
}
function dx(e) {
  const t = { style: Fs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Qr(t, e), { insert: { verse: t } };
}
function fx(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), Qr(t, e), { insert: { milestone: t } };
}
function px(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function hx(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), Qr(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ne(e, jr);
  return n && (r.attributes = { segment: n }), r;
}
function gx(e) {
  const t = { insert: "" }, r = th([e]);
  return r && (t.attributes = { char: r }), t;
}
function mx(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), Qr(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Mo(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function yx(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    ti(t[r].node, e) && t.splice(r, 1);
}
function th(e) {
  if (e.length === 0)
    return;
  const t = e.map(bx);
  return t.length === 1 ? t[0] : t;
}
function bx(e) {
  const t = { style: e.__marker }, r = ne(e, mn);
  return r && (t.cid = r), Qr(t, e), t;
}
function Xc(e) {
  let t = 0;
  for (const { node: r } of Mn())
    if (j(r)) {
      if (r.getKey() === e)
        return t;
      t += 1;
    }
}
const rh = 1;
class Wt extends as {
  __caller;
  __previewText;
  __onClick;
  constructor(t = $s, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new Wt(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => Tx(t) ? {
        conversion: kx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Qc().updateFromJSON(t);
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
    return r && vn(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => xx(t, n), (l) => _x(t, n, s, l), () => Cx(t, n), () => Sx(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return S("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === $s && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === Cf && i ? (
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
      version: rh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function kx(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: Qc(t, r) };
}
function Qc(e, t, r) {
  return ze(new Wt(e, t, r));
}
function Tx(e) {
  return e ? e.classList.contains(Wt.getType()) : !1;
}
function Qt(e) {
  return e instanceof Wt;
}
function xx(e, t) {
  return e.getEditorState().read(() => {
    const r = ie(t);
    if (!j(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function _x(e, t, r, n) {
  e.update(() => {
    const i = ie(t);
    if (!j(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = ie(r);
    if (!Qt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function Cx(e, t) {
  return e.getEditorState().read(() => {
    const r = ie(t);
    if (!j(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return Yc(r);
  });
}
function Sx(e, t) {
  return e.getEditorState().read(() => Xc(t));
}
const vx = [
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
], Mx = ["†"];
function Zc(e) {
  if (ih())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = Nu(t), [s, o] = Nu(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = Ou(n, i), [s, o] = Ou(s, o);
  const a = mc();
  return a.anchor = Hl(n.getKey(), i, wu(n)), a.focus = Hl(s.getKey(), o, wu(s)), a;
}
function nh() {
  if (ih())
    return;
  const e = R();
  if (!e || !O(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Hs(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Hs(i, s);
  return { start: n, end: o };
}
function Nu(e) {
  if (Im(e)) {
    const t = Zd(e.jsonPath);
    let r = De();
    for (let n = 0; n < t.length; n++) {
      if (!r || !D(r))
        return [void 0, void 0];
      const i = oi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : nk(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && D(r) ? [r, ik(r, e.offset)] : [void 0, void 0];
  }
  if (Lm(e) || Dm(e)) {
    const t = vi(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (D(t)) {
      const n = t.getLastChild();
      if (n && E(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && D(r) ? [r, 0] : [void 0, void 0];
  }
  if (Um(e)) {
    const t = vi(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (D(t)) {
      const n = t.getLastChild();
      if (n && E(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && D(r) ? [r, 0] : [void 0, void 0];
  }
  if (Fm(e)) {
    const t = vi(e.jsonPath);
    if (!t || !D(t))
      return [void 0, void 0];
    const r = na(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && E(n) ? [n, 0] : [void 0, void 0];
  }
  if (zm(e)) {
    const t = vi(e.jsonPath);
    if (!t || !D(t))
      return [void 0, void 0];
    const r = na(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && E(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (Km(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = vi(e.jsonPath);
    if (!n || !D(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = na(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && E(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${jm(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Ou(e, t) {
  if (!Ar(e))
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
function wu(e) {
  return D(e) ? "element" : "text";
}
function na(e, t) {
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
function vi(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = Zd(r);
  let i = De();
  for (const s of n) {
    if (!i || !D(i))
      return;
    const o = oi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Hs(e, t) {
  if (P(e)) {
    const r = e.getMarkerSyntax(), n = Ex(e), i = n ? tn(an(n)) : tn(an(e));
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
    if (E(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return Hs(n, s);
    }
    const i = ko(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return Hs(i, o);
    }
  }
  if (D(e)) {
    const r = e.getChildAtIndex(t);
    if (Ar(r))
      return {
        jsonPath: tn(an(e))
      };
    const n = pp(e, t);
    return n.type === "text" ? {
      jsonPath: tn([...an(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: tn(an(e)),
      offset: n.index
    };
  }
  if (E(e)) {
    const r = rk(e, t);
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
function Ex(e) {
  const t = e.getParent();
  if (!t || !D(t))
    return;
  const r = Ax(e);
  return r && !Mt(r) && !E(r) && !_e(r) ? r : t;
}
function Ax(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!yo(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function an(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = ko(r);
    if (!n)
      break;
    const i = tk(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function ih() {
  for (let e = De().getFirstChild(); e; e = e.getNextSibling())
    if (Zi(e))
      return !0;
  return !1;
}
function sh(e, t, r, n, i, s, o) {
  if (!Se.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Zc(r) : R();
  if (!O(a))
    return;
  const c = Ox(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (qi(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = oh(e, l, c, i, s, void 0, void 0);
  return Nx(u, a, i), u;
}
function el(e) {
  return e !== "expanded";
}
function Px(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!E(r) || !$(r.getParent()))
    return;
  if (P(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return P(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function Nx(e, t, r) {
  const n = el(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Hb(t), Bp(t);
  const i = Px(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find($)?.selectEnd();
}
function jn(e, t, r) {
  const n = _r(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(lt(e)) : r?.markerMode === "visible" && n.append(xr("marker", Oe(e)));
  const s = t === "" ? Dt : i ? w + t : t;
  return n.append(me(s)), n;
}
function Ox(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(jn("fr", f, n)), !e.isCollapsed()) {
        const p = Ru(e);
        p.length > 0 && o.push(jn("fq", p, n));
      }
      o.push(jn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(jn("xo", f, n)), !e.isCollapsed()) {
        const p = Ru(e);
        p.length > 0 && o.push(jn("xq", p, n));
      }
      o.push(jn("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function oh(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : el(n?.noteMode), l = vc(e, t, c);
  s && kt(l, jr, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = lt(e), u && d.setMode("token"), a || (f = lt(e, "closing"))) : n?.markerMode === "visible" && (d = xr("marker", Oe(e) + " "), a || (f = xr("marker", ot(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = me(Et(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const m = () => bo(), g = r.flatMap($x(m));
    if (t === "")
      l.append(...g);
    else {
      const y = Oc(r);
      let T = () => {
      };
      i?.noteCallerOnClick && (T = i.noteCallerOnClick), p = Qc(l.__caller, y, T), l.append(p, m(), ...g);
    }
  }
  return f && l.append(f), l;
}
function Ur(e) {
  if (typeof e == "string") {
    const i = ie(e);
    return j(i) ? i : void 0;
  }
  const t = Mn();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => j(i.node))[e]?.node;
  if (j(n))
    return n;
}
function qu(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (Nn(n) || !n) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      n.selectEnd();
  } else {
    const n = e.getChildren(), i = n.slice().reverse().find($);
    if (i)
      i.selectEnd();
    else {
      const s = n.findIndex((a) => P(a) && a.getMarkerSyntax() === "closing"), o = s === -1 ? n.length : s;
      e.select(o, o);
    }
  }
}
function wx(e) {
  const t = e.getNextSibling();
  if (E(t) && !jc(t)) {
    t.select(0, 0);
    return;
  }
  const r = e.getParent();
  if (!r)
    return;
  const n = e.getIndexWithinParent() + 1;
  r.select(n, n);
}
function qx(e) {
  const t = e.getPreviousSibling();
  return !P(t) || t.getMarkerSyntax() !== "opening" || !hs(e) ? 0 : e.getTextContent().startsWith(w) ? w.length : 0;
}
function Rx(e, t) {
  let r = Math.max(t, 0), n;
  for (const { node: s } of Mn(e)) {
    if (!E(s) || yo(s))
      continue;
    const o = Xe(s, (l) => $(l) || j(l));
    if (!$(o))
      continue;
    const a = qx(s), c = s.getTextContentSize() - a;
    if (r < c) {
      const l = a + r;
      return s.select(l, l), !0;
    }
    r -= c, n = s;
  }
  if (!n)
    return !1;
  const i = n.getTextContentSize();
  return n.select(i, i), !0;
}
function $x(e) {
  return (t) => Gt(t) ? [t] : [t, e()];
}
function Ix(e) {
  const t = e.getParent();
  return t !== null && Xe(t, j) !== null;
}
function Ru(e) {
  if (!O(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = tf(e);
  let a = "";
  for (const c of t)
    if (!(j(c) || Qt(c) || Ix(c)) && !P(c) && !Xr(c) && ne(c, oe) !== "attribute") {
      if (ye(c)) {
        a += `\\+fv ${c.getNumber()}\\+fv*`;
        continue;
      }
      if (E(c)) {
        let l = c.getTextContent();
        c === r && c === n ? l = s < o ? l.slice(s, o) : l.slice(o, s) : c === r ? l = i ? l.slice(s) : l.slice(o) : c === n && (l = i ? l.slice(0, o) : l.slice(0, s)), a += l;
      }
    }
  return a.replace(/[ \t\r\n\f\v]+/g, " ").trim();
}
const ah = [
  Wt,
  St,
  ...xT
], Lx = [
  li,
  ...ah
], Dx = Jr((e, t) => {
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
function Ux() {
  const [e, t] = fe(void 0), [r, n] = fe(), i = J(null), s = ge((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = yy(l, c, () => {
      by(l, c, {
        placement: "bottom-start",
        middleware: [ky(), Ty()]
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
function Fx({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = Ux();
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
const zx = Nm(Dx);
function ch({ isOpen: e = !1, children: t }) {
  const r = J(null), { coords: n, placement: i } = Fx({ isOpen: e, floatingBoxRef: r }), s = Ue(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return dn(
    S(zx, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const lh = Xd(void 0);
function tl() {
  const e = Qd(lh);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function Kx(e, t) {
  const [r, n] = fe(0), [i, s] = fe(-1), o = Ue(() => e ?? [], [e]), a = {
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
function jx({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = Kx(t, r);
  return S(lh.Provider, { value: i, children: S("div", { ...n, children: e }) });
}
const uh = Jr(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = tl(), u = ge((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = ge((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return S("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function Bx({ children: e, autoIndex: t = !0, ...r }) {
  const n = J(null), { state: { activeIndex: i, menuItems: s } } = tl(), o = Ue(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Ue(() => {
    const c = o(s);
    return t ? Om.map(c, (l, u) => wm(l) && l.type === uh && l.props.index === void 0 ? qm(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return K(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), S("div", { ref: n, role: "menu", ...r, children: a });
}
const Vx = (e, t, r) => Ps(e, r).toLowerCase().includes(t.toLowerCase()), $u = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Ps = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function Wx(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? $u(r[0]) : "") : (u = n || (r.length > 0 ? $u(r[0]) : ""), d = (m, g) => Vx(m, g, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((m) => {
    try {
      return d(m, t);
    } catch (g) {
      return console.warn("Error filtering item:", m, g), !1;
    }
  }).sort((m, g) => {
    const y = (C) => (p.has(C) || p.set(C, Ps(C, f).toLowerCase()), p.get(C) ?? ""), T = a ? Ps(m, f) : y(m), v = a ? Ps(g, f) : y(g);
    for (const C of c)
      switch (C) {
        case "exact":
          if (T === l && v !== l)
            return -1;
          if (v === l && T !== l)
            return 1;
          break;
        case "startsWith":
          if (T.startsWith(l) && !v.startsWith(l))
            return -1;
          if (v.startsWith(l) && !T.startsWith(l))
            return 1;
          break;
        case "contains": {
          const A = T.indexOf(l), M = v.indexOf(l);
          if (A !== -1 && M === -1)
            return -1;
          if (M !== -1 && A === -1)
            return 1;
          if (A !== -1 && M !== -1)
            return A - M;
          break;
        }
      }
    return T.localeCompare(v);
  });
}
const ia = {
  Root: jx,
  Options: Bx,
  Option: uh
};
function Hx(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Ue(() => Wx({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function Gx() {
  const { moveUp: e, moveDown: t, select: r } = tl();
  return Ue(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const Jx = () => {
  const e = Gx(), [t] = ae();
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
    return t.registerCommand(vr, r, $e);
  }, [t, e]);
};
function Yx() {
  return Jx(), null;
}
const Xx = ["Shift", "Control", "Alt", "Meta"];
function dh(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ae(), u = s !== void 0, [d, f] = fe(""), p = u ? s ?? "" : d, m = Hx({ query: p, items: t, filterBy: "name" }), g = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return K(() => {
    a?.(p, m);
  }, [a, p, m]), K(() => l.registerCommand(vr, (y) => {
    if (u || c?.includes(y.key) || Xx.includes(y.key))
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
  }, $e), [l, u, p, o, n, c]), Te(ia.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: m, onSelectOption: (y) => g(y), children: [!u && S("input", { value: p, type: "text", disabled: !0 }), S(Yx, {}), S(ia.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((v, C) => Te(ia.Option, { index: C, children: [S("span", { className: "label", children: v.label ?? v.name }), S("span", { className: "description", children: v.description })] }, v.name)) })] });
}
function Qx({ trigger: e, items: t }) {
  const [r] = ae(), [n, i] = fe(!1), s = ge((o) => {
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
      if (O(l))
        return l;
    });
    a.read(() => {
      const l = R();
      !O(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && S(ch, { isOpen: n, children: ({ placement: o }) => S(dh, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function Zx({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: Ue(() => {
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
function Ui(e, t) {
  return `${e}:${t}`;
}
function e_(e, t) {
  K(() => {
    if (!e.hasNodes([nt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Ge(gf(e, nt, (n) => Vi(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], m = a[l]?.[d], g = c[l]?.[d];
          i.addID(l, d, f, p, m, g);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(nt, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = ie(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : _e(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!nt.isReservedType(c))
              for (const u of l) {
                let d = t.get(Ui(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Ui(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Ui(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const t_ = Jr(function({ logger: t }, r) {
  const [n] = ae(), i = Ue(() => /* @__PURE__ */ new Map(), []);
  e_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Ui(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = ie(u);
        _e(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && Ds(d));
      }
  };
  return so(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (nt.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = Zc(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), Df(p, a, c, l, u, d, f);
      }, { tag: Ea });
    },
    removeAnnotation(o, a) {
      if (nt.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Ui(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Ea });
    }
  })), null;
}), r_ = [];
function n_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = r_, onChange: n }) {
  const [i] = ae();
  return os(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(rf) && !u.has(vf) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = i_(i, s);
        d.length !== 0 && n(o, i, u, d);
      });
  }, [i, e, t, r, n]), null;
}
function i_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new wi();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = ie(i), o = s !== null && Jt(s) !== void 0;
    if (t.size === 1 && E(s) && !o && tx(s)) {
      const a = Qp(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = ie(i);
          return new wi([E(d) ? ja(d) : { insert: "" }]);
        }), l = new wi([ja(s)]), u = new wi(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = Au(r), c = Au(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const rl = "formatted", fh = "unformatted", ph = "paragraph-structure", hh = "standard", gh = "block-verse", s_ = {
  [rl]: "Formatted",
  [fh]: "Unformatted",
  [ph]: "Paragraph Structure",
  [hh]: "Standard",
  [gh]: "Block Verse"
};
function ui(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let nl, il;
function o_(e) {
  const t = mh(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  nl = e, il = t;
}
o_(rl);
const A1 = () => nl, Eo = () => il;
function mh(e) {
  let t;
  switch (e ?? nl) {
    case rl:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case fh:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case ph:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case hh:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case gh:
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
function P1(e) {
  if (!e)
    return;
  const t = Iu(e);
  return Object.keys(s_).find((r) => Ot(Iu(mh(r)), t));
}
const a_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function Iu(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...a_, ...t };
}
function Ao(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function c_(e) {
  if (e)
    return ts(e) ? St : e.markerMode === "editable" ? pt : St;
}
function ts(e) {
  return e?.verseLayout === "block";
}
function l_(e) {
  const t = [], r = e ?? il;
  return r && (t.push(`${Ry}${r.markerMode}`), r.hasSpacing && t.push(wy), r.isFormattedFont && t.push(qy)), t;
}
function u_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += d_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), p_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += h_(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), m_(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function d_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), f_(t, e.retain, e.attributes, r, n)), e.retain);
}
function f_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = De();
  function l(u) {
    if (s <= 0)
      return !0;
    if (Cr(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), p = d - f, m = Math.min(s, p);
        if (m > 0) {
          let g = u;
          const y = f > 0, T = m < d - f;
          if (y && T) {
            const [, v] = u.splitText(f);
            [g] = v.splitText(m);
          } else y ? [, g] = u.splitText(f) : T && ([g] = u.splitText(m));
          if (Vr(r)) {
            const v = g.getParent();
            if ($(v)) {
              const C = r.char;
              let A;
              Array.isArray(C) ? a >= 0 && a <= C.length - 1 && (A = C[a]) : a === 0 && (A = C);
              const M = A ? yn(A, v) : !1;
              if (M && Array.isArray(C) && C.length > 1) {
                const x = me("");
                g.replace(x);
                const F = typeof r.segment == "string" ? r.segment : void 0, L = di(C.slice(1), n, g, F);
                let H = x;
                for (const G of L)
                  H.insertAfter(G), H = G;
                x.remove(), wt(r, g);
              } else if (M)
                wt(r, g);
              else {
                g.remove();
                const x = Lu(g, r, n, i);
                if (x && x.length > 0) {
                  let F = v;
                  for (const L of x)
                    F.insertAfter(L), F = L;
                }
              }
            } else {
              const C = me("");
              g.replace(C);
              const A = Lu(g, r, n, i);
              if (A && A.length > 0) {
                let M = C;
                for (const x of A)
                  M.insertAfter(x), M = x;
                C.remove();
              } else
                C.replace(g);
            }
          } else
            wt(r, g);
          s -= m;
        }
      }
      o += d;
    } else if (At(u))
      e <= o && o < e + t && s > 0 && (Du(u, r), s -= 1), o += 1;
    else if ($(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (Vr(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            Ba(u, p.style), typeof p.cid == "string" && kt(u, mn, () => p.cid);
            const m = Le(p, Ws);
            m && Object.keys(m).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...m
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || v_(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && va(u), !0;
        }
      }
      d && va(u), a -= 1;
    } else if (Mt(u)) {
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
          Du(u, r);
        else if (sl(r)) {
          const p = kh(r.para, n);
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
function Lu(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = di(t.char, r, e, i), o = s.find($);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), wt(t, e);
    return;
  }
  const a = {};
  Ch.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), wt(t, e), s;
}
function yh(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  P(r) ? (r.setMarker(t), r.setTextContent(Oe(t))) : Gt(r) && r.getTextType() === "marker" && r.setTextContent(Oe(t) + w);
}
function Ba(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    P(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = $(e.getParent()), i = e.getFirstChild();
  Gt(i) && i.getTextType() === "marker" && i.getTextContent() === Oe(r, n) && i.setTextContent(Oe(t, n));
  const s = e.getLastChild();
  Gt(s) && s.getTextType() === "marker" && s.getTextContent() === ot(r, n) && s.setTextContent(ot(t, n));
}
function Du(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && $(e) && Vr(t)) {
      const i = Va(n);
      if (Ba(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        kt(e, mn, () => o);
      }
      const s = Le(i, Ws);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (We(e) || ye(e) || Ke(e) || j(e) || Ie(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (Ct(e) || se(e) || $(e)) && (r === "style" && se(e) ? yh(e, n) : r === "style" && $(e) ? Ba(e, n) : r === "code" && Ct(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && kt(e, jr, () => n));
  }
}
function p_(e, t, r) {
  if (t <= 0)
    return;
  const n = De();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Cr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (At(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Mt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Mt(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Vt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Ce(p)) {
            let m = i + 1;
            const g = p.getChildren();
            for (const T of g) {
              if (s <= 0)
                break;
              const v = i;
              if (i = m, o(T)) {
                i = v;
                break;
              }
              Cr(T) ? m += T.getTextContentSize() : At(T) && (m += 1), i = v;
            }
            const y = p.getChildren();
            for (const T of y)
              T.remove(), a.append(T);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Vt(), !0);
        } else se(a) ? a.replace(Vt(), !0) : a.remove();
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
function h_(e, t, r, n, i) {
  if (t === es)
    return Uu(e, r, n, i);
  if (t.endsWith(es) && !sl(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Vr(r))
        throw new Error("Text + LF should not have char attributes");
      o += Gs(e, s, r, i);
    }
    return o += Uu(e + o, r, n, i), o;
  } else return Vr(r) ? g_(e, t, r, n, i) : Gs(e, t, r, i);
}
function g_(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = me(t === "" ? Dt : t);
  wt(r, s);
  let o;
  {
    let y = function(T) {
      if (Cr(T)) {
        const v = T.getTextContentSize();
        if (e >= g && e < g + v) {
          const C = T.getParent();
          return $(C) && (o = C), !0;
        }
        g += v;
      } else if (At(T))
        g += 1;
      else if ($(T)) {
        const v = T.getChildren();
        for (const C of v)
          if (y(C))
            return !0;
      } else if (D(T)) {
        const v = T.getChildren();
        for (const C of v)
          if (y(C))
            return !0;
        Mt(T) && (g += 1);
      }
      return !1;
    };
    const m = De();
    let g = 0;
    y(m);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const m = a[0];
      m && yn(m, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (yn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = di(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find($);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Gs(e, t, void 0, i);
  const f = {};
  for (const [m, g] of Object.entries(r))
    m !== "char" && m !== "segment" && typeof g == "string" && (f[m] = g);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const m of u)
    if (!bh(e, m, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Gs(e, t, void 0, i));
}
function Gs(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = De();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Cr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = me(t);
        if (wt(r, d), u === 0)
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
    } else if (At(c))
      s += 1;
    else if ($(c)) {
      if (!o && e === s) {
        const d = me(t);
        wt(r, d);
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
        return wt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Mt(c)) {
      if (!o && e === s) {
        const d = me(t);
        wt(r, d);
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
        return wt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
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
    const c = me(t);
    wt(r, c);
    const l = Vt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function bh(e, t, r) {
  const n = De();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Vt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
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
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Vt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Cr(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (At(l))
        i += 1;
      else if ($(l)) {
        if (o(l))
          return !0;
      } else if (Mt(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (cr(u) && Mt(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (D(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return D(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Vt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Ce(a) ? cr(a) && se(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Ce(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : ($(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Ce(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function m_(e, t, r, n, i) {
  let s;
  return Dr("chapter", t) ? s = b_(t.insert.chapter, r) : Dr("verse", t) ? s = k_(t.insert.verse, r) : Dr("ms", t) ? s = T_(t.insert.ms) : Dr("note", t) ? s = Th(t, r, n, i) : Dr("unknown", t) ? s = xh(t, r, n, i) : Dr("unmatched", t) && (s = __(t.insert.unmatched, r)), s ? bh(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Uu(e, t, r, n) {
  let i;
  sl(t) ? i = kh(t.para, r) : S_(t) && (i = y_(t.book)), i ??= Vt();
  const s = i, o = se(s), a = cr(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (Cr(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (se(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const m = e - c, [g] = m > 0 ? d.splitText(m) : [void 0];
          let y, T = g?.getPreviousSibling();
          for (; T; ) {
            const v = T;
            T = T.getPreviousSibling(), y ? y.insertBefore(v) : s.append(v), y = v;
          }
          return g && s.append(g), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (At(d))
      c += 1;
    else if (Mt(d)) {
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
  return u(De()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function y_(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Wi || !r || !Ut.isValidBookCode(r))
    return;
  const n = Le(e, KT);
  return zf(r, n);
}
function kh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Le(e, zT), i = Hi(r, n);
  if (!ui(t))
    return i;
  if (t.markerMode === "editable")
    i.append(lt(r), bo());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Oe(r) + w;
    i.append(t.hasGutterParaMarkers ? lb(s) : xr("marker", s));
  }
  return i;
}
function b_(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Le(e, jT);
  let a;
  if (t.markerMode === "editable")
    a = Bf(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Ac(r, c, n, i, s, o);
  }
  return a;
}
function k_(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Le(e, BT);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Lt(r, n);
    c = ep(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Vc(n, l, i, s, o, a);
  }
  return c;
}
function T_(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Le(e, VT);
  return Af(t, r, n, s, i);
}
function Th(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Le(i.note, WT), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const g of c?.ops ?? [])
    if (typeof g.insert == "string")
      if (Vr(g.attributes)) {
        const y = di(g.attributes.char, t, me(g.insert), void 0, _h(g.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(me(g.insert));
  return oh(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function xh(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Le(i, HT), l = Ec(s, o, c), u = a?.ops ?? [];
  u.length > 0 && x_(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && kt(l, jr, () => d), l;
}
function x_(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Vr(s.attributes)) {
        const o = me(s.insert), a = di(s.attributes.char, t, o, void 0, _h(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(me(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Dr("unknown", s)) {
        const o = xh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Dr("note", s)) {
        const o = Th(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function __(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = Uc(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function _h(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Va(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function di(e, t, r, n, i, s = !1, o = !1) {
  E(r) && r.getTextContentSize() === 0 && r.setTextContent(Dt);
  const a = () => {
    o && E(r) && r.getTextContent() !== Dt && r.setTextContent(w + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Va), l = c[0], u = i?.[i.length - 1];
    if ($(u) && yn(l, u))
      return c.length > 1 ? di(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, p, m) => {
      const g = _r(p.style, Le(p, Ws));
      if (typeof p.cid == "string" && kt(g, mn, () => p.cid), n && m === c.length - 1 && kt(g, jr, () => n), f)
        if ($(f)) {
          const y = f.getMarker(), T = [];
          oa(y, T, t, !0), T.forEach((C) => g.append(C)), g.append(f);
          const v = [];
          sa(f, v, t, !0), v.forEach((C) => g.append(C));
        } else
          g.append(f);
      return g;
    }, r);
    return oa(l.style, d, t, s), sa(d, d, t, s), [d];
  } else {
    const c = Va(e), l = i?.[i.length - 1];
    if ($(l) && yn(c, l))
      return r && l.append(r), [];
    a();
    const u = _r(c.style, Le(c, Ws));
    return typeof c.cid == "string" && kt(u, mn, () => c.cid), n && kt(u, jr, () => n), r && u.append(r), oa(c.style, u, t, s), sa(u, u, t, s), [u];
  }
}
function sa(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && C_(e.getMarker(), t, r, !1, n);
}
function oa(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = lt(e, "opening", n) : r?.markerMode === "visible" && (i = xr("marker", Oe(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function C_(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = lt("", "selfClosing") : s = lt(e, "closing", i) : r?.markerMode === "visible" && (s = xr("marker", n ? ot("") : ot(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function S_(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function sl(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Vr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function v_(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function wt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        kt(t, jr, () => n);
        continue;
      }
      if (M_(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const Ch = [
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
function M_(e) {
  return Ch.includes(e);
}
function E_() {
  const [e] = ae();
  return K(() => e.registerCommand(lo, (t) => (A_(t), !1), pn), [e]), null;
}
function A_(e) {
  if (P_(e.target))
    return;
  const t = R();
  O(t) && N_(t);
}
function fi(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Ft(t))
      r++, t = t.getNextSibling(), E(t) && t.getTextContent() === w && (r++, t = t.getNextSibling());
    else if (ye(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Yt(e, r), !0);
}
function P_(e) {
  if (!nf(e))
    return !1;
  const t = us(e);
  if (!ub(t))
    return !1;
  const r = t.getParent();
  return r ? Ce(r) ? fi(r) : (Yt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function N_(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = ie(t.key);
  if (!Ce(r))
    return !1;
  const n = r.getFirstChild();
  return !Ar(n) && !Nn(n) ? !1 : fi(r);
}
function O_() {
  const [e] = ae();
  return K(() => {
    const t = (r) => r instanceof KeyboardEvent && !w_(r) || !Sh() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Ge(
      e.registerCommand(vr, t, $e),
      e.registerCommand(yc, t, $e),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm records what a cut would cover
      // and claims nothing, so either order of the two is correct: with no removal, nothing it
      // armed can be reaped.
      e.registerCommand(mr, t, yr),
      e.registerCommand(hn, t, yr),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(bc, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = us(r.target);
        return !n || !xn(n) ? !1 : (r.preventDefault(), !0);
      }, $e),
      e.registerCommand(Wm, t, $e),
      e.registerCommand(Hm, t, $e),
      e.registerCommand(Gm, t, $e)
    );
  }, [e]), null;
}
function w_(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function xn(e) {
  return Xe(e, (t) => Ie(t) || Ip(t)) ?? void 0;
}
function Sh() {
  const e = R();
  return O(e) ? xn(e.anchor.getNode()) !== void 0 || xn(e.focus.getNode()) !== void 0 : !1;
}
function q_(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function R_(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), q_(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function $_(e, t, r, n) {
  if (!J_(t) || R_(e, r))
    return !1;
  const i = r === "up" ? FT(t) : UT(t);
  return i && n.preventDefault(), i;
}
function I_({ viewOptions: e }) {
  const [t] = ae();
  return L_(t, e), null;
}
function L_(e, t) {
  K(() => {
    if (!e.hasNodes([ur, St, Se]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = R();
      if (!O(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = Fu(o), d = B_(i, zu(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return $_(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = Fu(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return zu(a, n.key) ? l = !c && Bu(i, "next") || !c && U_(i) || H_(i) || !c && s && ju(i, "next") : D_(a, n.key) && (l = !c && Bu(i, "previous") || !c && F_(i) || G_(i, t) || !c && s && ju(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(vr, r, $e);
  }, [e, t]);
}
function Fu(e) {
  return e.dir || "ltr";
}
function zu(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function D_(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Wa(e) {
  if (!$(e) || e.getMarker() !== "fp")
    return;
  const t = Jt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function U_(e) {
  const t = Wa(sp(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Yt(t, 0), !0);
}
function F_(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Wa(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Ku(n);
  }
  if (t.offset === 0) {
    const n = Wa(r);
    return n ? Ku(n) : !1;
  }
  return !1;
}
function Ku(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (E(t))
    return t.select(), !0;
  if (D(t)) {
    const i = t.getLastDescendant();
    return E(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const Js = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function z_(e) {
  if (Js)
    for (const { segment: r } of Js.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function K_(e) {
  if (Js) {
    let n = 0;
    for (const { index: i } of Js.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function vh(e) {
  for (let t = e; t; t = t.getParent())
    if (D(t) && !t.isInline())
      return t;
}
function Mh(e) {
  return !!e && P(e) && xn(e) !== void 0;
}
function ri(e) {
  return E(e) && !e.isToken() && !Mh(e) && e.getTextContentSize() > 0;
}
function Eh(e) {
  return co(e) ? !0 : j(e) ? e.getIsCollapsed() === !0 : E(e) ? (e.isToken() || Mh(e)) && e.getTextContentSize() > 0 : sf(e) ? !Ke(e) : !1;
}
function ni(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Po(e, t, r) {
  for (let n = e; n; ) {
    if (Eh(n))
      return n;
    if (D(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? ni(n, t, r);
      continue;
    }
    if (ri(n))
      return n;
    n = ni(n, t, r);
  }
}
function ol(e, t, r, n, i) {
  return r === "element" && D(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? ni(e, n, i) : r === "text" && Eh(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : ni(e, n, i);
}
function aa(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = ol(e.node, e.offset, e.kind, "previous", t), n = Po(r, "previous", t);
  if (!n)
    return e;
  if (ri(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function j_(e, t) {
  const r = e.getNode(), n = vh(r);
  if (!n)
    return;
  if (e.type === "text" && ri(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return aa({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = ol(r, e.offset, e.type, t, n), s = Po(i, t, n);
  if (!s)
    return;
  if (ri(s)) {
    const c = s.getTextContent(), l = t === "next" ? z_(c) : K_(c);
    return aa({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return aa({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function Ah(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = j_(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function ju(e, t) {
  return Ah(e, t, "collapse");
}
function B_(e, t) {
  return Ah(e, t, "extend");
}
function V_(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && ri(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = ol(n, e.offset, e.type, t, r);
  return Po(i, t, r) === void 0;
}
function W_(e, t) {
  const r = De();
  for (let n = e; n; ) {
    const i = ni(n, t, r), s = i && Po(i, t, r);
    if (!s)
      return;
    if (n = xn(s), !n)
      return s;
  }
}
function Bu(e, t) {
  const r = e.anchor, n = r.getNode();
  if (xn(n))
    return !1;
  const i = vh(n);
  if (!i || !V_(r, t, i))
    return !1;
  const s = ni(i, t, De()), o = s && xn(s);
  if (!o)
    return !1;
  const a = W_(o, t);
  if (!a)
    return !0;
  if (ri(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Vu(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function H_(e) {
  const t = e.anchor.getNode(), r = sp(e);
  if (j(r) && !P(r.getFirstChild())) {
    if (Ce(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Ce(i) && fi(i)) && i.selectStart(), !0;
      }
    } else return Gt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Ce(t) && j(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Vu(r), !0;
  }
  const n = r?.getParent();
  if (Gt(r) && j(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Vu(n) : n.selectEnd(), !0;
  }
  return !1;
}
function G_(e, t) {
  const r = Bb(e);
  if (ds(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (Ct(i.getParent()))
    return !0;
  if (j(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!Nn(o))
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
    const a = Xe(o, (c) => j(c));
    if (j(a) && a.getIsCollapsed()) {
      const c = a.getParent();
      if (!c)
        return !1;
      const l = a.getIndexWithinParent();
      return c.select(l, l), !0;
    }
  }
  const s = Jt(i);
  if (!s || s.getIsCollapsed())
    return !1;
  if (Qt(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function J_(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return ye(t) && sf(t);
}
function Y_() {
  const [e] = ae();
  return X_(e), null;
}
function X_(e) {
  K(() => {
    if (!e.hasNodes([be]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Ge(
      e.registerNodeTransform(be, eC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(be, fk),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(be, Mp),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(be, (t) => Qi(bn("char"), t)),
      e.registerNodeTransform(Fe, tC)
    );
  }, [e]);
}
function ca(e) {
  return e.getChildren().some(P);
}
function Q_(e, t) {
  const r = t.getFirstChild();
  if (!P(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (hs(n)) {
    const i = n.getTextContent();
    i.startsWith(w) && (i === w ? n.remove() : n.setTextContent(i.slice(w.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function Z_(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  P(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function eC(e) {
  if (!$(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (ca(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ne(e, mn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if ($(i) && yn({ style: t, cid: r }, i) && Ot(n, i.getUnknownAttributes()))
    if (ca(i)) {
      if (Q_(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  $(s) && yn({ style: t, cid: r }, s) && Ot(n, s.getUnknownAttributes()) && (ca(s) ? Z_(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function tC(e) {
  const t = e.getParent();
  if (!$(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(Dt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function Ph(e) {
  return e.replaceAll("	", " ");
}
const al = (e) => {
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
      n.setData(o, Ph(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(mr, s);
  });
}, cl = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", Ph(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(mr, i);
  });
};
function rC() {
  const [e] = ae();
  return K(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(qs ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), e.dispatchCommand(uo, null)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), e.dispatchCommand(hn, null)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? cl(e) : al(e)));
    };
    return e.registerRootListener((r, n) => {
      n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
    });
  }, [e]), null;
}
function nC({ logger: e }) {
  const [t] = ae();
  return K(() => Ge(
    // When the backslash or forward slash key is typed.
    t.registerCommand(vr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Jn),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(mr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Jn),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(bc, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Jn)
  ), [t, e]), null;
}
function iC({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), S("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: S("span", { className: "text", children: i.title }) });
}
function sC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return S("div", { className: "typeahead-popover", children: S("ul", { children: e.map((i, s) => S(iC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let oC = 0;
class Mi {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${oC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function aC({ options: e } = {}) {
  const [t] = ae(), [r, n] = fe(() => !t.isEditable()), [i, s] = fe({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = fe(void 0), c = Ue(() => {
    const d = [
      new Mi("Cut", {
        onSelect: () => {
          t.dispatchCommand(hn, null);
        },
        isDisabled: r
      }),
      new Mi("Copy", {
        onSelect: () => {
          t.dispatchCommand(uo, null);
        }
      }),
      new Mi("Paste", {
        onSelect: () => {
          al(t);
        },
        isDisabled: r
      }),
      new Mi("Paste as Plain Text", {
        onSelect: () => {
          cl(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new Mi(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...d, ...f];
  }, [t, r, e]), l = ge(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  K(() => {
    const d = (f) => {
      const p = f.target;
      t.getRootElement() === p || Yf(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
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
  const u = J(null);
  return os(() => {
    const d = u.current;
    if (!d)
      return;
    const { width: f, height: p } = d.getBoundingClientRect(), m = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), g = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    d.style.left = `${m}px`, d.style.top = `${g}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? fy.createPortal(S("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: S(sC, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), l());
  }, onOptionMouseEnter: (d) => {
    a(d);
  } }) }), document.body) : null;
}
function cC() {
  const [e] = ae();
  return K(() => e.registerCommand(vr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(qs ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, yr), [e]), null;
}
function lC({ isEditable: e }) {
  const [t] = ae();
  return os(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Wu(e) {
  return !!e && Nc(ie(e));
}
function Nh(e) {
  const [t] = ae(), r = J(void 0), n = ge((i) => {
    const s = R(), o = O(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = Wu(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = Co(u, d);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const p = Fb();
        i.insertAfter(p), r.current = p.getKey(), l = p.getKey();
      }
      Yt(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = ie(a);
      E(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return K(() => {
    const i = () => {
      const a = e(), c = R(), l = O(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (ir(Kr), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (fs(c) || !c.includes(Qn))
        return;
      const l = R(), u = O(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (zb(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(Qn).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Ge(t.registerCommand(Tr, () => (i(), !1), pn), t.registerCommand(kc, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Wu(a);
      }), c && t.update(() => {
        const l = ie(a);
        E(l) && l.remove();
      }, { tag: Kr }), r.current = void 0, !1;
    }, pn), t.registerNodeTransform(Fe, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function uC() {
  const e = R();
  if (!O(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!D(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!ye(i) || Co(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ye(s))
    return i;
}
function dC() {
  return Nh(uC), null;
}
function fC({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = ae();
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
          f || ir(Sa), o.setEditorState(l), o.dispatchCommand(Jm, void 0);
        }, { tag: _c });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
const la = "caller_highlight", pC = Jr(function(t, r) {
  const [n] = ae(), i = J(void 0), s = J(void 0), o = ge(() => {
    const a = i.current, c = a === void 0 ? void 0 : n.getEditorState().read(() => Ur(a)?.getChildren().find(Qt)?.getKey()), l = c ? n.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(la), l?.classList.add(la), s.current = l;
  }, [n]);
  return so(r, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : n.getEditorState().read(() => Ur(a)?.getKey()), o();
    }
  }), [n, o]), K(() => Ge(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    n.registerMutationListener(Se, (a, { prevEditorState: c, updateTags: l }) => {
      const u = i.current;
      if (u === void 0 || a.get(u) !== "destroyed")
        return;
      const d = l.has(_c) ? void 0 : c.read(() => Xc(u)), f = d === void 0 ? void 0 : n.getEditorState().read(() => Ur(d)?.getKey());
      i.current = f !== void 0 && a.get(f) === "created" ? f : void 0;
    }, { skipInitialization: !0 }),
    n.registerUpdateListener(() => o())
  ), [n, o]), K(() => () => s.current?.classList.remove(la), []), null;
});
function hC({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ae();
  return gC(t, n), mC(i, e, r, n), null;
}
function gC(e, t) {
  const r = J(void 0), n = J(void 0), i = e.noteCallers, s = e.crossRefCallers;
  K(() => {
    let o = i;
    (!o || o.length <= 0) && (o = vx), r.current !== o && (r.current = o, Hu("note-callers", o, t));
  }, [t, i]), K(() => {
    let o = s;
    (!o || o.length <= 0) && (o = Mx), n.current !== o && (n.current = o, Hu("cross-ref-callers", o, t));
  }, [t, s]);
}
function mC(e, t, r, n) {
  K(() => {
    if (!e.hasNodes([be, Se, Wt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => CC(s));
    return Ge(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Se, (s) => yC(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(be, bC),
      e.registerNodeTransform(Fe, kC),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Wt, TC),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Wt, (s, { prevEditorState: o }) => xC(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(Tr, () => _C(e, t, r, n), It),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function yC(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => Qt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    E(i) && !P(i) && i.getTextContent() !== Et(e.getCaller()) && e.insertBefore(i);
  }
}
function bC(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => Qt(o));
  if (!$(e) || !j(t) || !n)
    return;
  const i = Oc(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  E(s) ? s.getTextContent() !== w && s.setTextContent(w) : e.insertAfter(me(w));
}
function kC(e) {
  const t = Jt(e), r = t?.getChildren(), n = r?.find((o) => Qt(o));
  if (!E(e) || !j(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!P(e) && j(i) && e.getTextContent() !== w && (e.setTextContent(w), e.selectEnd()), $(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Dt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Oc(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function TC(e) {
  if (!Qt(e))
    return;
  const t = e.getNextSibling();
  !E(t) || P(t) ? e.insertAfter(me(w)) : t.getTextContent() !== w && t.setTextContent(w);
}
function xC(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = ie(r), a = o?.getParent();
      return Qt(o) && j(a) && a.getCaller() === $s;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function _C(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = R();
  if (!O(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = Xe(o, (c) => j(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = ie(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Ei(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (j(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Ei(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (j(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Ei(e, c, n);
    } else if (!a) {
      const c = Xe(o, (l) => j(l));
      if (c && c.getIsCollapsed() && Ce(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Ei(e, l, n);
      }
    }
  }
  if (Ce(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (Nn(c) && j(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Ei(e, l, n);
    }
  }
  return !1;
}
function Ei(e, t, r) {
  const n = ie(t);
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
function CC(e) {
  const t = R();
  if (!O(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (j(i) && E(s)) {
    e.preventDefault();
    const o = mc();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), ji(o);
  }
}
function Hu(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (SC(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function SC(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function No(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!P(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Ji(e);
  return r && t.push(r), t.length > 0 && t.every((n) => E(n) && n.getMode() === "token") ? t : [];
}
function vC(e) {
  const t = e.getParent();
  if (j(t))
    return No(t).some((r) => r.is(e)) ? t : void 0;
}
function Ys(e) {
  const t = No(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function MC(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function EC(e) {
  const t = Ym();
  if (!O(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= Ys(e);
  const i = MC(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= Ys(e);
}
function Ha(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = vC(t);
  if (r)
    return AC(r, t, e.offset) ? void 0 : r;
}
function AC(e, t, r) {
  const n = No(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function PC(e) {
  const t = No(e), r = t[t.length - 1];
  E(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Yt(e, Ys(e));
}
function NC(e = !1) {
  const t = R();
  if (!O(t))
    return !1;
  if (!t.isCollapsed())
    return OC(t.anchor, t.focus);
  const r = Ha(t.anchor);
  if (!r)
    return !1;
  if (!e && EC(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Yt(n, r.getIndexWithinParent());
  } else
    PC(r);
  return !0;
}
function OC(e, t) {
  const r = Ha(e), n = Ha(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && Gu(e, r, i), n && Gu(t, n, !i), !0;
}
function Gu(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), Ys(t), "element");
}
function wC() {
  const [e] = ae(), t = J(!1);
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
  }, [e]), K(() => e.registerCommand(Tr, () => (NC(t.current) && ir(Kr), !1), pn), [e]), null;
}
function qC({ onChange: e }) {
  const [t] = ae();
  return K(() => t.registerCommand(Tr, () => {
    const r = nh();
    return e?.(r), !1;
  }, It), [t, e]), null;
}
function RC() {
  const [e] = ae();
  return $C(e), null;
}
function $C(e) {
  K(() => {
    if (!e.hasNodes([Qe]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(Qe, (t) => IC(t, e));
  }, [e]);
}
function IC(e, t) {
  Xp(t, e.getKey()) && Yp(e.getFirstChild()), !(!se(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = ie(e.getKey());
    return se(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Oh({ onStateChange: e }) {
  const [t] = ae(), [r, n] = fe(t), i = J(!1), s = J(!1), o = J(void 0), a = J(void 0), c = ge(() => {
    const l = R();
    let u;
    if (O(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : Xe(d, (T) => {
        const v = T.getParent();
        return v !== null && Xm(v);
      });
      p === null && (p = d.getTopLevelElementOrThrow()), Zi(p) && (p = Xe(d, se) ?? p);
      const m = p.getKey(), g = r.getElementByKey(m), y = Wb(d, f);
      if (y && DT(y) && (u = y.getMarker()), g !== null && (se(p) || Ct(p) || ds(p))) {
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
  return K(() => t.registerCommand(Tr, (l, u) => (c(), n(u), !1), yr), [t, c]), K(() => Ge(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Qm, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), yr), r.registerCommand(Zm, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), yr)), [c, r, e]), null;
}
function LC(e) {
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
  return e ? Ce(e) ? e : Xe(e, (r) => Ce(r)) ?? void 0 : void 0;
}
function wh(e) {
  if (!O(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Wr(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function ll(e) {
  return O(e) && e.isCollapsed() && e.anchor.type === "element" || !O(e) && !of(e) ? !1 : e.getNodes().some((t) => ye(t));
}
function qh(e) {
  if (!O(e) || !e.isCollapsed())
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
function Rh(e) {
  if (!O(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Wr(r);
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
function Ju(e, t) {
  return !!Ga(e, t);
}
function Ga(e, t) {
  if (!O(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && D(n)) {
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
function Xs(e, t) {
  if (!O(e))
    return !1;
  const r = Wr(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function ua(e) {
  return ll(e) || wh(e);
}
function DC(e, t) {
  if (ll(e) || wh(e))
    return !0;
  if (!O(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return qh(e) && Xs(e, "backward") || Ju(e, "backward");
    case "deleteForward":
      return Rh(e) && Xs(e, "forward") || Ju(e, "forward");
    case "insertText":
      return !1;
  }
}
function UC(e, t) {
  if (!(!O(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Ga(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (qh(e) && Xs(e, "backward")) {
        const n = Wr(e.anchor.getNode());
        if (Ce(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Ga(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (Rh(e) && Xs(e, "forward")) {
        const i = Wr(e.anchor.getNode())?.getNextSibling();
        if (Ce(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Yu(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return of(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!O(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!O(e) || e.isCollapsed())
    return !1;
  const r = Wr(e.anchor.getNode()), n = Wr(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function $h(e) {
  if (E(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else D(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function FC(e) {
  const t = e.getPreviousSibling();
  if (!Ce(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? $h(r) : fi(t) || t.selectStart();
}
function Ih(e) {
  return ye(e) || We(e) ? [] : Ce(e) ? e.getChildren().flatMap(Ih) : [e];
}
function zC(e) {
  const t = [];
  for (const r of e) {
    const n = Ih(r);
    n.length !== 0 && (Ce(r) && t.length > 0 && t.push(me(" ")), t.push(...n));
  }
  return t;
}
function Xu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function KC(e) {
  if (Array.isArray(e)) return e;
}
function jC(e, t) {
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
function BC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function VC(e, t) {
  return KC(e) || jC(e, t) || WC(e, t) || BC();
}
function WC(e, t) {
  if (e) {
    if (typeof e == "string") return Xu(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Xu(e, t) : void 0;
  }
}
const Lh = Object.entries, Qu = Object.setPrototypeOf, HC = Object.isFrozen, GC = Object.getPrototypeOf, JC = Object.getOwnPropertyDescriptor;
let it = Object.freeze, at = Object.seal, Hn = Object.create, Dh = typeof Reflect < "u" && Reflect, Ja = Dh.apply, Ya = Dh.construct;
it || (it = function(t) {
  return t;
});
at || (at = function(t) {
  return t;
});
Ja || (Ja = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Ya || (Ya = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Bn = He(Array.prototype.forEach), YC = He(Array.prototype.lastIndexOf), Zu = He(Array.prototype.pop), Vn = He(Array.prototype.push), XC = He(Array.prototype.splice), Fr = Array.isArray, Ri = He(String.prototype.toLowerCase), da = He(String.prototype.toString), ed = He(String.prototype.match), Ai = He(String.prototype.replace), td = He(String.prototype.indexOf), QC = He(String.prototype.trim), ZC = He(Number.prototype.toString), eS = He(Boolean.prototype.toString), rd = typeof BigInt > "u" ? null : He(BigInt.prototype.toString), nd = typeof Symbol > "u" ? null : He(Symbol.prototype.toString), Ye = He(Object.prototype.hasOwnProperty), Pi = He(Object.prototype.toString), Je = He(RegExp.prototype.test), cn = tS(TypeError);
function He(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Ja(e, t, n);
  };
}
function tS(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Ya(e, r);
  };
}
function pe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ri;
  if (Qu && Qu(e, null), !Fr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (HC(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function rS(e) {
  for (let t = 0; t < e.length; t++)
    Ye(e, t) || (e[t] = null);
  return e;
}
function ct(e) {
  const t = Hn(null);
  for (const n of Lh(e)) {
    var r = VC(n, 2);
    const i = r[0], s = r[1];
    Ye(e, i) && (Fr(s) ? t[i] = rS(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ct(s) : t[i] = s);
  }
  return t;
}
function nS(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return ZC(e);
    case "boolean":
      return eS(e);
    case "bigint":
      return rd ? rd(e) : "0";
    case "symbol":
      return nd ? nd(e) : "Symbol()";
    case "undefined":
      return Pi(e);
    case "function":
    case "object": {
      if (e === null)
        return Pi(e);
      const t = e, r = Kt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Pi(n);
      }
      return Pi(e);
    }
    default:
      return Pi(e);
  }
}
function Kt(e, t) {
  for (; e !== null; ) {
    const n = JC(e, t);
    if (n) {
      if (n.get)
        return He(n.get);
      if (typeof n.value == "function")
        return He(n.value);
    }
    e = GC(e);
  }
  function r() {
    return null;
  }
  return r;
}
function iS(e) {
  try {
    return Je(e, ""), !0;
  } catch {
    return !1;
  }
}
const id = it(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), fa = it(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), pa = it(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), sS = it(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ha = it(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), oS = it(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), sd = it(["#text"]), od = it(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ga = it(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ad = it(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ss = it(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), aS = at(/{{[\w\W]*|^[\w\W]*}}/g), cS = at(/<%[\w\W]*|^[\w\W]*%>/g), lS = at(/\${[\w\W]*/g), uS = at(/^data-[\-\w.\u00B7-\uFFFF]+$/), dS = at(/^aria-[\-\w]+$/), cd = at(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), fS = at(/^(?:\w+script|data):/i), pS = at(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), hS = at(/^html$/i), gS = at(/^[a-z][.\w]*(-[.\w]+)+$/i), ld = at(/<[/\w!]/g), ud = at(/<[/\w]/g), mS = at(/<\/no(script|embed|frames)/i), yS = at(/\/>/i), vt = {
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
}, bS = function() {
  return typeof window > "u" ? null : window;
}, kS = function(t, r) {
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
}, dd = function() {
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
}, Ir = function(t, r, n, i) {
  return Ye(t, r) && Fr(t[r]) ? pe(i.base ? ct(i.base) : {}, t[r], i.transform) : n;
};
function Uh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : bS();
  const t = (I) => Uh(I);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== vt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = Kt(f, "cloneNode"), m = Kt(f, "remove"), g = Kt(f, "nextSibling"), y = Kt(f, "childNodes"), T = Kt(f, "parentNode"), v = Kt(f, "shadowRoot"), C = Kt(f, "attributes"), A = o && o.prototype ? Kt(o.prototype, "nodeType") : null, M = o && o.prototype ? Kt(o.prototype, "nodeName") : null, x = o && o.prototype ? Kt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const I = r.createElement("template");
    I.content && I.content.ownerDocument && (r = I.content.ownerDocument);
  }
  let F, L = "", H, G = !1, Q = 0;
  const le = function() {
    if (Q > 0)
      throw cn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, te = function(h) {
    le(), Q++;
    try {
      return F.createHTML(h);
    } finally {
      Q--;
    }
  }, ve = function(h) {
    le(), Q++;
    try {
      return F.createScriptURL(h);
    } finally {
      Q--;
    }
  }, Ee = function() {
    return G || (H = kS(d, i), G = !0), H;
  }, Z = r, U = Z.implementation, ee = Z.createNodeIterator, Ae = Z.createDocumentFragment, Ze = Z.getElementsByTagName, et = n.importNode;
  let ue = dd();
  t.isSupported = typeof Lh == "function" && typeof T == "function" && U && U.createHTMLDocument !== void 0;
  const tt = aS, wr = cS, gi = lS, de = uS, dt = dS, $o = fS, qn = pS, Zr = gS;
  let Be = cd, ce = null;
  const gt = pe({}, [...id, ...fa, ...pa, ...ha, ...sd]);
  let xe = null;
  const fr = pe({}, [...od, ...ga, ...ad, ...Ss]);
  let Pe = Object.seal(Hn(null, {
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
  })), pr = null, mi = null;
  const mt = Object.seal(Hn(null, {
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
  let yi = !0, bi = !0, qr = !1, Rn = !0, zt = !1, Zt = !0, er = !1, N = !1, z = null, V = null, Y = !1, he = !1, rt = !1, Nt = !1, ki = !0, Ti = !1;
  const Ol = "user-content-";
  let Io = !0, ms = !1, $n = {}, tr = null;
  const Lo = pe({}, [
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
  let wl = null;
  const ql = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Do = null;
  const Rl = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ys = "http://www.w3.org/1998/Math/MathML", bs = "http://www.w3.org/2000/svg", rr = "http://www.w3.org/1999/xhtml";
  let In = rr, Uo = !1, Fo = null;
  const hm = pe({}, [ys, bs, rr], da), $l = it(["mi", "mo", "mn", "ms", "mtext"]);
  let zo = pe({}, $l);
  const Il = it(["annotation-xml"]);
  let Ko = pe({}, Il);
  const gm = pe({}, ["title", "style", "font", "a", "script"]);
  let xi = null;
  const mm = ["application/xhtml+xml", "text/html"], ym = "text/html";
  let we = null, Ln = null;
  const bm = r.createElement("form"), Ll = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, jo = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Ln && Ln === h)
      return;
    (!h || typeof h != "object") && (h = {}), h = ct(h), xi = // eslint-disable-next-line unicorn/prefer-includes
    mm.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? ym : h.PARSER_MEDIA_TYPE, we = xi === "application/xhtml+xml" ? da : Ri, ce = Ir(h, "ALLOWED_TAGS", gt, {
      transform: we
    }), xe = Ir(h, "ALLOWED_ATTR", fr, {
      transform: we
    }), Fo = Ir(h, "ALLOWED_NAMESPACES", hm, {
      transform: da
    }), Do = Ir(h, "ADD_URI_SAFE_ATTR", Rl, {
      transform: we,
      base: Rl
    }), wl = Ir(h, "ADD_DATA_URI_TAGS", ql, {
      transform: we,
      base: ql
    }), tr = Ir(h, "FORBID_CONTENTS", Lo, {
      transform: we
    }), pr = Ir(h, "FORBID_TAGS", ct({}), {
      transform: we
    }), mi = Ir(h, "FORBID_ATTR", ct({}), {
      transform: we
    }), $n = Ye(h, "USE_PROFILES") ? h.USE_PROFILES && typeof h.USE_PROFILES == "object" ? ct(h.USE_PROFILES) : h.USE_PROFILES : !1, yi = h.ALLOW_ARIA_ATTR !== !1, bi = h.ALLOW_DATA_ATTR !== !1, qr = h.ALLOW_UNKNOWN_PROTOCOLS || !1, Rn = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, zt = h.SAFE_FOR_TEMPLATES || !1, Zt = h.SAFE_FOR_XML !== !1, er = h.WHOLE_DOCUMENT || !1, he = h.RETURN_DOM || !1, rt = h.RETURN_DOM_FRAGMENT || !1, Nt = h.RETURN_TRUSTED_TYPE || !1, Y = h.FORCE_BODY || !1, ki = h.SANITIZE_DOM !== !1, Ti = h.SANITIZE_NAMED_PROPS || !1, Io = h.KEEP_CONTENT !== !1, ms = h.IN_PLACE || !1, Be = iS(h.ALLOWED_URI_REGEXP) ? h.ALLOWED_URI_REGEXP : cd, In = typeof h.NAMESPACE == "string" ? h.NAMESPACE : rr, zo = Ye(h, "MATHML_TEXT_INTEGRATION_POINTS") && h.MATHML_TEXT_INTEGRATION_POINTS && typeof h.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ct(h.MATHML_TEXT_INTEGRATION_POINTS) : pe({}, $l), Ko = Ye(h, "HTML_INTEGRATION_POINTS") && h.HTML_INTEGRATION_POINTS && typeof h.HTML_INTEGRATION_POINTS == "object" ? ct(h.HTML_INTEGRATION_POINTS) : pe({}, Il);
    const _ = Ye(h, "CUSTOM_ELEMENT_HANDLING") && h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING == "object" ? ct(h.CUSTOM_ELEMENT_HANDLING) : Hn(null);
    if (Pe = Hn(null), Ye(_, "tagNameCheck") && Ll(_.tagNameCheck) && (Pe.tagNameCheck = _.tagNameCheck), Ye(_, "attributeNameCheck") && Ll(_.attributeNameCheck) && (Pe.attributeNameCheck = _.attributeNameCheck), Ye(_, "allowCustomizedBuiltInElements") && typeof _.allowCustomizedBuiltInElements == "boolean" && (Pe.allowCustomizedBuiltInElements = _.allowCustomizedBuiltInElements), at(Pe), zt && (bi = !1), rt && (he = !0), $n && (ce = pe({}, sd), xe = Hn(null), $n.html === !0 && (pe(ce, id), pe(xe, od)), $n.svg === !0 && (pe(ce, fa), pe(xe, ga), pe(xe, Ss)), $n.svgFilters === !0 && (pe(ce, pa), pe(xe, ga), pe(xe, Ss)), $n.mathMl === !0 && (pe(ce, ha), pe(xe, ad), pe(xe, Ss))), mt.tagCheck = null, mt.attributeCheck = null, Ye(h, "ADD_TAGS") && (typeof h.ADD_TAGS == "function" ? mt.tagCheck = h.ADD_TAGS : Fr(h.ADD_TAGS) && (ce === gt && (ce = ct(ce)), pe(ce, h.ADD_TAGS, we))), Ye(h, "ADD_ATTR") && (typeof h.ADD_ATTR == "function" ? mt.attributeCheck = h.ADD_ATTR : Fr(h.ADD_ATTR) && (xe === fr && (xe = ct(xe)), pe(xe, h.ADD_ATTR, we))), Ye(h, "ADD_URI_SAFE_ATTR") && Fr(h.ADD_URI_SAFE_ATTR) && pe(Do, h.ADD_URI_SAFE_ATTR, we), Ye(h, "FORBID_CONTENTS") && Fr(h.FORBID_CONTENTS) && (tr === Lo && (tr = ct(tr)), pe(tr, h.FORBID_CONTENTS, we)), Ye(h, "ADD_FORBID_CONTENTS") && Fr(h.ADD_FORBID_CONTENTS) && (tr === Lo && (tr = ct(tr)), pe(tr, h.ADD_FORBID_CONTENTS, we)), Io && (ce["#text"] = !0), er && pe(ce, ["html", "head", "body"]), ce.table && (pe(ce, ["tbody"]), delete pr.tbody), h.TRUSTED_TYPES_POLICY) {
      if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw cn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw cn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const q = F;
      F = h.TRUSTED_TYPES_POLICY;
      try {
        L = te("");
      } catch (B) {
        throw F = q, B;
      }
    } else h.TRUSTED_TYPES_POLICY === null ? (F = void 0, L = "") : (F === void 0 && (F = Ee()), F && typeof L == "string" && (L = te("")));
    it && it(h), Ln = h;
  }, Dl = pe({}, [...fa, ...pa, ...sS]), Ul = pe({}, [...ha, ...oS]), km = function(h, _, q) {
    return _.namespaceURI === rr ? h === "svg" : _.namespaceURI === ys ? h === "svg" && (q === "annotation-xml" || zo[q]) : !!Dl[h];
  }, Tm = function(h, _, q) {
    return _.namespaceURI === rr ? h === "math" : _.namespaceURI === bs ? h === "math" && Ko[q] : !!Ul[h];
  }, xm = function(h, _, q) {
    return _.namespaceURI === bs && !Ko[q] || _.namespaceURI === ys && !zo[q] ? !1 : !Ul[h] && (gm[h] || !Dl[h]);
  }, _m = function(h) {
    let _ = T(h);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: In,
      tagName: "template"
    });
    const q = Ri(h.tagName), B = Ri(_.tagName);
    return Fo[h.namespaceURI] ? h.namespaceURI === bs ? km(q, _, B) : h.namespaceURI === ys ? Tm(q, _, B) : h.namespaceURI === rr ? xm(q, _, B) : !!(xi === "application/xhtml+xml" && Fo[h.namespaceURI]) : !1;
  }, Rr = function(h) {
    Vn(t.removed, {
      element: h
    });
    try {
      T(h).removeChild(h);
    } catch {
      if (m(h), !T(h))
        throw cn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ks = function(h) {
    _i(h);
    const _ = y(h);
    if (_) {
      const B = [];
      Bn(_, (W) => {
        Vn(B, W);
      }), Bn(B, (W) => {
        try {
          m(W);
        } catch {
        }
      });
    }
    const q = C(h);
    if (q)
      for (let B = q.length - 1; B >= 0; --B) {
        const W = q[B], re = W && W.name;
        if (typeof re == "string")
          try {
            h.removeAttribute(re);
          } catch {
          }
      }
  }, en = function(h, _) {
    try {
      Vn(t.removed, {
        attribute: _.getAttributeNode(h),
        from: _
      });
    } catch {
      Vn(t.removed, {
        attribute: null,
        from: _
      });
    }
    if (_.removeAttribute(h), h === "is")
      if (he || rt)
        try {
          Rr(_);
        } catch {
        }
      else
        try {
          _.setAttribute(h, "");
        } catch {
        }
  }, Cm = function(h) {
    const _ = C(h);
    if (_)
      for (let q = _.length - 1; q >= 0; --q) {
        const B = _[q], W = B && B.name;
        if (!(typeof W != "string" || xe[we(W)]))
          try {
            h.removeAttribute(W);
          } catch {
          }
      }
  }, _i = function(h) {
    const _ = [h];
    for (; _.length > 0; ) {
      const q = _.pop();
      (A ? A(q) : q.nodeType) === vt.element && Cm(q);
      const W = y(q);
      if (W)
        for (let re = W.length - 1; re >= 0; --re)
          _.push(W[re]);
    }
  }, Sm = function(h) {
    if (!Zt)
      return;
    const _ = [h];
    for (; _.length > 0; ) {
      const q = _.pop(), B = A ? A(q) : q.nodeType;
      if (B === vt.processingInstruction || B === vt.comment && Je(ud, q.data)) {
        try {
          m(q);
        } catch {
        }
        continue;
      }
      if (B === vt.element) {
        const re = q, ke = we(M ? M(q) : q.nodeName);
        try {
          re.hasAttribute && re.hasAttribute("patchsrc") && re.removeAttribute("patchsrc"), re.hasAttribute && re.hasAttribute("for") && ke !== "label" && ke !== "output" && re.removeAttribute("for");
        } catch {
        }
      }
      const W = y(q);
      if (W)
        for (let re = W.length - 1; re >= 0; --re)
          _.push(W[re]);
    }
  }, Fl = function(h) {
    let _ = null, q = null;
    if (Y)
      h = "<remove></remove>" + h;
    else {
      const re = ed(h, /^[\r\n\t ]+/);
      q = re && re[0];
    }
    xi === "application/xhtml+xml" && In === rr && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const B = F ? te(h) : h;
    if (In === rr)
      try {
        _ = new u().parseFromString(B, xi);
      } catch {
      }
    if (!_ || !_.documentElement) {
      _ = U.createDocument(In, "template", null);
      try {
        _.documentElement.innerHTML = Uo ? L : B;
      } catch {
      }
    }
    const W = _.body || _.documentElement;
    return h && q && W.insertBefore(r.createTextNode(q), W.childNodes[0] || null), In === rr ? Ze.call(_, er ? "html" : "body")[0] : er ? _.documentElement : W;
  }, zl = function(h) {
    const _ = x ? x(h) : h.ownerDocument;
    return ee.call(
      _ || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Ts = function(h) {
    return h = Ai(h, tt, " "), h = Ai(h, wr, " "), h = Ai(h, gi, " "), h;
  }, Bo = function(h) {
    var _;
    h.normalize();
    const q = x ? x(h) : h.ownerDocument, B = ee.call(
      q || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let W = B.nextNode();
    for (; W; )
      W.data = Ts(W.data), W = B.nextNode();
    const re = (_ = h.querySelectorAll) === null || _ === void 0 ? void 0 : _.call(h, "template");
    re && Bn(re, (ke) => {
      Dn(ke.content) && Bo(ke.content);
    });
  }, xs = function(h) {
    const _ = M ? M(h) : null;
    return typeof _ != "string" || we(_) !== "form" ? !1 : typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    h.attributes !== C(h) || typeof h.removeAttribute != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    h.nodeType !== A(h) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, Dn = function(h) {
    if (!A || typeof h != "object" || h === null)
      return !1;
    try {
      return A(h) === vt.documentFragment;
    } catch {
      return !1;
    }
  }, Ci = function(h) {
    if (!A || typeof h != "object" || h === null)
      return !1;
    try {
      return typeof A(h) == "number";
    } catch {
      return !1;
    }
  };
  function nr(I, h, _) {
    I.length !== 0 && Bn(I, (q) => {
      q.call(t, h, _, Ln);
    });
  }
  const vm = function(h, _) {
    return !!(Zt && h.hasChildNodes() && !Ci(h.firstElementChild) && Je(ld, h.textContent) && Je(ld, h.innerHTML) || Zt && h.namespaceURI === rr && _ === "style" && Ci(h.firstElementChild) || h.nodeType === vt.processingInstruction || Zt && h.nodeType === vt.comment && Je(ud, h.data));
  }, Mm = function(h, _, q) {
    if (!pr[_] && Vl(_) && (Pe.tagNameCheck instanceof RegExp && Je(Pe.tagNameCheck, _) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(_)))
      return !1;
    if (Io && !tr[_]) {
      const B = T(h), W = y(h);
      if (W && B) {
        const re = W.length;
        for (let ke = re - 1; ke >= 0; --ke) {
          const qe = h === q ? p(W[ke], !0) : W[ke];
          B.insertBefore(qe, g(h));
        }
      }
    }
    return Rr(h), !0;
  }, Kl = function(h, _, q, B) {
    return h.length === 0 ? _ : _ === q || _ === B ? ct(_) : _;
  }, jl = function(h, _) {
    if (nr(ue.beforeSanitizeElements, h, null), h !== _ && T(h) === null)
      return ms && _i(h), !0;
    if (xs(h))
      return Rr(h), !0;
    const q = we(M ? M(h) : h.nodeName);
    if (ce = Kl(ue.uponSanitizeElement, ce, gt, z), nr(ue.uponSanitizeElement, h, {
      tagName: q,
      allowedTags: ce
    }), h !== _ && T(h) === null)
      return ms && _i(h), !0;
    if (vm(h, q))
      return Rr(h), !0;
    if (pr[q] || !(mt.tagCheck instanceof Function && mt.tagCheck(q)) && !ce[q]) {
      const W = Mm(h, q, _);
      return W === !1 && nr(ue.afterSanitizeElements, h, null), W;
    }
    if ((A ? A(h) : h.nodeType) === vt.element && !_m(h) || (q === "noscript" || q === "noembed" || q === "noframes") && Je(mS, h.innerHTML))
      return Rr(h), !0;
    if (zt && h.nodeType === vt.text) {
      const W = Ts(h.textContent);
      h.textContent !== W && (Vn(t.removed, {
        element: h.cloneNode()
      }), h.textContent = W);
    }
    return nr(ue.afterSanitizeElements, h, null), !1;
  }, Bl = function(h, _, q) {
    if (mi[_] || Zt && _ === "patchsrc" || Zt && _ === "for" && h !== "label" && h !== "output" || ki && (_ === "id" || _ === "name") && (q in r || q in bm))
      return !1;
    const B = xe[_] || mt.attributeCheck instanceof Function && mt.attributeCheck(_, h);
    if (!(bi && Je(de, _))) {
      if (!(yi && Je(dt, _))) {
        if (B) {
          if (!Do[_]) {
            if (!Je(Be, Ai(q, qn, ""))) {
              if (!((_ === "src" || _ === "xlink:href" || _ === "href") && h !== "script" && td(q, "data:") === 0 && wl[h])) {
                if (!(qr && !Je($o, Ai(q, qn, "")))) {
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
          !(Vl(h) && (Pe.tagNameCheck instanceof RegExp && Je(Pe.tagNameCheck, h) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(h)) && (Pe.attributeNameCheck instanceof RegExp && Je(Pe.attributeNameCheck, _) || Pe.attributeNameCheck instanceof Function && Pe.attributeNameCheck(_, h)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          _ === "is" && Pe.allowCustomizedBuiltInElements && (Pe.tagNameCheck instanceof RegExp && Je(Pe.tagNameCheck, q) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(q)))
        ) return !1;
      }
    }
    return !0;
  }, Em = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Vl = function(h) {
    return !Em[Ri(h)] && Je(Zr, h);
  }, Am = function(h, _, q, B) {
    if (F && typeof d == "object" && typeof d.getAttributeType == "function" && !q)
      switch (d.getAttributeType(h, _)) {
        case "TrustedHTML":
          return te(B);
        case "TrustedScriptURL":
          return ve(B);
      }
    return B;
  }, Pm = function(h, _, q, B) {
    try {
      q ? h.setAttributeNS(q, _, B) : h.setAttribute(_, B), xs(h) ? Rr(h) : Zu(t.removed);
    } catch {
      en(_, h);
    }
  }, Wl = function(h) {
    nr(ue.beforeSanitizeAttributes, h, null);
    const _ = h.attributes;
    if (!_ || xs(h))
      return;
    xe = Kl(ue.uponSanitizeAttribute, xe, fr, V);
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: xe,
      forceKeepAttr: void 0
    };
    let B = _.length;
    const W = we(h.nodeName);
    for (; B--; ) {
      const re = _[B], ke = re.name, qe = re.namespaceURI, yt = re.value, bt = we(ke), Wo = yt;
      let ft = ke === "value" ? Wo : QC(Wo);
      if (q.attrName = bt, q.attrValue = ft, q.keepAttr = !0, q.forceKeepAttr = void 0, nr(ue.uponSanitizeAttribute, h, q), ft = q.attrValue, Ti && (bt === "id" || bt === "name") && td(ft, Ol) !== 0 && (en(ke, h), ft = Ol + ft), Zt && Je(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ft)) {
        en(ke, h);
        continue;
      }
      if (bt === "attributename" && ed(ft, "href")) {
        en(ke, h);
        continue;
      }
      if (!q.forceKeepAttr) {
        if (!q.keepAttr) {
          en(ke, h);
          continue;
        }
        if (!Rn && Je(yS, ft)) {
          en(ke, h);
          continue;
        }
        if (zt && (ft = Ts(ft)), !Bl(W, bt, ft)) {
          en(ke, h);
          continue;
        }
        ft = Am(W, bt, qe, ft), ft !== Wo && Pm(h, ke, qe, ft);
      }
    }
    nr(ue.afterSanitizeAttributes, h, null);
  }, _s = function(h) {
    let _ = null;
    const q = zl(h);
    for (nr(ue.beforeSanitizeShadowDOM, h, null); _ = q.nextNode(); )
      if (nr(ue.uponSanitizeShadowNode, _, null), jl(_, h), Wl(_), Dn(_.content) && _s(_.content), (A ? A(_) : _.nodeType) === vt.element) {
        const W = v(_);
        Dn(W) && (Vo(W), _s(W));
      }
    nr(ue.afterSanitizeShadowDOM, h, null);
  }, Vo = function(h) {
    const _ = [{
      node: h,
      shadow: null
    }];
    for (; _.length > 0; ) {
      const q = _.pop();
      if (q.shadow) {
        _s(q.shadow);
        continue;
      }
      const B = q.node, re = (A ? A(B) : B.nodeType) === vt.element, ke = y(B);
      if (ke)
        for (let qe = ke.length - 1; qe >= 0; --qe)
          _.push({
            node: ke[qe],
            shadow: null
          });
      if (re) {
        const qe = M ? M(B) : null;
        if (typeof qe == "string" && we(qe) === "template") {
          const yt = B.content;
          Dn(yt) && _.push({
            node: yt,
            shadow: null
          });
        }
      }
      if (re) {
        const qe = v(B);
        Dn(qe) && _.push({
          node: null,
          shadow: qe
        }, {
          node: qe,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(I) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, q = null, B = null, W = null;
    if (Uo = !I, Uo && (I = "<!-->"), typeof I != "string" && !Ci(I) && (I = nS(I), typeof I != "string"))
      throw cn("dirty is not a string, aborting");
    if (!t.isSupported)
      return I;
    N ? (ce = z, xe = V) : jo(h), (ue.uponSanitizeElement.length > 0 || ue.uponSanitizeAttribute.length > 0) && (ce = ct(ce)), ue.uponSanitizeAttribute.length > 0 && (xe = ct(xe)), t.removed = [];
    const re = ms && typeof I != "string" && Ci(I);
    if (re) {
      Sm(I);
      const yt = M ? M(I) : I.nodeName;
      if (typeof yt == "string") {
        const bt = we(yt);
        if (!ce[bt] || pr[bt])
          throw ks(I), cn("root node is forbidden and cannot be sanitized in-place");
      }
      if (xs(I))
        throw ks(I), cn("root node is clobbered and cannot be sanitized in-place");
      try {
        Vo(I);
      } catch (bt) {
        throw ks(I), bt;
      }
    } else if (Ci(I))
      _ = Fl("<!---->"), q = _.ownerDocument.importNode(I, !0), q.nodeType === vt.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? _ = q : _.appendChild(q), Vo(q);
    else {
      if (!he && !zt && !er && // eslint-disable-next-line unicorn/prefer-includes
      I.indexOf("<") === -1)
        return F && Nt ? te(I) : I;
      if (_ = Fl(I), !_)
        return he ? null : Nt ? L : "";
    }
    _ && Y && Rr(_.firstChild);
    const ke = re ? I : _;
    try {
      const yt = zl(ke);
      for (; B = yt.nextNode(); )
        jl(B, ke), Wl(B), Dn(B.content) && _s(B.content);
    } catch (yt) {
      throw re && (ks(I), Bn(t.removed, (bt) => {
        bt.element && _i(bt.element);
      })), yt;
    }
    if (re)
      return Bn(t.removed, (yt) => {
        yt.element && _i(yt.element);
      }), zt && Bo(I), I;
    if (he) {
      if (zt && Bo(_), rt)
        for (W = Ae.call(_.ownerDocument); _.firstChild; )
          W.appendChild(_.firstChild);
      else
        W = _;
      return (xe.shadowroot || xe.shadowrootmode) && (W = et.call(n, W, !0)), W;
    }
    let qe = er ? _.outerHTML : _.innerHTML;
    return er && ce["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && Je(hS, _.ownerDocument.doctype.name) && (qe = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + qe), zt && (qe = Ts(qe)), F && Nt ? te(qe) : qe;
  }, t.setConfig = function() {
    let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    jo(I), N = !0, z = ce, V = xe;
  }, t.clearConfig = function() {
    Ln = null, N = !1, z = null, V = null, F = H, L = "";
  }, t.isValidAttribute = function(I, h, _) {
    Ln || jo({});
    const q = we(I), B = we(h);
    return Bl(q, B, _);
  }, t.addHook = function(I, h) {
    typeof h == "function" && Ye(ue, I) && Vn(ue[I], h);
  }, t.removeHook = function(I, h) {
    if (Ye(ue, I)) {
      if (h !== void 0) {
        const _ = YC(ue[I], h);
        return _ === -1 ? void 0 : XC(ue[I], _, 1)[0];
      }
      return Zu(ue[I]);
    }
  }, t.removeHooks = function(I) {
    Ye(ue, I) && (ue[I] = []);
  }, t.removeAllHooks = function() {
    ue = dd();
  }, t;
}
var TS = Uh();
function xS({ structureProtectionMode: e = "off" }) {
  const [t] = ae(), r = J(void 0), [n, i] = fe(void 0), s = ge((o) => {
    r.current = o, i(o);
  }, []);
  return K(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const m = LC(p);
      if (!m)
        return !1;
      const g = R();
      return e === "protected" ? g && DC(g, m) ? (p.preventDefault(), !0) : !1 : m !== "deleteBackward" && m !== "deleteForward" ? !1 : a(m, p);
    }, a = (p, m) => {
      const g = R(), y = r.current;
      if (y && g && Yu(g, y)) {
        if (s(void 0), m.preventDefault(), p !== y.intent)
          return !0;
        const v = ie(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (v) {
            const C = v.getParent(), A = v.getPreviousSibling(), M = v.getNextSibling();
            v.remove(), A ? $h(A) : M && E(M) ? M.select(0, 0) : C?.selectStart();
          }
        } else y.kind === "selection" ? O(g) && g.removeText() : Ce(v) && FC(v);
        return !0;
      }
      if (!g)
        return !1;
      const T = UC(g, p);
      if (T) {
        if (T.kind === "verse") {
          const v = af();
          v.add(T.node.getKey()), ji(v);
        } else {
          const v = mc();
          v.anchor.set(T.node.getKey(), 0, "element"), v.focus.set(T.node.getKey(), T.node.getChildrenSize(), "element"), ji(v);
        }
        return s({ key: T.node.getKey(), kind: T.kind, intent: p }), m.preventDefault(), !0;
      }
      if (O(g) && !g.isCollapsed() && ll(g)) {
        const v = g.getNodes().filter(ye).map((M) => M.getKey()), { anchor: C, focus: A } = g;
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
      const m = R();
      return !m || !ua(m) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, m) => {
      if (!p)
        return !1;
      const g = TS.sanitize(p), y = new DOMParser().parseFromString(g, "text/html"), T = zC(xy(t, y)), v = R();
      return O(v) && v.insertNodes(T), m.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const m = R();
      return m && ua(m) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const m = R();
      return m && ua(m) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Yu(R(), p) || s(void 0);
      });
    };
    return Ge(t.registerCommand(vr, o, $e), t.registerCommand(hn, c, $e), t.registerCommand(mr, u, $e), t.registerCommand(ey, c, $e), t.registerCommand(bc, d, $e), t.registerCommand(yc, c, $e), t.registerUpdateListener(f));
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
const N1 = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function _S({ textDirection: e }) {
  const [t] = ae();
  return CS(t, e), null;
}
function CS(e, t) {
  K(() => (fd(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && fd(e, t);
  })), [e, t]);
}
function fd(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function SS() {
  const [e] = ae();
  return vS(e), null;
}
function vS(e) {
  K(() => {
    if (!e.hasNodes([be, St, Se, Fe, pt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Ge(
      e.registerNodeTransform(Fe, MS),
      e.registerNodeTransform(Fe, (t) => ES(t, e)),
      e.registerNodeTransform(pt, pd),
      e.registerNodeTransform(St, pd),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(pt, (t) => {
        Qi(bn("va"), t), Qi(bn("vp"), t);
      })
    );
  }, [e]);
}
function MS(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || j(r) || $(n) || $(r) || _e(n) || _e(r) || Ie(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
  // splits leave runs as multiple nodes, e.g. a segmented composition node that Lexical
  // won't merge). No structural space belongs inside a run — inserting one corrupts the
  // word itself (#513, complex scripts worst). This also protects a space-only node from
  // the placeholder cleanup below: between two text nodes it is real content.
  E(r) || // An optbreak (`//`) — like a ref — is an inline UnknownNode carrying SIGNIFICANT surrounding
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
  ne(e, oe) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  je(n))
    return;
  if (ye(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  ye(r) && Wc(e);
}
function ES(e, t) {
  const r = e.getParent();
  !Ie(r) || !e.isAttached() || Xp(t, e.getKey()) && r.insertAfter(e);
}
function pd(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; _e(t); )
    t = t.getLastChild();
  ($(t) || E(t) && _e(t.getParent())) && e.insertBefore(me(" "));
}
function ul(e) {
  if (!j(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !Nc(n)) ? void 0 : e;
}
function AS(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (D(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function PS() {
  const e = R();
  if (!(!O(e) || !e.isCollapsed()))
    return ul(AS(e.anchor));
}
function NS(e) {
  const t = R();
  let r;
  return O(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Fh(e.target)), r ? ul(Xe(r, j)) : void 0;
}
function Fh(e) {
  const t = ty(e)?.anchorNode;
  if (nf(t))
    return us(t) ?? void 0;
}
function OS(e) {
  if (R())
    return;
  const t = Fh(e);
  return t ? ul(Xe(t, j)) : void 0;
}
function wS() {
  const [e] = ae(), t = Nh(PS);
  return K(() => {
    const r = (n) => {
      ir(Kr), t(n);
    };
    return Ge(e.registerCommand(Tr, () => {
      const n = OS(e.getRootElement());
      return n && r(n), !1;
    }, pn), e.registerCommand(lo, (n) => {
      const i = NS(n);
      return i && r(i), !1;
    }, pn));
  }, [e, t]), null;
}
function qS({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = Zx({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return S(Qx, { trigger: e, items: i });
}
function RS({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = Ue(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? S(LS, { trigger: e, harness: i }) : S(qS, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const $S = [" ", "*"];
function IS(e, t) {
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
function LS({ trigger: e, harness: t }) {
  const [r] = ae(), [n, i] = fe(void 0), s = J({ query: "", options: [] }), o = J(0), a = ge((f, p, m) => {
    const g = p.find((y) => y.kind === "note" && y.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = R();
      O(y) && y.insertText(`${e}${f}${m ? " " : ""}`);
    });
  }, [r, t, e]);
  K(() => Ge(r.registerCommand(vr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), ry(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = R();
          O(y) && y.insertText(e);
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
  }, $e), r.registerCommand(cf, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, Jn)), [r, e, t, n, a]);
  const c = ge(() => i(void 0), []), l = ge((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = ge((f) => {
    const { markerMenuItem: p, applyOpts: m } = f;
    t.apply(p, m);
  }, [t]), d = Ue(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    IS(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && S(ch, { isOpen: !0, children: ({ placement: f }) => S(
    dh,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? $S : void 0 },
    n.session
  ) });
}
function zh(e) {
  return e.replaceAll(w, "~").replace(/ {2,}/g, (r) => w.repeat(r.length));
}
function DS(e) {
  return e.replaceAll(w, " ").replaceAll("~", w);
}
function US(e) {
  return e.replace(/ {2,}/g, " ");
}
let Qs;
function FS(e) {
  e && (Qs = e);
}
function Kh(e) {
  return Ao(e);
}
function zS(e, t) {
  return e.isEmpty() ? ef : jh(e.toJSON(), t);
}
function jh(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && mo(r[0]) && (!r[0].children || r[0].children.length === 0))
    return ef;
  if (r.some(TT)) {
    Qs?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Bh(r), i = jt(n, t);
  return i ? { type: kr, version: br, content: i } : void 0;
}
function KS(e, t) {
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
function jS(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Me({
    type: Pt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function BS(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = op(r, a, c), Me({
    type: Pt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function VS(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = op(t, o, a), Me({
    type: pt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function WS(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !Kh(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(w) && (t[0] = a.slice(1));
  }
  return Me({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function HS(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Me({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function GS(e, t) {
  const { unknownAttributes: r } = e;
  return Me({ type: Rp, ...r, content: t });
}
function JS(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Me({ type: Lp, marker: r, ...n, content: t });
}
function YS(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Me({
    type: Up,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function XS(e, t) {
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
function Gn(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Me({
    type: t,
    marker: r === "" ? void 0 : r,
    ...mp({ sid: n, eid: i, ...s }, o)
  });
}
function QS(e) {
  return e.text;
}
function ZS(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Me({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function ev(e) {
  const { marker: t } = e;
  return {
    type: Ks,
    marker: t === "" ? void 0 : t
  };
}
function hd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function tv(e, t, r, n, i) {
  const s = Ht.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = Gn({
      type: s,
      marker: Yn,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = Gn({
      type: s,
      marker: gn,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = Gn({
      type: s,
      marker: gn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Gn({
      type: s,
      marker: Yn
    });
    i.push(l);
  }
  (!n || !Lf(n)) && t.forEach((l) => {
    const u = Gn({
      type: s,
      marker: Yn,
      eid: l
    });
    i.push(u);
  });
}
function jt(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, p = a, m = a, g = a, y = a;
    switch (a.type) {
      case Ut.getType():
        i.push(
          KS(
            l,
            jt(l.children, t)
          )
        );
        break;
      case ur.getType():
        i.push(jS(a));
        break;
      case Pt.getType():
        i.push(
          BS(
            u,
            jt(u.children, t)
          )
        );
        break;
      case St.getType():
      case pt.getType():
        i.push(VS(a));
        break;
      case be.getType():
        i.push(
          WS(
            d,
            jt(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case Qe.getType():
        i.push(
          HS(
            f,
            jt(f.children, t)
          )
        );
        break;
      case Pn.getType():
        i.push(
          GS(
            a,
            jt(a.children, t)
          )
        );
        break;
      case ai.getType():
        i.push(
          JS(
            a,
            jt(a.children, t)
          )
        );
        break;
      case ci.getType():
        i.push(
          YS(
            a,
            jt(a.children, t)
          )
        );
        break;
      case Se.getType():
        i.push(
          XS(
            p,
            jt(p.children, t, p.caller)
          )
        );
        break;
      case Pr.getType():
      case Er.getType():
      case Wt.getType():
      case lf.getType():
      case dr.getType():
        break;
      case nt.getType():
        if (s = jt(
          g.children,
          t,
          r,
          n
        ), s) {
          const T = g.typedIDs[zr];
          if (T)
            tv(s, T, o, e[c + 1], i), o = T;
          else {
            const v = s.shift();
            v && (typeof v == "string" ? hd(i, v) : i.push(v)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Ht.getType():
        i.push(Gn(a));
        break;
      case Fe.getType():
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
        m.text !== w && !m.text.startsWith(xc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[cs]?.textType !== "attribute" && (!r || m.text !== Et(r))) {
          let T = QS(m);
          Kh(t) && (n && T.startsWith(w) && (T = T.slice(1)), T = US(DS(T))), hd(i, T);
        }
        break;
      case En.getType():
        i.push(
          ZS(
            y,
            jt(y.children, t)
          )
        );
        break;
      case Or.getType():
        i.push(ev(a));
        break;
      case li.getType():
        Qs?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Qs?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function Bh(e) {
  const t = e.findIndex((r) => mo(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Bh(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const ma = {
  initialize: FS,
  deserializeEditorState: zS
}, rv = /^sd\d*$/, nv = /* @__PURE__ */ new Set([
  ...Object.entries(Aa).filter(
    ([e, t]) => t.category === k.TitlesHeadings && t.type === b.Paragraph && !rv.test(e)
  ).map(([e]) => e),
  "qa"
]);
function iv(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Kf(i) || rp(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!Vb(i)) {
      t && Zs(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Pc(i) && nv.has(i.marker) && !Zs(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Vh(i.children, t).forEach((s) => {
      const o = sv(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = ov(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function Vh(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Wh(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Lf(i)) {
      const s = Vh(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(gd(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [gd(i, c.nodes)] });
      });
      return;
    }
    t && Zs(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function gd(e, t) {
  return { ...e, children: t };
}
function Wh(e) {
  return Gp(e) && e.number !== "";
}
function Zs(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Wh(r) || Zs(r)) : !1;
}
function sv(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function ov(e) {
  return {
    type: js,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Vp
  };
}
const md = Gh([]), av = {
  type: lf.getType(),
  version: 1
};
let dl = [], X, _n, Hh, _t;
function cv(e, t) {
  dl = [], dv(e), fv(t);
}
function lv(e = 0) {
}
function uv(e, t) {
  X = t ?? Eo();
  let r;
  return e ? (e.type !== kr && _t?.warn(`This USJ type '${e.type}' didn't match the expected type '${kr}'.`), e.version !== br && _t?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${br}'.`
  ), e.content.length > 0 ? (r = ec(Lr(e.content)), ts(X) && (r = iv(r, _t))) : r = [md]) : r = [md], Hh?.(dl), {
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
function dv(e) {
  e && (_n = e), e?.addMissingComments && (Hh = e.addMissingComments);
}
function fv(e) {
  e && (_t = e);
}
function fl() {
  return Ao(X);
}
function pv(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function hv(e) {
  let { marker: t } = e;
  t !== Wi && _t?.warn(`Unexpected book marker '${t}'!`), t = t ?? Wi;
  const { code: r } = e;
  (!r || !Ut.isValidBookCode(r)) && _t?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  X?.markerMode === "editable" || X?.markerMode === "visible" ? n.push(
    Tt("marker", Oe(t) + " " + r + w)
  ) : X?.hasGutterParaMarkers && n.push(Tt("marker", Oe(t) + w, !0));
  const i = pv(e.content);
  i && n.push(ut(fl() ? zh(i) : i));
  const s = Le(e, Sb);
  return Me({
    type: Ut.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: Ff
  });
}
function gv(e) {
  let { marker: t } = e;
  t !== Us && _t?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Us;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Le(e, vb);
  let a;
  X?.markerMode === "visible" && (a = !0);
  const c = [
    ut(Lt(t, r) ?? "")
  ];
  return X?.markerMode === "editable" && wv(i, s, c), X?.markerMode === "editable" ? Me({
    type: Pt.getType(),
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
    version: jf
  }) : Me({
    type: ur.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Gf
  });
}
function mv(e) {
  let { marker: t } = e;
  t !== Fs && _t?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Fs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (c_(X) ?? St).getType(), c = X?.markerMode === "editable" ? Zf : Hp;
  let l, u;
  X?.markerMode === "editable" ? l = Lt(t, r) : X?.markerMode === "visible" && (u = !0);
  const d = Le(e, Db);
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
function yv(e, t = [], r = !1) {
  let { marker: n } = e;
  be.isValidMarker(n, _n?.extraValidMarkers) || _t?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (X?.markerMode === "editable") {
    const [a] = t;
    Zn(a) ? a.text = w + a.text : a && t.unshift(ut(w));
  }
  t.length === 0 && t.push(ut(Dt)), Xa(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Le(e, Ab);
  return s || Av(n, o, i), s || Qa(e.marker ?? "", i, !1, r), Me({
    type: be.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Hf
  });
}
function Gh(e) {
  return {
    type: Br.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Xf
  };
}
function bv(e, t = []) {
  let { marker: r } = e;
  Qe.isValidMarker(r, _n?.extraValidMarkers) || _t?.warn(`Unexpected para marker '${r}'!`), r = r ?? or;
  const n = [];
  if (ui(X) && (X?.markerMode === "editable" ? n.push(
    ht(r),
    ut(w, lr, "token")
  ) : (X?.markerMode === "visible" || X?.hasGutterParaMarkers) && n.push(
    Tt(
      "marker",
      Oe(r) + w,
      X?.hasGutterParaMarkers
    )
  )), n.push(...t), fl()) {
    const s = n.find(
      (o) => !Rc(o) && !(Zn(o) && o.text === w)
    );
    Zn(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => w.repeat(o.length)));
  }
  const i = Le(e, Ib);
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
    version: Qf
  });
}
function pl() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function kv(e, t = []) {
  const r = Le(e, Kk);
  return Me({
    ...pl(),
    type: Pn.getType(),
    unknownAttributes: r,
    children: t,
    version: $p
  });
}
function Tv(e, t = []) {
  const r = Le(e, Vk), n = e.marker ?? La, i = [];
  return X?.markerMode === "editable" ? i.push(
    ht(n),
    ut(w, lr, "token")
  ) : (X?.markerMode === "visible" || X?.hasGutterParaMarkers) && i.push(
    Tt(
      "marker",
      Oe(n) + w,
      X?.hasGutterParaMarkers
    )
  ), i.push(...t), Me({
    ...pl(),
    type: ai.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Dp
  });
}
function xv(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Da;
  X?.markerMode === "editable" ? s.push(
    ht(o),
    ut(w, lr, "token")
  ) : (X?.markerMode === "visible" || X?.hasGutterParaMarkers) && s.push(
    Tt(
      "marker",
      Oe(o) + w,
      X?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const a = Le(
    e,
    Hk
  );
  return Me({
    ...pl(),
    type: ci.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: a,
    children: s,
    version: Fp
  });
}
function _v(e, t) {
  const r = Xb(t);
  let n = () => {
  };
  return _n?.noteCallerOnClick && (n = _n.noteCallerOnClick), Me({
    type: Wt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: rh
  });
}
function Cv(e, t) {
  let { marker: r } = e;
  Se.isValidMarker(r, _n?.extraValidMarkers) || _t?.warn(`Unexpected note marker '${r}'!`), r = r ?? Sc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : el(X?.noteMode), a = Le(e, Fy), c = X?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  X?.markerMode === "editable" ? (l = ht(r, "opening", !1, c), s || (u = ht(r, "closing"))) : X?.markerMode === "visible" && (l = Tt("marker", Oe(r) + " "), s || (u = Tt("marker", ot(r))));
  const d = [];
  let f;
  if (l && d.push(l), X?.markerMode === "editable" && !o)
    f = ut(Et(i), void 0, c), d.push(f), Ov(n, d), d.push(...t);
  else {
    const p = ut(w, lr, "token");
    f = _v(i, t), d.push(f, p, ...t.flatMap(Sv(p)));
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
    version: Pf
  });
}
function Sv(e) {
  return (t) => $f(t) ? [t] : [t, e];
}
function vv(e) {
  let { marker: t } = e;
  (!t || !Ht.isValidMarker(t, _n?.extraValidMarkers)) && _t?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Le(e, Cc), s = yp(e);
  return Me({
    type: Ht.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: Mf
  });
}
function yd(e, t = []) {
  return {
    type: nt.getType(),
    typedIDs: { [zr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function Mv(e, t) {
  const { marker: r } = e, n = e.type, i = Le(e, Tb), s = [];
  if (X?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = Ap(
      n,
      r,
      i
    );
    o && s.push(Tt("marker", o)), a && s.push(Tt("attribute", a)), s.push(...t), c && s.push(Tt("attribute", c)), l && s.push(Tt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Zn(o) && (o.mode = "token");
  }), Me({
    type: En.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: Uf
  });
}
function Ev(e) {
  return {
    type: Or.getType(),
    marker: e,
    text: Di(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: X?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: wp
  };
}
function ht(e, t = "opening", r = !1, n = "normal") {
  return {
    type: dr.getType(),
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
    type: Fe.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[cs] = { textType: t }), n;
}
function Tt(e, t, r = !1) {
  const n = {
    type: Er.getType(),
    text: t,
    textType: e,
    version: Rf
  };
  return r && (n[cs] = { [Mc.key]: !0 }), n;
}
function rs(e, t) {
  return {
    type: Pr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: hp
  };
}
function Xa(e, t, r = !1) {
  X?.markerMode === "editable" ? t.push(ht(e, "opening", r)) : X?.markerMode === "visible" && t.push(Tt("marker", Oe(e, r)));
}
function Qa(e, t, r = !1, n = !1) {
  X?.markerMode === "editable" ? r ? t.push(ht("", "selfClosing")) : t.push(ht(e, "closing", n)) : X?.markerMode === "visible" && t.push(
    Tt(
      "marker",
      r ? ot("") : ot(e, n)
    )
  );
}
function Av(e, t, r) {
  if (X?.markerMode !== "editable" || !t) return;
  const n = sr(t, po(e));
  n && r.push(ut(n, "attribute"));
}
function bd(e, t) {
  if (e.type !== "ms" || X?.markerMode !== "editable" && X?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Le(e, Cc), o = bp(
    n,
    i,
    s,
    yp(e)
  ), a = sr(o, go(r ?? ""));
  if (!a) return;
  const c = w + a;
  X?.markerMode === "editable" ? t.push(ut(c, "attribute")) : t.push(Tt("attribute", c));
}
function Pv(e, t) {
  const r = e.marker ?? "";
  if (X?.markerMode === "editable") {
    const n = [];
    Xa(r, n), bd(e, n), Qa(r, n, !0), t.push(rs("milestone", n));
  } else
    Xa(r, t), bd(e, t), Qa(r, t, !0);
}
function kd(e, t, r) {
  t !== void 0 && r.push(
    rs(e, [
      ht(e, "opening"),
      ut(w + t, "attribute"),
      ht(e, "closing")
    ])
  );
}
function Nv(e, t) {
  X?.markerMode === "editable" && (kd("va", e.altnumber, t), kd("vp", e.pubnumber, t));
}
function Ov(e, t) {
  e !== void 0 && t.push(
    rs("cat", [
      ht("cat", "opening"),
      ut(w + e, "attribute"),
      ht("cat", "closing")
    ])
  );
}
function wv(e, t, r) {
  e !== void 0 && r.push(
    rs("ca", [
      ht("ca", "opening"),
      ut(w + e, "attribute"),
      ht("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    rs("cp", [
      ht("cp", "opening"),
      ut(w + t, "attribute")
    ])
  );
}
function Td(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function qv(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function xd(e, t) {
  t.marker === gn && t.sid !== void 0 && e.push(t.sid), t.marker === Yn && t.eid !== void 0 && qv(e, t.eid);
}
function Za(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [yd(o, [...n])] : o, c = e[i];
  xd(n, c);
  const l = Za(
    e.slice(i + 1, s),
    Td(t, i + 1),
    c.marker === gn,
    n
  ), u = yd(l, [...n]), d = e[s];
  xd(n, d);
  const f = Za(
    e.slice(s + 1),
    Td(t, s + 1),
    d.marker === gn,
    n
  );
  return [...a, u, ...f];
}
function Lr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(ut(fl() ? zh(i) : i));
    else if (!i.type)
      _t?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Ut.getType():
          n.push(hv(i));
          break;
        case Pt.getType():
          n.push(gv(i));
          break;
        case pt.getType():
          X?.hasSpacing || n.push(av), n.push(mv(i)), Nv(i, n);
          break;
        case be.getType():
          n.push(
            yv(i, Lr(i.content, !0), t)
          );
          break;
        case Qe.getType():
          n.push(bv(i, Lr(i.content)));
          break;
        case Se.getType():
          n.push(Cv(i, Lr(i.content)));
          break;
        case Ht.getType():
          Ef(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && dl?.push(i.sid)), n.push(vv(i)), Pv(i, n);
          break;
        case Or.getType():
          n.push(Ev(i.marker ?? ""));
          break;
        case Rp:
          n.push(kv(i, Lr(i.content)));
          break;
        case Lp:
          n.push(Tv(i, Lr(i.content)));
          break;
        case Up:
          n.push(xv(i, Lr(i.content)));
          break;
        default:
          _t?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(Mv(i, Lr(i.content)));
      }
  }), Za(n, r);
}
function ec(e) {
  const t = e.findIndex(
    (n) => Kf(n) || rp(n) || Pc(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    Bk(n)
  );
  if (t >= 0) {
    const n = ec(e.slice(0, t)), i = e[t], s = ec(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Gp(n)))
    return [Gh(e)];
  return e;
}
const Hr = {
  initialize: cv,
  reset: lv,
  serializeEditorState: uv
};
function Jh(e) {
  if (e && !P(e)) {
    if (E(e)) return e;
    if (D(e))
      for (const t of e.getChildren()) {
        const r = Jh(t);
        if (r) return r;
      }
  }
}
function Rv() {
  const e = R();
  if (!O(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((E(t) && !P(t) ? Tn(t) : void 0) && E(t)) {
      const i = me(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      ei(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Jh(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(w) ? w : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return E(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Yh(e)) {
    if (!Tn(t)) continue;
    ei(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(w) && r.setTextContent(n.slice(w.length));
  }
  return !0;
}
function Yh(e) {
  const [t, r] = tf(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!E(a) || P(a) || ne(a, oe) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function $v() {
  const e = R();
  if (!O(e)) return !1;
  const t = e.focus.getNode();
  return Tn(t) ? Ce(Fc(t)) : !1;
}
function Xh() {
  let e = R();
  if (!O(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (P(t) && !Bc(t, e.anchor.offset)) {
    const c = t.getParent();
    if ($(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = R(), !O(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!E(t) || P(t) || !Tn(t)) return !1;
  const r = Fc(t);
  if (!Ce(r)) return !1;
  const n = me(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  ei(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return $(a) ? zc(a) : o.select(0, 0), !0;
}
const Qh = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${np(De().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = R(), t = wc(e), r = Gc(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Zb(0, o);
        const a = qT(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || up(c) && qc(parseInt(n, 10), c);
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
function tc(e, t) {
  return Se.isValidMarker(e, t) || !!Qh[e] || Qe.isValidMarker(e, t) || be.isValidMarker(e, t);
}
function Iv(e, t) {
  return be.isNoteContentMarker(e) ? !1 : be.isValidMarker(e, t);
}
function Zh(e, t, r, n, i, s) {
  const o = sh(
    e,
    void 0,
    void 0,
    t,
    n ?? Eo(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function rc(e, t, r, n, i, s, o) {
  if (Se.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = Zh(
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
  const a = Kv(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = R();
      O(u) && (Bp(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = Cu(d, Hr, r), m = Go(p);
      if (O(u)) {
        const g = u.anchor.getNode(), y = g.getParent(), T = Tn(g), v = u.anchor.key === u.focus.key;
        if ($(m) && T && v && !ya(m, o))
          Uv(
            u,
            m,
            g,
            r?.markerMode === "editable"
          );
        else if ($(m) && !v && !ya(m, o) && Fv(u))
          zv(u, m, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          jv(
            u,
            () => Go(p)
          );
        else if (D(m) && !m.isInline()) {
          const C = u.insertParagraph();
          if (C) {
            const A = C.getChildren();
            m.append(...A), C.replace(m), Ce(m) && fi(m) || m.selectStart();
          }
        } else if ($(m) && E(g) && !P(g) && $(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        ya(m, o)) {
          const C = g.getParent();
          if ($(C)) {
            const A = u.anchor.offset;
            if (A === 0) g.insertBefore(m);
            else if (A >= g.getTextContentSize()) g.insertAfter(m);
            else {
              const [x] = g.splitText(A);
              x.insertAfter(m);
            }
            m.getChildren().forEach((x) => {
              P(x) && x.setNested(!0);
            });
            const M = m.getChildren().find((x) => E(x) && !P(x));
            M && E(M) ? M.select(
              M.getTextContentSize(),
              M.getTextContentSize()
            ) : m.selectEnd();
          }
        } else if (E(g) && !P(g) && u.isCollapsed() && (j(y) || $(y) && j(y.getParent()))) {
          const C = $(y) ? y : void 0, A = C ? Lv(g, u.anchor.offset) : [];
          let x = (C ?? g).insertAfter(m);
          if (Ar(m)) {
            const F = {
              ...r || Eo(),
              markerMode: "hidden"
            }, L = Cu(
              d,
              Hr,
              F
            ), H = Go(L);
            x = x.insertAfter(H);
          }
          if (A.length > 0 && C) {
            const F = eo(C).append(...A);
            x.insertAfter(F), C.isEmpty() && C.remove();
          } else E(x.getNextSibling()) || x.insertAfter(me(w));
          D(x) && x.selectEnd();
        } else if (u.insertNodes([m]), Zv(m), f) {
          const C = af();
          C.add(m.getKey()), ji(C);
        } else if ($(m)) {
          const C = m.getChildren().find((A) => E(A) && !P(A));
          C && E(C) ? C.select(
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
function Lv(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function ya(e, t) {
  return ((t ?? Bs).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function Dv(e, t) {
  t && e.getChildren().forEach((i) => {
    P(i) && i.setNested(!0);
  }), e.getChildren().some((i) => P(i) && i.getMarkerSyntax() === "closing") || e.append(lt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function Uv(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && $(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !E(r)) {
    const o = e.anchor.offset;
    if (E(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else E(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = ii(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (ei(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), E(i) && !i.getTextContent().startsWith(w) && i.setTextContent(w + i.getTextContent());
    const o = t.getChildren().find((a) => E(a) && !P(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => E(o) && !P(o));
  E(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function Fv(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (P(n) || $(n)) continue;
    if (!E(n) || n.getType() !== Fe.getType() || ne(n, oe) === "attribute") return !1;
    const i = Fc(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Tn(n) && (r = !0);
  }
  return r;
}
function zv(e, t, r) {
  const n = Yh(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Tn(a)) return;
    ei(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(w) && c.setTextContent(l.slice(w.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(w) || i.setTextContent(w + i.getTextContent());
  const s = t.getChildren().find((a) => E(a) && !P(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function Kv(e, t) {
  let r = Qh[e];
  return r || (Qe.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: Qe.getType(), marker: e, content: [] }] })
  } : be.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: be.getType(), marker: e };
      return (be.isValidFootnoteMarker(e) || be.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function jv(e, t) {
  const r = e.getNodes(), [n, i] = ii(e);
  let s;
  r.forEach((o, a) => {
    if (D(s) && s.isParentOf(o))
      return;
    const c = eg(
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
    s || (s = t(), c.insertBefore(s), l = !0, $(s) && s.getChildren().some((d) => P(d) && d.getMarkerSyntax() === "opening") && Dv(s, $(s.getParent()))), Vv(c, s, l);
  }), (E(s) || D(s)) && s.selectEnd();
}
function ii(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function hl(e) {
  return _e(e) || j(e) || j(e.getParent());
}
function eg(e, t, r, n, i) {
  if (!hl(e)) {
    if (E(e))
      return Bv(e, t, r, n, i);
    if (D(e) && e.isInline())
      return e;
  }
}
function Bv(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function Vv(e, t, r) {
  if (E(t)) {
    const n = nc(e, t);
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
    nc(e, t), r && $(t) && t.getChildren().some((s) => P(s)) && E(e) && !P(e) && !e.getTextContent().startsWith(w) && e.setTextContent(w + e.getTextContent());
  }
}
function nc(e, t) {
  let r = e.getTextContent();
  if (E(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    Wc(n), E(n) || t.insertBefore(me(" "));
  }
  return r;
}
function tg(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = Cn(u, t);
    if (!f) return !1;
    const p = E(u) ? u.getTextContentSize() : 0;
    if (_d(f, r), E(u) && u.isAttached()) {
      const m = u.getTextContentSize(), g = Math.max(p - m, 0), y = Math.max(0, Math.min(d - g, m)), T = R();
      O(T) && T.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = ii(e);
  if (!ml(n, t, s, o)) return !1;
  const a = gl(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = Cn(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = sg(d, a);
    f && (_d(f, r), l = !0);
  }), og(a, i), l;
}
function _d(e, t) {
  e.getChildren().forEach((n) => {
    Ft(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === Dt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    E(n) && i.startsWith(w) && n.setTextContent(i.slice(w.length));
  }), va(e);
}
function gl(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = eg(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    E(o) && n.push(o);
  }), n;
}
function Cn(e, t) {
  let r = e, n;
  for (; r && !Ce(r); ) {
    if (j(r)) return;
    !n && $(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function rg(e) {
  const t = Xe(
    e,
    (r) => j(r) || Ce(r)
  );
  return j(t);
}
function ng(e) {
  return e.filter(
    (t) => !hl(t) && (E(t) || D(t) && t.isInline())
  );
}
function Wv(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!E(i) || hl(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function Hv(e, t, r) {
  return e.getChildren().some(
    (n) => D(n) && t.some((i) => n.isParentOf(i)) && !ig(n, r)
  );
}
function ml(e, t, r, n, i) {
  const s = ng(e), o = Wv(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Cn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !Hv(l, s, o);
  });
}
function ig(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Ft(r));
}
function sg(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (D(u) && t.some((d) => u.isParentOf(d))) {
      if (!ig(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Ft(n[s - 1]) && (s -= 1), o < n.length - 1 && Ft(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(eo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(eo(e).append(...c)), e;
}
function eo(e) {
  return ny(e);
}
function og(e, t) {
  const r = R(), n = e[0], i = e[e.length - 1];
  if (!O(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function Gv(e, t, r) {
  if (e.isCollapsed()) {
    const l = Cn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (cu(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = ii(e);
  if (!ml(n, r, i, s, t)) return !1;
  const o = gl(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = Cn(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = sg(u, o);
    d && (cu(d, t), c = !0);
  }), c;
}
function Jv(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = ii(e);
  if (!!!i?.some(
    (y) => ml(s, y, o, a)
  ) && !Yv(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const T = R();
    O(T) && tg(T, y, n) && (l = !0);
  });
  const u = R();
  if (!O(u)) return l;
  const d = u.isBackward(), [f, p] = ii(u), m = gl(
    u.getNodes(),
    f,
    p
  );
  if (m.length === 0) return l;
  const g = m.filter(
    (y) => !rg(y) && !Cn(y, t)
  );
  return g.length > 0 && (Xv(g).forEach((y) => Qv(y, t)), l = !0), og(m, d), l;
}
function Yv(e, t) {
  return ng(e).some(
    (r) => !rg(r) && !Cn(r, t)
  );
}
function Xv(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function Qv(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => $(a) && a.getMarker() === t
  ), s = i ? eo(i) : _r(t);
  e[0].insertBefore(s), s.append(...e), i === r || nc(e[0], s);
}
function Zv(e) {
  ye(e) && (Wc(e.getPreviousSibling()), Yp(e.getNextSibling()));
}
const ag = {
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
}, Cd = "psc-active-text", vs = "psc-empty-text";
function eM({ viewOptions: e }) {
  const [t] = ae(), r = J(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return K(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(Cd), r.current = o, o && t.getElementByKey(o)?.classList.add(Cd);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        lo,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${vs}`);
          if (!c) return !1;
          const l = us(c);
          if (!ye(l)) return !1;
          const u = l.getParent();
          if (!D(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        It
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = ba(), f = tM(), p = [], m = [];
          return De().getChildren().forEach((g) => {
            if (!D(g)) return;
            const { emptyKeys: y, nonEmptyKeys: T } = nM(g);
            p.push(...y), m.push(...T);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: m };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(vs) : t.getElementByKey(d)?.classList.add(vs);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(vs));
      }),
      t.registerCommand(
        kc,
        () => (i(void 0), !1),
        It
      ),
      t.registerCommand(
        iy,
        () => {
          const o = t.getEditorState().read(ba);
          return o !== r.current && i(o), !1;
        },
        It
      )
    ];
    return i(t.getEditorState().read(ba)), Ge(...s);
  }, [t, n]), null;
}
function ba() {
  return rM(R() ?? void 0)?.getKey();
}
function tM() {
  const e = R();
  if (!O(e)) return;
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
    ye(s[a]) && (o = s[a].getKey());
  return o;
}
function rM(e) {
  if (O(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function nM(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ye(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ye(c)) break;
      if (!(Gt(c) || P(c)) && c.getTextContent().replaceAll(Rs, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const iM = /^\+/;
function yl(e, t) {
  const r = t.replace(iM, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function cg(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function lg(e, t) {
  return cg(e, t) !== void 0;
}
function ic(e, t) {
  const r = cg(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function to(e, t, r) {
  const n = D(e) ? e.getChildren().filter(P) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function sM(e, t, r, n, i) {
  const s = yl(n, t);
  if (!s) {
    to(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && to(e, "invalid", i);
}
function Fi(e, t, r, n, i) {
  for (const s of e.getChildren())
    if ($(s)) {
      const o = s.getMarker();
      i || sM(s, o, t, r, n), Fi(s, t, r, n, i || o === "xq");
    } else if (ye(s)) {
      if (i) continue;
      const o = yl(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else j(s) ? Fi(s, s.getMarker(), r, n, i) : Ie(s) || D(s) && Fi(s, t, r, n, i);
}
function oM(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = yl(e, a);
    if (!c) {
      to(o, "unknown", r), ic(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    ic(n, l) || to(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of De().getChildren())
    Ie(o) || (Ct(o) || We(o) ? i(o, o.getMarker()) : se(o) ? (i(o, o.getMarker()), s(o) && Fi(o, o.getMarker(), e, r, !1)) : D(o) && s(o) && Fi(o, "p", e, r, !1));
  return r;
}
function aM(e) {
  return !!e?.includes("(basic)");
}
function cM(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function ug(e, t) {
  return !e.startsWith("zpa") && e !== "c" && tc(e, t);
}
function bl(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function dg(e, t) {
  const r = [];
  for (const n of t) {
    const i = bl(e, n);
    i && ic(r, i);
  }
  return r;
}
function Ns(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: cM(e.description),
    isBasic: aM(e.description)
  };
}
function lM(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function sc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : lM(e.marker, t.marker);
}
function oc(e, t, r) {
  if (t.noteMarker) return [];
  const n = dg(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && ug(i.marker, r)
  ).filter((i) => {
    const s = bl(e, i.marker);
    return s !== void 0 && lg(n, s);
  }).map((i) => Ns(i, "paragraph")).sort(sc);
}
function uM(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => ug(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Ns(c, "character")).sort(sc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Ns(c, "character")),
    ...a.map((c) => Ns(c, "note"))
  ].sort(sc);
}
function dM(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function fM(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function pM(e, t, r) {
  return [
    ...dM(e, t.openCharMarkers),
    ...uM(e, t, r)
  ].sort(fM);
}
function hM(e, t, r) {
  if (t.source === "paragraph") return oc(e, t, r);
  const n = pM(e, t, r);
  return n.length > 0 ? n : oc(e, t, r);
}
function gM(e, t, r) {
  const n = oc(e, t, r), i = dg(e, t.previousParaMarkers), s = bl(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && lg(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const On = String.raw`\w-`, fg = "a-z0-9", mM = `[a-z][${fg}]*`, yM = new RegExp(
  String.raw`^\\(\+?[${On}]+)[ \u00A0]$`
), pg = new RegExp(String.raw`^\\(\+?[${On}]+)$`), bM = new RegExp(String.raw`^\\\+?[${On}]*\*$`), kM = new RegExp(
  String.raw`^\\(\+?[${On}]+)(?:[ \u00A0]|$)`
), TM = new RegExp(
  String.raw`^\\(\+?)([${On}]+)`
), xM = new RegExp(
  String.raw`\\\+?[${On}]+(?:\\?\*|[ \u00A0])`
), _M = new RegExp(
  String.raw`\\\+?[${On}]*$`
), CM = new RegExp(
  String.raw`^\\(${mM})( |$)`
), SM = new RegExp(
  String.raw`\\[${fg}+*]*$`,
  "i"
), st = "￼";
function hg(e) {
  return e.length > 1 && e.startsWith(w) && e.charAt(1) !== st ? e.slice(1) : e;
}
function Sd(e) {
  return Rc(e) ? e.markerSyntax ?? "opening" : void 0;
}
function gg(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = Hr.serializeEditorState(
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
  for (; Sd(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Et(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Sd(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function Ms(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Ni(e, t) {
  _M.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += st;
}
function $t(e) {
  return e.replaceAll(w, " ");
}
function vM(e, t, r = !1) {
  if (Ao(t)) return $t(e);
  if (e === w) return " ";
  const n = r && e.startsWith(w), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(w, "~");
}
function zi(e) {
  const t = e.getTextContent();
  return An(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function kl(e, t) {
  const r = e[t];
  if (!Ke(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = xo(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!P(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function mg(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Tl(e, t) {
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
function xl(e) {
  return !!e.getUnknownAttributes();
}
function Oo(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && fo(e);
}
function yg(e, t) {
  return Ke(e) ? !Oo(e.getMarker(), t) : j(e) || Ie(e) ? !0 : Ne(e) ? xl(e) : $(e) ? bg(e, t) : !1;
}
function bg(e, t) {
  if (uk(e)) return !0;
  const r = e.getMarker();
  return !Qy(r) && t(r) === void 0;
}
const qt = "", Rt = "";
function vd(e) {
  return e.flatMap((t) => je(t) ? t.getChildren() : [t]);
}
function $i(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Ke(s)) {
      const o = kl(e, i);
      Oo(s.getMarker(), r) && mg(o) ? (t.push(
        qt,
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
      ), $i(vd(o), t, r), t.push(Rt)) : t.push(st), i += o.length;
    } else if (Ne(s)) {
      const o = Tl(e, i);
      xl(s) ? t.push(st) : (t.push(
        qt,
        "verse",
        $t(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), $i(vd(o), t, r), t.push(Rt)), i += o.length;
    } else P(s) ? t.push(qt, "marker", $t(s.getTextContent()), Rt) : Xr(s) ? t.push(qt, "unmatched", $t(s.getTextContent()), Rt) : yg(s, r) ? t.push(st) : co(s) ? t.push(" ") : E(s) ? t.push(
      $t(
        n ? hg(zi(s)) : zi(s)
      )
    ) : $(s) ? (t.push(qt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), $i(s.getChildren(), t, r, !0), t.push(Rt)) : D(s) ? (t.push(qt, s.getType()), $i(s.getChildren(), t, r), t.push(Rt)) : t.push(st);
  }
}
function pi(e, t) {
  const r = [];
  return $i(e, r, t), r.join("");
}
function Sr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function si(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function _l(e) {
  return e.type ?? "";
}
function kg(e, t, r) {
  return t === "closing" ? ot(e, r) : t === "selfClosing" ? ot("") : Oe(e, r);
}
function ka(e, t) {
  const r = e[t];
  if (!(!r || _l(r) !== "attribute-run"))
    return Sr(r) ?? [];
}
function hi(e, t) {
  const r = [];
  return Ii(e, r, t), r.join("");
}
function Ii(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = _l(s);
    if (o === "ms") {
      const l = s, u = ka(e, i + 1);
      u && Oo(l.marker ?? "", r) ? (t.push(
        qt,
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
      ), Ii(u, t, r), t.push(Rt), i += 1) : t.push(st);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(st);
        continue;
      }
      t.push(
        qt,
        "verse",
        $t(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = ka(e, i + 1 + u);
      for (; d; )
        Ii(d, t, r), u++, d = ka(e, i + 1 + u);
      t.push(Rt), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        qt,
        "marker",
        $t(
          kg(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        Rt
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(qt, "char", JSON.stringify(l.unknownAttributes ?? null)), Ii(Sr(s) ?? [], t, r, !0), t.push(Rt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(st);
      continue;
    }
    if (o === "unmatched") {
      t.push(qt, "unmatched", $t(si(s) ?? "")), t.push(Rt);
      continue;
    }
    const a = si(s);
    if (a !== void 0) {
      t.push($t(n ? hg(a) : a));
      continue;
    }
    const c = Sr(s);
    c ? (t.push(qt, o), Ii(c, t, r), t.push(Rt)) : t.push(st);
  }
}
function wo(e) {
  let t = 0;
  for (const r of e) {
    const n = Sr(r);
    if (n) {
      t += wo(n);
      continue;
    }
    const i = si(r);
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
      Ms(t, a, $t(a.getTextContent()));
    else if (Ke(a)) {
      s();
      const c = kl(e, o);
      Oo(a.getMarker(), r) && mg(c) ? Sn(c, t, r, n) : Ni(t, [a, ...c]), o += c.length;
    } else if (j(a) || Ie(a))
      s(), Ni(t, [a]);
    else if (Ne(a)) {
      s();
      const c = Tl(e, o);
      xl(a) ? Ni(t, [a, ...c]) : (Ms(t, a, $t(zi(a))), Sn(c, t, r, n)), o += c.length;
    } else if ($(a))
      s(), bg(a, r) ? Ni(t, [a]) : ns(a, t, r, n, { pending: !0 });
    else if (co(a))
      s(), Ms(t, a, " ");
    else if (E(a)) {
      const c = An(a) || ne(a, oe) === "attribute", l = s() && !c;
      Ms(
        t,
        a,
        c ? $t(zi(a)) : vM(zi(a), n, l)
      );
    } else D(a) ? ns(a, t, r, n, i) : (s(), Ni(t, [a]));
  }
}
function Cl(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Ie(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return ns(e, i, t, r), i;
}
function Tg(e, t) {
  let r = 0;
  const n = (i) => {
    if (E(i)) {
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
    } else D(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function ac(e, t = []) {
  for (const r of e)
    Ne(r) ? t.push(r) : D(r) && ac(r.getChildren(), t);
  return t;
}
function xg(e) {
  let t = 0;
  const r = (n) => {
    if (E(n))
      for (const i of n.getTextContent()) i === st && t++;
    else D(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function wn(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === st && t++;
    else r.content && (t += wn(r.content));
  return t;
}
function MM(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), D(i) && ns(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const is = /\s/;
function _g(e) {
  return e.filter(qo).length;
}
function qo(e) {
  if (e.isSentinel) return !1;
  const t = ie(e.key);
  return E(t) && !P(t) && ne(t, oe) === "attribute";
}
function EM(e) {
  if (e.isSentinel) return !1;
  const t = ie(e.key);
  return P(t) || qo(e);
}
function Md(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && qo(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      is.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function Sl(e, t, r) {
  const n = Md(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !EM(i) ? Md(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: _g(e.spans) };
}
function Ta(e) {
  if (e.isSentinel) return !1;
  const t = ie(e.key);
  return P(t) && t.getMarkerSyntax() !== "opening";
}
function AM(e) {
  const t = ie(e.key);
  if (!P(t)) return !1;
  const r = t.getParent();
  return $(r) ? (r.selectNext(0, 0), !0) : !1;
}
function PM(e) {
  const t = ie(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = Ne(t) ? Tl(r, n) : Ke(t) ? kl(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function Cg(e, t, r) {
  const { text: n, spans: i } = e, s = _g(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && !Ta(d);
    if (!(o && qo(d))) {
      if (u) {
        if (!p) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let m = 0; m < f; m++) {
        const g = n[d.start + m];
        if (c === 0 && (l === 0 || !is.test(g))) {
          if (p) {
            a = { key: d.key, offset: m };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? is.test(g) || c-- : l--;
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
    if (d && Ta(d) && AM(d) || d?.isSentinel && PM(d)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !Ta(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = ie(a.key);
    if (d && E(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find(D)?.selectStart();
}
function Sg(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(D)?.selectStart();
      return;
    }
    Cg(MM(e, n, i), t, e);
  }
}
function NM(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(D)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  Sn(e, s, n, i), Cg({ text: s.text, spans: s.spans }, t, e);
}
function vg(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  for (const g of e) {
    const y = Cl(g, n, r);
    if (!y)
      return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
    s.text.length > 0 && (s.text += " ");
    const T = s.text.length;
    y.spans.forEach(
      (v) => s.spans.push({ ...v, start: v.start + T, end: v.end + T })
    ), s.sentinels.push(...y.sentinels), s.text += y.text;
  }
  let o, a = !1;
  const c = R();
  if (O(c)) {
    for (let g = c.anchor.getNode(); g; g = g.getParent())
      if (e.some((y) => y.is(g))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Sl(s, c.anchor.key, c.anchor.offset));
  }
  const l = Mr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (wn(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = Hr.serializeEditorState(
    { type: kr, version: br, content: l },
    r
  );
  if (hi(u.root.children, n) === pi(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((g) => oo(g));
  if (xg(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = ac(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), p = e[0];
  d.forEach((g) => p.insertBefore(g)), Tg(d, s.sentinels), e.forEach((g) => g.remove());
  const m = ac(d);
  for (let g = 0; g < f.length && g < m.length; g++)
    m[g].getNumber() === f[g].number && m[g].setSid(f[g].sid);
  return Sg(d, o, a, n, r), !0;
}
function Mg(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Se.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!P(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(Qt(s) || E(s) && s.getTextContent() === Et(e.getCaller()))) return;
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
function Eg(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(st)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function OM(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Mg(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = R();
  if (O(u)) {
    for (let A = u.anchor.getNode(); A; A = A.getParent())
      if (e.is(A)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = Sl(o, u.anchor.key, u.anchor.offset));
  }
  const d = Mr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (wn(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], m = Eg(p), g = gg(e, p, m, r);
  if (g.failure !== void 0)
    return g.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      g.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (wo(g.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const y = e.getCategory() !== m;
  if (y && e.setCategory(m), hi(g.children, n) === pi(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  const T = g.children.map((A) => oo(A));
  if (xg(T) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), y;
  const v = a[0];
  if (v)
    T.forEach((A) => v.insertBefore(A));
  else {
    const A = e.getChildren().find((M) => P(M) && M.getMarkerSyntax() === "closing");
    T.forEach((M) => A ? A.insertBefore(M) : e.append(M));
  }
  Tg(T, o.sentinels);
  const C = new Set(o.sentinels.flat().map((A) => A.getKey()));
  return a.forEach((A) => {
    C.has(A.getKey()) || A.remove();
  }), NM(T, c, l, n, r), !0;
}
const Ag = /* @__PURE__ */ new Set(["ca", "cp"]), vl = "cp";
function Pg(e) {
  if (!cr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (ns(e, t, ar, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Mr(r, { getMarker: ar }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === vl)
  );
}
function Ro(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if ($(r) && Ag.has(r.getMarker()) || Pg(r)) {
      t.push(r);
      continue;
    }
    se(r) && r.getMarker() === vl && t.push(r);
    break;
  }
  return t;
}
function wM(e) {
  const t = (n) => $(n) && Ag.has(n.getMarker()) || Pg(n);
  if (t(e) || se(e) && e.getMarker() === vl)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Re(n)) return n;
      if (!t(n)) return;
    }
}
function Ng(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Ro(e);
  if (n.some((s) => se(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Sn(e.getChildren(), i, t, r), Sn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function qM(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Ro(e)], o = Ng(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = R();
  if (O(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((g) => g.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Sl(o, l.anchor.key, l.anchor.offset));
  }
  const u = Mr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (wn(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = Hr.serializeEditorState(
    { type: kr, version: br, content: u },
    r
  );
  if (hi(f.root.children, n) === pi(s, n)) {
    let m = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), m = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), m = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const p = f.root.children.map((m) => oo(m));
  return Re(p[0]) ? (p.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), Sg(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function ss(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Ie(n)) return;
    !t && (j(n) || se(n) || Re(n)) && (t = n), sy(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? wM(r) : void 0) ?? t;
}
function Bt(e, t) {
  const r = ss(e);
  return r ? j(r) ? OM(r, t) : Re(r) ? qM(r, t) : vg([r], t) : !1;
}
const RM = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Ed(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !RM.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function Os(e, t) {
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
          t.push(`\\${n}`), Ed(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), Os(r.content, t), Ed(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Os(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), Os(r.content, t);
      }
    }
}
function Ad(e, t, r) {
  const n = ss(e);
  if (!se(n)) return !1;
  const i = R();
  if (!O(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Cl(n, t, r);
  if (!o) return !1;
  const a = Mr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    is.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  Os(a, l);
  for (const u of l.join("").replaceAll(w, "~")) {
    if (is.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function $M(e) {
  return [lt(e), bo()];
}
function Ml(e) {
  Yt(e, 2);
}
function IM(e) {
  const t = R();
  if (!O(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function El(e) {
  const t = IM(e);
  e.splice(0, 0, $M(e.getMarker())), t && Ml(e);
}
function ro(e, t) {
  e.setMarker(t), El(e), Ml(e);
}
function LM(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!An(n)) {
    if (E(n) && !P(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(w), kt(n, oe, lr), n.setMode("token");
      return;
    }
    if (fp(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(bo());
  }
}
function Pd(e, t, r) {
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
function Ki(e) {
  for (let t = e; t; t = t.getParent())
    if (se(t)) return t;
}
function DM(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Ki(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Ki(r.getNode())?.is(s) ?? !1, a = Ki(n.getNode())?.is(s) ?? !1;
    return !(o && !Pd(r, s, "start") || a && !Pd(n, s, "end"));
  });
}
function cc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = R();
  if (!(!O(r) || r.isCollapsed()))
    for (const n of DM(r)) t.add(n.getKey());
}
function UM(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = R();
  if (!O(r) || !r.isCollapsed()) return;
  const n = Ki(r.focus.getNode());
  n && t.add(n.getKey());
}
function FM(e) {
  const t = R();
  !O(t) || t.isCollapsed() || t.getNodes().some((r) => P(r)) && (cc(e), t.removeText());
}
function zM(e, t) {
  if (!ui(t.viewOptions)) return;
  if (Ft(e.getFirstChild())) {
    LM(e, t);
    return;
  }
  if (t.splitExpected.current) {
    El(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => se(o) && !o.is(e))) {
      ro(e, or), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (se(r)) {
    const n = e.getChildren().filter((a) => !An(a)), i = R();
    let s = !1;
    if (O(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Ki(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || D(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Yt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  ro(e, or);
}
function KM(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = sr(t, po(e.getMarker()));
  return r === "" ? void 0 : r;
}
function jM(e) {
  const t = e.getChildren().filter((s) => !P(s) && ne(s, oe) !== "attribute"), r = t[0];
  r && E(r) && r.getTextContent().startsWith(w) && r.setTextContent(r.getTextContent().slice(1));
  const n = KM(e);
  n && t.push(me(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function BM(e, t) {
  const r = e.getChildren(), n = r.some((s) => P(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => E(c) && !P(c) && c.getTextContent() === Et(s)
    ), a = Mn(e).some(({ node: c }) => P(c));
    if (!o && !a) return;
    r.forEach((c) => {
      P(c) || (E(c) && c.getTextContent() === Et(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => P(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function VM(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(P(r) && r.getMarkerSyntax() === "opening")) {
    jM(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => P(o) && o.getMarkerSyntax() === "closing");
  i && !s && Bt(e, t);
}
function Og(e, t, r) {
  if (!P(e.getFirstChild()) && r?.markerMode === "editable" && ui(r)) {
    ro(e, t);
    return;
  }
  yh(e, t);
}
function wg() {
  const e = R();
  if (!O(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = qg(e);
    return t !== "removed" ? t : (lc(), "handled");
  }
  return lc() ? "handled" : "declined";
}
function WM(e, t) {
  if (!t) return e;
  const r = CM.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function Nd(e, t) {
  const r = R();
  if (!O(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Rg())
      return "declined";
  } else {
    const s = qg(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => WM(s, t)
  );
  Od(n ?? "");
  for (const s of i)
    lc(), Od(s);
  return "handled";
}
function HM(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = us(n);
  if (!i) return !1;
  const s = Jt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !E(i) || P(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function qg(e) {
  const t = Jt(e.anchor.getNode()), r = Jt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), GM() ? "removed" : "needs-plain-split");
}
function Od(e) {
  if (e === "") return;
  const t = R();
  O(t) && t.insertText(e);
}
function GM() {
  const e = R();
  if (!O(e) || !e.isCollapsed()) return !1;
  const t = Jt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => P(r) && r.getMarkerSyntax() === "opening");
}
function Rg() {
  const e = R();
  if (!O(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Jt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function lc() {
  const e = R();
  if (!O(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Rg();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = _r("fp", { closed: "false" });
  i.append(lt("fp"));
  const s = E(t) && !P(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    ei(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (ek(u), i.append(u));
  }
  return i.getChildren().every(P) && i.append(me(Dt)), $g(i), !0;
}
function $g(e) {
  const t = e.getChildren().find((r) => !P(r));
  if (E(t)) {
    const r = t.getTextContent().startsWith(w) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (D(t)) {
    $g(t);
    return;
  }
  e.selectEnd();
}
function JM(e) {
  const t = [];
  let r = e;
  for (; r; )
    $(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function YM(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of De().getChildren()) {
    if (t && n.is(t)) break;
    (Ct(n) || We(n) || se(n)) && r.push(n.getMarker());
  }
  return r;
}
function XM(e) {
  let t = e;
  for (; D(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function QM(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Ft(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && An(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(XM(i)) && r === 0 : !1;
}
function ZM(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Ft(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && An(i) && t.is(i) && r === 0;
}
function eE() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function tE() {
  const e = R();
  if (!O(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = Xe(t, se), s = !n && (!i || ZM(i, t, r)) ? "paragraph" : "character", o = Jt(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: YM(t),
    openCharMarkers: JM(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Bc(t, r),
    anchorRect: eE()
  };
}
function rE() {
  const e = R();
  if (!O(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!E(t) || P(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = SM.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function nE(e, t, r) {
  Og(e, t, r), Ml(e);
}
function iE(e, t, r) {
  const n = R();
  if (!O(n)) return;
  const i = n.focus.getNode(), s = Xe(i, se);
  if (t === "backslash" && s && QM(s, i, n.focus.offset)) {
    nE(s, e, r);
    return;
  }
  Lg(e, r);
}
function sE(e, t) {
  const r = R();
  return !O(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Ig(e) {
  const t = R();
  return O(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function oE(e, t, r, n) {
  if (O(R()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && rE(), e.kind === "closeTag") {
    Ig(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && wg() !== "declined") return;
  if (e.kind === "paragraph" && Qe.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    iE(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Se.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Zh(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  rc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: ls(), reference: r });
}
function Lg(e, t) {
  const r = R();
  if (!O(r)) return;
  const n = ui(t);
  if (Xh()) {
    const s = R();
    if (!O(s)) return;
    const o = Xe(s.anchor.getNode(), se);
    if (!o) return;
    o.setMarker(e), n && El(o);
    return;
  }
  const i = r.insertParagraph();
  se(i) && (n ? ro(i, e) : i.setMarker(e));
}
function aE() {
  const [e] = ae();
  return K(() => e.registerCommand(uf, () => !0, It), [e]), null;
}
function Dg(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Paragraph : !(Se.isValidMarker(r) || fo(r));
}
function cE(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Character : !(Se.isValidMarker(r) || fo(r));
}
function lE(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = kM.exec(e)?.[1];
  return r === void 0 ? !1 : !Dg(r, t);
}
function Ug(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !lE(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!se(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (se(i))
    return [i, r];
}
function Fg(e, t) {
  const r = Ug(e, t.getMarker);
  return r !== void 0 && vg(r, t);
}
function uE(e, t) {
  const r = R();
  O(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function zg(e) {
  const t = TM.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function dE(e) {
  const t = R();
  if (!O(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = zg(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function fE(e) {
  const t = R();
  if (!O(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (j(e.getParent()) && E(r)) {
    const n = r.getNextSibling();
    if ($(n)) {
      zc(n);
      return;
    }
  }
  E(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function wd(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = zg(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  fE(e);
}
function qd(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Kg(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Bt(e, r);
  const n = dE(e), i = e.getParent();
  if (se(i)) {
    if (!Dg(t, r.getMarker))
      return Fg(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Bt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), qd(s, t) && wd(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if ($(i) || j(i)) {
    const s = t.replace(/^\+/, "");
    if (!($(i) ? cE(t, r.getMarker) : Se.isValidMarker(s)))
      return Bt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Bt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(P).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (uE(c, ot(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), qd(a, s) && wd(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Bt(e, r);
}
function pE(e) {
  const t = R();
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
function hE(e, t) {
  const r = e.getTextContent();
  if (Yr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (je(e.getParent()) && $c(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !pE(e)) {
    ak(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = yM.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), Kg(e, n[1], t);
      return;
    }
    if (bM.test(r)) {
      t.pendingKeys.delete(e.getKey()), Bt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = ot(e.getMarker(), e.getNested());
    if ($(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = R(), o = O(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = me(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function gE(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (qp(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function jg(e) {
  if (!_f(e)?.length)
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
const Oi = jg("v"), mE = jg("c"), Rd = /^[ \u00A0]*$/;
function $d(e, t, r) {
  const n = e.getNextSibling();
  if (E(n) && n.getType() === Fe.getType() && n.getMode() === "normal" && ne(n, oe) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = me(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function yE(e, t) {
  const r = e.getTextContent(), n = Lt("v", e.getNumber());
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
    if (l && Rd.test(l[2] ?? "")) {
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
      const [, l, u, d] = c, f = R(), p = O(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Lt("v", u));
      const m = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      $d(e, d, m);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Bt(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), Rd.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Lt("v", o)), a && $d(e, a, a.length);
}
const bE = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function kE(e, t) {
  const r = e.getParent();
  if (!j(r) || r.getIsCollapsed() !== !1 || !_f(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!P(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === Et(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = bE.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Et(a)), !0;
}
function TE(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!E(t)) return;
  const r = Lt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = mE.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Bg(e) {
  if (Ke(e)) {
    const { wrapper: t } = xo(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (j(e)) {
    const { wrapper: t } = Tp(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Re(e)) {
    const t = [], r = xp(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Cp(e);
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
function xE(e) {
  const t = R();
  if (!O(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Bg(e).some((n) => r.is(n));
}
function _E(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && se(e) && fp(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Yi)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && gs(l, e) && (i || xE(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Bg(e))
    l.remove(), n = !0;
  let s = !1;
  if ($(e)) {
    const l = pk(e);
    l !== void 0 && Gy(l) && (Mp(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Yi)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (cT(l, e)) {
        Qi(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Kp(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      So(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function Id(e) {
  return E(e) && e.getType() === Fe.getType() && e.getMode() === "normal" && ne(e, oe) !== "attribute";
}
function CE(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = ie(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && Id(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && Id(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Es(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = CE(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = ie(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (P(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (Yr(c)) continue;
      const m = pg.exec(p);
      c.getMarkerSyntax() === "opening" && m ? n = Kg(c, m[1], e) || n : r === "idle" && Ad(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Fg(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Bt(c, e) || n;
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
    const f = _E(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && Ad(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = Bt(u, e) || n;
    }
  }
  return n;
}
function Vg(e) {
  if (Xr(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if ($(t)) return Li(t) !== void 0;
  return !1;
}
function SE(e) {
  const t = kn(e);
  if (!t) return !1;
  const r = bn(t.kind);
  return !So(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Ld(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (Ct(t) || Ie(t) || Ip(t)) return !0;
  return !1;
}
function vE(e, t) {
  const r = e.getTextContent(), n = ne(e, oe), i = e.getParent();
  if (n !== "attribute" && Re(i)) {
    r.replace(/^[ \u00A0]+/, "") === Lt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (kE(e, t)) return;
  if (n === "attribute") {
    SE(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && Vg(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Ld(e))
      t.pendingKeys.add(e.getKey());
    else if (Sp(e)) t.pendingKeys.add(e.getKey());
    else if (Re(ss(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      $(a) && Ep(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Ld(e)) return;
  const s = R(), o = O(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (xM.test(o)) {
    if (nb(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), Bt(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function ME(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Kp(e, t);
}
function EE(e) {
  const t = (r) => {
    if (P(r)) {
      Yr(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (Xr(r)) {
      qp(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Yi)
      n.settleScope !== "none" && n.ownerPredicate(r) && (gs(n, r) || ME(n, r)) && e.pendingKeys.add(r.getKey());
    if (Ne(r)) {
      r.getTextContent() !== Lt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (E(r)) {
      if (r.getType() !== Fe.getType() || ne(r, oe) === "attribute") return;
      const n = r.getParent();
      if (Re(n)) {
        r.getTextContent() !== Lt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && Vg(r) || i.includes("//") || Sp(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if ($(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Ie(r) && !Ct(r)) {
      if (je(r) && r.getChildrenSize() === 0) {
        const n = kn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      D(r) && r.getChildren().forEach(t);
    }
  };
  De().getChildren().forEach(t);
}
function AE(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ne(e, oe);
  if (r === "attribute" || r === lr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (Ct(o) || Re(o) || Ie(o)) return;
  const n = t.startsWith(w) && $(e.getParent()), i = n ? t.slice(1) : t, s = (n ? w : "") + i.replace(/ (?=[ \u00A0])/g, w).replace(new RegExp("(?<=\\u00A0) ", "g"), w);
  s !== t && e.setTextContent(s);
}
function PE(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function uc(e) {
  const t = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!t) return;
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(t.getData("text/plain")), i = t.getData("text/html"), s = i ? r(PE(i)) : "";
  return {
    plainText: n,
    html: i,
    htmlText: s,
    text: n || s,
    isInternal: !!t.getData("application/x-lexical-editor")
  };
}
function NE(e) {
  const t = uc(e);
  if (!t || t.isInternal) return !1;
  const { plainText: r, html: n, htmlText: i } = t, s = r.includes(w) ? r : n.includes(w) || i.includes(w) ? i : void 0;
  if (!s) return !1;
  const o = R();
  if (!O(o)) return !1;
  e?.preventDefault();
  const a = s.replaceAll(w, "~"), c = a.split(`
`);
  if (c.length < 2)
    return o.insertText(a), !0;
  o.isCollapsed() || o.removeText();
  const l = ls();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(ws, void 0), u === "") return;
    const f = R();
    O(f) && f.insertText(u);
  }), !0;
}
function OE(e) {
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
function wE(e) {
  const t = R();
  if (!O(t) || t.isCollapsed()) return;
  const r = {
    "text/plain": t.getTextContent().replaceAll(w, " ")
  }, n = ly(e), i = uy(e);
  return n && (r["text/html"] = OE(n)), i && (r["application/x-lexical-editor"] = i), r;
}
function Dd(e, t, r) {
  const n = R();
  if (!O(n) || n.isCollapsed()) return !1;
  const i = wE(t);
  if (!i) return !1;
  if (!e || !("clipboardData" in e))
    return cy(t, null, i), r && n.removeText(), !0;
  if (e.clipboardData == null) return !1;
  e.preventDefault();
  for (const [s, o] of Object.entries(i)) e.clipboardData.setData(s, o);
  return r && n.removeText(), !0;
}
const Wg = df(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function xa(e) {
  const t = e();
  return ir(rf), ir(vf), t;
}
const Ud = 8, qE = 1e3;
function Wn(e, t) {
  const r = Ne(e) ? ["va", "vp"] : Ke(e) ? ["milestone"] : j(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    pT(bn(n), e, t.pendingKeys);
}
function RE(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Tc) || i.updateTags.has(Bi)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = ie(o);
        if (!c) continue;
        const l = kn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = ie(o.getKey());
        c?.isAttached() && bn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
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
    e.registerMutationListener(Fe, r),
    e.registerMutationListener(dr, r),
    e.registerMutationListener(Er, r),
    e.registerMutationListener(Pr, r)
  );
}
function $E(e, t, r) {
  return Ge(
    e.registerCommand(
      mr,
      (n) => {
        if (Sh()) return !1;
        const i = uc(n);
        if (!i) return !1;
        const s = i.text;
        if (s.includes(`
`)) {
          const a = (r ? s.replaceAll(w, "~") : s).split(`
`);
          let c = Nd(a, t.getMarker);
          if (c === "declined" && HM(e) && (c = Nd(a, t.getMarker)), c === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      yr
    ),
    e.registerCommand(
      mr,
      (n) => {
        const i = uc(n);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !$v()) return !1;
        n?.preventDefault();
        const o = R();
        return O(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(ws, void 0), a === "") return;
          const l = R();
          O(l) && l.insertText(a);
        }), !0;
      },
      $e
    ),
    e.registerCommand(
      mr,
      () => (t.splitExpected.current = !0, !1),
      It
    )
  );
}
function IE({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n
}) {
  const [i] = ae(), s = e?.markerMode === "editable", o = !!e && Ao(e), a = J(void 0), c = J(n);
  return K(() => {
    c.current = n;
    const l = a.current;
    l && (e && (l.viewOptions = e), l.getMarker = t ?? ar, l.logger = r);
  }, [e, t, r, n]), K(() => {
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
    const u = iT(i, l.pendingKeys);
    let d, f = !1, p, m = !1, g = !1, y = 0;
    const T = () => y < Ud ? !1 : (l.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Ud} consecutive mutating passes; leaving ${l.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...l.pendingKeys].join(", ")}`
    ), !0), v = (x, F = "departure") => {
      i.update(() => {
        y = xa(
          () => Es(l, x, F)
        ) ? y + 1 : 0;
      });
    };
    let C;
    const A = () => {
      if (C !== void 0 && clearTimeout(C), C = void 0, g || l.pendingKeys.size === 0) return;
      const x = c.current ?? qE;
      x < 0 || (C = setTimeout(() => {
        C = void 0, !(g || l.pendingKeys.size === 0) && (f || T() || v(void 0, "idle"));
      }, x));
    }, M = Ge(
      i.registerNodeTransform(dr, (x) => {
        if (i.isComposing()) return;
        hE(x, l);
        const F = kn(x);
        F && (Ne(F.owner) || j(F.owner) || Re(F.owner) || Ke(F.owner) && xo(F.owner).wrapper === void 0) && Wn(F.owner, l);
      }),
      i.registerNodeTransform(pt, (x) => {
        i.isComposing() || (yE(x, l), Wn(x, l));
      }),
      i.registerNodeTransform(Pt, (x) => {
        i.isComposing() || (TE(x), x.isAttached() && Wn(x, l));
      }),
      i.registerNodeTransform(Qe, (x) => {
        i.isComposing() || zM(x, l);
      }),
      i.registerNodeTransform(be, (x) => {
        if (!i.isComposing()) {
          VM(x, l);
          for (const F of ["separator", "char"])
            x.isAttached() && gs(bn(F), x) && l.pendingKeys.add(x.getKey());
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
      i.registerNodeTransform(Ht, (x) => {
        i.isComposing() || Wn(x, l);
      }),
      i.registerNodeTransform(Pr, (x) => {
        if (i.isComposing()) return;
        const F = kn(x);
        F && (Ke(F.owner) || Ne(F.owner) || j(F.owner) || Re(F.owner)) && Wn(F.owner, l);
      }),
      i.registerNodeTransform(Se, (x) => {
        i.isComposing() || (BM(x, l), Wn(x, l));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      i.registerNodeTransform(Or, (x) => {
        i.isComposing() || gE(x, l);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      i.registerNodeTransform(Fe, (x) => {
        i.isComposing() || vE(x, l);
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
        Fe,
        (x) => {
          i.getEditorState().read(() => {
            for (const [F, L] of x) {
              if (L === "destroyed") continue;
              const H = ie(F);
              !H || ne(H, oe) !== "attribute" || je(H.getParent()) || i.getElementByKey(F)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      RE(i, l),
      ...o ? [
        i.registerNodeTransform(Fe, (x) => {
          i.isComposing() || AE(x);
        }),
        i.registerCommand(
          uo,
          (x) => Dd(
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
          hn,
          (x) => Dd(
            x && typeof x == "object" && "clipboardData" in x ? x : null,
            i,
            !0
          ),
          $e
        ),
        i.registerCommand(
          mr,
          (x) => NE(
            // Same jsdom-safe duck-check as COPY above.
            x && typeof x == "object" && "clipboardData" in x ? x : null
          ),
          $e
        )
      ] : [],
      i.registerCommand(
        hn,
        () => (cc(l), !1),
        yr
      ),
      i.registerCommand(
        yc,
        () => (i.isComposing() || FM(l), !1),
        Jn
      ),
      i.registerCommand(
        lo,
        () => (f = !1, y = 0, A(), !1),
        It
      ),
      i.registerCommand(
        vr,
        (x) => (f = !1, y = 0, A(), (x.key === "Backspace" || x.key === "Delete") && (cc(l), UM(l)), i.isComposing() || !x.ctrlKey || x.altKey || x.shiftKey || x.metaKey || x.key !== " " && x.code !== "Space" || !Rv() ? !1 : (x.preventDefault(), !0)),
        $e
      ),
      i.registerCommand(
        cf,
        (x) => {
          const F = wg();
          F === "needs-plain-split" && i.dispatchCommand(ws, void 0);
          const L = F !== "declined" || hT();
          return L && x?.preventDefault(), Es(l), L;
        },
        $e
      ),
      i.registerCommand(
        ws,
        () => (l.splitExpected.current = !0, Xh()),
        $e
      ),
      $E(i, l, o),
      i.registerCommand(
        Wg,
        () => {
          if (f) return !0;
          const x = i.getRootElement(), F = x?.ownerDocument, L = !!x && !!F && F.hasFocus() && x.contains(F.activeElement);
          let H;
          if (L) {
            const G = R();
            H = O(G) ? G.focus.key : d;
          }
          return xa(() => Es(l, H)), !0;
        },
        It
      ),
      i.registerCommand(
        kc,
        () => {
          if (f) return !1;
          const x = R(), F = O(x) ? x.focus.key : d;
          return xa(() => Es(l, F)), !1;
        },
        It
      ),
      i.registerUpdateListener(({ editorState: x, tags: F }) => {
        l.splitExpected.current = !1, l.wholeParaDeleteExpected?.clear(), l.collapsedDeleteCaretParas?.clear(), l.rebuildAttempted.clear();
        const L = x.read(() => {
          const G = R();
          return O(G) ? G.focus.key : void 0;
        }), H = p;
        if (L !== void 0 && (p = L), F.has(Tc)) {
          l.pendingKeys.clear(), x.read(() => EE(l)), f = !0, L !== void 0 && (d = L);
          return;
        }
        if (F.has(Kr)) {
          L !== void 0 && L !== H && (f = !0);
          return;
        }
        f || (L !== void 0 && (d = L), A(), !(m || L === void 0) && [...l.pendingKeys].some((G) => G !== L) && (m = !0, queueMicrotask(() => {
          m = !1, !g && (T() || v(d));
        })));
      })
    );
    return () => {
      g = !0, C !== void 0 && clearTimeout(C), C = void 0, u(), M(), a.current = void 0;
    };
  }, [i, s, o]), null;
}
const LE = ["status_unknown", "status_invalid"], Hg = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, DE = Object.values(Hg);
function UE(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Hg[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Fd(e) {
  e.classList.remove(...LE), e.removeAttribute("aria-description"), DE.includes(e.title) && e.removeAttribute("title");
}
function FE(e, t, r, n) {
  const i = (a) => a.read(() => De().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = ie(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function zE(e) {
  const t = ie(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : P(t) && t.getParent()?.getKey() === r.getKey();
}
function KE({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ae(), i = e?.markerMode === "editable";
  return K(() => {
    if (!i) return;
    const s = t ?? Bs;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = oM(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || zE(f)) continue;
            const m = ie(f)?.getTopLevelElement();
            !m || l.has(m.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && Fd(p);
        }
        for (const [f, p] of d) {
          const m = n.getElementByKey(f);
          m && UE(m, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          FE(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && Fd(u);
      }
    };
  }, [n, i, t, r]), null;
}
function Gg(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Sr(o);
    a && D(s) && Gg(s.getChildren(), a, r);
  }
}
function Jg(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Sr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = si(o);
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
function Yg(e, t, r) {
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
function Xg(e, t) {
  const r = [];
  for (const n of e)
    yg(n, t) || ((se(n) || $(n)) && r.push(n.getMarker()), D(n) && r.push(...Xg(n.getChildren(), t)));
  return r;
}
function Qg(e) {
  const t = [];
  for (const r of e) {
    const n = _l(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Sr(r);
    i && t.push(...Qg(i));
  }
  return t;
}
function Al(e, t, r) {
  const n = Xg(e, r), i = Qg(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function jE(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = R();
  let n, i;
  if (O(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = ie(t.key), i = t.offset;
  else
    return;
  if (!(!E(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function Pl(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function BE(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  for (const y of e) {
    const T = Cl(y, o, s);
    if (!T) return;
    c.text.length > 0 && (c.text += " ");
    const v = c.text.length;
    T.spans.forEach(
      (C) => c.spans.push({ ...C, start: C.start + v, end: C.end + v })
    ), c.sentinels.push(...T.sentinels), c.text += T.text;
  }
  const l = i ? Pl(c, i) : c.text, u = Mr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (wn(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = Hr.serializeEditorState(
    { type: kr, version: br, content: u },
    s
  ).root.children;
  if (wo(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Yg(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (hi(d, o) === pi(e, o) && Al(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Jg(d, f);
  const m = VE(e), g = Zg(d);
  for (let y = 0; y < m.length && y < g.length; y++)
    m[y].sid !== void 0 && g[y].number === m[y].number && (g[y].sid = m[y].sid);
  return d;
}
function VE(e) {
  const t = [], r = (n) => {
    Ne(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : D(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Zg(e) {
  const t = [];
  for (const r of e) {
    tp(r) && t.push(r);
    const n = Sr(r);
    n && t.push(...Zg(n));
  }
  return t;
}
function WE(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Mg(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? Pl(l, i) : l.text, f = Mr(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (wn(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const m = p.content ?? [], g = Eg(m), y = e.getCategory() !== g, T = gg(e, m, g, s);
  if (T.failure !== void 0) {
    T.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : T.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const v = T.children;
  if (wo(v) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const C = Yg(l, t, n);
  if (!C) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (hi(v, o) === pi(u, o) && Al(u, v, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: g, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Jg(v, C), { rebuilt: v, contentNodes: u, category: g, categoryChanged: y };
}
function zd(e) {
  return e.$?.textType;
}
function HE(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && zd(e) === zd(t);
}
function GE(e) {
  const t = [];
  for (const r of e) {
    const n = ie(r);
    n?.isAttached() && Ie(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function JE(e) {
  if (!P(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!j(t)) return;
  const r = e.getTextContent();
  if (Yr(e)) return;
  const n = pg.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Kd(e, t) {
  const r = e;
  r.marker = t, r.text = kg(t, r.markerSyntax, r.nested);
}
function YE(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Se.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Kd(a.node, s);
  const c = n.getChildren().filter(P).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Kd(l.node, s);
}
function XE(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Ng(e, i, n);
  if (!o) return;
  const a = r ? Pl(o, r) : o.text, c = Mr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (wn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = Hr.serializeEditorState(
    { type: kr, version: br, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Ro(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && hi(u, i) === pi(d, i) && Al(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function QE(e, t, r, n, i) {
  const s = jE(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = (y) => {
    j(y) ? c.set(y.getKey(), y) : Re(y) ? l.set(y.getKey(), y) : o.set(y.getKey(), [y]);
  };
  for (const y of t) {
    const T = ie(y);
    if (!T?.isAttached()) continue;
    const v = ss(T);
    if (v) {
      if (d(v), P(T)) {
        const C = Ug(T, r.getMarker);
        C && a.push(C);
      }
      if (j(v)) {
        const C = JE(T);
        C && u.set(v.getKey(), C);
      }
    }
  }
  const f = /* @__PURE__ */ new Set();
  for (const y of a)
    y.some((T) => f.has(T.getKey())) || (y.forEach((T) => {
      f.add(T.getKey()), o.delete(T.getKey());
    }), o.set(y[0].getKey(), y));
  if (s) {
    const y = ss(s.node);
    y && d(y);
  }
  const p = GE(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && p.length === 0)
    return;
  const m = new Set(p.map((y) => y.getKey())), g = /* @__PURE__ */ new Map();
  Gg(De().getChildren(), e.root.children, g);
  for (const y of u.values()) YE(y, g);
  for (const y of c.values()) {
    const T = g.get(y.getKey()), v = T ? Sr(T.node) : void 0;
    if (!T || !v) continue;
    const C = WE(y, g, r, m, s);
    if (!C) continue;
    if (C.categoryChanged) {
      const x = T.node;
      C.category === void 0 ? delete x.category : x.category = C.category;
    }
    if (!C.rebuilt) continue;
    const A = g.get(C.contentNodes[0].getKey());
    if (!A) continue;
    const M = v.indexOf(A.node);
    M < 0 || v.splice(M, C.contentNodes.length, ...C.rebuilt);
  }
  for (const y of o.values()) {
    const T = g.get(y[0].getKey());
    if (!T) continue;
    const v = BE(y, g, r, m, s);
    if (!v) continue;
    const C = T.siblings.indexOf(T.node);
    C < 0 || T.siblings.splice(C, y.length, ...v);
  }
  for (const y of l.values()) {
    const T = g.get(y.getKey());
    if (!T) continue;
    const v = 1 + Ro(y).length, C = XE(y, r, s);
    if (!C) continue;
    const A = T.siblings.indexOf(T.node);
    A < 0 || T.siblings.splice(A, v, ...C);
  }
  for (const y of p) {
    const T = g.get(y.getKey());
    if (!T) continue;
    const v = T.siblings.indexOf(T.node);
    if (v < 0) continue;
    T.siblings.splice(v, 1);
    const C = T.siblings[v - 1], A = T.siblings[v], M = C && si(C), x = A && si(A);
    C && A && M !== void 0 && x !== void 0 && HE(C, A) && (C.text = M + x, T.siblings.splice(v, 1));
  }
  return jh(e, r.viewOptions);
}
function ZE({
  viewOptions: e,
  logger: t
}) {
  const [r] = ae(), n = ui(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return K(() => {
    if (n)
      return r.registerNodeTransform(
        Qe,
        (i) => eA(i, t)
      );
  }, [r, n, t]), null;
}
function eA(e, t) {
  e.getMarker() !== or && (e.isEmpty() || Ft(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${or}" (key ${e.getKey()})`
  ), e.setMarker(or)));
}
function tA({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = ae(), n = J({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return K(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, no(s, e) || rA(i, r, e);
  }, [r, e, t]), K(
    () => r.registerMutationListener(
      Ut,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = dc(r);
        jd(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: As(s) === As(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), K(() => {
    const i = (a) => a.read(
      () => new Set(
        De().getChildren().filter(We).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (dc(r) || jd(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: As(a) === As(c)
      }));
    };
    return Ge(
      ...[Pt, ur].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), K(
    () => r.registerCommand(
      Tr,
      () => {
        const i = n.current;
        return i.phase === "idle" && oA(i, iA()), !1;
      },
      It
    ),
    [r]
  ), K(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(Tr, void 0));
    };
    return Ge(
      r.registerMutationListener(St, i),
      r.registerMutationListener(pt, i)
    );
  }, [r]), K(() => {
    const i = () => uA(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function rA(e, t, r) {
  if (nA(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = dc(t);
  (!n || n === r.book) && t.update(() => em(r.chapterNum, r.verseNum), {
    tag: Kr
  });
}
function nA(e, t) {
  const r = e.pendingEchoes.findIndex((n) => no(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function iA() {
  const e = R(), t = wc(e);
  if (!t) return;
  const r = Nl(), n = ip(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = Hc(t, e), { verseNum: o, verse: a } = LT(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function dc(e) {
  return e.getEditorState().read(() => Nl()?.getCode() || void 0);
}
function Nl() {
  return De().getChildren().find(Ct);
}
function jd(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && _a(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || _a(e, t), e.phase = "navigating") : i && _a(e, t), r && r !== e.scrRef.book && nm(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function _a(e, t) {
  queueMicrotask(() => {
    t.update(
      () => em(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Kr }
    );
  });
}
function em(e, t) {
  const r = wc(R()), n = Gc(r)?.getNumber(), i = ip(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (up(n) ? rm(t, n) : parseInt(n, 10) === t))
    return;
  const o = De().getChildren(), a = np(o, e);
  if (!a) return;
  const c = Jb(o, a), l = Kb(c, !0);
  Gb(c, l);
  let u;
  try {
    u = wT(c, t);
  } catch {
    return;
  }
  u && (se(u) ? !E(u.getFirstChild()) && fi(u) || Yt(u, 0) : sA(u));
}
function sA(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ye(n)) {
    Yt(t, r);
    return;
  }
  const i = Co(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (E(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = D(n) && !j(n) ? tm(n) : void 0;
  s ? s.select(0, 0) : Yt(t, r);
}
function tm(e) {
  const t = e.getFirstChild();
  if (E(t)) return t;
  if (D(t) && !j(t)) return tm(t);
}
function As(e) {
  return e.read(() => {
    const t = De().getChildren().find(We);
    return `${Nl()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function oA(e, t) {
  e.phase !== "navigating" && t && (aA(t, e.scrRef) || nm(e, cA(t, e.scrRef)));
}
function aA(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? rm(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function rm(e, t) {
  try {
    return qc(e, t);
  } catch {
    return !1;
  }
}
function cA(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const lA = 8;
function nm(e, t) {
  return no(t, e.scrRef) || e.pendingEchoes.some((r) => no(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > lA && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function no(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function uA(e) {
  e.phase = "idle";
}
function dA(e) {
  return Ct(e) ? `${e.__code}` : Re(e) ? `${e.__marker} "${e.__number}"` : $(e) ? `${e.__marker}` : ds(e) ? `${e.__marker} "${e.__number}"` : Qt(e) ? `${e.__caller}` : Nn(e) ? `${e.__marker} "${e.__number}"` : j(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : se(e) ? `${e.__marker}` : E(e) ? `"${e.__text}"${fA(e)}` : _e(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Ne(e) ? `${e.__marker} "${e.__number}"` : "";
}
function fA(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[cs]) : "";
}
function pA() {
  const [e] = ae();
  return /* @__PURE__ */ S(
    dy,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: dA,
      editor: e
    }
  );
}
const im = Xd(null), Bd = 4;
function hA({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = J(null), s = Qd(im);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return K(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ S("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function gA({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = fe(), [s, o] = fe(), a = ge(
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
  }, l = Ue(() => ({ registerItem: a }), [a]);
  return K(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ S(im.Provider, { value: l, children: /* @__PURE__ */ S("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function mA({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = J(null), c = J(null), [l, u] = fe(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return K(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: m, left: g } = f.getBoundingClientRect();
      p.style.top = `${m + f.offsetHeight + Bd}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
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
          const { top: g } = p.getBoundingClientRect(), y = g + p.offsetHeight + Bd;
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
      /* @__PURE__ */ S(gA, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const fc = {
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
}, pc = {
  ...fc,
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
function yA({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ S(
    mA,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + bA(t),
      buttonLabel: kA(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(fc).map((n) => /* @__PURE__ */ Te(
        hA,
        {
          className: "item block-marker " + TA(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ S("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ S("span", { className: "text usfm_" + n, children: fc[n] })
          ]
        },
        n
      ))
    }
  );
}
function bA(e) {
  return e && e in pc ? e : "ban";
}
function kA(e) {
  return e && e in pc ? pc[e] : "No Style";
}
function TA(e) {
  return e ? "active dropdown-item-active" : "";
}
function Vd() {
  return /* @__PURE__ */ S("div", { className: "divider" });
}
const xA = Jr(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ae(), [o, a] = fe(s), [c, l] = fe(), [u, d] = fe(!1), [f, p] = fe(!1), m = ge(
    ({
      canUndo: g,
      canRedo: y,
      blockMarker: T,
      contextMarker: v
    }) => {
      d(g), p(y), l(T), n?.({
        canUndo: g,
        canRedo: y,
        blockMarker: T,
        contextMarker: v
      });
    },
    [n]
  );
  return K(() => s.registerCommand(
    Tr,
    (g, y) => (a(y), !1),
    yr
  ), [s]), /* @__PURE__ */ Te(fn, { children: [
    /* @__PURE__ */ S(Oh, { onStateChange: m }),
    /* @__PURE__ */ Te("div", { className: "toolbar", children: [
      /* @__PURE__ */ S(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(ff, void 0);
          },
          title: qs ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(pf, void 0);
          },
          title: qs ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ S("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ S(Vd, {}),
      o === s && /* @__PURE__ */ Te(fn, { children: [
        /* @__PURE__ */ S(
          yA,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ S(Vd, {})
      ] }),
      /* @__PURE__ */ S("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), _A = Eo(), CA = {}, SA = {};
function vA() {
  return /* @__PURE__ */ S("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
const sm = Jr(function({
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
  const d = J(null), f = J(null), p = J(null), m = J(null), g = J(t), y = J(void 0), T = J(void 0), v = J(void 0), C = J(void 0), A = J(!1), [M, x] = fe(t), [F, L] = fe(0), [H, G] = fe(), {
    isReadonly: Q = !1,
    structureProtectionMode: le = "off",
    hasExternalUI: te = !1,
    hasSpellCheck: ve = !1,
    textDirection: Ee = "ltr",
    markerMenuTrigger: Z = "\\",
    view: U,
    nodes: ee,
    debug: Ae = !1,
    contextMenu: Ze,
    styleInfo: et,
    markerSettleDelayMs: ue
  } = a ?? SA, tt = U ?? _A, wr = ts(tt) && (tt.markerMode !== "hidden" || !tt.hasSpacing || tt.hasGutterParaMarkers || tt.hasActiveTextFocusBox) ? {
    ...tt,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : tt, gi = J(wr);
  Ot(gi.current, wr) || (gi.current = wr);
  const de = gi.current, dt = Ue(() => ee ?? CA, [ee]), $o = Ue(() => Ze, [Ze]), qn = Ue(
    () => CT(et ?? Bs),
    [et]
  ), Zr = J(c);
  Ot(Zr.current, c) || (Zr.current = c);
  const Be = Zr.current, ce = ts(de), gt = Q || ce, xe = wr !== tt;
  K(() => {
    ce && !Q && Be?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), xe && Be?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    );
  }, [ce, Q, xe, Be]);
  const fr = J(null), Pe = Ue(() => {
    if (de.markerMode !== "editable") return;
    const N = et ?? Bs;
    return {
      getContext: () => fr.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (z) => hM(
        N,
        z,
        dt.extraValidMarkers
      ),
      getEnterItems: (z) => gM(
        N,
        z,
        dt.extraValidMarkers
      ),
      apply: (z, V) => {
        const Y = fr.current;
        Y && (V.trigger === "enter" ? Y.splitParagraphWithMarker(z.marker) : Y.applyMarkerMenuSelection(z, V));
      },
      commitTypedCloser: (z) => {
        fr.current?.commitTypedCloser(z);
      }
    };
  }, [de, et, dt.extraValidMarkers]), pr = (N) => {
    A.current || (A.current = !0, Zr.current?.warn(
      `Editor: cannot ${N} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, mi = (N) => {
    if (ce)
      throw new Error(
        `Cannot ${N} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, mt = (N) => {
    if (mi(N), gt) throw new Error(`Cannot ${N} in readonly mode`);
  }, yi = () => {
    const N = d.current?.getRootElement();
    return !!N && N.contains(N.ownerDocument.activeElement);
  }, bi = Ue(
    () => ({
      namespace: "platformEditor",
      theme: { ...ag, showCharMarkerTitles: de.showCharMarkerTitles },
      editable: !gt,
      editorState: void 0,
      // Handling of errors during update
      onError(N) {
        throw N;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [nt, ...ce ? Lx : ah]
    }),
    [gt, ce, de.showCharMarkerTitles]
  );
  ma.initialize(Be);
  function qr(N) {
    if (N !== void 0 && !Iv(N, dt.extraValidMarkers))
      throw new Error(`Unsupported character marker '${N}'`);
  }
  const Rn = ge(() => {
    const N = d.current;
    if (!N) return g.current;
    const z = gu(N), V = T.current;
    if ((!z || z.size === 0) && !V) return g.current;
    const Y = N.getEditorState(), he = Y.toJSON();
    return Y.read(
      () => QE(
        he,
        z ?? /* @__PURE__ */ new Set(),
        { viewOptions: de, getMarker: qn, logger: Be },
        V,
        v.current
      )
    ) ?? g.current;
  }, [de, qn, Be]), zt = {
    focus() {
      d.current?.focus();
    },
    isFocused() {
      const N = d.current?.getRootElement();
      return !!N && N.ownerDocument.activeElement === N;
    },
    undo() {
      d.current?.dispatchCommand(ff, void 0);
    },
    redo() {
      d.current?.dispatchCommand(pf, void 0);
    },
    cut() {
      mt("cut"), d.current?.dispatchCommand(hn, null);
    },
    copy() {
      d.current?.dispatchCommand(uo, null);
    },
    paste() {
      mt("paste"), d.current && al(d.current);
    },
    pastePlainText() {
      mt("paste as plain text"), d.current && cl(d.current);
    },
    getUsj() {
      return Rn();
    },
    commitPendingMarkerEdits() {
      d.current?.update(
        () => {
          d.current?.dispatchCommand(Wg, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(N) {
      if (!N) {
        T.current = void 0;
        return;
      }
      const z = d.current?.getEditorState().read(() => {
        const V = R();
        return O(V) && V.isCollapsed() ? V.focus.key : void 0;
      });
      T.current = { input: N, nodeKey: z ?? v.current?.key };
    },
    setUsj(N) {
      if (!Ot(g.current, N)) {
        g.current = N, T.current = void 0;
        const z = Ot(M, N);
        x(N), z && L((V) => V + 1);
      }
    },
    applyUpdate(N, z = "remote") {
      if (ce && z === "remote") {
        Zr.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      mi("apply an update");
      const V = yi();
      d.current?.update(
        () => {
          z === "remote" && ir(Bi), V || ir(Sa), u_(N, de, dt, Be);
        },
        { discrete: !0 }
      );
      const Y = d.current?.getEditorState();
      if (!Y) return;
      const he = ma.deserializeEditorState(Y, de);
      if (he) {
        const rt = !Ot(g.current, he);
        if (rt && (g.current = he), rt || !Ot(M, he)) {
          const Nt = Eu(N, Y, "apply");
          C.current = he, s?.(he, N, z, Nt);
        }
      }
    },
    replaceEmbedUpdate(N, z) {
      const V = d.current?.read(() => JT(N, z));
      V ? this.applyUpdate(V) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${N}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (ce) {
        pr("get the selection");
        return;
      }
      return d.current?.read(nh);
    },
    setSelection(N) {
      if (ce) {
        pr("set the selection");
        return;
      }
      d.current?.update(() => {
        const z = Zc(N);
        z !== void 0 && (ji(z), ir(Sf));
      });
    },
    setAnnotation(N, z, V, Y, he) {
      if (ce) {
        pr("set an annotation");
        return;
      }
      let rt, Nt, ki, Ti;
      typeof Y == "function" || Y === void 0 ? (rt = Y, Nt = he) : (rt = Y.onClick, Nt = Y.onRemove, ki = Y.onMouseEnter, Ti = Y.onMouseLeave), f.current?.setAnnotation(
        N,
        nu(z),
        V,
        rt,
        Nt,
        ki,
        Ti
      );
    },
    removeAnnotation(N, z) {
      f.current?.removeAnnotation(nu(N), z);
    },
    formatPara(N) {
      mt("format a paragraph"), d.current?.update(() => {
        const z = R();
        if (!O(z)) {
          c?.warn(
            `formatPara refused: no range selection to retag with "${N}" (restore the caret before applying, as the marker palettes do)`
          );
          return;
        }
        hy(z, () => Hi(N));
        const V = R();
        if (!O(V)) return;
        const Y = /* @__PURE__ */ new Set();
        V.getNodes().forEach((he) => {
          const rt = he.getTopLevelElement();
          se(rt) && Y.add(rt);
        }), Y.forEach((he) => Og(he, N, de));
      });
    },
    getElementByKey(N) {
      return d.current?.read(
        () => d.current?.getElementByKey(N) ?? void 0
      );
    },
    removeCharacterMarker(N) {
      if (gt) throw new Error("Cannot remove character marker in readonly mode");
      qr(N);
      let z = !1;
      return d.current?.update(
        () => {
          const V = R();
          O(V) && (z = tg(V, N, de));
        },
        { discrete: !0 }
      ), z;
    },
    replaceCharacterMarker(N, z) {
      if (gt) throw new Error("Cannot replace character marker in readonly mode");
      qr(N), qr(z);
      let V = !1;
      return d.current?.update(
        () => {
          const Y = R();
          O(Y) && (V = Gv(Y, N, z));
        },
        { discrete: !0 }
      ), V;
    },
    extendCharacterMarker(N, z) {
      if (gt) throw new Error("Cannot extend character marker in readonly mode");
      qr(N), z?.forEach(
        (Y) => qr(Y)
      );
      let V = !1;
      return d.current?.update(
        () => {
          const Y = R();
          O(Y) && (V = Jv(
            Y,
            N,
            z,
            de
          ));
        },
        { discrete: !0 }
      ), V;
    },
    insertMarker(N) {
      if (gt) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!d.current) return;
      if (!tc(N, dt.extraValidMarkers))
        throw new Error(`Unsupported marker '${N}'`);
      const z = rc(
        N,
        y,
        de,
        dt,
        Be,
        void 0,
        et
      );
      return z.action({ editor: d.current, reference: r }), z.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!Q)
        return d.current?.getEditorState().read(() => tE());
    },
    applyMarkerMenuSelection(N, z) {
      if (Q) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if (N.kind !== "closeTag" && !tc(N.marker, dt.extraValidMarkers))
        throw new Error(`Unsupported marker '${N.marker}'`);
      let V;
      return d.current.update(() => {
        V = oE(N, z, r, {
          expandedNoteKeyRef: y,
          viewOptions: de,
          nodeOptions: dt,
          logger: c,
          styleInfo: et
        });
      }), V;
    },
    splitParagraphWithMarker(N) {
      if (Q) throw new Error("Cannot split paragraph in readonly mode");
      d.current && d.current.update(() => {
        Lg(N, de);
      });
    },
    commitTypedMarker(N, z) {
      if (Q) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let V = !1;
      return d.current.update(() => {
        V = sE(N, z), V || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), V;
    },
    commitTypedCloser(N) {
      if (Q) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let z = !1;
      return d.current.update(() => {
        z = Ig(N), z || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), z;
    },
    insertNote(N, z, V) {
      mt("insert a note"), d.current?.update(() => {
        const Y = sh(
          N,
          z,
          V,
          r,
          de,
          dt,
          Be
        );
        Y && !Y.getIsCollapsed() && (y.current = Y.getKey());
      });
    },
    selectNote(N) {
      d.current?.update(() => {
        const z = Ur(N);
        z && (qu(z, de), z.getIsCollapsed() || (y.current = z.getKey()));
      });
    },
    selectAfterNote(N) {
      d.current?.update(() => {
        yi() || ir(Sa);
        const z = Ur(N);
        z && wx(z);
      });
    },
    selectNoteTextOffset(N, z) {
      d.current?.update(() => {
        const V = Ur(N);
        V && (Rx(V, z) || qu(V, de), V.getIsCollapsed() || (y.current = V.getKey()));
      });
    },
    getNoteOps(N) {
      return d.current?.read(() => {
        const z = Ur(N);
        if (z)
          return Yc(z);
      });
    },
    getNoteIndex(N) {
      return d.current?.read(() => Xc(N));
    },
    getNoteKey(N) {
      return d.current?.read(() => Ur(N)?.getKey());
    },
    highlightNote(N) {
      p.current?.setHighlightedNote(N);
    },
    get toolbarEndRef() {
      return m;
    }
  };
  fr.current = zt, so(u, () => zt), K(() => {
    const N = d.current;
    if (N)
      return N.registerUpdateListener(({ editorState: z }) => {
        z.read(() => {
          const V = R();
          if (!O(V) || !V.isCollapsed()) return;
          const Y = V.focus.getNode();
          E(Y) && (v.current = { key: Y.getKey(), offset: V.focus.offset });
        });
      });
  }, []);
  const Zt = ge(
    (N, z, V, Y) => {
      if (ce) return;
      const he = ma.deserializeEditorState(N, de);
      if (he) {
        const rt = !Ot(g.current, he);
        if (rt && (g.current = he), rt || !Ot(M, he)) {
          const Nt = Eu(Y, N);
          C.current = he, s?.(he, Y, "local", Nt);
        }
      }
    },
    [M, s, de, ce]
  );
  K(() => {
    const N = d.current;
    if (!(!N || !s))
      return N.registerUpdateListener(({ tags: z, dirtyElements: V, dirtyLeaves: Y }) => {
        !z.has(Tc) && (V.size === 0 && Y.size === 0 || z.has(Bi) || !gu(N)?.size) || queueMicrotask(() => {
          const he = Rn();
          !he || Ot(C.current, he) || (C.current = he, s(he, void 0, "local", void 0));
        });
      });
  }, [s, Rn]);
  const er = ge(
    (N) => {
      G(N.contextMarker), o?.(N);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Te(mf, { initialConfig: bi, children: [
      /* @__PURE__ */ S(lC, { isEditable: !gt }),
      /* @__PURE__ */ Te("div", { className: "editor-container", children: [
        te ? /* @__PURE__ */ S(Oh, { onStateChange: er }) : /* @__PURE__ */ S(
          "div",
          {
            className: "editor-toolbar-container" + (gt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ S(
              xA,
              {
                ref: m,
                editorRef: fr,
                isReadonly: gt,
                onStateChange: er
              }
            )
          }
        ),
        /* @__PURE__ */ Te("div", { className: "editor-inner", children: [
          /* @__PURE__ */ S(bf, { editorRef: d }),
          /* @__PURE__ */ S(
            py,
            {
              contentEditable: /* @__PURE__ */ S(
                yf,
                {
                  className: `editor-input usfm ${l_(de).join(" ")}${de.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${de.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: ve
                }
              ),
              placeholder: /* @__PURE__ */ S(vA, {}),
              ErrorBoundary: kf
            }
          ),
          te && /* @__PURE__ */ S(cC, {}),
          /* @__PURE__ */ S(Tf, {}),
          r && n && /* @__PURE__ */ S(tA, { scrRef: r, onScrRefChange: n }),
          r && !te && /* @__PURE__ */ S(
            RS,
            {
              trigger: Z,
              scrRef: r,
              contextMarker: H,
              getMarkerAction: (N) => rc(
                N,
                y,
                de,
                dt,
                Be,
                void 0,
                et
              ),
              editableHarness: Pe
            }
          ),
          /* @__PURE__ */ S(
            fC,
            {
              scripture: M,
              scriptureRef: g,
              nodeOptions: dt,
              editorAdaptor: Hr,
              viewOptions: de,
              logger: Be
            },
            F
          ),
          /* @__PURE__ */ S(qC, { onChange: i }),
          /* @__PURE__ */ S(
            n_,
            {
              onChange: Zt,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: $y
            }
          ),
          /* @__PURE__ */ S(eM, { viewOptions: de }),
          /* @__PURE__ */ S(t_, { ref: f, logger: Be }),
          /* @__PURE__ */ S(I_, { viewOptions: de }),
          /* @__PURE__ */ S(Y_, {}),
          /* @__PURE__ */ S(rC, {}),
          de?.markerMode !== "editable" && /* @__PURE__ */ S(nC, { logger: Be }),
          /* @__PURE__ */ S(aC, { options: $o }),
          /* @__PURE__ */ S(dC, {}),
          /* @__PURE__ */ S(aE, {}),
          /* @__PURE__ */ S(
            IE,
            {
              viewOptions: de,
              getMarker: qn,
              logger: Be,
              markerSettleDelayMs: ue
            }
          ),
          /* @__PURE__ */ S(
            KE,
            {
              styleInfo: et,
              viewOptions: de,
              logger: Be
            }
          ),
          /* @__PURE__ */ S(pC, { ref: p }),
          /* @__PURE__ */ S(
            hC,
            {
              expandedNoteKeyRef: y,
              nodeOptions: dt,
              viewOptions: de,
              logger: Be
            }
          ),
          /* @__PURE__ */ S(wC, {}),
          /* @__PURE__ */ S(O_, {}),
          /* @__PURE__ */ S(E_, {}),
          /* @__PURE__ */ S(ZE, { viewOptions: de, logger: Be }),
          /* @__PURE__ */ S(RC, {}),
          /* @__PURE__ */ S(xS, { structureProtectionMode: le }),
          /* @__PURE__ */ S(_S, { textDirection: Ee }),
          /* @__PURE__ */ S(SS, {}),
          /* @__PURE__ */ S(wS, {}),
          l
        ] }),
        Ae && /* @__PURE__ */ S(pA, {})
      ] })
    ] }, de.verseLayout ?? "inline")
  );
}), O1 = Jr(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ S(sm, { ref: r, ...i });
});
function om() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function io(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? om() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function am(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? om() : r,
    quote: e,
    type: "thread"
  };
}
function Wd(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function MA(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Ca(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class EA {
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
    this._comments = t, Ca(this);
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
          const c = Wd(a);
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
    this._comments = i, Ca(this);
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
          const c = Wd(a);
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
    return this._comments = n, Ca(this), t.type === "comment" ? {
      index: s,
      markedComment: MA(t)
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
    return t !== null ? t.doc.get("comments", Gl) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Jl(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Gl();
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
      Py,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      It
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Ny) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const m = p.insert, g = p.retain, y = p.delete, T = u.parent, v = u === r ? void 0 : T instanceof Jl && this._comments.find((C) => C.id === T.get("id"));
              if (Array.isArray(m)) {
                const C = f;
                m.slice().reverse().forEach((A) => {
                  const M = A.get("id"), F = A.get("type") === "thread" ? am(
                    A.get("quote"),
                    A.get("comments").toArray().map(
                      (L) => io(
                        L.get("content"),
                        L.get("author"),
                        L.get("id"),
                        L.get("timeStamp"),
                        L.get("deleted")
                      )
                    ),
                    M
                  ) : io(
                    A.get("content"),
                    A.get("author"),
                    M,
                    A.get("timeStamp"),
                    A.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(F, v, C);
                  });
                });
              } else if (typeof g == "number")
                f += g;
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
function AA(e) {
  const [t, r] = fe(e.getComments());
  return K(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function PA({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = J(null);
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
function NA({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return dn(
    /* @__PURE__ */ S(PA, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function cm() {
  const [e, t] = fe(null), r = ge(() => {
    t(null);
  }, []), n = Ue(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ S(NA, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const OA = {
  ...ag,
  paragraph: "CommentEditorTheme__paragraph"
};
function wA(...e) {
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
      className: wA(
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
function qA({
  className: e
}) {
  return /* @__PURE__ */ S(yf, { className: e || "ContentEditable__root" });
}
function RA({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ S("div", { className: t || "Placeholder__root", children: e });
}
const Hd = df("INSERT_INLINE_COMMAND");
function $A({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = J(null), s = ge(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return K(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), os(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ S("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ S("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ S("i", { className: "icon add-comment" }) }) });
}
function IA({ onEscape: e }) {
  const [t] = ae();
  return K(() => t.registerCommand(
    uf,
    (r) => e(r),
    Jn
  ), [t, e]), null;
}
function lm({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ S(mf, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: OA
  }, children: /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ S(
      My,
      {
        contentEditable: /* @__PURE__ */ S(qA, { className: e }),
        placeholder: /* @__PURE__ */ S(RA, { children: s }),
        ErrorBoundary: kf
      }
    ),
    /* @__PURE__ */ S(vy, { onChange: n }),
    /* @__PURE__ */ S(Tf, {}),
    t !== !1 && /* @__PURE__ */ S(_y, {}),
    /* @__PURE__ */ S(IA, { onEscape: r }),
    /* @__PURE__ */ S(Cy, {}),
    i !== void 0 && /* @__PURE__ */ S(bf, { editorRef: i })
  ] }) });
}
function um(e, t) {
  return ge(
    (r, n) => {
      r.read(() => {
        e(Ey()), t(!Ay(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function LA({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = fe(""), [s, o] = fe(!1), a = J(null), c = Ue(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = J(null), u = fm(), d = ge(() => {
    e.getEditorState().read(() => {
      const g = R();
      if (O(g)) {
        l.current = g.clone();
        const y = g.anchor, T = g.focus, v = gy(
          e,
          y.getNode(),
          y.offset,
          T.getNode(),
          T.offset
        ), C = a.current;
        if (v !== null && C !== null) {
          const { left: A, bottom: M, width: x } = v.getBoundingClientRect(), F = my(e, v);
          let L = F.length === 1 ? A + x / 2 - 125 : A - 125;
          L < 10 && (L = 10), C.style.left = `${L}px`, C.style.top = `${M + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const H = F.length, { container: G } = c, Q = c.elements, le = Q.length;
          for (let te = 0; te < H; te++) {
            const ve = F[te];
            let Ee = Q[te];
            Ee === void 0 && (Ee = document.createElement("span"), Q[te] = Ee, G.appendChild(Ee));
            const U = `position:absolute;top:${ve.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${ve.left}px;height:${ve.height}px;width:${ve.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            Ee.style.cssText = U;
          }
          for (let te = le - 1; te >= H; te--) {
            const ve = Q[te];
            G.removeChild(ve), Q.pop();
          }
        }
      }
    });
  }, [e, c]);
  os(() => {
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
        am(g, [io(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, m = um(i, o);
  return /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ S(
      lm,
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
function DA({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = fe(""), [s, o] = fe(!1), a = J(null), c = fm(), l = um(i, o);
  return /* @__PURE__ */ Te(fn, { children: [
    /* @__PURE__ */ S(
      lm,
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
            e(io(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(oy, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ S("i", { className: "send" })
      }
    )
  ] });
}
function dm({
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
function Gd({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = fe(0);
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = cm();
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
              dm,
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
function UA({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ae(), [a, c] = fe(0), [l, u] = cm(), d = Ue(
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
  }, [a]), /* @__PURE__ */ S("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
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
                const T = Array.from(g)[0], v = ie(T);
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
                  u("Delete Thread", (g) => /* @__PURE__ */ S(
                    dm,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: g
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ S("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ S("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((g) => /* @__PURE__ */ S(
            Gd,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            g.id
          )) }),
          /* @__PURE__ */ S("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ S(
            DA,
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
      Gd,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function FA({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = J(null), o = r.length === 0;
  return /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ S("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ S("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ S(
      UA,
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
function fm() {
  const e = xf(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function zA({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = xf(), [a] = ae(), c = Ue(() => {
    const L = new EA(a, s);
    return r && L.registerOnChange(r), t?.(L), L;
  }, [a, s, r, t]), l = AA(c), u = Ue(() => /* @__PURE__ */ new Map(), []), [d, f] = fe(), [p, m] = fe([]), [g, y] = fe(!1), [T, v] = fe(!1), { yjsDocMap: C } = o;
  K(() => {
    if (e) {
      const L = e("comments", C);
      return c.registerCollaboration(L);
    }
    return () => {
    };
  }, [c, e, C]);
  const A = ge(() => {
    a.update(() => {
      const L = R();
      L !== null && (L.dirty = !0);
    }), y(!1);
  }, [a]), M = ge(
    (L, H) => {
      if (L.type === "comment") {
        const G = c.deleteCommentOrThread(L, H);
        if (!G)
          return;
        const { markedComment: Q, index: le } = G;
        c.addComment(Q, H, le);
      } else {
        c.deleteCommentOrThread(L);
        const G = H !== void 0 ? H.id : L.id, Q = u.get(G);
        Q !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const le of Q) {
              const te = ie(le);
              _e(te) && (te.deleteID(zr, G), te.hasNoIDsForEveryType() && Ds(te));
            }
          });
        });
      }
    },
    [c, a, u]
  ), x = ge(
    (L, H, G, Q) => {
      c.addComment(L, G), H && (a.update(() => {
        O(Q) && Df(Q, zr, L.id);
      }), y(!1));
    },
    [c, a]
  );
  K(() => {
    const L = [];
    let H;
    for (const G of p) {
      const Q = u.get(G);
      if (Q !== void 0)
        for (const le of Q) {
          const te = a.getElementByKey(le);
          te !== null && (te.classList.add("selected"), L.push(te), H = window.setTimeout(() => {
            v(!0);
          }, 0));
        }
    }
    return () => {
      H !== void 0 && window.clearTimeout(H);
      for (const G of L)
        G.classList.remove("selected");
    };
  }, [p, a, u]), K(() => {
    if (!a.hasNodes([nt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const L = /* @__PURE__ */ new Map();
    return Ge(
      gf(
        a,
        nt,
        (H) => Vi(H.getTypedIDs()),
        (H, G) => {
          for (const [Q, le] of Object.entries(H.getTypedIDs()))
            le.forEach((te) => {
              G.addID(Q, te);
            });
        }
      ),
      a.registerMutationListener(
        nt,
        (H) => {
          a.getEditorState().read(() => {
            for (const [G, Q] of H) {
              const le = ie(G);
              let te = [];
              Q === "destroyed" ? te = L.get(G) ?? [] : _e(le) && (te = le.getTypedIDs()[zr] ?? []);
              for (const ve of te) {
                let Ee = u.get(ve);
                L.set(G, te), Q === "destroyed" ? Ee !== void 0 && (Ee.delete(G), Ee.size === 0 && u.delete(ve)) : (Ee === void 0 && (Ee = /* @__PURE__ */ new Set(), u.set(ve, Ee)), Ee.has(G) || Ee.add(G));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: H, tags: G }) => {
        H.read(() => {
          const Q = R();
          let le = !1, te = !1;
          if (O(Q)) {
            const ve = Q.anchor.getNode();
            if (E(ve)) {
              const Ee = kb(ve, zr, Q.anchor.offset) ?? [];
              Ee !== null && (m(Ee), le = !0), Q.isCollapsed() || (f(ve.getKey()), te = !0);
            }
          }
          le || m((ve) => ve.length === 0 ? ve : []), te || f(null), !G.has("collaboration") && O(Q) && y(!1);
        });
      }),
      a.registerCommand(
        Hd,
        () => {
          const H = window.getSelection();
          return H !== null && H.removeAllRanges(), y(!0), !0;
        },
        pn
      )
    );
  }, [a, u]);
  const F = () => {
    a.dispatchCommand(Hd, void 0);
  };
  return /* @__PURE__ */ Te(fn, { children: [
    g && dn(
      /* @__PURE__ */ S(
        LA,
        {
          editor: a,
          cancelAddComment: A,
          submitAddComment: x
        }
      ),
      document.body
    ),
    d != null && !g && dn(
      /* @__PURE__ */ S(
        $A,
        {
          anchorKey: d,
          editor: a,
          showComments: T,
          onAddComment: F
        }
      ),
      document.body
    ),
    n !== null && dn(
      /* @__PURE__ */ S(
        Gr,
        {
          className: `CommentPlugin_ShowCommentsButton ${T ? "active" : ""}`,
          onClick: () => v(!T),
          title: T ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ S("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    T && dn(
      /* @__PURE__ */ S(
        FA,
        {
          comments: l,
          submitAddComment: x,
          deleteCommentOrThread: M,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function KA() {
  const e = J(void 0), t = ge((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function jA(e, t) {
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
function BA(e, t) {
  K(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      jA(r, t);
    };
  }, [t, e]);
}
const w1 = Jr(function(t, r) {
  const n = J(null), i = J(!0), s = J(null), [o, a] = fe(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: m, view: g } = {} } = t, y = (m ?? !1) || ts(g), [T, v] = KA();
  BA(f, T), K(() => {
    if (process.env.NODE_ENV !== "production") {
      const M = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(M), p || console.warn(M);
    }
  }, [p]), so(r, () => ({
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
    setTransientInput(M) {
      n.current?.setTransientInput(M);
    },
    setUsj(M) {
      n.current?.setUsj(M);
    },
    applyUpdate(M, x) {
      n.current?.applyUpdate(M, x);
    },
    replaceEmbedUpdate(M, x) {
      return n.current?.replaceEmbedUpdate(M, x);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(M) {
      n.current?.setSelection(M);
    },
    setAnnotation(M, x, F, L, H) {
      typeof L == "function" || L === void 0 ? n.current?.setAnnotation(M, x, F, L, H) : n.current?.setAnnotation(M, x, F, L);
    },
    removeAnnotation(M, x) {
      n.current?.removeAnnotation(M, x);
    },
    formatPara(M) {
      n.current?.formatPara(M);
    },
    getElementByKey(M) {
      return n.current?.getElementByKey(M);
    },
    removeCharacterMarker(M) {
      return n.current?.removeCharacterMarker(M) ?? !1;
    },
    replaceCharacterMarker(M, x) {
      return n.current?.replaceCharacterMarker(M, x) ?? !1;
    },
    extendCharacterMarker(M, x) {
      return n.current?.extendCharacterMarker(M, x) ?? !1;
    },
    insertMarker(M) {
      return n.current?.insertMarker(M);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(M, x) {
      return n.current?.applyMarkerMenuSelection(M, x);
    },
    splitParagraphWithMarker(M) {
      n.current?.splitParagraphWithMarker(M);
    },
    commitTypedMarker(M, x) {
      return n.current?.commitTypedMarker(M, x) ?? !1;
    },
    commitTypedCloser(M) {
      return n.current?.commitTypedCloser(M) ?? !1;
    },
    insertNote(M, x, F) {
      n.current?.insertNote(M, x, F);
    },
    selectNote(M) {
      n.current?.selectNote(M);
    },
    selectAfterNote(M) {
      n.current?.selectAfterNote(M);
    },
    selectNoteTextOffset(M, x) {
      n.current?.selectNoteTextOffset(M, x);
    },
    getNoteOps(M) {
      return n.current?.getNoteOps(M);
    },
    getNoteIndex(M) {
      return n.current?.getNoteIndex(M);
    },
    getNoteKey(M) {
      return n.current?.getNoteKey(M);
    },
    highlightNote(M) {
      n.current?.highlightNote(M);
    },
    setComments(M) {
      T.current?.setComments(M), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const C = ge(
    (M, x, F, L) => {
      if (!u) return;
      const H = T.current?.getComments();
      u(M, H, x, F, L);
    },
    [T, u]
  ), A = ge(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const M = T.current?.getComments();
    l(M);
  }, [T, i, l]);
  return K(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ S(Sy, { children: /* @__PURE__ */ Te(sm, { ref: n, onUsjChange: C, ...f, children: [
    /* @__PURE__ */ S(
      zA,
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
function pm(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function VA(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const WA = /^[#\w().,%/\s-]+$/;
function gr(e) {
  return e != null;
}
const HA = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, GA = {
  left: "right",
  right: "left"
}, hc = ".editor-input.usfm", JA = /^[\w.#[\]="':()>+~*,\s-]+$/;
function YA(e) {
  return JA.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${hc}".`
  ), hc);
}
function XA(e, t, r, n) {
  const i = [];
  if (t.fontName && i.push(`font-family: "${pm(t.fontName)}"`), t.bold && i.push("font-weight: bold"), t.italic && i.push("font-style: italic"), t.color && (WA.test(t.color) ? i.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), gr(t.fontSize) && t.fontSize > 0 && i.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), gr(t.firstLineIndent) && i.push(`text-indent: ${un(t.firstLineIndent * 20 * r)}vw`), gr(t.leftMargin) && t.leftMargin >= 0 && i.push(`margin-${n ? "right" : "left"}: ${un(t.leftMargin * 20 * r)}vw`), gr(t.rightMargin) && t.rightMargin >= 0 && i.push(
    `margin-${n ? "left" : "right"}: ${un(t.rightMargin * 20 * r)}vw`
  ), gr(t.spaceBefore) && t.spaceBefore >= 0 && i.push(`margin-top: ${un(t.spaceBefore * r)}pt`), gr(t.spaceAfter) && t.spaceAfter >= 0 && i.push(`margin-bottom: ${un(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? i.push("line-height: 1.5") : t.lineSpacing === 2 && i.push("line-height: 2"), t.subscript ? i.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && i.push("vertical-align: text-top", "font-size: 66%"), t.underline && i.push("text-decoration: underline"), t.smallCaps && i.push("font-variant: small-caps"), t.justification) {
    const s = HA[n ? GA[t.justification] ?? t.justification : t.justification];
    s && i.push(`text-align: ${s}`);
  }
  return t.textProperties?.includes("verse") && i.push("white-space: nowrap", "unicode-bidi: embed"), i;
}
const Jd = { c: 150, ca: 133, cp: 150 };
function Yd(e, t) {
  return e && gr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function QA(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && gr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Yd(e.markers.c, Jd.c);
  return ["ca", "cp"].map((i) => {
    const s = Yd(
      e.markers[i],
      Jd[i]
    ), o = un(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function q1(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = hc } = t, s = YA(i), o = [], a = [];
  e.defaultFont && a.push(`font-family: "${pm(e.defaultFont)}"`), gr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${un(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = XA(c, l, r, n);
    u.length > 0 && o.push(`${s} .usfm_${VA(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...QA(e, s)), o.join(`
`);
}
export {
  gh as BLOCK_VERSE_VIEW_MODE,
  k as CategoryType,
  O1 as Editorial,
  $s as GENERATOR_NOTE_CALLER,
  Cf as HIDDEN_NOTE_CALLER,
  w1 as Marginal,
  b as MarkerType,
  ph as PARAGRAPH_STRUCTURE_VIEW_MODE,
  hh as STANDARD_VIEW_MODE,
  Bs as defaultStyleInfo,
  N1 as directionToNames,
  Wx as filterAndRankItems,
  q1 as generateUsjCss,
  A1 as getDefaultViewMode,
  Eo as getDefaultViewOptions,
  gM as getEnterMenuItems,
  hM as getMarkerMenuItems,
  P1 as getViewMode,
  mh as getViewOptions,
  ts as isBlockVerseLayout,
  Dr as isInsertEmbedOpOfType,
  s_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
