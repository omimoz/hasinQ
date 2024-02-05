import { configureStore } from "@reduxjs/toolkit";
import { combinedReducer } from "../slicer/combinedReducer";

const store = configureStore({
  reducer: {
    combined: combinedReducer,
  },
});

export default store;
