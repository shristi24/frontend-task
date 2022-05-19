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
.testimonials{
    height: 60vh;
    width: 100%;
    background-color: #E5DACA;
}
.location{
    height: 40vh;
    width: 100%;
    background-color: #F4EADC;
}
.location-text{
    /* margin-top: 8px 0; */
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
.s{
    height: 60vh;
    width: 100%;
    background-color: #E5DACA;
}

</style>