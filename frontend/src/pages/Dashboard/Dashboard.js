import React from 'react';
import DashboardSections from '../../components/DashboardSections/DashboardSections';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import ThreatIntelligence from '../../components/ThreatIntelligence/ThreatIntelligence';
import RealTimeMonitoring from '../../components/RealTimeMonitoring/RealTimeMonitoring';
import Alerts from '../../components/Alerts/Alerts';
import ReportingAndAnalysis from '../../components/ReportingAndAnalysis/ReportingAndAnalysis';
import SystemParameters from '../../components/SystemParameters/SystemParameters';
import Help from '../../components/Help/Help';

const Dashboard = () => {
    let selection = <ThreatIntelligence />

    return (
        <>
            <DashboardSections />
            <div style={{display: 'inline-block'}}>
                <DashboardHeader />
                {selection}
            </div>
        </>
    )
}

export default Dashboard;
