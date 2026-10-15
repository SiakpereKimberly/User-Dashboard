import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'New work',
  description: 'A blog built with Next.js App Router.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className='h-full antialiased'>
      <body className={`${geistSans.variable} min-h-full`}>
        <div>
          <div>
            <main>{children}</main>
          </div>
        </div>{' '}
      </body>
    </html>
  );
}
