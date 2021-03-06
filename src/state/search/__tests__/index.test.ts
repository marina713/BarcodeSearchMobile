import * as actions from "../actions";
import reducer from "../";
import { initialState } from "../constants";

const productMock = {
  code: "123456",
  ingredients_text: "tomato",
  image_url: "some url",
  product_name: "Tomato Soup",
  brands: "Campbell's",
};

describe("Search #reducer", () => {
  it("returns state for `setCurrentItem` action", () => {
    const result = reducer(initialState, actions.setCurrentItem(productMock));
    expect(result.historicalData).toStrictEqual([]);
    expect(result.currentItem).toStrictEqual(productMock);
  });

  it("returns state for `addToHistory` action", () => {
    const result = reducer(initialState, actions.addToHistory(productMock));
    expect(result.historicalData).toStrictEqual([productMock]);
    expect(result.currentItem).toStrictEqual({});
  });

  it("does not add product if it is already in the historicalData", () => {
    const result = reducer(
      { ...initialState, historicalData: [productMock] },
      actions.addToHistory(productMock)
    );
    expect(result.historicalData).toStrictEqual([productMock]);
    expect(result.currentItem).toStrictEqual({});
  });
});
