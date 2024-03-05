import { createSlice } from "@reduxjs/toolkit";

export interface AccountingData {
  revenue: number;
  income: number;
  outcome: number;
  transactions: Transaction[];
}
export interface Transaction {
  id: number;
  trans_type: number;
  trans_amount: number;
  trans_desc: string;
}
const accountingSlice = createSlice({
  name: "accounting",
  initialState: {
    accounting: {} as AccountingData,
    isFetching: false,
    error: false,
  },
  reducers: {
    // Get accounting
    getAccountingStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAccountingSuccess: (state, action) => {
      state.isFetching = false;
      state.accounting = action.payload;
    },
    getAccountingFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getAccountingClean: (state) => {
      state.accounting = {} as AccountingData;
    },
  },
});

export const {
  getAccountingClean,
  getAccountingFailure,
  getAccountingSuccess,
  getAccountingStart,
} = accountingSlice.actions;
export default accountingSlice.reducer;
