import React from 'react';

import { useState } from "react";

import './DashboardHeader.scss';

import logo from "../../assets/images/ikona_spider.png";

const DashboardHeader = () => {

    const [showWindow,setShowWindow] = useState(false);

    const handleWindowToggle = () => {
        setShowWindow(!showWindow);
    };


    return (
      
        <header className="bg-blue-900 flex items-center justify-between px-4 py-3 ">
          <div className="flex items-center">
            <img src={logo} alt="ikona logo" className="h-8 w-8 mr-2" />
            <span className="text-2xl font-bold">SPS</span>
          </div>
          <span className="text-sm font-medium cursor-pointer"
            onClick = {handleWindowToggle}
          >username</span>

  {showWindow && (
    <div className="p-4 border-4 border-blue-500 rounded-b-lg bg-dark-purple-900 opacity-50 z-10 absolute right-0 mt-56 mr-4">
    <div className='py-1'> User info </div>
    <div className='py-1'> User settings</div>
    <div className='py-1'> Logout</div>
    </div>
   
  )}
</header>
        
    )}

export default DashboardHeader
