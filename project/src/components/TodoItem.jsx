import React from "react";
import {
  AiFillDelete
} from 'react-icons/ai'

const TodoItem = ({ todo }) => {
  return (
    <div className="flex gap-3 w-7/12 items-center justify-between m-2">
      <span>{todo.description}</span>
      <AiFillDelete className="text-2xl" />
    </div>
  );
};

export default TodoItem;
