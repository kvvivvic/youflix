import React from "react";

const VideoCard = ({ video }) => {
  const { title, thumbnails, channelTitle } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoCard;
