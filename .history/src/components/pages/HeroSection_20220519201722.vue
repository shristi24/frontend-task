<template>
  <section class="hero container-fluid">
    <center>
      <div class="hero-content">
        <h1>From Crop to Cup</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adips cing elit, sed diam nonummy nibh euismod tinci 
        </p>
        <button class="btn btn-outline">LEARN MORE</button>
      </div>
    </center>
  </section>
</template>

<script>
export default {
    name: "HeroSection"
};
</script>

<style scoped>

.hero{
    height: vh;
    width: 100%;
    background: url(@/assets/edited.png) center no-repeat;
}
.hero-content{
    /* height: 40vh;
    width: 40%; */
    padding-top: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
}
h1{
    font-family: 'Roboto Slab', serif;
}
p{
    font-family: 'Lato', sans-serif;
    width: 25%;
}
.btn{
    color: #fff;
    font-family: 'Roboto', sans-serif;
    border: 1px solid #fff;
    width: 10rem;
    padding: 10px;
    border-radius: 0;
}

</style>