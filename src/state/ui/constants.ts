export type StateProps = {
  errorMsg: string;
};

export const initialState: StateProps = {
  errorMsg: "",
};

export const SET_ERROR = "ui/SET_ERROR";
