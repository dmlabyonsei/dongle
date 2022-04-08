import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";

function Timer({ start }) {
  const [seconds, setSeconds] = useState(30);
  const [fin, setFin] = useState(false);

  useEffect(() => {
    if (start) {
      const countdown = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        } else {
          clearInterval(countdown);
          setFin(true);
        }
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [seconds, start]);

  return (
    <>
      {/* {fin && <Redirect to="/" />} */}
      {fin && <Redirect to="/learn3" />}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {seconds}
      </div>
    </>
  );
}

export default Timer;
