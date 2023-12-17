import { createSlice } from "@reduxjs/toolkit"; 

export const initialStateValue = {
  userLoggined: false,
  adminLoggined: false,
  superAdminLoggined: false,
}

const logginsSlice = createSlice({
  name: "logins",
  initialState: { value: initialStateValue },
  reducers: {
    toggleUserLogin: (state, action) => {
      state.value.userLoggined = action.payload;
      state.value.adminLoggined = false;
      state.value.superAdminLoggined = false;
    },
    toggleAdminLogin: (state, action) => {
      state.value.adminLoggined = action.payload;
      state.value.userLoggined = false;
      state.value.superAdminLoggined = false;
    },
    toggleSuperAdminLogin: (state, action) => {
      state.value.superAdminLoggined = action.payload;
      state.value.userLoggined = false;
      state.value.adminLoggined = false;
    },
  }
});


export const {toggleUserLogin, toggleAdminLogin, toggleSuperAdminLogin} = logginsSlice.actions;
export default logginsSlice.reducer;