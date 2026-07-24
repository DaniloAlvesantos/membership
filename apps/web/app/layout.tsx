import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';

const primary = Plus_Jakarta_Sans({
  variable: '--font-primary',
  subsets: ['latin'],
});

const secondary = Inter({
  variable: '--font-secondary',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SubClub',
  description: 'Membership management platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${primary.variable} ${secondary.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
