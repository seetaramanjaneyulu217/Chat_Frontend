import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    userId: string;
}

const initialState: InitialState = {
  userId: ""
};

const chatData = createSlice({
  name: "chat",
  initialState,
  reducers: {
    passUserIdToStore: (state, action) => {
        state.userId = action.payload.userId
    }
  }
});


export const { passUserIdToStore } = chatData.actions
export default chatData.reducer;