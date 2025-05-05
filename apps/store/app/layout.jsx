import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Daqaiq - Online Marketplace',
  description: 'Shop from verified suppliers on Daqaiq marketplace',
};

export default function StoreLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white">
          <header className="bg-white border-b">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-bold text-gray-900">Daqaiq</h1>
            </div>
          </header>
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
          <footer className="bg-gray-50 border-t">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500">© 2024 Daqaiq. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
} 