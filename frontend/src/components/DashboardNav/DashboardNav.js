import React, { useState } from 'react';

import './DashboardNav.scss';


function DashboardNav({ onItemSelected }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    const listItems = [
        'Threat Intelligence',
        'Real-time Monitoring',
        'Alerts',
        'Reporting and Analysis',
        'System parameters',
        'Help',
    ];

    const handleItemClick = (index) => {
        setSelectedIndex(index);
        onItemSelected(index);
    }

    return (
        <div className='DashboardNav inline-block h-full bg-light-blue'>
            <ul className='lista rounded-md'>
            {listItems.map((item, index) => (
                <li 
                    key={index} 
                    onClick={() => handleItemClick(index)} 
                    className={`p-4 text-3xl cursor-pointer hover:bg-blue transition-all duration-300 ${selectedIndex === index ? 'bg-blue shadow-md' : ''}`}
                >
                    {item}
                </li>
            ))}
            </ul>
        </div>
    )
}

export default DashboardNav;
