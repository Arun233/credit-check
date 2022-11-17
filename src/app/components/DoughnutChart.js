import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

export const data = {
    labels: ['Success', 'Failed', 'Locked Out Events'],
    datasets: [
      {
        label: '# of Votes',
        data: [15, 15, 15],
        backgroundColor: [
          '#2396C1',
          '#FE738B',
          '#888B8A',
        ],
        borderColor: [
          '#2396C1',
          '#FE738B',
          '#888B8A',
        ],
        borderWidth: 1,
      },
    ],
  };

const DoughnutChart = () => {
    return <Doughnut data={data} options={options} />
}

export default DoughnutChart
