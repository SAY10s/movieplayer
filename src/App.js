import "./App.css";
import { useState } from "react";

function Button(props) {
  return (
    <button
      id={props.btnId}
      onClick={() =>
        handelBtn(
          props.nextVid,
          props.setCurrentVideo,
          props.setRelations,
          props.questionTime,
          props.realtions,
          props.hanks
        )
      }
    >
      {props.btnValue}
    </button>
  );
}

function Video({ videos }) {
  let btn1value = videos[videos.currentVideo].btn1Value;
  let btn2value = videos[videos.currentVideo].btn2Value;
  let btn3value = videos[videos.currentVideo].btn3Value;
  let btn4value = videos[videos.currentVideo].btn4Value;
  console.log(`1: ${btn1value}`);
  console.log(`2: ${btn2value}`);
  console.log(`3: ${btn3value}`);
  console.log(`4: ${btn4value}`);

  let opt1req = videos[videos.currentVideo].opt1req;
  let opt2req = videos[videos.currentVideo].opt2req;

  if (typeof opt1req !== "undefined") {
    if (opt1req.expression == "<" && videos.realtions.hanks >= opt1req.value) {
      btn1value = "[zablokowane]";
    }
  }

  if (typeof opt2req !== "undefined") {
    if (opt2req.expression == "<" && videos.realtions.hanks >= opt2req.value) {
      btn2value = "[zablokowane]";
    }
  }

  let buttons = [
    <Button
      btnId="btn1"
      key="btn1"
      nextVid={videos[videos.currentVideo].nextVid1}
      setCurrentVideo={videos.setCurrentVideo}
      setRelations={videos.setRelations}
      questionTime={videos[videos[videos.currentVideo].nextVid1].questionTime}
      relations={videos.realtions}
      hanks={videos[videos[videos.currentVideo].nextVid1].hanks}
      btnValue={btn1value}
    />,
  ];
  if (typeof btn2value !== "undefined") {
    buttons[1] = (
      <Button
        key="btn2"
        btnId="btn2"
        nextVid={videos[videos.currentVideo].nextVid2}
        setCurrentVideo={videos.setCurrentVideo}
        setRelations={videos.setRelations}
        questionTime={videos[videos[videos.currentVideo].nextVid2].questionTime}
        relations={videos.realtions}
        hanks={videos[videos[videos.currentVideo].nextVid2].hanks}
        btnValue={btn2value}
      />
    );
  }
  if (typeof btn3value !== "undefined") {
    buttons[2] = (
      <Button
        btnId="btn3"
        key="btn3"
        nextVid={videos[videos.currentVideo].nextVid3}
        setCurrentVideo={videos.setCurrentVideo}
        setRelations={videos.setRelations}
        questionTime={videos[videos[videos.currentVideo].nextVid3].questionTime}
        relations={videos.realtions}
        hanks={videos[videos[videos.currentVideo].nextVid3].hanks}
        btnValue={btn3value}
      />
    );
  }

  return (
    <div>
      {/* <video
        src={`./Videos/${videos.currentVideo}.mp4`}
        width="1280"
        height="720"
        type="video/mp4"
        id="film"
        controls
        autoPlay
        // muted
      ></video> */}
      <div className="temp">{videos.currentVideo}</div>
      <br></br>
      {buttons}
    </div>
  );
}
function handelBtn(
  nextVideo,
  setCurrentVideo,
  setRelations,
  questionTime,
  relations,
  hanks
) {
  if (typeof questionTime == "undefined") questionTime = 500;
  // document.querySelector("#btn1").classList.add("hide");
  // document.querySelector("#btn2").classList.add("hide");
  // document.querySelector("#btn3").classList.add("hide");
  setCurrentVideo(nextVideo);
  console.log(hanks);
  console.log(relations);
  if (typeof hanks !== "undefined") {
    setRelations({
      ...relations,
      hanks: relations.hanks + hanks,
    });
  }
  setTimeout(() => {
    // document.querySelector("#btn1").classList.remove("hide");
    // document.querySelector("#btn2").classList.remove("hide");
    // document.querySelector("#btn3").classList.remove("hide");
  }, questionTime);
}

function App() {
  const [currentVideo, setCurrentVideo] = useState("start");
  const [realtions, setRelations] = useState({
    hanks: 0,
    masculinity: 0,
    isTrans: false,
  });

  let videos = {
    currentVideo: currentVideo,
    realtions: realtions,
    setCurrentVideo: setCurrentVideo,
    setRelations: setRelations,
    start: {
      btn1Value: "Przyjmij zlecenie",
      btn2Value: "Odrzuć zlecenie",
      nextVid1: "poznaniehanksa",
      nextVid2: "grzegorzkill",
    },
    grzegorzkill: {
      btn1Value: "[Koniec]",
      btn2Value: "[Koniec]",
      nextVid1: "grzegorzkill",
      nextVid2: "grzegorzkill",
    },
    poznaniehanksa: {
      btn1Value: "Napij się z nim",
      btn2Value: "*poczekaj*",
      btn3Value: `"Tobie już wystarczy!`,
      nextVid1: "pijecie",
      nextVid2: "pijjaczekam",
      nextVid3: "lapszafraki",
    },
    pijecie: {
      btn1Value: "Dalej",
      btn2Value: "Dalej",
      nextVid1: "pijecie",
      nextVid2: "pijjaczekam",
    },
    pijjaczekam: {
      btn1Value: "Dalej",
      btn2Value: "Dalej",
      nextVid1: "pijecie",
      nextVid2: "pijjaczekam",
    },
    lapszafraki: {
      btn1Value: "Dalej",
      btn2Value: "Dalej",
      nextVid1: "pijecie",
      nextVid2: "pijjaczekam",
    },
  };
  return (
    <div className="App">
      <Video videos={videos} />
    </div>
  );
}

export default App;
