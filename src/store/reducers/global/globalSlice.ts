import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface GlobalState {
  isLoginVisible: boolean;
}

const initialState: GlobalState = {
  isLoginVisible: false,
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsLoginVisible(state, action: PayloadAction<boolean>) {
      state.isLoginVisible = action.payload;
    }
  }
})

export const {
  setIsLoginVisible
} = globalSlice.actions;