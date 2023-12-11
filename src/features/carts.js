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
      const { id, amount } = action.payload;
      const index = state.value.userCart.findIndex(item => item.id === id);

      if (index !== -1) {
        state.value.userCart[index] = {
          ...state.value.userCart[index],
          amount: state.value.userCart[index].amount + amount,
        };
      } else {
        state.value.userCart = [
          ...state.value.userCart,
          { id, amount },
        ];
      }
    },
    clearUserCart: (state) => {
      state.value.userCart = [];
    },
    removeFromUserCart: (state, action) => {
      const { id, amount } = action.payload;
      const index = state.value.userCart.findIndex(item => item.id === id);

      if ( state.value.userCart[index].amount <= 1) {
        state.value.userCart.splice(index, 1);
      } else {
        if (index !== -1) {
          state.value.userCart[index] = {
            ...state.value.userCart[index],
            amount: state.value.userCart[index].amount - amount,
          };
        } else {
          state.value.userCart = [
            ...state.value.userCart,
            { id, amount },
          ];
        }
      }
    },


    addToAdminCart: (state, action) => {
      const { id, amount } = action.payload;
      const index = state.value.adminCart.findIndex(item => item.id === id);

      if (index !== -1) {
        state.value.adminCart[index] = {
          ...state.value.adminCart[index],
          amount: state.value.adminCart[index].amount + amount,
        };
      } else {
        state.value.adminCart = [
          ...state.value.adminCart,
          { id, amount },
        ];
      }
    },
    removeFromAdminCart: (state, action) => {
      const { id, amount } = action.payload;
      const index = state.value.adminCart.findIndex(item => item.id === id);

      if ( state.value.adminCart[index].amount <= 1) {
        state.value.adminCart.splice(index, 1);
      } else {
        if (index !== -1) {
          state.value.adminCart[index] = {
            ...state.value.adminCart[index],
            amount: state.value.adminCart[index].amount - amount,
          };
        } else {
          state.value.adminCart = [
            ...state.value.adminCart,
            { id, amount },
          ];
        }
      }
    },
    clearAdminCart: (state) => {
      state.value.adminCart = [];
    },
  }
});

export const { addToUserCart, addToAdminCart, clearUserCart, clearAdminCart, removeFromAdminCart } = cartsSlice.actions;
export default cartsSlice.reducer;