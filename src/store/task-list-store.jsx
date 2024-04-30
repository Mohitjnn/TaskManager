// import { createContext, useReducer, useState } from "react";

// const initialState = {
//   taskCards: [], // Array to hold task cards
// };

// // Create context
// const TaskCardContext = createContext();

// const taskCardReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TASK_CARD":
//       return {
//         ...state,
//         taskCards: [...state.taskCards, action.payload],
//       };
//     case "DELETE_TASK_CARD":
//       return {
//         ...state,
//         taskCards: state.taskCards.filter(
//           (taskCard) => taskCard.id !== action.payload
//         ),
//       };
//     // You can add more cases for additional actions like editing task cards
//     default:
//       return state;
//   }
// };

// // Define custom hook to access TaskCardContext
// export const useTaskCardContext = () => useContext(TaskCardContext);

// // Define TaskCardProvider component to wrap around your application
// export const TaskCardProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(taskCardReducer, initialState);

//   return (
//     <TaskCardContext.Provider value={{ state, dispatch }}>
//       {children}
//     </TaskCardContext.Provider>
//   );
// };

import { configureStore } from "@reduxjs/toolkit";
import addCardDataReducer from "./addTask";

export const taskStore = configureStore({
  reducer: {
    addCardData: addCardDataReducer,
  },
});
