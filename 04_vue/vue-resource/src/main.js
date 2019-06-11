import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = "http://localhost:8080/Testtt/vue/"
Vue.http.interceptors.push((request,next)=>{
	// console.log(request);
	next(
		(param)=>{
			// param.json().then(data=>console.log(data))
		}
	);
})
new Vue({
  el: '#app',
  render: h => h(App)
})
