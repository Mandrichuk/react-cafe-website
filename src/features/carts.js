import { createSlice } from "@reduxjs/toolkit";

const initialCarts = {
  userCart: [],
  adminCart: [],
}

export const cartsSlice = createSlice({
  name: "carts",
  initialState: { value: initialCarts },
  reducers: {
    addToUserCart: (state, action) => {
      state.value.userCart = [...state.value.userCart, action.payload];
    },
    clearUserCart: (state) => {
      state.value.userCart = [];
    },
    addToAdminCart: (state, action) => {
      state.value.adminCart = [...state.value.adminCart, action.payload];
    },
    clearAdminCart: (state) => {
      state.value.adminCart = [];
    },

  }
});

export const { addToUserCart, addToAdminCart, clearUserCart, clearAdminCart } = cartsSlice.actions;
export default cartsSlice.reducer;