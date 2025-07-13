import React from "react";

function Input({ userinput, setUserinput, setMessages, setIsFetching }) {
  // Function to call Flask backend
  function sendMessage(userMessage) {
    setIsFetching(true);
    fetch("http://127.0.0.1:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    })
      .then(async (res) => {
        setIsFetching(false);
        if (!res.ok) {
          const errorText = await res.text(); // return a promise
          console.error("Server error HTML:", errorText);
          throw new Error("Server error occurred");
        }
        return res.json();
      })
      .then((data) => {
        const botMessage = {
          text: data.reply,
          sender: "bot",
          time: formatTime(),
        };

        setMessages((prev) => [...prev, botMessage]);
      })
      .catch((err) => {
        console.error("Fetch error:", err.message);
        const botMessage = {
          text: `🤖 Bot says: Sorry, something went wrong on the server.`,
          sender: "bot",
          time: formatTime(),
        };
        setMessages((prev) => [...prev, botMessage]);
      });
  }

  const formatTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleSubmit = () => {
    if (userinput.trim() === "") return;

    // User message object
    const userMessage = {
      text: userinput,
      sender: "user",
      time: formatTime(),
    };

    // Add user message to messages array
    setMessages((prev) => [...prev, userMessage]);

    // Call backend
    sendMessage(userinput);

    setUserinput("");
  };

  return (
    <div className="flex gap-2 absolute bottom-0 w-full p-3 bg-gray-200 shadow-2xl">
      <input
        type="text"
        name="userinput"
        value={userinput}
        onChange={(e) => setUserinput(e.target.value)}
        className="bg-white border-blue-950 rounded-lg p-4 w-[80%] outline-none focus:ring-2 focus:ring-blue-950"
      />

      <button
        className=" flex items-center justify-center gap-2 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white p-4 rounded-xl shadow-lg font-bold text-lg transition-all duration-200 hover:from-blue-600 hover:to-blue-800 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer "
        onClick={handleSubmit}
      >
        <svg
          className="w-5 h-5 mr-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14M12 5l7 7-7 7"
          />
        </svg>
        Submit
      </button>
    </div>
  );
}

export default Input;
