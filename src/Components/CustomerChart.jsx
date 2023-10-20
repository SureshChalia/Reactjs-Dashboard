import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['New', 'Old', 'Rejoin'],
  datasets: [{
    data: [15, 29, 43],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#dddddd',
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ],
  }]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
   
  }
};

const CustomerChart = () => {
  return (
    <div className='bg-white rounded-md  p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'>
      <p className='font-bold text-lg'>Customers</p>
      <p className='text-gray-400 text-sm'>Customer that buy products</p>
      <div className=' flex justify-center items-center'>
        <div className="chart-container mt-2 relative" style={{ maxWidth: '225px' }}>
          <Doughnut data={data} options={options} />
          <div className='absolute top-20 left-20'>
            <p className='font-bold px-3'>65%</p>
            <p className='text-sm'>Total New</p>
            <p className='text-sm'>Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerChart;
