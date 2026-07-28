import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/language';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hemela Peptides | Professional Peptide Manufacturer & Supplier',
  description: 'Hemela Peptides is a professional peptide manufacturer based in Hong Kong, specializing in high-purity research peptides, cosmetic peptides, and custom peptide synthesis for global clients.',
  keywords: 'peptide manufacturer, peptide supplier, GLP-1 peptides, cosmetic peptides, custom peptide synthesis, research peptides, Semaglutide, Tirzepatide, GHK-Cu, BPC-157, TB-500',
  robots: 'index, follow',
  metadataBase: new URL('https://hkhemela.com'),
  openGraph: {
    title: 'Hemela Peptides | Professional Peptide Manufacturer',
    description: 'High-purity research peptides, cosmetic peptides, and custom synthesis. Serving researchers and companies worldwide from Hong Kong.',
    url: 'https://hkhemela.com',
    siteName: 'Hemela Peptides',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen pt-32 md:pt-36">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
