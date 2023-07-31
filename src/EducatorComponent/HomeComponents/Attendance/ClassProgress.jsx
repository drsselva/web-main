import React from 'react';
import { Pie } from 'react-chartjs-2';


const ClassStatistics = () => {
  // Sample data for the pie chart
  const pieChartData = {
    labels: ['Registered', 'Unregistered'],
    datasets: [
      {
        data: [90, 10],
        backgroundColor: ["#0B5C0B","#EAEAEA"],
        borderColor: 'transparent',
      },
    ],
  };

  const pieChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      arc: {
        borderWidth: 3,
      },
    },
  };

  return (
    <div className="container">
      <div className="center-column">
        <p className="class-info">Class A<br />90 registered</p>
      </div>
      <div className="right-column">
        <Pie data={pieChartData} options={pieChartOptions} width={50} height={50} />
      </div>
    </div>
  );
};

export default ClassStatistics;
