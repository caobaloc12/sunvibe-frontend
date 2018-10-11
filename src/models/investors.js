
// import * as usersService from '../services/users';

const transactions = [
  {
    avatarUrl: 'https://robohash.org/T2E.png?set=set1&size=150x150',
    time: '09/29/2018 10:26',
    description: '0x1abc2927a0',
    status: 'Confirmed',
    ETH: 1,
    VND: 5299308,
  },
  {
    avatarUrl: 'https://robohash.org/8FU.png?set=set1&size=150x150',
    time: '09/29/2018 09:52',
    description: '0x18fa8221',
    status: 'Confirmed',
    ETH: 0.1,
    VND: 529930,
  },
];

export default {
  namespace: 'investors',
  state: {
    transactions: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { put }) {
      yield put({
        type: 'save',
        payload: {
          transactions,
          total: transactions.length,
          page,
        },
      });
    },
    *reload(action, { put, select }) {
      const page = yield select(state => state.investor.page);
      yield put({ type: 'fetch', payload: { page } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/investor') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};

