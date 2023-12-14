import { createSlice } from "@reduxjs/toolkit"; 

export const initialStateValue = {
  userLoggined: false,
  adminLoggined: true,
  superAdminLoggined: true,
}

const logginsSlice = createSlice({
  name: "logins",
  initialState: { value: initialStateValue },
  reducers: {
    toggleUserLogin: (state, action) => {
      state.value.userLoggined = action.payload;
    },
    toggleAdminLogin: (state, action) => {
      state.value.adminLoggined = action.payload;
    },
    toggleSuperAdminLogin: (state, action) => {
      state.value.superAdminLoggined = action.payload;
    },
  }
});



export const {toggleUserLogin, toggleAdminLogin, toggleSuperAdminLogin} = logginsSlice.actions;
export default logginsSlice.reducer;