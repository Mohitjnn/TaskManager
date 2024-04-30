import { createSlice } from "@reduxjs/toolkit";
import { MainCardData } from "../data";

const initialState = MainCardData;
export const addCardDataSlice = createSlice({
  name: "addCardData",
  initialState,
  reducers: {
    addData: (state, action) => {
      const pendingCard = state.find((item) => item.Title === "Pending");
      pendingCard.Data.push(action.payload);
    },
  },
});

export const { addData } = addCardDataSlice.actions;
export default addCardDataSlice.reducer;
