import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go"
import { AiFillBell, AiFillVideoCamera } from "react-icons/ai"

const Header = () => {
  return ( 
  <header className="flex justify-between items-center p-4">
    <Link className="flex items-center gap-[10px]">
     <img src="/youtube.png" className="w-12" />
     <h1 className="text-amber max-sm:hidden">YouTube</h1>
      
    </Link>

    <form flex className="flex items-center border border-gray-400 rounded-[20px] ">
        <input type="text" className="bg-black outline-none rounded-[20px] "/>
        <button className="px-[8px] border-l" >
          <GoSearch/>
          </button>
    </form>

    <div className="flex gap-3 text-xl cursor-pointer">
        <AiFillBell className="hover:text-gray-400"/>
        <AiFillVideoCamera className="hover:text-gray-400"/>
        
    </div>

  </header>
  )
}

export default Header;