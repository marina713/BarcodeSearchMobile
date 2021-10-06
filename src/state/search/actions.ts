import {
  SUBMIT_SEARCH,
  SET_CURRENT_ITEM,
  ADD_TO_HISTORY,
  SET_SHOW_BARCODE_SCANNER,
  ProductItem,
} from "./constants";

export const submitSearch = (value: string) => {
  return {
    type: SUBMIT_SEARCH,
    payload: { value },
  };
};

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

export const setShowBarcodeScanner = (value: boolean) => {
  return {
    type: SET_SHOW_BARCODE_SCANNER,
    payload: { value },
  };
};
