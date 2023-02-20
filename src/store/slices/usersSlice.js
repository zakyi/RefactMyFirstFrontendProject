import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedIn: false,
    userName: "",
    likes: [],
    collections: [],
  },
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setUserName(state, action) {
      state.userName = action.payload;
    },
  },
});

export const { setIsLoggedIn, setUserName } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
