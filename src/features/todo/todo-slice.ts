import { createAction, createSlice } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  title: string;
  done: boolean;
};

export const startFetchingTodos = createAction("startFetchingTodos");
const todoSlice = createSlice<{ todos: Todo[] }, any, any>({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {},
});

const { reducer } = todoSlice;
export default reducer;
