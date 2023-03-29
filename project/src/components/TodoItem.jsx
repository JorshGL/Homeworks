import React from "react";
import { AiFillDelete } from "react-icons/ai";

const TodoItem = ({ todo, handleRemoveTodo, handleToggleDoneTodo }) => {
  return (
    <div className="flex gap-3 w-7/12 items-center justify-between m-2">
      <span
        onClick={() => handleToggleDoneTodo(todo.id)}
        className={`cursor-pointer ${todo.done ? "line-through" : ""}`}
      >
        {todo.description}
      </span>
      <AiFillDelete
        className="text-2xl cursor-pointer"
        onClick={() => handleRemoveTodo(todo.id)}
      />
    </div>
  );
};

export default TodoItem;
