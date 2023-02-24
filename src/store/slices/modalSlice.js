import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalVisible: false,
    modalImageId: "",
    modalImagePath: "",
    modalImageHeight: "",
    modalImageWidth: "",
  },
  reducers: {
    setModalVisible(state, action) {
      state.modalVisible = action.payload;
    },
    setModalContent(state, action) {
      console.log(action.payload);
      state.modalImageId = action.payload.imageId;
      state.modalImagePath = action.payload.imagePath;
      state.modalImageHeight = action.payload.imageHeight;
      state.modalImageWidth = action.payload.imageWidth;
    },
    getModalContent(state) {
      return state;
    },
  },
});

export const { setModalVisible, setModalContent, getModalContent } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;
