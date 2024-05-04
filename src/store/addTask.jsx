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
    deleteData: (state, action) => {
      return state.map((card) => {
        if (card.Data.some((item) => item.Title === action.payload)) {
          return {
            ...card,
            Data: card.Data.filter((item) => item.Title !== action.payload),
          };
        }
        return card;
      });
    },
    editData: (state, action) => {
      const {
        Title: dataTitle,
        Priority: newPriority,
        Status: newStatus,
      } = action.payload;

      // Find the main card where the data item is currently located
      const currentMainCardIndex = state.findIndex((card) =>
        card.Data.some((item) => item.Title === dataTitle)
      );

      if (currentMainCardIndex !== -1) {
        const currentMainCard = state[currentMainCardIndex];

        // If the new status is different from the current main card's status
        if (currentMainCard.Title !== newStatus) {
          // Find the index of the new parent main card based on the new status
          const newMainCardIndex = state.findIndex(
            (card) => card.Title === newStatus
          );

          if (newMainCardIndex !== -1) {
            // Update the current main card without the moved data item
            const updatedCurrentMainCard = {
              ...currentMainCard,
              Data: currentMainCard.Data.filter(
                (item) => item.Title !== dataTitle
              ),
            };

            // Update the new main card with the moved data item
            const newMainCard = {
              ...state[newMainCardIndex],
              Data: [
                ...state[newMainCardIndex].Data,
                currentMainCard.Data.find((item) => item.Title === dataTitle),
              ],
            };

            // Update the state with the modified current main card and new main card
            return [
              ...state.slice(0, currentMainCardIndex),
              updatedCurrentMainCard,
              ...state.slice(currentMainCardIndex + 1, newMainCardIndex),
              newMainCard,
              ...state.slice(newMainCardIndex + 1),
            ];
          }
        } else if (currentMainCard.Title === newStatus) {
          // If the status remains the same, update the priority within the same main card
          // If the status remains the same, update the priority within the same main card
          return state.map((card) => {
            if (card.Title === currentMainCard.Title) {
              return {
                ...card,
                Data: card.Data.map((item) => {
                  if (item.Title === dataTitle) {
                    return {
                      ...item,
                      Priority: newPriority,
                    };
                  }
                  return item;
                }),
              };
            }
            return card;
          });
        }
      }

      return state;
    },
  },
});

export const { addData, deleteData, editData } = addCardDataSlice.actions;
export default addCardDataSlice.reducer;
