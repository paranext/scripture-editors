import { jsx as C, jsxs as Te, Fragment as gn } from "react/jsx-runtime";
import { forwardRef as En, useState as de, useRef as Z, useCallback as he, useEffect as z, useMemo as ze, memo as ey, createContext as gf, useContext as mf, Children as ty, isValidElement as ry, cloneElement as ny, useImperativeHandle as gc, useLayoutEffect as cs } from "react";
import { assertSafeKey as He, isValidBookCode as iy, MARKER_OBJECT_PROPS as sy, USJ_VERSION as br, USJ_TYPE as kr, isUsjTextContentLocation as oy, indexesFromUsjJsonPath as yf, isUsjAttributeKeyLocation as ay, isUsjAttributeMarkerLocation as cy, isUsjClosingAttributeMarkerLocation as ly, isUsjMarkerLocation as uy, isUsjClosingMarkerLocation as dy, isUsjPropertyValueLocation as fy, getUsjDocumentLocationTypeName as py, usjJsonPathFromIndexes as on, EMPTY_USJ as bf } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as je, $parseSerializedNode as ao, DecoratorNode as ls, ElementNode as Zt, isHTMLElement as An, createState as co, $getState as ne, $setState as bt, $isRangeSelection as N, $isElementNode as F, $isTextNode as v, $getSelection as w, $isNodeSelection as mc, ParagraphNode as yc, TextNode as Ke, $createTextNode as pe, $getCommonAncestor as hy, $isLineBreakNode as us, NODE_STATE_KEY as ds, $getEditor as Zn, $hasUpdateTag as gy, $getNodeByKey as se, $getRoot as Fe, $createRangeSelection as bc, $createPoint as su, $getCharacterOffsets as kc, KEY_DOWN_COMMAND as vr, COMMAND_PRIORITY_HIGH as Ne, HISTORY_MERGE_TAG as kf, CLICK_COMMAND as lo, COMMAND_PRIORITY_EDITOR as mn, isDOMNode as Tf, $getNearestNodeFromDOMNode as li, CONTROLLED_TEXT_INSERTION_COMMAND as Tc, PASTE_COMMAND as yr, COMMAND_PRIORITY_CRITICAL as Wt, CUT_COMMAND as yn, DROP_COMMAND as xc, DELETE_CHARACTER_COMMAND as my, DELETE_WORD_COMMAND as yy, DELETE_LINE_COMMAND as by, $isDecoratorNode as uo, COPY_COMMAND as fo, COMMAND_PRIORITY_LOW as Tt, COMMAND_PRIORITY_NORMAL as Jn, SELECTION_CHANGE_COMMAND as ur, getDOMSelection as ky, isSelectionWithinEditor as Ty, $createRangeSelectionFromDom as xy, $setSelection as ei, isDOMTextNode as _y, BLUR_COMMAND as _c, $addUpdateTag as jr, SKIP_DOM_SELECTION_TAG as Cy, CLEAR_HISTORY_COMMAND as Sy, $getPreviousSelection as vy, $isRootOrShadowRoot as My, CAN_UNDO_COMMAND as Ey, CAN_REDO_COMMAND as Ay, DRAGSTART_COMMAND as Py, $createNodeSelection as xf, getDOMSelectionFromTarget as Ny, $onUpdate as Oy, KEY_ENTER_COMMAND as _f, LineBreakNode as Cf, $copyNode as wy, FOCUS_COMMAND as qy, $isRootNode as Ry, KEY_ESCAPE_COMMAND as Sf, INSERT_PARAGRAPH_COMMAND as Rs, createCommand as vf, HISTORIC_TAG as Cc, createEditor as $y, UNDO_COMMAND as Mf, REDO_COMMAND as Ef, CLEAR_EDITOR_COMMAND as Iy } from "lexical";
import { addClassNamesToElement as Un, removeClassNamesFromElement as Ho, $findMatchingParent as nt, $dfsIterator as Af, $dfs as ui, mergeRegister as Ve, registerNestedElementResolver as Pf, $unwrapNode as _a, IS_APPLE as $s } from "@lexical/utils";
import { useLexicalNodeSelection as Ly } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as wt } from "fast-equals";
import qi from "quill-delta";
import { useLexicalComposerContext as ce } from "@lexical/react/LexicalComposerContext";
import { $getLexicalContent as Dy, copyToClipboard as Uy } from "@lexical/clipboard";
import { TreeView as Fy } from "@lexical/react/LexicalTreeView";
import * as zy from "react-dom";
import { createPortal as hn } from "react-dom";
import { LexicalComposer as Nf } from "@lexical/react/LexicalComposer";
import { ContentEditable as Of } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as wf } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as qf } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Rf } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Ky } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as jy, createDOMRange as By, createRectsFromDOMRange as Vy } from "@lexical/selection";
import { autoUpdate as Wy, computePosition as Hy, shift as Gy, flip as Jy } from "@floating-ui/dom";
import { $generateNodesFromDOM as Yy } from "@lexical/html";
import { AutoFocusPlugin as Xy } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Qy } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as $f, LexicalCollaboration as Zy } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as eb } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as tb } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as rb, $isRootTextContentEmpty as nb } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as ib } from "@lexical/yjs";
import { Array as ou, Map as au, YArrayEvent as sb } from "yjs";
const Go = (e) => je(ao(e)), ob = {
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
function If(e) {
  return ob[e];
}
const I = " ", Is = "​", Dt = I, Sc = `${I}|`, cr = "p", Bi = "+", Lf = "-", Ls = "chapter", Ca = "verse", cu = "invalid", ab = "text-spacing", cb = "formatted-font", lb = "marker-", Df = "external-usj-mutation", Uf = "selection-change", Br = "cursor-change", Sa = "annotation-change", Vi = "delta-change", Ff = "marker-settle", ub = [
  Df,
  Uf,
  Br,
  Sa,
  Vi
], bn = "zmsc-s", Yn = "zmsc-e", db = [bn, Yn], fb = [
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
  Yn
], zf = 1, vc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], pb = vc.filter((e) => e !== "sid" && e !== "eid");
class Jt extends ls {
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
    return new Jt(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return jf().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (fb.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: zf
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Kf(e) {
  return db.includes(e);
}
function jf(e, t, r, n, i) {
  return je(new Jt(e, t, r, n, void 0, i));
}
function Be(e) {
  return e instanceof Jt;
}
const Mc = "f", hb = [
  // Footnote
  Mc,
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
const gb = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Bf = 1;
class Ee extends Zt {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Mc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (Ri(t) === "crossref" ? Lf : Bi), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => yb(t) ? {
        conversion: mb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ec().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (hb.includes(t) || (r?.includes(t) ?? !1));
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
    return r && An(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", Ri(this.getMarker()))), { element: r };
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
      version: Bf
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
function mb(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Ec(t, r, n) };
}
function Ec(e, t, r, n, i) {
  return je(new Ee(e, t, r, n, i));
}
function yb(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Ee.isValidMarker(t) && e.classList.contains(Ee.getType());
}
function j(e) {
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
const va = {
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
}, lu = {
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
function lr(e) {
  const t = Object.hasOwn(va, e) ? va[e] : void 0, r = Object.hasOwn(lu, e) ? lu[e] : void 0;
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
const Vf = "v", Wf = "c", cn = "fig", uu = "tr", Ma = "esb", Hf = "esbe", du = "periph", fu = "alt", pu = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, bb = {
  "": "start",
  c: "center",
  r: "end"
};
function hu(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function gu(e) {
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
const kb = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Tb(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Is && s + 1 < e.length && gu(e[s + 1]) || (gu(o) ? (r || (i = t.length, t += o), r = !0) : kb.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function xb(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function _b(e, t) {
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
const Cb = /^(?:qt[1-5]?|ts)-[se]$/;
function Ac(e) {
  return Cb.test(e) || Kf(e);
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
function Sb(e, t, r) {
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
      a(Tb(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: u } = _b(e, i + 1);
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
    if (l === Vf) {
      const { word: g, next: y } = Jo(e, i);
      i = y, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === Wf) {
      const { word: g, next: y } = Jo(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, m = t(p)?.type;
    if (m === b.Note || m === void 0 && Ee.isValidMarker(l)) {
      const { word: g, next: y } = Jo(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (m === b.Milestone || m === void 0 && Ac(l)) {
      const g = wb(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const y = e.indexOf("\\", i), k = y === -1 ? e.length : y;
        o(e.slice(c, k)), i = k;
      }
      continue;
    }
    m === b.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : m === b.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Ds(p) ? (d(), Ds(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Ma || l === Hf ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const mu = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Ds(e) {
  return Object.hasOwn(mu, e) ? mu[e] : void 0;
}
function vb(e) {
  return Ds(e) !== void 0;
}
const Mb = /([-\w]+)\s*=\s*"(.*?)"/g, Eb = /[\s\u200B]*[\n\r][\s\u200B]*/g, Gf = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function po(e) {
  return Gf[e];
}
const Ab = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Pb(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function Wi(e, t, r = Gf[t]) {
  const n = e.replace(Eb, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Mb)];
  if (s.length > 0) {
    if (!Pb(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      Ab.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function ho(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Nb(e) {
  const t = Mr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function Ob(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = Wi(e.slice(n + 1, i), r, ho(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function wb(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Wi(s.slice(o + 1), r, ho(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = Ob(e, i + 2, r);
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
`, " ").replaceAll("~", I);
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
      i = { type: "para", marker: cr, content: [] }, f().push(i);
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
  }, P = (te, E, Y) => {
    k();
    const [, le, W, xe] = Y, ht = {
      type: "table:cell",
      marker: xe ? E.slice(0, E.indexOf("-")) : E,
      align: bb[le],
      content: []
    };
    xe && (ht.colspan = String(Number(xe) + 1 - Number(W))), Ir(te).push(ht), i = ht;
  }, A = (te) => {
    u && (te || (u.closed = "false"), u = void 0);
  }, B = () => {
    d = void 0;
  };
  let M, q = "", $;
  const J = () => {
    q && g(or(q)), q = "";
  }, Q = (te = !1) => {
    M?.type === "sidebar" ? q = "" : te && q.endsWith(`
`) && (q = q.slice(0, -1)), M = void 0, J();
  }, Me = () => {
    if (!$)
      return;
    const te = { type: "char", marker: $.marker, content: [] };
    $.value && (te.content = [or($.value)]), m().push(te), o.push({ object: te }), $ = void 0;
  }, re = (te, E) => {
    p = !1, S(), k(), _(!1), i = { type: "para", marker: te, content: [] }, E && (i.content = [or(E)]), f().push(i);
  }, qe = () => {
    $ && (re($.marker, $.value), $ = void 0);
  };
  let be;
  const tr = (te) => {
    if (!be)
      return;
    let { value: E } = be;
    be = void 0, te && E.endsWith(`
`) && (E = E.slice(0, -1));
    const Y = E.indexOf("|"), le = Y >= 0 ? Wi(E.slice(Y + 1), du) : void 0, W = Y >= 0 ? E.slice(0, Y) : E, xe = Y >= 0 && (!le || !!W && !!le[fu]), ht = xe ? void 0 : le, zt = xe ? E : W, gt = {
      type: "periph",
      ...zt ? { [fu]: or(zt) } : {},
      ...ht
    };
    gt.content = [], f().push(gt), d = gt, i = void 0;
  };
  let Re;
  const en = () => {
    if (Re) {
      if (Re.shape === "para")
        re(cn, Re.value);
      else {
        const te = { type: "char", marker: cn, content: [] };
        Re.value && (te.content = [or(Re.value)]), m().push(te), o.push({ object: te });
      }
      Re = void 0;
    }
  }, gr = Sb(e, t?.getMarker ?? lr, n);
  for (let te = 0; te < gr.length; te++) {
    const E = gr[te];
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
          [$.attrName]: or($.value.trim())
        });
        const Y = $.marker;
        if ($ = void 0, Y === "ca") {
          const le = gr[te + 1];
          le?.kind === "text" && /^[\s\u200B]*$/.test(le.text) && te++;
        }
        continue;
      }
      if ($.shape === "para" && (E.kind === "para" || E.kind === "chapter")) {
        const Y = $.value.replace(/[\s\u200B]+$/, "");
        Y === "" ? (re($.marker), $ = void 0) : (Object.assign($.target, { [$.attrName]: or(Y) }), $ = void 0);
      } else {
        M = void 0, (E.kind === "para" || E.kind === "chapter") && $.value.endsWith(`
`) && ($.value = $.value.slice(0, -1)), $.shape === "para" ? qe() : Me(), te--;
        continue;
      }
    }
    if (be) {
      if (E.kind === "text" || E.kind === "optbreak") {
        be.value += E.kind === "text" ? E.text : "//";
        continue;
      }
      tr(E.kind === "para" || E.kind === "chapter"), te--;
      continue;
    }
    if (Re) {
      if (E.kind === "text" || E.kind === "optbreak") {
        Re.value += E.kind === "text" ? E.text : "//";
        continue;
      }
      if (E.kind === "end" && E.marker.replace(/^\+/, "") === cn) {
        const Y = Re.value.indexOf("|"), le = Y >= 0 ? Wi(Re.value.slice(Y + 1), cn) : void 0;
        if (le) {
          const W = {};
          for (const [zt, gt] of Object.entries(le))
            W[zt === "src" ? "file" : zt] = gt;
          const xe = {
            type: "figure",
            marker: cn,
            ...W
          }, ht = Re.value.slice(0, Y);
          ht && (xe.content = [or(ht)]), g(xe), Re = void 0;
          continue;
        }
      }
      en(), te--;
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
        const Y = E.kind === "para" || !E.isNested ? Ds(E.marker) : void 0;
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
          const le = gr[te + 1];
          (le === void 0 || le.kind === "para" || le.kind === "chapter") && (Y = Y.slice(0, -1));
        }
        Y && g(or(Y));
        break;
      }
      case "para": {
        const Y = !s && !n;
        if (Y && E.marker === uu) {
          k(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: uu, content: [] }, Ir(c).push(l), i = l, p = !1;
          break;
        }
        if (Y && l) {
          const le = pu.exec(E.marker);
          if (le && hu(le)) {
            P(l, E.marker, le);
            break;
          }
        }
        if (S(), !n && E.marker === Ma) {
          k(), _(!1), A(!1);
          const le = {
            type: "sidebar",
            marker: Ma,
            content: []
          };
          f().push(le), u = le, i = void 0, M = u, p = !1;
          break;
        }
        if (E.marker === Hf && u) {
          k(), _(!1), A(!0), i = void 0;
          break;
        }
        if (!n && E.marker === du) {
          k(), _(!1), A(!1), B(), be = { value: "" }, i = void 0, p = !1;
          break;
        }
        re(E.marker);
        break;
      }
      case "verse": {
        _(!1);
        const Y = { type: "verse", marker: Vf, number: E.number };
        g(Y), M = Y;
        break;
      }
      case "chapter": {
        k(), _(!1), S(), A(!1), B(), i = void 0;
        const Y = {
          type: "chapter",
          marker: Wf,
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
          const W = pu.exec(E.marker);
          if (W && hu(W)) {
            P(l, E.marker, W);
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
        const Y = E.marker.replace(/^\+/, ""), le = s ? a : 0, W = o.findLastIndex((xe, ht) => ht >= le && xe.object.marker === Y);
        W >= 0 ? (qb(o[W].object), y(W + 1), o.length = W) : s && s.marker === Y ? _(!0) : (y(le), o.length = le, g({ type: "unmatched", marker: `${E.marker}*` }));
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
  if (be && tr(!0), Re && en(), $)
    if ($.shape === "para") {
      const te = $.value.replace(/[\s\u200B]+$/, "");
      te === "" ? re($.marker) : Object.assign($.target, { [$.attrName]: or(te) }), $ = void 0;
    } else
      $.value.endsWith(`
`) && ($.value = $.value.slice(0, -1)), Me();
  k(), _(!1), A(!1);
  const vt = (te) => {
    for (const E of te)
      typeof E != "string" && E.content && (vt(E.content), E.content.length === 0 && delete E.content);
  };
  return vt(r), r;
}
function qb(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = Wi(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const kn = co("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Vr = co("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), oe = co("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), fr = "marker-trailing-space", Jf = 1, Rb = "marker", Pc = co("isGutterMarker", {
  parse: (e) => e === !0
});
class Er extends ls {
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
      span: (t) => Db(t) ? {
        conversion: $b,
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
      version: Jf
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function $b(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Tr(t, r) };
}
function Tr(e, t) {
  return je(new Er(e, t));
}
function Ib(e) {
  return bt(Tr(Rb, e), Pc, !0);
}
function Lb(e) {
  return Yt(e) && ne(e, Pc);
}
function Db(e) {
  return e?.tagName === "span";
}
function Yt(e) {
  return e instanceof Er;
}
function Yf(e) {
  return e?.type === Er.getType();
}
const Kr = "internal-comment", Ub = [Kr], Xf = Object.freeze({}), Ea = Object.freeze({}), Aa = Object.freeze({}), Pa = Object.freeze({}), Na = Object.freeze({}), Fb = 1, Fn = /* @__PURE__ */ new Map(), vi = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Map(), Kn = /* @__PURE__ */ new Map();
class Qe extends Zt {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Xf, r, n, i, s, o) {
    super(o), this.__typedIDs = Ss(t), this.__typedOnClicks = Yo(r), this.__typedOnRemoves = Xo(n), this.__typedOnMouseEnters = Qo(i), this.__typedOnMouseLeaves = Zo(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Ss(t.__typedIDs), n = Yo(t.__typedOnClicks), i = Xo(t.__typedOnRemoves), s = Qo(t.__typedOnMouseEnters), o = Zo(t.__typedOnMouseLeaves);
    return new Qe(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Ub.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Hi().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: Fb
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      Un(n, ln(t.theme.typedMark, a)), c.length > 1 && Un(n, ln(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Un(n, ln("annotationId", l));
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
      c !== l && (c === 0 ? l === 1 && Un(r, u) : l === 0 && Ho(r, u), c === 1 ? l === 2 && Un(r, d) : l === 1 && Ho(r, d));
      const f = new Set(o), p = new Set(a);
      for (const m of o)
        p.has(m) || Ho(r, ln("annotationId", m));
      for (const m of a)
        f.has(m) || Un(r, ln("annotationId", m));
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
    const r = this.getWritable(), n = Ss(r.__typedIDs);
    r.__typedIDs = Ss(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Us(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Yo(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return Ce(t) ? Fn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Xo(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Ce(t) ? vi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Qo(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Ce(t) ? zn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = Zo(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Ce(t) ? Kn.get(t.getKey()) ?? {} : {};
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Us(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Hi(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Fn.delete(r.getKey()), vi.delete(r.getKey()), zn.delete(r.getKey()), Kn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Ea) {
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
    const i = Lr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = Lr(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Ea) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Aa) {
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
    const i = Lr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = Lr(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Aa) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Pa) {
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
    const i = Lr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = Lr(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Pa) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Na) {
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
    const i = Lr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = Lr(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Na) {
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
    const i = zb(t, r);
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
    for (; Ce(t) && bu(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; Ce(r) && bu(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = Kb(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = jb(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Bb(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Vb(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Ss(e = Xf) {
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
function Yo(e) {
  if (!e || e === Ea)
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
function Xo(e) {
  if (!e || e === Aa)
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
function Qo(e) {
  if (!e || e === Pa)
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
function Zo(e) {
  if (!e || e === Na)
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
function Lr(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function yu(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function zb(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function bu(e, t) {
  const r = yu(e), n = yu(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function Kb(e, t) {
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
function jb(e, t) {
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
function Bb(e, t) {
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
function Vb(e, t) {
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
function ku(e) {
  return `external-${e}`;
}
function Hi(e, t, r, n, i) {
  return je(new Qe(e, t, r, n, i));
}
function Ce(e) {
  return e instanceof Qe;
}
function Qf(e) {
  return e?.type === Qe.getType();
}
function Us(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Zf(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let m, g;
  for (let y = 0; y < u; y++) {
    const k = a[y];
    if (F(g) && g.isParentOf(k))
      continue;
    const _ = y === 0, S = y === u - 1;
    let P = null;
    if (v(k)) {
      const A = k.getTextContentSize(), B = _ ? f : 0, M = S ? p : A;
      if (B === 0 && M === 0)
        continue;
      const q = k.splitText(B, M);
      P = q.length > 1 && (q.length === 3 || _ && !S || M === A) ? q[1] : q[0];
    } else {
      if (Ce(k))
        continue;
      F(k) && k.isInline() && (P = k);
    }
    if (P !== null) {
      if (P && P.is(m))
        continue;
      const A = P.getParent();
      (A == null || !A.is(m)) && (g = void 0), m = A, g === void 0 && (g = Hi(), g.addID(t, r, n, i, s, o), P.insertBefore(g)), g.append(P);
    } else
      m = void 0, g = void 0;
  }
  t === Kr && F(g) && (d ? g.selectStart() : g.selectEnd());
}
function Wb(e, t, r) {
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
const Hb = ["type", "marker", "content"], Oa = "unknown", ep = 1, Gb = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class Pn extends Zt {
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
      [Oa]: (t) => Yb(t) ? {
        conversion: Jb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Nc().updateFromJSON(t);
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
    return Gb.has(this.getTag());
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
    const t = document.createElement(Oa);
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
      version: ep
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
    if (mc(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function Jb(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Nc(t, r) };
}
function Nc(e, t, r) {
  return je(new Pn(e, t, r));
}
function Yb(e) {
  return e?.tagName.toLowerCase() === Oa;
}
function De(e) {
  return e instanceof Pn;
}
const tp = 1, Xb = "attribute-run";
function ea(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Ar extends Zt {
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
    return rp(t.runKind).updateFromJSON(t);
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
    t.classList.add(Xb);
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
      version: tp
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
function rp(e) {
  return je(new Ar(e));
}
function Le(e) {
  return e instanceof Ar;
}
const Gi = "id", np = 1, Qb = [
  "type",
  "marker",
  "code",
  "content"
];
class Ut extends Zt {
  __marker = Gi;
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
    return ip(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return iy(t);
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
      version: np
    };
  }
}
function ip(e, t) {
  return je(new Ut(e, t));
}
function pt(e) {
  return e instanceof Ut;
}
function sp(e) {
  return e?.type === Ut.getType();
}
const Fs = "c", op = 1, Zb = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Nt extends Zt {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = Fs, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Nt(r, n, i, s, o, a);
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
  createDOM() {
    const t = document.createElement("p");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ls, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: op
    };
  }
}
function ap(e, t, r, n, i) {
  return je(new Nt(e, t, r, n, i));
}
function Pe(e) {
  return e instanceof Nt;
}
function ek(e) {
  return e?.type === Nt.getType();
}
const cp = [
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
], lp = [
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
], tk = [
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
  ...cp,
  ...lp
], up = 1, rk = ["type", "marker", "content"];
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
    return t !== void 0 && (tk.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && cp.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && lp.includes(t);
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
      span: (t) => ik(t) ? {
        conversion: nk,
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
    return Tu(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Tu(r, this.__marker, n)), !1;
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
      version: up
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
function Tu(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function nk(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: xr(t) };
}
function xr(e, t) {
  return je(new me(e, t));
}
function ik(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return me.isValidMarker(t) && e.classList.contains(me.getType());
}
function D(e) {
  return e instanceof me;
}
function sk(e) {
  return e?.type === me.getType();
}
const dp = 1, ok = "c", fp = "span";
class pr extends ls {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = ok, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new pr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => pp(t) ? {
        conversion: ak,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Oc().updateFromJSON(t);
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
    const t = document.createElement(fp);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ls, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && An(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Ls, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
      version: dp
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
function ak(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Oc(t) };
}
function Oc(e, t, r, n, i, s) {
  return je(new pr(e, t, r, n, i, s));
}
function pp(e) {
  return e ? e.classList.contains(Ls) && e.tagName.toLowerCase() === fp : !1;
}
function fs(e) {
  return e instanceof pr;
}
function ck(e) {
  return e?.type === pr.getType();
}
const hp = 1;
class Wr extends yc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Wr(t.__key);
  }
  static importJSON(t) {
    return Ht().updateFromJSON(t);
  }
  getMarker() {
    return cr;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: hp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Ht();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Ht() {
  return je(new Wr());
}
function dr(e) {
  return e instanceof Wr;
}
function go(e) {
  return e?.type === Wr.getType();
}
const lk = [
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
  cr,
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
], gp = 1, uk = ["type", "marker", "content"];
class Ze extends yc {
  __marker;
  __unknownAttributes;
  constructor(t = cr, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new Ze(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (lk.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: dk,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return Ji().updateFromJSON(t);
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
      version: gp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Ji(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function dk(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = Ji(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function Ji(e, t) {
  return je(new Ze(e, t));
}
function ae(e) {
  return e instanceof Ze;
}
function wc(e) {
  return e?.type === Ze.getType();
}
const zs = "v", mp = 1, fk = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class dt extends Ke {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = zs, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new dt(r, n, i, s, o, a, c);
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
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Ca, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: mp
    };
  }
}
function yp(e, t, r, n, i, s) {
  return je(new dt(e, t, r, n, i, s));
}
function Oe(e) {
  return e instanceof dt;
}
function bp(e) {
  return e?.type === dt.getType();
}
const pk = "​", ti = pk;
var xu;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(xu || (xu = {}));
var _u;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(_u || (_u = {}));
function hk() {
  return pe(ti);
}
function gk(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(ti, ""));
}
function ps(e) {
  return e.length > 0 && e.includes(ti) && e.replaceAll(ti, "") === "";
}
function qc(e) {
  return v(e) && ps(e.getTextContent());
}
function kp(e) {
  return ek(e) || ck(e);
}
function Ge(e) {
  return Pe(e) || fs(e);
}
function Tp(e, t) {
  return e.find((r) => Ge(r) && r.getNumber() === t.toString());
}
function mk(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Ge(r));
}
function Cu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function xp(e) {
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
function Xt(e) {
  return nt(e, j) ?? void 0;
}
function yk(e) {
  return pt(e) || Pe(e) || D(e) || fs(e) || dr(e) || Be(e) || ae(e) || j(e) || Oe(e) || De(e);
}
function _p(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function bk(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Et(e) {
  return Se(e) || pt(e);
}
function Se(e) {
  return ae(e) || dr(e);
}
function kk(e) {
  return wc(e) || go(e);
}
function Ks(e, t) {
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
function Tk(e, t) {
  const r = F(e) ? e : e.getParent(), n = F(t) ? t : t.getParent(), i = r && n ? hy(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function xk(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function ri(e) {
  return e?.type === Ke.getType();
}
function _k(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function Ck(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function we(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function rt(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Cp(e, t, r) {
  const n = we(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Lt(e, t) {
  let r = we(e);
  return t && (r += `${I}${t}`), r += " ", r;
}
function Sk(e) {
  const t = e[ds];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Sp(e) {
  return Dc(e) || Yf(e) && e.textType === "marker" || ri(e) && Sk(e) === "attribute" ? "" : ri(e) && e.text !== I ? e.text : sk(e) ? e.children.map((t) => Sp(t)).join("") : "";
}
function vk(e) {
  return e.map((r) => Sp(r)).filter((r) => r.length > 0).join(" ").trim();
}
function At(e) {
  return " " + e + I;
}
function Rc(e) {
  const t = [];
  for (const r of e) {
    if (!D(r))
      continue;
    const n = vp(r);
    n !== Dt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function vp(e) {
  return O(e) || Pr(e) || v(e) && ne(e, oe) === "attribute" ? "" : v(e) ? e.getTextContent() : F(e) ? e.getChildren().map((t) => vp(t)).join("") : "";
}
function Pr(e) {
  return Yt(e) && e.getTextType() === "marker";
}
function Ft(e) {
  return O(e) || Pr(e);
}
function Su(e, t) {
  Mk(e, t), e.setMarker(t);
}
function Mk(e, t) {
  const r = e.getMarker(), n = we(r), i = we(r, !0), s = rt(r), o = rt(r, !0), a = me.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Ft(c))
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
        c.setTextContent(u ? we(t, f) : rt(t, f));
      }
    }
  });
}
function Ue(e, t = sy) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Ae(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Mp(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function $c(e) {
  if (!N(e))
    return vu(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !F(t) || e.anchor.type === "text" && !v(t)))
    return t ?? void 0;
  try {
    return vu(e) ?? t ?? void 0;
  } catch (n) {
    if (Mp(n))
      return t ?? void 0;
    throw n;
  }
}
function Ek(e, t) {
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
function Ic(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Ep(e) {
  return !!e && e.includes("-");
}
function Ap(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function vu(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Lc(e) {
  if (!e)
    return !1;
  if (us(e) || O(e) || Pr(e) || Le(e) || Yt(e) && e.getTextType() === "attribute")
    return !0;
  if (v(e)) {
    const t = ne(e, oe);
    if (t === fr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === I || ps(r))
      return !0;
  }
  return !1;
}
function mo() {
  const e = pe(I);
  return bt(e, oe, fr), e.setMode("token"), e;
}
function Ak(e) {
  const t = e.getTextContent();
  t.startsWith(I) || e.setTextContent(I + t);
}
function Nn(e) {
  return v(e) && ne(e, oe) === fr;
}
function Pp(e) {
  const t = e.getFirstChild();
  if (!Ft(t) || t === null || Nn(t.getNextSibling()))
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
function di(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!Lc(s)) {
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
function yo(e) {
  let t = e.getParent();
  for (; t && Ce(t); )
    t = t.getParent();
  return t;
}
function Pk(e, t) {
  return di(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function Nk(e, t) {
  const r = yo(e);
  if (!r)
    return;
  const n = di(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function Ok(e, t) {
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
function Np(e, t) {
  const r = di(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Lc(n))
    return Np(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || Ks(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || Ks(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function wk(e, t) {
  if (t <= 0)
    return 0;
  const r = di(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? qk(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function qk(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const Rk = 1;
class hr extends Ke {
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
    return new hr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      version: Rk
    };
  }
}
function ot(e, t, r) {
  return je(new hr(e, t, void 0, r));
}
function O(e) {
  return e instanceof hr;
}
function Dc(e) {
  return e?.type === hr.getType();
}
function Xr(e) {
  return e.getTextContent() === fn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function $k(e) {
  e.setTextContent(fn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function fn(e, t, r = !1) {
  return t === "closing" ? rt(e, r) : t === "selfClosing" ? rt("") : we(e, r);
}
const Ik = /* @__PURE__ */ new Set(["closed"]);
function ar(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !Ik.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Op(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function wp(e) {
  const t = Object.keys(e).filter((n) => !pb.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function qp(e, t, r, n) {
  return Op(
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
  return e.getChildren().find((t) => O(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function Lk(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Di(e) === void 0 && Rp(e) === void 0;
}
function Rp(e) {
  return e.getChildren().find((t) => v(t) && ne(t, oe) === "attribute");
}
function Yi(e, t) {
  return hs(e.getNextSibling(), t);
}
const Dk = /^[ \u00A0]+$/;
function Uc(e) {
  if (Xr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = we(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && Dk.test(r.slice(t.length));
}
function hs(e, t) {
  let r, n, i, s;
  return Le(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), O(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Uc(e) && (r = e, e = e.getNextSibling()), v(e) && ne(e, oe) === "attribute" && (n = e, e = e.getNextSibling()), O(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && Xr(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Xi(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!O(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (v(n) && n.getTextContent() === At(e.getCaller()))
    return n;
}
function $p(e) {
  const t = Xi(e);
  return t ? hs(t.getNextSibling(), "cat") : {};
}
function bo(e) {
  const t = e.getFirstChild();
  if (!(!v(t) || O(t)) && ne(t, oe) !== "attribute")
    return t;
}
function Ip(e) {
  const t = bo(e);
  return t ? hs(t.getNextSibling(), "ca") : {};
}
function Lp(e) {
  const t = bo(e);
  if (!t)
    return;
  const r = hs(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Dp(e) {
  const t = Lp(e);
  return t ? hs(t.getNextSibling(), "cp") : {};
}
function Up(e) {
  const t = e.getParent();
  if (!D(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Oe(n))
        return n;
      if (!(O(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || v(n) && ne(n, oe) === "attribute" || D(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Le(n)))
        return;
    }
}
function ko(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Le(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), O(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Uc(s) && (t = s, s = s.getNextSibling()), v(s) && ne(s, oe) === "attribute" && (r = s, s = s.getNextSibling()), O(s) && s.getMarkerSyntax() === "selfClosing" && Xr(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function Fc(e) {
  return D(yo(e));
}
function wa(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Fc(t) : t.getChildren().some((i) => D(i) && i.getMarker() === r) ? !0 : void 0;
}
function Uk(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = wa(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function To(e) {
  return v(e) && e.getType() === Ke.getType() && ne(e, oe) !== "attribute";
}
function zc(e, t) {
  if (e.getMarkerSyntax() !== "opening" || wa(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return O(r) ? wa(r, t) === !0 ? "spacer" : void 0 : To(r) ? r.getTextContent().startsWith(I) ? void 0 : "prefix" : "spacer";
}
function Fk(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (O(t) && zc(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Fp(e, t) {
  const r = w();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function zp(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = zc(t, e);
    if (r !== void 0 && !Fp(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        v(n) && n.setTextContent(I + n.getTextContent());
      } else
        t.insertAfter(pe(I));
  });
}
function Kp(e) {
  return e.isAttached() ? e.getChildren().some((t) => O(t) && zc(t, e) !== void 0 && Fp(t, e)) : !1;
}
const zk = "file", Kk = "src", jk = "colspan", Bk = "category", Vk = "alt", Wk = "closed", Hk = "false";
function Gk(e) {
  return e[Wk] !== Hk;
}
function Jk(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === zk ? Kk : t,
    r
  ]));
}
function jp(e, t) {
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
function Bp(e, t, r) {
  const n = r ?? {}, i = Gk(n);
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
        opening: `\\${jp(t, n[jk])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: ar(Jk(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [Bk]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + ar(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [Vk]: s, ...o } = n;
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
const xt = { wantsRun: !1, valueText: void 0 }, Nr = {};
function ta(e, t) {
  if (t === "va")
    return e;
  const r = Yi(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function Kc(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed())
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
function xo(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = w();
  if (!N(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function Yk(e) {
  return Le(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : O(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : v(e) && ne(e, oe) === "attribute";
}
function Xk(e) {
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
function ra(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Oe(t))
      return t;
    if (!Yk(t))
      return;
  }
}
function Mu(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Oe(t),
    ownerOf: (t) => {
      if (Le(t))
        return t.getRunKind() === e ? ra(t) : void 0;
      const r = t.getParent();
      return Le(r) ? r.getRunKind() === e ? ra(r) : void 0 : Xk(t) === e ? ra(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Oe(t))
        return xt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? xt : { wantsRun: !0, valueText: I + r };
    },
    scanPieces: (t) => Oe(t) ? Yi(ta(t, e), e) : Nr,
    graceSite: (t, r) => Oe(t) ? !r.opener && !r.closer ? Kc(ta(t, e)) : xo(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Oe(t) ? ta(t, e) : void 0
    }
  };
}
const Qk = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => xt,
  scanPieces: () => Nr,
  graceSite: (e) => D(e) && Kp(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Zk = {
  kind: "char",
  ownerPredicate: (e) => D(e),
  ownerOf: (e) => {
    if (!v(e) || ne(e, oe) !== "attribute")
      return;
    const t = e.getParent();
    return D(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!D(e) || Di(e) === void 0)
      return xt;
    const t = ar(e.getUnknownAttributes() ?? {}, po(e.getMarker()));
    return t === "" ? xt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => D(e) ? { value: Rp(e) } : Nr,
  graceSite: (e, t) => {
    if (!D(e) || t.value)
      return !1;
    const r = Di(e);
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
    insertRunBefore: (e) => D(e) ? Di(e) : void 0
  }
};
function Vp(e) {
  if (O(e))
    return e.getMarker() === "cat";
  if (!v(e) || ne(e, oe) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return O(t) && t.getMarker() === "cat";
}
function eT(e) {
  const t = e.getParent();
  if (!j(t))
    return;
  const r = Xi(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Vp(n))
        return;
    }
}
const tT = {
  kind: "cat",
  ownerPredicate: (e) => j(e),
  ownerOf: (e) => {
    if (Le(e))
      return e.getRunKind() === "cat" && j(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Le(t) ? t.getRunKind() === "cat" && j(t.getParent()) ? t.getParent() ?? void 0 : void 0 : Vp(e) ? eT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!j(e) || e.getIsCollapsed() !== !1)
      return xt;
    const t = e.getCategory();
    return t === void 0 ? xt : { wantsRun: !0, valueText: I + t };
  },
  scanPieces: (e) => j(e) ? $p(e) : Nr,
  graceSite: (e, t) => {
    if (!j(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Xi(e);
      return r !== void 0 && Kc(r);
    }
    return xo(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => j(e) ? Xi(e) : void 0
  }
};
function rT(e) {
  return Le(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : O(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : v(e) && ne(e, oe) === "attribute";
}
function nT(e) {
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
function iT(e) {
  const t = e.getParent();
  if (!Pe(t))
    return;
  const r = bo(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!rT(n))
        return;
    }
}
function Eu(e) {
  const t = (r) => Pe(r) ? e === "ca" ? bo(r) : Lp(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Pe(r),
    ownerOf: (r) => {
      if (Le(r))
        return r.getRunKind() === e && Pe(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Le(n) ? n.getRunKind() === e && Pe(n.getParent()) ? n.getParent() ?? void 0 : void 0 : nT(r) === e ? iT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Pe(r))
        return xt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? xt : { wantsRun: !0, valueText: I + n };
    },
    scanPieces: (r) => Pe(r) ? e === "ca" ? Ip(r) : Dp(r) : Nr,
    graceSite: (r, n) => {
      if (!Pe(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && Kc(i);
      }
      return xo(n);
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
function Wp(e) {
  if (O(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return v(e) && ne(e, oe) === "attribute";
}
function sT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Be(t)) {
      const r = O(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Wp(t))
      return;
  }
}
const oT = {
  kind: "milestone",
  ownerPredicate: (e) => Be(e),
  ownerOf: (e) => {
    const t = Le(e) ? e.getRunKind() === "milestone" ? e : void 0 : Le(e.getParent()) ? e.getParent() : Wp(e) ? e : void 0;
    if (!t || Le(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Le(t) ? Be(r) ? r : void 0 : sT(t);
  },
  expectedPieces: (e) => {
    if (!Be(e))
      return xt;
    const t = qp(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = ar(t, ho(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : I + r };
  },
  scanPieces: (e) => {
    if (!Be(e))
      return Nr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = ko(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Be(e))
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
    return xo(t);
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
}, aT = Bp("optbreak", void 0, void 0).opening, cT = {
  kind: "optbreak",
  ownerPredicate: (e) => De(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!De(t) || t.getTag() !== "optbreak"))
      return v(e) || Yt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: aT }),
  scanPieces: (e) => De(e) ? { value: e.getFirstChild() ?? void 0 } : Nr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, lT = {
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
  expectedPieces: () => xt,
  scanPieces: () => Nr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, uT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => xt,
  scanPieces: () => Nr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Qi = [
  Qk,
  Zk,
  Mu("va"),
  Mu("vp"),
  tT,
  Eu("ca"),
  Eu("cp"),
  oT,
  cT,
  lT,
  uT
], dT = new Map(Qi.map((e) => [e.kind, e]));
function xn(e) {
  const t = dT.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function _n(e) {
  for (const t of Qi) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function Hp(e) {
  return _n(e) !== void 0;
}
const js = "unmatched", Gp = 2;
function Ui(e) {
  return `\\${e}`;
}
class Or extends Ke {
  __marker;
  constructor(t = "", r) {
    super(Ui(t), r), this.__marker = t, this.__mode = 1;
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
      [js]: (t) => pT(t) ? {
        conversion: fT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return jc().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(cu), r.title = Au(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Au(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(js);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(cu), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: Gp
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Jp(e) {
  return e.getTextContent() === Ui(e.getMarker());
}
function Au(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function fT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: jc(t) };
}
function jc(e) {
  return je(new Or(e));
}
function pT(e) {
  return e?.tagName.toLowerCase() === js;
}
function Qr(e) {
  return e instanceof Or;
}
const Yp = "table", qa = "immutable-table", Xp = 1, hT = ["type", "marker", "content"];
class On extends Zt {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return qa;
  }
  static clone(t) {
    return new On(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return gT().updateFromJSON(t);
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
      type: qa,
      ...t !== void 0 && { unknownAttributes: t },
      version: Xp
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function gT(e) {
  return je(new On(e));
}
function Qp(e) {
  return e instanceof On;
}
function mT(e) {
  return e?.type === qa;
}
const Zp = "table:row", Pu = "immutable-table-row", eh = 1, Ra = "tr", yT = ["type", "marker", "content"];
class fi extends Zt {
  __marker;
  __unknownAttributes;
  constructor(t = Ra, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Pu;
  }
  static clone(t) {
    return new fi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return bT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Ra).setUnknownAttributes(t.unknownAttributes);
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
      type: Pu,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: eh
    };
  }
}
function bT(e, t) {
  return je(new fi(e, t));
}
const th = "table:cell", Nu = "immutable-table-cell", rh = 1, $a = "tc1", kT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function TT(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class pi extends Zt {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = $a, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Nu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new pi(r, n, i, s, o);
  }
  static importJSON(t) {
    return xT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? $a).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = TT(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: Nu,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: rh
    };
  }
}
function xT(e, t, r, n) {
  return je(new pi(e, t, r, n));
}
function _o(e, t) {
  const r = e.getChildAtIndex(t);
  return v(r) ? r : void 0;
}
function Qt(e, t) {
  const r = _o(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Zi(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function _T(e) {
  return e.getChildren().some((t) => O(t) && t.getMarkerSyntax() === "closing");
}
function CT(e) {
  return Zi(e) ? void 0 : { closed: "false" };
}
function ST(e, t, r, n) {
  const i = t.getMarker(), s = Fc(t), o = _T(t);
  if (n) {
    e.append(ot(i, "opening", s));
    const [a] = r;
    To(a) && !a.getTextContent().startsWith(I) && a.setTextContent(I + a.getTextContent());
  }
  e.append(...r), o && e.append(ot(i, "closing", s));
}
function Cn(e) {
  return nt(e, D) ?? void 0;
}
function Bc(e) {
  let t = e.getParent();
  for (; D(t); )
    t = t.getParent();
  return t;
}
function Ia(e) {
  const t = nh(e);
  return e.getChildren().every((r) => O(r) || t && ne(r, oe) === "attribute" || v(r) && r.getTextContent().replaceAll(I, "") === "");
}
function nh(e) {
  return Zi(e);
}
function vT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? ar(r, po(e.getMarker())) : "";
  n !== "" && t.insertAfter(pe(n)), e.remove();
}
function MT(e, t) {
  if (Zi(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(ot(e.getMarker(), "closing", Fc(e)));
}
function ET(e, t) {
  return D(e) && !Zi(e) && !Zi(t);
}
function AT(e, t, r) {
  Ia(e) && e.getChildren().forEach((i) => {
    O(i) || i.remove();
  });
  const [n] = t;
  r && To(n) && !n.getTextContent().startsWith(I) && n.setTextContent(I + n.getTextContent()), e.append(...t);
}
function PT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = nh(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = O(l) && l.getMarkerSyntax() === "closing", f = s && ne(l, oe) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = ET(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      AT(e, o, n);
    else {
      const l = xr(t.getMarker(), CT(t));
      ST(l, t, o, n), e.insertAfter(l), Ia(l) ? l.remove() : c = l;
    }
  i && !a && MT(t, n), Ia(t) && vT(t, c);
}
function ni(e, t) {
  let r = e.getParent();
  for (; D(r); )
    PT(e, r, t), r = e.getParent();
}
function Vc(e) {
  if (v(e) && !O(e)) {
    const t = e.getTextContent().startsWith(I) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (F(e)) {
    const t = e.getChildren().find((r) => !O(r));
    if (t) {
      Vc(t);
      return;
    }
    e.selectEnd();
  }
}
const Xn = /* @__PURE__ */ new WeakMap();
function NT(e, t) {
  return Xn.set(e, t), () => {
    Xn.get(e) === t && Xn.delete(e);
  };
}
function Ou(e) {
  return Xn.get(e);
}
function OT(e) {
  return Xn.get(Zn())?.has(e.getKey()) ?? !1;
}
function wT(e) {
  Xn.get(Zn())?.add(e.getKey());
}
function qT(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function La(e) {
  return !!(e.opener || e.value || e.closer);
}
function wu(e) {
  return /^\s/.test(e);
}
function Wc(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !wu(t) || !wu(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Co(e, t, r) {
  return r.wantsRun ? Wc(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : qT(t);
}
function RT(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return Wc(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function ih(e, t) {
  return !La(e.scanPieces(t));
}
function gs(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Co(e, n, r))
    return !1;
  const i = w();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Ks(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function $T(e, t, r, n) {
  return !r.wantsRun || La(n) || gy(Vi) ? !1 : Zn().getEditorState().read(() => {
    const i = se(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : La(e.scanPieces(i));
  });
}
function IT(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function qu(e) {
  const t = pe(e);
  return bt(t, oe, "attribute"), t;
}
function LT(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = rp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function DT(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    v(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(qu(n.valueText));
    return;
  }
  const l = LT(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = ot(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : v(d) ? Wc(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = qu(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(ot(a === "selfClosing" ? "" : o(t), a));
}
function es(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Co(e, i, n) && !OT(t)) {
    if ($T(e, t, n, i)) {
      wT(t);
      return;
    }
    if (!gs(e, t)) {
      if (!n.wantsRun) {
        IT(i);
        return;
      }
      DT(e, t, i, n);
    }
  }
}
function UT(e, t, r) {
  es(e, t), t.isAttached() && gs(e, t) && r.add(t.getKey());
}
function sh(e) {
  if (!v(e))
    return !1;
  if (O(e) || Oe(e) || Qr(e))
    return !0;
  const t = ne(e, oe);
  return t === "attribute" || t === fr;
}
function Hc(e, t) {
  return O(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && Xr(e) && D(e.getParent())) : !1;
}
function FT() {
  const e = w();
  return N(e) ? Hc(e.focus.getNode(), e.focus.offset) : !1;
}
function oh(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return v(t) && sh(t) ? t : void 0;
}
function zT(e) {
  const t = oh(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function KT(e) {
  const t = oh(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Ru(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function $u(e, t) {
  e.set(t.key, t.offset, t.type);
}
function jT(e, t) {
  let r = KT(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!v(n))
      return;
    if (!sh(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Iu(e, t) {
  const r = jT(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function ah(e) {
  if (e.isCollapsed()) {
    const a = zT(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Ru(r), Ru(n)], s = Iu(r, "next"), o = Iu(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? ($u(r, i[0]), $u(n, i[1]), !1) : !0;
}
const Bs = "verse-block", ch = 1, BT = "verse-block";
class hi extends Zt {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Bs;
  }
  static clone(t) {
    return new hi(t.__number, t.__key);
  }
  static importJSON(t) {
    return VT().updateFromJSON(t);
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
    return Ap(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(BT), Lu(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Lu(r, this.__number), !1;
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
      type: Bs,
      number: this.getNumber(),
      version: ch
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Lu(e, t) {
  const { start: r, end: n } = Ap(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Du(e, "data-verse-start", i ? r : NaN), Du(e, "data-verse-end", i ? n : NaN);
}
function Du(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function VT(e) {
  return je(new hi(e));
}
function ts(e) {
  return e instanceof hi;
}
function WT(e) {
  return e?.type === Bs;
}
const HT = [
  Ut,
  pr,
  Nt,
  dt,
  me,
  Ee,
  Jt,
  hr,
  Pn,
  Er,
  Or,
  Ze,
  Wr,
  On,
  fi,
  pi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Ar,
  {
    replace: yc,
    with: () => Ht(),
    withKlass: Wr
  }
], Vs = {
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
}, GT = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function JT(e) {
  if (!e)
    return lr;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: lr(r)?.category ?? T.Uncategorized,
      type: GT[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: lr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Uu(e, t, r) {
  const n = {
    type: kr,
    version: br,
    content: e
  }, i = t.serializeEditorState(n, r);
  return go(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const lh = "v", uh = 1, YT = "verse-selected";
class Ct extends ls {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = lh, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-verse";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Ct(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => ZT(t) ? {
        conversion: QT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Gc().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ca, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && An(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Ca, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Lt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Is + this.getNumber() + Is
    );
    return C(XT, { nodeKey: this.getKey(), text: t });
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
      version: uh
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Mp(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function XT({ nodeKey: e, text: t }) {
  const [r] = Ly(e);
  return C("span", { className: r ? YT : void 0, children: t });
}
function QT(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Gc(t) };
}
function Gc(e, t, r, n, i, s) {
  return je(new Ct(e, t, r, n, i, s));
}
function ZT(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === lh;
}
function wn(e) {
  return e instanceof Ct;
}
function ex(e) {
  return e?.type === Ct.getType();
}
function ge(e) {
  return Oe(e) || wn(e);
}
function dh(e) {
  return bp(e) || ex(e);
}
function tx(e) {
  return rx(e).find((t) => ae(t));
}
function rx(e) {
  return e.some(ts) ? e.flatMap((t) => ts(t) ? t.getChildren() : t) : e;
}
function So(e) {
  return F(e) ? ts(e) ? e.getChildren().flatMap(So) : e.getChildren() : [];
}
function nx(e, t) {
  return So(e).find((i) => ge(i) && Ic(t, i.getNumber()));
}
function ix(e, t) {
  return t === 0 ? tx(e) : e.map((r) => nx(r, t)).filter((r) => r)[0];
}
function Ws(e) {
  return So(e).find((r) => ge(r));
}
function fh(e, t) {
  if (!F(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ge(i))
      return i;
  }
}
function sx(e) {
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
    const n = Ws(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Da(e) {
  return So(e).findLast((t) => ge(t));
}
function ox(e) {
  if (!Oe(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function ax(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && F(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function cx(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return ax(t, e, r);
  if (v(e)) {
    const n = ox(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function Fu(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function lx(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!N(t))
    return Fu(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return cx(e, t) ? { verseNum: n } : Fu(e);
}
function ux(e) {
  return yk(e) || wn(e);
}
function Jc(e) {
  if (v(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(I) && e.setTextContent(`${t} `);
  }
}
function ph(e) {
  if (v(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Ua(e, t) {
  return e.getEditorState().read(() => !se(t));
}
function dx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Yc(t, e);
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
      let s = zu(i);
      for (; s && !Ge(s); ) {
        const o = Ws(s);
        if (o) {
          n = o;
          break;
        }
        s = zu(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = Ws(s);
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
function fx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Yc(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && F(i) && (n = fh(i, r.getIndexWithinParent())), !n && i) {
      let o = Ku(i);
      for (; o && !Ge(o); ) {
        const a = Da(o);
        if (a) {
          n = a;
          break;
        }
        o = Ku(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Ge(s); ) {
      const o = Da(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function zu(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function Ku(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function Yc(e, t) {
  if (F(e) && N(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && ge(n))
      return n;
    const i = fh(e, t.anchor.offset);
    if (i)
      return i;
    const s = Ws(e);
    if (s)
      return s;
  }
  return Xc(e);
}
function Xc(e) {
  if (!e || Ge(e))
    return;
  if (ge(e))
    return e;
  let t = Cu(e);
  for (; t; ) {
    if (Ge(t))
      return;
    if (ge(t))
      return t;
    const r = Da(t);
    if (r)
      return r;
    t = Cu(t);
  }
}
const px = ["style"], hx = ["style", "code"], Hs = ["style", "cid"], gx = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], mx = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], yx = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], bx = ["style", "caller", "category", "contents"], kx = ["tag", "marker", "contents"], Tx = [
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
function xx(e, t) {
  const r = se(e);
  if (!Pt(r))
    return;
  const n = hh(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function hh(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Af();
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
      if (_r(l) || Pt(l))
        return n;
      Et(l) && (a = l);
    }
    if (Et(l) && (i.includes(l) || i.push(l)), gh(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += Qc(l, t);
  }
  if (a)
    return n;
}
function ju(e, t, r = "delta-doc") {
  if (e.length < 2 || !Sx(e[0]) || !Cx(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => _x(n, r)?.getKey());
}
function _x(e, t = "delta-doc") {
  const r = Af();
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
    if (Et(a) && (i.includes(a) || i.push(a)), gh(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = Qc(a, t);
    if (_r(a) && l > 0 && e >= n && e < n + l || Pt(a) && n === e)
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
  return e ? t ? !Ks(t.node, e.getKey()) : !0 : !1;
}
function _r(e) {
  return v(e) && !Pt(e);
}
function Pt(e) {
  return Ge(e) || ge(e) || Be(e) || j(e) || De(e) || Qr(e);
}
function Fr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function Cx(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && Tx.includes(t);
}
function Sx(e) {
  return e.retain != null && typeof e.retain == "number";
}
function gh(e, t) {
  return j(e) || De(e) ? !0 : t === "apply" && F(e) && Pt(e);
}
function mh(e) {
  const t = e.getParent();
  return Ft(e) && ae(t) && t.getFirstChild() === e;
}
function Fa(e) {
  const t = e.getParent();
  return t !== null && nt(t, Le) !== null;
}
function vx(e) {
  const t = e.getParent();
  return D(t) && e.getTextContent() === Dt && t.getChildrenSize() === 1;
}
function Mx(e) {
  const t = e.getParent();
  if (!j(t))
    return !1;
  const r = e.getPreviousSibling();
  return O(r) && r === t.getFirstChild() && e.getTextContent() === At(t.getCaller());
}
function Ex(e) {
  return !Hp(e) && Qc(e, "delta-doc") === e.getTextContentSize();
}
function Qc(e, t) {
  if (Pt(e))
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
    (qc(e) || mh(e) || ne(e, oe) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ne(e, oe) === "attribute" || Fa(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Sc) || vx(e) || Mx(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function za(e, t) {
  const r = { insert: e.__text }, n = ne(e, Vr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = yh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function Bu(e) {
  const t = new qi();
  return e.isEmpty() || e.read(() => {
    const r = Fe();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && dr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = Ax();
    for (const s of i)
      t.push(s);
  }), t;
}
function Zc(e, t) {
  const r = [], n = ui(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...Vu(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...Vu(c, n.length, n, i, s, o, a));
  return r;
}
function Ax() {
  return Zc();
}
function Vu(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return Px(e, a, n), Nx(e, a, i, s, o), Ox(e, t, r, i, o, s, a), Ge(e) && a.push($x(e)), ge(e) && a.push(Lx(e)), Be(e) && a.push(Dx(e)), Qr(e) && a.push(Ux(e)), qx(e, a, s), wx(e, a, s), jx(c, s), a;
}
function Px(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    pt(n) ? t.push(Rx(n)) : ae(n) ? t.push(Ix(n)) : dr(n) && t.push({ insert: rs });
  }
  Et(e) && (r.includes(e) || r.push(e));
}
function Nx(e, t, r, n, i) {
  if (!v(e) || Oe(e) || Qr(e))
    return;
  const s = e.getParent();
  if (j(s) && s.getFirstChild() === e)
    return;
  const o = Xt(e) !== void 0;
  if (O(e) && (o || mh(e) || Fa(e) || Hp(e)) || ne(e, oe) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (ps(a))
    return;
  const c = e.getPreviousSibling();
  if (j(s) && O(c) && c === s.getFirstChild() && a === At(s.getCaller()))
    return;
  const l = D(s) ? s : void 0, u = l?.getFirstChild();
  o && l && O(u) && c === u && a.startsWith(I) && (a = a.slice(1));
  const d = a.startsWith(Sc) || ne(e, oe) === "attribute" || Fa(e), f = !!l && a === Dt && l.getChildrenSize() === 1, p = vo(e, n), m = p ? r.filter((k) => p.children.includes(k)) : r, g = za(e, m);
  if (g.insert = a, p) {
    if (!a || a === I || d)
      return;
    p.contentsOps?.push(g);
  } else
    f || d || t.push(g);
  const y = a !== "" && !f && !(d && l);
  if (r.length > 0 && y)
    for (const k of r)
      i.add(k);
}
function Ox(e, t, r, n, i, s, o) {
  D(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (ii(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = zx(c), u = vo(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function wx(e, t, r) {
  if (!j(e))
    return;
  const n = Fx(e), i = vo(e, r), s = {
    node: e,
    children: ui(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function qx(e, t, r) {
  if (!De(e))
    return;
  const n = Kx(e), i = vo(e, r), s = {
    node: e,
    children: ui(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Zr(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function Rx(e) {
  const t = { style: Gi, code: e.__code };
  return Zr(t, e), { insert: rs, attributes: { book: t } };
}
function $x(e) {
  const t = { style: Fs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Zr(t, e), { insert: { chapter: t } };
}
function Ix(e) {
  const t = { style: e.__marker };
  return Zr(t, e), { insert: rs, attributes: { para: t } };
}
function Lx(e) {
  const t = { style: zs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Zr(t, e), { insert: { verse: t } };
}
function Dx(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), Zr(t, e), { insert: { milestone: t } };
}
function Ux(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function Fx(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), Zr(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ne(e, Vr);
  return n && (r.attributes = { segment: n }), r;
}
function zx(e) {
  const t = { insert: "" }, r = yh([e]);
  return r && (t.attributes = { char: r }), t;
}
function Kx(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), Zr(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function vo(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function jx(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    ii(t[r].node, e) && t.splice(r, 1);
}
function yh(e) {
  if (e.length === 0)
    return;
  const t = e.map(Bx);
  return t.length === 1 ? t[0] : t;
}
function Bx(e) {
  const t = { style: e.__marker }, r = ne(e, kn);
  return r && (t.cid = r), Zr(t, e), t;
}
const bh = 1;
class Gt extends ls {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Bi, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new Gt(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => Wx(t) ? {
        conversion: Vx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return el().updateFromJSON(t);
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
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => Hx(t, n), (l) => Gx(t, n, s, l), () => Jx(t, n), () => Yx(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return C("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Bi && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === Lf && i ? (
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
      version: bh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Vx(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: el(t, r) };
}
function el(e, t, r) {
  return je(new Gt(e, t, r));
}
function Wx(e) {
  return e ? e.classList.contains(Gt.getType()) : !1;
}
function St(e) {
  return e instanceof Gt;
}
function Hx(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!j(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function Gx(e, t, r, n) {
  e.update(() => {
    const i = se(t);
    if (!j(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = se(r);
    if (!St(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function Jx(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!j(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return Zc(r);
  });
}
function Yx(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of ui())
      if (j(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const Xx = [
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
], Qx = ["†"];
function Mo(e) {
  if (kh())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = Wu(t), [s, o] = Wu(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = Hu(n, i), [s, o] = Hu(s, o);
  const a = bc();
  return a.anchor = su(n.getKey(), i, Gu(n)), a.focus = su(s.getKey(), o, Gu(s)), a;
}
function tl() {
  if (kh())
    return;
  const e = w();
  if (!e || !N(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Gs(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Gs(i, s);
  return { start: n, end: o };
}
function Wu(e) {
  if (oy(e)) {
    const t = yf(e.jsonPath);
    let r = Fe();
    for (let n = 0; n < t.length; n++) {
      if (!r || !F(r))
        return [void 0, void 0];
      const i = di(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : Ok(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && F(r) ? [r, wk(r, e.offset)] : [void 0, void 0];
  }
  if (ay(e) || cy(e)) {
    const t = Mi(e.jsonPath);
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
  if (ly(e)) {
    const t = Mi(e.jsonPath);
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
  if (uy(e)) {
    const t = Mi(e.jsonPath);
    if (!t || !F(t))
      return [void 0, void 0];
    const r = na(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && v(n) ? [n, 0] : [void 0, void 0];
  }
  if (dy(e)) {
    const t = Mi(e.jsonPath);
    if (!t || !F(t))
      return [void 0, void 0];
    const r = na(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && v(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (fy(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = Mi(e.jsonPath);
    if (!n || !F(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = na(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && v(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${py(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Hu(e, t) {
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
function Gu(e) {
  return F(e) ? "element" : "text";
}
function na(e, t) {
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
function Mi(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = yf(r);
  let i = Fe();
  for (const s of n) {
    if (!i || !F(i))
      return;
    const o = di(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Gs(e, t) {
  if (O(e)) {
    const r = e.getMarkerSyntax(), n = Zx(e), i = n ? on(un(n)) : on(un(e));
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
      return Gs(n, s);
    }
    const i = yo(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return Gs(i, o);
    }
  }
  if (F(e)) {
    const r = e.getChildAtIndex(t);
    if (Pr(r)) {
      const i = r.getTextContent().endsWith("*"), s = on(un(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = Np(e, t);
    return n.type === "text" ? {
      jsonPath: on([...un(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: on(un(e)),
      offset: n.index
    };
  }
  if (v(e)) {
    const r = Nk(e, t);
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
function Zx(e) {
  const t = e.getParent();
  if (!t || !F(t))
    return;
  const r = e_(e);
  return r && !Et(r) && !v(r) && !Ce(r) ? r : t;
}
function e_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Lc(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function un(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = yo(r);
    if (!n)
      break;
    const i = Pk(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function kh() {
  for (let e = Fe().getFirstChild(); e; e = e.getNextSibling())
    if (ts(e))
      return !0;
  return !1;
}
function Th(e, t, r, n, i, s, o) {
  if (!Ee.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Mo(r) : w();
  if (!N(a))
    return;
  const c = n_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (Ri(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = xh(e, l, c, i, s, void 0, void 0);
  return r_(u, a, i), u;
}
function rl(e) {
  return e !== "expanded";
}
function t_(e) {
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
function r_(e, t, r) {
  const n = rl(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || xk(t), ah(t);
  const i = t_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(D)?.selectEnd();
}
function jn(e, t, r) {
  const n = xr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(ot(e)) : r?.markerMode === "visible" && n.append(Tr("marker", we(e)));
  const s = t === "" ? Dt : i ? I + t : t;
  return n.append(pe(s)), n;
}
function n_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(jn("fr", f, n)), !e.isCollapsed()) {
        const p = Yu(e);
        p.length > 0 && o.push(jn("fq", p, n));
      }
      o.push(jn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(jn("xo", f, n)), !e.isCollapsed()) {
        const p = Yu(e);
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
function xh(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : rl(n?.noteMode), l = Ec(e, t, c);
  s && bt(l, Vr, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = ot(e), u && d.setMode("token"), a || (f = ot(e, "closing"))) : n?.markerMode === "visible" && (d = Tr("marker", we(e) + " "), a || (f = Tr("marker", rt(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = pe(At(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const m = () => mo(), g = r.flatMap(s_(m));
    if (t === "")
      l.append(...g);
    else {
      const y = Rc(r);
      let k = () => {
      };
      i?.noteCallerOnClick && (k = i.noteCallerOnClick), p = el(l.__caller, y, k), l.append(p, m(), ...g);
    }
  }
  return f && l.append(f), l;
}
function Ju(e) {
  if (typeof e == "string") {
    const i = se(e);
    return j(i) ? i : void 0;
  }
  const t = ui();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => j(i.node))[e]?.node;
  if (j(n))
    return n;
}
function i_(e, t) {
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
function s_(e) {
  return (t) => Yt(t) ? [t] : [t, e()];
}
function o_(e) {
  const t = e.getParent();
  return t !== null && nt(t, j) !== null;
}
function Yu(e) {
  if (!N(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = kc(e);
  let a = "";
  for (const c of t)
    if (!(j(c) || St(c) || o_(c)) && !O(c) && !Qr(c) && ne(c, oe) !== "attribute") {
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
const nl = [
  Gt,
  Ct,
  ...HT
], a_ = [
  hi,
  ...nl
], c_ = En((e, t) => {
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
function l_() {
  const [e, t] = de(void 0), [r, n] = de(), i = Z(null), s = he((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = Wy(l, c, () => {
      Hy(l, c, {
        placement: "bottom-start",
        middleware: [Gy(), Jy()]
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
function u_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = l_();
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
const d_ = ey(c_);
function _h({ isOpen: e = !1, children: t }) {
  const r = Z(null), { coords: n, placement: i } = u_({ isOpen: e, floatingBoxRef: r }), s = ze(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return hn(
    C(d_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Ch = gf(void 0);
function il() {
  const e = mf(Ch);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function f_(e, t) {
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
function p_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = f_(t, r);
  return C(Ch.Provider, { value: i, children: C("div", { ...n, children: e }) });
}
const Sh = En(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = il(), u = he((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = he((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return C("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function h_({ children: e, autoIndex: t = !0, ...r }) {
  const n = Z(null), { state: { activeIndex: i, menuItems: s } } = il(), o = ze(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = ze(() => {
    const c = o(s);
    return t ? ty.map(c, (l, u) => ry(l) && l.type === Sh && l.props.index === void 0 ? ny(l, { index: u }) : l) : c;
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
const g_ = (e, t, r) => Ns(e, r).toLowerCase().includes(t.toLowerCase()), Xu = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Ns = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function m_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? Xu(r[0]) : "") : (u = n || (r.length > 0 ? Xu(r[0]) : ""), d = (m, g) => g_(m, g, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((m) => {
    try {
      return d(m, t);
    } catch (g) {
      return console.warn("Error filtering item:", m, g), !1;
    }
  }).sort((m, g) => {
    const y = (S) => (p.has(S) || p.set(S, Ns(S, f).toLowerCase()), p.get(S) ?? ""), k = a ? Ns(m, f) : y(m), _ = a ? Ns(g, f) : y(g);
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
          const P = k.indexOf(l), A = _.indexOf(l);
          if (P !== -1 && A === -1)
            return -1;
          if (A !== -1 && P === -1)
            return 1;
          if (P !== -1 && A !== -1)
            return P - A;
          break;
        }
      }
    return k.localeCompare(_);
  });
}
const ia = {
  Root: p_,
  Options: h_,
  Option: Sh
};
function y_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return ze(() => m_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function b_() {
  const { moveUp: e, moveDown: t, select: r } = il();
  return ze(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const k_ = () => {
  const e = b_(), [t] = ce();
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
function T_() {
  return k_(), null;
}
const x_ = ["Shift", "Control", "Alt", "Meta"];
function vh(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ce(), u = s !== void 0, [d, f] = de(""), p = u ? s ?? "" : d, m = y_({ query: p, items: t, filterBy: "name" }), g = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return z(() => {
    a?.(p, m);
  }, [a, p, m]), z(() => l.registerCommand(vr, (y) => {
    if (u || c?.includes(y.key) || x_.includes(y.key))
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
  }, Ne), [l, u, p, o, n, c]), Te(ia.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: m, onSelectOption: (y) => g(y), children: [!u && C("input", { value: p, type: "text", disabled: !0 }), C(T_, {}), C(ia.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((_, S) => Te(ia.Option, { index: S, children: [C("span", { className: "label", children: _.label ?? _.name }), C("span", { className: "description", children: _.description })] }, _.name)) })] });
}
function __({ trigger: e, items: t }) {
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
      if (N(l))
        return l;
    });
    a.read(() => {
      const l = w();
      !N(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && C(_h, { isOpen: n, children: ({ placement: o }) => C(vh, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function C_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: ze(() => {
    if (!t || !e)
      return;
    const i = lr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = lr(o), { action: c } = r(o, a);
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
function S_(e, t) {
  z(() => {
    if (!e.hasNodes([Qe]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Ve(Pf(e, Qe, (n) => Hi(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
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
                let d = t.get(Fi(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Fi(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Fi(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const v_ = En(function({ logger: t }, r) {
  const [n] = ce(), i = ze(() => /* @__PURE__ */ new Map(), []);
  S_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Fi(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = se(u);
        Ce(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && Us(d));
      }
  };
  return gc(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (Qe.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = Mo(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), Zf(p, a, c, l, u, d, f);
      }, { tag: Sa });
    },
    removeAnnotation(o, a) {
      if (Qe.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Fi(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Sa });
    }
  })), null;
}), M_ = [];
function E_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = M_, onChange: n }) {
  const [i] = ce();
  return cs(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(kf) && !u.has(Ff) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = A_(i, s);
        d.length !== 0 && n(o, i, u, d);
      });
  }, [i, e, t, r, n]), null;
}
function A_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new qi();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = se(i), o = s !== null && Xt(s) !== void 0;
    if (t.size === 1 && v(s) && !o && Ex(s)) {
      const a = hh(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = se(i);
          return new qi([v(d) ? za(d) : { insert: "" }]);
        }), l = new qi([za(s)]), u = new qi(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = Bu(r), c = Bu(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const sl = "formatted", Mh = "unformatted", Eh = "paragraph-structure", ol = "standard", Ah = "block-verse", P_ = {
  [sl]: "Formatted",
  [Mh]: "Unformatted",
  [Eh]: "Paragraph Structure",
  [ol]: "Standard",
  [Ah]: "Block Verse"
};
function gi(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let al, cl;
function N_(e) {
  const t = ll(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  al = e, cl = t;
}
N_(sl);
const MP = () => al, Eo = () => cl;
function ll(e) {
  let t;
  switch (e ?? al) {
    case sl:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Mh:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Eh:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case ol:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Ah:
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
function EP(e) {
  if (!e)
    return;
  const t = Qu(e);
  return Object.keys(P_).find((r) => wt(Qu(ll(r)), t));
}
const O_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function Qu(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...O_, ...t };
}
function Ao(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function w_(e) {
  if (e)
    return ns(e) ? Ct : e.markerMode === "editable" ? dt : Ct;
}
function ns(e) {
  return e?.verseLayout === "block";
}
function q_(e) {
  const t = [], r = e ?? cl;
  return r && (t.push(`${lb}${r.markerMode}`), r.hasSpacing && t.push(ab), r.isFormattedFont && t.push(cb)), t;
}
function R_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += $_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), L_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += D_(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), F_(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function $_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), I_(t, e.retain, e.attributes, r, n)), e.retain);
}
function I_(e, t, r, n, i) {
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
          if (Hr(r)) {
            const _ = g.getParent();
            if (D(_)) {
              const S = r.char;
              let P;
              Array.isArray(S) ? a >= 0 && a <= S.length - 1 && (P = S[a]) : a === 0 && (P = S);
              const A = P ? Tn(P, _) : !1;
              if (A && Array.isArray(S) && S.length > 1) {
                const B = pe("");
                g.replace(B);
                const M = typeof r.segment == "string" ? r.segment : void 0, q = mi(S.slice(1), n, g, M);
                let $ = B;
                for (const J of q)
                  $.insertAfter(J), $ = J;
                B.remove(), qt(r, g);
              } else if (A)
                qt(r, g);
              else {
                g.remove();
                const B = Zu(g, r, n, i);
                if (B && B.length > 0) {
                  let M = _;
                  for (const q of B)
                    M.insertAfter(q), M = q;
                }
              }
            } else {
              const S = pe("");
              g.replace(S);
              const P = Zu(g, r, n, i);
              if (P && P.length > 0) {
                let A = S;
                for (const B of P)
                  A.insertAfter(B), A = B;
                S.remove();
              } else
                S.replace(g);
            }
          } else
            qt(r, g);
          s -= m;
        }
      }
      o += d;
    } else if (Pt(u))
      e <= o && o < e + t && s > 0 && (ed(u, r), s -= 1), o += 1;
    else if (D(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (Hr(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            Ka(u, p.style), typeof p.cid == "string" && bt(u, kn, () => p.cid);
            const m = Ue(p, Hs);
            m && Object.keys(m).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...m
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || J_(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && _a(u), !0;
        }
      }
      d && _a(u), a -= 1;
    } else if (Et(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!dr(u))
          ed(u, r);
        else if (ul(r)) {
          const p = Oh(r.para, n);
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
function Zu(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = mi(t.char, r, e, i), o = s.find(D);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), qt(t, e);
    return;
  }
  const a = {};
  $h.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), qt(t, e), s;
}
function Ph(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  O(r) ? (r.setMarker(t), r.setTextContent(we(t))) : Yt(r) && r.getTextType() === "marker" && r.setTextContent(we(t) + I);
}
function Ka(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    O(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = D(e.getParent()), i = e.getFirstChild();
  Yt(i) && i.getTextType() === "marker" && i.getTextContent() === we(r, n) && i.setTextContent(we(t, n));
  const s = e.getLastChild();
  Yt(s) && s.getTextType() === "marker" && s.getTextContent() === rt(r, n) && s.setTextContent(rt(t, n));
}
function ed(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && D(e) && Hr(t)) {
      const i = ja(n);
      if (Ka(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        bt(e, kn, () => o);
      }
      const s = Ue(i, Hs);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Ge(e) || ge(e) || Be(e) || j(e) || De(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (pt(e) || ae(e) || D(e)) && (r === "style" && ae(e) ? Ph(e, n) : r === "style" && D(e) ? Ka(e, n) : r === "code" && pt(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && bt(e, Vr, () => n));
  }
}
function L_(e, t, r) {
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
    } else if (Pt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Et(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Et(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Ht(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
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
              _r(k) ? m += k.getTextContentSize() : Pt(k) && (m += 1), i = _;
            }
            const y = p.getChildren();
            for (const k of y)
              k.remove(), a.append(k);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Ht(), !0);
        } else ae(a) ? a.replace(Ht(), !0) : a.remove();
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
function D_(e, t, r, n, i) {
  if (t === rs)
    return td(e, r, n, i);
  if (t.endsWith(rs) && !ul(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Hr(r))
        throw new Error("Text + LF should not have char attributes");
      o += Js(e, s, r, i);
    }
    return o += td(e + o, r, n, i), o;
  } else return Hr(r) ? U_(e, t, r, n, i) : Js(e, t, r, i);
}
function U_(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = pe(t === "" ? Dt : t);
  qt(r, s);
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
      } else if (Pt(k))
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
        Et(k) && (g += 1);
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
  const c = typeof r.segment == "string" ? r.segment : void 0, u = mi(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(D);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Js(e, t, void 0, i);
  const f = {};
  for (const [m, g] of Object.entries(r))
    m !== "char" && m !== "segment" && typeof g == "string" && (f[m] = g);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const m of u)
    if (!Nh(e, m, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Js(e, t, void 0, i));
}
function Js(e, t, r, n) {
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
        if (qt(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          D(f) && !Hr(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Pt(c))
      s += 1;
    else if (D(c)) {
      if (!o && e === s) {
        const d = pe(t);
        qt(r, d);
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
        return qt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Et(c)) {
      if (!o && e === s) {
        const d = pe(t);
        qt(r, d);
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
        return qt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
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
    qt(r, c);
    const l = Ht().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Nh(e, t, r) {
  const n = Fe();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Ht().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
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
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Ht().append(t));
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
      } else if (Pt(l))
        i += 1;
      else if (D(l)) {
        if (o(l))
          return !0;
      } else if (Et(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (dr(u) && Et(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (F(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return F(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Ht().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Se(a) ? dr(a) && ae(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Se(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (D(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Se(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function F_(e, t, r, n, i) {
  let s;
  return Fr("chapter", t) ? s = K_(t.insert.chapter, r) : Fr("verse", t) ? s = j_(t.insert.verse, r) : Fr("ms", t) ? s = B_(t.insert.ms) : Fr("note", t) ? s = wh(t, r, n, i) : Fr("unknown", t) ? s = qh(t, r, n, i) : Fr("unmatched", t) && (s = W_(t.insert.unmatched, r)), s ? Nh(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function td(e, t, r, n) {
  let i;
  ul(t) ? i = Oh(t.para, r) : G_(t) && (i = z_(t.book)), i ??= Ht();
  const s = i, o = ae(s), a = dr(s);
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
    } else if (Pt(d))
      c += 1;
    else if (Et(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (dr(d) && s)
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
function z_(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Gi || !r || !Ut.isValidBookCode(r))
    return;
  const n = Ue(e, hx);
  return ip(r, n);
}
function Oh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Ue(e, px), i = Ji(r, n);
  if (!gi(t))
    return i;
  if (t.markerMode === "editable")
    i.append(ot(r), mo());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = we(r) + I;
    i.append(t.hasGutterParaMarkers ? Ib(s) : Tr("marker", s));
  }
  return i;
}
function K_(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Ue(e, gx);
  let a;
  if (t.markerMode === "editable")
    a = ap(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Oc(r, c, n, i, s, o);
  }
  return a;
}
function j_(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Ue(e, mx);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Lt(r, n);
    c = yp(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Gc(n, l, i, s, o, a);
  }
  return c;
}
function B_(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Ue(e, yx);
  return jf(t, r, n, s, i);
}
function wh(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Ue(i.note, bx), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const g of c?.ops ?? [])
    if (typeof g.insert == "string")
      if (Hr(g.attributes)) {
        const y = mi(g.attributes.char, t, pe(g.insert), void 0, Rh(g.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(pe(g.insert));
  return xh(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function qh(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Ue(i, kx), l = Nc(s, o, c), u = a?.ops ?? [];
  u.length > 0 && V_(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && bt(l, Vr, () => d), l;
}
function V_(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Hr(s.attributes)) {
        const o = pe(s.insert), a = mi(s.attributes.char, t, o, void 0, Rh(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(pe(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Fr("unknown", s)) {
        const o = qh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Fr("note", s)) {
        const o = wh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function W_(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = jc(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Rh(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function ja(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function mi(e, t, r, n, i, s = !1, o = !1) {
  v(r) && r.getTextContentSize() === 0 && r.setTextContent(Dt);
  const a = () => {
    o && v(r) && r.getTextContent() !== Dt && r.setTextContent(I + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(ja), l = c[0], u = i?.[i.length - 1];
    if (D(u) && Tn(l, u))
      return c.length > 1 ? mi(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, p, m) => {
      const g = xr(p.style, Ue(p, Hs));
      if (typeof p.cid == "string" && bt(g, kn, () => p.cid), n && m === c.length - 1 && bt(g, Vr, () => n), f)
        if (D(f)) {
          const y = f.getMarker(), k = [];
          oa(y, k, t, !0), k.forEach((S) => g.append(S)), g.append(f);
          const _ = [];
          sa(f, _, t, !0), _.forEach((S) => g.append(S));
        } else
          g.append(f);
      return g;
    }, r);
    return oa(l.style, d, t, s), sa(d, d, t, s), [d];
  } else {
    const c = ja(e), l = i?.[i.length - 1];
    if (D(l) && Tn(c, l))
      return r && l.append(r), [];
    a();
    const u = xr(c.style, Ue(c, Hs));
    return typeof c.cid == "string" && bt(u, kn, () => c.cid), n && bt(u, Vr, () => n), r && u.append(r), oa(c.style, u, t, s), sa(u, u, t, s), [u];
  }
}
function sa(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && H_(e.getMarker(), t, r, !1, n);
}
function oa(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = ot(e, "opening", n) : r?.markerMode === "visible" && (i = Tr("marker", we(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function H_(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = ot("", "selfClosing") : s = ot(e, "closing", i) : r?.markerMode === "visible" && (s = Tr("marker", n ? rt("") : rt(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function G_(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function ul(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Hr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function J_(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function qt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        bt(t, Vr, () => n);
        continue;
      }
      if (Y_(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const $h = [
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
function Y_(e) {
  return $h.includes(e);
}
function X_() {
  const [e] = ce();
  return z(() => e.registerCommand(lo, (t) => (Q_(t), !1), mn), [e]), null;
}
function Q_(e) {
  if (Z_(e.target))
    return;
  const t = w();
  N(t) && eC(t);
}
function yi(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Ft(t))
      r++, t = t.getNextSibling(), v(t) && t.getTextContent() === I && (r++, t = t.getNextSibling());
    else if (ge(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Qt(e, r), !0);
}
function Z_(e) {
  if (!Tf(e))
    return !1;
  const t = li(e);
  if (!Lb(t))
    return !1;
  const r = t.getParent();
  return r ? Se(r) ? yi(r) : (Qt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function eC(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = se(t.key);
  if (!Se(r))
    return !1;
  const n = r.getFirstChild();
  return !Pr(n) && !wn(n) ? !1 : yi(r);
}
function tC() {
  const [e] = ce();
  return z(() => {
    const t = (r) => r instanceof KeyboardEvent && !rC(r) || !Po() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Ve(
      e.registerCommand(vr, t, Ne),
      e.registerCommand(Tc, t, Ne),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(yr, t, Wt),
      e.registerCommand(yn, t, Wt),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(xc, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = li(r.target);
        return !n || !Gr(n) ? !1 : (r.preventDefault(), !0);
      }, Ne),
      e.registerCommand(my, t, Ne),
      e.registerCommand(yy, t, Ne),
      e.registerCommand(by, t, Ne)
    );
  }, [e]), null;
}
function rC(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Gr(e) {
  return nt(e, (t) => De(t) || Qp(t)) ?? void 0;
}
function Po() {
  const e = w();
  return N(e) ? Gr(e.anchor.getNode()) !== void 0 || Gr(e.focus.getNode()) !== void 0 : !1;
}
function nC(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function iC(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), nC(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function sC(e, t, r, n) {
  if (!kC(t) || iC(e, r))
    return !1;
  const i = r === "up" ? fx(t) : dx(t);
  return i && n.preventDefault(), i;
}
function oC({ viewOptions: e }) {
  const [t] = ce();
  return aC(t, e), null;
}
function aC(e, t) {
  z(() => {
    if (!e.hasNodes([pr, Ct, Ee]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = w();
      if (!N(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = rd(o), d = hC(i, nd(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return sC(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = rd(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return nd(a, n.key) ? l = !c && od(i, "next") || !c && lC(i) || yC(i) || !c && s && sd(i, "next") : cC(a, n.key) && (l = !c && od(i, "previous") || !c && uC(i) || bC(i, t) || !c && s && sd(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(vr, r, Ne);
  }, [e, t]);
}
function rd(e) {
  return e.dir || "ltr";
}
function nd(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function cC(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Ba(e) {
  if (!D(e) || e.getMarker() !== "fp")
    return;
  const t = Xt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function lC(e) {
  const t = Ba(_p(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Qt(t, 0), !0);
}
function uC(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Ba(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : id(n);
  }
  if (t.offset === 0) {
    const n = Ba(r);
    return n ? id(n) : !1;
  }
  return !1;
}
function id(e) {
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
const Ys = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function dC(e) {
  if (Ys)
    for (const { segment: r } of Ys.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function fC(e) {
  if (Ys) {
    let n = 0;
    for (const { index: i } of Ys.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Ih(e) {
  for (let t = e; t; t = t.getParent())
    if (F(t) && !t.isInline())
      return t;
}
function Lh(e) {
  return !!e && O(e) && Gr(e) !== void 0;
}
function si(e) {
  return v(e) && !e.isToken() && !Lh(e) && e.getTextContentSize() > 0;
}
function Dh(e) {
  return us(e) ? !0 : j(e) ? e.getIsCollapsed() === !0 : v(e) ? (e.isToken() || Lh(e)) && e.getTextContentSize() > 0 : uo(e) ? !Be(e) : !1;
}
function oi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function No(e, t, r) {
  for (let n = e; n; ) {
    if (Dh(n))
      return n;
    if (F(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? oi(n, t, r);
      continue;
    }
    if (si(n))
      return n;
    n = oi(n, t, r);
  }
}
function dl(e, t, r, n, i) {
  return r === "element" && F(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? oi(e, n, i) : r === "text" && Dh(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : oi(e, n, i);
}
function aa(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = dl(e.node, e.offset, e.kind, "previous", t), n = No(r, "previous", t);
  if (!n)
    return e;
  if (si(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function pC(e, t) {
  const r = e.getNode(), n = Ih(r);
  if (!n)
    return;
  if (e.type === "text" && si(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return aa({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = dl(r, e.offset, e.type, t, n), s = No(i, t, n);
  if (!s)
    return;
  if (si(s)) {
    const c = s.getTextContent(), l = t === "next" ? dC(c) : fC(c);
    return aa({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return aa({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function Uh(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = pC(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function sd(e, t) {
  return Uh(e, t, "collapse");
}
function hC(e, t) {
  return Uh(e, t, "extend");
}
function gC(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && si(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = dl(n, e.offset, e.type, t, r);
  return No(i, t, r) === void 0;
}
function mC(e, t) {
  const r = Fe();
  for (let n = e; n; ) {
    const i = oi(n, t, r), s = i && No(i, t, r);
    if (!s)
      return;
    if (n = Gr(s), !n)
      return s;
  }
}
function od(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Gr(n))
    return !1;
  const i = Ih(n);
  if (!i || !gC(r, t, i))
    return !1;
  const s = oi(i, t, Fe()), o = s && Gr(s);
  if (!o)
    return !1;
  const a = mC(o, t);
  if (!a)
    return !0;
  if (si(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function ad(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function yC(e) {
  const t = e.anchor.getNode(), r = _p(e);
  if (j(r) && !O(r.getFirstChild())) {
    if (Se(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Se(i) && yi(i)) && i.selectStart(), !0;
      }
    } else return Yt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Se(t) && j(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : ad(r), !0;
  }
  const n = r?.getParent();
  if (Yt(r) && j(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? ad(n) : n.selectEnd(), !0;
  }
  return !1;
}
function bC(e, t) {
  const r = bk(e);
  if (fs(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (pt(i.getParent()))
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
    const a = nt(o, (c) => j(c));
    if (j(a) && a.getIsCollapsed()) {
      const c = a.getParent();
      if (!c)
        return !1;
      const l = a.getIndexWithinParent();
      return c.select(l, l), !0;
    }
  }
  const s = Xt(i);
  if (!s || s.getIsCollapsed())
    return !1;
  if (St(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function kC(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return ge(t) && uo(t);
}
function TC() {
  const [e] = ce();
  return xC(e), null;
}
function xC(e) {
  z(() => {
    if (!e.hasNodes([me]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Ve(
      e.registerNodeTransform(me, SC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(me, Uk),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(me, zp),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(me, (t) => es(xn("char"), t)),
      e.registerNodeTransform(Ke, vC)
    );
  }, [e]);
}
function ca(e) {
  return e.getChildren().some(O);
}
function _C(e, t) {
  const r = t.getFirstChild();
  if (!O(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (To(n)) {
    const i = n.getTextContent();
    i.startsWith(I) && (i === I ? n.remove() : n.setTextContent(i.slice(I.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function CC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  O(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function SC(e) {
  if (!D(e))
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
  const r = ne(e, kn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (D(i) && Tn({ style: t, cid: r }, i) && wt(n, i.getUnknownAttributes()))
    if (ca(i)) {
      if (_C(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  D(s) && Tn({ style: t, cid: r }, s) && wt(n, s.getUnknownAttributes()) && (ca(s) ? CC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function vC(e) {
  const t = e.getParent();
  if (!D(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(Dt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function Fh(e) {
  return e.replaceAll("	", " ");
}
function zh() {
  const e = w();
  return !!e && !e.isCollapsed();
}
function Kh(e) {
  const t = () => !zh();
  return Ve(e.registerCommand(fo, t, Tt), e.registerCommand(yn, t, Tt));
}
const fl = (e) => {
  e.dispatchCommand(fo, null);
}, pl = (e) => {
  e.dispatchCommand(yn, null);
}, hl = (e) => {
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
      n.setData(o, Fh(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(yr, s);
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
    r.setData("text/plain", Fh(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(yr, i);
  });
};
function MC() {
  const [e] = ce();
  return z(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !($s ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), fl(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), pl(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? gl(e) : hl(e)));
    };
    return Ve(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      Kh(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function EC({ logger: e }) {
  const [t] = ce();
  return z(() => Ve(
    // When the backslash or forward slash key is typed.
    t.registerCommand(vr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Jn),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(yr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Jn),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(xc, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Jn)
  ), [t, e]), null;
}
function AC({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), C("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: C("span", { className: "text", children: i.title }) });
}
function PC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return C("div", { className: "typeahead-popover", children: C("ul", { children: e.map((i, s) => C(AC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let NC = 0;
class Ei {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${NC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function OC({ options: e } = {}) {
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
      new Ei("Cut", {
        onSelect: () => {
          pl(t);
        },
        isDisabled: r
      }),
      new Ei("Copy", {
        onSelect: () => {
          fl(t);
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
  }, [t, r, e]), l = he(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  z(() => Kh(t), [t]), z(() => {
    const d = (f) => {
      const p = f.target;
      t.getRootElement() === p || pp(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
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
  return cs(() => {
    const d = u.current;
    if (!d)
      return;
    const { width: f, height: p } = d.getBoundingClientRect(), m = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), g = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    d.style.left = `${m}px`, d.style.top = `${g}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? zy.createPortal(C("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: C(PC, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), l());
  }, onOptionMouseEnter: (d) => {
    a(d);
  } }) }), document.body) : null;
}
function wC(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function qC(e) {
  if (!_y(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function RC(e) {
  return St(e);
}
function la(e, t, r) {
  const n = li(t.node);
  if (!uo(n) || RC(n))
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
function $C(e, t) {
  if (w())
    return !1;
  const r = e.getRootElement(), n = ky(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !Ty(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, d;
  if (n.isCollapsed)
    u = la(e, c, qC(c)), d = u;
  else {
    const y = wC(n.getRangeAt(0), c);
    u = la(e, c, y ? "before" : "after"), d = la(e, l, y ? "after" : "before");
  }
  if (!u && !d)
    return !1;
  const f = u ?? c, p = d ?? l, m = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = xy(m, e);
  return g ? (ei(g), g.dirty = !t, t) : !1;
}
function IC() {
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
  }, [e]), z(() => e.registerCommand(ur, () => ($C(e, t.current) && (r.current = !0), !1), Wt), [e]), null;
}
function LC() {
  const [e] = ce();
  return z(() => e.registerCommand(vr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!($s ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, Wt), [e]), null;
}
function DC({ isEditable: e }) {
  const [t] = ce();
  return cs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function cd(e) {
  return !!e && qc(se(e));
}
function jh(e) {
  const [t] = ce(), r = Z(void 0), n = he((i) => {
    const s = w(), o = N(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = cd(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = _o(u, d);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const p = hk();
        i.insertAfter(p), r.current = p.getKey(), l = p.getKey();
      }
      Qt(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = se(a);
      v(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return z(() => {
    const i = () => {
      const a = e(), c = w(), l = N(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (jr(Br), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (ps(c) || !c.includes(ti))
        return;
      const l = w(), u = N(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (gk(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(ti).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Ve(t.registerCommand(ur, () => (i(), !1), mn), t.registerCommand(_c, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = cd(a);
      }), c && t.update(() => {
        const l = se(a);
        v(l) && l.remove();
      }, { tag: Br }), r.current = void 0, !1;
    }, mn), t.registerNodeTransform(Ke, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function UC() {
  const e = w();
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!F(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!ge(i) || _o(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ge(s))
    return i;
}
function FC() {
  return jh(UC), null;
}
function zC({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
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
          f || jr(Cy), o.setEditorState(l), o.dispatchCommand(Sy, void 0);
        }, { tag: Df });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function KC({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ce();
  return jC(t, n), BC(i, e, r, n), null;
}
function jC(e, t) {
  const r = Z(void 0), n = Z(void 0), i = e.noteCallers, s = e.crossRefCallers;
  z(() => {
    let o = i;
    (!o || o.length <= 0) && (o = Xx), r.current !== o && (r.current = o, ld("note-callers", o, t));
  }, [t, i]), z(() => {
    let o = s;
    (!o || o.length <= 0) && (o = Qx), n.current !== o && (n.current = o, ld("cross-ref-callers", o, t));
  }, [t, s]);
}
function BC(e, t, r, n) {
  z(() => {
    if (!e.hasNodes([me, Ee, Gt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => XC(s));
    return Ve(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Ee, (s) => VC(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(me, WC),
      e.registerNodeTransform(Ke, HC),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Gt, GC),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Gt, (s, { prevEditorState: o }) => JC(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(ur, () => YC(e, t, r, n), Tt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function VC(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => St(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    v(i) && !O(i) && i.getTextContent() !== At(e.getCaller()) && e.insertBefore(i);
  }
}
function WC(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => St(o));
  if (!D(e) || !j(t) || !n)
    return;
  const i = Rc(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  v(s) ? s.getTextContent() !== I && s.setTextContent(I) : e.insertAfter(pe(I));
}
function HC(e) {
  const t = Xt(e), r = t?.getChildren(), n = r?.find((o) => St(o));
  if (!v(e) || !j(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!O(e) && j(i) && e.getTextContent() !== I && (e.setTextContent(I), e.selectEnd()), D(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Dt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Rc(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function GC(e) {
  if (!St(e))
    return;
  const t = e.getNextSibling();
  !v(t) || O(t) ? e.insertAfter(pe(I)) : t.getTextContent() !== I && t.setTextContent(I);
}
function JC(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = se(r), a = o?.getParent();
      return St(o) && j(a) && a.getCaller() === Bi;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function YC(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = w();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = nt(o, (c) => j(c));
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
      const c = nt(o, (l) => j(l));
      if (c && c.getIsCollapsed() && Se(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Ai(e, l, n);
      }
    }
  }
  if (Se(o)) {
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
function XC(e) {
  const t = w();
  if (!N(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (j(i) && v(s)) {
    e.preventDefault();
    const o = bc();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), ei(o);
  }
}
function ld(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (QC(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function QC(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Oo(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!O(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Xi(e);
  return r && t.push(r), t.length > 0 && t.every((n) => v(n) && n.getMode() === "token") ? t : [];
}
function ZC(e) {
  const t = e.getParent();
  if (j(t))
    return Oo(t).some((r) => r.is(e)) ? t : void 0;
}
function Xs(e) {
  const t = Oo(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function eS(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function tS(e) {
  const t = vy();
  if (!N(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= Xs(e);
  const i = eS(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= Xs(e);
}
function Va(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = ZC(t);
  if (r)
    return rS(r, t, e.offset) ? void 0 : r;
}
function rS(e, t, r) {
  const n = Oo(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function nS(e) {
  const t = Oo(e), r = t[t.length - 1];
  v(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Qt(e, Xs(e));
}
function iS(e = !1) {
  const t = w();
  if (!N(t))
    return !1;
  if (!t.isCollapsed())
    return sS(t.anchor, t.focus);
  const r = Va(t.anchor);
  if (!r)
    return !1;
  if (!e && tS(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Qt(n, r.getIndexWithinParent());
  } else
    nS(r);
  return !0;
}
function sS(e, t) {
  const r = Va(e), n = Va(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && ud(e, r, i), n && ud(t, n, !i), !0;
}
function ud(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), Xs(t), "element");
}
function oS() {
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
  }, [e]), z(() => e.registerCommand(ur, () => (iS(t.current) && jr(Br), !1), mn), [e]), null;
}
function aS({ onChange: e }) {
  const [t] = ce();
  return z(() => t.registerCommand(ur, () => {
    const r = tl();
    return e?.(r), !1;
  }, Tt), [t, e]), null;
}
function cS() {
  const [e] = ce();
  return lS(e), null;
}
function lS(e) {
  z(() => {
    if (!e.hasNodes([Ze]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(Ze, (t) => uS(t, e));
  }, [e]);
}
function uS(e, t) {
  Ua(t, e.getKey()) && ph(e.getFirstChild()), !(!ae(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = se(e.getKey());
    return ae(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Bh({ onStateChange: e }) {
  const [t] = ce(), [r, n] = de(t), i = Z(!1), s = Z(!1), o = Z(void 0), a = Z(void 0), c = he(() => {
    const l = w();
    let u;
    if (N(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : nt(d, (k) => {
        const _ = k.getParent();
        return _ !== null && My(_);
      });
      p === null && (p = d.getTopLevelElementOrThrow()), ts(p) && (p = nt(d, ae) ?? p);
      const m = p.getKey(), g = r.getElementByKey(m), y = Tk(d, f);
      if (y && ux(y) && (u = y.getMarker()), g !== null && (ae(p) || pt(p) || fs(p))) {
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
  return z(() => t.registerCommand(ur, (l, u) => (c(), n(u), !1), Wt), [t, c]), z(() => Ve(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Ey, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Wt), r.registerCommand(Ay, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Wt)), [c, r, e]), null;
}
function Vh(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function Jr(e) {
  return e ? Se(e) ? e : nt(e, (r) => Se(r)) ?? void 0 : void 0;
}
function Wh(e) {
  if (!N(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Jr(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function ml(e) {
  return N(e) && e.isCollapsed() && e.anchor.type === "element" || !N(e) && !mc(e) ? !1 : e.getNodes().some((t) => ge(t));
}
function Hh(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Jr(r);
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
function Gh(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Jr(r);
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
function dd(e, t) {
  return !!Wa(e, t);
}
function Wa(e, t) {
  if (!N(e) || !e.isCollapsed())
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
function Qs(e, t) {
  if (!N(e))
    return !1;
  const r = Jr(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function Qn(e) {
  return ml(e) || Wh(e);
}
function Jh(e, t) {
  if (ml(e) || Wh(e))
    return !0;
  if (!N(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Hh(e) && Qs(e, "backward") || dd(e, "backward");
    case "deleteForward":
      return Gh(e) && Qs(e, "forward") || dd(e, "forward");
    case "insertText":
      return !1;
  }
}
function dS(e, t) {
  if (!(!N(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Wa(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (Hh(e) && Qs(e, "backward")) {
        const n = Jr(e.anchor.getNode());
        if (Se(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Wa(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (Gh(e) && Qs(e, "forward")) {
        const i = Jr(e.anchor.getNode())?.getNextSibling();
        if (Se(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function fd(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return mc(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!N(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!N(e) || e.isCollapsed())
    return !1;
  const r = Jr(e.anchor.getNode()), n = Jr(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function Yh(e) {
  if (v(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else F(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function fS(e) {
  const t = e.getPreviousSibling();
  if (!Se(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? Yh(r) : yi(t) || t.selectStart();
}
function Xh(e) {
  return ge(e) || Ge(e) ? [] : Se(e) ? e.getChildren().flatMap(Xh) : [e];
}
function pS(e) {
  const t = [];
  for (const r of e) {
    const n = Xh(r);
    n.length !== 0 && (Se(r) && t.length > 0 && t.push(pe(" ")), t.push(...n));
  }
  return t;
}
function pd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function hS(e) {
  if (Array.isArray(e)) return e;
}
function gS(e, t) {
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
function mS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yS(e, t) {
  return hS(e) || gS(e, t) || bS(e, t) || mS();
}
function bS(e, t) {
  if (e) {
    if (typeof e == "string") return pd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? pd(e, t) : void 0;
  }
}
const Qh = Object.entries, hd = Object.setPrototypeOf, kS = Object.isFrozen, TS = Object.getPrototypeOf, xS = Object.getOwnPropertyDescriptor;
let et = Object.freeze, it = Object.seal, Hn = Object.create, Zh = typeof Reflect < "u" && Reflect, Ha = Zh.apply, Ga = Zh.construct;
et || (et = function(t) {
  return t;
});
it || (it = function(t) {
  return t;
});
Ha || (Ha = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Ga || (Ga = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Bn = Je(Array.prototype.forEach), _S = Je(Array.prototype.lastIndexOf), gd = Je(Array.prototype.pop), Vn = Je(Array.prototype.push), CS = Je(Array.prototype.splice), zr = Array.isArray, $i = Je(String.prototype.toLowerCase), ua = Je(String.prototype.toString), md = Je(String.prototype.match), Pi = Je(String.prototype.replace), yd = Je(String.prototype.indexOf), SS = Je(String.prototype.trim), vS = Je(Number.prototype.toString), MS = Je(Boolean.prototype.toString), bd = typeof BigInt > "u" ? null : Je(BigInt.prototype.toString), kd = typeof Symbol > "u" ? null : Je(Symbol.prototype.toString), Xe = Je(Object.prototype.hasOwnProperty), Ni = Je(Object.prototype.toString), Ye = Je(RegExp.prototype.test), dn = ES(TypeError);
function Je(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Ha(e, t, n);
  };
}
function ES(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Ga(e, r);
  };
}
function fe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $i;
  if (hd && hd(e, null), !zr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (kS(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function AS(e) {
  for (let t = 0; t < e.length; t++)
    Xe(e, t) || (e[t] = null);
  return e;
}
function st(e) {
  const t = Hn(null);
  for (const n of Qh(e)) {
    var r = yS(n, 2);
    const i = r[0], s = r[1];
    Xe(e, i) && (zr(s) ? t[i] = AS(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = st(s) : t[i] = s);
  }
  return t;
}
function PS(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return vS(e);
    case "boolean":
      return MS(e);
    case "bigint":
      return bd ? bd(e) : "0";
    case "symbol":
      return kd ? kd(e) : "Symbol()";
    case "undefined":
      return Ni(e);
    case "function":
    case "object": {
      if (e === null)
        return Ni(e);
      const t = e, r = jt(t, "toString");
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
function jt(e, t) {
  for (; e !== null; ) {
    const n = xS(e, t);
    if (n) {
      if (n.get)
        return Je(n.get);
      if (typeof n.value == "function")
        return Je(n.value);
    }
    e = TS(e);
  }
  function r() {
    return null;
  }
  return r;
}
function NS(e) {
  try {
    return Ye(e, ""), !0;
  } catch {
    return !1;
  }
}
const Td = et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), da = et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), fa = et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), OS = et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), pa = et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), wS = et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), xd = et(["#text"]), _d = et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ha = et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Cd = et(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), vs = et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), qS = it(/{{[\w\W]*|^[\w\W]*}}/g), RS = it(/<%[\w\W]*|^[\w\W]*%>/g), $S = it(/\${[\w\W]*/g), IS = it(/^data-[\-\w.\u00B7-\uFFFF]+$/), LS = it(/^aria-[\-\w]+$/), Sd = it(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), DS = it(/^(?:\w+script|data):/i), US = it(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), FS = it(/^html$/i), zS = it(/^[a-z][.\w]*(-[.\w]+)+$/i), vd = it(/<[/\w!]/g), Md = it(/<[/\w]/g), KS = it(/<\/no(script|embed|frames)/i), jS = it(/\/>/i), Mt = {
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
}, BS = function() {
  return typeof window > "u" ? null : window;
}, VS = function(t, r) {
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
}, Ed = function() {
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
}, Dr = function(t, r, n, i) {
  return Xe(t, r) && zr(t[r]) ? fe(i.base ? st(i.base) : {}, t[r], i.transform) : n;
};
function eg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : BS();
  const t = (U) => eg(U);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Mt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = jt(f, "cloneNode"), m = jt(f, "remove"), g = jt(f, "nextSibling"), y = jt(f, "childNodes"), k = jt(f, "parentNode"), _ = jt(f, "shadowRoot"), S = jt(f, "attributes"), P = o && o.prototype ? jt(o.prototype, "nodeType") : null, A = o && o.prototype ? jt(o.prototype, "nodeName") : null, B = o && o.prototype ? jt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const U = r.createElement("template");
    U.content && U.content.ownerDocument && (r = U.content.ownerDocument);
  }
  let M, q = "", $, J = !1, Q = 0;
  const Me = function() {
    if (Q > 0)
      throw dn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, re = function(h) {
    Me(), Q++;
    try {
      return M.createHTML(h);
    } finally {
      Q--;
    }
  }, qe = function(h) {
    Me(), Q++;
    try {
      return M.createScriptURL(h);
    } finally {
      Q--;
    }
  }, be = function() {
    return J || ($ = VS(d, i), J = !0), $;
  }, tr = r, Re = tr.implementation, en = tr.createNodeIterator, gr = tr.createDocumentFragment, vt = tr.getElementsByTagName, te = n.importNode;
  let E = Ed();
  t.isSupported = typeof Qh == "function" && typeof k == "function" && Re && Re.createHTMLDocument !== void 0;
  const Y = qS, le = RS, W = $S, xe = IS, ht = LS, zt = DS, gt = US, We = zS;
  let ct = Sd, ue = null;
  const Rn = fe({}, [...Td, ...da, ...fa, ...pa, ...xd]);
  let ye = null;
  const Ti = fe({}, [..._d, ...ha, ...Cd, ...vs]);
  let ve = Object.seal(Hn(null, {
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
  const rr = Object.seal(Hn(null, {
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
  let Rr = !0, tn = !0, xi = !1, ms = !0, Kt = !1, R = !0, K = !1, G = !1, X = null, _e = null, lt = !1, Ot = !1, rn = !1, nn = !1, zl = !0, Kl = !1;
  const jl = "user-content-";
  let Io = !0, ys = !1, $n = {}, nr = null;
  const Lo = fe({}, [
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
  let Bl = null;
  const Vl = fe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Do = null;
  const Wl = fe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), bs = "http://www.w3.org/1998/Math/MathML", ks = "http://www.w3.org/2000/svg", ir = "http://www.w3.org/1999/xhtml";
  let In = ir, Uo = !1, Fo = null;
  const Dm = fe({}, [bs, ks, ir], ua), Hl = et(["mi", "mo", "mn", "ms", "mtext"]);
  let zo = fe({}, Hl);
  const Gl = et(["annotation-xml"]);
  let Ko = fe({}, Gl);
  const Um = fe({}, ["title", "style", "font", "a", "script"]);
  let _i = null;
  const Fm = ["application/xhtml+xml", "text/html"], zm = "text/html";
  let $e = null, Ln = null;
  const Km = r.createElement("form"), Jl = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, jo = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Ln && Ln === h)
      return;
    (!h || typeof h != "object") && (h = {}), h = st(h), _i = // eslint-disable-next-line unicorn/prefer-includes
    Fm.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? zm : h.PARSER_MEDIA_TYPE, $e = _i === "application/xhtml+xml" ? ua : $i, ue = Dr(h, "ALLOWED_TAGS", Rn, {
      transform: $e
    }), ye = Dr(h, "ALLOWED_ATTR", Ti, {
      transform: $e
    }), Fo = Dr(h, "ALLOWED_NAMESPACES", Dm, {
      transform: ua
    }), Do = Dr(h, "ADD_URI_SAFE_ATTR", Wl, {
      transform: $e,
      base: Wl
    }), Bl = Dr(h, "ADD_DATA_URI_TAGS", Vl, {
      transform: $e,
      base: Vl
    }), nr = Dr(h, "FORBID_CONTENTS", Lo, {
      transform: $e
    }), wr = Dr(h, "FORBID_TAGS", st({}), {
      transform: $e
    }), qr = Dr(h, "FORBID_ATTR", st({}), {
      transform: $e
    }), $n = Xe(h, "USE_PROFILES") ? h.USE_PROFILES && typeof h.USE_PROFILES == "object" ? st(h.USE_PROFILES) : h.USE_PROFILES : !1, Rr = h.ALLOW_ARIA_ATTR !== !1, tn = h.ALLOW_DATA_ATTR !== !1, xi = h.ALLOW_UNKNOWN_PROTOCOLS || !1, ms = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Kt = h.SAFE_FOR_TEMPLATES || !1, R = h.SAFE_FOR_XML !== !1, K = h.WHOLE_DOCUMENT || !1, Ot = h.RETURN_DOM || !1, rn = h.RETURN_DOM_FRAGMENT || !1, nn = h.RETURN_TRUSTED_TYPE || !1, lt = h.FORCE_BODY || !1, zl = h.SANITIZE_DOM !== !1, Kl = h.SANITIZE_NAMED_PROPS || !1, Io = h.KEEP_CONTENT !== !1, ys = h.IN_PLACE || !1, ct = NS(h.ALLOWED_URI_REGEXP) ? h.ALLOWED_URI_REGEXP : Sd, In = typeof h.NAMESPACE == "string" ? h.NAMESPACE : ir, zo = Xe(h, "MATHML_TEXT_INTEGRATION_POINTS") && h.MATHML_TEXT_INTEGRATION_POINTS && typeof h.MATHML_TEXT_INTEGRATION_POINTS == "object" ? st(h.MATHML_TEXT_INTEGRATION_POINTS) : fe({}, Hl), Ko = Xe(h, "HTML_INTEGRATION_POINTS") && h.HTML_INTEGRATION_POINTS && typeof h.HTML_INTEGRATION_POINTS == "object" ? st(h.HTML_INTEGRATION_POINTS) : fe({}, Gl);
    const x = Xe(h, "CUSTOM_ELEMENT_HANDLING") && h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING == "object" ? st(h.CUSTOM_ELEMENT_HANDLING) : Hn(null);
    if (ve = Hn(null), Xe(x, "tagNameCheck") && Jl(x.tagNameCheck) && (ve.tagNameCheck = x.tagNameCheck), Xe(x, "attributeNameCheck") && Jl(x.attributeNameCheck) && (ve.attributeNameCheck = x.attributeNameCheck), Xe(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), it(ve), Kt && (tn = !1), rn && (Ot = !0), $n && (ue = fe({}, xd), ye = Hn(null), $n.html === !0 && (fe(ue, Td), fe(ye, _d)), $n.svg === !0 && (fe(ue, da), fe(ye, ha), fe(ye, vs)), $n.svgFilters === !0 && (fe(ue, fa), fe(ye, ha), fe(ye, vs)), $n.mathMl === !0 && (fe(ue, pa), fe(ye, Cd), fe(ye, vs))), rr.tagCheck = null, rr.attributeCheck = null, Xe(h, "ADD_TAGS") && (typeof h.ADD_TAGS == "function" ? rr.tagCheck = h.ADD_TAGS : zr(h.ADD_TAGS) && (ue === Rn && (ue = st(ue)), fe(ue, h.ADD_TAGS, $e))), Xe(h, "ADD_ATTR") && (typeof h.ADD_ATTR == "function" ? rr.attributeCheck = h.ADD_ATTR : zr(h.ADD_ATTR) && (ye === Ti && (ye = st(ye)), fe(ye, h.ADD_ATTR, $e))), Xe(h, "ADD_URI_SAFE_ATTR") && zr(h.ADD_URI_SAFE_ATTR) && fe(Do, h.ADD_URI_SAFE_ATTR, $e), Xe(h, "FORBID_CONTENTS") && zr(h.FORBID_CONTENTS) && (nr === Lo && (nr = st(nr)), fe(nr, h.FORBID_CONTENTS, $e)), Xe(h, "ADD_FORBID_CONTENTS") && zr(h.ADD_FORBID_CONTENTS) && (nr === Lo && (nr = st(nr)), fe(nr, h.ADD_FORBID_CONTENTS, $e)), Io && (ue["#text"] = !0), K && fe(ue, ["html", "head", "body"]), ue.table && (fe(ue, ["tbody"]), delete wr.tbody), h.TRUSTED_TYPES_POLICY) {
      if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw dn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw dn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const L = M;
      M = h.TRUSTED_TYPES_POLICY;
      try {
        q = re("");
      } catch (V) {
        throw M = L, V;
      }
    } else h.TRUSTED_TYPES_POLICY === null ? (M = void 0, q = "") : (M === void 0 && (M = be()), M && typeof q == "string" && (q = re("")));
    et && et(h), Ln = h;
  }, Yl = fe({}, [...da, ...fa, ...OS]), Xl = fe({}, [...pa, ...wS]), jm = function(h, x, L) {
    return x.namespaceURI === ir ? h === "svg" : x.namespaceURI === bs ? h === "svg" && (L === "annotation-xml" || zo[L]) : !!Yl[h];
  }, Bm = function(h, x, L) {
    return x.namespaceURI === ir ? h === "math" : x.namespaceURI === ks ? h === "math" && Ko[L] : !!Xl[h];
  }, Vm = function(h, x, L) {
    return x.namespaceURI === ks && !Ko[L] || x.namespaceURI === bs && !zo[L] ? !1 : !Xl[h] && (Um[h] || !Yl[h]);
  }, Wm = function(h) {
    let x = k(h);
    (!x || !x.tagName) && (x = {
      namespaceURI: In,
      tagName: "template"
    });
    const L = $i(h.tagName), V = $i(x.tagName);
    return Fo[h.namespaceURI] ? h.namespaceURI === ks ? jm(L, x, V) : h.namespaceURI === bs ? Bm(L, x, V) : h.namespaceURI === ir ? Vm(L, x, V) : !!(_i === "application/xhtml+xml" && Fo[h.namespaceURI]) : !1;
  }, $r = function(h) {
    Vn(t.removed, {
      element: h
    });
    try {
      k(h).removeChild(h);
    } catch {
      if (m(h), !k(h))
        throw dn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Ts = function(h) {
    Ci(h);
    const x = y(h);
    if (x) {
      const V = [];
      Bn(x, (H) => {
        Vn(V, H);
      }), Bn(V, (H) => {
        try {
          m(H);
        } catch {
        }
      });
    }
    const L = S(h);
    if (L)
      for (let V = L.length - 1; V >= 0; --V) {
        const H = L[V], ie = H && H.name;
        if (typeof ie == "string")
          try {
            h.removeAttribute(ie);
          } catch {
          }
      }
  }, sn = function(h, x) {
    try {
      Vn(t.removed, {
        attribute: x.getAttributeNode(h),
        from: x
      });
    } catch {
      Vn(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(h), h === "is")
      if (Ot || rn)
        try {
          $r(x);
        } catch {
        }
      else
        try {
          x.setAttribute(h, "");
        } catch {
        }
  }, Hm = function(h) {
    const x = S(h);
    if (x)
      for (let L = x.length - 1; L >= 0; --L) {
        const V = x[L], H = V && V.name;
        if (!(typeof H != "string" || ye[$e(H)]))
          try {
            h.removeAttribute(H);
          } catch {
          }
      }
  }, Ci = function(h) {
    const x = [h];
    for (; x.length > 0; ) {
      const L = x.pop();
      (P ? P(L) : L.nodeType) === Mt.element && Hm(L);
      const H = y(L);
      if (H)
        for (let ie = H.length - 1; ie >= 0; --ie)
          x.push(H[ie]);
    }
  }, Gm = function(h) {
    if (!R)
      return;
    const x = [h];
    for (; x.length > 0; ) {
      const L = x.pop(), V = P ? P(L) : L.nodeType;
      if (V === Mt.processingInstruction || V === Mt.comment && Ye(Md, L.data)) {
        try {
          m(L);
        } catch {
        }
        continue;
      }
      if (V === Mt.element) {
        const ie = L, ke = $e(A ? A(L) : L.nodeName);
        try {
          ie.hasAttribute && ie.hasAttribute("patchsrc") && ie.removeAttribute("patchsrc"), ie.hasAttribute && ie.hasAttribute("for") && ke !== "label" && ke !== "output" && ie.removeAttribute("for");
        } catch {
        }
      }
      const H = y(L);
      if (H)
        for (let ie = H.length - 1; ie >= 0; --ie)
          x.push(H[ie]);
    }
  }, Ql = function(h) {
    let x = null, L = null;
    if (lt)
      h = "<remove></remove>" + h;
    else {
      const ie = md(h, /^[\r\n\t ]+/);
      L = ie && ie[0];
    }
    _i === "application/xhtml+xml" && In === ir && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const V = M ? re(h) : h;
    if (In === ir)
      try {
        x = new u().parseFromString(V, _i);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = Re.createDocument(In, "template", null);
      try {
        x.documentElement.innerHTML = Uo ? q : V;
      } catch {
      }
    }
    const H = x.body || x.documentElement;
    return h && L && H.insertBefore(r.createTextNode(L), H.childNodes[0] || null), In === ir ? vt.call(x, K ? "html" : "body")[0] : K ? x.documentElement : H;
  }, Zl = function(h) {
    const x = B ? B(h) : h.ownerDocument;
    return en.call(
      x || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, xs = function(h) {
    return h = Pi(h, Y, " "), h = Pi(h, le, " "), h = Pi(h, W, " "), h;
  }, Bo = function(h) {
    var x;
    h.normalize();
    const L = B ? B(h) : h.ownerDocument, V = en.call(
      L || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let H = V.nextNode();
    for (; H; )
      H.data = xs(H.data), H = V.nextNode();
    const ie = (x = h.querySelectorAll) === null || x === void 0 ? void 0 : x.call(h, "template");
    ie && Bn(ie, (ke) => {
      Dn(ke.content) && Bo(ke.content);
    });
  }, _s = function(h) {
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
    h.nodeType !== P(h) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    if (!P || typeof h != "object" || h === null)
      return !1;
    try {
      return P(h) === Mt.documentFragment;
    } catch {
      return !1;
    }
  }, Si = function(h) {
    if (!P || typeof h != "object" || h === null)
      return !1;
    try {
      return typeof P(h) == "number";
    } catch {
      return !1;
    }
  };
  function sr(U, h, x) {
    U.length !== 0 && Bn(U, (L) => {
      L.call(t, h, x, Ln);
    });
  }
  const Jm = function(h, x) {
    return !!(R && h.hasChildNodes() && !Si(h.firstElementChild) && Ye(vd, h.textContent) && Ye(vd, h.innerHTML) || R && h.namespaceURI === ir && x === "style" && Si(h.firstElementChild) || h.nodeType === Mt.processingInstruction || R && h.nodeType === Mt.comment && Ye(Md, h.data));
  }, Ym = function(h, x, L) {
    if (!wr[x] && nu(x) && (ve.tagNameCheck instanceof RegExp && Ye(ve.tagNameCheck, x) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(x)))
      return !1;
    if (Io && !nr[x]) {
      const V = k(h), H = y(h);
      if (H && V) {
        const ie = H.length;
        for (let ke = ie - 1; ke >= 0; --ke) {
          const Ie = h === L ? p(H[ke], !0) : H[ke];
          V.insertBefore(Ie, g(h));
        }
      }
    }
    return $r(h), !0;
  }, eu = function(h, x, L, V) {
    return h.length === 0 ? x : x === L || x === V ? st(x) : x;
  }, tu = function(h, x) {
    if (sr(E.beforeSanitizeElements, h, null), h !== x && k(h) === null)
      return ys && Ci(h), !0;
    if (_s(h))
      return $r(h), !0;
    const L = $e(A ? A(h) : h.nodeName);
    if (ue = eu(E.uponSanitizeElement, ue, Rn, X), sr(E.uponSanitizeElement, h, {
      tagName: L,
      allowedTags: ue
    }), h !== x && k(h) === null)
      return ys && Ci(h), !0;
    if (Jm(h, L))
      return $r(h), !0;
    if (wr[L] || !(rr.tagCheck instanceof Function && rr.tagCheck(L)) && !ue[L]) {
      const H = Ym(h, L, x);
      return H === !1 && sr(E.afterSanitizeElements, h, null), H;
    }
    if ((P ? P(h) : h.nodeType) === Mt.element && !Wm(h) || (L === "noscript" || L === "noembed" || L === "noframes") && Ye(KS, h.innerHTML))
      return $r(h), !0;
    if (Kt && h.nodeType === Mt.text) {
      const H = xs(h.textContent);
      h.textContent !== H && (Vn(t.removed, {
        element: h.cloneNode()
      }), h.textContent = H);
    }
    return sr(E.afterSanitizeElements, h, null), !1;
  }, ru = function(h, x, L) {
    if (qr[x] || R && x === "patchsrc" || R && x === "for" && h !== "label" && h !== "output" || zl && (x === "id" || x === "name") && (L in r || L in Km))
      return !1;
    const V = ye[x] || rr.attributeCheck instanceof Function && rr.attributeCheck(x, h);
    if (!(tn && Ye(xe, x))) {
      if (!(Rr && Ye(ht, x))) {
        if (V) {
          if (!Do[x]) {
            if (!Ye(ct, Pi(L, gt, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && h !== "script" && yd(L, "data:") === 0 && Bl[h])) {
                if (!(xi && !Ye(zt, Pi(L, gt, "")))) {
                  if (L)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(nu(h) && (ve.tagNameCheck instanceof RegExp && Ye(ve.tagNameCheck, h) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(h)) && (ve.attributeNameCheck instanceof RegExp && Ye(ve.attributeNameCheck, x) || ve.attributeNameCheck instanceof Function && ve.attributeNameCheck(x, h)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && ve.allowCustomizedBuiltInElements && (ve.tagNameCheck instanceof RegExp && Ye(ve.tagNameCheck, L) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(L)))
        ) return !1;
      }
    }
    return !0;
  }, Xm = fe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), nu = function(h) {
    return !Xm[$i(h)] && Ye(We, h);
  }, Qm = function(h, x, L, V) {
    if (M && typeof d == "object" && typeof d.getAttributeType == "function" && !L)
      switch (d.getAttributeType(h, x)) {
        case "TrustedHTML":
          return re(V);
        case "TrustedScriptURL":
          return qe(V);
      }
    return V;
  }, Zm = function(h, x, L, V) {
    try {
      L ? h.setAttributeNS(L, x, V) : h.setAttribute(x, V), _s(h) ? $r(h) : gd(t.removed);
    } catch {
      sn(x, h);
    }
  }, iu = function(h) {
    sr(E.beforeSanitizeAttributes, h, null);
    const x = h.attributes;
    if (!x || _s(h))
      return;
    ye = eu(E.uponSanitizeAttribute, ye, Ti, _e);
    const L = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ye,
      forceKeepAttr: void 0
    };
    let V = x.length;
    const H = $e(h.nodeName);
    for (; V--; ) {
      const ie = x[V], ke = ie.name, Ie = ie.namespaceURI, mt = ie.value, yt = $e(ke), Wo = mt;
      let ut = ke === "value" ? Wo : SS(Wo);
      if (L.attrName = yt, L.attrValue = ut, L.keepAttr = !0, L.forceKeepAttr = void 0, sr(E.uponSanitizeAttribute, h, L), ut = L.attrValue, Kl && (yt === "id" || yt === "name") && yd(ut, jl) !== 0 && (sn(ke, h), ut = jl + ut), R && Ye(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ut)) {
        sn(ke, h);
        continue;
      }
      if (yt === "attributename" && md(ut, "href")) {
        sn(ke, h);
        continue;
      }
      if (!L.forceKeepAttr) {
        if (!L.keepAttr) {
          sn(ke, h);
          continue;
        }
        if (!ms && Ye(jS, ut)) {
          sn(ke, h);
          continue;
        }
        if (Kt && (ut = xs(ut)), !ru(H, yt, ut)) {
          sn(ke, h);
          continue;
        }
        ut = Qm(H, yt, Ie, ut), ut !== Wo && Zm(h, ke, Ie, ut);
      }
    }
    sr(E.afterSanitizeAttributes, h, null);
  }, Cs = function(h) {
    let x = null;
    const L = Zl(h);
    for (sr(E.beforeSanitizeShadowDOM, h, null); x = L.nextNode(); )
      if (sr(E.uponSanitizeShadowNode, x, null), tu(x, h), iu(x), Dn(x.content) && Cs(x.content), (P ? P(x) : x.nodeType) === Mt.element) {
        const H = _(x);
        Dn(H) && (Vo(H), Cs(H));
      }
    sr(E.afterSanitizeShadowDOM, h, null);
  }, Vo = function(h) {
    const x = [{
      node: h,
      shadow: null
    }];
    for (; x.length > 0; ) {
      const L = x.pop();
      if (L.shadow) {
        Cs(L.shadow);
        continue;
      }
      const V = L.node, ie = (P ? P(V) : V.nodeType) === Mt.element, ke = y(V);
      if (ke)
        for (let Ie = ke.length - 1; Ie >= 0; --Ie)
          x.push({
            node: ke[Ie],
            shadow: null
          });
      if (ie) {
        const Ie = A ? A(V) : null;
        if (typeof Ie == "string" && $e(Ie) === "template") {
          const mt = V.content;
          Dn(mt) && x.push({
            node: mt,
            shadow: null
          });
        }
      }
      if (ie) {
        const Ie = _(V);
        Dn(Ie) && x.push({
          node: null,
          shadow: Ie
        }, {
          node: Ie,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(U) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, L = null, V = null, H = null;
    if (Uo = !U, Uo && (U = "<!-->"), typeof U != "string" && !Si(U) && (U = PS(U), typeof U != "string"))
      throw dn("dirty is not a string, aborting");
    if (!t.isSupported)
      return U;
    G ? (ue = X, ye = _e) : jo(h), (E.uponSanitizeElement.length > 0 || E.uponSanitizeAttribute.length > 0) && (ue = st(ue)), E.uponSanitizeAttribute.length > 0 && (ye = st(ye)), t.removed = [];
    const ie = ys && typeof U != "string" && Si(U);
    if (ie) {
      Gm(U);
      const mt = A ? A(U) : U.nodeName;
      if (typeof mt == "string") {
        const yt = $e(mt);
        if (!ue[yt] || wr[yt])
          throw Ts(U), dn("root node is forbidden and cannot be sanitized in-place");
      }
      if (_s(U))
        throw Ts(U), dn("root node is clobbered and cannot be sanitized in-place");
      try {
        Vo(U);
      } catch (yt) {
        throw Ts(U), yt;
      }
    } else if (Si(U))
      x = Ql("<!---->"), L = x.ownerDocument.importNode(U, !0), L.nodeType === Mt.element && L.nodeName === "BODY" || L.nodeName === "HTML" ? x = L : x.appendChild(L), Vo(L);
    else {
      if (!Ot && !Kt && !K && // eslint-disable-next-line unicorn/prefer-includes
      U.indexOf("<") === -1)
        return M && nn ? re(U) : U;
      if (x = Ql(U), !x)
        return Ot ? null : nn ? q : "";
    }
    x && lt && $r(x.firstChild);
    const ke = ie ? U : x;
    try {
      const mt = Zl(ke);
      for (; V = mt.nextNode(); )
        tu(V, ke), iu(V), Dn(V.content) && Cs(V.content);
    } catch (mt) {
      throw ie && (Ts(U), Bn(t.removed, (yt) => {
        yt.element && Ci(yt.element);
      })), mt;
    }
    if (ie)
      return Bn(t.removed, (mt) => {
        mt.element && Ci(mt.element);
      }), Kt && Bo(U), U;
    if (Ot) {
      if (Kt && Bo(x), rn)
        for (H = gr.call(x.ownerDocument); x.firstChild; )
          H.appendChild(x.firstChild);
      else
        H = x;
      return (ye.shadowroot || ye.shadowrootmode) && (H = te.call(n, H, !0)), H;
    }
    let Ie = K ? x.outerHTML : x.innerHTML;
    return K && ue["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && Ye(FS, x.ownerDocument.doctype.name) && (Ie = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + Ie), Kt && (Ie = xs(Ie)), M && nn ? re(Ie) : Ie;
  }, t.setConfig = function() {
    let U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    jo(U), G = !0, X = ue, _e = ye;
  }, t.clearConfig = function() {
    Ln = null, G = !1, X = null, _e = null, M = $, q = "";
  }, t.isValidAttribute = function(U, h, x) {
    Ln || jo({});
    const L = $e(U), V = $e(h);
    return ru(L, V, x);
  }, t.addHook = function(U, h) {
    typeof h == "function" && Xe(E, U) && Vn(E[U], h);
  }, t.removeHook = function(U, h) {
    if (Xe(E, U)) {
      if (h !== void 0) {
        const x = _S(E[U], h);
        return x === -1 ? void 0 : CS(E[U], x, 1)[0];
      }
      return gd(E[U]);
    }
  }, t.removeHooks = function(U) {
    Xe(E, U) && (E[U] = []);
  }, t.removeAllHooks = function() {
    E = Ed();
  }, t;
}
var WS = eg();
function HS({ structureProtectionMode: e = "off" }) {
  const [t] = ce(), r = Z(void 0), [n, i] = de(void 0), s = he((o) => {
    r.current = o, i(o);
  }, []);
  return z(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const m = Vh(p);
      if (!m)
        return !1;
      const g = w();
      return e === "protected" ? g && Jh(g, m) ? (p.preventDefault(), !0) : !1 : m !== "deleteBackward" && m !== "deleteForward" ? !1 : a(m, p);
    }, a = (p, m) => {
      const g = w(), y = r.current;
      if (y && g && fd(g, y)) {
        if (s(void 0), m.preventDefault(), p !== y.intent)
          return !0;
        const _ = se(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (_) {
            const S = _.getParent(), P = _.getPreviousSibling(), A = _.getNextSibling();
            _.remove(), P ? Yh(P) : A && v(A) ? A.select(0, 0) : S?.selectStart();
          }
        } else y.kind === "selection" ? N(g) && g.removeText() : Se(_) && fS(_);
        return !0;
      }
      if (!g)
        return !1;
      const k = dS(g, p);
      if (k) {
        if (k.kind === "verse") {
          const _ = xf();
          _.add(k.node.getKey()), ei(_);
        } else {
          const _ = bc();
          _.anchor.set(k.node.getKey(), 0, "element"), _.focus.set(k.node.getKey(), k.node.getChildrenSize(), "element"), ei(_);
        }
        return s({ key: k.node.getKey(), kind: k.kind, intent: p }), m.preventDefault(), !0;
      }
      if (N(g) && !g.isCollapsed() && ml(g)) {
        const _ = g.getNodes().filter(ge).map((A) => A.getKey()), { anchor: S, focus: P } = g;
        return s({
          kind: "selection",
          intent: p,
          key: _[0],
          anchor: { key: S.key, offset: S.offset, type: S.type },
          focus: { key: P.key, offset: P.offset, type: P.type }
        }), m.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const m = w();
      return !m || !Qn(m) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, m) => {
      if (!p)
        return !1;
      const g = WS.sanitize(p), y = new DOMParser().parseFromString(g, "text/html"), k = pS(Yy(t, y)), _ = w();
      return N(_) && _.insertNodes(k), m.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const m = w();
      return m && Qn(m) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const m = w();
      return m && Qn(m) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        fd(w(), p) || s(void 0);
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
      t.registerCommand(yn, c, Wt),
      t.registerCommand(yr, u, Ne),
      t.registerCommand(Py, c, Ne),
      t.registerCommand(xc, d, Ne),
      t.registerCommand(Tc, c, Ne),
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
const AP = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function GS({ textDirection: e }) {
  const [t] = ce();
  return JS(t, e), null;
}
function JS(e, t) {
  z(() => (Ad(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Ad(e, t);
  })), [e, t]);
}
function Ad(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function YS() {
  const [e] = ce();
  return XS(e), null;
}
function XS(e) {
  z(() => {
    if (!e.hasNodes([me, Ct, Ee, Ke, dt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Ve(
      e.registerNodeTransform(Ke, QS),
      e.registerNodeTransform(Ke, (t) => ZS(t, e)),
      e.registerNodeTransform(dt, Pd),
      e.registerNodeTransform(Ct, Pd),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(dt, (t) => {
        es(xn("va"), t), es(xn("vp"), t);
      })
    );
  }, [e]);
}
function QS(e) {
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
  Le(n))
    return;
  if (ge(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  ge(r) && Jc(e);
}
function ZS(e, t) {
  const r = e.getParent();
  !De(r) || !e.isAttached() || Ua(t, e.getKey()) && !Ua(t, r.getKey()) && r.insertAfter(e);
}
function Pd(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Ce(t); )
    t = t.getLastChild();
  (D(t) || v(t) && Ce(t.getParent())) && e.insertBefore(pe(" "));
}
function yl(e) {
  if (!j(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !qc(n)) ? void 0 : e;
}
function ev(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (F(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function tv() {
  const e = w();
  if (!(!N(e) || !e.isCollapsed()))
    return yl(ev(e.anchor));
}
function rv(e) {
  const t = w();
  let r;
  return N(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = tg(e.target)), r ? yl(nt(r, j)) : void 0;
}
function tg(e) {
  const t = Ny(e)?.anchorNode;
  if (Tf(t))
    return li(t) ?? void 0;
}
function nv(e) {
  if (w())
    return;
  const t = tg(e);
  return t ? yl(nt(t, j)) : void 0;
}
function iv() {
  const [e] = ce(), t = jh(tv);
  return z(() => {
    const r = (n) => {
      jr(Br), t(n);
    };
    return Ve(e.registerCommand(ur, () => {
      const n = nv(e.getRootElement());
      return n && r(n), !1;
    }, mn), e.registerCommand(lo, (n) => {
      const i = rv(n);
      return i && r(i), !1;
    }, mn));
  }, [e, t]), null;
}
function sv({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = C_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return C(__, { trigger: e, items: i });
}
function ov({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = ze(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? C(lv, { trigger: e, harness: i }) : C(sv, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const av = [" ", "*"];
function cv(e, t) {
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
function lv({ trigger: e, harness: t }) {
  const [r] = ce(), [n, i] = de(void 0), s = Z({ query: "", options: [] }), o = Z(0), a = he((f, p, m) => {
    const g = p.find((y) => y.kind === "note" && y.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = w();
      N(y) && y.insertText(`${e}${f}${m ? " " : ""}`);
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
        return g ? (a(g, n.items, !1), Oy(() => {
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
  }, Ne), r.registerCommand(_f, (f) => {
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
  const c = he(() => i(void 0), []), l = he((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = he((f) => {
    const { markerMenuItem: p, applyOpts: m } = f;
    t.apply(p, m);
  }, [t]), d = ze(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    cv(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && C(_h, { isOpen: !0, children: ({ placement: f }) => C(
    vh,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? av : void 0 },
    n.session
  ) });
}
function rg(e) {
  return e.replaceAll(I, "~").replace(/ {2,}/g, (r) => I.repeat(r.length));
}
function uv(e) {
  return e.replaceAll(I, " ").replaceAll("~", I);
}
function dv(e) {
  return e.replace(/ {2,}/g, " ");
}
let Zs;
function fv(e) {
  e && (Zs = e);
}
function ng(e) {
  return Ao(e);
}
function pv(e, t) {
  return e.isEmpty() ? bf : ig(e.toJSON(), t);
}
function ig(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && go(r[0]) && (!r[0].children || r[0].children.length === 0))
    return bf;
  if (r.some(WT)) {
    Zs?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = sg(r), i = Bt(n, t);
  return i ? { type: kr, version: br, content: i } : void 0;
}
function hv(e, t) {
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
function gv(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Ae({
    type: Nt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function mv(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Cp(r, a, c), Ae({
    type: Nt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function yv(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Cp(t, o, a), Ae({
    type: dt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function bv(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !ng(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(I) && (t[0] = a.slice(1));
  }
  return Ae({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function kv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Ae({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function Tv(e, t) {
  const { unknownAttributes: r } = e;
  return Ae({ type: Yp, ...r, content: t });
}
function xv(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Ae({ type: Zp, marker: r, ...n, content: t });
}
function _v(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Ae({
    type: th,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function Cv(e, t) {
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
function Gn(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Ae({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Op({ sid: n, eid: i, ...s }, o)
  });
}
function Sv(e) {
  return e.text;
}
function vv(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Ae({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function Mv(e) {
  const { marker: t } = e;
  return {
    type: js,
    marker: t === "" ? void 0 : t
  };
}
function Nd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function Ev(e, t, r, n, i) {
  const s = Jt.getType(), o = t.filter((l) => !r.includes(l));
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
      marker: bn,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = Gn({
      type: s,
      marker: bn
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
  (!n || !Qf(n)) && t.forEach((l) => {
    const u = Gn({
      type: s,
      marker: Yn,
      eid: l
    });
    i.push(u);
  });
}
function Bt(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, p = a, m = a, g = a, y = a;
    switch (a.type) {
      case Ut.getType():
        i.push(
          hv(
            l,
            Bt(l.children, t)
          )
        );
        break;
      case pr.getType():
        i.push(gv(a));
        break;
      case Nt.getType():
        i.push(
          mv(
            u,
            Bt(u.children, t)
          )
        );
        break;
      case Ct.getType():
      case dt.getType():
        i.push(yv(a));
        break;
      case me.getType():
        i.push(
          bv(
            d,
            Bt(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case Ze.getType():
        i.push(
          kv(
            f,
            Bt(f.children, t)
          )
        );
        break;
      case On.getType():
        i.push(
          Tv(
            a,
            Bt(a.children, t)
          )
        );
        break;
      case fi.getType():
        i.push(
          xv(
            a,
            Bt(a.children, t)
          )
        );
        break;
      case pi.getType():
        i.push(
          _v(
            a,
            Bt(a.children, t)
          )
        );
        break;
      case Ee.getType():
        i.push(
          Cv(
            p,
            Bt(p.children, t, p.caller)
          )
        );
        break;
      case Ar.getType():
      case Er.getType():
      case Gt.getType():
      case Cf.getType():
      case hr.getType():
        break;
      case Qe.getType():
        if (s = Bt(
          g.children,
          t,
          r,
          n
        ), s) {
          const k = g.typedIDs[Kr];
          if (k)
            Ev(s, k, o, e[c + 1], i), o = k;
          else {
            const _ = s.shift();
            _ && (typeof _ == "string" ? Nd(i, _) : i.push(_)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Jt.getType():
        i.push(Gn(a));
        break;
      case Ke.getType():
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
        m.text !== I && !m.text.startsWith(Sc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[ds]?.textType !== "attribute" && (!r || m.text !== At(r))) {
          let k = Sv(m);
          ng(t) && (n && k.startsWith(I) && (k = k.slice(1)), k = dv(uv(k))), Nd(i, k);
        }
        break;
      case Pn.getType():
        i.push(
          vv(
            y,
            Bt(y.children, t)
          )
        );
        break;
      case Or.getType():
        i.push(Mv(a));
        break;
      case hi.getType():
        Zs?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Zs?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function sg(e) {
  const t = e.findIndex((r) => go(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = sg(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Os = {
  initialize: fv,
  deserializeEditorState: pv
}, Av = /^sd\d*$/, Pv = /* @__PURE__ */ new Set([
  ...Object.entries(va).filter(
    ([e, t]) => t.category === T.TitlesHeadings && t.type === b.Paragraph && !Av.test(e)
  ).map(([e]) => e),
  "qa"
]);
function Nv(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (sp(i) || kp(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!kk(i)) {
      t && eo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (wc(i) && Pv.has(i.marker) && !eo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    og(i.children, t).forEach((s) => {
      const o = Ov(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = wv(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function og(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (ag(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Qf(i)) {
      const s = og(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Od(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Od(i, c.nodes)] });
      });
      return;
    }
    t && eo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Od(e, t) {
  return { ...e, children: t };
}
function ag(e) {
  return dh(e) && e.number !== "";
}
function eo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => ag(r) || eo(r)) : !1;
}
function Ov(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function wv(e) {
  return {
    type: Bs,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: ch
  };
}
const wd = lg([]), qv = {
  type: Cf.getType(),
  version: 1
};
let bl = [], ee, Sn, cg, _t;
function Rv(e, t) {
  bl = [], Lv(e), Dv(t);
}
function $v(e = 0) {
}
function Iv(e, t) {
  ee = t ?? Eo();
  let r;
  return e ? (e.type !== kr && _t?.warn(`This USJ type '${e.type}' didn't match the expected type '${kr}'.`), e.version !== br && _t?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${br}'.`
  ), e.content.length > 0 ? (r = Qa(Ur(e.content)), ns(ee) && (r = Nv(r, _t))) : r = [wd]) : r = [wd], cg?.(bl), {
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
function Lv(e) {
  e && (Sn = e), e?.addMissingComments && (cg = e.addMissingComments);
}
function Dv(e) {
  e && (_t = e);
}
function kl() {
  return Ao(ee);
}
function Uv(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function Fv(e) {
  let { marker: t } = e;
  t !== Gi && _t?.warn(`Unexpected book marker '${t}'!`), t = t ?? Gi;
  const { code: r } = e;
  (!r || !Ut.isValidBookCode(r)) && _t?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  ee?.markerMode === "editable" || ee?.markerMode === "visible" ? n.push(
    kt("marker", we(t) + " " + r + I)
  ) : ee?.hasGutterParaMarkers && n.push(kt("marker", we(t) + I, !0));
  const i = Uv(e.content);
  i && n.push(at(kl() ? rg(i) : i));
  const s = Ue(e, Qb);
  return Ae({
    type: Ut.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: np
  });
}
function zv(e) {
  let { marker: t } = e;
  t !== Fs && _t?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Fs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Ue(e, Zb);
  let a;
  ee?.markerMode === "visible" && (a = !0);
  const c = [
    at(Lt(t, r) ?? "")
  ];
  return ee?.markerMode === "editable" && iM(i, s, c), ee?.markerMode === "editable" ? Ae({
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
    version: op
  }) : Ae({
    type: pr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: dp
  });
}
function Kv(e) {
  let { marker: t } = e;
  t !== zs && _t?.warn(`Unexpected verse marker '${t}'!`), t = t ?? zs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (w_(ee) ?? Ct).getType(), c = ee?.markerMode === "editable" ? mp : uh;
  let l, u;
  ee?.markerMode === "editable" ? l = Lt(t, r) : ee?.markerMode === "visible" && (u = !0);
  const d = Ue(e, fk);
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
function jv(e, t = [], r = !1) {
  let { marker: n } = e;
  me.isValidMarker(n, Sn?.extraValidMarkers) || _t?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (ee?.markerMode === "editable") {
    const [a] = t;
    ri(a) ? a.text = I + a.text : a && t.unshift(at(I));
  }
  t.length === 0 && t.push(at(Dt)), Ja(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Ue(e, rk);
  return s || eM(n, o, i), s || Ya(e.marker ?? "", i, !1, r), Ae({
    type: me.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: up
  });
}
function lg(e) {
  return {
    type: Wr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: hp
  };
}
function Bv(e, t = []) {
  let { marker: r } = e;
  Ze.isValidMarker(r, Sn?.extraValidMarkers) || _t?.warn(`Unexpected para marker '${r}'!`), r = r ?? cr;
  const n = [];
  if (gi(ee) && (ee?.markerMode === "editable" ? n.push(
    ft(r),
    at(I, fr, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && n.push(
    kt(
      "marker",
      we(r) + I,
      ee?.hasGutterParaMarkers
    )
  )), n.push(...t), kl()) {
    const s = n.find(
      (o) => !Dc(o) && !(ri(o) && o.text === I)
    );
    ri(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => I.repeat(o.length)));
  }
  const i = Ue(e, uk);
  return Ae({
    type: Ze.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: gp
  });
}
function Tl() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function Vv(e, t = []) {
  const r = Ue(e, hT);
  return Ae({
    ...Tl(),
    type: On.getType(),
    unknownAttributes: r,
    children: t,
    version: Xp
  });
}
function Wv(e, t = []) {
  const r = Ue(e, yT), n = e.marker ?? Ra, i = [];
  return ee?.markerMode === "editable" ? i.push(
    ft(n),
    at(I, fr, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && i.push(
    kt(
      "marker",
      we(n) + I,
      ee?.hasGutterParaMarkers
    )
  ), i.push(...t), Ae({
    ...Tl(),
    type: fi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: eh
  });
}
function Hv(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? $a, a = jp(o, i) ?? o;
  ee?.markerMode === "editable" ? s.push(
    ft(a),
    at(I, fr, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && s.push(
    kt(
      "marker",
      we(a) + I,
      ee?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = Ue(
    e,
    kT
  );
  return Ae({
    ...Tl(),
    type: pi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: rh
  });
}
function Gv(e, t) {
  const r = vk(t);
  let n = () => {
  };
  return Sn?.noteCallerOnClick && (n = Sn.noteCallerOnClick), Ae({
    type: Gt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: bh
  });
}
function Jv(e, t) {
  let { marker: r } = e;
  Ee.isValidMarker(r, Sn?.extraValidMarkers) || _t?.warn(`Unexpected note marker '${r}'!`), r = r ?? Mc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : rl(ee?.noteMode), a = Ue(e, gb), c = ee?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  ee?.markerMode === "editable" ? (l = ft(r, "opening", !1, c), s || (u = ft(r, "closing"))) : ee?.markerMode === "visible" && (l = kt("marker", we(r) + " "), s || (u = kt("marker", rt(r))));
  const d = [];
  let f;
  if (l && d.push(l), ee?.markerMode === "editable" && !o)
    f = at(At(i), void 0, c), d.push(f), nM(n, d), d.push(...t);
  else {
    const p = at(I, fr, "token");
    f = Gv(i, t), d.push(f, p, ...t.flatMap(Yv(p)));
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
    version: Bf
  });
}
function Yv(e) {
  return (t) => Yf(t) ? [t] : [t, e];
}
function Xv(e) {
  let { marker: t } = e;
  (!t || !Jt.isValidMarker(t, Sn?.extraValidMarkers)) && _t?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Ue(e, vc), s = wp(e);
  return Ae({
    type: Jt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: zf
  });
}
function qd(e, t = []) {
  return {
    type: Qe.getType(),
    typedIDs: { [Kr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function Qv(e, t) {
  const { marker: r } = e, n = e.type, i = Ue(e, Hb), s = [];
  if (ee?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = Bp(
      n,
      r,
      i
    );
    o && s.push(kt("marker", o)), a && s.push(kt("attribute", a)), s.push(...t), c && s.push(kt("attribute", c)), l && s.push(kt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    ri(o) && (o.mode = "token");
  }), Ae({
    type: Pn.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: ep
  });
}
function Zv(e) {
  return {
    type: Or.getType(),
    marker: e,
    text: Ui(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: ee?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: Gp
  };
}
function ft(e, t = "opening", r = !1, n = "normal") {
  return {
    type: hr.getType(),
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
  return t !== void 0 && (n[ds] = { textType: t }), n;
}
function kt(e, t, r = !1) {
  const n = {
    type: Er.getType(),
    text: t,
    textType: e,
    version: Jf
  };
  return r && (n[ds] = { [Pc.key]: !0 }), n;
}
function is(e, t) {
  return {
    type: Ar.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: tp
  };
}
function Ja(e, t, r = !1) {
  ee?.markerMode === "editable" ? t.push(ft(e, "opening", r)) : ee?.markerMode === "visible" && t.push(kt("marker", we(e, r)));
}
function Ya(e, t, r = !1, n = !1) {
  ee?.markerMode === "editable" ? r ? t.push(ft("", "selfClosing")) : t.push(ft(e, "closing", n)) : ee?.markerMode === "visible" && t.push(
    kt(
      "marker",
      r ? rt("") : rt(e, n)
    )
  );
}
function eM(e, t, r) {
  if (ee?.markerMode !== "editable" || !t) return;
  const n = ar(t, po(e));
  n && r.push(at(n, "attribute"));
}
function Rd(e, t) {
  if (e.type !== "ms" || ee?.markerMode !== "editable" && ee?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Ue(e, vc), o = qp(
    n,
    i,
    s,
    wp(e)
  ), a = ar(o, ho(r ?? ""));
  if (!a) return;
  const c = I + a;
  ee?.markerMode === "editable" ? t.push(at(c, "attribute")) : t.push(kt("attribute", c));
}
function tM(e, t) {
  const r = e.marker ?? "";
  if (ee?.markerMode === "editable") {
    const n = [];
    Ja(r, n), Rd(e, n), Ya(r, n, !0), t.push(is("milestone", n));
  } else
    Ja(r, t), Rd(e, t), Ya(r, t, !0);
}
function $d(e, t, r) {
  t !== void 0 && r.push(
    is(e, [
      ft(e, "opening"),
      at(I + t, "attribute"),
      ft(e, "closing")
    ])
  );
}
function rM(e, t) {
  ee?.markerMode === "editable" && ($d("va", e.altnumber, t), $d("vp", e.pubnumber, t));
}
function nM(e, t) {
  e !== void 0 && t.push(
    is("cat", [
      ft("cat", "opening"),
      at(I + e, "attribute"),
      ft("cat", "closing")
    ])
  );
}
function iM(e, t, r) {
  e !== void 0 && r.push(
    is("ca", [
      ft("ca", "opening"),
      at(I + e, "attribute"),
      ft("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    is("cp", [
      ft("cp", "opening"),
      at(I + t, "attribute")
    ])
  );
}
function Id(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function sM(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function Ld(e, t) {
  t.marker === bn && t.sid !== void 0 && e.push(t.sid), t.marker === Yn && t.eid !== void 0 && sM(e, t.eid);
}
function Xa(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [qd(o, [...n])] : o, c = e[i];
  Ld(n, c);
  const l = Xa(
    e.slice(i + 1, s),
    Id(t, i + 1),
    c.marker === bn,
    n
  ), u = qd(l, [...n]), d = e[s];
  Ld(n, d);
  const f = Xa(
    e.slice(s + 1),
    Id(t, s + 1),
    d.marker === bn,
    n
  );
  return [...a, u, ...f];
}
function Ur(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(at(kl() ? rg(i) : i));
    else if (!i.type)
      _t?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Ut.getType():
          n.push(Fv(i));
          break;
        case Nt.getType():
          n.push(zv(i));
          break;
        case dt.getType():
          ee?.hasSpacing || n.push(qv), n.push(Kv(i)), rM(i, n);
          break;
        case me.getType():
          n.push(
            jv(i, Ur(i.content, !0), t)
          );
          break;
        case Ze.getType():
          n.push(Bv(i, Ur(i.content)));
          break;
        case Ee.getType():
          n.push(Jv(i, Ur(i.content)));
          break;
        case Jt.getType():
          Kf(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && bl?.push(i.sid)), n.push(Xv(i)), tM(i, n);
          break;
        case Or.getType():
          n.push(Zv(i.marker ?? ""));
          break;
        case Yp:
          n.push(Vv(i, Ur(i.content)));
          break;
        case Zp:
          n.push(Wv(i, Ur(i.content)));
          break;
        case th:
          n.push(Hv(i, Ur(i.content)));
          break;
        default:
          _t?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(Qv(i, Ur(i.content)));
      }
  }), Xa(n, r);
}
function Qa(e) {
  const t = e.findIndex(
    (n) => sp(n) || kp(n) || wc(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    mT(n)
  );
  if (t >= 0) {
    const n = Qa(e.slice(0, t)), i = e[t], s = Qa(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || dh(n)))
    return [lg(e)];
  return e;
}
const Cr = {
  initialize: Rv,
  reset: $v,
  serializeEditorState: Iv
};
function ug(e) {
  if (e && !O(e)) {
    if (v(e)) return e;
    if (F(e))
      for (const t of e.getChildren()) {
        const r = ug(t);
        if (r) return r;
      }
  }
}
function oM() {
  const e = w();
  if (!N(e)) return !1;
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
      ni(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = ug(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(I) ? I : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return v(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of dg(e)) {
    if (!Cn(t)) continue;
    ni(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(I) && r.setTextContent(n.slice(I.length));
  }
  return !0;
}
function dg(e) {
  const [t, r] = kc(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!v(a) || O(a) || ne(a, oe) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function aM() {
  const e = w();
  if (!N(e)) return !1;
  const t = e.focus.getNode();
  return Cn(t) ? Se(Bc(t)) : !1;
}
function fg() {
  let e = w();
  if (!N(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (O(t) && !Hc(t, e.anchor.offset)) {
    const c = t.getParent();
    if (D(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = w(), !N(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!v(t) || O(t) || !Cn(t)) return !1;
  const r = Bc(t);
  if (!Se(r)) return !1;
  const n = pe(""), i = e.anchor.offset;
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
  return D(a) ? Vc(a) : o.select(0, 0), !0;
}
const pg = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Tp(Fe().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = w(), t = $c(e), r = Xc(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Ek(0, o);
        const a = sx(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Ep(c) && Ic(parseInt(n, 10), c);
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
function Za(e, t) {
  return Ee.isValidMarker(e, t) || !!pg[e] || Ze.isValidMarker(e, t) || me.isValidMarker(e, t);
}
function cM(e, t) {
  return me.isNoteContentMarker(e) ? !1 : me.isValidMarker(e, t);
}
function hg(e, t, r, n, i, s) {
  const o = Th(
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
function ec(e, t, r, n, i, s, o) {
  if (Ee.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = hg(
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
  const a = hM(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = w();
      N(u) && (ah(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = Uu(d, Cr, r), m = Go(p);
      if (N(u)) {
        const g = u.anchor.getNode(), y = g.getParent(), k = Cn(g), _ = u.anchor.key === u.focus.key;
        if (D(m) && k && _ && !ga(m, o))
          dM(
            u,
            m,
            g,
            r?.markerMode === "editable"
          );
        else if (D(m) && !_ && !ga(m, o) && fM(u))
          pM(u, m, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          gM(
            u,
            () => Go(p)
          );
        else if (F(m) && !m.isInline()) {
          const S = u.insertParagraph();
          if (S) {
            const P = S.getChildren();
            m.append(...P), S.replace(m), Se(m) && yi(m) || m.selectStart();
          }
        } else if (D(m) && v(g) && !O(g) && D(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        ga(m, o)) {
          const S = g.getParent();
          if (D(S)) {
            const P = u.anchor.offset;
            if (P === 0) g.insertBefore(m);
            else if (P >= g.getTextContentSize()) g.insertAfter(m);
            else {
              const [B] = g.splitText(P);
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
          const S = D(y) ? y : void 0, P = S ? lM(g, u.anchor.offset) : [];
          let B = (S ?? g).insertAfter(m);
          if (Pr(m)) {
            const M = {
              ...r || Eo(),
              markerMode: "hidden"
            }, q = Uu(
              d,
              Cr,
              M
            ), $ = Go(q);
            B = B.insertAfter($);
          }
          if (P.length > 0 && S) {
            const M = to(S).append(...P);
            B.insertAfter(M), S.isEmpty() && S.remove();
          } else v(B.getNextSibling()) || B.insertAfter(pe(I));
          F(B) && B.selectEnd();
        } else if (u.insertNodes([m]), vM(m), f) {
          const S = xf();
          S.add(m.getKey()), ei(S);
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
function lM(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function ga(e, t) {
  return ((t ?? Vs).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function uM(e, t) {
  t && e.getChildren().forEach((i) => {
    O(i) && i.setNested(!0);
  }), e.getChildren().some((i) => O(i) && i.getMarkerSyntax() === "closing") || e.append(ot(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function dM(e, t, r, n) {
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
    const [o, a] = ai(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (ni(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), v(i) && !i.getTextContent().startsWith(I) && i.setTextContent(I + i.getTextContent());
    const o = t.getChildren().find((a) => v(a) && !O(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => v(o) && !O(o));
  v(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function fM(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (O(n) || D(n)) continue;
    if (!v(n) || n.getType() !== Ke.getType() || ne(n, oe) === "attribute") return !1;
    const i = Bc(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Cn(n) && (r = !0);
  }
  return r;
}
function pM(e, t, r) {
  const n = dg(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Cn(a)) return;
    ni(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(I) && c.setTextContent(l.slice(I.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(I) || i.setTextContent(I + i.getTextContent());
  const s = t.getChildren().find((a) => v(a) && !O(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function hM(e, t) {
  let r = pg[e];
  return r || (Ze.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: Ze.getType(), marker: e, content: [] }] })
  } : me.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: me.getType(), marker: e };
      return (me.isValidFootnoteMarker(e) || me.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function gM(e, t) {
  const r = e.getNodes(), [n, i] = ai(e);
  let s;
  r.forEach((o, a) => {
    if (F(s) && s.isParentOf(o))
      return;
    const c = gg(
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
    s || (s = t(), c.insertBefore(s), l = !0, D(s) && s.getChildren().some((d) => O(d) && d.getMarkerSyntax() === "opening") && uM(s, D(s.getParent()))), yM(c, s, l);
  }), (v(s) || F(s)) && s.selectEnd();
}
function ai(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function xl(e) {
  return Ce(e) || j(e) || j(e.getParent());
}
function gg(e, t, r, n, i) {
  if (!xl(e)) {
    if (v(e))
      return mM(e, t, r, n, i);
    if (F(e) && e.isInline())
      return e;
  }
}
function mM(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function yM(e, t, r) {
  if (v(t)) {
    const n = tc(e, t);
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
    tc(e, t), r && D(t) && t.getChildren().some((s) => O(s)) && v(e) && !O(e) && !e.getTextContent().startsWith(I) && e.setTextContent(I + e.getTextContent());
  }
}
function tc(e, t) {
  let r = e.getTextContent();
  if (v(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    Jc(n), v(n) || t.insertBefore(pe(" "));
  }
  return r;
}
function mg(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = vn(u, t);
    if (!f) return !1;
    const p = v(u) ? u.getTextContentSize() : 0;
    if (Dd(f, r), v(u) && u.isAttached()) {
      const m = u.getTextContentSize(), g = Math.max(p - m, 0), y = Math.max(0, Math.min(d - g, m)), k = w();
      N(k) && k.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = ai(e);
  if (!Cl(n, t, s, o)) return !1;
  const a = _l(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = vn(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = Tg(d, a);
    f && (Dd(f, r), l = !0);
  }), xg(a, i), l;
}
function Dd(e, t) {
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
    v(n) && i.startsWith(I) && n.setTextContent(i.slice(I.length));
  }), _a(e);
}
function _l(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = gg(
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
function yg(e) {
  const t = nt(
    e,
    (r) => j(r) || Se(r)
  );
  return j(t);
}
function bg(e) {
  return e.filter(
    (t) => !xl(t) && (v(t) || F(t) && t.isInline())
  );
}
function bM(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!v(i) || xl(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function kM(e, t, r) {
  return e.getChildren().some(
    (n) => F(n) && t.some((i) => n.isParentOf(i)) && !kg(n, r)
  );
}
function Cl(e, t, r, n, i) {
  const s = bg(e), o = bM(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = vn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !kM(l, s, o);
  });
}
function kg(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Ft(r));
}
function Tg(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (F(u) && t.some((d) => u.isParentOf(d))) {
      if (!kg(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Ft(n[s - 1]) && (s -= 1), o < n.length - 1 && Ft(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(to(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(to(e).append(...c)), e;
}
function to(e) {
  return wy(e);
}
function xg(e, t) {
  const r = w(), n = e[0], i = e[e.length - 1];
  if (!N(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function TM(e, t, r) {
  if (e.isCollapsed()) {
    const l = vn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Su(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = ai(e);
  if (!Cl(n, r, i, s, t)) return !1;
  const o = _l(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = vn(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = Tg(u, o);
    d && (Su(d, t), c = !0);
  }), c;
}
function xM(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = ai(e);
  if (!!!i?.some(
    (y) => Cl(s, y, o, a)
  ) && !_M(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const k = w();
    N(k) && mg(k, y, n) && (l = !0);
  });
  const u = w();
  if (!N(u)) return l;
  const d = u.isBackward(), [f, p] = ai(u), m = _l(
    u.getNodes(),
    f,
    p
  );
  if (m.length === 0) return l;
  const g = m.filter(
    (y) => !yg(y) && !vn(y, t)
  );
  return g.length > 0 && (CM(g).forEach((y) => SM(y, t)), l = !0), xg(m, d), l;
}
function _M(e, t) {
  return bg(e).some(
    (r) => !yg(r) && !vn(r, t)
  );
}
function CM(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function SM(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => D(a) && a.getMarker() === t
  ), s = i ? to(i) : xr(t);
  e[0].insertBefore(s), s.append(...e), i === r || tc(e[0], s);
}
function vM(e) {
  ge(e) && (Jc(e.getPreviousSibling()), ph(e.getNextSibling()));
}
const _g = {
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
}, Ud = "psc-active-text", Ms = "psc-empty-text";
function MM({ viewOptions: e }) {
  const [t] = ce(), r = Z(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return z(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(Ud), r.current = o, o && t.getElementByKey(o)?.classList.add(Ud);
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
          const c = a.closest(`.${Ms}`);
          if (!c) return !1;
          const l = li(c);
          if (!ge(l)) return !1;
          const u = l.getParent();
          if (!F(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        Tt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = ma(), f = EM(), p = [], m = [];
          return Fe().getChildren().forEach((g) => {
            if (!F(g)) return;
            const { emptyKeys: y, nonEmptyKeys: k } = PM(g);
            p.push(...y), m.push(...k);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: m };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(Ms) : t.getElementByKey(d)?.classList.add(Ms);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(Ms));
      }),
      t.registerCommand(
        _c,
        () => (i(void 0), !1),
        Tt
      ),
      t.registerCommand(
        qy,
        () => {
          const o = t.getEditorState().read(ma);
          return o !== r.current && i(o), !1;
        },
        Tt
      )
    ];
    return i(t.getEditorState().read(ma)), Ve(...s);
  }, [t, n]), null;
}
function ma() {
  return AM(w() ?? void 0)?.getKey();
}
function EM() {
  const e = w();
  if (!N(e)) return;
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
function AM(e) {
  if (N(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function PM(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ge(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ge(c)) break;
      if (!(Yt(c) || O(c)) && c.getTextContent().replaceAll(Is, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const NM = /^\+/;
function Sl(e, t) {
  const r = t.replace(NM, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Cg(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Sg(e, t) {
  return Cg(e, t) !== void 0;
}
function rc(e, t) {
  const r = Cg(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function ro(e, t, r) {
  const n = F(e) ? e.getChildren().filter(O) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function OM(e, t, r, n, i) {
  const s = Sl(n, t);
  if (!s) {
    ro(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && ro(e, "invalid", i);
}
function zi(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (D(s)) {
      const o = s.getMarker();
      i || OM(s, o, t, r, n), zi(s, t, r, n, i || o === "xq");
    } else if (ge(s)) {
      if (i) continue;
      const o = Sl(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else j(s) ? zi(s, s.getMarker(), r, n, i) : De(s) || F(s) && zi(s, t, r, n, i);
}
function wM(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Sl(e, a);
    if (!c) {
      ro(o, "unknown", r), rc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    rc(n, l) || ro(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Fe().getChildren())
    De(o) || (pt(o) || Ge(o) ? i(o, o.getMarker()) : ae(o) ? (i(o, o.getMarker()), s(o) && zi(o, o.getMarker(), e, r, !1)) : F(o) && s(o) && zi(o, "p", e, r, !1));
  return r;
}
function qM(e) {
  return !!e?.includes("(basic)");
}
function RM(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function vg(e, t) {
  return !e.startsWith("zpa") && e !== "c" && Za(e, t);
}
function vl(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Mg(e, t) {
  const r = [];
  for (const n of t) {
    const i = vl(e, n);
    i && rc(r, i);
  }
  return r;
}
function ws(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: RM(e.description),
    isBasic: qM(e.description)
  };
}
function $M(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function nc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : $M(e.marker, t.marker);
}
function ic(e, t, r) {
  if (t.noteMarker) return [];
  const n = Mg(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && vg(i.marker, r)
  ).filter((i) => {
    const s = vl(e, i.marker);
    return s !== void 0 && Sg(n, s);
  }).map((i) => ws(i, "paragraph")).sort(nc);
}
function IM(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => vg(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => ws(c, "character")).sort(nc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => ws(c, "character")),
    ...a.map((c) => ws(c, "note"))
  ].sort(nc);
}
function LM(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function DM(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function UM(e, t, r) {
  return [
    ...LM(e, t.openCharMarkers),
    ...IM(e, t, r)
  ].sort(DM);
}
function FM(e, t, r) {
  if (t.source === "paragraph") return ic(e, t, r);
  const n = UM(e, t, r);
  return n.length > 0 ? n : ic(e, t, r);
}
function zM(e, t, r) {
  const n = ic(e, t, r), i = Mg(e, t.previousParaMarkers), s = vl(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Sg(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const er = String.raw`\w-`, Eg = "a-z0-9", KM = `[a-z][${Eg}]*`, jM = new RegExp(
  String.raw`^\\(\+?[${er}]+)[ \u00A0]$`
), Ag = new RegExp(String.raw`^\\(\+?[${er}]+)$`), BM = new RegExp(String.raw`^\\\+?[${er}]*\*$`), VM = new RegExp(
  String.raw`^\\(\+?[${er}]+)(?:[ \u00A0]|$)`
), WM = new RegExp(
  String.raw`^\\(\+?)([${er}]+)`
), HM = new RegExp(
  String.raw`\\\+?[${er}]+(?:\\?\*|[ \u00A0])`
), GM = new RegExp(
  String.raw`\\\+?[${er}]*$`
), JM = new RegExp(
  String.raw`^\\(${KM})( |$)`
), YM = new RegExp(
  String.raw`\\[${Eg}+*]*$`,
  "i"
), tt = "￼";
function Pg(e) {
  return e.length > 1 && e.startsWith(I) && e.charAt(1) !== tt ? e.slice(1) : e;
}
function Fd(e) {
  return Dc(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Ng(e, t, r, n) {
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
  for (; Fd(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== At(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Fd(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function Es(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Oi(e, t) {
  GM.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += tt;
}
function It(e) {
  return e.replaceAll(I, " ");
}
function XM(e, t, r = !1) {
  if (Ao(t)) return It(e);
  if (e === I) return " ";
  const n = r && e.startsWith(I), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(I, "~");
}
function Ki(e) {
  const t = e.getTextContent();
  return Nn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Ml(e, t) {
  const r = e[t];
  if (!Be(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = ko(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!O(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Og(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function El(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = Yi(n, i);
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
function wo(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && Ac(e);
}
function wg(e, t) {
  return Be(e) ? !wo(e.getMarker(), t) : j(e) || De(e) ? !0 : Oe(e) ? Al(e) : D(e) ? qg(e, t) : !1;
}
function qg(e, t) {
  if (Lk(e)) return !0;
  const r = e.getMarker();
  return !vb(r) && t(r) === void 0;
}
const Rt = "", $t = "";
function zd(e) {
  return e.flatMap((t) => Le(t) ? t.getChildren() : [t]);
}
function Ii(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Be(s)) {
      const o = Ml(e, i);
      wo(s.getMarker(), r) && Og(o) ? (t.push(
        Rt,
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
      ), Ii(zd(o), t, r), t.push($t)) : t.push(tt), i += o.length;
    } else if (Oe(s)) {
      const o = El(e, i);
      Al(s) ? t.push(tt) : (t.push(
        Rt,
        "verse",
        It(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Ii(zd(o), t, r), t.push($t)), i += o.length;
    } else O(s) ? t.push(Rt, "marker", It(s.getTextContent()), $t) : Qr(s) ? t.push(Rt, "unmatched", It(s.getTextContent()), $t) : wg(s, r) ? t.push(tt) : us(s) ? t.push(" ") : v(s) ? t.push(
      It(
        n ? Pg(Ki(s)) : Ki(s)
      )
    ) : D(s) ? (t.push(Rt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Ii(s.getChildren(), t, r, !0), t.push($t)) : F(s) ? (t.push(Rt, s.getType()), Ii(s.getChildren(), t, r), t.push($t)) : t.push(tt);
  }
}
function bi(e, t) {
  const r = [];
  return Ii(e, r, t), r.join("");
}
function Sr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function ci(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Pl(e) {
  return e.type ?? "";
}
function Rg(e, t, r) {
  return t === "closing" ? rt(e, r) : t === "selfClosing" ? rt("") : we(e, r);
}
function ya(e, t) {
  const r = e[t];
  if (!(!r || Pl(r) !== "attribute-run"))
    return Sr(r) ?? [];
}
function ki(e, t) {
  const r = [];
  return Li(e, r, t), r.join("");
}
function Li(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Pl(s);
    if (o === "ms") {
      const l = s, u = ya(e, i + 1);
      u && wo(l.marker ?? "", r) ? (t.push(
        Rt,
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
      ), Li(u, t, r), t.push($t), i += 1) : t.push(tt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(tt);
        continue;
      }
      t.push(
        Rt,
        "verse",
        It(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = ya(e, i + 1 + u);
      for (; d; )
        Li(d, t, r), u++, d = ya(e, i + 1 + u);
      t.push($t), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Rt,
        "marker",
        It(
          Rg(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        $t
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(Rt, "char", JSON.stringify(l.unknownAttributes ?? null)), Li(Sr(s) ?? [], t, r, !0), t.push($t);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(tt);
      continue;
    }
    if (o === "unmatched") {
      t.push(Rt, "unmatched", It(ci(s) ?? "")), t.push($t);
      continue;
    }
    const a = ci(s);
    if (a !== void 0) {
      t.push(It(n ? Pg(a) : a));
      continue;
    }
    const c = Sr(s);
    c ? (t.push(Rt, o), Li(c, t, r), t.push($t)) : t.push(tt);
  }
}
function qo(e) {
  let t = 0;
  for (const r of e) {
    const n = Sr(r);
    if (n) {
      t += qo(n);
      continue;
    }
    const i = ci(r);
    if (i !== void 0)
      for (const s of i) s === tt && t++;
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
    if (O(a))
      Es(t, a, It(a.getTextContent()));
    else if (Be(a)) {
      s();
      const c = Ml(e, o);
      wo(a.getMarker(), r) && Og(c) ? Mn(c, t, r, n) : Oi(t, [a, ...c]), o += c.length;
    } else if (j(a) || De(a))
      s(), Oi(t, [a]);
    else if (Oe(a)) {
      s();
      const c = El(e, o);
      Al(a) ? Oi(t, [a, ...c]) : (Es(t, a, It(Ki(a))), Mn(c, t, r, n)), o += c.length;
    } else if (D(a))
      s(), qg(a, r) ? Oi(t, [a]) : ss(a, t, r, n, { pending: !0 });
    else if (us(a))
      s(), Es(t, a, " ");
    else if (v(a)) {
      const c = Nn(a) || ne(a, oe) === "attribute", l = s() && !c;
      Es(
        t,
        a,
        c ? It(Ki(a)) : XM(Ki(a), n, l)
      );
    } else F(a) ? ss(a, t, r, n, i) : (s(), Oi(t, [a]));
  }
}
function Nl(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (De(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return ss(e, i, t, r), i;
}
function $g(e, t) {
  let r = 0;
  const n = (i) => {
    if (v(i)) {
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
    } else F(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function sc(e, t = []) {
  for (const r of e)
    Oe(r) ? t.push(r) : F(r) && sc(r.getChildren(), t);
  return t;
}
function Ig(e) {
  let t = 0;
  const r = (n) => {
    if (v(n))
      for (const i of n.getTextContent()) i === tt && t++;
    else F(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function qn(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === tt && t++;
    else r.content && (t += qn(r.content));
  return t;
}
function QM(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), F(i) && ss(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const os = /\s/;
function Lg(e) {
  return e.filter(Ro).length;
}
function Ro(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return v(t) && !O(t) && ne(t, oe) === "attribute";
}
function ZM(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return O(t) || Ro(e);
}
function Kd(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Ro(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      os.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function Ol(e, t, r) {
  const n = Kd(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !ZM(i) ? Kd(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: Lg(e.spans) };
}
function ba(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return O(t) && t.getMarkerSyntax() !== "opening";
}
function eE(e) {
  const t = se(e.key);
  if (!O(t)) return !1;
  const r = t.getParent();
  return D(r) ? (r.selectNext(0, 0), !0) : !1;
}
function tE(e) {
  const t = se(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = Oe(t) ? El(r, n) : Be(t) ? Ml(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function Dg(e, t, r) {
  const { text: n, spans: i } = e, s = Lg(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && !ba(d);
    if (!(o && Ro(d))) {
      if (u) {
        if (!p) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let m = 0; m < f; m++) {
        const g = n[d.start + m];
        if (c === 0 && (l === 0 || !os.test(g))) {
          if (p) {
            a = { key: d.key, offset: m };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? os.test(g) || c-- : l--;
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
    if (d && ba(d) && eE(d) || d?.isSentinel && tE(d)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !ba(p));
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
function Ug(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(F)?.selectStart();
      return;
    }
    Dg(QM(e, n, i), t, e);
  }
}
function rE(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(F)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  Mn(e, s, n, i), Dg({ text: s.text, spans: s.spans }, t, e);
}
function Fg(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  for (const g of e) {
    const y = Nl(g, n, r);
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
  if (N(c)) {
    for (let g = c.anchor.getNode(); g; g = g.getParent())
      if (e.some((y) => y.is(g))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Ol(s, c.anchor.key, c.anchor.offset));
  }
  const l = Mr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (qn(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = Cr.serializeEditorState(
    { type: kr, version: br, content: l },
    r
  );
  if (ki(u.root.children, n) === bi(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((g) => ao(g));
  if (Ig(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = sc(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), p = e[0];
  d.forEach((g) => p.insertBefore(g)), $g(d, s.sentinels), e.forEach((g) => g.remove());
  const m = sc(d);
  for (let g = 0; g < f.length && g < m.length; g++)
    m[g].getNumber() === f[g].number && m[g].setSid(f[g].sid);
  return Ug(d, o, a, n, r), !0;
}
function zg(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Ee.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!O(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(St(s) || v(s) && s.getTextContent() === At(e.getCaller()))) return;
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
function Kg(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(tt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function nE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = zg(e, n, r);
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
    u.isCollapsed() && (c = Ol(o, u.anchor.key, u.anchor.offset));
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
  const p = f.content ?? [], m = Kg(p), g = Ng(e, p, m, r);
  if (g.failure !== void 0)
    return g.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      g.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (qo(g.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const y = e.getCategory() !== m;
  if (y && e.setCategory(m), ki(g.children, n) === bi(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  const k = g.children.map((P) => ao(P));
  if (Ig(k) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), y;
  const _ = a[0];
  if (_)
    k.forEach((P) => _.insertBefore(P));
  else {
    const P = e.getChildren().find((A) => O(A) && A.getMarkerSyntax() === "closing");
    k.forEach((A) => P ? P.insertBefore(A) : e.append(A));
  }
  $g(k, o.sentinels);
  const S = new Set(o.sentinels.flat().map((P) => P.getKey()));
  return a.forEach((P) => {
    S.has(P.getKey()) || P.remove();
  }), rE(k, c, l, n, r), !0;
}
const jg = /* @__PURE__ */ new Set(["ca", "cp"]), wl = "cp";
function Bg(e) {
  if (!dr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (ss(e, t, lr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Mr(r, { getMarker: lr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === wl)
  );
}
function $o(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (D(r) && jg.has(r.getMarker()) || Bg(r)) {
      t.push(r);
      continue;
    }
    ae(r) && r.getMarker() === wl && t.push(r);
    break;
  }
  return t;
}
function iE(e) {
  const t = (n) => D(n) && jg.has(n.getMarker()) || Bg(n);
  if (t(e) || ae(e) && e.getMarker() === wl)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Pe(n)) return n;
      if (!t(n)) return;
    }
}
function Vg(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = $o(e);
  if (n.some((s) => ae(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Mn(e.getChildren(), i, t, r), Mn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function sE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...$o(e)], o = Vg(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = w();
  if (N(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((g) => g.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Ol(o, l.anchor.key, l.anchor.offset));
  }
  const u = Mr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (qn(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = Cr.serializeEditorState(
    { type: kr, version: br, content: u },
    r
  );
  if (ki(f.root.children, n) === bi(s, n)) {
    let m = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), m = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), m = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const p = f.root.children.map((m) => ao(m));
  return Pe(p[0]) ? (p.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), Ug(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function as(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (De(n)) return;
    !t && (j(n) || ae(n) || Pe(n)) && (t = n), Ry(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? iE(r) : void 0) ?? t;
}
function Vt(e, t) {
  const r = as(e);
  return r ? j(r) ? nE(r, t) : Pe(r) ? sE(r, t) : Fg([r], t) : !1;
}
const oE = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function jd(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !oE.has(n[0])
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
          t.push(`\\${n}`), jd(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), qs(r.content, t), jd(r, t), i !== "false" && t.push(`\\${n}*`);
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
function Bd(e, t, r) {
  const n = as(e);
  if (!ae(n)) return !1;
  const i = w();
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
    os.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  qs(a, l);
  for (const u of l.join("").replaceAll(I, "~")) {
    if (os.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function ql(e, t) {
  return Wg(e, t, b.Paragraph);
}
function aE(e, t) {
  return Wg(e, t, b.Character);
}
function Wg(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== b.Unknown ? i === r : !(Ee.isValidMarker(n) || Ac(n));
}
function cE(e) {
  return [ot(e), mo()];
}
function Rl(e) {
  Qt(e, 2);
}
function lE(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function $l(e) {
  const t = lE(e);
  e.splice(0, 0, cE(e.getMarker())), t && Rl(e);
}
function no(e, t) {
  e.setMarker(t), $l(e), Rl(e);
}
function uE(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Nn(n)) {
    if (v(n) && !O(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(I), bt(n, oe, fr), n.setMode("token");
      return;
    }
    if (Pp(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(mo());
  }
}
function Vd(e, t, r) {
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
function ji(e) {
  for (let t = e; t; t = t.getParent())
    if (ae(t)) return t;
}
function dE(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = ji(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = ji(r.getNode())?.is(s) ?? !1, a = ji(n.getNode())?.is(s) ?? !1;
    return !(o && !Vd(r, s, "start") || a && !Vd(n, s, "end"));
  });
}
function oc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = w();
  if (!(!N(r) || r.isCollapsed()))
    for (const n of dE(r)) t.add(n.getKey());
}
function fE(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = w();
  if (!N(r) || !r.isCollapsed()) return;
  const n = ji(r.focus.getNode());
  n && t.add(n.getKey());
}
function pE(e) {
  const t = w();
  !N(t) || t.isCollapsed() || t.getNodes().some((r) => O(r)) && (oc(e), t.removeText());
}
const hE = new RegExp(
  String.raw`^\\\+?([${er}]+)(?:[ \u00A0]|$)`
);
function gE(e, t) {
  const r = hE.exec(e.getTextContent());
  return !!r && ql(r[1], t);
}
function mE(e, t) {
  if (!gi(t.viewOptions)) return;
  if (Ft(e.getFirstChild())) {
    uE(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (gE(e, t.getMarker)) return;
    $l(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ae(o) && !o.is(e))) {
      no(e, cr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (ae(r)) {
    const n = e.getChildren().filter((a) => !Nn(a)), i = w();
    let s = !1;
    if (N(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : ji(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || F(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Qt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  no(e, cr);
}
function yE(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = ar(t, po(e.getMarker()));
  return r === "" ? void 0 : r;
}
function bE(e) {
  const t = e.getChildren().filter((s) => !O(s) && ne(s, oe) !== "attribute"), r = t[0];
  r && v(r) && r.getTextContent().startsWith(I) && r.setTextContent(r.getTextContent().slice(1));
  const n = yE(e);
  n && t.push(pe(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function kE(e, t) {
  const r = e.getChildren(), n = r.some((s) => O(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => v(c) && !O(c) && c.getTextContent() === At(s)
    ), a = ui(e).some(({ node: c }) => O(c));
    if (!o && !a) return;
    r.forEach((c) => {
      O(c) || (v(c) && c.getTextContent() === At(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => O(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function TE(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(O(r) && r.getMarkerSyntax() === "opening")) {
    bE(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => O(o) && o.getMarkerSyntax() === "closing");
  i && !s && Vt(e, t);
}
function Hg(e, t, r) {
  if (!O(e.getFirstChild()) && r?.markerMode === "editable" && gi(r)) {
    no(e, t);
    return;
  }
  Ph(e, t);
}
function Gg() {
  const e = w();
  if (!N(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Jg(e);
    return t !== "removed" ? t : (ac(), "handled");
  }
  return ac() ? "handled" : "declined";
}
function xE(e, t) {
  if (!t) return e;
  const r = JM.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function Wd(e, t) {
  const r = w();
  if (!N(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Yg())
      return "declined";
  } else {
    const s = Jg(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => xE(s, t)
  );
  Hd(n ?? "");
  for (const s of i)
    ac(), Hd(s);
  return "handled";
}
function _E(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = li(n);
  if (!i) return !1;
  const s = Xt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !v(i) || O(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Jg(e) {
  const t = Xt(e.anchor.getNode()), r = Xt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), CE() ? "removed" : "needs-plain-split");
}
function Hd(e) {
  if (e === "") return;
  const t = w();
  N(t) && t.insertText(e);
}
function CE() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = Xt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => O(r) && r.getMarkerSyntax() === "opening");
}
function Yg() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Xt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function ac() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Yg();
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
    ni(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (Ak(u), i.append(u));
  }
  return i.getChildren().every(O) && i.append(pe(Dt)), Xg(i), !0;
}
function Xg(e) {
  const t = e.getChildren().find((r) => !O(r));
  if (v(t)) {
    const r = t.getTextContent().startsWith(I) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (F(t)) {
    Xg(t);
    return;
  }
  e.selectEnd();
}
function SE(e) {
  const t = [];
  let r = e;
  for (; r; )
    D(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function vE(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Fe().getChildren()) {
    if (t && n.is(t)) break;
    (pt(n) || Ge(n) || ae(n)) && r.push(n.getMarker());
  }
  return r;
}
function ME(e) {
  let t = e;
  for (; F(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function EE(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Ft(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Nn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(ME(i)) && r === 0 : !1;
}
function AE(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Ft(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Nn(i) && t.is(i) && r === 0;
}
function PE() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function NE() {
  const e = w();
  if (!N(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = nt(t, ae), s = !n && (!i || AE(i, t, r)) ? "paragraph" : "character", o = Xt(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: vE(t),
    openCharMarkers: SE(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Hc(t, r),
    anchorRect: PE()
  };
}
function OE() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!v(t) || O(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = YM.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function wE(e, t, r) {
  Hg(e, t, r), Rl(e);
}
function qE(e, t, r) {
  const n = w();
  if (!N(n)) return;
  const i = n.focus.getNode(), s = nt(i, ae);
  if (t === "backslash" && s && EE(s, i, n.focus.offset)) {
    wE(s, e, r);
    return;
  }
  Zg(e, r);
}
function RE(e, t) {
  const r = w();
  return !N(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Qg(e) {
  const t = w();
  return N(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function $E(e, t, r, n) {
  if (N(w()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && OE(), e.kind === "closeTag") {
    Qg(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Gg() !== "declined") return;
  if (e.kind === "paragraph" && Ze.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    qE(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Ee.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return hg(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  ec(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Zn(), reference: r });
}
function Zg(e, t) {
  const r = w();
  if (!N(r)) return;
  const n = gi(t);
  if (fg()) {
    const s = w();
    if (!N(s)) return;
    const o = nt(s.anchor.getNode(), ae);
    if (!o) return;
    o.setMarker(e), n && $l(o);
    return;
  }
  const i = r.insertParagraph();
  ae(i) && (n ? no(i, e) : i.setMarker(e));
}
function IE() {
  const [e] = ce();
  return z(() => e.registerCommand(Sf, () => !0, Tt), [e]), null;
}
function LE(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = VM.exec(e)?.[1];
  return r === void 0 ? !1 : !ql(r, t);
}
function em(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !LE(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ae(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (ae(i))
    return [i, r];
}
function tm(e, t) {
  const r = em(e, t.getMarker);
  return r !== void 0 && Fg(r, t);
}
function DE(e, t) {
  const r = w();
  N(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function rm(e) {
  const t = WM.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function UE(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = rm(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function FE(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (j(e.getParent()) && v(r)) {
    const n = r.getNextSibling();
    if (D(n)) {
      Vc(n);
      return;
    }
  }
  v(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Gd(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = rm(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  FE(e);
}
function Jd(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function nm(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Vt(e, r);
  const n = UE(e), i = e.getParent();
  if (ae(i)) {
    if (!ql(t, r.getMarker))
      return tm(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Vt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Jd(s, t) && Gd(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (D(i) || j(i)) {
    const s = t.replace(/^\+/, "");
    if (!(D(i) ? aE(t, r.getMarker) : Ee.isValidMarker(s)))
      return Vt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Vt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(O).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (DE(c, rt(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Jd(a, s) && Gd(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Vt(e, r);
}
function zE(e) {
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
function KE(e, t) {
  const r = e.getTextContent();
  if (Xr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Le(e.getParent()) && Uc(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !zE(e)) {
    $k(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = jM.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), nm(e, n[1], t);
      return;
    }
    if (BM.test(r)) {
      t.pendingKeys.delete(e.getKey()), Vt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = rt(e.getMarker(), e.getNested());
    if (D(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = w(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = pe(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function jE(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (Jp(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function im(e) {
  if (!If(e)?.length)
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
const wi = im("v"), BE = im("c"), Yd = /^[ \u00A0]*$/;
function Xd(e, t, r) {
  const n = e.getNextSibling();
  if (v(n) && n.getType() === Ke.getType() && n.getMode() === "normal" && ne(n, oe) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = pe(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function VE(e, t) {
  const r = e.getTextContent(), n = Lt("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (wi.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = wi.valueAndRest.exec(c);
    if (l && Yd.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (wi.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = wi.valueAndRest.exec(r);
  if (!s) {
    const c = wi.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = w(), p = N(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Lt("v", u));
      const m = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      Xd(e, d, m);
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
  if (t.pendingKeys.delete(e.getKey()), Yd.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Lt("v", o)), a && Xd(e, a, a.length);
}
const WE = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function HE(e, t) {
  const r = e.getParent();
  if (!j(r) || r.getIsCollapsed() !== !1 || !If(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!O(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === At(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = WE.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(At(a)), !0;
}
function GE(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!v(t)) return;
  const r = Lt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = BE.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function sm(e) {
  if (Be(e)) {
    const { wrapper: t } = ko(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (j(e)) {
    const { wrapper: t } = $p(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Pe(e)) {
    const t = [], r = Ip(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Dp(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Oe(e)) {
    const t = [], r = Yi(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = Yi(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function JE(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return sm(e).some((n) => r.is(n));
}
function YE(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ae(e) && Pp(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Qi)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && gs(l, e) && (i || JE(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of sm(e))
    l.remove(), n = !0;
  let s = !1;
  if (D(e)) {
    const l = Fk(e);
    l !== void 0 && xb(l) && (zp(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Qi)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (RT(l, e)) {
        es(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && ih(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Co(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function Qd(e) {
  return v(e) && e.getType() === Ke.getType() && e.getMode() === "normal" && ne(e, oe) !== "attribute";
}
function XE(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = se(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && Qd(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && Qd(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function As(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = XE(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = se(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (O(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (Xr(c)) continue;
      const m = Ag.exec(p);
      c.getMarkerSyntax() === "opening" && m ? n = nm(c, m[1], e) || n : r === "idle" && Bd(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : tm(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Vt(c, e) || n;
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
    const f = YE(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && Bd(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = Vt(u, e) || n;
    }
  }
  return n;
}
function om(e) {
  if (Qr(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (D(t)) return Di(t) !== void 0;
  return !1;
}
function QE(e) {
  const t = _n(e);
  if (!t) return !1;
  const r = xn(t.kind);
  return !Co(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Zd(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (pt(t) || De(t) || Qp(t)) return !0;
  return !1;
}
function ZE(e, t) {
  const r = e.getTextContent(), n = ne(e, oe), i = e.getParent();
  if (n !== "attribute" && Pe(i)) {
    r.replace(/^[ \u00A0]+/, "") === Lt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (HE(e, t)) return;
  if (n === "attribute") {
    QE(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && om(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Zd(e))
      t.pendingKeys.add(e.getKey());
    else if (Up(e)) t.pendingKeys.add(e.getKey());
    else if (Pe(as(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      D(a) && Kp(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Zd(e)) return;
  const s = w(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (HM.test(o)) {
    if (Nb(r)) {
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
function eA(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : ih(e, t);
}
function tA(e) {
  const t = (r) => {
    if (O(r)) {
      Xr(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (Qr(r)) {
      Jp(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Qi)
      n.settleScope !== "none" && n.ownerPredicate(r) && (gs(n, r) || eA(n, r)) && e.pendingKeys.add(r.getKey());
    if (Oe(r)) {
      r.getTextContent() !== Lt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (v(r)) {
      if (r.getType() !== Ke.getType() || ne(r, oe) === "attribute") return;
      const n = r.getParent();
      if (Pe(n)) {
        r.getTextContent() !== Lt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && om(r) || i.includes("//") || Up(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (D(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!De(r) && !pt(r)) {
      if (Le(r) && r.getChildrenSize() === 0) {
        const n = _n(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      F(r) && r.getChildren().forEach(t);
    }
  };
  Fe().getChildren().forEach(t);
}
const io = "usfm:", am = "usfmopen", cm = "usfmclosed";
function rA(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const nA = new RegExp(
  [io, am, cm].map(rA).join("|")
), iA = "\uFEFF", sA = /^usfm_(.+)$/;
function oA(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function aA(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function cA(e) {
  return e.startsWith(io) ? aA(e.slice(io.length)).replace(/\r\n?|\n/g, " ") : "";
}
function lm(e) {
  for (const t of e.classList) {
    const r = sA.exec(t);
    if (r) return r[1];
  }
}
function lA(e) {
  const t = lm(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function uA(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(io)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(am) && !n.contains(cm)) && lm(r) !== void 0)
      return !0;
  }
  return !1;
}
function um(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(cA(e.nodeValue ?? ""));
    return;
  }
  if (!oA(e)) return;
  const { classList: n } = e, i = (u) => e.childNodes.forEach((d) => um(d, u, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? lA(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function dA(e) {
  if (!nA.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !uA(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => um(n, !1, r)), r.join("").replaceAll(iA, "").replaceAll(I, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function fA(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ne(e, oe);
  if (r === "attribute" || r === fr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (pt(o) || Pe(o) || De(o)) return;
  const n = t.startsWith(I) && D(e.getParent()), i = n ? t.slice(1) : t, s = (n ? I : "") + i.replace(/ (?=[ \u00A0])/g, I).replace(new RegExp("(?<=\\u00A0) ", "g"), I);
  s !== t && e.setTextContent(s);
}
function pA(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function hA(e, t) {
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
function cc(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? dA(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(pA(s)) : ""),
    isInternal: hA(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const ef = String.raw`\\(?:\+?[${er}]+\*?|\*)`, gA = new RegExp(
  String.raw`(?<=${ef})\u00A0|\u00A0(?=${ef})`,
  "g"
);
function Il(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(gA, " ").replaceAll(I, "~");
}
const dm = new RegExp(
  String.raw`\\c(?![${er}])[ \u00A0]*[^\s\\]*`,
  "g"
), fm = new RegExp(String.raw`\\id(?![${er}])[^\n\\]*`, "g"), mA = new RegExp(
  String.raw`^(?:${dm.source}|${fm.source})`
);
function Ll(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(dm, "").replace(fm, "");
    return mA.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function lc(e) {
  if (v(e) && ne(e, oe) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Le(t)) return !0;
  return !1;
}
function yA(e) {
  return lc(e.anchor.getNode()) || lc(e.focus.getNode());
}
function bA(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && lc(t.getNode());
}
function kA(e, t) {
  const n = bA(e) ? t : Il(Ll(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function TA(e, t = !1, r = () => {
}) {
  const n = cc(e, Zn()._config.namespace);
  if (!n) return !1;
  const i = w(), s = N(i) && yA(i);
  if (!s && n.isInternal || t && N(i) && Qn(i))
    return !1;
  const { text: o } = n;
  if (!o || !N(i)) return !1;
  if (e?.preventDefault(), s)
    return kA(i, o), !0;
  const a = Il(Ll(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = Zn();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(Rs, void 0), u === "") return;
    const f = w();
    N(f) && f.insertText(u);
  }), !0;
}
function xA(e) {
  if (e.getTextContent() !== I) return !1;
  const t = e.getParent();
  return j(t) ? !St(e.getPreviousSibling()) : !1;
}
function _A(e, t) {
  if (t || e.getTextContent() !== I) return "";
  const r = e.getParent();
  if (!j(r) || !St(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function CA(e) {
  const t = e.getParent();
  return (j(t) ? t.getCaller() : void 0) || Bi;
}
function SA(e) {
  const t = e.getParent();
  return !t || Gr(t) === void 0;
}
function pm(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = kc(e);
  let l = "", u = !0;
  for (const d of t) {
    if (F(d) && !d.isInline()) {
      !u && SA(d) && (l += `
`), u = !d.isEmpty();
      continue;
    }
    if (u = !1, St(d))
      (d !== n || !e.isCollapsed()) && (l += (d === r ? "" : " ") + CA(d));
    else if (v(d)) {
      let f = d.getTextContent();
      d === r ? d === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : d === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += xA(d) ? "" : f.replaceAll(I, " ") + _A(d, d === n);
    } else (uo(d) || us(d)) && (d !== n || !e.isCollapsed()) && (l += d.getTextContent().replaceAll(I, " "));
  }
  return l;
}
function hm(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function vA(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => pt(r) || Pe(r)
    )
  );
}
function MA(e) {
  const t = w();
  if (!N(t) || t.isCollapsed()) return;
  const r = pm(t), n = {
    "text/plain": r,
    "text/html": hm(r)
  };
  if (Po() || vA(t)) return n;
  const i = Dy(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function tf(e, t, r) {
  const n = w();
  if (!N(n) || n.isCollapsed())
    return (!e || !("clipboardData" in e)) && !zh();
  const i = MA(t);
  return i ? gm(e, t, n, i, r) : !1;
}
function gm(e, t, r, n, i) {
  const s = !n["text/plain"], o = i && t.isEditable();
  if (!e || !("clipboardData" in e))
    return s || Uy(t, null, n), o && r.removeText(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !s)
    for (const [a, c] of Object.entries(n)) e.clipboardData.setData(a, c);
  return o && r.removeText(), !0;
}
const mm = vf(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function ka(e) {
  const t = e();
  return jr(kf), jr(Ff), t;
}
const rf = 8, EA = 1e3;
function Wn(e, t) {
  const r = Oe(e) ? ["va", "vp"] : Be(e) ? ["milestone"] : j(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    UT(xn(n), e, t.pendingKeys);
}
function AA(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Cc) || i.updateTags.has(Vi)) return;
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
    e.registerMutationListener(hr, r),
    e.registerMutationListener(Er, r),
    e.registerMutationListener(Ar, r)
  );
}
function uc(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = w();
  return r ? t ? Jh(r, t) : N(r) && Qn(r) : !1;
}
function PA(e, t, r) {
  return Ve(
    e.registerCommand(
      yr,
      (n) => {
        if (Po() || uc(t)) return !1;
        const i = cc(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? Il(Ll(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = Wd(o, t.getMarker);
          if (a === "declined" && _E(e) && (a = Wd(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      Wt
    ),
    e.registerCommand(
      yr,
      (n) => {
        const i = cc(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !aM()) return !1;
        const o = w();
        return t.structureProtectionMode === "protected" && N(o) && Qn(o) ? !1 : (n?.preventDefault(), N(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Rs, void 0), a === "") return;
          const l = w();
          N(l) && l.insertText(a);
        }), !0);
      },
      Ne
    ),
    e.registerCommand(
      yr,
      () => (t.splitExpected.current = !0, !1),
      Tt
    )
  );
}
function NA({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off"
}) {
  const [s] = ce(), o = e?.markerMode === "editable", a = !!e && Ao(e), c = Z(void 0), l = Z(n);
  return z(() => {
    l.current = n;
    const u = c.current;
    u && (e && (u.viewOptions = e), u.getMarker = t ?? lr, u.logger = r, u.structureProtectionMode = i);
  }, [e, t, r, n, i]), z(() => {
    if (!o || !e) return;
    const u = {
      viewOptions: e,
      getMarker: t ?? lr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r,
      structureProtectionMode: i
    };
    c.current = u;
    const d = NT(s, u.pendingKeys);
    let f, p = !1, m, g = !1, y = !1, k = 0;
    const _ = () => k < rf ? !1 : (u.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${rf} consecutive mutating passes; leaving ${u.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...u.pendingKeys].join(", ")}`
    ), !0), S = (M, q = "departure") => {
      s.update(() => {
        k = ka(
          () => As(u, M, q)
        ) ? k + 1 : 0;
      });
    };
    let P;
    const A = () => {
      if (P !== void 0 && clearTimeout(P), P = void 0, y || u.pendingKeys.size === 0) return;
      const M = l.current ?? EA;
      M < 0 || (P = setTimeout(() => {
        P = void 0, !(y || u.pendingKeys.size === 0) && (p || _() || S(void 0, "idle"));
      }, M));
    }, B = Ve(
      s.registerNodeTransform(hr, (M) => {
        if (s.isComposing()) return;
        KE(M, u);
        const q = _n(M);
        q && (Oe(q.owner) || j(q.owner) || Pe(q.owner) || Be(q.owner) && ko(q.owner).wrapper === void 0) && Wn(q.owner, u);
      }),
      s.registerNodeTransform(dt, (M) => {
        s.isComposing() || (VE(M, u), Wn(M, u));
      }),
      s.registerNodeTransform(Nt, (M) => {
        s.isComposing() || (GE(M), M.isAttached() && Wn(M, u));
      }),
      s.registerNodeTransform(Ze, (M) => {
        s.isComposing() || mE(M, u);
      }),
      s.registerNodeTransform(me, (M) => {
        if (!s.isComposing()) {
          TE(M, u);
          for (const q of ["separator", "char"])
            M.isAttached() && gs(xn(q), M) && u.pendingKeys.add(M.getKey());
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
      s.registerNodeTransform(Jt, (M) => {
        s.isComposing() || Wn(M, u);
      }),
      s.registerNodeTransform(Ar, (M) => {
        if (s.isComposing()) return;
        const q = _n(M);
        q && (Be(q.owner) || Oe(q.owner) || j(q.owner) || Pe(q.owner)) && Wn(q.owner, u);
      }),
      s.registerNodeTransform(Ee, (M) => {
        s.isComposing() || (kE(M, u), Wn(M, u));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      s.registerNodeTransform(Or, (M) => {
        s.isComposing() || jE(M, u);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      s.registerNodeTransform(Ke, (M) => {
        s.isComposing() || ZE(M, u);
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
              !J || ne(J, oe) !== "attribute" || Le(J.getParent()) || s.getElementByKey(q)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      AA(s, u),
      ...a ? [
        s.registerNodeTransform(Ke, (M) => {
          s.isComposing() || fA(M);
        }),
        s.registerCommand(
          fo,
          (M) => tf(
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
            tf(
              M && typeof M == "object" && "clipboardData" in M ? M : null,
              s,
              !0
            )
          ),
          Ne
        ),
        s.registerCommand(
          yr,
          (M) => TA(
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
        () => (!uc(u) && !Po() && oc(u), !1),
        Wt
      ),
      s.registerCommand(
        Tc,
        () => (s.isComposing() || pE(u), !1),
        Jn
      ),
      s.registerCommand(
        lo,
        () => (p = !1, k = 0, A(), !1),
        Tt
      ),
      s.registerCommand(
        vr,
        (M) => (p = !1, k = 0, A(), (M.key === "Backspace" || M.key === "Delete") && !uc(u, Vh(M)) && (oc(u), fE(u), queueMicrotask(() => {
          u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear();
        })), s.isComposing() || !M.ctrlKey || M.altKey || M.shiftKey || M.metaKey || M.key !== " " && M.code !== "Space" || !oM() ? !1 : (M.preventDefault(), !0)),
        Ne
      ),
      s.registerCommand(
        _f,
        (M) => {
          const q = Gg();
          q === "needs-plain-split" && s.dispatchCommand(Rs, void 0);
          const $ = q !== "declined" || FT();
          return $ && M?.preventDefault(), As(u), $;
        },
        Ne
      ),
      s.registerCommand(
        Rs,
        () => (u.splitExpected.current = !0, fg()),
        Ne
      ),
      PA(s, u, a),
      s.registerCommand(
        mm,
        () => {
          if (p) return !0;
          const M = s.getRootElement(), q = M?.ownerDocument, $ = !!M && !!q && q.hasFocus() && M.contains(q.activeElement);
          let J;
          if ($) {
            const Q = w();
            J = N(Q) ? Q.focus.key : f;
          }
          return ka(() => As(u, J)), !0;
        },
        Tt
      ),
      s.registerCommand(
        _c,
        () => {
          if (p) return !1;
          const M = w(), q = N(M) ? M.focus.key : f;
          return ka(() => As(u, q)), !1;
        },
        Tt
      ),
      s.registerUpdateListener(({ editorState: M, tags: q }) => {
        u.splitExpected.current = !1, u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear(), u.rebuildAttempted.clear();
        const $ = M.read(() => {
          const Q = w();
          return N(Q) ? Q.focus.key : void 0;
        }), J = m;
        if ($ !== void 0 && (m = $), q.has(Cc)) {
          u.pendingKeys.clear(), M.read(() => tA(u)), p = !0, $ !== void 0 && (f = $);
          return;
        }
        if (q.has(Br)) {
          $ !== void 0 && $ !== J && (p = !0);
          return;
        }
        p || ($ !== void 0 && (f = $), A(), !(g || $ === void 0) && [...u.pendingKeys].some((Q) => Q !== $) && (g = !0, queueMicrotask(() => {
          g = !1, !y && (_() || S(f));
        })));
      })
    );
    return () => {
      y = !0, P !== void 0 && clearTimeout(P), P = void 0, d(), B(), c.current = void 0;
    };
  }, [s, o, a]), null;
}
const OA = ["status_unknown", "status_invalid"], ym = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, wA = Object.values(ym);
function qA(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = ym[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function nf(e) {
  e.classList.remove(...OA), e.removeAttribute("aria-description"), wA.includes(e.title) && e.removeAttribute("title");
}
function RA(e, t, r, n) {
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
function $A(e) {
  const t = se(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : O(t) && t.getParent()?.getKey() === r.getKey();
}
function IA({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ce(), i = e?.markerMode === "editable";
  return z(() => {
    if (!i) return;
    const s = t ?? Vs;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = wM(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || $A(f)) continue;
            const m = se(f)?.getTopLevelElement();
            !m || l.has(m.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && nf(p);
        }
        for (const [f, p] of d) {
          const m = n.getElementByKey(f);
          m && qA(m, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          RA(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && nf(u);
      }
    };
  }, [n, i, t, r]), null;
}
function LA(e, t) {
  const r = ll(ol), n = tl();
  if (!r || !n?.end) return;
  const i = Os.deserializeEditorState(e.getEditorState(), t);
  if (!i) return;
  const s = $y({
    namespace: "markers-view-copy",
    nodes: [Qe, ...nl],
    onError: (a) => {
      throw a;
    }
  });
  return s.parseEditorState(
    Cr.serializeEditorState(i, r)
  ).read(
    () => {
      const a = Mo(n);
      return a ? pm(a) : void 0;
    },
    { editor: s }
  );
}
function DA({ viewOptions: e }) {
  const [t] = ce();
  return z(() => {
    const r = (n, i) => {
      const s = w();
      if (!N(s) || s.isCollapsed()) return !1;
      const o = LA(t, e);
      return o === void 0 ? !1 : gm(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        n && typeof n == "object" && "clipboardData" in n ? n : null,
        t,
        s,
        { "text/plain": o, "text/html": hm(o) },
        i
      );
    };
    return Ve(
      t.registerCommand(fo, (n) => r(n, !1), Ne),
      t.registerCommand(yn, (n) => r(n, !0), Ne)
    );
  }, [t, e]), null;
}
function bm(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Sr(o);
    a && F(s) && bm(s.getChildren(), a, r);
  }
}
function km(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Sr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = ci(o);
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
function Tm(e, t, r) {
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
function xm(e, t) {
  const r = [];
  for (const n of e)
    wg(n, t) || ((ae(n) || D(n)) && r.push(n.getMarker()), F(n) && r.push(...xm(n.getChildren(), t)));
  return r;
}
function _m(e) {
  const t = [];
  for (const r of e) {
    const n = Pl(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Sr(r);
    i && t.push(..._m(i));
  }
  return t;
}
function Dl(e, t, r) {
  const n = xm(e, r), i = _m(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function UA(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = w();
  let n, i;
  if (N(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = se(t.key), i = t.offset;
  else
    return;
  if (!(!v(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
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
function FA(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  for (const y of e) {
    const k = Nl(y, o, s);
    if (!k) return;
    c.text.length > 0 && (c.text += " ");
    const _ = c.text.length;
    k.spans.forEach(
      (S) => c.spans.push({ ...S, start: S.start + _, end: S.end + _ })
    ), c.sentinels.push(...k.sentinels), c.text += k.text;
  }
  const l = i ? Ul(c, i) : c.text, u = Mr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (qn(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = Cr.serializeEditorState(
    { type: kr, version: br, content: u },
    s
  ).root.children;
  if (qo(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Tm(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (ki(d, o) === bi(e, o) && Dl(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  km(d, f);
  const m = zA(e), g = Cm(d);
  for (let y = 0; y < m.length && y < g.length; y++)
    m[y].sid !== void 0 && g[y].number === m[y].number && (g[y].sid = m[y].sid);
  return d;
}
function zA(e) {
  const t = [], r = (n) => {
    Oe(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : F(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Cm(e) {
  const t = [];
  for (const r of e) {
    bp(r) && t.push(r);
    const n = Sr(r);
    n && t.push(...Cm(n));
  }
  return t;
}
function KA(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = zg(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? Ul(l, i) : l.text, f = Mr(d, {
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
  const m = p.content ?? [], g = Kg(m), y = e.getCategory() !== g, k = Ng(e, m, g, s);
  if (k.failure !== void 0) {
    k.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : k.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const _ = k.children;
  if (qo(_) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const S = Tm(l, t, n);
  if (!S) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (ki(_, o) === bi(u, o) && Dl(u, _, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: g, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return km(_, S), { rebuilt: _, contentNodes: u, category: g, categoryChanged: y };
}
function sf(e) {
  return e.$?.textType;
}
function jA(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && sf(e) === sf(t);
}
function BA(e) {
  const t = [];
  for (const r of e) {
    const n = se(r);
    n?.isAttached() && De(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function VA(e) {
  if (!O(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!j(t)) return;
  const r = e.getTextContent();
  if (Xr(e)) return;
  const n = Ag.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function of(e, t) {
  const r = e;
  r.marker = t, r.text = Rg(t, r.markerSyntax, r.nested);
}
function WA(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Ee.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && of(a.node, s);
  const c = n.getChildren().filter(O).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && of(l.node, s);
}
function HA(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Vg(e, i, n);
  if (!o) return;
  const a = r ? Ul(o, r) : o.text, c = Mr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (qn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = Cr.serializeEditorState(
    { type: kr, version: br, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...$o(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && ki(u, i) === bi(d, i) && Dl(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function GA(e, t, r, n, i) {
  const s = UA(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = (y) => {
    j(y) ? c.set(y.getKey(), y) : Pe(y) ? l.set(y.getKey(), y) : o.set(y.getKey(), [y]);
  };
  for (const y of t) {
    const k = se(y);
    if (!k?.isAttached()) continue;
    const _ = as(k);
    if (_) {
      if (d(_), O(k)) {
        const S = em(k, r.getMarker);
        S && a.push(S);
      }
      if (j(_)) {
        const S = VA(k);
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
    const y = as(s.node);
    y && d(y);
  }
  const p = BA(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && p.length === 0)
    return;
  const m = new Set(p.map((y) => y.getKey())), g = /* @__PURE__ */ new Map();
  bm(Fe().getChildren(), e.root.children, g);
  for (const y of u.values()) WA(y, g);
  for (const y of c.values()) {
    const k = g.get(y.getKey()), _ = k ? Sr(k.node) : void 0;
    if (!k || !_) continue;
    const S = KA(y, g, r, m, s);
    if (!S) continue;
    if (S.categoryChanged) {
      const B = k.node;
      S.category === void 0 ? delete B.category : B.category = S.category;
    }
    if (!S.rebuilt) continue;
    const P = g.get(S.contentNodes[0].getKey());
    if (!P) continue;
    const A = _.indexOf(P.node);
    A < 0 || _.splice(A, S.contentNodes.length, ...S.rebuilt);
  }
  for (const y of o.values()) {
    const k = g.get(y[0].getKey());
    if (!k) continue;
    const _ = FA(y, g, r, m, s);
    if (!_) continue;
    const S = k.siblings.indexOf(k.node);
    S < 0 || k.siblings.splice(S, y.length, ..._);
  }
  for (const y of l.values()) {
    const k = g.get(y.getKey());
    if (!k) continue;
    const _ = 1 + $o(y).length, S = HA(y, r, s);
    if (!S) continue;
    const P = k.siblings.indexOf(k.node);
    P < 0 || k.siblings.splice(P, _, ...S);
  }
  for (const y of p) {
    const k = g.get(y.getKey());
    if (!k) continue;
    const _ = k.siblings.indexOf(k.node);
    if (_ < 0) continue;
    k.siblings.splice(_, 1);
    const S = k.siblings[_ - 1], P = k.siblings[_], A = S && ci(S), B = P && ci(P);
    S && P && A !== void 0 && B !== void 0 && jA(S, P) && (S.text = A + B, k.siblings.splice(_, 1));
  }
  return ig(e, r.viewOptions);
}
function JA({
  viewOptions: e,
  logger: t
}) {
  const [r] = ce(), n = gi(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return z(() => {
    if (n)
      return r.registerNodeTransform(
        Ze,
        (i) => YA(i, t)
      );
  }, [r, n, t]), null;
}
function YA(e, t) {
  e.getMarker() !== cr && (e.isEmpty() || Ft(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${cr}" (key ${e.getKey()})`
  ), e.setMarker(cr)));
}
function XA({
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
    i.scrRef = e, i.onScrRefChange = t, so(s, e) || QA(i, r, e);
  }, [r, e, t]), z(
    () => r.registerMutationListener(
      Ut,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = dc(r);
        af(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Ps(s) === Ps(r.getEditorState())
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
      f && (dc(r) || af(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: Ps(a) === Ps(c)
      }));
    };
    return Ve(
      ...[Nt, pr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), z(
    () => r.registerCommand(
      ur,
      () => {
        const i = n.current;
        return i.phase === "idle" && r1(i, e1()), !1;
      },
      Tt
    ),
    [r]
  ), z(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(ur, void 0));
    };
    return Ve(
      r.registerMutationListener(Ct, i),
      r.registerMutationListener(dt, i)
    );
  }, [r]), z(() => {
    const i = () => o1(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function QA(e, t, r) {
  if (ZA(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = dc(t);
  (!n || n === r.book) && t.update(() => Sm(r.chapterNum, r.verseNum), {
    tag: Br
  });
}
function ZA(e, t) {
  const r = e.pendingEchoes.findIndex((n) => so(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function e1() {
  const e = w(), t = $c(e);
  if (!t) return;
  const r = Fl(), n = xp(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = Yc(t, e), { verseNum: o, verse: a } = lx(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function dc(e) {
  return e.getEditorState().read(() => Fl()?.getCode() || void 0);
}
function Fl() {
  return Fe().getChildren().find(pt);
}
function af(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Ta(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Ta(e, t), e.phase = "navigating") : i && Ta(e, t), r && r !== e.scrRef.book && Em(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Ta(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Sm(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Br }
    );
  });
}
function Sm(e, t) {
  const r = $c(w()), n = Xc(r)?.getNumber(), i = xp(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Ep(n) ? Mm(t, n) : parseInt(n, 10) === t))
    return;
  const o = Fe().getChildren(), a = Tp(o, e);
  if (!a) return;
  const c = Ck(o, a), l = mk(c, !0);
  _k(c, l);
  let u;
  try {
    u = ix(c, t);
  } catch {
    return;
  }
  u && (ae(u) ? !v(u.getFirstChild()) && yi(u) || Qt(u, 0) : t1(u));
}
function t1(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ge(n)) {
    Qt(t, r);
    return;
  }
  const i = _o(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (v(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = F(n) && !j(n) ? vm(n) : void 0;
  s ? s.select(0, 0) : Qt(t, r);
}
function vm(e) {
  const t = e.getFirstChild();
  if (v(t)) return t;
  if (F(t) && !j(t)) return vm(t);
}
function Ps(e) {
  return e.read(() => {
    const t = Fe().getChildren().find(Ge);
    return `${Fl()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function r1(e, t) {
  e.phase !== "navigating" && t && (n1(t, e.scrRef) || Em(e, i1(t, e.scrRef)));
}
function n1(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Mm(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Mm(e, t) {
  try {
    return Ic(e, t);
  } catch {
    return !1;
  }
}
function i1(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const s1 = 8;
function Em(e, t) {
  return so(t, e.scrRef) || e.pendingEchoes.some((r) => so(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > s1 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function so(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function o1(e) {
  e.phase = "idle";
}
function a1(e) {
  return pt(e) ? `${e.__code}` : Pe(e) ? `${e.__marker} "${e.__number}"` : D(e) ? `${e.__marker}` : fs(e) ? `${e.__marker} "${e.__number}"` : St(e) ? `${e.__caller}` : wn(e) ? `${e.__marker} "${e.__number}"` : j(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ae(e) ? `${e.__marker}` : v(e) ? `"${e.__text}"${c1(e)}` : Ce(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Oe(e) ? `${e.__marker} "${e.__number}"` : "";
}
function c1(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[ds]) : "";
}
function l1() {
  const [e] = ce();
  return /* @__PURE__ */ C(
    Fy,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: a1,
      editor: e
    }
  );
}
const Am = gf(null), cf = 4;
function u1({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Z(null), s = mf(Am);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return z(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ C("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function d1({
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
  }, [n, s]), /* @__PURE__ */ C(Am.Provider, { value: l, children: /* @__PURE__ */ C("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function f1({
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
      p.style.top = `${m + f.offsetHeight + cf}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
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
          const { top: g } = p.getBoundingClientRect(), y = g + p.offsetHeight + cf;
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
      /* @__PURE__ */ C(d1, { dropDownRef: a, onClose: d, children: s }),
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
function p1({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ C(
    f1,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + h1(t),
      buttonLabel: g1(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(fc).map((n) => /* @__PURE__ */ Te(
        u1,
        {
          className: "item block-marker " + m1(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ C("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ C("span", { className: "text usfm_" + n, children: fc[n] })
          ]
        },
        n
      ))
    }
  );
}
function h1(e) {
  return e && e in pc ? e : "ban";
}
function g1(e) {
  return e && e in pc ? pc[e] : "No Style";
}
function m1(e) {
  return e ? "active dropdown-item-active" : "";
}
function lf() {
  return /* @__PURE__ */ C("div", { className: "divider" });
}
const y1 = En(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
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
    ur,
    (g, y) => (a(y), !1),
    Wt
  ), [s]), /* @__PURE__ */ Te(gn, { children: [
    /* @__PURE__ */ C(Bh, { onStateChange: m }),
    /* @__PURE__ */ Te("div", { className: "toolbar", children: [
      /* @__PURE__ */ C(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(Mf, void 0);
          },
          title: $s ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(Ef, void 0);
          },
          title: $s ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ C("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ C(lf, {}),
      o === s && /* @__PURE__ */ Te(gn, { children: [
        /* @__PURE__ */ C(
          p1,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ C(lf, {})
      ] }),
      /* @__PURE__ */ C("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), b1 = Eo(), k1 = {}, T1 = {};
function x1() {
  return /* @__PURE__ */ C("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
const Pm = En(function({
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
  const d = Z(null), f = Z(null), p = Z(null), m = Z(t), g = Z(void 0), y = Z(void 0), k = Z(void 0), _ = Z(void 0), S = Z(!1), [P, A] = de(t), [B, M] = de(0), [q, $] = de(), {
    isReadonly: J = !1,
    structureProtectionMode: Q = "off",
    hasExternalUI: Me = !1,
    hasSpellCheck: re = !1,
    textDirection: qe = "ltr",
    markerMenuTrigger: be = "\\",
    view: tr,
    nodes: Re,
    debug: en = !1,
    contextMenu: gr,
    styleInfo: vt,
    markerSettleDelayMs: te
  } = a ?? T1, E = tr ?? b1, Y = ns(E) && (E.markerMode !== "hidden" || !E.hasSpacing || E.hasGutterParaMarkers || E.hasActiveTextFocusBox) ? {
    ...E,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : E, le = Z(Y);
  wt(le.current, Y) || (le.current = Y);
  const W = le.current, xe = ze(() => Re ?? k1, [Re]), ht = ze(() => gr, [gr]), zt = ze(
    () => JT(vt ?? Vs),
    [vt]
  ), gt = Z(c);
  wt(gt.current, c) || (gt.current = c);
  const We = gt.current, ct = ns(W), ue = J || ct, Rn = Y !== E;
  z(() => {
    ct && !J && We?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), Rn && We?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), W?.markerMode === "visible" && !J && We?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [ct, J, Rn, We, W?.markerMode]);
  const ye = Z(null), Ti = ze(() => {
    if (W.markerMode !== "editable") return;
    const R = vt ?? Vs;
    return {
      getContext: () => ye.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (K) => FM(
        R,
        K,
        xe.extraValidMarkers
      ),
      getEnterItems: (K) => zM(
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
  }, [W, vt, xe.extraValidMarkers]), ve = (R) => {
    S.current || (S.current = !0, gt.current?.warn(
      `Editor: cannot ${R} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, wr = (R) => {
    if (ct)
      throw new Error(
        `Cannot ${R} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, qr = (R) => {
    if (wr(R), ue) throw new Error(`Cannot ${R} in readonly mode`);
  }, rr = ze(
    () => ({
      namespace: "platformEditor",
      theme: { ..._g, showCharMarkerTitles: W.showCharMarkerTitles },
      editable: !ue,
      editorState: void 0,
      // Handling of errors during update
      onError(R) {
        throw R;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [Qe, ...ct ? a_ : nl]
    }),
    [ue, ct, W.showCharMarkerTitles]
  );
  Os.initialize(We);
  function Rr(R) {
    if (R !== void 0 && !cM(R, xe.extraValidMarkers))
      throw new Error(`Unsupported character marker '${R}'`);
  }
  const tn = he(() => {
    const R = d.current;
    if (!R) return m.current;
    const K = Ou(R), G = y.current;
    if ((!K || K.size === 0) && !G) return m.current;
    const X = R.getEditorState(), _e = X.toJSON();
    return X.read(
      () => GA(
        _e,
        K ?? /* @__PURE__ */ new Set(),
        { viewOptions: W, getMarker: zt, logger: We },
        G,
        k.current
      )
    ) ?? m.current;
  }, [W, zt, We]), xi = {
    focus() {
      d.current?.focus();
    },
    isFocused() {
      const R = d.current?.getRootElement();
      return !!R && R.ownerDocument.activeElement === R;
    },
    undo() {
      d.current?.dispatchCommand(Mf, void 0);
    },
    redo() {
      d.current?.dispatchCommand(Ef, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      qr("cut"), d.current && pl(d.current);
    },
    copy() {
      d.current && fl(d.current);
    },
    paste() {
      qr("paste"), d.current && hl(d.current);
    },
    pastePlainText() {
      qr("paste as plain text"), d.current && gl(d.current);
    },
    getUsj() {
      return tn();
    },
    commitPendingMarkerEdits() {
      d.current?.update(
        () => {
          d.current?.dispatchCommand(mm, void 0);
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
        return N(G) && G.isCollapsed() ? G.focus.key : void 0;
      });
      y.current = { input: R, nodeKey: K ?? k.current?.key };
    },
    setUsj(R) {
      if (!wt(m.current, R)) {
        m.current = R, y.current = void 0;
        const K = wt(P, R);
        A(R), K && M((G) => G + 1);
      }
    },
    applyUpdate(R, K = "remote") {
      if (ct && K === "remote") {
        gt.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      wr("apply an update"), d.current?.update(
        () => {
          K === "remote" && jr(Vi), R_(R, W, xe, We);
        },
        { discrete: !0 }
      );
      const G = d.current?.getEditorState();
      if (!G) return;
      const X = Os.deserializeEditorState(G, W);
      if (X) {
        const _e = !wt(m.current, X);
        if (_e && (m.current = X), _e || !wt(P, X)) {
          const lt = ju(R, G, "apply");
          _.current = X, s?.(X, R, K, lt);
        }
      }
    },
    replaceEmbedUpdate(R, K) {
      const G = d.current?.read(() => xx(R, K));
      G ? this.applyUpdate(G) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${R}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (ct) {
        ve("get the selection");
        return;
      }
      return d.current?.read(tl);
    },
    setSelection(R) {
      if (ct) {
        ve("set the selection");
        return;
      }
      d.current?.update(() => {
        const K = Mo(R);
        K !== void 0 && (ei(K), jr(Uf));
      });
    },
    setAnnotation(R, K, G, X, _e) {
      if (ct) {
        ve("set an annotation");
        return;
      }
      let lt, Ot, rn, nn;
      typeof X == "function" || X === void 0 ? (lt = X, Ot = _e) : (lt = X.onClick, Ot = X.onRemove, rn = X.onMouseEnter, nn = X.onMouseLeave), f.current?.setAnnotation(
        R,
        ku(K),
        G,
        lt,
        Ot,
        rn,
        nn
      );
    },
    removeAnnotation(R, K) {
      f.current?.removeAnnotation(ku(R), K);
    },
    formatPara(R) {
      qr("format a paragraph"), d.current?.update(
        () => {
          const K = w();
          if (!N(K)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${R}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          jy(K, () => Ji(R));
          const G = w();
          if (!N(G)) return;
          const X = /* @__PURE__ */ new Set();
          G.getNodes().forEach((_e) => {
            const lt = _e.getTopLevelElement();
            ae(lt) && X.add(lt);
          }), X.forEach((_e) => Hg(_e, R, W));
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
          N(G) && (K = mg(G, R, W));
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
          N(X) && (G = TM(X, R, K));
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
          N(X) && (G = xM(
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
      if (!Za(R, xe.extraValidMarkers))
        throw new Error(`Unsupported marker '${R}'`);
      const K = ec(
        R,
        g,
        W,
        xe,
        We,
        void 0,
        vt
      );
      return K.action({ editor: d.current, reference: r }), K.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!J)
        return d.current?.getEditorState().read(() => NE());
    },
    applyMarkerMenuSelection(R, K) {
      if (J) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if (R.kind !== "closeTag" && !Za(R.marker, xe.extraValidMarkers))
        throw new Error(`Unsupported marker '${R.marker}'`);
      let G;
      return d.current.update(() => {
        G = $E(R, K, r, {
          expandedNoteKeyRef: g,
          viewOptions: W,
          nodeOptions: xe,
          logger: c,
          styleInfo: vt
        });
      }), G;
    },
    splitParagraphWithMarker(R) {
      if (J) throw new Error("Cannot split paragraph in readonly mode");
      d.current && d.current.update(() => {
        Zg(R, W);
      });
    },
    commitTypedMarker(R, K) {
      if (J) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let G = !1;
      return d.current.update(() => {
        G = RE(R, K), G || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), G;
    },
    commitTypedCloser(R) {
      if (J) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let K = !1;
      return d.current.update(() => {
        K = Qg(R), K || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), K;
    },
    insertNote(R, K, G) {
      qr("insert a note"), d.current?.update(
        () => {
          const X = Th(
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
        const K = Ju(R);
        K && (i_(K, W), K.getIsCollapsed() || (g.current = K.getKey()));
      });
    },
    getNoteOps(R) {
      return d.current?.read(() => {
        const K = Ju(R);
        if (K)
          return Zc(K);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  ye.current = xi, gc(u, () => xi), z(() => {
    const R = d.current;
    if (R)
      return R.registerUpdateListener(({ editorState: K }) => {
        K.read(() => {
          const G = w();
          if (!N(G) || !G.isCollapsed()) return;
          const X = G.focus.getNode();
          v(X) && (k.current = { key: X.getKey(), offset: G.focus.offset });
        });
      });
  }, []);
  const ms = he(
    (R, K, G, X) => {
      if (ct) return;
      const _e = Os.deserializeEditorState(R, W);
      if (_e) {
        const lt = !wt(m.current, _e);
        if (lt && (m.current = _e), lt || !wt(P, _e)) {
          const Ot = ju(X, R);
          _.current = _e, s?.(_e, X, "local", Ot);
        }
      }
    },
    [P, s, W, ct]
  );
  z(() => {
    const R = d.current;
    if (!(!R || !s))
      return R.registerUpdateListener(({ tags: K, dirtyElements: G, dirtyLeaves: X }) => {
        !K.has(Cc) && (G.size === 0 && X.size === 0 || K.has(Vi) || !Ou(R)?.size) || queueMicrotask(() => {
          const _e = tn();
          !_e || wt(_.current, _e) || (_.current = _e, s(_e, void 0, "local", void 0));
        });
      });
  }, [s, tn]);
  const Kt = he(
    (R) => {
      $(R.contextMarker), o?.(R);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Te(Nf, { initialConfig: rr, children: [
      /* @__PURE__ */ C(DC, { isEditable: !ue }),
      /* @__PURE__ */ Te("div", { className: "editor-container", children: [
        Me ? /* @__PURE__ */ C(Bh, { onStateChange: Kt }) : /* @__PURE__ */ C(
          "div",
          {
            className: "editor-toolbar-container" + (ue ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ C(
              y1,
              {
                ref: p,
                editorRef: ye,
                isReadonly: ue,
                onStateChange: Kt
              }
            )
          }
        ),
        /* @__PURE__ */ Te("div", { className: "editor-inner", children: [
          /* @__PURE__ */ C(wf, { editorRef: d }),
          /* @__PURE__ */ C(
            Ky,
            {
              contentEditable: /* @__PURE__ */ C(
                Of,
                {
                  className: `editor-input usfm ${q_(W).join(" ")}${W.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${W.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: re
                }
              ),
              placeholder: /* @__PURE__ */ C(x1, {}),
              ErrorBoundary: qf
            }
          ),
          Me && /* @__PURE__ */ C(LC, {}),
          /* @__PURE__ */ C(Rf, {}),
          r && n && /* @__PURE__ */ C(XA, { scrRef: r, onScrRefChange: n }),
          r && !Me && /* @__PURE__ */ C(
            ov,
            {
              trigger: be,
              scrRef: r,
              contextMarker: q,
              getMarkerAction: (R) => ec(
                R,
                g,
                W,
                xe,
                We,
                void 0,
                vt
              ),
              editableHarness: Ti
            }
          ),
          /* @__PURE__ */ C(
            zC,
            {
              scripture: P,
              scriptureRef: m,
              nodeOptions: xe,
              editorAdaptor: Cr,
              viewOptions: W,
              logger: We
            },
            B
          ),
          /* @__PURE__ */ C(aS, { onChange: i }),
          /* @__PURE__ */ C(
            E_,
            {
              onChange: ms,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: ub
            }
          ),
          /* @__PURE__ */ C(MM, { viewOptions: W }),
          /* @__PURE__ */ C(v_, { ref: f, logger: We }),
          /* @__PURE__ */ C(oC, { viewOptions: W }),
          /* @__PURE__ */ C(TC, {}),
          /* @__PURE__ */ C(MC, {}),
          W?.markerMode !== "editable" && /* @__PURE__ */ C(EC, { logger: We }),
          /* @__PURE__ */ C(OC, { options: ht }),
          /* @__PURE__ */ C(IC, {}),
          /* @__PURE__ */ C(FC, {}),
          /* @__PURE__ */ C(IE, {}),
          /* @__PURE__ */ C(
            NA,
            {
              viewOptions: W,
              getMarker: zt,
              logger: We,
              markerSettleDelayMs: te,
              structureProtectionMode: Q
            }
          ),
          W?.markerMode === "visible" && /* @__PURE__ */ C(DA, { viewOptions: W }),
          /* @__PURE__ */ C(
            IA,
            {
              styleInfo: vt,
              viewOptions: W,
              logger: We
            }
          ),
          /* @__PURE__ */ C(
            KC,
            {
              expandedNoteKeyRef: g,
              nodeOptions: xe,
              viewOptions: W,
              logger: We
            }
          ),
          /* @__PURE__ */ C(oS, {}),
          /* @__PURE__ */ C(tC, {}),
          /* @__PURE__ */ C(X_, {}),
          /* @__PURE__ */ C(JA, { viewOptions: W, logger: We }),
          /* @__PURE__ */ C(cS, {}),
          /* @__PURE__ */ C(HS, { structureProtectionMode: Q }),
          /* @__PURE__ */ C(GS, { textDirection: qe }),
          /* @__PURE__ */ C(YS, {}),
          /* @__PURE__ */ C(iv, {}),
          l
        ] }),
        en && /* @__PURE__ */ C(l1, {})
      ] })
    ] }, W.verseLayout ?? "inline")
  );
}), PP = En(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ C(Pm, { ref: r, ...i });
});
function Nm() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function oo(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? Nm() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function Om(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? Nm() : r,
    quote: e,
    type: "thread"
  };
}
function uf(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function _1(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function xa(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class C1 {
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
    this._comments = t, xa(this);
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
          const c = uf(a);
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
    this._comments = i, xa(this);
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
          const c = uf(a);
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
    return this._comments = n, xa(this), t.type === "comment" ? {
      index: s,
      markedComment: _1(t)
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
    return t !== null ? t.doc.get("comments", ou) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new au(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new ou();
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
      ib,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Tt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof sb) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const m = p.insert, g = p.retain, y = p.delete, k = u.parent, _ = u === r ? void 0 : k instanceof au && this._comments.find((S) => S.id === k.get("id"));
              if (Array.isArray(m)) {
                const S = f;
                m.slice().reverse().forEach((P) => {
                  const A = P.get("id"), M = P.get("type") === "thread" ? Om(
                    P.get("quote"),
                    P.get("comments").toArray().map(
                      (q) => oo(
                        q.get("content"),
                        q.get("author"),
                        q.get("id"),
                        q.get("timeStamp"),
                        q.get("deleted")
                      )
                    ),
                    A
                  ) : oo(
                    P.get("content"),
                    P.get("author"),
                    A,
                    P.get("timeStamp"),
                    P.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(M, _, S);
                  });
                });
              } else if (typeof g == "number")
                f += g;
              else if (typeof y == "number")
                for (let S = 0; S < y; S++) {
                  const P = _ === void 0 || _ === !1 ? this._comments[f] : _.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(P, _);
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
function S1(e) {
  const [t, r] = de(e.getComments());
  return z(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function v1({
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
function M1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return hn(
    /* @__PURE__ */ C(v1, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function wm() {
  const [e, t] = de(null), r = he(() => {
    t(null);
  }, []), n = ze(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ C(M1, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const E1 = {
  ..._g,
  paragraph: "CommentEditorTheme__paragraph"
};
function A1(...e) {
  return e.filter(Boolean).join(" ");
}
function Yr({
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
      className: A1(
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
function P1({
  className: e
}) {
  return /* @__PURE__ */ C(Of, { className: e || "ContentEditable__root" });
}
function N1({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ C("div", { className: t || "Placeholder__root", children: e });
}
const df = vf("INSERT_INLINE_COMMAND");
function O1({
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
  }), [t, s]), cs(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ C("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ C("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ C("i", { className: "icon add-comment" }) }) });
}
function w1({ onEscape: e }) {
  const [t] = ce();
  return z(() => t.registerCommand(
    Sf,
    (r) => e(r),
    Jn
  ), [t, e]), null;
}
function qm({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ C(Nf, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: E1
  }, children: /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ C(
      tb,
      {
        contentEditable: /* @__PURE__ */ C(P1, { className: e }),
        placeholder: /* @__PURE__ */ C(N1, { children: s }),
        ErrorBoundary: qf
      }
    ),
    /* @__PURE__ */ C(eb, { onChange: n }),
    /* @__PURE__ */ C(Rf, {}),
    t !== !1 && /* @__PURE__ */ C(Xy, {}),
    /* @__PURE__ */ C(w1, { onEscape: r }),
    /* @__PURE__ */ C(Qy, {}),
    i !== void 0 && /* @__PURE__ */ C(wf, { editorRef: i })
  ] }) });
}
function Rm(e, t) {
  return he(
    (r, n) => {
      r.read(() => {
        e(rb()), t(!nb(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function q1({
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
  ), l = Z(null), u = Im(), d = he(() => {
    e.getEditorState().read(() => {
      const g = w();
      if (N(g)) {
        l.current = g.clone();
        const y = g.anchor, k = g.focus, _ = By(
          e,
          y.getNode(),
          y.offset,
          k.getNode(),
          k.offset
        ), S = a.current;
        if (_ !== null && S !== null) {
          const { left: P, bottom: A, width: B } = _.getBoundingClientRect(), M = Vy(e, _);
          let q = M.length === 1 ? P + B / 2 - 125 : P - 125;
          q < 10 && (q = 10), S.style.left = `${q}px`, S.style.top = `${A + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const $ = M.length, { container: J } = c, Q = c.elements, Me = Q.length;
          for (let re = 0; re < $; re++) {
            const qe = M[re];
            let be = Q[re];
            be === void 0 && (be = document.createElement("span"), Q[re] = be, J.appendChild(be));
            const Re = `position:absolute;top:${qe.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${qe.left}px;height:${qe.height}px;width:${qe.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            be.style.cssText = Re;
          }
          for (let re = Me - 1; re >= $; re--) {
            const qe = Q[re];
            J.removeChild(qe), Q.pop();
          }
        }
      }
    });
  }, [e, c]);
  cs(() => {
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
        Om(g, [oo(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, m = Rm(i, o);
  return /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ C(
      qm,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: m
      }
    ),
    /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ C(Yr, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ C(
        Yr,
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
function R1({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = Z(null), c = Im(), l = Rm(i, o);
  return /* @__PURE__ */ Te(gn, { children: [
    /* @__PURE__ */ C(
      qm,
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
      Yr,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(oo(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(Iy, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ C("i", { className: "send" })
      }
    )
  ] });
}
function $m({
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
        Yr,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ C(
        Yr,
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
function ff({
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = wm();
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
        Yr,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ C(
              $m,
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
function $1({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ce(), [a, c] = de(0), [l, u] = wm(), d = ze(
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
              Yr,
              {
                onClick: () => {
                  u("Delete Thread", (g) => /* @__PURE__ */ C(
                    $m,
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
            ff,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            g.id
          )) }),
          /* @__PURE__ */ C("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ C(
            R1,
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
      ff,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function I1({
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
      $1,
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
function Im() {
  const e = $f(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function L1({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = $f(), [a] = ce(), c = ze(() => {
    const q = new C1(a, s);
    return r && q.registerOnChange(r), t?.(q), q;
  }, [a, s, r, t]), l = S1(c), u = ze(() => /* @__PURE__ */ new Map(), []), [d, f] = de(), [p, m] = de([]), [g, y] = de(!1), [k, _] = de(!1), { yjsDocMap: S } = o;
  z(() => {
    if (e) {
      const q = e("comments", S);
      return c.registerCollaboration(q);
    }
    return () => {
    };
  }, [c, e, S]);
  const P = he(() => {
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
        const { markedComment: Q, index: Me } = J;
        c.addComment(Q, $, Me);
      } else {
        c.deleteCommentOrThread(q);
        const J = $ !== void 0 ? $.id : q.id, Q = u.get(J);
        Q !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const Me of Q) {
              const re = se(Me);
              Ce(re) && (re.deleteID(Kr, J), re.hasNoIDsForEveryType() && Us(re));
            }
          });
        });
      }
    },
    [c, a, u]
  ), B = he(
    (q, $, J, Q) => {
      c.addComment(q, J), $ && (a.update(() => {
        N(Q) && Zf(Q, Kr, q.id);
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
        for (const Me of Q) {
          const re = a.getElementByKey(Me);
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
      Pf(
        a,
        Qe,
        ($) => Hi($.getTypedIDs()),
        ($, J) => {
          for (const [Q, Me] of Object.entries($.getTypedIDs()))
            Me.forEach((re) => {
              J.addID(Q, re);
            });
        }
      ),
      a.registerMutationListener(
        Qe,
        ($) => {
          a.getEditorState().read(() => {
            for (const [J, Q] of $) {
              const Me = se(J);
              let re = [];
              Q === "destroyed" ? re = q.get(J) ?? [] : Ce(Me) && (re = Me.getTypedIDs()[Kr] ?? []);
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
          let Me = !1, re = !1;
          if (N(Q)) {
            const qe = Q.anchor.getNode();
            if (v(qe)) {
              const be = Wb(qe, Kr, Q.anchor.offset) ?? [];
              be !== null && (m(be), Me = !0), Q.isCollapsed() || (f(qe.getKey()), re = !0);
            }
          }
          Me || m((qe) => qe.length === 0 ? qe : []), re || f(null), !J.has("collaboration") && N(Q) && y(!1);
        });
      }),
      a.registerCommand(
        df,
        () => {
          const $ = window.getSelection();
          return $ !== null && $.removeAllRanges(), y(!0), !0;
        },
        mn
      )
    );
  }, [a, u]);
  const M = () => {
    a.dispatchCommand(df, void 0);
  };
  return /* @__PURE__ */ Te(gn, { children: [
    g && hn(
      /* @__PURE__ */ C(
        q1,
        {
          editor: a,
          cancelAddComment: P,
          submitAddComment: B
        }
      ),
      document.body
    ),
    d != null && !g && hn(
      /* @__PURE__ */ C(
        O1,
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
        Yr,
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
        I1,
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
function D1() {
  const e = Z(void 0), t = he((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function U1(e, t) {
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
function F1(e, t) {
  z(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      U1(r, t);
    };
  }, [t, e]);
}
const NP = En(function(t, r) {
  const n = Z(null), i = Z(!0), s = Z(null), [o, a] = de(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: m, view: g } = {} } = t, y = (m ?? !1) || ns(g), [k, _] = D1();
  F1(f, k), z(() => {
    if (process.env.NODE_ENV !== "production") {
      const A = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(A), p || console.warn(A);
    }
  }, [p]), gc(r, () => ({
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
  ), P = he(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const A = k.current?.getComments();
    l(A);
  }, [k, i, l]);
  return z(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ C(Zy, { children: /* @__PURE__ */ Te(Pm, { ref: n, onUsjChange: S, ...f, children: [
    /* @__PURE__ */ C(
      L1,
      {
        setCommentStore: _,
        onChange: P,
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
function z1(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function K1(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const j1 = /^[#\w().,%/\s-]+$/;
function mr(e) {
  return e != null;
}
const B1 = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, V1 = {
  left: "right",
  right: "left"
}, W1 = "var(--usj-font-fallback, serif)";
function Lm(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${z1(i)}"`).join(", ")}, ${W1}`;
}
const hc = ".editor-input.usfm", H1 = /^[\w.#[\]="':()>+~*,\s-]+$/;
function G1(e) {
  return H1.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${hc}".`
  ), hc);
}
function J1(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(Lm(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (j1.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), mr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), mr(t.firstLineIndent) && s.push(`text-indent: ${pn(t.firstLineIndent * 20 * r)}vw`), mr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${pn(t.leftMargin * 20 * r)}vw`), mr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${pn(t.rightMargin * 20 * r)}vw`
  ), mr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${pn(t.spaceBefore * r)}pt`), mr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${pn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = B1[n ? V1[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const pf = { c: 150, ca: 133, cp: 150 };
function hf(e, t) {
  return e && mr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function Y1(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && mr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = hf(e.markers.c, pf.c);
  return ["ca", "cp"].map((i) => {
    const s = hf(
      e.markers[i],
      pf[i]
    ), o = pn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function OP(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = hc } = t, s = G1(i), o = [], a = [];
  e.defaultFont && a.push(Lm(e.defaultFont)), mr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${pn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = J1(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${K1(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...Y1(e, s)), o.join(`
`);
}
export {
  Ah as BLOCK_VERSE_VIEW_MODE,
  T as CategoryType,
  PP as Editorial,
  Bi as GENERATOR_NOTE_CALLER,
  Lf as HIDDEN_NOTE_CALLER,
  NP as Marginal,
  b as MarkerType,
  Eh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  ol as STANDARD_VIEW_MODE,
  Vs as defaultStyleInfo,
  AP as directionToNames,
  m_ as filterAndRankItems,
  OP as generateUsjCss,
  MP as getDefaultViewMode,
  Eo as getDefaultViewOptions,
  zM as getEnterMenuItems,
  FM as getMarkerMenuItems,
  EP as getViewMode,
  ll as getViewOptions,
  ns as isBlockVerseLayout,
  Fr as isInsertEmbedOpOfType,
  P_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
