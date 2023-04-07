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
      const userData = action.payload;
      state.userName = userData.userName;
      state.email = userData.email;
      state.likes = [...userData.likes];
      state.collections = [...userData.collections];
      state.token = userData.token;
      window.localStorage.setItem("userData", JSON.stringify(userData));
    },
    getUserData(state) {
      return state;
    },
    setLikesOrCollections(state, action) {
      const { type, imageId } = action.payload;
      if (type === "likes") {
        const likes = state.likes;
        likes.push(imageId);
        state.likes = likes;
        const data = JSON.parse(window.localStorage.getItem("userData"));
        data.likes = likes;
        window.localStorage.setItem("userData", JSON.stringify(data));
      }
      if (type === "collections") {
        const collections = state.collections;
        collections.push(imageId);
        state.collections = collections;
        const data = JSON.parse(window.localStorage.getItem("userData"));
        data.collections = collections;
        window.localStorage.setItem("userData", JSON.stringify(data));
      }
    },
  },
});

export const {
  setIsLoggedIn,
  setUserData,
  getUserData,
  setLikesOrCollections,
} = userDataSlice.actions;
export const userDataReducer = userDataSlice.reducer;
