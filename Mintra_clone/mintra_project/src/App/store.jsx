import { configureStore } from '@reduxjs/toolkit'
import AdditemsReducer from '../Features/addItems/addItemsSlice'
import  fetchStatusReducer from '../Features/fetchstatusSlice/fetchstatusSlice'
import BagReducers from '..//Features/BagSlice/BagSlice'
export const store = configureStore({
    reducer : 
    { 
    items : AdditemsReducer,
    fetchingReducer  : fetchStatusReducer,
    bagActions:BagReducers}
})