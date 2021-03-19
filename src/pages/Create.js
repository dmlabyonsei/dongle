import React, { useState } from "react";

// packages

// components
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Container from "../components/Container";
import Alert from "../components/Alert";
import BottomBox from "../components/BottomBox";
import Loader from "../components/Loader";
import Classifier from "../components/Classifier";
import Camera from "../components/Camera";
import Counter from "../components/Counter";

// sounds
import audio_face from "../asset/sound/audio3_face.m4a";
import audio_arm from "../asset/sound/audio4_arm.m4a";
import audio_leg from "../asset/sound/audio5_leg.m4a";
import audio_test from "../asset/sound/audio6_test.m4a";

// images
import guide_face from "../asset/img/guide_face.png";
import guide_arm from "../asset/img/guide_arm.png";
import guide_leg from "../asset/img/guide_leg.png";
import guide_test from "../asset/img/guide_test.png";

function Create(props) {
  const [mode, setMode] = useState("guide");
  const [step, setStep] = useState(guide_face);
  const [showAlert, setShowAlert] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [loader, setLoader] = useState(false);
  const [last, setLast] = useState(false);

  // const count = useRef(1);
  const [count, setCount] = useState(0);

  // audio1
  const audio1 = new Audio(audio_face);
  const [ended1, setEnd1] = useState(false);
  const onPlay1 = () => {
    setPlaying(true);
    audio1.play();
  };
  audio1.addEventListener("ended", () => {
    setPlaying(false);
    setEnd1(true);
    setMode("photo");
  });
  // audio2
  const audio2 = new Audio(audio_arm);
  const [ended2, setEnd2] = useState(false);
  const onPlay2 = () => {
    setPlaying(true);
    audio2.play();
  };
  audio2.addEventListener("ended", () => {
    setPlaying(false);
    setEnd2(true);
    setMode("photo");
  });
  // audio3
  const audio3 = new Audio(audio_leg);
  const [ended3, setEnd3] = useState(false);
  const onPlay3 = () => {
    setPlaying(true);
    audio3.play();
  };
  audio3.addEventListener("ended", () => {
    setPlaying(false);
    setEnd3(true);
    setMode("photo");
  });
  // audio3
  const audio4 = new Audio(audio_test);
  const [ended4, setEnd4] = useState(false);
  const onPlay4 = () => {
    setPlaying(true);
    audio4.play();
  };
  audio4.addEventListener("ended", () => {
    setPlaying(false);
    setEnd4(true);
    setMode("test");
    setLast(true);
  });

  //
  const clickHandler = () => {
    if (mode === "guide") {
      if (step === guide_face) {
        if (!playing && !ended1) {
          onPlay1();
        }
        if (playing && !ended1) {
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 500);
        }
      } else if (step === guide_arm) {
        if (!playing && !ended2) {
          onPlay2();
        }
        if (playing && !ended2) {
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 500);
        }
      } else if (step === guide_leg) {
        if (!playing && !ended3) {
          onPlay3();
        }
        if (playing && !ended3) {
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 500);
        }
      } else if (step === guide_test) {
        if (!playing && !ended4) {
          onPlay4();
        }
        if (playing && !ended4) {
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 500);
        }
      }
    } else if (mode === "photo") {
      setCount((count) => count + 1);
      if (count === 7) {
        setCount(0);
        setLoader(true);
      }
    }
  };
  const onCancel = () => {
    setLoader(false);
    if (step === guide_face) {
      setStep(guide_arm);
    } else if (step === guide_arm) {
      setStep(guide_leg);
    } else if (step === guide_leg) {
      setStep(guide_test);
    }
  };
  return (
    <Container flex height="100vh">
      <Camera />
      <Loader
        visible={loader}
        onCancel={onCancel}
        step={step}
        setMode={setMode}
      />
      <Navbar
        text="동글이 키우는 법"
        audioPlaying={playing}
        timerPlaying={last}
      />
      {mode === "guide" && (
        // <Guide type={step} />
        <img src={step} style={{ width: "100%" }} alt="img" />
      )}
      {mode === "photo" && <Counter count={count} mode={mode} />}

      <BottomBox animate disappear={last}>
        <Button
          width="100%"
          onClick={clickHandler}
          color={mode === "photo" ? "#8D60BE" : "#55119E"}
        >
          {mode === "photo" ? "찰칵" : "준비하기"}
        </Button>
      </BottomBox>
      <Alert show={showAlert} />
      <Classifier visible={last} />
    </Container>
  );
}

export default Create;