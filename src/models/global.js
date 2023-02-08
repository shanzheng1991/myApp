


export default {
  namespace: 'global',
  state: {
    NODE_ENV: process.env.NODE_ENV,
    TARO_ENV: process.env.TARO_ENV,
    navBarInfo: null
  },

  effects: {
    *getNavBarInfo(_, { call, put }) {
      const response = yield call();
      if (response) {
        yield put({
          type: 'setNavBarInfo',
          payload: response,
        });
      }
      return null
    }
  },

  reducers: {
    setNavBarInfo(state, { payload }) {
      if (payload) {
        state.navBarInfo = payload;
        return state
      }
      return null
    }
  }
};
