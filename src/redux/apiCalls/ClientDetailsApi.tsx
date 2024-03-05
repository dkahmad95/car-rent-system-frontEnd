import { Dispatch } from "redux";

import { userRequest } from "../../lib/requestMethods";
import {
  getClientDetailsFailure,
  getClientDetailsStart,
  getClientDetailsSuccess,
} from "../clientDetailsRedux";

import {
  addClientFailure,
  addClientStart,
  addClientSuccess,
} from "../addClientRedux";

export const getClientDetails = async (
  dispatch: Dispatch,
  clientId: string
): Promise<any> => {
  dispatch(getClientDetailsStart());
  try {
    const res = await userRequest.get(`/clientDetails/${clientId}`);
    dispatch(getClientDetailsSuccess(res.data));
  } catch (err) {
    dispatch(getClientDetailsFailure());
    console.error("Req failed:", err);
  }
};

export const addClient = async (
  dispatch: Dispatch,
  clientData: any
): Promise<any> => {
  dispatch(addClientStart());
  try {
    const res = await userRequest.post("/addClients", clientData);
    dispatch(addClientSuccess(res.data));
  } catch (err) {
    dispatch(addClientFailure());
    console.error("Req failed:", err);
  }
};
