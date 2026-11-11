import { DOMImplementation as b, DOMParser as m } from "@xmldom/xmldom";
const M = /* @__PURE__ */ new Set(["__proto__", "prototype", "constructor"]);
function v(e) {
  if (M.has(e))
    throw new Error(`The key "${e}" is not allowed to avoid prototype pollution.`);
}
const A = "$", O = ".content[";
function w(e) {
  const t = e.split(O);
  if (t.shift() !== A)
    throw new Error(`indexesFromJsonPath: jsonPath didn't start with '${A}'`);
  return t.map((r) => parseInt(r, 10));
}
function K(e) {
  return e.reduce(
    (t, n) => `${t}${O}${n}]`,
    A
  );
}
function j(e) {
  return e != null && "jsonPath" in e && !("offset" in e) && !("closingMarkerOffset" in e) && !("propertyOffset" in e) && !("keyName" in e);
}
function L(e) {
  return e != null && "jsonPath" in e && "closingMarkerOffset" in e;
}
function U(e) {
  return e != null && "jsonPath" in e && "offset" in e && !("propertyOffset" in e) && !("keyName" in e);
}
function J(e) {
  return e != null && "jsonPath" in e && "propertyOffset" in e;
}
function X(e) {
  return e != null && "jsonPath" in e && "keyName" in e && "keyOffset" in e;
}
function C(e) {
  return e != null && "jsonPath" in e && "keyName" in e && !("keyOffset" in e) && !("keyClosingMarkerOffset" in e);
}
function _(e) {
  return e != null && "jsonPath" in e && "keyName" in e && "keyClosingMarkerOffset" in e;
}
function x(e) {
  return e === void 0 ? "undefined" : e === null ? "null" : _(e) ? "UsjClosingAttributeMarkerLocation" : X(e) ? "UsjAttributeKeyLocation" : C(e) ? "UsjAttributeMarkerLocation" : J(e) ? "UsjPropertyValueLocation" : L(e) ? "UsjClosingMarkerLocation" : U(e) ? "UsjTextContentLocation" : j(e) ? "UsjMarkerLocation" : "Unknown";
}
const d = "usx", T = "3.1", G = `<${d} version="${T}" />`;
let u, c;
function $(e) {
  const t = new b().createDocument("", d);
  return t.documentElement && (t.documentElement.setAttribute("version", e.version || T), k(e, t)), t.toString();
}
function k(e, t) {
  if (t.documentElement) {
    for (const [n, r] of e.content.entries()) {
      const o = n === e.content.length - 1;
      y(r, t.documentElement, t, o);
    }
    return t.documentElement ?? void 0;
  }
}
function y(e, t, n, r) {
  let o, f, i;
  if (typeof e == "string") o = n.createTextNode(e);
  else if (f = e.type.replace("table:", ""), o = n.createElement(f), R(o, e), e.content)
    for (const [s, l] of e.content.entries()) {
      const p = s === e.content.length - 1;
      y(l, o, n, p);
    }
  c && (f === "verse" || t.tagName === "para" && r) && (i = E(n, c), c = void 0), f === "verse" && typeof e != "string" && e.sid !== void 0 && (c = e.sid), u && (f === "chapter" || f === "para" && r) && (i = S(n, u), u = void 0), f === "chapter" && typeof e != "string" && e.sid !== void 0 && (u = e.sid);
  const a = t.nodeName === d && i?.tagName === "verse";
  i && (!r || a) && t.appendChild(i), t.appendChild(o), i && r && !a && t.appendChild(i), r && t.nodeName === d && (c && t.appendChild(E(n, c)), u && t.appendChild(S(n, u)), c = void 0, u = void 0);
}
function R(e, t) {
  t.marker !== void 0 && (t.type === "unmatched" ? e.setAttribute("marker", t.marker) : e.setAttribute("style", t.marker));
  for (const [n, r] of Object.entries(t))
    r != null && !["type", "marker", "content"].includes(n) && e.setAttribute(n, r);
}
function E(e, t) {
  const n = e.createElement("verse");
  return n.setAttribute("eid", t), n;
}
function S(e, t) {
  const n = e.createElement("chapter");
  return n.setAttribute("eid", t), n;
}
const N = "USJ", g = "3.1", F = Object.freeze({ type: N, version: g, content: [] }), Z = [
  "type",
  "marker",
  "content",
  "sid",
  "eid",
  "number",
  "code",
  "altnumber",
  "pubnumber",
  "caller",
  "align",
  "category"
];
function Y(e) {
  return B.includes(e);
}
const B = [
  // Old Testament
  "GEN",
  "EXO",
  "LEV",
  "NUM",
  "DEU",
  "JOS",
  "JDG",
  "RUT",
  "1SA",
  "2SA",
  "1KI",
  "2KI",
  "1CH",
  "2CH",
  "EZR",
  "NEH",
  "EST",
  "JOB",
  "PSA",
  "PRO",
  "ECC",
  "SNG",
  "ISA",
  "JER",
  "LAM",
  "EZK",
  "DAN",
  "HOS",
  "JOL",
  "AMO",
  "OBA",
  "JON",
  "MIC",
  "NAM",
  "HAB",
  "ZEP",
  "HAG",
  "ZEC",
  "MAL",
  // New Testament
  "MAT",
  "MRK",
  "LUK",
  "JHN",
  "ACT",
  "ROM",
  "1CO",
  "2CO",
  "GAL",
  "EPH",
  "PHP",
  "COL",
  "1TH",
  "2TH",
  "1TI",
  "2TI",
  "TIT",
  "PHM",
  "HEB",
  "JAS",
  "1PE",
  "2PE",
  "1JN",
  "2JN",
  "3JN",
  "JUD",
  "REV",
  // Deuterocanon
  "TOB",
  "JDT",
  "ESG",
  "WIS",
  "SIR",
  "BAR",
  "LJE",
  "S3Y",
  "SUS",
  "BEL",
  "1MA",
  "2MA",
  "3MA",
  "4MA",
  "1ES",
  "2ES",
  "MAN",
  "PS2",
  "ODA",
  "PSS",
  "EZA",
  "5EZ",
  "6EZ",
  "DAG",
  "PS3",
  "2BA",
  "LBA",
  "JUB",
  "ENO",
  "1MQ",
  "2MQ",
  "3MQ",
  "REP",
  "4BA",
  "LAO",
  // Non scripture
  "FRT",
  "BAK",
  "OTH",
  "INT",
  "CNC",
  "GLO",
  "TDX",
  "NDX",
  "XXA",
  "XXB",
  "XXC",
  "XXD",
  "XXE",
  "XXF",
  "XXG"
];
function z(e) {
  const n = new m({ normalizeLineEndings: H }).parseFromString(e, "text/xml");
  return I(n.documentElement);
}
function H(e) {
  return e.replace(/\r\n?/g, `
`);
}
function I(e) {
  const [t] = e ? P(e) : [{ content: [] }];
  return t.type = N, t.version = e?.getAttribute("version") || g, t;
}
function P(e) {
  const t = {};
  let n = e.tagName, r, o, f = "append";
  if (["row", "cell"].includes(n) && (n = "table:" + n), e.attributes)
    for (const s of Array.from(e.attributes))
      v(s.name), t[s.name] = s.value;
  t.style !== void 0 && (r = t.style, delete t.style), delete t.vid, delete t.status;
  let i = { type: n };
  r !== void 0 && (i.marker = r), i = { ...i, ...t }, e.firstChild && e.firstChild.nodeType === e.firstChild.TEXT_NODE && e.firstChild.nodeValue && h(e.firstChild.nodeValue) && (o = e.firstChild.nodeValue);
  const a = Array.from(e.childNodes);
  i.content = [], o && i.content.push(o);
  for (const s of a) {
    if (s.tagName === void 0)
      continue;
    const [l, p] = P(s);
    switch (p) {
      case "append":
        i.content.push(l);
        break;
      case "merge":
        i.content = i.content.concat(l);
        break;
    }
    s.nextSibling && s.nextSibling.nodeType === s.nextSibling.TEXT_NODE && s.nextSibling.nodeValue && h(s.nextSibling.nodeValue) && i.content.push(s.nextSibling.nodeValue);
  }
  return i.content.length === 0 && i.type !== d && delete i.content, "eid" in i && ["verse", "chapter"].includes(n) && (f = "ignore"), [i, f];
}
function h(e) {
  return V(e) !== "" || !/[\r\n]/.test(e);
}
function V(e) {
  return e.replace(/(^[ \t\n\r\f\v]+)|([ \t\n\r\f\v]+$)/g, "");
}
export {
  F as EMPTY_USJ,
  G as EMPTY_USX,
  Z as MARKER_OBJECT_PROPS,
  N as USJ_TYPE,
  g as USJ_VERSION,
  d as USX_TYPE,
  T as USX_VERSION,
  B as VALID_BOOK_CODES,
  v as assertSafeKey,
  x as getUsjDocumentLocationTypeName,
  w as indexesFromUsjJsonPath,
  X as isUsjAttributeKeyLocation,
  C as isUsjAttributeMarkerLocation,
  _ as isUsjClosingAttributeMarkerLocation,
  L as isUsjClosingMarkerLocation,
  j as isUsjMarkerLocation,
  J as isUsjPropertyValueLocation,
  U as isUsjTextContentLocation,
  Y as isValidBookCode,
  K as usjJsonPathFromIndexes,
  $ as usjToUsxString,
  z as usxStringToUsj
};
//# sourceMappingURL=index.js.map
