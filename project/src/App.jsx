import { useDispatch, useSelector } from "react-redux";

import React, { useState } from "react";
import {
  decrement,
  increment,
  incrementBy,
} from "./store/slices/counter/counterSlice";

const App = () => {
  const { counter } = useSelector((state) => state.counter);
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center bg-black h-screen w-screen text-white mx-0 my-0">
      <span className="font-bold font-mono text-2xl">
        Counter is: {counter}
      </span>
      <div className="flex flex-col w-1/3 gap-2 my-6">
        <button
          className="bg-neutral-900 py-2 rounded-md"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-neutral-900 py-2 rounded-md"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div className="flex gap-2">
          <button
            className="bg-neutral-900 w-1/2 py-2 rounded-md"
            onClick={() => dispatch(incrementBy(value))}
          >
            Increment by
          </button>
          <input
            className="bg-neutral-600 rounded-md w-1/2 p-2 focus:outline-none"
            type="number"
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
