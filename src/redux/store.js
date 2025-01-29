import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./Slices/cartSlice";
import productSlice from "./Slices/productSlice";
import categorySlice from "./Slices/categorySlice";


export const store=configureStore({
    reducer:{
        cart:cartSlice.reducer,
        productsdata: productSlice,
        category: categorySlice,
    }
})