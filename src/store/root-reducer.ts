import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todo-slice";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export type ReduxState = ReturnType<typeof rootReducer>;

export default rootReducer;
