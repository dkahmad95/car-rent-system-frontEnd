import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./userRedux";
import homeReducer from "./homeRedux";
import clientDetailsReducer from "./clientDetailsRedux";
import carDataReducer from "./carDataRedux";
import sponsorsReducer from "./sponsorsRedux";
import addClientReducer from "./addClientRedux";
import carDetailsReducer from "./carDetailsRedux";
import AccountingReducer from "./accountingRedux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  user: userReducer,
  home: homeReducer,
  clientDetails: clientDetailsReducer,
  carData: carDataReducer,
  sponsors: sponsorsReducer,
  addClient: addClientReducer,
  carDetails: carDetailsReducer,
  acoounting: AccountingReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
