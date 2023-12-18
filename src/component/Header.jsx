import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go"
import { AiFillBell, AiFillVideoCamera } from "react-icons/ai"

const Header = () => {
  return ( 
  <header>
    <Link>
     <img src="/youtube.png" className="w-12" />
     <h1 className="text-amber">Youtube</h1>
      
    </Link>

    <form>
        <input type="text-area"/>
        <button><GoSearch/></button>
    </form>

    <div>
        <AiFillBell/>
        <AiFillVideoCamera/>
        
    </div>

  </header>
  )
}

export default Header;