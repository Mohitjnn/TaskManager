import { createSlice } from "@reduxjs/toolkit";
import { MainCardData } from "../data";

const pendingCard = MainCardData.find((item) => item.Title === "Pending");

export const addCardDataSlice = createSlice({
  name: "addCardData",
  initialState: {
    value: "",
  },
  reducers: {
    addData: (state, action) => {
      console.log("Reducer called"); // Add this line
      const newData = [...pendingCard.Data, action.payload];
      pendingCard.Data = newData;
      console.log(pendingCard.Data);
    },
  },
});

export const { addData } = addCardDataSlice.actions;
export default addCardDataSlice.reducer;
