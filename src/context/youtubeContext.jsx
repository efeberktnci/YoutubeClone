import { createContext, useEffect } from "react";
import { useState } from "react";
import { categories } from "../../src/pages/constants";
import { getData } from "../utils/getData";

export const YoutubeContext= createContext();

export const YoutubeProvider = ({children}) => {
    const [selectedCategory, setSelectedCategory] = 
    useState(categories[0]);
    const [videos, setVideos] = useState(null);

    useEffect(()=>{
     if(selectedCategory.type === "home" || selectedCategory.type === "trending"){
        getData(`/${selectedCategory.type}`).then((data) => console.log (data.data))
     } 
     },[selectedCategory])


    return(
    <YoutubeContext.Provider value={{ selectedCategory, setSelectedCategory, videos}} >
        {children}
    </YoutubeContext.Provider>

    )

}