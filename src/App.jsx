import Sidebar from "./components/shared/Sidebar";
import {RiMenu3Fill, RiAddLine, RiPieChartLine, RiLightbulbLine} from "react-icons/ri";

function App() {
  return <div className="bg-[#262837] w-full min-h-screen">
    <Sidebar />
    {/* Menu movil */}
    <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-600 p-4 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
      <button>
        <RiLightbulbLine/>
      </button>  
      <button>
        <RiAddLine/>
      </button>
      <button>
        <RiPieChartLine/>
      </button>
      <button className="text-white">
        <RiMenu3Fill/>
      </button>
    </nav>

    </div>;
}

export default App;
