import { useState } from "react";


import {RiMenu3Fill, RiAddLine, RiPieChartLine, RiLightbulbLine, RiCloseLine, RiSearch2Line, RiArrowDownSLine, RiDeleteBin6Line} from "react-icons/ri";
import Car from "./components/shared/Car";
import Sidebar from "./components/shared/Sidebar";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";
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
    <Car showOrder={showOrder} setShowOrder={setShowOrder}/>
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
    <main className="lg:pl-28 lg:pr-96 pb-20">
      <div className="md:p-8 p-4">
        {/*Header */}
        <Header />
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
          <Card img="comida.png" description="Specy seasoned seafood nodles" price="$2.29" inventory="20 Bowls available"/>
          {/*Card */}
          <Card img="comida.png" description="Specy seasoned seafood nodles" price="$2.29" inventory="20 Bowls available"/>
          {/*Card */}
          <Card img="comida.png" description="Specy seasoned seafood nodles" price="$2.29" inventory="20 Bowls available"/>
          {/*Card */}
          <Card img="comida.png" description="Specy seasoned seafood nodles" price="$2.29" inventory="20 Bowls available"/>
          {/*Card */}
          <Card img="comida.png" description="Specy seasoned seafood nodles" price="$2.29" inventory="20 Bowls available"/>
          {/*Card */}
          <Card img="comida.png" description="Specy seasoned seafood nodles" price="$2.29" inventory="20 Bowls available"/>
          {/*Card */}
          <Card img="comida.png" description="Specy seasoned seafood nodles" price="$2.29" inventory="20 Bowls available"/>
          {/*Card */}
          <Card img="comida.png" description="Specy seasoned seafood nodles" price="$2.29" inventory="20 Bowls available"/>
          {/*Card */}
          <Card img="comida.png" description="Specy seasoned seafood nodles" price="$2.29" inventory="20 Bowls available"/>
          {/*Card */}
          <Card img="comida.png" description="Specy seasoned seafood nodles" price="$2.29" inventory="20 Bowls available"/>
          {/*Card */}
          <Card img="comida.png" description="Specy seasoned seafood nodles" price="$2.29" inventory="20 Bowls available"/>
        </div>
      </div>
      
      {/*<div className="lg:col-span-2 bg-red-500 fixed lg:static right-0">carrito</div> */}

    </main>
    </div>;
}

export default App;
