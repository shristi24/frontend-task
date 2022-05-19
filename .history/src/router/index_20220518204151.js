import Vue from "vue";
import {createRouter, createWebHistory} from "vue-router";

import PublicView from '../layouts/PublicView.vue'
import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'

const routes = [


  {
    path: '',
    component: PublicView,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/menu',
        name: 'Menu',
        component: Menu
      },
      {
        path: "/about",
        name: "About",
        component: About
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
