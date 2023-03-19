import React from "react";

import data from "../../assets/data/reporting.json";

const colors = {
    "Critical": "#cc3300",
    "High": "#ff9966",
    "Medium": "	#ffcc00",
    "Low": "#99cc33"
}

const ReportingAndAnalysis = () => {
    return (
        <>
        {data.map((item) => (
            <div key={item.id} className='rounded-xl shadow-2xl inline-block p-8 m-4 max-w-md'>
                <h1 className='font-bold w-full text-start text-lg'
                    style={{color: colors[item.severity]}}>{"Report ".toUpperCase() + item.id + ": " + item.timestamp}</h1>
                <h3 className='w-full text-start text-md mt-3'>Severity: {item.severity}</h3>
                <h3 className='w-full text-start text-md mt-3'>Source: {item.source}</h3>
                <h3 className='w-full text-start text-xs mt-2'>Potential impact: {item.potential_impact}</h3>
                <h5 className='w-full text-start text-xs mt-2'>Location: {item.location}</h5>
            </div>
        ))}
        </>
    );
}

export default ReportingAndAnalysis;
