import { createSlice } from "@reduxjs/toolkit"; 

const initialStateValue = {
  userAdmin: [],

}


export const logginsSlice = createSlice({
  name: "logins",
  initialState: { value: initialStateValue },
  reducers: {

  }
})


export const {  } = logginsSlice.actions;
export default logginsSlice.reducer;