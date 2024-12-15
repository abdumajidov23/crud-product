import { createSlice } from "@reduxjs/toolkit";

const reloadSlice = createSlice({
  name: "reload",
  initialState: {
    productReload: false,
    categoryReload: false,
    orederReload: false,
  },
  reducers: {
    changrProductReload(state) {
      state.productReload = !state.productReload;
    },
  },
});

export const { changrProductReload } = reloadSlice.actions; // setState
export default reloadSlice.reducer; // state
