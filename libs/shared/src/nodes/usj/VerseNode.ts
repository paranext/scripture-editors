/** Conforms with USJ v3.1 @see https://docs.usfm.bible/usfm/3.1/cv/v.html */

import { $pieces } from "../features/displayPieces.state.js";
import { UnknownAttributes, VERSE_CLASS_NAME } from "./node-constants.js";
import { MarkerObject } from "@eten-tech-foundation/scripture-utilities";
import {
  $applyNodeReplacement,
  EditorConfig,
  LexicalNode,
  LexicalUpdateJSON,
  NodeKey,
  SerializedLexicalNode,
  SerializedTextNode,
  Spread,
  TextNode,
} from "lexical";

export const VERSE_MARKER = "v";
export const VERSE_VERSION = 1;
export type VerseMarker = typeof VERSE_MARKER;

export type SerializedVerseNode = Spread<
  {
    marker: VerseMarker;
    number: string;
    sid?: string;
    altnumber?: string;
    pubnumber?: string;
    unknownAttributes?: UnknownAttributes;
  },
  SerializedTextNode
>;

/** List of known properties of `MarkerObject` */
export const VERSE_MARKER_OBJECT_PROPS: (keyof MarkerObject)[] = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content",
];

export class VerseNode extends TextNode {
  __marker: VerseMarker;
  __number: string;
  __sid?: string;
  __altnumber?: string;
  __pubnumber?: string;
  __unknownAttributes?: UnknownAttributes;

  constructor(
    verseNumber = "",
    text?: string,
    sid?: string,
    altnumber?: string,
    pubnumber?: string,
    unknownAttributes?: UnknownAttributes,
    key?: NodeKey,
  ) {
    super(text ?? verseNumber, key);
    this.__marker = VERSE_MARKER;
    this.__number = verseNumber;
    this.__sid = sid;
    this.__altnumber = altnumber;
    this.__pubnumber = pubnumber;
    this.__unknownAttributes = unknownAttributes;
  }

  static override getType(): string {
    return "verse";
  }

  static override clone(node: VerseNode): VerseNode {
    const { __number, __text, __sid, __altnumber, __pubnumber, __unknownAttributes, __key } = node;
    return new VerseNode(
      __number,
      __text,
      __sid,
      __altnumber,
      __pubnumber,
      __unknownAttributes,
      __key,
    );
  }

  static override importJSON(serializedNode: SerializedVerseNode): VerseNode {
    return $createVerseNode().updateFromJSON(serializedNode);
  }

  override updateFromJSON(serializedNode: LexicalUpdateJSON<SerializedVerseNode>): this {
    return super
      .updateFromJSON(serializedNode)
      .setMarker(serializedNode.marker)
      .setNumber(serializedNode.number)
      .setSid(serializedNode.sid)
      .setAltnumber(serializedNode.altnumber)
      .setPubnumber(serializedNode.pubnumber)
      .setUnknownAttributes(serializedNode.unknownAttributes);
  }

  /**
   * Apply `write` to a writable copy of every piece of this verse — one piece unless an annotation
   * has cut the verse (`displayPieces.state.ts`) — so every piece keeps the verse's fields and any
   * piece read for them answers for the whole verse. Returns this piece, writable. Mutating.
   */
  private $writeEveryPiece(write: (piece: this) => void): this {
    for (const piece of $pieces(this)) write(piece.getWritable());
    return this.getWritable();
  }

  setMarker(marker: VerseMarker): this {
    if (this.__marker === marker) return this;

    const self = this.getWritable();
    self.__marker = marker;
    return self;
  }

  getMarker(): VerseMarker {
    const self = this.getLatest();
    return self.__marker;
  }

  setNumber(verseNumber: string): this {
    if (this.__number === verseNumber) return this;

    return this.$writeEveryPiece((piece) => (piece.__number = verseNumber));
  }

  getNumber(): string {
    const self = this.getLatest();
    return self.__number;
  }

  setSid(sid: string | undefined): this {
    if (this.__sid === sid) return this;

    return this.$writeEveryPiece((piece) => (piece.__sid = sid));
  }

  getSid(): string | undefined {
    const self = this.getLatest();
    return self.__sid;
  }

  setAltnumber(altnumber: string | undefined): this {
    if (this.__altnumber === altnumber) return this;

    return this.$writeEveryPiece((piece) => (piece.__altnumber = altnumber));
  }

  getAltnumber(): string | undefined {
    const self = this.getLatest();
    return self.__altnumber;
  }

  setPubnumber(pubnumber: string | undefined): this {
    if (this.__pubnumber === pubnumber) return this;

    return this.$writeEveryPiece((piece) => (piece.__pubnumber = pubnumber));
  }

  getPubnumber(): string | undefined {
    const self = this.getLatest();
    return self.__pubnumber;
  }

  setUnknownAttributes(unknownAttributes: UnknownAttributes | undefined): this {
    return this.$writeEveryPiece((piece) => (piece.__unknownAttributes = unknownAttributes));
  }

  getUnknownAttributes(): UnknownAttributes | undefined {
    const self = this.getLatest();
    return self.__unknownAttributes;
  }

  override createDOM(config: EditorConfig): HTMLElement {
    const dom = super.createDOM(config);
    dom.setAttribute("data-marker", this.__marker);
    dom.classList.add(VERSE_CLASS_NAME, `usfm_${this.__marker}`);
    dom.setAttribute("data-number", this.__number);
    return dom;
  }

  override updateDOM(prevNode: this, dom: HTMLElement, config: EditorConfig): boolean {
    const recreate = super.updateDOM(prevNode, dom, config);
    if (!recreate && prevNode.__number !== this.__number)
      dom.setAttribute("data-number", this.__number);
    return recreate;
  }

  override exportJSON(): SerializedVerseNode {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      number: this.getNumber(),
      sid: this.getSid(),
      altnumber: this.getAltnumber(),
      pubnumber: this.getPubnumber(),
      unknownAttributes: this.getUnknownAttributes(),
      version: VERSE_VERSION,
    };
  }
}

export function $createVerseNode(
  verseNumber?: string,
  text?: string,
  sid?: string,
  altnumber?: string,
  pubnumber?: string,
  unknownAttributes?: UnknownAttributes,
): VerseNode {
  return $applyNodeReplacement(
    new VerseNode(verseNumber, text, sid, altnumber, pubnumber, unknownAttributes),
  );
}

export function $isVerseNode(node: LexicalNode | null | undefined): node is VerseNode {
  return node instanceof VerseNode;
}

export function isSerializedVerseNode(
  node: SerializedLexicalNode | null | undefined,
): node is SerializedVerseNode {
  return node?.type === VerseNode.getType();
}
