import { Dispatch } from "redux";


import { userRequest } from "../../lib/requestMethods";
import { getSponsorsFailure, getSponsorsStart, getSponsorsSuccess } from "../sponsorsRedux";

export const getSponsors = async (dispatch: Dispatch): Promise<any> => {
  dispatch(getSponsorsStart());
  try {
    const res = await userRequest.get(`/getSponsors`);
    dispatch(getSponsorsSuccess(res.data));
  } catch (err) {
    dispatch(getSponsorsFailure());
    console.error("Req failed:", err);
  }
};
