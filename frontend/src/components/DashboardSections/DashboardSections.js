import React from 'react';

import Sections from './components/Sections/Sections.js';

import logo from '../../assets/images/spiderweb.png';

import './DashboardSections.scss';


function DashboardSections() {
    const listItems = [
        'Threat Intelligence',
        'Real-time Monitoring',
        'Alerts',
        'Reporting and Analysis',
        'System parameters',
      ];
    return (
        
        <div className='DashboardSections h-full '>
           <h1 className= ''> <img src={logo} class="mx-auto py-4 w-1 lg:w-1/2 p-4"  ></img></h1>
            <h2 className=' companyName font-bold text-6xl text-center' >Spider Cyber Security</h2>
            <ul className='lista  rounded-md shadow-md p-6  '>
            {listItems.map((item, index) => (
                <li key={index} className="py-4 text-3xl">
           
            {item}
          </li>
        ))}
            </ul>
             
            <Sections />
        </div>
    )
}

export default DashboardSections;
