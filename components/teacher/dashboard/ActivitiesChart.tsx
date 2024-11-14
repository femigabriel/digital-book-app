import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivitiesChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Teachers',
        data: [12, 19, 3, 5, 2, 3, 10],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
      {
        label: 'Students',
        data: [2, 3, 20, 5, 1, 4, 15],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold">Activities</h3>
      <Bar data={data} />
    </div>
  );
};

export default ActivitiesChart;
