import { isAllOf } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { all } from "redux-saga/effects";
import todo from "../features/todo/todo-saga";

function* rootSaga(apiClient: AxiosInstance) {
  yield all([todo(apiClient)]);
}

export default rootSaga;
