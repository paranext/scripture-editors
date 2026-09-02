import { DOMImplementation as b, DOMParser as g } from "@xmldom/xmldom";
const m = /* @__PURE__ */ new Set(["__proto__", "prototype", "constructor"]);
function j(e) {
  if (m.has(e))
    throw new Error(`The key "${e}" is not allowed to avoid prototype pollution.`);
}
const A = "$", O = ".content[";
function D(e) {
  const t = e.split(O);
  if (t.shift() !== A)
    throw new Error(`indexesFromJsonPath: jsonPath didn't start with '${A}'`);
  return t.map((r) => parseInt(r, 10));
}
function w(e) {
  return e.reduce(
    (t, n) => `${t}${O}${n}]`,
    A
  );
}
function v(e) {
  return e != null && "jsonPath" in e && !("offset" in e) && !("closingMarkerOffset" in e) && !("propertyOffset" in e) && !("keyName" in e);
}
function U(e) {
  return e != null && "jsonPath" in e && "closingMarkerOffset" in e;
}
function J(e) {
  return e != null && "jsonPath" in e && "offset" in e && !("propertyOffset" in e) && !("keyName" in e);
}
function L(e) {
  return e != null && "jsonPath" in e && "propertyOffset" in e;
}
function C(e) {
  return e != null && "jsonPath" in e && "keyName" in e && "keyOffset" in e;
}
function X(e) {
  return e != null && "jsonPath" in e && "keyName" in e && !("keyOffset" in e) && !("keyClosingMarkerOffset" in e);
}
function _(e) {
  return e != null && "jsonPath" in e && "keyName" in e && "keyClosingMarkerOffset" in e;
}
function K(e) {
  return e === void 0 ? "undefined" : e === null ? "null" : _(e) ? "UsjClosingAttributeMarkerLocation" : C(e) ? "UsjAttributeKeyLocation" : X(e) ? "UsjAttributeMarkerLocation" : L(e) ? "UsjPropertyValueLocation" : U(e) ? "UsjClosingMarkerLocation" : J(e) ? "UsjTextContentLocation" : v(e) ? "UsjMarkerLocation" : "Unknown";
}
const d = "usx", T = "3.1", x = `<${d} version="${T}" />`;
let u, c;
function G(e) {
  const t = new b().createDocument("", d);
  return t.documentElement && (t.documentElement.setAttribute("version", T), k(e, t)), t.toString();
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
  c && (f === "verse" || t.tagName === "para" && r) && (i = S(n, c), c = void 0), f === "verse" && typeof e != "string" && e.sid !== void 0 && (c = e.sid), u && (f === "chapter" || f === "para" && r) && (i = h(n, u), u = void 0), f === "chapter" && typeof e != "string" && e.sid !== void 0 && (u = e.sid);
  const a = t.nodeName === d && i?.tagName === "verse";
  i && (!r || a) && t.appendChild(i), t.appendChild(o), i && r && !a && t.appendChild(i), r && t.nodeName === d && (c && t.appendChild(S(n, c)), u && t.appendChild(h(n, u)), c = void 0, u = void 0);
}
function R(e, t) {
  t.marker && (t.type === "unmatched" ? e.setAttribute("marker", t.marker) : e.setAttribute("style", t.marker));
  for (const [n, r] of Object.entries(t))
    r != null && !["type", "marker", "content"].includes(n) && e.setAttribute(n, r);
}
function S(e, t) {
  const n = e.createElement("verse");
  return n.setAttribute("eid", t), n;
}
function h(e, t) {
  const n = e.createElement("chapter");
  return n.setAttribute("eid", t), n;
}
const N = "USJ", P = "3.1", $ = Object.freeze({ type: N, version: P, content: [] }), F = [
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
function Z(e) {
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
function Y(e) {
  const n = new g().parseFromString(e, "text/xml");
  return H(n.documentElement);
}
function H(e) {
  const [t] = e ? M(e) : [{ content: [] }];
  return t.type = N, t.version = P, t;
}
function M(e) {
  const t = {};
  let n = e.tagName, r, o, f = "append";
  if (["row", "cell"].includes(n) && (n = "table:" + n), e.attributes)
    for (const s of Array.from(e.attributes))
      j(s.name), t[s.name] = s.value;
  t.style && (r = t.style, delete t.style), t.vid && delete t.vid, t.status && delete t.status;
  let i = { type: n };
  r && (i.marker = r), i = { ...i, ...t }, e.firstChild && e.firstChild.nodeType === e.firstChild.TEXT_NODE && e.firstChild.nodeValue && E(e.firstChild.nodeValue) && (o = e.firstChild.nodeValue);
  const a = Array.from(e.childNodes);
  i.content = [], o && i.content.push(o);
  for (const s of a) {
    if (s.tagName === void 0)
      continue;
    const [l, p] = M(s);
    switch (p) {
      case "append":
        i.content.push(l);
        break;
      case "merge":
        i.content = i.content.concat(l);
        break;
    }
    s.nextSibling && s.nextSibling.nodeType === s.nextSibling.TEXT_NODE && s.nextSibling.nodeValue && E(s.nextSibling.nodeValue) && i.content.push(s.nextSibling.nodeValue);
  }
  return i.content.length === 0 && i.type !== d && delete i.content, "eid" in i && ["verse", "chapter"].includes(n) && (f = "ignore"), [i, f];
}
function E(e) {
  return I(e) !== "" || !/[\r\n]/.test(e);
}
function I(e) {
  return e.replace(/(^[ \t\n\r\f\v]+)|([ \t\n\r\f\v]+$)/g, "");
}
export {
  $ as EMPTY_USJ,
  x as EMPTY_USX,
  F as MARKER_OBJECT_PROPS,
  N as USJ_TYPE,
  P as USJ_VERSION,
  d as USX_TYPE,
  T as USX_VERSION,
  B as VALID_BOOK_CODES,
  j as assertSafeKey,
  K as getUsjDocumentLocationTypeName,
  D as indexesFromUsjJsonPath,
  C as isUsjAttributeKeyLocation,
  X as isUsjAttributeMarkerLocation,
  _ as isUsjClosingAttributeMarkerLocation,
  U as isUsjClosingMarkerLocation,
  v as isUsjMarkerLocation,
  L as isUsjPropertyValueLocation,
  J as isUsjTextContentLocation,
  Z as isValidBookCode,
  w as usjJsonPathFromIndexes,
  G as usjToUsxString,
  Y as usxStringToUsj
};
//# sourceMappingURL=index.js.map
