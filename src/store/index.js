import { setCurrentPath, pageReducer } from "./slices/pageSlice";
import { configureStore } from "@reduxjs/toolkit";
import { imagesApi } from "./apis/imagesApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { searchReducer } from "./slices/searchSlice";
import { setSearchTerm } from "./slices/searchSlice";
import { useFetchImagesQuery } from "./apis/imagesApi";
import { usersReducer, setIsLoggedIn, setUserName } from "./slices/usersSlice";
import { userApi } from "./apis/userApi";

const store = configureStore({
  reducer: {
    page: pageReducer,
    search: searchReducer,
    users: usersReducer,
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

export { store, setCurrentPath, setSearchTerm, setIsLoggedIn, setUserName };
export { useFetchImagesQuery };
