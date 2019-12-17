import { combineReducers } from "redux";
import testReducer from "./testReducer";

const appReducer = combineReducers({
  testReducer: testReducer
});

export default appReducer;
