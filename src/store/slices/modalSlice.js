import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalVisible: false,
  },
  reducers: {
    setModalVisible(state, action) {
      state.modalVisible = action.payload;
    },
  },
});

export const { setModalVisible } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
