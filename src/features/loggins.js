import { createSlice } from "@reduxjs/toolkit"; 

const initialStateValue = {
  userLoggined: false,
  adminLoggined: false,
  superAdminLoggined: false,
}


export const logginsSlice = createSlice({
  name: "logins",
  initialState: { value: initialStateValue },
  reducers: {
    toggleUserLogin: (state, action) => {
      state.value = action.payload;
    },
    toggleAdminLogin: (state, action) => {
      state.value = action.payload;
    },
    toggleSuperAdminLogin: (state, action) => {
      state.value = action.payload;
    },
  }
})


export const {toggleUserLogin, toggleAdminLogin, toggleSuperAdminLogin} = logginsSlice.actions;
export default logginsSlice.reducer;