import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/VideoCard/ChannelInfo";
import RelatedVideos from "../components/VideoCard/RelatedVideos";

const VideoDetail = () => {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className="flex pt-8">
      <article className="w-3/4">
        <iframe title={title} id="player" type="text/html" width="100%" height="420" src={`http://www.youtube.com/embed/${video.id}`} />
        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className=" break-words whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <section className="w-1/4">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
};

export default VideoDetail;
