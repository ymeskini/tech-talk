import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import setupStore from "./store/setup-store";

const store = setupStore();

const App = () => <Provider store={store}>App</Provider>;

ReactDOM.render(<App />, document.getElementById("root"));
