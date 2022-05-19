<template>
  
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
                    <p><img src="../assets/service/11.png" alt="11" style="height: 50px; width: 50px;"></p>
                    <h5 class="py-2">Nepali Coffee Beans</h5>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card" >
                    <div class="card-content">
                        <img src="../assets/service/12.png" alt="12" style="height: 45px; width: 45px;">
                        <h5 class="py-2">Coffee Equipment</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card" >
                    <div class="card-content">
                        <img src="../assets/service/13.png" alt="12" style="height: 50px; width: 50px;">
                        <h5 class="py-2">Barista Training</h5>
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
                        <img src="../assets/service/21.png" alt="12" style="height: 50px; width: 50px;">
                        <h5 class="py-2">Barista Training</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card" >
                    <div class="card-content">
                        <img src="../assets/service/22.png" alt="12" style="height: 50px; width: 50px;">
                        <h5 class="py-2">Coffee Farm</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor.</p>
                    </div>
                </div>
            </div>
            </div>
    </div>
    
</section>

</template>

<script>
export default {
    name: ServiceSection

}
</script>

<style scoped>
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
.service-content .col{
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
.row1 .card-content h5{
    color: #4A302C;
    font-family: 'Roboto Slab', serif;
    text-align: center;
}

.row1 .card-content p{
    color: #4A302C;
    font-family: 'Roboto', sans-serif;
    text-align: center;
}
.row2 .card{
    height: 15rem;
    width: 18rem;
    background-color: #FEF8F1;
    border: none;
}
.row2 .card-content{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.row2 .card-content h5{
    color: #4A302C;
    font-family: 'Roboto Slab', serif;
    text-align: center;
}

.row2 .card-content p{
    color: #4A302C;
    font-family: 'Roboto', sans-serif;
    text-align: center;
}
</style>