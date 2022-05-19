<template>
  <header>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <router-link  to="/" class="nav-list logo">
          <img src="../../assets/logo.png" alt="LOGO" style="height: 45px">
          </router-link>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
      <ul class="d-flex nav-menu">
        <li>
          <router-link to="/menu" class="nav-list">Menu</router-link>
        </li>
        <li>
          <router-link to="" class="nav-list">Services</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-list">About Us</router-link>
        </li>
        <li>
          <router-link to="" class="nav-list">Locations</router-link>
        </li>
        <li>
          <router-link to="" class="nav-list">Franchise</router-link>
        </li>
        <li>
          <router-link to="" class="nav-list">Contact Us</router-link>
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
  text-align: center;
}
.nav-list{
  text-decoration: none;
  color: #4A302C;
  padding: 0 12px;

}

</style>