import { Footer, Header } from '@/components/layout';
import { barlow, inter } from '@/lib/fonts';
import { getGlobalSettings } from '@/services/apiServer';
import type { Metadata } from 'next';
import './globals.css';
import BaseProvider from './provider/BaseProvider';

export const metadata: Metadata = {
  title: 'Full-Stack Web & App Developer | CMS, React, Web3, GameFi | MongZen',
  description:
    'We build scalable, client-editable websites using WordPress, ConcreteCMS, and Bootstrap—perfect for corporate sites, landing pages, and multilingual platforms.',
  keywords: [
    'web development',
    'app development',
    'CMS development',
    'React development',
    'Web3 development',
    'GameFi development',
    'WordPress',
    'ConcreteCMS',
    'Bootstrap',
    'corporate websites',
    'landing pages',
    'multilingual websites',
    'client-editable websites',
    'full-stack development',
  ],
  authors: [{ name: 'Mongzen Team' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title:
      'Full-Stack Web & App Developer | CMS, React, Web3, GameFi | MongZen',
    description:
      'We build scalable, client-editable websites using WordPress, ConcreteCMS, and Bootstrap—perfect for corporate sites, landing pages, and multilingual platforms.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Full-Stack Web & App Developer | CMS, React, Web3, GameFi | MongZen',
    description:
      'We build scalable, client-editable websites using WordPress, ConcreteCMS, and Bootstrap—perfect for corporate sites, landing pages, and multilingual platforms.',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const resGlobalData = await getGlobalSettings();
  const globalData = resGlobalData?.data || null;
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${inter.variable} antialiased bg-dark-10 text-neutral-0`}
      >
        <BaseProvider>
          <Header />
          <main className="max-w-[1596px] flex flex-col mx-auto">
            {children}
          </main>
          <Footer data={globalData} />
        </BaseProvider>
      </body>
    </html>
  );
}
