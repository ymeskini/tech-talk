import { AxiosInstance, AxiosResponse } from "axios";
import { all, call } from "redux-saga/effects";

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

function* getTodoList(getTodos: () => Promise<AxiosResponse<Todo[]>>) {
  yield call(getTodos);
}

function* todoSaga(apiClient: AxiosInstance) {
  const { getTodos } = initiTodoLayer(apiClient);
  all([getTodoList(getTodos)]);
}

export default todoSaga;
