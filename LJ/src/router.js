import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import City from './views/City'
import Login from './views/Login'
import Personal from './views/Personal'
import Food from './views/Food'
import Order from './views/Order'
import Search from './views/Search'
import Usermsg from './views/Usermsg'
import Changename from './views/Changename'
import Address from './views/Address'
import Add_address from './views/Add_address'
import Select_address from './views/Select_address'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city/:id',
      name: 'city',
      component: City
    },
    {
      path:'/personal',
      name:'personal',
      component:Personal,
    },
    {
      path:'/login',
      name:'login',
      component:Login,
    },
    {
      path:'/food',
      name:'food',
      component:Food,
    },
    {
      path:'/order',
      name:'order',
      component:Order,
    },
    {
      path:'/search',
      name:'search',
      component:Search,
    },
    {
      path:'/usermsg',
      name:'usermsg',
      component:Usermsg,
    },
    {
      path:'/changename',
      name:'changename',
      component:Changename,
    },
    {
      path:'/address',
      name:'address',
      component:Address,
    },
    {
      path:'/add_address',
      name:'add_address',
      component:Add_address,
    },
    {
      path:'/select_address',
      name:'select_address',
      component:Select_address,
    },
  ]
})
