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
            <div class="menu-group">
            <!-- Menu One -->
                <div class="menu-group-member">
                    <div class="menu-title d-flex">
                        Today Freshly Brewed
                        <span class="line"></span>
                        250
                    </div>
                    <div class="menu-text">
                        Be Bold, Ask for brewed coffee. No milk, no sugar, nothing gets in the way of you and the pure flavor.
                    </div>
                </div>
            <!-- Menu Two -->
                <div class="menu-group-member">
                    <div class="menu-title">
                        Café AU LAIT
                        <span class="line"></span>
                        250
                    </div>
                    <div class="menu-text">
                    Freshly Brewed Coffee with Milk.
                    </div>
                </div>
            <!-- Menu Three -->
                <div class="menu-group-member">
                    <div class="menu-title">
                        Today Freshly Brewed
                        <span class="line"></span>
                        250
                    </div>
                    <div class="menu-text">
                        Be Bold, Ask for brewed coffee. No milk, no sugar, nothing gets in the way of you and the pure flavor.
                    </div>
                </div>
            
            <!-- Menu Four -->
                <div class="menu-group-member">
                    <div class="menu-title">
                        Café AU LAIT
                        <span class="line"></span>
                        250
                    </div>
                    <div class="menu-text">
                    Freshly Brewed Coffee with Milk.
                    </div>
                </div>
            
    <button class="menu-btn btn-outline">VIEW FULL MENU</button>
    </div>  
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