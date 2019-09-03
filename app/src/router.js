import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
<<<<<<< HEAD
import Hmpage from "./views/w-Hmpage.vue"
import Search from "./views/w-Search.vue"
=======
import logon from "./views/logon.vue";
import login from "./views/login.vue";
import amend from "./views/Amend.vue";

>>>>>>> 4f88dc06ab31c2951facaf98b2f630d4e6ae9f04
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/logon",
      name: "logon",
      component: logon
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
<<<<<<< HEAD
      path: "/w-Hmpage",
      name: "w-Hmpage",
      component: Hmpage,
      props:route=>({name:route.query})
      // 在首页暴露  跳转到Search接受
    },
    {
      path: "/w-Search",
      name: "w-Search",
      component: Search
=======
      path: "/login",
      name: "login",
      component: login
    },{
    	path:"/amend",
     name:"amend",
     component:amend
>>>>>>> 4f88dc06ab31c2951facaf98b2f630d4e6ae9f04
    }
  ]
});
