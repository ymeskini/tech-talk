import { createAction, createSlice } from "@reduxjs/toolkit";

export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

export const startFetchingTodos = createAction("startFetchingTodos");
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [] as Todo[],
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

const {
  reducer,
  actions: { setTodos },
} = todoSlice;

export { setTodos };
export default reducer;
