import React, { useState } from "react";
import ikona3 from "../../assets/images/icons_logout.png";
import ikona1 from "../../assets/images/icons_user_info.png";
import ikona2 from "../../assets/images/icons_user_set.png";
import logo from "../../assets/images/ikona_spider.png";
import "./DashboardHeader.scss";

const DashboardHeader = () => {
  const [showWindow, setShowWindow] = useState(false);

  const handleWindowToggle = () => {
    setShowWindow(!showWindow);
  };

  return (
    <header className=" flex items-center justify-between px-4 py-3 ">
      <div className="flex items-center">
        <img src={logo} alt="ikona logo" className="h-12 w-12 mr-2" />
        <span className="text-5xl font-bold font-family: ui-monospace">
          SCS
        </span>
      </div>
      <span
        className={`border-red border-2 px-3 py-3 rounded-3xl text-lg font-medium cursor-pointer transition-all duration-300 ${
          showWindow ? "bg-red text-white" : ""
        }`}
        onClick={handleWindowToggle}
      >
        username
      </span>

      {showWindow && (
        <div className="p-6 border-dashed border-4 border-red rounded-b-2xl bg-white z-10 absolute mt-24 mr-20 right-1 top-1">
          <div
            className="font-bold flex items-center justify-between px-7 py-3"
            onMouseOver={(e) =>
              e.currentTarget.querySelector(".icon1").style.transform =
                "scale(1.2)"
            }
            onMouseOut={(e) =>
              e.currentTarget.querySelector(".icon1").style.transform =
                "scale(1)"
            }
          >
            <img
              src={ikona1}
              className="icon1"
              style={{ width: "25%", height: "auto", marginLeft:"0" }}
              alt="user info"
            />
            USER INFO
          </div>
         
          <div
            className="font-bold flex items-center justify-between px-4 py-3"
            onMouseOver={(e) =>
              e.currentTarget.querySelector(".icon2").style.transform =
                "scale(1.2)"
            }
            onMouseOut={(e) =>
              e.currentTarget.querySelector(".icon2").style.transform =
                "scale(1)"
            }
          >
            <img
              src={ikona2}
              className="icon2"
              style={{ width: "25%", height: "auto", marginRight: "20px", marginLeft: "10px" }}
              alt="user settings"
            />
            USER SETTINGS
                   
          </div>
          <div className="font-bold flex items-center justify-between px-4 py-3 "
          >
          <div
            className="font-bold flex items-center justify-between px-4 py-3"
            onMouseOver={(e) =>
              e.currentTarget.querySelector(".icon3").style.transform =
                "scale(1.2)"
            }
            onMouseOut={(e) =>
              e.currentTarget.querySelector(".icon3").style.transform =
                "scale(1)"
            }
          >
            <img
              src={ikona3}
              className="icon3"
              style={{ width: "50px", height: "auto", marginRight: "50px" ,marginLeft: "5px"}}
              alt="logout"
            />
            LOGOUT
          </div>            
          </div>
         
        </div>
      )}
    </header>
  );
};

export default DashboardHeader;
