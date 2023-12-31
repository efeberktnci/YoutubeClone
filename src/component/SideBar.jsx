import { useContext } from "react";
import { categories } from "./../pages/constants";
import { YoutubeContext } from "../context/youtubeContext"

const SideBar = () => {
   const {selectedCategory, setSelectedCategory} = 
   useContext(YoutubeContext);

  return (
    <div className="w-1/7 flex-col p-1 md:p-4">
      {categories.map((item, i) => (
        <div key={i}>
          <div
           onClick={() => setSelectedCategory(item)}
            className=  {` ${item.name === selectedCategory.name && "bg-[#2d2d2d] " } flex items-center gap-2 py-4 px-2 md:px-3 text-md md:text-lg cursor-pointer rounded-md transition-1000 hover:bg-[#2d2d2d] `}>
            <span className="max-sm:text-[20px] "> {item.icon} </span>
            <span className="max-sm:hidden"> {item.name} </span>
          </div>
          {item.divider && <hr/> }
        </div>
      ))}
    </div>
  );
};

export default SideBar;
