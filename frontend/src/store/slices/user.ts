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
      state.token = value.payload.token;
      localStorage.setItem("token", JSON.stringify(value.payload.token));
      localStorage.setItem("getHiredUser", JSON.stringify(value.payload.user));
    },
    setInitialAuth(state,value){
      state.user = value.payload.user;
      state.token = value.payload.token;
    }
  },
});

export const { setSignUpData, setUser,setInitialAuth } = userSlice.actions;
export default userSlice.reducer;
