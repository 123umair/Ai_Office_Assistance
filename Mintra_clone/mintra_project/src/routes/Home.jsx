import React from 'react'
import HomeItem from '../Components/HomeItem'
import { useDispatch,useSelector } from 'react-redux'

function Home() {
  const item = useSelector((state)=>state.items)
  return (
    <div className='flex flex-wrap  gap-2 justify-center p-10 m-2'>
      {item.map((item)=> <HomeItem item={item}></HomeItem>)}
      </div>
  )
}

export default Home