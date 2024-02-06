import { createAsyncThunk } from "@reduxjs/toolkit";

const BaseUrl = import.meta.env.PUBLIC_URL_SERVICES;
//get all cards
export const fetchCards = createAsyncThunk("fetchCards", async () => {
  const data = await fetch(`${BaseUrl}data`);
  return data.json();
});
//get single info of card it use when user directly want go to specific card
export const fetchSingleCard = createAsyncThunk(
  "fetchSingleCard",
  async (cardId) => {
    const data = await fetch(`${BaseUrl}data/${cardId}`);
    return data.json();
  }
);
//action to remove card from db
export const deleteCard = createAsyncThunk("deleteCard", async (cardId) => {
  await fetch(`${BaseUrl}data/${cardId}`, {
    method: "DELETE",
  });
  return { cardId };
});
