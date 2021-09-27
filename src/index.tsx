import ReactDom from "react-dom";
import App from "./App";
import { localStore } from "./redux/store";
import { Provider } from "react-redux";

ReactDom.render(
  <Provider store={localStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
