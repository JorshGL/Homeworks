import { useState } from "react";

const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAddCategory(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        className="p-2 rounded-md"
        type="text"
        placeholder="Buscar"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
      />
    </form>
  );
};

export default AddCategory;
