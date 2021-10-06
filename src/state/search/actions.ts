import { SET_CURRENT_ITEM, ADD_TO_HISTORY, ProductItem } from "./constants";

export const setCurrentItem = (value: ProductItem) => {
  return {
    type: SET_CURRENT_ITEM,
    payload: { value },
  };
};

export const addToHistory = (value: ProductItem) => {
  return {
    type: ADD_TO_HISTORY,
    payload: { value },
  };
};
