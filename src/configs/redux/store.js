import { configureStore } from "@reduxjs/toolkit";
import sneakerReducer from "../redux/reducers/sneakerSlice";
import lastWornReducer from "./reducers/lastWornSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['lastWorn']
};

const reducer = combineReducers({
  sneaker: sneakerReducer,
  lastWorn: lastWornReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST']
    },
  }),
});

export const persistor = persistStore(store);
