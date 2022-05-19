import Vue from "vue";
import {createRouter, createWebHistory} from "vue-router";

imp
import Home from '../components/Home.vue'
// import Home from '../components/Home.vue'


const routes = [
    

//   {
//     path: "/about",
//     name: "About",
//     component: About
//   },
  {
    path: '',
    component: PublicView,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
    ]
  },

//   {
//     path: "/joinus",
//     name: 'JoinUs',
//     component: JoinUs
//   }
]
const router = new createRouter({routes, history:createWebHistory()})

export default router;
