import { Actions, actionTypes } from "../actions/actionTypes";
import React, { useState } from "react";
//=================== tag reducer starts ========================
type tagType = {
  id: string;
  tags: string[];
};
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
      let hasTag = state.tag.find((tagId) => tagId.id === action.payload.id);
      return {
        // tag: hasTag?
        // state.tag.map((storedTag)=> storedTag.id === action.payload.id):
        ...state,
        tag: hasTag
          ? state.tag.map((storedTag) =>
              storedTag.id === action.payload.id
                ? {
                    ...storedTag,
                    tags: [...storedTag.tags, action.payload.newTag],
                  }
                : storedTag
            )
          : [
              ...state.tag,
              { id: action.payload.id, tags: [action.payload.newTag] },
            ],
      };

    default:
      return state;
  }
};

//=================== tag reducer ends ========================

//=================== expandBtn reducer starts =================
// interface expandBtnInterfaceState {
//   payload: boolean;

// }
interface expandBtnInterface {
  isExpand: boolean;
  id: string;
}
let expandBtnInitState: expandBtnInterface = {
  isExpand: false,
  id: "",
};

export const expandBtnReducer = (
  state = expandBtnInitState,
  action: Actions
) => {
  switch (action.type) {
    case actionTypes.EXPAND_BTN:
      return {
        isExpand: action.payload.isExpand,
        id: action.payload.id,
      };
    default:
      return state;
  }
};
