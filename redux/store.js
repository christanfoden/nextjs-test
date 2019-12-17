import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export const store = () =>
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(promiseMiddleware, thunk))
  );
