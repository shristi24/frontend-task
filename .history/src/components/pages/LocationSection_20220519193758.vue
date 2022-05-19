<template>
  <section class="location">
    <div class="location-head d-flex flex-column align-items-center py-5" >
    <h3>FIND THE HIMALYAN JAVA NEAR YOU</h3>
    <hr>
    </div>
    <center>
    <div class="location-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptatem cupiditate cum ea! 
            In a dolorem soluta tenetur repudiandae blanditiis, fuga consequatur est natus cumque, ex iusto dicta odio ipsum.</p>
    </div>
    <button class="location-btn btn-outline">FIND US</button>
    </center>
</section>

</template>

<script>
export default {
name: "LocationSection"
}
</script>

<style scoped>
.location{
    background: url(@/assets/map.png) no-repeat ;
    background-size:contain ;
    background-position: center;
    box-shadow: inset 0 0 0 2000px rgba(0,0,0,0.5);
    background-color: #F4EADC;
}
h3{
    font-family: 'Roboto Slab', serif;
    color: #4A302C;
    font-weight: 500;
    margin-top: 40px;
}
hr{
    width: 70px;
    color: #E68100;
    margin: 0;
    opacity: 1;
     height: 3px;
    /*background: #E68100; */
}
.location-text{
    padding-top: 20px;
    text-align: center;
    width: 60%;
    font-family: 'Roboto', sans-serif;
    color: #4A302C;
}
.location-btn{
    background-color: #F4EADC;
    color: #4A302C;
    font-family: 'Roboto', sans-serif;
    border: 1px solid #4A302C;
    width: 10rem;
    padding: 10px;
    margin: 30px 0 80px;
}
</style>