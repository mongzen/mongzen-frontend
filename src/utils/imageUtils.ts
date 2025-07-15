const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export interface ImageConfig {
  src: string;
  alt: string;
  fallback?: string;
  crossOrigin?: 'anonymous' | 'use-credentials';
}

/**
 * Formats image URL for different environments
 */
export function formatImageUrl(url: string | undefined | null): string {
  if (!url) return '';

  // If already a complete URL, return as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // If starts with /, it's a relative path from API
  if (url.startsWith('/')) {
    return `${API_BASE_URL}${url}`;
  }

  // Otherwise, assume it's a relative path that needs /uploads/ prefix
  return `${API_BASE_URL}/uploads/${url}`;
}

/**
 * Validates if URL is likely to be a valid image
 */
export function isValidImageUrl(url: string): boolean {
  if (!url) return false;

  const imageExtensions = [
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.webp',
    '.svg',
    '.avif',
  ];
  const lowercaseUrl = url.toLowerCase();

  return (
    imageExtensions.some((ext) => lowercaseUrl.includes(ext)) ||
    lowercaseUrl.includes('image') ||
    lowercaseUrl.includes('photo') ||
    lowercaseUrl.includes('avatar')
  );
}

/**
 * Determines if image is SVG format
 */
export function isSvgImage(url: string): boolean {
  return (
    url.toLowerCase().includes('.svg') || url.toLowerCase().includes('svg')
  );
}

/**
 * Creates image configuration with proper URL formatting and CORS handling
 */
export function createImageConfig(
  url: string | undefined | null,
  alt: string,
  options: {
    fallback?: string;
    requiresCORS?: boolean;
  } = {}
): ImageConfig {
  const formattedUrl = formatImageUrl(url);
  const { requiresCORS = false } = options;

  // Choose appropriate fallback based on image type
  let fallback = options.fallback;
  if (!fallback) {
    if (formattedUrl && isSvgImage(formattedUrl)) {
      fallback = '/images/icon-placeholder.svg';
    } else {
      fallback = '/images/placeholder.jpg';
    }
  }

  return {
    src: formattedUrl || fallback,
    alt,
    fallback,
    crossOrigin: requiresCORS ? 'anonymous' : undefined,
  };
}

/**
 * Handles image loading errors by providing fallback with enhanced SVG support
 */
export function handleImageError(
  event: React.SyntheticEvent<HTMLImageElement>,
  fallback?: string
): void {
  const img = event.currentTarget;
  const currentSrc = img.src;

  // Determine appropriate fallback if not provided
  if (!fallback) {
    if (isSvgImage(currentSrc)) {
      fallback = '/images/icon-placeholder.svg';
    } else {
      fallback = '/images/placeholder.jpg';
    }
  }

  // Only set fallback if it's different from current src to prevent infinite loops
  if (img.src !== fallback) {
    console.warn(
      `Image failed to load, using fallback: ${currentSrc} -> ${fallback}`
    );
    img.src = fallback;
  }
}

/**
 * Preloads images for better performance
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Gets optimized image URL based on device pixel ratio and size
 */
export function getOptimizedImageUrl(
  baseUrl: string,
  width: number,
  height?: number,
  quality: number = 80
): string {
  const formattedUrl = formatImageUrl(baseUrl);
  if (!formattedUrl) return '';

  const pixelRatio =
    typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
  const optimizedWidth = Math.round(width * pixelRatio);
  const optimizedHeight = height ? Math.round(height * pixelRatio) : undefined;

  // For Strapi images, we might need to add query parameters for optimization
  const url = new URL(formattedUrl);
  url.searchParams.set('w', optimizedWidth.toString());
  if (optimizedHeight) {
    url.searchParams.set('h', optimizedHeight.toString());
  }
  url.searchParams.set('q', quality.toString());

  return url.toString();
}
