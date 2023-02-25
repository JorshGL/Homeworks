import React, { useState } from "react";

const GifExpertApp = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const addCategory = () => {
    setCategories([...categories, category]);
    setCategory("");
  };

  return (
    <div className="space-x-3 space-y-5 items-center">
      <h1 className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500">
        GIF EXPERT
      </h1>
      <input
        className="rounded-md p-3"
        type="text"
        onChange={(e) => setCategory(e.target.value)}
      />
      <button
        className="border-2 border-transparent"
        onClick={() => addCategory()}
      >
        Add
      </button>
      <ol>
        {categories.map((category, index) => {
          return <li key={index}>{category}</li>;
        })}
      </ol>
    </div>
  );
};

export default GifExpertApp;
