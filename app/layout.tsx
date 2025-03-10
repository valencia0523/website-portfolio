import './globals.css';
import Navbar from '@/components/layouts/Navbar';
import type { Metadata } from 'next';
import { Inter, Inconsolata, Roboto } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

//다양한 font 예시
const inter = Inter({ subsets: ['latin'] });
//const inconsolate = Inconsolata({ subsets: ['latin'] });
//const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="max-w-3xl mx-auto py-10 pt-25">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
