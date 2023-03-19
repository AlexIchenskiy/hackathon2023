import React from "react";

import data from '../../assets/data/threat_intelligence.json';

const colors = {
    "High": "#ff9966",
    "Medium": "	#ffcc00",
    "Low": "#99cc33"
}

const ThreatIntelligence = () => {
    return (
        <>
        {data.map((item) => (
            <div key={item.id} className='rounded-xl shadow-2xl inline-block p-8 m-4'>
                <h1 className='font-bold w-full text-center' style={{color: colors[item.severity]}}>{item.threat_type.toUpperCase()}</h1>
                <h5 className='w-full text-center text-xs'>{item.source_ip}</h5>
                <h1 className='w-full text-center text-lg mt-2'>{item.target_domain}</h1>
                <h5 className='w-full text-center text-xs'>{item.timestamp}</h5>
            </div>
        ))}
        </>
    );
}

export default ThreatIntelligence;
