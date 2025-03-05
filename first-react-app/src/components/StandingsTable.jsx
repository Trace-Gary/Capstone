import React from 'react';

const StandingsTable = () => {
  return (
    <div className="table-container">
      <h1 className="theading">Premier League Standings</h1>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Draw</th>
            <th>Lost</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody id="standings-body">
            
        </tbody>
      </table>
    </div>
  );
};

export default StandingsTable;