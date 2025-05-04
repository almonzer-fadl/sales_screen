'use client';

import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { SUPPLIER_TRANSLATIONS as t } from './constants/translations';

export default function SupplierDashboard() {
  // Static data for testing
  const metrics = {
    totalProducts: 150,
    activeOrders: 25,
    monthlyRevenue: 15000,
    inventoryValue: 45000,
  };

  const recentOrders = [
    {
      id: '1001',
      customer: 'أحمد محمد',
      amount: 1200,
      status: 'pending',
      date: '2024-03-15',
    },
    {
      id: '1002',
      customer: 'سارة أحمد',
      amount: 850,
      status: 'completed',
      date: '2024-03-14',
    },
    {
      id: '1003',
      customer: 'محمد علي',
      amount: 2300,
      status: 'processing',
      date: '2024-03-13',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with Add Product button */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          {t.welcome}
        </h1>
        <Link
          href="/supplier/products/add"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {t.addNewProduct}
        </Link>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">{t.totalProducts}</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900" dir="ltr">
            {metrics.totalProducts.toLocaleString('ar-SA')}
          </p>
          <div className="mt-2">
            <Link href="/supplier/products" className="text-sm text-blue-600 hover:text-blue-800">
              {t.viewAllProducts} ←
            </Link>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">{t.activeOrders}</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900" dir="ltr">
            {metrics.activeOrders.toLocaleString('ar-SA')}
          </p>
          <div className="mt-2">
            <Link href="/supplier/orders" className="text-sm text-blue-600 hover:text-blue-800">
              {t.viewAllOrders} ←
            </Link>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">{t.monthlyRevenue}</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900" dir="ltr">
            ${metrics.monthlyRevenue.toLocaleString('ar-SA')}
          </p>
          <div className="mt-2">
            <Link href="/supplier/analytics" className="text-sm text-blue-600 hover:text-blue-800">
              {t.viewAnalytics} ←
            </Link>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">{t.inventoryValue}</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900" dir="ltr">
            ${metrics.inventoryValue.toLocaleString('ar-SA')}
          </p>
          <div className="mt-2">
            <Link href="/supplier/inventory" className="text-sm text-blue-600 hover:text-blue-800">
              {t.manageInventory} ←
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium leading-6 text-gray-900">{t.recentOrders}</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t.orderNumber}
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t.customer}
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t.amount}
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t.status}
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t.date}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t.actions}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900" dir="ltr">
                    #{order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900" dir="ltr">
                    ${order.amount.toLocaleString('ar-SA')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === 'completed' ? 'bg-green-100 text-green-800' :
                      order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {t[order.status]}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" dir="ltr">
                    {new Date(order.date).toLocaleDateString('ar-SA')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                    <Link
                      href={`/supplier/orders/${order.id}`}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      {t.viewDetails}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {recentOrders.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-gray-500">{t.noRecentOrders}</p>
          </div>
        ) : (
          <div className="px-6 py-4 border-t border-gray-200">
            <Link
              href="/supplier/orders"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              {t.viewAllOrders} ←
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 