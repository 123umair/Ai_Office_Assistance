// Body.jsx
import React from "react";
import Input from "./Input";
function Body({ sidebarOpen }) {
  return (
    <div
      className={` relative transition-all duration-300 ease-in-out 
        flex justify-center items-center mx-auto mt-5 h-96 shadow-md border border-gray-300
        w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 
        ${sidebarOpen ? 'ml-64' : 'ml-0'}`}
    >
      <div className="flex flex-col items-center justify-center w-full">
        <span className="h-14 w-14 text-white bg-gradient-to-l from-blue-500 to bg-purple-500 rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot-icon lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
        </span>
        <p className="font-semibold text-lg text-center">Progress Tracking Assistant</p>
        <p className="text-sm text-gray-600 text-center" >
          Ask me about team progress, GitHub commits, or Jira tickets!
        </p>
      <Input></Input>
      </div>

    </div>
  );
}

export default Body;
