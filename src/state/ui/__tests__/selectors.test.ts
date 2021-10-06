import { getErrorMsg } from "../selectors";

const mockParameters = {
  ui: {
    errorMsg: "",
  },
};

describe("Ui Selectors", () => {
  it("should return correct value of getErrorMsg", () => {
    const selected = getErrorMsg.resultFunc(mockParameters.ui);
    expect(selected).toEqual("");
  });
});
