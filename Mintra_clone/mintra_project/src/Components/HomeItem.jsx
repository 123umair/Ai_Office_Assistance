import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBag, removeFromBag } from "../Features/BagSlice/BagSlice";

export default function HomeItem({ item }) {
  const dispatch = useDispatch();
  const bagItems = useSelector((state) => state.bagActions);

  // ✅ use includes correctly
  const bagItemIds = bagItems.map((bagItem) => bagItem.id);
  const isItemInBag = bagItemIds.includes(item.id);

  return (
    <div className="bg-white border m-4 border-gray-200 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 p-3 flex flex-col justify-between cursor-pointer w-[250px] h-[400px]">
      <div className="w-full h-[250px] overflow-hidden rounded-lg">
        <img
          src={item.image}
          alt={item.item_name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <span className="text-yellow-500 font-semibold">
            {item.rating.stars}★
          </span>
          <span>({item.rating.count})</span>
        </div>
        <span className="text-gray-500">{item.company}</span>
      </div>

      <div className="mt-1 font-semibold text-gray-800 text-sm line-clamp-1">
        {item.item_name}
      </div>

      <div className="mt-2 text-sm flex items-center gap-2">
        <span className="text-gray-900 font-bold">
          Rs {item.current_price}
        </span>
        <span className="text-gray-400 line-through">
          Rs {item.original_price}
        </span>
        <span className="text-green-600 font-semibold">
          ({item.discount_percentage}% OFF)
        </span>
      </div>

      {isItemInBag ? (
        <button
          onClick={() => dispatch(removeFromBag(item.id))}
          className="mt-4 bg-red-500 cursor-pointer hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition-colors duration-300"
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={() => dispatch(addToBag(item))}
          className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition-colors duration-300"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
