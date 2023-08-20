import React from 'react';
import './index.css';

const Content = () => {
    return (
        <div className="grant-content">
            <h1>Welcome to the VBL Grants Page!</h1>
            <p>
                Vancouver Black Library (VBL) provides funding opportunities for individuals and non-profit organizations working to… Our grants support a wide range of initiatives, including educational activities, cultural programs, and civil society projects. We encourage you to explore the various requirements and resources available to help bring your ideas to life.
            </p>
            <h2>List of Grant Opportunities</h2>
            <div className="grant-list">
                <div className="grant-item">
                    <p><strong>Opportunity Title:</strong> Title 1</p>
                    <p><strong>Deadline:</strong> Date 1</p>
                    <p><strong>Total Amount Available:</strong> Amount 1</p>
                    <p><strong>Maximum for Each Award:</strong> Maximum 1</p>
                    <p><strong>Remarks:</strong> Remarks 1</p>
                </div>
                <div className="grant-item">
                    <p><strong>Opportunity Title:</strong> Title 2</p>
                    <p><strong>Deadline:</strong> Date 2</p>
                    <p><strong>Total Amount Available:</strong> Amount 2</p>
                    <p><strong>Maximum for Each Award:</strong> Maximum 2</p>
                    <p><strong>Remarks:</strong> Remarks 2</p>
                </div>
                {/* Add more grant items as needed */}
            </div>
        </div>
    );
}

export default Content;
