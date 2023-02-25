import React from "react";
import { useState } from "react";

const FirstApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="text-5xl font-bold">Counter</div>
      <div className="flex flex-col space-y-4">
        <span className="text-xl font-ligth">{counter}</span>
        <div className="flex space-x-6">
          <button onClick={() => handleAdd()}> + 1 </button>
          <button onClick={() => handleSubstract()}> - 1 </button>
          <button onClick={() => handleReset()}> Reset </button>
        </div>
      </div>
    </div>
  );
};

export default FirstApp;
