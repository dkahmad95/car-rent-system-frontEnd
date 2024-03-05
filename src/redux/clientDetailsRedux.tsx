import { createSlice } from "@reduxjs/toolkit";
export interface ClientDetails {
 
  id: number;
  name: string;
  phone: string;
  address: string;
  hasRented: boolean;
  sponsor_name: string | null;
  sponsor_number: string | null;
  front_id_image: string;
  back_id_image: string;
  current_rented_car_name: string | null;
  renting_start_date: string | null; 
  renting_end_date: string | null; 

}
const clientDetailsSlice = createSlice({
  name: "clientDetails",
  initialState: {
    clientDetails: {} as ClientDetails,
    isFetching: false,
    error: false,
  },
  reducers: {
    // Get clientDetails
    getClientDetailsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getClientDetailsSuccess: (state, action) => {
      state.isFetching = false;
      state.clientDetails= action.payload;
    },
    getClientDetailsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getClientDetailsClean: (state) => {
      
      state.clientDetails = {} as ClientDetails
    },
  
   
   
  },
});

export const {getClientDetailsClean ,getClientDetailsFailure , getClientDetailsSuccess,getClientDetailsStart  } = clientDetailsSlice.actions;
export default clientDetailsSlice.reducer;