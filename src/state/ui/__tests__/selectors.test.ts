import { getErrorMsg, getShowBarcodeScanner } from "../selectors";

const mockParameters = {
  ui: {
    errorMsg: "",
    showBarcodeScanner: false,
  },
};

describe("Ui Selectors", () => {
  it("should return correct value of getErrorMsg", () => {
    const selected = getErrorMsg.resultFunc(mockParameters.ui);
    expect(selected).toEqual("");
  });

  it("should return correct value of getBarcode", () => {
    const selected = getShowBarcodeScanner.resultFunc(mockParameters.ui);
    expect(selected).toEqual(false);
  });
});
