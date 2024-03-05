import { Dispatch } from "redux";

import { userRequest } from "../../lib/requestMethods";
import { getAccountingFailure, getAccountingStart, getAccountingSuccess } from "../accountingRedux";

export const getAccounting = async (dispatch: Dispatch): Promise<any> => {
  dispatch(getAccountingStart());
  try {
    const res = await userRequest.get(`/expenses`);
    dispatch(getAccountingSuccess(res.data));
  } catch (err) {
    dispatch(getAccountingFailure());
    console.error("Req failed:", err);
  }
};
