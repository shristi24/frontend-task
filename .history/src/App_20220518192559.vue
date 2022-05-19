<template>
  <div class="container-fluid px-0">
    router
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue'
import Home from './components/Home.vue'
export default {
  name: 'App',
  components: {
    Header,
    Home
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 !important;
  padding: 0 !important;

}
</style>
