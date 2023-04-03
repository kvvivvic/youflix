import React from "react";

const VideoCard = ({ video }) => {
  const { title, thumbnails, channelTitle } = video.snippet;
  return (
    <li>
      <img className="w-full px-4" src={thumbnails.medium.url} alt={title} />
      <div className="w-full px-4 py-2">
        <p>{title}</p>
        <p className=" text-xs text-red-500">{channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoCard;
