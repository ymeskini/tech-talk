import axios, { AxiosInstance, AxiosResponse } from "axios";
import { all, call, select, takeEvery } from "redux-saga/effects";
import { startFetchingTodos } from "./todo-slice";

type Todo = {
  id: number;
  title: string;
  author: string;
};

const initiTodoLayer = (apiClient: AxiosInstance) => {
  const getTodos = () => {
    return apiClient.get("/todos");
  };

  return { getTodos };
};

const api = () =>
  axios.create({
    baseURL: "http://localhost:3000",
  });

function* fetchTodos(action: any) {
  const apiClient = initiTodoLayer(api());
  const todos = yield call(apiClient.getTodos);
  console.log(todos);
}

function* watchTodoSaga() {
  yield takeEvery(startFetchingTodos.type, fetchTodos);
}

export default watchTodoSaga;
