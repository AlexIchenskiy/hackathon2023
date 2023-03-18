import React from 'react';

import Sections from './components/Sections/Sections.js';

import './DashboardSections.scss'

const DashboardSections = () => {
    return (
        <div className='DashboardSections'>
            <img src='' className='icon' alt='icon'></img>
            <p className='userName'> Anton Ladan </p>
            <Sections />
        </div>
    )
}

export default DashboardSections;
