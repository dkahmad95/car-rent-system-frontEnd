import { createSlice } from "@reduxjs/toolkit";
import { CreateClient } from "../ui/createClientPage/CreateClientForm";

const addClientSlice = createSlice({
  name: "addClient",
  initialState: {
    addClient: [] as CreateClient[],
    isFetching: false,
    error: false,
  },
  reducers: {
    //  addClient
    addClientStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addClientSuccess: (state, action) => {
      state.isFetching = false;
      state.addClient.push(action.payload);
    },
    addClientFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addClientClean: (state) => {
      
      state.addClient = [] as CreateClient[]
    },
  
   
   
  },
});

export const {addClientClean ,addClientFailure , addClientSuccess,addClientStart  } = addClientSlice.actions;
export default addClientSlice.reducer;