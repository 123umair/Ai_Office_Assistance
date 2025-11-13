import React from 'react'
import { additem } from '../Features/addItems/addItemsSlice';
import { useState, useEffect } from 'react';
import { markFetchDone, markFetchingFinished, markFetchingStarted } from '../Features/fetchstatusSlice/fetchstatusSlice';

import { useDispatch, useSelector } from 'react-redux'
function FetchItems() {
  const fetchStatus = useSelector((state)=>state.fetchingReducer)
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(markFetchingStarted()) // this one
    fetch('http://localhost:8080/items',{signal})
    .then((res)=> res.json())
    .then((data)=>{
    dispatch(markFetchDone()) //this one 


     dispatch(markFetchingFinished()) //this one 
     
      dispatch(additem(data.items))
      console.log(data.items)
  

    })
  
    return () => {
      controller.abort()
    }
  }, [fetchStatus.fetchDone])
  
  return (
    <div>
    
    </div>
  )
}

export default FetchItems