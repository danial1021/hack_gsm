import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/Home.vue'
// import HelloWorld from "@/components/HelloWorld";
// import pro_book from "@/views/pro_book";
// import edu_facility from "@/views/edu_facility";
// import university from "@/views/university";
// import corpor from "@/views/corpor";
// import cont from "@/views/cont";
// import con_semi from "@/views/con_semi";
// import term from "@/views/term";
// import war from "@/views/war";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: () => import('./views/Home.vue')
    },
    {
      path: "/pro_book",
      name: "pro_book",
      component: () => import('./views/pro_book.vue')
    },
    {
      path: "/edu_facility",
      name: "edu_facility",
      component: () => import('./views/edu_facility.vue')
    },
    {
      path: "/university",
      name: "university",
      component: () => import('./views/university.vue')
    },
    {
      path: "/corpor",
      name: "corpor",
      component: () => import('./views/corpor.vue')
    },
    {
      path: "/cont",
      name: "cont",
      component: () => import('./views/cont.vue')
    },
    {
      path: "/con_semi",
      name: "con_semi",
      component: () => import('./views/con_semi.vue')
    },
    {
      path: "/term",
      name: "term" ,
      component: () => import('./views/term.vue')
    },
    {
      path: "/war",
      name: "war",
      component: () => import('./views/war.vue')
    }
  ]
})
