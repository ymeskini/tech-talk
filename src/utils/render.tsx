import { ReactNode } from "react";
import { Provider } from "react-redux";

export const customRender = (Component: ReactNode) => {
  <Provider store={realStore}>
    <Component />
  </Provider>;
};

const apiClient = (graphQL) => {
    get, delete, put
    // REST API json

    // GRAPHQL
    // query
}

const serviceLayer = (apiClient) => ({
    getTodoById: (id) => {
       return apiClient.get('/')
    },
    getTodoList: (id) => {
        return apiClient.query(`
           id: ${id}
        `)
    }
})