import { createSlice } from "@reduxjs/toolkit";
interface Home {
  clientsCount: number;
  carsCount: number;
  expenses: number;
  income: number;
  clients: [];
};
const homeSlice = createSlice({
  name: "home",
  initialState: {
    home: {} as Home,
    isFetching: false,
    error: false,
  },
  reducers: {
    // Get home
    getHomeStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getHomeSuccess: (state, action) => {
      state.isFetching = false;
      state.home= action.payload;
    },
    getHomeFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getHomeClean: (state) => {
      
      state.home = {} as Home
    },
  
   
   
  },
});

export const {getHomeClean ,getHomeFailure , getHomeSuccess,getHomeStart  } = homeSlice.actions;
export default homeSlice.reducer;