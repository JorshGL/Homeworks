import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleRemoveTodo, handleToggleDoneTodo }) => {
  return (
    <div className="flex flex-col items-center w-2/3 m-2">
      {todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            handleRemoveTodo={handleRemoveTodo}
            handleToggleDoneTodo={handleToggleDoneTodo}
            key={index}
          />
        );
      })}
      <span className="h-[1px] w-full bg-white"></span>
    </div>
  );
};

export default TodoList;
