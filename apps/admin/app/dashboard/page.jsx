'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  // Static data for testing
  const metrics = {
    totalUsers: 1250,
    totalOrders: 350,
    totalRevenue: 45000,
    activeSuppliers: 45,
  };

  const recentActivities = [
    {
      id: 1,
      type: 'order',
      description: 'طلب جديد #1234',
      time: 'منذ 5 دقائق',
    },
    {
      id: 2,
      type: 'supplier',
      description: 'مورد جديد مسجل',
      time: 'منذ 15 دقيقة',
    },
    {
      id: 3,
      type: 'user',
      description: 'مستخدم جديد مسجل',
      time: 'منذ 30 دقيقة',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">لوحة التحكم</h1>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">إجمالي المستخدمين</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900" dir="ltr">
            {metrics.totalUsers.toLocaleString('ar-SA')}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">إجمالي الطلبات</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900" dir="ltr">
            {metrics.totalOrders.toLocaleString('ar-SA')}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">إجمالي الإيرادات</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900" dir="ltr">
            ${metrics.totalRevenue.toLocaleString('ar-SA')}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">الموردين النشطين</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900" dir="ltr">
            {metrics.activeSuppliers.toLocaleString('ar-SA')}
          </p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium leading-6 text-gray-900">النشاط الأخير</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  activity.type === 'order' ? 'bg-blue-100 text-blue-800' :
                  activity.type === 'supplier' ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {activity.type === 'order' ? 'طلب' :
                   activity.type === 'supplier' ? 'مورد' :
                   'مستخدم'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 