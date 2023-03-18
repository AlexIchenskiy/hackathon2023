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
        <div className='DashboardNav inline-block h-full'>
            <ul className='lista rounded-md'>
            {listItems.map((item, index) => (
                <li 
                    key={index} 
                    onClick={() => handleItemClick(index)} 
                    className={`cursor-pointer transition-all duration-300 ${selectedIndex === index ? '' : ''}`}
                >
                    {item}
                </li>
            ))}
            </ul>
        </div>
    )
}

export default DashboardNav;
