import { redirect } from 'next/navigation';

export default function AdminHome() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Welcome to Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium text-blue-900">Suppliers</h3>
          <p className="text-blue-700">Manage supplier accounts and approvals</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium text-green-900">Products</h3>
          <p className="text-green-700">Review and manage product listings</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-medium text-purple-900">Categories</h3>
          <p className="text-purple-700">Organize product categories</p>
        </div>
      </div>
    </div>
  )
} 