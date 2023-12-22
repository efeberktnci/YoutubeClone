import { useContext } from "react";
import SideBar from "../component/SideBar";
import  { YoutubeContext } from "../context/youtubeContext";
import VideoCard from "../component/VideoCard";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);

  console.log(videos); // Add this line to log the videos array

  return (
    <div className="flex ">
      <SideBar />
      <div className="grid grid-cols-3 gap-4">
        {!videos ? (
          <p>Yükleniyor</p>
        ) : (
          videos.map(
            (item, i) =>
              item.type === "video" && (
                <VideoCard video={item} key={i} />
              )
          )
        )}
      </div>
    </div>
  );
};


export default Feed;
