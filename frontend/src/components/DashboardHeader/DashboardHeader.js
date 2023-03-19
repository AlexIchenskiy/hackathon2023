import React from "react";

import { useState } from "react";

import "./DashboardHeader.scss";

import logo from "../../assets/images/ikona_spider.png";

const DashboardHeader = () => {
  const [showWindow, setShowWindow] = useState(false);

  const handleWindowToggle = () => {
    setShowWindow(!showWindow);
  };

  return (
    <header className="bg-light-violet flex items-center justify-between px-4 py-3 ">
      <div className="flex items-center">
        <img src={logo} alt="ikona logo" className="h-8 w-8 mr-2" />
        <span className="text-2xl font-bold font-family: ui-monospace">
          SCS
        </span>
      </div>
      <span
        className={`border-red border-solid border-2 px-6 py-3 rounded-3xl text-sm font-medium cursor-pointer transition-all duration-300 ${
          showWindow ? "bg-red text-white" : ""
        }`}
        onClick={handleWindowToggle}
      >
        username
      </span>

      {showWindow && (
        <div className="p-4 border-4 border-blue-500 rounded-b-lg bg-white z-10 absolute right-0 mt-56 mr-4">
          <div className="py-1"> User info </div>
          <div className="py-1"> User settings</div>
          <div className="py-1"> Logout</div>
        </div>
      )}
    </header>
  );
};

export default DashboardHeader;
