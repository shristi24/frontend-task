import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from '../pages/Home.vue'
import About from './../pages/About.vue'
import JoinUs from './../pages/JoinUs.vue'
//import JoinUs from './../pages/JoinUs.vue'

const routes = [
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/",
    name: 'Home',
    component: Home
  },

  {
    path: "/joinus",
    name: 'JoinUs',
    component: JoinUs
  }
]
const router = new VueRouter({routes})

export default router;
