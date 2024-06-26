import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/authSlice/auth.slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
