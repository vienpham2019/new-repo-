import appReducer from "./appReducer";
import portfolioReducer from "./portfolioReducer";
import { combineReducers } from "redux";

export default combineReducers({
  appReducer,
  portfolioReducer,
});
