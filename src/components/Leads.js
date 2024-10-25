import React, { useState } from "react";
import "./Leads.css";

const dummyLeads = [
  { name: "Lead 1", status: "New" },
  { name: "Lead 2", status: "In Progress" },
  { name: "Lead 3", status: "Completed" },
];

function Leads() {
  const [selectedLead, setSelectedLead] = useState(null);

  return (
    <div className="leads">
      <h2 className="leads-title">Leads</h2>
      <ul className="leads-list">
        {dummyLeads.map((lead, index) => (
          <li
            key={index}
            className="lead-item"
            onClick={() => setSelectedLead(lead)}
          >
            <span className="lead-name">{lead.name}</span>
            <span className={`lead-status ${lead.status.toLowerCase()}`}>
              {lead.status}
            </span>
          </li>
        ))}
      </ul>
      {selectedLead && (
        <div className="lead-details-modal">
          <div className="lead-details-content">
            <h3 className="lead-details-title">{selectedLead.name}</h3>
            <p className="lead-details-status">
              Status: <span>{selectedLead.status}</span>
            </p>
            <button
              className="close-button"
              onClick={() => setSelectedLead(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Leads;
