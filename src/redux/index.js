import { configureStore } from "@reduxjs/toolkit";
import token from "./slices/token-slice";
import reload from "./slices/reload-slice";

const store = configureStore({
  reducer: {
    token,
    reload,
  },
});

export default store;
