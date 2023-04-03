import React from "react";
import { useYoutubeApi } from "../../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

const ChannelInfo = ({ id, name }) => {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(["channel", id], () => youtube.channelImageURL(id));
  return (
    <div>
      {url && <img src={url} alt={name} />}
      <p>{name}</p>
    </div>
  );
};

export default ChannelInfo;
