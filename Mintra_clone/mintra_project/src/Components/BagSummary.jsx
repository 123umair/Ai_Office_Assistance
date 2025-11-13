import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBag } from "../Features/BagSlice/BagSlice";
import BagItem from "./BagItem";

function BagSummary() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.bagActions);
  let totalMRP = 0;
  let totalDiscount = 0;
  const CONVENIENCE_FEES =  99;

    items.forEach((bagitem)=>{
      totalMRP += bagitem.original_price
      totalDiscount += bagitem.original_price - bagitem.current_price
    })

    let finalPayment =  totalMRP - totalDiscount + CONVENIENCE_FEES
 

  return (
    <div className="flex flex-col lg:flex-row  justify-center items-start mt-10 gap-8 lg:w-2xl mx-auto">
      {/* 🛍️ Left Side: Bag Items */}
      <div className="bg-white shadow-lg border border-gray-100 rounded-2xl p-6 w-full lg:w-1/2 transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-xl font-bold text-gray-800 border-b pb-3 mb-5 flex justify-between items-center">
          Your Bag
          <span className="text-sm text-gray-500 font-medium">
            ({items.length} items)
          </span>
        </h2>

        {items.length === 0 ? (
          <p className="text-gray-500 text-center py-10 text-base">
            Your bag is empty 🛒
          </p>
        ) : (
          <ul className="space-y-5 ">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition-all border border-gray-200"
              >
                {/* Left side — image and details */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.item_name}
                    className="w-16 h-16 rounded-xl object-cover border border-gray-200"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-gray-800 font-semibold text-sm sm:text-base line-clamp-1">
                      {item.item_name}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mt-1">
                      <span className="font-semibold">Rs {item.current_price}</span>{" "}
                      <span className="line-through text-gray-400 text-xs sm:text-sm ml-1">
                        Rs {item.original_price}
                      </span>
                    </p>
                    <span className="text-green-600 text-xs sm:text-sm font-medium">
                      ({item.discount_percentage}% OFF)
                    </span>
                  </div> 
                </div>

                {/* Right side — Remove button */}
                <button
                  onClick={() => dispatch(removeFromBag(item.id))}
                  className="text-red-500 hover:text-red-600 text-sm font-semibold transition-colors duration-200"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 💰 Right Side: Summary */}
      <div className="bg-white shadow-lg border border-gray-100 rounded-2xl p-6 w-full lg:w-1/3 transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-xl font-bold text-gray-800 border-b pb-3 mb-5">
          PRICE DETAILS{" "}
          <span className="text-gray-500 font-medium text-sm">
            ({items.length} items)
          </span>
        </h2>

        <div className="space-y-3 text-gray-700 text-base">
          <div className="flex justify-between">
            <span>Total MRP</span>
            <span className="font-medium">₹{totalMRP}</span>
          </div>

          <div className="flex justify-between">
            <span>Discount on MRP</span>
            <span className="text-green-600 font-medium">
              -₹{totalDiscount}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Convenience Fee</span>
            <span className="font-medium text-gray-800">₹99</span>
          </div>
        </div>

        <hr className="my-4 border-gray-200" />

        <div className="flex justify-between text-lg font-semibold text-gray-900 mb-4">
          <span>Total Amount</span>
          <span>₹{finalPayment }</span>
        </div>

        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}

export default BagSummary;
