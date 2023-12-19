import { createContext } from "react";
import { useState } from "react";
const YoutubeContext= createContext();

export const YoutubeProvider = ({children}) => {
    const [selectedCategory, setSelectedCategory] = useState();
    const [videos, setVideos] = useState(null);

    return(
    <YoutubeContext.Provider value={{ selectedCategory, setSelectedCategory, videos}} >
        {children}
    </YoutubeContext.Provider>

    )

}