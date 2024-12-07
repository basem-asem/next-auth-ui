import dynamic from 'next/dynamic';
import React from 'react';
import {
    Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const LineChart = dynamic(() => import('recharts').then((mod) => { return mod.LineChart }), { ssr: false });

interface ChartCardProps {
    value: string; 
    label: string;
    chartData: { name: string; value: number }[];
    color: string; 
    icon: string;
}

const LineChartCard: React.FC<ChartCardProps> = ({ value, label, chartData, color, icon }) => {

    const iconData: { [key: string]: string } = {
        a: '/images/youtube.svg',
        b: '/images/twitter.svg',
        c: '/images/music.svg',
        d: '/images/instagram.svg',
        e: '/images/facebook1.svg',
    };

    return (
        <div className='w-[230px] h-[300px] p-[16px] bg-[#f9f9f9] rounded-[8px] '>
            <div className='flex flex-col gap-[10px] '>
                <img src={iconData[icon]} alt="" width="25px"/>
                <LineChart
                    width={230}
                    height={160}
                    data={chartData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke={color} 
                        strokeWidth={2} 
                        dot={{ r: 0 }} // Customizes the dots on the line
                    />
                </LineChart>
                <span className='text-[24px] font-bold'>{value}</span>
                <span style={{ color }}>{label}</span>
            </div>
        </div>
    );
};

export default LineChartCard;
