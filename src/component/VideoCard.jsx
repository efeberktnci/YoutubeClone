

const VideoCard = ({ video }) => {
  if (!video || !video.thumbnail || !video.thumbnail[1] || !video.thumbnail[1].url) {
    return null;
  }

  const thumbnailUrl = video.thumbnail[1].url;

  const channelThumbnailUrl = video.channelThumbnail && video.channelThumbnail[0] && video.channelThumbnail[0].url;

  return (
    <div className=" ">
      {/* Picture */}
      <div>
      <img src={thumbnailUrl} className="" alt="Video Thumbnail" />

      </div>
       {/* Detail */}
      <div className="flex gap-4 mt-5 ">
        <img 
          src={channelThumbnailUrl} 
          className="w-14 h-14 rounded-full cursor-pointer" 
          alt="Channel Thumbnail"
        />
        <div>
          <h4 className="cursor-pointer font-bold font-size-5 text-lg"> {video.title} </h4>
          <p className="cursor-pointer">{video.channelTitle}</p>
          <div>
            <p>{video.viewCount} Görüntülenme </p>
            <p className="text-right mg-right 5">{video.publishedTimeText}  </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
