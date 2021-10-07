export enum actionTypes {
  FETCH_LOADING = "FETCH_LOADING",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_FAIL = "FETCH_FAIL",
  ADD_TAG = "ADD_TAG",
  EXPAND_BTN = "EXPAND_BTN",
  SEARCH_BY_NAME = "SEARCH_BY_NAME",
}

type actionLoading = {
  type: actionTypes.FETCH_LOADING;
};
type actionSuccess = {
  type: actionTypes.FETCH_SUCCESS;
  payload: studentTypes[];
};
type actionFail = {
  type: actionTypes.FETCH_FAIL;
  payload: string;
};

export type actionAddTag = {
  type: actionTypes.ADD_TAG;
  payload: { id: string; newTag: string };
};
export interface studentTypes {
  city: string;
  company: string;
  email: string;
  firstName: string;
  grades: string[];
  id: string;
  lastName: string;
  pic: string;
  skill: string;
  average: string;
  // tag: reducerTagType;
}
type reducerTagType = {
  id: string;
  tags: string[];
};

export type actionSearchByName = {
  type: actionTypes.SEARCH_BY_NAME;
  payload: string;
};

export type actionExpandBtn = {
  type: actionTypes.EXPAND_BTN;
  payload: {
    isExpand: boolean;
    id: string;
  };
};

export interface tagType {
  newTag: string;
  id: string;
}

export type Actions =
  | actionLoading
  | actionSuccess
  | actionFail
  | actionAddTag
  | actionSearchByName
  | actionExpandBtn;
