import React, { useCallback, useReducer } from "react";
import TodoReducer from "./TodoReducer";
import TodoList from "./TodoList";
import Inputs from "./Inputs";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Hacer los challenges",
    done: false,
  },
];

const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

  const handleNewTodo = useCallback((todo) => {
    const action = {
      type: "[TODO] ADD TODO",
      payload: todo,
    };
    dispatchTodo(action);
  });

  return (
    <div className="flex flex-col items-center w-screen h-screen bg-slate-600 text-white p-5 gap-5">
      <h1 className="text-5xl font-bold">
        TodoApp: 10. <small>Pendientes: 2</small>
      </h1>
      <hr />

      <div className="flex flex-col items-center w-full">
        <TodoList todos={todos} />
        <Inputs onNewTodo={handleNewTodo} />
      </div>
    </div>
  );
};

export default TodoApp;
