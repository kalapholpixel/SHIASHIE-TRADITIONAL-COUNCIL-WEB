import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shiashie Traditional Council',
  description: 'Professional website for Shiashie Traditional Council with donations and property listings',
  keywords: ['Shiashie', 'Traditional Council', 'Ghana', 'Community', 'Donation'],
  authors: [{ name: 'Shiashie Traditional Council' }],
  openGraph: {
    title: 'Shiashie Traditional Council',
    description: 'Community support and property management for Shiashie',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Crimson+Text:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <script src="https://js.paystack.co/v1/inline.js" async></script>
      </body>
    </html>
  );
}
