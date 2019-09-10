import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "lib-flexible";
import 'lib-flexible/flexible'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
axios.defaults.withCredentials = true;
import 'lib-flexible'
import 'swiper/dist/css/swiper.css';
import '../font/iconfont.css'
import '../font/iconfontLyj.css'


import animate from 'animate.css'
Vue.use(animate);



Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
