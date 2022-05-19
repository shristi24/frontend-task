<template>
  <section class="testimonials">
<div class="testimonials-head d-flex flex-column align-items-center py-5" >
    <h3>FEEL THE VIBE OF OUR CUSTOMERS</h3>
    <hr>
    </div>
    <div class="testimonial-content container d-flex">
        <div class="row">
            <div class="col">
                <div class="card card-one">
                <div class="card-content">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <div class="row">
                    <div class="col-sm-3">
                        <img src="@/assets/user1.png" alt="UserOne">
                    </div>
                    <div class="col-sm-9 d-flex align-items-center">
                        Jane Doe
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="col">
                <div class="card card-two">
                <div class="card-content">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <div class="row">
                        <div class="col-sm-3">
                        <img src="@/assets/user2.png" alt="UserOne">
                    </div>
                    <div class="col-sm-9 d-flex align-items-center">
                        Jane Doe
                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
        

        <div class="col">
                <div class="card card-three">
                <div class="card-content">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <div class="row">
                        <div class="col-sm-3">
                        <img src="@/assets/user1.png" alt="UserOne">
                    </div>
                    <div class="col-sm-9 d-flex align-items-center">
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
export default {
name: "TestimonailSection"
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
.card::before{
    position: absolute;
    border: 1px solid #4A302C;
}
.card-content{
    padding: 40px;
}
p{
    font-family: 'Roboto', sans-serif;
    color: #4A302C;

}

</style>