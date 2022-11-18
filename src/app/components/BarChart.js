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
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

export const data = {
  labels: ['May', 'June', 'July', 'Aug', 'Sep'],
  datasets: [
    {
      label: 'Success',
      data: [60, 49, 30, 11, 56],
      backgroundColor: '#2396C1',
    },
    {
      label: 'Failed',
      data: [50, 39, 20, 21, 46],
      backgroundColor: '#FE738B',
    },
    {
      label: 'Locked Out Events',
      data: [40, 29, 10, 31, 26],
      backgroundColor: '#888B8A',
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
