import React, { useState, useEffect } from "react";

const SkeletonGrid = ({ columns, rows = 4 }) => {
    return (
      <div className="skeleton-grid">
        {Array.from({ length: rows }, (_, i) => (
          <div className="skeleton-row" key={i}>
            {Array.from({ length: columns }, (_, j) => (
              <div className="skeleton-cell" key={j} />
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default SkeletonGrid;