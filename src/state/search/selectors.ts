import { createSelector } from "reselect";
import { initialState, StateProps } from "./constants";

const getSearch = (state: { search: StateProps }) =>
  state.search || initialState;

export const getHistoricalData = createSelector(
  getSearch,
  (data) => data.historicalData
);

export const getCurrentItem = createSelector(
  getSearch,
  (data) => data.currentItem
);

export const getBarcode = createSelector(getCurrentItem, (data) => data.code);
