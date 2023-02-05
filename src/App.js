import "./App.css";
import { useState } from "react";

function Video({ videos }) {
  let btn1value = videos[videos.currentVideo].btn1Value;
  let btn2value = videos[videos.currentVideo].btn2Value;

  let opt1req = videos[videos.currentVideo].opt1req;
  let opt2req = videos[videos.currentVideo].opt2req;

  if (typeof opt1req !== "undefined") {
    // console.log(opt1req);
    // console.log("gay" + videos.realtions.gayness);
    if (
      opt1req.expression == "<" &&
      videos.realtions.gayness >= opt1req.value
    ) {
      btn1value = "[zablokowane]";
    }
  }

  if (typeof opt2req !== "undefined") {
    if (
      opt2req.expression == "<" &&
      videos.realtions.gayness >= opt2req.value
    ) {
      btn2value = "[zablokowane]";
    }
  }
  return (
    <div>
      <video
        src={`./Videos/${videos.currentVideo}.mp4`}
        width="1280"
        height="720"
        type="video/mp4"
        id="film"
        // controls
        autoPlay
        // muted
      ></video>
      <br></br>
      <button
        id="btn1"
        onClick={() =>
          handelBtn(
            videos[videos.currentVideo].nextVid1,
            videos.setCurrentVideo,
            videos.setRelations,
            videos[videos[videos.currentVideo].nextVid1].questionTime,
            videos.realtions,
            videos[videos[videos.currentVideo].nextVid1].gayness
          )
        }
      >
        {btn1value}
      </button>
      <button
        id="btn2"
        onClick={() =>
          handelBtn(
            videos[videos.currentVideo].nextVid2,
            videos.setCurrentVideo,
            videos.setRelations,
            videos[videos[videos.currentVideo].nextVid1].questionTime,
            videos.realtions,
            videos[videos[videos.currentVideo].nextVid1].gayness
          )
        }
      >
        {btn2value}
      </button>
    </div>
  );
}
function handelBtn(
  nextVideo,
  setCurrentVideo,
  setRelations,
  questionTime,
  relations,
  gayness
) {
  if (typeof questionTime == "undefined") questionTime = 2000;
  document.querySelector("#btn1").classList.add("hide");
  document.querySelector("#btn2").classList.add("hide");
  setCurrentVideo(nextVideo);
  console.log(gayness);
  console.log(relations);
  if (typeof gayness !== "undefined") {
    setRelations({
      ...relations,
      gayness: relations.gayness + gayness,
    });
  }
  setTimeout(() => {
    document.querySelector("#btn1").classList.remove("hide");
    document.querySelector("#btn2").classList.remove("hide");
  }, questionTime);
}

function App() {
  const [currentVideo, setCurrentVideo] = useState("start");
  const [realtions, setRelations] = useState({
    gayness: 0,
    masculinity: 0,
    isTrans: false,
  });

  let videos = {
    currentVideo: currentVideo,
    realtions: realtions,
    setCurrentVideo: setCurrentVideo,
    setRelations: setRelations,
    start: {
      btn1Value: "Chłop",
      btn2Value: "Baba",
      nextVid1: "boy",
      nextVid2: "girl",
    },
    boy: {
      btn1Value: "Gay",
      btn2Value: "Hetero",
      questionTime: 5000,
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
      btn1Value: "Dożyj starości (dalej)",
      btn2Value: "Umrzyj tak o (dalej)",
      gayness: 1,
      questionTime: 8000,
      nextVid1: "dead",
      nextVid2: "dead",
    },
    heteroboy: {
      btn1Value: "Dożyj starości (dalej)",
      btn2Value: "Umrzyj tak o (dalej)",
      questionTime: 10000,
      nextVid1: "dead",
      nextVid2: "dead",
    },
    dead: {
      btn1Value: "Idź do nieba",
      opt1req: {
        param: "gayness",
        expression: "<",
        value: 1,
      },
      btn2Value: "Idź do piekła",
      nextVid1: "heaven",
      nextVid2: "hell",
    },
    heaven: {
      btn1Value: "END",
      btn2Value: "END",
      nextVid1: "heaven",
      nextVid2: "heaven",
    },
    hell: {
      btn1Value: "END",
      btn2Value: "END",
      nextVid1: "hell",
      nextVid2: "hell",
    },
    lesbiangirl: {
      btn1Value: "Dożyj starości (dalej)",
      btn2Value: "Umrzyj tak o (dalej)",
      gayness: 1,
      nextVid1: "dead",
      nextVid2: "dead",
    },
    heterogirl: {
      btn1Value: "Dożyj starości (dalej)",
      btn2Value: "Umrzyj tak o (dalej)",
      nextVid1: "dead",
      nextVid2: "dead",
    },
  };
  return (
    <div className="App">
      <Video videos={videos} />
    </div>
  );
}

export default App;
