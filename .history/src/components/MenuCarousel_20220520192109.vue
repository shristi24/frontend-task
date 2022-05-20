<template>
  <Carousel :itemsToShow="1" :wrapAround="true">
    <Slide :key="slide">
      <div class="carousel__item">
      
      </div>
    </Slide>
    <Slide :key="slide">
      <div class="carousel__item">
      
      </div>
    </Slide>


    <Slide :key="slide">
      <div class="carousel__item">
      
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
