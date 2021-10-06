export type StateProps = {
  errorMsg: string;
  showBarcodeScanner: boolean;
};

export const initialState: StateProps = {
  errorMsg: "",
  showBarcodeScanner: false,
};

export const SET_ERROR = "ui/SET_ERROR";
export const SET_SHOW_BARCODE_SCANNER = "/ui/SET_SHOW_BARCODE_SCANNER";
