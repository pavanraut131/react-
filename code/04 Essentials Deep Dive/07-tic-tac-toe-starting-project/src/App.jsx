import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [activeplayer, setactiveplayer] = useState("X");
  const [gameturns, setgameturns] = useState([]);

  const handleactiveplayer = (rowindex, colindex) => {
    setactiveplayer((current) => (current === "X" ? "O" : "X"));
    setgameturns((prevturns) => {
      let currenplayer = "X";
      if (prevturns.length > 0 && prevturns[0].player === "X") {
        currenplayer = "O";
      }
      const updatedturn = [
        { square: { row: rowindex, col: colindex }, player: currenplayer },
        ...prevturns,
      ];
    });
    return updatedturn;
  };
  console.log(activeplayer);
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialname="Player-1"
            symbol="X"
            isActive={activeplayer === "X"}
          />
          <Player
            initialname="Player-2"
            symbol="O"
            isActive={activeplayer === "O"}
          />
        </ol>
        <GameBoard
          Onselectsquare={handleactiveplayer}
          activeplayersymbol={activeplayer}
        />
        <Log />
      </div>
    </main>
  );
}

export default App;
