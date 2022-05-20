<template>
  <Carousel :itemsToShow="1" :autoplay="3200"  :wrapAround="true" :pauseAutoplayOnHover="true">
    <Slide key="1">
      <div class="carousel__item">
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
    </Slide>
    <Slide key="2">
      <div class="carousel__item">
      <div class="menu-group">
            <!-- Menu One -->
                <div class="menu-group-member">
                    <div class="menu-title d-flex">
                        Today Freshly Brewed One
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
                        Café AU LAIT One
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
                        Today Freshly Brewed One
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
                        Café AU LAIT One
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
    </Slide>


    <Slide key="3">
      <div class="carousel__item">
      <div class="menu-group">
            <!-- Menu One -->
                <div class="menu-group-member">
                    <div class="menu-title d-flex">
                        Today Freshly Brewed Two
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
                        Café AU LAIT Two
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
                        Today Freshly Brewed Two
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
                        Café AU LAIT Two
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
    </Slide>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'AutoMenuplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
});
</script>
<style scoped>
.line{
    display: block;
    border-bottom: 1px solid  #85726F;
    width: 100%;

}
.menu-group{
    display: block;
    margin-top: 40px;
}
.menu-group-member{
    padding: 20px 0;
}
.menu-title{
    font-family: 'Roboto', sans-serif;
    color: #4A302C;
    display: flex;
    text-overflow: ellipsis; 
    overflow: hidden; 
    white-space: nowrap;

}
.menu-text{
    /* margin-top: 8px 0; */
    font-family: 'Roboto', sans-serif;
    color: #E68100;
    width: 50%;
    padding-top: 15px;
    text-align: left;

}
.menu-btn{
    background-color: #FFFCF9;
    color: #4A302C;
    font-family: 'Roboto', sans-serif;
    border: 1px solid #4A302C;
    width: 10rem;
    padding: 10px;
    margin: 30px 0;
    align-content: ;
}

</style>