import React, { useState, useEffect } from "react";
import SkeletonGrid from './SkeletonGrid';
import SearchBar from './SearchBar.js';
import "../css/grid.css";

const TrainsGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [trains, setData] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleSearch = event => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/charts/charts.json');
      const json = await result.json();
      let totalCount = json.totalCount;
      let trains = json.trains;
      
      setData(trains);
      setTotalCount(totalCount);
      setLoading(trains.length > 1 ? false:true);
    };
    fetchData();
  }, []);

  const filteredCharts = trains
    .map(train => {
      return {
        name: train.name,
        count: train.count,
        charts: train.charts.filter(
          chart =>
            chart.description.toLowerCase().indexOf(searchTerm) !== -1 ||
            chart.name.toLowerCase().indexOf(searchTerm) !== -1
        )
      };
    })
    .filter(train => train.charts.length > 0);

  return (
    <>
      <div className="search-container">
        <SearchBar placeHolder="Search by App name or description" searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>

      {loading ? (
        <SkeletonGrid />
      ) : (
        filteredCharts.map(train => (
            <>
            <h2>{train.name}</h2>
            <div className="grid">
              {train.charts.map(chart => (
                <div className="grid-item" onClick={() => handleOpenDialog(chart)}>
                <img src={chart.icon} alt={chart.name} width="50" height="50"/>
                <p>{chart.name}</p>
              </div>
              ))}
            </div>
            {isDialogOpen && selectedChart && (
                <div className="dialog">
                <div className="dialog-header">
                  <h3>{selectedChart.name}</h3>
                  <button onClick={handleCloseDialog}>Close</button>
                </div>
                <div className="dialog-body">
                  <p>{selectedChart.description}</p>
                  <p>Source: {selectedChart.source}</p>
                </div>
              </div>
      )}
          </>
        ))
      )}
      {<p>Total charts: <strong>{totalCount}</strong></p>}
    </>
  );
};

export default TrainsGrid;