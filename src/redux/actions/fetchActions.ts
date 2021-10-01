import axios from "axios";
import { Dispatch } from "redux";
import { actionTypes } from "./actionTypes";

export const fetchStudentData = () => async (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.FETCH_LOADING,
  });
  try {
    const studentsData = await axios.get(
      "https://api.hatchways.io/assessment/students"
    );
    // console.log(studentsData.data);
    dispatch({
      type: actionTypes.FETCH_SUCCESS,
      payload: studentsData.data.students,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.FETCH_FAIL,
      payload: err,
    });
  }
};
