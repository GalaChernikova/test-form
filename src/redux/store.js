import { configureStore } from '@reduxjs/toolkit'
import inboxReducer from './inboxSlice'
import sendMessageReducer from './sendMessageSlice'

export default configureStore({
  reducer: {
    inboxMessages: inboxReducer,
    sendMessages: sendMessageReducer,
  }
})