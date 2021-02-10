import axios, { AxiosInstance } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { setTodos, startFetchingTodos } from "./todo-slice";

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

function* fetchTodos() {
  const apiClient = initiTodoLayer(api());
  const { data } = yield call(apiClient.getTodos);
  yield put({ type: setTodos.type, payload: data });
}

function* watchTodoSaga() {
  yield takeEvery(startFetchingTodos.type, fetchTodos);
}

export default watchTodoSaga;
