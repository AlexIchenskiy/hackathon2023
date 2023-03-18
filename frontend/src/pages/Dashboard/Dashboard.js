import React from 'react';
import DashboardSections from '../../components/DashboardSections/DashboardSections';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';


const Dashboard = () => {
    return (
        <>
            <DashboardSections />
                <div style={{display: 'inline-block'}}>
                    <DashboardHeader />
                </div>
        </>
    )
}

export default Dashboard;
