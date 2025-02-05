import { React, useState } from "react";

const GameBoard = ({ Onselectsquare, board }) => {
  // const [gameboard, setgameboard] = useState(Initialstate);

  //   const handleselectsquare = (rowindex, colindex) => {
  //     setgameboard((prevstate) => {
  //       let updatedstate = [...prevstate.map((row) => [...row])];
  //       updatedstate[rowindex][colindex] = activeplayersymbol;
  //       return updatedstate;
  //     });
  //     Onselectsquare();
  //   };
  return (
    <ol id="game-board">
      {board.map((row, rowindex) => {
        return (
          <li key={rowindex}>
            <ol>
              {row.map((col, colindex) => {
                return (
                  <li key={colindex}>
                    <button
                      onClick={() => Onselectsquare(rowindex, colindex)}
                      disabled={col !== null}
                    >
                      {col}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default GameBoard;
