import Vue from "vue";
import {createRouter} from "vue-router";


import Home from '../components/Home.vue'
// import Home from '../components/Home.vue'


const routes = [
//   {
//     path: "/about",
//     name: "About",
//     component: About
//   },
  {
    path: "/",
    name: 'Home',
    component: Home
  },

//   {
//     path: "/joinus",
//     name: 'JoinUs',
//     component: JoinUs
//   }
]
const router = new CreateRouter({routes})

export default router;
