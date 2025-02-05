import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const input = useRef();
  const [playername, setplayername] = useState(null);

  const handleclick = () => {
    setplayername(input.current.value);
  };
  return (
    <section id="player">
      <h2>Welcome {playername ?? "Unknown Identity"}</h2>
      <p>
        <input ref={input} type="text" />
        <button onClick={handleclick}>Set Name</button>
      </p>
    </section>
  );
}
