import { setCurrentPath, pageReducer } from "./slices/pageSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    page: pageReducer,
  },
});

export { store, setCurrentPath };
