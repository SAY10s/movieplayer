import "./App.css";
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
        onClick={() =>
          handelBtn(
            helper[helper.currentVideo].nextVid1,
            helper.setCurrentVideo
          )
        }
      >
        {helper[helper.currentVideo].btn1Value}
      </button>
      <button
        onClick={() =>
          handelBtn(
            helper[helper.currentVideo].nextVid2,
            helper.setCurrentVideo
          )
        }
      >
        {helper[helper.currentVideo].btn2Value}
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
    gayboy: {
      btn1Value: "END",
      btn2Value: "END",
      nextVid1: "gayboy",
      nextVid2: "gayboy",
    },
    heteroboy: {
      btn1Value: "END",
      btn2Value: "END",
      nextVid1: "heteroboy",
      nextVid2: "heteroboy",
    },
    lesbiangirl: {
      btn1Value: "END",
      btn2Value: "END",
      nextVid1: "lesbiangirl",
      nextVid2: "lesbiangirl",
    },
    heterogirl: {
      btn1Value: "END",
      btn2Value: "END",
      nextVid1: "heterogirl",
      nextVid2: "heterogirl",
    },
  };
  return (
    <div className="App">
      <Video helper={helper} />
    </div>
  );
}

export default App;
