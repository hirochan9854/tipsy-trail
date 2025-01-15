import { Footer } from '@/components/Footer';

import type { Metadata } from 'next';

import './globals.css';

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
      <body className="relative z-0 bg-[#0C151B]">
        <h1 className="mt-[50px] text-center text-lg font-bold  text-[#D6D1BF]">TipsyTrail</h1>
        {children}
        <Footer />
      </body>
    </html>
  );
}
