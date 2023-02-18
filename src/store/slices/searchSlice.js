import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    searchResult: {},
    searchTrigger: false,
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.searchTrigger = true;
    },
    setSerchResult(state, action) {
      state.searchResult = action.payload;
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
