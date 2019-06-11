<template>
  <div id="app">
	<div>
		{{ one | endStr}}
	</div>	
	<div>
		{{ ones }}
	</div>
	<div>
		{{ two }}
	</div>
	<div>
		<button class="btn btn-danger" @click="two = Math.random()">btn</button>
		<button class="btn btn-danger" @click="show">btn</button>
		<button class="btn btn-danger" @click="showshow">btn</button>
	</div>
  </div>
</template>

<script>
import { Mixed } from './mixed.js';
import { mixTwo } from './mixed.vue';
export default {
	mixins:[Mixed,mixTwo],
	filters:{
		endStr(value){
			return value + Math.random();
		}
	},
	data(){
		return {
			one:'one',
			two:'two'
		}
	},
	computed:{
		ones(){
			return this.one + Math.random();
		}
	}
}
</script>

<style>


</style>
