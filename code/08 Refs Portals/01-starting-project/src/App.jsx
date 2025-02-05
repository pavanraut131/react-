import Player from "./components/Player.jsx";
import Timerchallenge from "./components/Timerchallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timerchallenge title={"Easy"} targettime={1} />
        <Timerchallenge title={"Not Easy"} targettime={5} />
        <Timerchallenge title={"Getting Tough"} targettime={10} />
        <Timerchallenge title={"Pros only"} targettime={15} />
      </div>
    </>
  );
}

export default App;
