import React from 'react';
import './grants.css';

const Grants = () => {
    return (
        <div className="grants-page">
            <h1>Opportunity Title</h1>
            <p><strong>Posting Date:</strong> Date</p>
            <table>
                <th>Opportunity Title</th>
                <th>Deadline</th>
                <th>Total Amount Available</th>
                <th>Maximum for Each Award</th>
                <th>Remarks</th>
            </table>
            <h2>PROGRAM DESCRIPTION</h2>
            <p>Program description content goes here.</p>
            <h2>Outputs/Outcomes</h2>
            <p>Outputs and outcomes content goes here.</p>
            <h2>Details</h2>
            <p>Details content goes here.</p>
            <h2>Grantee Expectations</h2>
            <p>Grantee expectations content goes here.</p>
            <p>For more information, please email us at <a href="mailto:contact@vbl.ca">contact@vbl.ca</a> for any questions.</p>
        </div>
    );
}

export default Grants;
