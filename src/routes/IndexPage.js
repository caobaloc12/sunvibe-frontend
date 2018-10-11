import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';

const IndexPage = ({ location }) => {
  return (
    <MainLayout location={location}>
      <div className={styles.banner}>
        <h1 className={styles.title}>SunVibe - Business Proposal!</h1>
        <p className={styles.secondaryText}>
          Recharging the city with solar energy...
        </p>
      </div>
    </MainLayout>
  );
};

export default connect()(IndexPage);
