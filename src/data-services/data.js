import { createAsyncThunk } from "@reduxjs/toolkit";

const BaseUrl = import.meta.env.PUBLIC_URL_SERVICES;

export const fetchCards = createAsyncThunk("fetchCards", async () => {
  const data = await fetch(`${BaseUrl}data`);
  return data.json();
});
export const fetchSingleCard = createAsyncThunk(
  "fetchSingleCard",
  async (cardId) => {
    const data = await fetch(`${BaseUrl}data/${cardId}`);
    return data.json();
  }
);
export const deleteCard = createAsyncThunk("deleteCard", async (cardId) => {
  await fetch(`${BaseUrl}data/${cardId}`, {
    method: "DELETE",
  });
  return { cardId };
});
