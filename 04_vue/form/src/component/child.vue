<template>
	<div class="root">
		<slot></slot>
		<div>
			<slot name="ee"></slot>
		</div>
		{{ a }}
		<button @click="come(555)">333</button>
		<button @click="em">444</button>
		<button @click="g">g</button>
	</div>	
</template>

<script>
	import { eventbus } from '../main.js';

	export default {
		props:{
			message:{
				default:"hehe"
			},
			come:{},
		},
		computed:{
			change(){
				return this.message + " ,the option of type";
			}
		},
		data(){
			return {
				a:this.message
			}
		},
		methods:{
			k(){
				return 2;
			},
			em(){
				this.$emit('back',777);
			},
			g(){
				eventbus.$emit('qqq','qqq');
			}
		}
	}
</script>

<style>
	
</style>