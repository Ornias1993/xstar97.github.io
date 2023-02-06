import React, { useState, useEffect } from "react";

const ChartsSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [filteredTrains, setFilteredTrains] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/charts/charts.json');
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!data.trains) return;
    const results = data.trains.filter(train => {
      return train.charts.some(chart => {
        return (
          chart.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          chart.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    });
    setFilteredTrains(results);
  }, [searchTerm, trains]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search apps by name or description"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <ul>
          {filteredTrains.map(train => (
            <li key={train.name}>
              <h3>{train.name}</h3>
              {train.charts.map(chart => (
                <div key={chart.name}>
                  <h4><a href={chart.link}>{chart.name}</a></h4>
                  <p>{chart.description}</p>
                </div>
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChartsSearchBar;