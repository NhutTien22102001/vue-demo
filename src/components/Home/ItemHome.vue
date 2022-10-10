<template>
  <div class="item">
    <router-link :to="`/detail/${product.id}`">
      <div class="item-box">
        <span>{{ product.title }}</span>
        <figure class="image-box"><img :src="product.image" alt="" /></figure>
        <span>{{ product.price }} $</span>
      </div>
    </router-link>
    <button
      @click="
        addCart({
          id: product.id,
          product: product.title,
          price: product.price,
        })
      "
    >
      add cart
    </button>
  </div>
</template>

<script>
export default {
  name: "ItemHome",
  props: ["product"],

  methods: {
    addCart(value) {
      return this.$store.dispatch("addCart", value);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.item {
  width: 100%;
  min-height: 300px;
  box-shadow: 0 0 12px rgb(15 61 145 / 12%);
  border-radius: 10px;
  cursor: pointer;
}
.item:hover {
  outline: 1px solid gray;
}
.item .item-box {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.item .item-box span {
  text-align: center;
  height: 35px;
  font-size: 12px;
  display: inline-block;
}
.item .image-box {
  height: 300px;
}
.item .image-box img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
button {
  padding: 5px;
  margin: 0 0 10px 10px;
}
</style>
