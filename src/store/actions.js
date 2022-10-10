import { loadingActions, dataActions, cartActions } from "./type";
import { processData } from "./helpers";
import apiConfig from "../constants/api";
import { setStorage, getStorage, type } from "../utils/localStore";

const { START_LOADING, FINISH_LOADING } = loadingActions;
const { REQUEST_DATAS, REQUEST_DATA } = dataActions;
const { ADD_CART } = cartActions;
const { product } = apiConfig;

let cartStore = JSON.parse(getStorage(type.cart));

const actions = {
  async getData({ commit }) {
    commit(START_LOADING, REQUEST_DATAS);
    try {
      let dataResponse = await processData(product.getAll);
      commit(REQUEST_DATAS, dataResponse);
    } catch (err) {
      commit(REQUEST_DATAS, [err]);
    } finally {
      commit(FINISH_LOADING, REQUEST_DATAS);
    }
  },

  async getDetail({ commit }, id) {
    commit(START_LOADING, REQUEST_DATA);
    try {
      let dataResponse = await processData(`${product.getAll}/${id}`);
      commit(REQUEST_DATA, dataResponse);
    } catch (err) {
      commit(REQUEST_DATA, [err]);
    } finally {
      commit(FINISH_LOADING, REQUEST_DATA);
    }
  },

  addCart({ commit }, data) {
    try {
      let newCart = {
        ...data,
        quantity: 1,
      };

      if (cartStore != null) {
        let checkCart = cartStore.findIndex((e) => e.id === data.id);
        if (checkCart >= 0) {
          cartStore[checkCart].quantity += 1;
          cartStore = [...cartStore];
        } else {
          cartStore = [...cartStore, newCart];
        }
      } else {
        cartStore = [newCart];
      }
      setStorage(type.cart, cartStore);
      commit(ADD_CART, cartStore);
    } catch (err) {
      throw new Error(err);
    }
  },

  plusItem({ commit }, index) {
    cartStore[index].quantity++;
    setStorage(type.cart, cartStore);
    commit(ADD_CART, cartStore);
  },

  minusItem({ commit }, index) {
    if (cartStore[index].quantity === 1) return;
    cartStore[index].quantity--;
    setStorage(type.cart, cartStore);
    commit(ADD_CART, cartStore);
  },

  removeItem({ commit }, index) {
    cartStore = cartStore.filter((_, i) => i != index);
    setStorage(type.cart, cartStore);
    commit(ADD_CART, cartStore);
  },
};

export default actions;
