import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header setSidebarOpen={setSidebarOpen} />
      {sidebarOpen && (
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      )}
      <Body sidebarOpen={sidebarOpen} />
    </div>
  );
}

export default App;
