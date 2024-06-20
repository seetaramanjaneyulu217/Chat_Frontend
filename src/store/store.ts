import { configureStore } from "@reduxjs/toolkit";
import chatReducer from './slices/chatData'
import contactsReducer from './slices/contacts'

export const store = configureStore({
    reducer: {
         chat: chatReducer,
         contacts: contactsReducer
    }
})