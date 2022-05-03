import React from "react";
import { Link } from "react-router-dom";

// images
import background from "../asset/img/background.png";

// component
import Button from "../components/Button";
import BodyBackground from "../components/BodyBackground";
import BottomBox from "../components/BottomBox";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { changeTestType } from "../store/testType";

function Home(props) {
  const dispatch = useDispatch();

  const global = {
    textAlign: "center",
    color: "white",
  };

  const subtitle = {
    fontSize: "0.9rem",
  };

  const title = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "2rem",
  };

  const collabo = {
    fontSize: "0.8rem",
    marginTop: "1rem",
  };

  return (
    <div style={global}>
      <BodyBackground image={background} />
      <Navbar color="transparent" home />
      <div style={{ position: "absolute", top: "50%" }}>
        <button onClick={() => dispatch(changeTestType(1))}>1</button>
        <button onClick={() => dispatch(changeTestType(2))}>2</button>
        <button onClick={() => dispatch(changeTestType(3))}>3</button>
      </div>
      <BottomBox>
        <div style={subtitle}>Artificial Intelligence DONGLE</div>
        <div style={title}>
          인공지능 <span style={{ color: "yellow" }}>동글</span>
        </div>
        <Link to="/learn1">
          <Button width="100%">체험 시작하기</Button>
        </Link>
        <div style={collabo}>
          연세대학교 디지털미디어랩
          <br />X 국립어린이과학관
        </div>
      </BottomBox>
    </div>
  );
}

export default Home;
