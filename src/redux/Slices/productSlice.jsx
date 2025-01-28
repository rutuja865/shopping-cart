import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Base URL for the API
const BASE_URL = "https://fakestoreapi.com/products";

// Async thunk to fetch product details
export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "productsdata",
  initialState: {
    products: {}, // Cache products by ID
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products[action.payload.id] = action.payload; // Cache the product by its ID
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.loading = false;
      });
  },
});

// Selector to safely access products by ID
export const selectProductById = (state, id) =>
  state.productsdata.products[id] || null;

export default productSlice.reducer;
