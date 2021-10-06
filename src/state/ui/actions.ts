import { SET_ERROR, SET_SHOW_BARCODE_SCANNER } from "./constants";

export const setError = (value: string) => {
  return {
    type: SET_ERROR,
    payload: { value },
  };
};

export const setShowBarcodeScanner = (value: boolean) => {
  return {
    type: SET_SHOW_BARCODE_SCANNER,
    payload: { value },
  };
};
