import { setCurrentPath, pageReducer } from "./slices/pageSlice";
import { configureStore } from "@reduxjs/toolkit";
import { imagesApi } from "./apis/imagesApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { searchReducer } from "./slices/searchSlice";
import { setSearchTerm } from "./slices/searchSlice";
import { useFetchImagesQuery } from "./apis/imagesApi";

const store = configureStore({
  reducer: {
    page: pageReducer,
    search: searchReducer,
    [imagesApi.reducerPath]: imagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(imagesApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store, setCurrentPath, setSearchTerm };
export { useFetchImagesQuery };
