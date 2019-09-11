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
import repassword from './views/repassword'
import shopping from './views/shopping'
import serve from './views/Serve'
import servelink from './views/servelink'
import Balancelink from './views/Balancelink'
import balance from './views/balance'
import jfshopping from './views/jf_shopping'
import updownApp from './views/updownApp'
import swipershow from './views/swipershow'
import elmvip from './views/elmvip'
// import alert from './components/alert'
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
    {
      path:'/repassword',
      name:'repassword',
      component:repassword,
    },
    {
      path:'/shopping',
      name:'shopping',
      component:shopping,
    },
    {
      path:'/serve',
      name:'serve',
      component:serve,
    },
    {
      path:'/servelink',
      name:'servelink',
      component:servelink,
    },
    {
      path:'/balancelink',
      name:'balancelink',
      component:Balancelink,
    },
    {
      path:'/balance',
      name:'balance',
      component:balance,
    },
    {
      path:'/jfshopping',
      name:'jfshopping',
      component:jfshopping,
    },
    {
      path:'/updownApp',
      name:'updownApp',
      component:updownApp,
    },
    {
      path:'/swipershow',
      name:'swipershow',
      component:swipershow,
    },
    {
      path:'/elmvip',
      name:'elmvip',
      component:elmvip,
    },
  ]
})
