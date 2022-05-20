<template>
  <section class = "drinks-menu container-fluid">
        <img src="@/assets/menu/crossaint.png" alt="crossaint" class="crossaint">

    <div class="container">
    <div class="row">
        <!--Right Content-->
        <div class="col left-content d-flex justify-content-center align-items-center">
            <img src="@/assets/merge.png" alt="Merge" class="grouped">
        </div>
        <!-- Left content -->
        <div class="col my-5 right-content">
            <img src="@/assets/sack.png" alt="sack" class="sack-img">

            <div class="menu-head">
                <h3>DRINKS</h3>
                <hr>
            </div>
            <menu-carousel/>
            
    </div>
    </div>
    </div>
</section>
</template>

<script>
import MenuCarousel from '@/components/MenuCarousel.vue'
export default {
    name: "MenuSection",
    components: {
    MenuCarousel,
  },
}
</script>

<style scoped>
.drinks-menu{
    
    background-color: #FFFCF9;
    overflow-x: hidden;
}
.crossaint{
    height: 200px;
    position: absolute;
    left: -8px;
}
.grouped{
    height: 300px;
}
h3{
    font-family: 'Roboto Slab', serif;
    font-weight: 500;
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
.right-content{
    position: relative;
}


.sack-img{
    position: absolute;
    right: -47%;
    width: 500px;
    height: 600px;
    top: -23%;
}

</style>