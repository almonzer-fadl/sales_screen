"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavbarMain() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add your logout logic here
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="flex items-center">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="ml-4 px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 