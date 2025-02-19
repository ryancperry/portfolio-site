import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Ryan C. Perry',
  description: 'Ryan C. Perry is a web developer in Middleton, Wisconsin.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
