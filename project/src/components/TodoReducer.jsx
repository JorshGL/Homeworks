import React from "react";

export const actions = {
  ADD: "[TODO] ADD TODO",
};

const TodoReducer = (initialState, action) => {
  switch (action.type) {
    case actions.ADD:
      return [...initialState, action.payload];
    default:
      return initialState;
  }
};

export default TodoReducer;
