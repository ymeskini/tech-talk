import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";
import sagaMiddleware from "./saga-middleware";

const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [
      ...getDefaultMiddleware({
        thunk: false,
      }),
      sagaMiddleware,
    ],
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default setupStore;
