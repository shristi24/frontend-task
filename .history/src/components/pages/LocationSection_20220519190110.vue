<template>
  <section class="location">
    <div class="location-head d-flex flex-column align-items-center" >
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
    
    background-color: #F4EADC;
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
    margin-top: 30px;
}
</style>