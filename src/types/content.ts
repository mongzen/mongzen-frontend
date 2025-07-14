/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Portable Text Types
 * Types for handling rich text content
 */

/**
 * Represents a child text node in Portable Text
 */
export interface PortableTextChild {
  type: 'text';
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  link?: {
    href: string;
    blank?: boolean;
  };
  [key: string]: any;
}

/**
 * Heading block in Portable Text
 */
export interface HeadingBlock {
  type: 'heading';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: PortableTextChild[];
}

/**
 * Paragraph block in Portable Text
 */
export interface ParagraphBlock {
  type: 'paragraph';
  children: PortableTextChild[];
}

/**
 * List item in Portable Text
 */
export interface ListItem {
  type: 'listItem';
  children: PortableTextChild[];
}

/**
 * Modern list item structure
 */
export interface ModernListItem {
  type: 'list-item';
  children: PortableTextChild[];
}

/**
 * Bullet list block in Portable Text
 */
export interface BulletListBlock {
  type: 'bulletList';
  children: ListItem[];
}

/**
 * Numbered list block in Portable Text
 */
export interface NumberedListBlock {
  type: 'numberedList';
  children: ListItem[];
}

/**
 * Modern list block structure
 */
export interface ModernListBlock {
  type: 'list';
  format: 'unordered' | 'ordered';
  children: ModernListItem[];
}

/**
 * Blockquote block in Portable Text
 */
export interface BlockquoteBlock {
  type: 'blockquote';
  children: PortableTextChild[];
}

/**
 * Code block in Portable Text
 */
export interface CodeBlock {
  type: 'codeBlock';
  language?: string;
  children: PortableTextChild[];
}

/**
 * Horizontal rule in Portable Text
 */
export interface HorizontalRuleBlock {
  type: 'horizontalRule';
}

/**
 * Table cell in Portable Text
 */
export interface TableCell {
  children: PortableTextChild[];
}

/**
 * Table row in Portable Text
 */
export interface TableRow {
  cells: TableCell[];
}

/**
 * Table block in Portable Text
 */
export interface TableBlock {
  type: 'table';
  rows: TableRow[];
}

/**
 * Image block in Portable Text
 */
export interface ImageBlock {
  type: 'image';
  src: string;
  alt?: string;
  caption?: string;
}

/**
 * Union type for supported Portable Text blocks
 */
export type PortableTextBlock =
  | HeadingBlock
  | ParagraphBlock
  | BulletListBlock
  | NumberedListBlock
  | ModernListBlock
  | BlockquoteBlock
  | CodeBlock
  | HorizontalRuleBlock
  | TableBlock
  | ImageBlock;

/**
 * Message placeholder for rich text content
 */
export interface MessagePlaceholder {
  type: string;
  children: {
    type: string;
    text: string;
  }[];
}
