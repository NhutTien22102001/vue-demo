const type = {
  cart: "cart",
};

const jsonItems = (item) => JSON.stringify(item);

const getStorage = (key) => {
  return localStorage.getItem(key);
};

const setStorage = (key, value) => {
  localStorage.setItem(key, jsonItems(value));
};

const removeStorage = (key) => {
  return localStorage.removeItem(key);
};

export { type, getStorage, setStorage, removeStorage };
