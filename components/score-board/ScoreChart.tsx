// components/ScoreChart.tsx
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the ArcElement
ChartJS.register(ArcElement, Tooltip, Legend);

export default function ScoreChart() {
  const data = {
    datasets: [
      {
        data: [5000, 2500, 1500, 800, 200],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        cutout: '70%', 
      },
    ],
  };

  return (
    <div className="flex items-center justify-center space-x-6 p-4">
      <div 
      style={{ width: 300, height: 200 }} 
      className=''>
        <Doughnut data={data} />
        {/* <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
          5000
        </div> */}
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <div className="h-2 w-20 bg-red-500"></div>
          <span className="text-sm">2500</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-2 w-16 bg-yellow-500"></div>
          <span className="text-sm">1500</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-2 w-12 bg-blue-500"></div>
          <span className="text-sm">800</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-2 w-8 bg-green-500"></div>
          <span className="text-sm">200</span>
        </div>
      </div>

    </div>
  );
}
