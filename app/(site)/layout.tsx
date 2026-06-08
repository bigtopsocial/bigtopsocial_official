import type { ReactNode } from 'react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      {/* Consistent fade from page content into the footer across all pages */}
      <div className="pointer-events-none h-40 bg-gradient-to-b from-transparent to-black" />
      <Footer />
    </>
  );
}
