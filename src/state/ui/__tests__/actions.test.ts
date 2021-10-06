import configureStore from "redux-mock-store";

import * as actions from "../actions";

const mockStore = configureStore();
const store = mockStore();

const defaultParams = {
  error: undefined,
  meta: undefined,
  payload: undefined,
};

describe("Ui actions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe("setError", () => {
    test("dispatches the correct action and payload", () => {
      const expectedActions = [
        {
          ...defaultParams,
          type: "ui/SET_ERROR",
          payload: { value: "Network error" },
        },
      ];

      store.dispatch(actions.setError("Network error"));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
