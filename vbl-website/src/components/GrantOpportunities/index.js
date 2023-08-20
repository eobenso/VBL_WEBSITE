import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // Import Link
import './index.css';
import Grants from './grants';

const Content = () => {
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
                            <th>Deadline</th>
                            <th>Total Amount Available</th>
                            <th>Maximum for Each Award</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* Add a Link component to Opportunity Title with 'to' prop */}
                            <td><Link to="/grants/award1">Award Name 1</Link></td>
                            <td>September 10, 2023</td>
                            <td>10,000 CAD</td>
                            <td>5,000 CAD</td>
                            <td>Open</td>
                        </tr>
                        <tr>
                            {/* Add a Link component to Opportunity Title with 'to' prop */}
                            <td><Link to="/grants/award2">Award Name 2</Link></td>
                            <td>August 15, 2023</td>
                            <td>75,000 CAD</td>
                            <td>5,000 CAD</td>
                            <td>Closed</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Content;
