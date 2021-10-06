import { getBarcode, getHistoricalData, getCurrentItem } from "../selectors";

const mockParameters = {
  search: {
    barcode: "",
    historicalData: [],
    currentItem: {},
  },
};

describe("Search Selectors", () => {
  it("should return correct value of getBarcode", () => {
    const selected = getBarcode.resultFunc(mockParameters.search);
    expect(selected).toEqual("");
  });

  it("should return correct value of getHistoricalData", () => {
    const selected = getHistoricalData.resultFunc(mockParameters.search);
    expect(selected).toEqual([]);
  });

  it("should return correct value of getCurrentItem", () => {
    const selected = getCurrentItem.resultFunc(mockParameters.search);
    expect(selected).toEqual({});
  });
});
