import React from "react";

const SearchCategories = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20  bg-[#1E2838]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white">
              Discover Amazing Products
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Browse through thousands of products from our trusted vendors
            </p>
          </div>
          <div className="w-full max-w-2xl flex items-center space-x-2 border rounded-lg p-2 bg-white text-white dark:bg-gray-950">
            <span className="pl-2 text-gray-500 dark:text-gray-400">🔍</span>
            <input
              type="search"
              placeholder="Search for products, brands, or categories..."
              className="w-full px-3 py-2 outline-none bg-transparent"
            />
            <div className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700">
              Search
            </div>
          </div>
        </div>
        <div className="flex  gap-4 mt-8 items-center justify-center">
          {["Mens Clothing", "Jewelery", "electronics", "Womens Clothing"].map(
            (category) => (
              <a
                key={category}
                href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`} 
                className="w-1/4 group flex flex-col items-center justify-center p-4 rounded-lg border bg-white hover:border-blue-600 transition-colors dark:bg-gray-950 dark:border-gray-800 dark:hover:border-blue-600"
              >
                <div className="rounded-full bg-blue-100 p-3 mb-2 dark:bg-gray-800">
                  🛍️
                </div>
                <span className="text-sm text-white font-medium group-hover:text-blue-600 transition-colors">
                  {category}
                </span>
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchCategories;