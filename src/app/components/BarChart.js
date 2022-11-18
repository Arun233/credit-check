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
import faker from 'faker';

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

const labels = ['May', 'June', 'July', 'Aug', 'Sep'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Success',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 60 })),
      backgroundColor: '#2396C1',
    },
    {
      label: 'Failed',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 60 })),
      backgroundColor: '#FE738B',
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
