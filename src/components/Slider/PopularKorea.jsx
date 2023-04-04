import React from "react";
import { useNavigate } from "react-router-dom";

const PopularKorea = ({ popular }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/videos/watch/${popular.id}`, { state: { popular } });
      }}
      className=" text-white mx-1 flex flex-col"
    >
      <img className=" overflow-hidden object-fill aspect-video" src={popular.snippet.thumbnails.medium.url} alt="" />
      <p className=" w-full box-border pt-1 text-white line-clamp-2">{popular.snippet.title}</p>
    </div>
  );
};

export default PopularKorea;
