import { configureStore } from "@reduxjs/toolkit";
import { articlesApi } from "../api/api";

// const loggerMiddleware = (store) => (next) => (action) => {
//   const result = next(action);
//   console.log("Middleware", store.getState());
//   return result;
// };

const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesApi.middleware),
});

export default store;
