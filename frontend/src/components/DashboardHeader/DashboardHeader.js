import React from "react";
import ikona3 from "../../assets/images/icons_logout.png";
import ikona1 from "../../assets/images/icons_user_info.png";
import ikona2 from "../../assets/images/icons_user_set.png";

import { useState } from "react";

import "./DashboardHeader.scss";

import logo from "../../assets/images/ikona_spider.png";

const DashboardHeader = () => {
    const [showWindow,setShowWindow] = useState(false);

    const handleWindowToggle = () => {
        setShowWindow(!showWindow);
    };

      return (
        <header className='bg-light-violet flex items-center justify-between px-4 py-3 '>
          <div className="flex items-center">
            <img src={logo} alt="ikona logo" className="h-12 w-12 mr-2" />
            <span className="text-5xl font-bold font-family: ui-monospace">SCS</span>
          </div>
          <span className={`border-red border-2 px-3 py-3 rounded-3xl text-lg font-medium cursor-pointer transition-all duration-300 ${showWindow ? 'bg-red text-white' : ''}`}
            onClick = {handleWindowToggle}
          >
            username
          </span>

          {showWindow && (
            <div className="p-6 border-dashed  border-4 border-red rounded-b-2xl bg-white z-10 absolute mt-24 mr-20 right-1 top-1">
            <div className='font-bold flex items-center justify-between px-4 py-3 '><img src ={ikona1} style={{ width: "25%", height: "auto", marginRight:"-50px" }} />USER INFO</div>
            <div className='font-bold flex items-center justify-between px-4 py-3 '><img src ={ikona2} style={{ width: "25%", height: "auto", marginRight:"10px" }} />USER SETTINGS</div>
            <div className='font-bold flex items-center justify-between px-4 py-3 '><img src ={ikona3} style={{ width: "25%", height: "auto", marginRight:"-50px" }} />LOGOUT</div>
            </div>
   
  )}
</header>
        
    )}

export default DashboardHeader
