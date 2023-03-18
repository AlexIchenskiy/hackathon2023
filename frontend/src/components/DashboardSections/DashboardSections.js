import React from 'react';

import Sections from './components/Sections/Sections.js';

import './DashboardSections.scss';

const DashboardSections = () => {
    return (
        <div className='DashboardSections'>
            <img src='C:\Users\Antea\Desktop\FRONTED 2023 HACKATHON\git_fronted\hackathon2023\frontend\src\assets\img folder\pocetna_slika.jpg' ></img>
            <p className='companyname'> Spider Cyber Security </p>
            <Sections />
        </div>
    )
}

export default DashboardSections;
