import { actionTypes, tagType } from "./actionTypes";

import { Dispatch } from "redux";

export const addTag = (tags: tagType) => (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.ADD_TAG,
    payload: {
      id: tags.id,
      newTag: tags.newTag,
    },
  });
};

// export const expandBtn =
//   (id: string, expand: boolean) => (dispatch: Dispatch) => {
//     dispatch({
//       type: actionTypes.EXPAND_BTN,
//       payload: {
//         btn_id: id,
//         expand,
//       },
//     });
//   };
export const expandBtn = (expand: boolean) => (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.EXPAND_BTN,
    payload: {
      expand,
    },
  });
};

export const searchByName = (name: string) => (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.SEARCH_BY_NAME,
    payload: name,
  });
};
