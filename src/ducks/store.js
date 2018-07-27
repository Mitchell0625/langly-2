import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import registerReducer from "./registerReducer";

export default createStore(
  registerReducer,
  applyMiddleware(promiseMiddleware())
);
