import {createSlice} from "@reduxjs/toolkit";
import { fetchSort } from "../../services/allProducts";

const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
const sortData=createSlice({
    name: "sortslice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchSort.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchSort.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchSort.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
    
        
       
});
export default sortData.reducer;