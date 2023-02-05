import React, { useState, useEffect } from "react"; 
import LoadingView from './LoadingView';

const ChartsTable = () => {
  const [trains, setTrains] = useState(null);
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/charts/charts.json');
      const json = await res.json();
      let itm = json[0];
      setTrains(itm.trains);
      setTotalCount(itm.totalCount);
    }
    fetchData();
  }, []);

  if (!trains) return <LoadingView duration={ !trains? 3000:500}></LoadingView>;
  return (
    <>
      <ul>
        {trains &&
          trains.map((train) => {
            return (
              <li key={train.name}>
                <a href={`#${train.name}`}>{train.name}</a>
              </li>
            );
          })}
      </ul>
      {trains &&
        trains.map((train) => {
          const charts = train.charts;

          return (
            <React.Fragment key={train.name}>
              <h2 id={train.name}>
                <a href={`#${train.name}`}>{train.name}</a>
              </h2>
              <table>
                <thead>
                  <tr>
                    <th>App</th>
                    <th>Source</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {charts.map((chart) => (
                    <tr key={chart.name}>
                      <td>
                        <img
                          src={chart.icon}
                          alt={chart.name}
                          width="25"
                          height="25"
                        />
                        &nbsp;
                        <a href={chart.link}>{chart.name}</a>
                      </td>
                      <td>{chart.source}</td>
                      <td>{chart.description}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3">
                      Charts in this train: <strong>{charts.length}</strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </React.Fragment>
          );
        })}
      <p>
        Total charts: <strong>{totalCount}</strong>
      </p>
    </>
  );
};

export default ChartsTable;