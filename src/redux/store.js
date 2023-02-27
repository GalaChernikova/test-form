import { configureStore } from '@reduxjs/toolkit'
import inboxReducer from './inboxSlice'

export default configureStore({
  reducer: {
    inbox: inboxReducer,
  }
})