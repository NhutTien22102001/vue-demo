import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import { cartStore } from "../utils/cart";

Vue.use(Vuex);

const state = {
  data: {
    products: [],
    product: {},
    cart: cartStore || [],
  },
  loading: false,
};
const store = new Vuex.Store({
  state,
  getters: {
    count(state) {
      let cartArr = state.data.cart;
      if (!cartArr.length) return 0;
      let numArr = [];
      cartArr.map((e) => numArr.push(e.quantity));
      return numArr.reduce((e, i) => e + i);
    },
  },
  mutations,
  actions,
});

export default store;
