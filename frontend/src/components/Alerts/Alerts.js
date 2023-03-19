import React from "react";

import data from '../../assets/data/alerts.json';

const colors = {
    "Critical": "#cc3300",
    "High": "#ff9966",
    "Medium": "	#ffcc00",
    "Low": "#99cc33"
}

const Alerts = () => {
    return (
        <>
        {data.map((item) => (
            <div key={item.id} className='rounded-xl shadow-2xl inline-block p-8 m-4 max-w-md'>
                <h1 className='font-bold w-full text-start text-lg'
                    style={{color: colors[item.severity]}}>{item.name.toUpperCase()}</h1>
                <h3 className='w-full text-start text-md mt-3'>Severity: {item.severity}</h3>
                <h3 className='w-full text-start text-md mt-3'>Domain: {item.domain}</h3>
                <h4 className='w-full text-start text-sm mt-2'>Service: {item.service}</h4>
                <h4 className='w-full text-start text-sm mt-2'>Cluster: {item.cluster}</h4>
                <h5 className='w-full text-start text-xs mt-2'>Timestamp: {item.timestamp}</h5>
                <h5 className='w-full text-start text-xs mt-2'>Help: {item.action_required}</h5>
            </div>
        ))}
        </>
    );
}

export default Alerts;
