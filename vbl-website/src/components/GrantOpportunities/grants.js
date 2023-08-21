import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './grants.css';

import grantData from './data.json';

const Grant = () => {
  const { grantId } = useParams();
  const selectedGrant = grantData.find(grant => grant.id === parseInt(grantId));

  if (!selectedGrant) {
    return (
      <div>
        <h2>Grant Not Found</h2>
        <p>The requested grant opportunity does not exist.</p>
        <Link to="/grant-opportunities">Back to Grant Opportunities</Link>
      </div>
    );
  }

  return (
    <div className="grant-details">
      <h1>{selectedGrant.title}</h1>
      <div><strong>Posting Date:</strong> {selectedGrant.deadline}</div>
      <table className="grant-table">
        <thead>
          <tr>
            <th>Opportunity Title</th>
            <th>Deadline</th>
            <th>Total Amount Available</th>
            <th>Maximum for Each Award</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedGrant.title}</td>
            <td>{selectedGrant.deadline}</td>
            <td>{selectedGrant.totalAmount}</td>
            <td>{selectedGrant.maximumEach}</td>
            <td>{selectedGrant.remarks}</td>
          </tr>
        </tbody>
      </table>
      <h2>Program Description</h2>
      <div>Add grant description</div>
      <h2>Outputs/Outcomes</h2>
      <div>Add output</div>
      <h2>Details</h2>
      <div>Add detail</div>
      <h2>Grantee Expectations</h2>
      <div>Add grantee expectations</div>
      <button>Apply</button>
      <div>For more information, please email us at <a href="mailto:contact@vbl.ca">contact@vbl.ca</a> for any questions.</div>
      <Link to="/grant-opportunities">Back to Grant Opportunities</Link>
    </div>
  );
};

export default Grant;
