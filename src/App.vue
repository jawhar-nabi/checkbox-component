<template>
  <homeComponent />
</template>

<script>
import homeComponent from "./components/home.vue";

export default {
  name: "App",
  components: {
    homeComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  padding-top: 60px;
  background-color: #232323;
  height: 100vh;
}
</style>
