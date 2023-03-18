import React from 'react';

import './DashboardHeader.scss';

import logo from "../../assets/images/ikona_spider.png";

const DashboardHeader = () => {
    return (

        <header className=" bg-blue-900  flex items-center justify-between px-4 py-3 border-b-2 border-color: rgb(71,86,180) rounded-b-lg">
            <div className="flex items-center ">
                <img src={logo} alt="ikona logo" className="h-8 w-8 mr-2" />
                <span className="text-2xl font-bold">SPS</span>
            </div>
            <span className="text-sm font-medium">username</span>
        </header>
    )
}


export default DashboardHeader
