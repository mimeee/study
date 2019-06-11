import Vue from 'vue'
import App from './App.vue'

export const eventbus = new Vue({
	data(){
		return {
			'keee':'keee'
		}
	}
}); 

new Vue({
  el: '#app',
  render: h => h(App)
})
