import { useState } from "react";

import Sidebar from "./components/shared/Sidebar";
import {RiMenu3Fill, RiAddLine, RiPieChartLine, RiLightbulbLine, RiCloseLine, RiSearch2Line, RiArrowDownSLine, RiDeleteBin6Line} from "react-icons/ri";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () =>{
    setShowMenu(!showMenu);
    setShowOrder(false);
  }

  const toggleOrders = () =>{
    setShowOrder(!showOrder);
    setShowMenu(false);
  }

  return <div className="bg-[#262837] w-full min-h-screen">
    <Sidebar showMenu={showMenu}/>
    {/* Menu movil */}
    <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-600 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
      <button className="p-2">
        <RiLightbulbLine/>
      </button>  
      <button className="p-2">
        <RiAddLine/>
      </button>
      <button onClick={toggleOrders} className="p-2">
        <RiPieChartLine/>
      </button>
      <button onClick={toggleMenu} className="text-white p-2">
        {showMenu ? <RiCloseLine className="text-[#ec7c6a]"/> : <RiMenu3Fill/>}
      </button>
    </nav>
    <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8 pb-20">
      <div className="lg:col-span-6 md:p-8 p-4">
        {/*Header */}
        <header>
          {/*Title and search */}
          <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-gray-200">Jeager Resto</h1>
              <p className="text-gray-500">20 febrero 2024</p>
            </div>
            <form action="">
              <div className="w-full relative">
                <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"/>
                <input type="text" className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none " placeholder="search" />
              </div>
            </form>
          </div>
          {/*Tabs */}
          <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
            <a 
              href="#" 
              className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:lef-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
            >
              Hot dishes
            </a>
            <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:lef-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]">Cold dishes</a>
            <a href="#" className="py-2 pr-4">Soup</a>
            <a href="#" className="py-2 pr-4">Gril</a>
          </nav>
        </header>
        {/*Title content */}
        <div className="flex items-center justify-between mb-20">
          <h2 className="text-xl text-gray-300">Choose Dishes</h2>
          <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg"><RiArrowDownSLine/>
          Dine in
          </button>
        </div>
        {/*Content */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/*Card */}
          <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
            <img 
              src="comida.png" 
              className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
            
            <p className="text-xl">Specy seasoned seafood nodles</p>
            <span className="text-gray-400">$2.29</span>
            <p className="text-gray-600">20 Bowls available</p>
          </div>
          {/*Card */}
          <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
            <img 
              src="comida.png" 
              className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
            
            <p className="text-xl">Specy seasoned seafood nodles</p>
            <span className="text-gray-400">$2.29</span>
            <p className="text-gray-600">20 Bowls available</p>
          </div>
          {/*Card */}
          <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
            <img 
              src="comida.png" 
              className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
            
            <p className="text-xl">Specy seasoned seafood nodles</p>
            <span className="text-gray-400">$2.29</span>
            <p className="text-gray-600">20 Bowls available</p>
          </div>
          {/*Card */}
          <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
            <img 
              src="comida.png" 
              className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
            
            <p className="text-xl">Specy seasoned seafood nodles</p>
            <span className="text-gray-400">$2.29</span>
            <p className="text-gray-600">20 Bowls available</p>
          </div>
          {/*Card */}
          <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
            <img 
              src="comida.png" 
              className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
            
            <p className="text-xl">Specy seasoned seafood nodles</p>
            <span className="text-gray-400">$2.29</span>
            <p className="text-gray-600">20 Bowls available</p>
          </div>
          {/*Card */}
          <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
            <img 
              src="comida.png" 
              className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
            
            <p className="text-xl">Specy seasoned seafood nodles</p>
            <span className="text-gray-400">$2.29</span>
            <p className="text-gray-600">20 Bowls available</p>
          </div>
        </div>
      </div>
      <div 
        className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all ${showOrder ? "right-0" : "-right-full"}`}
      >
        {/* Orders */}
        <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
          <RiCloseLine onClick={toggleOrders} className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"/>
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
                      <RiDeleteBin6Line className="text-red-400"/>
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
                      <RiDeleteBin6Line className="text-red-400"/>
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
                      <RiDeleteBin6Line className="text-red-400"/>
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
                      <RiDeleteBin6Line className="text-red-400"/>
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
                      <RiDeleteBin6Line className="text-red-400"/>
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
      {/*<div className="lg:col-span-2 bg-red-500 fixed lg:static right-0">carrito</div> */}

    </main>
    </div>;
}

export default App;
