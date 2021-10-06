import { initialState, SET_ERROR } from "./constants";
import { SET_CURRENT_ITEM, ADD_TO_HISTORY } from "../search/constants";

const uiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CURRENT_ITEM:
    case ADD_TO_HISTORY: {
      return {
        ...state,
        errorMsg: "",
      };
    }

    case SET_ERROR: {
      const {
        payload: { value },
      } = action;
      return {
        ...state,
        errorMsg: value,
      };
    }

    default:
      return state;
  }
};

export default uiReducer;
