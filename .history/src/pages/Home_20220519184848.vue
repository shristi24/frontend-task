<template>
<!-- HERO SECTION  -->
<hero-section/>

<!-- DRINKS MENU SECTION  -->
<menu-section/>

<!-- Service Section  -->
<service-section></service-section>
<!-- TESTIMONIALS SECTION  -->
<section class="testimonials">
<div class="testimonials-head d-flex flex-column align-items-center" >
    <h3>FEEL THE VIBE OF OUR CUSTOMERS</h3>
    <hr>
    </div>
    <div class="testimonial-content">
        
    </div>
</section>

<!-- FIND US SECTION  -->
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

<!-- SUBSCRIBE SECTION  -->
<section class="subscribe py-5">
    <div class="location-head d-flex flex-column align-items-center" >
    <h1>#javanepal</h1>
    <hr>
    <p>Liked Our Coffee? Share your moments with us. Follow us on Instagram.</p>

    </div>
    <!-- CARD CONTENT  -->
    <div class="subscribe-content container">
    <div class="row">
        <div class="col">
            <div class="card">
                <img src="../assets/subscribe/1.png" alt="1st picture">
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="../assets/subscribe/2.png" alt="1st picture">
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="../assets/subscribe/3.png" alt="1st picture">
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="../assets/subscribe/asset-1.png" alt="1st picture">
            </div>
        </div>
    </div>
    </div>
</section>
  
</template>

<script>
import HeroSection from '@/components/pages/HeroSection'
import MenuSection from '@/components/pages/MenuSection.vue'

export default {
    components: {
        HeroSection,
        MenuSection
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slabwght@300,500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');



.testimonials{
    height: 60vh;
    width: 100%;
    background-color: #FFFCF9;
}
.location{
    height: 40vh;
    width: 100%;
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
.subscribe{
    width: 100%;
    background-color: #FFFCF9;
}
.card{
    display: flex;
    justify-content: space-evenly;
}
img{
    width: 100%;
}
</style>