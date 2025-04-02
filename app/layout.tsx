import './globals.css';
import Navbar from '@/components/layouts/Navbar';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Suspense } from 'react';
import Loading from '@/app/loading';

// Font 설정
const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Valencia M Portfolio',
  description:
    'A front-end developer portfolio showcasing projects built with Next.js, TypeScript, and TailwindCSS.',
  keywords:
    'Next.js, TypeScript, TailwindCSS, front-end development, web development, portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Suspense fallback={<Loading />}>
            <main>{children}</main>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
