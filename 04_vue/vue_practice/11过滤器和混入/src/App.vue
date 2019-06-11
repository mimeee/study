<template>
  <div id="app">
  	<div class="container">
  		{{ vocabulary }}
  		<hr>
  		{{ vocabulary | reserve }}
  		<hr>
  		{{ vocabulary | calc }}
  		<hr>
  		{{ reserveC }}
  		<hr>
  		{{ calcC }}
  		<hr>
  		{{ calcMix }}
  		<hr>
  		{{ reverseMix }}
	</div>
  </div>
</template>

<script>
import Vue from 'vue';
import {mixed} from './mixed.js';

Vue.filter('calc',function(value) {
	return value + "(" + value.length + ")";
})
export default {
	mixins:[mixed],
	filters:{
		reserve(value){
			
			return value.split("").reverse().join("");
		}
	},
	data(){
		return {
			vocabulary:'vocabulary'
		}
	},
	computed:{
		reserveC(){
			return this.vocabulary.split("").reverse().join("");
		},
		calcC(){
			return this.vocabulary + "(" + this.vocabulary.length + ")";
		}
	}
}
</script>

<style scoped="">
div{
	margin-top: 20px;
}
</style>
