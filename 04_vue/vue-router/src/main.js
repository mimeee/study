import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './r.js'
Vue.use(VueRouter);

const router = new VueRouter({
  routes, // short for `routes: routes`
  
})
// router.beforeEach((to,from,next)=>{
//   	console.log(to);
//   	console.log(from);
//   	console.log(next);
//   })


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
