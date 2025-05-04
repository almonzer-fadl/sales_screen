import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Supplier Dashboard',
  description: 'Manage your products and orders',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" data-theme="light">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
} 