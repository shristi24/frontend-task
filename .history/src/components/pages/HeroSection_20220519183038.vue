<template>
  <section class="hero container-fluid">
    <center>
      <div class="hero-content">
        <h1>From Crop to Cup</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur
          eos, consequuntur animi molestias maiores laborum eveniet perspiciatis
          voluptatibus totam dolorum! Odit fugit quasi deleniti sint unde,
          facilis quidem sit.
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
    height: 93vh;
    width: 100%;
    background: url(@/assets/edited.png) center no-repeat;
}
.hero-content{
    height: 40vh;
    width: 40%;
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