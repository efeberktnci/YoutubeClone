const VideoCard = ({ video }) => {
  console.log(video)
  return (
    <div>
      {/* Picture */}
      <div>
        <img src={video.thumbnail[1].url} />
      </div>
       {/* Detail */}
      <div>
        <img src={video.channelThumbnail && video.channelThumbnail[0].url} />
        <div>
          <h4> {video.title} </h4>
          <p>{video.channelTitle}</p>
          <div>
            <p>{video.viewCount} </p>
            <p>{video.publishedTimeText}  </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
