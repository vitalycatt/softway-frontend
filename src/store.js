import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
