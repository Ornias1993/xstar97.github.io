import React, { useState, useEffect } from "react";
import SkeletonTable from './SkeletonTable';

const TrainsTable = () => {
  const [trains, setData] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/charts/charts.json');
      const json = await result.json();
      setData(json.trains);
      setTotalCount(json.totalCount);
      setLoading(false);
    };
    fetchData();
  }, []);


  return (
    <>
      {loading ? (
        <>
          {trains.map(() => (
            <table style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <td style={{ width: '33%', height: '20px' }} />
                  <td style={{ width: '33%', height: '20px' }} />
                  <td style={{ width: '33%', height: '20px' }} />
                </tr>
              </tbody>
            </table>
          ))}
        </>
      ) : (
        <>
      {trains.map(train => (
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
                  <td colSpan="3">Charts in this train: <strong>{charts.length}</strong></td>
                </tr>
              </tfoot>
          </table>
          <hr />
        </>
      ))}
      {showTotal && <p>Total charts: <strong>{totalCount}</strong></p>}
    </>
      )}
    </>
  );
};

export default TrainsTable;