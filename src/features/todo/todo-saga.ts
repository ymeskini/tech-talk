import { all } from "redux-saga/effects";
import watchFetchTodosSaga from "./todo.sagas/fetch-todos";

function* todoFeatureSaga() {
  yield all([watchFetchTodosSaga()]);
}

export default todoFeatureSaga;
