import React from "react";

const Help = () => {
  return (
    <div>
      <p className="align-center w-auto h-auto  font-bold text-3xl">Help</p>
      <div>
        <ul className="py-4 p-4">
          <li className="py-4 p-4 font-bold text-2xl">Threat intelligence</li>
          <p className="text-xl mb-3">
            Displays blocks displaying information about threats, their source,
            target and severity
          </p>
          <div className="mb-24 w-64 rounded-xl shadow-2xl inline-block p-8 m-4">
            <h1 className="font-bold w-full text-center">Threat Type</h1>
            <h5 className="w-full text-center text-xs">Source IP</h5>
            <h1 className="w-full text-center text-lg mt-2">Target Domain</h1>
            <h5 className="w-full text-center text-xs">Time Stamp</h5>
          </div>
          <div className="ml-12 inline-block">
            <p className="mb-3 text-xl">
              The color of threat type depends on severity of the threat
            </p>
            <p className="font-bold text-warning-high text-lg">Red - high</p>
            <p className="font-bold text-warning-medium text-lg">
              Yellow - medium
            </p>
            <p className="font-bold text-warning-low text-lg">Green - low</p>
          </div>
          <li className="py-4 p-4 font-bold text-2xl">Real-time Monitoring</li>
          <div className="mb-24">
            <p className="mb-3 text-xl">
              Displays a graph of threats per day in real time
            </p>
            <p className="font-bold text-lg">x axis - days elapsed</p>
            <p className="font-bold text-lg">y axis - threats</p>
          </div>
          <li className="py-4 p-4 font-bold text-2xl">Alerts</li>
          <div className="mb-24 w-64 rounded-xl shadow-2xl inline-block p-8 m-4 max-w-md">
            <h1
              className="font-bold w-full text-start text-lg"
            >
              Name
            </h1>
            <h3 className="w-full text-start text-md mt-3">
              Severity
            </h3>
            <h3 className="w-full text-start text-md mt-3">
              Domain
            </h3>
            <h4 className="w-full text-start text-sm mt-2">
              Service
            </h4>
            <h4 className="w-full text-start text-sm mt-2">
              Cluster
            </h4>
            <h5 className="w-full text-start text-xs mt-2">
              Timestamp
            </h5>
            <h5 className="w-full text-start text-xs mt-2">
              Help
            </h5>
          </div>
          <div className="ml-12 inline-block">
            <p className="mb-3 text-xl">
              The color of threat type depends on severity of the threat
            </p>
            <p className="font-bold text-warning-critical text-lg">
              Darker red - critical
            </p>
            <p className="font-bold text-warning-high text-lg">Red - high</p>
            <p className="font-bold text-warning-medium text-lg">
              Yellow - medium
            </p>
            <p className="font-bold text-warning-low text-lg">Green - low</p>
          </div>
          <li className="py-4 p-4 font-bold text-2xl">
            Reporting and Analysis
          </li>
          <div className="mb-24 w-64 rounded-xl shadow-2xl inline-block p-8 m-4 max-w-md">
            <h1 className="font-bold w-full text-start text-lg">ID</h1>
            <h3 className="w-full text-start text-md mt-3">Severity</h3>
            <h3 className="w-full text-start text-md mt-3">Source</h3>
            <h3 className="w-full text-start text-xs mt-2">Potential impact</h3>
            <h5 className="w-full text-start text-xs mt-2">Location</h5>
          </div>
          <div className="ml-12 inline-block">
            <p className="mb-3 text-xl">
              The color of threat type depends on severity of the threat
            </p>
            <p className="font-bold text-warning-critical text-lg">
              Darker red - critical
            </p>
            <p className="font-bold text-warning-high text-lg">Red - high</p>
            <p className="font-bold text-warning-medium text-lg">
              Yellow - medium
            </p>
            <p className="font-bold text-warning-low text-lg">Green - low</p>
          </div>
        </ul>
      </div>
      <div className="mt-4 text-lg">
        For more information contact the developers.
      </div>
    </div>
  );
};

export default Help;
