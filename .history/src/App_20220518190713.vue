<template>
  <div class="container">
    <Header />
    <Home />
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue'
import Home from ''
export default {
  name: 'App',
  components: {
    Header
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
