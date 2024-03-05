import { createSlice } from "@reduxjs/toolkit";

export interface Sponsors {
    id: number;
    user_id: number;
    name: string;
    number: number;
    client_id: number;
    car_id: number | null;
    created_at: string;
    updated_at: string;
  }
  
const sponsorsSlice = createSlice({
  name: "sponsors",
  initialState: {
    sponsors: {} as Sponsors,
    isFetching: false,
    error: false,
  },
  reducers: {
    // Get sponsors
    getSponsorsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getSponsorsSuccess: (state, action) => {
      state.isFetching = false;
      state.sponsors= action.payload;
    },
    getSponsorsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getSponsorsClean: (state) => {
      
      state.sponsors = {} as Sponsors
    },
  
   
   
  },
});

export const {getSponsorsClean ,getSponsorsFailure , getSponsorsSuccess,getSponsorsStart  } = sponsorsSlice.actions;
export default sponsorsSlice.reducer;