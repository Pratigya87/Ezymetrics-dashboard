// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">EzyMetrics</h2>
      <ul className="sidebar-menu">
        <li>
          <Link to="/" className="sidebar-link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/leads" className="sidebar-link">
            Leads
          </Link>
        </li>
        <li>
          <Link to="/analytics" className="sidebar-link">
            Analytics
          </Link>
        </li>
        <li>
          <Link to="/reports" className="sidebar-link">
            Reports
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
