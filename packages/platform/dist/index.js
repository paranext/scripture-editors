import { jsx as C, jsxs as Te, Fragment as hn } from "react/jsx-runtime";
import { forwardRef as Yr, useState as fe, useRef as Y, useCallback as ge, useEffect as K, useMemo as Ue, memo as Dm, createContext as of, useContext as af, Children as Um, isValidElement as Fm, cloneElement as zm, useImperativeHandle as uo, useLayoutEffect as cs } from "react";
import { assertSafeKey as We, isValidBookCode as Km, MARKER_OBJECT_PROPS as jm, USJ_VERSION as Tr, USJ_TYPE as xr, usjJsonPathFromIndexes as rn, isUsjTextContentLocation as Bm, indexesFromUsjJsonPath as cf, isUsjAttributeKeyLocation as Vm, isUsjAttributeMarkerLocation as Wm, isUsjClosingAttributeMarkerLocation as Hm, isUsjMarkerLocation as Gm, isUsjClosingMarkerLocation as Jm, isUsjPropertyValueLocation as Ym, getUsjDocumentLocationTypeName as Xm, EMPTY_USJ as lf } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as ze, $parseSerializedNode as fo, DecoratorNode as ls, ElementNode as Qt, isHTMLElement as En, createState as po, $getState as ne, $setState as kt, $isRangeSelection as O, $isElementNode as U, $isTextNode as E, ParagraphNode as vc, TextNode as Fe, $createTextNode as ye, $getCommonAncestor as Qm, $isLineBreakNode as ho, $getSelection as q, NODE_STATE_KEY as us, $getEditor as ci, $hasUpdateTag as Zm, $getNodeByKey as ie, $getRoot as De, $createRangeSelection as Mc, $createPoint as nu, $getCharacterOffsets as uf, KEY_DOWN_COMMAND as Er, COMMAND_PRIORITY_HIGH as $e, HISTORY_MERGE_TAG as df, CLICK_COMMAND as go, COMMAND_PRIORITY_EDITOR as gn, isDOMNode as ff, $getNearestNodeFromDOMNode as ds, CONTROLLED_TEXT_INSERTION_COMMAND as Ec, PASTE_COMMAND as yr, COMMAND_PRIORITY_CRITICAL as br, CUT_COMMAND as mn, DROP_COMMAND as Ac, DELETE_CHARACTER_COMMAND as ey, DELETE_WORD_COMMAND as ty, DELETE_LINE_COMMAND as ry, $isDecoratorNode as pf, COPY_COMMAND as mo, COMMAND_PRIORITY_NORMAL as Xn, SELECTION_CHANGE_COMMAND as _r, BLUR_COMMAND as Pc, $addUpdateTag as Bt, SKIP_DOM_SELECTION_TAG as un, CLEAR_HISTORY_COMMAND as ny, COMMAND_PRIORITY_LOW as It, $setSelection as Wi, $getPreviousSelection as iy, $isRootOrShadowRoot as sy, CAN_UNDO_COMMAND as oy, CAN_REDO_COMMAND as ay, $isNodeSelection as hf, DRAGSTART_COMMAND as cy, $createNodeSelection as gf, getDOMSelectionFromTarget as ly, $onUpdate as uy, KEY_ENTER_COMMAND as mf, LineBreakNode as yf, $copyNode as dy, FOCUS_COMMAND as fy, $isRootNode as py, KEY_ESCAPE_COMMAND as bf, INSERT_PARAGRAPH_COMMAND as Is, createCommand as kf, HISTORIC_TAG as Nc, UNDO_COMMAND as Tf, REDO_COMMAND as xf, CLEAR_EDITOR_COMMAND as hy } from "lexical";
import { addClassNamesToElement as zn, removeClassNamesFromElement as ea, $findMatchingParent as ot, $dfsIterator as yo, $dfs as li, mergeRegister as Ge, registerNestedElementResolver as _f, $unwrapNode as Ra, IS_APPLE as Ls } from "@lexical/utils";
import { useLexicalNodeSelection as gy } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Ot } from "fast-equals";
import $i from "quill-delta";
import { useLexicalComposerContext as ae } from "@lexical/react/LexicalComposerContext";
import { copyToClipboard as my, $getHtmlContent as yy, $getLexicalContent as by } from "@lexical/clipboard";
import { TreeView as ky } from "@lexical/react/LexicalTreeView";
import * as Ty from "react-dom";
import { createPortal as pn } from "react-dom";
import { LexicalComposer as Cf } from "@lexical/react/LexicalComposer";
import { ContentEditable as Sf } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as vf } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Mf } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Ef } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as xy } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as _y, createDOMRange as Cy, createRectsFromDOMRange as Sy } from "@lexical/selection";
import { autoUpdate as vy, computePosition as My, shift as Ey, flip as Ay } from "@floating-ui/dom";
import { $generateNodesFromDOM as Py } from "@lexical/html";
import { AutoFocusPlugin as Ny } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Oy } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Af, LexicalCollaboration as wy } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as qy } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Ry } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as $y, $isRootTextContentEmpty as Iy } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Ly } from "@lexical/yjs";
import { Array as iu, Map as su, YArrayEvent as Dy } from "yjs";
const ta = (e) => ze(fo(e)), Uy = {
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
function Pf(e) {
  return Uy[e];
}
const R = " ", Ds = "​", Dt = R, Oc = `${R}|`, or = "p", Us = "+", Nf = "-", Fs = "chapter", $a = "verse", ou = "invalid", Fy = "text-spacing", zy = "formatted-font", Ky = "marker-", wc = "external-usj-mutation", Of = "selection-change", kr = "cursor-change", Ia = "annotation-change", Hi = "delta-change", wf = "marker-settle", jy = [
  wc,
  Of,
  kr,
  Ia,
  Hi
], yn = "zmsc-s", Qn = "zmsc-e", By = [yn, Qn], Vy = [
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
  yn,
  Qn
], qf = 1, qc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Wy = qc.filter((e) => e !== "sid" && e !== "eid");
class Gt extends ls {
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
    return new Gt(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return $f().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Vy.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: qf
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Rf(e) {
  return By.includes(e);
}
function $f(e, t, r, n, i) {
  return ze(new Gt(e, t, r, n, void 0, i));
}
function Ke(e) {
  return e instanceof Gt;
}
const Rc = "f", Hy = [
  // Footnote
  Rc,
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
const Gy = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], If = 1;
class Se extends Qt {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Rc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (Ii(t) === "crossref" ? Nf : Us), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => Yy(t) ? {
        conversion: Jy,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return $c().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Hy.includes(t) || (r?.includes(t) ?? !1));
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
    return r && En(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", Ii(this.getMarker()))), { element: r };
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
      version: If
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
function Jy(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: $c(t, r, n) };
}
function $c(e, t, r, n, i) {
  return ze(new Se(e, t, r, n, i));
}
function Yy(e) {
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
const La = {
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
}, nn = {
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
}, au = {
  p: { children: nn },
  q: { children: nn },
  q1: { children: nn },
  q2: { children: nn },
  q3: { children: nn },
  q4: { children: nn },
  b: { children: nn },
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
  const t = Object.hasOwn(La, e) ? La[e] : void 0, r = Object.hasOwn(au, e) ? au[e] : void 0;
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
const Lf = "v", Df = "c", sn = "fig", cu = "tr", Da = "esb", Uf = "esbe", Xy = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Qy = {
  "": "start",
  c: "center",
  r: "end"
};
function Zy(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function lu(e) {
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
const eb = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function tb(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Ds && s + 1 < e.length && lu(e[s + 1]) || (lu(o) ? (r || (i = t.length, t += o), r = !0) : eb.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function rb(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function nb(e, t) {
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
const ib = /^(?:qt[1-5]?|ts)-[se]$/;
function bo(e) {
  return ib.test(e) || Rf(e);
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
function sb(e, t, r) {
  const n = [];
  let i = 0, s;
  const o = (c) => {
    if (!c)
      return;
    const l = n[n.length - 1];
    l?.kind === "text" ? l.text += c : n.push({ kind: "text", text: c });
  }, a = (c) => {
    c.split("//").forEach((d, u) => {
      u > 0 && n.push({ kind: "optbreak" }), o(d);
    });
  };
  for (; i < e.length; ) {
    if (e[i] !== "\\") {
      const g = e.indexOf("\\", i), y = g === -1 ? e.length : g;
      a(tb(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: d } = nb(e, i + 1);
    if (i = d, l === "") {
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
    const u = () => {
      for (; i < e.length && /[\s\u00A0\u200B]/.test(e[i]); )
        i++;
    };
    if (l === Lf) {
      const { word: g, next: y } = ra(e, i);
      i = y, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === Df) {
      const { word: g, next: y } = ra(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, m = t(p)?.type;
    if (m === b.Note || m === void 0 && Se.isValidMarker(l)) {
      const { word: g, next: y } = ra(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (m === b.Milestone || m === void 0 && bo(l)) {
      const g = pb(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const y = e.indexOf("\\", i), x = y === -1 ? e.length : y;
        o(e.slice(c, x)), i = x;
      }
      continue;
    }
    m === b.Paragraph ? (u(), n.push({ kind: "para", marker: l })) : m === b.Character ? (u(), n.push({ kind: "charOpen", marker: p, isNested: f })) : zs(p) ? (u(), zs(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (u(), !(r || s !== void 0) || l === Da || l === Uf ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const uu = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function zs(e) {
  return Object.hasOwn(uu, e) ? uu[e] : void 0;
}
function ob(e) {
  return zs(e) !== void 0;
}
const ab = /([-\w]+)\s*=\s*"(.*?)"/g, cb = /[\s\u200B]*[\n\r][\s\u200B]*/g, Ff = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function ko(e) {
  return Ff[e];
}
const lb = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function ub(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function To(e, t, r = Ff[t]) {
  const n = e.replace(cb, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(ab)];
  if (s.length > 0) {
    if (!ub(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      lb.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function xo(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function db(e) {
  const t = Ar(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function fb(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = To(e.slice(n + 1, i), r, xo(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function pb(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = To(s.slice(o + 1), r, xo(r)), !a && s.slice(o + 1).trim() !== "")) {
    const d = s.slice(0, o);
    return {
      token: { kind: "milestone", marker: r },
      next: n + o,
      ejectedText: d.trim() !== "" ? d.replace(/^[ \u00A0]/, "") : void 0
    };
  }
  const c = o >= 0 ? s.slice(0, o) : s;
  if (c.trim() !== "")
    return {
      token: { kind: "milestone", marker: r, attributes: a },
      next: i,
      ejectedText: c.replace(/^[ \u00A0]/, "")
    };
  const l = fb(e, i + 2, r);
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
`, " ").replaceAll("~", R);
}
function on(e) {
  return e.content || (e.content = []), e.content;
}
function Ar(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, d;
  const u = () => d ? on(d) : r;
  let f = !1;
  const p = () => {
    if (s)
      return o.length > a ? on(o[o.length - 1].object) : on(s);
    if (o.length > 0)
      return on(o[o.length - 1].object);
    if (!i) {
      if (f && !n)
        return u();
      i = { type: "para", marker: or, content: [] }, u().push(i);
    }
    return on(i);
  }, m = (Z) => {
    const F = p();
    typeof Z == "string" && typeof F[F.length - 1] == "string" ? F[F.length - 1] = F[F.length - 1] + Z : F.push(Z);
  }, g = (Z) => {
    for (let F = Z; F < o.length; F += 1) {
      const ee = o[F].object;
      ee.closed = "false";
    }
  }, y = () => {
    g(0), o.length = 0;
  }, x = (Z) => {
    s && (o.length > a && (g(a), o.length = a), a = 0, Z || (s.closed = "false"), s = void 0);
  }, v = () => {
    c = void 0, l = void 0;
  }, S = (Z) => {
    d && (Z || (d.closed = "false"), d = void 0);
  };
  let A, M = "", T;
  const z = () => {
    M && m(gr(M)), M = "";
  }, D = (Z = !1) => {
    A?.type === "sidebar" ? M = "" : Z && M.endsWith(`
`) && (M = M.slice(0, -1)), A = void 0, z();
  }, H = () => {
    if (!T)
      return;
    const Z = { type: "char", marker: T.marker, content: [] };
    T.value && (Z.content = [gr(T.value)]), p().push(Z), o.push({ object: Z }), T = void 0;
  }, G = (Z, F) => {
    f = !1, v(), y(), x(!1), i = { type: "para", marker: Z, content: [] }, F && (i.content = [gr(F)]), u().push(i);
  }, Q = () => {
    T && (G(T.marker, T.value), T = void 0);
  };
  let le;
  const te = () => {
    if (le) {
      if (le.shape === "para")
        G(sn, le.value);
      else {
        const Z = { type: "char", marker: sn, content: [] };
        le.value && (Z.content = [gr(le.value)]), p().push(Z), o.push({ object: Z });
      }
      le = void 0;
    }
  }, ve = sb(e, t?.getMarker ?? ar, n);
  for (let Z = 0; Z < ve.length; Z++) {
    const F = ve[Z];
    if (T) {
      if (F.kind === "text") {
        T.value += F.text;
        continue;
      }
      if (T.shape === "char" && F.kind === "end" && F.marker.replace(/^\+/, "") === T.marker) {
        if (T.value.trim() === "") {
          p().push({ type: "char", marker: T.marker, content: [] }), T = void 0, D();
          continue;
        }
        Object.assign(T.target, {
          [T.attrName]: gr(T.value.trim())
        });
        const ee = T.marker;
        if (T = void 0, ee === "ca") {
          const Ae = ve[Z + 1];
          Ae?.kind === "text" && /^[\s\u200B]*$/.test(Ae.text) && Z++;
        }
        continue;
      }
      if (T.shape === "para" && (F.kind === "para" || F.kind === "chapter")) {
        const ee = T.value.replace(/[\s\u200B]+$/, "");
        ee === "" ? (G(T.marker), T = void 0) : (Object.assign(T.target, { [T.attrName]: gr(ee) }), T = void 0);
      } else {
        A = void 0, (F.kind === "para" || F.kind === "chapter") && T.value.endsWith(`
`) && (T.value = T.value.slice(0, -1)), T.shape === "para" ? Q() : H(), Z--;
        continue;
      }
    }
    if (le) {
      if (F.kind === "text" || F.kind === "optbreak") {
        le.value += F.kind === "text" ? F.text : "//";
        continue;
      }
      if (F.kind === "end" && F.marker.replace(/^\+/, "") === sn) {
        const ee = le.value.indexOf("|"), Ae = ee >= 0 ? To(le.value.slice(ee + 1), sn) : void 0;
        if (Ae) {
          const Ze = {};
          for (const [tt, qr] of Object.entries(Ae))
            Ze[tt === "src" ? "file" : tt] = qr;
          const et = {
            type: "figure",
            marker: sn,
            ...Ze
          }, ue = le.value.slice(0, ee);
          ue && (et.content = [gr(ue)]), m(et), le = void 0;
          continue;
        }
      }
      te(), Z--;
      continue;
    }
    if (A)
      if (F.kind === "text") {
        if (F.text.includes(`
`) && /^[\s\u200B]*$/.test(F.text)) {
          M += F.text;
          continue;
        }
        D();
      } else if (F.kind === "charOpen" || F.kind === "para") {
        const ee = F.kind === "para" || !F.isNested ? zs(F.marker) : void 0;
        if (ee && ee.targetTypes.includes(A.type)) {
          M = "", T = {
            target: A,
            attrName: ee.attrName,
            marker: F.marker,
            shape: ee.shape,
            value: ""
          };
          continue;
        }
        D(F.kind === "para");
      } else
        D(F.kind === "chapter");
    if (!s && !n && (F.kind === "charOpen" && !F.isNested && F.marker === sn || F.kind === "para" && F.marker === sn)) {
      y(), le = { shape: F.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (F.kind) {
      case "text": {
        let ee = F.text;
        if (!s && ee.endsWith(`
`)) {
          const Ae = ve[Z + 1];
          (Ae === void 0 || Ae.kind === "para" || Ae.kind === "chapter") && (ee = ee.slice(0, -1));
        }
        ee && m(gr(ee));
        break;
      }
      case "para": {
        const ee = !s && !n;
        if (ee && F.marker === cu) {
          y(), c || (c = { type: "table", content: [] }, u().push(c)), l = { type: "table:row", marker: cu, content: [] }, on(c).push(l), i = l, f = !1;
          break;
        }
        if (ee && l) {
          const Ae = Xy.exec(F.marker);
          if (Ae && Zy(Ae)) {
            y();
            const [, Ze, et, ue] = Ae, tt = {
              type: "table:cell",
              marker: ue ? F.marker.slice(0, F.marker.indexOf("-")) : F.marker,
              align: Qy[Ze],
              content: []
            };
            ue && (tt.colspan = String(Number(ue) + 1 - Number(et))), on(l).push(tt), i = tt;
            break;
          }
        }
        if (v(), !n && F.marker === Da) {
          y(), x(!1), S(!1), d = { type: "sidebar", marker: Da, content: [] }, r.push(d), i = void 0, A = d, f = !1;
          break;
        }
        if (F.marker === Uf && d) {
          y(), x(!1), S(!0), i = void 0;
          break;
        }
        G(F.marker);
        break;
      }
      case "verse": {
        x(!1);
        const ee = { type: "verse", marker: Lf, number: F.number };
        m(ee), A = ee;
        break;
      }
      case "chapter": {
        y(), x(!1), v(), S(!1), i = void 0;
        const ee = {
          type: "chapter",
          marker: Df,
          number: F.number
        };
        r.push(ee), A = ee, f = !0;
        break;
      }
      case "note": {
        x(!1);
        const ee = p();
        s = { type: "note", marker: F.marker, caller: F.caller, content: [] }, a = o.length, ee.push(s), A = s;
        break;
      }
      case "charOpen": {
        if (!F.isNested) {
          const Ze = s ? a : 0;
          g(Ze), o.length = Ze;
        }
        const ee = p(), Ae = { type: "char", marker: F.marker, content: [] };
        ee.push(Ae), o.push({ object: Ae });
        break;
      }
      case "end": {
        const ee = F.marker.replace(/^\+/, ""), Ae = s ? a : 0, Ze = o.findLastIndex((et, ue) => ue >= Ae && et.object.marker === ee);
        Ze >= 0 ? (hb(o[Ze].object), g(Ze + 1), o.length = Ze) : s && s.marker === ee ? x(!0) : (g(Ae), o.length = Ae, m({ type: "unmatched", marker: `${F.marker}*` }));
        break;
      }
      case "milestone":
        m({ type: "ms", marker: F.marker, ...F.attributes });
        break;
      case "optbreak":
        m({ type: "optbreak" });
        break;
    }
  }
  if (le && te(), T)
    if (T.shape === "para") {
      const Z = T.value.replace(/[\s\u200B]+$/, "");
      Z === "" ? G(T.marker) : Object.assign(T.target, { [T.attrName]: gr(Z) }), T = void 0;
    } else
      T.value.endsWith(`
`) && (T.value = T.value.slice(0, -1)), H();
  y(), x(!1), S(!1);
  const Ee = (Z) => {
    for (const F of Z)
      typeof F != "string" && F.content && (Ee(F.content), F.content.length === 0 && delete F.content);
  };
  return Ee(r), r;
}
function hb(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = To(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const bn = po("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), jr = po("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), oe = po("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), lr = "marker-trailing-space", zf = 1, gb = "marker", Ic = po("isGutterMarker", {
  parse: (e) => e === !0
});
class Pr extends ls {
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
    return new Pr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => kb(t) ? {
        conversion: mb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Cr().updateFromJSON(t);
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
    return r && En(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: zf
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function mb(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Cr(t, r) };
}
function Cr(e, t) {
  return ze(new Pr(e, t));
}
function yb(e) {
  return kt(Cr(gb, e), Ic, !0);
}
function bb(e) {
  return Jt(e) && ne(e, Ic);
}
function kb(e) {
  return e?.tagName === "span";
}
function Jt(e) {
  return e instanceof Pr;
}
function Kf(e) {
  return e?.type === Pr.getType();
}
const Kr = "internal-comment", Tb = [Kr], jf = Object.freeze({}), Ua = Object.freeze({}), Fa = Object.freeze({}), za = Object.freeze({}), Ka = Object.freeze({}), xb = 1, Kn = /* @__PURE__ */ new Map(), Ei = /* @__PURE__ */ new Map(), jn = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new Map();
class nt extends Qt {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = jf, r, n, i, s, o) {
    super(o), this.__typedIDs = Ms(t), this.__typedOnClicks = na(r), this.__typedOnRemoves = ia(n), this.__typedOnMouseEnters = sa(i), this.__typedOnMouseLeaves = oa(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Ms(t.__typedIDs), n = na(t.__typedOnClicks), i = ia(t.__typedOnRemoves), s = sa(t.__typedOnMouseEnters), o = oa(t.__typedOnMouseLeaves);
    return new nt(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Tb.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Gi().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: xb
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      zn(n, an(t.theme.typedMark, a)), c.length > 1 && zn(n, an(t.theme.typedMarkOverlap, a));
      for (const l of c)
        zn(n, an("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, d = an(n.theme.typedMark, s), u = an(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && zn(r, d) : l === 0 && ea(r, d), c === 1 ? l === 2 && zn(r, u) : l === 1 && ea(r, u));
      const f = new Set(o), p = new Set(a);
      for (const m of o)
        p.has(m) || ea(r, an("annotationId", m));
      for (const m of a)
        f.has(m) || zn(r, an("annotationId", m));
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
    const r = this.getWritable(), n = Ms(r.__typedIDs);
    r.__typedIDs = Ms(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Ks(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = na(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return _e(t) ? Kn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = ia(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return _e(t) ? Ei.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = sa(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return _e(t) ? jn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = oa(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return _e(t) ? Bn.get(t.getKey()) ?? {} : {};
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Ks(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Gi(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Kn.delete(r.getKey()), Ei.delete(r.getKey()), jn.delete(r.getKey()), Bn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
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
  getOrCreateDOMMouseEnterListener(t) {
    return this.__domOnMouseEnterListener || (this.__domOnMouseEnterListener = (r) => {
      this.handleDOMMouseEnter(r, t);
    }), this.__domOnMouseEnterListener;
  }
  handleDOMMouseEnter(t, r) {
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
  getOrCreateDOMMouseLeaveListener(t) {
    return this.__domOnMouseLeaveListener || (this.__domOnMouseLeaveListener = (r) => {
      this.handleDOMMouseLeave(r, t);
    }), this.__domOnMouseLeaveListener;
  }
  handleDOMMouseLeave(t, r) {
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
  ensureOnClickMapMutable() {
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Ua) {
      const t = Kn.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      Kn.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    Kn.set(this.getKey(), this.__typedOnClicks);
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
    const i = Ir(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = Ir(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Ua) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Fa) {
      const t = Ei.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      Ei.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    Ei.set(this.getKey(), this.__typedOnRemoves);
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
    const i = Ir(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = Ir(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Fa) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === za) {
      const t = jn.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      jn.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    jn.set(this.getKey(), this.__typedOnMouseEnters);
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
    const i = Ir(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = Ir(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === za) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Ka) {
      const t = Bn.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Bn.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Bn.set(this.getKey(), this.__typedOnMouseLeaves);
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
    const i = Ir(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = Ir(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Ka) {
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
    const i = _b(t, r);
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
    for (; _e(t) && fu(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; _e(r) && fu(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = Cb(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Sb(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = vb(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Mb(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Ms(e = jf) {
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
function na(e) {
  if (!e || e === Ua)
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
function ia(e) {
  if (!e || e === Fa)
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
function sa(e) {
  if (!e || e === za)
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
function oa(e) {
  if (!e || e === Ka)
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
function Ir(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function du(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function _b(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function fu(e, t) {
  const r = du(e), n = du(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
  if (i.length !== s.length)
    return !1;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    if (a !== s[o])
      return !1;
    const c = r[a], l = n[a];
    if (!c || !l || c.length !== l.length)
      return !1;
    for (let d = 0; d < c.length; d++)
      if (c[d] !== l[d])
        return !1;
  }
  return !0;
}
function Cb(e, t) {
  const r = {}, n = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (const i of n) {
    const s = e[i] ?? {}, o = t[i] ?? {}, a = /* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(o)]), c = {};
    for (const l of a) {
      const d = s[l] ?? o[l];
      d && (c[l] = d);
    }
    Object.keys(c).length > 0 && (r[i] = c);
  }
  return r;
}
function Sb(e, t) {
  const r = {}, n = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (const i of n) {
    const s = e[i] ?? {}, o = t[i] ?? {}, a = /* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(o)]), c = {};
    for (const l of a) {
      const d = s[l] ?? o[l];
      d && (c[l] = d);
    }
    Object.keys(c).length > 0 && (r[i] = c);
  }
  return r;
}
function vb(e, t) {
  const r = {}, n = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (const i of n) {
    const s = e[i] ?? {}, o = t[i] ?? {}, a = /* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(o)]), c = {};
    for (const l of a) {
      const d = s[l] ?? o[l];
      d && (c[l] = d);
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
      const d = s[l] ?? o[l];
      d && (c[l] = d);
    }
    Object.keys(c).length > 0 && (r[i] = c);
  }
  return r;
}
function an(e, t) {
  return `${e}-${t}`;
}
function pu(e) {
  return `external-${e}`;
}
function Gi(e, t, r, n, i) {
  return ze(new nt(e, t, r, n, i));
}
function _e(e) {
  return e instanceof nt;
}
function Bf(e) {
  return e?.type === nt.getType();
}
function Ks(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Vf(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, d = a.length, u = e.isBackward(), f = u ? l : c, p = u ? c : l;
  let m, g;
  for (let y = 0; y < d; y++) {
    const x = a[y];
    if (U(g) && g.isParentOf(x))
      continue;
    const v = y === 0, S = y === d - 1;
    let A = null;
    if (E(x)) {
      const M = x.getTextContentSize(), T = v ? f : 0, z = S ? p : M;
      if (T === 0 && z === 0)
        continue;
      const D = x.splitText(T, z);
      A = D.length > 1 && (D.length === 3 || v && !S || z === M) ? D[1] : D[0];
    } else {
      if (_e(x))
        continue;
      U(x) && x.isInline() && (A = x);
    }
    if (A !== null) {
      if (A && A.is(m))
        continue;
      const M = A.getParent();
      (M == null || !M.is(m)) && (g = void 0), m = M, g === void 0 && (g = Gi(), g.addID(t, r, n, i, s, o), A.insertBefore(g)), g.append(A);
    } else
      m = void 0, g = void 0;
  }
  t === Kr && U(g) && (u ? g.selectStart() : g.selectEnd());
}
function Eb(e, t, r) {
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
const Ab = ["type", "marker", "content"], ja = "unknown", Wf = 1, Pb = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class An extends Qt {
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
      [ja]: (t) => Ob(t) ? {
        conversion: Nb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Lc().updateFromJSON(t);
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
    return Pb.has(this.getTag());
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
    const t = document.createElement(ja);
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
      version: Wf
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
function Nb(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Lc(t, r) };
}
function Lc(e, t, r) {
  return ze(new An(e, t, r));
}
function Ob(e) {
  return e?.tagName.toLowerCase() === ja;
}
function Ie(e) {
  return e instanceof An;
}
const Ji = "id", Hf = 1, wb = [
  "type",
  "marker",
  "code",
  "content"
];
class Ut extends Qt {
  __marker = Ji;
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
    return Gf(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Km(t);
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
      version: Hf
    };
  }
}
function Gf(e, t) {
  return ze(new Ut(e, t));
}
function Ct(e) {
  return e instanceof Ut;
}
function Jf(e) {
  return e?.type === Ut.getType();
}
const js = "c", Yf = 1, qb = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Pt extends Qt {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = js, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Pt(r, n, i, s, o, a);
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
  createDOM() {
    const t = document.createElement("p");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Fs, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: Yf
    };
  }
}
function Xf(e, t, r, n, i) {
  return ze(new Pt(e, t, r, n, i));
}
function Re(e) {
  return e instanceof Pt;
}
function Rb(e) {
  return e?.type === Pt.getType();
}
const Qf = [
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
], Zf = [
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
], $b = [
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
  ...Qf,
  ...Zf
], ep = 1, Ib = ["type", "marker", "content"];
class be extends Qt {
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
    return t !== void 0 && ($b.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Qf.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Zf.includes(t);
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
      span: (t) => Db(t) ? {
        conversion: Lb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Sr().updateFromJSON(t);
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
    return hu(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), hu(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && En(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: ep
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = Sr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function hu(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Lb(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Sr(t) };
}
function Sr(e, t) {
  return ze(new be(e, t));
}
function Db(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return be.isValidMarker(t) && e.classList.contains(be.getType());
}
function $(e) {
  return e instanceof be;
}
function Ub(e) {
  return e?.type === be.getType();
}
const tp = 1, Fb = "c", rp = "span";
class ur extends ls {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Fb, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => np(t) ? {
        conversion: zb,
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
    const t = document.createElement(rp);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Fs, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && En(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Fs, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
      version: tp
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
function zb(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Dc(t) };
}
function Dc(e, t, r, n, i, s) {
  return ze(new ur(e, t, r, n, i, s));
}
function np(e) {
  return e ? e.classList.contains(Fs) && e.tagName.toLowerCase() === rp : !1;
}
function fs(e) {
  return e instanceof ur;
}
function Kb(e) {
  return e?.type === ur.getType();
}
const ip = 1;
class Br extends vc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Br(t.__key);
  }
  static importJSON(t) {
    return Wt().updateFromJSON(t);
  }
  getMarker() {
    return or;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: ip
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Wt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Wt() {
  return ze(new Br());
}
function cr(e) {
  return e instanceof Br;
}
function _o(e) {
  return e?.type === Br.getType();
}
const jb = [
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
], sp = 1, Bb = ["type", "marker", "content"];
class Qe extends vc {
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
    return t !== void 0 && (jb.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Vb,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return Yi().updateFromJSON(t);
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
    return r && En(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: sp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Yi(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Vb(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = Yi(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function Yi(e, t) {
  return ze(new Qe(e, t));
}
function se(e) {
  return e instanceof Qe;
}
function Uc(e) {
  return e?.type === Qe.getType();
}
const Bs = "v", op = 1, Wb = [
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
    super(r ?? t, a), this.__marker = Bs, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new pt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return ap().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add($a, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: op
    };
  }
}
function ap(e, t, r, n, i, s) {
  return ze(new pt(e, t, r, n, i, s));
}
function Ne(e) {
  return e instanceof pt;
}
function cp(e) {
  return e?.type === pt.getType();
}
const Hb = "​", ei = Hb;
var gu;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(gu || (gu = {}));
var mu;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(mu || (mu = {}));
function Gb() {
  return ye(ei);
}
function Jb(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(ei, ""));
}
function ps(e) {
  return e.length > 0 && e.includes(ei) && e.replaceAll(ei, "") === "";
}
function hs(e) {
  return E(e) && ps(e.getTextContent());
}
function lp(e) {
  return Rb(e) || Kb(e);
}
function Be(e) {
  return Re(e) || fs(e);
}
function up(e, t) {
  return e.find((r) => Be(r) && r.getNumber() === t.toString());
}
function Yb(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Be(r));
}
function Ba(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Xb(e) {
  if (!e)
    return;
  if (Be(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !Be(t); )
    t = t.getPreviousSibling();
  if (t && Be(t))
    return t;
}
function Yt(e) {
  return ot(e, j) ?? void 0;
}
function Qb(e) {
  return Ct(e) || Re(e) || $(e) || fs(e) || cr(e) || Ke(e) || se(e) || j(e) || Ne(e) || Ie(e);
}
function dp(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Zb(e) {
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
function ek(e) {
  return Uc(e) || _o(e);
}
function Vs(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function kn(e, t) {
  const r = ne(t, bn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function tk(e, t) {
  const r = U(e) ? e : e.getParent(), n = U(t) ? t : t.getParent(), i = r && n ? Qm(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function rk(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function ti(e) {
  return e?.type === Fe.getType();
}
function nk(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function ik(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Oe(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function Xe(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function fp(e, t, r) {
  const n = Oe(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Lt(e, t) {
  let r = Oe(e);
  return t && (r += `${R}${t}`), r += " ", r;
}
function sk(e) {
  const t = e[us];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function pp(e) {
  return Kc(e) || Kf(e) && e.textType === "marker" || ti(e) && sk(e) === "attribute" ? "" : ti(e) && e.text !== R ? e.text : Ub(e) ? e.children.map((t) => pp(t)).join("") : "";
}
function ok(e) {
  return e.map((r) => pp(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Et(e) {
  return " " + e + R;
}
function Fc(e) {
  const t = [];
  for (const r of e) {
    if (!$(r))
      continue;
    const n = hp(r);
    n !== Dt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function hp(e) {
  return N(e) || dr(e) || E(e) && ne(e, oe) === "attribute" ? "" : E(e) ? e.getTextContent() : U(e) ? e.getChildren().map((t) => hp(t)).join("") : "";
}
function dr(e) {
  return Jt(e) && e.getTextType() === "marker";
}
function Ft(e) {
  return N(e) || dr(e);
}
function yu(e, t) {
  ak(e, t), e.setMarker(t);
}
function ak(e, t) {
  const r = e.getMarker(), n = Oe(r), i = Oe(r, !0), s = Xe(r), o = Xe(r, !0), a = be.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Ft(c))
      return;
    const l = c.getTextContent(), d = l === n || l === i, u = !d && (l === s || l === o);
    if (!(!d && !u)) {
      if (u && a) {
        c.remove();
        return;
      }
      if (N(c))
        c.setMarker(t);
      else if (dr(c)) {
        const f = l.startsWith(Oe("", !0));
        c.setTextContent(d ? Oe(t, f) : Xe(t, f));
      }
    }
  });
}
function Le(e, t = jm) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Me(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function gp(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function mp(e) {
  if (!O(e))
    return bu(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !U(t) || e.anchor.type === "text" && !E(t)))
    return t ?? void 0;
  try {
    return bu(e) ?? t ?? void 0;
  } catch (n) {
    if (gp(n))
      return t ?? void 0;
    throw n;
  }
}
function ck(e, t) {
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
function lk(e) {
  return !!e && e.includes("-");
}
function yp(e) {
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
function gs(e) {
  if (!e)
    return !1;
  if (ho(e) || N(e) || dr(e) || Jt(e) && e.getTextType() === "attribute")
    return !0;
  if (E(e)) {
    const t = ne(e, oe);
    if (t === lr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === R || ps(r))
      return !0;
  }
  return !1;
}
function Co() {
  const e = ye(R);
  return kt(e, oe, lr), e.setMode("token"), e;
}
function uk(e) {
  const t = e.getTextContent();
  t.startsWith(R) || e.setTextContent(R + t);
}
function Pn(e) {
  return E(e) && ne(e, oe) === lr;
}
function bp(e) {
  const t = e.getFirstChild();
  if (!Ft(t) || t === null || Pn(t.getNextSibling()))
    return !1;
  const r = q();
  if (!O(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function ui(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!gs(s)) {
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
function So(e) {
  let t = e.getParent();
  for (; t && _e(t); )
    t = t.getParent();
  return t;
}
function dk(e, t) {
  return ui(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function fk(e, t) {
  const r = So(e);
  if (!r)
    return;
  const n = ui(r);
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
function kp(e, t) {
  const r = ui(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (gs(n))
    return kp(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || Vs(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || Vs(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function hk(e, t) {
  if (t <= 0)
    return 0;
  const r = ui(e);
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
class fr extends Fe {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(dn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
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
      text: t.text || dn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = dn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = dn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = dn(r.__marker, r.__markerSyntax, t), r;
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
function lt(e, t, r) {
  return ze(new fr(e, t, void 0, r));
}
function N(e) {
  return e instanceof fr;
}
function Kc(e) {
  return e?.type === fr.getType();
}
function Xr(e) {
  return e.getTextContent() === dn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function yk(e) {
  e.setTextContent(dn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function dn(e, t, r = !1) {
  return t === "closing" ? Xe(e, r) : t === "selfClosing" ? Xe("") : Oe(e, r);
}
const Tp = 1, bk = "attribute-run";
function aa(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Nr extends Qt {
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
    return xp(t.runKind).updateFromJSON(t);
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
      version: Tp
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
function xp(e) {
  return ze(new Nr(e));
}
function je(e) {
  return e instanceof Nr;
}
const kk = /* @__PURE__ */ new Set(["closed"]);
function sr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !kk.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function _p(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Cp(e) {
  const t = Object.keys(e).filter((n) => !Wy.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Sp(e, t, r, n) {
  return _p(
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
  return e.getChildren().find((t) => N(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function Tk(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Fi(e) === void 0 && vp(e) === void 0;
}
function vp(e) {
  return e.getChildren().find((t) => E(t) && ne(t, oe) === "attribute");
}
function Xi(e, t) {
  return ms(e.getNextSibling(), t);
}
const xk = /^[ \u00A0]+$/;
function jc(e) {
  if (Xr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Oe(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && xk.test(r.slice(t.length));
}
function ms(e, t) {
  let r, n, i, s;
  return je(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), N(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  jc(e) && (r = e, e = e.getNextSibling()), E(e) && ne(e, oe) === "attribute" && (n = e, e = e.getNextSibling()), N(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && Xr(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Vr(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!N(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (E(n) && n.getTextContent() === Et(e.getCaller()))
    return n;
}
function Mp(e) {
  const t = Vr(e);
  return t ? ms(t.getNextSibling(), "cat") : {};
}
function vo(e) {
  const t = e.getFirstChild();
  if (!(!E(t) || N(t)) && ne(t, oe) !== "attribute")
    return t;
}
function Ep(e) {
  const t = vo(e);
  return t ? ms(t.getNextSibling(), "ca") : {};
}
function Ap(e) {
  const t = vo(e);
  if (!t)
    return;
  const r = ms(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Pp(e) {
  const t = Ap(e);
  return t ? ms(t.getNextSibling(), "cp") : {};
}
function Np(e) {
  const t = e.getParent();
  if (!$(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ne(n))
        return n;
      if (!(N(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || E(n) && ne(n, oe) === "attribute" || $(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || je(n)))
        return;
    }
}
function Mo(e) {
  let t, r, n, i, s = e.getNextSibling();
  return je(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), N(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  jc(s) && (t = s, s = s.getNextSibling()), E(s) && ne(s, oe) === "attribute" && (r = s, s = s.getNextSibling()), N(s) && s.getMarkerSyntax() === "selfClosing" && Xr(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function Bc(e) {
  return $(So(e));
}
function Vc(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Bc(t) : t.getChildren().some((i) => $(i) && i.getMarker() === r) ? !0 : void 0;
}
function _k(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!N(t))
      return;
    const r = Vc(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function ys(e) {
  return E(e) && e.getType() === Fe.getType() && ne(e, oe) !== "attribute";
}
function Eo(e) {
  const t = e.getPreviousSibling(), r = e.getParent();
  return !N(t) || !$(r) || !Op(t, r) || !ys(e) ? 0 : e.getTextContent().startsWith(R) ? R.length : 0;
}
function Op(e, t) {
  return e.getMarkerSyntax() === "opening" && Vc(e, t) !== void 0;
}
function Wc(e, t) {
  if (!Op(e, t))
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return N(r) ? Vc(r, t) === !0 ? "spacer" : void 0 : ys(r) ? r.getTextContent().startsWith(R) ? void 0 : "prefix" : "spacer";
}
function Ck(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (N(t) && Wc(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function wp(e, t) {
  const r = q();
  if (!O(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function qp(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!N(t))
      return;
    const r = Wc(t, e);
    if (r !== void 0 && !wp(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        E(n) && n.setTextContent(R + n.getTextContent());
      } else
        t.insertAfter(ye(R));
  });
}
function Rp(e) {
  return e.isAttached() ? e.getChildren().some((t) => N(t) && Wc(t, e) !== void 0 && wp(t, e)) : !1;
}
const Sk = "file", vk = "src", Mk = "colspan", Ek = "category", Ak = "alt", Pk = "closed", Nk = "false";
function Ok(e) {
  return e[Pk] !== Nk;
}
function wk(e) {
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
function $p(e, t, r) {
  const n = r ?? {}, i = Ok(n);
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
        closingAttributes: sr(wk(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [Ek]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + sr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [Ak]: s, ...o } = n;
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
const xt = { wantsRun: !1, valueText: void 0 }, Or = {};
function ca(e, t) {
  if (t === "va")
    return e;
  const r = Xi(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function Hc(e) {
  const t = q();
  if (!O(t) || !t.isCollapsed())
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
  const n = q();
  if (!O(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function Rk(e) {
  return je(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : N(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : E(e) && ne(e, oe) === "attribute";
}
function $k(e) {
  if (N(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!E(e) || ne(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!N(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function la(e) {
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
      if (je(t))
        return t.getRunKind() === e ? la(t) : void 0;
      const r = t.getParent();
      return je(r) ? r.getRunKind() === e ? la(r) : void 0 : $k(t) === e ? la(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Ne(t))
        return xt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? xt : { wantsRun: !0, valueText: R + r };
    },
    scanPieces: (t) => Ne(t) ? Xi(ca(t, e), e) : Or,
    graceSite: (t, r) => Ne(t) ? !r.opener && !r.closer ? Hc(ca(t, e)) : Ao(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Ne(t) ? ca(t, e) : void 0
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
  expectedPieces: () => xt,
  scanPieces: () => Or,
  graceSite: (e) => $(e) && Rp(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Lk = {
  kind: "char",
  ownerPredicate: (e) => $(e),
  ownerOf: (e) => {
    if (!E(e) || ne(e, oe) !== "attribute")
      return;
    const t = e.getParent();
    return $(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!$(e) || Fi(e) === void 0)
      return xt;
    const t = sr(e.getUnknownAttributes() ?? {}, ko(e.getMarker()));
    return t === "" ? xt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => $(e) ? { value: vp(e) } : Or,
  graceSite: (e, t) => {
    if (!$(e) || t.value)
      return !1;
    const r = Fi(e);
    if (!r)
      return !1;
    const n = q();
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
    insertRunBefore: (e) => $(e) ? Fi(e) : void 0
  }
};
function Ip(e) {
  if (N(e))
    return e.getMarker() === "cat";
  if (!E(e) || ne(e, oe) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return N(t) && t.getMarker() === "cat";
}
function Dk(e) {
  const t = e.getParent();
  if (!j(t))
    return;
  const r = Vr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Ip(n))
        return;
    }
}
const Uk = {
  kind: "cat",
  ownerPredicate: (e) => j(e),
  ownerOf: (e) => {
    if (je(e))
      return e.getRunKind() === "cat" && j(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return je(t) ? t.getRunKind() === "cat" && j(t.getParent()) ? t.getParent() ?? void 0 : void 0 : Ip(e) ? Dk(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!j(e) || e.getIsCollapsed() !== !1)
      return xt;
    const t = e.getCategory();
    return t === void 0 ? xt : { wantsRun: !0, valueText: R + t };
  },
  scanPieces: (e) => j(e) ? Mp(e) : Or,
  graceSite: (e, t) => {
    if (!j(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Vr(e);
      return r !== void 0 && Hc(r);
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
    insertRunAfter: (e) => j(e) ? Vr(e) : void 0
  }
};
function Fk(e) {
  return je(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : N(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : E(e) && ne(e, oe) === "attribute";
}
function zk(e) {
  if (N(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!E(e) || ne(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!N(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function Kk(e) {
  const t = e.getParent();
  if (!Re(t))
    return;
  const r = vo(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Fk(n))
        return;
    }
}
function Tu(e) {
  const t = (r) => Re(r) ? e === "ca" ? vo(r) : Ap(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Re(r),
    ownerOf: (r) => {
      if (je(r))
        return r.getRunKind() === e && Re(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return je(n) ? n.getRunKind() === e && Re(n.getParent()) ? n.getParent() ?? void 0 : void 0 : zk(r) === e ? Kk(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Re(r))
        return xt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? xt : { wantsRun: !0, valueText: R + n };
    },
    scanPieces: (r) => Re(r) ? e === "ca" ? Ep(r) : Pp(r) : Or,
    graceSite: (r, n) => {
      if (!Re(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && Hc(i);
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
function Lp(e) {
  if (N(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return E(e) && ne(e, oe) === "attribute";
}
function jk(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ke(t)) {
      const r = N(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Lp(t))
      return;
  }
}
const Bk = {
  kind: "milestone",
  ownerPredicate: (e) => Ke(e),
  ownerOf: (e) => {
    const t = je(e) ? e.getRunKind() === "milestone" ? e : void 0 : je(e.getParent()) ? e.getParent() : Lp(e) ? e : void 0;
    if (!t || je(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return je(t) ? Ke(r) ? r : void 0 : jk(t);
  },
  expectedPieces: (e) => {
    if (!Ke(e))
      return xt;
    const t = Sp(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = sr(t, xo(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : R + r };
  },
  scanPieces: (e) => {
    if (!Ke(e))
      return Or;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Mo(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Ke(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = q();
      if (!O(r) || !r.isCollapsed())
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
    glyphMarker: (e) => Ke(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, Vk = $p("optbreak", void 0, void 0).opening, Wk = {
  kind: "optbreak",
  ownerPredicate: (e) => Ie(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Ie(t) || t.getTag() !== "optbreak"))
      return E(e) || Jt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: Vk }),
  scanPieces: (e) => Ie(e) ? { value: e.getFirstChild() ?? void 0 } : Or,
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
  expectedPieces: () => xt,
  scanPieces: () => Or,
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
  expectedPieces: () => xt,
  scanPieces: () => Or,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Qi = [
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
], Jk = new Map(Qi.map((e) => [e.kind, e]));
function Tn(e) {
  const t = Jk.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function xn(e) {
  for (const t of Qi) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function Dp(e) {
  return xn(e) !== void 0;
}
const Ws = "unmatched", Up = 2;
function zi(e) {
  return `\\${e}`;
}
class wr extends Fe {
  __marker;
  constructor(t = "", r) {
    super(zi(t), r), this.__marker = t, this.__mode = 1;
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
      [Ws]: (t) => Xk(t) ? {
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(ou), r.title = xu(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = xu(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Ws);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(ou), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: Up
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Fp(e) {
  return e.getTextContent() === zi(e.getMarker());
}
function xu(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function Yk(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Gc(t) };
}
function Gc(e) {
  return ze(new wr(e));
}
function Xk(e) {
  return e?.tagName.toLowerCase() === Ws;
}
function Qr(e) {
  return e instanceof wr;
}
const zp = "table", Va = "immutable-table", Kp = 1, Qk = ["type", "marker", "content"];
class Nn extends Qt {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Va;
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
      type: Va,
      ...t !== void 0 && { unknownAttributes: t },
      version: Kp
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function Zk(e) {
  return ze(new Nn(e));
}
function jp(e) {
  return e instanceof Nn;
}
function eT(e) {
  return e?.type === Va;
}
const Bp = "table:row", _u = "immutable-table-row", Vp = 1, Wa = "tr", tT = ["type", "marker", "content"];
class di extends Qt {
  __marker;
  __unknownAttributes;
  constructor(t = Wa, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return _u;
  }
  static clone(t) {
    return new di(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return rT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Wa).setUnknownAttributes(t.unknownAttributes);
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
      version: Vp
    };
  }
}
function rT(e, t) {
  return ze(new di(e, t));
}
const Wp = "table:cell", Cu = "immutable-table-cell", Hp = 1, Ha = "tc1", nT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function iT(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class fi extends Qt {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Ha, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Cu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new fi(r, n, i, s, o);
  }
  static importJSON(t) {
    return sT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Ha).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
      version: Hp
    };
  }
}
function sT(e, t, r, n) {
  return ze(new fi(e, t, r, n));
}
function Po(e, t) {
  const r = e.getChildAtIndex(t);
  return E(r) ? r : void 0;
}
function Xt(e, t) {
  const r = Po(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Zi(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function oT(e) {
  return e.getChildren().some((t) => N(t) && t.getMarkerSyntax() === "closing");
}
function aT(e) {
  return Zi(e) ? void 0 : { closed: "false" };
}
function cT(e, t, r, n) {
  const i = t.getMarker(), s = Bc(t), o = oT(t);
  if (n) {
    e.append(lt(i, "opening", s));
    const [a] = r;
    ys(a) && !a.getTextContent().startsWith(R) && a.setTextContent(R + a.getTextContent());
  }
  e.append(...r), o && e.append(lt(i, "closing", s));
}
function _n(e) {
  return ot(e, $) ?? void 0;
}
function Jc(e) {
  let t = e.getParent();
  for (; $(t); )
    t = t.getParent();
  return t;
}
function Ga(e) {
  const t = Gp(e);
  return e.getChildren().every((r) => N(r) || t && ne(r, oe) === "attribute" || E(r) && r.getTextContent().replaceAll(R, "") === "");
}
function Gp(e) {
  return Zi(e);
}
function lT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? sr(r, ko(e.getMarker())) : "";
  n !== "" && t.insertAfter(ye(n)), e.remove();
}
function uT(e, t) {
  if (Zi(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(lt(e.getMarker(), "closing", Bc(e)));
}
function dT(e, t) {
  return $(e) && !Zi(e) && !Zi(t);
}
function fT(e, t, r) {
  Ga(e) && e.getChildren().forEach((i) => {
    N(i) || i.remove();
  });
  const [n] = t;
  r && ys(n) && !n.getTextContent().startsWith(R) && n.setTextContent(R + n.getTextContent()), e.append(...t);
}
function pT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Gp(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const d = l.getNextSibling(), u = N(l) && l.getMarkerSyntax() === "closing", f = s && ne(l, oe) === "attribute";
    !u && !f && o.push(l), l = d;
  }
  const a = dT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      fT(e, o, n);
    else {
      const l = Sr(t.getMarker(), aT(t));
      cT(l, t, o, n), e.insertAfter(l), Ga(l) ? l.remove() : c = l;
    }
  i && !a && uT(t, n), Ga(t) && lT(t, c);
}
function ri(e, t) {
  let r = e.getParent();
  for (; $(r); )
    pT(e, r, t), r = e.getParent();
}
function Yc(e) {
  if (E(e) && !N(e)) {
    const t = Eo(e);
    e.select(t, t);
    return;
  }
  if (U(e)) {
    const t = e.getChildren().find((r) => !N(r));
    if (t) {
      Yc(t);
      return;
    }
    e.selectEnd();
  }
}
const Zn = /* @__PURE__ */ new WeakMap();
function hT(e, t) {
  return Zn.set(e, t), () => {
    Zn.get(e) === t && Zn.delete(e);
  };
}
function Su(e) {
  return Zn.get(e);
}
function gT(e) {
  return Zn.get(ci())?.has(e.getKey()) ?? !1;
}
function mT(e) {
  Zn.get(ci())?.add(e.getKey());
}
function yT(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Ja(e) {
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
function No(e, t, r) {
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
function Jp(e, t) {
  return !Ja(e.scanPieces(t));
}
function bs(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!No(e, n, r))
    return !1;
  const i = q();
  if (!O(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Vs(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function kT(e, t, r, n) {
  return !r.wantsRun || Ja(n) || Zm(Hi) ? !1 : ci().getEditorState().read(() => {
    const i = ie(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Ja(e.scanPieces(i));
  });
}
function TT(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Mu(e) {
  const t = ye(e);
  return kt(t, oe, "attribute"), t;
}
function xT(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = xp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function _T(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    E(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Mu(n.valueText));
    return;
  }
  const l = xT(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const d = r.opener ?? (() => {
    const f = lt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let u = r.value;
  n.valueText === void 0 ? (u?.remove(), u = void 0) : E(u) ? Xc(u.getTextContent(), n.valueText) && u.setTextContent(n.valueText) : (u = Mu(n.valueText), d.insertAfter(u)), a !== "none" && !r.closer && (u ?? d).insertAfter(lt(a === "selfClosing" ? "" : o(t), a));
}
function es(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (No(e, i, n) && !gT(t)) {
    if (kT(e, t, n, i)) {
      mT(t);
      return;
    }
    if (!bs(e, t)) {
      if (!n.wantsRun) {
        TT(i);
        return;
      }
      _T(e, t, i, n);
    }
  }
}
function CT(e, t, r) {
  es(e, t), t.isAttached() && bs(e, t) && r.add(t.getKey());
}
function Oo(e) {
  if (!E(e))
    return !1;
  if (N(e) || Ne(e) || Qr(e))
    return !0;
  const t = ne(e, oe);
  return t === "attribute" || t === lr;
}
function Qc(e, t) {
  return N(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && Xr(e) && $(e.getParent())) : !1;
}
function ST() {
  const e = q();
  return O(e) ? Qc(e.focus.getNode(), e.focus.offset) : !1;
}
function Yp(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return E(t) && Oo(t) ? t : void 0;
}
function vT(e) {
  const t = Yp(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function MT(e) {
  const t = Yp(e);
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
    if (!E(n))
      return;
    if (!Oo(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Pu(e, t) {
  const r = ET(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Xp(e) {
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
const Hs = "verse-block", Qp = 1, AT = "verse-block";
class pi extends Qt {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Hs;
  }
  static clone(t) {
    return new pi(t.__number, t.__key);
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
    return yp(this.getNumber());
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
      type: Hs,
      number: this.getNumber(),
      version: Qp
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Nu(e, t) {
  const { start: r, end: n } = yp(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Ou(e, "data-verse-start", i ? r : NaN), Ou(e, "data-verse-end", i ? n : NaN);
}
function Ou(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function PT(e) {
  return ze(new pi(e));
}
function ts(e) {
  return e instanceof pi;
}
function NT(e) {
  return e?.type === Hs;
}
const OT = [
  Ut,
  ur,
  Pt,
  pt,
  be,
  Se,
  Gt,
  fr,
  An,
  Pr,
  wr,
  Qe,
  Br,
  Nn,
  di,
  fi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Nr,
  {
    replace: vc,
    with: () => Wt(),
    withKlass: Br
  }
], Gs = {
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
}, wT = {
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
      category: ar(r)?.category ?? k.Uncategorized,
      type: wT[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: ar(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function wu(e, t, r) {
  const n = {
    type: xr,
    version: Tr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return _o(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Zp = "v", eh = 1, RT = "verse-selected";
class St extends ls {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Zp, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add($a, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && En(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add($a, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Lt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Ds + this.getNumber() + Ds
    );
    return C($T, { nodeKey: this.getKey(), text: t });
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
      version: eh
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (gp(r))
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
  const [r] = gy(e);
  return C("span", { className: r ? RT : void 0, children: t });
}
function IT(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Zc(t) };
}
function Zc(e, t, r, n, i, s) {
  return ze(new St(e, t, r, n, i, s));
}
function LT(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Zp;
}
function On(e) {
  return e instanceof St;
}
function DT(e) {
  return e?.type === St.getType();
}
function me(e) {
  return Ne(e) || On(e);
}
function th(e) {
  return cp(e) || DT(e);
}
function UT(e) {
  return FT(e).find((t) => se(t));
}
function FT(e) {
  return e.some(ts) ? e.flatMap((t) => ts(t) ? t.getChildren() : t) : e;
}
function wo(e) {
  return U(e) ? ts(e) ? e.getChildren().flatMap(wo) : e.getChildren() : [];
}
function zT(e, t) {
  return wo(e).find((i) => me(i) && zc(t, i.getNumber()));
}
function KT(e, t) {
  return t === 0 ? UT(e) : e.map((r) => zT(r, t)).filter((r) => r)[0];
}
function Js(e) {
  return wo(e).find((r) => me(r));
}
function rh(e, t) {
  if (!U(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (me(i))
      return i;
  }
}
function jT(e) {
  const t = e.getParent();
  if (t && U(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (me(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Be(r); ) {
    const n = Js(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Ys(e) {
  return wo(e).findLast((t) => me(t));
}
function BT(e) {
  if (!Ne(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const r = e.getTextContent().indexOf(t);
  return r < 0 ? 0 : r + t.length;
}
function VT(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && U(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function WT(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return VT(t, e, r);
  if (E(e)) {
    const n = BT(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function ua(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function HT(e) {
  const t = Ba(e);
  if (!(!t || Be(t)))
    return me(t) ? t : Ys(t) ?? rl(t);
}
function GT(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!O(t))
    return ua(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  if (WT(e, t)) {
    const i = HT(e);
    return i ? ua(i) : { verseNum: n };
  }
  return ua(e);
}
function JT(e) {
  return Qb(e) || On(e);
}
function el(e) {
  if (E(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(R) && e.setTextContent(`${t} `);
  }
}
function nh(e) {
  if (E(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function ih(e, t) {
  return e.getEditorState().read(() => !ie(t));
}
function YT(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = tl(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && U(i) && U(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && U(i)) {
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
      let s = qu(i);
      for (; s && !Be(s); ) {
        const o = Js(s);
        if (o) {
          n = o;
          break;
        }
        s = qu(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = Js(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && Be(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function XT(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = tl(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && U(i) && (n = rh(i, r.getIndexWithinParent())), !n && i) {
      let o = Ru(i);
      for (; o && !Be(o); ) {
        const a = Ys(o);
        if (a) {
          n = a;
          break;
        }
        o = Ru(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Be(s); ) {
      const o = Ys(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function qu(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function Ru(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function tl(e, t) {
  if (U(e) && O(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && me(n))
      return n;
    const i = rh(e, t.anchor.offset);
    if (i)
      return i;
    const s = Js(e);
    if (s)
      return s;
  }
  return rl(e);
}
function rl(e) {
  if (!e || Be(e))
    return;
  if (me(e))
    return e;
  let t = Ba(e);
  for (; t; ) {
    if (Be(t))
      return;
    if (me(t))
      return t;
    const r = Ys(t);
    if (r)
      return r;
    t = Ba(t);
  }
}
const QT = ["style"], ZT = ["style", "code"], Xs = ["style", "cid"], ex = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], tx = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], rx = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], nx = ["style", "caller", "category", "contents"], ix = ["tag", "marker", "contents"], sx = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], rs = `
`;
function ox(e, t) {
  const r = ie(e);
  if (!At(r))
    return;
  const n = sh(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function sh(e, t = "delta-doc") {
  if (!e)
    return;
  const r = yo();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (ni(i[u], c)) {
        const f = i[u];
        if (i.splice(u, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      ni(s[u].node, c) && s.splice(u, 1);
    const d = s[s.length - 1];
    if (d) {
      if (l.getKey() === o)
        return d.position;
      continue;
    }
    if (l.getKey() === o) {
      if (vr(l) || At(l))
        return n;
      Mt(l) && (a = l);
    }
    if (Mt(l) && (i.includes(l) || i.push(l)), oh(l, t)) {
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
function $u(e, t, r = "delta-doc") {
  if (e.length < 2 || !lx(e[0]) || !cx(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => ax(n, r)?.getKey());
}
function ax(e, t = "delta-doc") {
  const r = yo();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (ni(i[d], o)) {
        const u = i[d];
        if (i.splice(d, 1), n === e)
          return u;
        n += 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      ni(s[d].node, o) && s.splice(d, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Mt(a) && (i.includes(a) || i.push(a)), oh(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = nl(a, t);
    if (vr(a) && l > 0 && e >= n && e < n + l || At(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function ni(e, t) {
  return e ? t ? !Vs(t.node, e.getKey()) : !0 : !1;
}
function vr(e) {
  return E(e) && !At(e);
}
function At(e) {
  return Be(e) || me(e) || Ke(e) || j(e) || Ie(e) || Qr(e);
}
function Ur(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function cx(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && sx.includes(t);
}
function lx(e) {
  return e.retain != null && typeof e.retain == "number";
}
function oh(e, t) {
  return j(e) || Ie(e) ? !0 : t === "apply" && U(e) && At(e);
}
function ah(e) {
  const t = e.getParent();
  return Ft(e) && se(t) && t.getFirstChild() === e;
}
function Ya(e) {
  const t = e.getParent();
  return t !== null && ot(t, je) !== null;
}
function ux(e) {
  const t = e.getParent();
  return $(t) && e.getTextContent() === Dt && t.getChildrenSize() === 1;
}
function dx(e) {
  const t = e.getParent();
  if (!j(t))
    return !1;
  const r = e.getPreviousSibling();
  return N(r) && r === t.getFirstChild() && e.getTextContent() === Et(t.getCaller());
}
function fx(e) {
  return !Dp(e) && nl(e, "delta-doc") === e.getTextContentSize();
}
function nl(e, t) {
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
    (hs(e) || ah(e) || ne(e, oe) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ne(e, oe) === "attribute" || Ya(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Oc) || ux(e) || dx(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Xa(e, t) {
  const r = { insert: e.__text }, n = ne(e, jr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = ch(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function Iu(e) {
  const t = new $i();
  return e.isEmpty() || e.read(() => {
    const r = De();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && cr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = px();
    for (const s of i)
      t.push(s);
  }), t;
}
function il(e, t) {
  const r = [], n = li(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...Lu(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...Lu(c, n.length, n, i, s, o, a));
  return r;
}
function px() {
  return il();
}
function Lu(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return hx(e, a, n), gx(e, a, i, s, o), mx(e, t, r, i, o, s, a), Be(e) && a.push(Tx(e)), me(e) && a.push(_x(e)), Ke(e) && a.push(Cx(e)), Qr(e) && a.push(Sx(e)), bx(e, a, s), yx(e, a, s), Ax(c, s), a;
}
function hx(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    Ct(n) ? t.push(kx(n)) : se(n) ? t.push(xx(n)) : cr(n) && t.push({ insert: rs });
  }
  Mt(e) && (r.includes(e) || r.push(e));
}
function gx(e, t, r, n, i) {
  if (!E(e) || Ne(e) || Qr(e))
    return;
  const s = e.getParent();
  if (j(s) && s.getFirstChild() === e)
    return;
  const o = Yt(e) !== void 0;
  if (N(e) && (o || ah(e) || Ya(e) || Dp(e)) || ne(e, oe) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (ps(a))
    return;
  const c = e.getPreviousSibling();
  if (j(s) && N(c) && c === s.getFirstChild() && a === Et(s.getCaller()))
    return;
  const l = $(s) ? s : void 0;
  o && l && c === l.getFirstChild() && (a = a.slice(Eo(e)));
  const d = a.startsWith(Oc) || ne(e, oe) === "attribute" || Ya(e), u = !!l && a === Dt && l.getChildrenSize() === 1, f = qo(e, n), p = f ? r.filter((y) => f.children.includes(y)) : r, m = Xa(e, p);
  if (m.insert = a, f) {
    if (!a || a === R || d)
      return;
    f.contentsOps?.push(m);
  } else
    u || d || t.push(m);
  const g = a !== "" && !u && !(d && l);
  if (r.length > 0 && g)
    for (const y of r)
      i.add(y);
}
function mx(e, t, r, n, i, s, o) {
  $(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (ni(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = Mx(c), d = qo(c, s);
        d ? d.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function yx(e, t, r) {
  if (!j(e))
    return;
  const n = vx(e), i = qo(e, r), s = {
    node: e,
    children: li(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function bx(e, t, r) {
  if (!Ie(e))
    return;
  const n = Ex(e), i = qo(e, r), s = {
    node: e,
    children: li(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Zr(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function kx(e) {
  const t = { style: Ji, code: e.__code };
  return Zr(t, e), { insert: rs, attributes: { book: t } };
}
function Tx(e) {
  const t = { style: js, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Zr(t, e), { insert: { chapter: t } };
}
function xx(e) {
  const t = { style: e.__marker };
  return Zr(t, e), { insert: rs, attributes: { para: t } };
}
function _x(e) {
  const t = { style: Bs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Zr(t, e), { insert: { verse: t } };
}
function Cx(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), Zr(t, e), { insert: { milestone: t } };
}
function Sx(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function vx(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), Zr(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ne(e, jr);
  return n && (r.attributes = { segment: n }), r;
}
function Mx(e) {
  const t = { insert: "" }, r = ch([e]);
  return r && (t.attributes = { char: r }), t;
}
function Ex(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), Zr(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function qo(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function Ax(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    ni(t[r].node, e) && t.splice(r, 1);
}
function ch(e) {
  if (e.length === 0)
    return;
  const t = e.map(Px);
  return t.length === 1 ? t[0] : t;
}
function Px(e) {
  const t = { style: e.__marker }, r = ne(e, bn);
  return r && (t.cid = r), Zr(t, e), t;
}
function sl(e) {
  let t = 0;
  for (const { node: r } of yo())
    if (j(r)) {
      if (r.getKey() === e)
        return t;
      t += 1;
    }
}
function Nx(e) {
  let t = 0;
  for (const { node: r } of yo())
    if (j(r)) {
      if (t === e)
        return r;
      t += 1;
    }
}
const lh = 1;
class Ht extends ls {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Us, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new Ht(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => wx(t) ? {
        conversion: Ox,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ol().updateFromJSON(t);
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
    return r && En(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => qx(t, n), (l) => Rx(t, n, s, l), () => $x(t, n), () => Ix(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return C("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Us && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === Nf && i ? (
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
      version: lh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Ox(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: ol(t, r) };
}
function ol(e, t, r) {
  return ze(new Ht(e, t, r));
}
function wx(e) {
  return e ? e.classList.contains(Ht.getType()) : !1;
}
function Zt(e) {
  return e instanceof Ht;
}
function qx(e, t) {
  return e.getEditorState().read(() => {
    const r = ie(t);
    if (!j(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function Rx(e, t, r, n) {
  e.update(() => {
    const i = ie(t);
    if (!j(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = ie(r);
    if (!Zt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function $x(e, t) {
  return e.getEditorState().read(() => {
    const r = ie(t);
    if (!j(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return il(r);
  });
}
function Ix(e, t) {
  return e.getEditorState().read(() => sl(t));
}
const Lx = [
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
], Dx = ["†"];
function al(e) {
  if (uh())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = Du(t), [s, o] = Du(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = Uu(n, i), [s, o] = Uu(s, o);
  const a = Mc();
  return a.anchor = nu(n.getKey(), i, Fu(n)), a.focus = nu(s.getKey(), o, Fu(s)), a;
}
function Qa() {
  if (uh())
    return;
  const e = q();
  if (!e || !O(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Qs(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Qs(i, s);
  return { start: n, end: o };
}
function Du(e) {
  if (Bm(e)) {
    const t = cf(e.jsonPath);
    let r = De();
    for (let n = 0; n < t.length; n++) {
      if (!r || !U(r))
        return [void 0, void 0];
      const i = ui(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : pk(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && U(r) ? [r, hk(r, e.offset)] : [void 0, void 0];
  }
  if (Vm(e) || Wm(e)) {
    const t = Ai(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (U(t)) {
      const n = t.getLastChild();
      if (n && E(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && U(r) ? [r, 0] : [void 0, void 0];
  }
  if (Hm(e)) {
    const t = Ai(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (U(t)) {
      const n = t.getLastChild();
      if (n && E(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && U(r) ? [r, 0] : [void 0, void 0];
  }
  if (Gm(e)) {
    const t = Ai(e.jsonPath);
    if (!t || !U(t))
      return [void 0, void 0];
    const r = da(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && E(n) ? [n, 0] : [void 0, void 0];
  }
  if (Jm(e)) {
    const t = Ai(e.jsonPath);
    if (!t || !U(t))
      return [void 0, void 0];
    const r = da(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && E(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (Ym(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = Ai(e.jsonPath);
    if (!n || !U(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = da(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && E(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${Xm(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Uu(e, t) {
  if (!dr(e))
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
function Fu(e) {
  return U(e) ? "element" : "text";
}
function da(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (N(n) && n.getMarkerSyntax() === t || t === "closing" && N(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (dr(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function Ai(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = cf(r);
  let i = De();
  for (const s of n) {
    if (!i || !U(i))
      return;
    const o = ui(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Qs(e, t) {
  if (N(e)) {
    const r = e.getMarkerSyntax(), n = Ux(e), i = n ? rn(cn(n)) : rn(cn(e));
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
      return Qs(n, s);
    }
    const i = So(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return Qs(i, o);
    }
  }
  if (U(e)) {
    const r = e.getChildAtIndex(t);
    if (dr(r))
      return {
        jsonPath: rn(cn(e))
      };
    const n = kp(e, t);
    return n.type === "text" ? {
      jsonPath: rn([...cn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: rn(cn(e)),
      offset: n.index
    };
  }
  if (E(e)) {
    const r = fk(e, t);
    if (r)
      return {
        jsonPath: rn([
          ...cn(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: rn(cn(e)), offset: t };
}
function Ux(e) {
  const t = e.getParent();
  if (!t || !U(t))
    return;
  const r = Fx(e);
  return r && !Mt(r) && !E(r) && !_e(r) ? r : t;
}
function Fx(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!gs(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function cn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = So(r);
    if (!n)
      break;
    const i = dk(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function uh() {
  for (let e = De().getFirstChild(); e; e = e.getNextSibling())
    if (ts(e))
      return !0;
  return !1;
}
function dh(e, t, r, n, i, s, o) {
  if (!Se.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? al(r) : q();
  if (!O(a))
    return;
  const c = jx(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (Ii(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), d = fh(e, l, c, i, s, void 0, void 0);
  return Kx(d, a, i), d;
}
function cl(e) {
  return e !== "expanded";
}
function zx(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!E(r) || !$(r.getParent()))
    return;
  if (N(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return N(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function Kx(e, t, r) {
  const n = cl(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || rk(t), Xp(t);
  const i = zx(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find($)?.selectEnd();
}
function Vn(e, t, r) {
  const n = Sr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(lt(e)) : r?.markerMode === "visible" && n.append(Cr("marker", Oe(e)));
  const s = t === "" ? Dt : i ? R + t : t;
  return n.append(ye(s)), n;
}
function jx(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, d = i.chapterVerseSeparator ?? ":", u = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${d}${(l ?? `${c}`).replace(/-/g, () => u)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Vn("fr", f, n)), !e.isCollapsed()) {
        const p = Ku(e);
        p.length > 0 && o.push(Vn("fq", p, n));
      }
      o.push(Vn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Vn("xo", f, n)), !e.isCollapsed()) {
        const p = Ku(e);
        p.length > 0 && o.push(Vn("xq", p, n));
      }
      o.push(Vn("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function fh(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : cl(n?.noteMode), l = $c(e, t, c);
  s && kt(l, jr, () => s);
  const d = n?.isNoteShellEditable === !1;
  let u, f;
  n?.markerMode === "editable" ? (u = lt(e), d && u.setMode("token"), a || (f = lt(e, "closing"))) : n?.markerMode === "visible" && (u = Cr("marker", Oe(e) + " "), a || (f = Cr("marker", Xe(e))));
  let p;
  if (u && l.append(u), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = ye(Et(l.__caller)), d && p.setMode("token"), l.append(p, ...r));
  else {
    const m = () => Co(), g = r.flatMap(Gx(m));
    if (t === "")
      l.append(...g);
    else {
      const y = Fc(r);
      let x = () => {
      };
      i?.noteCallerOnClick && (x = i.noteCallerOnClick), p = ol(l.__caller, y, x), l.append(p, m(), ...g);
    }
  }
  return f && l.append(f), l;
}
function Fr(e) {
  if (typeof e == "string") {
    const t = ie(e);
    return j(t) ? t : void 0;
  }
  return Nx(e);
}
function zu(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (On(n) || !n) {
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
      Bx(i);
    else {
      const s = ll(e), o = s === -1 ? n.length : s;
      e.select(o, o);
    }
  }
}
function ll(e) {
  const t = Xe(e.getMarker());
  return e.getChildren().findIndex((r) => N(r) && r.getMarkerSyntax() === "closing" || dr(r) && r.getTextContent() === t);
}
function Bx(e) {
  const t = ll(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const r = e.getChildAtIndex(t - 1);
  E(r) && !gs(r) ? r.selectEnd() : e.select(t, t);
}
function Vx(e) {
  const t = e.getNextSibling();
  if (E(t) && !Oo(t)) {
    t.select(0, 0);
    return;
  }
  const r = e.getParent();
  if (!r)
    return;
  const n = e.getIndexWithinParent() + 1;
  r.select(n, n);
}
function Wx(e, t) {
  let r = Math.max(t, 0), n;
  const i = Vr(e);
  for (const { node: o } of li(e)) {
    if (!ph(o, i))
      continue;
    const a = Eo(o), c = o.getTextContentSize() - a;
    if (r < c) {
      const l = a + r;
      return o.select(l, l), !0;
    }
    r -= c, n = o;
  }
  if (!n)
    return !1;
  const s = n.getTextContentSize();
  return n.select(s, s), !0;
}
function ph(e, t) {
  return !E(e) || gs(e) || Oo(e) ? !1 : !t || !e.is(t);
}
function Hx(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some($))
    return;
  const t = Vr(e);
  for (const { node: n } of li(e))
    if (ph(n, t))
      return;
  const r = ll(e);
  return r === -1 ? e.getChildrenSize() : r;
}
function Gx(e) {
  return (t) => Jt(t) ? [t] : [t, e()];
}
function Jx(e) {
  const t = e.getParent();
  return t !== null && ot(t, j) !== null;
}
function Ku(e) {
  if (!O(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = uf(e);
  let a = "";
  for (const c of t)
    if (!(j(c) || Zt(c) || Jx(c)) && !N(c) && !Qr(c) && ne(c, oe) !== "attribute") {
      if (me(c)) {
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
const hh = [
  Ht,
  St,
  ...OT
], Yx = [
  pi,
  ...hh
], Xx = Yr((e, t) => {
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
function Qx() {
  const [e, t] = fe(void 0), [r, n] = fe(), i = Y(null), s = ge((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = vy(l, c, () => {
      My(l, c, {
        placement: "bottom-start",
        middleware: [Ey(), Ay()]
      }).then((d) => {
        n(d.placement), t((u) => u?.x === d.x && u?.y === d.y ? u : { x: d.x, y: d.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = ge(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return K(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function Zx({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = Qx();
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
const e_ = Dm(Xx);
function gh({ isOpen: e = !1, children: t }) {
  const r = Y(null), { coords: n, placement: i } = Zx({ isOpen: e, floatingBoxRef: r }), s = Ue(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return pn(
    C(e_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const mh = of(void 0);
function ul() {
  const e = af(mh);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function t_(e, t) {
  const [r, n] = fe(0), [i, s] = fe(-1), o = Ue(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = ge(() => {
    n((u) => {
      const f = o.length;
      return f ? (u - 1 + f) % f : 0;
    });
  }, [o.length]), l = ge(() => {
    n((u) => {
      const f = o.length;
      return f ? (u + 1) % f : 0;
    });
  }, [o.length]), d = ge(() => {
    const u = o.length;
    if (r >= 0 && r < u) {
      const f = o[r];
      t?.(f), s(r);
    }
  }, [r, o, t]);
  return {
    state: a,
    moveUp: c,
    moveDown: l,
    select: d,
    setActiveIndex: n,
    setSelectedIndex: s
  };
}
function r_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = t_(t, r);
  return C(mh.Provider, { value: i, children: C("div", { ...n, children: e }) });
}
const yh = Yr(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = ul(), d = ge((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), u = ge((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return C("button", { ref: s, role: "menuitem", ...i, onClick: d, onMouseEnter: u, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function n_({ children: e, autoIndex: t = !0, ...r }) {
  const n = Y(null), { state: { activeIndex: i, menuItems: s } } = ul(), o = Ue(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Ue(() => {
    const c = o(s);
    return t ? Um.map(c, (l, d) => Fm(l) && l.type === yh && l.props.index === void 0 ? zm(l, { index: d }) : l) : c;
  }, [o, t, s]);
  return K(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const d = c.getBoundingClientRect(), u = l.getBoundingClientRect();
        u.bottom > d.bottom ? c.scrollTop += u.bottom - d.bottom : u.top < d.top && (c.scrollTop -= d.top - u.top);
      }
    }
  }, [i]), C("div", { ref: n, role: "menu", ...r, children: a });
}
const i_ = (e, t, r) => ws(e, r).toLowerCase().includes(t.toLowerCase()), ju = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", ws = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function s_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let d, u;
  i ? (u = i, d = r.length > 0 ? ju(r[0]) : "") : (d = n || (r.length > 0 ? ju(r[0]) : ""), u = (m, g) => i_(m, g, d));
  const f = s || d, p = /* @__PURE__ */ new Map();
  return r.filter((m) => {
    try {
      return u(m, t);
    } catch (g) {
      return console.warn("Error filtering item:", m, g), !1;
    }
  }).sort((m, g) => {
    const y = (S) => (p.has(S) || p.set(S, ws(S, f).toLowerCase()), p.get(S) ?? ""), x = a ? ws(m, f) : y(m), v = a ? ws(g, f) : y(g);
    for (const S of c)
      switch (S) {
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
          const A = x.indexOf(l), M = v.indexOf(l);
          if (A !== -1 && M === -1)
            return -1;
          if (M !== -1 && A === -1)
            return 1;
          if (A !== -1 && M !== -1)
            return A - M;
          break;
        }
      }
    return x.localeCompare(v);
  });
}
const fa = {
  Root: r_,
  Options: n_,
  Option: yh
};
function o_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Ue(() => s_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function a_() {
  const { moveUp: e, moveDown: t, select: r } = ul();
  return Ue(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const c_ = () => {
  const e = a_(), [t] = ae();
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
    return t.registerCommand(Er, r, $e);
  }, [t, e]);
};
function l_() {
  return c_(), null;
}
const u_ = ["Shift", "Control", "Alt", "Meta"];
function bh(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ae(), d = s !== void 0, [u, f] = fe(""), p = d ? s ?? "" : u, m = o_({ query: p, items: t, filterBy: "name" }), g = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return K(() => {
    a?.(p, m);
  }, [a, p, m]), K(() => l.registerCommand(Er, (y) => {
    if (d || c?.includes(y.key) || u_.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const v = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((S) => S.slice(0, -1));
      }
    }[y.key];
    return v ? (y.stopPropagation(), y.preventDefault(), v(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((S) => S + y.key), !0) : !1;
  }, $e), [l, d, p, o, n, c]), Te(fa.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: m, onSelectOption: (y) => g(y), children: [!d && C("input", { value: p, type: "text", disabled: !0 }), C(l_, {}), C(fa.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((v, S) => Te(fa.Option, { index: S, children: [C("span", { className: "label", children: v.label ?? v.name }), C("span", { className: "description", children: v.description })] }, v.name)) })] });
}
function d_({ trigger: e, items: t }) {
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
      const l = q();
      if (O(l))
        return l;
    });
    a.read(() => {
      const l = q();
      !O(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && C(gh, { isOpen: n, children: ({ placement: o }) => C(bh, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function f_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
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
function Ki(e, t) {
  return `${e}:${t}`;
}
function p_(e, t) {
  K(() => {
    if (!e.hasNodes([nt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Ge(_f(e, nt, (n) => Gi(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, d] of Object.entries(n.getTypedIDs()))
        d.forEach((u) => {
          const f = s[l]?.[u], p = o[l]?.[u], m = a[l]?.[u], g = c[l]?.[u];
          i.addID(l, u, f, p, m, g);
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
              for (const d of l) {
                let u = t.get(Ki(c, d));
                a[c] = l, r.set(i, a), s === "destroyed" ? u !== void 0 && (u.delete(i), u.size === 0 && t.delete(Ki(c, d))) : (u === void 0 && (u = /* @__PURE__ */ new Set(), t.set(Ki(c, d), u)), u.has(i) || u.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const h_ = Yr(function({ logger: t }, r) {
  const [n] = ae(), i = Ue(() => /* @__PURE__ */ new Map(), []);
  p_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Ki(o, a)) ?? []);
    if (l.length !== 0)
      for (const d of l) {
        const u = ie(d);
        _e(u) && (u.deleteID(o, a), u.hasNoIDsForEveryType() && Ks(u));
      }
  };
  return uo(r, () => ({
    setAnnotation(o, a, c, l, d, u, f) {
      if (nt.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = al(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), Vf(p, a, c, l, d, u, f);
      }, { tag: Ia });
    },
    removeAnnotation(o, a) {
      if (nt.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Ki(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Ia });
    }
  })), null;
}), g_ = [];
function m_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = g_, onChange: n }) {
  const [i] = ae();
  return cs(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: d } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && d.has(df) && !d.has(wf) || r.some((f) => d.has(f)) || l.isEmpty())
          return;
        const u = y_(i, s);
        u.length !== 0 && n(o, i, d, u);
      });
  }, [i, e, t, r, n]), null;
}
function y_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new $i();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = ie(i), o = s !== null && Yt(s) !== void 0;
    if (t.size === 1 && E(s) && !o && fx(s)) {
      const a = sh(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const u = ie(i);
          return new $i([E(u) ? Xa(u) : { insert: "" }]);
        }), l = new $i([Xa(s)]), d = new $i(a > 0 ? [{ retain: a }] : []);
        n = n.concat(d).concat(c.diff(l));
      }
    } else {
      const a = Iu(r), c = Iu(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const dl = "formatted", kh = "unformatted", Th = "paragraph-structure", xh = "standard", _h = "block-verse", b_ = {
  [dl]: "Formatted",
  [kh]: "Unformatted",
  [Th]: "Paragraph Structure",
  [xh]: "Standard",
  [_h]: "Block Verse"
};
function hi(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let fl, pl;
function k_(e) {
  const t = Ch(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  fl = e, pl = t;
}
k_(dl);
const B1 = () => fl, Ro = () => pl;
function Ch(e) {
  let t;
  switch (e ?? fl) {
    case dl:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case kh:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Th:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case xh:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case _h:
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
function V1(e) {
  if (!e)
    return;
  const t = Bu(e);
  return Object.keys(b_).find((r) => Ot(Bu(Ch(r)), t));
}
const T_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function Bu(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...T_, ...t };
}
function $o(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function x_(e) {
  if (e)
    return ns(e) ? St : e.markerMode === "editable" ? pt : St;
}
function ns(e) {
  return e?.verseLayout === "block";
}
function __(e) {
  const t = [], r = e ?? pl;
  return r && (t.push(`${Ky}${r.markerMode}`), r.hasSpacing && t.push(Fy), r.isFormattedFont && t.push(zy)), t;
}
function C_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += S_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), M_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += E_(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), P_(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function S_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), v_(t, e.retain, e.attributes, r, n)), e.retain);
}
function v_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = De();
  function l(d) {
    if (s <= 0)
      return !0;
    if (vr(d)) {
      const u = d.getTextContentSize();
      if (e < o + u && o < e + t) {
        const f = Math.max(0, e - o), p = u - f, m = Math.min(s, p);
        if (m > 0) {
          let g = d;
          const y = f > 0, x = m < u - f;
          if (y && x) {
            const [, v] = d.splitText(f);
            [g] = v.splitText(m);
          } else y ? [, g] = d.splitText(f) : x && ([g] = d.splitText(m));
          if (Wr(r)) {
            const v = g.getParent();
            if ($(v)) {
              const S = r.char;
              let A;
              Array.isArray(S) ? a >= 0 && a <= S.length - 1 && (A = S[a]) : a === 0 && (A = S);
              const M = A ? kn(A, v) : !1;
              if (M && Array.isArray(S) && S.length > 1) {
                const T = ye("");
                g.replace(T);
                const z = typeof r.segment == "string" ? r.segment : void 0, D = gi(S.slice(1), n, g, z);
                let H = T;
                for (const G of D)
                  H.insertAfter(G), H = G;
                T.remove(), wt(r, g);
              } else if (M)
                wt(r, g);
              else {
                g.remove();
                const T = Vu(g, r, n, i);
                if (T && T.length > 0) {
                  let z = v;
                  for (const D of T)
                    z.insertAfter(D), z = D;
                }
              }
            } else {
              const S = ye("");
              g.replace(S);
              const A = Vu(g, r, n, i);
              if (A && A.length > 0) {
                let M = S;
                for (const T of A)
                  M.insertAfter(T), M = T;
                S.remove();
              } else
                S.replace(g);
            }
          } else
            wt(r, g);
          s -= m;
        }
      }
      o += u;
    } else if (At(d))
      e <= o && o < e + t && s > 0 && (Wu(d, r), s -= 1), o += 1;
    else if ($(d)) {
      a += 1;
      let u = !1;
      if (e <= o && o < e + t && s > 0)
        if (Wr(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            Za(d, p.style), typeof p.cid == "string" && kt(d, bn, () => p.cid);
            const m = Le(p, Xs);
            m && Object.keys(m).length > 0 ? d.setUnknownAttributes({
              ...d.getUnknownAttributes() ?? {},
              ...m
            }) : d.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || D_(r.char)) && (u = !0);
      if (s > 0) {
        const f = d.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return u && Ra(d), !0;
        }
      }
      u && Ra(d), a -= 1;
    } else if (Mt(d)) {
      const u = d.getChildren();
      for (const p of u) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!cr(d))
          Wu(d, r);
        else if (hl(r)) {
          const p = Mh(r.para, n);
          p && d.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if (U(d)) {
      const u = d.getChildren();
      for (const f of u) {
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
function Vu(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = gi(t.char, r, e, i), o = s.find($);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), wt(t, e);
    return;
  }
  const a = {};
  Nh.forEach((d) => {
    e.hasFormat(d) && (a[d] = "true");
  });
  const c = {};
  Object.entries(t).forEach(([d, u]) => {
    d === "segment" || d === "char" || (typeof u == "string" ? c[d] = u : u === !0 ? c[d] = "true" : u === !1 && (c[d] = "false"));
  });
  const l = {
    ...o.getUnknownAttributes() ?? {},
    ...a,
    ...c
  };
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), wt(t, e), s;
}
function Sh(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  N(r) ? (r.setMarker(t), r.setTextContent(Oe(t))) : Jt(r) && r.getTextType() === "marker" && r.setTextContent(Oe(t) + R);
}
function Za(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    N(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = $(e.getParent()), i = e.getFirstChild();
  Jt(i) && i.getTextType() === "marker" && i.getTextContent() === Oe(r, n) && i.setTextContent(Oe(t, n));
  const s = e.getLastChild();
  Jt(s) && s.getTextType() === "marker" && s.getTextContent() === Xe(r, n) && s.setTextContent(Xe(t, n));
}
function Wu(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && $(e) && Wr(t)) {
      const i = ec(n);
      if (Za(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        kt(e, bn, () => o);
      }
      const s = Le(i, Xs);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Be(e) || me(e) || Ke(e) || j(e) || Ie(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (Ct(e) || se(e) || $(e)) && (r === "style" && se(e) ? Sh(e, n) : r === "style" && $(e) ? Za(e, n) : r === "code" && Ct(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && kt(e, jr, () => n));
  }
}
function M_(e, t, r) {
  if (t <= 0)
    return;
  const n = De();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (vr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), d = c - l, u = Math.min(s, d);
        u > 0 && (a.spliceText(l, u, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${u} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= u, c -= u);
      }
      i += c;
    } else if (At(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Mt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const d of l) {
        if (s <= 0)
          break;
        if (o(d) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Mt(a)) {
        s -= 1;
        const d = a.getChildren().length;
        if (c.length > 0 && d === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Wt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Ce(p)) {
            let m = i + 1;
            const g = p.getChildren();
            for (const x of g) {
              if (s <= 0)
                break;
              const v = i;
              if (i = m, o(x)) {
                i = v;
                break;
              }
              vr(x) ? m += x.getTextContentSize() : At(x) && (m += 1), i = v;
            }
            const y = p.getChildren();
            for (const x of y)
              x.remove(), a.append(x);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Wt(), !0);
        } else se(a) ? a.replace(Wt(), !0) : a.remove();
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
function E_(e, t, r, n, i) {
  if (t === rs)
    return Hu(e, r, n, i);
  if (t.endsWith(rs) && !hl(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Wr(r))
        throw new Error("Text + LF should not have char attributes");
      o += Zs(e, s, r, i);
    }
    return o += Hu(e + o, r, n, i), o;
  } else return Wr(r) ? A_(e, t, r, n, i) : Zs(e, t, r, i);
}
function A_(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = ye(t === "" ? Dt : t);
  wt(r, s);
  let o;
  {
    let y = function(x) {
      if (vr(x)) {
        const v = x.getTextContentSize();
        if (e >= g && e < g + v) {
          const S = x.getParent();
          return $(S) && (o = S), !0;
        }
        g += v;
      } else if (At(x))
        g += 1;
      else if ($(x)) {
        const v = x.getChildren();
        for (const S of v)
          if (y(S))
            return !0;
      } else if (U(x)) {
        const v = x.getChildren();
        for (const S of v)
          if (y(S))
            return !0;
        Mt(x) && (g += 1);
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
      m && kn(m, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (kn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, d = gi(a, n, s, c, o ? [o] : void 0);
  if (d.length === 0)
    return t.length;
  const u = d.find($);
  if (!u)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Zs(e, t, void 0, i);
  const f = {};
  for (const [m, g] of Object.entries(r))
    m !== "char" && m !== "segment" && typeof g == "string" && (f[m] = g);
  Object.keys(f).length > 0 && u.setUnknownAttributes(f);
  let p = !0;
  for (const m of d)
    if (!vh(e, m, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Zs(e, t, void 0, i));
}
function Zs(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = De();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (vr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const d = e - s, u = ye(t);
        if (wt(r, u), d === 0)
          c.insertBefore(u);
        else if (d === l) {
          const f = c.getParent();
          $(f) && !Wr(r) ? f.insertAfter(u) : c.insertAfter(u);
        } else {
          const [, f] = c.splitText(d);
          f.insertBefore(u);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${d}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (At(c))
      s += 1;
    else if ($(c)) {
      if (!o && e === s) {
        const u = ye(t);
        wt(r, u);
        const f = c.getFirstChild();
        return f ? f.insertBefore(u) : c.append(u), n?.debug(`Inserted text "${t}" at beginning of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      const d = c.getChildren();
      for (const u of d) {
        if (a(u))
          return !0;
        if (o)
          break;
      }
      if (!o && e === s) {
        const u = ye(t);
        return wt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Mt(c)) {
      if (!o && e === s) {
        const u = ye(t);
        wt(r, u);
        const f = c.getFirstChild();
        return f ? f.insertBefore(u) : c.append(u), n?.debug(`Inserted text "${t}" at beginning of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      const d = c.getChildren();
      for (const u of d) {
        if (a(u))
          return !0;
        if (o)
          break;
      }
      if (!o && e === s) {
        const u = ye(t);
        return wt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (U(c)) {
      const l = c.getChildren();
      for (const d of l) {
        if (a(d))
          return !0;
        if (o)
          break;
      }
    }
    return o;
  }
  if (a(i), !o && e === s) {
    n?.debug(`Insertion point matches end of document (targetIndex: ${e}, final currentIndex: ${s}). Appending text to new ParaNode.`);
    const c = ye(t);
    wt(r, c);
    const l = Wt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function vh(e, t, r) {
  const n = De();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Wt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!U(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (Ce(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const d = l.getFirstChild();
            d ? d.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Wt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (vr(l)) {
        const d = l.getTextContentSize();
        if (!s && e > i && e < i + d) {
          const u = e - i, [f] = l.splitText(u);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${u}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += d;
      } else if (At(l))
        i += 1;
      else if ($(l)) {
        if (o(l))
          return !0;
      } else if (Mt(l)) {
        const d = l;
        if (o(d))
          return !0;
        const u = i;
        if (cr(d) && Mt(t) && // Target is at the ImpliedPara's implicit newline
        e === u && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${d.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = u + 1, s = !0, !0;
        i += 1;
      } else if (U(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return U(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Wt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Ce(a) ? cr(a) && se(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Ce(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : ($(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Ce(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function P_(e, t, r, n, i) {
  let s;
  return Ur("chapter", t) ? s = O_(t.insert.chapter, r) : Ur("verse", t) ? s = w_(t.insert.verse, r) : Ur("ms", t) ? s = q_(t.insert.ms) : Ur("note", t) ? s = Eh(t, r, n, i) : Ur("unknown", t) ? s = Ah(t, r, n, i) : Ur("unmatched", t) && (s = $_(t.insert.unmatched, r)), s ? vh(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Hu(e, t, r, n) {
  let i;
  hl(t) ? i = Mh(t.para, r) : L_(t) && (i = N_(t.book)), i ??= Wt();
  const s = i, o = se(s), a = cr(s);
  let c = 0, l = !1;
  function d(u) {
    if (l)
      return !0;
    if (vr(u)) {
      const f = u.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = u.getParent();
        if (se(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const m = e - c, [g] = m > 0 ? u.splitText(m) : [void 0];
          let y, x = g?.getPreviousSibling();
          for (; x; ) {
            const v = x;
            x = x.getPreviousSibling(), y ? y.insertBefore(v) : s.append(v), y = v;
          }
          return g && s.append(g), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (At(u))
      c += 1;
    else if (Mt(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (d(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (cr(u) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${u.getKey()}) with ParaNode at targetIndex ${e}`), u.replace(s, !0), l = !0, !0;
        if (se(u) && s) {
          const p = u;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && se(u) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${u.getMarker()}) at targetIndex ${e}`), u.insertAfter(s), l = !0, !0;
    } else if (U(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (d(p))
          return !0;
        if (l)
          break;
      }
    }
    return l;
  }
  return d(De()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function N_(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Ji || !r || !Ut.isValidBookCode(r))
    return;
  const n = Le(e, ZT);
  return Gf(r, n);
}
function Mh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Le(e, QT), i = Yi(r, n);
  if (!hi(t))
    return i;
  if (t.markerMode === "editable")
    i.append(lt(r), Co());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Oe(r) + R;
    i.append(t.hasGutterParaMarkers ? yb(s) : Cr("marker", s));
  }
  return i;
}
function O_(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Le(e, ex);
  let a;
  if (t.markerMode === "editable")
    a = Xf(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Dc(r, c, n, i, s, o);
  }
  return a;
}
function w_(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Le(e, tx);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Lt(r, n);
    c = ap(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Zc(n, l, i, s, o, a);
  }
  return c;
}
function q_(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Le(e, rx);
  return $f(t, r, n, s, i);
}
function Eh(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Le(i.note, nx), d = typeof l?.closed == "string" ? l.closed : void 0, u = e.attributes?.segment;
  let f;
  u && typeof u == "string" && (f = u);
  const p = [];
  for (const g of c?.ops ?? [])
    if (typeof g.insert == "string")
      if (Wr(g.attributes)) {
        const y = gi(g.attributes.char, t, ye(g.insert), void 0, Ph(g.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(ye(g.insert));
  return fh(s, o, p, t, r, f, d).setCategory(a).setUnknownAttributes(l);
}
function Ah(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Le(i, ix), l = Lc(s, o, c), d = a?.ops ?? [];
  d.length > 0 && R_(d, t, r, n).forEach((p) => l.append(p));
  const u = e.attributes?.segment;
  return typeof u == "string" && kt(l, jr, () => u), l;
}
function R_(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Wr(s.attributes)) {
        const o = ye(s.insert), a = gi(s.attributes.char, t, o, void 0, Ph(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(ye(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Ur("unknown", s)) {
        const o = Ah(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Ur("note", s)) {
        const o = Eh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function $_(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = Gc(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Ph(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function ec(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function gi(e, t, r, n, i, s = !1, o = !1) {
  E(r) && r.getTextContentSize() === 0 && r.setTextContent(Dt);
  const a = () => {
    o && E(r) && r.getTextContent() !== Dt && r.setTextContent(R + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(ec), l = c[0], d = i?.[i.length - 1];
    if ($(d) && kn(l, d))
      return c.length > 1 ? gi(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => d.append(p)) : r && d.append(r), [];
    a();
    const u = c.reduceRight((f, p, m) => {
      const g = Sr(p.style, Le(p, Xs));
      if (typeof p.cid == "string" && kt(g, bn, () => p.cid), n && m === c.length - 1 && kt(g, jr, () => n), f)
        if ($(f)) {
          const y = f.getMarker(), x = [];
          ha(y, x, t, !0), x.forEach((S) => g.append(S)), g.append(f);
          const v = [];
          pa(f, v, t, !0), v.forEach((S) => g.append(S));
        } else
          g.append(f);
      return g;
    }, r);
    return ha(l.style, u, t, s), pa(u, u, t, s), [u];
  } else {
    const c = ec(e), l = i?.[i.length - 1];
    if ($(l) && kn(c, l))
      return r && l.append(r), [];
    a();
    const d = Sr(c.style, Le(c, Xs));
    return typeof c.cid == "string" && kt(d, bn, () => c.cid), n && kt(d, jr, () => n), r && d.append(r), ha(c.style, d, t, s), pa(d, d, t, s), [d];
  }
}
function pa(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && I_(e.getMarker(), t, r, !1, n);
}
function ha(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = lt(e, "opening", n) : r?.markerMode === "visible" && (i = Cr("marker", Oe(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function I_(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = lt("", "selfClosing") : s = lt(e, "closing", i) : r?.markerMode === "visible" && (s = Cr("marker", n ? Xe("") : Xe(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function L_(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function hl(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Wr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function D_(e) {
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
      if (U_(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const Nh = [
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
function U_(e) {
  return Nh.includes(e);
}
function F_() {
  const [e] = ae();
  return K(() => e.registerCommand(go, (t) => (z_(t), !1), gn), [e]), null;
}
function z_(e) {
  if (K_(e.target))
    return;
  const t = q();
  O(t) && j_(t);
}
function mi(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Ft(t))
      r++, t = t.getNextSibling(), E(t) && t.getTextContent() === R && (r++, t = t.getNextSibling());
    else if (me(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Xt(e, r), !0);
}
function K_(e) {
  if (!ff(e))
    return !1;
  const t = ds(e);
  if (!bb(t))
    return !1;
  const r = t.getParent();
  return r ? Ce(r) ? mi(r) : (Xt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function j_(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = ie(t.key);
  if (!Ce(r))
    return !1;
  const n = r.getFirstChild();
  return !dr(n) && !On(n) ? !1 : mi(r);
}
function B_() {
  const [e] = ae();
  return K(() => {
    const t = (r) => r instanceof KeyboardEvent && !V_(r) || !Oh() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Ge(
      e.registerCommand(Er, t, $e),
      e.registerCommand(Ec, t, $e),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm records what a cut would cover
      // and claims nothing, so either order of the two is correct: with no removal, nothing it
      // armed can be reaped.
      e.registerCommand(yr, t, br),
      e.registerCommand(mn, t, br),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Ac, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = ds(r.target);
        return !n || !Cn(n) ? !1 : (r.preventDefault(), !0);
      }, $e),
      e.registerCommand(ey, t, $e),
      e.registerCommand(ty, t, $e),
      e.registerCommand(ry, t, $e)
    );
  }, [e]), null;
}
function V_(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Cn(e) {
  return ot(e, (t) => Ie(t) || jp(t)) ?? void 0;
}
function Oh() {
  const e = q();
  return O(e) ? Cn(e.anchor.getNode()) !== void 0 || Cn(e.focus.getNode()) !== void 0 : !1;
}
function W_(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function H_(e, t) {
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
    for (const u of a) {
      const f = document.createRange();
      if (f.selectNode(u), o.compareBoundaryPoints(Range.START_TO_START, f) > 0)
        c = u;
      else {
        l = u;
        break;
      }
    }
    if (!c)
      return !1;
    const d = document.createRange();
    return d.setStartAfter(c), l ? d.setEndBefore(l) : d.setEnd(n, n.childNodes.length), W_(s, Array.from(d.getClientRects()), t);
  } catch {
    return !1;
  }
}
function G_(e, t, r, n) {
  if (!cC(t) || H_(e, r))
    return !1;
  const i = r === "up" ? XT(t) : YT(t);
  return i && n.preventDefault(), i;
}
function J_({ viewOptions: e }) {
  const [t] = ae();
  return Y_(t, e), null;
}
function Y_(e, t) {
  K(() => {
    if (!e.hasNodes([ur, St, Se]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = q();
      if (!O(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const d = Gu(o), u = nC(i, Ju(d, n.key) ? "next" : "previous");
        return u && n.preventDefault(), u;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const d = n.key === "ArrowUp" ? "up" : "down";
        return G_(e, i, d, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = Gu(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Ju(a, n.key) ? l = !c && Qu(i, "next") || !c && Q_(i) || oC(i) || !c && s && Xu(i, "next") : X_(a, n.key) && (l = !c && Qu(i, "previous") || !c && Z_(i) || aC(i, t) || !c && s && Xu(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Er, r, $e);
  }, [e, t]);
}
function Gu(e) {
  return e.dir || "ltr";
}
function Ju(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function X_(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function tc(e) {
  if (!$(e) || e.getMarker() !== "fp")
    return;
  const t = Yt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function Q_(e) {
  const t = tc(dp(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Xt(t, 0), !0);
}
function Z_(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = tc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Yu(n);
  }
  if (t.offset === 0) {
    const n = tc(r);
    return n ? Yu(n) : !1;
  }
  return !1;
}
function Yu(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (E(t))
    return t.select(), !0;
  if (U(t)) {
    const i = t.getLastDescendant();
    return E(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const eo = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function eC(e) {
  if (eo)
    for (const { segment: r } of eo.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function tC(e) {
  if (eo) {
    let n = 0;
    for (const { index: i } of eo.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function wh(e) {
  for (let t = e; t; t = t.getParent())
    if (U(t) && !t.isInline())
      return t;
}
function qh(e) {
  return !!e && N(e) && Cn(e) !== void 0;
}
function ii(e) {
  return E(e) && !e.isToken() && !qh(e) && e.getTextContentSize() > 0;
}
function Rh(e) {
  return ho(e) ? !0 : j(e) ? e.getIsCollapsed() === !0 : E(e) ? (e.isToken() || qh(e)) && e.getTextContentSize() > 0 : pf(e) ? !Ke(e) : !1;
}
function si(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Io(e, t, r) {
  for (let n = e; n; ) {
    if (Rh(n))
      return n;
    if (U(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? si(n, t, r);
      continue;
    }
    if (ii(n))
      return n;
    n = si(n, t, r);
  }
}
function gl(e, t, r, n, i) {
  return r === "element" && U(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? si(e, n, i) : r === "text" && Rh(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : si(e, n, i);
}
function ga(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = gl(e.node, e.offset, e.kind, "previous", t), n = Io(r, "previous", t);
  if (!n)
    return e;
  if (ii(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function rC(e, t) {
  const r = e.getNode(), n = wh(r);
  if (!n)
    return;
  if (e.type === "text" && ii(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return ga({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = gl(r, e.offset, e.type, t, n), s = Io(i, t, n);
  if (!s)
    return;
  if (ii(s)) {
    const c = s.getTextContent(), l = t === "next" ? eC(c) : tC(c);
    return ga({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return ga({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function $h(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = rC(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Xu(e, t) {
  return $h(e, t, "collapse");
}
function nC(e, t) {
  return $h(e, t, "extend");
}
function iC(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && ii(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = gl(n, e.offset, e.type, t, r);
  return Io(i, t, r) === void 0;
}
function sC(e, t) {
  const r = De();
  for (let n = e; n; ) {
    const i = si(n, t, r), s = i && Io(i, t, r);
    if (!s)
      return;
    if (n = Cn(s), !n)
      return s;
  }
}
function Qu(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Cn(n))
    return !1;
  const i = wh(n);
  if (!i || !iC(r, t, i))
    return !1;
  const s = si(i, t, De()), o = s && Cn(s);
  if (!o)
    return !1;
  const a = sC(o, t);
  if (!a)
    return !0;
  if (ii(a)) {
    const d = t === "next" ? 0 : a.getTextContentSize();
    return a.select(d, d), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Zu(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function oC(e) {
  const t = e.anchor.getNode(), r = dp(e);
  if (j(r) && !N(r.getFirstChild())) {
    if (Ce(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Ce(i) && mi(i)) && i.selectStart(), !0;
      }
    } else return Jt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Ce(t) && j(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Zu(r), !0;
  }
  const n = r?.getParent();
  if (Jt(r) && j(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Zu(n) : n.selectEnd(), !0;
  }
  return !1;
}
function aC(e, t) {
  const r = Zb(e);
  if (fs(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (Ct(i.getParent()))
    return !0;
  if (j(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!On(o))
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
    const a = ot(o, (c) => j(c));
    if (j(a) && a.getIsCollapsed()) {
      const c = a.getParent();
      if (!c)
        return !1;
      const l = a.getIndexWithinParent();
      return c.select(l, l), !0;
    }
  }
  const s = Yt(i);
  if (!s || s.getIsCollapsed())
    return !1;
  if (Zt(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function cC(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return me(t) && pf(t);
}
function lC() {
  const [e] = ae();
  return uC(e), null;
}
function uC(e) {
  K(() => {
    if (!e.hasNodes([be]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Ge(
      e.registerNodeTransform(be, pC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(be, _k),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(be, qp),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(be, (t) => es(Tn("char"), t)),
      e.registerNodeTransform(Fe, hC)
    );
  }, [e]);
}
function ma(e) {
  return e.getChildren().some(N);
}
function dC(e, t) {
  const r = t.getFirstChild();
  if (!N(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (ys(n)) {
    const i = n.getTextContent();
    i.startsWith(R) && (i === R ? n.remove() : n.setTextContent(i.slice(R.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function fC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  N(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function pC(e) {
  if (!$(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (ma(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ne(e, bn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if ($(i) && kn({ style: t, cid: r }, i) && Ot(n, i.getUnknownAttributes()))
    if (ma(i)) {
      if (dC(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  $(s) && kn({ style: t, cid: r }, s) && Ot(n, s.getUnknownAttributes()) && (ma(s) ? fC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function hC(e) {
  const t = e.getParent();
  if (!$(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(Dt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function Ih(e) {
  return e.replaceAll("	", " ");
}
const ml = (e) => {
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
      n.setData(o, Ih(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(yr, s);
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
    r.setData("text/plain", Ih(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(yr, i);
  });
};
function gC() {
  const [e] = ae();
  return K(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Ls ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), e.dispatchCommand(mo, null)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), e.dispatchCommand(mn, null)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? yl(e) : ml(e)));
    };
    return e.registerRootListener((r, n) => {
      n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
    });
  }, [e]), null;
}
function mC({ logger: e }) {
  const [t] = ae();
  return K(() => Ge(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Er, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Xn),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(yr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Xn),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Ac, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Xn)
  ), [t, e]), null;
}
function yC({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), C("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: C("span", { className: "text", children: i.title }) });
}
function bC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return C("div", { className: "typeahead-popover", children: C("ul", { children: e.map((i, s) => C(yC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let kC = 0;
class Pi {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${kC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function TC({ options: e } = {}) {
  const [t] = ae(), [r, n] = fe(() => !t.isEditable()), [i, s] = fe({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = fe(void 0), c = Ue(() => {
    const u = [
      new Pi("Cut", {
        onSelect: () => {
          t.dispatchCommand(mn, null);
        },
        isDisabled: r
      }),
      new Pi("Copy", {
        onSelect: () => {
          t.dispatchCommand(mo, null);
        }
      }),
      new Pi("Paste", {
        onSelect: () => {
          ml(t);
        },
        isDisabled: r
      }),
      new Pi("Paste as Plain Text", {
        onSelect: () => {
          yl(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new Pi(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...u, ...f];
  }, [t, r, e]), l = ge(() => {
    s((u) => ({ ...u, isOpen: !1 })), a(void 0);
  }, []);
  K(() => {
    const u = (f) => {
      const p = f.target;
      t.getRootElement() === p || np(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
    };
    return t.registerRootListener((f, p) => {
      p?.removeEventListener("contextmenu", u), f && f.addEventListener("contextmenu", u);
    });
  }, [t]), K(() => {
    if (!i.isOpen)
      return;
    const u = () => {
      l();
    };
    return globalThis.addEventListener("scroll", u, !0), () => globalThis.removeEventListener("scroll", u, !0);
  }, [i.isOpen, l]), K(() => {
    if (!i.isOpen)
      return;
    const u = () => {
      l();
    };
    return document.addEventListener("pointerdown", u), () => document.removeEventListener("pointerdown", u);
  }, [i.isOpen, l]), K(() => {
    if (!i.isOpen)
      return;
    const u = (f) => {
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
    return document.addEventListener("keydown", u, !0), () => document.removeEventListener("keydown", u, !0);
  }, [i.isOpen, l, c, o, t]), K(() => t.registerEditableListener((u) => {
    n(!u);
  }), [t]);
  const d = Y(null);
  return cs(() => {
    const u = d.current;
    if (!u)
      return;
    const { width: f, height: p } = u.getBoundingClientRect(), m = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), g = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    u.style.left = `${m}px`, u.style.top = `${g}px`, u.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Ty.createPortal(C("div", { ref: d, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (u) => u.stopPropagation(), children: C(bC, { options: c, selectedItemIndex: o, onOptionClick: (u) => {
    u.isDisabled || (t.update(() => {
      u.onSelect();
    }), l());
  }, onOptionMouseEnter: (u) => {
    a(u);
  } }) }), document.body) : null;
}
function xC() {
  const [e] = ae();
  return K(() => e.registerCommand(Er, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Ls ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, br), [e]), null;
}
function _C({ isEditable: e }) {
  const [t] = ae();
  return cs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Lh(e) {
  const t = e.getRootElement();
  return !!t && t.contains(t.ownerDocument.activeElement);
}
function qs(e, ...t) {
  const r = e.registerUpdateListener(({ tags: n }) => {
    r();
    for (const i of t)
      n.delete(i);
  });
}
function ya(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.defaultView?.getSelection();
  !t || !r?.anchorNode || t.contains(r.anchorNode) && r.removeAllRanges();
}
function rc(e, t) {
  let r;
  try {
    r = ci();
  } catch {
  }
  return r === e ? t() : e.read(t);
}
function ed(e) {
  return !!e && hs(ie(e));
}
function bl(e) {
  const [t] = ae(), r = Y(void 0), n = ge((i) => {
    const s = q(), o = O(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = ed(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const d = i.getParentOrThrow(), u = i.getIndexWithinParent() + 1, f = Po(d, u), p = hs(f) ? f : void 0;
      if (p)
        r.current = p.getKey(), l = p.getKey();
      else {
        const m = Gb();
        i.insertAfter(m), r.current = m.getKey(), l = m.getKey();
      }
      Xt(d, u);
    }
    if (a && c && a !== o && a !== l) {
      const d = ie(a);
      E(d) && d.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return K(() => {
    const i = () => {
      const a = e(), c = q(), l = O(c) && c.isCollapsed() ? c.anchor.key : void 0, d = r.current;
      (a || d && d !== l) && (Bt(kr), qs(t, kr), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (ps(c) || !c.includes(ei))
        return;
      const l = q(), d = O(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (Jb(a), r.current = void 0, d !== void 0) {
        const u = c.slice(0, d).split(ei).length - 1, f = Math.max(0, d - u);
        a.select(f, f);
      }
    }, o = Ge(t.registerCommand(_r, () => (i(), !1), gn), t.registerCommand(Pc, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = ed(a);
      }), c && t.update(() => {
        const l = ie(a);
        E(l) && l.remove();
      }, { tag: kr }), r.current = void 0, !1;
    }, gn), t.registerNodeTransform(Fe, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function CC() {
  const e = q();
  if (!O(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, r = t.getNode(), n = j(r) ? r : r.getParent();
  if (!j(n))
    return;
  const i = Hx(n);
  if (i === void 0)
    return;
  let s = n.getChildAtIndex(i - 1);
  for (; s && hs(s); )
    s = s.getPreviousSibling();
  if (!s || E(s) && s.isSimpleText())
    return;
  const o = s.getIndexWithinParent() + 1;
  if (r.is(n))
    return t.offset >= o && t.offset <= i ? s : void 0;
  if (r.is(s))
    return E(s) && t.offset === s.getTextContentSize() ? s : void 0;
  const a = r.getIndexWithinParent();
  return a >= o && a <= i && t.offset === 0 ? s : void 0;
}
function SC() {
  return bl(CC), null;
}
function vC() {
  const e = q();
  if (!O(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!U(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!me(i) || Po(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || me(s))
    return i;
}
function MC() {
  return bl(vC), null;
}
function EC({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
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
        const d = Lh(o);
        o.update(() => {
          d || Bt(un), o.setEditorState(l), o.dispatchCommand(ny, void 0);
        }, { tag: wc });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
const ba = "caller_highlight", AC = Yr(function(t, r) {
  const [n] = ae(), i = Y(void 0), s = Y(void 0), o = ge(() => {
    const a = i.current, c = a === void 0 ? void 0 : n.getEditorState().read(() => {
      const d = Fr(a);
      return d ? (d.getChildren().find(Zt) ?? Vr(d))?.getKey() : void 0;
    }), l = c ? n.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(ba), l?.classList.add(ba), s.current = l;
  }, [n]);
  return uo(r, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : rc(n, () => Fr(a)?.getKey()), o();
    }
  }), [n, o]), K(() => Ge(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    n.registerMutationListener(Se, (a, { prevEditorState: c, updateTags: l }) => {
      const d = i.current;
      if (d === void 0 || a.get(d) !== "destroyed")
        return;
      if (![...a.values()].includes("created")) {
        i.current = void 0;
        return;
      }
      const u = l.has(wc) ? void 0 : c.read(() => sl(d)), f = u === void 0 ? void 0 : n.getEditorState().read(() => Fr(u)?.getKey());
      i.current = f !== void 0 && a.get(f) === "created" ? f : void 0;
    }, { skipInitialization: !0 }),
    n.registerUpdateListener(() => o())
  ), [n, o]), K(() => () => s.current?.classList.remove(ba), []), null;
});
function PC({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ae();
  return NC(t, n), OC(i, e, r, n), null;
}
function NC(e, t) {
  const r = Y(void 0), n = Y(void 0), i = e.noteCallers, s = e.crossRefCallers;
  K(() => {
    let o = i;
    (!o || o.length <= 0) && (o = Lx), r.current !== o && (r.current = o, td("note-callers", o, t));
  }, [t, i]), K(() => {
    let o = s;
    (!o || o.length <= 0) && (o = Dx), n.current !== o && (n.current = o, td("cross-ref-callers", o, t));
  }, [t, s]);
}
function OC(e, t, r, n) {
  K(() => {
    if (!e.hasNodes([be, Se, Ht]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => DC(s));
    return Ge(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Se, (s) => wC(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(be, qC),
      e.registerNodeTransform(Fe, RC),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Ht, $C),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Ht, (s, { prevEditorState: o }) => IC(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(_r, () => LC(e, t, r, n), It),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function wC(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => Zt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    E(i) && !N(i) && i.getTextContent() !== Et(e.getCaller()) && e.insertBefore(i);
  }
}
function qC(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => Zt(o));
  if (!$(e) || !j(t) || !n)
    return;
  const i = Fc(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  E(s) ? s.getTextContent() !== R && s.setTextContent(R) : e.insertAfter(ye(R));
}
function RC(e) {
  const t = Yt(e), r = t?.getChildren(), n = r?.find((o) => Zt(o));
  if (!E(e) || !j(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!N(e) && j(i) && e.getTextContent() !== R && (e.setTextContent(R), e.selectEnd()), $(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Dt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Fc(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function $C(e) {
  if (!Zt(e))
    return;
  const t = e.getNextSibling();
  !E(t) || N(t) ? e.insertAfter(ye(R)) : t.getTextContent() !== R && t.setTextContent(R);
}
function IC(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = ie(r), a = o?.getParent();
      return Zt(o) && j(a) && a.getCaller() === Us;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function LC(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = q();
  if (!O(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = ot(o, (c) => j(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = ie(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Ni(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (j(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Ni(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (j(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Ni(e, c, n);
    } else if (!a) {
      const c = ot(o, (l) => j(l));
      if (c && c.getIsCollapsed() && Ce(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Ni(e, l, n);
      }
    }
  }
  if (Ce(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (On(c) && j(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Ni(e, l, n);
    }
  }
  return !1;
}
function Ni(e, t, r) {
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
function DC(e) {
  const t = q();
  if (!O(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (j(i) && E(s)) {
    e.preventDefault();
    const o = Mc();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Wi(o);
  }
}
function td(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (UC(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function UC(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Lo(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!N(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Vr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => E(n) && n.getMode() === "token") ? t : [];
}
function FC(e) {
  const t = e.getParent();
  if (j(t))
    return Lo(t).some((r) => r.is(e)) ? t : void 0;
}
function to(e) {
  const t = Lo(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function zC(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function KC(e) {
  const t = iy();
  if (!O(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= to(e);
  const i = zC(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= to(e);
}
function nc(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = FC(t);
  if (r)
    return jC(r, t, e.offset) ? void 0 : r;
}
function jC(e, t, r) {
  const n = Lo(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function BC(e) {
  const t = Lo(e), r = t[t.length - 1];
  E(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Xt(e, to(e));
}
function VC(e = !1) {
  const t = q();
  if (!O(t))
    return !1;
  if (!t.isCollapsed())
    return WC(t.anchor, t.focus);
  const r = nc(t.anchor);
  if (!r)
    return !1;
  if (!e && KC(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Xt(n, r.getIndexWithinParent());
  } else
    BC(r);
  return !0;
}
function WC(e, t) {
  const r = nc(e), n = nc(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && rd(e, r, i), n && rd(t, n, !i), !0;
}
function rd(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), to(t), "element");
}
function HC() {
  const [e] = ae(), t = Y(!1);
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
  }, [e]), K(() => e.registerCommand(_r, () => (VC(t.current) && Bt(kr), !1), gn), [e]), null;
}
function GC({ onChange: e }) {
  const [t] = ae();
  return K(() => t.registerCommand(_r, () => {
    const r = Qa();
    return e?.(r), !1;
  }, It), [t, e]), null;
}
function JC() {
  const [e] = ae();
  return YC(e), null;
}
function YC(e) {
  K(() => {
    if (!e.hasNodes([Qe]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(Qe, (t) => XC(t, e));
  }, [e]);
}
function XC(e, t) {
  ih(t, e.getKey()) && nh(e.getFirstChild()), !(!se(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = ie(e.getKey());
    return se(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Dh({ onStateChange: e }) {
  const [t] = ae(), [r, n] = fe(t), i = Y(!1), s = Y(!1), o = Y(void 0), a = Y(void 0), c = ge(() => {
    const l = q();
    let d;
    if (O(l)) {
      const u = l.anchor.getNode(), f = l.focus.getNode();
      let p = u.getKey() === "root" ? u : ot(u, (x) => {
        const v = x.getParent();
        return v !== null && sy(v);
      });
      p === null && (p = u.getTopLevelElementOrThrow()), ts(p) && (p = ot(u, se) ?? p);
      const m = p.getKey(), g = r.getElementByKey(m), y = tk(u, f);
      if (y && JT(y) && (d = y.getMarker()), g !== null && (se(p) || Ct(p) || fs(p))) {
        o.current = p.getMarker(), a.current = d, e?.({
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
  return K(() => t.registerCommand(_r, (l, d) => (c(), n(d), !1), br), [t, c]), K(() => Ge(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(oy, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), br), r.registerCommand(ay, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), br)), [c, r, e]), null;
}
function QC(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function Hr(e) {
  return e ? Ce(e) ? e : ot(e, (r) => Ce(r)) ?? void 0 : void 0;
}
function Uh(e) {
  if (!O(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Hr(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function kl(e) {
  return O(e) && e.isCollapsed() && e.anchor.type === "element" || !O(e) && !hf(e) ? !1 : e.getNodes().some((t) => me(t));
}
function Fh(e) {
  if (!O(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Hr(r);
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
function zh(e) {
  if (!O(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Hr(r);
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
function nd(e, t) {
  return !!ic(e, t);
}
function ic(e, t) {
  if (!O(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && U(n)) {
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
function ro(e, t) {
  if (!O(e))
    return !1;
  const r = Hr(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function ka(e) {
  return kl(e) || Uh(e);
}
function ZC(e, t) {
  if (kl(e) || Uh(e))
    return !0;
  if (!O(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Fh(e) && ro(e, "backward") || nd(e, "backward");
    case "deleteForward":
      return zh(e) && ro(e, "forward") || nd(e, "forward");
    case "insertText":
      return !1;
  }
}
function eS(e, t) {
  if (!(!O(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = ic(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (Fh(e) && ro(e, "backward")) {
        const n = Hr(e.anchor.getNode());
        if (Ce(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = ic(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (zh(e) && ro(e, "forward")) {
        const i = Hr(e.anchor.getNode())?.getNextSibling();
        if (Ce(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function id(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return hf(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!O(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!O(e) || e.isCollapsed())
    return !1;
  const r = Hr(e.anchor.getNode()), n = Hr(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function Kh(e) {
  if (E(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else U(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function tS(e) {
  const t = e.getPreviousSibling();
  if (!Ce(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? Kh(r) : mi(t) || t.selectStart();
}
function jh(e) {
  return me(e) || Be(e) ? [] : Ce(e) ? e.getChildren().flatMap(jh) : [e];
}
function rS(e) {
  const t = [];
  for (const r of e) {
    const n = jh(r);
    n.length !== 0 && (Ce(r) && t.length > 0 && t.push(ye(" ")), t.push(...n));
  }
  return t;
}
function sd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function nS(e) {
  if (Array.isArray(e)) return e;
}
function iS(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, s, o, a = [], c = !0, l = !1;
    try {
      if (s = (r = r.call(e)).next, t !== 0) for (; !(c = (n = s.call(r)).done) && (a.push(n.value), a.length !== t); c = !0) ;
    } catch (d) {
      l = !0, i = d;
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
function sS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oS(e, t) {
  return nS(e) || iS(e, t) || aS(e, t) || sS();
}
function aS(e, t) {
  if (e) {
    if (typeof e == "string") return sd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? sd(e, t) : void 0;
  }
}
const Bh = Object.entries, od = Object.setPrototypeOf, cS = Object.isFrozen, lS = Object.getPrototypeOf, uS = Object.getOwnPropertyDescriptor;
let it = Object.freeze, at = Object.seal, Jn = Object.create, Vh = typeof Reflect < "u" && Reflect, sc = Vh.apply, oc = Vh.construct;
it || (it = function(t) {
  return t;
});
at || (at = function(t) {
  return t;
});
sc || (sc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
oc || (oc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Wn = He(Array.prototype.forEach), dS = He(Array.prototype.lastIndexOf), ad = He(Array.prototype.pop), Hn = He(Array.prototype.push), fS = He(Array.prototype.splice), zr = Array.isArray, Li = He(String.prototype.toLowerCase), Ta = He(String.prototype.toString), cd = He(String.prototype.match), Oi = He(String.prototype.replace), ld = He(String.prototype.indexOf), pS = He(String.prototype.trim), hS = He(Number.prototype.toString), gS = He(Boolean.prototype.toString), ud = typeof BigInt > "u" ? null : He(BigInt.prototype.toString), dd = typeof Symbol > "u" ? null : He(Symbol.prototype.toString), Ye = He(Object.prototype.hasOwnProperty), wi = He(Object.prototype.toString), Je = He(RegExp.prototype.test), ln = mS(TypeError);
function He(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return sc(e, t, n);
  };
}
function mS(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return oc(e, r);
  };
}
function pe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Li;
  if (od && od(e, null), !zr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (cS(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function yS(e) {
  for (let t = 0; t < e.length; t++)
    Ye(e, t) || (e[t] = null);
  return e;
}
function ct(e) {
  const t = Jn(null);
  for (const n of Bh(e)) {
    var r = oS(n, 2);
    const i = r[0], s = r[1];
    Ye(e, i) && (zr(s) ? t[i] = yS(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ct(s) : t[i] = s);
  }
  return t;
}
function bS(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return hS(e);
    case "boolean":
      return gS(e);
    case "bigint":
      return ud ? ud(e) : "0";
    case "symbol":
      return dd ? dd(e) : "Symbol()";
    case "undefined":
      return wi(e);
    case "function":
    case "object": {
      if (e === null)
        return wi(e);
      const t = e, r = Kt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : wi(n);
      }
      return wi(e);
    }
    default:
      return wi(e);
  }
}
function Kt(e, t) {
  for (; e !== null; ) {
    const n = uS(e, t);
    if (n) {
      if (n.get)
        return He(n.get);
      if (typeof n.value == "function")
        return He(n.value);
    }
    e = lS(e);
  }
  function r() {
    return null;
  }
  return r;
}
function kS(e) {
  try {
    return Je(e, ""), !0;
  } catch {
    return !1;
  }
}
const fd = it(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), xa = it(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), _a = it(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), TS = it(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ca = it(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), xS = it(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), pd = it(["#text"]), hd = it(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Sa = it(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), gd = it(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Es = it(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), _S = at(/{{[\w\W]*|^[\w\W]*}}/g), CS = at(/<%[\w\W]*|^[\w\W]*%>/g), SS = at(/\${[\w\W]*/g), vS = at(/^data-[\-\w.\u00B7-\uFFFF]+$/), MS = at(/^aria-[\-\w]+$/), md = at(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ES = at(/^(?:\w+script|data):/i), AS = at(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), PS = at(/^html$/i), NS = at(/^[a-z][.\w]*(-[.\w]+)+$/i), yd = at(/<[/\w!]/g), bd = at(/<[/\w]/g), OS = at(/<\/no(script|embed|frames)/i), wS = at(/\/>/i), vt = {
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
}, qS = function() {
  return typeof window > "u" ? null : window;
}, RS = function(t, r) {
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
}, kd = function() {
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
}, Lr = function(t, r, n, i) {
  return Ye(t, r) && zr(t[r]) ? pe(i.base ? ct(i.base) : {}, t[r], i.transform) : n;
};
function Wh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : qS();
  const t = (L) => Wh(L);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== vt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = a.prototype, p = Kt(f, "cloneNode"), m = Kt(f, "remove"), g = Kt(f, "nextSibling"), y = Kt(f, "childNodes"), x = Kt(f, "parentNode"), v = Kt(f, "shadowRoot"), S = Kt(f, "attributes"), A = o && o.prototype ? Kt(o.prototype, "nodeType") : null, M = o && o.prototype ? Kt(o.prototype, "nodeName") : null, T = o && o.prototype ? Kt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const L = r.createElement("template");
    L.content && L.content.ownerDocument && (r = L.content.ownerDocument);
  }
  let z, D = "", H, G = !1, Q = 0;
  const le = function() {
    if (Q > 0)
      throw ln('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, te = function(h) {
    le(), Q++;
    try {
      return z.createHTML(h);
    } finally {
      Q--;
    }
  }, ve = function(h) {
    le(), Q++;
    try {
      return z.createScriptURL(h);
    } finally {
      Q--;
    }
  }, Ee = function() {
    return G || (H = RS(u, i), G = !0), H;
  }, Z = r, F = Z.implementation, ee = Z.createNodeIterator, Ae = Z.createDocumentFragment, Ze = Z.getElementsByTagName, et = n.importNode;
  let ue = kd();
  t.isSupported = typeof Bh == "function" && typeof x == "function" && F && F.createHTMLDocument !== void 0;
  const tt = _S, qr = CS, ki = SS, de = vS, dt = MS, Ko = ES, Rn = AS, en = NS;
  let Ve = md, ce = null;
  const gt = pe({}, [...fd, ...xa, ..._a, ...Ca, ...pd]);
  let xe = null;
  const pr = pe({}, [...hd, ...Sa, ...gd, ...Es]);
  let Pe = Object.seal(Jn(null, {
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
  })), hr = null, Ti = null;
  const mt = Object.seal(Jn(null, {
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
  let $n = !0, xi = !0, Rr = !1, In = !0, zt = !1, er = !0, tr = !1, P = !1, I = null, B = null, J = !1, he = !1, rt = !1, Nt = !1, _i = !0, Ci = !1;
  const zl = "user-content-";
  let jo = !0, ks = !1, Ln = {}, rr = null;
  const Bo = pe({}, [
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
  let Kl = null;
  const jl = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Vo = null;
  const Bl = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ts = "http://www.w3.org/1998/Math/MathML", xs = "http://www.w3.org/2000/svg", nr = "http://www.w3.org/1999/xhtml";
  let Dn = nr, Wo = !1, Ho = null;
  const _m = pe({}, [Ts, xs, nr], Ta), Vl = it(["mi", "mo", "mn", "ms", "mtext"]);
  let Go = pe({}, Vl);
  const Wl = it(["annotation-xml"]);
  let Jo = pe({}, Wl);
  const Cm = pe({}, ["title", "style", "font", "a", "script"]);
  let Si = null;
  const Sm = ["application/xhtml+xml", "text/html"], vm = "text/html";
  let we = null, Un = null;
  const Mm = r.createElement("form"), Hl = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, Yo = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Un && Un === h)
      return;
    (!h || typeof h != "object") && (h = {}), h = ct(h), Si = // eslint-disable-next-line unicorn/prefer-includes
    Sm.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? vm : h.PARSER_MEDIA_TYPE, we = Si === "application/xhtml+xml" ? Ta : Li, ce = Lr(h, "ALLOWED_TAGS", gt, {
      transform: we
    }), xe = Lr(h, "ALLOWED_ATTR", pr, {
      transform: we
    }), Ho = Lr(h, "ALLOWED_NAMESPACES", _m, {
      transform: Ta
    }), Vo = Lr(h, "ADD_URI_SAFE_ATTR", Bl, {
      transform: we,
      base: Bl
    }), Kl = Lr(h, "ADD_DATA_URI_TAGS", jl, {
      transform: we,
      base: jl
    }), rr = Lr(h, "FORBID_CONTENTS", Bo, {
      transform: we
    }), hr = Lr(h, "FORBID_TAGS", ct({}), {
      transform: we
    }), Ti = Lr(h, "FORBID_ATTR", ct({}), {
      transform: we
    }), Ln = Ye(h, "USE_PROFILES") ? h.USE_PROFILES && typeof h.USE_PROFILES == "object" ? ct(h.USE_PROFILES) : h.USE_PROFILES : !1, $n = h.ALLOW_ARIA_ATTR !== !1, xi = h.ALLOW_DATA_ATTR !== !1, Rr = h.ALLOW_UNKNOWN_PROTOCOLS || !1, In = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, zt = h.SAFE_FOR_TEMPLATES || !1, er = h.SAFE_FOR_XML !== !1, tr = h.WHOLE_DOCUMENT || !1, he = h.RETURN_DOM || !1, rt = h.RETURN_DOM_FRAGMENT || !1, Nt = h.RETURN_TRUSTED_TYPE || !1, J = h.FORCE_BODY || !1, _i = h.SANITIZE_DOM !== !1, Ci = h.SANITIZE_NAMED_PROPS || !1, jo = h.KEEP_CONTENT !== !1, ks = h.IN_PLACE || !1, Ve = kS(h.ALLOWED_URI_REGEXP) ? h.ALLOWED_URI_REGEXP : md, Dn = typeof h.NAMESPACE == "string" ? h.NAMESPACE : nr, Go = Ye(h, "MATHML_TEXT_INTEGRATION_POINTS") && h.MATHML_TEXT_INTEGRATION_POINTS && typeof h.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ct(h.MATHML_TEXT_INTEGRATION_POINTS) : pe({}, Vl), Jo = Ye(h, "HTML_INTEGRATION_POINTS") && h.HTML_INTEGRATION_POINTS && typeof h.HTML_INTEGRATION_POINTS == "object" ? ct(h.HTML_INTEGRATION_POINTS) : pe({}, Wl);
    const _ = Ye(h, "CUSTOM_ELEMENT_HANDLING") && h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING == "object" ? ct(h.CUSTOM_ELEMENT_HANDLING) : Jn(null);
    if (Pe = Jn(null), Ye(_, "tagNameCheck") && Hl(_.tagNameCheck) && (Pe.tagNameCheck = _.tagNameCheck), Ye(_, "attributeNameCheck") && Hl(_.attributeNameCheck) && (Pe.attributeNameCheck = _.attributeNameCheck), Ye(_, "allowCustomizedBuiltInElements") && typeof _.allowCustomizedBuiltInElements == "boolean" && (Pe.allowCustomizedBuiltInElements = _.allowCustomizedBuiltInElements), at(Pe), zt && (xi = !1), rt && (he = !0), Ln && (ce = pe({}, pd), xe = Jn(null), Ln.html === !0 && (pe(ce, fd), pe(xe, hd)), Ln.svg === !0 && (pe(ce, xa), pe(xe, Sa), pe(xe, Es)), Ln.svgFilters === !0 && (pe(ce, _a), pe(xe, Sa), pe(xe, Es)), Ln.mathMl === !0 && (pe(ce, Ca), pe(xe, gd), pe(xe, Es))), mt.tagCheck = null, mt.attributeCheck = null, Ye(h, "ADD_TAGS") && (typeof h.ADD_TAGS == "function" ? mt.tagCheck = h.ADD_TAGS : zr(h.ADD_TAGS) && (ce === gt && (ce = ct(ce)), pe(ce, h.ADD_TAGS, we))), Ye(h, "ADD_ATTR") && (typeof h.ADD_ATTR == "function" ? mt.attributeCheck = h.ADD_ATTR : zr(h.ADD_ATTR) && (xe === pr && (xe = ct(xe)), pe(xe, h.ADD_ATTR, we))), Ye(h, "ADD_URI_SAFE_ATTR") && zr(h.ADD_URI_SAFE_ATTR) && pe(Vo, h.ADD_URI_SAFE_ATTR, we), Ye(h, "FORBID_CONTENTS") && zr(h.FORBID_CONTENTS) && (rr === Bo && (rr = ct(rr)), pe(rr, h.FORBID_CONTENTS, we)), Ye(h, "ADD_FORBID_CONTENTS") && zr(h.ADD_FORBID_CONTENTS) && (rr === Bo && (rr = ct(rr)), pe(rr, h.ADD_FORBID_CONTENTS, we)), jo && (ce["#text"] = !0), tr && pe(ce, ["html", "head", "body"]), ce.table && (pe(ce, ["tbody"]), delete hr.tbody), h.TRUSTED_TYPES_POLICY) {
      if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ln('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ln('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const w = z;
      z = h.TRUSTED_TYPES_POLICY;
      try {
        D = te("");
      } catch (V) {
        throw z = w, V;
      }
    } else h.TRUSTED_TYPES_POLICY === null ? (z = void 0, D = "") : (z === void 0 && (z = Ee()), z && typeof D == "string" && (D = te("")));
    it && it(h), Un = h;
  }, Gl = pe({}, [...xa, ..._a, ...TS]), Jl = pe({}, [...Ca, ...xS]), Em = function(h, _, w) {
    return _.namespaceURI === nr ? h === "svg" : _.namespaceURI === Ts ? h === "svg" && (w === "annotation-xml" || Go[w]) : !!Gl[h];
  }, Am = function(h, _, w) {
    return _.namespaceURI === nr ? h === "math" : _.namespaceURI === xs ? h === "math" && Jo[w] : !!Jl[h];
  }, Pm = function(h, _, w) {
    return _.namespaceURI === xs && !Jo[w] || _.namespaceURI === Ts && !Go[w] ? !1 : !Jl[h] && (Cm[h] || !Gl[h]);
  }, Nm = function(h) {
    let _ = x(h);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: Dn,
      tagName: "template"
    });
    const w = Li(h.tagName), V = Li(_.tagName);
    return Ho[h.namespaceURI] ? h.namespaceURI === xs ? Em(w, _, V) : h.namespaceURI === Ts ? Am(w, _, V) : h.namespaceURI === nr ? Pm(w, _, V) : !!(Si === "application/xhtml+xml" && Ho[h.namespaceURI]) : !1;
  }, $r = function(h) {
    Hn(t.removed, {
      element: h
    });
    try {
      x(h).removeChild(h);
    } catch {
      if (m(h), !x(h))
        throw ln("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, _s = function(h) {
    vi(h);
    const _ = y(h);
    if (_) {
      const V = [];
      Wn(_, (W) => {
        Hn(V, W);
      }), Wn(V, (W) => {
        try {
          m(W);
        } catch {
        }
      });
    }
    const w = S(h);
    if (w)
      for (let V = w.length - 1; V >= 0; --V) {
        const W = w[V], re = W && W.name;
        if (typeof re == "string")
          try {
            h.removeAttribute(re);
          } catch {
          }
      }
  }, tn = function(h, _) {
    try {
      Hn(t.removed, {
        attribute: _.getAttributeNode(h),
        from: _
      });
    } catch {
      Hn(t.removed, {
        attribute: null,
        from: _
      });
    }
    if (_.removeAttribute(h), h === "is")
      if (he || rt)
        try {
          $r(_);
        } catch {
        }
      else
        try {
          _.setAttribute(h, "");
        } catch {
        }
  }, Om = function(h) {
    const _ = S(h);
    if (_)
      for (let w = _.length - 1; w >= 0; --w) {
        const V = _[w], W = V && V.name;
        if (!(typeof W != "string" || xe[we(W)]))
          try {
            h.removeAttribute(W);
          } catch {
          }
      }
  }, vi = function(h) {
    const _ = [h];
    for (; _.length > 0; ) {
      const w = _.pop();
      (A ? A(w) : w.nodeType) === vt.element && Om(w);
      const W = y(w);
      if (W)
        for (let re = W.length - 1; re >= 0; --re)
          _.push(W[re]);
    }
  }, wm = function(h) {
    if (!er)
      return;
    const _ = [h];
    for (; _.length > 0; ) {
      const w = _.pop(), V = A ? A(w) : w.nodeType;
      if (V === vt.processingInstruction || V === vt.comment && Je(bd, w.data)) {
        try {
          m(w);
        } catch {
        }
        continue;
      }
      if (V === vt.element) {
        const re = w, ke = we(M ? M(w) : w.nodeName);
        try {
          re.hasAttribute && re.hasAttribute("patchsrc") && re.removeAttribute("patchsrc"), re.hasAttribute && re.hasAttribute("for") && ke !== "label" && ke !== "output" && re.removeAttribute("for");
        } catch {
        }
      }
      const W = y(w);
      if (W)
        for (let re = W.length - 1; re >= 0; --re)
          _.push(W[re]);
    }
  }, Yl = function(h) {
    let _ = null, w = null;
    if (J)
      h = "<remove></remove>" + h;
    else {
      const re = cd(h, /^[\r\n\t ]+/);
      w = re && re[0];
    }
    Si === "application/xhtml+xml" && Dn === nr && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const V = z ? te(h) : h;
    if (Dn === nr)
      try {
        _ = new d().parseFromString(V, Si);
      } catch {
      }
    if (!_ || !_.documentElement) {
      _ = F.createDocument(Dn, "template", null);
      try {
        _.documentElement.innerHTML = Wo ? D : V;
      } catch {
      }
    }
    const W = _.body || _.documentElement;
    return h && w && W.insertBefore(r.createTextNode(w), W.childNodes[0] || null), Dn === nr ? Ze.call(_, tr ? "html" : "body")[0] : tr ? _.documentElement : W;
  }, Xl = function(h) {
    const _ = T ? T(h) : h.ownerDocument;
    return ee.call(
      _ || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Cs = function(h) {
    return h = Oi(h, tt, " "), h = Oi(h, qr, " "), h = Oi(h, ki, " "), h;
  }, Xo = function(h) {
    var _;
    h.normalize();
    const w = T ? T(h) : h.ownerDocument, V = ee.call(
      w || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let W = V.nextNode();
    for (; W; )
      W.data = Cs(W.data), W = V.nextNode();
    const re = (_ = h.querySelectorAll) === null || _ === void 0 ? void 0 : _.call(h, "template");
    re && Wn(re, (ke) => {
      Fn(ke.content) && Xo(ke.content);
    });
  }, Ss = function(h) {
    const _ = M ? M(h) : null;
    return typeof _ != "string" || we(_) !== "form" ? !1 : typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
  }, Fn = function(h) {
    if (!A || typeof h != "object" || h === null)
      return !1;
    try {
      return A(h) === vt.documentFragment;
    } catch {
      return !1;
    }
  }, Mi = function(h) {
    if (!A || typeof h != "object" || h === null)
      return !1;
    try {
      return typeof A(h) == "number";
    } catch {
      return !1;
    }
  };
  function ir(L, h, _) {
    L.length !== 0 && Wn(L, (w) => {
      w.call(t, h, _, Un);
    });
  }
  const qm = function(h, _) {
    return !!(er && h.hasChildNodes() && !Mi(h.firstElementChild) && Je(yd, h.textContent) && Je(yd, h.innerHTML) || er && h.namespaceURI === nr && _ === "style" && Mi(h.firstElementChild) || h.nodeType === vt.processingInstruction || er && h.nodeType === vt.comment && Je(bd, h.data));
  }, Rm = function(h, _, w) {
    if (!hr[_] && tu(_) && (Pe.tagNameCheck instanceof RegExp && Je(Pe.tagNameCheck, _) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(_)))
      return !1;
    if (jo && !rr[_]) {
      const V = x(h), W = y(h);
      if (W && V) {
        const re = W.length;
        for (let ke = re - 1; ke >= 0; --ke) {
          const qe = h === w ? p(W[ke], !0) : W[ke];
          V.insertBefore(qe, g(h));
        }
      }
    }
    return $r(h), !0;
  }, Ql = function(h, _, w, V) {
    return h.length === 0 ? _ : _ === w || _ === V ? ct(_) : _;
  }, Zl = function(h, _) {
    if (ir(ue.beforeSanitizeElements, h, null), h !== _ && x(h) === null)
      return ks && vi(h), !0;
    if (Ss(h))
      return $r(h), !0;
    const w = we(M ? M(h) : h.nodeName);
    if (ce = Ql(ue.uponSanitizeElement, ce, gt, I), ir(ue.uponSanitizeElement, h, {
      tagName: w,
      allowedTags: ce
    }), h !== _ && x(h) === null)
      return ks && vi(h), !0;
    if (qm(h, w))
      return $r(h), !0;
    if (hr[w] || !(mt.tagCheck instanceof Function && mt.tagCheck(w)) && !ce[w]) {
      const W = Rm(h, w, _);
      return W === !1 && ir(ue.afterSanitizeElements, h, null), W;
    }
    if ((A ? A(h) : h.nodeType) === vt.element && !Nm(h) || (w === "noscript" || w === "noembed" || w === "noframes") && Je(OS, h.innerHTML))
      return $r(h), !0;
    if (zt && h.nodeType === vt.text) {
      const W = Cs(h.textContent);
      h.textContent !== W && (Hn(t.removed, {
        element: h.cloneNode()
      }), h.textContent = W);
    }
    return ir(ue.afterSanitizeElements, h, null), !1;
  }, eu = function(h, _, w) {
    if (Ti[_] || er && _ === "patchsrc" || er && _ === "for" && h !== "label" && h !== "output" || _i && (_ === "id" || _ === "name") && (w in r || w in Mm))
      return !1;
    const V = xe[_] || mt.attributeCheck instanceof Function && mt.attributeCheck(_, h);
    if (!(xi && Je(de, _))) {
      if (!($n && Je(dt, _))) {
        if (V) {
          if (!Vo[_]) {
            if (!Je(Ve, Oi(w, Rn, ""))) {
              if (!((_ === "src" || _ === "xlink:href" || _ === "href") && h !== "script" && ld(w, "data:") === 0 && Kl[h])) {
                if (!(Rr && !Je(Ko, Oi(w, Rn, "")))) {
                  if (w)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(tu(h) && (Pe.tagNameCheck instanceof RegExp && Je(Pe.tagNameCheck, h) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(h)) && (Pe.attributeNameCheck instanceof RegExp && Je(Pe.attributeNameCheck, _) || Pe.attributeNameCheck instanceof Function && Pe.attributeNameCheck(_, h)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          _ === "is" && Pe.allowCustomizedBuiltInElements && (Pe.tagNameCheck instanceof RegExp && Je(Pe.tagNameCheck, w) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(w)))
        ) return !1;
      }
    }
    return !0;
  }, $m = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), tu = function(h) {
    return !$m[Li(h)] && Je(en, h);
  }, Im = function(h, _, w, V) {
    if (z && typeof u == "object" && typeof u.getAttributeType == "function" && !w)
      switch (u.getAttributeType(h, _)) {
        case "TrustedHTML":
          return te(V);
        case "TrustedScriptURL":
          return ve(V);
      }
    return V;
  }, Lm = function(h, _, w, V) {
    try {
      w ? h.setAttributeNS(w, _, V) : h.setAttribute(_, V), Ss(h) ? $r(h) : ad(t.removed);
    } catch {
      tn(_, h);
    }
  }, ru = function(h) {
    ir(ue.beforeSanitizeAttributes, h, null);
    const _ = h.attributes;
    if (!_ || Ss(h))
      return;
    xe = Ql(ue.uponSanitizeAttribute, xe, pr, B);
    const w = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: xe,
      forceKeepAttr: void 0
    };
    let V = _.length;
    const W = we(h.nodeName);
    for (; V--; ) {
      const re = _[V], ke = re.name, qe = re.namespaceURI, yt = re.value, bt = we(ke), Zo = yt;
      let ft = ke === "value" ? Zo : pS(Zo);
      if (w.attrName = bt, w.attrValue = ft, w.keepAttr = !0, w.forceKeepAttr = void 0, ir(ue.uponSanitizeAttribute, h, w), ft = w.attrValue, Ci && (bt === "id" || bt === "name") && ld(ft, zl) !== 0 && (tn(ke, h), ft = zl + ft), er && Je(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ft)) {
        tn(ke, h);
        continue;
      }
      if (bt === "attributename" && cd(ft, "href")) {
        tn(ke, h);
        continue;
      }
      if (!w.forceKeepAttr) {
        if (!w.keepAttr) {
          tn(ke, h);
          continue;
        }
        if (!In && Je(wS, ft)) {
          tn(ke, h);
          continue;
        }
        if (zt && (ft = Cs(ft)), !eu(W, bt, ft)) {
          tn(ke, h);
          continue;
        }
        ft = Im(W, bt, qe, ft), ft !== Zo && Lm(h, ke, qe, ft);
      }
    }
    ir(ue.afterSanitizeAttributes, h, null);
  }, vs = function(h) {
    let _ = null;
    const w = Xl(h);
    for (ir(ue.beforeSanitizeShadowDOM, h, null); _ = w.nextNode(); )
      if (ir(ue.uponSanitizeShadowNode, _, null), Zl(_, h), ru(_), Fn(_.content) && vs(_.content), (A ? A(_) : _.nodeType) === vt.element) {
        const W = v(_);
        Fn(W) && (Qo(W), vs(W));
      }
    ir(ue.afterSanitizeShadowDOM, h, null);
  }, Qo = function(h) {
    const _ = [{
      node: h,
      shadow: null
    }];
    for (; _.length > 0; ) {
      const w = _.pop();
      if (w.shadow) {
        vs(w.shadow);
        continue;
      }
      const V = w.node, re = (A ? A(V) : V.nodeType) === vt.element, ke = y(V);
      if (ke)
        for (let qe = ke.length - 1; qe >= 0; --qe)
          _.push({
            node: ke[qe],
            shadow: null
          });
      if (re) {
        const qe = M ? M(V) : null;
        if (typeof qe == "string" && we(qe) === "template") {
          const yt = V.content;
          Fn(yt) && _.push({
            node: yt,
            shadow: null
          });
        }
      }
      if (re) {
        const qe = v(V);
        Fn(qe) && _.push({
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
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, w = null, V = null, W = null;
    if (Wo = !L, Wo && (L = "<!-->"), typeof L != "string" && !Mi(L) && (L = bS(L), typeof L != "string"))
      throw ln("dirty is not a string, aborting");
    if (!t.isSupported)
      return L;
    P ? (ce = I, xe = B) : Yo(h), (ue.uponSanitizeElement.length > 0 || ue.uponSanitizeAttribute.length > 0) && (ce = ct(ce)), ue.uponSanitizeAttribute.length > 0 && (xe = ct(xe)), t.removed = [];
    const re = ks && typeof L != "string" && Mi(L);
    if (re) {
      wm(L);
      const yt = M ? M(L) : L.nodeName;
      if (typeof yt == "string") {
        const bt = we(yt);
        if (!ce[bt] || hr[bt])
          throw _s(L), ln("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ss(L))
        throw _s(L), ln("root node is clobbered and cannot be sanitized in-place");
      try {
        Qo(L);
      } catch (bt) {
        throw _s(L), bt;
      }
    } else if (Mi(L))
      _ = Yl("<!---->"), w = _.ownerDocument.importNode(L, !0), w.nodeType === vt.element && w.nodeName === "BODY" || w.nodeName === "HTML" ? _ = w : _.appendChild(w), Qo(w);
    else {
      if (!he && !zt && !tr && // eslint-disable-next-line unicorn/prefer-includes
      L.indexOf("<") === -1)
        return z && Nt ? te(L) : L;
      if (_ = Yl(L), !_)
        return he ? null : Nt ? D : "";
    }
    _ && J && $r(_.firstChild);
    const ke = re ? L : _;
    try {
      const yt = Xl(ke);
      for (; V = yt.nextNode(); )
        Zl(V, ke), ru(V), Fn(V.content) && vs(V.content);
    } catch (yt) {
      throw re && (_s(L), Wn(t.removed, (bt) => {
        bt.element && vi(bt.element);
      })), yt;
    }
    if (re)
      return Wn(t.removed, (yt) => {
        yt.element && vi(yt.element);
      }), zt && Xo(L), L;
    if (he) {
      if (zt && Xo(_), rt)
        for (W = Ae.call(_.ownerDocument); _.firstChild; )
          W.appendChild(_.firstChild);
      else
        W = _;
      return (xe.shadowroot || xe.shadowrootmode) && (W = et.call(n, W, !0)), W;
    }
    let qe = tr ? _.outerHTML : _.innerHTML;
    return tr && ce["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && Je(PS, _.ownerDocument.doctype.name) && (qe = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + qe), zt && (qe = Cs(qe)), z && Nt ? te(qe) : qe;
  }, t.setConfig = function() {
    let L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Yo(L), P = !0, I = ce, B = xe;
  }, t.clearConfig = function() {
    Un = null, P = !1, I = null, B = null, z = H, D = "";
  }, t.isValidAttribute = function(L, h, _) {
    Un || Yo({});
    const w = we(L), V = we(h);
    return eu(w, V, _);
  }, t.addHook = function(L, h) {
    typeof h == "function" && Ye(ue, L) && Hn(ue[L], h);
  }, t.removeHook = function(L, h) {
    if (Ye(ue, L)) {
      if (h !== void 0) {
        const _ = dS(ue[L], h);
        return _ === -1 ? void 0 : fS(ue[L], _, 1)[0];
      }
      return ad(ue[L]);
    }
  }, t.removeHooks = function(L) {
    Ye(ue, L) && (ue[L] = []);
  }, t.removeAllHooks = function() {
    ue = kd();
  }, t;
}
var $S = Wh();
function IS({ structureProtectionMode: e = "off" }) {
  const [t] = ae(), r = Y(void 0), [n, i] = fe(void 0), s = ge((o) => {
    r.current = o, i(o);
  }, []);
  return K(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const m = QC(p);
      if (!m)
        return !1;
      const g = q();
      return e === "protected" ? g && ZC(g, m) ? (p.preventDefault(), !0) : !1 : m !== "deleteBackward" && m !== "deleteForward" ? !1 : a(m, p);
    }, a = (p, m) => {
      const g = q(), y = r.current;
      if (y && g && id(g, y)) {
        if (s(void 0), m.preventDefault(), p !== y.intent)
          return !0;
        const v = ie(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (v) {
            const S = v.getParent(), A = v.getPreviousSibling(), M = v.getNextSibling();
            v.remove(), A ? Kh(A) : M && E(M) ? M.select(0, 0) : S?.selectStart();
          }
        } else y.kind === "selection" ? O(g) && g.removeText() : Ce(v) && tS(v);
        return !0;
      }
      if (!g)
        return !1;
      const x = eS(g, p);
      if (x) {
        if (x.kind === "verse") {
          const v = gf();
          v.add(x.node.getKey()), Wi(v);
        } else {
          const v = Mc();
          v.anchor.set(x.node.getKey(), 0, "element"), v.focus.set(x.node.getKey(), x.node.getChildrenSize(), "element"), Wi(v);
        }
        return s({ key: x.node.getKey(), kind: x.kind, intent: p }), m.preventDefault(), !0;
      }
      if (O(g) && !g.isCollapsed() && kl(g)) {
        const v = g.getNodes().filter(me).map((M) => M.getKey()), { anchor: S, focus: A } = g;
        return s({
          kind: "selection",
          intent: p,
          key: v[0],
          anchor: { key: S.key, offset: S.offset, type: S.type },
          focus: { key: A.key, offset: A.offset, type: A.type }
        }), m.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const m = q();
      return !m || !ka(m) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, m) => {
      if (!p)
        return !1;
      const g = $S.sanitize(p), y = new DOMParser().parseFromString(g, "text/html"), x = rS(Py(t, y)), v = q();
      return O(v) && v.insertNodes(x), m.preventDefault(), !0;
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const m = q();
      return m && ka(m) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const m = q();
      return m && ka(m) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        id(q(), p) || s(void 0);
      });
    };
    return Ge(t.registerCommand(Er, o, $e), t.registerCommand(mn, c, $e), t.registerCommand(yr, d, $e), t.registerCommand(cy, c, $e), t.registerCommand(Ac, u, $e), t.registerCommand(Ec, c, $e), t.registerUpdateListener(f));
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
const W1 = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function LS({ textDirection: e }) {
  const [t] = ae();
  return DS(t, e), null;
}
function DS(e, t) {
  K(() => (Td(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Td(e, t);
  })), [e, t]);
}
function Td(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function US() {
  const [e] = ae();
  return FS(e), null;
}
function FS(e) {
  K(() => {
    if (!e.hasNodes([be, St, Se, Fe, pt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Ge(
      e.registerNodeTransform(Fe, zS),
      e.registerNodeTransform(Fe, (t) => KS(t, e)),
      e.registerNodeTransform(pt, xd),
      e.registerNodeTransform(St, xd),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(pt, (t) => {
        es(Tn("va"), t), es(Tn("vp"), t);
      })
    );
  }, [e]);
}
function zS(e) {
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
  if (me(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  me(r) && el(e);
}
function KS(e, t) {
  const r = e.getParent();
  !Ie(r) || !e.isAttached() || ih(t, e.getKey()) && r.insertAfter(e);
}
function xd(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; _e(t); )
    t = t.getLastChild();
  ($(t) || E(t) && _e(t.getParent())) && e.insertBefore(ye(" "));
}
function Tl(e) {
  if (!j(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !hs(n)) ? void 0 : e;
}
function jS(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (U(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function BS() {
  const e = q();
  if (!(!O(e) || !e.isCollapsed()))
    return Tl(jS(e.anchor));
}
function VS(e) {
  const t = q();
  let r;
  return O(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Hh(e.target)), r ? Tl(ot(r, j)) : void 0;
}
function Hh(e) {
  const t = ly(e)?.anchorNode;
  if (ff(t))
    return ds(t) ?? void 0;
}
function WS(e) {
  if (q())
    return;
  const t = Hh(e);
  return t ? Tl(ot(t, j)) : void 0;
}
function HS() {
  const [e] = ae(), t = bl(BS);
  return K(() => {
    const r = (n) => {
      Bt(kr), t(n);
    };
    return Ge(e.registerCommand(_r, () => {
      const n = WS(e.getRootElement());
      return n && r(n), !1;
    }, gn), e.registerCommand(go, (n) => {
      const i = VS(n);
      return i && r(i), !1;
    }, gn));
  }, [e, t]), null;
}
function GS({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = f_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return C(d_, { trigger: e, items: i });
}
function JS({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, d = Ue(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? C(QS, { trigger: e, harness: i }) : C(GS, { trigger: e, scriptureReference: d, contextMarker: r, getMarkerAction: n });
}
const YS = [" ", "*"];
function XS(e, t) {
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
function QS({ trigger: e, harness: t }) {
  const [r] = ae(), [n, i] = fe(void 0), s = Y({ query: "", options: [] }), o = Y(0), a = ge((f, p, m) => {
    const g = p.find((y) => y.kind === "note" && y.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = q();
      O(y) && y.insertText(`${e}${f}${m ? " " : ""}`);
    });
  }, [r, t, e]);
  K(() => Ge(r.registerCommand(Er, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), uy(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = q();
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
  }, $e), r.registerCommand(mf, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, Xn)), [r, e, t, n, a]);
  const c = ge(() => i(void 0), []), l = ge((f, p) => {
    s.current = { query: f, options: p };
  }, []), d = ge((f) => {
    const { markerMenuItem: p, applyOpts: m } = f;
    t.apply(p, m);
  }, [t]), u = Ue(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    XS(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && C(gh, { isOpen: !0, children: ({ placement: f }) => C(
    bh,
    { options: u ?? [], onSelectOption: d, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? YS : void 0 },
    n.session
  ) });
}
function Gh(e) {
  return e.replaceAll(R, "~").replace(/ {2,}/g, (r) => R.repeat(r.length));
}
function ZS(e) {
  return e.replaceAll(R, " ").replaceAll("~", R);
}
function ev(e) {
  return e.replace(/ {2,}/g, " ");
}
let no;
function tv(e) {
  e && (no = e);
}
function Jh(e) {
  return $o(e);
}
function rv(e, t) {
  return e.isEmpty() ? lf : Yh(e.toJSON(), t);
}
function Yh(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && _o(r[0]) && (!r[0].children || r[0].children.length === 0))
    return lf;
  if (r.some(NT)) {
    no?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Xh(r), i = jt(n, t);
  return i ? { type: xr, version: Tr, content: i } : void 0;
}
function nv(e, t) {
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
function iv(e) {
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
function sv(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = fp(r, a, c), Me({
    type: Pt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function ov(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = fp(t, o, a), Me({
    type: pt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function av(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !Jh(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(R) && (t[0] = a.slice(1));
  }
  return Me({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function cv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Me({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function lv(e, t) {
  const { unknownAttributes: r } = e;
  return Me({ type: zp, ...r, content: t });
}
function uv(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Me({ type: Bp, marker: r, ...n, content: t });
}
function dv(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Me({
    type: Wp,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function fv(e, t) {
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
function Yn(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Me({
    type: t,
    marker: r === "" ? void 0 : r,
    ..._p({ sid: n, eid: i, ...s }, o)
  });
}
function pv(e) {
  return e.text;
}
function hv(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Me({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function gv(e) {
  const { marker: t } = e;
  return {
    type: Ws,
    marker: t === "" ? void 0 : t
  };
}
function _d(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function mv(e, t, r, n, i) {
  const s = Gt.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const d = Yn({
      type: s,
      marker: Qn,
      eid: l
    });
    i.push(d);
  }), o.forEach((l) => {
    const d = Yn({
      type: s,
      marker: yn,
      sid: l
    });
    i.push(d);
  }), t.length === 0) {
    const l = Yn({
      type: s,
      marker: yn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Yn({
      type: s,
      marker: Qn
    });
    i.push(l);
  }
  (!n || !Bf(n)) && t.forEach((l) => {
    const d = Yn({
      type: s,
      marker: Qn,
      eid: l
    });
    i.push(d);
  });
}
function jt(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, d = a, u = a, f = a, p = a, m = a, g = a, y = a;
    switch (a.type) {
      case Ut.getType():
        i.push(
          nv(
            l,
            jt(l.children, t)
          )
        );
        break;
      case ur.getType():
        i.push(iv(a));
        break;
      case Pt.getType():
        i.push(
          sv(
            d,
            jt(d.children, t)
          )
        );
        break;
      case St.getType():
      case pt.getType():
        i.push(ov(a));
        break;
      case be.getType():
        i.push(
          av(
            u,
            jt(u.children, t, void 0, !0),
            t
          )
        );
        break;
      case Qe.getType():
        i.push(
          cv(
            f,
            jt(f.children, t)
          )
        );
        break;
      case Nn.getType():
        i.push(
          lv(
            a,
            jt(a.children, t)
          )
        );
        break;
      case di.getType():
        i.push(
          uv(
            a,
            jt(a.children, t)
          )
        );
        break;
      case fi.getType():
        i.push(
          dv(
            a,
            jt(a.children, t)
          )
        );
        break;
      case Se.getType():
        i.push(
          fv(
            p,
            jt(p.children, t, p.caller)
          )
        );
        break;
      case Nr.getType():
      case Pr.getType():
      case Ht.getType():
      case yf.getType():
      case fr.getType():
        break;
      case nt.getType():
        if (s = jt(
          g.children,
          t,
          r,
          n
        ), s) {
          const x = g.typedIDs[Kr];
          if (x)
            mv(s, x, o, e[c + 1], i), o = x;
          else {
            const v = s.shift();
            v && (typeof v == "string" ? _d(i, v) : i.push(v)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Gt.getType():
        i.push(Yn(a));
        break;
      case Fe.getType():
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !ps(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        m.text !== R && !m.text.startsWith(Oc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[us]?.textType !== "attribute" && (!r || m.text !== Et(r))) {
          let x = pv(m);
          Jh(t) && (n && x.startsWith(R) && (x = x.slice(1)), x = ev(ZS(x))), _d(i, x);
        }
        break;
      case An.getType():
        i.push(
          hv(
            y,
            jt(y.children, t)
          )
        );
        break;
      case wr.getType():
        i.push(gv(a));
        break;
      case pi.getType():
        no?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        no?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function Xh(e) {
  const t = e.findIndex((r) => _o(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Xh(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const va = {
  initialize: tv,
  deserializeEditorState: rv
}, yv = /^sd\d*$/, bv = /* @__PURE__ */ new Set([
  ...Object.entries(La).filter(
    ([e, t]) => t.category === k.TitlesHeadings && t.type === b.Paragraph && !yv.test(e)
  ).map(([e]) => e),
  "qa"
]);
function kv(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Jf(i) || lp(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!ek(i)) {
      t && io(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Uc(i) && bv.has(i.marker) && !io(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Qh(i.children, t).forEach((s) => {
      const o = Tv(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = xv(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function Qh(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Zh(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Bf(i)) {
      const s = Qh(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Cd(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Cd(i, c.nodes)] });
      });
      return;
    }
    t && io(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Cd(e, t) {
  return { ...e, children: t };
}
function Zh(e) {
  return th(e) && e.number !== "";
}
function io(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Zh(r) || io(r)) : !1;
}
function Tv(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function xv(e) {
  return {
    type: Hs,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Qp
  };
}
const Sd = tg([]), _v = {
  type: yf.getType(),
  version: 1
};
let xl = [], X, Sn, eg, _t;
function Cv(e, t) {
  xl = [], Mv(e), Ev(t);
}
function Sv(e = 0) {
}
function vv(e, t) {
  X = t ?? Ro();
  let r;
  return e ? (e.type !== xr && _t?.warn(`This USJ type '${e.type}' didn't match the expected type '${xr}'.`), e.version !== Tr && _t?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${Tr}'.`
  ), e.content.length > 0 ? (r = uc(Dr(e.content)), ns(X) && (r = kv(r, _t))) : r = [Sd]) : r = [Sd], eg?.(xl), {
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
function Mv(e) {
  e && (Sn = e), e?.addMissingComments && (eg = e.addMissingComments);
}
function Ev(e) {
  e && (_t = e);
}
function _l() {
  return $o(X);
}
function Av(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function Pv(e) {
  let { marker: t } = e;
  t !== Ji && _t?.warn(`Unexpected book marker '${t}'!`), t = t ?? Ji;
  const { code: r } = e;
  (!r || !Ut.isValidBookCode(r)) && _t?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  X?.markerMode === "editable" || X?.markerMode === "visible" ? n.push(
    Tt("marker", Oe(t) + " " + r + R)
  ) : X?.hasGutterParaMarkers && n.push(Tt("marker", Oe(t) + R, !0));
  const i = Av(e.content);
  i && n.push(ut(_l() ? Gh(i) : i));
  const s = Le(e, wb);
  return Me({
    type: Ut.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: Hf
  });
}
function Nv(e) {
  let { marker: t } = e;
  t !== js && _t?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? js;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Le(e, qb);
  let a;
  X?.markerMode === "visible" && (a = !0);
  const c = [
    ut(Lt(t, r) ?? "")
  ];
  return X?.markerMode === "editable" && Hv(i, s, c), X?.markerMode === "editable" ? Me({
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
    version: Yf
  }) : Me({
    type: ur.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: tp
  });
}
function Ov(e) {
  let { marker: t } = e;
  t !== Bs && _t?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Bs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (x_(X) ?? St).getType(), c = X?.markerMode === "editable" ? op : eh;
  let l, d;
  X?.markerMode === "editable" ? l = Lt(t, r) : X?.markerMode === "visible" && (d = !0);
  const u = Le(e, Wb);
  return Me({
    type: a,
    text: l,
    ...l === void 0 ? void 0 : { detail: 0, format: 0, mode: "normal", style: "" },
    marker: t,
    number: r ?? "",
    sid: n,
    altnumber: i,
    pubnumber: s,
    showMarker: d,
    unknownAttributes: u,
    version: c
  });
}
function wv(e, t = [], r = !1) {
  let { marker: n } = e;
  be.isValidMarker(n, Sn?.extraValidMarkers) || _t?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (X?.markerMode === "editable") {
    const [a] = t;
    ti(a) ? a.text = R + a.text : a && t.unshift(ut(R));
  }
  t.length === 0 && t.push(ut(Dt)), ac(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Le(e, Ib);
  return s || jv(n, o, i), s || cc(e.marker ?? "", i, !1, r), Me({
    type: be.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: ep
  });
}
function tg(e) {
  return {
    type: Br.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: ip
  };
}
function qv(e, t = []) {
  let { marker: r } = e;
  Qe.isValidMarker(r, Sn?.extraValidMarkers) || _t?.warn(`Unexpected para marker '${r}'!`), r = r ?? or;
  const n = [];
  if (hi(X) && (X?.markerMode === "editable" ? n.push(
    ht(r),
    ut(R, lr, "token")
  ) : (X?.markerMode === "visible" || X?.hasGutterParaMarkers) && n.push(
    Tt(
      "marker",
      Oe(r) + R,
      X?.hasGutterParaMarkers
    )
  )), n.push(...t), _l()) {
    const s = n.find(
      (o) => !Kc(o) && !(ti(o) && o.text === R)
    );
    ti(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => R.repeat(o.length)));
  }
  const i = Le(e, Bb);
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
    version: sp
  });
}
function Cl() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function Rv(e, t = []) {
  const r = Le(e, Qk);
  return Me({
    ...Cl(),
    type: Nn.getType(),
    unknownAttributes: r,
    children: t,
    version: Kp
  });
}
function $v(e, t = []) {
  const r = Le(e, tT), n = e.marker ?? Wa, i = [];
  return X?.markerMode === "editable" ? i.push(
    ht(n),
    ut(R, lr, "token")
  ) : (X?.markerMode === "visible" || X?.hasGutterParaMarkers) && i.push(
    Tt(
      "marker",
      Oe(n) + R,
      X?.hasGutterParaMarkers
    )
  ), i.push(...t), Me({
    ...Cl(),
    type: di.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Vp
  });
}
function Iv(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Ha;
  X?.markerMode === "editable" ? s.push(
    ht(o),
    ut(R, lr, "token")
  ) : (X?.markerMode === "visible" || X?.hasGutterParaMarkers) && s.push(
    Tt(
      "marker",
      Oe(o) + R,
      X?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const a = Le(
    e,
    nT
  );
  return Me({
    ...Cl(),
    type: fi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: a,
    children: s,
    version: Hp
  });
}
function Lv(e, t) {
  const r = ok(t);
  let n = () => {
  };
  return Sn?.noteCallerOnClick && (n = Sn.noteCallerOnClick), Me({
    type: Ht.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: lh
  });
}
function Dv(e, t) {
  let { marker: r } = e;
  Se.isValidMarker(r, Sn?.extraValidMarkers) || _t?.warn(`Unexpected note marker '${r}'!`), r = r ?? Rc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : cl(X?.noteMode), a = Le(e, Gy), c = X?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, d;
  X?.markerMode === "editable" ? (l = ht(r, "opening", !1, c), s || (d = ht(r, "closing"))) : X?.markerMode === "visible" && (l = Tt("marker", Oe(r) + " "), s || (d = Tt("marker", Xe(r))));
  const u = [];
  let f;
  if (l && u.push(l), X?.markerMode === "editable" && !o)
    f = ut(Et(i), void 0, c), u.push(f), Wv(n, u), u.push(...t);
  else {
    const p = ut(R, lr, "token");
    f = Lv(i, t), u.push(f, p, ...t.flatMap(Uv(p)));
  }
  return d && u.push(d), Me({
    type: Se.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: u,
    direction: null,
    format: "",
    indent: 0,
    version: If
  });
}
function Uv(e) {
  return (t) => Kf(t) ? [t] : [t, e];
}
function Fv(e) {
  let { marker: t } = e;
  (!t || !Gt.isValidMarker(t, Sn?.extraValidMarkers)) && _t?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Le(e, qc), s = Cp(e);
  return Me({
    type: Gt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: qf
  });
}
function vd(e, t = []) {
  return {
    type: nt.getType(),
    typedIDs: { [Kr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function zv(e, t) {
  const { marker: r } = e, n = e.type, i = Le(e, Ab), s = [];
  if (X?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = $p(
      n,
      r,
      i
    );
    o && s.push(Tt("marker", o)), a && s.push(Tt("attribute", a)), s.push(...t), c && s.push(Tt("attribute", c)), l && s.push(Tt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    ti(o) && (o.mode = "token");
  }), Me({
    type: An.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: Wf
  });
}
function Kv(e) {
  return {
    type: wr.getType(),
    marker: e,
    text: zi(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: X?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: Up
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
    type: Fe.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[us] = { textType: t }), n;
}
function Tt(e, t, r = !1) {
  const n = {
    type: Pr.getType(),
    text: t,
    textType: e,
    version: zf
  };
  return r && (n[us] = { [Ic.key]: !0 }), n;
}
function is(e, t) {
  return {
    type: Nr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Tp
  };
}
function ac(e, t, r = !1) {
  X?.markerMode === "editable" ? t.push(ht(e, "opening", r)) : X?.markerMode === "visible" && t.push(Tt("marker", Oe(e, r)));
}
function cc(e, t, r = !1, n = !1) {
  X?.markerMode === "editable" ? r ? t.push(ht("", "selfClosing")) : t.push(ht(e, "closing", n)) : X?.markerMode === "visible" && t.push(
    Tt(
      "marker",
      r ? Xe("") : Xe(e, n)
    )
  );
}
function jv(e, t, r) {
  if (X?.markerMode !== "editable" || !t) return;
  const n = sr(t, ko(e));
  n && r.push(ut(n, "attribute"));
}
function Md(e, t) {
  if (e.type !== "ms" || X?.markerMode !== "editable" && X?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Le(e, qc), o = Sp(
    n,
    i,
    s,
    Cp(e)
  ), a = sr(o, xo(r ?? ""));
  if (!a) return;
  const c = R + a;
  X?.markerMode === "editable" ? t.push(ut(c, "attribute")) : t.push(Tt("attribute", c));
}
function Bv(e, t) {
  const r = e.marker ?? "";
  if (X?.markerMode === "editable") {
    const n = [];
    ac(r, n), Md(e, n), cc(r, n, !0), t.push(is("milestone", n));
  } else
    ac(r, t), Md(e, t), cc(r, t, !0);
}
function Ed(e, t, r) {
  t !== void 0 && r.push(
    is(e, [
      ht(e, "opening"),
      ut(R + t, "attribute"),
      ht(e, "closing")
    ])
  );
}
function Vv(e, t) {
  X?.markerMode === "editable" && (Ed("va", e.altnumber, t), Ed("vp", e.pubnumber, t));
}
function Wv(e, t) {
  e !== void 0 && t.push(
    is("cat", [
      ht("cat", "opening"),
      ut(R + e, "attribute"),
      ht("cat", "closing")
    ])
  );
}
function Hv(e, t, r) {
  e !== void 0 && r.push(
    is("ca", [
      ht("ca", "opening"),
      ut(R + e, "attribute"),
      ht("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    is("cp", [
      ht("cp", "opening"),
      ut(R + t, "attribute")
    ])
  );
}
function Ad(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function Gv(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function Pd(e, t) {
  t.marker === yn && t.sid !== void 0 && e.push(t.sid), t.marker === Qn && t.eid !== void 0 && Gv(e, t.eid);
}
function lc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [vd(o, [...n])] : o, c = e[i];
  Pd(n, c);
  const l = lc(
    e.slice(i + 1, s),
    Ad(t, i + 1),
    c.marker === yn,
    n
  ), d = vd(l, [...n]), u = e[s];
  Pd(n, u);
  const f = lc(
    e.slice(s + 1),
    Ad(t, s + 1),
    u.marker === yn,
    n
  );
  return [...a, d, ...f];
}
function Dr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(ut(_l() ? Gh(i) : i));
    else if (!i.type)
      _t?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Ut.getType():
          n.push(Pv(i));
          break;
        case Pt.getType():
          n.push(Nv(i));
          break;
        case pt.getType():
          X?.hasSpacing || n.push(_v), n.push(Ov(i)), Vv(i, n);
          break;
        case be.getType():
          n.push(
            wv(i, Dr(i.content, !0), t)
          );
          break;
        case Qe.getType():
          n.push(qv(i, Dr(i.content)));
          break;
        case Se.getType():
          n.push(Dv(i, Dr(i.content)));
          break;
        case Gt.getType():
          Rf(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && xl?.push(i.sid)), n.push(Fv(i)), Bv(i, n);
          break;
        case wr.getType():
          n.push(Kv(i.marker ?? ""));
          break;
        case zp:
          n.push(Rv(i, Dr(i.content)));
          break;
        case Bp:
          n.push($v(i, Dr(i.content)));
          break;
        case Wp:
          n.push(Iv(i, Dr(i.content)));
          break;
        default:
          _t?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(zv(i, Dr(i.content)));
      }
  }), lc(n, r);
}
function uc(e) {
  const t = e.findIndex(
    (n) => Jf(n) || lp(n) || Uc(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    eT(n)
  );
  if (t >= 0) {
    const n = uc(e.slice(0, t)), i = e[t], s = uc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || th(n)))
    return [tg(e)];
  return e;
}
const Gr = {
  initialize: Cv,
  reset: Sv,
  serializeEditorState: vv
};
function rg(e) {
  if (e && !N(e)) {
    if (E(e)) return e;
    if (U(e))
      for (const t of e.getChildren()) {
        const r = rg(t);
        if (r) return r;
      }
  }
}
function Jv() {
  const e = q();
  if (!O(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((E(t) && !N(t) ? _n(t) : void 0) && E(t)) {
      const i = ye(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      ri(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = rg(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(R) ? R : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return E(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of ng(e)) {
    if (!_n(t)) continue;
    ri(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(R) && r.setTextContent(n.slice(R.length));
  }
  return !0;
}
function ng(e) {
  const [t, r] = uf(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!E(a) || N(a) || ne(a, oe) === "attribute") return;
    const l = a.getTextContentSize(), d = c === 0 ? n : 0, u = c === s.length - 1 ? Math.min(i, l) : l;
    if (d >= u) return;
    const f = a.splitText(d, u), p = f.length === 3 ? f[1] : u === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function Yv() {
  const e = q();
  if (!O(e)) return !1;
  const t = e.focus.getNode();
  return _n(t) ? Ce(Jc(t)) : !1;
}
function ig() {
  let e = q();
  if (!O(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (N(t) && !Qc(t, e.anchor.offset)) {
    const c = t.getParent();
    if ($(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = q(), !O(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!E(t) || N(t) || !_n(t)) return !1;
  const r = Jc(t);
  if (!Ce(r)) return !1;
  const n = ye(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  ri(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return $(a) ? Yc(a) : o.select(0, 0), !0;
}
const sg = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${up(De().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = q(), t = mp(e), r = rl(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = ck(0, o);
        const a = jT(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || lk(c) && zc(parseInt(n, 10), c);
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
function dc(e, t) {
  return Se.isValidMarker(e, t) || !!sg[e] || Qe.isValidMarker(e, t) || be.isValidMarker(e, t);
}
function Xv(e, t) {
  return be.isNoteContentMarker(e) ? !1 : be.isValidMarker(e, t);
}
function og(e, t, r, n, i, s) {
  const o = dh(
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
function fc(e, t, r, n, i, s, o) {
  if (Se.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (u) => {
      u.editor.update(() => {
        l = og(
          e,
          u.reference,
          t,
          r,
          n,
          i
        );
      }, s);
    }, label: void 0, getInsertedNoteKey: () => l };
  }
  const a = nM(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const d = q();
      O(d) && (Xp(d), l.noteText = d.getTextContent());
      const { content: u, highlightInserted: f } = a.action(l), p = wu(u, Gr, r), m = ta(p);
      if (O(d)) {
        const g = d.anchor.getNode(), y = g.getParent(), x = _n(g), v = d.anchor.key === d.focus.key;
        if ($(m) && x && v && !Ma(m, o))
          eM(
            d,
            m,
            g,
            r?.markerMode === "editable"
          );
        else if ($(m) && !v && !Ma(m, o) && tM(d))
          rM(d, m, r?.markerMode === "editable");
        else if (d.getTextContent().length > 0)
          iM(
            d,
            () => ta(p)
          );
        else if (U(m) && !m.isInline()) {
          const S = d.insertParagraph();
          if (S) {
            const A = S.getChildren();
            m.append(...A), S.replace(m), Ce(m) && mi(m) || m.selectStart();
          }
        } else if ($(m) && E(g) && !N(g) && $(g.getParent()) && d.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        Ma(m, o)) {
          const S = g.getParent();
          if ($(S)) {
            const A = d.anchor.offset;
            if (A === 0) g.insertBefore(m);
            else if (A >= g.getTextContentSize()) g.insertAfter(m);
            else {
              const [T] = g.splitText(A);
              T.insertAfter(m);
            }
            m.getChildren().forEach((T) => {
              N(T) && T.setNested(!0);
            });
            const M = m.getChildren().find((T) => E(T) && !N(T));
            M && E(M) ? M.select(
              M.getTextContentSize(),
              M.getTextContentSize()
            ) : m.selectEnd();
          }
        } else if (E(g) && !N(g) && d.isCollapsed() && (j(y) || $(y) && j(y.getParent()))) {
          const S = $(y) ? y : void 0, A = S ? Qv(g, d.anchor.offset) : [];
          let T = (S ?? g).insertAfter(m);
          if (dr(m)) {
            const z = {
              ...r || Ro(),
              markerMode: "hidden"
            }, D = wu(
              u,
              Gr,
              z
            ), H = ta(D);
            T = T.insertAfter(H);
          }
          if (A.length > 0 && S) {
            const z = so(S).append(...A);
            T.insertAfter(z), S.isEmpty() && S.remove();
          } else E(T.getNextSibling()) || T.insertAfter(ye(R));
          U(T) && T.selectEnd();
        } else if (d.insertNodes([m]), hM(m), f) {
          const S = gf();
          S.add(m.getKey()), Wi(S);
        } else if ($(m)) {
          const S = m.getChildren().find((A) => E(A) && !N(A));
          S && E(S) ? S.select(
            S.getTextContentSize(),
            S.getTextContentSize()
          ) : m.selectEnd();
        } else {
          const S = m.getNextSibling();
          S ? S.selectStart() : m.selectStart();
        }
      } else
        d?.insertNodes([m]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function Qv(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function Ma(e, t) {
  return ((t ?? Gs).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function Zv(e, t) {
  t && e.getChildren().forEach((i) => {
    N(i) && i.setNested(!0);
  }), e.getChildren().some((i) => N(i) && i.getMarkerSyntax() === "closing") || e.append(lt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function eM(e, t, r, n) {
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
    const [o, a] = oi(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (ri(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), E(i) && !i.getTextContent().startsWith(R) && i.setTextContent(R + i.getTextContent());
    const o = t.getChildren().find((a) => E(a) && !N(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => E(o) && !N(o));
  E(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function tM(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (N(n) || $(n)) continue;
    if (!E(n) || n.getType() !== Fe.getType() || ne(n, oe) === "attribute") return !1;
    const i = Jc(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    _n(n) && (r = !0);
  }
  return r;
}
function rM(e, t, r) {
  const n = ng(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!_n(a)) return;
    ri(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(R) && c.setTextContent(l.slice(R.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(R) || i.setTextContent(R + i.getTextContent());
  const s = t.getChildren().find((a) => E(a) && !N(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function nM(e, t) {
  let r = sg[e];
  return r || (Qe.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: Qe.getType(), marker: e, content: [] }] })
  } : be.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: be.getType(), marker: e };
      return (be.isValidFootnoteMarker(e) || be.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function iM(e, t) {
  const r = e.getNodes(), [n, i] = oi(e);
  let s;
  r.forEach((o, a) => {
    if (U(s) && s.isParentOf(o))
      return;
    const c = ag(
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
    s || (s = t(), c.insertBefore(s), l = !0, $(s) && s.getChildren().some((u) => N(u) && u.getMarkerSyntax() === "opening") && Zv(s, $(s.getParent()))), oM(c, s, l);
  }), (E(s) || U(s)) && s.selectEnd();
}
function oi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Sl(e) {
  return _e(e) || j(e) || j(e.getParent());
}
function ag(e, t, r, n, i) {
  if (!Sl(e)) {
    if (E(e))
      return sM(e, t, r, n, i);
    if (U(e) && e.isInline())
      return e;
  }
}
function sM(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function oM(e, t, r) {
  if (E(t)) {
    const n = pc(e, t);
    t.setTextContent(n), e.remove();
  } else if (U(t)) {
    const n = t.getChildren(), i = n.find(
      (s) => N(s) && s.getMarkerSyntax() !== "opening"
    );
    if (i)
      i.insertBefore(e), r && n.filter((s) => !N(s)).forEach((s) => s.remove());
    else if (r) {
      const s = t.getChildrenSize();
      t.append(e);
      for (let o = 0; o < s; o++) t.getFirstChild()?.remove();
    } else
      t.append(e);
    pc(e, t), r && $(t) && t.getChildren().some((s) => N(s)) && E(e) && !N(e) && !e.getTextContent().startsWith(R) && e.setTextContent(R + e.getTextContent());
  }
}
function pc(e, t) {
  let r = e.getTextContent();
  if (E(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    el(n), E(n) || t.insertBefore(ye(" "));
  }
  return r;
}
function cg(e, t, r) {
  if (e.isCollapsed()) {
    const d = e.anchor.getNode(), u = e.anchor.offset, f = vn(d, t);
    if (!f) return !1;
    const p = E(d) ? d.getTextContentSize() : 0;
    if (Nd(f, r), E(d) && d.isAttached()) {
      const m = d.getTextContentSize(), g = Math.max(p - m, 0), y = Math.max(0, Math.min(u - g, m)), x = q();
      O(x) && x.setTextNodeRange(d, y, d, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = oi(e);
  if (!Ml(n, t, s, o)) return !1;
  const a = vl(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((d) => {
    const u = vn(d, t);
    if (!u || c.has(u.getKey())) return;
    c.add(u.getKey());
    const f = fg(u, a);
    f && (Nd(f, r), l = !0);
  }), pg(a, i), l;
}
function Nd(e, t) {
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
    E(n) && i.startsWith(R) && n.setTextContent(i.slice(R.length));
  }), Ra(e);
}
function vl(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = ag(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    E(o) && n.push(o);
  }), n;
}
function vn(e, t) {
  let r = e, n;
  for (; r && !Ce(r); ) {
    if (j(r)) return;
    !n && $(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function lg(e) {
  const t = ot(
    e,
    (r) => j(r) || Ce(r)
  );
  return j(t);
}
function ug(e) {
  return e.filter(
    (t) => !Sl(t) && (E(t) || U(t) && t.isInline())
  );
}
function aM(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!E(i) || Sl(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function cM(e, t, r) {
  return e.getChildren().some(
    (n) => U(n) && t.some((i) => n.isParentOf(i)) && !dg(n, r)
  );
}
function Ml(e, t, r, n, i) {
  const s = ug(e), o = aM(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = vn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !cM(l, s, o);
  });
}
function dg(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Ft(r));
}
function fg(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, d] of n.entries())
    if (r.has(d.getKey()))
      i.push(l);
    else if (U(d) && t.some((u) => d.isParentOf(u))) {
      if (!dg(d, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Ft(n[s - 1]) && (s -= 1), o < n.length - 1 && Ft(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(so(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(so(e).append(...c)), e;
}
function so(e) {
  return dy(e);
}
function pg(e, t) {
  const r = q(), n = e[0], i = e[e.length - 1];
  if (!O(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function lM(e, t, r) {
  if (e.isCollapsed()) {
    const l = vn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (yu(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = oi(e);
  if (!Ml(n, r, i, s, t)) return !1;
  const o = vl(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const d = vn(l, r);
    if (!d || a.has(d.getKey()) || (a.add(d.getKey()), d.getMarker() === t)) return;
    const u = fg(d, o);
    u && (yu(u, t), c = !0);
  }), c;
}
function uM(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = oi(e);
  if (!!!i?.some(
    (y) => Ml(s, y, o, a)
  ) && !dM(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const x = q();
    O(x) && cg(x, y, n) && (l = !0);
  });
  const d = q();
  if (!O(d)) return l;
  const u = d.isBackward(), [f, p] = oi(d), m = vl(
    d.getNodes(),
    f,
    p
  );
  if (m.length === 0) return l;
  const g = m.filter(
    (y) => !lg(y) && !vn(y, t)
  );
  return g.length > 0 && (fM(g).forEach((y) => pM(y, t)), l = !0), pg(m, u), l;
}
function dM(e, t) {
  return ug(e).some(
    (r) => !lg(r) && !vn(r, t)
  );
}
function fM(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function pM(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => $(a) && a.getMarker() === t
  ), s = i ? so(i) : Sr(t);
  e[0].insertBefore(s), s.append(...e), i === r || pc(e[0], s);
}
function hM(e) {
  me(e) && (el(e.getPreviousSibling()), nh(e.getNextSibling()));
}
const hg = {
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
}, Od = "psc-active-text", As = "psc-empty-text";
function gM({ viewOptions: e }) {
  const [t] = ae(), r = Y(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return K(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(Od), r.current = o, o && t.getElementByKey(o)?.classList.add(Od);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        go,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${As}`);
          if (!c) return !1;
          const l = ds(c);
          if (!me(l)) return !1;
          const d = l.getParent();
          if (!U(d)) return !1;
          const u = l.getIndexWithinParent() + 1;
          return d.select(u, u), !1;
        },
        It
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: d } = o.read(() => {
          const u = Ea(), f = mM(), p = [], m = [];
          return De().getChildren().forEach((g) => {
            if (!U(g)) return;
            const { emptyKeys: y, nonEmptyKeys: x } = bM(g);
            p.push(...y), m.push(...x);
          }), { newActiveKey: u, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: m };
        });
        a !== r.current && i(a), l.forEach((u) => {
          u === c ? t.getElementByKey(u)?.classList.remove(As) : t.getElementByKey(u)?.classList.add(As);
        }), d.forEach((u) => t.getElementByKey(u)?.classList.remove(As));
      }),
      t.registerCommand(
        Pc,
        () => (i(void 0), !1),
        It
      ),
      t.registerCommand(
        fy,
        () => {
          const o = t.getEditorState().read(Ea);
          return o !== r.current && i(o), !1;
        },
        It
      )
    ];
    return i(t.getEditorState().read(Ea)), Ge(...s);
  }, [t, n]), null;
}
function Ea() {
  return yM(q() ?? void 0)?.getKey();
}
function mM() {
  const e = q();
  if (!O(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!U(n)) return;
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
function yM(e) {
  if (O(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function bM(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!me(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (me(c)) break;
      if (!(Jt(c) || N(c)) && c.getTextContent().replaceAll(Ds, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const kM = /^\+/;
function El(e, t) {
  const r = t.replace(kM, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function gg(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function mg(e, t) {
  return gg(e, t) !== void 0;
}
function hc(e, t) {
  const r = gg(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function oo(e, t, r) {
  const n = U(e) ? e.getChildren().filter(N) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function TM(e, t, r, n, i) {
  const s = El(n, t);
  if (!s) {
    oo(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && oo(e, "invalid", i);
}
function ji(e, t, r, n, i) {
  for (const s of e.getChildren())
    if ($(s)) {
      const o = s.getMarker();
      i || TM(s, o, t, r, n), ji(s, t, r, n, i || o === "xq");
    } else if (me(s)) {
      if (i) continue;
      const o = El(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else j(s) ? ji(s, s.getMarker(), r, n, i) : Ie(s) || U(s) && ji(s, t, r, n, i);
}
function xM(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = El(e, a);
    if (!c) {
      oo(o, "unknown", r), hc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    hc(n, l) || oo(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of De().getChildren())
    Ie(o) || (Ct(o) || Be(o) ? i(o, o.getMarker()) : se(o) ? (i(o, o.getMarker()), s(o) && ji(o, o.getMarker(), e, r, !1)) : U(o) && s(o) && ji(o, "p", e, r, !1));
  return r;
}
function _M(e) {
  return !!e?.includes("(basic)");
}
function CM(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function yg(e, t) {
  return !e.startsWith("zpa") && e !== "c" && dc(e, t);
}
function Al(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function bg(e, t) {
  const r = [];
  for (const n of t) {
    const i = Al(e, n);
    i && hc(r, i);
  }
  return r;
}
function Rs(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: CM(e.description),
    isBasic: _M(e.description)
  };
}
function SM(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function gc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : SM(e.marker, t.marker);
}
function mc(e, t, r) {
  if (t.noteMarker) return [];
  const n = bg(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && yg(i.marker, r)
  ).filter((i) => {
    const s = Al(e, i.marker);
    return s !== void 0 && mg(n, s);
  }).map((i) => Rs(i, "paragraph")).sort(gc);
}
function vM(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => yg(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Rs(c, "character")).sort(gc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Rs(c, "character")),
    ...a.map((c) => Rs(c, "note"))
  ].sort(gc);
}
function MM(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function EM(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function AM(e, t, r) {
  return [
    ...MM(e, t.openCharMarkers),
    ...vM(e, t, r)
  ].sort(EM);
}
function PM(e, t, r) {
  if (t.source === "paragraph") return mc(e, t, r);
  const n = AM(e, t, r);
  return n.length > 0 ? n : mc(e, t, r);
}
function NM(e, t, r) {
  const n = mc(e, t, r), i = bg(e, t.previousParaMarkers), s = Al(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && mg(i, s) ? "ip" : "p", c = n.findIndex((d) => d.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const wn = String.raw`\w-`, kg = "a-z0-9", OM = `[a-z][${kg}]*`, wM = new RegExp(
  String.raw`^\\(\+?[${wn}]+)[ \u00A0]$`
), Tg = new RegExp(String.raw`^\\(\+?[${wn}]+)$`), qM = new RegExp(String.raw`^\\\+?[${wn}]*\*$`), RM = new RegExp(
  String.raw`^\\(\+?[${wn}]+)(?:[ \u00A0]|$)`
), $M = new RegExp(
  String.raw`^\\(\+?)([${wn}]+)`
), IM = new RegExp(
  String.raw`\\\+?[${wn}]+(?:\\?\*|[ \u00A0])`
), LM = new RegExp(
  String.raw`\\\+?[${wn}]*$`
), DM = new RegExp(
  String.raw`^\\(${OM})( |$)`
), UM = new RegExp(
  String.raw`\\[${kg}+*]*$`,
  "i"
), st = "￼";
function xg(e) {
  return e.length > 1 && e.startsWith(R) && e.charAt(1) !== st ? e.slice(1) : e;
}
function wd(e) {
  return Kc(e) ? e.markerSyntax ?? "opening" : void 0;
}
function _g(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = Gr.serializeEditorState(
    {
      type: xr,
      version: Tr,
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
  for (; wd(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Et(e.getCaller())) return { failure: "caller" };
  c++;
  let d = a.length;
  for (; d > c && wd(a[d - 1]) === "closing"; )
    d--;
  const u = a.slice(c, d);
  return u.length === 0 ? { failure: "empty" } : { children: u };
}
function Ps(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function qi(e, t) {
  LM.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += st;
}
function $t(e) {
  return e.replaceAll(R, " ");
}
function FM(e, t, r = !1) {
  if ($o(t)) return $t(e);
  if (e === R) return " ";
  const n = r && e.startsWith(R), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(R, "~");
}
function Bi(e) {
  const t = e.getTextContent();
  return Pn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Pl(e, t) {
  const r = e[t];
  if (!Ke(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Mo(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!N(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Cg(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Nl(e, t) {
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
function Ol(e) {
  return !!e.getUnknownAttributes();
}
function Do(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && bo(e);
}
function Sg(e, t) {
  return Ke(e) ? !Do(e.getMarker(), t) : j(e) || Ie(e) ? !0 : Ne(e) ? Ol(e) : $(e) ? vg(e, t) : !1;
}
function vg(e, t) {
  if (Tk(e)) return !0;
  const r = e.getMarker();
  return !ob(r) && t(r) === void 0;
}
const qt = "", Rt = "";
function qd(e) {
  return e.flatMap((t) => je(t) ? t.getChildren() : [t]);
}
function Di(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Ke(s)) {
      const o = Pl(e, i);
      Do(s.getMarker(), r) && Cg(o) ? (t.push(
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
      ), Di(qd(o), t, r), t.push(Rt)) : t.push(st), i += o.length;
    } else if (Ne(s)) {
      const o = Nl(e, i);
      Ol(s) ? t.push(st) : (t.push(
        qt,
        "verse",
        $t(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Di(qd(o), t, r), t.push(Rt)), i += o.length;
    } else N(s) ? t.push(qt, "marker", $t(s.getTextContent()), Rt) : Qr(s) ? t.push(qt, "unmatched", $t(s.getTextContent()), Rt) : Sg(s, r) ? t.push(st) : ho(s) ? t.push(" ") : E(s) ? t.push(
      $t(
        n ? xg(Bi(s)) : Bi(s)
      )
    ) : $(s) ? (t.push(qt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Di(s.getChildren(), t, r, !0), t.push(Rt)) : U(s) ? (t.push(qt, s.getType()), Di(s.getChildren(), t, r), t.push(Rt)) : t.push(st);
  }
}
function yi(e, t) {
  const r = [];
  return Di(e, r, t), r.join("");
}
function Mr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function ai(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function wl(e) {
  return e.type ?? "";
}
function Mg(e, t, r) {
  return t === "closing" ? Xe(e, r) : t === "selfClosing" ? Xe("") : Oe(e, r);
}
function Aa(e, t) {
  const r = e[t];
  if (!(!r || wl(r) !== "attribute-run"))
    return Mr(r) ?? [];
}
function bi(e, t) {
  const r = [];
  return Ui(e, r, t), r.join("");
}
function Ui(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = wl(s);
    if (o === "ms") {
      const l = s, d = Aa(e, i + 1);
      d && Do(l.marker ?? "", r) ? (t.push(
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
      ), Ui(d, t, r), t.push(Rt), i += 1) : t.push(st);
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
      let d = 0, u = Aa(e, i + 1 + d);
      for (; u; )
        Ui(u, t, r), d++, u = Aa(e, i + 1 + d);
      t.push(Rt), i += d;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        qt,
        "marker",
        $t(
          Mg(l.marker ?? "", l.markerSyntax, l.nested)
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
      t.push(qt, "char", JSON.stringify(l.unknownAttributes ?? null)), Ui(Mr(s) ?? [], t, r, !0), t.push(Rt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(st);
      continue;
    }
    if (o === "unmatched") {
      t.push(qt, "unmatched", $t(ai(s) ?? "")), t.push(Rt);
      continue;
    }
    const a = ai(s);
    if (a !== void 0) {
      t.push($t(n ? xg(a) : a));
      continue;
    }
    const c = Mr(s);
    c ? (t.push(qt, o), Ui(c, t, r), t.push(Rt)) : t.push(st);
  }
}
function Uo(e) {
  let t = 0;
  for (const r of e) {
    const n = Mr(r);
    if (n) {
      t += Uo(n);
      continue;
    }
    const i = ai(r);
    if (i !== void 0)
      for (const s of i) s === st && t++;
  }
  return t;
}
function ss(e, t, r, n, i) {
  Mn(e.getChildren(), t, r, n, i);
}
function Mn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (N(a))
      Ps(t, a, $t(a.getTextContent()));
    else if (Ke(a)) {
      s();
      const c = Pl(e, o);
      Do(a.getMarker(), r) && Cg(c) ? Mn(c, t, r, n) : qi(t, [a, ...c]), o += c.length;
    } else if (j(a) || Ie(a))
      s(), qi(t, [a]);
    else if (Ne(a)) {
      s();
      const c = Nl(e, o);
      Ol(a) ? qi(t, [a, ...c]) : (Ps(t, a, $t(Bi(a))), Mn(c, t, r, n)), o += c.length;
    } else if ($(a))
      s(), vg(a, r) ? qi(t, [a]) : ss(a, t, r, n, { pending: !0 });
    else if (ho(a))
      s(), Ps(t, a, " ");
    else if (E(a)) {
      const c = Pn(a) || ne(a, oe) === "attribute", l = s() && !c;
      Ps(
        t,
        a,
        c ? $t(Bi(a)) : FM(Bi(a), n, l)
      );
    } else U(a) ? ss(a, t, r, n, i) : (s(), qi(t, [a]));
  }
}
function ql(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Ie(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return ss(e, i, t, r), i;
}
function Eg(e, t) {
  let r = 0;
  const n = (i) => {
    if (E(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(st);
        if (a < 0) break;
        let c = s, l;
        a > 0 && ([, c] = s.splitText(a)), c.getTextContent().length > 1 && ([c, l] = c.splitText(1));
        const d = t[r++];
        if (d && d.length > 0) {
          let u = c;
          for (const f of d)
            u.insertAfter(f), u = f;
        }
        c.remove(), s = l;
      }
    } else U(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function yc(e, t = []) {
  for (const r of e)
    Ne(r) ? t.push(r) : U(r) && yc(r.getChildren(), t);
  return t;
}
function Ag(e) {
  let t = 0;
  const r = (n) => {
    if (E(n))
      for (const i of n.getTextContent()) i === st && t++;
    else U(n) && n.getChildren().forEach(r);
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
function zM(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), U(i) && ss(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const os = /\s/;
function Pg(e) {
  return e.filter(Fo).length;
}
function Fo(e) {
  if (e.isSentinel) return !1;
  const t = ie(e.key);
  return E(t) && !N(t) && ne(t, oe) === "attribute";
}
function KM(e) {
  if (e.isSentinel) return !1;
  const t = ie(e.key);
  return N(t) || Fo(e);
}
function Rd(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Fo(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let d = 0; d < l; d++)
      os.test(e.text[o.start + d]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function Rl(e, t, r) {
  const n = Rd(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !KM(i) ? Rd(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: Pg(e.spans) };
}
function Pa(e) {
  if (e.isSentinel) return !1;
  const t = ie(e.key);
  return N(t) && t.getMarkerSyntax() !== "opening";
}
function jM(e) {
  const t = ie(e.key);
  if (!N(t)) return !1;
  const r = t.getParent();
  return $(r) ? (r.selectNext(0, 0), !0) : !1;
}
function BM(e) {
  const t = ie(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = Ne(t) ? Nl(r, n) : Ke(t) ? Pl(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function Ng(e, t, r) {
  const { text: n, spans: i } = e, s = Pg(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, d = !1;
  e: for (const u of i) {
    const f = u.end - u.start, p = !u.isSentinel && !Pa(u);
    if (!(o && Fo(u))) {
      if (d) {
        if (!p) continue;
        a = { key: u.key, offset: 0 };
        break;
      }
      for (let m = 0; m < f; m++) {
        const g = n[u.start + m];
        if (c === 0 && (l === 0 || !os.test(g))) {
          if (p) {
            a = { key: u.key, offset: m };
            break e;
          }
          d = !0;
          continue e;
        }
        c > 0 ? os.test(g) || c-- : l--;
      }
      if (c === 0 && l === 0) {
        if (p) {
          a = { key: u.key, offset: f };
          break;
        }
        d = !0;
      }
    }
  }
  if (!a) {
    const u = i[i.length - 1];
    if (u && Pa(u) && jM(u) || u?.isSentinel && BM(u)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !Pa(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const u = ie(a.key);
    if (u && E(u)) {
      u.select(a.offset, a.offset);
      return;
    }
  }
  r.find(U)?.selectStart();
}
function Og(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(U)?.selectStart();
      return;
    }
    Ng(zM(e, n, i), t, e);
  }
}
function VM(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(U)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  Mn(e, s, n, i), Ng({ text: s.text, spans: s.spans }, t, e);
}
function wg(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  for (const g of e) {
    const y = ql(g, n, r);
    if (!y)
      return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
    s.text.length > 0 && (s.text += " ");
    const x = s.text.length;
    y.spans.forEach(
      (v) => s.spans.push({ ...v, start: v.start + x, end: v.end + x })
    ), s.sentinels.push(...y.sentinels), s.text += y.text;
  }
  let o, a = !1;
  const c = q();
  if (O(c)) {
    for (let g = c.anchor.getNode(); g; g = g.getParent())
      if (e.some((y) => y.is(g))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Rl(s, c.anchor.key, c.anchor.offset));
  }
  const l = Ar(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (qn(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const d = Gr.serializeEditorState(
    { type: xr, version: Tr, content: l },
    r
  );
  if (bi(d.root.children, n) === yi(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const u = d.root.children.map((g) => fo(g));
  if (Ag(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = yc(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), p = e[0];
  u.forEach((g) => p.insertBefore(g)), Eg(u, s.sentinels), e.forEach((g) => g.remove());
  const m = yc(u);
  for (let g = 0; g < f.length && g < m.length; g++)
    m[g].getNumber() === f[g].number && m[g].setSid(f[g].sid);
  return Og(u, o, a, n, r), !0;
}
function qg(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Se.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const d = n[i];
    if (!N(d) || d.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(Zt(s) || E(s) && s.getTextContent() === Et(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const d = n[a - 1];
    if (!N(d) || d.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return Mn(c, l, t, r), { out: l, contentNodes: c };
}
function Rg(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(st)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function WM(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = qg(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const d = q();
  if (O(d)) {
    for (let A = d.anchor.getNode(); A; A = A.getParent())
      if (e.is(A)) {
        l = !0;
        break;
      }
    d.isCollapsed() && (c = Rl(o, d.anchor.key, d.anchor.offset));
  }
  const u = Ar(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (qn(u) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = u;
  if (u.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], m = Rg(p), g = _g(e, p, m, r);
  if (g.failure !== void 0)
    return g.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      g.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Uo(g.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const y = e.getCategory() !== m;
  if (y && e.setCategory(m), bi(g.children, n) === yi(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  const x = g.children.map((A) => fo(A));
  if (Ag(x) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), y;
  const v = a[0];
  if (v)
    x.forEach((A) => v.insertBefore(A));
  else {
    const A = e.getChildren().find((M) => N(M) && M.getMarkerSyntax() === "closing");
    x.forEach((M) => A ? A.insertBefore(M) : e.append(M));
  }
  Eg(x, o.sentinels);
  const S = new Set(o.sentinels.flat().map((A) => A.getKey()));
  return a.forEach((A) => {
    S.has(A.getKey()) || A.remove();
  }), VM(x, c, l, n, r), !0;
}
const $g = /* @__PURE__ */ new Set(["ca", "cp"]), $l = "cp";
function Ig(e) {
  if (!cr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (ss(e, t, ar, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Ar(r, { getMarker: ar }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === $l)
  );
}
function zo(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if ($(r) && $g.has(r.getMarker()) || Ig(r)) {
      t.push(r);
      continue;
    }
    se(r) && r.getMarker() === $l && t.push(r);
    break;
  }
  return t;
}
function HM(e) {
  const t = (n) => $(n) && $g.has(n.getMarker()) || Ig(n);
  if (t(e) || se(e) && e.getMarker() === $l)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Re(n)) return n;
      if (!t(n)) return;
    }
}
function Lg(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = zo(e);
  if (n.some((s) => se(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Mn(e.getChildren(), i, t, r), Mn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function GM(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...zo(e)], o = Lg(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = q();
  if (O(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((g) => g.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Rl(o, l.anchor.key, l.anchor.offset));
  }
  const d = Ar(o.text, { getMarker: n }), [u] = d;
  if (d.length === 0 || typeof u != "object" || u.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (qn(d) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (u.sid = e.getSid());
  const f = Gr.serializeEditorState(
    { type: xr, version: Tr, content: d },
    r
  );
  if (bi(f.root.children, n) === yi(s, n)) {
    let m = !1;
    return e.getNumber() !== (u.number ?? "") && (e.setNumber(u.number ?? ""), m = !0), e.getAltnumber() !== u.altnumber && (e.setAltnumber(u.altnumber), m = !0), e.getPubnumber() !== u.pubnumber && (e.setPubnumber(u.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const p = f.root.children.map((m) => fo(m));
  return Re(p[0]) ? (p.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), Og(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function as(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Ie(n)) return;
    !t && (j(n) || se(n) || Re(n)) && (t = n), py(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? HM(r) : void 0) ?? t;
}
function Vt(e, t) {
  const r = as(e);
  return r ? j(r) ? WM(r, t) : Re(r) ? GM(r, t) : wg([r], t) : !1;
}
const JM = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function $d(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !JM.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function $s(e, t) {
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
          t.push(`\\${n}`), $d(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), $s(r.content, t), $d(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), $s(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), $s(r.content, t);
      }
    }
}
function Id(e, t, r) {
  const n = as(e);
  if (!se(n)) return !1;
  const i = q();
  if (!O(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let d = i.anchor.getNode(); d; d = d.getParent())
    if (n.is(d)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = ql(n, t, r);
  if (!o) return !1;
  const a = Ar(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const d of o.text)
    os.test(d) || c.set(d, (c.get(d) ?? 0) + 1);
  const l = [];
  $s(a, l);
  for (const d of l.join("").replaceAll(R, "~")) {
    if (os.test(d)) continue;
    const u = c.get(d);
    u !== void 0 && u > 0 && c.set(d, u - 1);
  }
  for (const d of c.values()) if (d > 0) return !0;
  return !1;
}
function YM(e) {
  return [lt(e), Co()];
}
function Il(e) {
  Xt(e, 2);
}
function XM(e) {
  const t = q();
  if (!O(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Ll(e) {
  const t = XM(e);
  e.splice(0, 0, YM(e.getMarker())), t && Il(e);
}
function ao(e, t) {
  e.setMarker(t), Ll(e), Il(e);
}
function QM(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Pn(n)) {
    if (E(n) && !N(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(R), kt(n, oe, lr), n.setMode("token");
      return;
    }
    if (bp(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Co());
  }
}
function Ld(e, t, r) {
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
function Vi(e) {
  for (let t = e; t; t = t.getParent())
    if (se(t)) return t;
}
function ZM(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Vi(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Vi(r.getNode())?.is(s) ?? !1, a = Vi(n.getNode())?.is(s) ?? !1;
    return !(o && !Ld(r, s, "start") || a && !Ld(n, s, "end"));
  });
}
function bc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = q();
  if (!(!O(r) || r.isCollapsed()))
    for (const n of ZM(r)) t.add(n.getKey());
}
function eE(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = q();
  if (!O(r) || !r.isCollapsed()) return;
  const n = Vi(r.focus.getNode());
  n && t.add(n.getKey());
}
function tE(e) {
  const t = q();
  !O(t) || t.isCollapsed() || t.getNodes().some((r) => N(r)) && (bc(e), t.removeText());
}
function rE(e, t) {
  if (!hi(t.viewOptions)) return;
  if (Ft(e.getFirstChild())) {
    QM(e, t);
    return;
  }
  if (t.splitExpected.current) {
    Ll(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => se(o) && !o.is(e))) {
      ao(e, or), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (se(r)) {
    const n = e.getChildren().filter((a) => !Pn(a)), i = q();
    let s = !1;
    if (O(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Vi(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || U(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Xt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  ao(e, or);
}
function nE(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = sr(t, ko(e.getMarker()));
  return r === "" ? void 0 : r;
}
function iE(e) {
  const t = e.getChildren().filter((s) => !N(s) && ne(s, oe) !== "attribute"), r = t[0];
  r && E(r) && r.getTextContent().startsWith(R) && r.setTextContent(r.getTextContent().slice(1));
  const n = nE(e);
  n && t.push(ye(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function sE(e, t) {
  const r = e.getChildren(), n = r.some((s) => N(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => E(c) && !N(c) && c.getTextContent() === Et(s)
    ), a = li(e).some(({ node: c }) => N(c));
    if (!o && !a) return;
    r.forEach((c) => {
      N(c) || (E(c) && c.getTextContent() === Et(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => N(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function oE(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(N(r) && r.getMarkerSyntax() === "opening")) {
    iE(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => N(o) && o.getMarkerSyntax() === "closing");
  i && !s && Vt(e, t);
}
function Dg(e, t, r) {
  if (!N(e.getFirstChild()) && r?.markerMode === "editable" && hi(r)) {
    ao(e, t);
    return;
  }
  Sh(e, t);
}
function Ug() {
  const e = q();
  if (!O(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Fg(e);
    return t !== "removed" ? t : (kc(), "handled");
  }
  return kc() ? "handled" : "declined";
}
function aE(e, t) {
  if (!t) return e;
  const r = DM.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function Dd(e, t) {
  const r = q();
  if (!O(r)) return "declined";
  if (r.isCollapsed()) {
    if (!zg())
      return "declined";
  } else {
    const s = Fg(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => aE(s, t)
  );
  Ud(n ?? "");
  for (const s of i)
    kc(), Ud(s);
  return "handled";
}
function cE(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = ds(n);
  if (!i) return !1;
  const s = Yt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !E(i) || N(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Fg(e) {
  const t = Yt(e.anchor.getNode()), r = Yt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), lE() ? "removed" : "needs-plain-split");
}
function Ud(e) {
  if (e === "") return;
  const t = q();
  O(t) && t.insertText(e);
}
function lE() {
  const e = q();
  if (!O(e) || !e.isCollapsed()) return !1;
  const t = Yt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => N(r) && r.getMarkerSyntax() === "opening");
}
function zg() {
  const e = q();
  if (!O(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Yt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function kc() {
  const e = q();
  if (!O(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = zg();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Sr("fp", { closed: "false" });
  i.append(lt("fp"));
  const s = E(t) && !N(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    ri(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [d] = l;
    d && (uk(d), i.append(d));
  }
  return i.getChildren().every(N) && i.append(ye(Dt)), Kg(i), !0;
}
function Kg(e) {
  const t = e.getChildren().find((r) => !N(r));
  if (E(t)) {
    const r = Eo(t);
    t.select(r, r);
    return;
  }
  if (U(t)) {
    Kg(t);
    return;
  }
  e.selectEnd();
}
function uE(e) {
  const t = [];
  let r = e;
  for (; r; )
    $(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function dE(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of De().getChildren()) {
    if (t && n.is(t)) break;
    (Ct(n) || Be(n) || se(n)) && r.push(n.getMarker());
  }
  return r;
}
function fE(e) {
  let t = e;
  for (; U(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function pE(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Ft(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Pn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(fE(i)) && r === 0 : !1;
}
function hE(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Ft(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Pn(i) && t.is(i) && r === 0;
}
function gE() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function mE() {
  const e = q();
  if (!O(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = ot(t, se), s = !n && (!i || hE(i, t, r)) ? "paragraph" : "character", o = Yt(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: dE(t),
    openCharMarkers: uE(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Qc(t, r),
    anchorRect: gE()
  };
}
function yE() {
  const e = q();
  if (!O(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!E(t) || N(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = UM.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function bE(e, t, r) {
  Dg(e, t, r), Il(e);
}
function kE(e, t, r) {
  const n = q();
  if (!O(n)) return;
  const i = n.focus.getNode(), s = ot(i, se);
  if (t === "backslash" && s && pE(s, i, n.focus.offset)) {
    bE(s, e, r);
    return;
  }
  Bg(e, r);
}
function TE(e, t) {
  const r = q();
  return !O(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function jg(e) {
  const t = q();
  return O(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function xE(e, t, r, n) {
  if (O(q()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && yE(), e.kind === "closeTag") {
    jg(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Ug() !== "declined") return;
  if (e.kind === "paragraph" && Qe.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    kE(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Se.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return og(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  fc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: ci(), reference: r });
}
function Bg(e, t) {
  const r = q();
  if (!O(r)) return;
  const n = hi(t);
  if (ig()) {
    const s = q();
    if (!O(s)) return;
    const o = ot(s.anchor.getNode(), se);
    if (!o) return;
    o.setMarker(e), n && Ll(o);
    return;
  }
  const i = r.insertParagraph();
  se(i) && (n ? ao(i, e) : i.setMarker(e));
}
function _E() {
  const [e] = ae();
  return K(() => e.registerCommand(bf, () => !0, It), [e]), null;
}
function Vg(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Paragraph : !(Se.isValidMarker(r) || bo(r));
}
function CE(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Character : !(Se.isValidMarker(r) || bo(r));
}
function SE(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = RM.exec(e)?.[1];
  return r === void 0 ? !1 : !Vg(r, t);
}
function Wg(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !SE(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!se(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (se(i))
    return [i, r];
}
function Hg(e, t) {
  const r = Wg(e, t.getMarker);
  return r !== void 0 && wg(r, t);
}
function vE(e, t) {
  const r = q();
  O(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function Gg(e) {
  const t = $M.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function ME(e) {
  const t = q();
  if (!O(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = Gg(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function EE(e) {
  const t = q();
  if (!O(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (j(e.getParent()) && E(r)) {
    const n = r.getNextSibling();
    if ($(n)) {
      Yc(n);
      return;
    }
  }
  E(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Fd(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = Gg(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  EE(e);
}
function zd(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Jg(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Vt(e, r);
  const n = ME(e), i = e.getParent();
  if (se(i)) {
    if (!Vg(t, r.getMarker))
      return Hg(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Vt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), zd(s, t) && Fd(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if ($(i) || j(i)) {
    const s = t.replace(/^\+/, "");
    if (!($(i) ? CE(t, r.getMarker) : Se.isValidMarker(s)))
      return Vt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Vt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(N).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (vE(c, Xe(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), zd(a, s) && Fd(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Vt(e, r);
}
function AE(e) {
  const t = q();
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
function PE(e, t) {
  const r = e.getTextContent();
  if (Xr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (je(e.getParent()) && jc(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !AE(e)) {
    yk(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = wM.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), Jg(e, n[1], t);
      return;
    }
    if (qM.test(r)) {
      t.pendingKeys.delete(e.getKey()), Vt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = Xe(e.getMarker(), e.getNested());
    if ($(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = q(), o = O(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = ye(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function NE(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (Fp(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Yg(e) {
  if (!Pf(e)?.length)
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
const Ri = Yg("v"), OE = Yg("c"), Kd = /^[ \u00A0]*$/;
function jd(e, t, r) {
  const n = e.getNextSibling();
  if (E(n) && n.getType() === Fe.getType() && n.getMode() === "normal" && ne(n, oe) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = ye(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function wE(e, t) {
  const r = e.getTextContent(), n = Lt("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (Ri.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = Ri.valueAndRest.exec(c);
    if (l && Kd.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (Ri.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Ri.valueAndRest.exec(r);
  if (!s) {
    const c = Ri.markerRest.exec(r);
    if (c) {
      const [, l, d, u] = c, f = q(), p = O(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(d), e.setTextContent(Lt("v", d));
      const m = p !== void 0 && p >= l.length ? Math.min(p - l.length, u.length) : void 0;
      jd(e, u, m);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Vt(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), Kd.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Lt("v", o)), a && jd(e, a, a.length);
}
const qE = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function RE(e, t) {
  const r = e.getParent();
  if (!j(r) || r.getIsCollapsed() !== !1 || !Pf(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!N(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === Et(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = qE.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Et(a)), !0;
}
function $E(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!E(t)) return;
  const r = Lt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = OE.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Xg(e) {
  if (Ke(e)) {
    const { wrapper: t } = Mo(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (j(e)) {
    const { wrapper: t } = Mp(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Re(e)) {
    const t = [], r = Ep(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Pp(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Ne(e)) {
    const t = [], r = Xi(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = Xi(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function IE(e) {
  const t = q();
  if (!O(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Xg(e).some((n) => r.is(n));
}
function LE(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && se(e) && bp(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Qi)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && bs(l, e) && (i || IE(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Xg(e))
    l.remove(), n = !0;
  let s = !1;
  if ($(e)) {
    const l = Ck(e);
    l !== void 0 && rb(l) && (qp(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Qi)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (bT(l, e)) {
        es(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Jp(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      No(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function Bd(e) {
  return E(e) && e.getType() === Fe.getType() && e.getMode() === "normal" && ne(e, oe) !== "attribute";
}
function DE(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = ie(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && Bd(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && Bd(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Ns(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = DE(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = ie(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (N(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (Xr(c)) continue;
      const m = Tg.exec(p);
      c.getMarkerSyntax() === "opening" && m ? n = Jg(c, m[1], e) || n : r === "idle" && Id(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Hg(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Vt(c, e) || n;
      continue;
    }
    const l = xn(c)?.owner, d = l?.isAttached() ? l : c, u = d.getKey();
    if (o.has(u)) {
      a !== u && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(u)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(u);
      continue;
    }
    e.pendingKeys.delete(a), a !== u && e.pendingKeys.delete(u), o.add(u);
    const f = LE(d, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && Id(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(u);
        continue;
      }
      n = Vt(d, e) || n;
    }
  }
  return n;
}
function Qg(e) {
  if (Qr(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if ($(t)) return Fi(t) !== void 0;
  return !1;
}
function UE(e) {
  const t = xn(e);
  if (!t) return !1;
  const r = Tn(t.kind);
  return !No(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Vd(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (Ct(t) || Ie(t) || jp(t)) return !0;
  return !1;
}
function FE(e, t) {
  const r = e.getTextContent(), n = ne(e, oe), i = e.getParent();
  if (n !== "attribute" && Re(i)) {
    r.replace(/^[ \u00A0]+/, "") === Lt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (RE(e, t)) return;
  if (n === "attribute") {
    UE(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && Qg(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Vd(e))
      t.pendingKeys.add(e.getKey());
    else if (Np(e)) t.pendingKeys.add(e.getKey());
    else if (Re(as(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      $(a) && Rp(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Vd(e)) return;
  const s = q(), o = O(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (IM.test(o)) {
    if (db(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), Vt(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function zE(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Jp(e, t);
}
function KE(e) {
  const t = (r) => {
    if (N(r)) {
      Xr(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (Qr(r)) {
      Fp(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Qi)
      n.settleScope !== "none" && n.ownerPredicate(r) && (bs(n, r) || zE(n, r)) && e.pendingKeys.add(r.getKey());
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
      (i.includes("\\") || i.includes("|") && Qg(r) || i.includes("//") || Np(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if ($(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Ie(r) && !Ct(r)) {
      if (je(r) && r.getChildrenSize() === 0) {
        const n = xn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      U(r) && r.getChildren().forEach(t);
    }
  };
  De().getChildren().forEach(t);
}
function jE(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ne(e, oe);
  if (r === "attribute" || r === lr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (Ct(o) || Re(o) || Ie(o)) return;
  const n = t.startsWith(R) && $(e.getParent()), i = n ? t.slice(1) : t, s = (n ? R : "") + i.replace(/ (?=[ \u00A0])/g, R).replace(new RegExp("(?<=\\u00A0) ", "g"), R);
  s !== t && e.setTextContent(s);
}
function BE(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function Tc(e) {
  const t = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!t) return;
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(t.getData("text/plain")), i = t.getData("text/html"), s = i ? r(BE(i)) : "";
  return {
    plainText: n,
    html: i,
    htmlText: s,
    text: n || s,
    isInternal: !!t.getData("application/x-lexical-editor")
  };
}
function VE(e) {
  const t = Tc(e);
  if (!t || t.isInternal) return !1;
  const { plainText: r, html: n, htmlText: i } = t, s = r.includes(R) ? r : n.includes(R) || i.includes(R) ? i : void 0;
  if (!s) return !1;
  const o = q();
  if (!O(o)) return !1;
  e?.preventDefault();
  const a = s.replaceAll(R, "~"), c = a.split(`
`);
  if (c.length < 2)
    return o.insertText(a), !0;
  o.isCollapsed() || o.removeText();
  const l = ci();
  return c.forEach((d, u) => {
    if (u > 0 && l.dispatchCommand(Is, void 0), d === "") return;
    const f = q();
    O(f) && f.insertText(d);
  }), !0;
}
function WE(e) {
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
function HE(e) {
  const t = q();
  if (!O(t) || t.isCollapsed()) return;
  const r = {
    "text/plain": t.getTextContent().replaceAll(R, " ")
  }, n = yy(e), i = by(e);
  return n && (r["text/html"] = WE(n)), i && (r["application/x-lexical-editor"] = i), r;
}
function Wd(e, t, r) {
  const n = q();
  if (!O(n) || n.isCollapsed()) return !1;
  const i = HE(t);
  if (!i) return !1;
  if (!e || !("clipboardData" in e))
    return my(t, null, i), r && n.removeText(), !0;
  if (e.clipboardData == null) return !1;
  e.preventDefault();
  for (const [s, o] of Object.entries(i)) e.clipboardData.setData(s, o);
  return r && n.removeText(), !0;
}
const Zg = kf(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Na(e) {
  const t = e();
  return Bt(df), Bt(wf), t;
}
const Hd = 8, GE = 1e3;
function Gn(e, t) {
  const r = Ne(e) ? ["va", "vp"] : Ke(e) ? ["milestone"] : j(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    CT(Tn(n), e, t.pendingKeys);
}
function JE(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Nc) || i.updateTags.has(Hi)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = ie(o);
        if (!c) continue;
        const l = xn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = ie(o.getKey());
        c?.isAttached() && Tn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
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
    e.registerMutationListener(fr, r),
    e.registerMutationListener(Pr, r),
    e.registerMutationListener(Nr, r)
  );
}
function YE(e, t, r) {
  return Ge(
    e.registerCommand(
      yr,
      (n) => {
        if (Oh()) return !1;
        const i = Tc(n);
        if (!i) return !1;
        const s = i.text;
        if (s.includes(`
`)) {
          const a = (r ? s.replaceAll(R, "~") : s).split(`
`);
          let c = Dd(a, t.getMarker);
          if (c === "declined" && cE(e) && (c = Dd(a, t.getMarker)), c === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      br
    ),
    e.registerCommand(
      yr,
      (n) => {
        const i = Tc(n);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !Yv()) return !1;
        n?.preventDefault();
        const o = q();
        return O(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Is, void 0), a === "") return;
          const l = q();
          O(l) && l.insertText(a);
        }), !0;
      },
      $e
    ),
    e.registerCommand(
      yr,
      () => (t.splitExpected.current = !0, !1),
      It
    )
  );
}
function XE({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n
}) {
  const [i] = ae(), s = e?.markerMode === "editable", o = !!e && $o(e), a = Y(void 0), c = Y(n);
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
    const d = hT(i, l.pendingKeys);
    let u, f = !1, p, m = !1, g = !1, y = 0;
    const x = () => y < Hd ? !1 : (l.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Hd} consecutive mutating passes; leaving ${l.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...l.pendingKeys].join(", ")}`
    ), !0), v = (T, z = "departure") => {
      i.update(() => {
        y = Na(
          () => Ns(l, T, z)
        ) ? y + 1 : 0;
      });
    };
    let S;
    const A = () => {
      if (S !== void 0 && clearTimeout(S), S = void 0, g || l.pendingKeys.size === 0) return;
      const T = c.current ?? GE;
      T < 0 || (S = setTimeout(() => {
        S = void 0, !(g || l.pendingKeys.size === 0) && (f || x() || v(void 0, "idle"));
      }, T));
    }, M = Ge(
      i.registerNodeTransform(fr, (T) => {
        if (i.isComposing()) return;
        PE(T, l);
        const z = xn(T);
        z && (Ne(z.owner) || j(z.owner) || Re(z.owner) || Ke(z.owner) && Mo(z.owner).wrapper === void 0) && Gn(z.owner, l);
      }),
      i.registerNodeTransform(pt, (T) => {
        i.isComposing() || (wE(T, l), Gn(T, l));
      }),
      i.registerNodeTransform(Pt, (T) => {
        i.isComposing() || ($E(T), T.isAttached() && Gn(T, l));
      }),
      i.registerNodeTransform(Qe, (T) => {
        i.isComposing() || rE(T, l);
      }),
      i.registerNodeTransform(be, (T) => {
        if (!i.isComposing()) {
          oE(T, l);
          for (const z of ["separator", "char"])
            T.isAttached() && bs(Tn(z), T) && l.pendingKeys.add(T.getKey());
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
      i.registerNodeTransform(Gt, (T) => {
        i.isComposing() || Gn(T, l);
      }),
      i.registerNodeTransform(Nr, (T) => {
        if (i.isComposing()) return;
        const z = xn(T);
        z && (Ke(z.owner) || Ne(z.owner) || j(z.owner) || Re(z.owner)) && Gn(z.owner, l);
      }),
      i.registerNodeTransform(Se, (T) => {
        i.isComposing() || (sE(T, l), Gn(T, l));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      i.registerNodeTransform(wr, (T) => {
        i.isComposing() || NE(T, l);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      i.registerNodeTransform(Fe, (T) => {
        i.isComposing() || FE(T, l);
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
        (T) => {
          i.getEditorState().read(() => {
            for (const [z, D] of T) {
              if (D === "destroyed") continue;
              const H = ie(z);
              !H || ne(H, oe) !== "attribute" || je(H.getParent()) || i.getElementByKey(z)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      JE(i, l),
      ...o ? [
        i.registerNodeTransform(Fe, (T) => {
          i.isComposing() || jE(T);
        }),
        i.registerCommand(
          mo,
          (T) => Wd(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            T && typeof T == "object" && "clipboardData" in T ? T : null,
            i,
            !1
          ),
          $e
        ),
        i.registerCommand(
          mn,
          (T) => Wd(
            T && typeof T == "object" && "clipboardData" in T ? T : null,
            i,
            !0
          ),
          $e
        ),
        i.registerCommand(
          yr,
          (T) => VE(
            // Same jsdom-safe duck-check as COPY above.
            T && typeof T == "object" && "clipboardData" in T ? T : null
          ),
          $e
        )
      ] : [],
      i.registerCommand(
        mn,
        () => (bc(l), !1),
        br
      ),
      i.registerCommand(
        Ec,
        () => (i.isComposing() || tE(l), !1),
        Xn
      ),
      i.registerCommand(
        go,
        () => (f = !1, y = 0, A(), !1),
        It
      ),
      i.registerCommand(
        Er,
        (T) => (f = !1, y = 0, A(), (T.key === "Backspace" || T.key === "Delete") && (bc(l), eE(l)), i.isComposing() || !T.ctrlKey || T.altKey || T.shiftKey || T.metaKey || T.key !== " " && T.code !== "Space" || !Jv() ? !1 : (T.preventDefault(), !0)),
        $e
      ),
      i.registerCommand(
        mf,
        (T) => {
          const z = Ug();
          z === "needs-plain-split" && i.dispatchCommand(Is, void 0);
          const D = z !== "declined" || ST();
          return D && T?.preventDefault(), Ns(l), D;
        },
        $e
      ),
      i.registerCommand(
        Is,
        () => (l.splitExpected.current = !0, ig()),
        $e
      ),
      YE(i, l, o),
      i.registerCommand(
        Zg,
        () => {
          if (f) return !0;
          const T = i.getRootElement(), z = T?.ownerDocument, D = !!T && !!z && z.hasFocus() && T.contains(z.activeElement);
          let H;
          if (D) {
            const G = q();
            H = O(G) ? G.focus.key : u;
          }
          return Na(() => Ns(l, H)), !0;
        },
        It
      ),
      i.registerCommand(
        Pc,
        () => {
          if (f) return !1;
          const T = q(), z = O(T) ? T.focus.key : u;
          return Na(() => Ns(l, z)), !1;
        },
        It
      ),
      i.registerUpdateListener(({ editorState: T, tags: z }) => {
        l.splitExpected.current = !1, l.wholeParaDeleteExpected?.clear(), l.collapsedDeleteCaretParas?.clear(), l.rebuildAttempted.clear();
        const D = T.read(() => {
          const G = q();
          return O(G) ? G.focus.key : void 0;
        }), H = p;
        if (D !== void 0 && (p = D), z.has(Nc)) {
          l.pendingKeys.clear(), T.read(() => KE(l)), f = !0, D !== void 0 && (u = D);
          return;
        }
        if (z.has(kr)) {
          D !== void 0 && D !== H && (f = !0);
          return;
        }
        f || (D !== void 0 && (u = D), A(), !(m || D === void 0) && [...l.pendingKeys].some((G) => G !== D) && (m = !0, queueMicrotask(() => {
          m = !1, !g && (x() || v(u));
        })));
      })
    );
    return () => {
      g = !0, S !== void 0 && clearTimeout(S), S = void 0, d(), M(), a.current = void 0;
    };
  }, [i, s, o]), null;
}
const QE = ["status_unknown", "status_invalid"], em = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, ZE = Object.values(em);
function eA(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = em[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Gd(e) {
  e.classList.remove(...QE), e.removeAttribute("aria-description"), ZE.includes(e.title) && e.removeAttribute("title");
}
function tA(e, t, r, n) {
  const i = (a) => a.read(() => De().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const d = ie(l)?.getTopLevelElement();
        d && a.add(d.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function rA(e) {
  const t = ie(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : N(t) && t.getParent()?.getKey() === r.getKey();
}
function nA({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ae(), i = e?.markerMode === "editable";
  return K(() => {
    if (!i) return;
    const s = t ?? Gs;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const d = xM(s, l);
        let u = d;
        if (l) {
          u = new Map(d);
          for (const [f, p] of o) {
            if (u.has(f) || rA(f)) continue;
            const m = ie(f)?.getTopLevelElement();
            !m || l.has(m.getKey()) || u.set(f, p);
          }
        }
        for (const [f] of o) {
          if (u.has(f)) continue;
          const p = n.getElementByKey(f);
          p && Gd(p);
        }
        for (const [f, p] of u) {
          const m = n.getElementByKey(f);
          m && eA(m, p);
        }
        o = u, r?.debug(`[MarkerValidation] pass: ${u.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: d, dirtyElements: u, dirtyLeaves: f }) => {
        u.size === 0 && f.size === 0 || a(
          tA(l, d, u, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const d = n.getElementByKey(l);
        d && Gd(d);
      }
    };
  }, [n, i, t, r]), null;
}
function tm(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Mr(o);
    a && U(s) && tm(s.getChildren(), a, r);
  }
}
function rm(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Mr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = ai(o);
      if (c === void 0 || !c.includes(st)) continue;
      const l = c.split(st), d = [];
      for (let u = 0; u < l.length; u++) {
        const f = l[u];
        if (u > 0 && d.push(...t[r++] ?? []), f.length > 0) {
          const p = {
            ...o,
            text: f
          };
          d.push(p);
        }
      }
      i.splice(s, 1, ...d), s += d.length - 1;
    }
  };
  n(e);
}
function nm(e, t, r) {
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
function im(e, t) {
  const r = [];
  for (const n of e)
    Sg(n, t) || ((se(n) || $(n)) && r.push(n.getMarker()), U(n) && r.push(...im(n.getChildren(), t)));
  return r;
}
function sm(e) {
  const t = [];
  for (const r of e) {
    const n = wl(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Mr(r);
    i && t.push(...sm(i));
  }
  return t;
}
function Dl(e, t, r) {
  const n = im(e, r), i = sm(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function iA(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = q();
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
function Ul(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function sA(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  for (const y of e) {
    const x = ql(y, o, s);
    if (!x) return;
    c.text.length > 0 && (c.text += " ");
    const v = c.text.length;
    x.spans.forEach(
      (S) => c.spans.push({ ...S, start: S.start + v, end: S.end + v })
    ), c.sentinels.push(...x.sentinels), c.text += x.text;
  }
  const l = i ? Ul(c, i) : c.text, d = Ar(l, {
    getMarker: o
  });
  if (d.length === 0) return;
  if (qn(d) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const u = Gr.serializeEditorState(
    { type: xr, version: Tr, content: d },
    s
  ).root.children;
  if (Uo(u) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = nm(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (bi(u, o) === yi(e, o) && Dl(e, u, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  rm(u, f);
  const m = oA(e), g = om(u);
  for (let y = 0; y < m.length && y < g.length; y++)
    m[y].sid !== void 0 && g[y].number === m[y].number && (g[y].sid = m[y].sid);
  return u;
}
function oA(e) {
  const t = [], r = (n) => {
    Ne(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : U(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function om(e) {
  const t = [];
  for (const r of e) {
    cp(r) && t.push(r);
    const n = Mr(r);
    n && t.push(...om(n));
  }
  return t;
}
function aA(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = qg(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: d } = c;
  if (d.length === 0) return;
  const u = i ? Ul(l, i) : l.text, f = Ar(u, {
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
  const m = p.content ?? [], g = Rg(m), y = e.getCategory() !== g, x = _g(e, m, g, s);
  if (x.failure !== void 0) {
    x.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : x.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const v = x.children;
  if (Uo(v) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const S = nm(l, t, n);
  if (!S) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (bi(v, o) === yi(d, o) && Dl(d, v, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: d, category: g, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return rm(v, S), { rebuilt: v, contentNodes: d, category: g, categoryChanged: y };
}
function Jd(e) {
  return e.$?.textType;
}
function cA(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Jd(e) === Jd(t);
}
function lA(e) {
  const t = [];
  for (const r of e) {
    const n = ie(r);
    n?.isAttached() && Ie(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function uA(e) {
  if (!N(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!j(t)) return;
  const r = e.getTextContent();
  if (Xr(e)) return;
  const n = Tg.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Yd(e, t) {
  const r = e;
  r.marker = t, r.text = Mg(t, r.markerSyntax, r.nested);
}
function dA(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Se.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Yd(a.node, s);
  const c = n.getChildren().filter(N).filter((d) => d.getMarkerSyntax() === "closing" && d.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Yd(l.node, s);
}
function fA(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Lg(e, i, n);
  if (!o) return;
  const a = r ? Ul(o, r) : o.text, c = Ar(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (qn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const d = Gr.serializeEditorState(
    { type: xr, version: Tr, content: c },
    n
  ).root.children;
  if (d.length === 0) return;
  const u = [e, ...zo(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && bi(d, i) === yi(u, i) && Dl(u, d, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return d;
}
function pA(e, t, r, n, i) {
  const s = iA(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = (y) => {
    j(y) ? c.set(y.getKey(), y) : Re(y) ? l.set(y.getKey(), y) : o.set(y.getKey(), [y]);
  };
  for (const y of t) {
    const x = ie(y);
    if (!x?.isAttached()) continue;
    const v = as(x);
    if (v) {
      if (u(v), N(x)) {
        const S = Wg(x, r.getMarker);
        S && a.push(S);
      }
      if (j(v)) {
        const S = uA(x);
        S && d.set(v.getKey(), S);
      }
    }
  }
  const f = /* @__PURE__ */ new Set();
  for (const y of a)
    y.some((x) => f.has(x.getKey())) || (y.forEach((x) => {
      f.add(x.getKey()), o.delete(x.getKey());
    }), o.set(y[0].getKey(), y));
  if (s) {
    const y = as(s.node);
    y && u(y);
  }
  const p = lA(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && p.length === 0)
    return;
  const m = new Set(p.map((y) => y.getKey())), g = /* @__PURE__ */ new Map();
  tm(De().getChildren(), e.root.children, g);
  for (const y of d.values()) dA(y, g);
  for (const y of c.values()) {
    const x = g.get(y.getKey()), v = x ? Mr(x.node) : void 0;
    if (!x || !v) continue;
    const S = aA(y, g, r, m, s);
    if (!S) continue;
    if (S.categoryChanged) {
      const T = x.node;
      S.category === void 0 ? delete T.category : T.category = S.category;
    }
    if (!S.rebuilt) continue;
    const A = g.get(S.contentNodes[0].getKey());
    if (!A) continue;
    const M = v.indexOf(A.node);
    M < 0 || v.splice(M, S.contentNodes.length, ...S.rebuilt);
  }
  for (const y of o.values()) {
    const x = g.get(y[0].getKey());
    if (!x) continue;
    const v = sA(y, g, r, m, s);
    if (!v) continue;
    const S = x.siblings.indexOf(x.node);
    S < 0 || x.siblings.splice(S, y.length, ...v);
  }
  for (const y of l.values()) {
    const x = g.get(y.getKey());
    if (!x) continue;
    const v = 1 + zo(y).length, S = fA(y, r, s);
    if (!S) continue;
    const A = x.siblings.indexOf(x.node);
    A < 0 || x.siblings.splice(A, v, ...S);
  }
  for (const y of p) {
    const x = g.get(y.getKey());
    if (!x) continue;
    const v = x.siblings.indexOf(x.node);
    if (v < 0) continue;
    x.siblings.splice(v, 1);
    const S = x.siblings[v - 1], A = x.siblings[v], M = S && ai(S), T = A && ai(A);
    S && A && M !== void 0 && T !== void 0 && cA(S, A) && (S.text = M + T, x.siblings.splice(v, 1));
  }
  return Yh(e, r.viewOptions);
}
function hA({
  viewOptions: e,
  logger: t
}) {
  const [r] = ae(), n = hi(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return K(() => {
    if (n)
      return r.registerNodeTransform(
        Qe,
        (i) => gA(i, t)
      );
  }, [r, n, t]), null;
}
function gA(e, t) {
  e.getMarker() !== or && (e.isEmpty() || Ft(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${or}" (key ${e.getKey()})`
  ), e.setMarker(or)));
}
function mA({
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
  return K(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, co(s, e) || yA(i, r, e);
  }, [r, e, t]), K(
    () => r.registerMutationListener(
      Ut,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = xc(r);
        Xd(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Os(s) === Os(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), K(() => {
    const i = (a) => a.read(
      () => new Set(
        De().getChildren().filter(Be).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const d = a === c ? /* @__PURE__ */ new Set() : i(a), u = i(c), f = [...u].some((p) => !d.has(p));
      f && (xc(r) || Xd(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...d].some((p) => !u.has(p)),
        isSameDocumentReload: Os(a) === Os(c)
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
      _r,
      () => {
        const i = n.current;
        return i.phase === "idle" && TA(i, am()), !1;
      },
      It
    ),
    [r]
  ), K(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(_r, void 0));
    };
    return Ge(
      r.registerMutationListener(St, i),
      r.registerMutationListener(pt, i)
    );
  }, [r]), K(() => {
    const i = () => SA(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function yA(e, t, r) {
  if (bA(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = xc(t);
  (!n || n === r.book) && t.update(() => cm(r.chapterNum, r.verseNum), {
    tag: kr
  });
}
function bA(e, t) {
  const r = e.pendingEchoes.findIndex((n) => co(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function am() {
  const e = q(), t = mp(e);
  if (!t) return;
  const r = Fl(), n = Xb(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = tl(t, e), { verseNum: o, verse: a } = GT(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function xc(e) {
  return e.getEditorState().read(() => Fl()?.getCode() || void 0);
}
function Fl() {
  return De().getChildren().find(Ct);
}
function Xd(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Oa(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Oa(e, t), e.phase = "navigating") : i && Oa(e, t), r && r !== e.scrRef.book && dm(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Oa(e, t) {
  queueMicrotask(() => {
    t.update(
      () => cm(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: kr }
    );
  });
}
function cm(e, t) {
  const r = am();
  if (r?.chapterNum === e && (r.verse ? um(t, r.verse) : r.verseNum === t))
    return;
  const n = De().getChildren(), i = up(n, e);
  if (!i) return;
  const s = ik(n, i), o = Yb(s, !0);
  nk(s, o);
  let a;
  try {
    a = KT(s, t);
  } catch {
    return;
  }
  a && (se(a) ? !E(a.getFirstChild()) && mi(a) || Xt(a, 0) : kA(a));
}
function kA(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || me(n)) {
    Xt(t, r);
    return;
  }
  const i = Po(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (E(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = U(n) && !j(n) ? lm(n) : void 0;
  s ? s.select(0, 0) : Xt(t, r);
}
function lm(e) {
  const t = e.getFirstChild();
  if (E(t)) return t;
  if (U(t) && !j(t)) return lm(t);
}
function Os(e) {
  return e.read(() => {
    const t = De().getChildren().find(Be);
    return `${Fl()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function TA(e, t) {
  e.phase !== "navigating" && t && (xA(t, e.scrRef) || dm(e, _A(t, e.scrRef)));
}
function xA(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? um(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function um(e, t) {
  try {
    return zc(e, t);
  } catch {
    return !1;
  }
}
function _A(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const CA = 8;
function dm(e, t) {
  return co(t, e.scrRef) || e.pendingEchoes.some((r) => co(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > CA && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function co(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function SA(e) {
  e.phase = "idle";
}
function vA(e) {
  return Ct(e) ? `${e.__code}` : Re(e) ? `${e.__marker} "${e.__number}"` : $(e) ? `${e.__marker}` : fs(e) ? `${e.__marker} "${e.__number}"` : Zt(e) ? `${e.__caller}` : On(e) ? `${e.__marker} "${e.__number}"` : j(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : se(e) ? `${e.__marker}` : E(e) ? `"${e.__text}"${MA(e)}` : _e(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Ne(e) ? `${e.__marker} "${e.__number}"` : "";
}
function MA(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[us]) : "";
}
function EA() {
  const [e] = ae();
  return /* @__PURE__ */ C(
    ky,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: vA,
      editor: e
    }
  );
}
const fm = of(null), Qd = 4;
function AA({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Y(null), s = af(fm);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return K(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ C("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function PA({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = fe(), [s, o] = fe(), a = ge(
    (d) => {
      i((u) => u ? [...u, d] : [d]);
    },
    [i]
  ), c = (d) => {
    if (!n) return;
    const u = d.key;
    ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(u) && d.preventDefault(), u === "Escape" || u === "Tab" ? r() : u === "ArrowUp" ? o((f) => {
      if (!f) return n[0];
      const p = n.indexOf(f) - 1;
      return n[p === -1 ? n.length - 1 : p];
    }) : u === "ArrowDown" && o((f) => f ? n[n.indexOf(f) + 1] : n[0]);
  }, l = Ue(() => ({ registerItem: a }), [a]);
  return K(() => {
    const d = s ?? n?.[0];
    d?.current && d.current.focus();
  }, [n, s]), /* @__PURE__ */ C(fm.Provider, { value: l, children: /* @__PURE__ */ C("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function NA({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Y(null), c = Y(null), [l, d] = fe(!1), u = () => {
    d(!1), c && c.current && c.current.focus();
  };
  return K(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: m, left: g } = f.getBoundingClientRect();
      p.style.top = `${m + f.offsetHeight + Qd}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), K(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (m) => {
        const g = m.target;
        o && a.current && a.current.contains(g) || f.contains(g) || d(!1);
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
          const { top: g } = p.getBoundingClientRect(), y = g + p.offsetHeight + Qd;
          y !== m.getBoundingClientRect().top && (m.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Te(hn, { children: [
    /* @__PURE__ */ Te(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => d(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ C("span", { className: i }),
          t && /* @__PURE__ */ C("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ C("i", { className: "chevron-down" })
        ]
      }
    ),
    l && pn(
      /* @__PURE__ */ C(PA, { dropDownRef: a, onClose: u, children: s }),
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
function OA({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ C(
    NA,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + wA(t),
      buttonLabel: qA(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(_c).map((n) => /* @__PURE__ */ Te(
        AA,
        {
          className: "item block-marker " + RA(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ C("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ C("span", { className: "text usfm_" + n, children: _c[n] })
          ]
        },
        n
      ))
    }
  );
}
function wA(e) {
  return e && e in Cc ? e : "ban";
}
function qA(e) {
  return e && e in Cc ? Cc[e] : "No Style";
}
function RA(e) {
  return e ? "active dropdown-item-active" : "";
}
function Zd() {
  return /* @__PURE__ */ C("div", { className: "divider" });
}
const $A = Yr(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ae(), [o, a] = fe(s), [c, l] = fe(), [d, u] = fe(!1), [f, p] = fe(!1), m = ge(
    ({
      canUndo: g,
      canRedo: y,
      blockMarker: x,
      contextMarker: v
    }) => {
      u(g), p(y), l(x), n?.({
        canUndo: g,
        canRedo: y,
        blockMarker: x,
        contextMarker: v
      });
    },
    [n]
  );
  return K(() => s.registerCommand(
    _r,
    (g, y) => (a(y), !1),
    br
  ), [s]), /* @__PURE__ */ Te(hn, { children: [
    /* @__PURE__ */ C(Dh, { onStateChange: m }),
    /* @__PURE__ */ Te("div", { className: "toolbar", children: [
      /* @__PURE__ */ C(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(Tf, void 0);
          },
          title: Ls ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(xf, void 0);
          },
          title: Ls ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ C("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ C(Zd, {}),
      o === s && /* @__PURE__ */ Te(hn, { children: [
        /* @__PURE__ */ C(
          OA,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ C(Zd, {})
      ] }),
      /* @__PURE__ */ C("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), IA = Ro(), LA = {}, DA = {};
function UA() {
  return /* @__PURE__ */ C("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function wa(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
const pm = Yr(function({
  defaultUsj: t,
  scrRef: r,
  onScrRefChange: n,
  onSelectionChange: i,
  onUsjChange: s,
  onStateChange: o,
  options: a,
  logger: c,
  children: l
}, d) {
  const u = Y(null), f = Y(null), p = Y(null), m = Y(null), g = Y(t), y = Y(void 0), x = Y(void 0), v = Y(void 0), S = Y(void 0), A = Y(!1), [M, T] = fe(t), [z, D] = fe(0), [H, G] = fe(), {
    isReadonly: Q = !1,
    structureProtectionMode: le = "off",
    hasExternalUI: te = !1,
    hasSpellCheck: ve = !1,
    textDirection: Ee = "ltr",
    markerMenuTrigger: Z = "\\",
    view: F,
    nodes: ee,
    debug: Ae = !1,
    contextMenu: Ze,
    styleInfo: et,
    markerSettleDelayMs: ue
  } = a ?? DA, tt = F ?? IA, qr = ns(tt) && (tt.markerMode !== "hidden" || !tt.hasSpacing || tt.hasGutterParaMarkers || tt.hasActiveTextFocusBox) ? {
    ...tt,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : tt, ki = Y(qr);
  Ot(ki.current, qr) || (ki.current = qr);
  const de = ki.current, dt = Ue(() => ee ?? LA, [ee]), Ko = Ue(() => Ze, [Ze]), Rn = Ue(
    () => qT(et ?? Gs),
    [et]
  ), en = Y(c);
  Ot(en.current, c) || (en.current = c);
  const Ve = en.current, ce = ns(de), gt = Q || ce, xe = qr !== tt;
  K(() => {
    ce && !Q && Ve?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), xe && Ve?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    );
  }, [ce, Q, xe, Ve]);
  const pr = Y(null), Pe = Ue(() => {
    if (de.markerMode !== "editable") return;
    const P = et ?? Gs;
    return {
      getContext: () => pr.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (I) => PM(
        P,
        I,
        dt.extraValidMarkers
      ),
      getEnterItems: (I) => NM(
        P,
        I,
        dt.extraValidMarkers
      ),
      apply: (I, B) => {
        const J = pr.current;
        J && (B.trigger === "enter" ? J.splitParagraphWithMarker(I.marker) : J.applyMarkerMenuSelection(I, B));
      },
      commitTypedCloser: (I) => {
        pr.current?.commitTypedCloser(I);
      }
    };
  }, [de, et, dt.extraValidMarkers]), hr = (P) => {
    A.current || (A.current = !0, en.current?.warn(
      `Editor: cannot ${P} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Ti = (P) => {
    if (ce)
      throw new Error(
        `Cannot ${P} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, mt = (P) => {
    if (Ti(P), gt) throw new Error(`Cannot ${P} in readonly mode`);
  }, $n = () => !!u.current && Lh(u.current), xi = Ue(
    () => ({
      namespace: "platformEditor",
      theme: { ...hg, showCharMarkerTitles: de.showCharMarkerTitles },
      editable: !gt,
      editorState: void 0,
      // Handling of errors during update
      onError(P) {
        throw P;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [nt, ...ce ? Yx : hh]
    }),
    [gt, ce, de.showCharMarkerTitles]
  );
  va.initialize(Ve);
  function Rr(P) {
    if (P !== void 0 && !Xv(P, dt.extraValidMarkers))
      throw new Error(`Unsupported character marker '${P}'`);
  }
  const In = ge(() => {
    const P = u.current;
    if (!P) return g.current;
    const I = Su(P), B = x.current;
    if ((!I || I.size === 0) && !B) return g.current;
    const J = P.getEditorState(), he = J.toJSON();
    return J.read(
      () => pA(
        he,
        I ?? /* @__PURE__ */ new Set(),
        { viewOptions: de, getMarker: Rn, logger: Ve },
        B,
        v.current
      )
    ) ?? g.current;
  }, [de, Rn, Ve]), zt = {
    focus() {
      u.current?.focus();
    },
    isFocused() {
      const P = u.current?.getRootElement();
      return !!P && P.ownerDocument.activeElement === P;
    },
    undo() {
      u.current?.dispatchCommand(Tf, void 0);
    },
    redo() {
      u.current?.dispatchCommand(xf, void 0);
    },
    cut() {
      mt("cut"), u.current?.dispatchCommand(mn, null);
    },
    copy() {
      u.current?.dispatchCommand(mo, null);
    },
    paste() {
      mt("paste"), u.current && ml(u.current);
    },
    pastePlainText() {
      mt("paste as plain text"), u.current && yl(u.current);
    },
    getUsj() {
      return In();
    },
    commitPendingMarkerEdits() {
      const P = u.current;
      if (!P) return;
      const I = !$n();
      I && qs(P, un), P.update(
        () => {
          I && Bt(un), P.dispatchCommand(Zg, void 0);
        },
        { discrete: !0 }
      ), I && ya(P);
    },
    setTransientInput(P) {
      if (!P) {
        x.current = void 0;
        return;
      }
      const I = u.current?.getEditorState().read(() => {
        const B = q();
        return O(B) && B.isCollapsed() ? B.focus.key : void 0;
      });
      x.current = { input: P, nodeKey: I ?? v.current?.key };
    },
    setUsj(P) {
      if (!Ot(g.current, P)) {
        g.current = P, x.current = void 0;
        const I = Ot(M, P);
        T(P), I && D((B) => B + 1);
      }
    },
    applyUpdate(P, I = "remote") {
      if (ce && I === "remote") {
        en.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      Ti("apply an update");
      const B = $n();
      !B && u.current && qs(u.current, un), u.current?.update(
        () => {
          I === "remote" && Bt(Hi), B || Bt(un), C_(P, de, dt, Ve);
        },
        { discrete: !0 }
      ), !B && u.current && ya(u.current);
      const J = u.current?.getEditorState();
      if (!J) return;
      const he = va.deserializeEditorState(J, de);
      if (he) {
        const rt = !Ot(g.current, he);
        if (rt && (g.current = he), rt || !Ot(M, he)) {
          const Nt = $u(P, J, "apply");
          S.current = he, s?.(he, P, I, Nt);
        }
      }
    },
    replaceEmbedUpdate(P, I) {
      const B = u.current?.read(() => ox(P, I));
      B ? this.applyUpdate(B) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${P}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (ce) {
        hr("get the selection");
        return;
      }
      return u.current?.read(Qa);
    },
    setSelection(P) {
      if (ce) {
        hr("set the selection");
        return;
      }
      u.current?.update(() => {
        const I = al(P);
        I !== void 0 && (Wi(I), Bt(Of));
      });
    },
    setAnnotation(P, I, B, J, he) {
      if (ce) {
        hr("set an annotation");
        return;
      }
      let rt, Nt, _i, Ci;
      typeof J == "function" || J === void 0 ? (rt = J, Nt = he) : (rt = J.onClick, Nt = J.onRemove, _i = J.onMouseEnter, Ci = J.onMouseLeave), f.current?.setAnnotation(
        P,
        pu(I),
        B,
        rt,
        Nt,
        _i,
        Ci
      );
    },
    removeAnnotation(P, I) {
      f.current?.removeAnnotation(pu(P), I);
    },
    formatPara(P) {
      mt("format a paragraph"), u.current?.update(() => {
        const I = q();
        if (!O(I)) {
          c?.warn(
            `formatPara refused: no range selection to retag with "${P}" (restore the caret before applying, as the marker palettes do)`
          );
          return;
        }
        _y(I, () => Yi(P));
        const B = q();
        if (!O(B)) return;
        const J = /* @__PURE__ */ new Set();
        B.getNodes().forEach((he) => {
          const rt = he.getTopLevelElement();
          se(rt) && J.add(rt);
        }), J.forEach((he) => Dg(he, P, de));
      });
    },
    getElementByKey(P) {
      return u.current?.read(
        () => u.current?.getElementByKey(P) ?? void 0
      );
    },
    removeCharacterMarker(P) {
      if (gt) throw new Error("Cannot remove character marker in readonly mode");
      Rr(P);
      let I = !1;
      return u.current?.update(
        () => {
          const B = q();
          O(B) && (I = cg(B, P, de));
        },
        { discrete: !0 }
      ), I;
    },
    replaceCharacterMarker(P, I) {
      if (gt) throw new Error("Cannot replace character marker in readonly mode");
      Rr(P), Rr(I);
      let B = !1;
      return u.current?.update(
        () => {
          const J = q();
          O(J) && (B = lM(J, P, I));
        },
        { discrete: !0 }
      ), B;
    },
    extendCharacterMarker(P, I) {
      if (gt) throw new Error("Cannot extend character marker in readonly mode");
      Rr(P), I?.forEach(
        (J) => Rr(J)
      );
      let B = !1;
      return u.current?.update(
        () => {
          const J = q();
          O(J) && (B = uM(
            J,
            P,
            I,
            de
          ));
        },
        { discrete: !0 }
      ), B;
    },
    insertMarker(P) {
      if (gt) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!u.current) return;
      if (!dc(P, dt.extraValidMarkers))
        throw new Error(`Unsupported marker '${P}'`);
      const I = fc(
        P,
        y,
        de,
        dt,
        Ve,
        void 0,
        et
      );
      return I.action({ editor: u.current, reference: r }), I.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!Q)
        return u.current?.getEditorState().read(() => mE());
    },
    applyMarkerMenuSelection(P, I) {
      if (Q) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!u.current) return;
      if (P.kind !== "closeTag" && !dc(P.marker, dt.extraValidMarkers))
        throw new Error(`Unsupported marker '${P.marker}'`);
      let B;
      return u.current.update(() => {
        B = xE(P, I, r, {
          expandedNoteKeyRef: y,
          viewOptions: de,
          nodeOptions: dt,
          logger: c,
          styleInfo: et
        });
      }), B;
    },
    splitParagraphWithMarker(P) {
      if (Q) throw new Error("Cannot split paragraph in readonly mode");
      u.current && u.current.update(() => {
        Bg(P, de);
      });
    },
    commitTypedMarker(P, I) {
      if (Q) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!u.current) return !1;
      let B = !1;
      return u.current.update(() => {
        B = TE(P, I), B || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), B;
    },
    commitTypedCloser(P) {
      if (Q) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!u.current) return !1;
      let I = !1;
      return u.current.update(() => {
        I = jg(P), I || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), I;
    },
    insertNote(P, I, B) {
      mt("insert a note"), u.current?.update(() => {
        const J = dh(
          P,
          I,
          B,
          r,
          de,
          dt,
          Ve
        );
        wa(J, y);
      });
    },
    selectNote(P) {
      u.current?.update(() => {
        const I = Fr(P);
        I && (zu(I, de), wa(I, y));
      });
    },
    selectAfterNote(P) {
      const I = u.current;
      if (!I) return;
      const B = !$n();
      B && qs(I, un), I.update(
        () => {
          B && Bt(un);
          const J = Fr(P);
          J && Vx(J);
        },
        { discrete: !0 }
      ), B && (ya(I), i?.(I.getEditorState().read(() => Qa())));
    },
    selectNoteTextOffset(P, I) {
      u.current?.update(() => {
        const B = Fr(P);
        B && (Wx(B, I) || zu(B, de), wa(B, y));
      });
    },
    getNoteOps(P) {
      return u.current?.read(() => {
        const I = Fr(P);
        if (I)
          return il(I);
      });
    },
    getNoteIndex(P) {
      const I = u.current;
      return I ? rc(I, () => sl(P)) : void 0;
    },
    getNoteKey(P) {
      const I = u.current;
      return I ? rc(I, () => Fr(P)?.getKey()) : void 0;
    },
    highlightNote(P) {
      p.current?.setHighlightedNote(P);
    },
    get toolbarEndRef() {
      return m;
    }
  };
  pr.current = zt, uo(d, () => zt), K(() => {
    const P = u.current;
    if (P)
      return P.registerUpdateListener(({ editorState: I }) => {
        I.read(() => {
          const B = q();
          if (!O(B) || !B.isCollapsed()) return;
          const J = B.focus.getNode();
          E(J) && (v.current = { key: J.getKey(), offset: B.focus.offset });
        });
      });
  }, []);
  const er = ge(
    (P, I, B, J) => {
      if (ce) return;
      const he = va.deserializeEditorState(P, de);
      if (he) {
        const rt = !Ot(g.current, he);
        if (rt && (g.current = he), rt || !Ot(M, he)) {
          const Nt = $u(J, P);
          S.current = he, s?.(he, J, "local", Nt);
        }
      }
    },
    [M, s, de, ce]
  );
  K(() => {
    const P = u.current;
    if (!(!P || !s))
      return P.registerUpdateListener(({ tags: I, dirtyElements: B, dirtyLeaves: J }) => {
        !I.has(Nc) && (B.size === 0 && J.size === 0 || I.has(Hi) || !Su(P)?.size) || queueMicrotask(() => {
          const he = In();
          !he || Ot(S.current, he) || (S.current = he, s(he, void 0, "local", void 0));
        });
      });
  }, [s, In]);
  const tr = ge(
    (P) => {
      G(P.contextMarker), o?.(P);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Te(Cf, { initialConfig: xi, children: [
      /* @__PURE__ */ C(_C, { isEditable: !gt }),
      /* @__PURE__ */ Te("div", { className: "editor-container", children: [
        te ? /* @__PURE__ */ C(Dh, { onStateChange: tr }) : /* @__PURE__ */ C(
          "div",
          {
            className: "editor-toolbar-container" + (gt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ C(
              $A,
              {
                ref: m,
                editorRef: pr,
                isReadonly: gt,
                onStateChange: tr
              }
            )
          }
        ),
        /* @__PURE__ */ Te("div", { className: "editor-inner", children: [
          /* @__PURE__ */ C(vf, { editorRef: u }),
          /* @__PURE__ */ C(
            xy,
            {
              contentEditable: /* @__PURE__ */ C(
                Sf,
                {
                  className: `editor-input usfm ${__(de).join(" ")}${de.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${de.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: ve
                }
              ),
              placeholder: /* @__PURE__ */ C(UA, {}),
              ErrorBoundary: Mf
            }
          ),
          te && /* @__PURE__ */ C(xC, {}),
          /* @__PURE__ */ C(Ef, {}),
          r && n && /* @__PURE__ */ C(mA, { scrRef: r, onScrRefChange: n }),
          r && !te && /* @__PURE__ */ C(
            JS,
            {
              trigger: Z,
              scrRef: r,
              contextMarker: H,
              getMarkerAction: (P) => fc(
                P,
                y,
                de,
                dt,
                Ve,
                void 0,
                et
              ),
              editableHarness: Pe
            }
          ),
          /* @__PURE__ */ C(
            EC,
            {
              scripture: M,
              scriptureRef: g,
              nodeOptions: dt,
              editorAdaptor: Gr,
              viewOptions: de,
              logger: Ve
            },
            z
          ),
          /* @__PURE__ */ C(GC, { onChange: i }),
          /* @__PURE__ */ C(
            m_,
            {
              onChange: er,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: jy
            }
          ),
          /* @__PURE__ */ C(gM, { viewOptions: de }),
          /* @__PURE__ */ C(h_, { ref: f, logger: Ve }),
          /* @__PURE__ */ C(J_, { viewOptions: de }),
          /* @__PURE__ */ C(lC, {}),
          /* @__PURE__ */ C(gC, {}),
          de?.markerMode !== "editable" && /* @__PURE__ */ C(mC, { logger: Ve }),
          /* @__PURE__ */ C(TC, { options: Ko }),
          /* @__PURE__ */ C(MC, {}),
          /* @__PURE__ */ C(_E, {}),
          /* @__PURE__ */ C(
            XE,
            {
              viewOptions: de,
              getMarker: Rn,
              logger: Ve,
              markerSettleDelayMs: ue
            }
          ),
          /* @__PURE__ */ C(
            nA,
            {
              styleInfo: et,
              viewOptions: de,
              logger: Ve
            }
          ),
          /* @__PURE__ */ C(AC, { ref: p }),
          /* @__PURE__ */ C(
            PC,
            {
              expandedNoteKeyRef: y,
              nodeOptions: dt,
              viewOptions: de,
              logger: Ve
            }
          ),
          /* @__PURE__ */ C(HC, {}),
          /* @__PURE__ */ C(SC, {}),
          /* @__PURE__ */ C(B_, {}),
          /* @__PURE__ */ C(F_, {}),
          /* @__PURE__ */ C(hA, { viewOptions: de, logger: Ve }),
          /* @__PURE__ */ C(JC, {}),
          /* @__PURE__ */ C(IS, { structureProtectionMode: le }),
          /* @__PURE__ */ C(LS, { textDirection: Ee }),
          /* @__PURE__ */ C(US, {}),
          /* @__PURE__ */ C(HS, {}),
          l
        ] }),
        Ae && /* @__PURE__ */ C(EA, {})
      ] })
    ] }, de.verseLayout ?? "inline")
  );
}), H1 = Yr(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ C(pm, { ref: r, ...i });
});
function hm() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function lo(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? hm() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function gm(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? hm() : r,
    quote: e,
    type: "thread"
  };
}
function ef(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function FA(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function qa(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class zA {
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
    this._comments = t, qa(this);
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
          const c = ef(a);
          i.splice(o, 1, c);
          const l = n !== void 0 ? n : c.comments.length;
          if (this.isCollaborative() && s !== null) {
            const d = s.get(o).get("comments");
            this._withRemoteTransaction(() => {
              const u = this._createCollabSharedMap(t);
              d.insert(l, [u]);
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
    this._comments = i, qa(this);
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
          const c = ef(a);
          n.splice(o, 1, c);
          const l = c.comments;
          if (s = l.indexOf(t), this.isCollaborative() && i !== null) {
            const d = i.get(o).get("comments"), u = s;
            this._withRemoteTransaction(() => {
              d.delete(u);
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
    return this._comments = n, qa(this), t.type === "comment" ? {
      index: s,
      markedComment: FA(t)
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
    return t !== null ? t.doc.get("comments", iu) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new su(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new iu();
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
      Ly,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      It
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Dy) {
            const d = l.target, u = l.delta;
            let f = 0;
            for (const p of u) {
              const m = p.insert, g = p.retain, y = p.delete, x = d.parent, v = d === r ? void 0 : x instanceof su && this._comments.find((S) => S.id === x.get("id"));
              if (Array.isArray(m)) {
                const S = f;
                m.slice().reverse().forEach((A) => {
                  const M = A.get("id"), z = A.get("type") === "thread" ? gm(
                    A.get("quote"),
                    A.get("comments").toArray().map(
                      (D) => lo(
                        D.get("content"),
                        D.get("author"),
                        D.get("id"),
                        D.get("timeStamp"),
                        D.get("deleted")
                      )
                    ),
                    M
                  ) : lo(
                    A.get("content"),
                    A.get("author"),
                    M,
                    A.get("timeStamp"),
                    A.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(z, v, S);
                  });
                });
              } else if (typeof g == "number")
                f += g;
              else if (typeof y == "number")
                for (let S = 0; S < y; S++) {
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
function KA(e) {
  const [t, r] = fe(e.getComments());
  return K(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function jA({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Y(null);
  return K(() => {
    i.current !== null && i.current.focus();
  }, []), K(() => {
    let s = null;
    const o = (l) => {
      l.key === "Escape" && e();
    }, a = (l) => {
      const d = l.target;
      i.current !== null && !i.current.contains(d) && n && e();
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
function BA({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return pn(
    /* @__PURE__ */ C(jA, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function mm() {
  const [e, t] = fe(null), r = ge(() => {
    t(null);
  }, []), n = Ue(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ C(BA, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const VA = {
  ...hg,
  paragraph: "CommentEditorTheme__paragraph"
};
function WA(...e) {
  return e.filter(Boolean).join(" ");
}
function Jr({
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
      className: WA(
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
function HA({
  className: e
}) {
  return /* @__PURE__ */ C(Sf, { className: e || "ContentEditable__root" });
}
function GA({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ C("div", { className: t || "Placeholder__root", children: e });
}
const tf = kf("INSERT_INLINE_COMMAND");
function JA({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Y(null), s = ge(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: d } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${d - 30}px`;
    }
  }, [e, t]);
  return K(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), cs(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ C("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ C("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ C("i", { className: "icon add-comment" }) }) });
}
function YA({ onEscape: e }) {
  const [t] = ae();
  return K(() => t.registerCommand(
    bf,
    (r) => e(r),
    Xn
  ), [t, e]), null;
}
function ym({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ C(Cf, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: VA
  }, children: /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ C(
      Ry,
      {
        contentEditable: /* @__PURE__ */ C(HA, { className: e }),
        placeholder: /* @__PURE__ */ C(GA, { children: s }),
        ErrorBoundary: Mf
      }
    ),
    /* @__PURE__ */ C(qy, { onChange: n }),
    /* @__PURE__ */ C(Ef, {}),
    t !== !1 && /* @__PURE__ */ C(Ny, {}),
    /* @__PURE__ */ C(YA, { onEscape: r }),
    /* @__PURE__ */ C(Oy, {}),
    i !== void 0 && /* @__PURE__ */ C(vf, { editorRef: i })
  ] }) });
}
function bm(e, t) {
  return ge(
    (r, n) => {
      r.read(() => {
        e($y()), t(!Iy(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function XA({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = fe(""), [s, o] = fe(!1), a = Y(null), c = Ue(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Y(null), d = Tm(), u = ge(() => {
    e.getEditorState().read(() => {
      const g = q();
      if (O(g)) {
        l.current = g.clone();
        const y = g.anchor, x = g.focus, v = Cy(
          e,
          y.getNode(),
          y.offset,
          x.getNode(),
          x.offset
        ), S = a.current;
        if (v !== null && S !== null) {
          const { left: A, bottom: M, width: T } = v.getBoundingClientRect(), z = Sy(e, v);
          let D = z.length === 1 ? A + T / 2 - 125 : A - 125;
          D < 10 && (D = 10), S.style.left = `${D}px`, S.style.top = `${M + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const H = z.length, { container: G } = c, Q = c.elements, le = Q.length;
          for (let te = 0; te < H; te++) {
            const ve = z[te];
            let Ee = Q[te];
            Ee === void 0 && (Ee = document.createElement("span"), Q[te] = Ee, G.appendChild(Ee));
            const F = `position:absolute;top:${ve.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${ve.left}px;height:${ve.height}px;width:${ve.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            Ee.style.cssText = F;
          }
          for (let te = le - 1; te >= H; te--) {
            const ve = Q[te];
            G.removeChild(ve), Q.pop();
          }
        }
      }
    });
  }, [e, c]);
  cs(() => {
    u();
    const g = c.container, y = document.body;
    return y !== null ? (y.appendChild(g), () => {
      y.removeChild(g);
    }) : () => {
    };
  }, [c.container, u]), K(() => (window.addEventListener("resize", u), () => {
    window.removeEventListener("resize", u);
  }), [u]);
  const f = (g) => (g.preventDefault(), t(), !0), p = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), r(
        gm(g, [lo(n, d)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, m = bm(i, o);
  return /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ C(
      ym,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: m
      }
    ),
    /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ C(Jr, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ C(
        Jr,
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
function QA({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = fe(""), [s, o] = fe(!1), a = Y(null), c = Tm(), l = bm(i, o);
  return /* @__PURE__ */ Te(hn, { children: [
    /* @__PURE__ */ C(
      ym,
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
      Jr,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(lo(n, c), !1, t);
            const u = a.current;
            u !== null && u.dispatchCommand(hy, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ C("i", { className: "send" })
      }
    )
  ] });
}
function km({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Te(hn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Te("div", { className: "Modal__content", children: [
      /* @__PURE__ */ C(
        Jr,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ C(
        Jr,
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
function rf({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = fe(0);
  K(() => {
    const d = () => {
      s(performance.timeOrigin + performance.now());
    };
    d();
    const u = window.setInterval(d, 6e4);
    return () => {
      window.clearInterval(u);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = mm();
  return /* @__PURE__ */ Te("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ C("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Te("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ C("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Te(hn, { children: [
      /* @__PURE__ */ C(
        Jr,
        {
          onClick: () => {
            l("Delete Comment", (d) => /* @__PURE__ */ C(
              km,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: d
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
function ZA({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ae(), [a, c] = fe(0), [l, d] = mm(), u = Ue(
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
    return f.type === "thread" ? /* @__PURE__ */ Te(
      "li",
      {
        onClick: () => {
          const g = s.get(p);
          if (g !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const x = Array.from(g)[0], v = ie(x);
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
              /* @__PURE__ */ C("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ C(
              Jr,
              {
                onClick: () => {
                  d("Delete Thread", (g) => /* @__PURE__ */ C(
                    km,
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
            rf,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: u
            },
            g.id
          )) }),
          /* @__PURE__ */ C("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ C(
            QA,
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
      rf,
      {
        comment: f,
        deleteComment: r,
        rtf: u
      },
      p
    );
  }) });
}
function e1({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Y(null), o = r.length === 0;
  return /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ C("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ C("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ C(
      ZA,
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
function Tm() {
  const e = Af(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function t1({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = Af(), [a] = ae(), c = Ue(() => {
    const D = new zA(a, s);
    return r && D.registerOnChange(r), t?.(D), D;
  }, [a, s, r, t]), l = KA(c), d = Ue(() => /* @__PURE__ */ new Map(), []), [u, f] = fe(), [p, m] = fe([]), [g, y] = fe(!1), [x, v] = fe(!1), { yjsDocMap: S } = o;
  K(() => {
    if (e) {
      const D = e("comments", S);
      return c.registerCollaboration(D);
    }
    return () => {
    };
  }, [c, e, S]);
  const A = ge(() => {
    a.update(() => {
      const D = q();
      D !== null && (D.dirty = !0);
    }), y(!1);
  }, [a]), M = ge(
    (D, H) => {
      if (D.type === "comment") {
        const G = c.deleteCommentOrThread(D, H);
        if (!G)
          return;
        const { markedComment: Q, index: le } = G;
        c.addComment(Q, H, le);
      } else {
        c.deleteCommentOrThread(D);
        const G = H !== void 0 ? H.id : D.id, Q = d.get(G);
        Q !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const le of Q) {
              const te = ie(le);
              _e(te) && (te.deleteID(Kr, G), te.hasNoIDsForEveryType() && Ks(te));
            }
          });
        });
      }
    },
    [c, a, d]
  ), T = ge(
    (D, H, G, Q) => {
      c.addComment(D, G), H && (a.update(() => {
        O(Q) && Vf(Q, Kr, D.id);
      }), y(!1));
    },
    [c, a]
  );
  K(() => {
    const D = [];
    let H;
    for (const G of p) {
      const Q = d.get(G);
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
      for (const G of D)
        G.classList.remove("selected");
    };
  }, [p, a, d]), K(() => {
    if (!a.hasNodes([nt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const D = /* @__PURE__ */ new Map();
    return Ge(
      _f(
        a,
        nt,
        (H) => Gi(H.getTypedIDs()),
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
              Q === "destroyed" ? te = D.get(G) ?? [] : _e(le) && (te = le.getTypedIDs()[Kr] ?? []);
              for (const ve of te) {
                let Ee = d.get(ve);
                D.set(G, te), Q === "destroyed" ? Ee !== void 0 && (Ee.delete(G), Ee.size === 0 && d.delete(ve)) : (Ee === void 0 && (Ee = /* @__PURE__ */ new Set(), d.set(ve, Ee)), Ee.has(G) || Ee.add(G));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: H, tags: G }) => {
        H.read(() => {
          const Q = q();
          let le = !1, te = !1;
          if (O(Q)) {
            const ve = Q.anchor.getNode();
            if (E(ve)) {
              const Ee = Eb(ve, Kr, Q.anchor.offset) ?? [];
              Ee !== null && (m(Ee), le = !0), Q.isCollapsed() || (f(ve.getKey()), te = !0);
            }
          }
          le || m((ve) => ve.length === 0 ? ve : []), te || f(null), !G.has("collaboration") && O(Q) && y(!1);
        });
      }),
      a.registerCommand(
        tf,
        () => {
          const H = window.getSelection();
          return H !== null && H.removeAllRanges(), y(!0), !0;
        },
        gn
      )
    );
  }, [a, d]);
  const z = () => {
    a.dispatchCommand(tf, void 0);
  };
  return /* @__PURE__ */ Te(hn, { children: [
    g && pn(
      /* @__PURE__ */ C(
        XA,
        {
          editor: a,
          cancelAddComment: A,
          submitAddComment: T
        }
      ),
      document.body
    ),
    u != null && !g && pn(
      /* @__PURE__ */ C(
        JA,
        {
          anchorKey: u,
          editor: a,
          showComments: x,
          onAddComment: z
        }
      ),
      document.body
    ),
    n !== null && pn(
      /* @__PURE__ */ C(
        Jr,
        {
          className: `CommentPlugin_ShowCommentsButton ${x ? "active" : ""}`,
          onClick: () => v(!x),
          title: x ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ C("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    x && pn(
      /* @__PURE__ */ C(
        e1,
        {
          comments: l,
          submitAddComment: T,
          deleteCommentOrThread: M,
          activeIDs: p,
          markNodeMap: d
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function r1() {
  const e = Y(void 0), t = ge((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function n1(e, t) {
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
function i1(e, t) {
  K(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      n1(r, t);
    };
  }, [t, e]);
}
const G1 = Yr(function(t, r) {
  const n = Y(null), i = Y(!0), s = Y(null), [o, a] = fe(null), { children: c, onCommentChange: l, onUsjChange: d, showCommentsContainerRef: u, ...f } = t, { logger: p, options: { isReadonly: m, view: g } = {} } = t, y = (m ?? !1) || ns(g), [x, v] = r1();
  i1(f, x), K(() => {
    if (process.env.NODE_ENV !== "production") {
      const M = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(M), p || console.warn(M);
    }
  }, [p]), uo(r, () => ({
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
    applyUpdate(M, T) {
      n.current?.applyUpdate(M, T);
    },
    replaceEmbedUpdate(M, T) {
      return n.current?.replaceEmbedUpdate(M, T);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(M) {
      n.current?.setSelection(M);
    },
    setAnnotation(M, T, z, D, H) {
      typeof D == "function" || D === void 0 ? n.current?.setAnnotation(M, T, z, D, H) : n.current?.setAnnotation(M, T, z, D);
    },
    removeAnnotation(M, T) {
      n.current?.removeAnnotation(M, T);
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
    replaceCharacterMarker(M, T) {
      return n.current?.replaceCharacterMarker(M, T) ?? !1;
    },
    extendCharacterMarker(M, T) {
      return n.current?.extendCharacterMarker(M, T) ?? !1;
    },
    insertMarker(M) {
      return n.current?.insertMarker(M);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(M, T) {
      return n.current?.applyMarkerMenuSelection(M, T);
    },
    splitParagraphWithMarker(M) {
      n.current?.splitParagraphWithMarker(M);
    },
    commitTypedMarker(M, T) {
      return n.current?.commitTypedMarker(M, T) ?? !1;
    },
    commitTypedCloser(M) {
      return n.current?.commitTypedCloser(M) ?? !1;
    },
    insertNote(M, T, z) {
      n.current?.insertNote(M, T, z);
    },
    selectNote(M) {
      n.current?.selectNote(M);
    },
    selectAfterNote(M) {
      n.current?.selectAfterNote(M);
    },
    selectNoteTextOffset(M, T) {
      n.current?.selectNoteTextOffset(M, T);
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
      x.current?.setComments(M), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const S = ge(
    (M, T, z, D) => {
      if (!d) return;
      const H = x.current?.getComments();
      d(M, H, T, z, D);
    },
    [x, d]
  ), A = ge(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const M = x.current?.getComments();
    l(M);
  }, [x, i, l]);
  return K(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ C(wy, { children: /* @__PURE__ */ Te(pm, { ref: n, onUsjChange: S, ...f, children: [
    /* @__PURE__ */ C(
      t1,
      {
        setCommentStore: v,
        onChange: A,
        showCommentsContainerRef: y ? null : u ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ C("div", { ref: s, className: "comment-container" })
  ] }) });
});
function fn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function s1(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function o1(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const a1 = /^[#\w().,%/\s-]+$/;
function mr(e) {
  return e != null;
}
const c1 = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, l1 = {
  left: "right",
  right: "left"
}, u1 = "var(--usj-font-fallback, serif)";
function xm(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${s1(i)}"`).join(", ")}, ${u1}`;
}
const Sc = ".editor-input.usfm", d1 = /^[\w.#[\]="':()>+~*,\s-]+$/;
function f1(e) {
  return d1.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Sc}".`
  ), Sc);
}
function p1(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(xm(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (a1.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), mr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), mr(t.firstLineIndent) && s.push(`text-indent: ${fn(t.firstLineIndent * 20 * r)}vw`), mr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${fn(t.leftMargin * 20 * r)}vw`), mr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${fn(t.rightMargin * 20 * r)}vw`
  ), mr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${fn(t.spaceBefore * r)}pt`), mr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${fn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = c1[n ? l1[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const nf = { c: 150, ca: 133, cp: 150 };
function sf(e, t) {
  return e && mr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function h1(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && mr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = sf(e.markers.c, nf.c);
  return ["ca", "cp"].map((i) => {
    const s = sf(
      e.markers[i],
      nf[i]
    ), o = fn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function J1(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Sc } = t, s = f1(i), o = [], a = [];
  e.defaultFont && a.push(xm(e.defaultFont)), mr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${fn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const d = p1(c, l, r, n, e.defaultFont);
    d.length > 0 && o.push(`${s} .usfm_${o1(c)} { ${d.join("; ")}; }`);
  }
  return o.push(...h1(e, s)), o.join(`
`);
}
export {
  _h as BLOCK_VERSE_VIEW_MODE,
  k as CategoryType,
  H1 as Editorial,
  Us as GENERATOR_NOTE_CALLER,
  Nf as HIDDEN_NOTE_CALLER,
  G1 as Marginal,
  b as MarkerType,
  Th as PARAGRAPH_STRUCTURE_VIEW_MODE,
  xh as STANDARD_VIEW_MODE,
  Gs as defaultStyleInfo,
  W1 as directionToNames,
  s_ as filterAndRankItems,
  J1 as generateUsjCss,
  B1 as getDefaultViewMode,
  Ro as getDefaultViewOptions,
  NM as getEnterMenuItems,
  PM as getMarkerMenuItems,
  V1 as getViewMode,
  Ch as getViewOptions,
  ns as isBlockVerseLayout,
  Ur as isInsertEmbedOpOfType,
  b_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
