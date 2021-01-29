import { isAllOf } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";
import todo from "../features/todo/todo-saga";

function* rootSaga() {
  yield all([todo()]);
}

export default rootSaga;
