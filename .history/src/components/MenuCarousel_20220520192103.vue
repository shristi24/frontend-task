<template>
  <Carousel :itemsToShow="1" :wrapAround="true">
    <Slide >
      <div class="carousel__item">
      
      </div>
    </Slide>
    <Slide v-for="slide in 3" :key="slide">
      <div class="carousel__item">
      
      </div>
    </Slide>


    <Slide v-for="slide in 3" :key="slide">
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
