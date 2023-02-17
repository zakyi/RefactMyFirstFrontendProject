import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    currentPath: window.location.pathname,
  },
  reducers: {
    setCurrentPath(state, action) {
      state.currentPath = action.payload;
    },
  },
});

export const { setCurrentPath } = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
