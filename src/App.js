import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Tabs from "./Tabs";
import Samouczek from "./Samouczek";
import Osiagniecia from "./Osiagniecia";

function Button(props) {
  if (props.btnValue == "[zablokowane]")
    return (
      <button className="button disabled" id={props.btnId}>
        {props.btnValue}
      </button>
    );
  else {
    return (
      <button
        className="button"
        id={props.btnId}
        onClick={() =>
          handelBtn(
            props.nextVid,
            props.setCurrentVideo,
            props.setRelations,
            props.questionTime,
            props.relations,
            props.hanks,
            props.kodnuklearny,
            props.koddodrzwi,
            props.ewertzyje,
            props.pilot,
            props.dysk,
            props.zwlokiewerta,
            props.hanksprzezyje,
            props.ewert
          )
        }
      >
        {props.btnValue}
      </button>
    );
  }
}
// <div className="button-wrapper">
//   <div className="left">
//     <div className="d1" />
//     <div className="d2" />
//     <div className="d3" />
//     <div className="d4" />
//     <button
//       className="button"
//       id={props.btnId}
//       onClick={() =>
//         handelBtn(
//           props.nextVid,
//           props.setCurrentVideo,
//           props.setRelations,
//           props.questionTime,
//           props.relations,
//           props.hanks,
//           props.kodnuklearny,
//           props.koddodrzwi,
//           props.ewertzyje,
//           props.pilot,
//           props.dysk,
//           props.zwlokiewerta,
//           props.hanksprzezyje,
//           props.ewert
//         )
//       }
//     >
//       {props.btnValue}
//     </button>
//   </div>
//   <div className="right">
//     <div className="d5" />
//     <div className="d6" />
//     <div className="d7" />
//     <div className="d8" />
//     <div>1</div>
//   </div>
// </div>

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
  let opt3req = videos[videos.currentVideo].opt3req;
  let opt4req = videos[videos.currentVideo].opt4req;

  //opt1
  if (typeof opt1req !== "undefined") {
    if (
      opt1req.expression == "==" &&
      videos.relations[opt1req.param] != opt1req.value
    ) {
      btn1value = "[zablokowane]";
    }
    if (
      opt1req.expression == ">" &&
      videos.relations[opt1req.param] <= opt1req.value
    ) {
      btn1value = "[zablokowane]";
    }
    if (
      opt1req.expression == "<" &&
      videos.relations[opt1req.param] >= opt1req.value
    ) {
      btn1value = "[zablokowane]";
    }
  }

  //opt2
  if (typeof opt2req !== "undefined") {
    if (
      opt2req.expression == "==" &&
      videos.relations[opt2req.param] != opt2req.value
    ) {
      btn2value = "[zablokowane]";
    }
    if (
      opt2req.expression == ">" &&
      videos.relations[opt2req.param] <= opt2req.value
    ) {
      btn2value = "[zablokowane]";
    }
    if (
      opt2req.expression == "<" &&
      videos.relations[opt2req.param] >= opt2req.value
    ) {
      btn2value = "[zablokowane]";
    }
  }

  //opt3
  if (typeof opt3req !== "undefined") {
    if (
      opt3req.expression == "==" &&
      videos.relations[opt3req.param] != opt3req.value
    ) {
      btn3value = "[zablokowane]";
    }
    if (
      opt3req.expression == ">" &&
      videos.relations[opt3req.param] <= opt3req.value
    ) {
      btn3value = "[zablokowane]";
    }
    if (
      opt3req.expression == "<" &&
      videos.relations[opt3req.param] >= opt3req.value
    ) {
      btn3value = "[zablokowane]";
    }
  }
  //opt4
  if (typeof opt4req !== "undefined") {
    if (
      opt4req.expression == "==" &&
      videos.relations[opt4req.param] != opt4req.value
    ) {
      btn4value = "[zablokowane]";
    }
    if (
      opt4req.expression == ">" &&
      videos.relations[opt4req.param] <= opt4req.value
    ) {
      btn4value = "[zablokowane]";
    }
    if (
      opt4req.expression == "<" &&
      videos.relations[opt4req.param] >= opt4req.value
    ) {
      btn4value = "[zablokowane]";
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
      koddodrzwi={videos[videos[videos.currentVideo].nextVid1].koddodrzwi}
      ewertzyje={videos[videos[videos.currentVideo].nextVid1].ewertzyje}
      pilot={videos[videos[videos.currentVideo].nextVid1].pilot}
      dysk={videos[videos[videos.currentVideo].nextVid1].dysk}
      zwlokiewerta={videos[videos[videos.currentVideo].nextVid1].zwlokiewerta}
      hanksprzezyje={videos[videos[videos.currentVideo].nextVid1].hanksprzezyje}
      ewert={videos[videos[videos.currentVideo].nextVid1].ewert}
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
        koddodrzwi={videos[videos[videos.currentVideo].nextVid2].koddodrzwi}
        ewertzyje={videos[videos[videos.currentVideo].nextVid2].ewertzyje}
        pilot={videos[videos[videos.currentVideo].nextVid2].pilot}
        dysk={videos[videos[videos.currentVideo].nextVid2].dysk}
        zwlokiewerta={videos[videos[videos.currentVideo].nextVid2].zwlokiewerta}
        hanksprzezyje={
          videos[videos[videos.currentVideo].nextVid2].hanksprzezyje
        }
        ewert={videos[videos[videos.currentVideo].nextVid2].ewert}
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
        koddodrzwi={videos[videos[videos.currentVideo].nextVid3].koddodrzwi}
        ewertzyje={videos[videos[videos.currentVideo].nextVid3].ewertzyje}
        pilot={videos[videos[videos.currentVideo].nextVid3].pilot}
        dysk={videos[videos[videos.currentVideo].nextVid3].dysk}
        zwlokiewerta={videos[videos[videos.currentVideo].nextVid3].zwlokiewerta}
        hanksprzezyje={
          videos[videos[videos.currentVideo].nextVid3].hanksprzezyje
        }
        ewert={videos[videos[videos.currentVideo].nextVid3].ewert}
        btnValue={btn3value}
      />
    );
  }
  if (typeof btn4value !== "undefined") {
    buttons[3] = (
      <Button
        btnId="btn4"
        key="btn4"
        nextVid={videos[videos.currentVideo].nextVid4}
        setCurrentVideo={videos.setCurrentVideo}
        setRelations={videos.setRelations}
        questionTime={videos[videos[videos.currentVideo].nextVid4].questionTime}
        relations={videos.relations}
        hanks={videos[videos[videos.currentVideo].nextVid4].hanks}
        kodnuklearny={videos[videos[videos.currentVideo].nextVid4].kodnuklearny}
        koddodrzwi={videos[videos[videos.currentVideo].nextVid4].koddodrzwi}
        ewertzyje={videos[videos[videos.currentVideo].nextVid4].ewertzyje}
        pilot={videos[videos[videos.currentVideo].nextVid4].pilot}
        dysk={videos[videos[videos.currentVideo].nextVid4].dysk}
        zwlokiewerta={videos[videos[videos.currentVideo].nextVid4].zwlokiewerta}
        hanksprzezyje={
          videos[videos[videos.currentVideo].nextVid4].hanksprzezyje
        }
        ewert={videos[videos[videos.currentVideo].nextVid4].ewert}
        btnValue={btn4value}
      />
    );
  }

  return (
    <>
      <Tabs />
      <div className="graj">
        <video
          src={`./Videos/${videos.currentVideo}.mp4`}
          width="75%"
          // height="720"
          type="video/mp4"
          id="film"
          // controls
          autoPlay
          // muted
        ></video>
        {/* <div className="temp">{videos.currentVideo}</div> */}
        <br></br>
        <div className="buttons-wrapper" id="buttonswrapper">
          {buttons}
        </div>
        {/* <button onClick={}></button> */}
      </div>
    </>
  );
}
function handelBtn(
  nextVideo,
  setCurrentVideo,
  setRelations,
  questionTime,
  relations,
  hanks,
  kodnuklearny,
  koddodrzwi,
  ewertzyje,
  pilot,
  dysk,
  zwlokiewerta,
  hanksprzezyje,
  ewert
) {
  if (typeof questionTime == "undefined") questionTime = 0;
  document.querySelector("#buttonswrapper").classList.add("hide");
  setCurrentVideo(nextVideo);
  if (hanks == "undefined") hanks = 0;
  if (typeof hanks !== "undefined") {
    setRelations({
      ...relations,
      hanks: relations.hanks + hanks,
    });
  }
  if (typeof ewert !== "undefined") {
    setRelations({
      ...relations,
      ewert: relations.ewert + ewert,
    });
  }
  if (typeof kodnuklearny !== "undefined") {
    setRelations({
      ...relations,
      kodnuklearny: kodnuklearny,
    });
  }
  if (typeof koddodrzwi !== "undefined") {
    setRelations({
      ...relations,
      koddodrzwi: koddodrzwi,
      hanks: relations.hanks + hanks,
    });
  }
  if (typeof ewertzyje !== "undefined") {
    setRelations({
      ...relations,
      ewertzyje: ewertzyje,
    });
  }
  if (typeof pilot !== "undefined") {
    setRelations({
      ...relations,
      pilot: pilot,
    });
  }
  if (typeof dysk !== "undefined") {
    setRelations({
      ...relations,
      dysk: dysk,
    });
  }
  if (typeof zwlokiewerta !== "undefined") {
    setRelations({
      ...relations,
      zwlokiewerta: zwlokiewerta,
    });
  }
  if (typeof hanksprzezyje !== "undefined") {
    setRelations({
      ...relations,
      hanksprzezyje: hanksprzezyje,
    });
  }

  setTimeout(() => {
    document.querySelector("#buttonswrapper").classList.remove("hide");
  }, questionTime * 0.001);
}

function App() {
  const [currentVideo, setCurrentVideo] = useState("xxx");
  const [relations, setRelations] = useState({
    hanks: 0,
    kodnuklearny: 0,
    koddodrzwi: 0,
    ewertzyje: 1,
    pilot: 0,
    dysk: 1,
    zwlokiewerta: 0,
    hanksprzezyje: 0,
    ewert: 0,
  });

  let videos = {
    currentVideo: currentVideo,
    relations: relations,
    setCurrentVideo: setCurrentVideo,
    setRelations: setRelations,
    xxx: {
      btn1Value: "[GRAJ]",
      nextVid1: "start",
      questionTime: 1,
    },
    start: {
      btn1Value: "Przyjmij zlecenie",
      btn2Value: "Odrzuć zlecenie",
      nextVid1: "poznaniehanksa",
      nextVid2: "grzegorzkill",
      // questionTime: 30,
      questionTime: 1,
    },
    grzegorzkill: {
      btn1Value: "[END]",
      nextVid1: "grzegorzkill",
      questionTime: 13,
    },
    poznaniehanksa: {
      btn1Value: "Napij się z nim",
      btn2Value: "*poczekaj*",
      btn3Value: `"Tobie już wystarczy!`,
      nextVid1: "pijecie",
      nextVid2: "pijjaczekam",
      nextVid3: "lapszafraki",
      // questionTime: 64,
      questionTime: 1,
    },
    pijecie: {
      btn1Value: "[kontunuuj]",
      nextVid1: "naradawbazie",
      hanks: 1,
      questionTime: 41,
    },
    pijjaczekam: {
      btn1Value: "[kontunuuj]",
      nextVid1: "naradawbazie",
      hanks: 0,
      questionTime: 11,
    },
    lapszafraki: {
      btn1Value: "[kontunuuj]",
      nextVid1: "naradawbazie",
      hanks: -1,
      questionTime: 17,
    },
    naradawbazie: {
      btn1Value: "Idź z Hackerem",
      btn2Value: "Idź z Hanksem",
      btn3Value: `Idź z Williamem`,
      nextVid1: "linux",
      nextVid2: "naradawojskowa",
      nextVid3: "szukanieinformatyka",
      questionTime: 61,
    },
    linux: {
      btn1Value: "Bezpieczne hackowanie",
      btn2Value: "Niebezpieczne hackowanie",
      nextVid1: "bezpiecznehackowanie",
      nextVid2: "niebezpiecznehackowanie",
      questionTime: 32,
    },
    bezpiecznehackowanie: {
      btn1Value: "[kontunuuj]",
      nextVid1: "treningsamemu",
      questionTime: 17,
    },
    niebezpiecznehackowanie: {
      btn1Value: "[kontunuuj]",
      nextVid1: "treningsamemu",
      kodnuklearny: 1,
      questionTime: 25,
    },
    treningsamemu: {
      btn1Value: "[kontunuuj]",
      nextVid1: "wejsciedobazysamemu",
      questionTime: 32,
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
      questionTime: 26,
    },
    ignorujeszdrzwiodbomby: {
      btn1Value: "kontunuuj",
      nextVid1: "zabijaniewbazie",
      questionTime: 2,
    },
    zdobyciepilota: {
      btn1Value: "Użyj pilota",
      btn2Value: "Schowaj pilot do kieszeni",
      nextVid1: "bombaatomowa",
      nextVid2: "schowajpilota",
      questionTime: 11,
    },
    bombaatomowa: {
      btn1Value: "[END]",
      nextVid1: "start",
    },
    schowajpilota: {
      btn1Value: "kontunuuj",
      nextVid1: "zabijaniewbazie",
      pilot: 1,
      questionTime: 13,
    },
    zabijaniewbazie: {
      btn1Value: "Wpisz kod",
      opt1req: {
        param: "koddodrzwi",
        expression: "==",
        value: 1,
      },
      btn2Value: "Idź dalej",
      nextVid1: "otwarciedrzwikodem",
      nextVid2: "ignorujeszdrzwinakod",
      questionTime: 17,
    },
    otwarciedrzwikodem: {
      btn1Value: "[kontunuuj]",
      nextVid1: "walkazewertemwbazie",
      querySelector: 61,
    },
    ignorujeszdrzwinakod: {
      btn1Value: "[kontunuuj]",
      nextVid1: "walkazewertemwbazie",
      questionTime: 6,
    },
    walkazewertemwbazie: {
      btn1Value: "Zabij Williama",
      btn2Value: "Oszczędź williama",
      nextVid1: "zabijewertawbazie",
      nextVid2: "wypuscewertawbazie",
      questionTime: 17,
    },
    zabijewertawbazie: {
      btn1Value: "[kontunuuj]",
      nextVid1: "ucieczkasamemu",
      ewertzyje: 0,
      questionTime: 3,
    },
    wypuscewertawbazie: {
      btn1Value: "[kontunuuj]",
      nextVid1: "ucieczkasamemu",
      ewertzyje: 1,
      questionTime: 6,
    },
    ucieczkasamemu: {
      btn1Value: "Spotkaj się z hanksem",
      nextVid1: "rozmowazhanksem",
      questionTime: 10,
    },
    rozmowazhanksem: {
      btn1Value: "Daj dysk Hanksowi",
      btn2Value: `"Przykro mi Hanks... nie mogę"`,
      nextVid1: "niszczydysk",
      nextVid2: "wzh",
      questionTime: 20,
    },
    wzh: {
      btn1Value: "[kontynuuj]",
      opt1req: {
        param: "hanks",
        expression: "<",
        value: -1,
      },
      btn2Value: "[kontynuuj]",
      opt2req: {
        param: "hanks",
        expression: ">",
        value: -2,
      },
      nextVid1: "hanksciezabija",
      nextVid2: "wygrywaszzhanksem",
      questionTime: 5,
    },
    niszczydysk: {
      btn1Value: "[Kontunuuj]",
      opt1req: {
        param: "hanks",
        expression: "<",
        value: 0,
      },
      btn2Value: "[Kontunuuj]",
      opt2req: {
        param: "hanks",
        expression: "==",
        value: 0,
      },
      btn3Value: "[Kontunuuj]",
      opt3req: {
        param: "hanks",
        expression: ">",
        value: 0,
      },
      nextVid1: "walkazhanksem",
      nextVid2: "hanksidziesolo",
      nextVid3: "idziesznagrzegorzazhanksem",
      dysk: 0,
      questionTime: 15,
    },
    walkazhanksem: {
      btn1Value: "[kontynuuj]",
      opt1req: {
        param: "hanks",
        expression: "<",
        value: -1,
      },
      btn2Value: "[kontynuuj]",
      opt2req: {
        param: "hanks",
        expression: ">",
        value: -2,
      },
      nextVid1: "hanksciezabija",
      nextVid2: "wygrywaszzhanksem",
      questionTime: 3,
    },
    hanksciezabija: {
      btn1Value: "[END]",
      nextVid1: "hanksciezabija",
      questionTime: 60,
    },
    wygrywaszzhanksem: {
      btn1Value: "Zrzuć Hanksa",
      opt1req: {
        param: "zwlokiewerta",
        expression: "==",
        value: 0,
      },
      btn2Value: "Zrzuć Hanksa",
      opt2req: {
        param: "zwlokiewerta",
        expression: "==",
        value: 1,
      },
      btn3Value: "Nie zrzucaj Hanksa",
      opt3req: {
        param: "zwlokiewerta",
        expression: "==",
        value: 0,
      },
      btn4Value: "Nie zrzucaj Hanksa",
      opt4req: {
        param: "zwlokiewerta",
        expression: "==",
        value: 1,
      },
      nextVid1: "zabijhanksa",
      nextVid2: "zabijhanksazwlokiewerta",
      nextVid3: "wypuschanksa",
      nextVid4: "wypuschanksazwlokiewerta",
      questionTime: 12,
    },
    zabijhanksa: {
      btn1Value: "[kontynuuj]",
      nextVid1: "podejsciedogrzegorza",
      questionTime: 4,
    },
    zabijhanksazwlokiewerta: {
      btn1Value: "[kontynuuj]",
      nextVid1: "podejsciedogrzegorza",
      questionTime: 5,
    },
    wypuschanksa: {
      btn1Value: "[kontynuuj]",
      nextVid1: "hankssolopowypuszczeniu",
      questionTime: 8,
    },
    wypuschanksazwlokiewerta: {
      btn1Value: "[kontynuuj]",
      nextVid1: "hankssolopowypuszczeniu",
    },
    hankssolopowypuszczeniu: {
      btn1Value: "[END]",
      nextVid1: "hankssolopowypuszczeniu",
      questionTime: 48,
    },
    hanksidziesolo: {
      btn1Value: "[kontynuuj]",
      nextVid1: "podejsciedogrzegorza",
      questionTime: 14,
    },
    podejsciedogrzegorza: {
      btn1Value: "[Daj dysk Grzegorzowi]",
      opt1req: {
        param: "dysk",
        expression: "==",
        value: 1,
      },
      btn2Value: "Teraz wiem już o wszystkim... [nie dawaj dysku]",
      nextVid1: "dajdyskgrzegorzowi",
      nextVid2: "niedawajdysku",
      questionTime: 6,
    },
    dajdyskgrzegorzowi: {
      btn1Value: "[END]",
      nextVid1: "dajdyskgrzegorzowi",
      questionTime: 42,
    },
    niedawajdysku: {
      btn1Value: "[Kontynuuj]",
      opt1req: {
        param: "ewertzyje",
        expression: "==",
        value: 0,
      },
      btn2Value: "[użyj pilota]",
      opt2req: {
        param: "pilot",
        expression: "==",
        value: 1,
      },
      btn3Value: "[Kontunuuj]",
      opt3req: {
        param: "ewertzyje",
        expression: "==",
        value: 1,
      },
      nextVid1: "poddajsie",
      nextVid2: "bombagrzegorz",
      nextVid3: "ewertzabijagrzegorza",
      questionTime: 48,
    },
    poddajsie: {
      btn1Value: "[END]",
      nextVid1: "poddajsie",
      questionTime: 6,
    },
    bombagrzegorz: {
      btn1Value: "[END]",
      nextVid1: "bombagrzegorz",
      questionTime: 41,
    },
    ewertzabijagrzegorza: {
      btn1Value: "[END]",
      nextVid1: "ewertzabijagrzegorza",
      questionTime: 41,
    },
    idziesznagrzegorzazhanksem: {
      btn1Value: "[Kontynuuj]",
      opt1req: {
        param: "hanks",
        expression: "<",
        value: 3,
      },
      btn2Value: "[Kontunuuj]",
      opt2req: {
        param: "hanks",
        expression: "==",
        value: 3,
      },
      nextVid1: "walkazgrzegorzemrazemzhanksem",
      nextVid2: "chcecicosdac",
      questionTime: 8,
    },
    chcecicosdac: {
      btn1Value: "[Daj mu papierośnicę]",
      btn2Value: "[Daj mu wódkę]",
      nextVid1: "papierosnica",
      nextVid2: "wodka",
      questionTime: 7,
    },
    papierosnica: {
      btn1Value: "[kontunuuj]",
      nextVid1: "walkazgrzegorzemrazemzhanksem",
      hanksprzezyje: 2,
      questionTime: 9,
    },
    wodka: {
      btn1Value: "[kontunuuj]",
      nextVid1: "walkazgrzegorzemrazemzhanksem",
      hanksprzezyje: 1,
      questionTime: 9,
    },
    walkazgrzegorzemrazemzhanksem: {
      btn1Value: "[Kontunuuj]",
      opt1req: {
        param: "hanksprzezyje",
        expression: "==",
        value: 0,
      },
      btn2Value: "[Kontunuuj]",
      opt2req: {
        param: "hanksprzezyje",
        expression: "==",
        value: 1,
      },
      btn3Value: "[Kontunuuj]",
      opt3req: {
        param: "hanksprzezyje",
        expression: "==",
        value: 2,
      },
      nextVid1: "hanksumiera",
      nextVid2: "hanksumierazwodka",
      nextVid3: "hankszyje",
      questionTime: 54,
    },
    hanksumiera: {
      btn1Value: "[END]",
      nextVid1: "hanksumiera",
      questionTime: 35,
    },
    hanksumierazwodka: {
      btn1Value: "[END]",
      nextVid1: "hanksumierazwodka",
      questionTime: 55,
    },
    hankszyje: {
      btn1Value: "[kontunuuj]",
      nextVid1: "hankszyje",
      questionTime: 38,
    },
    naradawojskowa: {
      btn1Value: "Zabij dzieci w Afryce",
      btn2Value: `"To... nieludzkie"`,
      nextVid1: "niggersdie",
      nextVid2: "niggerslive",
      questionTime: 61,
    },
    niggersdie: {
      hanks: -1,
      koddodrzwi: 1,
      btn1Value: "[kontunuuj]",
      nextVid1: "treningsamemu",
      questionTime: 16,
    },
    niggerslive: {
      hanks: 1,
      btn1Value: "Kim byli twoi przyjaciele? [szorstko]",
      btn2Value: "Co sądzisz o akcji? [bez zainteresowania]",
      btn3Value: "Jak długo juz tu jesteś? [przyjaźnie]",
      nextVid1: "walsiehanks",
      nextVid2: "sluchamhanksa",
      nextVid3: "sluchamzzainteresowaniem",
      questionTime: 56,
    },
    walsiehanks: {
      hanks: -1,
      btn1Value: "[kontunuuj]",
      nextVid1: "treningzhanksem",
      questionTime: 8,
    },
    sluchamhanksa: {
      hanks: 0,
      btn1Value: "[kontunuuj]",
      nextVid1: "treningzhanksem",
      questionTime: 9,
    },
    sluchamzzainteresowaniem: {
      hanks: 1,
      btn1Value: "[kontunuuj]",
      nextVid1: "treningzhanksem",
      questionTime: 25,
    },
    treningzhanksem: {
      btn1Value: "[kontunuuj]",
      nextVid1: "bazazhanksem",
      questionTime: 32,
    },
    bazazhanksem: {
      btn1Value: "[kontunuuj]",
      nextVid1: "rozmowazhanksemzabicieewerta",
      ewertzyje: 0,
      questionTime: 57,
    },
    rozmowazhanksemzabicieewerta: {
      btn1Value: "[kontunuuj]",
      nextVid1: "rozmowazhanksem",
      zwlokiewerta: 1,
      questionTime: 19,
    },
    szukanieinformatyka: {
      btn1Value: "[Zgódź się na torturowanie informatyka]",
      btn2Value: `"Nie... Poszukajmy informacji w barze"`,
      nextVid1: "tortury",
      nextVid2: "barewert",
      questionTime: 11,
    },
    tortury: {
      btn1Value: "[Odejdź]",
      btn2Value: "[Uściśnij mu dłoń]",
      nextVid1: "odrzucewerta",
      nextVid2: "wspolpracazewertem",
      questionTime: 26,
    },
    odrzucewerta: {
      btn1Value: "[Kontynuuj]",
      nextVid1: "treningsamemu",
      ewert: -10,
      questionTime: 8,
    },
    wspolpracazewertem: {
      btn1Value: "[Kontynuuj]",
      nextVid1: "treningzewertem",
      ewert: 1,
      questionTime: 5,
    },
    barewert: {
      btn1Value: "[Wyjmij broń]",
      btn2Value: "[Pozwól działać Williamowi]",
      btn3Value: `"Odłóż to William"`,
      nextVid1: "twoguns",
      nextVid2: "onegun",
      nextVid3: "noguns",
      questionTime: 18,
      ewert: -1,
    },
    twoguns: {
      btn1Value: "[Kontynuuj]",
      nextVid1: "treningzewertem",
      ewert: 1,
      questionTime: 18,
    },
    onegun: {
      btn1Value: "[Kontynuuj]",
      nextVid1: "treningzewertem",
      ewert: 1,
      questionTime: 21,
    },
    noguns: {
      btn1Value: "[Kontynuuj]",
      nextVid1: "treningzewertem",
      ewert: 0,
      questionTime: 19,
    },
    treningzewertem: {
      btn1Value: "[Kontynuuj]",
      nextVid1: "wejsciezewertemdobazy",
      questionTime: 32,
    },
    wejsciezewertemdobazy: {
      btn1Value: "[Kontynuuj]",
      nextVid1: "ewertzabijagrzegorzaewertline",
      questionTime: 60,
    },
    ewertzabijagrzegorzaewertline: {
      btn1Value: "[Kontunuuj]",
      opt1req: {
        param: "ewert",
        expression: "==",
        value: -1,
      },
      btn2Value: "[Kontunuuj]",
      opt2req: {
        param: "ewert",
        expression: "==",
        value: 0,
      },
      btn3Value: "[Kontunuuj]",
      opt3req: {
        param: "ewert",
        expression: "==",
        value: 1,
      },
      nextVid1: "badewert",
      nextVid2: "neutralewert",
      nextVid3: "goodewert",
      questionTime: 17,
    },
    badewert: {
      btn1Value: "[END]",
      nextVid1: "badewert",
      questionTime: 20,
    },
    neutralewert: {
      btn1Value: "[END]",
      nextVid1: "neutralewert",
      questionTime: 33,
    },
    goodewert: {
      btn1Value: "[END]",
      nextVid1: "goodewert",
      questionTime: 39,
    },
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/graj" element={<Video videos={videos} />} />
        <Route path="/odbierzprezent" element={<Samouczek />} />
        <Route path="/ogrze" element={<Osiagniecia />} />
      </Routes>
    </Router>
  );
}

export default App;
