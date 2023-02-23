import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    searchResult: {},
    searchTrigger: false,
    searchTimeout: 0,
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.searchTrigger = true;
    },
    setSearchResult(state, action) {
      state.searchResult = action.payload;
    },
    setSearchTimeout(state, action) {
      state.searchTimeout = action.payload;
    },
    getSearchState(state) {
      return state;
    },
  },
});

export const {
  setSearchTerm,
  setSearchResult,
  setSearchTimeout,
  getSearchState,
} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
