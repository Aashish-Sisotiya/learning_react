import React from "react";
import PlayButton from "./PlayButton";
import Video from "./Video";

const VideoList = ({ videos, deleteVideo, editVideo }) => {
  return (
    <div>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          channel={video.channel}
          time={video.time}
          views={video.views}
          verified={video.verified}
          deleteVideo={deleteVideo}
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => console.log("playing", video.title)}
            onPause={() => console.log("paused..", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </div>
  );
};

export default VideoList;
