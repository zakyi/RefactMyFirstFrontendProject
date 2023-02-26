import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalVisible: false,
    modalImageId: "",
    modalImagePath: "",
    modalImageHeight: "",
    modalImageWidth: "",
    modalImageLikeCount: 0,
  },
  reducers: {
    setModalVisible(state, action) {
      state.modalVisible = action.payload;
    },
    setModalContent(state, action) {
      state.modalImageId = action.payload.imageId;
      state.modalImagePath = action.payload.imagePath;
      state.modalImageHeight = action.payload.imageHeight;
      state.modalImageWidth = action.payload.imageWidth;
      state.modalImageLikeCount = action.payload.imageLikecount;
    },
    getModalContent(state) {
      return state;
    },
  },
});

export const { setModalVisible, setModalContent, getModalContent } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;
