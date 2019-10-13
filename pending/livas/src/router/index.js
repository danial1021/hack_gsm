import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import pro_book from "@/views/pro_book";
import edu_facility from "@/views/edu_facility";
import university from "@/views/university";
import corpor from "@/views/corpor";
import cont from "@/views/cont";
import con_semi from "@/views/con_semi";
import term from "@/views/term";
import war from "@/views/war";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/pro_book",
      component: pro_book
    },
    {
      path: "/edu_facility",
      component: edu_facility
    },
    {
      path: "/university",
      component: university
    },
    {
      path: "/corpor",
      component: corpor
    },
    {
      path: "/cont",
      component: cont
    },
    {
      path: "/con_semi",
      component: con_semi
    },
    {
      path: "/term",
      component: term
    },
    {
      path: "/war",
      component: war
    }
  ]
});
