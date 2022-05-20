<template>
  <section class="testimonials">
<div class="testimonials-head d-flex flex-column align-items-center py-5" >
    <h3>FEEL THE VIBE OF OUR CUSTOMERS</h3>
    <hr>
    </div>
    <div class="testimonial-content container py-3">
        <vue-slick-c
        <div class="row">
            <div class="col">
                <div class="card">
                <div class="card-content">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <div class="row">
                    <div class="col-sm-2">
                        <img src="@/assets/user1.png" alt="UserOne">
                    </div>
                    <div class="col-sm-10 d-flex align-items-center">
                        Jane Doe
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="col">
                <div class="card active">
                <div class="card-content">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <div class="row">
                        <div class="col-sm-2">
                        <img src="@/assets/user2.png" alt="UserTwo">
                    </div>
                    <div class="col-sm-10 d-flex align-items-center">
                        Jane Doe
                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
        

        <div class="col">
                <div class="card">
                <div class="card-content">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <div class="row">
                        <div class="col-sm-2">
                        <img src="@/assets/user3.png" alt="UserThree">
                    </div>
                    <div class="col-sm-10 d-flex align-items-center">
                        Jane Doe
                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
        </div>
       
        
        
    </div>
</section>

</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
name: "TestimonailSection",
components: {VueSlickCarousel}
}
</script>

<style scoped>
.testimonials{
    background-color: #FFFCF9;
}
h3{
    font-family: 'Roboto Slab', serif;
    color: #4A302C;
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
.card{
    position: relative;
    background-color: #FFFCF9;
    border: none;
}
.card.active{
    border-radius: 0;
    border: 1px solid #4A302C;

}
.card.active::before{
    position: absolute;
    content: "\201D";
    padding: 0 12px;
    left: 15px;
    top: -25px;
    font-size: 3rem;
    font-weight: 800;
    font-family: auto;
    background: #FFFCF9;
   
}

.card-content{
    padding: 40px;
}
p{
    font-family: 'Roboto', sans-serif;
    color: #4A302C;

}
img{
    width: 50px;
}
.testimonial-content{
    margin-bottom: 40px;
}

</style>