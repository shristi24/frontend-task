<template>
   <Header />

    <router-view/>
    <Footer />
   
</template>

<script>
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

export default {
  name:'PublicView',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>