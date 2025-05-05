import { redirect } from 'next/navigation';

export default function SupplierHome() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Welcome to Your Store Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-medium text-indigo-900">Products</h3>
          <p className="text-indigo-700">Manage your product catalog</p>
        </div>
        <div className="bg-rose-50 p-4 rounded-lg">
          <h3 className="font-medium text-rose-900">Orders</h3>
          <p className="text-rose-700">View and manage customer orders</p>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg">
          <h3 className="font-medium text-amber-900">Store Settings</h3>
          <p className="text-amber-700">Customize your store profile</p>
        </div>
      </div>
    </div>
  )
} 