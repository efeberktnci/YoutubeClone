import { categories } from "./../pages/constants";

const SideBar = () => {
  return (
    <div className="flex flex-col p-1 md:p-4">
      {categories.map((item, i) => (
        <div key={i}>
          <div className="flex items-center gap-2 py-4 px-2 md:px-3 text-md md:text-lg cursor-pointer rounded-md transition-1000 hover:bg-[#2d2d2d]">
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
