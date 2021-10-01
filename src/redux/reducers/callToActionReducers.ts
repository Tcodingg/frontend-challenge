import { Actions, actionTypes, tagType } from "../actions/actionTypes";
import React, { useState } from "react";
//=================== tag reducer starts ========================
interface tagInterfaceState {
  tag: tagType[];
}
let initialState: tagInterfaceState = {
  tag: [],
};
export const tagReducer = (
  state: tagInterfaceState = initialState,
  action: Actions
): tagInterfaceState => {
  switch (action.type) {
    case actionTypes.ADD_TAG:
      return {
        tag: [...state.tag, action.payload],
      };

    default:
      return state;
  }
};

//=================== tag reducer ends ========================

//=================== expandBtn reducer starts =================
interface expandBtnInterfaceState {
  expand: boolean;
  btn_id: string;
}

const expandBtnInitialsState = {
  expand: true,
  btn_id: "",
};
export const expandBtnReducer = (
  state: expandBtnInterfaceState = expandBtnInitialsState,
  action: Actions
) => {
  switch (action.type) {
    case actionTypes.EXPAND_BTN:
      return {
        btn_id: action.payload.btn_id,
        expand: action.payload.expand,
      };
    default:
      return state;
  }
};
