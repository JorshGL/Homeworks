import React, { useState } from "react";
import useCounter from "../hooks/UseCounter";

export const FirstApp = () => {
  const {
    counter,
    increment,
    decrement,
    reset
  } = useCounter(0);

  return (
    <>
      <div>Counter</div>
      <div className="flex flex-col">
        <span>{counter}</span>
        <div className="flex space-x-6">
          <button onClick={() => increment()}> + 1 </button>
          <button onClick={() => decrement()}> - 1 </button>
          <button onClick={() => reset()}> Reset </button>
        </div>
      </div>
    </>
  );
};

export default FirstApp;
