import "./App.css";
import { useContext, useReducer, useState } from "react";
import ThemeContext from "./Context/ThemeContext";

// import Video from "./components/Video";
// import PlayButton from "./components/PlayButton";
import videoDB from "./data/data";
// import Counter from "./components/Counter";
// import Clock from "./components/Clock";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  // const [videos, setVideos] = useState(videoDB);
  //reducer function return state
  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD_VIDEO":
        return [...videos, { ...action.payload, id: videos.length + 1 }];

      case "DELETE_VIDEO":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE_VIDEO":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;

      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videoDB);

  const themeContext = useContext(ThemeContext);

  // console.log(themeContext);

  function addVideos(video) {
    // setVideos([...videos, { ...video, id: videos.length + 1 }]);
    //action : {type:"ADD",payload:video}
    dispatch({ type: "ADD_VIDEO", payload: video });
  }

  function deleteVideo(id) {
    // setVideos(videos.filter((video) => video.id !== id));
    dispatch({ type: "DELETE_VIDEO", payload: id });
  }

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  function updateVideo(video) {
    // const index = videos.findIndex((v) => v.id === video.id);
    // const newVideos = [...videos];
    // newVideos.splice(index, 1, video);
    // setVideos(newVideos);
    // console.log(newVideos);
    dispatch({ type: "UPDATE_VIDEO", payload: video });
  }

  return (
    <div className={`App ${themeContext}`} onClick={() => console.log("app")}>
      <AddVideo
        addVideos={addVideos}
        updateVideo={updateVideo}
        editableVideo={editableVideo}
      ></AddVideo>

      <VideoList
        deleteVideo={deleteVideo}
        editVideo={editVideo}
        videos={videos}
      ></VideoList>
      {/* <div style={{ clear: "both" }}>
        <PlayButton   onPlay={()=>console.log("playy")} onPause={()=>console.log('pause')}>Play</PlayButton>
      </div> */}

      {/* <Counter></Counter> */}
    </div>
  );
}

export default App;
