import { actionTypes, tagType } from "./actionTypes";

import { Dispatch } from "redux";

export const addTag = (newTag: tagType) => (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.ADD_TAG,
    payload: newTag,
  });
};

export const expandBtn =
  (id: string, expand: boolean) => (dispatch: Dispatch) => {
    dispatch({
      type: actionTypes.EXPAND_BTN,
      payload: {
        btn_id: id,
        expand,
      },
    });
  };
