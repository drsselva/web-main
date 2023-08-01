import React, { useState, useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

const StudentStatistics = () => {
  const classes = ['Class A', 'Class B', 'Class C', 'Class D', 'Class E'];
  Chart.register(CategoryScale);

  const initialData = {
    labels: classes,
    datasets: [
      {
        label: 'Percentage',
        data: [40, 80, 20, 70, 30],
        backgroundColor: '#0B5C0B', // Green color for bars
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
          callback: (value) => `${value}%`,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const [data, setData] = useState(initialData);
  const chartRef = useRef(null);

  useEffect(() => {
    // Create a new chart instance when the component mounts
    const ctx = document.getElementById('studentStatisticsChart').getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });

    // Clean up the chart instance when the component is unmounted
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <div className="bar">
      <h2 className="text">Student Statistics</h2>
      <canvas id="studentStatisticsChart" width="400" height="200"></canvas>
    </div>
  );
};

export default StudentStatistics;
