import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rfqProducts: [],
  rfqProductsID: [],
};

export const rfqProductsSlice = createSlice({
  name: "rfq",
  initialState,
  reducers: {
    addRFQ: (state, action) => {
      state.rfqProducts.push(action.payload);
      state.rfqProductsID.push(action.payload._id);
    },
    removeRFQ: (state, action) => {
      state.rfqProducts = state.rfqProducts.filter(
        (item) => item._id !== action.payload.id
      );
      state.rfqProductsID = state.rfqProductsID.filter(
        (item) => item !== action.payload.id
      );
    },
    removeRFQLogOut: (state, action) => {
      state.rfqProducts = [];
      state.rfqProductsID = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRFQ, removeRFQLogOut, removeRFQ } = rfqProductsSlice.actions;

export default rfqProductsSlice.reducer;
