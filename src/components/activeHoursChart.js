"use client";
import { Bar } from 'react-chartjs-2';
import styles from '@/styles/chart.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ActiveHoursChart({ data }) {
  const chartData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`), // 0:00, 1:00, ...
    datasets: [
      {
        label: 'Haber Sayısı',
        data, 
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Saatlik Haber Aktivitesi',
      },
    },
    scales: {
      x: {
        grid: {
          color:  '#606060', 
        },
      },
      y: {
        grid: {
          color: '#f2f2f2', 
        },

      },
    },
  };

  return (
    <div className={styles.barContainer}> 
      <Bar options={options} data={chartData} />
    </div>
  );
}
