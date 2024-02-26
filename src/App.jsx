import { useState } from "react";

import Sidebar from "./components/shared/Sidebar";
import {RiMenu3Fill, RiAddLine, RiPieChartLine, RiLightbulbLine, RiCloseLine, RiSearch2Line, RiArrowDownSLine} from "react-icons/ri";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () =>{
    setShowMenu(!showMenu);
  }
  return <div className="bg-[#262837] w-full min-h-screen">
    <Sidebar showMenu={showMenu}/>
    {/* Menu movil */}
    <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-600 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
      <button>
        <RiLightbulbLine/>
      </button>  
      <button>
        <RiAddLine/>
      </button>
      <button>
        <RiPieChartLine/>
      </button>
      <button onClick={toggleMenu} className="text-white p-2">
        {showMenu ? <RiCloseLine className="text-[#ec7c6a]"/> : <RiMenu3Fill/>}
      </button>
    </nav>
    <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
      <div className="lg:col-span-6 md:p-4">
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
      <div className="lg:col-span-2 fixed lg:static right-0 top-0 bg-[#1F1D2B] w-full h-full">
        {/* Orders */}
        <div className="relative pt-16 text-gray-300 p-8">
          <RiCloseLine className="absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"/>
          <h1 className="text-2xl my-4">Orders #1512451</h1>
          <div className="flex items-center gap-4 flex-grow">
            <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">Dine in</button>
            <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">Dine in</button>
            <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">Dine in</button>
          </div>
        </div>
      </div>
      {/*<div className="lg:col-span-2 bg-red-500 fixed lg:static right-0">carrito</div> */}

    </main>
    </div>;
}

export default App;
