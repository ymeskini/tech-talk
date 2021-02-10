import { AxiosInstance } from "axios";

export const initiTodoLayer = (apiClient: AxiosInstance) => {
  const getTodos = () => {
    return apiClient.get("/todos");
  };

  return { getTodos };
};

export type TodoApiLayer = ReturnType<typeof initiTodoLayer>;
