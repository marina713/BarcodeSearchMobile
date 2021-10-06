import { initialState, SET_ERROR, SET_SHOW_BARCODE_SCANNER } from "./constants";
import { SET_CURRENT_ITEM, ADD_TO_HISTORY } from "../search/constants";

const uiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CURRENT_ITEM:
    case ADD_TO_HISTORY: {
      return {
        ...state,
        errorMsg: "",
        showBarcodeScanner: false,
      };
    }

    case SET_SHOW_BARCODE_SCANNER: {
      const {
        payload: { value },
      } = action;
      return {
        ...state,
        errorMsg: "",
        showBarcodeScanner: value,
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
