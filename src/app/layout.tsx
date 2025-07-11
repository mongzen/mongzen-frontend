import { Footer, Header } from '@/components/layout';
import { barlow, inter } from '@/lib/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mongzen - Transform Your Business',
  description:
    'We create digital experiences that help businesses grow and connect with their audience in meaningful ways.',
  keywords: [
    'mongzen',
    'web development',
    'mobile apps',
    'UI/UX design',
    'digital marketing',
  ],
  authors: [{ name: 'Mongzen Team' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Mongzen - Transform Your Business',
    description:
      'We create digital experiences that help businesses grow and connect with their audience in meaningful ways.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mongzen - Transform Your Business',
    description:
      'We create digital experiences that help businesses grow and connect with their audience in meaningful ways.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${inter.variable} antialiased bg-dark-10 text-neutral-0`}
      >
        <Header />
        <main className="max-w-[1596px] flex flex-col mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
