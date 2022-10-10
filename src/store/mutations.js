import { loadingActions, dataActions, cartActions } from "./type";

const { START_LOADING, FINISH_LOADING } = loadingActions;
const { REQUEST_DATAS, REQUEST_DATA } = dataActions;
const { ADD_CART } = cartActions;

const mutations = {
  [REQUEST_DATAS](state, payload) {
    state.data.products = payload;
  },

  [REQUEST_DATA](state, payload) {
    state.data.product = payload;
  },

  [START_LOADING](state, payload) {
    state.loading = { ...state.loading, [payload]: true, isLoading: true };
  },

  [FINISH_LOADING](state, payload) {
    state.loading = { ...state.loading, [payload]: false, isLoading: false };
  },

  [ADD_CART](state, payload) {
    state.data.cart = payload;
  },
};

export default mutations;
