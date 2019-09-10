import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Hmpage from "./views/w-Hmpage.vue"
import Search from "./views/w-Search.vue"
<<<<<<< HEAD
import logon from "./views/logon.vue";
import login from "./views/login.vue";
import amend from "./views/Amend.vue";
import swipershow from "./views/swipershow.vue";
=======
import logon from "./views/logon.vue"
import login from "./views/login.vue"
import amend from "./views/Amend.vue"
import shopping_xiang from "./views/shopping_xiang.vue"
>>>>>>> a6a3ed99307e10fe190d5d58e2b8f8614917bee9

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
      path: "/",
      name: "w-Hmpage",
      component: Hmpage,
      props:route=>({name:route.query})
      // 在首页暴露  跳转到Search接受
    },
    {
      path: "/w-Search",
      name: "w-Search",
      component: Search,
      props:route=>({name:route.query})
  	},{
      path: "/login",
      name: "login",
      component: login,
      props:route=>({name:route.params})
    },{
    	path:"/amend",
     name:"amend",
     component:amend
    },{
<<<<<<< HEAD
    	path:"/swipershow",
     name:"swipershow",
     component:swipershow
=======
    	path:"/shopping_xiang",
     name:"shopping_xiang",
     component:shopping_xiang
>>>>>>> a6a3ed99307e10fe190d5d58e2b8f8614917bee9
    }
  ]
});
