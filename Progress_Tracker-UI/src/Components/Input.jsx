import React from "react";

function Input() {
  return (
    <div className="w-full flex justify-evenly  p-4 text-sm absolute bottom-0 ">
      <input
        type="input"
        placeholder="Ask about progress, GitHub, or Jira..... "
        className="px-2 w-[90%] border-2 border-gray-300 rounded-md h-10 "
      />

      <button className="bg-gradient-to-l text-white from-blue-500 to-purple-500 px-4 rounded-sm cursor-pointer hover:bg-gradient-to-r">
        <svg
          xmlns="htt1p://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-send-icon lucide-send"
        >
          <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
          <path d="m21.854 2.147-10.94 10.939" />
        </svg>
      </button>
    </div>
  );
}

export default Input;
