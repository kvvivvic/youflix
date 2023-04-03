import React from "react";
import { useNavigate } from "react-router-dom";

const Popular = ({ video }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
      className=" text-white mx-1 flex flex-col"
    >
      <img className=" overflow-hidden object-fill aspect-video" src={video.snippet.thumbnails.medium.url} alt="" />
      <p className=" w-full box-border pt-1 text-white line-clamp-2">{video.snippet.title}</p>
    </div>
  );
};

export default Popular;
