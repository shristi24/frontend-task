<template>
  <section class="testimonials">
    <div class="testimonials-head d-flex flex-column align-items-center py-5">
      <h3>FEEL THE VIBE OF OUR CUSTOMERS</h3>
      <hr />
    </div>
    <div class="testimonial-content container py-3">
      <carousel />
      <div class="row">
        <div class="col"></div>

        <div class="col"></div>

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
  </section>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
export default {
  name: "TestimonailSection",
  components: {
    Carousel,
  },
};
</script>

<style scoped>
.testimonials {
  background-color: #fffcf9;
}
h3 {
  font-family: "Roboto Slab", serif;
  color: #4a302c;
  margin-top: 40px;
}
hr {
  width: 70px;
  color: #e68100;
  margin: 0;
  opacity: 1;
  height: 3px;
  /*background: #E68100; */
}
.card {
  position: relative;
  background-color: #fffcf9;
  border: none;
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
  padding: 40px;
}
p {
  font-family: "Roboto", sans-serif;
  color: #4a302c;
}
img {
  width: 50px;
}
.testimonial-content {
  margin-bottom: 40px;
}
</style>
