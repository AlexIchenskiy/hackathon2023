import React, { useState } from 'react';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import DashboardNav from '../../components/DashboardNav/DashboardNav';

const Dashboard = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleItemSelected = (index) => {
        setSelectedIndex(index);
    }

    return (
        <>
            <DashboardHeader />
            <DashboardNav onItemSelected={handleItemSelected} />
        </>
    )
}

export default Dashboard;
