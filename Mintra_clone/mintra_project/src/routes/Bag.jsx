import React from 'react'
import BagSummary from '../Components/BagSummary'
import BagItem from '../Components/BagItem'
import { useSelector } from 'react-redux'
function Bag() {
  return (
<>
 <div className="bg-gray-50 px-9 ">
      <div className="max-w-4xl flex flex-col lg:flex-row gap-8">
        {/* Left Section (Bag Items) */}
        <div className="">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">My Bag</h2>
              <BagItem  />
         </div>
         {/* Right Section (Summary) */}
        <div className="w-full lg:w-1/3">
          <BagSummary />
        </div>
      </div>   
      </div>
</>
)}
export default Bag