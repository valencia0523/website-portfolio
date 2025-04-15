import './globals.css';
import Navbar from '@/components/layouts/Navbar';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import Footer from '@/components/layouts/Footer';

// Font
const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Valencia M Portfolio',
  description:
    'A front-end developer portfolio showcasing projects built with Next.js, TypeScript, and TailwindCSS.',
  keywords:
    'Next.js, TypeScript, TailwindCSS, front-end development, web development, portfolio',
};

// original code
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={roboto.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <Navbar />
//           <Suspense fallback={<Loading />}>
//             <main>{children}</main>
//           </Suspense>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          id="theme-link"
          rel="stylesheet"
          href="/themes/lara-light-blue/theme.css"
        />
      </head>
      <body className={roboto.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col justify-between">
            <Navbar />
            <Suspense fallback={<Loading />}>
              <main className="grow">{children}</main>
            </Suspense>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
