import React, { useRef } from "react";

const Inputs = ({ onNewTodo }) => {
  const descriptionRef = useRef();

  const handleInput = () => {
    const todo = {
      id: new Date().getTime(),
      description: descriptionRef.current.value,
      done: false,
    };
    descriptionRef.current.value = "";
    onNewTodo(todo);
  };

  return (
    <div className="flex flex-col items-center w-2/3 gap-2">
      <h4>Agregar TODO</h4>
      <hr />
      <input
        type="text"
        className="rounded-md text-white p-2 bg-slate-500 focus:outline-none"
        ref={descriptionRef}
      />
      <button
        className="rounded-md p-3 bg-slate-700"
        onClick={() => handleInput()}
      >
        Agregar
      </button>
    </div>
  );
};

export default Inputs;
