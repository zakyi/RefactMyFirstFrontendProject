import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    isLoggedIn: false,
    userName: "",
    email: "",
    likes: [],
    collections: [],
    token: "",
  },
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setUserData(state, action) {
      const userData = action.payload.user;
      state.userName = userData.userName;
      state.email = userData.email;
      state.likes = userData.likes;
      state.collections = userData.collections;
      state.token = userData.token;
    },
    getUserData(state) {
      return state;
    },
  },
});

export const { setIsLoggedIn, setUserData, getUserData } =
  userDataSlice.actions;
export const userDataReducer = userDataSlice.reducer;
