import React from 'react';
import { useSelector,useDispatch
 } from 'react-redux';
 import { removeFromBag } from '../Features/BagSlice/BagSlice';

function BagItem() {
  const items = useSelector((state) => state.bagActions);
  const itemid = items.map((itemid)=>itemid.id)
  

  const dispatch= useDispatch()

  if (!items || items.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">
        👜 Your bag is empty
      </div>
    );
  }

  return (
    <div className=''>
      {items.map((item) => (
        <div
          className="flex items-start justify-start bg-white border border-gray-200 rounded-xl p-4 mb-4 shadow-sm hover:shadow-md transition-all duration-200"
        >
          {/* Product Image */}
          <div className="w-28 h-28 flex-shrink-0">
            <img
              src={item.image}
              alt={item.item_name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 px-4 text-gray-800">
            <h3 className="font-semibold text-sm">{item.company}</h3>
            <p className="text-gray-600 text-sm mb-1">{item.item_name}</p>

            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-base">₹{item.current_price}</span>
              <span className="text-gray-400 line-through text-sm">₹{item.original_price}</span>
              <span className="text-green-600 text-sm font-semibold">
                ({item.discount_percentage}% OFF)
              </span>
            </div>

            <p className="text-xs text-gray-500 mb-1">
              {item.return_period} days return available
            </p>

            <p className="text-xs text-gray-500">
              Deliver by <span className="font-medium text-gray-700">{item.delivery_date}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BagItem;
