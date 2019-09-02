import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
<<<<<<< HEAD
import 'lib-flexible/flexible'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

axios.defaults.withCredentials = true;
=======
import 'lib-flexible'
import 'swiper/dist/css/swiper.css';
import '../font/iconfont.css'



>>>>>>> 5b0452b351031056ab3aab64a2cb589dc14518c7

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
