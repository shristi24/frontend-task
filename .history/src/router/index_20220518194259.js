import Vue from "vue";
import {createRouter, createWebHistory} from "vue-router";


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
const router = new createRouter({routes, history:})

export default router;
