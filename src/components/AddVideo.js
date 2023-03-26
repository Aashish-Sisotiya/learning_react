import React from "react";
import "./AddVideo.css";
import { useState } from "react";
import { useEffect } from "react";

const initialState = {
  channel: "coder dost",
  time: "5 year ago",
  verified: true,
  title: "",
  views: "",
};
const AddVideo = ({ addVideos, editableVideo,updateVideo }) => {
  const [video, setVideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
        updateVideo(video);
    }
    else {
        addVideos(video);
    }
    setVideo(initialState);
  }

  function handleChange(e) {
    // console.log(e.target.name);
    setVideo({
      ...video,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);

  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
          value={video.title}
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="views"
          value={video.views}
        />
        <button onClick={handleSubmit}>
          {editableVideo ? "Edit" : "Add"} videos
        </button>
      </form>
    </>
  );
};

export default AddVideo;
