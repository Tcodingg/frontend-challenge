import { Actions, actionTypes, studentTypes } from "../actions/actionTypes";

interface interfaceState {
  loading: boolean;
  students: studentTypes[];
  tag: string[];
  err?: string;
}

let initialState: interfaceState = {
  loading: false,
  students: [],
  tag: [],
};

export const studentReducer = (
  state: interfaceState = initialState,
  action: Actions
) => {
  switch (action.type) {
    case actionTypes.FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        students: action.payload,
      };

    case actionTypes.FETCH_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    default:
      return state;
  }
};
