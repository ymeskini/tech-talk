import "regenerator-runtime";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import setupStore from "./store/setup-store";

import { ChakraProvider } from "@chakra-ui/react";
import TodoApp from "./features/todo/todo-app";

const store = setupStore();

const App = () => (
  <ChakraProvider resetCSS>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </ChakraProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
