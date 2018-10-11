import React from 'react';
import MainLayout from '../components/MainLayout/MainLayout';

const Vendors = (props) => {
  const { location } = props;
  return (
    <MainLayout location={location}>
      <div style={{ padding: 24 }}>
        <h1>Vendors Page</h1>
      </div>
    </MainLayout>
  );
};

export default Vendors;
