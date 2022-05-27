import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  export const options = {
    responsive:true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' ,
      },
      
    },
  };
  
function BarGraph({graphData}) {
  console.log(graphData.labels)
  const data = {
    labels:graphData.labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: graphData.value,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }
    return (
        <div className='graph'>
            <Bar options={options} data={data} />
        </div>
    );
}

export default BarGraph;