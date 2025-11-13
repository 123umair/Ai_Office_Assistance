import { createSlice } from "@reduxjs/toolkit";

const initialState  = 
    {
        fatchDone:false,
        currentlyFetching: false
    }

const fetchstatusSlice = createSlice({
    name:"fetchStatus",
    initialState,
 
    reducers:{
        markFetchDone:(state,action)=>{
             state.fatchDone = true
        },
        markFetchingStarted:(state,action)=>{
             state.currentlyFetching = true;
        },
        markFetchingFinished:(state,action)=>{
              state.currentlyFetching = false;
        }


    }
})

export const {markFetchDone,markFetchingFinished,markFetchingStarted } = fetchstatusSlice.actions

export default fetchstatusSlice.reducer