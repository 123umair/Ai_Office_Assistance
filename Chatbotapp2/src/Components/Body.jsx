import React, { useState } from "react";
import Loading from "./Loading";

function Body({ messages, isFetching }) {
  return (
    <div className="h-[calc(100vh-220px)] p-6 text-left overflow-y-auto bg-gray-50 rounded-lg shadow-inner">
      <div className="mt-2 flex flex-col gap-5">
        {messages.map((message, index) => {
          const isUser = message.sender === "user";
          return (
            <div
              key={index}
              className={`flex ${isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`
                  flex items-end gap-3
                  p-4 rounded-3xl shadow
                  ${
                    isUser
                      ? "bg-gradient-to-br from-green-200 text-green-800"
                      : "bg-gradient-to-br from-blue-200 to-blue-100 text-blue-800"
                  }
                  max-w-[70%] min-w-[120px]
                  transition-all duration-200
                `}
              >
                {!isUser && (
                  <img
                    src="chat.png"
                    alt="Bot"
                    className="w-9 h-9 rounded-full border-2 border-blue-300 shadow-sm"
                  />
                )}

                <div className="flex flex-col">
                  {Array.isArray(message.text) ? (
                    message.text.map((point, i) => (
                      <p key={i} className="">
                        {console.log(point, "point")}
                        {point}
                      </p>
                    ))
                  ) : (
                    <span className="break-words font-bold text-base leading-relaxed">
                      {message.text}
                    </span>
                  )}

                  <span className="font-normal text-xs text-gray-500 pt-1 self-end">
                    {message.time}
                  </span>
                </div>

                {isUser && (
                  <img
                    src="chat.png"
                    alt="User"
                    className="w-9 h-9 rounded-full border-2 border-green-300 shadow-sm"
                  />
                )}
              </div>
            </div>
          );
        })}

        {/* Show loading when waiting for bot response */}
        {isFetching &&
          messages.length > 0 &&
          messages[messages.length - 1].sender === "user" && (
            <div className="flex justify-start">
              <div className="flex items-end gap-3 p-4 rounded-3xl shadow bg-gradient-to-br from-blue-200 to-blue-100 text-blue-800 max-w-[70%] min-w-[120px]">
                <img
                  src="chat.png"
                  alt="Bot"
                  className="w-9 h-9 rounded-full border-2 border-blue-300 shadow-sm"
                />
                <div className="flex flex-col">
                  <Loading />
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default Body;
