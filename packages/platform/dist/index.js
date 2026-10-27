import { jsx as v, jsxs as ke, Fragment as fn } from "react/jsx-runtime";
import { forwardRef as Sn, useState as de, useRef as Z, useCallback as ge, useEffect as K, useMemo as ze, memo as Rm, createContext as Qd, useContext as Zd, Children as $m, isValidElement as Im, cloneElement as Lm, useImperativeHandle as pc, useLayoutEffect as ss } from "react";
import { assertSafeKey as Ve, isValidBookCode as Dm, MARKER_OBJECT_PROPS as Um, USJ_VERSION as dr, USJ_TYPE as fr, isUsjTextContentLocation as Fm, indexesFromUsjJsonPath as ef, isUsjAttributeKeyLocation as zm, isUsjAttributeMarkerLocation as Km, isUsjClosingAttributeMarkerLocation as jm, isUsjMarkerLocation as Bm, isUsjClosingMarkerLocation as Vm, isUsjPropertyValueLocation as Wm, getUsjDocumentLocationTypeName as Hm, usjJsonPathFromIndexes as en, EMPTY_USJ as tf } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as je, $parseSerializedNode as so, DecoratorNode as os, ElementNode as Gt, isHTMLElement as Mn, createState as oo, $getState as Y, $setState as ot, $isRangeSelection as O, $isElementNode as L, $isTextNode as M, ParagraphNode as hc, TextNode as Ke, $createTextNode as Le, $getCommonAncestor as Gm, $getSelection as q, NODE_STATE_KEY as as, $isLineBreakNode as ao, $getEditor as cs, $hasUpdateTag as Jm, $getNodeByKey as ie, $getRoot as Ue, $createRangeSelection as gc, $createPoint as Gl, $getCharacterOffsets as rf, KEY_DOWN_COMMAND as br, COMMAND_PRIORITY_HIGH as $e, HISTORY_MERGE_TAG as nf, CLICK_COMMAND as co, COMMAND_PRIORITY_EDITOR as pn, isDOMNode as sf, $getNearestNodeFromDOMNode as ls, CONTROLLED_TEXT_INSERTION_COMMAND as mc, PASTE_COMMAND as lr, COMMAND_PRIORITY_CRITICAL as ur, CUT_COMMAND as hn, DROP_COMMAND as yc, DELETE_CHARACTER_COMMAND as Ym, DELETE_WORD_COMMAND as Xm, DELETE_LINE_COMMAND as Qm, $isDecoratorNode as of, COPY_COMMAND as lo, COMMAND_PRIORITY_NORMAL as Gn, SELECTION_CHANGE_COMMAND as pr, BLUR_COMMAND as bc, $addUpdateTag as Ir, SKIP_DOM_SELECTION_TAG as Zm, CLEAR_HISTORY_COMMAND as ey, COMMAND_PRIORITY_LOW as $t, $setSelection as zi, $getPreviousSelection as ty, $isRootOrShadowRoot as ry, CAN_UNDO_COMMAND as ny, CAN_REDO_COMMAND as iy, $isNodeSelection as af, DRAGSTART_COMMAND as sy, $createNodeSelection as cf, getDOMSelectionFromTarget as oy, $onUpdate as ay, KEY_ENTER_COMMAND as lf, LineBreakNode as uf, $copyNode as cy, FOCUS_COMMAND as ly, $isRootNode as uy, KEY_ESCAPE_COMMAND as df, INSERT_PARAGRAPH_COMMAND as ws, createCommand as ff, HISTORIC_TAG as kc, UNDO_COMMAND as pf, REDO_COMMAND as hf, CLEAR_EDITOR_COMMAND as dy } from "lexical";
import { addClassNamesToElement as Dn, removeClassNamesFromElement as Wo, $findMatchingParent as nt, $dfsIterator as gf, $dfs as si, mergeRegister as Xe, registerNestedElementResolver as mf, $unwrapNode as _a, IS_APPLE as qs } from "@lexical/utils";
import { useLexicalNodeSelection as fy } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Nt } from "fast-equals";
import Pi from "quill-delta";
import { useLexicalComposerContext as le } from "@lexical/react/LexicalComposerContext";
import { copyToClipboard as py, $getHtmlContent as hy, $getLexicalContent as gy } from "@lexical/clipboard";
import { TreeView as my } from "@lexical/react/LexicalTreeView";
import * as yy from "react-dom";
import { createPortal as un } from "react-dom";
import { LexicalComposer as yf } from "@lexical/react/LexicalComposer";
import { ContentEditable as bf } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as kf } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Tf } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as xf } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as by } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as ky, createDOMRange as Ty, createRectsFromDOMRange as xy } from "@lexical/selection";
import { autoUpdate as _y, computePosition as Cy, shift as vy, flip as Sy } from "@floating-ui/dom";
import { $generateNodesFromDOM as My } from "@lexical/html";
import { AutoFocusPlugin as Ey } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Ay } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as _f, LexicalCollaboration as Py } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Oy } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Ny } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as wy, $isRootTextContentEmpty as qy } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Ry } from "@lexical/yjs";
import { Array as Jl, Map as Yl, YArrayEvent as $y } from "yjs";
const Ho = (e) => je(so(e)), Iy = {
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
function Cf(e) {
  return Iy[e];
}
const R = " ", Rs = "​", Lr = R, Tc = `${R}|`, tr = "p", $s = "+", vf = "-", Is = "chapter", Ca = "verse", Xl = "invalid", Ly = "text-spacing", Dy = "formatted-font", Uy = "marker-", Sf = "external-usj-mutation", Mf = "selection-change", Dr = "cursor-change", va = "annotation-change", Ki = "delta-change", Ef = "marker-settle", Fy = [
  Sf,
  Mf,
  Dr,
  va,
  Ki
], gn = "zmsc-s", Jn = "zmsc-e", zy = [gn, Jn], Ky = [
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
  Jn
], Af = 1, xc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], jy = xc.filter((e) => e !== "sid" && e !== "eid");
class Bt extends os {
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
    return new Bt(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return Of().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Ky.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: Af
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Pf(e) {
  return zy.includes(e);
}
function Of(e, t, r, n, i) {
  return je(new Bt(e, t, r, n, void 0, i));
}
function Fe(e) {
  return e instanceof Bt;
}
const _c = "f", By = [
  // Footnote
  _c,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function Oi(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const Vy = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Nf = 1;
class Se extends Gt {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = _c, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (Oi(t) === "crossref" ? vf : $s), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => Hy(t) ? {
        conversion: Wy,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Cc().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (By.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", Oi(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", Oi(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Mn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", Oi(this.getMarker()))), { element: r };
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
      version: Nf
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
function Wy(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Cc(t, r, n) };
}
function Cc(e, t, r, n, i) {
  return je(new Se(e, t, r, n, i));
}
function Hy(e) {
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
const Sa = {
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
}, Ql = {
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
function rr(e) {
  const t = Object.hasOwn(Sa, e) ? Sa[e] : void 0, r = Object.hasOwn(Ql, e) ? Ql[e] : void 0;
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
const wf = "v", qf = "c", rn = "fig", Zl = "tr", Ma = "esb", Rf = "esbe", Gy = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Jy = {
  "": "start",
  c: "center",
  r: "end"
};
function Yy(e) {
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
const Xy = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Qy(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Rs && s + 1 < e.length && eu(e[s + 1]) || (eu(o) ? (r || (i = t.length, t += o), r = !0) : Xy.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function Zy(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function eb(e, t) {
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
const tb = /^(?:qt[1-5]?|ts)-[se]$/;
function uo(e) {
  return tb.test(e) || Pf(e);
}
function Go(e, t) {
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
function rb(e, t, r) {
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
      const m = e.indexOf("\\", i), y = m === -1 ? e.length : m;
      a(Qy(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: d } = eb(e, i + 1);
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
    if (l === wf) {
      const { word: m, next: y } = Go(e, i);
      i = y, n.push({ kind: "verse", number: m });
      continue;
    }
    if (l === qf) {
      const { word: m, next: y } = Go(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: m });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, g = t(p)?.type;
    if (g === b.Note || g === void 0 && Se.isValidMarker(l)) {
      const { word: m, next: y } = Go(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: m || "+" });
      continue;
    }
    if (g === b.Milestone || g === void 0 && uo(l)) {
      const m = ub(e, c, l, i);
      if (m)
        n.push(m.token), m.ejectedText && o(m.ejectedText), i = m.next;
      else {
        const y = e.indexOf("\\", i), T = y === -1 ? e.length : y;
        o(e.slice(c, T)), i = T;
      }
      continue;
    }
    g === b.Paragraph ? (u(), n.push({ kind: "para", marker: l })) : g === b.Character ? (u(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Ls(p) ? (u(), Ls(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (u(), !(r || s !== void 0) || l === Ma || l === Rf ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
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
function Ls(e) {
  return Object.hasOwn(tu, e) ? tu[e] : void 0;
}
function nb(e) {
  return Ls(e) !== void 0;
}
const ib = /([-\w]+)\s*=\s*"(.*?)"/g, sb = /[\s\u200B]*[\n\r][\s\u200B]*/g, $f = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function fo(e) {
  return $f[e];
}
const ob = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function ab(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function po(e, t, r = $f[t]) {
  const n = e.replace(sb, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(ib)];
  if (s.length > 0) {
    if (!ab(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      ob.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function ho(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function cb(e) {
  const t = kr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function lb(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = po(e.slice(n + 1, i), r, ho(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function ub(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = po(s.slice(o + 1), r, ho(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = lb(e, i + 2, r);
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
`, " ").replaceAll("~", R);
}
function nn(e) {
  return e.content || (e.content = []), e.content;
}
function kr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, d;
  const u = () => d ? nn(d) : r;
  let f = !1;
  const p = () => {
    if (s)
      return o.length > a ? nn(o[o.length - 1].object) : nn(s);
    if (o.length > 0)
      return nn(o[o.length - 1].object);
    if (!i) {
      if (f && !n)
        return u();
      i = { type: "para", marker: tr, content: [] }, u().push(i);
    }
    return nn(i);
  }, g = (ee) => {
    const U = p();
    typeof ee == "string" && typeof U[U.length - 1] == "string" ? U[U.length - 1] = U[U.length - 1] + ee : U.push(ee);
  }, m = (ee) => {
    for (let U = ee; U < o.length; U += 1) {
      const te = o[U].object;
      te.closed = "false";
    }
  }, y = () => {
    m(0), o.length = 0;
  }, T = (ee) => {
    s && (o.length > a && (m(a), o.length = a), a = 0, ee || (s.closed = "false"), s = void 0);
  }, C = () => {
    c = void 0, l = void 0;
  }, S = (ee) => {
    d && (ee || (d.closed = "false"), d = void 0);
  };
  let E, A = "", x;
  const F = () => {
    A && g(ar(A)), A = "";
  }, D = (ee = !1) => {
    E?.type === "sidebar" ? A = "" : ee && A.endsWith(`
`) && (A = A.slice(0, -1)), E = void 0, F();
  }, G = () => {
    if (!x)
      return;
    const ee = { type: "char", marker: x.marker, content: [] };
    x.value && (ee.content = [ar(x.value)]), p().push(ee), o.push({ object: ee }), x = void 0;
  }, V = (ee, U) => {
    f = !1, C(), y(), T(!1), i = { type: "para", marker: ee, content: [] }, U && (i.content = [ar(U)]), u().push(i);
  }, ae = () => {
    x && (V(x.marker, x.value), x = void 0);
  };
  let ce;
  const se = () => {
    if (ce) {
      if (ce.shape === "para")
        V(rn, ce.value);
      else {
        const ee = { type: "char", marker: rn, content: [] };
        ce.value && (ee.content = [ar(ce.value)]), p().push(ee), o.push({ object: ee });
      }
      ce = void 0;
    }
  }, Ce = rb(e, t?.getMarker ?? rr, n);
  for (let ee = 0; ee < Ce.length; ee++) {
    const U = Ce[ee];
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
          [x.attrName]: ar(x.value.trim())
        });
        const te = x.marker;
        if (x = void 0, te === "ca") {
          const Me = Ce[ee + 1];
          Me?.kind === "text" && /^[\s\u200B]*$/.test(Me.text) && ee++;
        }
        continue;
      }
      if (x.shape === "para" && (U.kind === "para" || U.kind === "chapter")) {
        const te = x.value.replace(/[\s\u200B]+$/, "");
        te === "" ? (V(x.marker), x = void 0) : (Object.assign(x.target, { [x.attrName]: ar(te) }), x = void 0);
      } else {
        E = void 0, (U.kind === "para" || U.kind === "chapter") && x.value.endsWith(`
`) && (x.value = x.value.slice(0, -1)), x.shape === "para" ? ae() : G(), ee--;
        continue;
      }
    }
    if (ce) {
      if (U.kind === "text" || U.kind === "optbreak") {
        ce.value += U.kind === "text" ? U.text : "//";
        continue;
      }
      if (U.kind === "end" && U.marker.replace(/^\+/, "") === rn) {
        const te = ce.value.indexOf("|"), Me = te >= 0 ? po(ce.value.slice(te + 1), rn) : void 0;
        if (Me) {
          const Ne = {};
          for (const [_t, Jr] of Object.entries(Me))
            Ne[_t === "src" ? "file" : _t] = Jr;
          const Jt = {
            type: "figure",
            marker: rn,
            ...Ne
          }, re = ce.value.slice(0, te);
          re && (Jt.content = [ar(re)]), g(Jt), ce = void 0;
          continue;
        }
      }
      se(), ee--;
      continue;
    }
    if (E)
      if (U.kind === "text") {
        if (U.text.includes(`
`) && /^[\s\u200B]*$/.test(U.text)) {
          A += U.text;
          continue;
        }
        D();
      } else if (U.kind === "charOpen" || U.kind === "para") {
        const te = U.kind === "para" || !U.isNested ? Ls(U.marker) : void 0;
        if (te && te.targetTypes.includes(E.type)) {
          A = "", x = {
            target: E,
            attrName: te.attrName,
            marker: U.marker,
            shape: te.shape,
            value: ""
          };
          continue;
        }
        D(U.kind === "para");
      } else
        D(U.kind === "chapter");
    if (!s && !n && (U.kind === "charOpen" && !U.isNested && U.marker === rn || U.kind === "para" && U.marker === rn)) {
      y(), ce = { shape: U.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (U.kind) {
      case "text": {
        let te = U.text;
        if (!s && te.endsWith(`
`)) {
          const Me = Ce[ee + 1];
          (Me === void 0 || Me.kind === "para" || Me.kind === "chapter") && (te = te.slice(0, -1));
        }
        te && g(ar(te));
        break;
      }
      case "para": {
        const te = !s && !n;
        if (te && U.marker === Zl) {
          y(), c || (c = { type: "table", content: [] }, u().push(c)), l = { type: "table:row", marker: Zl, content: [] }, nn(c).push(l), i = l, f = !1;
          break;
        }
        if (te && l) {
          const Me = Gy.exec(U.marker);
          if (Me && Yy(Me)) {
            y();
            const [, Ne, Jt, re] = Me, _t = {
              type: "table:cell",
              marker: re ? U.marker.slice(0, U.marker.indexOf("-")) : U.marker,
              align: Jy[Ne],
              content: []
            };
            re && (_t.colspan = String(Number(re) + 1 - Number(Jt))), nn(l).push(_t), i = _t;
            break;
          }
        }
        if (C(), !n && U.marker === Ma) {
          y(), T(!1), S(!1), d = { type: "sidebar", marker: Ma, content: [] }, r.push(d), i = void 0, E = d, f = !1;
          break;
        }
        if (U.marker === Rf && d) {
          y(), T(!1), S(!0), i = void 0;
          break;
        }
        V(U.marker);
        break;
      }
      case "verse": {
        T(!1);
        const te = { type: "verse", marker: wf, number: U.number };
        g(te), E = te;
        break;
      }
      case "chapter": {
        y(), T(!1), C(), S(!1), i = void 0;
        const te = {
          type: "chapter",
          marker: qf,
          number: U.number
        };
        r.push(te), E = te, f = !0;
        break;
      }
      case "note": {
        T(!1);
        const te = p();
        s = { type: "note", marker: U.marker, caller: U.caller, content: [] }, a = o.length, te.push(s), E = s;
        break;
      }
      case "charOpen": {
        if (!U.isNested) {
          const Ne = s ? a : 0;
          m(Ne), o.length = Ne;
        }
        const te = p(), Me = { type: "char", marker: U.marker, content: [] };
        te.push(Me), o.push({ object: Me });
        break;
      }
      case "end": {
        const te = U.marker.replace(/^\+/, ""), Me = s ? a : 0, Ne = o.findLastIndex((Jt, re) => re >= Me && Jt.object.marker === te);
        Ne >= 0 ? (db(o[Ne].object), m(Ne + 1), o.length = Ne) : s && s.marker === te ? T(!0) : (m(Me), o.length = Me, g({ type: "unmatched", marker: `${U.marker}*` }));
        break;
      }
      case "milestone":
        g({ type: "ms", marker: U.marker, ...U.attributes });
        break;
      case "optbreak":
        g({ type: "optbreak" });
        break;
    }
  }
  if (ce && se(), x)
    if (x.shape === "para") {
      const ee = x.value.replace(/[\s\u200B]+$/, "");
      ee === "" ? V(x.marker) : Object.assign(x.target, { [x.attrName]: ar(ee) }), x = void 0;
    } else
      x.value.endsWith(`
`) && (x.value = x.value.slice(0, -1)), G();
  y(), T(!1), S(!1);
  const Ae = (ee) => {
    for (const U of ee)
      typeof U != "string" && U.content && (Ae(U.content), U.content.length === 0 && delete U.content);
  };
  return Ae(r), r;
}
function db(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = po(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const mn = oo("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Ur = oo("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Q = oo("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), At = "marker-trailing-space", us = "empty-char-placeholder", If = 1, fb = "marker", vc = oo("isGutterMarker", {
  parse: (e) => e === !0
});
class Tr extends os {
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
    return new Tr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => mb(t) ? {
        conversion: pb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return hr().updateFromJSON(t);
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
      version: If
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function pb(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: hr(t, r) };
}
function hr(e, t) {
  return je(new Tr(e, t));
}
function hb(e) {
  return ot(hr(fb, e), vc, !0);
}
function gb(e) {
  return Vt(e) && Y(e, vc);
}
function mb(e) {
  return e?.tagName === "span";
}
function Vt(e) {
  return e instanceof Tr;
}
function Lf(e) {
  return e?.type === Tr.getType();
}
const $r = "internal-comment", yb = [$r], Df = Object.freeze({}), Ea = Object.freeze({}), Aa = Object.freeze({}), Pa = Object.freeze({}), Oa = Object.freeze({}), bb = 1, Un = /* @__PURE__ */ new Map(), xi = /* @__PURE__ */ new Map(), Fn = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Map();
class Ze extends Gt {
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
    super(o), this.__typedIDs = Cs(t), this.__typedOnClicks = Jo(r), this.__typedOnRemoves = Yo(n), this.__typedOnMouseEnters = Xo(i), this.__typedOnMouseLeaves = Qo(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Cs(t.__typedIDs), n = Jo(t.__typedOnClicks), i = Yo(t.__typedOnRemoves), s = Xo(t.__typedOnMouseEnters), o = Qo(t.__typedOnMouseLeaves);
    return new Ze(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return yb.includes(t);
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
      version: bb
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      Dn(n, sn(t.theme.typedMark, a)), c.length > 1 && Dn(n, sn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Dn(n, sn("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, d = sn(n.theme.typedMark, s), u = sn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && Dn(r, d) : l === 0 && Wo(r, d), c === 1 ? l === 2 && Dn(r, u) : l === 1 && Wo(r, u));
      const f = new Set(o), p = new Set(a);
      for (const g of o)
        p.has(g) || Wo(r, sn("annotationId", g));
      for (const g of a)
        f.has(g) || Dn(r, sn("annotationId", g));
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
    return xe(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = Cs(r.__typedIDs);
    r.__typedIDs = Cs(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Ds(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Jo(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return xe(t) ? Un.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Yo(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return xe(t) ? xi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Xo(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return xe(t) ? Fn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = Qo(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return xe(t) ? zn.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!xe(a))
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
    if (!xe(n))
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Un.delete(r.getKey()), xi.delete(r.getKey()), Fn.delete(r.getKey()), zn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
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
  getOrCreateDOMMouseEnterListener(t) {
    return this.__domOnMouseEnterListener || (this.__domOnMouseEnterListener = (r) => {
      this.handleDOMMouseEnter(r, t);
    }), this.__domOnMouseEnterListener;
  }
  handleDOMMouseEnter(t, r) {
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
  getOrCreateDOMMouseLeaveListener(t) {
    return this.__domOnMouseLeaveListener || (this.__domOnMouseLeaveListener = (r) => {
      this.handleDOMMouseLeave(r, t);
    }), this.__domOnMouseLeaveListener;
  }
  handleDOMMouseLeave(t, r) {
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
  ensureOnClickMapMutable() {
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Ea) {
      const t = Un.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      Un.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    Un.set(this.getKey(), this.__typedOnClicks);
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
    const i = Or(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = Or(this.__typedOnClicks, t);
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
      const t = xi.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      xi.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    xi.set(this.getKey(), this.__typedOnRemoves);
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
    const i = Or(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = Or(this.__typedOnRemoves, t);
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
      const t = Fn.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      Fn.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    Fn.set(this.getKey(), this.__typedOnMouseEnters);
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
    const i = Or(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = Or(this.__typedOnMouseEnters, t);
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Oa) {
      const t = zn.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      zn.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    zn.set(this.getKey(), this.__typedOnMouseLeaves);
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
    const i = Or(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = Or(this.__typedOnMouseLeaves, t);
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
    const i = kb(t, r);
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
    for (; xe(t) && nu(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; xe(r) && nu(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = Tb(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = xb(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = _b(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Cb(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Cs(e = Df) {
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
function Yo(e) {
  if (!e || e === Aa)
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
function Or(e, t) {
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
function kb(e, t) {
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
    for (let d = 0; d < c.length; d++)
      if (c[d] !== l[d])
        return !1;
  }
  return !0;
}
function Tb(e, t) {
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
function xb(e, t) {
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
function _b(e, t) {
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
function sn(e, t) {
  return `${e}-${t}`;
}
function iu(e) {
  return `external-${e}`;
}
function ji(e, t, r, n, i) {
  return je(new Ze(e, t, r, n, i));
}
function xe(e) {
  return e instanceof Ze;
}
function Uf(e) {
  return e?.type === Ze.getType();
}
function Ds(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Ff(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, d = a.length, u = e.isBackward(), f = u ? l : c, p = u ? c : l;
  let g, m;
  for (let y = 0; y < d; y++) {
    const T = a[y];
    if (L(m) && m.isParentOf(T))
      continue;
    const C = y === 0, S = y === d - 1;
    let E = null;
    if (M(T)) {
      const A = T.getTextContentSize(), x = C ? f : 0, F = S ? p : A;
      if (x === 0 && F === 0)
        continue;
      const D = T.splitText(x, F);
      E = D.length > 1 && (D.length === 3 || C && !S || F === A) ? D[1] : D[0];
    } else {
      if (xe(T))
        continue;
      L(T) && T.isInline() && (E = T);
    }
    if (E !== null) {
      if (E && E.is(g))
        continue;
      const A = E.getParent();
      (A == null || !A.is(g)) && (m = void 0), g = A, m === void 0 && (m = ji(), m.addID(t, r, n, i, s, o), E.insertBefore(m)), m.append(E);
    } else
      g = void 0, m = void 0;
  }
  t === $r && L(m) && (u ? m.selectStart() : m.selectEnd());
}
function vb(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (xe(n))
      return n.getTypedIDs()[t];
    if (M(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (xe(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Sb = ["type", "marker", "content"], Na = "unknown", zf = 1, Mb = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class En extends Gt {
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
      [Na]: (t) => Ab(t) ? {
        conversion: Eb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Sc().updateFromJSON(t);
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
    return Mb.has(this.getTag());
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
    const t = document.createElement(Na);
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
function Eb(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Sc(t, r) };
}
function Sc(e, t, r) {
  return je(new En(e, t, r));
}
function Ab(e) {
  return e?.tagName.toLowerCase() === Na;
}
function Ie(e) {
  return e instanceof En;
}
const Bi = "id", Kf = 1, Pb = [
  "type",
  "marker",
  "code",
  "content"
];
class Lt extends Gt {
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
    return jf(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Dm(t);
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
  return je(new Lt(e, t));
}
function Tt(e) {
  return e instanceof Lt;
}
function Bf(e) {
  return e?.type === Lt.getType();
}
const Us = "c", Vf = 1, Ob = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Pt extends Gt {
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
    return Wf().updateFromJSON(t);
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
      version: Vf
    };
  }
}
function Wf(e, t, r, n, i) {
  return je(new Pt(e, t, r, n, i));
}
function Re(e) {
  return e instanceof Pt;
}
function Nb(e) {
  return e?.type === Pt.getType();
}
const Hf = [
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
], Gf = [
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
  ...Hf,
  ...Gf
], Jf = 1, qb = ["type", "marker", "content"];
class me extends Gt {
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
    return t !== void 0 && (wb.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Hf.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Gf.includes(t);
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
      span: (t) => $b(t) ? {
        conversion: Rb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return gr().updateFromJSON(t);
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
    return r && Mn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
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
    const n = this.getUnknownAttributes()?.closed === "false", i = gr(this.getMarker(), n ? { closed: "false" } : void 0);
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
function Rb(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: gr(t) };
}
function gr(e, t) {
  return je(new me(e, t));
}
function $b(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return me.isValidMarker(t) && e.classList.contains(me.getType());
}
function $(e) {
  return e instanceof me;
}
function Ib(e) {
  return e?.type === me.getType();
}
const Yf = 1, Lb = "c", Xf = "span";
class ir extends os {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Lb, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new ir(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Qf(t) ? {
        conversion: Db,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Mc().updateFromJSON(t);
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
    const t = document.createElement(Xf);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Is, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Mn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Is, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? It(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Yf
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
function Db(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Mc(t) };
}
function Mc(e, t, r, n, i, s) {
  return je(new ir(e, t, r, n, i, s));
}
function Qf(e) {
  return e ? e.classList.contains(Is) && e.tagName.toLowerCase() === Xf : !1;
}
function ds(e) {
  return e instanceof ir;
}
function Ub(e) {
  return e?.type === ir.getType();
}
const Zf = 1;
class Fr extends hc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Fr(t.__key);
  }
  static importJSON(t) {
    return Kt().updateFromJSON(t);
  }
  getMarker() {
    return tr;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Zf
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Kt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Kt() {
  return je(new Fr());
}
function nr(e) {
  return e instanceof Fr;
}
function go(e) {
  return e?.type === Fr.getType();
}
const Fb = [
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
  tr,
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
], ep = 1, zb = ["type", "marker", "content"];
class Qe extends hc {
  __marker;
  __unknownAttributes;
  constructor(t = tr, r, n) {
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
    return t !== void 0 && (Fb.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Kb,
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
    return r && Mn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
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
    const n = Vi(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Kb(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = Vi(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function Vi(e, t) {
  return je(new Qe(e, t));
}
function oe(e) {
  return e instanceof Qe;
}
function Ec(e) {
  return e?.type === Qe.getType();
}
const Fs = "v", tp = 1, jb = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class pt extends Ke {
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
    return rp().updateFromJSON(t);
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
      version: tp
    };
  }
}
function rp(e, t, r, n, i, s) {
  return je(new pt(e, t, r, n, i, s));
}
function Pe(e) {
  return e instanceof pt;
}
function np(e) {
  return e?.type === pt.getType();
}
const Bb = "​", Xn = Bb;
var ou;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(ou || (ou = {}));
var au;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(au || (au = {}));
function Vb() {
  return Le(Xn);
}
function Wb(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Xn, ""));
}
function fs(e) {
  return e.length > 0 && e.includes(Xn) && e.replaceAll(Xn, "") === "";
}
function Ac(e) {
  return M(e) && fs(e.getTextContent());
}
function ip(e) {
  return Nb(e) || Ub(e);
}
function We(e) {
  return Re(e) || ds(e);
}
function sp(e, t) {
  return e.find((r) => We(r) && r.getNumber() === t.toString());
}
function Hb(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && We(r));
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
function op(e) {
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
function Wt(e) {
  return nt(e, j) ?? void 0;
}
function Gb(e) {
  return Tt(e) || Re(e) || $(e) || ds(e) || nr(e) || Fe(e) || oe(e) || j(e) || Pe(e) || Ie(e);
}
function ap(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Jb(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function vt(e) {
  return _e(e) || Tt(e);
}
function _e(e) {
  return oe(e) || nr(e);
}
function Yb(e) {
  return Ec(e) || go(e);
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
  const r = Y(t, mn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function Xb(e, t) {
  const r = L(e) ? e : e.getParent(), n = L(t) ? t : t.getParent(), i = r && n ? Gm(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Qb(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Qn(e) {
  return e?.type === Ke.getType();
}
function Zb(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function ek(e, t) {
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
function cp(e, t, r) {
  const n = Oe(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function It(e, t) {
  let r = Oe(e);
  return t && (r += `${R}${t}`), r += " ", r;
}
function lp(e) {
  const t = e[as];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function up(e) {
  return $c(e) || Lf(e) && e.textType === "marker" || Qn(e) && lp(e) === "attribute" ? "" : Qn(e) && e.text !== R ? e.text : Ib(e) ? e.children.map((t) => up(t)).join("") : "";
}
function tk(e) {
  return e.map((r) => up(r)).filter((r) => r.length > 0).join(" ").trim();
}
function St(e) {
  return " " + e + R;
}
function Pc(e) {
  const t = [];
  for (const r of e) {
    if (!$(r))
      continue;
    const n = dp(r);
    n !== Lr && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function dp(e) {
  return P(e) || xr(e) || M(e) && Y(e, Q) === "attribute" ? "" : M(e) ? e.getTextContent() : L(e) ? e.getChildren().map((t) => dp(t)).join("") : "";
}
function xr(e) {
  return Vt(e) && e.getTextType() === "marker";
}
function Mt(e) {
  return P(e) || xr(e);
}
function lu(e, t) {
  rk(e, t), e.setMarker(t);
}
function rk(e, t) {
  const r = e.getMarker(), n = Oe(r), i = Oe(r, !0), s = rt(r), o = rt(r, !0), a = me.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Mt(c))
      return;
    const l = c.getTextContent(), d = l === n || l === i, u = !d && (l === s || l === o);
    if (!(!d && !u)) {
      if (u && a) {
        c.remove();
        return;
      }
      if (P(c))
        c.setMarker(t);
      else if (xr(c)) {
        const f = l.startsWith(Oe("", !0));
        c.setTextContent(d ? Oe(t, f) : rt(t, f));
      }
    }
  });
}
function De(e, t = Um) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Ee(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function fp(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Oc(e) {
  if (!O(e))
    return uu(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !L(t) || e.anchor.type === "text" && !M(t)))
    return t ?? void 0;
  try {
    return uu(e) ?? t ?? void 0;
  } catch (n) {
    if (fp(n))
      return t ?? void 0;
    throw n;
  }
}
function nk(e, t) {
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
function Nc(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function pp(e) {
  return !!e && e.includes("-");
}
function hp(e) {
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
function wc(e) {
  if (!e)
    return !1;
  if (ao(e) || P(e) || xr(e) || Vt(e) && e.getTextType() === "attribute")
    return !0;
  if (M(e)) {
    const t = Y(e, Q);
    if (t === At || t === "attribute" || Wi(e))
      return !0;
    const r = e.getTextContent();
    if (r === "" || fs(r))
      return !0;
  }
  return !1;
}
function Vr() {
  const e = Le(R);
  return ot(e, Q, At), e.setMode("token"), e;
}
function ik(e) {
  const t = e.getTextContent();
  t.startsWith(R) || e.setTextContent(R + t);
}
function An(e) {
  return M(e) && Y(e, Q) === At;
}
function qc() {
  const e = Le(Lr);
  return Rc(e), e;
}
function Rc(e) {
  ot(e, Q, us);
}
function mo(e) {
  ot(e, Q, At), e.setMode("token");
}
function Wi(e) {
  if (!M(e))
    return !1;
  const t = Y(e, Q);
  return gp(t) && e.getTextContent() === R;
}
function sk(e) {
  return gp(lp(e)) && e.text === R;
}
function gp(e) {
  return e === At || e === us;
}
function mp(e) {
  const t = e.getFirstChild();
  if (!Mt(t) || t === null || An(t.getNextSibling()))
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
function oi(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!wc(s)) {
      if (xe(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (M(s) && s.getType() === Ke.getType()) {
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
  for (; t && xe(t); )
    t = t.getParent();
  return t;
}
function ok(e, t) {
  return oi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function ak(e, t) {
  const r = yo(e);
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
function ck(e, t) {
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
function yp(e, t) {
  const r = oi(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (wc(n))
    return yp(e, t + 1);
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
function lk(e, t) {
  if (t <= 0)
    return 0;
  const r = oi(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? uk(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function uk(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const dk = 1;
class sr extends Ke {
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
    return new sr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      version: dk
    };
  }
}
function at(e, t, r) {
  return je(new sr(e, t, void 0, r));
}
function P(e) {
  return e instanceof sr;
}
function $c(e) {
  return e?.type === sr.getType();
}
function Wr(e) {
  return e.getTextContent() === cn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function fk(e) {
  e.setTextContent(cn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function cn(e, t, r = !1) {
  return t === "closing" ? rt(e, r) : t === "selfClosing" ? rt("") : Oe(e, r);
}
const bp = 1, pk = "attribute-run";
function Zo(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class _r extends Gt {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new _r(r, n);
  }
  static importJSON(t) {
    return kp(t.runKind).updateFromJSON(t);
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
    t.classList.add(pk);
    const r = Zo(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = Zo(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = Zo(this.__runKind);
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
      version: bp
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
function kp(e) {
  return je(new _r(e));
}
function Be(e) {
  return e instanceof _r;
}
const hk = /* @__PURE__ */ new Set(["closed"]);
function er(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !hk.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Tp(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function xp(e) {
  const t = Object.keys(e).filter((n) => !jy.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function _p(e, t, r, n) {
  return Tp(
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
function $i(e) {
  return e.getChildren().find((t) => P(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function gk(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : $i(e) === void 0 && Cp(e) === void 0;
}
function Cp(e) {
  return e.getChildren().find((t) => M(t) && Y(t, Q) === "attribute");
}
function Hi(e, t) {
  return ps(e.getNextSibling(), t);
}
const mk = /^[ \u00A0]+$/;
function Ic(e) {
  if (Wr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Oe(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && mk.test(r.slice(t.length));
}
function ps(e, t) {
  let r, n, i, s;
  return Be(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), P(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Ic(e) && (r = e, e = e.getNextSibling()), M(e) && Y(e, Q) === "attribute" && (n = e, e = e.getNextSibling()), P(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && Wr(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Gi(e) {
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
function vp(e) {
  const t = Gi(e);
  return t ? ps(t.getNextSibling(), "cat") : {};
}
function bo(e) {
  const t = e.getFirstChild();
  if (!(!M(t) || P(t)) && Y(t, Q) !== "attribute")
    return t;
}
function Sp(e) {
  const t = bo(e);
  return t ? ps(t.getNextSibling(), "ca") : {};
}
function Mp(e) {
  const t = bo(e);
  if (!t)
    return;
  const r = ps(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Ep(e) {
  const t = Mp(e);
  return t ? ps(t.getNextSibling(), "cp") : {};
}
function Ap(e) {
  const t = e.getParent();
  if (!$(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Pe(n))
        return n;
      if (!(P(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || M(n) && Y(n, Q) === "attribute" || $(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Be(n)))
        return;
    }
}
function ko(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Be(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), P(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Ic(s) && (t = s, s = s.getNextSibling()), M(s) && Y(s, Q) === "attribute" && (r = s, s = s.getNextSibling()), P(s) && s.getMarkerSyntax() === "selfClosing" && Wr(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function Lc(e) {
  return $(yo(e));
}
function wa(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Lc(t) : t.getChildren().some((i) => $(i) && i.getMarker() === r) ? !0 : void 0;
}
function yk(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = wa(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function To(e) {
  return M(e) && e.getType() === Ke.getType() && Y(e, Q) !== "attribute";
}
function Dc(e, t) {
  if (e.getMarkerSyntax() !== "opening" || wa(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return P(r) ? wa(r, t) === !0 ? "spacer" : void 0 : To(r) ? r.getTextContent().startsWith(R) ? void 0 : "prefix" : "spacer";
}
function bk(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (P(t) && Dc(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Pp(e, t) {
  const r = q();
  if (!O(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Op(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Dc(t, e);
    if (r !== void 0 && !Pp(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        M(n) && n.setTextContent(R + n.getTextContent());
      } else
        t.insertAfter(Vr());
  });
}
function Np(e) {
  return e.isAttached() ? e.getChildren().some((t) => P(t) && Dc(t, e) !== void 0 && Pp(t, e)) : !1;
}
const kk = "file", Tk = "src", xk = "colspan", _k = "category", Ck = "alt", vk = "closed", Sk = "false";
function Mk(e) {
  return e[vk] !== Sk;
}
function Ek(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === kk ? Tk : t,
    r
  ]));
}
function Ak(e, t) {
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
function wp(e, t, r) {
  const n = r ?? {}, i = Mk(n);
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
        opening: `\\${Ak(t, n[xk])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: er(Ek(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [_k]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + er(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [Ck]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: er(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: er(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const bt = { wantsRun: !1, valueText: void 0 }, Cr = {};
function ea(e, t) {
  if (t === "va")
    return e;
  const r = Hi(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function Uc(e) {
  const t = q();
  if (!O(t) || !t.isCollapsed())
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
function xo(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = q();
  if (!O(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function Pk(e) {
  return Be(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : P(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : M(e) && Y(e, Q) === "attribute";
}
function Ok(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!M(e) || Y(e, Q) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function ta(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Pe(t))
      return t;
    if (!Pk(t))
      return;
  }
}
function du(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Pe(t),
    ownerOf: (t) => {
      if (Be(t))
        return t.getRunKind() === e ? ta(t) : void 0;
      const r = t.getParent();
      return Be(r) ? r.getRunKind() === e ? ta(r) : void 0 : Ok(t) === e ? ta(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Pe(t))
        return bt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? bt : { wantsRun: !0, valueText: R + r };
    },
    scanPieces: (t) => Pe(t) ? Hi(ea(t, e), e) : Cr,
    graceSite: (t, r) => Pe(t) ? !r.opener && !r.closer ? Uc(ea(t, e)) : xo(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Pe(t) ? ea(t, e) : void 0
    }
  };
}
const Nk = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => $(e),
  ownerOf: () => {
  },
  expectedPieces: () => bt,
  scanPieces: () => Cr,
  graceSite: (e) => $(e) && Np(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, wk = {
  kind: "char",
  ownerPredicate: (e) => $(e),
  ownerOf: (e) => {
    if (!M(e) || Y(e, Q) !== "attribute")
      return;
    const t = e.getParent();
    return $(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!$(e) || $i(e) === void 0)
      return bt;
    const t = er(e.getUnknownAttributes() ?? {}, fo(e.getMarker()));
    return t === "" ? bt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => $(e) ? { value: Cp(e) } : Cr,
  graceSite: (e, t) => {
    if (!$(e) || t.value)
      return !1;
    const r = $i(e);
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
    insertRunBefore: (e) => $(e) ? $i(e) : void 0
  }
};
function qp(e) {
  if (P(e))
    return e.getMarker() === "cat";
  if (!M(e) || Y(e, Q) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return P(t) && t.getMarker() === "cat";
}
function qk(e) {
  const t = e.getParent();
  if (!j(t))
    return;
  const r = Gi(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!qp(n))
        return;
    }
}
const Rk = {
  kind: "cat",
  ownerPredicate: (e) => j(e),
  ownerOf: (e) => {
    if (Be(e))
      return e.getRunKind() === "cat" && j(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Be(t) ? t.getRunKind() === "cat" && j(t.getParent()) ? t.getParent() ?? void 0 : void 0 : qp(e) ? qk(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!j(e) || e.getIsCollapsed() !== !1)
      return bt;
    const t = e.getCategory();
    return t === void 0 ? bt : { wantsRun: !0, valueText: R + t };
  },
  scanPieces: (e) => j(e) ? vp(e) : Cr,
  graceSite: (e, t) => {
    if (!j(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Gi(e);
      return r !== void 0 && Uc(r);
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
    insertRunAfter: (e) => j(e) ? Gi(e) : void 0
  }
};
function $k(e) {
  return Be(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : P(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : M(e) && Y(e, Q) === "attribute";
}
function Ik(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!M(e) || Y(e, Q) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function Lk(e) {
  const t = e.getParent();
  if (!Re(t))
    return;
  const r = bo(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!$k(n))
        return;
    }
}
function fu(e) {
  const t = (r) => Re(r) ? e === "ca" ? bo(r) : Mp(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Re(r),
    ownerOf: (r) => {
      if (Be(r))
        return r.getRunKind() === e && Re(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Be(n) ? n.getRunKind() === e && Re(n.getParent()) ? n.getParent() ?? void 0 : void 0 : Ik(r) === e ? Lk(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Re(r))
        return bt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? bt : { wantsRun: !0, valueText: R + n };
    },
    scanPieces: (r) => Re(r) ? e === "ca" ? Sp(r) : Ep(r) : Cr,
    graceSite: (r, n) => {
      if (!Re(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && Uc(i);
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
function Rp(e) {
  if (P(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return M(e) && Y(e, Q) === "attribute";
}
function Dk(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Fe(t)) {
      const r = P(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Rp(t))
      return;
  }
}
const Uk = {
  kind: "milestone",
  ownerPredicate: (e) => Fe(e),
  ownerOf: (e) => {
    const t = Be(e) ? e.getRunKind() === "milestone" ? e : void 0 : Be(e.getParent()) ? e.getParent() : Rp(e) ? e : void 0;
    if (!t || Be(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Be(t) ? Fe(r) ? r : void 0 : Dk(t);
  },
  expectedPieces: (e) => {
    if (!Fe(e))
      return bt;
    const t = _p(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = er(t, ho(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : R + r };
  },
  scanPieces: (e) => {
    if (!Fe(e))
      return Cr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = ko(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Fe(e))
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
    return xo(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => Fe(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, Fk = wp("optbreak", void 0, void 0).opening, zk = {
  kind: "optbreak",
  ownerPredicate: (e) => Ie(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Ie(t) || t.getTag() !== "optbreak"))
      return M(e) || Vt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: Fk }),
  scanPieces: (e) => Ie(e) ? { value: e.getFirstChild() ?? void 0 } : Cr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, Kk = {
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
  expectedPieces: () => bt,
  scanPieces: () => Cr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, jk = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => $(e),
  ownerOf: () => {
  },
  expectedPieces: () => bt,
  scanPieces: () => Cr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Ji = [
  Nk,
  wk,
  du("va"),
  du("vp"),
  Rk,
  fu("ca"),
  fu("cp"),
  Uk,
  zk,
  Kk,
  jk
], Bk = new Map(Ji.map((e) => [e.kind, e]));
function bn(e) {
  const t = Bk.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function kn(e) {
  for (const t of Ji) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function $p(e) {
  return kn(e) !== void 0;
}
const Ks = "unmatched", Ip = 2;
function Ii(e) {
  return `\\${e}`;
}
class vr extends Ke {
  __marker;
  constructor(t = "", r) {
    super(Ii(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new vr(r, n);
  }
  static importDOM() {
    return {
      [Ks]: (t) => Wk(t) ? {
        conversion: Vk,
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
      text: t.text ?? Ii(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Ii(t), r;
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
    const t = document.createElement(Ks);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Xl), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: Ip
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Lp(e) {
  return e.getTextContent() === Ii(e.getMarker());
}
function pu(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function Vk(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Fc(t) };
}
function Fc(e) {
  return je(new vr(e));
}
function Wk(e) {
  return e?.tagName.toLowerCase() === Ks;
}
function Hr(e) {
  return e instanceof vr;
}
const Dp = "table", qa = "immutable-table", Up = 1, Hk = ["type", "marker", "content"];
class Pn extends Gt {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return qa;
  }
  static clone(t) {
    return new Pn(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return Gk().updateFromJSON(t);
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
      version: Up
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function Gk(e) {
  return je(new Pn(e));
}
function Fp(e) {
  return e instanceof Pn;
}
function Jk(e) {
  return e?.type === qa;
}
const zp = "table:row", hu = "immutable-table-row", Kp = 1, Ra = "tr", Yk = ["type", "marker", "content"];
class ai extends Gt {
  __marker;
  __unknownAttributes;
  constructor(t = Ra, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return hu;
  }
  static clone(t) {
    return new ai(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return Xk().updateFromJSON(t);
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
      type: hu,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Kp
    };
  }
}
function Xk(e, t) {
  return je(new ai(e, t));
}
const jp = "table:cell", gu = "immutable-table-cell", Bp = 1, $a = "tc1", Qk = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function Zk(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class ci extends Gt {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = $a, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return gu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new ci(r, n, i, s, o);
  }
  static importJSON(t) {
    return eT().updateFromJSON(t);
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
    const n = Zk(this.__align);
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
      version: Bp
    };
  }
}
function eT(e, t, r, n) {
  return je(new ci(e, t, r, n));
}
function _o(e, t) {
  const r = e.getChildAtIndex(t);
  return M(r) ? r : void 0;
}
function Ht(e, t) {
  const r = _o(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Yi(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function tT(e) {
  return e.getChildren().some((t) => P(t) && t.getMarkerSyntax() === "closing");
}
function rT(e) {
  return Yi(e) ? void 0 : { closed: "false" };
}
function nT(e, t, r, n) {
  const i = t.getMarker(), s = Lc(t), o = tT(t);
  if (n) {
    e.append(at(i, "opening", s));
    const [a] = r;
    To(a) && !a.getTextContent().startsWith(R) && a.setTextContent(R + a.getTextContent());
  }
  e.append(...r), o && e.append(at(i, "closing", s));
}
function Tn(e) {
  return nt(e, $) ?? void 0;
}
function zc(e) {
  let t = e.getParent();
  for (; $(t); )
    t = t.getParent();
  return t;
}
function Ia(e) {
  const t = Vp(e);
  return e.getChildren().every((r) => P(r) || t && Y(r, Q) === "attribute" || M(r) && r.getTextContent().replaceAll(R, "") === "");
}
function Vp(e) {
  return Yi(e);
}
function iT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? er(r, fo(e.getMarker())) : "";
  n !== "" && t.insertAfter(Le(n)), e.remove();
}
function sT(e, t) {
  if (Yi(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(at(e.getMarker(), "closing", Lc(e)));
}
function oT(e, t) {
  return $(e) && !Yi(e) && !Yi(t);
}
function aT(e, t, r) {
  Ia(e) && e.getChildren().forEach((i) => {
    P(i) || i.remove();
  });
  const [n] = t;
  r && To(n) && !n.getTextContent().startsWith(R) && n.setTextContent(R + n.getTextContent()), e.append(...t);
}
function cT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Vp(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const d = l.getNextSibling(), u = P(l) && l.getMarkerSyntax() === "closing", f = s && Y(l, Q) === "attribute";
    !u && !f && o.push(l), l = d;
  }
  const a = oT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      aT(e, o, n);
    else {
      const l = gr(t.getMarker(), rT(t));
      nT(l, t, o, n), e.insertAfter(l), Ia(l) ? l.remove() : c = l;
    }
  i && !a && sT(t, n), Ia(t) && iT(t, c);
}
function Zn(e, t) {
  let r = e.getParent();
  for (; $(r); )
    cT(e, r, t), r = e.getParent();
}
function Kc(e) {
  if (M(e) && !P(e)) {
    const t = e.getTextContent().startsWith(R) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (L(e)) {
    const t = e.getChildren().find((r) => !P(r));
    if (t) {
      Kc(t);
      return;
    }
    e.selectEnd();
  }
}
const Yn = /* @__PURE__ */ new WeakMap();
function lT(e, t) {
  return Yn.set(e, t), () => {
    Yn.get(e) === t && Yn.delete(e);
  };
}
function mu(e) {
  return Yn.get(e);
}
function uT(e) {
  return Yn.get(cs())?.has(e.getKey()) ?? !1;
}
function dT(e) {
  Yn.get(cs())?.add(e.getKey());
}
function fT(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function La(e) {
  return !!(e.opener || e.value || e.closer);
}
function yu(e) {
  return /^\s/.test(e);
}
function jc(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !yu(t) || !yu(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Co(e, t, r) {
  return r.wantsRun ? jc(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : fT(t);
}
function pT(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return jc(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Wp(e, t) {
  return !La(e.scanPieces(t));
}
function hs(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Co(e, n, r))
    return !1;
  const i = q();
  if (!O(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || zs(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function hT(e, t, r, n) {
  return !r.wantsRun || La(n) || Jm(Ki) ? !1 : cs().getEditorState().read(() => {
    const i = ie(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : La(e.scanPieces(i));
  });
}
function gT(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function bu(e) {
  const t = Le(e);
  return ot(t, Q, "attribute"), t;
}
function mT(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = kp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function yT(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    M(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(bu(n.valueText));
    return;
  }
  const l = mT(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const d = r.opener ?? (() => {
    const f = at(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let u = r.value;
  n.valueText === void 0 ? (u?.remove(), u = void 0) : M(u) ? jc(u.getTextContent(), n.valueText) && u.setTextContent(n.valueText) : (u = bu(n.valueText), d.insertAfter(u)), a !== "none" && !r.closer && (u ?? d).insertAfter(at(a === "selfClosing" ? "" : o(t), a));
}
function Xi(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Co(e, i, n) && !uT(t)) {
    if (hT(e, t, n, i)) {
      dT(t);
      return;
    }
    if (!hs(e, t)) {
      if (!n.wantsRun) {
        gT(i);
        return;
      }
      yT(e, t, i, n);
    }
  }
}
function bT(e, t, r) {
  Xi(e, t), t.isAttached() && hs(e, t) && r.add(t.getKey());
}
function Hp(e) {
  if (!M(e))
    return !1;
  if (P(e) || Pe(e) || Hr(e))
    return !0;
  const t = Y(e, Q);
  return t === "attribute" || t === At;
}
function Bc(e, t) {
  return P(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && Wr(e) && $(e.getParent())) : !1;
}
function kT() {
  const e = q();
  return O(e) ? Bc(e.focus.getNode(), e.focus.offset) : !1;
}
function Gp(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return M(t) && Hp(t) ? t : void 0;
}
function TT(e) {
  const t = Gp(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function xT(e) {
  const t = Gp(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function ku(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Tu(e, t) {
  e.set(t.key, t.offset, t.type);
}
function _T(e, t) {
  let r = xT(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!M(n))
      return;
    if (!Hp(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function xu(e, t) {
  const r = _T(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Jp(e) {
  if (e.isCollapsed()) {
    const a = TT(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [ku(r), ku(n)], s = xu(r, "next"), o = xu(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Tu(r, i[0]), Tu(n, i[1]), !1) : !0;
}
const js = "verse-block", Yp = 1, CT = "verse-block";
class li extends Gt {
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
    return vT().updateFromJSON(t);
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
    return hp(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(CT), _u(t, this.__number), t;
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
      type: js,
      number: this.getNumber(),
      version: Yp
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function _u(e, t) {
  const { start: r, end: n } = hp(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Cu(e, "data-verse-start", i ? r : NaN), Cu(e, "data-verse-end", i ? n : NaN);
}
function Cu(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function vT(e) {
  return je(new li(e));
}
function Qi(e) {
  return e instanceof li;
}
function ST(e) {
  return e?.type === js;
}
const MT = [
  Lt,
  ir,
  Pt,
  pt,
  me,
  Se,
  Bt,
  sr,
  En,
  Tr,
  vr,
  Qe,
  Fr,
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
  _r,
  {
    replace: hc,
    with: () => Kt(),
    withKlass: Fr
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
}, ET = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function AT(e) {
  if (!e)
    return rr;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: rr(r)?.category ?? k.Uncategorized,
      type: ET[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: rr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function vu(e, t, r) {
  const n = {
    type: fr,
    version: dr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return go(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Xp = "v", Qp = 1, PT = "verse-selected";
class xt extends os {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Xp, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => wT(t) ? {
        conversion: NT,
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ca, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Mn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Ca, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? It(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Rs + this.getNumber() + Rs
    );
    return v(OT, { nodeKey: this.getKey(), text: t });
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
      version: Qp
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (fp(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function OT({ nodeKey: e, text: t }) {
  const [r] = fy(e);
  return v("span", { className: r ? PT : void 0, children: t });
}
function NT(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Vc(t) };
}
function Vc(e, t, r, n, i, s) {
  return je(new xt(e, t, r, n, i, s));
}
function wT(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Xp;
}
function On(e) {
  return e instanceof xt;
}
function qT(e) {
  return e?.type === xt.getType();
}
function he(e) {
  return Pe(e) || On(e);
}
function Zp(e) {
  return np(e) || qT(e);
}
function RT(e) {
  return $T(e).find((t) => oe(t));
}
function $T(e) {
  return e.some(Qi) ? e.flatMap((t) => Qi(t) ? t.getChildren() : t) : e;
}
function vo(e) {
  return L(e) ? Qi(e) ? e.getChildren().flatMap(vo) : e.getChildren() : [];
}
function IT(e, t) {
  return vo(e).find((i) => he(i) && Nc(t, i.getNumber()));
}
function LT(e, t) {
  return t === 0 ? RT(e) : e.map((r) => IT(r, t)).filter((r) => r)[0];
}
function Vs(e) {
  return vo(e).find((r) => he(r));
}
function eh(e, t) {
  if (!L(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (he(i))
      return i;
  }
}
function DT(e) {
  const t = e.getParent();
  if (t && L(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (he(s))
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
function Da(e) {
  return vo(e).findLast((t) => he(t));
}
function UT(e) {
  if (!Pe(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function FT(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && L(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function zT(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return FT(t, e, r);
  if (M(e)) {
    const n = UT(e);
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
function KT(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!O(t))
    return Su(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return zT(e, t) ? { verseNum: n } : Su(e);
}
function jT(e) {
  return Gb(e) || On(e);
}
function Wc(e) {
  if (M(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(R) && e.setTextContent(`${t} `);
  }
}
function th(e) {
  if (M(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function rh(e, t) {
  return e.getEditorState().read(() => !ie(t));
}
function BT(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Hc(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && L(i) && L(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && L(i)) {
      const s = i.getChildren(), o = r.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (he(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = Mu(i);
      for (; s && !We(s); ) {
        const o = Vs(s);
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
function VT(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Hc(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && L(i) && (n = eh(i, r.getIndexWithinParent())), !n && i) {
      let o = Eu(i);
      for (; o && !We(o); ) {
        const a = Da(o);
        if (a) {
          n = a;
          break;
        }
        o = Eu(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !We(s); ) {
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
function Hc(e, t) {
  if (L(e) && O(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && he(n))
      return n;
    const i = eh(e, t.anchor.offset);
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
  if (he(e))
    return e;
  let t = cu(e);
  for (; t; ) {
    if (We(t))
      return;
    if (he(t))
      return t;
    const r = Da(t);
    if (r)
      return r;
    t = cu(t);
  }
}
const WT = ["style"], HT = ["style", "code"], Ws = ["style", "cid"], GT = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], JT = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], YT = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], XT = ["style", "caller", "category", "contents"], QT = ["tag", "marker", "contents"], ZT = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Zi = `
`;
function ex(e, t) {
  const r = ie(e);
  if (!Et(r))
    return;
  const n = nh(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function nh(e, t = "delta-doc") {
  if (!e)
    return;
  const r = gf();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (ei(i[u], c)) {
        const f = i[u];
        if (i.splice(u, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      ei(s[u].node, c) && s.splice(u, 1);
    const d = s[s.length - 1];
    if (d) {
      if (l.getKey() === o)
        return d.position;
      continue;
    }
    if (l.getKey() === o) {
      if (mr(l) || Et(l))
        return n;
      vt(l) && (a = l);
    }
    if (vt(l) && (i.includes(l) || i.push(l)), ih(l, t)) {
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
function Au(e, t, r = "delta-doc") {
  if (e.length < 2 || !nx(e[0]) || !rx(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => tx(n, r)?.getKey());
}
function tx(e, t = "delta-doc") {
  const r = gf();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (ei(i[d], o)) {
        const u = i[d];
        if (i.splice(d, 1), n === e)
          return u;
        n += 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      ei(s[d].node, o) && s.splice(d, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (vt(a) && (i.includes(a) || i.push(a)), ih(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = Jc(a, t);
    if (mr(a) && l > 0 && e >= n && e < n + l || Et(a) && n === e)
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
  return e ? t ? !zs(t.node, e.getKey()) : !0 : !1;
}
function mr(e) {
  return M(e) && !Et(e);
}
function Et(e) {
  return We(e) || he(e) || Fe(e) || j(e) || Ie(e) || Hr(e);
}
function qr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function rx(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && ZT.includes(t);
}
function nx(e) {
  return e.retain != null && typeof e.retain == "number";
}
function ih(e, t) {
  return j(e) || Ie(e) ? !0 : t === "apply" && L(e) && Et(e);
}
function sh(e) {
  const t = e.getParent();
  return Mt(e) && oe(t) && t.getFirstChild() === e;
}
function Ua(e) {
  const t = e.getParent();
  return t !== null && nt(t, Be) !== null;
}
function ix(e) {
  return $(e.getParent()) && Wi(e) && Y(e, Q) === us;
}
function sx(e) {
  const t = e.getParent();
  if (!j(t))
    return !1;
  const r = e.getPreviousSibling();
  return P(r) && r === t.getFirstChild() && e.getTextContent() === St(t.getCaller());
}
function ox(e) {
  return !$p(e) && Jc(e, "delta-doc") === e.getTextContentSize();
}
function Jc(e, t) {
  if (Et(e))
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
    (Ac(e) || sh(e) || Y(e, Q) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    Y(e, Q) === "attribute" || Ua(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the tagged empty-char placeholder (an
    // untagged lone NBSP is content and counts), and the editable-mode note caller in caller
    // position.
    r.startsWith(Tc) || ix(e) || sx(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Fa(e, t) {
  const r = { insert: e.__text }, n = Y(e, Ur);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = oh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function Pu(e) {
  const t = new Pi();
  return e.isEmpty() || e.read(() => {
    const r = Ue();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && nr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = ax();
    for (const s of i)
      t.push(s);
  }), t;
}
function Yc(e, t) {
  const r = [], n = si(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...Ou(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...Ou(c, n.length, n, i, s, o, a));
  return r;
}
function ax() {
  return Yc();
}
function Ou(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return cx(e, a, n), lx(e, a, i, s, o), ux(e, t, r, i, o, s, a), We(e) && a.push(hx(e)), he(e) && a.push(mx(e)), Fe(e) && a.push(yx(e)), Hr(e) && a.push(bx(e)), fx(e, a, s), dx(e, a, s), _x(c, s), a;
}
function cx(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    Tt(n) ? t.push(px(n)) : oe(n) ? t.push(gx(n)) : nr(n) && t.push({ insert: Zi });
  }
  vt(e) && (r.includes(e) || r.push(e));
}
function lx(e, t, r, n, i) {
  if (!M(e) || Pe(e) || Hr(e))
    return;
  const s = e.getParent();
  if (j(s) && s.getFirstChild() === e)
    return;
  const o = Wt(e) !== void 0;
  if (P(e) && (o || sh(e) || Ua(e) || $p(e)) || Y(e, Q) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (fs(a))
    return;
  const c = e.getPreviousSibling();
  if (j(s) && P(c) && c === s.getFirstChild() && a === St(s.getCaller()))
    return;
  const l = $(s) ? s : void 0, d = l?.getFirstChild();
  o && l && P(d) && c === d && a.startsWith(R) && (a = a.slice(1));
  const u = a.startsWith(Tc) || Y(e, Q) === "attribute" || Ua(e), f = !!l && Wi(e) && Y(e, Q) === us, p = So(e, n), g = p ? r.filter((T) => p.children.includes(T)) : r, m = Fa(e, g);
  if (m.insert = a, p) {
    if (!a || Wi(e) || u)
      return;
    p.contentsOps?.push(m);
  } else
    f || u || t.push(m);
  const y = a !== "" && !f && !(u && l);
  if (r.length > 0 && y)
    for (const T of r)
      i.add(T);
}
function ux(e, t, r, n, i, s, o) {
  $(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (ei(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = Tx(c), d = So(c, s);
        d ? d.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function dx(e, t, r) {
  if (!j(e))
    return;
  const n = kx(e), i = So(e, r), s = {
    node: e,
    children: si(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function fx(e, t, r) {
  if (!Ie(e))
    return;
  const n = xx(e), i = So(e, r), s = {
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
function px(e) {
  const t = { style: Bi, code: e.__code };
  return Gr(t, e), { insert: Zi, attributes: { book: t } };
}
function hx(e) {
  const t = { style: Us, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Gr(t, e), { insert: { chapter: t } };
}
function gx(e) {
  const t = { style: e.__marker };
  return Gr(t, e), { insert: Zi, attributes: { para: t } };
}
function mx(e) {
  const t = { style: Fs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Gr(t, e), { insert: { verse: t } };
}
function yx(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), Gr(t, e), { insert: { milestone: t } };
}
function bx(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function kx(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), Gr(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = Y(e, Ur);
  return n && (r.attributes = { segment: n }), r;
}
function Tx(e) {
  const t = { insert: "" }, r = oh([e]);
  return r && (t.attributes = { char: r }), t;
}
function xx(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), Gr(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function So(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function _x(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    ei(t[r].node, e) && t.splice(r, 1);
}
function oh(e) {
  if (e.length === 0)
    return;
  const t = e.map(Cx);
  return t.length === 1 ? t[0] : t;
}
function Cx(e) {
  const t = { style: e.__marker }, r = Y(e, mn);
  return r && (t.cid = r), Gr(t, e), t;
}
const ah = 1;
class jt extends os {
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
    return new jt(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => Sx(t) ? {
        conversion: vx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Xc().updateFromJSON(t);
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
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => Mx(t, n), (l) => Ex(t, n, s, l), () => Ax(t, n), () => Px(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return v("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === $s && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === vf && i ? (
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
      version: ah
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function vx(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: Xc(t, r) };
}
function Xc(e, t, r) {
  return je(new jt(e, t, r));
}
function Sx(e) {
  return e ? e.classList.contains(jt.getType()) : !1;
}
function or(e) {
  return e instanceof jt;
}
function Mx(e, t) {
  return e.getEditorState().read(() => {
    const r = ie(t);
    if (!j(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function Ex(e, t, r, n) {
  e.update(() => {
    const i = ie(t);
    if (!j(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = ie(r);
    if (!or(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function Ax(e, t) {
  return e.getEditorState().read(() => {
    const r = ie(t);
    if (!j(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return Yc(r);
  });
}
function Px(e, t) {
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
const Ox = [
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
], Nx = ["†"];
function Qc(e) {
  if (lh())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = Nu(t), [s, o] = Nu(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = wu(n, i), [s, o] = wu(s, o);
  const a = gc();
  return a.anchor = Gl(n.getKey(), i, qu(n)), a.focus = Gl(s.getKey(), o, qu(s)), a;
}
function ch() {
  if (lh())
    return;
  const e = q();
  if (!e || !O(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Hs(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Hs(i, s);
  return { start: n, end: o };
}
function Nu(e) {
  if (Fm(e)) {
    const t = ef(e.jsonPath);
    let r = Ue();
    for (let n = 0; n < t.length; n++) {
      if (!r || !L(r))
        return [void 0, void 0];
      const i = oi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : ck(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && L(r) ? [r, lk(r, e.offset)] : [void 0, void 0];
  }
  if (zm(e) || Km(e)) {
    const t = _i(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (L(t)) {
      const n = t.getLastChild();
      if (n && M(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && L(r) ? [r, 0] : [void 0, void 0];
  }
  if (jm(e)) {
    const t = _i(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (L(t)) {
      const n = t.getLastChild();
      if (n && M(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && L(r) ? [r, 0] : [void 0, void 0];
  }
  if (Bm(e)) {
    const t = _i(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = ra(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && M(n) ? [n, 0] : [void 0, void 0];
  }
  if (Vm(e)) {
    const t = _i(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = ra(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && M(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (Wm(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = _i(e.jsonPath);
    if (!n || !L(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = ra(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && M(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${Hm(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function wu(e, t) {
  if (!xr(e))
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
function ra(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (P(n) && n.getMarkerSyntax() === t || t === "closing" && P(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (xr(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function _i(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = ef(r);
  let i = Ue();
  for (const s of n) {
    if (!i || !L(i))
      return;
    const o = oi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Hs(e, t) {
  if (P(e)) {
    const r = e.getMarkerSyntax(), n = wx(e), i = n ? en(on(n)) : en(on(e));
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
  if (xe(e)) {
    const r = e.getChildrenSize(), n = e.getChildAtIndex(Math.min(t, r - 1));
    if (M(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return Hs(n, s);
    }
    const i = yo(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return Hs(i, o);
    }
  }
  if (L(e)) {
    const r = e.getChildAtIndex(t);
    if (xr(r))
      return {
        jsonPath: en(on(e))
      };
    const n = yp(e, t);
    return n.type === "text" ? {
      jsonPath: en([...on(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: en(on(e)),
      offset: n.index
    };
  }
  if (M(e)) {
    const r = ak(e, t);
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
function wx(e) {
  const t = e.getParent();
  if (!t || !L(t))
    return;
  const r = qx(e);
  return r && !vt(r) && !M(r) && !xe(r) ? r : t;
}
function qx(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!wc(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function on(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = yo(r);
    if (!n)
      break;
    const i = ok(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function lh() {
  for (let e = Ue().getFirstChild(); e; e = e.getNextSibling())
    if (Qi(e))
      return !0;
  return !1;
}
function uh(e, t, r, n, i, s, o) {
  if (!Se.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Qc(r) : q();
  if (!O(a))
    return;
  const c = Ix(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (Oi(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), d = dh(e, l, c, i, s, void 0, void 0);
  return $x(d, a, i), d;
}
function Zc(e) {
  return e !== "expanded";
}
function Rx(e) {
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
function $x(e, t, r) {
  const n = Zc(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Qb(t), Jp(t);
  const i = Rx(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find($)?.selectEnd();
}
function Kn(e, t, r) {
  const n = gr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  return i ? n.append(at(e)) : r?.markerMode === "visible" && n.append(hr("marker", Oe(e))), n.append(t === "" ? qc() : Le(i ? R + t : t)), n;
}
function Ix(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, d = i.chapterVerseSeparator ?? ":", u = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${d}${(l ?? `${c}`).replace(/-/g, () => u)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Kn("fr", f, n)), !e.isCollapsed()) {
        const p = $u(e);
        p.length > 0 && o.push(Kn("fq", p, n));
      }
      o.push(Kn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Kn("xo", f, n)), !e.isCollapsed()) {
        const p = $u(e);
        p.length > 0 && o.push(Kn("xq", p, n));
      }
      o.push(Kn("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function dh(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : Zc(n?.noteMode), l = Cc(e, t, c);
  s && ot(l, Ur, () => s);
  const d = n?.isNoteShellEditable === !1;
  let u, f;
  n?.markerMode === "editable" ? (u = at(e), d && u.setMode("token"), a || (f = at(e, "closing"))) : n?.markerMode === "visible" && (u = hr("marker", Oe(e) + " "), a || (f = hr("marker", rt(e))));
  let p;
  if (u && l.append(u), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = Le(St(l.__caller)), d && p.setMode("token"), l.append(p, ...r));
  else {
    const g = () => Vr(), m = r.flatMap(Dx(g));
    if (t === "")
      l.append(...m);
    else {
      const y = Pc(r);
      let T = () => {
      };
      i?.noteCallerOnClick && (T = i.noteCallerOnClick), p = Xc(l.__caller, y, T), l.append(p, g(), ...m);
    }
  }
  return f && l.append(f), l;
}
function Ru(e) {
  if (typeof e == "string") {
    const i = ie(e);
    return j(i) ? i : void 0;
  }
  const t = si();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => j(i.node))[e]?.node;
  if (j(n))
    return n;
}
function Lx(e, t) {
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
  } else
    e.getChildren().reverse().find($)?.selectEnd();
}
function Dx(e) {
  return (t) => Vt(t) ? [t] : [t, e()];
}
function Ux(e) {
  const t = e.getParent();
  return t !== null && nt(t, j) !== null;
}
function $u(e) {
  if (!O(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = rf(e);
  let a = "";
  for (const c of t)
    if (!(j(c) || or(c) || Ux(c)) && !P(c) && !Hr(c) && Y(c, Q) !== "attribute") {
      if (he(c)) {
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
const fh = [
  jt,
  xt,
  ...MT
], Fx = [
  li,
  ...fh
], zx = Sn((e, t) => {
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
function Kx() {
  const [e, t] = de(void 0), [r, n] = de(), i = Z(null), s = ge((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = _y(l, c, () => {
      Cy(l, c, {
        placement: "bottom-start",
        middleware: [vy(), Sy()]
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
function jx({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = Kx();
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
const Bx = Rm(zx);
function ph({ isOpen: e = !1, children: t }) {
  const r = Z(null), { coords: n, placement: i } = jx({ isOpen: e, floatingBoxRef: r }), s = ze(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return un(
    v(Bx, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const hh = Qd(void 0);
function el() {
  const e = Zd(hh);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function Vx(e, t) {
  const [r, n] = de(0), [i, s] = de(-1), o = ze(() => e ?? [], [e]), a = {
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
function Wx({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = Vx(t, r);
  return v(hh.Provider, { value: i, children: v("div", { ...n, children: e }) });
}
const gh = Sn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = el(), d = ge((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), u = ge((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return v("button", { ref: s, role: "menuitem", ...i, onClick: d, onMouseEnter: u, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function Hx({ children: e, autoIndex: t = !0, ...r }) {
  const n = Z(null), { state: { activeIndex: i, menuItems: s } } = el(), o = ze(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = ze(() => {
    const c = o(s);
    return t ? $m.map(c, (l, d) => Im(l) && l.type === gh && l.props.index === void 0 ? Lm(l, { index: d }) : l) : c;
  }, [o, t, s]);
  return K(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const d = c.getBoundingClientRect(), u = l.getBoundingClientRect();
        u.bottom > d.bottom ? c.scrollTop += u.bottom - d.bottom : u.top < d.top && (c.scrollTop -= d.top - u.top);
      }
    }
  }, [i]), v("div", { ref: n, role: "menu", ...r, children: a });
}
const Gx = (e, t, r) => Ps(e, r).toLowerCase().includes(t.toLowerCase()), Iu = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Ps = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function Jx(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let d, u;
  i ? (u = i, d = r.length > 0 ? Iu(r[0]) : "") : (d = n || (r.length > 0 ? Iu(r[0]) : ""), u = (g, m) => Gx(g, m, d));
  const f = s || d, p = /* @__PURE__ */ new Map();
  return r.filter((g) => {
    try {
      return u(g, t);
    } catch (m) {
      return console.warn("Error filtering item:", g, m), !1;
    }
  }).sort((g, m) => {
    const y = (S) => (p.has(S) || p.set(S, Ps(S, f).toLowerCase()), p.get(S) ?? ""), T = a ? Ps(g, f) : y(g), C = a ? Ps(m, f) : y(m);
    for (const S of c)
      switch (S) {
        case "exact":
          if (T === l && C !== l)
            return -1;
          if (C === l && T !== l)
            return 1;
          break;
        case "startsWith":
          if (T.startsWith(l) && !C.startsWith(l))
            return -1;
          if (C.startsWith(l) && !T.startsWith(l))
            return 1;
          break;
        case "contains": {
          const E = T.indexOf(l), A = C.indexOf(l);
          if (E !== -1 && A === -1)
            return -1;
          if (A !== -1 && E === -1)
            return 1;
          if (E !== -1 && A !== -1)
            return E - A;
          break;
        }
      }
    return T.localeCompare(C);
  });
}
const na = {
  Root: Wx,
  Options: Hx,
  Option: gh
};
function Yx(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return ze(() => Jx({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function Xx() {
  const { moveUp: e, moveDown: t, select: r } = el();
  return ze(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const Qx = () => {
  const e = Xx(), [t] = le();
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
    return t.registerCommand(br, r, $e);
  }, [t, e]);
};
function Zx() {
  return Qx(), null;
}
const e_ = ["Shift", "Control", "Alt", "Meta"];
function mh(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = le(), d = s !== void 0, [u, f] = de(""), p = d ? s ?? "" : u, g = Yx({ query: p, items: t, filterBy: "name" }), m = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return K(() => {
    a?.(p, g);
  }, [a, p, g]), K(() => l.registerCommand(br, (y) => {
    if (d || c?.includes(y.key) || e_.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const C = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((S) => S.slice(0, -1));
      }
    }[y.key];
    return C ? (y.stopPropagation(), y.preventDefault(), C(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((S) => S + y.key), !0) : !1;
  }, $e), [l, d, p, o, n, c]), ke(na.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: g, onSelectOption: (y) => m(y), children: [!d && v("input", { value: p, type: "text", disabled: !0 }), v(Zx, {}), v(na.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((C, S) => ke(na.Option, { index: S, children: [v("span", { className: "label", children: C.label ?? C.name }), v("span", { className: "description", children: C.description })] }, C.name)) })] });
}
function t_({ trigger: e, items: t }) {
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
      const l = q();
      if (O(l))
        return l;
    });
    a.read(() => {
      const l = q();
      !O(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && v(ph, { isOpen: n, children: ({ placement: o }) => v(mh, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function r_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: ze(() => {
    if (!t || !e)
      return;
    const i = rr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = rr(o), { action: c } = r(o, a);
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
function n_(e, t) {
  K(() => {
    if (!e.hasNodes([Ze]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Xe(mf(e, Ze, (n) => ji(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, d] of Object.entries(n.getTypedIDs()))
        d.forEach((u) => {
          const f = s[l]?.[u], p = o[l]?.[u], g = a[l]?.[u], m = c[l]?.[u];
          i.addID(l, u, f, p, g, m);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(Ze, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = ie(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : xe(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!Ze.isReservedType(c))
              for (const d of l) {
                let u = t.get(Li(c, d));
                a[c] = l, r.set(i, a), s === "destroyed" ? u !== void 0 && (u.delete(i), u.size === 0 && t.delete(Li(c, d))) : (u === void 0 && (u = /* @__PURE__ */ new Set(), t.set(Li(c, d), u)), u.has(i) || u.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const i_ = Sn(function({ logger: t }, r) {
  const [n] = le(), i = ze(() => /* @__PURE__ */ new Map(), []);
  n_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Li(o, a)) ?? []);
    if (l.length !== 0)
      for (const d of l) {
        const u = ie(d);
        xe(u) && (u.deleteID(o, a), u.hasNoIDsForEveryType() && Ds(u));
      }
  };
  return pc(r, () => ({
    setAnnotation(o, a, c, l, d, u, f) {
      if (Ze.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = Qc(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), Ff(p, a, c, l, d, u, f);
      }, { tag: va });
    },
    removeAnnotation(o, a) {
      if (Ze.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Li(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: va });
    }
  })), null;
}), s_ = [];
function o_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = s_, onChange: n }) {
  const [i] = le();
  return ss(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: d } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && d.has(nf) && !d.has(Ef) || r.some((f) => d.has(f)) || l.isEmpty())
          return;
        const u = a_(i, s);
        u.length !== 0 && n(o, i, d, u);
      });
  }, [i, e, t, r, n]), null;
}
function a_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Pi();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = ie(i), o = s !== null && Wt(s) !== void 0;
    if (t.size === 1 && M(s) && !o && ox(s)) {
      const a = nh(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const u = ie(i);
          return new Pi([M(u) ? Fa(u) : { insert: "" }]);
        }), l = new Pi([Fa(s)]), d = new Pi(a > 0 ? [{ retain: a }] : []);
        n = n.concat(d).concat(c.diff(l));
      }
    } else {
      const a = Pu(r), c = Pu(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const tl = "formatted", yh = "unformatted", bh = "paragraph-structure", kh = "standard", Th = "block-verse", c_ = {
  [tl]: "Formatted",
  [yh]: "Unformatted",
  [bh]: "Paragraph Structure",
  [kh]: "Standard",
  [Th]: "Block Verse"
};
function ui(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let rl, nl;
function l_(e) {
  const t = xh(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  rl = e, nl = t;
}
l_(tl);
const qA = () => rl, Mo = () => nl;
function xh(e) {
  let t;
  switch (e ?? rl) {
    case tl:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case yh:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case bh:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case kh:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Th:
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
function RA(e) {
  if (!e)
    return;
  const t = Lu(e);
  return Object.keys(c_).find((r) => Nt(Lu(xh(r)), t));
}
const u_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function Lu(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...u_, ...t };
}
function Eo(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function d_(e) {
  if (e)
    return es(e) ? xt : e.markerMode === "editable" ? pt : xt;
}
function es(e) {
  return e?.verseLayout === "block";
}
function f_(e) {
  const t = [], r = e ?? nl;
  return r && (t.push(`${Uy}${r.markerMode}`), r.hasSpacing && t.push(Ly), r.isFormattedFont && t.push(Dy)), t;
}
function p_(e, t, r, n) {
  let i = 0;
  const s = /* @__PURE__ */ new Set();
  e.forEach((o) => {
    if ("retain" in o)
      i += g_(o, i, t, n);
    else if ("delete" in o) {
      if (typeof o.delete != "number" || o.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(o)}`);
        return;
      }
      n?.debug(`Delete: ${o.delete}`), y_(i, o.delete, n);
    } else "insert" in o ? typeof o.insert == "string" ? (n?.debug(`Insert: '${o.insert}'`), i += b_(i, o.insert, o.attributes, t, n, s)) : typeof o.insert == "object" && o.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(o.insert)}`), T_(i, o, t, r, n, s) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(o.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(o.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(o)}`);
  }), h_(s);
}
function h_(e) {
  for (const t of e) {
    const r = ie(t);
    if (!M(r) || !r.isAttached() || r.getTextContent() !== R || Y(r, Q) !== void 0)
      continue;
    const n = r.getParent();
    if (!$(n))
      continue;
    const i = n.getChildren().filter((o) => !Mt(o));
    if (i.length === 1) {
      Rc(r);
      continue;
    }
    const s = i[1];
    r.is(i[0]) && (L(s) || he(s) || Fe(s)) && mo(r);
  }
}
function Ni(e, t) {
  t?.add(e.getKey());
}
function g_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), m_(t, e.retain, e.attributes, r, n)), e.retain);
}
function m_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Ue();
  function l(d) {
    if (s <= 0)
      return !0;
    if (mr(d)) {
      const u = d.getTextContentSize();
      if (e < o + u && o < e + t) {
        const f = Math.max(0, e - o), p = u - f, g = Math.min(s, p);
        if (g > 0) {
          let m = d;
          const y = f > 0, T = g < u - f;
          if (y && T) {
            const [, C] = d.splitText(f);
            [m] = C.splitText(g);
          } else y ? [, m] = d.splitText(f) : T && ([m] = d.splitText(g));
          if (zr(r)) {
            const C = m.getParent();
            if ($(C)) {
              const S = r.char;
              let E;
              Array.isArray(S) ? a >= 0 && a <= S.length - 1 && (E = S[a]) : a === 0 && (E = S);
              const A = E ? yn(E, C) : !1;
              if (A && Array.isArray(S) && S.length > 1) {
                const x = Le("");
                m.replace(x);
                const F = typeof r.segment == "string" ? r.segment : void 0, D = di(S.slice(1), n, m, F);
                let G = x;
                for (const V of D)
                  G.insertAfter(V), G = V;
                x.remove(), dn(r, m);
              } else if (A)
                dn(r, m);
              else {
                m.remove();
                const x = Du(m, r, n, i);
                if (x && x.length > 0) {
                  let F = C;
                  for (const D of x)
                    F.insertAfter(D), F = D;
                }
              }
            } else {
              const S = Le("");
              m.replace(S);
              const E = Du(m, r, n, i);
              if (E && E.length > 0) {
                let A = S;
                for (const x of E)
                  A.insertAfter(x), A = x;
                S.remove();
              } else
                S.replace(m);
            }
          } else
            dn(r, m);
          s -= g;
        }
      }
      o += u;
    } else if (Et(d))
      e <= o && o < e + t && s > 0 && (Uu(d, r), s -= 1), o += 1;
    else if ($(d)) {
      a += 1;
      let u = !1;
      if (e <= o && o < e + t && s > 0)
        if (zr(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            za(d, p.style), typeof p.cid == "string" && ot(d, mn, () => p.cid);
            const g = De(p, Ws);
            g && Object.keys(g).length > 0 ? d.setUnknownAttributes({
              ...d.getUnknownAttributes() ?? {},
              ...g
            }) : d.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || P_(r.char)) && (u = !0);
      if (s > 0) {
        const f = d.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return u && _a(d), !0;
        }
      }
      u && _a(d), a -= 1;
    } else if (vt(d)) {
      const u = d.getChildren();
      for (const p of u) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!nr(d))
          Uu(d, r);
        else if (il(r)) {
          const p = vh(r.para, n);
          p && d.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if (L(d)) {
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
function Du(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = di(t.char, r, e, i), o = s.find($);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), dn(t, e);
    return;
  }
  const a = {};
  Ah.forEach((d) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), dn(t, e), s;
}
function _h(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  P(r) ? (r.setMarker(t), r.setTextContent(Oe(t))) : Vt(r) && r.getTextType() === "marker" && r.setTextContent(Oe(t) + R);
}
function za(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    P(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = $(e.getParent()), i = e.getFirstChild();
  Vt(i) && i.getTextType() === "marker" && i.getTextContent() === Oe(r, n) && i.setTextContent(Oe(t, n));
  const s = e.getLastChild();
  Vt(s) && s.getTextType() === "marker" && s.getTextContent() === rt(r, n) && s.setTextContent(rt(t, n));
}
function Uu(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && $(e) && zr(t)) {
      const i = Ka(n);
      if (za(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        ot(e, mn, () => o);
      }
      const s = De(i, Ws);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (We(e) || he(e) || Fe(e) || j(e) || Ie(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (Tt(e) || oe(e) || $(e)) && (r === "style" && oe(e) ? _h(e, n) : r === "style" && $(e) ? za(e, n) : r === "code" && Tt(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && ot(e, Ur, () => n));
  }
}
function y_(e, t, r) {
  if (t <= 0)
    return;
  const n = Ue();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (mr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), d = c - l, u = Math.min(s, d);
        u > 0 && (a.spliceText(l, u, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${u} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= u, c -= u);
      }
      i += c;
    } else if (Et(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (vt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const d of l) {
        if (s <= 0)
          break;
        if (o(d) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && vt(a)) {
        s -= 1;
        const d = a.getChildren().length;
        if (c.length > 0 && d === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Kt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && _e(p)) {
            let g = i + 1;
            const m = p.getChildren();
            for (const T of m) {
              if (s <= 0)
                break;
              const C = i;
              if (i = g, o(T)) {
                i = C;
                break;
              }
              mr(T) ? g += T.getTextContentSize() : Et(T) && (g += 1), i = C;
            }
            const y = p.getChildren();
            for (const T of y)
              T.remove(), a.append(T);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Kt(), !0);
        } else oe(a) ? a.replace(Kt(), !0) : a.remove();
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
function b_(e, t, r, n, i, s) {
  if (t === Zi)
    return Fu(e, r, n, i);
  if (t.endsWith(Zi) && !il(r)) {
    const o = t.slice(0, -1);
    let a = 0;
    if (o.length > 0) {
      if (zr(r))
        throw new Error("Text + LF should not have char attributes");
      a += Gs(e, o, r, i, s);
    }
    return a += Fu(e + a, r, n, i), a;
  } else return zr(r) ? k_(e, t, r, n, i, s) : Gs(e, t, r, i, s);
}
function k_(e, t, r, n, i, s) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const o = t === "" ? qc() : Le(t);
  dn(r, o);
  let a;
  {
    let T = function(C) {
      if (mr(C)) {
        const S = C.getTextContentSize();
        if (e >= y && e < y + S) {
          const E = C.getParent();
          return $(E) && (a = E), !0;
        }
        y += S;
      } else if (Et(C))
        y += 1;
      else if ($(C)) {
        const S = C.getChildren();
        for (const E of S)
          if (T(E))
            return !0;
      } else if (L(C)) {
        const S = C.getChildren();
        for (const E of S)
          if (T(E))
            return !0;
        vt(C) && (y += 1);
      }
      return !1;
    };
    const m = Ue();
    let y = 0;
    T(m);
  }
  let c = r.char;
  if (Array.isArray(c)) {
    if (a) {
      const m = c[0];
      m && yn(m, a) ? (c = c.slice(1), c.length === 1 && (c = c[0])) : a = void 0;
    }
  } else a && (yn(c, a) || (a = void 0));
  const l = typeof r.segment == "string" ? r.segment : void 0, u = di(c, n, o, l, a ? [a] : void 0, !1, !1, s);
  if (u.length === 0)
    return t.length;
  const f = u.find($);
  if (!f)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Gs(e, t, void 0, i, s);
  const p = {};
  for (const [m, y] of Object.entries(r))
    m !== "char" && m !== "segment" && typeof y == "string" && (p[m] = y);
  Object.keys(p).length > 0 && f.setUnknownAttributes(p);
  let g = !0;
  for (const m of u)
    if (!Ch(e, m, i)) {
      g = !1;
      break;
    }
  return g ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Gs(e, t, void 0, i, s));
}
function Gs(e, t, r, n, i) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const s = Ue();
  let o = 0, a = !1, c;
  const l = () => (c = Le(t), dn(r, c), c);
  function d(u) {
    if (a)
      return !0;
    if (mr(u)) {
      const f = u.getTextContentSize();
      if (e >= o && e <= o + f) {
        const p = e - o, g = l();
        if (p === 0)
          u.insertBefore(g);
        else if (p === f) {
          const m = u.getParent();
          $(m) && !zr(r) ? m.insertAfter(g) : u.insertAfter(g);
        } else {
          const [, m] = u.splitText(p);
          m.insertBefore(g);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${u.getKey()}) at nodeOffset ${p}. Original targetIndex: ${e}, currentIndex at node start: ${o}.`), a = !0, !0;
      }
      o += f;
    } else if (Et(u))
      o += 1;
    else if ($(u)) {
      if (!a && e === o) {
        const g = l(), m = u.getFirstChild();
        return m ? m.insertBefore(g) : u.append(g), n?.debug(`Inserted text "${t}" at beginning of CharNode ${u.getType()} (key: ${u.getKey()}).`), a = !0, !0;
      }
      const p = u.getChildren();
      for (const g of p) {
        if (d(g))
          return !0;
        if (a)
          break;
      }
      if (!a && e === o) {
        const g = l();
        return u.append(g), n?.debug(`Appended text "${t}" to end of CharNode ${u.getType()} (key: ${u.getKey()}).`), a = !0, !0;
      }
    } else if (vt(u)) {
      if (!a && e === o) {
        const g = l(), m = u.getFirstChild();
        return m ? m.insertBefore(g) : u.append(g), n?.debug(`Inserted text "${t}" at beginning of container ${u.getType()} (key: ${u.getKey()}).`), a = !0, !0;
      }
      const p = u.getChildren();
      for (const g of p) {
        if (d(g))
          return !0;
        if (a)
          break;
      }
      if (!a && e === o) {
        const g = l();
        return u.append(g), n?.debug(`Appended text "${t}" to end of container ${u.getType()} (key: ${u.getKey()}).`), a = !0, !0;
      }
      o += 1;
    } else if (L(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (d(p))
          return !0;
        if (a)
          break;
      }
    }
    return a;
  }
  if (d(s), !a && e === o) {
    n?.debug(`Insertion point matches end of document (targetIndex: ${e}, final currentIndex: ${o}). Appending text to new ParaNode.`);
    const u = l(), f = Kt().append(u);
    s.append(f), a = !0;
  }
  return a ? (c && Ni(c, i), t.length) : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${o}. Text not inserted.`), 0);
}
function Ch(e, t, r) {
  const n = Ue();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Kt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!L(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (_e(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const d = l.getFirstChild();
            d ? d.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Kt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (mr(l)) {
        const d = l.getTextContentSize();
        if (!s && e > i && e < i + d) {
          const u = e - i, [f] = l.splitText(u);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${u}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += d;
      } else if (Et(l))
        i += 1;
      else if ($(l)) {
        if (o(l))
          return !0;
      } else if (vt(l)) {
        const d = l;
        if (o(d))
          return !0;
        const u = i;
        if (nr(d) && vt(t) && // Target is at the ImpliedPara's implicit newline
        e === u && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${d.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = u + 1, s = !0, !0;
        i += 1;
      } else if (L(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return L(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Kt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      _e(a) ? nr(a) && oe(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !_e(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : ($(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !_e(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function T_(e, t, r, n, i, s) {
  let o;
  return qr("chapter", t) ? o = __(t.insert.chapter, r) : qr("verse", t) ? o = C_(t.insert.verse, r) : qr("ms", t) ? o = v_(t.insert.ms) : qr("note", t) ? o = Sh(t, r, n, i, s) : qr("unknown", t) ? o = Mh(t, r, n, i, s) : qr("unmatched", t) && (o = M_(t.insert.unmatched, r)), o ? Ch(e, o, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Fu(e, t, r, n) {
  let i;
  il(t) ? i = vh(t.para, r) : A_(t) && (i = x_(t.book)), i ??= Kt();
  const s = i, o = oe(s), a = nr(s);
  let c = 0, l = !1;
  function d(u) {
    if (l)
      return !0;
    if (mr(u)) {
      const f = u.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = u.getParent();
        if (oe(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const g = e - c, [m] = g > 0 ? u.splitText(g) : [void 0];
          let y, T = m?.getPreviousSibling();
          for (; T; ) {
            const C = T;
            T = T.getPreviousSibling(), y ? y.insertBefore(C) : s.append(C), y = C;
          }
          return m && s.append(m), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Et(u))
      c += 1;
    else if (vt(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (d(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (nr(u) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${u.getKey()}) with ParaNode at targetIndex ${e}`), u.replace(s, !0), l = !0, !0;
        if (oe(u) && s) {
          const p = u;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && oe(u) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${u.getMarker()}) at targetIndex ${e}`), u.insertAfter(s), l = !0, !0;
    } else if (L(u)) {
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
  return d(Ue()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function x_(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Bi || !r || !Lt.isValidBookCode(r))
    return;
  const n = De(e, HT);
  return jf(r, n);
}
function vh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = De(e, WT), i = Vi(r, n);
  if (!ui(t))
    return i;
  if (t.markerMode === "editable")
    i.append(at(r), Vr());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Oe(r) + R;
    i.append(t.hasGutterParaMarkers ? hb(s) : hr("marker", s));
  }
  return i;
}
function __(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = De(e, GT);
  let a;
  if (t.markerMode === "editable")
    a = Wf(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Mc(r, c, n, i, s, o);
  }
  return a;
}
function C_(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = De(e, JT);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = It(r, n);
    c = rp(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Vc(n, l, i, s, o, a);
  }
  return c;
}
function v_(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = De(e, YT);
  return Of(t, r, n, s, i);
}
function Sh(e, t, r, n, i) {
  const s = e.insert;
  if (!s.note)
    return;
  const { style: o, caller: a, category: c, contents: l } = s.note;
  if (!o || a == null)
    return;
  a === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const d = De(s.note, XT), u = typeof d?.closed == "string" ? d.closed : void 0, f = e.attributes?.segment;
  let p;
  f && typeof f == "string" && (p = f);
  const g = [];
  for (const y of l?.ops ?? [])
    if (typeof y.insert == "string")
      if (zr(y.attributes)) {
        const T = di(y.attributes.char, t, Le(y.insert), void 0, Eh(y.attributes.char, g), !1, t.markerMode === "editable", i);
        g.push(...T);
      } else
        g.push(Le(y.insert));
  return dh(o, a, g, t, r, p, u).setCategory(c).setUnknownAttributes(d);
}
function Mh(e, t, r, n, i) {
  const s = e.insert.unknown;
  if (!s)
    return;
  const { tag: o, marker: a, contents: c } = s;
  if (!o)
    return;
  const l = De(s, QT), d = Sc(o, a, l), u = c?.ops ?? [];
  u.length > 0 && S_(u, t, r, n, i).forEach((g) => d.append(g));
  const f = e.attributes?.segment;
  return typeof f == "string" && ot(d, Ur, () => f), d;
}
function S_(e, t, r, n, i) {
  const s = [];
  for (const o of e) {
    if (typeof o.insert == "string") {
      if (zr(o.attributes)) {
        const a = Le(o.insert), c = di(o.attributes.char, t, a, void 0, Eh(o.attributes.char, s), !1, !1, i);
        s.push(...c);
      } else
        s.push(Le(o.insert));
      continue;
    }
    if (!(!o.insert || typeof o.insert != "object")) {
      if (qr("unknown", o)) {
        const a = Mh(o, t, r, n, i);
        a && s.push(a);
        continue;
      }
      if (qr("note", o)) {
        const a = Sh(o, t, r, n, i);
        a && s.push(a);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(o.insert)}`);
    }
  }
  return s;
}
function M_(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = Fc(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Eh(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Ka(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function di(e, t, r, n, i, s = !1, o = !1, a) {
  M(r) && r.getTextContentSize() === 0 && (r.setTextContent(Lr), Rc(r));
  const c = () => {
    o && M(r) && r.getTextContent() !== Lr && r.setTextContent(R + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const l = e.map(Ka), d = l[0], u = i?.[i.length - 1];
    if ($(u) && yn(d, u))
      return l.length > 1 ? di(l.slice(1), t, r, void 0, void 0, !0, o, a).forEach((g) => u.append(g)) : (r && u.append(r), M(r) && Ni(r, a)), [];
    c();
    const f = l.reduceRight((p, g, m) => {
      const y = gr(g.style, De(g, Ws));
      if (typeof g.cid == "string" && ot(y, mn, () => g.cid), n && m === l.length - 1 && ot(y, Ur, () => n), p)
        if ($(p)) {
          const T = p.getMarker(), C = [];
          sa(T, C, t, !0), C.forEach((E) => y.append(E)), y.append(p);
          const S = [];
          ia(p, S, t, !0), S.forEach((E) => y.append(E));
        } else
          y.append(p);
      return y;
    }, r);
    return sa(d.style, f, t, s), ia(f, f, t, s), M(r) && Ni(r, a), [f];
  } else {
    const l = Ka(e), d = i?.[i.length - 1];
    if ($(d) && yn(l, d))
      return r && d.append(r), M(r) && Ni(r, a), [];
    c();
    const u = gr(l.style, De(l, Ws));
    return typeof l.cid == "string" && ot(u, mn, () => l.cid), n && ot(u, Ur, () => n), r && u.append(r), sa(l.style, u, t, s), ia(u, u, t, s), M(r) && Ni(r, a), [u];
  }
}
function ia(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && E_(e.getMarker(), t, r, !1, n);
}
function sa(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = at(e, "opening", n) : r?.markerMode === "visible" && (i = hr("marker", Oe(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function E_(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = at("", "selfClosing") : s = at(e, "closing", i) : r?.markerMode === "visible" && (s = hr("marker", n ? rt("") : rt(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function A_(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function il(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function zr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function P_(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function dn(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        ot(t, Ur, () => n);
        continue;
      }
      if (O_(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const Ah = [
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
function O_(e) {
  return Ah.includes(e);
}
function N_() {
  const [e] = le();
  return K(() => e.registerCommand(co, (t) => (w_(t), !1), pn), [e]), null;
}
function w_(e) {
  if (q_(e.target))
    return;
  const t = q();
  O(t) && R_(t);
}
function fi(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Mt(t))
      r++, t = t.getNextSibling(), M(t) && t.getTextContent() === R && (r++, t = t.getNextSibling());
    else if (he(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Ht(e, r), !0);
}
function q_(e) {
  if (!sf(e))
    return !1;
  const t = ls(e);
  if (!gb(t))
    return !1;
  const r = t.getParent();
  return r ? _e(r) ? fi(r) : (Ht(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function R_(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = ie(t.key);
  if (!_e(r))
    return !1;
  const n = r.getFirstChild();
  return !xr(n) && !On(n) ? !1 : fi(r);
}
function $_() {
  const [e] = le();
  return K(() => {
    const t = (r) => r instanceof KeyboardEvent && !I_(r) || !Ph() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Xe(
      e.registerCommand(br, t, $e),
      e.registerCommand(mc, t, $e),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm records what a cut would cover
      // and claims nothing, so either order of the two is correct: with no removal, nothing it
      // armed can be reaped.
      e.registerCommand(lr, t, ur),
      e.registerCommand(hn, t, ur),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(yc, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = ls(r.target);
        return !n || !xn(n) ? !1 : (r.preventDefault(), !0);
      }, $e),
      e.registerCommand(Ym, t, $e),
      e.registerCommand(Xm, t, $e),
      e.registerCommand(Qm, t, $e)
    );
  }, [e]), null;
}
function I_(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function xn(e) {
  return nt(e, (t) => Ie(t) || Fp(t)) ?? void 0;
}
function Ph() {
  const e = q();
  return O(e) ? xn(e.anchor.getNode()) !== void 0 || xn(e.focus.getNode()) !== void 0 : !1;
}
function L_(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function D_(e, t) {
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
    return d.setStartAfter(c), l ? d.setEndBefore(l) : d.setEnd(n, n.childNodes.length), L_(s, Array.from(d.getClientRects()), t);
  } catch {
    return !1;
  }
}
function U_(e, t, r, n) {
  if (!Z_(t) || D_(e, r))
    return !1;
  const i = r === "up" ? VT(t) : BT(t);
  return i && n.preventDefault(), i;
}
function F_({ viewOptions: e }) {
  const [t] = le();
  return z_(t, e), null;
}
function z_(e, t) {
  K(() => {
    if (!e.hasNodes([ir, xt, Se]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = q();
      if (!O(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const d = zu(o), u = G_(i, Ku(d, n.key) ? "next" : "previous");
        return u && n.preventDefault(), u;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const d = n.key === "ArrowUp" ? "up" : "down";
        return U_(e, i, d, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = zu(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Ku(a, n.key) ? l = !c && Vu(i, "next") || !c && j_(i) || X_(i) || !c && s && Bu(i, "next") : K_(a, n.key) && (l = !c && Vu(i, "previous") || !c && B_(i) || Q_(i, t) || !c && s && Bu(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(br, r, $e);
  }, [e, t]);
}
function zu(e) {
  return e.dir || "ltr";
}
function Ku(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function K_(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function ja(e) {
  if (!$(e) || e.getMarker() !== "fp")
    return;
  const t = Wt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function j_(e) {
  const t = ja(ap(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Ht(t, 0), !0);
}
function B_(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = ja(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : ju(n);
  }
  if (t.offset === 0) {
    const n = ja(r);
    return n ? ju(n) : !1;
  }
  return !1;
}
function ju(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (M(t))
    return t.select(), !0;
  if (L(t)) {
    const i = t.getLastDescendant();
    return M(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const Js = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function V_(e) {
  if (Js)
    for (const { segment: r } of Js.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function W_(e) {
  if (Js) {
    let n = 0;
    for (const { index: i } of Js.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Oh(e) {
  for (let t = e; t; t = t.getParent())
    if (L(t) && !t.isInline())
      return t;
}
function Nh(e) {
  return !!e && P(e) && xn(e) !== void 0;
}
function ti(e) {
  return M(e) && !e.isToken() && !Nh(e) && e.getTextContentSize() > 0;
}
function wh(e) {
  return ao(e) ? !0 : j(e) ? e.getIsCollapsed() === !0 : M(e) ? (e.isToken() || Nh(e)) && e.getTextContentSize() > 0 : of(e) ? !Fe(e) : !1;
}
function ri(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Ao(e, t, r) {
  for (let n = e; n; ) {
    if (wh(n))
      return n;
    if (L(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? ri(n, t, r);
      continue;
    }
    if (ti(n))
      return n;
    n = ri(n, t, r);
  }
}
function sl(e, t, r, n, i) {
  return r === "element" && L(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? ri(e, n, i) : r === "text" && wh(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : ri(e, n, i);
}
function oa(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = sl(e.node, e.offset, e.kind, "previous", t), n = Ao(r, "previous", t);
  if (!n)
    return e;
  if (ti(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function H_(e, t) {
  const r = e.getNode(), n = Oh(r);
  if (!n)
    return;
  if (e.type === "text" && ti(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return oa({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = sl(r, e.offset, e.type, t, n), s = Ao(i, t, n);
  if (!s)
    return;
  if (ti(s)) {
    const c = s.getTextContent(), l = t === "next" ? V_(c) : W_(c);
    return oa({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return oa({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function qh(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = H_(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Bu(e, t) {
  return qh(e, t, "collapse");
}
function G_(e, t) {
  return qh(e, t, "extend");
}
function J_(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && ti(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = sl(n, e.offset, e.type, t, r);
  return Ao(i, t, r) === void 0;
}
function Y_(e, t) {
  const r = Ue();
  for (let n = e; n; ) {
    const i = ri(n, t, r), s = i && Ao(i, t, r);
    if (!s)
      return;
    if (n = xn(s), !n)
      return s;
  }
}
function Vu(e, t) {
  const r = e.anchor, n = r.getNode();
  if (xn(n))
    return !1;
  const i = Oh(n);
  if (!i || !J_(r, t, i))
    return !1;
  const s = ri(i, t, Ue()), o = s && xn(s);
  if (!o)
    return !1;
  const a = Y_(o, t);
  if (!a)
    return !0;
  if (ti(a)) {
    const d = t === "next" ? 0 : a.getTextContentSize();
    return a.select(d, d), !0;
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
function X_(e) {
  const t = e.anchor.getNode(), r = ap(e);
  if (j(r) && !P(r.getFirstChild())) {
    if (_e(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(_e(i) && fi(i)) && i.selectStart(), !0;
      }
    } else return Vt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (_e(t) && j(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Wu(r), !0;
  }
  const n = r?.getParent();
  if (Vt(r) && j(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Wu(n) : n.selectEnd(), !0;
  }
  return !1;
}
function Q_(e, t) {
  const r = Jb(e);
  if (ds(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (Tt(i.getParent()))
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
  if (_e(r) && t?.noteMode === "collapsed") {
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
  const s = Wt(i);
  if (!s || s.getIsCollapsed())
    return !1;
  if (or(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function Z_(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return he(t) && of(t);
}
function eC() {
  const [e] = le();
  return tC(e), null;
}
function tC(e) {
  K(() => {
    if (!e.hasNodes([me]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Xe(
      e.registerNodeTransform(me, iC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(me, yk),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(me, Op),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(me, (t) => Xi(bn("char"), t)),
      e.registerNodeTransform(Ke, sC)
    );
  }, [e]);
}
function aa(e) {
  return e.getChildren().some(P);
}
function rC(e, t) {
  const r = t.getFirstChild();
  if (!P(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (To(n)) {
    const i = n.getTextContent();
    i.startsWith(R) && (i === R ? n.remove() : n.setTextContent(i.slice(R.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function nC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  P(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function iC(e) {
  if (!$(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (aa(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = Y(e, mn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if ($(i) && yn({ style: t, cid: r }, i) && Nt(n, i.getUnknownAttributes()))
    if (aa(i)) {
      if (rC(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  $(s) && yn({ style: t, cid: r }, s) && Nt(n, s.getUnknownAttributes()) && (aa(s) ? nC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function sC(e) {
  const t = e.getParent();
  if (!$(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(Lr) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function Rh(e) {
  return e.replaceAll("	", " ");
}
const ol = (e) => {
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
      n.setData(o, Rh(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(lr, s);
  });
}, al = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", Rh(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(lr, i);
  });
};
function oC() {
  const [e] = le();
  return K(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(qs ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), e.dispatchCommand(lo, null)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), e.dispatchCommand(hn, null)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? al(e) : ol(e)));
    };
    return e.registerRootListener((r, n) => {
      n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
    });
  }, [e]), null;
}
function aC({ logger: e }) {
  const [t] = le();
  return K(() => Xe(
    // When the backslash or forward slash key is typed.
    t.registerCommand(br, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Gn),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(lr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Gn),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(yc, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Gn)
  ), [t, e]), null;
}
function cC({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), v("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: v("span", { className: "text", children: i.title }) });
}
function lC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return v("div", { className: "typeahead-popover", children: v("ul", { children: e.map((i, s) => v(cC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let uC = 0;
class Ci {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${uC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function dC({ options: e } = {}) {
  const [t] = le(), [r, n] = de(() => !t.isEditable()), [i, s] = de({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = de(void 0), c = ze(() => {
    const u = [
      new Ci("Cut", {
        onSelect: () => {
          t.dispatchCommand(hn, null);
        },
        isDisabled: r
      }),
      new Ci("Copy", {
        onSelect: () => {
          t.dispatchCommand(lo, null);
        }
      }),
      new Ci("Paste", {
        onSelect: () => {
          ol(t);
        },
        isDisabled: r
      }),
      new Ci("Paste as Plain Text", {
        onSelect: () => {
          al(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new Ci(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...u, ...f];
  }, [t, r, e]), l = ge(() => {
    s((u) => ({ ...u, isOpen: !1 })), a(void 0);
  }, []);
  K(() => {
    const u = (f) => {
      const p = f.target;
      t.getRootElement() === p || Qf(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
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
  const d = Z(null);
  return ss(() => {
    const u = d.current;
    if (!u)
      return;
    const { width: f, height: p } = u.getBoundingClientRect(), g = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), m = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    u.style.left = `${g}px`, u.style.top = `${m}px`, u.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? yy.createPortal(v("div", { ref: d, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (u) => u.stopPropagation(), children: v(lC, { options: c, selectedItemIndex: o, onOptionClick: (u) => {
    u.isDisabled || (t.update(() => {
      u.onSelect();
    }), l());
  }, onOptionMouseEnter: (u) => {
    a(u);
  } }) }), document.body) : null;
}
function fC() {
  const [e] = le();
  return K(() => e.registerCommand(br, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(qs ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, ur), [e]), null;
}
function pC({ isEditable: e }) {
  const [t] = le();
  return ss(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Hu(e) {
  return !!e && Ac(ie(e));
}
function $h(e) {
  const [t] = le(), r = Z(void 0), n = ge((i) => {
    const s = q(), o = O(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = Hu(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const d = i.getParentOrThrow(), u = i.getIndexWithinParent() + 1, f = _o(d, u);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const p = Vb();
        i.insertAfter(p), r.current = p.getKey(), l = p.getKey();
      }
      Ht(d, u);
    }
    if (a && c && a !== o && a !== l) {
      const d = ie(a);
      M(d) && d.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return K(() => {
    const i = () => {
      const a = e(), c = q(), l = O(c) && c.isCollapsed() ? c.anchor.key : void 0, d = r.current;
      (a || d && d !== l) && (Ir(Dr), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (fs(c) || !c.includes(Xn))
        return;
      const l = q(), d = O(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (Wb(a), r.current = void 0, d !== void 0) {
        const u = c.slice(0, d).split(Xn).length - 1, f = Math.max(0, d - u);
        a.select(f, f);
      }
    }, o = Xe(t.registerCommand(pr, () => (i(), !1), pn), t.registerCommand(bc, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Hu(a);
      }), c && t.update(() => {
        const l = ie(a);
        M(l) && l.remove();
      }, { tag: Dr }), r.current = void 0, !1;
    }, pn), t.registerNodeTransform(Ke, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function hC() {
  const e = q();
  if (!O(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!L(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!he(i) || _o(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || he(s))
    return i;
}
function gC() {
  return $h(hC), null;
}
function mC({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
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
        const d = o.getRootElement(), u = d?.ownerDocument.activeElement, f = d != null && u != null && (d === u || d.contains(u));
        o.update(() => {
          f || Ir(Zm), o.setEditorState(l), o.dispatchCommand(ey, void 0);
        }, { tag: Sf });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function yC({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = le();
  return bC(t, n), kC(i, e, r, n), null;
}
function bC(e, t) {
  const r = Z(void 0), n = Z(void 0), i = e.noteCallers, s = e.crossRefCallers;
  K(() => {
    let o = i;
    (!o || o.length <= 0) && (o = Ox), r.current !== o && (r.current = o, Gu("note-callers", o, t));
  }, [t, i]), K(() => {
    let o = s;
    (!o || o.length <= 0) && (o = Nx), n.current !== o && (n.current = o, Gu("cross-ref-callers", o, t));
  }, [t, s]);
}
function kC(e, t, r, n) {
  K(() => {
    if (!e.hasNodes([me, Se, jt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => MC(s));
    return Xe(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Se, (s) => TC(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(me, xC),
      e.registerNodeTransform(Ke, _C),
      // Ensure NBSP after caller.
      e.registerNodeTransform(jt, CC),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(jt, (s, { prevEditorState: o }) => vC(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(pr, () => SC(e, t, r, n), $t),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function TC(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => or(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    M(i) && !P(i) && i.getTextContent() !== St(e.getCaller()) && e.insertBefore(i);
  }
}
function xC(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => or(o));
  if (!$(e) || !j(t) || !n)
    return;
  const i = Pc(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  M(s) ? s.getTextContent() !== R && (s.setTextContent(R), mo(s)) : e.insertAfter(Vr());
}
function _C(e) {
  const t = Wt(e), r = t?.getChildren(), n = r?.find((o) => or(o));
  if (!M(e) || !j(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!P(e) && j(i) && e.getTextContent() !== R && (e.setTextContent(R), mo(e), e.selectEnd()), $(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Lr) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Pc(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function CC(e) {
  if (!or(e))
    return;
  const t = e.getNextSibling();
  !M(t) || P(t) ? e.insertAfter(Vr()) : t.getTextContent() !== R && (t.setTextContent(R), mo(t));
}
function vC(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = ie(r), a = o?.getParent();
      return or(o) && j(a) && a.getCaller() === $s;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function SC(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = q();
  if (!O(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = nt(o, (c) => j(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = ie(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), vi(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (j(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, vi(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (j(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, vi(e, c, n);
    } else if (!a) {
      const c = nt(o, (l) => j(l));
      if (c && c.getIsCollapsed() && _e(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, vi(e, l, n);
      }
    }
  }
  if (_e(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (On(c) && j(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, vi(e, l, n);
    }
  }
  return !1;
}
function vi(e, t, r) {
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
function MC(e) {
  const t = q();
  if (!O(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (j(i) && M(s)) {
    e.preventDefault();
    const o = gc();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), zi(o);
  }
}
function Gu(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (EC(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function EC(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Po(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!P(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Gi(e);
  return r && t.push(r), t.length > 0 && t.every((n) => M(n) && n.getMode() === "token") ? t : [];
}
function AC(e) {
  const t = e.getParent();
  if (j(t))
    return Po(t).some((r) => r.is(e)) ? t : void 0;
}
function Ys(e) {
  const t = Po(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function PC(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function OC(e) {
  const t = ty();
  if (!O(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= Ys(e);
  const i = PC(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= Ys(e);
}
function Ba(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = AC(t);
  if (r)
    return NC(r, t, e.offset) ? void 0 : r;
}
function NC(e, t, r) {
  const n = Po(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function wC(e) {
  const t = Po(e), r = t[t.length - 1];
  M(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Ht(e, Ys(e));
}
function qC(e = !1) {
  const t = q();
  if (!O(t))
    return !1;
  if (!t.isCollapsed())
    return RC(t.anchor, t.focus);
  const r = Ba(t.anchor);
  if (!r)
    return !1;
  if (!e && OC(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Ht(n, r.getIndexWithinParent());
  } else
    wC(r);
  return !0;
}
function RC(e, t) {
  const r = Ba(e), n = Ba(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && Ju(e, r, i), n && Ju(t, n, !i), !0;
}
function Ju(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), Ys(t), "element");
}
function $C() {
  const [e] = le(), t = Z(!1);
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
  }, [e]), K(() => e.registerCommand(pr, () => (qC(t.current) && Ir(Dr), !1), pn), [e]), null;
}
function IC({ onChange: e }) {
  const [t] = le();
  return K(() => t.registerCommand(pr, () => {
    const r = ch();
    return e?.(r), !1;
  }, $t), [t, e]), null;
}
function LC() {
  const [e] = le();
  return DC(e), null;
}
function DC(e) {
  K(() => {
    if (!e.hasNodes([Qe]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(Qe, (t) => UC(t, e));
  }, [e]);
}
function UC(e, t) {
  rh(t, e.getKey()) && th(e.getFirstChild()), !(!oe(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = ie(e.getKey());
    return oe(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Ih({ onStateChange: e }) {
  const [t] = le(), [r, n] = de(t), i = Z(!1), s = Z(!1), o = Z(void 0), a = Z(void 0), c = ge(() => {
    const l = q();
    let d;
    if (O(l)) {
      const u = l.anchor.getNode(), f = l.focus.getNode();
      let p = u.getKey() === "root" ? u : nt(u, (T) => {
        const C = T.getParent();
        return C !== null && ry(C);
      });
      p === null && (p = u.getTopLevelElementOrThrow()), Qi(p) && (p = nt(u, oe) ?? p);
      const g = p.getKey(), m = r.getElementByKey(g), y = Xb(u, f);
      if (y && jT(y) && (d = y.getMarker()), m !== null && (oe(p) || Tt(p) || ds(p))) {
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
  return K(() => t.registerCommand(pr, (l, d) => (c(), n(d), !1), ur), [t, c]), K(() => Xe(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(ny, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), ur), r.registerCommand(iy, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), ur)), [c, r, e]), null;
}
function FC(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function Kr(e) {
  return e ? _e(e) ? e : nt(e, (r) => _e(r)) ?? void 0 : void 0;
}
function Lh(e) {
  if (!O(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Kr(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function cl(e) {
  return O(e) && e.isCollapsed() && e.anchor.type === "element" || !O(e) && !af(e) ? !1 : e.getNodes().some((t) => he(t));
}
function Dh(e) {
  if (!O(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Kr(r);
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
function Uh(e) {
  if (!O(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Kr(r);
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
  return !!Va(e, t);
}
function Va(e, t) {
  if (!O(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && L(n)) {
    const s = n.getChildren(), o = t === "backward" ? r.offset - 1 : r.offset;
    if (o < 0)
      return;
    const a = s[o];
    return he(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return he(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return he(i) ? i : void 0;
}
function Xs(e, t) {
  if (!O(e))
    return !1;
  const r = Kr(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function ca(e) {
  return cl(e) || Lh(e);
}
function zC(e, t) {
  if (cl(e) || Lh(e))
    return !0;
  if (!O(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Dh(e) && Xs(e, "backward") || Yu(e, "backward");
    case "deleteForward":
      return Uh(e) && Xs(e, "forward") || Yu(e, "forward");
    case "insertText":
      return !1;
  }
}
function KC(e, t) {
  if (!(!O(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Va(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (Dh(e) && Xs(e, "backward")) {
        const n = Kr(e.anchor.getNode());
        if (_e(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Va(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (Uh(e) && Xs(e, "forward")) {
        const i = Kr(e.anchor.getNode())?.getNextSibling();
        if (_e(i))
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
    return af(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!O(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!O(e) || e.isCollapsed())
    return !1;
  const r = Kr(e.anchor.getNode()), n = Kr(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function Fh(e) {
  if (M(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else L(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function jC(e) {
  const t = e.getPreviousSibling();
  if (!_e(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? Fh(r) : fi(t) || t.selectStart();
}
function zh(e) {
  return he(e) || We(e) ? [] : _e(e) ? e.getChildren().flatMap(zh) : [e];
}
function BC(e) {
  const t = [];
  for (const r of e) {
    const n = zh(r);
    n.length !== 0 && (_e(r) && t.length > 0 && t.push(Le(" ")), t.push(...n));
  }
  return t;
}
function Qu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function VC(e) {
  if (Array.isArray(e)) return e;
}
function WC(e, t) {
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
function HC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GC(e, t) {
  return VC(e) || WC(e, t) || JC(e, t) || HC();
}
function JC(e, t) {
  if (e) {
    if (typeof e == "string") return Qu(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Qu(e, t) : void 0;
  }
}
const Kh = Object.entries, Zu = Object.setPrototypeOf, YC = Object.isFrozen, XC = Object.getPrototypeOf, QC = Object.getOwnPropertyDescriptor;
let et = Object.freeze, it = Object.seal, Wn = Object.create, jh = typeof Reflect < "u" && Reflect, Wa = jh.apply, Ha = jh.construct;
et || (et = function(t) {
  return t;
});
it || (it = function(t) {
  return t;
});
Wa || (Wa = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Ha || (Ha = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const jn = He(Array.prototype.forEach), ZC = He(Array.prototype.lastIndexOf), ed = He(Array.prototype.pop), Bn = He(Array.prototype.push), ev = He(Array.prototype.splice), Rr = Array.isArray, wi = He(String.prototype.toLowerCase), la = He(String.prototype.toString), td = He(String.prototype.match), Si = He(String.prototype.replace), rd = He(String.prototype.indexOf), tv = He(String.prototype.trim), rv = He(Number.prototype.toString), nv = He(Boolean.prototype.toString), nd = typeof BigInt > "u" ? null : He(BigInt.prototype.toString), id = typeof Symbol > "u" ? null : He(Symbol.prototype.toString), Ye = He(Object.prototype.hasOwnProperty), Mi = He(Object.prototype.toString), Je = He(RegExp.prototype.test), an = iv(TypeError);
function He(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Wa(e, t, n);
  };
}
function iv(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Ha(e, r);
  };
}
function pe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : wi;
  if (Zu && Zu(e, null), !Rr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (YC(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function sv(e) {
  for (let t = 0; t < e.length; t++)
    Ye(e, t) || (e[t] = null);
  return e;
}
function st(e) {
  const t = Wn(null);
  for (const n of Kh(e)) {
    var r = GC(n, 2);
    const i = r[0], s = r[1];
    Ye(e, i) && (Rr(s) ? t[i] = sv(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = st(s) : t[i] = s);
  }
  return t;
}
function ov(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return rv(e);
    case "boolean":
      return nv(e);
    case "bigint":
      return nd ? nd(e) : "0";
    case "symbol":
      return id ? id(e) : "Symbol()";
    case "undefined":
      return Mi(e);
    case "function":
    case "object": {
      if (e === null)
        return Mi(e);
      const t = e, r = Ut(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Mi(n);
      }
      return Mi(e);
    }
    default:
      return Mi(e);
  }
}
function Ut(e, t) {
  for (; e !== null; ) {
    const n = QC(e, t);
    if (n) {
      if (n.get)
        return He(n.get);
      if (typeof n.value == "function")
        return He(n.value);
    }
    e = XC(e);
  }
  function r() {
    return null;
  }
  return r;
}
function av(e) {
  try {
    return Je(e, ""), !0;
  } catch {
    return !1;
  }
}
const sd = et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ua = et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), da = et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), cv = et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), fa = et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), lv = et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), od = et(["#text"]), ad = et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), pa = et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), cd = et(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), vs = et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), uv = it(/{{[\w\W]*|^[\w\W]*}}/g), dv = it(/<%[\w\W]*|^[\w\W]*%>/g), fv = it(/\${[\w\W]*/g), pv = it(/^data-[\-\w.\u00B7-\uFFFF]+$/), hv = it(/^aria-[\-\w]+$/), ld = it(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), gv = it(/^(?:\w+script|data):/i), mv = it(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), yv = it(/^html$/i), bv = it(/^[a-z][.\w]*(-[.\w]+)+$/i), ud = it(/<[/\w!]/g), dd = it(/<[/\w]/g), kv = it(/<\/no(script|embed|frames)/i), Tv = it(/\/>/i), Ct = {
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
}, xv = function() {
  return typeof window > "u" ? null : window;
}, _v = function(t, r) {
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
}, Nr = function(t, r, n, i) {
  return Ye(t, r) && Rr(t[r]) ? pe(i.base ? st(i.base) : {}, t[r], i.transform) : n;
};
function Bh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : xv();
  const t = (I) => Bh(I);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Ct.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = a.prototype, p = Ut(f, "cloneNode"), g = Ut(f, "remove"), m = Ut(f, "nextSibling"), y = Ut(f, "childNodes"), T = Ut(f, "parentNode"), C = Ut(f, "shadowRoot"), S = Ut(f, "attributes"), E = o && o.prototype ? Ut(o.prototype, "nodeType") : null, A = o && o.prototype ? Ut(o.prototype, "nodeName") : null, x = o && o.prototype ? Ut(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const I = r.createElement("template");
    I.content && I.content.ownerDocument && (r = I.content.ownerDocument);
  }
  let F, D = "", G, V = !1, ae = 0;
  const ce = function() {
    if (ae > 0)
      throw an('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, se = function(h) {
    ce(), ae++;
    try {
      return F.createHTML(h);
    } finally {
      ae--;
    }
  }, Ce = function(h) {
    ce(), ae++;
    try {
      return F.createScriptURL(h);
    } finally {
      ae--;
    }
  }, Ae = function() {
    return V || (G = _v(u, i), V = !0), G;
  }, ee = r, U = ee.implementation, te = ee.createNodeIterator, Me = ee.createDocumentFragment, Ne = ee.getElementsByTagName, Jt = n.importNode;
  let re = fd();
  t.isSupported = typeof Kh == "function" && typeof T == "function" && U && U.createHTMLDocument !== void 0;
  const _t = uv, Jr = dv, fe = fv, lt = pv, Ro = hv, gi = gv, Sr = mv, Ge = bv;
  let ut = ld, ue = null;
  const qn = pe({}, [...sd, ...ua, ...da, ...fa, ...od]);
  let ye = null;
  const mi = pe({}, [...ad, ...pa, ...cd, ...vs]);
  let ve = Object.seal(Wn(null, {
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
  })), Mr = null, Er = null;
  const Yt = Object.seal(Wn(null, {
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
  let Ar = !0, Yr = !0, yi = !1, gs = !0, Dt = !1, N = !0, z = !1, H = !1, J = null, Te = null, dt = !1, Ot = !1, Xr = !1, Qr = !1, Ol = !0, Nl = !1;
  const wl = "user-content-";
  let $o = !0, ms = !1, Rn = {}, Xt = null;
  const Io = pe({}, [
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
  let Lo = null;
  const $l = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ys = "http://www.w3.org/1998/Math/MathML", bs = "http://www.w3.org/2000/svg", Qt = "http://www.w3.org/1999/xhtml";
  let $n = Qt, Do = !1, Uo = null;
  const bm = pe({}, [ys, bs, Qt], la), Il = et(["mi", "mo", "mn", "ms", "mtext"]);
  let Fo = pe({}, Il);
  const Ll = et(["annotation-xml"]);
  let zo = pe({}, Ll);
  const km = pe({}, ["title", "style", "font", "a", "script"]);
  let bi = null;
  const Tm = ["application/xhtml+xml", "text/html"], xm = "text/html";
  let we = null, In = null;
  const _m = r.createElement("form"), Dl = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, Ko = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (In && In === h)
      return;
    (!h || typeof h != "object") && (h = {}), h = st(h), bi = // eslint-disable-next-line unicorn/prefer-includes
    Tm.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? xm : h.PARSER_MEDIA_TYPE, we = bi === "application/xhtml+xml" ? la : wi, ue = Nr(h, "ALLOWED_TAGS", qn, {
      transform: we
    }), ye = Nr(h, "ALLOWED_ATTR", mi, {
      transform: we
    }), Uo = Nr(h, "ALLOWED_NAMESPACES", bm, {
      transform: la
    }), Lo = Nr(h, "ADD_URI_SAFE_ATTR", $l, {
      transform: we,
      base: $l
    }), ql = Nr(h, "ADD_DATA_URI_TAGS", Rl, {
      transform: we,
      base: Rl
    }), Xt = Nr(h, "FORBID_CONTENTS", Io, {
      transform: we
    }), Mr = Nr(h, "FORBID_TAGS", st({}), {
      transform: we
    }), Er = Nr(h, "FORBID_ATTR", st({}), {
      transform: we
    }), Rn = Ye(h, "USE_PROFILES") ? h.USE_PROFILES && typeof h.USE_PROFILES == "object" ? st(h.USE_PROFILES) : h.USE_PROFILES : !1, Ar = h.ALLOW_ARIA_ATTR !== !1, Yr = h.ALLOW_DATA_ATTR !== !1, yi = h.ALLOW_UNKNOWN_PROTOCOLS || !1, gs = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Dt = h.SAFE_FOR_TEMPLATES || !1, N = h.SAFE_FOR_XML !== !1, z = h.WHOLE_DOCUMENT || !1, Ot = h.RETURN_DOM || !1, Xr = h.RETURN_DOM_FRAGMENT || !1, Qr = h.RETURN_TRUSTED_TYPE || !1, dt = h.FORCE_BODY || !1, Ol = h.SANITIZE_DOM !== !1, Nl = h.SANITIZE_NAMED_PROPS || !1, $o = h.KEEP_CONTENT !== !1, ms = h.IN_PLACE || !1, ut = av(h.ALLOWED_URI_REGEXP) ? h.ALLOWED_URI_REGEXP : ld, $n = typeof h.NAMESPACE == "string" ? h.NAMESPACE : Qt, Fo = Ye(h, "MATHML_TEXT_INTEGRATION_POINTS") && h.MATHML_TEXT_INTEGRATION_POINTS && typeof h.MATHML_TEXT_INTEGRATION_POINTS == "object" ? st(h.MATHML_TEXT_INTEGRATION_POINTS) : pe({}, Il), zo = Ye(h, "HTML_INTEGRATION_POINTS") && h.HTML_INTEGRATION_POINTS && typeof h.HTML_INTEGRATION_POINTS == "object" ? st(h.HTML_INTEGRATION_POINTS) : pe({}, Ll);
    const _ = Ye(h, "CUSTOM_ELEMENT_HANDLING") && h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING == "object" ? st(h.CUSTOM_ELEMENT_HANDLING) : Wn(null);
    if (ve = Wn(null), Ye(_, "tagNameCheck") && Dl(_.tagNameCheck) && (ve.tagNameCheck = _.tagNameCheck), Ye(_, "attributeNameCheck") && Dl(_.attributeNameCheck) && (ve.attributeNameCheck = _.attributeNameCheck), Ye(_, "allowCustomizedBuiltInElements") && typeof _.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = _.allowCustomizedBuiltInElements), it(ve), Dt && (Yr = !1), Xr && (Ot = !0), Rn && (ue = pe({}, od), ye = Wn(null), Rn.html === !0 && (pe(ue, sd), pe(ye, ad)), Rn.svg === !0 && (pe(ue, ua), pe(ye, pa), pe(ye, vs)), Rn.svgFilters === !0 && (pe(ue, da), pe(ye, pa), pe(ye, vs)), Rn.mathMl === !0 && (pe(ue, fa), pe(ye, cd), pe(ye, vs))), Yt.tagCheck = null, Yt.attributeCheck = null, Ye(h, "ADD_TAGS") && (typeof h.ADD_TAGS == "function" ? Yt.tagCheck = h.ADD_TAGS : Rr(h.ADD_TAGS) && (ue === qn && (ue = st(ue)), pe(ue, h.ADD_TAGS, we))), Ye(h, "ADD_ATTR") && (typeof h.ADD_ATTR == "function" ? Yt.attributeCheck = h.ADD_ATTR : Rr(h.ADD_ATTR) && (ye === mi && (ye = st(ye)), pe(ye, h.ADD_ATTR, we))), Ye(h, "ADD_URI_SAFE_ATTR") && Rr(h.ADD_URI_SAFE_ATTR) && pe(Lo, h.ADD_URI_SAFE_ATTR, we), Ye(h, "FORBID_CONTENTS") && Rr(h.FORBID_CONTENTS) && (Xt === Io && (Xt = st(Xt)), pe(Xt, h.FORBID_CONTENTS, we)), Ye(h, "ADD_FORBID_CONTENTS") && Rr(h.ADD_FORBID_CONTENTS) && (Xt === Io && (Xt = st(Xt)), pe(Xt, h.ADD_FORBID_CONTENTS, we)), $o && (ue["#text"] = !0), z && pe(ue, ["html", "head", "body"]), ue.table && (pe(ue, ["tbody"]), delete Mr.tbody), h.TRUSTED_TYPES_POLICY) {
      if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw an('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw an('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const w = F;
      F = h.TRUSTED_TYPES_POLICY;
      try {
        D = se("");
      } catch (B) {
        throw F = w, B;
      }
    } else h.TRUSTED_TYPES_POLICY === null ? (F = void 0, D = "") : (F === void 0 && (F = Ae()), F && typeof D == "string" && (D = se("")));
    et && et(h), In = h;
  }, Ul = pe({}, [...ua, ...da, ...cv]), Fl = pe({}, [...fa, ...lv]), Cm = function(h, _, w) {
    return _.namespaceURI === Qt ? h === "svg" : _.namespaceURI === ys ? h === "svg" && (w === "annotation-xml" || Fo[w]) : !!Ul[h];
  }, vm = function(h, _, w) {
    return _.namespaceURI === Qt ? h === "math" : _.namespaceURI === bs ? h === "math" && zo[w] : !!Fl[h];
  }, Sm = function(h, _, w) {
    return _.namespaceURI === bs && !zo[w] || _.namespaceURI === ys && !Fo[w] ? !1 : !Fl[h] && (km[h] || !Ul[h]);
  }, Mm = function(h) {
    let _ = T(h);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: $n,
      tagName: "template"
    });
    const w = wi(h.tagName), B = wi(_.tagName);
    return Uo[h.namespaceURI] ? h.namespaceURI === bs ? Cm(w, _, B) : h.namespaceURI === ys ? vm(w, _, B) : h.namespaceURI === Qt ? Sm(w, _, B) : !!(bi === "application/xhtml+xml" && Uo[h.namespaceURI]) : !1;
  }, Pr = function(h) {
    Bn(t.removed, {
      element: h
    });
    try {
      T(h).removeChild(h);
    } catch {
      if (g(h), !T(h))
        throw an("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ks = function(h) {
    ki(h);
    const _ = y(h);
    if (_) {
      const B = [];
      jn(_, (W) => {
        Bn(B, W);
      }), jn(B, (W) => {
        try {
          g(W);
        } catch {
        }
      });
    }
    const w = S(h);
    if (w)
      for (let B = w.length - 1; B >= 0; --B) {
        const W = w[B], ne = W && W.name;
        if (typeof ne == "string")
          try {
            h.removeAttribute(ne);
          } catch {
          }
      }
  }, Zr = function(h, _) {
    try {
      Bn(t.removed, {
        attribute: _.getAttributeNode(h),
        from: _
      });
    } catch {
      Bn(t.removed, {
        attribute: null,
        from: _
      });
    }
    if (_.removeAttribute(h), h === "is")
      if (Ot || Xr)
        try {
          Pr(_);
        } catch {
        }
      else
        try {
          _.setAttribute(h, "");
        } catch {
        }
  }, Em = function(h) {
    const _ = S(h);
    if (_)
      for (let w = _.length - 1; w >= 0; --w) {
        const B = _[w], W = B && B.name;
        if (!(typeof W != "string" || ye[we(W)]))
          try {
            h.removeAttribute(W);
          } catch {
          }
      }
  }, ki = function(h) {
    const _ = [h];
    for (; _.length > 0; ) {
      const w = _.pop();
      (E ? E(w) : w.nodeType) === Ct.element && Em(w);
      const W = y(w);
      if (W)
        for (let ne = W.length - 1; ne >= 0; --ne)
          _.push(W[ne]);
    }
  }, Am = function(h) {
    if (!N)
      return;
    const _ = [h];
    for (; _.length > 0; ) {
      const w = _.pop(), B = E ? E(w) : w.nodeType;
      if (B === Ct.processingInstruction || B === Ct.comment && Je(dd, w.data)) {
        try {
          g(w);
        } catch {
        }
        continue;
      }
      if (B === Ct.element) {
        const ne = w, be = we(A ? A(w) : w.nodeName);
        try {
          ne.hasAttribute && ne.hasAttribute("patchsrc") && ne.removeAttribute("patchsrc"), ne.hasAttribute && ne.hasAttribute("for") && be !== "label" && be !== "output" && ne.removeAttribute("for");
        } catch {
        }
      }
      const W = y(w);
      if (W)
        for (let ne = W.length - 1; ne >= 0; --ne)
          _.push(W[ne]);
    }
  }, zl = function(h) {
    let _ = null, w = null;
    if (dt)
      h = "<remove></remove>" + h;
    else {
      const ne = td(h, /^[\r\n\t ]+/);
      w = ne && ne[0];
    }
    bi === "application/xhtml+xml" && $n === Qt && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const B = F ? se(h) : h;
    if ($n === Qt)
      try {
        _ = new d().parseFromString(B, bi);
      } catch {
      }
    if (!_ || !_.documentElement) {
      _ = U.createDocument($n, "template", null);
      try {
        _.documentElement.innerHTML = Do ? D : B;
      } catch {
      }
    }
    const W = _.body || _.documentElement;
    return h && w && W.insertBefore(r.createTextNode(w), W.childNodes[0] || null), $n === Qt ? Ne.call(_, z ? "html" : "body")[0] : z ? _.documentElement : W;
  }, Kl = function(h) {
    const _ = x ? x(h) : h.ownerDocument;
    return te.call(
      _ || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Ts = function(h) {
    return h = Si(h, _t, " "), h = Si(h, Jr, " "), h = Si(h, fe, " "), h;
  }, jo = function(h) {
    var _;
    h.normalize();
    const w = x ? x(h) : h.ownerDocument, B = te.call(
      w || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let W = B.nextNode();
    for (; W; )
      W.data = Ts(W.data), W = B.nextNode();
    const ne = (_ = h.querySelectorAll) === null || _ === void 0 ? void 0 : _.call(h, "template");
    ne && jn(ne, (be) => {
      Ln(be.content) && jo(be.content);
    });
  }, xs = function(h) {
    const _ = A ? A(h) : null;
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
  }, Ln = function(h) {
    if (!E || typeof h != "object" || h === null)
      return !1;
    try {
      return E(h) === Ct.documentFragment;
    } catch {
      return !1;
    }
  }, Ti = function(h) {
    if (!E || typeof h != "object" || h === null)
      return !1;
    try {
      return typeof E(h) == "number";
    } catch {
      return !1;
    }
  };
  function Zt(I, h, _) {
    I.length !== 0 && jn(I, (w) => {
      w.call(t, h, _, In);
    });
  }
  const Pm = function(h, _) {
    return !!(N && h.hasChildNodes() && !Ti(h.firstElementChild) && Je(ud, h.textContent) && Je(ud, h.innerHTML) || N && h.namespaceURI === Qt && _ === "style" && Ti(h.firstElementChild) || h.nodeType === Ct.processingInstruction || N && h.nodeType === Ct.comment && Je(dd, h.data));
  }, Om = function(h, _, w) {
    if (!Mr[_] && Wl(_) && (ve.tagNameCheck instanceof RegExp && Je(ve.tagNameCheck, _) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(_)))
      return !1;
    if ($o && !Xt[_]) {
      const B = T(h), W = y(h);
      if (W && B) {
        const ne = W.length;
        for (let be = ne - 1; be >= 0; --be) {
          const qe = h === w ? p(W[be], !0) : W[be];
          B.insertBefore(qe, m(h));
        }
      }
    }
    return Pr(h), !0;
  }, jl = function(h, _, w, B) {
    return h.length === 0 ? _ : _ === w || _ === B ? st(_) : _;
  }, Bl = function(h, _) {
    if (Zt(re.beforeSanitizeElements, h, null), h !== _ && T(h) === null)
      return ms && ki(h), !0;
    if (xs(h))
      return Pr(h), !0;
    const w = we(A ? A(h) : h.nodeName);
    if (ue = jl(re.uponSanitizeElement, ue, qn, J), Zt(re.uponSanitizeElement, h, {
      tagName: w,
      allowedTags: ue
    }), h !== _ && T(h) === null)
      return ms && ki(h), !0;
    if (Pm(h, w))
      return Pr(h), !0;
    if (Mr[w] || !(Yt.tagCheck instanceof Function && Yt.tagCheck(w)) && !ue[w]) {
      const W = Om(h, w, _);
      return W === !1 && Zt(re.afterSanitizeElements, h, null), W;
    }
    if ((E ? E(h) : h.nodeType) === Ct.element && !Mm(h) || (w === "noscript" || w === "noembed" || w === "noframes") && Je(kv, h.innerHTML))
      return Pr(h), !0;
    if (Dt && h.nodeType === Ct.text) {
      const W = Ts(h.textContent);
      h.textContent !== W && (Bn(t.removed, {
        element: h.cloneNode()
      }), h.textContent = W);
    }
    return Zt(re.afterSanitizeElements, h, null), !1;
  }, Vl = function(h, _, w) {
    if (Er[_] || N && _ === "patchsrc" || N && _ === "for" && h !== "label" && h !== "output" || Ol && (_ === "id" || _ === "name") && (w in r || w in _m))
      return !1;
    const B = ye[_] || Yt.attributeCheck instanceof Function && Yt.attributeCheck(_, h);
    if (!(Yr && Je(lt, _))) {
      if (!(Ar && Je(Ro, _))) {
        if (B) {
          if (!Lo[_]) {
            if (!Je(ut, Si(w, Sr, ""))) {
              if (!((_ === "src" || _ === "xlink:href" || _ === "href") && h !== "script" && rd(w, "data:") === 0 && ql[h])) {
                if (!(yi && !Je(gi, Si(w, Sr, "")))) {
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
          !(Wl(h) && (ve.tagNameCheck instanceof RegExp && Je(ve.tagNameCheck, h) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(h)) && (ve.attributeNameCheck instanceof RegExp && Je(ve.attributeNameCheck, _) || ve.attributeNameCheck instanceof Function && ve.attributeNameCheck(_, h)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          _ === "is" && ve.allowCustomizedBuiltInElements && (ve.tagNameCheck instanceof RegExp && Je(ve.tagNameCheck, w) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(w)))
        ) return !1;
      }
    }
    return !0;
  }, Nm = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Wl = function(h) {
    return !Nm[wi(h)] && Je(Ge, h);
  }, wm = function(h, _, w, B) {
    if (F && typeof u == "object" && typeof u.getAttributeType == "function" && !w)
      switch (u.getAttributeType(h, _)) {
        case "TrustedHTML":
          return se(B);
        case "TrustedScriptURL":
          return Ce(B);
      }
    return B;
  }, qm = function(h, _, w, B) {
    try {
      w ? h.setAttributeNS(w, _, B) : h.setAttribute(_, B), xs(h) ? Pr(h) : ed(t.removed);
    } catch {
      Zr(_, h);
    }
  }, Hl = function(h) {
    Zt(re.beforeSanitizeAttributes, h, null);
    const _ = h.attributes;
    if (!_ || xs(h))
      return;
    ye = jl(re.uponSanitizeAttribute, ye, mi, Te);
    const w = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ye,
      forceKeepAttr: void 0
    };
    let B = _.length;
    const W = we(h.nodeName);
    for (; B--; ) {
      const ne = _[B], be = ne.name, qe = ne.namespaceURI, gt = ne.value, mt = we(be), Vo = gt;
      let ft = be === "value" ? Vo : tv(Vo);
      if (w.attrName = mt, w.attrValue = ft, w.keepAttr = !0, w.forceKeepAttr = void 0, Zt(re.uponSanitizeAttribute, h, w), ft = w.attrValue, Nl && (mt === "id" || mt === "name") && rd(ft, wl) !== 0 && (Zr(be, h), ft = wl + ft), N && Je(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ft)) {
        Zr(be, h);
        continue;
      }
      if (mt === "attributename" && td(ft, "href")) {
        Zr(be, h);
        continue;
      }
      if (!w.forceKeepAttr) {
        if (!w.keepAttr) {
          Zr(be, h);
          continue;
        }
        if (!gs && Je(Tv, ft)) {
          Zr(be, h);
          continue;
        }
        if (Dt && (ft = Ts(ft)), !Vl(W, mt, ft)) {
          Zr(be, h);
          continue;
        }
        ft = wm(W, mt, qe, ft), ft !== Vo && qm(h, be, qe, ft);
      }
    }
    Zt(re.afterSanitizeAttributes, h, null);
  }, _s = function(h) {
    let _ = null;
    const w = Kl(h);
    for (Zt(re.beforeSanitizeShadowDOM, h, null); _ = w.nextNode(); )
      if (Zt(re.uponSanitizeShadowNode, _, null), Bl(_, h), Hl(_), Ln(_.content) && _s(_.content), (E ? E(_) : _.nodeType) === Ct.element) {
        const W = C(_);
        Ln(W) && (Bo(W), _s(W));
      }
    Zt(re.afterSanitizeShadowDOM, h, null);
  }, Bo = function(h) {
    const _ = [{
      node: h,
      shadow: null
    }];
    for (; _.length > 0; ) {
      const w = _.pop();
      if (w.shadow) {
        _s(w.shadow);
        continue;
      }
      const B = w.node, ne = (E ? E(B) : B.nodeType) === Ct.element, be = y(B);
      if (be)
        for (let qe = be.length - 1; qe >= 0; --qe)
          _.push({
            node: be[qe],
            shadow: null
          });
      if (ne) {
        const qe = A ? A(B) : null;
        if (typeof qe == "string" && we(qe) === "template") {
          const gt = B.content;
          Ln(gt) && _.push({
            node: gt,
            shadow: null
          });
        }
      }
      if (ne) {
        const qe = C(B);
        Ln(qe) && _.push({
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
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, w = null, B = null, W = null;
    if (Do = !I, Do && (I = "<!-->"), typeof I != "string" && !Ti(I) && (I = ov(I), typeof I != "string"))
      throw an("dirty is not a string, aborting");
    if (!t.isSupported)
      return I;
    H ? (ue = J, ye = Te) : Ko(h), (re.uponSanitizeElement.length > 0 || re.uponSanitizeAttribute.length > 0) && (ue = st(ue)), re.uponSanitizeAttribute.length > 0 && (ye = st(ye)), t.removed = [];
    const ne = ms && typeof I != "string" && Ti(I);
    if (ne) {
      Am(I);
      const gt = A ? A(I) : I.nodeName;
      if (typeof gt == "string") {
        const mt = we(gt);
        if (!ue[mt] || Mr[mt])
          throw ks(I), an("root node is forbidden and cannot be sanitized in-place");
      }
      if (xs(I))
        throw ks(I), an("root node is clobbered and cannot be sanitized in-place");
      try {
        Bo(I);
      } catch (mt) {
        throw ks(I), mt;
      }
    } else if (Ti(I))
      _ = zl("<!---->"), w = _.ownerDocument.importNode(I, !0), w.nodeType === Ct.element && w.nodeName === "BODY" || w.nodeName === "HTML" ? _ = w : _.appendChild(w), Bo(w);
    else {
      if (!Ot && !Dt && !z && // eslint-disable-next-line unicorn/prefer-includes
      I.indexOf("<") === -1)
        return F && Qr ? se(I) : I;
      if (_ = zl(I), !_)
        return Ot ? null : Qr ? D : "";
    }
    _ && dt && Pr(_.firstChild);
    const be = ne ? I : _;
    try {
      const gt = Kl(be);
      for (; B = gt.nextNode(); )
        Bl(B, be), Hl(B), Ln(B.content) && _s(B.content);
    } catch (gt) {
      throw ne && (ks(I), jn(t.removed, (mt) => {
        mt.element && ki(mt.element);
      })), gt;
    }
    if (ne)
      return jn(t.removed, (gt) => {
        gt.element && ki(gt.element);
      }), Dt && jo(I), I;
    if (Ot) {
      if (Dt && jo(_), Xr)
        for (W = Me.call(_.ownerDocument); _.firstChild; )
          W.appendChild(_.firstChild);
      else
        W = _;
      return (ye.shadowroot || ye.shadowrootmode) && (W = Jt.call(n, W, !0)), W;
    }
    let qe = z ? _.outerHTML : _.innerHTML;
    return z && ue["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && Je(yv, _.ownerDocument.doctype.name) && (qe = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + qe), Dt && (qe = Ts(qe)), F && Qr ? se(qe) : qe;
  }, t.setConfig = function() {
    let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ko(I), H = !0, J = ue, Te = ye;
  }, t.clearConfig = function() {
    In = null, H = !1, J = null, Te = null, F = G, D = "";
  }, t.isValidAttribute = function(I, h, _) {
    In || Ko({});
    const w = we(I), B = we(h);
    return Vl(w, B, _);
  }, t.addHook = function(I, h) {
    typeof h == "function" && Ye(re, I) && Bn(re[I], h);
  }, t.removeHook = function(I, h) {
    if (Ye(re, I)) {
      if (h !== void 0) {
        const _ = ZC(re[I], h);
        return _ === -1 ? void 0 : ev(re[I], _, 1)[0];
      }
      return ed(re[I]);
    }
  }, t.removeHooks = function(I) {
    Ye(re, I) && (re[I] = []);
  }, t.removeAllHooks = function() {
    re = fd();
  }, t;
}
var Cv = Bh();
function vv({ structureProtectionMode: e = "off" }) {
  const [t] = le(), r = Z(void 0), [n, i] = de(void 0), s = ge((o) => {
    r.current = o, i(o);
  }, []);
  return K(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const g = FC(p);
      if (!g)
        return !1;
      const m = q();
      return e === "protected" ? m && zC(m, g) ? (p.preventDefault(), !0) : !1 : g !== "deleteBackward" && g !== "deleteForward" ? !1 : a(g, p);
    }, a = (p, g) => {
      const m = q(), y = r.current;
      if (y && m && Xu(m, y)) {
        if (s(void 0), g.preventDefault(), p !== y.intent)
          return !0;
        const C = ie(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (C) {
            const S = C.getParent(), E = C.getPreviousSibling(), A = C.getNextSibling();
            C.remove(), E ? Fh(E) : A && M(A) ? A.select(0, 0) : S?.selectStart();
          }
        } else y.kind === "selection" ? O(m) && m.removeText() : _e(C) && jC(C);
        return !0;
      }
      if (!m)
        return !1;
      const T = KC(m, p);
      if (T) {
        if (T.kind === "verse") {
          const C = cf();
          C.add(T.node.getKey()), zi(C);
        } else {
          const C = gc();
          C.anchor.set(T.node.getKey(), 0, "element"), C.focus.set(T.node.getKey(), T.node.getChildrenSize(), "element"), zi(C);
        }
        return s({ key: T.node.getKey(), kind: T.kind, intent: p }), g.preventDefault(), !0;
      }
      if (O(m) && !m.isCollapsed() && cl(m)) {
        const C = m.getNodes().filter(he).map((A) => A.getKey()), { anchor: S, focus: E } = m;
        return s({
          kind: "selection",
          intent: p,
          key: C[0],
          anchor: { key: S.key, offset: S.offset, type: S.type },
          focus: { key: E.key, offset: E.offset, type: E.type }
        }), g.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const g = q();
      return !g || !ca(g) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, g) => {
      if (!p)
        return !1;
      const m = Cv.sanitize(p), y = new DOMParser().parseFromString(m, "text/html"), T = BC(My(t, y)), C = q();
      return O(C) && C.insertNodes(T), g.preventDefault(), !0;
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const g = q();
      return g && ca(g) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const g = q();
      return g && ca(g) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Xu(q(), p) || s(void 0);
      });
    };
    return Xe(t.registerCommand(br, o, $e), t.registerCommand(hn, c, $e), t.registerCommand(lr, d, $e), t.registerCommand(sy, c, $e), t.registerCommand(yc, u, $e), t.registerCommand(mc, c, $e), t.registerUpdateListener(f));
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
const $A = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function Sv({ textDirection: e }) {
  const [t] = le();
  return Mv(t, e), null;
}
function Mv(e, t) {
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
function Ev() {
  const [e] = le();
  return Av(e), null;
}
function Av(e) {
  K(() => {
    if (!e.hasNodes([me, xt, Se, Ke, pt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Xe(
      e.registerNodeTransform(Ke, Pv),
      e.registerNodeTransform(Ke, (t) => Ov(t, e)),
      e.registerNodeTransform(pt, hd),
      e.registerNodeTransform(xt, hd),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(pt, (t) => {
        Xi(bn("va"), t), Xi(bn("vp"), t);
      })
    );
  }, [e]);
}
function Pv(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || j(r) || $(n) || $(r) || xe(n) || xe(r) || Ie(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  Y(e, Q) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Be(n))
    return;
  if (he(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  he(r) && Wc(e);
}
function Ov(e, t) {
  const r = e.getParent();
  !Ie(r) || !e.isAttached() || rh(t, e.getKey()) && r.insertAfter(e);
}
function hd(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; xe(t); )
    t = t.getLastChild();
  ($(t) || M(t) && xe(t.getParent())) && e.insertBefore(Le(" "));
}
function ll(e) {
  if (!j(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !Ac(n)) ? void 0 : e;
}
function Nv(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (L(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function wv() {
  const e = q();
  if (!(!O(e) || !e.isCollapsed()))
    return ll(Nv(e.anchor));
}
function qv(e) {
  const t = q();
  let r;
  return O(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Vh(e.target)), r ? ll(nt(r, j)) : void 0;
}
function Vh(e) {
  const t = oy(e)?.anchorNode;
  if (sf(t))
    return ls(t) ?? void 0;
}
function Rv(e) {
  if (q())
    return;
  const t = Vh(e);
  return t ? ll(nt(t, j)) : void 0;
}
function $v() {
  const [e] = le(), t = $h(wv);
  return K(() => {
    const r = (n) => {
      Ir(Dr), t(n);
    };
    return Xe(e.registerCommand(pr, () => {
      const n = Rv(e.getRootElement());
      return n && r(n), !1;
    }, pn), e.registerCommand(co, (n) => {
      const i = qv(n);
      return i && r(i), !1;
    }, pn));
  }, [e, t]), null;
}
function Iv({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = r_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return v(t_, { trigger: e, items: i });
}
function Lv({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, d = ze(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? v(Fv, { trigger: e, harness: i }) : v(Iv, { trigger: e, scriptureReference: d, contextMarker: r, getMarkerAction: n });
}
const Dv = [" ", "*"];
function Uv(e, t) {
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
function Fv({ trigger: e, harness: t }) {
  const [r] = le(), [n, i] = de(void 0), s = Z({ query: "", options: [] }), o = Z(0), a = ge((f, p, g) => {
    const m = p.find((y) => y.kind === "note" && y.marker === f);
    if (m) {
      t.apply(m, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = q();
      O(y) && y.insertText(`${e}${f}${g ? " " : ""}`);
    });
  }, [r, t, e]);
  K(() => Xe(r.registerCommand(br, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const m = s.current.query;
        return m ? (a(m, n.items, !1), ay(() => {
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
  }, $e), r.registerCommand(lf, (f) => {
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
  }, []), d = ge((f) => {
    const { markerMenuItem: p, applyOpts: g } = f;
    t.apply(p, g);
  }, [t]), u = ze(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    Uv(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && v(ph, { isOpen: !0, children: ({ placement: f }) => v(
    mh,
    { options: u ?? [], onSelectOption: d, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? Dv : void 0 },
    n.session
  ) });
}
function Wh(e) {
  return e.replaceAll(R, "~").replace(/ {2,}/g, (r) => R.repeat(r.length));
}
function zv(e) {
  return e.replaceAll(R, " ").replaceAll("~", R);
}
function Kv(e) {
  return e.replace(/ {2,}/g, " ");
}
let Qs;
function jv(e) {
  e && (Qs = e);
}
function Ga(e) {
  return Eo(e);
}
function Bv(e, t) {
  return e.isEmpty() ? tf : Hh(e.toJSON(), t);
}
function Hh(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && go(r[0]) && (!r[0].children || r[0].children.length === 0))
    return tf;
  if (r.some(ST)) {
    Qs?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Gh(r), i = Ft(n, t);
  return i ? { type: fr, version: dr, content: i } : void 0;
}
function Vv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), Ee({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function Wv(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Ee({
    type: Pt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function Hv(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = cp(r, a, c), Ee({
    type: Pt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function Gv(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = cp(t, o, a), Ee({
    type: pt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function Jv(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !Ga(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(R) && (t[0] = a.slice(1), t[0] === "" && t.shift());
  }
  return Ee({
    type: n,
    marker: o,
    ...s,
    content: t && t.length > 0 ? t : void 0
  });
}
function Yv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Ee({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function Xv(e, t) {
  const { unknownAttributes: r } = e;
  return Ee({ type: Dp, ...r, content: t });
}
function Qv(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Ee({ type: zp, marker: r, ...n, content: t });
}
function Zv(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Ee({
    type: jp,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function eS(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return Ee({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function Hn(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Ee({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Tp({ sid: n, eid: i, ...s }, o)
  });
}
function tS(e) {
  return e.text;
}
function rS(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Ee({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function nS(e) {
  const { marker: t } = e;
  return {
    type: Ks,
    marker: t === "" ? void 0 : t
  };
}
function gd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function iS(e, t, r, n, i) {
  const s = Bt.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const d = Hn({
      type: s,
      marker: Jn,
      eid: l
    });
    i.push(d);
  }), o.forEach((l) => {
    const d = Hn({
      type: s,
      marker: gn,
      sid: l
    });
    i.push(d);
  }), t.length === 0) {
    const l = Hn({
      type: s,
      marker: gn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Hn({
      type: s,
      marker: Jn
    });
    i.push(l);
  }
  (!n || !Uf(n)) && t.forEach((l) => {
    const d = Hn({
      type: s,
      marker: Jn,
      eid: l
    });
    i.push(d);
  });
}
function Ft(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, d = a, u = a, f = a, p = a, g = a, m = a, y = a;
    switch (a.type) {
      case Lt.getType():
        i.push(
          Vv(
            l,
            Ft(l.children, t)
          )
        );
        break;
      case ir.getType():
        i.push(Wv(a));
        break;
      case Pt.getType():
        i.push(
          Hv(
            d,
            Ft(d.children, t)
          )
        );
        break;
      case xt.getType():
      case pt.getType():
        i.push(Gv(a));
        break;
      case me.getType():
        i.push(
          Jv(
            u,
            Ft(u.children, t, void 0, !0),
            t
          )
        );
        break;
      case Qe.getType():
        i.push(
          Yv(
            f,
            Ft(f.children, t)
          )
        );
        break;
      case Pn.getType():
        i.push(
          Xv(
            a,
            Ft(a.children, t)
          )
        );
        break;
      case ai.getType():
        i.push(
          Qv(
            a,
            Ft(a.children, t)
          )
        );
        break;
      case ci.getType():
        i.push(
          Zv(
            a,
            Ft(a.children, t)
          )
        );
        break;
      case Se.getType():
        i.push(
          eS(
            p,
            Ft(p.children, t, p.caller)
          )
        );
        break;
      case _r.getType():
      case Tr.getType():
      case jt.getType():
      case uf.getType():
      case sr.getType():
        break;
      case Ze.getType():
        if (s = Ft(
          m.children,
          t,
          r,
          n
        ), s) {
          const T = m.typedIDs[$r];
          if (T)
            iS(s, T, o, e[c + 1], i), o = T;
          else {
            const C = s.shift();
            C && (typeof C == "string" ? gd(i, C) : i.push(C)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Bt.getType():
        i.push(Hn(a));
        break;
      case Ke.getType():
        if (g.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !fs(g.text) && // Presentation NBSP (spacers and empty-char placeholders) is excluded per view. In
        // Standard view the test is by bytes: a data NBSP displays there as `~`, so a
        // bare-NBSP node is always scaffolding, tagged or not. Elsewhere it is by tag: an
        // untagged lone NBSP is content (an authored `~`), since every presentation builder
        // tags its output. An untagged structural separator a split or deletion strands at a
        // char span's start is caught instead by `createCharMarker`'s separator strip.
        (Ga(t) ? g.text !== R : !sk(g)) && !g.text.startsWith(Tc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        g[as]?.textType !== "attribute" && (!r || g.text !== St(r))) {
          let T = tS(g);
          Ga(t) && (n && T.startsWith(R) && (T = T.slice(1)), T = Kv(zv(T))), gd(i, T);
        }
        break;
      case En.getType():
        i.push(
          rS(
            y,
            Ft(y.children, t)
          )
        );
        break;
      case vr.getType():
        i.push(nS(a));
        break;
      case li.getType():
        Qs?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Qs?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function Gh(e) {
  const t = e.findIndex((r) => go(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Gh(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const ha = {
  initialize: jv,
  deserializeEditorState: Bv
}, sS = /^sd\d*$/, oS = /* @__PURE__ */ new Set([
  ...Object.entries(Sa).filter(
    ([e, t]) => t.category === k.TitlesHeadings && t.type === b.Paragraph && !sS.test(e)
  ).map(([e]) => e),
  "qa"
]);
function aS(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Bf(i) || ip(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!Yb(i)) {
      t && Zs(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Ec(i) && oS.has(i.marker) && !Zs(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Jh(i.children, t).forEach((s) => {
      const o = cS(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = lS(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function Jh(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Yh(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Uf(i)) {
      const s = Jh(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(md(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [md(i, c.nodes)] });
      });
      return;
    }
    t && Zs(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function md(e, t) {
  return { ...e, children: t };
}
function Yh(e) {
  return Zp(e) && e.number !== "";
}
function Zs(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Yh(r) || Zs(r)) : !1;
}
function cS(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function lS(e) {
  return {
    type: js,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Yp
  };
}
const yd = Qh([]), uS = {
  type: uf.getType(),
  version: 1
};
let ul = [], X, _n, Xh, kt;
function dS(e, t) {
  ul = [], hS(e), gS(t);
}
function fS(e = 0) {
}
function pS(e, t) {
  X = t ?? Mo();
  let r;
  return e ? (e.type !== fr && kt?.warn(`This USJ type '${e.type}' didn't match the expected type '${fr}'.`), e.version !== dr && kt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${dr}'.`
  ), e.content.length > 0 ? (r = Qa(wr(e.content)), es(X) && (r = aS(r, kt))) : r = [yd]) : r = [yd], Xh?.(ul), {
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
function hS(e) {
  e && (_n = e), e?.addMissingComments && (Xh = e.addMissingComments);
}
function gS(e) {
  e && (kt = e);
}
function dl() {
  return Eo(X);
}
function mS(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function yS(e) {
  let { marker: t } = e;
  t !== Bi && kt?.warn(`Unexpected book marker '${t}'!`), t = t ?? Bi;
  const { code: r } = e;
  (!r || !Lt.isValidBookCode(r)) && kt?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  X?.markerMode === "editable" || X?.markerMode === "visible" ? n.push(
    yt("marker", Oe(t) + " " + r + R)
  ) : X?.hasGutterParaMarkers && n.push(yt("marker", Oe(t) + R, !0));
  const i = mS(e.content);
  i && n.push(ct(dl() ? Wh(i) : i));
  const s = De(e, Pb);
  return Ee({
    type: Lt.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: Kf
  });
}
function bS(e) {
  let { marker: t } = e;
  t !== Us && kt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Us;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = De(e, Ob);
  let a;
  X?.markerMode === "visible" && (a = !0);
  const c = [
    ct(It(t, r) ?? "")
  ];
  return X?.markerMode === "editable" && $S(i, s, c), X?.markerMode === "editable" ? Ee({
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
    version: Vf
  }) : Ee({
    type: ir.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Yf
  });
}
function kS(e) {
  let { marker: t } = e;
  t !== Fs && kt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Fs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (d_(X) ?? xt).getType(), c = X?.markerMode === "editable" ? tp : Qp;
  let l, d;
  X?.markerMode === "editable" ? l = It(t, r) : X?.markerMode === "visible" && (d = !0);
  const u = De(e, jb);
  return Ee({
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
function TS(e, t = [], r = !1) {
  let { marker: n } = e;
  me.isValidMarker(n, _n?.extraValidMarkers) || kt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (X?.markerMode === "editable") {
    const [a] = t;
    Qn(a) ? a.text = R + a.text : a && t.unshift(ct(R, At, "token"));
  }
  t.length === 0 && t.push(ct(Lr, us)), Ja(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = De(e, qb);
  return s || NS(n, o, i), s || Ya(e.marker ?? "", i, !1, r), Ee({
    type: me.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Jf
  });
}
function Qh(e) {
  return {
    type: Fr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Zf
  };
}
function xS(e, t = []) {
  let { marker: r } = e;
  Qe.isValidMarker(r, _n?.extraValidMarkers) || kt?.warn(`Unexpected para marker '${r}'!`), r = r ?? tr;
  const n = [];
  if (ui(X) && (X?.markerMode === "editable" ? n.push(
    ht(r),
    ct(R, At, "token")
  ) : (X?.markerMode === "visible" || X?.hasGutterParaMarkers) && n.push(
    yt(
      "marker",
      Oe(r) + R,
      X?.hasGutterParaMarkers
    )
  )), n.push(...t), dl()) {
    const s = n.find(
      (o) => !$c(o) && !(Qn(o) && o.text === R)
    );
    Qn(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => R.repeat(o.length)));
  }
  const i = De(e, zb);
  return Ee({
    type: Qe.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: ep
  });
}
function fl() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function _S(e, t = []) {
  const r = De(e, Hk);
  return Ee({
    ...fl(),
    type: Pn.getType(),
    unknownAttributes: r,
    children: t,
    version: Up
  });
}
function CS(e, t = []) {
  const r = De(e, Yk), n = e.marker ?? Ra, i = [];
  return X?.markerMode === "editable" ? i.push(
    ht(n),
    ct(R, At, "token")
  ) : (X?.markerMode === "visible" || X?.hasGutterParaMarkers) && i.push(
    yt(
      "marker",
      Oe(n) + R,
      X?.hasGutterParaMarkers
    )
  ), i.push(...t), Ee({
    ...fl(),
    type: ai.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Kp
  });
}
function vS(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? $a;
  X?.markerMode === "editable" ? s.push(
    ht(o),
    ct(R, At, "token")
  ) : (X?.markerMode === "visible" || X?.hasGutterParaMarkers) && s.push(
    yt(
      "marker",
      Oe(o) + R,
      X?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const a = De(
    e,
    Qk
  );
  return Ee({
    ...fl(),
    type: ci.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: a,
    children: s,
    version: Bp
  });
}
function SS(e, t) {
  const r = tk(t);
  let n = () => {
  };
  return _n?.noteCallerOnClick && (n = _n.noteCallerOnClick), Ee({
    type: jt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: ah
  });
}
function MS(e, t) {
  let { marker: r } = e;
  Se.isValidMarker(r, _n?.extraValidMarkers) || kt?.warn(`Unexpected note marker '${r}'!`), r = r ?? _c;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : Zc(X?.noteMode), a = De(e, Vy), c = X?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, d;
  X?.markerMode === "editable" ? (l = ht(r, "opening", !1, c), s || (d = ht(r, "closing"))) : X?.markerMode === "visible" && (l = yt("marker", Oe(r) + " "), s || (d = yt("marker", rt(r))));
  const u = [];
  let f;
  if (l && u.push(l), X?.markerMode === "editable" && !o)
    f = ct(St(i), void 0, c), u.push(f), RS(n, u), u.push(...t);
  else {
    const p = ct(R, At, "token");
    f = SS(i, t), u.push(f, p, ...t.flatMap(ES(p)));
  }
  return d && u.push(d), Ee({
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
    version: Nf
  });
}
function ES(e) {
  return (t) => Lf(t) ? [t] : [t, e];
}
function AS(e) {
  let { marker: t } = e;
  (!t || !Bt.isValidMarker(t, _n?.extraValidMarkers)) && kt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = De(e, xc), s = xp(e);
  return Ee({
    type: Bt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: Af
  });
}
function bd(e, t = []) {
  return {
    type: Ze.getType(),
    typedIDs: { [$r]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function PS(e, t) {
  const { marker: r } = e, n = e.type, i = De(e, Sb), s = [];
  if (X?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = wp(
      n,
      r,
      i
    );
    o && s.push(yt("marker", o)), a && s.push(yt("attribute", a)), s.push(...t), c && s.push(yt("attribute", c)), l && s.push(yt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Qn(o) && (o.mode = "token");
  }), Ee({
    type: En.getType(),
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
function OS(e) {
  return {
    type: vr.getType(),
    marker: e,
    text: Ii(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: X?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: Ip
  };
}
function ht(e, t = "opening", r = !1, n = "normal") {
  return {
    type: sr.getType(),
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
function ct(e, t = void 0, r = "normal") {
  const n = {
    type: Ke.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[as] = { textType: t }), n;
}
function yt(e, t, r = !1) {
  const n = {
    type: Tr.getType(),
    text: t,
    textType: e,
    version: If
  };
  return r && (n[as] = { [vc.key]: !0 }), n;
}
function ts(e, t) {
  return {
    type: _r.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: bp
  };
}
function Ja(e, t, r = !1) {
  X?.markerMode === "editable" ? t.push(ht(e, "opening", r)) : X?.markerMode === "visible" && t.push(yt("marker", Oe(e, r)));
}
function Ya(e, t, r = !1, n = !1) {
  X?.markerMode === "editable" ? r ? t.push(ht("", "selfClosing")) : t.push(ht(e, "closing", n)) : X?.markerMode === "visible" && t.push(
    yt(
      "marker",
      r ? rt("") : rt(e, n)
    )
  );
}
function NS(e, t, r) {
  if (X?.markerMode !== "editable" || !t) return;
  const n = er(t, fo(e));
  n && r.push(ct(n, "attribute"));
}
function kd(e, t) {
  if (e.type !== "ms" || X?.markerMode !== "editable" && X?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = De(e, xc), o = _p(
    n,
    i,
    s,
    xp(e)
  ), a = er(o, ho(r ?? ""));
  if (!a) return;
  const c = R + a;
  X?.markerMode === "editable" ? t.push(ct(c, "attribute")) : t.push(yt("attribute", c));
}
function wS(e, t) {
  const r = e.marker ?? "";
  if (X?.markerMode === "editable") {
    const n = [];
    Ja(r, n), kd(e, n), Ya(r, n, !0), t.push(ts("milestone", n));
  } else
    Ja(r, t), kd(e, t), Ya(r, t, !0);
}
function Td(e, t, r) {
  t !== void 0 && r.push(
    ts(e, [
      ht(e, "opening"),
      ct(R + t, "attribute"),
      ht(e, "closing")
    ])
  );
}
function qS(e, t) {
  X?.markerMode === "editable" && (Td("va", e.altnumber, t), Td("vp", e.pubnumber, t));
}
function RS(e, t) {
  e !== void 0 && t.push(
    ts("cat", [
      ht("cat", "opening"),
      ct(R + e, "attribute"),
      ht("cat", "closing")
    ])
  );
}
function $S(e, t, r) {
  e !== void 0 && r.push(
    ts("ca", [
      ht("ca", "opening"),
      ct(R + e, "attribute"),
      ht("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    ts("cp", [
      ht("cp", "opening"),
      ct(R + t, "attribute")
    ])
  );
}
function xd(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function IS(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function _d(e, t) {
  t.marker === gn && t.sid !== void 0 && e.push(t.sid), t.marker === Jn && t.eid !== void 0 && IS(e, t.eid);
}
function Xa(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [bd(o, [...n])] : o, c = e[i];
  _d(n, c);
  const l = Xa(
    e.slice(i + 1, s),
    xd(t, i + 1),
    c.marker === gn,
    n
  ), d = bd(l, [...n]), u = e[s];
  _d(n, u);
  const f = Xa(
    e.slice(s + 1),
    xd(t, s + 1),
    u.marker === gn,
    n
  );
  return [...a, d, ...f];
}
function wr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(ct(dl() ? Wh(i) : i));
    else if (!i.type)
      kt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Lt.getType():
          n.push(yS(i));
          break;
        case Pt.getType():
          n.push(bS(i));
          break;
        case pt.getType():
          X?.hasSpacing || n.push(uS), n.push(kS(i)), qS(i, n);
          break;
        case me.getType():
          n.push(
            TS(i, wr(i.content, !0), t)
          );
          break;
        case Qe.getType():
          n.push(xS(i, wr(i.content)));
          break;
        case Se.getType():
          n.push(MS(i, wr(i.content)));
          break;
        case Bt.getType():
          Pf(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && ul?.push(i.sid)), n.push(AS(i)), wS(i, n);
          break;
        case vr.getType():
          n.push(OS(i.marker ?? ""));
          break;
        case Dp:
          n.push(_S(i, wr(i.content)));
          break;
        case zp:
          n.push(CS(i, wr(i.content)));
          break;
        case jp:
          n.push(vS(i, wr(i.content)));
          break;
        default:
          kt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(PS(i, wr(i.content)));
      }
  }), Xa(n, r);
}
function Qa(e) {
  const t = e.findIndex(
    (n) => Bf(n) || ip(n) || Ec(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    Jk(n)
  );
  if (t >= 0) {
    const n = Qa(e.slice(0, t)), i = e[t], s = Qa(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Zp(n)))
    return [Qh(e)];
  return e;
}
const jr = {
  initialize: dS,
  reset: fS,
  serializeEditorState: pS
};
function Zh(e) {
  if (e && !P(e)) {
    if (M(e)) return e;
    if (L(e))
      for (const t of e.getChildren()) {
        const r = Zh(t);
        if (r) return r;
      }
  }
}
function LS() {
  const e = q();
  if (!O(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((M(t) && !P(t) ? Tn(t) : void 0) && M(t)) {
      const i = Le(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      Zn(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Zh(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(R) ? R : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return M(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of eg(e)) {
    if (!Tn(t)) continue;
    Zn(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(R) && r.setTextContent(n.slice(R.length));
  }
  return !0;
}
function eg(e) {
  const [t, r] = rf(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!M(a) || P(a) || Y(a, Q) === "attribute") return;
    const l = a.getTextContentSize(), d = c === 0 ? n : 0, u = c === s.length - 1 ? Math.min(i, l) : l;
    if (d >= u) return;
    const f = a.splitText(d, u), p = f.length === 3 ? f[1] : u === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function DS() {
  const e = q();
  if (!O(e)) return !1;
  const t = e.focus.getNode();
  return Tn(t) ? _e(zc(t)) : !1;
}
function tg() {
  let e = q();
  if (!O(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (P(t) && !Bc(t, e.anchor.offset)) {
    const c = t.getParent();
    if ($(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = q(), !O(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!M(t) || P(t) || !Tn(t)) return !1;
  const r = zc(t);
  if (!_e(r)) return !1;
  const n = Le(""), i = e.anchor.offset;
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
  return $(a) ? Kc(a) : o.select(0, 0), !0;
}
const rg = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${sp(Ue().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = q(), t = Oc(e), r = Gc(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = nk(0, o);
        const a = DT(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || pp(c) && Nc(parseInt(n, 10), c);
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
  return Se.isValidMarker(e, t) || !!rg[e] || Qe.isValidMarker(e, t) || me.isValidMarker(e, t);
}
function US(e, t) {
  return me.isNoteContentMarker(e) ? !1 : me.isValidMarker(e, t);
}
function ng(e, t, r, n, i, s) {
  const o = uh(
    e,
    void 0,
    void 0,
    t,
    n ?? Mo(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function ec(e, t, r, n, i, s, o) {
  if (Se.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (u) => {
      u.editor.update(() => {
        l = ng(
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
  const a = VS(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const d = q();
      O(d) && (Jp(d), l.noteText = d.getTextContent());
      const { content: u, highlightInserted: f } = a.action(l), p = vu(u, jr, r), g = Ho(p);
      if (O(d)) {
        const m = d.anchor.getNode(), y = m.getParent(), T = Tn(m), C = d.anchor.key === d.focus.key;
        if ($(g) && T && C && !ga(g, o))
          KS(
            d,
            g,
            m,
            r?.markerMode === "editable"
          );
        else if ($(g) && !C && !ga(g, o) && jS(d))
          BS(d, g, r?.markerMode === "editable");
        else if (d.getTextContent().length > 0)
          WS(
            d,
            () => Ho(p)
          );
        else if (L(g) && !g.isInline()) {
          const S = d.insertParagraph();
          if (S) {
            const E = S.getChildren();
            g.append(...E), S.replace(g), _e(g) && fi(g) || g.selectStart();
          }
        } else if ($(g) && M(m) && !P(m) && $(m.getParent()) && d.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        ga(g, o)) {
          const S = m.getParent();
          if ($(S)) {
            const E = d.anchor.offset;
            if (E === 0) m.insertBefore(g);
            else if (E >= m.getTextContentSize()) m.insertAfter(g);
            else {
              const [x] = m.splitText(E);
              x.insertAfter(g);
            }
            g.getChildren().forEach((x) => {
              P(x) && x.setNested(!0);
            });
            const A = g.getChildren().find((x) => M(x) && !P(x));
            A && M(A) ? A.select(
              A.getTextContentSize(),
              A.getTextContentSize()
            ) : g.selectEnd();
          }
        } else if (M(m) && !P(m) && d.isCollapsed() && (j(y) || $(y) && j(y.getParent()))) {
          const S = $(y) ? y : void 0, E = S ? FS(m, d.anchor.offset) : [];
          let x = (S ?? m).insertAfter(g);
          if (xr(g)) {
            const F = {
              ...r || Mo(),
              markerMode: "hidden"
            }, D = vu(
              u,
              jr,
              F
            ), G = Ho(D);
            x = x.insertAfter(G);
          }
          if (E.length > 0 && S) {
            const F = eo(S).append(...E);
            x.insertAfter(F), S.isEmpty() && S.remove();
          } else M(x.getNextSibling()) || x.insertAfter(Vr());
          L(x) && x.selectEnd();
        } else if (d.insertNodes([g]), rM(g), f) {
          const S = cf();
          S.add(g.getKey()), zi(S);
        } else if ($(g)) {
          const S = g.getChildren().find((E) => M(E) && !P(E));
          S && M(S) ? S.select(
            S.getTextContentSize(),
            S.getTextContentSize()
          ) : g.selectEnd();
        } else {
          const S = g.getNextSibling();
          S ? S.selectStart() : g.selectStart();
        }
      } else
        d?.insertNodes([g]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function FS(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function ga(e, t) {
  return ((t ?? Bs).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function zS(e, t) {
  t && e.getChildren().forEach((i) => {
    P(i) && i.setNested(!0);
  }), e.getChildren().some((i) => P(i) && i.getMarkerSyntax() === "closing") || e.append(at(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function KS(e, t, r, n) {
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
    i.insertBefore(t), M(i) && !i.getTextContent().startsWith(R) && i.setTextContent(R + i.getTextContent());
    const o = t.getChildren().find((a) => M(a) && !P(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => M(o) && !P(o));
  M(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function jS(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (P(n) || $(n)) continue;
    if (!M(n) || n.getType() !== Ke.getType() || Y(n, Q) === "attribute") return !1;
    const i = zc(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Tn(n) && (r = !0);
  }
  return r;
}
function BS(e, t, r) {
  const n = eg(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Tn(a)) return;
    Zn(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(R) && c.setTextContent(l.slice(R.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(R) || i.setTextContent(R + i.getTextContent());
  const s = t.getChildren().find((a) => M(a) && !P(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function VS(e, t) {
  let r = rg[e];
  return r || (Qe.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: Qe.getType(), marker: e, content: [] }] })
  } : me.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: me.getType(), marker: e };
      return (me.isValidFootnoteMarker(e) || me.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function WS(e, t) {
  const r = e.getNodes(), [n, i] = ni(e);
  let s;
  r.forEach((o, a) => {
    if (L(s) && s.isParentOf(o))
      return;
    const c = ig(
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
    s || (s = t(), c.insertBefore(s), l = !0, $(s) && s.getChildren().some((u) => P(u) && u.getMarkerSyntax() === "opening") && zS(s, $(s.getParent()))), GS(c, s, l);
  }), (M(s) || L(s)) && s.selectEnd();
}
function ni(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function pl(e) {
  return xe(e) || j(e) || j(e.getParent());
}
function ig(e, t, r, n, i) {
  if (!pl(e)) {
    if (M(e))
      return HS(e, t, r, n, i);
    if (L(e) && e.isInline())
      return e;
  }
}
function HS(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function GS(e, t, r) {
  if (M(t)) {
    const n = tc(e, t);
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
    tc(e, t), r && $(t) && t.getChildren().some((s) => P(s)) && M(e) && !P(e) && !e.getTextContent().startsWith(R) && e.setTextContent(R + e.getTextContent());
  }
}
function tc(e, t) {
  let r = e.getTextContent();
  if (M(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    Wc(n), M(n) || t.insertBefore(Le(" "));
  }
  return r;
}
function sg(e, t, r) {
  if (e.isCollapsed()) {
    const d = e.anchor.getNode(), u = e.anchor.offset, f = Cn(d, t);
    if (!f) return !1;
    const p = M(d) ? d.getTextContentSize() : 0;
    if (Cd(f, r), M(d) && d.isAttached()) {
      const g = d.getTextContentSize(), m = Math.max(p - g, 0), y = Math.max(0, Math.min(u - m, g)), T = q();
      O(T) && T.setTextNodeRange(d, y, d, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = ni(e);
  if (!gl(n, t, s, o)) return !1;
  const a = hl(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((d) => {
    const u = Cn(d, t);
    if (!u || c.has(u.getKey())) return;
    c.add(u.getKey());
    const f = lg(u, a);
    f && (Cd(f, r), l = !0);
  }), ug(a, i), l;
}
function Cd(e, t) {
  e.getChildren().forEach((n) => {
    Mt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === Lr) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    M(n) && i.startsWith(R) && n.setTextContent(i.slice(R.length));
  }), _a(e);
}
function hl(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = ig(
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
  for (; r && !_e(r); ) {
    if (j(r)) return;
    !n && $(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function og(e) {
  const t = nt(
    e,
    (r) => j(r) || _e(r)
  );
  return j(t);
}
function ag(e) {
  return e.filter(
    (t) => !pl(t) && (M(t) || L(t) && t.isInline())
  );
}
function JS(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!M(i) || pl(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function YS(e, t, r) {
  return e.getChildren().some(
    (n) => L(n) && t.some((i) => n.isParentOf(i)) && !cg(n, r)
  );
}
function gl(e, t, r, n, i) {
  const s = ag(e), o = JS(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Cn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !YS(l, s, o);
  });
}
function cg(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Mt(r));
}
function lg(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, d] of n.entries())
    if (r.has(d.getKey()))
      i.push(l);
    else if (L(d) && t.some((u) => d.isParentOf(u))) {
      if (!cg(d, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Mt(n[s - 1]) && (s -= 1), o < n.length - 1 && Mt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(eo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(eo(e).append(...c)), e;
}
function eo(e) {
  return cy(e);
}
function ug(e, t) {
  const r = q(), n = e[0], i = e[e.length - 1];
  if (!O(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function XS(e, t, r) {
  if (e.isCollapsed()) {
    const l = Cn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (lu(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = ni(e);
  if (!gl(n, r, i, s, t)) return !1;
  const o = hl(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const d = Cn(l, r);
    if (!d || a.has(d.getKey()) || (a.add(d.getKey()), d.getMarker() === t)) return;
    const u = lg(d, o);
    u && (lu(u, t), c = !0);
  }), c;
}
function QS(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = ni(e);
  if (!!!i?.some(
    (y) => gl(s, y, o, a)
  ) && !ZS(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const T = q();
    O(T) && sg(T, y, n) && (l = !0);
  });
  const d = q();
  if (!O(d)) return l;
  const u = d.isBackward(), [f, p] = ni(d), g = hl(
    d.getNodes(),
    f,
    p
  );
  if (g.length === 0) return l;
  const m = g.filter(
    (y) => !og(y) && !Cn(y, t)
  );
  return m.length > 0 && (eM(m).forEach((y) => tM(y, t)), l = !0), ug(g, u), l;
}
function ZS(e, t) {
  return ag(e).some(
    (r) => !og(r) && !Cn(r, t)
  );
}
function eM(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function tM(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => $(a) && a.getMarker() === t
  ), s = i ? eo(i) : gr(t);
  e[0].insertBefore(s), s.append(...e), i === r || tc(e[0], s);
}
function rM(e) {
  he(e) && (Wc(e.getPreviousSibling()), th(e.getNextSibling()));
}
const dg = {
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
}, vd = "psc-active-text", Ss = "psc-empty-text";
function nM({ viewOptions: e }) {
  const [t] = le(), r = Z(void 0), n = e?.hasActiveTextFocusBox ?? !1;
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
        co,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Ss}`);
          if (!c) return !1;
          const l = ls(c);
          if (!he(l)) return !1;
          const d = l.getParent();
          if (!L(d)) return !1;
          const u = l.getIndexWithinParent() + 1;
          return d.select(u, u), !1;
        },
        $t
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: d } = o.read(() => {
          const u = ma(), f = iM(), p = [], g = [];
          return Ue().getChildren().forEach((m) => {
            if (!L(m)) return;
            const { emptyKeys: y, nonEmptyKeys: T } = oM(m);
            p.push(...y), g.push(...T);
          }), { newActiveKey: u, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: g };
        });
        a !== r.current && i(a), l.forEach((u) => {
          u === c ? t.getElementByKey(u)?.classList.remove(Ss) : t.getElementByKey(u)?.classList.add(Ss);
        }), d.forEach((u) => t.getElementByKey(u)?.classList.remove(Ss));
      }),
      t.registerCommand(
        bc,
        () => (i(void 0), !1),
        $t
      ),
      t.registerCommand(
        ly,
        () => {
          const o = t.getEditorState().read(ma);
          return o !== r.current && i(o), !1;
        },
        $t
      )
    ];
    return i(t.getEditorState().read(ma)), Xe(...s);
  }, [t, n]), null;
}
function ma() {
  return sM(q() ?? void 0)?.getKey();
}
function iM() {
  const e = q();
  if (!O(e)) return;
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
    he(s[a]) && (o = s[a].getKey());
  return o;
}
function sM(e) {
  if (O(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function oM(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!he(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (he(c)) break;
      if (!(Vt(c) || P(c)) && c.getTextContent().replaceAll(Rs, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const aM = /^\+/;
function ml(e, t) {
  const r = t.replace(aM, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function fg(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function pg(e, t) {
  return fg(e, t) !== void 0;
}
function rc(e, t) {
  const r = fg(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function to(e, t, r) {
  const n = L(e) ? e.getChildren().filter(P) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function cM(e, t, r, n, i) {
  const s = ml(n, t);
  if (!s) {
    to(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && to(e, "invalid", i);
}
function Di(e, t, r, n, i) {
  for (const s of e.getChildren())
    if ($(s)) {
      const o = s.getMarker();
      i || cM(s, o, t, r, n), Di(s, t, r, n, i || o === "xq");
    } else if (he(s)) {
      if (i) continue;
      const o = ml(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else j(s) ? Di(s, s.getMarker(), r, n, i) : Ie(s) || L(s) && Di(s, t, r, n, i);
}
function lM(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = ml(e, a);
    if (!c) {
      to(o, "unknown", r), rc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    rc(n, l) || to(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Ue().getChildren())
    Ie(o) || (Tt(o) || We(o) ? i(o, o.getMarker()) : oe(o) ? (i(o, o.getMarker()), s(o) && Di(o, o.getMarker(), e, r, !1)) : L(o) && s(o) && Di(o, "p", e, r, !1));
  return r;
}
function uM(e) {
  return !!e?.includes("(basic)");
}
function dM(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function hg(e, t) {
  return !e.startsWith("zpa") && e !== "c" && Za(e, t);
}
function yl(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function gg(e, t) {
  const r = [];
  for (const n of t) {
    const i = yl(e, n);
    i && rc(r, i);
  }
  return r;
}
function Os(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: dM(e.description),
    isBasic: uM(e.description)
  };
}
function fM(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function nc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : fM(e.marker, t.marker);
}
function ic(e, t, r) {
  if (t.noteMarker) return [];
  const n = gg(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && hg(i.marker, r)
  ).filter((i) => {
    const s = yl(e, i.marker);
    return s !== void 0 && pg(n, s);
  }).map((i) => Os(i, "paragraph")).sort(nc);
}
function pM(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => hg(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Os(c, "character")).sort(nc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Os(c, "character")),
    ...a.map((c) => Os(c, "note"))
  ].sort(nc);
}
function hM(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function gM(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function mM(e, t, r) {
  return [
    ...hM(e, t.openCharMarkers),
    ...pM(e, t, r)
  ].sort(gM);
}
function yM(e, t, r) {
  if (t.source === "paragraph") return ic(e, t, r);
  const n = mM(e, t, r);
  return n.length > 0 ? n : ic(e, t, r);
}
function bM(e, t, r) {
  const n = ic(e, t, r), i = gg(e, t.previousParaMarkers), s = yl(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && pg(i, s) ? "ip" : "p", c = n.findIndex((d) => d.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const Nn = String.raw`\w-`, mg = "a-z0-9", kM = `[a-z][${mg}]*`, TM = new RegExp(
  String.raw`^\\(\+?[${Nn}]+)[ \u00A0]$`
), yg = new RegExp(String.raw`^\\(\+?[${Nn}]+)$`), xM = new RegExp(String.raw`^\\\+?[${Nn}]*\*$`), _M = new RegExp(
  String.raw`^\\(\+?[${Nn}]+)(?:[ \u00A0]|$)`
), CM = new RegExp(
  String.raw`^\\(\+?)([${Nn}]+)`
), vM = new RegExp(
  String.raw`\\\+?[${Nn}]+(?:\\?\*|[ \u00A0])`
), SM = new RegExp(
  String.raw`\\\+?[${Nn}]*$`
), MM = new RegExp(
  String.raw`^\\(${kM})( |$)`
), EM = new RegExp(
  String.raw`\\[${mg}+*]*$`,
  "i"
), tt = "￼";
function bg(e) {
  return e.length > 1 && e.startsWith(R) && e.charAt(1) !== tt ? e.slice(1) : e;
}
function Sd(e) {
  return $c(e) ? e.markerSyntax ?? "opening" : void 0;
}
function kg(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = jr.serializeEditorState(
    {
      type: fr,
      version: dr,
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
  if (a[c]?.text !== St(e.getCaller())) return { failure: "caller" };
  c++;
  let d = a.length;
  for (; d > c && Sd(a[d - 1]) === "closing"; )
    d--;
  const u = a.slice(c, d);
  return u.length === 0 ? { failure: "empty" } : { children: u };
}
function Ms(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Ei(e, t) {
  SM.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += tt;
}
function Rt(e) {
  return e.replaceAll(R, " ");
}
function AM(e, t, r = !1) {
  if (Eo(t)) return Rt(e);
  const n = r && e.startsWith(R), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(R, "~");
}
function Ui(e) {
  const t = e.getTextContent();
  return An(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function bl(e, t) {
  const r = e[t];
  if (!Fe(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = ko(r);
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
function kl(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = Hi(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function Tl(e) {
  return !!e.getUnknownAttributes();
}
function Oo(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && uo(e);
}
function xg(e, t) {
  return Fe(e) ? !Oo(e.getMarker(), t) : j(e) || Ie(e) ? !0 : Pe(e) ? Tl(e) : $(e) ? _g(e, t) : !1;
}
function _g(e, t) {
  if (gk(e)) return !0;
  const r = e.getMarker();
  return !nb(r) && t(r) === void 0;
}
const wt = "", qt = "";
function Md(e) {
  return e.flatMap((t) => Be(t) ? t.getChildren() : [t]);
}
function qi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Fe(s)) {
      const o = bl(e, i);
      Oo(s.getMarker(), r) && Tg(o) ? (t.push(
        wt,
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
      ), qi(Md(o), t, r), t.push(qt)) : t.push(tt), i += o.length;
    } else if (Pe(s)) {
      const o = kl(e, i);
      Tl(s) ? t.push(tt) : (t.push(
        wt,
        "verse",
        Rt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), qi(Md(o), t, r), t.push(qt)), i += o.length;
    } else P(s) ? t.push(wt, "marker", Rt(s.getTextContent()), qt) : Hr(s) ? t.push(wt, "unmatched", Rt(s.getTextContent()), qt) : xg(s, r) ? t.push(tt) : ao(s) ? t.push(" ") : M(s) ? t.push(
      Rt(
        n ? bg(Ui(s)) : Ui(s)
      )
    ) : $(s) ? (t.push(wt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), qi(s.getChildren(), t, r, !0), t.push(qt)) : L(s) ? (t.push(wt, s.getType()), qi(s.getChildren(), t, r), t.push(qt)) : t.push(tt);
  }
}
function pi(e, t) {
  const r = [];
  return qi(e, r, t), r.join("");
}
function yr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function ii(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function xl(e) {
  return e.type ?? "";
}
function Cg(e, t, r) {
  return t === "closing" ? rt(e, r) : t === "selfClosing" ? rt("") : Oe(e, r);
}
function ya(e, t) {
  const r = e[t];
  if (!(!r || xl(r) !== "attribute-run"))
    return yr(r) ?? [];
}
function hi(e, t) {
  const r = [];
  return Ri(e, r, t), r.join("");
}
function Ri(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = xl(s);
    if (o === "ms") {
      const l = s, d = ya(e, i + 1);
      d && Oo(l.marker ?? "", r) ? (t.push(
        wt,
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
      ), Ri(d, t, r), t.push(qt), i += 1) : t.push(tt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(tt);
        continue;
      }
      t.push(
        wt,
        "verse",
        Rt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let d = 0, u = ya(e, i + 1 + d);
      for (; u; )
        Ri(u, t, r), d++, u = ya(e, i + 1 + d);
      t.push(qt), i += d;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        wt,
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
      t.push(wt, "char", JSON.stringify(l.unknownAttributes ?? null)), Ri(yr(s) ?? [], t, r, !0), t.push(qt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(tt);
      continue;
    }
    if (o === "unmatched") {
      t.push(wt, "unmatched", Rt(ii(s) ?? "")), t.push(qt);
      continue;
    }
    const a = ii(s);
    if (a !== void 0) {
      t.push(Rt(n ? bg(a) : a));
      continue;
    }
    const c = yr(s);
    c ? (t.push(wt, o), Ri(c, t, r), t.push(qt)) : t.push(tt);
  }
}
function No(e) {
  let t = 0;
  for (const r of e) {
    const n = yr(r);
    if (n) {
      t += No(n);
      continue;
    }
    const i = ii(r);
    if (i !== void 0)
      for (const s of i) s === tt && t++;
  }
  return t;
}
function rs(e, t, r, n, i) {
  vn(e.getChildren(), t, r, n, i);
}
function vn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (P(a))
      Ms(t, a, Rt(a.getTextContent()));
    else if (Fe(a)) {
      s();
      const c = bl(e, o);
      Oo(a.getMarker(), r) && Tg(c) ? vn(c, t, r, n) : Ei(t, [a, ...c]), o += c.length;
    } else if (j(a) || Ie(a))
      s(), Ei(t, [a]);
    else if (Pe(a)) {
      s();
      const c = kl(e, o);
      Tl(a) ? Ei(t, [a, ...c]) : (Ms(t, a, Rt(Ui(a))), vn(c, t, r, n)), o += c.length;
    } else if ($(a))
      s(), _g(a, r) ? Ei(t, [a]) : rs(a, t, r, n, { pending: !0 });
    else if (ao(a))
      s(), Ms(t, a, " ");
    else if (M(a)) {
      const c = An(a) || Wi(a) || Y(a, Q) === "attribute", l = s() && !c;
      Ms(
        t,
        a,
        c ? Rt(Ui(a)) : AM(Ui(a), n, l)
      );
    } else L(a) ? rs(a, t, r, n, i) : (s(), Ei(t, [a]));
  }
}
function _l(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Ie(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return rs(e, i, t, r), i;
}
function vg(e, t) {
  let r = 0;
  const n = (i) => {
    if (M(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(tt);
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
    } else L(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function sc(e, t = []) {
  for (const r of e)
    Pe(r) ? t.push(r) : L(r) && sc(r.getChildren(), t);
  return t;
}
function Sg(e) {
  let t = 0;
  const r = (n) => {
    if (M(n))
      for (const i of n.getTextContent()) i === tt && t++;
    else L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function wn(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === tt && t++;
    else r.content && (t += wn(r.content));
  return t;
}
function PM(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), L(i) && rs(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const ns = /\s/;
function Mg(e) {
  return e.filter(wo).length;
}
function wo(e) {
  if (e.isSentinel) return !1;
  const t = ie(e.key);
  return M(t) && !P(t) && Y(t, Q) === "attribute";
}
function OM(e) {
  if (e.isSentinel) return !1;
  const t = ie(e.key);
  return P(t) || wo(e);
}
function Ed(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && wo(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let d = 0; d < l; d++)
      ns.test(e.text[o.start + d]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function Cl(e, t, r) {
  const n = Ed(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !OM(i) ? Ed(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: Mg(e.spans) };
}
function ba(e) {
  if (e.isSentinel) return !1;
  const t = ie(e.key);
  return P(t) && t.getMarkerSyntax() !== "opening";
}
function NM(e) {
  const t = ie(e.key);
  if (!P(t)) return !1;
  const r = t.getParent();
  return $(r) ? (r.selectNext(0, 0), !0) : !1;
}
function wM(e) {
  const t = ie(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = Pe(t) ? kl(r, n) : Fe(t) ? bl(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function Eg(e, t, r) {
  const { text: n, spans: i } = e, s = Mg(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, d = !1;
  e: for (const u of i) {
    const f = u.end - u.start, p = !u.isSentinel && !ba(u);
    if (!(o && wo(u))) {
      if (d) {
        if (!p) continue;
        a = { key: u.key, offset: 0 };
        break;
      }
      for (let g = 0; g < f; g++) {
        const m = n[u.start + g];
        if (c === 0 && (l === 0 || !ns.test(m))) {
          if (p) {
            a = { key: u.key, offset: g };
            break e;
          }
          d = !0;
          continue e;
        }
        c > 0 ? ns.test(m) || c-- : l--;
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
    if (u && ba(u) && NM(u) || u?.isSentinel && wM(u)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !ba(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const u = ie(a.key);
    if (u && M(u)) {
      u.select(a.offset, a.offset);
      return;
    }
  }
  r.find(L)?.selectStart();
}
function Ag(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(L)?.selectStart();
      return;
    }
    Eg(PM(e, n, i), t, e);
  }
}
function qM(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(L)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  vn(e, s, n, i), Eg({ text: s.text, spans: s.spans }, t, e);
}
function Pg(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  for (const m of e) {
    const y = _l(m, n, r);
    if (!y)
      return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
    s.text.length > 0 && (s.text += " ");
    const T = s.text.length;
    y.spans.forEach(
      (C) => s.spans.push({ ...C, start: C.start + T, end: C.end + T })
    ), s.sentinels.push(...y.sentinels), s.text += y.text;
  }
  let o, a = !1;
  const c = q();
  if (O(c)) {
    for (let m = c.anchor.getNode(); m; m = m.getParent())
      if (e.some((y) => y.is(m))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Cl(s, c.anchor.key, c.anchor.offset));
  }
  const l = kr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (wn(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const d = jr.serializeEditorState(
    { type: fr, version: dr, content: l },
    r
  );
  if (hi(d.root.children, n) === pi(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const u = d.root.children.map((m) => so(m));
  if (Sg(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = sc(e).map((m) => ({
    number: m.getNumber(),
    sid: m.getSid()
  })), p = e[0];
  u.forEach((m) => p.insertBefore(m)), vg(u, s.sentinels), e.forEach((m) => m.remove());
  const g = sc(u);
  for (let m = 0; m < f.length && m < g.length; m++)
    g[m].getNumber() === f[m].number && g[m].setSid(f[m].sid);
  return Ag(u, o, a, n, r), !0;
}
function Og(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Se.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const d = n[i];
    if (!P(d) || d.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(or(s) || M(s) && s.getTextContent() === St(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const d = n[a - 1];
    if (!P(d) || d.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return vn(c, l, t, r), { out: l, contentNodes: c };
}
function Ng(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(tt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function RM(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Og(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const d = q();
  if (O(d)) {
    for (let E = d.anchor.getNode(); E; E = E.getParent())
      if (e.is(E)) {
        l = !0;
        break;
      }
    d.isCollapsed() && (c = Cl(o, d.anchor.key, d.anchor.offset));
  }
  const u = kr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (wn(u) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = u;
  if (u.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], g = Ng(p), m = kg(e, p, g, r);
  if (m.failure !== void 0)
    return m.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      m.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (No(m.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const y = e.getCategory() !== g;
  if (y && e.setCategory(g), hi(m.children, n) === pi(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  const T = m.children.map((E) => so(E));
  if (Sg(T) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), y;
  const C = a[0];
  if (C)
    T.forEach((E) => C.insertBefore(E));
  else {
    const E = e.getChildren().find((A) => P(A) && A.getMarkerSyntax() === "closing");
    T.forEach((A) => E ? E.insertBefore(A) : e.append(A));
  }
  vg(T, o.sentinels);
  const S = new Set(o.sentinels.flat().map((E) => E.getKey()));
  return a.forEach((E) => {
    S.has(E.getKey()) || E.remove();
  }), qM(T, c, l, n, r), !0;
}
const wg = /* @__PURE__ */ new Set(["ca", "cp"]), vl = "cp";
function qg(e) {
  if (!nr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (rs(e, t, rr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = kr(r, { getMarker: rr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === vl)
  );
}
function qo(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if ($(r) && wg.has(r.getMarker()) || qg(r)) {
      t.push(r);
      continue;
    }
    oe(r) && r.getMarker() === vl && t.push(r);
    break;
  }
  return t;
}
function $M(e) {
  const t = (n) => $(n) && wg.has(n.getMarker()) || qg(n);
  if (t(e) || oe(e) && e.getMarker() === vl)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Re(n)) return n;
      if (!t(n)) return;
    }
}
function Rg(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = qo(e);
  if (n.some((s) => oe(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (vn(e.getChildren(), i, t, r), vn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function IM(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...qo(e)], o = Rg(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = q();
  if (O(l)) {
    for (let g = l.anchor.getNode(); g; g = g.getParent())
      if (s.some((m) => m.is(g))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Cl(o, l.anchor.key, l.anchor.offset));
  }
  const d = kr(o.text, { getMarker: n }), [u] = d;
  if (d.length === 0 || typeof u != "object" || u.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (wn(d) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (u.sid = e.getSid());
  const f = jr.serializeEditorState(
    { type: fr, version: dr, content: d },
    r
  );
  if (hi(f.root.children, n) === pi(s, n)) {
    let g = !1;
    return e.getNumber() !== (u.number ?? "") && (e.setNumber(u.number ?? ""), g = !0), e.getAltnumber() !== u.altnumber && (e.setAltnumber(u.altnumber), g = !0), e.getPubnumber() !== u.pubnumber && (e.setPubnumber(u.pubnumber), g = !0), g || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), g;
  }
  const p = f.root.children.map((g) => so(g));
  return Re(p[0]) ? (p.forEach((g) => e.insertBefore(g)), s.forEach((g) => g.remove()), Ag(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function is(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Ie(n)) return;
    !t && (j(n) || oe(n) || Re(n)) && (t = n), uy(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? $M(r) : void 0) ?? t;
}
function zt(e, t) {
  const r = is(e);
  return r ? j(r) ? RM(r, t) : Re(r) ? IM(r, t) : Pg([r], t) : !1;
}
const LM = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Ad(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !LM.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function Ns(e, t) {
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
          t.push(`\\${n} `), Ns(r.content, t), Ad(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Ns(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), Ns(r.content, t);
      }
    }
}
function Pd(e, t, r) {
  const n = is(e);
  if (!oe(n)) return !1;
  const i = q();
  if (!O(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let d = i.anchor.getNode(); d; d = d.getParent())
    if (n.is(d)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = _l(n, t, r);
  if (!o) return !1;
  const a = kr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const d of o.text)
    ns.test(d) || c.set(d, (c.get(d) ?? 0) + 1);
  const l = [];
  Ns(a, l);
  for (const d of l.join("").replaceAll(R, "~")) {
    if (ns.test(d)) continue;
    const u = c.get(d);
    u !== void 0 && u > 0 && c.set(d, u - 1);
  }
  for (const d of c.values()) if (d > 0) return !0;
  return !1;
}
function DM(e) {
  return [at(e), Vr()];
}
function Sl(e) {
  Ht(e, 2);
}
function UM(e) {
  const t = q();
  if (!O(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Ml(e) {
  const t = UM(e);
  e.splice(0, 0, DM(e.getMarker())), t && Sl(e);
}
function ro(e, t) {
  e.setMarker(t), Ml(e), Sl(e);
}
function FM(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!An(n)) {
    if (M(n) && !P(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(R), ot(n, Q, At), n.setMode("token");
      return;
    }
    if (mp(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Vr());
  }
}
function Od(e, t, r) {
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
function Fi(e) {
  for (let t = e; t; t = t.getParent())
    if (oe(t)) return t;
}
function zM(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Fi(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Fi(r.getNode())?.is(s) ?? !1, a = Fi(n.getNode())?.is(s) ?? !1;
    return !(o && !Od(r, s, "start") || a && !Od(n, s, "end"));
  });
}
function oc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = q();
  if (!(!O(r) || r.isCollapsed()))
    for (const n of zM(r)) t.add(n.getKey());
}
function KM(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = q();
  if (!O(r) || !r.isCollapsed()) return;
  const n = Fi(r.focus.getNode());
  n && t.add(n.getKey());
}
function jM(e) {
  const t = q();
  !O(t) || t.isCollapsed() || t.getNodes().some((r) => P(r)) && (oc(e), t.removeText());
}
function BM(e, t) {
  if (!ui(t.viewOptions)) return;
  if (Mt(e.getFirstChild())) {
    FM(e, t);
    return;
  }
  if (t.splitExpected.current) {
    Ml(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => oe(o) && !o.is(e))) {
      ro(e, tr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (oe(r)) {
    const n = e.getChildren().filter((a) => !An(a)), i = q();
    let s = !1;
    if (O(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Fi(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || L(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Ht(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  ro(e, tr);
}
function VM(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = er(t, fo(e.getMarker()));
  return r === "" ? void 0 : r;
}
function WM(e) {
  const t = e.getChildren().filter((s) => !P(s) && Y(s, Q) !== "attribute"), r = t[0];
  r && M(r) && r.getTextContent().startsWith(R) && r.setTextContent(r.getTextContent().slice(1));
  const n = VM(e);
  n && t.push(Le(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function HM(e, t) {
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
function GM(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(P(r) && r.getMarkerSyntax() === "opening")) {
    WM(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => P(o) && o.getMarkerSyntax() === "closing");
  i && !s && zt(e, t);
}
function $g(e, t, r) {
  if (!P(e.getFirstChild()) && r?.markerMode === "editable" && ui(r)) {
    ro(e, t);
    return;
  }
  _h(e, t);
}
function Ig() {
  const e = q();
  if (!O(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Lg(e);
    return t !== "removed" ? t : (ac(), "handled");
  }
  return ac() ? "handled" : "declined";
}
function JM(e, t) {
  if (!t) return e;
  const r = MM.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function Nd(e, t) {
  const r = q();
  if (!O(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Dg())
      return "declined";
  } else {
    const s = Lg(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => JM(s, t)
  );
  wd(n ?? "");
  for (const s of i)
    ac(), wd(s);
  return "handled";
}
function YM(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = ls(n);
  if (!i) return !1;
  const s = Wt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !M(i) || P(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Lg(e) {
  const t = Wt(e.anchor.getNode()), r = Wt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), XM() ? "removed" : "needs-plain-split");
}
function wd(e) {
  if (e === "") return;
  const t = q();
  O(t) && t.insertText(e);
}
function XM() {
  const e = q();
  if (!O(e) || !e.isCollapsed()) return !1;
  const t = Wt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => P(r) && r.getMarkerSyntax() === "opening");
}
function Dg() {
  const e = q();
  if (!O(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Wt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function ac() {
  const e = q();
  if (!O(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Dg();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = gr("fp", { closed: "false" });
  i.append(at("fp"));
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
    const [d] = l;
    d && (ik(d), i.append(d));
  }
  return i.getChildren().every(P) && i.append(qc()), Ug(i), !0;
}
function Ug(e) {
  const t = e.getChildren().find((r) => !P(r));
  if (M(t)) {
    const r = t.getTextContent().startsWith(R) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (L(t)) {
    Ug(t);
    return;
  }
  e.selectEnd();
}
function QM(e) {
  const t = [];
  let r = e;
  for (; r; )
    $(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function ZM(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Ue().getChildren()) {
    if (t && n.is(t)) break;
    (Tt(n) || We(n) || oe(n)) && r.push(n.getMarker());
  }
  return r;
}
function eE(e) {
  let t = e;
  for (; L(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function tE(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Mt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && An(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(eE(i)) && r === 0 : !1;
}
function rE(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Mt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && An(i) && t.is(i) && r === 0;
}
function nE() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function iE() {
  const e = q();
  if (!O(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = nt(t, oe), s = !n && (!i || rE(i, t, r)) ? "paragraph" : "character", o = Wt(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: ZM(t),
    openCharMarkers: QM(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Bc(t, r),
    anchorRect: nE()
  };
}
function sE() {
  const e = q();
  if (!O(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!M(t) || P(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = EM.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function oE(e, t, r) {
  $g(e, t, r), Sl(e);
}
function aE(e, t, r) {
  const n = q();
  if (!O(n)) return;
  const i = n.focus.getNode(), s = nt(i, oe);
  if (t === "backslash" && s && tE(s, i, n.focus.offset)) {
    oE(s, e, r);
    return;
  }
  zg(e, r);
}
function cE(e, t) {
  const r = q();
  return !O(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Fg(e) {
  const t = q();
  return O(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function lE(e, t, r, n) {
  if (O(q()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && sE(), e.kind === "closeTag") {
    Fg(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Ig() !== "declined") return;
  if (e.kind === "paragraph" && Qe.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    aE(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Se.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return ng(
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
  ).action({ editor: cs(), reference: r });
}
function zg(e, t) {
  const r = q();
  if (!O(r)) return;
  const n = ui(t);
  if (tg()) {
    const s = q();
    if (!O(s)) return;
    const o = nt(s.anchor.getNode(), oe);
    if (!o) return;
    o.setMarker(e), n && Ml(o);
    return;
  }
  const i = r.insertParagraph();
  oe(i) && (n ? ro(i, e) : i.setMarker(e));
}
function uE() {
  const [e] = le();
  return K(() => e.registerCommand(df, () => !0, $t), [e]), null;
}
function Kg(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Paragraph : !(Se.isValidMarker(r) || uo(r));
}
function dE(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Character : !(Se.isValidMarker(r) || uo(r));
}
function fE(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = _M.exec(e)?.[1];
  return r === void 0 ? !1 : !Kg(r, t);
}
function jg(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !fE(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!oe(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (oe(i))
    return [i, r];
}
function Bg(e, t) {
  const r = jg(e, t.getMarker);
  return r !== void 0 && Pg(r, t);
}
function pE(e, t) {
  const r = q();
  O(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function Vg(e) {
  const t = CM.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function hE(e) {
  const t = q();
  if (!O(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = Vg(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function gE(e) {
  const t = q();
  if (!O(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (j(e.getParent()) && M(r)) {
    const n = r.getNextSibling();
    if ($(n)) {
      Kc(n);
      return;
    }
  }
  M(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function qd(e, t) {
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
function Rd(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Wg(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return zt(e, r);
  const n = hE(e), i = e.getParent();
  if (oe(i)) {
    if (!Kg(t, r.getMarker))
      return Bg(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : zt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Rd(s, t) && qd(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if ($(i) || j(i)) {
    const s = t.replace(/^\+/, "");
    if (!($(i) ? dE(t, r.getMarker) : Se.isValidMarker(s)))
      return zt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return zt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(P).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (pE(c, rt(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Rd(a, s) && qd(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return zt(e, r);
}
function mE(e) {
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
function yE(e, t) {
  const r = e.getTextContent();
  if (Wr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Be(e.getParent()) && Ic(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !mE(e)) {
    fk(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = TM.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), Wg(e, n[1], t);
      return;
    }
    if (xM.test(r)) {
      t.pendingKeys.delete(e.getKey()), zt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = rt(e.getMarker(), e.getNested());
    if ($(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = q(), o = O(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = Le(r.slice(i.length));
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
  if (Lp(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Hg(e) {
  if (!Cf(e)?.length)
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
const Ai = Hg("v"), kE = Hg("c"), $d = /^[ \u00A0]*$/;
function Id(e, t, r) {
  const n = e.getNextSibling();
  if (M(n) && n.getType() === Ke.getType() && n.getMode() === "normal" && Y(n, Q) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = Le(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function TE(e, t) {
  const r = e.getTextContent(), n = It("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (Ai.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = Ai.valueAndRest.exec(c);
    if (l && $d.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (Ai.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Ai.valueAndRest.exec(r);
  if (!s) {
    const c = Ai.markerRest.exec(r);
    if (c) {
      const [, l, d, u] = c, f = q(), p = O(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(d), e.setTextContent(It("v", d));
      const g = p !== void 0 && p >= l.length ? Math.min(p - l.length, u.length) : void 0;
      Id(e, u, g);
      return;
    }
    t.pendingKeys.delete(e.getKey()), zt(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), $d.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(It("v", o)), a && Id(e, a, a.length);
}
const xE = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function _E(e, t) {
  const r = e.getParent();
  if (!j(r) || r.getIsCollapsed() !== !1 || !Cf(r.getMarker())?.includes("caller")) return !1;
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
  const o = xE.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(St(a)), !0;
}
function CE(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!M(t)) return;
  const r = It("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = kE.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Gg(e) {
  if (Fe(e)) {
    const { wrapper: t } = ko(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (j(e)) {
    const { wrapper: t } = vp(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Re(e)) {
    const t = [], r = Sp(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Ep(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Pe(e)) {
    const t = [], r = Hi(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = Hi(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function vE(e) {
  const t = q();
  if (!O(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Gg(e).some((n) => r.is(n));
}
function SE(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && oe(e) && mp(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Ji)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && hs(l, e) && (i || vE(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Gg(e))
    l.remove(), n = !0;
  let s = !1;
  if ($(e)) {
    const l = bk(e);
    l !== void 0 && Zy(l) && (Op(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Ji)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (pT(l, e)) {
        Xi(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Wp(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Co(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function Ld(e) {
  return M(e) && e.getType() === Ke.getType() && e.getMode() === "normal" && Y(e, Q) !== "attribute";
}
function ME(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = ie(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && Ld(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && Ld(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Es(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = ME(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = ie(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (P(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (Wr(c)) continue;
      const g = yg.exec(p);
      c.getMarkerSyntax() === "opening" && g ? n = Wg(c, g[1], e) || n : r === "idle" && Pd(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Bg(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = zt(c, e) || n;
      continue;
    }
    const l = kn(c)?.owner, d = l?.isAttached() ? l : c, u = d.getKey();
    if (o.has(u)) {
      a !== u && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(u)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(u);
      continue;
    }
    e.pendingKeys.delete(a), a !== u && e.pendingKeys.delete(u), o.add(u);
    const f = SE(d, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && Pd(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(u);
        continue;
      }
      n = zt(d, e) || n;
    }
  }
  return n;
}
function Jg(e) {
  if (Hr(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if ($(t)) return $i(t) !== void 0;
  return !1;
}
function EE(e) {
  const t = kn(e);
  if (!t) return !1;
  const r = bn(t.kind);
  return !Co(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Dd(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (Tt(t) || Ie(t) || Fp(t)) return !0;
  return !1;
}
function AE(e, t) {
  const r = e.getTextContent(), n = Y(e, Q), i = e.getParent();
  if (n !== "attribute" && Re(i)) {
    r.replace(/^[ \u00A0]+/, "") === It("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (_E(e, t)) return;
  if (n === "attribute") {
    EE(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && Jg(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Dd(e))
      t.pendingKeys.add(e.getKey());
    else if (Ap(e)) t.pendingKeys.add(e.getKey());
    else if (Re(is(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      $(a) && Np(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Dd(e)) return;
  const s = q(), o = O(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (vM.test(o)) {
    if (cb(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), zt(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function PE(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Wp(e, t);
}
function OE(e) {
  const t = (r) => {
    if (P(r)) {
      Wr(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (Hr(r)) {
      Lp(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Ji)
      n.settleScope !== "none" && n.ownerPredicate(r) && (hs(n, r) || PE(n, r)) && e.pendingKeys.add(r.getKey());
    if (Pe(r)) {
      r.getTextContent() !== It("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (M(r)) {
      if (r.getType() !== Ke.getType() || Y(r, Q) === "attribute") return;
      const n = r.getParent();
      if (Re(n)) {
        r.getTextContent() !== It("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && Jg(r) || i.includes("//") || Ap(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if ($(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Ie(r) && !Tt(r)) {
      if (Be(r) && r.getChildrenSize() === 0) {
        const n = kn(r)?.owner;
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
  const r = Y(e, Q);
  if (r === "attribute" || r === At) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (Tt(o) || Re(o) || Ie(o)) return;
  const n = t.startsWith(R) && $(e.getParent()), i = n ? t.slice(1) : t, s = (n ? R : "") + i.replace(/ (?=[ \u00A0])/g, R).replace(new RegExp("(?<=\\u00A0) ", "g"), R);
  s !== t && e.setTextContent(s);
}
function wE(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function cc(e) {
  const t = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!t) return;
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(t.getData("text/plain")), i = t.getData("text/html"), s = i ? r(wE(i)) : "";
  return {
    plainText: n,
    html: i,
    htmlText: s,
    text: n || s,
    isInternal: !!t.getData("application/x-lexical-editor")
  };
}
function qE(e) {
  const t = cc(e);
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
  const l = cs();
  return c.forEach((d, u) => {
    if (u > 0 && l.dispatchCommand(ws, void 0), d === "") return;
    const f = q();
    O(f) && f.insertText(d);
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
  const t = q();
  if (!O(t) || t.isCollapsed()) return;
  const r = {
    "text/plain": t.getTextContent().replaceAll(R, " ")
  }, n = hy(e), i = gy(e);
  return n && (r["text/html"] = RE(n)), i && (r["application/x-lexical-editor"] = i), r;
}
function Ud(e, t, r) {
  const n = q();
  if (!O(n) || n.isCollapsed()) return !1;
  const i = $E(t);
  if (!i) return !1;
  if (!e || !("clipboardData" in e))
    return py(t, null, i), r && n.removeText(), !0;
  if (e.clipboardData == null) return !1;
  e.preventDefault();
  for (const [s, o] of Object.entries(i)) e.clipboardData.setData(s, o);
  return r && n.removeText(), !0;
}
const Yg = ff(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function ka(e) {
  const t = e();
  return Ir(nf), Ir(Ef), t;
}
const Fd = 8, IE = 1e3;
function Vn(e, t) {
  const r = Pe(e) ? ["va", "vp"] : Fe(e) ? ["milestone"] : j(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    bT(bn(n), e, t.pendingKeys);
}
function LE(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(kc) || i.updateTags.has(Ki)) return;
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
    e.registerMutationListener(Ke, r),
    e.registerMutationListener(sr, r),
    e.registerMutationListener(Tr, r),
    e.registerMutationListener(_r, r)
  );
}
function DE(e, t, r) {
  return Xe(
    e.registerCommand(
      lr,
      (n) => {
        if (Ph()) return !1;
        const i = cc(n);
        if (!i) return !1;
        const s = i.text;
        if (s.includes(`
`)) {
          const a = (r ? s.replaceAll(R, "~") : s).split(`
`);
          let c = Nd(a, t.getMarker);
          if (c === "declined" && YM(e) && (c = Nd(a, t.getMarker)), c === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      ur
    ),
    e.registerCommand(
      lr,
      (n) => {
        const i = cc(n);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !DS()) return !1;
        n?.preventDefault();
        const o = q();
        return O(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(ws, void 0), a === "") return;
          const l = q();
          O(l) && l.insertText(a);
        }), !0;
      },
      $e
    ),
    e.registerCommand(
      lr,
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
  const [i] = le(), s = e?.markerMode === "editable", o = !!e && Eo(e), a = Z(void 0), c = Z(n);
  return K(() => {
    c.current = n;
    const l = a.current;
    l && (e && (l.viewOptions = e), l.getMarker = t ?? rr, l.logger = r);
  }, [e, t, r, n]), K(() => {
    if (!s || !e) return;
    const l = {
      viewOptions: e,
      getMarker: t ?? rr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r
    };
    a.current = l;
    const d = lT(i, l.pendingKeys);
    let u, f = !1, p, g = !1, m = !1, y = 0;
    const T = () => y < Fd ? !1 : (l.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Fd} consecutive mutating passes; leaving ${l.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...l.pendingKeys].join(", ")}`
    ), !0), C = (x, F = "departure") => {
      i.update(() => {
        y = ka(
          () => Es(l, x, F)
        ) ? y + 1 : 0;
      });
    };
    let S;
    const E = () => {
      if (S !== void 0 && clearTimeout(S), S = void 0, m || l.pendingKeys.size === 0) return;
      const x = c.current ?? IE;
      x < 0 || (S = setTimeout(() => {
        S = void 0, !(m || l.pendingKeys.size === 0) && (f || T() || C(void 0, "idle"));
      }, x));
    }, A = Xe(
      i.registerNodeTransform(sr, (x) => {
        if (i.isComposing()) return;
        yE(x, l);
        const F = kn(x);
        F && (Pe(F.owner) || j(F.owner) || Re(F.owner) || Fe(F.owner) && ko(F.owner).wrapper === void 0) && Vn(F.owner, l);
      }),
      i.registerNodeTransform(pt, (x) => {
        i.isComposing() || (TE(x, l), Vn(x, l));
      }),
      i.registerNodeTransform(Pt, (x) => {
        i.isComposing() || (CE(x), x.isAttached() && Vn(x, l));
      }),
      i.registerNodeTransform(Qe, (x) => {
        i.isComposing() || BM(x, l);
      }),
      i.registerNodeTransform(me, (x) => {
        if (!i.isComposing()) {
          GM(x, l);
          for (const F of ["separator", "char"])
            x.isAttached() && hs(bn(F), x) && l.pendingKeys.add(x.getKey());
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
      i.registerNodeTransform(Bt, (x) => {
        i.isComposing() || Vn(x, l);
      }),
      i.registerNodeTransform(_r, (x) => {
        if (i.isComposing()) return;
        const F = kn(x);
        F && (Fe(F.owner) || Pe(F.owner) || j(F.owner) || Re(F.owner)) && Vn(F.owner, l);
      }),
      i.registerNodeTransform(Se, (x) => {
        i.isComposing() || (HM(x, l), Vn(x, l));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      i.registerNodeTransform(vr, (x) => {
        i.isComposing() || bE(x, l);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      i.registerNodeTransform(Ke, (x) => {
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
        Ke,
        (x) => {
          i.getEditorState().read(() => {
            for (const [F, D] of x) {
              if (D === "destroyed") continue;
              const G = ie(F);
              !G || Y(G, Q) !== "attribute" || Be(G.getParent()) || i.getElementByKey(F)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      LE(i, l),
      ...o ? [
        i.registerNodeTransform(Ke, (x) => {
          i.isComposing() || NE(x);
        }),
        i.registerCommand(
          lo,
          (x) => Ud(
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
          (x) => Ud(
            x && typeof x == "object" && "clipboardData" in x ? x : null,
            i,
            !0
          ),
          $e
        ),
        i.registerCommand(
          lr,
          (x) => qE(
            // Same jsdom-safe duck-check as COPY above.
            x && typeof x == "object" && "clipboardData" in x ? x : null
          ),
          $e
        )
      ] : [],
      i.registerCommand(
        hn,
        () => (oc(l), !1),
        ur
      ),
      i.registerCommand(
        mc,
        () => (i.isComposing() || jM(l), !1),
        Gn
      ),
      i.registerCommand(
        co,
        () => (f = !1, y = 0, E(), !1),
        $t
      ),
      i.registerCommand(
        br,
        (x) => (f = !1, y = 0, E(), (x.key === "Backspace" || x.key === "Delete") && (oc(l), KM(l)), i.isComposing() || !x.ctrlKey || x.altKey || x.shiftKey || x.metaKey || x.key !== " " && x.code !== "Space" || !LS() ? !1 : (x.preventDefault(), !0)),
        $e
      ),
      i.registerCommand(
        lf,
        (x) => {
          const F = Ig();
          F === "needs-plain-split" && i.dispatchCommand(ws, void 0);
          const D = F !== "declined" || kT();
          return D && x?.preventDefault(), Es(l), D;
        },
        $e
      ),
      i.registerCommand(
        ws,
        () => (l.splitExpected.current = !0, tg()),
        $e
      ),
      DE(i, l, o),
      i.registerCommand(
        Yg,
        () => {
          if (f) return !0;
          const x = i.getRootElement(), F = x?.ownerDocument, D = !!x && !!F && F.hasFocus() && x.contains(F.activeElement);
          let G;
          if (D) {
            const V = q();
            G = O(V) ? V.focus.key : u;
          }
          return ka(() => Es(l, G)), !0;
        },
        $t
      ),
      i.registerCommand(
        bc,
        () => {
          if (f) return !1;
          const x = q(), F = O(x) ? x.focus.key : u;
          return ka(() => Es(l, F)), !1;
        },
        $t
      ),
      i.registerUpdateListener(({ editorState: x, tags: F }) => {
        l.splitExpected.current = !1, l.wholeParaDeleteExpected?.clear(), l.collapsedDeleteCaretParas?.clear(), l.rebuildAttempted.clear();
        const D = x.read(() => {
          const V = q();
          return O(V) ? V.focus.key : void 0;
        }), G = p;
        if (D !== void 0 && (p = D), F.has(kc)) {
          l.pendingKeys.clear(), x.read(() => OE(l)), f = !0, D !== void 0 && (u = D);
          return;
        }
        if (F.has(Dr)) {
          D !== void 0 && D !== G && (f = !0);
          return;
        }
        f || (D !== void 0 && (u = D), E(), !(g || D === void 0) && [...l.pendingKeys].some((V) => V !== D) && (g = !0, queueMicrotask(() => {
          g = !1, !m && (T() || C(u));
        })));
      })
    );
    return () => {
      m = !0, S !== void 0 && clearTimeout(S), S = void 0, d(), A(), a.current = void 0;
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
function zd(e) {
  e.classList.remove(...FE), e.removeAttribute("aria-description"), zE.includes(e.title) && e.removeAttribute("title");
}
function jE(e, t, r, n) {
  const i = (a) => a.read(() => Ue().getChildrenKeys()), s = i(t), o = i(e);
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
function BE(e) {
  const t = ie(e), r = t?.getTopLevelElement();
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
    const s = t ?? Bs;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const d = lM(s, l);
        let u = d;
        if (l) {
          u = new Map(d);
          for (const [f, p] of o) {
            if (u.has(f) || BE(f)) continue;
            const g = ie(f)?.getTopLevelElement();
            !g || l.has(g.getKey()) || u.set(f, p);
          }
        }
        for (const [f] of o) {
          if (u.has(f)) continue;
          const p = n.getElementByKey(f);
          p && zd(p);
        }
        for (const [f, p] of u) {
          const g = n.getElementByKey(f);
          g && KE(g, p);
        }
        o = u, r?.debug(`[MarkerValidation] pass: ${u.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: d, dirtyElements: u, dirtyLeaves: f }) => {
        u.size === 0 && f.size === 0 || a(
          jE(l, d, u, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const d = n.getElementByKey(l);
        d && zd(d);
      }
    };
  }, [n, i, t, r]), null;
}
function Qg(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = yr(o);
    a && L(s) && Qg(s.getChildren(), a, r);
  }
}
function Zg(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = yr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = ii(o);
      if (c === void 0 || !c.includes(tt)) continue;
      const l = c.split(tt), d = [];
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
function em(e, t, r) {
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
function tm(e, t) {
  const r = [];
  for (const n of e)
    xg(n, t) || ((oe(n) || $(n)) && r.push(n.getMarker()), L(n) && r.push(...tm(n.getChildren(), t)));
  return r;
}
function rm(e) {
  const t = [];
  for (const r of e) {
    const n = xl(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = yr(r);
    i && t.push(...rm(i));
  }
  return t;
}
function El(e, t, r) {
  const n = tm(e, r), i = rm(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function WE(e, t) {
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
  if (!(!M(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function Al(e, t) {
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
    const T = _l(y, o, s);
    if (!T) return;
    c.text.length > 0 && (c.text += " ");
    const C = c.text.length;
    T.spans.forEach(
      (S) => c.spans.push({ ...S, start: S.start + C, end: S.end + C })
    ), c.sentinels.push(...T.sentinels), c.text += T.text;
  }
  const l = i ? Al(c, i) : c.text, d = kr(l, {
    getMarker: o
  });
  if (d.length === 0) return;
  if (wn(d) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const u = jr.serializeEditorState(
    { type: fr, version: dr, content: d },
    s
  ).root.children;
  if (No(u) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = em(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (hi(u, o) === pi(e, o) && El(e, u, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Zg(u, f);
  const g = GE(e), m = nm(u);
  for (let y = 0; y < g.length && y < m.length; y++)
    g[y].sid !== void 0 && m[y].number === g[y].number && (m[y].sid = g[y].sid);
  return u;
}
function GE(e) {
  const t = [], r = (n) => {
    Pe(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function nm(e) {
  const t = [];
  for (const r of e) {
    np(r) && t.push(r);
    const n = yr(r);
    n && t.push(...nm(n));
  }
  return t;
}
function JE(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Og(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: d } = c;
  if (d.length === 0) return;
  const u = i ? Al(l, i) : l.text, f = kr(u, {
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
  const g = p.content ?? [], m = Ng(g), y = e.getCategory() !== m, T = kg(e, g, m, s);
  if (T.failure !== void 0) {
    T.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : T.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const C = T.children;
  if (No(C) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const S = em(l, t, n);
  if (!S) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (hi(C, o) === pi(d, o) && El(d, C, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: d, category: m, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Zg(C, S), { rebuilt: C, contentNodes: d, category: m, categoryChanged: y };
}
function Kd(e) {
  return e.$?.textType;
}
function YE(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Kd(e) === Kd(t);
}
function XE(e) {
  const t = [];
  for (const r of e) {
    const n = ie(r);
    n?.isAttached() && Ie(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function QE(e) {
  if (!P(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!j(t)) return;
  const r = e.getTextContent();
  if (Wr(e)) return;
  const n = yg.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function jd(e, t) {
  const r = e;
  r.marker = t, r.text = Cg(t, r.markerSyntax, r.nested);
}
function ZE(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Se.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && jd(a.node, s);
  const c = n.getChildren().filter(P).filter((d) => d.getMarkerSyntax() === "closing" && d.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && jd(l.node, s);
}
function e1(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Rg(e, i, n);
  if (!o) return;
  const a = r ? Al(o, r) : o.text, c = kr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (wn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const d = jr.serializeEditorState(
    { type: fr, version: dr, content: c },
    n
  ).root.children;
  if (d.length === 0) return;
  const u = [e, ...qo(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && hi(d, i) === pi(u, i) && El(u, d, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return d;
}
function t1(e, t, r, n, i) {
  const s = WE(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = (y) => {
    j(y) ? c.set(y.getKey(), y) : Re(y) ? l.set(y.getKey(), y) : o.set(y.getKey(), [y]);
  };
  for (const y of t) {
    const T = ie(y);
    if (!T?.isAttached()) continue;
    const C = is(T);
    if (C) {
      if (u(C), P(T)) {
        const S = jg(T, r.getMarker);
        S && a.push(S);
      }
      if (j(C)) {
        const S = QE(T);
        S && d.set(C.getKey(), S);
      }
    }
  }
  const f = /* @__PURE__ */ new Set();
  for (const y of a)
    y.some((T) => f.has(T.getKey())) || (y.forEach((T) => {
      f.add(T.getKey()), o.delete(T.getKey());
    }), o.set(y[0].getKey(), y));
  if (s) {
    const y = is(s.node);
    y && u(y);
  }
  const p = XE(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && p.length === 0)
    return;
  const g = new Set(p.map((y) => y.getKey())), m = /* @__PURE__ */ new Map();
  Qg(Ue().getChildren(), e.root.children, m);
  for (const y of d.values()) ZE(y, m);
  for (const y of c.values()) {
    const T = m.get(y.getKey()), C = T ? yr(T.node) : void 0;
    if (!T || !C) continue;
    const S = JE(y, m, r, g, s);
    if (!S) continue;
    if (S.categoryChanged) {
      const x = T.node;
      S.category === void 0 ? delete x.category : x.category = S.category;
    }
    if (!S.rebuilt) continue;
    const E = m.get(S.contentNodes[0].getKey());
    if (!E) continue;
    const A = C.indexOf(E.node);
    A < 0 || C.splice(A, S.contentNodes.length, ...S.rebuilt);
  }
  for (const y of o.values()) {
    const T = m.get(y[0].getKey());
    if (!T) continue;
    const C = HE(y, m, r, g, s);
    if (!C) continue;
    const S = T.siblings.indexOf(T.node);
    S < 0 || T.siblings.splice(S, y.length, ...C);
  }
  for (const y of l.values()) {
    const T = m.get(y.getKey());
    if (!T) continue;
    const C = 1 + qo(y).length, S = e1(y, r, s);
    if (!S) continue;
    const E = T.siblings.indexOf(T.node);
    E < 0 || T.siblings.splice(E, C, ...S);
  }
  for (const y of p) {
    const T = m.get(y.getKey());
    if (!T) continue;
    const C = T.siblings.indexOf(T.node);
    if (C < 0) continue;
    T.siblings.splice(C, 1);
    const S = T.siblings[C - 1], E = T.siblings[C], A = S && ii(S), x = E && ii(E);
    S && E && A !== void 0 && x !== void 0 && YE(S, E) && (S.text = A + x, T.siblings.splice(C, 1));
  }
  return Hh(e, r.viewOptions);
}
function r1({
  viewOptions: e,
  logger: t
}) {
  const [r] = le(), n = ui(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return K(() => {
    if (n)
      return r.registerNodeTransform(
        Qe,
        (i) => n1(i, t)
      );
  }, [r, n, t]), null;
}
function n1(e, t) {
  e.getMarker() !== tr && (e.isEmpty() || Mt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${tr}" (key ${e.getKey()})`
  ), e.setMarker(tr)));
}
function i1({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = le(), n = Z({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return K(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, no(s, e) || s1(i, r, e);
  }, [r, e, t]), K(
    () => r.registerMutationListener(
      Lt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = lc(r);
        Bd(n.current, r, a, {
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
        Ue().getChildren().filter(We).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const d = a === c ? /* @__PURE__ */ new Set() : i(a), u = i(c), f = [...u].some((p) => !d.has(p));
      f && (lc(r) || Bd(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...d].some((p) => !u.has(p)),
        isSameDocumentReload: As(a) === As(c)
      }));
    };
    return Xe(
      ...[Pt, ir].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), K(
    () => r.registerCommand(
      pr,
      () => {
        const i = n.current;
        return i.phase === "idle" && l1(i, a1()), !1;
      },
      $t
    ),
    [r]
  ), K(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(pr, void 0));
    };
    return Xe(
      r.registerMutationListener(xt, i),
      r.registerMutationListener(pt, i)
    );
  }, [r]), K(() => {
    const i = () => p1(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function s1(e, t, r) {
  if (o1(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = lc(t);
  (!n || n === r.book) && t.update(() => im(r.chapterNum, r.verseNum), {
    tag: Dr
  });
}
function o1(e, t) {
  const r = e.pendingEchoes.findIndex((n) => no(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function a1() {
  const e = q(), t = Oc(e);
  if (!t) return;
  const r = Pl(), n = op(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = Hc(t, e), { verseNum: o, verse: a } = KT(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function lc(e) {
  return e.getEditorState().read(() => Pl()?.getCode() || void 0);
}
function Pl() {
  return Ue().getChildren().find(Tt);
}
function Bd(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Ta(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Ta(e, t), e.phase = "navigating") : i && Ta(e, t), r && r !== e.scrRef.book && am(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Ta(e, t) {
  queueMicrotask(() => {
    t.update(
      () => im(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Dr }
    );
  });
}
function im(e, t) {
  const r = Oc(q()), n = Gc(r)?.getNumber(), i = op(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (pp(n) ? om(t, n) : parseInt(n, 10) === t))
    return;
  const o = Ue().getChildren(), a = sp(o, e);
  if (!a) return;
  const c = ek(o, a), l = Hb(c, !0);
  Zb(c, l);
  let d;
  try {
    d = LT(c, t);
  } catch {
    return;
  }
  d && (oe(d) ? !M(d.getFirstChild()) && fi(d) || Ht(d, 0) : c1(d));
}
function c1(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || he(n)) {
    Ht(t, r);
    return;
  }
  const i = _o(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (M(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = L(n) && !j(n) ? sm(n) : void 0;
  s ? s.select(0, 0) : Ht(t, r);
}
function sm(e) {
  const t = e.getFirstChild();
  if (M(t)) return t;
  if (L(t) && !j(t)) return sm(t);
}
function As(e) {
  return e.read(() => {
    const t = Ue().getChildren().find(We);
    return `${Pl()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function l1(e, t) {
  e.phase !== "navigating" && t && (u1(t, e.scrRef) || am(e, d1(t, e.scrRef)));
}
function u1(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? om(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function om(e, t) {
  try {
    return Nc(e, t);
  } catch {
    return !1;
  }
}
function d1(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const f1 = 8;
function am(e, t) {
  return no(t, e.scrRef) || e.pendingEchoes.some((r) => no(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > f1 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function no(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function p1(e) {
  e.phase = "idle";
}
function h1(e) {
  return Tt(e) ? `${e.__code}` : Re(e) ? `${e.__marker} "${e.__number}"` : $(e) ? `${e.__marker}` : ds(e) ? `${e.__marker} "${e.__number}"` : or(e) ? `${e.__caller}` : On(e) ? `${e.__marker} "${e.__number}"` : j(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : oe(e) ? `${e.__marker}` : M(e) ? `"${e.__text}"${g1(e)}` : xe(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Pe(e) ? `${e.__marker} "${e.__number}"` : "";
}
function g1(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[as]) : "";
}
function m1() {
  const [e] = le();
  return /* @__PURE__ */ v(
    my,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: h1,
      editor: e
    }
  );
}
const cm = Qd(null), Vd = 4;
function y1({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Z(null), s = Zd(cm);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return K(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ v("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function b1({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = de(), [s, o] = de(), a = ge(
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
  }, l = ze(() => ({ registerItem: a }), [a]);
  return K(() => {
    const d = s ?? n?.[0];
    d?.current && d.current.focus();
  }, [n, s]), /* @__PURE__ */ v(cm.Provider, { value: l, children: /* @__PURE__ */ v("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function k1({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Z(null), c = Z(null), [l, d] = de(!1), u = () => {
    d(!1), c && c.current && c.current.focus();
  };
  return K(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: g, left: m } = f.getBoundingClientRect();
      p.style.top = `${g + f.offsetHeight + Vd}px`, p.style.left = `${Math.min(m, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), K(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (g) => {
        const m = g.target;
        o && a.current && a.current.contains(m) || f.contains(m) || d(!1);
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
          const { top: m } = p.getBoundingClientRect(), y = m + p.offsetHeight + Vd;
          y !== g.getBoundingClientRect().top && (g.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ ke(fn, { children: [
    /* @__PURE__ */ ke(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => d(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ v("span", { className: i }),
          t && /* @__PURE__ */ v("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ v("i", { className: "chevron-down" })
        ]
      }
    ),
    l && un(
      /* @__PURE__ */ v(b1, { dropDownRef: a, onClose: u, children: s }),
      document.body
    )
  ] });
}
const uc = {
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
}, dc = {
  ...uc,
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
function T1({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ v(
    k1,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + x1(t),
      buttonLabel: _1(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(uc).map((n) => /* @__PURE__ */ ke(
        y1,
        {
          className: "item block-marker " + C1(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ v("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ v("span", { className: "text usfm_" + n, children: uc[n] })
          ]
        },
        n
      ))
    }
  );
}
function x1(e) {
  return e && e in dc ? e : "ban";
}
function _1(e) {
  return e && e in dc ? dc[e] : "No Style";
}
function C1(e) {
  return e ? "active dropdown-item-active" : "";
}
function Wd() {
  return /* @__PURE__ */ v("div", { className: "divider" });
}
const v1 = Sn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = le(), [o, a] = de(s), [c, l] = de(), [d, u] = de(!1), [f, p] = de(!1), g = ge(
    ({
      canUndo: m,
      canRedo: y,
      blockMarker: T,
      contextMarker: C
    }) => {
      u(m), p(y), l(T), n?.({
        canUndo: m,
        canRedo: y,
        blockMarker: T,
        contextMarker: C
      });
    },
    [n]
  );
  return K(() => s.registerCommand(
    pr,
    (m, y) => (a(y), !1),
    ur
  ), [s]), /* @__PURE__ */ ke(fn, { children: [
    /* @__PURE__ */ v(Ih, { onStateChange: g }),
    /* @__PURE__ */ ke("div", { className: "toolbar", children: [
      /* @__PURE__ */ v(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(pf, void 0);
          },
          title: qs ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(hf, void 0);
          },
          title: qs ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ v("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ v(Wd, {}),
      o === s && /* @__PURE__ */ ke(fn, { children: [
        /* @__PURE__ */ v(
          T1,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ v(Wd, {})
      ] }),
      /* @__PURE__ */ v("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), S1 = Mo(), M1 = {}, E1 = {};
function A1() {
  return /* @__PURE__ */ v("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
const lm = Sn(function({
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
  const u = Z(null), f = Z(null), p = Z(null), g = Z(t), m = Z(void 0), y = Z(void 0), T = Z(void 0), C = Z(void 0), S = Z(!1), [E, A] = de(t), [x, F] = de(0), [D, G] = de(), {
    isReadonly: V = !1,
    structureProtectionMode: ae = "off",
    hasExternalUI: ce = !1,
    hasSpellCheck: se = !1,
    textDirection: Ce = "ltr",
    markerMenuTrigger: Ae = "\\",
    view: ee,
    nodes: U,
    debug: te = !1,
    contextMenu: Me,
    styleInfo: Ne,
    markerSettleDelayMs: Jt
  } = a ?? E1, re = ee ?? S1, _t = es(re) && (re.markerMode !== "hidden" || !re.hasSpacing || re.hasGutterParaMarkers || re.hasActiveTextFocusBox) ? {
    ...re,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : re, Jr = Z(_t);
  Nt(Jr.current, _t) || (Jr.current = _t);
  const fe = Jr.current, lt = ze(() => U ?? M1, [U]), Ro = ze(() => Me, [Me]), gi = ze(
    () => AT(Ne ?? Bs),
    [Ne]
  ), Sr = Z(c);
  Nt(Sr.current, c) || (Sr.current = c);
  const Ge = Sr.current, ut = es(fe), ue = V || ut, qn = _t !== re;
  K(() => {
    ut && !V && Ge?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), qn && Ge?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    );
  }, [ut, V, qn, Ge]);
  const ye = Z(null), mi = ze(() => {
    if (fe.markerMode !== "editable") return;
    const N = Ne ?? Bs;
    return {
      getContext: () => ye.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (z) => yM(
        N,
        z,
        lt.extraValidMarkers
      ),
      getEnterItems: (z) => bM(
        N,
        z,
        lt.extraValidMarkers
      ),
      apply: (z, H) => {
        const J = ye.current;
        J && (H.trigger === "enter" ? J.splitParagraphWithMarker(z.marker) : J.applyMarkerMenuSelection(z, H));
      },
      commitTypedCloser: (z) => {
        ye.current?.commitTypedCloser(z);
      }
    };
  }, [fe, Ne, lt.extraValidMarkers]), ve = (N) => {
    S.current || (S.current = !0, Sr.current?.warn(
      `Editor: cannot ${N} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Mr = (N) => {
    if (ut)
      throw new Error(
        `Cannot ${N} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Er = (N) => {
    if (Mr(N), ue) throw new Error(`Cannot ${N} in readonly mode`);
  }, Yt = ze(
    () => ({
      namespace: "platformEditor",
      theme: { ...dg, showCharMarkerTitles: fe.showCharMarkerTitles },
      editable: !ue,
      editorState: void 0,
      // Handling of errors during update
      onError(N) {
        throw N;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [Ze, ...ut ? Fx : fh]
    }),
    [ue, ut, fe.showCharMarkerTitles]
  );
  ha.initialize(Ge);
  function Ar(N) {
    if (N !== void 0 && !US(N, lt.extraValidMarkers))
      throw new Error(`Unsupported character marker '${N}'`);
  }
  const Yr = ge(() => {
    const N = u.current;
    if (!N) return g.current;
    const z = mu(N), H = y.current;
    if ((!z || z.size === 0) && !H) return g.current;
    const J = N.getEditorState(), Te = J.toJSON();
    return J.read(
      () => t1(
        Te,
        z ?? /* @__PURE__ */ new Set(),
        { viewOptions: fe, getMarker: gi, logger: Ge },
        H,
        T.current
      )
    ) ?? g.current;
  }, [fe, gi, Ge]), yi = {
    focus() {
      u.current?.focus();
    },
    isFocused() {
      const N = u.current?.getRootElement();
      return !!N && N.ownerDocument.activeElement === N;
    },
    undo() {
      u.current?.dispatchCommand(pf, void 0);
    },
    redo() {
      u.current?.dispatchCommand(hf, void 0);
    },
    cut() {
      Er("cut"), u.current?.dispatchCommand(hn, null);
    },
    copy() {
      u.current?.dispatchCommand(lo, null);
    },
    paste() {
      Er("paste"), u.current && ol(u.current);
    },
    pastePlainText() {
      Er("paste as plain text"), u.current && al(u.current);
    },
    getUsj() {
      return Yr();
    },
    commitPendingMarkerEdits() {
      u.current?.update(
        () => {
          u.current?.dispatchCommand(Yg, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(N) {
      if (!N) {
        y.current = void 0;
        return;
      }
      const z = u.current?.getEditorState().read(() => {
        const H = q();
        return O(H) && H.isCollapsed() ? H.focus.key : void 0;
      });
      y.current = { input: N, nodeKey: z ?? T.current?.key };
    },
    setUsj(N) {
      if (!Nt(g.current, N)) {
        g.current = N, y.current = void 0;
        const z = Nt(E, N);
        A(N), z && F((H) => H + 1);
      }
    },
    applyUpdate(N, z = "remote") {
      if (ut && z === "remote") {
        Sr.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      Mr("apply an update"), u.current?.update(
        () => {
          z === "remote" && Ir(Ki), p_(N, fe, lt, Ge);
        },
        { discrete: !0 }
      );
      const H = u.current?.getEditorState();
      if (!H) return;
      const J = ha.deserializeEditorState(H, fe);
      if (J) {
        const Te = !Nt(g.current, J);
        if (Te && (g.current = J), Te || !Nt(E, J)) {
          const dt = Au(N, H, "apply");
          C.current = J, s?.(J, N, z, dt);
        }
      }
    },
    replaceEmbedUpdate(N, z) {
      const H = u.current?.read(() => ex(N, z));
      H ? this.applyUpdate(H) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${N}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (ut) {
        ve("get the selection");
        return;
      }
      return u.current?.read(ch);
    },
    setSelection(N) {
      if (ut) {
        ve("set the selection");
        return;
      }
      u.current?.update(() => {
        const z = Qc(N);
        z !== void 0 && (zi(z), Ir(Mf));
      });
    },
    setAnnotation(N, z, H, J, Te) {
      if (ut) {
        ve("set an annotation");
        return;
      }
      let dt, Ot, Xr, Qr;
      typeof J == "function" || J === void 0 ? (dt = J, Ot = Te) : (dt = J.onClick, Ot = J.onRemove, Xr = J.onMouseEnter, Qr = J.onMouseLeave), f.current?.setAnnotation(
        N,
        iu(z),
        H,
        dt,
        Ot,
        Xr,
        Qr
      );
    },
    removeAnnotation(N, z) {
      f.current?.removeAnnotation(iu(N), z);
    },
    formatPara(N) {
      Er("format a paragraph"), u.current?.update(() => {
        const z = q();
        if (!O(z)) {
          c?.warn(
            `formatPara refused: no range selection to retag with "${N}" (restore the caret before applying, as the marker palettes do)`
          );
          return;
        }
        ky(z, () => Vi(N));
        const H = q();
        if (!O(H)) return;
        const J = /* @__PURE__ */ new Set();
        H.getNodes().forEach((Te) => {
          const dt = Te.getTopLevelElement();
          oe(dt) && J.add(dt);
        }), J.forEach((Te) => $g(Te, N, fe));
      });
    },
    getElementByKey(N) {
      return u.current?.read(
        () => u.current?.getElementByKey(N) ?? void 0
      );
    },
    removeCharacterMarker(N) {
      if (ue) throw new Error("Cannot remove character marker in readonly mode");
      Ar(N);
      let z = !1;
      return u.current?.update(
        () => {
          const H = q();
          O(H) && (z = sg(H, N, fe));
        },
        { discrete: !0 }
      ), z;
    },
    replaceCharacterMarker(N, z) {
      if (ue) throw new Error("Cannot replace character marker in readonly mode");
      Ar(N), Ar(z);
      let H = !1;
      return u.current?.update(
        () => {
          const J = q();
          O(J) && (H = XS(J, N, z));
        },
        { discrete: !0 }
      ), H;
    },
    extendCharacterMarker(N, z) {
      if (ue) throw new Error("Cannot extend character marker in readonly mode");
      Ar(N), z?.forEach(
        (J) => Ar(J)
      );
      let H = !1;
      return u.current?.update(
        () => {
          const J = q();
          O(J) && (H = QS(
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
      if (!u.current) return;
      if (!Za(N, lt.extraValidMarkers))
        throw new Error(`Unsupported marker '${N}'`);
      const z = ec(
        N,
        m,
        fe,
        lt,
        Ge,
        void 0,
        Ne
      );
      return z.action({ editor: u.current, reference: r }), z.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!V)
        return u.current?.getEditorState().read(() => iE());
    },
    applyMarkerMenuSelection(N, z) {
      if (V) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!u.current) return;
      if (N.kind !== "closeTag" && !Za(N.marker, lt.extraValidMarkers))
        throw new Error(`Unsupported marker '${N.marker}'`);
      let H;
      return u.current.update(() => {
        H = lE(N, z, r, {
          expandedNoteKeyRef: m,
          viewOptions: fe,
          nodeOptions: lt,
          logger: c,
          styleInfo: Ne
        });
      }), H;
    },
    splitParagraphWithMarker(N) {
      if (V) throw new Error("Cannot split paragraph in readonly mode");
      u.current && u.current.update(() => {
        zg(N, fe);
      });
    },
    commitTypedMarker(N, z) {
      if (V) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!u.current) return !1;
      let H = !1;
      return u.current.update(() => {
        H = cE(N, z), H || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), H;
    },
    commitTypedCloser(N) {
      if (V) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!u.current) return !1;
      let z = !1;
      return u.current.update(() => {
        z = Fg(N), z || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), z;
    },
    insertNote(N, z, H) {
      Er("insert a note"), u.current?.update(() => {
        const J = uh(
          N,
          z,
          H,
          r,
          fe,
          lt,
          Ge
        );
        J && !J.getIsCollapsed() && (m.current = J.getKey());
      });
    },
    selectNote(N) {
      u.current?.update(() => {
        const z = Ru(N);
        z && (Lx(z, fe), z.getIsCollapsed() || (m.current = z.getKey()));
      });
    },
    getNoteOps(N) {
      return u.current?.read(() => {
        const z = Ru(N);
        if (z)
          return Yc(z);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  ye.current = yi, pc(d, () => yi), K(() => {
    const N = u.current;
    if (N)
      return N.registerUpdateListener(({ editorState: z }) => {
        z.read(() => {
          const H = q();
          if (!O(H) || !H.isCollapsed()) return;
          const J = H.focus.getNode();
          M(J) && (T.current = { key: J.getKey(), offset: H.focus.offset });
        });
      });
  }, []);
  const gs = ge(
    (N, z, H, J) => {
      if (ut) return;
      const Te = ha.deserializeEditorState(N, fe);
      if (Te) {
        const dt = !Nt(g.current, Te);
        if (dt && (g.current = Te), dt || !Nt(E, Te)) {
          const Ot = Au(J, N);
          C.current = Te, s?.(Te, J, "local", Ot);
        }
      }
    },
    [E, s, fe, ut]
  );
  K(() => {
    const N = u.current;
    if (!(!N || !s))
      return N.registerUpdateListener(({ tags: z, dirtyElements: H, dirtyLeaves: J }) => {
        !z.has(kc) && (H.size === 0 && J.size === 0 || z.has(Ki) || !mu(N)?.size) || queueMicrotask(() => {
          const Te = Yr();
          !Te || Nt(C.current, Te) || (C.current = Te, s(Te, void 0, "local", void 0));
        });
      });
  }, [s, Yr]);
  const Dt = ge(
    (N) => {
      G(N.contextMarker), o?.(N);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ ke(yf, { initialConfig: Yt, children: [
      /* @__PURE__ */ v(pC, { isEditable: !ue }),
      /* @__PURE__ */ ke("div", { className: "editor-container", children: [
        ce ? /* @__PURE__ */ v(Ih, { onStateChange: Dt }) : /* @__PURE__ */ v(
          "div",
          {
            className: "editor-toolbar-container" + (ue ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ v(
              v1,
              {
                ref: p,
                editorRef: ye,
                isReadonly: ue,
                onStateChange: Dt
              }
            )
          }
        ),
        /* @__PURE__ */ ke("div", { className: "editor-inner", children: [
          /* @__PURE__ */ v(kf, { editorRef: u }),
          /* @__PURE__ */ v(
            by,
            {
              contentEditable: /* @__PURE__ */ v(
                bf,
                {
                  className: `editor-input usfm ${f_(fe).join(" ")}${fe.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${fe.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: se
                }
              ),
              placeholder: /* @__PURE__ */ v(A1, {}),
              ErrorBoundary: Tf
            }
          ),
          ce && /* @__PURE__ */ v(fC, {}),
          /* @__PURE__ */ v(xf, {}),
          r && n && /* @__PURE__ */ v(i1, { scrRef: r, onScrRefChange: n }),
          r && !ce && /* @__PURE__ */ v(
            Lv,
            {
              trigger: Ae,
              scrRef: r,
              contextMarker: D,
              getMarkerAction: (N) => ec(
                N,
                m,
                fe,
                lt,
                Ge,
                void 0,
                Ne
              ),
              editableHarness: mi
            }
          ),
          /* @__PURE__ */ v(
            mC,
            {
              scripture: E,
              scriptureRef: g,
              nodeOptions: lt,
              editorAdaptor: jr,
              viewOptions: fe,
              logger: Ge
            },
            x
          ),
          /* @__PURE__ */ v(IC, { onChange: i }),
          /* @__PURE__ */ v(
            o_,
            {
              onChange: gs,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Fy
            }
          ),
          /* @__PURE__ */ v(nM, { viewOptions: fe }),
          /* @__PURE__ */ v(i_, { ref: f, logger: Ge }),
          /* @__PURE__ */ v(F_, { viewOptions: fe }),
          /* @__PURE__ */ v(eC, {}),
          /* @__PURE__ */ v(oC, {}),
          fe?.markerMode !== "editable" && /* @__PURE__ */ v(aC, { logger: Ge }),
          /* @__PURE__ */ v(dC, { options: Ro }),
          /* @__PURE__ */ v(gC, {}),
          /* @__PURE__ */ v(uE, {}),
          /* @__PURE__ */ v(
            UE,
            {
              viewOptions: fe,
              getMarker: gi,
              logger: Ge,
              markerSettleDelayMs: Jt
            }
          ),
          /* @__PURE__ */ v(
            VE,
            {
              styleInfo: Ne,
              viewOptions: fe,
              logger: Ge
            }
          ),
          /* @__PURE__ */ v(
            yC,
            {
              expandedNoteKeyRef: m,
              nodeOptions: lt,
              viewOptions: fe,
              logger: Ge
            }
          ),
          /* @__PURE__ */ v($C, {}),
          /* @__PURE__ */ v($_, {}),
          /* @__PURE__ */ v(N_, {}),
          /* @__PURE__ */ v(r1, { viewOptions: fe, logger: Ge }),
          /* @__PURE__ */ v(LC, {}),
          /* @__PURE__ */ v(vv, { structureProtectionMode: ae }),
          /* @__PURE__ */ v(Sv, { textDirection: Ce }),
          /* @__PURE__ */ v(Ev, {}),
          /* @__PURE__ */ v($v, {}),
          l
        ] }),
        te && /* @__PURE__ */ v(m1, {})
      ] })
    ] }, fe.verseLayout ?? "inline")
  );
}), IA = Sn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ v(lm, { ref: r, ...i });
});
function um() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function io(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? um() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function dm(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? um() : r,
    quote: e,
    type: "thread"
  };
}
function Hd(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function P1(e) {
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
class O1 {
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
          const c = Hd(a);
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
          const c = Hd(a);
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
    return this._comments = n, xa(this), t.type === "comment" ? {
      index: s,
      markedComment: P1(t)
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
      Ry,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      $t
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof $y) {
            const d = l.target, u = l.delta;
            let f = 0;
            for (const p of u) {
              const g = p.insert, m = p.retain, y = p.delete, T = d.parent, C = d === r ? void 0 : T instanceof Yl && this._comments.find((S) => S.id === T.get("id"));
              if (Array.isArray(g)) {
                const S = f;
                g.slice().reverse().forEach((E) => {
                  const A = E.get("id"), F = E.get("type") === "thread" ? dm(
                    E.get("quote"),
                    E.get("comments").toArray().map(
                      (D) => io(
                        D.get("content"),
                        D.get("author"),
                        D.get("id"),
                        D.get("timeStamp"),
                        D.get("deleted")
                      )
                    ),
                    A
                  ) : io(
                    E.get("content"),
                    E.get("author"),
                    A,
                    E.get("timeStamp"),
                    E.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(F, C, S);
                  });
                });
              } else if (typeof m == "number")
                f += m;
              else if (typeof y == "number")
                for (let S = 0; S < y; S++) {
                  const E = C === void 0 || C === !1 ? this._comments[f] : C.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(E, C);
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
function N1(e) {
  const [t, r] = de(e.getComments());
  return K(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function w1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Z(null);
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
  }, [n, e]), /* @__PURE__ */ v("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ ke("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function q1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return un(
    /* @__PURE__ */ v(w1, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function fm() {
  const [e, t] = de(null), r = ge(() => {
    t(null);
  }, []), n = ze(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ v(q1, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const R1 = {
  ...dg,
  paragraph: "CommentEditorTheme__paragraph"
};
function $1(...e) {
  return e.filter(Boolean).join(" ");
}
function Br({
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
      className: $1(
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
function I1({
  className: e
}) {
  return /* @__PURE__ */ v(bf, { className: e || "ContentEditable__root" });
}
function L1({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ v("div", { className: t || "Placeholder__root", children: e });
}
const Gd = ff("INSERT_INLINE_COMMAND");
function D1({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Z(null), s = ge(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: d } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${d - 30}px`;
    }
  }, [e, t]);
  return K(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), ss(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ v("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ v("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ v("i", { className: "icon add-comment" }) }) });
}
function U1({ onEscape: e }) {
  const [t] = le();
  return K(() => t.registerCommand(
    df,
    (r) => e(r),
    Gn
  ), [t, e]), null;
}
function pm({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ v(yf, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: R1
  }, children: /* @__PURE__ */ ke("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ v(
      Ny,
      {
        contentEditable: /* @__PURE__ */ v(I1, { className: e }),
        placeholder: /* @__PURE__ */ v(L1, { children: s }),
        ErrorBoundary: Tf
      }
    ),
    /* @__PURE__ */ v(Oy, { onChange: n }),
    /* @__PURE__ */ v(xf, {}),
    t !== !1 && /* @__PURE__ */ v(Ey, {}),
    /* @__PURE__ */ v(U1, { onEscape: r }),
    /* @__PURE__ */ v(Ay, {}),
    i !== void 0 && /* @__PURE__ */ v(kf, { editorRef: i })
  ] }) });
}
function hm(e, t) {
  return ge(
    (r, n) => {
      r.read(() => {
        e(wy()), t(!qy(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function F1({
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
  ), l = Z(null), d = mm(), u = ge(() => {
    e.getEditorState().read(() => {
      const m = q();
      if (O(m)) {
        l.current = m.clone();
        const y = m.anchor, T = m.focus, C = Ty(
          e,
          y.getNode(),
          y.offset,
          T.getNode(),
          T.offset
        ), S = a.current;
        if (C !== null && S !== null) {
          const { left: E, bottom: A, width: x } = C.getBoundingClientRect(), F = xy(e, C);
          let D = F.length === 1 ? E + x / 2 - 125 : E - 125;
          D < 10 && (D = 10), S.style.left = `${D}px`, S.style.top = `${A + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const G = F.length, { container: V } = c, ae = c.elements, ce = ae.length;
          for (let se = 0; se < G; se++) {
            const Ce = F[se];
            let Ae = ae[se];
            Ae === void 0 && (Ae = document.createElement("span"), ae[se] = Ae, V.appendChild(Ae));
            const U = `position:absolute;top:${Ce.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${Ce.left}px;height:${Ce.height}px;width:${Ce.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            Ae.style.cssText = U;
          }
          for (let se = ce - 1; se >= G; se--) {
            const Ce = ae[se];
            V.removeChild(Ce), ae.pop();
          }
        }
      }
    });
  }, [e, c]);
  ss(() => {
    u();
    const m = c.container, y = document.body;
    return y !== null ? (y.appendChild(m), () => {
      y.removeChild(m);
    }) : () => {
    };
  }, [c.container, u]), K(() => (window.addEventListener("resize", u), () => {
    window.removeEventListener("resize", u);
  }), [u]);
  const f = (m) => (m.preventDefault(), t(), !0), p = () => {
    if (s) {
      let m = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      m.length > 100 && (m = m.slice(0, 99) + "…"), r(
        dm(m, [io(n, d)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, g = hm(i, o);
  return /* @__PURE__ */ ke("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ v(
      pm,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: g
      }
    ),
    /* @__PURE__ */ ke("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ v(Br, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ v(
        Br,
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
function z1({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = Z(null), c = mm(), l = hm(i, o);
  return /* @__PURE__ */ ke(fn, { children: [
    /* @__PURE__ */ v(
      pm,
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
      Br,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(io(n, c), !1, t);
            const u = a.current;
            u !== null && u.dispatchCommand(dy, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ v("i", { className: "send" })
      }
    )
  ] });
}
function gm({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ ke(fn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ ke("div", { className: "Modal__content", children: [
      /* @__PURE__ */ v(
        Br,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ v(
        Br,
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
function Jd({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = de(0);
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = fm();
  return /* @__PURE__ */ ke("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ ke("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ v("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ ke("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ v("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ ke(fn, { children: [
      /* @__PURE__ */ v(
        Br,
        {
          onClick: () => {
            l("Delete Comment", (d) => /* @__PURE__ */ v(
              gm,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: d
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
function K1({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = le(), [a, c] = de(0), [l, d] = fm(), u = ze(
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
  }, [a]), /* @__PURE__ */ v("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ ke(
      "li",
      {
        onClick: () => {
          const m = s.get(p);
          if (m !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const T = Array.from(m)[0], C = ie(T);
                xe(C) && C.selectStart();
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
          /* @__PURE__ */ ke("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ ke("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ v("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ v(
              Br,
              {
                onClick: () => {
                  d("Delete Thread", (m) => /* @__PURE__ */ v(
                    gm,
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
            Jd,
            {
              comment: m,
              deleteComment: r,
              thread: f,
              rtf: u
            },
            m.id
          )) }),
          /* @__PURE__ */ v("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ v(
            z1,
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
      Jd,
      {
        comment: f,
        deleteComment: r,
        rtf: u
      },
      p
    );
  }) });
}
function j1({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Z(null), o = r.length === 0;
  return /* @__PURE__ */ ke("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ v("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ v("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ v(
      K1,
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
function mm() {
  const e = _f(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function B1({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = _f(), [a] = le(), c = ze(() => {
    const D = new O1(a, s);
    return r && D.registerOnChange(r), t?.(D), D;
  }, [a, s, r, t]), l = N1(c), d = ze(() => /* @__PURE__ */ new Map(), []), [u, f] = de(), [p, g] = de([]), [m, y] = de(!1), [T, C] = de(!1), { yjsDocMap: S } = o;
  K(() => {
    if (e) {
      const D = e("comments", S);
      return c.registerCollaboration(D);
    }
    return () => {
    };
  }, [c, e, S]);
  const E = ge(() => {
    a.update(() => {
      const D = q();
      D !== null && (D.dirty = !0);
    }), y(!1);
  }, [a]), A = ge(
    (D, G) => {
      if (D.type === "comment") {
        const V = c.deleteCommentOrThread(D, G);
        if (!V)
          return;
        const { markedComment: ae, index: ce } = V;
        c.addComment(ae, G, ce);
      } else {
        c.deleteCommentOrThread(D);
        const V = G !== void 0 ? G.id : D.id, ae = d.get(V);
        ae !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const ce of ae) {
              const se = ie(ce);
              xe(se) && (se.deleteID($r, V), se.hasNoIDsForEveryType() && Ds(se));
            }
          });
        });
      }
    },
    [c, a, d]
  ), x = ge(
    (D, G, V, ae) => {
      c.addComment(D, V), G && (a.update(() => {
        O(ae) && Ff(ae, $r, D.id);
      }), y(!1));
    },
    [c, a]
  );
  K(() => {
    const D = [];
    let G;
    for (const V of p) {
      const ae = d.get(V);
      if (ae !== void 0)
        for (const ce of ae) {
          const se = a.getElementByKey(ce);
          se !== null && (se.classList.add("selected"), D.push(se), G = window.setTimeout(() => {
            C(!0);
          }, 0));
        }
    }
    return () => {
      G !== void 0 && window.clearTimeout(G);
      for (const V of D)
        V.classList.remove("selected");
    };
  }, [p, a, d]), K(() => {
    if (!a.hasNodes([Ze]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const D = /* @__PURE__ */ new Map();
    return Xe(
      mf(
        a,
        Ze,
        (G) => ji(G.getTypedIDs()),
        (G, V) => {
          for (const [ae, ce] of Object.entries(G.getTypedIDs()))
            ce.forEach((se) => {
              V.addID(ae, se);
            });
        }
      ),
      a.registerMutationListener(
        Ze,
        (G) => {
          a.getEditorState().read(() => {
            for (const [V, ae] of G) {
              const ce = ie(V);
              let se = [];
              ae === "destroyed" ? se = D.get(V) ?? [] : xe(ce) && (se = ce.getTypedIDs()[$r] ?? []);
              for (const Ce of se) {
                let Ae = d.get(Ce);
                D.set(V, se), ae === "destroyed" ? Ae !== void 0 && (Ae.delete(V), Ae.size === 0 && d.delete(Ce)) : (Ae === void 0 && (Ae = /* @__PURE__ */ new Set(), d.set(Ce, Ae)), Ae.has(V) || Ae.add(V));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: G, tags: V }) => {
        G.read(() => {
          const ae = q();
          let ce = !1, se = !1;
          if (O(ae)) {
            const Ce = ae.anchor.getNode();
            if (M(Ce)) {
              const Ae = vb(Ce, $r, ae.anchor.offset) ?? [];
              Ae !== null && (g(Ae), ce = !0), ae.isCollapsed() || (f(Ce.getKey()), se = !0);
            }
          }
          ce || g((Ce) => Ce.length === 0 ? Ce : []), se || f(null), !V.has("collaboration") && O(ae) && y(!1);
        });
      }),
      a.registerCommand(
        Gd,
        () => {
          const G = window.getSelection();
          return G !== null && G.removeAllRanges(), y(!0), !0;
        },
        pn
      )
    );
  }, [a, d]);
  const F = () => {
    a.dispatchCommand(Gd, void 0);
  };
  return /* @__PURE__ */ ke(fn, { children: [
    m && un(
      /* @__PURE__ */ v(
        F1,
        {
          editor: a,
          cancelAddComment: E,
          submitAddComment: x
        }
      ),
      document.body
    ),
    u != null && !m && un(
      /* @__PURE__ */ v(
        D1,
        {
          anchorKey: u,
          editor: a,
          showComments: T,
          onAddComment: F
        }
      ),
      document.body
    ),
    n !== null && un(
      /* @__PURE__ */ v(
        Br,
        {
          className: `CommentPlugin_ShowCommentsButton ${T ? "active" : ""}`,
          onClick: () => C(!T),
          title: T ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ v("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    T && un(
      /* @__PURE__ */ v(
        j1,
        {
          comments: l,
          submitAddComment: x,
          deleteCommentOrThread: A,
          activeIDs: p,
          markNodeMap: d
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function V1() {
  const e = Z(void 0), t = ge((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function W1(e, t) {
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
function H1(e, t) {
  K(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      W1(r, t);
    };
  }, [t, e]);
}
const LA = Sn(function(t, r) {
  const n = Z(null), i = Z(!0), s = Z(null), [o, a] = de(null), { children: c, onCommentChange: l, onUsjChange: d, showCommentsContainerRef: u, ...f } = t, { logger: p, options: { isReadonly: g, view: m } = {} } = t, y = (g ?? !1) || es(m), [T, C] = V1();
  H1(f, T), K(() => {
    if (process.env.NODE_ENV !== "production") {
      const A = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(A), p || console.warn(A);
    }
  }, [p]), pc(r, () => ({
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
    setAnnotation(A, x, F, D, G) {
      typeof D == "function" || D === void 0 ? n.current?.setAnnotation(A, x, F, D, G) : n.current?.setAnnotation(A, x, F, D);
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
  const S = ge(
    (A, x, F, D) => {
      if (!d) return;
      const G = T.current?.getComments();
      d(A, G, x, F, D);
    },
    [T, d]
  ), E = ge(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const A = T.current?.getComments();
    l(A);
  }, [T, i, l]);
  return K(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ v(Py, { children: /* @__PURE__ */ ke(lm, { ref: n, onUsjChange: S, ...f, children: [
    /* @__PURE__ */ v(
      B1,
      {
        setCommentStore: C,
        onChange: E,
        showCommentsContainerRef: y ? null : u ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ v("div", { ref: s, className: "comment-container" })
  ] }) });
});
function ln(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function G1(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function J1(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const Y1 = /^[#\w().,%/\s-]+$/;
function cr(e) {
  return e != null;
}
const X1 = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, Q1 = {
  left: "right",
  right: "left"
}, Z1 = "var(--usj-font-fallback, serif)";
function ym(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${G1(i)}"`).join(", ")}, ${Z1}`;
}
const fc = ".editor-input.usfm", eA = /^[\w.#[\]="':()>+~*,\s-]+$/;
function tA(e) {
  return eA.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${fc}".`
  ), fc);
}
function rA(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(ym(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (Y1.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), cr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), cr(t.firstLineIndent) && s.push(`text-indent: ${ln(t.firstLineIndent * 20 * r)}vw`), cr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${ln(t.leftMargin * 20 * r)}vw`), cr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${ln(t.rightMargin * 20 * r)}vw`
  ), cr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${ln(t.spaceBefore * r)}pt`), cr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${ln(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = X1[n ? Q1[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Yd = { c: 150, ca: 133, cp: 150 };
function Xd(e, t) {
  return e && cr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function nA(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && cr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Xd(e.markers.c, Yd.c);
  return ["ca", "cp"].map((i) => {
    const s = Xd(
      e.markers[i],
      Yd[i]
    ), o = ln(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function DA(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = fc } = t, s = tA(i), o = [], a = [];
  e.defaultFont && a.push(ym(e.defaultFont)), cr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${ln(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const d = rA(c, l, r, n, e.defaultFont);
    d.length > 0 && o.push(`${s} .usfm_${J1(c)} { ${d.join("; ")}; }`);
  }
  return o.push(...nA(e, s)), o.join(`
`);
}
export {
  Th as BLOCK_VERSE_VIEW_MODE,
  k as CategoryType,
  IA as Editorial,
  $s as GENERATOR_NOTE_CALLER,
  vf as HIDDEN_NOTE_CALLER,
  LA as Marginal,
  b as MarkerType,
  bh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  kh as STANDARD_VIEW_MODE,
  Bs as defaultStyleInfo,
  $A as directionToNames,
  Jx as filterAndRankItems,
  DA as generateUsjCss,
  qA as getDefaultViewMode,
  Mo as getDefaultViewOptions,
  bM as getEnterMenuItems,
  yM as getMarkerMenuItems,
  RA as getViewMode,
  xh as getViewOptions,
  es as isBlockVerseLayout,
  qr as isInsertEmbedOpOfType,
  c_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
