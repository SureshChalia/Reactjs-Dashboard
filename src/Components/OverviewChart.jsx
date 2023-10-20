import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const OverviewChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Store chart instance in a ref
  const [timePeriod, setTimePeriod] = useState('monthly');
 
  //dummy data for timeperiod
  const quarterlyData = [22, 10, 27, 25, 14, 21, 18, 11, 17, 19, 21, 17];
  const yearlyData = [10, 16, 17, 28, 12, 19, 13, 21, 17, 14, 21, 17];
  const monthlyData = [20, 10, 27, 25, 14, 22, 18, 28, 27, 19, 21, 17];

  let data;
    if (timePeriod === 'quarterly') {
      data = quarterlyData;
    } else if (timePeriod === 'yearly') {
      data = yearlyData;
    } else {
      data = monthlyData;
    }

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    
    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: ' ',
          data: data,
          backgroundColor: '#F2F2F2', // Color for the bars
          borderColor: '#F2F2F2', // Border color for the bars
          hoverBackgroundColor: '#0000FF',
          borderWidth: 1, 
          borderRadius: 8
        }]
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
            axis: {
              display: false, 
            },
            ticks: {
              display: true,
            },
          },
          y: {
            grid: {
              display: false,
            },
            beginAtZero: true,
            axis: {
              display: false, 
            },
            ticks: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false, 
          },
        },
        maintainAspectRatio:false,
      }
    });

    // Clean up chart on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [timePeriod,data]);

  return (
    <div className="bg-white p-4 shadow-md rounded-lg h-[20rem] w-full">
      <div className='flex justify-between p-2'>
        <div className='flex flex-col'>
          <p className='font-bold text-lg'>Overview</p>
          <p className='text-gray-400 text-xs'>Monthly Earning</p>
        </div>
        <div >
          <select value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} id="timePeriod" className='bg-gray-200 rounded text-gray-400 ' style={{ outline: 'none' }}>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      <div className='h-56'><canvas ref={chartRef}  width="400" height="200"></canvas></div>
    </div>
  );
};

export default OverviewChart;
