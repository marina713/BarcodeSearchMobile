import * as actions from "../actions";
import * as searchActions from "../../search/actions";
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
  it("returns state for `submitSearch` action", () => {
    const result = reducer(
      initialState,
      searchActions.submitSearch("987654321")
    );
    expect(result.errorMsg).toStrictEqual("");
  });

  it("returns state for `setCurrentItem` action", () => {
    const result = reducer(
      initialState,
      searchActions.setCurrentItem(productMock)
    );
    expect(result.errorMsg).toStrictEqual("");
  });

  it("returns state for `addToHistory` action", () => {
    const result = reducer(
      initialState,
      searchActions.addToHistory(productMock)
    );
    expect(result.errorMsg).toStrictEqual("");
  });

  it("does not add product if it is already in the historicalData", () => {
    const result = reducer(
      initialState,
      searchActions.addToHistory(productMock)
    );
    expect(result.errorMsg).toStrictEqual("");
  });

  it("returns state for `setError` action", () => {
    const result = reducer(initialState, actions.setError("Network error"));
    expect(result.errorMsg).toStrictEqual("Network error");
  });
});
