import { SET_ERROR } from "./constants";

export const setError = (value: string) => {
  return {
    type: SET_ERROR,
    payload: { value },
  };
};
