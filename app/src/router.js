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
import pay from './views/pay'
import benefit from './views/benefit'
import scroll from './components/scroll'
import aaa from './views/aaa'
import hbred from './views/hbred'
import historyhb from './views/historyhb'
import exchange from './views/exchange'
import commend from './views/commend'
import coupon from './views/coupon'
import myjifen from './views/myjifen'
import scoreinfo from './views/scoreinfo'
import confirmOrder from './views/confirmOrder.vue'// 确认订单
import chooseaddress from './views/chooseAddress.vue'// 选择地址
import addaddress from './views/addAddress.vue' //添加地址
import kouwei from './views/kouwei.vue'//订单备注
import invoice from './views/invoice.vue' //订单的发票
import Select_address2 from './views/Select_address2'
import bbb from './views/bbb'
import elmvips from './views/elmvips'
import payment from './views/payment'
import vipduihuan from './views/vipduihuan'
import vippiao from './views/vippiao'
import abc from './views/abc'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/abc',
      name: 'abc',
      component: abc
    },
    {
      path: '/aaa',
      name: 'aaa',
      component: aaa
    },
    {
      path: '/bbb',
      name: 'bbb',
      component: bbb
    },
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
    {
      path:'/pay',
      name:'pay',
      component:pay,
    },
    {
      path:'/benefit',
      name:'benefit',
      component:benefit,
    },
    {
      path:'/scroll',
      name:'scroll',
      component:scroll,
    },
    {
      path:'/hbred',
      name:'hbred',
      component:hbred,
    },
    {
      path:'/historyhb',
      name:'historyhb',
      component:historyhb,
    },
    {
      path:'/exchange',
      name:'exchange',
      component:exchange,
    },
    {
      path:'/commend',
      name:'commend',
      component:commend,
    },
    {
      path:'/coupon',
      name:'coupon',
      component:coupon,
    },
    {
      path:'/myjifen',
      name:'myjifen',
      component:myjifen,
    },
    {
      path:'/scoreinfo',
      name:'scoreinfo',
      component:scoreinfo,
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: invoice
    },
    {
      path: '/kouwei',
      name: 'kouwei',
      component: kouwei
    },
    {
      path: '/addaddress',
      name: 'addaddress',
      component: addaddress
    },
    {
      path: '/chooseaddress',
      name: 'chooseaddress',
      component: chooseaddress
    },
    {
      path: '/confirmOrder',
      name: 'confirmOrder',
      component: confirmOrder
    },
    {
      path:'/select_address2',
      name:'select_address2',
      component:Select_address2,
    },
    {
      path:'/elmvips',
      name:'elmvips',
      component:elmvips,
    },
    {
      path:'/payment',
      name:'payment',
      component:payment,
    },
    {
      path:'/vipduihuan',
      name:'vipduihuan',
      component:vipduihuan,
    },
    {
      path:'/vippiao',
      name:'vippiao',
      component:vippiao,
    },
  ]
})
