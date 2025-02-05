import { React, useState } from "react";

const Timerchallenge = ({ title, targettime }) => {
  const [timerstarted, settimerstarted] = useState(false);
  const [timeexpired, settimeexpired] = useState(false);
  const handlestart = () => {
    setTimeout(() => {
      settimeexpired(true);
    }, targettime * 3000);
    settimerstarted(true);
  };
  const handlestop =()=>{

  }
  return (     
    <section className="challenge">
      <h2>{title}</h2>
      {timeexpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targettime} second{targettime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handlestart}>
          {timerstarted ? "Stop" : "Start"} challenge
        </button>
      </p>
      <p className={timerstarted ? "active" : undefined}>
        {timerstarted ? "Time is running" : "timer inactive"}
      </p>
    </section>
  );
};

export default Timerchallenge;
