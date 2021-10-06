export type ProductItem = {
  code?: string;
  ingredients_text?: string;
  image_url?: string;
  product_name?: string;
  brands?: string;
  nutriments?: object;
};

export type StateProps = {
  barcode: string;
  historicalData: ProductItem[];
  currentItem: ProductItem;
  showBarcodeScanner: boolean;
};

export const initialState: StateProps = {
  barcode: "",
  historicalData: [],
  currentItem: {},
  showBarcodeScanner: false,
};

export const SUBMIT_SEARCH = "search/SUBMIT_SEARCH";
export const SET_CURRENT_ITEM = "search/SET_CURRENT_ITEM";
export const ADD_TO_HISTORY = "search/ADD_TO_HISTORY";
export const SET_SHOW_BARCODE_SCANNER = "/search/SET_SHOW_BARCODE_SCANNER";
