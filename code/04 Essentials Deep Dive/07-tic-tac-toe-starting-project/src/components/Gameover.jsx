import React from "react";

const Gameover = ({ winner , setrematch}) => {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p> its a draw</p>}
      <p>
        <button onClick={setrematch}>Rematch !</button>
      </p>
    </div>
  );
};

export default Gameover;
