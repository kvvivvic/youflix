import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import PopularSlide from "../components/Slider/PopularSlide";
import axios from "axios";
import PopularKoreaSlide from "../components/Slider/PopularKoreaSlide";

const Videos = () => {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos } = useQuery(["videos", keyword], () => youtube.search(keyword));
  const { data: popular } = useQuery(["popular", keyword], async () => {
    // return axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=kr&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`).then((res) => res.data.items);
    return axios.get(`/videos/popularKorea.json`).then((res) => res.data.items);
  });
  console.log(popular);

  return (
    <>
      <h3 className=" font-font text-2xl mt-12 mb-4 text-white">{keyword ? `${keyword} 에 대한 검색결과` : "HOT Trend 🔥"}</h3>

      {isLoading && <p>Loading..</p>}
      {error && <p>error</p>}
      {videos && <PopularSlide videos={videos} />}
      <div>
        <h3 className="font-font text-2xl mt-12 mb-4 text-white">한국의 인기 동영상</h3>
        {popular && <PopularKoreaSlide popular={popular} />}
      </div>
    </>
  );
};

export default Videos;
