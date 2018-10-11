import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Table, Badge, Button } from 'antd';
import MainLayout from '../../components/MainLayout/MainLayout';
import { numberWithCommas } from '../../utils/numbers';

class Investors extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'investors/fetch', payload: {} });
  }

  render() {
    const { transactions, loading, location } = this.props;
    const columns = [
      {
        title: 'description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'time',
        dataIndex: 'time',
        key: 'time',
      },
      {
        title: 'VND',
        dataIndex: 'VND',
        key: 'vnd',
        render: (t, r) => <span>{`${numberWithCommas(r.VND)} VND`}</span>,
      },
      {
        title: 'status',
        dataIndex: 'status',
        key: 'status',
        render: (t, r) => <span><Badge status={r.status === 'Confirmed' ? 'success' : 'default'} />{t}</span>,
      },
    ];

    return (
      <MainLayout location={location}>
        <div style={{ padding: 24 }}>
          <h1>Transactions</h1>
          <Button type="primary" size="large" style={{ margin: '16px 0' }} icon="shopping-cart">
            Buy token
          </Button>
          <Table
            loading={loading}
            rowKey={record => record.description}
            columns={columns}
            dataSource={transactions}
          />
        </div>
      </MainLayout>
    );
  }
}

const mapStateToProps = ({ loading, investors }) => {
  return {
    loading: loading.models.investors,
    ...investors,
  };
};

export default connect(mapStateToProps)(Investors);
