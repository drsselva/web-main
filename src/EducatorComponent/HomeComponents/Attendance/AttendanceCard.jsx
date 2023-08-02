import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

// Register the ArcElement before using it
Chart.register(ArcElement);

const Attendance = ({ presentCount, totalCount }) => {
  const attendancePercent = ((presentCount / totalCount) * 100).toFixed(2);

  const data = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        data: [presentCount, totalCount - presentCount],
        backgroundColor: ["#0B5C0B","#EAEAEA"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="attendance-container">
      <div className="attendance-title">
        <h2 className="title-text">Present | Today</h2>
      </div>
      <div className="attendance-content">
        <div className="attendance-pie">
          <Pie data={data} options={options} />
        </div>
        <div className="attendance-info">
          <h5>Attendance <br/> Percentage: {attendancePercent}%</h5>
          <p>
            Present:.<br/> {presentCount} / Total: {totalCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
