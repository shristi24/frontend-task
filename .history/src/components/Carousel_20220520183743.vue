<template>
  <Carousel :itemsToShow="3.95" :wrapAround="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    ...
  </Carousel>
</template>