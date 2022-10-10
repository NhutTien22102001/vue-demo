import { type, getStorage } from "./localStore";

const cartStore = JSON.parse(getStorage(type.cart));

const counter = () => {
  if (!cartStore) return;
  let numArr = [];
  cartStore.map((e) => numArr.push(e.quantity));
  return numArr.reduce((e, i) => e + i);
};

export { counter, cartStore };
