import { Dispatch } from "redux";

import { getHomeFailure, getHomeStart, getHomeSuccess } from "../homeRedux";
import { userRequest } from "../../lib/requestMethods";

export const getHome = async (dispatch: Dispatch): Promise<any> => {
  dispatch(getHomeStart());
  try {
    const res = await userRequest.get("/");
    dispatch(getHomeSuccess(res.data));
  } catch (err) {
    dispatch(getHomeFailure());
    console.error("Req failed:", err);
  }
};
