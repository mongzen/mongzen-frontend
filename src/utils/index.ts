import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  date: string | Date,
  options: Intl.DateTimeFormatOptions = {}
): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  }).format(new Date(date));
}

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

export function getImageUrl(url: string | undefined): string {
  if (!url) return '/placeholder-image.jpg';
  if (url.startsWith('http')) return url;
  return `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}${url}`;
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function isValidPhone(phone: string): boolean {
  // Remove all non-digit characters except +
  const cleanPhone = phone.replace(/[^\d+]/g, '');
  // Check for various phone formats
  const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{3,14}$/;
  return phoneRegex.test(cleanPhone);
}

export function isValidFullName(name: string): boolean {
  const trimmedName = name.trim();
  // At least 2 characters, contains at least one space (first and last name)
  return trimmedName.length >= 2 && /^[a-zA-Z\s'-]+$/.test(trimmedName);
}

export function sanitizeInput(input: string): string {
  return input.trim().replace(/<[^>]*>/g, ''); // Remove HTML tags
}

export function generateSEOUrl(baseUrl: string, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl.replace(/\/$/, '')}${cleanPath}`;
}

export function extractTextFromHTML(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

export function scrollToElement(elementId: string, offset = 0): void {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

export function copyToClipboard(text: string): Promise<boolean> {
  return navigator.clipboard.writeText(text).then(
    () => true,
    () => false
  );
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}
