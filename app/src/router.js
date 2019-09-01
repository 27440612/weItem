import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import login from "./views/login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: login
    }
//  {
//    path: "/login",
//    name: "login",
//    component: login
//  }
  ]
});
