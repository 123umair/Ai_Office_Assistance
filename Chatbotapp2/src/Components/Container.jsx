import React from "react";
import Header from "./Header";

import Body from "./Body";
import Input from "./Input";
import { useState } from "react";

function Container() {
  const [userinput, setUserinput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  return (
    <div className="relative border-2 border-blue-300 rounded-lg  max-w-3xl mx-auto bg-white h-screen">
      <Header />

      <Body messages={messages} isFetching={isFetching} />

      <Input
        userinput={userinput}
        setUserinput={setUserinput}
        setMessages={setMessages}
        setIsFetching={setIsFetching}
      />
    </div>
  );
}

export default Container;
