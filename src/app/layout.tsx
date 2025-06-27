import { Footer, Header } from '@/components/layout';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Digital Agency - Transform Your Business',
  description:
    'We create digital experiences that help businesses grow and connect with their audience in meaningful ways.',
  keywords: [
    'digital agency',
    'web development',
    'mobile apps',
    'UI/UX design',
    'digital marketing',
  ],
  authors: [{ name: 'Digital Agency Team' }],
  openGraph: {
    title: 'Digital Agency - Transform Your Business',
    description:
      'We create digital experiences that help businesses grow and connect with their audience in meaningful ways.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Agency - Transform Your Business',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
