import { combineReducers } from "redux";
import searchReducer from "./search";
import uiReducer from "./ui";

const rootReducers = combineReducers({
  search: searchReducer,
  ui: uiReducer,
});

export default rootReducers;
