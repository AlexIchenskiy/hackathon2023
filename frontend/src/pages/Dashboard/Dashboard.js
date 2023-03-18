import React, { useState } from 'react';
import Alerts from '../../components/Alerts/Alerts';
import DashboardFooter from '../../components/DashboardFooter/DashboardFooter';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import DashboardNav from '../../components/DashboardNav/DashboardNav';
import Help from '../../components/Help/Help';
import RealTimeMonitoring from '../../components/RealTimeMonitoring/RealTimeMonitoring';
import ReportingAndAnalysis from '../../components/ReportingAndAnalysis/ReportingAndAnalysis';
import SystemParameters from '../../components/SystemParameters/SystemParameters';
import ThreatIntelligence from '../../components/ThreatIntelligence/ThreatIntelligence';

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
            <DashboardFooter />
        </div>
    )
}

export default Dashboard;
