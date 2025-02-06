import React from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultsModal(
  { result, targettime, setReset },
  ref
) {
  const userlost = result <= 0;
  const dialog = useRef();
  const score = Math.round((1 - result / (targettime * 1000)) * 100);
  const formatedtime = (result / 1000).toFixed(2);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userlost && <h2>you lost</h2>}
      {!userlost && <h2>your score: {score}</h2>}
      <p>
        the target time was <strong>{targettime}</strong> seconds.
      </p>
      <p>
        you stopped the timer with <strong>{formatedtime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={setReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  ); 
});

export default ResultModal;
