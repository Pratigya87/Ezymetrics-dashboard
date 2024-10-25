import React from "react";
import { saveAs } from "file-saver";
import { FaDownload } from "react-icons/fa";
import "./Reports.css";

function Reports() {
  const generateCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8,Name,Status\nLead 1,New\nLead 2,In Progress\n";
    const encodedUri = encodeURI(csvContent);
    saveAs(encodedUri, "report.csv");
  };

  return (
    <div className="reports">
      <div className="report-card">
        <h2 className="report-title">Reports</h2>
        <p className="report-description">
          Download the latest reports in CSV format for easy data analysis.
        </p>
        <button className="download-btn" onClick={generateCSV}>
          <FaDownload className="icon" /> Download CSV
        </button>
      </div>
    </div>
  );
}

export default Reports;
