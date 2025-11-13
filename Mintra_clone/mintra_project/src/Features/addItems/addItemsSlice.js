import { createSlice } from "@reduxjs/toolkit";





const initialState = []
console.log(initialState,'check')




console.log(initialState,'inital')
export const additemsSlice = createSlice({
    name : 'items',
    initialState,
    reducers:{
        additem:(state,action) => {
           
            return action.payload
        }
    }
})

export const {additem} = additemsSlice.actions
export default additemsSlice.reducer

