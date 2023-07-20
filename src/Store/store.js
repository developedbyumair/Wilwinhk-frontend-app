import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/cartSlice";
import userReducer from "./Features/userSlice";
import AllProductsReducer from "./Features/CategoriesProducts";
import rfqProductsReducer from "./Features/RFQSlice";
import favProductsReducer from "./Features/favSlice";
import compareReducer from "./Features/compareSlice";
import loaderReducer from "./Features/loaderSlice";
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

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedCart = persistReducer(persistConfig, cartReducer);
const persistedUser = persistReducer(persistConfig, userReducer);
const persistedAllProduct = persistReducer(persistConfig, AllProductsReducer);
const persistedrfqProducts = persistReducer(persistConfig, rfqProductsReducer);
const persistedfavProducts = persistReducer(persistConfig, favProductsReducer);
const compareProducts = persistReducer(persistConfig, compareReducer);
const loaderProducts = persistReducer(persistConfig, loaderReducer);
export const store = configureStore({
  reducer: {
    cart: persistedCart,
    user: persistedUser,
    products: persistedAllProduct,
    rfq: persistedrfqProducts,
    fav: persistedfavProducts,
    compare: compareProducts,
    loader: loaderProducts,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);