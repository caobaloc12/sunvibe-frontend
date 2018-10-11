import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';

const Investors = (props) => {
  const { location } = props;
  return (
    <MainLayout location={location}>
      <div style={{ padding: 24 }}>
        <h1>Investor Page</h1>
      </div>
    </MainLayout>
  );
};

const mapStateToProps = ({ loading, investors }) => {
  return {
    loading: loading.models.investors,
    ...investors,
  };
};

export default connect(mapStateToProps)(Investors);
