import { jsx as S, jsxs as Te, Fragment as mn } from "react/jsx-runtime";
import { forwardRef as An, useState as de, useRef as X, useCallback as ge, useEffect as K, useMemo as Fe, memo as Om, createContext as Zd, useContext as ef, Children as qm, isValidElement as Rm, cloneElement as $m, useImperativeHandle as hc, useLayoutEffect as is } from "react";
import { assertSafeKey as Ve, isValidBookCode as Im, MARKER_OBJECT_PROPS as Lm, USJ_VERSION as ir, USJ_TYPE as sr, isUsjTextContentLocation as Dm, indexesFromUsjJsonPath as tf, isUsjAttributeKeyLocation as Um, isUsjAttributeMarkerLocation as Fm, isUsjClosingAttributeMarkerLocation as zm, isUsjMarkerLocation as Km, isUsjClosingMarkerLocation as jm, isUsjPropertyValueLocation as Bm, getUsjDocumentLocationTypeName as Vm, usjJsonPathFromIndexes as on, EMPTY_USJ as rf } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as Ke, $parseSerializedNode as ti, DecoratorNode as ss, ElementNode as Yt, isHTMLElement as Pn, createState as no, $getState as re, $setState as yt, $isRangeSelection as w, $isElementNode as L, $isTextNode as E, ParagraphNode as gc, TextNode as ze, $createTextNode as he, $getCommonAncestor as Wm, $getSelection as O, $isLineBreakNode as io, NODE_STATE_KEY as os, $getEditor as as, $hasUpdateTag as Hm, $getNodeByKey as ne, $getRoot as Ue, $createRangeSelection as mc, $createPoint as Gl, $getCharacterOffsets as nf, KEY_DOWN_COMMAND as Cr, COMMAND_PRIORITY_HIGH as Ie, HISTORY_MERGE_TAG as sf, CLICK_COMMAND as so, COMMAND_PRIORITY_EDITOR as yn, isDOMNode as of, $getNearestNodeFromDOMNode as cs, CONTROLLED_TEXT_INSERTION_COMMAND as yc, PASTE_COMMAND as mr, COMMAND_PRIORITY_CRITICAL as yr, CUT_COMMAND as bn, DROP_COMMAND as bc, DELETE_CHARACTER_COMMAND as Gm, DELETE_WORD_COMMAND as Jm, DELETE_LINE_COMMAND as Ym, $isDecoratorNode as af, COPY_COMMAND as oo, COMMAND_PRIORITY_NORMAL as Xn, SELECTION_CHANGE_COMMAND as br, BLUR_COMMAND as kc, $addUpdateTag as Fr, SKIP_DOM_SELECTION_TAG as Xm, CLEAR_HISTORY_COMMAND as Qm, COMMAND_PRIORITY_LOW as $t, $setSelection as Ki, $getPreviousSelection as Zm, $isRootOrShadowRoot as ey, CAN_UNDO_COMMAND as ty, CAN_REDO_COMMAND as ry, $isNodeSelection as cf, DRAGSTART_COMMAND as ny, $createNodeSelection as lf, getDOMSelectionFromTarget as iy, $onUpdate as sy, KEY_ENTER_COMMAND as uf, LineBreakNode as df, $copyNode as oy, FOCUS_COMMAND as ay, $isRootNode as cy, KEY_ESCAPE_COMMAND as ff, INSERT_PARAGRAPH_COMMAND as ws, createCommand as pf, HISTORIC_TAG as Tc, UNDO_COMMAND as hf, REDO_COMMAND as gf, CLEAR_EDITOR_COMMAND as ly } from "lexical";
import { addClassNamesToElement as zn, removeClassNamesFromElement as Go, $findMatchingParent as We, $dfsIterator as mf, $dfs as ui, mergeRegister as Ze, registerNestedElementResolver as yf, $unwrapNode as va, IS_APPLE as Ns } from "@lexical/utils";
import { useLexicalNodeSelection as uy } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as wt } from "fast-equals";
import Oi from "quill-delta";
import { useLexicalComposerContext as le } from "@lexical/react/LexicalComposerContext";
import { copyToClipboard as dy, $getHtmlContent as fy, $getLexicalContent as py } from "@lexical/clipboard";
import { TreeView as hy } from "@lexical/react/LexicalTreeView";
import * as gy from "react-dom";
import { createPortal as gn } from "react-dom";
import { LexicalComposer as bf } from "@lexical/react/LexicalComposer";
import { ContentEditable as kf } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Tf } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as xf } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as _f } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as my } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as yy, createDOMRange as by, createRectsFromDOMRange as ky } from "@lexical/selection";
import { autoUpdate as Ty, computePosition as xy, shift as _y, flip as Cy } from "@floating-ui/dom";
import { $generateNodesFromDOM as vy } from "@lexical/html";
import { AutoFocusPlugin as Sy } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as My } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Cf, LexicalCollaboration as Ey } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Ay } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Py } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as wy, $isRootTextContentEmpty as Ny } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Oy } from "@lexical/yjs";
import { Array as Jl, Map as Yl, YArrayEvent as qy } from "yjs";
const Jo = (e) => Ke(ti(e)), Ry = {
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
function vf(e) {
  return Ry[e];
}
const q = " ", Os = "​", Dt = q, xc = `${q}|`, It = "p", qs = "+", Sf = "-", Rs = "chapter", Sa = "verse", Xl = "invalid", $y = "text-spacing", Iy = "formatted-font", Ly = "marker-", Mf = "external-usj-mutation", Ef = "selection-change", zr = "cursor-change", Ma = "annotation-change", ji = "delta-change", Af = "marker-settle", Dy = [
  Mf,
  Ef,
  zr,
  Ma,
  ji
], kn = "zmsc-s", Qn = "zmsc-e", Uy = [kn, Qn], Fy = [
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
  kn,
  Qn
], Pf = 1, _c = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], zy = _c.filter((e) => e !== "sid" && e !== "eid");
class Ht extends ss {
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
    return Nf().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Fy.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: Pf
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function wf(e) {
  return Uy.includes(e);
}
function Nf(e, t, r, n, i) {
  return Ke(new Ht(e, t, r, n, void 0, i));
}
function je(e) {
  return e instanceof Ht;
}
const Cc = "f", Ky = [
  // Footnote
  Cc,
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
const jy = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Of = 1;
class Me extends Yt {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Cc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (qi(t) === "crossref" ? Sf : qs), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => Vy(t) ? {
        conversion: By,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return vc().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Ky.includes(t) || (r?.includes(t) ?? !1));
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
    return r && Pn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", qi(this.getMarker()))), { element: r };
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
      version: Of
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
function By(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: vc(t, r, n) };
}
function vc(e, t, r, n, i) {
  return Ke(new Me(e, t, r, n, i));
}
function Vy(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Me.isValidMarker(t) && e.classList.contains(Me.getType());
}
function j(e) {
  return e instanceof Me;
}
var T;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(T || (T = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const Ea = {
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
}, Ql = {
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
function nr(e) {
  const t = Object.hasOwn(Ea, e) ? Ea[e] : void 0, r = Object.hasOwn(Ql, e) ? Ql[e] : void 0;
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
const qf = "v", Rf = "c", cn = "fig", Zl = "tr", Aa = "esb", $f = "esbe", Wy = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Hy = {
  "": "start",
  c: "center",
  r: "end"
};
function Gy(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function eu(e) {
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
const Jy = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Yy(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Os && s + 1 < e.length && eu(e[s + 1]) || (eu(o) ? (r || (i = t.length, t += o), r = !0) : Jy.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function Xy(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function Qy(e, t) {
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
const Zy = /^(?:qt[1-5]?|ts)-[se]$/;
function ao(e) {
  return Zy.test(e) || wf(e);
}
function Yo(e, t) {
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
function eb(e, t, r) {
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
      const m = e.indexOf("\\", i), y = m === -1 ? e.length : m;
      a(Yy(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: u } = Qy(e, i + 1);
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
    if (l === qf) {
      const { word: m, next: y } = Yo(e, i);
      i = y, n.push({ kind: "verse", number: m });
      continue;
    }
    if (l === Rf) {
      const { word: m, next: y } = Yo(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: m });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, g = t(p)?.type;
    if (g === b.Note || g === void 0 && Me.isValidMarker(l)) {
      const { word: m, next: y } = Yo(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: m || "+" });
      continue;
    }
    if (g === b.Milestone || g === void 0 && ao(l)) {
      const m = cb(e, c, l, i);
      if (m)
        n.push(m.token), m.ejectedText && o(m.ejectedText), i = m.next;
      else {
        const y = e.indexOf("\\", i), k = y === -1 ? e.length : y;
        o(e.slice(c, k)), i = k;
      }
      continue;
    }
    g === b.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : g === b.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : $s(p) ? (d(), $s(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Aa || l === $f ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const tu = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function $s(e) {
  return Object.hasOwn(tu, e) ? tu[e] : void 0;
}
function tb(e) {
  return $s(e) !== void 0;
}
const rb = /([-\w]+)\s*=\s*"(.*?)"/g, nb = /[\s\u200B]*[\n\r][\s\u200B]*/g, If = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function co(e) {
  return If[e];
}
const ib = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function sb(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function lo(e, t, r = If[t]) {
  const n = e.replace(nb, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(rb)];
  if (s.length > 0) {
    if (!sb(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      ib.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function uo(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function ob(e) {
  const t = cr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function ab(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = lo(e.slice(n + 1, i), r, uo(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function cb(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = lo(s.slice(o + 1), r, uo(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = ab(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function pr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", q);
}
function ln(e) {
  return e.content || (e.content = []), e.content;
}
function cr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u;
  const d = () => u ? ln(u) : r;
  let f = !1;
  const p = () => {
    if (s)
      return o.length > a ? ln(o[o.length - 1].object) : ln(s);
    if (o.length > 0)
      return ln(o[o.length - 1].object);
    if (!i) {
      if (f && !n)
        return d();
      i = { type: "para", marker: It, content: [] }, d().push(i);
    }
    return ln(i);
  }, g = (Q) => {
    const F = p();
    typeof Q == "string" && typeof F[F.length - 1] == "string" ? F[F.length - 1] = F[F.length - 1] + Q : F.push(Q);
  }, m = (Q) => {
    for (let F = Q; F < o.length; F += 1) {
      const Z = o[F].object;
      Z.closed = "false";
    }
  }, y = () => {
    m(0), o.length = 0;
  }, k = (Q) => {
    s && (o.length > a && (m(a), o.length = a), a = 0, Q || (s.closed = "false"), s = void 0);
  }, _ = () => {
    c = void 0, l = void 0;
  }, M = (Q) => {
    u && (Q || (u.closed = "false"), u = void 0);
  };
  let v, A = "", x;
  const I = () => {
    A && g(pr(A)), A = "";
  }, U = (Q = !1) => {
    v?.type === "sidebar" ? A = "" : Q && A.endsWith(`
`) && (A = A.slice(0, -1)), v = void 0, I();
  }, G = () => {
    if (!x)
      return;
    const Q = { type: "char", marker: x.marker, content: [] };
    x.value && (Q.content = [pr(x.value)]), p().push(Q), o.push({ object: Q }), x = void 0;
  }, V = (Q, F) => {
    f = !1, _(), y(), k(!1), i = { type: "para", marker: Q, content: [] }, F && (i.content = [pr(F)]), d().push(i);
  }, ae = () => {
    x && (V(x.marker, x.value), x = void 0);
  };
  let ce;
  const ie = () => {
    if (ce) {
      if (ce.shape === "para")
        V(cn, ce.value);
      else {
        const Q = { type: "char", marker: cn, content: [] };
        ce.value && (Q.content = [pr(ce.value)]), p().push(Q), o.push({ object: Q });
      }
      ce = void 0;
    }
  }, Ce = eb(e, t?.getMarker ?? nr, n);
  for (let Q = 0; Q < Ce.length; Q++) {
    const F = Ce[Q];
    if (x) {
      if (F.kind === "text") {
        x.value += F.text;
        continue;
      }
      if (x.shape === "char" && F.kind === "end" && F.marker.replace(/^\+/, "") === x.marker) {
        if (x.value.trim() === "") {
          p().push({ type: "char", marker: x.marker, content: [] }), x = void 0, U();
          continue;
        }
        Object.assign(x.target, {
          [x.attrName]: pr(x.value.trim())
        });
        const Z = x.marker;
        if (x = void 0, Z === "ca") {
          const Ee = Ce[Q + 1];
          Ee?.kind === "text" && /^[\s\u200B]*$/.test(Ee.text) && Q++;
        }
        continue;
      }
      if (x.shape === "para" && (F.kind === "para" || F.kind === "chapter")) {
        const Z = x.value.replace(/[\s\u200B]+$/, "");
        Z === "" ? (V(x.marker), x = void 0) : (Object.assign(x.target, { [x.attrName]: pr(Z) }), x = void 0);
      } else {
        v = void 0, (F.kind === "para" || F.kind === "chapter") && x.value.endsWith(`
`) && (x.value = x.value.slice(0, -1)), x.shape === "para" ? ae() : G(), Q--;
        continue;
      }
    }
    if (ce) {
      if (F.kind === "text" || F.kind === "optbreak") {
        ce.value += F.kind === "text" ? F.text : "//";
        continue;
      }
      if (F.kind === "end" && F.marker.replace(/^\+/, "") === cn) {
        const Z = ce.value.indexOf("|"), Ee = Z >= 0 ? lo(ce.value.slice(Z + 1), cn) : void 0;
        if (Ee) {
          const Oe = {};
          for (const [vt, en] of Object.entries(Ee))
            Oe[vt === "src" ? "file" : vt] = en;
          const Xt = {
            type: "figure",
            marker: cn,
            ...Oe
          }, ee = ce.value.slice(0, Z);
          ee && (Xt.content = [pr(ee)]), g(Xt), ce = void 0;
          continue;
        }
      }
      ie(), Q--;
      continue;
    }
    if (v)
      if (F.kind === "text") {
        if (F.text.includes(`
`) && /^[\s\u200B]*$/.test(F.text)) {
          A += F.text;
          continue;
        }
        U();
      } else if (F.kind === "charOpen" || F.kind === "para") {
        const Z = F.kind === "para" || !F.isNested ? $s(F.marker) : void 0;
        if (Z && Z.targetTypes.includes(v.type)) {
          A = "", x = {
            target: v,
            attrName: Z.attrName,
            marker: F.marker,
            shape: Z.shape,
            value: ""
          };
          continue;
        }
        U(F.kind === "para");
      } else
        U(F.kind === "chapter");
    if (!s && !n && (F.kind === "charOpen" && !F.isNested && F.marker === cn || F.kind === "para" && F.marker === cn)) {
      y(), ce = { shape: F.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (F.kind) {
      case "text": {
        let Z = F.text;
        if (!s && Z.endsWith(`
`)) {
          const Ee = Ce[Q + 1];
          (Ee === void 0 || Ee.kind === "para" || Ee.kind === "chapter") && (Z = Z.slice(0, -1));
        }
        Z && g(pr(Z));
        break;
      }
      case "para": {
        const Z = !s && !n;
        if (Z && F.marker === Zl) {
          y(), c || (c = { type: "table", content: [] }, d().push(c)), l = { type: "table:row", marker: Zl, content: [] }, ln(c).push(l), i = l, f = !1;
          break;
        }
        if (Z && l) {
          const Ee = Wy.exec(F.marker);
          if (Ee && Gy(Ee)) {
            y();
            const [, Oe, Xt, ee] = Ee, vt = {
              type: "table:cell",
              marker: ee ? F.marker.slice(0, F.marker.indexOf("-")) : F.marker,
              align: Hy[Oe],
              content: []
            };
            ee && (vt.colspan = String(Number(ee) + 1 - Number(Xt))), ln(l).push(vt), i = vt;
            break;
          }
        }
        if (_(), !n && F.marker === Aa) {
          y(), k(!1), M(!1), u = { type: "sidebar", marker: Aa, content: [] }, r.push(u), i = void 0, v = u, f = !1;
          break;
        }
        if (F.marker === $f && u) {
          y(), k(!1), M(!0), i = void 0;
          break;
        }
        V(F.marker);
        break;
      }
      case "verse": {
        k(!1);
        const Z = { type: "verse", marker: qf, number: F.number };
        g(Z), v = Z;
        break;
      }
      case "chapter": {
        y(), k(!1), _(), M(!1), i = void 0;
        const Z = {
          type: "chapter",
          marker: Rf,
          number: F.number
        };
        r.push(Z), v = Z, f = !0;
        break;
      }
      case "note": {
        k(!1);
        const Z = p();
        s = { type: "note", marker: F.marker, caller: F.caller, content: [] }, a = o.length, Z.push(s), v = s;
        break;
      }
      case "charOpen": {
        if (!F.isNested) {
          const Oe = s ? a : 0;
          m(Oe), o.length = Oe;
        }
        const Z = p(), Ee = { type: "char", marker: F.marker, content: [] };
        Z.push(Ee), o.push({ object: Ee });
        break;
      }
      case "end": {
        const Z = F.marker.replace(/^\+/, ""), Ee = s ? a : 0, Oe = o.findLastIndex((Xt, ee) => ee >= Ee && Xt.object.marker === Z);
        Oe >= 0 ? (lb(o[Oe].object), m(Oe + 1), o.length = Oe) : s && s.marker === Z ? k(!0) : (m(Ee), o.length = Ee, g({ type: "unmatched", marker: `${F.marker}*` }));
        break;
      }
      case "milestone":
        g({ type: "ms", marker: F.marker, ...F.attributes });
        break;
      case "optbreak":
        g({ type: "optbreak" });
        break;
    }
  }
  if (ce && ie(), x)
    if (x.shape === "para") {
      const Q = x.value.replace(/[\s\u200B]+$/, "");
      Q === "" ? V(x.marker) : Object.assign(x.target, { [x.attrName]: pr(Q) }), x = void 0;
    } else
      x.value.endsWith(`
`) && (x.value = x.value.slice(0, -1)), G();
  y(), k(!1), M(!1);
  const Pe = (Q) => {
    for (const F of Q)
      typeof F != "string" && F.content && (Pe(F.content), F.content.length === 0 && delete F.content);
  };
  return Pe(r), r;
}
function lb(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = lo(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const Tn = no("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Kr = no("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), oe = no("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), lr = "marker-trailing-space", Lf = 1, ub = "marker", Sc = no("isGutterMarker", {
  parse: (e) => e === !0
});
class vr extends ss {
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
    return new vr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => hb(t) ? {
        conversion: db,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return kr().updateFromJSON(t);
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
    return r && Pn(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: Lf
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function db(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: kr(t, r) };
}
function kr(e, t) {
  return Ke(new vr(e, t));
}
function fb(e) {
  return yt(kr(ub, e), Sc, !0);
}
function pb(e) {
  return Ut(e) && re(e, Sc);
}
function hb(e) {
  return e?.tagName === "span";
}
function Ut(e) {
  return e instanceof vr;
}
function Mc(e) {
  return e?.type === vr.getType();
}
const Ur = "internal-comment", gb = [Ur], Df = Object.freeze({}), Pa = Object.freeze({}), wa = Object.freeze({}), Na = Object.freeze({}), Oa = Object.freeze({}), mb = 1, Kn = /* @__PURE__ */ new Map(), vi = /* @__PURE__ */ new Map(), jn = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new Map();
class tt extends Yt {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Df, r, n, i, s, o) {
    super(o), this.__typedIDs = xs(t), this.__typedOnClicks = Xo(r), this.__typedOnRemoves = Qo(n), this.__typedOnMouseEnters = Zo(i), this.__typedOnMouseLeaves = ea(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = xs(t.__typedIDs), n = Xo(t.__typedOnClicks), i = Qo(t.__typedOnRemoves), s = Zo(t.__typedOnMouseEnters), o = ea(t.__typedOnMouseLeaves);
    return new tt(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return gb.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Bi().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: mb
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      zn(n, un(t.theme.typedMark, a)), c.length > 1 && zn(n, un(t.theme.typedMarkOverlap, a));
      for (const l of c)
        zn(n, un("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = un(n.theme.typedMark, s), d = un(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && zn(r, u) : l === 0 && Go(r, u), c === 1 ? l === 2 && zn(r, d) : l === 1 && Go(r, d));
      const f = new Set(o), p = new Set(a);
      for (const g of o)
        p.has(g) || Go(r, un("annotationId", g));
      for (const g of a)
        f.has(g) || zn(r, un("annotationId", g));
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
    const r = this.getWritable(), n = xs(r.__typedIDs);
    r.__typedIDs = xs(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Is(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Xo(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return _e(t) ? Kn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Qo(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return _e(t) ? vi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Zo(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return _e(t) ? jn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = ea(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return _e(t) ? Bn.get(t.getKey()) ?? {} : {};
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Is(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Bi(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Kn.delete(r.getKey()), vi.delete(r.getKey()), jn.delete(r.getKey()), Bn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Pa) {
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
    if (!this.__typedOnClicks || this.__typedOnClicks === Pa) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === wa) {
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
    if (!this.__typedOnRemoves || this.__typedOnRemoves === wa) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Na) {
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
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Na) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Oa) {
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
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Oa) {
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
    const i = yb(t, r);
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
    for (; _e(t) && nu(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; _e(r) && nu(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = bb(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = kb(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Tb(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = xb(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function xs(e = Df) {
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
function Xo(e) {
  if (!e || e === Pa)
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
function ea(e) {
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
function $r(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function ru(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function yb(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function nu(e, t) {
  const r = ru(e), n = ru(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function kb(e, t) {
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
function Tb(e, t) {
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
function xb(e, t) {
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
function un(e, t) {
  return `${e}-${t}`;
}
function iu(e) {
  return `external-${e}`;
}
function Bi(e, t, r, n, i) {
  return Ke(new tt(e, t, r, n, i));
}
function _e(e) {
  return e instanceof tt;
}
function Uf(e) {
  return e?.type === tt.getType();
}
function Is(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Ff(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let g, m;
  for (let y = 0; y < u; y++) {
    const k = a[y];
    if (L(m) && m.isParentOf(k))
      continue;
    const _ = y === 0, M = y === u - 1;
    let v = null;
    if (E(k)) {
      const A = k.getTextContentSize(), x = _ ? f : 0, I = M ? p : A;
      if (x === 0 && I === 0)
        continue;
      const U = k.splitText(x, I);
      v = U.length > 1 && (U.length === 3 || _ && !M || I === A) ? U[1] : U[0];
    } else {
      if (_e(k))
        continue;
      L(k) && k.isInline() && (v = k);
    }
    if (v !== null) {
      if (v && v.is(g))
        continue;
      const A = v.getParent();
      (A == null || !A.is(g)) && (m = void 0), g = A, m === void 0 && (m = Bi(), m.addID(t, r, n, i, s, o), v.insertBefore(m)), m.append(v);
    } else
      g = void 0, m = void 0;
  }
  t === Ur && L(m) && (d ? m.selectStart() : m.selectEnd());
}
function _b(e, t, r) {
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
const Cb = ["type", "marker", "content"], qa = "unknown", zf = 1, vb = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class wn extends Yt {
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
    return new wn(r, n, i, s);
  }
  static importDOM() {
    return {
      [qa]: (t) => Mb(t) ? {
        conversion: Sb,
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
    return vb.has(this.getTag());
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
    const t = document.createElement(qa);
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
      version: zf
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
function Sb(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Ec(t, r) };
}
function Ec(e, t, r) {
  return Ke(new wn(e, t, r));
}
function Mb(e) {
  return e?.tagName.toLowerCase() === qa;
}
function Le(e) {
  return e instanceof wn;
}
const Vi = "id", Kf = 1, Eb = [
  "type",
  "marker",
  "code",
  "content"
];
class Ft extends Yt {
  __marker = Vi;
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
    return jf(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Im(t);
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
      version: Kf
    };
  }
}
function jf(e, t) {
  return Ke(new Ft(e, t));
}
function Ge(e) {
  return e instanceof Ft;
}
function Ac(e) {
  return e?.type === Ft.getType();
}
const Ls = "c", Bf = 1, Ab = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class At extends Yt {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = Ls, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new At(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return Vf().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Rs, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: Bf
    };
  }
}
function Vf(e, t, r, n, i) {
  return Ke(new At(e, t, r, n, i));
}
function $e(e) {
  return e instanceof At;
}
function Pb(e) {
  return e?.type === At.getType();
}
const Wf = [
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
], Hf = [
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
], wb = [
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
  ...Wf,
  ...Hf
], Gf = 1, Nb = ["type", "marker", "content"];
class ye extends Yt {
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
    return t !== void 0 && (wb.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Wf.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Hf.includes(t);
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
      span: (t) => qb(t) ? {
        conversion: Ob,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Tr().updateFromJSON(t);
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
    return su(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), su(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Pn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Gf
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = Tr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function su(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Ob(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Tr(t) };
}
function Tr(e, t) {
  return Ke(new ye(e, t));
}
function qb(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ye.isValidMarker(t) && e.classList.contains(ye.getType());
}
function $(e) {
  return e instanceof ye;
}
function Rb(e) {
  return e?.type === ye.getType();
}
const Jf = 1, $b = "c", Yf = "span";
class ur extends ss {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = $b, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => Xf(t) ? {
        conversion: Ib,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Pc().updateFromJSON(t);
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
    const t = document.createElement(Yf);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Rs, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Pn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Rs, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
      version: Jf
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
function Ib(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Pc(t) };
}
function Pc(e, t, r, n, i, s) {
  return Ke(new ur(e, t, r, n, i, s));
}
function Xf(e) {
  return e ? e.classList.contains(Rs) && e.tagName.toLowerCase() === Yf : !1;
}
function ls(e) {
  return e instanceof ur;
}
function Lb(e) {
  return e?.type === ur.getType();
}
const Qf = 1;
class jr extends gc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new jr(t.__key);
  }
  static importJSON(t) {
    return Vt().updateFromJSON(t);
  }
  getMarker() {
    return It;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Qf
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Vt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Vt() {
  return Ke(new jr());
}
function or(e) {
  return e instanceof jr;
}
function fo(e) {
  return e?.type === jr.getType();
}
const Db = [
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
  It,
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
], Zf = 1, Ub = ["type", "marker", "content"];
class et extends gc {
  __marker;
  __unknownAttributes;
  constructor(t = It, r, n) {
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
    return t !== void 0 && (Db.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Fb,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return ri().updateFromJSON(t);
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
    return r && Pn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Zf
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = ri(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Fb(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = ri(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function ri(e, t) {
  return Ke(new et(e, t));
}
function se(e) {
  return e instanceof et;
}
function wc(e) {
  return e?.type === et.getType();
}
const Ds = "v", ep = 1, zb = [
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
    super(r ?? t, a), this.__marker = Ds, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new ft(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return tp().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Sa, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: ep
    };
  }
}
function tp(e, t, r, n, i, s) {
  return Ke(new ft(e, t, r, n, i, s));
}
function we(e) {
  return e instanceof ft;
}
function rp(e) {
  return e?.type === ft.getType();
}
const Kb = "​", ni = Kb;
var ou;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(ou || (ou = {}));
var au;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(au || (au = {}));
function jb() {
  return he(ni);
}
function Bb(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(ni, ""));
}
function us(e) {
  return e.length > 0 && e.includes(ni) && e.replaceAll(ni, "") === "";
}
function Nc(e) {
  return E(e) && us(e.getTextContent());
}
function np(e) {
  return Pb(e) || Lb(e);
}
function He(e) {
  return $e(e) || ls(e);
}
function ip(e, t) {
  return e.find((r) => He(r) && r.getNumber() === t.toString());
}
function Vb(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && He(r));
}
function cu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function sp(e) {
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
function Gt(e) {
  return We(e, j) ?? void 0;
}
function Wb(e) {
  return Ge(e) || $e(e) || $(e) || ls(e) || or(e) || je(e) || se(e) || j(e) || we(e) || Le(e);
}
function op(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Hb(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function xt(e) {
  return Se(e) || Ge(e);
}
function Se(e) {
  return se(e) || or(e);
}
function Gb(e) {
  return wc(e) || fo(e);
}
function Us(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function xn(e, t) {
  const r = re(t, Tn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function Jb(e, t) {
  const r = L(e) ? e : e.getParent(), n = L(t) ? t : t.getParent(), i = r && n ? Wm(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Yb(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function ii(e) {
  return e?.type === ze.getType();
}
function Xb(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function Qb(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Ne(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function it(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function ap(e, t, r) {
  const n = Ne(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Lt(e, t) {
  let r = Ne(e);
  return t && (r += `${q}${t}`), r += " ", r;
}
function Zb(e) {
  const t = e[os];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function cp(e) {
  return go(e) || Mc(e) && e.textType === "marker" || ii(e) && Zb(e) === "attribute" ? "" : ii(e) && e.text !== q ? e.text : Rb(e) ? e.children.map((t) => cp(t)).join("") : "";
}
function ek(e) {
  return e.map((r) => cp(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Mt(e) {
  return " " + e + q;
}
function Oc(e) {
  const t = [];
  for (const r of e) {
    if (!$(r))
      continue;
    const n = lp(r);
    n !== Dt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function lp(e) {
  return P(e) || Sr(e) || E(e) && re(e, oe) === "attribute" ? "" : E(e) ? e.getTextContent() : L(e) ? e.getChildren().map((t) => lp(t)).join("") : "";
}
function Sr(e) {
  return Ut(e) && e.getTextType() === "marker";
}
function _t(e) {
  return P(e) || Sr(e);
}
function lu(e, t) {
  tk(e, t), e.setMarker(t);
}
function tk(e, t) {
  const r = e.getMarker(), n = Ne(r), i = Ne(r, !0), s = it(r), o = it(r, !0), a = ye.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!_t(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (P(c))
        c.setMarker(t);
      else if (Sr(c)) {
        const f = l.startsWith(Ne("", !0));
        c.setTextContent(u ? Ne(t, f) : it(t, f));
      }
    }
  });
}
function De(e, t = Lm) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Ae(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function up(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function qc(e) {
  if (!w(e))
    return uu(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !L(t) || e.anchor.type === "text" && !E(t)))
    return t ?? void 0;
  try {
    return uu(e) ?? t ?? void 0;
  } catch (n) {
    if (up(n))
      return t ?? void 0;
    throw n;
  }
}
function rk(e, t) {
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
function Rc(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function dp(e) {
  return !!e && e.includes("-");
}
function fp(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function uu(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function $c(e) {
  if (!e)
    return !1;
  if (io(e) || P(e) || Sr(e) || Ut(e) && e.getTextType() === "attribute")
    return !0;
  if (E(e)) {
    const t = re(e, oe);
    if (t === lr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === q || us(r))
      return !0;
  }
  return !1;
}
function po() {
  const e = he(q);
  return yt(e, oe, lr), e.setMode("token"), e;
}
function nk(e) {
  const t = e.getTextContent();
  t.startsWith(q) || e.setTextContent(q + t);
}
function Nn(e) {
  return E(e) && re(e, oe) === lr;
}
function pp(e) {
  const t = e.getFirstChild();
  if (!_t(t) || t === null || Nn(t.getNextSibling()))
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
function di(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!$c(s)) {
      if (_e(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (E(s) && s.getType() === ze.getType()) {
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
  for (; t && _e(t); )
    t = t.getParent();
  return t;
}
function ik(e, t) {
  return di(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function sk(e, t) {
  const r = ho(e);
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
function ok(e, t) {
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
function hp(e, t) {
  const r = di(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if ($c(n))
    return hp(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || Us(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || Us(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function ak(e, t) {
  if (t <= 0)
    return 0;
  const r = di(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? ck(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function ck(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const lk = 1;
class dr extends ze {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(pn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new dr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return at().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: r, markerSyntax: n = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || pn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = pn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = pn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = pn(r.__marker, r.__markerSyntax, t), r;
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
      version: lk
    };
  }
}
function at(e, t, r) {
  return Ke(new dr(e, t, void 0, r));
}
function P(e) {
  return e instanceof dr;
}
function go(e) {
  return e?.type === dr.getType();
}
function Jr(e) {
  return e.getTextContent() === pn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function uk(e) {
  e.setTextContent(pn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function pn(e, t, r = !1) {
  return t === "closing" ? it(e, r) : t === "selfClosing" ? it("") : Ne(e, r);
}
const gp = 1, dk = "attribute-run";
function ta(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Mr extends Yt {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new Mr(r, n);
  }
  static importJSON(t) {
    return mp(t.runKind).updateFromJSON(t);
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
    t.classList.add(dk);
    const r = ta(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = ta(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = ta(this.__runKind);
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
      version: gp
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
function mp(e) {
  return Ke(new Mr(e));
}
function Be(e) {
  return e instanceof Mr;
}
const fk = /* @__PURE__ */ new Set(["closed"]);
function rr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !fk.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function yp(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function bp(e) {
  const t = Object.keys(e).filter((n) => !zy.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function kp(e, t, r, n) {
  return yp(
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
function pk(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Li(e) === void 0 && Tp(e) === void 0;
}
function Tp(e) {
  return e.getChildren().find((t) => E(t) && re(t, oe) === "attribute");
}
function Wi(e, t) {
  return ds(e.getNextSibling(), t);
}
const hk = /^[ \u00A0]+$/;
function Ic(e) {
  if (Jr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Ne(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && hk.test(r.slice(t.length));
}
function ds(e, t) {
  let r, n, i, s;
  return Be(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), P(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Ic(e) && (r = e, e = e.getNextSibling()), E(e) && re(e, oe) === "attribute" && (n = e, e = e.getNextSibling()), P(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && Jr(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
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
  if (E(n) && n.getTextContent() === Mt(e.getCaller()))
    return n;
}
function xp(e) {
  const t = Hi(e);
  return t ? ds(t.getNextSibling(), "cat") : {};
}
function mo(e) {
  const t = e.getFirstChild();
  if (!(!E(t) || P(t)) && re(t, oe) !== "attribute")
    return t;
}
function _p(e) {
  const t = mo(e);
  return t ? ds(t.getNextSibling(), "ca") : {};
}
function Cp(e) {
  const t = mo(e);
  if (!t)
    return;
  const r = ds(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function vp(e) {
  const t = Cp(e);
  return t ? ds(t.getNextSibling(), "cp") : {};
}
function Sp(e) {
  const t = e.getParent();
  if (!$(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (we(n))
        return n;
      if (!(P(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || E(n) && re(n, oe) === "attribute" || $(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Be(n)))
        return;
    }
}
function yo(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Be(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), P(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Ic(s) && (t = s, s = s.getNextSibling()), E(s) && re(s, oe) === "attribute" && (r = s, s = s.getNextSibling()), P(s) && s.getMarkerSyntax() === "selfClosing" && Jr(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function Lc(e) {
  return $(ho(e));
}
function Ra(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Lc(t) : t.getChildren().some((i) => $(i) && i.getMarker() === r) ? !0 : void 0;
}
function gk(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Ra(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function bo(e) {
  return E(e) && e.getType() === ze.getType() && re(e, oe) !== "attribute";
}
function Dc(e, t) {
  if (e.getMarkerSyntax() !== "opening" || Ra(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return P(r) ? Ra(r, t) === !0 ? "spacer" : void 0 : bo(r) ? r.getTextContent().startsWith(q) ? void 0 : "prefix" : "spacer";
}
function mk(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (P(t) && Dc(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Mp(e, t) {
  const r = O();
  if (!w(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Ep(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Dc(t, e);
    if (r !== void 0 && !Mp(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        E(n) && n.setTextContent(q + n.getTextContent());
      } else
        t.insertAfter(he(q));
  });
}
function Ap(e) {
  return e.isAttached() ? e.getChildren().some((t) => P(t) && Dc(t, e) !== void 0 && Mp(t, e)) : !1;
}
const yk = "file", bk = "src", kk = "colspan", Tk = "category", xk = "alt", _k = "closed", Ck = "false";
function vk(e) {
  return e[_k] !== Ck;
}
function Sk(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === yk ? bk : t,
    r
  ]));
}
function Mk(e, t) {
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
function Pp(e, t, r) {
  const n = r ?? {}, i = vk(n);
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
        opening: `\\${Mk(t, n[kk])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: rr(Sk(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [Tk]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + rr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [xk]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: rr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: rr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const kt = { wantsRun: !1, valueText: void 0 }, Er = {};
function ra(e, t) {
  if (t === "va")
    return e;
  const r = Wi(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function Uc(e) {
  const t = O();
  if (!w(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (L(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function ko(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = O();
  if (!w(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function Ek(e) {
  return Be(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : P(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : E(e) && re(e, oe) === "attribute";
}
function Ak(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!E(e) || re(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function na(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (we(t))
      return t;
    if (!Ek(t))
      return;
  }
}
function du(e) {
  return {
    kind: e,
    ownerPredicate: (t) => we(t),
    ownerOf: (t) => {
      if (Be(t))
        return t.getRunKind() === e ? na(t) : void 0;
      const r = t.getParent();
      return Be(r) ? r.getRunKind() === e ? na(r) : void 0 : Ak(t) === e ? na(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!we(t))
        return kt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? kt : { wantsRun: !0, valueText: q + r };
    },
    scanPieces: (t) => we(t) ? Wi(ra(t, e), e) : Er,
    graceSite: (t, r) => we(t) ? !r.opener && !r.closer ? Uc(ra(t, e)) : ko(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => we(t) ? ra(t, e) : void 0
    }
  };
}
const Pk = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => $(e),
  ownerOf: () => {
  },
  expectedPieces: () => kt,
  scanPieces: () => Er,
  graceSite: (e) => $(e) && Ap(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, wk = {
  kind: "char",
  ownerPredicate: (e) => $(e),
  ownerOf: (e) => {
    if (!E(e) || re(e, oe) !== "attribute")
      return;
    const t = e.getParent();
    return $(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!$(e) || Li(e) === void 0)
      return kt;
    const t = rr(e.getUnknownAttributes() ?? {}, co(e.getMarker()));
    return t === "" ? kt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => $(e) ? { value: Tp(e) } : Er,
  graceSite: (e, t) => {
    if (!$(e) || t.value)
      return !1;
    const r = Li(e);
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
    insertRunBefore: (e) => $(e) ? Li(e) : void 0
  }
};
function wp(e) {
  if (P(e))
    return e.getMarker() === "cat";
  if (!E(e) || re(e, oe) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return P(t) && t.getMarker() === "cat";
}
function Nk(e) {
  const t = e.getParent();
  if (!j(t))
    return;
  const r = Hi(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!wp(n))
        return;
    }
}
const Ok = {
  kind: "cat",
  ownerPredicate: (e) => j(e),
  ownerOf: (e) => {
    if (Be(e))
      return e.getRunKind() === "cat" && j(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Be(t) ? t.getRunKind() === "cat" && j(t.getParent()) ? t.getParent() ?? void 0 : void 0 : wp(e) ? Nk(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!j(e) || e.getIsCollapsed() !== !1)
      return kt;
    const t = e.getCategory();
    return t === void 0 ? kt : { wantsRun: !0, valueText: q + t };
  },
  scanPieces: (e) => j(e) ? xp(e) : Er,
  graceSite: (e, t) => {
    if (!j(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Hi(e);
      return r !== void 0 && Uc(r);
    }
    return ko(t);
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
function qk(e) {
  return Be(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : P(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : E(e) && re(e, oe) === "attribute";
}
function Rk(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!E(e) || re(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function $k(e) {
  const t = e.getParent();
  if (!$e(t))
    return;
  const r = mo(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!qk(n))
        return;
    }
}
function fu(e) {
  const t = (r) => $e(r) ? e === "ca" ? mo(r) : Cp(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => $e(r),
    ownerOf: (r) => {
      if (Be(r))
        return r.getRunKind() === e && $e(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Be(n) ? n.getRunKind() === e && $e(n.getParent()) ? n.getParent() ?? void 0 : void 0 : Rk(r) === e ? $k(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!$e(r))
        return kt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? kt : { wantsRun: !0, valueText: q + n };
    },
    scanPieces: (r) => $e(r) ? e === "ca" ? _p(r) : vp(r) : Er,
    graceSite: (r, n) => {
      if (!$e(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && Uc(i);
      }
      return ko(n);
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
  return E(e) && re(e, oe) === "attribute";
}
function Ik(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (je(t)) {
      const r = P(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Np(t))
      return;
  }
}
const Lk = {
  kind: "milestone",
  ownerPredicate: (e) => je(e),
  ownerOf: (e) => {
    const t = Be(e) ? e.getRunKind() === "milestone" ? e : void 0 : Be(e.getParent()) ? e.getParent() : Np(e) ? e : void 0;
    if (!t || Be(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Be(t) ? je(r) ? r : void 0 : Ik(t);
  },
  expectedPieces: (e) => {
    if (!je(e))
      return kt;
    const t = kp(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = rr(t, uo(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : q + r };
  },
  scanPieces: (e) => {
    if (!je(e))
      return Er;
    const { opening: t, attribute: r, closing: n, wrapper: i } = yo(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!je(e))
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
    return ko(t);
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
}, Dk = Pp("optbreak", void 0, void 0).opening, Uk = {
  kind: "optbreak",
  ownerPredicate: (e) => Le(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Le(t) || t.getTag() !== "optbreak"))
      return E(e) || Ut(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: Dk }),
  scanPieces: (e) => Le(e) ? { value: e.getFirstChild() ?? void 0 } : Er,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, Fk = {
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
  expectedPieces: () => kt,
  scanPieces: () => Er,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, zk = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => $(e),
  ownerOf: () => {
  },
  expectedPieces: () => kt,
  scanPieces: () => Er,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Gi = [
  Pk,
  wk,
  du("va"),
  du("vp"),
  Ok,
  fu("ca"),
  fu("cp"),
  Lk,
  Uk,
  Fk,
  zk
], Kk = new Map(Gi.map((e) => [e.kind, e]));
function _n(e) {
  const t = Kk.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Cn(e) {
  for (const t of Gi) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function Op(e) {
  return Cn(e) !== void 0;
}
const Fs = "unmatched", qp = 2;
function Di(e) {
  return `\\${e}`;
}
class Ar extends ze {
  __marker;
  constructor(t = "", r) {
    super(Di(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new Ar(r, n);
  }
  static importDOM() {
    return {
      [Fs]: (t) => Bk(t) ? {
        conversion: jk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Fc().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Xl), r.title = pu(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = pu(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Fs);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Xl), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: qp
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Rp(e) {
  return e.getTextContent() === Di(e.getMarker());
}
function pu(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function jk(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Fc(t) };
}
function Fc(e) {
  return Ke(new Ar(e));
}
function Bk(e) {
  return e?.tagName.toLowerCase() === Fs;
}
function Yr(e) {
  return e instanceof Ar;
}
const $p = "table", $a = "immutable-table", Ip = 1, Vk = ["type", "marker", "content"];
class On extends Yt {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return $a;
  }
  static clone(t) {
    return new On(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return Wk().updateFromJSON(t);
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
      type: $a,
      ...t !== void 0 && { unknownAttributes: t },
      version: Ip
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function Wk(e) {
  return Ke(new On(e));
}
function Lp(e) {
  return e instanceof On;
}
function Hk(e) {
  return e?.type === $a;
}
const Dp = "table:row", hu = "immutable-table-row", Up = 1, Ia = "tr", Gk = ["type", "marker", "content"];
class fi extends Yt {
  __marker;
  __unknownAttributes;
  constructor(t = Ia, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return hu;
  }
  static clone(t) {
    return new fi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return Jk().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Ia).setUnknownAttributes(t.unknownAttributes);
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
      type: hu,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Up
    };
  }
}
function Jk(e, t) {
  return Ke(new fi(e, t));
}
const Fp = "table:cell", gu = "immutable-table-cell", zp = 1, La = "tc1", Yk = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function Xk(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class pi extends Yt {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = La, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return gu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new pi(r, n, i, s, o);
  }
  static importJSON(t) {
    return Qk().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? La).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = Xk(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: gu,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: zp
    };
  }
}
function Qk(e, t, r, n) {
  return Ke(new pi(e, t, r, n));
}
function To(e, t) {
  const r = e.getChildAtIndex(t);
  return E(r) ? r : void 0;
}
function Jt(e, t) {
  const r = To(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Ji(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function Zk(e) {
  return e.getChildren().some((t) => P(t) && t.getMarkerSyntax() === "closing");
}
function eT(e) {
  return Ji(e) ? void 0 : { closed: "false" };
}
function tT(e, t, r, n) {
  const i = t.getMarker(), s = Lc(t), o = Zk(t);
  if (n) {
    e.append(at(i, "opening", s));
    const [a] = r;
    bo(a) && !a.getTextContent().startsWith(q) && a.setTextContent(q + a.getTextContent());
  }
  e.append(...r), o && e.append(at(i, "closing", s));
}
function Br(e) {
  return We(e, $) ?? void 0;
}
function zc(e) {
  let t = e.getParent();
  for (; $(t); )
    t = t.getParent();
  return t;
}
function Da(e) {
  const t = Kp(e);
  return e.getChildren().every((r) => P(r) || t && re(r, oe) === "attribute" || E(r) && r.getTextContent().replaceAll(q, "") === "");
}
function Kp(e) {
  return Ji(e);
}
function rT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? rr(r, co(e.getMarker())) : "";
  n !== "" && t.insertAfter(he(n)), e.remove();
}
function nT(e, t) {
  if (Ji(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(at(e.getMarker(), "closing", Lc(e)));
}
function iT(e, t) {
  return $(e) && !Ji(e) && !Ji(t);
}
function sT(e, t, r) {
  Da(e) && e.getChildren().forEach((i) => {
    P(i) || i.remove();
  });
  const [n] = t;
  r && bo(n) && !n.getTextContent().startsWith(q) && n.setTextContent(q + n.getTextContent()), e.append(...t);
}
function oT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Kp(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = P(l) && l.getMarkerSyntax() === "closing", f = s && re(l, oe) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = iT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      sT(e, o, n);
    else {
      const l = Tr(t.getMarker(), eT(t));
      tT(l, t, o, n), e.insertAfter(l), Da(l) ? l.remove() : c = l;
    }
  i && !a && nT(t, n), Da(t) && rT(t, c);
}
function vn(e, t) {
  let r = e.getParent();
  for (; $(r); )
    oT(e, r, t), r = e.getParent();
}
function xo(e) {
  if (E(e) && !P(e)) {
    const t = e.getTextContent().startsWith(q) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (L(e)) {
    const t = e.getChildren().find((r) => !P(r));
    if (t) {
      xo(t);
      return;
    }
    e.selectEnd();
  }
}
const Zn = /* @__PURE__ */ new WeakMap();
function aT(e, t) {
  return Zn.set(e, t), () => {
    Zn.get(e) === t && Zn.delete(e);
  };
}
function mu(e) {
  return Zn.get(e);
}
function cT(e) {
  return Zn.get(as())?.has(e.getKey()) ?? !1;
}
function lT(e) {
  Zn.get(as())?.add(e.getKey());
}
function uT(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Ua(e) {
  return !!(e.opener || e.value || e.closer);
}
function yu(e) {
  return /^\s/.test(e);
}
function Kc(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !yu(t) || !yu(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function _o(e, t, r) {
  return r.wantsRun ? Kc(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : uT(t);
}
function dT(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return Kc(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function jp(e, t) {
  return !Ua(e.scanPieces(t));
}
function fs(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!_o(e, n, r))
    return !1;
  const i = O();
  if (!w(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Us(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function fT(e, t, r, n) {
  return !r.wantsRun || Ua(n) || Hm(ji) ? !1 : as().getEditorState().read(() => {
    const i = ne(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Ua(e.scanPieces(i));
  });
}
function pT(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function bu(e) {
  const t = he(e);
  return yt(t, oe, "attribute"), t;
}
function hT(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = mp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function gT(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    E(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(bu(n.valueText));
    return;
  }
  const l = hT(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = at(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : E(d) ? Kc(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = bu(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(at(a === "selfClosing" ? "" : o(t), a));
}
function Yi(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (_o(e, i, n) && !cT(t)) {
    if (fT(e, t, n, i)) {
      lT(t);
      return;
    }
    if (!fs(e, t)) {
      if (!n.wantsRun) {
        pT(i);
        return;
      }
      gT(e, t, i, n);
    }
  }
}
function mT(e, t, r) {
  Yi(e, t), t.isAttached() && fs(e, t) && r.add(t.getKey());
}
function Bp(e) {
  if (!E(e))
    return !1;
  if (P(e) || we(e) || Yr(e))
    return !0;
  const t = re(e, oe);
  return t === "attribute" || t === lr;
}
function jc(e, t) {
  return P(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && Jr(e) && $(e.getParent())) : !1;
}
function yT() {
  const e = O();
  return w(e) ? jc(e.focus.getNode(), e.focus.offset) : !1;
}
function Vp(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return E(t) && Bp(t) ? t : void 0;
}
function bT(e) {
  const t = Vp(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function kT(e) {
  const t = Vp(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function ku(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Tu(e, t) {
  e.set(t.key, t.offset, t.type);
}
function TT(e, t) {
  let r = kT(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!E(n))
      return;
    if (!Bp(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function xu(e, t) {
  const r = TT(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Wp(e) {
  if (e.isCollapsed()) {
    const a = bT(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [ku(r), ku(n)], s = xu(r, "next"), o = xu(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Tu(r, i[0]), Tu(n, i[1]), !1) : !0;
}
const zs = "verse-block", Hp = 1, xT = "verse-block";
class hi extends Yt {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return zs;
  }
  static clone(t) {
    return new hi(t.__number, t.__key);
  }
  static importJSON(t) {
    return _T().updateFromJSON(t);
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
    return fp(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(xT), _u(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && _u(r, this.__number), !1;
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
      type: zs,
      number: this.getNumber(),
      version: Hp
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function _u(e, t) {
  const { start: r, end: n } = fp(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Cu(e, "data-verse-start", i ? r : NaN), Cu(e, "data-verse-end", i ? n : NaN);
}
function Cu(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function _T(e) {
  return Ke(new hi(e));
}
function Xi(e) {
  return e instanceof hi;
}
function CT(e) {
  return e?.type === zs;
}
const vT = [
  Ft,
  ur,
  At,
  ft,
  ye,
  Me,
  Ht,
  dr,
  wn,
  vr,
  Ar,
  et,
  jr,
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
  Mr,
  {
    replace: gc,
    with: () => Vt(),
    withKlass: jr
  }
], Ks = {
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
}, ST = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function MT(e) {
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
      category: nr(r)?.category ?? T.Uncategorized,
      type: ST[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: nr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function vu(e, t, r) {
  const n = {
    type: sr,
    version: ir,
    content: e
  }, i = t.serializeEditorState(n, r);
  return fo(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Gp = "v", Jp = 1, ET = "verse-selected";
class Ct extends ss {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Gp, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => wT(t) ? {
        conversion: PT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Bc().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Sa, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Pn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Sa, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Lt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Os + this.getNumber() + Os
    );
    return S(AT, { nodeKey: this.getKey(), text: t });
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
      version: Jp
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (up(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function AT({ nodeKey: e, text: t }) {
  const [r] = uy(e);
  return S("span", { className: r ? ET : void 0, children: t });
}
function PT(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Bc(t) };
}
function Bc(e, t, r, n, i, s) {
  return Ke(new Ct(e, t, r, n, i, s));
}
function wT(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Gp;
}
function qn(e) {
  return e instanceof Ct;
}
function NT(e) {
  return e?.type === Ct.getType();
}
function me(e) {
  return we(e) || qn(e);
}
function Yp(e) {
  return rp(e) || NT(e);
}
function OT(e) {
  return qT(e).find((t) => se(t));
}
function qT(e) {
  return e.some(Xi) ? e.flatMap((t) => Xi(t) ? t.getChildren() : t) : e;
}
function Co(e) {
  return L(e) ? Xi(e) ? e.getChildren().flatMap(Co) : e.getChildren() : [];
}
function RT(e, t) {
  return Co(e).find((i) => me(i) && Rc(t, i.getNumber()));
}
function $T(e, t) {
  return t === 0 ? OT(e) : e.map((r) => RT(r, t)).filter((r) => r)[0];
}
function js(e) {
  return Co(e).find((r) => me(r));
}
function Xp(e, t) {
  if (!L(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (me(i))
      return i;
  }
}
function IT(e) {
  const t = e.getParent();
  if (t && L(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (me(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !He(r); ) {
    const n = js(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Fa(e) {
  return Co(e).findLast((t) => me(t));
}
function LT(e) {
  if (!we(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function DT(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && L(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function UT(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return DT(t, e, r);
  if (E(e)) {
    const n = LT(e);
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
function FT(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!w(t))
    return Su(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return UT(e, t) ? { verseNum: n } : Su(e);
}
function zT(e) {
  return Wb(e) || qn(e);
}
function Vc(e) {
  if (E(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(q) && e.setTextContent(`${t} `);
  }
}
function Qp(e) {
  if (E(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Zp(e, t) {
  return e.getEditorState().read(() => !ne(t));
}
function KT(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Wc(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && L(i) && L(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && L(i)) {
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
      let s = Mu(i);
      for (; s && !He(s); ) {
        const o = js(s);
        if (o) {
          n = o;
          break;
        }
        s = Mu(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = js(s);
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
function jT(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Wc(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && L(i) && (n = Xp(i, r.getIndexWithinParent())), !n && i) {
      let o = Eu(i);
      for (; o && !He(o); ) {
        const a = Fa(o);
        if (a) {
          n = a;
          break;
        }
        o = Eu(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !He(s); ) {
      const o = Fa(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function Mu(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function Eu(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function Wc(e, t) {
  if (L(e) && w(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && me(n))
      return n;
    const i = Xp(e, t.anchor.offset);
    if (i)
      return i;
    const s = js(e);
    if (s)
      return s;
  }
  return Hc(e);
}
function Hc(e) {
  if (!e || He(e))
    return;
  if (me(e))
    return e;
  let t = cu(e);
  for (; t; ) {
    if (He(t))
      return;
    if (me(t))
      return t;
    const r = Fa(t);
    if (r)
      return r;
    t = cu(t);
  }
}
const BT = ["style"], VT = ["style", "code"], Bs = ["style", "cid"], WT = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], HT = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], GT = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], JT = ["style", "caller", "category", "contents"], YT = ["tag", "marker", "contents"], XT = [
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
function QT(e, t) {
  const r = ne(e);
  if (!Et(r))
    return;
  const n = eh(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function eh(e, t = "delta-doc") {
  if (!e)
    return;
  const r = mf();
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
      if (xr(l) || Et(l))
        return n;
      xt(l) && (a = l);
    }
    if (xt(l) && (i.includes(l) || i.push(l)), th(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += Gc(l, t);
  }
  if (a)
    return n;
}
function Au(e, t, r = "delta-doc") {
  if (e.length < 2 || !tx(e[0]) || !ex(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => ZT(n, r)?.getKey());
}
function ZT(e, t = "delta-doc") {
  const r = mf();
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
    if (xt(a) && (i.includes(a) || i.push(a)), th(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = Gc(a, t);
    if (xr(a) && l > 0 && e >= n && e < n + l || Et(a) && n === e)
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
  return e ? t ? !Us(t.node, e.getKey()) : !0 : !1;
}
function xr(e) {
  return E(e) && !Et(e);
}
function Et(e) {
  return He(e) || me(e) || je(e) || j(e) || Le(e) || Yr(e);
}
function Lr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function ex(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && XT.includes(t);
}
function tx(e) {
  return e.retain != null && typeof e.retain == "number";
}
function th(e, t) {
  return j(e) || Le(e) ? !0 : t === "apply" && L(e) && Et(e);
}
function rh(e) {
  const t = e.getParent();
  return _t(e) && se(t) && t.getFirstChild() === e;
}
function za(e) {
  const t = e.getParent();
  return t !== null && We(t, Be) !== null;
}
function rx(e) {
  const t = e.getParent();
  return $(t) && e.getTextContent() === Dt && t.getChildrenSize() === 1;
}
function nx(e) {
  const t = e.getParent();
  if (!j(t))
    return !1;
  const r = e.getPreviousSibling();
  return P(r) && r === t.getFirstChild() && e.getTextContent() === Mt(t.getCaller());
}
function ix(e) {
  return !Op(e) && Gc(e, "delta-doc") === e.getTextContentSize();
}
function Gc(e, t) {
  if (Et(e))
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
    (Nc(e) || rh(e) || re(e, oe) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    re(e, oe) === "attribute" || za(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(xc) || rx(e) || nx(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Ka(e, t) {
  const r = { insert: e.__text }, n = re(e, Kr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = nh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function Pu(e) {
  const t = new Oi();
  return e.isEmpty() || e.read(() => {
    const r = Ue();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && or(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = sx();
    for (const s of i)
      t.push(s);
  }), t;
}
function Jc(e, t) {
  const r = [], n = ui(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...wu(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...wu(c, n.length, n, i, s, o, a));
  return r;
}
function sx() {
  return Jc();
}
function wu(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return ox(e, a, n), ax(e, a, i, s, o), cx(e, t, r, i, o, s, a), He(e) && a.push(fx(e)), me(e) && a.push(hx(e)), je(e) && a.push(gx(e)), Yr(e) && a.push(mx(e)), ux(e, a, s), lx(e, a, s), Tx(c, s), a;
}
function ox(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    Ge(n) ? t.push(dx(n)) : se(n) ? t.push(px(n)) : or(n) && t.push({ insert: Qi });
  }
  xt(e) && (r.includes(e) || r.push(e));
}
function ax(e, t, r, n, i) {
  if (!E(e) || we(e) || Yr(e))
    return;
  const s = e.getParent();
  if (j(s) && s.getFirstChild() === e)
    return;
  const o = Gt(e) !== void 0;
  if (P(e) && (o || rh(e) || za(e) || Op(e)) || re(e, oe) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (us(a))
    return;
  const c = e.getPreviousSibling();
  if (j(s) && P(c) && c === s.getFirstChild() && a === Mt(s.getCaller()))
    return;
  const l = $(s) ? s : void 0, u = l?.getFirstChild();
  o && l && P(u) && c === u && a.startsWith(q) && (a = a.slice(1));
  const d = a.startsWith(xc) || re(e, oe) === "attribute" || za(e), f = !!l && a === Dt && l.getChildrenSize() === 1, p = vo(e, n), g = p ? r.filter((k) => p.children.includes(k)) : r, m = Ka(e, g);
  if (m.insert = a, p) {
    if (!a || a === q || d)
      return;
    p.contentsOps?.push(m);
  } else
    f || d || t.push(m);
  const y = a !== "" && !f && !(d && l);
  if (r.length > 0 && y)
    for (const k of r)
      i.add(k);
}
function cx(e, t, r, n, i, s, o) {
  $(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (si(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = bx(c), u = vo(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function lx(e, t, r) {
  if (!j(e))
    return;
  const n = yx(e), i = vo(e, r), s = {
    node: e,
    children: ui(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function ux(e, t, r) {
  if (!Le(e))
    return;
  const n = kx(e), i = vo(e, r), s = {
    node: e,
    children: ui(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Xr(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function dx(e) {
  const t = { style: Vi, code: e.__code };
  return Xr(t, e), { insert: Qi, attributes: { book: t } };
}
function fx(e) {
  const t = { style: Ls, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Xr(t, e), { insert: { chapter: t } };
}
function px(e) {
  const t = { style: e.__marker };
  return Xr(t, e), { insert: Qi, attributes: { para: t } };
}
function hx(e) {
  const t = { style: Ds, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Xr(t, e), { insert: { verse: t } };
}
function gx(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), Xr(t, e), { insert: { milestone: t } };
}
function mx(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function yx(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), Xr(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = re(e, Kr);
  return n && (r.attributes = { segment: n }), r;
}
function bx(e) {
  const t = { insert: "" }, r = nh([e]);
  return r && (t.attributes = { char: r }), t;
}
function kx(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), Xr(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function vo(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function Tx(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    si(t[r].node, e) && t.splice(r, 1);
}
function nh(e) {
  if (e.length === 0)
    return;
  const t = e.map(xx);
  return t.length === 1 ? t[0] : t;
}
function xx(e) {
  const t = { style: e.__marker }, r = re(e, Tn);
  return r && (t.cid = r), Xr(t, e), t;
}
const ih = 1;
class Wt extends ss {
  __caller;
  __previewText;
  __onClick;
  constructor(t = qs, r = "", n, i) {
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
      span: (t) => Cx(t) ? {
        conversion: _x,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Yc().updateFromJSON(t);
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
    return r && Pn(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => vx(t, n), (l) => Sx(t, n, s, l), () => Mx(t, n), () => Ex(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return S("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === qs && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === Sf && i ? (
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
      version: ih
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function _x(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: Yc(t, r) };
}
function Yc(e, t, r) {
  return Ke(new Wt(e, t, r));
}
function Cx(e) {
  return e ? e.classList.contains(Wt.getType()) : !1;
}
function fr(e) {
  return e instanceof Wt;
}
function vx(e, t) {
  return e.getEditorState().read(() => {
    const r = ne(t);
    if (!j(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function Sx(e, t, r, n) {
  e.update(() => {
    const i = ne(t);
    if (!j(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = ne(r);
    if (!fr(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function Mx(e, t) {
  return e.getEditorState().read(() => {
    const r = ne(t);
    if (!j(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return Jc(r);
  });
}
function Ex(e, t) {
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
const Ax = [
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
], Px = ["†"];
function Xc(e) {
  if (oh())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = Nu(t), [s, o] = Nu(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = Ou(n, i), [s, o] = Ou(s, o);
  const a = mc();
  return a.anchor = Gl(n.getKey(), i, qu(n)), a.focus = Gl(s.getKey(), o, qu(s)), a;
}
function sh() {
  if (oh())
    return;
  const e = O();
  if (!e || !w(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Vs(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Vs(i, s);
  return { start: n, end: o };
}
function Nu(e) {
  if (Dm(e)) {
    const t = tf(e.jsonPath);
    let r = Ue();
    for (let n = 0; n < t.length; n++) {
      if (!r || !L(r))
        return [void 0, void 0];
      const i = di(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : ok(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && L(r) ? [r, ak(r, e.offset)] : [void 0, void 0];
  }
  if (Um(e) || Fm(e)) {
    const t = Si(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (L(t)) {
      const n = t.getLastChild();
      if (n && E(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && L(r) ? [r, 0] : [void 0, void 0];
  }
  if (zm(e)) {
    const t = Si(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (L(t)) {
      const n = t.getLastChild();
      if (n && E(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && L(r) ? [r, 0] : [void 0, void 0];
  }
  if (Km(e)) {
    const t = Si(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = ia(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && E(n) ? [n, 0] : [void 0, void 0];
  }
  if (jm(e)) {
    const t = Si(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = ia(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && E(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (Bm(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = Si(e.jsonPath);
    if (!n || !L(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = ia(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && E(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${Vm(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Ou(e, t) {
  if (!Sr(e))
    return [e, t];
  const r = e.getTextContent().length;
  if (t < 0 || t >= r)
    return [e, t];
  const n = e.getParent();
  if (!n || !L(n))
    return [e, t];
  const i = e.getIndexWithinParent();
  return i < 0 ? [e, t] : [n, i];
}
function qu(e) {
  return L(e) ? "element" : "text";
}
function ia(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (P(n) && n.getMarkerSyntax() === t || t === "closing" && P(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (Sr(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function Si(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = tf(r);
  let i = Ue();
  for (const s of n) {
    if (!i || !L(i))
      return;
    const o = di(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Vs(e, t) {
  if (P(e)) {
    const r = e.getMarkerSyntax(), n = wx(e), i = n ? on(dn(n)) : on(dn(e));
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
      return Vs(n, s);
    }
    const i = ho(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return Vs(i, o);
    }
  }
  if (L(e)) {
    const r = e.getChildAtIndex(t);
    if (Sr(r))
      return {
        jsonPath: on(dn(e))
      };
    const n = hp(e, t);
    return n.type === "text" ? {
      jsonPath: on([...dn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: on(dn(e)),
      offset: n.index
    };
  }
  if (E(e)) {
    const r = sk(e, t);
    if (r)
      return {
        jsonPath: on([
          ...dn(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: on(dn(e)), offset: t };
}
function wx(e) {
  const t = e.getParent();
  if (!t || !L(t))
    return;
  const r = Nx(e);
  return r && !xt(r) && !E(r) && !_e(r) ? r : t;
}
function Nx(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!$c(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function dn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = ho(r);
    if (!n)
      break;
    const i = ik(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function oh() {
  for (let e = Ue().getFirstChild(); e; e = e.getNextSibling())
    if (Xi(e))
      return !0;
  return !1;
}
function ah(e, t, r, n, i, s, o) {
  if (!Me.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Xc(r) : O();
  if (!w(a))
    return;
  const c = Rx(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (qi(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = ch(e, l, c, i, s, void 0, void 0);
  return qx(u, a, i), u;
}
function Qc(e) {
  return e !== "expanded";
}
function Ox(e) {
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
function qx(e, t, r) {
  const n = Qc(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Yb(t), Wp(t);
  const i = Ox(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find($)?.selectEnd();
}
function Vn(e, t, r) {
  const n = Tr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(at(e)) : r?.markerMode === "visible" && n.append(kr("marker", Ne(e)));
  const s = t === "" ? Dt : i ? q + t : t;
  return n.append(he(s)), n;
}
function Rx(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Vn("fr", f, n)), !e.isCollapsed()) {
        const p = $u(e);
        p.length > 0 && o.push(Vn("fq", p, n));
      }
      o.push(Vn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Vn("xo", f, n)), !e.isCollapsed()) {
        const p = $u(e);
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
function ch(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : Qc(n?.noteMode), l = vc(e, t, c);
  s && yt(l, Kr, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = at(e), u && d.setMode("token"), a || (f = at(e, "closing"))) : n?.markerMode === "visible" && (d = kr("marker", Ne(e) + " "), a || (f = kr("marker", it(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = he(Mt(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const g = () => po(), m = r.flatMap(Ix(g));
    if (t === "")
      l.append(...m);
    else {
      const y = Oc(r);
      let k = () => {
      };
      i?.noteCallerOnClick && (k = i.noteCallerOnClick), p = Yc(l.__caller, y, k), l.append(p, g(), ...m);
    }
  }
  return f && l.append(f), l;
}
function Ru(e) {
  if (typeof e == "string") {
    const i = ne(e);
    return j(i) ? i : void 0;
  }
  const t = ui();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => j(i.node))[e]?.node;
  if (j(n))
    return n;
}
function $x(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (qn(n) || !n) {
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
function Ix(e) {
  return (t) => Ut(t) ? [t] : [t, e()];
}
function Lx(e) {
  const t = e.getParent();
  return t !== null && We(t, j) !== null;
}
function $u(e) {
  if (!w(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = nf(e);
  let a = "";
  for (const c of t)
    if (!(j(c) || fr(c) || Lx(c)) && !P(c) && !Yr(c) && re(c, oe) !== "attribute") {
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
const lh = [
  Wt,
  Ct,
  ...vT
], Dx = [
  hi,
  ...lh
], Ux = An((e, t) => {
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
function Fx() {
  const [e, t] = de(void 0), [r, n] = de(), i = X(null), s = ge((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = Ty(l, c, () => {
      xy(l, c, {
        placement: "bottom-start",
        middleware: [_y(), Cy()]
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
function zx({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = Fx();
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
const Kx = Om(Ux);
function uh({ isOpen: e = !1, children: t }) {
  const r = X(null), { coords: n, placement: i } = zx({ isOpen: e, floatingBoxRef: r }), s = Fe(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return gn(
    S(Kx, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const dh = Zd(void 0);
function Zc() {
  const e = ef(dh);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function jx(e, t) {
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
function Bx({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = jx(t, r);
  return S(dh.Provider, { value: i, children: S("div", { ...n, children: e }) });
}
const fh = An(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Zc(), u = ge((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = ge((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return S("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function Vx({ children: e, autoIndex: t = !0, ...r }) {
  const n = X(null), { state: { activeIndex: i, menuItems: s } } = Zc(), o = Fe(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Fe(() => {
    const c = o(s);
    return t ? qm.map(c, (l, u) => Rm(l) && l.type === fh && l.props.index === void 0 ? $m(l, { index: u }) : l) : c;
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
const Wx = (e, t, r) => Es(e, r).toLowerCase().includes(t.toLowerCase()), Iu = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Es = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function Hx(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? Iu(r[0]) : "") : (u = n || (r.length > 0 ? Iu(r[0]) : ""), d = (g, m) => Wx(g, m, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((g) => {
    try {
      return d(g, t);
    } catch (m) {
      return console.warn("Error filtering item:", g, m), !1;
    }
  }).sort((g, m) => {
    const y = (M) => (p.has(M) || p.set(M, Es(M, f).toLowerCase()), p.get(M) ?? ""), k = a ? Es(g, f) : y(g), _ = a ? Es(m, f) : y(m);
    for (const M of c)
      switch (M) {
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
          const v = k.indexOf(l), A = _.indexOf(l);
          if (v !== -1 && A === -1)
            return -1;
          if (A !== -1 && v === -1)
            return 1;
          if (v !== -1 && A !== -1)
            return v - A;
          break;
        }
      }
    return k.localeCompare(_);
  });
}
const sa = {
  Root: Bx,
  Options: Vx,
  Option: fh
};
function Gx(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Fe(() => Hx({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function Jx() {
  const { moveUp: e, moveDown: t, select: r } = Zc();
  return Fe(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const Yx = () => {
  const e = Jx(), [t] = le();
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
    return t.registerCommand(Cr, r, Ie);
  }, [t, e]);
};
function Xx() {
  return Yx(), null;
}
const Qx = ["Shift", "Control", "Alt", "Meta"];
function ph(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = le(), u = s !== void 0, [d, f] = de(""), p = u ? s ?? "" : d, g = Gx({ query: p, items: t, filterBy: "name" }), m = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return K(() => {
    a?.(p, g);
  }, [a, p, g]), K(() => l.registerCommand(Cr, (y) => {
    if (u || c?.includes(y.key) || Qx.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const _ = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((M) => M.slice(0, -1));
      }
    }[y.key];
    return _ ? (y.stopPropagation(), y.preventDefault(), _(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((M) => M + y.key), !0) : !1;
  }, Ie), [l, u, p, o, n, c]), Te(sa.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: g, onSelectOption: (y) => m(y), children: [!u && S("input", { value: p, type: "text", disabled: !0 }), S(Xx, {}), S(sa.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((_, M) => Te(sa.Option, { index: M, children: [S("span", { className: "label", children: _.label ?? _.name }), S("span", { className: "description", children: _.description })] }, _.name)) })] });
}
function Zx({ trigger: e, items: t }) {
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
      const l = O();
      if (w(l))
        return l;
    });
    a.read(() => {
      const l = O();
      !w(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && S(uh, { isOpen: n, children: ({ placement: o }) => S(ph, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function e_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
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
function Ui(e, t) {
  return `${e}:${t}`;
}
function t_(e, t) {
  K(() => {
    if (!e.hasNodes([tt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Ze(yf(e, tt, (n) => Bi(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], g = a[l]?.[d], m = c[l]?.[d];
          i.addID(l, d, f, p, g, m);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(tt, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = ne(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : _e(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!tt.isReservedType(c))
              for (const u of l) {
                let d = t.get(Ui(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Ui(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Ui(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const r_ = An(function({ logger: t }, r) {
  const [n] = le(), i = Fe(() => /* @__PURE__ */ new Map(), []);
  t_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Ui(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = ne(u);
        _e(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && Is(d));
      }
  };
  return hc(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (tt.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = Xc(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), Ff(p, a, c, l, u, d, f);
      }, { tag: Ma });
    },
    removeAnnotation(o, a) {
      if (tt.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Ui(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Ma });
    }
  })), null;
}), n_ = [];
function i_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = n_, onChange: n }) {
  const [i] = le();
  return is(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(sf) && !u.has(Af) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = s_(i, s);
        d.length !== 0 && n(o, i, u, d);
      });
  }, [i, e, t, r, n]), null;
}
function s_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Oi();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = ne(i), o = s !== null && Gt(s) !== void 0;
    if (t.size === 1 && E(s) && !o && ix(s)) {
      const a = eh(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = ne(i);
          return new Oi([E(d) ? Ka(d) : { insert: "" }]);
        }), l = new Oi([Ka(s)]), u = new Oi(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = Pu(r), c = Pu(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const el = "formatted", hh = "unformatted", gh = "paragraph-structure", mh = "standard", yh = "block-verse", o_ = {
  [el]: "Formatted",
  [hh]: "Unformatted",
  [gh]: "Paragraph Structure",
  [mh]: "Standard",
  [yh]: "Block Verse"
};
function Rn(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let tl, rl;
function a_(e) {
  const t = bh(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  tl = e, rl = t;
}
a_(el);
const R1 = () => tl, So = () => rl;
function bh(e) {
  let t;
  switch (e ?? tl) {
    case el:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case hh:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case gh:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case mh:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case yh:
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
function $1(e) {
  if (!e)
    return;
  const t = Lu(e);
  return Object.keys(o_).find((r) => wt(Lu(bh(r)), t));
}
const c_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function Lu(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...c_, ...t };
}
function Mo(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function l_(e) {
  if (e)
    return Zi(e) ? Ct : e.markerMode === "editable" ? ft : Ct;
}
function Zi(e) {
  return e?.verseLayout === "block";
}
function u_(e) {
  const t = [], r = e ?? rl;
  return r && (t.push(`${Ly}${r.markerMode}`), r.hasSpacing && t.push($y), r.isFormattedFont && t.push(Iy)), t;
}
function d_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += f_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), h_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += g_(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), y_(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function f_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), p_(t, e.retain, e.attributes, r, n)), e.retain);
}
function p_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Ue();
  function l(u) {
    if (s <= 0)
      return !0;
    if (xr(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), p = d - f, g = Math.min(s, p);
        if (g > 0) {
          let m = u;
          const y = f > 0, k = g < d - f;
          if (y && k) {
            const [, _] = u.splitText(f);
            [m] = _.splitText(g);
          } else y ? [, m] = u.splitText(f) : k && ([m] = u.splitText(g));
          if (Vr(r)) {
            const _ = m.getParent();
            if ($(_)) {
              const M = r.char;
              let v;
              Array.isArray(M) ? a >= 0 && a <= M.length - 1 && (v = M[a]) : a === 0 && (v = M);
              const A = v ? xn(v, _) : !1;
              if (A && Array.isArray(M) && M.length > 1) {
                const x = he("");
                m.replace(x);
                const I = typeof r.segment == "string" ? r.segment : void 0, U = gi(M.slice(1), n, m, I);
                let G = x;
                for (const V of U)
                  G.insertAfter(V), G = V;
                x.remove(), Nt(r, m);
              } else if (A)
                Nt(r, m);
              else {
                m.remove();
                const x = Du(m, r, n, i);
                if (x && x.length > 0) {
                  let I = _;
                  for (const U of x)
                    I.insertAfter(U), I = U;
                }
              }
            } else {
              const M = he("");
              m.replace(M);
              const v = Du(m, r, n, i);
              if (v && v.length > 0) {
                let A = M;
                for (const x of v)
                  A.insertAfter(x), A = x;
                M.remove();
              } else
                M.replace(m);
            }
          } else
            Nt(r, m);
          s -= g;
        }
      }
      o += d;
    } else if (Et(u))
      e <= o && o < e + t && s > 0 && (Uu(u, r), s -= 1), o += 1;
    else if ($(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (Vr(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            ja(u, p.style), typeof p.cid == "string" && yt(u, Tn, () => p.cid);
            const g = De(p, Bs);
            g && Object.keys(g).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...g
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || M_(r.char)) && (d = !0);
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
    } else if (xt(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!or(u))
          Uu(u, r);
        else if (nl(r)) {
          const p = xh(r.para, n);
          p && u.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if (L(u)) {
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
function Du(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = gi(t.char, r, e, i), o = s.find($);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Nt(t, e);
    return;
  }
  const a = {};
  Sh.forEach((u) => {
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
function kh(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  P(r) ? (r.setMarker(t), r.setTextContent(Ne(t))) : Ut(r) && r.getTextType() === "marker" && r.setTextContent(Ne(t) + q);
}
function ja(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    P(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = $(e.getParent()), i = e.getFirstChild();
  Ut(i) && i.getTextType() === "marker" && i.getTextContent() === Ne(r, n) && i.setTextContent(Ne(t, n));
  const s = e.getLastChild();
  Ut(s) && s.getTextType() === "marker" && s.getTextContent() === it(r, n) && s.setTextContent(it(t, n));
}
function Uu(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && $(e) && Vr(t)) {
      const i = Ba(n);
      if (ja(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        yt(e, Tn, () => o);
      }
      const s = De(i, Bs);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (He(e) || me(e) || je(e) || j(e) || Le(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (Ge(e) || se(e) || $(e)) && (r === "style" && se(e) ? kh(e, n) : r === "style" && $(e) ? ja(e, n) : r === "code" && Ge(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && yt(e, Kr, () => n));
  }
}
function h_(e, t, r) {
  if (t <= 0)
    return;
  const n = Ue();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (xr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (Et(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (xt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && xt(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Vt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Se(p)) {
            let g = i + 1;
            const m = p.getChildren();
            for (const k of m) {
              if (s <= 0)
                break;
              const _ = i;
              if (i = g, o(k)) {
                i = _;
                break;
              }
              xr(k) ? g += k.getTextContentSize() : Et(k) && (g += 1), i = _;
            }
            const y = p.getChildren();
            for (const k of y)
              k.remove(), a.append(k);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Vt(), !0);
        } else se(a) ? a.replace(Vt(), !0) : a.remove();
      }
      i += 1;
    } else if (L(a)) {
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
function g_(e, t, r, n, i) {
  if (t === Qi)
    return Fu(e, r, n, i);
  if (t.endsWith(Qi) && !nl(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Vr(r))
        throw new Error("Text + LF should not have char attributes");
      o += Ws(e, s, r, i);
    }
    return o += Fu(e + o, r, n, i), o;
  } else return Vr(r) ? m_(e, t, r, n, i) : Ws(e, t, r, i);
}
function m_(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = he(t === "" ? Dt : t);
  Nt(r, s);
  let o;
  {
    let y = function(k) {
      if (xr(k)) {
        const _ = k.getTextContentSize();
        if (e >= m && e < m + _) {
          const M = k.getParent();
          return $(M) && (o = M), !0;
        }
        m += _;
      } else if (Et(k))
        m += 1;
      else if ($(k)) {
        const _ = k.getChildren();
        for (const M of _)
          if (y(M))
            return !0;
      } else if (L(k)) {
        const _ = k.getChildren();
        for (const M of _)
          if (y(M))
            return !0;
        xt(k) && (m += 1);
      }
      return !1;
    };
    const g = Ue();
    let m = 0;
    y(g);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const g = a[0];
      g && xn(g, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (xn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = gi(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find($);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Ws(e, t, void 0, i);
  const f = {};
  for (const [g, m] of Object.entries(r))
    g !== "char" && g !== "segment" && typeof m == "string" && (f[g] = m);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const g of u)
    if (!Th(e, g, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Ws(e, t, void 0, i));
}
function Ws(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Ue();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (xr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = he(t);
        if (Nt(r, d), u === 0)
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
    } else if (Et(c))
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
    } else if (xt(c)) {
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
    } else if (L(c)) {
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
    const l = Vt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Th(e, t, r) {
  const n = Ue();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Vt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!L(a))
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
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Vt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (xr(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (Et(l))
        i += 1;
      else if ($(l)) {
        if (o(l))
          return !0;
      } else if (xt(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (or(u) && xt(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (L(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return L(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Vt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Se(a) ? or(a) && se(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Se(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : ($(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Se(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function y_(e, t, r, n, i) {
  let s;
  return Lr("chapter", t) ? s = k_(t.insert.chapter, r) : Lr("verse", t) ? s = T_(t.insert.verse, r) : Lr("ms", t) ? s = x_(t.insert.ms) : Lr("note", t) ? s = _h(t, r, n, i) : Lr("unknown", t) ? s = Ch(t, r, n, i) : Lr("unmatched", t) && (s = C_(t.insert.unmatched, r)), s ? Th(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Fu(e, t, r, n) {
  let i;
  nl(t) ? i = xh(t.para, r) : S_(t) && (i = b_(t.book)), i ??= Vt();
  const s = i, o = se(s), a = or(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (xr(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (se(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const g = e - c, [m] = g > 0 ? d.splitText(g) : [void 0];
          let y, k = m?.getPreviousSibling();
          for (; k; ) {
            const _ = k;
            k = k.getPreviousSibling(), y ? y.insertBefore(_) : s.append(_), y = _;
          }
          return m && s.append(m), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Et(d))
      c += 1;
    else if (xt(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (or(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (se(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && se(d) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${d.getMarker()}) at targetIndex ${e}`), d.insertAfter(s), l = !0, !0;
    } else if (L(d)) {
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
function b_(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Vi || !r || !Ft.isValidBookCode(r))
    return;
  const n = De(e, VT);
  return jf(r, n);
}
function xh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = De(e, BT), i = ri(r, n);
  if (!Rn(t))
    return i;
  if (t.markerMode === "editable")
    i.append(at(r), po());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Ne(r) + q;
    i.append(t.hasGutterParaMarkers ? fb(s) : kr("marker", s));
  }
  return i;
}
function k_(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = De(e, WT);
  let a;
  if (t.markerMode === "editable")
    a = Vf(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Pc(r, c, n, i, s, o);
  }
  return a;
}
function T_(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = De(e, HT);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Lt(r, n);
    c = tp(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Bc(n, l, i, s, o, a);
  }
  return c;
}
function x_(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = De(e, GT);
  return Nf(t, r, n, s, i);
}
function _h(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = De(i.note, JT), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const m of c?.ops ?? [])
    if (typeof m.insert == "string")
      if (Vr(m.attributes)) {
        const y = gi(m.attributes.char, t, he(m.insert), void 0, vh(m.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(he(m.insert));
  return ch(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function Ch(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = De(i, YT), l = Ec(s, o, c), u = a?.ops ?? [];
  u.length > 0 && __(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && yt(l, Kr, () => d), l;
}
function __(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Vr(s.attributes)) {
        const o = he(s.insert), a = gi(s.attributes.char, t, o, void 0, vh(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(he(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Lr("unknown", s)) {
        const o = Ch(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Lr("note", s)) {
        const o = _h(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function C_(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = Fc(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function vh(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Ba(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function gi(e, t, r, n, i, s = !1, o = !1) {
  E(r) && r.getTextContentSize() === 0 && r.setTextContent(Dt);
  const a = () => {
    o && E(r) && r.getTextContent() !== Dt && r.setTextContent(q + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Ba), l = c[0], u = i?.[i.length - 1];
    if ($(u) && xn(l, u))
      return c.length > 1 ? gi(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, p, g) => {
      const m = Tr(p.style, De(p, Bs));
      if (typeof p.cid == "string" && yt(m, Tn, () => p.cid), n && g === c.length - 1 && yt(m, Kr, () => n), f)
        if ($(f)) {
          const y = f.getMarker(), k = [];
          aa(y, k, t, !0), k.forEach((M) => m.append(M)), m.append(f);
          const _ = [];
          oa(f, _, t, !0), _.forEach((M) => m.append(M));
        } else
          m.append(f);
      return m;
    }, r);
    return aa(l.style, d, t, s), oa(d, d, t, s), [d];
  } else {
    const c = Ba(e), l = i?.[i.length - 1];
    if ($(l) && xn(c, l))
      return r && l.append(r), [];
    a();
    const u = Tr(c.style, De(c, Bs));
    return typeof c.cid == "string" && yt(u, Tn, () => c.cid), n && yt(u, Kr, () => n), r && u.append(r), aa(c.style, u, t, s), oa(u, u, t, s), [u];
  }
}
function oa(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && v_(e.getMarker(), t, r, !1, n);
}
function aa(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = at(e, "opening", n) : r?.markerMode === "visible" && (i = kr("marker", Ne(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function v_(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = at("", "selfClosing") : s = at(e, "closing", i) : r?.markerMode === "visible" && (s = kr("marker", n ? it("") : it(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function S_(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function nl(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Vr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function M_(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Nt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        yt(t, Kr, () => n);
        continue;
      }
      if (E_(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const Sh = [
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
function E_(e) {
  return Sh.includes(e);
}
function A_() {
  const [e] = le();
  return K(() => e.registerCommand(so, (t) => (P_(t), !1), yn), [e]), null;
}
function P_(e) {
  if (w_(e.target))
    return;
  const t = O();
  w(t) && N_(t);
}
function mi(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (_t(t))
      r++, t = t.getNextSibling(), E(t) && t.getTextContent() === q && (r++, t = t.getNextSibling());
    else if (me(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Jt(e, r), !0);
}
function w_(e) {
  if (!of(e))
    return !1;
  const t = cs(e);
  if (!pb(t))
    return !1;
  const r = t.getParent();
  return r ? Se(r) ? mi(r) : (Jt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function N_(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = ne(t.key);
  if (!Se(r))
    return !1;
  const n = r.getFirstChild();
  return !Sr(n) && !qn(n) ? !1 : mi(r);
}
function O_() {
  const [e] = le();
  return K(() => {
    const t = (r) => r instanceof KeyboardEvent && !q_(r) || !Mh() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Ze(
      e.registerCommand(Cr, t, Ie),
      e.registerCommand(yc, t, Ie),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm records what a cut would cover
      // and claims nothing, so either order of the two is correct: with no removal, nothing it
      // armed can be reaped.
      e.registerCommand(mr, t, yr),
      e.registerCommand(bn, t, yr),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(bc, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = cs(r.target);
        return !n || !Sn(n) ? !1 : (r.preventDefault(), !0);
      }, Ie),
      e.registerCommand(Gm, t, Ie),
      e.registerCommand(Jm, t, Ie),
      e.registerCommand(Ym, t, Ie)
    );
  }, [e]), null;
}
function q_(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Sn(e) {
  return We(e, (t) => Le(t) || Lp(t)) ?? void 0;
}
function Mh() {
  const e = O();
  return w(e) ? Sn(e.anchor.getNode()) !== void 0 || Sn(e.focus.getNode()) !== void 0 : !1;
}
function R_(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function $_(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), R_(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function I_(e, t, r, n) {
  if (!Y_(t) || $_(e, r))
    return !1;
  const i = r === "up" ? jT(t) : KT(t);
  return i && n.preventDefault(), i;
}
function L_({ viewOptions: e }) {
  const [t] = le();
  return D_(t, e), null;
}
function D_(e, t) {
  K(() => {
    if (!e.hasNodes([ur, Ct, Me]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = O();
      if (!w(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = zu(o), d = V_(i, Ku(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return I_(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = zu(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Ku(a, n.key) ? l = !c && Vu(i, "next") || !c && F_(i) || G_(i) || !c && s && Bu(i, "next") : U_(a, n.key) && (l = !c && Vu(i, "previous") || !c && z_(i) || J_(i, t) || !c && s && Bu(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Cr, r, Ie);
  }, [e, t]);
}
function zu(e) {
  return e.dir || "ltr";
}
function Ku(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function U_(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Va(e) {
  if (!$(e) || e.getMarker() !== "fp")
    return;
  const t = Gt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function F_(e) {
  const t = Va(op(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Jt(t, 0), !0);
}
function z_(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Va(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : ju(n);
  }
  if (t.offset === 0) {
    const n = Va(r);
    return n ? ju(n) : !1;
  }
  return !1;
}
function ju(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (E(t))
    return t.select(), !0;
  if (L(t)) {
    const i = t.getLastDescendant();
    return E(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const Hs = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function K_(e) {
  if (Hs)
    for (const { segment: r } of Hs.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function j_(e) {
  if (Hs) {
    let n = 0;
    for (const { index: i } of Hs.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Eh(e) {
  for (let t = e; t; t = t.getParent())
    if (L(t) && !t.isInline())
      return t;
}
function Ah(e) {
  return !!e && P(e) && Sn(e) !== void 0;
}
function oi(e) {
  return E(e) && !e.isToken() && !Ah(e) && e.getTextContentSize() > 0;
}
function Ph(e) {
  return io(e) ? !0 : j(e) ? e.getIsCollapsed() === !0 : E(e) ? (e.isToken() || Ah(e)) && e.getTextContentSize() > 0 : af(e) ? !je(e) : !1;
}
function ai(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Eo(e, t, r) {
  for (let n = e; n; ) {
    if (Ph(n))
      return n;
    if (L(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? ai(n, t, r);
      continue;
    }
    if (oi(n))
      return n;
    n = ai(n, t, r);
  }
}
function il(e, t, r, n, i) {
  return r === "element" && L(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? ai(e, n, i) : r === "text" && Ph(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : ai(e, n, i);
}
function ca(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = il(e.node, e.offset, e.kind, "previous", t), n = Eo(r, "previous", t);
  if (!n)
    return e;
  if (oi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function B_(e, t) {
  const r = e.getNode(), n = Eh(r);
  if (!n)
    return;
  if (e.type === "text" && oi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return ca({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = il(r, e.offset, e.type, t, n), s = Eo(i, t, n);
  if (!s)
    return;
  if (oi(s)) {
    const c = s.getTextContent(), l = t === "next" ? K_(c) : j_(c);
    return ca({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return ca({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function wh(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = B_(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Bu(e, t) {
  return wh(e, t, "collapse");
}
function V_(e, t) {
  return wh(e, t, "extend");
}
function W_(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && oi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = il(n, e.offset, e.type, t, r);
  return Eo(i, t, r) === void 0;
}
function H_(e, t) {
  const r = Ue();
  for (let n = e; n; ) {
    const i = ai(n, t, r), s = i && Eo(i, t, r);
    if (!s)
      return;
    if (n = Sn(s), !n)
      return s;
  }
}
function Vu(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Sn(n))
    return !1;
  const i = Eh(n);
  if (!i || !W_(r, t, i))
    return !1;
  const s = ai(i, t, Ue()), o = s && Sn(s);
  if (!o)
    return !1;
  const a = H_(o, t);
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
function Wu(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function G_(e) {
  const t = e.anchor.getNode(), r = op(e);
  if (j(r) && !P(r.getFirstChild())) {
    if (Se(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Se(i) && mi(i)) && i.selectStart(), !0;
      }
    } else return Ut(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Se(t) && j(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Wu(r), !0;
  }
  const n = r?.getParent();
  if (Ut(r) && j(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Wu(n) : n.selectEnd(), !0;
  }
  return !1;
}
function J_(e, t) {
  const r = Hb(e);
  if (ls(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode(), s = i.getParent();
  if (Ge(s) && (!r || Ut(r) && r.is(s.getFirstChild())))
    return !0;
  if (j(r) && r.getIsCollapsed()) {
    const a = r.getPreviousSibling();
    if (!qn(a) && !Ge(r.getParent()))
      return !1;
    const c = r.getParent();
    if (!c)
      return !1;
    const l = r.getIndexWithinParent();
    return c.select(l, l), !0;
  }
  if (Se(r) && t?.noteMode === "collapsed") {
    const a = r.getLastChild();
    if (!a)
      return !1;
    const c = We(a, (l) => j(l));
    if (j(c) && c.getIsCollapsed()) {
      const l = c.getParent();
      if (!l)
        return !1;
      const u = c.getIndexWithinParent();
      return l.select(u, u), !0;
    }
  }
  const o = Gt(i);
  if (!o || o.getIsCollapsed())
    return !1;
  if (fr(r)) {
    const a = o.getParent();
    if (!a)
      return !1;
    const c = o.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  return !1;
}
function Y_(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return me(t) && af(t);
}
function X_() {
  const [e] = le();
  return Q_(e), null;
}
function Q_(e) {
  K(() => {
    if (!e.hasNodes([ye]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Ze(
      e.registerNodeTransform(ye, tC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(ye, gk),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(ye, Ep),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(ye, (t) => Yi(_n("char"), t)),
      e.registerNodeTransform(ze, rC)
    );
  }, [e]);
}
function la(e) {
  return e.getChildren().some(P);
}
function Z_(e, t) {
  const r = t.getFirstChild();
  if (!P(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (bo(n)) {
    const i = n.getTextContent();
    i.startsWith(q) && (i === q ? n.remove() : n.setTextContent(i.slice(q.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function eC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  P(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function tC(e) {
  if (!$(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (la(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = re(e, Tn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if ($(i) && xn({ style: t, cid: r }, i) && wt(n, i.getUnknownAttributes()))
    if (la(i)) {
      if (Z_(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  $(s) && xn({ style: t, cid: r }, s) && wt(n, s.getUnknownAttributes()) && (la(s) ? eC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function rC(e) {
  const t = e.getParent();
  if (!$(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(Dt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function Nh(e) {
  return e.replaceAll("	", " ");
}
const sl = (e) => {
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
      n.setData(o, Nh(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(mr, s);
  });
}, ol = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", Nh(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(mr, i);
  });
};
function nC() {
  const [e] = le();
  return K(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Ns ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), e.dispatchCommand(oo, null)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), e.dispatchCommand(bn, null)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? ol(e) : sl(e)));
    };
    return e.registerRootListener((r, n) => {
      n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
    });
  }, [e]), null;
}
function iC({ logger: e }) {
  const [t] = le();
  return K(() => Ze(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Cr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Xn),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(mr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Xn),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(bc, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Xn)
  ), [t, e]), null;
}
const al = "editor-context-menu";
function Oh(e) {
  return `${al}-item-${e}`;
}
function sC({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), S("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: Oh(e), onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: S("span", { className: "text", children: i.title }) });
}
function oC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return S("div", { className: "typeahead-popover", children: S("ul", { id: al, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => S(sC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let aC = 0;
class Mi {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${aC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function cC({ options: e } = {}) {
  const [t] = le(), [r, n] = de(() => !t.isEditable()), [i, s] = de({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = de(void 0), c = Fe(() => {
    const d = [
      new Mi("Cut", {
        onSelect: () => {
          t.dispatchCommand(bn, null);
        },
        isDisabled: r
      }),
      new Mi("Copy", {
        onSelect: () => {
          t.dispatchCommand(oo, null);
        }
      }),
      new Mi("Paste", {
        onSelect: () => {
          sl(t);
        },
        isDisabled: r
      }),
      new Mi("Paste as Plain Text", {
        onSelect: () => {
          ol(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new Mi(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...d, ...f];
  }, [t, r, e]), l = X(null), u = ge(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  return K(() => {
    const d = (f) => {
      const p = f.target;
      t.getRootElement() === p || Xf(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
    };
    return t.registerRootListener((f, p) => {
      p?.removeEventListener("contextmenu", d), f && f.addEventListener("contextmenu", d);
    });
  }, [t]), K(() => {
    if (!i.isOpen)
      return;
    const d = (f) => {
      const p = f.target;
      p && l.current?.contains(p) || u();
    };
    return globalThis.addEventListener("scroll", d, !0), () => globalThis.removeEventListener("scroll", d, !0);
  }, [i.isOpen, u]), K(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      u();
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [i.isOpen, u]), K(() => {
    if (!i.isOpen)
      return;
    const d = (f) => {
      if (f.key === "Escape") {
        u();
        return;
      }
      const p = document.activeElement;
      if (!(p && p !== document.body && !t.getRootElement()?.contains(p))) {
        if (f.key === "ArrowDown")
          f.preventDefault(), f.stopPropagation(), a((g) => g === void 0 ? 0 : (g + 1) % c.length);
        else if (f.key === "ArrowUp")
          f.preventDefault(), f.stopPropagation(), a((g) => g === void 0 ? c.length - 1 : (g - 1 + c.length) % c.length);
        else if (f.key === "Enter") {
          f.preventDefault(), f.stopPropagation();
          const g = o === void 0 ? void 0 : c[o];
          g && !g.isDisabled && (t.update(() => {
            g.onSelect();
          }), u());
        }
      }
    };
    return document.addEventListener("keydown", d, !0), () => document.removeEventListener("keydown", d, !0);
  }, [i.isOpen, u, c, o, t]), K(() => {
    if (!i.isOpen)
      return;
    const d = t.getRootElement();
    if (d)
      return d.setAttribute("aria-controls", al), () => {
        d.removeAttribute("aria-controls"), d.removeAttribute("aria-activedescendant");
      };
  }, [t, i.isOpen]), K(() => {
    if (!i.isOpen)
      return;
    const d = t.getRootElement();
    d && (o === void 0 ? d.removeAttribute("aria-activedescendant") : d.setAttribute("aria-activedescendant", Oh(o)));
  }, [t, i.isOpen, o]), K(() => t.registerEditableListener((d) => {
    n(!d);
  }), [t]), is(() => {
    const d = l.current;
    if (!d)
      return;
    const { width: f, height: p } = d.getBoundingClientRect(), g = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), m = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    d.style.left = `${g}px`, d.style.top = `${m}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? gy.createPortal(S("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: S(oC, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), u());
  }, onOptionMouseEnter: (d) => {
    a(d);
  } }) }), document.body) : null;
}
function lC() {
  const [e] = le();
  return K(() => e.registerCommand(Cr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Ns ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, yr), [e]), null;
}
function uC({ isEditable: e }) {
  const [t] = le();
  return is(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Hu(e) {
  return !!e && Nc(ne(e));
}
function qh(e) {
  const [t] = le(), r = X(void 0), n = ge((i) => {
    const s = O(), o = w(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = Hu(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = To(u, d);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const p = jb();
        i.insertAfter(p), r.current = p.getKey(), l = p.getKey();
      }
      Jt(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = ne(a);
      E(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return K(() => {
    const i = () => {
      const a = e(), c = O(), l = w(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (Fr(zr), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (us(c) || !c.includes(ni))
        return;
      const l = O(), u = w(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (Bb(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(ni).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Ze(t.registerCommand(br, () => (i(), !1), yn), t.registerCommand(kc, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Hu(a);
      }), c && t.update(() => {
        const l = ne(a);
        E(l) && l.remove();
      }, { tag: zr }), r.current = void 0, !1;
    }, yn), t.registerNodeTransform(ze, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function dC() {
  const e = O();
  if (!w(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!L(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!me(i) || To(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || me(s))
    return i;
}
function fC() {
  return qh(dC), null;
}
function pC({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
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
          f || Fr(Xm), o.setEditorState(l), o.dispatchCommand(Qm, void 0);
        }, { tag: Mf });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function hC({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = le();
  return gC(t, n), mC(i, e, r, n), null;
}
function gC(e, t) {
  const r = X(void 0), n = X(void 0), i = e.noteCallers, s = e.crossRefCallers;
  K(() => {
    let o = i;
    (!o || o.length <= 0) && (o = Ax), r.current !== o && (r.current = o, Gu("note-callers", o, t));
  }, [t, i]), K(() => {
    let o = s;
    (!o || o.length <= 0) && (o = Px), n.current !== o && (n.current = o, Gu("cross-ref-callers", o, t));
  }, [t, s]);
}
function mC(e, t, r, n) {
  K(() => {
    if (!e.hasNodes([ye, Me, Wt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => CC(s));
    return Ze(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Me, (s) => yC(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(ye, bC),
      e.registerNodeTransform(ze, kC),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Wt, TC),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Wt, (s, { prevEditorState: o }) => xC(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(br, () => _C(e, t, r, n), $t),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function yC(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => fr(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    E(i) && !P(i) && i.getTextContent() !== Mt(e.getCaller()) && e.insertBefore(i);
  }
}
function bC(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => fr(o));
  if (!$(e) || !j(t) || !n)
    return;
  const i = Oc(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  E(s) ? s.getTextContent() !== q && s.setTextContent(q) : e.insertAfter(he(q));
}
function kC(e) {
  const t = Gt(e), r = t?.getChildren(), n = r?.find((o) => fr(o));
  if (!E(e) || !j(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!P(e) && j(i) && e.getTextContent() !== q && (e.setTextContent(q), e.selectEnd()), $(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Dt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Oc(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function TC(e) {
  if (!fr(e))
    return;
  const t = e.getNextSibling();
  !E(t) || P(t) ? e.insertAfter(he(q)) : t.getTextContent() !== q && t.setTextContent(q);
}
function xC(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = ne(r), a = o?.getParent();
      return fr(o) && j(a) && a.getCaller() === qs;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function _C(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = O();
  if (!w(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = We(o, (c) => j(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = ne(t.current);
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
      const c = We(o, (l) => j(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      xt(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Ei(e, l, n);
      }
    }
  }
  if (Se(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (qn(c) && j(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Ei(e, l, n);
    }
  }
  return !1;
}
function Ei(e, t, r) {
  const n = ne(t);
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
  const t = O();
  if (!w(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (j(i) && E(s)) {
    e.preventDefault();
    const o = mc();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Ki(o);
  }
}
function Gu(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (vC(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function vC(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Ao(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!P(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Hi(e);
  return r && t.push(r), t.length > 0 && t.every((n) => E(n) && n.getMode() === "token") ? t : [];
}
function SC(e) {
  const t = e.getParent();
  if (j(t))
    return Ao(t).some((r) => r.is(e)) ? t : void 0;
}
function Gs(e) {
  const t = Ao(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function MC(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function EC(e) {
  const t = Zm();
  if (!w(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= Gs(e);
  const i = MC(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= Gs(e);
}
function Wa(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = SC(t);
  if (r)
    return AC(r, t, e.offset) ? void 0 : r;
}
function AC(e, t, r) {
  const n = Ao(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function PC(e) {
  const t = Ao(e), r = t[t.length - 1];
  E(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Jt(e, Gs(e));
}
function wC(e = !1) {
  const t = O();
  if (!w(t))
    return !1;
  if (!t.isCollapsed())
    return NC(t.anchor, t.focus);
  const r = Wa(t.anchor);
  if (!r)
    return !1;
  if (!e && EC(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Jt(n, r.getIndexWithinParent());
  } else
    PC(r);
  return !0;
}
function NC(e, t) {
  const r = Wa(e), n = Wa(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && Ju(e, r, i), n && Ju(t, n, !i), !0;
}
function Ju(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), Gs(t), "element");
}
function OC() {
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
  }, [e]), K(() => e.registerCommand(br, () => (wC(t.current) && Fr(zr), !1), yn), [e]), null;
}
function qC({ onChange: e }) {
  const [t] = le();
  return K(() => t.registerCommand(br, () => {
    const r = sh();
    return e?.(r), !1;
  }, $t), [t, e]), null;
}
function RC() {
  const [e] = le();
  return $C(e), null;
}
function $C(e) {
  K(() => {
    if (!e.hasNodes([et]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(et, (t) => IC(t, e));
  }, [e]);
}
function IC(e, t) {
  Zp(t, e.getKey()) && Qp(e.getFirstChild()), !(!se(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = ne(e.getKey());
    return se(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Rh({ onStateChange: e }) {
  const [t] = le(), [r, n] = de(t), i = X(!1), s = X(!1), o = X(void 0), a = X(void 0), c = ge(() => {
    const l = O();
    let u;
    if (w(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : We(d, (k) => {
        const _ = k.getParent();
        return _ !== null && ey(_);
      });
      p === null && (p = d.getTopLevelElementOrThrow()), Xi(p) && (p = We(d, se) ?? p);
      const g = p.getKey(), m = r.getElementByKey(g), y = Jb(d, f);
      if (y && zT(y) && (u = y.getMarker()), m !== null && (se(p) || Ge(p) || ls(p))) {
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
  return K(() => t.registerCommand(br, (l, u) => (c(), n(u), !1), yr), [t, c]), K(() => Ze(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(ty, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), yr), r.registerCommand(ry, (l) => (s.current = l, e?.({
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
  return e ? Se(e) ? e : We(e, (r) => Se(r)) ?? void 0 : void 0;
}
function $h(e) {
  if (!w(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Wr(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function cl(e) {
  return w(e) && e.isCollapsed() && e.anchor.type === "element" || !w(e) && !cf(e) ? !1 : e.getNodes().some((t) => me(t));
}
function Ih(e) {
  if (!w(e) || !e.isCollapsed())
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
function Lh(e) {
  if (!w(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Wr(r);
  if (!n)
    return !1;
  if (L(r)) {
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
function Yu(e, t) {
  return !!Ha(e, t);
}
function Ha(e, t) {
  if (!w(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && L(n)) {
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
function Js(e, t) {
  if (!w(e))
    return !1;
  const r = Wr(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function ua(e) {
  return cl(e) || $h(e);
}
function DC(e, t) {
  if (cl(e) || $h(e))
    return !0;
  if (!w(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Ih(e) && Js(e, "backward") || Yu(e, "backward");
    case "deleteForward":
      return Lh(e) && Js(e, "forward") || Yu(e, "forward");
    case "insertText":
      return !1;
  }
}
function UC(e, t) {
  if (!(!w(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Ha(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (Ih(e) && Js(e, "backward")) {
        const n = Wr(e.anchor.getNode());
        if (Se(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Ha(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (Lh(e) && Js(e, "forward")) {
        const i = Wr(e.anchor.getNode())?.getNextSibling();
        if (Se(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Xu(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return cf(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!w(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!w(e) || e.isCollapsed())
    return !1;
  const r = Wr(e.anchor.getNode()), n = Wr(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function Dh(e) {
  if (E(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else L(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function FC(e) {
  const t = e.getPreviousSibling();
  if (!Se(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? Dh(r) : mi(t) || t.selectStart();
}
function Uh(e) {
  return me(e) || He(e) ? [] : Se(e) ? e.getChildren().flatMap(Uh) : [e];
}
function zC(e) {
  const t = [];
  for (const r of e) {
    const n = Uh(r);
    n.length !== 0 && (Se(r) && t.length > 0 && t.push(he(" ")), t.push(...n));
  }
  return t;
}
function Qu(e, t) {
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
    if (typeof e == "string") return Qu(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Qu(e, t) : void 0;
  }
}
const Fh = Object.entries, Zu = Object.setPrototypeOf, HC = Object.isFrozen, GC = Object.getPrototypeOf, JC = Object.getOwnPropertyDescriptor;
let rt = Object.freeze, st = Object.seal, Jn = Object.create, zh = typeof Reflect < "u" && Reflect, Ga = zh.apply, Ja = zh.construct;
rt || (rt = function(t) {
  return t;
});
st || (st = function(t) {
  return t;
});
Ga || (Ga = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Ja || (Ja = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Wn = Je(Array.prototype.forEach), YC = Je(Array.prototype.lastIndexOf), ed = Je(Array.prototype.pop), Hn = Je(Array.prototype.push), XC = Je(Array.prototype.splice), Dr = Array.isArray, Ri = Je(String.prototype.toLowerCase), da = Je(String.prototype.toString), td = Je(String.prototype.match), Ai = Je(String.prototype.replace), rd = Je(String.prototype.indexOf), QC = Je(String.prototype.trim), ZC = Je(Number.prototype.toString), ev = Je(Boolean.prototype.toString), nd = typeof BigInt > "u" ? null : Je(BigInt.prototype.toString), id = typeof Symbol > "u" ? null : Je(Symbol.prototype.toString), Qe = Je(Object.prototype.hasOwnProperty), Pi = Je(Object.prototype.toString), Xe = Je(RegExp.prototype.test), fn = tv(TypeError);
function Je(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Ga(e, t, n);
  };
}
function tv(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Ja(e, r);
  };
}
function pe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ri;
  if (Zu && Zu(e, null), !Dr(t))
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
function rv(e) {
  for (let t = 0; t < e.length; t++)
    Qe(e, t) || (e[t] = null);
  return e;
}
function ot(e) {
  const t = Jn(null);
  for (const n of Fh(e)) {
    var r = VC(n, 2);
    const i = r[0], s = r[1];
    Qe(e, i) && (Dr(s) ? t[i] = rv(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ot(s) : t[i] = s);
  }
  return t;
}
function nv(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return ZC(e);
    case "boolean":
      return ev(e);
    case "bigint":
      return nd ? nd(e) : "0";
    case "symbol":
      return id ? id(e) : "Symbol()";
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
        return Je(n.get);
      if (typeof n.value == "function")
        return Je(n.value);
    }
    e = GC(e);
  }
  function r() {
    return null;
  }
  return r;
}
function iv(e) {
  try {
    return Xe(e, ""), !0;
  } catch {
    return !1;
  }
}
const sd = rt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), fa = rt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), pa = rt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), sv = rt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ha = rt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ov = rt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), od = rt(["#text"]), ad = rt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ga = rt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), cd = rt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), _s = rt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), av = st(/{{[\w\W]*|^[\w\W]*}}/g), cv = st(/<%[\w\W]*|^[\w\W]*%>/g), lv = st(/\${[\w\W]*/g), uv = st(/^data-[\-\w.\u00B7-\uFFFF]+$/), dv = st(/^aria-[\-\w]+$/), ld = st(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), fv = st(/^(?:\w+script|data):/i), pv = st(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), hv = st(/^html$/i), gv = st(/^[a-z][.\w]*(-[.\w]+)+$/i), ud = st(/<[/\w!]/g), dd = st(/<[/\w]/g), mv = st(/<\/no(script|embed|frames)/i), yv = st(/\/>/i), St = {
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
}, bv = function() {
  return typeof window > "u" ? null : window;
}, kv = function(t, r) {
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
}, fd = function() {
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
  return Qe(t, r) && Dr(t[r]) ? pe(i.base ? ot(i.base) : {}, t[r], i.transform) : n;
};
function Kh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : bv();
  const t = (D) => Kh(D);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== St.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = Kt(f, "cloneNode"), g = Kt(f, "remove"), m = Kt(f, "nextSibling"), y = Kt(f, "childNodes"), k = Kt(f, "parentNode"), _ = Kt(f, "shadowRoot"), M = Kt(f, "attributes"), v = o && o.prototype ? Kt(o.prototype, "nodeType") : null, A = o && o.prototype ? Kt(o.prototype, "nodeName") : null, x = o && o.prototype ? Kt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const D = r.createElement("template");
    D.content && D.content.ownerDocument && (r = D.content.ownerDocument);
  }
  let I, U = "", G, V = !1, ae = 0;
  const ce = function() {
    if (ae > 0)
      throw fn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ie = function(h) {
    ce(), ae++;
    try {
      return I.createHTML(h);
    } finally {
      ae--;
    }
  }, Ce = function(h) {
    ce(), ae++;
    try {
      return I.createScriptURL(h);
    } finally {
      ae--;
    }
  }, Pe = function() {
    return V || (G = kv(d, i), V = !0), G;
  }, Q = r, F = Q.implementation, Z = Q.createNodeIterator, Ee = Q.createDocumentFragment, Oe = Q.getElementsByTagName, Xt = n.importNode;
  let ee = fd();
  t.isSupported = typeof Fh == "function" && typeof k == "function" && F && F.createHTMLDocument !== void 0;
  const vt = av, en = cv, fe = lv, ct = uv, Io = dv, bi = fv, wr = pv, Ye = gv;
  let lt = ld, ue = null;
  const In = pe({}, [...sd, ...fa, ...pa, ...ha, ...od]);
  let be = null;
  const ki = pe({}, [...ad, ...ga, ...cd, ..._s]);
  let ve = Object.seal(Jn(null, {
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
  })), Nr = null, Or = null;
  const Qt = Object.seal(Jn(null, {
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
  let qr = !0, tn = !0, Ti = !1, ps = !0, zt = !1, N = !0, z = !1, H = !1, J = null, xe = null, ut = !1, Pt = !1, rn = !1, nn = !1, wl = !0, Nl = !1;
  const Ol = "user-content-";
  let Lo = !0, hs = !1, Ln = {}, Zt = null;
  const Do = pe({}, [
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
  let ql = null;
  const Rl = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Uo = null;
  const $l = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), gs = "http://www.w3.org/1998/Math/MathML", ms = "http://www.w3.org/2000/svg", er = "http://www.w3.org/1999/xhtml";
  let Dn = er, Fo = !1, zo = null;
  const mm = pe({}, [gs, ms, er], da), Il = rt(["mi", "mo", "mn", "ms", "mtext"]);
  let Ko = pe({}, Il);
  const Ll = rt(["annotation-xml"]);
  let jo = pe({}, Ll);
  const ym = pe({}, ["title", "style", "font", "a", "script"]);
  let xi = null;
  const bm = ["application/xhtml+xml", "text/html"], km = "text/html";
  let qe = null, Un = null;
  const Tm = r.createElement("form"), Dl = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, Bo = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Un && Un === h)
      return;
    (!h || typeof h != "object") && (h = {}), h = ot(h), xi = // eslint-disable-next-line unicorn/prefer-includes
    bm.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? km : h.PARSER_MEDIA_TYPE, qe = xi === "application/xhtml+xml" ? da : Ri, ue = Ir(h, "ALLOWED_TAGS", In, {
      transform: qe
    }), be = Ir(h, "ALLOWED_ATTR", ki, {
      transform: qe
    }), zo = Ir(h, "ALLOWED_NAMESPACES", mm, {
      transform: da
    }), Uo = Ir(h, "ADD_URI_SAFE_ATTR", $l, {
      transform: qe,
      base: $l
    }), ql = Ir(h, "ADD_DATA_URI_TAGS", Rl, {
      transform: qe,
      base: Rl
    }), Zt = Ir(h, "FORBID_CONTENTS", Do, {
      transform: qe
    }), Nr = Ir(h, "FORBID_TAGS", ot({}), {
      transform: qe
    }), Or = Ir(h, "FORBID_ATTR", ot({}), {
      transform: qe
    }), Ln = Qe(h, "USE_PROFILES") ? h.USE_PROFILES && typeof h.USE_PROFILES == "object" ? ot(h.USE_PROFILES) : h.USE_PROFILES : !1, qr = h.ALLOW_ARIA_ATTR !== !1, tn = h.ALLOW_DATA_ATTR !== !1, Ti = h.ALLOW_UNKNOWN_PROTOCOLS || !1, ps = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, zt = h.SAFE_FOR_TEMPLATES || !1, N = h.SAFE_FOR_XML !== !1, z = h.WHOLE_DOCUMENT || !1, Pt = h.RETURN_DOM || !1, rn = h.RETURN_DOM_FRAGMENT || !1, nn = h.RETURN_TRUSTED_TYPE || !1, ut = h.FORCE_BODY || !1, wl = h.SANITIZE_DOM !== !1, Nl = h.SANITIZE_NAMED_PROPS || !1, Lo = h.KEEP_CONTENT !== !1, hs = h.IN_PLACE || !1, lt = iv(h.ALLOWED_URI_REGEXP) ? h.ALLOWED_URI_REGEXP : ld, Dn = typeof h.NAMESPACE == "string" ? h.NAMESPACE : er, Ko = Qe(h, "MATHML_TEXT_INTEGRATION_POINTS") && h.MATHML_TEXT_INTEGRATION_POINTS && typeof h.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ot(h.MATHML_TEXT_INTEGRATION_POINTS) : pe({}, Il), jo = Qe(h, "HTML_INTEGRATION_POINTS") && h.HTML_INTEGRATION_POINTS && typeof h.HTML_INTEGRATION_POINTS == "object" ? ot(h.HTML_INTEGRATION_POINTS) : pe({}, Ll);
    const C = Qe(h, "CUSTOM_ELEMENT_HANDLING") && h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING == "object" ? ot(h.CUSTOM_ELEMENT_HANDLING) : Jn(null);
    if (ve = Jn(null), Qe(C, "tagNameCheck") && Dl(C.tagNameCheck) && (ve.tagNameCheck = C.tagNameCheck), Qe(C, "attributeNameCheck") && Dl(C.attributeNameCheck) && (ve.attributeNameCheck = C.attributeNameCheck), Qe(C, "allowCustomizedBuiltInElements") && typeof C.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = C.allowCustomizedBuiltInElements), st(ve), zt && (tn = !1), rn && (Pt = !0), Ln && (ue = pe({}, od), be = Jn(null), Ln.html === !0 && (pe(ue, sd), pe(be, ad)), Ln.svg === !0 && (pe(ue, fa), pe(be, ga), pe(be, _s)), Ln.svgFilters === !0 && (pe(ue, pa), pe(be, ga), pe(be, _s)), Ln.mathMl === !0 && (pe(ue, ha), pe(be, cd), pe(be, _s))), Qt.tagCheck = null, Qt.attributeCheck = null, Qe(h, "ADD_TAGS") && (typeof h.ADD_TAGS == "function" ? Qt.tagCheck = h.ADD_TAGS : Dr(h.ADD_TAGS) && (ue === In && (ue = ot(ue)), pe(ue, h.ADD_TAGS, qe))), Qe(h, "ADD_ATTR") && (typeof h.ADD_ATTR == "function" ? Qt.attributeCheck = h.ADD_ATTR : Dr(h.ADD_ATTR) && (be === ki && (be = ot(be)), pe(be, h.ADD_ATTR, qe))), Qe(h, "ADD_URI_SAFE_ATTR") && Dr(h.ADD_URI_SAFE_ATTR) && pe(Uo, h.ADD_URI_SAFE_ATTR, qe), Qe(h, "FORBID_CONTENTS") && Dr(h.FORBID_CONTENTS) && (Zt === Do && (Zt = ot(Zt)), pe(Zt, h.FORBID_CONTENTS, qe)), Qe(h, "ADD_FORBID_CONTENTS") && Dr(h.ADD_FORBID_CONTENTS) && (Zt === Do && (Zt = ot(Zt)), pe(Zt, h.ADD_FORBID_CONTENTS, qe)), Lo && (ue["#text"] = !0), z && pe(ue, ["html", "head", "body"]), ue.table && (pe(ue, ["tbody"]), delete Nr.tbody), h.TRUSTED_TYPES_POLICY) {
      if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw fn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw fn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const R = I;
      I = h.TRUSTED_TYPES_POLICY;
      try {
        U = ie("");
      } catch (B) {
        throw I = R, B;
      }
    } else h.TRUSTED_TYPES_POLICY === null ? (I = void 0, U = "") : (I === void 0 && (I = Pe()), I && typeof U == "string" && (U = ie("")));
    rt && rt(h), Un = h;
  }, Ul = pe({}, [...fa, ...pa, ...sv]), Fl = pe({}, [...ha, ...ov]), xm = function(h, C, R) {
    return C.namespaceURI === er ? h === "svg" : C.namespaceURI === gs ? h === "svg" && (R === "annotation-xml" || Ko[R]) : !!Ul[h];
  }, _m = function(h, C, R) {
    return C.namespaceURI === er ? h === "math" : C.namespaceURI === ms ? h === "math" && jo[R] : !!Fl[h];
  }, Cm = function(h, C, R) {
    return C.namespaceURI === ms && !jo[R] || C.namespaceURI === gs && !Ko[R] ? !1 : !Fl[h] && (ym[h] || !Ul[h]);
  }, vm = function(h) {
    let C = k(h);
    (!C || !C.tagName) && (C = {
      namespaceURI: Dn,
      tagName: "template"
    });
    const R = Ri(h.tagName), B = Ri(C.tagName);
    return zo[h.namespaceURI] ? h.namespaceURI === ms ? xm(R, C, B) : h.namespaceURI === gs ? _m(R, C, B) : h.namespaceURI === er ? Cm(R, C, B) : !!(xi === "application/xhtml+xml" && zo[h.namespaceURI]) : !1;
  }, Rr = function(h) {
    Hn(t.removed, {
      element: h
    });
    try {
      k(h).removeChild(h);
    } catch {
      if (g(h), !k(h))
        throw fn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ys = function(h) {
    _i(h);
    const C = y(h);
    if (C) {
      const B = [];
      Wn(C, (W) => {
        Hn(B, W);
      }), Wn(B, (W) => {
        try {
          g(W);
        } catch {
        }
      });
    }
    const R = M(h);
    if (R)
      for (let B = R.length - 1; B >= 0; --B) {
        const W = R[B], te = W && W.name;
        if (typeof te == "string")
          try {
            h.removeAttribute(te);
          } catch {
          }
      }
  }, sn = function(h, C) {
    try {
      Hn(t.removed, {
        attribute: C.getAttributeNode(h),
        from: C
      });
    } catch {
      Hn(t.removed, {
        attribute: null,
        from: C
      });
    }
    if (C.removeAttribute(h), h === "is")
      if (Pt || rn)
        try {
          Rr(C);
        } catch {
        }
      else
        try {
          C.setAttribute(h, "");
        } catch {
        }
  }, Sm = function(h) {
    const C = M(h);
    if (C)
      for (let R = C.length - 1; R >= 0; --R) {
        const B = C[R], W = B && B.name;
        if (!(typeof W != "string" || be[qe(W)]))
          try {
            h.removeAttribute(W);
          } catch {
          }
      }
  }, _i = function(h) {
    const C = [h];
    for (; C.length > 0; ) {
      const R = C.pop();
      (v ? v(R) : R.nodeType) === St.element && Sm(R);
      const W = y(R);
      if (W)
        for (let te = W.length - 1; te >= 0; --te)
          C.push(W[te]);
    }
  }, Mm = function(h) {
    if (!N)
      return;
    const C = [h];
    for (; C.length > 0; ) {
      const R = C.pop(), B = v ? v(R) : R.nodeType;
      if (B === St.processingInstruction || B === St.comment && Xe(dd, R.data)) {
        try {
          g(R);
        } catch {
        }
        continue;
      }
      if (B === St.element) {
        const te = R, ke = qe(A ? A(R) : R.nodeName);
        try {
          te.hasAttribute && te.hasAttribute("patchsrc") && te.removeAttribute("patchsrc"), te.hasAttribute && te.hasAttribute("for") && ke !== "label" && ke !== "output" && te.removeAttribute("for");
        } catch {
        }
      }
      const W = y(R);
      if (W)
        for (let te = W.length - 1; te >= 0; --te)
          C.push(W[te]);
    }
  }, zl = function(h) {
    let C = null, R = null;
    if (ut)
      h = "<remove></remove>" + h;
    else {
      const te = td(h, /^[\r\n\t ]+/);
      R = te && te[0];
    }
    xi === "application/xhtml+xml" && Dn === er && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const B = I ? ie(h) : h;
    if (Dn === er)
      try {
        C = new u().parseFromString(B, xi);
      } catch {
      }
    if (!C || !C.documentElement) {
      C = F.createDocument(Dn, "template", null);
      try {
        C.documentElement.innerHTML = Fo ? U : B;
      } catch {
      }
    }
    const W = C.body || C.documentElement;
    return h && R && W.insertBefore(r.createTextNode(R), W.childNodes[0] || null), Dn === er ? Oe.call(C, z ? "html" : "body")[0] : z ? C.documentElement : W;
  }, Kl = function(h) {
    const C = x ? x(h) : h.ownerDocument;
    return Z.call(
      C || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, bs = function(h) {
    return h = Ai(h, vt, " "), h = Ai(h, en, " "), h = Ai(h, fe, " "), h;
  }, Vo = function(h) {
    var C;
    h.normalize();
    const R = x ? x(h) : h.ownerDocument, B = Z.call(
      R || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let W = B.nextNode();
    for (; W; )
      W.data = bs(W.data), W = B.nextNode();
    const te = (C = h.querySelectorAll) === null || C === void 0 ? void 0 : C.call(h, "template");
    te && Wn(te, (ke) => {
      Fn(ke.content) && Vo(ke.content);
    });
  }, ks = function(h) {
    const C = A ? A(h) : null;
    return typeof C != "string" || qe(C) !== "form" ? !1 : typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    h.nodeType !== v(h) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    if (!v || typeof h != "object" || h === null)
      return !1;
    try {
      return v(h) === St.documentFragment;
    } catch {
      return !1;
    }
  }, Ci = function(h) {
    if (!v || typeof h != "object" || h === null)
      return !1;
    try {
      return typeof v(h) == "number";
    } catch {
      return !1;
    }
  };
  function tr(D, h, C) {
    D.length !== 0 && Wn(D, (R) => {
      R.call(t, h, C, Un);
    });
  }
  const Em = function(h, C) {
    return !!(N && h.hasChildNodes() && !Ci(h.firstElementChild) && Xe(ud, h.textContent) && Xe(ud, h.innerHTML) || N && h.namespaceURI === er && C === "style" && Ci(h.firstElementChild) || h.nodeType === St.processingInstruction || N && h.nodeType === St.comment && Xe(dd, h.data));
  }, Am = function(h, C, R) {
    if (!Nr[C] && Wl(C) && (ve.tagNameCheck instanceof RegExp && Xe(ve.tagNameCheck, C) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(C)))
      return !1;
    if (Lo && !Zt[C]) {
      const B = k(h), W = y(h);
      if (W && B) {
        const te = W.length;
        for (let ke = te - 1; ke >= 0; --ke) {
          const Re = h === R ? p(W[ke], !0) : W[ke];
          B.insertBefore(Re, m(h));
        }
      }
    }
    return Rr(h), !0;
  }, jl = function(h, C, R, B) {
    return h.length === 0 ? C : C === R || C === B ? ot(C) : C;
  }, Bl = function(h, C) {
    if (tr(ee.beforeSanitizeElements, h, null), h !== C && k(h) === null)
      return hs && _i(h), !0;
    if (ks(h))
      return Rr(h), !0;
    const R = qe(A ? A(h) : h.nodeName);
    if (ue = jl(ee.uponSanitizeElement, ue, In, J), tr(ee.uponSanitizeElement, h, {
      tagName: R,
      allowedTags: ue
    }), h !== C && k(h) === null)
      return hs && _i(h), !0;
    if (Em(h, R))
      return Rr(h), !0;
    if (Nr[R] || !(Qt.tagCheck instanceof Function && Qt.tagCheck(R)) && !ue[R]) {
      const W = Am(h, R, C);
      return W === !1 && tr(ee.afterSanitizeElements, h, null), W;
    }
    if ((v ? v(h) : h.nodeType) === St.element && !vm(h) || (R === "noscript" || R === "noembed" || R === "noframes") && Xe(mv, h.innerHTML))
      return Rr(h), !0;
    if (zt && h.nodeType === St.text) {
      const W = bs(h.textContent);
      h.textContent !== W && (Hn(t.removed, {
        element: h.cloneNode()
      }), h.textContent = W);
    }
    return tr(ee.afterSanitizeElements, h, null), !1;
  }, Vl = function(h, C, R) {
    if (Or[C] || N && C === "patchsrc" || N && C === "for" && h !== "label" && h !== "output" || wl && (C === "id" || C === "name") && (R in r || R in Tm))
      return !1;
    const B = be[C] || Qt.attributeCheck instanceof Function && Qt.attributeCheck(C, h);
    if (!(tn && Xe(ct, C))) {
      if (!(qr && Xe(Io, C))) {
        if (B) {
          if (!Uo[C]) {
            if (!Xe(lt, Ai(R, wr, ""))) {
              if (!((C === "src" || C === "xlink:href" || C === "href") && h !== "script" && rd(R, "data:") === 0 && ql[h])) {
                if (!(Ti && !Xe(bi, Ai(R, wr, "")))) {
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
          !(Wl(h) && (ve.tagNameCheck instanceof RegExp && Xe(ve.tagNameCheck, h) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(h)) && (ve.attributeNameCheck instanceof RegExp && Xe(ve.attributeNameCheck, C) || ve.attributeNameCheck instanceof Function && ve.attributeNameCheck(C, h)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          C === "is" && ve.allowCustomizedBuiltInElements && (ve.tagNameCheck instanceof RegExp && Xe(ve.tagNameCheck, R) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(R)))
        ) return !1;
      }
    }
    return !0;
  }, Pm = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Wl = function(h) {
    return !Pm[Ri(h)] && Xe(Ye, h);
  }, wm = function(h, C, R, B) {
    if (I && typeof d == "object" && typeof d.getAttributeType == "function" && !R)
      switch (d.getAttributeType(h, C)) {
        case "TrustedHTML":
          return ie(B);
        case "TrustedScriptURL":
          return Ce(B);
      }
    return B;
  }, Nm = function(h, C, R, B) {
    try {
      R ? h.setAttributeNS(R, C, B) : h.setAttribute(C, B), ks(h) ? Rr(h) : ed(t.removed);
    } catch {
      sn(C, h);
    }
  }, Hl = function(h) {
    tr(ee.beforeSanitizeAttributes, h, null);
    const C = h.attributes;
    if (!C || ks(h))
      return;
    be = jl(ee.uponSanitizeAttribute, be, ki, xe);
    const R = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: be,
      forceKeepAttr: void 0
    };
    let B = C.length;
    const W = qe(h.nodeName);
    for (; B--; ) {
      const te = C[B], ke = te.name, Re = te.namespaceURI, gt = te.value, mt = qe(ke), Ho = gt;
      let dt = ke === "value" ? Ho : QC(Ho);
      if (R.attrName = mt, R.attrValue = dt, R.keepAttr = !0, R.forceKeepAttr = void 0, tr(ee.uponSanitizeAttribute, h, R), dt = R.attrValue, Nl && (mt === "id" || mt === "name") && rd(dt, Ol) !== 0 && (sn(ke, h), dt = Ol + dt), N && Xe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, dt)) {
        sn(ke, h);
        continue;
      }
      if (mt === "attributename" && td(dt, "href")) {
        sn(ke, h);
        continue;
      }
      if (!R.forceKeepAttr) {
        if (!R.keepAttr) {
          sn(ke, h);
          continue;
        }
        if (!ps && Xe(yv, dt)) {
          sn(ke, h);
          continue;
        }
        if (zt && (dt = bs(dt)), !Vl(W, mt, dt)) {
          sn(ke, h);
          continue;
        }
        dt = wm(W, mt, Re, dt), dt !== Ho && Nm(h, ke, Re, dt);
      }
    }
    tr(ee.afterSanitizeAttributes, h, null);
  }, Ts = function(h) {
    let C = null;
    const R = Kl(h);
    for (tr(ee.beforeSanitizeShadowDOM, h, null); C = R.nextNode(); )
      if (tr(ee.uponSanitizeShadowNode, C, null), Bl(C, h), Hl(C), Fn(C.content) && Ts(C.content), (v ? v(C) : C.nodeType) === St.element) {
        const W = _(C);
        Fn(W) && (Wo(W), Ts(W));
      }
    tr(ee.afterSanitizeShadowDOM, h, null);
  }, Wo = function(h) {
    const C = [{
      node: h,
      shadow: null
    }];
    for (; C.length > 0; ) {
      const R = C.pop();
      if (R.shadow) {
        Ts(R.shadow);
        continue;
      }
      const B = R.node, te = (v ? v(B) : B.nodeType) === St.element, ke = y(B);
      if (ke)
        for (let Re = ke.length - 1; Re >= 0; --Re)
          C.push({
            node: ke[Re],
            shadow: null
          });
      if (te) {
        const Re = A ? A(B) : null;
        if (typeof Re == "string" && qe(Re) === "template") {
          const gt = B.content;
          Fn(gt) && C.push({
            node: gt,
            shadow: null
          });
        }
      }
      if (te) {
        const Re = _(B);
        Fn(Re) && C.push({
          node: null,
          shadow: Re
        }, {
          node: Re,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(D) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, R = null, B = null, W = null;
    if (Fo = !D, Fo && (D = "<!-->"), typeof D != "string" && !Ci(D) && (D = nv(D), typeof D != "string"))
      throw fn("dirty is not a string, aborting");
    if (!t.isSupported)
      return D;
    H ? (ue = J, be = xe) : Bo(h), (ee.uponSanitizeElement.length > 0 || ee.uponSanitizeAttribute.length > 0) && (ue = ot(ue)), ee.uponSanitizeAttribute.length > 0 && (be = ot(be)), t.removed = [];
    const te = hs && typeof D != "string" && Ci(D);
    if (te) {
      Mm(D);
      const gt = A ? A(D) : D.nodeName;
      if (typeof gt == "string") {
        const mt = qe(gt);
        if (!ue[mt] || Nr[mt])
          throw ys(D), fn("root node is forbidden and cannot be sanitized in-place");
      }
      if (ks(D))
        throw ys(D), fn("root node is clobbered and cannot be sanitized in-place");
      try {
        Wo(D);
      } catch (mt) {
        throw ys(D), mt;
      }
    } else if (Ci(D))
      C = zl("<!---->"), R = C.ownerDocument.importNode(D, !0), R.nodeType === St.element && R.nodeName === "BODY" || R.nodeName === "HTML" ? C = R : C.appendChild(R), Wo(R);
    else {
      if (!Pt && !zt && !z && // eslint-disable-next-line unicorn/prefer-includes
      D.indexOf("<") === -1)
        return I && nn ? ie(D) : D;
      if (C = zl(D), !C)
        return Pt ? null : nn ? U : "";
    }
    C && ut && Rr(C.firstChild);
    const ke = te ? D : C;
    try {
      const gt = Kl(ke);
      for (; B = gt.nextNode(); )
        Bl(B, ke), Hl(B), Fn(B.content) && Ts(B.content);
    } catch (gt) {
      throw te && (ys(D), Wn(t.removed, (mt) => {
        mt.element && _i(mt.element);
      })), gt;
    }
    if (te)
      return Wn(t.removed, (gt) => {
        gt.element && _i(gt.element);
      }), zt && Vo(D), D;
    if (Pt) {
      if (zt && Vo(C), rn)
        for (W = Ee.call(C.ownerDocument); C.firstChild; )
          W.appendChild(C.firstChild);
      else
        W = C;
      return (be.shadowroot || be.shadowrootmode) && (W = Xt.call(n, W, !0)), W;
    }
    let Re = z ? C.outerHTML : C.innerHTML;
    return z && ue["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && Xe(hv, C.ownerDocument.doctype.name) && (Re = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + Re), zt && (Re = bs(Re)), I && nn ? ie(Re) : Re;
  }, t.setConfig = function() {
    let D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Bo(D), H = !0, J = ue, xe = be;
  }, t.clearConfig = function() {
    Un = null, H = !1, J = null, xe = null, I = G, U = "";
  }, t.isValidAttribute = function(D, h, C) {
    Un || Bo({});
    const R = qe(D), B = qe(h);
    return Vl(R, B, C);
  }, t.addHook = function(D, h) {
    typeof h == "function" && Qe(ee, D) && Hn(ee[D], h);
  }, t.removeHook = function(D, h) {
    if (Qe(ee, D)) {
      if (h !== void 0) {
        const C = YC(ee[D], h);
        return C === -1 ? void 0 : XC(ee[D], C, 1)[0];
      }
      return ed(ee[D]);
    }
  }, t.removeHooks = function(D) {
    Qe(ee, D) && (ee[D] = []);
  }, t.removeAllHooks = function() {
    ee = fd();
  }, t;
}
var Tv = Kh();
function xv({ structureProtectionMode: e = "off" }) {
  const [t] = le(), r = X(void 0), [n, i] = de(void 0), s = ge((o) => {
    r.current = o, i(o);
  }, []);
  return K(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const g = LC(p);
      if (!g)
        return !1;
      const m = O();
      return e === "protected" ? m && DC(m, g) ? (p.preventDefault(), !0) : !1 : g !== "deleteBackward" && g !== "deleteForward" ? !1 : a(g, p);
    }, a = (p, g) => {
      const m = O(), y = r.current;
      if (y && m && Xu(m, y)) {
        if (s(void 0), g.preventDefault(), p !== y.intent)
          return !0;
        const _ = ne(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (_) {
            const M = _.getParent(), v = _.getPreviousSibling(), A = _.getNextSibling();
            _.remove(), v ? Dh(v) : A && E(A) ? A.select(0, 0) : M?.selectStart();
          }
        } else y.kind === "selection" ? w(m) && m.removeText() : Se(_) && FC(_);
        return !0;
      }
      if (!m)
        return !1;
      const k = UC(m, p);
      if (k) {
        if (k.kind === "verse") {
          const _ = lf();
          _.add(k.node.getKey()), Ki(_);
        } else {
          const _ = mc();
          _.anchor.set(k.node.getKey(), 0, "element"), _.focus.set(k.node.getKey(), k.node.getChildrenSize(), "element"), Ki(_);
        }
        return s({ key: k.node.getKey(), kind: k.kind, intent: p }), g.preventDefault(), !0;
      }
      if (w(m) && !m.isCollapsed() && cl(m)) {
        const _ = m.getNodes().filter(me).map((A) => A.getKey()), { anchor: M, focus: v } = m;
        return s({
          kind: "selection",
          intent: p,
          key: _[0],
          anchor: { key: M.key, offset: M.offset, type: M.type },
          focus: { key: v.key, offset: v.offset, type: v.type }
        }), g.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const g = O();
      return !g || !ua(g) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, g) => {
      if (!p)
        return !1;
      const m = Tv.sanitize(p), y = new DOMParser().parseFromString(m, "text/html"), k = zC(vy(t, y)), _ = O();
      return w(_) && _.insertNodes(k), g.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const g = O();
      return g && ua(g) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const g = O();
      return g && ua(g) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Xu(O(), p) || s(void 0);
      });
    };
    return Ze(t.registerCommand(Cr, o, Ie), t.registerCommand(bn, c, Ie), t.registerCommand(mr, u, Ie), t.registerCommand(ny, c, Ie), t.registerCommand(bc, d, Ie), t.registerCommand(yc, c, Ie), t.registerUpdateListener(f));
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
const I1 = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function _v({ textDirection: e }) {
  const [t] = le();
  return Cv(t, e), null;
}
function Cv(e, t) {
  K(() => (pd(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && pd(e, t);
  })), [e, t]);
}
function pd(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function vv() {
  const [e] = le();
  return Sv(e), null;
}
function Sv(e) {
  K(() => {
    if (!e.hasNodes([ye, Ct, Me, ze, ft]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Ze(
      e.registerNodeTransform(ze, Mv),
      e.registerNodeTransform(ze, (t) => Ev(t, e)),
      e.registerNodeTransform(ft, hd),
      e.registerNodeTransform(Ct, hd),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(ft, (t) => {
        Yi(_n("va"), t), Yi(_n("vp"), t);
      })
    );
  }, [e]);
}
function Mv(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || j(r) || $(n) || $(r) || _e(n) || _e(r) || Le(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  Le(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  re(e, oe) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
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
  me(r) && Vc(e);
}
function Ev(e, t) {
  const r = e.getParent();
  !Le(r) || !e.isAttached() || Zp(t, e.getKey()) && r.insertAfter(e);
}
function hd(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; _e(t); )
    t = t.getLastChild();
  ($(t) || E(t) && _e(t.getParent())) && e.insertBefore(he(" "));
}
function ll(e) {
  if (!j(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !Nc(n)) ? void 0 : e;
}
function Av(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (L(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function Pv() {
  const e = O();
  if (!(!w(e) || !e.isCollapsed()))
    return ll(Av(e.anchor));
}
function wv(e) {
  const t = O();
  let r;
  return w(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = jh(e.target)), r ? ll(We(r, j)) : void 0;
}
function jh(e) {
  const t = iy(e)?.anchorNode;
  if (of(t))
    return cs(t) ?? void 0;
}
function Nv(e) {
  if (O())
    return;
  const t = jh(e);
  return t ? ll(We(t, j)) : void 0;
}
function Ov() {
  const [e] = le(), t = qh(Pv);
  return K(() => {
    const r = (n) => {
      Fr(zr), t(n);
    };
    return Ze(e.registerCommand(br, () => {
      const n = Nv(e.getRootElement());
      return n && r(n), !1;
    }, yn), e.registerCommand(so, (n) => {
      const i = wv(n);
      return i && r(i), !1;
    }, yn));
  }, [e, t]), null;
}
function qv({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = e_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return S(Zx, { trigger: e, items: i });
}
function Rv({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = Fe(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? S(Lv, { trigger: e, harness: i }) : S(qv, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const $v = [" ", "*"];
function Iv(e, t) {
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
function Lv({ trigger: e, harness: t }) {
  const [r] = le(), [n, i] = de(void 0), s = X({ query: "", options: [] }), o = X(0), a = ge((f, p, g) => {
    const m = p.find((y) => y.kind === "note" && y.marker === f);
    if (m) {
      t.apply(m, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = O();
      w(y) && y.insertText(`${e}${f}${g ? " " : ""}`);
    });
  }, [r, t, e]);
  K(() => Ze(r.registerCommand(Cr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const m = s.current.query;
        return m ? (a(m, n.items, !1), sy(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = O();
          w(y) && y.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const g = s.current.query;
      if (n.hasTextSelection) {
        const m = n.items.find((y) => y.marker === g);
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
  }, Ie), r.registerCommand(uf, (f) => {
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
  }, []), u = ge((f) => {
    const { markerMenuItem: p, applyOpts: g } = f;
    t.apply(p, g);
  }, [t]), d = Fe(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    Iv(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && S(uh, { isOpen: !0, children: ({ placement: f }) => S(
    ph,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? $v : void 0 },
    n.session
  ) });
}
function Dv(e) {
  return e.replaceAll(q, "~").replace(/ {2,}/g, (r) => q.repeat(r.length));
}
function Uv(e) {
  return e.replaceAll(q, " ").replaceAll("~", q);
}
function Fv(e) {
  return e.replace(/ {2,}/g, " ");
}
let Ys;
function zv(e) {
  e && (Ys = e);
}
function Bh(e) {
  return Mo(e);
}
function Kv(e, t) {
  return e.isEmpty() ? rf : Vh(e.toJSON(), t);
}
function Vh(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && fo(r[0]) && (!r[0].children || r[0].children.length === 0))
    return rf;
  if (r.some(CT)) {
    Ys?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Wh(r), i = jt(n, t);
  return i ? { type: sr, version: ir, content: i } : void 0;
}
function jv(e, t) {
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
function Bv(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Ae({
    type: At.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function Vv(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = ap(r, a, c), Ae({
    type: At.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function Wv(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = ap(t, o, a), Ae({
    type: ft.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function Hv(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !Bh(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(q) && (t[0] = a.slice(1));
  }
  return Ae({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function Gv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Ae({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function Jv(e, t) {
  const { unknownAttributes: r } = e;
  return Ae({ type: $p, ...r, content: t });
}
function Yv(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Ae({ type: Dp, marker: r, ...n, content: t });
}
function Xv(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Ae({
    type: Fp,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function Qv(e, t) {
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
function Yn(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Ae({
    type: t,
    marker: r === "" ? void 0 : r,
    ...yp({ sid: n, eid: i, ...s }, o)
  });
}
function Zv(e) {
  return e.text;
}
function eS(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Ae({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function tS(e) {
  const { marker: t } = e;
  return {
    type: Fs,
    marker: t === "" ? void 0 : t
  };
}
function gd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function rS(e, t, r, n, i) {
  const s = Ht.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = Yn({
      type: s,
      marker: Qn,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = Yn({
      type: s,
      marker: kn,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = Yn({
      type: s,
      marker: kn
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
  (!n || !Uf(n)) && t.forEach((l) => {
    const u = Yn({
      type: s,
      marker: Qn,
      eid: l
    });
    i.push(u);
  });
}
function jt(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, p = a, g = a, m = a, y = a;
    switch (a.type) {
      case Ft.getType():
        i.push(
          jv(
            l,
            jt(l.children, t)
          )
        );
        break;
      case ur.getType():
        i.push(Bv(a));
        break;
      case At.getType():
        i.push(
          Vv(
            u,
            jt(u.children, t)
          )
        );
        break;
      case Ct.getType():
      case ft.getType():
        i.push(Wv(a));
        break;
      case ye.getType():
        i.push(
          Hv(
            d,
            jt(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case et.getType():
        i.push(
          Gv(
            f,
            jt(f.children, t)
          )
        );
        break;
      case On.getType():
        i.push(
          Jv(
            a,
            jt(a.children, t)
          )
        );
        break;
      case fi.getType():
        i.push(
          Yv(
            a,
            jt(a.children, t)
          )
        );
        break;
      case pi.getType():
        i.push(
          Xv(
            a,
            jt(a.children, t)
          )
        );
        break;
      case Me.getType():
        i.push(
          Qv(
            p,
            jt(p.children, t, p.caller)
          )
        );
        break;
      case Mr.getType():
      case vr.getType():
      case Wt.getType():
      case df.getType():
      case dr.getType():
        break;
      case tt.getType():
        if (s = jt(
          m.children,
          t,
          r,
          n
        ), s) {
          const k = m.typedIDs[Ur];
          if (k)
            rS(s, k, o, e[c + 1], i), o = k;
          else {
            const _ = s.shift();
            _ && (typeof _ == "string" ? gd(i, _) : i.push(_)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Ht.getType():
        i.push(Yn(a));
        break;
      case ze.getType():
        if (g.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !us(g.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        g.text !== q && !g.text.startsWith(xc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        g[os]?.textType !== "attribute" && (!r || g.text !== Mt(r))) {
          let k = Zv(g);
          Bh(t) && (n && k.startsWith(q) && (k = k.slice(1)), k = Fv(Uv(k))), gd(i, k);
        }
        break;
      case wn.getType():
        i.push(
          eS(
            y,
            jt(y.children, t)
          )
        );
        break;
      case Ar.getType():
        i.push(tS(a));
        break;
      case hi.getType():
        Ys?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Ys?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function Wh(e) {
  const t = e.findIndex((r) => fo(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Wh(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const ma = {
  initialize: zv,
  deserializeEditorState: Kv
}, nS = /^sd\d*$/, iS = /* @__PURE__ */ new Set([
  ...Object.entries(Ea).filter(
    ([e, t]) => t.category === T.TitlesHeadings && t.type === b.Paragraph && !nS.test(e)
  ).map(([e]) => e),
  "qa"
]);
function sS(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Ac(i) || np(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!Gb(i)) {
      t && Xs(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (wc(i) && iS.has(i.marker) && !Xs(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Hh(i.children, t).forEach((s) => {
      const o = oS(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = aS(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function Hh(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Gh(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Uf(i)) {
      const s = Hh(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(md(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [md(i, c.nodes)] });
      });
      return;
    }
    t && Xs(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function md(e, t) {
  return { ...e, children: t };
}
function Gh(e) {
  return Yp(e) && e.number !== "";
}
function Xs(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Gh(r) || Xs(r)) : !1;
}
function oS(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function aS(e) {
  return {
    type: zs,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Hp
  };
}
const yd = Xh([]), cS = {
  type: df.getType(),
  version: 1
};
let ul = [], Y, Mn, Jh, Tt;
function lS(e, t) {
  ul = [], fS(e), pS(t);
}
function uS(e = 0) {
}
function dS(e, t) {
  Y = t ?? So();
  let r;
  return e ? (e.type !== sr && Tt?.warn(`This USJ type '${e.type}' didn't match the expected type '${sr}'.`), e.version !== ir && Tt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${ir}'.`
  ), e.content.length > 0 ? (r = Za(hr(e.content)), Zi(Y) && (r = sS(r, Tt))) : r = [yd]) : r = [yd], Jh?.(ul), {
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
function fS(e) {
  e && (Mn = e), e?.addMissingComments && (Jh = e.addMissingComments);
}
function pS(e) {
  e && (Tt = e);
}
function Yh() {
  return Mo(Y);
}
function hS(e, t) {
  let { marker: r } = e;
  r !== Vi && Tt?.warn(`Unexpected book marker '${r}'!`), r = r ?? Vi;
  const { code: n } = e;
  (!n || !Ft.isValidBookCode(n)) && Tt?.warn(`Unexpected book code '${n}'!`);
  const i = [];
  Y?.markerMode === "editable" || Y?.markerMode === "visible" ? i.push(
    bt("marker", Ne(r) + " " + n + q)
  ) : Y?.hasGutterParaMarkers && i.push(bt("marker", Ne(r) + q, !0)), i.push(...t);
  const s = De(e, Eb);
  return Ae({
    type: Ft.getType(),
    marker: r,
    code: n ?? "",
    unknownAttributes: s,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Kf
  });
}
function gS(e) {
  let { marker: t } = e;
  t !== Ls && Tt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Ls;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = De(e, Ab);
  let a;
  Y?.markerMode === "visible" && (a = !0);
  const c = [
    ht(Lt(t, r) ?? "")
  ];
  return Y?.markerMode === "editable" && OS(i, s, c), Y?.markerMode === "editable" ? Ae({
    type: At.getType(),
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
    version: Bf
  }) : Ae({
    type: ur.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Jf
  });
}
function mS(e) {
  let { marker: t } = e;
  t !== Ds && Tt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Ds;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (l_(Y) ?? Ct).getType(), c = Y?.markerMode === "editable" ? ep : Jp;
  let l, u;
  Y?.markerMode === "editable" ? l = Lt(t, r) : Y?.markerMode === "visible" && (u = !0);
  const d = De(e, zb);
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
function yS(e, t = [], r = !1) {
  let { marker: n } = e;
  ye.isValidMarker(n, Mn?.extraValidMarkers) || Tt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (Y?.markerMode === "editable") {
    const [a] = t;
    ii(a) ? a.text = q + a.text : a && t.unshift(ht(q));
  }
  t.length === 0 && t.push(ht(Dt)), Ya(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = De(e, Nb);
  return s || AS(n, o, i), s || Xa(e.marker ?? "", i, !1, r), Ae({
    type: ye.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Gf
  });
}
function Xh(e) {
  return {
    type: jr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Qf
  };
}
function bS(e, t = []) {
  let { marker: r } = e;
  et.isValidMarker(r, Mn?.extraValidMarkers) || Tt?.warn(`Unexpected para marker '${r}'!`), r = r ?? It;
  const n = [];
  if (Rn(Y) && (Y?.markerMode === "editable" ? n.push(
    pt(r),
    ht(q, lr, "token")
  ) : (Y?.markerMode === "visible" || Y?.hasGutterParaMarkers) && n.push(
    bt(
      "marker",
      Ne(r) + q,
      Y?.hasGutterParaMarkers
    )
  )), n.push(...t), Yh()) {
    const s = n.find(
      (o) => !go(o) && !(ii(o) && o.text === q)
    );
    ii(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => q.repeat(o.length)));
  }
  const i = De(e, Ub);
  return Ae({
    type: et.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Zf
  });
}
function dl() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function kS(e, t = []) {
  const r = De(e, Vk);
  return Ae({
    ...dl(),
    type: On.getType(),
    unknownAttributes: r,
    children: t,
    version: Ip
  });
}
function TS(e, t = []) {
  const r = De(e, Gk), n = e.marker ?? Ia, i = [];
  return Y?.markerMode === "editable" ? i.push(
    pt(n),
    ht(q, lr, "token")
  ) : (Y?.markerMode === "visible" || Y?.hasGutterParaMarkers) && i.push(
    bt(
      "marker",
      Ne(n) + q,
      Y?.hasGutterParaMarkers
    )
  ), i.push(...t), Ae({
    ...dl(),
    type: fi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Up
  });
}
function xS(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? La;
  Y?.markerMode === "editable" ? s.push(
    pt(o),
    ht(q, lr, "token")
  ) : (Y?.markerMode === "visible" || Y?.hasGutterParaMarkers) && s.push(
    bt(
      "marker",
      Ne(o) + q,
      Y?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const a = De(
    e,
    Yk
  );
  return Ae({
    ...dl(),
    type: pi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: a,
    children: s,
    version: zp
  });
}
function _S(e, t) {
  const r = ek(t);
  let n = () => {
  };
  return Mn?.noteCallerOnClick && (n = Mn.noteCallerOnClick), Ae({
    type: Wt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: ih
  });
}
function CS(e, t) {
  let { marker: r } = e;
  Me.isValidMarker(r, Mn?.extraValidMarkers) || Tt?.warn(`Unexpected note marker '${r}'!`), r = r ?? Cc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : Qc(Y?.noteMode), a = De(e, jy), c = Y?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  Y?.markerMode === "editable" ? (l = pt(r, "opening", !1, c), s || (u = pt(r, "closing"))) : Y?.markerMode === "visible" && (l = bt("marker", Ne(r) + " "), s || (u = bt("marker", it(r))));
  const d = [];
  let f;
  if (l && d.push(l), Y?.markerMode === "editable" && !o)
    f = ht(Mt(i), void 0, c), d.push(f), NS(n, d), d.push(...t);
  else {
    const p = ht(q, lr, "token");
    f = _S(i, t), d.push(f, p, ...t.flatMap(vS(p)));
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
    version: Of
  });
}
function vS(e) {
  return (t) => Mc(t) ? [t] : [t, e];
}
function SS(e) {
  let { marker: t } = e;
  (!t || !Ht.isValidMarker(t, Mn?.extraValidMarkers)) && Tt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = De(e, _c), s = bp(e);
  return Ae({
    type: Ht.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: Pf
  });
}
function bd(e, t = []) {
  return {
    type: tt.getType(),
    typedIDs: { [Ur]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function MS(e, t) {
  const { marker: r } = e, n = e.type, i = De(e, Cb), s = [];
  if (Y?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = Pp(
      n,
      r,
      i
    );
    o && s.push(bt("marker", o)), a && s.push(bt("attribute", a)), s.push(...t), c && s.push(bt("attribute", c)), l && s.push(bt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    ii(o) && (o.mode = "token");
  }), Ae({
    type: wn.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: zf
  });
}
function ES(e) {
  return {
    type: Ar.getType(),
    marker: e,
    text: Di(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: Y?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: qp
  };
}
function pt(e, t = "opening", r = !1, n = "normal") {
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
function ht(e, t = void 0, r = "normal") {
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
function bt(e, t, r = !1) {
  const n = {
    type: vr.getType(),
    text: t,
    textType: e,
    version: Lf
  };
  return r && (n[os] = { [Sc.key]: !0 }), n;
}
function es(e, t) {
  return {
    type: Mr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: gp
  };
}
function Ya(e, t, r = !1) {
  Y?.markerMode === "editable" ? t.push(pt(e, "opening", r)) : Y?.markerMode === "visible" && t.push(bt("marker", Ne(e, r)));
}
function Xa(e, t, r = !1, n = !1) {
  Y?.markerMode === "editable" ? r ? t.push(pt("", "selfClosing")) : t.push(pt(e, "closing", n)) : Y?.markerMode === "visible" && t.push(
    bt(
      "marker",
      r ? it("") : it(e, n)
    )
  );
}
function AS(e, t, r) {
  if (Y?.markerMode !== "editable" || !t) return;
  const n = rr(t, co(e));
  n && r.push(ht(n, "attribute"));
}
function kd(e, t) {
  if (e.type !== "ms" || Y?.markerMode !== "editable" && Y?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = De(e, _c), o = kp(
    n,
    i,
    s,
    bp(e)
  ), a = rr(o, uo(r ?? ""));
  if (!a) return;
  const c = q + a;
  Y?.markerMode === "editable" ? t.push(ht(c, "attribute")) : t.push(bt("attribute", c));
}
function PS(e, t) {
  const r = e.marker ?? "";
  if (Y?.markerMode === "editable") {
    const n = [];
    Ya(r, n), kd(e, n), Xa(r, n, !0), t.push(es("milestone", n));
  } else
    Ya(r, t), kd(e, t), Xa(r, t, !0);
}
function Td(e, t, r) {
  t !== void 0 && r.push(
    es(e, [
      pt(e, "opening"),
      ht(q + t, "attribute"),
      pt(e, "closing")
    ])
  );
}
function wS(e, t) {
  Y?.markerMode === "editable" && (Td("va", e.altnumber, t), Td("vp", e.pubnumber, t));
}
function NS(e, t) {
  e !== void 0 && t.push(
    es("cat", [
      pt("cat", "opening"),
      ht(q + e, "attribute"),
      pt("cat", "closing")
    ])
  );
}
function OS(e, t, r) {
  e !== void 0 && r.push(
    es("ca", [
      pt("ca", "opening"),
      ht(q + e, "attribute"),
      pt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    es("cp", [
      pt("cp", "opening"),
      ht(q + t, "attribute")
    ])
  );
}
function xd(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function qS(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function _d(e, t) {
  t.marker === kn && t.sid !== void 0 && e.push(t.sid), t.marker === Qn && t.eid !== void 0 && qS(e, t.eid);
}
function Qa(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [bd(o, [...n])] : o, c = e[i];
  _d(n, c);
  const l = Qa(
    e.slice(i + 1, s),
    xd(t, i + 1),
    c.marker === kn,
    n
  ), u = bd(l, [...n]), d = e[s];
  _d(n, d);
  const f = Qa(
    e.slice(s + 1),
    xd(t, s + 1),
    d.marker === kn,
    n
  );
  return [...a, u, ...f];
}
function hr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(ht(Yh() ? Dv(i) : i));
    else if (!i.type)
      Tt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Ft.getType():
          n.push(hS(i, hr(i.content)));
          break;
        case At.getType():
          n.push(gS(i));
          break;
        case ft.getType():
          Y?.hasSpacing || n.push(cS), n.push(mS(i)), wS(i, n);
          break;
        case ye.getType():
          n.push(
            yS(i, hr(i.content, !0), t)
          );
          break;
        case et.getType():
          n.push(bS(i, hr(i.content)));
          break;
        case Me.getType():
          n.push(CS(i, hr(i.content)));
          break;
        case Ht.getType():
          wf(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && ul?.push(i.sid)), n.push(SS(i)), PS(i, n);
          break;
        case Ar.getType():
          n.push(ES(i.marker ?? ""));
          break;
        case $p:
          n.push(kS(i, hr(i.content)));
          break;
        case Dp:
          n.push(TS(i, hr(i.content)));
          break;
        case Fp:
          n.push(xS(i, hr(i.content)));
          break;
        default:
          Tt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(MS(i, hr(i.content)));
      }
  }), Qa(n, r);
}
function Za(e) {
  const t = e.findIndex(
    (n) => Ac(n) || np(n) || wc(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    Hk(n)
  );
  if (t >= 0) {
    const n = Za(e.slice(0, t)), i = e[t], s = Za(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Yp(n)))
    return [Xh(e)];
  return e;
}
const _r = {
  initialize: lS,
  reset: uS,
  serializeEditorState: dS
};
function Qh(e) {
  if (e && !P(e)) {
    if (E(e)) return e;
    if (L(e))
      for (const t of e.getChildren()) {
        const r = Qh(t);
        if (r) return r;
      }
  }
}
function RS() {
  const e = O();
  if (!w(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((E(t) && !P(t) ? Br(t) : void 0) && E(t)) {
      const i = he(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      vn(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Qh(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(q) ? q : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return E(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Zh(e)) {
    if (!Br(t)) continue;
    vn(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(q) && r.setTextContent(n.slice(q.length));
  }
  return !0;
}
function Zh(e) {
  const [t, r] = nf(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!E(a) || P(a) || re(a, oe) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function $S() {
  const e = O();
  if (!w(e)) return !1;
  const t = e.focus.getNode();
  return Br(t) ? Se(zc(t)) : !1;
}
function eg() {
  let e = O();
  if (!w(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (P(t) && !jc(t, e.anchor.offset)) {
    const c = t.getParent();
    if ($(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = O(), !w(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!E(t) || P(t) || !Br(t)) return !1;
  const r = zc(t);
  if (!Se(r)) return !1;
  const n = he(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  vn(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return $(a) ? xo(a) : o.select(0, 0), !0;
}
const tg = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${ip(Ue().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = O(), t = qc(e), r = Hc(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = rk(0, o);
        const a = IT(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || dp(c) && Rc(parseInt(n, 10), c);
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
function ec(e, t) {
  return Me.isValidMarker(e, t) || !!tg[e] || et.isValidMarker(e, t) || ye.isValidMarker(e, t);
}
function IS(e, t) {
  return ye.isNoteContentMarker(e) ? !1 : ye.isValidMarker(e, t);
}
function rg(e, t, r, n, i, s) {
  const o = ah(
    e,
    void 0,
    void 0,
    t,
    n ?? So(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function tc(e, t, r, n, i, s, o) {
  if (Me.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = rg(
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
  const a = KS(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = O();
      w(u) && (Wp(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = vu(d, _r, r), g = Jo(p);
      if (w(u)) {
        const m = u.anchor.getNode(), y = m.getParent(), k = Br(m), _ = u.anchor.key === u.focus.key;
        if ($(g) && k && _ && !ya(g, o))
          US(
            u,
            g,
            m,
            r?.markerMode === "editable"
          );
        else if ($(g) && !_ && !ya(g, o) && FS(u))
          zS(u, g, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          jS(
            u,
            () => Jo(p)
          );
        else if (L(g) && !g.isInline()) {
          const M = u.insertParagraph();
          if (M) {
            const v = M.getChildren();
            g.append(...v), M.replace(g), Se(g) && mi(g) || g.selectStart();
          }
        } else if ($(g) && E(m) && !P(m) && $(m.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        ya(g, o)) {
          const M = m.getParent();
          if ($(M)) {
            const v = u.anchor.offset;
            if (v === 0) m.insertBefore(g);
            else if (v >= m.getTextContentSize()) m.insertAfter(g);
            else {
              const [x] = m.splitText(v);
              x.insertAfter(g);
            }
            g.getChildren().forEach((x) => {
              P(x) && x.setNested(!0);
            });
            const A = g.getChildren().find((x) => E(x) && !P(x));
            A && E(A) ? A.select(
              A.getTextContentSize(),
              A.getTextContentSize()
            ) : g.selectEnd();
          }
        } else if (E(m) && !P(m) && u.isCollapsed() && (j(y) || $(y) && j(y.getParent()))) {
          const M = $(y) ? y : void 0, v = M ? LS(m, u.anchor.offset) : [];
          let x = (M ?? m).insertAfter(g);
          if (Sr(g)) {
            const I = {
              ...r || So(),
              markerMode: "hidden"
            }, U = vu(
              d,
              _r,
              I
            ), G = Jo(U);
            x = x.insertAfter(G);
          }
          if (v.length > 0 && M) {
            const I = Qs(M).append(...v);
            x.insertAfter(I), M.isEmpty() && M.remove();
          } else E(x.getNextSibling()) || x.insertAfter(he(q));
          L(x) && x.selectEnd();
        } else if (u.insertNodes([g]), ZS(g), f) {
          const M = lf();
          M.add(g.getKey()), Ki(M);
        } else if ($(g)) {
          const M = g.getChildren().find((v) => E(v) && !P(v));
          M && E(M) ? M.select(
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
function LS(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function ya(e, t) {
  return ((t ?? Ks).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function DS(e, t) {
  t && e.getChildren().forEach((i) => {
    P(i) && i.setNested(!0);
  }), e.getChildren().some((i) => P(i) && i.getMarkerSyntax() === "closing") || e.append(at(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function US(e, t, r, n) {
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
    const [o, a] = ci(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (vn(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), E(i) && !i.getTextContent().startsWith(q) && i.setTextContent(q + i.getTextContent());
    const o = t.getChildren().find((a) => E(a) && !P(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => E(o) && !P(o));
  E(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function FS(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (P(n) || $(n)) continue;
    if (!E(n) || n.getType() !== ze.getType() || re(n, oe) === "attribute") return !1;
    const i = zc(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Br(n) && (r = !0);
  }
  return r;
}
function zS(e, t, r) {
  const n = Zh(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Br(a)) return;
    vn(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(q) && c.setTextContent(l.slice(q.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(q) || i.setTextContent(q + i.getTextContent());
  const s = t.getChildren().find((a) => E(a) && !P(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function KS(e, t) {
  let r = tg[e];
  return r || (et.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: et.getType(), marker: e, content: [] }] })
  } : ye.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: ye.getType(), marker: e };
      return (ye.isValidFootnoteMarker(e) || ye.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function jS(e, t) {
  const r = e.getNodes(), [n, i] = ci(e);
  let s;
  r.forEach((o, a) => {
    if (L(s) && s.isParentOf(o))
      return;
    const c = ng(
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
    s || (s = t(), c.insertBefore(s), l = !0, $(s) && s.getChildren().some((d) => P(d) && d.getMarkerSyntax() === "opening") && DS(s, $(s.getParent()))), VS(c, s, l);
  }), (E(s) || L(s)) && s.selectEnd();
}
function ci(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function fl(e) {
  return _e(e) || j(e) || j(e.getParent());
}
function ng(e, t, r, n, i) {
  if (!fl(e)) {
    if (E(e))
      return BS(e, t, r, n, i);
    if (L(e) && e.isInline())
      return e;
  }
}
function BS(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function VS(e, t, r) {
  if (E(t)) {
    const n = rc(e, t);
    t.setTextContent(n), e.remove();
  } else if (L(t)) {
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
    rc(e, t), r && $(t) && t.getChildren().some((s) => P(s)) && E(e) && !P(e) && !e.getTextContent().startsWith(q) && e.setTextContent(q + e.getTextContent());
  }
}
function rc(e, t) {
  let r = e.getTextContent();
  if (E(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    Vc(n), E(n) || t.insertBefore(he(" "));
  }
  return r;
}
function ig(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = En(u, t);
    if (!f) return !1;
    const p = E(u) ? u.getTextContentSize() : 0;
    if (Cd(f, r), E(u) && u.isAttached()) {
      const g = u.getTextContentSize(), m = Math.max(p - g, 0), y = Math.max(0, Math.min(d - m, g)), k = O();
      w(k) && k.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = ci(e);
  if (!hl(n, t, s, o)) return !1;
  const a = pl(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = En(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = cg(d, a);
    f && (Cd(f, r), l = !0);
  }), lg(a, i), l;
}
function Cd(e, t) {
  e.getChildren().forEach((n) => {
    _t(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === Dt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    E(n) && i.startsWith(q) && n.setTextContent(i.slice(q.length));
  }), va(e);
}
function pl(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = ng(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    E(o) && n.push(o);
  }), n;
}
function En(e, t) {
  let r = e, n;
  for (; r && !Se(r); ) {
    if (j(r)) return;
    !n && $(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function sg(e) {
  const t = We(
    e,
    (r) => j(r) || Se(r)
  );
  return j(t);
}
function og(e) {
  return e.filter(
    (t) => !fl(t) && (E(t) || L(t) && t.isInline())
  );
}
function WS(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!E(i) || fl(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function HS(e, t, r) {
  return e.getChildren().some(
    (n) => L(n) && t.some((i) => n.isParentOf(i)) && !ag(n, r)
  );
}
function hl(e, t, r, n, i) {
  const s = og(e), o = WS(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = En(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !HS(l, s, o);
  });
}
function ag(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || _t(r));
}
function cg(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (L(u) && t.some((d) => u.isParentOf(d))) {
      if (!ag(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && _t(n[s - 1]) && (s -= 1), o < n.length - 1 && _t(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(Qs(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(Qs(e).append(...c)), e;
}
function Qs(e) {
  return oy(e);
}
function lg(e, t) {
  const r = O(), n = e[0], i = e[e.length - 1];
  if (!w(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function GS(e, t, r) {
  if (e.isCollapsed()) {
    const l = En(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (lu(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = ci(e);
  if (!hl(n, r, i, s, t)) return !1;
  const o = pl(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = En(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = cg(u, o);
    d && (lu(d, t), c = !0);
  }), c;
}
function JS(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = ci(e);
  if (!!!i?.some(
    (y) => hl(s, y, o, a)
  ) && !YS(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const k = O();
    w(k) && ig(k, y, n) && (l = !0);
  });
  const u = O();
  if (!w(u)) return l;
  const d = u.isBackward(), [f, p] = ci(u), g = pl(
    u.getNodes(),
    f,
    p
  );
  if (g.length === 0) return l;
  const m = g.filter(
    (y) => !sg(y) && !En(y, t)
  );
  return m.length > 0 && (XS(m).forEach((y) => QS(y, t)), l = !0), lg(g, d), l;
}
function YS(e, t) {
  return og(e).some(
    (r) => !sg(r) && !En(r, t)
  );
}
function XS(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function QS(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => $(a) && a.getMarker() === t
  ), s = i ? Qs(i) : Tr(t);
  e[0].insertBefore(s), s.append(...e), i === r || rc(e[0], s);
}
function ZS(e) {
  me(e) && (Vc(e.getPreviousSibling()), Qp(e.getNextSibling()));
}
const ug = {
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
}, vd = "psc-active-text", Cs = "psc-empty-text";
function eM({ viewOptions: e }) {
  const [t] = le(), r = X(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return K(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(vd), r.current = o, o && t.getElementByKey(o)?.classList.add(vd);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        so,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Cs}`);
          if (!c) return !1;
          const l = cs(c);
          if (!me(l)) return !1;
          const u = l.getParent();
          if (!L(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        $t
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = ba(), f = tM(), p = [], g = [];
          return Ue().getChildren().forEach((m) => {
            if (!L(m)) return;
            const { emptyKeys: y, nonEmptyKeys: k } = nM(m);
            p.push(...y), g.push(...k);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: g };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(Cs) : t.getElementByKey(d)?.classList.add(Cs);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(Cs));
      }),
      t.registerCommand(
        kc,
        () => (i(void 0), !1),
        $t
      ),
      t.registerCommand(
        ay,
        () => {
          const o = t.getEditorState().read(ba);
          return o !== r.current && i(o), !1;
        },
        $t
      )
    ];
    return i(t.getEditorState().read(ba)), Ze(...s);
  }, [t, n]), null;
}
function ba() {
  return rM(O() ?? void 0)?.getKey();
}
function tM() {
  const e = O();
  if (!w(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!L(n)) return;
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
function rM(e) {
  if (w(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function nM(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!me(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (me(c)) break;
      if (!(Ut(c) || P(c)) && c.getTextContent().replaceAll(Os, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const iM = /^\+/;
function gl(e, t) {
  const r = t.replace(iM, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function dg(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function fg(e, t) {
  return dg(e, t) !== void 0;
}
function nc(e, t) {
  const r = dg(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function Zs(e, t, r) {
  const n = L(e) ? e.getChildren().filter(P) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function sM(e, t, r, n, i) {
  const s = gl(n, t);
  if (!s) {
    Zs(e, "unknown", i);
    return;
  }
  if (r === void 0) return;
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && Zs(e, "invalid", i);
}
function ei(e, t, r, n, i) {
  for (const s of e.getChildren())
    if ($(s)) {
      const o = s.getMarker();
      i || sM(s, o, t, r, n), ei(s, t, r, n, i || o === "xq");
    } else if (me(s)) {
      if (i) continue;
      const o = gl(r, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else j(s) ? ei(s, s.getMarker(), r, n, i) : Le(s) || L(s) && ei(s, t, r, n, i);
}
function oM(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = gl(e, a);
    if (!c) {
      Zs(o, "unknown", r), nc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    nc(n, l) || Zs(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Ue().getChildren())
    Le(o) || (Ge(o) ? (i(o, o.getMarker()), s(o) && ei(o, void 0, e, r, !1)) : He(o) ? i(o, o.getMarker()) : se(o) ? (i(o, o.getMarker()), s(o) && ei(o, o.getMarker(), e, r, !1)) : L(o) && s(o) && ei(o, "p", e, r, !1));
  return r;
}
function aM(e) {
  return !!e?.includes("(basic)");
}
function cM(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function pg(e, t) {
  return !e.startsWith("zpa") && e !== "c" && ec(e, t);
}
function ml(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function hg(e, t) {
  const r = [];
  for (const n of t) {
    const i = ml(e, n);
    i && nc(r, i);
  }
  return r;
}
function As(e, t) {
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
function ic(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : lM(e.marker, t.marker);
}
function sc(e, t, r) {
  if (t.noteMarker) return [];
  const n = hg(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && pg(i.marker, r)
  ).filter((i) => {
    const s = ml(e, i.marker);
    return s !== void 0 && fg(n, s);
  }).map((i) => As(i, "paragraph")).sort(ic);
}
function uM(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => pg(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => As(c, "character")).sort(ic);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => As(c, "character")),
    ...a.map((c) => As(c, "note"))
  ].sort(ic);
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
  if (t.source === "paragraph") return sc(e, t, r);
  const n = pM(e, t, r);
  return n.length > 0 ? n : sc(e, t, r);
}
function gM(e, t, r) {
  const n = sc(e, t, r), i = hg(e, t.previousParaMarkers), s = ml(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && fg(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const $n = String.raw`\w-`, gg = "a-z0-9", mM = `[a-z][${gg}]*`, yM = new RegExp(
  String.raw`^\\(\+?[${$n}]+)[ \u00A0]$`
), mg = new RegExp(String.raw`^\\(\+?[${$n}]+)$`), bM = new RegExp(String.raw`^\\\+?[${$n}]*\*$`), kM = new RegExp(
  String.raw`^\\(\+?[${$n}]+)(?:[ \u00A0]|$)`
), TM = new RegExp(
  String.raw`^\\(\+?)([${$n}]+)`
), xM = new RegExp(
  String.raw`\\\+?[${$n}]+(?:\\?\*|[ \u00A0])`
), _M = new RegExp(
  String.raw`\\\+?[${$n}]*$`
), CM = new RegExp(
  String.raw`^\\(${mM})( |$)`
), vM = new RegExp(
  String.raw`\\[${gg}+*]*$`,
  "i"
), nt = "￼";
function yg(e) {
  return e.length > 1 && e.startsWith(q) && e.charAt(1) !== nt ? e.slice(1) : e;
}
function Sd(e) {
  return go(e) ? e.markerSyntax ?? "opening" : void 0;
}
function bg(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = _r.serializeEditorState(
    {
      type: sr,
      version: ir,
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
  if (a[c]?.text !== Mt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Sd(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function SM(e) {
  return go(e) || Mc(e) && e.textType === "marker";
}
function kg(e, t, r, n) {
  const i = e.getCode(), s = {
    ...e.getUnknownAttributes(),
    type: "book",
    marker: e.getMarker(),
    ...i !== "" && { code: i },
    content: t
  }, [o, ...a] = _r.serializeEditorState(
    { type: sr, version: ir, content: [s, ...r] },
    n
  ).root.children;
  if (!Ac(o)) return { failure: "shape" };
  const c = SM(o.children[0]) ? o.children.slice(1) : o.children;
  return c.length === 0 && a.length === 0 ? { failure: "empty" } : { children: c, followingBlocks: a };
}
function vs(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function wi(e, t) {
  _M.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += nt;
}
function Rt(e) {
  return e.replaceAll(q, " ");
}
function MM(e, t, r = !1) {
  if (Mo(t)) return Rt(e);
  if (e === q) return " ";
  const n = r && e.startsWith(q), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(q, "~");
}
function Fi(e) {
  const t = e.getTextContent();
  return Nn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function yl(e, t) {
  const r = e[t];
  if (!je(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = yo(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!P(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Tg(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function bl(e, t) {
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
function kl(e) {
  return !!e.getUnknownAttributes();
}
function Po(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && ao(e);
}
function xg(e, t) {
  return je(e) ? !Po(e.getMarker(), t) : j(e) || Le(e) ? !0 : we(e) ? kl(e) : $(e) ? _g(e, t) : !1;
}
function _g(e, t) {
  if (pk(e)) return !0;
  const r = e.getMarker();
  return !tb(r) && t(r) === void 0;
}
const Ot = "", qt = "";
function Md(e) {
  return e.flatMap((t) => Be(t) ? t.getChildren() : [t]);
}
function $i(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (je(s)) {
      const o = yl(e, i);
      Po(s.getMarker(), r) && Tg(o) ? (t.push(
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
      ), $i(Md(o), t, r), t.push(qt)) : t.push(nt), i += o.length;
    } else if (we(s)) {
      const o = bl(e, i);
      kl(s) ? t.push(nt) : (t.push(
        Ot,
        "verse",
        Rt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), $i(Md(o), t, r), t.push(qt)), i += o.length;
    } else P(s) ? t.push(Ot, "marker", Rt(s.getTextContent()), qt) : Yr(s) ? t.push(Ot, "unmatched", Rt(s.getTextContent()), qt) : xg(s, r) ? t.push(nt) : io(s) ? t.push(" ") : E(s) ? t.push(
      Rt(
        n ? yg(Fi(s)) : Fi(s)
      )
    ) : $(s) ? (t.push(Ot, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), $i(s.getChildren(), t, r, !0), t.push(qt)) : L(s) ? (t.push(Ot, s.getType()), $i(s.getChildren(), t, r), t.push(qt)) : t.push(nt);
  }
}
function Qr(e, t) {
  const r = [];
  return $i(e, r, t), r.join("");
}
function ar(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function li(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Tl(e) {
  return e.type ?? "";
}
function Cg(e, t, r) {
  return t === "closing" ? it(e, r) : t === "selfClosing" ? it("") : Ne(e, r);
}
function ka(e, t) {
  const r = e[t];
  if (!(!r || Tl(r) !== "attribute-run"))
    return ar(r) ?? [];
}
function Zr(e, t) {
  const r = [];
  return Ii(e, r, t), r.join("");
}
function Ii(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Tl(s);
    if (o === "ms") {
      const l = s, u = ka(e, i + 1);
      u && Po(l.marker ?? "", r) ? (t.push(
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
      ), Ii(u, t, r), t.push(qt), i += 1) : t.push(nt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(nt);
        continue;
      }
      t.push(
        Ot,
        "verse",
        Rt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = ka(e, i + 1 + u);
      for (; d; )
        Ii(d, t, r), u++, d = ka(e, i + 1 + u);
      t.push(qt), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Ot,
        "marker",
        Rt(
          Cg(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        qt
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(Ot, "char", JSON.stringify(l.unknownAttributes ?? null)), Ii(ar(s) ?? [], t, r, !0), t.push(qt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(nt);
      continue;
    }
    if (o === "unmatched") {
      t.push(Ot, "unmatched", Rt(li(s) ?? "")), t.push(qt);
      continue;
    }
    const a = li(s);
    if (a !== void 0) {
      t.push(Rt(n ? yg(a) : a));
      continue;
    }
    const c = ar(s);
    c ? (t.push(Ot, o), Ii(c, t, r), t.push(qt)) : t.push(nt);
  }
}
function yi(e) {
  let t = 0;
  for (const r of e) {
    const n = ar(r);
    if (n) {
      t += yi(n);
      continue;
    }
    const i = li(r);
    if (i !== void 0)
      for (const s of i) s === nt && t++;
  }
  return t;
}
function ts(e, t, r, n, i) {
  Hr(e.getChildren(), t, r, n, i);
}
function Hr(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (P(a))
      vs(t, a, Rt(a.getTextContent()));
    else if (je(a)) {
      s();
      const c = yl(e, o);
      Po(a.getMarker(), r) && Tg(c) ? Hr(c, t, r, n) : wi(t, [a, ...c]), o += c.length;
    } else if (j(a) || Le(a))
      s(), wi(t, [a]);
    else if (we(a)) {
      s();
      const c = bl(e, o);
      kl(a) ? wi(t, [a, ...c]) : (vs(t, a, Rt(Fi(a))), Hr(c, t, r, n)), o += c.length;
    } else if ($(a))
      s(), _g(a, r) ? wi(t, [a]) : ts(a, t, r, n, { pending: !0 });
    else if (io(a))
      s(), vs(t, a, " ");
    else if (E(a)) {
      const c = Nn(a) || re(a, oe) === "attribute", l = s() && !c;
      vs(
        t,
        a,
        c ? Rt(Fi(a)) : MM(Fi(a), n, l)
      );
    } else L(a) ? ts(a, t, r, n, i) : (s(), wi(t, [a]));
  }
}
function xl(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Le(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return ts(e, i, t, r), i;
}
function _l(e, t) {
  let r = 0;
  const n = (i) => {
    if (E(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(nt);
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
    } else L(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function oc(e, t = []) {
  for (const r of e)
    we(r) ? t.push(r) : L(r) && oc(r.getChildren(), t);
  return t;
}
function Cl(e) {
  let t = 0;
  const r = (n) => {
    if (E(n))
      for (const i of n.getTextContent()) i === nt && t++;
    else L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Pr(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === nt && t++;
    else r.content && (t += Pr(r.content));
  return t;
}
function EM(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), L(i) && ts(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const rs = /\s/;
function vg(e) {
  return e.filter(wo).length;
}
function wo(e) {
  if (e.isSentinel) return !1;
  const t = ne(e.key);
  return E(t) && !P(t) && re(t, oe) === "attribute";
}
function AM(e) {
  if (e.isSentinel) return !1;
  const t = ne(e.key);
  return P(t) || wo(e);
}
function Ed(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && wo(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      rs.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function No(e, t, r) {
  const n = Ed(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !AM(i) ? Ed(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: vg(e.spans) };
}
function Ta(e) {
  if (e.isSentinel) return !1;
  const t = ne(e.key);
  return P(t) && t.getMarkerSyntax() !== "opening";
}
function PM(e) {
  const t = ne(e.key);
  if (!P(t)) return !1;
  const r = t.getParent();
  return $(r) ? (r.selectNext(0, 0), !0) : !1;
}
function wM(e) {
  const t = ne(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = we(t) ? bl(r, n) : je(t) ? yl(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function Sg(e, t, r) {
  const { text: n, spans: i } = e, s = vg(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && !Ta(d);
    if (!(o && wo(d))) {
      if (u) {
        if (!p) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let g = 0; g < f; g++) {
        const m = n[d.start + g];
        if (c === 0 && (l === 0 || !rs.test(m))) {
          if (p) {
            a = { key: d.key, offset: g };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? rs.test(m) || c-- : l--;
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
    if (d && Ta(d) && PM(d) || d?.isSentinel && wM(d)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !Ta(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = ne(a.key);
    if (d && E(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find(L)?.selectStart();
}
function Mg(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(L)?.selectStart();
      return;
    }
    Sg(EM(e, n, i), t, e);
  }
}
function Eg(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(L)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  Hr(e, s, n, i), Sg({ text: s.text, spans: s.spans }, t, e);
}
function Ag(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  for (const m of e) {
    const y = xl(m, n, r);
    if (!y)
      return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
    s.text.length > 0 && (s.text += " ");
    const k = s.text.length;
    y.spans.forEach(
      (_) => s.spans.push({ ..._, start: _.start + k, end: _.end + k })
    ), s.sentinels.push(...y.sentinels), s.text += y.text;
  }
  let o, a = !1;
  const c = O();
  if (w(c)) {
    for (let m = c.anchor.getNode(); m; m = m.getParent())
      if (e.some((y) => y.is(m))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = No(s, c.anchor.key, c.anchor.offset));
  }
  const l = cr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Pr(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = _r.serializeEditorState(
    { type: sr, version: ir, content: l },
    r
  );
  if (Zr(u.root.children, n) === Qr(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((m) => ti(m));
  if (Cl(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = oc(e).map((m) => ({
    number: m.getNumber(),
    sid: m.getSid()
  })), p = e[0];
  d.forEach((m) => p.insertBefore(m)), _l(d, s.sentinels), e.forEach((m) => m.remove());
  const g = oc(d);
  for (let m = 0; m < f.length && m < g.length; m++)
    g[m].getNumber() === f[m].number && g[m].setSid(f[m].sid);
  return Mg(d, o, a, n, r), !0;
}
function Pg(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Me.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!P(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(fr(s) || E(s) && s.getTextContent() === Mt(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const u = n[a - 1];
    if (!P(u) || u.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return Hr(c, l, t, r), { out: l, contentNodes: c };
}
function wg(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(nt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function NM(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Pg(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = O();
  if (w(u)) {
    for (let v = u.anchor.getNode(); v; v = v.getParent())
      if (e.is(v)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = No(o, u.anchor.key, u.anchor.offset));
  }
  const d = cr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Pr(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], g = wg(p), m = bg(e, p, g, r);
  if (m.failure !== void 0)
    return m.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      m.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (yi(m.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const y = e.getCategory() !== g;
  if (y && e.setCategory(g), Zr(m.children, n) === Qr(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  const k = m.children.map((v) => ti(v));
  if (Cl(k) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), y;
  const _ = a[0];
  if (_)
    k.forEach((v) => _.insertBefore(v));
  else {
    const v = e.getChildren().find((A) => P(A) && A.getMarkerSyntax() === "closing");
    k.forEach((A) => v ? v.insertBefore(A) : e.append(A));
  }
  _l(k, o.sentinels);
  const M = new Set(o.sentinels.flat().map((v) => v.getKey()));
  return a.forEach((v) => {
    M.has(v.getKey()) || v.remove();
  }), Eg(k, c, l, n, r), !0;
}
function vl(e, t, r) {
  const n = e.getChildren(), i = _t(n[0]) ? n.slice(1) : n, s = { text: "", spans: [], sentinels: [] };
  return Hr(i, s, t, r), { out: s, contentNodes: i };
}
const OM = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${It}(?=[\\s\\u200B\\\\|]|$)`
);
function Ng(e, t) {
  const r = cr(e, {
    getMarker: t
  }), [n, ...i] = r;
  return typeof n == "object" && n.type === "para" && n.marker === It && !OM.test(e) ? { content: r, lineContent: n.content ?? [], followingBlocks: i } : { content: r, lineContent: [], followingBlocks: r };
}
function qM(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, { out: s, contentNodes: o } = vl(e, n, r);
  let a, c = !1;
  const l = O();
  if (w(l)) {
    for (let _ = l.anchor.getNode(); _; _ = _.getParent())
      if (e.is(_)) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = No(s, l.anchor.key, l.anchor.offset));
  }
  const u = Ng(s.text, n);
  if (Pr(u.content) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const d = kg(
    e,
    u.lineContent,
    u.followingBlocks,
    r
  );
  if (d.failure !== void 0)
    return d.failure === "empty" ? i?.debug("[MarkerEdit] Book Tier 2 skipped: no content nodes after unwrap") : i?.warn("[MarkerEdit] Book Tier 2 aborted: unexpected serialized shape"), !1;
  const f = [...d.children, ...d.followingBlocks];
  if (yi(f) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (d.followingBlocks.length === 0 && Zr(d.children, n) === Qr(o, n))
    return i?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const p = d.children.map((_) => ti(_)), g = d.followingBlocks.map((_) => ti(_)), m = [...p, ...g];
  if (Cl(m) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const y = o[0];
  y ? p.forEach((_) => y.insertBefore(_)) : p.forEach((_) => e.append(_)), g.reduce((_, M) => _.insertAfter(M), e), _l(m, s.sentinels);
  const k = new Set(s.sentinels.flat().map((_) => _.getKey()));
  return o.forEach((_) => {
    k.has(_.getKey()) || _.remove();
  }), Eg(m, a, c, n, r), !0;
}
const Og = /* @__PURE__ */ new Set(["ca", "cp"]), Sl = "cp";
function qg(e) {
  if (!or(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (ts(e, t, nr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = cr(r, { getMarker: nr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Sl)
  );
}
function Oo(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if ($(r) && Og.has(r.getMarker()) || qg(r)) {
      t.push(r);
      continue;
    }
    se(r) && r.getMarker() === Sl && t.push(r);
    break;
  }
  return t;
}
function RM(e) {
  const t = (n) => $(n) && Og.has(n.getMarker()) || qg(n);
  if (t(e) || se(e) && e.getMarker() === Sl)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if ($e(n)) return n;
      if (!t(n)) return;
    }
}
function Rg(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Oo(e);
  if (n.some((s) => se(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Hr(e.getChildren(), i, t, r), Hr(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function $M(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Oo(e)], o = Rg(e, n, r);
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
    l.isCollapsed() && (a = No(o, l.anchor.key, l.anchor.offset));
  }
  const u = cr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Pr(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = _r.serializeEditorState(
    { type: sr, version: ir, content: u },
    r
  );
  if (Zr(f.root.children, n) === Qr(s, n)) {
    let g = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), g = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), g = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), g = !0), g || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), g;
  }
  const p = f.root.children.map((g) => ti(g));
  return $e(p[0]) ? (p.forEach((g) => e.insertBefore(g)), s.forEach((g) => g.remove()), Mg(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function ns(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Le(n)) return;
    !t && (j(n) || se(n) || $e(n) || Ge(n)) && (t = n), cy(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? RM(r) : void 0) ?? t;
}
function Bt(e, t) {
  const r = ns(e);
  return r ? j(r) ? NM(r, t) : $e(r) ? $M(r, t) : Ge(r) ? qM(r, t) : Ag([r], t) : !1;
}
const IM = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Ad(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !IM.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function Ps(e, t) {
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
          t.push(`\\${n}`), Ad(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), Ps(r.content, t), Ad(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Ps(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), Ps(r.content, t);
      }
    }
}
function Pd(e, t, r) {
  const n = ns(e);
  if (!se(n) && !Ge(n)) return !1;
  const i = O();
  if (!w(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Ge(n) ? vl(n, t, r).out : xl(n, t, r);
  if (!o) return !1;
  const a = cr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    rs.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  Ps(a, l);
  for (const u of l.join("").replaceAll(q, "~")) {
    if (rs.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function LM(e) {
  return [at(e), po()];
}
function Ml(e) {
  Jt(e, 2);
}
function DM(e) {
  const t = O();
  if (!w(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function qo(e) {
  const t = DM(e);
  e.splice(0, 0, LM(e.getMarker())), t && Ml(e);
}
function eo(e, t) {
  e.setMarker(t), qo(e), Ml(e);
}
function UM(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Nn(n)) {
    if (E(n) && !P(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(q), yt(n, oe, lr), n.setMode("token");
      return;
    }
    if (pp(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(po());
  }
}
function wd(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : L(n) ? n.getChildrenSize() : 0;
  if (r === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = n; !s.is(t); ) {
    if (r === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function zi(e) {
  for (let t = e; t; t = t.getParent())
    if (se(t)) return t;
}
function FM(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = zi(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = zi(r.getNode())?.is(s) ?? !1, a = zi(n.getNode())?.is(s) ?? !1;
    return !(o && !wd(r, s, "start") || a && !wd(n, s, "end"));
  });
}
function ac(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = O();
  if (!(!w(r) || r.isCollapsed()))
    for (const n of FM(r)) t.add(n.getKey());
}
function zM(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = O();
  if (!w(r) || !r.isCollapsed()) return;
  const n = zi(r.focus.getNode());
  n && t.add(n.getKey());
}
function KM(e) {
  const t = O();
  !w(t) || t.isCollapsed() || t.getNodes().some((r) => P(r)) && (ac(e), t.removeText());
}
function jM(e, t) {
  if (!Rn(t.viewOptions)) return;
  if (_t(e.getFirstChild())) {
    UM(e, t);
    return;
  }
  if (t.splitExpected.current) {
    qo(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => se(o) && !o.is(e))) {
      eo(e, It), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (se(r) || Ge(r)) {
    const n = e.getChildren().filter((a) => !Nn(a)), i = O();
    let s = !1;
    if (w(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : zi(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || L(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Jt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  eo(e, It);
}
function BM(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = rr(t, co(e.getMarker()));
  return r === "" ? void 0 : r;
}
function VM(e) {
  const t = e.getChildren().filter((s) => !P(s) && re(s, oe) !== "attribute"), r = t[0];
  r && E(r) && r.getTextContent().startsWith(q) && r.setTextContent(r.getTextContent().slice(1));
  const n = BM(e);
  n && t.push(he(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function WM(e, t) {
  const r = e.getChildren(), n = r.some((s) => P(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => E(c) && !P(c) && c.getTextContent() === Mt(s)
    ), a = ui(e).some(({ node: c }) => P(c));
    if (!o && !a) return;
    r.forEach((c) => {
      P(c) || (E(c) && c.getTextContent() === Mt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => P(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function HM(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(P(r) && r.getMarkerSyntax() === "opening")) {
    VM(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => P(o) && o.getMarkerSyntax() === "closing");
  i && !s && Bt(e, t);
}
function $g(e, t, r) {
  if (!P(e.getFirstChild()) && r?.markerMode === "editable" && Rn(r)) {
    eo(e, t);
    return;
  }
  kh(e, t);
}
function Ig() {
  const e = O();
  if (!w(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Lg(e);
    return t !== "removed" ? t : (cc(), "handled");
  }
  return cc() ? "handled" : "declined";
}
function GM(e, t) {
  if (!t) return e;
  const r = CM.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function Nd(e, t) {
  const r = O();
  if (!w(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Dg())
      return "declined";
  } else {
    const s = Lg(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => GM(s, t)
  );
  Od(n ?? "");
  for (const s of i)
    cc(), Od(s);
  return "handled";
}
function JM(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = cs(n);
  if (!i) return !1;
  const s = Gt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !E(i) || P(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Lg(e) {
  const t = Gt(e.anchor.getNode()), r = Gt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), YM() ? "removed" : "needs-plain-split");
}
function Od(e) {
  if (e === "") return;
  const t = O();
  w(t) && t.insertText(e);
}
function YM() {
  const e = O();
  if (!w(e) || !e.isCollapsed()) return !1;
  const t = Gt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => P(r) && r.getMarkerSyntax() === "opening");
}
function Dg() {
  const e = O();
  if (!w(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Gt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function cc() {
  const e = O();
  if (!w(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Dg();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Tr("fp", { closed: "false" });
  i.append(at("fp"));
  const s = E(t) && !P(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    vn(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (nk(u), i.append(u));
  }
  return i.getChildren().every(P) && i.append(he(Dt)), Ug(i), !0;
}
function Ug(e) {
  const t = e.getChildren().find((r) => !P(r));
  if (E(t)) {
    const r = t.getTextContent().startsWith(q) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (L(t)) {
    Ug(t);
    return;
  }
  e.selectEnd();
}
function XM(e) {
  const t = [];
  let r = e;
  for (; r; )
    $(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function QM(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Ue().getChildren()) {
    if (t && n.is(t)) break;
    (Ge(n) || He(n) || se(n)) && r.push(n.getMarker());
  }
  return r;
}
function ZM(e) {
  let t = e;
  for (; L(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function eE(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (_t(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Nn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(ZM(i)) && r === 0 : !1;
}
function tE(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !_t(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Nn(i) && t.is(i) && r === 0;
}
function rE() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function nE() {
  const e = O();
  if (!w(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = We(t, se), s = i ? void 0 : We(t, Ge), o = !n && !s && (!i || tE(i, t, r)) ? "paragraph" : "character", a = Gt(t);
  return {
    source: o,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: i?.getMarker() ?? s?.getMarker(),
    previousParaMarkers: QM(t),
    openCharMarkers: XM(t),
    noteMarker: a?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: jc(t, r),
    anchorRect: rE()
  };
}
function iE() {
  const e = O();
  if (!w(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!E(t) || P(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = vM.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function sE(e, t, r) {
  $g(e, t, r), Ml(e);
}
function oE(e, t, r) {
  const n = O();
  if (!w(n)) return;
  const i = n.focus.getNode(), s = We(i, se);
  if (t === "backslash" && s && eE(s, i, n.focus.offset)) {
    sE(s, e, r);
    return;
  }
  zg(e, r);
}
function qd(e, t) {
  const r = e.getNode();
  let n = L(r) ? r : r.getParent();
  for (; $(n); ) n = n.getParent();
  return t.is(n);
}
function aE(e, t, r) {
  const n = O();
  if (!w(n) || !qd(n.anchor, e) || !qd(n.focus, e)) return;
  n.isCollapsed() || n.removeText();
  const i = O();
  if (!w(i) || !i.isCollapsed()) return;
  const s = he(""), o = i.anchor.getNode(), a = i.anchor.offset;
  if (E(o) && !P(o))
    if (a <= 0) o.insertBefore(s);
    else if (a >= o.getTextContentSize()) o.insertAfter(s);
    else {
      const [, f] = o.splitText(a);
      f.insertBefore(s);
    }
  else {
    const f = L(o) ? o : o.getParent(), p = L(o) ? o.getChildAtIndex(a) : o;
    if (p) p.insertBefore(s);
    else if (f) f.append(s);
    else return;
  }
  if (Br(s) && vn(s, { renderGlyphs: !0 }), !e.is(s.getParent())) {
    s.remove();
    return;
  }
  const c = _t(e.getFirstChild()) ? e.getFirstChild() : void 0, l = s.getNextSiblings().filter((f) => !f.is(c));
  s.remove();
  const u = ri(t);
  e.insertAfter(u), u.append(...l);
  const [d] = l;
  $(d) ? xo(d) : u.select(0, 0), Rn(r) && qo(u);
}
function cE(e, t) {
  const r = O();
  return !w(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Fg(e) {
  const t = O();
  return w(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function lE(e, t, r, n) {
  if (w(O()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && iE(), e.kind === "closeTag") {
    Fg(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Ig() !== "declined") return;
  if (e.kind === "paragraph" && et.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    oE(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Me.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return rg(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  tc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: as(), reference: r });
}
function zg(e, t) {
  const r = O();
  if (!w(r)) return;
  const n = r.focus.getNode();
  if (!We(n, se)) {
    const o = We(n, Ge);
    if (o) {
      aE(o, e, t);
      return;
    }
  }
  const i = Rn(t);
  if (eg()) {
    const o = O();
    if (!w(o)) return;
    const a = We(o.anchor.getNode(), se);
    if (!a) return;
    a.setMarker(e), i && qo(a);
    return;
  }
  const s = r.insertParagraph();
  se(s) && (i ? eo(s, e) : s.setMarker(e));
}
function uE() {
  const [e] = le();
  return K(() => e.registerCommand(ff, () => !0, $t), [e]), null;
}
function Kg(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Paragraph : !(Me.isValidMarker(r) || ao(r));
}
function dE(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Character : !(Me.isValidMarker(r) || ao(r));
}
function fE(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = kM.exec(e)?.[1];
  return r === void 0 ? !1 : !Kg(r, t);
}
function jg(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !fE(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!se(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (se(i))
    return [i, r];
}
function Bg(e, t) {
  const r = jg(e, t.getMarker);
  return r !== void 0 && Ag(r, t);
}
function pE(e, t) {
  const r = O();
  w(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function Vg(e) {
  const t = TM.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function hE(e) {
  const t = O();
  if (!w(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = Vg(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function gE(e) {
  const t = O();
  if (!w(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (j(e.getParent()) && E(r)) {
    const n = r.getNextSibling();
    if ($(n)) {
      xo(n);
      return;
    }
  }
  E(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Rd(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = Vg(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  gE(e);
}
function $d(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Wg(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Bt(e, r);
  const n = hE(e), i = e.getParent();
  if (se(i)) {
    if (!Kg(t, r.getMarker))
      return Bg(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Bt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), $d(s, t) && Rd(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if ($(i) || j(i)) {
    const s = t.replace(/^\+/, "");
    if (!($(i) ? dE(t, r.getMarker) : Me.isValidMarker(s)))
      return Bt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Bt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(P).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (pE(c, it(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), $d(a, s) && Rd(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Bt(e, r);
}
function mE(e) {
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
function yE(e, t) {
  const r = e.getTextContent();
  if (Jr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Be(e.getParent()) && Ic(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !mE(e)) {
    uk(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = yM.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), Wg(e, n[1], t);
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
    const n = e.getParent(), i = it(e.getMarker(), e.getNested());
    if ($(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = O(), o = w(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = he(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function bE(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (Rp(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Hg(e) {
  if (!vf(e)?.length)
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
const Ni = Hg("v"), kE = Hg("c"), Id = /^[ \u00A0]*$/;
function Ld(e, t, r) {
  const n = e.getNextSibling();
  if (E(n) && n.getType() === ze.getType() && n.getMode() === "normal" && re(n, oe) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = he(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function TE(e, t) {
  const r = e.getTextContent(), n = Lt("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (Ni.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = Ni.valueAndRest.exec(c);
    if (l && Id.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (Ni.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Ni.valueAndRest.exec(r);
  if (!s) {
    const c = Ni.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = O(), p = w(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Lt("v", u));
      const g = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      Ld(e, d, g);
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
  if (t.pendingKeys.delete(e.getKey()), Id.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Lt("v", o)), a && Ld(e, a, a.length);
}
const xE = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function _E(e, t) {
  const r = e.getParent();
  if (!j(r) || r.getIsCollapsed() !== !1 || !vf(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!P(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === Mt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = xE.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Mt(a)), !0;
}
function CE(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!E(t)) return;
  const r = Lt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = kE.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Gg(e) {
  if (je(e)) {
    const { wrapper: t } = yo(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (j(e)) {
    const { wrapper: t } = xp(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if ($e(e)) {
    const t = [], r = _p(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = vp(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (we(e)) {
    const t = [], r = Wi(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = Wi(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function vE(e) {
  const t = O();
  if (!w(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Gg(e).some((n) => r.is(n));
}
function SE(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && se(e) && pp(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Gi)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && fs(l, e) && (i || vE(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Gg(e))
    l.remove(), n = !0;
  let s = !1;
  if ($(e)) {
    const l = mk(e);
    l !== void 0 && Xy(l) && (Ep(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Gi)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (dT(l, e)) {
        Yi(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && jp(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      _o(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function Dd(e) {
  return E(e) && e.getType() === ze.getType() && e.getMode() === "normal" && re(e, oe) !== "attribute";
}
function ME(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = ne(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && Dd(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && Dd(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Ss(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = ME(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = ne(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (P(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (Jr(c)) continue;
      const g = mg.exec(p);
      c.getMarkerSyntax() === "opening" && g ? n = Wg(c, g[1], e) || n : r === "idle" && Pd(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Bg(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Bt(c, e) || n;
      continue;
    }
    const l = Cn(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = SE(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && Pd(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = Bt(u, e) || n;
    }
  }
  return n;
}
function Jg(e) {
  if (Yr(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if ($(t)) return Li(t) !== void 0;
  return !1;
}
function EE(e) {
  const t = Cn(e);
  if (!t) return !1;
  const r = _n(t.kind);
  return !_o(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Ud(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (Le(t) || Lp(t)) return !0;
  return !1;
}
function AE(e, t) {
  const r = e.getTextContent(), n = re(e, oe), i = e.getParent();
  if (n !== "attribute" && $e(i)) {
    r.replace(/^[ \u00A0]+/, "") === Lt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (_E(e, t)) return;
  if (n === "attribute") {
    EE(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && Jg(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Ud(e))
      t.pendingKeys.add(e.getKey());
    else if (Sp(e)) t.pendingKeys.add(e.getKey());
    else if ($e(ns(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      $(a) && Ap(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Ud(e)) return;
  const s = O(), o = w(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (xM.test(o)) {
    if (ob(r)) {
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
function PE(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : jp(e, t);
}
function wE(e) {
  const t = (r) => {
    if (P(r)) {
      Jr(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (Yr(r)) {
      Rp(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Gi)
      n.settleScope !== "none" && n.ownerPredicate(r) && (fs(n, r) || PE(n, r)) && e.pendingKeys.add(r.getKey());
    if (we(r)) {
      r.getTextContent() !== Lt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (E(r)) {
      if (r.getType() !== ze.getType() || re(r, oe) === "attribute") return;
      const n = r.getParent();
      if ($e(n)) {
        r.getTextContent() !== Lt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && Jg(r) || i.includes("//") || Sp(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if ($(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Le(r)) {
      if (Be(r) && r.getChildrenSize() === 0) {
        const n = Cn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      L(r) && r.getChildren().forEach(t);
    }
  };
  Ue().getChildren().forEach(t);
}
function NE(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = re(e, oe);
  if (r === "attribute" || r === lr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if ($e(o) || Le(o)) return;
  const n = t.startsWith(q) && $(e.getParent()), i = n ? t.slice(1) : t, s = (n ? q : "") + i.replace(/ (?=[ \u00A0])/g, q).replace(new RegExp("(?<=\\u00A0) ", "g"), q);
  s !== t && e.setTextContent(s);
}
function OE(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function lc(e) {
  const t = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!t) return;
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(t.getData("text/plain")), i = t.getData("text/html"), s = i ? r(OE(i)) : "";
  return {
    plainText: n,
    html: i,
    htmlText: s,
    text: n || s,
    isInternal: !!t.getData("application/x-lexical-editor")
  };
}
function qE(e) {
  const t = lc(e);
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
  const l = as();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(ws, void 0), u === "") return;
    const f = O();
    w(f) && f.insertText(u);
  }), !0;
}
function RE(e) {
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
function $E(e) {
  const t = O();
  if (!w(t) || t.isCollapsed()) return;
  const r = {
    "text/plain": t.getTextContent().replaceAll(q, " ")
  }, n = fy(e), i = py(e);
  return n && (r["text/html"] = RE(n)), i && (r["application/x-lexical-editor"] = i), r;
}
function Fd(e, t, r) {
  const n = O();
  if (!w(n) || n.isCollapsed()) return !1;
  const i = $E(t);
  if (!i) return !1;
  if (!e || !("clipboardData" in e))
    return dy(t, null, i), r && n.removeText(), !0;
  if (e.clipboardData == null) return !1;
  e.preventDefault();
  for (const [s, o] of Object.entries(i)) e.clipboardData.setData(s, o);
  return r && n.removeText(), !0;
}
const Yg = pf(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function xa(e) {
  const t = e();
  return Fr(sf), Fr(Af), t;
}
const zd = 8, IE = 1e3;
function Gn(e, t) {
  const r = we(e) ? ["va", "vp"] : je(e) ? ["milestone"] : j(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    mT(_n(n), e, t.pendingKeys);
}
function LE(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Tc) || i.updateTags.has(ji)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = ne(o);
        if (!c) continue;
        const l = Cn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = ne(o.getKey());
        c?.isAttached() && _n(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Ze(
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
    e.registerMutationListener(dr, r),
    e.registerMutationListener(vr, r),
    e.registerMutationListener(Mr, r)
  );
}
function DE(e, t, r) {
  return Ze(
    e.registerCommand(
      mr,
      (n) => {
        if (Mh()) return !1;
        const i = lc(n);
        if (!i) return !1;
        const s = i.text;
        if (s.includes(`
`)) {
          const a = (r ? s.replaceAll(q, "~") : s).split(`
`);
          let c = Nd(a, t.getMarker);
          if (c === "declined" && JM(e) && (c = Nd(a, t.getMarker)), c === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      yr
    ),
    e.registerCommand(
      mr,
      (n) => {
        const i = lc(n);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !$S()) return !1;
        n?.preventDefault();
        const o = O();
        return w(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(ws, void 0), a === "") return;
          const l = O();
          w(l) && l.insertText(a);
        }), !0;
      },
      Ie
    ),
    e.registerCommand(
      mr,
      () => (t.splitExpected.current = !0, !1),
      $t
    )
  );
}
function UE({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n
}) {
  const [i] = le(), s = e?.markerMode === "editable", o = !!e && Mo(e), a = X(void 0), c = X(n);
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
    const u = aT(i, l.pendingKeys);
    let d, f = !1, p, g = !1, m = !1, y = 0;
    const k = () => y < zd ? !1 : (l.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${zd} consecutive mutating passes; leaving ${l.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...l.pendingKeys].join(", ")}`
    ), !0), _ = (x, I = "departure") => {
      i.update(() => {
        y = xa(
          () => Ss(l, x, I)
        ) ? y + 1 : 0;
      });
    };
    let M;
    const v = () => {
      if (M !== void 0 && clearTimeout(M), M = void 0, m || l.pendingKeys.size === 0) return;
      const x = c.current ?? IE;
      x < 0 || (M = setTimeout(() => {
        M = void 0, !(m || l.pendingKeys.size === 0) && (f || k() || _(void 0, "idle"));
      }, x));
    }, A = Ze(
      i.registerNodeTransform(dr, (x) => {
        if (i.isComposing()) return;
        yE(x, l);
        const I = Cn(x);
        I && (we(I.owner) || j(I.owner) || $e(I.owner) || je(I.owner) && yo(I.owner).wrapper === void 0) && Gn(I.owner, l);
      }),
      i.registerNodeTransform(ft, (x) => {
        i.isComposing() || (TE(x, l), Gn(x, l));
      }),
      i.registerNodeTransform(At, (x) => {
        i.isComposing() || (CE(x), x.isAttached() && Gn(x, l));
      }),
      i.registerNodeTransform(et, (x) => {
        i.isComposing() || jM(x, l);
      }),
      i.registerNodeTransform(ye, (x) => {
        if (!i.isComposing()) {
          HM(x, l);
          for (const I of ["separator", "char"])
            x.isAttached() && fs(_n(I), x) && l.pendingKeys.add(x.getKey());
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
        i.isComposing() || Gn(x, l);
      }),
      i.registerNodeTransform(Mr, (x) => {
        if (i.isComposing()) return;
        const I = Cn(x);
        I && (je(I.owner) || we(I.owner) || j(I.owner) || $e(I.owner)) && Gn(I.owner, l);
      }),
      i.registerNodeTransform(Me, (x) => {
        i.isComposing() || (WM(x, l), Gn(x, l));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      i.registerNodeTransform(Ar, (x) => {
        i.isComposing() || bE(x, l);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      i.registerNodeTransform(ze, (x) => {
        i.isComposing() || AE(x, l);
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
            for (const [I, U] of x) {
              if (U === "destroyed") continue;
              const G = ne(I);
              !G || re(G, oe) !== "attribute" || Be(G.getParent()) || i.getElementByKey(I)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      LE(i, l),
      ...o ? [
        i.registerNodeTransform(ze, (x) => {
          i.isComposing() || NE(x);
        }),
        i.registerCommand(
          oo,
          (x) => Fd(
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
          bn,
          (x) => Fd(
            x && typeof x == "object" && "clipboardData" in x ? x : null,
            i,
            !0
          ),
          Ie
        ),
        i.registerCommand(
          mr,
          (x) => qE(
            // Same jsdom-safe duck-check as COPY above.
            x && typeof x == "object" && "clipboardData" in x ? x : null
          ),
          Ie
        )
      ] : [],
      i.registerCommand(
        bn,
        () => (ac(l), !1),
        yr
      ),
      i.registerCommand(
        yc,
        () => (i.isComposing() || KM(l), !1),
        Xn
      ),
      i.registerCommand(
        so,
        () => (f = !1, y = 0, v(), !1),
        $t
      ),
      i.registerCommand(
        Cr,
        (x) => (f = !1, y = 0, v(), (x.key === "Backspace" || x.key === "Delete") && (ac(l), zM(l)), i.isComposing() || !x.ctrlKey || x.altKey || x.shiftKey || x.metaKey || x.key !== " " && x.code !== "Space" || !RS() ? !1 : (x.preventDefault(), !0)),
        Ie
      ),
      i.registerCommand(
        uf,
        (x) => {
          const I = Ig();
          I === "needs-plain-split" && i.dispatchCommand(ws, void 0);
          const U = I !== "declined" || yT();
          return U && x?.preventDefault(), Ss(l), U;
        },
        Ie
      ),
      i.registerCommand(
        ws,
        () => (l.splitExpected.current = !0, eg()),
        Ie
      ),
      DE(i, l, o),
      i.registerCommand(
        Yg,
        () => {
          if (f) return !0;
          const x = i.getRootElement(), I = x?.ownerDocument, U = !!x && !!I && I.hasFocus() && x.contains(I.activeElement);
          let G;
          if (U) {
            const V = O();
            G = w(V) ? V.focus.key : d;
          }
          return xa(() => Ss(l, G)), !0;
        },
        $t
      ),
      i.registerCommand(
        kc,
        () => {
          if (f) return !1;
          const x = O(), I = w(x) ? x.focus.key : d;
          return xa(() => Ss(l, I)), !1;
        },
        $t
      ),
      i.registerUpdateListener(({ editorState: x, tags: I }) => {
        l.splitExpected.current = !1, l.wholeParaDeleteExpected?.clear(), l.collapsedDeleteCaretParas?.clear(), l.rebuildAttempted.clear();
        const U = x.read(() => {
          const V = O();
          return w(V) ? V.focus.key : void 0;
        }), G = p;
        if (U !== void 0 && (p = U), I.has(Tc)) {
          l.pendingKeys.clear(), x.read(() => wE(l)), f = !0, U !== void 0 && (d = U);
          return;
        }
        if (I.has(zr)) {
          U !== void 0 && U !== G && (f = !0);
          return;
        }
        f || (U !== void 0 && (d = U), v(), !(g || U === void 0) && [...l.pendingKeys].some((V) => V !== U) && (g = !0, queueMicrotask(() => {
          g = !1, !m && (k() || _(d));
        })));
      })
    );
    return () => {
      m = !0, M !== void 0 && clearTimeout(M), M = void 0, u(), A(), a.current = void 0;
    };
  }, [i, s, o]), null;
}
const FE = ["status_unknown", "status_invalid"], Xg = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, zE = Object.values(Xg);
function KE(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Xg[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Kd(e) {
  e.classList.remove(...FE), e.removeAttribute("aria-description"), zE.includes(e.title) && e.removeAttribute("title");
}
function jE(e, t, r, n) {
  const i = (a) => a.read(() => Ue().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = ne(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function BE(e) {
  const t = ne(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : P(t) && t.getParent()?.getKey() === r.getKey();
}
function VE({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = le(), i = e?.markerMode === "editable";
  return K(() => {
    if (!i) return;
    const s = t ?? Ks;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = oM(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || BE(f)) continue;
            const g = ne(f)?.getTopLevelElement();
            !g || l.has(g.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && Kd(p);
        }
        for (const [f, p] of d) {
          const g = n.getElementByKey(f);
          g && KE(g, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          jE(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && Kd(u);
      }
    };
  }, [n, i, t, r]), null;
}
function Qg(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = ar(o);
    a && L(s) && Qg(s.getChildren(), a, r);
  }
}
function El(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = ar(o);
      if (a) {
        n(a);
        continue;
      }
      const c = li(o);
      if (c === void 0 || !c.includes(nt)) continue;
      const l = c.split(nt), u = [];
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
function Al(e, t, r) {
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
function Zg(e, t) {
  const r = [];
  for (const n of e)
    xg(n, t) || ((se(n) || $(n)) && r.push(n.getMarker()), L(n) && r.push(...Zg(n.getChildren(), t)));
  return r;
}
function em(e) {
  const t = [];
  for (const r of e) {
    const n = Tl(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = ar(r);
    i && t.push(...em(i));
  }
  return t;
}
function Ro(e, t, r) {
  const n = Zg(e, r), i = em(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function WE(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = O();
  let n, i;
  if (w(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = ne(t.key), i = t.offset;
  else
    return;
  if (!(!E(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function $o(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function HE(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  for (const y of e) {
    const k = xl(y, o, s);
    if (!k) return;
    c.text.length > 0 && (c.text += " ");
    const _ = c.text.length;
    k.spans.forEach(
      (M) => c.spans.push({ ...M, start: M.start + _, end: M.end + _ })
    ), c.sentinels.push(...k.sentinels), c.text += k.text;
  }
  const l = i ? $o(c, i) : c.text, u = cr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (Pr(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = _r.serializeEditorState(
    { type: sr, version: ir, content: u },
    s
  ).root.children;
  if (yi(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Al(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Zr(d, o) === Qr(e, o) && Ro(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  El(d, f);
  const g = GE(e), m = tm(d);
  for (let y = 0; y < g.length && y < m.length; y++)
    g[y].sid !== void 0 && m[y].number === g[y].number && (m[y].sid = g[y].sid);
  return d;
}
function GE(e) {
  const t = [], r = (n) => {
    we(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function tm(e) {
  const t = [];
  for (const r of e) {
    rp(r) && t.push(r);
    const n = ar(r);
    n && t.push(...tm(n));
  }
  return t;
}
function JE(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Pg(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? $o(l, i) : l.text, f = cr(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (Pr(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const g = p.content ?? [], m = wg(g), y = e.getCategory() !== m, k = bg(e, g, m, s);
  if (k.failure !== void 0) {
    k.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : k.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const _ = k.children;
  if (yi(_) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const M = Al(l, t, n);
  if (!M) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Zr(_, o) === Qr(u, o) && Ro(u, _, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: m, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return El(_, M), { rebuilt: _, contentNodes: u, category: m, categoryChanged: y };
}
function jd(e) {
  return e.$?.textType;
}
function YE(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && jd(e) === jd(t);
}
function XE(e) {
  const t = [];
  for (const r of e) {
    const n = ne(r);
    n?.isAttached() && Le(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function QE(e) {
  if (!P(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!j(t)) return;
  const r = e.getTextContent();
  if (Jr(e)) return;
  const n = mg.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Bd(e, t) {
  const r = e;
  r.marker = t, r.text = Cg(t, r.markerSyntax, r.nested);
}
function ZE(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Me.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Bd(a.node, s);
  const c = n.getChildren().filter(P).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Bd(l.node, s);
}
function eA(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, { out: c, contentNodes: l } = vl(e, o, s);
  if (l.length === 0) return;
  const u = i ? $o(c, i) : c.text, d = Ng(u, o);
  if (Pr(d.content) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const f = kg(
    e,
    d.lineContent,
    d.followingBlocks,
    s
  );
  if (f.failure !== void 0) {
    f.failure === "shape" && a?.warn("[MarkerEdit] Settled book USJ skipped: unexpected serialized shape");
    return;
  }
  const { children: p, followingBlocks: g } = f;
  if (yi([...p, ...g]) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled book USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const m = Al(c, t, n);
  if (!m) {
    a?.warn("[MarkerEdit] Settled book USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (g.length === 0 && Zr(p, o) === Qr(l, o) && Ro(l, p, o)) {
    a?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return El([...p, ...g], m), { rebuilt: p, contentNodes: l, followingBlocks: g };
}
function tA(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Rg(e, i, n);
  if (!o) return;
  const a = r ? $o(o, r) : o.text, c = cr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (Pr(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = _r.serializeEditorState(
    { type: sr, version: ir, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Oo(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Zr(u, i) === Qr(d, i) && Ro(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function rA(e, t, r, n, i) {
  const s = WE(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), f = (k) => {
    j(k) ? c.set(k.getKey(), k) : $e(k) ? l.set(k.getKey(), k) : Ge(k) ? u.set(k.getKey(), k) : o.set(k.getKey(), [k]);
  };
  for (const k of t) {
    const _ = ne(k);
    if (!_?.isAttached()) continue;
    const M = ns(_);
    if (M) {
      if (f(M), P(_)) {
        const v = jg(_, r.getMarker);
        v && a.push(v);
      }
      if (j(M)) {
        const v = QE(_);
        v && d.set(M.getKey(), v);
      }
    }
  }
  const p = /* @__PURE__ */ new Set();
  for (const k of a)
    k.some((_) => p.has(_.getKey())) || (k.forEach((_) => {
      p.add(_.getKey()), o.delete(_.getKey());
    }), o.set(k[0].getKey(), k));
  if (s) {
    const k = ns(s.node);
    k && f(k);
  }
  const g = XE(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && u.size === 0 && g.length === 0)
    return;
  const m = new Set(g.map((k) => k.getKey())), y = /* @__PURE__ */ new Map();
  Qg(Ue().getChildren(), e.root.children, y);
  for (const k of d.values()) ZE(k, y);
  for (const k of c.values()) {
    const _ = y.get(k.getKey()), M = _ ? ar(_.node) : void 0;
    if (!_ || !M) continue;
    const v = JE(k, y, r, m, s);
    if (!v) continue;
    if (v.categoryChanged) {
      const I = _.node;
      v.category === void 0 ? delete I.category : I.category = v.category;
    }
    if (!v.rebuilt) continue;
    const A = y.get(v.contentNodes[0].getKey());
    if (!A) continue;
    const x = M.indexOf(A.node);
    x < 0 || M.splice(x, v.contentNodes.length, ...v.rebuilt);
  }
  for (const k of o.values()) {
    const _ = y.get(k[0].getKey());
    if (!_) continue;
    const M = HE(k, y, r, m, s);
    if (!M) continue;
    const v = _.siblings.indexOf(_.node);
    v < 0 || _.siblings.splice(v, k.length, ...M);
  }
  for (const k of u.values()) {
    const _ = y.get(k.getKey()), M = _ ? ar(_.node) : void 0;
    if (!_ || !M) continue;
    const v = eA(k, y, r, m, s);
    if (!v) continue;
    const A = y.get(v.contentNodes[0].getKey());
    if (!A) continue;
    const x = M.indexOf(A.node), I = _.siblings.indexOf(_.node);
    x < 0 || I < 0 || (M.splice(x, v.contentNodes.length, ...v.rebuilt), _.siblings.splice(I + 1, 0, ...v.followingBlocks));
  }
  for (const k of l.values()) {
    const _ = y.get(k.getKey());
    if (!_) continue;
    const M = 1 + Oo(k).length, v = tA(k, r, s);
    if (!v) continue;
    const A = _.siblings.indexOf(_.node);
    A < 0 || _.siblings.splice(A, M, ...v);
  }
  for (const k of g) {
    const _ = y.get(k.getKey());
    if (!_) continue;
    const M = _.siblings.indexOf(_.node);
    if (M < 0) continue;
    _.siblings.splice(M, 1);
    const v = _.siblings[M - 1], A = _.siblings[M], x = v && li(v), I = A && li(A);
    v && A && x !== void 0 && I !== void 0 && YE(v, A) && (v.text = x + I, _.siblings.splice(M, 1));
  }
  return Vh(e, r.viewOptions);
}
function nA({
  viewOptions: e,
  logger: t
}) {
  const [r] = le(), n = Rn(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return K(() => {
    if (n)
      return r.registerNodeTransform(
        et,
        (i) => iA(i, t)
      );
  }, [r, n, t]), null;
}
function iA(e, t) {
  e.getMarker() !== It && (e.isEmpty() || _t(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${It}" (key ${e.getKey()})`
  ), e.setMarker(It)));
}
function sA({
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
    i.scrRef = e, i.onScrRefChange = t, to(s, e) || oA(i, r, e);
  }, [r, e, t]), K(
    () => r.registerMutationListener(
      Ft,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = uc(r);
        Vd(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Ms(s) === Ms(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), K(() => {
    const i = (a) => a.read(
      () => new Set(
        Ue().getChildren().filter(He).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (uc(r) || Vd(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: Ms(a) === Ms(c)
      }));
    };
    return Ze(
      ...[At, ur].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), K(
    () => r.registerCommand(
      br,
      () => {
        const i = n.current;
        return i.phase === "idle" && uA(i, cA()), !1;
      },
      $t
    ),
    [r]
  ), K(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(br, void 0));
    };
    return Ze(
      r.registerMutationListener(Ct, i),
      r.registerMutationListener(ft, i)
    );
  }, [r]), K(() => {
    const i = () => hA(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function oA(e, t, r) {
  if (aA(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = uc(t);
  (!n || n === r.book) && t.update(() => rm(r.chapterNum, r.verseNum), {
    tag: zr
  });
}
function aA(e, t) {
  const r = e.pendingEchoes.findIndex((n) => to(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function cA() {
  const e = O(), t = qc(e);
  if (!t) return;
  const r = Pl(), n = sp(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = Wc(t, e), { verseNum: o, verse: a } = FT(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function uc(e) {
  return e.getEditorState().read(() => Pl()?.getCode() || void 0);
}
function Pl() {
  return Ue().getChildren().find(Ge);
}
function Vd(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && _a(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || _a(e, t), e.phase = "navigating") : i && _a(e, t), r && r !== e.scrRef.book && sm(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function _a(e, t) {
  queueMicrotask(() => {
    t.update(
      () => rm(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: zr }
    );
  });
}
function rm(e, t) {
  const r = qc(O()), n = Hc(r)?.getNumber(), i = sp(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (dp(n) ? im(t, n) : parseInt(n, 10) === t))
    return;
  const o = Ue().getChildren(), a = ip(o, e);
  if (!a) return;
  const c = Qb(o, a), l = Vb(c, !0);
  Xb(c, l);
  let u;
  try {
    u = $T(c, t);
  } catch {
    return;
  }
  u && (se(u) ? !E(u.getFirstChild()) && mi(u) || Jt(u, 0) : lA(u));
}
function lA(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || me(n)) {
    Jt(t, r);
    return;
  }
  const i = To(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (E(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = L(n) && !j(n) ? nm(n) : void 0;
  s ? s.select(0, 0) : Jt(t, r);
}
function nm(e) {
  const t = e.getFirstChild();
  if (E(t)) return t;
  if (L(t) && !j(t)) return nm(t);
}
function Ms(e) {
  return e.read(() => {
    const t = Ue().getChildren().find(He);
    return `${Pl()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function uA(e, t) {
  e.phase !== "navigating" && t && (dA(t, e.scrRef) || sm(e, fA(t, e.scrRef)));
}
function dA(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? im(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function im(e, t) {
  try {
    return Rc(e, t);
  } catch {
    return !1;
  }
}
function fA(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const pA = 8;
function sm(e, t) {
  return to(t, e.scrRef) || e.pendingEchoes.some((r) => to(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > pA && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function to(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function hA(e) {
  e.phase = "idle";
}
function gA(e) {
  return Ge(e) ? `${e.__code}` : $e(e) ? `${e.__marker} "${e.__number}"` : $(e) ? `${e.__marker}` : ls(e) ? `${e.__marker} "${e.__number}"` : fr(e) ? `${e.__caller}` : qn(e) ? `${e.__marker} "${e.__number}"` : j(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : se(e) ? `${e.__marker}` : E(e) ? `"${e.__text}"${mA(e)}` : _e(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : we(e) ? `${e.__marker} "${e.__number}"` : "";
}
function mA(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[os]) : "";
}
function yA() {
  const [e] = le();
  return /* @__PURE__ */ S(
    hy,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: gA,
      editor: e
    }
  );
}
const om = Zd(null), Wd = 4;
function bA({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = X(null), s = ef(om);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return K(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ S("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function kA({
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
  }, [n, s]), /* @__PURE__ */ S(om.Provider, { value: l, children: /* @__PURE__ */ S("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function TA({
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
      const { top: g, left: m } = f.getBoundingClientRect();
      p.style.top = `${g + f.offsetHeight + Wd}px`, p.style.left = `${Math.min(m, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), K(() => {
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
  }, [a, c, l, o]), K(() => {
    const f = () => {
      if (l) {
        const p = c.current, g = a.current;
        if (p !== null && g !== null) {
          const { top: m } = p.getBoundingClientRect(), y = m + p.offsetHeight + Wd;
          y !== g.getBoundingClientRect().top && (g.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Te(mn, { children: [
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
    l && gn(
      /* @__PURE__ */ S(kA, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const dc = {
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
}, fc = {
  ...dc,
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
function xA({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ S(
    TA,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + _A(t),
      buttonLabel: CA(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(dc).map((n) => /* @__PURE__ */ Te(
        bA,
        {
          className: "item block-marker " + vA(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ S("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ S("span", { className: "text usfm_" + n, children: dc[n] })
          ]
        },
        n
      ))
    }
  );
}
function _A(e) {
  return e && e in fc ? e : "ban";
}
function CA(e) {
  return e && e in fc ? fc[e] : "No Style";
}
function vA(e) {
  return e ? "active dropdown-item-active" : "";
}
function Hd() {
  return /* @__PURE__ */ S("div", { className: "divider" });
}
const SA = An(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = le(), [o, a] = de(s), [c, l] = de(), [u, d] = de(!1), [f, p] = de(!1), g = ge(
    ({
      canUndo: m,
      canRedo: y,
      blockMarker: k,
      contextMarker: _
    }) => {
      d(m), p(y), l(k), n?.({
        canUndo: m,
        canRedo: y,
        blockMarker: k,
        contextMarker: _
      });
    },
    [n]
  );
  return K(() => s.registerCommand(
    br,
    (m, y) => (a(y), !1),
    yr
  ), [s]), /* @__PURE__ */ Te(mn, { children: [
    /* @__PURE__ */ S(Rh, { onStateChange: g }),
    /* @__PURE__ */ Te("div", { className: "toolbar", children: [
      /* @__PURE__ */ S(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(hf, void 0);
          },
          title: Ns ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(gf, void 0);
          },
          title: Ns ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ S("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ S(Hd, {}),
      o === s && /* @__PURE__ */ Te(mn, { children: [
        /* @__PURE__ */ S(
          xA,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ S(Hd, {})
      ] }),
      /* @__PURE__ */ S("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), MA = So(), EA = {}, AA = {};
function PA() {
  return /* @__PURE__ */ S("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
const am = An(function({
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
  const d = X(null), f = X(null), p = X(null), g = X(t), m = X(void 0), y = X(void 0), k = X(void 0), _ = X(void 0), M = X(!1), [v, A] = de(t), [x, I] = de(0), [U, G] = de(), {
    isReadonly: V = !1,
    structureProtectionMode: ae = "off",
    hasExternalUI: ce = !1,
    hasSpellCheck: ie = !1,
    textDirection: Ce = "ltr",
    markerMenuTrigger: Pe = "\\",
    view: Q,
    nodes: F,
    debug: Z = !1,
    contextMenu: Ee,
    styleInfo: Oe,
    markerSettleDelayMs: Xt
  } = a ?? AA, ee = Q ?? MA, vt = Zi(ee) && (ee.markerMode !== "hidden" || !ee.hasSpacing || ee.hasGutterParaMarkers || ee.hasActiveTextFocusBox) ? {
    ...ee,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : ee, en = X(vt);
  wt(en.current, vt) || (en.current = vt);
  const fe = en.current, ct = Fe(() => F ?? EA, [F]), Io = Fe(() => Ee, [Ee]), bi = Fe(
    () => MT(Oe ?? Ks),
    [Oe]
  ), wr = X(c);
  wt(wr.current, c) || (wr.current = c);
  const Ye = wr.current, lt = Zi(fe), ue = V || lt, In = vt !== ee;
  K(() => {
    lt && !V && Ye?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), In && Ye?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    );
  }, [lt, V, In, Ye]);
  const be = X(null), ki = Fe(() => {
    if (fe.markerMode !== "editable") return;
    const N = Oe ?? Ks;
    return {
      getContext: () => be.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (z) => hM(
        N,
        z,
        ct.extraValidMarkers
      ),
      getEnterItems: (z) => gM(
        N,
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
  }, [fe, Oe, ct.extraValidMarkers]), ve = (N) => {
    M.current || (M.current = !0, wr.current?.warn(
      `Editor: cannot ${N} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Nr = (N) => {
    if (lt)
      throw new Error(
        `Cannot ${N} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Or = (N) => {
    if (Nr(N), ue) throw new Error(`Cannot ${N} in readonly mode`);
  }, Qt = Fe(
    () => ({
      namespace: "platformEditor",
      theme: { ...ug, showCharMarkerTitles: fe.showCharMarkerTitles },
      editable: !ue,
      editorState: void 0,
      // Handling of errors during update
      onError(N) {
        throw N;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [tt, ...lt ? Dx : lh]
    }),
    [ue, lt, fe.showCharMarkerTitles]
  );
  ma.initialize(Ye);
  function qr(N) {
    if (N !== void 0 && !IS(N, ct.extraValidMarkers))
      throw new Error(`Unsupported character marker '${N}'`);
  }
  const tn = ge(() => {
    const N = d.current;
    if (!N) return g.current;
    const z = mu(N), H = y.current;
    if ((!z || z.size === 0) && !H) return g.current;
    const J = N.getEditorState(), xe = J.toJSON();
    return J.read(
      () => rA(
        xe,
        z ?? /* @__PURE__ */ new Set(),
        { viewOptions: fe, getMarker: bi, logger: Ye },
        H,
        k.current
      )
    ) ?? g.current;
  }, [fe, bi, Ye]), Ti = {
    focus() {
      d.current?.focus();
    },
    isFocused() {
      const N = d.current?.getRootElement();
      return !!N && N.ownerDocument.activeElement === N;
    },
    undo() {
      d.current?.dispatchCommand(hf, void 0);
    },
    redo() {
      d.current?.dispatchCommand(gf, void 0);
    },
    cut() {
      Or("cut"), d.current?.dispatchCommand(bn, null);
    },
    copy() {
      d.current?.dispatchCommand(oo, null);
    },
    paste() {
      Or("paste"), d.current && sl(d.current);
    },
    pastePlainText() {
      Or("paste as plain text"), d.current && ol(d.current);
    },
    getUsj() {
      return tn();
    },
    commitPendingMarkerEdits() {
      d.current?.update(
        () => {
          d.current?.dispatchCommand(Yg, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(N) {
      if (!N) {
        y.current = void 0;
        return;
      }
      const z = d.current?.getEditorState().read(() => {
        const H = O();
        return w(H) && H.isCollapsed() ? H.focus.key : void 0;
      });
      y.current = { input: N, nodeKey: z ?? k.current?.key };
    },
    setUsj(N) {
      if (!wt(g.current, N)) {
        g.current = N, y.current = void 0;
        const z = wt(v, N);
        A(N), z && I((H) => H + 1);
      }
    },
    applyUpdate(N, z = "remote") {
      if (lt && z === "remote") {
        wr.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      Nr("apply an update"), d.current?.update(
        () => {
          z === "remote" && Fr(ji), d_(N, fe, ct, Ye);
        },
        { discrete: !0 }
      );
      const H = d.current?.getEditorState();
      if (!H) return;
      const J = ma.deserializeEditorState(H, fe);
      if (J) {
        const xe = !wt(g.current, J);
        if (xe && (g.current = J), xe || !wt(v, J)) {
          const ut = Au(N, H, "apply");
          _.current = J, s?.(J, N, z, ut);
        }
      }
    },
    replaceEmbedUpdate(N, z) {
      const H = d.current?.read(() => QT(N, z));
      H ? this.applyUpdate(H) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${N}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (lt) {
        ve("get the selection");
        return;
      }
      return d.current?.read(sh);
    },
    setSelection(N) {
      if (lt) {
        ve("set the selection");
        return;
      }
      d.current?.update(() => {
        const z = Xc(N);
        z !== void 0 && (Ki(z), Fr(Ef));
      });
    },
    setAnnotation(N, z, H, J, xe) {
      if (lt) {
        ve("set an annotation");
        return;
      }
      let ut, Pt, rn, nn;
      typeof J == "function" || J === void 0 ? (ut = J, Pt = xe) : (ut = J.onClick, Pt = J.onRemove, rn = J.onMouseEnter, nn = J.onMouseLeave), f.current?.setAnnotation(
        N,
        iu(z),
        H,
        ut,
        Pt,
        rn,
        nn
      );
    },
    removeAnnotation(N, z) {
      f.current?.removeAnnotation(iu(N), z);
    },
    formatPara(N) {
      Or("format a paragraph"), d.current?.update(() => {
        const z = O();
        if (!w(z)) {
          c?.warn(
            `formatPara refused: no range selection to retag with "${N}" (restore the caret before applying, as the marker palettes do)`
          );
          return;
        }
        yy(z, () => ri(N));
        const H = O();
        if (!w(H)) return;
        const J = /* @__PURE__ */ new Set();
        H.getNodes().forEach((xe) => {
          const ut = xe.getTopLevelElement();
          se(ut) && J.add(ut);
        }), J.forEach((xe) => $g(xe, N, fe));
      });
    },
    getElementByKey(N) {
      return d.current?.read(
        () => d.current?.getElementByKey(N) ?? void 0
      );
    },
    removeCharacterMarker(N) {
      if (ue) throw new Error("Cannot remove character marker in readonly mode");
      qr(N);
      let z = !1;
      return d.current?.update(
        () => {
          const H = O();
          w(H) && (z = ig(H, N, fe));
        },
        { discrete: !0 }
      ), z;
    },
    replaceCharacterMarker(N, z) {
      if (ue) throw new Error("Cannot replace character marker in readonly mode");
      qr(N), qr(z);
      let H = !1;
      return d.current?.update(
        () => {
          const J = O();
          w(J) && (H = GS(J, N, z));
        },
        { discrete: !0 }
      ), H;
    },
    extendCharacterMarker(N, z) {
      if (ue) throw new Error("Cannot extend character marker in readonly mode");
      qr(N), z?.forEach(
        (J) => qr(J)
      );
      let H = !1;
      return d.current?.update(
        () => {
          const J = O();
          w(J) && (H = JS(
            J,
            N,
            z,
            fe
          ));
        },
        { discrete: !0 }
      ), H;
    },
    insertMarker(N) {
      if (ue) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!d.current) return;
      if (!ec(N, ct.extraValidMarkers))
        throw new Error(`Unsupported marker '${N}'`);
      const z = tc(
        N,
        m,
        fe,
        ct,
        Ye,
        void 0,
        Oe
      );
      return z.action({ editor: d.current, reference: r }), z.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!V)
        return d.current?.getEditorState().read(() => nE());
    },
    applyMarkerMenuSelection(N, z) {
      if (V) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if (N.kind !== "closeTag" && !ec(N.marker, ct.extraValidMarkers))
        throw new Error(`Unsupported marker '${N.marker}'`);
      let H;
      return d.current.update(() => {
        H = lE(N, z, r, {
          expandedNoteKeyRef: m,
          viewOptions: fe,
          nodeOptions: ct,
          logger: c,
          styleInfo: Oe
        });
      }), H;
    },
    splitParagraphWithMarker(N) {
      if (V) throw new Error("Cannot split paragraph in readonly mode");
      d.current && d.current.update(() => {
        zg(N, fe);
      });
    },
    commitTypedMarker(N, z) {
      if (V) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let H = !1;
      return d.current.update(() => {
        H = cE(N, z), H || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), H;
    },
    commitTypedCloser(N) {
      if (V) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let z = !1;
      return d.current.update(() => {
        z = Fg(N), z || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), z;
    },
    insertNote(N, z, H) {
      Or("insert a note"), d.current?.update(() => {
        const J = ah(
          N,
          z,
          H,
          r,
          fe,
          ct,
          Ye
        );
        J && !J.getIsCollapsed() && (m.current = J.getKey());
      });
    },
    selectNote(N) {
      d.current?.update(() => {
        const z = Ru(N);
        z && ($x(z, fe), z.getIsCollapsed() || (m.current = z.getKey()));
      });
    },
    getNoteOps(N) {
      return d.current?.read(() => {
        const z = Ru(N);
        if (z)
          return Jc(z);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  be.current = Ti, hc(u, () => Ti), K(() => {
    const N = d.current;
    if (N)
      return N.registerUpdateListener(({ editorState: z }) => {
        z.read(() => {
          const H = O();
          if (!w(H) || !H.isCollapsed()) return;
          const J = H.focus.getNode();
          E(J) && (k.current = { key: J.getKey(), offset: H.focus.offset });
        });
      });
  }, []);
  const ps = ge(
    (N, z, H, J) => {
      if (lt) return;
      const xe = ma.deserializeEditorState(N, fe);
      if (xe) {
        const ut = !wt(g.current, xe);
        if (ut && (g.current = xe), ut || !wt(v, xe)) {
          const Pt = Au(J, N);
          _.current = xe, s?.(xe, J, "local", Pt);
        }
      }
    },
    [v, s, fe, lt]
  );
  K(() => {
    const N = d.current;
    if (!(!N || !s))
      return N.registerUpdateListener(({ tags: z, dirtyElements: H, dirtyLeaves: J }) => {
        !z.has(Tc) && (H.size === 0 && J.size === 0 || z.has(ji) || !mu(N)?.size) || queueMicrotask(() => {
          const xe = tn();
          !xe || wt(_.current, xe) || (_.current = xe, s(xe, void 0, "local", void 0));
        });
      });
  }, [s, tn]);
  const zt = ge(
    (N) => {
      G(N.contextMarker), o?.(N);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Te(bf, { initialConfig: Qt, children: [
      /* @__PURE__ */ S(uC, { isEditable: !ue }),
      /* @__PURE__ */ Te("div", { className: "editor-container", children: [
        ce ? /* @__PURE__ */ S(Rh, { onStateChange: zt }) : /* @__PURE__ */ S(
          "div",
          {
            className: "editor-toolbar-container" + (ue ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ S(
              SA,
              {
                ref: p,
                editorRef: be,
                isReadonly: ue,
                onStateChange: zt
              }
            )
          }
        ),
        /* @__PURE__ */ Te("div", { className: "editor-inner", children: [
          /* @__PURE__ */ S(Tf, { editorRef: d }),
          /* @__PURE__ */ S(
            my,
            {
              contentEditable: /* @__PURE__ */ S(
                kf,
                {
                  className: `editor-input usfm ${u_(fe).join(" ")}${fe.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${fe.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: ie
                }
              ),
              placeholder: /* @__PURE__ */ S(PA, {}),
              ErrorBoundary: xf
            }
          ),
          ce && /* @__PURE__ */ S(lC, {}),
          /* @__PURE__ */ S(_f, {}),
          r && n && /* @__PURE__ */ S(sA, { scrRef: r, onScrRefChange: n }),
          r && !ce && /* @__PURE__ */ S(
            Rv,
            {
              trigger: Pe,
              scrRef: r,
              contextMarker: U,
              getMarkerAction: (N) => tc(
                N,
                m,
                fe,
                ct,
                Ye,
                void 0,
                Oe
              ),
              editableHarness: ki
            }
          ),
          /* @__PURE__ */ S(
            pC,
            {
              scripture: v,
              scriptureRef: g,
              nodeOptions: ct,
              editorAdaptor: _r,
              viewOptions: fe,
              logger: Ye
            },
            x
          ),
          /* @__PURE__ */ S(qC, { onChange: i }),
          /* @__PURE__ */ S(
            i_,
            {
              onChange: ps,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Dy
            }
          ),
          /* @__PURE__ */ S(eM, { viewOptions: fe }),
          /* @__PURE__ */ S(r_, { ref: f, logger: Ye }),
          /* @__PURE__ */ S(L_, { viewOptions: fe }),
          /* @__PURE__ */ S(X_, {}),
          /* @__PURE__ */ S(nC, {}),
          fe?.markerMode !== "editable" && /* @__PURE__ */ S(iC, { logger: Ye }),
          /* @__PURE__ */ S(cC, { options: Io }),
          /* @__PURE__ */ S(fC, {}),
          /* @__PURE__ */ S(uE, {}),
          /* @__PURE__ */ S(
            UE,
            {
              viewOptions: fe,
              getMarker: bi,
              logger: Ye,
              markerSettleDelayMs: Xt
            }
          ),
          /* @__PURE__ */ S(
            VE,
            {
              styleInfo: Oe,
              viewOptions: fe,
              logger: Ye
            }
          ),
          /* @__PURE__ */ S(
            hC,
            {
              expandedNoteKeyRef: m,
              nodeOptions: ct,
              viewOptions: fe,
              logger: Ye
            }
          ),
          /* @__PURE__ */ S(OC, {}),
          /* @__PURE__ */ S(O_, {}),
          /* @__PURE__ */ S(A_, {}),
          /* @__PURE__ */ S(nA, { viewOptions: fe, logger: Ye }),
          /* @__PURE__ */ S(RC, {}),
          /* @__PURE__ */ S(xv, { structureProtectionMode: ae }),
          /* @__PURE__ */ S(_v, { textDirection: Ce }),
          /* @__PURE__ */ S(vv, {}),
          /* @__PURE__ */ S(Ov, {}),
          l
        ] }),
        Z && /* @__PURE__ */ S(yA, {})
      ] })
    ] }, fe.verseLayout ?? "inline")
  );
}), L1 = An(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ S(am, { ref: r, ...i });
});
function cm() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function ro(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? cm() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function lm(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? cm() : r,
    quote: e,
    type: "thread"
  };
}
function Gd(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function wA(e) {
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
class NA {
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
          const c = Gd(a);
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
          const c = Gd(a);
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
      markedComment: wA(t)
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
    return t !== null ? t.doc.get("comments", Jl) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Yl(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Jl();
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
      Oy,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      $t
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof qy) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const g = p.insert, m = p.retain, y = p.delete, k = u.parent, _ = u === r ? void 0 : k instanceof Yl && this._comments.find((M) => M.id === k.get("id"));
              if (Array.isArray(g)) {
                const M = f;
                g.slice().reverse().forEach((v) => {
                  const A = v.get("id"), I = v.get("type") === "thread" ? lm(
                    v.get("quote"),
                    v.get("comments").toArray().map(
                      (U) => ro(
                        U.get("content"),
                        U.get("author"),
                        U.get("id"),
                        U.get("timeStamp"),
                        U.get("deleted")
                      )
                    ),
                    A
                  ) : ro(
                    v.get("content"),
                    v.get("author"),
                    A,
                    v.get("timeStamp"),
                    v.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(I, _, M);
                  });
                });
              } else if (typeof m == "number")
                f += m;
              else if (typeof y == "number")
                for (let M = 0; M < y; M++) {
                  const v = _ === void 0 || _ === !1 ? this._comments[f] : _.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(v, _);
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
function OA(e) {
  const [t, r] = de(e.getComments());
  return K(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function qA({
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
function RA({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return gn(
    /* @__PURE__ */ S(qA, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function um() {
  const [e, t] = de(null), r = ge(() => {
    t(null);
  }, []), n = Fe(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ S(RA, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const $A = {
  ...ug,
  paragraph: "CommentEditorTheme__paragraph"
};
function IA(...e) {
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
      className: IA(
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
function LA({
  className: e
}) {
  return /* @__PURE__ */ S(kf, { className: e || "ContentEditable__root" });
}
function DA({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ S("div", { className: t || "Placeholder__root", children: e });
}
const Jd = pf("INSERT_INLINE_COMMAND");
function UA({
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
  }, [e, t, r, s]), /* @__PURE__ */ S("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ S("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ S("i", { className: "icon add-comment" }) }) });
}
function FA({ onEscape: e }) {
  const [t] = le();
  return K(() => t.registerCommand(
    ff,
    (r) => e(r),
    Xn
  ), [t, e]), null;
}
function dm({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ S(bf, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: $A
  }, children: /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ S(
      Py,
      {
        contentEditable: /* @__PURE__ */ S(LA, { className: e }),
        placeholder: /* @__PURE__ */ S(DA, { children: s }),
        ErrorBoundary: xf
      }
    ),
    /* @__PURE__ */ S(Ay, { onChange: n }),
    /* @__PURE__ */ S(_f, {}),
    t !== !1 && /* @__PURE__ */ S(Sy, {}),
    /* @__PURE__ */ S(FA, { onEscape: r }),
    /* @__PURE__ */ S(My, {}),
    i !== void 0 && /* @__PURE__ */ S(Tf, { editorRef: i })
  ] }) });
}
function fm(e, t) {
  return ge(
    (r, n) => {
      r.read(() => {
        e(wy()), t(!Ny(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function zA({
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
  ), l = X(null), u = hm(), d = ge(() => {
    e.getEditorState().read(() => {
      const m = O();
      if (w(m)) {
        l.current = m.clone();
        const y = m.anchor, k = m.focus, _ = by(
          e,
          y.getNode(),
          y.offset,
          k.getNode(),
          k.offset
        ), M = a.current;
        if (_ !== null && M !== null) {
          const { left: v, bottom: A, width: x } = _.getBoundingClientRect(), I = ky(e, _);
          let U = I.length === 1 ? v + x / 2 - 125 : v - 125;
          U < 10 && (U = 10), M.style.left = `${U}px`, M.style.top = `${A + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const G = I.length, { container: V } = c, ae = c.elements, ce = ae.length;
          for (let ie = 0; ie < G; ie++) {
            const Ce = I[ie];
            let Pe = ae[ie];
            Pe === void 0 && (Pe = document.createElement("span"), ae[ie] = Pe, V.appendChild(Pe));
            const F = `position:absolute;top:${Ce.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${Ce.left}px;height:${Ce.height}px;width:${Ce.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            Pe.style.cssText = F;
          }
          for (let ie = ce - 1; ie >= G; ie--) {
            const Ce = ae[ie];
            V.removeChild(Ce), ae.pop();
          }
        }
      }
    });
  }, [e, c]);
  is(() => {
    d();
    const m = c.container, y = document.body;
    return y !== null ? (y.appendChild(m), () => {
      y.removeChild(m);
    }) : () => {
    };
  }, [c.container, d]), K(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (m) => (m.preventDefault(), t(), !0), p = () => {
    if (s) {
      let m = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      m.length > 100 && (m = m.slice(0, 99) + "…"), r(
        lm(m, [ro(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, g = fm(i, o);
  return /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ S(
      dm,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: g
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
function KA({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = X(null), c = hm(), l = fm(i, o);
  return /* @__PURE__ */ Te(mn, { children: [
    /* @__PURE__ */ S(
      dm,
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
            e(ro(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(ly, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ S("i", { className: "send" })
      }
    )
  ] });
}
function pm({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Te(mn, { children: [
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
function Yd({
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = um();
  return /* @__PURE__ */ Te("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ S("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Te("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ S("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Te(mn, { children: [
      /* @__PURE__ */ S(
        Gr,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ S(
              pm,
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
function jA({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = le(), [a, c] = de(0), [l, u] = um(), d = Fe(
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
          const m = s.get(p);
          if (m !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const k = Array.from(m)[0], _ = ne(k);
                _e(_) && _.selectStart();
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
                  u("Delete Thread", (m) => /* @__PURE__ */ S(
                    pm,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: m
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ S("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ S("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((m) => /* @__PURE__ */ S(
            Yd,
            {
              comment: m,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            m.id
          )) }),
          /* @__PURE__ */ S("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ S(
            KA,
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
      Yd,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function BA({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = X(null), o = r.length === 0;
  return /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ S("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ S("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ S(
      jA,
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
function hm() {
  const e = Cf(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function VA({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = Cf(), [a] = le(), c = Fe(() => {
    const U = new NA(a, s);
    return r && U.registerOnChange(r), t?.(U), U;
  }, [a, s, r, t]), l = OA(c), u = Fe(() => /* @__PURE__ */ new Map(), []), [d, f] = de(), [p, g] = de([]), [m, y] = de(!1), [k, _] = de(!1), { yjsDocMap: M } = o;
  K(() => {
    if (e) {
      const U = e("comments", M);
      return c.registerCollaboration(U);
    }
    return () => {
    };
  }, [c, e, M]);
  const v = ge(() => {
    a.update(() => {
      const U = O();
      U !== null && (U.dirty = !0);
    }), y(!1);
  }, [a]), A = ge(
    (U, G) => {
      if (U.type === "comment") {
        const V = c.deleteCommentOrThread(U, G);
        if (!V)
          return;
        const { markedComment: ae, index: ce } = V;
        c.addComment(ae, G, ce);
      } else {
        c.deleteCommentOrThread(U);
        const V = G !== void 0 ? G.id : U.id, ae = u.get(V);
        ae !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const ce of ae) {
              const ie = ne(ce);
              _e(ie) && (ie.deleteID(Ur, V), ie.hasNoIDsForEveryType() && Is(ie));
            }
          });
        });
      }
    },
    [c, a, u]
  ), x = ge(
    (U, G, V, ae) => {
      c.addComment(U, V), G && (a.update(() => {
        w(ae) && Ff(ae, Ur, U.id);
      }), y(!1));
    },
    [c, a]
  );
  K(() => {
    const U = [];
    let G;
    for (const V of p) {
      const ae = u.get(V);
      if (ae !== void 0)
        for (const ce of ae) {
          const ie = a.getElementByKey(ce);
          ie !== null && (ie.classList.add("selected"), U.push(ie), G = window.setTimeout(() => {
            _(!0);
          }, 0));
        }
    }
    return () => {
      G !== void 0 && window.clearTimeout(G);
      for (const V of U)
        V.classList.remove("selected");
    };
  }, [p, a, u]), K(() => {
    if (!a.hasNodes([tt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const U = /* @__PURE__ */ new Map();
    return Ze(
      yf(
        a,
        tt,
        (G) => Bi(G.getTypedIDs()),
        (G, V) => {
          for (const [ae, ce] of Object.entries(G.getTypedIDs()))
            ce.forEach((ie) => {
              V.addID(ae, ie);
            });
        }
      ),
      a.registerMutationListener(
        tt,
        (G) => {
          a.getEditorState().read(() => {
            for (const [V, ae] of G) {
              const ce = ne(V);
              let ie = [];
              ae === "destroyed" ? ie = U.get(V) ?? [] : _e(ce) && (ie = ce.getTypedIDs()[Ur] ?? []);
              for (const Ce of ie) {
                let Pe = u.get(Ce);
                U.set(V, ie), ae === "destroyed" ? Pe !== void 0 && (Pe.delete(V), Pe.size === 0 && u.delete(Ce)) : (Pe === void 0 && (Pe = /* @__PURE__ */ new Set(), u.set(Ce, Pe)), Pe.has(V) || Pe.add(V));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: G, tags: V }) => {
        G.read(() => {
          const ae = O();
          let ce = !1, ie = !1;
          if (w(ae)) {
            const Ce = ae.anchor.getNode();
            if (E(Ce)) {
              const Pe = _b(Ce, Ur, ae.anchor.offset) ?? [];
              Pe !== null && (g(Pe), ce = !0), ae.isCollapsed() || (f(Ce.getKey()), ie = !0);
            }
          }
          ce || g((Ce) => Ce.length === 0 ? Ce : []), ie || f(null), !V.has("collaboration") && w(ae) && y(!1);
        });
      }),
      a.registerCommand(
        Jd,
        () => {
          const G = window.getSelection();
          return G !== null && G.removeAllRanges(), y(!0), !0;
        },
        yn
      )
    );
  }, [a, u]);
  const I = () => {
    a.dispatchCommand(Jd, void 0);
  };
  return /* @__PURE__ */ Te(mn, { children: [
    m && gn(
      /* @__PURE__ */ S(
        zA,
        {
          editor: a,
          cancelAddComment: v,
          submitAddComment: x
        }
      ),
      document.body
    ),
    d != null && !m && gn(
      /* @__PURE__ */ S(
        UA,
        {
          anchorKey: d,
          editor: a,
          showComments: k,
          onAddComment: I
        }
      ),
      document.body
    ),
    n !== null && gn(
      /* @__PURE__ */ S(
        Gr,
        {
          className: `CommentPlugin_ShowCommentsButton ${k ? "active" : ""}`,
          onClick: () => _(!k),
          title: k ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ S("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    k && gn(
      /* @__PURE__ */ S(
        BA,
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
function WA() {
  const e = X(void 0), t = ge((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function HA(e, t) {
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
function GA(e, t) {
  K(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      HA(r, t);
    };
  }, [t, e]);
}
const D1 = An(function(t, r) {
  const n = X(null), i = X(!0), s = X(null), [o, a] = de(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: g, view: m } = {} } = t, y = (g ?? !1) || Zi(m), [k, _] = WA();
  GA(f, k), K(() => {
    if (process.env.NODE_ENV !== "production") {
      const A = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(A), p || console.warn(A);
    }
  }, [p]), hc(r, () => ({
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
    setAnnotation(A, x, I, U, G) {
      typeof U == "function" || U === void 0 ? n.current?.setAnnotation(A, x, I, U, G) : n.current?.setAnnotation(A, x, I, U);
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
    insertNote(A, x, I) {
      n.current?.insertNote(A, x, I);
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
  const M = ge(
    (A, x, I, U) => {
      if (!u) return;
      const G = k.current?.getComments();
      u(A, G, x, I, U);
    },
    [k, u]
  ), v = ge(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const A = k.current?.getComments();
    l(A);
  }, [k, i, l]);
  return K(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ S(Ey, { children: /* @__PURE__ */ Te(am, { ref: n, onUsjChange: M, ...f, children: [
    /* @__PURE__ */ S(
      VA,
      {
        setCommentStore: _,
        onChange: v,
        showCommentsContainerRef: y ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ S("div", { ref: s, className: "comment-container" })
  ] }) });
});
function hn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function JA(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function YA(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const XA = /^[#\w().,%/\s-]+$/;
function gr(e) {
  return e != null;
}
const QA = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, ZA = {
  left: "right",
  right: "left"
}, e1 = "var(--usj-font-fallback, serif)";
function gm(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${JA(i)}"`).join(", ")}, ${e1}`;
}
const pc = ".editor-input.usfm", t1 = /^[\w.#[\]="':()>+~*,\s-]+$/;
function r1(e) {
  return t1.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${pc}".`
  ), pc);
}
function n1(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(gm(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (XA.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), gr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), gr(t.firstLineIndent) && s.push(`text-indent: ${hn(t.firstLineIndent * 20 * r)}vw`), gr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${hn(t.leftMargin * 20 * r)}vw`), gr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${hn(t.rightMargin * 20 * r)}vw`
  ), gr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${hn(t.spaceBefore * r)}pt`), gr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${hn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = QA[n ? ZA[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Xd = { c: 150, ca: 133, cp: 150 };
function Qd(e, t) {
  return e && gr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function i1(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && gr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Qd(e.markers.c, Xd.c);
  return ["ca", "cp"].map((i) => {
    const s = Qd(
      e.markers[i],
      Xd[i]
    ), o = hn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function U1(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = pc } = t, s = r1(i), o = [], a = [];
  e.defaultFont && a.push(gm(e.defaultFont)), gr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${hn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = n1(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${YA(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...i1(e, s)), o.join(`
`);
}
export {
  yh as BLOCK_VERSE_VIEW_MODE,
  T as CategoryType,
  L1 as Editorial,
  qs as GENERATOR_NOTE_CALLER,
  Sf as HIDDEN_NOTE_CALLER,
  D1 as Marginal,
  b as MarkerType,
  gh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  mh as STANDARD_VIEW_MODE,
  Ks as defaultStyleInfo,
  I1 as directionToNames,
  Hx as filterAndRankItems,
  U1 as generateUsjCss,
  R1 as getDefaultViewMode,
  So as getDefaultViewOptions,
  gM as getEnterMenuItems,
  hM as getMarkerMenuItems,
  $1 as getViewMode,
  bh as getViewOptions,
  Zi as isBlockVerseLayout,
  Lr as isInsertEmbedOpOfType,
  o_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
