import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../store/root-reducer";
import { startFetchingTodos } from "./todo-slice";

export const TodoApp = () => {
  const { todos } = useSelector<ReduxState>((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startFetchingTodos());
  }, [dispatch]);

  return (
    <main>
      <input />
      <List>
        {todos ? (
          todos.map((todo) => <ListItem>{todo.title}</ListItem>)
        ) : (
          <ListItem>No todos</ListItem>
        )}
      </List>
    </main>
  );
};

export default TodoApp;
