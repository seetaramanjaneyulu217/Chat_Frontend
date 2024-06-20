import { configureStore } from "@reduxjs/toolkit";
import chatReducer from './slices/chatData'

export const store = configureStore({
    reducer: {
         chat: chatReducer
    }
})