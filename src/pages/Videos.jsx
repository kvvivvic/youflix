import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard/VideoCard";
import Youtube from "../api/youtube";
import FakeYoutube from "../api/faketube";

const Videos = () => {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    const youtube = new Youtube();
    return youtube.search(keyword);
  });
  return (
    <>
      <div className=" text-white">Videos {keyword ? `✅${keyword}` : "🔥"}</div>
      {isLoading && <p>Loading..</p>}
      {error && <p>error</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;
