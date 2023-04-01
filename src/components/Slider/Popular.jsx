import React from "react";

const Popular = ({ video }) => {
  return (
    <div className=" text-white mx-1 flex flex-col">
      <img className=" overflow-hidden object-fill aspect-video" src={video.snippet.thumbnails.medium.url} alt="" />
      <p className=" w-full box-border pt-1 text-white line-clamp-2">{video.snippet.title}</p>
    </div>
  );
};

export default Popular;
