<template>
  <div class="container">
    <h1 v-if="!cartData.length">No item in cart</h1>
    <div v-if="cartData.length" class="cart-list">
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
        <tr v-for="(cart, index) in cartData" v-bind:key="index">
          <td>{{ cart.product }}</td>
          <td>{{ cart.quantity }}</td>
          <td>{{ cart.price }} $</td>
          <td>{{ (cart.price * cart.quantity).toFixed(0) }} $</td>
          <td>
            <button :disabled="cart.quantity === 1" @click="minus(index)">
              -
            </button>
          </td>
          <td><button @click="plus(index)">+</button></td>
          <td><button @click="remove(index)">X</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CartComponent",
  computed: {
    ...mapState(["data"]),

    cartData() {
      return this.data.cart;
    },
  },
  methods: {
    plus(i) {
      this.$store.dispatch("plusItem", i);
    },
    minus(i) {
      this.$store.dispatch("minusItem", i);
    },
    remove(i) {
      this.$store.dispatch("removeItem", i);
    },
  },
};
</script>

<style scoped>
.cart-list {
  padding: 50px 0px;
}
table {
  border-collapse: collapse;
  width: 100%;
}
tr th {
  text-align: left;
}

th,
td {
  padding: 15px 10px;
}

td button {
  width: 100%;
}
</style>
