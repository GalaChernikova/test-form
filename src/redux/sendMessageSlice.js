import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

 
let hours = new Date().getHours()
let min = new Date().getMinutes()
let time = hours + ':' + min
console.log(time)

export const sendMessageSlice = createSlice({
  name: "send",
  initialState: [
    {
      id: uuidv4(),
      messageUserName: "User2",
      messageText: "Привет",
      messageTime: "13:31",
    },
    

  ],
  reducers: {
    addMessage: (state, action) => {
        const send = {
            id: uuidv4(),
            messageUserName: "User2",
            messageText: action.payload.messageText,
            messageTime: time,
        };
        state.push(send);
    },


    deleteMessage: (state, action) => {
      return state.filter((send) => send.id !== action.payload.id);
    },
  },
});

export const { addMessage, deleteMessage } = sendMessageSlice.actions;

export default sendMessageSlice.reducer;
