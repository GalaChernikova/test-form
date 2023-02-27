import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const inboxSlice = createSlice({
  name: "inbox",
  initialState: [
    {
      id: uuidv4(),
      inboxUserName: "User1",
      inboxMessageText: "Привет",
      inboxTime: "13:30",
    },

  ],
  reducers: {
    deleteInbox: (state, action) => {
      return state.filter((inbox) => inbox.id !== action.payload.id);
    },
  },
});

export const { deleteInbox } = inboxSlice.actions;

export default inboxSlice.reducer;
