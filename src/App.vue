<template>
  <div id="app">
    <loading-skeleton :spinning="loadingState">
      <header>
        <div class="container">
          <div class="menu">
            <router-link to="/">Home</router-link>
            <router-link to="/cart">Cart({{ count }})</router-link>
          </div>
        </div>
      </header>
      <main>
        <router-view></router-view>
      </main>
    </loading-skeleton>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import LoadingSkeleton from "@/components/Constants/LoadingSkeleton";
export default {
  name: "App",
  components: {
    LoadingSkeleton,
  },
  computed: {
    ...mapState(["loading", "data"]),
    ...mapGetters(["count"]),
    loadingState() {
      return this.loading.isLoading;
    },
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  gap: 20px;
  padding-top: 30px;
}
.menu a {
  text-decoration: none;
  color: black;
  font-weight: bolder;
}
</style>
