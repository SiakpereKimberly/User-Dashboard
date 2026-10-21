import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'New work',
  description: 'A blog built with Next.js App Router.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className='h-full antialiased'>
      <body className={`${roboto.className} min-h-full`}>
        <div>
          <div>
            <main>{children}</main>
          </div>
        </div>{' '}
      </body>
    </html>
  );
}
