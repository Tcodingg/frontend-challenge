export enum actionTypes {
  ADD_TAG = "ADD_TAG",
  EXPAND_BTN = "EXPAND_BTN",
}

export type actionAddTag = {
  type: actionTypes.ADD_TAG;
  payload: tagType;
};
type actionExpandBtn = {
  type: actionTypes.EXPAND_BTN;
  payload: {
    expand: boolean;
    btn_id: string;
  };
};

export interface tagType {
  newTag: string;
  id?: string;
}

export type Actions = actionAddTag | actionExpandBtn;
