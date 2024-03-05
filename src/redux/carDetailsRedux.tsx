import { createSlice } from "@reduxjs/toolkit";

const carDetailsSlice = createSlice({
  name: "carDetails",
  initialState: {
    carDetails: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // Get carDetails
    getCarDetailsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCarDetailsSuccess: (state, action) => {
      state.isFetching = false;
      state.carDetails = action.payload;
    },
    getCarDetailsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getCarDetailsClean: (state) => {
      state.carDetails = [];
    },
  },
});

export const {
  getCarDetailsClean,
  getCarDetailsFailure,
  getCarDetailsSuccess,
  getCarDetailsStart,
} = carDetailsSlice.actions;
export default carDetailsSlice.reducer;
