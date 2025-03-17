import React from 'react';

const ProductsList = ({ data }) => {
  return (
    <div className="flex bg-[#101828] text-white min-h-screen p-6">
      {/* Sidebar - Filters */}
      <aside className="w-1/4 bg-[#1A202C] p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        
        {/* Category Filters */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <div className="flex flex-col space-y-2">
            {["Electronics", "Men's Clothing", "Jewelry", "Women's Clothing"].map((category, index) => (
              <label key={index} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-500" />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Price Range</h3>
          <input type="range" className="w-full accent-blue-500" />
        </div>

        {/* Rating Filter */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Rating</h3>
          <div className="flex flex-col space-y-2">
            {["0-1", "2-3", "3-5"].map((range, index) => (
              <label key={index} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-500" />
                {range}
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Products Section */}
      <section className="w-3/4 p-6">
        <h2 className="text-2xl font-bold mb-6">Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product, index) => (
            <a key={index} href={`/products/`} className="group block">
              <div className="overflow-hidden rounded-lg border border-gray-700 bg-[#1F2937] shadow-md transition-transform hover:scale-105">
                {/* Product Image */}
                <div className="relative aspect-square flex items-center justify-center bg-gray-200 dark:bg-gray-800">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </div>

                {/* Product Details */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg group-hover:text-blue-400 transition">
                    {product.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2 text-gray-400">
                    <span>Vendor Name</span>
                    <span className="font-bold text-white">${(19.99 * product.price).toFixed(2)}</span>
                  </div>
                  <div className="mt-2 text-gray-300">
                    <span>⭐ {product.rating.rate}</span>
                    <p className="text-sm line-clamp-2">{product.description}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsList;
