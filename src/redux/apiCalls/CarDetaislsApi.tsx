import { Dispatch } from "redux";

import { userRequest } from "../../lib/requestMethods";
import {
  getCarDetailsFailure,
  getCarDetailsStart,
  getCarDetailsSuccess,
} from "../carDetailsRedux";

export const getCarDetails = async (
  dispatch: Dispatch,
  carId: string
): Promise<any> => {
  dispatch(getCarDetailsStart());
  try {
    const res = await userRequest.get(`/details/${carId}`);
    dispatch(getCarDetailsSuccess(res.data));
  } catch (err) {
    dispatch(getCarDetailsFailure());
    console.error("Req failed:", err);
  }
};
