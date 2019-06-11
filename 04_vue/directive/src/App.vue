<template>
  <div id="app">
	<p v-highlight:bl.la="'ss'">
		{{ info }}
		<app-one :child = "children"></app-one>
	</p>
		<button class="btn btn-primary" @click="info = Math.random()">btn</button>
		<button class="btn btn-primary" @click="info = children = Math.random()">btn</button>
		
  </div>
</template>

<script>
import Vue from 'vue';
import appOne from './component/one.vue';
Vue.directive('highlight',{
	bind(a,b,c){
		console.log(a);
		console.log(b);
		console.log(c);
	},
	inserted(a,b,c){
		console.log(a);
		console.log(b);
		console.log(c);
	},
	// update(){
	// 	console.log('update');
	// 	alert(123);
	// },
	// componentUpdated(){

	// 	console.log('componentUpdated');
	// },
	// unbind(){

	// 	console.log('unbind');
	// }
})

export default {
	data(){
		return {
			info: "info",
			children:"ddd"
		}
	},
	components:{
		appOne
	}
}
</script>

<style>


</style>
