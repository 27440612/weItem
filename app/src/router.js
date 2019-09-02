import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
<<<<<<< HEAD
import logon from "./views/logon.vue";
=======
import login from "./views/login.vue";
>>>>>>> 5b0452b351031056ab3aab64a2cb589dc14518c7

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
<<<<<<< HEAD
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
=======
      name: "login",
      component: login
>>>>>>> 5b0452b351031056ab3aab64a2cb589dc14518c7
    }
//  {
//    path: "/login",
//    name: "login",
//    component: login
//  }
  ]
});
