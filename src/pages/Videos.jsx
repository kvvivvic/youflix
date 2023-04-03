import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import PopularSlide from "../components/Slider/PopularSlide";

const Videos = () => {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos } = useQuery(["videos", keyword], () => youtube.search(keyword));
  return (
    <>
      <h3 className=" font-font text-2xl mt-12 mb-4 text-white">HOT Trend {keyword ? `✅${keyword}` : "🔥"}</h3>

      {isLoading && <p>Loading..</p>}
      {error && <p>error</p>}
      {videos && <PopularSlide videos={videos} />}
    </>
  );
};

export default Videos;
