// src/components/Dashboard.js
import React from "react";
import Widget from "./Widget";
import { Bar } from "react-chartjs-2";
import "./Dashboard.css";

function Dashboard() {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [50, 30, 70, 85, 60],
        backgroundColor: [
          "#4bc0c0",
          "#ffcd56",
          "#ff6384",
          "#36a2eb",
          "#9966ff",
        ],
        borderColor: "#ffffff",
        borderWidth: 2,
        hoverBackgroundColor: [
          "#66d2d2",
          "#ffe082",
          "#ff8696",
          "#67c3ff",
          "#b299ff",
        ],
        hoverBorderColor: "#ffffff",
      },
    ],
  };

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Performance Dashboard</h2>
      <p className="dashboard-subtitle">Track your latest metrics</p>
      <div className="widgets">
        <Widget title="Monthly Sales Overview" content={<Bar data={data} />} />
        <Widget
          title="New Leads"
          content={<h3 className="lead-count">20</h3>}
        />
        <Widget
          title="Tasks Completed"
          content={<h3 className="task-count">45</h3>}
        />
        <Widget
          title="Revenue Growth"
          content={<h3 className="revenue-count">$10,000</h3>}
        />
        {/* Add more widgets as needed */}
      </div>
    </div>
  );
}

export default Dashboard;
