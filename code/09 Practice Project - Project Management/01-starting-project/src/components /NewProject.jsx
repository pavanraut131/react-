import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
const NewProject = ({ setaddproject, setcancel }) => {
  const dialog = useRef();
  const title = useRef();
  const description = useRef();
  const duedate = useRef();
  const handlesave = () => {
    const enteredtitle = title.current.value;
    const entereddesc = description.current.value;
    const enteredduedate = duedate.current.value;

    if (
      enteredtitle.trim() == "" ||
      entereddesc.trim() == "" ||
      enteredduedate.trim() == ""
    ) {
      dialog.current.open();
      return;
    }
    setaddproject({
      title: enteredtitle,
      description: entereddesc,
      duedate: enteredduedate,
    });
  };
  return (
    <>
      <Modal ref={dialog}>
        <h2 className="text-xl font-bold text-stone-500 my-4">
          Invalid Input{" "}
        </h2>
        <p className="mb-4 text-stone-400">
          Oops.. you forgot to enter the values{" "}
        </p>
        <p className="mb-4 text-stone-400">Please provide the valid input </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4 ">
          <li> 
            <button
              onClick={setcancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handlesave}
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md px-6 py-2  "
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input ref={duedate} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
