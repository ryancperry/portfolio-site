import type { Metadata } from 'next';
import '@/styles/global.scss';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Ryan C. Perry - Developer',
  description:
    'Ryan C. Perry is a front-end developer based in Madison, Wisconsin, crafting fast, accessible, and user-friendly web experiences with React, JavaScript, and a strong eye for UI/UX.',
  openGraph: {
    title: 'Ryan C. Perry - Developer',
    description:
      'Ryan C. Perry is a front-end developer based in Madison, Wisconsin, crafting fast, accessible, and user-friendly web experiences with React, JavaScript, and a strong eye for UI/UX.',
    url: 'https://ryancperry.com',
    siteName: 'Ryan C. Perry - Developer',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Screenshot of Ryan C. Perry's portfolio website",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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
        <div className="page-content">{children}</div>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
