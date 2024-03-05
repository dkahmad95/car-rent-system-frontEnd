import { Dispatch } from "redux";

import { userRequest } from "../../lib/requestMethods";
import { loginFailure, loginStart, loginSuccess } from "../userRedux";

interface User {
  username: string;
  password: string;
}

export const login = async (dispatch: Dispatch, user: User): Promise<void> => {
  dispatch(loginStart());
  try {
    const res = await userRequest.post("/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
    console.error("Login failed:", err);
  }
};
