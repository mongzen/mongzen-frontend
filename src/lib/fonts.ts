import { Barlow, Inter } from 'next/font/google';

export const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], // Regular, Medium, Semi Bold, Bold, Extra Bold
  variable: '--font-barlow',
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Regular, Medium, Semi Bold, Bold
  variable: '--font-inter',
  display: 'swap',
});
