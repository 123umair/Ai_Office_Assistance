import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
function Sidebar() {
    const bagitems = useSelector((state) => state.bagActions)
  
  return (
    <div>
              <div className="bg-gray-500 z-900 flex flex-col p-6 items-center w-screen h-screen  justify-between">
            <a
              href="#"
              className=" flex flex-col justify-center items-center md:hidden    text-sm font-medium hover:text-pink-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user-round"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
              <span>Profile</span>
            </a>

            <a href="#"
              className="md:hidden  flex flex-col justify-center items-center text-sm font-medium hover:text-pink-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart"
              >
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
              </svg>
              <span>Wishlist</span>
            </a>

            <Link
              to="/bag"
              className="block md:hidden relative  flex-col items-center gap-1 text-sm font-medium hover:text-pink-600"
            >
              <div className=" top-0 left-4 absolute text-[10px] bg-red-700 font-bold text-white rounded-full ">{bagitems.length}</div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-handbag"
              >
                <path d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z" />
                <path d="M8 11V6a4 4 0 0 1 8 0v5" />
              </svg>
              <span>Bag

              </span>

            </Link>

          </div>
    </div>
    
  );
}

export default Sidebar;
