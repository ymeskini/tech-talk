import { call, put, takeEvery } from "redux-saga/effects";
import initApiClient from "../../../infrastructure/api-client";
import { initiTodoLayer } from "../api-layer";
import { setTodos, startFetchingTodos } from "../todo-slice";

function* fetchTodos() {
  const apiClient = initiTodoLayer(initApiClient());
  const { data } = yield call(apiClient.getTodos);
  yield put(setTodos(data));
}

function* watchFetchTodosSaga() {
  yield takeEvery(startFetchingTodos.type, fetchTodos);
}

export default watchFetchTodosSaga;
