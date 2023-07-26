import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      const itemExists = state.itemsList.find((item) => item.id === newItem.id);

      if (itemExists) {
        itemExists.quantity += newItem.quantity || 1;
        itemExists.totalPrice +=
          newItem.price * newItem.quantity || newItem.price;
      } else {
        state.itemsList.unshift({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          category: newItem.category,
          totalPrice: newItem.price * newItem.quantity || newItem.price,
          quantity: newItem.quantity,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;

      const itemExists = state.itemsList.find((item) => item.id === id);

      if (itemExists.quantity > 1) {
        itemExists.quantity--;
        itemExists.totalPrice -= itemExists.price;
      }
    },
    deleteFromCart: (state, action) => {
      const id = action.payload;
      state.itemsList = state.itemsList.filter((item) => item.id !== id);
      state.totalQuantity--;
    },
  },
});

export const { actions, reducers } = cartSlice;

export default cartSlice;
