import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthanticated: true,
  token: true,
};

const authSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loginUser(state) {
      state.isAuthanticated = !state.isAuthanticated;
    },
    logoutUser() {},
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
