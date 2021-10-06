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

let expandBtnInitialsState: boolean = false;

export const expandBtnReducer = (
  state = expandBtnInitialsState,
  action: Actions
) => {
  switch (action.type) {
    case actionTypes.EXPAND_BTN:
      return !state;
    default:
      return state;
  }
};
