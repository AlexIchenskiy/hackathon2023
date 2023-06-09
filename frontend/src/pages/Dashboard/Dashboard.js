import React, { useState } from 'react';
import Alerts from '../../components/Alerts/Alerts';
import DashboardFooter from '../../components/DashboardFooter/DashboardFooter';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import DashboardNav from '../../components/DashboardNav/DashboardNav';
import Help from '../../components/Help/Help';
import RealTimeMonitoring from '../../components/RealTimeMonitoring/RealTimeMonitoring';
import ReportingAndAnalysis from '../../components/ReportingAndAnalysis/ReportingAndAnalysis';
import ThreatIntelligence from '../../components/ThreatIntelligence/ThreatIntelligence';

const Dashboard = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(<ThreatIntelligence />);

    const listItems = [
        <ThreatIntelligence />,
        <RealTimeMonitoring />,
        <Alerts />,
        <ReportingAndAnalysis />,
        <Help />,
    ];

    const handleItemSelected = (index) => {
        setSelectedIndex(index);
        setSelectedItem(listItems[index]);
    }

    return (
        <div className='w-full h-full'>
            <DashboardHeader />
            <div className={'w-full h-full flex flex-row justify-start items-start mt-0 pb-10 ' + (selectedIndex === 1 ? "overflow-y-hidden" : "overflow-y-scroll")}
                style={{height: '90%'}}>
                <DashboardNav onItemSelected={handleItemSelected} />
                <div className='inline-block w-full h-full'>
                    {selectedItem}

                </div>
            </div>
            <DashboardFooter />
        </div>
    )
}

export default Dashboard;
