import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import "./Analytics.css";

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function Analytics() {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [30, 50, 40, 60, 80, 70],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Website Traffic",
        data: [100, 150, 130, 170, 200, 180],
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  return (
    <div className="analytics">
      <h2 className="analytics-title">Analytics Overview</h2>
      <div className="chart-container">
        <div className="chart-card">
          <h3 className="chart-title">Monthly Sales</h3>
          <Bar
            data={barData}
            options={{ responsive: true, maintainAspectRatio: true }}
          />
        </div>
        <div className="chart-card">
          <h3 className="chart-title">Website Traffic</h3>
          <Line
            data={lineData}
            options={{ responsive: true, maintainAspectRatio: true }}
          />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
