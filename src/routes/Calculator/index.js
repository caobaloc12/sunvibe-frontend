import React from 'react';
import MainLayout from '../components/MainLayout/MainLayout';

const Calculator = (props) => {
  const { location } = props;
  return (
    <MainLayout location={location}>
      <div style={{ padding: 24 }}>
        <h1>Calculator Page</h1>
      </div>
    </MainLayout>
  );
};

export default Calculator;
