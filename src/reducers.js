import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsState: [],
    productsAPI: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.productsState = [...state.productsState, action.payload];
    },
    fetchProducts: (state, action) => {
      state.productsAPI = action.payload;
    },
  },
});

export const { addProduct, fetchProducts } = productsSlice.actions;

export default productsSlice.reducer;
