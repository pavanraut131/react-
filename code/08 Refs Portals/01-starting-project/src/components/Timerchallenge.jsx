import { React, useRef, useState } from "react";
import ResultsModal from "./ResultsModal";

const Timerchallenge = ({ title, targettime }) => {
  const timer = useRef();
  const dialog = useRef();
  const [timeremaining, settimeremaining] = useState(targettime * 1000);
  const timeractive = timeremaining > 0 && timeremaining < targettime * 1000;
  if (timeremaining <= 0) {
    clearInterval(timer.current);
    
    dialog.current.open();
  }
  function handleReset(){
    settimeremaining(targettime*1000)
  }
  const handlestart = () => {
    timer.current = setInterval(() => {
      settimeremaining((prevtime) => {
        return prevtime - 10;
      });
    }, 10);
  };
  const handlestop = () => {
    clearInterval(timer.current);
    dialog.current.open();
  };
  return (
    <>
      <ResultsModal setReset = {handleReset} ref={dialog} targettime={targettime} result={timeremaining} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targettime} second{targettime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeractive ? handlestop : handlestart}>
            {timeractive ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timeractive ? "active" : undefined}>
          {timeractive ? "Time is running" : "timer inactive"}
        </p>
      </section>
    </>
  );
};

export default Timerchallenge;
