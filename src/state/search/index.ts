import { initialState, SET_CURRENT_ITEM, ADD_TO_HISTORY } from "./constants";
import { SET_ERROR } from "../ui/constants";

const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CURRENT_ITEM: {
      const {
        payload: { value },
      } = action;
      return {
        ...state,
        currentItem: value,
      };
    }

    case SET_ERROR: {
      return {
        ...state,
        currentItem: {},
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
            historicalData: [value, ...state.historicalData].slice(0, 9),
          }
        : state;
    }

    default:
      return state;
  }
};

export default searchReducer;
