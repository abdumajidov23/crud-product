import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: localStorage.getItem("auth-token") || null,
  },
  reducers: {
    signIn(state, action) {
      state.value = action.payload;
      localStorage.setItem("auth-token", state.value);
    },
    signOut(state) {
      state.value = null;
      localStorage.removeItem("auth-token");
    },
  },
});

export const { signIn, signOut } = tokenSlice.actions; // setState
export default tokenSlice.reducer; // state
