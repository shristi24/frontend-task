<template>
<!-- HERO SECTION  -->
<hero-section/>

<!-- DRINKS MENU SECTION  -->
<menu-section/>

<!-- Service Section  -->
<service-section/>

<!-- TESTIMONIALS SECTION  -->
<testimonial-section/>

<!-- FIND US SECTION  -->

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
import ServiceSection from '@/components/pages/ServiceSection.vue'
import TestimonialSection from '@/components/pages/TestimonialSection.vue'

export default {
    components: {
        HeroSection,
        MenuSection,
        ServiceSection,
        TestimonialSection
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slabwght@300,500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');





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