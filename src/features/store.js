import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { contactApi } from "./api/contactApi";
import authSlice from "./services/authSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, contactApi.middleware),
});
