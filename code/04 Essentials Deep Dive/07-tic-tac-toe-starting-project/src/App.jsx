import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "../winning-combinations";
import Gameover from "./components/Gameover";

const Initialstate = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedplayer(gameturns) {
  let currentplayer = "X";
  if (gameturns.length > 0 && gameturns[0].player == "X") {
    currentplayer = "O";
  }
  return currentplayer;
}
function App() {
  const [gameturns, setgameturns] = useState([]);
  const activeplayer = derivedplayer(gameturns);
  let gameboard = [...Initialstate.map((innerarray) => [...innerarray])];

  for (const turn of gameturns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
  }
  // const [activeplayer, setactiveplayer] = useState("X");
  let winner;
  for (const winning of WINNING_COMBINATIONS) {
    const firstsquaresymbol = gameboard[winning[0].row][winning[0].column];
    const secondsquaresymbol = gameboard[winning[1].row][winning[1].column];
    const thirdsquresynbol = gameboard[winning[2].row][winning[2].column];

    if (
      firstsquaresymbol &&
      firstsquaresymbol == secondsquaresymbol &&
      firstsquaresymbol == thirdsquresynbol
    ) {
      winner = firstsquaresymbol;
    }
  }
  const handlerematch = () => {
    setgameturns([]);
  };

  const handleactiveplayer = (rowindex, colindex) => {
    setgameturns((prevturns) => {
      const currentplayer = derivedplayer(prevturns);
      const updatedturn = [
        { square: { row: rowindex, col: colindex }, player: currentplayer },
        ...prevturns,
      ];
      return updatedturn;
    });
  };
  const isdraw = gameturns.length == 9 && !winner;

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
        {(winner || isdraw) && (
          <Gameover winner={winner} setrematch={handlerematch} />
        )}
        <GameBoard Onselectsquare={handleactiveplayer} board={gameboard} />
        <Log turns={gameturns} />
      </div>
    </main>
  );
}

export default App;
