import "./App.css";
// import "node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import { useState } from "react";

function Video({ helper }) {
  return (
    <div>
      <video
        src={`./Videos/${helper.currentVideo}.mp4`}
        width="1280"
        height="720"
        type="video/mp4"
        controls
      ></video>
      <br></br>
      <button
        onClick={() => handelBtn(helper.start.nextVid1, helper.setCurrentVideo)}
      >
        {helper.start.btn1Value}
      </button>
      <button
        onClick={() => handelBtn(helper.start.nextVid2, helper.setCurrentVideo)}
      >
        {helper.start.btn2Value}
      </button>
    </div>
  );
}
function handelBtn(nextVideo, setCurrentVideo) {
  setCurrentVideo(nextVideo);
}

function App() {
  const [currentVideo, setCurrentVideo] = useState("start");
  let helper = {
    currentVideo: currentVideo,
    setCurrentVideo: setCurrentVideo,
    start: {
      btn1Value: "Chłop",
      btn2Value: "Baba",
      nextVid1: "boy",
      nextVid2: "girl",
    },
    boy: {
      btn1Value: "Gay",
      btn2Value: "Hetero",
      nextVid1: "gayboy",
      nextVid2: "heteroboy",
    },
    girl: {
      btn1Value: "Lesba",
      btn2Value: "Hetero",
      nextVid1: "lesbiangirl",
      nextVid2: "heterogirl",
    },
  };
  return (
    <div className="App">
      {/* <Video
        title={curretnVideo}
        btn1Value="Chłop"
        btn2Value="Baba"
        nextVid1="boy"
        nextVid2="girl"
        setCurrentVideo={setCurrentVideo}
      /> */}
      <Video helper={helper} />
    </div>
  );
}

export default App;
