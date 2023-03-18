import React from 'react';
import { useState } from 'react';
import DashboardNav from '../../components/DashboardNav/DashboardNav';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import ThreatIntelligence from '../../components/ThreatIntelligence/ThreatIntelligence';
import RealTimeMonitoring from '../../components/RealTimeMonitoring/RealTimeMonitoring';
import Alerts from '../../components/Alerts/Alerts';
import ReportingAndAnalysis from '../../components/ReportingAndAnalysis/ReportingAndAnalysis';
import SystemParameters from '../../components/SystemParameters/SystemParameters';
import Help from '../../components/Help/Help';

const Dashboard = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleItemSelected = (index) => {
        setSelectedIndex(index);
    }

    return (
        <>
            <DashboardNav onItemSelected={handleItemSelected} />
        </>
    )
}

export default Dashboard;
