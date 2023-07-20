import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
const initialState = {
  products: [],
  productsID: [],
  priceTotal: 0,
  quantity: [],
};
 
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddtoCart: (state, action) => {
      state.products.push(action.payload.products);
      state.productsID.push(action.payload.productsID);
      state.quantity.push(action.payload.item);
    },
    UpdateCart: (state, action) => {
      let itemIndex = state.quantity.findIndex(
        (e) => e.id === action.payload.ID
      );
      state.priceTotal = itemIndex; 
      state.quantity[itemIndex].quantity = action.payload.quantity;
      state.quantity[itemIndex].price = action.payload.price;
    },
    RemovefromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item?._id !== action.payload.productsID
      );
      state.quantity = state.quantity.filter(
        (item) => item.id !== action.payload.productsID
      );
      state.productsID = state.productsID.filter(
        (item) => item !== action.payload.productsID
      );
    },
    DeleteCart: (state) => {
      state.products = [];
      state.productsID = [];
      state.priceTotal = 0;
      state.quantity = [];
    },
    extraReducers: (builder) => {
      builder.addCase(PURGE, (state) => {
        // customEntityAdapter.removeAll(state);
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddtoCart, RemovefromCart, UpdateCart, DeleteCart } = cartSlice.actions;

export default cartSlice.reducer;
