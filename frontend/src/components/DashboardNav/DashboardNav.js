import React, { useState } from 'react';

import './DashboardNav.scss';


function DashboardNav({ onItemSelected }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    
    const listItems = [
        'THREAT INTELLIGENCE',
        'REAL-TIME MONITORING',
        'ALERTS',
        'REPORTING AND ANALYSIS',
        'HELP',
    ];

    const handleItemClick = (index) => {
        setSelectedIndex(index);
        onItemSelected(index);
    }

    return (
        <div className='DashboardNav inline-block h-full'>


            <ul className='lista rounded-md' style={{width: '300px'}}>

            {listItems.map((item, index) => (
                <li 
                    key={index} 
                    onClick={() => handleItemClick(index)} 
                    className={`px-6 py-3 text-2xl cursor-pointer transition-all duration-300 ${selectedIndex === index ? 'bg-red text-white' : ''}`}
                >
                    {item}
                </li>
            ))}
            </ul>
        </div>
    )
}

export default DashboardNav;
