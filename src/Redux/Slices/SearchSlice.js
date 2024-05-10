import {createSlice} from "@reduxjs/toolkit";
import { fetchSearch } from "../../services/allProducts";

const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
const searchData=createSlice({
    name: "searchslice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchSearch.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchSearch.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchSearch.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
    
        
       
});
export default searchData.reducer;