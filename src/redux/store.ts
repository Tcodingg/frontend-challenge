import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const localStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
