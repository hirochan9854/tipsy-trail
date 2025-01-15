import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/Footer';

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
      <body className="bg-[#0C151B] relative z-0">
        <h1 className="text-lg font-bold text-[#D6D1BF] text-center  mt-[50px]">TipsyTrail</h1>
        {children}
        <Footer />
      </body>
    </html>
  );
}
