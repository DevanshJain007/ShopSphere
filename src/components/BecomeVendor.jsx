import React, { useState } from 'react';

const BecomeVendor = () => {
    const [page, setPage] = useState(1);

    return (
        <div className="bg-gray-900 text-white min-h-screen p-6">
            <div className="text-center py-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold">Become a Vendor</h1>
                <p className="mt-2 text-lg">Join us and start selling your products online</p>
            </div>
            
            <div className="max-w-2xl mx-auto mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
                {page === 1 && <Page1 />}
                {page === 2 && <Page2 />}
                {page === 3 && <Page3 />}
                {page === 4 && <Page4 />}

                <div className="flex justify-between mt-6">
                    {page > 1 && (
                        <button className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-500" onClick={() => setPage(page - 1)}>
                            Back
                        </button>
                    )}
                    {page < 4 && (
                        <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500" onClick={() => setPage(page + 1)}>
                            Continue
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const Page1 = () => (
    <div>
        <h2 className="text-2xl font-semibold">Basic Information</h2>
        <p className="text-gray-400">Tell us about yourself and your contact information</p>
        <form className="mt-4 space-y-4">
            <div className="flex gap-4">
                <input type="text" placeholder="First Name" className="w-full p-2 rounded bg-gray-700" />
                <input type="text" placeholder="Last Name" className="w-full p-2 rounded bg-gray-700" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full p-2 rounded bg-gray-700" />
            <input type="text" placeholder="Phone Number" className="w-full p-2 rounded bg-gray-700" />
            <input type="password" placeholder="Create Password" className="w-full p-2 rounded bg-gray-700" />
            <input type="password" placeholder="Confirm Password" className="w-full p-2 rounded bg-gray-700" />
        </form>
    </div>
);

const Page2 = () => (
    <div>
        <h2 className="text-2xl font-semibold">Business Details</h2>
        <p className="text-gray-400">Provide the details of your business</p>
        <form className="mt-4 space-y-4">
            <input type="text" placeholder="Business/Store Name" className="w-full p-2 rounded bg-gray-700" />
            <textarea placeholder="Business Description" className="w-full p-2 rounded bg-gray-700"></textarea>
            <input type="text" placeholder="Business Type" className="w-full p-2 rounded bg-gray-700" />
            <input type="text" placeholder="Address" className="w-full p-2 rounded bg-gray-700" />
            <input type="text" placeholder="Tax ID/Business Registration Number" className="w-full p-2 rounded bg-gray-700" />
        </form>
    </div>
);

const Page3 = () => (
    <div>
        <h2 className="text-2xl font-semibold">Products & Shipping</h2>
        <p className="text-gray-400">Tell us about your products and shipping options</p>
        <form className="mt-4 space-y-4">
            <input type="text" placeholder="Type of Products You Want to Sell" className="w-full p-2 rounded bg-gray-700" />
            <input type="number" placeholder="How many products do you want to sell initially?" className="w-full p-2 rounded bg-gray-700" />
            <input type="text" placeholder="Describe your return policy" className="w-full p-2 rounded bg-gray-700" />
        </form>
    </div>
);

const Page4 = () => (
    <div>
        <h2 className="text-2xl font-semibold">Review & Submit</h2>
        <p className="text-gray-400">Review your information before submitting</p>
        <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-500 mt-4">Submit</button>
    </div>
);

export default BecomeVendor;
