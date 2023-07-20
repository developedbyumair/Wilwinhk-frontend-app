import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsFav: [],
  productsIDFav: [],
};

export const favSlice = createSlice({
  name: "fav", 
  initialState,
  reducers: {
    AddtoFav: (state, action) => {
      state.productsFav.push(action.payload.products);
      state.productsIDFav.push(action.payload.productsID);
    //   state.quantity.push(action.payload.item);
    },
    RemovefromFav: (state, action) => {
      state.productsFav = state.productsFav.filter(
        (item) => item?._id !== action.payload.productsID
      );
      state.productsIDFav = state.productsIDFav.filter(
        (item) => item !== action.payload.productsID
      );
    },
    DeleteFav: (state) => {
      state.productsFav = [];
      state.productsIDFav = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddtoFav, RemovefromFav, UpdateFav, DeleteFav } = favSlice.actions;

export default favSlice.reducer;
