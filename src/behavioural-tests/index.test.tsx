import "regenerator-runtime";
import { TodoApp } from "../../src/features/todo/todo-app";
import { render, screen } from "@testing-library/react";
import setupStore from "../store/setup-store";

import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

const customRender = (Component: React.ReactNode) => {
  const store = setupStore();

  return (
    <ChakraProvider resetCSS>
      <Provider store={store}>{Component}</Provider>
    </ChakraProvider>
  );
};

describe("Todos", () => {
  it("can render a list of todos", () => {
    render(<TodoApp />);

    screen.debug();
  });
  it("can add a new todo item", () => {});
  it("can remove a todo item", () => {});
});
