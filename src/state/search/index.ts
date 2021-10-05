import {
  initialState,
  SUBMIT_SEARCH,
  SET_CURRENT_ITEM,
  SET_ERROR,
  ADD_TO_HISTORY,
  SHOW_BARCODE_SCANNER,
} from "./constants";

const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SUBMIT_SEARCH: {
      const {
        payload: { value },
      } = action;
      return {
        ...state,
        barcode: value,
      };
    }

    case SET_CURRENT_ITEM: {
      const {
        payload: { value },
      } = action;
      return {
        ...state,
        currentItem: value,
        errorMsg: "",
        barcode: value.code,
        showBarcodeScanner: false,
      };
    }

    case SET_ERROR: {
      const {
        payload: { value },
      } = action;
      return {
        ...state,
        currentItem: {},
        errorMsg: value,
      };
    }

    case SHOW_BARCODE_SCANNER: {
      return {
        ...state,
        showBarcodeScanner: true,
      };
    }

    case ADD_TO_HISTORY: {
      const {
        payload: { value },
      } = action;
      const isInHistory = state.historicalData.find(
        (item) => item.code === value.code
      );
      return !isInHistory
        ? {
            ...state,
            errorMsg: "",
            historicalData: [value, ...state.historicalData].slice(0, 9),
          }
        : state;
    }

    default:
      return state;
  }
};

export default searchReducer;
