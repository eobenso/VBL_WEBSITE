import React from 'react';
import Navbar from '../components/Navbar';
import GrantOpportunitiesComponent from '../components/GrantOpportunities'; // Rename the imported component

const GrantOpportunities = () => {
  return (
    <div>
      <Navbar />
      <GrantOpportunitiesComponent />
    </div>
  );
};

export default GrantOpportunities;
