import React, { useState, useEffect } from "react";
import SkeletonTable from './SkeletonTable';

const column_array = ['App', 'Source', 'Description'];

const TrainsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [trains, setData] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = event => {
    setSearchTerm(event.target.value);
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

  const filteredTrains = trains.filter(train =>
    train.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    train.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="search-container">
        <i className="fa fa-search"></i>
        <input
          type="text"
          placeholder="Search by App name or description"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      {loading ? (
        <SkeletonTable columns={column_array} />
      ) : (
        filteredTrains.map(train => (
          <>
            <h2>{train.name}</h2>
            <table>
              <thead>
                <tr>
                  <th>App</th>
                  <th>Source</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {train.charts.map(chart => (
                  <tr>
                    <td>
                    <img src={chart.icon} alt={chart.name} width="25" height="25"/>&nbsp;
                    <a href={chart.link}>{chart.name}</a>
                    </td>
                      <td>{chart.source}</td>
                      <td>{chart.description}</td>
                  </tr>
                ))}
              </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3">Charts in this train: <strong>{train.count}</strong></td>
                  </tr>
                </tfoot>
            </table>
            <hr />
          </>
        ))
      )}
      {<p>Total charts: <strong>{totalCount}</strong></p>}
    </>
  );
};

export default TrainsTable;