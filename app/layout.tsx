import '@/app/ui/global.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acme',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='max-w-screen-3xl mx-auto'>{children}</body>
    </html>
  );
}
