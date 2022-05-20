<template>
  <Carousel :itemsToShow="3.95" :wrapAround="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">
        <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <div class="row">
                <div class="col-sm-2">
                  <img src="@/assets/user1.png" alt="UserOne" />
                </div>
                <div class="col-sm-10 d-flex align-items-center">Jane Doe</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card active">
            <div class="card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <div class="row">
                <div class="col-sm-2">
                  <img src="@/assets/user2.png" alt="UserTwo" />
                </div>
                <div class="col-sm-10 d-flex align-items-center">Jane Doe</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <div class="row">
                <div class="col-sm-2">
                  <img src="@/assets/user3.png" alt="UserThree" />
                </div>
                <div class="col-sm-10 d-flex align-items-center">Jane Doe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Slide>

    ...
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
});
</script>

<style scoped>
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>