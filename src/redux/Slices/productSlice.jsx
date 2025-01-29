import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Base URL for the API
const BASE_URL = "https://fakestoreapi.com/products";

// Async thunk to fetch all products
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  }
);

// Async thunk to fetch a single product by ID
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
    allProducts: [], // Store all products
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetching all products
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload; // Store all products
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.loading = false;
      })
      
      // Handle fetching a single product by ID
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

// Selector to get all products
export const selectAllProducts = (state) => state.productsdata.allProducts;

// Selector to get a specific product by ID
export const selectProductById = (state, id) =>
  state.productsdata.products[id] || null;

export default productSlice.reducer;
