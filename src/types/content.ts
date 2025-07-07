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
  [key: string]: string;
}

/**
 * Heading block in Portable Text
 */
export interface HeadingBlock {
  type: 'heading';
  level: number;
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
 * Union type for supported Portable Text blocks
 */
export type PortableTextBlock = HeadingBlock | ParagraphBlock;

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
