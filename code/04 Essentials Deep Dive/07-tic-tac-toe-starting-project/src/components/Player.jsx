import React, { useState } from "react";

const Player = ({ initialname, symbol, isActive }) => {
  const [playername, setplayername] = useState(initialname);
  const [isediting, setisediting] = useState(false);
  const submithandler = () => {
    setisediting((editing) => !editing);
  };
  const handlechange = (e) => {
    setplayername(e.target.value);
  };
  let editableplayer = <span className="player-name">{playername}</span>;
  if (isediting) {
    editableplayer = (
      <input type="text" required value={playername} onChange={handlechange} />
    );
  }
  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {editableplayer}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={submithandler}>{isediting ? "Save" : "Edit"}</button>
      </li>
    </>
  );
};

export default Player;
