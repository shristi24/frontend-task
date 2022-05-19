<template>
<section class="hero container-fluid">
<dic class="hero-content">
    <h1>From Crop to Cup</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur eos, consequuntur animi molestias maiores 
    laborum eveniet perspiciatis voluptatibus totam dolorum! Odit fugit quasi deleniti sint unde, facilis quidem sit.</p>
    <button class="btn btn-outline">LEARN MORE</button>
</dic>
</section>
<section class = "drinks-menu container-fluid">
    <div class="row">
        <!--Right Content-->
        <div class="col">

        </div>
        <!-- Left content -->
        <div class="col">
            <div class="menu-head"></div>
            <h3>Drinks</h3>
                div.menu-
        </div>
    </div>
    
</section>
<section class = "services container-fluid">
    
</section>

  
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slabwght@300,500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
.hero{
    height: 95vh;
    width: 100%;
    background: url(../assets/edited.png) center no-repeat;
}
.drinks-menu{
    height: 100vh;
    width: 100%;
    background-color: #FFFCF9;
}
.services{
    height: 100vh;
    width: 100%;
    background-color: #FEF8F1;
}
.hero-content{
    display: flex;
    flex-direction: column;
    align-content: center;
    color: #fff;
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
    width: fit-content;
}
h3{
    font-family: 'Roboto Slab', serif;
    color: #4A302C;
}
</style>