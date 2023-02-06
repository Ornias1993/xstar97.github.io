import React, { useState } from "react";
import "../css/grid.css";

const Grid = ({ filteredCharts }) => {
  const [selectedChart, setSelectedChart] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setSelectedChart(null);
    setIsDialogOpen(false);
  };

  const handleOpenDialog = chart => {
    setSelectedChart(chart);
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="grid">
        {filteredCharts.map(chart => (
          <div className="grid-item" onClick={() => handleOpenDialog(chart)}>
            <img src={chart.icon} alt={chart.name} width="50" height="50"/>
            <p>{chart.name}</p>
          </div>
        ))}
      </div>
      {isDialogOpen && selectedChart && (
        <div className="dialog">
          <div className="dialog-header">
            <h3>{selectedChart.title}</h3>
            <button onClick={handleCloseDialog}>Close</button>
          </div>
          <div className="dialog-body">
            <p>{selectedChart.description}</p>
            <p>Source: {selectedChart.source}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Grid;