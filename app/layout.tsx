import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Lexend } from 'next/font/google';

const lexend = Lexend({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={lexend.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
