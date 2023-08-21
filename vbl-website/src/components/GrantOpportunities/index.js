import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import grantData from './data.json';

const GrantOpportunities = () => {
  return (
    <div className="grant-opportunities">
      <div className="grant-content">
        <h1>Welcome to the VBL Grants Page!</h1>
        <p>
          Vancouver Black Library (VBL) provides funding opportunities for individuals and non-profit
          organizations working to… Our grants support a wide range of initiatives, including educational
          activities, cultural programs, and civil society projects. We encourage you to explore the various
          requirements and resources available to help bring your ideas to life.
        </p>
        <p className="space-between-elements">
          <h2>List of Grant Opportunities</h2>
        </p>
        <table className="grant-table">
          <thead>
            <tr>
              <th>Opportunity Title</th>
              <th>Posting Data</th>
              <th>Deadline</th>
              <th>Total Amount Available</th>
              <th>Maximum for Each Award</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {grantData.map(grant => (
              <tr key={grant.id}>
                <td>
                  <Link to={`/grant-opportunities/${grant.id}`}>{grant.title}</Link>
                </td>
                <td>{grant.postingDate}</td>
                <td>{grant.deadline}</td>
                <td>{grant.totalAmount}</td>
                <td>{grant.maximumEach}</td>
                <td>{grant.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GrantOpportunities;
