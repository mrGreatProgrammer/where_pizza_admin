import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { logInApi, registerApi } from "../../http/user/auth";
import { IUserInfo } from "../../types/app";
// import { RootState } from "../store";
// import type { RootState } from "../../app/store";

// Define a type for the slice state
interface AppState {
  value: number;
  burgerOpened: boolean;
  authorized: boolean;
  userInfo: null | IUserInfo; // передаю интерфейс пользователя
  token: null | string;

  authLoading: boolean;
  authErr: string;
}

// Define the initial state using that type
const initialState: AppState = {
  value: 0,
  burgerOpened: false,
  authorized: false,
  userInfo: null,

  token: null,
  authErr: "",
  authLoading: false,
};

export const appSlice = createSlice({
  name: "app",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleBurgerMenuAC(state, action: PayloadAction<boolean>) {
      state.burgerOpened = action.payload;
    },
    logoutAC(state) {
      state.authorized = false;
      state.token = "";
      state.userInfo = null;
    },
  },
  extraReducers: {
    [registerApi.pending.type]: (state, action) => {
      state.authLoading = true;
      state.authErr = "";
      state.token = null;
      state.userInfo = null;
    },
    [registerApi.rejected.type]: (state, action) => {
      state.authLoading = false;
      state.authErr = action.payload;
      state.token = null;
      state.userInfo = null;
    },
    [registerApi.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.authLoading = false;
      state.authErr = "";
      state.token = action.payload.token;
      state.userInfo = action.payload.user;
    },
    [logInApi.pending.type]: (state, action) => {
      state.authLoading = true;
      state.authErr = "";
      state.token = null;
      state.userInfo = null;
    },
    [logInApi.rejected.type]: (state, action) => {
      state.authLoading = false;
      state.authErr = action.payload;
      state.token = null;
      state.userInfo = null;
    },
    [logInApi.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.authLoading = false;
      state.authErr = "";
      state.token = action.payload.token;
      state.userInfo = action.payload.user;
    },
  },
});

export const { toggleBurgerMenuAC, logoutAC } = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default appSlice.reducer;
