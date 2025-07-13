import React from "react";

function Header() {
  return (
    <div>
      <header className="bg-blue-500 text-white p-4 flex gap-5 items-center  mx-auto  justify-between">
        <div className="flex items-center gap-3">
          {" "}
          <img src="appifytech.png" alt="" className="h-20 w-20 rounded-full"/>
          <div className="space-y-0.5">
            <div className="font-bold text-3xl">AppifyTech</div>
            <div className="text-sm font-bold">Ready to help you</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
