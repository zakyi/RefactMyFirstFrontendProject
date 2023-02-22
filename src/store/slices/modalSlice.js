import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalVisible: false,
    modalContent: null,
  },
  reducers: {
    setModalVisible(state, action) {
      state.modalVisible = action.payload;
    },
    setModalContent(state, action) {
      state.modalContent = action.payload;
    },
  },
});

export const { setModalVisible, setModalContent } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
