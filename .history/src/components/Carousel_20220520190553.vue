<template>
  <Carousel :itemsToShow="1" :autoplay="2000" :wrapAround="true">
    <Slide v-for="slide in 1" :key="slide">
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
.carousel__item{
    height: 308px;
}
.carousel__viewport{
    display: flex;
    /* width: 100vw; */
    justify-content: center;
    align-items: center;
}
.card {
  position: relative;
  background-color: #fffcf9;
  border: none;
  width: 405px;
}
.card.active {
  border-radius: 0;
  border: 1px solid #4a302c;
}
.card.active::before {
  position: absolute;
  content: "\201D";
  padding: 0 12px;
  left: 15px;
  top: -25px;
  font-size: 3rem;
  font-weight: 800;
  font-family: auto;
  background: #fffcf9;
}

.card-content {
  padding:;
}
p {
  font-family: "Roboto", sans-serif;
  color: #4a302c;
}
img {
  width: 50px;
}

</style>