import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header'
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'HOAST | Restaurant Website Solutions',
  description: 'HOAST helps restaurants manage their digital presence through fast, modern websites.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Header />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
