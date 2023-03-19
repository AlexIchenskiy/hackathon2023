import React, { useEffect, useState } from "react";

import { ResponsiveLine } from '@nivo/line';

import data from '../../assets/data/realtime.json';

const RealTimeMonitoring = () => {   
    const [chartData, setChartData] = useState(data);

    useEffect(() => setChartData(data), []);

    useEffect(() => {
      const timer = setInterval(() => {
        chartData[0].data.pop();
        chartData[0].data.map((obj) => obj["x"] = obj["x"] + 1)
        const newData = [
          {
            id: 'chart',
            data: [
                {x: 0, y: parseInt(Math.random() * 25)},
              ...chartData[0].data.slice(0, -1)
            ],
          },
        ];
        setChartData(newData);
      }, 5000);
  
      return () => clearInterval(timer);
    }, [chartData]);

    return (
        <div className='w-auto h-full m-4'>
            <ResponsiveLine
                data={chartData}
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                xScale={{ type: 'linear', min: 0, max: '30' }}
                yScale={{ type: 'linear', min: 0, max: '26' }}
                axisBottom={{ tickValues: [0, 1, 2, 3, 4, 5, 6,
                                           7, 8, 9, 10, 11, 12, 13,
                                           14, 15, 16, 17, 18, 19, 20,
                                           21, 22, 23, 24, 25, 26, 27,
                                           28, 29, 30], 
                              tickSize: 5, tickPadding: 5, legend: "Day",
                              legendOffset: 36, legendPosition: 'middle' }}
                axisLeft={{legend: "Threats", legendOffset: -36, legendPosition: 'middle'}}
                lineWidth={2}
                pointSize={6}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                enablePointLabel={true}
                pointLabelYOffset={-12}
                useMesh={true}
                colors={["#cc3300"]}
                legends={[
                    {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    onClick: (data, index) => {},
                    effects: [
                        {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1,
                        },
                        },
                    ],
                    },
                ]}
                tooltip={({ point }) => {
                    return (
                      <div style={{ background: '#fff', padding: '9px 12px', border: '1px solid #ccc' }}>
                        <div style={{ fontSize: '12px' }}>{point.data.y} threats</div>
                      </div>
                    );
                  }}
                />
        </div>
    );
}

export default RealTimeMonitoring;
