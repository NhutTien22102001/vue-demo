<template>
  <div :class="spinning ? 'spin' : ''">
    <div class="layer"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LoadingSkeleton",
  props: ["spinning"],
};
</script>

<style scoped>
.spin {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  top: 0;
  z-index: 0;
}
.spin::after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid rgb(23, 227, 23);
  border-color: rgb(23, 227, 23) transparent rgb(23, 227, 23) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
  position: absolute;
  top: 40%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.layer {
  background-color: transparent;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
}
.spin .layer {
  background-color: rgba(11, 9, 9, 0.38);
  z-index: 5;
}
</style>
