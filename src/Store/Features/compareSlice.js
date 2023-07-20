import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  compare: [],
  compareID: [],
};

export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    AddtoCompare: (state, action) => {
      state.compare.push(action.payload.products); 
      state.compareID.push(action.payload.productsID);
      //   state.quantity.push(action.payload.item);
    },
    RemovefromCompare: (state, action) => {
      state.compare = state.compare.filter(
        (item) => item?._id !== action.payload.productsID
      );
      state.compareID = state.compareID.filter(
        (item) => item !== action.payload.productsID
      );
    },
    DeleteCompare: (state) => {
      state.compare = [];
      state.compareID = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddtoCompare, RemovefromCompare, UpdateCompare, DeleteCompare } =
  compareSlice.actions;

export default compareSlice.reducer;
