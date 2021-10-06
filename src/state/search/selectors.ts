import { createSelector } from "reselect";
import { initialState, StateProps } from "./constants";

const getSearch = (state: { search: StateProps }) =>
  state.search || initialState;

export const getBarcode = createSelector(getSearch, (data) => data.barcode);

export const getHistoricalData = createSelector(
  getSearch,
  (data) => data.historicalData
);

export const getCurrentItem = createSelector(
  getSearch,
  (data) => data.currentItem
);

export const getShowBarcodeScanner = createSelector(
  getSearch,
  (data) => data.showBarcodeScanner
);
