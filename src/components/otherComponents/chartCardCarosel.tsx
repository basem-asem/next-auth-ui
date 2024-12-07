import React, { useEffect, useState } from 'react';
import AreaChartCard  from './areaChartCard';
import LineChartCard from './lineChartCard';

const ChartCardCarosel = () => {

  const areaChartData = [
    { name: 'Jan', value: 200 },
    { name: 'Feb', value: 156 },
    { name: 'Mar', value: 65 },
    { name: 'Apr', value: 60 },
    { name: 'May', value: 100 },
];

const lineChartData = [
  { name: 'Jan', value: 1 },
  { name: 'Feb', value: 1 },
  { name: 'Mar', value: 1 },
  { name: 'Apr', value: 1 },
  { name: 'May', value: 1 },
];

const [isScrolling, setIsScrolling] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsScrolling(true);
        }, 2000);

        return () => clearTimeout(timer); 
    }, []);
    
    const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
        const parent = e.currentTarget.closest('.token-main-list') as HTMLElement | null;
        if (parent) {
            parent.style.animationPlayState = 'paused';
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement>) => {
        const parent = e.currentTarget.closest('.token-main-list') as HTMLElement | null;
        if (parent) {
            parent.style.animationPlayState = 'running';
        }
    };

  return(
    <div className='flex flex-col justify-center p-[20px] gap-[20px] bg-[white] w-[100%] h-[500px] overflow-hidden'>
        <h1>Last 7 days performances</h1>
        <div className={`flex w-[100%] gap-[10px] will-change-transform animate-none transition-transform-[0.2s] ${isScrolling ? 'scrolling' : ''}`}>
          <AreaChartCard 
              value="74.4M" 
              label="Listeners" 
              chartData={areaChartData} 
              color="green" 
              icon="a"
          />
          <AreaChartCard 
              value="74.4M" 
              label="Listeners" 
              chartData={areaChartData} 
              color="green" 
              icon="a"
          />
          <AreaChartCard 
              value="74.4M" 
              label="Listeners" 
              chartData={areaChartData} 
              color="green" 
              icon="a"
          />
          <AreaChartCard 
              value="74.4M" 
              label="Listeners" 
              chartData={areaChartData} 
              color="blue" 
              icon="b"
          />
          <AreaChartCard 
              value="74.4M" 
              label="Listeners" 
              chartData={areaChartData} 
              color="blue" 
              icon="b"
          />
          <AreaChartCard 
              value="74.4M" 
              label="Listeners" 
              chartData={areaChartData} 
              color="blue" 
              icon="b"
          />
          <LineChartCard 
              value="74.4M" 
              label="Listeners" 
              chartData={lineChartData} 
              color="red"
              icon="b"
          />
          <AreaChartCard 
              value="74.4M" 
              label="Listeners" 
              chartData={areaChartData} 
              color="green" 
              icon="a"
          />
          <AreaChartCard 
              value="74.4M" 
              label="Listeners" 
              chartData={areaChartData} 
              color="green" 
              icon="a"
          />
          <AreaChartCard 
              value="74.4M" 
              label="Listeners" 
              chartData={areaChartData} 
              color="green" 
              icon="a"
          />
          <AreaChartCard 
              value="74.4M" 
              label="Listeners" 
              chartData={areaChartData} 
              color="blue" 
              icon="b"
          />
          <AreaChartCard 
              value="74.4M" 
              label="Listeners" 
              chartData={areaChartData} 
              color="blue" 
              icon="b"
          />
          <AreaChartCard 
              value="74.4M" 
              label="Listeners" 
              chartData={areaChartData} 
              color="blue" 
              icon="b"
          />
          <LineChartCard 
              value="74.4M" 
              label="Listeners" 
              chartData={lineChartData} 
              color="red"
              icon="b"
          />
        </div>
    </div>
  )
}

export default ChartCardCarosel;
