import { createSlice } from "@reduxjs/toolkit";
import {
  deleteCard,
  fetchCards,
  fetchSingleCard,
} from "../../data-services/data";
// I preffer to combine all state it's small app so in large app better to seprate this file
const combinedSlice = createSlice({
  name: "combined",
  initialState: {
    isLoading: false,
    data: null,
    message: null,
    isError: false,
    deleting: false,
    deletingErr: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.deleting = false;
        state.deletingErr = false;
        state.message = "successful";
        state.data = state.data.filter(
          (item) => item.id !== action.payload.cardId
        );
      })
      .addCase(deleteCard.rejected, (state) => {
        state.deleting = false;
        state.deletingErr = true;
      })
      .addCase(deleteCard.pending, (state) => {
        state.deleting = true;
        state.deletingErr = false;
      })
      .addCase(fetchSingleCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(fetchSingleCard.rejected, (state) => {
        state.isLoading = false;
        state.deleting = false;
        state.isError = true;
      })
      .addCase(fetchCards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(fetchCards.rejected, (state) => {
        state.isLoading = false;
        state.deleting = false;
        state.isError = true;
      });
  },
});

export const combinedReducer = combinedSlice.reducer;
export default combinedSlice;
