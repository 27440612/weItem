import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Hmpage from "./views/w-Hmpage.vue"
import Search from "./views/w-Search.vue"
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
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
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
    }
  ]
});
