import React from 'react'


const FeaturedProducts = ({data}) => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Products</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Handpicked selections from our top vendors
            </p>
          </div>
        </div>
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
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a href="/products" className="px-6 py-3 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700">
            View All Products
          </a>
        </div>
      </div>
    </section>

    // <div className='w-full bg-amber-500'>
    //     <div className='h-1/3 bg-red-200 w-full pt-5 flex-col   justify-center items-center'>
    //       <div>
    //     <div>
    //     <h1 className='text-7xl'>Featured Products</h1>
    //     </div>
    //          <div>

    //           <h4 className='text-4xl'>Handpicked selections from our top vendors</h4>
    //          </div>
    //     </div>
    //     </div>
    //     <div className='bg-gray-200'>
    //         <div>
    //             <div>
                    
    //                 <h4>Product Name-1</h4>
    //                 <div>
    //                     <p>Vendor Name</p>
    //                     <p>Price</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div className='bg-blue-500'>
    //         <button>
    //             View All Products
    //         </button>
    //     </div>
    // </div>
  )
}

export default FeaturedProducts