import React, { useState } from 'react';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import DashboardNav from '../../components/DashboardNav/DashboardNav';
import ThreatIntelligence from '../../components/ThreatIntelligence/ThreatIntelligence';
import RealTimeMonitoring from '../../components/RealTimeMonitoring/RealTimeMonitoring';
import Alerts from '../../components/Alerts/Alerts';
import ReportingAndAnalysis from '../../components/ReportingAndAnalysis/ReportingAndAnalysis';
import SystemParameters from '../../components/SystemParameters/SystemParameters';
import Help from '../../components/Help/Help';

const Dashboard = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(<ThreatIntelligence />);

    const listItems = [
        <ThreatIntelligence />,
        <RealTimeMonitoring />,
        <Alerts />,
        <ReportingAndAnalysis />,
        <SystemParameters />,
        <Help />,
    ];

    const handleItemSelected = (index) => {
        setSelectedIndex(index);
        setSelectedItem(listItems[index]);
    }

    return (
        <div className='w-full h-full'>
            <DashboardHeader />
            <DashboardNav onItemSelected={handleItemSelected} />
            <div className='inline-block'>
                {selectedItem}
            </div>
        </div>
    )
}

export default Dashboard;
