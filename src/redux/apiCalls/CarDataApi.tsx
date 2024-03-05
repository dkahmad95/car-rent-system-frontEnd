import { Dispatch } from "redux";


import { userRequest } from "../../lib/requestMethods";
import { getCarDataFailure, getCarDataStart, getCarDataSuccess } from "../carDataRedux";


export const getCarData = async (dispatch: Dispatch ): Promise<any> => {
  dispatch(getCarDataStart());
  try {
    const res = await userRequest.get(`/showCars`);
    dispatch(getCarDataSuccess(res.data));
  } catch (err) {
    dispatch(getCarDataFailure());
    console.error("Req failed:", err);
  }
};


