import { Geist, Geist_Mono } from 'next/font/google';

import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tipsy Trail',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-[#0C151B]">
        {children}
        <Footer />
      </body>
    </html>
  );
}
