import 'normalize.css';
import '../styles/global.css';
import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import { Playfair_Display } from 'next/font/google';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { StoreProvider } from '@/app/StoreProvider';
import { DiamondProvider } from "@/context/diamonds";
import { getServerSession } from 'next-auth';
import SessionProvider from '@/components/SessionProvider';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
});

export const viewport: Viewport = {
  themeColor: 'white',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1.00001,
  minimumScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'The One Outs',
  description:
    'The One Outs is a platform that allows you to play games and earn money. Play games, earn points, and redeem them for real money.',
  keywords: ['baseball', 'game', 'money', 'earn', 'play'],
  appleWebApp: {
    capable: true,
    title: 'The One Outs',
  },
  icons: {
    apple: '/pwa/apple-touch-icon/apple-touch-icon-180.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'The One Outs',
    title: 'The One Outs',
    url: '',
    description:
      'The One Outs is a platform that allows you to play games and earn money. Play games, earn points, and redeem them for real money.',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
    <SessionProvider session={session}>
      <body className={`${playfair.variable} flex flex-col min-h-screen `}>
        <StoreProvider>
          <DiamondProvider>
            <Header />
            <main className="mx-auto flex-grow p-4">
              {children}
            </main>
            <Footer />
          </DiamondProvider>
        </StoreProvider>
      </body>
    </SessionProvider>
    </html>
  );
}
