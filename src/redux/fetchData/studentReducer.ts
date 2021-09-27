import { Actions, actionTypes, studentTypes } from "./actionTypes";

interface interfaceState {
  loading: boolean;
  students: studentTypes[];
  tag: {
    id: string;
    newTag: string;
  };
  err?: string;
}

let initialState: interfaceState = {
  loading: false,
  students: [],
  tag: {
    id: "",
    newTag: "",
  },
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
    // case actionTypes.ADD_TAG:{
    //   return{
    //     ...state,
    //     tag:{
    //       //find a student id that matches the payload tag then add the new tag
    //       id: action.payload.id,
    //       newTag: action.payload.newTag
    //     }
    //   }
    // }

    default:
      return state;
  }
};
