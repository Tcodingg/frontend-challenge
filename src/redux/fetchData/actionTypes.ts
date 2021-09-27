export enum actionTypes {
  FETCH_LOADING = "FETCH_LOADING",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_FAIL = "FETCH_FAIL",
  ADD_TAG = "ADD_TAG",
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
}

export type Actions = actionLoading | actionSuccess | actionFail;
