import React from 'react';
import { Bar } from 'react-chartjs-2';
import '@/styles/globals.css';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const LineChart = ({ data }) => {

  const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const colors = data.map(() => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`);

  const datasets = data.map((source, index) => {
    const label = Object.keys(source)[0];
    return {
      label,
      data: source[label],
      backgroundColor: colors[index],
    };
  });

  const chartData = {
    labels,
    datasets,
  };

  const options = {
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          max: 20,
        },
        grid: {
          color: 'gray', 
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'start', 
      } 
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default LineChart;
