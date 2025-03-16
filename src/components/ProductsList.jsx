import React from 'react'

const ProductsList = ({data}) => {
  return (
    <>
      <div className='flex bg-[#101828] text-white'>
        <div className='w-1/3'>
            filter Section
            <div>
                <h2>Categories Filter</h2>
                <div>
                    <label htmlFor="electronics">Electronics</label>
                    <input type="checkbox" name="electronics" id="" />
                    <label htmlFor="mens">Mens Clothing</label>
                    <input type="checkbox" name="mens" id="" />
                    <label htmlFor="Jwelery">Jwelery</label>
                    <input type="checkbox" name="electronics" id="" />
                    <label htmlFor="womens">Womens Clothing</label>
                    <input type="checkbox" name="womens" id="" />
                </div>
            </div>
            <div>
                <h2>Range Price</h2>
                <div>
                    <label htmlFor="price">PriceRange</label>
                    <input type="range" name="Price Range" id="" />
                </div>
            </div>
            <div>
                Rating
                <div>
                <label htmlFor="zeroOne">0-1</label>
                <input type="checkbox" name="zeroOne" id="" />
                <label htmlFor="twoThree">2-3</label>
                <input type="checkbox" name="twoThree" id="" />
                <label htmlFor="fourthFive">3-5</label>
                <input type="checkbox" name="fourthFive" id="" />
                </div>
            </div>
        </div>
        <div className='w-2/3'>
            Products Section
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {data.map((product,index) => (
            <a key={index} href={`/products/`} className="group">
              <div className="overflow-hidden rounded-lg border bg-white transition-colors hover:border-blue-600 dark:bg-gray-950 dark:border-gray-800 dark:hover:border-blue-600">
                <div className="relative aspect-square flex items-center justify-center bg-gray-200 dark:bg-gray-800">
                  {/* <span className="text-gray-500 dark:text-gray-400">🖼️ Product {product.title}</span> */}
                  <img src={product.image} alt="" className='w-100 h-100 object-cover wrap' />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white text-lg group-hover:text-blue-600 transition-colors text-wrap object-cover">
                     {product.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-500 dark:text-gray-400">Vendor Name</span>
                    <span className="font-bold text-white">${(19.99 * product.price).toFixed(2)}</span>
                  </div>
                  <div className='flex flex-col'>
                  <span className="text-gray-500 dark:text-gray-400">{product.rating.rate}</span>
                  <span className="text-gray-500 dark:text-gray-400">{product.description}</span>

                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        </div>
      </div>
     

    </>
  )
}

export default ProductsList