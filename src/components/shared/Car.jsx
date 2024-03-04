import React from 'react'
import {RiCloseLine, RiDeleteBin6Line} from "react-icons/ri";

const Card = (props) => {
        const {showOrder,setShowOrder}=props;
    return (
        <div
            className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 
            ${showOrder ? "right-0" : "-right-full"}`}
        >
            {/* Orders */}
            <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
                <RiCloseLine onClick={() => setShowOrder(false)} className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl" />
                <h1 className="text-2xl my-4">Orders #1512451</h1>
                {/*Pilss */}
                <div className="flex items-center gap-4 flex-grow">
                    <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">Dine in</button>
                    <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">To Go</button>
                    <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">Delivery</button>
                </div>
                {/* Card */}
                <div>
                    <div className="grid grid-cols-6 p-4 mb-4">
                        <h5 className="col-span-4">Items</h5>
                        <h5>Qty</h5>
                        <h5>Price</h5>
                    </div>
                    {/*Products */}
                    <div className="bg-red-400 h-[400px] md:h-[700]px lg-h[540px] overflow-y-auto">
                        {/*Product */}
                        <div className="bg-[#262837] p-4 rounded-xl mb-4">
                            <div className="grid grid-cols-6 mb-2">
                                {/* Product description */}
                                <div className="col-span-4 flex items-center gap-3">
                                    <img src="comida.png" className="w-10 h-10 object-cover" />
                                    <div>
                                        <h5 className="text-sm">Spaice sea ...</h5>
                                        <p className="text-xs text-gray-500"> $2.29</p>
                                    </div>
                                </div>
                                {/*Qty */}
                                <div>
                                    <span className="border p-3 rounded-md">2</span>
                                </div>
                                {/*Price */}
                                <div>
                                    <span>$4.58</span>
                                </div>
                            </div>
                            {/*Note */}
                            <div className="grid grid-cols-6 items-center gap-1">
                                <form className="grid col-span-5">
                                    <input
                                        type="text"
                                        className="bg-[#1F1D2B] p-2 py-1 p-x4 rounded-lg outline-none"
                                        placeholder="Order note ..."
                                    />
                                </form>
                                <div className="col-span-1 text-center">
                                    <button className="border border-red-400 p-2 rounded-lg">
                                        <RiDeleteBin6Line className="text-red-400" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/*Product */}
                        <div className="bg-[#262837] p-4 rounded-xl mb-4">
                            <div className="grid grid-cols-6 mb-2">
                                {/* Product description */}
                                <div className="col-span-4 flex items-center gap-3">
                                    <img src="comida.png" className="w-10 h-10 object-cover" />
                                    <div>
                                        <h5 className="text-sm">Spaice sea ...</h5>
                                        <p className="text-xs text-gray-500"> $2.29</p>
                                    </div>
                                </div>
                                {/*Qty */}
                                <div>
                                    <span className="border p-3 rounded-md">2</span>
                                </div>
                                {/*Price */}
                                <div>
                                    <span>$4.58</span>
                                </div>
                            </div>
                            {/*Note */}
                            <div className="grid grid-cols-6 items-center gap-1">
                                <form className="grid col-span-5">
                                    <input
                                        type="text"
                                        className="bg-[#1F1D2B] p-2 py-1 p-x4 rounded-lg outline-none"
                                        placeholder="Order note ..."
                                    />
                                </form>
                                <div className="col-span-1 text-center">
                                    <button className="border border-red-400 p-2 rounded-lg">
                                        <RiDeleteBin6Line className="text-red-400" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/*Product */}
                        <div className="bg-[#262837] p-4 rounded-xl mb-4">
                            <div className="grid grid-cols-6 mb-2">
                                {/* Product description */}
                                <div className="col-span-4 flex items-center gap-3">
                                    <img src="comida.png" className="w-10 h-10 object-cover" />
                                    <div>
                                        <h5 className="text-sm">Spaice sea ...</h5>
                                        <p className="text-xs text-gray-500"> $2.29</p>
                                    </div>
                                </div>
                                {/*Qty */}
                                <div>
                                    <span className="border p-3 rounded-md">2</span>
                                </div>
                                {/*Price */}
                                <div>
                                    <span>$4.58</span>
                                </div>
                            </div>
                            {/*Note */}
                            <div className="grid grid-cols-6 items-center gap-1">
                                <form className="grid col-span-5">
                                    <input
                                        type="text"
                                        className="bg-[#1F1D2B] p-2 py-1 p-x4 rounded-lg outline-none"
                                        placeholder="Order note ..."
                                    />
                                </form>
                                <div className="col-span-1 text-center">
                                    <button className="border border-red-400 p-2 rounded-lg">
                                        <RiDeleteBin6Line className="text-red-400" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/*Product */}
                        <div className="bg-[#262837] p-4 rounded-xl mb-4">
                            <div className="grid grid-cols-6 mb-2">
                                {/* Product description */}
                                <div className="col-span-4 flex items-center gap-3">
                                    <img src="comida.png" className="w-10 h-10 object-cover" />
                                    <div>
                                        <h5 className="text-sm">Spaice sea ...</h5>
                                        <p className="text-xs text-gray-500"> $2.29</p>
                                    </div>
                                </div>
                                {/*Qty */}
                                <div>
                                    <span className="border p-3 rounded-md">2</span>
                                </div>
                                {/*Price */}
                                <div>
                                    <span>$4.58</span>
                                </div>
                            </div>
                            {/*Note */}
                            <div className="grid grid-cols-6 items-center gap-1">
                                <form className="grid col-span-5">
                                    <input
                                        type="text"
                                        className="bg-[#1F1D2B] p-2 py-1 p-x4 rounded-lg outline-none"
                                        placeholder="Order note ..."
                                    />
                                </form>
                                <div className="col-span-1 text-center">
                                    <button className="border border-red-400 p-2 rounded-lg">
                                        <RiDeleteBin6Line className="text-red-400" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/*Product */}
                        <div className="bg-[#262837] p-4 rounded-xl mb-4">
                            <div className="grid grid-cols-6 mb-2">
                                {/* Product description */}
                                <div className="col-span-4 flex items-center gap-3">
                                    <img src="comida.png" className="w-10 h-10 object-cover" />
                                    <div>
                                        <h5 className="text-sm">Spaice sea ...</h5>
                                        <p className="text-xs text-gray-500"> $2.29</p>
                                    </div>
                                </div>
                                {/*Qty */}
                                <div>
                                    <span className="border p-3 rounded-md">2</span>
                                </div>
                                {/*Price */}
                                <div>
                                    <span>$4.58</span>
                                </div>
                            </div>
                            {/*Note */}
                            <div className="grid grid-cols-6 items-center gap-1">
                                <form className="grid col-span-5">
                                    <input
                                        type="text"
                                        className="bg-[#1F1D2B] p-2 py-1 p-x4 rounded-lg outline-none"
                                        placeholder="Order note ..."
                                    />
                                </form>
                                <div className="col-span-1 text-center">
                                    <button className="border border-red-400 p-2 rounded-lg">
                                        <RiDeleteBin6Line className="text-red-400" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Submit payment */}
                <div className="bg-[#262837] absolute bottom-0 left-0 p-4 w-full">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-500">Discount</span>
                        <span>$0.00 </span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-500">Sub Total</span>
                        <span>$200.00 </span>
                    </div>
                    <div>
                        <button className="bg-[#ec7c6a] w-full py-2 px-4 h-10 rounded-lg">Continue to payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card