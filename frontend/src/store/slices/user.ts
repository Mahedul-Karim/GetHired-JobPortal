import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token")!)
    : null,
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
      state.token = value.payload.token;
    },
  },
});

export const { setSignUpData, setUser } = userSlice.actions;
export default userSlice.reducer;
