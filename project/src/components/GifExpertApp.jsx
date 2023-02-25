import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  return (
    <div className="space-x-3 space-y-5 items-center">
      <h1 className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500">
        GIF EXPERT
      </h1>
      <AddCategory onAddCategory={addCategory}/>
      {categories.map((category, index) => {
        return <GifGrid key={index} category={category}/>;
      })}
    </div>
  );
};

export default GifExpertApp;
