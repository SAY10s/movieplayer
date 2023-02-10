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
          props.relations,
          props.hanks,
          props.kodnuklearny
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
    if (
      opt1req.expression == "==" &&
      videos.relations["kodnuklearny"] != opt1req.value
    ) {
      btn1value = "[zablokowane]";
    }
  }
  if (typeof opt2req !== "undefined") {
    if (opt2req.expression == "<" && videos.relations.hanks >= opt2req.value) {
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
      relations={videos.relations}
      hanks={videos[videos[videos.currentVideo].nextVid1].hanks}
      kodnuklearny={videos[videos[videos.currentVideo].nextVid1].kodnuklearny}
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
        relations={videos.relations}
        hanks={videos[videos[videos.currentVideo].nextVid2].hanks}
        kodnuklearny={videos[videos[videos.currentVideo].nextVid2].kodnuklearny}
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
        relations={videos.relations}
        hanks={videos[videos[videos.currentVideo].nextVid3].hanks}
        kodnuklearny={videos[videos[videos.currentVideo].nextVid3].kodnuklearny}
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
  hanks,
  kodnuklearny
) {
  console.log(hanks);
  console.log(kodnuklearny);
  if (typeof questionTime == "undefined") questionTime = 500;
  // document.querySelector("#btn1").classList.add("hide");
  // document.querySelector("#btn2").classList.add("hide");
  // document.querySelector("#btn3").classList.add("hide");
  setCurrentVideo(nextVideo);
  if (typeof hanks !== "undefined") {
    setRelations({
      ...relations,
      hanks: relations.hanks + hanks,
    });
  }
  if (typeof kodnuklearny !== "undefined") {
    setRelations({
      ...relations,
      kodnuklearny: kodnuklearny,
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
  const [relations, setRelations] = useState({
    hanks: 0,
    kodnuklearny: 0,
    isTrans: false,
  });

  let videos = {
    currentVideo: currentVideo,
    relations: relations,
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
      btn1Value: "[Dalej]",
      nextVid1: "naradawbazie",
      hanks: 1,
    },
    pijjaczekam: {
      btn1Value: "[Dalej]",
      nextVid1: "naradawbazie",
      hanks: 0,
    },
    lapszafraki: {
      btn1Value: "[Dalej]",
      nextVid1: "naradawbazie",
      hanks: -1,
    },
    naradawbazie: {
      btn1Value: "Idź z Hackerem",
      btn2Value: "Idź z Hanksem",
      btn3Value: `Idź z Williamem`,
      nextVid1: "linux",
      nextVid2: "naradawojskowa",
      nextVid3: "szukanieinformatyka",
    },
    linux: {
      btn1Value: "Bezpieczne hackowanie",
      btn2Value: "Niebezpieczne hackowanie",
      nextVid1: "bezpiecznehackowanie",
      nextVid2: "niebezpiecznehackowanie",
    },
    bezpiecznehackowanie: {
      btn1Value: "[Dalej]",
      nextVid1: "treningsamemu",
    },
    niebezpiecznehackowanie: {
      btn1Value: "[Dalej]",
      nextVid1: "treningsamemu",
      kodnuklearny: 1,
    },
    treningsamemu: {
      btn1Value: "[Dalej]",
      nextVid1: "wejsciedobazysamemu",
    },
    wejsciedobazysamemu: {
      btn1Value: "Wpisz kod i wejdź",
      opt1req: {
        param: "kodnuklearny",
        expression: "==",
        value: 1,
      },
      btn2Value: "Idź dalej",
      nextVid1: "zdobyciepilota",
      nextVid2: "ignorujeszdrzwiodbomby",
    },
    ignorujeszdrzwiodbomby: {
      btn1Value: "dalej",
      nextVid1: "zabijaniewbazie",
    },
    zdobyciepilota: {
      btn1Value: "Użyj pilota",
      btn2Value: "Schowaj pilot do kieszeni",
      nextVid1: "bombaatomowa",
      nextVid2: "schowajpilota",
    },
    bombaatomowa: {
      btn1Value: "[end]",
      btn2Value: "[end]",
      nextVid1: "start",
      nextVid2: "start",
    },
    schowajpilota: {
      btn1Value: "dalej",
      nextVid1: "zabijaniewbazie",
    },
    naradawojskowa: {
      btn1Value: "Zabij dzieci w Afryce",
      btn2Value: `"To... nieludzkie"`,
      nextVid1: "niggersdie",
      nextVid2: "niggerslive",
    },
    niggersdie: {
      hanks: -1,
      btn1Value: "[dalej]",
      nextVid1: "treningsamemu",
    },
    niggerslive: {
      hanks: 1,
      btn1Value: "Tak? A ja mam to w dupie.",
      btn2Value: "[słuchaj dalej]",
      btn3Value: `"Ooo, a co było dalej? "`,
      nextVid1: "walsiehanks",
      nextVid2: "sluchamhanksa",
      nextVid3: "sluchamzzainteresowaniem",
    },
    walsiehanks: {
      hanks: -1,
      btn1Value: "[dalej]",
      nextVid1: "treningzhanksem",
    },
    sluchamhanksa: {
      hanks: 0,
      btn1Value: "[dalej]",
      nextVid1: "treningzhanksem",
    },
    sluchamzzainteresowaniem: {
      hanks: 1,
      btn1Value: "[dalej]",
      nextVid1: "treningzhanksem",
    },
    treningzhanksem: {
      btn1Value: "[dalej]",
      nextVid1: "rozmowazhanksemzabicieewerta",
    },
    rozmowazhanksemzabicieewerta: {
      btn1Value: "TEST",
      btn2Value: `"TEST"`,
      nextVid1: "start",
      nextVid2: "start",
    },
    szukanieinformatyka: {
      btn1Value: "Przyjmij zlecenie",
      btn2Value: "Odrzuć zlecenie",
      nextVid1: "poznaniehanksa",
      nextVid2: "grzegorzkill",
    },
  };
  return (
    <div className="App">
      <Video videos={videos} />
    </div>
  );
}

export default App;
