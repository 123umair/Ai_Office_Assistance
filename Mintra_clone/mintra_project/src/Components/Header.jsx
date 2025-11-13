import React from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { FaHome } from "react-icons/fa";
export default function Header() {

  const bagitems = useSelector((state) => state.bagActions)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="  ">
      <div className="lg:w-full bg-white shadow-sm w-screen ">
        <div className="flex items-center p-10 justify-between h-16">
          {/* Left: Logo + hamburger on mobile */}
          <div className="flex items-center gap-4 ">
            <Link to="/" className="flex items-center gap-2">
              <div className=" lg:block w-16 h-16 rounded-md items-center justify-center text-white font-bold">
                <img src="images/myntra_logo.webp" alt="" />
              </div>
            </Link>
               <div className="lg:max-w-7xl mx-auto px-4 lg:px-8">
                   <ul className="hidden lg:flex gap-6 font-bold text-sm py-2 ">
                          <li><a href="#" className="hover:text-pink-600">MEN</a></li>
                          <li><a href="#" className="hover:text-pink-600">WOMEN</a></li>
                          <li><a href="#" className="hover:text-pink-600">KIDS</a></li>
                          <li><a href="#" className="hover:text-pink-600">HOME</a></li>
                          <li><a href="#" className="hover:text-pink-600">BEAUTY</a></li>
                          <li><a href="#" className="hover:text-pink-600">GENZ</a></li>
                          <li>
                            <a href="#" className="hover:text-pink-600 relative inline-block">STUDIO <span className="absolute -top-2 -right-5 text-red-500 text-[10px] font-semibold">NEW</span></a></li>
              </ul>
            </div>
          </div>


          {/* Center: Search (takes available space) */}


          {/* Right: actions */}
          <div className="flex items-center gap-8 ">
            <div className="flex-1 px-4">
              <div className="max-w-3xl border-1 border-gray-300  mx-auto">
                <div className=" hidden relative lg:flex  items-center border-gray-300  bg-gray-100 hover:bg-gray-50 transition-all w-[280px] md:w-[350px] lg:w-[420px]">

                  {/* Search Icon */}
                  <svg
                    className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>

                  {/* Input Field */}
                  <input
                    type="text"
                    placeholder="Search for products, brands and more..."
                    className="w-full pl-10 pr-3 py-3 text-sm bg-gray-100 outline-none focus:bg-white "
                  />
                </div>
              </div>
            </div>
            <div className="block text-xl font-bold  md:hidden ">
              {/* mobile menu */}
          <button className="" onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}}>
            <IoMenu />

          </button>
            </div>
         

          </div>
          <div className=" hidden lg:flex  gap-8 ">
            <a
              href="#"
              className="hidden md:inline-flex  flex-col items-center gap-1 text-sm font-medium hover:text-pink-600"
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
              className="hidden md:inline-flex flex-col items-center gap-1 text-sm font-medium hover:text-pink-600"
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
              className="hidden relative md:inline-flex flex-col items-center gap-1 text-sm font-medium hover:text-pink-600"
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

      </div>
       {/* sidebar block */}
          <div>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            key="sidebar"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{once:true}}
            className="fixed inset-0 z-50 bg-gray-200 flex flex-col p-4 gap-20    items-center justify-start"
            
          >
            {/* Profile */}
            <a
              href="#"
              className="flex flex-col justify-center items-center md:hidden text-sm font-medium hover:text-pink-600"
              onClick={() => setIsSidebarOpen(false)}
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

            {/* Wishlist */}
            <a
              href="#"
              className="md:hidden flex flex-col justify-center items-center text-sm font-medium hover:text-pink-600"
              onClick={() => setIsSidebarOpen(false)}
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

            {/* Bag */}
            <Link
              to="/bag"
              className="block md:hidden relative flex-col items-center gap-1 text-sm font-medium hover:text-pink-600"
              onClick={() => setIsSidebarOpen(false)}
            >
              <div className="top-0 left-4 absolute text-[10px] bg-red-700 font-bold text-white rounded-full px-1">
                {bagitems.length}
              </div>
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
              <span>Bag</span>
            </Link>

            {/* Home */}
            <Link
              to="/"
              className="block md:hidden flex-col items-center gap-1 text-sm font-medium hover:text-pink-600"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FaHome className="text-3xl" />
              <span>Home</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    </header>
  );
}
