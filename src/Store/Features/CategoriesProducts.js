import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProductsArray: [],
};

export const categoriesProductsSlice = createSlice({
  name: "categoriesProducts",
  initialState,
  reducers: {
    fetchAllCategories: (state, action) => {
      // console.log(action.payload,"action payload");
      state.allProductsArray.push(action.payload);
    },
    fetchAllCategoriesLogOut: (state, action) => {
      // console.log(action.payload,"action payload");
      state.allProductsArray = [];
    }
  },
});

// Action creators are generated for each case reducer function
export const {fetchAllCategoriesLogOut, fetchAllCategories } = categoriesProductsSlice.actions;

export default categoriesProductsSlice.reducer;
