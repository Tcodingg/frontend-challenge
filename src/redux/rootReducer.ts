import { studentReducer } from "./reducers/studentReducer";
import { tagReducer, expandBtnReducer } from "./reducers/callToActionReducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  studentReducer,
  tagReducer,
  expandBtnReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
