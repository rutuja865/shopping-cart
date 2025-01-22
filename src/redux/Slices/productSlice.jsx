import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("products/fetchProduct", async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
});

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
        state.products[action.payload.id] = action.payload;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectProductById = (state, id) => state.products.products[id];
export default productSlice.reducer;
