import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch products by category
export const fetchCategoryProducts = createAsyncThunk(
  "category/fetchCategoryProducts",
  async (category) => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return response.data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    products: [],
    category: "", // Stores the selected category
    loading: false,
    error: null,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload; // Update selected category
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchCategoryProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
