/**
 * Media and Upload File Types
 * Types related to images, files, and media handling
 */

/**
 * Represents a media file as returned by Strapi's Upload API
 */
export interface UploadFile {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

/**
 * Alias for media files used as icons or logos
 */
export type Icon = UploadFile;

/**
 * SEO component structure
 */
export interface Seo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  shareImage?: UploadFile;
}
