import { studentReducer } from "./fetchData/studentReducer";
import { tagReducer, expandBtnReducer } from "./callToAction/reducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  studentReducer,
  tagReducer,
  expandBtnReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
