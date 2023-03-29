import React from "react";
import TodoList from "./TodoList";
import Inputs from "./Inputs";
import useTodo from "../hooks/UseTodo";

const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleDoneTodo,
    countTodos,
    countPendingTodos,
  } = useTodo();

  return (
    <div className="flex flex-col items-center w-screen h-screen bg-slate-600 text-white p-5 gap-5">
      <h1 className="text-5xl font-bold">
        TodoApp: {countTodos}. <small>Pendientes: {countPendingTodos}</small>
      </h1>
      <hr />

      <div className="flex flex-col items-center w-full">
        <TodoList
          todos={todos}
          handleRemoveTodo={handleRemoveTodo}
          handleToggleDoneTodo={handleToggleDoneTodo}
        />
        <Inputs onNewTodo={handleNewTodo} />
      </div>
    </div>
  );
};

export default TodoApp;
