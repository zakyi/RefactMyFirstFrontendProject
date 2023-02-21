import { setCurrentPath, pageReducer } from "./slices/pageSlice";
import { configureStore } from "@reduxjs/toolkit";
import { imagesApi } from "./apis/imagesApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { searchReducer } from "./slices/searchSlice";
import { setSearchTerm } from "./slices/searchSlice";
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
} from "./apis/userApi";

const store = configureStore({
  reducer: {
    page: pageReducer,
    search: searchReducer,
    userData: userDataReducer,
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
};
export {
  useFetchImagesQuery,
  useAddUserMutation,
  useFetchUserMutation,
  useVerifyUserMutation,
};
