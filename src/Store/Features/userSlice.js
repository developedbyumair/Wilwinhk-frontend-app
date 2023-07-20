import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser:null,
  userToken:null,
  isFetching:false,
  isError:false, 
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginStart: (state) => {
      state.isFetching = true;
      state.isError = false;
    },
    loginAccessToken: (state,action) => {
      state.userToken = action.payload.authtoken;
    },
    loginEnd: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
    loginOut: (state) => {
      state.isFetching = false;
      state.currentUser = null;
      state.userToken = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginAccessToken, loginSuccess, loginStart, loginEnd, loginOut } =
  userSlice.actions;

export default userSlice.reducer;
