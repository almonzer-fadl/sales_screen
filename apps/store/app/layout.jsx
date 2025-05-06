import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Daqaiq - Online Marketplace',
  description: 'Shop from verified suppliers on Daqaiq marketplace',
};

export default function StoreLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <header className="bg-white border-b">
            <nav className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700">
                  Daqaiq
                </Link>
                <div className="flex items-center space-x-4">
                  <Link 
                    href="/auth/login" 
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Customer Login
                  </Link>
                  <Link 
                    href="https://supplier.daqaiq.com/auth/login" 
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Supplier Login
                  </Link>
                  <Link 
                    href="https://admin.daqaiq.com/auth/login" 
                    className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Admin Login
                  </Link>
                </div>
              </div>
            </nav>
          </header>
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
          <footer className="bg-gray-50 border-t">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500">© 2024 Daqaiq. All rights reserved.</p>
            </div>
          </footer>
          <Toaster position="top-right" />
        </div>
      </body>
    </html>
  );
} 