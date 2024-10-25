// src/components/Widget.js
import React from "react";

function Widget({ title, content }) {
  return (
    <div className="widget">
      <h3>{title}</h3>
      <div>{content}</div>
    </div>
  );
}

export default Widget;
