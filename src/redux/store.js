import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./Slices/cartSlice";
import productSlice from "./Slices/productSlice";


export const store=configureStore({
    reducer:{
        cart:cartSlice.reducer,
        productsdata: productSlice,
    }
})