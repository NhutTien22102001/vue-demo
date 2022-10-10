<template>
  <div class="container">
    <div class="item">
      <div class="item-box">
        <span>{{ product.title }}</span>
        <figure class="image-box"><img :src="product.image" alt="" /></figure>
        <span>{{ product.price }} $</span>
        {{ count }}
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
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DetailComponent",

  computed: {
    ...mapState(["loading", "data"]),
    product() {
      return this.data.product;
    },
  },
  methods: {
    addCart(e) {
      this.$store.dispatch("addCart", e);
    },
  },
  mounted() {
    this.$store.dispatch("getDetail", this.$route.params.id);
  },
};
</script>

<style scoped>
.item {
  max-width: 400px;
  min-height: 300px;
  box-shadow: 0 0 12px rgb(15 61 145 / 12%);
  border-radius: 10px;
  cursor: pointer;
  margin: auto;
  margin-top: 50px;
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
}
</style>
