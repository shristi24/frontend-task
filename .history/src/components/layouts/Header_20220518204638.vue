<template>
  <header>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <router-link  to="">LOGO</router-link>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
      <ul class="d-flex" role="search">
        <li>
          <router-link to="/menu">Menu</router-link>
        </li>
        <li>
          <router-link to="">Services</router-link>
        </li>
        <li>
          <router-link to="/about">About Us</router-link>
        </li>
        <li>
          <router-link to="">Locations</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style socped>
ul li{
  list-style: none;
  justify-content: space-between;
}

</style>