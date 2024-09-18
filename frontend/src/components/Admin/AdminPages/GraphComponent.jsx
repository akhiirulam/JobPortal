import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GraphComponent = () => {
  // Example data
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sales Data',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  // Example options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to use the full width of its container
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Value: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true, // Automatically skips labels if there are too many
          maxRotation: 45, // Rotate labels for better fit
          minRotation: 30,
        },
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-32 sm:h-40 md:h-48 lg:h-72">
      <span className='text-lg'>Your Profile View</span>
      <div className="relative w-full h-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default GraphComponent;
