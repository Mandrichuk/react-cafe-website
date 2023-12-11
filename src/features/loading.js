import { createSlice } from "@reduxjs/toolkit";


const initialLoading = true;
export const loadingSlice = createSlice({
  name: "loading",
  initialState: {value: initialLoading},
  reducers: {
    stopLoading: (state) => {
      state.value = false;
    }
  }
});


export const { stopLoading } = loadingSlice.actions;
export default loadingSlice.reducer;