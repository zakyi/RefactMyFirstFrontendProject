import { setCurrentPath, pageReducer } from "./slices/pageSlice";
import { configureStore } from "@reduxjs/toolkit";
import { imagesApi } from "./apis/imagesApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  searchReducer,
  setSearchTerm,
  setSearchResult,
  setSearchTimeout,
  getSearchState,
} from "./slices/searchSlice";
import {
  setModalVisible,
  setModalContent,
  modalReducer,
} from "./slices/modalSlice";
import { useFetchImagesQuery } from "./apis/imagesApi";
import {
  userDataReducer,
  setIsLoggedIn,
  setUserData,
  getUserData,
} from "./slices/userDataSlice";
import { userApi } from "./apis/userApi";
import {
  useAddUserMutation,
  useFetchUserMutation,
  useVerifyUserMutation,
  useUserActionMutation,
} from "./apis/userApi";

const store = configureStore({
  reducer: {
    page: pageReducer,
    search: searchReducer,
    userData: userDataReducer,
    modal: modalReducer,
    [imagesApi.reducerPath]: imagesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(imagesApi.middleware)
      .concat(userApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  store,
  setCurrentPath,
  setSearchTerm,
  setIsLoggedIn,
  setUserData,
  getUserData,
  setModalVisible,
  setModalContent,
  setSearchResult,
  setSearchTimeout,
  getSearchState,
};
export {
  useFetchImagesQuery,
  useAddUserMutation,
  useFetchUserMutation,
  useVerifyUserMutation,
  useUserActionMutation,
};
