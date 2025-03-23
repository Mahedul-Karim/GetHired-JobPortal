import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
  signUpData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSignUpData(state, value) {
      state.signUpData = value.payload;
    },
    setUser(state, value) {
      state.user = value.payload.user;
      localStorage.setItem("getHiredUser", JSON.stringify(value.payload.user));

      if (value.payload.token) {
        state.token = value.payload.token;
        localStorage.setItem("token", JSON.stringify(value.payload.token));
      }
    },
    setInitialAuth(state, value) {
      state.user = value.payload.user;
      state.token = value.payload.token;
    },
    setLogout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("getHiredUser");
      localStorage.removeItem("token");
    },
  },
});

export const { setSignUpData, setUser, setInitialAuth, setLogout } =
  userSlice.actions;
export default userSlice.reducer;
