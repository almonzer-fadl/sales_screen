export default function StoreHome() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white">
        <h2 className="text-4xl font-bold mb-4">Welcome to Daqaiq</h2>
        <p className="text-xl mb-8">Your trusted marketplace for quality products</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition">
          Start Shopping
        </button>
      </section>

      {/* Featured Categories */}
      <section>
        <h3 className="text-2xl font-semibold mb-6">Featured Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Electronics', 'Fashion', 'Home & Living', 'Beauty'].map((category) => (
            <div key={category} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition cursor-pointer">
              <h4 className="font-medium">{category}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h3 className="text-2xl font-semibold mb-6">Featured Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200"></div>
              <div className="p-4">
                <h4 className="font-medium">Product Name</h4>
                <p className="text-gray-600">$99.99</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
} 