import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
<<<<<<< HEAD
import "lib-flexible";
import VueResourse from 'vue-resource'
=======
import 'lib-flexible/flexible'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

axios.defaults.withCredentials = true;
import 'lib-flexible'
import 'swiper/dist/css/swiper.css';
import '../font/iconfont.css'




>>>>>>> 4f88dc06ab31c2951facaf98b2f630d4e6ae9f04
Vue.config.productionTip = false;
Vue.use(VueResourse)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
