// ChartComponent.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';  // Import Line chart from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary chart components from Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ChartProps {
  data: number[];
  width?: number;  // Optional width prop
  height?: number; // Optional height prop
}

const ChartComponent: React.FC<ChartProps> = ({ data, width = 100, height = 50 }) => {
  // Chart.js data configuration
  const chartData = {
    labels: Array(data.length).fill(''),  // Empty labels just to render the chart
    datasets: [
      {
        label: 'Price',
        data: data,  // Use the passed data for the chart
        fill: false,
        borderColor: 'rgb(75, 192, 192)', // Line color
        tension: 0.1,
      },
    ],
  };

  // Chart.js options configuration
  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        display: false,  // Hide x-axis labels
      },
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default ChartComponent;
