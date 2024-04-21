import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:false,
    data:[],
}

const addTocard=createSlice({
    name:"addtocard",
    initialState,
    reducers:{
        updataCard:(state,action)=>{
            state.loading=true;
            state.data=action.payload //action.payload adds new data 
        },

        setLoading:(state,action)=>{
            state.loading=action.payload;
        },
        clearData: (state) => {
            state.data = [];
        },
    }
})
export const {updataCard,setLoading,clearData}=addTocard.actions;
export default addTocard.reducer;