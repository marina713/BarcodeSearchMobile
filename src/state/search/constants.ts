export type ProductItem = {
  code?: string;
  ingredients_text?: string;
  image_url?: string;
  product_name?: string;
  brands?: string;
  nutriments?: object;
};

export type StateProps = {
  historicalData: ProductItem[];
  currentItem: ProductItem;
};

export const initialState: StateProps = {
  historicalData: [],
  currentItem: {},
};

export const SET_CURRENT_ITEM = "search/SET_CURRENT_ITEM";
export const ADD_TO_HISTORY = "search/ADD_TO_HISTORY";
