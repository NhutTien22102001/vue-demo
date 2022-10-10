<template>
  <div class="container">
    <div class="filter-list">
      <input placeholder="Search items" v-model="key" type="text" />
      <div class="check-list">
        <div
          class="check-item"
          v-for="(check, index) in checkLists"
          v-bind:key="index"
        >
          <label for="">{{ check }}</label>
          <input
            v-model="checkType"
            type="checkbox"
            :name="check"
            :value="check"
          />
        </div>
      </div>
    </div>
    <h1 v-if="!products.length">No result</h1>
    <div v-if="products.length" class="list-items">
      <home-item
        v-for="(product, index) in products"
        v-bind:key="index"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HomeItem from "./ItemHome.vue";

export default {
  name: "HomeComponent",
  components: {
    HomeItem,
  },
  data() {
    return {
      key: "",
      checkLists: [
        `men's clothing`,
        `jewelery`,
        `electronics`,
        `women's clothing`,
      ],
      checkType: [
        `men's clothing`,
        `jewelery`,
        `electronics`,
        `women's clothing`,
      ],
      obj: {
        name: "",
      },
    };
  },
  computed: {
    ...mapState(["loading", "data"]),

    products() {
      let filterInput = this.data.products.filter((o) => {
        return o.title.toLowerCase().includes(this.key.toLowerCase());
      });
      let filterCheck = filterInput.filter((e) => {
        return this.checkType.includes(e.category);
      });
      return filterCheck;
    },
  },

  created() {
    this.$store.dispatch("getData");
  },
};
</script>

<style scoped>
.filter-list {
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
}
.filter-list .check-list {
  display: flex;
  align-items: center;
  gap: 20px;
}
.filter-list .check-list .check-item {
  display: flex;
  align-items: center;
}
.list-items {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 1rem;
  padding: 50px 0;
}
</style>
