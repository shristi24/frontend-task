<template>
  <v-app>
   <Header />

    <router-view/>
    <Footer />
   
    </v-app>
</template>

<script>
import Header from '../components/layouts/Header'
import Footer from '../components/layout/Footer'

export default {
  name:'Website',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>