import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
//第三方
import 'lib-flexible/flexible' 
import VueLazyload from 'vue-lazyload' 
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import './element/index.js'
import infiniteScroll from "vue-infinite-scroll";

//import {Backtop} from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
//Vue.use(Backtop);
// import style

Vue.use(infiniteScroll);
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


var EventBus = new Vue();

Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
})

Vue.config.productionTip = false
//把axios挂载到原型对象上
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://127.0.0.1:3000/'
axios.defaults.withCredentials = true
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.common['Authorization'] = 'Bearer ' + token;
  return config;
})

 
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '~public/img/lazyload/error.svg',
  loading: '~public/img/lazyload/loading.gif',
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
