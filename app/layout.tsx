import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';

const lexend = Lexend({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'utilcn - Utility Functions Registry',
    template: '%s | utilcn',
  },
  description:
    'A collection of reusable utility functions for your TypeScript projects',
  openGraph: {
    title: 'utilcn - Utility Functions Registry',
    description:
      'A collection of reusable utility functions for your TypeScript projects',
    url: 'https://utilcn.dev',
    siteName: 'utilcn',
    images: [
      {
        url: 'https://images.utilcn.dev/og-image.png',
        width: 1330,
        height: 400,
        alt: 'utilcn - Utility Functions Registry',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'utilcn - Utility Functions Registry',
    description:
      'A collection of reusable utility functions for your TypeScript projects',
    images: ['https://images.utilcn.dev/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={lexend.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
