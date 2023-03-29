import React, { useCallback, useEffect, useReducer } from "react";
import TodoReducer, { actions } from "./../context/TodoReducer";
import { useState } from "react";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Hacer los challenges",
    done: false,
  },
];

const useTodo = () => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

  const [countTodos, setCountTodos] = useState(0);
  const [countPendingTodos, setCountPendingTodos] = useState(0);

  const handleNewTodo = useCallback((todo) => {
    const action = {
      type: actions.ADD,
      payload: todo,
    };
    dispatchTodo(action);
  });

  const handleRemoveTodo = useCallback((id) => {
    const action = {
      type: actions.REMOVE,
      payload: id,
    };
    dispatchTodo(action);
  });

  const handleToggleDoneTodo = useCallback((id) => {
    const action = {
      type: actions.TOGGLE_DONE,
      payload: id,
    };
    dispatchTodo(action);
  });

  useEffect(() => {
    setCountTodos(todos.length);
    setCountPendingTodos(todos.filter((todo) => !todo.done).length);
  }, [todos]);

  return {
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleDoneTodo,
    countTodos,
    countPendingTodos,
  };
};

export default useTodo;
