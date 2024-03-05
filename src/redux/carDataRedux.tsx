import { createSlice } from "@reduxjs/toolkit";
export interface CarData {
   
    id: number;
    name: string;
    licence_plate_number: string;
    model: string;
    isRented: number; 
    image: string;
    client_name: string | null;
    starting_date: string | null;
    ending_date: string | null;
   
}
const carDataSlice = createSlice({
  name: "carData",
  initialState: {
    carData: [] as CarData[],
    isFetching: false,
    error: false,
  },
  reducers: {
    // Get carData
    getCarDataStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCarDataSuccess: (state, action) => {
      state.isFetching = false;
      state.carData= action.payload;
    },
    getCarDataFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getCarDataClean: (state) => {
      
      state.carData = [] as CarData[]
    },
  
   
   
  },
});

export const {getCarDataClean ,getCarDataFailure , getCarDataSuccess,getCarDataStart  } = carDataSlice.actions;
export default carDataSlice.reducer;