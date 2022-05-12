import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface GlobalState {
  isLoginVisible: boolean;
  isNavbarVisible: boolean;
}

const initialState: GlobalState = {
  isLoginVisible: false,
  isNavbarVisible: false,
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsLoginVisible(state, action: PayloadAction<boolean>) {
      state.isLoginVisible = action.payload;
    },
    setIsNavbarVisible(state, action: PayloadAction<boolean>) {
      state.isNavbarVisible = action.payload;
    }
  }
})

export const {
  setIsLoginVisible,
  setIsNavbarVisible
} = globalSlice.actions;