import React from "react";
import { useYoutubeApi } from "../../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

import VideoCard from "./VideoCard";
const RelatedVideos = ({ id }) => {
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos } = useQuery(["related", id], () => youtube.relatedVideos(id));
  return (
    <>
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

export default RelatedVideos;
