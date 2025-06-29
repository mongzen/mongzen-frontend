import { Barlow } from 'next/font/google';

export const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], // Regular, Medium, Semi Bold, Bold, Extra Bold
  variable: '--font-barlow',
  display: 'swap',
});
