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
            <div className='w-full h-full flex flex-row justify-start items-start overflow-y-scroll mt-0 pb-10'
                style={{height: '90%'}}>
                <div className='grid grid-cols-4 gap-0 h-screen'>
                <div className='fixed left-0 w-1/4'>
                    <DashboardNav onItemSelected={handleItemSelected} />
                </div>
                
                <div className='overflow-y-scroll col-start-2 col-end-5'>
                    <div className='inline-block'>
                        {selectedItem}
                    </div>
                </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
}

export default Dashboard;
