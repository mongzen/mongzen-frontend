import { Footer, Header } from '@/components/layout';
import { barlow } from '@/lib/fonts';
import type { Metadata } from 'next';
import './globals.css';

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
      <body className={`${barlow.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
