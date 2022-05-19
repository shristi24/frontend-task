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
<location-section/>

<!-- SUBSCRIBE SECTION  -->
  
</template>

<script>
import HeroSection from '@/components/pages/HeroSection'
import MenuSection from '@/components/pages/MenuSection.vue'
import ServiceSection from '@/components/pages/ServiceSection.vue'
import TestimonialSection from '@/components/pages/TestimonialSection.vue'
import LocationSection from '@/components/pages/LocationSection.vue'


export default {
    components: {
        HeroSection,
        MenuSection,
        ServiceSection,
        TestimonialSection,
        LocationSection
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