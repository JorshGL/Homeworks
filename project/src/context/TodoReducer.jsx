import React from "react";

export const actions = {
  ADD: "[TODO] ADD TODO",
  REMOVE: "[TODO] REMOVE TODO",
  TOGGLE_DONE: "[TODO] TOGGLE DONE TODO",
};

const TodoReducer = (initialState, action) => {
  switch (action.type) {
    case actions.ADD:
      return [...initialState, action.payload];

    case actions.REMOVE:
      return initialState.filter((todo) => todo.id !== action.payload);

    case actions.TOGGLE_DONE:
      return initialState.map((todo) => {
        if (todo.id !== action.payload) return todo;
        return {
          ...todo,
          done: !todo.done
        };
      });

    default:
      return initialState;
  }
};

export default TodoReducer;
