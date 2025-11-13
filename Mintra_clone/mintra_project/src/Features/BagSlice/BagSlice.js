import { createSlice } from "@reduxjs/toolkit";


const initialState = []

const BagSlice = createSlice({
    name : 'BagSlice',
    initialState,
    reducers:{
        addToBag:(state,action)=>{
            state.push(action.payload)
        },
        removeFromBag:(state,action)=>{
         
        return state.filter(item => item.id !== action.payload);
            // here in this case item is fullobject {} where contain key value pais and now i extract the item.id we need id to remvoe from this.
            
        }
    }
})

export const {addToBag,removeFromBag} = BagSlice.actions
export default BagSlice.reducer