import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import MainLayout from '../components/MainLayout/MainLayout';
import styles from './IndexPage.css';

const IndexPage = ({ location }) => {
  return (
    <MainLayout location={location}>
      <div className={styles.banner}>
        <h1 className={styles.title}>SunVibe - Business Proposal</h1>
        <p className={styles.secondaryText}>
          Recharging the city with solar energy...
        </p>
      </div>
      <div className={styles.section}>
        <h1 className={styles.sectionTitle}>Overview</h1>
        <p className={styles.sectionText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Cumque voluptatum illum, quis nulla veniam ex possimus eos optio sunt doloremque nemo.
          Animi asperiores ipsum libero quia fugit, unde qui maiores!
        </p>
        <Button size="large" type="primary" style={{ marginTop: 24, height: 50 }}>Getting started</Button>
      </div>
      <div className={styles.section}>
        <h1 className={styles.sectionTitle}>Lorem ipsum dolor</h1>
        <p className={styles.sectionText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Cumque voluptatum illum, quis nulla veniam ex possimus eos optio sunt doloremque nemo.
          Animi asperiores ipsum libero quia fugit, unde qui maiores!
        </p>
        <Button size="large" type="primary" style={{ marginTop: 24, height: 50 }}>Foo bar</Button>
      </div>
    </MainLayout>
  );
};

export default connect()(IndexPage);
