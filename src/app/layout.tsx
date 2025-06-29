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
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
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
        className={`${barlow.variable} antialiased bg-dark-10 text-neutral-0`}
      >
        <Header />
        <main className="bg-dark-10 max-w-[1596px] flex flex-col mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
