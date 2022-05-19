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
        <div class="col my-5">
            
            <div class="menu-head">
                <h3>DRINKS</h3>
                <hr>
            </div>
            <div class="menu-group">
            <!-- Menu One -->
                <div class="menu-group-member">
                    <div class="menu-title">
                        Today Freshly Brewed
                    </div>
                    <div class="menu-text">
                        Be Bold, Ask for brewed coffee. No milk, no sugar, nothing gets in the way of you and the pure flavor.
                    </div>
                </div>
            <!-- Menu Two -->
                <div class="menu-group-member">
                    <div class="menu-title">
                        Café AU LAIT
                    </div>
                    <div class="menu-text">
                    Freshly Brewed Coffee with Milk.
                    </div>
                </div>
            <!-- Menu Three -->
                <div class="menu-group-member">
                    <div class="menu-title">
                        Today Freshly Brewed
                    </div>
                    <div class="menu-text">
                        Be Bold, Ask for brewed coffee. No milk, no sugar, nothing gets in the way of you and the pure flavor.
                    </div>
                </div>
            
            <!-- Menu Four -->
                <div class="menu-group-member">
                    <div class="menu-title">
                        Café AU LAIT
                    </div>
                    <div class="menu-text">
                    Freshly Brewed Coffee with Milk.
                    </div>
                </div>
            
    <button class="menu-btn btn-outline">VIEW FULL MENU</button>
    </div>  
    </div>
    </div>
    
</section>
<section class = "services container-fluid py-5">
    <div class="services-head d-flex flex-column align-items-center" >
        <h3>SERVICES</h3>
        <hr>
    </div>
    <div class="service-content container py-5">
        <!-- Row One  -->
        <div class="row row1">
            <div class="col">
                <div class="card" >
                    <div class="card-content">
                    <p><img src="../assets/service/11.png" alt="11" style="height: 100px; width: 100px;"></p>
                    <h5>Nepali Coffee Beans</h5>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card" >
                    <div class="card-content">
                        <img src="../assets/service/12.png" alt="12" style="height: 100px; width: 100px;">
                        <h5>Coffee Equipment</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card" >
                    <div class="card-content">
                        <img src="../assets/service/13.png" alt="12" style="height: 100px; width: 100px;">
                        <h5>Barista Training</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor.</p>
                    </div>
                </div>
            </div>
            
        </div>
        <!-- ROW TWO  -->
            <div class="row row2">
                <div class="col">
                <div class="card" >
                    <div class="card-content">
                        <img src="../assets/service/13.png" alt="12" style="height: 100px; width: 100px;">
                        <h5>Barista Training</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor.</p>
                    </div>
                </div>
            </div>
            </div>
    </div>
    
</section>
<section class="testimonials">
<div class="testimonials-head d-flex flex-column align-items-center" >
    <h3>FEEL THE VIBE OF OUR CUSTOMERS</h3>
    <hr>
    </div>
</section>

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
    padding: 10px;
}

.drinks-menu{
    height: 100vh;
    width: 100%;
    background-color: #FFFCF9;
}
h3{
    font-family: 'Roboto Slab', serif;
    color: #4A302C;
    margin-top: 40px;
}
hr{
    width: 70px;
    border: 3px solid #E68100;
    margin: 0;
    /* height: 7px;
    background: #E68100; */
}
.menu-group{
    margin-top: 60px;
}
.menu-group-member{
    padding: 10px 0;
}
.menu-tile{
    font-family: 'Roboto', sans-serif;
    color: #4A302C;

}
.menu-text{
    /* margin-top: 8px 0; */
    font-family: 'Roboto', sans-serif;
    color: #E68100;
}
.menu-btn{
    background-color: #FFFCF9;
    color: #4A302C;
    font-family: 'Roboto', sans-serif;
    border: 1px solid #4A302C;
    width: fit-content;
    padding: 10px;
    margin-top: 30px;
}
.services{
    height: 100vh;
    width: 100%;
    background-color: #FEF8F1;
}
/* .services-head{
    display: flex;
    flex-direction: column;
    justify-content: center;
} */
.col{
    display: flex;
    justify-content: center;
    align-content: center;
}
.row1 .card{
    height: 15rem;
    width: 18rem;
    background-color: #FEF8F1;
    border: none;
}
.row1 .card-content{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.row1 .card-content p{
    text-align: center;
}
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
    background-color: #FFFCF9;
    color: #4A302C;
    font-family: 'Roboto', sans-serif;
    border: 1px solid #4A302C;
    width: fit-content;
    padding: 10px;
    margin-top: 30px;
}
.subscribe{
    height: 70vh;
    width: 100%;
    background-color: #FFFCF9;
}
.card{
    width: 15vw;
    height: 20px;
    display: flex;
    justify-content: space-evenly;
}
img{
    width: 100%;
}
</style>