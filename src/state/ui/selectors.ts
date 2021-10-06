import { createSelector } from "reselect";
import { initialState, StateProps } from "./constants";

const getUi = (state: { ui: StateProps }) => state.ui || initialState;

export const getErrorMsg = createSelector(getUi, (data) => data.errorMsg);

export const getShowBarcodeScanner = createSelector(
  getUi,
  (data) => data.showBarcodeScanner
);
