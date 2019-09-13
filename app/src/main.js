import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import 'lib-flexible/flexible'
import './assets/iconfont/iconfont.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'swiper/dist/css/swiper.css';

import elementUi  from 'element-ui';
import 'element-ui/lib/index'
import 'element-ui/lib/theme-chalk/index.css'
import animate from 'animate.css'

// console.log('-----------------',store)

Vue.config.productionTip = false

Vue.use(VueAxios,axios)
Vue.use(elementUi)
Vue.use(animate)

axios.defaults.withCredentials = true
Vue.prototype.$axios = axios;

new Vue({
router,
store,
axios,
VueAxios,
render: h => h(App)
}).$mount('#app')

