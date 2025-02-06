import React, { useState } from "react";

const  NewTak = ({ addnewtask }) => {
  const [enteredvalue, setenteredvalue] = useState("");
  const handlechange = (e) => {
    setenteredvalue(e.target.value);
  };
  const handltask = () => {
    if (enteredvalue.trim()) {
      // Optional check to ensure no empty task
      addnewtask(enteredvalue);
      setenteredvalue(""); // Clear input after adding task
    }
  };
  return (
    <div className="flex items-center gap-4 ">
      <input
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={enteredvalue}
        onChange={handlechange}
        type="text"
      />
      <button
        onClick={handltask}
        className="text-stone-700 hover:text-stone-950 "
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTak;
  