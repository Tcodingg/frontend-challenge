import { tagReducer } from "./callToActionReducers";
import { Actions, actionTypes, studentTypes } from "../actions/actionTypes";
import { useState } from "react";

interface interfaceState {
  loading: boolean;
  students: studentTypes[];
  tag: string[];

  // tag: {
  //   id: string;
  //   newTag: string;
  // };
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

    // case actionTypes.ADD_TAG:
    //   return {
    //     ...state,
    //     students: state.students.map((student) =>
    //       student.id === action.payload.id
    //         ? { ...student, tag: [...student.tag, action.payload.newTag] }
    //         : student
    //     ),
    //   };

    // case actionTypes.ADD_TAG:
    //   return {
    //     ...state,
    //     students: [
    //       ...state.students,
    //       state.students[Number(action.payload.id)].tag.push(
    //         action.payload.newTag
    //       ),
    //     ],
    //   };
    // case actionTypes.ADD_TAG:
    //   return {
    //     ...state,
    //     tag: [...state.tag, action.payload],
    //   };

    default:
      return state;
  }
};
