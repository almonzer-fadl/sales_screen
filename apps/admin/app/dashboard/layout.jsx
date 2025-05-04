'use client';

import Link from 'next/link';

export default function DashboardLayout({ children }) {
  const navigation = [
    { name: 'لوحة التحكم', href: '/admin/dashboard', icon: '📊' },
    { name: 'المستخدمين', href: '/admin/users', icon: '👥' },
    { name: 'الطلبات', href: '/admin/orders', icon: '🛍️' },
    { name: 'الموردين', href: '/admin/suppliers', icon: '🏭' },
    { name: 'المنتجات', href: '/admin/products', icon: '📦' },
    { name: 'الإعدادات', href: '/admin/settings', icon: '⚙️' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-900">لوحة الإدارة</h2>
        </div>
        <nav className="mt-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              <span className="ml-3">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
} 