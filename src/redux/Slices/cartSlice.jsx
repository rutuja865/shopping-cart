import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const item = action.payload;
      const existingItem = state.find((i) => i.id === item.id);

      if (existingItem) {
        // If the item already exists, increase the quantity
        existingItem.quantity += item.quantity;
      } else {
        // If it's a new item, add it to the cart
        state.push({ ...item, quantity: item.quantity || 1 });
      }
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find((i) => i.id === id);

      if (item && quantity > 0) {
        item.quantity = quantity;
      } else if (item && quantity === 0) {
        // Remove item if quantity is set to 0
        return state.filter((i) => i.id !== id);
      }
    },
  },
});

export const { add, remove,updateQuantity  } = cartSlice.actions;
export default cartSlice.reducer;
